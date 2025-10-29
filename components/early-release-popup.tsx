"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Rocket, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface EarlyReleasePopupProps {
  locale?: string
}

const content = {
  en: {
    title: "Zenvy is currently in Early Release 🚀",
    description: "We're still fine-tuning the experience! Some features mentioned on our website are not yet available in the app, but will be released soon in upcoming updates.",
    cta: "Want to stay updated about new features, family challenges, and app improvements?",
    button: "👉 Join our mailing list"
  },
  nl: {
    title: "Zenvy bevindt zich momenteel in Early Release 🚀",
    description: "We zijn nog bezig met het verfijnen van de ervaring! Sommige functies die op onze website worden genoemd zijn nog niet beschikbaar in de app, maar zullen binnenkort worden uitgebracht in aankomende updates.",
    cta: "Wil je op de hoogte blijven van nieuwe functies, gezinsuitdagingen en app-verbeteringen?",
    button: "👉 Meld je aan voor onze mailinglijst"
  },
  es: {
    title: "Zenvy está actualmente en Early Release 🚀",
    description: "¡Aún estamos perfeccionando la experiencia! Algunas funciones mencionadas en nuestro sitio web aún no están disponibles en la aplicación, pero se lanzarán pronto en próximas actualizaciones.",
    cta: "¿Quieres mantenerte actualizado sobre nuevas funciones, desafíos familiares y mejoras de la aplicación?",
    button: "👉 Únete a nuestra lista de correo"
  },
  fr: {
    title: "Zenvy est actuellement en Early Release 🚀",
    description: "Nous affinons encore l'expérience ! Certaines fonctionnalités mentionnées sur notre site web ne sont pas encore disponibles dans l'application, mais seront bientôt publiées dans les prochaines mises à jour.",
    cta: "Vous voulez rester informé des nouvelles fonctionnalités, défis familiaux et améliorations de l'application ?",
    button: "👉 Rejoignez notre liste de diffusion"
  },
  de: {
    title: "Zenvy befindet sich derzeit in Early Release 🚀",
    description: "Wir verfeinern noch die Erfahrung! Einige auf unserer Website erwähnte Funktionen sind noch nicht in der App verfügbar, werden aber bald in kommenden Updates veröffentlicht.",
    cta: "Möchten Sie über neue Funktionen, Familienherausforderungen und App-Verbesserungen auf dem Laufenden bleiben?",
    button: "👉 Treten Sie unserer Mailingliste bei"
  }
}

const newsletterContent = {
  en: {
    title: "Subscribe to our newsletter",
    description: "Stay updated about new features, family challenges, and app improvements.",
    placeholder: "Enter your email address",
    button: "Subscribe",
    success: "Successfully subscribed!",
    error: "Something went wrong. Please try again.",
    invalidEmail: "Please enter a valid email address.",
    successMessage: "You'll receive updates from us soon!",
  },
  nl: {
    title: "Abonneer op onze nieuwsbrief",
    description: "Blijf op de hoogte van nieuwe functies, gezinsuitdagingen en app-verbeteringen.",
    placeholder: "Voer je e-mailadres in",
    button: "Abonneren",
    success: "Succesvol aangemeld!",
    error: "Er ging iets mis. Probeer het opnieuw.",
    invalidEmail: "Voer een geldig e-mailadres in.",
    successMessage: "Je ontvangt binnenkort updates van ons!",
  },
  es: {
    title: "Suscríbete a nuestro boletín",
    description: "Mantente actualizado sobre nuevas funciones, desafíos familiares y mejoras de la aplicación.",
    placeholder: "Ingresa tu dirección de correo electrónico",
    button: "Suscribirse",
    success: "¡Suscrito exitosamente!",
    error: "Algo salió mal. Por favor, inténtalo de nuevo.",
    invalidEmail: "Por favor ingresa una dirección de correo electrónico válida.",
    successMessage: "¡Recibirás actualizaciones nuestras pronto!",
  },
  fr: {
    title: "Abonnez-vous à notre newsletter",
    description: "Restez informé des nouvelles fonctionnalités, défis familiaux et améliorations de l'application.",
    placeholder: "Entrez votre adresse e-mail",
    button: "S'abonner",
    success: "Abonnement réussi !",
    error: "Quelque chose s'est mal passé. Veuillez réessayer.",
    invalidEmail: "Veuillez entrer une adresse e-mail valide.",
    successMessage: "Vous recevrez bientôt nos mises à jour !",
  },
  de: {
    title: "Newsletter abonnieren",
    description: "Bleiben Sie über neue Funktionen, Familienherausforderungen und App-Verbesserungen informiert.",
    placeholder: "Geben Sie Ihre E-Mail-Adresse ein",
    button: "Abonnieren",
    success: "Erfolgreich abonniert!",
    error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    successMessage: "Sie erhalten bald Updates von uns!",
  },
}

