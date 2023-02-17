<template>
	<view>
		<navCustom></navCustom>
		<!-- 把key变化一下，因为有同类商品，磅数不同 -->
		<view class="cart-box" v-for="(item,index) in cartList" :key="item.id+item.idx">
			<view class="cart-footer">
				<view class="cart-content">
					<text class="iconfont icon-gouxuan" :class="item.ischeck ? 'color-yellow' : ''"
						@click="changeChecked(index)"></text>
					<image :src="item.img" mode="" class="skuImg"></image>
				</view>
				<view class="skuInfo">
					<view class="left">
						{{item.name}}
						<view class="enName">{{item.french}}</view>
						￥{{item.list[item.idx].price * item.num}}
					</view>
					<view class="right">
						<view class="edit" @click="handleEdit(index)">
							<text class="iconfont icon-bianji"></text>
						</view>
						<text>{{item.list[item.idx].spec}} X {{item.num}}</text>
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
			<!-- 弹窗 -->
			<u-overlay :show="show" @click="show = false">
				<!-- @click.stop阻止冒泡 -->
				<view class="mask" @click.stop>
					<view class="flex">
						<view class="margin-right-lg ">
							<image :src="item.img" mode="" class="skuImg"></image>
						</view>
						<view class="skuInfo">
							<view class="left">
								{{cartList[cartIndex].name}}
								<view class="margin-tb-xs">{{cartList[cartIndex].french}}</view>
								￥{{checkedCartInfo.price}} 
							</view>
						</view>
					</view>
					<view class="flex justify-between padding-tb-sm u-border-bottom">
						<view class="">
							规格选择
						</view>
						<view class="drop">
							<view @click="dropShow=true">
								{{checkedCartInfo.spec}}
								-
								{{checkedCartInfo.edible}}
								<text class="iconfont icon-xiala"></text>
							</view>
							<view class="drop-list bg-fff" v-if="dropShow">
								<view 
								class="padding-sm" 
								v-for="(item,index) in cartList[cartIndex].list" 
								:key="index"
								@click="handleDropList(index)"
								>
									{{item.spec}}--{{item.edible}}
								</view>
							</view>
						</view>
					</view>
					<view class="flex justify-between padding-tb-sm u-border-bottom">
						<view class="">
							数量选择
						</view>
						<u-number-box button-size="36" @change="changeNum" ></u-number-box>
					</view>
					<view class="flex margin-top ">
						<button @click="show=false" type="default" class="cu-btn lg bg-brown color-fff">取消</button>
						<button @click="handleOk" type="default" class="cu-btn lg bg-yellow">确认</button>
					</view>
				</view>

			</u-overlay>
		</view>
		<view class="bg-fff flex myfixed">
			<view class="flex flex-sub padding align-center">
				<text class="iconfont icon-gouxuan margin-right-xs" :class="isAllChecked ? 'color-yellow' : ''"
					@click="changeAllChecked(isAllChecked)"></text>全选
				<view class="margin-left">
					共计:{{sumPrice}}
				</view>
			</view>
			<view class="bg-yellow padding text-center color-fff">
				立即结算
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				// 控制遮罩层显示和隐藏
				show: true,
				// 遮罩层的下拉框显示与隐藏
				dropShow: true,
				// 购物车索引号,主商品序号
				cartIndex: 0,
				// 子商品序号
				dropIndex:0,
				// 当前弹窗商品数量
				num:1,
				
			};
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList
			}),
			...mapGetters({
				isAllChecked:'cart/isAllChecked',
				sumPrice:'cart/sumPrice',
			}),
			checkedCartInfo(){
				// 过滤选中后的商品信息,弹窗里面
				let {cartIndex,cartList,dropIndex} =this
				return cartList[cartIndex].list[dropIndex]
			}
			
		},
		onLoad() {
			console.log(this.cartList)
		},
		methods: {
			// 修改单选按钮状态
			changeChecked(index) {
				this.$store.commit('cart/cartCheckMut', index)
			},
			// 修改全选按钮状态
			changeAllChecked(bool) {
				this.$store.commit('cart/cartAllCheckMut', bool)
			},
			// 修改编辑信息，控制显示与隐藏
			handleEdit(idx) {
				// 把下拉下标改为vuex中的idx，相当于重置
				this.dropIndex = this.cartList[idx].idx
				this.cartIndex = idx
				this.show = true
			},
			// 子列表下拉点击行为
			handleDropList(dropIdx){
				this.dropShow = false
				this.dropIndex = dropIdx
			},
			handleOk(){
				// 关闭遮罩层
				this.show = false
				let {cartIndex,dropIndex,num} = this
				console.log(cartIndex,dropIndex,num);
				this.$store.commit('cart/cartListCheckMut',{cartIndex,dropIndex,num})
			},
			changeNum({value}){
				this.num =value
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.skuImg {
		width: 180rpx;
		height: 180rpx;
		background-color: #d8d8d8;
	}

	.icon-gouxuan {
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
				background-color: #e6e0e0;

			}

			.chuxiao {
				margin-right: 20rpx;
				color: orangered;
				padding: 5rpx 15rpx;
				border-radius: 20rpx;
				background-color: #e6e0e0;
			}

			.change {
				margin-left: 210rpx;
				font-weight: 700;
			}
		}
	}

	.myfixed {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.cu-btn.lg {
		width: 50%;
		border-radius: 0;
	}

	// 遮罩
	.mask {
		background-color: #fff;
		margin: 15rpx 15rpx 0;
		padding: 20rpx 20rpx 0;
		position: absolute;
		top: 45%;
		left: 18rpx;
		width: 690rpx;
		transform: translateY(-50%);
		border-radius: 10upx;
	}

	.drop {
		position: relative;

		.drop-list {
			width: 300upx;
			position: absolute;
			top: 60upx;
			right: 0;
			box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
			z-index: 10;

			view:hover {
				background-color: #e6e6e6;
			}
		}
	}
</style>
