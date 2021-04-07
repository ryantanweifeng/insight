(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a774a124","chunk-a31cce5a"],{1681:function(t,e,a){},6117:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["none"===t.have_results||"processing"===t.have_results?a("v-form",{on:{submit:t.checkForm}},[t.errors.length?a("div",[a("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return a("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),a("div",[a("label",{attrs:{id:"header",for:"exampleFormControlTextarea1"}},[t._v("Please enter data in CSV format as shown below:")]),a("p",[t._v("date,target,profit,sales,transactions")]),a("p",[t._v("2015-01-01,80000,114991,90921,483")]),a("p",[t._v("2015-01-01,90000,129355,93116,224")]),a("br"),a("v-textarea",{attrs:{outlined:"",disabled:"processing"===t.have_results,name:"csvdata",id:"csvdata",rows:"23"},model:{value:t.csvdata,callback:function(e){t.csvdata=e},expression:"csvdata"}})],1),a("v-btn",{staticStyle:{"background-color":"#022140",color:"white"},attrs:{type:"submit"}},["none"===t.have_results?a("span",[t._v("Submit")]):t._e(),"processing"===t.have_results?a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",[t._v("Loading...")])]):t._e()])],1):t._e(),"finished"===t.have_results?a("div",{staticClass:"container"},[a("hr"),a("br"),a("br"),a("hr"),a("hr")]):t._e()],1)},o=[],n=(a("4160"),a("ac1f"),a("466d"),a("1276"),a("498a"),a("159b"),a("bc3a")),i=a.n(n);a("ed18").config();var r={props:{},name:"Graphs",data:function(){return{errors:[],csvdata:null,have_results:"none",images:null}},methods:{checkForm:function(t){var e=this;if(t.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var a=this.csvdata.trim().split("\n"),s=a[0],o=s.split(",").length;if(5!==o)return void this.errors.push("CSV data must have 5 columns only !");if("date"!==s.split(",")[0]||"target"!==s.split(",")[1]||"profit"!==s.split(",")[2]||"sales"!==s.split(",")[3]||"transactions"!==s.split(",")[4])return void this.errors.push("Please ensure that the labels of the CSV data header are in the correct format ! ");a.shift();var n={};try{a.forEach((function(t){if(t.split(",").length!==o)throw e.errors.push('CSV data not valid. There might be a missing "," or a value'),n;if(!t.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw e.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),n}))}catch(t){if(t!==n)throw t;return}if(a.length<50)return void this.errors.push("CSV data not enough to predict the future sales. Enter atleast 3 years data to make accurate prediction");this.have_results="processing",i.a.post("/api/posting/",{csv:this.csvdata}).then((function(t){var a=t["data"]["results"];e.have_results="finished",e.images=a,"finished"===e.have_results&&e.$router.push("/DashboardPage"),console.log(window.location.href)})).catch((function(t){this.have_results="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))}}},mounted:function(){console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production")}},c=r,l=(a("656a"),a("2877")),u=a("6544"),d=a.n(u),h=a("8336"),v=a("4bd4"),p=(a("a9e3"),a("5530")),m=(a("1681"),a("8654")),f=a("58df"),g=Object(f["a"])(m["a"]),b=g.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(p["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},m["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=m["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){m["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),w=Object(l["a"])(c,s,o,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:h["a"],VForm:v["a"],VTextarea:b})},"656a":function(t,e,a){"use strict";a("acc2")},"7ceb":function(t,e,a){"use strict";a("93d1")},"93d1":function(t,e,a){},acc2:function(t,e,a){},d885:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"div1"}},[a("v-card",{attrs:{height:"100%",elevation:"24"}},[a("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar"),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.username))]),a("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{rounded:""}},[a("v-subheader"),a("v-list-item-group",{attrs:{"active-class":"selectedItem",color:"",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",{staticStyle:{color:"white"}},[a("v-list-item-title",{attrs:{active:""},domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),a("div",{attrs:{id:"div2"}},[a("v-main",[a("div",{attrs:{id:"main"}},[a("InputData")],1)])],1)])},o=[],n=a("ea7f"),i=a.n(n),r=a("bc3a"),c=a.n(r),l=a("668e"),u=a.n(l),d=a("6117"),h=a("d68a"),v=a.n(h);v()(i.a),u()(i.a);var p={props:["username"],data:function(){return{color:"",data:null,errors:[],selectedItem:"",items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}]}},components:{InputData:d["default"]},methods:{goToPage:function(t){var e=this;c()("backendFinal/prediction.csv").then((function(a){console.log("this is response value"+a),null!==a&&"Dashboard"==t&&e.$router.push({name:"DashboardPage",params:{username:e.username}})})).catch((function(a){console.log(a),a=e.data,"Dashboard"==t&&(alert("Please enter CSV data to view the dashboard !"),e.selectedItem=!1)})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;c.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=p,f=(a("7ceb"),a("2877")),g=a("6544"),b=a.n(g),w=a("7496"),_=a("b0af"),I=a("ce7e"),V=a("132d"),x=a("8860"),k=a("da13"),y=a("8270"),S=a("5d23"),C=a("1baa"),D=a("34c3"),P=a("f6c4"),H=a("f774"),L=a("e0c7"),$=Object(f["a"])(m,s,o,!1,null,null,null);e["default"]=$.exports;b()($,{VApp:w["a"],VCard:_["a"],VDivider:I["a"],VIcon:V["a"],VList:x["a"],VListItem:k["a"],VListItemAvatar:y["a"],VListItemContent:S["a"],VListItemGroup:C["a"],VListItemIcon:D["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:P["a"],VNavigationDrawer:H["a"],VSubheader:L["a"]})}}]);
//# sourceMappingURL=chunk-a774a124.ec90f0d1.js.map