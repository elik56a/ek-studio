import { ValidationResult } from "@/shared/types"

export const validateJsonEscaped = (input: string): ValidationResult => {
  const invalidEscapes = input.match(/\\[^"\\/bfnrtu]/g)
  if (invalidEscapes) {
    const uniqueEscapes = [...new Set(invalidEscapes)].join(", ")
    return {
      isValid: false,
      error: `Invalid JSON escape sequences: ${uniqueEscapes}`,
      suggestion:
        'Valid JSON escapes are: \\", \\\\, \\/, \\b, \\f, \\n, \\r, \\t, and \\uXXXX. Fix or remove invalid sequences.',
    }
  }

  const incompleteUnicode = input.match(/\\u(?![0-9A-Fa-f]{4})/g)
  if (incompleteUnicode) {
    return {
      isValid: false,
      error: "Incomplete Unicode escape sequences detected",
      suggestion:
        "Unicode escapes must be in the format \\uXXXX with exactly 4 hexadecimal digits (e.g., \\u0041).",
    }
  }

  const controlChars = input.match(/[\x00-\x1F]/g)
  if (controlChars) {
    return {
      isValid: false,
      error: "Unescaped control characters detected",
      suggestion:
        "Control characters (0x00-0x1F) must be escaped in JSON strings. Use escape sequences like \\n, \\t, or \\uXXXX.",
    }
  }

  return { isValid: true }
}
