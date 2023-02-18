<template>
	<!-- 订单页面 -->
	<view>
		<view @click="handleAddress" class="padding flex justify-between">
			<view class="">
				{{orderAddress.username}}，{{orderAddress.phone}}
				<view class="">
					{{orderAddress.city}} 
					{{orderAddress.region}} 
					{{orderAddress.detail}}
				</view>
			</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="padding">
			配送时间
		</view>
		<view class="flex padding justify-between">
			<view class="">
				请选择配送日期
			</view>
			<view class="">
				请选择配送时间
			</view>
		</view>
		<view class="orderInfo padding">
			<view class="cart-content">
				<image src="" mode="" class="skuImg"></image>
			</view>
			<view class="skuInfo">
				<view class="left">
					草莓
					<view class="enName">caomei</view>
					￥199
				</view>
				<view class="right">
					<text>1磅 X 1</text>
				</view>
			</view>
		</view>
		<view class="fixed padding justify-between flex align-center">
			<view class="fs-12">
				￥<span class="sum">199</span>
			</view>
			<button class="cu-btn bg-brown">立即支付</button>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed:{
			...mapGetters({
				// 获取订单地址
				'orderAddress':'address/orderAddress'
			})
		},
		methods:{
			handleAddress(){
				// 跳转到地址页
				uni.navigateTo({
					url:'/pages/address/address'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.orderInfo{
		display: flex;
		.cart-content {
			display: flex;
			.skuImg {
				width: 180rpx;
				height: 180rpx;
				background-color: #d8d8d8;
			}
		}
		.skuInfo{
			flex: 1;
			.left {
				margin-left: 20rpx;
				font-size: 28rpx;
				font-weight: 700;
				.enName {
					font-size: 16rpx;
					color: #c8c8c8;
					margin: 10rpx 0;
				}
			}
			
			.right {
				float: right;
				flex-direction: column;
				align-items: flex-end;
				transform: translateY(-40rpx);
			}
		}
	}
	// 总价
	.sum{
		font-size: 36rpx;
		color:#ff533d;
	}
</style>
