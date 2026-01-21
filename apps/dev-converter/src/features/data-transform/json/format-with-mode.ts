import { ConversionResult } from "@/shared/types"

import { formatJson } from "./format"
import { JsonFormatterMode } from "./types"

export type { JsonFormatterMode, JsonFormatterPreset } from "./types"

export const formatJsonWithMode = (
  input: string,
  mode: JsonFormatterMode = "format"
): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const parsed = JSON.parse(input)

    switch (mode) {
      case "format":
        return {
          success: true,
          data: JSON.stringify(parsed, null, 2),
          message: "JSON formatted successfully",
        }

      case "validate":
        // Validate just formats it - validation happens during parse
        return {
          success: true,
          data: JSON.stringify(parsed, null, 2),
          message: "JSON is valid",
        }

      case "minify":
        return {
          success: true,
          data: JSON.stringify(parsed),
          message: "JSON minified successfully",
        }

      case "viewer":
        return {
          success: true,
          data: JSON.stringify(parsed, null, 2),
          message: "JSON loaded in viewer",
        }

      default:
        return formatJson(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Invalid JSON",
    }
  }
}
