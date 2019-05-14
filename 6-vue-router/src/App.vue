<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi</router-link>
      <router-link to="/hi/hi1">Hi1</router-link>
      <router-link to="/hi/hi2">Hi2</router-link>
    </div>
    <div>
      <router-link :to="{name:'hi1',params:{value:'haha1'}}">Hi1</router-link>
      <router-link :to="{name:'hi2',params:{value:'haha2'}}">Hi2</router-link>
    </div>
    <div>
      <router-link to="/params/123/aaaaaa">传参</router-link>
    </div>
    <div>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/3333/bbbb">goParams</router-link>
    </div>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <p>{{ $route.name }}</p>
    <router-view/>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:red;"/>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:blue;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack:function(){
      this.$router.go(-1);
    },
    goForward:function(){
      this.$router.go(1);
    },
    goHome:function(){
      this.$router.push('/');
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
