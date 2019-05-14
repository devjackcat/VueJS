<template>
  <div>
    {{ msg }}  {{ $route.params.value}}
  </div>
</template>

<script>
export default {
  name: 'Left',
  data () {
    return {
      msg: ' Hello , I am Left'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
