import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Handle root path redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }
  
  // Handle paths without locale (e.g., /features -> /en/features)
  if (!pathname.startsWith('/en') && !pathname.startsWith('/nl')) {
    // Check if it's a known page path
    const knownPaths = ['/features', '/pricing', '/about', '/support', '/legal', '/blog']
    if (knownPaths.some(path => pathname.startsWith(path))) {
      return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
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
