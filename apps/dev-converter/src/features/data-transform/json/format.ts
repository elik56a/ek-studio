import { ConversionResult } from "@/shared/types"

export const formatJson = (jsonInput: string): ConversionResult<string> => {
  if (!jsonInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const parsed = JSON.parse(jsonInput)
    const formatted = JSON.stringify(parsed, null, 2)

    return {
      success: true,
      data: formatted,
      message: "JSON formatted successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Invalid JSON",
    }
  }
}
