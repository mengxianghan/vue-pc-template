import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission'

export function setupCore(app: any) {
  setupStore(app)
  setupRouter(app)

  return app
}
