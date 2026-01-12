import { ConversionResult } from "./json-utils"

/**
 * Detects if input appears to be Base64 encoded (standard)
 * @param input - The input string to check
 * @returns true if input looks like standard Base64
 */
export function detectBase64(input: string): boolean {
  if (!input.trim()) return false
  const trimmedInput = input.trim()
  // Standard Base64 uses +, /, and = for padding
  // Must be multiple of 4 in length
  return (
    /^[A-Za-z0-9+/]*={0,2}$/.test(trimmedInput) &&
    trimmedInput.length % 4 === 0 &&
    // Ensure it's not just plain text (must have some Base64 characteristics)
    (trimmedInput.length >= 4 || trimmedInput.includes("="))
  )
}

/**
 * Detects if input appears to be Base64URL encoded (JWT-compatible)
 * @param input - The input string to check
 * @returns true if input looks like Base64URL
 */
export function detectBase64Url(input: string): boolean {
  if (!input.trim()) return false
  const trimmedInput = input.trim()
  // Base64URL uses - and _ instead of + and /, and typically no padding
  // Must contain at least one Base64URL specific character or be long enough
  return (
    /^[A-Za-z0-9_-]+$/.test(trimmedInput) &&
    trimmedInput.length >= 4 &&
    // Must contain at least one - or _ to distinguish from plain text
    (/[-_]/.test(trimmedInput) || trimmedInput.length > 20)
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
 * Validates Base64 input and provides detailed error information
 * @param input - The Base64 string to validate
 * @param isUrlSafe - Whether to validate as Base64URL (JWT-compatible)
 * @returns Validation result with specific error details
 */
function validateBase64(
  input: string,
  isUrlSafe: boolean = false
): {
  isValid: boolean
  error?: string
  suggestion?: string
} {
  const trimmed = input.trim()

  if (isUrlSafe) {
    // Base64URL validation
    const invalidChars = trimmed.match(/[^A-Za-z0-9_-]/g)
    if (invalidChars) {
      const uniqueChars = [...new Set(invalidChars)].join(", ")
      return {
        isValid: false,
        error: `Invalid Base64URL characters detected: ${uniqueChars}`,
        suggestion:
          "Base64URL only uses A-Z, a-z, 0-9, -, and _. No padding (=) is used. Remove or replace invalid characters.",
      }
    }
    // Base64URL doesn't require length to be multiple of 4 (no padding)
    return { isValid: true }
  }

  // Standard Base64 validation
  const invalidChars = trimmed.match(/[^A-Za-z0-9+/=\s]/g)
  if (invalidChars) {
    const uniqueChars = [...new Set(invalidChars)].join(", ")
    return {
      isValid: false,
      error: `Invalid Base64 characters detected: ${uniqueChars}`,
      suggestion:
        "Base64 only uses A-Z, a-z, 0-9, +, /, and = for padding. Remove or replace invalid characters.",
    }
  }

  // Remove whitespace for validation
  const cleaned = trimmed.replace(/\s/g, "")

  // Check length (must be multiple of 4)
  if (cleaned.length % 4 !== 0) {
    const remainder = cleaned.length % 4
    const missing = 4 - remainder
    return {
      isValid: false,
      error: `Invalid Base64 length: ${cleaned.length} characters (not a multiple of 4)`,
      suggestion: `Add ${missing} padding character${missing > 1 ? "s" : ""} (=) to make the length a multiple of 4, or remove ${remainder} character${remainder > 1 ? "s" : ""}.`,
    }
  }

  // Check padding position (= can only be at the end)
  const paddingIndex = cleaned.indexOf("=")
  if (paddingIndex !== -1 && paddingIndex < cleaned.length - 2) {
    return {
      isValid: false,
      error: "Invalid padding: = characters must only appear at the end",
      suggestion:
        "Move padding (=) to the end of the string or remove it entirely.",
    }
  }

  // Check for too much padding
  const paddingCount = (cleaned.match(/=/g) || []).length
  if (paddingCount > 2) {
    return {
      isValid: false,
      error: `Too many padding characters: ${paddingCount} (maximum is 2)`,
      suggestion: "Base64 strings can have at most 2 padding characters (=).",
    }
  }

  // Check if padding is followed by non-padding characters
  if (paddingIndex !== -1) {
    const afterPadding = cleaned.slice(paddingIndex)
    if (!/^=+$/.test(afterPadding)) {
      return {
        isValid: false,
        error: "Invalid padding: characters found after padding",
        suggestion: "Remove any characters after the padding (=) characters.",
      }
    }
  }

  return { isValid: true }
}

/**
 * Converts standard Base64 to Base64URL (JWT-compatible)
 * @param base64 - Standard Base64 string
 * @param removePadding - Whether to remove padding
 * @returns Base64URL string
 */
function base64ToBase64Url(
  base64: string,
  removePadding: boolean = true
): string {
  let result = base64.replace(/\+/g, "-").replace(/\//g, "_")
  if (removePadding) {
    result = result.replace(/=+$/, "")
  }
  return result
}

/**
 * Converts Base64URL to standard Base64
 * @param base64url - Base64URL string
 * @returns Standard Base64 string
 */
function base64UrlToBase64(base64url: string): string {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/")
  // Add padding if needed
  const padding = base64.length % 4
  if (padding > 0) {
    base64 += "=".repeat(4 - padding)
  }
  return base64
}

/**
 * Encodes a string to Base64 using UTF-8 encoding
 * @param str - The string to encode
 * @returns Base64 encoded string
 */
function encodeUtf8ToBase64(str: string): string {
  // Use TextEncoder for proper UTF-8 encoding
  const encoder = new TextEncoder()
  const uint8Array = encoder.encode(str)
  // Convert Uint8Array to binary string
  let binaryString = ""
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i])
  }
  return btoa(binaryString)
}

