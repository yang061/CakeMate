(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/reg"],{"19c2":function(n,e,t){},"1de0":function(n,e,t){"use strict";(function(n){var o=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s=o(t("9523")),i=(a={onLoad:function(){this},onUnload:function(){clearInterval(void 0),this.second=0},data:function(){return{username:"",password:"",agreement:!0,showPassword:!1}}},(0,s.default)(a,"onUnload",(function(){})),(0,s.default)(a,"methods",{display:function(){this.showPassword=!this.showPassword},agreementSuccess:function(){this.agreement=!this.agreement},regFn:function(){0!=this.agreement?11==this.username.length?this.password.length<6?n.showToast({icon:"none",title:"密码格式不正确"}):this.$post("/users",{username:this.username,password:this.password,code:this.code}).then((function(e){console.log(e);var t=e.code;e.objectId;202!==t?(n.showToast({title:"注册成功喽！！！",icon:"success"}),n.navigateTo({url:"/pages/login/login"})):n.showToast({title:"用户名被占用了！！！",icon:"none"})})):n.showToast({icon:"none",title:"用户名格式不正确"}):n.showToast({icon:"none",title:"请先阅读《软件用户协议》"})}}),a);e.default=i}).call(this,t("543d")["default"])},"6a25":function(n,e,t){"use strict";var o=t("19c2"),a=t.n(o);a.a},"8d6d":function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return o}));var o={uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"68e7"))}},a=function(){var n=this.$createElement;this._self._c},s=[]},"9bd5":function(n,e,t){"use strict";(function(n,e){var o=t("4ea4");t("9246");o(t("66fd"));var a=o(t("e410"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"9f1e":function(n,e,t){"use strict";t.r(e);var o=t("1de0"),a=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=a.a},e410:function(n,e,t){"use strict";t.r(e);var o=t("8d6d"),a=t("9f1e");for(var s in a)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(s);t("6a25");var i=t("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=u.exports}},[["9bd5","common/runtime","common/vendor"]]]);