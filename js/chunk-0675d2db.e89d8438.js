(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0675d2db"],{"1feb":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{staticClass:"d-flex justify-center mb-6"},[i("v-form",{ref:"registerForm",model:{value:t.formValidity,callback:function(e){t.formValidity=e},expression:"formValidity"}},[i("h1",[t._v("Register")]),i("v-text-field",{attrs:{label:"Email",type:"Email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{label:"Password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-switch",{attrs:{label:"Agree to terms and conditions",required:"",rules:t.agreeToTermRules},model:{value:t.agreeToTerms,callback:function(e){t.agreeToTerms=e},expression:"agreeToTerms"}}),i("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary",disabled:!t.formValidity}},[t._v("Submit")]),i("v-btn",{staticClass:"mr-4",attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v("Reset Validation")]),i("v-btn",{attrs:{color:"error"},on:{click:t.resetForm}},[t._v("Reset ")])],1)],1)],1)],1)},a=[],s=(i("caad"),i("c975"),i("2532"),{name:"Register",data:function(){return{agreeToTerms:!1,agreeToTermRules:[function(t){return!!t||"You must agree to the terms and conditions to sign up for an account."}],email:"",emailRules:[function(t){return!!t||"Email is required."},function(t){return 0!==t.indexOf("@")||"Email should have a username."},function(t){return t.includes("@")||"Email should include '@' symbol"},function(t){return t.indexOf(".")-t.indexOf("@")>1||"Email should contain a valid domain."},function(t){return t.indexOf(".")<=t.length-3||"Email should contain a valid domain extension"}],formValidity:!1,password:"",passwordRules:[function(t){return!!t||"Password is required."},function(t){return t.length>=6||"Password too short. Atleast 6 characters required"}]}},methods:{resetForm:function(){this.$refs.registerForm.reset()},resetValidation:function(){this.$refs.registerForm.resetValidation()}}}),o=s,r=i("2877"),l=i("6544"),u=i.n(l),c=i("8336"),h=i("62ad"),d=i("a523"),f=i("4bd4"),p=i("0fd9"),v=(i("0481"),i("4069"),i("5530")),m=(i("ec29"),i("9d01"),i("fe09")),g=i("c37a"),b=i("c3f0"),w=i("0789"),V=i("490a"),y=i("80d2"),C=m["a"].extend({name:"v-switch",directives:{Touch:b["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(v["a"])(Object(v["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(v["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(v["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(w["a"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(V["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===y["q"].left&&this.isActive||t.keyCode===y["q"].right&&!this.isActive)&&this.onChange()}}}),x=i("8654"),k=Object(r["a"])(o,n,a,!1,null,null,null);e["default"]=k.exports;u()(k,{VBtn:c["a"],VCol:h["a"],VContainer:d["a"],VForm:f["a"],VRow:p["a"],VSwitch:C,VTextField:x["a"]})},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("a026");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},8547:function(t,e,i){"use strict";var n=i("a026"),a=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["i"]}}})},"9d01":function(t,e,i){},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,s=.5,o=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&a<n-o&&t.up(t),t.down&&a>n+o&&t.down(t))};function s(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return r(t,e)}}}function u(t,e,i){var a=e.value,s=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(s){var r=l(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=r,Object(n["r"])(r).forEach((function(t){s.addEventListener(t,r[t],o)}))}}function c(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var s=a._touchHandlers[i.context._uid];Object(n["r"])(s).forEach((function(t){a.removeEventListener(t,s[t])})),delete a._touchHandlers[i.context._uid]}}var h={inserted:u,unbind:c};e["a"]=h},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i("4de4"),i("45fc"),i("d3b7"),i("25f0");var n=i("c37a"),a=i("5311"),s=i("8547"),o=i("58df");function r(t){t.preventDefault()}e["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-0675d2db.e89d8438.js.map