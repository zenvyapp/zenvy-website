"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DigitalWellnessPage() {
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
            <span className="text-9xl">🌟</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{isDutch ? '5 maart 2025' : 'March 5, 2025'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{isDutch ? '6 min lezen' : '6 min read'}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {isDutch 
              ? 'De Wetenschap Achter Digitale Wellness: Waarom Balans Belangrijk Is'
              : 'The Science Behind Digital Wellness: Why Balance Matters'
            }
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {isDutch 
                ? 'Het begrijpen van het onderzoek achter schermtijd en kindontwikkeling kan ouders helpen weloverwogen beslissingen te nemen over de digitale gewoonten van hun gezin.'
                : 'Understanding the research behind screen time and child development can help parents make informed decisions about their family\'s digital habits.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'De Impact op Hersenontwikkeling' : 'The Impact on Brain Development'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Onderzoek toont aan dat overmatige schermtijd tijdens kritieke ontwikkelingsjaren de hersenstructuur en -functie kan beïnvloeden. De prefrontale cortex, verantwoordelijk voor besluitvorming en impulscontrole, is bijzonder kwetsbaar. Studies hebben aangetoond dat kinderen die meer dan twee uur per dag aan schermen besteden verschillen in hersenontwikkeling vertonen vergeleken met diegenen met beperkte schermtijd.'
                : 'Research shows that excessive screen time during critical developmental years can affect brain structure and function. The prefrontal cortex, responsible for decision-making and impulse control, is particularly vulnerable. Studies have found that children who spend more than two hours per day on screens show differences in brain development compared to those with limited screen time.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Slaap en Circadiaanse Ritmes' : 'Sleep and Circadian Rhythms'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Blauw licht van schermen onderdrukt de melatonineproductie, het hormoon dat de slaap reguleert. Deze verstoring kan leiden tot moeite met in slaap vallen, verminderde slaapkwaliteit en dagelijkse vermoeidheid. Kinderen hebben voldoende slaap nodig voor juiste cognitieve ontwikkeling, emotionele regulatie en lichamelijke groei. De American Academy of Pediatrics beveelt geen schermtijd aan ten minste één uur voor het slapengaan.'
                : 'Blue light from screens suppresses melatonin production, the hormone that regulates sleep. This disruption can lead to difficulty falling asleep, reduced sleep quality, and daytime fatigue. Children need adequate sleep for proper cognitive development, emotional regulation, and physical growth. The American Academy of Pediatrics recommends no screen time at least one hour before bedtime.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Sociale en Emotionele Ontwikkeling' : 'Social and Emotional Development'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Face-to-face interactie is cruciaal voor het ontwikkelen van sociale vaardigheden, empathie en emotionele intelligentie. Wanneer schermtijd persoonlijke communicatie vervangt, missen kinderen belangrijke kansen om te leren hoe ze gezichtsuitdrukkingen kunnen lezen, lichaamstaal kunnen begrijpen en complexe sociale situaties kunnen navigeren. Studies hebben overmatige schermtijd gekoppeld aan verhoogde percentages van angst en depressie bij kinderen en adolescenten.'
                : 'Face-to-face interaction is crucial for developing social skills, empathy, and emotional intelligence. When screen time replaces in-person communication, children miss out on important opportunities to learn how to read facial expressions, understand body language, and navigate complex social situations. Studies have linked excessive screen time to increased rates of anxiety and depression in children and adolescents.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Lichamelijke Gezondheidsoverwegingen' : 'Physical Health Considerations'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Zittende schermtijd draagt bij aan kinderobesitas, slechte houding en verminderde cardiovasculaire fitheid. De Wereldgezondheidsorganisatie beveelt aan dat kinderen van 5-17 jaar ten minste 60 minuten matige tot krachtige lichamelijke activiteit dagelijks krijgen. Overmatige schermtijd verdringt vaak deze cruciale lichamelijke activiteit, wat leidt tot langetermijn gezondheidsgevolgen.'
                : 'Sedentary screen time contributes to childhood obesity, poor posture, and reduced cardiovascular fitness. The World Health Organization recommends that children aged 5-17 get at least 60 minutes of moderate to vigorous physical activity daily. Excessive screen time often displaces this crucial physical activity, leading to long-term health consequences.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Aandacht en Focus' : 'Attention and Focus'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het snelle tempo en constante stimulatie van digitale media kunnen het vermogen van kinderen om te focussen en aandacht vast te houden beïnvloeden. Onderzoek suggereert dat overmatige schermtijd, vooral met snel tempo inhoud, geassocieerd wordt met aandachtsproblemen en verminderde academische prestaties. Kinderen hebben kansen nodig om deel te nemen aan activiteiten die aanhoudende focus en geduld vereisen.'
                : 'The rapid pace and constant stimulation of digital media can affect children\'s ability to focus and sustain attention. Research suggests that excessive screen time, particularly with fast-paced content, is associated with attention problems and reduced academic performance. Children need opportunities to engage in activities that require sustained focus and patience.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'De Positieve Kant van Technologie' : 'The Positive Side of Technology'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het is belangrijk op te merken dat niet alle schermtijd gelijk is. Educatieve inhoud, creatieve apps en videogesprekken met familieleden kunnen positieve voordelen hebben. De sleutel is het vinden van de juiste balans en ervoor zorgen dat schermtijd doelgericht is in plaats van passief. Kwaliteit is net zo belangrijk als kwantiteit als het gaat om digitale mediaconsumptie.'
                : 'It\'s important to note that not all screen time is created equal. Educational content, creative apps, and video calls with family members can have positive benefits. The key is finding the right balance and ensuring that screen time is purposeful rather than passive. Quality matters as much as quantity when it comes to digital media consumption.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'De Juiste Balans Vinden' : 'Finding the Right Balance'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het doel is niet om schermen volledig te elimineren—dat is noch realistisch noch noodzakelijk in onze digitale wereld. Richt je in plaats daarvan op een gebalanceerde aanpak die het volgende omvat:'
                : 'The goal isn\'t to eliminate screens entirely—that\'s neither realistic nor necessary in our digital world. Instead, aim for a balanced approach that includes:'
              }
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>{isDutch ? 'Leeftijdsgeschikte schermtijd limieten' : 'Age-appropriate screen time limits'}</li>
              <li>{isDutch ? 'Regelmatige lichamelijke activiteit en buitenspelen' : 'Regular physical activity and outdoor play'}</li>
              <li>{isDutch ? 'Face-to-face gezinstijd zonder apparaten' : 'Face-to-face family time without devices'}</li>
              <li>{isDutch ? 'Kwaliteit educatieve inhoud wanneer schermen worden gebruikt' : 'Quality educational content when screens are used'}</li>
              <li>{isDutch ? 'Schermvrije zones en tijden (zoals slaapkamers en maaltijden)' : 'Screen-free zones and times (like bedrooms and mealtimes)'}</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Onderzoeksgebaseerde Aanbevelingen' : 'Evidence-Based Recommendations'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Grote gezondheidsorganisaties bieden richtlijnen gebaseerd op huidig onderzoek:'
                : 'Major health organizations provide guidelines based on current research:'
              }
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>{isDutch ? 'Kinderen onder 18 maanden: Vermijd schermtijd behalve videobellen' : 'Children under 18 months: Avoid screen time except video chatting'}</li>
              <li>{isDutch ? 'Leeftijd 2-5: Beperk tot één uur per dag van hoogwaardige programmering' : 'Ages 2-5: Limit to one hour per day of high-quality programming'}</li>
              <li>{isDutch ? 'Leeftijd 6 en ouder: Consistente limieten op tijd en soorten media' : 'Ages 6 and older: Consistent limits on time and types of media'}</li>
              <li>{isDutch ? 'Alle leeftijden: Geen schermen tijdens maaltijden of één uur voor het slapengaan' : 'All ages: No screens during meals or one hour before bedtime'}</li>
            </ul>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                {isDutch ? 'Onderzoeksgebaseerde Digitale Wellness' : 'Science-Backed Digital Wellness'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isDutch 
                  ? 'Zenvy is gebouwd op onderzoeksgebaseerde principes van digitale wellness, en helpt gezinnen onderzoeksgebaseerde schermtijd strategieën te implementeren door positieve versterking en slimme tracking. Neem weloverwogen beslissingen over de digitale gezondheid van je gezin.'
                  : 'Zenvy is built on research-backed principles of digital wellness, helping families implement evidence-based screen time strategies through positive reinforcement and smart tracking. Make informed decisions about your family\'s digital health.'
                }
              </p>
              <Link
                href={`/${getCurrentLocale()}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                {isDutch ? 'Begin Je Digitale Wellness Reis' : 'Start Your Digital Wellness Journey'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
