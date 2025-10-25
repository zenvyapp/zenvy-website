"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "lucide-react"

interface SectionNavigatorProps {
  sections: { value: string; label: string }[]
  placeholder: string
  sticky?: boolean
}

export function SectionNavigator({ sections, placeholder, sticky = false }: SectionNavigatorProps) {
  const handleSectionChange = (value: string) => {
    const element = document.getElementById(value)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerClasses = sticky 
    ? "fixed bottom-6 right-6 z-50 bg-background border border-border rounded-lg shadow-lg p-3"
    : "flex items-center gap-2"

  return (
    <div className={containerClasses}>
      <Navigation className="w-4 h-4 text-muted-foreground" />
      <Select onValueChange={handleSectionChange}>
        <SelectTrigger className="w-64">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {sections.map((section) => (
            <SelectItem key={section.value} value={section.value}>
              {section.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
