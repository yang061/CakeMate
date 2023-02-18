<script>
	// 全局样式
	// 引入iconfont字体图标，项目报错，使用绝对路径（@）
	import "@/static/font/iconfont.css";
	import "@/static/css/iconfont.css"
	// 引入colorUI样式
	import "@/colorui/main.css";
	import "@/colorui/icon.css";
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 从本地存储里获取用户信息
			try{
				const value = uni.getStorageSync('USERINFO')
				// 登录过
				if(value){
					// 本地存储里有值，就存取到vuex里
					this.$store.commit('user/initUserInfo',value)
					// 触发地址初始化
					this.$store.dispatch('address/initAddressAct',value.objectId)
				}
			}catch(e){
				console.log('failed');
			}
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
