import { cn } from "@ek-studio/ui"
import { Code2, Zap } from "lucide-react"

import { SmoothLink } from "@/components/layout/smooth-link"

interface LogoProps {
  variant?: "default" | "compact" | "icon-only"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showTagline?: boolean
  href?: string
}

export function Logo({
  variant = "default",
  size = "md",
  className,
  showTagline = false,
  href = "/",
}: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: "h-6 w-6",
      text: "text-lg",
      tagline: "text-xs",
      gap: "gap-2",
    },
    md: {
      icon: "h-8 w-8",
      text: "text-2xl",
      tagline: "text-sm",
      gap: "gap-3",
    },
    lg: {
      icon: "h-10 w-10",
      text: "text-3xl",
      tagline: "text-base",
      gap: "gap-3",
    },
    xl: {
      icon: "h-12 w-12",
      text: "text-4xl",
      tagline: "text-lg",
      gap: "gap-4",
    },
  }

  const sizes = sizeClasses[size]

  const LogoContent = () => (
    <>
      {variant !== "icon-only" && (
        <div className={cn("flex items-center", sizes.gap)}>
          {/* Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-sm opacity-50" />
            <div className="relative bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-lg">
              <Code2
                className={cn(sizes.icon, "text-primary-foreground")}
                strokeWidth={2.5}
              />
            </div>
            <Zap
              className={cn(
                "absolute -bottom-1 -right-1 text-accent drop-shadow-lg",
                size === "sm"
                  ? "h-3 w-3"
                  : size === "md"
                    ? "h-4 w-4"
                    : size === "lg"
                      ? "h-5 w-5"
                      : "h-6 w-6"
              )}
              fill="currentColor"
            />
          </div>

          {/* Text */}
          {variant === "default" && (
            <div className="flex flex-col">
              <span
                className={cn(
                  sizes.text,
                  "font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                )}
              >
                DevConverter
              </span>
              {showTagline && (
                <span
                  className={cn(
                    sizes.tagline,
                    "text-muted-foreground font-medium -mt-1"
                  )}
                >
                  Tools That Work
                </span>
              )}
            </div>
          )}

          {variant === "compact" && (
            <span
              className={cn(
                sizes.text,
                "font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              )}
            >
              DC
            </span>
          )}
        </div>
      )}

      {variant === "icon-only" && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-sm opacity-50" />
          <div className="relative bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-lg">
            <Code2
              className={cn(sizes.icon, "text-primary-foreground")}
              strokeWidth={2.5}
            />
          </div>
          <Zap
            className={cn(
              "absolute -bottom-1 -right-1 text-accent drop-shadow-lg",
              size === "sm"
                ? "h-3 w-3"
                : size === "md"
                  ? "h-4 w-4"
                  : size === "lg"
                    ? "h-5 w-5"
                    : "h-6 w-6"
            )}
            fill="currentColor"
          />
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <SmoothLink
        href={href}
        className={cn(
          "inline-flex items-center transition-all duration-300 hover:scale-105 active:scale-95",
          className
        )}
      >
        <LogoContent />
      </SmoothLink>
    )
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      <LogoContent />
    </div>
  )
}
