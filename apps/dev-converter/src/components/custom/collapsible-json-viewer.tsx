"use client"

import {
  Button,
  cn,
  SearchInput,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ek-studio/ui"
import {
  ChevronsDown,
  ChevronsRight,
  FileJson,
  List,
} from "lucide-react"

import { useCallback, useMemo, useState } from "react"

import { JsonValueRenderer } from "@/components/custom/json-value-renderer"
import {
  NodeState,
  createCollapsedState,
  filterJsonByQuery,
  parseJsonOrYaml,
} from "@/features/ui/json-viewer"
import { useOutputAnimation } from "@/hooks/use-output-animation"

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
  const [searchQuery, setSearchQuery] = useState("")

  // Parse the input value (supports JSON and YAML-like structures)
  const parsedData = useMemo(() => parseJsonOrYaml(value), [value])

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

  const displayData = filteredData || parsedData

  return (
    <div
      className={cn(
        "w-full h-full min-h-[250px] sm:min-h-[300px] max-h-[800px] flex flex-col relative",
        className
      )}
    >
      <TooltipProvider>
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

            {/* View Mode Toggle */}
            <div className="inline-flex rounded-lg border border-border/50 bg-background/50">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={viewMode === "tree" ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setViewMode("tree")}
                    className={cn(
                      "h-7 px-2 rounded-none rounded-l-lg",
                      viewMode === "tree" && "shadow-sm",
                      viewMode !== "tree" && "hover:bg-primary/10"
                    )}
                  >
                    <List className="h-3.5 w-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Tree view</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={viewMode === "pretty" ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setViewMode("pretty")}
                    className={cn(
                      "h-7 px-2 rounded-none rounded-r-lg",
                      viewMode === "pretty" && "shadow-sm",
                      viewMode !== "pretty" && "hover:bg-primary/10"
                    )}
                  >
                    <FileJson className="h-3.5 w-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Pretty JSON</TooltipContent>
              </Tooltip>
            </div>

            {/* Collapse/Expand Controls */}
            {viewMode === "tree" && (
              <div className="inline-flex rounded-lg border border-border/50 bg-background/50">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={!globalCollapsed ? "default" : "secondary"}
                      size="sm"
                      onClick={expandAll}
                      className={cn(
                        "h-7 px-2 rounded-none rounded-l-lg",
                        !globalCollapsed && "shadow-sm",
                        globalCollapsed && "hover:bg-primary/10"
                      )}
                    >
                      <ChevronsDown className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Expand all</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={globalCollapsed ? "default" : "secondary"}
                      size="sm"
                      onClick={collapseAll}
                      className={cn(
                        "h-7 px-2 rounded-none rounded-r-lg",
                        globalCollapsed && "shadow-sm",
                        !globalCollapsed && "hover:bg-primary/10"
                      )}
                    >
                      <ChevronsRight className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Collapse all</TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>

          {/* JSON Content */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs sm:text-sm">
            {searchQuery && !filteredData ? (
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                No matches found for "{searchQuery}"
              </div>
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
      </TooltipProvider>
    </div>
  )
}
