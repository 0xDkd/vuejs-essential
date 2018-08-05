import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),

  //添加 auth  来保存用户当前的状态
  auth: ls.getItem('auth')
}

const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
    ls.setItem('user', user)
  },
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth',auth)
  }
}

const actions = {
  login({commit}, user) {

    //console.log(commit,user);
    if (user) commit('UPDATE_USER', user)
    //更新当前用户状态为已经登录
    commit('UPDATE_AUTH',true)
    router.push('/')
  },
  logout({commit}){
    commit('UPDATE_AUTH',false)
    router.push({ name: 'Home', params: { logout: true } })    
  },
   // 更新个人信息
   updateUser({ state, commit }, user) {
    const stateUser = state.user

    if (stateUser && typeof stateUser === 'object') {
      user = { ...stateUser, ...user }
    }
    commit('UPDATE_USER', user)
  }
}



const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
