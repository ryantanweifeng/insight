(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a86f62"],{3843:function(t,a,e){"use strict";e("57c7")},"57c7":function(t,a,e){},"9f08":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("div",{attrs:{id:"div1"}},[e("v-card",{attrs:{height:"100%",elevation:"24"}},[e("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-avatar"),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.username))]),e("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[e("v-divider"),e("v-list",{attrs:{rounded:""}},[e("v-subheader"),e("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,s){return e("v-list-item",{key:s},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(e){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),e("div",{attrs:{id:"div2"}},[e("v-main",[e("div",{attrs:{id:"main"}},[[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[e("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),e("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart"},[e("highcharts",{attrs:{options:t.chartOptions4,highcharts:t.graph4}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[e("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[e("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[e("highcharts",{attrs:{options:t.chartOptions5,highcharts:t.graph5}})],1)],1)])]],2)])],1)])},i=[],r=e("ea7f"),n=e.n(r),o=e("bc3a"),c=e.n(o),l=e("668e"),d=e.n(l),h=e("d68a"),p=e.n(h);p()(n.a),d()(n.a);var u={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:"",mySeries:[10,20,30,40,50,60],items:[{title:"Home",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"},{title:"Logout",icon:"mdi-forum"}],graph1:n.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},title:{text:"Yearly Sales Trend"},subtitle:{text:""},yAxis:{title:{text:"Number of Sales"}}},graph2:n.a,chartOptions2:{plotOptions:{series:{marker:{enabled:!1}}},series:[{lineWidth:1},{type:"areaspline",color:"#c4392d",negativeColor:"#5679c4",fillOpacity:.5}],data:{csv:"",complete:function(t){t.series.push({name:"Trend",data:[{x:1880,y:-.4},{x:2014,y:.52}]})},enablePolling:!0},chart:{type:"spline",plotBorderColor:"black"},title:{text:"Global temperature change"},subtitle:{text:"Data module: options structure is modified before final rendering"}},graph3:n.a,chartOptions3:{plotOptions:{series:{color:"#318282"}},chart:{type:"line"},data:{csv:""},credits:{enabled:!1},title:{text:"Store performance"},yAxis:{title:{text:"Number of sales"}},xAxis:{type:"datetime"},series:[{type:"column",color:"#42c7aa"},{type:"line"}],tooltip:{crosshairs:!0,shared:!0}},graph4:n.a,chartOptions4:{plotOptions:{series:{color:"#ffa500"}},chart:{type:"line"},credits:{enabled:!1},data:{csv:""},yAxis:{title:{text:"Number of sales"}},title:{text:"Sales prediction"}},graph5:n.a,chartOptions5:{plotOptions:{series:{color:"#273e60"}},chart:{type:"line"},data:{csv:""},yAxis:{title:{text:"Number of transactions"}},title:{text:"Transactions per month"},credits:{enabled:!1}}}},methods:{goToPage:function(t){"Input Data"==t&&this.$router.push({name:"InputData",params:{username:this.username}}),"Logout"==t&&this.$router.push({name:"Home"})},updateData:function(){var t=this;c.a.get("backendFinal/prediction.csv").then((function(a){t.chartOptions4.data.csv=a.data,console.log(a)})).catch((function(t){console.log(t)})),c.a.get("backendFinal/sales.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is sales.csv ==== "+a.data)})).catch((function(t){console.log(t)})),c.a.get("backendFinal/storeFile.csv").then((function(a){t.chartOptions3.data.csv=a.data,console.log("this is storeFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),c.a.get("backendFinal/transactions.csv").then((function(a){t.chartOptions5.data.csv=a.data,console.log("this is transactions.csv ==== "+a.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData()}},v=u,m=(e("3843"),e("2877")),g=e("6544"),f=e.n(g),b=e("7496"),x=e("b0af"),y=e("ce7e"),O=e("132d"),I=e("8860"),C=e("da13"),V=e("8270"),k=e("5d23"),w=e("1baa"),L=e("34c3"),_=e("f6c4"),D=e("f774"),S=e("e0c7"),A=Object(m["a"])(v,s,i,!1,null,null,null);a["default"]=A.exports;f()(A,{VApp:b["a"],VCard:x["a"],VDivider:y["a"],VIcon:O["a"],VList:I["a"],VListItem:C["a"],VListItemAvatar:V["a"],VListItemContent:k["a"],VListItemGroup:w["a"],VListItemIcon:L["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:_["a"],VNavigationDrawer:D["a"],VSubheader:S["a"]})}}]);
//# sourceMappingURL=chunk-61a86f62.e0ebc655.js.map