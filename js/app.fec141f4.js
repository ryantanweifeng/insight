(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0fd5b044":"a1e646f1","chunk-2d0ceb17":"202d5161","chunk-771b073c":"bfb5c287","chunk-0ba49228":"2c737970","chunk-133672b0":"09a4eb88"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0fd5b044":1,"chunk-771b073c":1,"chunk-0ba49228":1,"chunk-133672b0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0fd5b044":"ab4b87f5","chunk-2d0ceb17":"31d6cfe0","chunk-771b073c":"9dc753a9","chunk-0ba49228":"3123f512","chunk-133672b0":"cb181986"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/insight/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],s={name:"App",components:{},data:function(){return{}},methods:{goToRegister:function(){this.$router.push("/Register")}}},i=s,u=n("2877"),c=Object(u["a"])(i,a,o,!1,null,null,null),l=c.exports,d=n("f309");r["a"].use(d["a"]);var f=new d["a"]({}),p=(n("bf40"),n("9e17"),n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[[r("v-parallex",[r("v-img",{attrs:{src:n("af73"),"max-width":"100%","max-height":"100%"}}),r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("div",{staticStyle:{"margin-bottom":"50%"}},[r("h1",{staticStyle:{"text-align":"center","font-family":"Tahoma","font-size":"50pt"}},[e._v(" Do more ")]),r("h1",{staticStyle:{"font-family":"Tahoma","font-size":"50pt"}},[e._v("with your data")]),r("h2",{staticStyle:{"font-family":"Tahoma","font-size":"20pt","margin-bottom":"10%"}},[e._v(" Get a better insight of your business ")]),r("v-row",{attrs:{justify:"center"}},[[r("div",{staticStyle:{"margin-right":"50pt"}},[r("v-btn",{attrs:{color:"blue-grey",dark:"","x-large":""},on:{click:function(t){return e.goToRegister()}}},[e._v(" Sign UP ")])],1)],[r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",dark:"","x-large":""}},"v-btn",a,!1),n),[e._v(" Sign in ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Sign In ")]),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"username",value:"",placeholder:"username",rules:e.usernameRules,required:"",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",name:"password",value:"",placeholder:"password",rules:e.passwordRules,required:"",outlined:"",autocomplete:"off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.verifyUser()}}},[e._v(" Sign in ")])],1)],1)],1)],1)]],2)],1)])],1)]],2)},m=[],v=(n("4160"),n("159b"),n("bc3a")),b=n.n(v),g={name:"Home",data:function(){return{showPassword:!1,valid:!0,dialog:!1,users:[],username:"",password:"",verification:!1,usernameRules:[function(e){return!!e||"Username is required"}],passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{verifyUser:function(){var e=this;b.a.get("api/users.php").then((function(t){e.contacts=t.data,t.data.forEach((function(t){e.username===t.username&&e.password===t.password&&e.$router.push({name:"DashboardPage",params:{username:e.username}})}))})).catch((function(e){console.log(e)}))},goToRegister:function(){this.$router.push("/Register")},checkForm:function(e){if(this.username&&this.password)return!0;this.errors=[],this.username||this.$refs.form.validate(),this.password||this.errors.push("Age required."),e.preventDefault()},validate:function(){this.$refs.form.validate()}}},y=g,w=n("6544"),k=n.n(w),x=n("7496"),_=n("8336"),P=n("b0af"),S=n("99d9"),T=n("169a"),j=n("4bd4"),O=n("adda"),C=n("a797"),V=n("0fd9"),E=n("2fa4"),R=n("8654"),A=Object(u["a"])(y,h,m,!1,null,null,null),D=A.exports;k()(A,{VApp:x["a"],VBtn:_["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:T["a"],VForm:j["a"],VImg:O["a"],VOverlay:C["a"],VRow:V["a"],VSpacer:E["a"],VTextField:R["a"]}),r["a"].use(p["a"]);var $=new p["a"]({routes:[{path:"/",name:"Home",component:D},{path:"/Register",name:"Register",component:function(){return n.e("chunk-0fd5b044").then(n.bind(null,"db27"))}},{path:"/DashboardPage",name:"DashboardPage",component:function(){return Promise.all([n.e("chunk-771b073c"),n.e("chunk-0ba49228")]).then(n.bind(null,"9f08"))},props:!0},{path:"/Graph",name:"Graph",component:function(){return n.e("chunk-2d0ceb17").then(n.bind(null,"6117"))}},{path:"/InputData",name:"InputData",component:function(){return Promise.all([n.e("chunk-771b073c"),n.e("chunk-133672b0")]).then(n.bind(null,"d885"))},props:!0}]}),q=n("4452"),I=n.n(q);n("ed18").config(),r["a"].config.productionTip=!1,r["a"].use(I.a),new r["a"]({vuetify:f,router:$,render:function(e){return e(l)}}).$mount("#app")},"9e17":function(e,t,n){},af73:function(e,t,n){e.exports=n.p+"img/business.1bf0a6a3.jpg"}});
//# sourceMappingURL=app.fec141f4.js.map