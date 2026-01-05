"use client"

import { useEffect, useRef, useState } from "react"

import { usePathname } from "next/navigation"

import { useAutoSave } from "@/hooks/use-auto-save"
import { getDataFromUrl } from "@/lib/share"
import { getToolBySlug } from "@/lib/tools/registry"

interface UseToolStateOptions {
  initialInput?: string
  initialOutput?: string
}

export function useToolState({
  initialInput = "",
  initialOutput = "",
}: UseToolStateOptions = {}) {
  const pathname = usePathname()
  const toolSlug = pathname.slice(1) // Remove leading slash

  const [input, setInput] = useState(initialInput)
  const [output, setOutput] = useState(initialOutput)
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const isInitialized = useRef(false)

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

  // Auto-save functionality - only save, don't auto-restore in the hook
  const { loadSaved, clearSaved } = useAutoSave(`${toolSlug}-input`, { input })

  useEffect(() => {
    // Only run once on mount
    if (isInitialized.current) return
    isInitialized.current = true

    // Priority: URL data > auto-saved data > initial values
    const urlData = getDataFromUrl()
    if (urlData?.input) {
      setInput(urlData.input)
      if (urlData.output) setOutput(urlData.output)
    } else {
      // Try to restore from auto-save if no URL data
      const saved = loadSaved()
      if (saved?.input) {
        setInput(saved.input)
      }
    }
  }, [])

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
