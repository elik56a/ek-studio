import { ChevronRight } from "lucide-react"

import React from "react"

import {
  JsonArray,
  JsonObject,
  JsonValue,
  NodeState,
  formatValueForDisplay,
  getValueTypeClasses,
} from "@/features/ui/json-viewer"

interface JsonValueRendererProps {
  value: JsonValue
  path: string
  depth: number
  collapsedNodes: NodeState
  onToggleNode: (path: string) => void
}

export function JsonValueRenderer({
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

  // Array
  if (Array.isArray(value)) {
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

        <div
          className={`ml-4 border-l-2 border-border/50 pl-3 mt-1 overflow-hidden transition-all duration-150 ${
            isCollapsed ? "max-h-0 opacity-0" : "max-h-[10000px] opacity-100"
          }`}
        >
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

      <div
        className={`ml-4 border-l-2 border-border/50 pl-3 mt-1 overflow-hidden transition-all duration-150 ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-[10000px] opacity-100"
        }`}
      >
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
    </div>
  )
}
