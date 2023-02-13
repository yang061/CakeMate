<template>
	<view>
		<button type="primary" @click="handleCfy">转录分类</button>
		<button type="primary" @click="handleGood">转录商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			// 转录分类==点击事件
			handleCfy(){
				uni.request({
					url:"https://h5.mcake.com/api/5e90690f0e270d04?cityId=110",
					method:'get',
					header:{
						"access-token": '3564bbb4ffcb51155289f6141ee17a2b',
						"version": "v1.0"
					},
					success: (res) => {
						console.log(res);
						let {data} = res.data
						let batchObj =  {"requests": []}
						// 批量操作对象,转录到leancloud里面去
						data.forEach(item=>{
							batchObj.requests.push({
							  "method": "POST",
							  "path": "/1.1/classes/classify",
							  "body": item
							})
						})
						// 批量传入分类
						this.$post('/batch',batchObj)
					}
				})
			},
			// 转录商品
			handleGood(){
				uni.request({
					url:"https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=6",
					method:'get',
					header:{
						"access-token": '3564bbb4ffcb51155289f6141ee17a2b',
						"version": "v1.0"
					},
					success: (res) => {
						console.log(res);
						let {list} = res.data.data
						let batchObj =  {"requests": []}
						// 批量操作对象,转录到leancloud里面去
						list.forEach(item=>{
							batchObj.requests.push({
							  "method": "POST",
							  "path": "/1.1/classes/goods",
							  "body": item
							})
						})
						// 批量传入分类
						this.$post('/batch',batchObj)
					}
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">

</style>
