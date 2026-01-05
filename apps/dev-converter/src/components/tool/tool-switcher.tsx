"use client"

import { Check, ChevronDown, Grid3x3, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ek-studio/ui"
import { getCategoryById, getCategoryByToolId } from "@/lib/tools/categories"
import { getToolById, getToolsByCategory } from "@/lib/tools/registry"
import { Tool } from "@/lib/tools/types"

interface ToolSwitcherProps {
  currentTool: Tool
  hasInput?: boolean
  className?: string
}

export function ToolSwitcher({ currentTool, hasInput = false, className }: ToolSwitcherProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
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
    setOpen(false)
  }

  if (tools.length === 0) {
    return null
  }

  const CategoryIcon = category?.icon

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
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
          <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="start" 
        className="w-[280px] sm:w-[320px] glass border-border/50 p-2"
        sideOffset={8}
      >
        {/* Header */}
        <DropdownMenuLabel className="flex items-center gap-2 px-3 py-2">
          {CategoryIcon && (
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <CategoryIcon className="h-4 w-4 text-primary" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm">{category?.name || 'Tools'}</div>
            <div className="text-xs text-muted-foreground">
              {tools.length} {tools.length === 1 ? 'tool' : 'tools'} available
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-2" />

        {/* Current Tool */}
        <div className="px-2 mb-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
            <Check className="h-4 w-4 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{currentTool.name}</div>
              <div className="text-xs text-muted-foreground">Current tool</div>
            </div>
          </div>
        </div>

        {/* Grouped Tools */}
        {config.groups ? (
          config.groups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {groupIndex > 0 && <DropdownMenuSeparator className="my-2" />}
              <DropdownMenuLabel className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.label}
              </DropdownMenuLabel>
              {group.tools.map(toolId => {
                const tool = getToolById(toolId)
                if (!tool || tool.id === currentTool.id) return null
                
                return (
                  <DropdownMenuItem
                    key={tool.id}
                    onClick={() => handleToolSwitch(tool.slug)}
                    className="px-3 py-2.5 cursor-pointer group hover:bg-primary/10 focus:bg-primary/10 rounded-lg mx-1"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Sparkles className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {tool.description}
                        </div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                )
              })}
            </div>
          ))
        ) : (
          /* Ungrouped Tools */
          <div className="space-y-1">
            {tools.map(tool => (
              <DropdownMenuItem
                key={tool.id}
                onClick={() => handleToolSwitch(tool.slug)}
                className="px-3 py-2.5 cursor-pointer group hover:bg-primary/10 focus:bg-primary/10 rounded-lg mx-1"
              >
                <div className="flex items-center gap-3 w-full">
                  <Sparkles className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {tool.description}
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        )}

        {/* View All Link */}
        {config.showAllLink && (
          <>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem asChild className="px-3 py-2.5 cursor-pointer mx-1 hover:bg-primary/10 focus:bg-primary/10">
              <Link 
                href={category ? `/categories/${category.id}` : '/'}
                className="flex items-center gap-2 text-primary hover:text-primary font-medium"
              >
                <Grid3x3 className="h-4 w-4" />
                <span className="text-sm">
                  View All {category?.name || 'Tools'}
                </span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
