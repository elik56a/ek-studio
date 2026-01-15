import { ConversionResult } from "@/shared/types"

export const fileToBase64 = async (
  file: File
): Promise<ConversionResult<string>> => {
  try {
    return new Promise(resolve => {
      const reader = new FileReader()

      reader.onload = () => {
        const result = reader.result as string
        const base64 = result.split(",")[1]

        resolve({
          success: true,
          data: base64,
          message: `File converted to Base64 successfully`,
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
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}
