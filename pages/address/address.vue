<template>
	<view>
		<view class="margin-sm u-border padding default">
			<view class="default-cont">
				默
			</view>
			<view class="flex justify-between">
				<view class="flex align-center">
					<text class="iconfont icon-gouxuan margin-right"></text>
					<view class="">
						111，888888888
						<view class="">
							四川 成都
						</view>
					</view>
				</view>
				<view class="edit">
					<text class="iconfont icon-bianji"></text>
				</view>
			</view>
			<view class="flex justify-around align-center margin-top">
				<view class="">
					设为默认
				</view>
				<u-line length="25" direction="col" color="#7a7a7a"></u-line>
				<view class="">
					删除地址
				</view>
			</view>
		</view>
		<view class="text-center">
			<button type="default" class="cu-btn bg-brown color-fff">新增地址</button>
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
	.default{
		position: relative;
		// 溢出隐藏
		overflow: hidden;
		.default-cont{
			padding: 20rpx 10rpx 10rpx;
			width: 80rpx;
			background-color: #fae456;
			font-size: 8rpx;
			text-align: center;
			position: absolute;
			top: -20rpx;
			right: -30rpx;
			transform: rotate(45deg);
		}
	}
</style>
