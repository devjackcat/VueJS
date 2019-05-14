<template>
    <div>
        <h2>{{ msg }}</h2>
        <h2>{{ count }}</h2>
        <p>
            <button @click="$store.commit('add')">+1</button>
            <button @click="$store.commit('reduce')">-1</button>
        </p>
        <p>
            <button @click="$store.commit('add',10)">+10</button>
            <button @click="$store.commit('reduce',10)">-10</button>
        </p>
        <p>
            <button @click="add(10)">+10</button>
            <button @click="reduce(10)">-10</button>
        </p>
        <p>
            <button @click="addAction">+20</button>
            <button @click="reduceAction">-20</button>
        </p>
    </div>
</template>
<script>
import store from '@/store'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  data:function(){
      return {
          msg:'Hello Vuex'
      }
  },
  
//   computed:mapState(['count']),
computed:{
    ...mapState(['count']),
    // count:function(){
    //     return this.$store.getters.count
    // }
    ...mapGetters(['count'])
},

//   methods:mapMutations(['add','reduce']),
  methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>
