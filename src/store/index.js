import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    Username: localStorage.getItem('Username') ? localStorage.getItem('Username') : '',
    // 典 跳转二级
    onePoetry: {}
  },
  getters: {
    onePoetry: state => state.onePoetry
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      state.Username = user.Username
      localStorage.setItem('Authorization', user.Authorization)
      localStorage.setItem('Username', user.Username)
    },
    // 典 跳转二级
    SET_ONEPOETRY (state, onePoetry) {
      state.onePoetry = onePoetry
      console.log(onePoetry + '这是store')
    }
  },
  actions: {
    // 典 跳转二级
    setOnePoetry ({commit}, onePoetry) {
      commit('SET_ONEPOETRY', onePoetry)
    }
  }
})

export default store
