import Papa from "papaparse"

import { ConversionResult } from "@/shared/types"

export const jsonToCsv = (jsonInput: string): ConversionResult<string> => {
  if (!jsonInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const jsonData = JSON.parse(jsonInput)

    let dataArray: any[]
    if (Array.isArray(jsonData)) {
      dataArray = jsonData
    } else if (typeof jsonData === "object" && jsonData !== null) {
      dataArray = [jsonData]
    } else {
      return {
        success: false,
        error: "JSON must be an array or object",
      }
    }

    if (dataArray.length === 0) {
      return {
        success: false,
        error: "JSON array is empty",
      }
    }

    const csvOutput = Papa.unparse(dataArray, {
      header: true,
      skipEmptyLines: true,
    })

    return {
      success: true,
      data: csvOutput,
      message: `JSON converted to CSV successfully (${dataArray.length} rows)`,
      metadata: {
        rowCount: dataArray.length,
      },
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message.includes("JSON")
            ? error.message
            : `Invalid JSON: ${error.message}`
          : "Failed to convert JSON to CSV",
    }
  }
}
