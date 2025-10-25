"use client"

import { useState } from "react"
import { Navigation } from "lucide-react"

interface SidebarNavigatorProps {
  sections: { value: string; label: string }[]
}

export function SidebarNavigator({ sections }: SidebarNavigatorProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleSectionClick = (value: string) => {
    const element = document.getElementById(value)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      {/* Streepjes indicator */}
      <div className="flex flex-col items-center gap-2 py-4 px-2">
        {sections.slice(0, 5).map((section, index) => (
          <button
            key={section.value}
            onClick={() => handleSectionClick(section.value)}
            className="w-2 h-2 bg-primary hover:bg-primary/80 transition-all duration-200 rounded-full hover:scale-125 shadow-sm hover:shadow-md"
            title={section.label}
          />
        ))}
      </div>

      {/* Hover content */}
      {isHovered && (
        <>
          {/* Touch overlay to close menu */}
          <div 
            className="fixed inset-0 z-40" 
            onTouchStart={() => setIsHovered(false)}
            onMouseDown={() => setIsHovered(false)}
          />
          
          {/* Onzichtbare brug tussen stippen en menu */}
          <div className="absolute right-2 top-0 w-6 h-full bg-transparent z-50" />
          
          <div 
            className="absolute right-8 top-0 bg-background border-2 border-primary/20 rounded-lg shadow-xl p-4 min-w-72 max-w-80 max-h-96 overflow-y-auto touch-pan-y z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-3">
              <Navigation className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-sm text-primary">Navigate to section</h3>
            </div>
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.value}
                  onClick={() => handleSectionClick(section.value)}
                  className="block w-full text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded px-2 py-1 transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
