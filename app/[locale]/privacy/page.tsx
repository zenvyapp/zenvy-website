import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionNavigator } from "@/components/section-navigator"
import { SidebarNavigator } from "@/components/sidebar-navigator"
import { Shield, Calendar, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isDutch = locale === 'nl'
  const isSpanish = locale === 'es'
  const isFrench = locale === 'fr'
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {isDutch ? (
              <>
                <span className="text-primary">Privacy</span> Beleid
              </>
            ) : isSpanish ? (
              <>
                <span className="text-primary">Política</span> de Privacidad
              </>
            ) : isFrench ? (
              <>
                <span className="text-primary">Politique</span> de Confidentialité
              </>
            ) : (
              <>
                <span className="text-primary">Privacy</span> Policy
              </>
            )}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            {isDutch 
              ? 'Jouw privacy is onze hoogste prioriteit. Ontdek hoe we je gegevens beschermen.'
              : isSpanish 
              ? 'Tu privacidad es nuestra máxima prioridad. Descubre cómo protegemos tus datos.'
              : isFrench
              ? 'Votre confidentialité est notre priorité absolue. Découvrez comment nous protégeons vos données.'
              : 'Your privacy is our top priority. Discover how we protect your data.'
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
            {isDutch ? 'Terug naar Juridische Informatie' : isSpanish ? 'Volver a Información Legal' : isFrench ? 'Retour aux Informations Légales' : 'Back to Legal Information'}
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {isDutch ? 'Privacy Beleid' : isSpanish ? 'Política de Privacidad' : isFrench ? 'Politique de Confidentialité' : 'Privacy Policy'}
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
                  <li><a href="#information-collection" className="text-primary hover:text-secondary">2. Information We Collect</a></li>
                  <li><a href="#how-we-use" className="text-primary hover:text-secondary">3. How We Use Your Information</a></li>
                  <li><a href="#data-sharing" className="text-primary hover:text-secondary">4. Data Sharing and Disclosure</a></li>
                  <li><a href="#data-storage" className="text-primary hover:text-secondary">5. Data Storage and Security</a></li>
                  <li><a href="#children-privacy" className="text-primary hover:text-secondary">6. Children's Privacy</a></li>
                  <li><a href="#data-retention" className="text-primary hover:text-secondary">7. Data Retention</a></li>
                  <li><a href="#international-transfers" className="text-primary hover:text-secondary">8. International Data Transfers</a></li>
                  <li><a href="#your-rights" className="text-primary hover:text-secondary">9. Your Rights</a></li>
                  <li><a href="#gdpr" className="text-primary hover:text-secondary">10. GDPR Compliance</a></li>
                  <li><a href="#ccpa" className="text-primary hover:text-secondary">11. CCPA/CPRA Compliance</a></li>
                  <li><a href="#cookies" className="text-primary hover:text-secondary">12. Cookies and Tracking</a></li>
                  <li><a href="#third-parties" className="text-primary hover:text-secondary">13. Third Parties and Subprocessors</a></li>
                  <li><a href="#policy-changes" className="text-primary hover:text-secondary">14. Changes to This Policy</a></li>
                  <li><a href="#contact" className="text-primary hover:text-secondary">15. Contact Us</a></li>
                </ol>
              </div>

              <div className="space-y-6">
                <h2 id="introduction" className="text-2xl font-bold text-foreground">1. Introduction</h2>
                
                <div className="space-y-4">
                  <p>
                    Your privacy matters to us. At Zenvy, we are committed to respecting your privacy and complying with all applicable laws and regulations regarding any personal data we may collect from you—through our mobile app, website, and related services.
                  </p>

                  <p>
                    Personal information refers to data that can be used to identify you as an individual. This includes, but is not limited to, your name, contact details, device information, and usage behavior within our app.
                  </p>

                  <p>
                    This Privacy Policy does not extend to external sites or services we may link to. We recommend reviewing the privacy policies of any third-party services you interact with through our app.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 id="information-collection" className="text-2xl font-bold text-foreground">2. Information We Collect</h2>

                <p>We collect two main types of data:</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">2.1 Information You Provide Directly</h3>
                    <p>This includes any personal details you enter during registration, communication with us, or when participating in features like surveys, feedback forms, or rewards.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2.2 Data Collected Automatically</h3>
                    <p>We may gather details such as your device type, IP address, OS, app usage stats, error logs, and general behavioral data when you interact with Zenvy.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2.3 Log and Device Data</h3>
                    <p>Our servers may log data automatically, such as:</p>
                    <ul className="mt-3 space-y-2">
                      <li>• IP address</li>
                      <li>• Browser or app version</li>
                      <li>• Pages visited and time spent</li>
                      <li>• Error events and associated metadata</li>
                    </ul>

                    <p className="mt-4">Device-specific information may include:</p>
                    <ul className="mt-3 space-y-2">
                      <li>• Device type and OS</li>
                      <li>• App settings</li>
                      <li>• Usage preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2.4 Personal Information</h3>
                    <p>We may request information such as:</p>
                    <ul className="mt-3 space-y-2">
                      <li>• First name</li>
                      <li>• Email address (with optional anonymized option via Apple sign-in)</li>
                      <li>• Profile customization (e.g., avatar)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">2.5 App Usage and Activity Data</h3>
                    <p>Zenvy may collect:</p>
                    <ul className="mt-3 space-y-2">
                      <li>• Screen time tracking data</li>
                      <li>• User-defined app block settings or goals</li>
                      <li>• Quiz responses or earned reward data</li>
                      <li>• Feedback submitted through the app</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 id="how-we-use" className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>

                <p>We use your information to:</p>
                <ul className="space-y-2">
                  <li>• Provide and personalize app features</li>
                  <li>• Improve functionality and user experience</li>
                  <li>• Communicate with users for support or updates</li>
                  <li>• Conduct internal research and app analytics</li>
                  <li>• Ensure security and prevent misuse</li>
                  <li>• Send optional newsletters and reward notifications</li>
                </ul>

                <p>We do not sell your personal data. We only share information when necessary for the core functioning of our services (e.g., analytics or hosting), always under strict data protection agreements.</p>
              </div>

              <div className="space-y-6">
                <h2 id="data-sharing" className="text-2xl font-bold text-foreground">4. Data Sharing and Disclosure</h2>

                <div>
                  <h3 className="text-lg font-semibold mb-3">4.1 Transparency on Data Sharing</h3>
                  <p>We may share your data with:</p>
                  <ul className="mt-3 space-y-2">
                    <li>• Service providers that help us operate the app (e.g., hosting, analytics, customer support)</li>
                    <li>• Legal authorities if required by law</li>
                    <li>• Affiliates and subcontractors under data protection agreements</li>
                  </ul>

                  <p className="mt-4">We ensure that any third parties handling your data are contractually bound to protect it under applicable data protection standards.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 id="data-storage" className="text-2xl font-bold text-foreground">5. Data Storage and Security</h2>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5.1 Storage Location</h3>
                  <p>Your data is primarily stored on servers located within the European Union. We apply industry-standard safeguards including:</p>
                  <ul className="mt-3 space-y-2">
                    <li>• Encrypted data transmission (HTTPS)</li>
                    <li>• Role-based access control</li>
                    <li>• Regular security audits and updates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5.2 Security Measures</h3>
                  <p>We apply reasonable technical and organizational safeguards to protect your data from unauthorized access or misuse. No method of transmission is 100% secure, so we cannot guarantee absolute security.</p>
                  
                  <p className="mt-4">While we strive to protect your data, no system is completely immune to risks. We encourage you to use strong passwords and keep your account credentials private.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 id="children-privacy" className="text-2xl font-bold text-foreground">6. Children's Privacy</h2>

                <p>Zenvy is designed for family use, including child participation under supervision. We do not knowingly collect identifiable information from children under 13 without parental consent. Parents or guardians control child profile data.</p>
              </div>

              <div className="space-y-6">
                <h2 id="data-retention" className="text-2xl font-bold text-foreground">7. Data Retention</h2>

                <p>We retain personal data only as long as necessary to provide our services. If you delete your account, we will erase or anonymize your data within a reasonable time unless retention is legally required.</p>
              </div>

              <div className="space-y-6">
                <h2 id="international-transfers" className="text-2xl font-bold text-foreground">8. International Data Transfers</h2>

                <p>Your data may be processed outside your country of residence. We ensure appropriate safeguards are in place, such as hosting within the EU or applying standard contractual clauses. Zenvy is accessible globally, and data may be transferred to countries with differing data protection standards, but always under legally accepted mechanisms.</p>
              </div>

              <div className="space-y-6">
                <h2 id="your-rights" className="text-2xl font-bold text-foreground">9. Your Rights</h2>

                <p>Depending on your location (e.g., EU, UK, California), you may have rights to:</p>
                <ul className="mt-3 space-y-2">
                  <li>• Access or update your data</li>
                  <li>• Request deletion</li>
                  <li>• Restrict or object to processing</li>
                  <li>• Withdraw consent</li>
                  <li>• Receive a copy of your data in portable format</li>
                  <li>• File a complaint with a supervisory authority</li>
                </ul>

                <p className="mt-4">To exercise these rights, contact us at <a href="mailto:privacy@zenvy.io" className="text-primary hover:text-secondary transition-colors">privacy@zenvy.io</a>.</p>
              </div>

              <div className="space-y-6">
                <h2 id="gdpr" className="text-2xl font-bold text-foreground">10. GDPR Compliance</h2>

                <p>If you reside in the EU or EEA:</p>
                <ul className="mt-3 space-y-2">
                  <li>• We act as Data Controller when processing your personal information.</li>
                  <li>• Our legal basis for processing includes consent, contract fulfillment, legitimate interests, or compliance with legal obligations.</li>
                  <li>• You may withdraw consent at any time. This does not affect prior lawful processing.</li>
                  <li>• You may request restriction, objection, deletion, or portability as per Articles 12–23 GDPR.</li>
                  <li>• Transfers outside the EEA are protected using SCCs or other approved safeguards.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 id="ccpa" className="text-2xl font-bold text-foreground">11. CCPA/CPRA Compliance</h2>

                <p>If you reside in California, you have the right to:</p>
                <ul className="mt-3 space-y-2">
                  <li>• Know what personal data we collect and how we use it</li>
                  <li>• Request access to your data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Opt-out of data sharing or selling (we do not sell personal data)</li>
                  <li>• Receive equal service regardless of exercising your privacy rights</li>
                </ul>

                <p className="mt-4">To exercise these rights, email us at <a href="mailto:privacy@zenvy.io" className="text-primary hover:text-secondary transition-colors">privacy@zenvy.io</a> with "California Privacy Request" in the subject line.</p>

                <p>We honor Do Not Track (DNT) signals where legally required. We do not offer CCPA-permitted financial incentives.</p>
              </div>

              <div className="space-y-6">
                <h2 id="cookies" className="text-2xl font-bold text-foreground">12. Cookies and Tracking Technologies</h2>

                <p>Zenvy uses limited cookies or similar technologies for session management, preference storage, and analytics. You can control cookies through your browser settings.</p>
              </div>

              <div className="space-y-6">
                <h2 id="third-parties" className="text-2xl font-bold text-foreground">13. Third Parties and Subprocessors</h2>

                <p>We work with trusted third parties (subprocessors) to deliver key functionality:</p>
                <ul className="mt-3 space-y-2">
                  <li>• Hosting: Digital Ocean (EU servers)</li>
                  <li>• Analytics: Amplitude</li>
                  <li>• Error tracking: Bugsnag</li>
                  <li>• Customer support: Crisp</li>
                  <li>• Email services: SendGrid</li>
                </ul>

                <p className="mt-4">All subprocessors operate under strict contractual terms to protect your data.</p>
              </div>

              <div className="space-y-6">
                <h2 id="policy-changes" className="text-2xl font-bold text-foreground">14. Changes to This Policy</h2>

                <p>We may update this Privacy Policy to reflect legal, technical, or operational changes. Significant updates will be communicated through the app or via email.</p>

                <p>Continued use of our services after changes implies acceptance. If required, we will seek your explicit consent for major updates.</p>
              </div>

              <div className="space-y-6">
                <h2 id="contact" className="text-2xl font-bold text-foreground">15. Contact Us</h2>

                <p>For questions, concerns, or privacy-related requests, contact us at:</p>

                <p><strong>Email:</strong> <a href="mailto:privacy@zenvy.io" className="text-primary hover:text-secondary transition-colors">privacy@zenvy.io</a></p>

                <p>Zenvy is a product of <strong>BrightLab B.V.</strong>, based in the Netherlands.</p>
              </div>

              <hr className="my-8" />

              <p className="text-sm text-muted-foreground italic">
                This international privacy policy is designed to meet the requirements of major jurisdictions including the EU, UK, US (California), and other applicable data protection laws worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      {/* Sidebar Navigation */}
      <SidebarNavigator
        sections={[
          { value: "introduction", label: "1. Introduction" },
          { value: "information-collection", label: "2. Information We Collect" },
          { value: "how-we-use", label: "3. How We Use Your Information" },
          { value: "data-sharing", label: "4. Data Sharing and Disclosure" },
          { value: "data-storage", label: "5. Data Storage and Security" },
          { value: "children-privacy", label: "6. Children's Privacy" },
          { value: "data-retention", label: "7. Data Retention" },
          { value: "international-transfers", label: "8. International Data Transfers" },
          { value: "your-rights", label: "9. Your Rights" },
          { value: "gdpr", label: "10. GDPR Compliance" },
          { value: "ccpa", label: "11. CCPA/CPRA Compliance" },
          { value: "cookies", label: "12. Cookies and Tracking" },
          { value: "third-parties", label: "13. Third Parties and Subprocessors" },
          { value: "policy-changes", label: "14. Changes to This Policy" },
          { value: "contact", label: "15. Contact Us" }
        ]}
      />
    </div>
  )
}
