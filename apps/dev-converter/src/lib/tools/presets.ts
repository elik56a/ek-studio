import { Base64Preset, FileToBase64Preset, HtmlEscapePreset, JsonEscapePreset, UrlEncodePreset } from "@/features/encoding"
import { ColorConverterPreset } from "@/features/ui/color"
import { JsonFormatterPreset } from "@/features/data-transform/json"
import { CsvToJsonPreset } from "@/features/data-transform/csv"


export interface PresetRegistry {
  "color-converter": ColorConverterPreset
  "base64-encode-decode": Base64Preset
  "file-to-base64": FileToBase64Preset
  "html-escape-unescape": HtmlEscapePreset
  "json-escape-unescape": JsonEscapePreset
  "url-encode-decode": UrlEncodePreset
  "json-formatter": JsonFormatterPreset
  "csv-to-json": CsvToJsonPreset
  // Future tools can be added here:
  // 'image-converter': ImageConverterPreset
}

export type PresetFor<T extends keyof PresetRegistry> = PresetRegistry[T]

export function getPreset<T extends keyof PresetRegistry>(
  toolId: T,
  preset: PresetRegistry[keyof PresetRegistry] | undefined
): PresetRegistry[T] | undefined {
  return preset as PresetRegistry[T] | undefined
}
