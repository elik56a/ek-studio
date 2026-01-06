export interface ConversionResult<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  metadata?: Record<string, any>
}

/**
 * Text case types supported by the case converter
 */
export type TextCaseType =
  | "camelCase"
  | "PascalCase"
  | "snake_case"
  | "kebab-case"
  | "CONSTANT_CASE"
  | "Title Case"
  | "Sentence case"
  | "lowercase"
  | "UPPERCASE"

/**
 * Converts text to various case formats
 * @param input - The text to convert
 * @param caseType - The target case format
 * @returns ConversionResult with converted text or error
 */
export function convertCase(
  input: string,
  caseType: TextCaseType
): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    let result: string

    // Helper to split text into words
    const splitIntoWords = (text: string): string[] => {
      // Split by spaces, underscores, hyphens, and camelCase boundaries
      return text
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Split PascalCase
        .split(/[\s_-]+/) // Split by spaces, underscores, hyphens
        .filter(word => word.length > 0)
    }

    const words = splitIntoWords(input)

    switch (caseType) {
      case "camelCase":
        result = words
          .map((word, index) => {
            const lower = word.toLowerCase()
            return index === 0
              ? lower
              : lower.charAt(0).toUpperCase() + lower.slice(1)
          })
          .join("")
        break

      case "PascalCase":
        result = words
          .map(word => {
            const lower = word.toLowerCase()
            return lower.charAt(0).toUpperCase() + lower.slice(1)
          })
          .join("")
        break

      case "snake_case":
        result = words.map(word => word.toLowerCase()).join("_")
        break

      case "kebab-case":
        result = words.map(word => word.toLowerCase()).join("-")
        break

      case "CONSTANT_CASE":
        result = words.map(word => word.toUpperCase()).join("_")
        break

      case "Title Case":
        result = words
          .map(word => {
            const lower = word.toLowerCase()
            return lower.charAt(0).toUpperCase() + lower.slice(1)
          })
          .join(" ")
        break

      case "Sentence case":
        const sentence = words.map(word => word.toLowerCase()).join(" ")
        result = sentence.charAt(0).toUpperCase() + sentence.slice(1)
        break

      case "lowercase":
        result = words.map(word => word.toLowerCase()).join(" ")
        break

      case "UPPERCASE":
        result = words.map(word => word.toUpperCase()).join(" ")
        break

      default:
        return {
          success: false,
          error: "Invalid case type",
        }
    }

    return {
      success: true,
      data: result,
      message: `Text converted to ${caseType} successfully`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}
