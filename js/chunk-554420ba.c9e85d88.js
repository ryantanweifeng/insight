(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554420ba"],{"7ceb":function(t,e,a){"use strict";a("93d1")},"93d1":function(t,e,a){},d885:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"div1"}},[a("v-card",{attrs:{height:"100%",elevation:"24"}},[a("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tenforums.com%2Ftutorials%2F90191-apply-default-account-picture-all-users-windows-10-a.html&psig=AOvVaw3UZwlVucvgd4BENjvnJ8Al&ust=1616579707791000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjRjeySxu8CFQAAAAAdAAAAABAD"}})]),a("v-list-item-content",[a("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),a("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{rounded:""}},[a("v-subheader"),a("v-list-item-group",{attrs:{color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",{staticStyle:{color:"white"}},[a("v-list-item-title",{attrs:{active:""},domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),a("div",{attrs:{id:"div2"}},[a("v-main",[a("div",{attrs:{id:"main"}},[a("InputData")],1)])],1)])},o=[],n=a("ea7f"),s=a.n(n),r=a("bc3a"),l=a.n(r),c=a("668e"),u=a.n(c),d=a("6117"),m=a("d68a"),v=a.n(m);v()(s.a),u()(s.a);var p={props:["username"],data:function(){return{csvInput:void 0,color:"",data:null,errors:[],selectedItem:0,items:[{title:"Input Data",icon:"mdi-forum"},{title:"Sales Dashboard",icon:"mdi-view-dashboard"},{title:"Warehouse Dashboard",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}]}},components:{InputData:d["default"]},methods:{loadTextFromFile:function(){var t=this,e=new FileReader;e.readAsText(this.chosenFile),e.onload=function(e){return t.text=e.target.result},console.log(event)},submitCsv:function(){var t=this.csvInput.target.files[0],e=new FileReader;e.onload=function(t){return console.log(t.target.result)},e.readAsText(t)},goToPage:function(t){var e=this;l()("backendFinal/prediction.csv").then((function(a){console.log("this is response value"+a),null!==a&&"Sales Dashboard"==t&&e.$router.push({name:"DashboardPage",params:{username:e.username}}),"Warehouse Dashboard"==t&&e.$router.push({name:"WarehouseM",params:{username:e.username}})})).catch((function(a){console.log(a),a=e.data,"Sales Dashboard"==t&&(alert("Please enter CSV data to view the dashboard !"),e.selectedItem=!1)})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;l.a.get("data.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},h=p,f=(a("7ceb"),a("2877")),g=a("6544"),w=a.n(g),b=a("7496"),I=a("b0af"),A=a("ce7e"),V=a("132d"),D=a("8860"),x=a("da13"),F=a("8270"),S=a("5d23"),L=a("1baa"),k=a("34c3"),y=a("f6c4"),C=a("f774"),_=a("e0c7"),T=Object(f["a"])(h,i,o,!1,null,null,null);e["default"]=T.exports;w()(T,{VApp:b["a"],VCard:I["a"],VDivider:A["a"],VIcon:V["a"],VList:D["a"],VListItem:x["a"],VListItemAvatar:F["a"],VListItemContent:S["a"],VListItemGroup:L["a"],VListItemIcon:k["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:y["a"],VNavigationDrawer:C["a"],VSubheader:_["a"]})}}]);
//# sourceMappingURL=chunk-554420ba.c9e85d88.js.map