import { ConversionResult } from "./json-utils"

export interface MimeTypeInfo {
  extension: string
  mimeType: string
  description: string
  category: string
}

// Comprehensive MIME type database
const mimeDatabase: MimeTypeInfo[] = [
  // Images
  {
    extension: ".jpg",
    mimeType: "image/jpeg",
    description: "JPEG Image",
    category: "Image",
  },
  {
    extension: ".jpeg",
    mimeType: "image/jpeg",
    description: "JPEG Image",
    category: "Image",
  },
  {
    extension: ".png",
    mimeType: "image/png",
    description: "PNG Image",
    category: "Image",
  },
  {
    extension: ".gif",
    mimeType: "image/gif",
    description: "GIF Image",
    category: "Image",
  },
  {
    extension: ".svg",
    mimeType: "image/svg+xml",
    description: "SVG Vector Image",
    category: "Image",
  },
  {
    extension: ".webp",
    mimeType: "image/webp",
    description: "WebP Image",
    category: "Image",
  },
  {
    extension: ".ico",
    mimeType: "image/x-icon",
    description: "Icon",
    category: "Image",
  },
  {
    extension: ".bmp",
    mimeType: "image/bmp",
    description: "Bitmap Image",
    category: "Image",
  },
  {
    extension: ".tiff",
    mimeType: "image/tiff",
    description: "TIFF Image",
    category: "Image",
  },

  // Documents
  {
    extension: ".pdf",
    mimeType: "application/pdf",
    description: "PDF Document",
    category: "Document",
  },
  {
    extension: ".doc",
    mimeType: "application/msword",
    description: "Microsoft Word Document",
    category: "Document",
  },
  {
    extension: ".docx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    description: "Microsoft Word Document (OpenXML)",
    category: "Document",
  },
  {
    extension: ".xls",
    mimeType: "application/vnd.ms-excel",
    description: "Microsoft Excel Spreadsheet",
    category: "Document",
  },
  {
    extension: ".xlsx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    description: "Microsoft Excel Spreadsheet (OpenXML)",
    category: "Document",
  },
  {
    extension: ".ppt",
    mimeType: "application/vnd.ms-powerpoint",
    description: "Microsoft PowerPoint Presentation",
    category: "Document",
  },
  {
    extension: ".pptx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    description: "Microsoft PowerPoint Presentation (OpenXML)",
    category: "Document",
  },
  {
    extension: ".odt",
    mimeType: "application/vnd.oasis.opendocument.text",
    description: "OpenDocument Text",
    category: "Document",
  },
  {
    extension: ".ods",
    mimeType: "application/vnd.oasis.opendocument.spreadsheet",
    description: "OpenDocument Spreadsheet",
    category: "Document",
  },

  // Text
  {
    extension: ".txt",
    mimeType: "text/plain",
    description: "Plain Text",
    category: "Text",
  },
  {
    extension: ".html",
    mimeType: "text/html",
    description: "HTML Document",
    category: "Text",
  },
  {
    extension: ".htm",
    mimeType: "text/html",
    description: "HTML Document",
    category: "Text",
  },
  {
    extension: ".css",
    mimeType: "text/css",
    description: "CSS Stylesheet",
    category: "Text",
  },
  {
    extension: ".csv",
    mimeType: "text/csv",
    description: "CSV File",
    category: "Text",
  },
  {
    extension: ".xml",
    mimeType: "application/xml",
    description: "XML Document",
    category: "Text",
  },
  {
    extension: ".md",
    mimeType: "text/markdown",
    description: "Markdown Document",
    category: "Text",
  },

  // Video
  {
    extension: ".mp4",
    mimeType: "video/mp4",
    description: "MP4 Video",
    category: "Video",
  },
  {
    extension: ".avi",
    mimeType: "video/x-msvideo",
    description: "AVI Video",
    category: "Video",
  },
  {
    extension: ".mov",
    mimeType: "video/quicktime",
    description: "QuickTime Video",
    category: "Video",
  },
  {
    extension: ".wmv",
    mimeType: "video/x-ms-wmv",
    description: "Windows Media Video",
    category: "Video",
  },
  {
    extension: ".webm",
    mimeType: "video/webm",
    description: "WebM Video",
    category: "Video",
  },
  {
    extension: ".mkv",
    mimeType: "video/x-matroska",
    description: "Matroska Video",
    category: "Video",
  },
  {
    extension: ".flv",
    mimeType: "video/x-flv",
    description: "Flash Video",
    category: "Video",
  },

  // Audio
  {
    extension: ".mp3",
    mimeType: "audio/mpeg",
    description: "MP3 Audio",
    category: "Audio",
  },
  {
    extension: ".wav",
    mimeType: "audio/wav",
    description: "WAV Audio",
    category: "Audio",
  },
  {
    extension: ".ogg",
    mimeType: "audio/ogg",
    description: "OGG Audio",
    category: "Audio",
  },
  {
    extension: ".m4a",
    mimeType: "audio/mp4",
    description: "M4A Audio",
    category: "Audio",
  },
  {
    extension: ".flac",
    mimeType: "audio/flac",
    description: "FLAC Audio",
    category: "Audio",
  },
  {
    extension: ".aac",
    mimeType: "audio/aac",
    description: "AAC Audio",
    category: "Audio",
  },

  // Archives
  {
    extension: ".zip",
    mimeType: "application/zip",
    description: "ZIP Archive",
    category: "Archive",
  },
  {
    extension: ".rar",
    mimeType: "application/vnd.rar",
    description: "RAR Archive",
    category: "Archive",
  },
  {
    extension: ".7z",
    mimeType: "application/x-7z-compressed",
    description: "7-Zip Archive",
    category: "Archive",
  },
  {
    extension: ".tar",
    mimeType: "application/x-tar",
    description: "TAR Archive",
    category: "Archive",
  },
  {
    extension: ".gz",
    mimeType: "application/gzip",
    description: "GZIP Archive",
    category: "Archive",
  },

  // Programming
  {
    extension: ".js",
    mimeType: "text/javascript",
    description: "JavaScript File",
    category: "Programming",
  },
  {
    extension: ".json",
    mimeType: "application/json",
    description: "JSON File",
    category: "Programming",
  },
  {
    extension: ".ts",
    mimeType: "text/typescript",
    description: "TypeScript File",
    category: "Programming",
  },
  {
    extension: ".jsx",
    mimeType: "text/jsx",
    description: "JSX File",
    category: "Programming",
  },
  {
    extension: ".tsx",
    mimeType: "text/tsx",
    description: "TSX File",
    category: "Programming",
  },
  {
    extension: ".py",
    mimeType: "text/x-python",
    description: "Python File",
    category: "Programming",
  },
  {
    extension: ".java",
    mimeType: "text/x-java-source",
    description: "Java File",
    category: "Programming",
  },
  {
    extension: ".php",
    mimeType: "application/x-httpd-php",
    description: "PHP File",
    category: "Programming",
  },
  {
    extension: ".rb",
    mimeType: "text/x-ruby",
    description: "Ruby File",
    category: "Programming",
  },
  {
    extension: ".go",
    mimeType: "text/x-go",
    description: "Go File",
    category: "Programming",
  },
  {
    extension: ".rs",
    mimeType: "text/x-rust",
    description: "Rust File",
    category: "Programming",
  },
  {
    extension: ".c",
    mimeType: "text/x-c",
    description: "C File",
    category: "Programming",
  },
  {
    extension: ".cpp",
    mimeType: "text/x-c++",
    description: "C++ File",
    category: "Programming",
  },
  {
    extension: ".sh",
    mimeType: "application/x-sh",
    description: "Shell Script",
    category: "Programming",
  },
  {
    extension: ".yaml",
    mimeType: "application/x-yaml",
    description: "YAML File",
    category: "Programming",
  },
  {
    extension: ".yml",
    mimeType: "application/x-yaml",
    description: "YAML File",
    category: "Programming",
  },

  // Fonts
  {
    extension: ".ttf",
    mimeType: "font/ttf",
    description: "TrueType Font",
    category: "Font",
  },
  {
    extension: ".otf",
    mimeType: "font/otf",
    description: "OpenType Font",
    category: "Font",
  },
  {
    extension: ".woff",
    mimeType: "font/woff",
    description: "WOFF Font",
    category: "Font",
  },
  {
    extension: ".woff2",
    mimeType: "font/woff2",
    description: "WOFF2 Font",
    category: "Font",
  },

  // Other
  {
    extension: ".bin",
    mimeType: "application/octet-stream",
    description: "Binary File",
    category: "Other",
  },
  {
    extension: ".exe",
    mimeType: "application/vnd.microsoft.portable-executable",
    description: "Windows Executable",
    category: "Other",
  },
  {
    extension: ".apk",
    mimeType: "application/vnd.android.package-archive",
    description: "Android Package",
    category: "Other",
  },
]

