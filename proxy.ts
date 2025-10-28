import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Supported locales
  const locales = ['en', 'nl', 'es', 'fr', 'de']
  
  // Function to detect preferred language
  const getPreferredLocale = (request: NextRequest): string => {
    // Check for explicit locale in URL first
    const pathLocale = locales.find(locale => pathname.startsWith(`/${locale}`))
    if (pathLocale) {
      return pathLocale
    }
    
    // Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
      const lang = acceptLanguage.toLowerCase()
      
      // Check for all supported locales
      if (lang.includes('nl') || lang.includes('nederlands') || lang.includes('dutch')) {
        return 'nl'
      }
      if (lang.includes('es') || lang.includes('español') || lang.includes('spanish')) {
        return 'es'
      }
      if (lang.includes('fr') || lang.includes('français') || lang.includes('french')) {
        return 'fr'
      }
      if (lang.includes('de') || lang.includes('deutsch') || lang.includes('german')) {
        return 'de'
      }
    }
    
    // Default to English
    return 'en'
  }
  
  // Handle root path redirect with language detection
  if (pathname === '/') {
    const preferredLocale = getPreferredLocale(request)
    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url))
  }
  
  // Handle paths without locale (e.g., /features -> /en/features or /nl/features)
  const hasLocale = locales.some(locale => pathname.startsWith(`/${locale}`))
  if (!hasLocale) {
    // Check if it's a known page path
    const knownPaths = ['/features', '/pricing', '/about', '/support', '/legal', '/blog', '/privacy', '/terms']
    if (knownPaths.some(path => pathname.startsWith(path))) {
      const preferredLocale = getPreferredLocale(request)
      return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url))
    }
  }
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|zenvy-logo.png|abstract-geometric-flow.png).*)',
  ],
}
