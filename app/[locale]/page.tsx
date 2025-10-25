import type React from "react"
import HomePageNL from "./page-nl"
import HomePageEN from "./page-en"

export default function HomePage({ params }: { params: { locale: string } }) {
  // Render Dutch version if locale is 'nl'
  if (params.locale === 'nl') {
    return <HomePageNL />
  }
  
  // Default to English version
  return <HomePageEN />
}