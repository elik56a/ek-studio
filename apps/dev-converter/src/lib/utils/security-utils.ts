import { ConversionResult } from "./json-utils"

/**
 * Decodes a JWT token to view header, payload, and signature
 * @param token - The JWT token to decode
 * @returns ConversionResult with decoded JWT data or error
 */
export function decodeJWT(token: string): ConversionResult<string> {
  if (!token.trim()) {
    return {
      success: false,
      error: "JWT token is empty",
    }
  }

  try {
    const parts = token.trim().split(".")

    if (parts.length !== 3) {
      return {
        success: false,
        error: "Invalid JWT format. JWT must have 3 parts separated by dots.",
      }
    }

    const [headerB64, payloadB64, signature] = parts

    // Decode header
    const header = JSON.parse(
      atob(headerB64.replace(/-/g, "+").replace(/_/g, "/"))
    )

    // Decode payload
    const payload = JSON.parse(
      atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"))
    )

    const decoded = {
      header,
      payload,
      signature,
    }

    return {
      success: true,
      data: JSON.stringify(decoded, null, 2),
      message: "JWT decoded successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to decode JWT",
    }
  }
}

/**
 * Hash algorithm types supported
 */
export type HashAlgorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512"

/**
 * Generates a single hash for the given algorithm
 * @param input - The text to hash
 * @param algorithm - The hash algorithm to use
 * @returns ConversionResult with generated hash or error
 */
export async function generateHash(
  input: string,
  algorithm: HashAlgorithm
): Promise<ConversionResult<string>> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(input)

    const hashBuffer = await crypto.subtle.digest(algorithm, data)
    const hash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")

    return {
      success: true,
      data: hash,
      message: `${algorithm} hash generated successfully`,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate hash",
    }
  }
}

/**
 * Generates cryptographic hashes asynchronously
 * @param input - The text to hash
 * @returns ConversionResult with generated hashes or error
 */
export async function generateHashes(
  input: string
): Promise<ConversionResult<string>> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(input)

    // Generate all hashes in parallel
    const [sha1Buffer, sha256Buffer, sha384Buffer, sha512Buffer] =
      await Promise.all([
        crypto.subtle.digest("SHA-1", data),
        crypto.subtle.digest("SHA-256", data),
        crypto.subtle.digest("SHA-384", data),
        crypto.subtle.digest("SHA-512", data),
      ])

    const sha1 = Array.from(new Uint8Array(sha1Buffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
    const sha256 = Array.from(new Uint8Array(sha256Buffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
    const sha384 = Array.from(new Uint8Array(sha384Buffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
    const sha512 = Array.from(new Uint8Array(sha512Buffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")

    const hashes = {
      "SHA-1": sha1,
      "SHA-256": sha256,
      "SHA-384": sha384,
      "SHA-512": sha512,
    }

    return {
      success: true,
      data: JSON.stringify(hashes, null, 2),
      message: "Hashes generated successfully",
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to generate hashes",
    }
  }
}

/**
 * Generates UUID v4 identifiers
 * @param count - Number of UUIDs to generate
 * @returns ConversionResult with generated UUIDs or error
 */
export function generateUUIDs(count: number = 1): ConversionResult<string> {
  if (count < 1 || count > 100) {
    return {
      success: false,
      error: "Count must be between 1 and 100",
    }
  }

  try {
    const uuids: string[] = []

    for (let i = 0; i < count; i++) {
      uuids.push(crypto.randomUUID())
    }

    return {
      success: true,
      data: uuids.join("\n"),
      message: `Generated ${count} UUID${count > 1 ? "s" : ""} successfully`,
      metadata: {
        count,
      },
    }
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to generate UUIDs",
    }
  }
}

/**
 * Password generation options
 */
export interface PasswordOptions {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

/**
 * Generates a secure random password
 * @param length - Length of the password (1-50)
 * @param options - Character types to include
 * @returns ConversionResult with generated password or error
 */
export function generatePassword(
  length: number,
  options: PasswordOptions
): ConversionResult<string> {
  // Validate length
  if (length < 1 || length > 50) {
    return {
      success: false,
      error: "Password length must be between 1 and 50 characters",
    }
  }

  // Validate at least one character type is selected
  if (
    !options.uppercase &&
    !options.lowercase &&
    !options.numbers &&
    !options.symbols
  ) {
    return {
      success: false,
      error: "At least one character type must be selected",
    }
  }

  try {
    // Define character sets
    const charSets = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    }

    // Build available characters based on options
    let availableChars = ""
    const requiredChars: string[] = []

    if (options.uppercase) {
      availableChars += charSets.uppercase
      requiredChars.push(
        charSets.uppercase[
          Math.floor(Math.random() * charSets.uppercase.length)
        ]
      )
    }
    if (options.lowercase) {
      availableChars += charSets.lowercase
      requiredChars.push(
        charSets.lowercase[
          Math.floor(Math.random() * charSets.lowercase.length)
        ]
      )
    }
    if (options.numbers) {
      availableChars += charSets.numbers
      requiredChars.push(
        charSets.numbers[Math.floor(Math.random() * charSets.numbers.length)]
      )
    }
    if (options.symbols) {
      availableChars += charSets.symbols
      requiredChars.push(
        charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]
      )
    }

    // Generate password using crypto.getRandomValues for security
    const array = new Uint32Array(length)
    crypto.getRandomValues(array)

    let password = ""
    for (let i = 0; i < length; i++) {
      password += availableChars[array[i] % availableChars.length]
    }

    // Ensure at least one character from each selected type
    // Replace random positions with required characters
    if (requiredChars.length > 0 && length >= requiredChars.length) {
      const positions = new Set<number>()
      while (positions.size < requiredChars.length) {
        positions.add(Math.floor(Math.random() * length))
      }

      const posArray = Array.from(positions)
      const passwordArray = password.split("")
      requiredChars.forEach((char, index) => {
        passwordArray[posArray[index]] = char
      })
      password = passwordArray.join("")
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
      error:
        error instanceof Error ? error.message : "Failed to generate password",
    }
  }
}
