import { DiffChange, ChangeBlock, MinimapLine, SplitViewLine } from './types'

export const buildChangeBlocks = (changes: DiffChange[]): ChangeBlock[] => {
  const blocks: ChangeBlock[] = []
  let currentLine = 0
  let blockId = 0

  changes.forEach(change => {
    const lines = change.value.split("\n").filter((line, i, arr) => {
      return i < arr.length - 1 || line !== ""
    })

    if (change.added || change.removed) {
      const type = change.added ? "added" : "removed"
      const preview = lines[0]?.substring(0, 50) || ""

      blocks.push({
        id: `change-block-${blockId}`,
        type,
        lineStart: currentLine,
        lineCount: lines.length,
        preview: preview + (preview.length >= 50 ? "..." : ""),
      })
      blockId++
    }

    currentLine += lines.length
  })

  return blocks
}

export const buildUnifiedMinimapLines = (changes: DiffChange[]): MinimapLine[] => {
  const allLines: MinimapLine[] = []
  let currentBlockId = 0

  changes.forEach(change => {
    const lines = change.value.split("\n").filter((line, i, arr) => {
      return i < arr.length - 1 || line !== ""
    })

    const isChangeBlock = change.added || change.removed
    const blockId = isChangeBlock ? `change-block-${currentBlockId++}` : null

    lines.forEach((line, lineIndex) => {
      const type = change.added
        ? "added"
        : change.removed
          ? "removed"
          : "unchanged"
      allLines.push({
        type,
        blockId: lineIndex === 0 ? blockId : null,
      })
    })
  })

  return allLines
}

export const buildSplitViewLines = (changes: DiffChange[]): {
  leftLines: SplitViewLine[]
  rightLines: SplitViewLine[]
  blockIds: Array<string | null>
  minimapLines: MinimapLine[]
} => {
  const leftLines: SplitViewLine[] = []
  const rightLines: SplitViewLine[] = []
  const blockIds: Array<string | null> = []
  const minimapLines: MinimapLine[] = []
  let currentBlockId = 0

  changes.forEach(change => {
    const lines = change.value.split("\n").filter((line, i, arr) => {
      return i < arr.length - 1 || line !== ""
    })

    const isChangeBlock = change.added || change.removed
    const blockId = isChangeBlock ? `change-block-${currentBlockId++}` : null

    lines.forEach((line, lineIndex) => {
      if (change.removed) {
        leftLines.push({ content: line, type: "removed" })
        blockIds.push(lineIndex === 0 ? blockId : null)
        minimapLines.push({
          type: "removed",
          blockId: lineIndex === 0 ? blockId : null,
        })
      } else if (change.added) {
        rightLines.push({ content: line, type: "added" })
        blockIds.push(lineIndex === 0 ? blockId : null)
        minimapLines.push({
          type: "added",
          blockId: lineIndex === 0 ? blockId : null,
        })
      } else {
        leftLines.push({ content: line, type: "unchanged" })
        rightLines.push({ content: line, type: "unchanged" })
        blockIds.push(null)
        minimapLines.push({ type: "unchanged", blockId: null })
      }
    })
  })

  const maxLength = Math.max(leftLines.length, rightLines.length)
  while (leftLines.length < maxLength) {
    leftLines.push({ content: "", type: "unchanged" })
    blockIds.push(null)
  }
  while (rightLines.length < maxLength) {
    rightLines.push({ content: "", type: "unchanged" })
  }

  return { leftLines, rightLines, blockIds, minimapLines }
}
