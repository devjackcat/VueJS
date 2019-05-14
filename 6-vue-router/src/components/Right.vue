<template>
  <div>
    {{ msg }}  {{ $route.params.value}}
  </div>
</template>

<script>
export default {
  name: 'Right',
  data () {
    return {
      msg: ' Hello , I am Right'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
