import { ChevronRight, Home } from "lucide-react"

import { SmoothLink } from "@/components/layout/smooth-link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
    >
      <SmoothLink
        href="/"
        className="flex items-center hover:text-foreground"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </SmoothLink>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <SmoothLink href={item.href} className="hover:text-foreground">
              {item.label}
            </SmoothLink>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
