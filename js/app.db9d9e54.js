(function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5f2de780":"69277afc","chunk-61a86f62":"b292bb6a","chunk-a774a124":"2f20a3fe","chunk-c7e52086":"a38079fe","chunk-a31cce5a":"8bddefcd","chunk-c23bdbd0":"6407e8f3"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5f2de780":1,"chunk-61a86f62":1,"chunk-a774a124":1,"chunk-c7e52086":1,"chunk-a31cce5a":1,"chunk-c23bdbd0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5f2de780":"902654a9","chunk-61a86f62":"12fc2bc4","chunk-a774a124":"5440b38e","chunk-c7e52086":"3123f512","chunk-a31cce5a":"6ede14cf","chunk-c23bdbd0":"1dc8b70e"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/insight/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],s={name:"App",components:{},data:function(){return{}},methods:{goToRegister:function(){this.$router.push("/Register")}}},u=s,i=n("2877"),c=Object(i["a"])(u,a,o,!1,null,null,null),l=c.exports,d=n("f309");r["a"].use(d["a"]);var f=new d["a"]({}),p=(n("bf40"),n("9e17"),n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[[r("v-parallex",[r("v-img",{attrs:{src:n("af73"),"max-width":"100%","max-height":"100%"}}),r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("div",{staticStyle:{"margin-bottom":"50%"}},[r("h1",{staticStyle:{"text-align":"center","font-family":"Tahoma","font-size":"50pt"}},[e._v(" Do more ")]),r("h1",{staticStyle:{"font-family":"Tahoma","font-size":"50pt"}},[e._v("with your data")]),r("h2",{staticStyle:{"font-family":"Tahoma","font-size":"20pt","margin-bottom":"10%"}},[e._v(" Get a better insight of your business ")]),r("v-row",{attrs:{justify:"center"}},[[r("div",{staticStyle:{"margin-right":"50pt"}},[r("v-btn",{attrs:{color:"blue-grey",dark:"","x-large":""},on:{click:function(t){return e.goToRegister()}}},[e._v(" Sign UP ")])],1)],[r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",dark:"","x-large":""}},"v-btn",a,!1),n),[e._v(" Sign in ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Sign In ")]),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"username",value:"",placeholder:"username",rules:e.usernameRules,required:"",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",name:"password",value:"",placeholder:"password",rules:e.passwordRules,required:"",outlined:"",autocomplete:"off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.verifyUser()}}},[e._v(" Sign in ")])],1)],1)],1)],1)]],2)],1)])],1)]],2)},m=[],v=(n("4160"),n("159b"),n("bc3a")),g=n.n(v),b={name:"Home",data:function(){return{showPassword:!1,valid:!0,dialog:!1,users:[],username:"",password:"",verification:!1,usernameRules:[function(e){return!!e||"Username is required"}],passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{verifyUser:function(){var e=this;g.a.get("api/users.php").then((function(t){e.contacts=t.data,t.data.forEach((function(t){e.username===t.username&&e.password===t.password&&"sales manager"===t.usertype?e.$router.push({name:"InputData",params:{username:e.username}}):e.username===t.username&&e.password===t.password&&"warehouse manager"===t.usertype&&e.$router.push("/WarehouseM")}))})).catch((function(e){console.log(e)}))},goToRegister:function(){this.$router.push("/Register")},checkForm:function(e){if(this.username&&this.password)return!0;this.errors=[],this.username||this.$refs.form.validate(),this.password||this.errors.push("Age required."),e.preventDefault()},validate:function(){this.$refs.form.validate()}},mounted:function(){console.log(this.usertype)}},y=b,w=n("6544"),k=n.n(w),x=n("7496"),_=n("8336"),P=n("b0af"),S=n("99d9"),T=n("169a"),j=n("4bd4"),O=n("adda"),C=n("a797"),V=n("0fd9"),E=n("2fa4"),R=n("8654"),A=Object(i["a"])(y,h,m,!1,null,null,null),D=A.exports;k()(A,{VApp:x["a"],VBtn:_["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:T["a"],VForm:j["a"],VImg:O["a"],VOverlay:C["a"],VRow:V["a"],VSpacer:E["a"],VTextField:R["a"]}),r["a"].use(p["a"]);var $=new p["a"]({routes:[{path:"/",name:"Home",component:D},{path:"/Register",name:"Register",component:function(){return n.e("chunk-c23bdbd0").then(n.bind(null,"db27"))}},{path:"/DashboardPage",name:"DashboardPage",component:function(){return Promise.all([n.e("chunk-5f2de780"),n.e("chunk-61a86f62")]).then(n.bind(null,"9f08"))},props:!0},{path:"/Graph",name:"Graph",component:function(){return n.e("chunk-a31cce5a").then(n.bind(null,"6117"))}},{path:"/InputData",name:"InputData",component:function(){return Promise.all([n.e("chunk-5f2de780"),n.e("chunk-a774a124")]).then(n.bind(null,"d885"))},props:!0},{path:"/WarehouseM",name:"WarehouseM",component:function(){return Promise.all([n.e("chunk-5f2de780"),n.e("chunk-c7e52086")]).then(n.bind(null,"fb2c"))},props:!0}]}),q=n("4452"),M=n.n(q);n("ed18").config(),r["a"].config.productionTip=!1,r["a"].use(M.a),new r["a"]({vuetify:f,router:$,render:function(e){return e(l)}}).$mount("#app")},"9e17":function(e,t,n){},af73:function(e,t,n){e.exports=n.p+"img/business.1bf0a6a3.jpg"}});
//# sourceMappingURL=app.db9d9e54.js.map