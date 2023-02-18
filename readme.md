v-bind: 绑定属性【class、style、value】

* 支付

1. 支付流程前端需要做的步骤
立即结算     下订单    uni.request请求携带用户勾选的商品信息    【前端完成】
下订单后，后端会向前端下发订单相关信息，同时会下发能够唤起支付的参数包    【后端提供】
立即支付    使用后端下发的唤起支付的数据包，唤醒支付宝、微信    【前端完成】

2. 唤起支付的方式

- 在手机App里面购物    uni.requestPayment
- 手机网页、电脑网页    通过后端提供的支付连接、扫码支付

3. 支付流程图
参考链接[](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_3.shtml)
