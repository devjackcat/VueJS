<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="test">TTTTT</button>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://devjackcat.com:3002/api'
export default {
  name: 'App',
  methods:{

    test(){
      var data = { Name:'1502009', Pwd:'cfzzfc', CompanyNo:'sjk008', os:'ios' }
      var url = '/Service1/Login_Check'
      axios.post(url,data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
