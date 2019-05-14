<template>
  <div>
    {{ msg }} {{ $route.params.value}}
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: ' Hello , I am H1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
