(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba49228"],{3843:function(t,a,s){"use strict";s("57c7")},"57c7":function(t,a,s){},"9f08":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("div",{attrs:{id:"div1"}},[s("v-card",{attrs:{height:"100%",elevation:"24"}},[s("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"two-line":""}},[s("v-list-item-avatar"),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.username))]),s("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[s("v-divider"),s("v-list",{attrs:{rounded:""}},[s("v-subheader"),s("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,e){return s("v-list-item",{key:e},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(s){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),s("div",{attrs:{id:"div2"}},[s("v-main",[s("div",{attrs:{id:"main"}},[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-warning card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v(" mdi-chart-line ")])],1),s("p",{staticClass:"card-category"},[t._v("Number of sales")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v(" 115 ")])])])],1),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-success card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v("mdi-chart-box")])],1),s("p",{staticClass:"card-category"},[t._v("Revenue")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v("$ 34,245")])])])],1),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-info card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v(" mdi-currency-usd ")])],1),s("p",{staticClass:"card-category"},[t._v("Profit")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v("$ 50,709")])])])],1),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("v-card",{staticClass:"card card-stats"},[s("div",{staticClass:"card-header card-header-rose card-header-icon"},[s("div",{staticClass:"card-icon"},[s("v-icon",[t._v("mdi-finance")])],1),s("p",{staticClass:"card-category"},[t._v("Cost")])]),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title"},[t._v("$ 110,555")])])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[s("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),s("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart"},[s("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[s("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[s("highcharts",{attrs:{options:t.chartOptions4,highcharts:t.graph4}})],1)],1)])]],2)]),s("pre",{ref:"dataC",staticStyle:{display:"none"},attrs:{id:"csv"}},[t._v("Date,Prediction\n2020-01-01,485554.0946642303\n2020-02-01,495496.5098943882\n2020-03-01,660261.2296798062\n2020-04-01,739371.5669962771\n2020-05-01,826975.0861533438\n2020-06-01,854974.8093403798\n2020-07-01,928174.3590219235\n2020-08-01,830584.532009551\n2020-09-01,739165.4594070568\n2020-10-01,710256.731930126\n2020-11-01,749823.0090925124\n2020-12-01,541431.4915828642\n2021-01-01,492544.757107191\n2021-02-01,499841.89308962255\n2021-03-01,668663.0442144112\n2021-04-01,749923.1326546234\n2021-05-01,840004.2668022434\n2021-06-01,866431.984389926\n2021-07-01,943128.0550420602\n2021-08-01,843267.5156799211\n2021-09-01,748317.8861363975\n2021-10-01,720449.6310463671\n2021-11-01,760925.86679889\n2021-12-01,546941.0315304468\n")]),s("pre",{ref:"dataD",staticStyle:{display:"none"},attrs:{id:"csv"}},[t._v("        Date,Sales\n2015-01-01,951442\n2015-02-01,657202\n2015-03-01,652006\n2015-04-01,638453\n2015-05-01,629430\n2015-06-01,645584\n2015-07-01,702639\n2015-08-01,743621\n2015-09-01,726835\n2015-10-01,818522\n2015-11-01,762594\n2015-12-01,712417\n2016-01-01,635897\n2016-02-01,620276\n2016-03-01,790881\n2016-04-01,901950\n2016-05-01,988730\n2016-06-01,1022664\n2016-07-01,1138718\n2016-08-01,981494\n2016-09-01,896831\n2016-10-01,863637\n2016-11-01,891448\n2016-12-01,663411\n2017-01-01,617306\n2017-02-01,621369\n2017-03-01,822667\n2017-04-01,938862\n2017-05-01,1020686\n2017-06-01,1064624\n2017-07-01,1171393\n2017-08-01,1026403\n2017-09-01,935263\n2017-10-01,891160\n2017-11-01,928837\n2017-12-01,695170\n2018-01-01,454904\n2018-02-01,459417\n2018-03-01,617382\n2018-04-01,682274\n2018-05-01,763242\n2018-06-01,795597\n2018-07-01,855922\n2018-08-01,766761\n2018-09-01,689907\n2018-10-01,656587\n2018-11-01,692643\n2018-12-01,506607\n2019-01-01,525987\n2019-02-01,529117\n2019-03-01,704301\n2019-04-01,788914\n2019-05-01,882877\n2019-06-01,906842\n2019-07-01,989010\n2019-08-01,885596\n2019-09-01,785124\n2019-10-01,758883\n2019-11-01,800783\n2019-12-01,578048\n\n      ")]),s("pre",{ref:"data1",staticStyle:{display:"none"},attrs:{id:"csv1"}},[t._v("        Categories,Apples,Pears,Oranges,Bananas\nJohn,8,4,6,5\n      ")])],1)])},i=[],n=s("ea7f"),c=s.n(n),r=s("bc3a"),d=s.n(r),o=s("668e"),l=s.n(o),v=s("d68a"),h=s.n(v);h()(c.a),l()(c.a);var p={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:"",mySeries:[10,20,30,40,50,60],items:[{title:"Home",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"}],graph1:c.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},title:{text:"Yearly Sales Trend"},subtitle:{text:""},yAxis:{title:{text:"Sales"}}},graph2:c.a,chartOptions2:{plotOptions:{series:{marker:{enabled:!1}}},series:[{lineWidth:1},{type:"areaspline",color:"#c4392d",negativeColor:"#5679c4",fillOpacity:.5}],data:{csv:"",complete:function(t){t.series.push({name:"Trend",data:[{x:1880,y:-.4},{x:2014,y:.52}]})},enablePolling:!0},chart:{type:"spline",plotBorderColor:"black"},title:{text:"Global temperature change"},subtitle:{text:"Data module: options structure is modified before final rendering"}},graph3:c.a,chartOptions3:{chart:{type:"column"},data:{csv:""},credits:{enabled:!1},title:{text:"Fruit Consumption"},yAxis:{title:{text:"Units"}}},graph4:c.a,chartOptions4:{chart:{type:"line"},credits:{enabled:!1},series:[{data:{csv:""}},{zoneAxis:"x",zones:[{value:Date.UTC(2020,12),color:"#ffa500"}]}],yAxis:{title:{text:"Number of sales"}}}}},methods:{goToPage:function(t){"Input Data"==t&&this.$router.push({name:"InputData",params:{username:this.username}})},updateData:function(){var t=this;this.images=this.results,console.log(this.chartOptions4.data.csv),this.chartOptions2.data.csvURL="http://localhost:8080/insight/#/data.csv",d.a.get("data.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),d.a.get("backendFinal/prediction.csv").then((function(a){t.chartOptions4.series[0].data.csv=a.data,console.log(a)})).catch((function(t){console.log(t)})),d.a.get("backendFinal/salesFile.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is salesFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),this.chartOptions3.data.csv=this.$refs.data1.innerHTML}},mounted:function(){this.updateData(),this.results!=this.images&&(this.images=this.results),console.log(window.location.origin+"/insight/#/DashboardPage")}},u=p,m=(s("3843"),s("2877")),g=s("6544"),C=s.n(g),f=s("7496"),b=s("b0af"),y=s("ce7e"),_=s("132d"),x=s("8860"),I=s("da13"),O=s("8270"),w=s("5d23"),V=s("1baa"),D=s("34c3"),k=s("f6c4"),L=s("f774"),S=s("e0c7"),P=Object(m["a"])(u,e,i,!1,null,null,null);a["default"]=P.exports;C()(P,{VApp:f["a"],VCard:b["a"],VDivider:y["a"],VIcon:_["a"],VList:x["a"],VListItem:I["a"],VListItemAvatar:O["a"],VListItemContent:w["a"],VListItemGroup:V["a"],VListItemIcon:D["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMain:k["a"],VNavigationDrawer:L["a"],VSubheader:S["a"]})}}]);
//# sourceMappingURL=chunk-0ba49228.4a4f5bfd.js.map