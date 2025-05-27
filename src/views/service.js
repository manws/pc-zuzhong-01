import store from "@/store"
import { Notification } from "element-ui"
export default {
  navData: [
    {
      label: "受试者",
      route: "health-service",
      icon: require("../assets/images/menu-icon-heath.svg"),
    },
    {
      label: "数据1",
      route: "evaluation",
      icon: require("../assets/images/menu-icon-pingce.svg"),
    },
    {
      label: "数据2",
      route: "prevention",
      icon: require("../assets/images/menu-icon-zuzhong-pre.svg"),
    },
    {
      label: "数据3",
      route: "chronic-disease",
      icon: require("../assets/images/menu-icon-mine-manage.svg"),
    },
    {
      label: "数据4",
      route: "popular-science",
      icon: require("../assets/images/menu-icon-nation-rule.svg"),
    },
    {
      label: "测量评测",
      route: "aboutme",
      icon: require("../assets/images/menu-icon-aboutme.svg"),
    },
  ],
  toDetail: (router, item) => {
    let routeUrl = router.resolve({
      name: "articledetail",
      params: {
        id: item.id,
      },
      query: {
        a: item.menuId,
        b: item.articleTypeId,
      },
    });
    window.open(routeUrl.href, "_blank")
  },
  toTagList: (router, item) => {
    let routeUrl = router.resolve({
      name: "taglist",
      params: {
        id: item.tagId,
      },
      query: {
        a: item.menuId,
        b: item.tagName,
      },
    });
    window.open(routeUrl.href, "_blank")
  },
  toMoreList: (router, item) => {
    let routeUrl = router.resolve({
      name: "listmore",
      params: {
        id: item.articleTypeId,
      },
      query: {
        a: item.menuId,
      },
    });
    window.open(routeUrl.href, "_blank")
  },
  getArticleList: (param) => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleList`,
      param: param,
    })
  },
  newUser: () => {
    return store.dispatch("handlePost", {
      url: `/api/v1/newUser`,
    })
  },
  insertUser: (param) => {
    return store.dispatch("handlePost", {
      url: "/api/v1/insertUser",
      param: param,
    })
  },
  updateUser: (param, userId) => {
    return store.dispatch("handlePost", {
      url: `/api/v1/updateUser/${userId}`,
      param: param,
    })
  },
  getArticle: (articleId) => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticle/${articleId}`,
    })
  },
  getTagList: (menuId) => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getTagList/${menuId}`,
    })
  },
  getArticleTypeList: (menuId) => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleTypeList/${menuId}`,
    })
  },
  getArticleHomeList: () => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleHomeList`,
    })
  },
  getArticleNoticeList: () => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleNoticeList`,
    })
  },
  getArticleTechniqueList: () => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleTechniqueList`,
    })
  },
  getArticleNewList: () => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleNewList`,
    })
  },
  getArticleHot: (menuId) => {
    return store.dispatch("handlePost", {
      url: `/api/v0/getArticleHot/${menuId}`,
    })
  },
}
