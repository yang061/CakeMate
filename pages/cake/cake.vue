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
		<!-- 左侧菜单遮罩层 -->
		<u-popup :show="show" mode="left" @close="handleClose">
			<view class="left-mask">
				<view class="left-menu" v-for="(item,index) in cfyList" :key="item.objectId">
					{{item.bname}}
					<!-- 第一项的时候才显示口味筛选和场景筛选 -->
					<view class="subMenu1" v-if="index==0" @click="listShow = !listShow" :style="{'border-bottom':(listShow==false ?'1px solid rgb(214, 215, 217)':'')}">
						口味筛选
					</view>
					<!-- 3级子菜单,isLink显示右箭头 -->
					<u-cell-group v-if="listShow">
						<u-cell 
						:title="subItem.tname" 
						isLink v-for="(subItem,index) in item.list" 
						:key="subItem.tid" 
						@click="handleList(subItem,'list')"
						></u-cell>
					</u-cell-group>
					<view class="subMenu2" v-if="index==0" @click="sceneShow = !sceneShow" >
						场景筛选
					</view>
					<u-cell-group v-if="sceneShow" >
						<u-cell 
						:title="scene.tname" 
						isLink v-for="(scene,index) in item.scene" 
						:key="index"
						@click="handleList(scene,'scene')"
						></u-cell>
					</u-cell-group>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [],
				page: 0,
				skip: 0,
				// 存储分类类型
				bcid: 1,
				// 底部菜单数据包,不需要pages.json里的底部导航栏
				tabArr: [
					{name: "分类",bcid: '',target: ''}, 
					{name: "蛋糕",bcid: '1',target: '/page/cake/cake'}, 
					{name: "面包",bcid: '11',target: '/page/bread/bread'}, 
					{name: "小食",bcid: '6',target: '/page/food/food'}, 
					{name: "购物车",bcid: '',target: '/page/shopcart/shopcart'},
				],
				// 控制遮罩层显示与隐藏
				show:false,
				// 存储分类数据
				cfyList:[],
				// 控制左侧遮罩层场景信息出现与隐藏
				sceneShow:false,
				// 控制左侧遮罩层列表信息出现与隐藏
				listShow:false,
			};
		},
		onLoad() {
			console.log(this.cfyList);
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
			
			// 获取左侧菜单数据包
			this.$get('/classes/classify').then(res=>{
				this.cfyList = res.results
			})
		},
		// 触底事件,下拉事件
		onReachBottom() {
			this.loadData()
		},
		// 下拉刷新
		onPullDownRefresh() {
			// 数据包清空
			this.goodsList = []
			this.page = 0
			this.skip = 0
			// 重新请求数据
			this.loadData()
		},
		computed:{
			num(){
				return this.$store.state.count.num
			},
			condition(){
				return this.$store.state.condition.condition
			}
		},
		methods: {
			// 刷新页面数据
			reloadData(){
				this.page = 0
				this.skip = 0
				this.goodsList = []
				this.loadData()
			},
			// 加载数据函数
			loadData() {
				this.skip = this.page * 8
				let wh = JSON.stringify(this.condition)
				let url = `/classes/goods?where=${wh}&limit=8&skip=${this.skip}`
				this.$get(url).then(res => {
					// 停止下拉刷新的加载弹框
					uni.stopPullDownRefresh()
					let {
						results
					} = res
					// 判断results中有无数据/长度是否为0,不为0即存在
					if (results.length) {
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
						title: '没有数据了',
						icon: 'none'
					})
				})
			},

			// 导航栏处理函数，点击不同的导航栏渲染不同的数据
			handleTab(tab) {
				let {
					bcid,
					target
				} = tab
				if (bcid) {
					// bcid存在，不为空
					// 清除数据包,页数
					// BUG 在重新请求时，会把原来的数据也请求过来
					// 原因：下拉刷新时，执行的是onPullDownRefresh，里面的bcid又会变为默认值1
					// 解决：在data里定义一个bcid，用来存储分类
					
					// 修改bcid值
					// 单项数据流
					this.$store.commit('changeCondition',{
						// 转换为数字类型
						bcid:Number(bcid)
					})
					// 刷新数据
					this.reloadData()
				}
				if(!bcid&&!target){
					// 没有bcid和target=== 分类按钮
					// 点击后,显示遮罩层
					this.show = true
				}
				// 点击购物车
				if(target=='/page/shopcart/shopcart'){
					uni.navigateTo({
						url:'/pages/shopcart/shopcart'
					})
				}
			},
			
			// 遮罩层关闭的回调
			handleClose(){
				this.show=false
			},
			
			// 口味筛选，场景筛选点击事件
			handleList(scene,type){
				let {bid,tid} =scene
				console.log(scene);
				let obj = {
					bcid:bid
				}
				type === 'list' ? obj.fid =tid : obj.sid = tid
				this.$store.commit('changeCondition',obj)
				this.reloadData()
			},

			
		}
	}
</script>

<style lang="scss">
	.cake {
		padding: 30rpx 15rpx 80rpx;
		background-color: #fff;

	}

	.content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.tabBar {
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
	// 左侧遮罩层样式
	.left-mask{
		margin-top: 100rpx;
		width: 400rpx;
		.left-menu{
			padding: 15rpx 15rpx 0;
			// border-bottom: 1px solid rgb(214, 215, 217);
			border-top: 1px solid rgb(214, 215, 217);
			.subMenu1{
				margin-top: 15rpx;
				padding: 15rpx;
				border-top: 1px solid rgb(214, 215, 217);
				// border-bottom: 1px solid rgb(214, 215, 217);
			}
			.subMenu2{
				padding: 15rpx;
			}
		}
	}
</style>
