import { ConversionResult } from '@/shared/types'

export const unescapeHtml = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = input
    const unescaped = textarea.value

    return {
      success: true,
      data: unescaped,
      message: 'HTML unescaped successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to unescape HTML',
      details: 'The input contains malformed HTML entities that cannot be decoded.',
    }
  }
}
