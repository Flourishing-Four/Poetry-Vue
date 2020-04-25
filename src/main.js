// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../theme/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/icon/iconfont.css'
/* import 'element-ui/lib/theme-chalk/index.css' */

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443'// url:/api删除
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  components: { App },
  template: '<App/>'
})

// 异步请求前在header里加入token
/* axios.interceptors.request.use(
  config => {
    if (config.url === '/jwt/login' || config.url === '/jwt') { // 如果是登录和注册操作，则不需要携带header里面的token
    } else {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorizatior = localStorage.getItem('Authorization')
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }) */

// 异步请求后，判断token是否过期
/* axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization')
          this.$router.push('/index')
      }
    }
  }
) */

// 异步请求前判断请求的连接是否需要token
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/* router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('Authorization')
    if (token === null || token === '') {
      next('/login')
    } else {
      next()
    }
  }
}) */
