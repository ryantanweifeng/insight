(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba49228"],{3843:function(t,a,n){"use strict";n("57c7")},"57c7":function(t,a,n){},"9f08":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-app",[n("div",{attrs:{id:"div1"}},[n("v-card",{attrs:{height:"100%",elevation:"24"}},[n("v-navigation-drawer",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-avatar"),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.username))]),n("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[n("v-divider"),n("v-list",{attrs:{rounded:""}},[n("v-subheader"),n("v-list-item-group",{attrs:{color:"green",elevation:"24"},model:{value:t.selectedItem,callback:function(a){t.selectedItem=a},expression:"selectedItem"}},t._l(t.items,(function(a,e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(a.title)},on:{click:function(n){return t.goToPage(a.title)}}})],1)],1)})),1)],1)],1)],1)],1),n("div",{attrs:{id:"div2"}},[n("v-main",[n("div",{attrs:{id:"main"}},[[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("v-card",{staticClass:"card card-chart",attrs:{id:"charts"}},[n("highcharts",{attrs:{options:t.chartOptions1,highcharts:t.graph1}})],1)],1),n("div",{staticClass:"col-md-6",attrs:{id:"charts"}},[n("v-card",{staticClass:"card card-chart"},[n("highcharts",{attrs:{options:t.chartOptions3,highcharts:t.graph3}})],1)],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[n("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[n("highcharts",{attrs:{options:t.chartOptions5,highcharts:t.graph5}})],1)],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12",attrs:{id:"charts"}},[n("v-card",{staticClass:"card card-chart",attrs:{id:"graph2"}},[n("highcharts",{attrs:{options:t.chartOptions4,highcharts:t.graph4}})],1)],1)])]],2)]),n("pre",{ref:"dataC",staticStyle:{display:"none"},attrs:{id:"csv"}},[t._v("Date,Prediction\n2020-01-01,485554.0946642303\n2020-02-01,495496.5098943882\n2020-03-01,660261.2296798062\n2020-04-01,739371.5669962771\n2020-05-01,826975.0861533438\n2020-06-01,854974.8093403798\n2020-07-01,928174.3590219235\n2020-08-01,830584.532009551\n2020-09-01,739165.4594070568\n2020-10-01,710256.731930126\n2020-11-01,749823.0090925124\n2020-12-01,541431.4915828642\n2021-01-01,492544.757107191\n2021-02-01,499841.89308962255\n2021-03-01,668663.0442144112\n2021-04-01,749923.1326546234\n2021-05-01,840004.2668022434\n2021-06-01,866431.984389926\n2021-07-01,943128.0550420602\n2021-08-01,843267.5156799211\n2021-09-01,748317.8861363975\n2021-10-01,720449.6310463671\n2021-11-01,760925.86679889\n2021-12-01,546941.0315304468\n")]),n("pre",{ref:"dataD",staticStyle:{display:"none"},attrs:{id:"csv2"}},[t._v("        Date,Sales\n2015-01-01,951442\n2015-02-01,657202\n2015-03-01,652006\n2015-04-01,638453\n2015-05-01,629430\n2015-06-01,645584\n2015-07-01,702639\n2015-08-01,743621\n2015-09-01,726835\n2015-10-01,818522\n2015-11-01,762594\n2015-12-01,712417\n2016-01-01,635897\n2016-02-01,620276\n2016-03-01,790881\n2016-04-01,901950\n2016-05-01,988730\n2016-06-01,1022664\n2016-07-01,1138718\n2016-08-01,981494\n2016-09-01,896831\n2016-10-01,863637\n2016-11-01,891448\n2016-12-01,663411\n2017-01-01,617306\n2017-02-01,621369\n2017-03-01,822667\n2017-04-01,938862\n2017-05-01,1020686\n2017-06-01,1064624\n2017-07-01,1171393\n2017-08-01,1026403\n2017-09-01,935263\n2017-10-01,891160\n2017-11-01,928837\n2017-12-01,695170\n2018-01-01,454904\n2018-02-01,459417\n2018-03-01,617382\n2018-04-01,682274\n2018-05-01,763242\n2018-06-01,795597\n2018-07-01,855922\n2018-08-01,766761\n2018-09-01,689907\n2018-10-01,656587\n2018-11-01,692643\n2018-12-01,506607\n2019-01-01,525987\n2019-02-01,529117\n2019-03-01,704301\n2019-04-01,788914\n2019-05-01,882877\n2019-06-01,906842\n2019-07-01,989010\n2019-08-01,885596\n2019-09-01,785124\n2019-10-01,758883\n2019-11-01,800783\n2019-12-01,578048\n\n      ")]),n("pre",{ref:"data1",staticStyle:{display:"none"},attrs:{id:"csv1"}},[t._v("        Categories,Apples,Pears,Oranges,Bananas\nJohn,8,4,6,5\n      ")])],1)])},s=[],i=n("ea7f"),c=n.n(i),r=n("bc3a"),o=n.n(r),l=n("668e"),d=n.n(l),h=n("d68a"),p=n.n(h);p()(c.a),d()(c.a);var v={props:["username","results"],data:function(){return{image:"",errors:[],csvdata:null,have_results:"none",images:null,updatedImages:[],selectedItem:"",mySeries:[10,20,30,40,50,60],items:[{title:"Home",icon:"mdi-view-dashboard"},{title:"Input Data",icon:"mdi-forum"}],graph1:c.a,chartOptions1:{plotOptions:{series:{}},data:{csv:""},credits:{enabled:!1},chart:{type:"line"},title:{text:"Yearly Sales Trend"},subtitle:{text:""},yAxis:{title:{text:"Sales"}}},graph2:c.a,chartOptions2:{plotOptions:{series:{marker:{enabled:!1}}},series:[{lineWidth:1},{type:"areaspline",color:"#c4392d",negativeColor:"#5679c4",fillOpacity:.5}],data:{csv:"",complete:function(t){t.series.push({name:"Trend",data:[{x:1880,y:-.4},{x:2014,y:.52}]})},enablePolling:!0},chart:{type:"spline",plotBorderColor:"black"},title:{text:"Global temperature change"},subtitle:{text:"Data module: options structure is modified before final rendering"}},graph3:c.a,chartOptions3:{chart:{type:"column"},data:{csv:""},credits:{enabled:!1},title:{text:"Store performance"},yAxis:{title:{text:"Number of sales"}}},graph4:c.a,chartOptions4:{chart:{type:"line"},credits:{enabled:!1},data:{csv:""},series:[{zoneAxis:"x",zones:[{value:Date.UTC(2020,12),color:"#ffa500"}]}],yAxis:{title:{text:"Number of sales"}},title:{text:"Sales prediction"}},graph5:c.a,chartOptions5:{chart:{type:"line"},data:{csv:""},yAxis:{title:{text:"Number of transactions"}},title:{text:"Transactions per month"}}}},methods:{goToPage:function(t){"Input Data"==t&&this.$router.push({name:"InputData",params:{username:this.username}})},updateData:function(){var t=this;this.images=this.results,console.log(this.chartOptions4.data.csv),this.chartOptions2.data.csvURL="http://localhost:8080/insight/#/data.csv",o.a.get("data.csv").then((function(a){t.chartOptions2.data.csv=a.data})).catch((function(t){console.log(t)})),o.a.get("backendFinal/prediction.csv").then((function(a){t.chartOptions4.data.csv=a.data,console.log(a)})).catch((function(t){console.log(t)})),o.a.get("backendFinal/sales.csv").then((function(a){t.chartOptions1.data.csv=a.data,console.log("this is salesFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),o.a.get("backendFinal/storeFile.csv").then((function(a){t.chartOptions3.data.csv=a.data,console.log("this is storeFile.csv ==== "+a.data)})).catch((function(t){console.log(t)})),o.a.get("backendFinal/transactions.csv").then((function(a){t.chartOptions5.data.csv=a.data,console.log("this is transactions.csv ==== "+a.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.updateData(),this.results!=this.images&&(this.images=this.results),console.log(window.location.origin+"/insight/#/DashboardPage")}},u=v,m=(n("3843"),n("2877")),g=n("6544"),f=n.n(g),b=n("7496"),x=n("b0af"),y=n("ce7e"),O=n("132d"),C=n("8860"),I=n("da13"),w=n("8270"),V=n("5d23"),k=n("1baa"),D=n("34c3"),_=n("f6c4"),S=n("f774"),L=n("e0c7"),A=Object(m["a"])(u,e,s,!1,null,null,null);a["default"]=A.exports;f()(A,{VApp:b["a"],VCard:x["a"],VDivider:y["a"],VIcon:O["a"],VList:C["a"],VListItem:I["a"],VListItemAvatar:w["a"],VListItemContent:V["a"],VListItemGroup:k["a"],VListItemIcon:D["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VMain:_["a"],VNavigationDrawer:S["a"],VSubheader:L["a"]})}}]);
//# sourceMappingURL=chunk-0ba49228.35518d38.js.map