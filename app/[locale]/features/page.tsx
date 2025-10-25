import { Users, Target, Coins, Brain, Trophy, Sparkles, Shield, BarChart, Clock, Gift, Zap, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Discover All Features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Powerful Features for <span className="text-primary">Healthy Habits</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Everything you need to transform screen time into meaningful family moments
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
                title: "Family Dashboard",
                description:
                  "View and compare screen time across all family members in one beautiful, easy-to-understand dashboard.",
                color: "primary",
                example: "See who's winning the screen time challenge this week!",
              },
              {
                icon: Target,
                title: "Task Management",
                description:
                  "Assign tasks and chores to children, helping them learn responsibility while earning rewards.",
                color: "secondary",
                example: "Create tasks like 'Clean your room' or 'Do homework'",
              },
              {
                icon: Coins,
                title: "ZenCoins Rewards",
                description:
                  "Children earn ZenCoins for completing tasks and can spend them in the reward shop for things they love.",
                color: "secondary",
                example: "Earn 50 coins for each completed task!",
              },
              {
                icon: Brain,
                title: "Knowledge Challenges",
                description:
                  "Educational quizzes and challenges that make learning fun while earning extra screen time.",
                color: "primary",
                example: "Answer math questions to unlock 30 extra minutes",
              },
              {
                icon: Trophy,
                title: "Achievement System",
                description: "Celebrate progress with achievements and milestones that motivate continued growth.",
                color: "secondary",
                example: "Unlock badges for 7-day streaks and goals!",
              },
              {
                icon: Clock,
                title: "Smart Time Limits",
                description: "Set flexible screen time limits that adapt to your family's schedule and needs.",
                color: "primary",
                example: "More time on weekends, less on school nights",
              },
              {
                icon: Gift,
                title: "Reward Shop",
                description: "Kids can spend their earned ZenCoins on rewards you define - from treats to privileges.",
                color: "secondary",
                example: "Trade 200 coins for movie night or ice cream!",
              },
              {
                icon: Zap,
                title: "Instant Notifications",
                description: "Get real-time updates when tasks are completed or screen time limits are reached.",
                color: "primary",
                example: "Emma just completed her homework! +50 coins",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Your family's data is protected with enterprise-grade security and privacy measures.",
                color: "primary",
                example: "Bank-level encryption keeps your data safe",
              },
              {
                icon: BarChart,
                title: "Detailed Analytics",
                description:
                  "Track progress over time with comprehensive reports and insights into screen time patterns.",
                color: "secondary",
                example: "See weekly trends and improvement graphs",
              },
              {
                icon: Heart,
                title: "Positive Reinforcement",
                description:
                  "Focus on rewards and encouragement rather than punishment to build lasting healthy habits.",
                color: "primary",
                example: "Celebrate wins, not just limit screen time",
              },
              {
                icon: Sparkles,
                title: "Customizable Goals",
                description: "Set personalized goals for each family member based on age, needs, and preferences.",
                color: "secondary",
                example: "Different limits for different ages and days",
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
                Built for <span className="text-primary">Real Families</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zenvy isn't just another parental control app. It's a complete family engagement platform designed to
                make screen time a positive, educational experience.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Easy setup in under 5 minutes" },
                  { icon: "📱", text: "Works on iOS and Android devices" },
                  { icon: "👨‍👩‍👧‍👦", text: "Unlimited family members" },
                  { icon: "🔄", text: "Automatic sync across all devices" },
                  { icon: "💬", text: "24/7 customer support" },
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
                    <div className="font-bold">Emma, age 10</div>
                    <div className="text-sm text-muted-foreground">Completed 5 tasks today</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ZenCoins earned</span>
                    <span className="font-bold text-secondary">+250 coins</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Screen time today</span>
                    <span className="font-bold text-primary">2h 15m</span>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    👦
                  </div>
                  <div>
                    <div className="font-bold">Max, age 8</div>
                    <div className="text-sm text-muted-foreground">Won 2 challenges</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ZenCoins earned</span>
                    <span className="font-bold text-secondary">+180 coins</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Screen time today</span>
                    <span className="font-bold text-primary">1h 45m</span>
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

