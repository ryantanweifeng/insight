(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7e52086"],{"662e":function(t,a,e){"use strict";e("99f8")},"99f8":function(t,a,e){},fb2c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("div",{attrs:{id:"div1"}},[e("v-card",{attrs:{height:"100%",elevation:"24",id:"sideBar"}},[e("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-avatar"),e("v-list-item-content",[e("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),e("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[e("v-divider"),e("v-list",{attrs:{rounded:""}},[e("v-subheader"),e("v-list-item-group",{attrs:{"active-class":"#BAB2B5",color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,s){return e("v-list-item",{key:s},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),e("v-list-item-content",{staticStyle:{color:"white"}},[e("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(e){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),e("div",{attrs:{id:"div2"}},[e("v-main",[e("div",{attrs:{id:"main"}},[[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[e("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart"},[e("highcharts",{attrs:{options:t.chartOptions2,highcharts:t.graph2}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[e("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[e("highcharts",{attrs:{options:t.chartOptions4,highcharts:t.graph4}})],1)],1)])]],2)])],1)])},i=[],c=e("ea7f"),o=e.n(c),r=e("bc3a"),n=e.n(r),l=e("668e"),d=e.n(l),h=e("d68a"),p=e.n(h);p()(o.a),d()(o.a);var u={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:0,mySeries:[10,20,30,40,50,60],items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}],graph1:o.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},series:[{type:"column",yAxis:1,color:"#42c7aa"},{type:"line"}],title:{text:"Item, Unit And Sales"},subtitle:{text:""},yAxis:[{labels:{format:"RM{value}",style:{color:"#42c7aa"}},title:{text:"Number of unit sold",style:{color:"#42c7aa"}},opposite:!0},{gridLineWidth:0,title:{text:"Number of sales",style:{color:o.a.getOptions().colors[0]}},labels:{format:"RM{value}",style:{color:o.a.getOptions().colors[0]}}}],tooltip:{crosshairs:!0}},graph2:o.a,chartOptions2:{plotOptions:{series:{color:"#318282"}},chart:{type:"line"},data:{csv:""},credits:{enabled:!1},title:{text:"Stock Prediction"},yAxis:{title:{text:"Number of stocks"}},xAxis:{type:"datetime"}},graph3:o.a,chartOptions3:{plotOptions:{},xAxis:{type:"datetime"},data:{dateFormat:"dd/mm/YY",csv:""},title:{text:"Warehouse Stock List Per Year"},chart:{type:"line"},series:[{type:"column"}],credits:{enabled:!1}},graph4:o.a,chartOptions4:{plotOptions:{column:{stacking:"normal"}},data:{csv:""},chart:{type:"column"}}}},methods:{goToPage:function(t){"Input Data"==t&&(this.selectedItem=!0,this.$router.push({name:"InputData",params:{username:this.username}})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;n.a.get("backendFinal/ItemAndUnitAndSales.csv").then((function(a){t.chartOptions1.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/StockPredicition.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/warhouseStockListPerYear.csv").then((function(a){t.chartOptions4.data.csv=a.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=u,v=(e("662e"),e("2877")),g=e("6544"),f=e.n(g),b=e("7496"),y=e("b0af"),I=e("ce7e"),x=e("132d"),w=e("8860"),O=e("da13"),k=e("8270"),C=e("5d23"),V=e("1baa"),L=e("34c3"),S=e("f6c4"),A=e("f774"),_=e("e0c7"),D=Object(v["a"])(m,s,i,!1,null,null,null);a["default"]=D.exports;f()(D,{VApp:b["a"],VCard:y["a"],VDivider:I["a"],VIcon:x["a"],VList:w["a"],VListItem:O["a"],VListItemAvatar:k["a"],VListItemContent:C["a"],VListItemGroup:V["a"],VListItemIcon:L["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VMain:S["a"],VNavigationDrawer:A["a"],VSubheader:_["a"]})}}]);
//# sourceMappingURL=chunk-c7e52086.d485558d.js.map