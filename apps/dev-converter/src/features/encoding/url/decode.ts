import { ConversionResult } from "@/shared/types"

export const decodeUrl = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const decoded = decodeURIComponent(input)
    return {
      success: true,
      data: decoded,
      message: "URL decoded successfully",
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Decode failed"
    return {
      success: false,
      error: "Failed to decode URL",
      details: `${errorMsg}. The string may contain invalid UTF-8 sequences or corrupted encoding.`,
    }
  }
}
