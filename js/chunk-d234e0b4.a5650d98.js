(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d234e0b4"],{"51ad":function(t,e,a){"use strict";a("bff6")},6080:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return u}));a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("ade3");var n=a("b775");var o="consultant";function r(){return Object(n["a"])({url:"/".concat(o),method:"get"})}function i(t){return Object(n["a"])({url:"/".concat(o,"/").concat(t),method:"delete"})}function c(t){return Object(n["a"])({url:"/".concat(o,"/").concat(t),method:"get"})}function s(t){return Object(n["a"])({url:"/".concat(o),method:"post",data:t})}function u(t){var e=t.email;return Object(n["a"])({url:"/".concat(o,"/get-fullName/").concat(encodeURIComponent(e)),method:"get"})}},"77f3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ml-3 form-sv"},[e("el-card",[e("toolbar-widget",{attrs:{buttons:t.toolbarButtons}}),e("div",{staticClass:"col-md-6 mt-3"},[e("el-form",{ref:"form_data",attrs:{"label-width":"150px","label-position":"left",model:t.form}},[e("el-form-item",{attrs:{label:"Tên cố vấn",required:""}},[e("el-input",{attrs:{autofocus:""},model:{value:t.form.fullName,callback:function(e){t.$set(t.form,"fullName",e)},expression:"form.fullName"}})],1),e("el-form-item",{attrs:{label:"Email",required:""}},[e("el-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("el-form-item",{attrs:{label:"Chức vụ/ chức danh, đơn vị",required:""}},[e("el-input",{model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),e("el-form-item",{attrs:{label:"Nhiệm vụ",required:""}},[e("el-input",{attrs:{type:"text"},model:{value:t.form.mission,callback:function(e){t.$set(t.form,"mission",e)},expression:"form.mission"}})],1)],1)],1)],1)],1)},o=[],r=(a("96cf"),a("1da1")),i=a("6080"),c="consultant",s={data:function(){return{hasChange:!1,form:{fullName:"",email:"",position:"",mission:""}}},watch:{form:{handler:function(){this.hasChange=!0},deep:!0}},computed:{toolbarButtons:function(){var t=!0;return this.hasChange&&(t=!1),[{label:"Quay lại",route:"".concat(c,"_main")},{label:"Lưu và tiếp tục",disabled:t,callback:this.saveAndContinue,type:"primary"},{label:"Lưu",disabled:t,callback:this.handleSave,type:"primary"}]}},created:function(){this.loadData(this.$route.params.id)},methods:{loadData:function(t){var e=this;t&&(!t&&this.$route.params.id&&(t=this.$route.params.id),this.$wrLoading(!0),Object(i["b"])(t).then((function(t){var a=t.data;a.success&&(e.$set(e,"form",a.doc),e.hasChange=!1)})).catch((function(t){console.log(t)})).finally((function(){e.$wrLoading(!1)})))},saveAndContinue:function(){this.handleSave(!0)},loadDataStudent:function(){var t=this;Object(i["a"])().then((function(e){e&&e.data&&e.data.success?(t.tableData=e.data.posts,t.posts=t.tableData.reverse()):console.error("Không thành công: ",e.data)})).catch((function(t){console.error("Lỗi khi bài đăng: ",t)}))},handleSave:function(){var t,e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log(this.form.Json+"alo"),this.$refs.form_data.validate(function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(o){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=o){n.next=4;break}return n.abrupt("return",!1);case 4:return e.$wrLoading(!0),n.next=7,Object(i["e"])(e.form).then((function(n){var o=n.data;1==o.success&&(!1===a?e.$router.push({name:"".concat(c,"_main")}):t=o.doc?o.doc._id:null)}));case 7:e.$wrLoading(!1),t&&(e.$route.params.id||e.$router.push({name:"".concat(c,"_edit"),params:{id:t}}),e.loadData(t),e.$store.dispatch("reRender"));case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}}},u=s,l=(a("51ad"),a("2877")),d=Object(l["a"])(u,n,o,!1,null,"23e636e4",null);e["default"]=d.exports},bff6:function(t,e,a){}}]);