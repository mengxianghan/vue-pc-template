import { createApp } from 'vue'
import App from './App.vue'
import { setupCore } from './core'
import './styles/index.scss'

const app = createApp(App)

setupCore(app)

app.mount('#app')
