import { ConversionResult } from "@/shared/types"

import { jsonEscapeUnescape } from "./convert"
import { escapeJson } from "./escape"
import { JsonEscapeMode } from "./types"
import { unescapeJson } from "./unescape"

export const jsonEscapeUnescapeWithMode = (
  input: string,
  mode: JsonEscapeMode = "auto"
): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    switch (mode) {
      case "escape":
        return escapeJson(input)
      case "unescape":
        return unescapeJson(input)
      case "auto":
      default:
        return jsonEscapeUnescape(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}
