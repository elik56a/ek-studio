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

import { marked } from "marked"
import TurndownService from "turndown"

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
