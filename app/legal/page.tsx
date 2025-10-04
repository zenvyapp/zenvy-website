import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Scale, ExternalLink } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Legal <span className="text-primary">Information</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Transparency and trust at the heart of everything we do
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              At Zenvy, transparency and trust are at the heart of everything we do. On this page, you'll find all the
              important legal documents that govern your use of our app and services.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              We've written them to be as clear and understandable as possible — no unnecessary legal jargon.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              By using Zenvy, you agree to these policies. If you have any questions, reach out to us anytime at{" "}
              <a href="mailto:support@zenvy.io" className="text-primary hover:text-secondary transition-colors">
                support@zenvy.io
              </a>
              . We're here to help.
            </p>
            <p className="text-xl font-semibold text-primary">
              We're Here. Built for families, designed with privacy in mind.
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Please take a moment to review:</h2>
          </div>

          {/* Legal Documents Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Privacy Policy */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-3">Privacy Policy</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Learn how we collect, use, and protect your family's data. Your privacy is our top priority.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://repeated-gastonia-73a.notion.site/Privacy-Policy-Zenvy-1fbd9e8652f780d8bad9df53f13a04e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors group-hover:gap-3"
                >
                  Read Privacy Policy <ExternalLink className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-3xl mb-3">Terms of Use</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Understand the terms and conditions for using Zenvy. Clear guidelines for a safe experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://repeated-gastonia-73a.notion.site/Terms-of-Use-Zenvy-1fbd9e8652f780b68352ed26fa9da5dd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors group-hover:gap-3"
                >
                  Read Terms of Use <ExternalLink className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Legal Policies?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're happy to clarify anything you need. Don't hesitate to reach out.
            </p>
            <a
              href="mailto:support@zenvy.io?subject=Legal%20Question"
              className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors"
            >
              Contact Us <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
