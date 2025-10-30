import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Scale, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  const isGerman = locale === 'de'
  
  const title = isDutch
    ? 'Juridische Informatie - Zenvy | Privacybeleid en Gebruiksvoorwaarden'
    : isSpanish
    ? 'Información Legal - Zenvy | Política de Privacidad y Términos de Uso'
    : isFrench
    ? 'Informations Légales - Zenvy | Politique de Confidentialité et Conditions d\'Utilisation'
    : isGerman
    ? 'Rechtliche Informationen - Zenvy | Datenschutzrichtlinie und Nutzungsbedingungen'
    : 'Legal Information - Zenvy | Privacy Policy and Terms of Use'
  
  const description = isDutch
    ? 'Bekijk de juridische documenten van Zenvy: Privacybeleid en Gebruiksvoorwaarden. Transparantie en vertrouwen staan centraal in alles wat we doen.'
    : isSpanish
    ? 'Consulta los documentos legales de Zenvy: Política de Privacidad y Términos de Uso. La transparencia y la confianza están en el corazón de todo lo que hacemos.'
    : isFrench
    ? 'Consultez les documents juridiques de Zenvy : Politique de Confidentialité et Conditions d\'Utilisation. La transparence et la confiance sont au cœur de tout ce que nous faisons.'
    : isGerman
    ? 'Sehen Sie sich die rechtlichen Dokumente von Zenvy an: Datenschutzrichtlinie und Nutzungsbedingungen. Transparenz und Vertrauen stehen im Mittelpunkt von allem, was wir tun.'
    : 'View Zenvy\'s legal documents: Privacy Policy and Terms of Use. Transparency and trust are at the heart of everything we do.'
  
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

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  const isGerman = locale === 'de'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance break-words">
            {isDutch ? (
              <>
                Juridische <span className="text-primary">Informatie</span>
              </>
            ) : isSpanish ? (
              <>
                Información <span className="text-primary">Legal</span>
              </>
            ) : isFrench ? (
              <>
                Informations <span className="text-primary">Légales</span>
              </>
            ) : isGerman ? (
              <>
                Rechtliche <span className="text-primary">Informationen</span>
              </>
            ) : (
              <>
                Legal <span className="text-primary">Information</span>
              </>
            )}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            {isDutch 
              ? 'Transparantie en vertrouwen staan centraal in alles wat we doen'
              : isSpanish 
              ? 'La transparencia y la confianza están en el corazón de todo lo que hacemos'
              : isFrench
              ? 'La transparence et la confiance au cœur de tout ce que nous faisons'
              : isGerman
              ? 'Transparenz und Vertrauen stehen im Mittelpunkt von allem, was wir tun'
              : 'Transparency and trust at the heart of everything we do'
            }
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {isDutch 
                ? 'Bij Zenvy staan transparantie en vertrouwen centraal in alles wat we doen. Op deze pagina vind je alle belangrijke juridische documenten die je gebruik van onze app en diensten regelen.'
                : isSpanish 
                ? 'En Zenvy, la transparencia y la confianza están en el corazón de todo lo que hacemos. En esta página encontrarás todos los documentos legales importantes que rigen tu uso de nuestra app y servicios.'
                : isFrench
                ? 'Chez Zenvy, la transparence et la confiance sont au cœur de tout ce que nous faisons. Sur cette page, vous trouverez tous les documents juridiques importants qui régissent votre utilisation de notre app et de nos services.'
                : isGerman
                ? 'Bei Zenvy stehen Transparenz und Vertrauen im Mittelpunkt von allem, was wir tun. Auf dieser Seite finden Sie alle wichtigen rechtlichen Dokumente, die Ihre Nutzung unserer App und Dienste regeln.'
                : 'At Zenvy, transparency and trust are at the heart of everything we do. On this page, you\'ll find all the important legal documents that govern your use of our app and services.'
              }
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {isDutch 
                ? 'We hebben ze geschreven om zo duidelijk en begrijpelijk mogelijk te zijn — geen onnodig juridisch jargon.'
                : isSpanish 
                ? 'Los hemos escrito para ser lo más claros y comprensibles posible — sin jerga legal innecesaria.'
                : isFrench
                ? 'Nous les avons rédigés pour être aussi clairs et compréhensibles que possible — pas de jargon juridique inutile.'
                : isGerman
                ? 'Wir haben sie so klar und verständlich wie möglich geschrieben — ohne unnötiges rechtliches Fachjargon.'
                : 'We\'ve written them to be as clear and understandable as possible — no unnecessary legal jargon.'
              }
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {isDutch 
                ? 'Door Zenvy te gebruiken, ga je akkoord met deze beleidsregels. Als je vragen hebt, neem dan gerust contact met ons op via '
                : isSpanish 
                ? 'Al usar Zenvy, aceptas estas políticas. Si tienes alguna pregunta, contáctanos en cualquier momento en '
                : isFrench
                ? 'En utilisant Zenvy, vous acceptez ces politiques. Si vous avez des questions, n\'hésitez pas à nous contacter à tout moment à '
                : isGerman
                ? 'Durch die Nutzung von Zenvy stimmen Sie diesen Richtlinien zu. Wenn Sie Fragen haben, kontaktieren Sie uns gerne unter '
                : 'By using Zenvy, you agree to these policies. If you have any questions, reach out to us anytime at '
              }
              <a href="mailto:support@zenvy.io" className="text-primary hover:text-secondary transition-colors">
                support@zenvy.io
              </a>
              {isDutch ? '. We zijn er om te helpen.' : isSpanish ? '. Estamos aquí para ayudar.' : isFrench ? '. Nous sommes là pour vous aider.' : isGerman ? '. Wir sind da, um zu helfen.' : '. We\'re here to help.'}
            </p>
            <p className="text-xl font-semibold text-primary">
              {isDutch 
                ? 'We zijn er. Gebouwd voor gezinnen, ontworpen met privacy in gedachten.'
                : isSpanish 
                ? 'Estamos aquí. Construido para familias, diseñado con la privacidad en mente.'
                : isFrench
                ? 'Nous sommes là. Construit pour les familles, conçu avec la confidentialité en tête.'
                : isGerman
                ? 'Wir sind hier. Für Familien gebaut, mit Datenschutz im Blick entworfen.'
                : 'We\'re Here. Built for families, designed with privacy in mind.'
              }
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDutch ? 'Neem even de tijd om te bekijken:' : isSpanish ? 'Tómate un momento para revisar:' : isFrench ? 'Prenez un moment pour consulter :' : isGerman ? 'Nehmen Sie sich einen Moment Zeit zum Überprüfen:' : 'Please take a moment to review:'}
            </h2>
          </div>

          {/* Legal Documents Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Privacy Policy */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3 break-words">
                  {isDutch ? 'Privacybeleid' : isSpanish ? 'Política de Privacidad' : isFrench ? 'Politique de Confidentialité' : isGerman ? 'Datenschutzrichtlinie' : 'Privacy Policy'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Leer hoe we de gegevens van je gezin verzamelen, gebruiken en beschermen. Jouw privacy is onze hoogste prioriteit.'
                    : isSpanish 
                    ? 'Aprende cómo recopilamos, usamos y protegemos los datos de tu familia. Tu privacidad es nuestra máxima prioridad.'
                    : isFrench
                    ? 'Découvrez comment nous collectons, utilisons et protégeons les données de votre famille. Votre confidentialité est notre priorité absolue.'
                    : isGerman
                    ? 'Erfahren Sie, wie wir die Daten Ihrer Familie sammeln, verwenden und schützen. Ihr Datenschutz ist unsere oberste Priorität.'
                    : 'Learn how we collect, use, and protect your family\'s data. Your privacy is our top priority.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`/${locale}/privacy`}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors group-hover:gap-3"
                >
                  {isDutch ? 'Lees Privacybeleid' : isSpanish ? 'Leer Política de Privacidad' : isFrench ? 'Lire la Politique de Confidentialité' : isGerman ? 'Datenschutzrichtlinie Lesen' : 'Read Privacy Policy'} <ArrowRight className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-3 break-words">
                  {isDutch ? 'Gebruiksvoorwaarden' : isSpanish ? 'Términos de Uso' : isFrench ? 'Conditions d\'Utilisation' : isGerman ? 'Nutzungsbedingungen' : 'Terms of Use'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Begrijp de voorwaarden voor het gebruik van Zenvy. Duidelijke richtlijnen voor een veilige ervaring.'
                    : isSpanish 
                    ? 'Comprende los términos y condiciones para usar Zenvy. Pautas claras para una experiencia segura.'
                    : isFrench
                    ? 'Comprenez les termes et conditions d\'utilisation de Zenvy. Des directives claires pour une expérience sûre.'
                    : isGerman
                    ? 'Verstehen Sie die Bedingungen für die Nutzung von Zenvy. Klare Richtlinien für eine sichere Erfahrung.'
                    : 'Understand the terms and conditions for using Zenvy. Clear guidelines for a safe experience.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`/${locale}/terms`}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors group-hover:gap-3"
                >
                  {isDutch ? 'Lees Gebruiksvoorwaarden' : isSpanish ? 'Leer Términos de Uso' : isFrench ? 'Lire les Conditions d\'Utilisation' : isGerman ? 'Nutzungsbedingungen Lesen' : 'Read Terms of Use'} <ArrowRight className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-12 sm:mt-16 text-center bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">
              {isDutch ? 'Vragen Over Ons Juridisch Beleid?' : isSpanish ? '¿Preguntas Sobre Nuestras Políticas Legales?' : isFrench ? 'Questions Sur Nos Politiques Légales ?' : isGerman ? 'Fragen Zu Unseren Rechtlichen Richtlinien?' : 'Questions About Our Legal Policies?'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {isDutch 
                ? 'We helpen graag bij het verduidelijken van alles wat je nodig hebt. Aarzel niet om contact op te nemen.'
                : isSpanish 
                ? 'Estamos encantados de aclarar cualquier cosa que necesites. No dudes en contactarnos.'
                : isFrench
                ? 'Nous sommes ravis de clarifier tout ce dont vous avez besoin. N\'hésitez pas à nous contacter.'
                : isGerman
                ? 'Wir helfen gerne dabei, alles zu klären, was Sie benötigen. Zögern Sie nicht, uns zu kontaktieren.'
                : 'We\'re happy to clarify anything you need. Don\'t hesitate to reach out.'
              }
            </p>
            <a
              href="mailto:support@zenvy.io?subject=Legal%20Question"
              className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors"
            >
              {isDutch ? 'Neem Contact Op' : isSpanish ? 'Contáctanos' : isFrench ? 'Contactez-Nous' : isGerman ? 'Kontakt Aufnehmen' : 'Contact Us'} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

