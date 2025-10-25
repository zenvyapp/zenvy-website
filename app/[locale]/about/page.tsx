import { Heart, Users, Target, Shield, Globe, Sparkles, Code } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary">Zenvy</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-4">
            We're on a mission to help families build healthier relationships with technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-6 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Zenvy was created to transform the way families approach screen time. Instead of constant battles and
              restrictions, we believe in positive reinforcement, education, and empowerment. Our goal is to help
              families build healthy digital habits that last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Family First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize family connection and healthy relationships above all else.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Positive Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in rewards and encouragement rather than punishment and restrictions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Growth Mindset</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on learning, development, and building skills for the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Built with <span className="text-secondary">Love</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zenvy is a startup in its early stages, built by passionate founders who believe technology should bring
              families together, not drive them apart. We're developing this app with the help of donations from people
              who share our vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-secondary/20">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Startup Spirit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're a small team with big dreams, working tirelessly to create something meaningful for families
                  worldwide. Every feature is crafted with care and purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Community Powered</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thanks to generous donations, we can keep Zenvy free for families. Your support helps us continue
                  developing features that make a real difference.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Made in the Netherlands, For the World</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zenvy was created in the Netherlands, but our mission extends to families everywhere. No matter where
              you're from, we're here to support your family's digital wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Privacy First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your family's data is absolutely safe with us. We never sell your information, and we're committed to
                  the highest standards of data protection. Your trust is our most valuable asset.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Free for Families</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to keeping Zenvy free for as long as possible. Every family deserves access to tools
                  that help them thrive, regardless of their financial situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

