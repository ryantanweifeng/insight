(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e78ef0","chunk-201a6b7e"],{6117:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["none"===t.have_results||"processing"===t.have_results?s("form",{on:{submit:t.checkForm}},[t.errors.length?s("div",[s("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return s("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),s("div",{staticClass:"form-group"},[s("label",{attrs:{id:"header",for:"exampleFormControlTextarea1"}},[t._v("Please enter data in CSV format as shown below:")]),s("p",[t._v("date,target,profit,sales,transactions")]),s("p",[t._v("2015-01-01,1,114991,90921,483")]),s("p",[t._v("2015-01-01,2,129355,93116,224")]),s("br"),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.csvdata,expression:"csvdata"}],staticClass:"form-control",attrs:{disabled:"processing"===t.have_results,name:"csvdata",id:"csvdata",rows:"23"},domProps:{value:t.csvdata},on:{input:function(e){e.target.composing||(t.csvdata=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},["none"===t.have_results?s("span",[t._v("Submit")]):t._e(),"processing"===t.have_results?s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",[t._v("Loading...")])]):t._e()])]):t._e(),"finished"===t.have_results?s("div",{staticClass:"container"},[s("hr"),s("br"),s("br"),s("hr"),s("hr")]):t._e()])},r=[],n=(s("4160"),s("ac1f"),s("466d"),s("1276"),s("498a"),s("159b"),s("bc3a")),o=s.n(n);s("ed18").config();var i={props:{},name:"Graphs",data:function(){return{errors:[],csvdata:null,have_results:"none",images:null}},methods:{checkForm:function(t){var e=this;if(t.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var s=this.csvdata.trim().split("\n"),a=s[0],r=a.split(",").length;if(5!==r)return void this.errors.push("CSV must have 5 columns");if("date"!==a.split(",")[0]||"target"!==a.split(",")[1]||"profit"!==a.split(",")[2]||"sales"!==a.split(",")[3]||"transactions"!==a.split(",")[4])return void this.errors.push("CSV  header names are not valid ");s.shift();var n={};try{s.forEach((function(t){if(t.split(",").length!==r)throw e.errors.push('CSV data not valid. There might be a missing "," or a value'),n;if(!t.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw e.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),n}))}catch(t){if(t!==n)throw t;return}if(s.length<50)return void this.errors.push("CSV not enough to predict the future sales");this.have_results="processing",o.a.post("/api/posting/",{csv:this.csvdata}).then((function(t){var s=t["data"]["results"];e.have_results="finished",e.images=s,"finished"===e.have_results&&e.$router.push("/DashboardPage"),console.log(window.location.href)})).catch((function(t){this.have_results="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))}}},mounted:function(){console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production")}},l=i,c=(s("656a"),s("2877")),u=Object(c["a"])(l,a,r,!1,null,null,null);e["default"]=u.exports},"656a":function(t,e,s){"use strict";s("acc2")},"7ceb":function(t,e,s){"use strict";s("93d1")},"93d1":function(t,e,s){},acc2:function(t,e,s){},d885:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{attrs:{id:"div1"}},[s("v-card",{attrs:{height:"100%",elevation:"24"}},[s("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar"),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.username))]),s("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[s("v-divider"),s("v-list",{attrs:{rounded:""}},[s("v-subheader"),s("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,a){return s("v-list-item",{key:a},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.title)},on:{click:function(s){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),s("div",{attrs:{id:"div2"}},[s("v-main",[s("div",{attrs:{id:"main"}},[s("InputData"),t.errors.length?s("div",[s("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return s("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e()],1)])],1)])},r=[],n=s("ea7f"),o=s.n(n),i=s("bc3a"),l=s.n(i),c=s("668e"),u=s.n(c),d=s("6117"),v=s("d68a"),h=s.n(v);h()(o.a),u()(o.a);var p={props:["username"],data:function(){return{errors:[],selectedItem:"",items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}]}},components:{InputData:d["default"]},methods:{goToPage:function(t){var e=this;l()("backendFinal/prediction.csv").then((function(s){console.log("this is response value"+s),null!==s&&"Dashboard"==t&&e.$router.push({name:"DashboardPage",params:{username:e.username}}),null===s&&"Dashboard"==t&&(alert("I am an alert box!"),e.errors.push("CSV Data required."),console.log("The error is found!"))})).catch((function(t){console.log(t),alert("I am an alert box!"),e.errors.push("CSV Data required.")})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;l.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=p,f=(s("7ceb"),s("2877")),g=s("6544"),b=s.n(g),_=s("7496"),V=s("b0af"),w=s("ce7e"),C=s("132d"),I=s("8860"),D=s("da13"),k=s("8270"),x=s("5d23"),S=s("1baa"),L=s("34c3"),P=s("f6c4"),y=s("f774"),T=s("e0c7"),$=Object(f["a"])(m,a,r,!1,null,null,null);e["default"]=$.exports;b()($,{VApp:_["a"],VCard:V["a"],VDivider:w["a"],VIcon:C["a"],VList:I["a"],VListItem:D["a"],VListItemAvatar:k["a"],VListItemContent:x["a"],VListItemGroup:S["a"],VListItemIcon:L["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:P["a"],VNavigationDrawer:y["a"],VSubheader:T["a"]})}}]);
//# sourceMappingURL=chunk-17e78ef0.37a136c2.js.map