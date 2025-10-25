"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BlogPage() {
  const pathname = usePathname()
  
  const getCurrentLocale = () => {
    const path = pathname
    const localeMatch = path.match(/^\/([a-z]{2})/)
    return localeMatch ? localeMatch[1] : 'en'
  }
  
  const isDutch = getCurrentLocale() === 'nl'
  const isSpanish = getCurrentLocale() === 'es'
  const isFrench = getCurrentLocale() === 'fr'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Zenvy <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            {isDutch 
              ? 'Tips, inzichten en verhalen over het opbouwen van gezonde digitale gewoonten'
              : isSpanish
              ? 'Consejos, perspectivas e historias sobre construir hábitos digitales saludables'
              : isFrench
              ? 'Conseils, aperçus et histoires sur le développement d\'habitudes numériques saines'
              : 'Tips, insights, and stories about building healthy digital habits'
            }
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{isDutch ? '15 maart 2025' : isSpanish ? '15 de marzo de 2025' : isFrench ? '15 mars 2025' : 'March 15, 2025'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{isDutch ? '5 min lezen' : isSpanish ? '5 min de lectura' : isFrench ? '5 min de lecture' : '5 min read'}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                  {isDutch 
                    ? '5 Tekenen Dat Je Gezin Betere Schermtijd Balans Nodig Heeft'
                    : isSpanish
                    ? '5 Señales de que Tu Familia Necesita Mejor Equilibrio en el Tiempo de Pantalla'
                    : isFrench
                    ? '5 Signes que votre Famille a Besoin d\'un Meilleur Équilibre du Temps d\'Écran'
                    : '5 Signs Your Family Needs Better Screen Time Balance'
                  }
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Ontdek de belangrijkste indicatoren dat het tijd is om de digitale gewoonten van je gezin opnieuw te evalueren en gezondere grenzen rond technologiegebruik te creëren.'
                    : isSpanish
                    ? 'Descubre los indicadores clave de que es hora de reevaluar los hábitos digitales de tu familia y crear límites más saludables alrededor del uso de tecnología.'
                    : isFrench
                    ? 'Découvrez les indicateurs clés qu\'il est temps de réévaluer les habitudes numériques de votre famille et de créer des limites plus saines autour de l\'utilisation de la technologie.'
                    : 'Discover the key indicators that it\'s time to reassess your family\'s digital habits and create healthier boundaries around technology use.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/${getCurrentLocale()}/blog/screen-time-balance`}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {isDutch ? 'Lees Meer' : isSpanish ? 'Leer Más' : isFrench ? 'Lire Plus' : 'Read More'} <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">👨‍👩‍👧‍👦</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{isDutch ? '10 maart 2025' : isSpanish ? '10 de marzo de 2025' : isFrench ? '10 mars 2025' : 'March 10, 2025'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{isDutch ? '7 min lezen' : isSpanish ? '7 min de lectura' : isFrench ? '7 min de lecture' : '7 min read'}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                  {isDutch 
                    ? 'Hoe Je Met Je Kinderen Over Schermtijd Praat Zonder Drama'
                    : isSpanish
                    ? 'Cómo Hablar con Tus Hijos Sobre el Tiempo de Pantalla Sin Drama'
                    : isFrench
                    ? 'Comment Parler à vos Enfants du Temps d\'Écran sans Drame'
                    : 'How to Talk to Your Kids About Screen Time Without the Drama'
                  }
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Leer effectieve communicatiestrategieën om digitale grenzen met je kinderen te bespreken op een manier die vertrouwen en begrip opbouwt.'
                    : isSpanish
                    ? 'Aprende estrategias de comunicación efectivas para discutir límites digitales con tus hijos de una manera que construya confianza y comprensión.'
                    : isFrench
                    ? 'Apprenez des stratégies de communication efficaces pour discuter des limites numériques avec vos enfants d\'une manière qui établit la confiance et la compréhension.'
                    : 'Learn effective communication strategies to discuss digital boundaries with your children in a way that builds trust and understanding.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/${getCurrentLocale()}/blog/talking-to-kids`}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {isDutch ? 'Lees Meer' : isSpanish ? 'Leer Más' : isFrench ? 'Lire Plus' : 'Read More'} <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🌟</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{isDutch ? '5 maart 2025' : isSpanish ? '5 de marzo de 2025' : isFrench ? '5 mars 2025' : 'March 5, 2025'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{isDutch ? '6 min lezen' : isSpanish ? '6 min de lectura' : isFrench ? '6 min de lecture' : '6 min read'}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                  {isDutch 
                    ? 'De Wetenschap Achter Digitale Wellness: Waarom Balans Belangrijk Is'
                    : isSpanish
                    ? 'La Ciencia Detrás del Bienestar Digital: Por Qué el Equilibrio Importa'
                    : isFrench
                    ? 'La Science derrière le Bien-être Numérique : Pourquoi l\'Équilibre Compte'
                    : 'The Science Behind Digital Wellness: Why Balance Matters'
                  }
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Verken het onderzoek naar hoe schermtijd de ontwikkeling van kinderen beïnvloedt en waarom het vinden van de juiste balans cruciaal is voor hun welzijn.'
                    : isSpanish
                    ? 'Explora la investigación sobre cómo el tiempo de pantalla afecta el desarrollo de los niños y por qué encontrar el equilibrio correcto es crucial para su bienestar.'
                    : isFrench
                    ? 'Explorez la recherche sur la façon dont le temps d\'écran affecte le développement des enfants et pourquoi trouver le bon équilibre est crucial pour leur bien-être.'
                    : 'Explore the research on how screen time affects children\'s development and why finding the right balance is crucial for their wellbeing.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/${getCurrentLocale()}/blog/digital-wellness`}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {isDutch ? 'Lees Meer' : isSpanish ? 'Leer Más' : isFrench ? 'Lire Plus' : 'Read More'} <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

