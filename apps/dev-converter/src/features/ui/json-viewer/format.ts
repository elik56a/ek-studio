import { JsonArray, JsonValue } from "./types"

export const getValueTypeClasses = (value: JsonValue): string => {
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

export const formatValueForDisplay = (value: JsonValue): string => {
  if (value === null) return "null"
  if (typeof value === "boolean") return value.toString()
  if (typeof value === "number") return value.toString()
  if (typeof value === "string") return `"${value}"`
  return String(value)
}

export const hasComplexItems = (arr: JsonArray): boolean => {
  return arr.some(item => typeof item === "object" && item !== null)
}