/**
 * Decodes a Base64 string using UTF-8 decoding
 * @param base64 - The Base64 string to decode
 * @returns Decoded string
 */
function decodeBase64ToUtf8(base64: string): string {
  // Decode base64 to binary string
  const binaryString = atob(base64)
  // Convert binary string to Uint8Array
  const uint8Array = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }
  // Use TextDecoder for proper UTF-8 decoding
  const decoder = new TextDecoder("utf-8")
  return decoder.decode(uint8Array)
}

export type CharacterEncoding = "utf8" | "binary"

/**
 * Encodes text to Base64 or decodes Base64 to text (auto-detects)
 * @param input - The text to encode or Base64 string to decode
 * @param options - Encoding options
 * @returns ConversionResult with encoded/decoded data or error
 */
export function base64Convert(
  input: string,
  options: {
    useUrlSafe?: boolean
    removePadding?: boolean
    encoding?: CharacterEncoding
  } = {}
): ConversionResult<string> {
  const {
    useUrlSafe = false,
    removePadding = false,
    encoding = "utf8",
  } = options

  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Detect if input is Base64URL first (more specific), then standard Base64
    const isBase64Url = detectBase64Url(input)
    const isBase64 = !isBase64Url && detectBase64(input)

    if (isBase64 || isBase64Url) {
      // Validate Base64 before attempting to decode
      const validation = validateBase64(input, isBase64Url)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid Base64 format",
          details: validation.suggestion,
        }
      }

      try {
        // Convert Base64URL to standard Base64 if needed
        const base64Input = isBase64Url
          ? base64UrlToBase64(input.trim())
          : input.trim().replace(/\s/g, "")

        // Try to decode based on encoding type
        let decoded: string
        if (encoding === "utf8") {
          decoded = decodeBase64ToUtf8(base64Input)
        } else {
          // Binary (Latin1) - direct atob
          decoded = atob(base64Input)
        }

        return {
          success: true,
          data: decoded,
          message: `Base64${isBase64Url ? "URL" : ""} decoded successfully`,
        }
      } catch (error) {
        // If decode fails, treat as plain text to encode instead
        try {
          let encoded: string
          if (encoding === "utf8") {
            encoded = encodeUtf8ToBase64(input)
          } else {
            // Binary (Latin1) - direct btoa
            encoded = btoa(input)
          }

          // Apply URL-safe conversion if needed
          if (useUrlSafe) {
            encoded = base64ToBase64Url(encoded, removePadding)
          } else if (removePadding) {
            // Remove padding even for standard Base64 if requested
            encoded = encoded.replace(/=+$/, "")
          }

          return {
            success: true,
            data: encoded,
            message: `Text encoded to Base64${useUrlSafe ? "URL" : ""} successfully`,
          }
        } catch (encodeError) {
          return {
            success: false,
            error: "Failed to encode to Base64",
            details:
              "The input contains characters that cannot be encoded with the selected character encoding.",
          }
        }
      }
    } else {
      // Encode to Base64
      try {
        let encoded: string
        if (encoding === "utf8") {
          encoded = encodeUtf8ToBase64(input)
        } else {
          // Binary (Latin1) - direct btoa
          encoded = btoa(input)
        }

        // Apply URL-safe conversion if needed
        if (useUrlSafe) {
          encoded = base64ToBase64Url(encoded, removePadding)
        } else if (removePadding) {
          // Remove padding even for standard Base64 if requested
          encoded = encoded.replace(/=+$/, "")
        }

        return {
          success: true,
          data: encoded,
          message: `Text encoded to Base64${useUrlSafe ? "URL" : ""} successfully`,
        }
      } catch (error) {
        // Handle encoding errors (e.g., invalid Unicode characters)
        return {
          success: false,
          error: "Failed to encode to Base64",
          details:
            "The input contains characters that cannot be encoded with the selected character encoding.",
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}

/**
 * Validates URL-encoded input and provides detailed error information
 * @param input - The URL-encoded string to validate
 * @returns Validation result with specific error details
 */
function validateUrlEncoded(input: string): {
  isValid: boolean
  error?: string
  suggestion?: string
} {
  // Check for malformed percent encoding
  const malformedPattern = /%(?![0-9A-Fa-f]{2})/g
  const malformed = input.match(malformedPattern)
  if (malformed) {
    return {
      isValid: false,
      error: "Malformed percent encoding detected",
      suggestion:
        "Percent signs (%) must be followed by exactly 2 hexadecimal digits (0-9, A-F). Fix incomplete sequences like %2 or %G.",
    }
  }

  // Check for invalid hex sequences
  const invalidHex = input.match(/%[^0-9A-Fa-f]{2}/g)
  if (invalidHex) {
    return {
      isValid: false,
      error: `Invalid hexadecimal sequences: ${invalidHex.join(", ")}`,
      suggestion:
        "Percent encoding must use valid hex digits (0-9, A-F). Replace invalid sequences.",
    }
  }

  return { isValid: true }
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
      // Validate URL encoding before attempting to decode
      const validation = validateUrlEncoded(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid URL encoding",
          details: validation.suggestion,
        }
      }

      try {
        // Try to decode
        const decoded = decodeURIComponent(input)
        return {
          success: true,
          data: decoded,
          message: "URL decoded successfully",
        }
      } catch (error) {
        const errorMsg =
          error instanceof Error ? error.message : "Decode failed"
        return {
          success: false,
          error: "Failed to decode URL",
          details: `${errorMsg}. The string may contain invalid UTF-8 sequences or corrupted encoding.`,
        }
      }
    } else {
      // Encode the URL
      try {
        const encoded = encodeURIComponent(input)
        return {
          success: true,
          data: encoded,
          message: "URL encoded successfully",
        }
      } catch (error) {
        return {
          success: false,
          error: "Failed to encode URL",
          details:
            "The input contains characters that cannot be encoded. Try removing special Unicode characters.",
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}

/**
 * Validates HTML-escaped input and provides detailed error information
 * @param input - The HTML-escaped string to validate
 * @returns Validation result with specific error details
 */
function validateHtmlEscaped(input: string): {
  isValid: boolean
  error?: string
  suggestion?: string
} {
  // Check for incomplete entities (& without ;)
  const incompleteEntities = input.match(/&[a-zA-Z0-9#]+(?!;)/g)
  if (incompleteEntities) {
    const examples = incompleteEntities.slice(0, 3).join(", ")
    return {
      isValid: false,
      error: `Incomplete HTML entities detected: ${examples}${incompleteEntities.length > 3 ? "..." : ""}`,
      suggestion:
        "HTML entities must end with a semicolon (;). Add missing semicolons or escape the & character as &amp;.",
    }
  }

  // Check for invalid numeric entities
  const invalidNumeric = input.match(/&#[^0-9;]/g)
  if (invalidNumeric) {
    return {
      isValid: false,
      error: "Invalid numeric HTML entities detected",
      suggestion:
        "Numeric entities must use &#digits; or &#xHEX; format. Fix malformed sequences.",
    }
  }

  return { isValid: true }
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
      // Validate HTML entities before attempting to unescape
      const validation = validateHtmlEscaped(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid HTML entities",
          details: validation.suggestion,
        }
      }

      try {
        // Unescape HTML entities
        const textarea = document.createElement("textarea")
        textarea.innerHTML = input
        const unescaped = textarea.value

        return {
          success: true,
          data: unescaped,
          message: "HTML unescaped successfully",
        }
      } catch (error) {
        return {
          success: false,
          error: "Failed to unescape HTML",
          details:
            "The input contains malformed HTML entities that cannot be decoded.",
        }
      }
    } else {
      // Escape HTML
      try {
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
      } catch (error) {
        return {
          success: false,
          error: "Failed to escape HTML",
          details: "An unexpected error occurred during HTML escaping.",
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}

/**
 * Validates JSON-escaped input and provides detailed error information
 * @param input - The JSON-escaped string to validate
 * @returns Validation result with specific error details
 */
function validateJsonEscaped(input: string): {
  isValid: boolean
  error?: string
  suggestion?: string
} {
  // Check for invalid escape sequences
  const invalidEscapes = input.match(/\\[^"\\/bfnrtu]/g)
  if (invalidEscapes) {
    const uniqueEscapes = [...new Set(invalidEscapes)].join(", ")
    return {
      isValid: false,
      error: `Invalid JSON escape sequences: ${uniqueEscapes}`,
      suggestion:
        'Valid JSON escapes are: \\", \\\\, \\/, \\b, \\f, \\n, \\r, \\t, and \\uXXXX. Fix or remove invalid sequences.',
    }
  }

  // Check for incomplete unicode escapes
  const incompleteUnicode = input.match(/\\u(?![0-9A-Fa-f]{4})/g)
  if (incompleteUnicode) {
    return {
      isValid: false,
      error: "Incomplete Unicode escape sequences detected",
      suggestion:
        "Unicode escapes must be in the format \\uXXXX with exactly 4 hexadecimal digits (e.g., \\u0041).",
    }
  }

  // Check for unescaped control characters
  const controlChars = input.match(/[\x00-\x1F]/g)
  if (controlChars) {
    return {
      isValid: false,
      error: "Unescaped control characters detected",
      suggestion:
        "Control characters (0x00-0x1F) must be escaped in JSON strings. Use escape sequences like \\n, \\t, or \\uXXXX.",
    }
  }

  return { isValid: true }
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
      // Validate JSON escaping before attempting to unescape
      const validation = validateJsonEscaped(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid JSON escape sequences",
          details: validation.suggestion,
        }
      }

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
        try {
          const unescaped = JSON.parse(input)
          return {
            success: true,
            data:
              typeof unescaped === "string"
                ? unescaped
                : JSON.stringify(unescaped),
            message: "JSON unescaped successfully",
          }
        } catch (error) {
          const errorMsg =
            error instanceof Error ? error.message : "Parse failed"
          return {
            success: false,
            error: "Failed to unescape JSON",
            details: `${errorMsg}. The string contains invalid JSON escape sequences or syntax errors.`,
          }
        }
      }
    } else {
      // Escape for JSON
      try {
        const escaped = JSON.stringify(input).slice(1, -1) // Remove surrounding quotes

        return {
          success: true,
          data: escaped,
          message: "Text escaped for JSON successfully",
        }
      } catch (error) {
        return {
          success: false,
          error: "Failed to escape for JSON",
          details:
            "The input contains characters that cannot be serialized to JSON.",
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
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
