export type JsonFormatterMode = "format" | "validate" | "minify" | "viewer"

export interface JsonFormatterPreset {
  mode?: JsonFormatterMode
  expandAll?: boolean
}