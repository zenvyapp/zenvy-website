import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Scale, ExternalLink } from "lucide-react"

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                Juridische <span className="text-primary">Informatie</span>
              </>
            ) : isSpanish ? (
              <>
                Información <span className="text-primary">Legal</span>
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
              : 'Transparency and trust at the heart of everything we do'
            }
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {isDutch 
                ? 'Bij Zenvy staan transparantie en vertrouwen centraal in alles wat we doen. Op deze pagina vind je alle belangrijke juridische documenten die je gebruik van onze app en diensten regelen.'
                : isSpanish 
                ? 'En Zenvy, la transparencia y la confianza están en el corazón de todo lo que hacemos. En esta página encontrarás todos los documentos legales importantes que rigen tu uso de nuestra app y servicios.'
                : 'At Zenvy, transparency and trust are at the heart of everything we do. On this page, you\'ll find all the important legal documents that govern your use of our app and services.'
              }
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {isDutch 
                ? 'We hebben ze geschreven om zo duidelijk en begrijpelijk mogelijk te zijn — geen onnodig juridisch jargon.'
                : isSpanish 
                ? 'Los hemos escrito para ser lo más claros y comprensibles posible — sin jerga legal innecesaria.'
                : 'We\'ve written them to be as clear and understandable as possible — no unnecessary legal jargon.'
              }
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {isDutch 
                ? 'Door Zenvy te gebruiken, ga je akkoord met deze beleidsregels. Als je vragen hebt, neem dan gerust contact met ons op via '
                : isSpanish 
                ? 'Al usar Zenvy, aceptas estas políticas. Si tienes alguna pregunta, contáctanos en cualquier momento en '
                : 'By using Zenvy, you agree to these policies. If you have any questions, reach out to us anytime at '
              }
              <a href="mailto:support@zenvy.io" className="text-primary hover:text-secondary transition-colors">
                support@zenvy.io
              </a>
              {isDutch ? '. We zijn er om te helpen.' : isSpanish ? '. Estamos aquí para ayudar.' : '. We\'re here to help.'}
            </p>
            <p className="text-xl font-semibold text-primary">
              {isDutch 
                ? 'We zijn er. Gebouwd voor gezinnen, ontworpen met privacy in gedachten.'
                : isSpanish 
                ? 'Estamos aquí. Construido para familias, diseñado con la privacidad en mente.'
                : 'We\'re Here. Built for families, designed with privacy in mind.'
              }
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDutch ? 'Neem even de tijd om te bekijken:' : isSpanish ? 'Tómate un momento para revisar:' : 'Please take a moment to review:'}
            </h2>
          </div>

          {/* Legal Documents Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Privacy Policy */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-3">
                  {isDutch ? 'Privacybeleid' : isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Leer hoe we de gegevens van je gezin verzamelen, gebruiken en beschermen. Jouw privacy is onze hoogste prioriteit.'
                    : isSpanish 
                    ? 'Aprende cómo recopilamos, usamos y protegemos los datos de tu familia. Tu privacidad es nuestra máxima prioridad.'
                    : 'Learn how we collect, use, and protect your family\'s data. Your privacy is our top priority.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://repeated-gastonia-73a.notion.site/Privacy-Policy-Zenvy-1fbd9e8652f780d8bad9df53f13a04e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors group-hover:gap-3"
                >
                  {isDutch ? 'Lees Privacybeleid' : isSpanish ? 'Leer Política de Privacidad' : 'Read Privacy Policy'} <ExternalLink className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-3">
                  {isDutch ? 'Gebruiksvoorwaarden' : isSpanish ? 'Términos de Uso' : 'Terms of Use'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Begrijp de voorwaarden voor het gebruik van Zenvy. Duidelijke richtlijnen voor een veilige ervaring.'
                    : isSpanish 
                    ? 'Comprende los términos y condiciones para usar Zenvy. Pautas claras para una experiencia segura.'
                    : 'Understand the terms and conditions for using Zenvy. Clear guidelines for a safe experience.'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://repeated-gastonia-73a.notion.site/Terms-of-Use-Zenvy-1fbd9e8652f780b68352ed26fa9da5dd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors group-hover:gap-3"
                >
                  {isDutch ? 'Lees Gebruiksvoorwaarden' : isSpanish ? 'Leer Términos de Uso' : 'Read Terms of Use'} <ExternalLink className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              {isDutch ? 'Vragen Over Ons Juridisch Beleid?' : isSpanish ? '¿Preguntas Sobre Nuestras Políticas Legales?' : 'Questions About Our Legal Policies?'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {isDutch 
                ? 'We helpen graag bij het verduidelijken van alles wat je nodig hebt. Aarzel niet om contact op te nemen.'
                : isSpanish 
                ? 'Estamos encantados de aclarar cualquier cosa que necesites. No dudes en contactarnos.'
                : 'We\'re happy to clarify anything you need. Don\'t hesitate to reach out.'
              }
            </p>
            <a
              href="mailto:support@zenvy.io?subject=Legal%20Question"
              className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors"
            >
              {isDutch ? 'Neem Contact Op' : isSpanish ? 'Contáctanos' : 'Contact Us'} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

