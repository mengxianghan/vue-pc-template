export class ErrorResponse extends Error {
  code: number | string

  constructor(message: string, code: number | string) {
    super(message)
    this.message = message
    this.code = code
  }
}
