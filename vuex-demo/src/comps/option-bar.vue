<template>
  <div>
    <button @click="plus">加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  methods:{
    plus(){
      // this.$store.commit('increment',{n:20})

      // 以载荷形式分发
      // this.$store.dispatch('increment22',{
      //   n:20
      // })

      // 以对象形式分发
      this.$store.dispatch({
        type:'increment22',
        n:20
      })

      //// 异步调用
      // this.$store.dispatch('incrementAsync',{
      //   n:20
      // })

    }
  }
}
</script>

<style>

</style>
