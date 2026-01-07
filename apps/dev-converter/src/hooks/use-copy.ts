"use client"

import { useState } from "react"

import { useToast } from "@/components/core/toast-provider"

interface UseCopyOptions {
  successMessage?: string
  errorMessage?: string
  duration?: number
}

export function useCopy(options: UseCopyOptions = {}) {
  const {
    successMessage = "Copied to clipboard!",
    errorMessage = "Failed to copy",
    duration = 2000,
  } = options

  const { addToast } = useToast()
  const [isCopied, setIsCopied] = useState(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)

      addToast(successMessage, "success")

      // Reset copied state after duration
      setTimeout(() => {
        setIsCopied(false)
      }, duration)

      return true
    } catch (error) {
      addToast(errorMessage, "error")
      return false
    }
  }

  return { copy, isCopied }
}
