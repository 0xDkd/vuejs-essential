webpackJsonp([8],{"/hgY":function(t,a){},"zln+":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Dd8w"),l=s.n(e),i=s("NYxO"),r={name:"List",computed:l()({},Object(i.b)(["auth","user","articles"]))},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-9 left-col pull-right"},[s("div",{staticClass:"panel article-body article-index"},[s("div",{staticClass:"panel-body"},[s("h1",{staticClass:"all-articles"},[t._v("\n        专栏文章\n        "),t.auth?s("router-link",{staticClass:"btn btn-primary pull-right",attrs:{to:"/articles/create"}},[s("i",{staticClass:"fa fa-paint-brush"}),t._v("\n          创作文章\n        ")]):t._e()],1),t._v(" "),s("ul",{staticClass:"list-group"},t._l(t.articles,function(a){return s("li",{staticClass:"list-group-item"},[t.user?s("img",{staticClass:"avatar avatar-small",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),s("router-link",{staticClass:"title",attrs:{to:"/articles/"+a.articleId+"/content"}},[t._v("\n            "+t._s(a.title)+"\n          ")]),t._v(" "),s("span",{staticClass:"meta pull-right"},[s("span",{staticClass:"timeago"},[t._v(t._s(t._f("moment")(a.date,"from")))])])],1)}))])])])},staticRenderFns:[]};var c=s("VU/8")(r,n,!1,function(t){s("/hgY")},"data-v-3c1ab513",null);a.default=c.exports}});
//# sourceMappingURL=8.5f02e9c7b6f3bc6a7a35.js.map