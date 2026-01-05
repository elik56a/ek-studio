import { useCallback } from "react"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"
import { useToolState } from "@/hooks/use-tool-state"
import { ConversionResult } from "@/lib/utils/json-utils"

interface UseToolConverterOptions {
  /**
   * The conversion function that takes input and returns a ConversionResult
   */
  convertFn: (input: string) => ConversionResult<string>
  /**
   * Optional custom success message override. If not provided, uses result.message
   */
  successMessage?: string | ((metadata?: Record<string, any>) => string)
}

export function useToolConverter({ convertFn, successMessage }: UseToolConverterOptions) {
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

  const convert = useCallback(() => {
    // Handle empty input
    if (!input.trim()) {
      setOutput("")
      setStatus("idle")
      setStatusMessage("")
      return
    }

    setStatus("loading")

    // Execute conversion
    const result = convertFn(input)

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
  }, [input, convertFn, successMessage, setOutput, setStatus, setStatusMessage])

  const handleExampleClick = useCallback((exampleInput: string) => {
    setInput(exampleInput)
    // Trigger conversion after setting input
    setTimeout(() => {
      const result = convertFn(exampleInput)
      
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
    }, 0)
  }, [convertFn, successMessage, setInput, setOutput, setStatus, setStatusMessage])

  const handleSwap = useCallback(() => {
    if (!toolState.output) return // Don't swap if there's no output
    const temp = toolState.input
    setInput(toolState.output)
    setOutput(temp)
  }, [toolState.input, toolState.output, setInput, setOutput])

  // Setup keyboard shortcuts
  useKeyboardShortcuts({
    onConvert: convert,
    onCopy: handleCopy,
    onClear: handleClear,
  })

  return {
    ...toolState,
    convert,
    handleExampleClick,
    handleSwap,
  }
}
