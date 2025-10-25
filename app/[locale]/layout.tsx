import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Zenvy - Transform Screen Time Into Growth Time",
  description:
    "Zenvy helps families build healthy digital habits through rewards, challenges, and learning. Make screen time meaningful for your family.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/zenvy-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/zenvy-logo.png",
  },
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={params.locale}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
