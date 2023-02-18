<template>
	<!-- 新增地址页面 -->
	<view>
		<!-- 地图组件 -->
		<map class="map"></map>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">
					<text class="cuIcon-friendfill"></text>
				</view>
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
				<picker>
					<view class="picker">
						请选择区域
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
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.map {
		width: 100%;
		height: 400rpx;
	}
</style>
