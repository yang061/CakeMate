<template>
	<view>
		轮播广告详情页
	</view>
</template>

<script>
	export default {
		name:'banner-ad',
		data() {
			return {
				// 网络地址
				webSrc:''
			};
		},
		// 获取其他页面传过来的数据
		onLoad({link,key2,type}) {
			this.webSrc = `${link}&key2=${key2}&type=${type}`
		}
	}
</script>

<style lang="scss">

</style>
