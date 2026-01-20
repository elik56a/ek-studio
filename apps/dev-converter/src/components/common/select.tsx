"use client"

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as UISelect,
} from "@ek-studio/ui"

export interface SelectOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  align?: "left" | "center" | "right"
  size?: "sm" | "default" | "lg"
  label?: string
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  label,
}: SelectProps) {
  const selectedOption = options.find(opt => opt.value === value)

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-foreground">{label}</label>
      )}
      <UISelect value={value} onValueChange={onChange}>
        <SelectTrigger className={className}>
          <div className="flex items-center gap-2">
            {selectedOption?.icon && (
              <span className="flex-shrink-0">{selectedOption.icon}</span>
            )}
            <span>{selectedOption?.label || placeholder}</span>
          </div>
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                {option.icon && (
                  <span className="flex-shrink-0">{option.icon}</span>
                )}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{option.label}</span>
                  {option.description && (
                    <span className="text-xs text-muted-foreground">
                      {option.description}
                    </span>
                  )}
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </UISelect>
    </div>
  )
}
