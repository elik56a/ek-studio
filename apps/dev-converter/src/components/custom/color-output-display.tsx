"use client"

import { useRef } from "react"
import { Palette, Hash, Droplet, Pipette } from "lucide-react"

import { InfoRow } from "@/components/common/info-row"
import { ColorConverterPreset } from "@/features/ui"

interface ColorOutputDisplayProps {
  output: string
  onColorChange?: (hexColor: string) => void
  placeholder?: string
  preset?: ColorConverterPreset
}

export function ColorOutputDisplay({
  output,
  onColorChange,
  placeholder = "Color output will appear here...",
  preset,
}: ColorOutputDisplayProps) {
  const colorInputRef = useRef<HTMLInputElement>(null)

  if (!output) {
    return (
      <div className="w-full h-full min-h-[100px] flex items-center justify-center bg-muted/30 border border-border/50 rounded-lg">
        <p className="text-sm text-muted-foreground">{placeholder}</p>
      </div>
    )
  }

  // Parse color values from output
  const hexMatch = output.match(/HEX:\s+(#[A-Fa-f0-9]{6})/)
  const rgbMatch = output.match(/RGB:\s+(.+)/)
  const hslMatch = output.match(/HSL:\s+(.+)/)
  const rgbaMatch = output.match(/RGBA:\s+(.+)/)
  const hslaMatch = output.match(/HSLA:\s+(.+)/)

  const colorPreview = hexMatch ? hexMatch[1] : ""

  const handleColorPickerClick = () => {
    colorInputRef.current?.click()
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    if (onColorChange) {
      onColorChange(newColor)
    }
  }

  const items = [
    hexMatch && {
      icon: Hash,
      title: "HEX",
      value: hexMatch[1],
    },
    rgbMatch && {
      icon: Droplet,
      title: "RGB",
      value: rgbMatch[1],
    },
    hslMatch && {
      icon: Palette,
      title: "HSL",
      value: hslMatch[1],
    },
    rgbaMatch && {
      icon: Pipette,
      title: "RGBA",
      value: rgbaMatch[1],
    },
    hslaMatch && {
      icon: Palette,
      title: "HSLA" ,
      value: hslaMatch[1],
    },
  ].filter((item): item is NonNullable<typeof item> => Boolean(item))

  // Reorder items based on preset.highlight
  const orderedItems = preset?.highlight
    ? [
        ...items.filter(item => item.title.toLowerCase() === preset.highlight?.toLowerCase()),
        ...items.filter(item => item.title.toLowerCase() !== preset.highlight?.toLowerCase()),
      ]
    : items

  return (
    <div className="space-y-3 h-full relative">
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 blur-lg -z-10 animate-pulse" />

      {/* Color Preview with Picker */}
      <div className="relative">
        <div
          className="h-20 w-full rounded-md border-2 border-border shadow-sm cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
          style={{ backgroundColor: colorPreview }}
          onClick={handleColorPickerClick}
          aria-label={`Color preview: ${colorPreview}. Click to open color picker`}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              handleColorPickerClick()
            }
          }}
        />

        {/* Hidden color input */}
        <input
          ref={colorInputRef}
          type="color"
          value={colorPreview}
          onChange={handleColorChange}
          className="absolute opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Color Values as InfoRows */}
      <div className="space-y-1.5">
        {orderedItems.map((item, index) => {
          // Check if this is the highlighted format
          const isHighlighted = preset?.highlight?.toUpperCase() === item.title?.toUpperCase()
          
          return (
            <InfoRow
              key={index}
              {...item}
              className={
                isHighlighted
                  ? "border-2 border-primary shadow-md shadow-primary/20 bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 scale-[1.02]"
                  : undefined
              }
              bgColor={isHighlighted ? "" : undefined}
            />
          )
        })}
      </div>
    </div>
  )
}
