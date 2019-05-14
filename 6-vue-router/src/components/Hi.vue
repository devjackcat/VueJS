<template>
  <div>
    {{ msg }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: ' Hello , I am JackCat'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
