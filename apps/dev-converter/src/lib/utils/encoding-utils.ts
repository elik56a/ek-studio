import { ConversionResult } from "./json-utils"

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
    const trimmedInput = input.trim()
    const isBase64 = /^[A-Za-z0-9+/]*={0,2}$/.test(trimmedInput) && trimmedInput.length % 4 === 0
    
    if (isBase64 && trimmedInput.length > 0) {
      try {
        // Try to decode
        const decoded = atob(trimmedInput)
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
