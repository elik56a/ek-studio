import { marked } from "marked"
import TurndownService from "turndown"

import { ConversionResult } from "@/shared/types"

import { formatHtml } from "./format-html"
import { ConversionMode } from "./types"

export const convertMarkdownHtml = (
  text: string,
  mode: ConversionMode
): ConversionResult<string> => {
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
