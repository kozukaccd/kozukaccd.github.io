(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("6570a8f6",content,!0,{sourceMap:!1})},181:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=r(58),c=r(98),l=r.n(c),d=r(247),f=r(248),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("nuxt"),this._v(" "),e("v-footer",{attrs:{absolute:!this.fixed,app:""}},[e("span",[this._v("© "+this._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VFooter:f.a})},189:function(t,e,r){r(190),t.exports=r(191)},216:function(t,e,r){"use strict";r(164)},217:function(t,e,r){(e=r(51)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},41:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(216),r(58)),c=r(98),l=r.n(c),d=r(247),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[189,5,2,6]]]);