import Storage from 'xy-storage'
import { STORAGE_DOMAIN, STORAGE_NAMESPACE } from '@/constants'

const options = {
  namespace: STORAGE_NAMESPACE,
  attrs: {
    domain: STORAGE_DOMAIN,
  },
}

export const localStorage = new Storage({
  ...options,
  name: 'local',
})

export const sessionStorage = new Storage({
  ...options,
  name: 'session',
})

export const cookie = new Storage({
  ...options,
  name: 'cookie',
})
