import yaml from "js-yaml"
import Papa from "papaparse"

export interface ConversionResult<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  details?: string // Additional error details or suggestions
  metadata?: Record<string, any>
}

/**
 * Converts CSV string to JSON format
 * @param csvInput - The CSV string to convert
 * @returns ConversionResult with parsed JSON data or error
 */
export function csvToJson(csvInput: string): ConversionResult<string> {
  if (!csvInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Parse CSV input
    const result = Papa.parse(csvInput, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true, // Automatically convert numbers and booleans
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

    // Convert to formatted JSON
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
      error:
        error instanceof Error
          ? error.message
          : "Failed to convert CSV to JSON",
    }
  }
}

/**
 * Formats JSON string with proper indentation
 * @param jsonInput - The JSON string to format
 * @returns ConversionResult with formatted JSON or error
 */
export function formatJson(jsonInput: string): ConversionResult<string> {
  if (!jsonInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const parsed = JSON.parse(jsonInput)
    const formatted = JSON.stringify(parsed, null, 2)

    return {
      success: true,
      data: formatted,
      message: "JSON formatted successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Invalid JSON",
    }
  }
}

/**
 * Converts JSON string to CSV format
 * @param jsonInput - The JSON string to convert
 * @returns ConversionResult with CSV data or error
 */
export function jsonToCsv(jsonInput: string): ConversionResult<string> {
  if (!jsonInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Parse JSON input
    const jsonData = JSON.parse(jsonInput)

    // Ensure data is an array
    let dataArray: any[]
    if (Array.isArray(jsonData)) {
      dataArray = jsonData
    } else if (typeof jsonData === "object" && jsonData !== null) {
      // If it's a single object, wrap it in an array
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

    // Convert to CSV using PapaParse
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

/**
 * Converts JSON string to YAML format
 * @param jsonInput - The JSON string to convert
 * @returns ConversionResult with YAML data or error
 */
export function jsonToYaml(jsonInput: string): ConversionResult<string> {
  if (!jsonInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Parse JSON input
    const jsonData = JSON.parse(jsonInput)

    // Convert to YAML
    const yamlOutput = yaml.dump(jsonData, {
      indent: 2,
      lineWidth: -1, // Don't wrap lines
      noRefs: true, // Don't use anchors/references
    })

    return {
      success: true,
      data: yamlOutput,
      message: "JSON converted to YAML successfully",
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message.includes("JSON")
            ? error.message
            : `Invalid JSON: ${error.message}`
          : "Failed to convert JSON to YAML",
    }
  }
}

/**
 * Converts YAML string to JSON format
 * @param yamlInput - The YAML string to convert
 * @returns ConversionResult with JSON data or error
 */
export function yamlToJson(yamlInput: string): ConversionResult<string> {
  if (!yamlInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    // Parse YAML input
    const yamlData = yaml.load(yamlInput)

    // Convert to formatted JSON
    const jsonOutput = JSON.stringify(yamlData, null, 2)

    return {
      success: true,
      data: jsonOutput,
      message: "YAML converted to JSON successfully",
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? `Invalid YAML: ${error.message}`
          : "Failed to convert YAML to JSON",
    }
  }
}
