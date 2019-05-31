<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <v-content></v-content>
  </div>
</template>

<script>

import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'
import Content from '@/components/content/content'

export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-tab': Tab,
    'v-content': Content
  }
}
</script>
