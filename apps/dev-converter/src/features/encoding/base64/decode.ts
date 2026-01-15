import { ConversionResult } from "@/shared/types"
import { CharacterEncoding } from "./types"
import { detectBase64, detectBase64Url } from "./detect"
import { validateBase64 } from "./validate"
import { encodeUtf8ToBase64, base64ToBase64Url } from "./encode"

export const decodeBase64ToUtf8 = (base64: string): string => {
  const binaryString = atob(base64)
  const uint8Array = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }
  const decoder = new TextDecoder("utf-8")
  return decoder.decode(uint8Array)
}

export const base64UrlToBase64 = (base64url: string): string => {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/")
  const padding = base64.length % 4
  if (padding > 0) {
    base64 += "=".repeat(4 - padding)
  }
  return base64
}

export const base64Convert = (
  input: string,
  options: {
    useUrlSafe?: boolean
    removePadding?: boolean
    encoding?: CharacterEncoding
  } = {}
): ConversionResult<string> => {
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
    const isBase64Url = detectBase64Url(input)
    const isBase64 = !isBase64Url && detectBase64(input)

    if (isBase64 || isBase64Url) {
      const validation = validateBase64(input, isBase64Url)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || "Invalid Base64 format",
          details: validation.suggestion,
        }
      }

      try {
        const base64Input = isBase64Url
          ? base64UrlToBase64(input.trim())
          : input.trim().replace(/\s/g, "")

        let decoded: string
        if (encoding === "utf8") {
          decoded = decodeBase64ToUtf8(base64Input)
        } else {
          decoded = atob(base64Input)
        }

        return {
          success: true,
          data: decoded,
          message: `Base64${isBase64Url ? "URL" : ""} decoded successfully`,
        }
      } catch (error) {
        try {
          let encoded: string
          if (encoding === "utf8") {
            encoded = encodeUtf8ToBase64(input)
          } else {
            encoded = btoa(input)
          }

          if (useUrlSafe) {
            encoded = base64ToBase64Url(encoded, removePadding)
          } else if (removePadding) {
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
      try {
        let encoded: string
        if (encoding === "utf8") {
          encoded = encodeUtf8ToBase64(input)
        } else {
          encoded = btoa(input)
        }

        if (useUrlSafe) {
          encoded = base64ToBase64Url(encoded, removePadding)
        } else if (removePadding) {
          encoded = encoded.replace(/=+$/, "")
        }

        return {
          success: true,
          data: encoded,
          message: `Text encoded to Base64${useUrlSafe ? "URL" : ""} successfully`,
        }
      } catch (error) {
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
