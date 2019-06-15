<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="test">TTTTT</button>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods:{
    test(){
      axios({
        method: 'post',
        url:'http://localhost:3000/login',
      }).then(function (response) {
        console.log("-----response----");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("-----error----");
        console.log(error);
      });;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
