"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    hj?: any
    _hjSettings?: any
  }
}

export function HotjarAnalytics() {
  useEffect(() => {
    const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID

    if (!hjid) {
      return
    }

    // Hotjar Tracking Code
    const w = window as any
    const d = document
    const t = "https://static.hotjar.com/c/hotjar-"
    const j = ".js?sv="
    
    w.hj = w.hj || function() {
      (w.hj.q = w.hj.q || []).push(arguments)
    }
    w._hjSettings = { hjid: hjid, hjsv: 6 }
    
    const a = d.getElementsByTagName("head")[0]
    const r = d.createElement("script")
    r.async = true
    r.src = t + w._hjSettings.hjid + j + w._hjSettings.hjsv
    a.appendChild(r)
  }, [])

  return null
}
