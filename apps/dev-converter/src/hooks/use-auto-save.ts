"use client"

import { useEffect, useState } from "react"

export function useAutoSave<T>(
  key: string,
  value: T,
  delay = 1000,
  enabled = true
) {
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   if (!value || !enabled) return

  //   setIsLoading(true)
  //   const timer = setTimeout(() => {
  //     try {
  //       localStorage.setItem(key, JSON.stringify(value))
  //     } catch (error) {
  //       console.warn("Failed to save to localStorage:", error)
  //     }
  //     setIsLoading(false)
  //   }, delay)

  //   return () => clearTimeout(timer)
  // }, [key, value, delay, enabled])

  const loadSaved = (): any => {
    // try {
    //   const saved = localStorage.getItem(key)
    //   return saved ? JSON.parse(saved) : null
    // } catch {
    //   return null
    // }
  }

  const clearSaved = () => {
    localStorage.removeItem(key)
  }

  return { isLoading, loadSaved, clearSaved }
}
