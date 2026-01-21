import { ChevronRight } from "lucide-react"

import React, { memo } from "react"

import {
  JsonArray,
  JsonObject,
  JsonValue,
  NodeState,
  formatValueForDisplay,
  getValueTypeClasses,
} from "@/features/ui/json-viewer"
import { VirtualizedJsonArray } from "./virtualized-json-array"

interface JsonValueRendererProps {
  value: JsonValue
  path: string
  depth: number
  collapsedNodes: NodeState
  onToggleNode: (path: string) => void
}

// Threshold for when to use virtualization
const VIRTUALIZATION_THRESHOLD = 100

export const JsonValueRenderer = memo(function JsonValueRenderer({
  value,
  path,
  depth,
  collapsedNodes,
  onToggleNode,
}: JsonValueRendererProps): React.ReactNode {
  const isCollapsed = collapsedNodes[path] || false

  // Primitive values (null, boolean, number, string)
  if (typeof value !== "object" || value === null) {
    return (
      <span className={getValueTypeClasses(value)}>
        {formatValueForDisplay(value)}
      </span>
    )
  }

  // Array - use virtualization for large arrays
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className="text-muted-foreground">[]</span>
    }

    // Use virtualization for large arrays
    if (value.length >= VIRTUALIZATION_THRESHOLD) {
      return (
        <VirtualizedJsonArray
          value={value}
          path={path}
          depth={depth}
          collapsedNodes={collapsedNodes}
          onToggleNode={onToggleNode}
          isCollapsed={isCollapsed}
        />
      )
    }

    // Regular rendering for small arrays
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
          <div className="ml-4 border-l-2 border-border/50 pl-3 mt-1">
            {value.map((item, index) => (
              <div key={index} className="py-0.5">
                <span className="text-muted-foreground mr-2">{index}:</span>
                <JsonValueRenderer
                  value={item}
                  path={`${path}[${index}]`}
                  depth={depth + 1}
                  collapsedNodes={collapsedNodes}
                  onToggleNode={onToggleNode}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Object
  const keys = Object.keys(value)
  if (keys.length === 0) {
    return <span className="text-muted-foreground">{"{}"}</span>
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
          {"{"}
          {keys.length} {keys.length === 1 ? "key" : "keys"}
          {"}"}
        </span>
      </button>

      {!isCollapsed && (
        <div className="ml-4 border-l-2 border-border/50 pl-3 mt-1">
          {keys.map(key => (
            <div key={key} className="py-0.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                {key}
              </span>
              <span className="text-muted-foreground">: </span>
              <JsonValueRenderer
                value={(value as JsonObject)[key]}
                path={path ? `${path}.${key}` : key}
                depth={depth + 1}
                collapsedNodes={collapsedNodes}
                onToggleNode={onToggleNode}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
})
