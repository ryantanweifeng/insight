(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-526f0288":"fc15845b","chunk-2d20828a":"08026427","chunk-6a1d9efb":"14c6e8b9","chunk-554420ba":"ca556e93","chunk-61a86f62":"c94e452a","chunk-c7e52086":"c088a0ca","chunk-7e26833c":"4de83afe"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-526f0288":1,"chunk-6a1d9efb":1,"chunk-554420ba":1,"chunk-61a86f62":1,"chunk-c7e52086":1,"chunk-7e26833c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-526f0288":"3d54ebb5","chunk-2d20828a":"31d6cfe0","chunk-6a1d9efb":"0f996344","chunk-554420ba":"f7b8dbb0","chunk-61a86f62":"12fc2bc4","chunk-c7e52086":"12fc2bc4","chunk-7e26833c":"d4e1520d"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/insight/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],i={name:"App",components:{},data:function(){return{}},methods:{goToRegister:function(){this.$router.push("/Register")}}},s=i,c=n("2877"),u=Object(c["a"])(s,a,o,!1,null,null,null),d=u.exports,l=n("f309");r["a"].use(l["a"]);var f=new l["a"]({}),p=(n("bf40"),n("9e17"),n("d3b7"),n("8c4f")),h=n("af1a");r["a"].use(p["a"]);var m=new p["a"]({routes:[{path:"/",name:"HomePage",component:h["default"]},{path:"/Register",name:"Register",component:function(){return n.e("chunk-7e26833c").then(n.bind(null,"db27"))}},{path:"/DashboardPage",name:"DashboardPage",component:function(){return Promise.all([n.e("chunk-6a1d9efb"),n.e("chunk-61a86f62")]).then(n.bind(null,"9f08"))},props:!0},{path:"/Graph",name:"Graph",component:function(){return Promise.all([n.e("chunk-526f0288"),n.e("chunk-2d20828a")]).then(n.bind(null,"6117"))}},{path:"/InputData",name:"InputData",component:function(){return Promise.all([n.e("chunk-6a1d9efb"),n.e("chunk-526f0288"),n.e("chunk-554420ba")]).then(n.bind(null,"d885"))},props:!0},{path:"/WarehouseM",name:"WarehouseM",component:function(){return Promise.all([n.e("chunk-6a1d9efb"),n.e("chunk-c7e52086")]).then(n.bind(null,"fb2c"))},props:!0},{path:"/HomePage",name:"HomePage",component:function(){return Promise.resolve().then(n.bind(null,"af1a"))},props:!0}]}),v=n("4452"),g=n.n(v);n("ed18").config(),r["a"].config.productionTip=!1,r["a"].use(g.a),new r["a"]({vuetify:f,router:m,render:function(e){return e(d)}}).$mount("#app")},"9e17":function(e,t,n){},af1a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"background"}},[r("v-main",[r("v-card",{attrs:{id:"card1",elevation:"100",width:"900",height:"700"}}),r("v-card",{attrs:{id:"card2",elevation:"80",width:"600",height:"500"}}),r("div",{attrs:{id:"laptop"}},[r("img",{attrs:{width:"750",src:n("d897")}})]),r("div",{attrs:{id:"laptop-screen"}},[r("img",{attrs:{src:n("e183"),width:"524",height:"313"}})]),r("div",{attrs:{id:"mainPageHeader"}},[r("h1",{staticStyle:{"text-align":"center","font-family":"Tahoma","font-size":"40pt"}},[e._v(" Do more ")]),r("h1",{staticStyle:{"text-align":"center","font-family":"Tahoma","font-size":"40pt"}},[e._v(" with your data ")]),r("h2",{staticStyle:{"text-align":"center","font-family":"Tahoma","font-size":"16pt","margin-bottom":"10%"}},[e._v(" Get a better insight of your sales report ")])]),r("div",{attrs:{id:"actionBtn"}},[r("v-row",[r("div",{attrs:{id:"signUp"}},[r("v-btn",{attrs:{elevation:"20",color:"#022140",rounded:"",dark:"","x-large":""},on:{click:function(t){return e.goToRegister()}}},[e._v(" Sign UP ")])],1),[r("v-dialog",{attrs:{persistent:"","max-width":"320"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{id:"loginBtn",elevation:"20",color:"#022140",rounded:"",dark:"","x-large":""}},"v-btn",a,!1),n),[e._v(" Sign in ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{ref:"form",staticStyle:{"margin-bottom":"0","border-radius":"30px"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",{attrs:{id:"cardContainer"}},[r("div",{attrs:{id:"headerContainer"}},[r("div",{staticStyle:{height:"50px"}}),r("h2",{attrs:{id:"headerTitle"}},[r("v-icon",{attrs:{large:"",color:"white darken-2"}},[e._v(" mdi-google-analytics ")]),e._v(" INSIGHT ")],1),r("div",{staticStyle:{height:"50px"}})]),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"username",value:"",placeholder:"username",rules:e.usernameRules,required:"",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",name:"password",value:"",placeholder:"password",rules:e.passwordRules,required:"",outlined:"",autocomplete:"off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-card-actions",{staticClass:"justify-center"},[r("v-col",{attrs:{cols:"12"}},[r("div",[r("v-btn",{attrs:{block:"",large:"",id:"signInBtn",text:""},on:{click:function(t){return e.verifyUser()}}},[e._v(" Sign in ")])],1),r("div",{staticStyle:{height:"15px"}}),r("div",[r("v-btn",{attrs:{block:"",id:"cancelBtn",large:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")])],1)])],1),r("div",{staticStyle:{height:"30px"}})],1)],1)],1)]],2)],1)],1)],1)},a=[],o=(n("4160"),n("159b"),n("bc3a")),i=n.n(o),s={name:"HomePage",data:function(){return{showPassword:!1,valid:!0,dialog:!1,users:[],username:"",password:"",verification:!1,usernameRules:[function(e){return!!e||"Username is required"}],passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{verifyUser:function(){var e=this;i.a.get("api/users.php").then((function(t){e.contacts=t.data,t.data.forEach((function(t){e.username===t.username&&e.password===t.password&&"sales manager"===t.usertype?e.$router.push({name:"InputData",params:{username:e.username}}):e.username===t.username&&e.password===t.password&&"warehouse manager"===t.usertype&&e.$router.push("/WarehouseM")}))})).catch((function(e){console.log(e)}))},goToRegister:function(){this.$router.push("/Register")},checkForm:function(e){if(this.username&&this.password)return!0;this.errors=[],this.username||this.$refs.form.validate(),this.password||this.errors.push("Age required."),e.preventDefault()},validate:function(){this.$refs.form.validate()}}},c=s,u=(n("f7cc"),n("2877")),d=n("6544"),l=n.n(d),f=n("7496"),p=n("8336"),h=n("b0af"),m=n("99d9"),v=n("62ad"),g=n("169a"),b=n("4bd4"),w=n("132d"),k=n("f6c4"),y=n("0fd9"),x=n("8654"),P=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=P.exports;l()(P,{VApp:f["a"],VBtn:p["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCol:v["a"],VDialog:g["a"],VForm:b["a"],VIcon:w["a"],VMain:k["a"],VRow:y["a"],VTextField:x["a"]})},c8b0:function(e,t,n){},d897:function(e,t,n){e.exports=n.p+"img/laptop.519ffe05.png"},e183:function(e,t,n){e.exports=n.p+"img/insight_dashboard.8b8c3b18.png"},f7cc:function(e,t,n){"use strict";n("c8b0")}});
//# sourceMappingURL=app.396d62f6.js.map