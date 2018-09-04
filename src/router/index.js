import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Ctiy from '@/components/city/city.vue'

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
    }
  ]
})
