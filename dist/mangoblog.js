!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e){t.exports=Vue},function(t,e,n){"use strict";var i=n(0);n.n(i).a},function(t,e,n){"use strict";var i=n(1);n.n(i).a},function(t,e,n){"use strict";var i=n(2);n.n(i).a},function(t,e,n){"use strict";var i=n(3);n.n(i).a},function(t,e,n){"use strict";var i=n(4);n.n(i).a},function(t,e){t.exports=Oidc},function(t,e,n){"use strict";var i=n(5);n.n(i).a},function(t,e,n){"use strict";var i=n(6);n.n(i).a},function(t,e,n){"use strict";var i=n(7);n.n(i).a},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(8),o=n.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-context"},[n("div",{class:["#admin"!=t.hash?"context":""]},[n("homePage",{directives:[{name:"show",rawName:"v-show",value:"#home"==t.hash,expression:"hash == '#home'"}]}),t._v(" "),t.hash.search("#article")>=0?n("div",[n("articlePage")],1):t._e(),t._v(" "),"#admin"==t.hash?n("adminPage"):t._e(),t._v(" "),"#profile"==t.hash?n("profilePage"):t._e()],1),t._v(" "),n("div",[n("div",{staticClass:"blog-footer"},[n("span",{staticStyle:{"margin-left":"40px"}},[n("a",{attrs:{href:"https://github.com/HahaMango/Mango-Blog-",target:"_blank"}},[n("ion-icon",{attrs:{name:"logo-github"}})],1),n("i",[t._v("Power By .Net Core")])])])])])};s._withStripped=!0;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-background"}},[n("div",{staticClass:"row",attrs:{id:"home-title"}},[n("span",{staticClass:"col-sm-3"},[t._v("Chiva")]),t._v(" "),n("div",{staticClass:"col-sm-3"}),t._v(" "),n("div",{staticClass:"col-sm-2"}),t._v(" "),n("div",{staticClass:"col-sm-2"}),t._v(" "),n("div",{staticClass:"col-sm-2"},[n("button",{staticClass:"btn btn-light",attrs:{id:"profile-button"},on:{click:t.ProfileClick}},[n("ion-icon",{attrs:{name:"bookmark"}}),t._v("Profile\n            ")],1)])]),t._v(" "),n("div",{attrs:{id:"home-context"}},t._l(t.articles,(function(t){return n("articleItem",{key:t.Href,attrs:{pagetitle:t.Title,describe:t.Describe,href:t.Href,read:t.Read,like:t.Like,comment:t.Comment}})})),1)])};a._withStripped=!0;var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-item",attrs:{onmouseover:"this.className='article-item-hold'",onmouseout:"this.className='article-item'"}},[n("div",{staticClass:"item-border"},[n("a",{attrs:{href:t.href}},[n("div",[n("h2",[t._v(t._s(t.pagetitle))]),t._v(" "),n("span",{staticStyle:{display:"block","margin-bottom":"10px"}},[t._v(t._s(t.describe))]),t._v(" "),n("articleInfo",{staticClass:"article-item-info",attrs:{read:t.read,like:t.like,comment:t.comment}})],1)])])])};r._withStripped=!0;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("ion-icon",{attrs:{name:"heart"}}),t._v(t._s(t.like))],1),t._v(" "),n("span",[n("ion-icon",{attrs:{name:"book"}}),t._v(t._s(t.read))],1),t._v(" "),n("span",[n("ion-icon",{attrs:{name:"chatboxes"}}),t._v(t._s(t.comment))],1)])};c._withStripped=!0;function l(t,e,n,i,o,s,a,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):o&&(c=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var u=l({props:["read","like","comment"]},c,[],!1,null,null,null);u.options.__file="src/components/ArticleInfo.vue";var d=u.exports,m={props:["pagetitle","describe","href","read","like","comment"],components:{articleInfo:d},methods:{}},p=(n(9),l(m,r,[],!1,null,null,null));p.options.__file="src/components/ArticleItem.vue";var v=p.exports;var h=class{constructor(t,e,n,i,o,s,a,r){this.Title=t,this.Describe=e,this.Href=n,this.Read=i,this.Like=o,this.Comment=s,this.Category=a,this.Date=r}};var f=class{constructor(t,e,n){this.ArticleId=t,this.Content=e,this.ContentType=n}};var g=class{constructor(t,e,n,i){this.Id=t,this.UserName=e,this.Comment=n,this.Date=i}};let _="/api/";var w=function(t,e){let n=new XMLHttpRequest;n.open("GET",_+"articles/"+t,!0),n.setRequestHeader("Access-Control-Allow-Origin","*"),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText),i=t.date.replace("T"," ").split(".")[0],o=new h(t.title,t.describe,"#article"+t.id,t.read,t.like,t.comment,t.category,i);e(o)}},n.send()},C=function(t,e,n){let i=new XMLHttpRequest;i.open("GET",_+"articles/"+t+"/"+e,!0),i.setRequestHeader("Access-Control-Allow-Origin","*"),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){for(var t=JSON.parse(i.responseText),e=new Array,o=0;o<t.length;o++){var s=t[o],a=s.date.replace("T"," ").split(".")[0],r=new h(s.title,s.describe,"#article"+s.id,s.read,s.like,s.comment,s.category,a);e.push(r)}n(e)}},i.send()},y=function(t,e){let n=new XMLHttpRequest;n.open("GET",_+"articles/content/"+t,!0),n.setRequestHeader("Access-Control-Allow-Origin","*"),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText),i=new f(t.articleId,t.content,t.contentType);e(i)}},n.send()},b=function(t,e){let n=new XMLHttpRequest;n.open("PUT",_+"articles/like/"+t,!0),n.setRequestHeader("Access-Control-Allow-Origin","*"),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){4==n.readyState&&200==n.status&&e()},n.send()},S=function(t,e){let n=new XMLHttpRequest;n.open("PUT",_+"articles/read/"+t,!0),n.setRequestHeader("Access-Control-Allow-Origin","*"),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){4==n.readyState&&200==n.status&&e()},n.send()},x=function(t,e,n,i){let o=new XMLHttpRequest;o.open("GET",_+"comments/article/"+t+"/"+e+"/"+n,!0),o.setRequestHeader("Access-Control-Allow-Origin","*"),o.setRequestHeader("Accept","application/json"),o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){for(var t=JSON.parse(o.responseText),e=new Array,n=0;n<t.length;n++){var s=t[n],a=s.date.replace("T"," ").split(".")[0],r=new g(s.id,s.userName,s.comment,a);e.push(r)}i(e)}},o.send()},k=function(t,e,n){let i=new XMLHttpRequest;i.open("POST",_+"articles",!0),i.setRequestHeader("Access-Control-Allow-Origin","*"),i.setRequestHeader("Accept","application/json"),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Authorization","Bearer "+e);var o=JSON.stringify(t);i.onreadystatechange=function(){4==i.readyState&&200==i.status&&n(),4==i.readyState&&i.status>=400&&alert("文章发布失败")},i.send(o)},T=function(t,e,n){let i=new XMLHttpRequest;i.open("POST",_+"comments/article/"+t,!0),i.setRequestHeader("Access-Control-Allow-Origin","*"),i.setRequestHeader("Accept","application/json"),i.setRequestHeader("Content-Type","application/json");var o=JSON.stringify(e);i.onreadystatechange=function(){4==i.readyState&&200==i.status&&n()},i.send(o)};let P=null;var H={data:()=>({articles:[]}),created:function(){P=this,C(0,10,(function(t){for(var e=0;e<t.length;e++)P.articles.push(t[e])}))},components:{articleItem:v},methods:{ProfileClick:function(){window.location.hash="#profile"}}},A=(n(10),l(H,a,[],!1,null,null,null));A.options.__file="src/components/page/HomePage.vue";var R=A.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"article-background"}},[n("div",{attrs:{id:"article-head"}},[n("span",[n("a",{attrs:{href:"#home"}},[n("span",[n("ion-icon",{attrs:{name:"arrow-round-back"}})],1)]),t._v(" "),n("span",[t._v("Chiva")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{attrs:{id:"article-title"}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",{attrs:{id:"article-subtitle"}},[n("articleInfo",{staticStyle:{float:"right"},attrs:{read:t.read,like:t.like,comment:t.comment}}),t._v(" "),n("p",[t._v(t._s(t.date))])],1),t._v(" "),n("div",{attrs:{id:"editor"}})]),t._v(" "),n("hr"),t._v(" "),n("div",[0!=t.commentItems.length?n("div",[n("h3",[t._v("评论")]),t._v(" "),t._l(t.commentItems,(function(e){return n("commentItem",{key:e.Id,staticClass:"commentitem-test",attrs:{username:e.UserName,comment:e.Comment,date:e.Date},on:{reply:t.ClickEvent}})})),t._v(" "),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"20px"}},[n("button",{attrs:{id:"more-comment"},on:{click:t.GetMoreComment}},[t._v("更多 "),n("ion-icon",{attrs:{name:"arrow-dropdown"}})],1)])],2):t._e(),t._v(" "),n("comment",{attrs:{id:"comment-test"},on:{CommentClick:t.commentClick}})],1),t._v(" "),n("div",{attrs:{id:"like-div"}},[n("button",{staticClass:"btn btn-light",attrs:{id:"to-top-button"},on:{click:t.ToTopButton}},[n("ion-icon",{attrs:{name:"arrow-round-up"}})],1),t._v(" "),n("button",{staticClass:"btn btn-light",attrs:{id:"like-button"},on:{click:t.LikeButton}},[n("ion-icon",{attrs:{name:"heart-empty"}})],1)])])};D._withStripped=!0;var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"comment-background"}},[n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{maxlength:"300",id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"row",attrs:{id:"comment-userinfo"}},[n("div",{staticClass:"col-sm-6"}),t._v(" "),n("label",{staticClass:"col-sm-2 col-form-label"},[t._v("用户名:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"col-sm-2 form-control",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("div",{staticClass:"col-sm-2"},[n("button",{staticClass:"btn btn-primary",on:{click:t.commentClick}},[t._v("评论")])])])])};E._withStripped=!0;var O={data:()=>({username:"",text:""}),methods:{commentClick:function(){this.$emit("CommentClick",this.username,this.text),this.username="",this.text=""}}},q=(n(11),l(O,E,[],!1,null,null,null));q.options.__file="src/components/Comment.vue";var I=q.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-item"},[n("p",[n("b",[t._v(t._s(t.username))])]),t._v(" "),n("p",[t._v(t._s(t.comment))]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:t.clicka}},[n("span",[n("ion-icon",{attrs:{name:"undo"}})],1)]),t._v(" "),n("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.date))])])};L._withStripped=!0;var M={props:["username","comment","date"],methods:{clicka:function(t){this.$emit("reply",username)}}},N=(n(12),l(M,L,[],!1,null,null,null));N.options.__file="src/components/CommentItem.vue";var $=N.exports,j={Plues8ToLocal:function(t){var e=(new Date).getTimezoneOffset(),n=t.getTime();return new Date(n+60*e*1e3+288e5)},LocalToPlues8:function(t){var e=t.getTime(),n=t.getTimezoneOffset();return new Date(e+60*n*1e3+288e5)},Plues8ToLocalString:function(t){var e=this.Plues8ToLocal(t);return this.Date2String(e)},LocalToPlues8String:function(t){var e=this.LocalToPlues8(t);return this.Date2String(e)},Plues8StringToLocalString:function(t){var e=this.String2Date(t);e=this.Plues8ToLocal(e);return this.Date2String(e)},LocalStringToPlues8String:function(t){var e=this.String2Date(t);return e=this.LocalToPlues8(e),this.Date2String(e)},Date2String:function(t){var e=t.getFullYear().toString(),n=t.getMonth()+1,i=t.getDate();return e=(e=e+"-"+(n=n<10?"0"+n.toString():n.toString())+"-"+(i=i<10?"0"+i.toString():i.toString())+" ")+t.getHours().toString()+":"+t.getMinutes().toString()+":"+t.getSeconds().toString()},String2Date:function(t){var e=t.split(".")[0],n=(e=e.split(" "))[0].split("-"),i=e[1].split(":"),o=n[0],s=n[1]-1,a=n[2],r=i[0],c=i[1],l=i[2];return new Date(o,s,a,r,c,l,0)}};let B=null;var X={data:()=>({id:null,title:null,date:null,content:null,read:0,like:0,comment:0,commentItems:[],replyText:"",currentDate:new Date}),created:function(){B=this;var t=window.location.hash;t=t.slice(8,t.length),B.id=t,w(t,(function(e){B.id=t,B.title=e.Title,B.date=e.Date,B.read=e.Read,B.like=e.Like,B.comment=e.Comment})),y(t,(function(t){B.content=t.Content;editormd.markdownToHTML("editor",{markdown:B.content,padding:"0px"});S(B.id,(function(){B.read=B.read+1}))}));var e=j.LocalToPlues8String(new Date);B.currentDate=e,x(t,e,10,(function(t){for(var e=0;e<t.length;e++)B.commentItems.push(t[e])}))},mounted:function(){var t=document.getElementById("like-div"),e=document.body.clientWidth,n=document.documentElement.scrollTop;t.style.left=e-100+"px",t.style.top=n+400+"px",t.style.position="absolute",t.style.width="50px",t.style.height="130px",window.onscroll=function(){n=document.documentElement.scrollTop,t.style.top=n+400+"px"}},methods:{ClickEvent:function(t){window.alert(t)},commentClick:function(t,e){var n=new g("",t,e,j.LocalToPlues8String(new Date));T(this.id,n,(function(){B.commentItems.unshift(n)}))},ToTopButton:function(){document.documentElement.scrollTop=0},LikeButton:function(){b(this.id,(function(){B.like=B.like+1,alert("点赞成功")}))},GetMoreComment:function(){var t=B.commentItems.length-1;B.currentDate=B.commentItems[t].Date,x(B.id,B.currentDate,10,(function(t){for(var e=0;e<t.length;e++)B.commentItems.push(t[e])}))}},components:{articleInfo:d,comment:I,commentItem:$}},U=(n(13),l(X,D,[],!1,null,null,null));U.options.__file="src/components/page/ArticlePage.vue";var G=U.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isAuthentication,expression:"isAuthentication"}],attrs:{id:"editor-div"}},[t._m(0),t._v(" "),n("div",{attrs:{id:"editor-title"}},[n("div",{staticClass:"row"},[n("span",{staticClass:"col-sm-2"},[t._v("文章标题：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"col-sm-8 mango-text-input",attrs:{type:"text",maxlength:"100",placeholder:"请填写文章标题..."},domProps:{value:t.title},on:{keyup:function(e){return t.TitleChange(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[n("span",{staticClass:"col-sm-2"},[t._v("文章简述：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.describe,expression:"describe"}],staticClass:"col-sm-8 mango-text-input",attrs:{type:"text",maxlength:"300",placeholder:"请填写文章简述内容..."},domProps:{value:t.describe},on:{keyup:function(e){return t.DescChange(e)},input:function(e){e.target.composing||(t.describe=e.target.value)}}}),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[n("span",{staticClass:"col-sm-2"},[t._v("文章分类：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"col-sm-8 mango-text-input",attrs:{type:"text",placeholder:"请填写文章分类..."},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})])]),t._v(" "),n("div",{attrs:{id:"editor"}}),t._v(" "),n("div",{attrs:{id:"editor-button-div"}},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.publishClick}},[t._v("发布")])]),t._v(" "),n("div",{attrs:{id:"editor-bit"}})])};J._withStripped=!0;var z=class{constructor(t,e,n,i,o){this.Title=t,this.Describe=e,this.Category=n,this.Content=i,this.ContentType=o}};n(14);let F=null;var V=function(){if(null!=F)return F;var t={authority:"https://user.hahamango.cn",client_id:"blogjs",redirect_uri:"https://www.hahamango.cn/callback.html",response_type:"id_token token",scope:"openid profile mangoblogApi mango.profile",post_logout_redirect_uri:"https://www.hahamango.cn",userStore:new Oidc.WebStorageStateStore({store:window.sessionStorage})};return F=new Oidc.UserManager(t),F};let W=null;var Y={data:()=>({editorHeight:500,editor:null,title:null,describe:null,category:null,content:null,contentType:"md",isAuthentication:!1}),created:function(){console.log("初始化");let t=this;var e=V();e.getUser().then((function(n){n?(W=n,null!=W.profile.role&&"ADMIN"==W.profile.role?(t.isAuthentication=!0,console.log("用户验证通过")):window.location.href="/"):(e.signinRedirect(),console.log("登陆请求"))}))},mounted:function(){var t=document.documentElement.clientHeight;t-=350,this.editorHeight=t;var e=editormd("editor",{width:"100%",height:this.editorHeight+"px",path:"editor.md/lib/"});this.editor=e},methods:{publishClick:function(){this.content=this.editor.getMarkdown();var t=new z(this.title,this.describe,this.category,this.content,this.contentType);k(t,W.access_token,(function(){alert("文章发布成功")}))},TitleChange:function(t){var e=document.getElementById("title-count");t=t.target.value;e.innerText=t.length},DescChange:function(t){var e=document.getElementById("describe-count");t=t.target.value;e.innerText=t.length}}},K=(n(15),l(Y,J,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"editor-head"}},[e("span",[this._v("Chiva")]),this._v(" "),e("span",[e("i",[this._v("blog")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-2"},[e("span",{attrs:{id:"title-count"}},[this._v("0")]),this._v("/100\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-2"},[e("span",{attrs:{id:"describe-count"}},[this._v("0")]),this._v("/300\n      ")])}],!1,null,null,null));K.options.__file="src/components/page/AdminPage.vue";var Q=K.exports,Z=function(){var t=this.$createElement;this._self._c;return this._m(0)};Z._withStripped=!0;var tt={mounted:function(){editormd.markdownToHTML("editor",{markdown:"### **姓名：陈子华**\n\n#### **学历：大专 佛山职业技术学院**\n\n#### **专业：电气自动化**\n\nEmail：q932104843@outlook.com\n\nGithub：https://github.com/HahaMango\n\n微信公众号：ChivaStudio\n\n***\n\n该网站是本人业余时间从后端到前端重头自己搭建的，平时空闲会写写一些技术分享文章，希望大家喜欢。\n\n本人目前在广州工作，曾从事大型机械设备程序的开发（PLC），目前在广州从事软件开发工作。比较擅长`.Net`，`.Net Core`平台的开发。如有工作需要可以发邮件到上面我的邮箱里面。",padding:"0px"})}},et=(n(16),l(tt,Z,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-title"},[e("h1",[this._v("Profile")]),this._v(" "),e("div",{attrs:{id:"editor"}})])}],!1,null,null,null));et.options.__file="src/components/page/ProfilePage.vue";var nt={props:["hash"],components:{homePage:R,articlePage:G,adminPage:Q,profilePage:et.exports}},it=(n(17),l(nt,s,[],!1,null,null,null));it.options.__file="src/components/MangoBlog.vue";var ot=it.exports,st=(n(18),new o.a({el:"#mangoblog",data:{herfhash:"#home"},render(t){return window.location.hash=this.herfhash,t(ot,{props:{hash:this.herfhash}})}}));window.onhashchange=function(){st.herfhash=window.location.hash}}]);