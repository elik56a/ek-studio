"use client"

import { Button } from "@ek-studio/ui"
import { Monitor, Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/core/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor
  
  const themeLabel = theme === "light" 
    ? "Switch to dark mode" 
    : theme === "dark" 
    ? "Switch to system theme" 
    : "Switch to light mode"

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleTheme}
      aria-label={themeLabel}
      title={themeLabel}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">{themeLabel}</span>
    </Button>
  )
}
