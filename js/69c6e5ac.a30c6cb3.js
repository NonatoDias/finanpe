(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["69c6e5ac"],{"02b6":function(t,e,n){},a15f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"hHh Lpr lFf"}},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary"}},[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.toggleMenu()}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",[t._v("\n        Finanpe\n      ")])],1)],1),n("drawer"),n("q-page-container",{staticClass:"bg-grey-2"},[n("router-view")],1)],1)},o=[];a._withStripped=!0;var r=n("a60d"),i=function(t,e){if(r["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var n=window.open(t,"_blank");if(n)return n.focus(),n;e()},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-white menu-width":null},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("div",{attrs:{id:"profile"}},[n("img",{staticClass:"inline-block",attrs:{src:t.user.photo}}),n("div",{staticClass:"user-description"},[n("span",{staticClass:"span-title"},[t._v(t._s(t.user.name))]),n("span",{staticClass:"span-subtitle"},[t._v(t._s(t.user.login))]),n("q-btn",{staticClass:"btn-logout",attrs:{round:"",outline:"",size:"md",color:"primary",icon:"exit_to_app",title:"logout"},on:{click:t.logout}})],1)]),n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[t._l(t.links,function(e,a){return[n("div",{key:a},[n("q-list-header",[t._v(t._s(a))]),t._l(e.routes,function(e,a){return[n("q-item",{key:a,class:{"item-link":!0,active:t.isItemActive(e.route)},nativeOn:{click:function(n){t.goTo(e.route)}}},[n("q-item-side",{attrs:{icon:e.materialIcon}}),n("q-item-main",{attrs:{label:e.name}})],1)]})],2)]})],2)],1)},l=[];s._withStripped=!0;n("7f7f");var u={name:"Drawer",data:function(){return{currentPath:this.$router.currentRoute.path,user:{name:"",login:"",photo:"statics/user/unknown.jpg"},leftDrawerOpen:this.$q.platform.is.desktop,links:{"Início":{routes:[{route:"/",materialIcon:"home",name:"Painel Geral"},{route:"/reports",faIcon:"fa fa-home",materialIcon:"insert_chart",name:"Relatórios"}]},"Definições":{routes:[{route:"/profile",faIcon:"fa fa-bell-o",materialIcon:"perm_identity",name:"Perfil"},{route:"/my-goals",faIcon:"fa fa-bell-o",materialIcon:"thumb_up",name:"Minhas Metas"},{route:"/alerts",faIcon:"fa fa-bell-o",materialIcon:"notifications_active",name:"Alertas"},{route:"/category-all",faIcon:"fa fa-cog",materialIcon:"build",name:"Ajuste de categorias"}]}}}},mounted:function(){var t=localStorage.getItem("usersession");if(t&&t.length){var e=JSON.parse(t);this.user.name=e.name,this.user.login=e.login,e.photo&&e.photo.length&&(this.user.photo=e.photo)}},methods:{toggleMenu:function(){this.leftDrawerOpen=!this.leftDrawerOpen},isItemActive:function(t){return this.currentPath===t},goTo:function(t){this.currentPath=t,this.$router.push(t),console.log()},logout:function(){this.$router.push("/login")}}},c=u,f=(n("b29b"),n("ada8"),n("2877")),p=Object(f["a"])(c,s,l,!1,null,"af75eaf4",null);p.options.__file="Drawer.vue";var m=p.exports,h={name:"MyLayout",computed:{toggleMenu:function(){return this.$children[0].$children[3].toggleMenu}},methods:{openURL:i},components:{Drawer:m}},d=h,g=(n("ff9f"),Object(f["a"])(d,a,o,!1,null,null,null));g.options.__file="MainLayout.vue";e["default"]=g.exports},ada8:function(t,e,n){"use strict";var a=n("dab6"),o=n.n(a);o.a},b29b:function(t,e,n){"use strict";var a=n("02b6"),o=n.n(a);o.a},c309:function(t,e,n){},dab6:function(t,e,n){},ff9f:function(t,e,n){"use strict";var a=n("c309"),o=n.n(a);o.a}}]);