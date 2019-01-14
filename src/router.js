import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      component:resolve => require(['./components/login.vue'],resolve)
    },
    {
      path:'/',
      redirect:'/dashboard'
    },
    {
      path:'/',
      component:resolve => require(['./components/index.vue'],resolve),
      children:[
        {
          path:'/dashboard',
          component:resolve => require(['./components/page/dashboard.vue'],resolve),
          meta:{title:'系统首页'}
        },
        {
          path:'/drag',
          component:resolve => require(['./components/page/drag.vue'],resolve),
          meta:{title:'拖拽列表'}
        },
        {
          path:'/dialog',
          component:resolve => require(['./components/page/dialog.vue'],resolve),
          meta:{title:'拖拽弹框'}
        }
      ]
    }
  ]
})
