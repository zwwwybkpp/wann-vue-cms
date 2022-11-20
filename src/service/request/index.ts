import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WRequestInterceptors, WRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOAING = false

class WRequest {
  interface: AxiosInstance
  showLoading?: boolean
  loading?: LoadingInstance
  interceptors?: WRequestInterceptors
  constructor(config: WRequestConfig) {
    this.interface = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOAING

    //* 每个实例特有的拦截器
    this.interface.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.interface.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //* 所有请求实例都有的拦截器
    this.interface.interceptors.request.use(
      config => {
        console.log('所有请求实例都有的拦截器', '请求成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      err => {
        console.log('所有请求实例都有的拦截器', '请求失败')
        return err
      }
    )
    //* 所有响应实例都有的拦截器
    this.interface.interceptors.response.use(
      res => {
        //* 将loading移除
        setTimeout(() => this.loading?.close(), 1000)
        console.log('所有响应实例都有的拦截器', '响应成功')
        return res.data
      },
      err => {
        //* 将loading移除
        this.loading?.close()
        console.log('所有响应实例都有的拦截器', '响应失败')
        return err
      }
    )
  }
  request<T>(config: WRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //* 判断是需要展示Loading
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }
      this.interface
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOAING
          resolve(res)
        })
        .catch(err => {
          this.showLoading = DEFAULT_LOAING
          reject(err)
        })
    })
  }
  get<T>(config: WRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: WRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: WRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DLETE' })
  }
  patch<T>(config: WRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default WRequest
