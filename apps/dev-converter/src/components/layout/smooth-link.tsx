"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import NProgress from "nprogress"
import { ComponentProps, MouseEvent, useTransition } from "react"

type SmoothLinkProps = ComponentProps<typeof Link>

export function SmoothLink({ href, onClick, ...props }: SmoothLinkProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Only handle internal links and if not opening in new tab
    const isInternalLink = typeof href === "string" && href.startsWith("/")
    const isModifiedClick = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    const isNewTab = e.currentTarget.target === "_blank"

    if (isInternalLink && !isModifiedClick && !isNewTab) {
      e.preventDefault()

      // Call original onClick if provided
      onClick?.(e)

      // Start progress bar
      NProgress.start()

      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })

      // Navigate with transition
      startTransition(() => {
        router.push(href)
      })
    } else {
      // For external links, modified clicks, or new tabs, use default behavior
      onClick?.(e)
    }
  }

  return <Link href={href} onClick={handleClick} {...props} />
}
