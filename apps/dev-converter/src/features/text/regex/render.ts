import { testRegex } from "./test"

export interface HighlightedPart {
  text: string
  isMatch: boolean
  matchIndex?: number
}

export interface RenderResult {
  type: "empty" | "no-matches" | "matches"
  message?: string
  parts?: HighlightedPart[]
}

export const getHighlightedParts = (
  regexPattern: string,
  flags: Record<string, boolean>,
  input: string
): RenderResult => {
  // Handle empty states
  if (!input || !regexPattern) {
    const message = !regexPattern && !input
      ? "Enter a regex pattern and test text to see matches"
      : !regexPattern
        ? "Enter a regex pattern above"
        : "Enter test text to match against"
    
    return { type: "empty", message }
  }

  // Build flags string
  const flagsString = Object.entries(flags)
    .filter(([_, enabled]) => enabled)
    .map(([flag]) => flag)
    .join("")

  // Test regex
  const fullRegex = `/${regexPattern}/${flagsString}`
  const result = testRegex(fullRegex, input)

  // Handle no matches
  if (!result.success || !result.data || result.data.matches.length === 0) {
    return { type: "no-matches", message: "No matches found" }
  }

  // Build highlighted parts
  const matches = result.data.matches
  const parts: HighlightedPart[] = []
  let lastIndex = 0

  matches.forEach((match: any) => {
    if (match.index > lastIndex) {
      parts.push({
        text: input.slice(lastIndex, match.index),
        isMatch: false,
      })
    }
    parts.push({
      text: match.match,
      isMatch: true,
      matchIndex: parts.filter(p => p.isMatch).length + 1,
    })
    lastIndex = match.index + match.match.length
  })

  if (lastIndex < input.length) {
    parts.push({ text: input.slice(lastIndex), isMatch: false })
  }

  return { type: "matches", parts }
}

export const parseExampleInput = (exampleInput: string) => {
  const parts = exampleInput.split("\n\n")
  
  if (parts.length < 2) {
    return null
  }

  const regexPart = parts[0]
  const testText = parts.slice(1).join("\n\n")

  // Parse regex pattern and flags
  const match = regexPart.match(/^\/(.+)\/([gimsuvy]*)$/)
  
  if (!match) {
    return null
  }

  const pattern = match[1]
  const flagsStr = match[2]
  
  const flags = {
    g: flagsStr.includes("g"),
    i: flagsStr.includes("i"),
    m: flagsStr.includes("m"),
    s: flagsStr.includes("s"),
    u: flagsStr.includes("u"),
    y: flagsStr.includes("y"),
  }

  return { pattern, flags, testText }
}
