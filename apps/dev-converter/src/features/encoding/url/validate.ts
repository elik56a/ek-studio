import { ValidationResult } from "@/shared/types"

export const validateUrlEncoded = (input: string): ValidationResult => {
  const malformedPattern = /%(?![0-9A-Fa-f]{2})/g
  const malformed = input.match(malformedPattern)
  if (malformed) {
    return {
      isValid: false,
      error: "Malformed percent encoding detected",
      suggestion:
        "Percent signs (%) must be followed by exactly 2 hexadecimal digits (0-9, A-F). Fix incomplete sequences like %2 or %G.",
    }
  }

  const invalidHex = input.match(/%[^0-9A-Fa-f]{2}/g)
  if (invalidHex) {
    return {
      isValid: false,
      error: `Invalid hexadecimal sequences: ${invalidHex.join(", ")}`,
      suggestion:
        "Percent encoding must use valid hex digits (0-9, A-F). Replace invalid sequences.",
    }
  }

  return { isValid: true }
}
