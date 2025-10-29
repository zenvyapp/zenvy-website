"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Apple,
  Smartphone,
  Sparkles,
  Trophy,
  Coins,
  Users,
  Brain,
  Target,
  Award,
  CheckCircle2,
  Circle,
  Gift,
  ChevronLeft,
  ChevronRight,
  Zap,
  Star,
} from "lucide-react"
import { useEffect, useRef, useState, Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { EarlyReleasePopup } from "@/components/early-release-popup"
import Image from "next/image"

export default function HomePageDE() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const screens = [
    { id: "family", name: "Familien-Dashboard" },
    { id: "tasks", name: "Aufgaben" },
    { id: "rewards", name: "Belohnungen" },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [screens.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right
      setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length)
    }
  }

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length)
  }

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoadingSpinner size="lg" className="mx-auto" />}>
        <Header />
      </Suspense>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium border border-secondary/30">
                <Sparkles className="h-4 w-4 text-secondary" />
                Bildschirmzeit in Wachstumszeit verwandeln
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight break-words">
                Machen Sie Bildschirmzeit <span className="text-primary">Bedeutsam</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Zenvy hilft Familien dabei, gesunde digitale Gewohnheiten durch Belohnungen, Herausforderungen und Lernen aufzubauen. 
                Verwandeln Sie Bildschirmzeit in eine Gelegenheit für Wachstum, Verantwortung und familiäre Verbindung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a href="https://apps.apple.com/us/app/zenvy/id6744935437" target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5" />
                    Für iOS herunterladen
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="h-5 w-5" />
                    Für Android herunterladen
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-accent border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Treten Sie 10.000+ Familien bei</div>
                  <div className="text-muted-foreground">Bessere Gewohnheiten aufbauen</div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />

                <div className="absolute top-6 sm:top-10 -left-2 sm:-left-4 z-40 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Coins className="h-4 w-4 sm:h-6 sm:w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold">+50 ZenCoins</div>
                      <div className="text-xs text-muted-foreground">Aufgabe abgeschlossen!</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-16 sm:bottom-20 -right-2 sm:-right-4 z-40 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg animate-float">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Trophy className="h-4 w-4 sm:h-6 sm:w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold">Herausforderung Gewonnen!</div>
                      <div className="text-xs text-muted-foreground">+30 Minuten verdient</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={prevScreen}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-card border border-border rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-muted transition-colors"
                  aria-label="Vorheriger Bildschirm"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextScreen}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-card border border-border rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-muted transition-colors"
                  aria-label="Nächster Bildschirm"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <div
                  className="relative z-30 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3.5rem] p-2 shadow-2xl animate-float aspect-[9/19]"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative bg-background rounded-[3rem] overflow-hidden border-4 border-gray-900 h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-50" />

                    <div className="bg-primary/5 px-6 py-4 flex items-center justify-between text-xs relative z-40">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-foreground/30 rounded-sm relative">
                          <div className="absolute inset-0.5 bg-foreground/30" />
                        </div>
                      </div>
                    </div>

                    <div className="relative h-full overflow-hidden">
                      {/* Family Dashboard Screen */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${currentScreen === 0 ? "translate-x-0 opacity-100" : currentScreen < 0 ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"}`}
                      >
                        <div className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-background h-full overflow-hidden">
                          <div className="text-center space-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                              <Trophy className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Familien-Rangliste</h3>
                            <p className="text-xs text-muted-foreground">Bildschirmzeit Diese Woche</p>
                          </div>

                          <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-xl border border-secondary/30">
                              <div className="relative">
                                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                                  👨
                                </div>
                                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary flex items-center justify-center">
                                  <Award className="h-3 w-3 text-secondary-foreground" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm">Papa</div>
                                <div className="text-xs text-muted-foreground">2.5h Bildschirmzeit</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-secondary text-sm">+100</div>
                                <div className="text-xs text-muted-foreground">ZenCoins</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-2 rounded-xl">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                👩
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm">Mama</div>
                                <div className="text-xs text-muted-foreground">3.2h Bildschirmzeit</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-primary text-sm">+75</div>
                                <div className="text-xs text-muted-foreground">ZenCoins</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-2 rounded-xl">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                👧
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm">Emma</div>
                                <div className="text-xs text-muted-foreground">4.1h Bildschirmzeit</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-primary text-sm">+50</div>
                                <div className="text-xs text-muted-foreground">ZenCoins</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-2 rounded-xl">
                              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                                👦
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm">Max</div>
                                <div className="text-xs text-muted-foreground">5.8h Bildschirmzeit</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-muted-foreground text-sm">+25</div>
                                <div className="text-xs text-muted-foreground">ZenCoins</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Nächster Neustart</div>
                            <div className="font-bold text-secondary">3 Tage</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute inset-0 transition-all duration-500 ${currentScreen === 1 ? "translate-x-0 opacity-100" : currentScreen < 1 ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"}`}
                      >
                        <div className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-background h-full overflow-hidden">
                          <div className="text-center space-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                              <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Meine Aufgaben</h3>
                            <p className="text-xs text-muted-foreground">Abschließen um ZenCoins zu verdienen</p>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-card border border-border rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">Zimmer aufräumen</div>
                                  <div className="text-xs text-muted-foreground mb-2">
                                    Bett machen, Schreibtisch organisieren, Staubsaugen
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Coins className="h-4 w-4 text-secondary" />
                                    <span className="text-sm font-bold text-secondary">+50 ZenCoins</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">Hausaufgaben machen</div>
                                  <div className="text-xs text-muted-foreground mb-2">
                                    Mathematik-Übungen und Lesen
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Coins className="h-4 w-4 text-secondary" />
                                    <span className="text-sm font-bold text-secondary">+75 ZenCoins</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1 line-through text-muted-foreground">
                                    Beim Abwasch helfen
                                  </div>
                                  <div className="text-xs text-muted-foreground mb-2">Geschirrspüler nach dem Abendessen einräumen</div>
                                  <div className="flex items-center gap-2">
                                    <Coins className="h-4 w-4 text-secondary" />
                                    <span className="text-sm font-bold text-secondary">+30 ZenCoins</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-card border border-border rounded-xl p-4 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Heute Verdient</div>
                            <div className="font-bold text-2xl text-secondary">30 ZenCoins</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute inset-0 transition-all duration-500 ${currentScreen === 2 ? "translate-x-0 opacity-100" : currentScreen < 2 ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"}`}
                      >
                        <div className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-background h-full overflow-hidden">
                          <div className="text-center space-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10">
                              <Gift className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold">Belohnungs-Shop</h3>
                            <p className="text-xs text-muted-foreground">Wählen Sie Ihre Belohnungen</p>
                          </div>

                          <div className="bg-card border border-border rounded-xl p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-muted-foreground">Ihr Guthaben</span>
                              <div className="flex items-center gap-1">
                                <Coins className="h-4 w-4 text-secondary" />
                                <span className="font-bold text-secondary">245 ZenCoins</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-card border border-border rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <span className="text-2xl">🎮</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">Extra Spielzeit</div>
                                  <div className="text-xs text-muted-foreground mb-2">+30 Minuten</div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-muted rounded-full h-2">
                                      <div className="bg-secondary rounded-full h-2" style={{ width: "81%" }} />
                                    </div>
                                    <span className="text-xs font-medium">245/300</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <span className="text-2xl">🍕</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">Pizza-Abend</div>
                                  <div className="text-xs text-muted-foreground mb-2">Abendessen wählen</div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-muted rounded-full h-2">
                                      <div className="bg-secondary rounded-full h-2" style={{ width: "49%" }} />
                                    </div>
                                    <span className="text-xs font-medium">245/500</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <span className="text-2xl">🎬</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">Film-Abend</div>
                                  <div className="text-xs text-muted-foreground mb-2">Familienfilm auswählen</div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-muted rounded-full h-2">
                                      <div className="bg-secondary rounded-full h-2" style={{ width: "61%" }} />
                                    </div>
                                    <span className="text-xs font-medium">245/400</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                  {screens.map((screen, index) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentScreen(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        currentScreen === index ? "w-6 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-muted-foreground/30"
                      }`}
                      aria-label={`Gehe zu ${screen.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Alles Was Ihre Familie Braucht</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Zenvy kombiniert intelligente Überwachung, attraktive Belohnungen und Bildungsherausforderungen, um eine 
              positive Bildschirmzeit-Erfahrung zu schaffen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Familien-Dashboard",
                description:
                  "Sehen und vergleichen Sie die Bildschirmzeit aller Familienmitglieder in einem schönen und leicht verständlichen Dashboard.",
                color: "primary",
              },
              {
                icon: Target,
                title: "Aufgaben-Management",
                description:
                  "Weisen Sie Kindern Aufgaben und Pflichten zu und helfen Sie ihnen, Verantwortung zu lernen, während sie Belohnungen verdienen.",
                color: "secondary",
              },
              {
                icon: Coins,
                title: "ZenCoins Belohnungen",
                description:
                  "Kinder verdienen ZenCoins durch das Abschließen von Aufgaben und können sie im Belohnungsshop für Dinge ausgeben, die sie lieben.",
                color: "secondary",
              },
              {
                icon: Brain,
                title: "Wissens-Herausforderungen",
                description:
                  "Quiz und Bildungsherausforderungen, die Lernen spaßig machen, während man zusätzliche Bildschirmzeit verdient.",
                color: "primary",
              },
              {
                icon: Trophy,
                title: "Achievement-System",
                description: "Feiern Sie Fortschritte mit Achievements und Meilensteinen, die kontinuierliches Wachstum motivieren.",
                color: "secondary",
              },
              {
                icon: Sparkles,
                title: "Positiver Ansatz",
                description:
                  "Konzentrieren Sie sich auf Belohnungen und Lernen statt auf Einschränkungen und schaffen Sie eine gesündere Beziehung zur Technologie.",
                color: "primary",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-12 w-12 rounded-xl ${
                    feature.color === "secondary" ? "bg-secondary/20" : "bg-primary/10"
                  } flex items-center justify-center mb-4 group-hover:${
                    feature.color === "secondary" ? "bg-secondary/30" : "bg-primary/20"
                  } transition-colors`}
                >
                  <feature.icon
                    className={`h-6 w-6 ${feature.color === "secondary" ? "text-secondary" : "text-primary"}`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Einfach, Effektiv, Spaßig</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Mit Zenvy zu beginnen ist einfach. So funktioniert es.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: Users,
                title: "Familie Einrichten",
                description:
                  "Erstellen Sie Profile für jedes Familienmitglied und passen Sie die Bildschirmzeit-Ziele an, die für Ihr Zuhause funktionieren.",
              },
              {
                step: "02",
                icon: Zap,
                title: "Aufgaben und Belohnungen Zuweisen",
                description:
                  "Erstellen Sie Aufgaben, richten Sie den Belohnungsshop mit Artikeln ein, die Ihre Kinder lieben, und lassen Sie sie ZenCoins verdienen.",
              },
              {
                step: "03",
                icon: Star,
                title: "Wachsen Sehen",
                description:
                  "Überwachen Sie den Fortschritt, feiern Sie Erfolge und beobachten Sie, wie Ihre Familie gemeinsam gesündere digitale Gewohnheiten aufbaut.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl font-bold text-secondary/80">{item.step}</div>
                  <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                {index < 2 && <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Mehr Als Nur Bildschirmzeit-Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Zenvy transformiert, wie Familien mit Technologie interagieren. Anstatt ständiger Kämpfe 
                um Bildschirmzeit schafft es eine Umgebung des Lernens, Wachstums und positiver Verstärkung.
              </p>
              <div className="space-y-4">
                {[
                  "Baut Verantwortung und Unabhängigkeit bei Kindern auf",
                  "Stärkt familiäre Kommunikation und Zusammenarbeit",
                  "Verwandelt Bildschirmzeit in Lernmöglichkeiten",
                  "Schafft gesunde digitale Gewohnheiten fürs Leben",
                  "Reduziert Konflikte und Stress rund um Technologienutzung",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">Familien-Dashboard</div>
                      <div className="text-sm text-muted-foreground">Verfolgen Sie den Fortschritt aller zusammen</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">Achievements und Belohnungen</div>
                      <div className="text-sm text-muted-foreground">Feiern Sie Meilensteine und gewinnen Sie Preise</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">Lern-Herausforderungen</div>
                      <div className="text-sm text-muted-foreground">Quiz und Bildungsaktivitäten</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-secondary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
                Bereit, Bildschirmzeit zu Transformieren?
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
                Treten Sie Tausenden von Familien bei, die mit Zenvy gesündere digitale Gewohnheiten aufbauen. 
                Laden Sie jetzt herunter und beginnen Sie Ihre Reise heute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-primary text-primary-foreground hover:bg-foreground hover:text-background gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a href="https://apps.apple.com/us/app/zenvy/id6744935437" target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5" />
                    Für iOS herunterladen
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-primary text-primary-foreground hover:bg-foreground hover:text-background gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="h-5 w-5" />
                    Für Android herunterladen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EarlyReleasePopup locale="de" />
    </div>
  )
}
