import { ConversionResult } from "@/shared/types"

export const generateUUIDs = (count: number = 1): ConversionResult<string> => {
  if (count < 1 || count > 100) {
    return {
      success: false,
      error: "Count must be between 1 and 100",
    }
  }

  try {
    const uuids: string[] = []

    for (let i = 0; i < count; i++) {
      uuids.push(crypto.randomUUID())
    }

    return {
      success: true,
      data: uuids.join("\n"),
      message: `Generated ${count} UUID${count > 1 ? "s" : ""} successfully`,
      metadata: {
        count,
      },
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to generate UUIDs",
    }
  }
}
