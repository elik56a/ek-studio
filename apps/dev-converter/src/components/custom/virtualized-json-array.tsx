"use client"

import { useVirtualizer } from "@tanstack/react-virtual"
import { ChevronRight } from "lucide-react"
import React, { memo, useRef } from "react"
import { JsonValue, NodeState } from "@/features/ui/json-viewer"
import { JsonValueRenderer } from "./json-value-renderer"

interface VirtualizedJsonArrayProps {
  value: unknown[]
  path: string
  depth: number
  collapsedNodes: NodeState
  onToggleNode: (path: string) => void
  isCollapsed: boolean
}

export const VirtualizedJsonArray = memo(function VirtualizedJsonArray({
  value,
  path,
  depth,
  collapsedNodes,
  onToggleNode,
  isCollapsed,
}: VirtualizedJsonArrayProps) {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: value.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 28, // Estimated height per item
    overscan: 10, // Render 10 extra items above and below viewport
  })

  if (value.length === 0) {
    return <span className="text-muted-foreground">[]</span>
  }

  return (
    <div className="inline-block w-full">
      <button
        onClick={() => onToggleNode(path)}
        className="inline-flex items-center gap-1 hover:bg-accent/50 rounded px-1 -ml-1 transition-colors"
      >
        <span
          className={`transition-transform duration-150 ${isCollapsed ? "" : "rotate-90"}`}
        >
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
        </span>
        <span className="text-muted-foreground">
          [{value.length} {value.length === 1 ? "item" : "items"}]
        </span>
      </button>

      {!isCollapsed && (
        <div
          ref={parentRef}
          className="ml-4 border-l-2 border-border/50 pl-3 mt-1 max-h-[600px] overflow-auto"
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const item = value[virtualItem.index]
              return (
                <div
                  key={virtualItem.key}
                  data-index={virtualItem.index}
                  ref={virtualizer.measureElement}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                  className="py-0.5"
                >
                  <span className="text-muted-foreground mr-2">{virtualItem.index}:</span>
                  <JsonValueRenderer
                    value={item as JsonValue}
                    path={`${path}[${virtualItem.index}]`}
                    depth={depth + 1}
                    collapsedNodes={collapsedNodes}
                    onToggleNode={onToggleNode}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
})
