(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fcd6e4a"],{"0c9f":function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return i}));var a=s("b775"),n="statistic";function l(t,e){return Object(a["a"])({url:"/".concat(n,"/").concat(t,"/").concat(e),method:"get"})}function i(t){return Object(a["a"])({url:"/".concat(n),method:"post",data:t})}},"386d":function(t,e,s){"use strict";var a=s("cb7c"),n=s("83a1"),l=s("5f1b");s("214f")("search",1,(function(t,e,s,i){return[function(s){var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=i(s,t,this);if(e.done)return e.value;var c=a(t),r=String(this),o=c.lastIndex;n(o,0)||(c.lastIndex=0);var u=l(c,r);return n(c.lastIndex,o)||(c.lastIndex=o),null===u?-1:u.index}]}))},"72d7":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return l})),s.d(e,"c",(function(){return i})),s.d(e,"e",(function(){return c})),s.d(e,"d",(function(){return r})),s.d(e,"f",(function(){return o}));var a=s("b775");function n(t,e){return Object(a["a"])({url:"/detailTrainingPoint/search",method:"get",params:{semester:t,schoolYear:e}})}function l(t,e,s,n){return Object(a["a"])({url:"/detailTrainingPoint/getCondition",method:"post",data:{schoolYear:t,semester:e,department:s,className:n}})}function i(t){return Object(a["a"])({url:"/detailTrainingPoint/".concat(t),method:"get"})}function c(t){return Object(a["a"])({url:"/detailTrainingPoint",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/detailTrainingPoint/".concat(t),method:"delete"})}function o(t,e){return Object(a["a"])({url:"/detailTrainingPoint/status/".concat(t),method:"post",data:{result:e}})}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},aecc:function(t,e,s){"use strict";s.r(e);s("386d");var a=function(){var t=this,e=t._self._c;return"student"!=this.$store.getters.user.role?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"dashboard"}},[e("div",{staticClass:"mx-auto"},[e("section",{attrs:{id:"content"}},[e("main",[e("ul",{staticClass:"box-info p-0 mb-0"},[e("li",{staticClass:"bg-white"},[e("i",{staticClass:"bx bxs-dollar-circle fa-solid el-icon-date"}),e("span",{staticClass:"text"},[e("h3",{staticClass:"A1"},[e("el-select",{staticClass:"custom-input-tk",attrs:{size:"large",filterable:""},model:{value:t.selectedSemester,callback:function(e){t.selectedSemester=e},expression:"selectedSemester"}},[e("el-option",{attrs:{value:1,label:"Kỳ 1"}}),e("el-option",{attrs:{value:2,label:"Kỳ 2"}})],1)],1),e("p",[e("el-select",{staticClass:"custom-input-tk",attrs:{size:"large"},model:{value:t.selectedSchoolYear,callback:function(e){t.selectedSchoolYear=e},expression:"selectedSchoolYear"}},t._l(t.schoolYears,(function(t){return e("el-option",{key:t,attrs:{value:t,label:t}})})),1)],1)])]),e("li",{staticClass:"bg-white"},[e("i",{staticClass:"bx bxs-calendar-check"}),e("span",{staticClass:"text"},[e("h3",[t._v(t._s(t.countComplete())+" / "+t._s(this.listClass.length))]),e("p",{staticStyle:{"font-weight":"bold"}},[t._v("Lớp đã hoàn thành")])])]),e("li",{staticClass:"bg-white"},[e("i",{staticClass:"bx bxs-group fa-solid el-icon-s-release"}),e("span",{staticClass:"text"},[e("h3",[t._v(t._s(t.getCountPhieu)+" / "+t._s(this.listPhieu.length))]),e("p",{staticStyle:{"font-weight":"bold"}},[t._v("Số phiếu chưa duyệt")])])])]),e("div",{staticClass:"table-data",staticStyle:{display:"flex",height:"60%"}},[e("div",{staticClass:"order",staticStyle:{"background-color":"white","box-shadow":"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}},[e("div",{staticClass:"head"},[e("h5",{staticClass:"font-weight-bold"},[t._v("DANH SÁCH - "+t._s(t.getClassTitle)+" ")]),e("div",{staticClass:"d-flex align-items-center justify-content-end font-weight-bold"},[e("div",{staticClass:"d-flex align-items-center justify-content-end font-weight-bold"},[e("el-select",{staticClass:"input-select3 mr-3",attrs:{filterable:"",placeholder:"Tình trạng",size:"mini"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.List,(function(t){return e("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1),e("el-input",{staticClass:"input-tk1 mr-1",attrs:{size:"mini",placeholder:"Tìm theo tên ... "},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("i",{staticClass:"fa-solid fa-magnifying-glass mr-2"})],1)])]),e("div",{staticStyle:{"max-height":"55vh","overflow-y":"auto"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.filteredTableData}},[e("el-table-column",{attrs:{prop:"fullName",label:"Họ và tên",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v("\n                    "+t._s(s.fullName)+"\n                  ")]}}],null,!1,2313614667)}),e("el-table-column",{attrs:{prop:"studentCode",label:"Mã sinh viên"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t._v("\n                    "+t._s(s.studentCode)+"\n                  ")]}}],null,!1,1976573979)}),e("el-table-column",{attrs:{prop:"isComplete",label:"Tình trạng"},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.row;return[a.isComplete?e("el-button",{staticClass:"p-1 w-40",attrs:{type:"success",plain:""}},[t._v("Hoàn thành")]):e("el-button",{staticClass:"p-1 w-40",attrs:{type:"danger",plain:""}},[t._v("Còn thiếu")])]}}],null,!1,988891654)})],1)],1)]),e("div",{staticClass:"todo",staticStyle:{"background-color":"white"}},[e("div",{staticClass:"head"},[e("h6",{staticClass:"font-weight-bold"},[t._v("TIẾN ĐỘ ")]),e("div",{staticClass:"d-flex align-items-center justify-content-end font-weight-bold"},[e("div",{staticClass:"d-flex align-items-center justify-content-end font-weight-bold"},[e("div",{staticClass:"d-flex justify-content-around"},[e("i",{staticClass:"fa-solid el-icon-refresh-left mr-3",on:{click:t.resetData}}),e("el-select",{staticClass:"input-select mr-3",attrs:{filterable:"",placeholder:"Khoa",size:"mini"},model:{value:t.selected2,callback:function(e){t.selected2=e},expression:"selected2"}},t._l(this.$store.getters.khoaList,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),e("el-input",{staticClass:"input-tk2 mr-1",attrs:{size:"mini",placeholder:"Tìm theo lớp ..."},model:{value:t.search2,callback:function(e){t.search2=e},expression:"search2"}}),e("i",{staticClass:"fa-solid fa-magnifying-glass mr-2"})],1)])]),e("div",{staticStyle:{"max-height":"54vh","overflow-y":"auto"}},[e("ul",{staticClass:"p-0"},t._l(t.filteredTableData2,(function(s){return e("li",{key:s.id,staticClass:"mt-4 rounded p-1",class:{"border border-primary bg":t.selectedItem===s.className},on:{click:function(e){return t.findClassByName(s.className)}}},[e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"text-info font-weight-bold"},[t._v(t._s(s.className))]),e("p",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.calculateStudentSummary(s)))])]),e("el-progress",{attrs:{"stroke-width":15,percentage:t.calculateIncompletePercentage(s),status:100==t.calculateIncompletePercentage(s)?"success":"exception"}})],1)})),0)])])])])])])]):t._e()},n=[],l=(s("7514"),s("ac6a"),s("f3e2"),s("2caf"),s("6762"),s("2fdb"),s("d25f"),s("72d7")),i=s("0c9f"),c={data:function(){return{loading:!1,listClass:[],listStudents:[],dataFilter:[],selectedItem:null,classTitle:"",selected:null,selected2:null,List:[{label:"Tất cả",value:null},{label:"Đã hoàn thành",value:!0},{label:"Còn thiếu",value:!1}],search:"",search2:"",studentList:[],listPhieu:[],selectedSemester:1,selectedSchoolYear:"",schoolYears:[]}},created:function(){"student"==this.$store.getters.user.role?this.$router.push({name:"post_main"}):this.generateSchoolYears()},computed:{getClassTitle:function(){return this.classTitle},getCountPhieu:function(){return this.listPhieu.filter((function(t){return!t.status})).length},getClassList:function(){var t=[];return this.listClass.filter((function(e){t.push(e.className)})),t},filteredTableData:function(){var t=this;return this.dataFilter.filter((function(e){var s=!t.search||e.fullName.toLowerCase().includes(t.search.toLowerCase()),a=null===t.selected||e.isComplete===t.selected;return s&&a}))},filteredTableData2:function(){var t=this;return this.listClass.filter((function(e){var s=!t.search2||e.className.toLowerCase().includes(t.search2.toLowerCase()),a=null===t.selected2||e.listStudents[0].department===t.selected2;return s&&a}))}},methods:{generateSchoolYears:function(){for(var t=(new Date).getFullYear(),e=2021,s=t,a=[],n=e;n<=s;n++){var l="".concat(n,"-").concat(n+1);a.push(l)}this.schoolYears=a,this.selectedSchoolYear=this.schoolYears[this.schoolYears.length-1],this.setSemesterBasedOnCurrentDate()},setSemesterBasedOnCurrentDate:function(){var t=(new Date).getMonth()+1;t>=1&&t<=6||(this.selectedSemester=2)},fetchConditionData:function(){var t=this;Object(l["b"])(this.selectedSemester,this.selectedSchoolYear).then((function(e){e&&e.data&&e.data.success?t.listPhieu=e.data.result:console.error("Không thành công: ",e.data)})).catch((function(t){console.error("Lỗi khi lấy danh sách phiếu điểm: ",t)}))},count:function(t){if(t&&Array.isArray(t.listStudents)){var e=t.listStudents.length,s=t.listStudents.filter((function(t){return t.isComplete})).length;if(s===e&&e>0)return 1}return 0},countComplete:function(){var t=this,e=0;return this.listClass.forEach((function(s){e+=t.count(s)})),this.totalCompleteClasses=e,e},calculateStudentSummary:function(t){if(t&&Array.isArray(t.listStudents)){var e=t.listStudents.length,s=t.listStudents.filter((function(t){return t.isComplete})).length;return"".concat(s,"/").concat(e)}return"0/0"},calculateIncompletePercentage:function(t){if(t&&Array.isArray(t.listStudents)){var e=t.listStudents.length,s=t.listStudents.filter((function(t){return t.isComplete})).length,a=0===e?0:s/e*100;return Math.round(a)}return 0},findClassByName:function(t){this.selected=this.search=null,this.selectedItem=t,this.classTitle=t;var e=this.listClass.find((function(e){return e.className==t}));this.dataFilter=e.listStudents},resetData:function(){this.selected2=null,this.search2=""},fetchStatisticData:function(){var t=this;this.dataFilter=[],this.selectedItem=null,Object(i["a"])(this.selectedSemester,this.selectedSchoolYear).then((function(e){e&&e.data&&e.data.success?(t.listClass=e.data.statistic,t.countComplete()):console.error("Không thành công: ",e.data)})).catch((function(t){console.error("Lỗi: ",t)}))}},watch:{selectedSemester:function(t,e){this.fetchConditionData(),this.fetchStatisticData()},selectedSchoolYear:function(t,e){this.fetchConditionData(),this.fetchStatisticData()}}},r=c,o=(s("c87b"),s("2877")),u=Object(o["a"])(r,a,n,!1,null,null,null);e["default"]=u.exports},c87b:function(t,e,s){"use strict";s("da51")},da51:function(t,e,s){}}]);