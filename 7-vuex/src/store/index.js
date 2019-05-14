import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count:0
}

const mutations = {
    add:function(state,n=1){
        state.count+=n;
    },
    reduce:function(state,n=1){
        state.count-=n;
    }
}

const getters = {
    count:function(state){
        return state.count+=100;
    }
}

const actions = {
    addAction:function(context){
        context.commit('add',20);
        setTimeout(() => {
            context.commit('reduce',2);
        }, 5000);
        console.log('addAction');
    },
    reduceAction:function({commit}){
        commit('reduce',20);
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    modules:{
        a:moduleA
    }
});