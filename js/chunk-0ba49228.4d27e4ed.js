(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba49228"],{3843:function(t,a,s){"use strict";s("57c7")},"57c7":function(t,a,s){},"9f08":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("div",{attrs:{id:"div1"}},[s("v-card",{attrs:{height:"100%",elevation:"24"}},[s("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar",[s("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.username))]),s("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[s("v-divider"),s("v-list",{attrs:{rounded:""}},[s("v-subheader"),s("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,i){return s("v-list-item",{key:i},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(s){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),s("div",{attrs:{id:"div2"}},[s("v-main",[s("div",{attrs:{id:"main"}},[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-warning card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v(" mdi-chart-line ")])],1),s("p",{staticClass:"card-category"},[t._v("Number of sales")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v(" 115 ")])])])],1),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-success card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v("mdi-chart-box")])],1),s("p",{staticClass:"card-category"},[t._v("Revenue")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v("$ 34,245")])])])],1),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-info card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v(" mdi-currency-usd ")])],1),s("p",{staticClass:"card-category"},[t._v("Profit")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v("$ 50,709")])])])],1),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-rose card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v("mdi-finance")])],1),s("p",{staticClass:"card-category"},[t._v("Cost")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v("$ 110,555")])])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[s("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),s("div",{staticClass:"col-md-4",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart"},[s("highcharts",{attrs:{options:t.chartOptions2,highcharts:t.graph2}})],1)],1),s("div",{staticClass:"col-md-4",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart"},[s("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)])]],2)]),s("pre",{ref:"data1",staticStyle:{display:"none"},attrs:{id:"csv1"}},[t._v("        Categories,Apples,Pears,Oranges,Bananas\nJohn,8,4,6,5\n      ")])],1)])},e=[],c=s("ea7f"),r=s.n(c),o=s("bc3a"),d=s.n(o),n=s("668e"),l=s.n(n),v=s("d68a"),h=s.n(v);h()(r.a),l()(r.a);var p={data:function(){return{username:"",selectedItem:"",mySeries:[10,20,30,40,50,60],items:[{title:"Home",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"}],graph1:r.a,chartOptions1:{plotOptions:{series:{marker:{enabled:!1}}},data:{csv:"",enablePolling:!0},credits:{enabled:!1},chart:{type:"line",borderColor:"blue",plotBorderColor:"black"},title:{text:"Yearly Sales Trend"},subtitle:{text:""}},graph2:r.a,chartOptions2:{plotOptions:{series:{marker:{enabled:!1}}},series:[{lineWidth:1},{type:"areaspline",color:"#c4392d",negativeColor:"#5679c4",fillOpacity:.5}],data:{csv:"",complete:function(t){t.series.push({name:"Trend",data:[{x:1880,y:-.4},{x:2014,y:.52}]})},enablePolling:!0},chart:{type:"spline",plotBorderColor:"black"},title:{text:"Global temperature change"},subtitle:{text:"Data module: options structure is modified before final rendering"}},graph3:r.a,chartOptions3:{chart:{type:"column"},data:{csv:""},credits:{enabled:!1},title:{text:"Fruit Consumption"},yAxis:{title:{text:"Units"}}}}},methods:{goToPage:function(t){"Input Data"==t&&this.$router.push("/InputData")},getUserInfo:function(){this.username=this.$router.params.username},updateData:function(){var t=this;this.chartOptions2.data.csvURL="http://localhost:8080/insight/#/data.csv",d.a.get("data.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),d.a.get("backendFinal/salesFile.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is salesFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),this.chartOptions3.data.csv=this.$refs.data1.innerHTML}},mounted:function(){this.updateData(),this.getUserInfo(),console.log(window.location.origin+"/insight/#/DashboardPage")}},u=p,m=(s("3843"),s("2877")),g=s("6544"),C=s.n(g),f=s("7496"),b=s("b0af"),y=s("ce7e"),_=s("132d"),I=s("8860"),w=s("da13"),x=s("8270"),O=s("5d23"),V=s("1baa"),k=s("34c3"),L=s("f6c4"),D=s("f774"),P=s("e0c7"),$=Object(m["a"])(u,i,e,!1,null,null,null);a["default"]=$.exports;C()($,{VApp:f["a"],VCard:b["a"],VDivider:y["a"],VIcon:_["a"],VList:I["a"],VListItem:w["a"],VListItemAvatar:x["a"],VListItemContent:O["a"],VListItemGroup:V["a"],VListItemIcon:k["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VMain:L["a"],VNavigationDrawer:D["a"],VSubheader:P["a"]})}}]);
//# sourceMappingURL=chunk-0ba49228.4d27e4ed.js.map