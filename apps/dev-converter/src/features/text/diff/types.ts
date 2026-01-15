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
