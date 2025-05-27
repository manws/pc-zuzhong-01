import request from '@/utils/request'
import store from '@/store'

export function login(data) {
  return request({
    url: '/api/v1/login',
    method: 'post',
    data
  })
}

export function getMenus() {
  return request({
    url: '/api/v1/menus/' + store.getters.project.projectDB,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/api/v1/logout',
    method: 'get'
  })
}

export function changePwd(data) {
  return request({
    url: '/api/v1/change-pwd',
    method: 'put',
    data
  })
}
