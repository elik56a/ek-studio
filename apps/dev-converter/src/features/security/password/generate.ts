import { ConversionResult } from '@/shared/types'
import { PasswordOptions } from './types'
import { CHAR_SETS } from './constants'

export const generatePassword = (
  length: number,
  options: PasswordOptions
): ConversionResult<string> => {
  if (length < 1 || length > 50) {
    return {
      success: false,
      error: 'Password length must be between 1 and 50 characters',
    }
  }

  if (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
    return {
      success: false,
      error: 'At least one character type must be selected',
    }
  }

  try {
    let availableChars = ''
    const requiredChars: string[] = []

    if (options.uppercase) {
      availableChars += CHAR_SETS.uppercase
      requiredChars.push(
        CHAR_SETS.uppercase[Math.floor(Math.random() * CHAR_SETS.uppercase.length)]
      )
    }
    if (options.lowercase) {
      availableChars += CHAR_SETS.lowercase
      requiredChars.push(
        CHAR_SETS.lowercase[Math.floor(Math.random() * CHAR_SETS.lowercase.length)]
      )
    }
    if (options.numbers) {
      availableChars += CHAR_SETS.numbers
      requiredChars.push(CHAR_SETS.numbers[Math.floor(Math.random() * CHAR_SETS.numbers.length)])
    }
    if (options.symbols) {
      availableChars += CHAR_SETS.symbols
      requiredChars.push(CHAR_SETS.symbols[Math.floor(Math.random() * CHAR_SETS.symbols.length)])
    }

    const array = new Uint32Array(length)
    crypto.getRandomValues(array)

    let password = ''
    for (let i = 0; i < length; i++) {
      password += availableChars[array[i] % availableChars.length]
    }

    if (requiredChars.length > 0 && length >= requiredChars.length) {
      const positions = new Set<number>()
      while (positions.size < requiredChars.length) {
        positions.add(Math.floor(Math.random() * length))
      }

      const posArray = Array.from(positions)
      const passwordArray = password.split('')
      requiredChars.forEach((char, index) => {
        passwordArray[posArray[index]] = char
      })
      password = passwordArray.join('')
    }

    return {
      success: true,
      data: password,
      message: `Generated ${length}-character password successfully`,
      metadata: {
        length,
        options,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate password',
    }
  }
}
