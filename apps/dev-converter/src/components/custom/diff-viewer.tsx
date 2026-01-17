"use client"

import {
  ButtonWithTooltip,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Label,
  SearchInput,
  SidePanel,
} from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"
import {
  ArrowDown,
  Check,
  ChevronDown,
  ChevronRight,
  Columns2,
  ListTree,
  Minus,
  Plus,
  RotateCcw,
  Rows3,
  Search,
  ZoomIn,
  ZoomOut,
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
} from "@/features/ui/diff"

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
  const [showChangesList, setShowChangesList] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [fontSize, setFontSize] = useState(14)

  const filteredChanges = useMemo(() => {
    let filtered = ignoreWhitespace
      ? changes.filter(change => {
          const trimmed = change.value.trim()
          return trimmed.length > 0
        })
      : changes

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(change =>
        change.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [changes, ignoreWhitespace, searchQuery])

  const changeBlocks = useMemo(
    () => buildChangeBlocks(filteredChanges),
    [filteredChanges]
  )

  const hasChanges = useMemo(
    () => changes.some(change => change.added || change.removed),
    [changes]
  )

  // Check if search has results
  const hasSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return true
    return filteredChanges.length > 0
  }, [searchQuery, filteredChanges])

  if (!hasChanges) {
    return <EmptyState message="No differences found. The texts are identical." />
  }

  return (
    <>
      {/* Side Panel for Changes List - Outside Card for full-page overlay */}
      <SidePanel
        open={showChangesList}
        onOpenChange={setShowChangesList}
        title="Changes Overview"
        width="350px"
        showBackdrop={false}
      >
        <div className="p-4">
          {changeBlocks.length > 0 ? (
            <div className="space-y-1">
              {changeBlocks.map(block => (
                <button
                  key={block.id}
                  onClick={() => {
                    scrollToChange(block.id)
                    setShowChangesList(false)
                  }}
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
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              No changes detected
            </p>
          )}
        </div>
      </SidePanel>

      <Card
        className={cn("glass border-0 shadow-glow overflow-hidden", className)}
      >
      {/* Header with Title and Stats */}
      <CardHeader className="pb-4 px-4 sm:px-6 border-b border-border/50 bg-background/50">
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
      </CardHeader>

      {/* Toolbar */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-2.5 border-b border-border/50 bg-background/95 backdrop-blur-sm shadow-md flex-wrap">
        {/* Left side - Search (fills available space) */}
        <div className="flex-1 min-w-[200px]">
          <SearchInput
            placeholder="Search in diff..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </div>

        {/* Separator */}
        <div className="h-6 w-px bg-border" />

        {/* Right side - Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Changes List Button */}
          {changeBlocks.length > 0 && (
            <>
              <ButtonWithTooltip
                variant={showChangesList ? "default" : "outline"}
                size="sm"
                onClick={() => setShowChangesList(!showChangesList)}
                tooltip={showChangesList ? "Hide changes list" : "Show changes list"}
                className="gap-2"
              >
                <ListTree className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {changeBlocks.length} change
                  {changeBlocks.length !== 1 ? "s" : ""}
                </span>
                <span className="sm:hidden">{changeBlocks.length}</span>
              </ButtonWithTooltip>

              {/* Separator */}
              <div className="h-6 w-px bg-border" />
            </>
          )}

          {/* Zoom Controls */}
          <div className="flex items-center gap-1">
            <ButtonWithTooltip
              variant="outline"
              size="icon-sm"
              onClick={() => setFontSize(prev => Math.max(prev - 2, 10))}
              tooltip="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </ButtonWithTooltip>
            <ButtonWithTooltip
              variant="outline"
              size="icon-sm"
              onClick={() => setFontSize(14)}
              tooltip="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </ButtonWithTooltip>
            <ButtonWithTooltip
              variant="outline"
              size="icon-sm"
              onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
              tooltip="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </ButtonWithTooltip>
          </div>

          {/* Separator */}
          <div className="h-6 w-px bg-border" />

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
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

          {/* Separator */}
          <div className="h-6 w-px bg-border" />

          {/* Whitespace Toggle */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="ignore-whitespace"
              checked={ignoreWhitespace}
              onCheckedChange={checked => setIgnoreWhitespace(checked === true)}
            />
            <Label
              htmlFor="ignore-whitespace"
              className="text-sm font-medium cursor-pointer whitespace-nowrap"
            >
              Ignore whitespace
            </Label>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        {!hasSearchResults ? (
          <div className="p-8">
            <EmptyState message="No results found for your search query." />
          </div>
        ) : viewMode === "split" ? (
          <SplitView changes={filteredChanges} fontSize={fontSize} />
        ) : (
          <UnifiedView changes={filteredChanges} fontSize={fontSize} />
        )}
      </CardContent>
    </Card>
    </>
  )
}

// Unified View Component
function UnifiedView({
  changes,
  fontSize,
}: {
  changes: DiffChange[]
  fontSize: number
}) {
  const allLines = useMemo(() => buildUnifiedMinimapLines(changes), [changes])
  const showMinimap = allLines.length > 100

  let currentBlockId = 0
  let lineNumber = 0

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
            const currentLineNumber = ++lineNumber

            return (
              <div
                key={`${index}-${lineIndex}`}
                id={lineIndex === 0 && blockId ? blockId : undefined}
                className={cn(
                  "flex items-start gap-3 px-4 py-2 font-mono border-b border-border/30 last:border-b-0 transition-all duration-300",
                  isAdded && "bg-green-500/10 hover:bg-green-500/15",
                  isRemoved && "bg-red-500/10 hover:bg-red-500/15",
                  isUnchanged && "bg-background/50 hover:bg-background/70"
                )}
              >
                <div className="flex-shrink-0 w-12 text-right text-xs text-muted-foreground/60 select-none">
                  {currentLineNumber}
                </div>
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
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {line || " "}
                </div>
              </div>
            )
          })
        })}
      </div>

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
    </div>
  )
}

// Split View Component
function SplitView({
  changes,
  fontSize,
}: {
  changes: DiffChange[]
  fontSize: number
}) {
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
                "flex items-start gap-3 px-4 py-2 font-mono border-b border-border/30 last:border-b-0 transition-all duration-300",
                line.type === "removed" && "bg-red-500/10 hover:bg-red-500/15",
                line.type === "unchanged" &&
                  "bg-background/50 hover:bg-background/70"
              )}
            >
              <div className="flex-shrink-0 w-12 text-right text-xs text-muted-foreground/60 select-none">
                {index + 1}
              </div>
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
                style={{ fontSize: `${fontSize}px` }}
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
                "flex items-start gap-3 px-4 py-2 font-mono border-b border-border/30 last:border-b-0 transition-all duration-300",
                line.type === "added" &&
                  "bg-green-500/10 hover:bg-green-500/15",
                line.type === "unchanged" &&
                  "bg-background/50 hover:bg-background/70"
              )}
            >
              <div className="flex-shrink-0 w-12 text-right text-xs text-muted-foreground/60 select-none">
                {index + 1}
              </div>
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
                style={{ fontSize: `${fontSize}px` }}
              >
                {line.content || " "}
              </div>
            </div>
          ))}
        </div>
      </div>

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

// Empty State Component
function EmptyState({
  message,
  icon: Icon = Search,
}: {
  message: string
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <Card className="glass border-0 shadow-glow">
      <CardContent className="p-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 rounded-full bg-muted/50">
            <Icon className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  )
}
