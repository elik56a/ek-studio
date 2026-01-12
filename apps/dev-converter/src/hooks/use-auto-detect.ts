import { Tool } from "@/lib/tools/types"

interface UseAutoDetectProps {
  tool: Tool
  input: string
  isDetected: boolean
}

interface UseAutoDetectReturn {
  inputLabel: string
  outputLabel: string
  autoDetectLabel: string | undefined
  convertLabel: string
}

/**
 * Custom hook to handle auto-detect labels and text for encoder/decoder tools
 * Centralizes the logic for dynamic labels based on detected input format
 */
export function useAutoDetect({
  tool,
  input,
  isDetected,
}: UseAutoDetectProps): UseAutoDetectReturn {
  const hasInput = input.trim().length > 0

  // Dynamic convert button label
  const convertLabel = !hasInput
    ? tool.ui.convertLabel
    : isDetected
      ? tool.ui.autoDetect?.labels.detected.includes("→")
        ? tool.ui.autoDetect.labels.detected.split("→")[1].trim()
        : "Decode"
      : tool.ui.autoDetect?.labels.plain.includes("→")
        ? tool.ui.autoDetect.labels.plain.split("→")[1].trim()
        : "Encode"

  // Dynamic input label from config
  const inputLabel = isDetected
    ? tool.ui.autoDetect?.inputLabels?.detected || tool.ui.inputLabel
    : tool.ui.autoDetect?.inputLabels?.plain || tool.ui.inputLabel

  // Dynamic output label from config
  const outputLabel = isDetected
    ? tool.ui.autoDetect?.outputLabels?.detected || tool.ui.outputLabel
    : tool.ui.autoDetect?.outputLabels?.plain || tool.ui.outputLabel

  // Auto-detect badge label from config
  const autoDetectLabel = !hasInput
    ? tool.ui.autoDetect?.emptyLabel
    : isDetected
      ? tool.ui.autoDetect?.labels.detected
      : tool.ui.autoDetect?.labels.plain

  return {
    inputLabel,
    outputLabel,
    autoDetectLabel,
    convertLabel,
  }
}
