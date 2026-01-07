"use client"

import { ChevronDown } from "lucide-react"

import { useState } from "react"

import { usePathname } from "next/navigation"

import { SmoothLink } from "@/components/layout/smooth-link"
import { getToolBySlug } from "@/lib/tools/registry"
import { Category } from "@/lib/tools/types"

import { Dropdown, DropdownItem, DropdownSeparator } from "./dropdown"

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
  variant = "header",
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const IconComponent = category.icon

  const isActiveCategoryPage = pathname === `/categories/${category.id}`

  const isActiveTool = (toolSlug: string) => {
    return pathname === `/${toolSlug}`
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    onItemClick?.()
  }

  const trigger = (
    <SmoothLink
      href={`/categories/${category.id}`}
      className={`px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-primary/5 flex items-center gap-1 whitespace-nowrap ${
        isActive ? "text-primary" : ""
      }`}
    >
      {category.name}
      <ChevronDown className="w-3 h-3" />
      {isActive && variant === "header" && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
      )}
    </SmoothLink>
  )

  return (
    <Dropdown
      trigger={trigger}
      open={isOpen}
      onOpenChange={setIsOpen}
      variant={variant === "header" ? "hover" : "click"}
      contentClassName="w-64"
    >
      {/* Category Header */}
      <DropdownItem
        href={`/categories/${category.id}`}
        onClick={handleLinkClick}
        className={isActiveCategoryPage ? "bg-primary/10 text-primary" : ""}
        icon={
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <IconComponent className="w-4 h-4 text-primary" />
          </div>
        }
        title="View All"
        description={`${category.tools.length} tools`}
      />

      <DropdownSeparator />

      {/* Tools List */}
      {category.tools.map(toolId => {
        const tool = getToolBySlug(toolId)
        if (!tool) return null

        const isToolActive = isActiveTool(tool.slug)

        return (
          <DropdownItem
            key={tool.id}
            href={`/${tool.slug}`}
            onClick={handleLinkClick}
            title={tool.name}
            className={
              isToolActive ? "bg-primary/10 text-primary font-medium" : ""
            }
          />
        )
      })}
    </Dropdown>
  )
}
