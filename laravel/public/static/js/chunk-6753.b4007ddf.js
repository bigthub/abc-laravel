(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6753"],{"7Sgc":function(e,r,t){},GMaQ:function(e,r,t){"use strict";t.r(r);var n=t("xAVR"),o={data:function(){return{form:{name:"",keywords:"",description:"",sort:"100",loading:!1},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],keywords:[{required:!0,message:"请输入关键词",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}]},redirect:"/category"}},methods:{onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.loading=!0,Object(n.d)(r.form).then(function(e){r.loading=!1,200===e.code?(r.$message({message:"操作成功",type:"success"}),r.$router.push({path:r.redirect||"/"})):r.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()}}},a=(t("fXbX"),t("KHd+")),i=Object(a.a)(o,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"栏目名称",prop:"name"}},[t("el-input",{model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[t("el-input",{model:{value:e.form.keywords,callback:function(r){e.$set(e.form,"keywords",r)},expression:"form.keywords"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"描述",prop:"description"}},[t("el-input",{model:{value:e.form.description,callback:function(r){e.$set(e.form,"description",r)},expression:"form.description"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"sort"}},[t("el-col",{attrs:{span:6}},[t("el-input",{model:{value:e.form.sort,callback:function(r){e.$set(e.form,"sort",r)},expression:"form.sort"}})],1),e._v("\n      取值范围 【-128 到 128】 的整数，数值越小越靠前\n      "),t("el-col",{attrs:{span:18}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"2ffa6d9f",null);i.options.__file="add.vue";r.default=i.exports},fXbX:function(e,r,t){"use strict";var n=t("7Sgc");t.n(n).a},xAVR:function(e,r,t){"use strict";t.d(r,"c",function(){return o}),t.d(r,"d",function(){return a}),t.d(r,"b",function(){return i}),t.d(r,"e",function(){return s}),t.d(r,"a",function(){return c}),t.d(r,"f",function(){return u});var n=t("t3Un");function o(e){return Object(n.a)({url:"/api/category",method:"get",params:e})}function a(e){return n.a.post("/api/category",e)}function i(e){return n.a.get("/api/category/"+e)}function s(e,r){return n.a.patch("/api/category/"+e,r)}function c(e){return n.a.delete("/api/category/"+e)}function u(e){return Object(n.a)({url:"/api/category_search",method:"get",params:e})}}}]);