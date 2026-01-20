import { ValidationResult } from "@/shared/types"

export const validateHtmlEscaped = (input: string): ValidationResult => {
  const incompletePattern =
    /&(?:[a-zA-Z][a-zA-Z0-9]*|#x?[0-9a-fA-F]+)(?![;\w])/g
  const matches = [...input.matchAll(incompletePattern)]

  if (matches.length > 0) {
    const incompleteEntities = matches.map(m => m[0])
    const examples = incompleteEntities.slice(0, 3).join(", ")
    return {
      isValid: false,
      error: `Incomplete HTML entities detected: ${examples}${incompleteEntities.length > 3 ? "..." : ""}`,
      suggestion:
        "HTML entities must end with a semicolon (;). Add missing semicolons or escape the & character as &amp;.",
    }
  }

  const invalidNumeric = input.match(/&#[^0-9xX;]/g)
  if (invalidNumeric) {
    return {
      isValid: false,
      error: "Invalid numeric HTML entities detected",
      suggestion:
        "Numeric entities must use &#digits; or &#xHEX; format. Fix malformed sequences.",
    }
  }

  return { isValid: true }
}
