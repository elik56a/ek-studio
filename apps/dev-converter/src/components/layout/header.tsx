"use client"

import { Button, Input } from "@ek-studio/ui"
import { ChevronDown, Menu, Search, X } from "lucide-react"

import { useState } from "react"

import { usePathname } from "next/navigation"

import { CategoryDropdown } from "@/components/common/category-dropdown"
import { DropdownItem } from "@/components/common/dropdown"
import { ThemeToggle } from "@/components/core/theme-toggle"
import { Logo } from "@/components/layout/logo"
import { SmoothLink } from "@/components/layout/smooth-link"
import { categories } from "@/lib/tools/categories"
import { getToolBySlug, searchTools } from "@/lib/tools/registry"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length >= 1) {
      const results = searchTools(query)
      setSearchResults(results)
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }

  // Check if current page is a tool page in this category
  const isActiveToolInCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId)
    if (!category) return false

    // Extract slug from pathname (e.g., /json-formatter -> json-formatter)
    const slug = pathname.split("/").filter(Boolean)[0]
    const tool = getToolBySlug(slug)

    return tool && category.tools.includes(tool.id)
  }

  // Check if category or any of its tools is active
  const isCategoryActive = (categoryId: string) => {
    return (
      pathname === `/categories/${categoryId}` ||
      isActiveToolInCategory(categoryId)
    )
  }

  return (
    <header className="sticky top-0 z-50 glass border-b backdrop-blur-xl bg-background/95">
      <div className="container mx-auto px-3 sm:px-4 flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
        {/* Logo - Left */}
        <div className="flex-shrink-0 min-w-0">
          <Logo size="sm" variant="default" href="/" />
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden lg:flex lg:flex-1 items-center justify-center space-x-1 text-sm font-medium">
          {categories.map(category => (
            <CategoryDropdown
              key={category.id}
              category={category}
              isActive={isCategoryActive(category.id)}
              variant="header"
            />
          ))}
          <SmoothLink
            href="/blog"
            className={`px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-primary/5 ${
              pathname.startsWith("/blog") ? "text-primary bg-primary/5" : ""
            }`}
          >
            Blog
          </SmoothLink>
        </nav>

        {/* Search & Theme Toggle - Right */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Desktop Search - Hidden on small and medium screens */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              className="pl-10 w-48 xl:w-64 bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
            />
            {showSearch && (
              <div className="absolute top-full mt-2 w-full border rounded-xl shadow-2xl z-[100] overflow-hidden bg-background backdrop-blur-xl">
                <div className="p-2 space-y-0.5 max-h-[400px] overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults
                      .slice(0, 5)
                      .map(tool => (
                        <DropdownItem
                          key={tool.id}
                          href={`/${tool.slug}`}
                          onClick={() => setShowSearch(false)}
                          title={tool.name}
                          description={tool.description}
                        />
                      ))
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <div className="text-muted-foreground text-sm">
                        No results found for "{searchQuery}"
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Try a different search term
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search - Show on small and medium screens */}
            <div className="relative lg:hidden">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={e => handleSearch(e.target.value)}
                className="pl-10 w-full bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
              />
              {showSearch && (
                <div className="absolute top-full mt-2 w-full border rounded-xl shadow-2xl z-[100] overflow-hidden bg-background backdrop-blur-xl">
                  <div className="p-2 space-y-0.5 max-h-[300px] overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.slice(0, 5).map(tool => (
                        <DropdownItem
                          key={tool.id}
                          href={`/${tool.slug}`}
                          onClick={() => {
                            setShowSearch(false)
                            setMobileMenuOpen(false)
                          }}
                          title={tool.name}
                          description={tool.description}
                        />
                      ))
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <div className="text-muted-foreground text-sm">
                          No results found for "{searchQuery}"
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2 pt-2">
              {categories.map(category => {
                const IconComponent = category.icon
                const isActive = isCategoryActive(category.id)
                const isOpen = openDropdown === category.id
                const isActiveCategoryPage =
                  pathname === `/categories/${category.id}`
                const isActiveTool = (toolSlug: string) =>
                  pathname === `/${toolSlug}`

                return (
                  <div key={category.id} className="space-y-1">
                    <button
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : category.id)
                      }
                      className={`w-full text-left text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-primary/5 flex items-center justify-between ${
                        isActive ? "text-primary bg-primary/5" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        {category.name}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-3">
                        <SmoothLink
                          href={`/categories/${category.id}`}
                          className={`block text-sm py-2 px-3 rounded-md transition-colors hover:text-primary hover:bg-primary/5 ${
                            isActiveCategoryPage
                              ? "text-primary bg-primary/5 font-medium"
                              : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All ({category.tools.length})
                        </SmoothLink>

                        {category.tools.map(toolId => {
                          const tool = getToolBySlug(toolId)
                          if (!tool) return null

                          const isToolActive = isActiveTool(tool.slug)

                          return (
                            <SmoothLink
                              key={tool.id}
                              href={`/${tool.slug}`}
                              className={`block text-sm py-2 px-3 rounded-md transition-colors hover:text-primary hover:bg-primary/5 ${
                                isToolActive
                                  ? "text-primary bg-primary/5 font-medium"
                                  : ""
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {tool.name}
                            </SmoothLink>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
              <SmoothLink
                href="/blog"
                className={`text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-primary/5 ${
                  pathname.startsWith("/blog")
                    ? "text-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </SmoothLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
