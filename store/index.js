// 引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import count from './count.js'
import condition from './condition.js'
import user from '@/store/user.js'
import cart from '@/store/cart.js'
import address from '@/store/address.js'
Vue.use(Vuex)

// 定义store
const store = new Vuex.Store({
	modules:{
		count,
		condition,
		user,
		cart,
		address
	}
})

export default store
