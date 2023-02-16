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
	body{
		background-color: #fff
	}
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
