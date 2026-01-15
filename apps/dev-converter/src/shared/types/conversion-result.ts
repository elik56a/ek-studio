export interface ConversionResult<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  details?: string
  metadata?: Record<string, any>
}
