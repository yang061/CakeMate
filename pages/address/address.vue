<template>
	<view>
		<view 
		class="margin-sm u-border padding default" 
		v-for="(address,index) in addressList" 
		:key="index"
		>
			<view class="default-cont" v-if="address.isDefault">
				默
			</view>
			<view class="flex justify-between">
				<view class="flex align-center">
					<text 
					class="iconfont icon-gouxuan margin-right"
					:class="checkedIndex == index || address.isDefault ? 'color-yellow' : ''"
					@click="handleCheckAddress(index)"
					></text>
					<view class="">
						{{address.username}}，{{address.phone}}
						<view class="">
							{{address.city}} 
							{{address.region}} 
							{{address.detail}}
						</view>
					</view>
				</view>
				<view class="edit">
					<text class="iconfont icon-bianji"></text>
				</view>
			</view>
			<view class="flex justify-around align-center margin-top">
				<view class="" v-if="address.isDefault">
					默认地址
				</view>
				<view class="" v-else @click="setDefaultFn(index)">
					设为默认
				</view>
				<u-line length="25" direction="col" color="#7a7a7a"></u-line>
				<view class="color-95">
					删除地址
				</view>
			</view>
		</view>
		<view class="text-center">
			<button type="default" class="cu-btn bg-brown color-fff" @click="addAddressFn">新增地址</button>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
			
			};
		},
		computed:{
			// 取出地址信息列表
			...mapState({
				addressList:state=>state.address.addressList,
				// 被选中的索引号
				checkedIndex:state=>state.address.checkedIndex,
				userInfo:state=>state.user.userInfo
			}),
		},
		methods:{
			// 设为默认==》点击事件
			setDefaultFn(index){
				// 发送异步请求
				let obj ={"requests":[]}
				this.addressList.forEach((item,i)=>{
					// 当前索引等于传过来的索引号为真
					let bool = i===index
					obj.requests.push({
						"method":"put",
						"path":`/1.1/classes/address/${item.objectId}`,
						"body":{
							"isDefault":bool
						}
					})
				})
				// 批量操作在线存储
				this.$post('/batch',obj).then(res=>{
					this.$store.dispatch('address/setDefaultAddress',index)
				})
				
			},
			// 选中地址处理函数
			handleCheckAddress(index){
				this.$store.dispatch('address/addressCheck',index)
			},
			// 跳转到新增地址页面
			addAddressFn(){
				uni.navigateTo({
					url:'/pages/address/address-detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.icon-gouxuan{
		color: #b9b9b9;
	}
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
