(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ceb17"],{6117:function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",["none"===s.have_results||"processing"===s.have_results?e("form",{on:{submit:s.checkForm}},[s.errors.length?e("div",[e("b",[s._v("Please correct the following error(s):")]),s._l(s.errors,(function(t){return e("div",{key:t,staticClass:"alert alert-danger"},[s._v(" "+s._s(t)+" ")])}))],2):s._e(),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlTextarea1"}},[s._v("Data in CSV")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:s.csvdata,expression:"csvdata"}],staticClass:"form-control",attrs:{disabled:"processing"===s.have_results,name:"csvdata",id:"csvdata",rows:"25"},domProps:{value:s.csvdata},on:{input:function(t){t.target.composing||(s.csvdata=t.target.value)}}})]),e("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},["none"===s.have_results?e("span",[s._v("Submit")]):s._e(),"processing"===s.have_results?e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[s._v("Loading...")])]):s._e()])]):s._e(),e("hr"),e("br"),e("br"),e("hr"),e("hr")])},a=[],o=(e("4160"),e("ac1f"),e("466d"),e("1276"),e("498a"),e("159b"),e("bc3a")),n=e.n(o);e("ed18").config();var i={name:"Graphs",data:function(){return{errors:[],csvdata:null,have_results:"none",images:null}},methods:{checkForm:function(s){var t=this;if(s.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var e=this.csvdata.trim().split("\n"),r=e[0],a=r.split(",").length;if(4!==a)return void this.errors.push("CSV must have 4 columns");if("date"!==r.split(",")[0]||"store"!==r.split(",")[1]||"item"!==r.split(",")[2]||"sales"!==r.split(",")[3])return void this.errors.push("CSV  header names are not valid ");e.shift();var o={};try{e.forEach((function(s){if(s.split(",").length!==a)throw t.errors.push("CSV data not valid. might be there is a "," or element missing"),o;if(!s.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw t.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),o}))}catch(s){if(s!==o)throw s;return}if(e.length<50)return void this.errors.push("CSV not enough to predict the future sales");this.have_results="processing",n.a.post("/api/posting/",{csv:this.csvdata}).then((function(s){var e=s["data"]["results"];t.have_results="finished",t.images=e,"finished"===t.have_results&&t.$router.push("/DashboardPage"),console.log(window.location.href)})).catch((function(s){this.have_results="none",s.response?(console.log(s.response.data),console.log(s.response.status),console.log(s.response.headers)):s.request?console.log(s.request):console.log("Error",s.message)}))}}},mounted:function(){console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production")}},l=i,c=e("2877"),h=Object(c["a"])(l,r,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0ceb17.3bf0efad.js.map