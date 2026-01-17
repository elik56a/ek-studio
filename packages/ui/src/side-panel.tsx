"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

import { cn } from "./utils"
import { Button } from "./button"

export interface SidePanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
  width?: string
  showBackdrop?: boolean
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  (
    {
      open,
      onOpenChange,
      title,
      children,
      side = "right",
      className,
      width = "400px",
      showBackdrop = false,
    },
    ref
  ) => {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
    }, [])

    // Close on escape key
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open) {
          onOpenChange(false)
        }
      }
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }, [open, onOpenChange])

    if (!mounted) return null

    const panelContent = (
      <>
        {/* Backdrop */}
        {showBackdrop && open && (
          <div
            className="fixed inset-0 bg-black/20 z-40 animate-in fade-in-0 duration-200"
            onClick={() => onOpenChange(false)}
          />
        )}

        {/* Panel */}
        <div
          ref={ref}
          className={cn(
            "fixed top-0 bottom-0 z-50 bg-background border-border shadow-2xl transition-transform duration-300 ease-in-out",
            side === "right" && "right-0 border-l",
            side === "left" && "left-0 border-r",
            open
              ? "translate-x-0"
              : side === "right"
                ? "translate-x-full"
                : "-translate-x-full",
            className
          )}
          style={{ width }}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-background/95 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">{title}</h3>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => onOpenChange(false)}
                aria-label="Close panel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Content */}
          <div className="overflow-y-auto h-full pb-20">{children}</div>
        </div>
      </>
    )

    return createPortal(panelContent, document.body)
  }
)

SidePanel.displayName = "SidePanel"

export { SidePanel }
