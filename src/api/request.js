import request from '@/utils/request'

export const postRequest = (url, data = {}, config) => {
  return request(Object.assign({
    url,
    data,
    method: 'post'
  }, config))
}

export const getRequest = (url, params = {}, config) => {
  return request(Object.assign({
    url,
    params,
    method: 'get'
  }, config))
}

export const putRequest = (url, data = {}, config) => {
  return request(Object.assign({
    url,
    data,
    method: 'put'
  }, config))
}

export const deleteRequest = (url, data = {}, config) => {
  return request(Object.assign({
    url,
    data,
    method: 'delete'
  }, config))
}

export const downloadRequest = (url, data = {}, config) => {
  return request(Object.assign({
    url,
    data,
    method: 'post',
    responseType: 'blob'
  }, config))
}
