let baseURL = "https://df4xp4bb.lc-cn-n1-shared.com/1.1"
// url:地址,method='get' 方法默认为get ,data={} 数据，默认为空
export const $http =  function (url,method='get',data={}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseURL+url,
			method,
			header:{
				"X-LC-Id": "Df4Xp4BbJGNxEGzWB2CDaLk4-gzGzoHsz",
				"X-LC-Key": "cvSFZiRR3l4NyPkaMQw8PcdO",
				"Content-Type": "application/json"
			},
			data,
			success: (res) => {
				// 成功回调
				resolve(res.data)
			},
			fail:(err)=>{
				// 失败回调
				reject(err)
			}
		})
	})
	
}

// 封装的get请求方法
export const $get =function(url,data={}){
	return $http(url,'get',data)
}
// 封装的post请求方法
export const $post =function(url,data={}){
	return $http(url,'post',data)
}
// 封装的put请求方法
export const $put =function(url,data={}){
	return $http(url,'put',data)
}
// 封装的delete请求方法
export const $delete =function(url,data={}){
	return $http(url,'delete',data)
}