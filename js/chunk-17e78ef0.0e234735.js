(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e78ef0","chunk-201a6b7e"],{6117:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["none"===t.have_results||"processing"===t.have_results?a("form",{on:{submit:t.checkForm}},[t.errors.length?a("div",[a("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return a("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{id:"header",for:"exampleFormControlTextarea1"}},[t._v("Please enter data in CSV format as shown below:")]),a("p",[t._v("date,target,profit,sales,transactions")]),a("p",[t._v("2015-01-01,1,114991,90921,483")]),a("p",[t._v("2015-01-01,2,129355,93116,224")]),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.csvdata,expression:"csvdata"}],staticClass:"form-control",attrs:{disabled:"processing"===t.have_results,name:"csvdata",id:"csvdata",rows:"23"},domProps:{value:t.csvdata},on:{input:function(e){e.target.composing||(t.csvdata=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},["none"===t.have_results?a("span",[t._v("Submit")]):t._e(),"processing"===t.have_results?a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",[t._v("Loading...")])]):t._e()])]):t._e(),"finished"===t.have_results?a("div",{staticClass:"container"},[a("hr"),a("br"),a("br"),a("hr"),a("hr")]):t._e()])},r=[],n=(a("4160"),a("ac1f"),a("466d"),a("1276"),a("498a"),a("159b"),a("bc3a")),i=a.n(n);a("ed18").config();var o={props:{},name:"Graphs",data:function(){return{errors:[],csvdata:null,have_results:"none",images:null}},methods:{checkForm:function(t){var e=this;if(t.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var a=this.csvdata.trim().split("\n"),s=a[0],r=s.split(",").length;if(5!==r)return void this.errors.push("CSV data must have 5 columns only !");if("date"!==s.split(",")[0]||"target"!==s.split(",")[1]||"profit"!==s.split(",")[2]||"sales"!==s.split(",")[3]||"transactions"!==s.split(",")[4])return void this.errors.push("Please ensure that the labels of the CSV data header are in the correct format ! ");a.shift();var n={};try{a.forEach((function(t){if(t.split(",").length!==r)throw e.errors.push('CSV data not valid. There might be a missing "," or a value'),n;if(!t.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw e.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),n}))}catch(t){if(t!==n)throw t;return}if(a.length<50)return void this.errors.push("CSV data not enough to predict the future sales. Enter atleast 3 years data to make accurate prediction");this.have_results="processing",i.a.post("/api/posting/",{csv:this.csvdata}).then((function(t){var a=t["data"]["results"];e.have_results="finished",e.images=a,"finished"===e.have_results&&e.$router.push("/DashboardPage"),console.log(window.location.href)})).catch((function(t){this.have_results="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))}}},mounted:function(){console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production")}},l=o,c=(a("656a"),a("2877")),u=Object(c["a"])(l,s,r,!1,null,null,null);e["default"]=u.exports},"656a":function(t,e,a){"use strict";a("acc2")},"7ceb":function(t,e,a){"use strict";a("93d1")},"93d1":function(t,e,a){},acc2:function(t,e,a){},d885:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"div1"}},[a("v-card",{attrs:{height:"100%",elevation:"24"}},[a("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar"),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.username))]),a("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{rounded:""}},[a("v-subheader"),a("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),a("div",{attrs:{id:"div2"}},[a("v-main",[a("div",{attrs:{id:"main"}},[a("InputData")],1)])],1)])},r=[],n=a("ea7f"),i=a.n(n),o=a("bc3a"),l=a.n(o),c=a("668e"),u=a.n(c),d=a("6117"),h=a("d68a"),v=a.n(h);v()(i.a),u()(i.a);var p={props:["username"],data:function(){return{errors:[],selectedItem:"",items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}]}},components:{InputData:d["default"]},methods:{goToPage:function(t){var e=this;l()("backendFinal/prediction.csv").then((function(a){console.log("this is response value"+a),null!==a&&"Dashboard"==t&&e.$router.push({name:"DashboardPage",params:{username:e.username}})})).catch((function(t){console.log(t),alert("Please enter CSV data to view the dashboard !")})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;l.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=p,f=(a("7ceb"),a("2877")),g=a("6544"),b=a.n(g),_=a("7496"),w=a("b0af"),V=a("ce7e"),C=a("132d"),I=a("8860"),k=a("da13"),D=a("8270"),P=a("5d23"),L=a("1baa"),S=a("34c3"),x=a("f6c4"),y=a("f774"),$=a("e0c7"),E=Object(f["a"])(m,s,r,!1,null,null,null);e["default"]=E.exports;b()(E,{VApp:_["a"],VCard:w["a"],VDivider:V["a"],VIcon:C["a"],VList:I["a"],VListItem:k["a"],VListItemAvatar:D["a"],VListItemContent:P["a"],VListItemGroup:L["a"],VListItemIcon:S["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VMain:x["a"],VNavigationDrawer:y["a"],VSubheader:$["a"]})}}]);
//# sourceMappingURL=chunk-17e78ef0.0e234735.js.map