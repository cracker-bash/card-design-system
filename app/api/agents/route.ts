import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const AGENTS_FILE = path.join(DATA_DIR, "agents.json")

async function ensureDataDir() {
  try {
    await fs.promises.mkdir(DATA_DIR, { recursive: true })
  } catch {}
}

async function readAgents() {
  try {
    const raw = await fs.promises.readFile(AGENTS_FILE, "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeAgents(agents: any[]) {
  await ensureDataDir()
  await fs.promises.writeFile(AGENTS_FILE, JSON.stringify(agents, null, 2), "utf-8")
}

export async function GET() {
  try {
    const agents = await readAgents()
    return NextResponse.json({ ok: true, agents })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const agents = await readAgents()
    const id = Date.now().toString()
    const newAgent = { id, ...body }
    agents.push(newAgent)
    await writeAgents(agents)
    return NextResponse.json({ ok: true, agent: newAgent })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url)
    const id = url.searchParams.get("id")
    if (!id) return NextResponse.json({ ok: false, error: "missing id" }, { status: 400 })
    const agents = await readAgents()
    const next = agents.filter((a: any) => a.id !== id)
    await writeAgents(next)
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
