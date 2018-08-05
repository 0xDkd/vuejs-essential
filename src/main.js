import Vue from 'vue'
import App from './App'
import router from './router'
//全局指令
import './directives'
//全局组件
import './components'
//Vuex
import store from './store'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'
//引入过滤器
import './filters'

// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //Router
  router,
  //Vuex
  store,
  
  components: { App },
  template: '<App/>'
})