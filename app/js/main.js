(()=>{var e={903:()=>{const e=document.querySelectorAll(".accordion");e?.forEach((t=>{t.querySelector(".accordion__btn").addEventListener("click",(()=>{e.forEach((e=>{e!==t&&e.classList.remove("is-open")})),t.classList.toggle("is-open")}))}))},56:()=>{const e=document.querySelectorAll(".dropdown");e?.forEach((t=>{t.querySelector(".dropdown__btn").addEventListener("click",(r=>{e.forEach((e=>{e!==t&&e.classList.remove("is-show")})),t.classList.toggle("is-show"),r.stopPropagation()}))})),document.addEventListener("click",(t=>{e.forEach((e=>{e.contains(t.target)||e.classList.remove("is-show")}))}))},860:()=>{function e(e){var t=!0,r=!1,o=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function n(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function i(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(r){r.metaKey||r.altKey||r.ctrlKey||(n(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(r&&(t=!0),i())}),!0),i(),e.addEventListener("focus",(function(e){var r,o,c;n(e.target)&&(t||(o=(r=e.target).type,"INPUT"===(c=r.tagName)&&l[o]&&!r.readOnly||"TEXTAREA"===c&&!r.readOnly||r.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;n(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(r=!0,window.clearTimeout(o),o=window.setTimeout((function(){r=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},130:function(e){var t;t=function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,r),l.l=!0,l.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=function(e){return Array.isArray(e)?e:[e]},l=function(e){return e instanceof Node},n=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var r=0;r<e.length&&!0!==t(e[r],r,e.length);r++);}},a=function(e){return console.error("[scroll-lock] ".concat(e))},c=function(e){if(Array.isArray(e))return e.join(", ")},i=function(e){var t=[];return n(e,(function(e){return t.push(e)})),t},u=function(e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if((!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&-1!==i(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===i(r.querySelectorAll(t)).indexOf(e););return e},d=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return-1!==i(r.querySelectorAll(t)).indexOf(e)},s=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!s(e)||e.scrollTop<=0},v=function(e){if(e){if(s(e))return!0;var t=e.scrollTop,r=e.scrollHeight;return t+e.offsetHeight>=r}},m=function(e){if(e)return!!s(e)||e.scrollLeft<=0},p=function(e){if(e){if(s(e))return!0;var t=e.scrollLeft,r=e.scrollWidth;return t+e.offsetWidth>=r}};function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"disablePageScroll",(function(){return y})),r.d(t,"enablePageScroll",(function(){return S})),r.d(t,"getScrollState",(function(){return L})),r.d(t,"clearQueueScrollLocks",(function(){return w})),r.d(t,"getTargetScrollBarWidth",(function(){return E})),r.d(t,"getCurrentTargetScrollBarWidth",(function(){return k})),r.d(t,"getPageScrollBarWidth",(function(){return A})),r.d(t,"getCurrentPageScrollBarWidth",(function(){return T})),r.d(t,"addScrollableTarget",(function(){return x})),r.d(t,"removeScrollableTarget",(function(){return G})),r.d(t,"addScrollableSelector",(function(){return O})),r.d(t,"removeScrollableSelector",(function(){return P})),r.d(t,"addLockableTarget",(function(){return F})),r.d(t,"addLockableSelector",(function(){return W})),r.d(t,"setFillGapMethod",(function(){return q})),r.d(t,"addFillGapTarget",(function(){return N})),r.d(t,"removeFillGapTarget",(function(){return Y})),r.d(t,"addFillGapSelector",(function(){return j})),r.d(t,"removeFillGapSelector",(function(){return M})),r.d(t,"refillGaps",(function(){return C}));var b=["padding","margin","width","max-width","none"],h={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:b[0],startTouchY:0,startTouchX:0},y=function(e){h.queue<=0&&(h.scroll=!1,_(),X()),x(e),h.queue++},S=function(e){h.queue>0&&h.queue--,h.queue<=0&&(h.scroll=!0,K(),Q()),G(e)},L=function(){return h.scroll},w=function(){h.queue=0},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(l(e)){var r=e.style.overflowY;t?L()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var o=k(e);return e.style.overflowY=r,o}return 0},k=function(e){if(l(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var r=e.style.borderLeftWidth,o=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var n=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=r,e.style.borderRightWidth=o,n}return 0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return E(document.body,e)},T=function(){return k(document.body)},x=function(e){e&&o(e).map((function(e){n(e,(function(e){l(e)?e.setAttribute("data-scroll-lock-scrollable",""):a('"'.concat(e,'" is not a Element.'))}))}))},G=function(e){e&&o(e).map((function(e){n(e,(function(e){l(e)?e.removeAttribute("data-scroll-lock-scrollable"):a('"'.concat(e,'" is not a Element.'))}))}))},O=function(e){e&&o(e).map((function(e){h.scrollableSelectors.push(e)}))},P=function(e){e&&o(e).map((function(e){h.scrollableSelectors=h.scrollableSelectors.filter((function(t){return t!==e}))}))},F=function(e){e&&(o(e).map((function(e){n(e,(function(e){l(e)?e.setAttribute("data-scroll-lock-lockable",""):a('"'.concat(e,'" is not a Element.'))}))})),L()||_())},W=function(e){e&&(o(e).map((function(e){h.lockableSelectors.push(e)})),L()||_(),j(e))},q=function(e){if(e)if(-1!==b.indexOf(e))h.fillGapMethod=e,C();else{var t=b.join(", ");a('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},N=function(e){e&&o(e).map((function(e){n(e,(function(e){l(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),h.scroll||z(e)):a('"'.concat(e,'" is not a Element.'))}))}))},Y=function(e){e&&o(e).map((function(e){n(e,(function(e){l(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),h.scroll||V(e)):a('"'.concat(e,'" is not a Element.'))}))}))},j=function(e){e&&o(e).map((function(e){-1===h.fillGapSelectors.indexOf(e)&&(h.fillGapSelectors.push(e),h.scroll||H(e))}))},M=function(e){e&&o(e).map((function(e){h.fillGapSelectors=h.fillGapSelectors.filter((function(t){return t!==e})),h.scroll||I(e)}))},C=function(){h.scroll||X()},_=function(){var e=c(h.lockableSelectors);U(e)},K=function(){var e=c(h.lockableSelectors);B(e)},U=function(e){var t=document.querySelectorAll(e);n(t,(function(e){R(e)}))},B=function(e){var t=document.querySelectorAll(e);n(t,(function(e){D(e)}))},R=function(e){if(l(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},D=function(e){l(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},X=function(){h.fillGapSelectors.map((function(e){H(e)}))},Q=function(){h.fillGapSelectors.map((function(e){I(e)}))},H=function(e){var t=document.querySelectorAll(e),r=-1!==h.lockableSelectors.indexOf(e);n(t,(function(e){z(e,r)}))},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(l(e)){var r;if(""===e.getAttribute("data-scroll-lock-lockable")||t)r=E(e,!0);else{var o=u(e,c(h.lockableSelectors));r=E(o,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&V(e);var n=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",h.fillGapMethod),"margin"===h.fillGapMethod){var a=parseFloat(n.marginRight);e.style.marginRight="".concat(a+r,"px")}else if("width"===h.fillGapMethod)e.style.width="calc(100% - ".concat(r,"px)");else if("max-width"===h.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(r,"px)");else if("padding"===h.fillGapMethod){var i=parseFloat(n.paddingRight);e.style.paddingRight="".concat(i+r,"px")}}},I=function(e){var t=document.querySelectorAll(e);n(t,(function(e){V(e)}))},V=function(e){if(l(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(e){C()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(e){h.scroll||(h.startTouchY=e.touches[0].clientY,h.startTouchX=e.touches[0].clientX)})),document.addEventListener("touchmove",(function(e){if(!h.scroll){var t=h.startTouchY,r=h.startTouchX,o=e.touches[0].clientY,l=e.touches[0].clientX;if(e.touches.length<2){var n=c(h.scrollableSelectors),a={up:t<o,down:t>o,left:r<l,right:r>l},i={up:t+3<o,down:t-3>o,left:r+3<l,right:r-3>l};!function t(r){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r){var l=u(r,n,!1);if(function(e){return d(e,'input[type="range"]')}(r))return!1;if(o||function(e){return d(e,'textarea, [contenteditable="true"]')}(r)&&u(r,n)||d(r,n)){var c=!1;m(r)&&p(r)?(a.up&&f(r)||a.down&&v(r))&&(c=!0):f(r)&&v(r)?(a.left&&m(r)||a.right&&p(r))&&(c=!0):(i.up&&f(r)||i.down&&v(r)||i.left&&m(r)||i.right&&p(r))&&(c=!0),c&&(l?t(l,!0):e.cancelable&&e.preventDefault())}else t(l)}else e.cancelable&&e.preventDefault()}(e.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(e){h.scroll||(h.startTouchY=0,h.startTouchX=0)})));var J={hide:function(e){a('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),y(e)},show:function(e){a('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),S(e)},toggle:function(e){a('"toggle" is deprecated! Do not use it.'),L()?y():S(e)},getState:function(){return a('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),L()},getWidth:function(){return a('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),A()},getCurrentWidth:function(){return a('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),T()},setScrollableTargets:function(e){a('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),x(e)},setFillGapSelectors:function(e){a('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),j(e)},setFillGapTargets:function(e){a('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),N(e)},clearQueue:function(){a('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),w()}},Z=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){g(e,t,r[t])}))}return e}({disablePageScroll:y,enablePageScroll:S,getScrollState:L,clearQueueScrollLocks:w,getTargetScrollBarWidth:E,getCurrentTargetScrollBarWidth:k,getPageScrollBarWidth:A,getCurrentPageScrollBarWidth:T,addScrollableSelector:O,removeScrollableSelector:P,addScrollableTarget:x,removeScrollableTarget:G,addLockableSelector:W,addLockableTarget:F,addFillGapSelector:j,removeFillGapSelector:M,addFillGapTarget:N,removeFillGapTarget:Y,setFillGapMethod:q,refillGaps:C,_state:h},J);t.default=Z}]).default},e.exports=t()}},t={};function r(o){var l=t[o];if(void 0!==l)return l.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(860),window,document,document.documentElement,document.body,r(56);var e=r(130),t=r.n(e);!function(){const e=document?.querySelector("[data-burger]"),r=document?.querySelector("[data-menu]"),o=document?.querySelectorAll("[data-menu-close]"),l=document?.querySelectorAll("[data-menu-item]"),n=document?.querySelector("[data-menu-overlay]");e?.addEventListener("click",(o=>{e?.classList.toggle("burger--active"),n?.setAttribute("data-menu-overlay","true"),r?.classList.toggle("menu--active"),r?.classList.contains("menu--active")?(e?.setAttribute("aria-expanded","true"),n?.setAttribute("data-menu-overlay","true"),e?.setAttribute("aria-label","Закрыть меню"),t().disablePageScroll(r)):(e?.setAttribute("aria-expanded","false"),n?.setAttribute("data-menu-overlay","false"),e?.setAttribute("aria-label","Открыть меню"),t().enablePageScroll(r))})),n?.addEventListener("click",(()=>{e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Открыть меню"),n?.setAttribute("data-menu-overlay","false"),e.classList.remove("burger--active"),r.classList.remove("menu--active"),t().enablePageScroll(r)})),l?.forEach((o=>{o.addEventListener("click",(()=>{e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Открыть меню"),n?.setAttribute("data-menu-overlay","false"),e.classList.remove("burger--active"),r.classList.remove("menu--active"),t().enablePageScroll(r)}))})),o?.forEach((o=>{o.addEventListener("click",(()=>{e?.setAttribute("aria-expanded","false"),e?.setAttribute("aria-label","Открыть меню"),n?.setAttribute("data-menu-overlay","false"),e.classList.remove("burger--active"),r.classList.remove("menu--active"),t().enablePageScroll(r)}))}))}(),r(903)})()})();