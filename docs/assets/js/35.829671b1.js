(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{405:function(t,r,e){"use strict";e.r(r);var a=e(42),d=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("d2-crud-plus 是基于 d2-admin 的 d2-crud 的扩展,旨在简化 d2-crud 配置，快速开发crud功能。"),e("br"),t._v("\nGithub: "),e("a",{attrs:{href:"https://github.com/greper/d2-crud-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/greper/d2-crud-plus"),e("OutboundLink")],1),e("br"),t._v("\nGitee: "),e("a",{attrs:{href:"https://gitee.com/greper/d2-crud-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/greper/d2-crud-plus"),e("OutboundLink")],1),e("br"),t._v("\n示例地址："),e("a",{attrs:{href:"http://preview.d2-crud-plus.docmirror.cn/D2CrudPlusExample/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://preview.d2-crud-plus.docmirror.cn/D2CrudPlusExample/index.html"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg",alt:"lerna"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/d2-projects/d2-admin",target:"_blank"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/d2-projects/d2-admin/master/docs/image/d2-admin%402x.png",width:"200"}})])]),t._v(" "),e("h2",{attrs:{id:"关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[t._v("#")]),t._v(" 关系")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("d2-crud")]),t._v(" : 官方的一个crud框架，使用起来相对繁琐，且已久不维护")]),t._v(" "),e("li",[e("code",[t._v("d2-crud-x")]),t._v(": fork"),e("code",[t._v("d2-crud")]),t._v("改造而来，威力加强版（修复bug，增强功能）")]),t._v(" "),e("li",[e("code",[t._v("d2-crud-plus")]),t._v(": 辅助"),e("code",[t._v("d2-crud-x")]),t._v("或"),e("code",[t._v("d2-crud")]),t._v("，让它们使用起来更简单")]),t._v(" "),e("li",[e("code",[t._v("d2-crud-plus-example")]),t._v(": 以"),e("code",[t._v("d2-admin")]),t._v("为基础的示例工程，可以单独复制此项目作为你的启动项目")]),t._v(" "),e("li",[e("code",[t._v("d2-crud-plus-extends")]),t._v(": 实用的扩展组件（文件上传组件、地区选择组件、树形选择组件等）")])]),t._v(" "),e("h2",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),e("h3",{attrs:{id:"_1-面向配置的crud编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-面向配置的crud编程"}},[t._v("#")]),t._v(" 1. 面向配置的crud编程")]),t._v(" "),e("ul",[e("li",[t._v("根据crud配置快速开发crud功能")])]),t._v(" "),e("h3",{attrs:{id:"_2-数据字典"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据字典"}},[t._v("#")]),t._v(" 2. 数据字典")]),t._v(" "),e("ul",[e("li",[t._v("支持本地和远程获取")]),t._v(" "),e("li",[t._v("配合select，轻松实现数据存的是value值，需要对应字典的label来展示的需求")])]),t._v(" "),e("h3",{attrs:{id:"_3-丰富的字段类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-丰富的字段类型"}},[t._v("#")]),t._v(" 3. 丰富的字段类型")]),t._v(" "),e("ul",[e("li",[t._v("通过配置字段类型“column.type”来简化配置")]),t._v(" "),e("li",[t._v("根据字段类型不同，自动生成不同的表单组件")]),t._v(" "),e("li",[t._v("支持自定义字段类型")])]),t._v(" "),e("h3",{attrs:{id:"_4-扩展组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-扩展组件"}},[t._v("#")]),t._v(" 4. 扩展组件")]),t._v(" "),e("p",[t._v("通过扩展自定义组件，扩展自定义类型")]),t._v(" "),e("h2",{attrs:{id:"请先了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请先了解"}},[t._v("#")]),t._v(" 请先了解")]),t._v(" "),e("p",[t._v("本项目基于d2-admin 以及 d2-crud"),e("br"),t._v("\n本文档假设您已熟悉vue、ElementUI 以及 d2-crud的基础知识")]),t._v(" "),e("h3",{attrs:{id:"_1-elementui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-elementui"}},[t._v("#")]),t._v(" 1. ElementUI")]),t._v(" "),e("p",[t._v("Github: "),e("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ElemeFE/element"),e("OutboundLink")],1),e("br"),t._v("\n文档："),e("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://element.eleme.cn/#/zh-CN/component/installation"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_2-d2-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-d2-admin"}},[t._v("#")]),t._v(" 2. d2-admin")]),t._v(" "),e("p",[t._v("Github: "),e("a",{attrs:{href:"https://github.com/d2-projects/d2-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/d2-projects/d2-admin"),e("OutboundLink")],1),e("br"),t._v("\n文档："),e("a",{attrs:{href:"https://d2.pub/zh/doc/d2-admin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d2.pub/zh/doc/d2-admin/"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_3-d2-crud-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-d2-crud-x"}},[t._v("#")]),t._v(" 3. d2-crud-x")]),t._v(" "),e("p",[t._v("文档："),e("RouterLink",{attrs:{to:"/d2-crud-x/"}},[t._v("d2-crud-x")])],1)])}),[],!1,null,null,null);r.default=d.exports}}]);