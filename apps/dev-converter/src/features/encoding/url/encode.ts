import { ConversionResult } from '@/shared/types'

export const encodeUrl = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const encoded = encodeURIComponent(input)
    return {
      success: true,
      data: encoded,
      message: 'URL encoded successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to encode URL',
      details:
        'The input contains characters that cannot be encoded. Try removing special Unicode characters.',
    }
  }
}
