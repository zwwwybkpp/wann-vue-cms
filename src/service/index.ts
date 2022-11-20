import WRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
//* 实例WRequest
const wRequest = new WRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //* 实例WRequest的拦截器
  interceptors: {
    requestInterceptor: config => {
      console.log('请求成功')
      return config
    },
    requestInterceptorCatch: error => {
      console.log('请求失败')
      return error
    },
    responseInterceptor: res => {
      console.log('响应成功')
      return res
    },
    responseInterceptorCatch: error => {
      console.log('响应失败')
      return error
    }
  }
})

export default wRequest
