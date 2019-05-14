import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode:'history',
  // mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/params/:id(\\d+)/:title',
      name: 'Params',
      component: Params,
      beforeEnter:function(to,from,next){
        console.log(to);
        console.log(from);
        // next(false); //不跳转
        // next({path:'/'});//跳跟目录
        next(); //正常跳转
      }
    },
    {
      path: '/goHome',
      redirect:'/',
      alias:'/goHome-alias'
    },
    {
      path: '/goParams/:id(\\d+)/:title',
      redirect:'/params/:id(\\d+)/:title'
    },
    {
      path: '/hi',
      name: 'Hi',
      // component: Hi, //多个组件时用components
      components:{
        default:'',
        left:Left,
        right:Right
      },
      children:[
        {
          path:'hi1',
          name:'hi1',
          component:Hi1
        },
        {
          path:'hi2',
          name:'hi2',
          component:Hi2
        }
      ]
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
