/**
 * @author semyin
 * @description api请求
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

const request: AxiosInstance = axios.create({
  timeout: 5 * 1000
})

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default request
