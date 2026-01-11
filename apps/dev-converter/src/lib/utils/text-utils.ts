import { marked } from "marked"
import TurndownService from "turndown"

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

/**
 * Diff result interface
 */
export interface DiffResult {
  changes: Array<{
    value: string
    added?: boolean
    removed?: boolean
  }>
  addedLines: number
  removedLines: number
  unchangedLines: number
}

/**
 * Compare two texts and return differences
 * @param text1 - The original text
 * @param text2 - The modified text
 * @returns ConversionResult with diff information
 */
export function compareDiff(
  text1: string,
  text2: string
): ConversionResult<DiffResult> {
  try {
    // Dynamic import to avoid bundling issues
    const Diff = require("diff")
    const changes = Diff.diffLines(text1, text2)

    let addedLines = 0
    let removedLines = 0
    let unchangedLines = 0

    changes.forEach((change: any) => {
      const lineCount = change.value
        .split("\n")
        .filter((line: string) => line !== "").length

      if (change.added) {
        addedLines += lineCount
      } else if (change.removed) {
        removedLines += lineCount
      } else {
        unchangedLines += lineCount
      }
    })

    return {
      success: true,
      data: {
        changes,
        addedLines,
        removedLines,
        unchangedLines,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to compare texts",
    }
  }
}

export type ConversionMode = "markdown-to-html" | "html-to-markdown"

/**
 * Format HTML with proper indentation
 * @param html - The HTML string to format
 * @returns Formatted HTML string
 */
function formatHtml(html: string): string {
  let formatted = ""
  let indent = 0
  const tab = "  " // 2 spaces

  // Remove extra whitespace and newlines
  html = html.replace(/>\s+</g, "><").trim()

  // Split by tags
  const tokens = html.split(/(<[^>]+>)/g).filter(token => token.trim())

  tokens.forEach(token => {
    if (token.match(/^<\/\w/)) {
      // Closing tag
      indent = Math.max(0, indent - 1)
      formatted += tab.repeat(indent) + token + "\n"
    } else if (token.match(/^<\w[^>]*[^/]>$/)) {
      // Opening tag (not self-closing)
      formatted += tab.repeat(indent) + token + "\n"
      indent++
    } else if (token.match(/^<\w[^>]*\/>$/)) {
      // Self-closing tag
      formatted += tab.repeat(indent) + token + "\n"
    } else if (token.trim()) {
      // Text content
      formatted += tab.repeat(indent) + token.trim() + "\n"
    }
  })

  return formatted.trim()
}

/**
 * Convert between Markdown and HTML formats
 * @param text - The text to convert
 * @param mode - The conversion mode (markdown-to-html or html-to-markdown)
 * @returns ConversionResult with converted text or error
 */
export function convertMarkdownHtml(
  text: string,
  mode: ConversionMode
): ConversionResult<string> {
  if (!text.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    let result: string

    if (mode === "markdown-to-html") {
      const rawHtml = marked(text) as string
      result = formatHtml(rawHtml)
    } else {
      const turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
      })
      result = turndownService.turndown(text)
    }

    return {
      success: true,
      data: result,
      message: `Converted ${mode === "markdown-to-html" ? "Markdown to HTML" : "HTML to Markdown"} successfully`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Regex match result interface
 */
export interface RegexMatch {
  match: string
  index: number
  groups: string[]
  namedGroups?: Record<string, string>
}

/**
 * Regex test result interface
 */
export interface RegexTestResult {
  matches: RegexMatch[]
  totalMatches: number
  isValid: boolean
  flags: string
  pattern: string
}

/**
 * Parse regex pattern from string (supports /pattern/flags format)
 * @param regexString - The regex string to parse
 * @returns Object with pattern and flags
 */
export function parseRegexString(regexString: string): {
  pattern: string
  flags: string
  isValid: boolean
  error?: string
} {
  try {
    // Check if it's in /pattern/flags format
    const regexMatch = regexString.match(/^\/(.+)\/([gimuy]*)$/)

    if (regexMatch) {
      return {
        pattern: regexMatch[1],
        flags: regexMatch[2] || "",
        isValid: true,
      }
    }

    // If not in /pattern/flags format, treat as plain pattern
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

/**
 * Test regex pattern against text and format results as string
 * @param regexPattern - The regex pattern (without slashes)
 * @param flags - Object with flag states
 * @param testText - The text to test against
 * @returns ConversionResult with formatted string output
 */
export function testRegexWithFormatting(
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
): ConversionResult<string> {
  const flagsString = Object.entries(flags)
    .filter(([_, enabled]) => enabled)
    .map(([flag]) => flag)
    .join("")

  const fullRegex = `/${regexPattern}/${flagsString}`
  const result = testRegex(fullRegex, testText)

  // Convert RegexTestResult to string format
  if (result.success && result.data) {
    const matches = result.data.matches
    if (matches.length > 0) {
      const outputStr = matches
        .map((match, idx) => {
          let matchInfo = `Match ${idx + 1}: "${match.match}" at index ${match.index}`

          if (match.groups && match.groups.length > 0) {
            matchInfo += `\n  Groups: ${match.groups.map((g, i) => `$${i + 1}="${g}"`).join(", ")}`
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

/**
 * Test regex pattern against text
 * @param regexString - The regex pattern string (supports /pattern/flags format)
 * @param testText - The text to test against
 * @returns ConversionResult with regex test results
 */
export function testRegex(
  regexString: string,
  testText: string
): ConversionResult<RegexTestResult> {
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

    // Create regex object
    const regex = new RegExp(pattern, flags)
    const matches: RegexMatch[] = []

    if (flags.includes("g")) {
      // Global search - find all matches
      let match
      while ((match = regex.exec(testText)) !== null) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1),
          namedGroups: match.groups,
        })

        // Prevent infinite loop on zero-length matches
        if (match.index === regex.lastIndex) {
          regex.lastIndex++
        }
      }
    } else {
      // Single match
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
