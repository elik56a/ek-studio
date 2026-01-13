import { siteConfig } from "@/config/site"

interface HreflangTagsProps {
  /** The current page path (e.g., "/", "/blog", "/json-formatter") */
  path: string
}

/**
 * Generates hreflang tags for SEO
 * Each page must link to itself with the appropriate language code
 * This component should be included in the <head> of each page
 *
 * @see https://developers.google.com/search/docs/specialty/international/localized-versions
 */
export function HreflangTags({ path }: HreflangTagsProps) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  const fullUrl = `${siteConfig.url}${normalizedPath}`

  return (
    <>
      {/* Self-referencing hreflang for English */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      
      {/* x-default should point to the default language version */}
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
    </>
  )
}
