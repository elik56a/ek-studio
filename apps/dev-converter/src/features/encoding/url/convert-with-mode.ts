import { ConversionResult } from "@/shared/types"

import { urlEncodeDecode } from "./convert"
import { decodeUrl } from "./decode"
import { encodeUrl } from "./encode"
import { UrlEncodeMode } from "./types"

export const urlEncodeDecodeWithMode = (
  input: string,
  mode: UrlEncodeMode = "auto"
): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    switch (mode) {
      case "encode":
        return encodeUrl(input)
      case "decode":
        return decodeUrl(input)
      case "auto":
      default:
        return urlEncodeDecode(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
      details: "An unexpected error occurred during conversion.",
    }
  }
}
