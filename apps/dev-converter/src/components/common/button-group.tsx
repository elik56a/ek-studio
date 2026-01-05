"use client"

import { Button } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

interface ButtonGroupOption {
  value: string
  label: string
  icon?: React.ReactNode
}

interface ButtonGroupProps {
  options: ButtonGroupOption[]
  value: string
  onChange: (value: string) => void
  className?: string
  size?: "sm" | "default" | "lg"
}

export function ButtonGroup({
  options,
  value,
  onChange,
  className,
  size = "sm",
}: ButtonGroupProps) {
  return (
    <div className={cn("inline-flex rounded-lg border border-border/50 bg-background/50", className)}>
      {options.map((option, index) => (
        <Button
          key={option.value}
          variant={value === option.value ? "default" : "secondary"}
          size={size}
          onClick={() => onChange(option.value)}
          className={cn(
            "h-7 text-xs rounded-none",
            index === 0 && "rounded-l-lg",
            index === options.length - 1 && "rounded-r-lg",
            value === option.value && "shadow-sm",
            value !== option.value && "hover:bg-primary/10"
          )}
        >
          {option.icon && <span className="mr-1">{option.icon}</span>}
          {option.label}
        </Button>
      ))}
    </div>
  )
}
