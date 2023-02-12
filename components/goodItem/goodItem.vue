<template>
	<view class="content">
			<!-- 每一项蛋糕内容 -->
		<view class="cake-item">
			<!-- 封面 -->
			<view class="poster">
				
			</view>
			<view class="info-cont">
				<view class="info">
					<view class="fs-26">
						甜甜霉霉
					</view>
					<view class="fs-14 color-95">
						tiantianmeimei
					</view>
					<view class="fs-18">
						<text>￥</text>
						218.00
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
		data() {
			return {
				
			};
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