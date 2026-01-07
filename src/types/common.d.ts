export type Numeric = number | string

export interface BaseResponse<T> {
  code: Numeric
  message: string
  data: T
}
