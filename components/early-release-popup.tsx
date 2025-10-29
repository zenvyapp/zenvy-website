"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Rocket, Mail } from "lucide-react"
import { MailingListDialog } from "@/components/mailing-list-dialog"

interface EarlyReleasePopupProps {
  locale?: string
}

export function EarlyReleasePopup({ locale = "en" }: EarlyReleasePopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [showMailingListDialog, setShowMailingListDialog] = useState(false)

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
    setShowMailingListDialog(true)
  }

  if (isDismissed || !isVisible) return null

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

  const text = content[locale as keyof typeof content] || content.en

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-card border border-border rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground pr-12">
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
            
            <Button
              onClick={handleJoinMailingList}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-sm whitespace-nowrap"
            >
              <Mail className="h-4 w-4" />
              {text.button}
            </Button>
          </div>
        </div>
      </div>
      <MailingListDialog 
        open={showMailingListDialog} 
        onOpenChange={setShowMailingListDialog}
        locale={locale}
      />
    </div>
  )
}
