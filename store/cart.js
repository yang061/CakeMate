export default {
	state() {
		return {
			cartList: [{
					id: "10090",
					twoId: 10089,
					name: "拿破仑莓恋",
					french: "Napoléon aux fraises",
					ischeck:false,
					price: "218.00",
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg"
				},
				{
					id: "11547",
					twoId: 11540,
					name: "白色恋人",
					french: "Blanc Amant",
					price: "218.00",
					ischeck:true,
					tid: 11,
					tname: "限定",
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg"
				},{
					id: "1157",
					twoId: 11540,
					name: "白色恋人",
					french: "Blanc Amant",
					price: "218.00",
					ischeck:false,
					tid: 11,
					tname: "限定",
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg"
				}
			]
		}
	},
	mutations: {
		// 单选加工
		cartCheckMut(state, index) {
			state.cartList[index].ischeck = !state.cartList[index].ischeck
		},
		// 全选加工,bool为原本的全选状态
		cartAllCheckMut(state,bool){
			state.cartList.forEach(item=>{
				item.ischeck = !bool
			})
		}
	},
	getters:{
		isAllChecked(state){
			let isAll = true
			state.cartList.forEach(item=>{
				// 有一个不为真就是假
				if(!item.ischeck){
					isAll = false
				}
			})
			return isAll
			
		}
	}
}
