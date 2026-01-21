"use client"

import * as React from "react"
import { FileUpload, Textarea, Separator } from "@ek-studio/ui"
import { cn } from "@ek-studio/ui"

interface FileOrTextInputProps {
  value: string
  onChange: (value: string) => void
  onFileSelect?: (file: File) => void
  placeholder?: string
  accept?: string
  acceptLabel?: string
  maxSize?: number
  disabled?: boolean
  className?: string
}

export function FileOrTextInput({
  value,
  onChange,
  onFileSelect,
  placeholder = "Paste your text here...",
  accept = ".csv,.txt",
  acceptLabel = "CSV, TXT",
  maxSize = 10 * 1024 * 1024,
  disabled = false,
  className,
}: FileOrTextInputProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [textValue, setTextValue] = React.useState("")

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    
    // Read file content
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onChange(content)
      onFileSelect?.(file)
    }
    reader.readAsText(file)
  }

  const handleClearFile = () => {
    setSelectedFile(null)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setTextValue(newValue)
    onChange(newValue)
  }

  return (
    <div className={cn("flex flex-col gap-3 h-full", className)}>
      {/* Compact File Upload */}
      <FileUpload
        onFileSelect={handleFileSelect}
        onClear={handleClearFile}
        selectedFile={selectedFile}
        accept={accept}
        acceptLabel={acceptLabel}
        maxSize={maxSize}
        disabled={disabled}
        variant="compact"
        className="h-auto"
      />

      {/* Divider with OR */}
      <div className="relative flex items-center justify-center py-1">
        <Separator className="absolute w-full" />
        <span className="relative bg-background px-3 text-xs text-muted-foreground font-medium">
          OR
        </span>
      </div>

      {/* Text Area - only shows manually typed text, not file content */}
      <Textarea
        value={textValue}
        onChange={handleTextChange}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 resize-none max-h-[150px]"
      />
    </div>
  )
}
