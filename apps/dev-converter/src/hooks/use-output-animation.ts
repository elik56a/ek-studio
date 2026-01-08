"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Hook to trigger a heartbeat animation when output value changes
 * @param outputValue - The output value to watch for changes
 * @returns isAnimating - Whether the animation is currently active
 */
export function useOutputAnimation(outputValue: string) {
  const [isAnimating, setIsAnimating] = useState(false)
  const previousOutputRef = useRef<string>("")
  const animationTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    // Trigger on any output change that has content and is different from previous
    if (outputValue && outputValue !== previousOutputRef.current) {
      // Clear any existing timeout
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }

      // Force animation restart by toggling the state
      setIsAnimating(false)

      // Use requestAnimationFrame to ensure the class is removed before adding it back
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
          animationTimeoutRef.current = setTimeout(() => {
            setIsAnimating(false)
          }, 1000)
        })
      })

      previousOutputRef.current = outputValue
    }
    // Update ref even if output is empty
    if (!outputValue) {
      previousOutputRef.current = ""
    }

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [outputValue])

  return isAnimating
}
