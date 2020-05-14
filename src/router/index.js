import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import User from '@/components/user/user'
import Search from '@/components/search/search'
import Classic from '@/components/classic/classic'
import Info from '@/components/info/info'
import Fun from '@/components/fun/fun'
import Savor from '@/components/savor/savor'
import SavDetail from '@/components/savor/savDetail'
import Activity from '@/components/activity/activity'
import ClassicPoem from '@/components/classic/classicPoem'
import InfoPoet from '@/components/info/infoPoet'
import ActivityWorks from '@/components/activity/activityWorks'
import ActivityMatch from '@/components/activity/activityMatch'

Vue.use(Router)

export default new Router({
  'routes': [
    // 下面都是固定的写法
    {
      'path': '*',
      'redirect': '/index'
    },
    {
      'path': '/login',
      'name': 'Login',
      'component': Login
    },
    {
      'path': '/user',
      'name': 'User',
      'component': User
    },
    {
      'path': '/search',
      'name': 'Search',
      'component': Search
    },
    {
      'path': '/index',
      'name': 'AppIndex',
      'component': AppIndex
    },
    {
      'path': '/classic',
      'name': 'Classic',
      'component': Classic
      /* children: [
                            {
                              path: '/classic/classicPoem',
                              name: 'ClassicPoem',
                              component: ClassicPoem
                            }
                          ] */ // 注册关系是同级路由 URL上是子路由
    },
    {
      'path': '/classic/classicPoem',
      'name': 'ClassicPoem',
      'component': ClassicPoem
    },
    {
      'path': '/info',
      'name': 'Info',
      'component': Info
    },
    {
      'path': '/info/infoPoet',
      'name': 'InfoPoet',
      'component': InfoPoet
    },
    {
      'path': '/fun',
      'name': 'Fun',
      'component': Fun
    },
    {
      'path': '/savor',
      'name': 'Savor',
      'component': Savor
    },
    {
      'path': '/savDetail',
      'name': 'SavDetail',
      'component': SavDetail
    },
    {
      'path': '/activity',
      'name': 'Activity',
      'component': Activity
    },
    {
      'path': '/activity/activityWorks',
      'name': 'ActivityWorks',
      'component': ActivityWorks
    },
    {
      'path': '/activity/activityMatch',
      'name': 'ActivityMatch',
      'component': ActivityMatch
    }

  ]
})
