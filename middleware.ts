import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Function to detect preferred language
  const getPreferredLocale = (request: NextRequest): string => {
    // Check for explicit locale in URL first
    if (pathname.startsWith('/en') || pathname.startsWith('/nl')) {
      return pathname.startsWith('/nl') ? 'nl' : 'en'
    }
    
    // Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
      // Look for Dutch language indicators
      const dutchIndicators = ['nl', 'nl-', 'nederlands', 'dutch']
      const hasDutch = dutchIndicators.some(indicator => 
        acceptLanguage.toLowerCase().includes(indicator)
      )
      
      if (hasDutch) {
        return 'nl'
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
  if (!pathname.startsWith('/en') && !pathname.startsWith('/nl')) {
    // Check if it's a known page path
    const knownPaths = ['/features', '/pricing', '/about', '/support', '/legal', '/blog']
    if (knownPaths.some(path => pathname.startsWith(path))) {
      const preferredLocale = getPreferredLocale(request)
      return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url))
    }
  }
}

export const config = {
  matcher: [
    '/',
    '/features',
    '/pricing', 
    '/about',
    '/support',
    '/legal',
    '/blog',
  ],
}
