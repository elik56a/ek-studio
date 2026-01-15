export const parseRegexString = (
  regexString: string
): {
  pattern: string
  flags: string
  isValid: boolean
  error?: string
} => {
  try {
    const regexMatch = regexString.match(/^\/(.+)\/([gimuy]*)$/)

    if (regexMatch) {
      return {
        pattern: regexMatch[1],
        flags: regexMatch[2] || "",
        isValid: true,
      }
    }

    return {
      pattern: regexString,
      flags: "",
      isValid: true,
    }
  } catch (error) {
    return {
      pattern: regexString,
      flags: "",
      isValid: false,
      error: error instanceof Error ? error.message : "Invalid regex format",
    }
  }
}
