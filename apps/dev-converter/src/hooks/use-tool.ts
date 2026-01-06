import { useCallback } from "react"

import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"
import { ConversionResult } from "@/lib/utils/json-utils"

interface UseToolOptions {
  /**
   * The conversion function that takes input and returns a ConversionResult
   */
  convertFn?: (
    input: string
  ) => ConversionResult<string> | Promise<ConversionResult<string>>
  /**
   * The generation function that returns a ConversionResult (no input needed)
   */
  generateFn?: () =>
    | ConversionResult<string>
    | Promise<ConversionResult<string>>
  /**
   * Optional custom success message override. If not provided, uses result.message
   */
  successMessage?: string | ((metadata?: Record<string, any>) => string)
}

export function useTool({
  convertFn,
  generateFn,
  successMessage,
}: UseToolOptions) {
  const toolState = useToolState()
  const {
    input,
    setInput,
    setOutput,
    setStatus,
    setStatusMessage,
    handleClear,
    handleCopy,
  } = toolState

  const convert = useCallback(async () => {
    if (!convertFn) return

    // Handle empty input
    if (!input.trim()) {
      setOutput("")
      setStatus("idle")
      setStatusMessage("")
      return
    }

    setStatus("loading")

    try {
      // Execute conversion (supports both sync and async)
      const result = await convertFn(input)

      if (result.success && result.data) {
        setOutput(result.data)
        setStatus("success")

        // Set success message - priority: custom override > result.message > fallback
        if (typeof successMessage === "function") {
          setStatusMessage(successMessage(result.metadata))
        } else if (successMessage) {
          setStatusMessage(successMessage)
        } else if (result.message) {
          setStatusMessage(result.message)
        } else {
          setStatusMessage("Conversion successful")
        }
      } else {
        setStatus("error")
        setStatusMessage(result.error || "Conversion failed")
        setOutput("")
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage(
        error instanceof Error ? error.message : "Conversion failed"
      )
      setOutput("")
    }
  }, [input, convertFn, successMessage, setOutput, setStatus, setStatusMessage])

  const generate = useCallback(async () => {
    if (!generateFn) return

    setStatus("loading")

    try {
      // Execute generation (supports both sync and async)
      const result = await generateFn()

      if (result.success && result.data) {
        setOutput(result.data)
        setStatus("success")

        // Set success message - priority: custom override > result.message > fallback
        if (typeof successMessage === "function") {
          setStatusMessage(successMessage(result.metadata))
        } else if (successMessage) {
          setStatusMessage(successMessage)
        } else if (result.message) {
          setStatusMessage(result.message)
        } else {
          setStatusMessage("Generation successful")
        }
      } else {
        setStatus("error")
        setStatusMessage(result.error || "Generation failed")
        setOutput("")
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage(
        error instanceof Error ? error.message : "Generation failed"
      )
      setOutput("")
    }
  }, [generateFn, successMessage, setOutput, setStatus, setStatusMessage])

  const handleExampleClick = useCallback(
    async (exampleInput: string) => {
      if (!convertFn) return

      setInput(exampleInput)
      // Trigger conversion after setting input
      setTimeout(async () => {
        try {
          const result = await convertFn(exampleInput)

          if (result.success && result.data) {
            setOutput(result.data)
            setStatus("success")

            // Set success message - priority: custom override > result.message > fallback
            if (typeof successMessage === "function") {
              setStatusMessage(successMessage(result.metadata))
            } else if (successMessage) {
              setStatusMessage(successMessage)
            } else if (result.message) {
              setStatusMessage(result.message)
            } else {
              setStatusMessage("Conversion successful")
            }
          } else {
            setStatus("error")
            setStatusMessage(result.error || "Conversion failed")
            setOutput("")
          }
        } catch (error) {
          setStatus("error")
          setStatusMessage(
            error instanceof Error ? error.message : "Conversion failed"
          )
          setOutput("")
        }
      }, 0)
    },
    [
      convertFn,
      successMessage,
      setInput,
      setOutput,
      setStatus,
      setStatusMessage,
    ]
  )

  const handleSwap = useCallback(() => {
    if (!toolState.output) return // Don't swap if there's no output
    const temp = toolState.input
    setInput(toolState.output)
    setOutput(temp)
  }, [toolState.input, toolState.output, setInput, setOutput])

  // Setup keyboard shortcuts
  useKeyboardShortcuts({
    onConvert: convertFn ? convert : generateFn ? generate : () => {},
    onCopy: handleCopy,
    onClear: handleClear,
  })

  return {
    ...toolState,
    convert,
    generate,
    handleExampleClick,
    handleSwap,
  }
}

// Keep backward compatibility
export const useToolConverter = useTool
