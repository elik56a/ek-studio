"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"
import { cn } from "./utils"

export interface CarouselItem {
  name: string
  href: string
  description: string
}

interface CarouselProps {
  items: CarouselItem[]
  itemsPerView?: number
  className?: string
}

export function Carousel({
  items,
  itemsPerView = 3,
  className,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!items || items.length === 0) return null

  const maxIndex = Math.max(0, items.length - itemsPerView)
  const canGoLeft = currentIndex > 0
  const canGoRight = currentIndex < maxIndex

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center gap-2">
        {/* Left Arrow */}
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={!canGoLeft}
          className={cn(
            "h-10 w-10 rounded-full flex-shrink-0 transition-all duration-200",
            canGoLeft
              ? "hover:bg-emerald-500/10 hover:border-emerald-500/30"
              : "opacity-40 cursor-not-allowed"
          )}
          aria-label="Previous tools"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden py-2 px-1">
          <div
            className="flex transition-transform duration-500 ease-out gap-3"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "group block p-4 rounded-xl border border-border bg-card hover:border-emerald-500/30 hover:shadow-lg transition-all duration-200 flex-shrink-0",
                  `w-[calc(${100 / itemsPerView}%-${((itemsPerView - 1) * 12) / itemsPerView}px)]`
                )}
              >
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={!canGoRight}
          className={cn(
            "h-10 w-10 rounded-full flex-shrink-0 transition-all duration-200",
            canGoRight
              ? "hover:bg-emerald-500/10 hover:border-emerald-500/30"
              : "opacity-40 cursor-not-allowed"
          )}
          aria-label="Next tools"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      {items.length > itemsPerView && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-6 bg-emerald-500"
                  : "w-1.5 bg-border hover:bg-emerald-500/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
