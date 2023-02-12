<template>
	<view class="title">
		<view class="flex">
			<text class="iconfont icon-canju"></text>
			<view class="flex flex-direction justify-center text">
				<text class="cName">
					{{title}}
				</text>
				<text class="fs-12">{{enTitle}}</text>
			</view>
		</view>
		<view class="">
			{{enTit}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "home-title",
		props:['title','en-title','en-tit'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 60rpx 40rpx;
	}

	.icon-canju {
		font-size: 80rpx;
	}
	.cName{
		font-weight: 700;
		font-size: 34rpx;
	}
	.text {
		margin-left: 50rpx;
	}
</style>
