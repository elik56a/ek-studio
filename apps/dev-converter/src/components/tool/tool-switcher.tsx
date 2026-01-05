"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useMemo, useState } from "react"

import { Button } from "@ek-studio/ui"
import { getCategoryByToolId } from "@/lib/tools/categories"
import { getToolById, getToolsByCategory, getToolBySlug } from "@/lib/tools/registry"
import { Tool } from "@/lib/tools/types"

interface ToolSwitcherProps {
  currentTool: Tool
  hasInput?: boolean
  className?: string
}

export function ToolSwitcher({ currentTool, hasInput = false, className }: ToolSwitcherProps) {
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

    if (config.mode === 'custom') {
      if (config.groups) {
        // Flatten grouped tools
        toolList = config.groups.flatMap(group => 
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
    const uniqueTools = Array.from(new Map(toolList.map(t => [t.id, t])).values())

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

  const isActiveCategoryPage = category && pathname === `/categories/${category.id}`

  if (tools.length === 0) {
    return null
  }

  const CategoryIcon = category?.icon

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
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
        <ChevronDown className={`h-4 w-4 text-muted-foreground group-hover:text-primary transition-all ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-64 z-50">
            <div className="border rounded-xl shadow-2xl overflow-hidden bg-background backdrop-blur-xl">
              <div className="p-2">
                {/* Category Header */}
                {category && (
                  <>
                    <Link
                      href={`/categories/${category.id}`}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${
                        isActiveCategoryPage ? 'bg-primary/10 text-primary' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        {CategoryIcon && <CategoryIcon className="w-4 h-4 text-primary" />}
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
                  </>
                )}

                {/* Tools List */}
                <div className="space-y-0.5 max-h-[400px] overflow-y-auto">
                  {tools.map(tool => {
                    const isToolActive = isActiveTool(tool.slug)
                    
                    return (
                      <button
                        key={tool.id}
                        onClick={() => handleToolSwitch(tool.slug)}
                        className={`w-full text-left block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                          isToolActive ? 'bg-primary/10 text-primary font-medium' : ''
                        }`}
                      >
                        {tool.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
