import { ConversionResult } from '@/shared/types'
import { HashAlgorithm } from './types'

export const generateHash = async (
  input: string,
  algorithm: HashAlgorithm
): Promise<ConversionResult<string>> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(input)

    const hashBuffer = await crypto.subtle.digest(algorithm, data)
    const hash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    return {
      success: true,
      data: hash,
      message: `${algorithm} hash generated successfully`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate hash',
    }
  }
}

export const generateHashes = async (input: string): Promise<ConversionResult<string>> => {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(input)

    const [sha1Buffer, sha256Buffer, sha384Buffer, sha512Buffer] = await Promise.all([
      crypto.subtle.digest('SHA-1', data),
      crypto.subtle.digest('SHA-256', data),
      crypto.subtle.digest('SHA-384', data),
      crypto.subtle.digest('SHA-512', data),
    ])

    const sha1 = Array.from(new Uint8Array(sha1Buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    const sha256 = Array.from(new Uint8Array(sha256Buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    const sha384 = Array.from(new Uint8Array(sha384Buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    const sha512 = Array.from(new Uint8Array(sha512Buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    const hashes = {
      'SHA-1': sha1,
      'SHA-256': sha256,
      'SHA-384': sha384,
      'SHA-512': sha512,
    }

    return {
      success: true,
      data: JSON.stringify(hashes, null, 2),
      message: 'Hashes generated successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate hashes',
    }
  }
}
