(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4fe8":"b033b803","chunk-2d0b61e5":"9b73fcc7","chunk-2d0b95e7":"e44e4383","chunk-2d0d5fc4":"b2803319","chunk-2d21f4d9":"a50b8a6e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tsd-opener/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"15d5":function(e,t,n){"use strict";var r=n("a2b8"),a=n.n(r);a.a},4398:function(e,t,n){"use strict";var r=n("894d"),a=n.n(r);a.a},"5f9f":function(e,t,n){},"894d":function(e,t,n){},a1e6:function(e,t,n){"use strict";var r=n("5f9f"),a=n.n(r);a.a},a2b8:function(e,t,n){},cd14:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("router-view")],1)},o=[],i=n("d4ec"),c=n("99de"),u=n("7e84"),l=n("262e"),s=n("9ab4"),d=n("60a3"),f=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(d["c"]);f=Object(s["a"])([d["a"]],f);var p=f,b=p,h=n("2877"),v=n("6544"),m=n.n(v),O=n("a523"),j=Object(h["a"])(b,a,o,!1,null,null,null),y=j.exports;m()(j,{VContainer:O["a"]});var x=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h3",[e._v("開幕直後の7ミノで組めるTSD一覧")]),n("v-container",[e._v(" 「ツモ順」と「そのツモ順で組めるTSDの地形」が載っています。"),n("br"),e._v(" 比較的、ページが重いのでご注意ください。 ")]),n("h4",[e._v("メニューの説明")]),n("ul",{staticClass:"menu-description"},[n("li",[e._v("Softdrop = オンのとき、Tミノ以外でソフトドロップが必要な地形も表示します")]),n("li",[e._v("Hold = オンのとき、Tミノ以外をホールドしないと組めない地形も表示します")]),n("li",[e._v("AirTSD = オンのとき、Tミノが地面から離れている地形も表示します")]),n("li",[e._v("Mirror = オンのとき、左右対称の地形をフィルターせずにそのまま表示します")])]),n("v-container",[n("router-link",{attrs:{to:"/main"}},[e._v("メイン画面にすすむ")])],1)],1)},g=[],_=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(r["default"]);_=Object(s["a"])([d["a"]],_);var C=_,S=C,T=(n("15d5"),Object(h["a"])(S,k,g,!1,null,"1b233603",null)),w=T.exports;m()(T,{VContainer:O["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",[e._v("TSD Opener")]),n("v-spacer"),n("div",{staticClass:"checkbox"},[n("v-checkbox",{attrs:{label:"Softdrop"},model:{value:e.softdrop,callback:function(t){e.softdrop=t},expression:"softdrop"}})],1),n("div",{staticClass:"checkbox"},[n("v-checkbox",{attrs:{label:"Hold"},model:{value:e.hold,callback:function(t){e.hold=t},expression:"hold"}})],1),n("div",{staticClass:"checkbox"},[n("v-checkbox",{attrs:{label:"AirTSD"},model:{value:e.airTSD,callback:function(t){e.airTSD=t},expression:"airTSD"}})],1),n("div",{staticClass:"checkbox"},[n("v-checkbox",{attrs:{label:"Mirror"},model:{value:e.mirror,callback:function(t){e.mirror=t},expression:"mirror"}})],1)],1),n("v-content",[n("ListPanel",{attrs:{harddrop:!e.softdrop,hold:e.hold,airTSD:e.airTSD,mirror:e.mirror}})],1)],1)},P=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-text-field",{attrs:{label:"filtering"},model:{value:e.suffix,callback:function(t){e.suffix=t},expression:"suffix"}}),null!=this.items&&null!=this.fumens?n("v-container",e._l(this.items,(function(t,r){return""===e.suffix||t.name.startsWith(e.suffixUpperCase)?n("div",{key:t.name,class:"panel"+r%2},[n("div",{on:{click:function(t){return e.onClick(r)}}},[e._v(" "+e._s(t.name)+" ["+e._s(t.indexes.length)+"] ")]),e.selectedIndex===r?n("v-container",[n("ImagesPanel",{attrs:{indexes:t.indexes,fumens:e.fumens,maxWidth:"150",airTSD:e.airTSD}}),n("div",{staticClass:"close-panel",on:{click:function(t){return e.onClick(r)}}},[e._v(" Close ")])],1):e._e()],1):e._e()})),0):e._e(),null!=this.message?n("v-container",[e._v(" Loading... ")]):e._e()],1)},E=[],I=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("d81d"),n("4e82"),n("0d03"),n("b64b"),n("d3b7"),n("25f0"),n("6062"),n("3ca3"),n("ddb0"),n("4795"),n("bee2")),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},e._l(this.indexes,(function(t){return n("div",{key:t,staticClass:"field-card"},[n("a",{attrs:{href:"https://harddrop.com/fumen/?v115@"+e.fumens[t].data,target:"_blank"}},[n("v-img",{attrs:{alt:"field"+e.padding(t,3),src:"figs/"+e.padding(t,3)+".png","max-width":e.maxWidth}})],1)])})),0)},A=[],H=(n("fb6a"),function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(I["a"])(t,[{key:"padding",value:function(e,t){return("000"+e).slice(-t)}}]),t}(r["default"]));Object(s["a"])([Object(d["b"])()],H.prototype,"indexes",void 0),Object(s["a"])([Object(d["b"])()],H.prototype,"fumens",void 0),Object(s["a"])([Object(d["b"])()],H.prototype,"maxWidth",void 0),H=Object(s["a"])([d["a"]],H);var L=H,$=L,W=(n("a1e6"),n("adda")),U=Object(h["a"])($,M,A,!1,null,"37539d5a",null),J=U.exports;function q(e,t){return e?t?n.e("chunk-2d0d5fc4").then(n.t.bind(null,"712f",3)):n.e("chunk-2d0b61e5").then(n.t.bind(null,"1c96",3)):t?n.e("chunk-2d21f4d9").then(n.t.bind(null,"d8f5",3)):n.e("chunk-2d0b95e7").then(n.t.bind(null,"333d",3))}function B(){return n.e("chunk-2d0a4fe8").then(n.t.bind(null,"098a",3)).then((function(e){return e.fumens.map((function(e){return{data:e[0],mirror:e[1]}}))}))}m()(U,{VImg:W["a"]});var F=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.items=null,e.fumens=null,e.selectedIndex=-1,e.suffix="",e.message=null,e}return Object(l["a"])(t,e),Object(I["a"])(t,[{key:"created",value:function(){this.reload()}},{key:"onChangedHold",value:function(){this.reload()}},{key:"onChangedHarddrop",value:function(){this.reload()}},{key:"onChangedAirTSD",value:function(){this.reload()}},{key:"onChangedMirror",value:function(){this.reload()}},{key:"reload",value:function(){var e=this;this.fumens=null,this.items=null,this.message="Loading...",setTimeout((function(){var t=q(e.hold,e.harddrop);B().then((function(n){t.then((function(t){var r=t["default"],a=Object.keys(r).sort((function(e,t){return e.localeCompare(t)})),o=[],i=function(t){if(e.mirror)return t;var r=new Set,a=[],o=!0,i=!1,c=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value;r.has(n[s].mirror)||(a.push(s),r.add(s))}}catch(d){i=!0,c=d}finally{try{o||null==l["return"]||l["return"]()}finally{if(i)throw c}}return a},c=function(t){return e.airTSD?i(t):i(t.filter((function(e){return e<82})))},u=!0,l=!1,s=void 0;try{for(var d,f=a[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var p=d.value;o.push({name:p,indexes:c(r[p])})}}catch(b){l=!0,s=b}finally{try{u||null==f["return"]||f["return"]()}finally{if(l)throw s}}e.fumens=n,e.items=o,e.message=null}))}))["catch"]((function(t){e.message=t.toString()}))}),0)}},{key:"onClick",value:function(e){this.selectedIndex!==e?this.selectedIndex=e:this.selectedIndex=-1}},{key:"suffixUpperCase",get:function(){return this.suffix.toUpperCase()}}]),t}(r["default"]);Object(s["a"])([Object(d["b"])()],F.prototype,"hold",void 0),Object(s["a"])([Object(d["b"])()],F.prototype,"harddrop",void 0),Object(s["a"])([Object(d["b"])()],F.prototype,"airTSD",void 0),Object(s["a"])([Object(d["b"])()],F.prototype,"mirror",void 0),Object(s["a"])([Object(d["d"])("hold")],F.prototype,"onChangedHold",null),Object(s["a"])([Object(d["d"])("harddrop")],F.prototype,"onChangedHarddrop",null),Object(s["a"])([Object(d["d"])("airTSD")],F.prototype,"onChangedAirTSD",null),Object(s["a"])([Object(d["d"])("mirror")],F.prototype,"onChangedMirror",null),F=Object(s["a"])([Object(d["a"])({components:{ImagesPanel:J}})],F);var z=F,G=z,K=(n("4398"),n("8654")),N=Object(h["a"])(G,V,E,!1,null,"60735d82",null),Q=N.exports;m()(N,{VContainer:O["a"],VTextField:K["a"]});var R=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.softdrop=!1,e.hold=!1,e.airTSD=!0,e.mirror=!0,e}return Object(l["a"])(t,e),t}(d["c"]);R=Object(s["a"])([Object(d["a"])({components:{ListPanel:Q}})],R);var X=R,Y=X,Z=(n("e595"),n("7496")),ee=n("40dc"),te=n("ac7c"),ne=n("a75b"),re=n("2fa4"),ae=n("2a7f"),oe=Object(h["a"])(Y,D,P,!1,null,"6cf81218",null),ie=oe.exports;m()(oe,{VApp:Z["a"],VAppBar:ee["a"],VCheckbox:te["a"],VContent:ne["a"],VSpacer:re["a"],VToolbarTitle:ae["a"]}),r["default"].use(x["a"]);var ce=new x["a"]({mode:"hash",base:"/tsd-opener/",routes:[{path:"/",name:"home",component:w},{path:"/main",name:"main",component:ie}]}),ue=n("2f62");r["default"].use(ue["a"]);var le=new ue["a"].Store({state:{},mutations:{},actions:{}}),se=n("ce5b"),de=n.n(se);n("bf40");r["default"].use(de.a);var fe=new de.a({icons:{iconfont:"mdi"}});r["default"].config.productionTip=!1,new r["default"]({router:ce,store:le,vuetify:fe,render:function(e){return e(y)}}).$mount("#app")},e595:function(e,t,n){"use strict";var r=n("cd14"),a=n.n(r);a.a}});
//# sourceMappingURL=app.7c2e94ee.js.map