import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken, setToken } from '@/utils/auth'

export function getRootPath() {
	let location = window.document.location;
	return location.protocol + "//" + location.host;
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5 * 60 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const {
      data,
      status
    } = response
    if (status === 200 && response.headers.authorization) {
      setToken(response.headers.authorization)
    }

    // 检查是否有返回值
    if (!data) {
      window.onTokenInvalid()
    }

    // 下载附件的情况
    if (data.type) {
      return data
    }

    const {
      code,
      message
    } = data
    // 错误提示
    if (code !== 200) {
      Message.error(message)
    }
    return {
      data,
      status
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
