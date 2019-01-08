import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 导入login 组件
import login from './components/login.vue';
import aside from './components/aside.vue';
import index from './components/index.vue';
import header from './components/header.vue';
import content from './components/content.vue'
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:{name:'login'}},
    {name:'login',path:'/login',component:login},
    {name:'aside',path:'/aside',component:aside},
    {name:'index',path:'/index',component:index},
    {name:'header',path:'/header',component:header},
    {name:'content',path:'/content',component:content}
  ]
})
