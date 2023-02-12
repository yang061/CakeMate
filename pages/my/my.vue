<template>
	<view>
	<!-- 个人中心 -->
	<view class="blank">
		
	</view>
	<view class="cont">
		<view class="margin bg-fff">
			<view class="text-center flex flex-direction align-center">
				<image src="../../static/logo.png" mode="" class="avatar"></image>
				<text>张三丰</text>
			</view>
			<view class="mygrid">
				<!-- 每一个格子 -->
				<view class="item" v-for="(grid,index) in gridArr" :key="index" :style="{padding:index==6?'15px 0':'15px'}">
					<!-- 用数组包裹,常量用引号包裹,中间用逗号隔开 -->
					<text :class="['iconfont margin-bottom-xs',grid.icon]"></text>
					<text class="fs-22">{{grid.name}}</text>		
				</view>
			</view>
		</view>
	</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 自定义数据包
				gridArr:[
					{
						icon:'icon-wodedingdan',
						name:'我的订单',
					},{
						icon:'icon-daifukuan',
						name:'待付款',
					},{
						icon:'icon-daishouhuo',
						name:'待收货',
					},{
						icon:'icon-huiyuandengji',
						name:'会员等级',
					},{
						icon:'icon-jifen1',
						name:'积分',
					},{
						icon:'icon-yue',
						name:'余额',
					},{
						icon:'icon-youhuiquan',
						name:'红包/优惠卷',
					},{
						icon:'icon-yinhangqia',
						name:'现金卡',
					},
				]
			};
		}
	}
</script>

<style lang="scss">
.blank{
	height: 100rpx;
}
.cont{
	background-color:#f6f6f6 ;
	.mygrid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		.iconfont{
			font-size: 70rpx;
			color:#888;
		}
		.item{
			display: flex;
			flex-direction: column;
			text-align: center;	
		}
	}
	.avatar{
		margin-top: -75rpx;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		// 向上位移
		// transform: translateY(-50%);
	}
}
</style>
