import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionNavigator } from "@/components/section-navigator"
import { SidebarNavigator } from "@/components/sidebar-navigator"
import { FileText, Calendar, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  const isGerman = locale === 'de'
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                <span className="text-primary">Gebruiksvoorwaarden</span>
              </>
            ) : isSpanish ? (
              <>
                <span className="text-primary">Términos</span> de Uso
              </>
            ) : isFrench ? (
              <>
                <span className="text-primary">Conditions</span> d'Utilisation
              </>
            ) : isGerman ? (
              <>
                <span className="text-primary">Nutzungsbedingungen</span>
              </>
            ) : (
              <>
                <span className="text-primary">Terms</span> of Use
              </>
            )}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            {isDutch 
              ? 'Duidelijke richtlijnen voor een veilige en verantwoorde ervaring met Zenvy.'
              : isSpanish 
              ? 'Pautas claras para una experiencia segura y responsable con Zenvy.'
              : isFrench
              ? 'Des directives claires pour une expérience sûre et responsable avec Zenvy.'
              : isGerman
              ? 'Klare Richtlinien für eine sichere und verantwortungsvolle Erfahrung mit Zenvy.'
              : 'Clear guidelines for a safe and responsible experience with Zenvy.'
            }
          </p>
        </div>
      </section>

      {/* Back to Legal */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href={`/${locale}/legal`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDutch ? 'Terug naar Juridische Informatie' : isSpanish ? 'Volver a Información Legal' : isFrench ? 'Retour aux Informations Légales' : isGerman ? 'Zurück zu Rechtlichen Informationen' : 'Back to Legal Information'}
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {isDutch ? 'Gebruiksvoorwaarden' : isSpanish ? 'Términos de Uso' : isFrench ? 'Conditions d\'Utilisation' : isGerman ? 'Nutzungsbedingungen' : 'Terms of Use'}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none space-y-8">
              <div className="text-sm text-muted-foreground mb-6">
                <strong>Last updated: 22 may 2025</strong>
              </div>

              {/* Table of Contents */}
              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <ol className="space-y-2 text-sm">
                  <li><a href="#introduction" className="text-primary hover:text-secondary">1. Introduction</a></li>
                  <li><a href="#eligibility" className="text-primary hover:text-secondary">2. Eligibility and Use by Minors</a></li>
                  <li><a href="#account-registration" className="text-primary hover:text-secondary">3. Account Registration</a></li>
                  <li><a href="#donations" className="text-primary hover:text-secondary">4. Donations and Future Monetization</a></li>
                  <li><a href="#reward-system" className="text-primary hover:text-secondary">5. Reward System</a></li>
                  <li><a href="#acceptable-use" className="text-primary hover:text-secondary">6. Acceptable Use and Community Guidelines</a></li>
                  <li><a href="#content-ownership" className="text-primary hover:text-secondary">7. Content Ownership</a></li>
                  <li><a href="#user-content" className="text-primary hover:text-secondary">8. User Content and Feedback</a></li>
                  <li><a href="#availability" className="text-primary hover:text-secondary">9. Availability and Modifications</a></li>
                  <li><a href="#privacy" className="text-primary hover:text-secondary">10. Privacy</a></li>
                  <li><a href="#third-party" className="text-primary hover:text-secondary">11. Third-Party Services</a></li>
                  <li><a href="#security" className="text-primary hover:text-secondary">12. Security</a></li>
                  <li><a href="#limitation-liability" className="text-primary hover:text-secondary">13. Limitation of Liability</a></li>
                  <li><a href="#account-termination" className="text-primary hover:text-secondary">14. Account Termination</a></li>
                  <li><a href="#governing-law" className="text-primary hover:text-secondary">15. Governing Law</a></li>
                  <li><a href="#changes-terms" className="text-primary hover:text-secondary">16. Changes to Terms</a></li>
                  <li><a href="#contact" className="text-primary hover:text-secondary">17. Contact</a></li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <p className="text-blue-800">
                  <strong>PLEASE READ THE FOLLOWING TERMS OF USE BEFORE USING ZENVY.IO (THE 'SITE') OR USING OUR MOBILE APPLICATION (THE 'APP'). BY USING OUR APP OR ACCESSING ANY PAGE ON OUR SITE, YOU AGREE TO BE BOUND BY THE CURRENT VERSION OF THESE TERMS OF USE AND OUR PRIVACY POLICY.</strong>
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="introduction" className="text-2xl font-bold text-foreground">1. Introduction</h2>
                
                <p>
                  Welcome to Zenvy ("Zenvy", "we", "our"). Zenvy provides a digital platform via our mobile app and website designed to help families and individuals develop healthier screen habits and engage in meaningful activities. By accessing or using the Zenvy app or website (together referred to as the "Service"), you agree to be bound by these Terms of Use.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="eligibility" className="text-2xl font-bold text-foreground">2. Eligibility and Use by Minors</h2>

                <p>
                  Zenvy is intended for use by families, including children under the age of 16. If you are under 16, you may only use the Service under the supervision of a parent or legal guardian. Parents are responsible for ensuring that their child's use of the Service complies with these Terms and all applicable laws. We do not knowingly collect personal data from children without parental consent.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="account-registration" className="text-2xl font-bold text-foreground">3. Account Registration</h2>

                <p>
                  To use certain features of Zenvy, you must create an account. You agree to provide accurate, complete, and current information during registration and to keep this information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Please notify us immediately if you suspect unauthorized use.
                </p>

                <p>
                  Zenvy is currently available free of charge. We do not offer any paid services or subscriptions at this time. All features provided within the app are accessible without payment. As Zenvy is still in active development, we may explore monetization options in the future. If this occurs, we will inform users clearly in advance.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="donations" className="text-2xl font-bold text-foreground">4. Donations and Future Monetization</h2>

                <p>
                  While Zenvy is and will remain free during its development phase, we may in the future introduce a voluntary donation system for users who wish to support the project. Donations will always be optional and non-essential for access to any functionality. Any implementation of such a system will be transparent and compliant with relevant legal and platform guidelines.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="reward-system" className="text-2xl font-bold text-foreground">5. Reward System</h2>

                <p>
                  Zenvy includes a motivational system based on virtual rewards ("ZenCoins") and activities that may extend screen time or unlock benefits. These features are subject to parental control and configuration. Zenvy does not guarantee specific outcomes, time extensions, or real-world value of any rewards.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="acceptable-use" className="text-2xl font-bold text-foreground">6. Acceptable Use and Community Guidelines</h2>

                <p>
                  Users agree not to use the Service in a way that is illegal, harmful, abusive, or disruptive to others. In the future, if social features such as likes or comments are introduced, users must engage respectfully and avoid offensive or inappropriate content. We reserve the right to remove content and suspend or terminate accounts that violate these terms.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="content-ownership" className="text-2xl font-bold text-foreground">7. Content Ownership</h2>

                <p>
                  All content provided by Zenvy, including graphics, text, media, and trademarks, is owned by Zenvy or its licensors and protected by intellectual property laws. Users receive a limited, non-exclusive license to access and use the Service for personal, non-commercial purposes. Unauthorized use is prohibited.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="user-content" className="text-2xl font-bold text-foreground">8. User Content and Feedback</h2>

                <p>
                  If you submit content (e.g., goals, photos, or suggestions) through the Service, you grant Zenvy a royalty-free, worldwide license to use, modify, and display such content to operate and improve the Service. Personal data will be handled according to our Privacy Policy.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="availability" className="text-2xl font-bold text-foreground">9. Availability and Modifications</h2>

                <p>
                  Zenvy aims to provide a reliable Service but cannot guarantee uninterrupted access or error-free operation. We may modify, suspend, or discontinue parts of the Service at any time. Information on the Service may occasionally be inaccurate or outdated.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="privacy" className="text-2xl font-bold text-foreground">10. Privacy</h2>

                <p>
                  Please review our <a href="/privacy" className="text-primary hover:text-secondary transition-colors">Privacy Policy</a> to understand how we collect, use, and protect your information, especially regarding the use of Zenvy by children under parental supervision. For privacy-related requests or inquiries, please contact us at <a href="mailto:privacy@zenvy.io" className="text-primary hover:text-secondary transition-colors">privacy@zenvy.io</a>.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="third-party" className="text-2xl font-bold text-foreground">11. Third-Party Services</h2>

                <p>
                  The Service may contain links to third-party websites or integrate with third-party tools (e.g., payment processors). We are not responsible for the content or privacy practices of third parties. Use of such services is at your own risk.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="security" className="text-2xl font-bold text-foreground">12. Security</h2>

                <p>
                  While we take reasonable measures to secure your data, no method of internet transmission is 100% secure. Users are responsible for securing their own devices and accounts.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="limitation-liability" className="text-2xl font-bold text-foreground">13. Limitation of Liability</h2>

                <p>
                  To the extent permitted by law, Zenvy and its affiliates shall not be liable for indirect, incidental, or consequential damages arising from your use of the Service, including data loss, unauthorized access, or service interruptions.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="account-termination" className="text-2xl font-bold text-foreground">14. Account Termination</h2>

                <p>
                  You may delete your account at any time via the app settings. Zenvy reserves the right to suspend or terminate accounts that violate these Terms or applicable laws.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="governing-law" className="text-2xl font-bold text-foreground">15. Governing Law</h2>

                <p>
                  These Terms are governed by the laws of France, without regard to conflict of law principles. If any part of these Terms is held invalid, the remaining provisions will remain in full effect. These Terms are written in English. In case of translation into other languages, the English version shall prevail.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="changes-terms" className="text-2xl font-bold text-foreground">16. Changes to Terms</h2>

                <p>
                  We may update these Terms of Use from time to time. Changes are effective upon posting. Continued use of the Service after changes means you accept the updated terms.
                </p>
              </div>

              <div className="space-y-6">
                <h2 id="contact" className="text-2xl font-bold text-foreground">17. Contact</h2>

                <p>If you have any questions about these Terms, please contact us at:</p>

                <p><strong>Email:</strong> <a href="mailto:hello@zenvy.io" className="text-primary hover:text-secondary transition-colors">hello@zenvy.io</a></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      {/* Sidebar Navigation */}
      <SidebarNavigator
        sections={[
          { value: "introduction", label: "1. Introduction" },
          { value: "eligibility", label: "2. Eligibility and Use by Minors" },
          { value: "account-registration", label: "3. Account Registration" },
          { value: "donations", label: "4. Donations and Future Monetization" },
          { value: "reward-system", label: "5. Reward System" },
          { value: "acceptable-use", label: "6. Acceptable Use and Community Guidelines" },
          { value: "content-ownership", label: "7. Content Ownership" },
          { value: "user-content", label: "8. User Content and Feedback" },
          { value: "availability", label: "9. Availability and Modifications" },
          { value: "privacy", label: "10. Privacy" },
          { value: "third-party", label: "11. Third-Party Services" },
          { value: "security", label: "12. Security" },
          { value: "limitation-liability", label: "13. Limitation of Liability" },
          { value: "account-termination", label: "14. Account Termination" },
          { value: "governing-law", label: "15. Governing Law" },
          { value: "changes-terms", label: "16. Changes to Terms" },
          { value: "contact", label: "17. Contact" }
        ]}
      />
    </div>
  )
}
