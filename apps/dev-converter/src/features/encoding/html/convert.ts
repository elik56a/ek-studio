import { ConversionResult } from '@/shared/types'
import { detectHtmlEscaped } from './detect'
import { validateHtmlEscaped } from './validate'
import { unescapeHtml } from './unescape'
import { escapeHtml } from './escape'

export const htmlEscapeUnescape = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const isEscaped = detectHtmlEscaped(input)

    if (isEscaped) {
      const validation = validateHtmlEscaped(input)
      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error || 'Invalid HTML entities',
          details: validation.suggestion,
        }
      }

      return unescapeHtml(input)
    } else {
      return escapeHtml(input)
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Conversion failed',
      details: 'An unexpected error occurred during conversion.',
    }
  }
}
