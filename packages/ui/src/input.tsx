import * as React from "react"
import { X } from "lucide-react"

import { cn } from "./utils"

export interface InputProps extends React.ComponentProps<"input"> {
  onClear?: () => void
  showClearButton?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, onClear, showClearButton = true, value, onChange, ...props },
    ref
  ) => {
    const hasValue = value !== undefined && value !== ""

    const handleClear = () => {
      if (onClear) {
        onClear()
      } else if (onChange) {
        // Fallback: trigger onChange with empty value
        const syntheticEvent = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>
        onChange(syntheticEvent)
      }
    }

    // If no clear button needed, render simple input
    if (!showClearButton || !hasValue) {
      return (
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "hover:border-primary/30",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
      )
    }

    // Render input with clear button
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pr-9 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "hover:border-primary/30",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear input"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
