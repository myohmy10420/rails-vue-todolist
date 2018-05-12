import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import todolists_index from './../views/todolist/index.vue'

const router = new VueRouter({
	// 使用 HTML 5 模式
	mode: 'history',
	routes: [
		{ path: '/todolists', component: todolists_index },
		{ path: '/', redirect: '/todolists' }
	]
})

export default router
