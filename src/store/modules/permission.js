import { constantRoutes } from '@/router'
import Layout from '@/layout'
import dynamicRouter from '@/router/modules/route.js'
import defaultSettings from '@/settings'
const { flag, isRemoteRoute } = defaultSettings

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  /**
   * 生成路由
   */
  generateRoutes({ commit }, menus) {
    return new Promise(resolve => {
      const accessedRoutes = []
      if (isRemoteRoute) {
        addDynamicRouter(accessedRoutes, menus)
       }
      accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

function addDynamicRouter(accessedRoutes, menus) {
  menus.forEach(item => {
    if (item.childMenuList && item.childMenuList.length > 0) {
      const children = []
      item.childMenuList.forEach(it => {
        if (dynamicRouter[it.URLModel]) {
          const childrenRoute = {
            path: `/${flag}-` + it.menuId,
            component: dynamicRouter[it.URLModel].component,
            name: it.URLModel,
            noCache: true,
            meta: {
              title: it.menuName,
              icon: 'table',
              formId: it.formId
            }
          }
          children.push(childrenRoute)
        }
      })
      const route = {
        component: Layout,
        path: `/${flag}-` + item.menuId,
        alwaysShow: true,
        redirect: 'noRedirect',
        meta: {
          title: item.menuName,
          icon: 'table',
          formId: item.formId
        },
        children: children
      }
      accessedRoutes.push(route)
    } else {
      if (dynamicRouter[item.URLModel]) {
        const route = {
          component: Layout,
          path: `/${flag}-` + 'parent-' + item.menuId,
          redirect: 'noRedirect',
          children: [
            {
              path: `/${flag}-` + item.menuId,
              component: dynamicRouter[item.URLModel].component,
              name: item.URLModel,
              noCache: true,
              meta: {
                title: item.menuName,
                icon: 'table',
                formId: item.formId
              }
            }
          ]
        }
        accessedRoutes.push(route)
      }
    }
  })
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
