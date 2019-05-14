<template>
  <div>
    id: {{ $route.params.id }}  
    title: {{ $route.params.title}}
  </div>
</template>

<script>
export default {
  name: 'Params',
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入params路由');
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开params路由');
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
