<template>
  <div>
    {{count}}<br/>
    {{count2}}<br/>
    {{count3}}<br/>
    {{count4}}<br/>
    {{doubleCount}}<br/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed:{
    
    ...mapState({
      count: state => state.count,
      count2: state => state.count2
    }),

    ...mapState({
      count3: state => state.count3,
      count4: state => state.count4
    }),

    ...mapGetters(['doubleCount'])
    
  }
}
</script>

<style>

</style>