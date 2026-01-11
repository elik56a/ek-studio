interface DiffChange {
  value: string
  added?: boolean
  removed?: boolean
}

export interface ChangeBlock {
  id: string
  type: "added" | "removed" | "modified"
  lineStart: number
  lineCount: number
  preview: string
}

export interface MinimapLine {
  type: "added" | "removed" | "unchanged"
  blockId: string | null
}

export interface SplitViewLine {
  content: string
  type: "added" | "removed" | "unchanged"
}

/**
 * Build a list of change blocks for navigation
 */
export function buildChangeBlocks(changes: DiffChange[]): ChangeBlock[] {
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

/**
 * Build minimap lines for unified view
 */
export function buildUnifiedMinimapLines(changes: DiffChange[]): MinimapLine[] {
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

/**
 * Build lines for split view
 */
export function buildSplitViewLines(changes: DiffChange[]): {
  leftLines: SplitViewLine[]
  rightLines: SplitViewLine[]
  blockIds: Array<string | null>
  minimapLines: MinimapLine[]
} {
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

  // Balance the arrays
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

/**
 * Scroll to a specific change block
 */
export function scrollToChange(blockId: string): void {
  const element = document.getElementById(blockId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })

    // If in split view, sync both scrollers
    const leftContent = document.querySelector(
      "#diff-content-split > div:first-child"
    )
    const rightContent = document.querySelector(
      "#diff-content-split > div:last-child"
    )
    if (leftContent && rightContent && element.closest("#diff-content-split")) {
      // Sync the other panel
      const scrollTop = leftContent.scrollTop
      rightContent.scrollTop = scrollTop
    }

    // Highlight briefly
    element.classList.add("ring-2", "ring-primary")
    setTimeout(() => {
      element.classList.remove("ring-2", "ring-primary")
    }, 1500)
  }
}

/**
 * Scroll to a position in unified view
 */
export function scrollToPositionUnified(
  index: number,
  totalLines: number
): void {
  const content = document.getElementById("diff-content")
  if (content) {
    const scrollPercentage = index / totalLines
    content.scrollTop = scrollPercentage * content.scrollHeight
  }
}

/**
 * Scroll to a position in split view (both panels)
 */
export function scrollToPositionSplit(index: number, totalLines: number): void {
  const leftContent = document.querySelector(
    "#diff-content-split > div:first-child"
  )
  const rightContent = document.querySelector(
    "#diff-content-split > div:last-child"
  )
  if (leftContent && rightContent) {
    const scrollPercentage = index / totalLines
    const scrollTop = scrollPercentage * leftContent.scrollHeight
    leftContent.scrollTop = scrollTop
    rightContent.scrollTop = scrollTop
  }
}

/**
 * Sync scroll between split view panels
 */
export function syncSplitScroll(
  sourceScrollTop: number,
  targetSelector: string
): void {
  const targetContent = document.querySelector(targetSelector)
  if (targetContent) {
    targetContent.scrollTop = sourceScrollTop
  }
}
