import Papa from "papaparse"

import { ConversionResult } from "@/shared/types"

export interface CsvToJsonOptions {
  hasHeaders?: boolean
  outputFormat?: "array" | "object"
}

export const csvToJson = (
  csvInput: string,
  options: CsvToJsonOptions = {}
): ConversionResult<string> => {
  const { hasHeaders = true, outputFormat = "array" } = options

  if (!csvInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const result = Papa.parse(csvInput, {
      header: hasHeaders,
      skipEmptyLines: true,
      dynamicTyping: true,
      transformHeader: header => header.trim(),
    })

    if (result.errors.length > 0) {
      const errorMessages = result.errors
        .map(err => `Row ${err.row}: ${err.message}`)
        .join(", ")
      return {
        success: false,
        error: errorMessages,
      }
    }

    if (!result.data || result.data.length === 0) {
      return {
        success: false,
        error: "No data found in CSV",
      }
    }

    let outputData: unknown = result.data

    // Convert to object format if requested
    if (outputFormat === "object" && hasHeaders) {
      // Convert array of objects to a single object with row indices as keys
      const dataArray = result.data as Array<Record<string, unknown>>
      outputData = dataArray.reduce((acc, row, index) => {
        acc[`row_${index + 1}`] = row
        return acc
      }, {} as Record<string, Record<string, unknown>>)
    }

    const jsonOutput = JSON.stringify(outputData, null, 2)

    return {
      success: true,
      data: jsonOutput,
      message: `CSV converted to JSON successfully (${result.data.length} rows)`,
      metadata: {
        rowCount: result.data.length,
        hasHeaders,
        outputFormat,
      },
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to convert CSV to JSON",
    }
  }
}
