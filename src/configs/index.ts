import { createConfig } from 'xy-config'
import app from './app'
import code from './code'
import url from './url'

export const config = createConfig({
  app,
  code,
  url,
})
