"use client"

import { cn } from "@ek-studio/ui"
import { ChevronsDown, ChevronsRight, FileJson, List } from "lucide-react"

import { useCallback, useMemo, useState } from "react"

import { ButtonGroup } from "@/components/common/button-group"
import { JsonValueRenderer } from "@/components/custom/json-value-renderer"
import { useOutputAnimation } from "@/hooks/use-output-animation"
import {
  NodeState,
  createCollapsedState,
  parseJsonOrYaml,
} from "@/features/ui/json-viewer"

interface CollapsibleJsonViewerProps {
  value: string
  className?: string
  placeholder?: string
}

export function CollapsibleJsonViewer({
  value,
  className,
  placeholder = "Output will appear here...",
}: CollapsibleJsonViewerProps) {
  const [collapsedNodes, setCollapsedNodes] = useState<NodeState>({})
  const [globalCollapsed, setGlobalCollapsed] = useState(false)
  const [viewMode, setViewMode] = useState<"tree" | "pretty">("tree")

  // Parse the input value (supports JSON and YAML-like structures)
  const parsedData = useMemo(() => parseJsonOrYaml(value), [value])

  // Add glowing animation on value change
  const isOutputAnimating = useOutputAnimation(value)

  const toggleNode = useCallback((path: string) => {
    setCollapsedNodes(prev => ({
      ...prev,
      [path]: !prev[path],
    }))
  }, [])

  const collapseAll = useCallback(() => {
    if (!parsedData) return
    setCollapsedNodes(createCollapsedState(parsedData))
    setGlobalCollapsed(true)
  }, [parsedData])

  const expandAll = useCallback(() => {
    setCollapsedNodes({})
    setGlobalCollapsed(false)
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
        {/* Controls - Inside the container */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-border/50 bg-white/80 dark:bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          {/* View Mode Toggle */}
          <ButtonGroup
            options={[
              {
                value: "tree",
                label: "Tree",
                icon: <List className="h-3 w-3" />,
              },
              {
                value: "pretty",
                label: "Pretty",
                icon: <FileJson className="h-3 w-3" />,
              },
            ]}
            value={viewMode}
            onChange={mode => setViewMode(mode as "tree" | "pretty")}
          />

          {/* Collapse/Expand Controls */}
          {viewMode === "tree" && (
            <ButtonGroup
              options={[
                {
                  value: "expand",
                  label: "Expand All",
                  icon: <ChevronsDown className="h-3 w-3" />,
                },
                {
                  value: "collapse",
                  label: "Collapse All",
                  icon: <ChevronsRight className="h-3 w-3" />,
                },
              ]}
              value={globalCollapsed ? "collapse" : "expand"}
              onChange={action => {
                if (action === "expand") expandAll()
                else collapseAll()
              }}
            />
          )}
        </div>

        {/* JSON Content */}
        <div className="flex-1 overflow-auto p-4 font-mono text-xs sm:text-sm">
          {viewMode === "pretty" ? (
            <pre className="whitespace-pre-wrap break-words">
              {JSON.stringify(parsedData, null, 2)}
            </pre>
          ) : (
            <JsonValueRenderer
              value={parsedData}
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
}
