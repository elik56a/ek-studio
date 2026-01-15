import { ConversionResult } from "@/shared/types"

import { detectHtmlEscaped } from "./detect"
import { escapeHtml } from "./escape"
import { unescapeHtml } from "./unescape"
import { validateHtmlEscaped } from "./validate"

export const htmlEscapeUnescape = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const isEscaped = detectHtmlEscaped(input)

    if (isEscaped) {
      const validation = validateHtmlEscaped(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid HTML entities",
          details: validation.suggestion,
        }
      }

      return unescapeHtml(input)
    } else {
      return escapeHtml(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}
