import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Great_Vibes, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AppProvider } from "@/lib/context/app-context"
import { Toaster } from "@/components/ui/toaster"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script" })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "nyamiziDigitals - Digital Card Design Platform",
  description:
    "Create beautiful digital cards for weddings, events, and celebrations. Free card design and SMS sharing platform.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
