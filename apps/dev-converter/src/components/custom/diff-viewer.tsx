"use client"

import { Card, CardContent, CardHeader, Checkbox, Label } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import {
  ArrowDown,
  Check,
  ChevronDown,
  ChevronRight,
  Columns2,
  Minus,
  Plus,
  Rows3,
} from "lucide-react"

import { useMemo, useState } from "react"

import { ButtonGroup } from "@/components/common/button-group"
import {
  buildChangeBlocks,
  buildSplitViewLines,
  buildUnifiedMinimapLines,
  scrollToChange,
  scrollToPositionSplit,
  scrollToPositionUnified,
  syncSplitScroll,
} from "@/lib/utils/diff-utils"

interface DiffChange {
  value: string
  added?: boolean
  removed?: boolean
}

interface DiffViewerProps {
  changes: DiffChange[]
  className?: string
  addedLines?: number
  removedLines?: number
}

export function DiffViewer({
  changes,
  className,
  addedLines,
  removedLines,
}: DiffViewerProps) {
  const [viewMode, setViewMode] = useState<"split" | "unified">("unified")
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false)
  const [showChangesList, setShowChangesList] = useState(true)

  // Filter changes based on whitespace setting
  const filteredChanges = useMemo(
    () =>
      ignoreWhitespace
        ? changes.filter(change => {
            const trimmed = change.value.trim()
            return trimmed.length > 0
          })
        : changes,
    [changes, ignoreWhitespace]
  )

  // Build change blocks for navigation
  const changeBlocks = useMemo(
    () => buildChangeBlocks(filteredChanges),
    [filteredChanges]
  )

  if (changes.length === 0) {
    return (
      <Card className="glass border-0 shadow-glow">
        <CardContent className="p-8 text-center text-muted-foreground">
          <p>No differences found. The texts are identical.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={cn("glass border-0 shadow-glow overflow-hidden", className)}
    >
      {/* Header with Title and Stats */}
      <CardHeader className="pb-3 px-4 sm:px-6 border-b border-border/50 bg-background/50">
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <ArrowDown className="h-6 w-6 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold">
                Comparison Results
              </h2>
            </div>
            {(addedLines !== undefined || removedLines !== undefined) && (
              <div className="flex items-center gap-2 sm:gap-3">
                {addedLines !== undefined && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                      +{addedLines}
                    </span>
                  </div>
                )}
                {removedLines !== undefined && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                      -{removedLines}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Changes Navigation Tree */}
          {changeBlocks.length > 0 && (
            <div className="border-t border-border/30 pt-3">
              <button
                onClick={() => setShowChangesList(!showChangesList)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {showChangesList ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
                <span>
                  {changeBlocks.length} change
                  {changeBlocks.length !== 1 ? "s" : ""} detected
                </span>
              </button>

              {showChangesList && (
                <div className="mt-3 space-y-1 max-h-[300px] overflow-y-auto">
                  {changeBlocks.map(block => (
                    <button
                      key={block.id}
                      onClick={() => scrollToChange(block.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all hover:bg-muted/50 flex items-start gap-2",
                        block.type === "added" &&
                          "border-l-2 border-green-500 bg-green-500/5 hover:bg-green-500/10",
                        block.type === "removed" &&
                          "border-l-2 border-red-500 bg-red-500/5 hover:bg-red-500/10"
                      )}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {block.type === "added" ? (
                          <Plus className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                        ) : (
                          <Minus className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-muted-foreground">
                            Line {block.lineStart + 1}
                          </span>
                          <span
                            className={cn(
                              "text-xs px-1.5 py-0.5 rounded",
                              block.type === "added" &&
                                "bg-green-500/20 text-green-700 dark:text-green-300",
                              block.type === "removed" &&
                                "bg-red-500/20 text-red-700 dark:text-red-300"
                            )}
                          >
                            {block.lineCount} line
                            {block.lineCount !== 1 ? "s" : ""}
                          </span>
                        </div>
                        <div className="text-foreground/70 truncate">
                          {block.preview}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </CardHeader>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 py-3 border-b border-border/50 bg-background/50">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            View:
          </span>
          <ButtonGroup
            options={[
              {
                value: "unified",
                label: "Unified",
                icon: <Rows3 className="h-3.5 w-3.5" />,
              },
              {
                value: "split",
                label: "Split",
                icon: <Columns2 className="h-3.5 w-3.5" />,
              },
            ]}
            value={viewMode}
            onChange={value => setViewMode(value as "split" | "unified")}
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="ignore-whitespace"
            checked={ignoreWhitespace}
            onCheckedChange={checked => setIgnoreWhitespace(checked === true)}
          />
          <Label
            htmlFor="ignore-whitespace"
            className="text-sm font-medium cursor-pointer"
          >
            Ignore whitespace
          </Label>
        </div>
      </div>

      <CardContent className="p-0">
        {viewMode === "split" ? (
          <SplitView changes={filteredChanges} />
        ) : (
          <UnifiedView changes={filteredChanges} />
        )}
      </CardContent>
    </Card>
  )
}

// Unified View Component
function UnifiedView({ changes }: { changes: DiffChange[] }) {
  const allLines = useMemo(() => buildUnifiedMinimapLines(changes), [changes])
  const showMinimap = allLines.length > 100

  let currentBlockId = 0

  return (
    <div className="relative flex">
      <div className="flex-1 max-h-[600px] overflow-y-auto" id="diff-content">
        {changes.map((change, index) => {
          const lines = change.value.split("\n").filter((line, i, arr) => {
            return i < arr.length - 1 || line !== ""
          })

          const isChangeBlock = change.added || change.removed
          const blockId = isChangeBlock
            ? `change-block-${currentBlockId++}`
            : null

          return lines.map((line, lineIndex) => {
            const isAdded = change.added
            const isRemoved = change.removed
            const isUnchanged = !isAdded && !isRemoved

            return (
              <div
                key={`${index}-${lineIndex}`}
                id={lineIndex === 0 && blockId ? blockId : undefined}
                className={cn(
                  "flex items-start gap-3 px-4 py-2 font-mono text-sm border-b border-border/30 last:border-b-0 transition-all duration-300",
                  isAdded && "bg-green-500/10 hover:bg-green-500/15",
                  isRemoved && "bg-red-500/10 hover:bg-red-500/15",
                  isUnchanged && "bg-background/50 hover:bg-background/70"
                )}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {isAdded && (
                    <Plus className="h-4 w-4 text-green-600 dark:text-green-400" />
                  )}
                  {isRemoved && (
                    <Minus className="h-4 w-4 text-red-600 dark:text-red-400" />
                  )}
                  {isUnchanged && (
                    <Check className="h-4 w-4 text-muted-foreground/50" />
                  )}
                </div>
                <div
                  className={cn(
                    "flex-1 whitespace-pre-wrap break-all",
                    isAdded && "text-green-700 dark:text-green-300",
                    isRemoved && "text-red-700 dark:text-red-300",
                    isUnchanged && "text-foreground/80"
                  )}
                >
                  {line || " "}
                </div>
              </div>
            )
          })
        })}
      </div>

      {showMinimap && (
        <Minimap
          lines={allLines}
          onLineClick={(index, blockId) => {
            if (blockId) {
              scrollToChange(blockId)
            } else {
              scrollToPositionUnified(index, allLines.length)
            }
          }}
        />
      )}
    </div>
  )
}

// Split View Component
function SplitView({ changes }: { changes: DiffChange[] }) {
  const { leftLines, rightLines, blockIds, minimapLines } = useMemo(
    () => buildSplitViewLines(changes),
    [changes]
  )
  const showMinimap = minimapLines.length > 100

  return (
    <div className="relative flex">
      <div
        className="flex-1 grid grid-cols-2 divide-x divide-border/30"
        id="diff-content-split"
      >
        {/* Left side - Original */}
        <div
          className="overflow-y-auto max-h-[600px]"
          onScroll={e => {
            syncSplitScroll(
              (e.target as HTMLDivElement).scrollTop,
              "#diff-content-split > div:last-child"
            )
          }}
        >
          {leftLines.map((line, index) => (
            <div
              key={`left-${index}`}
              id={blockIds[index] || undefined}
              className={cn(
                "flex items-start gap-3 px-4 py-2 font-mono text-sm border-b border-border/30 last:border-b-0 transition-all duration-300",
                line.type === "removed" && "bg-red-500/10 hover:bg-red-500/15",
                line.type === "unchanged" &&
                  "bg-background/50 hover:bg-background/70"
              )}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {line.type === "removed" && (
                  <Minus className="h-4 w-4 text-red-600 dark:text-red-400" />
                )}
                {line.type === "unchanged" && line.content && (
                  <Check className="h-4 w-4 text-muted-foreground/50" />
                )}
              </div>
              <div
                className={cn(
                  "flex-1 whitespace-pre-wrap break-all",
                  line.type === "removed" && "text-red-700 dark:text-red-300",
                  line.type === "unchanged" && "text-foreground/80"
                )}
              >
                {line.content || " "}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Modified */}
        <div
          className="overflow-y-auto max-h-[600px]"
          onScroll={e => {
            syncSplitScroll(
              (e.target as HTMLDivElement).scrollTop,
              "#diff-content-split > div:first-child"
            )
          }}
        >
          {rightLines.map((line, index) => (
            <div
              key={`right-${index}`}
              className={cn(
                "flex items-start gap-3 px-4 py-2 font-mono text-sm border-b border-border/30 last:border-b-0 transition-all duration-300",
                line.type === "added" &&
                  "bg-green-500/10 hover:bg-green-500/15",
                line.type === "unchanged" &&
                  "bg-background/50 hover:bg-background/70"
              )}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {line.type === "added" && (
                  <Plus className="h-4 w-4 text-green-600 dark:text-green-400" />
                )}
                {line.type === "unchanged" && line.content && (
                  <Check className="h-4 w-4 text-muted-foreground/50" />
                )}
              </div>
              <div
                className={cn(
                  "flex-1 whitespace-pre-wrap break-all",
                  line.type === "added" && "text-green-700 dark:text-green-300",
                  line.type === "unchanged" && "text-foreground/80"
                )}
              >
                {line.content || " "}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showMinimap && (
        <Minimap
          lines={minimapLines}
          onLineClick={(index, blockId) => {
            if (blockId) {
              scrollToChange(blockId)
            } else {
              scrollToPositionSplit(index, minimapLines.length)
            }
          }}
        />
      )}
    </div>
  )
}

// Minimap Component
function Minimap({
  lines,
  onLineClick,
}: {
  lines: Array<{
    type: "added" | "removed" | "unchanged"
    blockId: string | null
  }>
  onLineClick: (index: number, blockId: string | null) => void
}) {
  return (
    <div className="relative w-12 bg-background/30 border-l border-border/30 flex-shrink-0">
      <div className="sticky top-0 max-h-[600px] w-full overflow-hidden">
        <div className="relative" style={{ height: "600px" }}>
          {lines.map((line, index) => {
            const heightPerLine = Math.max(600 / lines.length, 2)
            const top = index * heightPerLine

            return (
              <button
                key={index}
                onClick={() => onLineClick(index, line.blockId)}
                className={cn(
                  "absolute w-full transition-all hover:opacity-90 cursor-pointer border-none p-0",
                  line.type === "added" &&
                    "bg-green-500/60 dark:bg-green-400/60",
                  line.type === "removed" && "bg-red-500/60 dark:bg-red-400/60",
                  line.type === "unchanged" && "bg-border/40"
                )}
                style={{
                  top: `${top}px`,
                  height: `${Math.max(heightPerLine, 2)}px`,
                }}
                title={
                  line.type === "added"
                    ? "Added line"
                    : line.type === "removed"
                      ? "Removed line"
                      : "Unchanged"
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
