(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-537a8200"],{"139c":function(t,e,a){},"1b94":function(t,e,a){a.r(e);var i=a("8194"),s=a("f8b7"),l={data(){return{detail:{},visible:!1,previewImage:"",loading:!1,submitLoading:!1,statusLabel:{NO_APPLY:"未申请",APPLYING:"申请中",COMPLETE:"已完成",EXPIRED:"已失效",CANCEL:"已取消",NEW:"待审核"},params:{content:"",complainId:""}}},methods:{getDetail(){Object(i.z)(this.$route.query.id).then(t=>{t.success&&(this.detail=t.result)})},goGoodsDetail(t,e){t=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:e}});window.open(t.href,"_blank")},handleView(t){this.previewImage=t,this.visible=!0},handleSubmit(){""!==this.params.content?(this.submitLoading=!0,this.params.complainId=this.$route.query.id,Object(s.c)(this.params).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("对话成功"),this.params.content="",this.getDetail())})):this.$Message.error("请填写对话内容")}},mounted(){this.getDetail()}},a=(a("5905"),a("2877")),a=Object(a.a)(l,function(){var a=this,i=a._self._c;return i("div",{staticClass:"add-eval"},[i("div",{staticClass:"title"},[i("card",{attrs:{_Title:"订单投诉",_Size:16}}),i("p",[i("span",{staticClass:"fontsize_16 global_color"},[a._v(a._s(a.statusLabel[a.detail.complainStatus]))]),i("span",{staticClass:"color999 ml_20"},[a._v("创建时间：")]),i("span",[a._v(a._s(a.detail.createTime))]),i("span",{staticClass:"color999 ml_20"},[a._v(a._s(a.detail.createTime))])])],1),i("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("我的申诉信息")]),i("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[i("tr",[i("td",[a._v("投诉商品")]),i("td",{staticClass:"hover-color",on:{click:function(t){return a.linkTo(`/goodsDetail?goodsId=${a.detail.goodsId}&skuId=`+a.detail.skuId)}}},[i("img",{attrs:{src:a.detail.goodsImage,width:"60",alt:""}}),a._v("  "+a._s(a.detail.goodsName))])]),i("tr",[i("td",[a._v("投诉主题")]),i("td",[a._v(a._s(a.detail.complainTopic))])]),i("tr",[i("td",[a._v("投诉内容")]),i("td",[a._v(a._s(a.detail.content))])]),i("tr",[i("td",[a._v("补充内容")]),i("td",[i("div",{staticStyle:{display:"flex","align-items":"center"}},[a.detail.images?a._l(a.detail.images.split(","),function(e,t){return i("div",{key:t,staticClass:"demo-upload-list"},[i("img",{attrs:{src:e}}),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return a.handleView(e)}}})],1)])}):i("div",[a._v("暂无")])],2)])])]),i("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("商家申诉信息")]),i("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[i("tr",[i("td",[a._v("申诉时间")]),i("td",[a._v(a._s(a.detail.appealTime||"暂无"))])]),i("tr",[i("td",[a._v("申诉内容")]),i("td",[a._v(a._s(a.detail.appealContent||"暂无"))])]),i("tr",[i("td",[a._v("申诉凭证")]),i("td",[i("div",{staticStyle:{display:"flex","align-items":"center"}},[a.detail.appealImages?a._l(a.detail.appealImages.split(","),function(e,t){return i("div",{key:t,staticClass:"demo-upload-list"},[i("img",{attrs:{src:e}}),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return a.handleView(e)}}})],1)])}):i("div",[a._v("暂无")])],2)])])]),i("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("平台仲裁")]),i("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[i("tr",[i("td",[a._v("仲裁意见")]),i("td",[a._v(a._s(a.detail.arbitrationResult||"暂无"))])])]),i("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("对话详情")]),a.detail.orderComplaintCommunications&&a.detail.orderComplaintCommunications.length?i("div",{staticClass:"speak-way"},a._l(a.detail.orderComplaintCommunications,function(t,e){return i("div",{key:e,staticClass:"speak-msg seller",class:{"speak-buyer":"BUYER"==t.owner,"speak-platform":"PLATFORM"==t.owner,"speak-seller":"STORE"==t.owner}},[a._v(" "+a._s("PLATFORM"==t.owner?"平台":"BUYER"==t.owner?"买家":"卖家")+"["+a._s(t.createTime)+"]： "),i("span",[a._v(a._s(t.content))])])}),0):i("div",[a._v("暂无对话")]),"COMPLETE"!=a.detail.complainStatus?i("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[i("tr",[i("td",[a._v("回复：")]),i("td",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:a.params.content,expression:"params.content"}],staticStyle:{width:"260px"},attrs:{type:"textarea",maxlength:"200",rows:4,clearable:""},domProps:{value:a.params.content},on:{input:function(t){t.target.composing||a.$set(a.params,"content",t.target.value)}}})])])]),i("tr",[i("td"),i("td",[i("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",loading:a.submitLoading},on:{click:a.handleSubmit}},[a._v(" 回复 ")])],1)])]):a._e(),i("Modal",{attrs:{title:"View Image"},model:{value:a.visible,callback:function(t){a.visible=t},expression:"visible"}},[a.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:a.previewImage}}):a._e()])],1)},[],!1,null,"3c06eb68",null);e.default=a.exports},5905:function(t,e,a){a("139c")}}]);