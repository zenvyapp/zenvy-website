import type React from "react"
import type { Metadata } from "next"
import { ErrorBoundary } from "@/components/error-boundary"
import Script from "next/script"

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
    <>
      {/* Cookieyes banner script - lazy loaded for better performance */}
      <Script
        id="cookieyes"
        strategy="lazyOnload"
        src="https://cdn-cookieyes.com/client_data/2b513de12ac8b2982910c1b8/script.js"
      />
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </>
  )
}
