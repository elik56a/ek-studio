"use client"

import { Button } from "@ek-studio/ui"

import { ReactNode } from "react"

interface ScrollButtonProps {
  targetId: string
  children: ReactNode
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  ariaLabel?: string
}

export function ScrollButton({
  targetId,
  children,
  variant = "default",
  size = "lg",
  className = "",
  ariaLabel,
}: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  )
}
