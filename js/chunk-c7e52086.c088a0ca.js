(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7e52086"],{"662e":function(t,e,a){"use strict";a("99f8")},"99f8":function(t,e,a){},fb2c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"div1"}},[a("v-card",{attrs:{height:"100%",elevation:"24",id:"sideBar"}},[a("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"}})]),a("v-list-item-content",[a("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),a("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{rounded:""}},[a("v-subheader"),a("v-list-item-group",{attrs:{"active-class":"#BAB2B5",color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",{staticStyle:{color:"white"}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)},on:{click:function(a){return t.goToPage(e.title)}}})],1)],1)})),1)],1)],1)],1)],1),a("div",{attrs:{id:"div2"}},[a("v-main",[a("div",{attrs:{id:"main"}},[[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[a("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[a("v-card",{staticClass:"card card-chart"},[a("highcharts",{attrs:{options:t.chartOptions2,highcharts:t.graph2}})],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[a("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[a("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)])]],2)])],1)])},i=[],o=(a("a15b"),a("a434"),a("ac1f"),a("1276"),a("ea7f")),c=a.n(o),r=a("bc3a"),n=a.n(r),l=a("668e"),d=a.n(l),h=a("d68a"),u=a.n(h);u()(c.a),d()(c.a);var p={props:["username","results"],data:function(){return{errors:[],csvdata:null,have_results:"none",selectedItem:0,mySeries:[10,20,30,40,50,60],items:[{title:"Sales Dashboard",icon:"mdi-view-dashboard"},{title:"Logout",icon:"mdi-exit-to-app"}],graph1:c.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},series:[{type:"column",yAxis:1,color:"#42c7aa"},{type:"line"}],title:{text:"Item, Unit And Sales"},subtitle:{text:""},yAxis:[{labels:{format:"RM{value}",style:{color:"#42c7aa"}},title:{text:"Number of unit sold",style:{color:"#42c7aa"}},opposite:!0},{gridLineWidth:0,title:{text:"Number of sales",style:{color:c.a.getOptions().colors[0]}},labels:{format:"RM{value}",style:{color:c.a.getOptions().colors[0]}}}],tooltip:{crosshairs:!0}},graph2:c.a,chartOptions2:{plotOptions:{series:{color:"#318282"}},chart:{type:"line"},data:{csv:""},credits:{enabled:!1},title:{text:"Stock Prediction"},yAxis:{title:{text:"Number of stocks"}},xAxis:{type:"datetime"}},graph3:c.a,chartOptions3:{plotOptions:{column:{stacking:"normal"}},data:{csv:""},title:{text:"Warehouse Stock List Per Year"},chart:{type:"column"},yAxis:{title:{text:"Number of item units"}},credits:{enabled:!1}}}},methods:{goToPage:function(t){"Sales Dashboard"==t&&(this.selectedItem=!0,this.$router.push({name:"DashboardPage",params:{username:this.username}})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;n.a.get("backendFinal/ItemAndUnitAndSales.csv").then((function(e){t.chartOptions1.data.csv=e.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/StockPredicition.csv").then((function(e){t.chartOptions2.data.csv=e.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/warhouseStockListPerYear.csv").then((function(e){var a=e.data.split("\n");a.splice(0,1);var s=a.join("\n");t.chartOptions3.data.csv=s,console.log(s)})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},m=p,v=(a("662e"),a("2877")),g=a("6544"),f=a.n(g),b=a("7496"),y=a("b0af"),w=a("ce7e"),x=a("132d"),k=a("8860"),I=a("da13"),S=a("8270"),O=a("5d23"),V=a("1baa"),L=a("34c3"),C=a("f6c4"),A=a("f774"),_=a("e0c7"),P=Object(v["a"])(m,s,i,!1,null,null,null);e["default"]=P.exports;f()(P,{VApp:b["a"],VCard:y["a"],VDivider:w["a"],VIcon:x["a"],VList:k["a"],VListItem:I["a"],VListItemAvatar:S["a"],VListItemContent:O["a"],VListItemGroup:V["a"],VListItemIcon:L["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VMain:C["a"],VNavigationDrawer:A["a"],VSubheader:_["a"]})}}]);
//# sourceMappingURL=chunk-c7e52086.c088a0ca.js.map