"use client"

import { Button } from "@ek-studio/ui"
import { ChevronDown } from "lucide-react"

import { useMemo, useState } from "react"

import { usePathname, useRouter } from "next/navigation"

import {
  Dropdown,
  DropdownItem,
  DropdownSeparator,
} from "@/components/common/dropdown"
import { getCategoryByToolId } from "@/lib/tools/categories"
import { getToolById, getToolsByCategory } from "@/lib/tools/registry"
import { Tool } from "@/lib/tools/types"

interface ToolSwitcherProps {
  currentTool: Tool
  hasInput?: boolean
  className?: string
}

export function ToolSwitcher({
  currentTool,
  hasInput = false,
  className,
}: ToolSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const config = currentTool.switcher

  if (!config?.enabled) {
    return null
  }

  // Build tool list based on configuration
  const { tools, category } = useMemo(() => {
    let toolList: Tool[] = []
    let cat = getCategoryByToolId(currentTool.id)

    if (config.mode === "custom") {
      if (config.groups) {
        // Flatten grouped tools
        toolList = config.groups.flatMap(
          group =>
            group.tools.map(id => getToolById(id)).filter(Boolean) as Tool[]
        )
      } else if (config.customTools) {
        toolList = config.customTools
          .map(id => getToolById(id))
          .filter(Boolean) as Tool[]
      }
    } else {
      // Default: category mode
      if (cat) {
        toolList = getToolsByCategory(cat.id)
      }
    }

    // Remove current tool and ensure uniqueness
    toolList = toolList.filter(t => t.id !== currentTool.id)
    const uniqueTools = Array.from(
      new Map(toolList.map(t => [t.id, t])).values()
    )

    return { tools: uniqueTools, category: cat }
  }, [currentTool, config])

  const handleToolSwitch = (toolSlug: string) => {
    if (config.preserveInput && hasInput) {
      const confirmed = window.confirm(
        "You have unsaved input. Switching tools will clear your current work. Continue?"
      )
      if (!confirmed) {
        return
      }
    }

    router.push(`/${toolSlug}`)
    setIsOpen(false)
  }

  const isActiveTool = (toolSlug: string) => {
    return pathname === `/${toolSlug}`
  }

  const isActiveCategoryPage =
    category && pathname === `/categories/${category.id}`

  if (tools.length === 0) {
    return null
  }

  const CategoryIcon = category?.icon

  const trigger = (
    <Button
      variant="outline"
      size="lg"
      className="h-14 sm:h-16 px-4 sm:px-6 gap-2 sm:gap-3 glass border-border/50 hover:border-primary/50 hover:bg-primary/5 focus:border-primary focus:ring-primary transition-all group hover:text-foreground"
    >
      {CategoryIcon && (
        <CategoryIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:scale-110 transition-transform" />
      )}
      <span className="hidden sm:inline font-medium text-foreground">
        {currentTool.name}
      </span>
      <span className="sm:hidden font-medium text-sm text-foreground">
        Switch Tool
      </span>
      <ChevronDown
        className={`h-4 w-4 text-muted-foreground group-hover:text-primary transition-all ${isOpen ? "rotate-180" : ""}`}
      />
    </Button>
  )

  return (
    <Dropdown
      trigger={trigger}
      open={isOpen}
      onOpenChange={setIsOpen}
      variant="click"
      contentClassName="w-64"
    >
      {/* Category Header */}
      {category && (
        <>
          <DropdownItem
            href={`/categories/${category.id}`}
            onClick={() => setIsOpen(false)}
            className={isActiveCategoryPage ? "bg-primary/10 text-primary" : ""}
            icon={
              CategoryIcon ? (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <CategoryIcon className="w-4 h-4 text-primary" />
                </div>
              ) : undefined
            }
            title="View All"
            description={`${category.tools.length} tools`}
          />

          <DropdownSeparator />
        </>
      )}

      {/* Tools List */}
      {tools.map(tool => {
        const isToolActive = isActiveTool(tool.slug)

        return (
          <DropdownItem
            key={tool.id}
            onClick={() => handleToolSwitch(tool.slug)}
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
