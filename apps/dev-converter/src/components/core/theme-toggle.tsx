"use client"

import { Button } from "@ek-studio/ui"
import { Monitor, Moon, Sun } from "lucide-react"

import { useEffect, useState } from "react"

import { useTheme } from "@/components/core/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only render the icon after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor

  const themeLabel =
    theme === "light"
      ? "Switch to dark mode"
      : theme === "dark"
        ? "Switch to system theme"
        : "Switch to light mode"

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        aria-label="Toggle theme"
        title="Toggle theme"
        disabled
      >
        <div className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

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
