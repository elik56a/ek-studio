import { ConversionResult } from "@/shared/types"

export const decodeJWT = (token: string): ConversionResult<string> => {
  if (!token.trim()) {
    return {
      success: false,
      error: "JWT token is empty",
    }
  }

  try {
    const parts = token.trim().split(".")

    if (parts.length !== 3) {
      return {
        success: false,
        error: "Invalid JWT format. JWT must have 3 parts separated by dots.",
      }
    }

    const [headerB64, payloadB64, signature] = parts

    const header = JSON.parse(
      atob(headerB64.replace(/-/g, "+").replace(/_/g, "/"))
    )

    const payload = JSON.parse(
      atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"))
    )

    const decoded = {
      header,
      payload,
      signature,
    }

    return {
      success: true,
      data: JSON.stringify(decoded, null, 2),
      message: "JWT decoded successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to decode JWT",
    }
  }
}
