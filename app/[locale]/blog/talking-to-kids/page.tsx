"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TalkingToKidsPage() {
  const pathname = usePathname()
  
  const getCurrentLocale = () => {
    const path = pathname
    const localeMatch = path.match(/^\/([a-z]{2})/)
    return localeMatch ? localeMatch[1] : 'en'
  }
  
  const isDutch = getCurrentLocale() === 'nl'
  const isSpanish = getCurrentLocale() === 'es'
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
            {isDutch ? 'Terug naar Blog' : isSpanish ? 'Volver al Blog' : 'Back to Blog'}
          </Link>

          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-9xl">👨‍👩‍👧‍👦</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{isDutch ? '10 maart 2025' : isSpanish ? '10 de marzo de 2025' : 'March 10, 2025'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{isDutch ? '7 min lezen' : isSpanish ? '7 min de lectura' : '7 min read'}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {isDutch 
              ? 'Hoe Je Met Je Kinderen Over Schermtijd Praat Zonder Drama'
              : isSpanish
              ? 'Cómo Hablar con Tus Hijos Sobre el Tiempo de Pantalla Sin Drama'
              : 'How to Talk to Your Kids About Screen Time Without the Drama'
            }
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {isDutch 
                ? 'Het bespreken van schermtijd met kinderen hoeft niet te eindigen in tranen en driftbuien. Hier is hoe je productieve gesprekken kunt voeren die begrip en samenwerking opbouwen.'
                : isSpanish
                ? 'Discutir el tiempo de pantalla con los niños no tiene que terminar en lágrimas y berrinches. Aquí te mostramos cómo tener conversaciones productivas que construyan comprensión y cooperación.'
                : 'Discussing screen time with children doesn\'t have to end in tears and tantrums. Here\'s how to have productive conversations that build understanding and cooperation.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Begin met Empathie' : isSpanish ? 'Comienza con Empatía' : 'Start with Empathy'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Voordat je duikt in regels en beperkingen, neem de tijd om het perspectief van je kind te begrijpen. Vraag ze wat ze leuk vinden aan hun favoriete apps of games. Toon oprechte interesse in hun digitale wereld. Wanneer kinderen zich gehoord en begrepen voelen, zijn ze meer geneigd om ontvankelijk te zijn voor jouw zorgen.'
                : isSpanish
                ? 'Antes de sumergirte en reglas y restricciones, tómate el tiempo para entender la perspectiva de tu hijo. Pregúntales qué les gusta de sus aplicaciones o juegos favoritos. Muestra interés genuino en su mundo digital. Cuando los niños se sienten escuchados y comprendidos, es más probable que sean receptivos a tus preocupaciones.'
                : 'Before diving into rules and restrictions, take time to understand your child\'s perspective. Ask them what they enjoy about their favorite apps or games. Show genuine interest in their digital world. When children feel heard and understood, they\'re more likely to be receptive to your concerns.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Leg het "Waarom" Achter de Regels Uit' : isSpanish ? 'Explica el "Por Qué" Detrás de las Reglas' : 'Explain the "Why" Behind the Rules'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Kinderen volgen richtlijnen eerder wanneer ze de redenering erachter begrijpen. In plaats van simpelweg "geen schermtijd meer" te zeggen, leg uit hoe te veel schermtijd slaap, lichamelijke gezondheid en sociale vaardigheden kan beïnvloeden. Gebruik leeftijdsgeschikte taal en voorbeelden uit de echte wereld waarmee ze zich kunnen identificeren.'
                : isSpanish
                ? 'Los niños siguen las pautas más fácilmente cuando entienden el razonamiento detrás de ellas. En lugar de simplemente decir "no más tiempo de pantalla", explica cómo demasiado tiempo de pantalla puede afectar el sueño, la salud física y las habilidades sociales. Usa lenguaje apropiado para la edad y ejemplos del mundo real con los que puedan relacionarse.'
                : 'Children are more likely to follow guidelines when they understand the reasoning behind them. Instead of simply saying "no more screen time," explain how too much screen time can affect sleep, physical health, and social skills. Use age-appropriate language and real-world examples they can relate to.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Betrek Ze Bij Het Stellen Van Grenzen' : isSpanish ? 'Involúcralos en Establecer Límites' : 'Involve Them in Setting Boundaries'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Geef je kinderen een stem in het creëren van schermtijd regels. Vraag om hun input over redelijke limieten en consequenties. Wanneer kinderen deelnemen aan het besluitvormingsproces, voelen ze meer eigendom over de regels en zijn ze eerder geneigd om ze te respecteren. Deze collaboratieve aanpak transformeert het gesprek van een machtsstrijd naar een teaminspanning.'
                : isSpanish
                ? 'Dale a tus hijos una voz en la creación de reglas de tiempo de pantalla. Pide su opinión sobre límites razonables y consecuencias. Cuando los niños participan en el proceso de toma de decisiones, sienten más propiedad sobre las reglas y es más probable que las respeten. Este enfoque colaborativo transforma la conversación de una lucha de poder en un esfuerzo de equipo.'
                : 'Give your children a voice in creating screen time rules. Ask for their input on reasonable limits and consequences. When kids participate in the decision-making process, they feel more ownership over the rules and are more likely to respect them. This collaborative approach transforms the conversation from a power struggle into a team effort.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Focus op Positieve Alternatieven' : isSpanish ? 'Enfócate en Alternativas Positivas' : 'Focus on Positive Alternatives'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'In plaats van alleen schermtijd weg te nemen, bied spannende alternatieven aan. Stel familiegame avonden, buitenshuis avonturen of creatieve projecten voor. Help je kinderen activiteiten ontdekken die ze leuk vinden en die geen schermen betreffen. Het doel is om offline tijd aantrekkelijk te maken, niet om schermtijd als een straf te laten voelen.'
                : isSpanish
                ? 'En lugar de simplemente quitar el tiempo de pantalla, ofrece alternativas emocionantes. Sugiere noches de juegos familiares, aventuras al aire libre o proyectos creativos. Ayuda a tus hijos a descubrir actividades que disfruten y que no involucren pantallas. El objetivo es hacer que el tiempo sin pantalla sea atractivo, no hacer que el tiempo de pantalla se sienta como un castigo.'
                : 'Rather than just taking away screen time, offer exciting alternatives. Suggest family game nights, outdoor adventures, or creative projects. Help your children discover activities they enjoy that don\'t involve screens. The goal is to make offline time appealing, not to make screen time feel like a punishment.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Gebruik Beloningen, Niet Alleen Beperkingen' : isSpanish ? 'Usa Recompensas, No Solo Restricciones' : 'Use Rewards, Not Just Restrictions'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Positieve versterking is effectiever dan straf. In plaats van te dreigen met het wegnemen van apparaten, creëer een beloningssysteem voor gezonde schermtijd gewoonten. Dit kan het verdienen van extra schermtijd inhouden voor het voltooien van klusjes, lezen, of tijd buitenshuis doorbrengen. Apps zoals Zenvy maken deze aanpak gemakkelijk door gezonde gewoonten te gamificeren.'
                : isSpanish
                ? 'El refuerzo positivo es más efectivo que el castigo. En lugar de amenazar con quitar dispositivos, crea un sistema de recompensas para hábitos saludables de tiempo de pantalla. Esto podría incluir ganar tiempo extra de pantalla por completar tareas, leer, o pasar tiempo al aire libre. Aplicaciones como Zenvy hacen que este enfoque sea fácil al gamificar hábitos saludables.'
                : 'Positive reinforcement is more effective than punishment. Instead of threatening to take away devices, create a reward system for healthy screen time habits. This could include earning extra screen time for completing chores, reading, or spending time outdoors. Apps like Zenvy make this approach easy by gamifying healthy habits.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Wees een Rolmodel' : isSpanish ? 'Sé un Modelo a Seguir' : 'Be a Role Model'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Kinderen leren door voorbeeld. Als je constant op je telefoon zit, is het moeilijk om ze te overtuigen hun eigen schermtijd te beperken. Doe wat je predikt door grenzen voor jezelf te stellen. Leg je telefoon weg tijdens familiediners, wijs schermvrije tijden aan, en toon je kinderen dat je waarde hecht aan face-to-face interactie.'
                : isSpanish
                ? 'Los niños aprenden con el ejemplo. Si estás constantemente en tu teléfono, es difícil convencerlos de limitar su propio tiempo de pantalla. Practica lo que predicas estableciendo límites para ti mismo. Guarda tu teléfono durante las cenas familiares, designa tiempos libres de pantalla, y muestra a tus hijos que valoras la interacción cara a cara.'
                : 'Children learn by example. If you\'re constantly on your phone, it\'s hard to convince them to limit their own screen time. Practice what you preach by setting boundaries for yourself. Put your phone away during family meals, designate screen-free times, and show your children that you value face-to-face interaction.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Houd Communicatie Open' : isSpanish ? 'Mantén la Comunicación Abierta' : 'Keep Communication Open'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Maak schermtijd een voortdurend gesprek, geen eenmalige lezing. Check regelmatig in met je kinderen over hoe ze zich voelen over hun apparaatgebruik. Wees bereid om regels aan te passen naarmate ze groeien en verantwoordelijkheid tonen. Deze flexibiliteit toont dat je ze vertrouwt en bereid bent om samen te werken.'
                : isSpanish
                ? 'Haz del tiempo de pantalla una conversación continua, no una conferencia única. Revisa regularmente con tus hijos cómo se sienten sobre su uso de dispositivos. Esté dispuesto a ajustar las reglas a medida que crecen y demuestran responsabilidad. Esta flexibilidad muestra que confías en ellos y estás dispuesto a trabajar juntos.'
                : 'Make screen time an ongoing conversation, not a one-time lecture. Check in regularly with your children about how they\'re feeling about their device usage. Be willing to adjust rules as they grow and demonstrate responsibility. This flexibility shows that you trust them and are willing to work together.'
              }
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">
              {isDutch ? 'Blijf Kalm en Consistent' : isSpanish ? 'Mantén la Calma y Sé Consistente' : 'Stay Calm and Consistent'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isDutch 
                ? 'Wanneer conflicten ontstaan—en dat zullen ze—blijf kalm en consistent. Vermijd verhitte discussies over schermtijd. Als je kind van streek raakt, erken hun gevoelens terwijl je je grenzen handhaaft. Consistentie is de sleutel; als je toegeeft tijdens driftbuien, leer je ze dat drama werkt.'
                : isSpanish
                ? 'Cuando surjan conflictos—y lo harán—mantén la calma y sé consistente. Evita entrar en discusiones acaloradas sobre el tiempo de pantalla. Si tu hijo se molesta, reconoce sus sentimientos mientras mantienes tus límites. La consistencia es clave; si cedes durante los berrinches, les estás enseñando que el drama funciona.'
                : 'When conflicts arise—and they will—remain calm and consistent. Avoid getting into heated arguments about screen time. If your child becomes upset, acknowledge their feelings while maintaining your boundaries. Consistency is key; if you give in during tantrums, you\'re teaching them that drama works.'
              }
            </p>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                {isDutch ? 'Maak Het Gemakkelijker met Zenvy' : isSpanish ? 'Hazlo Más Fácil con Zenvy' : 'Make It Easier with Zenvy'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isDutch 
                  ? 'Zenvy helpt deze gesprekken te vergemakkelijken door duidelijke gegevens over schermtijdgebruik te verstrekken en een positieve, beloningsgebaseerde aanpak van digitale wellness te bieden. Transformeer schermtijd gevechten in kansen voor groei en begrip.'
                  : isSpanish
                  ? 'Zenvy ayuda a facilitar estas conversaciones proporcionando datos claros sobre el uso del tiempo de pantalla y ofreciendo un enfoque positivo basado en recompensas para el bienestar digital. Transforma las batallas de tiempo de pantalla en oportunidades de crecimiento y comprensión.'
                  : 'Zenvy helps facilitate these conversations by providing clear data on screen time usage and offering a positive, reward-based approach to digital wellness. Transform screen time battles into opportunities for growth and understanding.'
                }
              </p>
              <Link
                href={`/${getCurrentLocale()}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                {isDutch ? 'Ontdek Zenvy' : isSpanish ? 'Descubre Zenvy' : 'Discover Zenvy'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
