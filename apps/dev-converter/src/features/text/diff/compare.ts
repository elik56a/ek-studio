import { ConversionResult } from "@/shared/types"

import { DiffResult } from "./types"

export const compareDiff = (
  text1: string,
  text2: string
): ConversionResult<DiffResult> => {
  try {
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
