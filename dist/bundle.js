module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(4)()},function(e,t,n){var r=n(0),o={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},u=function(e){var t=e.onResize,n=r.useRef();return function(e,t){var n=function(){return e.current&&e.current.contentDocument&&e.current.contentDocument.defaultView};function o(){t();var e=n();e&&e.addEventListener("resize",t)}r.useEffect((function(){return n()?o():e.current&&e.current.addEventListener&&e.current.addEventListener("load",o),function(){var e=n();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",t)}}),[])}(n,(function(){return t(n)})),r.createElement("iframe",{style:o,src:"about:blank",ref:n,"aria-hidden":!0,tabIndex:-1,frameBorder:0})},i=function(e){return{width:null!=e?e.offsetWidth:null,height:null!=e?e.offsetHeight:null}};e.exports=function(e){void 0===e&&(e=i);var t=r.useState(e(null)),n=t[0],o=t[1],a=r.useCallback((function(t){return o(e(t.current))}),[e]);return[r.useMemo((function(){return r.createElement(u,{onResize:a})}),[a]),n]}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(2),i=n.n(u),a=n(1),c=n.n(a);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=l(Object(r.useState)(e.setOpenState?e.openState:e.open||!1),2),n=t[0],u=t[1],a=l(Object(r.useState)(0),2),c=a[0],s=a[1],f=l(Object(r.useState)(""),2),p=f[0],d=f[1],y=Object(r.useRef)(null),b=l(i()(),2),v=b[0],m=b[1];function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;d("all 0.2s ease"),s(n?0:y.current.scrollHeight+1),e.setOpenState&&t?e.setOpenState(!n):e.setOpenState?u(e.openState):u(!n),setTimeout((function(){d("")}),200)}return Object(r.useEffect)((function(){h()}),[e.openState]),Object(r.useEffect)((function(){s(n?y.current.scrollHeight+1:0)}),[m]),o.a.createElement("div",null,o.a.createElement("div",{onClick:h,className:"cursor-pointer"},e.label),o.a.createElement("div",{style:{maxHeight:c,position:"relative",overflowY:"hidden",transition:p},ref:y,className:e.className},e.children,v))};f.propTypes={className:c.a.string,open:c.a.bool,openState:c.a.bool,setOpenState:c.a.func,children:c.a.any.isRequired,label:c.a.any.isRequired},t.default=f},function(e,t,n){"use strict";var r=n(5);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,u,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]).default;