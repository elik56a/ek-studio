"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Category } from "@/lib/tools/types"
import { getToolBySlug } from "@/lib/tools/registry"

interface CategoryDropdownProps {
  category: Category
  isActive?: boolean
  onItemClick?: () => void
  variant?: "header" | "standalone"
}

export function CategoryDropdown({ 
  category, 
  isActive = false, 
  onItemClick,
  variant = "header" 
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const IconComponent = category.icon

  const isActiveCategoryPage = pathname === `/categories/${category.id}`
  
  const isActiveTool = (toolSlug: string) => {
    return pathname === `/${toolSlug}`
  }

  const handleMouseEnter = () => {
    if (variant === "header") {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (variant === "header") {
      setIsOpen(false)
    }
  }

  const handleClick = () => {
    if (variant === "standalone") {
      setIsOpen(!isOpen)
    }
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    onItemClick?.()
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/categories/${category.id}`}
        onClick={handleClick}
        className={`px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-primary/5 flex items-center gap-1 whitespace-nowrap ${
          isActive ? 'text-primary' : ''
        }`}
      >
        {category.name}
        <ChevronDown className="w-3 h-3" />
        {isActive && variant === "header" && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
        )}
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 pt-1 w-64 z-[100]">
          <div className="border rounded-xl shadow-2xl overflow-hidden bg-background backdrop-blur-xl">
            <div className="p-2">
              {/* Category Header */}
              <Link
                href={`/categories/${category.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${
                  isActiveCategoryPage ? 'bg-primary/10 text-primary' : ''
                }`}
                onClick={handleLinkClick}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">View All</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {category.tools.length} tools
                  </div>
                </div>
              </Link>

              {/* Divider */}
              <div className="h-px bg-border/50 my-2"></div>

              {/* Tools List */}
              <div className="space-y-0.5 max-h-[400px] overflow-y-auto">
                {category.tools.map(toolId => {
                  const tool = getToolBySlug(toolId)
                  if (!tool) return null
                  
                  const isToolActive = isActiveTool(tool.slug)
                  
                  return (
                    <Link
                      key={tool.id}
                      href={`/${tool.slug}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                        isToolActive ? 'bg-primary/10 text-primary font-medium' : ''
                      }`}
                      onClick={handleLinkClick}
                    >
                      {tool.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
