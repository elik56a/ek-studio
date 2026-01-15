import yaml from "js-yaml"

import { ConversionResult } from "@/shared/types"

export const yamlToJson = (yamlInput: string): ConversionResult<string> => {
  if (!yamlInput.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const yamlData = yaml.load(yamlInput)

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
