"use client"

import { ReactNode, useState, useRef, useEffect } from "react"

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  align?: "left" | "center" | "right"
  className?: string
  contentClassName?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  variant?: "hover" | "click"
}

export function Dropdown({
  trigger,
  children,
  align = "left",
  className = "",
  contentClassName = "",
  open: controlledOpen,
  onOpenChange,
  variant = "click",
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Use controlled or uncontrolled state
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setIsOpen = (value: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(value)
    }
    onOpenChange?.(value)
  }

  // Close on click outside
  useEffect(() => {
    if (!isOpen || variant === "hover") return

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, variant])

  // Close on escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleMouseEnter = () => {
    if (variant === "hover") {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (variant === "hover") {
      setIsOpen(false)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    if (variant === "click") {
      e.stopPropagation()
      setIsOpen(!isOpen)
    }
  }

  const alignmentClasses = {
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0",
  }

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick} className="inline-block">{trigger}</div>

      {isOpen && (
        <div className={`absolute top-full ${variant === "hover" ? "pt-1" : "mt-2"} ${alignmentClasses[align]} z-[100]`}>
          <div
            className={`border rounded-xl shadow-2xl overflow-hidden bg-background backdrop-blur-xl ${contentClassName}`}
          >
            <div className="p-2 space-y-0.5 max-h-[400px] overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps {
  children?: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  icon?: ReactNode
  title?: string
  description?: string
  href?: string
}

export function DropdownItem({
  children,
  onClick,
  className = "",
  disabled = false,
  icon,
  title,
  description,
  href,
}: DropdownItemProps) {
  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {title || description ? (
        <div className="flex-1 min-w-0">
          {title && <div className="font-medium text-sm">{title}</div>}
          {description && <div className="text-xs text-muted-foreground truncate">{description}</div>}
        </div>
      ) : (
        <span className="flex-1">{children}</span>
      )}
    </>
  )

  const baseClasses = `w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-primary/10 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  )
}

interface DropdownSeparatorProps {
  className?: string
}

export function DropdownSeparator({ className = "" }: DropdownSeparatorProps) {
  return <div className={`h-px bg-border/50 my-2 ${className}`} />
}

interface DropdownHeaderProps {
  children: ReactNode
  className?: string
}

export function DropdownHeader({ children, className = "" }: DropdownHeaderProps) {
  return (
    <div className={`px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider ${className}`}>
      {children}
    </div>
  )
}
