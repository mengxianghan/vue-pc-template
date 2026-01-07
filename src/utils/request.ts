import type { HttpOptions } from 'xy-http'
import { message } from 'ant-design-vue'
import { createHttp } from 'xy-http'
import { config } from '@/configs'
import { ResponseError } from './errors'

const REQUEST_MESSAGE_KEY = 'request_message_key'

const options: HttpOptions = {
  interceptorRequest: (request) => {
    return request
  },
  interceptorResponse: (response) => {
    const { code, message } = response.data
    if (config.includes('code.ignore', code)) {
      message.open({
        type: 'error',
        key: REQUEST_MESSAGE_KEY,
        content: message,
      })
      throw new ResponseError(message, code)
    }
    return response.data
  },
  interceptorResponseError: (err: any) => {
    message.open({
      type: 'error',
      key: REQUEST_MESSAGE_KEY,
      content: '请求异常，请稍后再试',
    })
    throw err
  },
}

export const basic = createHttp({
  ...options,
  baseURL: config.get('url.apiBasic'),
})
