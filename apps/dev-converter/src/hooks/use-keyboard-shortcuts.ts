"use client"

import { useEffect } from "react"

interface KeyboardShortcutsProps {
  onConvert?: () => void
  onCopy?: () => void
  onClear?: () => void
}

export function useKeyboardShortcuts({
  onConvert,
  onCopy,
  onClear,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLInputElement
      ) {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
          e.preventDefault()
          onConvert?.()
        }
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "C") {
          e.preventDefault()
          onCopy?.()
        }
      }

      if (e.key === "Escape") {
        onClear?.()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onConvert, onCopy, onClear])
}
