export type ColorFormat = "hex" | "rgb" | "rgba" | "hsl" | "hsla"

export interface ColorConverterPreset {
  focus?: ColorFormat
  highlight?: ColorFormat
}
