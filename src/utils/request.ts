import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
import Http from 'xy-http'
import { config } from '@/configs'
import { ErrorResponse } from '@/utils/thorw'

const REQUEST_MESSAGE_KEY = 'request_message_key'

const options = {
  interceptorRequest: (request: AxiosRequestConfig) => {
    return request
  },
  interceptorResponse: (response: AxiosResponse) => {
    const { code, message } = response.data
    if (config.includes('code.ignore', code)) {
      message.open({
        type: 'error',
        key: REQUEST_MESSAGE_KEY,
        content: message,
      })
      throw new ErrorResponse(message, code)
    }
    return response.data
  },
  interceptorResponseCatch: (err: any) => {
    message.open({
      type: 'error',
      key: REQUEST_MESSAGE_KEY,
      content: '请求异常，请稍后再试',
    })
    throw err
  },
}

export const basic = new Http({
  ...options,
  baseURL: config.get('url.apiBasic'),
})
