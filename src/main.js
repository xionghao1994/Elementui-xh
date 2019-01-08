import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store/store'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
