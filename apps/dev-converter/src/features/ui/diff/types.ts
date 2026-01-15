export interface DiffChange {
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
