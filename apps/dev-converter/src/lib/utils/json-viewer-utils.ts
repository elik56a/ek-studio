export type JsonValue = string | number | boolean | null | JsonObject | JsonArray
export interface JsonObject {
  [key: string]: JsonValue
}
export type JsonArray = JsonValue[]

export interface NodeState {
  [path: string]: boolean // true = collapsed, false = expanded
}

/**
 * Parse input value supporting both JSON and basic YAML-like structures
 */
export function parseJsonOrYaml(value: string): any {
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
}

/**
 * Collect all paths in a JSON object for collapse/expand operations
 */
export function collectAllPaths(obj: any, currentPath: string = ""): string[] {
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

  collectPaths(obj, currentPath)
  return allPaths
}

/**
 * Create a NodeState object with all paths collapsed
 */
export function createCollapsedState(parsedData: any): NodeState {
  const allPaths = collectAllPaths(parsedData, "root")
  const newState: NodeState = {}
  allPaths.forEach(path => {
    newState[path] = true
  })
  return newState
}

/**
 * Get CSS classes for JSON value types
 */
export function getValueTypeClasses(value: JsonValue): string {
  if (value === null) {
    return "text-purple-600 dark:text-purple-400"
  }
  
  if (typeof value === "boolean") {
    return "text-orange-600 dark:text-orange-400"
  }
  
  if (typeof value === "number") {
    return "text-blue-600 dark:text-blue-400"
  }
  
  if (typeof value === "string") {
    return "text-green-600 dark:text-green-400"
  }
  
  return "text-muted-foreground"
}

/**
 * Format value for display
 */
export function formatValueForDisplay(value: JsonValue): string {
  if (value === null) return "null"
  if (typeof value === "boolean") return value.toString()
  if (typeof value === "number") return value.toString()
  if (typeof value === "string") return `"${value}"`
  return String(value)
}

/**
 * Check if an array has complex items (objects or arrays)
 */
export function hasComplexItems(arr: JsonArray): boolean {
  return arr.some(item => typeof item === "object" && item !== null)
}