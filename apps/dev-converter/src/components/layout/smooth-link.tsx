"use client"

import NProgress from "nprogress"

import { ComponentProps, MouseEvent, ReactNode, useTransition } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

type SmoothLinkProps = ComponentProps<typeof Link> & {
  children?: ReactNode
}

/**
 * Extracts text content from React children recursively
 */
function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === "string") {
    return children
  }
  
  if (typeof children === "number") {
    return String(children)
  }
  
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join(" ").trim()
  }
  
  if (children && typeof children === "object" && "props" in children) {
    const element = children as { props?: { children?: ReactNode } }
    if (element.props?.children) {
      return extractTextFromChildren(element.props.children)
    }
  }
  
  return ""
}

export function SmoothLink({ href, onClick, children, ...props }: SmoothLinkProps) {
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

  // Auto-generate aria-label if not provided
  const ariaLabel = props["aria-label"] || extractTextFromChildren(children) || undefined

  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  )
}
