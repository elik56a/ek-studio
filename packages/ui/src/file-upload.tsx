"use client"

import * as React from "react"
import { Upload, X, Image as ImageIcon } from "lucide-react"
import { cn } from "./utils"
import { Button } from "./button"

export interface FileUploadProps {
  onFileSelect: (file: File) => void
  onClear?: () => void
  accept?: string
  acceptLabel?: string
  maxSize?: number
  selectedFile?: File | null
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  variant?: "default" | "compact"
}

export function FileUpload({
  onFileSelect,
  onClear,
  accept = "image/*",
  acceptLabel = "JPG, PNG, GIF, WebP, SVG",
  maxSize = 10 * 1024 * 1024, // 10MB default
  selectedFile,
  disabled = false,
  className,
  children,
  variant = "default",
}: FileUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Only set dragging to false if we're leaving the main container
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX
    const y = e.clientY
    
    if (
      x <= rect.left ||
      x >= rect.right ||
      y <= rect.top ||
      y >= rect.bottom
    ) {
      setIsDragging(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled && !isDragging) {
      setIsDragging(true)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (disabled) return

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    // Validate file size
    if (file.size > maxSize) {
      console.error(`File size exceeds ${maxSize / 1024 / 1024}MB limit`)
      return
    }

    onFileSelect(file)
  }

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onClear?.()
  }

  const isCompact = variant === "compact"

  return (
    <div
      className={cn(
        "relative w-full flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-all duration-200",
        isCompact ? "min-h-[120px] gap-2 p-4" : "h-full min-h-[300px] gap-4 p-8",
        isDragging
          ? "border-primary bg-primary/5 scale-[1.02]"
          : "border-border/50 bg-background/50 hover:border-primary/50",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "cursor-pointer",
        className
      )}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="hidden"
        disabled={disabled}
      />

      {/* Overlay to capture all drag events */}
      {isDragging && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
        />
      )}

      <div className={cn(
        "relative z-0 flex flex-col items-center pointer-events-none",
        isCompact ? "gap-2" : "gap-4"
      )}>
        {children || (
          <>
            {isCompact ? (
              // Compact variant
              selectedFile ? (
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground truncate max-w-[200px]">
                      {selectedFile.name}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 pointer-events-auto"
                      onClick={handleClear}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-medium text-foreground">
                    {isDragging ? "Drop your file here" : "Drag & drop your file here"}
                  </p>
                  <p className="text-xs text-muted-foreground">or</p>
                  <Button variant="outline" size="sm" className="gap-2 pointer-events-auto h-8">
                    <Upload className="w-3 h-3" />
                    Browse Files
                  </Button>
                  <p className="text-[10px] text-muted-foreground text-center">
                    Supported formats: {acceptLabel}
                    <br />
                    Maximum file size: {maxSize / 1024 / 1024}MB
                  </p>
                </>
              )
            ) : (
              // Default variant
              <>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {isDragging ? (
                    <Upload className="w-8 h-8 text-primary animate-bounce" />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-primary" />
                  )}
                </div>

                {selectedFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">
                        {selectedFile.name}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 pointer-events-auto"
                        onClick={handleClear}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 pointer-events-auto"
                      onClick={e => {
                        e.stopPropagation()
                        handleClick()
                      }}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Change File
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center space-y-2">
                      <p className="text-base font-medium text-foreground">
                        {isDragging ? "Drop your file here" : "Drag & drop your file here"}
                      </p>
                      <p className="text-sm text-muted-foreground">or</p>
                    </div>

                    <Button variant="outline" size="lg" className="gap-2 pointer-events-auto">
                      <Upload className="w-4 h-4" />
                      Browse Files
                    </Button>

                    <p className="text-xs text-muted-foreground text-center max-w-md">
                      Supported formats: {acceptLabel}
                      <br />
                      Maximum file size: {maxSize / 1024 / 1024}MB
                    </p>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
