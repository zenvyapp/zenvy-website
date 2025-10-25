import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ErrorBoundary } from "@/components/error-boundary"
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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  return (
    <html lang={locale || 'en'}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
