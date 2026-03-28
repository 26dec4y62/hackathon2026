(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();var V0={exports:{}},rt={},Y0={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=Symbol.for("react.element"),ol=Symbol.for("react.portal"),al=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),cl=Symbol.for("react.provider"),fl=Symbol.for("react.context"),dl=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),ml=Symbol.for("react.memo"),hl=Symbol.for("react.lazy"),Mr=Symbol.iterator;function gl(e){return e===null||typeof e!="object"?null:(e=Mr&&e[Mr]||e["@@iterator"],typeof e=="function"?e:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X0=Object.assign,Q0={};function o1(e,n,t){this.props=e,this.context=n,this.refs=Q0,this.updater=t||$0}o1.prototype.isReactComponent={};o1.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};o1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z0(){}Z0.prototype=o1.prototype;function F2(e,n,t){this.props=e,this.context=n,this.refs=Q0,this.updater=t||$0}var I2=F2.prototype=new Z0;I2.constructor=F2;X0(I2,o1.prototype);I2.isPureReactComponent=!0;var Or=Array.isArray,J0=Object.prototype.hasOwnProperty,G2={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function b0(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)J0.call(n,r)&&!q0.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Q1,type:e,key:i,ref:o,props:l,_owner:G2.current}}function vl(e,n){return{$$typeof:Q1,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function U2(e){return typeof e=="object"&&e!==null&&e.$$typeof===Q1}function yl(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var _r=/\/+/g;function Nt(e,n){return typeof e=="object"&&e!==null&&e.key!=null?yl(""+e.key):n.toString(36)}function S5(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Q1:case ol:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Nt(o,0):r,Or(l)?(t="",e!=null&&(t=e.replace(_r,"$&/")+"/"),S5(l,n,t,"",function(d){return d})):l!=null&&(U2(l)&&(l=vl(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(_r,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Or(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Nt(i,a);o+=S5(i,n,t,u,l)}else if(u=gl(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Nt(i,a++),o+=S5(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function t5(e,n,t){if(e==null)return e;var r=[],l=0;return S5(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Sl(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},x5={transition:null},xl={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:x5,ReactCurrentOwner:G2};function e3(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:t5,forEach:function(e,n,t){t5(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return t5(e,function(){n++}),n},toArray:function(e){return t5(e,function(n){return n})||[]},only:function(e){if(!U2(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=o1;A.Fragment=al;A.Profiler=sl;A.PureComponent=F2;A.StrictMode=ul;A.Suspense=pl;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xl;A.act=e3;A.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X0({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=G2.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)J0.call(n,u)&&!q0.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Q1,type:e.type,key:l,ref:i,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:fl,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cl,_context:e},e.Consumer=e};A.createElement=b0;A.createFactory=function(e){var n=b0.bind(null,e);return n.type=e,n};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:dl,render:e}};A.isValidElement=U2;A.lazy=function(e){return{$$typeof:hl,_payload:{_status:-1,_result:e},_init:Sl}};A.memo=function(e,n){return{$$typeof:ml,type:e,compare:n===void 0?null:n}};A.startTransition=function(e){var n=x5.transition;x5.transition={};try{e()}finally{x5.transition=n}};A.unstable_act=e3;A.useCallback=function(e,n){return ue.current.useCallback(e,n)};A.useContext=function(e){return ue.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};A.useEffect=function(e,n){return ue.current.useEffect(e,n)};A.useId=function(){return ue.current.useId()};A.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};A.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};A.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};A.useMemo=function(e,n){return ue.current.useMemo(e,n)};A.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};A.useRef=function(e){return ue.current.useRef(e)};A.useState=function(e){return ue.current.useState(e)};A.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};A.useTransition=function(){return ue.current.useTransition()};A.version="18.3.1";Y0.exports=A;var Z=Y0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Z,Nl=Symbol.for("react.element"),wl=Symbol.for("react.fragment"),Ll=Object.prototype.hasOwnProperty,kl=El.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cl={key:!0,ref:!0,__self:!0,__source:!0};function n3(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Ll.call(n,r)&&!Cl.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Nl,type:e,key:i,ref:o,props:l,_owner:kl.current}}rt.Fragment=wl;rt.jsx=n3;rt.jsxs=n3;V0.exports=rt;var p=V0.exports,t3={exports:{}},Se={},r3={exports:{}},l3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,T){var B=L.length;L.push(T);e:for(;0<B;){var K=B-1>>>1,Q=L[K];if(0<l(Q,T))L[K]=T,L[B]=Q,B=K;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var T=L[0],B=L.pop();if(B!==T){L[0]=B;e:for(var K=0,Q=L.length,e5=Q>>>1;K<e5;){var yn=2*(K+1)-1,Et=L[yn],Sn=yn+1,n5=L[Sn];if(0>l(Et,B))Sn<Q&&0>l(n5,Et)?(L[K]=n5,L[Sn]=B,K=Sn):(L[K]=Et,L[yn]=B,K=yn);else if(Sn<Q&&0>l(n5,B))L[K]=n5,L[Sn]=B,K=Sn;else break e}}return T}function l(L,T){var B=L.sortIndex-T.sortIndex;return B!==0?B:L.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],g=1,h=null,m=3,x=!1,S=!1,E=!1,H=typeof setTimeout=="function"?setTimeout:null,s=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(L){for(var T=t(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=L)r(d),T.sortIndex=T.expirationTime,n(u,T);else break;T=t(d)}}function v(L){if(E=!1,f(L),!S)if(t(u)!==null)S=!0,St(N);else{var T=t(d);T!==null&&xt(v,T.startTime-L)}}function N(L,T){S=!1,E&&(E=!1,s(P),P=-1),x=!0;var B=m;try{for(f(T),h=t(u);h!==null&&(!(h.expirationTime>T)||L&&!Pe());){var K=h.callback;if(typeof K=="function"){h.callback=null,m=h.priorityLevel;var Q=K(h.expirationTime<=T);T=e.unstable_now(),typeof Q=="function"?h.callback=Q:h===t(u)&&r(u),f(T)}else r(u);h=t(u)}if(h!==null)var e5=!0;else{var yn=t(d);yn!==null&&xt(v,yn.startTime-T),e5=!1}return e5}finally{h=null,m=B,x=!1}}var k=!1,C=null,P=-1,U=5,D=-1;function Pe(){return!(e.unstable_now()-D<U)}function s1(){if(C!==null){var L=e.unstable_now();D=L;var T=!0;try{T=C(!0,L)}finally{T?c1():(k=!1,C=null)}}else k=!1}var c1;if(typeof c=="function")c1=function(){c(s1)};else if(typeof MessageChannel<"u"){var Hr=new MessageChannel,il=Hr.port2;Hr.port1.onmessage=s1,c1=function(){il.postMessage(null)}}else c1=function(){H(s1,0)};function St(L){C=L,k||(k=!0,c1())}function xt(L,T){P=H(function(){L(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,St(N))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var B=m;m=T;try{return L()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,T){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var B=m;m=L;try{return T()}finally{m=B}},e.unstable_scheduleCallback=function(L,T,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,L){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,L={id:g++,callback:T,priorityLevel:L,startTime:B,expirationTime:Q,sortIndex:-1},B>K?(L.sortIndex=B,n(d,L),t(u)===null&&L===t(d)&&(E?(s(P),P=-1):E=!0,xt(v,B-K))):(L.sortIndex=Q,n(u,L),S||x||(S=!0,St(N))),L},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(L){var T=m;return function(){var B=m;m=T;try{return L.apply(this,arguments)}finally{m=B}}}})(l3);r3.exports=l3;var Pl=r3.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=Z,ye=Pl;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i3=new Set,R1={};function Rn(e,n){bn(e,n),bn(e+"Capture",n)}function bn(e,n){for(R1[e]=n,e=0;e<n.length;e++)i3.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xt=Object.prototype.hasOwnProperty,Bl=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zr={},jr={};function Al(e){return Xt.call(jr,e)?!0:Xt.call(zr,e)?!1:Bl.test(e)?jr[e]=!0:(zr[e]=!0,!1)}function Dl(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rl(e,n,t,r){if(n===null||typeof n>"u"||Dl(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var K2=/[\-:]([a-z])/g;function V2(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(K2,V2);ne[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(K2,V2);ne[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(K2,V2);ne[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y2(e,n,t,r){var l=ne.hasOwnProperty(n)?ne[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Rl(n,t,l,r)&&(t=null),r||l===null?Al(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Qe=Tl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,r5=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),$2=Symbol.for("react.strict_mode"),Qt=Symbol.for("react.profiler"),o3=Symbol.for("react.provider"),a3=Symbol.for("react.context"),X2=Symbol.for("react.forward_ref"),Zt=Symbol.for("react.suspense"),Jt=Symbol.for("react.suspense_list"),Q2=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),u3=Symbol.for("react.offscreen"),Fr=Symbol.iterator;function f1(e){return e===null||typeof e!="object"?null:(e=Fr&&e[Fr]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,wt;function S1(e){if(wt===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wt=n&&n[1]||""}return`
`+wt+e}var Lt=!1;function kt(e,n){if(!e||Lt)return"";Lt=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Lt=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?S1(e):""}function Wl(e){switch(e.tag){case 5:return S1(e.type);case 16:return S1("Lazy");case 13:return S1("Suspense");case 19:return S1("SuspenseList");case 0:case 2:case 15:return e=kt(e.type,!1),e;case 11:return e=kt(e.type.render,!1),e;case 1:return e=kt(e.type,!0),e;default:return""}}function qt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Mn:return"Portal";case Qt:return"Profiler";case $2:return"StrictMode";case Zt:return"Suspense";case Jt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a3:return(e.displayName||"Context")+".Consumer";case o3:return(e._context.displayName||"Context")+".Provider";case X2:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q2:return n=e.displayName||null,n!==null?n:qt(e.type)||"Memo";case Je:n=e._payload,e=e._init;try{return qt(e(n))}catch{}}return null}function Hl(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qt(n);case 8:return n===$2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function s3(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ml(e){var n=s3(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function l5(e){e._valueTracker||(e._valueTracker=Ml(e))}function c3(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=s3(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function D5(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bt(e,n){var t=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ir(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function f3(e,n){n=n.checked,n!=null&&Y2(e,"checked",n,!1)}function e2(e,n){f3(e,n);var t=pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?n2(e,n.type,t):n.hasOwnProperty("defaultValue")&&n2(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Gr(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function n2(e,n,t){(n!=="number"||D5(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var x1=Array.isArray;function $n(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function t2(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ur(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(y(92));if(x1(t)){if(1<t.length)throw Error(y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function d3(e,n){var t=pn(n.value),r=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Kr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function p3(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function r2(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?p3(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var i5,m3=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(i5=i5||document.createElement("div"),i5.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=i5.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function W1(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var w1={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ol=["Webkit","ms","Moz","O"];Object.keys(w1).forEach(function(e){Ol.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),w1[n]=w1[e]})});function h3(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||w1.hasOwnProperty(e)&&w1[e]?(""+n).trim():n+"px"}function g3(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=h3(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var _l=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function l2(e,n){if(n){if(_l[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function i2(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o2=null;function Z2(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var a2=null,Xn=null,Qn=null;function Vr(e){if(e=q1(e)){if(typeof a2!="function")throw Error(y(280));var n=e.stateNode;n&&(n=ut(n),a2(e.stateNode,e.type,n))}}function v3(e){Xn?Qn?Qn.push(e):Qn=[e]:Xn=e}function y3(){if(Xn){var e=Xn,n=Qn;if(Qn=Xn=null,Vr(e),n)for(e=0;e<n.length;e++)Vr(n[e])}}function S3(e,n){return e(n)}function x3(){}var Ct=!1;function E3(e,n,t){if(Ct)return e(n,t);Ct=!0;try{return S3(e,n,t)}finally{Ct=!1,(Xn!==null||Qn!==null)&&(x3(),y3())}}function H1(e,n){var t=e.stateNode;if(t===null)return null;var r=ut(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,n,typeof t));return t}var u2=!1;if(Ve)try{var d1={};Object.defineProperty(d1,"passive",{get:function(){u2=!0}}),window.addEventListener("test",d1,d1),window.removeEventListener("test",d1,d1)}catch{u2=!1}function zl(e,n,t,r,l,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(g){this.onError(g)}}var L1=!1,R5=null,W5=!1,s2=null,jl={onError:function(e){L1=!0,R5=e}};function Fl(e,n,t,r,l,i,o,a,u){L1=!1,R5=null,zl.apply(jl,arguments)}function Il(e,n,t,r,l,i,o,a,u){if(Fl.apply(this,arguments),L1){if(L1){var d=R5;L1=!1,R5=null}else throw Error(y(198));W5||(W5=!0,s2=d)}}function Wn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function N3(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yr(e){if(Wn(e)!==e)throw Error(y(188))}function Gl(e){var n=e.alternate;if(!n){if(n=Wn(e),n===null)throw Error(y(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Yr(l),e;if(i===r)return Yr(l),n;i=i.sibling}throw Error(y(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(y(189))}}if(t.alternate!==r)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:n}function w3(e){return e=Gl(e),e!==null?L3(e):null}function L3(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=L3(e);if(n!==null)return n;e=e.sibling}return null}var k3=ye.unstable_scheduleCallback,$r=ye.unstable_cancelCallback,Ul=ye.unstable_shouldYield,Kl=ye.unstable_requestPaint,V=ye.unstable_now,Vl=ye.unstable_getCurrentPriorityLevel,J2=ye.unstable_ImmediatePriority,C3=ye.unstable_UserBlockingPriority,H5=ye.unstable_NormalPriority,Yl=ye.unstable_LowPriority,P3=ye.unstable_IdlePriority,lt=null,ze=null;function $l(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(lt,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Zl,Xl=Math.log,Ql=Math.LN2;function Zl(e){return e>>>=0,e===0?32:31-(Xl(e)/Ql|0)|0}var o5=64,a5=4194304;function E1(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function M5(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=E1(a):(i&=o,i!==0&&(r=E1(i)))}else o=t&~l,o!==0?r=E1(o):i!==0&&(r=E1(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Re(n),l=1<<t,r|=e[t],n&=~l;return r}function Jl(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ql(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Re(i),a=1<<o,u=l[o];u===-1?(!(a&t)||a&r)&&(l[o]=Jl(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function c2(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function T3(){var e=o5;return o5<<=1,!(o5&4194240)&&(o5=64),e}function Pt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Z1(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function bl(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Re(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function q2(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Re(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var W=0;function B3(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var A3,b2,D3,R3,W3,f2=!1,u5=[],ln=null,on=null,an=null,M1=new Map,O1=new Map,be=[],ei="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xr(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":M1.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":O1.delete(n.pointerId)}}function p1(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=q1(n),n!==null&&b2(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function ni(e,n,t,r,l){switch(n){case"focusin":return ln=p1(ln,e,n,t,r,l),!0;case"dragenter":return on=p1(on,e,n,t,r,l),!0;case"mouseover":return an=p1(an,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return M1.set(i,p1(M1.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,O1.set(i,p1(O1.get(i)||null,e,n,t,r,l)),!0}return!1}function H3(e){var n=Nn(e.target);if(n!==null){var t=Wn(n);if(t!==null){if(n=t.tag,n===13){if(n=N3(t),n!==null){e.blockedOn=n,W3(e.priority,function(){D3(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function E5(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=d2(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);o2=r,t.target.dispatchEvent(r),o2=null}else return n=q1(t),n!==null&&b2(n),e.blockedOn=t,!1;n.shift()}return!0}function Qr(e,n,t){E5(e)&&t.delete(n)}function ti(){f2=!1,ln!==null&&E5(ln)&&(ln=null),on!==null&&E5(on)&&(on=null),an!==null&&E5(an)&&(an=null),M1.forEach(Qr),O1.forEach(Qr)}function m1(e,n){e.blockedOn===n&&(e.blockedOn=null,f2||(f2=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ti)))}function _1(e){function n(l){return m1(l,e)}if(0<u5.length){m1(u5[0],e);for(var t=1;t<u5.length;t++){var r=u5[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&m1(ln,e),on!==null&&m1(on,e),an!==null&&m1(an,e),M1.forEach(n),O1.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)H3(t),t.blockedOn===null&&be.shift()}var Zn=Qe.ReactCurrentBatchConfig,O5=!0;function ri(e,n,t,r){var l=W,i=Zn.transition;Zn.transition=null;try{W=1,er(e,n,t,r)}finally{W=l,Zn.transition=i}}function li(e,n,t,r){var l=W,i=Zn.transition;Zn.transition=null;try{W=4,er(e,n,t,r)}finally{W=l,Zn.transition=i}}function er(e,n,t,r){if(O5){var l=d2(e,n,t,r);if(l===null)_t(e,n,r,_5,t),Xr(e,r);else if(ni(l,e,n,t,r))r.stopPropagation();else if(Xr(e,r),n&4&&-1<ei.indexOf(e)){for(;l!==null;){var i=q1(l);if(i!==null&&A3(i),i=d2(e,n,t,r),i===null&&_t(e,n,r,_5,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else _t(e,n,r,null,t)}}var _5=null;function d2(e,n,t,r){if(_5=null,e=Z2(r),e=Nn(e),e!==null)if(n=Wn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=N3(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return _5=e,null}function M3(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vl()){case J2:return 1;case C3:return 4;case H5:case Yl:return 16;case P3:return 536870912;default:return 16}default:return 16}}var tn=null,nr=null,N5=null;function O3(){if(N5)return N5;var e,n=nr,t=n.length,r,l="value"in tn?tn.value:tn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return N5=l.slice(e,1<r?1-r:void 0)}function w5(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function s5(){return!0}function Zr(){return!1}function xe(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?s5:Zr,this.isPropagationStopped=Zr,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=s5)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=s5)},persist:function(){},isPersistent:s5}),n}var a1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tr=xe(a1),J1=I({},a1,{view:0,detail:0}),ii=xe(J1),Tt,Bt,h1,it=I({},J1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==h1&&(h1&&e.type==="mousemove"?(Tt=e.screenX-h1.screenX,Bt=e.screenY-h1.screenY):Bt=Tt=0,h1=e),Tt)},movementY:function(e){return"movementY"in e?e.movementY:Bt}}),Jr=xe(it),oi=I({},it,{dataTransfer:0}),ai=xe(oi),ui=I({},J1,{relatedTarget:0}),At=xe(ui),si=I({},a1,{animationName:0,elapsedTime:0,pseudoElement:0}),ci=xe(si),fi=I({},a1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),di=xe(fi),pi=I({},a1,{data:0}),qr=xe(pi),mi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vi(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gi[e])?!!n[e]:!1}function rr(){return vi}var yi=I({},J1,{key:function(e){if(e.key){var n=mi[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=w5(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(e){return e.type==="keypress"?w5(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?w5(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Si=xe(yi),xi=I({},it,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),br=xe(xi),Ei=I({},J1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr}),Ni=xe(Ei),wi=I({},a1,{propertyName:0,elapsedTime:0,pseudoElement:0}),Li=xe(wi),ki=I({},it,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ci=xe(ki),Pi=[9,13,27,32],lr=Ve&&"CompositionEvent"in window,k1=null;Ve&&"documentMode"in document&&(k1=document.documentMode);var Ti=Ve&&"TextEvent"in window&&!k1,_3=Ve&&(!lr||k1&&8<k1&&11>=k1),e0=" ",n0=!1;function z3(e,n){switch(e){case"keyup":return Pi.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j3(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Bi(e,n){switch(e){case"compositionend":return j3(n);case"keypress":return n.which!==32?null:(n0=!0,e0);case"textInput":return e=n.data,e===e0&&n0?null:e;default:return null}}function Ai(e,n){if(_n)return e==="compositionend"||!lr&&z3(e,n)?(e=O3(),N5=nr=tn=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _3&&n.locale!=="ko"?null:n.data;default:return null}}var Di={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Di[e.type]:n==="textarea"}function F3(e,n,t,r){v3(r),n=z5(n,"onChange"),0<n.length&&(t=new tr("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var C1=null,z1=null;function Ri(e){J3(e,0)}function ot(e){var n=Fn(e);if(c3(n))return e}function Wi(e,n){if(e==="change")return n}var I3=!1;if(Ve){var Dt;if(Ve){var Rt="oninput"in document;if(!Rt){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),Rt=typeof r0.oninput=="function"}Dt=Rt}else Dt=!1;I3=Dt&&(!document.documentMode||9<document.documentMode)}function l0(){C1&&(C1.detachEvent("onpropertychange",G3),z1=C1=null)}function G3(e){if(e.propertyName==="value"&&ot(z1)){var n=[];F3(n,z1,e,Z2(e)),E3(Ri,n)}}function Hi(e,n,t){e==="focusin"?(l0(),C1=n,z1=t,C1.attachEvent("onpropertychange",G3)):e==="focusout"&&l0()}function Mi(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ot(z1)}function Oi(e,n){if(e==="click")return ot(n)}function _i(e,n){if(e==="input"||e==="change")return ot(n)}function zi(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var He=typeof Object.is=="function"?Object.is:zi;function j1(e,n){if(He(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Xt.call(n,l)||!He(e[l],n[l]))return!1}return!0}function i0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o0(e,n){var t=i0(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=i0(t)}}function U3(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?U3(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function K3(){for(var e=window,n=D5();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=D5(e.document)}return n}function ir(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ji(e){var n=K3(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&U3(t.ownerDocument.documentElement,t)){if(r!==null&&ir(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=o0(t,i);var o=o0(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fi=Ve&&"documentMode"in document&&11>=document.documentMode,zn=null,p2=null,P1=null,m2=!1;function a0(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;m2||zn==null||zn!==D5(r)||(r=zn,"selectionStart"in r&&ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),P1&&j1(P1,r)||(P1=r,r=z5(p2,"onSelect"),0<r.length&&(n=new tr("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=zn)))}function c5(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var jn={animationend:c5("Animation","AnimationEnd"),animationiteration:c5("Animation","AnimationIteration"),animationstart:c5("Animation","AnimationStart"),transitionend:c5("Transition","TransitionEnd")},Wt={},V3={};Ve&&(V3=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function at(e){if(Wt[e])return Wt[e];if(!jn[e])return e;var n=jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in V3)return Wt[e]=n[t];return e}var Y3=at("animationend"),$3=at("animationiteration"),X3=at("animationstart"),Q3=at("transitionend"),Z3=new Map,u0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,n){Z3.set(e,n),Rn(n,[e])}for(var Ht=0;Ht<u0.length;Ht++){var Mt=u0[Ht],Ii=Mt.toLowerCase(),Gi=Mt[0].toUpperCase()+Mt.slice(1);hn(Ii,"on"+Gi)}hn(Y3,"onAnimationEnd");hn($3,"onAnimationIteration");hn(X3,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Q3,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var N1="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ui=new Set("cancel close invalid load scroll toggle".split(" ").concat(N1));function s0(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Il(r,n,void 0,e),e.currentTarget=null}function J3(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;s0(l,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;s0(l,a,d),i=u}}}if(W5)throw e=s2,W5=!1,s2=null,e}function O(e,n){var t=n[S2];t===void 0&&(t=n[S2]=new Set);var r=e+"__bubble";t.has(r)||(q3(n,e,2,!1),t.add(r))}function Ot(e,n,t){var r=0;n&&(r|=4),q3(t,e,r,n)}var f5="_reactListening"+Math.random().toString(36).slice(2);function F1(e){if(!e[f5]){e[f5]=!0,i3.forEach(function(t){t!=="selectionchange"&&(Ui.has(t)||Ot(t,!1,e),Ot(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[f5]||(n[f5]=!0,Ot("selectionchange",!1,n))}}function q3(e,n,t,r){switch(M3(n)){case 1:var l=ri;break;case 4:l=li;break;default:l=er}t=l.bind(null,n,t,e),l=void 0,!u2||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function _t(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Nn(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}E3(function(){var d=i,g=Z2(t),h=[];e:{var m=Z3.get(e);if(m!==void 0){var x=tr,S=e;switch(e){case"keypress":if(w5(t)===0)break e;case"keydown":case"keyup":x=Si;break;case"focusin":S="focus",x=At;break;case"focusout":S="blur",x=At;break;case"beforeblur":case"afterblur":x=At;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ai;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ni;break;case Y3:case $3:case X3:x=ci;break;case Q3:x=Li;break;case"scroll":x=ii;break;case"wheel":x=Ci;break;case"copy":case"cut":case"paste":x=di;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=br}var E=(n&4)!==0,H=!E&&e==="scroll",s=E?m!==null?m+"Capture":null:m;E=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,s!==null&&(v=H1(c,s),v!=null&&E.push(I1(c,v,f)))),H)break;c=c.return}0<E.length&&(m=new x(m,S,null,t,g),h.push({event:m,listeners:E}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==o2&&(S=t.relatedTarget||t.fromElement)&&(Nn(S)||S[Ye]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=t.relatedTarget||t.toElement,x=d,S=S?Nn(S):null,S!==null&&(H=Wn(S),S!==H||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=d),x!==S)){if(E=Jr,v="onMouseLeave",s="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=br,v="onPointerLeave",s="onPointerEnter",c="pointer"),H=x==null?m:Fn(x),f=S==null?m:Fn(S),m=new E(v,c+"leave",x,t,g),m.target=H,m.relatedTarget=f,v=null,Nn(g)===d&&(E=new E(s,c+"enter",S,t,g),E.target=f,E.relatedTarget=H,v=E),H=v,x&&S)n:{for(E=x,s=S,c=0,f=E;f;f=Hn(f))c++;for(f=0,v=s;v;v=Hn(v))f++;for(;0<c-f;)E=Hn(E),c--;for(;0<f-c;)s=Hn(s),f--;for(;c--;){if(E===s||s!==null&&E===s.alternate)break n;E=Hn(E),s=Hn(s)}E=null}else E=null;x!==null&&c0(h,m,x,E,!1),S!==null&&H!==null&&c0(h,H,S,E,!0)}}e:{if(m=d?Fn(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Wi;else if(t0(m))if(I3)N=_i;else{N=Mi;var k=Hi}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Oi);if(N&&(N=N(e,d))){F3(h,N,t,g);break e}k&&k(e,m,d),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&n2(m,"number",m.value)}switch(k=d?Fn(d):window,e){case"focusin":(t0(k)||k.contentEditable==="true")&&(zn=k,p2=d,P1=null);break;case"focusout":P1=p2=zn=null;break;case"mousedown":m2=!0;break;case"contextmenu":case"mouseup":case"dragend":m2=!1,a0(h,t,g);break;case"selectionchange":if(Fi)break;case"keydown":case"keyup":a0(h,t,g)}var C;if(lr)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _n?z3(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(_3&&t.locale!=="ko"&&(_n||P!=="onCompositionStart"?P==="onCompositionEnd"&&_n&&(C=O3()):(tn=g,nr="value"in tn?tn.value:tn.textContent,_n=!0)),k=z5(d,P),0<k.length&&(P=new qr(P,e,null,t,g),h.push({event:P,listeners:k}),C?P.data=C:(C=j3(t),C!==null&&(P.data=C)))),(C=Ti?Bi(e,t):Ai(e,t))&&(d=z5(d,"onBeforeInput"),0<d.length&&(g=new qr("onBeforeInput","beforeinput",null,t,g),h.push({event:g,listeners:d}),g.data=C))}J3(h,n)})}function I1(e,n,t){return{instance:e,listener:n,currentTarget:t}}function z5(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=H1(e,t),i!=null&&r.unshift(I1(e,i,l)),i=H1(e,n),i!=null&&r.push(I1(e,i,l))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function c0(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=H1(t,i),u!=null&&o.unshift(I1(t,u,a))):l||(u=H1(t,i),u!=null&&o.push(I1(t,u,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Ki=/\r\n?/g,Vi=/\u0000|\uFFFD/g;function f0(e){return(typeof e=="string"?e:""+e).replace(Ki,`
`).replace(Vi,"")}function d5(e,n,t){if(n=f0(n),f0(e)!==n&&t)throw Error(y(425))}function j5(){}var h2=null,g2=null;function v2(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var y2=typeof setTimeout=="function"?setTimeout:void 0,Yi=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,$i=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(e){return d0.resolve(null).then(e).catch(Xi)}:y2;function Xi(e){setTimeout(function(){throw e})}function zt(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),_1(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);_1(n)}function un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function p0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var u1=Math.random().toString(36).slice(2),_e="__reactFiber$"+u1,G1="__reactProps$"+u1,Ye="__reactContainer$"+u1,S2="__reactEvents$"+u1,Qi="__reactListeners$"+u1,Zi="__reactHandles$"+u1;function Nn(e){var n=e[_e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[_e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=p0(e);e!==null;){if(t=e[_e])return t;e=p0(e)}return n}e=t,t=e.parentNode}return null}function q1(e){return e=e[_e]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ut(e){return e[G1]||null}var x2=[],In=-1;function gn(e){return{current:e}}function _(e){0>In||(e.current=x2[In],x2[In]=null,In--)}function M(e,n){In++,x2[In]=e.current,e.current=n}var mn={},ie=gn(mn),de=gn(!1),Pn=mn;function e1(e,n){var t=e.type.contextTypes;if(!t)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function F5(){_(de),_(ie)}function m0(e,n,t){if(ie.current!==mn)throw Error(y(168));M(ie,n),M(de,t)}function b3(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(y(108,Hl(e)||"Unknown",l));return I({},t,r)}function I5(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Pn=ie.current,M(ie,e),M(de,de.current),!0}function h0(e,n,t){var r=e.stateNode;if(!r)throw Error(y(169));t?(e=b3(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,_(de),_(ie),M(ie,e)):_(de),M(de,t)}var Ie=null,st=!1,jt=!1;function e4(e){Ie===null?Ie=[e]:Ie.push(e)}function Ji(e){st=!0,e4(e)}function vn(){if(!jt&&Ie!==null){jt=!0;var e=0,n=W;try{var t=Ie;for(W=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ie=null,st=!1}catch(l){throw Ie!==null&&(Ie=Ie.slice(e+1)),k3(J2,vn),l}finally{W=n,jt=!1}}return null}var Gn=[],Un=0,G5=null,U5=0,Ee=[],Ne=0,Tn=null,Ge=1,Ue="";function xn(e,n){Gn[Un++]=U5,Gn[Un++]=G5,G5=e,U5=n}function n4(e,n,t){Ee[Ne++]=Ge,Ee[Ne++]=Ue,Ee[Ne++]=Tn,Tn=e;var r=Ge;e=Ue;var l=32-Re(r)-1;r&=~(1<<l),t+=1;var i=32-Re(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ge=1<<32-Re(n)+l|t<<l|r,Ue=i+e}else Ge=1<<i|t<<l|r,Ue=e}function or(e){e.return!==null&&(xn(e,1),n4(e,1,0))}function ar(e){for(;e===G5;)G5=Gn[--Un],Gn[Un]=null,U5=Gn[--Un],Gn[Un]=null;for(;e===Tn;)Tn=Ee[--Ne],Ee[Ne]=null,Ue=Ee[--Ne],Ee[Ne]=null,Ge=Ee[--Ne],Ee[Ne]=null}var ve=null,ge=null,z=!1,De=null;function t4(e,n){var t=we(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function g0(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,ge=un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tn!==null?{id:Ge,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=we(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,ge=null,!0):!1;default:return!1}}function E2(e){return(e.mode&1)!==0&&(e.flags&128)===0}function N2(e){if(z){var n=ge;if(n){var t=n;if(!g0(e,n)){if(E2(e))throw Error(y(418));n=un(t.nextSibling);var r=ve;n&&g0(e,n)?t4(r,t):(e.flags=e.flags&-4097|2,z=!1,ve=e)}}else{if(E2(e))throw Error(y(418));e.flags=e.flags&-4097|2,z=!1,ve=e}}}function v0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function p5(e){if(e!==ve)return!1;if(!z)return v0(e),z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!v2(e.type,e.memoizedProps)),n&&(n=ge)){if(E2(e))throw r4(),Error(y(418));for(;n;)t4(e,n),n=un(n.nextSibling)}if(v0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=ve?un(e.stateNode.nextSibling):null;return!0}function r4(){for(var e=ge;e;)e=un(e.nextSibling)}function n1(){ge=ve=null,z=!1}function ur(e){De===null?De=[e]:De.push(e)}var qi=Qe.ReactCurrentBatchConfig;function g1(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var r=t.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function m5(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function y0(e){var n=e._init;return n(e._payload)}function l4(e){function n(s,c){if(e){var f=s.deletions;f===null?(s.deletions=[c],s.flags|=16):f.push(c)}}function t(s,c){if(!e)return null;for(;c!==null;)n(s,c),c=c.sibling;return null}function r(s,c){for(s=new Map;c!==null;)c.key!==null?s.set(c.key,c):s.set(c.index,c),c=c.sibling;return s}function l(s,c){return s=dn(s,c),s.index=0,s.sibling=null,s}function i(s,c,f){return s.index=f,e?(f=s.alternate,f!==null?(f=f.index,f<c?(s.flags|=2,c):f):(s.flags|=2,c)):(s.flags|=1048576,c)}function o(s){return e&&s.alternate===null&&(s.flags|=2),s}function a(s,c,f,v){return c===null||c.tag!==6?(c=Yt(f,s.mode,v),c.return=s,c):(c=l(c,f),c.return=s,c)}function u(s,c,f,v){var N=f.type;return N===On?g(s,c,f.props.children,v,f.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&y0(N)===c.type)?(v=l(c,f.props),v.ref=g1(s,c,f),v.return=s,v):(v=A5(f.type,f.key,f.props,null,s.mode,v),v.ref=g1(s,c,f),v.return=s,v)}function d(s,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=$t(f,s.mode,v),c.return=s,c):(c=l(c,f.children||[]),c.return=s,c)}function g(s,c,f,v,N){return c===null||c.tag!==7?(c=Cn(f,s.mode,v,N),c.return=s,c):(c=l(c,f),c.return=s,c)}function h(s,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yt(""+c,s.mode,f),c.return=s,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case r5:return f=A5(c.type,c.key,c.props,null,s.mode,f),f.ref=g1(s,null,c),f.return=s,f;case Mn:return c=$t(c,s.mode,f),c.return=s,c;case Je:var v=c._init;return h(s,v(c._payload),f)}if(x1(c)||f1(c))return c=Cn(c,s.mode,f,null),c.return=s,c;m5(s,c)}return null}function m(s,c,f,v){var N=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:a(s,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case r5:return f.key===N?u(s,c,f,v):null;case Mn:return f.key===N?d(s,c,f,v):null;case Je:return N=f._init,m(s,c,N(f._payload),v)}if(x1(f)||f1(f))return N!==null?null:g(s,c,f,v,null);m5(s,f)}return null}function x(s,c,f,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return s=s.get(f)||null,a(c,s,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case r5:return s=s.get(v.key===null?f:v.key)||null,u(c,s,v,N);case Mn:return s=s.get(v.key===null?f:v.key)||null,d(c,s,v,N);case Je:var k=v._init;return x(s,c,f,k(v._payload),N)}if(x1(v)||f1(v))return s=s.get(f)||null,g(c,s,v,N,null);m5(c,v)}return null}function S(s,c,f,v){for(var N=null,k=null,C=c,P=c=0,U=null;C!==null&&P<f.length;P++){C.index>P?(U=C,C=null):U=C.sibling;var D=m(s,C,f[P],v);if(D===null){C===null&&(C=U);break}e&&C&&D.alternate===null&&n(s,C),c=i(D,c,P),k===null?N=D:k.sibling=D,k=D,C=U}if(P===f.length)return t(s,C),z&&xn(s,P),N;if(C===null){for(;P<f.length;P++)C=h(s,f[P],v),C!==null&&(c=i(C,c,P),k===null?N=C:k.sibling=C,k=C);return z&&xn(s,P),N}for(C=r(s,C);P<f.length;P++)U=x(C,s,P,f[P],v),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?P:U.key),c=i(U,c,P),k===null?N=U:k.sibling=U,k=U);return e&&C.forEach(function(Pe){return n(s,Pe)}),z&&xn(s,P),N}function E(s,c,f,v){var N=f1(f);if(typeof N!="function")throw Error(y(150));if(f=N.call(f),f==null)throw Error(y(151));for(var k=N=null,C=c,P=c=0,U=null,D=f.next();C!==null&&!D.done;P++,D=f.next()){C.index>P?(U=C,C=null):U=C.sibling;var Pe=m(s,C,D.value,v);if(Pe===null){C===null&&(C=U);break}e&&C&&Pe.alternate===null&&n(s,C),c=i(Pe,c,P),k===null?N=Pe:k.sibling=Pe,k=Pe,C=U}if(D.done)return t(s,C),z&&xn(s,P),N;if(C===null){for(;!D.done;P++,D=f.next())D=h(s,D.value,v),D!==null&&(c=i(D,c,P),k===null?N=D:k.sibling=D,k=D);return z&&xn(s,P),N}for(C=r(s,C);!D.done;P++,D=f.next())D=x(C,s,P,D.value,v),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?P:D.key),c=i(D,c,P),k===null?N=D:k.sibling=D,k=D);return e&&C.forEach(function(s1){return n(s,s1)}),z&&xn(s,P),N}function H(s,c,f,v){if(typeof f=="object"&&f!==null&&f.type===On&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case r5:e:{for(var N=f.key,k=c;k!==null;){if(k.key===N){if(N=f.type,N===On){if(k.tag===7){t(s,k.sibling),c=l(k,f.props.children),c.return=s,s=c;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&y0(N)===k.type){t(s,k.sibling),c=l(k,f.props),c.ref=g1(s,k,f),c.return=s,s=c;break e}t(s,k);break}else n(s,k);k=k.sibling}f.type===On?(c=Cn(f.props.children,s.mode,v,f.key),c.return=s,s=c):(v=A5(f.type,f.key,f.props,null,s.mode,v),v.ref=g1(s,c,f),v.return=s,s=v)}return o(s);case Mn:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(s,c.sibling),c=l(c,f.children||[]),c.return=s,s=c;break e}else{t(s,c);break}else n(s,c);c=c.sibling}c=$t(f,s.mode,v),c.return=s,s=c}return o(s);case Je:return k=f._init,H(s,c,k(f._payload),v)}if(x1(f))return S(s,c,f,v);if(f1(f))return E(s,c,f,v);m5(s,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(s,c.sibling),c=l(c,f),c.return=s,s=c):(t(s,c),c=Yt(f,s.mode,v),c.return=s,s=c),o(s)):t(s,c)}return H}var t1=l4(!0),i4=l4(!1),K5=gn(null),V5=null,Kn=null,sr=null;function cr(){sr=Kn=V5=null}function fr(e){var n=K5.current;_(K5),e._currentValue=n}function w2(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jn(e,n){V5=e,sr=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function ke(e){var n=e._currentValue;if(sr!==e)if(e={context:e,memoizedValue:n,next:null},Kn===null){if(V5===null)throw Error(y(308));Kn=e,V5.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return n}var wn=null;function dr(e){wn===null?wn=[e]:wn.push(e)}function o4(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,dr(n)):(t.next=l.next,l.next=t),n.interleaved=t,$e(e,r)}function $e(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var qe=!1;function pr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a4(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,$e(e,t)}return l=r.interleaved,l===null?(n.next=n,dr(r)):(n.next=l.next,l.next=n),r.interleaved=n,$e(e,t)}function L5(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,q2(e,t)}}function S0(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Y5(e,n,t,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,g=d=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,E=a;switch(m=n,x=t,E.tag){case 1:if(S=E.payload,typeof S=="function"){h=S.call(x,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(x,h,m):S,m==null)break e;h=I({},h,m);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=x,u=h):g=g.next=x,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);An|=o,e.lanes=o,e.memoizedState=h}}function x0(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var b1={},je=gn(b1),U1=gn(b1),K1=gn(b1);function Ln(e){if(e===b1)throw Error(y(174));return e}function mr(e,n){switch(M(K1,n),M(U1,e),M(je,b1),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:r2(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=r2(n,e)}_(je),M(je,n)}function r1(){_(je),_(U1),_(K1)}function u4(e){Ln(K1.current);var n=Ln(je.current),t=r2(n,e.type);n!==t&&(M(U1,e),M(je,t))}function hr(e){U1.current===e&&(_(je),_(U1))}var j=gn(0);function $5(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ft=[];function gr(){for(var e=0;e<Ft.length;e++)Ft[e]._workInProgressVersionPrimary=null;Ft.length=0}var k5=Qe.ReactCurrentDispatcher,It=Qe.ReactCurrentBatchConfig,Bn=0,F=null,$=null,J=null,X5=!1,T1=!1,V1=0,bi=0;function te(){throw Error(y(321))}function vr(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!He(e[t],n[t]))return!1;return!0}function yr(e,n,t,r,l,i){if(Bn=i,F=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,k5.current=e===null||e.memoizedState===null?ro:lo,e=t(r,l),T1){i=0;do{if(T1=!1,V1=0,25<=i)throw Error(y(301));i+=1,J=$=null,n.updateQueue=null,k5.current=io,e=t(r,l)}while(T1)}if(k5.current=Q5,n=$!==null&&$.next!==null,Bn=0,J=$=F=null,X5=!1,n)throw Error(y(300));return e}function Sr(){var e=V1!==0;return V1=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?F.memoizedState=J=e:J=J.next=e,J}function Ce(){if($===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var n=J===null?F.memoizedState:J.next;if(n!==null)J=n,$=e;else{if(e===null)throw Error(y(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},J===null?F.memoizedState=J=e:J=J.next=e}return J}function Y1(e,n){return typeof n=="function"?n(e):n}function Gt(e){var n=Ce(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=$,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,d=i;do{var g=d.lane;if((Bn&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,F.lanes|=g,An|=g}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,He(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,F.lanes|=i,An|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ut(e){var n=Ce(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);He(i,n.memoizedState)||(fe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function s4(){}function c4(e,n){var t=F,r=Ce(),l=n(),i=!He(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,xr(p4.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,$1(9,d4.bind(null,t,r,l,n),void 0,null),q===null)throw Error(y(349));Bn&30||f4(t,n,l)}return l}function f4(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function d4(e,n,t,r){n.value=t,n.getSnapshot=r,m4(n)&&h4(e)}function p4(e,n,t){return t(function(){m4(n)&&h4(e)})}function m4(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!He(e,t)}catch{return!0}}function h4(e){var n=$e(e,1);n!==null&&We(n,e,1,-1)}function E0(e){var n=Oe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Y1,lastRenderedState:e},n.queue=e,e=e.dispatch=to.bind(null,F,e),[n.memoizedState,e]}function $1(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function g4(){return Ce().memoizedState}function C5(e,n,t,r){var l=Oe();F.flags|=e,l.memoizedState=$1(1|n,t,void 0,r===void 0?null:r)}function ct(e,n,t,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if($!==null){var o=$.memoizedState;if(i=o.destroy,r!==null&&vr(r,o.deps)){l.memoizedState=$1(n,t,i,r);return}}F.flags|=e,l.memoizedState=$1(1|n,t,i,r)}function N0(e,n){return C5(8390656,8,e,n)}function xr(e,n){return ct(2048,8,e,n)}function v4(e,n){return ct(4,2,e,n)}function y4(e,n){return ct(4,4,e,n)}function S4(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function x4(e,n,t){return t=t!=null?t.concat([e]):null,ct(4,4,S4.bind(null,n,e),t)}function Er(){}function E4(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vr(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function N4(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vr(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function w4(e,n,t){return Bn&21?(He(t,n)||(t=T3(),F.lanes|=t,An|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function eo(e,n){var t=W;W=t!==0&&4>t?t:4,e(!0);var r=It.transition;It.transition={};try{e(!1),n()}finally{W=t,It.transition=r}}function L4(){return Ce().memoizedState}function no(e,n,t){var r=fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},k4(e))C4(n,t);else if(t=o4(e,n,t,r),t!==null){var l=ae();We(t,e,r,l),P4(t,n,r)}}function to(e,n,t){var r=fn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(k4(e))C4(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,He(a,o)){var u=n.interleaved;u===null?(l.next=l,dr(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=o4(e,n,l,r),t!==null&&(l=ae(),We(t,e,r,l),P4(t,n,r))}}function k4(e){var n=e.alternate;return e===F||n!==null&&n===F}function C4(e,n){T1=X5=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function P4(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,q2(e,t)}}var Q5={readContext:ke,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},ro={readContext:ke,useCallback:function(e,n){return Oe().memoizedState=[e,n===void 0?null:n],e},useContext:ke,useEffect:N0,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,C5(4194308,4,S4.bind(null,n,e),t)},useLayoutEffect:function(e,n){return C5(4194308,4,e,n)},useInsertionEffect:function(e,n){return C5(4,2,e,n)},useMemo:function(e,n){var t=Oe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Oe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=no.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var n=Oe();return e={current:e},n.memoizedState=e},useState:E0,useDebugValue:Er,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=E0(!1),n=e[0];return e=eo.bind(null,e[1]),Oe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=F,l=Oe();if(z){if(t===void 0)throw Error(y(407));t=t()}else{if(t=n(),q===null)throw Error(y(349));Bn&30||f4(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,N0(p4.bind(null,r,i,e),[e]),r.flags|=2048,$1(9,d4.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Oe(),n=q.identifierPrefix;if(z){var t=Ue,r=Ge;t=(r&~(1<<32-Re(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=V1++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bi++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},lo={readContext:ke,useCallback:E4,useContext:ke,useEffect:xr,useImperativeHandle:x4,useInsertionEffect:v4,useLayoutEffect:y4,useMemo:N4,useReducer:Gt,useRef:g4,useState:function(){return Gt(Y1)},useDebugValue:Er,useDeferredValue:function(e){var n=Ce();return w4(n,$.memoizedState,e)},useTransition:function(){var e=Gt(Y1)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:s4,useSyncExternalStore:c4,useId:L4,unstable_isNewReconciler:!1},io={readContext:ke,useCallback:E4,useContext:ke,useEffect:xr,useImperativeHandle:x4,useInsertionEffect:v4,useLayoutEffect:y4,useMemo:N4,useReducer:Ut,useRef:g4,useState:function(){return Ut(Y1)},useDebugValue:Er,useDeferredValue:function(e){var n=Ce();return $===null?n.memoizedState=e:w4(n,$.memoizedState,e)},useTransition:function(){var e=Ut(Y1)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:s4,useSyncExternalStore:c4,useId:L4,unstable_isNewReconciler:!1};function Be(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function L2(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:I({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ft={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),l=fn(e),i=Ke(r,l);i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,l),n!==null&&(We(n,e,l,r),L5(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),l=fn(e),i=Ke(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,l),n!==null&&(We(n,e,l,r),L5(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=fn(e),l=Ke(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(We(n,e,r,t),L5(n,e,r))}};function w0(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!j1(t,r)||!j1(l,i):!0}function T4(e,n,t){var r=!1,l=mn,i=n.contextType;return typeof i=="object"&&i!==null?i=ke(i):(l=pe(n)?Pn:ie.current,r=n.contextTypes,i=(r=r!=null)?e1(e,l):mn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ft,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function L0(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ft.enqueueReplaceState(n,n.state,null)}function k2(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},pr(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=ke(i):(i=pe(n)?Pn:ie.current,l.context=e1(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(L2(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ft.enqueueReplaceState(l,l.state,null),Y5(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function l1(e,n){try{var t="",r=n;do t+=Wl(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Kt(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function C2(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var oo=typeof WeakMap=="function"?WeakMap:Map;function B4(e,n,t){t=Ke(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){J5||(J5=!0,O2=r),C2(e,n)},t}function A4(e,n,t){t=Ke(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){C2(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){C2(e,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function k0(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new oo;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Eo.bind(null,e,n,t),n.then(e,e))}function C0(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function P0(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ke(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var ao=Qe.ReactCurrentOwner,fe=!1;function oe(e,n,t,r){n.child=e===null?i4(n,null,t,r):t1(n,e.child,t,r)}function T0(e,n,t,r,l){t=t.render;var i=n.ref;return Jn(n,l),r=yr(e,n,t,r,i,l),t=Sr(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Xe(e,n,l)):(z&&t&&or(n),n.flags|=1,oe(e,n,r,l),n.child)}function B0(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Br(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,D4(e,n,i,r,l)):(e=A5(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:j1,t(o,r)&&e.ref===n.ref)return Xe(e,n,l)}return n.flags|=1,e=dn(i,r),e.ref=n.ref,e.return=n,n.child=e}function D4(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(j1(i,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Xe(e,n,l)}return P2(e,n,t,r,l)}function R4(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Yn,he),he|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(Yn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,M(Yn,he),he|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,M(Yn,he),he|=r;return oe(e,n,l,t),n.child}function W4(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function P2(e,n,t,r,l){var i=pe(t)?Pn:ie.current;return i=e1(n,i),Jn(n,l),t=yr(e,n,t,r,i,l),r=Sr(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Xe(e,n,l)):(z&&r&&or(n),n.flags|=1,oe(e,n,t,l),n.child)}function A0(e,n,t,r,l){if(pe(t)){var i=!0;I5(n)}else i=!1;if(Jn(n,l),n.stateNode===null)P5(e,n),T4(n,t,r),k2(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var u=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=pe(t)?Pn:ie.current,d=e1(n,d));var g=t.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&L0(n,o,r,d),qe=!1;var m=n.memoizedState;o.state=m,Y5(n,r,o,l),u=n.memoizedState,a!==r||m!==u||de.current||qe?(typeof g=="function"&&(L2(n,t,g,r),u=n.memoizedState),(a=qe||w0(n,t,a,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,a4(e,n),a=n.memoizedProps,d=n.type===n.elementType?a:Be(n.type,a),o.props=d,h=n.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=ke(u):(u=pe(t)?Pn:ie.current,u=e1(n,u));var x=t.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==u)&&L0(n,o,r,u),qe=!1,m=n.memoizedState,o.state=m,Y5(n,r,o,l);var S=n.memoizedState;a!==h||m!==S||de.current||qe?(typeof x=="function"&&(L2(n,t,x,r),S=n.memoizedState),(d=qe||w0(n,t,d,r,m,S,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return T2(e,n,t,r,i,l)}function T2(e,n,t,r,l,i){W4(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&h0(n,t,!1),Xe(e,n,i);r=n.stateNode,ao.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=t1(n,e.child,null,i),n.child=t1(n,null,a,i)):oe(e,n,a,i),n.memoizedState=r.state,l&&h0(n,t,!0),n.child}function H4(e){var n=e.stateNode;n.pendingContext?m0(e,n.pendingContext,n.pendingContext!==n.context):n.context&&m0(e,n.context,!1),mr(e,n.containerInfo)}function D0(e,n,t,r,l){return n1(),ur(l),n.flags|=256,oe(e,n,t,r),n.child}var B2={dehydrated:null,treeContext:null,retryLane:0};function A2(e){return{baseLanes:e,cachePool:null,transitions:null}}function M4(e,n,t){var r=n.pendingProps,l=j.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(j,l&1),e===null)return N2(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=mt(o,r,0,null),e=Cn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=A2(t),n.memoizedState=B2,e):Nr(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return uo(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=dn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=dn(a,i):(i=Cn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?A2(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=B2,r}return i=e.child,e=i.sibling,r=dn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Nr(e,n){return n=mt({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function h5(e,n,t,r){return r!==null&&ur(r),t1(n,e.child,null,t),e=Nr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function uo(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Kt(Error(y(422))),h5(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=mt({mode:"visible",children:r.children},l,0,null),i=Cn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&t1(n,e.child,null,o),n.child.memoizedState=A2(o),n.memoizedState=B2,i);if(!(n.mode&1))return h5(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(y(419)),r=Kt(i,r,void 0),h5(e,n,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,$e(e,l),We(r,e,l,-1))}return Tr(),r=Kt(Error(y(421))),h5(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=No.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,ge=un(l.nextSibling),ve=n,z=!0,De=null,e!==null&&(Ee[Ne++]=Ge,Ee[Ne++]=Ue,Ee[Ne++]=Tn,Ge=e.id,Ue=e.overflow,Tn=n),n=Nr(n,r.children),n.flags|=4096,n)}function R0(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),w2(e.return,n,t)}function Vt(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function O4(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,n,r.children,t),r=j.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,t,n);else if(e.tag===19)R0(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(j,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&$5(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Vt(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&$5(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vt(n,!0,t,null,i);break;case"together":Vt(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function P5(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),An|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function so(e,n,t){switch(n.tag){case 3:H4(n),n1();break;case 5:u4(n);break;case 1:pe(n.type)&&I5(n);break;case 4:mr(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;M(K5,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(j,j.current&1),n.flags|=128,null):t&n.child.childLanes?M4(e,n,t):(M(j,j.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);M(j,j.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return O4(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(j,j.current),r)break;return null;case 22:case 23:return n.lanes=0,R4(e,n,t)}return Xe(e,n,t)}var _4,D2,z4,j4;_4=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};D2=function(){};z4=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Ln(je.current);var i=null;switch(t){case"input":l=bt(e,l),r=bt(e,r),i=[];break;case"select":l=I({},l,{value:void 0}),r=I({},r,{value:void 0}),i=[];break;case"textarea":l=t2(e,l),r=t2(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=j5)}l2(t,r);var o;t=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(R1.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(d,t)),t=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(R1.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),i||a===u||(i=[])):(i=i||[]).push(d,u))}t&&(i=i||[]).push("style",t);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};j4=function(e,n,t,r){t!==r&&(n.flags|=4)};function v1(e,n){if(!z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function co(e,n,t){var r=n.pendingProps;switch(ar(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return pe(n.type)&&F5(),re(n),null;case 3:return r=n.stateNode,r1(),_(de),_(ie),gr(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(p5(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(j2(De),De=null))),D2(e,n),re(n),null;case 5:hr(n);var l=Ln(K1.current);if(t=n.type,e!==null&&n.stateNode!=null)z4(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(y(166));return re(n),null}if(e=Ln(je.current),p5(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[_e]=n,r[G1]=i,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<N1.length;l++)O(N1[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ir(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Ur(r,i),O("invalid",r)}l2(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&d5(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&d5(r.textContent,a,e),l=["children",""+a]):R1.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(t){case"input":l5(r),Gr(r,i,!0);break;case"textarea":l5(r),Kr(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=j5)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=p3(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[_e]=n,e[G1]=r,_4(e,n,!1,!1),n.stateNode=e;e:{switch(o=i2(t,r),t){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<N1.length;l++)O(N1[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ir(e,r),l=bt(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=I({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ur(e,r),l=t2(e,r),O("invalid",e);break;default:l=r}l2(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?g3(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&m3(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&W1(e,u):typeof u=="number"&&W1(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(R1.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Y2(e,i,u,o))}switch(t){case"input":l5(e),Gr(e,r,!1);break;case"textarea":l5(e),Kr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$n(e,!!r.multiple,i,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=j5)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)j4(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(y(166));if(t=Ln(K1.current),Ln(je.current),p5(n)){if(r=n.stateNode,t=n.memoizedProps,r[_e]=n,(i=r.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:d5(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&d5(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[_e]=n,n.stateNode=r}return re(n),null;case 13:if(_(j),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ge!==null&&n.mode&1&&!(n.flags&128))r4(),n1(),n.flags|=98560,i=!1;else if(i=p5(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[_e]=n}else n1(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),i=!1}else De!==null&&(j2(De),De=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||j.current&1?X===0&&(X=3):Tr())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return r1(),D2(e,n),e===null&&F1(n.stateNode.containerInfo),re(n),null;case 10:return fr(n.type._context),re(n),null;case 17:return pe(n.type)&&F5(),re(n),null;case 19:if(_(j),i=n.memoizedState,i===null)return re(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)v1(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=$5(e),o!==null){for(n.flags|=128,v1(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(j,j.current&1|2),n.child}e=e.sibling}i.tail!==null&&V()>i1&&(n.flags|=128,r=!0,v1(i,!1),n.lanes=4194304)}else{if(!r)if(e=$5(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),v1(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!z)return re(n),null}else 2*V()-i.renderingStartTime>i1&&t!==1073741824&&(n.flags|=128,r=!0,v1(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=V(),n.sibling=null,t=j.current,M(j,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Pr(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function fo(e,n){switch(ar(n),n.tag){case 1:return pe(n.type)&&F5(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return r1(),_(de),_(ie),gr(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return hr(n),null;case 13:if(_(j),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));n1()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _(j),null;case 4:return r1(),null;case 10:return fr(n.type._context),null;case 22:case 23:return Pr(),null;case 24:return null;default:return null}}var g5=!1,le=!1,po=typeof WeakSet=="function"?WeakSet:Set,w=null;function Vn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function R2(e,n,t){try{t()}catch(r){G(e,n,r)}}var W0=!1;function mo(e,n){if(h2=O5,e=K3(),ir(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,d=0,g=0,h=e,m=null;n:for(;;){for(var x;h!==t||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break n;if(m===t&&++d===l&&(a=o),m===i&&++g===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(g2={focusedElem:e,selectionRange:t},O5=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,H=S.memoizedState,s=n.stateNode,c=s.getSnapshotBeforeUpdate(n.elementType===n.type?E:Be(n.type,E),H);s.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){G(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return S=W0,W0=!1,S}function B1(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&R2(n,t,i)}l=l.next}while(l!==r)}}function dt(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function W2(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function F4(e){var n=e.alternate;n!==null&&(e.alternate=null,F4(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_e],delete n[G1],delete n[S2],delete n[Qi],delete n[Zi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function I4(e){return e.tag===5||e.tag===3||e.tag===4}function H0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||I4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function H2(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=j5));else if(r!==4&&(e=e.child,e!==null))for(H2(e,n,t),e=e.sibling;e!==null;)H2(e,n,t),e=e.sibling}function M2(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(M2(e,n,t),e=e.sibling;e!==null;)M2(e,n,t),e=e.sibling}var b=null,Ae=!1;function Ze(e,n,t){for(t=t.child;t!==null;)G4(e,n,t),t=t.sibling}function G4(e,n,t){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(lt,t)}catch{}switch(t.tag){case 5:le||Vn(t,n);case 6:var r=b,l=Ae;b=null,Ze(e,n,t),b=r,Ae=l,b!==null&&(Ae?(e=b,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(Ae?(e=b,t=t.stateNode,e.nodeType===8?zt(e.parentNode,t):e.nodeType===1&&zt(e,t),_1(e)):zt(b,t.stateNode));break;case 4:r=b,l=Ae,b=t.stateNode.containerInfo,Ae=!0,Ze(e,n,t),b=r,Ae=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&R2(t,n,o),l=l.next}while(l!==r)}Ze(e,n,t);break;case 1:if(!le&&(Vn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){G(t,n,a)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Ze(e,n,t),le=r):Ze(e,n,t);break;default:Ze(e,n,t)}}function M0(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new po),n.forEach(function(r){var l=wo.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Te(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:b=a.stateNode,Ae=!1;break e;case 3:b=a.stateNode.containerInfo,Ae=!0;break e;case 4:b=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(b===null)throw Error(y(160));G4(i,o,l),b=null,Ae=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){G(l,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)U4(n,e),n=n.sibling}function U4(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(n,e),Me(e),r&4){try{B1(3,e,e.return),dt(3,e)}catch(E){G(e,e.return,E)}try{B1(5,e,e.return)}catch(E){G(e,e.return,E)}}break;case 1:Te(n,e),Me(e),r&512&&t!==null&&Vn(t,t.return);break;case 5:if(Te(n,e),Me(e),r&512&&t!==null&&Vn(t,t.return),e.flags&32){var l=e.stateNode;try{W1(l,"")}catch(E){G(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&f3(l,i),i2(a,o);var d=i2(a,i);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?g3(l,h):g==="dangerouslySetInnerHTML"?m3(l,h):g==="children"?W1(l,h):Y2(l,g,h,d)}switch(a){case"input":e2(l,i);break;case"textarea":d3(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?$n(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?$n(l,!!i.multiple,i.defaultValue,!0):$n(l,!!i.multiple,i.multiple?[]:"",!1))}l[G1]=i}catch(E){G(e,e.return,E)}}break;case 6:if(Te(n,e),Me(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(E){G(e,e.return,E)}}break;case 3:if(Te(n,e),Me(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{_1(n.containerInfo)}catch(E){G(e,e.return,E)}break;case 4:Te(n,e),Me(e);break;case 13:Te(n,e),Me(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(kr=V())),r&4&&M0(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(le=(d=le)||g,Te(n,e),le=d):Te(n,e),Me(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(w=e,g=e.child;g!==null;){for(h=w=g;w!==null;){switch(m=w,x=m.child,m.tag){case 0:case 11:case 14:case 15:B1(4,m,m.return);break;case 1:Vn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(E){G(r,t,E)}}break;case 5:Vn(m,m.return);break;case 22:if(m.memoizedState!==null){_0(h);continue}}x!==null?(x.return=m,w=x):_0(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=h3("display",o))}catch(E){G(e,e.return,E)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(E){G(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Te(n,e),Me(e),r&4&&M0(e);break;case 21:break;default:Te(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(I4(t)){var r=t;break e}t=t.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(W1(l,""),r.flags&=-33);var i=H0(e);M2(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=H0(e);H2(e,a,o);break;default:throw Error(y(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ho(e,n,t){w=e,K4(e)}function K4(e,n,t){for(var r=(e.mode&1)!==0;w!==null;){var l=w,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||g5;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||le;a=g5;var d=le;if(g5=o,(le=u)&&!d)for(w=l;w!==null;)o=w,u=o.child,o.tag===22&&o.memoizedState!==null?z0(l):u!==null?(u.return=o,w=u):z0(l);for(;i!==null;)w=i,K4(i),i=i.sibling;w=l,g5=a,le=d}O0(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,w=i):O0(e)}}function O0(e){for(;w!==null;){var n=w;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||dt(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Be(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&x0(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}x0(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&_1(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||n.flags&512&&W2(n)}catch(m){G(n,n.return,m)}}if(n===e){w=null;break}if(t=n.sibling,t!==null){t.return=n.return,w=t;break}w=n.return}}function _0(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var t=n.sibling;if(t!==null){t.return=n.return,w=t;break}w=n.return}}function z0(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{dt(4,n)}catch(u){G(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){G(n,l,u)}}var i=n.return;try{W2(n)}catch(u){G(n,i,u)}break;case 5:var o=n.return;try{W2(n)}catch(u){G(n,o,u)}}}catch(u){G(n,n.return,u)}if(n===e){w=null;break}var a=n.sibling;if(a!==null){a.return=n.return,w=a;break}w=n.return}}var go=Math.ceil,Z5=Qe.ReactCurrentDispatcher,wr=Qe.ReactCurrentOwner,Le=Qe.ReactCurrentBatchConfig,R=0,q=null,Y=null,ee=0,he=0,Yn=gn(0),X=0,X1=null,An=0,pt=0,Lr=0,A1=null,ce=null,kr=0,i1=1/0,Fe=null,J5=!1,O2=null,cn=null,v5=!1,rn=null,q5=0,D1=0,_2=null,T5=-1,B5=0;function ae(){return R&6?V():T5!==-1?T5:T5=V()}function fn(e){return e.mode&1?R&2&&ee!==0?ee&-ee:qi.transition!==null?(B5===0&&(B5=T3()),B5):(e=W,e!==0||(e=window.event,e=e===void 0?16:M3(e.type)),e):1}function We(e,n,t,r){if(50<D1)throw D1=0,_2=null,Error(y(185));Z1(e,t,r),(!(R&2)||e!==q)&&(e===q&&(!(R&2)&&(pt|=t),X===4&&en(e,ee)),me(e,r),t===1&&R===0&&!(n.mode&1)&&(i1=V()+500,st&&vn()))}function me(e,n){var t=e.callbackNode;ql(e,n);var r=M5(e,e===q?ee:0);if(r===0)t!==null&&$r(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&$r(t),n===1)e.tag===0?Ji(j0.bind(null,e)):e4(j0.bind(null,e)),$i(function(){!(R&6)&&vn()}),t=null;else{switch(B3(r)){case 1:t=J2;break;case 4:t=C3;break;case 16:t=H5;break;case 536870912:t=P3;break;default:t=H5}t=q4(t,V4.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function V4(e,n){if(T5=-1,B5=0,R&6)throw Error(y(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=M5(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=b5(e,r);else{n=r;var l=R;R|=2;var i=$4();(q!==e||ee!==n)&&(Fe=null,i1=V()+500,kn(e,n));do try{So();break}catch(a){Y4(e,a)}while(!0);cr(),Z5.current=i,R=l,Y!==null?n=0:(q=null,ee=0,n=X)}if(n!==0){if(n===2&&(l=c2(e),l!==0&&(r=l,n=z2(e,l))),n===1)throw t=X1,kn(e,0),en(e,r),me(e,V()),t;if(n===6)en(e,r);else{if(l=e.current.alternate,!(r&30)&&!vo(l)&&(n=b5(e,r),n===2&&(i=c2(e),i!==0&&(r=i,n=z2(e,i))),n===1))throw t=X1,kn(e,0),en(e,r),me(e,V()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(y(345));case 2:En(e,ce,Fe);break;case 3:if(en(e,r),(r&130023424)===r&&(n=kr+500-V(),10<n)){if(M5(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=y2(En.bind(null,e,ce,Fe),n);break}En(e,ce,Fe);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Re(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*go(r/1960))-r,10<r){e.timeoutHandle=y2(En.bind(null,e,ce,Fe),r);break}En(e,ce,Fe);break;case 5:En(e,ce,Fe);break;default:throw Error(y(329))}}}return me(e,V()),e.callbackNode===t?V4.bind(null,e):null}function z2(e,n){var t=A1;return e.current.memoizedState.isDehydrated&&(kn(e,n).flags|=256),e=b5(e,n),e!==2&&(n=ce,ce=t,n!==null&&j2(n)),e}function j2(e){ce===null?ce=e:ce.push.apply(ce,e)}function vo(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!He(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Lr,n&=~pt,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),r=1<<t;e[t]=-1,n&=~r}}function j0(e){if(R&6)throw Error(y(327));qn();var n=M5(e,0);if(!(n&1))return me(e,V()),null;var t=b5(e,n);if(e.tag!==0&&t===2){var r=c2(e);r!==0&&(n=r,t=z2(e,r))}if(t===1)throw t=X1,kn(e,0),en(e,n),me(e,V()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,En(e,ce,Fe),me(e,V()),null}function Cr(e,n){var t=R;R|=1;try{return e(n)}finally{R=t,R===0&&(i1=V()+500,st&&vn())}}function Dn(e){rn!==null&&rn.tag===0&&!(R&6)&&qn();var n=R;R|=1;var t=Le.transition,r=W;try{if(Le.transition=null,W=1,e)return e()}finally{W=r,Le.transition=t,R=n,!(R&6)&&vn()}}function Pr(){he=Yn.current,_(Yn)}function kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yi(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(ar(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&F5();break;case 3:r1(),_(de),_(ie),gr();break;case 5:hr(r);break;case 4:r1();break;case 13:_(j);break;case 19:_(j);break;case 10:fr(r.type._context);break;case 22:case 23:Pr()}t=t.return}if(q=e,Y=e=dn(e.current,null),ee=he=n,X=0,X1=null,Lr=pt=An=0,ce=A1=null,wn!==null){for(n=0;n<wn.length;n++)if(t=wn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}wn=null}return e}function Y4(e,n){do{var t=Y;try{if(cr(),k5.current=Q5,X5){for(var r=F.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}X5=!1}if(Bn=0,J=$=F=null,T1=!1,V1=0,wr.current=null,t===null||t.return===null){X=1,X1=n,Y=null;break}e:{var i=e,o=t.return,a=t,u=n;if(n=ee,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=C0(o);if(x!==null){x.flags&=-257,P0(x,o,a,i,n),x.mode&1&&k0(i,d,n),n=x,u=d;var S=n.updateQueue;if(S===null){var E=new Set;E.add(u),n.updateQueue=E}else S.add(u);break e}else{if(!(n&1)){k0(i,d,n),Tr();break e}u=Error(y(426))}}else if(z&&a.mode&1){var H=C0(o);if(H!==null){!(H.flags&65536)&&(H.flags|=256),P0(H,o,a,i,n),ur(l1(u,a));break e}}i=u=l1(u,a),X!==4&&(X=2),A1===null?A1=[i]:A1.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var s=B4(i,u,n);S0(i,s);break e;case 1:a=u;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cn===null||!cn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=A4(i,a,n);S0(i,v);break e}}i=i.return}while(i!==null)}Q4(t)}catch(N){n=N,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function $4(){var e=Z5.current;return Z5.current=Q5,e===null?Q5:e}function Tr(){(X===0||X===3||X===2)&&(X=4),q===null||!(An&268435455)&&!(pt&268435455)||en(q,ee)}function b5(e,n){var t=R;R|=2;var r=$4();(q!==e||ee!==n)&&(Fe=null,kn(e,n));do try{yo();break}catch(l){Y4(e,l)}while(!0);if(cr(),R=t,Z5.current=r,Y!==null)throw Error(y(261));return q=null,ee=0,X}function yo(){for(;Y!==null;)X4(Y)}function So(){for(;Y!==null&&!Ul();)X4(Y)}function X4(e){var n=J4(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Q4(e):Y=n,wr.current=null}function Q4(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=fo(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(t=co(t,n,he),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);X===0&&(X=5)}function En(e,n,t){var r=W,l=Le.transition;try{Le.transition=null,W=1,xo(e,n,t,r)}finally{Le.transition=l,W=r}return null}function xo(e,n,t,r){do qn();while(rn!==null);if(R&6)throw Error(y(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(bl(e,i),e===q&&(Y=q=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||v5||(v5=!0,q4(H5,function(){return qn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Le.transition,Le.transition=null;var o=W;W=1;var a=R;R|=4,wr.current=null,mo(e,t),U4(t,e),ji(g2),O5=!!h2,g2=h2=null,e.current=t,ho(t),Kl(),R=a,W=o,Le.transition=i}else e.current=t;if(v5&&(v5=!1,rn=e,q5=l),i=e.pendingLanes,i===0&&(cn=null),$l(t.stateNode),me(e,V()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(J5)throw J5=!1,e=O2,O2=null,e;return q5&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===_2?D1++:(D1=0,_2=e):D1=0,vn(),null}function qn(){if(rn!==null){var e=B3(q5),n=Le.transition,t=W;try{if(Le.transition=null,W=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,q5=0,R&6)throw Error(y(331));var l=R;for(R|=4,w=e.current;w!==null;){var i=w,o=i.child;if(w.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(w=d;w!==null;){var g=w;switch(g.tag){case 0:case 11:case 15:B1(8,g,i)}var h=g.child;if(h!==null)h.return=g,w=h;else for(;w!==null;){g=w;var m=g.sibling,x=g.return;if(F4(g),g===d){w=null;break}if(m!==null){m.return=x,w=m;break}w=x}}}var S=i.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var H=E.sibling;E.sibling=null,E=H}while(E!==null)}}w=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,w=o;else e:for(;w!==null;){if(i=w,i.flags&2048)switch(i.tag){case 0:case 11:case 15:B1(9,i,i.return)}var s=i.sibling;if(s!==null){s.return=i.return,w=s;break e}w=i.return}}var c=e.current;for(w=c;w!==null;){o=w;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,w=f;else e:for(o=c;w!==null;){if(a=w,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dt(9,a)}}catch(N){G(a,a.return,N)}if(a===o){w=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,w=v;break e}w=a.return}}if(R=l,vn(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(lt,e)}catch{}r=!0}return r}finally{W=t,Le.transition=n}}return!1}function F0(e,n,t){n=l1(t,n),n=B4(e,n,1),e=sn(e,n,1),n=ae(),e!==null&&(Z1(e,1,n),me(e,n))}function G(e,n,t){if(e.tag===3)F0(e,e,t);else for(;n!==null;){if(n.tag===3){F0(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=l1(t,e),e=A4(n,e,1),n=sn(n,e,1),e=ae(),n!==null&&(Z1(n,1,e),me(n,e));break}}n=n.return}}function Eo(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>V()-kr?kn(e,0):Lr|=t),me(e,n)}function Z4(e,n){n===0&&(e.mode&1?(n=a5,a5<<=1,!(a5&130023424)&&(a5=4194304)):n=1);var t=ae();e=$e(e,n),e!==null&&(Z1(e,n,t),me(e,t))}function No(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Z4(e,t)}function wo(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(n),Z4(e,t)}var J4;J4=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,so(e,n,t);fe=!!(e.flags&131072)}else fe=!1,z&&n.flags&1048576&&n4(n,U5,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;P5(e,n),e=n.pendingProps;var l=e1(n,ie.current);Jn(n,t),l=yr(null,n,r,e,l,t);var i=Sr();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(i=!0,I5(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,pr(n),l.updater=ft,n.stateNode=l,l._reactInternals=n,k2(n,r,e,t),n=T2(null,n,r,!0,i,t)):(n.tag=0,z&&i&&or(n),oe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(P5(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=ko(r),e=Be(r,e),l){case 0:n=P2(null,n,r,e,t);break e;case 1:n=A0(null,n,r,e,t);break e;case 11:n=T0(null,n,r,e,t);break e;case 14:n=B0(null,n,r,Be(r.type,e),t);break e}throw Error(y(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Be(r,l),P2(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Be(r,l),A0(e,n,r,l,t);case 3:e:{if(H4(n),e===null)throw Error(y(387));r=n.pendingProps,i=n.memoizedState,l=i.element,a4(e,n),Y5(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=l1(Error(y(423)),n),n=D0(e,n,r,t,l);break e}else if(r!==l){l=l1(Error(y(424)),n),n=D0(e,n,r,t,l);break e}else for(ge=un(n.stateNode.containerInfo.firstChild),ve=n,z=!0,De=null,t=i4(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(n1(),r===l){n=Xe(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return u4(n),e===null&&N2(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,v2(r,l)?o=null:i!==null&&v2(r,i)&&(n.flags|=32),W4(e,n),oe(e,n,o,t),n.child;case 6:return e===null&&N2(n),null;case 13:return M4(e,n,t);case 4:return mr(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=t1(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Be(r,l),T0(e,n,r,l,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,M(K5,r._currentValue),r._currentValue=o,i!==null)if(He(i.value,o)){if(i.children===l.children&&!de.current){n=Xe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ke(-1,t&-t),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),w2(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),w2(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Jn(n,t),l=ke(l),r=r(l),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,l=Be(r,n.pendingProps),l=Be(r.type,l),B0(e,n,r,l,t);case 15:return D4(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Be(r,l),P5(e,n),n.tag=1,pe(r)?(e=!0,I5(n)):e=!1,Jn(n,t),T4(n,r,l),k2(n,r,l,t),T2(null,n,r,!0,e,t);case 19:return O4(e,n,t);case 22:return R4(e,n,t)}throw Error(y(156,n.tag))};function q4(e,n){return k3(e,n)}function Lo(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,n,t,r){return new Lo(e,n,t,r)}function Br(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ko(e){if(typeof e=="function")return Br(e)?1:0;if(e!=null){if(e=e.$$typeof,e===X2)return 11;if(e===Q2)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=we(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function A5(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Br(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case On:return Cn(t.children,l,i,n);case $2:o=8,l|=8;break;case Qt:return e=we(12,t,n,l|2),e.elementType=Qt,e.lanes=i,e;case Zt:return e=we(13,t,n,l),e.elementType=Zt,e.lanes=i,e;case Jt:return e=we(19,t,n,l),e.elementType=Jt,e.lanes=i,e;case u3:return mt(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case o3:o=10;break e;case a3:o=9;break e;case X2:o=11;break e;case Q2:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=we(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Cn(e,n,t,r){return e=we(7,e,r,n),e.lanes=t,e}function mt(e,n,t,r){return e=we(22,e,r,n),e.elementType=u3,e.lanes=t,e.stateNode={isHidden:!1},e}function Yt(e,n,t){return e=we(6,e,null,n),e.lanes=t,e}function $t(e,n,t){return n=we(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Co(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pt(0),this.expirationTimes=Pt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pt(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ar(e,n,t,r,l,i,o,a,u){return e=new Co(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=we(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pr(i),e}function Po(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function b4(e){if(!e)return mn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(pe(t))return b3(e,t,n)}return n}function el(e,n,t,r,l,i,o,a,u){return e=Ar(t,r,!0,e,l,i,o,a,u),e.context=b4(null),t=e.current,r=ae(),l=fn(t),i=Ke(r,l),i.callback=n??null,sn(t,i,l),e.current.lanes=l,Z1(e,l,r),me(e,r),e}function ht(e,n,t,r){var l=n.current,i=ae(),o=fn(l);return t=b4(t),n.context===null?n.context=t:n.pendingContext=t,n=Ke(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,o),e!==null&&(We(e,l,o,i),L5(e,l,o)),o}function et(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Dr(e,n){I0(e,n),(e=e.alternate)&&I0(e,n)}function To(){return null}var nl=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rr(e){this._internalRoot=e}gt.prototype.render=Rr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));ht(e,n,null,null)};gt.prototype.unmount=Rr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dn(function(){ht(null,e,null,null)}),n[Ye]=null}};function gt(e){this._internalRoot=e}gt.prototype.unstable_scheduleHydration=function(e){if(e){var n=R3();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&H3(e)}};function Wr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function G0(){}function Bo(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=et(o);i.call(d)}}var o=el(n,r,e,0,null,!1,!1,"",G0);return e._reactRootContainer=o,e[Ye]=o.current,F1(e.nodeType===8?e.parentNode:e),Dn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=et(u);a.call(d)}}var u=Ar(e,0,!1,null,null,!1,!1,"",G0);return e._reactRootContainer=u,e[Ye]=u.current,F1(e.nodeType===8?e.parentNode:e),Dn(function(){ht(n,u,t,r)}),u}function yt(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=et(o);a.call(u)}}ht(n,o,e,l)}else o=Bo(t,n,e,l,r);return et(o)}A3=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=E1(n.pendingLanes);t!==0&&(q2(n,t|1),me(n,V()),!(R&6)&&(i1=V()+500,vn()))}break;case 13:Dn(function(){var r=$e(e,1);if(r!==null){var l=ae();We(r,e,1,l)}}),Dr(e,1)}};b2=function(e){if(e.tag===13){var n=$e(e,134217728);if(n!==null){var t=ae();We(n,e,134217728,t)}Dr(e,134217728)}};D3=function(e){if(e.tag===13){var n=fn(e),t=$e(e,n);if(t!==null){var r=ae();We(t,e,n,r)}Dr(e,n)}};R3=function(){return W};W3=function(e,n){var t=W;try{return W=e,n()}finally{W=t}};a2=function(e,n,t){switch(n){case"input":if(e2(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ut(r);if(!l)throw Error(y(90));c3(r),e2(r,l)}}}break;case"textarea":d3(e,t);break;case"select":n=t.value,n!=null&&$n(e,!!t.multiple,n,!1)}};S3=Cr;x3=Dn;var Ao={usingClientEntryPoint:!1,Events:[q1,Fn,ut,v3,y3,Cr]},y1={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Do={bundleType:y1.bundleType,version:y1.version,rendererPackageName:y1.rendererPackageName,rendererConfig:y1.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=w3(e),e===null?null:e.stateNode},findFiberByHostInstance:y1.findFiberByHostInstance||To,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var y5=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!y5.isDisabled&&y5.supportsFiber)try{lt=y5.inject(Do),ze=y5}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ao;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wr(n))throw Error(y(200));return Po(e,n,null,t)};Se.createRoot=function(e,n){if(!Wr(e))throw Error(y(299));var t=!1,r="",l=nl;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Ar(e,1,!1,null,null,t,!1,r,l),e[Ye]=n.current,F1(e.nodeType===8?e.parentNode:e),new Rr(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=w3(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Dn(e)};Se.hydrate=function(e,n,t){if(!vt(n))throw Error(y(200));return yt(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!Wr(e))throw Error(y(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=nl;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=el(n,null,e,1,t??null,l,!1,i,o),e[Ye]=n.current,F1(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new gt(n)};Se.render=function(e,n,t){if(!vt(n))throw Error(y(200));return yt(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!vt(e))throw Error(y(40));return e._reactRootContainer?(Dn(function(){yt(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=Cr;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vt(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return yt(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function tl(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tl)}catch(e){console.error(e)}}tl(),t3.exports=Se;var Ro=t3.exports,rl,U0=Ro;rl=U0.createRoot,U0.hydrateRoot;const Wo=`id,postcode,latitude,longitude
1,B34,52.4964133,-1.7817039
2,IP10,52.0189774,1.2699895
3,G2,55.8629070,-4.2561591
4,GL19,51.9461577,-2.2909682
5,L36,53.4144065,-2.8417310
6,NE32,54.9677908,-1.4844933
7,L12,53.4349803,-2.8958012
8,NR28,52.8224263,1.3974920
9,SO21,51.0753776,-1.3162444
10,CV3,52.3909775,-1.4781403
11,TQ10,50.4234657,-3.8260896
12,NE37,54.9127512,-1.5279619
13,NW11,51.5783915,-0.1974603
14,ST14,52.9043124,-1.8699946
15,TN35,50.8828713,0.6140004
16,ME7,51.3797740,0.5557972
17,BB3,53.6978859,-2.4662858
18,SE14,51.4758845,-0.0424768
19,WA12,53.4533844,-2.6332824
20,GL1,51.8593662,-2.2437389
21,EC3R,51.5104555,-0.0835753
22,BS6,51.4707656,-2.6003841
23,NG22,53.1820817,-0.9786955
24,DE22,52.9340758,-1.4996719
25,BD6,53.7645222,-1.7861654
26,HR1,52.0590736,-2.6797236
27,BN10,50.7959843,0.0013219
28,PL17,50.5150098,-4.3103836
29,SA6,51.6761659,-3.9226054
30,CA15,54.7122276,-3.4809087
31,WV13,52.5851575,-2.0581222
32,DN1,53.5216788,-1.1307019
33,PH36,56.7221628,-5.8512969
34,LL12,53.0875778,-2.9891854
35,OX14,51.6675240,-1.2770907
36,CM17,51.7731801,0.1464635
37,TA11,51.0605815,-2.7024096
38,WF6,53.7003289,-1.4156390
39,G23,55.9024808,-4.2851022
40,L13,53.4184709,-2.9204372
41,GL16,51.7955780,-2.6128048
42,OL11,53.6059003,-2.1767392
43,SN26,51.6139830,-1.7881065
44,LL47,52.9020279,-4.0628852
45,ST17,52.7881373,-2.0991013
46,NE99,54.9704330,-1.6139305
47,DY11,52.3845094,-2.2621081
48,ST18,52.8150827,-2.0806107
49,DH99,54.7882304,-1.5493991
50,PE35,52.8271575,0.5090560
51,FK17,56.2399069,-4.2198630
52,CW12,53.1659013,-2.2135769
53,WV2,52.5736442,-2.1183430
54,NE16,54.9312689,-1.6926762
55,DE4,53.1268023,-1.5654429
56,BN25,50.7765238,0.1083361
57,NG33,52.8165291,-0.5808488
58,GU1,51.2430276,-0.5649390
59,ML9,55.7245642,-3.9676426
60,BT80,54.6462975,-6.7457200
61,NE65,55.3149288,-1.7484073
62,NE7,55.0001093,-1.5797332
63,SG8,52.0643705,-0.0147945
64,W6,51.4926401,-0.2287797
65,DN55,53.5129234,-1.1257209
66,FK10,56.1158189,-3.7831309
67,M46,53.5258654,-2.4922988
68,AB41,57.3739596,-2.1040725
69,KA26,55.2170854,-4.8357773
70,SN15,51.4723000,-2.0830579
71,LE16,52.4861071,-0.8959935
72,DH4,54.8540433,-1.4925925
73,WD99,51.6487760,-0.4220870
74,PH31,56.8922176,-4.8143283
75,LL18,53.3102991,-3.4760171
76,TF8,52.6293306,-2.4821233
77,PA66,56.3287392,-6.3528986
78,WD17,51.6639450,-0.4056406
79,RG17,51.4435994,-1.5030377
80,W1S,51.5112227,-0.1423455
81,TA7,51.1315610,-2.9107030
82,SY13,52.9521685,-2.6900901
83,G53,55.8211417,-4.3526677
84,PR8,53.6262751,-3.0097883
85,NP11,51.6438627,-3.1315958
86,KA12,55.6191336,-4.6651904
87,SK10,53.2756794,-2.1312485
88,WA8,53.3730238,-2.7415958
89,EC2M,51.5185932,-0.0862326
90,W13,51.5130201,-0.3212138
91,BT12,54.5929184,-5.9584163
92,FY4,53.7909588,-3.0275782
93,NN4,52.2144778,-0.8994462
94,TN27,51.1678981,0.6938213
95,G32,55.8488374,-4.1655409
96,DE72,52.8931608,-1.3588522
97,SA36,51.9577914,-4.6087195
98,BT82,54.8264822,-7.4303378
99,WF2,53.6723728,-1.5124139
100,LL15,53.1031832,-3.3161613
101,SO45,50.8468498,-1.3947660
102,CR90,51.3780681,-0.1132740
103,YO15,54.0949950,-0.1766616
104,LD8,52.2645156,-3.0484652
105,WR1,52.1956174,-2.2220478
106,RG14,51.3994972,-1.3231202
107,OX5,51.8306381,-1.2818093
108,PO39,50.6803617,-1.5401345
109,AB11,57.1392011,-2.0928839
110,TS27,54.7239957,-1.2907917
111,HP27,51.7206955,-0.8325872
112,BT9,54.5721032,-5.9500064
113,SL0,51.5259965,-0.5171775
114,NE22,55.1351381,-1.5871076
115,LE12,52.7677846,-1.1916550
116,TR4,50.2858425,-5.1375346
117,TS11,54.5876196,-1.0269506
118,IG5,51.5911739,0.0634560
119,RH5,51.1903735,-0.3438370
120,TQ1,50.4730506,-3.5235990
121,LL67,53.4111466,-4.4576366
122,LS26,53.7518196,-1.4495543
123,LL32,53.2580548,-3.8411359
124,LE21,52.6278450,-1.1405305
125,SA14,51.7350520,-4.1062507
126,CR7,51.3991799,-0.1067344
127,BA6,51.1420762,-2.7078987
128,G74,55.7689037,-4.1752217
129,IV5,57.4684807,-4.4108520
130,PA11,55.8570966,-4.5846807
131,RH20,50.9374494,-0.4705572
132,L5,53.4248813,-2.9771396
133,SE26,51.4279399,-0.0547761
134,AB16,57.1600441,-2.1566958
135,TS25,54.6630533,-1.2252844
136,BS15,51.4596293,-2.5068855
137,GU19,51.3599273,-0.6919847
138,LL51,52.9740004,-4.2389782
139,HR2,52.0098796,-2.7854912
140,ST15,52.9000776,-2.1504385
141,HP19,51.8236624,-0.8280878
142,PL33,50.6218997,-4.7316297
143,CH5,53.2040122,-3.0421400
144,TN22,50.9820991,0.1003886
145,LS19,53.8597280,-1.6839678
146,YO90,53.9597080,-1.0902501
147,S1,53.3800229,-1.4710499
148,DT5,50.5488467,-2.4424653
149,PA71,56.4806916,-5.9815120
150,BA11,51.2332006,-2.3245542
151,NR16,52.4735481,1.0538628
152,SW12,51.4463283,-0.1491401
153,PL1,50.3705757,-4.1542610
154,EH54,55.8923064,-3.5243492
155,SR2,54.8860669,-1.3765988
156,CV31,52.2778388,-1.5246631
157,SW4,51.4611107,-0.1364914
158,PE1,52.5866097,-0.2380334
159,G71,55.8223628,-4.0748284
160,LD2,52.1422615,-3.3937041
161,DN19,53.6841316,-0.3604471
162,KY16,56.3425731,-2.8225656
163,NG23,53.1163408,-0.7998116
164,KY1,56.1288777,-3.1375619
165,BT67,54.4869748,-6.2660667
166,SP9,51.2334590,-1.6649674
167,TQ4,50.4228675,-3.5722576
168,M50,53.4749848,-2.2944426
169,PA30,56.0133320,-5.4494977
170,TS29,54.7107686,-1.4202463
171,BS13,51.4120999,-2.6119989
172,PL9,50.3547404,-4.0872280
173,LA15,54.1558463,-3.1796666
174,DA13,51.3784991,0.3518275
175,BS41,51.4220916,-2.6534866
176,TS3,54.5605009,-1.1968742
177,G70,55.9498770,-3.9879809
178,EH17,55.9054568,-3.1436333
179,PA38,56.5953129,-5.3282856
180,HA6,51.6118666,-0.4224386
181,IV15,57.5993429,-4.4314883
182,BT16,54.5906801,-5.7976783
183,GU16,51.3095532,-0.7260287
184,DD10,56.7487217,-2.4270468
185,BH14,50.7214367,-1.9445851
186,PH10,56.6069517,-3.3593082
187,N14,51.6343428,-0.1308896
188,B15,52.4661665,-1.9233802
189,SS17,51.5216078,0.4376424
190,KA1,55.5952480,-4.4975073
191,TW15,51.4311588,-0.4585262
192,SP6,50.9365589,-1.8023782
193,BH25,50.7528300,-1.6579866
194,CA12,54.6025378,-3.1344633
195,AB51,57.2876297,-2.4038270
196,TN26,51.0964754,0.7973580
197,NE42,54.9620117,-1.8548407
198,NE70,55.5937070,-1.8171698
199,BD9,53.8128852,-1.7924051
200,EX39,51.0152570,-4.2457737
201,WS6,52.6585504,-2.0231546
202,G4,55.8676044,-4.2523731
203,GU4,51.2432497,-0.5403949
204,NE18,55.0378909,-1.8649114
205,G9,55.8687400,-4.2434910
206,CV12,52.4789841,-1.4724008
207,BT40,54.8457073,-5.8237859
208,B3,52.4850123,-1.9024305
209,WF11,53.7117458,-1.2561796
210,PO13,50.8122549,-1.1810192
211,YO12,54.2733410,-0.4249517
212,NE27,55.0329496,-1.5149818
213,SE28,51.5023617,0.1044350
214,WS1,52.5794509,-1.9786869
215,BN3,50.8352718,-0.1777197
216,CH32,53.3619659,-2.9976234
217,ME17,51.2331334,0.6111241
218,M30,53.4843432,-2.3551494
219,CB11,51.9992272,0.2120024
220,S70,53.5411537,-1.4749041
221,CA23,54.5152203,-3.4929534
222,TA18,50.8829255,-2.7874829
223,TR19,50.1001216,-5.6316273
224,GU47,51.3494201,-0.7920355
225,CB8,52.2302078,0.4279081
226,LN5,53.1742178,-0.5568934
227,TN11,51.2070078,0.2646847
228,NE47,54.9286141,-2.2549406
229,WC2N,51.5090810,-0.1248873
230,WS14,52.6640162,-1.8161526
231,RG21,51.2648843,-1.0886279
232,IP29,52.1908970,0.6587294
233,LS18,53.8386122,-1.6395178
234,CF14,51.5198959,-3.2042721
235,SY8,52.3650723,-2.6953443
236,TD6,55.5818814,-2.6932118
237,KW16,58.9608956,-3.2768723
238,SA73,51.7174251,-5.0122032
239,AB56,57.6743925,-2.9288909
240,TW10,51.4477641,-0.3029046
241,DG16,54.9971615,-3.0685694
242,WC1A,51.5201536,-0.1203458
243,SR7,54.8304225,-1.3630969
244,EX10,50.6931776,-3.2466004
245,PH33,56.8218973,-5.1122203
246,S43,53.2676283,-1.3399055
247,B91,52.4139981,-1.7833291
248,DA14,51.4250037,0.1117751
249,DL3,54.5324842,-1.5715984
250,TR2,50.2545424,-4.9504488
251,RM15,51.5087484,0.2762291
252,B30,52.4219610,-1.9277595
253,RG12,51.4067523,-0.7500218
254,WN8,53.5531891,-2.7694762
255,DN40,53.6210283,-0.2267379
256,GL4,51.8406968,-2.2188091
257,W1G,51.5193162,-0.1482679
258,EH3,55.9519117,-3.2070932
259,CV32,52.2979862,-1.5314910
260,M35,53.5072006,-2.1549109
261,LS88,53.7653158,-1.5014304
262,SA33,51.8495123,-4.4408804
263,BN12,50.8139666,-0.4292747
264,CH49,53.3810989,-3.1039353
265,BT7,54.5819589,-5.9245497
266,SW14,51.4653809,-0.2669998
267,HS4,57.8708700,-6.6963068
268,IV12,57.5743529,-3.8644897
269,E11,51.5686864,0.0135501
270,WR6,52.2298799,-2.3821575
271,BS9,51.4873280,-2.6267518
272,BH4,50.7212551,-1.8997372
273,NP7,51.8294388,-3.0112466
274,DA10,51.4417805,0.3049871
275,OX28,51.7869462,-1.4860576
276,NE83,54.9346400,-1.6151031
277,TD5,55.5881056,-2.4173178
278,YO41,53.9705289,-0.9005201
279,WN2,53.5359217,-2.5821236
280,NN9,52.3345261,-0.5945016
281,LN7,53.4932350,-0.3455524
282,SO25,51.0675552,-1.2973027
283,CB6,52.4046657,0.2216208
284,NE4,54.9739843,-1.6445129
285,CH31,53.3297000,-3.0988332
286,BB10,53.7995625,-2.2195134
287,N21,51.6366698,-0.0997398
288,BT77,54.4273568,-7.1188959
289,IV49,57.2290084,-5.9436275
290,WC1X,51.5266751,-0.1151125
291,PL15,50.6330692,-4.3969382
292,DH8,54.8569909,-1.8504107
293,PH24,57.2561205,-3.7449612
294,IV44,57.1087675,-5.8827494
295,NE9,54.9313591,-1.5854323
296,GU51,51.2843531,-0.8424509
297,RG4,51.4827626,-0.9698039
298,WC2E,51.5118792,-0.1233747
299,GL20,52.0022332,-2.1322680
300,TW14,51.4533965,-0.4217772
301,TD9,55.3973065,-2.7767413
302,CA4,54.8471428,-2.8318231
303,GL13,51.6924740,-2.4613325
304,SA13,51.6057851,-3.7258236
305,CM6,51.8783006,0.3661906
306,ME18,51.2417887,0.4154143
307,SL1,51.5178471,-0.6222163
308,HP3,51.7359452,-0.4707053
309,SA68,51.7295615,-4.7650739
310,M45,53.5473467,-2.2903765
311,TN9,51.1916379,0.2749493
312,LL41,52.9694465,-3.9393403
313,PA72,56.5183484,-5.9661761
314,CT1,51.2776176,1.0859171
315,CW3,52.9979416,-2.4084452
316,B6,52.5051401,-1.8860786
317,SW1X,51.4982019,-0.1566313
318,N17,51.5980699,-0.0717424
319,EN11,51.7655817,-0.0091349
320,SY2,52.7055790,-2.7292480
321,LL52,52.9248691,-4.2409055
322,ML7,55.8299394,-3.7954225
323,KW7,58.1867247,-3.5017376
324,OX18,51.7628074,-1.5916671
325,HU15,53.7485753,-0.6207806
326,HR8,52.0447156,-2.4453658
327,SP8,51.0373048,-2.2910983
328,BR1,51.4119969,0.0208833
329,KY99,56.0529028,-3.4360203
330,CH60,53.3264900,-3.0960749
331,BD13,53.7867466,-1.8612838
332,GL52,51.9190904,-2.0581561
333,WS2,52.5892854,-2.0043778
334,NE69,55.6047765,-1.7187958
335,L30,53.4845057,-2.9725553
336,PH6,56.3717976,-3.9999352
337,KT22,51.3015607,-0.3393496
338,PH42,56.9018804,-6.1427489
339,ZE1,60.1514981,-1.1705115
340,SG10,51.8467689,0.0754693
341,DA3,51.3841204,0.3083751
342,LL63,53.2184987,-4.4722288
343,PH20,57.0566670,-4.1475180
344,CT19,51.0890794,1.1679444
345,NG13,52.9486758,-0.9073222
346,NR99,52.6266507,1.3092653
347,LU7,51.9072379,-0.6629591
348,AL7,51.7969028,-0.1872378
349,HP22,51.8076076,-0.7693074
350,WD6,51.6573773,-0.2756334
351,PE14,52.6392767,0.2075469
352,B40,52.4569283,-1.7225262
353,N22,51.5998948,-0.1102841
354,BD17,53.8475875,-1.7683640
355,CO3,51.8844900,0.8563017
356,IP27,52.4302192,0.5819065
357,NP22,51.7712366,-3.2581432
358,SG14,51.8081282,-0.0940096
359,BT20,54.6585904,-5.6655050
360,M23,53.3995570,-2.2889120
361,MK45,52.0216132,-0.4703173
362,BD5,53.7781758,-1.7591405
363,CH42,53.3738774,-3.0227343
364,PA48,55.7384868,-6.3848707
365,S64,53.4907312,-1.2988429
366,B20,52.5155040,-1.9192015
367,LN10,53.1584629,-0.2171187
368,LL44,52.7909039,-4.0972031
369,SA41,51.9952157,-4.7058717
370,TW7,51.4730054,-0.3358063
371,TN16,51.2930684,0.0517089
372,CH33,53.2905598,-3.0626386
373,IV99,57.4813320,-4.2239504
374,WV98,52.4053675,-2.2199919
375,BT37,54.6775107,-5.9080795
376,SW11,51.4681801,-0.1637256
377,PH18,56.7731976,-3.8901941
378,SA5,51.6489448,-3.9712026
379,S13,53.3646431,-1.3836802
380,NR4,52.6120590,1.2566650
381,BN27,50.8718389,0.2634568
382,W8,51.5011337,-0.1943202
383,HU12,53.7238645,-0.1267684
384,KY9,56.2091528,-2.8357263
385,CT50,51.0795333,1.1435601
386,PO41,50.7009701,-1.4750973
387,PL30,50.5017989,-4.7283944
388,SY21,52.6581949,-3.2070323
389,GU25,51.4011369,-0.5718272
390,SW1E,51.4979064,-0.1397427
391,DN38,53.5604981,-0.3911523
392,SA8,51.7217976,-3.8477059
393,YO61,54.1179291,-1.1960242
394,PA5,55.8310416,-4.5097445
395,EH55,55.8464431,-3.5752962
396,NR17,52.5153469,0.9944934
397,SG6,51.9790227,-0.2227304
398,EX15,50.8776038,-3.3405027
399,TF9,52.8968634,-2.4700531
400,IP33,52.2429658,0.7086249
401,NE13,55.0437667,-1.6474838
402,SY5,52.6515091,-2.8328135
403,S95,53.4184381,-1.4036920
404,YO19,53.9059480,-1.0207826
405,BT22,54.5017687,-5.5145457
406,NW8,51.5322682,-0.1745786
407,SG2,51.8965414,-0.1640911
408,PO6,50.8465980,-1.0700466
409,PA43,55.7556052,-6.2841924
410,LS27,53.7486959,-1.6035106
411,KA17,55.6106607,-4.2791346
412,LS10,53.7622905,-1.5325445
413,LL28,53.2878956,-3.7618075
414,SG9,51.9507491,-0.0091601
415,SO31,50.8700098,-1.2998114
416,LL64,53.2287185,-4.5183068
417,OL15,53.6448116,-2.0999458
418,SE23,51.4414858,-0.0491513
419,WA1,53.3942536,-2.5714198
420,IV7,57.5832458,-4.3867307
421,BT45,54.7600743,-6.6390822
422,ME99,51.2783241,0.5190996
423,OL9,53.5391534,-2.1442485
424,PE21,52.9744837,-0.0238791
425,SP7,51.0050805,-2.1843108
426,CF83,51.5867146,-3.2188145
427,PR4,53.7546364,-2.8341777
428,YO32,54.0124771,-1.0593934
429,M31,53.4194153,-2.4242176
430,CT14,51.2167502,1.3854115
431,TF6,52.7362755,-2.5560077
432,AL5,51.8153821,-0.3520548
433,IG7,51.6143123,0.0956944
434,EX18,50.9020189,-3.8876032
435,CH62,53.3342830,-2.9815720
436,HG4,54.1569575,-1.5666498
437,S44,53.2252186,-1.3139748
438,PO16,50.8508807,-1.1591621
439,PO3,50.8162998,-1.0591580
440,CR5,51.3110960,-0.1414477
441,N81,51.5663135,-0.0767356
442,PO40,50.6824755,-1.5218166
443,KT9,51.3639202,-0.3032309
444,EX13,50.7871097,-3.0071442
445,MK4,52.0040459,-0.7842687
446,PO22,50.8001082,-0.6476773
447,PL24,50.3552292,-4.7111784
448,B18,52.4913461,-1.9255863
449,IV19,57.8039848,-4.0627885
450,EH34,55.9082618,-2.8808453
451,BS8,51.4575672,-2.6221985
452,G46,55.8033439,-4.3078361
453,SA63,51.8742755,-4.8563094
454,PR11,53.7945597,-2.6849868
455,CW98,53.0886586,-2.4311449
456,NW2,51.5581501,-0.2202562
457,TN7,51.0960303,0.1026001
458,G84,56.0141483,-4.7557604
459,SM3,51.3712541,-0.2162485
460,RH13,51.0337894,-0.3279851
461,PL7,50.3927332,-4.0456918
462,EH27,55.8907993,-3.4163880
463,BT13,54.6058982,-5.9596444
464,TD7,55.5365991,-2.8730161
465,NG2,52.9348691,-1.1344936
466,LS6,53.8200966,-1.5707608
467,NG8,52.9649766,-1.2134133
468,CA8,54.9394064,-2.6864490
469,RG8,51.5062415,-1.1063426
470,SK1,53.4075932,-2.1515586
471,KY7,56.1977936,-3.1580986
472,GU10,51.1965791,-0.7979139
473,CH30,53.3789453,-3.0984344
474,CF39,51.5999318,-3.4255613
475,WD18,51.6491262,-0.4146492
476,BD8,53.8017321,-1.7839736
477,S61,53.4441131,-1.3949172
478,DG1,55.0735752,-3.5817215
479,IV16,57.6647729,-4.3379167
480,GL55,52.0639021,-1.7695409
481,E1,51.5173859,-0.0595023
482,CM12,51.6282277,0.4145027
483,HX6,53.6968778,-1.9274340
484,M25,53.5283859,-2.2757491
485,S73,53.5244965,-1.3950715
486,PE2,52.5584209,-0.2605213
487,KA11,55.6186396,-4.6276773
488,SA48,52.1449088,-4.1132500
489,HP7,51.6644833,-0.6102425
490,KT14,51.3384121,-0.4882369
491,NR29,52.6942516,1.6362126
492,TA6,51.1256664,-3.0008114
493,CO5,51.8152485,0.8199292
494,SE11,51.4898569,-0.1115597
495,CV33,52.2554168,-1.4875182
496,HP10,51.6083649,-0.6974711
497,DA5,51.4406947,0.1461798
498,BA5,51.2125710,-2.6552733
499,GU30,51.0754992,-0.8042741
500,W1B,51.5143738,-0.1409766
501,BB18,53.9145757,-2.1720306
502,BL0,53.6484286,-2.3169628
503,CT9,51.3833635,1.3892980
504,SY7,52.4254259,-2.8867442
505,PH3,56.3019354,-3.7043969
506,SO41,50.7554651,-1.5665136
507,BA20,50.9379840,-2.6452044
508,B8,52.4911095,-1.8413277
509,PL12,50.4193974,-4.2502369
510,SO30,50.9198664,-1.3069752
511,S74,53.5009685,-1.4411464
512,B16,52.4771886,-1.9342144
513,DL16,54.6989434,-1.6056739
514,TA9,51.2255918,-2.9567138
515,GU21,51.3210516,-0.5804072
516,MK16,52.0896113,-0.7217314
517,SP5,51.0215790,-1.7703510
518,ML8,55.7314933,-3.8429126
519,CA14,54.6346926,-3.5380221
520,B94,52.3495479,-1.7938850
521,TR18,50.1174074,-5.5425056
522,L74,53.3930523,-2.9882833
523,SM4,51.3931470,-0.1996608
524,CM18,51.7552911,0.1060047
525,W1U,51.5187153,-0.1534804
526,WS13,52.6925953,-1.8189572
527,TS21,54.6281830,-1.4287816
528,PE32,52.7278429,0.6349892
529,SS3,51.5432969,0.7891019
530,E8,51.5436904,-0.0661452
531,MK3,51.9937256,-0.7517663
532,E14,51.5061699,-0.0184998
533,M1,53.4774963,-2.2362343
534,TW3,51.4681228,-0.3638733
535,WR99,52.1948626,-2.2031010
536,LE6,52.6570218,-1.2331852
537,NR26,52.9387975,1.2088922
538,WF1,53.6874355,-1.4935886
539,PE37,52.6410311,0.6995141
540,ME9,51.3358666,0.7219229
541,PH15,56.6097022,-3.9407898
542,BN14,50.8340609,-0.3817303
543,DA7,51.4656011,0.1459735
544,EH26,55.8334533,-3.2242391
545,IP28,52.3308885,0.5278417
546,KA23,55.6934667,-4.8575881
547,ML2,55.7768458,-3.9138139
548,BS99,51.4450405,-2.5956233
549,CO7,51.8816629,1.0052818
550,SO14,50.9071878,-1.3973862
551,EH45,55.6544414,-3.1908306
552,KA2,55.5956268,-4.5665250
553,LE67,52.7156016,-1.3623080
554,SY24,52.4727828,-4.0207042
555,KW13,58.4783320,-3.8949963
556,TW17,51.3982100,-0.4476473
557,NG3,52.9695328,-1.1273629
558,EX17,50.8116834,-3.7053311
559,BS35,51.5977668,-2.5487713
560,BT25,54.3959469,-6.1138325
561,HA1,51.5799962,-0.3383049
562,NG14,53.0177831,-1.0390068
563,BA2,51.3592543,-2.3793066
564,DG6,54.8371503,-4.0555469
565,KT20,51.2864936,-0.2311279
566,CW5,53.0619376,-2.5221792
567,CH63,53.3442867,-3.0125451
568,DN18,53.6811955,-0.4476705
569,HP5,51.7128444,-0.6085614
570,RG25,51.2271784,-1.1624243
571,PA19,55.9529227,-4.8261532
572,ME6,51.3228393,0.4347653
573,LL29,53.2891437,-3.7084555
574,BH1,50.7249204,-1.8602459
575,IV24,57.8912204,-4.3559987
576,GU46,51.3385812,-0.8320474
577,LD1,52.2607456,-3.3662735
578,WC2R,51.5116889,-0.1183208
579,TN20,51.0167888,0.2503568
580,FY3,53.8212841,-3.0204371
581,SK5,53.4351388,-2.1525459
582,EH37,55.8613517,-2.9598479
583,G61,55.9191422,-4.3315668
584,DN11,53.4488260,-1.0821884
585,EX23,50.8243103,-4.5328043
586,B12,52.4607564,-1.8836558
587,NP8,51.8618552,-3.1546668
588,BT30,54.3352858,-5.7027260
589,WD19,51.6308706,-0.3906420
590,TA22,51.0456933,-3.5451925
591,PH39,56.9123133,-5.8417320
592,LD6,52.3100474,-3.5092516
593,W1D,51.5133117,-0.1327615
594,NE17,54.9125064,-1.8171473
595,EH48,55.8989296,-3.6648047
596,GL2,51.8431569,-2.2702834
597,TA16,50.9094738,-2.7935591
598,PH43,57.0154066,-6.2814874
599,HS5,57.7653976,-7.0112702
600,SK6,53.4051341,-2.0802790
601,HP14,51.6524063,-0.8387317
602,SE27,51.4305427,-0.1023126
603,EH35,55.9108636,-2.9447636
604,GL7,51.7113826,-1.8967753
605,NR33,52.4540969,1.7167978
606,TR9,50.4134665,-4.9352015
607,KA3,55.6454507,-4.4967970
608,GL5,51.7381408,-2.2210178
609,G82,55.9517278,-4.5740174
610,SE4,51.4610268,-0.0352253
611,DN5,53.5383490,-1.1744232
612,EH28,55.9298906,-3.3887501
613,SN3,51.5616826,-1.7456549
614,RM1,51.5829090,0.1835712
615,ST13,53.1009844,-2.0193009
616,WR9,52.2667884,-2.1583548
617,OX39,51.7016670,-0.9158158
618,CT15,51.1725483,1.2818765
619,CF30,51.5196309,-3.1195669
620,FK8,56.1317020,-4.0593036
621,LE19,52.5844805,-1.2064606
622,SA99,51.6699957,-3.9454456
623,LA4,54.0702298,-2.8525004
624,NE5,54.9961368,-1.6888196
625,TS9,54.4659991,-1.1652944
626,PH34,56.9203102,-4.9276530
627,PH12,56.5758920,-3.1549046
628,PL31,50.4691274,-4.7226505
629,LL60,53.2154645,-4.2745450
630,WR4,52.2037340,-2.1898149
631,TR17,50.1255013,-5.4684713
632,NG10,52.9005705,-1.2841731
633,OX20,51.8558919,-1.3577401
634,PO14,50.8387029,-1.2188991
635,SO51,50.9959687,-1.5037602
636,BH5,50.7252980,-1.8322739
637,SP11,51.2275811,-1.5120802
638,BT3,54.6172417,-5.9037040
639,TD10,55.7114784,-2.4518628
640,EC1Y,51.5230455,-0.0924717
641,BB12,53.8034114,-2.2927166
642,TS6,54.5656389,-1.1534611
643,DD7,56.5028985,-2.7195271
644,E2,51.5296098,-0.0626270
645,SY15,52.5532761,-3.1331948
646,DH9,54.8684514,-1.7109643
647,WR14,52.1144453,-2.3204072
648,PE5,52.5748693,-0.3505212
649,DL7,54.3378836,-1.4855331
650,CH41,53.3942234,-3.0326994
651,G66,55.9404977,-4.1539230
652,BD98,53.8168050,-1.7653258
653,ST20,52.7982810,-2.2761054
654,LU3,51.9086465,-0.4426142
655,AL3,51.7803976,-0.3775501
656,DG8,54.8722279,-4.5163917
657,TN10,51.2120053,0.2840864
658,HU14,53.7284210,-0.4993848
659,PE10,52.7746766,-0.3771770
660,NR35,52.4618856,1.4328948
661,OX27,51.9363464,-1.1505518
662,CV9,52.5861653,-1.5616215
663,UB8,51.5352408,-0.4738505
664,SO15,50.9170655,-1.4245244
665,BN95,50.8231540,-0.3300240
666,DA4,51.3885873,0.2322190
667,SG12,51.8143338,-0.0169035
668,AB53,57.5250408,-2.3937282
669,TQ3,50.4439450,-3.5764405
670,IV25,57.8890332,-4.0419737
671,PL4,50.3755331,-4.1280288
672,KY3,56.0637385,-3.2305775
673,DN34,53.5573926,-0.1133186
674,RG10,51.4823983,-0.8532308
675,PO31,50.7554074,-1.3073561
676,KW14,58.5886150,-3.5547823
677,E3,51.5279410,-0.0252696
678,LL74,53.3191598,-4.2293713
679,SW1Y,51.5074759,-0.1345996
680,KW1,58.4566982,-3.1224058
681,OX2,51.7659091,-1.2807181
682,LU4,51.8983235,-0.4686662
683,S71,53.5744126,-1.4561067
684,LE95,52.6061749,-1.1905604
685,WA6,53.2727629,-2.7247283
686,W11,51.5122720,-0.2164413
687,BL1,53.5905339,-2.4448299
688,DL5,54.6176722,-1.5784510
689,LL76,53.3007473,-4.2397465
690,CT6,51.3644106,1.1295235
691,DG10,55.3200502,-3.4381997
692,BN45,50.8967169,-0.1902402
693,IV51,57.4741873,-6.2434474
694,BS22,51.3610555,-2.9293627
695,W3,51.5106335,-0.2679031
696,EH30,55.9856246,-3.3939638
697,BT17,54.5534071,-6.0198284
698,NG32,52.9513080,-0.6513436
699,KA18,55.4514123,-4.2427574
700,TQ12,50.5294305,-3.6123156
701,CH61,53.3491491,-3.1020354
702,AB37,57.3275842,-3.3524834
703,B31,52.4081108,-1.9733848
704,LA12,54.2031951,-3.0836203
705,KT19,51.3525254,-0.2707598
706,SS12,51.6053700,0.5205007
707,M24,53.5514675,-2.1982858
708,DN2,53.5337629,-1.1026264
709,SA38,52.0402001,-4.4763980
710,ME8,51.3613848,0.5967776
711,OL7,53.4907107,-2.1072525
712,SW3,51.4891244,-0.1657226
713,B63,52.4514517,-2.0699158
714,L20,53.4530856,-2.9890292
715,PE11,52.8055261,-0.1668409
716,HP9,51.6103131,-0.6407522
717,PA74,56.5329478,-6.2297513
718,MK18,51.9783490,-0.9695075
719,WF90,53.6744344,-1.4908921
720,KT5,51.3906807,-0.2867503
721,SW1H,51.4987321,-0.1337132
722,OX3,51.7622825,-1.2117320
723,L18,53.3805747,-2.9083261
724,SY9,52.4991445,-2.9906924
725,CF91,51.4655659,-3.1939894
726,EX20,50.7519249,-4.0192930
727,ML6,55.8677284,-3.9613387
728,LA21,54.3628108,-3.0785695
729,BT76,54.4200957,-7.1921901
730,PA67,56.3142224,-6.2313622
731,SE3,51.4694787,0.0196345
732,PO17,50.8897230,-1.1733100
733,AB34,57.0936452,-2.8113866
734,RG42,51.4277905,-0.7570056
735,LL30,53.3180209,-3.8162186
736,DT3,50.6422651,-2.4683307
737,SY12,52.9028027,-2.8954535
738,CH3,53.1647192,-2.8197563
739,CM13,51.6152603,0.3385145
740,KY13,56.2084615,-3.4334289
741,SP2,51.0750553,-1.8258872
742,TA21,50.9777888,-3.2445571
743,TA8,51.2451467,-2.9950311
744,HP12,51.6259591,-0.7795608
745,TA17,50.9082091,-2.8361593
746,SG7,52.0045147,-0.1754105
747,LN9,53.2172832,-0.1120184
748,TF7,52.6392300,-2.4504763
749,KT7,51.3881177,-0.3337295
750,LS23,53.9003968,-1.3484233
751,LL35,52.5467868,-4.0413751
752,RH2,51.2351176,-0.2030862
753,BT51,55.0602140,-6.6830653
754,DG9,54.8777681,-5.0228028
755,NE46,54.9790665,-2.1076079
756,G60,55.9225474,-4.4557485
757,SO18,50.9241213,-1.3620137
758,DE13,52.8072661,-1.6937154
759,RH3,51.2326558,-0.2778643
760,RM11,51.5710765,0.2185278
761,WF14,53.6797839,-1.6960552
762,WV1,52.5864721,-2.1158825
763,IV3,57.4764724,-4.2479131
764,NE26,55.0527885,-1.4577261
765,HU9,53.7560073,-0.2894330
766,L38,53.5244465,-3.0511596
767,AB39,56.9793770,-2.2170154
768,PL34,50.6597186,-4.7443504
769,S33,53.3438997,-1.7396963
770,PE29,52.3323569,-0.1792855
771,CV21,52.3768752,-1.2506300
772,EH42,55.9935934,-2.5254885
773,TR10,50.1676099,-5.1189764
774,L31,53.5134057,-2.9378113
775,DY6,52.4984945,-2.1644135
776,G51,55.8577477,-4.3165267
777,EH19,55.8724184,-3.1050450
778,L6,53.4189254,-2.9515685
779,PH17,56.6864534,-4.3747262
780,KW5,58.2871721,-3.3827428
781,BT36,54.6768193,-5.9562895
782,PL18,50.5154431,-4.2217893
783,TW2,51.4463540,-0.3544949
784,SO97,50.9484861,-1.3619614
785,IP7,52.0687092,0.9424582
786,TF13,52.5787304,-2.5824227
787,KY12,56.0770695,-3.4965561
788,RG31,51.4566563,-1.0456059
789,BB4,53.7037431,-2.2919089
790,EX22,50.8277967,-4.3680718
791,S3,53.3874982,-1.4740209
792,YO7,54.2246863,-1.3514255
793,HU17,53.8467937,-0.4287013
794,TF3,52.6674608,-2.4483576
795,WC1B,51.5194545,-0.1259647
796,LU5,51.9109540,-0.5140444
797,OL13,53.7008210,-2.2044339
798,CR44,51.3823469,-0.1328753
799,BT66,54.4550926,-6.3329464
800,DT1,50.7118787,-2.4448216
801,DE21,52.9340572,-1.4320438
802,TN32,50.9791601,0.4904213
803,CV35,52.2215666,-1.5932020
804,WV15,52.5159774,-2.3744083
805,HD9,53.5804475,-1.7973107
806,RH19,51.1256226,-0.0142356
807,PA8,55.9007534,-4.4531650
808,EH32,55.9674629,-2.9509183
809,G77,55.7739434,-4.3319996
810,OX1,51.7451905,-1.2614253
811,M6,53.4926929,-2.2990621
812,L32,53.4783273,-2.8892720
813,L16,53.3987049,-2.8874699
814,LS4,53.8105301,-1.5848257
815,IV18,57.7024425,-4.1548212
816,IV1,57.4840542,-4.2347448
817,G75,55.7507329,-4.1985241
818,CA21,54.4454251,-3.5163777
819,B42,52.5346593,-1.9124526
820,W12,51.5083087,-0.2407824
821,B61,52.3464135,-2.0683070
822,N5,51.5538671,-0.0986076
823,CV2,52.4244967,-1.4635562
824,RH1,51.2373631,-0.1576051
825,LL40,52.7567851,-3.8749667
826,B70,52.5209224,-2.0044143
827,BT49,55.0473469,-6.9508217
828,SR1,54.9061193,-1.3782118
829,BL4,53.5462411,-2.4015686
830,SL8,51.5787364,-0.7087112
831,TW18,51.4276663,-0.5044353
832,WA10,53.4542967,-2.7561819
833,IV40,57.2743006,-5.6473471
834,CH70,53.1927439,-2.9225567
835,DE3,52.9096926,-1.5425124
836,IV14,57.5857945,-4.5489794
837,SN11,51.4393874,-1.9990879
838,DN22,53.3237589,-0.9278773
839,SE1,51.4991997,-0.0916245
840,W4,51.4912309,-0.2640107
841,LL62,53.2108742,-4.3859556
842,OL16,53.6123706,-2.1313519
843,SN4,51.5304290,-1.8406454
844,CB22,52.1284294,0.1354878
845,TS16,54.5222224,-1.3559066
846,RH14,51.0330425,-0.4847114
847,GL9,51.5555981,-2.3033165
848,L28,53.4353243,-2.8656215
849,HP21,51.8052172,-0.8058581
850,BT93,54.4678402,-7.8268864
851,RG40,51.4001248,-0.8360988
852,BD15,53.8100727,-1.8383321
853,PA23,55.9537952,-4.9334508
854,SG4,51.9206087,-0.2595399
855,L33,53.4900539,-2.8768007
856,ST11,52.9657745,-2.0645769
857,LA19,54.2966419,-3.3802097
858,MK77,52.0414990,-0.8172717
859,CO8,51.9733754,0.7656644
860,DA18,51.4942848,0.1364966
861,PA3,55.8515026,-4.4456692
862,DG7,54.9685747,-4.0135194
863,GU35,51.1167316,-0.8490969
864,RH77,51.1387737,-0.1697793
865,SE5,51.4738341,-0.0914963
866,M4,53.4848676,-2.2300315
867,RM5,51.6013387,0.1647727
868,CH99,53.1763583,-2.8948703
869,DL98,54.5275154,-1.5597017
870,GU11,51.2489707,-0.7634252
871,M9,53.5220075,-2.2139408
872,PE15,52.5375062,0.0858982
873,BH22,50.8053042,-1.8885860
874,PA15,55.9425234,-4.7476824
875,FK11,56.1498950,-3.8517203
876,CV7,52.4467620,-1.5696830
877,SY99,52.7128256,-2.7496100
878,TN12,51.1724422,0.4445547
879,LA6,54.1754174,-2.6103862
880,RM14,51.5569004,0.2644910
881,M90,53.3635148,-2.2780731
882,LD3,51.9607697,-3.3699930
883,CV10,52.5260857,-1.5023310
884,L15,53.3975793,-2.9205924
885,WF17,53.7188923,-1.6426028
886,KA29,55.7557350,-4.8540850
887,CH43,53.3843247,-3.0596357
888,B44,52.5456674,-1.8850992
889,BN99,50.8231149,-0.3490648
890,N19,51.5652742,-0.1298808
891,KW9,58.0136902,-3.8588509
892,AB30,56.8467032,-2.4778654
893,RG18,51.4314131,-1.2602125
894,DD8,56.6558721,-2.9220215
895,EH44,55.6191253,-3.0635531
896,RM6,51.5757994,0.1295444
897,LN3,53.2418341,-0.4171042
898,DN9,53.5059237,-0.8929973
899,PA75,56.6125781,-6.1143844
900,CF31,51.5088642,-3.5784949
901,ME13,51.3036496,0.8945604
902,HP17,51.7768478,-0.8843057
903,GU33,51.0517463,-0.8903635
904,ME2,51.3915327,0.4815053
905,BT27,54.5091942,-6.0237607
906,RH11,51.1106463,-0.2081205
907,WA2,53.4108251,-2.5811919
908,NE10,54.9472035,-1.5540428
909,B90,52.3989824,-1.8260954
910,S14,53.3460139,-1.4444011
911,YO21,54.4770514,-0.7104006
912,SA1,51.6266504,-3.9402316
913,LA22,54.4229898,-2.9912561
914,SE20,51.4123248,-0.0594187
915,IV10,57.5845661,-4.1264965
916,NN15,52.3822978,-0.7029196
917,B21,52.5069380,-1.9415679
918,TS17,54.5355555,-1.3046467
919,EX4,50.7313128,-3.5267010
920,EH16,55.9226070,-3.1528183
921,E6,51.5264995,0.0538740
922,NE92,54.9417753,-1.6149882
923,B73,52.5537182,-1.8419070
924,NN7,52.2082231,-0.9287786
925,PA60,55.8786751,-5.9157646
926,NE88,54.9504939,-1.6102416
927,CV34,52.2816351,-1.5783799
928,DG2,55.0646623,-3.6588521
929,SS99,51.5477702,0.7142613
930,CM21,51.8122758,0.1452281
931,BA8,50.9962542,-2.4118650
932,BT42,54.8548266,-6.2755735
933,G34,55.8679239,-4.1123443
934,BN17,50.8149225,-0.5399594
935,SO52,50.9775491,-1.4438927
936,AB33,57.2255966,-2.7408680
937,NG18,53.1382628,-1.1840991
938,BD7,53.7834680,-1.7857283
939,WF15,53.7082837,-1.7004360
940,PO35,50.6868571,-1.0855937
941,LS1,53.7975973,-1.5516427
942,EX1,50.7280574,-3.5003048
943,EN9,51.6961713,0.0149921
944,DN15,53.6143425,-0.6522291
945,CO15,51.7963698,1.1548306
946,TN8,51.1951342,0.0779767
947,SA10,51.6875078,-3.8007881
948,RG29,51.2458368,-0.9459765
949,FK9,56.1448526,-3.9433641
950,EH15,55.9462301,-3.1125696
951,WV6,52.5968273,-2.1827471
952,TF5,52.7171890,-2.5392219
953,AB23,57.2132774,-2.0892647
954,NW1,51.5332718,-0.1438882
955,HD6,53.7024215,-1.7843814
956,BS7,51.4869402,-2.5814899
957,GU27,51.0813045,-0.7216203
958,TD8,55.4759086,-2.5423830
959,M38,53.5324424,-2.4232927
960,RH16,51.0014151,-0.0983341
961,BA13,51.2621061,-2.1816707
962,EX14,50.8140317,-3.1914327
963,PR25,53.6945907,-2.6937368
964,E10,51.5679608,-0.0143353
965,M41,53.4509537,-2.3655029
966,SY6,52.5371062,-2.7916170
967,SL5,51.4056392,-0.6638405
968,CV5,52.4124840,-1.5553890
969,DD4,56.4821151,-2.9356120
970,DY8,52.4608120,-2.1557543
971,EH99,55.9476410,-3.2037715
972,CR3,51.2881312,-0.0824599
973,BA10,51.1131761,-2.4478513
974,ME10,51.3436099,0.7353490
975,SM5,51.3686674,-0.1687930
976,PL22,50.4034560,-4.6518896
977,L1,53.4023772,-2.9804999
978,BD20,53.8982751,-1.9501915
979,PL28,50.5327501,-4.9673308
980,LL69,53.3860502,-4.3192563
981,B74,52.5843126,-1.8621609
982,HP8,51.6384149,-0.5700237
983,CM1,51.7467319,0.4577894
984,ZE3,59.8829471,-1.3043577
985,BT60,54.2928226,-6.6487383
986,AL2,51.7191035,-0.3354863
987,BA12,51.1708259,-2.1888898
988,EC2N,51.5157712,-0.0855193
989,MK10,52.0410506,-0.6982522
990,IP19,52.3402509,1.4942442
991,RM9,51.5409021,0.1338079
992,IP13,52.1891700,1.3206039
993,BT21,54.6400923,-5.5467400
994,RG45,51.3715067,-0.7995721
995,IP14,52.2060020,1.0312375
996,OX13,51.6758174,-1.3577318
997,HR6,52.2333219,-2.7731407
998,BS40,51.3465290,-2.6919383
999,KY6,56.1974394,-3.2004910
1000,IG11,51.5350133,0.0932901
1001,B80,52.2735522,-1.8923001
1002,G62,55.9426842,-4.3208961
1003,W1K,51.5111191,-0.1510369
1004,GU12,51.2517147,-0.7297556
1005,OX11,51.5995807,-1.2522494
1006,E15,51.5402208,0.0032141
1007,S6,53.4028113,-1.5130984
1008,EX34,51.1983243,-4.1058651
1009,SA9,51.7812869,-3.7689001
1010,CO1,51.8840222,0.8963748
1011,TS7,54.5339607,-1.1831961
1012,L22,53.4772218,-3.0279256
1013,SS4,51.5930469,0.7118562
1014,BA21,50.9520712,-2.6336799
1015,CH27,53.4197266,-3.0367611
1016,KA6,55.4162350,-4.5047370
1017,SA71,51.6679926,-4.9293245
1018,WV12,52.6058407,-2.0403978
1019,CR2,51.3480184,-0.0820678
1020,G20,55.8858609,-4.2826493
1021,CB4,52.2229046,0.1298349
1022,RH6,51.1730206,-0.1641717
1023,AB44,57.6682668,-2.4922135
1024,OX49,51.6506644,-1.0011957
1025,LL66,53.3797968,-4.4083964
1026,SY14,53.0312383,-2.7680979
1027,G69,55.8756055,-4.1009988
1028,BT74,54.3451053,-7.6650636
1029,WA14,53.3878102,-2.3607423
1030,SA16,51.6893287,-4.2569858
1031,BD99,53.7947563,-1.7663604
1032,LS29,53.9189109,-1.8006720
1033,G72,55.8041894,-4.1294723
1034,PL5,50.4110853,-4.1666681
1035,CA28,54.5435085,-3.5785239
1036,S11,53.3607754,-1.5078903
1037,RG41,51.4168077,-0.8633653
1038,TS20,54.5866832,-1.3138689
1039,TR7,50.4138677,-5.0748401
1040,SK23,53.3277544,-1.9485093
1041,B2,52.4893361,-1.8965236
1042,M21,53.4380163,-2.2729543
1043,B19,52.4971338,-1.9057716
1044,PO4,50.7901751,-1.0620764
1045,CF34,51.6105430,-3.6520832
1046,TN17,51.0962819,0.5367581
1047,PA29,55.8065512,-5.4754053
1048,LE4,52.6646001,-1.1247758
1049,HP1,51.7566422,-0.4869619
1050,NG12,52.9088921,-1.0522853
1051,SA46,52.2377669,-4.2574871
1052,IP4,52.0604324,1.1802287
1053,LS99,53.7758971,-1.5465407
1054,KT4,51.3784115,-0.2430170
1055,CT20,51.0798258,1.1630593
1056,CH4,53.1655250,-2.9481695
1057,DT10,50.9376061,-2.3343561
1058,SY25,52.2379435,-3.9371965
1059,E7,51.5471369,0.0275720
1060,TW8,51.4873197,-0.3063655
1061,NR19,52.6751626,0.9300324
1062,CW1,53.1036281,-2.4360889
1063,LS21,53.9116086,-1.6804367
1064,DA11,51.4344917,0.3506663
1065,ST12,52.9469490,-2.1727546
1066,EC4N,51.5128988,-0.0914843
1067,TN14,51.2978503,0.1574783
1068,BS34,51.5235020,-2.5667207
1069,PA69,56.3796685,-6.0774753
1070,BS2,51.4599036,-2.5819782
1071,PL25,50.3413052,-4.7782631
1072,LA23,54.3713964,-2.9129454
1073,LA3,54.0498853,-2.8793403
1074,WR3,52.2169397,-2.2139652
1075,EC2V,51.5155673,-0.0937819
1076,IV48,57.3130105,-6.1104379
1077,YO13,54.2874250,-0.4992911
1078,BD10,53.8329365,-1.7248454
1079,EH49,55.9759491,-3.5978664
1080,GL10,51.7436973,-2.2870616
1081,LE5,52.6383444,-1.0850557
1082,PA32,56.1975670,-5.1253583
1083,OL14,53.7144173,-2.1009851
1084,WA7,53.3305871,-2.7036909
1085,BL7,53.6317625,-2.4223993
1086,BT28,54.5227918,-6.0866891
1087,BT4,54.6025629,-5.8696150
1088,HD3,53.6536196,-1.8320544
1089,BS27,51.2721820,-2.7717346
1090,BT11,54.5762546,-5.9981326
1091,EH12,55.9418955,-3.2791180
1092,SW20,51.4109597,-0.2277548
1093,BT64,54.4490883,-6.3901653
1094,IV56,57.3655388,-6.4303864
1095,PA31,56.0525103,-5.4583508
1096,NE34,54.9717889,-1.4224790
1097,SN1,51.5565291,-1.7831690
1098,UB11,51.5113205,-0.4469162
1099,CV8,52.3519562,-1.5420194
1100,RM3,51.6019384,0.2244542
1101,LN6,53.2002374,-0.6001511
1102,FK6,56.0212698,-3.9154287
1103,LU1,51.8744779,-0.4270575
1104,AL1,51.7489129,-0.3237560
1105,HA9,51.5607305,-0.2857817
1106,BT44,54.9722864,-6.2875240
1107,SE2,51.4896972,0.1159327
1108,SA45,52.2081814,-4.3582137
1109,LL71,53.3295165,-4.3709519
1110,NR10,52.7359335,1.2410548
1111,TR3,50.2174347,-5.1124560
1112,SS5,51.6077523,0.6479542
1113,AB10,57.1353138,-2.1202461
1114,EC2P,51.5241889,-0.1110467
1115,BN43,50.8360644,-0.2669108
1116,SL95,51.4991652,-0.5390536
1117,PL16,50.6464378,-4.2640338
1118,KA4,55.5991418,-4.3816208
1119,MK43,52.1119082,-0.5583834
1120,SR4,54.9003709,-1.4255904
1121,L72,53.4772447,-2.9780099
1122,CH28,53.4005658,-3.1119268
1123,AL9,51.7445903,-0.1976882
1124,CO6,51.9252061,0.7920011
1125,BT1,54.5997539,-5.9284735
1126,LL65,53.3010223,-4.5703675
1127,LE55,52.6327983,-1.1253367
1128,B62,52.4571593,-2.0337937
1129,B75,52.5787280,-1.8085150
1130,CB10,52.0287530,0.2627396
1131,WA13,53.3823451,-2.4693236
1132,SW2,51.4493013,-0.1198466
1133,TQ9,50.4165597,-3.6910718
1134,AB25,57.1527168,-2.1140756
1135,PA18,55.8884779,-4.8880972
1136,N11,51.6137464,-0.1388912
1137,SW9,51.4693401,-0.1138947
1138,CA27,54.4910171,-3.5934811
1139,SK13,53.4486314,-1.9643687
1140,GU7,51.1896186,-0.6121645
1141,CM22,51.8657844,0.2271806
1142,FK14,56.1671323,-3.6556229
1143,HR9,51.9077349,-2.5827297
1144,W5,51.5131903,-0.3024217
1145,PE4,52.6119535,-0.2626267
1146,OX44,51.6975079,-1.1223775
1147,IV21,57.7243122,-5.7211462
1148,UB6,51.5389820,-0.3406322
1149,CM0,51.6627266,0.8342244
1150,BT19,54.6513331,-5.6671749
1151,TN29,50.9938289,0.9325174
1152,GU17,51.3288028,-0.7891564
1153,M14,53.4484029,-2.2258291
1154,LL27,53.1485258,-3.8275336
1155,CF10,51.4748057,-3.1731995
1156,DH97,54.7927104,-1.5351133
1157,CT7,51.3704017,1.2964069
1158,B37,52.4784345,-1.7421791
1159,PO19,50.8382074,-0.7783183
1160,UB9,51.5862858,-0.4926586
1161,CB5,52.2123417,0.1539646
1162,SE9,51.4451387,0.0548051
1163,EC4P,51.5245399,-0.1120477
1164,LA1,54.0467054,-2.7994612
1165,M40,53.5041026,-2.1909788
1166,CT11,51.3360593,1.4132445
1167,MK12,52.0583718,-0.8166917
1168,E98,51.5080232,-0.0644425
1169,LE94,52.4836845,-0.9055232
1170,G64,55.9114153,-4.2170017
1171,EN7,51.7123101,-0.0696748
1172,DN35,53.5545579,-0.0363510
1173,TR11,50.1498016,-5.0876959
1174,TR23,49.9536038,-6.3526466
1175,NE36,54.9454581,-1.4414688
1176,PA37,56.4668384,-5.3919661
1177,PA12,55.7942177,-4.6265019
1178,TS15,54.4872991,-1.3351828
1179,EX12,50.7068721,-3.0818842
1180,AB36,57.1971865,-3.0683197
1181,E12,51.5507498,0.0529473
1182,NG16,53.0273823,-1.2949848
1183,LS16,53.8520890,-1.6036383
1184,WS8,52.6474687,-1.9332437
1185,LE11,52.7680459,-1.2191752
1186,SE22,51.4544389,-0.0724071
1187,TR6,50.3419388,-5.1530283
1188,TS8,54.5216751,-1.2327726
1189,L21,53.4713811,-3.0003559
1190,SW10,51.4837840,-0.1827911
1191,SE18,51.4843462,0.0726765
1192,AB54,57.4540447,-2.7616880
1193,PA21,55.9022321,-5.2508811
1194,CO2,51.8697798,0.8943735
1195,LN4,53.1484011,-0.3799049
1196,OX10,51.6073094,-1.1287254
1197,DY1,52.5164236,-2.0965765
1198,EX33,51.1152054,-4.1742651
1199,NP20,51.5904204,-3.0065286
1200,HD7,53.6239529,-1.8779019
1201,SR8,54.7667388,-1.3365695
1202,EH29,55.9568445,-3.4034273
1203,NE33,54.9912555,-1.4295666
1204,LL23,52.9052232,-3.6018542
1205,HS9,56.9730005,-7.4722587
1206,CF44,51.7182832,-3.4588338
1207,WF12,53.6833333,-1.6199223
1208,BH2,50.7210819,-1.8840411
1209,BT34,54.1531164,-6.1774814
1210,WA5,53.3990847,-2.6388726
1211,BN1,50.8423629,-0.1395112
1212,BS31,51.4087555,-2.4924616
1213,CM2,51.7208592,0.4866343
1214,BT43,54.8926899,-6.2647155
1215,EX35,51.2239866,-3.8274296
1216,GU32,51.0090053,-0.9681798
1217,TD3,55.7018161,-2.5737927
1218,TR20,50.1318144,-5.4879968
1219,TR26,50.2028293,-5.4789995
1220,CO14,51.8502715,1.2671935
1221,PL8,50.3354884,-4.0107277
1222,S45,53.1656275,-1.4213229
1223,WS3,52.6197704,-1.9920867
1224,SA11,51.6748529,-3.7614044
1225,CM99,51.7424938,0.5005836
1226,TN3,51.1208107,0.2480518
1227,W1H,51.5176870,-0.1611043
1228,BT63,54.4072137,-6.3906387
1229,TS10,54.6067666,-1.0693075
1230,TS23,54.6094056,-1.2851796
1231,EH1,55.9506608,-3.1929310
1232,TR25,49.9642737,-6.2933395
1233,AB35,57.0384103,-3.1496008
1234,DE56,53.0219424,-1.4750676
1235,SR6,54.9355496,-1.3791680
1236,BS24,51.3303607,-2.9292938
1237,NN11,52.2417044,-1.1794055
1238,G13,55.8936110,-4.3477509
1239,WN6,53.5752593,-2.6718000
1240,BN51,50.8048207,-0.0586638
1241,S40,53.2341072,-1.4461714
1242,LA13,54.1182576,-3.1983726
1243,NW10,51.5412842,-0.2480596
1244,LA14,54.1182959,-3.2311912
1245,CH34,53.2790404,-2.9050848
1246,HP2,51.7643313,-0.4522784
1247,KW15,58.9800047,-2.9597106
1248,WN1,53.5533114,-2.6281505
1249,CW2,53.0798218,-2.4465966
1250,YO11,54.2639772,-0.3963875
1251,EX19,50.8780171,-4.0055880
1252,S41,53.2472723,-1.4284090
1253,PE9,52.6545544,-0.4804678
1254,PL10,50.3452071,-4.2112874
1255,DN33,53.5394663,-0.0990748
1256,WV99,52.6713503,-2.4202904
1257,TR8,50.4004251,-5.0394620
1258,WC2H,51.5133603,-0.1273492
1259,LL17,53.2523853,-3.4370183
1260,BH15,50.7223607,-1.9855060
1261,NG25,53.0742802,-0.9627263
1262,PA65,56.4691539,-5.7255045
1263,PR3,53.8688401,-2.7203057
1264,CB7,52.3612799,0.3252127
1265,KT8,51.4015316,-0.3631647
1266,SL6,51.5239786,-0.7292167
1267,S2,53.3696130,-1.4480046
1268,BA7,51.0894942,-2.5194603
1269,GL18,51.9416934,-2.4150411
1270,W1C,51.5144348,-0.1491314
1271,WV10,52.6191468,-2.1134738
1272,L68,53.4730536,-2.9606906
1273,TN36,50.9203030,0.6990613
1274,SK7,53.3695112,-2.1434037
1275,CF64,51.4332091,-3.1917807
1276,EC1N,51.5198912,-0.1087995
1277,CM9,51.7408752,0.7010671
1278,HA0,51.5513241,-0.3056919
1279,SL2,51.5356977,-0.6058076
1280,PA13,55.8934699,-4.6315923
1281,ML11,55.6671734,-3.7891903
1282,ST21,52.8725507,-2.2694515
1283,SL9,51.5978678,-0.5557695
1284,EH18,55.8768124,-3.1225310
1285,WA3,53.4563710,-2.5477451
1286,IV31,57.7169577,-3.2907466
1287,CA20,54.4104053,-3.4622406
1288,KT18,51.3160216,-0.2633727
1289,CM24,51.8992323,0.2039133
1290,G68,55.9529877,-4.0160663
1291,NP19,51.5882819,-2.9635880
1292,EX37,50.9786853,-3.9538059
1293,L70,53.4040997,-2.9567513
1294,SO23,51.0685878,-1.3082473
1295,BT46,54.8654569,-6.6634111
1296,LL49,52.9290448,-4.1379154
1297,TN23,51.1399102,0.8570045
1298,S7,53.3551559,-1.4910563
1299,IP8,52.0630417,1.0792503
1300,WR7,52.1965989,-2.0491854
1301,PO8,50.9135161,-1.0116749
1302,PA4,55.8748490,-4.3953267
1303,PA73,56.4966381,-6.1836106
1304,EC4Y,51.5129380,-0.1088079
1305,CF36,51.4850992,-3.6994938
1306,CO9,51.9689789,0.6094407
1307,HS7,57.4472485,-7.3406990
1308,LN13,53.2650480,0.1836393
1309,SG18,52.0825989,-0.2645551
1310,CF37,51.6033134,-3.3343249
1311,NE3,55.0104241,-1.6354989
1312,KA15,55.7484284,-4.6263497
1313,SP1,51.0752210,-1.7887748
1314,LL37,52.6659968,-4.0837468
1315,EH47,55.8586358,-3.6661035
1316,EC2Y,51.5194073,-0.0935545
1317,LL57,53.2068931,-4.1118949
1318,FK13,56.1519068,-3.7398856
1319,DH6,54.7527793,-1.4640636
1320,B60,52.3240959,-2.0491825
1321,CA22,54.4806529,-3.5329009
1322,TW5,51.4824354,-0.3862521
1323,S63,53.5185718,-1.3305698
1324,WA55,53.3912093,-2.6088591
1325,BN24,50.8167744,0.3261108
1326,CH7,53.1699651,-3.1322347
1327,LS13,53.8108069,-1.6353790
1328,LE15,52.6564368,-0.7019964
1329,SA61,51.8001658,-4.9741219
1330,SM1,51.3669805,-0.1928536
1331,KA30,55.7972875,-4.8634584
1332,PH2,56.3870890,-3.4038513
1333,PA26,56.2605328,-4.9351065
1334,ST4,52.9945102,-2.1854192
1335,BT41,54.7322694,-6.2572788
1336,NG6,52.9985112,-1.1921785
1337,CW9,53.2584003,-2.5017811
1338,LL55,53.1332669,-4.2035215
1339,PA24,56.1584351,-4.9044299
1340,BS11,51.4973558,-2.6752683
1341,LL46,52.8552904,-4.1072866
1342,BR2,51.3872690,0.0224568
1343,TS14,54.5324596,-1.0625812
1344,SA2,51.6191141,-3.9979674
1345,DN21,53.4200117,-0.7020715
1346,DE45,53.2147846,-1.6782889
1347,PE7,52.5371201,-0.2061648
1348,DG12,54.9901401,-3.2513519
1349,LL61,53.1959058,-4.2626250
1350,KY10,56.2307947,-2.7000650
1351,RM13,51.5252467,0.1931007
1352,B97,52.2996987,-1.9545616
1353,PR1,53.7573394,-2.7017204
1354,BN5,50.9270143,-0.2687648
1355,KT6,51.3874100,-0.3026903
1356,HG1,53.9999818,-1.5353201
1357,SM7,51.3229202,-0.2014229
1358,B36,52.5042044,-1.7784585
1359,TN13,51.2768935,0.1838655
1360,SO19,50.9019834,-1.3549180
1361,SN12,51.3722003,-2.1366155
1362,PE25,53.1539916,0.3342567
1363,BH12,50.7374063,-1.9273505
1364,YO43,53.8493882,-0.6843122
1365,B7,52.4941549,-1.8723775
1366,CH25,53.3970307,-3.0114500
1367,DY9,52.4332065,-2.1225080
1368,NR5,52.6407866,1.2286953
1369,ST3,52.9807695,-2.1231617
1370,GU34,51.1389750,-0.9871214
1371,CF95,51.4811947,-3.1710394
1372,CF47,51.7515033,-3.3750262
1373,PH26,57.3300387,-3.6062492
1374,UB5,51.5431381,-0.3764324
1375,PL27,50.5237028,-4.8751550
1376,LL73,53.3352368,-4.2449087
1377,NR7,52.6444333,1.3363787
1378,RM2,51.5843336,0.2033607
1379,RG5,51.4520535,-0.8996446
1380,FK1,55.9851464,-3.7946922
1381,CF72,51.5298928,-3.4021313
1382,EN3,51.6604157,-0.0366574
1383,FK7,56.0964876,-3.9179582
1384,FK2,56.0050252,-3.7562534
1385,G79,55.7710036,-4.2230758
1386,BT70,54.5139825,-6.8875077
1387,KY15,56.2993375,-3.0544200
1388,CO12,51.9312042,1.2528957
1389,SR5,54.9226017,-1.4241884
1390,SN16,51.5920459,-2.0848580
1391,CA5,54.8550800,-3.0194131
1392,SG17,52.0345727,-0.3353918
1393,CA7,54.8076079,-3.2392072
1394,LS28,53.8023004,-1.6700027
1395,GL8,51.6425527,-2.1709169
1396,UB4,51.5259518,-0.4084729
1397,RM20,51.4784335,0.2847884
1398,TS5,54.5503419,-1.2523379
1399,CR0,51.3732242,-0.0775432
1400,SK14,53.4520427,-2.0566162
1401,BS37,51.5409765,-2.4141076
1402,HA4,51.5704138,-0.4107522
1403,RG7,51.3976703,-1.0774783
1404,CM77,51.8667384,0.5523052
1405,B71,52.5360066,-1.9904942
1406,SS0,51.5466710,0.6877161
1407,G65,55.9734685,-4.0575613
1408,GL6,51.7343681,-2.1938197
1409,WS5,52.5659951,-1.9583275
1410,HU11,53.8275962,-0.2216762
1411,S18,53.2994670,-1.4743449
1412,EH10,55.9198652,-3.2111151
1413,DA16,51.4648617,0.1062654
1414,AB43,57.6572238,-2.0442865
1415,HU7,53.7909078,-0.3292706
1416,SW15,51.4570342,-0.2284869
1417,SY19,52.5793884,-3.6346543
1418,PH41,57.0035759,-5.8324670
1419,NR18,52.5706689,1.1079084
1420,EX3,50.6868408,-3.4596319
1421,NP23,51.7854030,-3.1974216
1422,UB7,51.5044432,-0.4691618
1423,WF10,53.7240007,-1.3477830
1424,UB1,51.5155606,-0.3733091
1425,DN39,53.6166111,-0.3355842
1426,SS15,51.5774890,0.4281305
1427,TR27,50.1828787,-5.4037493
1428,PO18,50.8649547,-0.8151400
1429,BN88,50.8274838,-0.1400575
1430,IV13,57.3421909,-4.0206217
1431,BT26,54.4542746,-6.0639346
1432,CH64,53.2882069,-3.0476231
1433,CF46,51.6647879,-3.3006590
1434,SK15,53.4870446,-2.0469859
1435,TN39,50.8468689,0.4514689
1436,KY2,56.1240311,-3.1846279
1437,KW8,58.1152848,-3.6650988
1438,L80,53.4692073,-2.9690856
1439,YO31,53.9699082,-1.0644173
1440,SA31,51.8567444,-4.3082937
1441,LS98,53.7852835,-1.5385120
1442,TR5,50.3101600,-5.1967350
1443,IV30,57.6524753,-3.3254479
1444,S12,53.3482005,-1.4064871
1445,N12,51.6149237,-0.1776502
1446,YO1,53.9586237,-1.0828142
1447,GU6,51.1405502,-0.4841941
1448,RG19,51.3912084,-1.2443747
1449,CF42,51.6673560,-3.5238408
1450,SA3,51.5817133,-4.0513777
1451,DE65,52.8669174,-1.6116951
1452,DA17,51.4861908,0.1491035
1453,HX3,53.7267217,-1.8442590
1454,HU18,53.9099131,-0.1689549
1455,EH13,55.9067795,-3.2429491
1456,PA76,56.3340203,-6.3943735
1457,DT2,50.7497424,-2.4509175
1458,G78,55.7929059,-4.4098882
1459,IV45,57.0717262,-5.9065595
1460,TR15,50.2331276,-5.2380409
1461,NR9,52.6336604,1.1078046
1462,YO8,53.7812636,-1.0606474
1463,PA14,55.9273200,-4.6642031
1464,GU14,51.2939331,-0.7635580
1465,BS21,51.4350533,-2.8498455
1466,CV36,52.0590955,-1.6218655
1467,WV16,52.5095974,-2.4409185
1468,MK14,52.0632325,-0.7553798
1469,GU3,51.2467422,-0.6286183
1470,N9,51.6285027,-0.0580156
1471,TS26,54.6889550,-1.2326907
1472,IV32,57.6307930,-3.1048715
1473,TW6,51.4709495,-0.4483159
1474,SE24,51.4563048,-0.1002302
1475,DD11,56.5735539,-2.5990122
1476,SE10,51.4846226,0.0003716
1477,UB18,51.5007178,-0.4026841
1478,B13,52.4375032,-1.8790028
1479,KA28,55.7540267,-4.9254250
1480,CH44,53.4153020,-3.0370999
1481,DN3,53.5460610,-1.0593250
1482,TR13,50.1095854,-5.2866459
1483,BT55,55.1792390,-6.7104568
1484,BB1,53.7567872,-2.4629790
1485,HD4,53.6256253,-1.7978530
1486,NE82,54.9346400,-1.6151031
1487,PL95,50.3644065,-4.1044393
1488,NE23,55.0800801,-1.5829860
1489,DT11,50.8615403,-2.1834102
1490,BR4,51.3750032,-0.0083853
1491,SK2,53.3943065,-2.1323676
1492,G90,55.8689906,-4.2410555
1493,BD3,53.7984863,-1.7267147
1494,TN31,50.9628690,0.6855793
1495,L11,53.4478258,-2.9154238
1496,DN20,53.5580271,-0.5063124
1497,SW17,51.4307971,-0.1648874
1498,M3,53.4836687,-2.2528623
1499,BT32,54.3355257,-6.2456426
1500,UB3,51.5052003,-0.4245561
1501,PO10,50.8522374,-0.9293902
1502,WS11,52.6880429,-2.0173886
1503,BN18,50.8476816,-0.5840822
1504,PO5,50.7886425,-1.0861972
1505,KY14,56.3108245,-3.2419856
1506,NG17,53.1160576,-1.2615156
1507,SA7,51.6647175,-3.8881517
1508,PR6,53.6677742,-2.6119293
1509,G21,55.8822282,-4.2201317
1510,HS3,57.8774467,-6.8512421
1511,DL14,54.6515089,-1.6921535
1512,B24,52.5196415,-1.8271375
1513,BT14,54.6214570,-5.9626627
1514,AB24,57.1639292,-2.1079218
1515,B45,52.3885168,-2.0090938
1516,BD16,53.8484508,-1.8331337
1517,CH88,53.1945673,-2.8745510
1518,BN13,50.8326835,-0.4113838
1519,CV22,52.3590790,-1.2784656
1520,IG2,51.5760405,0.0815331
1521,BT23,54.5644760,-5.7153624
1522,PA16,55.9425162,-4.8009273
1523,W2,51.5151251,-0.1854875
1524,CV1,52.4094028,-1.5065272
1525,PA25,56.2143195,-5.0433625
1526,NN16,52.4046781,-0.7057147
1527,SL7,51.5753276,-0.7778690
1528,NW6,51.5421720,-0.1962878
1529,S10,53.3767062,-1.5185445
1530,CB25,52.2608073,0.2541302
1531,IG3,51.5631159,0.1029088
1532,IV2,57.4680582,-4.1860306
1533,PO12,50.7979491,-1.1418001
1534,PH9,56.6480509,-3.6899621
1535,CM20,51.7753987,0.1026721
1536,GU15,51.3355019,-0.7376588
1537,CB21,52.1280380,0.2815412
1538,AL10,51.7604054,-0.2323864
1539,SM2,51.3518298,-0.1987871
1540,NW7,51.6148052,-0.2348917
1541,PA80,56.5659697,-5.7864650
1542,LL24,53.0577084,-3.7859794
1543,PA45,55.8196554,-6.1668358
1544,BT71,54.5128046,-6.7043034
1545,NR13,52.6338547,1.4697849
1546,CR6,51.3092312,-0.0527574
1547,LN12,53.3292696,0.2640547
1548,BH8,50.7419912,-1.8519359
1549,DD5,56.4799789,-2.8580673
1550,L3,53.4084083,-2.9844510
1551,PH50,56.7145473,-4.9649240
1552,IV41,57.2728062,-5.7361569
1553,ST6,53.0579381,-2.1895987
1554,CM92,51.7693558,0.0612532
1555,WV9,52.6376624,-2.1435341
1556,PH16,56.7067956,-3.8062465
1557,NN6,52.3269298,-0.9458447
1558,MK2,51.9905210,-0.7252031
1559,PL32,50.6332624,-4.6619385
1560,OX16,52.0625051,-1.3425431
1561,NP18,51.6087786,-2.9423237
1562,TR14,50.2107232,-5.2967361
1563,RH18,51.0932269,0.0356630
1564,BS1,51.4532627,-2.5935387
1565,NR21,52.8414338,0.8522567
1566,CT21,51.0725975,1.0760693
1567,CF32,51.5599583,-3.5842696
1568,BD19,53.7273298,-1.7141196
1569,N20,51.6292552,-0.1743686
1570,SO43,50.8862421,-1.5893747
1571,SY18,52.4415588,-3.5494041
1572,BH7,50.7364005,-1.8263105
1573,BD1,53.7966616,-1.7545344
1574,LS24,53.8687779,-1.2530036
1575,KA14,55.7401813,-4.6733417
1576,FK16,56.1911637,-4.0610009
1577,WV4,52.5614099,-2.1447119
1578,ME3,51.4354568,0.5468331
1579,SS2,51.5508903,0.7167546
1580,LA5,54.1438808,-2.7918796
1581,BT69,54.4199975,-6.9502828
1582,ME16,51.2738310,0.4960741
1583,BL9,53.5918117,-2.2870531
1584,E5,51.5588861,-0.0537874
1585,TN24,51.1497728,0.8877433
1586,DY14,52.3804492,-2.4685572
1587,KA10,55.5504370,-4.6476679
1588,NG4,52.9710572,-1.0877171
1589,NG19,53.1605766,-1.1983361
1590,BT61,54.3687705,-6.6224601
1591,SA35,51.9710664,-4.5582429
1592,KA25,55.7533969,-4.6885437
1593,HS1,58.2126144,-6.3814786
1594,CH47,53.3964675,-3.1691925
1595,BT48,55.0103984,-7.3273919
1596,IG1,51.5594197,0.0733642
1597,BT31,54.2769937,-5.9689188
1598,NE68,55.5798149,-1.6589189
1599,NP15,51.7263322,-2.8867108
1600,PH11,56.6381789,-3.2349256
1601,PH35,57.0755394,-4.9027758
1602,CF33,51.5255628,-3.6931827
1603,RG23,51.2582357,-1.1500593
1604,IV28,58.0097064,-4.1581729
1605,BN21,50.7726897,0.2765565
1606,LL33,53.2507498,-3.9789879
1607,TN38,50.8637392,0.5436960
1608,LN11,53.3730382,0.0260752
1609,LL45,52.8220907,-4.0961914
1610,WC1E,51.5217107,-0.1328422
1611,FY8,53.7508559,-3.0027549
1612,BD21,53.8642310,-1.9076629
1613,CF35,51.5227048,-3.5254789
1614,HD5,53.6474167,-1.7462168
1615,GU20,51.3687408,-0.6579475
1616,WR5,52.1748639,-2.2020856
1617,G44,55.8141896,-4.2556442
1618,KW11,58.3080468,-4.1362061
1619,GL53,51.8795927,-2.0676025
1620,DG11,55.1136190,-3.3386407
1621,MK6,52.0295557,-0.7429696
1622,CV6,52.4341647,-1.5074757
1623,DH2,54.8597025,-1.5995581
1624,L14,53.4179489,-2.8808404
1625,DL12,54.5721304,-1.9855857
1626,EX24,50.7404493,-3.0893775
1627,GU24,51.3303573,-0.6282203
1628,GU9,51.2191370,-0.7942479
1629,KW3,58.3064884,-3.2804565
1630,CF99,51.4645050,-3.1613500
1631,EX2,50.7095079,-3.5143056
1632,BS28,51.2260512,-2.8149367
1633,LL53,52.8841626,-4.4927499
1634,BS16,51.4868114,-2.5100273
1635,BL3,53.5646619,-2.4321772
1636,NE11,54.9399167,-1.6358329
1637,BT94,54.3760757,-7.5336959
1638,PA9,55.8072925,-4.5569521
1639,IV26,57.9267694,-5.1938210
1640,LS17,53.8600575,-1.5277566
1641,CB24,52.2782051,0.0817273
1642,KA22,55.6499957,-4.8088415
1643,IP20,52.4065354,1.3191966
1644,SE21,51.4389890,-0.0887527
1645,SE13,51.4594042,-0.0095672
1646,PA63,56.3817723,-5.7158719
1647,BT35,54.1620226,-6.4418816
1648,E1W,51.5091122,-0.0589168
1649,N15,51.5826261,-0.0811730
1650,WV3,52.5790352,-2.1565201
1651,TF4,52.6626967,-2.4715605
1652,SW5,51.4915827,-0.1919239
1653,RG26,51.3401022,-1.1297305
1654,NN2,52.2625668,-0.8886515
1655,B33,52.4802868,-1.7884156
1656,OL95,53.5563368,-2.1054013
1657,YO42,53.9238079,-0.7902264
1658,PH37,56.8356654,-5.5016760
1659,NN3,52.2639662,-0.8422004
1660,SN9,51.3242371,-1.7880126
1661,TQ5,50.3917810,-3.5234852
1662,TA13,50.9466906,-2.8102347
1663,B11,52.4544936,-1.8581324
1664,G3,55.8658506,-4.2778116
1665,CT13,51.2664408,1.3270040
1666,L34,53.4353850,-2.8154652
1667,MK13,52.0532824,-0.7825057
1668,B66,52.4926661,-1.9647632
1669,IP11,51.9675191,1.3411933
1670,CH1,53.2022603,-2.9089758
1671,W14,51.4946910,-0.2102541
1672,WC1H,51.5268445,-0.1256084
1673,M15,53.4673852,-2.2514891
1674,NR30,52.6197388,1.7277361
1675,KW2,58.3483934,-3.1636573
1676,SA62,51.8411750,-5.0642757
1677,PE38,52.5881901,0.3752984
1678,CV4,52.3972327,-1.5714648
1679,LS12,53.7912186,-1.5972635
1680,MK44,52.1965903,-0.4242789
1681,L29,53.5075951,-2.9855216
1682,BT5,54.5891629,-5.8711440
1683,G43,55.8184976,-4.2918152
1684,SK12,53.3514172,-2.0924709
1685,B77,52.6185928,-1.6686800
1686,BA14,51.3191164,-2.2025658
1687,NE67,55.5365340,-1.6919416
1688,CF15,51.5333849,-3.2717150
1689,SW19,51.4241552,-0.2029208
1690,CF5,51.4829052,-3.2447881
1691,KT10,51.3695018,-0.3543868
1692,KA20,55.6413789,-4.7511586
1693,TW20,51.4274804,-0.5525407
1694,FY2,53.8459338,-3.0396623
1695,SO24,51.0844741,-1.1471161
1696,SE19,51.4179954,-0.0861287
1697,LL77,53.2605503,-4.3124692
1698,DE6,52.9922845,-1.7179509
1699,LS2,53.8028065,-1.5463049
1700,OL8,53.5258859,-2.1173031
1701,ST2,53.0281410,-2.1354237
1702,PO38,50.6053631,-1.2432132
1703,WA15,53.3845913,-2.3259397
1704,W9,51.5247242,-0.1926416
1705,NG24,53.0696884,-0.7990824
1706,DE15,52.7980963,-1.6087583
1707,CB1,52.1953297,0.1420534
1708,DN17,53.5727238,-0.7059175
1709,G81,55.9138295,-4.4077065
1710,BT78,54.5709348,-7.3760979
1711,BB9,53.8374035,-2.2156194
1712,EN2,51.6599921,-0.0941879
1713,DH3,54.8727478,-1.5679921
1714,BB7,53.8708936,-2.3888971
1715,PE22,53.0501008,0.0445584
1716,KW12,58.5057403,-3.4926733
1717,M18,53.4613132,-2.1703934
1718,YO22,54.4508006,-0.6217825
1719,AL8,51.8036230,-0.2117607
1720,RM4,51.6410737,0.1587939
1721,KA5,55.5104356,-4.3878367
1722,ME20,51.3033514,0.4598919
1723,IV46,57.1118710,-5.9840485
1724,DG13,55.1733051,-3.0305281
1725,ME5,51.3485540,0.5326120
1726,ME19,51.2904715,0.4079490
1727,HP15,51.6585214,-0.7117144
1728,SA15,51.6995488,-4.1678401
1729,S32,53.2945357,-1.6515465
1730,NW1W,51.5307841,-0.1354264
1731,BS98,51.4597488,-2.5889635
1732,N2,51.5900894,-0.1692626
1733,BD24,54.0800440,-2.2841297
1734,IP17,52.2304463,1.5018473
1735,TR22,49.8951710,-6.3408730
1736,KT12,51.3773192,-0.4083965
1737,BD2,53.8152428,-1.7344633
1738,LN8,53.3748990,-0.3265738
1739,KW17,59.0364329,-3.0093093
1740,HU19,53.7233393,0.0344319
1741,LN2,53.2571394,-0.5062171
1742,BN26,50.8211682,0.2228173
1743,LL16,53.1851910,-3.4330517
1744,PH14,56.4528883,-3.1808965
1745,KY5,56.1453650,-3.2948408
1746,SA72,51.6917901,-4.9355542
1747,PL11,50.3729560,-4.2549194
1748,EC3A,51.5147892,-0.0802178
1749,PR7,53.6486409,-2.6553020
1750,S36,53.5054492,-1.6165980
1751,KT17,51.3412000,-0.2495666
1752,ST16,52.8135538,-2.1201818
1753,CF3,51.5203429,-3.1110728
1754,SA44,52.0874643,-4.3732402
1755,TS18,54.5609693,-1.3240632
1756,SN7,51.6484265,-1.5662623
1757,IP23,52.3073907,1.1200031
1758,BD23,53.9933390,-2.0569312
1759,PL3,50.3882426,-4.1272702
1760,YO51,54.0900779,-1.3947245
1761,GU2,51.2457661,-0.5942024
1762,CA10,54.6118806,-2.6584077
1763,CM14,51.6186789,0.2921453
1764,SN14,51.4755423,-2.1991424
1765,SY16,52.5206495,-3.3122813
1766,PE3,52.5843494,-0.2752554
1767,BN8,50.9166625,0.0527321
1768,DN10,53.4244850,-0.9350013
1769,HP18,51.8202707,-0.9688388
1770,N3,51.6002281,-0.1939290
1771,PH32,57.1445763,-4.6835593
1772,W1F,51.5134975,-0.1364725
1773,G73,55.8195192,-4.2065974
1774,PO34,50.7159013,-1.1134555
1775,FK4,55.9964986,-3.9074569
1776,EC1R,51.5249491,-0.1083725
1777,M5,53.4792210,-2.2837555
1778,G63,56.0430198,-4.3655688
1779,PA7,55.9073289,-4.5040855
1780,DL15,54.7109706,-1.7302545
1781,LL38,52.6953036,-4.0503008
1782,TR1,50.2626097,-5.0541868
1783,UB2,51.4995871,-0.3791468
1784,S66,53.4201548,-1.2439946
1785,LL58,53.2820716,-4.0992684
1786,HA8,51.6113532,-0.2739101
1787,KY4,56.1140341,-3.3630354
1788,HA2,51.5736982,-0.3612317
1789,PE30,52.7597146,0.4165056
1790,TW11,51.4263148,-0.3317674
1791,L27,53.3877426,-2.8389850
1792,LL54,53.0580643,-4.2875015
1793,BH13,50.7088605,-1.9204420
1794,BT47,54.9739997,-7.2126901
1795,WF13,53.6923035,-1.6467249
1796,EC4V,51.5124476,-0.0998780
1797,DE55,53.1022937,-1.3722605
1798,TS1,54.5719344,-1.2392024
1799,EN10,51.7381929,-0.0231620
1800,NE39,54.9234877,-1.7611063
1801,PA78,56.6264192,-6.5458652
1802,LS11,53.7762230,-1.5573555
1803,N13,51.6181120,-0.1042702
1804,SA70,51.6725248,-4.7416638
1805,RM17,51.4797250,0.3283265
1806,PH19,56.9262864,-4.2556793
1807,HD1,53.6468691,-1.7889340
1808,WA11,53.4780797,-2.7197662
1809,TA5,51.1428039,-3.0948840
1810,DY7,52.4664160,-2.2308062
1811,BA9,51.0576908,-2.4101382
1812,BS5,51.4620533,-2.5517422
1813,NR3,52.6432723,1.2917283
1814,CF81,51.7017292,-3.2446317
1815,SK9,53.3278962,-2.2304439
1816,CW6,53.1625246,-2.6672351
1817,LL78,53.3174138,-4.2630432
1818,GU28,50.9910457,-0.6327655
1819,YO25,54.0040772,-0.4163603
1820,EC1M,51.5213505,-0.1023129
1821,HU4,53.7362344,-0.4040642
1822,AB13,57.1082022,-2.2368915
1823,YO23,53.9234845,-1.1234069
1824,AB21,57.2093798,-2.2016004
1825,NE12,55.0243325,-1.5705744
1826,BS30,51.4447118,-2.4713845
1827,M27,53.5121147,-2.3364528
1828,PL13,50.3587383,-4.4757544
1829,PL21,50.3852736,-3.9184514
1830,LS25,53.7858344,-1.3250023
1831,IP5,52.0619388,1.2453720
1832,S17,53.3213081,-1.5289135
1833,LE9,52.5730928,-1.2811778
1834,NN17,52.5010487,-0.6842686
1835,CA25,54.5231026,-3.5191491
1836,SE17,51.4882787,-0.0933945
1837,SE15,51.4727365,-0.0656967
1838,ST55,53.0141598,-2.2380231
1839,HU2,53.7507551,-0.3406848
1840,PE19,52.2359693,-0.2636521
1841,BA3,51.2717539,-2.4785029
1842,NE31,54.9708203,-1.5132819
1843,LA7,54.2257341,-2.7730264
1844,WS4,52.6068687,-1.9587114
1845,NN10,52.2928622,-0.5977197
1846,B93,52.3804941,-1.7438511
1847,BN50,50.8263299,-0.1408006
1848,G14,55.8804359,-4.3507560
1849,RG2,51.4201494,-0.9517094
1850,OX15,52.0303387,-1.4113905
1851,DE12,52.7233343,-1.5535436
1852,SW8,51.4765695,-0.1320148
1853,CA2,54.8838592,-2.9512475
1854,MK19,52.0751348,-0.8552011
1855,GU23,51.2940938,-0.5060248
1856,MK17,51.9975790,-0.6993948
1857,PH44,57.0567966,-6.5032660
1858,PH22,57.1941031,-3.8202505
1859,TQ8,50.2366074,-3.7718704
1860,HP13,51.6344818,-0.7404825
1861,N1P,51.5389749,-0.1030615
1862,PE20,52.9312795,-0.1038179
1863,EH52,55.9383479,-3.4850570
1864,PL26,50.3449922,-4.8275010
1865,LL72,53.3522910,-4.2400479
1866,PE8,52.5217429,-0.4539945
1867,EH51,56.0110331,-3.6055066
1868,CM3,51.7211161,0.5842087
1869,EX7,50.5843718,-3.4706752
1870,EH23,55.8394658,-3.0509226
1871,WV7,52.6354827,-2.2794354
1872,G76,55.7770362,-4.2730765
1873,CH29,53.3901667,-3.1794125
1874,SE8,51.4819486,-0.0294902
1875,DL10,54.4138943,-1.6913727
1876,SK11,53.2453150,-2.1463212
1877,WS9,52.6099899,-1.9184422
1878,G58,55.8423713,-4.2906685
1879,KA8,55.4717538,-4.6124590
1880,PA28,55.4376036,-5.6038598
1881,DE99,52.9150384,-1.4661393
1882,IV36,57.6097384,-3.6074174
1883,ML3,55.7699883,-4.0550162
1884,RM7,51.5748451,0.1687782
1885,DA6,51.4551736,0.1388193
1886,LE18,52.5832335,-1.1119720
1887,SW6,51.4766351,-0.2012224
1888,SS11,51.6172491,0.5378070
1889,ST10,52.9885754,-1.9646762
1890,PA17,55.8633832,-4.8851597
1891,CF62,51.4039362,-3.3109790
1892,ME12,51.4223196,0.8043021
1893,PH40,56.9633163,-5.8017491
1894,IP30,52.2092240,0.8464525
1895,SP4,51.1660243,-1.7660031
1896,LL48,52.9360472,-4.0696243
1897,ST5,53.0153757,-2.2395729
1898,CA3,54.9093172,-2.9402815
1899,HU3,53.7423203,-0.3676664
1900,PE34,52.7249832,0.3373637
1901,EC3N,51.5119304,-0.0770379
1902,B72,52.5501949,-1.8219989
1903,B27,52.4445575,-1.8228123
1904,OX29,51.7940797,-1.4356560
1905,SS16,51.5625971,0.4520758
1906,TW16,51.4157677,-0.4169227
1907,OL1,53.5497377,-2.1069922
1908,HX7,53.7392443,-2.0085802
1909,BH18,50.7595167,-1.9984276
1910,L7,53.4057417,-2.9499885
1911,L67,53.4499811,-2.9424012
1912,CF24,51.4880332,-3.1619481
1913,WC1N,51.5229255,-0.1197316
1914,PL19,50.5565609,-4.1547903
1915,NE2,54.9870836,-1.6061088
1916,CB3,52.2124820,0.0981705
1917,TD13,55.9298490,-2.3714898
1918,CF71,51.4609003,-3.4589993
1919,LL56,53.1843564,-4.2059205
1920,NG11,52.8991198,-1.1741527
1921,SS8,51.5221057,0.5895804
1922,CT4,51.2238425,1.0647403
1923,DL11,54.4394631,-1.8766040
1924,TQ14,50.5507921,-3.5078648
1925,EH22,55.8850462,-3.0607492
1926,NN1,52.2416489,-0.8883002
1927,NE41,54.9760829,-1.8201262
1928,RG30,51.4511542,-1.0147746
1929,NR32,52.4897230,1.7315777
1930,B46,52.5088835,-1.6949788
1931,PE23,53.1727258,0.0887887
1932,IV63,57.3047579,-4.5326314
1933,SS14,51.5760335,0.4746395
1934,NP16,51.6504671,-2.6898185
1935,SR3,54.8766731,-1.4168469
1936,BN42,50.8376298,-0.2347507
1937,LL21,52.9900548,-3.4102899
1938,BS10,51.5067451,-2.6108230
1939,BT56,55.1976160,-6.6503827
1940,LL59,53.2357839,-4.1631557
1941,G83,56.0121497,-4.5869607
1942,CA13,54.6598623,-3.3683706
1943,PA6,55.8658238,-4.5371164
1944,TF1,52.7031424,-2.5029461
1945,DL6,54.3710220,-1.3904975
1946,BD12,53.7456818,-1.7626592
1947,KY11,56.0485491,-3.4139256
1948,PO15,50.8676994,-1.2281695
1949,TR24,49.9554022,-6.3353021
1950,NR15,52.5032686,1.2663003
1951,CO16,51.8219619,1.1229273
1952,SY4,52.7980636,-2.7538220
1953,BH31,50.8760396,-1.8726060
1954,WC2A,51.5162229,-0.1142197
1955,SA65,51.9881184,-4.9697965
1956,DE1,52.9221535,-1.4774894
1957,EC2R,51.5160606,-0.0909709
1958,MK11,52.0510771,-0.8404949
1959,HX5,53.6845992,-1.8352938
1960,L2,53.4068628,-2.9899412
1961,EH4,55.9624129,-3.2608608
1962,EC1A,51.5203315,-0.1039346
1963,PO7,50.8829409,-1.0406889
1964,OL6,53.4943593,-2.0861171
1965,IV27,58.2764191,-4.7971051
1966,OX26,51.9011730,-1.1544766
1967,SN38,51.5627924,-1.8065990
1968,CW10,53.1887768,-2.4436061
1969,NN29,52.2580421,-0.6648146
1970,G41,55.8376134,-4.2844564
1971,LL36,52.6042624,-4.0644733
1972,TS13,54.5496921,-0.8541928
1973,HS2,58.2483484,-6.4631996
1974,NG80,52.9300984,-1.1917297
1975,PO37,50.6314255,-1.1796299
1976,KT16,51.3825678,-0.5164280
1977,AL4,51.7739838,-0.2950240
1978,BB5,53.7542990,-2.3734600
1979,PO2,50.8178415,-1.0774067
1980,PR5,53.7315550,-2.6577319
1981,EN6,51.6994890,-0.1767140
1982,BH10,50.7595614,-1.8929555
1983,HU20,53.7878670,-0.5117995
1984,PE16,52.4548843,0.0493714
1985,CF82,51.6509975,-3.2379255
1986,PO32,50.7511908,-1.2810514
1987,CA16,54.5740293,-2.4838426
1988,LE2,52.6073868,-1.1169519
1989,DN37,53.5399911,-0.1383433
1990,SY10,52.8394661,-3.1235551
1991,CH2,53.2178821,-2.8689752
1992,NR27,52.9242431,1.2998419
1993,WD5,51.7026256,-0.4163911
1994,OX12,51.5964061,-1.4251910
1995,KT2,51.4189252,-0.2906684
1996,B1,52.4799811,-1.9091472
1997,DY4,52.5328792,-2.0552638
1998,CT10,51.3631369,1.4294367
1999,PA36,56.5241284,-4.7696606
2000,NN13,52.0340435,-1.1480035
2001,FY5,53.8752307,-3.0218705
2002,NN8,52.3032613,-0.6996321
2003,ML5,55.8597936,-4.0317112
2004,HR3,52.0939594,-3.0850031
2005,TD11,55.7877855,-2.3139948
2006,BR5,51.3917166,0.1033934
2007,S25,53.3658458,-1.2168611
2008,IP16,52.2041101,1.5840513
2009,WS7,52.6797404,-1.9216495
2010,B64,52.4725264,-2.0694635
2011,EC1P,51.5245160,-0.1120727
2012,DD2,56.4703225,-3.0317411
2013,BS26,51.2788645,-2.8569371
2014,NE21,54.9575809,-1.7214224
2015,DA8,51.4757724,0.1758771
2016,PA64,56.4378760,-5.6860385
2017,WA4,53.3653734,-2.5758118
2018,CW8,53.2534481,-2.5652379
2019,S49,53.2350543,-1.4347350
2020,WS15,52.7585909,-1.9173233
2021,IV55,57.4561945,-6.6097781
2022,BH21,50.8125355,-1.9745370
2023,KA27,55.5386053,-5.1745690
2024,CH45,53.4289247,-3.0517282
2025,MK8,52.0330526,-0.8047638
2026,WR12,52.0414013,-1.8704376
2027,DG4,55.3754906,-3.9527786
2028,NE1,54.9724420,-1.6115224
2029,BS4,51.4353560,-2.5636106
2030,RM18,51.4674524,0.3759400
2031,NW9,51.5881194,-0.2552637
2032,WR11,52.0958405,-1.9290168
2033,RH10,51.1183435,-0.1547527
2034,E17,51.5869039,-0.0207805
2035,LL68,53.3977575,-4.3794888
2036,PO20,50.7837114,-0.7846263
2037,SN10,51.3370397,-1.9869176
2038,LE3,52.6315445,-1.1772298
2039,YO17,54.1367836,-0.7568135
2040,L25,53.3788522,-2.8636656
2041,S42,53.1996406,-1.4217945
2042,EH31,56.0365209,-2.8267129
2043,L69,53.3874418,-2.9746703
2044,GL12,51.6242009,-2.3889711
2045,AB32,57.1550293,-2.3179220
2046,TA19,50.9351637,-2.9154632
2047,WA9,53.4361271,-2.7192438
2048,SP3,51.1021334,-2.0158963
2049,IP3,52.0413500,1.1880100
2050,N1,51.5377218,-0.0970473
2051,DY5,52.4804556,-2.1239401
2052,PO36,50.6585816,-1.1636790
2053,CT17,51.1291169,1.2937687
2054,LE7,52.6800581,-1.0709886
2055,B25,52.4649901,-1.8219999
2056,DY13,52.3367283,-2.2813551
2057,KT3,51.3995791,-0.2574604
2058,LS22,53.9317926,-1.3956826
2059,BA15,51.3482711,-2.2580986
2060,EH2,55.9522871,-3.2022387
2061,PO9,50.8634319,-0.9839667
2062,AB45,57.6517031,-2.5676286
2063,EX11,50.7468054,-3.2895514
2064,RG24,51.2807785,-1.0794987
2065,B5,52.4694163,-1.8975868
2066,IV9,57.5690237,-4.1786419
2067,EC4M,51.5142792,-0.0993846
2068,BN2,50.8250741,-0.1010175
2069,TF11,52.6651286,-2.3582963
2070,TN30,51.0622974,0.6967544
2071,DN7,53.5833786,-1.0131600
2072,ST8,53.1155274,-2.1678960
2073,LL70,53.3638741,-4.2877619
2074,PE26,52.4532813,-0.1166380
2075,LL14,52.9909507,-3.0533052
2076,MK42,52.1173913,-0.4724081
2077,BL6,53.5917532,-2.5408608
2078,SK22,53.3725343,-1.9846946
2079,BT79,54.6231590,-7.2009070
2080,EC1V,51.5268168,-0.0978016
2081,PA44,55.7994182,-6.2935908
2082,BH16,50.7402030,-2.0474413
2083,LL75,53.2849805,-4.2166075
2084,LE65,52.7486524,-1.4694618
2085,SY23,52.3800111,-4.0512490
2086,HG3,54.0300146,-1.6178422
2087,RH12,51.0771886,-0.3321560
2088,DL2,54.5282376,-1.5973398
2089,PL29,50.5861971,-4.8301107
2090,SL4,51.4752709,-0.6274221
2091,M60,53.4844452,-2.2348172
2092,WV14,52.5572984,-2.0789308
2093,TD15,55.7473641,-2.0146884
2094,TA14,50.9468145,-2.7515634
2095,BT65,54.4445858,-6.3654149
2096,PR9,53.6596660,-2.9686373
2097,WN5,53.5319036,-2.6873957
2098,NE35,54.9510139,-1.4606560
2099,DG3,55.2374390,-3.7992860
2100,M33,53.4209662,-2.3262749
2101,GU52,51.2636841,-0.8386174
2102,EX21,50.8057129,-4.2086933
2103,DN36,53.5114674,-0.0395860
2104,HA7,51.6113081,-0.3106331
2105,CH65,53.2771085,-2.9018402
2106,EC2A,51.5237066,-0.0855916
2107,TA4,51.0746920,-3.2714873
2108,L23,53.4909653,-3.0237930
2109,PH13,56.5371048,-3.2746989
2110,S9,53.3981645,-1.4178388
2111,S4,53.4009143,-1.4496573
2112,PE12,52.7851801,0.0279957
2113,KT23,51.2801634,-0.3756767
2114,EX36,51.0166843,-3.7960520
2115,DN4,53.5049990,-1.1211527
2116,PL35,50.6847541,-4.6853135
2117,PE28,52.3588328,-0.1906381
2118,KT24,51.2701574,-0.4298101
2119,CF43,51.6576285,-3.4504756
2120,SM6,51.3614689,-0.1445371
2121,SE7,51.4842259,0.0340854
2122,CH8,53.2830042,-3.2465239
2123,PL6,50.4187120,-4.1156868
2124,BT29,54.6209431,-6.1969340
2125,NR12,52.7597763,1.4720163
2126,CV37,52.1827385,-1.7151270
2127,SW7,51.4962781,-0.1770136
2128,HP11,51.6239518,-0.7453006
2129,LS9,53.7995059,-1.5101820
2130,TN25,51.1412359,0.9384339
2131,NG31,52.9144482,-0.6420228
2132,TQ7,50.2826457,-3.7844126
2133,DY2,52.4963087,-2.0814401
2134,DT6,50.7391695,-2.7754498
2135,SA69,51.7109740,-4.7067980
2136,IP24,52.4198320,0.7579160
2137,DY3,52.5308396,-2.1312352
2138,GU31,50.9969882,-0.9034900
2139,PO33,50.7216598,-1.1700685
2140,M28,53.5147094,-2.3993412
2141,E16,51.5105927,0.0289721
2142,DD3,56.4831651,-2.9898945
2143,CH46,53.4039828,-3.1108625
2144,PR26,53.6876888,-2.7410845
2145,TD1,55.6231746,-2.8109170
2146,CF45,51.6696017,-3.3622637
2147,NG20,53.2100156,-1.1858804
2148,SN13,51.4245832,-2.2124861
2149,SW16,51.4212906,-0.1292383
2150,G11,55.8733357,-4.3129733
2151,L39,53.5617461,-2.8964099
2152,MK9,52.0404000,-0.7549280
2153,MK15,52.0568594,-0.7297720
2154,TN1,51.1346687,0.2665338
2155,BR8,51.3985498,0.1743791
2156,HU8,53.7694364,-0.2996667
2157,N8,51.5829293,-0.1198918
2158,IG6,51.5960763,0.0877543
2159,DL17,54.6805221,-1.5410837
2160,NP13,51.7353588,-3.1414332
2161,IV6,57.5251331,-4.4589452
2162,LE87,52.6277023,-1.1336672
2163,BT53,55.0857068,-6.4749555
2164,ME4,51.3814348,0.5288721
2165,DT8,50.8199071,-2.7589018
2166,HA5,51.5949876,-0.3862778
2167,CA26,54.5445875,-3.4825948
2168,B48,52.3547623,-1.9470221
2169,IV22,57.7387245,-5.5136528
2170,IG9,51.6258577,0.0402651
2171,HR7,52.1855201,-2.5236492
2172,HP23,51.7954966,-0.6612615
2173,CM98,51.7521007,0.5184271
2174,ML12,55.5680243,-3.5951775
2175,WF9,53.6063404,-1.3212719
2176,SG3,51.8604038,-0.1822612
2177,B28,52.4272318,-1.8432114
2178,DE23,52.9003792,-1.4978936
2179,NR8,52.6767458,1.2047578
2180,TW19,51.4543018,-0.4985225
2181,PH30,56.7889840,-4.5998290
2182,TW13,51.4389898,-0.4020137
2183,LL20,52.9588899,-3.1607087
2184,EH11,55.9326860,-3.2518031
2185,SA47,52.1922116,-4.2996604
2186,SO22,51.0665077,-1.3356583
2187,KT13,51.3680340,-0.4493546
2188,ST9,53.0528082,-2.0960983
2189,SA80,51.6479391,-3.9242947
2190,DA12,51.4278035,0.3871907
2191,L19,53.3589357,-2.9033178
2192,B95,52.2859172,-1.7806898
2193,WF5,53.6804698,-1.5764287
2194,DT4,50.6095897,-2.4654498
2195,DN32,53.5621163,-0.0702130
2196,DN31,53.5699931,-0.0891049
2197,EH36,55.8555977,-2.8533193
2198,B69,52.5027111,-2.0303110
2199,TN4,51.1455609,0.2548060
2200,L71,53.4346302,-2.9747137
2201,BH11,50.7622035,-1.9198635
2202,LU2,51.8932427,-0.3944578
2203,HR4,52.0905547,-2.7712966
2204,EC3M,51.5118135,-0.0821665
2205,SS9,51.5547671,0.6517230
2206,KW10,57.9740723,-3.9787883
2207,CM16,51.7002877,0.1200906
2208,TS2,54.5853647,-1.2376261
2209,M11,53.4788514,-2.1812356
2210,IP15,52.1562567,1.5954770
2211,BL8,53.6048216,-2.3275802
2212,BT39,54.7456450,-6.0174462
2213,M22,53.3858702,-2.2600788
2214,BA22,50.9695037,-2.6381055
2215,LD4,52.1178244,-3.5568359
2216,PH5,56.3282762,-3.8298735
2217,BH9,50.7496350,-1.8727345
2218,HU5,53.7599562,-0.3761886
2219,LE17,52.4675874,-1.1778293
2220,SP10,51.2114130,-1.4845424
2221,RH8,51.2508257,0.0023834
2222,IP32,52.2546724,0.7191907
2223,KA13,55.6556626,-4.7001607
2224,FK5,56.0272594,-3.8224587
2225,NP44,51.6512296,-3.0279524
2226,SS6,51.5886238,0.6074751
2227,IP21,52.3648604,1.2367254
2228,NP24,51.7189914,-3.2385423
2229,NR22,52.8944462,0.8651737
2230,WN7,53.4980465,-2.5184534
2231,BH6,50.7276493,-1.8019536
2232,BB11,53.7826402,-2.2539059
2233,WD7,51.6870763,-0.3099210
2234,EC4A,51.5157778,-0.1082509
2235,CM5,51.7217242,0.2482353
2236,TA1,51.0132224,-3.1028526
2237,RM16,51.4929827,0.3410404
2238,PH7,56.3730997,-3.8270302
2239,SW1A,51.5044592,-0.1321624
2240,CT12,51.3433748,1.3690830
2241,LS3,53.8023697,-1.5634257
2242,S21,53.3120546,-1.3396584
2243,B38,52.3999018,-1.9347197
2244,S35,53.4586541,-1.4979375
2245,WF4,53.6466346,-1.5193831
2246,SK16,53.4746223,-2.0827362
2247,LE41,52.6129239,-1.1949066
2248,DE74,52.8395922,-1.3258768
2249,L4,53.4378410,-2.9612931
2250,L9,53.4613892,-2.9536021
2251,CA95,54.6446666,-3.5664497
2252,IV47,57.2952228,-6.3443887
2253,G33,55.8741808,-4.1653486
2254,CM11,51.6235893,0.4459616
2255,OL10,53.5904693,-2.2231540
2256,G40,55.8474967,-4.2211184
2257,HP16,51.7022351,-0.7196191
2258,BR7,51.4148588,0.0645782
2259,RG28,51.2341195,-1.3359686
2260,BH23,50.7475595,-1.7543605
2261,CM7,51.8972740,0.5373554
2262,DE24,52.8891675,-1.4528507
2263,CR9,51.3740708,-0.0982860
2264,N18,51.6138819,-0.0665839
2265,CW7,53.1899294,-2.5290755
2266,CO10,52.0584780,0.7211086
2267,B79,52.6506131,-1.6815794
2268,PL2,50.3895570,-4.1630645
2269,LA8,54.3238097,-2.7619094
2270,SO53,50.9860424,-1.3836290
2271,BN7,50.8773720,-0.0008331
2272,MK41,52.1526153,-0.4477354
2273,KA21,55.6421009,-4.7844006
2274,NE48,55.1317811,-2.2582022
2275,NW3,51.5523422,-0.1725058
2276,EH14,55.9088677,-3.2859923
2277,HD8,53.5995424,-1.6750146
2278,NE45,54.9766604,-2.0147337
2279,SN8,51.4063157,-1.6857426
2280,S65,53.4361710,-1.3185879
2281,M34,53.4565302,-2.1185355
2282,NE28,55.0001992,-1.5207301
2283,NE25,55.0523507,-1.4893199
2284,GL17,51.8552806,-2.5103348
2285,WV11,52.6105811,-2.0719935
2286,TD4,55.6424490,-2.6720572
2287,HU10,53.7515019,-0.4418264
2288,NR11,52.8409073,1.2737841
2289,LN1,53.2609265,-0.5924173
2290,FK12,56.1525705,-3.8017465
2291,LA18,54.2154222,-3.2760572
2292,DG14,55.0819733,-2.9826094
2293,B43,52.5485092,-1.9307835
2294,NE6,54.9774742,-1.5658577
2295,WR10,52.1149851,-2.0671085
2296,NE63,55.1782267,-1.5632732
2297,AB31,57.0729813,-2.5222510
2298,PA70,56.3649649,-6.0371982
2299,PO11,50.7920495,-0.9756968
2300,SE6,51.4385590,-0.0166543
2301,GU26,51.1142993,-0.7503800
2302,B47,52.3852897,-1.8800827
2303,HS8,57.2352236,-7.3470515
2304,PA77,56.4953995,-6.8810683
2305,YO16,54.0956952,-0.2020607
2306,B99,52.4959257,-1.8942585
2307,TS4,54.5559482,-1.2229129
2308,NR2,52.6291722,1.2800286
2309,CV47,52.2354306,-1.3854686
2310,PH49,56.6748880,-5.1153736
2311,HP6,51.6783912,-0.5991444
2312,WD23,51.6452717,-0.3580507
2313,DN16,53.5674423,-0.6397388
2314,L10,53.4744835,-2.9266207
2315,CF23,51.5146202,-3.1554545
2316,PH23,57.2837083,-3.8169255
2317,SA12,51.6082605,-3.7957976
2318,EH43,55.6238505,-3.0113991
2319,KA9,55.4972272,-4.6053308
2320,DA2,51.4320776,0.2331447
2321,BT18,54.6412227,-5.8220028
2322,OX9,51.7379966,-0.9839931
2323,IV54,57.4304314,-5.6198002
2324,S97,53.5032475,-1.3379727
2325,SE16,51.4965989,-0.0530910
2326,BD14,53.7821908,-1.8183815
2327,SG1,51.9131480,-0.1949772
2328,PA41,55.6744664,-5.7425879
2329,CM4,51.6750757,0.3903574
2330,YO18,54.2589315,-0.7690067
2331,SW1V,51.4894932,-0.1399734
2332,BS49,51.3829265,-2.8123525
2333,BN16,50.8145540,-0.4957555
2334,KT11,51.3281995,-0.4028817
2335,NN14,52.4110165,-0.6955533
2336,RG6,51.4378229,-0.9281585
2337,WF16,53.7102031,-1.6692768
2338,EX31,51.0857144,-4.0684890
2339,SO42,50.8151761,-1.5366074
2340,AB38,57.4863473,-3.2264677
2341,KY8,56.1972496,-3.0126117
2342,MK5,52.0209076,-0.7846548
2343,CH26,53.3657030,-3.0659079
2344,G1,55.8588265,-4.2488914
2345,SA39,52.0188701,-4.2435846
2346,NE20,55.0526955,-1.7874806
2347,SK4,53.4194666,-2.1817251
2348,GU22,51.3121626,-0.5517403
2349,HU6,53.7810120,-0.3713507
2350,NP4,51.7193671,-3.0470946
2351,W10,51.5230766,-0.2176568
2352,CT16,51.1421367,1.2992504
2353,YO14,54.1978665,-0.2981294
2354,BT6,54.5799883,-5.8979170
2355,BA4,51.1724351,-2.5320463
2356,CA6,54.9933146,-2.8949601
2357,HP4,51.7678331,-0.5685998
2358,CM15,51.6443998,0.3035113
2359,TD12,55.6527612,-2.2410299
2360,TA2,51.0340308,-3.1010171
2361,DL1,54.5295580,-1.5387005
2362,CW4,53.2088755,-2.3556124
2363,DD1,56.4610055,-2.9764463
2364,PA10,55.8328892,-4.5514075
2365,TN2,51.1279359,0.2750576
2366,MK46,52.1557959,-0.7020457
2367,NE40,54.9659302,-1.7743389
2368,HG5,54.0134860,-1.4579043
2369,SA43,52.0872908,-4.6280484
2370,M8,53.5086893,-2.2401019
2371,TN18,51.0428062,0.5226677
2372,M16,53.4551078,-2.2645745
2373,TA20,50.8735523,-2.9622162
2374,NE98,54.9722874,-1.5983750
2375,WC2B,51.5149298,-0.1204399
2376,RG27,51.3058876,-0.9469323
2377,NR6,52.6619269,1.2803571
2378,SO16,50.9366680,-1.4332990
2379,FK3,56.0107515,-3.7207793
2380,DE75,53.0130721,-1.3543073
2381,E13,51.5278271,0.0267009
2382,TN15,51.3027160,0.2746409
2383,WD24,51.6737504,-0.3981532
2384,AB52,57.3437877,-2.6088547
2385,FY1,53.8152768,-3.0470272
2386,BT52,55.1345210,-6.6551623
2387,EX38,50.9439211,-4.1521992
2388,PH38,56.8438021,-5.7438068
2389,SO17,50.9272710,-1.3926392
2390,WR8,52.0748110,-2.2066668
2391,SW1P,51.4900482,-0.1332140
2392,NE64,55.1846583,-1.5154095
2393,GU5,51.1989140,-0.5097292
2394,SA20,52.0119374,-3.7877600
2395,CM19,51.7594581,0.0711651
2396,DN41,53.5812660,-0.1952465
2397,TW9,51.4694559,-0.2927343
2398,G5,55.8479394,-4.2522350
2399,IP31,52.2925866,0.8356002
2400,L26,53.3645787,-2.8330565
2401,ST19,52.7087806,-2.1473047
2402,E20,51.5465858,-0.0100095
2403,IP22,52.3759592,1.0527441
2404,PE36,52.9394294,0.5087246
2405,BL2,53.5885067,-2.3950838
2406,NR23,52.9487974,0.8580662
2407,BH17,50.7468750,-1.9800404
2408,LL42,52.7257676,-4.0552734
2409,HU16,53.7815431,-0.4222631
2410,PA61,56.0716509,-6.2030067
2411,BN44,50.8910892,-0.3222660
2412,IV52,57.3365804,-5.6530794
2413,SA66,51.8836245,-4.7449465
2414,RH15,50.9574814,-0.1309943
2415,W7,51.5118598,-0.3359210
2416,W1A,51.5243788,-0.1127900
2417,OX17,52.0736200,-1.2890522
2418,NP12,51.6691612,-3.1979409
2419,NE66,55.4286568,-1.7296243
2420,TA3,50.9936898,-3.0370390
2421,BT33,54.2233393,-5.8913207
2422,RM19,51.4828338,0.2443696
2423,M13,53.4604456,-2.2154546
2424,WA88,53.3679728,-2.7686736
2425,GL14,51.8176681,-2.4811369
2426,G67,55.9466652,-3.9871989
2427,TS19,54.5771805,-1.3433587
2428,TA15,50.9511535,-2.7169146
2429,KT21,51.3111901,-0.3035835
2430,DT9,50.9420485,-2.5162283
2431,PL20,50.5001025,-4.1001920
2432,G42,55.8321344,-4.2574366
2433,NE43,54.9480295,-1.9058067
2434,CV23,52.3683793,-1.2835273
2435,DE7,52.9734328,-1.3232261
2436,ML10,55.6801214,-4.0692342
2437,BS14,51.4129730,-2.5632222
2438,TS24,54.6967403,-1.2111481
2439,BT62,54.4117520,-6.4661507
2440,B32,52.4486238,-1.9945407
2441,CT8,51.3799305,1.3366875
2442,EH40,55.9907365,-2.6620483
2443,BT10,54.5594341,-5.9851563
2444,IV20,57.7885407,-3.9034344
2445,PA27,56.1553315,-5.0860009
2446,NN12,52.1265265,-0.9999332
2447,SK8,53.3796923,-2.2090903
2448,LE14,52.7843462,-0.8971578
2449,SG13,51.7877234,-0.0715474
2450,G45,55.8049645,-4.2327269
2451,BS32,51.5444813,-2.5576565
2452,NE8,54.9549915,-1.6065202
2453,HX4,53.6770659,-1.8826642
2454,PE33,52.6459805,0.4658335
2455,OL4,53.5424267,-2.0734838
2456,RH9,51.2363052,-0.0630331
2457,PA68,56.4345510,-6.1426434
2458,BD22,53.8457607,-1.9553752
2459,NE61,55.1782661,-1.6872652
2460,E4,51.6218323,-0.0057248
2461,DH1,54.7820794,-1.5655420
2462,N16,51.5625965,-0.0766528
2463,IV17,57.6989377,-4.2594791
2464,M2,53.4804426,-2.2444104
2465,CT18,51.1156399,1.1492879
2466,SS1,51.5376959,0.7305193
2467,SY11,52.8699722,-3.0312225
2468,M32,53.4508922,-2.3094048
2469,NR25,52.9201145,1.0827670
2470,N1C,51.5365569,-0.1258562
2471,NG1,52.9547046,-1.1485826
2472,M99,53.4848048,-2.2310186
2473,CF40,51.6203262,-3.4516265
2474,PH1,56.4224093,-3.4793955
2475,WS12,52.7071392,-2.0024555
2476,DL13,54.7169113,-1.9573372
2477,DN14,53.7086376,-0.9413185
2478,DE5,53.0449455,-1.4028946
2479,EX16,50.9226683,-3.4916806
2480,BS20,51.4806147,-2.7535558
2481,M26,53.5623031,-2.3348733
2482,N10,51.5948015,-0.1450221
2483,M20,53.4241784,-2.2326930
2484,TR16,50.2326748,-5.2212503
2485,B17,52.4612330,-1.9586781
2486,B4,52.4857738,-1.8928567
2487,DL4,54.6301995,-1.6443807
2488,AB14,57.1004493,-2.2713239
2489,EH20,55.8788332,-3.1567570
2490,BN23,50.7976028,0.3125132
2491,KT15,51.3637699,-0.4958004
2492,PA42,55.6368001,-6.1894539
2493,BB94,53.9152416,-2.1380327
2494,OX33,51.7583288,-1.1399624
2495,SG11,51.8860481,0.0334702
2496,IP26,52.5074578,0.5727044
2497,M61,53.4865107,-2.2290529
2498,NE38,54.8934927,-1.5247917
2499,YO30,53.9871101,-1.1170367
2500,ME15,51.2532135,0.5335779
2501,RG9,51.5450342,-0.9260061
2502,LA11,54.1999390,-2.9260474
2503,M44,53.4407447,-2.4271805
2504,IG8,51.6100214,0.0381164
2505,OX7,51.9104488,-1.5287932
2506,IV8,57.5541728,-4.2656627
2507,CA9,54.8009692,-2.4136614
2508,SA37,52.0159313,-4.5927184
2509,BH19,50.6114890,-1.9708200
2510,BN20,50.7748096,0.2519395
2511,IG10,51.6484187,0.0659951
2512,LL11,53.0634765,-3.0362413
2513,DH98,54.8873334,-1.5884088
2514,DA9,51.4481337,0.2783186
2515,RH7,51.1746946,-0.0182314
2516,KT1,51.4074987,-0.2982129
2517,CF48,51.7415755,-3.3715116
2518,B10,52.4695926,-1.8523465
2519,SW13,51.4761464,-0.2438054
2520,AB99,57.1113406,-2.0939925
2521,EH95,55.9786198,-3.2535203
2522,SY17,52.5171419,-3.4690989
2523,LE1,52.6339706,-1.1326155
2524,BL11,53.5723273,-2.4254510
2525,PO1,50.7994990,-1.0896771
2526,IP1,52.0668563,1.1395600
2527,GL50,51.9006320,-2.0818521
2528,HP20,51.8200483,-0.8054056
2529,KA7,55.4471342,-4.6304833
2530,CT5,51.3534291,1.0349292
2531,EH5,55.9760767,-3.2223197
2532,DT7,50.7294287,-2.9474704
2533,RG20,51.4036907,-1.3378722
2534,KA16,55.6075033,-4.3282433
2535,IP9,51.9891921,1.1472122
2536,SN6,51.6215185,-1.7409572
2537,LL22,53.2679053,-3.5977386
2538,TQ11,50.4823197,-3.7850715
2539,S60,53.4123073,-1.3507801
2540,WS10,52.5606417,-2.0224958
2541,HX2,53.7385491,-1.9066236
2542,LS8,53.8247746,-1.5094795
2543,OL2,53.5732655,-2.1099662
2544,NP25,51.8025304,-2.7242692
2545,BB6,53.7929328,-2.4175001
2546,ZE2,60.3146317,-1.2291689
2547,SA4,51.6732535,-4.0486716
2548,SK3,53.3982575,-2.1721930
2549,SN25,51.5980434,-1.8088878
2550,PA46,55.8626671,-6.1207760
2551,SA19,51.9545649,-3.9481925
2552,B68,52.4785994,-2.0014018
2553,CB23,52.2151042,-0.0318968
2554,NR24,52.8587800,1.0502847
2555,CA17,54.4800608,-2.3509231
2556,CF41,51.6473700,-3.4820101
2557,CM8,51.8055915,0.6374042
2558,PA33,56.3668062,-5.0642038
2559,N4,51.5700217,-0.1043503
2560,S62,53.4654190,-1.3479048
2561,LS20,53.8744534,-1.7157506
2562,RG22,51.2481133,-1.1247687
2563,EH21,55.9385173,-3.0462249
2564,BS3,51.4386547,-2.6031568
2565,S80,53.2925801,-1.1521193
2566,OL12,53.6364434,-2.1653237
2567,CR4,51.4043894,-0.1591591
2568,NG7,52.9579006,-1.1725474
2569,M19,53.4364131,-2.1963069
2570,L24,53.3434469,-2.8391389
2571,S8,53.3398982,-1.4776091
2572,EX5,50.7561717,-3.4348553
2573,PE24,53.1644979,0.2645359
2574,TF10,52.7694651,-2.3870759
2575,CW11,53.1431937,-2.3673649
2576,SG15,52.0133220,-0.2637871
2577,EC4R,51.5108121,-0.0904232
2578,SW1W,51.4925553,-0.1509311
2579,IP98,52.3765933,1.1109271
2580,ME1,51.3715824,0.4975849
2581,BS48,51.4251376,-2.7478067
2582,EX6,50.6765895,-3.5972315
2583,BT75,54.3726416,-7.3171652
2584,BS36,51.5257135,-2.4864768
2585,DD6,56.4363293,-2.9262534
2586,FK20,56.4054262,-4.6401017
2587,B50,52.1683483,-1.8562373
2588,WA16,53.3030431,-2.3722288
2589,TA23,51.1625334,-3.3526830
2590,PO30,50.6911019,-1.3134800
2591,SA64,52.0021050,-5.0124731
2592,AB22,57.1865864,-2.1223591
2593,WF8,53.6861759,-1.3004853
2594,EH33,55.9415591,-2.9458801
2595,BS29,51.3306402,-2.8750405
2596,FY7,53.9159897,-3.0273891
2597,NE19,55.1795745,-2.0990756
2598,DE14,52.8047417,-1.6433790
2599,W1T,51.5202472,-0.1367101
2600,CB2,52.1858693,0.1231567
2601,OL5,53.5180411,-2.0385356
2602,FY6,53.8680398,-2.9814570
2603,RM8,51.5572096,0.1293935
2604,NG5,52.9972496,-1.1442651
2605,W1J,51.5079068,-0.1450205
2606,LA10,54.3138033,-2.4939771
2607,B78,52.6055691,-1.6733206
2608,BN9,50.7956830,0.0498051
2609,EN5,51.6499440,-0.1975625
2610,WD25,51.6870777,-0.3877274
2611,NW5,51.5517870,-0.1449996
2612,NG34,52.9871563,-0.3938278
2613,PA1,55.8446501,-4.4173443
2614,PL14,50.4639492,-4.4662710
2615,GL3,51.8619393,-2.1760821
2616,CA18,54.3543145,-3.3912119
2617,B35,52.5188542,-1.7890673
2618,TN37,50.8723505,0.5572632
2619,B29,52.4376384,-1.9477220
2620,NN18,52.4779167,-0.7130298
2621,SG16,52.0142001,-0.2987990
2622,NG90,52.9258962,-1.1906952
2623,EN4,51.6491899,-0.1605104
2624,G52,55.8478068,-4.3502252
2625,IP2,52.0452602,1.1338136
2626,NP10,51.5780227,-3.0477786
2627,BH20,50.6871662,-2.1485991
2628,BN6,50.9310590,-0.1555778
2629,B49,52.2178973,-1.8667740
2630,PA35,56.4047653,-5.2274523
2631,BT81,54.6958267,-7.6113132
2632,DL8,54.2928606,-1.7868123
2633,L37,53.5571245,-3.0636989
2634,S26,53.3526108,-1.2915543
2635,LL13,53.0344913,-2.9590322
2636,SY20,52.6147887,-3.8188400
2637,BR6,51.3652346,0.0912592
2638,E18,51.5927827,0.0249672
2639,LA20,54.2942675,-3.2062137
2640,EX9,50.6394596,-3.3240203
2641,EN1,51.6542098,-0.0680823
2642,BN41,50.8414939,-0.2174858
2643,B26,52.4615675,-1.7887486
2644,GU29,50.9846389,-0.7477247
2645,SO50,50.9693035,-1.3404267
2646,NE24,55.1218343,-1.5228902
2647,MK7,52.0190228,-0.6913147
2648,CH66,53.2774095,-2.9364965
2649,NW26,51.5340605,-0.2481317
2650,GL56,51.9895485,-1.7034227
2651,NG21,53.1424089,-1.1039866
2652,TQ13,50.5945854,-3.7176059
2653,BL5,53.5481623,-2.5154623
2654,PA34,56.3937657,-5.4870915
2655,IV53,57.3443757,-5.5542020
2656,LS7,53.8205711,-1.5396576
2657,SN5,51.5668285,-1.8397596
2658,SK17,53.2445366,-1.8815141
2659,NR31,52.5749904,1.7088350
2660,AL6,51.8321470,-0.1998286
2661,TN40,50.8450642,0.4824058
2662,BA16,51.1241740,-2.7457829
2663,ST1,53.0273418,-2.1730317
2664,SS7,51.5622938,0.5777041
2665,TN33,50.9114028,0.4750454
2666,SS13,51.5750029,0.5109302
2667,NE44,54.9428778,-1.9779213
2668,WF7,53.6663200,-1.3528117
2669,NW4,51.5873411,-0.2243033
2670,SY3,52.6989988,-2.7732128
2671,LE13,52.7660063,-0.8870665
2672,EH38,55.7773566,-2.9528897
2673,CO11,51.9420120,1.0767083
2674,G22,55.8907103,-4.2520148
2675,ML4,55.8183531,-4.0213658
2676,BN52,50.8344048,-0.1680463
2677,PE31,52.8818331,0.5723975
2678,PR2,53.7782025,-2.7072842
2679,TN19,51.0027867,0.4058702
2680,M7,53.5054293,-2.2625151
2681,LA9,54.3254145,-2.7433680
2682,L35,53.4151247,-2.7828814
2683,MK40,52.1378368,-0.4764099
2684,PA2,55.8287846,-4.4346865
2685,HG2,53.9855934,-1.5286679
2686,N6,51.5731718,-0.1460635
2687,WN4,53.4936763,-2.6443803
2688,TA24,51.1819504,-3.5105467
2689,WD4,51.7059771,-0.4564485
2690,NG15,53.0446485,-1.2037243
2691,PO21,50.7850953,-0.6986558
2692,TA12,50.9748410,-2.7730116
2693,TW4,51.4654671,-0.3879716
2694,CA19,54.3869014,-3.3839245
2695,NE71,55.5554219,-2.0443180
2696,BB2,53.7416815,-2.5018572
2697,LS5,53.8209598,-1.6072846
2698,GL11,51.6901084,-2.3572130
2699,EH41,55.9483721,-2.7767292
2700,IV42,57.2390335,-5.8330149
2701,BS39,51.3282866,-2.5335653
2702,BT24,54.4173126,-5.8716837
2703,LS15,53.8055008,-1.4450938
2704,M29,53.5084109,-2.4581696
2705,CF63,51.4122519,-3.2572808
2706,S20,53.3345997,-1.3520598
2707,PA62,56.3592566,-5.8515195
2708,SE12,51.4446759,0.0200181
2709,KA19,55.3460742,-4.6679946
2710,CA24,54.5154439,-3.5435607
2711,CF11,51.4724155,-3.1922157
2712,EH9,55.9330122,-3.1853241
2713,NE49,54.9672806,-2.4607532
2714,NE15,54.9846077,-1.7244563
2715,B96,52.2517197,-1.9602473
2716,PE27,52.3315399,-0.0713853
2717,BT92,54.2245245,-7.4675641
2718,LL25,53.0537805,-3.8808964
2719,TQ2,50.4764111,-3.5462360
2720,LD7,52.3516010,-3.0907216
2721,PE6,52.6575152,-0.2526423
2722,SE25,51.3977747,-0.0767868
2723,EX8,50.6297299,-3.4017306
2724,LL31,53.2903448,-3.8104002
2725,GL15,51.7369523,-2.5512350
2726,PH25,57.2615339,-3.6477254
2727,RM12,51.5529171,0.2074380
2728,DY12,52.3864341,-2.3329518
2729,DN6,53.5979140,-1.1785488
2730,TR21,49.9189845,-6.2986255
2731,S81,53.3386575,-1.1239571
2732,BA1,51.3927912,-2.3611374
2733,NG9,52.9258889,-1.2382797
2734,CO13,51.8389206,1.2367597
2735,TS12,54.5628683,-0.9670708
2736,BR3,51.4045675,-0.0305611
2737,LA17,54.2395573,-3.1758678
2738,CV11,52.5198747,-1.4534640
2739,RG1,51.4512045,-0.9696684
2740,HR5,52.1963570,-3.0367417
2741,LE10,52.5368832,-1.3698567
2742,BS25,51.3199339,-2.8204670
2743,PH21,57.0898405,-4.0197579
2744,GL51,51.8990355,-2.1104650
2745,TN6,51.0522368,0.1754135
2746,CH6,53.2492592,-3.1443958
2747,SG19,52.1394738,-0.2395501
2748,S98,53.4041516,-1.4311097
2749,CA1,54.8858561,-2.9124405
2750,B14,52.4173564,-1.8898132
2751,CM23,51.8725180,0.1583719
2752,NE30,55.0213845,-1.4386877
2753,CT2,51.2936699,1.0799396
2754,HU1,53.7428033,-0.3379367
2755,CT3,51.2768265,1.2113391
2756,BT54,55.2043862,-6.2565641
2757,SN2,51.5777424,-1.7829919
2758,DA1,51.4480982,0.2094640
2759,SA32,51.8878923,-4.1696166
2760,AB42,57.5010193,-1.8922218
2761,NR20,52.7232899,0.9810289
2762,EX32,51.0718819,-4.0201970
2763,LD5,52.1264542,-3.6225562
2764,ML1,55.7990265,-3.9750481
2765,N7,51.5534256,-0.1183560
2766,EH53,55.8947721,-3.4727519
2767,PH8,56.5623822,-3.5992120
2768,HS6,57.6016560,-7.3011311
2769,NR1,52.6266317,1.3068176
2770,LL19,53.3311383,-3.4106208
2771,IG4,51.5800576,0.0512052
2772,EN8,51.6992728,-0.0338619
2773,IV11,57.6772240,-4.0390588
2774,BT15,54.6234399,-5.9320317
2775,LL34,53.2705627,-3.9145251
2776,CF61,51.4083951,-3.4812082
2777,L75,53.4377607,-2.9862275
2778,BT2,54.5937744,-5.9306374
2779,AB15,57.1375445,-2.1686100
2780,YO10,53.9504564,-1.0575048
2781,OL3,53.5535469,-2.0115057
2782,IV4,57.4508097,-4.5241263
2783,BD4,53.7763907,-1.7186609
2784,TN5,51.0590304,0.3650914
2785,DE73,52.8472038,-1.4382150
2786,SA17,51.7568602,-4.2854106
2787,BS23,51.3430959,-2.9718955
2788,S75,53.5627102,-1.5215009
2789,OX25,51.9002711,-1.2130366
2790,SO20,51.1166333,-1.5167063
2791,SL3,51.4987413,-0.5516413
2792,BH24,50.8432801,-1.7884673
2793,OX4,51.7312035,-1.2173945
2794,UB10,51.5493776,-0.4519988
2795,TN28,50.9828035,0.9509480
2796,GU18,51.3483009,-0.6692481
2797,WN3,53.5288084,-2.6459714
2798,AB55,57.5245238,-2.9896438
2799,PA49,55.7822695,-6.3948363
2800,EH8,55.9487133,-3.1641837
2801,BT57,55.2034959,-6.5177372
2802,IV23,57.7675158,-5.0094949
2803,BL78,53.5641145,-2.4106610
2804,FK21,56.4659591,-4.3209044
2805,ME11,51.4129865,0.7466942
2806,RH17,51.0223327,-0.1194834
2807,B65,52.4836373,-2.0437814
2808,EH91,55.9249779,-3.2986006
2809,CA11,54.6644988,-2.7842759
2810,CO4,51.9091409,0.9196829
2811,W1W,51.5192066,-0.1409008
2812,BT8,54.5404160,-5.9063825
2813,DN12,53.4826131,-1.2241725
2814,TQ6,50.3471274,-3.5905841
2815,DG5,54.9212114,-3.8110519
2816,SO40,50.9129875,-1.5038949
2817,IP12,52.0933236,1.3698157
2818,M12,53.4643203,-2.2021170
2819,EH46,55.7404828,-3.3566775
2820,BD18,53.8304494,-1.7768469
2821,SO32,50.9493624,-1.2031646
2822,LS14,53.8275342,-1.4585135
2823,LL26,53.1395034,-3.7857607
2824,DD9,56.7482711,-2.6683631
2825,LA16,54.1875930,-3.2030115
2826,DL9,54.3754022,-1.7075078
2827,B76,52.5434894,-1.7825543
2828,IP25,52.5865973,0.8391576
2829,PR0,53.7588071,-2.6839072
2830,BD11,53.7522520,-1.6757083
2831,IP18,52.3304822,1.6707696
2832,B23,52.5285384,-1.8553035
2833,BT68,54.3649415,-6.8481200
2834,IP6,52.1326541,1.1108430
2835,BB8,53.8580089,-2.1635237
2836,LA2,54.0661829,-2.6713879
2837,DA15,51.4414641,0.0981804
2838,BN15,50.8303272,-0.3257841
2839,NE62,55.1614961,-1.5935190
2840,M17,53.4680132,-2.3205539
2841,BT38,54.7289788,-5.8008313
2842,HU13,53.7255290,-0.4386443
2843,HD2,53.6688330,-1.7767268
2844,TD2,55.7309958,-2.7543989
2845,TS22,54.6250233,-1.3204420
2846,G15,55.9092917,-4.3662176
2847,SA34,51.8521658,-4.6189874
2848,KA24,55.7094358,-4.7157711
2849,CH48,53.3701791,-3.1693842
2850,BN11,50.8135706,-0.3771568
2851,TN21,50.9581826,0.2628954
2852,CV13,52.6173527,-1.4130490
2853,WR2,52.1883104,-2.2484883
2854,RH4,51.2299509,-0.3347519
2855,SW18,51.4512533,-0.1914620
2856,WR15,52.3054003,-2.5688982
2857,G12,55.8805484,-4.3006568
2858,M43,53.4836761,-2.1491575
2859,EH7,55.9602104,-3.1643887
2860,TF12,52.6120064,-2.4817746
2861,WD3,51.6466313,-0.4824803
2862,B92,52.4372881,-1.7739201
2863,FK19,56.3715398,-4.3126836
2864,NR14,52.5626096,1.3761424
2865,FK15,56.2030762,-3.9504730
2866,WV8,52.6259036,-2.1876739
2867,SA18,51.7977271,-3.9609347
2868,GL54,51.8965086,-1.8457414
2869,DN8,53.6152815,-0.9552368
2870,WR13,52.0930845,-2.3428588
2871,EH25,55.8616321,-3.1749932
2872,SY1,52.7226132,-2.7405434
2873,DY10,52.3861590,-2.2238755
2874,TS28,54.7257395,-1.3749668
2875,LL43,52.7745270,-4.0923764
2876,BN22,50.7896229,0.2838081
2877,GU8,51.1486935,-0.6446799
2878,L40,53.6031134,-2.8417029
2879,S5,53.4222438,-1.4632305
2880,SA40,52.0842938,-4.1755517
2881,SN99,51.5519943,-1.7225477
2882,NE29,55.0117600,-1.4654419
2883,DH5,54.8232696,-1.4551478
2884,G31,55.8566242,-4.2081326
2885,L8,53.3898761,-2.9636387
2886,SL60,51.5185490,-0.7147822
2887,WC1V,51.5180929,-0.1165884
2888,TD14,55.8673888,-2.1245054
2889,IV43,57.1555527,-5.8106214
2890,SW95,51.4803984,-0.1362742
2891,DE11,52.7727609,-1.5565560
2892,EH6,55.9725098,-3.1753754
2893,NN5,52.2467249,-0.9358726
2894,EC3V,51.5129745,-0.0858623
2895,YO60,54.0861015,-0.9389498
2896,TA10,51.0334527,-2.8257148
2897,ME14,51.2787626,0.5435955
2898,YO24,53.9459380,-1.1169804
2899,SA67,51.7831840,-4.7328423
2900,LL39,52.7102009,-4.0123647
2901,LU6,51.8780425,-0.5377989
2902,DH7,54.7897219,-1.6660103
2903,EH24,55.8496545,-3.1370136
2904,SE1P,51.4927767,-0.0801528
2905,TN34,50.8650015,0.5821191
2906,SS22,51.5569790,0.7068231
2907,SA42,52.0154537,-4.8524793
2908,PA20,55.8341544,-5.0572403
2909,EH39,56.0470676,-2.7342150
2910,MK1,52.0055233,-0.7243816
2911,FK18,56.3246007,-4.3291315
2912,PE13,52.6700673,0.1371284
2913,TW1,51.4510989,-0.3257026
2914,LE8,52.5550348,-1.0945690
2915,WF3,53.7239736,-1.5253183
2916,NP26,51.5909077,-2.7788809
2917,S99,53.4042410,-1.4310272
2918,B98,52.3022428,-1.9130643
2919,PH4,56.2613859,-3.7853249
2920,NE85,54.9319342,-1.5848013
2921,PA47,55.6820071,-6.5040794
2922,PA22,55.9714333,-5.1344071
2923,L17,53.3775853,-2.9406564
2924,TF2,52.7002332,-2.4399297
2925,CR8,51.3319133,-0.1138248
2926,EC3P,51.5239860,-0.1104578
2927,E9,51.5440387,-0.0430441
2928,BH3,50.7365886,-1.8833558
2929,YO62,54.2461752,-0.9943394
2930,KW6,58.2501390,-3.4446253
2931,ST7,53.0885898,-2.2685631
2932,WC1R,51.5196199,-0.1158498
2933,SG5,51.9713173,-0.2810918
2934,SY22,52.7568466,-3.1868040
2935,S72,53.5786497,-1.3911586
2936,RM10,51.5448684,0.1578473
2937,CF38,51.5605507,-3.3327717
2938,B67,52.4857050,-1.9787293
2939,HX1,53.7210243,-1.8716182
2940,CB9,52.0833705,0.4396970
2941,YO26,53.9757464,-1.1783526
2942,HA3,51.5937695,-0.3209409
2943,AB12,57.1020973,-2.1129498
2944,BD97,53.8266825,-1.7967244
2945,B9,52.4781837,-1.8508904
2946,NR34,52.4387601,1.5835599
2947,WV5,52.5341081,-2.2103369
2948,PL23,50.3374532,-4.6368031
2949,TR12,50.0422340,-5.1794424
2950,S96,53.4023591,-1.4250619
2951,TW12,51.4228861,-0.3697391`,Ho=["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14","E15","E16","E17","E18","EC1","EC2","EC3","EC4","N1","N2","N3","N4","N5","N6","N7","N8","N9","N10","N11","N12","N13","N14","N15","N16","N17","N18","N19","N20","N21","N22","NW1","NW2","NW3","NW4","NW5","NW6","NW7","NW8","NW9","NW10","NW11","SE1","SE2","SE3","SE4","SE5","SE6","SE7","SE8","SE9","SE10","SE11","SE12","SE13","SE14","SE15","SE16","SE17","SE18","SE19","SE20","SE21","SE22","SE23","SE24","SE25","SE26","SE27","SE28","SW1","SW2","SW3","SW4","SW5","SW6","SW7","SW8","SW9","SW10","SW11","SW12","SW13","SW14","SW15","SW16","SW17","SW18","SW19","SW20","W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13","W14","WC1","WC2"];function Mo(){const e=Wo.trim().split(`
`),n={};for(let t=1;t<e.length;t++){const[r,l,i,o]=e[t].split(",");l&&i&&o&&(n[l.trim()]=[parseFloat(i),parseFloat(o)])}return n}const nt=Mo(),Oo={E1:{rent:72,nightlife:88,transport:82,greenery:38,age:85,culture:90},E2:{rent:68,nightlife:80,transport:76,greenery:52,age:82,culture:78},E3:{rent:74,nightlife:60,transport:70,greenery:62,age:75,culture:58},E8:{rent:65,nightlife:84,transport:72,greenery:65,age:88,culture:82},E9:{rent:70,nightlife:66,transport:68,greenery:58,age:80,culture:62},EC1:{rent:44,nightlife:78,transport:92,greenery:28,age:65,culture:88},N1:{rent:52,nightlife:76,transport:84,greenery:54,age:74,culture:84},N4:{rent:72,nightlife:62,transport:74,greenery:68,age:76,culture:64},N5:{rent:62,nightlife:56,transport:70,greenery:72,age:70,culture:62},N16:{rent:70,nightlife:72,transport:66,greenery:70,age:82,culture:74},NW1:{rent:50,nightlife:86,transport:86,greenery:55,age:72,culture:88},NW3:{rent:28,nightlife:40,transport:62,greenery:92,age:44,culture:68},NW5:{rent:62,nightlife:66,transport:72,greenery:60,age:72,culture:68},NW6:{rent:58,nightlife:60,transport:76,greenery:64,age:74,culture:66},SE1:{rent:48,nightlife:80,transport:88,greenery:42,age:70,culture:86},SE4:{rent:74,nightlife:58,transport:68,greenery:66,age:78,culture:60},SE5:{rent:72,nightlife:64,transport:66,greenery:58,age:76,culture:68},SE8:{rent:76,nightlife:70,transport:68,greenery:54,age:80,culture:66},SE11:{rent:60,nightlife:68,transport:82,greenery:52,age:70,culture:72},SE15:{rent:74,nightlife:82,transport:70,greenery:56,age:83,culture:80},SW4:{rent:56,nightlife:78,transport:78,greenery:66,age:76,culture:72},SW9:{rent:66,nightlife:88,transport:80,greenery:50,age:80,culture:86},SW11:{rent:50,nightlife:70,transport:74,greenery:68,age:68,culture:68},W1:{rent:30,nightlife:94,transport:94,greenery:38,age:60,culture:96},W11:{rent:28,nightlife:72,transport:76,greenery:68,age:55,culture:84},W12:{rent:56,nightlife:68,transport:80,greenery:52,age:68,culture:70},WC1:{rent:38,nightlife:68,transport:92,greenery:48,age:62,culture:84}};function _o(e){const n=e.split("").reduce((r,l)=>r+l.charCodeAt(0),0),t=(r,l,i)=>r+(n+i)%(l-r);return{rent:t(40,80,1),nightlife:t(30,85,2),transport:t(45,90,3),greenery:t(30,80,4),age:t(40,85,5),culture:t(30,85,6)}}async function zo(e){var n,t;try{const l=await(await fetch(`https://api.postcodes.io/outcodes/${encodeURIComponent(e)}`)).json();return l.status!==200?null:{code:e,area:((n=l.result.admin_district)==null?void 0:n[0])??((t=l.result.parliamentary_constituency)==null?void 0:t[0])??e,...Oo[e]??_o(e)}}catch{return null}}const tt=Ho,jo=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #F7F4EF;
    --warm-white: #FDFCFA;
    --stone: #E8E3DA;
    --stone-mid: #D4CEC4;
    --stone-dark: #B8B0A4;
    --ink: #2C2924;
    --ink-light: #6B6560;
    --ink-faint: #A09890;
    --sage: #8A9E8C;
    --sage-light: #C8D8C9;
    --sage-pale: #EEF3EE;
    --terracotta: #C4795A;
    --terracotta-pale: #F5EAE4;
    --gold: #C9A96E;
    --gold-pale: #F5EDD8;
    --nav-h: 64px;
    --radius: 16px;
    --radius-sm: 8px;
    --transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: var(--nav-h);
    background: rgba(247,244,239,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--stone);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px;
    transition: background var(--transition);
  }
  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    color: var(--ink);
    letter-spacing: -0.3px;
  }
  .nav-logo span { color: var(--sage); }
  .nav-links { display: flex; gap: 4px; }
  .nav-link {
    font-size: 13px; font-weight: 400;
    color: var(--ink-light);
    padding: 6px 14px; border-radius: 20px;
    cursor: pointer; border: none; background: none;
    transition: all 0.2s ease;
    letter-spacing: 0.1px;
  }
  .nav-link:hover { color: var(--ink); background: var(--stone); }
  .nav-link.active { color: var(--ink); background: var(--stone); font-weight: 500; }

  /* PAGE TRANSITIONS */
  .page {
    min-height: 100vh;
    padding-top: var(--nav-h);
    opacity: 0;
    transform: translateY(12px);
    animation: fadeUp 0.5s var(--transition) forwards;
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  /* HERO */
  .hero {
    display: grid; grid-template-columns: 1fr 1fr;
    min-height: calc(100vh - var(--nav-h));
    gap: 0;
  }
  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 80px 60px 80px 80px;
  }
  .hero-eyebrow {
    font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;
    color: var(--sage); margin-bottom: 24px;
    display: flex; align-items: center; gap: 8px;
  }
  .hero-eyebrow::before {
    content: ''; display: block; width: 24px; height: 1px; background: var(--sage);
  }
  .hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(40px, 5vw, 64px);
    line-height: 1.08;
    letter-spacing: -1.5px;
    color: var(--ink);
    margin-bottom: 24px;
  }
  .hero-title em { font-style: italic; color: var(--sage); }
  .hero-body {
    font-size: 16px; line-height: 1.7; color: var(--ink-light);
    max-width: 420px; margin-bottom: 40px; font-weight: 300;
  }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--ink); color: var(--cream);
    padding: 14px 28px; border-radius: 40px;
    font-size: 14px; font-weight: 500; font-family: 'DM Sans', sans-serif;
    border: none; cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 0.1px;
  }
  .btn-primary:hover { background: var(--ink-light); transform: translateY(-1px); }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--ink);
    padding: 14px 28px; border-radius: 40px;
    font-size: 14px; font-weight: 400; font-family: 'DM Sans', sans-serif;
    border: 1.5px solid var(--stone-dark); cursor: pointer;
    transition: all 0.25s ease;
    margin-left: 12px;
  }
  .btn-secondary:hover { border-color: var(--ink); background: var(--stone); }

  .hero-right {
    background: var(--sage-pale);
    display: flex; align-items: center; justify-content: center;
    padding: 60px 40px;
    position: relative; overflow: hidden;
  }
  .hero-right::before {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: var(--sage-light);
    opacity: 0.4;
  }
  .hero-map-card {
    background: var(--warm-white);
    border-radius: 20px;
    border: 1px solid var(--stone);
    padding: 28px;
    width: 100%; max-width: 380px;
    position: relative; z-index: 1;
    box-shadow: 0 4px 40px rgba(44,41,36,0.06);
  }
  .mini-postcode-list { display: flex; flex-direction: column; gap: 10px; }
  .mini-postcode-item {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 16px; border-radius: 12px;
    background: var(--cream); border: 1px solid var(--stone);
    animation: slideIn 0.4s ease both;
  }
  .mini-postcode-item:nth-child(1) { animation-delay: 0.2s; }
  .mini-postcode-item:nth-child(2) { animation-delay: 0.35s; }
  .mini-postcode-item:nth-child(3) { animation-delay: 0.5s; }
  @keyframes slideIn { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
  .mini-rank {
    font-family: 'DM Serif Display', serif;
    font-size: 18px; color: var(--stone-dark); min-width: 28px;
  }
  .mini-code { font-size: 14px; font-weight: 500; color: var(--ink); }
  .mini-area { font-size: 12px; color: var(--ink-faint); font-weight: 300; }
  .mini-score {
    margin-left: auto;
    font-size: 13px; font-weight: 500;
    color: var(--sage); background: var(--sage-pale);
    padding: 4px 10px; border-radius: 20px;
  }
  .card-label {
    font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
    color: var(--ink-faint); margin-bottom: 16px; font-weight: 500;
  }

  /* STATS ROW */
  .stats-row {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--stone);
    border-top: 1px solid var(--stone); border-bottom: 1px solid var(--stone);
  }
  .stat-cell {
    background: var(--warm-white);
    padding: 40px 48px; text-align: center;
  }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 48px; color: var(--ink); line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label { font-size: 13px; color: var(--ink-faint); font-weight: 300; }

  /* SECTION */
  .section { padding: 80px; }
  .section-header { margin-bottom: 48px; }
  .section-eyebrow {
    font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;
    color: var(--terracotta); margin-bottom: 12px;
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 36px; letter-spacing: -0.8px; color: var(--ink);
    line-height: 1.2;
  }

  /* FACTOR CARDS */
  .factors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .factor-card {
    background: var(--warm-white); border: 1px solid var(--stone);
    border-radius: var(--radius); padding: 24px;
    transition: all 0.25s ease; cursor: default;
  }
  .factor-card:hover { border-color: var(--stone-dark); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(44,41,36,0.07); }
  .factor-icon {
    width: 40px; height: 40px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; margin-bottom: 16px;
  }
  .factor-name { font-size: 14px; font-weight: 500; color: var(--ink); margin-bottom: 6px; }
  .factor-desc { font-size: 13px; color: var(--ink-faint); line-height: 1.5; font-weight: 300; }

  /* ───────── EXPLORE PAGE ───────── */
  .explore-layout { display: grid; grid-template-columns: 380px 1fr; gap: 0; min-height: calc(100vh - var(--nav-h)); }
  .explore-sidebar {
    border-right: 1px solid var(--stone);
    display: flex; flex-direction: column;
    background: var(--warm-white);
  }
  .sidebar-top { padding: 32px 28px 20px; border-bottom: 1px solid var(--stone); }
  .sidebar-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--ink); margin-bottom: 6px; }
  .sidebar-sub { font-size: 13px; color: var(--ink-faint); font-weight: 300; }

  .weights-section { padding: 24px 28px; border-bottom: 1px solid var(--stone); }
  .weights-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 16px; font-weight: 500; }
  .weight-row { margin-bottom: 16px; }
  .weight-row-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .weight-name { font-size: 13px; color: var(--ink); font-weight: 400; }
  .weight-val { font-size: 12px; color: var(--sage); font-weight: 500; }
  input[type=range] {
    width: 100%; accent-color: var(--sage);
    height: 4px; cursor: pointer;
  }

  .results-section { padding: 20px 28px; flex: 1; overflow-y: auto; }
  .results-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 14px; font-weight: 500; }
  .result-card {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 16px; border-radius: 12px;
    background: var(--cream); border: 1.5px solid transparent;
    margin-bottom: 8px; cursor: pointer;
    transition: all 0.2s ease;
  }
  .result-card:hover { border-color: var(--stone-dark); background: var(--warm-white); }
  .result-card.selected { border-color: var(--sage); background: var(--sage-pale); }
  .result-rank {
    font-family: 'DM Serif Display', serif; font-size: 20px;
    color: var(--stone-dark); min-width: 32px; text-align: center;
  }
  .result-rank.top { color: var(--gold); }
  .result-info { flex: 1; }
  .result-code { font-size: 15px; font-weight: 500; color: var(--ink); }
  .result-area { font-size: 12px; color: var(--ink-faint); font-weight: 300; margin-top: 2px; }
  .result-score-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
  .result-score { font-size: 18px; font-weight: 500; color: var(--ink); font-family: 'DM Serif Display', serif; }
  .score-bar-bg { width: 60px; height: 3px; background: var(--stone); border-radius: 2px; }
  .score-bar-fill { height: 3px; border-radius: 2px; background: var(--sage); transition: width 0.6s ease; }

  /* DETAIL PANEL */
  .detail-panel {
    background: var(--cream);
    display: flex; flex-direction: column;
    overflow-y: auto;
  }
  .detail-hero {
    padding: 48px 56px 40px;
    border-bottom: 1px solid var(--stone);
    background: var(--warm-white);
  }
  .detail-tag {
    display: inline-block; font-size: 11px; font-weight: 500; letter-spacing: 1.5px;
    text-transform: uppercase; color: var(--sage); background: var(--sage-pale);
    padding: 5px 12px; border-radius: 20px; margin-bottom: 20px;
  }
  .detail-postcode { font-family: 'DM Serif Display', serif; font-size: 52px; color: var(--ink); letter-spacing: -2px; line-height: 1; margin-bottom: 8px; }
  .detail-area-name { font-size: 16px; color: var(--ink-light); font-weight: 300; margin-bottom: 32px; }
  .detail-score-row { display: flex; align-items: baseline; gap: 12px; }
  .detail-score-big { font-family: 'DM Serif Display', serif; font-size: 80px; color: var(--ink); line-height: 1; letter-spacing: -3px; }
  .detail-score-label { font-size: 14px; color: var(--ink-faint); font-weight: 300; }
  .detail-verdict {
    display: inline-block; margin-top: 16px;
    font-size: 13px; color: var(--terracotta); font-weight: 400;
    background: var(--terracotta-pale); padding: 6px 14px; border-radius: 20px;
  }

  .detail-body { padding: 40px 56px; }
  .factor-breakdown-title { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 24px; font-weight: 500; }
  .factor-row { margin-bottom: 20px; }
  .factor-row-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  .factor-row-name { font-size: 14px; color: var(--ink); font-weight: 400; }
  .factor-row-score { font-size: 14px; font-weight: 500; color: var(--ink); }
  .factor-track { height: 6px; background: var(--stone); border-radius: 3px; overflow: hidden; }
  .factor-fill { height: 6px; border-radius: 3px; transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }

  .highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px; }
  .highlight-card {
    background: var(--warm-white); border: 1px solid var(--stone);
    border-radius: 12px; padding: 18px 20px;
  }
  .highlight-label { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: var(--ink-faint); font-weight: 500; margin-bottom: 8px; }
  .highlight-val { font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--ink); }
  .highlight-sub { font-size: 12px; color: var(--ink-faint); font-weight: 300; margin-top: 2px; }

  /* EMPTY STATE */
  .empty-state {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: 100%; padding: 80px 40px; text-align: center; color: var(--ink-faint);
  }
  .empty-icon { font-size: 48px; margin-bottom: 20px; opacity: 0.3; }
  .empty-text { font-size: 15px; font-weight: 300; line-height: 1.6; }

  /* ABOUT PAGE */
  .about-layout { max-width: 760px; margin: 0 auto; padding: 80px 40px; }
  .about-hero-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); font-weight: 500; margin-bottom: 16px; }
  .about-title { font-family: 'DM Serif Display', serif; font-size: 52px; letter-spacing: -1.5px; color: var(--ink); line-height: 1.1; margin-bottom: 32px; }
  .about-lead { font-size: 18px; color: var(--ink-light); line-height: 1.7; font-weight: 300; margin-bottom: 48px; border-bottom: 1px solid var(--stone); padding-bottom: 48px; }
  .about-section { margin-bottom: 48px; }
  .about-section h3 { font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 14px; }
  .about-section p { font-size: 15px; color: var(--ink-light); line-height: 1.8; font-weight: 300; }
  .factor-pill-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
  .factor-pill {
    display: flex; align-items: center; gap: 6px;
    padding: 6px 14px; border-radius: 20px;
    font-size: 13px; font-weight: 400;
    border: 1px solid var(--stone);
    color: var(--ink-light); background: var(--warm-white);
  }
  .pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); }

  /* FOOTER */
  .footer { border-top: 1px solid var(--stone); padding: 32px 80px; display: flex; justify-content: space-between; align-items: center; background: var(--warm-white); }
  .footer-note { font-size: 12px; color: var(--ink-faint); font-weight: 300; }
  .footer-logo { font-family: 'DM Serif Display', serif; font-size: 14px; color: var(--stone-dark); }

  /* AI badge */
  .ai-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; color: var(--ink-faint); font-weight: 400;
    background: var(--stone); padding: 4px 10px; border-radius: 20px; margin-top: 24px;
  }
  .ai-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--sage); animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

  /* Loading shimmer */
  .shimmer {
    background: linear-gradient(90deg, var(--stone) 25%, var(--stone-mid) 50%, var(--stone) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
    border-radius: 6px;
  }
  @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

  .tag-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .tag {
    font-size: 11px; padding: 4px 10px; border-radius: 20px;
    background: var(--stone); color: var(--ink-light); font-weight: 400;
  }
  .tag.good { background: var(--sage-pale); color: var(--sage); }
  .tag.warn { background: var(--gold-pale); color: #9A7340; }
  .tag.bad { background: var(--terracotta-pale); color: var(--terracotta); }

  /* ───────── HEATMAP PAGE ───────── */
  .heatmap-layout { display: grid; grid-template-columns: 300px 1fr; gap: 0; min-height: calc(100vh - var(--nav-h)); }

  .heatmap-sidebar {
    border-right: 1px solid var(--stone);
    display: flex; flex-direction: column;
    background: var(--warm-white);
    overflow-y: auto;
  }

  .heatmap-factor-btn {
    display: flex; align-items: center; gap: 12px;
    padding: 14px 20px;
    background: none; border: none; border-bottom: 1px solid var(--stone);
    cursor: pointer; text-align: left; width: 100%;
    transition: background 0.15s ease;
  }
  .heatmap-factor-btn:hover { background: var(--cream); }
  .heatmap-factor-btn.active { background: var(--sage-pale); }
  .heatmap-factor-icon {
    width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 14px;
  }
  .heatmap-factor-label { font-size: 13px; font-weight: 400; color: var(--ink); }
  .heatmap-factor-sub { font-size: 11px; color: var(--ink-faint); font-weight: 300; margin-top: 1px; }
  .heatmap-factor-btn.active .heatmap-factor-label { font-weight: 500; color: var(--ink); }

  .heatmap-legend { padding: 24px 20px; border-bottom: 1px solid var(--stone); }
  .heatmap-legend-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 12px; font-weight: 500; }
  .heatmap-scale {
    height: 8px; border-radius: 4px; margin-bottom: 6px;
  }
  .heatmap-scale-ends { display: flex; justify-content: space-between; font-size: 11px; color: var(--ink-faint); font-weight: 300; }

  .heatmap-tooltip-section { padding: 20px; flex: 1; }
  .heatmap-tooltip-empty { font-size: 13px; color: var(--ink-faint); font-weight: 300; line-height: 1.6; }
  .heatmap-tooltip-code { font-family: 'DM Serif Display', serif; font-size: 28px; color: var(--ink); letter-spacing: -1px; margin-bottom: 2px; }
  .heatmap-tooltip-area { font-size: 12px; color: var(--ink-faint); font-weight: 300; margin-bottom: 14px; }
  .heatmap-tooltip-score-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
  .heatmap-tooltip-score { font-family: 'DM Serif Display', serif; font-size: 48px; color: var(--ink); line-height: 1; letter-spacing: -2px; }
  .heatmap-tooltip-score-label { font-size: 13px; color: var(--ink-faint); font-weight: 300; }
  .heatmap-tooltip-verdict { font-size: 12px; color: var(--terracotta); background: var(--terracotta-pale); padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 16px; }
  .heatmap-mini-factors { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
  .heatmap-mini-row { display: flex; align-items: center; gap: 8px; }
  .heatmap-mini-name { font-size: 12px; color: var(--ink-faint); font-weight: 300; width: 100px; flex-shrink: 0; }
  .heatmap-mini-track { flex: 1; height: 4px; background: var(--stone); border-radius: 2px; overflow: hidden; }
  .heatmap-mini-fill { height: 4px; border-radius: 2px; transition: width 0.6s ease; }
  .heatmap-mini-val { font-size: 11px; font-weight: 500; color: var(--ink); min-width: 24px; text-align: right; }

  .heatmap-canvas-wrap {
    background: var(--cream);
    display: flex; align-items: flex-start; justify-content: center;
    padding: 40px;
    overflow: auto;
  }

  .heatmap-canvas-wrap canvas {
    border-radius: var(--radius);
    border: 1px solid var(--stone);
    display: block;
    cursor: crosshair;
  }
`,Fo=[{code:"E1",area:"Whitechapel / Shoreditch",rent:72,nightlife:88,transport:82,greenery:38,age:85,culture:90},{code:"E2",area:"Bethnal Green",rent:68,nightlife:80,transport:76,greenery:52,age:82,culture:78},{code:"E3",area:"Bow / Mile End",rent:74,nightlife:60,transport:70,greenery:62,age:75,culture:58},{code:"E8",area:"Hackney",rent:65,nightlife:84,transport:72,greenery:65,age:88,culture:82},{code:"E9",area:"Homerton",rent:70,nightlife:66,transport:68,greenery:58,age:80,culture:62},{code:"EC1",area:"Clerkenwell / Farringdon",rent:44,nightlife:78,transport:92,greenery:28,age:65,culture:88},{code:"N1",area:"Islington",rent:52,nightlife:76,transport:84,greenery:54,age:74,culture:84},{code:"N4",area:"Finsbury Park",rent:72,nightlife:62,transport:74,greenery:68,age:76,culture:64},{code:"N5",area:"Highbury",rent:62,nightlife:56,transport:70,greenery:72,age:70,culture:62},{code:"N6",area:"Highgate",rent:38,nightlife:44,transport:58,greenery:88,age:48,culture:64},{code:"N16",area:"Stoke Newington",rent:70,nightlife:72,transport:66,greenery:70,age:82,culture:74},{code:"NW1",area:"Camden Town",rent:50,nightlife:86,transport:86,greenery:55,age:72,culture:88},{code:"NW3",area:"Hampstead",rent:28,nightlife:40,transport:62,greenery:92,age:44,culture:68},{code:"NW5",area:"Kentish Town",rent:62,nightlife:66,transport:72,greenery:60,age:72,culture:68},{code:"NW6",area:"West Hampstead",rent:58,nightlife:60,transport:76,greenery:64,age:74,culture:66},{code:"SE1",area:"Borough / Bermondsey",rent:48,nightlife:80,transport:88,greenery:42,age:70,culture:86},{code:"SE4",area:"Brockley",rent:74,nightlife:58,transport:68,greenery:66,age:78,culture:60},{code:"SE5",area:"Camberwell",rent:72,nightlife:64,transport:66,greenery:58,age:76,culture:68},{code:"SE8",area:"Deptford",rent:76,nightlife:70,transport:68,greenery:54,age:80,culture:66},{code:"SE11",area:"Kennington / Vauxhall",rent:60,nightlife:68,transport:82,greenery:52,age:70,culture:72},{code:"SE15",area:"Peckham",rent:74,nightlife:82,transport:70,greenery:56,age:83,culture:80},{code:"SW4",area:"Clapham",rent:56,nightlife:78,transport:78,greenery:66,age:76,culture:72},{code:"SW9",area:"Brixton",rent:66,nightlife:88,transport:80,greenery:50,age:80,culture:86},{code:"SW11",area:"Battersea",rent:50,nightlife:70,transport:74,greenery:68,age:68,culture:68},{code:"W1",area:"Soho / Marylebone",rent:30,nightlife:94,transport:94,greenery:38,age:60,culture:96},{code:"W11",area:"Notting Hill",rent:28,nightlife:72,transport:76,greenery:68,age:55,culture:84},{code:"W12",area:"Shepherd's Bush",rent:56,nightlife:68,transport:80,greenery:52,age:68,culture:70},{code:"WC1",area:"Bloomsbury / Holborn",rent:38,nightlife:68,transport:92,greenery:48,age:62,culture:84}],Io=Object.fromEntries(Fo.map(e=>[e.code,e]));function Go(e){const n=e.split("").reduce((r,l)=>r+l.charCodeAt(0),0),t=(r,l,i=0)=>r+(n+i)%(l-r);return{rent:t(40,80,1),nightlife:t(30,85,2),transport:t(45,90,3),greenery:t(30,80,4),age:t(40,85,5),culture:t(30,85,6)}}function ll(e){return Io[e]||{code:e,area:e,...Go(e)}}const Uo=tt.map(ll);function Ko(){let e=1/0,n=-1/0,t=1/0,r=-1/0;return tt.forEach(l=>{if(nt[l]){const[i,o]=nt[l];e=Math.min(e,i),n=Math.max(n,i),t=Math.min(t,o),r=Math.max(r,o)}}),{minLat:e,maxLat:n,minLng:t,maxLng:r}}Ko();const nn=[{id:"rent",label:"Rent affordability",color:"#8A9E8C",bg:"#EEF3EE"},{id:"nightlife",label:"Nightlife & bars",color:"#C4795A",bg:"#F5EAE4"},{id:"transport",label:"Transport links",color:"#C9A96E",bg:"#F5EDD8"},{id:"greenery",label:"Parks & trees",color:"#6B9E6B",bg:"#E8F2E8"},{id:"age",label:"Young population",color:"#7B8EC4",bg:"#ECEEF8"},{id:"culture",label:"Culture & food",color:"#B47EB3",bg:"#F4EBF4"}],Vo=[{min:85,text:"Outstanding — a graduate's dream area"},{min:75,text:"Excellent — highly recommended"},{min:65,text:"Very good — solid choice"},{min:55,text:"Good — worth considering"},{min:0,text:"Decent — has its trade-offs"}],Yo=[{code:"E1",avgRent:"£1,650",commute:"14 min",bars:48},{code:"E2",avgRent:"£1,720",commute:"20 min",bars:32},{code:"E3",avgRent:"£1,580",commute:"28 min",bars:18},{code:"E8",avgRent:"£1,800",commute:"24 min",bars:38},{code:"E9",avgRent:"£1,650",commute:"28 min",bars:22},{code:"EC1",avgRent:"£2,400",commute:"8 min",bars:56},{code:"N1",avgRent:"£2,100",commute:"18 min",bars:42},{code:"N4",avgRent:"£1,700",commute:"22 min",bars:24},{code:"N5",avgRent:"£1,850",commute:"26 min",bars:20},{code:"N6",avgRent:"£2,600",commute:"35 min",bars:14},{code:"N16",avgRent:"£1,750",commute:"30 min",bars:34},{code:"NW1",avgRent:"£2,050",commute:"14 min",bars:62},{code:"NW3",avgRent:"£2,900",commute:"30 min",bars:12},{code:"NW5",avgRent:"£1,820",commute:"22 min",bars:26},{code:"NW6",avgRent:"£1,780",commute:"20 min",bars:22},{code:"SE1",avgRent:"£2,200",commute:"10 min",bars:54},{code:"SE4",avgRent:"£1,620",commute:"30 min",bars:18},{code:"SE5",avgRent:"£1,640",commute:"26 min",bars:26},{code:"SE8",avgRent:"£1,580",commute:"28 min",bars:28},{code:"SE11",avgRent:"£1,900",commute:"16 min",bars:30},{code:"SE15",avgRent:"£1,650",commute:"28 min",bars:44},{code:"SW4",avgRent:"£2,000",commute:"22 min",bars:36},{code:"SW9",avgRent:"£1,750",commute:"18 min",bars:52},{code:"SW11",avgRent:"£2,100",commute:"24 min",bars:28},{code:"W1",avgRent:"£3,200",commute:"5 min",bars:120},{code:"W11",avgRent:"£3,100",commute:"20 min",bars:38},{code:"W12",avgRent:"£1,900",commute:"22 min",bars:30},{code:"WC1",avgRent:"£2,500",commute:"8 min",bars:44}];function K0(e,n){let t=0,r=0;return nn.forEach(l=>{const i=n[l.id]??5;t+=e[l.id]/100*i,r+=i}),r===0?0:Math.round(t/r*100)}function $o(e){var n;return((n=Vo.find(t=>e>=t.min))==null?void 0:n.text)??""}function Xo(e,n=1){const t=Math.max(0,Math.min(100,e))/100,r=Math.round(0+t*0),l=Math.round(0+t*255),i=Math.round(255+t*-255);return`rgba(${r},${l},${i},${n})`}function Qo({onNavigate:e}){const n=[{code:"SW9",area:"Brixton",score:82},{code:"E8",area:"Hackney",score:78},{code:"SE15",area:"Peckham",score:75}];return p.jsxs("div",{className:"page",children:[p.jsxs("div",{className:"hero",children:[p.jsxs("div",{className:"hero-left",children:[p.jsx("div",{className:"hero-eyebrow",children:"London Graduate Index"}),p.jsxs("h1",{className:"hero-title",children:["Find your",p.jsx("br",{}),p.jsx("em",{children:"perfect"}),p.jsx("br",{}),"London postcode"]}),p.jsx("p",{className:"hero-body",children:"We weigh rent, nightlife, transport, green space, and more — tuned to what matters to you — to rank every London postcode for life after graduation."}),p.jsxs("div",{children:[p.jsx("button",{className:"btn-primary",onClick:()=>e("explore"),children:"Start exploring →"}),p.jsx("button",{className:"btn-secondary",onClick:()=>e("about"),children:"How it works"})]}),p.jsx("div",{className:"ai-dot",style:{width:5,height:5,borderRadius:"50%",background:"var(--sage)",display:"inline-block",marginTop:32,marginRight:6,animation:"pulse 2s infinite"}}),p.jsx("span",{style:{fontSize:12,color:"var(--ink-faint)",fontWeight:300},children:"Powered by AI analysis across 111 London postcodes"})]}),p.jsx("div",{className:"hero-right",children:p.jsxs("div",{className:"hero-map-card",children:[p.jsx("div",{className:"card-label",children:"Top rated right now"}),p.jsx("div",{className:"mini-postcode-list",children:n.map((t,r)=>p.jsxs("div",{className:"mini-postcode-item",children:[p.jsx("div",{className:"mini-rank",children:r+1}),p.jsxs("div",{children:[p.jsx("div",{className:"mini-code",children:t.code}),p.jsx("div",{className:"mini-area",children:t.area})]}),p.jsx("div",{className:"mini-score",children:t.score})]},t.code))})]})})]}),p.jsxs("div",{className:"stats-row",children:[p.jsxs("div",{className:"stat-cell",children:[p.jsx("div",{className:"stat-num",children:"111"}),p.jsx("div",{className:"stat-label",children:"London postcodes ranked"})]}),p.jsxs("div",{className:"stat-cell",children:[p.jsx("div",{className:"stat-num",children:"6"}),p.jsx("div",{className:"stat-label",children:"Weighted lifestyle factors"})]}),p.jsxs("div",{className:"stat-cell",children:[p.jsx("div",{className:"stat-num",children:"∞"}),p.jsx("div",{className:"stat-label",children:"Personalisation combinations"})]})]}),p.jsxs("div",{className:"section",children:[p.jsxs("div",{className:"section-header",children:[p.jsx("div",{className:"section-eyebrow",children:"What we measure"}),p.jsx("h2",{className:"section-title",children:"Six factors, your weights"})]}),p.jsx("div",{className:"factors-grid",children:nn.map(t=>p.jsxs("div",{className:"factor-card",children:[p.jsx("div",{className:"factor-icon",style:{background:t.bg,color:t.color},children:t.id==="rent"?"£":t.id==="nightlife"?"◈":t.id==="transport"?"⟳":t.id==="greenery"?"◉":t.id==="age"?"◆":"▲"}),p.jsx("div",{className:"factor-name",children:t.label}),p.jsxs("div",{className:"factor-desc",children:[t.id==="rent"&&"How affordable average rent is relative to a starting graduate salary.",t.id==="nightlife"&&"Density of bars, clubs, restaurants and late-night venues.",t.id==="transport"&&"Tube, Overground, bus and rail connections to central London.",t.id==="greenery"&&"Parks, trees, canals and green space per capita in the area.",t.id==="age"&&"Proportion of 20–34 year olds — who your neighbours will be.",t.id==="culture"&&"Galleries, markets, independent food, live music and arts."]})]},t.id))})]}),p.jsxs("div",{className:"footer",children:[p.jsx("div",{className:"footer-note",children:"Data is indicative. Always do your own research before moving."}),p.jsx("div",{className:"footer-logo",children:"GLI London"})]})]})}function Zo(){var H;const[e,n]=Z.useState({rent:7,nightlife:6,transport:5,greenery:4,age:6,culture:5}),[t,r]=Z.useState(null),[l,i]=Z.useState(Uo),[o,a]=Z.useState(!!((H=window.google)!=null&&H.maps)),[u,d]=Z.useState(""),g=Z.useRef(null),h=Z.useRef({}),m=Z.useRef(null);Z.useEffect(()=>{var v,N;if((v=window.google)!=null&&v.maps){a(!0);return}const s="AIzaSyAqfkMetA3fF6rxe-Up3QqStJtqaq8XrPw";window.gm_authFailure=()=>{d("Google Maps auth failed. Check API key restrictions, enabled APIs, and billing.")};const c=document.querySelector("script[data-google-maps='true']");if(c){(N=window.google)!=null&&N.maps?a(!0):c.addEventListener("load",()=>a(!0),{once:!0});return}const f=document.createElement("script");f.src=`https://maps.googleapis.com/maps/api/js?key=${s}&v=weekly`,f.async=!0,f.dataset.googleMaps="true",f.onload=()=>{d(""),a(!0)},f.onerror=()=>{d("Failed to load Google Maps script."),console.error("Failed to load Google Maps")},document.head.appendChild(f)},[]),Z.useEffect(()=>{async function s(){const f=(await Promise.all(tt.map(v=>zo(v)))).filter(Boolean);if(f.length>0){const v=tt.map(N=>f.find(k=>k.code===N)||ll(N));i(v)}}s()},[]),Z.useEffect(()=>{if(!(!o||!g.current||m.current))try{const s=new window.google.maps.Map(g.current,{zoom:12,center:{lat:51.4995,lng:-.1248},styles:[{featureType:"poi.business",stylers:[{visibility:"off"}]}]});m.current=s,d("")}catch(s){d("Google Maps failed to initialize."),console.error("Google Maps init error",s)}},[o]),Z.useEffect(()=>{if(!m.current||!window.google)return;const s=[...l].map(c=>({...c,score:K0(c,e)})).sort((c,f)=>f.score-c.score);Object.values(h.current).forEach(c=>c.setMap(null)),h.current={},s.forEach(c=>{if(!nt[c.code])return;const[f,v]=nt[c.code],N=c.score,k=Xo(N,1),C=`
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <circle cx="16" cy="16" r="12" fill="${k}" filter="url(#shadow)" opacity="0.9"/>
          <circle cx="16" cy="16" r="10" fill="${k}" opacity="1"/>
          <text x="16" y="18" font-family="Arial" font-size="10" font-weight="bold" fill="white" text-anchor="middle">${c.code}</text>
        </svg>
      `,P=new window.google.maps.Marker({position:{lat:f,lng:v},map:m.current,icon:{url:`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(C)}`,scaledSize:new window.google.maps.Size(32,32)},title:`${c.code} - ${c.area} (Score: ${N})`});P.addListener("click",()=>r(c)),h.current[c.code]=P})},[e,l]);const x=Z.useMemo(()=>[...l].map(s=>({...s,score:K0(s,e)})).sort((s,c)=>c.score-s.score),[l,e]),S=t?x.find(s=>s.code===t.code):null,E=t?Yo.find(s=>s.code===t.code):null;return p.jsx("div",{className:"page",style:{paddingTop:"var(--nav-h)"},children:p.jsxs("div",{className:"explore-layout",children:[p.jsxs("div",{className:"explore-sidebar",children:[p.jsxs("div",{className:"sidebar-top",children:[p.jsx("div",{className:"sidebar-title",children:"Personalise"}),p.jsx("div",{className:"sidebar-sub",children:"Adjust weights to see heatmap update in real-time on the map"})]}),p.jsxs("div",{className:"weights-section",children:[p.jsx("div",{className:"weights-label",children:"Your priorities"}),nn.map(s=>p.jsxs("div",{className:"weight-row",children:[p.jsxs("div",{className:"weight-row-top",children:[p.jsx("span",{className:"weight-name",children:s.label}),p.jsxs("span",{className:"weight-val",children:[e[s.id],"/10"]})]}),p.jsx("input",{type:"range",min:0,max:10,step:1,value:e[s.id],onChange:c=>n(f=>({...f,[s.id]:+c.target.value})),style:{accentColor:s.color}})]},s.id))]}),p.jsxs("div",{className:"results-section",children:[p.jsx("div",{className:"results-label",children:"Ranked postcodes"}),x.map((s,c)=>p.jsxs("div",{className:`result-card${(t==null?void 0:t.code)===s.code?" selected":""}`,onClick:()=>r(s),children:[p.jsx("div",{className:`result-rank${c<3?" top":""}`,children:c+1}),p.jsxs("div",{className:"result-info",children:[p.jsx("div",{className:"result-code",children:s.code}),p.jsx("div",{className:"result-area",children:s.area})]}),p.jsxs("div",{className:"result-score-wrap",children:[p.jsx("div",{className:"result-score",children:s.score}),p.jsx("div",{className:"score-bar-bg",children:p.jsx("div",{className:"score-bar-fill",style:{width:`${s.score}%`}})})]})]},s.code))]})]}),p.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"16px"},children:[p.jsxs("div",{style:{position:"relative"},children:[p.jsx("div",{ref:g,style:{height:"460px",borderRadius:"8px",border:"1px solid var(--stone)",overflow:"hidden"}}),u&&p.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",right:"12px",background:"rgba(44,41,36,0.9)",color:"#fff",padding:"8px 10px",borderRadius:"8px",fontSize:"12px"},children:u})]}),p.jsx("div",{className:"detail-panel",children:S?p.jsxs("div",{style:{animation:"fadeUp 0.35s ease both"},children:[p.jsxs("div",{className:"detail-hero",children:[p.jsxs("div",{className:"detail-tag",children:["Ranked #",x.indexOf(S)+1," of ",x.length]}),p.jsx("div",{className:"detail-postcode",children:S.code}),p.jsx("div",{className:"detail-area-name",children:S.area}),p.jsxs("div",{className:"detail-score-row",children:[p.jsx("div",{className:"detail-score-big",children:S.score}),p.jsxs("div",{className:"detail-score-label",children:["/ 100",p.jsx("br",{}),"overall score"]})]}),p.jsx("div",{className:"detail-verdict",children:$o(S.score)}),E&&p.jsxs("div",{className:"highlights-grid",style:{marginTop:28},children:[p.jsxs("div",{className:"highlight-card",children:[p.jsx("div",{className:"highlight-label",children:"Avg monthly rent"}),p.jsx("div",{className:"highlight-val",children:E.avgRent}),p.jsx("div",{className:"highlight-sub",children:"1-bed flat estimate"})]}),p.jsxs("div",{className:"highlight-card",children:[p.jsx("div",{className:"highlight-label",children:"Commute to Zone 1"}),p.jsx("div",{className:"highlight-val",children:E.commute}),p.jsx("div",{className:"highlight-sub",children:"average transit time"})]}),p.jsxs("div",{className:"highlight-card",children:[p.jsx("div",{className:"highlight-label",children:"Nearby venues"}),p.jsx("div",{className:"highlight-val",children:E.bars}),p.jsx("div",{className:"highlight-sub",children:"bars & restaurants"})]}),p.jsxs("div",{className:"highlight-card",children:[p.jsx("div",{className:"highlight-label",children:"Vibe"}),p.jsx("div",{className:"highlight-val",style:{fontSize:16,paddingTop:4},children:S.score>=80?"🔥 Very lively":S.score>=70?"✨ Buzzing":S.score>=60?"😌 Relaxed":"🌿 Quiet"}),p.jsx("div",{className:"highlight-sub",children:"based on your weights"})]})]})]}),p.jsxs("div",{className:"detail-body",children:[p.jsx("div",{className:"factor-breakdown-title",children:"Factor breakdown"}),nn.map(s=>p.jsxs("div",{className:"factor-row",children:[p.jsxs("div",{className:"factor-row-top",children:[p.jsx("span",{className:"factor-row-name",children:s.label}),p.jsx("span",{className:"factor-row-score",children:S[s.id]})]}),p.jsx("div",{className:"factor-track",children:p.jsx("div",{className:"factor-fill",style:{width:`${S[s.id]}%`,background:s.color}})})]},s.id)),p.jsxs("div",{style:{marginTop:32},children:[p.jsx("div",{className:"factor-breakdown-title",children:"Standout traits"}),p.jsxs("div",{className:"tag-row",children:[nn.filter(s=>S[s.id]>=80).map(s=>p.jsxs("span",{className:"tag good",children:["Strong ",s.label.toLowerCase()]},s.id)),nn.filter(s=>S[s.id]>=60&&S[s.id]<80).map(s=>p.jsxs("span",{className:"tag warn",children:["Decent ",s.label.toLowerCase()]},s.id)),nn.filter(s=>S[s.id]<45).map(s=>p.jsxs("span",{className:"tag bad",children:["Limited ",s.label.toLowerCase()]},s.id))]})]})]})]}):p.jsxs("div",{className:"empty-state",children:[p.jsx("div",{className:"empty-icon",children:"🗺️"}),p.jsxs("div",{className:"empty-text",children:["Click a marker on the map",p.jsx("br",{}),"to see postcode details"]})]})})]})]})})}function Jo(){return p.jsx("div",{className:"page",children:p.jsxs("div",{className:"about-layout",children:[p.jsx("div",{className:"about-hero-label",children:"About the index"}),p.jsx("h1",{className:"about-title",children:"Built for the newly graduated"}),p.jsx("p",{className:"about-lead",children:"Moving to London after university is exciting — and overwhelming. The Graduate Living Index cuts through the noise by scoring every major London postcode on the things that actually matter to young professionals in their early years."}),p.jsxs("div",{className:"about-section",children:[p.jsx("h3",{children:"How scoring works"}),p.jsx("p",{children:"Each postcode receives a raw score (0–100) for six lifestyle factors. You then assign a personal weight (0–10) to each factor. The final score is a weighted average — meaning a night owl who cranks up Nightlife will see a completely different ranking than someone who prioritises green space and quiet."})]}),p.jsxs("div",{className:"about-section",children:[p.jsx("h3",{children:"The six factors"}),p.jsx("p",{children:"We chose factors that reflect the real priorities of graduate life — not just price, but culture, community, and connection."}),p.jsx("div",{className:"factor-pill-grid",children:nn.map(e=>p.jsxs("div",{className:"factor-pill",children:[p.jsx("div",{className:"pill-dot",style:{background:e.color}}),e.label]},e.id))})]}),p.jsxs("div",{className:"about-section",children:[p.jsx("h3",{children:"Data sources"}),p.jsx("p",{children:"Scores are compiled from ONS census data, OpenStreetMap venue density, TfL journey planner data, and average rental listings from major property platforms. Data is refreshed quarterly. All figures are indicative — always visit an area in person before committing."})]}),p.jsxs("div",{className:"about-section",children:[p.jsx("h3",{children:"What's next"}),p.jsx("p",{children:"We're building AI-powered postcode summaries that describe the actual feel of each area in plain language — written by Claude, grounded in real data. We're also expanding to Manchester, Edinburgh, and Bristol."})]}),p.jsx("div",{style:{borderTop:"1px solid var(--stone)",paddingTop:40,marginTop:16},children:p.jsxs("div",{style:{fontSize:12,color:"var(--ink-faint)",lineHeight:1.8,fontWeight:300},children:["Graduate Living Index is an independent tool. Not affiliated with any estate agent or letting platform.",p.jsx("br",{}),"© 2025 Graduate Living Index. London edition."]})})]})})}function qo(){const[e,n]=Z.useState("home"),[t,r]=Z.useState(0);function l(i){n(i),r(o=>o+1),window.scrollTo({top:0,behavior:"smooth"})}return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:jo}),p.jsxs("nav",{className:"nav",children:[p.jsxs("div",{className:"nav-logo",onClick:()=>l("home"),style:{cursor:"pointer"},children:["Grad",p.jsx("span",{children:"Living"})]}),p.jsx("div",{className:"nav-links",children:[["home","Home"],["explore","Explore"],["about","About"]].map(([i,o])=>p.jsx("button",{className:`nav-link${e===i?" active":""}`,onClick:()=>l(i),children:o},i))})]}),p.jsxs("div",{children:[e==="home"&&p.jsx(Qo,{onNavigate:l}),e==="explore"&&p.jsx(Zo,{}),e==="about"&&p.jsx(Jo,{})]},t)]})}rl(document.getElementById("root")).render(p.jsx(Z.StrictMode,{children:p.jsx(qo,{})}));
