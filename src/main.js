import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Stores from './Views/Stores/Store';
import HomePage from './Views/HomePage/HomePage'
import Aldo from './Views/StorePages/Aldo/Aldo'
import Angler from './Views/StorePages/Angler/Angler'



Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { 
      path: '/', 
      component: HomePage 
    },
    { 
      path: '/stores', 
      component: Stores
    },
    {
      path: '/store/aldo',
      component: Aldo
    },
    {
      path: '/store/angler',
      component: Angler
    }
  
  ],
  mode: 'history'

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
