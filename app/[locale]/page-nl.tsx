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
import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePageNL() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const screens = [
    { id: "family", name: "Familie Dashboard" },
    { id: "tasks", name: "Taken" },
    { id: "rewards", name: "Beloningen" },
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

  // Always render the same structure to avoid hydration mismatch

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                Transformeer Schermtijd in Groeitijd
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight break-words">
                Maak Schermtijd <span className="text-primary">Betekenisvol</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Zenvy helpt gezinnen gezonde digitale gewoonten op te bouwen door beloningen, uitdagingen en leren. 
                Verander schermtijd in een kans voor groei, verantwoordelijkheid en gezinsverbinding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a href="https://apps.apple.com/us/app/zenvy/id6744935437" target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5" />
                    Download voor iOS
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=nl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="h-5 w-5" />
                    Download voor Android
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
                  <div className="font-semibold text-foreground">Sluit je aan bij 10.000+ gezinnen</div>
                  <div className="text-muted-foreground">Die betere gewoonten opbouwen</div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />

                <div className="absolute top-10 -left-4 z-40 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Coins className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">+50 ZenCoins</div>
                      <div className="text-xs text-muted-foreground">Taak voltooid!</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 -right-4 z-40 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Uitdaging Gewonnen!</div>
                      <div className="text-xs text-muted-foreground">+30 minuten verdiend</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={prevScreen}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-card border border-border rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
                  aria-label="Vorige scherm"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextScreen}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-card border border-border rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
                  aria-label="Volgende scherm"
                >
                  <ChevronRight className="h-5 w-5" />
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
                            <h3 className="text-xl font-bold">Familie Ranglijst</h3>
                            <p className="text-xs text-muted-foreground">Deze Week's Schermtijd</p>
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
                                <div className="text-xs text-muted-foreground">2.5u schermtijd</div>
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
                                <div className="text-xs text-muted-foreground">3.2u schermtijd</div>
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
                                <div className="text-xs text-muted-foreground">4.1u schermtijd</div>
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
                                <div className="text-xs text-muted-foreground">5.8u schermtijd</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-muted-foreground text-sm">+25</div>
                                <div className="text-xs text-muted-foreground">ZenCoins</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Volgende Reset</div>
                            <div className="font-bold text-secondary">3 dagen</div>
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
                            <h3 className="text-xl font-bold">Mijn Taken</h3>
                            <p className="text-xs text-muted-foreground">Voltooi om ZenCoins te verdienen</p>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-card border border-border rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">Ruim je kamer op</div>
                                  <div className="text-xs text-muted-foreground mb-2">
                                    Maak bed op, organiseer bureau, stofzuig vloer
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
                                  <div className="font-semibold text-sm mb-1">Maak huiswerk</div>
                                  <div className="text-xs text-muted-foreground mb-2">
                                    Wiskunde oefeningen en leesopdracht
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
                                    Help met afwassen
                                  </div>
                                  <div className="text-xs text-muted-foreground mb-2">Vul vaatwasser na het avondeten</div>
                                  <div className="flex items-center gap-2">
                                    <Coins className="h-4 w-4 text-secondary" />
                                    <span className="text-sm font-bold text-secondary">+30 ZenCoins</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-card border border-border rounded-xl p-4 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Totaal Verdiend Vandaag</div>
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
                            <h3 className="text-xl font-bold">Beloningenwinkel</h3>
                            <p className="text-xs text-muted-foreground">Kies je beloningen</p>
                          </div>

                          <div className="bg-card border border-border rounded-xl p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-muted-foreground">Je Saldo</span>
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
                                  <div className="font-semibold text-sm mb-1">Extra Game Tijd</div>
                                  <div className="text-xs text-muted-foreground mb-2">+30 minuten</div>
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
                                  <div className="font-semibold text-sm mb-1">Pizza Avond</div>
                                  <div className="text-xs text-muted-foreground mb-2">Kies avondeten</div>
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
                                  <div className="font-semibold text-sm mb-1">Film Avond</div>
                                  <div className="text-xs text-muted-foreground mb-2">Familie film keuze</div>
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

                <div className="flex justify-center gap-2 mt-6">
                  {screens.map((screen, index) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentScreen(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentScreen === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                      }`}
                      aria-label={`Ga naar ${screen.name}`}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Alles Wat Je Gezin Nodig Heeft</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Zenvy combineert slimme monitoring, boeiende beloningen en educatieve uitdagingen om een positieve 
              schermtijd ervaring te creëren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Familie Dashboard",
                description:
                  "Bekijk en vergelijk schermtijd van alle familieleden in één mooi, begrijpelijk dashboard.",
                color: "primary",
              },
              {
                icon: Target,
                title: "Takenbeheer",
                description:
                  "Wijs taken en klusjes toe aan kinderen, help ze verantwoordelijkheid te leren terwijl ze beloningen verdienen.",
                color: "secondary",
              },
              {
                icon: Coins,
                title: "ZenCoins Beloningen",
                description:
                  "Kinderen verdienen ZenCoins voor het voltooien van taken en kunnen ze uitgeven in de beloningenwinkel voor dingen die ze leuk vinden.",
                color: "secondary",
              },
              {
                icon: Brain,
                title: "Kennis Uitdagingen",
                description:
                  "Educatieve quizzen en uitdagingen die leren leuk maken terwijl je extra schermtijd verdient.",
                color: "primary",
              },
              {
                icon: Trophy,
                title: "Prestatie Systeem",
                description: "Vier vooruitgang met prestaties en mijlpalen die voortdurende groei motiveren.",
                color: "secondary",
              },
              {
                icon: Sparkles,
                title: "Positieve Aanpak",
                description:
                  "Focus op beloningen en leren in plaats van beperkingen, creëer een gezondere relatie met technologie.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Eenvoudig, Effectief, Leuk</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Beginnen met Zenvy is eenvoudig. Zo werkt het.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: Users,
                title: "Stel Je Gezin In",
                description:
                  "Maak profielen voor elk familielid en pas schermtijd doelen aan die werken voor jouw huishouden.",
              },
              {
                step: "02",
                icon: Zap,
                title: "Wijs Taken & Beloningen Toe",
                description:
                  "Maak taken, zet de beloningenwinkel op met items die je kinderen leuk vinden, en laat ze beginnen met het verdienen van ZenCoins.",
              },
              {
                step: "03",
                icon: Star,
                title: "Zie Ze Groeien",
                description:
                  "Monitor vooruitgang, vier prestaties, en zie hoe je gezin gezondere digitale gewoonten opbouwt samen.",
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
                Meer Dan Alleen Schermtijd Beheer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Zenvy transformeert de manier waarop gezinnen omgaan met technologie. In plaats van constante 
                gevechten over schermtijd, creëer een omgeving van leren, groei en positieve versterking.
              </p>
              <div className="space-y-4">
                {[
                  "Bouw verantwoordelijkheid en zelfstandigheid op bij kinderen",
                  "Versterk gezinscommunicatie en samenwerking",
                  "Verander schermtijd in leermogelijkheden",
                  "Creëer gezonde digitale gewoonten die een leven lang meegaan",
                  "Verminder conflicten en stress rond technologiegebruik",
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
                      <div className="font-semibold text-foreground mb-1">Familie Dashboard</div>
                      <div className="text-sm text-muted-foreground">Volg ieders vooruitgang samen</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">Prestaties & Beloningen</div>
                      <div className="text-sm text-muted-foreground">Vier mijlpalen en verdien prijzen</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">Leer Uitdagingen</div>
                      <div className="text-sm text-muted-foreground">Educatieve quizzen en activiteiten</div>
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
                Klaar om Schermtijd te Transformeren?
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
                Sluit je aan bij duizenden gezinnen die gezondere digitale gewoonten opbouwen met Zenvy. 
                Download nu en begin vandaag je reis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-primary text-primary-foreground hover:bg-foreground hover:text-background gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a href="https://apps.apple.com/us/app/zenvy/id6744935437" target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5" />
                    Download voor iOS
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-56 bg-primary text-primary-foreground hover:bg-foreground hover:text-background gap-2 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zenvy.zenvyapp&hl=nl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="h-5 w-5" />
                    Download voor Android
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
