// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'//解决点击延迟300毫秒
import store from './store'
import 'babel-polyfill'
import './assets/style/reset.css'//解决不同手机型号
import './assets/style/border.css'//解决手机1像素边框
import './assets/style/iconfont.css'


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
