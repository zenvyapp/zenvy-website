import { Heart, Shield, Sparkles, Gift } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Our Story Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart className="h-10 w-10 text-secondary fill-secondary animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {isDutch ? (
                  <>
                    Gebouwd met <span className="text-secondary">Liefde</span>
                  </>
                ) : isSpanish ? (
                  <>
                    Construido con <span className="text-secondary">Amor</span>
                  </>
                ) : isFrench ? (
                  <>
                    Construit avec <span className="text-secondary">Amour</span>
                  </>
                ) : (
                  <>
                    Built with <span className="text-secondary">Love</span>
                  </>
                )}
              </h1>
              <Heart className="h-10 w-10 text-secondary fill-secondary animate-pulse" />
            </div>
            <p className="text-2xl text-muted-foreground text-pretty leading-relaxed">
              {isDutch 
                ? 'Een passieproject voor gezinnen overal ter wereld'
                : isSpanish
                ? 'Un proyecto de pasión para familias en todas partes del mundo'
                : isFrench
                ? 'Un projet passion pour les familles partout dans le monde'
                : 'A passion project for families everywhere'
              }
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                {isDutch 
                  ? "Zenvy is geboren uit een eenvoudige droom: gezinnen helpen balans te vinden in onze digitale wereld. We zijn een klein team van gepassioneerde oprichters die geloven dat technologie gezinnen dichter bij elkaar moet brengen, niet uit elkaar drijven."
                  : isSpanish
                  ? "Zenvy nació de un sueño simple: ayudar a las familias a encontrar equilibrio en nuestro mundo digital. Somos un pequeño equipo de fundadores apasionados que creemos que la tecnología debe acercar a las familias, no separarlas."
                  : isFrench
                  ? "Zenvy est né d'un simple rêve : aider les familles à trouver l'équilibre dans notre monde numérique. Nous sommes une petite équipe de fondateurs passionnés qui croient que la technologie doit rapprocher les familles, pas les éloigner."
                  : "Zenvy was born from a simple dream: to help families find balance in our digital world. We're a small team of passionate founders who believe that technology should bring families closer together, not pull them apart."
                }
              </p>
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                {isDutch 
                  ? "Als startup in de vroege stadia bouwen we Zenvy met liefde, toewijding en de genereuze steun van gezinnen zoals die van jou. Elke donatie helpt ons om door te gaan met het ontwikkelen van functies, het verbeteren van de app en het toegankelijk houden voor iedereen."
                  : isSpanish
                  ? "Como startup en sus primeras etapas, estamos construyendo Zenvy con amor, dedicación y el generoso apoyo de familias como la tuya. Cada donación nos ayuda a continuar desarrollando funciones, mejorando la aplicación y manteniéndola accesible para todos."
                  : isFrench
                  ? "En tant que startup à ses débuts, nous construisons Zenvy avec amour, dévouement et le soutien généreux de familles comme la vôtre. Chaque don nous aide à continuer à développer des fonctionnalités, améliorer l'application et la garder accessible à tous."
                  : "As a startup in its early stages, we're building Zenvy with love, dedication, and the generous support of families like yours. Every donation helps us continue developing features, improving the app, and keeping it accessible to everyone."
                }
              </p>
              <p className="text-xl leading-relaxed font-semibold text-primary">
                {isDutch 
                  ? "Onze missie is om Zenvy zo lang mogelijk gratis te houden, omdat we geloven dat elk gezin toegang verdient tot tools die gezonde digitale gewoonten bevorderen."
                  : isSpanish
                  ? "Nuestra misión es mantener Zenvy gratuito durante el mayor tiempo posible, porque creemos que cada familia merece acceso a herramientas que promuevan hábitos digitales saludables."
                  : isFrench
                  ? "Notre mission est de garder Zenvy gratuit aussi longtemps que possible, car nous croyons que chaque famille mérite d'avoir accès à des outils qui promeuvent des habitudes numériques saines."
                  : "Our mission is to keep Zenvy free for as long as possible, because we believe every family deserves access to tools that promote healthy digital habits."
                }
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                <Gift className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {isDutch ? 'Donatie-Gedreven' : isSpanish ? 'Impulsado por Donaciones' : isFrench ? 'Alimenté par les Dons' : 'Donation-Powered'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Gebouwd met de steun van genereuze gezinnen die in onze missie geloven'
                  : isSpanish
                  ? 'Construido con el apoyo de familias generosas que creen en nuestra misión'
                  : isFrench
                  ? 'Construit avec le soutien de familles généreuses qui croient en notre mission'
                  : 'Built with the support of generous families who believe in our mission'
                }
              </p>
            </div>

            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {isDutch ? 'Jouw Gegevens zijn Heilig' : isSpanish ? 'Tus Datos son Sagrados' : isFrench ? 'Vos Données sont Sacrées' : 'Your Data is Sacred'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'We verkopen nooit je gegevens. De privacy van je gezin is absoluut beschermd'
                  : isSpanish
                  ? 'Nunca vendemos tus datos. La privacidad de tu familia está absolutamente protegida'
                  : isFrench
                  ? 'Nous ne vendons jamais vos données. La confidentialité de votre famille est absolument protégée'
                  : 'We never sell your data. Your family\'s privacy is absolutely protected'
                }
              </p>
            </div>

            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                <Sparkles className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {isDutch ? 'Gratis Voor Altijd Doel' : isSpanish ? 'Objetivo Gratis Para Siempre' : isFrench ? 'Objectif Gratuit pour Toujours' : 'Free Forever Goal'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'We zijn toegewijd aan het toegankelijk houden van Zenvy voor alle gezinnen'
                  : isSpanish
                  ? 'Estamos comprometidos a mantener Zenvy accesible para todas las familias'
                  : isFrench
                  ? 'Nous nous engageons à garder Zenvy accessible à toutes les familles'
                  : 'We\'re committed to keeping Zenvy accessible to all families'
                }
              </p>
            </div>
          </div>

          <div className="text-center bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8">
            <p className="text-xl font-semibold text-foreground mb-4">
              {isDutch 
                ? 'Wil je onze missie ondersteunen en helpen Zenvy gratis te houden voor iedereen?'
                : isSpanish
                ? '¿Quieres apoyar nuestra misión y ayudar a mantener Zenvy gratuito para todos?'
                : isFrench
                ? 'Voulez-vous soutenir notre mission et aider à garder Zenvy gratuit pour tous ?'
                : 'Want to support our mission and help keep Zenvy free for everyone?'
              }
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isDutch 
                ? 'Binnenkort introduceren we een optionele donatiefunctie direct in de app. Je vrijwillige bijdrage helpt ons om door te gaan met het ontwikkelen van Zenvy en het gratis te houden voor alle gezinnen over de hele wereld.'
                : isSpanish
                ? 'Pronto introduciremos una función de donación opcional directamente en la aplicación. Tu contribución voluntaria nos ayudará a continuar desarrollando Zenvy y mantenerlo gratuito para todas las familias del mundo.'
                : isFrench
                ? 'Bientôt, nous introduirons une fonction de don optionnelle directement dans l\'application. Votre contribution volontaire nous aidera à continuer à développer Zenvy et à le garder gratuit pour toutes les familles du monde entier.'
                : 'Soon, we\'ll be introducing an optional donation feature directly in the app. Your voluntary contribution will help us continue developing Zenvy and keep it free for all families around the world.'
              }
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
