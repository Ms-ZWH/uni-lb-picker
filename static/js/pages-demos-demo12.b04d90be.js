(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo12"],{"10ba":function(n,e,l){"use strict";l.r(e);var a=l("a6e6"),i=l.n(a);for(var t in a)"default"!==t&&function(n){l.d(e,n,(function(){return a[n]}))}(t);e["default"]=i.a},"3f38":function(n,e,l){"use strict";var a={lbPicker:l("3a92").default},i=function(){var n=this,e=n.$createElement,l=n._self._c||e;return l("v-uni-view",[l("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.handleTap("picker1")}}},[n._v("点我弹出选择器")]),l("v-uni-view",[n._v(n._s(n.value1.join("-")))]),l("lb-picker",{ref:"picker1",attrs:{mode:"unlinkedSelector",list:n.list},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.handleChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=n.$handleEvent(e),n.handleConfirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=n.$handleEvent(e),n.handleCancel.apply(void 0,arguments)}},model:{value:n.value1,callback:function(e){n.value1=e},expression:"value1"}}),l("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.handleTap("picker2")}}},[n._v("点我弹出默认值选择器")]),l("v-uni-view",[n._v(n._s(n.value2.join("-")))]),l("lb-picker",{ref:"picker2",attrs:{mode:"unlinkedSelector",list:n.list},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.handleChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=n.$handleEvent(e),n.handleConfirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=n.$handleEvent(e),n.handleCancel.apply(void 0,arguments)}},model:{value:n.value2,callback:function(e){n.value2=e},expression:"value2"}}),l("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.handleTap("picker3")}}},[n._v("扁平数据支持")]),n._v(n._s(JSON.stringify(n.list2))),l("v-uni-view",[n._v(n._s(n.value3.join("-")))]),l("lb-picker",{ref:"picker3",attrs:{mode:"unlinkedSelector",list:n.list2},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.handleChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=n.$handleEvent(e),n.handleConfirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=n.$handleEvent(e),n.handleCancel.apply(void 0,arguments)}},model:{value:n.value3,callback:function(e){n.value3=e},expression:"value3"}})],1)},t=[];l.d(e,"b",(function(){return i})),l.d(e,"c",(function(){return t})),l.d(e,"a",(function(){return a}))},6463:function(n,e,l){"use strict";l.r(e);var a=l("3f38"),i=l("10ba");for(var t in i)"default"!==t&&function(n){l.d(e,n,(function(){return i[n]}))}(t);var o,u=l("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=c.exports},a6e6:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{value1:[],value2:["2","33","222"],value3:["选项2","选项33","选项222"],list:[[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}],[{label:"选项11",value:"11"},{label:"选项22",value:"22"},{label:"选项33",value:"33"}],[{label:"选项111",value:"111"},{label:"选项222",value:"222"},{label:"选项333",value:"333"}]],list2:[["选项1","选项2","选项3"],["选项11","选项22","选项33"],["选项111","选项222","选项333"]]}},onReady:function(){var n=this;this.$nextTick((function(){var e=n.$refs.picker2.getColumnsInfo(["2","33","222"]);console.log("根据value获取的信息：",e)}))},methods:{handleTap:function(n){this.$refs[n].show()},handleChange:function(n){console.log("change::",n)},handleConfirm:function(n){console.log("confirm::",n)},handleCancel:function(n){console.log("cancel::",n)}}};e.default=a}}]);