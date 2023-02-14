<template>
	<view class="cake">
	<navCustom></navCustom>
	<view class="content">
		<!-- 把good对象传给子组件 -->
		<goodItem v-for="good in goodsList" :key="good.id" :good='good'></goodItem>
		<view class="tabBar">
			<view class="flex align-center" v-for="(tab,index) in tabArr" :key="index" @click="handleTab(tab)">
				<text>
					{{tab.name}}
				</text>
				<u-line direction="col" length="20" margin="40rpx" v-if="index<tabArr.length-1"></u-line>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[],
				page:0,
				skip:0,
				// 存储分类类型
				bcid:1,
				// 底部菜单数据包,不需要pages.json里的底部导航栏
				tabArr:[
					{
						name:"分类",
						bcid:'',
						// 目标路径
						target:''
					},{
						name:"蛋糕",
						bcid:'1',
						// 目标路径
						target:'/page/cake/cake'
					},{
						name:"面包",
						bcid:'11',
						// 目标路径
						target:'/page/bread/bread'
					},{
						name:"小食",
						bcid:'6',
						// 目标路径
						target:'/page/food/food'
					},{
						name:"购物车",
						bcid:'',
						// 目标路径
						target:'/page/shopcart/shopcart'
					},
				]
			};
		},
		onLoad() {
			// 法1：
			// // 只加载蛋糕的数据(where={"bcid":1}),且每次只加载8条(limit=8)
			// let url =`/classes/goods?where={"bcid":1}&limit=8&skip=0`
			// this.$get(url).then(res=>{
			// 	console.log(res);
			// 	this.goodsList=res.results
			// 	this.page++
			// })
			// 法二：使用封装方法
			this.loadData()
		},
		// 触底事件,下拉事件
		onReachBottom() {
			this.loadData()
		},
		// 下拉刷新
		onPullDownRefresh() {
			// 数据包清空
			this.goodsList=[]
			this.page = 0
			this.skip=0
			// 重新请求数据
			this.loadData()
		},
		methods:{
			// 加载数据函数
			loadData(){
				this.skip = this.page * 8
				let url =`/classes/goods?where={"bcid":${this.bcid}}&limit=8&skip=${this.skip}`
				this.$get(url).then(res=>{
					// 停止下拉刷新的加载弹框
					uni.stopPullDownRefresh()
					let {results} = res
					// 判断results中有无数据/长度是否为0,不为0即存在
					if(results.length){
						// 当前页面加1
						this.page++
						// 追加新的数据
						this.goodsList = [
							...this.goodsList,
							...res.results
						]
						// 终止代码
						return
					}
					// 显示弹框
					uni.showToast({
						title:'没有数据了',
						icon:'none'
					})
				})
			},
			
			// 导航栏处理函数，点击不同的导航栏渲染不同的数据
			handleTab(tab){
				let {bcid,target} = tab
				if(bcid){
					// bcid存在，不为空
					// 清除数据包,页数
					// BUG 在重新请求时，会把原来的数据也请求过来
					// 原因：下拉刷新时，执行的是onPullDownRefresh，里面的bcid又会变为默认值1
					// 解决：在data里定义一个bcid，用来存储分类
					this.page = 0
					this.skip = 0
					this.goodsList = []
					// 修改bcid值
					this.bcid = bcid
					// 重新渲染数据
					this.loadData(bcid)
				}
			}
		}
	}
</script>

<style lang="scss">
.cake{
	padding: 30rpx 15rpx 80rpx;
	background-color: #fff;
	
}
.content{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	
	.tabBar{
		display: flex;
		// 保证竖线的间距一样
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		// padding: 10rpx 0;
		background-color: #fff;
		box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, 0.3)
	}
}
</style>
