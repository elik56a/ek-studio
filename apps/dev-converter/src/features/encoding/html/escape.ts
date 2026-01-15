import { ConversionResult } from '@/shared/types'

export const escapeHtml = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const escaped = input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

    return {
      success: true,
      data: escaped,
      message: 'HTML escaped successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to escape HTML',
      details: 'An unexpected error occurred during HTML escaping.',
    }
  }
}
