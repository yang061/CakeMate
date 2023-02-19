<template>
	<view>
		<view class="tabBar">
			<view class="flex align-center" v-for="(tab,index) in tabArr" :key="index" @click="handleTab(tab)">
				<text>
					{{tab.name}}
				</text>
				<u-line direction="col" length="20" margin="40rpx" v-if="index<tabArr.length-1"></u-line>
			</view>
		</view>
		<!-- 左侧菜单遮罩层 -->
		<u-popup :show="show" mode="left" @close="handleClose">
			<view class="left-mask">
				<view @click="handleList(item,'dalei')" class="left-menu" v-for="(item,index) in cfyList"
					:key="item.objectId">
					{{item.bname}}
					<!-- 第一项的时候才显示口味筛选和场景筛选 -->
					<view class="subMenu1" v-if="index==0" @click="listShow = !listShow"
						:style="{'border-bottom':(listShow==false ?'1px solid rgb(214, 215, 217)':'')}">
						口味筛选
					</view>
					<!-- 3级子菜单,isLink显示右箭头 -->
					<u-cell-group v-if="listShow">
						<u-cell :title="subItem.tname" isLink v-for="(subItem,index) in item.list" :key="subItem.tid"
							@click="handleList(subItem,'list')"></u-cell>
					</u-cell-group>
					<view class="subMenu2" v-if="index==0" @click="sceneShow = !sceneShow">
						场景筛选
					</view>
					<u-cell-group v-if="sceneShow">
						<u-cell :title="scene.tname" isLink v-for="(scene,index) in item.scene" :key="index"
							@click="handleList(scene,'scene')"></u-cell>
					</u-cell-group>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "tab-custom",
		data() {
			return {
				tabArr: [{
						name: "分类",
						bcid: '',
						target: ''
					},
					{
						name: "蛋糕",
						bcid: '1',
						target: '/pages/cake/cake'
					},
					{
						name: "面包",
						bcid: '11',
						target: '/pages/cake/cake'
					},
					{
						name: "小食",
						bcid: '6',
						target: '/pages/cake/cake'
					},
					{
						name: "购物车",
						bcid: '',
						target: '/pages/shopcart/shopcart'
					},
				],
				// 控制遮罩层显示与隐藏
				show: false,
				// 存储分类数据
				cfyList: [],
				// 控制左侧遮罩层场景信息出现与隐藏
				sceneShow: false,
				// 控制左侧遮罩层列表信息出现与隐藏
				listShow: false,
			};
		},
		created() {
			// 获取左侧菜单数据包
			this.$get('/classes/classify').then(res => {
				this.cfyList = res.results
			})
		},
		methods: {
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
					this.$store.commit('changeCondition', {
						// 转换为数字类型
						bcid: Number(bcid)
					})
					console.log(target);
					uni.navigateTo({
						url: target
					})
				}
				if (!bcid && !target) {
					// 没有bcid和target=== 分类按钮
					// 点击后,显示遮罩层
					this.show = true
				}
				// 点击购物车
				if (target == '/pages/shopcart/shopcart') {
					uni.navigateTo({
						url: target
					})
				}
			},

			// 遮罩层关闭的回调
			handleClose() {
				this.show = false
			},
			// 口味筛选，场景筛选点击事件
			handleList({
				bid,
				tid
			}, type) {
				let obj = {
					bcid: bid
				}
				if (type == 'list') {
					obj.fid = tid
				}
				if (type = 'scene') {
					obj.sid = tid
				}
				this.$store.commit('changeCondition', obj)
				this.show = false
				uni.navigateTo({
					url: "/pages/cake/cake"
				})
			},
		}
	}
</script>

<style lang="scss">
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

	// 左侧遮罩层样式
	.left-mask {
		margin-top: 100rpx;
		width: 400rpx;

		.left-menu {
			padding: 15rpx 15rpx 0;
			// border-bottom: 1px solid rgb(214, 215, 217);
			border-top: 1px solid rgb(214, 215, 217);

			.subMenu1 {
				margin-top: 15rpx;
				padding: 15rpx;
				border-top: 1px solid rgb(214, 215, 217);
				// border-bottom: 1px solid rgb(214, 215, 217);
			}

			.subMenu2 {
				padding: 15rpx;
			}
		}
	}
</style>
