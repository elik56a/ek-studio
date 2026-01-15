import { ConversionResult } from "@/shared/types"

import { parseRegexString } from "./parse"
import { RegexMatch, RegexTestResult } from "./types"

export const testRegex = (
  regexString: string,
  testText: string
): ConversionResult<RegexTestResult> => {
  if (!regexString.trim()) {
    return {
      success: false,
      error: "Regex pattern is empty",
    }
  }

  if (!testText.trim()) {
    return {
      success: false,
      error: "Test text is empty",
    }
  }

  try {
    const { pattern, flags, isValid, error } = parseRegexString(regexString)

    if (!isValid) {
      return {
        success: false,
        error: error || "Invalid regex pattern",
      }
    }

    const regex = new RegExp(pattern, flags)
    const matches: RegexMatch[] = []

    if (flags.includes("g")) {
      let match
      while ((match = regex.exec(testText)) !== null) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1),
          namedGroups: match.groups,
        })

        if (match.index === regex.lastIndex) {
          regex.lastIndex++
        }
      }
    } else {
      const match = regex.exec(testText)
      if (match) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1),
          namedGroups: match.groups,
        })
      }
    }

    return {
      success: true,
      data: {
        matches,
        totalMatches: matches.length,
        isValid: true,
        flags,
        pattern,
      },
      message: `Found ${matches.length} match${matches.length !== 1 ? "es" : ""}`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Regex test failed",
    }
  }
}
