(function(e){function t(t){for(var o,c,a=t[0],i=t[1],u=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},s=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/show-five-friends-from-vk/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("7a23");const n=Object(o["d"])("header",{class:"header"},[Object(o["d"])("div",{class:"header_nav"},[Object(o["d"])("a",{class:"header_anchor",href:"https://vk.com/feed"},[Object(o["d"])("img",{src:"https://vk.com/images/svg_icons/ic_head_logo.svg",alt:""})])])],-1),s={key:0,class:"users"};function c(e,t,r,c,a,i){const u=Object(o["h"])("User");return Object(o["f"])(),Object(o["c"])(o["a"],null,[n,a.users?(Object(o["f"])(),Object(o["c"])("div",s,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["g"])(a.users,(e,t)=>(Object(o["f"])(),Object(o["c"])(u,Object(o["e"])({key:t,id:t},e),null,16,["id"]))),128))])):(Object(o["f"])(),Object(o["c"])("a",{key:1,href:e.$authorizationLink,class:"authorization_button"},"авторизоваться",8,["href"]))],64)}const a={class:"user_information"};function i(e,t,r,n,s,c){return Object(o["k"])((Object(o["f"])(),Object(o["c"])("a",{class:"user",href:"https://vk.com/id"+r.id},[Object(o["d"])("div",{onLoad:t[1]||(t[1]=(...t)=>e.test(...t)),class:"user_photo",style:{"background-image":"url("+s.url+")"}},null,36),Object(o["k"])(Object(o["d"])("img",{src:r.photo,onLoad:t[2]||(t[2]=(...e)=>c.showElement(...e))},null,40,["src"]),[[o["j"],!1]]),Object(o["d"])("h5",a,Object(o["i"])(r.name)+" "+Object(o["i"])(r.lastName),1)],8,["href"])),[[o["j"],s.show]])}var u={props:["photo","name","lastName","id"],data(){return{show:!1,url:""}},methods:{showElement(e){this.show=!0,this.url=e.target.src,e.target.remove()}}};r("7bd4");u.render=i;var l=u,d={name:"App",components:{User:l},data(){return{users:{}}},async created(){console.log("test travis 2"),this.users=await this.$getUsers()}};r("64be");d.render=c;var f=d,p={install:(e,t)=>{let{access_token:r,id:o}=n();function n(){let{access_token:e,id:t}=document.location.hash.slice(1).split("&").map(e=>e.split("=")).reduce((e,[t,r])=>Object.assign(e,{[t]:r}),{});return e&&t?(localStorage.setItem("access_token",e),localStorage.setItem("id",t),{access_token:e,id:t}):{acces_token:localStorage.getItem("access_token"),id:localStorage.getItem("id")}}function s(e){const t=Object.keys(e);return t.map(t=>`${t}=${"object"==typeof e[t]?e[t].join():e[t]}`).join("&")}const c=function(){let e=0;return async function(t="",o={}){const n=e++;o.v=5.52,o.callback="response"+n,o.access_token=r;const c=`https://api.vk.com/method/${t}?${s(o)}`;return new Promise((e,t)=>{window["response"+n]=function(s){if(s.response)e(s.response);else{if(!s.error)throw new Error("🤷‍♂️");t(s.error)}clearTimeout(o),delete window["response"+n],r.remove()};const r=document.createElement("script");r.src=c,document.head.appendChild(r);const o=setTimeout(()=>{throw new Error("time out")},2e3);r.onerror=()=>{throw new Error("access error")}})}}();async function a(){let e=await c("users.get",{id:o,fields:"photo_200_orig"});return{id:e[0].id,name:e[0].first_name,lastName:e[0].last_name,photo:e[0].photo_200_orig}}async function i(){const e={count:5,order:"random",offset:0,fields:["photo_200_orig"]},t=(e,t)=>(t.deactivated||e[t.id]||(e[t.id]={name:t.first_name,lastName:t.last_name,photo:t.photo_200_orig}),e),{count:r,items:o}=await c("friends.get",e),n=o.reduce(t,{});e.order="hints";for(let s=0;s<r&&Object.keys(n).length<5;s+=e.count){e.offset=s,e.count=5-Object.keys(n).length;const{items:r}=await c("friends.get",e);r.reduce(t,n)}return Object.keys(n).map(e=>Object.assign({id:e},n[e]))}async function u(){return[await a(),...await i()]}e.config.globalProperties.$getUsers=async()=>r&&o?u():null,e.config.globalProperties.$authorizationLink="https://oauth.vk.com/authorize?"+s({client_id:7636014,redirect_uri:"https://keet5.github.io/show-five-friends-from-vk/",display:"popup",scope:"friends",response_type:"token",v:5.52})}};Object(o["b"])(f).use(p).mount("#app")},"64be":function(e,t,r){"use strict";r("c894")},"7bd4":function(e,t,r){"use strict";r("cc7b")},c894:function(e,t,r){},cc7b:function(e,t,r){}});
//# sourceMappingURL=app.56fc509a.js.map