<template>
	<view>
		<u-navbar  title="MCAKE" :safeAreaInsetTop="false" class="title">
			<view class="u-nav-slot" slot="left">
				<u-icon name="map-fill" size="40" class="color-aaa"></u-icon>
				<text class="address">四川</text>
			</view>
			<view class="u-nav-slot" slot="right">
				<u-icon name="search" size="40"></u-icon>
				<u-line direction="column" :hairline="false" length="30" margin="0 8px"></u-line>
				<u-icon name="list-dot" size="40"></u-icon>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		name:"navCustom",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.title{
	position: fixed;
	top: 0;
	left:0;
	width: 100%;
	z-index: 999;
	font-weight: 700;
	.u-nav-slot{
		position: relative;
		display: flex;
		align-items: baseline;
		.address{
			width: 60rpx;
			position: absolute;
			top: 0rpx;
			left:50rpx;
			font-weight: 400;
			color: #666;
			span{
				display: inline-block;
			}
		}
	}
}
</style>