import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Headphones, Shield, Globe, HelpCircle } from "lucide-react"

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                We zijn <span className="text-secondary">Hier</span>
              </>
            ) : isSpanish ? (
              <>
                Estamos <span className="text-secondary">Aquí</span>
              </>
            ) : (
              <>
                We're <span className="text-secondary">Here</span>
              </>
            )}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-balance">
            {isDutch 
              ? 'Neem Contact Met Ons Op Voor Vragen of Feedback'
              : isSpanish 
              ? 'Conéctate con Nosotros para Cualquier Pregunta o Comentario'
              : 'Connect with Us for Any Questions or Feedback'
            }
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {isDutch 
              ? 'Heb je een vraag, idee, of wil je gewoon hallo zeggen? We horen graag van je. Of je nu ouder, opvoeder, nieuwsgierige gebruiker of potentiële partner bent — je bericht is welkom. Ons team is hier om te luisteren en zal zo snel mogelijk contact met je opnemen.'
              : isSpanish 
              ? '¿Tienes una pregunta, una idea, o simplemente quieres saludar? Nos encantaría saber de ti. Ya seas padre, educador, usuario curioso o socio potencial — tu mensaje es bienvenido. Nuestro equipo está aquí para escuchar y te contactaremos lo antes posible.'
              : 'Got a question, idea, or just want to say hello? We\'d love to hear from you. Whether you\'re a parent, educator, curious user, or a potential partner — your message is welcome. Our team is here to listen and will get back to you as soon as possible.'
            }
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* General Inquiries */}
            <Card className="border-2 hover:border-secondary transition-colors flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {isDutch ? 'Algemene Vragen' : isSpanish ? 'Consultas Generales' : 'General Inquiries'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Voel je vrij om contact op te nemen voor algemene vragen, feedback of samenwerkingsideeën:'
                    : isSpanish 
                    ? 'Siéntete libre de contactarnos para cualquier pregunta general, comentarios o ideas de colaboración:'
                    : 'Feel free to reach out for any general questions, feedback, or collaboration ideas:'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center mt-auto">
                <a
                  href="mailto:hello@zenvy.io?subject=General%20Inquiry"
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors inline-block"
                >
                  hello@zenvy.io
                </a>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="border-2 hover:border-secondary transition-colors flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {isDutch ? 'Technische Ondersteuning' : isSpanish ? 'Soporte Técnico' : 'Technical Support'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Ervaar je problemen met de app of heb je hulp nodig met een technische functie? Ons ondersteuningsteam staat klaar om je te helpen:'
                    : isSpanish 
                    ? '¿Experimentas problemas con la app o necesitas ayuda con una función técnica? Nuestro equipo de soporte está listo para ayudarte:'
                    : 'Experiencing issues with the app or need help with a technical feature? Our support team is ready to assist you:'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center mt-auto">
                <a
                  href="mailto:support@zenvy.io?subject=Technical%20Support%20Request"
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors inline-block"
                >
                  support@zenvy.io
                </a>
              </CardContent>
            </Card>

            {/* Privacy & Data Requests */}
            <Card className="border-2 hover:border-secondary transition-colors flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {isDutch ? 'Privacy & Gegevensverzoeken' : isSpanish ? 'Privacidad y Solicitudes de Datos' : 'Privacy & Data Requests'}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {isDutch 
                    ? 'Voor privacy-gerelateerde zorgen of gegevensverzoeken, neem contact met ons op via:'
                    : isSpanish 
                    ? 'Para cualquier preocupación relacionada con la privacidad o solicitudes de acceso a datos, contáctanos en:'
                    : 'For any privacy-related concerns or data access requests, contact us at:'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center mt-auto">
                <a
                  href="mailto:privacy@zenvy.io?subject=Privacy%20Request"
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors inline-block"
                >
                  privacy@zenvy.io
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">
                {isDutch ? (
                  <>
                    Veelgestelde <span className="text-secondary">Vragen</span>
                  </>
                ) : isSpanish ? (
                  <>
                    Preguntas <span className="text-secondary">Frecuentes</span>
                  </>
                ) : (
                  <>
                    Frequently Asked <span className="text-secondary">Questions</span>
                  </>
                )}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {isDutch 
                ? 'Snelle antwoorden op veelgestelde vragen over Zenvy'
                : isSpanish 
                ? 'Respuestas rápidas a preguntas comunes sobre Zenvy'
                : 'Quick answers to common questions about Zenvy'
              }
            </p>
          </div>

          {/* Accordion with fixes */}
          <Accordion
            type="single"
            collapsible
            className="space-y-4 relative z-10 pb-px"
          >
            <AccordionItem value="item-1" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {isDutch ? 'Hoe werkt Zenvy?' : isSpanish ? '¿Cómo funciona Zenvy?' : 'How does Zenvy work?'}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Zenvy helpt gezinnen schermtijd op een leuke en boeiende manier te beheren. Ouders kunnen gezonde limieten instellen, gebruik over apparaten volgen en kinderen belonen met ZenCoins voor het behalen van hun doelen. De app verandert schermtijd beheer in een positieve gezinservaring in plaats van een gevecht.'
                  : isSpanish 
                  ? 'Zenvy ayuda a las familias a gestionar el tiempo de pantalla de una manera divertida y atractiva. Los padres pueden establecer límites saludables, rastrear el uso en todos los dispositivos y recompensar a los niños con ZenCoins por alcanzar sus objetivos. La app convierte la gestión del tiempo de pantalla en una experiencia familiar positiva en lugar de una batalla.'
                  : 'Zenvy helps families manage screen time in a fun and engaging way. Parents can set healthy limits, track usage across devices, and reward kids with ZenCoins for meeting their goals. The app turns screen time management into a positive family experience rather than a battle.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {isDutch ? 'Is Zenvy echt gratis?' : isSpanish ? '¿Zenvy es realmente gratuito?' : 'Is Zenvy really free?'}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Ja! Zenvy is volledig gratis te gebruiken. We zijn een startup gefinancierd door donaties van gezinnen die in onze missie geloven. Ons doel is om de app zo lang mogelijk gratis te houden zodat elk gezin kan profiteren van gezondere schermtijd gewoonten, ongeacht hun financiële situatie.'
                  : isSpanish 
                  ? '¡Sí! Zenvy es completamente gratuito. Somos una startup financiada por donaciones de familias que creen en nuestra misión. Nuestro objetivo es mantener la app gratuita el mayor tiempo posible para que cada familia pueda beneficiarse de hábitos de tiempo de pantalla más saludables, independientemente de su situación financiera.'
                  : 'Yes! Zenvy is completely free to use. We\'re a startup funded by donations from families who believe in our mission. Our goal is to keep the app free for as long as possible so every family can benefit from healthier screen time habits, regardless of their financial situation.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {isDutch ? 'Welke apparaten ondersteunt Zenvy?' : isSpanish ? '¿Qué dispositivos soporta Zenvy?' : 'What devices does Zenvy support?'}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Zenvy is beschikbaar op zowel iOS als Android apparaten. Je kunt het downloaden vanuit de App Store of Google Play Store. De app werkt naadloos op alle apparaten van je gezin, waardoor je schermtijd overal kunt beheren.'
                  : isSpanish 
                  ? 'Zenvy está disponible tanto en dispositivos iOS como Android. Puedes descargarlo desde la App Store o Google Play Store. La app funciona perfectamente en todos los dispositivos de tu familia, permitiéndote gestionar el tiempo de pantalla desde cualquier lugar.'
                  : 'Zenvy is available on both iOS and Android devices. You can download it from the App Store or Google Play Store. The app works seamlessly across all your family\'s devices, allowing you to manage screen time from anywhere.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {isDutch ? 'Hoe worden de gegevens van mijn gezin beschermd?' : isSpanish ? '¿Cómo se protegen los datos de mi familia?' : 'How is my family\'s data protected?'}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Privacy is onze hoogste prioriteit. Alle gegevens van je gezin worden versleuteld en veilig opgeslagen. We verkopen nooit je gegevens aan derden, en dat zullen we ook nooit doen. Je informatie wordt uitsluitend gebruikt om je de best mogelijke ervaring te bieden. Je kunt meer lezen in ons Privacybeleid.'
                  : isSpanish 
                  ? 'La privacidad es nuestra máxima prioridad. Todos los datos de tu familia están encriptados y almacenados de forma segura. Nunca vendemos tus datos a terceros, y nunca lo haremos. Tu información se usa únicamente para brindarte la mejor experiencia posible. Puedes leer más en nuestra Política de Privacidad.'
                  : 'Privacy is our top priority. All your family\'s data is encrypted and stored securely. We never sell your data to third parties, and we never will. Your information is used solely to provide you with the best possible experience. You can read more in our Privacy Policy.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {isDutch ? 'Hoe begin ik met Zenvy?' : isSpanish ? '¿Cómo empiezo con Zenvy?' : 'How do I get started with Zenvy?'}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Beginnen is eenvoudig! Download gewoon de Zenvy app uit de App Store of Google Play Store, maak een gezinsaccount aan, voeg je familieleden toe en stel je eerste schermtijd doelen in. De app bevat een handige onboarding gids die je door het proces leidt.'
                  : isSpanish 
                  ? '¡Empezar es fácil! Simplemente descarga la app Zenvy desde la App Store o Google Play Store, crea una cuenta familiar, agrega a tus familiares y configura tus primeros objetivos de tiempo de pantalla. La app incluye una guía de incorporación útil que te guiará a través del proceso.'
                  : 'Getting started is easy! Simply download the Zenvy app from the App Store or Google Play Store, create a family account, add your family members, and set up your first screen time goals. The app includes a helpful onboarding guide to walk you through the process.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-background border-2 border-border rounded-lg px-6 last:border-b-2"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {isDutch ? 'Kan ik schermtijd regels aanpassen voor elk kind?' : isSpanish ? '¿Puedo personalizar las reglas de tiempo de pantalla para cada niño?' : 'Can I customize screen time rules for each child?'}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {isDutch 
                  ? 'Zenvy stelt je in staat om gepersonaliseerde schermtijd regels te maken voor elk familielid. Je kunt verschillende limieten, schema\'s en beloningen instellen op basis van leeftijd, behoeften en gezinswaarden. Elk gezin is uniek, en Zenvy past zich aan jouw gezin aan.'
                  : isSpanish 
                  ? 'Zenvy te permite crear reglas de tiempo de pantalla personalizadas para cada miembro de la familia. Puedes establecer diferentes límites, horarios y recompensas basados en la edad, necesidades y valores familiares. Cada familia es única, y Zenvy se adapta a la tuya.'
                  : 'Zenvy allows you to create personalized screen time rules for each family member. You can set different limits, schedules, and rewards based on age, needs, and family values. Every family is unique, and Zenvy adapts to yours.'
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Netherlands block */}
          <div className="mt-16 relative z-0">
            <div className="inline-flex items-center gap-3 px-8 py-6 rounded-2xl bg-secondary/10 border-2 border-secondary/30 w-full">
              <Globe className="w-7 h-7 text-secondary flex-shrink-0" />
              <p className="text-lg font-medium text-foreground text-pretty leading-relaxed">
                {isDutch 
                  ? 'Zenvy is gecreëerd in Nederland, maar gemaakt met liefde voor gezinnen over de hele wereld.\n\nWaar je ook vandaan komt, we zijn er voor je.'
                  : isSpanish 
                  ? 'Zenvy es creado en los Países Bajos, pero hecho con amor para familias de todo el mundo.\n\nNo importa de dónde seas, estamos aquí para ti.'
                  : 'Zenvy is created in the Netherlands, but made with love for families all over the world.\n\nNo matter where you\'re from, we\'re here for you.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

