(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7a8c4ea2"],{"06e1":function(t,s,e){e.r(s);var a=e("8194"),i={name:"MyTrack",data(){return{list:[],spinShow:!1,params:{pageNumber:1,pageSize:30,order:"desc",sort:"updateTime"},total:0}},mounted(){this.getList()},methods:{goodsDetail(t,s){t=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:s}});window.open(t.href,"_blank")},shopPage(t){t=this.$router.resolve({path:"/Merchant",query:{id:t}});window.open(t.href,"_blank")},clearAll(){this.$Modal.confirm({title:"删除",content:"<p>确定要删除全部足迹吗？</p>",onOk:()=>{Object(a.n)().then(t=>{t.success&&(this.$Message.success("删除成功"),this.getList())})},onCancel:()=>{}})},clearById(t){Object(a.o)(t).then(t=>{t.success&&(this.$Message.success("删除成功"),this.getList())})},changePageNum(t){this.params.pageNumber=t,this.getList()},changePageSize(t){this.params.pageNumber=1,this.params.pageSize=t,this.getList()},getList(){this.spinShow=!0,Object(a.U)(this.params).then(t=>{this.spinShow=!1,t.success&&t.result.records.length?(this.list=t.result.records.filter(t=>null!=t),this.total=t.result.total):this.list=[]})}}},e=(e("5b8b"),e("2877")),e=Object(e.a)(i,function(){var e=this,a=e._self._c;return a("div",{staticClass:"wrapper"},[a("card",{attrs:{_Title:"我的足迹",_Size:16}}),a("Button",{staticClass:"del-btn",attrs:{type:"primary"},on:{click:e.clearAll}},[e._v("删除全部")]),0===e.list.length?a("empty"):a("ul",{staticClass:"track-list"},e._l(e.list,function(s,t){return a("li",{key:t,on:{click:function(t){return e.goodsDetail(s.id,s.goodsId)}}},[a("img",{attrs:{src:s.thumbnail,alt:s.thumbnail,width:"200",height:"200"}}),a("p",{staticClass:"ellipsis"},[e._v(e._s(s.goodsName))]),a("p",[e._v(e._s(e._f("unitPrice")(s.price,"￥")))]),a("span",{staticClass:"del-icon",on:{click:function(t){return t.stopPropagation(),e.clearById(s.goodsId)}}},[a("Icon",{attrs:{type:"md-trash"}})],1)])}),0),a("div",{staticClass:"page-size"},[a("Page",{attrs:{total:e.total,"page-size":e.params.pageSize,"show-sizer":""},on:{"on-change":e.changePageNum,"on-page-size-change":e.changePageSize}})],1)],1)},[],!1,null,"06531022",null);s.default=e.exports},"1dd3":function(t,s,e){},"5b8b":function(t,s,e){e("1dd3")}}]);