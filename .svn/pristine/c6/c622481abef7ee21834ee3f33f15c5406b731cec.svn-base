// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import Calendar from 'vue2-datepick'

import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Calendar);
Vue.use(Mint);

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem("userid") != null && localStorage.getItem("userequal")=="true") { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: './',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
