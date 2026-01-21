"use client"

import {
  SearchInput,
  cn,
} from "@ek-studio/ui"

import { useCallback, useEffect, useMemo, useState, memo, startTransition } from "react"

import { ButtonGroup } from "@/components/common/button-group"
import { JsonValueRenderer } from "@/components/custom/json-value-renderer"
import {
  NodeState,
  createCollapsedState,
  filterJsonByQuery,
  parseJsonOrYaml,
} from "@/features/ui/json-viewer"
import { useOutputAnimation } from "@/hooks/use-output-animation"
import type { JsonFormatterPreset } from "@/features/data-transform/json"

interface CollapsibleJsonViewerProps {
  value: string
  className?: string
  placeholder?: string
  preset?:  JsonFormatterPreset | undefined
  viewMode?: "tree" | "pretty" | "minify"
  onViewModeChange?: (mode: "tree" | "pretty" | "minify") => void
}

export const CollapsibleJsonViewer = memo(function CollapsibleJsonViewer({
  value,
  className,
  placeholder = "Output will appear here...",
  preset = {},
  viewMode: externalViewMode,
  onViewModeChange,
}: CollapsibleJsonViewerProps) {
  const [collapsedNodes, setCollapsedNodes] = useState<NodeState>({})
  const [globalCollapsed, setGlobalCollapsed] = useState(false)
  const { mode , expandAll} = preset
  const [internalViewMode, setInternalViewMode] = useState<"tree" | "pretty" | "minify">(
    mode === "minify" ? "minify" : "tree"
  )
  const [searchQuery, setSearchQuery] = useState("")
  
  // Use external viewMode if provided, otherwise use internal state
  const viewMode = externalViewMode ?? internalViewMode

  // Parse the input value (supports JSON and YAML-like structures)
  const parsedData = useMemo(() => parseJsonOrYaml(value), [value])

  // Set initial collapsed state based on expandAll preset
  useEffect(() => {
    if (parsedData && preset?.mode === "viewer") {
      if (expandAll) {
        setCollapsedNodes({})
        setGlobalCollapsed(false)
      } else {
        setCollapsedNodes(createCollapsedState(parsedData))
        setGlobalCollapsed(true)
      }
    }
  }, [parsedData, mode, expandAll])

  // Add glowing animation on value change
  const isOutputAnimating = useOutputAnimation(value)

  // Filter JSON data based on search query
  const filteredData = useMemo(
    () => filterJsonByQuery(parsedData, searchQuery),
    [parsedData, searchQuery]
  )

  const toggleNode = useCallback((path: string) => {
    setCollapsedNodes(prev => ({
      ...prev,
      [path]: !prev[path],
    }))
  }, [])

  const collapseAll = useCallback(() => {
    if (!parsedData) return
    startTransition(() => {
      setCollapsedNodes(createCollapsedState(parsedData))
      setGlobalCollapsed(true)
    })
  }, [parsedData])

  const expandAllNodes = useCallback(() => {
    startTransition(() => {
      setCollapsedNodes({})
      setGlobalCollapsed(false)
    })
  }, [])

  if (!value || value.trim() === "") {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[250px] sm:min-h-[300px] flex items-center justify-center bg-muted/30 border border-border/50 rounded-lg",
          className
        )}
      >
        <p className="text-muted-foreground text-sm">{placeholder}</p>
      </div>
    )
  }

  if (!parsedData) {
    // Fallback to plain text if parsing fails
    return (
      <div
        className={cn(
          "w-full h-full min-h-[250px] sm:min-h-[300px] p-4 bg-muted/30 border border-border/50 rounded-lg overflow-auto font-mono text-xs sm:text-sm",
          className
        )}
      >
        <pre className="whitespace-pre-wrap break-words">{value}</pre>
      </div>
    )
  }

  const displayData = filteredData || parsedData

  return (
    <div
      className={cn(
        "w-full h-full min-h-[250px] sm:min-h-[300px] max-h-[800px] flex flex-col relative",
        className
      )}
    >
      {/* JSON Tree View with Controls */}
      <div
        className={cn(
          "flex-1 overflow-auto bg-white dark:bg-muted/30 border border-border/50 rounded-lg flex flex-col relative transition-all duration-500",
          isOutputAnimating && "output-glow-animation"
        )}
      >
        {/* Toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50 bg-white/80 dark:bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          {/* Search Input */}
          <SearchInput
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="h-7 text-xs max-w-xs"
          />

          {/* Collapse/Expand Controls - Only show in tree view */}
          {viewMode === "tree" && (
            <div className="flex flex-col gap-1">
              <ButtonGroup
                options={[
                  { value: "expand", label: "Expand All" },
                  { value: "collapse", label: "Collapse All" },
                ]}
                value={globalCollapsed ? "collapse" : "expand"}
                onChange={value => {
                  if (value === "expand") {
                    expandAllNodes()
                  } else {
                    collapseAll()
                  }
                }}
                size="sm"
              />
            </div>
          )}
        </div>

        {/* JSON Content */}
        <div className="flex-1 overflow-auto p-4 font-mono text-xs sm:text-sm">
          {searchQuery && !filteredData ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              No matches found for "{searchQuery}"
            </div>
          ) : viewMode === "minify" ? (
            <pre className="whitespace-pre-wrap break-words">
              {JSON.stringify(displayData)}
            </pre>
          ) : viewMode === "pretty" ? (
            <pre className="whitespace-pre-wrap break-words">
              {JSON.stringify(displayData, null, 2)}
            </pre>
          ) : (
            <JsonValueRenderer
              value={displayData}
              path="root"
              depth={0}
              collapsedNodes={collapsedNodes}
              onToggleNode={toggleNode}
            />
          )}
        </div>
      </div>
    </div>
  )
})
