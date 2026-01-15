import { ConversionResult } from "@/shared/types"

import { TextCaseType } from "./types"

const splitIntoWords = (text: string): string[] => {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .split(/[\s_-]+/)
    .filter(word => word.length > 0)
}

export const convertCase = (
  input: string,
  caseType: TextCaseType
): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    let result: string
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
