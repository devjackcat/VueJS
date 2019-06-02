<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
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
  data () {
    return {
      seller: {
        name: '黄焖鸡',
        description: '蜂鸟转送',
        deliveryTime: '30',
        score: 3.6,
        serviceScore: 4.1,
        foodScore: 4.3,
        rankRate: 69.2,
        minPrice: 20,
        deliveryPrice: 4,
        ratingCount: 24,
        sellCount: 90,
        avatar: 'http://static.devjackcat.com/avatar.jpeg',
        supports: [{
          type: 0,
          description: '在线支付满28减5'
        }, {
          type: 2,
          description: '单人精彩套餐'
        }, {
          type: 3,
          description: '支持发票'
        }],
        bulletin: '这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告'
      }
    }
  },
  created () {
    console.log('----created')
  },
  components: {
    'v-header': Header,
    'v-tab': Tab,
    'v-content': Content
  }
}
</script>
