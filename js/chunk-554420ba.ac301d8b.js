(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554420ba"],{"7ceb":function(t,e,a){"use strict";a("93d1")},"93d1":function(t,e,a){},d885:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"div1"}},[a("v-card",{attrs:{height:"100%",elevation:"24"}},[a("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar"),a("v-list-item-content",[a("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),a("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{rounded:""}},[a("v-subheader"),a("v-list-item-group",{attrs:{color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",{staticStyle:{color:"white"}},[a("v-list-item-title",{attrs:{active:""},domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),a("div",{attrs:{id:"div2"}},[a("v-main",[a("div",{attrs:{id:"main"}},[a("InputData")],1)])],1)])},i=[],o=a("ea7f"),s=a.n(o),r=a("bc3a"),c=a.n(r),l=a("668e"),d=a.n(l),u=a("6117"),v=a("d68a"),m=a.n(v);m()(s.a),d()(s.a);var h={props:["username"],data:function(){return{csvInput:void 0,color:"",data:null,errors:[],selectedItem:1,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}]}},components:{InputData:u["default"]},methods:{showData:function(){console.log(this.text)},converter:function(t,e){this.loadTextFromFile(),console.log(t,e)},loadTextFromFile:function(){var t=this,e=new FileReader;e.readAsText(this.chosenFile),e.onload=function(e){return t.text=e.target.result},console.log(event)},submitCsv:function(){var t=this.csvInput.target.files[0],e=new FileReader;e.onload=function(t){return console.log(t.target.result)},e.readAsText(t)},goToPage:function(t){var e=this;c()("backendFinal/prediction.csv").then((function(a){console.log("this is response value"+a),null!==a&&"Dashboard"==t&&e.$router.push({name:"DashboardPage",params:{username:e.username}})})).catch((function(a){console.log(a),a=e.data,"Dashboard"==t&&(alert("Please enter CSV data to view the dashboard !"),e.selectedItem=!1)})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;c.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},p=h,f=(a("7ceb"),a("2877")),g=a("6544"),b=a.n(g),I=a("7496"),w=a("b0af"),V=a("ce7e"),x=a("132d"),D=a("8860"),L=a("da13"),k=a("8270"),_=a("5d23"),F=a("1baa"),S=a("34c3"),y=a("f6c4"),T=a("f774"),C=a("e0c7"),P=Object(f["a"])(p,n,i,!1,null,null,null);e["default"]=P.exports;b()(P,{VApp:I["a"],VCard:w["a"],VDivider:V["a"],VIcon:x["a"],VList:D["a"],VListItem:L["a"],VListItemAvatar:k["a"],VListItemContent:_["a"],VListItemGroup:F["a"],VListItemIcon:S["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VMain:y["a"],VNavigationDrawer:T["a"],VSubheader:C["a"]})}}]);
//# sourceMappingURL=chunk-554420ba.ac301d8b.js.map