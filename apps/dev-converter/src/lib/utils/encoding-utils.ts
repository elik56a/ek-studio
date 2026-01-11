import { ConversionResult } from "./json-utils"

/**
 * Detects if input appears to be Base64 encoded
 * @param input - The input string to check
 * @returns true if input looks like Base64
 */
export function detectBase64(input: string): boolean {
  if (!input.trim()) return false
  const trimmedInput = input.trim()
  return (
    /^[A-Za-z0-9+/]*={0,2}$/.test(trimmedInput) && trimmedInput.length % 4 === 0
  )
}

/**
 * Detects if input appears to be URL encoded
 * @param input - The input string to check
 * @returns true if input looks like URL encoded text
 */
export function detectUrlEncoded(input: string): boolean {
  if (!input.trim()) return false
  return /%[0-9A-Fa-f]{2}/.test(input)
}

/**
 * Detects if input appears to be HTML escaped
 * @param input - The input string to check
 * @returns true if input looks like HTML escaped text
 */
export function detectHtmlEscaped(input: string): boolean {
  if (!input.trim()) return false
  return /&[a-zA-Z]+;|&#\d+;|&#x[0-9A-Fa-f]+;/.test(input)
}

/**
 * Detects if input appears to be JSON escaped
 * @param input - The input string to check
 * @returns true if input looks like JSON escaped text
 */
export function detectJsonEscaped(input: string): boolean {
  if (!input.trim()) return false
  return /\\["\\/bfnrtu]/.test(input)
}

/**
 * Encodes text to Base64 or decodes Base64 to text (auto-detects)
 * @param input - The text to encode or Base64 string to decode
 * @returns ConversionResult with encoded/decoded data or error
 */
export function base64Convert(input: string): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Detect if input is Base64 (decode) or plain text (encode)
    const isBase64 = detectBase64(input)

    if (isBase64) {
      try {
        // Try to decode
        const decoded = atob(input.trim())
        return {
          success: true,
          data: decoded,
          message: "Base64 decoded successfully",
        }
      } catch {
        // If decode fails, treat as plain text and encode
        const encoded = btoa(input)
        return {
          success: true,
          data: encoded,
          message: "Text encoded to Base64 successfully",
        }
      }
    } else {
      // Encode to Base64
      const encoded = btoa(input)
      return {
        success: true,
        data: encoded,
        message: "Text encoded to Base64 successfully",
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Encodes URL or decodes URL-encoded text (auto-detects)
 * @param input - The URL to encode or encoded URL to decode
 * @returns ConversionResult with encoded/decoded data or error
 */
export function urlEncodeDecode(input: string): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Detect if input is URL-encoded (contains % followed by hex digits)
    const isEncoded = detectUrlEncoded(input)

    if (isEncoded) {
      try {
        // Try to decode
        const decoded = decodeURIComponent(input)
        return {
          success: true,
          data: decoded,
          message: "URL decoded successfully",
        }
      } catch {
        // If decode fails, encode it
        const encoded = encodeURIComponent(input)
        return {
          success: true,
          data: encoded,
          message: "URL encoded successfully",
        }
      }
    } else {
      // Encode the URL
      const encoded = encodeURIComponent(input)
      return {
        success: true,
        data: encoded,
        message: "URL encoded successfully",
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Escapes HTML or unescapes HTML entities (auto-detects)
 * @param input - The HTML to escape or HTML entities to unescape
 * @returns ConversionResult with escaped/unescaped data or error
 */
export function htmlEscapeUnescape(input: string): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const isEscaped = detectHtmlEscaped(input)

    if (isEscaped) {
      // Unescape HTML entities
      const textarea = document.createElement("textarea")
      textarea.innerHTML = input
      const unescaped = textarea.value

      return {
        success: true,
        data: unescaped,
        message: "HTML unescaped successfully",
      }
    } else {
      // Escape HTML
      const escaped = input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")

      return {
        success: true,
        data: escaped,
        message: "HTML escaped successfully",
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Escapes text for JSON or unescapes JSON-encoded text (auto-detects)
 * @param input - The text to escape or JSON string to unescape
 * @returns ConversionResult with escaped/unescaped data or error
 */
export function jsonEscapeUnescape(input: string): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const isEscaped = detectJsonEscaped(input)

    if (isEscaped) {
      // Unescape JSON string
      try {
        // Wrap in quotes and parse to unescape
        const unescaped = JSON.parse(`"${input}"`)
        return {
          success: true,
          data: unescaped,
          message: "JSON unescaped successfully",
        }
      } catch {
        // If that fails, try parsing as-is
        const unescaped = JSON.parse(input)
        return {
          success: true,
          data:
            typeof unescaped === "string"
              ? unescaped
              : JSON.stringify(unescaped),
          message: "JSON unescaped successfully",
        }
      }
    } else {
      // Escape for JSON
      const escaped = JSON.stringify(input).slice(1, -1) // Remove surrounding quotes

      return {
        success: true,
        data: escaped,
        message: "Text escaped for JSON successfully",
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Converts a file to Base64 data URL
 * @param file - The file to convert
 * @returns Promise<ConversionResult<string>> with Base64 data URL or error
 */
export function fileToBase64(file: File): Promise<ConversionResult<string>> {
  return new Promise(resolve => {
    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      resolve({
        success: false,
        error: "File size must be less than 10MB",
      })
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result as string
      resolve({
        success: true,
        data: result,
        message: `File converted to Base64 successfully (${(file.size / 1024).toFixed(2)} KB)`,
      })
    }

    reader.onerror = () => {
      resolve({
        success: false,
        error: "Failed to read file",
      })
    }

    reader.readAsDataURL(file)
  })
}

/**
 * Converts an image file to Base64 data URL
 * @param file - The image file to convert
 * @returns Promise<ConversionResult<string>> with Base64 data URL or error
 * @deprecated Use fileToBase64 instead
 */
export function imageToBase64(file: File): Promise<ConversionResult<string>> {
  return fileToBase64(file)
}
