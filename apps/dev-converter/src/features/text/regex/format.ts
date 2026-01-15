import { ConversionResult } from "@/shared/types"
import { testRegex } from "./test"

export const testRegexWithFormatting = (
  regexPattern: string,
  flags: {
    g?: boolean
    i?: boolean
    m?: boolean
    s?: boolean
    u?: boolean
    y?: boolean
  },
  testText: string
): ConversionResult<string> => {
  const flagsString = Object.entries(flags)
    .filter(([_, enabled]) => enabled)
    .map(([flag]) => flag)
    .join("")

  const fullRegex = `/${regexPattern}/${flagsString}`
  const result = testRegex(fullRegex, testText)

  if (result.success && result.data) {
    const matches = result.data.matches
    if (matches.length > 0) {
      const outputStr = matches
        .map((match, idx) => {
          let matchInfo = `Match ${idx + 1}: "${match.match}" at index ${match.index}`

          if (match.groups && match.groups.length > 0) {
            matchInfo += `\n  Groups: ${match.groups.map((g, i) => `${i + 1}="${g}"`).join(", ")}`
          }

          if (match.namedGroups && Object.keys(match.namedGroups).length > 0) {
            matchInfo += `\n  Named: ${Object.entries(match.namedGroups)
              .map(([name, val]) => `${name}="${val}"`)
              .join(", ")}`
          }

          return matchInfo
        })
        .join("\n\n")

      return {
        success: true,
        data: outputStr,
        message: result.message,
      }
    } else {
      return {
        success: true,
        data: "No matches found",
        message: "No matches found",
      }
    }
  }

  return {
    success: false,
    error: result.error || "Regex test failed",
  }
}
