webpackJsonp([10],{"4jfe":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Dd8w"),r=e.n(s),i=e("NYxO"),l={name:"Column",computed:r()({},Object(i.b)(["user","articles"]),{userName:function(){return this.user&&this.user.name},userAvatar:function(){return this.user&&this.user.avatar},articleNum:function(){return this.articles?this.articles.length:0}})},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"blog-container"},[e("div",{staticClass:"blog-pages"},[e("router-view"),t._v(" "),e("div",{staticClass:"col-md-3 main-col pull-left"},[e("div",{staticClass:"panel panel-default corner-radius"},[e("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[e("div",{staticClass:"image blog-cover"},[e("router-link",{attrs:{to:"/"+t.userName}},[e("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:t.userAvatar}})])],1),t._v(" "),e("div",{staticClass:"blog-name"},[e("h4",[e("router-link",{attrs:{to:"/"+t.userName}},[t._v(t._s(t.userName)+" 的专栏")])],1)]),t._v(" "),e("hr"),t._v(" "),e("router-link",{attrs:{to:"/"+t.userName}},[e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"text-md fa fa-list-ul"}),t._v(" 专栏文章（"+t._s(t.articleNum)+"）")])])],1)])])],1)])},staticRenderFns:[]};var u=e("VU/8")(l,n,!1,function(t){e("kCjI")},"data-v-0744637c",null);a.default=u.exports},kCjI:function(t,a){}});
//# sourceMappingURL=10.c7b7de2735bb7f37fb52.js.map