import Papa from 'papaparse'
import { ConversionResult } from '@/shared/types'

export const csvToJson = (csvInput: string): ConversionResult<string> => {
  if (!csvInput.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const result = Papa.parse(csvInput, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      transformHeader: header => header.trim(),
    })

    if (result.errors.length > 0) {
      const errorMessages = result.errors.map(err => `Row ${err.row}: ${err.message}`).join(', ')
      return {
        success: false,
        error: errorMessages,
      }
    }

    if (!result.data || result.data.length === 0) {
      return {
        success: false,
        error: 'No data found in CSV',
      }
    }

    const jsonOutput = JSON.stringify(result.data, null, 2)

    return {
      success: true,
      data: jsonOutput,
      message: `CSV converted to JSON successfully (${result.data.length} rows)`,
      metadata: {
        rowCount: result.data.length,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to convert CSV to JSON',
    }
  }
}
