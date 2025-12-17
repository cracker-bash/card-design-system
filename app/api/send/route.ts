import { NextResponse } from "next/server"
import fetch from "node-fetch"

const TWILIO_ACCOUNT = process.env.TWILIO_ACCOUNT_SID
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_FROM = process.env.TWILIO_FROM_NUMBER

async function sendViaTwilioSms(to: string, body: string) {
  if (!TWILIO_ACCOUNT || !TWILIO_TOKEN || !TWILIO_FROM) throw new Error("Twilio not configured")
  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT}/Messages.json`
  const params = new URLSearchParams()
  params.append("From", TWILIO_FROM)
  params.append("To", to)
  params.append("Body", body)

  const res = await fetch(url, { method: "POST", body: params, headers: { Authorization: `Basic ${Buffer.from(`${TWILIO_ACCOUNT}:${TWILIO_TOKEN}`).toString("base64")}` } })
  if (!res.ok) throw new Error(`Twilio SMS failed: ${await res.text()}`)
  return res.json()
}

async function sendViaTwilioWhatsApp(to: string, body: string) {
  if (!TWILIO_ACCOUNT || !TWILIO_TOKEN || !TWILIO_FROM) throw new Error("Twilio not configured")
  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT}/Messages.json`
  const params = new URLSearchParams()
  params.append("From", `whatsapp:${TWILIO_FROM}`)
  params.append("To", `whatsapp:${to}`)
  params.append("Body", body)

  const res = await fetch(url, { method: "POST", body: params, headers: { Authorization: `Basic ${Buffer.from(`${TWILIO_ACCOUNT}:${TWILIO_TOKEN}`).toString("base64")}` } })
  if (!res.ok) throw new Error(`Twilio WhatsApp failed: ${await res.text()}`)
  return res.json()
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { recipients, message, channel = "sms" } = body
    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json({ ok: false, error: "no recipients" }, { status: 400 })
    }

    const results: any[] = []
    for (const r of recipients) {
      try {
        if (channel === "whatsapp") {
          if (TWILIO_ACCOUNT) {
            const res = await sendViaTwilioWhatsApp(r.phone.replace(/\D/g, ""), message)
            results.push({ to: r.phone, ok: true, res })
          } else {
            // fallback: open wa.me link can't be done from server — simulate
            results.push({ to: r.phone, ok: false, error: "Twilio not configured" })
          }
        } else {
          if (TWILIO_ACCOUNT) {
            const res = await sendViaTwilioSms(r.phone.replace(/\D/g, ""), message)
            results.push({ to: r.phone, ok: true, res })
          } else {
            results.push({ to: r.phone, ok: false, error: "Twilio not configured" })
          }
        }
      } catch (err) {
        results.push({ to: r.phone, ok: false, error: String(err) })
      }
    }

    return NextResponse.json({ ok: true, results })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
