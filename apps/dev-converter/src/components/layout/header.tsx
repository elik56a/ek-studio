"use client"

import { Menu, Search, X, ChevronDown } from "lucide-react"

import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Logo } from "@/components/layout/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, Input } from "@ek-studio/ui"
import { categories } from "@/lib/tools/categories"
import { searchTools, getToolBySlug } from "@/lib/tools/registry"
import { CategoryDropdown } from "@/components/common/category-dropdown"

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
    const slug = pathname.split('/').filter(Boolean)[0]
    const tool = getToolBySlug(slug)
    
    return tool && category.tools.includes(tool.id)
  }

  // Check if category or any of its tools is active
  const isCategoryActive = (categoryId: string) => {
    return pathname === `/categories/${categoryId}` || isActiveToolInCategory(categoryId)
  }

  return (
    <header className="sticky top-0 z-50 glass border-b backdrop-blur-xl bg-background/95">
      <div className="px-4 flex h-16 items-center justify-between max-w-full">
        <div className="flex items-center gap-6">
          <Logo size="sm" variant="default" href="/" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium">
            {categories.map(category => (
              <CategoryDropdown
                key={category.id}
                category={category}
                isActive={isCategoryActive(category.id)}
                variant="header"
              />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              className="pl-10 w-48 lg:w-64 bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
            />
            {showSearch && (
              <div className="absolute top-full mt-2 w-full border rounded-xl shadow-2xl z-[100] overflow-hidden max-h-[400px] overflow-y-auto bg-background backdrop-blur-xl">
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 5).map(tool => (
                    <Link
                      key={tool.id}
                      href={`/${tool.slug}`}
                      className="block px-4 py-3 hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                      onClick={() => setShowSearch(false)}
                    >
                      <div className="font-medium text-foreground">{tool.name}</div>
                      <div className="text-sm text-muted-foreground truncate">
                        {tool.description}
                      </div>
                    </Link>
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
            )}
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative md:hidden">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={e => handleSearch(e.target.value)}
                className="pl-10 w-full bg-background/50 border-border/50 focus:bg-background focus:border-primary/50"
              />
              {showSearch && (
                <div className="absolute top-full mt-2 w-full border rounded-xl shadow-2xl z-[100] overflow-hidden max-h-[300px] overflow-y-auto bg-background backdrop-blur-xl">
                  {searchResults.length > 0 ? (
                    searchResults.slice(0, 5).map(tool => (
                      <Link
                        key={tool.id}
                        href={`/${tool.slug}`}
                        className="block px-4 py-3 hover:bg-accent/10 transition-colors border-b border-border/30 last:border-b-0"
                        onClick={() => {
                          setShowSearch(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        <div className="font-medium text-foreground">{tool.name}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {tool.description}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <div className="text-muted-foreground text-sm">
                        No results found for "{searchQuery}"
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2 pt-2">
              {categories.map(category => {
                const IconComponent = category.icon
                const isActive = isCategoryActive(category.id)
                const isOpen = openDropdown === category.id
                const isActiveCategoryPage = pathname === `/categories/${category.id}`
                const isActiveTool = (toolSlug: string) => pathname === `/${toolSlug}`
                
                return (
                  <div key={category.id} className="space-y-1">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : category.id)}
                      className={`w-full text-left text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-primary/5 flex items-center justify-between ${
                        isActive ? 'text-primary bg-primary/5' : ''
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        {category.name}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isOpen && (
                      <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-3">
                        <Link
                          href={`/categories/${category.id}`}
                          className={`block text-sm py-2 px-3 rounded-md transition-colors hover:text-primary hover:bg-primary/5 ${
                            isActiveCategoryPage ? 'text-primary bg-primary/5 font-medium' : ''
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All ({category.tools.length})
                        </Link>
                        
                        {category.tools.map(toolId => {
                          const tool = getToolBySlug(toolId)
                          if (!tool) return null
                          
                          const isToolActive = isActiveTool(tool.slug)
                          
                          return (
                            <Link
                              key={tool.id}
                              href={`/${tool.slug}`}
                              className={`block text-sm py-2 px-3 rounded-md transition-colors hover:text-primary hover:bg-primary/5 ${
                                isToolActive ? 'text-primary bg-primary/5 font-medium' : ''
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {tool.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
