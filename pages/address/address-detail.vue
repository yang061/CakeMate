<template>
	<!-- 新增地址页面 -->
	<view>
		<!-- 地图组件 -->
		<map class="map"></map>
		<form @submit="handleSubmit">
			<view class="cu-form-group margin-top">
				<view class="title">
					<text class="cuIcon-friendfill"></text>
				</view>
				<!-- name需要和address里面的名字一样 -->
				<input name="username" value="张三丰" class="text-right" placeholder="请输入姓名"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-mobilefill"></text>
				</view>
				<input name="phone" value="13988885555" class="text-right" placeholder="请输入电话"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<picker :range="regionArr" @change="changeRegionIndexFn">
					<view class="picker" >
						{{regionIndex==-1 ? "请选择区域" : regionArr[regionIndex]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<input name="detail" value="大西洋国际" class="text-right" placeholder="请输入详细地址"></input>
			</view>
			<view class="padding">
				<button form-type="submit" class="cu-btn bg-brown block">
					确定
				</button>
			</view>
		</form>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				// 选择区域
				regionArr:[
					'成都市',
					'南充市',
					'广安市',
				],
				// 区域的下标，-1代表没有选择
				regionIndex:-1,
			};
		},
		computed:{
			...mapState({
				// 获取用户id
				userInfo:state=>state.user.userInfo
			})
		},
		methods:{
			// 下拉选择，修改索引值
			changeRegionIndexFn(event){
				// console.log(event);
				let {value} = event.detail
				this.regionIndex = value
			},
			// 表单提交回调
			handleSubmit(event){
				// console.log(event);
				let {value} = event.detail
				let {regionArr,regionIndex} = this
				value.region = regionArr[regionIndex]
				value.city = '四川省'
				value.userId = this.userInfo.objectId
				// 加入地址
				this.$store.dispatch('address/addAddressAct',value)
				console.log(value);
			},
			
		}
	}
</script>

<style lang="scss">
	.map {
		width: 100%;
		height: 400rpx;
	}
</style>
