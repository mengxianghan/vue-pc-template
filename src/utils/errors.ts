import type { Numeric } from '@/types/common'

export class ResponseError extends Error {
  code: Numeric

  constructor(message: string, code: Numeric) {
    super(message)
    this.message = message
    this.code = code
  }
}
