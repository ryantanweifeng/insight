(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7e52086"],{"662e":function(t,a,e){"use strict";e("99f8")},"99f8":function(t,a,e){},fb2c:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("div",{attrs:{id:"div1"}},[e("v-card",{attrs:{height:"100%",elevation:"24",id:"sideBar"}},[e("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-avatar"),e("v-list-item-content",[e("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),e("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[e("v-divider"),e("v-list",{attrs:{rounded:""}},[e("v-subheader"),e("v-list-item-group",{attrs:{"active-class":"#BAB2B5",color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,i){return e("v-list-item",{key:i},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),e("v-list-item-content",{staticStyle:{color:"white"}},[e("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(e){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),e("div",{attrs:{id:"div2"}},[e("v-main",[e("div",{attrs:{id:"main"}},[[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[e("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),e("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart"},[e("highcharts",{attrs:{options:t.chartOptions2,highcharts:t.graph2}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[e("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)])]],2)])],1)])},s=[],c=e("ea7f"),o=e.n(c),r=e("bc3a"),n=e.n(r),l=e("668e"),d=e.n(l),h=e("d68a"),u=e.n(h);u()(o.a),d()(o.a);var p={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:0,mySeries:[10,20,30,40,50,60],items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}],graph1:o.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},series:[{type:"column",color:"#42c7aa"},{type:"line"}],title:{text:"Item, Unit And Sales"},subtitle:{text:""},yAxis:{title:{text:"Number of Sales"}},tooltip:{crosshairs:!0}},graph2:o.a,chartOptions2:{plotOptions:{series:{color:"#318282"}},chart:{type:"line"},data:{csv:""},credits:{enabled:!1},title:{text:"Stock Prediction"},yAxis:{title:{text:"Number of stocks"}},xAxis:{type:"datetime"}},graph3:o.a,chartOptions3:{plotOptions:{},xAxis:{type:"datetime"},data:{dateFormat:"",csv:""},title:{text:"Warehouse Stock List Per Year"},chart:{type:"column"},credits:{enabled:!1}}}},methods:{goToPage:function(t){"Input Data"==t&&(this.selectedItem=!0,this.$router.push({name:"InputData",params:{username:this.username}})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;n.a.get("backendFinal/storeFile.csv").then((function(a){t.chartOptions1.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/StockPredicition.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/warhouseStockListPerYear.csv").then((function(a){t.chartOptions3.data.csv=a.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=p,v=(e("662e"),e("2877")),g=e("6544"),f=e.n(g),b=e("7496"),I=e("b0af"),x=e("ce7e"),y=e("132d"),k=e("8860"),w=e("da13"),V=e("8270"),S=e("5d23"),L=e("1baa"),O=e("34c3"),C=e("f6c4"),_=e("f774"),A=e("e0c7"),D=Object(v["a"])(m,i,s,!1,null,null,null);a["default"]=D.exports;f()(D,{VApp:b["a"],VCard:I["a"],VDivider:x["a"],VIcon:y["a"],VList:k["a"],VListItem:w["a"],VListItemAvatar:V["a"],VListItemContent:S["a"],VListItemGroup:L["a"],VListItemIcon:O["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:C["a"],VNavigationDrawer:_["a"],VSubheader:A["a"]})}}]);
//# sourceMappingURL=chunk-c7e52086.43e91635.js.map