/**
 * Lookup MIME type information for a file extension or search term
 * @param input - File extension or search term
 * @returns ConversionResult with MIME type information or error
 */
export function lookupMimeType(
  input: string
): ConversionResult<MimeTypeInfo[]> {
  const trimmed = input.trim()

  // Return empty array for empty input
  if (!trimmed) {
    return {
      success: true,
      data: [],
    }
  }

  const lowercaseInput = trimmed.toLowerCase()

  // First, try exact extension match (with or without dot)
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

  // If no exact match, search across all fields
  const searchResults = mimeDatabase.filter(
    item =>
      item.extension.toLowerCase().includes(lowercaseInput) ||
      item.mimeType.toLowerCase().includes(lowercaseInput) ||
      item.description.toLowerCase().includes(lowercaseInput) ||
      item.category.toLowerCase().includes(lowercaseInput)
  )

  // Limit results to prevent overwhelming display
  const limitedResults = searchResults.slice(0, 20)

  return {
    success: true,
    data: limitedResults,
  }
}

/**
 * Search for MIME types by keyword
 * @param query - Search query
 * @returns Array of matching MIME type info
 */
export function searchMimeTypes(query: string): MimeTypeInfo[] {
  const lowercaseQuery = query.toLowerCase()
  return mimeDatabase.filter(
    item =>
      item.extension.includes(lowercaseQuery) ||
      item.mimeType.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
  )
}

/**
 * Get all MIME types by category
 * @param category - Category name
 * @returns Array of MIME type info for the category
 */
export function getMimeTypesByCategory(category: string): MimeTypeInfo[] {
  return mimeDatabase.filter(
    item => item.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Get all available categories
 * @returns Array of unique category names
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(mimeDatabase.map(item => item.category)))
}
