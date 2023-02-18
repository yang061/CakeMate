export default {
	namespaced:true,
	state(){
		return {
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
	mutaions:{
		// 设为默认地址
		// setDefaultAddressMut(state,value){
			
		// }
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
		}
	},
	
}