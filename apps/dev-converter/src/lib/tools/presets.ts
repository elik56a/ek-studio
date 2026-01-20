import { Base64Preset, FileToBase64Preset } from "@/features/encoding/base64"
import { ColorConverterPreset } from "@/features/ui/color"



export interface PresetRegistry {
  "color-converter": ColorConverterPreset
  "base64-encode-decode": Base64Preset
  "file-to-base64": FileToBase64Preset
  // Future tools can be added here:
  // 'json-formatter': JsonFormatterPreset
  // 'image-converter': ImageConverterPreset
}

export type PresetFor<T extends keyof PresetRegistry> = PresetRegistry[T]

export function getPreset<T extends keyof PresetRegistry>(
  toolId: T,
  preset: PresetRegistry[keyof PresetRegistry] | undefined
): PresetRegistry[T] | undefined {
  return preset as PresetRegistry[T] | undefined
}
