import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import rating from '@/components/rating/rating'
import saller from '@/components/saller/saller'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/goods', name: 'goods', component: goods },
    { path: '/', name: 'rating', component: rating },
    { path: '/saller', name: 'saller', component: saller }
  ],
  linkActiveClass: 'active'
})
