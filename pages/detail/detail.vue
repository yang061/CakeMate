<template>
	<view>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item" v-for="banner in detail.list"  :key="banner.id">
					<view v-for="(images,index) in banner.pic.list"  :key="index">
						<image :src="`${banner.pic.url}${img}`" mode="widthFix" v-for="(img,index) in images" :key="index"></image>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="flex justify-around">
			<view 
				v-for="(item,index) in detail.list" 
				:key="index"
				:class="['text-center padding-sm tab',{active:tabIdx==index}]" 
				@click="tabIdx=index"
			>
			
				<view class="">{{item.spec}}</view>
				<view class="">{{item.weight}}</view>
				<view class="">{{item.edible}}</view>
			</view>
		</view>
		<view class="padding fs-28 u-border-bottom">
			￥{{detail.list[tabIdx].price}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].ahead}}
			<text class="margin-lr">10cm*20cm</text>
			{{detail.list[tabIdx].edible}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].fittings}}
		</view>
		<view class="flex justify-around fixed padding-tb-sm">
			<button 
			class="cu-btn bg-brown lg" 
			type="default"
			@click="cartAddFn(detail)"
			>
			加入购物车
			</button>
			<button class="cu-btn bg-yellow lg" type="default">立即购买</button>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				tabIdx:0,
				detail:null
			}
		},
		onLoad(){
			uni.getStorage({
				key:'DETAIL',
				success: (res) => {
					this.detail = res.data
				}
			})
		},
		methods:{
			// 加入购物车
			cartAddFn(goodObj){
				console.log(this.$store);
				this.$store.commit('cart/cartAddMut',goodObj)
			}
		}
	}
</script>

<style lang="scss">
.banner{
	height: 600upx;
	swiper-item{
		height: 600upx;
	}
	image{
		width: 100%;
		// height: 600upx;
	}
}
.tab{
	&.active{
		border-bottom: 4upx solid #fae456;
	}
}
.cu-btn.lg{
	width: 46%;
}
</style>
