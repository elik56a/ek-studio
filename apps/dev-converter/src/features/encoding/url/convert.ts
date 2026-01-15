import { ConversionResult } from '@/shared/types'
import { detectUrlEncoded } from './detect'
import { validateUrlEncoded } from './validate'
import { decodeUrl } from './decode'
import { encodeUrl } from './encode'

export const urlEncodeDecode = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const isEncoded = detectUrlEncoded(input)

    if (isEncoded) {
      const validation = validateUrlEncoded(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || 'Invalid URL encoding',
          details: validation.suggestion,
        }
      }

      return decodeUrl(input)
    } else {
      return encodeUrl(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Conversion failed',
      details: 'An unexpected error occurred during conversion.',
    }
  }
}
