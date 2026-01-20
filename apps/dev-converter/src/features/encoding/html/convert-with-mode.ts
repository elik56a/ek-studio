import { ConversionResult } from "@/shared/types"
import { detectHtmlEscaped } from "./detect"
import { escapeHtml } from "./escape"
import { htmlEscapeUnescape } from "./convert"
import { unescapeHtml } from "./unescape"
import { validateHtmlEscaped } from "./validate"
import type { HtmlEscapeMode } from "./types"

/**
 * Convert HTML based on the specified mode
 * @param input - The input string to convert
 * @param mode - The conversion mode (auto, escape, or unescape)
 * @returns ConversionResult with the converted string or error
 */
export function convertHtmlWithMode(
  input: string,
  mode: HtmlEscapeMode
): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    if (mode === "auto") {
      // Use existing auto-detect behavior
      return htmlEscapeUnescape(input)
    } else if (mode === "escape") {
      // Always escape
      return escapeHtml(input)
    } else {
      // Always unescape
      const validation = validateHtmlEscaped(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid HTML entities",
        }
      }
      return unescapeHtml(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Get labels for input/output based on mode and detection
 * @param mode - The current mode
 * @param input - The input string for auto-detection
 * @param autoDetectConfig - Auto-detect configuration from tool config
 * @returns Object with inputLabel, outputLabel, and convertLabel
 */
export function getHtmlLabels(
  mode: HtmlEscapeMode,
  input: string,
  autoDetectConfig?: {
    enabled: boolean
    emptyLabel: string
    labels: { detected: string; plain: string }
    inputLabels?: { detected: string; plain: string }
    outputLabels?: { detected: string; plain: string }
  }
) {
  if (mode === "auto" && autoDetectConfig?.inputLabels && autoDetectConfig?.outputLabels) {
    const isDetected = Boolean(input.trim() && detectHtmlEscaped(input))
    return {
      inputLabel: isDetected
        ? autoDetectConfig.inputLabels.detected
        : autoDetectConfig.inputLabels.plain,
      outputLabel: isDetected
        ? autoDetectConfig.outputLabels.detected
        : autoDetectConfig.outputLabels.plain,
      convertLabel: isDetected
        ? autoDetectConfig.labels.detected
        : autoDetectConfig.labels.plain,
    }
  } else if (mode === "escape") {
    return {
      inputLabel: "HTML (Plain)",
      outputLabel: "HTML (Escaped)",
      convertLabel: "Escape",
    }
  } else {
    return {
      inputLabel: "HTML (Escaped)",
      outputLabel: "HTML (Unescaped)",
      convertLabel: "Unescape",
    }
  }
}
