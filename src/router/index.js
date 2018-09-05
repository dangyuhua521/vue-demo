import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Ctiy from '@/components/city/city'
import Detail from '@/components/detail/detail'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path: '/city',
      name:'Ctiy',
      component:Ctiy
    },
    {
      path: '/detail/:id',//前面的路由是detail后面必须加/:id的变量里面
      name:'Detail',
      component:Detail
    }
  ]
})
