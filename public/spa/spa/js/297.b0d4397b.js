"use strict";(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[297],{9473:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O}),o(702);var a=o(9835),r=o(6970);const l=(0,a._)("br",null,null,-1),n={class:"row"},c={class:"col-12 row wrap justify-center"},s={class:"row wrap justify-end items-end content-end"},u={class:"col-2"},d=(0,a._)("br",null,null,-1),p={class:"row full-width"};function i(e,t,o,i,g,m){const f=(0,a.up)("q-badge"),w=(0,a.up)("q-btn"),h=(0,a.up)("q-header"),b=(0,a.up)("MenuApp"),_=(0,a.up)("q-footer"),C=(0,a.up)("router-view"),v=(0,a.up)("q-page-container"),S=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(S,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"bg-grey-10"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"bg-grey-10"},{default:(0,a.w5)((()=>[l,(0,a._)("div",n,[(0,a._)("div",c,[(0,a._)("img",{src:"logo.png",alt:"logo",onClick:t[0]||(t[0]=(...t)=>e.clickHome&&e.clickHome(...t)),style:{width:"140px",height:"120px"}})])]),(0,a._)("div",s,[(0,a._)("div",u,[(0,a.Wm)(w,{size:"md",flat:"",icon:"shopping_bag",to:"CardApp"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"red",floating:"",rounded:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.Card.length),1)])),_:1})])),_:1})])])])),_:1}),d,(0,a.WI)(e.$slots,"default",{},(()=>[(0,a.Wm)(_,{class:"bg-grey-10"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(b,{class:"col-12 self-center"})])])),_:1})])),(0,a.Wm)(C)])),_:3})])),_:3})}var g=o(499);const m={class:"q-pa-md"};function f(e,t,o,r,l,n){const c=(0,a.up)("q-btn"),s=(0,a.up)("q-space"),u=(0,a.up)("q-toolbar");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",m,[(0,a.Wm)(u,{class:"bg-white text-black shadow-2 rounded-borders"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{flat:"","toggle-color":"yellow",icon:"house",outline:"true",label:"Главная",to:"/"}),(0,a.Wm)(c,{flat:"",icon:"percent",outline:"true",label:"Акции",to:"PromotionApp"}),(0,a.Wm)(c,{flat:"",icon:"lunch_dining",outline:"true",label:"Заказ",to:"OrderApp"}),(0,a.Wm)(c,{flat:"",icon:"more_horiz",outline:"true",label:"Ещё",to:"MoreApp"}),(0,a.Wm)(s)])),_:1})])])}const w={setup(){return{}}};var h=o(1639),b=o(1663),_=o(8879),C=o(136),v=o(9984),S=o.n(v);const W=(0,h.Z)(w,[["render",f]]),y=W;S()(w,"components",{QToolbar:b.Z,QBtn:_.Z,QSpace:C.Z});const Z=(0,a.aZ)({name:"MainLayout",components:{MenuApp:y},setup(){return{Card:(0,g.iH)([])}},mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}},watch:{card(e){localStorage.Card=e,console.log(e)}},beforeUpdate(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}},computed:{cardd(){return localStorage.getItem("Card")&&JSON.parse(localStorage.getItem("Card")),JSON.parse(localStorage.getItem("Card"))}},methods:{clickHome(){this.$router.push("/")}}});var k=o(7605),q=o(2133),I=o(6602),Q=o(990),A=o(1378);const H=(0,h.Z)(Z,[["render",i]]),O=H;S()(Z,"components",{QLayout:k.Z,QPageContainer:q.Z,QHeader:I.Z,QBtn:_.Z,QBadge:Q.Z,QFooter:A.Z})}}]);