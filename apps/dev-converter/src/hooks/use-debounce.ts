import { useEffect, useRef } from "react"

/**
 * Hook that debounces a callback function
 * @param callback - The function to debounce
 * @param delay - Delay in milliseconds (default: 300ms)
 * @param dependencies - Dependencies array that triggers the debounced callback
 */
export function useDebounce(
  callback: () => void,
  delay: number = 300,
  dependencies: any[] = []
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear existing timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set up new debounced callback
    timeoutRef.current = setTimeout(() => {
      callback()
    }, delay)

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
