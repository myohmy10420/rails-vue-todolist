import Vue from 'vue'
import App from '../app.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: "#app",
    router,
    render: h => h(App)
  })
})
