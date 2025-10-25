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
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-9xl">🌟</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The Science Behind Digital Wellness: Why Balance Matters
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Understanding the research behind screen time and child development can help parents make informed
              decisions about their family's digital habits.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">The Impact on Brain Development</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Research shows that excessive screen time during critical developmental years can affect brain structure
              and function. The prefrontal cortex, responsible for decision-making and impulse control, is particularly
              vulnerable. Studies have found that children who spend more than two hours per day on screens show
              differences in brain development compared to those with limited screen time.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Sleep and Circadian Rhythms</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Blue light from screens suppresses melatonin production, the hormone that regulates sleep. This disruption
              can lead to difficulty falling asleep, reduced sleep quality, and daytime fatigue. Children need adequate
              sleep for proper cognitive development, emotional regulation, and physical growth. The American Academy of
              Pediatrics recommends no screen time at least one hour before bedtime.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Social and Emotional Development</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Face-to-face interaction is crucial for developing social skills, empathy, and emotional intelligence.
              When screen time replaces in-person communication, children miss out on important opportunities to learn
              how to read facial expressions, understand body language, and navigate complex social situations. Studies
              have linked excessive screen time to increased rates of anxiety and depression in children and
              adolescents.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Physical Health Considerations</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sedentary screen time contributes to childhood obesity, poor posture, and reduced cardiovascular fitness.
              The World Health Organization recommends that children aged 5-17 get at least 60 minutes of moderate to
              vigorous physical activity daily. Excessive screen time often displaces this crucial physical activity,
              leading to long-term health consequences.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Attention and Focus</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The rapid pace and constant stimulation of digital media can affect children's ability to focus and
              sustain attention. Research suggests that excessive screen time, particularly with fast-paced content, is
              associated with attention problems and reduced academic performance. Children need opportunities to engage
              in activities that require sustained focus and patience.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">The Positive Side of Technology</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It's important to note that not all screen time is created equal. Educational content, creative apps, and
              video calls with family members can have positive benefits. The key is finding the right balance and
              ensuring that screen time is purposeful rather than passive. Quality matters as much as quantity when it
              comes to digital media consumption.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Finding the Right Balance</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The goal isn't to eliminate screens entirely—that's neither realistic nor necessary in our digital world.
              Instead, aim for a balanced approach that includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Age-appropriate screen time limits</li>
              <li>Regular physical activity and outdoor play</li>
              <li>Face-to-face family time without devices</li>
              <li>Quality educational content when screens are used</li>
              <li>Screen-free zones and times (like bedrooms and mealtimes)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4">Evidence-Based Recommendations</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Major health organizations provide guidelines based on current research:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Children under 18 months: Avoid screen time except video chatting</li>
              <li>Ages 2-5: Limit to one hour per day of high-quality programming</li>
              <li>Ages 6 and older: Consistent limits on time and types of media</li>
              <li>All ages: No screens during meals or one hour before bedtime</li>
            </ul>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Science-Backed Digital Wellness</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zenvy is built on research-backed principles of digital wellness, helping families implement
                evidence-based screen time strategies through positive reinforcement and smart tracking. Make informed
                decisions about your family's digital health.
              </p>
              <Link
                href={`/${getCurrentLocale()}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Start Your Digital Wellness Journey
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
