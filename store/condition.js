export default {
	state(){
		// 商品列表查询条件
		return {
			condition:{
				bcid:1
			}
		}
	},
	mutations:{
		changeCondition(state,obj){
			state.condition =obj
		}
	}
}