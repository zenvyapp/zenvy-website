"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ScreenTimeBalancePage() {
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
            <span className="text-9xl">📱</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            5 Signs Your Family Needs Better Screen Time Balance
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In today's digital age, finding the right balance between screen time and real-world activities can be
              challenging. Here are five key indicators that it might be time to reassess your family's relationship
              with technology.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">1. Constant Battles Over Devices</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If every request to put down a device turns into an argument, it's a clear sign that boundaries need to be
              established. When children resist screen time limits with increasing intensity, it often indicates that
              technology has become too central to their daily routine.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">2. Declining Physical Activity</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Notice your kids choosing screens over outdoor play? A significant decrease in physical activity is a red
              flag. Children need regular movement for healthy development, and excessive screen time can interfere with
              this crucial aspect of growing up.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">3. Sleep Disruptions</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Late-night device use can severely impact sleep quality. If your children are having trouble falling
              asleep, waking up tired, or sneaking devices into their bedrooms at night, it's time to implement stricter
              screen time boundaries, especially before bedtime.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">4. Reduced Face-to-Face Interaction</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Family dinners dominated by phones? Conversations cut short to check notifications? When screens start
              replacing meaningful family interactions, it's a sign that digital habits need adjustment. Quality family
              time is essential for building strong relationships.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">5. Academic Performance Changes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Declining grades, incomplete homework, or difficulty concentrating on schoolwork can all be linked to
              excessive screen time. If you notice these changes, it might be time to evaluate how much time is being
              spent on devices versus educational activities.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Taking Action</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Recognizing these signs is the first step toward creating healthier digital habits. The good news is that
              with the right tools and approach, you can help your family find balance. Apps like Zenvy make it easier
              to set boundaries, track usage, and encourage positive behaviors through rewards rather than restrictions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Remember, the goal isn't to eliminate screen time entirely—technology is an important part of modern life.
              Instead, aim for a healthy balance that allows your children to enjoy the benefits of technology while
              still engaging in physical activity, face-to-face interactions, and other essential aspects of childhood.
            </p>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Find Balance?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zenvy helps families create healthy screen time habits through positive reinforcement and smart
                tracking. Start your journey toward digital wellness today.
              </p>
              <Link
                href={`/${getCurrentLocale()}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Learn More About Zenvy
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
