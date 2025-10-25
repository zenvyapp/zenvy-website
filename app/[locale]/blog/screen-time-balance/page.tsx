"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ScreenTimeBalancePage() {
  const pathname = usePathname()
  
  const getCurrentLocale = () => {
    const path = pathname
    const localeMatch = path.match(/^\/([a-z]{2})/)
    return localeMatch ? localeMatch[1] : 'en'
  }
  
  const isDutch = getCurrentLocale() === 'nl'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link
            href={`/${getCurrentLocale()}/blog`}
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDutch ? 'Terug naar Blog' : 'Back to Blog'}
          </Link>

          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-9xl">📱</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{isDutch ? '15 maart 2025' : 'March 15, 2025'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{isDutch ? '5 min lezen' : '5 min read'}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {isDutch 
              ? '5 Tekenen Dat Je Gezin Betere Schermtijd Balans Nodig Heeft'
              : '5 Signs Your Family Needs Better Screen Time Balance'
            }
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {isDutch 
                ? 'In het digitale tijdperk van vandaag kan het vinden van de juiste balans tussen schermtijd en activiteiten in de echte wereld uitdagend zijn. Hier zijn vijf belangrijke indicatoren dat het tijd zou kunnen zijn om de relatie van je gezin met technologie opnieuw te evalueren.'
                : 'In today\'s digital age, finding the right balance between screen time and real-world activities can be challenging. Here are five key indicators that it might be time to reassess your family\'s relationship with technology.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? '1. Constante Gevechten Over Apparaten' : '1. Constant Battles Over Devices'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Als elke vraag om een apparaat weg te leggen uitmondt in een ruzie, is dat een duidelijk teken dat er grenzen moeten worden gesteld. Wanneer kinderen schermtijd limieten met toenemende intensiteit weerstaan, geeft dit vaak aan dat technologie te centraal is geworden in hun dagelijkse routine.'
                : 'If every request to put down a device turns into an argument, it\'s a clear sign that boundaries need to be established. When children resist screen time limits with increasing intensity, it often indicates that technology has become too central to their daily routine.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? '2. Afnemende Lichamelijke Activiteit' : '2. Declining Physical Activity'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Vallen je kinderen op die schermen verkiezen boven buitenspelen? Een significante afname van lichamelijke activiteit is een waarschuwingssignaal. Kinderen hebben regelmatige beweging nodig voor gezonde ontwikkeling, en overmatige schermtijd kan interfereren met dit cruciale aspect van opgroeien.'
                : 'Notice your kids choosing screens over outdoor play? A significant decrease in physical activity is a red flag. Children need regular movement for healthy development, and excessive screen time can interfere with this crucial aspect of growing up.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? '3. Slaapverstoringen' : '3. Sleep Disruptions'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Laat-nacht apparaatgebruik kan de slaapkwaliteit ernstig beïnvloeden. Als je kinderen moeite hebben met in slaap vallen, moe wakker worden, of \'s nachts stiekem apparaten in hun slaapkamer meenemen, is het tijd om strengere schermtijd grenzen in te voeren, vooral voor het slapengaan.'
                : 'Late-night device use can severely impact sleep quality. If your children are having trouble falling asleep, waking up tired, or sneaking devices into their bedrooms at night, it\'s time to implement stricter screen time boundaries, especially before bedtime.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? '4. Verminderde Face-to-Face Interactie' : '4. Reduced Face-to-Face Interaction'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Familiediners gedomineerd door telefoons? Gesprekken afgebroken om meldingen te controleren? Wanneer schermen betekenisvolle gezinsinteracties beginnen te vervangen, is dat een teken dat digitale gewoonten aanpassing nodig hebben. Kwaliteitstijd met het gezin is essentieel voor het opbouwen van sterke relaties.'
                : 'Family dinners dominated by phones? Conversations cut short to check notifications? When screens start replacing meaningful family interactions, it\'s a sign that digital habits need adjustment. Quality family time is essential for building strong relationships.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? '5. Veranderingen in Schoolprestaties' : '5. Academic Performance Changes'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Dalende cijfers, onvolledig huiswerk, of moeite met concentreren op schoolwerk kunnen allemaal gekoppeld worden aan overmatige schermtijd. Als je deze veranderingen opmerkt, is het misschien tijd om te evalueren hoeveel tijd wordt besteed aan apparaten versus educatieve activiteiten.'
                : 'Declining grades, incomplete homework, or difficulty concentrating on schoolwork can all be linked to excessive screen time. If you notice these changes, it might be time to evaluate how much time is being spent on devices versus educational activities.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Actie Ondernemen' : 'Taking Action'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het herkennen van deze signalen is de eerste stap naar het creëren van gezondere digitale gewoonten. Het goede nieuws is dat je met de juiste tools en aanpak je gezin kunt helpen balans te vinden. Apps zoals Zenvy maken het gemakkelijker om grenzen te stellen, gebruik te volgen en positief gedrag aan te moedigen door beloningen in plaats van beperkingen.'
                : 'Recognizing these signs is the first step toward creating healthier digital habits. The good news is that with the right tools and approach, you can help your family find balance. Apps like Zenvy make it easier to set boundaries, track usage, and encourage positive behaviors through rewards rather than restrictions.'
              }
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Onthoud, het doel is niet om schermtijd volledig te elimineren—technologie is een belangrijk onderdeel van het moderne leven. Richt je in plaats daarvan op een gezonde balans die je kinderen in staat stelt om te genieten van de voordelen van technologie terwijl ze nog steeds deelnemen aan lichamelijke activiteit, face-to-face interacties en andere essentiële aspecten van de kindertijd.'
                : 'Remember, the goal isn\'t to eliminate screen time entirely—technology is an important part of modern life. Instead, aim for a healthy balance that allows your children to enjoy the benefits of technology while still engaging in physical activity, face-to-face interactions, and other essential aspects of childhood.'
              }
            </p>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                {isDutch ? 'Klaar om Balans te Vinden?' : 'Ready to Find Balance?'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isDutch 
                  ? 'Zenvy helpt gezinnen gezonde schermtijd gewoonten te creëren door positieve versterking en slimme tracking. Begin vandaag nog je reis naar digitale wellness.'
                  : 'Zenvy helps families create healthy screen time habits through positive reinforcement and smart tracking. Start your journey toward digital wellness today.'
                }
              </p>
              <Link
                href={`/${getCurrentLocale()}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                {isDutch ? 'Meer Leren Over Zenvy' : 'Learn More About Zenvy'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
