export default {
	namespaced:true,
	state(){
		return {
			// 记录用户勾选的地址索引
			checkedIndex:-1,
			addressList:[
				{
					username:'张1',
					phone:'158888888',
					city:'成都',
					region:'青羊区',
					detail:'青羊街道',
					isDefault:true
				},
				{
					username:'张2',
					phone:'158888888',
					city:'成都',
					region:'成华区',
					detail:'成华大道',
					isDefault:false
				},
				{
					username:'张3',
					phone:'158888888',
					city:'成都',
					region:'成华3区',
					detail:'成华大道',
					isDefault:false
				},
				
			]
		}
	},
	mutations:{
		addressCheckMut(state,value){
			state.checkedIndex = value
			console.log(value);
		},
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