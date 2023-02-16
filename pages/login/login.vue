<template>
  <view class="content">
	<navCustom></navCustom>
    <view class="header">
      <image src="../../static/shilu-login/logo.png"></image>
    </view>

    <view class="list">
      <view class="list-call">
        <image class="img" src="/static/shilu-login/1.png"></image>
        <input class="sl-input" v-model="username" type="number" maxlength="11" placeholder="输入用户名" />
      </view>
      <view class="list-call">
        <image class="img" src="/static/shilu-login/2.png"></image>
        <input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
      </view>

    </view>

    <view class="button-login" hover-class="button-hover" @tap="loginFn">
      <text>登录</text>
    </view>

    <view class="agreenment">
      <navigator url="forget" open-type="navigate">忘记密码</navigator>
      <text>|</text>
      <navigator url="reg" open-type="navigate">注册账户</navigator>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      loginFn() {
        if (this.username.length != 11) {
          uni.showToast({
            icon: 'none',
            title: '用户名格式不正确'
          });
          return;
        }
        if (this.password.length < 6) {
          uni.showToast({
            icon: 'none',
            title: '密码格式不正确'
          });
          return;
        }
		// 方法1
		// this.$post(
		// 	'/login',{
		// 		username:this.username,
		// 		password:this.password,
		// 	}
		// ).then(res=>{
		// 	console.log(res);
		// 	let {code} = res
		// 	// 用户名不存在
		// 	if(code==211){
		// 		uni.showToast({
		// 			title:'用户不存在！！！',
		// 			icon:'none'
		// 		})
		// 	}else if(code==210){
		// 		uni.showToast({
		// 			title:'账号或密码错误！！！',
		// 			icon:'error'
		// 		})
		// 	}else{
		// 		uni.showToast({
		// 			title:'登录成功',
		// 			icon:'success'
		// 		})
		// 		// 返回上一页
				
		// 	}
		// })
		//方法2
		let {username,password} = this
		// 开启了命名空间，要带模块名
		this.$store.dispatch('user/userLoginAct',{
			username,
			password
		})
		
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
	padding-top: 200rpx;
  }

  .header {
    width: 161rpx;
    height: 161rpx;
    background: rgba(63, 205, 235, 1);
    box-shadow: 0rpx 12rpx 13rpx 0rpx rgba(63, 205, 235, 0.47);
    border-radius: 50%;
    margin-top: 30rpx;
    margin-left: auto;
    margin-right: auto;
  }

  .header image {
    width: 161rpx;
    height: 161rpx;
    border-radius: 50%;
  }

  .list {
    display: flex;
    flex-direction: column;
    padding-top: 50rpx;
    padding-left: 70rpx;
    padding-right: 70rpx;
  }

  .list-call {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    color: #333333;
    border-bottom: 0.5px solid #e2e2e2;
  }

  .list-call .img {
    width: 40rpx;
    height: 40rpx;
  }

  .list-call .sl-input {
    flex: 1;
    text-align: left;
    font-size: 32rpx;
    margin-left: 16rpx;
  }

  .button-login {
    color: #FFFFFF;
    font-size: 34rpx;
    width: 470rpx;
    height: 100rpx;
    background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
    box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
    border-radius: 50rpx;
    line-height: 100rpx;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100rpx;
  }

  .button-hover {
    background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
  }

  .agreenment {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
    margin-top: 80rpx;
    color: #FFA800;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
  }

  .agreenment text {
    font-size: 24rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
</style>
