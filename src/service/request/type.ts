import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface WRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WRequestInterceptors<T>
  showLoading?: boolean
}
