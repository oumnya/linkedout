"use strict";exports.id=821,exports.ids=[821],exports.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},4093:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(167),o=r._(n(6689)),l=r._(n(9376)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){let{res:t,err:n}=e,r=t&&t.statusCode?t.statusCode:n?n.statusCode:404;return{statusCode:r}}let i={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends o.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||a[e]||"An unexpected error has occurred";return o.default.createElement("div",{style:i.error},o.default.createElement(l.default,null,o.default.createElement("title",null,e?e+": "+n:"Application error: a client-side exception has occurred")),o.default.createElement("div",{style:i.desc},o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?o.default.createElement("h1",{className:"next-error-h1",style:i.h1},e):null,o.default.createElement("div",{style:i.wrap},o.default.createElement("h2",{style:i.h2},this.props.title||e?n:o.default.createElement(o.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}u.displayName="ErrorPage",u.getInitialProps=d,u.origGetInitialProps=d,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3838:(e,t)=>{function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9376:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return f},default:function(){return m}});let r=n(167),o=n(8760),l=o._(n(6689)),a=r._(n(4491)),d=n(8039),i=n(1988),u=n(3838);function f(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7842);let s=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let l=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=s.length;e<t;e++){let t=s[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,l.useContext)(d.AmpStateContext),r=(0,l.useContext)(i.HeadManagerContext);return l.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4491:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(8760),o=r._(n(6689)),l=()=>{},a=()=>{};function d(e){var t;let{headManager:n,reduceComponentsToState:r}=e;function d(){if(n&&n.mountedInstances){let t=o.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(r(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),d(),l(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),l(()=>(n&&(n._pendingUpdate=d),()=>{n&&(n._pendingUpdate=d)})),a(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},7842:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},5244:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},8039:(e,t,n)=>{e.exports=n(7093).vendored.contexts.AmpContext},1988:(e,t,n)=>{e.exports=n(7093).vendored.contexts.HeadManagerContext},8760:(e,t)=>{function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var d=l?Object.getOwnPropertyDescriptor(e,a):null;d&&(d.get||d.set)?Object.defineProperty(o,a,d):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}}};