"use client"

import NProgress from "nprogress"

import { useEffect } from "react"

import { usePathname, useSearchParams } from "next/navigation"

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
})

export function ProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done()
  }, [pathname, searchParams])

  return null
}
