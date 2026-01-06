"use client"

import { Button } from "@ek-studio/ui"
import { ChevronDown } from "lucide-react"

import { useState } from "react"

import { Dropdown, DropdownItem } from "./dropdown"

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
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  align = "left",
  size = "sm",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find(opt => opt.value === value)
  const displayLabel = selectedOption?.label || placeholder

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <Dropdown
      trigger={
        <Button variant="outline" size={size} className={`gap-2 ${className}`}>
          {selectedOption?.icon && (
            <span className="flex-shrink-0">{selectedOption.icon}</span>
          )}
          <span className="text-xs font-medium">{displayLabel}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      }
      align={align}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {options.map(option => (
        <DropdownItem
          key={option.value}
          title={option.label}
          description={option.description}
          icon={option.icon}
          onClick={() => handleSelect(option.value)}
          className={value === option.value ? "bg-primary/10 text-primary" : ""}
        />
      ))}
    </Dropdown>
  )
}
