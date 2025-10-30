import { Heart, Users, Target, Shield, Globe, Sparkles, Code } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  const isGerman = locale === 'de'
  
  const title = isDutch
    ? 'Over Ons - Zenvy | Onze Missie en Verhaal'
    : isSpanish
    ? 'Acerca de Nosotros - Zenvy | Nuestra Misión e Historia'
    : isFrench
    ? 'À Propos - Zenvy | Notre Mission et Notre Histoire'
    : isGerman
    ? 'Über Uns - Zenvy | Unsere Mission und Geschichte'
    : 'About Us - Zenvy | Our Mission and Story'
  
  const description = isDutch
    ? 'Leer meer over Zenvy, een startup uit Nederland die helpt gezinnen gezondere relaties met technologie op te bouwen. Ontdek onze missie, waarden en passie voor gezinsverbinding.'
    : isSpanish
    ? 'Aprende más sobre Zenvy, una startup de los Países Bajos que ayuda a las familias a construir relaciones más saludables con la tecnología. Descubre nuestra misión, valores y pasión por la conexión familiar.'
    : isFrench
    ? 'En savoir plus sur Zenvy, une startup néerlandaise qui aide les familles à construire des relations plus saines avec la technologie. Découvrez notre mission, nos valeurs et notre passion pour la connexion familiale.'
    : isGerman
    ? 'Erfahren Sie mehr über Zenvy, ein Startup aus den Niederlanden, das Familien dabei hilft, gesündere Beziehungen zur Technologie aufzubauen. Entdecken Sie unsere Mission, Werte und Leidenschaft für Familienverbindung.'
    : 'Learn more about Zenvy, a startup from the Netherlands helping families build healthier relationships with technology. Discover our mission, values, and passion for family connection.'
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  const isGerman = locale === 'de'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance break-words">
            {isDutch ? (
              <>
                Over <span className="text-primary">Zenvy</span>
              </>
            ) : isSpanish ? (
              <>
                Acerca de <span className="text-primary">Zenvy</span>
              </>
            ) : isFrench ? (
              <>
                À Propos de <span className="text-primary">Zenvy</span>
              </>
            ) : isGerman ? (
              <>
                Über <span className="text-primary">Zenvy</span>
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
              : isFrench
              ? 'Nous sommes en mission pour aider les familles à construire des relations plus saines avec la technologie'
              : isGerman
              ? 'Wir haben uns zur Mission gemacht, Familien dabei zu helfen, gesündere Beziehungen zur Technologie aufzubauen'
              : 'We\'re on a mission to help families build healthier relationships with technology'
            }
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-6 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 break-words">
              {isDutch ? 'Onze Missie' : isSpanish ? 'Nuestra Misión' : isFrench ? 'Notre Mission' : isGerman ? 'Unsere Mission' : 'Our Mission'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {isDutch 
                ? 'Zenvy werd gecreëerd om de manier waarop gezinnen schermtijd benaderen te transformeren. In plaats van constante gevechten en beperkingen, geloven we in positieve versterking, educatie en empowerment. Ons doel is om gezinnen te helpen gezonde digitale gewoonten op te bouwen die een leven lang meegaan.'
                : isSpanish
                ? 'Zenvy fue creado para transformar la forma en que las familias abordan el tiempo de pantalla. En lugar de batallas constantes y restricciones, creemos en el refuerzo positivo, la educación y el empoderamiento. Nuestro objetivo es ayudar a las familias a construir hábitos digitales saludables que duren toda la vida.'
                : isFrench
                ? 'Zenvy a été créé pour transformer la façon dont les familles abordent le temps d\'écran. Au lieu de batailles constantes et de restrictions, nous croyons en la récompense positive, l\'éducation et l\'autonomisation. Notre objectif est d\'aider les familles à construire des habitudes numériques saines qui durent toute la vie.'
                : isGerman
                ? 'Zenvy wurde geschaffen, um die Art und Weise zu transformieren, wie Familien Bildschirmzeit angehen. Anstatt ständiger Kämpfe und Einschränkungen glauben wir an positive Verstärkung, Bildung und Ermächtigung. Unser Ziel ist es, Familien dabei zu helfen, gesunde digitale Gewohnheiten aufzubauen, die ein Leben lang halten.'
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
                  {isDutch ? 'Gezin Eerst' : isSpanish ? 'Familia Primero' : isFrench ? 'Famille d\'Abord' : isGerman ? 'Familie Zuerst' : 'Family First'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We geven prioriteit aan gezinsverbinding en gezonde relaties boven alles.'
                    : isSpanish 
                    ? 'Damos prioridad a la conexión familiar y las relaciones saludables por encima de todo.'
                    : isFrench
                    ? 'Nous donnons la priorité à la connexion familiale et aux relations saines avant tout.'
                    : isGerman
                    ? 'Wir geben Familienverbindung und gesunden Beziehungen Vorrang vor allem anderen.'
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
                  {isDutch ? 'Positieve Aanpak' : isSpanish ? 'Enfoque Positivo' : isFrench ? 'Approche Positive' : isGerman ? 'Positiver Ansatz' : 'Positive Approach'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We geloven in beloningen en aanmoediging in plaats van straf en beperkingen.'
                    : isSpanish 
                    ? 'Creemos en las recompensas y el estímulo en lugar del castigo y las restricciones.'
                    : isFrench
                    ? 'Nous croyons aux récompenses et à l\'encouragement plutôt qu\'à la punition et aux restrictions.'
                    : isGerman
                    ? 'Wir glauben an Belohnungen und Ermutigung anstatt Bestrafung und Einschränkungen.'
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
                  {isDutch ? 'Groei Mindset' : isSpanish ? 'Mentalidad de Crecimiento' : isFrench ? 'Mentalité de Croissance' : isGerman ? 'Wachstumsmentalität' : 'Growth Mindset'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We focussen op leren, ontwikkeling en het opbouwen van vaardigheden voor de toekomst.'
                    : isSpanish 
                    ? 'Nos enfocamos en el aprendizaje, el desarrollo y la construcción de habilidades para el futuro.'
                    : isFrench
                    ? 'Nous nous concentrons sur l\'apprentissage, le développement et la construction de compétences pour l\'avenir.'
                    : isGerman
                    ? 'Wir konzentrieren uns auf Lernen, Entwicklung und den Aufbau von Fähigkeiten für die Zukunft.'
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 break-words">
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
              ) : isGerman ? (
                <>
                  Gebaut mit <span className="text-secondary">Liebe</span>
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
                : isFrench
                ? 'Zenvy est une startup à ses débuts, construite par des fondateurs passionnés qui croient que la technologie doit rassembler les familles, pas les séparer. Nous développons cette application avec l\'aide de dons de personnes qui partagent notre vision.'
                : isGerman
                ? 'Zenvy ist ein Startup in den frühen Stadien, gegründet von leidenschaftlichen Gründern, die glauben, dass Technologie Familien zusammenbringen sollte, nicht auseinandertreiben. Wir entwickeln diese App mit Hilfe von Spenden von Menschen, die unsere Vision teilen.'
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
                  {isDutch ? 'Startup Geest' : isSpanish ? 'Espíritu Startup' : isFrench ? 'Esprit Startup' : isGerman ? 'Startup-Geist' : 'Startup Spirit'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We zijn een klein team met grote dromen, werken onvermoeibaar om iets betekenisvols te creëren voor gezinnen wereldwijd. Elke functie wordt met zorg en doel gemaakt.'
                    : isSpanish 
                    ? 'Somos un equipo pequeño con grandes sueños, trabajando incansablemente para crear algo significativo para las familias de todo el mundo. Cada función se crea con cuidado y propósito.'
                    : isFrench
                    ? 'Nous sommes une petite équipe avec de grands rêves, travaillant sans relâche pour créer quelque chose de significatif pour les familles du monde entier. Chaque fonctionnalité est conçue avec soin et un objectif.'
                    : isGerman
                    ? 'Wir sind ein kleines Team mit großen Träumen und arbeiten unermüdlich daran, etwas Bedeutungsvolles für Familien weltweit zu schaffen. Jede Funktion wird mit Sorgfalt und Zweck erstellt.'
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
                  {isDutch ? 'Gemeenschap Aangedreven' : isSpanish ? 'Impulsado por la Comunidad' : isFrench ? 'Alimenté par la Communauté' : isGerman ? 'Gemeinschaftsgetrieben' : 'Community Powered'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'Dankzij genereuze donaties kunnen we Zenvy gratis houden voor gezinnen. Jouw steun helpt ons om door te gaan met het ontwikkelen van functies die echt een verschil maken.'
                    : isSpanish
                    ? 'Gracias a las donaciones generosas, podemos mantener Zenvy gratuito para las familias. Tu apoyo nos ayuda a continuar desarrollando funciones que marcan una diferencia real.'
                    : isFrench
                    ? 'Grâce aux dons généreux, nous pouvons garder Zenvy gratuit pour les familles. Votre soutien nous aide à continuer à développer des fonctionnalités qui font une réelle différence.'
                    : isGerman
                    ? 'Dank großzügiger Spenden können wir Zenvy für Familien kostenlos halten. Ihre Unterstützung hilft uns, weiterhin Funktionen zu entwickeln, die wirklich einen Unterschied machen.'
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
              {isDutch ? 'Gemaakt in Nederland, Voor de Wereld' : isSpanish ? 'Hecho en los Países Bajos, Para el Mundo' : isFrench ? 'Fabriqué aux Pays-Bas, Pour le Monde' : isGerman ? 'Hergestellt in den Niederlanden, Für Die Welt' : 'Made in the Netherlands, For the World'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isDutch 
                ? 'Zenvy werd gecreëerd in Nederland, maar onze missie strekt zich uit tot gezinnen overal. Waar je ook vandaan komt, we zijn hier om je gezin\'s digitale wellness reis te ondersteunen.'
                : isSpanish
                ? 'Zenvy fue creado en los Países Bajos, pero nuestra misión se extiende a familias en todas partes. No importa de dónde seas, estamos aquí para apoyar el viaje de bienestar digital de tu familia.'
                : isFrench
                ? 'Zenvy a été créé aux Pays-Bas, mais notre mission s\'étend aux familles partout. Peu importe d\'où vous venez, nous sommes ici pour soutenir le parcours de bien-être numérique de votre famille.'
                : isGerman
                ? 'Zenvy wurde in den Niederlanden geschaffen, aber unsere Mission erstreckt sich auf Familien überall. Egal woher Sie kommen, wir sind hier, um die digitale Wellness-Reise Ihrer Familie zu unterstützen.'
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 break-words">
              {isDutch ? 'Waar We Voor Staan' : isSpanish ? 'Por Lo Que Luchamos' : isFrench ? 'Ce Pour Quoi Nous Nous Battons' : isGerman ? 'Wofür Wir Stehen' : 'What We Stand For'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">
                  {isDutch ? 'Privacy Eerst' : isSpanish ? 'Privacidad Primero' : isFrench ? 'Confidentialité d\'Abord' : isGerman ? 'Datenschutz Zuerst' : 'Privacy First'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'De gegevens van je gezin zijn absoluut veilig bij ons. We verkopen nooit je informatie en we zijn toegewijd aan de hoogste standaarden van gegevensbescherming. Jouw vertrouwen is ons meest waardevolle bezit.'
                    : isSpanish
                    ? 'Los datos de tu familia están absolutamente seguros con nosotros. Nunca vendemos tu información y estamos comprometidos con los más altos estándares de protección de datos. Tu confianza es nuestro activo más valioso.'
                    : isFrench
                    ? 'Les données de votre famille sont absolument sûres avec nous. Nous ne vendons jamais vos informations et nous nous engageons aux normes les plus élevées de protection des données. Votre confiance est notre bien le plus précieux.'
                    : isGerman
                    ? 'Die Daten Ihrer Familie sind bei uns absolut sicher. Wir verkaufen niemals Ihre Informationen und sind den höchsten Standards des Datenschutzes verpflichtet. Ihr Vertrauen ist unser wertvollstes Gut.'
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
                  {isDutch ? 'Gratis voor Gezinnen' : isSpanish ? 'Gratis para las Familias' : isFrench ? 'Gratuit pour les Familles' : isGerman ? 'Kostenlos Für Familien' : 'Free for Families'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {isDutch 
                    ? 'We zijn toegewijd aan het gratis houden van Zenvy zo lang mogelijk. Elk gezin verdient toegang tot tools die hen helpen gedijen, ongeacht hun financiële situatie.'
                    : isSpanish
                    ? 'Estamos comprometidos a mantener Zenvy gratuito durante el mayor tiempo posible. Cada familia merece acceso a herramientas que les ayuden a prosperar, independientemente de su situación financiera.'
                    : isFrench
                    ? 'Nous nous engageons à garder Zenvy gratuit aussi longtemps que possible. Chaque famille mérite d\'avoir accès à des outils qui l\'aident à prospérer, quelle que soit sa situation financière.'
                    : isGerman
                    ? 'Wir sind verpflichtet, Zenvy so lange wie möglich kostenlos zu halten. Jede Familie verdient Zugang zu Tools, die ihnen helfen zu gedeihen, unabhängig von ihrer finanziellen Situation.'
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

