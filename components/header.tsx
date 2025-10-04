"use client"

import { Button } from "@/components/ui/button"
import { Apple, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDownloadOptions, setShowDownloadOptions] = useState(false)
  const downloadMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
        setShowDownloadOptions(false)
      }
    }

    if (showDownloadOptions) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [showDownloadOptions])

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/zenvy-logo.png" alt="Zenvy" className="h-10 w-10 rounded-lg" />
          <span className="text-2xl font-bold text-foreground">Zenvy</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Blog
          </Link>
          <Link
            href="/support"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Support
          </Link>
          <Link
            href="/legal"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Legal
          </Link>
        </div>
        <div className="hidden md:block relative" ref={downloadMenuRef}>
          <Button
            onClick={() => setShowDownloadOptions(!showDownloadOptions)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 hover:scale-105 text-base px-6 py-5"
          >
            Get Started
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
                <span className="font-medium">Download for iOS</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=nl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowDownloadOptions(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
              >
                <Smartphone className="h-5 w-5" />
                <span className="font-medium whitespace-nowrap">Download for Android</span>
              </a>
            </div>
          )}
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
              href="/features"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/legal"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Legal
            </Link>
            <div className="pt-3 space-y-2">
              <Button
                asChild
                className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="https://apps.apple.com/us/app/zenvy/id6744935437" target="_blank" rel="noopener noreferrer">
                  <Apple className="h-5 w-5" />
                  Download for iOS
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
                  Download for Android
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
