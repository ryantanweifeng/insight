(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e19976"],{"11b8":function(t,a,s){t.exports=s.p+"img/final_predictions.a27cc5a7.png"},3843:function(t,a,s){"use strict";s("57c7")},"57c7":function(t,a,s){},"9f08":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-app",[i("div",{attrs:{id:"div1"}},[i("v-card",{attrs:{height:"100%",elevation:"24"}},[i("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-avatar"),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.username))]),i("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[i("v-divider"),i("v-list",{attrs:{rounded:""}},[i("v-subheader"),i("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,s){return i("v-list-item",{key:s},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(s){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),i("div",{attrs:{id:"div2"}},[i("v-main",[i("div",{attrs:{id:"main"}},[[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[i("v-card",{staticClass:"card card-stats"},[i("div",{staticClass:"card-header card-header-warning card-header-icon"},[i("div",{staticClass:"card-icon"},[i("v-icon",[t._v(" mdi-chart-line ")])],1),i("p",{staticClass:"card-category"},[t._v("Number of sales")])]),i("div",{staticClass:"card-body"},[i("h3",{staticClass:"card-title"},[t._v(" 115 ")])])])],1),i("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[i("v-card",{staticClass:"card card-stats"},[i("div",{staticClass:"card-header card-header-success card-header-icon"},[i("div",{staticClass:"card-icon"},[i("v-icon",[t._v("mdi-chart-box")])],1),i("p",{staticClass:"card-category"},[t._v("Revenue")])]),i("div",{staticClass:"card-body"},[i("h3",{staticClass:"card-title"},[t._v("$ 34,245")])])])],1),i("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[i("v-card",{staticClass:"card card-stats"},[i("div",{staticClass:"card-header card-header-info card-header-icon"},[i("div",{staticClass:"card-icon"},[i("v-icon",[t._v(" mdi-currency-usd ")])],1),i("p",{staticClass:"card-category"},[t._v("Profit")])]),i("div",{staticClass:"card-body"},[i("h3",{staticClass:"card-title"},[t._v("$ 50,709")])])])],1),i("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[i("v-card",{staticClass:"card card-stats"},[i("div",{staticClass:"card-header card-header-rose card-header-icon"},[i("div",{staticClass:"card-icon"},[i("v-icon",[t._v("mdi-finance")])],1),i("p",{staticClass:"card-category"},[t._v("Cost")])]),i("div",{staticClass:"card-body"},[i("h3",{staticClass:"card-title"},[t._v("$ 110,555")])])])],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[i("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),i("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[i("v-card",{staticClass:"card card-chart"},[i("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[i("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[i("v-img",{attrs:{src:s("11b8"),height:"200"}})],1)],1)])]],2)]),i("pre",{ref:"data1",staticStyle:{display:"none"},attrs:{id:"csv1"}},[t._v("        Categories,Apples,Pears,Oranges,Bananas\nJohn,8,4,6,5\n      ")])],1)])},e=[],c=s("ea7f"),r=s.n(c),d=s("bc3a"),n=s.n(d),o=s("668e"),l=s.n(o),v=s("d68a"),h=s.n(v);h()(r.a),l()(r.a);var p={props:["username"],data:function(){return{errors:[],csvdata:null,have_results:"none",images:null,selectedItem:"",mySeries:[10,20,30,40,50,60],items:[{title:"Home",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"}],graph1:r.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},title:{text:"Yearly Sales Trend"},subtitle:{text:""},yAxis:{title:{text:"Sales"}}},graph2:r.a,chartOptions2:{plotOptions:{series:{marker:{enabled:!1}}},series:[{lineWidth:1},{type:"areaspline",color:"#c4392d",negativeColor:"#5679c4",fillOpacity:.5}],data:{csv:"",complete:function(t){t.series.push({name:"Trend",data:[{x:1880,y:-.4},{x:2014,y:.52}]})},enablePolling:!0},chart:{type:"spline",plotBorderColor:"black"},title:{text:"Global temperature change"},subtitle:{text:"Data module: options structure is modified before final rendering"}},graph3:r.a,chartOptions3:{chart:{type:"column"},data:{csv:""},credits:{enabled:!1},title:{text:"Fruit Consumption"},yAxis:{title:{text:"Units"}}}}},methods:{goToPage:function(t){"Input Data"==t&&this.$router.push({name:"InputData",params:{username:this.username}})},updateData:function(){var t=this;this.chartOptions2.data.csvURL="http://localhost:8080/insight/#/data.csv",n.a.get("data.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),n.a.get("backendFinal/salesFile.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is salesFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),this.chartOptions3.data.csv=this.$refs.data1.innerHTML}},mounted:function(){this.updateData(),console.log(window.location.origin+"/insight/#/DashboardPage")}},u=p,m=(s("3843"),s("2877")),g=s("6544"),C=s.n(g),f=s("7496"),b=s("b0af"),y=s("ce7e"),_=s("132d"),x=s("adda"),I=s("8860"),w=s("da13"),V=s("8270"),O=s("5d23"),L=s("1baa"),k=s("34c3"),D=s("f6c4"),P=s("f774"),S=s("e0c7"),T=Object(m["a"])(u,i,e,!1,null,null,null);a["default"]=T.exports;C()(T,{VApp:f["a"],VCard:b["a"],VDivider:y["a"],VIcon:_["a"],VImg:x["a"],VList:I["a"],VListItem:w["a"],VListItemAvatar:V["a"],VListItemContent:O["a"],VListItemGroup:L["a"],VListItemIcon:k["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VMain:D["a"],VNavigationDrawer:P["a"],VSubheader:S["a"]})}}]);
//# sourceMappingURL=chunk-53e19976.8884dc73.js.map