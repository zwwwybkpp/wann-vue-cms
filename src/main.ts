import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import globalRegister from './global'
import './assets/main.scss'
import 'element-plus/dist/index.css'
import 'normalize.css'
import { registerStore, setupStore } from '@/stores'

const app = createApp(App)

app.use(createPinia()).use(registerStore).use(setupStore)
app.use(router)
//* 全局注册
app.use(globalRegister)
app.mount('#app')
