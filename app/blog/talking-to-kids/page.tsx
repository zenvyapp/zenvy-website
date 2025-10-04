import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TalkingToKidsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-9xl">👨‍👩‍👧‍👦</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            How to Talk to Your Kids About Screen Time Without the Drama
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discussing screen time with children doesn't have to end in tears and tantrums. Here's how to have
              productive conversations that build understanding and cooperation.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Start with Empathy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Before diving into rules and restrictions, take time to understand your child's perspective. Ask them what
              they enjoy about their favorite apps or games. Show genuine interest in their digital world. When children
              feel heard and understood, they're more likely to be receptive to your concerns.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Explain the "Why" Behind the Rules</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Children are more likely to follow guidelines when they understand the reasoning behind them. Instead of
              simply saying "no more screen time," explain how too much screen time can affect sleep, physical health,
              and social skills. Use age-appropriate language and real-world examples they can relate to.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Involve Them in Setting Boundaries</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Give your children a voice in creating screen time rules. Ask for their input on reasonable limits and
              consequences. When kids participate in the decision-making process, they feel more ownership over the
              rules and are more likely to respect them. This collaborative approach transforms the conversation from a
              power struggle into a team effort.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Focus on Positive Alternatives</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rather than just taking away screen time, offer exciting alternatives. Suggest family game nights, outdoor
              adventures, or creative projects. Help your children discover activities they enjoy that don't involve
              screens. The goal is to make offline time appealing, not to make screen time feel like a punishment.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Use Rewards, Not Just Restrictions</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Positive reinforcement is more effective than punishment. Instead of threatening to take away devices,
              create a reward system for healthy screen time habits. This could include earning extra screen time for
              completing chores, reading, or spending time outdoors. Apps like Zenvy make this approach easy by
              gamifying healthy habits.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Be a Role Model</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Children learn by example. If you're constantly on your phone, it's hard to convince them to limit their
              own screen time. Practice what you preach by setting boundaries for yourself. Put your phone away during
              family meals, designate screen-free times, and show your children that you value face-to-face interaction.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Keep Communication Open</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Make screen time an ongoing conversation, not a one-time lecture. Check in regularly with your children
              about how they're feeling about their device usage. Be willing to adjust rules as they grow and
              demonstrate responsibility. This flexibility shows that you trust them and are willing to work together.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Stay Calm and Consistent</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When conflicts arise—and they will—remain calm and consistent. Avoid getting into heated arguments about
              screen time. If your child becomes upset, acknowledge their feelings while maintaining your boundaries.
              Consistency is key; if you give in during tantrums, you're teaching them that drama works.
            </p>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Make It Easier with Zenvy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zenvy helps facilitate these conversations by providing clear data on screen time usage and offering a
                positive, reward-based approach to digital wellness. Transform screen time battles into opportunities
                for growth and understanding.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Discover Zenvy
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
