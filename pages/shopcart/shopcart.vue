<template>
	<view>
		<view class="cart-box">
			<view class="cart-title">
				<text class="iconfont icon-"></text>

			</view>
			<view class="cart-footer">
				<view class="cart-content">
					<text class="iconfont icon-gouxuan"></text>
					<image src="" mode="" class="skuImg"></image>
				</view>
				<view class="skuInfo">
					<view class="left">
						安逸兔
						<view class="enName">anyitu</view>
						￥218.00
					</view>
					<view class="right">
						<view class="edit">
							<text class="iconfont icon-bianji"></text>
						</view>
						<text>1磅(454g) X 1</text>
					</view>
				</view>
			</view>
			<view class="huodong">
				<view class="youhui">
					<view class="biaopei">标配</view>
					10份标配餐具(免费)
				</view>
				<view class="youhui">
					<view class="chuxiao">促销</view>
					不使用活动优惠
					<text class="change">修改优惠</text>
				</view>
			</view>
		</view>
		<view class="bg-fff flex myfixed">
			<view class="flex flex-sub padding align-center">
				<text class="iconfont icon-gouxuan margin-right-xs"></text>全选
				<view class="margin-left">
					共计:189
				</view>
			</view>
			<view class="bg-yellow padding text-center color-fff">
				立即结算
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.icon-gouxuan{
		color: #d8d8d8;
	}
	.cart-box {
		padding: 30rpx 15rpx;

		.cart-title {
			display: flex;

		}

		.cart-footer {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.cart-content {
				display: flex;

				.icon-gouxuan {
					margin: 15rpx;
					line-height: 150rpx;
				}

				.skuImg {
					width: 180rpx;
					height: 180rpx;
					background-color: #d8d8d8;
				}

			}

			.skuInfo {
				flex: 1;
				height: 180rpx;
				padding: 10rpx 25rpx;
				display: flex;
				justify-content: space-between;

				.left {
					font-size: 28rpx;
					font-weight: 700;

					.enName {
						font-size: 16rpx;
						color: #c8c8c8;
						margin: 15rpx 0;
					}
				}

				.right {
					display: flex;
					flex-direction: column;
					align-items: flex-end;

					.edit {
						width: 80rpx;
						height: 80rpx;
						background-color: #e6e6e6;
						text-align: center;
						line-height: 80rpx;
						border-radius: 50%;
						margin-bottom: 10rpx;

						.icon-bianji {
							font-size: 48rpx;
						}
					}


				}
			}
		}

		.huodong {
			.youhui {
				display: flex;
				margin: 15rpx 0 15rpx 60rpx;
				align-items: center;
			}

			.biaopei {
				margin-right: 20rpx;
				padding: 5rpx 15rpx;
				border-radius: 20rpx;
				background-color: #ebdfca;

			}

			.chuxiao {
				margin-right: 20rpx;
				color: orangered;
				padding: 5rpx 15rpx;
				border-radius: 20rpx;
				background-color: #ebdfca;
			}

			.change {
				margin-left: 210rpx;
				font-weight: 700;
			}
		}
	}
	.myfixed{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
