webpackJsonp([1],{"+gg+":function(t,e){},"2VmX":function(t,e){},"5F38":function(t,e){},"7G0v":function(t,e){},"8nrR":function(t,e){},"9n10":function(t,e){},Aa1a:function(t,e){},BA8t:function(t,e){},"F/DZ":function(t,e){},J5XX:function(t,e){},K6U6:function(t,e){},LPQS:function(t,e){},LhV0:function(t,e){},M6Sr:function(t,e){},MlWq:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("MlWq")},null,null).exports,r=i("F3EI"),o=i.n(r),c=(i("v2ns"),i("/ocq")),l=i("Dd8w"),d=i.n(l),u=i("NYxO"),h={name:"HomeHeader",computed:d()({},Object(u.c)(["city"]))},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"header-left"},[e("svg",{staticClass:"icon back-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-fanhui"}})])]),this._v(" "),e("div",{staticClass:"header-input"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-sousuo"}})]),this._v("\n    输入城市景点游玩\n  ")]),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("svg",{staticClass:"icon arrow-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantouxia"}})])])])],1)])},staticRenderFns:[]};var p=i("VU/8")(h,m,!1,function(t){i("5F38")},"data-v-656a3664",null).exports,v={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",autoplay:!0,speed:2e3,loop:!0}}},computed:{showSwiper:function(){return this.swiperList.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var C=i("VU/8")(v,f,!1,function(t){i("+gg+")},"data-v-0d217d71",null).exports,_={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var y=i("VU/8")(_,w,!1,function(t){i("LhV0")},"data-v-7cc38067",null).exports,g={name:"HomeRecommend",props:{recommendList:Array}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var k=i("VU/8")(g,b,!1,function(t){i("uTIT")},"data-v-610dcf96",null).exports,x={name:"HomeWeekend",props:{weekendList:Array}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var $=i("VU/8")(x,L,!1,function(t){i("8nrR")},"data-v-f3c744d0",null).exports,S=i("mtWM"),I=i.n(S),U={name:"Home",components:{HomeHeader:p,HomeSwiper:C,HomeIcons:y,HomeRecommend:k,HomeWeekend:$},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:d()({},Object(u.c)(["city"])),methods:{getHomeInfo:function(){I.a.get("/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).data&&t.ret){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var F=i("VU/8")(U,E,!1,function(t){i("J5XX")},null,null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n    城市选择\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-back"},[e("svg",{staticClass:"icon back-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-fanhui"}})])])])],1)},staticRenderFns:[]};var N=i("VU/8")({name:"CityHeader"},T,!1,function(t){i("BA8t")},"data-v-65cb16fe",null).exports,A=i("GQaK"),H={name:"CitySearch",data:function(){return{keyword:"",list:[],timer:null}},methods:d()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(u.b)(["changeCity"])),computed:{hasNoData:function(){return!this.list.length}},props:{cities:Object},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new A.a(this.$refs.search)}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名和拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配的数据")])],2)])])},staticRenderFns:[]};var V=i("VU/8")(H,R,!1,function(t){i("K6U6")},"data-v-3b493872",null).exports,D={name:"CityList",computed:d()({},Object(u.c)({currentCity:"city"})),props:{hotCities:Array,cities:Object,letter:String},mounted:function(){this.scroll=new A.a(this.$refs.wrapper,{mouseWheel:!0,click:!0,tap:!0})},methods:d()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(u.b)(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])}))])})],2)])},staticRenderFns:[]};var j=i("VU/8")(D,O,!1,function(t){i("LPQS")},"data-v-2ed71ba4",null).exports,G={name:"CityAlphabet",data:function(){return{touchStatus:!1,startY:0,timmer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},props:{cities:Object},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timmer&&clearTimeout(this.timmer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<=e.letters.length&&e.$emit("change",e.letters[s])},17))},handleTouchEnd:function(){this.touchStatus=!1}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n      "+t._s(e)+"\n    ")])}))},staticRenderFns:[]};var B={name:"City",components:{CityHeader:N,CitySearch:V,CityList:j,CityAlphabet:i("VU/8")(G,M,!1,function(t){i("Aa1a")},"data-v-75731443",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){I.a.get("/static/mock/city.json").then(this.handleGetCity)},handleGetCity:function(t){if(console.log(t),(t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var Y=i("VU/8")(B,P,!1,function(t){i("UtDn")},"data-v-39b4a0e0",null).exports,W={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},methods:{handleGallaryClick:function(){this.$emit("close")}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var q=i("VU/8")(W,X,!1,function(t){i("2VmX")},"data-v-3ffde5b0",null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var J=i("VU/8")({name:"FadeAnimation"},z,!1,function(t){i("NLTC")},"data-v-68ee920b",null).exports,K={name:"DetailBanner",data:function(){return{showGallary:!1}},props:{sightName:String,bannerImg:String,gallaryImgs:Array},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:q,FadeAnimation:J}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("svg",{staticClass:"icon collect",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-collect"}})]),t._v(t._s(this.gallaryImgs.length)+"\n       ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var Z=i("VU/8")(K,Q,!1,function(t){i("7G0v")},"data-v-cc0de266",null).exports,tt={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){this.showAbs=!1;var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("svg",{staticClass:"icon header-abs-back",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-fanhui"}})])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-fixed-back"},[e("svg",{staticClass:"icon back-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-fanhui"}})])])]),this._v("\n       景点详情\n    ")],1)],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("Yzla")},"data-v-21898c13",null).exports,st={name:"DetailList",props:{list:Array}},nt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n            "+t._s(e.title)+"\n        ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var at={name:"Detail",components:{DetailBanner:Z,DetailHeader:it,DetailList:i("VU/8")(st,nt,!1,function(t){i("F/DZ")},"data-v-42a3a99a",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){I.a.get("/static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList,console.log(e)}}},mounted:function(){this.getDetailInfo()}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var ot=i("VU/8")(at,rt,!1,function(t){i("Ueg9")},"data-v-68d0a65d",null).exports;s.a.use(c.a);var ct=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:F},{path:"/city",name:"City",component:Y},{path:"/detail/:id",name:"Detail",component:ot}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),lt=i("v5o6"),dt=i.n(lt),ut=(i("9n10"),i("M6Sr"),"苏州");try{localStorage.city&&(ut=localStorage.city)}catch(t){}var ht={city:ut},mt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(u.a);var pt=new u.a.Store({state:ht,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:mt});i("j1ja");s.a.config.productionTip=!1,dt.a.attach(document.body),s.a.use(o.a),new s.a({el:"#app",router:ct,store:pt,render:function(t){return t(a)}})},NLTC:function(t,e){},Ueg9:function(t,e){},UtDn:function(t,e){},Yzla:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},uTIT:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7be081628d327cd4efd6.js.map