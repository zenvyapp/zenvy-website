import type React from "react"
import HomePageNL from "./page-nl"
import HomePageEN from "./page-en"
import HomePageES from "./page-es"
import HomePageFR from "./page-fr"
import HomePageDE from "./page-de"

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // Render appropriate version based on locale
  switch (locale || 'en') {
    case 'nl':
      return <HomePageNL />
    case 'es':
      return <HomePageES />
    case 'fr':
      return <HomePageFR />
    case 'de':
      return <HomePageDE />
    default:
      return <HomePageEN />
  }
}