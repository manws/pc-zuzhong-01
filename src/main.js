import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/**
 * 全局样式
 */
import '@/styles/index.scss'

/**
 * 动画
 */
import animated from 'animate.css'
Vue.use(animated)

import Cookies from 'js-cookie'
import i18n from './lang'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import './icons'
import './components'
import './permission'
import './utils/error-log'
import * as filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'large',
  i18n: (key, value) => i18n.t(key, value)
})

import {getRootPath} from '@/utils/request.js'
Vue.prototype.$serverBase = getRootPath();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
