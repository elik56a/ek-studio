import { ConversionResult } from "./json-utils"

export interface TimestampConversionResult {
  timestamp: number
  iso: string
  utc: string
  local: string
  relative: string
}

/**
 * Convert Unix timestamp to human-readable formats
 * @param timestamp - Unix timestamp in seconds or milliseconds
 * @returns ConversionResult with formatted dates
 */
export function convertTimestampToDate(
  timestamp: string | number
): ConversionResult<TimestampConversionResult> {
  try {
    let ts = typeof timestamp === "string" ? parseFloat(timestamp) : timestamp

    if (isNaN(ts)) {
      return {
        success: false,
        error: "Invalid timestamp format",
      }
    }

    // Convert to milliseconds if timestamp is in seconds (less than year 3000)
    if (ts < 10000000000) {
      ts = ts * 1000
    }

    const date = new Date(ts)

    if (isNaN(date.getTime())) {
      return {
        success: false,
        error: "Invalid timestamp value",
      }
    }

    // Calculate relative time
    const now = Date.now()
    const diff = now - date.getTime()
    const seconds = Math.floor(Math.abs(diff) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    let relative = ""
    if (years > 0) {
      relative = `${years} year${years > 1 ? "s" : ""}`
    } else if (months > 0) {
      relative = `${months} month${months > 1 ? "s" : ""}`
    } else if (days > 0) {
      relative = `${days} day${days > 1 ? "s" : ""}`
    } else if (hours > 0) {
      relative = `${hours} hour${hours > 1 ? "s" : ""}`
    } else if (minutes > 0) {
      relative = `${minutes} minute${minutes > 1 ? "s" : ""}`
    } else {
      relative = `${seconds} second${seconds !== 1 ? "s" : ""}`
    }

    relative += diff < 0 ? " from now" : " ago"

    return {
      success: true,
      data: {
        timestamp: Math.floor(date.getTime() / 1000),
        iso: date.toISOString(),
        utc: date.toUTCString(),
        local: date.toLocaleString(),
        relative,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Convert date string to Unix timestamp
 * @param dateString - Date string in various formats
 * @returns ConversionResult with timestamp
 */
export function convertDateToTimestamp(
  dateString: string
): ConversionResult<TimestampConversionResult> {
  try {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      return {
        success: false,
        error: "Invalid date format",
      }
    }

    const now = Date.now()
    const diff = now - date.getTime()
    const seconds = Math.floor(Math.abs(diff) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    let relative = ""
    if (years > 0) {
      relative = `${years} year${years > 1 ? "s" : ""}`
    } else if (months > 0) {
      relative = `${months} month${months > 1 ? "s" : ""}`
    } else if (days > 0) {
      relative = `${days} day${days > 1 ? "s" : ""}`
    } else if (hours > 0) {
      relative = `${hours} hour${hours > 1 ? "s" : ""}`
    } else if (minutes > 0) {
      relative = `${minutes} minute${minutes > 1 ? "s" : ""}`
    } else {
      relative = `${seconds} second${seconds !== 1 ? "s" : ""}`
    }

    relative += diff < 0 ? " from now" : " ago"

    return {
      success: true,
      data: {
        timestamp: Math.floor(date.getTime() / 1000),
        iso: date.toISOString(),
        utc: date.toUTCString(),
        local: date.toLocaleString(),
        relative,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Conversion failed",
    }
  }
}

/**
 * Smart converter that detects input type and converts accordingly
 * @param input - Unix timestamp or date string
 * @returns ConversionResult with TimestampConversionResult data
 */
export function convertTimestamp(
  input: string
): ConversionResult<TimestampConversionResult> {
  if (!input.trim()) {
    return {
      success: false,
      error: "Input is empty",
    }
  }

  // Check if input is a number (timestamp)
  const numericInput = input.trim()
  if (/^\d+$/.test(numericInput)) {
    return convertTimestampToDate(numericInput)
  }

  // Otherwise treat as date string
  return convertDateToTimestamp(input)
}

function formatTimestampResult(data: TimestampConversionResult): string {
  return `Unix Timestamp: ${data.timestamp}

ISO 8601: ${data.iso}

UTC: ${data.utc}

Local: ${data.local}

Relative: ${data.relative}`
}
