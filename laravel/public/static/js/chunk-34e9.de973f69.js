(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34e9"],{"PnZ/":function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"e",function(){return s}),r.d(t,"a",function(){return i}),r.d(t,"f",function(){return u});var a=r("t3Un");function n(e){return Object(a.a)({url:"/api/api_param",method:"get",params:e})}function o(e){return a.a.post("/api/api_param",e)}function l(e){return a.a.get("/api/api_param/"+e)}function s(e,t){return a.a.patch("/api/api_param/"+e,t)}function i(e){return a.a.delete("/api/api_param/"+e)}function u(e){return Object(a.a)({url:"/api/api_param_search",method:"get",params:e})}},UFvN:function(e,t,r){"use strict";var a=r("rAUB");r.n(a).a},"eR/3":function(e,t,r){"use strict";r.r(t);var a=r("PnZ/"),n={data:function(){return{form:{name:"",url:"",param:"",result:"",is_need:!1,state:!0,website:"",method:"get",loading:!1},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],url:[{required:!0,message:"请输入接口地址",trigger:"blur"}],param:[{required:!0,message:"请输入接口参数",trigger:"blur"}],result:[{required:!0,message:"请输入结果集 result",trigger:"blur"}],is_need:[{required:!0,message:"请选择是否处理",trigger:"blur"}]},redirect:"/api_param/index"}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,Object(a.d)(t.form).then(function(e){t.loading=!1,200===e.code?(t.$message({message:"操作成功",type:"success"}),t.$router.push({path:t.redirect||"/"})):t.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()}}},o=(r("UFvN"),r("KHd+")),l=Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"接口名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"接口地址",prop:"url"}},[r("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"接口参数",prop:"param"}},[r("el-input",{model:{value:e.form.param,callback:function(t){e.$set(e.form,"param",t)},expression:"form.param"}}),e._v(" "),r("span",[e._v("(多个参数请用英文 , 分割；如： realname,mobile,idcard)")])],1),e._v(" "),r("el-form-item",{attrs:{label:"结果集 result",prop:"result"}},[r("el-input",{model:{value:e.form.result,callback:function(t){e.$set(e.form,"result",t)},expression:"form.result"}}),e._v(" "),r("span",[e._v("(多个参数请用英文 , 分割；如： res,msg)")])],1),e._v(" "),r("el-form-item",{attrs:{label:"是否处理",prop:"is_need"}},[r("el-switch",{model:{value:e.form.is_need,callback:function(t){e.$set(e.form,"is_need",t)},expression:"form.is_need"}}),e._v(" "),r("br"),e._v(" "),r("span",[e._v("(开启后，输出的 Excel 最后一栏将根据 result 字段 res 1 展示一致 2 不一致)")])],1),e._v(" "),r("el-form-item",{attrs:{label:"网址",prop:"website"}},[r("el-input",{model:{value:e.form.website,callback:function(t){e.$set(e.form,"website",t)},expression:"form.website"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"请求方式",prop:"method"}},[r("el-select",{attrs:{placeholder:"请选择接口","value-key":"name"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method",t)},expression:"form.method"}},[r("el-option",{key:"1",attrs:{label:"get",value:"get"}},[r("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v("get")])]),e._v(" "),r("el-option",{key:"2",attrs:{label:"post",value:"post"}},[r("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v("post")])])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"是否启用"}},[r("el-switch",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"ccfe2d7a",null);l.options.__file="add.vue";t.default=l.exports},rAUB:function(e,t,r){}}]);