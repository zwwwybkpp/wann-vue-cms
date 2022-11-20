import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import globalRegister from './global'
import wRequest from './service'
import './assets/main.scss'
import 'element-plus/dist/index.css'
import 'normalize.css'

const app = createApp(App)
//* 注册element ui
app.use(globalRegister)

app.use(createPinia())
app.use(router)

app.mount('#app')

interface LIST {
  id: number
  name: string
  sex: string
  tel: string
}

wRequest
  .get<LIST[]>({
    url: '/list',
    showLoading: false,
    interceptors: {
      requestInterceptor: config => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: res => {
        console.log('单独响应的res')
        return res
      }
    }
  })
  .then(res => {
    console.log(res)
    res.forEach(item => {
      console.log(item)
    })
  })
  .catch(err => {
    console.log(err)
  })
