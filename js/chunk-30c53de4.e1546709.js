(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30c53de4","chunk-2d0ceb17"],{6117:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["none"===t.have_results||"processing"===t.have_results?s("form",{on:{submit:t.checkForm}},[t.errors.length?s("div",[s("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return s("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Data in CSV")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.csvdata,expression:"csvdata"}],staticClass:"form-control",attrs:{disabled:"processing"===t.have_results,name:"csvdata",id:"csvdata",rows:"25"},domProps:{value:t.csvdata},on:{input:function(e){e.target.composing||(t.csvdata=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},["none"===t.have_results?s("span",[t._v("Submit")]):t._e(),"processing"===t.have_results?s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()])]):t._e(),"finished"===t.have_results?s("div",{staticClass:"container"},[s("hr"),s("br"),s("br"),s("hr"),s("img",{attrs:{width:"100%",src:t.images["final_predictions"],alt:"img"}}),s("hr")]):t._e()])},i=[],n=(s("4160"),s("ac1f"),s("466d"),s("1276"),s("498a"),s("159b"),s("bc3a")),r=s.n(n);s("ed18").config();var o={name:"Graphs",data:function(){return{errors:[],csvdata:null,have_results:"none",images:null}},methods:{checkForm:function(t){var e=this;if(t.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var s=this.csvdata.trim().split("\n"),a=s[0],i=a.split(",").length;if(4!==i)return void this.errors.push("CSV must have 4 columns");if("date"!==a.split(",")[0]||"store"!==a.split(",")[1]||"item"!==a.split(",")[2]||"sales"!==a.split(",")[3])return void this.errors.push("CSV  header names are not valid ");s.shift();var n={};try{s.forEach((function(t){if(t.split(",").length!==i)throw e.errors.push("CSV data not valid. might be there is a "," or element missing"),n;if(!t.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw e.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),n}))}catch(t){if(t!==n)throw t;return}if(s.length<50)return void this.errors.push("CSV not enough to predict the future sales");this.have_results="processing",r.a.post("/api/posting/",{csv:this.csvdata}).then((function(t){var s=t["data"]["results"];e.have_results="finished",e.images=s,e.have_results,console.log(window.location.href)})).catch((function(t){this.have_results="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))}}},mounted:function(){console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production")}},l=o,c=s("2877"),d=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports},"7ceb":function(t,e,s){"use strict";s("93d1")},"93d1":function(t,e,s){},d885:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{attrs:{id:"div1"}},[s("v-card",{attrs:{height:"100%",elevation:"24"}},[s("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar"),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.username))]),s("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[s("v-divider"),s("v-list",{attrs:{rounded:""}},[s("v-subheader"),s("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,a){return s("v-list-item",{key:a},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.title)},on:{click:function(s){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),s("div",{attrs:{id:"div2"}},[s("v-main",[s("div",{attrs:{id:"main"}},[s("InputData")],1)])],1)])},i=[],n=s("ea7f"),r=s.n(n),o=s("bc3a"),l=s.n(o),c=s("668e"),d=s.n(c),u=s("6117"),v=s("d68a"),h=s.n(v);h()(r.a),d()(r.a);var m={props:["username"],data:function(){return{selectedItem:"",items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"}]}},components:{InputData:u["default"]},methods:{goToPage:function(t){"Dashboard"==t&&this.$router.push({name:"DashboardPage",params:{username:this.username}})},updateData:function(){var t=this;l.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)})),l.a.get("backendFinal/salesFile.csv").then((function(e){t.chartOptions1.data.csv=e.data,console.log("this is salesFile.csv ==== "+e.data)})).catch((function(t){console.log(t)})),this.chartOptions3.data.csv=this.$refs.data1.innerHTML}},mounted:function(){this.updateData()}},p=m,f=(s("7ceb"),s("2877")),g=s("6544"),b=s.n(g),_=s("7496"),V=s("b0af"),w=s("ce7e"),C=s("132d"),I=s("8860"),k=s("da13"),D=s("8270"),L=s("5d23"),S=s("1baa"),x=s("34c3"),P=s("f6c4"),y=s("f774"),F=s("e0c7"),O=Object(f["a"])(p,a,i,!1,null,null,null);e["default"]=O.exports;b()(O,{VApp:_["a"],VCard:V["a"],VDivider:w["a"],VIcon:C["a"],VList:I["a"],VListItem:k["a"],VListItemAvatar:D["a"],VListItemContent:L["a"],VListItemGroup:S["a"],VListItemIcon:x["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VMain:P["a"],VNavigationDrawer:y["a"],VSubheader:F["a"]})}}]);
//# sourceMappingURL=chunk-30c53de4.e1546709.js.map