<template>
	<!-- 订单页面 -->
	<view>
		 <u-navbar
		            title="订单详情"
		            :autoBack="true"
		        >
		        </u-navbar>
		<view @click="handleAddress" class="padding flex justify-between">
			<view class="" v-if="orderAddress">
				{{orderAddress.username}}，{{orderAddress.phone}}
				<view class="">
					{{orderAddress.city}}
					{{orderAddress.region}}
					{{orderAddress.detail}}
				</view>
			</view>
			<view class="" v-else>
				请选择地址
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
		<view class="orderInfo padding" v-for="item in orderCartList" :key="item.id">
			<view class="cart-content">
				<image :src="item.img" mode="" class="skuImg"></image>
			</view>
			<view class="skuInfo">
				<view class="left">
					{{item.name}}
					<view class="enName">{{item.french}}</view>
					￥{{item.price}}
				</view>
				<view class="right" >
					<text> 1磅X {{item.num}}</text>
				</view>
			</view>
		</view>
		<view class="fixed padding justify-between flex align-center">
			<view class="fs-12">
				￥<span class="sum">{{totalPrice}}</span>
			</view>
			<button class="cu-btn bg-brown">立即支付</button>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			...mapGetters({
				// 获取订单地址
				'orderAddress': 'address/orderAddress',
			}),
			...mapState({
				// 获取购物车中提交的地址
				'orderCartList':state=>state.cart.orderCartList
			}),
			totalPrice(){
				let totalPrice = 0
				this.orderCartList.forEach(item=>{
					totalPrice += item.price*item.num
				})
				return totalPrice
			}
		},
		onLoad(event) {
			// console.log(JSON.parse(event));
			console.log(event);
		},
		
		methods: {
			handleAddress() {
				// 跳转到地址页
				uni.navigateTo({
					url: '/pages/address/address',
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.orderInfo {
		display: flex;

		.cart-content {
			display: flex;

			.skuImg {
				width: 180rpx;
				height: 180rpx;
				background-color: #d8d8d8;
			}
		}

		.skuInfo {
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
	.sum {
		font-size: 36rpx;
		color: #ff533d;
	}
</style>
