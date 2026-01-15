export const detectJsonEscaped = (input: string): boolean => {
  if (!input.trim()) return false
  return /\\["\\/bfnrtu]/.test(input)
}
