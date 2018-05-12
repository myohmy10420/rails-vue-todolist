import Vue from 'vue'
import App from '../app.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: "#app",
    render: h => h(App)
  })
})
