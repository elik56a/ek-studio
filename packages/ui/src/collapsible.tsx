"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import * as React from "react"

import { cn } from "./utils"

export interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  contentClassName?: string
  triggerClassName?: string
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      open,
      onOpenChange,
      trigger,
      children,
      className,
      contentClassName,
      triggerClassName,
    },
    ref
  ) => {
    return (
      <CollapsiblePrimitive.Root
        ref={ref}
        open={open}
        onOpenChange={onOpenChange}
        className={className}
      >
        <CollapsiblePrimitive.Trigger asChild className={triggerClassName}>
          {trigger}
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Content
          className={cn(
            "overflow-hidden transition-all data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2",
            contentClassName
          )}
        >
          {children}
        </CollapsiblePrimitive.Content>
      </CollapsiblePrimitive.Root>
    )
  }
)

Collapsible.displayName = "Collapsible"

export { Collapsible }
