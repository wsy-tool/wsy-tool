(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-05dee18c"],{b47f:function(e,o,s){s.r(o);var t=s("f8b7"),r=s("8194"),i=s("ff66"),a=s("e487"),d={data(){return{order:{},orderGoods:{},form:{deliveryScore:5,serviceScore:5,descriptionScore:5},visible:!1,action:i.c+"/common/common/upload/file",accessToken:{},previewImage:"",loading:!1}},methods:{getOrderDetail(){Object(t.j)(this.$route.query.sn).then(e=>{this.order=e.result,this.orderGoods=e.result.orderItems[this.$route.query.index],this.$set(this.orderGoods,"grade","GOOD"),this.orderGoods.uploadList=[]})},save(){if(!this.form.serviceScore||!this.form.deliveryScore)return this.$Message.warning("物流服务评价不能为空"),!1;this.form.descriptionScore||this.$Message.warning("描述评价不能为空"),this.loading=!0;var e=this.orderGoods,e={goodsId:e.goodsId,orderItemSn:e.sn,skuId:e.skuId,descriptionScore:this.form.descriptionScore,serviceScore:this.form.serviceScore,deliveryScore:this.form.deliveryScore,grade:e.grade,content:e.content||"",images:e.uploadList.toString()};Object(r.a)(e).then(e=>{this.loading=!1,e.success&&(this.$Message.success("评价成功"),this.$router.push("/home/CommentList"))}).catch(()=>{this.loading=!1})},goGoodsDetail(e,o){e=this.$router.resolve({path:"/goodsDetail",query:{skuId:e,goodsId:o}});window.open(e.href,"_blank")},handleView(e){this.previewImage=e,this.visible=!0},handleRemove(e){this.orderGoods.uploadList.splice(e,1),this.$forceUpdate()},handleSuccess(e,o){this.orderGoods.uploadList.push(e.result),this.$forceUpdate()},handleBeforeUpload(){var e=this.orderGoods.uploadList.length<10;if(!e)return this.$Notice.warning({title:"最多可以上传九张图片"}),e}},mounted(){window.scrollTo(0,0),this.accessToken.accessToken=a.a.getItem("accessToken"),this.getOrderDetail()}},s=(s("c960"),s("2877")),s=Object(s.a)(d,function(){var t=this,e=t._self._c;return e("div",{staticClass:"add-eval"},[e("div",{staticClass:"title"},[e("card",{attrs:{_Title:"订单评价",_Size:16}}),e("p",[e("span",{staticClass:"color999"},[t._v("订单号：")]),e("span",[t._v(t._s(t.$route.query.sn))]),t.order.order?e("span",{staticClass:"color999 ml_20"},[t._v(t._s(t.order.order.paymentTime))]):t._e()])],1),e("div",{staticClass:"delivery-rate"},[e("div",{staticClass:"fontsize_16"},[t._v("物流服务评价：")]),e("div",{staticClass:"color999"},[e("span",[t._v("物流评价："),e("Rate",{model:{value:t.form.deliveryScore,callback:function(e){t.$set(t.form,"deliveryScore",e)},expression:"form.deliveryScore"}})],1),e("span",[t._v("服务评价："),e("Rate",{model:{value:t.form.serviceScore,callback:function(e){t.$set(t.form,"serviceScore",e)},expression:"form.serviceScore"}})],1),e("span",[t._v("描述评价："),e("Rate",{model:{value:t.form.descriptionScore,callback:function(e){t.$set(t.form,"descriptionScore",e)},expression:"form.descriptionScore"}})],1)])]),e("ul",{staticClass:"goods-eval"},[e("li",[e("div",{staticClass:"goods-con"},[e("img",{staticClass:"hover-pointer",attrs:{src:t.orderGoods.image,alt:"",width:"100"},on:{click:function(e){return t.goGoodsDetail(t.orderGoods.skuId,t.orderGoods.goodsId)}}}),e("p",{staticClass:"hover-pointer color999",on:{click:function(e){return t.goGoodsDetail(t.orderGoods.skuId,t.orderGoods.goodsId)}}},[t._v(t._s(t.orderGoods.goodsName))]),e("p",[t._v(t._s(t._f("unitPrice")(t.orderGoods.goodsPrice,"￥")))])]),e("div",{staticClass:"eval-con"},[e("div",[e("span",{staticClass:"color999"},[t._v("商品评价：")]),e("RadioGroup",{staticStyle:{"margin-bottom":"5px",color:"#999"},attrs:{type:"button","button-style":"solid"},model:{value:t.orderGoods.grade,callback:function(e){t.$set(t.orderGoods,"grade",e)},expression:"orderGoods.grade"}},[e("Radio",{attrs:{label:"GOOD"}},[t._v("好评")]),e("Radio",{attrs:{label:"MODERATE"}},[t._v("中评")]),e("Radio",{attrs:{label:"WORSE"}},[t._v("差评")])],1),e("Input",{attrs:{type:"textarea",maxlength:"500","show-word-limit":"",rows:4},model:{value:t.orderGoods.content,callback:function(e){t.$set(t.orderGoods,"content",e)},expression:"orderGoods.content"}})],1),e("div",{staticStyle:{display:"flex","align-items":"center"}},[t._l(t.orderGoods.uploadList,function(o,s){return e("div",{key:s,staticClass:"demo-upload-list"},[e("img",{attrs:{src:o}}),e("div",{staticClass:"demo-upload-list-cover"},[e("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){return t.handleView(o)}}}),e("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){return t.handleRemove(s)}}})],1)])}),e("Upload",{staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":t.handleSuccess,"before-upload":t.handleBeforeUpload,format:["jpg","jpeg","png"],action:t.action,headers:t.accessToken}},[e("div",{staticClass:"hover-pointer icon-upload"},[e("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)])],2)])])]),e("Button",{staticClass:"mt_10",attrs:{type:"primary",loading:t.loading},on:{click:t.save}},[t._v("发表")]),e("Modal",{attrs:{title:"View Image"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?e("img",{staticStyle:{width:"100%"},attrs:{src:t.previewImage}}):t._e()])],1)},[],!1,null,"50a3a554",null);o.default=s.exports},c960:function(e,o,s){s("f75f")},f75f:function(e,o,s){}}]);