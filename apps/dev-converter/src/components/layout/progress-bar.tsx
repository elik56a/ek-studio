"use client"

import NProgress from "nprogress"

import { Suspense, useEffect } from "react"

import { usePathname, useSearchParams } from "next/navigation"

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
})

function ProgressBarContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done()
  }, [pathname, searchParams])

  return null
}

export function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  )
}
