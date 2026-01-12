import { ComponentType } from "react"

import dynamic from "next/dynamic"

// Lazy load all tool components to avoid circular dependencies
export const toolComponents: Record<string, ComponentType<any>> = {
  // JSON & Data Tools
  "json-formatter": dynamic(() => import("@/components/tools/json-formatter"), {
    ssr: true,
  }),
  "json-to-yaml": dynamic(() => import("@/components/tools/json-to-yaml"), {
    ssr: true,
  }),
  "yaml-to-json": dynamic(() => import("@/components/tools/yaml-to-json"), {
    ssr: true,
  }),
  "json-to-csv": dynamic(() => import("@/components/tools/json-to-csv"), {
    ssr: true,
  }),
  "csv-to-json": dynamic(() => import("@/components/tools/csv-to-json"), {
    ssr: true,
  }),

  // Encoding Tools
  "file-to-base64": dynamic(() => import("@/components/tools/file-to-base64"), {
    ssr: true,
  }),
  "base64-encode-decode": dynamic(
    () => import("@/components/tools/base64-encode-decode"),
    { ssr: true }
  ),
  "url-encode-decode": dynamic(
    () => import("@/components/tools/url-encode-decode"),
    { ssr: true }
  ),
  "html-escape-unescape": dynamic(
    () => import("@/components/tools/html-escape-unescape"),
    { ssr: true }
  ),
  "json-escape-unescape": dynamic(
    () => import("@/components/tools/json-escape-unescape"),
    { ssr: true }
  ),

  // Security Tools
  "jwt-decoder": dynamic(() => import("@/components/tools/jwt-decoder"), {
    ssr: true,
  }),
  "hash-generator": dynamic(() => import("@/components/tools/hash-generator"), {
    ssr: true,
  }),
  "password-generator": dynamic(
    () => import("@/components/tools/password-generator"),
    { ssr: true }
  ),
  "uuid-generator": dynamic(() => import("@/components/tools/uuid-generator"), {
    ssr: true,
  }),

  // Text Tools
  "case-converter": dynamic(() => import("@/components/tools/case-converter"), {
    ssr: true,
  }),
  "markdown-html-converter": dynamic(
    () => import("@/components/tools/markdown-html-converter"),
    { ssr: true }
  ),
  "diff-checker": dynamic(
    () => import("@/components/tools/text-diff-checker"),
    { ssr: true }
  ),
  "regex-tester": dynamic(() => import("@/components/tools/regex-tester"), {
    ssr: true,
  }),

  // Time Tools
  "unix-timestamp-converter": dynamic(
    () => import("@/components/tools/unix-timestamp-converter"),
    { ssr: true }
  ),

  // Utility Tools
  "color-converter": dynamic(
    () => import("@/components/tools/color-converter"),
    { ssr: true }
  ),
  "mime-type-lookup": dynamic(
    () => import("@/components/tools/mime-type-lookup"),
    { ssr: true }
  ),
}

export function getToolComponent(
  toolId: string
): ComponentType<any> | undefined {
  return toolComponents[toolId]
}
