(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.vue-piczoom"],{2448:function(t,i,e){},4037:function(t,i,e){e("2448")},"86bd":function(t,i,e){var s={props:{scale:{type:Number,default:2.5},url:{type:String,required:!0},bigUrl:{type:String,default:null},scroll:{type:Boolean,default:!1},showEidt:{type:Boolean,default:!1}},data(){return{id:null,cover:null,imgbox:null,imgwrap:null,orginUrl:null,bigImgUrl:null,bigOrginUrl:null,imgUrl:null,img:null,canvas:null,ctx:null,rectTimesX:0,rectTimesY:0,imgTimesX:0,imgTimesY:0,init:!1,step:0,bigStep:0,vertical:!1,showImg:!0}},created(){var i="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=i.length,s="";for(let t=0;t<10;t++)s+=i.charAt(Math.floor(Math.random()*e));this.id=s,this.imgUrl=this.url,this.orginUrl=this.url,this.bigImgUrl=this.bigUrl,this.bigOrginUrl=this.bigUrl},watch:{url:function(t){this.imgUrl=t,this.orginUrl=t,this.initTime()},bigUrl:function(){this.bigImgUrl=bigUrl,this.bigOrginUrl=bigUrl,this.initTime()}},mounted(){this.$nextTick(()=>{this.initTime()})},methods:{initTime(){this.init=!1;var t=this.$refs[this.id];this.imgbox=t,this.cover=t.querySelector(".mouse-cover"),this.cover.style.width=this.imgbox.offsetWidth/this.scale+"px",this.cover.style.height=this.imgbox.offsetHeight/this.scale+"px",this.cover.style.left="-100%",this.cover.style.top="-100%",this.imgwrap=t.querySelector("img"),t=this.bigImgUrl||this.imgUrl,this.img=new Image,this.img.src=t,this.img.onload=()=>{this.rectTimesX=this.imgbox.offsetWidth/this.scale/this.imgwrap.offsetWidth,this.rectTimesY=this.imgbox.offsetHeight/this.scale/this.imgwrap.offsetHeight,this.imgTimesX=this.img.width/this.imgwrap.offsetWidth,this.imgTimesY=this.img.height/this.imgwrap.offsetHeight,this.vertical=this.img.width<this.img.height,this.init=!0},this.canvas&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null),this.canvas=document.createElement("canvas"),this.canvas.className="mouse-cover-canvas",this.canvas.style.position="absolute",this.canvas.style.left=this.imgbox.offsetLeft+this.imgbox.offsetWidth+10+"px",this.canvas.style.top=this.imgbox.offsetTop+"px",this.canvas.style.border="1px solid #eee",this.canvas.style.zIndex="99999",this.canvas.height=this.imgbox.offsetHeight,this.canvas.width=this.imgbox.offsetWidth,this.canvas.style.display="none",document.body.append(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},initBox(){this.showImg=!1,this.canvas.style.display="none";let t,i=this.$refs[this.id];t=this.bigImgUrl||this.imgUrl,this.img=new Image,this.img.src=t,this.img.onload=()=>{this.vertical=this.img.width<this.img.height,this.showImg=!0,i.querySelector("img"),setTimeout(()=>{this.rectTimesX=this.imgbox.offsetWidth/this.scale/i.querySelector("img").offsetWidth,this.rectTimesY=this.imgbox.offsetHeight/this.scale/i.querySelector("img").offsetHeight},20)}},mousemove(t){if(!this.init)return!1;let i=this;var t=t||event,t={x:t.clientX-i.cover.offsetWidth/2,y:t.clientY-i.cover.offsetHeight/2},e=(t=>{var i=null,e=null,s=t.offsetParent;for(i+=t.offsetLeft,e+=t.offsetTop;s;)-1===navigator.userAgent.indexOf("MSIE 8.0")&&(i+=s.clientLeft,e+=s.clientTop),i+=s.offsetLeft,e+=s.offsetTop,s=s.offsetParent;return{left:i,top:e}})(this.imgwrap),s={minX:e.left,maxX:e.left+this.imgwrap.offsetWidth-this.cover.offsetWidth,minY:e.top-document.documentElement.scrollTop,maxY:e.top-document.documentElement.scrollTop+this.imgwrap.offsetHeight-this.cover.offsetHeight},s=(s.maxX<t.x&&(t.x=s.maxX),t.x<s.minX&&(t.x=s.minX),s.maxY<t.y&&(t.y=s.maxY),t.y<s.minY&&(t.y=s.minY),this.cover.style.left=t.x+"px",this.cover.style.top=t.y+"px",this.ctx.clearRect(0,0,this.imgwrap.offsetWidth,this.imgwrap.offsetHeight),t.x-(e.left-document.documentElement.scrollLeft)),t=t.y-(e.top-document.documentElement.scrollTop);this.ctx.drawImage(this.img,s*this.imgTimesX,t*this.imgTimesY,this.img.width*this.rectTimesX,this.img.height*this.rectTimesY,0,0,this.imgbox.offsetWidth,this.imgbox.offsetHeight)},mouseover(t){if(!this.init)return!1;t=t||event,this.scroll||(t.currentTarget.addEventListener("mousewheel",function(t){t.preventDefault()},!1),t.currentTarget.addEventListener("DOMMouseScroll",function(t){t.preventDefault()},!1)),this.cover.style.display="block",this.canvas.style.display="block"},mouseleave(){if(!this.init)return!1;this.cover.style.display="none",this.canvas.style.display="none"},rotate(t){var i,e=new Image;e.crossOrigin="Anonymous",e.src=this.orginUrl,e.onload=()=>{this.rotateImg(e,t,this.step)},this.bigOrginUrl&&(i=new Image,e.crossOrigin="Anonymous",i.src=this.bigOrginUrl,i.onload=()=>{this.rotateImg(i,t,this.bigStep,!0)})},rotateImg(t,i,e,s=!1){if(null!=t){var h=t.height,o=t.width,r=(null==e&&(e=0),"right"==i?3<++e&&(e=0):--e<0&&(e=3),document.createElement("canvas")),a=90*e*Math.PI/180,n=r.getContext("2d");switch(r.width=h,r.height=o,n.rotate(a),n.drawImage(t,0,-h),e){case 0:r.width=o,r.height=h,n.drawImage(t,0,0);break;case 1:r.width=h,r.height=o,n.rotate(a),n.drawImage(t,0,-h);break;case 2:r.width=o,r.height=h,n.rotate(a),n.drawImage(t,-o,-h);break;case 3:r.width=h,r.height=o,n.rotate(a),n.drawImage(t,-o,0)}i=r.toDataURL();s?(this.bigImgUrl=i,this.bigStep=e,this.initBox()):(this.imgUrl=i,this.step=e,this.$nextTick(()=>{this.initBox()}))}}}},e=(e("4037"),e("2877")),e=Object(e.a)(s,function(){var i=this,t=i._self._c;return t("div",{ref:i.id,staticClass:"magnifier-box",class:i.vertical?"vertical":"",on:{mousemove:i.mousemove,mouseover:i.mouseover,mouseleave:i.mouseleave}},[t("img",{directives:[{name:"show",rawName:"v-show",value:i.showImg,expression:"showImg"}],attrs:{src:i.imgUrl,alt:""}}),t("div",{staticClass:"mouse-cover"}),i.showEidt?t("div",{staticClass:"edit-wrap"},[t("span",{staticClass:"rotate-left",on:{click:function(t){return i.rotate("left")}}}),t("span",{staticClass:"rotate-right",on:{click:function(t){return i.rotate("right")}}})]):i._e()])},[],!1,null,"69c01ff0",null);i.a=e.exports}}]);