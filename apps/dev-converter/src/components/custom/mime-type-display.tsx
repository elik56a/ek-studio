"use client"

import { Badge, Button, Card, SearchInput } from "@ek-studio/ui"
import { Check, Copy, FileText } from "lucide-react"

import { useMemo, useState } from "react"

import { getAllCategories, mimeDatabase } from "@/features/data/mime"
import { useCopy } from "@/hooks/use-copy"

const categoryColors: Record<string, string> = {
  Image: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Document:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Text: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Video: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  Audio: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  Archive:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  Programming:
    "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  Font: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  Other: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
}

export function MimeTypeDisplay() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { copy } = useCopy({ successMessage: "MIME type copied!" })

  const categories = useMemo(() => ["All", ...getAllCategories()], [])

  // Filter MIME types based on search and category
  const filteredResults = useMemo(() => {
    let results = mimeDatabase

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(item => item.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        item =>
          item.extension.toLowerCase().includes(query) ||
          item.mimeType.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      )
    }

    return results
  }, [searchQuery, selectedCategory])

  const handleCopy = async (mimeType: string, index: number) => {
    await copy(mimeType)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <Card className="glass border-0 shadow-glow overflow-hidden">
      <div className="space-y-6 p-4 sm:p-6">
        {/* Search Bar */}
        <div className="space-y-4">
          <SearchInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by extension, MIME type, or description..."
            className="w-full"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted text-muted-foreground border-border hover:bg-muted/80"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredResults.length} MIME type
          {filteredResults.length !== 1 ? "s" : ""}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[600px] overflow-y-auto pr-2">
          {filteredResults.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-sm text-muted-foreground">
                No MIME types found matching your search
              </p>
            </div>
          ) : (
            filteredResults.map((item, index) => (
              <Card
                key={`${item.extension}-${index}`}
                className="p-3 bg-primary/5 border-primary/20 hover:border-primary/30 hover:bg-primary/10 transition-colors"
              >
                <div className="space-y-2">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      <code className="text-xs font-bold text-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                        {item.extension}
                      </code>
                      <Badge
                        className={`text-[10px] ${categoryColors[item.category] || categoryColors.Other}`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>

                  {/* MIME Type with Copy */}
                  <div className="flex items-center gap-1.5">
                    <code className="flex-1 text-xs font-mono bg-muted/30 px-2 py-1.5 rounded border border-border/50 break-all">
                      {item.mimeType}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy(item.mimeType, index)}
                      className="shrink-0 h-7 w-7 p-0"
                      title="Copy MIME type"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </Card>
  )
}
