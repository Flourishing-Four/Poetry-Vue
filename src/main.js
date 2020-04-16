// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
/* import store from './store' */
import ElementUI from 'element-ui'
import '../theme/index.css'
import 'font-awesome/css/font-awesome.min.css'
/* import 'element-ui/lib/theme-chalk/index.css' */

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  /* store, */
  router,
  components: { App },
  template: '<App/>'
})
