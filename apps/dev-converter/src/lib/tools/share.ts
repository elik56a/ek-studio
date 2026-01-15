import { compress, decompress } from "lz-string"

export function compressToUrl(data: any): string {
  const json = JSON.stringify(data)
  return compress(json)
}

export function decompressFromUrl(compressed: string): any {
  try {
    const json = decompress(compressed)
    return json ? JSON.parse(json) : null
  } catch {
    return null
  }
}

export function createShareUrl(toolSlug: string, data: any): string {
  const compressed = compressToUrl(data)
  const url = new URL(window.location.origin)
  url.pathname = `/${toolSlug}`
  url.searchParams.set("data", compressed)
  return url.toString()
}

export function getDataFromUrl(): any {
  if (typeof window === "undefined") return null

  const params = new URLSearchParams(window.location.search)
  const compressed = params.get("data")

  return compressed ? decompressFromUrl(compressed) : null
}
