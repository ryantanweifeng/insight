(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a86f62"],{3843:function(t,a,s){"use strict";s("57c7")},"57c7":function(t,a,s){},"9f08":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("div",{attrs:{id:"div1"}},[s("v-card",{attrs:{height:"100%",elevation:"24",id:"sideBar"}},[s("v-navigation-drawer",{staticStyle:{"background-color":"#022140"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar"),s("v-list-item-content",[s("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.username))]),s("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Logged In")])],1)],1)]},proxy:!0}])},[s("v-divider"),s("v-list",{attrs:{rounded:""}},[s("v-subheader"),s("v-list-item-group",{attrs:{"active-class":"#BAB2B5",color:"#BAB2B5",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,i){return s("v-list-item",{key:i},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),s("v-list-item-content",{staticStyle:{color:"white"}},[s("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(s){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),s("div",{attrs:{id:"div2"}},[s("v-main",[s("div",{attrs:{id:"main"}},[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[s("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart"},[s("highcharts",{attrs:{options:t.chartOptions2,highcharts:t.graph2}})],1)],1)]),s("div",[s("h2",[t._v("Decomposition Graph for Sales")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions4,highcharts:t.graph4}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions9,highcharts:t.graph9}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions10,highcharts:t.graph10}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions5,highcharts:t.graph5}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions6,highcharts:t.graph6}})],1)],1),s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions7,highcharts:t.graph7}})],1)],1)]),s("div",[s("h2",[t._v("Decomposition Graph for Profits")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions8,highcharts:t.graph8}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions11,highcharts:t.graph11}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions12,highcharts:t.graph12}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions13,highcharts:t.graph13}})],1)],1)])]],2)])],1)])},c=[],e=(s("4160"),s("a434"),s("ac1f"),s("1276"),s("159b"),s("ea7f")),r=s.n(e),o=s("bc3a"),n=s.n(o),l=s("668e"),d=s.n(l),h=s("d68a"),p=s.n(h);p()(r.a),d()(r.a);var v={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:0,mySeries:[10,20,30,40,50,60],items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}],graph1:r.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},title:{text:"Yearly Sales Trend"},subtitle:{text:""},yAxis:{title:{text:"Number of Sales"}}},graph3:r.a,chartOptions3:{plotOptions:{series:{color:"#318282"}},chart:{type:"line"},data:{csv:""},credits:{enabled:!1},title:{text:"Store performance"},yAxis:{title:{text:"Number of sales"}},xAxis:{type:"datetime"},series:[{type:"column",color:"#42c7aa"},{type:"line"}],tooltip:{crosshairs:!0,shared:!0}},graph2:r.a,chartOptions2:{plotOptions:{series:{color:"#ffa500"}},chart:{type:"line"},credits:{enabled:!1},data:{csv:""},yAxis:{title:{text:"Number of sales"}},title:{text:"Sales prediction"}},graph5:r.a,chartOptions5:{plotOptions:{series:{color:"#273e60"}},chart:{type:"line"},data:{csv:""},yAxis:{title:{text:"Number of transactions"}},title:{text:"Transactions per month"},credits:{enabled:!1}},graph6:r.a,chartOptions6:{plotOptions:{series:{color:"#ed8f79"}},chart:{type:"line"},data:{csv:""},title:{text:"Profits per month"},credits:{enabled:!1}},graph7:r.a,chartOptions7:{plotOptions:{series:{color:"#b0264b"}},chart:{type:"line"},data:{csv:""},title:{text:"Prediction of profits"},credits:{enabled:!1}},graph4:r.a,chartOptions4:{plotOptions:{series:{color:"#4D6D9A"}},title:{text:"Sales - Trend"},chart:{type:"line"},data:{csv:""},credits:{enabled:!1}},graph9:r.a,chartOptions9:{plotOptions:{series:{color:"#86B3D1"}},title:{text:"Sales - Seasonal"},chart:{type:"line"},data:{csv:""},credits:{enabled:!1}},graph10:r.a,chartOptions10:{plotOptions:{series:{color:"#86B3D1"}},title:{text:"Sales - Residual"},chart:{type:"line"},data:{csv:""},credits:{enabled:!1}},graph8:r.a,chartOptions8:{plotOptions:{series:{color:"#644E5B"}},title:{text:"Profit-Trend"},chart:{type:"line"},data:{csv:""},credits:{enabled:!1}},graph11:r.a,chartOptions11:{plotOptions:{series:{color:"#9E5A63"}},title:{text:"Profit- Seasonal"},chart:{type:"line"},data:{csv:""},credits:{enabled:!1}},graph12:r.a,chartOptions12:{plotOptions:{series:{color:"#C96567"}},title:{text:"Profit- Residual"},chart:{type:"line"},data:{csv:""},credits:{enabled:!1}},graph13:r.a,chartOptions13:{plotOptions:{column:{stacking:"normal"}},data:{csv:""},title:{text:"Profit- Residual"},chart:{type:"column"},credits:{enabled:!1}}}},methods:{goToPage:function(t){"Input Data"==t&&(this.selectedItem=!0,this.$router.push({name:"InputData",params:{username:this.username}})),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;n.a.get("backendFinal/prediction.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/sales.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is sales.csv ==== "+a.data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/storeFile.csv").then((function(a){t.chartOptions3.data.csv=a.data,console.log("this is storeFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/transactions.csv").then((function(a){t.chartOptions5.data.csv=a.data,console.log("this is transactions.csv ==== "+a.data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profit.csv").then((function(a){t.chartOptions6.data.csv=a.data;var s=a.data.split("/n");s.splice(0,1),s.forEach((function(t){console.log("graph 8 data: "+t)})),console.log("This is graph 8 data: "+t.chartOptions8.series[0].data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profitPrediction.csv").then((function(a){t.chartOptions7.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/salesTrendDec.csv").then((function(a){t.chartOptions4.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/salesSeasonalDec.csv").then((function(a){t.chartOptions9.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/salesResDec.csv").then((function(a){t.chartOptions10.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profitTrendDec.csv").then((function(a){t.chartOptions8.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profitSeasonalDec.csv").then((function(a){t.chartOptions11.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profitResDec.csv").then((function(a){t.chartOptions12.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/ItemAndUnitAndSales.csv").then((function(a){t.chartOptions13.data.csv=a.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},g=v,u=(s("3843"),s("2877")),m=s("6544"),f=s.n(m),O=s("7496"),b=s("b0af"),C=s("ce7e"),x=s("132d"),y=s("8860"),w=s("da13"),k=s("8270"),S=s("5d23"),D=s("1baa"),I=s("34c3"),F=s("f6c4"),V=s("f774"),A=s("e0c7"),P=Object(u["a"])(g,i,c,!1,null,null,null);a["default"]=P.exports;f()(P,{VApp:O["a"],VCard:b["a"],VDivider:C["a"],VIcon:x["a"],VList:y["a"],VListItem:w["a"],VListItemAvatar:k["a"],VListItemContent:S["a"],VListItemGroup:D["a"],VListItemIcon:I["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:F["a"],VNavigationDrawer:V["a"],VSubheader:A["a"]})}}]);
//# sourceMappingURL=chunk-61a86f62.2a9fd870.js.map