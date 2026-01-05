"use client"

import { Menu, Search } from "lucide-react"

import { useState } from "react"

import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button, Input } from "@ek-studio/ui"
import { categories } from "@/lib/tools/categories"
import { searchTools } from "@/lib/tools/registry"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      const results = searchTools(query)
      setSearchResults(results)
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">DevConverter</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          {categories.slice(0, 4).map(category => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="transition-colors hover:text-foreground/80"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              className="pl-10 w-64"
            />
            {showSearch && searchResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-background border rounded-md shadow-lg z-50">
                {searchResults.slice(0, 5).map(tool => (
                  <Link
                    key={tool.id}
                    href={`/${tool.slug}`}
                    className="block px-4 py-2 hover:bg-accent"
                    onClick={() => setShowSearch(false)}
                  >
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {tool.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
