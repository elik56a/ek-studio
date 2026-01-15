import { ConversionResult } from "@/shared/types"

import { detectJsonEscaped } from "./detect"
import { escapeJson } from "./escape"
import { unescapeJson } from "./unescape"
import { validateJsonEscaped } from "./validate"

export const jsonEscapeUnescape = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const isEscaped = detectJsonEscaped(input)

    if (isEscaped) {
      const validation = validateJsonEscaped(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid JSON escape sequences",
          details: validation.suggestion,
        }
      }

      return unescapeJson(input)
    } else {
      return escapeJson(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}
