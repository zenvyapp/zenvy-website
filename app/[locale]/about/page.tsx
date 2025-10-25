import { Heart, Users, Target, Shield, Globe, Sparkles, Code } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                Over <span className="text-primary">Zenvy</span>
              </>
            ) : isSpanish ? (
              <>
                Acerca de <span className="text-primary">Zenvy</span>
              </>
            ) : (
              <>
                About <span className="text-primary">Zenvy</span>
              </>
            )}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-4">
            {isDutch 
              ? 'We zijn op een missie om gezinnen te helpen gezondere relaties met technologie op te bouwen'
              : isSpanish
              ? 'Estamos en una misión para ayudar a las familias a construir relaciones más saludables con la tecnología'
              : 'We\'re on a mission to help families build healthier relationships with technology'
            }
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-6 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {isDutch ? 'Onze Missie' : isSpanish ? 'Nuestra Misión' : 'Our Mission'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isDutch 
                ? 'Zenvy werd gecreëerd om de manier waarop gezinnen schermtijd benaderen te transformeren. In plaats van constante gevechten en beperkingen, geloven we in positieve versterking, educatie en empowerment. Ons doel is om gezinnen te helpen gezonde digitale gewoonten op te bouwen die een leven lang meegaan.'
                : isSpanish
                ? 'Zenvy fue creado para transformar la forma en que las familias abordan el tiempo de pantalla. En lugar de batallas constantes y restricciones, creemos en el refuerzo positivo, la educación y el empoderamiento. Nuestro objetivo es ayudar a las familias a construir hábitos digitales saludables que duren toda la vida.'
                : 'Zenvy was created to transform the way families approach screen time. Instead of constant battles and restrictions, we believe in positive reinforcement, education, and empowerment. Our goal is to help families build healthy digital habits that last a lifetime.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {isDutch ? 'Gezin Eerst' : isSpanish ? 'Familia Primero' : 'Family First'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We geven prioriteit aan gezinsverbinding en gezonde relaties boven alles.'
                    : isSpanish 
                    ? 'Damos prioridad a la conexión familiar y las relaciones saludables por encima de todo.'
                    : 'We prioritize family connection and healthy relationships above all else.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {isDutch ? 'Positieve Aanpak' : isSpanish ? 'Enfoque Positivo' : 'Positive Approach'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We geloven in beloningen en aanmoediging in plaats van straf en beperkingen.'
                    : isSpanish 
                    ? 'Creemos en las recompensas y el estímulo en lugar del castigo y las restricciones.'
                    : 'We believe in rewards and encouragement rather than punishment and restrictions.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {isDutch ? 'Groei Mindset' : isSpanish ? 'Mentalidad de Crecimiento' : 'Growth Mindset'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We focussen op leren, ontwikkeling en het opbouwen van vaardigheden voor de toekomst.'
                    : isSpanish 
                    ? 'Nos enfocamos en el aprendizaje, el desarrollo y la construcción de habilidades para el futuro.'
                    : 'We focus on learning, development, and building skills for the future.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              {isDutch ? (
                <>
                  Gebouwd met <span className="text-secondary">Liefde</span>
                </>
              ) : isSpanish ? (
                <>
                  Construido con <span className="text-secondary">Amor</span>
                </>
              ) : (
                <>
                  Built with <span className="text-secondary">Love</span>
                </>
              )}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isDutch 
                ? 'Zenvy is een startup in de vroege stadia, gebouwd door gepassioneerde oprichters die geloven dat technologie gezinnen bij elkaar moet brengen, niet uit elkaar drijven. We ontwikkelen deze app met de hulp van donaties van mensen die onze visie delen.'
                : isSpanish 
                ? 'Zenvy es una startup en sus primeras etapas, construida por fundadores apasionados que creen que la tecnología debe unir a las familias, no separarlas. Estamos desarrollando esta aplicación con la ayuda de donaciones de personas que comparten nuestra visión.'
                : 'Zenvy is a startup in its early stages, built by passionate founders who believe technology should bring families together, not drive them apart. We\'re developing this app with the help of donations from people who share our vision.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-secondary/20">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {isDutch ? 'Startup Geest' : isSpanish ? 'Espíritu Startup' : 'Startup Spirit'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We zijn een klein team met grote dromen, werken onvermoeibaar om iets betekenisvols te creëren voor gezinnen wereldwijd. Elke functie wordt met zorg en doel gemaakt.'
                    : isSpanish 
                    ? 'Somos un equipo pequeño con grandes sueños, trabajando incansablemente para crear algo significativo para las familias de todo el mundo. Cada función se crea con cuidado y propósito.'
                    : 'We\'re a small team with big dreams, working tirelessly to create something meaningful for families worldwide. Every feature is crafted with care and purpose.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {isDutch ? 'Gemeenschap Aangedreven' : isSpanish ? 'Impulsado por la Comunidad' : 'Community Powered'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'Dankzij genereuze donaties kunnen we Zenvy gratis houden voor gezinnen. Jouw steun helpt ons om door te gaan met het ontwikkelen van functies die echt een verschil maken.'
                    : isSpanish
                    ? 'Gracias a las donaciones generosas, podemos mantener Zenvy gratuito para las familias. Tu apoyo nos ayuda a continuar desarrollando funciones que marcan una diferencia real.'
                    : 'Thanks to generous donations, we can keep Zenvy free for families. Your support helps us continue developing features that make a real difference.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {isDutch ? 'Gemaakt in Nederland, Voor de Wereld' : isSpanish ? 'Hecho en los Países Bajos, Para el Mundo' : 'Made in the Netherlands, For the World'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isDutch 
                ? 'Zenvy werd gecreëerd in Nederland, maar onze missie strekt zich uit tot gezinnen overal. Waar je ook vandaan komt, we zijn hier om je gezin\'s digitale wellness reis te ondersteunen.'
                : isSpanish
                ? 'Zenvy fue creado en los Países Bajos, pero nuestra misión se extiende a familias en todas partes. No importa de dónde seas, estamos aquí para apoyar el viaje de bienestar digital de tu familia.'
                : 'Zenvy was created in the Netherlands, but our mission extends to families everywhere. No matter where you\'re from, we\'re here to support your family\'s digital wellness journey.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {isDutch ? 'Waar We Voor Staan' : isSpanish ? 'Por Lo Que Luchamos' : 'What We Stand For'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {isDutch ? 'Privacy Eerst' : isSpanish ? 'Privacidad Primero' : 'Privacy First'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'De gegevens van je gezin zijn absoluut veilig bij ons. We verkopen nooit je informatie en we zijn toegewijd aan de hoogste standaarden van gegevensbescherming. Jouw vertrouwen is ons meest waardevolle bezit.'
                    : isSpanish
                    ? 'Los datos de tu familia están absolutamente seguros con nosotros. Nunca vendemos tu información y estamos comprometidos con los más altos estándares de protección de datos. Tu confianza es nuestro activo más valioso.'
                    : 'Your family\'s data is absolutely safe with us. We never sell your information, and we\'re committed to the highest standards of data protection. Your trust is our most valuable asset.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {isDutch ? 'Gratis voor Gezinnen' : isSpanish ? 'Gratis para las Familias' : 'Free for Families'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We zijn toegewijd aan het gratis houden van Zenvy zo lang mogelijk. Elk gezin verdient toegang tot tools die hen helpen gedijen, ongeacht hun financiële situatie.'
                    : isSpanish
                    ? 'Estamos comprometidos a mantener Zenvy gratuito durante el mayor tiempo posible. Cada familia merece acceso a herramientas que les ayuden a prosperar, independientemente de su situación financiera.'
                    : 'We\'re committed to keeping Zenvy free for as long as possible. Every family deserves access to tools that help them thrive, regardless of their financial situation.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

