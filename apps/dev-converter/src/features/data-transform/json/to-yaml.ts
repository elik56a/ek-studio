import yaml from 'js-yaml'
import { ConversionResult } from '@/shared/types'

export const jsonToYaml = (jsonInput: string): ConversionResult<string> => {
  if (!jsonInput.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const jsonData = JSON.parse(jsonInput)

    const yamlOutput = yaml.dump(jsonData, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    })

    return {
      success: true,
      data: yamlOutput,
      message: 'JSON converted to YAML successfully',
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message.includes('JSON')
            ? error.message
            : `Invalid JSON: ${error.message}`
          : 'Failed to convert JSON to YAML',
    }
  }
}
