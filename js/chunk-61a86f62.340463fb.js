(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a86f62"],{3843:function(t,a,s){"use strict";s("57c7")},"57c7":function(t,a,s){},"9f08":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("div",{attrs:{id:"div1"}},[s("v-card",{attrs:{height:"100%",elevation:"24"}},[s("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar"),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.username))]),s("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[s("v-divider"),s("v-list",{attrs:{rounded:""}},[s("v-subheader"),s("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,e){return s("v-list-item",{key:e},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(s){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),s("div",{attrs:{id:"div2"}},[s("v-main",[s("div",{attrs:{id:"main"}},[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[s("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart"},[s("highcharts",{attrs:{options:t.chartOptions2,highcharts:t.graph2}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions5,highcharts:t.graph5}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions6,highcharts:t.graph6}})],1)],1),s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions7,highcharts:t.graph7}})],1)],1)])]],2)])],1)])},i=[],c=s("ea7f"),r=s.n(c),o=s("bc3a"),n=s.n(o),l=s("668e"),d=s.n(l),h=s("d68a"),p=s.n(h);p()(r.a),d()(r.a);var v={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:"",mySeries:[10,20,30,40,50,60],items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-exit-to-app"}],graph1:r.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},title:{text:"Yearly Sales Trend"},subtitle:{text:""},yAxis:{title:{text:"Number of Sales"}}},graph3:r.a,chartOptions3:{plotOptions:{series:{color:"#318282"}},chart:{type:"line"},data:{csv:""},credits:{enabled:!1},title:{text:"Store performance"},yAxis:{title:{text:"Number of sales"}},xAxis:{type:"datetime"},series:[{type:"column",color:"#42c7aa"},{type:"line"}],tooltip:{crosshairs:!0,shared:!0}},graph2:r.a,chartOptions2:{plotOptions:{series:{color:"#ffa500"}},chart:{type:"line"},credits:{enabled:!1},data:{csv:""},yAxis:{title:{text:"Number of sales"}},title:{text:"Sales prediction"}},graph5:r.a,chartOptions5:{plotOptions:{series:{color:"#273e60"}},chart:{type:"line"},data:{csv:""},yAxis:{title:{text:"Number of transactions"}},title:{text:"Transactions per month"},credits:{enabled:!1}},graph6:r.a,chartOptions6:{plotOptions:{series:{color:"#ed8f79"}},chart:{type:"line"},data:{csv:""},title:{text:"Profits per month"},credits:{enabled:!1}},graph7:r.a,chartOptions7:{plotOptions:{series:{color:"#b0264b"}},chart:{type:"line"},data:{csv:""},title:{text:"Prediction of profits"},credits:{enabled:!1}}}},methods:{goToPage:function(t){"Input Data"==t&&this.$router.push({name:"InputData",params:{username:this.username}}),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;n.a.get("backendFinal/prediction.csv").then((function(a){t.chartOptions2.data.csv=a.data,console.log(a)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/sales.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is sales.csv ==== "+a.data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/storeFile.csv").then((function(a){t.chartOptions3.data.csv=a.data,console.log("this is storeFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/transactions.csv").then((function(a){t.chartOptions5.data.csv=a.data,console.log("this is transactions.csv ==== "+a.data)})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profit.csv").then((function(a){t.chartOptions6.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/profitPrediction.csv").then((function(a){t.chartOptions7.data.csv=a.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},u=v,m=(s("3843"),s("2877")),g=s("6544"),f=s.n(g),b=s("7496"),O=s("b0af"),x=s("ce7e"),C=s("132d"),y=s("8860"),I=s("da13"),V=s("8270"),w=s("5d23"),k=s("1baa"),L=s("34c3"),_=s("f6c4"),D=s("f774"),F=s("e0c7"),S=Object(m["a"])(u,e,i,!1,null,null,null);a["default"]=S.exports;f()(S,{VApp:b["a"],VCard:O["a"],VDivider:x["a"],VIcon:C["a"],VList:y["a"],VListItem:I["a"],VListItemAvatar:V["a"],VListItemContent:w["a"],VListItemGroup:k["a"],VListItemIcon:L["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMain:_["a"],VNavigationDrawer:D["a"],VSubheader:F["a"]})}}]);
//# sourceMappingURL=chunk-61a86f62.340463fb.js.map