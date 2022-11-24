import WRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/localCache'
//* 实例WRequest
const wRequest = new WRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //* 实例WRequest的拦截器
  interceptors: {
    requestInterceptor: config => {
      //给请求增加token
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: error => {
      return error
    },
    responseInterceptor: res => {
      return res
    },
    responseInterceptorCatch: error => {
      return error
    }
  }
})

export default wRequest
