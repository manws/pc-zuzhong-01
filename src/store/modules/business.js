import { getMenus } from '@/api/user'
const state = {
  menus: [],
  project: localStorage.getItem('Project') ? JSON.parse(localStorage.getItem('Project')) : {}
}

const mutations = {
  SET_MENUS: (state, menus) => {
    state.menus = menus
  },
  SET_PROJECT: (state, project) => {
    state.project = project
    localStorage.setItem('Project', JSON.stringify(project))
  }
}

const actions = {
  handleMenus({ commit, state }) {
    return new Promise((resolve, reject) => {
      getMenus().then(response => {
        console.log(response)
        const { code, message, result } = response.data
        if (code !== 200) {
          reject(message)
        } else {
          commit('SET_MENUS', result.parentMenuList)
          resolve(result)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
