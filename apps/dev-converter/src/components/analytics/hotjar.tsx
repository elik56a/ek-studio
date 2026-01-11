"use client"

import Hotjar from "@hotjar/browser"

import { useEffect } from "react"

export function HotjarAnalytics() {
  useEffect(() => {
    const siteId = process.env.NEXT_PUBLIC_HOTJAR_ID

    if (!siteId) {
      return
    }

    const hotjarVersion = 6

    Hotjar.init(parseInt(siteId, 10), hotjarVersion)
  }, [])

  return null
}
