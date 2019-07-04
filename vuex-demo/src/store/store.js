import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    count2: 1,
    count3: 2,
    count4: 3
  },
  getters:{
    doubleCount:state => {
      return state.count * 2
    }
  },
  mutations: {
    increment (state,payload) {
      state.count += payload.n
      state.count2 += payload.n
      state.count3 += payload.n
      state.count4 += payload.n
    }
  },
  actions:{
    increment22(context,payload){
      context.commit('increment',payload)
    },
    incrementAsync ({ commit },payload) {
      setTimeout(() => {
        commit('increment',payload)
      }, 1000)
    }
  }
})

export default store