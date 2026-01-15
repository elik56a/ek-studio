export const detectBase64 = (input: string): boolean => {
  if (!input.trim()) return false
  const trimmedInput = input.trim()
  return (
    /^[A-Za-z0-9+/]*={0,2}$/.test(trimmedInput) &&
    trimmedInput.length % 4 === 0 &&
    (trimmedInput.length >= 4 || trimmedInput.includes("="))
  )
}

export const detectBase64Url = (input: string): boolean => {
  if (!input.trim()) return false
  const trimmedInput = input.trim()
  return (
    /^[A-Za-z0-9_-]+$/.test(trimmedInput) &&
    trimmedInput.length >= 4 &&
    (/[-_]/.test(trimmedInput) || trimmedInput.length > 20)
  )
}
