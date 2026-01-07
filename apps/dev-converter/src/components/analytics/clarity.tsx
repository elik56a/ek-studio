"use client"

import { useEffect } from "react"
import Clarity from "@microsoft/clarity"

export function ClarityAnalytics() {
  useEffect(() => {
    // Replace with your actual Clarity project ID in .env.local
    const projectId = process.env.NEXT_PUBLIC_CLARITY_ID
    
    if (projectId && projectId !== "your_clarity_project_id_here") {
      Clarity.init(projectId)
    }
  }, [])

  return null
}
