import type React from "react"
import HomePageNL from "./page-nl"
import HomePageEN from "./page-en"
import HomePageES from "./page-es"
import HomePageFR from "./page-fr"
import HomePageDE from "./page-de"

export default function HomePage({ params }: { params: { locale: string } }) {
  // Render appropriate version based on locale
  switch (params.locale) {
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