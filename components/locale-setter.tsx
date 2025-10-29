"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function LocaleSetter() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Extract locale from pathname (e.g., /en/features -> en)
    const localeMatch = pathname.match(/^\/([a-z]{2})/)
    const locale = localeMatch ? localeMatch[1] : 'en'
    
    // Set lang attribute on html element
    document.documentElement.lang = locale
  }, [pathname])
  
  return null
}

