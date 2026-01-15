"use client"

import { useEffect, useRef, useState } from "react"

import { usePathname } from "next/navigation"

import { useAutoSave } from "@/hooks/use-auto-save"
import { getToolBySlug } from "@/lib/tools/registry"
import { getDataFromUrl } from "@/lib/tools/share"

interface UseToolStateOptions {
  initialInput?: string
  initialOutput?: string
  disableAutoSave?: boolean
}

export function useToolState({
  initialInput = "",
  initialOutput = "",
  disableAutoSave = false,
}: UseToolStateOptions = {}) {
  const pathname = usePathname()
  const toolSlug = pathname.slice(1) // Remove leading slash
  const isInitialized = useRef(false)
  const [isMounted, setIsMounted] = useState(false)

  // Get tool data
  const tool = getToolBySlug(toolSlug)

  // Get related tools
  const relatedTools =
    tool?.relatedTools
      ?.map(slug => {
        const relatedTool = getToolBySlug(slug)
        return relatedTool
          ? {
              name: relatedTool.name,
              href: `/${relatedTool.slug}`,
              description: relatedTool.description,
            }
          : null
      })
      .filter(
        (tool): tool is { name: string; href: string; description: string } =>
          tool !== null
      ) || []

  // Initialize state with lazy initializer to avoid hydration issues
  const [input, setInput] = useState(initialInput)
  const [output, setOutput] = useState(initialOutput)
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // Auto-save functionality - only save, don't auto-restore in the hook
  const { loadSaved, clearSaved } = useAutoSave(
    `${toolSlug}-input`,
    { input },
    1000,
    !disableAutoSave && isMounted
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Only run once on mount after hydration
    if (isInitialized.current || !isMounted) return
    isInitialized.current = true

    // Priority: URL data > auto-saved data > initial values
    const urlData = getDataFromUrl()
    if (urlData?.input) {
      setInput(urlData.input)
      if (urlData.output) setOutput(urlData.output)
    } else if (!disableAutoSave) {
      // Try to restore from auto-save if no URL data and auto-save is enabled
      const saved = loadSaved()
      if (saved?.input) {
        setInput(saved.input)
      }
    }
  }, [isMounted, disableAutoSave, loadSaved])

  const handleClear = () => {
    setInput("")
    setOutput("")
    setStatus("idle")
    setStatusMessage("")
    clearSaved()
  }

  const handleCopy = async () => {
    if (output) {
      await navigator.clipboard.writeText(output)
    }
  }

  return {
    input,
    setInput,
    output,
    setOutput,
    status,
    setStatus,
    statusMessage,
    setStatusMessage,
    handleClear,
    handleCopy,
    toolSlug,
    tool,
    relatedTools,
  }
}
