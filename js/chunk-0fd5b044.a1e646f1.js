(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd5b044"],{"57c5":function(e,t,i){"use strict";i("ad17")},"6ca7":function(e,t,i){},"70c6":function(e,t,i){e.exports=i.p+"img/data-analytics.d8e311f8.jpg"},ad17:function(e,t,i){},db27:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"container"}},[n("div",{staticClass:"Register"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i("70c6")}},[n("v-card-title",[e._v("Registration form")])],1),n("v-card-text",{staticClass:"text--primary"},[[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{rules:e.usernameRules,label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Agree with Terms & Conditions",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",value:"Add",href:"index.html"},on:{click:function(t){return e.createContact()}}},[e._v(" Submit ")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error",href:"index.html"},on:{click:e.reset}},[e._v(" Cancel ")])],1)]],2)],1)],1)])},a=[],s=(i("4160"),i("b0c0"),i("159b"),i("bc3a")),r=i.n(s),o={name:"Register",data:function(){return{users:[],valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"}],username:"",usernameRules:[function(e){return!!e||"Username is required"}],password:"",passwordRules:[function(e){return!!e||"Password is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},createContact:function(){var e=this;if(""!=this.name&&""!=this.email){console.log("Create user!");var t=new FormData;console.log("name:",this.name),t.append("name",this.name),t.append("email",this.email),t.append("username",this.username),t.append("password",this.password);var i={};t.forEach((function(e,t){i[t]=e})),r()({method:"post",url:"api/users.php",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(){console.log(i),e.users.push(i),e.resetForm()})).catch((function(e){console.log(e)}))}}}},l=o,u=(i("57c5"),i("2877")),c=i("6544"),d=i.n(c),h=i("7496"),p=i("8336"),m=i("b0af"),f=i("99d9"),v=(i("d3b7"),i("25f0"),i("5530")),b=(i("6ca7"),i("ec29"),i("9d26")),g=i("c37a"),x=(i("4de4"),i("45fc"),i("5607")),C=i("2b0e"),k=C["a"].extend({name:"rippleable",directives:{ripple:x["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),V=i("80d2"),w=C["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:V["h"]}}}),y=i("58df");function I(e){e.preventDefault()}var A=Object(y["a"])(g["a"],k,w).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=g["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:I},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:I},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===n&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),S=A.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(v["a"])(Object(v["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),$=i("4bd4"),R=i("adda"),E=i("8654"),O=Object(u["a"])(l,n,a,!1,null,null,null);t["default"]=O.exports;d()(O,{VApp:h["a"],VBtn:p["a"],VCard:m["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:S,VForm:$["a"],VImg:R["a"],VTextField:E["a"]})},ec29:function(e,t,i){}}]);
//# sourceMappingURL=chunk-0fd5b044.a1e646f1.js.map