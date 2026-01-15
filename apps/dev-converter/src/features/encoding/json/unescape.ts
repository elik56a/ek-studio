import { ConversionResult } from '@/shared/types'

export const unescapeJson = (input: string): ConversionResult<string> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const unescaped = JSON.parse(`"${input}"`)
    return {
      success: true,
      data: unescaped,
      message: 'JSON unescaped successfully',
    }
  } catch {
    try {
      const unescaped = JSON.parse(input)
      return {
        success: true,
        data: typeof unescaped === 'string' ? unescaped : JSON.stringify(unescaped),
        message: 'JSON unescaped successfully',
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Parse failed'
      return {
        success: false,
        error: 'Failed to unescape JSON',
        details: `${errorMsg}. The string contains invalid JSON escape sequences or syntax errors.`,
      }
    }
  }
}
