import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const AGENTS_FILE = path.join(process.cwd(), "data", "agents.json")

async function readAgents() {
  try {
    const raw = await fs.promises.readFile(AGENTS_FILE, "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { phone, password } = body
    const normalize = (p = "") => p.replace(/\D/g, "")

    const adminPhone = (process.env.ADMIN_PHONE || "0744427017").replace(/\D/g, "")
    const adminPassword = process.env.ADMIN_PASSWORD || "nyanda1316"

    if (normalize(phone) === adminPhone && password === adminPassword) {
      return NextResponse.json({ ok: true, user: { id: "admin", name: "NNYAMIZI STATIONERY", phone: phone, email: "nnyamizi@example.com", avatar: "/user-avatar-profile.png" } })
    }

    const agents = await readAgents()
    const match = agents.find((a: any) => (a.phone || "").replace(/\D/g, "") === normalize(phone) && a.password === password)
    if (match) {
      return NextResponse.json({ ok: true, user: { id: match.id, name: match.name, phone: match.phone, email: match.email || "", avatar: match.avatar || "/user-avatar-profile.png" } })
    }

    return NextResponse.json({ ok: false }, { status: 401 })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
