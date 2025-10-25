"use client"

import { Button } from "@/components/ui/button"
import { Apple, Smartphone, Menu, X, Globe } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDownloadOptions, setShowDownloadOptions] = useState(false)
  const [showLanguageOptions, setShowLanguageOptions] = useState(false)
  const downloadMenuRef = useRef<HTMLDivElement>(null)
  const languageMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
        setShowDownloadOptions(false)
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguageOptions(false)
      }
    }

    if (showDownloadOptions || showLanguageOptions) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [showDownloadOptions, showLanguageOptions])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest("header")) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [mobileMenuOpen])

  const switchLanguage = (locale: string) => {
    const currentPath = pathname
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPath)
    setShowLanguageOptions(false)
  }

  const getCurrentLocale = () => {
    const path = pathname
    const localeMatch = path.match(/^\/([a-z]{2})/)
    return localeMatch ? localeMatch[1] : 'en'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={`/${getCurrentLocale()}`} className="flex items-center gap-2">
          <img src="/zenvy-logo.png" alt="Zenvy" className="h-10 w-10 rounded-lg" />
          <span className="text-2xl font-bold text-foreground">Zenvy</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={`/${getCurrentLocale()}/features`}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            {getCurrentLocale() === 'nl' ? 'Functies' : 'Features'}
          </Link>
          <Link
            href={`/${getCurrentLocale()}/pricing`}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            {getCurrentLocale() === 'nl' ? 'Prijzen' : 'Pricing'}
          </Link>
          <Link
            href={`/${getCurrentLocale()}/blog`}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Blog
          </Link>
          <Link
            href={`/${getCurrentLocale()}/about`}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            {getCurrentLocale() === 'nl' ? 'Over' : 'About'}
          </Link>
          <Link
            href={`/${getCurrentLocale()}/support`}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            {getCurrentLocale() === 'nl' ? 'Ondersteuning' : 'Support'}
          </Link>
          <Link
            href={`/${getCurrentLocale()}/legal`}
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            {getCurrentLocale() === 'nl' ? 'Juridisch' : 'Legal'}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative" ref={languageMenuRef}>
            <Button
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
              variant="ghost"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform gap-2"
            >
              <Globe className="h-4 w-4" />
              {getCurrentLocale().toUpperCase()}
            </Button>
            {showLanguageOptions && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`w-full text-left px-4 py-3 hover:bg-muted transition-colors ${
                    getCurrentLocale() === 'en' ? 'bg-muted' : ''
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => switchLanguage('nl')}
                  className={`w-full text-left px-4 py-3 hover:bg-muted transition-colors ${
                    getCurrentLocale() === 'nl' ? 'bg-muted' : ''
                  }`}
                >
                  Nederlands
                </button>
              </div>
            )}
          </div>
          <div className="relative" ref={downloadMenuRef}>
            <Button
            onClick={() => setShowDownloadOptions(!showDownloadOptions)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 hover:scale-105 text-base px-6 py-5"
          >
            {getCurrentLocale() === 'nl' ? 'Aan de slag' : 'Get Started'}
          </Button>
          {showDownloadOptions && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              <a
                href="https://apps.apple.com/us/app/zenvy/id6744935437"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowDownloadOptions(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
              >
                <Apple className="h-5 w-5" />
                <span className="font-medium">{getCurrentLocale() === 'nl' ? 'Download voor iOS' : 'Download for iOS'}</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=nl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowDownloadOptions(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
              >
                <Smartphone className="h-5 w-5" />
                <span className="font-medium whitespace-nowrap">{getCurrentLocale() === 'nl' ? 'Download voor Android' : 'Download for Android'}</span>
              </a>
            </div>
          )}
          </div>
        </div>
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href={`/${getCurrentLocale()}/features`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getCurrentLocale() === 'nl' ? 'Functies' : 'Features'}
            </Link>
            <Link
              href={`/${getCurrentLocale()}/pricing`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getCurrentLocale() === 'nl' ? 'Prijzen' : 'Pricing'}
            </Link>
            <Link
              href={`/${getCurrentLocale()}/blog`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={`/${getCurrentLocale()}/about`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getCurrentLocale() === 'nl' ? 'Over' : 'About'}
            </Link>
            <Link
              href={`/${getCurrentLocale()}/support`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getCurrentLocale() === 'nl' ? 'Ondersteuning' : 'Support'}
            </Link>
            <Link
              href={`/${getCurrentLocale()}/legal`}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getCurrentLocale() === 'nl' ? 'Juridisch' : 'Legal'}
            </Link>
            <div className="pt-3 border-t border-border">
              <div className="text-sm font-medium text-muted-foreground mb-2">{getCurrentLocale() === 'nl' ? 'Taal' : 'Language'}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    switchLanguage('en')
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    getCurrentLocale() === 'en' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    switchLanguage('nl')
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    getCurrentLocale() === 'nl' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Nederlands
                </button>
              </div>
            </div>
            <div className="pt-3 space-y-2">
              <Button
                asChild
                className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="https://apps.apple.com/us/app/zenvy/id6744935437" target="_blank" rel="noopener noreferrer">
                  <Apple className="h-5 w-5" />
                  {getCurrentLocale() === 'nl' ? 'Download voor iOS' : 'Download for iOS'}
                </a>
              </Button>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Smartphone className="h-5 w-5" />
                  {getCurrentLocale() === 'nl' ? 'Download voor Android' : 'Download for Android'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
