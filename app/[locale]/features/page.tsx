import { Users, Target, Coins, Brain, Trophy, Sparkles, Shield, BarChart, Clock, Gift, Zap, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              {isDutch ? 'Ontdek Alle Functies' : 'Discover All Features'}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                Krachtige Functies voor <span className="text-primary">Gezonde Gewoonten</span>
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
                title: isDutch ? "Familie Dashboard" : "Family Dashboard",
                description: isDutch 
                  ? "Bekijk en vergelijk schermtijd van alle familieleden in één mooi, begrijpelijk dashboard."
                  : "View and compare screen time across all family members in one beautiful, easy-to-understand dashboard.",
                color: "primary",
                example: isDutch ? "Zie wie deze week de schermtijd uitdaging wint!" : "See who's winning the screen time challenge this week!",
              },
              {
                icon: Target,
                title: isDutch ? "Takenbeheer" : "Task Management",
                description: isDutch
                  ? "Wijs taken en klusjes toe aan kinderen, help ze verantwoordelijkheid te leren terwijl ze beloningen verdienen."
                  : "Assign tasks and chores to children, helping them learn responsibility while earning rewards.",
                color: "secondary",
                example: isDutch ? "Maak taken zoals 'Ruim je kamer op' of 'Maak huiswerk'" : "Create tasks like 'Clean your room' or 'Do homework'",
              },
              {
                icon: Coins,
                title: isDutch ? "ZenCoins Beloningen" : "ZenCoins Rewards",
                description: isDutch
                  ? "Kinderen verdienen ZenCoins voor het voltooien van taken en kunnen ze uitgeven in de beloningenwinkel voor dingen die ze leuk vinden."
                  : "Children earn ZenCoins for completing tasks and can spend them in the reward shop for things they love.",
                color: "secondary",
                example: isDutch ? "Verdien 50 munten voor elke voltooide taak!" : "Earn 50 coins for each completed task!",
              },
              {
                icon: Brain,
                title: isDutch ? "Kennis Uitdagingen" : "Knowledge Challenges",
                description: isDutch
                  ? "Educatieve quizzen en uitdagingen die leren leuk maken terwijl je extra schermtijd verdient."
                  : "Educational quizzes and challenges that make learning fun while earning extra screen time.",
                color: "primary",
                example: isDutch ? "Beantwoord wiskunde vragen om 30 extra minuten vrij te spelen" : "Answer math questions to unlock 30 extra minutes",
              },
              {
                icon: Trophy,
                title: isDutch ? "Prestatie Systeem" : "Achievement System",
                description: isDutch
                  ? "Vier vooruitgang met prestaties en mijlpalen die voortdurende groei motiveren."
                  : "Celebrate progress with achievements and milestones that motivate continued growth.",
                color: "secondary",
                example: isDutch ? "Ontgrendel badges voor 7-dagen reeksen en doelen!" : "Unlock badges for 7-day streaks and goals!",
              },
              {
                icon: Clock,
                title: isDutch ? "Slimme Tijdslimieten" : "Smart Time Limits",
                description: isDutch
                  ? "Stel flexibele schermtijd limieten in die zich aanpassen aan het schema en behoeften van je gezin."
                  : "Set flexible screen time limits that adapt to your family's schedule and needs.",
                color: "primary",
                example: isDutch ? "Meer tijd in het weekend, minder op schooldagen" : "More time on weekends, less on school nights",
              },
              {
                icon: Gift,
                title: isDutch ? "Beloningenwinkel" : "Reward Shop",
                description: isDutch
                  ? "Kinderen kunnen hun verdiende ZenCoins uitgeven aan beloningen die jij definieert - van traktaties tot privileges."
                  : "Kids can spend their earned ZenCoins on rewards you define - from treats to privileges.",
                color: "secondary",
                example: isDutch ? "Ruil 200 munten voor filmavond of ijs!" : "Trade 200 coins for movie night or ice cream!",
              },
              {
                icon: Zap,
                title: isDutch ? "Directe Meldingen" : "Instant Notifications",
                description: isDutch
                  ? "Krijg real-time updates wanneer taken zijn voltooid of schermtijd limieten zijn bereikt."
                  : "Get real-time updates when tasks are completed or screen time limits are reached.",
                color: "primary",
                example: isDutch ? "Emma heeft net haar huiswerk afgemaakt! +50 munten" : "Emma just completed her homework! +50 coins",
              },
              {
                icon: Shield,
                title: isDutch ? "Veilig & Beveiligd" : "Safe & Secure",
                description: isDutch
                  ? "De gegevens van je gezin zijn beschermd met enterprise-grade beveiliging en privacy maatregelen."
                  : "Your family's data is protected with enterprise-grade security and privacy measures.",
                color: "primary",
                example: isDutch ? "Bank-niveau encryptie houdt je gegevens veilig" : "Bank-level encryption keeps your data safe",
              },
              {
                icon: BarChart,
                title: isDutch ? "Gedetailleerde Analytics" : "Detailed Analytics",
                description: isDutch
                  ? "Volg vooruitgang in de tijd met uitgebreide rapporten en inzichten in schermtijd patronen."
                  : "Track progress over time with comprehensive reports and insights into screen time patterns.",
                color: "secondary",
                example: isDutch ? "Zie wekelijkse trends en verbetering grafieken" : "See weekly trends and improvement graphs",
              },
              {
                icon: Heart,
                title: isDutch ? "Positieve Versterking" : "Positive Reinforcement",
                description: isDutch
                  ? "Focus op beloningen en aanmoediging in plaats van straf om blijvende gezonde gewoonten op te bouwen."
                  : "Focus on rewards and encouragement rather than punishment to build lasting healthy habits.",
                color: "primary",
                example: isDutch ? "Vier overwinningen, niet alleen schermtijd beperken" : "Celebrate wins, not just limit screen time",
              },
              {
                icon: Sparkles,
                title: isDutch ? "Aanpasbare Doelen" : "Customizable Goals",
                description: isDutch
                  ? "Stel gepersonaliseerde doelen in voor elk familielid gebaseerd op leeftijd, behoeften en voorkeuren."
                  : "Set personalized goals for each family member based on age, needs, and preferences.",
                color: "secondary",
                example: isDutch ? "Verschillende limieten voor verschillende leeftijden en dagen" : "Different limits for different ages and days",
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
                ) : (
                  <>
                    Built for <span className="text-primary">Real Families</span>
                  </>
                )}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isDutch 
                  ? "Zenvy is niet zomaar een andere ouderlijke controle app. Het is een complete gezinsengagement platform ontworpen om schermtijd een positieve, educatieve ervaring te maken."
                  : "Zenvy isn't just another parental control app. It's a complete family engagement platform designed to make screen time a positive, educational experience."
                }
              </p>
              <div className="space-y-4">
                {[
                  { 
                    icon: "🎯", 
                    text: isDutch ? "Eenvoudige installatie in minder dan 5 minuten" : "Easy setup in under 5 minutes" 
                  },
                  { 
                    icon: "📱", 
                    text: isDutch ? "Werkt op iOS en Android apparaten" : "Works on iOS and Android devices" 
                  },
                  { 
                    icon: "👨‍👩‍👧‍👦", 
                    text: isDutch ? "Onbeperkt aantal familieleden" : "Unlimited family members" 
                  },
                  { 
                    icon: "🔄", 
                    text: isDutch ? "Automatische synchronisatie op alle apparaten" : "Automatic sync across all devices" 
                  },
                  { 
                    icon: "💬", 
                    text: isDutch ? "24/7 klantenservice" : "24/7 customer support" 
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
                    <div className="font-bold">Emma, {isDutch ? '10 jaar' : 'age 10'}</div>
                    <div className="text-sm text-muted-foreground">
                      {isDutch ? '5 taken vandaag voltooid' : 'Completed 5 tasks today'}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'ZenCoins verdiend' : 'ZenCoins earned'}
                    </span>
                    <span className="font-bold text-secondary">+250 {isDutch ? 'munten' : 'coins'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'Schermtijd vandaag' : 'Screen time today'}
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
                    <div className="font-bold">Max, {isDutch ? '8 jaar' : 'age 8'}</div>
                    <div className="text-sm text-muted-foreground">
                      {isDutch ? '2 uitdagingen gewonnen' : 'Won 2 challenges'}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'ZenCoins verdiend' : 'ZenCoins earned'}
                    </span>
                    <span className="font-bold text-secondary">+180 {isDutch ? 'munten' : 'coins'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {isDutch ? 'Schermtijd vandaag' : 'Screen time today'}
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

