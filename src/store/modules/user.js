import {
  login,
  logout,
  changePwd
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import router, {
  resetRouter
} from '@/router'

const state = {
  token: getToken(),
  user: localStorage.getItem('xuanwu-user') ? JSON.parse(localStorage.getItem('xuanwu-user')) : {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
    localStorage.setItem('xuanwu-user', JSON.stringify(user))
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      userCode,
      userPwd
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        userCode: userCode.trim(),
        userPwd: userPwd
      }).then(response => {
        const {
          code,
          message,
          result
        } = response.data
        if (code === 200) {
          commit('SET_USER', result)
          resolve()
        } else {
          reject(message)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({
    commit,
    state,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        localStorage.clear()
        dispatch('tagsView/delAllViews', null, {
          root: true
        })
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  changePwd({
    commit,
    state,
    dispatch
  }, param) {
    return new Promise((resolve, reject) => {
      changePwd(param).then(res => {
        const {
          data
        } = res
        if (data.code === 200) {
          commit('SET_TOKEN', '')
          removeToken()
          resetRouter()
          localStorage.clear()
          dispatch('tagsView/delAllViews', null, {
            root: true
          })
          resolve()
        } else {
          reject(data.message)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({
    commit,
    dispatch
  }, role) {
    const token = role + '-token'
    commit('SET_TOKEN', token)
    setToken(token)
    const {
      roles
    } = await dispatch('getInfo')
    resetRouter()
    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, {
      root: true
    })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)
    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, {
      root: true
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
