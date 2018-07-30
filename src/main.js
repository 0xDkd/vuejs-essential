import Vue from 'vue'
import App from './App'
import router from './router'
//全局指令
import './directives'
//全局组件
import './components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})