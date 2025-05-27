import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
import Layout from "@/layout"

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
      {
        name: "health-service",
        path: "/health-service",
        component: () => import("@/views/list/index"),
        meta: {
          title: "健康服务",
        },
      },
      {
        name: "evaluation",
        path: "/evaluation",
        component: () => import("@/views/list/index"),
        meta: {
          title: "风险评测",
        },
      },
      {
        name: "prevention",
        path: "/prevention",
        component: () => import("@/views/list/index"),
        meta: {
          title: "卒中预防",
        },
      },
      {
        name: "popular-science",
        path: "/popular-science",
        component: () => import("@/views/list/index"),
        meta: {
          title: "国际规范",
        },
      },
      {
        name: "chronic-disease",
        path: "/chronic-disease",
        component: () => import("@/views/list/index"),
        meta: {
          title: "自我管理",
        },
      },
      {
        name: "aboutme",
        path: "/aboutme",
        component: () => import("@/views/list/index"),
        meta: {
          title: "关于我们",
        },
      },
      {
        name: "list",
        path: "/list",
        component: () => import("@/views/list/index"),
        meta: {
          title: "列表数据",
        },
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
    hidden: true,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index"),
    hidden: true,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
    hidden: true,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/icon",
    component: Layout,
    hidden: false,
    children: [
      {
        path: "index",
        component: () => import("@/views/icons/index"),
        name: "Icons",
        meta: {
          title: "icons",
          icon: "icon",
          noCache: true,
        },
      },
    ],
  },
]

/**
 * 异步路由
 */
export const asyncRoutes = []

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  })

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
