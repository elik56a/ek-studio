import { ConversionResult } from "@/shared/types"

export const escapeJson = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const escaped = JSON.stringify(input).slice(1, -1)

    return {
      success: true,
      data: escaped,
      message: "Text escaped for JSON successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to escape for JSON",
      details:
        "The input contains characters that cannot be serialized to JSON.",
    }
  }
}
