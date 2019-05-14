<template>
  <div>
    {{ msg }}  {{ $route.params.value}}
  </div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg: ' Hello , I am H2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
