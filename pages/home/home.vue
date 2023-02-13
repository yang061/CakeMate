<template>
	<!-- scroll-with-animation:滚动的动画 -->
	<scroll-view scroll-y="true" :scroll-into-view="topItem" scroll-with-animation @scroll="handleScroll" class="scroll-cont">
		<view class="home">
			<!-- 用于scroll-into-view的记忆点，scroll-into-view值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 -->
			<view id="top"></view>
			<!-- 顶部导航 -->
			<navCustom></navCustom>
			<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true" indicatorActiveColor="#ffe32a" class="banner">
				<swiper-item v-for="(item,index) in banner" :key="item.objectId">
					<view class="swiper-item" @click="handleBanner(item.link)">
						<image :src="item.img" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 标题 -->
			<home-title title="本季推荐" en-title="Seasonal Recommend" enTit="Seasonal"></home-title>
			<!-- 滚动区域 -->
			<scroll-view scroll-x>
				<view class="scroll-inner">
					<!-- heightFix 高度不变，宽度自适应 -->
					<image src="@/static/img/recommend1.jpeg" mode="heightFix"></image>
					<image src="@/static/img/recommend2.jpg" mode="heightFix"></image>
					<image src="@/static/img/recommend3.jpg" mode="heightFix"></image>
				</view>
			</scroll-view>

			<home-title title="法式经典" en-title="French Classics" enTit="French"></home-title>
			<image src="../../static/img/french.jpg" mode="" class="classify"></image>
			<!-- 商品图片 -->
			<view class="flex justify-between flex-wrap padding-sm">
				<goodItem v-for="item in 4"></goodItem>
			</view>
			<!-- 返回顶部 -->
			<view class="goTop" v-if="isShow" @click="handleGoTop">
				<text class="iconfont icon-tubiao_fanhuidingbu"></text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				// 控制返回顶部的显示和隐藏
				isShow:false,
				// 返回顶部的标记点
				topItem:'',
				// 存储banner数据
				banner:[]
			};
		},
		methods:{
			// 滚动事件处理函数
			handleScroll(event){
				// console.log(event);
				let {scrollTop} = event.detail
				// scroll大于500，才显示返回顶部按钮,scrollTop > 500返回一个布尔值
				this.isShow = scrollTop > 500
				// 把返回顶部的标记点重置为空
				this.topItem =''
			},
			// 返回顶部点击事件
			handleGoTop(){
				this.topItem = 'top'
			},
			//banner点击事件,跳转详情页
			handleBanner(link){
				uni.navigateTo({
					url:`/pages/home/banner-ad?link=${link}`
				})
			}
		},
		// 发送请求
		onLoad() {
			// 方法1：直接用
			// uni.request({
			// 	url:"https://df4xp4bb.lc-cn-n1-shared.com/1.1/classes/classify",
			// 	header:{
			// 		"X-LC-Id": "Df4Xp4BbJGNxEGzWB2CDaLk4-gzGzoHsz",
			// 		"X-LC-Key": "cvSFZiRR3l4NyPkaMQw8PcdO",
			// 		"Content-Type": "application/json"
			// 	},
			// 	success: (res) => {
			// 		console.log(res);
			// 	}
			// })
			// 方法2：使用封装的方法
			// $http('/classify').then(res=>{
			// 	console.log(res);
			// })
			// 方法3：使用封装在原型的方法
			// this.$get('/classify').then(res=>{
			// 	console.log(res);
			// })
			// 获取banner
			this.$get('/classes/banner').then((res)=>{			
				this.banner = res.results;
			})
		},
	}
</script>

<style lang="scss">
	.scroll-cont{
		// 高度拉满，100vh是视口高度
		height: 100vh;
	}
	.home {
		background-color: #fff;
	}

	.banner {
		height: 1000rpx;

		swiper-item {
			height: 100%;
		}

		image {
			width: 100%;
			height: 1000rpx;
		}
	}

	.scroll-inner {
		white-space: nowrap;
	
	image {
			height: 290rpx;
		}
	}

	.classify {
		height: 380rpx;
		width: 100%;
	}

	// 返回顶部样式
	.goTop {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #fff;
		position: fixed;
		bottom: 120rpx;
		right: 25rpx;
		// 加阴影
		box-shadow: 0 0 30rpx 4rpx rgba(0, 0, 0, .4);
		text-align: center;

		.icon-tubiao_fanhuidingbu {
			font-size: 55rpx;
			line-height: 100rpx;
		}
	}
</style>
