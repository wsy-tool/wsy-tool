(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0ded30"],{"86fb":function(a,t,e){e.r(t);var n=e("8b24"),s=e("365c"),n={data(){return{pageData:""}},components:{Index:n.a},mounted(){var a=this.$route.query.id;this.init(a)},methods:{async init(a){a=await Object(s.c)(a);a.success&&a.result.pageData&&(this.pageData=JSON.parse(a.result.pageData))}}},e=e("2877"),e=Object(e.a)(n,function(){var a=this,t=a._self._c;return a.pageData?t("div",[t("Index",{attrs:{"page-data":a.pageData}})],1):a._e()},[],!1,null,"4b17fc3f",null);t.default=e.exports}}]);