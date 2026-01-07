"use client"

import { useReportWebVitals } from "next/web-vitals"

export function WebVitals() {
  useReportWebVitals(metric => {
    // Log metrics in development
    if (process.env.NODE_ENV === "development") {
      console.log(metric)
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production") {
      // You can send to your analytics service here
      // Example: analytics.track('web-vitals', metric)
      // Vercel Analytics automatically tracks these
      // but you can add custom tracking here if needed
    }
  })

  return null
}
