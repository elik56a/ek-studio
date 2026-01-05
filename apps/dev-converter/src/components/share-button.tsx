"use client"

import { Copy, QrCode, Share2 } from "lucide-react"

import { useState } from "react"

import { useToast } from "@/components/toast-provider"
import { Button } from "@ek-studio/ui"
import { createShareUrl } from "@/lib/share"

interface ShareButtonProps {
  toolSlug: string
  data: any
  disabled?: boolean
}

export function ShareButton({ toolSlug, data, disabled }: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false)
  const { addToast } = useToast()

  const handleShare = async () => {
    if (!data || disabled) return

    setIsSharing(true)
    try {
      const shareUrl = createShareUrl(toolSlug, data)

      if (navigator.share) {
        await navigator.share({
          title: `DevConverter - ${toolSlug}`,
          url: shareUrl,
        })
        addToast("Shared successfully!", "success")
      } else {
        await navigator.clipboard.writeText(shareUrl)
        addToast("Share link copied to clipboard!", "success")
      }
    } catch (error) {
      addToast("Failed to share", "error")
    }
    setIsSharing(false)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      disabled={disabled || isSharing}
      className="flex items-center gap-2"
    >
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  )
}
