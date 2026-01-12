"use client"

import { useEffect } from "react"

// TypeScript declaration for smartlook
declare global {
  interface Window {
    smartlook?: {
      (...args: any[]): void
      api: any[]
    }
  }
}

export function SmartlookAnalytics() {
  useEffect(() => {
    // Smartlook initialization script
    if (typeof window !== "undefined" && !window.smartlook) {
      ;(function (d) {
        const smartlookFn = function (...args: any[]) {
          smartlookFn.api.push(args)
        } as {
          (...args: any[]): void
          api: any[]
        }
        smartlookFn.api = []
        window.smartlook = smartlookFn

        const h = d.getElementsByTagName("head")[0]
        const c = d.createElement("script")
        c.async = true
        c.type = "text/javascript"
        c.src = "https://web-sdk.smartlook.com/recorder.js"
        h.appendChild(c)
      })(document)

      window.smartlook?.("init", "51385bc26c300d0b0d6aa1215396623f23d3a00e", {
        region: "eu",
      })
    }
  }, [])

  return null
}
