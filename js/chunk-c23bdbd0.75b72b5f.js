(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c23bdbd0","chunk-2d20828a"],{"166a":function(t,e,i){},"2c64":function(t,e,i){},"3d86":function(t,e,i){},"57c5":function(t,e,i){"use strict";i("ad17")},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("4de4"),i("7db0"),i("c740"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("2532"),i("159b");var n=i("5530"),a=(i("166a"),i("a452")),s=i("7560"),r=i("58df"),o=i("d9bd"),l=Object(r["a"])(a["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"6ca7":function(t,e,i){},"70c6":function(t,e,i){t.exports=i.p+"img/data-analytics.d8e311f8.jpg"},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),s=i("a691"),r=i("50c4"),o=i("7b0b"),l=i("65f0"),u=i("8418"),c=i("1dde"),d=i("ae40"),h=c("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var i,n,c,d,h,p,b=o(this),y=r(b.length),x=a(t,y),V=arguments.length;if(0===V?i=n=0:1===V?(i=0,n=y-x):(i=V-2,n=f(m(s(e),0),y-x)),y+i-n>v)throw TypeError(g);for(c=l(b,n),d=0;d<n;d++)h=x+d,h in b&&u(c,d,b[h]);if(c.length=n,i<n){for(d=x;d<y-n;d++)h=d+n,p=d+i,h in b?b[p]=b[h]:delete b[p];for(d=y;d>y-n+i;d--)delete b[d-1]}else if(i>n)for(d=y-n;d>x;d--)h=d+n-1,p=d+i-1,h in b?b[p]=b[h]:delete b[p];for(d=0;d<i;d++)b[d+x]=arguments[d+2];return b.length=y-n+i,c}})},ad17:function(t,e,i){},c740:function(t,e,i){"use strict";var n=i("23e7"),a=i("b727").findIndex,s=i("44d2"),r=i("ae40"),o="findIndex",l=!0,u=r(o);o in[]&&Array(1)[o]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},db27:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"container"}},[n("div",{staticClass:"Register"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i("70c6")}},[n("v-card-title",{attrs:{id:"registerText"}},[t._v("Registration form")])],1),n("v-card-text",{staticClass:"text--primary"},[[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{rules:t.usernameRules,label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("v-text-field",{attrs:{rules:t.passwordRules,label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("label",[t._v("Choose a user type:")]),n("v-radio-group",{attrs:{mandatory:"",column:""},model:{value:t.usertype,callback:function(e){t.usertype=e},expression:"usertype"}},[n("v-radio",{attrs:{label:"Sales manager",value:"sales manager"}}),n("v-radio",{attrs:{label:"Warehouse manager",value:"warehouse manager"}})],1),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Agree with Terms & Conditions",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success",value:"Add"},on:{click:function(e){return t.createContact()}}},[t._v(" Submit ")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error",href:"index.html"},on:{click:t.reset}},[t._v(" Cancel ")])],1)]],2)],1)],1)])},a=[],s=(i("4160"),i("b0c0"),i("159b"),i("bc3a")),r=i.n(s),o={name:"Register",data:function(){return{users:[],valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"}],username:"",usernameRules:[function(t){return!!t||"Username is required"}],password:"",passwordRules:[function(t){return!!t||"Password is required"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],usertype:"",checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},createContact:function(){var t=this;if(console.log(this.usertype),this.validate(),""!=this.name&&""!=this.email){console.log("Create user!");var e=new FormData;e.append("name",this.name),e.append("email",this.email),e.append("username",this.username),e.append("password",this.password),e.append("usertype",this.usertype);var i={};e.forEach((function(t,e){i[e]=t})),r()({method:"post",url:"api/users.php",data:e,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(){console.log(i),t.users.push(i),t.resetForm()})).catch((function(t){console.log(t)})),this.$router.push("/")}}}},l=o,u=(i("57c5"),i("2877")),c=i("6544"),d=i.n(c),h=i("7496"),p=i("8336"),m=i("b0af"),f=i("99d9"),v=(i("d3b7"),i("25f0"),i("5530")),g=(i("6ca7"),i("ec29"),i("9d26")),b=i("c37a"),y=(i("4de4"),i("45fc"),i("5607")),x=i("2b0e"),V=x["a"].extend({name:"rippleable",directives:{ripple:y["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),I=i("80d2"),C=x["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:I["h"]}}}),S=i("58df");function k(t){t.preventDefault()}var w=Object(S["a"])(b["a"],V,C).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=b["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:k},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:k},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),A=w.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(v["a"])(Object(v["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),O=i("4bd4"),$=i("adda"),j=(i("2c64"),i("ba87")),R=i("7e2b"),D=i("a9ad"),E=i("4e82"),M=i("7560"),_=i("d9f7"),G=Object(S["a"])(R["a"],D["a"],V,Object(E["a"])("radioGroup"),M["a"]),B=G.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return w.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return b["a"].options.computed.computedId.call(this)},hasLabel:b["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return w.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return w.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(j["a"],{on:{click:k},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(I["l"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(v["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(_["b"])({click:this.onChange},this.listeners$)};return t("div",e,[this.genRadio(),this.genLabel()])}}),F=(i("a9e3"),i("3d86"),i("604c")),T=Object(S["a"])(C,F["a"],b["a"]),L=T.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},b["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=b["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=b["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:F["a"].options.methods.onClick}}),q=i("8654"),N=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=N.exports;d()(N,{VApp:h["a"],VBtn:p["a"],VCard:m["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:A,VForm:O["a"],VImg:$["a"],VRadio:B,VRadioGroup:L,VTextField:q["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c23bdbd0.75b72b5f.js.map