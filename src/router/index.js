import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Classic from '@/components/classic/classic'
import Info from '@/components/info/info'
import Fun from '@/components/fun/fun'
import Savor from '@/components/savor/savor'
import Activity from '@/components/activity/activity'

Vue.use(Router)

export default new Router({
  routes: [
    // 下面都是固定的写法
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/classic',
      name: 'Classic',
      component: Classic
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/fun',
      name: 'Fun',
      component: Fun
    },
    {
      path: '/savor',
      name: 'Savor',
      component: Savor
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }

  ]
})
