"use client"

import { useState, useMemo, useCallback } from "react"
import { ChevronRight, ChevronsDown, ChevronsRight } from "lucide-react"
import { Button } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

interface CollapsibleJsonViewerProps {
  value: string
  className?: string
  placeholder?: string
}

type JsonValue = string | number | boolean | null | JsonObject | JsonArray
interface JsonObject {
  [key: string]: JsonValue
}
type JsonArray = JsonValue[]

interface NodeState {
  [path: string]: boolean // true = collapsed, false = expanded
}

export function CollapsibleJsonViewer({
  value,
  className,
  placeholder = "Output will appear here...",
}: CollapsibleJsonViewerProps) {
  const [collapsedNodes, setCollapsedNodes] = useState<NodeState>({})
  const [globalCollapsed, setGlobalCollapsed] = useState(false)

  // Parse the input value (supports JSON and YAML-like structures)
  const parsedData = useMemo(() => {
    if (!value || value.trim() === "") return null

    try {
      // Try parsing as JSON first
      return JSON.parse(value)
    } catch {
      // If JSON parsing fails, try to detect if it's YAML and convert
      try {
        // Basic YAML-like parsing (simplified)
        // For full YAML support, you'd need a proper YAML parser library
        const lines = value.split("\n")
        const result: any = {}
        let currentObj: any = result
        const stack: any[] = [result]
        let lastIndent = 0

        for (const line of lines) {
          if (line.trim() === "" || line.trim().startsWith("#")) continue

          const indent = line.search(/\S/)
          const trimmed = line.trim()

          if (trimmed.includes(":")) {
            const [key, ...valueParts] = trimmed.split(":")
            const valueStr = valueParts.join(":").trim()

            if (indent < lastIndent) {
              // Pop from stack
              const diff = Math.floor((lastIndent - indent) / 2)
              for (let i = 0; i < diff; i++) {
                stack.pop()
              }
              currentObj = stack[stack.length - 1]
            }

            if (valueStr === "" || valueStr === "{}") {
              // Object
              currentObj[key.trim()] = {}
              currentObj = currentObj[key.trim()]
              stack.push(currentObj)
            } else if (valueStr === "[]") {
              // Array
              currentObj[key.trim()] = []
            } else {
              // Value
              let parsedValue: any = valueStr
              if (valueStr === "true") parsedValue = true
              else if (valueStr === "false") parsedValue = false
              else if (valueStr === "null") parsedValue = null
              else if (!isNaN(Number(valueStr))) parsedValue = Number(valueStr)
              else if (valueStr.startsWith('"') && valueStr.endsWith('"')) {
                parsedValue = valueStr.slice(1, -1)
              }
              currentObj[key.trim()] = parsedValue
            }

            lastIndent = indent
          }
        }

        return Object.keys(result).length > 0 ? result : null
      } catch {
        return null
      }
    }
  }, [value])

  const toggleNode = useCallback((path: string) => {
    setCollapsedNodes(prev => ({
      ...prev,
      [path]: !prev[path],
    }))
  }, [])

  const collapseAll = useCallback(() => {
    if (!parsedData) return

    const allPaths: string[] = []
    const collectPaths = (obj: any, currentPath: string = "") => {
      if (obj && typeof obj === "object") {
        if (currentPath) allPaths.push(currentPath) // Only add non-empty paths
        if (Array.isArray(obj)) {
          obj.forEach((item, index) => {
            collectPaths(item, `${currentPath}[${index}]`)
          })
        } else {
          Object.keys(obj).forEach(key => {
            collectPaths(obj[key], currentPath ? `${currentPath}.${key}` : key)
          })
        }
      }
    }

    collectPaths(parsedData, "root")
    const newState: NodeState = {}
    allPaths.forEach(path => {
      newState[path] = true
    })
    setCollapsedNodes(newState)
    setGlobalCollapsed(true)
  }, [parsedData])

  const expandAll = useCallback(() => {
    setCollapsedNodes({})
    setGlobalCollapsed(false)
  }, [])

  const renderValue = useCallback(
    (val: JsonValue, path: string = "", depth: number = 0): React.ReactNode => {
      const isCollapsed = collapsedNodes[path] || false

      // Null
      if (val === null) {
        return <span className="text-purple-600 dark:text-purple-400">null</span>
      }

      // Boolean
      if (typeof val === "boolean") {
        return (
          <span className="text-orange-600 dark:text-orange-400">
            {val.toString()}
          </span>
        )
      }

      // Number
      if (typeof val === "number") {
        return <span className="text-blue-600 dark:text-blue-400">{val}</span>
      }

      // String
      if (typeof val === "string") {
        return (
          <span className="text-green-600 dark:text-green-400">
            &quot;{val}&quot;
          </span>
        )
      }

      // Array
      if (Array.isArray(val)) {
        if (val.length === 0) {
          return <span className="text-muted-foreground">[]</span>
        }

        const hasComplexItems = val.some(
          item => typeof item === "object" && item !== null
        )

        return (
          <div className="inline-block w-full">
            <button
              onClick={() => toggleNode(path)}
              className="inline-flex items-center gap-1 hover:bg-accent/50 rounded px-1 -ml-1 transition-colors"
            >
              <span className={`transition-transform duration-150 ${isCollapsed ? "" : "rotate-90"}`}>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
              </span>
              <span className="text-muted-foreground">
                [{val.length} {val.length === 1 ? "item" : "items"}]
              </span>
            </button>

            <div
              className={`ml-4 border-l-2 border-border/50 pl-3 mt-1 overflow-hidden transition-all duration-150 ${
                isCollapsed ? "max-h-0 opacity-0" : "max-h-[10000px] opacity-100"
              }`}
            >
              {val.map((item, index) => (
                <div key={index} className="py-0.5">
                  <span className="text-muted-foreground mr-2">{index}:</span>
                  {renderValue(item, `${path}[${index}]`, depth + 1)}
                </div>
              ))}
            </div>
          </div>
        )
      }

      // Object
      if (typeof val === "object") {
        const keys = Object.keys(val)
        if (keys.length === 0) {
          return <span className="text-muted-foreground">{"{}"}</span>
        }

        return (
          <div className="inline-block w-full">
            <button
              onClick={() => toggleNode(path)}
              className="inline-flex items-center gap-1 hover:bg-accent/50 rounded px-1 -ml-1 transition-colors"
            >
              <span className={`transition-transform duration-150 ${isCollapsed ? "" : "rotate-90"}`}>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
              </span>
              <span className="text-muted-foreground">
                {"{"}{keys.length} {keys.length === 1 ? "key" : "keys"}{"}"}
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
                  {renderValue(
                    (val as JsonObject)[key],
                    path ? `${path}.${key}` : key,
                    depth + 1
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }

      return <span>{String(val)}</span>
    },
    [collapsedNodes, toggleNode]
  )

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
    <div className={cn("w-full h-full min-h-[250px] sm:min-h-[300px] max-h-[600px] flex flex-col", className)}>
      {/* JSON Tree View with Controls */}
      <div className="flex-1 overflow-auto bg-muted/30 border border-border/50 rounded-lg flex flex-col">
        {/* Collapse/Expand All Controls - Inside the container */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-background/50 sticky top-0 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={expandAll}
            disabled={!globalCollapsed && Object.keys(collapsedNodes).length === 0}
            className="h-7 text-xs"
          >
            <ChevronsDown className="h-3 w-3 mr-1" />
            Expand All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={collapseAll}
            disabled={globalCollapsed}
            className="h-7 text-xs"
          >
            <ChevronsRight className="h-3 w-3 mr-1" />
            Collapse All
          </Button>
        </div>

        {/* JSON Content */}
        <div className="flex-1 overflow-auto p-4 font-mono text-xs sm:text-sm">
          {renderValue(parsedData, "root")}
        </div>
      </div>
    </div>
  )
}
