import { ConversionResult } from "@/shared/types"

import { mimeDatabase } from "./database"
import { MimeTypeInfo } from "./types"

export const lookupMimeType = (
  input: string
): ConversionResult<MimeTypeInfo[]> => {
  const trimmed = input.trim()

  if (!trimmed) {
    return {
      success: true,
      data: [],
    }
  }

  const lowercaseInput = trimmed.toLowerCase()

  let extension = lowercaseInput
  if (!extension.startsWith(".")) {
    extension = "." + extension
  }

  const exactMatch = mimeDatabase.find(item => item.extension === extension)
  if (exactMatch) {
    return {
      success: true,
      data: [exactMatch],
    }
  }

  const searchResults = mimeDatabase.filter(
    item =>
      item.extension.toLowerCase().includes(lowercaseInput) ||
      item.mimeType.toLowerCase().includes(lowercaseInput) ||
      item.description.toLowerCase().includes(lowercaseInput) ||
      item.category.toLowerCase().includes(lowercaseInput)
  )

  const limitedResults = searchResults.slice(0, 20)

  return {
    success: true,
    data: limitedResults,
  }
}

export const searchMimeTypes = (query: string): MimeTypeInfo[] => {
  const lowercaseQuery = query.toLowerCase()
  return mimeDatabase.filter(
    item =>
      item.extension.includes(lowercaseQuery) ||
      item.mimeType.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
  )
}

export const getMimeTypesByCategory = (category: string): MimeTypeInfo[] => {
  return mimeDatabase.filter(
    item => item.category.toLowerCase() === category.toLowerCase()
  )
}

export const getAllCategories = (): string[] => {
  return Array.from(new Set(mimeDatabase.map(item => item.category)))
}
