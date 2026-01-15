import { ValidationResult } from "@/shared/types"

export const validateBase64 = (
  input: string,
  isUrlSafe: boolean = false
): ValidationResult => {
  const trimmed = input.trim()

  if (isUrlSafe) {
    const invalidChars = trimmed.match(/[^A-Za-z0-9_-]/g)
    if (invalidChars) {
      const uniqueChars = [...new Set(invalidChars)].join(", ")
      return {
        isValid: false,
        error: `Invalid Base64URL characters detected: ${uniqueChars}`,
        suggestion:
          "Base64URL only uses A-Z, a-z, 0-9, -, and _. No padding (=) is used. Remove or replace invalid characters.",
      }
    }
    return { isValid: true }
  }

  const invalidChars = trimmed.match(/[^A-Za-z0-9+/=\s]/g)
  if (invalidChars) {
    const uniqueChars = [...new Set(invalidChars)].join(", ")
    return {
      isValid: false,
      error: `Invalid Base64 characters detected: ${uniqueChars}`,
      suggestion:
        "Base64 only uses A-Z, a-z, 0-9, +, /, and = for padding. Remove or replace invalid characters.",
    }
  }

  const cleaned = trimmed.replace(/\s/g, "")

  if (cleaned.length % 4 !== 0) {
    const remainder = cleaned.length % 4
    const missing = 4 - remainder
    return {
      isValid: false,
      error: `Invalid Base64 length: ${cleaned.length} characters (not a multiple of 4)`,
      suggestion: `Add ${missing} padding character${missing > 1 ? "s" : ""} (=) to make the length a multiple of 4, or remove ${remainder} character${remainder > 1 ? "s" : ""}.`,
    }
  }

  const paddingIndex = cleaned.indexOf("=")
  if (paddingIndex !== -1 && paddingIndex < cleaned.length - 2) {
    return {
      isValid: false,
      error: "Invalid padding: = characters must only appear at the end",
      suggestion:
        "Move padding (=) to the end of the string or remove it entirely.",
    }
  }

  const paddingCount = (cleaned.match(/=/g) || []).length
  if (paddingCount > 2) {
    return {
      isValid: false,
      error: `Too many padding characters: ${paddingCount} (maximum is 2)`,
      suggestion: "Base64 strings can have at most 2 padding characters (=).",
    }
  }

  if (paddingIndex !== -1) {
    const afterPadding = cleaned.slice(paddingIndex)
    if (!/^=+$/.test(afterPadding)) {
      return {
        isValid: false,
        error: "Invalid padding: characters found after padding",
        suggestion: "Remove any characters after the padding (=) characters.",
      }
    }
  }

  return { isValid: true }
}
