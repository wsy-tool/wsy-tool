(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f7bcfe32"],{"04fd":function(t,s,e){e("7ca1")},2174:function(t,s,i){i.r(s);var e=i("8194"),a={data(){return{list:[],total:0,params:{getType:"FREE",pageNumber:1,pageSize:20}}},methods:{search(t){this.params.couponName=t,this.params.pageNumber=1,this.getList()},getList(){this.$Spin.show(),Object(e.t)(this.params).then(t=>{this.$Spin.hide(),this.loading=!1,t.success&&(this.list=t.result.records,this.total=t.result.total)}).catch(()=>{this.$Spin.hide()})},changePageNum(t){this.params.pageNumber=t,this.getList()},changePageSize(t){this.params.pageNumber=1,this.params.pageSize=t,this.getList()},receive(s){Object(e.Q)(s.id).then(t=>{t.success&&this.$Modal.confirm({title:"领取优惠券",content:"<p>优惠券领取成功，可到我的优惠券页面查看</p>",okText:"我的优惠券",cancelText:"立即使用",closable:!0,onOk:()=>{this.$router.push("/home/Coupons")},onCancel:()=>{this.$router.push({path:"/goodsList",query:{promotionsId:s.id,promotionType:"COUPON"}})}})})},useScope(t,s){let e="平台",a="全部商品";switch("platform"!==s&&(e=s),t){case"ALL":a="全部商品";break;case"PORTION_GOODS":a="部分商品";break;case"PORTION_GOODS_CATEGORY":a="部分分类商品"}return""+e+a+"可用"}},mounted(){this.getList()}},c=(i("04fd"),i("2877")),c=Object(c.a)(a,function(){var e=this,a=e._self._c;return a("div",{staticClass:"coupon-center"},[a("BaseHeader"),a("div",{staticClass:"content"},[a("div",[a("div",{staticClass:"coupon-title"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i("9d64"),width:"120",alt:""}})]),a("p",[e._v("领券中心")]),a("Input",{staticStyle:{width:"400px"},attrs:{search:"","enter-button":"搜索",placeholder:"搜索优惠券"},on:{"on-search":e.search}})],1),a("div",{staticClass:"fontsize_18 recommend"},[e._v("推荐好券")]),0===e.list.length?a("empty"):a("ul",{staticClass:"coupon-list"},e._l(e.list,function(s,t){return a("li",{key:t,staticClass:"coupon-item"},[a("div",{staticClass:"c-left"},[a("div",["PRICE"===s.couponType?a("span",{staticClass:"fontsize_12 global_color"},[e._v("￥"),a("span",{staticClass:"price"},[e._v(e._s(e._f("unitPrice")(s.price)))])]):e._e(),"DISCOUNT"===s.couponType?a("span",{staticClass:"fontsize_12 global_color"},[a("span",{staticClass:"price"},[e._v(e._s(s.couponDiscount))]),e._v("折")]):e._e(),a("span",{staticClass:"describe"},[e._v("满"+e._s(s.consumeThreshold)+"元可用")])]),a("p",[e._v("使用范围："+e._s(e.useScope(s.scopeType,s.storeName)))]),a("p",[e._v("有效期："+e._s(s.endTime))])]),a("b"),a("a",{staticClass:"c-right",on:{click:function(t){return e.receive(s)}}},[e._v("立即领取")]),a("i",{staticClass:"circle-top"}),a("i",{staticClass:"circle-bottom"})])}),0),a("Page",{staticClass:"pageration",attrs:{total:e.total,"page-size":e.params.pageSize,"show-total":"","show-sizer":""},on:{"on-change":e.changePageNum,"on-page-size-change":e.changePageSize}})],1)]),a("BaseFooter")],1)},[],!1,null,"9a2adda6",null);s.default=c.exports},"7ca1":function(t,s,e){}}]);