import { ConversionResult } from "./json-utils"

interface ColorFormats {
  hex: string
  rgb: string
  hsl: string
  rgba: string
  hsla: string
}

/**
 * Convert color between HEX, RGB, HSL, RGBA, and HSLA formats
 * @param input - Color value in any supported format
 * @returns ConversionResult with all color formats or error
 */
export function convertColor(input: string): ConversionResult<string> {
  const trimmed = input.trim()
  if (!trimmed) {
    return {
      success: false,
      error: "Please enter a color value",
    }
  }

  try {
    const formats = parseColor(trimmed)
    
    // Format output with all color formats
    const output = `HEX:  ${formats.hex}
RGB:  ${formats.rgb}
HSL:  ${formats.hsl}
RGBA: ${formats.rgba}
HSLA: ${formats.hsla}`

    return {
      success: true,
      data: output,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Parse color input and return all formats
 */
function parseColor(input: string): ColorFormats {
  // HEX format
  const hexMatch = input.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
  if (hexMatch) {
    const hex = hexMatch[1]
    const fullHex = hex.length === 3 
      ? hex.split('').map(c => c + c).join('') 
      : hex
    
    const r = parseInt(fullHex.substring(0, 2), 16)
    const g = parseInt(fullHex.substring(2, 4), 16)
    const b = parseInt(fullHex.substring(4, 6), 16)
    
    const hsl = rgbToHsl(r, g, b)
    
    return {
      hex: `#${fullHex.toUpperCase()}`,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      rgba: `rgba(${r}, ${g}, ${b}, 1)`,
      hsla: `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)`,
    }
  }

  // RGB/RGBA format
  const rgbMatch = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1])
    const g = parseInt(rgbMatch[2])
    const b = parseInt(rgbMatch[3])
    const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1
    
    if (r > 255 || g > 255 || b > 255) {
      throw new Error("RGB values must be between 0 and 255")
    }
    
    const hex = rgbToHex(r, g, b)
    const hsl = rgbToHsl(r, g, b)
    
    return {
      hex: `#${hex}`,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      rgba: `rgba(${r}, ${g}, ${b}, ${a})`,
      hsla: `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${a})`,
    }
  }

  // HSL/HSLA format
  const hslMatch = input.match(/hsla?\((\d+),\s*(\d+)%?,\s*(\d+)%?(?:,\s*([\d.]+))?\)/)
  if (hslMatch) {
    const h = parseInt(hslMatch[1])
    const s = parseInt(hslMatch[2])
    const l = parseInt(hslMatch[3])
    const a = hslMatch[4] ? parseFloat(hslMatch[4]) : 1
    
    if (h > 360 || s > 100 || l > 100) {
      throw new Error("HSL values must be: H(0-360), S(0-100), L(0-100)")
    }
    
    const rgb = hslToRgb(h, s, l)
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b)
    
    return {
      hex: `#${hex}`,
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      hsl: `hsl(${h}, ${s}%, ${l}%)`,
      rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`,
      hsla: `hsla(${h}, ${s}%, ${l}%, ${a})`,
    }
  }

  throw new Error("Invalid color format. Use HEX (#FF5733), RGB (rgb(255, 87, 51)), or HSL (hsl(9, 100%, 60%))")
}

/**
 * Convert RGB to HEX
 */
function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
}

/**
 * Convert RGB to HSL
 */
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Convert HSL to RGB
 */
function hslToRgb(h: number, s: number, l: number) {
  h /= 360
  s /= 100
  l /= 100

  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}
