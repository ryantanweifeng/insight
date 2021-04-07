(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a774a124","chunk-a31cce5a"],{1681:function(t,e,a){},6117:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["none"===t.have_results||"processing"===t.have_results?a("v-form",{on:{submit:t.checkForm}},[t.errors.length?a("div",[a("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return a("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),a("div",[a("label",{attrs:{id:"header",for:"exampleFormControlTextarea1"}},[t._v("Please enter data in CSV format as shown below:")]),a("p",[t._v("date,target,profit,sales,transactions")]),a("p",[t._v("2015-01-01,80000,114991,90921,483")]),a("p",[t._v("2015-01-01,90000,129355,93116,224")]),a("br"),a("v-textarea",{attrs:{outlined:"",disabled:"processing"===t.have_results,name:"csvdata",id:"csvdata",rows:"23",shaped:""},model:{value:t.csvdata,callback:function(e){t.csvdata=e},expression:"csvdata"}}),a("div",{staticClass:"text-center"},["none"===t.have_results?a("v-btn",{staticStyle:{"background-color":"#022140",color:"white"},attrs:{large:"",type:"submit",disabled:t.dialog,loading:t.dialog}},[t._v(" Submit ")]):t._e(),"processing"===t.have_results?a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v(" Please stand by "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1):t._e()],1)],1)]):t._e(),"finished"===t.have_results?a("div",{staticClass:"container"},[a("hr"),a("br"),a("br"),a("hr"),a("hr")]):t._e()],1)},i=[],o=(a("4160"),a("ac1f"),a("466d"),a("1276"),a("498a"),a("159b"),a("bc3a")),r=a.n(o);a("ed18").config();var n={props:{},name:"Graphs",data:function(){return{interval:{},value:0,errors:[],csvdata:null,have_results:"none",images:null,dialog:!1}},methods:{checkForm:function(t){var e=this;if(this.dialog=!0,t.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var a=this.csvdata.trim().split("\n"),s=a[0],i=s.split(",").length;if(5!==i)return void this.errors.push("CSV data must have 5 columns only !");if("date"!==s.split(",")[0]||"target"!==s.split(",")[1]||"profit"!==s.split(",")[2]||"sales"!==s.split(",")[3]||"transactions"!==s.split(",")[4])return void this.errors.push("Please ensure that the labels of the CSV data header are in the correct format ! ");a.shift();var o={};try{a.forEach((function(t){if(t.split(",").length!==i)throw e.errors.push('CSV data not valid. There might be a missing "," or a value'),o;if(!t.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw e.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),o}))}catch(t){if(t!==o)throw t;return}if(a.length<50)return void this.errors.push("CSV data not enough to predict the future sales. Enter atleast 3 years data to make accurate prediction");this.have_results="processing",r.a.post("/api/posting/",{csv:this.csvdata}).then((function(t){var a=t["data"]["results"];e.have_results="finished",e.images=a,"finished"===e.have_results&&e.$router.push("/DashboardPage"),console.log(window.location.href)})).catch((function(t){this.have_results="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))}}},mounted:function(){var t=this;console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production"),this.interval=setInterval((function(){if(100===t.value)return t.value=0;t.value+=5}),1e3)}},l=n,c=(a("656a"),a("2877")),u=a("6544"),d=a.n(u),h=a("8336"),v=a("b0af"),p=a("99d9"),m=a("169a"),f=a("4bd4"),g=a("8e36"),b=(a("a9e3"),a("5530")),w=(a("1681"),a("8654")),_=a("58df"),V=Object(_["a"])(w["a"]),I=V.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(b["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},w["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=w["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){w["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),x=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=x.exports;d()(x,{VBtn:h["a"],VCard:v["a"],VCardText:p["b"],VDialog:m["a"],VForm:f["a"],VProgressLinear:g["a"],VTextarea:I})},"656a":function(t,e,a){"use strict";a("acc2")},"7ceb":function(t,e,a){"use strict";a("93d1")},"93d1":function(t,e,a){},acc2:function(t,e,a){},d885:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"div1"}},[a("v-card",{attrs:{height:"100%",elevation:"24"}},[a("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar"),a("v-list-item-content",[a("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),a("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{rounded:""}},[a("v-subheader"),a("v-list-item-group",{attrs:{color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",{staticStyle:{color:"white"}},[a("v-list-item-title",{attrs:{active:""},domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),a("div",{attrs:{id:"div2"}},[a("v-main",[a("div",{attrs:{id:"main"}},[a("InputData")],1)])],1)])},i=[],o=a("ea7f"),r=a.n(o),n=a("bc3a"),l=a.n(n),c=a("668e"),u=a.n(c),d=a("6117"),h=a("d68a"),v=a.n(h);v()(r.a),u()(r.a);var p={props:["username"],data:function(){return{color:"",data:null,errors:[],selectedItem:1,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}]}},components:{InputData:d["default"]},methods:{goToPage:function(t){var e=this;l()("backendFinal/prediction.csv").then((function(a){console.log("this is response value"+a),null!==a&&"Dashboard"==t&&e.$router.push({name:"DashboardPage",params:{username:e.username}})})).catch((function(a){console.log(a),a=e.data,"Dashboard"==t&&(alert("Please enter CSV data to view the dashboard !"),e.selectedItem=!1)})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;l.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=p,f=(a("7ceb"),a("2877")),g=a("6544"),b=a.n(g),w=a("7496"),_=a("b0af"),V=a("ce7e"),I=a("132d"),x=a("8860"),y=a("da13"),k=a("8270"),C=a("5d23"),S=a("1baa"),D=a("34c3"),P=a("f6c4"),H=a("f774"),L=a("e0c7"),T=Object(f["a"])(m,s,i,!1,null,null,null);e["default"]=T.exports;b()(T,{VApp:w["a"],VCard:_["a"],VDivider:V["a"],VIcon:I["a"],VList:x["a"],VListItem:y["a"],VListItemAvatar:k["a"],VListItemContent:C["a"],VListItemGroup:S["a"],VListItemIcon:D["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VMain:P["a"],VNavigationDrawer:H["a"],VSubheader:L["a"]})}}]);
//# sourceMappingURL=chunk-a774a124.6ea21b06.js.map