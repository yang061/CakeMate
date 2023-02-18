import {$post,$get,$delete} from '@/utils/request.js'
export default {
	namespaced:true,
	state(){
		return {
			// 记录用户勾选的地址索引
			checkedIndex:-1,
			addressList:[
				// {
				// 	username:'张1',
				// 	phone:'158888888',
				// 	ci11111ty:'成都',
				// 	region:'青羊区',
				// 	detail:'青羊街道',
				// 	isDefault:true
				// },
				// {
				// 	username:'张2',
				// 	phone:'158888888',
				// 	city:'成都',
				// 	region:'成华区',
				// 	detail:'成华大道',
				// 	isDefault:false
				// },
				// {
				// 	username:'张3',
				// 	phone:'158888888',
				// 	city:'成都',
				// 	region:'成华3区',
				// 	detail:'成华大道',
				// 	isDefault:false
				// },
				
			]
		}
	},
	mutations:{
		addressCheckMut(state,value){
			state.checkedIndex = value
			console.log(value);
		},
		// 把地址加入到数据库中
		addAddressMut(state,addressObj){
			state.addressList.push(addressObj)
		},
		// 初始化地址数据
		initAddressMut(state,addressArr){
			state.addressList = addressArr
		},
		deleteAddressMut(state,index){
			console.log(state.addressList);
		}
	},
	actions:{
		// 设为默认地址
		setDefaultAddress({commit,state},index){
			state.addressList.forEach((item,idx)=>{
				// 不是选择的那个地址就把取消默认地址
				if(idx !== index){
					item.isDefault = false
				}else{
					// 是选中的那个
					item.isDefault = true
				}
			})
		},
		// 勾选新地址
		addressCheck({commit},index){
			commit('addressCheckMut',index)
			uni.navigateBack({
				delta:1
			})
			
		},
		addAddressAct({commit},addressObj){
			$post('/classes/address',addressObj).then(res=>{
				// console.log(res);
				let {objectId} = res
				// 把新地址的id追加到对象里面
				commit('addAddressMut',{
					...addressObj,
					objectId
				})
				// 返回上一页
				uni.navigateBack({
					delta:1
				})
			})
		},
		// 初始化地址数据
		initAddressAct(context,userId){
			let url = `/classes/address?where={"userId":"${userId}"}`
			$get(url).then(({results})=>{
				context.commit('initAddressMut',results)
				console.log(results);
			})
		},
		// 删除地址
		deleteAddressAct(context,{objectId,userId}){
			$delete(`/classes/address/${objectId}`).then(res=>{
				// 重新初始化数据
				context.dispatch("initAddressAct",userId)
				// uni.navigateTo({
				// 	url:"@/../pages/address/address"
				// })
				console.log(userId);
			})
		}
	},
	getters:{
		// 订单页面的地址
		orderAddress(state){
			// 根据checkedIndex与isDefault共同得到一个地址对象
			let {checkedIndex,addressList} = state
			if(checkedIndex !== -1){
				// 用户选择了地址,返回勾选的地址
				return addressList[checkedIndex]
			}
			for(let i=0 ; i < addressList.length ; i++){
				if(addressList[i].isDefault){
					// 返回默认地址
					return addressList[i]
				}
			}
			// return
		}
	}
}