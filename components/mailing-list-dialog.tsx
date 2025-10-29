"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface MailingListDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  locale?: string
}

export function MailingListDialog({ open, onOpenChange, locale = "en" }: MailingListDialogProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const content = {
    en: {
      title: "Subscribe to our newsletter",
      description: "Stay updated about new features, family challenges, and app improvements.",
      placeholder: "Enter your email address",
      button: "Subscribe",
      success: "Successfully subscribed!",
      error: "Something went wrong. Please try again.",
      invalidEmail: "Please enter a valid email address.",
    },
    nl: {
      title: "Abonneer op onze nieuwsbrief",
      description: "Blijf op de hoogte van nieuwe functies, gezinsuitdagingen en app-verbeteringen.",
      placeholder: "Voer je e-mailadres in",
      button: "Abonneren",
      success: "Succesvol aangemeld!",
      error: "Er ging iets mis. Probeer het opnieuw.",
      invalidEmail: "Voer een geldig e-mailadres in.",
    },
    es: {
      title: "Suscríbete a nuestro boletín",
      description: "Mantente actualizado sobre nuevas funciones, desafíos familiares y mejoras de la aplicación.",
      placeholder: "Ingresa tu dirección de correo electrónico",
      button: "Suscribirse",
      success: "¡Suscrito exitosamente!",
      error: "Algo salió mal. Por favor, inténtalo de nuevo.",
      invalidEmail: "Por favor ingresa una dirección de correo electrónico válida.",
    },
    fr: {
      title: "Abonnez-vous à notre newsletter",
      description: "Restez informé des nouvelles fonctionnalités, défis familiaux et améliorations de l'application.",
      placeholder: "Entrez votre adresse e-mail",
      button: "S'abonner",
      success: "Abonnement réussi !",
      error: "Quelque chose s'est mal passé. Veuillez réessayer.",
      invalidEmail: "Veuillez entrer une adresse e-mail valide.",
    },
    de: {
      title: "Newsletter abonnieren",
      description: "Bleiben Sie über neue Funktionen, Familienherausforderungen und App-Verbesserungen informiert.",
      placeholder: "Geben Sie Ihre E-Mail-Adresse ein",
      button: "Abonnieren",
      success: "Erfolgreich abonniert!",
      error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    },
  }

  const text = content[locale as keyof typeof content] || content.en

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(text.invalidEmail)
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
        throw new Error(data.error || text.error)
      }

      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : text.error)
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset state when closing
      setEmail("")
      setError(null)
      setIsSuccess(false)
    }
    onOpenChange(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
            <span className="break-words">{text.title}</span>
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">{text.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 sm:space-y-4">
          {isSuccess && (
            <div className="flex flex-col items-center justify-center pt-2 pb-1 space-y-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm sm:text-base font-semibold text-foreground break-words text-center">{text.success}</p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground text-center pb-1 px-2">
                {locale === "nl" 
                  ? "Je ontvangt binnenkort updates van ons!"
                  : locale === "es"
                  ? "¡Recibirás actualizaciones nuestras pronto!"
                  : locale === "fr"
                  ? "Vous recevrez bientôt nos mises à jour !"
                  : locale === "de"
                  ? "Sie erhalten bald Updates von uns!"
                  : "You'll receive updates from us soon!"}
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
                  placeholder={text.placeholder}
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
                    <span className="truncate">{text.button}</span>
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

