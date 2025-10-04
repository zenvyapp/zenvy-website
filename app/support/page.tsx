import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Headphones, Shield, Globe, HelpCircle } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            We're <span className="text-secondary">Here</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-balance">
            Connect with Us for Any Questions or Feedback
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Got a question, idea, or just want to say hello? We'd love to hear from you. Whether you're a parent,
            educator, curious user, or a potential partner — your message is welcome. Our team is here to listen and
            will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* General Inquiries */}
            <Card className="border-2 hover:border-secondary transition-colors flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">General Inquiries</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Feel free to reach out for any general questions, feedback, or collaboration ideas:
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center mt-auto">
                <a
                  href="mailto:hello@zenvy.io?subject=General%20Inquiry"
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors inline-block"
                >
                  hello@zenvy.io
                </a>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="border-2 hover:border-secondary transition-colors flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">Technical Support</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Experiencing issues with the app or need help with a technical feature? Our support team is ready to
                  assist you:
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center mt-auto">
                <a
                  href="mailto:support@zenvy.io?subject=Technical%20Support%20Request"
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors inline-block"
                >
                  support@zenvy.io
                </a>
              </CardContent>
            </Card>

            {/* Privacy & Data Requests */}
            <Card className="border-2 hover:border-secondary transition-colors flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">Privacy & Data Requests</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  For any privacy-related concerns or data access requests, contact us at:
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center mt-auto">
                <a
                  href="mailto:privacy@zenvy.io?subject=Privacy%20Request"
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors inline-block"
                >
                  privacy@zenvy.io
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">
                Frequently Asked <span className="text-secondary">Questions</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">Quick answers to common questions about Zenvy</p>
          </div>

          {/* Accordion with fixes */}
          <Accordion
            type="single"
            collapsible
            className="space-y-4 relative z-10 pb-px"
          >
            <AccordionItem value="item-1" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How does Zenvy work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Zenvy helps families manage screen time in a fun and engaging way. Parents can set healthy limits, track
                usage across devices, and reward kids with ZenCoins for meeting their goals. The app turns screen time
                management into a positive family experience rather than a battle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Is Zenvy really free?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! Zenvy is completely free to use. We're a startup funded by donations from families who believe in
                our mission. Our goal is to keep the app free for as long as possible so every family can benefit from
                healthier screen time habits, regardless of their financial situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What devices does Zenvy support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Zenvy is available on both iOS and Android devices. You can download it from the App Store or Google
                Play Store. The app works seamlessly across all your family's devices, allowing you to manage screen
                time from anywhere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How is my family's data protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Privacy is our top priority. All your family's data is encrypted and stored securely. We never sell your
                data to third parties, and we never will. Your information is used solely to provide you with the best
                possible experience. You can read more in our Privacy Policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border-2 border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How do I get started with Zenvy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Getting started is easy! Simply download the Zenvy app from the App Store or Google Play Store, create a
                family account, add your family members, and set up your first screen time goals. The app includes a
                helpful onboarding guide to walk you through the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-background border-2 border-border rounded-lg px-6 last:border-b-2"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I customize screen time rules for each child?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Zenvy allows you to create personalized screen time rules for each family member. You can set different
                limits, schedules, and rewards based on age, needs, and family values. Every family is unique, and Zenvy
                adapts to yours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Netherlands block */}
          <div className="mt-16 relative z-0">
            <div className="inline-flex items-center gap-3 px-8 py-6 rounded-2xl bg-secondary/10 border-2 border-secondary/30 w-full">
              <Globe className="w-7 h-7 text-secondary flex-shrink-0" />
              <p className="text-lg font-medium text-foreground text-pretty leading-relaxed">
                Zenvy is created in the Netherlands, but made with love for families all over the world.
                <br />
                No matter where you're from, we're here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
