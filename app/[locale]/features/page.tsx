import { Users, Target, Coins, Brain, Trophy, Sparkles, Shield, BarChart, Clock, Gift, Zap, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              {isDutch ? 'Ontdek Alle Functies' : isSpanish ? 'Descubre Todas las Características' : isFrench ? 'Découvrez Toutes les Fonctionnalités' : 'Discover All Features'}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                Krachtige Functies voor <span className="text-primary">Gezonde Gewoonten</span>
              </>
            ) : isSpanish ? (
              <>
                Características Poderosas para <span className="text-primary">Hábitos Saludables</span>
              </>
            ) : isFrench ? (
              <>
                Fonctionnalités Puissantes pour des <span className="text-primary">Habitudes Saines</span>
              </>
            ) : (
              <>
                Powerful Features for <span className="text-primary">Healthy Habits</span>
              </>
            )}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            {isDutch 
              ? 'Alles wat je nodig hebt om schermtijd te transformeren in betekenisvolle gezinsmomenten'
              : isSpanish 
              ? 'Todo lo que necesitas para transformar el tiempo de pantalla en momentos familiares significativos'
              : isFrench 
              ? 'Tout ce dont vous avez besoin pour transformer le temps d\'écran en moments familiaux significatifs'
              : 'Everything you need to transform screen time into meaningful family moments'
            }
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: isDutch ? "Familie Dashboard" : isSpanish ? "Panel Familiar" : isFrench ? "Tableau de Bord Familial" : "Family Dashboard",
                description: isDutch 
                  ? "Bekijk en vergelijk schermtijd van alle familieleden in één mooi, begrijpelijk dashboard."
                  : isSpanish 
                  ? "Ve y compara el tiempo de pantalla de todos los miembros de la familia en un hermoso y fácil de entender panel."
                  : isFrench 
                  ? "Visualisez et comparez le temps d'écran de tous les membres de la famille dans un tableau de bord magnifique et facile à comprendre."
                  : "View and compare screen time across all family members in one beautiful, easy-to-understand dashboard.",
                color: "primary",
                example: isDutch ? "Zie wie deze week de schermtijd uitdaging wint!" : isSpanish ? "¡Ve quién está ganando el desafío de tiempo de pantalla esta semana!" : isFrench ? "Voyez qui gagne le défi du temps d'écran cette semaine !" : "See who's winning the screen time challenge this week!",
              },
              {
                icon: Target,
                title: isDutch ? "Takenbeheer" : isSpanish ? "Gestión de Tareas" : isFrench ? "Gestion des Tâches" : "Task Management",
                description: isDutch
                  ? "Wijs taken en klusjes toe aan kinderen, help ze verantwoordelijkheid te leren terwijl ze beloningen verdienen."
                  : isSpanish
                  ? "Asigna tareas y quehaceres a los niños, ayudándoles a aprender responsabilidad mientras ganan recompensas."
                  : isFrench
                  ? "Assignez des tâches et des corvées aux enfants, les aidant à apprendre la responsabilité tout en gagnant des récompenses."
                  : "Assign tasks and chores to children, helping them learn responsibility while earning rewards.",
                color: "secondary",
                example: isDutch ? "Maak taken zoals 'Ruim je kamer op' of 'Maak huiswerk'" : isSpanish ? "Crea tareas como 'Ordena tu habitación' o 'Haz la tarea'" : isFrench ? "Créez des tâches comme 'Range ta chambre' ou 'Fais tes devoirs'" : "Create tasks like 'Clean your room' or 'Do homework'",
              },
              {
                icon: Coins,
                title: isDutch ? "ZenCoins Beloningen" : isSpanish ? "Recompensas ZenCoins" : isFrench ? "Récompenses ZenCoins" : "ZenCoins Rewards",
                description: isDutch
                  ? "Kinderen verdienen ZenCoins voor het voltooien van taken en kunnen ze uitgeven in de beloningenwinkel voor dingen die ze leuk vinden."
                  : isSpanish
                  ? "Los niños ganan ZenCoins por completar tareas y pueden gastarlos en la tienda de recompensas por cosas que aman."
                  : isFrench
                  ? "Les enfants gagnent des ZenCoins en accomplissant des tâches et peuvent les dépenser dans la boutique de récompenses pour des choses qu'ils aiment."
                  : "Children earn ZenCoins for completing tasks and can spend them in the reward shop for things they love.",
                color: "secondary",
                example: isDutch ? "Verdien 50 munten voor elke voltooide taak!" : isSpanish ? "¡Gana 50 monedas por cada tarea completada!" : isFrench ? "Gagnez 50 pièces pour chaque tâche accomplie !" : "Earn 50 coins for each completed task!",
              },
              {
                icon: Brain,
                title: isDutch ? "Kennis Uitdagingen" : isSpanish ? "Desafíos de Conocimiento" : isFrench ? "Défis de Connaissance" : "Knowledge Challenges",
                description: isDutch
                  ? "Educatieve quizzen en uitdagingen die leren leuk maken terwijl je extra schermtijd verdient."
                  : isSpanish
                  ? "Cuestionarios y desafíos educativos que hacen que aprender sea divertido mientras ganas tiempo extra de pantalla."
                  : isFrench
                  ? "Quiz éducatifs et défis qui rendent l'apprentissage amusant tout en gagnant du temps d'écran supplémentaire."
                  : "Educational quizzes and challenges that make learning fun while earning extra screen time.",
                color: "primary",
                example: isDutch ? "Beantwoord wiskunde vragen om 30 extra minuten vrij te spelen" : isSpanish ? "Responde preguntas de matemáticas para desbloquear 30 minutos extra" : isFrench ? "Répondez aux questions de maths pour débloquer 30 minutes supplémentaires" : "Answer math questions to unlock 30 extra minutes",
              },
              {
                icon: Trophy,
                title: isDutch ? "Prestatie Systeem" : isSpanish ? "Sistema de Logros" : isFrench ? "Système de Réussites" : "Achievement System",
                description: isDutch
                  ? "Vier vooruitgang met prestaties en mijlpalen die voortdurende groei motiveren."
                  : isSpanish
                  ? "Celebra el progreso con logros y hitos que motivan el crecimiento continuo."
                  : isFrench
                  ? "Célébrez les progrès avec des réussites et des jalons qui motivent une croissance continue."
                  : "Celebrate progress with achievements and milestones that motivate continued growth.",
                color: "secondary",
                example: isDutch ? "Ontgrendel badges voor 7-dagen reeksen en doelen!" : isSpanish ? "¡Desbloquea insignias por rachas de 7 días y objetivos!" : isFrench ? "Débloquez des badges pour des séries de 7 jours et des objectifs !" : "Unlock badges for 7-day streaks and goals!",
              },
              {
                icon: Clock,
                title: isDutch ? "Slimme Tijdslimieten" : isSpanish ? "Límites de Tiempo Inteligentes" : isFrench ? "Limites de Temps Intelligentes" : "Smart Time Limits",
                description: isDutch
                  ? "Stel flexibele schermtijd limieten in die zich aanpassen aan het schema en behoeften van je gezin."
                  : isSpanish
                  ? "Establece límites de tiempo de pantalla flexibles que se adaptan al horario y necesidades de tu familia."
                  : isFrench
                  ? "Définissez des limites de temps d'écran flexibles qui s'adaptent à l'emploi du temps et aux besoins de votre famille."
                  : "Set flexible screen time limits that adapt to your family's schedule and needs.",
                color: "primary",
                example: isDutch ? "Meer tijd in het weekend, minder op schooldagen" : isSpanish ? "Más tiempo los fines de semana, menos en días de escuela" : isFrench ? "Plus de temps le weekend, moins les jours d'école" : "More time on weekends, less on school nights",
              },
              {
                icon: Gift,
                title: isDutch ? "Beloningenwinkel" : isSpanish ? "Tienda de Recompensas" : isFrench ? "Boutique de Récompenses" : "Reward Shop",
                description: isDutch
                  ? "Kinderen kunnen hun verdiende ZenCoins uitgeven aan beloningen die jij definieert - van traktaties tot privileges."
                  : isSpanish
                  ? "Los niños pueden gastar sus ZenCoins ganados en recompensas que tú defines - desde golosinas hasta privilegios."
                  : isFrench
                  ? "Les enfants peuvent dépenser leurs ZenCoins gagnés sur des récompenses que vous définissez - des friandises aux privilèges."
                  : "Kids can spend their earned ZenCoins on rewards you define - from treats to privileges.",
                color: "secondary",
                example: isDutch ? "Ruil 200 munten voor filmavond of ijs!" : isSpanish ? "¡Intercambia 200 monedas por noche de película o helado!" : isFrench ? "Échangez 200 pièces pour une soirée cinéma ou de la glace !" : "Trade 200 coins for movie night or ice cream!",
              },
              {
                icon: Zap,
                title: isDutch ? "Directe Meldingen" : isSpanish ? "Notificaciones Instantáneas" : isFrench ? "Notifications Instantanées" : "Instant Notifications",
                description: isDutch
                  ? "Krijg real-time updates wanneer taken zijn voltooid of schermtijd limieten zijn bereikt."
                  : isSpanish
                  ? "Recibe actualizaciones en tiempo real cuando se completan tareas o se alcanzan límites de tiempo de pantalla."
                  : isFrench
                  ? "Recevez des mises à jour en temps réel lorsque les tâches sont terminées ou que les limites de temps d'écran sont atteintes."
                  : "Get real-time updates when tasks are completed or screen time limits are reached.",
                color: "primary",
                example: isDutch ? "Emma heeft net haar huiswerk afgemaakt! +50 munten" : isSpanish ? "¡Emma acaba de completar su tarea! +50 monedas" : isFrench ? "Emma vient de terminer ses devoirs ! +50 pièces" : "Emma just completed her homework! +50 coins",
              },
              {
                icon: Shield,
                title: isDutch ? "Veilig & Beveiligd" : isSpanish ? "Seguro y Protegido" : isFrench ? "Sûr et Sécurisé" : "Safe & Secure",
                description: isDutch
                  ? "De gegevens van je gezin zijn beschermd met enterprise-grade beveiliging en privacy maatregelen."
                  : isSpanish
                  ? "Los datos de tu familia están protegidos con seguridad de nivel empresarial y medidas de privacidad."
                  : isFrench
                  ? "Les données de votre famille sont protégées par une sécurité de niveau entreprise et des mesures de confidentialité."
                  : "Your family's data is protected with enterprise-grade security and privacy measures.",
                color: "primary",
                example: isDutch ? "Bank-niveau encryptie houdt je gegevens veilig" : isSpanish ? "Encriptación de nivel bancario mantiene tus datos seguros" : isFrench ? "Le chiffrement de niveau bancaire protège vos données" : "Bank-level encryption keeps your data safe",
              },
              {
                icon: BarChart,
                title: isDutch ? "Gedetailleerde Analytics" : isSpanish ? "Análisis Detallados" : isFrench ? "Analyses Détaillées" : "Detailed Analytics",
                description: isDutch
                  ? "Volg vooruitgang in de tijd met uitgebreide rapporten en inzichten in schermtijd patronen."
                  : isSpanish
                  ? "Rastrea el progreso en el tiempo con informes completos e insights sobre patrones de tiempo de pantalla."
                  : isFrench
                  ? "Suivez les progrès dans le temps avec des rapports complets et des insights sur les modèles de temps d'écran."
                  : "Track progress over time with comprehensive reports and insights into screen time patterns.",
                color: "secondary",
                example: isDutch ? "Zie wekelijkse trends en verbetering grafieken" : isSpanish ? "Ve tendencias semanales y gráficos de mejora" : isFrench ? "Voyez les tendances hebdomadaires et les graphiques d'amélioration" : "See weekly trends and improvement graphs",
              },
              {
                icon: Heart,
                title: isDutch ? "Positieve Versterking" : isSpanish ? "Refuerzo Positivo" : isFrench ? "Renforcement Positif" : "Positive Reinforcement",
                description: isDutch
                  ? "Focus op beloningen en aanmoediging in plaats van straf om blijvende gezonde gewoonten op te bouwen."
                  : isSpanish
                  ? "Enfócate en recompensas y estímulo en lugar de castigo para construir hábitos saludables duraderos."
                  : isFrench
                  ? "Concentrez-vous sur les récompenses et l'encouragement plutôt que sur la punition pour construire des habitudes saines durables."
                  : "Focus on rewards and encouragement rather than punishment to build lasting healthy habits.",
                color: "primary",
                example: isDutch ? "Vier overwinningen, niet alleen schermtijd beperken" : isSpanish ? "Celebra victorias, no solo limita el tiempo de pantalla" : isFrench ? "Célébrez les victoires, ne limitez pas seulement le temps d'écran" : "Celebrate wins, not just limit screen time",
              },
              {
                icon: Sparkles,
                title: isDutch ? "Aanpasbare Doelen" : isSpanish ? "Objetivos Personalizables" : isFrench ? "Objectifs Personnalisables" : "Customizable Goals",
                description: isDutch
                  ? "Stel gepersonaliseerde doelen in voor elk familielid gebaseerd op leeftijd, behoeften en voorkeuren."
                  : isSpanish
                  ? "Establece objetivos personalizados para cada miembro de la familia basados en edad, necesidades y preferencias."
                  : isFrench
                  ? "Définissez des objectifs personnalisés pour chaque membre de la famille basés sur l'âge, les besoins et les préférences."
                  : "Set personalized goals for each family member based on age, needs, and preferences.",
                color: "secondary",
                example: isDutch ? "Verschillende limieten voor verschillende leeftijden en dagen" : isSpanish ? "Diferentes límites para diferentes edades y días" : isFrench ? "Différentes limites pour différents âges et jours" : "Different limits for different ages and days",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-card border-2 ${
                  feature.color === "secondary" ? "border-secondary/20" : "border-primary/20"
                } rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  feature.color === "secondary"
                    ? "hover:border-secondary/40 hover:bg-secondary/5"
                    : "hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <div
                  className={`h-14 w-14 rounded-2xl ${
                    feature.color === "secondary" ? "bg-secondary/20" : "bg-primary/20"
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`h-7 w-7 ${feature.color === "secondary" ? "text-secondary" : "text-primary"}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                <div
                  className={`text-sm ${
                    feature.color === "secondary" ? "text-secondary" : "text-primary"
                  } font-medium italic`}
                >
                  💡 {feature.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-balance">
                {isDutch ? (
                  <>
                    Gebouwd voor <span className="text-primary">Echte Gezinnen</span>
                  </>
                ) : isSpanish ? (
                  <>
                    Construido para <span className="text-primary">Familias Reales</span>
                  </>
                ) : isFrench ? (
                  <>
                    Construit pour de <span className="text-primary">Vraies Familles</span>
                  </>
                ) : (
                  <>
                    Built for <span className="text-primary">Real Families</span>
                  </>
                )}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isDutch 
                  ? "Zenvy is niet zomaar een andere ouderlijke controle app. Het is een complete gezinsengagement platform ontworpen om schermtijd een positieve, educatieve ervaring te maken."
                  : isSpanish
                  ? "Zenvy no es solo otra aplicación de control parental. Es una plataforma completa de participación familiar diseñada para hacer que el tiempo de pantalla sea una experiencia positiva y educativa."
                  : isFrench
                  ? "Zenvy n'est pas juste une autre application de contrôle parental. C'est une plateforme complète d'engagement familial conçue pour faire du temps d'écran une expérience positive et éducative."
                  : "Zenvy isn't just another parental control app. It's a complete family engagement platform designed to make screen time a positive, educational experience."
                }
              </p>
              <div className="space-y-4">
                {[
                  { 
                    icon: "🎯", 
                    text: isDutch ? "Eenvoudige installatie in minder dan 5 minuten" : isSpanish ? "Configuración fácil en menos de 5 minutos" : isFrench ? "Configuration facile en moins de 5 minutes" : "Easy setup in under 5 minutes" 
                  },
                  { 
                    icon: "📱", 
                    text: isDutch ? "Werkt op iOS en Android apparaten" : isSpanish ? "Funciona en dispositivos iOS y Android" : isFrench ? "Fonctionne sur les appareils iOS et Android" : "Works on iOS and Android devices" 
                  },
                  { 
                    icon: "👨‍👩‍👧‍👦", 
                    text: isDutch ? "Onbeperkt aantal familieleden" : isSpanish ? "Miembros de familia ilimitados" : isFrench ? "Membres de famille illimités" : "Unlimited family members" 
                  },
                  { 
                    icon: "🔄", 
                    text: isDutch ? "Automatische synchronisatie op alle apparaten" : isSpanish ? "Sincronización automática en todos los dispositivos" : isFrench ? "Synchronisation automatique sur tous les appareils" : "Automatic sync across all devices" 
                  },
                  { 
                    icon: "💬", 
                    text: isDutch ? "24/7 klantenservice" : isSpanish ? "Soporte al cliente 24/7" : isFrench ? "Support client 24/7" : "24/7 customer support" 
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl">
                    👧
                  </div>
                  <div>
                    <div className="font-bold">Emma, {isDutch ? '10 jaar' : isSpanish ? '10 años' : isFrench ? '10 ans' : 'age 10'}</div>
                    <div className="text-sm text-muted-foreground">
                      {isDutch ? '5 taken vandaag voltooid' : isSpanish ? '5 tareas completadas hoy' : isFrench ? '5 tâches terminées aujourd\'hui' : 'Completed 5 tasks today'}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'ZenCoins verdiend' : isSpanish ? 'ZenCoins ganados' : isFrench ? 'ZenCoins gagnés' : 'ZenCoins earned'}
                    </span>
                    <span className="font-bold text-secondary">+250 {isDutch ? 'munten' : isSpanish ? 'monedas' : isFrench ? 'pièces' : 'coins'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'Schermtijd vandaag' : isSpanish ? 'Tiempo de pantalla hoy' : isFrench ? 'Temps d\'écran aujourd\'hui' : 'Screen time today'}
                    </span>
                    <span className="font-bold text-primary">2u 15m</span>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    👦
                  </div>
                  <div>
                    <div className="font-bold">Max, {isDutch ? '8 jaar' : isSpanish ? '8 años' : isFrench ? '8 ans' : 'age 8'}</div>
                    <div className="text-sm text-muted-foreground">
                      {isDutch ? '2 uitdagingen gewonnen' : isSpanish ? 'Ganó 2 desafíos' : isFrench ? 'A gagné 2 défis' : 'Won 2 challenges'}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'ZenCoins verdiend' : isSpanish ? 'ZenCoins ganados' : isFrench ? 'ZenCoins gagnés' : 'ZenCoins earned'}
                    </span>
                    <span className="font-bold text-secondary">+180 {isDutch ? 'munten' : isSpanish ? 'monedas' : isFrench ? 'pièces' : 'coins'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'Schermtijd vandaag' : isSpanish ? 'Tiempo de pantalla hoy' : isFrench ? 'Temps d\'écran aujourd\'hui' : 'Screen time today'}
                    </span>
                    <span className="font-bold text-primary">1u 45m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

