<template>
	<view class="content">
			<!-- 每一项蛋糕内容 -->
		<view class="cake-item" @click="goDetailFn">
			<!-- 封面 -->
			<image class="poster" :src="good.img" mode="" ></image>
			<view class="info-cont">
				<view class="info">
					<view class="fs-26">
						{{good.name}}
					</view>
					<view class="fs-14 color-95">
						{{good.french}}
					</view>
					<view class="fs-18">
						<text>￥</text>
						{{good.price}}
					</view>
				</view>
				<view class="cart-btn">
					<text class="iconfont icon-gouwuche"></text>
				</view>
			</view>
		</view>
	</view>
		
</template>

<script>
	export default {
		name:"goodItem",
		props:['good'],
		data() {
			return {
				
			};
		},
		methods:{
			// 跳转到详情页
			goDetailFn(){
				// 存储到本地缓存
				uni.setStorage({
					key:'DETAIL',
					data:this.good,
					success:()=>{
						uni.navigateTo({
							url:'/pages/detail/detail'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	display: flex;
	// 需要换行
	flex-wrap: wrap;
	justify-content: space-between;
	// padding: 10rpx;
	.cake-item{
		width: 350rpx;
		.poster{
			height: 350rpx;
			background-color: #f5f5f5;
			margin-bottom: 30rpx;
		}
		.info-cont{
			display: flex;
			justify-content: space-between;
			margin-left: 10rpx;
			.info{
				.fs-26{
					color: #121212;
					font-weight: 700;
				}
				.fs-14{
					margin: 12rpx 0;
				}
				.fs-18{
					margin-bottom: 22rpx;
					color: #303030;
					font-weight: 700;
					text{
						margin-right: 3rpx;
					}
				}
			}
			.cart-btn{
				margin-right: 25rpx;
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				background-color: #ffe32a;
				text-align: center;
				
				.icon-gouwuche{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
}
</style>