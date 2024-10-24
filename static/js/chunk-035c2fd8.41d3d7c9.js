(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-035c2fd8"],{"20c3":function(e,t,s){s("f9ce")},"89a8":function(e,t,s){s.r(t);var r=s("7dfd"),i=s("be72"),o=s("7ded"),a=s("2934"),n={name:"SignUp",components:{Verify:s("6402").a},data(){return{config:s("f121"),year:(new Date).getFullYear(),formRegist:{mobilePhone:"",code:"",username:"",password:""},ruleInline:{username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"},{type:"string",min:6,message:"密码不能少于6位"}],mobilePhone:[{required:!0,message:"请输入手机号码"},{pattern:r.mobile,trigger:"blur",message:"请输入正确的手机号"}],code:[{required:!0,message:"请输入手机验证码"}]},verifyStatus:!1,verifyType:"REGISTER",codeMsg:"发送验证码",interval:"",time:60}},methods:{handleRegist(){this.$refs.formRegist.validate(e=>{e&&((e=JSON.parse(JSON.stringify(this.formRegist))).password=Object(i.md5)(e.password),o.e(e).then(e=>{e.success?(this.$Message.success("注册成功!"),this.$router.push("login")):this.$Message.warning(e.message)}))})},sendCode(){var e;60===this.time&&(""===this.formRegist.mobilePhone?this.$Message.warning("请先填写手机号"):this.verifyStatus?(e={mobile:this.formRegist.mobilePhone,verificationEnums:"REGISTER"},Object(a.g)(e).then(e=>{if(e.success){this.$Message.success("验证码发送成功");let e=this;this.interval=setInterval(()=>{e.time--,0===e.time?(e.time=60,e.codeMsg="重新发送",e.verifyStatus=!1,clearInterval(e.interval)):e.codeMsg=e.time},1e3)}else this.$Message.warning(e.message)})):this.$Message.warning("请先完成安全验证"))},verifyChange(e){e.status&&(this.$refs.verify.show=!1,this.verifyStatus=!0)},verifyBtnClick(){this.verifyStatus||this.$refs.verify.init()}},mounted(){this.$refs.formRegist.resetFields(),document.querySelector(".sign-up").style.height=window.innerHeight+"px"}},l=(s("20c3"),s("2877")),l=Object(l.a)(n,function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign-up",on:{click:function(e){t.$refs.verify.show=!1}}},[e("div",{staticStyle:{height:"50px"}}),e("div",{staticClass:"logo-box"},[e("img",{attrs:{width:"150",src:t.$store.state.logoImg},on:{click:function(e){return t.$router.push("/")}}}),e("div",[t._v("注册")])]),e("div",{staticClass:"login-container"},[e("Form",{ref:"formRegist",staticStyle:{width:"300px"},attrs:{model:t.formRegist,rules:t.ruleInline}},[e("FormItem",{attrs:{prop:"username"}},[e("i-input",{attrs:{type:"text",clearable:"",placeholder:"用户名"},model:{value:t.formRegist.username,callback:function(e){t.$set(t.formRegist,"username",e)},expression:"formRegist.username"}},[e("Icon",{attrs:{slot:"prepend",type:"md-person"},slot:"prepend"})],1)],1),e("FormItem",{attrs:{prop:"password"}},[e("i-input",{attrs:{type:"password",clearable:"",placeholder:"请输入大于6位密码"},model:{value:t.formRegist.password,callback:function(e){t.$set(t.formRegist,"password",e)},expression:"formRegist.password"}},[e("Icon",{attrs:{slot:"prepend",type:"md-lock"},slot:"prepend"})],1)],1),e("FormItem",{attrs:{prop:"mobilePhone"}},[e("i-input",{attrs:{type:"text",clearable:"",placeholder:"手机号"},model:{value:t.formRegist.mobilePhone,callback:function(e){t.$set(t.formRegist,"mobilePhone",e)},expression:"formRegist.mobilePhone"}},[e("Icon",{attrs:{slot:"prepend",type:"md-phone-portrait"},slot:"prepend"})],1)],1),e("FormItem",{attrs:{prop:"code"}},[e("i-input",{attrs:{type:"text",clearable:"",placeholder:"手机验证码"},model:{value:t.formRegist.code,callback:function(e){t.$set(t.formRegist,"code",e)},expression:"formRegist.code"}},[e("Icon",{staticStyle:{"font-weight":"bold"},attrs:{slot:"prepend",type:"ios-text-outline"},slot:"prepend"}),e("Button",{attrs:{slot:"append"},on:{click:t.sendCode},slot:"append"},[t._v(t._s(t.codeMsg))])],1)],1),e("FormItem",[e("Button",{attrs:{long:"",type:t.verifyStatus?"success":"default"},on:{click:t.verifyBtnClick}},[t._v(t._s(t.verifyStatus?"验证通过":"点击完成安全验证"))])],1),e("FormItem",[e("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.handleRegist}},[t._v("注册")])],1),e("FormItem",[e("span",{staticClass:"color999 ml_20"},[t._v("点击注册，表示您同意《"),e("router-link",{attrs:{to:"/article?id=1371992704333905920",target:"_blank"}},[t._v("商城用户协议")]),t._v("》")],1)])],1),e("Verify",{ref:"verify",staticClass:"verify-con",attrs:{verifyType:t.verifyType},on:{change:t.verifyChange}}),e("div",{staticClass:"login-btn"},[t._v("已有账号？"),e("a",{on:{click:function(e){return t.$router.push("login")}}},[t._v("立即登录")])])],1),e("div",{staticClass:"foot"},[e("Row",{staticClass:"help",attrs:{type:"flex",justify:"space-around"}},[e("router-link",{staticClass:"item",attrs:{to:"/article",target:"_blank"}},[t._v("帮助")]),e("router-link",{staticClass:"item",attrs:{to:"/article?id=1371779927900160000",target:"_blank"}},[t._v("隐私")]),e("router-link",{staticClass:"item",attrs:{to:"/article?id=1371992704333905920",target:"_blank"}},[t._v("条款")])],1),e("Row",{staticClass:"copyright",attrs:{type:"flex",justify:"center"}},[t._v(" Copyright © "+t._s(t.year)+" - Present "),e("a",{staticStyle:{margin:"0 5px"},attrs:{href:"https://pickmall.cn",target:"_blank"}},[t._v(t._s(t.config.title))]),t._v(" 版权所有 ")])],1)])},[],!1,null,"13f24bf4",null);t.default=l.exports},f9ce:function(e,t,s){}}]);