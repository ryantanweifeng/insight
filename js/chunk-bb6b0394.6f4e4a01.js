(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb6b0394"],{1681:function(t,e,i){},"23a7":function(t,e,i){"use strict";i("99af"),i("a623"),i("4160"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("b0c0"),i("a9e3"),i("159b");var a=i("2909"),n=i("5530"),s=i("53ca"),o=(i("5803"),i("2677")),r=(i("4de4"),i("3835")),l=(i("8adc"),i("58df")),c=i("0789"),u=i("9d26"),h=i("a9ad"),p=i("4e82"),d=i("7560"),f=i("f2e7"),v=i("1c87"),g=i("af2b"),b=i("d9bd"),m=Object(l["a"])(h["a"],g["a"],v["a"],d["a"],Object(p["a"])("chipGroup"),Object(f["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-chip":!0},v["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(v["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(r["a"])(e,2),a=i[0],n=i[1];t.$attrs.hasOwnProperty(a)&&Object(b["a"])(a,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(u["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c["b"],t)},genClose:function(){var t=this;return this.$createElement(u["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,s=i.data;s.attrs=Object(n["a"])(Object(n["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var o=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(o,s),e)}}),y=i("80d2"),w=i("d9f7");e["a"]=o["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(y["w"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,a=void 0===i?0:i;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(y["o"])(e,1024===this.base))},internalArrayValue:function(){return Object(y["w"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var i=e.name,a=void 0===i?"":i,n=e.size,s=void 0===n?0:n,o=t.truncateText(a);return t.showSize?"".concat(o," (").concat(Object(y["o"])(s,1024===t.base),")"):o})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(b["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(y["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(m,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=o["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(w["c"])(t.data.style,{display:"none"})),t},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:i,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=o["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(n["a"])(Object(n["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(a["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var a=i("8654");e["a"]=a["a"]},5803:function(t,e,i){},6117:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["none"===t.have_results||"processing"===t.have_results?i("v-form",{on:{submit:t.checkForm}},[t.errors.length?i("div",[i("b",[t._v("Please correct the following error(s):")]),t._l(t.errors,(function(e){return i("div",{key:e,staticClass:"alert alert-danger"},[t._v(" "+t._s(e)+" ")])}))],2):t._e(),i("div",[i("label",{attrs:{id:"header",for:"exampleFormControlTextarea1"}},[t._v("Please enter data in CSV format as shown below:")]),i("p",[t._v("date,target,profit,sales,transactions")]),i("p",[t._v("2015-01-01,80000,114991,90921,483")]),i("p",[t._v("2015-01-01,90000,129355,93116,224")]),i("br"),i("v-textarea",{attrs:{outlined:"",disabled:"processing"===t.have_results,name:"csvdata",id:"csvdata",rows:"23",shaped:""},model:{value:t.csvdata,callback:function(e){t.csvdata=e},expression:"csvdata"}}),i("v-file-input",{attrs:{"truncate-length":"15",accept:".csv"},model:{value:t.chosenFile,callback:function(e){t.chosenFile=e},expression:"chosenFile"}}),i("div",{staticClass:"text-center"},["none"===t.have_results?i("v-btn",{staticStyle:{"background-color":"#022140",color:"white"},attrs:{large:"",type:"submit",disabled:t.dialog,loading:t.dialog},on:{click:t.loadTextFromFile}},[t._v(" Submit ")]):t._e(),"processing"===t.have_results?i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-text",{attrs:{align:"center"}},[t._v("Calculating ...")]),i("v-card-text",{attrs:{align:"center"}},[i("v-progress-circular",{attrs:{size:70,width:7,color:"primary",indeterminate:""}})],1)],1)],1):t._e()],1)],1)]):t._e(),"finished"===t.have_results?i("div",{staticClass:"container"},[i("hr"),i("br"),i("br"),i("hr"),i("hr")]):t._e()],1)},n=[],s=(i("4160"),i("ac1f"),i("466d"),i("1276"),i("498a"),i("159b"),i("bc3a")),o=i.n(s);i("ed18").config();var r={props:{},name:"Graphs",data:function(){return{chosenFile:null,text:"",interval:{},value:0,errors:[],csvdata:null,have_results:"none",images:null,dialog:!1}},methods:{loadTextFromFile:function(){var t=this,e=new FileReader;e.readAsText(this.chosenFile),e.onload=function(e){return t.csvdata=e.target.result},console.log(event)},checkForm:function(t){var e=this;if(this.dialog=!0,t.preventDefault(),this.errors=[],this.csvdata||this.errors.push("CSV Data required."),this.csvdata){this.csvdata.trim();var i=this.csvdata.trim().split("\n"),a=i[0],n=a.split(",").length;if(7!==n)return void this.errors.push("CSV data must have 7 columns only !");if("date"!==a.split(",")[0]||"target"!==a.split(",")[1]||"profit"!==a.split(",")[2]||"sales"!==a.split(",")[3]||"transactions"!==a.split(",")[4]||"item_name"!==a.split(",")[5]||"unit_sold"!==a.split(",")[6])return void this.errors.push("Please ensure that the labels of the CSV data header are in the correct format ! ");i.shift();var s={};try{i.forEach((function(t){if(t.split(",").length!==n)throw e.errors.push('CSV data not valid. There might be a missing "," or a value'),s;if(!t.split(",")[0].match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))throw e.errors.push("CSV data not valid. date column must be like this '2017-01-12'"),s}))}catch(t){if(t!==s)throw t;return}if(i.length<50)return void this.errors.push("CSV data not enough to predict the future sales. Enter atleast 3 years data to make accurate prediction");this.have_results="processing",o.a.post("/api/posting/",{csv:this.csvdata}).then((function(t){var i=t["data"]["results"];e.have_results="finished",e.images=i,"finished"===e.have_results&&e.$router.push("/DashboardPage"),console.log(window.location.href)})).catch((function(t){this.have_results="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))}}},mounted:function(){var t=this;console.log("this is new Path of origin : http://localhost:8000"),console.log("this is new Path of origin : production"),this.interval=setInterval((function(){if(100===t.value)return t.value=0;t.value+=5}),1e3)}},l=r,c=(i("656a"),i("2877")),u=i("6544"),h=i.n(u),p=i("8336"),d=i("b0af"),f=i("99d9"),v=i("169a"),g=i("23a7"),b=i("4bd4"),m=i("490a"),y=(i("a9e3"),i("5530")),w=(i("1681"),i("8654")),C=i("58df"),x=Object(C["a"])(w["a"]),S=x.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(y["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},w["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=w["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){w["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),_=Object(c["a"])(l,a,n,!1,null,null,null);e["default"]=_.exports;h()(_,{VBtn:p["a"],VCard:d["a"],VCardText:f["b"],VDialog:v["a"],VFileInput:g["a"],VForm:b["a"],VProgressCircular:m["a"],VTextarea:S})},"656a":function(t,e,i){"use strict";i("acc2")},"8adc":function(t,e,i){},acc2:function(t,e,i){}}]);
//# sourceMappingURL=chunk-bb6b0394.6f4e4a01.js.map