export function EarlyReleasePopup({ locale = "en" }: EarlyReleasePopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [showNewsletterForm, setShowNewsletterForm] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Check if popup was previously dismissed and if 1 day has passed
  useEffect(() => {
    const dismissedData = localStorage.getItem("early-release-popup-dismissed")
    
    if (!dismissedData) {
      // First time visitor - show immediately
      setIsVisible(true)
    } else {
      // Check if 1 day has passed since dismissal
      const dismissedTime = parseInt(dismissedData)
      const now = Date.now()
      const oneDayInMs = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
      
      if (now - dismissedTime > oneDayInMs) {
        // More than 1 day has passed - show again
        setIsVisible(true)
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    // Store current timestamp instead of just "true"
    localStorage.setItem("early-release-popup-dismissed", Date.now().toString())
  }

  const handleJoinMailingList = () => {
    setShowNewsletterForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(newsletterContent[locale as keyof typeof newsletterContent]?.invalidEmail || newsletterContent.en.invalidEmail)
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || newsletterContent[locale as keyof typeof newsletterContent]?.error || newsletterContent.en.error)
      }

      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : newsletterContent[locale as keyof typeof newsletterContent]?.error || newsletterContent.en.error)
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isDismissed || !isVisible) return null

  const text = content[locale as keyof typeof content] || content.en
  const newsletterText = newsletterContent[locale as keyof typeof newsletterContent] || newsletterContent.en

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-card border border-border rounded-2xl p-4 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 pr-8 sm:pr-12">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
              {text.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {text.description}
          </p>

          <div className="space-y-3">
            <p className="text-sm text-foreground font-medium">
              {text.cta}
            </p>
            
            {!showNewsletterForm && (
              <Button
                onClick={handleJoinMailingList}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-sm sm:text-sm"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">{text.button}</span>
              </Button>
            )}

            {showNewsletterForm && (
              <>
                {isSuccess && (
                  <div className="flex flex-col items-center justify-center pt-2 pb-1 space-y-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <p className="text-base font-semibold text-foreground">{newsletterText.success}</p>
                    </div>
                    <p className="text-sm text-muted-foreground text-center pb-1">
                      {newsletterText.successMessage}
                    </p>
                  </div>
                )}

                {!isSuccess && (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        name="email"
                        id="email-subscribe"
                        autoComplete="email"
                        placeholder={newsletterText.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full text-sm sm:text-base"
                        required
                        aria-invalid={error ? "true" : "false"}
                      />
                      {error && (
                        <div className="flex items-start gap-2 text-xs sm:text-sm text-destructive">
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                          <span className="break-words">{error}</span>
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
                          <span className="truncate">
                            {locale === "nl"
                              ? "Aanmelden..."
                              : locale === "es"
                              ? "Suscribiendo..."
                              : locale === "fr"
                              ? "Abonnement..."
                              : locale === "de"
                              ? "Abonnieren..."
                              : "Subscribing..."}
                          </span>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4 shrink-0" />
                          <span className="truncate">{newsletterText.button}</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
