(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-23acd359":"4c2f4f8d","chunk-2d0ceb17":"7b7e0ef5","chunk-566741b6":"ff7f0a1b"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-23acd359":1,"chunk-566741b6":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-23acd359":"00dfb780","chunk-2d0ceb17":"31d6cfe0","chunk-566741b6":"ea129a77"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/insight/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},o=[],i={name:"App",components:{},data:function(){return{}},methods:{goToRegister:function(){this.$router.push("/Register")}}},s=i,u=r("2877"),c=Object(u["a"])(s,a,o,!1,null,null,null),l=c.exports,d=r("f309");n["a"].use(d["a"]);var f=new d["a"]({}),p=(r("bf40"),r("9e17"),r("d3b7"),r("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[[n("v-parallex",[n("v-img",{attrs:{src:r("af73"),"max-width":"100%","max-height":"100%"}}),n("v-overlay",{attrs:{absolute:"",color:"#036358"}},[n("div",{staticStyle:{"margin-bottom":"50%"}},[n("h1",{staticStyle:{"text-align":"center","font-family":"Tahoma","font-size":"50pt"}},[e._v(" Do more ")]),n("h1",{staticStyle:{"font-family":"Tahoma","font-size":"50pt"}},[e._v("with your data")]),n("h2",{staticStyle:{"font-family":"Tahoma","font-size":"20pt","margin-bottom":"10%"}},[e._v(" Get a better insight of your business ")]),n("v-row",{attrs:{justify:"center"}},[[n("div",{staticStyle:{"margin-right":"50pt"}},[n("v-btn",{attrs:{color:"blue-grey",dark:"","x-large":""},on:{click:function(t){return e.goToRegister()}}},[e._v(" Sign UP ")])],1)],[n("div",{staticStyle:{"margin-right":"50pt"}},[n("v-btn",{attrs:{color:"blue-grey",dark:"","x-large":""},on:{click:function(t){return e.goToGraph()}}},[e._v(" Graph ")])],1)],[n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"primary",dark:"","x-large":""}},"v-btn",a,!1),r),[e._v(" Sign in ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v(" Sign In ")]),n("v-card-text",[n("v-text-field",{attrs:{type:"text",name:"username",value:"",placeholder:"username",rules:e.usernameRules,required:"",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",name:"password",value:"",placeholder:"password",rules:e.passwordRules,required:"",outlined:"",autocomplete:"off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.verifyUser()}}},[e._v(" Sign in ")])],1)],1)],1)],1)]],2)],1)])],1)]],2)},m=[],v=(r("4160"),r("159b"),r("bc3a")),g=r.n(v),b={name:"Home",data:function(){return{showPassword:!1,valid:!0,dialog:!1,users:[],username:"",password:"",verification:!1,usernameRules:[function(e){return!!e||"Username is required"}],passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{goToGraph:function(){this.$router.push("/Graph")},verifyUser:function(){var e=this;g.a.get("api/users.php").then((function(t){e.contacts=t.data,t.data.forEach((function(t){e.username===t.username&&e.password===t.password&&e.$router.push("/DashboardPage")}))})).catch((function(e){console.log(e)}))},goToRegister:function(){this.$router.push("/Register")},checkForm:function(e){if(this.username&&this.password)return!0;this.errors=[],this.username||this.$refs.form.validate(),this.password||this.errors.push("Age required."),e.preventDefault()},validate:function(){this.$refs.form.validate()}}},y=b,w=r("6544"),k=r.n(w),x=r("7496"),_=r("8336"),S=r("b0af"),P=r("99d9"),T=r("169a"),j=r("4bd4"),O=r("adda"),C=r("a797"),V=r("0fd9"),E=r("2fa4"),R=r("8654"),A=Object(u["a"])(y,h,m,!1,null,null,null),$=A.exports;k()(A,{VApp:x["a"],VBtn:_["a"],VCard:S["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VDialog:T["a"],VForm:j["a"],VImg:O["a"],VOverlay:C["a"],VRow:V["a"],VSpacer:E["a"],VTextField:R["a"]}),n["a"].use(p["a"]);var D=new p["a"]({routes:[{path:"/",name:"Home",component:$},{path:"/Register",name:"Register",component:function(){return r.e("chunk-566741b6").then(r.bind(null,"db27"))}},{path:"/DashboardPage",name:"DashboardPage",component:function(){return r.e("chunk-23acd359").then(r.bind(null,"9f08"))}},{path:"/Graph",name:"Graph",component:function(){return r.e("chunk-2d0ceb17").then(r.bind(null,"6117"))}}]}),q=r("4452"),G=r.n(q);n["a"].config.productionTip=!1,n["a"].use(G.a),new n["a"]({vuetify:f,router:D,render:function(e){return e(l)}}).$mount("#app")},"9e17":function(e,t,r){},af73:function(e,t,r){e.exports=r.p+"img/business.1bf0a6a3.jpg"}});
//# sourceMappingURL=app.8e5ded7a.js.map