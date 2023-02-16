import {$post} from '@/utils/request.js'
export default {
	// 开启命名空间,访问功能必须带模块名
	namespaced:true,
	state(){
		return {
			userInfo:null,
		}
	},
	mutations:{
		// 初始化用户信息
		initUserInfo(state,value){
			state.userInfo = value
		}
	},
	actions:{
		userLoginAct({commit},value){
			$post('/login',value).then(res=>{
				console.log(res);
				let {code} = res
				// 用户名不存在
				if(code==211){
					uni.showToast({
						title:'用户名不存在！！！',
						icon:'none'
					})
				}else if(code==210){
					uni.showToast({
						title:'密码错误！！！',
						icon:'error'
					})
				}else{
					uni.showToast({
						title:'登录成功',
						icon:'success'
					})
					uni.setStorage({
						key:'USERINFO',
						data:res
					})
					// 返回上一页
					uni.navigateBack({
						delta:1
					})
					commit('initUserInfo',res)
						
				}
			})
		}
	}
}