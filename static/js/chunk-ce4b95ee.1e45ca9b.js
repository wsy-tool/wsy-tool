(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ce4b95ee","chunk-e407c66e","chunk-e9af11aa"],{"30c4":function(t,e,s){s.r(e);var a=s("f8b7"),r=s("8194"),i=s("9243"),n={name:"MyOrder",props:{homePage:{type:Boolean,default:!1}},data(){return{orderList:[],params:{pageNumber:1,pageSize:10,keywords:"",tag:"ALL"},cancelParams:{orderSn:"",reason:""},orderStatusList:i.b,changeWay:["全部订单","待付款","待收货","已完成"],total:0,spinShow:!1,afterSaleModal:!1,afterSaleColumns:[{title:"商品名称",key:"name"},{title:"价格",key:"goodsPrice"}],afterSaleArr:[],cancelAvail:!1,cancelReason:[]}},mounted(){this.homePage&&(this.params.pageSize=5),this.getList()},methods:{refundPriceList(t){switch(t){case"ALL_REFUND":return"全部退款";case"PART_REFUND":return"部分退款";case"NO_REFUND":return"";case"REFUNDING":return"退款中";default:return""}},goodsDetail(t,e){t=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:e}});window.open(t.href,"_blank")},change(t){switch(t){case 0:this.params.tag="ALL";break;case 1:this.params.tag="WAIT_PAY";break;case 2:this.params.tag="WAIT_ROG";break;case 3:this.params.tag="COMPLETE"}this.getList()},shopPage(t){t=this.$router.resolve({path:"/Merchant",query:{id:t}});window.open(t.href,"_blank")},orderDetail(t){this.$router.push({name:"OrderDetail",query:{sn:t}})},received(t){Object(a.k)(t).then(t=>{t.success&&(this.$Message.success("确认收货成功"),this.getList())})},goPay(t){this.$router.push({path:"/payment",query:{orderType:"ORDER",sn:t}})},applyAfterSale(t){let e=[];t.forEach(t=>{"NOT_APPLIED"!==t.afterSaleStatus&&"PART_AFTER_SALE"!==t.afterSaleStatus||e.push(t)}),1===e.length?this.$router.push({name:"ApplyAfterSale",query:{sn:e[0].sn}}):(this.afterSaleArr=e,this.afterSaleModal=!0)},afterSaleSelect(t){this.$router.push({name:"ApplyAfterSale",query:{sn:t.sn}})},comment(t,e){this.$router.push({path:"/home/addEval",query:{sn:t,index:e}})},complain(t,e){this.$router.push({name:"Complain",query:{sn:t,index:e}})},delOrder(t){this.$Modal.confirm({title:"删除订单",content:"<p>确认删除当前订单吗？</p>",onOk:()=>{Object(a.d)(t).then(t=>{t.success&&(this.$Message.success("删除成功"),this.getList())})},onCancel:()=>{}})},getList(){this.spinShow=!0;var t=JSON.parse(JSON.stringify(this.params));"ALL"===t.orderStatus&&delete t.orderStatus,Object(a.g)(t).then(t=>{this.spinShow=!1,t.success&&(this.orderList=t.result.records,this.total=t.result.total)})},changePageNum(t){this.params.pageNumber=t,this.getList()},changePageSize(t){this.params.pageNumber=1,this.params.pageSize=t,this.getList()},handleCancelOrder(t){this.cancelParams.orderSn=t,Object(r.f)("CANCEL").then(t=>{t.success&&(this.cancelReason=t.result,this.cancelAvail=!0,this.cancelParams.reason=this.cancelReason[0].reason)})},sureCancel(){Object(a.b)(this.cancelParams).then(t=>{t.success&&(this.$Message.success("取消订单成功"),this.getList(),this.cancelAvail=!1)})},filterOrderStatus(e){var t=this.orderStatusList.filter(t=>t.status===e);return t&&t[0]?t[0].name:e}}},s=(s("9501"),s("2877")),s=Object(s.a)(n,function(){var r=this,i=r._self._c;return i("div",{staticClass:"wrapper"},[i("card",r.homePage?{attrs:{_Title:"我的订单",_Size:16,_Tabs:r.changeWay,_More:"全部订单",_Src:"/home/MyOrder"},on:{_Change:r.change}}:{attrs:{_Title:"我的订单",_Size:16,_Tabs:r.changeWay},on:{_Change:r.change}}),r.homePage?r._e():i("div",{staticClass:"mb_24 box"},[i("div",{staticClass:"global_float_right"},[i("Input",{staticClass:"width_300",attrs:{search:"","enter-button":"",placeholder:"请输入订单号搜索"},on:{"on-search":r.getList},model:{value:r.params.keywords,callback:function(t){r.$set(r.params,"keywords",t)},expression:"params.keywords"}})],1)]),0===r.orderList.length?i("empty"):i("div",{staticClass:"order-content"},[r._l(r.orderList,function(a,t){return i("div",{key:t,staticClass:"order-list"},[i("div",{staticClass:"order-header"},[i("div",[i("div",[r._v(r._s(r.filterOrderStatus(a.orderStatus)))]),i("div",[r._v(" 订单号："+r._s(a.sn)+"      "+r._s(a.createTime)+" ")])]),i("div",["COMPLETED"===a.orderStatus?i("Button",{staticClass:"del-btn mr_10 fontsize_16",staticStyle:{"margin-top":"-5px"},attrs:{type:"text",icon:"ios-trash-outline",size:"small"},on:{click:function(t){return r.delOrder(a.sn)}}}):r._e(),i("span",[r._v(r._s(r._f("unitPrice")(a.flowPrice,"￥")))])],1)]),i("div",{staticClass:"order-body"},[i("div",{staticClass:"goods-list"},r._l(a.orderItems,function(e,s){return i("div",{key:s},[i("img",{staticClass:"hover-color",attrs:{src:e.image,alt:""},on:{click:function(t){return r.goodsDetail(e.skuId,e.goodsId)}}}),i("div",[i("div",{staticClass:"hover-color",on:{click:function(t){return r.goodsDetail(e.skuId,e.goodsId)}}},[r._v(r._s(e.name))]),i("div",{staticClass:"mt_10"},[i("span",{staticClass:"global_color"},[r._v(r._s(r._f("unitPrice")(e.goodsPrice,"￥"))+" ")]),r._v("x "+r._s(e.num)+" "),i("span",{staticStyle:{"margin-left":"10px",color:"#ff9900"}},[r._v(r._s(r.refundPriceList(e.isRefund)))])]),"UNFINISHED"==e.commentStatus?i("Button",{staticClass:"fontsize_12",staticStyle:{position:"relative",top:"-22px",left:"190px","margin-right":"10px"},attrs:{size:"small",type:"success"},on:{click:function(t){return r.comment(a.sn,s)}}},[r._v("评价")]):r._e(),"NO_APPLY"==e.complainStatus?i("Button",{staticClass:"fontsize_12",staticStyle:{position:"relative",top:"-22px",left:"190px"},attrs:{type:"warning",size:"small"},on:{click:function(t){return r.complain(a.sn,s)}}},[r._v("投诉")]):r._e()],1)])}),0),i("div",[i("span",{on:{click:function(t){return r.shopPage(a.storeId)}}},[r._v(r._s(a.storeName))])]),i("div",[i("Button",{attrs:{type:"info",size:"small"},on:{click:function(t){return r.orderDetail(a.sn)}}},[r._v("订单详情")]),a.allowOperationVO.cancel?i("Button",{attrs:{type:"error",size:"small"},on:{click:function(t){return r.handleCancelOrder(a.sn)}}},[r._v("取消订单")]):r._e(),a.allowOperationVO.pay?i("Button",{attrs:{size:"small",type:"success"},on:{click:function(t){return r.goPay(a.sn)}}},[r._v("去支付")]):r._e(),a.allowOperationVO.rog?i("Button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return r.received(a.sn)}}},[r._v("确认收货")]):r._e(),a.groupAfterSaleStatus&&(a.groupAfterSaleStatus.includes("NOT_APPLIED")||a.groupAfterSaleStatus.includes("PART_AFTER_SALE"))?i("Button",{attrs:{size:"small"},on:{click:function(t){return r.applyAfterSale(a.orderItems)}}},[r._v("申请售后")]):r._e()],1)])])}),r.spinShow?i("Spin",{attrs:{size:"large",fix:""}}):r._e()],2),r.homePage?r._e():i("div",{staticClass:"page-size"},[i("Page",{attrs:{total:r.total,"page-size":r.params.pageSize,"show-total":"","show-sizer":""},on:{"on-change":r.changePageNum,"on-page-size-change":r.changePageSize}})],1),i("Modal",{attrs:{title:"请选择申请售后的商品"},model:{value:r.afterSaleModal,callback:function(t){r.afterSaleModal=t},expression:"afterSaleModal"}},[i("div",[i("Table",{attrs:{border:"",columns:r.afterSaleColumns,data:r.afterSaleArr},on:{"on-row-click":r.afterSaleSelect}})],1),i("div",{attrs:{slot:"footer"},slot:"footer"})]),i("Modal",{attrs:{title:"请选择取消订单原因"},on:{"on-ok":r.sureCancel,"on-cancel":function(t){r.cancelAvail=!1}},model:{value:r.cancelAvail,callback:function(t){r.cancelAvail=t},expression:"cancelAvail"}},[i("RadioGroup",{attrs:{vertical:"",type:"button","button-style":"solid"},model:{value:r.cancelParams.reason,callback:function(t){r.$set(r.cancelParams,"reason",t)},expression:"cancelParams.reason"}},r._l(r.cancelReason,function(t){return i("Radio",{key:t.id,attrs:{label:t.reason}},[r._v(" "+r._s(t.reason)+" ")])}),1)],1)],1)},[],!1,null,"55609cee",null);e.default=s.exports},5979:function(t,e,s){s.r(e);var a=s("30c4"),r=s("78c0"),a={name:"main",components:{myOrderPage:a.default,myFavorites:r.default}},r=(s("ec64"),s("2877")),s=Object(r.a)(a,function(){var t=this._self._c;return t("div",[t("div",{staticClass:"userBox"},[t("div",{staticClass:"box"},[t("myOrderPage",{attrs:{homePage:!0}})],1),t("div",{staticClass:"box"},[t("myFavorites",{attrs:{homePage:!0}})],1),t("div",{staticClass:"box"})])])},[],!1,null,"39703206",null);e.default=s.exports},"665e":function(t,e,s){},"77a6":function(t,e,s){s("f270")},"78c0":function(t,e,s){s.r(e);var a=s("8194"),r={name:"Favorites",props:{homePage:{type:Boolean,default:!1}},data(){return{favoriteWay:["收藏商品","收藏店铺"],list:[],total:0,params:{pageNumber:1,pageSize:100,type:this.$route.query.type||"GOODS"},spinShow:!1}},methods:{getList(){this.spinShow=!0,Object(a.q)(this.params).then(t=>{this.spinShow=!1,t.success&&(this.list=t.result.records)})},getStoreList(){this.spinShow=!0,Object(a.T)(this.params).then(t=>{this.spinShow=!1,t.success&&(this.list=t.result.records)})},change(t){0===t&&(this.params.type="GOODS",this.getList()),1===t&&(this.params.type="STORE",this.getStoreList())},cancel(t){var e="GOODS"===this.params.type?"商品":"店铺";this.$Modal.confirm({title:"Title",content:`<p>确定取消收藏该${e}吗？</p>`,onOk:()=>{Object(a.k)(this.params.type,t).then(t=>{t.success&&this.getList()})}})},cancelStore(t){var e="GOODS"===this.params.type?"商品":"店铺";this.$Modal.confirm({title:"Title",content:`<p>确定取消收藏该${e}吗？</p>`,onOk:()=>{Object(a.l)(this.params.type,t).then(t=>{t.success&&this.getStoreList()})}})},buynow(t,e,s){s="STORE"===this.params.type?this.$router.resolve({path:"/Merchant",query:{id:s}}):this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:e}});window.open(s.href,"_blank")},goShop(t){t=this.$router.resolve({path:"/merchant",query:{id:t}});window.open(t.href,"_blank")}},mounted(){this.homePage&&(this.params.pageSize=5),this.getList()}},s=(s("77a6"),s("2877")),s=Object(s.a)(r,function(){var s=this,a=s._self._c;return a("div",{staticClass:"wrapper"},[a("card",s.homePage?{attrs:{_Title:"近期收藏",_Size:16,_Tabs:s.favoriteWay,_More:"全部收藏",_Src:"/home/Favorites"},on:{_Change:s.change}}:{attrs:{_Title:"近期收藏",_Tabs:s.favoriteWay,_Size:16},on:{_Change:s.change}}),s.list.length?a("div",[s._l(s.list,function(e,t){return a("div",{key:t},[a("div",{key:e.skuId,staticClass:"goodsItem"},["GOODS"===s.params.type?a("div",{staticClass:"goodsImg hover-pointer"},[a("img",{attrs:{src:e.image}})]):a("div",{staticClass:"goodsImg hover-pointer"},[a("img",{attrs:{src:e.storeLogo}})]),"GOODS"===s.params.type?a("div",{staticClass:"goodsTitle hover-color",on:{click:function(t){return s.buynow(e.skuId,e.goodsId,e.id)}}},[s._v(" "+s._s(e.goodsName)+" ")]):a("div",{staticClass:"goodsTitle hover-pointer",on:{click:function(t){return s.buynow(e.skuId,e.goodsId,e.id)}}},[s._v(" "+s._s(e.storeName)+" "),e.selfOperated?a("Tag",{staticClass:"operated",attrs:{color:"error"}},[s._v("商家自营")]):s._e()],1),a("div",{staticClass:"goodsPrice"},["GOODS"===s.params.type?a("span",[s._v(s._s(s._f("unitPrice")(e.price,"￥")))]):s._e()]),a("div",{staticClass:"goodsBuy"},["GOODS"===s.params.type?a("Button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return s.buynow(e.skuId,e.goodsId)}}},[s._v("立即购买")]):a("Button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return s.goShop(e.id)}}},[s._v("店铺购买")]),"GOODS"===s.params.type?a("Button",{attrs:{size:"small"},on:{click:function(t){return s.cancel(e.skuId)}}},[s._v("取消收藏")]):s._e(),"STORE"===s.params.type?a("Button",{attrs:{size:"small"},on:{click:function(t){return s.cancelStore(e.id)}}},[s._v("取消收藏")]):s._e()],1)])])}),s.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):s._e()],2):a("empty")],1)},[],!1,null,"56ceca7a",null);e.default=s.exports},9243:function(t,e,s){s.d(e,"b",function(){return a}),s.d(e,"a",function(){return r});let a=[{name:"全部",status:"ALL"},{name:"未付款",status:"UNPAID"},{name:"已付款",status:"PAID"},{name:"待发货",status:"UNDELIVERED"},{name:"部分发货",status:"PARTS_DELIVERED"},{name:"已发货",status:"DELIVERED"},{name:"已完成",status:"COMPLETED"},{name:"待核验",status:"TAKE"},{name:"已关闭",status:"CANCELLED"},{name:"待提货",status:"STAY_PICKED_UP"}],r=[{name:"申请中",status:"APPLY"},{name:"通过",status:"PASS"},{name:"拒绝",status:"REFUSE"},{name:"买家退货，待卖家收货",status:"BUYER_RETURN"},{name:"卖家确认收货",status:"SELLER_CONFIRM"},{name:"卖家终止售后",status:"SELLER_TERMINATION"},{name:"买家确认收货",status:"BUYER_CONFIRM"},{name:"买家取消售后",status:"BUYER_CANCEL"},{name:"完成售后",status:"COMPLETE"},{name:"等待平台退款",status:"WAIT_REFUND"}]},9501:function(t,e,s){s("9757")},9757:function(t,e,s){},ec64:function(t,e,s){s("665e")},f270:function(t,e,s){}}]);