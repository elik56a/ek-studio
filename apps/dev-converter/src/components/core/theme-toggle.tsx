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

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      <Icon className="h-4 w-4" />
    </Button>
  )
}
