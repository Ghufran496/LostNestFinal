_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"1TCz":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n);var a=t("nKUr"),i=t("nGE6"),o=t("q1tI");function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t("YFqc"),u=t.n(l),f=t("RCpM"),d=t.n(f),p=t("WiO3");var v=function(){var e=s(Object(i.useSession)(),2),n=e[0],t=e[1];return Object(a.jsx)("header",{className:d.a.header,children:Object(a.jsxs)("div",{className:d.a.navi,children:[Object(a.jsx)(u.a,{href:"/",className:d.a.imgdiv,children:Object(a.jsx)("a",{children:Object(a.jsxs)("div",{className:d.a.new,children:[Object(a.jsx)("img",{src:"/images/logos.png",alt:"logoimg",className:d.a.imagest}),Object(a.jsx)("h5",{children:"LostNest"})]})})}),Object(a.jsx)("nav",{className:d.a.mainnav,children:Object(a.jsxs)("ul",{className:d.a.loginnav,children:[!n&&!t&&Object(a.jsx)("li",{children:Object(a.jsx)(u.a,{href:"/auth",children:Object(a.jsx)("a",{children:Object(a.jsx)(p.a,{content:"Login"})})})}),n&&Object(a.jsx)("li",{style:{padding:"5px"},className:d.a.anch,children:Object(a.jsx)(u.a,{href:"/dashboard",children:"Feed"})}),n&&Object(a.jsx)("li",{style:{padding:"5px"},className:d.a.anch,children:Object(a.jsx)(u.a,{href:"/postlostitem",children:"Lost Item?"})}),n&&Object(a.jsx)("li",{style:{padding:"5px"},className:d.a.anch,children:Object(a.jsx)(u.a,{href:"/postfounditem",children:"Found Item?"})}),n&&Object(a.jsx)("li",{style:{padding:"5px"},className:d.a.anch,children:Object(a.jsx)(u.a,{href:"/profile",children:"Profile"})}),n&&Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),Object(i.signOut)()},className:d.a.btn,children:"Logout"})})]})})]})})};var h=function(e){return Object(a.jsxs)(o.Fragment,{children:[Object(a.jsx)(v,{}),Object(a.jsx)("main",{children:e.children})]})};t("zPlV");function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return Object(a.jsx)(i.Provider,{session:t.session,children:Object(a.jsx)(h,{children:Object(a.jsx)(n,j({},t))})})}},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},RCpM:function(e,n,t){e.exports={header:"main-navigation_header__WaMUQ",navi:"main-navigation_navi__fkVK_",imgdiv:"main-navigation_imgdiv__s_HOs",new:"main-navigation_new__1bPwX",imagest:"main-navigation_imagest__YmYFG",loginnav:"main-navigation_loginnav__1-eHU",mainnav:"main-navigation_mainnav__3wuit",btn:"main-navigation_btn__1HoIf",anch:"main-navigation_anch__1N1zo"}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var i=a(t("q1tI")),o=t("elyg"),c=t("nOHt"),s=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),a=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,o.resolveHref)(a,e.href,!0),t=r(n,2),i=t[0],c=t[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,j=e.scroll,m=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=i.Children.only(v),O=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),_=r(y,2),x=_[0],w=_[1],N=i.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,i.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,d,p,{locale:r})}),[p,d,w,m,n,t]);var E={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,d,p,h,b,j,m)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var P="undefined"!==typeof m?m:t&&t.locale,L=(0,o.getDomainLocale)(p,P,t&&t.locales,t&&t.domainLocales);E.href=L||(0,o.addBasePath)((0,o.addLocale)(p,P,t&&t.defaultLocale))}return i.default.cloneElement(g,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),a=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,a=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,o=r.elements;return o.set(e,n),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){c||f||(0,o.default)((function(){return d(!0)}))}),[f]),[p,f]};var i=t("q1tI"),o=a(t("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map},zPlV:function(e,n,t){}},[[0,0,1,2,3,4]]]);