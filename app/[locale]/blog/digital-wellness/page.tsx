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
  const isSpanish = getCurrentLocale() === 'es'
  const isFrench = getCurrentLocale() === 'fr'
  const isGerman = getCurrentLocale() === 'de'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link
            href={`/${getCurrentLocale()}/blog`}
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDutch ? 'Terug naar Blog' : isSpanish ? 'Volver al Blog' : isFrench ? 'Retour au Blog' : isGerman ? 'Zurück zum Blog' : 'Back to Blog'}
          </Link>

          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-9xl">🌟</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{isDutch ? '5 maart 2025' : isSpanish ? '5 de marzo de 2025' : isFrench ? '5 mars 2025' : isGerman ? '5. März 2025' : 'March 5, 2025'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{isDutch ? '6 min lezen' : isSpanish ? '6 min de lectura' : isFrench ? '6 min de lecture' : isGerman ? '6 Min. Lesezeit' : '6 min read'}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {isDutch 
              ? 'De Wetenschap Achter Digitale Wellness: Waarom Balans Belangrijk Is'
              : isSpanish
              ? 'La Ciencia Detrás del Bienestar Digital: Por Qué el Equilibrio Importa'
              : isFrench
              ? 'La Science derrière le Bien-être Numérique : Pourquoi l\'Équilibre Compte'
              : isGerman
              ? 'Die Wissenschaft Hinter Digitalem Wohlbefinden: Warum Balance Wichtig Ist'
              : 'The Science Behind Digital Wellness: Why Balance Matters'
            }
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {isDutch 
                ? 'Het begrijpen van het onderzoek achter schermtijd en kindontwikkeling kan ouders helpen weloverwogen beslissingen te nemen over de digitale gewoonten van hun gezin.'
                : isSpanish
                ? 'Entender la investigación detrás del tiempo de pantalla y el desarrollo infantil puede ayudar a los padres a tomar decisiones informadas sobre los hábitos digitales de su familia.'
                : isFrench
                ? 'Comprendre la recherche derrière le temps d\'écran et le développement de l\'enfant peut aider les parents à prendre des décisions éclairées concernant les habitudes numériques de leur famille.'
                : isGerman
                ? 'Das Verständnis der Forschung hinter Bildschirmzeit und kindlicher Entwicklung kann Eltern helfen, fundierte Entscheidungen über die digitalen Gewohnheiten ihrer Familie zu treffen.'
                : 'Understanding the research behind screen time and child development can help parents make informed decisions about their family\'s digital habits.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'De Impact op Hersenontwikkeling' : isSpanish ? 'El Impacto en el Desarrollo Cerebral' : isFrench ? 'L\'Impact sur le Développement Cérébral' : isGerman ? 'Die Auswirkungen Auf Die Gehirnentwicklung' : 'The Impact on Brain Development'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Onderzoek toont aan dat overmatige schermtijd tijdens kritieke ontwikkelingsjaren de hersenstructuur en -functie kan beïnvloeden. De prefrontale cortex, verantwoordelijk voor besluitvorming en impulscontrole, is bijzonder kwetsbaar. Studies hebben aangetoond dat kinderen die meer dan twee uur per dag aan schermen besteden verschillen in hersenontwikkeling vertonen vergeleken met diegenen met beperkte schermtijd.'
                : isSpanish
                ? 'La investigación muestra que el tiempo excesivo de pantalla durante los años críticos de desarrollo puede afectar la estructura y función cerebral. La corteza prefrontal, responsable de la toma de decisiones y el control de impulsos, es particularmente vulnerable. Los estudios han encontrado que los niños que pasan más de dos horas al día en pantallas muestran diferencias en el desarrollo cerebral comparado con aquellos con tiempo limitado de pantalla.'
                : isFrench
                ? 'La recherche montre que le temps d\'écran excessif pendant les années de développement critiques peut affecter la structure et la fonction du cerveau. Le cortex préfrontal, responsable de la prise de décision et du contrôle des impulsions, est particulièrement vulnérable. Les études ont montré que les enfants qui passent plus de deux heures par jour sur des écrans présentent des différences dans le développement cérébral par rapport à ceux ayant un temps d\'écran limité.'
                : 'Research shows that excessive screen time during critical developmental years can affect brain structure and function. The prefrontal cortex, responsible for decision-making and impulse control, is particularly vulnerable. Studies have found that children who spend more than two hours per day on screens show differences in brain development compared to those with limited screen time.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Slaap en Circadiaanse Ritmes' : isSpanish ? 'Sueño y Ritmos Circadianos' : isFrench ? 'Sommeil et Rythmes Circadiens' : isGerman ? 'Schlaf Und Zirkadiane Rhythmen' : 'Sleep and Circadian Rhythms'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Blauw licht van schermen onderdrukt de melatonineproductie, het hormoon dat de slaap reguleert. Deze verstoring kan leiden tot moeite met in slaap vallen, verminderde slaapkwaliteit en dagelijkse vermoeidheid. Kinderen hebben voldoende slaap nodig voor juiste cognitieve ontwikkeling, emotionele regulatie en lichamelijke groei. De American Academy of Pediatrics beveelt geen schermtijd aan ten minste één uur voor het slapengaan.'
                : isSpanish
                ? 'La luz azul de las pantallas suprime la producción de melatonina, la hormona que regula el sueño. Esta interrupción puede llevar a dificultad para conciliar el sueño, calidad de sueño reducida y fatiga diurna. Los niños necesitan sueño adecuado para el desarrollo cognitivo apropiado, regulación emocional y crecimiento físico. La Academia Americana de Pediatría recomienda no usar pantallas al menos una hora antes de acostarse.'
                : isFrench
                ? 'La lumière bleue des écrans supprime la production de mélatonine, l\'hormone qui régule le sommeil. Cette perturbation peut entraîner des difficultés à s\'endormir, une qualité de sommeil réduite et une fatigue diurne. Les enfants ont besoin d\'un sommeil adéquat pour le développement cognitif approprié, la régulation émotionnelle et la croissance physique. L\'Académie américaine de pédiatrie recommande de ne pas utiliser d\'écrans au moins une heure avant le coucher.'
                : 'Blue light from screens suppresses melatonin production, the hormone that regulates sleep. This disruption can lead to difficulty falling asleep, reduced sleep quality, and daytime fatigue. Children need adequate sleep for proper cognitive development, emotional regulation, and physical growth. The American Academy of Pediatrics recommends no screen time at least one hour before bedtime.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Sociale en Emotionele Ontwikkeling' : isSpanish ? 'Desarrollo Social y Emocional' : isFrench ? 'Développement Social et Émotionnel' : isGerman ? 'Soziale Und Emotionale Entwicklung' : 'Social and Emotional Development'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Face-to-face interactie is cruciaal voor het ontwikkelen van sociale vaardigheden, empathie en emotionele intelligentie. Wanneer schermtijd persoonlijke communicatie vervangt, missen kinderen belangrijke kansen om te leren hoe ze gezichtsuitdrukkingen kunnen lezen, lichaamstaal kunnen begrijpen en complexe sociale situaties kunnen navigeren. Studies hebben overmatige schermtijd gekoppeld aan verhoogde percentages van angst en depressie bij kinderen en adolescenten.'
                : isSpanish
                ? 'La interacción cara a cara es crucial para desarrollar habilidades sociales, empatía e inteligencia emocional. Cuando el tiempo de pantalla reemplaza la comunicación en persona, los niños se pierden oportunidades importantes para aprender a leer expresiones faciales, entender el lenguaje corporal y navegar situaciones sociales complejas. Los estudios han vinculado el tiempo excesivo de pantalla con tasas aumentadas de ansiedad y depresión en niños y adolescentes.'
                : isFrench
                ? 'L\'interaction en face à face est cruciale pour développer les compétences sociales, l\'empathie et l\'intelligence émotionnelle. Lorsque le temps d\'écran remplace la communication en personne, les enfants perdent d\'importantes opportunités d\'apprendre à lire les expressions faciales, à comprendre le langage corporel et à naviguer dans des situations sociales complexes. Les études ont lié le temps d\'écran excessif à des taux accrus d\'anxiété et de dépression chez les enfants et les adolescents.'
                : 'Face-to-face interaction is crucial for developing social skills, empathy, and emotional intelligence. When screen time replaces in-person communication, children miss out on important opportunities to learn how to read facial expressions, understand body language, and navigate complex social situations. Studies have linked excessive screen time to increased rates of anxiety and depression in children and adolescents.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Lichamelijke Gezondheidsoverwegingen' : isSpanish ? 'Consideraciones de Salud Física' : isFrench ? 'Considérations de Santé Physique' : isGerman ? 'Körperliche Gesundheitsüberlegungen' : 'Physical Health Considerations'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Zittende schermtijd draagt bij aan kinderobesitas, slechte houding en verminderde cardiovasculaire fitheid. De Wereldgezondheidsorganisatie beveelt aan dat kinderen van 5-17 jaar ten minste 60 minuten matige tot krachtige lichamelijke activiteit dagelijks krijgen. Overmatige schermtijd verdringt vaak deze cruciale lichamelijke activiteit, wat leidt tot langetermijn gezondheidsgevolgen.'
                : isSpanish
                ? 'El tiempo sedentario de pantalla contribuye a la obesidad infantil, mala postura y reducción de la condición cardiovascular. La Organización Mundial de la Salud recomienda que los niños de 5-17 años obtengan al menos 60 minutos de actividad física moderada a vigorosa diariamente. El tiempo excesivo de pantalla a menudo desplaza esta actividad física crucial, llevando a consecuencias de salud a largo plazo.'
                : isFrench
                ? 'Le temps d\'écran sédentaire contribue à l\'obésité infantile, aux mauvaises postures et à une forme cardiovasculaire réduite. L\'Organisation mondiale de la santé recommande que les enfants de 5 à 17 ans fassent au moins 60 minutes d\'activité physique modérée à vigoureuse quotidiennement. Le temps d\'écran excessif déplace souvent cette activité physique cruciale, entraînant des conséquences sanitaires à long terme.'
                : 'Sedentary screen time contributes to childhood obesity, poor posture, and reduced cardiovascular fitness. The World Health Organization recommends that children aged 5-17 get at least 60 minutes of moderate to vigorous physical activity daily. Excessive screen time often displaces this crucial physical activity, leading to long-term health consequences.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Aandacht en Focus' : isSpanish ? 'Atención y Concentración' : isFrench ? 'Attention et Concentration' : isGerman ? 'Aufmerksamkeit Und Fokus' : 'Attention and Focus'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het snelle tempo en constante stimulatie van digitale media kunnen het vermogen van kinderen om te focussen en aandacht vast te houden beïnvloeden. Onderzoek suggereert dat overmatige schermtijd, vooral met snel tempo inhoud, geassocieerd wordt met aandachtsproblemen en verminderde academische prestaties. Kinderen hebben kansen nodig om deel te nemen aan activiteiten die aanhoudende focus en geduld vereisen.'
                : isSpanish
                ? 'El ritmo rápido y la estimulación constante de los medios digitales pueden afectar la capacidad de los niños para concentrarse y mantener la atención. La investigación sugiere que el tiempo excesivo de pantalla, particularmente con contenido de ritmo rápido, está asociado con problemas de atención y rendimiento académico reducido. Los niños necesitan oportunidades para participar en actividades que requieren concentración sostenida y paciencia.'
                : isFrench
                ? 'Le rythme rapide et la stimulation constante des médias numériques peuvent affecter la capacité des enfants à se concentrer et à maintenir l\'attention. La recherche suggère que le temps d\'écran excessif, particulièrement avec du contenu au rythme rapide, est associé à des problèmes d\'attention et à une performance académique réduite. Les enfants ont besoin d\'occasions de s\'engager dans des activités qui nécessitent une concentration soutenue et de la patience.'
                : 'The rapid pace and constant stimulation of digital media can affect children\'s ability to focus and sustain attention. Research suggests that excessive screen time, particularly with fast-paced content, is associated with attention problems and reduced academic performance. Children need opportunities to engage in activities that require sustained focus and patience.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'De Positieve Kant van Technologie' : isSpanish ? 'El Lado Positivo de la Tecnología' : isFrench ? 'Le Côté Positif de la Technologie' : isGerman ? 'Die Positive Seite Der Technologie' : 'The Positive Side of Technology'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het is belangrijk op te merken dat niet alle schermtijd gelijk is. Educatieve inhoud, creatieve apps en videogesprekken met familieleden kunnen positieve voordelen hebben. De sleutel is het vinden van de juiste balans en ervoor zorgen dat schermtijd doelgericht is in plaats van passief. Kwaliteit is net zo belangrijk als kwantiteit als het gaat om digitale mediaconsumptie.'
                : isSpanish
                ? 'Es importante notar que no todo el tiempo de pantalla es igual. El contenido educativo, las aplicaciones creativas y las videollamadas con familiares pueden tener beneficios positivos. La clave es encontrar el equilibrio correcto y asegurar que el tiempo de pantalla sea intencional en lugar de pasivo. La calidad importa tanto como la cantidad cuando se trata del consumo de medios digitales.'
                : isFrench
                ? 'Il est important de noter que tout le temps d\'écran n\'est pas égal. Le contenu éducatif, les applications créatives et les appels vidéo avec les membres de la famille peuvent avoir des avantages positifs. La clé est de trouver le bon équilibre et de s\'assurer que le temps d\'écran est intentionnel plutôt que passif. La qualité compte autant que la quantité lorsqu\'il s\'agit de la consommation de médias numériques.'
                : 'It\'s important to note that not all screen time is created equal. Educational content, creative apps, and video calls with family members can have positive benefits. The key is finding the right balance and ensuring that screen time is purposeful rather than passive. Quality matters as much as quantity when it comes to digital media consumption.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'De Juiste Balans Vinden' : isSpanish ? 'Encontrar el Equilibrio Correcto' : isFrench ? 'Trouver le Bon Équilibre' : isGerman ? 'Die Richtige Balance Finden' : 'Finding the Right Balance'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Het doel is niet om schermen volledig te elimineren—dat is noch realistisch noch noodzakelijk in onze digitale wereld. Richt je in plaats daarvan op een gebalanceerde aanpak die het volgende omvat:'
                : isSpanish
                ? 'El objetivo no es eliminar las pantallas completamente—eso no es ni realista ni necesario en nuestro mundo digital. En su lugar, apunta a un enfoque equilibrado que incluya:'
                : isFrench
                ? 'L\'objectif n\'est pas d\'éliminer complètement les écrans—ce n\'est ni réaliste ni nécessaire dans notre monde numérique. Au lieu de cela, visez une approche équilibrée qui comprend :'
                : 'The goal isn\'t to eliminate screens entirely—that\'s neither realistic nor necessary in our digital world. Instead, aim for a balanced approach that includes:'
              }
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>{isDutch ? 'Leeftijdsgeschikte schermtijd limieten' : isSpanish ? 'Límites de tiempo de pantalla apropiados para la edad' : isFrench ? 'Limites de temps d\'écran appropriées à l\'âge' : isGerman ? 'Altersgerechte Bildschirmzeit-Limits' : 'Age-appropriate screen time limits'}</li>
              <li>{isDutch ? 'Regelmatige lichamelijke activiteit en buitenspelen' : isSpanish ? 'Actividad física regular y juego al aire libre' : isFrench ? 'Activité physique régulière et jeux en plein air' : isGerman ? 'Regelmäßige körperliche Aktivität und Spielen im Freien' : 'Regular physical activity and outdoor play'}</li>
              <li>{isDutch ? 'Face-to-face gezinstijd zonder apparaten' : isSpanish ? 'Tiempo familiar cara a cara sin dispositivos' : isFrench ? 'Temps en famille en face à face sans appareils' : isGerman ? 'Face-to-Face Familienzeit ohne Geräte' : 'Face-to-face family time without devices'}</li>
              <li>{isDutch ? 'Kwaliteit educatieve inhoud wanneer schermen worden gebruikt' : isSpanish ? 'Contenido educativo de calidad cuando se usan pantallas' : isFrench ? 'Contenu éducatif de qualité lors de l\'utilisation d\'écrans' : isGerman ? 'Qualitativ hochwertige Bildungsinhalte bei der Nutzung von Bildschirmen' : 'Quality educational content when screens are used'}</li>
              <li>{isDutch ? 'Schermvrije zones en tijden (zoals slaapkamers en maaltijden)' : isSpanish ? 'Zonas y tiempos libres de pantalla (como habitaciones y comidas)' : isFrench ? 'Zones et moments sans écran (comme les chambres et les repas)' : isGerman ? 'Bildschirmfreie Zonen und Zeiten (wie Schlafzimmer und Mahlzeiten)' : 'Screen-free zones and times (like bedrooms and mealtimes)'}</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Onderzoeksgebaseerde Aanbevelingen' : isSpanish ? 'Recomendaciones Basadas en Evidencia' : isFrench ? 'Recommandations Basées sur des Preuves' : isGerman ? 'Evidenzbasierte Empfehlungen' : 'Evidence-Based Recommendations'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Grote gezondheidsorganisaties bieden richtlijnen gebaseerd op huidig onderzoek:'
                : isSpanish
                ? 'Las principales organizaciones de salud proporcionan pautas basadas en investigación actual:'
                : isFrench
                ? 'Les principales organisations de santé fournissent des directives basées sur la recherche actuelle :'
                : 'Major health organizations provide guidelines based on current research:'
              }
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>{isDutch ? 'Kinderen onder 18 maanden: Vermijd schermtijd behalve videobellen' : isSpanish ? 'Niños menores de 18 meses: Evitar tiempo de pantalla excepto videollamadas' : isFrench ? 'Enfants de moins de 18 mois : Éviter le temps d\'écran sauf les appels vidéo' : isGerman ? 'Kinder unter 18 Monaten: Bildschirmzeit vermeiden außer Videoanrufen' : 'Children under 18 months: Avoid screen time except video chatting'}</li>
              <li>{isDutch ? 'Leeftijd 2-5: Beperk tot één uur per dag van hoogwaardige programmering' : isSpanish ? 'Edades 2-5: Limitar a una hora por día de programación de alta calidad' : isFrench ? 'Ages 2-5 : Limiter à une heure par jour de programmation de haute qualité' : isGerman ? 'Alter 2-5: Auf eine Stunde pro Tag hochwertiger Programmierung beschränken' : 'Ages 2-5: Limit to one hour per day of high-quality programming'}</li>
              <li>{isDutch ? 'Leeftijd 6 en ouder: Consistente limieten op tijd en soorten media' : isSpanish ? 'Edades 6 y mayores: Límites consistentes en tiempo y tipos de medios' : isFrench ? 'Ages 6 et plus : Limites cohérentes sur le temps et les types de médias' : isGerman ? 'Alter 6 und älter: Konsistente Limits für Zeit und Arten von Medien' : 'Ages 6 and older: Consistent limits on time and types of media'}</li>
              <li>{isDutch ? 'Alle leeftijden: Geen schermen tijdens maaltijden of één uur voor het slapengaan' : isSpanish ? 'Todas las edades: Sin pantallas durante las comidas o una hora antes de acostarse' : isFrench ? 'Tous les âges : Pas d\'écrans pendant les repas ou une heure avant le coucher' : isGerman ? 'Alle Altersgruppen: Keine Bildschirme während der Mahlzeiten oder eine Stunde vor dem Schlafengehen' : 'All ages: No screens during meals or one hour before bedtime'}</li>
            </ul>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                {isDutch ? 'Onderzoeksgebaseerde Digitale Wellness' : isSpanish ? 'Bienestar Digital Basado en Ciencia' : isFrench ? 'Bien-être Numérique Basé sur des Preuves' : isGerman ? 'Wissenschaftlich Untermauerte Digitale Wellness' : 'Science-Backed Digital Wellness'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isDutch 
                  ? 'Zenvy is gebouwd op onderzoeksgebaseerde principes van digitale wellness, en helpt gezinnen onderzoeksgebaseerde schermtijd strategieën te implementeren door positieve versterking en slimme tracking. Neem weloverwogen beslissingen over de digitale gezondheid van je gezin.'
                  : isSpanish
                  ? 'Zenvy está construido sobre principios de bienestar digital respaldados por investigación, ayudando a las familias a implementar estrategias de tiempo de pantalla basadas en evidencia a través de refuerzo positivo y seguimiento inteligente. Toma decisiones informadas sobre la salud digital de tu familia.'
                  : isFrench
                  ? 'Zenvy est construit sur des principes de bien-être numérique basés sur des preuves, aidant les familles à mettre en œuvre des stratégies de temps d\'écran fondées sur des preuves grâce au renforcement positif et au suivi intelligent. Prenez des décisions éclairées concernant la santé numérique de votre famille.'
                  : 'Zenvy is built on research-backed principles of digital wellness, helping families implement evidence-based screen time strategies through positive reinforcement and smart tracking. Make informed decisions about your family\'s digital health.'
                }
              </p>
              <Link
                href={`/${getCurrentLocale()}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                {isDutch ? 'Begin Je Digitale Wellness Reis' : isSpanish ? 'Comienza Tu Viaje de Bienestar Digital' : isFrench ? 'Commencez Votre Parcours de Bien-être Numérique' : isGerman ? 'Beginnen Sie Ihre Digitale Wellness Reise' : 'Start Your Digital Wellness Journey'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
