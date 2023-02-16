// 引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import condition from './condition.js'
import user from '@/store/user.js'
Vue.use(Vuex)

// 定义store
const store = new Vuex.Store({
	modules:{
		count:()=>import('./count.js'),
		condition,
		user,
	}
})

export default store
