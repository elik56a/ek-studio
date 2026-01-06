"use client"

import { useRef } from "react"

interface ColorOutputDisplayProps {
  output: string
  onColorChange?: (hexColor: string) => void
  placeholder?: string
}

export function ColorOutputDisplay({
  output,
  onColorChange,
  placeholder = "Color output will appear here...",
}: ColorOutputDisplayProps) {
  const colorInputRef = useRef<HTMLInputElement>(null)

  // Extract hex color from output
  let colorPreview = ""
  if (output) {
    const hexMatch = output.match(/HEX:\s+(#[A-Fa-f0-9]{6})/)
    if (hexMatch) {
      colorPreview = hexMatch[1]
    }
  }

  const handleColorPickerClick = () => {
    colorInputRef.current?.click()
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    if (onColorChange) {
      onColorChange(newColor)
    }
  }

  if (!output) {
    return (
      <div className="w-full h-full min-h-[100px] flex items-center justify-center bg-muted/30 border border-border/50 rounded-lg">
        <p className="text-sm text-muted-foreground">{placeholder}</p>
      </div>
    )
  }

  return (
    <div className="space-y-3 h-full">
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

      {/* Color Values Output */}
      <pre className="w-full p-3 font-mono text-xs sm:text-sm bg-muted/30 border border-border/50 rounded-md overflow-auto whitespace-pre-wrap break-all">
        {output}
      </pre>
    </div>
  )
}
