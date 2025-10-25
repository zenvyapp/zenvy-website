import { Heart, Shield, Sparkles, Gift } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Our Story Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart className="h-10 w-10 text-secondary fill-secondary animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Built with <span className="text-secondary">Love</span>
              </h1>
              <Heart className="h-10 w-10 text-secondary fill-secondary animate-pulse" />
            </div>
            <p className="text-2xl text-muted-foreground text-pretty leading-relaxed">
              A passion project for families everywhere
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Zenvy was born from a simple dream: to help families find balance in our digital world. We're a small
                team of passionate founders who believe that technology should bring families closer together, not pull
                them apart.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                As a startup in its early stages, we're building Zenvy with love, dedication, and the generous support
                of families like yours. Every donation helps us continue developing features, improving the app, and
                keeping it accessible to everyone.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-primary">
                Our mission is to keep Zenvy free for as long as possible, because we believe every family deserves
                access to tools that promote healthy digital habits.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                <Gift className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Donation-Powered</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with the support of generous families who believe in our mission
              </p>
            </div>

            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Your Data is Sacred</h3>
              <p className="text-muted-foreground leading-relaxed">
                We never sell your data. Your family's privacy is absolutely protected
              </p>
            </div>

            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
                <Sparkles className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Forever Goal</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to keeping Zenvy accessible to all families
              </p>
            </div>
          </div>

          <div className="text-center bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8">
            <p className="text-xl font-semibold text-foreground mb-4">
              Want to support our mission and help keep Zenvy free for everyone?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soon, we'll be introducing an optional donation feature directly in the app. Your voluntary contribution
              will help us continue developing Zenvy and keep it free for all families around the world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

