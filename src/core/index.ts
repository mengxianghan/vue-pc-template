import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './permission'

import 'tdesign-vue-next/es/style/index.css'

export function setupCore(app: any) {
  setupStore(app)
  setupRouter(app)

  return app
}
