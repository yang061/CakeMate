import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
// 全局挂载异步请求方法
// import {$get,$post,http} from '@/utils/request.js'
// Vue.prototype.$get=$get
// Vue.prototype.$post=$post
// Vue.prototype.$http=$http
//另一种写法,把@/utils/request.js中的使用方法都引入到request里去
import * as request from '@/utils/request.js'
// 遍历request
for (let key in request) {
	// key 是 $get,$post,http【request里的方法】
	Vue.prototype[key]=request[key]
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif