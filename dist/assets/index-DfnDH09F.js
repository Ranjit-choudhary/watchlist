(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function qy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ed={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Yw(){if(ng)return Ne;ng=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function k(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function H(N,$,de){this.props=N,this.context=$,this.refs=Y,this.updater=de||z}H.prototype.isReactComponent={},H.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},H.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ce(){}ce.prototype=H.prototype;function ue(N,$,de){this.props=N,this.context=$,this.refs=Y,this.updater=de||z}var pe=ue.prototype=new ce;pe.constructor=ue,Q(pe,H.prototype),pe.isPureReactComponent=!0;var Te=Array.isArray,he=Object.prototype.hasOwnProperty,Ce={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(N,$,de){var fe,Re={},Ae=null,xe=null;if($!=null)for(fe in $.ref!==void 0&&(xe=$.ref),$.key!==void 0&&(Ae=""+$.key),$)he.call($,fe)&&!D.hasOwnProperty(fe)&&(Re[fe]=$[fe]);var Pe=arguments.length-2;if(Pe===1)Re.children=de;else if(1<Pe){for(var $e=Array(Pe),Ze=0;Ze<Pe;Ze++)$e[Ze]=arguments[Ze+2];Re.children=$e}if(N&&N.defaultProps)for(fe in Pe=N.defaultProps,Pe)Re[fe]===void 0&&(Re[fe]=Pe[fe]);return{$$typeof:r,type:N,key:Ae,ref:xe,props:Re,_owner:Ce.current}}function R(N,$){return{$$typeof:r,type:N.type,key:$,ref:N.ref,props:N.props,_owner:N._owner}}function x(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function V(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(de){return $[de]})}var O=/\/+/g;function C(N,$){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):$.toString(36)}function Ue(N,$,de,fe,Re){var Ae=typeof N;(Ae==="undefined"||Ae==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(Ae){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case r:case e:xe=!0}}if(xe)return xe=N,Re=Re(xe),N=fe===""?"."+C(xe,0):fe,Te(Re)?(de="",N!=null&&(de=N.replace(O,"$&/")+"/"),Ue(Re,$,de,"",function(Ze){return Ze})):Re!=null&&(x(Re)&&(Re=R(Re,de+(!Re.key||xe&&xe.key===Re.key?"":(""+Re.key).replace(O,"$&/")+"/")+N)),$.push(Re)),1;if(xe=0,fe=fe===""?".":fe+":",Te(N))for(var Pe=0;Pe<N.length;Pe++){Ae=N[Pe];var $e=fe+C(Ae,Pe);xe+=Ue(Ae,$,de,$e,Re)}else if($e=k(N),typeof $e=="function")for(N=$e.call(N),Pe=0;!(Ae=N.next()).done;)Ae=Ae.value,$e=fe+C(Ae,Pe++),xe+=Ue(Ae,$,de,$e,Re);else if(Ae==="object")throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return xe}function rt(N,$,de){if(N==null)return N;var fe=[],Re=0;return Ue(N,fe,"","",function(Ae){return $.call(de,Ae,Re++)}),fe}function ht(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(de){(N._status===0||N._status===-1)&&(N._status=1,N._result=de)},function(de){(N._status===0||N._status===-1)&&(N._status=2,N._result=de)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var je={current:null},ee={transition:null},Z={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ce};function j(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:rt,forEach:function(N,$,de){rt(N,function(){$.apply(this,arguments)},de)},count:function(N){var $=0;return rt(N,function(){$++}),$},toArray:function(N){return rt(N,function($){return $})||[]},only:function(N){if(!x(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ne.Component=H,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=ue,Ne.StrictMode=s,Ne.Suspense=g,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Ne.act=j,Ne.cloneElement=function(N,$,de){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var fe=Q({},N.props),Re=N.key,Ae=N.ref,xe=N._owner;if($!=null){if($.ref!==void 0&&(Ae=$.ref,xe=Ce.current),$.key!==void 0&&(Re=""+$.key),N.type&&N.type.defaultProps)var Pe=N.type.defaultProps;for($e in $)he.call($,$e)&&!D.hasOwnProperty($e)&&(fe[$e]=$[$e]===void 0&&Pe!==void 0?Pe[$e]:$[$e])}var $e=arguments.length-2;if($e===1)fe.children=de;else if(1<$e){Pe=Array($e);for(var Ze=0;Ze<$e;Ze++)Pe[Ze]=arguments[Ze+2];fe.children=Pe}return{$$typeof:r,type:N.type,key:Re,ref:Ae,props:fe,_owner:xe}},Ne.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Ne.createElement=I,Ne.createFactory=function(N){var $=I.bind(null,N);return $.type=N,$},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(N){return{$$typeof:m,render:N}},Ne.isValidElement=x,Ne.lazy=function(N){return{$$typeof:w,_payload:{_status:-1,_result:N},_init:ht}},Ne.memo=function(N,$){return{$$typeof:_,type:N,compare:$===void 0?null:$}},Ne.startTransition=function(N){var $=ee.transition;ee.transition={};try{N()}finally{ee.transition=$}},Ne.unstable_act=j,Ne.useCallback=function(N,$){return je.current.useCallback(N,$)},Ne.useContext=function(N){return je.current.useContext(N)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(N){return je.current.useDeferredValue(N)},Ne.useEffect=function(N,$){return je.current.useEffect(N,$)},Ne.useId=function(){return je.current.useId()},Ne.useImperativeHandle=function(N,$,de){return je.current.useImperativeHandle(N,$,de)},Ne.useInsertionEffect=function(N,$){return je.current.useInsertionEffect(N,$)},Ne.useLayoutEffect=function(N,$){return je.current.useLayoutEffect(N,$)},Ne.useMemo=function(N,$){return je.current.useMemo(N,$)},Ne.useReducer=function(N,$,de){return je.current.useReducer(N,$,de)},Ne.useRef=function(N){return je.current.useRef(N)},Ne.useState=function(N){return je.current.useState(N)},Ne.useSyncExternalStore=function(N,$,de){return je.current.useSyncExternalStore(N,$,de)},Ne.useTransition=function(){return je.current.useTransition()},Ne.version="18.3.1",Ne}var rg;function Wy(){return rg||(rg=1,ed.exports=Yw()),ed.exports}var ke=Wy();const E=qy(ke);var _u={},td={exports:{}},Yt={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Xw(){return ig||(ig=1,(function(r){function e(ee,Z){var j=ee.length;ee.push(Z);e:for(;0<j;){var N=j-1>>>1,$=ee[N];if(0<o($,Z))ee[N]=Z,ee[j]=$,j=N;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var Z=ee[0],j=ee.pop();if(j!==Z){ee[0]=j;e:for(var N=0,$=ee.length,de=$>>>1;N<de;){var fe=2*(N+1)-1,Re=ee[fe],Ae=fe+1,xe=ee[Ae];if(0>o(Re,j))Ae<$&&0>o(xe,Re)?(ee[N]=xe,ee[Ae]=j,N=Ae):(ee[N]=Re,ee[fe]=j,N=fe);else if(Ae<$&&0>o(xe,j))ee[N]=xe,ee[Ae]=j,N=Ae;else break e}}return Z}function o(ee,Z){var j=ee.sortIndex-Z.sortIndex;return j!==0?j:ee.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,S=null,k=3,z=!1,Q=!1,Y=!1,H=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(ee){for(var Z=t(_);Z!==null;){if(Z.callback===null)s(_);else if(Z.startTime<=ee)s(_),Z.sortIndex=Z.expirationTime,e(g,Z);else break;Z=t(_)}}function Te(ee){if(Y=!1,pe(ee),!Q)if(t(g)!==null)Q=!0,ht(he);else{var Z=t(_);Z!==null&&je(Te,Z.startTime-ee)}}function he(ee,Z){Q=!1,Y&&(Y=!1,ce(I),I=-1),z=!0;var j=k;try{for(pe(Z),S=t(g);S!==null&&(!(S.expirationTime>Z)||ee&&!V());){var N=S.callback;if(typeof N=="function"){S.callback=null,k=S.priorityLevel;var $=N(S.expirationTime<=Z);Z=r.unstable_now(),typeof $=="function"?S.callback=$:S===t(g)&&s(g),pe(Z)}else s(g);S=t(g)}if(S!==null)var de=!0;else{var fe=t(_);fe!==null&&je(Te,fe.startTime-Z),de=!1}return de}finally{S=null,k=j,z=!1}}var Ce=!1,D=null,I=-1,R=5,x=-1;function V(){return!(r.unstable_now()-x<R)}function O(){if(D!==null){var ee=r.unstable_now();x=ee;var Z=!0;try{Z=D(!0,ee)}finally{Z?C():(Ce=!1,D=null)}}else Ce=!1}var C;if(typeof ue=="function")C=function(){ue(O)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,rt=Ue.port2;Ue.port1.onmessage=O,C=function(){rt.postMessage(null)}}else C=function(){H(O,0)};function ht(ee){D=ee,Ce||(Ce=!0,C())}function je(ee,Z){I=H(function(){ee(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){Q||z||(Q=!0,ht(he))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var j=k;k=Z;try{return ee()}finally{k=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,Z){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var j=k;k=ee;try{return Z()}finally{k=j}},r.unstable_scheduleCallback=function(ee,Z,j){var N=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?N+j:N):j=N,ee){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=j+$,ee={id:w++,callback:Z,priorityLevel:ee,startTime:j,expirationTime:$,sortIndex:-1},j>N?(ee.sortIndex=j,e(_,ee),t(g)===null&&ee===t(_)&&(Y?(ce(I),I=-1):Y=!0,je(Te,j-N))):(ee.sortIndex=$,e(g,ee),Q||z||(Q=!0,ht(he))),ee},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(ee){var Z=k;return function(){var j=k;k=Z;try{return ee.apply(this,arguments)}finally{k=j}}}})(rd)),rd}var sg;function Jw(){return sg||(sg=1,nd.exports=Xw()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Zw(){if(og)return Yt;og=1;var r=Wy(),e=Jw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function k(n){return g.call(S,n)?!0:g.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];H[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ce=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ce,ue);H[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ce,ue);H[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ce,ue);H[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function pe(n,i,a,c){var d=H.hasOwnProperty(i)?H[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(Q(i,a,d,c)&&(a=null),c||d===null?k(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,N;function $(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var de=!1;function fe(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,A=f.length-1;1<=v&&0<=A&&d[v]!==f[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==f[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==f[A]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=A);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Re(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=fe(n.type,!1),n;case 11:return n=fe(n.type.render,!1),n;case 1:return n=fe(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ce:return"Portal";case R:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case Ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rt:return i=n.displayName||null,i!==null?i:Ae(n.type)||"Memo";case ht:i=n._payload,n=n._init;try{return Ae(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ws(n){n._valueTracker||(n._valueTracker=Ze(n))}function xo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ts(n,i){var a=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Is(n,i){i=i.checked,i!=null&&pe(n,"checked",i,!1)}function bi(n,i){Is(n,i);var a=Pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?dt(n,i.type,a):i.hasOwnProperty("defaultValue")&&dt(n,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Oo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function dt(n,i,a){(i!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ot=Array.isArray;function In(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Mo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Pe(a)}}function il(n,i){var a=Pe(i.value),c=Pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Fo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Fo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ur,sl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ol=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(n){ol.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),zr[i]=zr[n]})});function Br(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||zr.hasOwnProperty(n)&&zr[n]?(""+i).trim():i+"px"}function As(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Br(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Uo=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(n,i){if(i){if(Uo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Cs(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dr=null,fr=null,it=null;function zo(n){if(n=fa(n)){if(typeof dr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=bl(i),dr(n.stateNode,n.type,i))}}function $r(n){fr?it?it.push(n):it=[n]:fr=n}function Hr(){if(fr){var n=fr,i=it;if(it=fr=null,zo(n),i)for(n=0;n<i.length;n++)zo(i[n])}}function al(n,i){return n(i)}function ll(){}var Fn=!1;function ul(n,i,a){if(Fn)return n(i,a);Fn=!0;try{return al(n,i,a)}finally{Fn=!1,(fr!==null||it!==null)&&(ll(),Hr())}}function Oi(n,i){var a=n.stateNode;if(a===null)return null;var c=bl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qr=!1;if(m)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{qr=!1}function cl(n,i,a,c,d,f,v,A,P){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(K){this.onError(K)}}var pr=!1,Un=null,ks=!1,hn=null,hl={onError:function(n){pr=!0,Un=n}};function dl(n,i,a,c,d,f,v,A,P){pr=!1,Un=null,cl.apply(hl,arguments)}function Bo(n,i,a,c,d,f,v,A,P){if(dl.apply(this,arguments),pr){if(pr){var U=Un;pr=!1,Un=null}else throw Error(t(198));ks||(ks=!0,hn=U)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function jo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fl(n){if(An(n)!==n)throw Error(t(188))}function pl(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return fl(d),n;if(f===c)return fl(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=f;break}if(A===c){v=!0,c=d,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,c=d;break}if(A===c){v=!0,c=f,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ml(n){return n=pl(n),n!==null?Mi(n):null}function Mi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Mi(n);if(i!==null)return i;n=n.sibling}return null}var $o=e.unstable_scheduleCallback,Ps=e.unstable_cancelCallback,Li=e.unstable_shouldYield,mr=e.unstable_requestPaint,Ge=e.unstable_now,Dc=e.unstable_getCurrentPriorityLevel,Ns=e.unstable_ImmediatePriority,Ho=e.unstable_UserBlockingPriority,Fi=e.unstable_NormalPriority,qo=e.unstable_LowPriority,Ds=e.unstable_IdlePriority,Ui=null,Zt=null;function gl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:zi,zn=Math.log,dn=Math.LN2;function zi(n){return n>>>=0,n===0?32:31-(zn(n)/dn|0)|0}var Bn=64,Gr=4194304;function ze(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=ze(A):(f&=v,f!==0&&(c=ze(f)))}else v=a&~d,v!==0?c=ze(v):f!==0&&(c=ze(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-en(i),d=1<<a,c|=n[a],i&=~d;return c}function Bi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ji(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-en(f),A=1<<v,P=d[v];P===-1?((A&a)===0||(A&c)!==0)&&(d[v]=Bi(A,i)):P<=i&&(n.expiredLanes|=A),f&=~A}}function Wo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Go(){var n=Bn;return Bn<<=1,(Bn&4194240)===0&&(Bn=64),n}function Ko(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $i(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-en(i),n[i]=a}function Vc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Qo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Oe=0;function jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yo,Vs,Xo,Jo,Zo,$n=!1,bs=[],Hn=null,qn=null,Ct=null,Hi=new Map,yr=new Map,tn=[],yl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kr(n,i){switch(n){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":Hi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(i.pointerId)}}function Cn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&Vs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function _l(n,i,a,c,d){switch(i){case"focusin":return Hn=Cn(Hn,n,i,a,c,d),!0;case"dragenter":return qn=Cn(qn,n,i,a,c,d),!0;case"mouseover":return Ct=Cn(Ct,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Hi.set(f,Cn(Hi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,yr.set(f,Cn(yr.get(f)||null,n,i,a,c,d)),!0}return!1}function xs(n){var i=Ki(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=jo(a),i!==null){n.blockedOn=i,Zo(n.priority,function(){Xo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Os(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);jr=c,a.target.dispatchEvent(c),jr=null}else return i=fa(a),i!==null&&Vs(i),n.blockedOn=a,!1;i.shift()}return!0}function vl(n,i,a){qe(n)&&a.delete(i)}function bc(){$n=!1,Hn!==null&&qe(Hn)&&(Hn=null),qn!==null&&qe(qn)&&(qn=null),Ct!==null&&qe(Ct)&&(Ct=null),Hi.forEach(vl),yr.forEach(vl)}function Qr(n,i){n.blockedOn===i&&(n.blockedOn=null,$n||($n=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bc)))}function Yr(n){function i(d){return Qr(d,n)}if(0<bs.length){Qr(bs[0],n);for(var a=1;a<bs.length;a++){var c=bs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Hn!==null&&Qr(Hn,n),qn!==null&&Qr(qn,n),Ct!==null&&Qr(Ct,n),Hi.forEach(i),yr.forEach(i),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)xs(a),a.blockedOn===null&&tn.shift()}var _r=Te.ReactCurrentBatchConfig,vr=!0;function Wn(n,i,a,c){var d=Oe,f=_r.transition;_r.transition=null;try{Oe=1,ea(n,i,a,c)}finally{Oe=d,_r.transition=f}}function El(n,i,a,c){var d=Oe,f=_r.transition;_r.transition=null;try{Oe=4,ea(n,i,a,c)}finally{Oe=d,_r.transition=f}}function ea(n,i,a,c){if(vr){var d=Os(n,i,a,c);if(d===null)Hc(n,i,c,Gn,a),Kr(n,c);else if(_l(d,n,i,a,c))c.stopPropagation();else if(Kr(n,c),i&4&&-1<yl.indexOf(n)){for(;d!==null;){var f=fa(d);if(f!==null&&Yo(f),f=Os(n,i,a,c),f===null&&Hc(n,i,c,Gn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Hc(n,i,c,null,a)}}var Gn=null;function Os(n,i,a,c){if(Gn=null,n=Rs(c),n=Ki(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=jo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Gn=n,null}function Ms(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dc()){case Ns:return 1;case Ho:return 4;case Fi:case qo:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var nn=null,Ls=null,Er=null;function wl(){if(Er)return Er;var n,i=Ls,a=i.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return Er=d.slice(n,1<c?1-c:void 0)}function qi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function ta(){return!1}function bt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Kn:ta,this.isPropagationStopped=ta,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),i}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=bt(Qn),Xr=j({},Qn,{view:0,detail:0}),Fs=bt(Xr),Us,zs,rn,Gi=j({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Us=n.screenX-rn.screenX,zs=n.screenY-rn.screenY):zs=Us=0,rn=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:zs}}),na=bt(Gi),Tl=j({},Gi,{dataTransfer:0}),Il=bt(Tl),Bs=j({},Xr,{relatedTarget:0}),Rt=bt(Bs),Sl=j({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Al=bt(Sl),Jr=j({},Qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=bt(Jr),p=j({},Qn,{data:0}),y=bt(p),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B[n])?!!i[n]:!1}function Ie(){return te}var at=j({},Xr,{key:function(n){if(n.key){var i=T[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=qi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?qi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),He=bt(at),ft=j({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=bt(ft),wr=j({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),Yn=bt(wr),Xn=j({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),js=bt(Xn),ra=j({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),HE=bt(ra),qE=[9,13,27,32],xc=m&&"CompositionEvent"in window,ia=null;m&&"documentMode"in document&&(ia=document.documentMode);var WE=m&&"TextEvent"in window&&!ia,Kf=m&&(!xc||ia&&8<ia&&11>=ia),Qf=" ",Yf=!1;function Xf(n,i){switch(n){case"keyup":return qE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function GE(n,i){switch(n){case"compositionend":return Jf(i);case"keypress":return i.which!==32?null:(Yf=!0,Qf);case"textInput":return n=i.data,n===Qf&&Yf?null:n;default:return null}}function KE(n,i){if($s)return n==="compositionend"||!xc&&Xf(n,i)?(n=wl(),Er=Ls=nn=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kf&&i.locale!=="ko"?null:i.data;default:return null}}var QE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!QE[n.type]:i==="textarea"}function ep(n,i,a,c){$r(c),i=Nl(i,"onChange"),0<i.length&&(a=new Wi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function YE(n){_p(n,0)}function Cl(n){var i=Ks(n);if(xo(i))return n}function XE(n,i){if(n==="change")return i}var tp=!1;if(m){var Oc;if(m){var Mc="oninput"in document;if(!Mc){var np=document.createElement("div");np.setAttribute("oninput","return;"),Mc=typeof np.oninput=="function"}Oc=Mc}else Oc=!1;tp=Oc&&(!document.documentMode||9<document.documentMode)}function rp(){sa&&(sa.detachEvent("onpropertychange",ip),oa=sa=null)}function ip(n){if(n.propertyName==="value"&&Cl(oa)){var i=[];ep(i,oa,n,Rs(n)),ul(YE,i)}}function JE(n,i,a){n==="focusin"?(rp(),sa=i,oa=a,sa.attachEvent("onpropertychange",ip)):n==="focusout"&&rp()}function ZE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Cl(oa)}function ew(n,i){if(n==="click")return Cl(i)}function tw(n,i){if(n==="input"||n==="change")return Cl(i)}function nw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Rn=typeof Object.is=="function"?Object.is:nw;function aa(n,i){if(Rn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Rn(n[d],i[d]))return!1}return!0}function sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function op(n,i){var a=sp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function ap(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ap(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function lp(){for(var n=window,i=Lr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lr(n.document)}return i}function Lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rw(n){var i=lp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=op(a,f);var v=op(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iw=m&&"documentMode"in document&&11>=document.documentMode,Hs=null,Fc=null,la=null,Uc=!1;function up(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Hs==null||Hs!==Lr(c)||(c=Hs,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Nl(Fc,"onSelect"),0<c.length&&(i=new Wi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Hs)))}function Rl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},zc={},cp={};m&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function kl(n){if(zc[n])return zc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return zc[n]=i[a];return n}var hp=kl("animationend"),dp=kl("animationiteration"),fp=kl("animationstart"),pp=kl("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,i){mp.set(n,i),l(i,[n])}for(var Bc=0;Bc<gp.length;Bc++){var jc=gp[Bc],sw=jc.toLowerCase(),ow=jc[0].toUpperCase()+jc.slice(1);Zr(sw,"on"+ow)}Zr(hp,"onAnimationEnd"),Zr(dp,"onAnimationIteration"),Zr(fp,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(pp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function yp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Bo(c,i,void 0,n),n.currentTarget=null}function _p(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var A=c[v],P=A.instance,U=A.currentTarget;if(A=A.listener,P!==f&&d.isPropagationStopped())break e;yp(d,A,U),f=P}else for(v=0;v<c.length;v++){if(A=c[v],P=A.instance,U=A.currentTarget,A=A.listener,P!==f&&d.isPropagationStopped())break e;yp(d,A,U),f=P}}}if(ks)throw n=hn,ks=!1,hn=null,n}function Ke(n,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var c=n+"__bubble";a.has(c)||(vp(i,n,2,!1),a.add(c))}function $c(n,i,a){var c=0;i&&(c|=4),vp(a,n,c,i)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Pl]){n[Pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(aw.has(a)||$c(a,!1,n),$c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Pl]||(i[Pl]=!0,$c("selectionchange",!1,i))}}function vp(n,i,a,c){switch(Ms(i)){case 1:var d=Wn;break;case 4:d=El;break;default:d=ea}a=d.bind(null,i,a,n),d=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Hc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;A!==null;){if(v=Ki(A),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}A=A.parentNode}}c=c.return}ul(function(){var U=f,K=Rs(a),X=[];e:{var G=mp.get(n);if(G!==void 0){var ne=Wi,se=n;switch(n){case"keypress":if(qi(a)===0)break e;case"keydown":case"keyup":ne=He;break;case"focusin":se="focus",ne=Rt;break;case"focusout":se="blur",ne=Rt;break;case"beforeblur":case"afterblur":ne=Rt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Yn;break;case hp:case dp:case fp:ne=Al;break;case pp:ne=js;break;case"scroll":ne=Fs;break;case"wheel":ne=HE;break;case"copy":case"cut":case"paste":ne=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=sn}var oe=(i&4)!==0,lt=!oe&&n==="scroll",M=oe?G!==null?G+"Capture":null:G;oe=[];for(var b=U,F;b!==null;){F=b;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,M!==null&&(J=Oi(b,M),J!=null&&oe.push(ha(b,J,F)))),lt)break;b=b.return}0<oe.length&&(G=new ne(G,se,null,a,K),X.push({event:G,listeners:oe}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==jr&&(se=a.relatedTarget||a.fromElement)&&(Ki(se)||se[Tr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(se=a.relatedTarget||a.toElement,ne=U,se=se?Ki(se):null,se!==null&&(lt=An(se),se!==lt||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=U),ne!==se)){if(oe=na,J="onMouseLeave",M="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(oe=sn,J="onPointerLeave",M="onPointerEnter",b="pointer"),lt=ne==null?G:Ks(ne),F=se==null?G:Ks(se),G=new oe(J,b+"leave",ne,a,K),G.target=lt,G.relatedTarget=F,J=null,Ki(K)===U&&(oe=new oe(M,b+"enter",se,a,K),oe.target=F,oe.relatedTarget=lt,J=oe),lt=J,ne&&se)t:{for(oe=ne,M=se,b=0,F=oe;F;F=Ws(F))b++;for(F=0,J=M;J;J=Ws(J))F++;for(;0<b-F;)oe=Ws(oe),b--;for(;0<F-b;)M=Ws(M),F--;for(;b--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Ws(oe),M=Ws(M)}oe=null}else oe=null;ne!==null&&Ep(X,G,ne,oe,!1),se!==null&&lt!==null&&Ep(X,lt,se,oe,!0)}}e:{if(G=U?Ks(U):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var le=XE;else if(Zf(G))if(tp)le=tw;else{le=ZE;var ge=JE}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=ew);if(le&&(le=le(n,U))){ep(X,le,a,K);break e}ge&&ge(n,G,U),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&dt(G,"number",G.value)}switch(ge=U?Ks(U):window,n){case"focusin":(Zf(ge)||ge.contentEditable==="true")&&(Hs=ge,Fc=U,la=null);break;case"focusout":la=Fc=Hs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,up(X,a,K);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":up(X,a,K)}var ye;if(xc)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else $s?Xf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Kf&&a.locale!=="ko"&&($s||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&$s&&(ye=wl()):(nn=K,Ls="value"in nn?nn.value:nn.textContent,$s=!0)),ge=Nl(U,ve),0<ge.length&&(ve=new y(ve,n,null,a,K),X.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=Jf(a),ye!==null&&(ve.data=ye)))),(ye=WE?GE(n,a):KE(n,a))&&(U=Nl(U,"onBeforeInput"),0<U.length&&(K=new y("onBeforeInput","beforeinput",null,a,K),X.push({event:K,listeners:U}),K.data=ye))}_p(X,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Nl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Oi(n,a),f!=null&&c.unshift(ha(n,f,d)),f=Oi(n,i),f!=null&&c.push(ha(n,f,d))),n=n.return}return c}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ep(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var A=a,P=A.alternate,U=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&U!==null&&(A=U,d?(P=Oi(a,f),P!=null&&v.unshift(ha(a,P,A))):d||(P=Oi(a,f),P!=null&&v.push(ha(a,P,A)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var lw=/\r\n?/g,uw=/\u0000|\uFFFD/g;function wp(n){return(typeof n=="string"?n:""+n).replace(lw,`
`).replace(uw,"")}function Dl(n,i,a){if(i=wp(i),wp(n)!==i&&a)throw Error(t(425))}function Vl(){}var qc=null,Wc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,hw=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(n){return Tp.resolve(null).then(n).catch(dw)}:Kc;function dw(n){setTimeout(function(){throw n})}function Qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Yr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Yr(i)}function ei(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ip(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Gs,da="__reactProps$"+Gs,Tr="__reactContainer$"+Gs,Yc="__reactEvents$"+Gs,fw="__reactListeners$"+Gs,pw="__reactHandles$"+Gs;function Ki(n){var i=n[Jn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Tr]||a[Jn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ip(n);n!==null;){if(a=n[Jn])return a;n=Ip(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Jn]||n[Tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function bl(n){return n[da]||null}var Xc=[],Qs=-1;function ti(n){return{current:n}}function Qe(n){0>Qs||(n.current=Xc[Qs],Xc[Qs]=null,Qs--)}function We(n,i){Qs++,Xc[Qs]=n.current,n.current=i}var ni={},xt=ti(ni),qt=ti(!1),Qi=ni;function Ys(n,i){var a=n.type.contextTypes;if(!a)return ni;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function xl(){Qe(qt),Qe(xt)}function Sp(n,i,a){if(xt.current!==ni)throw Error(t(168));We(xt,i),We(qt,a)}function Ap(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return j({},a,c)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ni,Qi=xt.current,We(xt,n),We(qt,qt.current),!0}function Cp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ap(n,i,Qi),c.__reactInternalMemoizedMergedChildContext=n,Qe(qt),Qe(xt),We(xt,n)):Qe(qt),We(qt,a)}var Ir=null,Ml=!1,Jc=!1;function Rp(n){Ir===null?Ir=[n]:Ir.push(n)}function mw(n){Ml=!0,Rp(n)}function ri(){if(!Jc&&Ir!==null){Jc=!0;var n=0,i=Oe;try{var a=Ir;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ir=null,Ml=!1}catch(d){throw Ir!==null&&(Ir=Ir.slice(n+1)),$o(Ns,ri),d}finally{Oe=i,Jc=!1}}return null}var Xs=[],Js=0,Ll=null,Fl=0,fn=[],pn=0,Yi=null,Sr=1,Ar="";function Xi(n,i){Xs[Js++]=Fl,Xs[Js++]=Ll,Ll=n,Fl=i}function kp(n,i,a){fn[pn++]=Sr,fn[pn++]=Ar,fn[pn++]=Yi,Yi=n;var c=Sr;n=Ar;var d=32-en(c)-1;c&=~(1<<d),a+=1;var f=32-en(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Sr=1<<32-en(i)+d|a<<d|c,Ar=f+n}else Sr=1<<f|a<<d|c,Ar=n}function Zc(n){n.return!==null&&(Xi(n,1),kp(n,1,0))}function eh(n){for(;n===Ll;)Ll=Xs[--Js],Xs[Js]=null,Fl=Xs[--Js],Xs[Js]=null;for(;n===Yi;)Yi=fn[--pn],fn[pn]=null,Ar=fn[--pn],fn[pn]=null,Sr=fn[--pn],fn[pn]=null}var on=null,an=null,Je=!1,kn=null;function Pp(n,i){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=ei(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Yi!==null?{id:Sr,overflow:Ar}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function th(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nh(n){if(Je){var i=an;if(i){var a=i;if(!Np(n,i)){if(th(n))throw Error(t(418));i=ei(a.nextSibling);var c=on;i&&Np(n,i)?Pp(c,a):(n.flags=n.flags&-4097|2,Je=!1,on=n)}}else{if(th(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,on=n}}}function Dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Ul(n){if(n!==on)return!1;if(!Je)return Dp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=an)){if(th(n))throw Vp(),Error(t(418));for(;i;)Pp(n,i),i=ei(i.nextSibling)}if(Dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=ei(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?ei(n.stateNode.nextSibling):null;return!0}function Vp(){for(var n=an;n;)n=ei(n.nextSibling)}function Zs(){an=on=null,Je=!1}function rh(n){kn===null?kn=[n]:kn.push(n)}var gw=Te.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var A=d.refs;v===null?delete A[f]:A[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function bp(n){var i=n._init;return i(n._payload)}function xp(n){function i(M,b){if(n){var F=M.deletions;F===null?(M.deletions=[b],M.flags|=16):F.push(b)}}function a(M,b){if(!n)return null;for(;b!==null;)i(M,b),b=b.sibling;return null}function c(M,b){for(M=new Map;b!==null;)b.key!==null?M.set(b.key,b):M.set(b.index,b),b=b.sibling;return M}function d(M,b){return M=hi(M,b),M.index=0,M.sibling=null,M}function f(M,b,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<b?(M.flags|=2,b):F):(M.flags|=2,b)):(M.flags|=1048576,b)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,b,F,J){return b===null||b.tag!==6?(b=Kh(F,M.mode,J),b.return=M,b):(b=d(b,F),b.return=M,b)}function P(M,b,F,J){var le=F.type;return le===D?K(M,b,F.props.children,J,F.key):b!==null&&(b.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ht&&bp(le)===b.type)?(J=d(b,F.props),J.ref=pa(M,b,F),J.return=M,J):(J=cu(F.type,F.key,F.props,null,M.mode,J),J.ref=pa(M,b,F),J.return=M,J)}function U(M,b,F,J){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=Qh(F,M.mode,J),b.return=M,b):(b=d(b,F.children||[]),b.return=M,b)}function K(M,b,F,J,le){return b===null||b.tag!==7?(b=ss(F,M.mode,J,le),b.return=M,b):(b=d(b,F),b.return=M,b)}function X(M,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Kh(""+b,M.mode,F),b.return=M,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case he:return F=cu(b.type,b.key,b.props,null,M.mode,F),F.ref=pa(M,null,b),F.return=M,F;case Ce:return b=Qh(b,M.mode,F),b.return=M,b;case ht:var J=b._init;return X(M,J(b._payload),F)}if(ot(b)||Z(b))return b=ss(b,M.mode,F,null),b.return=M,b;zl(M,b)}return null}function G(M,b,F,J){var le=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:A(M,b,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case he:return F.key===le?P(M,b,F,J):null;case Ce:return F.key===le?U(M,b,F,J):null;case ht:return le=F._init,G(M,b,le(F._payload),J)}if(ot(F)||Z(F))return le!==null?null:K(M,b,F,J,null);zl(M,F)}return null}function ne(M,b,F,J,le){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(F)||null,A(b,M,""+J,le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case he:return M=M.get(J.key===null?F:J.key)||null,P(b,M,J,le);case Ce:return M=M.get(J.key===null?F:J.key)||null,U(b,M,J,le);case ht:var ge=J._init;return ne(M,b,F,ge(J._payload),le)}if(ot(J)||Z(J))return M=M.get(F)||null,K(b,M,J,le,null);zl(b,J)}return null}function se(M,b,F,J){for(var le=null,ge=null,ye=b,ve=b=0,St=null;ye!==null&&ve<F.length;ve++){ye.index>ve?(St=ye,ye=null):St=ye.sibling;var Fe=G(M,ye,F[ve],J);if(Fe===null){ye===null&&(ye=St);break}n&&ye&&Fe.alternate===null&&i(M,ye),b=f(Fe,b,ve),ge===null?le=Fe:ge.sibling=Fe,ge=Fe,ye=St}if(ve===F.length)return a(M,ye),Je&&Xi(M,ve),le;if(ye===null){for(;ve<F.length;ve++)ye=X(M,F[ve],J),ye!==null&&(b=f(ye,b,ve),ge===null?le=ye:ge.sibling=ye,ge=ye);return Je&&Xi(M,ve),le}for(ye=c(M,ye);ve<F.length;ve++)St=ne(ye,M,ve,F[ve],J),St!==null&&(n&&St.alternate!==null&&ye.delete(St.key===null?ve:St.key),b=f(St,b,ve),ge===null?le=St:ge.sibling=St,ge=St);return n&&ye.forEach(function(di){return i(M,di)}),Je&&Xi(M,ve),le}function oe(M,b,F,J){var le=Z(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var ge=le=null,ye=b,ve=b=0,St=null,Fe=F.next();ye!==null&&!Fe.done;ve++,Fe=F.next()){ye.index>ve?(St=ye,ye=null):St=ye.sibling;var di=G(M,ye,Fe.value,J);if(di===null){ye===null&&(ye=St);break}n&&ye&&di.alternate===null&&i(M,ye),b=f(di,b,ve),ge===null?le=di:ge.sibling=di,ge=di,ye=St}if(Fe.done)return a(M,ye),Je&&Xi(M,ve),le;if(ye===null){for(;!Fe.done;ve++,Fe=F.next())Fe=X(M,Fe.value,J),Fe!==null&&(b=f(Fe,b,ve),ge===null?le=Fe:ge.sibling=Fe,ge=Fe);return Je&&Xi(M,ve),le}for(ye=c(M,ye);!Fe.done;ve++,Fe=F.next())Fe=ne(ye,M,ve,Fe.value,J),Fe!==null&&(n&&Fe.alternate!==null&&ye.delete(Fe.key===null?ve:Fe.key),b=f(Fe,b,ve),ge===null?le=Fe:ge.sibling=Fe,ge=Fe);return n&&ye.forEach(function(Qw){return i(M,Qw)}),Je&&Xi(M,ve),le}function lt(M,b,F,J){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case he:e:{for(var le=F.key,ge=b;ge!==null;){if(ge.key===le){if(le=F.type,le===D){if(ge.tag===7){a(M,ge.sibling),b=d(ge,F.props.children),b.return=M,M=b;break e}}else if(ge.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ht&&bp(le)===ge.type){a(M,ge.sibling),b=d(ge,F.props),b.ref=pa(M,ge,F),b.return=M,M=b;break e}a(M,ge);break}else i(M,ge);ge=ge.sibling}F.type===D?(b=ss(F.props.children,M.mode,J,F.key),b.return=M,M=b):(J=cu(F.type,F.key,F.props,null,M.mode,J),J.ref=pa(M,b,F),J.return=M,M=J)}return v(M);case Ce:e:{for(ge=F.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(M,b.sibling),b=d(b,F.children||[]),b.return=M,M=b;break e}else{a(M,b);break}else i(M,b);b=b.sibling}b=Qh(F,M.mode,J),b.return=M,M=b}return v(M);case ht:return ge=F._init,lt(M,b,ge(F._payload),J)}if(ot(F))return se(M,b,F,J);if(Z(F))return oe(M,b,F,J);zl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(M,b.sibling),b=d(b,F),b.return=M,M=b):(a(M,b),b=Kh(F,M.mode,J),b.return=M,M=b),v(M)):a(M,b)}return lt}var eo=xp(!0),Op=xp(!1),Bl=ti(null),jl=null,to=null,ih=null;function sh(){ih=to=jl=null}function oh(n){var i=Bl.current;Qe(Bl),n._currentValue=i}function ah(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function no(n,i){jl=n,ih=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function mn(n){var i=n._currentValue;if(ih!==n)if(n={context:n,memoizedValue:i,next:null},to===null){if(jl===null)throw Error(t(308));to=n,jl.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return i}var Ji=null;function lh(n){Ji===null?Ji=[n]:Ji.push(n)}function Mp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,lh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Cr(n,c)}function Cr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ii=!1;function uh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function si(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Cr(n,a)}return d=c.interleaved,d===null?(i.next=i,lh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Cr(n,a)}function $l(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qo(n,a)}}function Fp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Hl(n,i,a,c){var d=n.updateQueue;ii=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,U=P.next;P.next=null,v===null?f=U:v.next=U,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,A=K.lastBaseUpdate,A!==v&&(A===null?K.firstBaseUpdate=U:A.next=U,K.lastBaseUpdate=P))}if(f!==null){var X=d.baseState;v=0,K=U=P=null,A=f;do{var G=A.lane,ne=A.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var se=n,oe=A;switch(G=i,ne=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){X=se.call(ne,X,G);break e}X=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,G=typeof se=="function"?se.call(ne,X,G):se,G==null)break e;X=j({},X,G);break e;case 2:ii=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[A]:G.push(A))}else ne={eventTime:ne,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},K===null?(U=K=ne,P=X):K=K.next=ne,v|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;G=A,A=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=X),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);ts|=v,n.lanes=v,n.memoizedState=X}}function Up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Zn=ti(ma),ga=ti(ma),ya=ti(ma);function Zi(n){if(n===ma)throw Error(t(174));return n}function ch(n,i){switch(We(ya,i),We(ga,n),We(Zn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ss(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ss(i,n)}Qe(Zn),We(Zn,i)}function ro(){Qe(Zn),Qe(ga),Qe(ya)}function zp(n){Zi(ya.current);var i=Zi(Zn.current),a=Ss(i,n.type);i!==a&&(We(ga,n),We(Zn,a))}function hh(n){ga.current===n&&(Qe(Zn),Qe(ga))}var et=ti(0);function ql(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var dh=[];function fh(){for(var n=0;n<dh.length;n++)dh[n]._workInProgressVersionPrimary=null;dh.length=0}var Wl=Te.ReactCurrentDispatcher,ph=Te.ReactCurrentBatchConfig,es=0,tt=null,_t=null,Tt=null,Gl=!1,_a=!1,va=0,yw=0;function Ot(){throw Error(t(321))}function mh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Rn(n[a],i[a]))return!1;return!0}function gh(n,i,a,c,d,f){if(es=f,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wl.current=n===null||n.memoizedState===null?ww:Tw,n=a(c,d),_a){f=0;do{if(_a=!1,va=0,25<=f)throw Error(t(301));f+=1,Tt=_t=null,i.updateQueue=null,Wl.current=Iw,n=a(c,d)}while(_a)}if(Wl.current=Yl,i=_t!==null&&_t.next!==null,es=0,Tt=_t=tt=null,Gl=!1,i)throw Error(t(300));return n}function yh(){var n=va!==0;return va=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function gn(){if(_t===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var i=Tt===null?tt.memoizedState:Tt.next;if(i!==null)Tt=i,_t=n;else{if(n===null)throw Error(t(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?tt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Ea(n,i){return typeof i=="function"?i(n):i}function _h(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=_t,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var A=v=null,P=null,U=f;do{var K=U.lane;if((es&K)===K)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(A=P=X,v=c):P=P.next=X,tt.lanes|=K,ts|=K}U=U.next}while(U!==null&&U!==f);P===null?v=c:P.next=A,Rn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,tt.lanes|=f,ts|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function vh(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Rn(f,i.memoizedState)||(Gt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Bp(){}function jp(n,i){var a=tt,c=gn(),d=i(),f=!Rn(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,Eh(qp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,wa(9,Hp.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(es&30)!==0||$p(a,i,d)}return d}function $p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Hp(n,i,a,c){i.value=a,i.getSnapshot=c,Wp(i)&&Gp(n)}function qp(n,i,a){return a(function(){Wp(i)&&Gp(n)})}function Wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Rn(n,a)}catch{return!0}}function Gp(n){var i=Cr(n,1);i!==null&&Vn(i,n,1,-1)}function Kp(n){var i=er();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i.queue=n,n=n.dispatch=Ew.bind(null,tt,n),[i.memoizedState,n]}function wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Qp(){return gn().memoizedState}function Kl(n,i,a,c){var d=er();tt.flags|=n,d.memoizedState=wa(1|i,a,void 0,c===void 0?null:c)}function Ql(n,i,a,c){var d=gn();c=c===void 0?null:c;var f=void 0;if(_t!==null){var v=_t.memoizedState;if(f=v.destroy,c!==null&&mh(c,v.deps)){d.memoizedState=wa(i,a,f,c);return}}tt.flags|=n,d.memoizedState=wa(1|i,a,f,c)}function Yp(n,i){return Kl(8390656,8,n,i)}function Eh(n,i){return Ql(2048,8,n,i)}function Xp(n,i){return Ql(4,2,n,i)}function Jp(n,i){return Ql(4,4,n,i)}function Zp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function em(n,i,a){return a=a!=null?a.concat([n]):null,Ql(4,4,Zp.bind(null,i,n),a)}function wh(){}function tm(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function nm(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function rm(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Rn(a,i)||(a=Go(),tt.lanes|=a,ts|=a,n.baseState=!0),i)}function _w(n,i){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=ph.transition;ph.transition={};try{n(!1),i()}finally{Oe=a,ph.transition=c}}function im(){return gn().memoizedState}function vw(n,i,a){var c=ui(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},sm(n))om(i,a);else if(a=Mp(n,i,a,c),a!==null){var d=$t();Vn(a,n,c,d),am(a,i,c)}}function Ew(n,i,a){var c=ui(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(sm(n))om(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,A=f(v,a);if(d.hasEagerState=!0,d.eagerState=A,Rn(A,v)){var P=i.interleaved;P===null?(d.next=d,lh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Mp(n,i,d,c),a!==null&&(d=$t(),Vn(a,n,c,d),am(a,i,c))}}function sm(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function om(n,i){_a=Gl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function am(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qo(n,a)}}var Yl={readContext:mn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},ww={readContext:mn,useCallback:function(n,i){return er().memoizedState=[n,i===void 0?null:i],n},useContext:mn,useEffect:Yp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Kl(4194308,4,Zp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Kl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Kl(4,2,n,i)},useMemo:function(n,i){var a=er();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=er();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=vw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=er();return n={current:n},i.memoizedState=n},useState:Kp,useDebugValue:wh,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Kp(!1),i=n[0];return n=_w.bind(null,n[1]),er().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,d=er();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(es&30)!==0||$p(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Yp(qp.bind(null,c,f,n),[n]),c.flags|=2048,wa(9,Hp.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=er(),i=It.identifierPrefix;if(Je){var a=Ar,c=Sr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Tw={readContext:mn,useCallback:tm,useContext:mn,useEffect:Eh,useImperativeHandle:em,useInsertionEffect:Xp,useLayoutEffect:Jp,useMemo:nm,useReducer:_h,useRef:Qp,useState:function(){return _h(Ea)},useDebugValue:wh,useDeferredValue:function(n){var i=gn();return rm(i,_t.memoizedState,n)},useTransition:function(){var n=_h(Ea)[0],i=gn().memoizedState;return[n,i]},useMutableSource:Bp,useSyncExternalStore:jp,useId:im,unstable_isNewReconciler:!1},Iw={readContext:mn,useCallback:tm,useContext:mn,useEffect:Eh,useImperativeHandle:em,useInsertionEffect:Xp,useLayoutEffect:Jp,useMemo:nm,useReducer:vh,useRef:Qp,useState:function(){return vh(Ea)},useDebugValue:wh,useDeferredValue:function(n){var i=gn();return _t===null?i.memoizedState=n:rm(i,_t.memoizedState,n)},useTransition:function(){var n=vh(Ea)[0],i=gn().memoizedState;return[n,i]},useMutableSource:Bp,useSyncExternalStore:jp,useId:im,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Th(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:j({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),d=ui(n),f=Rr(c,d);f.payload=i,a!=null&&(f.callback=a),i=si(n,f,d),i!==null&&(Vn(i,n,d,c),$l(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),d=ui(n),f=Rr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=si(n,f,d),i!==null&&(Vn(i,n,d,c),$l(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=ui(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=si(n,d,c),i!==null&&(Vn(i,n,c,a),$l(i,n,c))}};function lm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,f):!0}function um(n,i,a){var c=!1,d=ni,f=i.contextType;return typeof f=="object"&&f!==null?f=mn(f):(d=Wt(i)?Qi:xt.current,c=i.contextTypes,f=(c=c!=null)?Ys(n,d):ni),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function cm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Xl.enqueueReplaceState(i,i.state,null)}function Ih(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},uh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=mn(f):(f=Wt(i)?Qi:xt.current,d.context=Ys(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Th(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xl.enqueueReplaceState(d,d.state,null),Hl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Sh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ah(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Sw=typeof WeakMap=="function"?WeakMap:Map;function hm(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){iu||(iu=!0,zh=c),Ah(n,i)},a}function dm(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ah(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Ah(n,i),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function fm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Sw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Fw.bind(null,n,i,a),i.then(n,n))}function pm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function mm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,si(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Aw=Te.ReactCurrentOwner,Gt=!1;function jt(n,i,a,c){i.child=n===null?Op(i,null,a,c):eo(i,n.child,a,c)}function gm(n,i,a,c,d){a=a.render;var f=i.ref;return no(i,d),c=gh(n,i,a,c,f,d),a=yh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,kr(n,i,d)):(Je&&a&&Zc(i),i.flags|=1,jt(n,i,c,d),i.child)}function ym(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Gh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,_m(n,i,f,c,d)):(n=cu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===i.ref)return kr(n,i,d)}return i.flags|=1,n=hi(f,c),n.ref=i.ref,n.return=i,i.child=n}function _m(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(aa(f,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,kr(n,i,d)}return Ch(n,i,a,c,d)}function vm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(oo,ln),ln|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(oo,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,We(oo,ln),ln|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,We(oo,ln),ln|=c;return jt(n,i,d,a),i.child}function Em(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ch(n,i,a,c,d){var f=Wt(a)?Qi:xt.current;return f=Ys(i,f),no(i,d),a=gh(n,i,a,c,f,d),c=yh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,kr(n,i,d)):(Je&&c&&Zc(i),i.flags|=1,jt(n,i,a,d),i.child)}function wm(n,i,a,c,d){if(Wt(a)){var f=!0;Ol(i)}else f=!1;if(no(i,d),i.stateNode===null)Zl(n,i),um(i,a,c),Ih(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,A=i.memoizedProps;v.props=A;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=mn(U):(U=Wt(a)?Qi:xt.current,U=Ys(i,U));var K=a.getDerivedStateFromProps,X=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||P!==U)&&cm(i,v,c,U),ii=!1;var G=i.memoizedState;v.state=G,Hl(i,c,v,d),P=i.memoizedState,A!==c||G!==P||qt.current||ii?(typeof K=="function"&&(Th(i,a,K,c),P=i.memoizedState),(A=ii||lm(i,a,A,c,G,P,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=U,c=A):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Lp(n,i),A=i.memoizedProps,U=i.type===i.elementType?A:Pn(i.type,A),v.props=U,X=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=Wt(a)?Qi:xt.current,P=Ys(i,P));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==X||G!==P)&&cm(i,v,c,P),ii=!1,G=i.memoizedState,v.state=G,Hl(i,c,v,d);var se=i.memoizedState;A!==X||G!==se||qt.current||ii?(typeof ne=="function"&&(Th(i,a,ne,c),se=i.memoizedState),(U=ii||lm(i,a,U,c,G,se,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Rh(n,i,a,c,f,d)}function Rh(n,i,a,c,d,f){Em(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Cp(i,a,!1),kr(n,i,f);c=i.stateNode,Aw.current=i;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=eo(i,n.child,null,f),i.child=eo(i,null,A,f)):jt(n,i,A,f),i.memoizedState=c.state,d&&Cp(i,a,!0),i.child}function Tm(n){var i=n.stateNode;i.pendingContext?Sp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Sp(n,i.context,!1),ch(n,i.containerInfo)}function Im(n,i,a,c,d){return Zs(),rh(d),i.flags|=256,jt(n,i,a,c),i.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sm(n,i,a){var c=i.pendingProps,d=et.current,f=!1,v=(i.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(et,d&1),n===null)return nh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=hu(v,c,0,null),n=ss(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Ph(a),i.memoizedState=kh,n):Nh(i,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return Cw(n,i,v,c,A,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=hi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?f=hi(A,f):(f=ss(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=kh,c}return f=n.child,n=f.sibling,c=hi(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Nh(n,i){return i=hu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jl(n,i,a,c){return c!==null&&rh(c),eo(i,n.child,null,a),n=Nh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Cw(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Sh(Error(t(422))),Jl(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=hu({mode:"visible",children:c.children},d,0,null),f=ss(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&eo(i,n.child,null,v),i.child.memoizedState=Ph(v),i.memoizedState=kh,f);if((i.mode&1)===0)return Jl(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,f=Error(t(419)),c=Sh(f,c,void 0),Jl(n,i,v,c)}if(A=(v&n.childLanes)!==0,Gt||A){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Cr(n,d),Vn(c,n,d,-1))}return Wh(),c=Sh(Error(t(421))),Jl(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Uw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,an=ei(d.nextSibling),on=i,Je=!0,kn=null,n!==null&&(fn[pn++]=Sr,fn[pn++]=Ar,fn[pn++]=Yi,Sr=n.id,Ar=n.overflow,Yi=i),i=Nh(i,c.children),i.flags|=4096,i)}function Am(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ah(n.return,i,a)}function Dh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Cm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(jt(n,i,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Am(n,a,i);else if(n.tag===19)Am(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ql(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Dh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ql(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Dh(i,!0,a,null,f);break;case"together":Dh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function kr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Rw(n,i,a){switch(i.tag){case 3:Tm(i),Zs();break;case 5:zp(i);break;case 1:Wt(i.type)&&Ol(i);break;case 4:ch(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(et,et.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Sm(n,i,a):(We(et,et.current&1),n=kr(n,i,a),n!==null?n.sibling:null);We(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Cm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,vm(n,i,a)}return kr(n,i,a)}var Rm,Vh,km,Pm;Rm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Vh=function(){},km=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Zi(Zn.current);var f=null;switch(a){case"input":d=Ts(n,d),c=Ts(n,c),f=[];break;case"select":d=j({},d,{value:void 0}),c=j({},c,{value:void 0}),f=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vl)}Sn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var A=d[U];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(A=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==A&&(P!=null||A!=null))if(U==="style")if(A){for(v in A)!A.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&A[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ke("scroll",n),f||A===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},Pm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function kw(n,i,a){var c=i.pendingProps;switch(eh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Wt(i.type)&&xl(),Mt(i),null;case 3:return c=i.stateNode,ro(),Qe(qt),Qe(xt),fh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kn!==null&&($h(kn),kn=null))),Vh(n,i),Mt(i),null;case 5:hh(i);var d=Zi(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)km(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=Zi(Zn.current),Ul(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Jn]=i,c[da]=f,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)Ke(ua[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":rl(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Lo(c,f),Ke("invalid",c)}Sn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var A=f[v];v==="children"?typeof A=="string"?c.textContent!==A&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ws(c),Oo(c,f,!0);break;case"textarea":ws(c),Fr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Vl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Jn]=i,n[da]=c,Rm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Cs(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)Ke(ua[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":rl(n,c),d=Ts(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=j({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Lo(n,c),d=Mo(n,c),Ke("invalid",n);break;default:d=c}Sn(a,d),A=d;for(f in A)if(A.hasOwnProperty(f)){var P=A[f];f==="style"?As(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&sl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&xi(n,P):typeof P=="number"&&xi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ke("scroll",n):P!=null&&pe(n,f,P,v))}switch(a){case"input":ws(n),Oo(n,c,!1);break;case"textarea":ws(n),Fr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Pe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?In(n,!!c.multiple,f,!1):c.defaultValue!=null&&In(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)Pm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zi(ya.current),Zi(Zn.current),Ul(i)){if(c=i.stateNode,a=i.memoizedProps,c[Jn]=i,(f=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Dl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Dl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Qe(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vp(),Zs(),i.flags|=98560,f=!1;else if(f=Ul(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Jn]=i}else Zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),f=!1}else kn!==null&&($h(kn),kn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(et.current&1)!==0?vt===0&&(vt=3):Wh())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return ro(),Vh(n,i),n===null&&ca(i.stateNode.containerInfo),Mt(i),null;case 10:return oh(i.type._context),Mt(i),null;case 17:return Wt(i.type)&&xl(),Mt(i),null;case 19:if(Qe(et),f=i.memoizedState,f===null)return Mt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Ta(f,!1);else{if(vt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=ql(n),v!==null){for(i.flags|=128,Ta(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(et,et.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ge()>ao&&(i.flags|=128,c=!0,Ta(f,!1),i.lanes=4194304)}else{if(!c)if(n=ql(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Mt(i),null}else 2*Ge()-f.renderingStartTime>ao&&a!==1073741824&&(i.flags|=128,c=!0,Ta(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ge(),i.sibling=null,a=et.current,We(et,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Pw(n,i){switch(eh(i),i.tag){case 1:return Wt(i.type)&&xl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ro(),Qe(qt),Qe(xt),fh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hh(i),null;case 13:if(Qe(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(et),null;case 4:return ro(),null;case 10:return oh(i.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var eu=!1,Lt=!1,Nw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function so(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,i,c)}else a.current=null}function bh(n,i,a){try{a()}catch(c){st(n,i,c)}}var Nm=!1;function Dw(n,i){if(qc=vr,n=lp(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,P=-1,U=0,K=0,X=n,G=null;t:for(;;){for(var ne;X!==a||d!==0&&X.nodeType!==3||(A=v+d),X!==f||c!==0&&X.nodeType!==3||(P=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ne=X.firstChild)!==null;)G=X,X=ne;for(;;){if(X===n)break t;if(G===a&&++U===d&&(A=v),G===f&&++K===c&&(P=v),(ne=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=ne}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wc={focusedElem:n,selectionRange:a},vr=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,lt=se.memoizedState,M=i.stateNode,b=M.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Pn(i.type,oe),lt);M.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){st(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=Nm,Nm=!1,se}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&bh(i,a,f)}d=d.next}while(d!==c)}}function tu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Dm(n){var i=n.alternate;i!==null&&(n.alternate=null,Dm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Jn],delete i[da],delete i[Yc],delete i[fw],delete i[pw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vm(n){return n.tag===5||n.tag===3||n.tag===4}function bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vl));else if(c!==4&&(n=n.child,n!==null))for(Oh(n,i,a),n=n.sibling;n!==null;)Oh(n,i,a),n=n.sibling}function Mh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,i,a),n=n.sibling;n!==null;)Mh(n,i,a),n=n.sibling}var kt=null,Nn=!1;function oi(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Lt||so(a,i);case 6:var c=kt,d=Nn;kt=null,oi(n,i,a),kt=c,Nn=d,kt!==null&&(Nn?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Nn?(n=kt,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),Yr(n)):Qc(kt,a.stateNode));break;case 4:c=kt,d=Nn,kt=a.stateNode.containerInfo,Nn=!0,oi(n,i,a),kt=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&bh(a,i,v),d=d.next}while(d!==c)}oi(n,i,a);break;case 1:if(!Lt&&(so(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){st(a,i,A)}oi(n,i,a);break;case 21:oi(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,oi(n,i,a),Lt=c):oi(n,i,a);break;default:oi(n,i,a)}}function Om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Nw),i.forEach(function(c){var d=zw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Dn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,A=v;e:for(;A!==null;){switch(A.tag){case 5:kt=A.stateNode,Nn=!1;break e;case 3:kt=A.stateNode.containerInfo,Nn=!0;break e;case 4:kt=A.stateNode.containerInfo,Nn=!0;break e}A=A.return}if(kt===null)throw Error(t(160));xm(f,v,d),kt=null,Nn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){st(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mm(i,n),i=i.sibling}function Mm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(i,n),tr(n),c&4){try{Ia(3,n,n.return),tu(3,n)}catch(oe){st(n,n.return,oe)}try{Ia(5,n,n.return)}catch(oe){st(n,n.return,oe)}}break;case 1:Dn(i,n),tr(n),c&512&&a!==null&&so(a,a.return);break;case 5:if(Dn(i,n),tr(n),c&512&&a!==null&&so(a,a.return),n.flags&32){var d=n.stateNode;try{xi(d,"")}catch(oe){st(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,A=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{A==="input"&&f.type==="radio"&&f.name!=null&&Is(d,f),Cs(A,v);var U=Cs(A,f);for(v=0;v<P.length;v+=2){var K=P[v],X=P[v+1];K==="style"?As(d,X):K==="dangerouslySetInnerHTML"?sl(d,X):K==="children"?xi(d,X):pe(d,K,X,U)}switch(A){case"input":bi(d,f);break;case"textarea":il(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ne=f.value;ne!=null?In(d,!!f.multiple,ne,!1):G!==!!f.multiple&&(f.defaultValue!=null?In(d,!!f.multiple,f.defaultValue,!0):In(d,!!f.multiple,f.multiple?[]:"",!1))}d[da]=f}catch(oe){st(n,n.return,oe)}}break;case 6:if(Dn(i,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){st(n,n.return,oe)}}break;case 3:if(Dn(i,n),tr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Yr(i.containerInfo)}catch(oe){st(n,n.return,oe)}break;case 4:Dn(i,n),tr(n);break;case 13:Dn(i,n),tr(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Uh=Ge())),c&4&&Om(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||K,Dn(i,n),Lt=U):Dn(i,n),tr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(ie=n,K=n.child;K!==null;){for(X=ie=K;ie!==null;){switch(G=ie,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Ia(4,G,G.return);break;case 1:so(G,G.return);var se=G.stateNode;if(typeof se.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){st(c,a,oe)}}break;case 5:so(G,G.return);break;case 22:if(G.memoizedState!==null){Um(X);continue}}ne!==null?(ne.return=G,ie=ne):Um(X)}K=K.sibling}e:for(K=null,X=n;;){if(X.tag===5){if(K===null){K=X;try{d=X.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(A=X.stateNode,P=X.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Br("display",v))}catch(oe){st(n,n.return,oe)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(oe){st(n,n.return,oe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Dn(i,n),tr(n),c&4&&Om(n);break;case 21:break;default:Dn(i,n),tr(n)}}function tr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xi(d,""),c.flags&=-33);var f=bm(n);Mh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=bm(n);Oh(n,A,v);break;default:throw Error(t(161))}}catch(P){st(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Vw(n,i,a){ie=n,Lm(n)}function Lm(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||eu;if(!v){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Lt;A=eu;var U=Lt;if(eu=v,(Lt=P)&&!U)for(ie=d;ie!==null;)v=ie,P=v.child,v.tag===22&&v.memoizedState!==null?zm(d):P!==null?(P.return=v,ie=P):zm(d);for(;f!==null;)ie=f,Lm(f),f=f.sibling;ie=d,eu=A,Lt=U}Fm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):Fm(n)}}function Fm(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||tu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Up(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Up(i,v,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&Yr(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&xh(i)}catch(G){st(i,i.return,G)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Um(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function zm(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tu(4,i)}catch(P){st(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){st(i,d,P)}}var f=i.return;try{xh(i)}catch(P){st(i,f,P)}break;case 5:var v=i.return;try{xh(i)}catch(P){st(i,v,P)}}}catch(P){st(i,i.return,P)}if(i===n){ie=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ie=A;break}ie=i.return}}var bw=Math.ceil,nu=Te.ReactCurrentDispatcher,Lh=Te.ReactCurrentOwner,yn=Te.ReactCurrentBatchConfig,Le=0,It=null,pt=null,Pt=0,ln=0,oo=ti(0),vt=0,Sa=null,ts=0,ru=0,Fh=0,Aa=null,Kt=null,Uh=0,ao=1/0,Pr=null,iu=!1,zh=null,ai=null,su=!1,li=null,ou=0,Ca=0,Bh=null,au=-1,lu=0;function $t(){return(Le&6)!==0?Ge():au!==-1?au:au=Ge()}function ui(n){return(n.mode&1)===0?1:(Le&2)!==0&&Pt!==0?Pt&-Pt:gw.transition!==null?(lu===0&&(lu=Go()),lu):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:Ms(n.type)),n)}function Vn(n,i,a,c){if(50<Ca)throw Ca=0,Bh=null,Error(t(185));$i(n,a,c),((Le&2)===0||n!==It)&&(n===It&&((Le&2)===0&&(ru|=a),vt===4&&ci(n,Pt)),Qt(n,c),a===1&&Le===0&&(i.mode&1)===0&&(ao=Ge()+500,Ml&&ri()))}function Qt(n,i){var a=n.callbackNode;ji(n,i);var c=gr(n,n===It?Pt:0);if(c===0)a!==null&&Ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ps(a),i===1)n.tag===0?mw(jm.bind(null,n)):Rp(jm.bind(null,n)),hw(function(){(Le&6)===0&&ri()}),a=null;else{switch(jn(c)){case 1:a=Ns;break;case 4:a=Ho;break;case 16:a=Fi;break;case 536870912:a=Ds;break;default:a=Fi}a=Ym(a,Bm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Bm(n,i){if(au=-1,lu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(lo()&&n.callbackNode!==a)return null;var c=gr(n,n===It?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=uu(n,c);else{i=c;var d=Le;Le|=2;var f=Hm();(It!==n||Pt!==i)&&(Pr=null,ao=Ge()+500,rs(n,i));do try{Mw();break}catch(A){$m(n,A)}while(!0);sh(),nu.current=f,Le=d,pt!==null?i=0:(It=null,Pt=0,i=vt)}if(i!==0){if(i===2&&(d=Wo(n),d!==0&&(c=d,i=jh(n,d))),i===1)throw a=Sa,rs(n,0),ci(n,c),Qt(n,Ge()),a;if(i===6)ci(n,c);else{if(d=n.current.alternate,(c&30)===0&&!xw(d)&&(i=uu(n,c),i===2&&(f=Wo(n),f!==0&&(c=f,i=jh(n,f))),i===1))throw a=Sa,rs(n,0),ci(n,c),Qt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:is(n,Kt,Pr);break;case 3:if(ci(n,c),(c&130023424)===c&&(i=Uh+500-Ge(),10<i)){if(gr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Kc(is.bind(null,n,Kt,Pr),i);break}is(n,Kt,Pr);break;case 4:if(ci(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-en(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*bw(c/1960))-c,10<c){n.timeoutHandle=Kc(is.bind(null,n,Kt,Pr),c);break}is(n,Kt,Pr);break;case 5:is(n,Kt,Pr);break;default:throw Error(t(329))}}}return Qt(n,Ge()),n.callbackNode===a?Bm.bind(null,n):null}function jh(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(rs(n,i).flags|=256),n=uu(n,i),n!==2&&(i=Kt,Kt=a,i!==null&&$h(i)),n}function $h(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function xw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Rn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ci(n,i){for(i&=~Fh,i&=~ru,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-en(i),c=1<<a;n[a]=-1,i&=~c}}function jm(n){if((Le&6)!==0)throw Error(t(327));lo();var i=gr(n,0);if((i&1)===0)return Qt(n,Ge()),null;var a=uu(n,i);if(n.tag!==0&&a===2){var c=Wo(n);c!==0&&(i=c,a=jh(n,c))}if(a===1)throw a=Sa,rs(n,0),ci(n,i),Qt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,is(n,Kt,Pr),Qt(n,Ge()),null}function Hh(n,i){var a=Le;Le|=1;try{return n(i)}finally{Le=a,Le===0&&(ao=Ge()+500,Ml&&ri())}}function ns(n){li!==null&&li.tag===0&&(Le&6)===0&&lo();var i=Le;Le|=1;var a=yn.transition,c=Oe;try{if(yn.transition=null,Oe=1,n)return n()}finally{Oe=c,yn.transition=a,Le=i,(Le&6)===0&&ri()}}function qh(){ln=oo.current,Qe(oo)}function rs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,cw(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&xl();break;case 3:ro(),Qe(qt),Qe(xt),fh();break;case 5:hh(c);break;case 4:ro();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:oh(c.type._context);break;case 22:case 23:qh()}a=a.return}if(It=n,pt=n=hi(n.current,null),Pt=ln=i,vt=0,Sa=null,Fh=ru=ts=0,Kt=Aa=null,Ji!==null){for(i=0;i<Ji.length;i++)if(a=Ji[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ji=null}return n}function $m(n,i){do{var a=pt;try{if(sh(),Wl.current=Yl,Gl){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Gl=!1}if(es=0,Tt=_t=tt=null,_a=!1,va=0,Lh.current=null,a===null||a.return===null){vt=1,Sa=i,pt=null;break}e:{var f=n,v=a.return,A=a,P=i;if(i=Pt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,K=A,X=K.tag;if((K.mode&1)===0&&(X===0||X===11||X===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=pm(v);if(ne!==null){ne.flags&=-257,mm(ne,v,A,f,i),ne.mode&1&&fm(f,U,i),i=ne,P=U;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(P),i.updateQueue=oe}else se.add(P);break e}else{if((i&1)===0){fm(f,U,i),Wh();break e}P=Error(t(426))}}else if(Je&&A.mode&1){var lt=pm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),mm(lt,v,A,f,i),rh(io(P,A));break e}}f=P=io(P,A),vt!==4&&(vt=2),Aa===null?Aa=[f]:Aa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var M=hm(f,P,i);Fp(f,M);break e;case 1:A=P;var b=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ai===null||!ai.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var J=dm(f,A,i);Fp(f,J);break e}}f=f.return}while(f!==null)}Wm(a)}catch(le){i=le,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Hm(){var n=nu.current;return nu.current=Yl,n===null?Yl:n}function Wh(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||(ts&268435455)===0&&(ru&268435455)===0||ci(It,Pt)}function uu(n,i){var a=Le;Le|=2;var c=Hm();(It!==n||Pt!==i)&&(Pr=null,rs(n,i));do try{Ow();break}catch(d){$m(n,d)}while(!0);if(sh(),Le=a,nu.current=c,pt!==null)throw Error(t(261));return It=null,Pt=0,vt}function Ow(){for(;pt!==null;)qm(pt)}function Mw(){for(;pt!==null&&!Li();)qm(pt)}function qm(n){var i=Qm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Wm(n):pt=i,Lh.current=null}function Wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kw(a,i,ln),a!==null){pt=a;return}}else{if(a=Pw(a,i),a!==null){a.flags&=32767,pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vt=6,pt=null;return}}if(i=i.sibling,i!==null){pt=i;return}pt=i=n}while(i!==null);vt===0&&(vt=5)}function is(n,i,a){var c=Oe,d=yn.transition;try{yn.transition=null,Oe=1,Lw(n,i,a,c)}finally{yn.transition=d,Oe=c}return null}function Lw(n,i,a,c){do lo();while(li!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Vc(n,f),n===It&&(pt=It=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||su||(su=!0,Ym(Fi,function(){return lo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yn.transition,yn.transition=null;var v=Oe;Oe=1;var A=Le;Le|=4,Lh.current=null,Dw(n,a),Mm(a,n),rw(Wc),vr=!!qc,Wc=qc=null,n.current=a,Vw(a),mr(),Le=A,Oe=v,yn.transition=f}else n.current=a;if(su&&(su=!1,li=n,ou=d),f=n.pendingLanes,f===0&&(ai=null),gl(a.stateNode),Qt(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(iu)throw iu=!1,n=zh,zh=null,n;return(ou&1)!==0&&n.tag!==0&&lo(),f=n.pendingLanes,(f&1)!==0?n===Bh?Ca++:(Ca=0,Bh=n):Ca=0,ri(),null}function lo(){if(li!==null){var n=jn(ou),i=yn.transition,a=Oe;try{if(yn.transition=null,Oe=16>n?16:n,li===null)var c=!1;else{if(n=li,li=null,ou=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ie=n.current;ie!==null;){var f=ie,v=f.child;if((ie.flags&16)!==0){var A=f.deletions;if(A!==null){for(var P=0;P<A.length;P++){var U=A[P];for(ie=U;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:Ia(8,K,f)}var X=K.child;if(X!==null)X.return=K,ie=X;else for(;ie!==null;){K=ie;var G=K.sibling,ne=K.return;if(Dm(K),K===U){ie=null;break}if(G!==null){G.return=ne,ie=G;break}ie=ne}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var lt=oe.sibling;oe.sibling=null,oe=lt}while(oe!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ie=v;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ia(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,ie=M;break e}ie=f.return}}var b=n.current;for(ie=b;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=b;ie!==null;){if(A=ie,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:tu(9,A)}}catch(le){st(A,A.return,le)}if(A===v){ie=null;break e}var J=A.sibling;if(J!==null){J.return=A.return,ie=J;break e}ie=A.return}}if(Le=d,ri(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{Oe=a,yn.transition=i}}return!1}function Gm(n,i,a){i=io(a,i),i=hm(n,i,1),n=si(n,i,1),i=$t(),n!==null&&($i(n,1,i),Qt(n,i))}function st(n,i,a){if(n.tag===3)Gm(n,n,a);else for(;i!==null;){if(i.tag===3){Gm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ai===null||!ai.has(c))){n=io(a,n),n=dm(i,n,1),i=si(i,n,1),n=$t(),i!==null&&($i(i,1,n),Qt(i,n));break}}i=i.return}}function Fw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Pt&a)===a&&(vt===4||vt===3&&(Pt&130023424)===Pt&&500>Ge()-Uh?rs(n,0):Fh|=a),Qt(n,i)}function Km(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var a=$t();n=Cr(n,i),n!==null&&($i(n,i,a),Qt(n,a))}function Uw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Km(n,a)}function zw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Km(n,a)}var Qm;Qm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Gt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gt=!1,Rw(n,i,a);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(i.flags&1048576)!==0&&kp(i,Fl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Zl(n,i),n=i.pendingProps;var d=Ys(i,xt.current);no(i,a),d=gh(null,i,c,n,d,a);var f=yh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wt(c)?(f=!0,Ol(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,uh(i),d.updater=Xl,i.stateNode=d,d._reactInternals=i,Ih(i,c,n,a),i=Rh(null,i,c,!0,f,a)):(i.tag=0,Je&&f&&Zc(i),jt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Zl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=jw(c),n=Pn(c,n),d){case 0:i=Ch(null,i,c,n,a);break e;case 1:i=wm(null,i,c,n,a);break e;case 11:i=gm(null,i,c,n,a);break e;case 14:i=ym(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Ch(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),wm(n,i,c,d,a);case 3:e:{if(Tm(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Lp(n,i),Hl(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=io(Error(t(423)),i),i=Im(n,i,c,a,d);break e}else if(c!==d){d=io(Error(t(424)),i),i=Im(n,i,c,a,d);break e}else for(an=ei(i.stateNode.containerInfo.firstChild),on=i,Je=!0,kn=null,a=Op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zs(),c===d){i=kr(n,i,a);break e}jt(n,i,c,a)}i=i.child}return i;case 5:return zp(i),n===null&&nh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Gc(c,d)?v=null:f!==null&&Gc(c,f)&&(i.flags|=32),Em(n,i),jt(n,i,v,a),i.child;case 6:return n===null&&nh(i),null;case 13:return Sm(n,i,a);case 4:return ch(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=eo(i,null,c,a):jt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),gm(n,i,c,d,a);case 7:return jt(n,i,i.pendingProps,a),i.child;case 8:return jt(n,i,i.pendingProps.children,a),i.child;case 12:return jt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,We(Bl,c._currentValue),c._currentValue=v,f!==null)if(Rn(f.value,v)){if(f.children===d.children&&!qt.current){i=kr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var A=f.dependencies;if(A!==null){v=f.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Rr(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?P.next=P:(P.next=K.next,K.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),ah(f.return,a,i),A.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),ah(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}jt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,no(i,a),d=mn(d),c=c(d),i.flags|=1,jt(n,i,c,a),i.child;case 14:return c=i.type,d=Pn(c,i.pendingProps),d=Pn(c.type,d),ym(n,i,c,d,a);case 15:return _m(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Zl(n,i),i.tag=1,Wt(c)?(n=!0,Ol(i)):n=!1,no(i,a),um(i,c,d),Ih(i,c,d,a),Rh(null,i,c,!0,n,a);case 19:return Cm(n,i,a);case 22:return vm(n,i,a)}throw Error(t(156,i.tag))};function Ym(n,i){return $o(n,i)}function Bw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,i,a,c){return new Bw(n,i,a,c)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jw(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===rt)return 14}return 2}function hi(n,i){var a=n.alternate;return a===null?(a=_n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Gh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return ss(a.children,d,f,i);case I:v=8,d|=8;break;case R:return n=_n(12,a,i,d|2),n.elementType=R,n.lanes=f,n;case C:return n=_n(13,a,i,d),n.elementType=C,n.lanes=f,n;case Ue:return n=_n(19,a,i,d),n.elementType=Ue,n.lanes=f,n;case je:return hu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case V:v=9;break e;case O:v=11;break e;case rt:v=14;break e;case ht:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_n(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ss(n,i,a,c){return n=_n(7,n,c,i),n.lanes=a,n}function hu(n,i,a,c){return n=_n(22,n,c,i),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Kh(n,i,a){return n=_n(6,n,null,i),n.lanes=a,n}function Qh(n,i,a){return i=_n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $w(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Yh(n,i,a,c,d,f,v,A,P){return n=new $w(n,i,a,A,P),i===1?(i=1,f===!0&&(i|=8)):i=0,f=_n(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(f),n}function Hw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xm(n){if(!n)return ni;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Ap(n,a,i)}return i}function Jm(n,i,a,c,d,f,v,A,P){return n=Yh(a,c,!0,n,d,f,v,A,P),n.context=Xm(null),a=n.current,c=$t(),d=ui(a),f=Rr(c,d),f.callback=i??null,si(a,f,d),n.current.lanes=d,$i(n,d,c),Qt(n,c),n}function du(n,i,a,c){var d=i.current,f=$t(),v=ui(d);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=si(d,i,v),n!==null&&(Vn(n,d,v,f),$l(n,d,v)),v}function fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xh(n,i){Zm(n,i),(n=n.alternate)&&Zm(n,i)}function qw(){return null}var eg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jh(n){this._internalRoot=n}pu.prototype.render=Jh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));du(n,i,null,null)},pu.prototype.unmount=Jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){du(null,n,null,null)}),i[Tr]=null}};function pu(n){this._internalRoot=n}pu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Jo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tn.length&&i!==0&&i<tn[a].priority;a++);tn.splice(a,0,n),a===0&&xs(n)}};function Zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tg(){}function Ww(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=fu(v);f.call(U)}}var v=Jm(i,c,n,0,null,!1,!1,"",tg);return n._reactRootContainer=v,n[Tr]=v.current,ca(n.nodeType===8?n.parentNode:n),ns(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var U=fu(P);A.call(U)}}var P=Yh(n,0,!1,null,null,!1,!1,"",tg);return n._reactRootContainer=P,n[Tr]=P.current,ca(n.nodeType===8?n.parentNode:n),ns(function(){du(i,P,a,c)}),P}function gu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var A=d;d=function(){var P=fu(v);A.call(P)}}du(i,v,n,d)}else v=Ww(a,i,n,d,c);return fu(v)}Yo=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ze(i.pendingLanes);a!==0&&(Qo(i,a|1),Qt(i,Ge()),(Le&6)===0&&(ao=Ge()+500,ri()))}break;case 13:ns(function(){var c=Cr(n,1);if(c!==null){var d=$t();Vn(c,n,1,d)}}),Xh(n,1)}},Vs=function(n){if(n.tag===13){var i=Cr(n,134217728);if(i!==null){var a=$t();Vn(i,n,134217728,a)}Xh(n,134217728)}},Xo=function(n){if(n.tag===13){var i=ui(n),a=Cr(n,i);if(a!==null){var c=$t();Vn(a,n,i,c)}Xh(n,i)}},Jo=function(){return Oe},Zo=function(n,i){var a=Oe;try{return Oe=n,i()}finally{Oe=a}},dr=function(n,i,a){switch(i){case"input":if(bi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=bl(c);if(!d)throw Error(t(90));xo(c),bi(c,d)}}}break;case"textarea":il(n,a);break;case"select":i=a.value,i!=null&&In(n,!!a.multiple,i,!1)}},al=Hh,ll=ns;var Gw={usingClientEntryPoint:!1,Events:[fa,Ks,bl,$r,Hr,Hh]},Ra={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kw={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ml(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Ui=yu.inject(Kw),Zt=yu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(i))throw Error(t(200));return Hw(n,i,null,a)},Yt.createRoot=function(n,i){if(!Zh(n))throw Error(t(299));var a=!1,c="",d=eg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Yh(n,1,!1,null,null,a,!1,c,d),n[Tr]=i.current,ca(n.nodeType===8?n.parentNode:n),new Jh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ml(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return ns(n)},Yt.hydrate=function(n,i,a){if(!mu(i))throw Error(t(200));return gu(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!Zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=eg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Jm(i,null,n,1,a??null,d,!1,f,v),n[Tr]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pu(i)},Yt.render=function(n,i,a){if(!mu(i))throw Error(t(200));return gu(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!mu(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){gu(null,null,n,!1,function(){n._reactRootContainer=null,n[Tr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Hh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!mu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gu(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var ag;function eT(){if(ag)return td.exports;ag=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=Zw(),td.exports}var lg;function tT(){if(lg)return _u;lg=1;var r=eT();return _u.createRoot=r.createRoot,_u.hydrateRoot=r.hydrateRoot,_u}var nT=tT();const rT=qy(nT),iT=()=>{};var ug={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Ky={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,S=(l&3)<<4|m>>4;let k=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(k=64)),s.push(t[w],t[S],t[k],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Gy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):sT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||_==null||S==null)throw new oT;const k=l<<2|m>>4;if(s.push(k),_!==64){const z=m<<4&240|_>>2;if(s.push(z),S!==64){const Q=_<<6&192|S;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class oT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aT=function(r){const e=Gy(r);return Ky.encodeByteArray(e,!0)},Mu=function(r){return aT(r).replace(/\./g,"")},Qy=function(r){try{return Ky.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=()=>lT().__FIREBASE_DEFAULTS__,cT=()=>{if(typeof process>"u"||typeof ug>"u")return;const r=ug.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Qy(r[1]);return e&&JSON.parse(e)},sc=()=>{try{return iT()||uT()||cT()||hT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Yy=r=>{var e,t;return(t=(e=sc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},dT=r=>{const e=Yy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Xy=()=>{var r;return(r=sc())==null?void 0:r.config},Jy=r=>{var e;return(e=sc())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zy(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Mu(JSON.stringify(t)),Mu(JSON.stringify(h)),""].join(".")}const Va={};function mT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Va))Va[e]?r.emulator.push(e):r.prod.push(e);return r}function gT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let cg=!1;function e_(r,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||Va[r]===e||Va[r]||cg)return;Va[r]=e;function t(k){return`__firebase__banner__${k}`}const s="__firebase__banner",l=mT().prod.length>0;function h(){const k=document.getElementById(s);k&&k.remove()}function m(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function g(k,z){k.setAttribute("width","24"),k.setAttribute("id",z),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function _(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{cg=!0,h()},k}function w(k,z){k.setAttribute("id",z),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function S(){const k=gT(s),z=t("text"),Q=document.getElementById(z)||document.createElement("span"),Y=t("learnmore"),H=document.getElementById(Y)||document.createElement("a"),ce=t("preprendIcon"),ue=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const pe=k.element;m(pe),w(H,Y);const Te=_();g(ue,ce),pe.append(ue,Q,H,Te),document.body.appendChild(pe)}l?(Q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function _T(){var e;const r=(e=sc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ET(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wT(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function TT(){return!_T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n_(){try{return typeof indexedDB=="object"}catch{return!1}}function r_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function IT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="FirebaseError";class Ln extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ST,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?AT(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Ln(o,m,s)}}function AT(r,e){return r.replace(CT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const CT=/\{\$([^}]+)}/g;function RT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ii(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(hg(l)&&hg(h)){if(!Ii(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function hg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kT(r,e){const t=new PT(r,e);return t.subscribe.bind(t)}class PT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");NT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=id),o.error===void 0&&(o.error=id),o.complete===void 0&&(o.complete=id);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function id(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1e3,VT=2,bT=14400*1e3,xT=.5;function dg(r,e=DT,t=VT){const s=e*Math.pow(t,r),o=Math.round(xT*s*(Math.random()-.5)*2);return Math.min(bT,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r){return r&&r._delegate?r._delegate:r}class Mn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LT(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:MT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MT(r){return r===os?void 0:r}function LT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(De||(De={}));const UT={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},zT=De.INFO,BT={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},jT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=BT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=zT,this._logHandler=jT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const $T=(r,e)=>e.some(t=>r instanceof t);let fg,pg;function HT(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qT(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i_=new WeakMap,vd=new WeakMap,s_=new WeakMap,sd=new WeakMap,Kd=new WeakMap;function WT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(_i(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&i_.set(t,r)}).catch(()=>{}),Kd.set(e,r),e}function GT(r){if(vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});vd.set(r,e)}let Ed={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||s_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function KT(r){Ed=r(Ed)}function QT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(od(this),e,...t);return s_.set(s,e.sort?e.sort():[e]),_i(s)}:qT().includes(r)?function(...e){return r.apply(od(this),e),_i(i_.get(this))}:function(...e){return _i(r.apply(od(this),e))}}function YT(r){return typeof r=="function"?QT(r):(r instanceof IDBTransaction&&GT(r),$T(r,HT())?new Proxy(r,Ed):r)}function _i(r){if(r instanceof IDBRequest)return WT(r);if(sd.has(r))return sd.get(r);const e=YT(r);return e!==r&&(sd.set(r,e),Kd.set(e,r)),e}const od=r=>Kd.get(r);function o_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=_i(h);return s&&h.addEventListener("upgradeneeded",g=>{s(_i(h.result),g.oldVersion,g.newVersion,_i(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const XT=["get","getKey","getAll","getAllKeys","count"],JT=["put","add","delete","clear"],ad=new Map;function mg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=JT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||XT.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return ad.set(e,l),l}KT(r=>({...r,get:(e,t,s)=>mg(e,t)||r.get(e,t,s),has:(e,t)=>!!mg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function eI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",gg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new oc("@firebase/app"),tI="@firebase/app-compat",nI="@firebase/analytics-compat",rI="@firebase/analytics",iI="@firebase/app-check-compat",sI="@firebase/app-check",oI="@firebase/auth",aI="@firebase/auth-compat",lI="@firebase/database",uI="@firebase/data-connect",cI="@firebase/database-compat",hI="@firebase/functions",dI="@firebase/functions-compat",fI="@firebase/installations",pI="@firebase/installations-compat",mI="@firebase/messaging",gI="@firebase/messaging-compat",yI="@firebase/performance",_I="@firebase/performance-compat",vI="@firebase/remote-config",EI="@firebase/remote-config-compat",wI="@firebase/storage",TI="@firebase/storage-compat",II="@firebase/firestore",SI="@firebase/ai",AI="@firebase/firestore-compat",CI="firebase",RI="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="[DEFAULT]",kI={[wd]:"fire-core",[tI]:"fire-core-compat",[rI]:"fire-analytics",[nI]:"fire-analytics-compat",[sI]:"fire-app-check",[iI]:"fire-app-check-compat",[oI]:"fire-auth",[aI]:"fire-auth-compat",[lI]:"fire-rtdb",[uI]:"fire-data-connect",[cI]:"fire-rtdb-compat",[hI]:"fire-fn",[dI]:"fire-fn-compat",[fI]:"fire-iid",[pI]:"fire-iid-compat",[mI]:"fire-fcm",[gI]:"fire-fcm-compat",[yI]:"fire-perf",[_I]:"fire-perf-compat",[vI]:"fire-rc",[EI]:"fire-rc-compat",[wI]:"fire-gcs",[TI]:"fire-gcs-compat",[II]:"fire-fst",[AI]:"fire-fst-compat",[SI]:"fire-vertex","fire-js":"fire-js",[CI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map,PI=new Map,Id=new Map;function yg(r,e){try{r.container.addComponent(e)}catch(t){br.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function lr(r){const e=r.name;if(Id.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,r);for(const t of Lu.values())yg(t,r);for(const t of PI.values())yg(t,r);return!0}function _s(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function bn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new ys("app","Firebase",NI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=RI;function a_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Td,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=Xy()),!t)throw vi.create("no-options");const l=Lu.get(o);if(l){if(Ii(t,l.options)&&Ii(s,l.config))return l;throw vi.create("duplicate-app",{appName:o})}const h=new FT(o);for(const g of Id.values())h.addComponent(g);const m=new DI(t,s,h);return Lu.set(o,m),m}function Qd(r=Td){const e=Lu.get(r);if(!e&&r===Td&&Xy())return a_();if(!e)throw vi.create("no-app",{appName:r});return e}function En(r,e,t){let s=kI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(h.join(" "));return}lr(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="firebase-heartbeat-database",bI=1,Fa="firebase-heartbeat-store";let ld=null;function l_(){return ld||(ld=o_(VI,bI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(r=>{throw vi.create("idb-open",{originalErrorMessage:r.message})})),ld}async function xI(r){try{const t=(await l_()).transaction(Fa),s=await t.objectStore(Fa).get(u_(r));return await t.done,s}catch(e){if(e instanceof Ln)br.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(t.message)}}}async function _g(r,e){try{const s=(await l_()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,u_(r)),await s.done}catch(t){if(t instanceof Ln)br.warn(t.message);else{const s=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});br.warn(s.message)}}}function u_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=1024,MI=30;class LI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new UI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=vg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>MI){const h=zI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){br.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vg(),{heartbeatsToSend:s,unsentEntries:o}=FI(this._heartbeatsCache.heartbeats),l=Mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return br.warn(t),""}}}function vg(){return new Date().toISOString().substring(0,10)}function FI(r,e=OI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Eg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class UI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n_()?r_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eg(r){return Mu(JSON.stringify({version:2,heartbeats:r})).length}function zI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(r){lr(new Mn("platform-logger",e=>new ZT(e),"PRIVATE")),lr(new Mn("heartbeat",e=>new LI(e),"PRIVATE")),En(wd,gg,r),En(wd,gg,"esm2020"),En("fire-js","")}BI("");function c_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jI=c_,h_=new ys("auth","Firebase",c_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new oc("@firebase/auth");function $I(r,...e){Fu.logLevel<=De.WARN&&Fu.warn(`Auth (${ko}): ${r}`,...e)}function Cu(r,...e){Fu.logLevel<=De.ERROR&&Fu.error(`Auth (${ko}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(r,...e){throw Xd(r,...e)}function On(r,...e){return Xd(r,...e)}function Yd(r,e,t){const s={...jI(),[e]:t};return new ys("auth","Firebase",s).create(e,{appName:r.name})}function cs(r){return Yd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ur(r,"argument-error"),Yd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return h_.create(r,...e)}function Ee(r,e,...t){if(!r)throw Xd(e,...t)}function Dr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Cu(e),new Error(e)}function xr(r,e){r||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function qI(){return wg()==="http:"||wg()==="https:"}function wg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qI()||t_()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=yT()||ET()}get(){return WI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(r,e){xr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YI=new Ga(3e4,6e4);function Zd(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Po(r,e,t,s,o={}){return f_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=Wa({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return vT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(_.credentials="include"),d_.fetch()(await p_(r,r.config.apiHost,t,m),_)})}async function f_(r,e,t){r._canInitEmulator=!1;const s={...KI,...e};try{const o=new JI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw vu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw vu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw vu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Yd(r,w,_);ur(r,w)}}catch(o){if(o instanceof Ln)throw o;ur(r,"network-request-failed",{message:String(o)})}}async function XI(r,e,t,s,o={}){const l=await Po(r,e,t,s,o);return"mfaPendingCredential"in l&&ur(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function p_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Jd(r.config,o):`${r.config.apiScheme}://${o}`;return QI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class JI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),YI.get())})}}function vu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=On(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(r,e){return Po(r,"POST","/v1/accounts:delete",e)}async function Uu(r,e){return Po(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e0(r,e=!1){const t=yt(r),s=await t.getIdToken(e),o=ef(s);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:ba(ud(o.auth_time)),issuedAtTime:ba(ud(o.iat)),expirationTime:ba(ud(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function ud(r){return Number(r)*1e3}function ef(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Qy(t);return o?JSON.parse(o):(Cu("Failed to decode base64 JWT payload"),null)}catch(o){return Cu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Tg(r){const e=ef(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ln&&t0(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function t0({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(r){var S;const e=r.auth,t=await r.getIdToken(),s=await Ua(r,Uu(e,{idToken:t}));Ee(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=(S=o.providerUserInfo)!=null&&S.length?m_(o.providerUserInfo):[],h=i0(r.providerData,l),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Ad(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function r0(r){const e=yt(r);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i0(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function m_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(r,e){const t=await f_(r,{},async()=>{const s=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await p_(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(g.credentials="include"),d_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function o0(r,e){return Po(r,"POST","/v2/accounts:revokeToken",Zd(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Tg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await s0(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new po;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class xn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new n0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ad(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e0(this,e)}reload(){return r0(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(cs(this.auth));const e=await this.getIdToken();return await Ua(this,ZI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:S,emailVerified:k,isAnonymous:z,providerData:Q,stsTokenManager:Y}=t;Ee(S&&Y,e,"internal-error");const H=po.fromJSON(this.name,Y);Ee(typeof S=="string",e,"internal-error"),fi(s,e.name),fi(o,e.name),Ee(typeof k=="boolean",e,"internal-error"),Ee(typeof z=="boolean",e,"internal-error"),fi(l,e.name),fi(h,e.name),fi(m,e.name),fi(g,e.name),fi(_,e.name),fi(w,e.name);const ce=new xn({uid:S,auth:e,email:o,emailVerified:k,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:l,tenantId:m,stsTokenManager:H,createdAt:_,lastLoginAt:w});return Q&&Array.isArray(Q)&&(ce.providerData=Q.map(ue=>({...ue}))),g&&(ce._redirectEventId=g),ce}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const l=new xn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await zu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?m_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new po;m.updateFromIdToken(s);const g=new xn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ad(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Map;function Vr(r){xr(r instanceof Function,"Expected a class definition");let e=Ig.get(r);return e?(xr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ig.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}g_.type="NONE";const Sg=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(r,e,t){return`firebase:${r}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Ru(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ru("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uu(this.auth,{idToken:e}).catch(()=>{});return t?xn._fromGetAccountInfoResponse(this.auth,t,e):null}return xn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Vr(Sg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Vr(Sg);const h=Ru(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let S;if(typeof w=="string"){const k=await Uu(e,{idToken:w}).catch(()=>{});if(!k)break;S=await xn._fromGetAccountInfoResponse(e,k,w)}else S=xn._fromJSON(e,w);_!==l&&(m=S),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new mo(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new mo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T_(e))return"Blackberry";if(I_(e))return"Webos";if(__(e))return"Safari";if((e.includes("chrome/")||v_(e))&&!e.includes("edge/"))return"Chrome";if(w_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function y_(r=Bt()){return/firefox\//i.test(r)}function __(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v_(r=Bt()){return/crios\//i.test(r)}function E_(r=Bt()){return/iemobile/i.test(r)}function w_(r=Bt()){return/android/i.test(r)}function T_(r=Bt()){return/blackberry/i.test(r)}function I_(r=Bt()){return/webos/i.test(r)}function tf(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function a0(r=Bt()){var e;return tf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function l0(){return wT()&&document.documentMode===10}function S_(r=Bt()){return tf(r)||w_(r)||I_(r)||T_(r)||/windows phone/i.test(r)||E_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(r,e=[]){let t;switch(r){case"Browser":t=Ag(Bt());break;case"Worker":t=`${Ag(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ko}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(r,e={}){return Po(r,"GET","/v2/passwordPolicy",Zd(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=6;class d0{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??h0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cg(this),this.idTokenSubscription=new Cg(this),this.beforeStateQueue=new u0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uu(this,{idToken:e}),s=await xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(bn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(cs(this));const t=e?yt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await c0(this),t=new d0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await o0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$I(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ac(r){return yt(r)}class Cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=kT(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p0(r){nf=r}function m0(r){return nf.loadJS(r)}function g0(){return nf.gapiScript}function y0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(r,e){const t=_s(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ii(l,e??{}))return o;ur(o,"already-initialized")}return t.initialize({options:e})}function v0(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function E0(r,e,t){const s=ac(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=C_(e),{host:h,port:m}=w0(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(Ii(_,s.config.emulator)&&Ii(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ro(h)?(Zy(`${l}//${h}${g}`),e_("Auth",!0)):T0()}function C_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function w0(r){const e=C_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Rg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Rg(h)}}}function Rg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function T0(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(r,e){return XI(r,"POST","/v1/accounts:signInWithIdp",Zd(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="http://localhost";class ds extends R_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ur("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new ds(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:I0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Ka{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Nr.credential(t,s)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Ka{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Ka{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gi.credential(t,s)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await xn._fromIdTokenResponse(e,s,o),h=kg(s);return new Eo({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=kg(s);return new Eo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function kg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Ln{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Bu(e,t,s,o)}}function k_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(r,l,e,s):l})}async function S0(r,e,t=!1){const s=await Ua(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Eo._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(r,e,t=!1){const{auth:s}=r;if(bn(s.app))return Promise.reject(cs(s));const o="reauthenticate";try{const l=await Ua(r,k_(s,o,e,r),t);Ee(l.idToken,s,"internal-error");const h=ef(l.idToken);Ee(h,s,"internal-error");const{sub:m}=h;return Ee(r.uid===m,s,"user-mismatch"),Eo._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ur(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(r,e,t=!1){if(bn(r.app))return Promise.reject(cs(r));const s="signIn",o=await k_(r,s,e),l=await Eo._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function R0(r,e,t,s){return yt(r).onIdTokenChanged(e,t,s)}function k0(r,e,t){return yt(r).beforeAuthStateChanged(e,t)}function P0(r,e,t,s){return yt(r).onAuthStateChanged(e,t,s)}function N0(r){return yt(r).signOut()}const ju="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=1e3,V0=10;class N_ extends P_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);l0()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,V0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}N_.type="LOCAL";const b0=N_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends P_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}D_.type="SESSION";const V_=D_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new lc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await x0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=sf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const k=S;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(k.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function M0(r){rr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function L0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function U0(){return b_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebaseLocalStorageDb",z0=1,$u="firebaseLocalStorage",O_="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uc(r,e){return r.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function B0(){const r=indexedDB.deleteDatabase(x_);return new Qa(r).toPromise()}function Cd(){const r=indexedDB.open(x_,z0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore($u,{keyPath:O_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains($u)?e(s):(s.close(),await B0(),e(await Cd()))})})}async function Pg(r,e,t){const s=uc(r,!0).put({[O_]:e,value:t});return new Qa(s).toPromise()}async function j0(r,e){const t=uc(r,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function Ng(r,e){const t=uc(r,!0).delete(e);return new Qa(t).toPromise()}const $0=800,H0=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>H0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(U0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await L0(),!this.activeServiceWorker)return;this.sender=new O0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Pg(e,ju,"1"),await Ng(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>j0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ng(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=uc(o,!1).getAll();return new Qa(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const q0=M_;new Ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(r,e){return e?Vr(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends R_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function W0(r){return C0(r.auth,new of(r),r.bypassAuthState)}function G0(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),A0(t,new of(r),r.bypassAuthState)}async function K0(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),S0(t,new of(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W0;case"linkViaPopup":case"linkViaRedirect":return K0;case"reauthViaPopup":case"reauthViaRedirect":return G0;default:ur(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new Ga(2e3,1e4);async function U_(r,e,t){if(bn(r.app))return Promise.reject(On(r,"operation-not-supported-in-this-environment"));const s=ac(r);HI(r,e,rf);const o=L_(s,t);return new as(s,"signInViaPopup",e,o).executeNotNull()}class as extends F_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q0.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="pendingRedirect",ku=new Map;class X0 extends F_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const s=await J0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J0(r,e){const t=tS(e),s=eS(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Z0(r,e){ku.set(r._key(),e)}function eS(r){return Vr(r._redirectPersistence)}function tS(r){return Ru(Y0,r.config.apiKey,r.name)}async function nS(r,e,t=!1){if(bn(r.app))return Promise.reject(cs(r));const s=ac(r),o=L_(s,e),h=await new X0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=600*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!z_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(On(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dg(e))}saveEventToCache(e){this.cachedEventUids.add(Dg(e)),this.lastProcessedEventTime=Date.now()}}function Dg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function z_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(r,e={}){return Po(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lS=/^https?/;async function uS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await oS(r);for(const t of e)try{if(cS(t))return}catch{}ur(r,"unauthorized-domain")}function cS(r){const e=Sd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!lS.test(t))return!1;if(aS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new Ga(3e4,6e4);function Vg(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function dS(r){return new Promise((e,t)=>{var o,l,h;function s(){Vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vg(),t(On(r,"network-request-failed"))},timeout:hS.get()})}if((l=(o=rr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=rr().gapi)!=null&&h.load)s();else{const m=y0("iframefcb");return rr()[m]=()=>{gapi.load?s():t(On(r,"network-request-failed"))},m0(`${g0()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function fS(r){return Pu=Pu||dS(r),Pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new Ga(5e3,15e3),mS="__/auth/iframe",gS="emulator/auth/iframe",yS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vS(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Jd(e,gS):`https://${r.config.authDomain}/${mS}`,s={apiKey:e.apiKey,appName:r.name,v:ko},o=_S.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Wa(s).slice(1)}`}async function ES(r){const e=await fS(r),t=rr().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:vS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yS,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=On(r,"network-request-failed"),m=rr().setTimeout(()=>{l(h)},pS.get());function g(){rr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TS=500,IS=600,SS="_blank",AS="http://localhost";class bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CS(r,e,t,s=TS,o=IS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...wS,width:s.toString(),height:o.toString(),top:l,left:h},_=Bt().toLowerCase();t&&(m=v_(_)?SS:t),y_(_)&&(e=e||AS,g.scrollbars="yes");const w=Object.entries(g).reduce((k,[z,Q])=>`${k}${z}=${Q},`,"");if(a0(_)&&m!=="_self")return RS(e||"",m),new bg(null);const S=window.open(e||"",m,w);Ee(S,r,"popup-blocked");try{S.focus()}catch{}return new bg(S)}function RS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="__/auth/handler",PS="emulator/auth/handler",NS=encodeURIComponent("fac");async function xg(r,e,t,s,o,l){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:ko,eventId:o};if(e instanceof rf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",RT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof Ka){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${NS}=${encodeURIComponent(g)}`:"";return`${DS(r)}?${Wa(m).slice(1)}${_}`}function DS({config:r}){return r.emulator?Jd(r,PS):`https://${r.authDomain}/${kS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="webStorageSupport";class VS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V_,this._completeRedirectFn=nS,this._overrideRedirectResult=Z0}async _openPopup(e,t,s,o){var h;xr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await xg(e,t,s,Sd(),o);return CS(e,l,sf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await xg(e,t,s,Sd(),o);return M0(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(xr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ES(e),s=new iS(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cd,{type:cd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[cd];l!==void 0&&t(!!l),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return S_()||__()||tf()}}const bS=VS;var Og="@firebase/auth",Mg="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MS(r){lr(new Mn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(r)},_=new f0(s,o,l,g);return v0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),lr(new Mn("auth-internal",e=>{const t=ac(e.getProvider("auth").getImmediate());return(s=>new xS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Og,Mg,OS(r)),En(Og,Mg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=300,FS=Jy("authIdTokenMaxAge")||LS;let Lg=null;const US=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>FS)return;const o=t==null?void 0:t.token;Lg!==o&&(Lg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zS(r=Qd()){const e=_s(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_0(r,{popupRedirectResolver:bS,persistence:[q0,b0,V_]}),s=Jy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=US(l.toString());k0(t,h,()=>h(t.currentUser)),R0(t,m=>h(m))}}const o=Yy("auth");return o&&E0(t,`http://${o}`),t}function BS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}p0({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=On("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",BS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MS("Browser");var jS="firebase",$S="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(jS,$S,"app");const B_="@firebase/installations",af="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=1e4,$_=`w:${af}`,H_="FIS_v2",HS="https://firebaseinstallations.googleapis.com/v1",qS=3600*1e3,WS="installations",GS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new ys(WS,GS,KS);function q_(r){return r instanceof Ln&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_({projectId:r}){return`${HS}/projects/${r}/installations`}function G_(r){return{token:r.token,requestStatus:2,expiresIn:YS(r.expiresIn),creationTime:Date.now()}}async function K_(r,e){const s=(await e.json()).error;return fs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Q_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function QS(r,{refreshToken:e}){const t=Q_(r);return t.append("Authorization",XS(e)),t}async function Y_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function YS(r){return Number(r.replace("s","000"))}function XS(r){return`${H_} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=W_(r),o=Q_(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:H_,appId:r.appId,sdkVersion:$_},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await Y_(()=>fetch(s,m));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:G_(_.authToken)}}else throw await K_("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=/^[cdef][\w-]{21}$/,Rd="";function t1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=n1(r);return e1.test(t)?t:Rd}catch{return Rd}}function n1(r){return ZS(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;function Z_(r,e){const t=cc(r);ev(t,e),r1(t,e)}function ev(r,e){const t=J_.get(r);if(t)for(const s of t)s(e)}function r1(r,e){const t=i1();t&&t.postMessage({key:r,fid:e}),s1()}let ls=null;function i1(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=r=>{ev(r.data.key,r.data.fid)}),ls}function s1(){J_.size===0&&ls&&(ls.close(),ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firebase-installations-database",a1=1,ps="firebase-installations-store";let hd=null;function lf(){return hd||(hd=o_(o1,a1,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ps)}}})),hd}async function Hu(r,e){const t=cc(r),o=(await lf()).transaction(ps,"readwrite"),l=o.objectStore(ps),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Z_(r,e.fid),e}async function tv(r){const e=cc(r),s=(await lf()).transaction(ps,"readwrite");await s.objectStore(ps).delete(e),await s.done}async function hc(r,e){const t=cc(r),o=(await lf()).transaction(ps,"readwrite"),l=o.objectStore(ps),h=await l.get(t),m=e(h);return m===void 0?await l.delete(t):await l.put(m,t),await o.done,m&&(!h||h.fid!==m.fid)&&Z_(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uf(r){let e;const t=await hc(r.appConfig,s=>{const o=l1(s),l=u1(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Rd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function l1(r){const e=r||{fid:t1(),registrationStatus:0};return nv(e)}function u1(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=c1(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h1(r)}:{installationEntry:e}}async function c1(r,e){try{const t=await JS(r,e);return Hu(r.appConfig,t)}catch(t){throw q_(t)&&t.customData.serverCode===409?await tv(r.appConfig):await Hu(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function h1(r){let e=await Fg(r.appConfig);for(;e.registrationStatus===1;)await X_(100),e=await Fg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await uf(r);return s||t}return e}function Fg(r){return hc(r,e=>{if(!e)throw fs.create("installation-not-found");return nv(e)})}function nv(r){return d1(r)?{fid:r.fid,registrationStatus:0}:r}function d1(r){return r.registrationStatus===1&&r.registrationTime+j_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1({appConfig:r,heartbeatServiceProvider:e},t){const s=p1(r,t),o=QS(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:$_,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(h)},g=await Y_(()=>fetch(s,m));if(g.ok){const _=await g.json();return G_(_)}else throw await K_("Generate Auth Token",g)}function p1(r,{fid:e}){return`${W_(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(r,e=!1){let t;const s=await hc(r.appConfig,l=>{if(!rv(l))throw fs.create("not-registered");const h=l.authToken;if(!e&&y1(h))return l;if(h.requestStatus===1)return t=m1(r,e),l;{if(!navigator.onLine)throw fs.create("app-offline");const m=v1(l);return t=g1(r,m),m}});return t?await t:s.authToken}async function m1(r,e){let t=await Ug(r.appConfig);for(;t.authToken.requestStatus===1;)await X_(100),t=await Ug(r.appConfig);const s=t.authToken;return s.requestStatus===0?cf(r,e):s}function Ug(r){return hc(r,e=>{if(!rv(e))throw fs.create("not-registered");const t=e.authToken;return E1(t)?{...e,authToken:{requestStatus:0}}:e})}async function g1(r,e){try{const t=await f1(r,e),s={...e,authToken:t};return await Hu(r.appConfig,s),t}catch(t){if(q_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await tv(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Hu(r.appConfig,s)}throw t}}function rv(r){return r!==void 0&&r.registrationStatus===2}function y1(r){return r.requestStatus===2&&!_1(r)}function _1(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+qS}function v1(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function E1(r){return r.requestStatus===1&&r.requestTime+j_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(r){const e=r,{installationEntry:t,registrationPromise:s}=await uf(e);return s?s.catch(console.error):cf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(r,e=!1){const t=r;return await I1(t),(await cf(t,e)).token}async function I1(r){const{registrationPromise:e}=await uf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(r){if(!r||!r.options)throw dd("App Configuration");if(!r.name)throw dd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw dd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function dd(r){return fs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="installations",A1="installations-internal",C1=r=>{const e=r.getProvider("app").getImmediate(),t=S1(e),s=_s(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},R1=r=>{const e=r.getProvider("app").getImmediate(),t=_s(e,iv).getImmediate();return{getId:()=>w1(t),getToken:o=>T1(t,o)}};function k1(){lr(new Mn(iv,C1,"PUBLIC")),lr(new Mn(A1,R1,"PRIVATE"))}k1();En(B_,af);En(B_,af,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="analytics",P1="firebase_id",N1="origin",D1=60*1e3,V1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new ys("analytics","Analytics",b1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(r){if(!r.startsWith(hf)){const e=cn.create("invalid-gtag-resource",{gtagURL:r});return Ht.warn(e.message),""}return r}function sv(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function O1(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function M1(r,e){const t=O1("firebase-js-sdk-policy",{createScriptURL:x1}),s=document.createElement("script"),o=`${hf}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function L1(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function F1(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await sv(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(m){Ht.error(m)}r("config",o,l)}async function U1(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const m=await sv(t);for(const g of h){const _=m.find(S=>S.measurementId===g),w=_&&e[_.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){Ht.error(l)}}function z1(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[m,g]=h;await U1(r,e,t,m,g)}else if(l==="config"){const[m,g]=h;await F1(r,e,t,s,m,g)}else if(l==="consent"){const[m,g]=h;r("consent",m,g)}else if(l==="get"){const[m,g,_]=h;r("get",m,g,_)}else if(l==="set"){const[m]=h;r("set",m)}else r(l,...h)}catch(m){Ht.error(m)}}return o}function B1(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=z1(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function j1(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(hf)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=30,H1=1e3;class q1{constructor(e={},t=H1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ov=new q1;function W1(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function G1(r){var h;const{appId:e,apiKey:t}=r,s={method:"GET",headers:W1(t)},o=V1.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let m="";try{const g=await l.json();(h=g.error)!=null&&h.message&&(m=g.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:m})}return l.json()}async function K1(r,e=ov,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw cn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw cn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new X1;return setTimeout(async()=>{m.abort()},D1),av({appId:s,apiKey:o,measurementId:l},h,m,e)}async function av(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=ov){var m;const{appId:l,measurementId:h}=r;try{await Q1(s,e)}catch(g){if(h)return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:h};throw g}try{const g=await G1(r);return o.deleteThrottleMetadata(l),g}catch(g){const _=g;if(!Y1(_)){if(o.deleteThrottleMetadata(l),h)return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:l,measurementId:h};throw g}const w=Number((m=_==null?void 0:_.customData)==null?void 0:m.httpStatus)===503?dg(t,o.intervalMillis,$1):dg(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(l,S),Ht.debug(`Calling attemptFetch again in ${w} millis`),av(r,S,s,o)}}function Q1(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Y1(r){if(!(r instanceof Ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class X1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function J1(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h={...s,send_to:l};r("event",t,h)}}async function Z1(r,e,t,s){if(s&&s.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return r("set",o),Promise.resolve()}else{const o=await e;r("config",o,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(){if(n_())try{await r_()}catch(r){return Ht.warn(cn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Ht.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tA(r,e,t,s,o,l,h){const m=K1(r);m.then(k=>{t[k.measurementId]=k.appId,r.options.measurementId&&k.measurementId!==r.options.measurementId&&Ht.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Ht.error(k)),e.push(m);const g=eA().then(k=>{if(k)return s.getId()}),[_,w]=await Promise.all([m,g]);j1(l)||M1(l,_.measurementId),o("js",new Date);const S=(h==null?void 0:h.config)??{};return S[N1]="firebase",S.update=!0,w!=null&&(S[P1]=w),o("config",_.measurementId,S),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.app=e}_delete(){return delete yo[this.app.options.appId],Promise.resolve()}}let yo={},zg=[];const Bg={};let fd="dataLayer",rA="gtag",jg,df,$g=!1;function iA(){const r=[];if(t_()&&r.push("This is a browser extension environment."),IT()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=cn.create("invalid-analytics-context",{errorInfo:e});Ht.warn(t.message)}}function sA(r,e,t){iA();const s=r.options.appId;if(!s)throw cn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(yo[s]!=null)throw cn.create("already-exists",{id:s});if(!$g){L1(fd);const{wrappedGtag:l,gtagCore:h}=B1(yo,zg,Bg,fd,rA);df=l,jg=h,$g=!0}return yo[s]=tA(r,zg,Bg,e,jg,fd,t),new nA(r)}function oA(r=Qd()){r=yt(r);const e=_s(r,qu);return e.isInitialized()?e.getImmediate():aA(r)}function aA(r,e={}){const t=_s(r,qu);if(t.isInitialized()){const o=t.getImmediate();if(Ii(e,t.getOptions()))return o;throw cn.create("already-initialized")}return t.initialize({options:e})}function lA(r,e,t){r=yt(r),Z1(df,yo[r.app.options.appId],e,t).catch(s=>Ht.error(s))}function uA(r,e,t,s){r=yt(r),J1(df,yo[r.app.options.appId],e,t,s).catch(o=>Ht.error(o))}const Hg="@firebase/analytics",qg="0.10.19";function cA(){lr(new Mn(qu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return sA(s,o,t)},"PUBLIC")),lr(new Mn("analytics-internal",r,"PRIVATE")),En(Hg,qg),En(Hg,qg,"esm2020");function r(e){try{const t=e.getProvider(qu).getImmediate();return{logEvent:(s,o,l)=>uA(t,s,o,l),setUserProperties:(s,o)=>lA(t,s,o)}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}}cA();var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,lv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.F=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.D=function(x,V,O){for(var C=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)C[Ue-2]=arguments[Ue];return I.prototype[V].apply(x,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);const x=Array(16);if(typeof I=="string")for(var V=0;V<16;++V)x[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;V<16;++V)x[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];let O=D.g[3],C;C=I+(O^R&(V^O))+x[0]+3614090360&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(V^I&(R^V))+x[1]+3905402710&4294967295,O=I+(C<<12&4294967295|C>>>20),C=V+(R^O&(I^R))+x[2]+606105819&4294967295,V=O+(C<<17&4294967295|C>>>15),C=R+(I^V&(O^I))+x[3]+3250441966&4294967295,R=V+(C<<22&4294967295|C>>>10),C=I+(O^R&(V^O))+x[4]+4118548399&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(V^I&(R^V))+x[5]+1200080426&4294967295,O=I+(C<<12&4294967295|C>>>20),C=V+(R^O&(I^R))+x[6]+2821735955&4294967295,V=O+(C<<17&4294967295|C>>>15),C=R+(I^V&(O^I))+x[7]+4249261313&4294967295,R=V+(C<<22&4294967295|C>>>10),C=I+(O^R&(V^O))+x[8]+1770035416&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(V^I&(R^V))+x[9]+2336552879&4294967295,O=I+(C<<12&4294967295|C>>>20),C=V+(R^O&(I^R))+x[10]+4294925233&4294967295,V=O+(C<<17&4294967295|C>>>15),C=R+(I^V&(O^I))+x[11]+2304563134&4294967295,R=V+(C<<22&4294967295|C>>>10),C=I+(O^R&(V^O))+x[12]+1804603682&4294967295,I=R+(C<<7&4294967295|C>>>25),C=O+(V^I&(R^V))+x[13]+4254626195&4294967295,O=I+(C<<12&4294967295|C>>>20),C=V+(R^O&(I^R))+x[14]+2792965006&4294967295,V=O+(C<<17&4294967295|C>>>15),C=R+(I^V&(O^I))+x[15]+1236535329&4294967295,R=V+(C<<22&4294967295|C>>>10),C=I+(V^O&(R^V))+x[1]+4129170786&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^V&(I^R))+x[6]+3225465664&4294967295,O=I+(C<<9&4294967295|C>>>23),C=V+(I^R&(O^I))+x[11]+643717713&4294967295,V=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(V^O))+x[0]+3921069994&4294967295,R=V+(C<<20&4294967295|C>>>12),C=I+(V^O&(R^V))+x[5]+3593408605&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^V&(I^R))+x[10]+38016083&4294967295,O=I+(C<<9&4294967295|C>>>23),C=V+(I^R&(O^I))+x[15]+3634488961&4294967295,V=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(V^O))+x[4]+3889429448&4294967295,R=V+(C<<20&4294967295|C>>>12),C=I+(V^O&(R^V))+x[9]+568446438&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^V&(I^R))+x[14]+3275163606&4294967295,O=I+(C<<9&4294967295|C>>>23),C=V+(I^R&(O^I))+x[3]+4107603335&4294967295,V=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(V^O))+x[8]+1163531501&4294967295,R=V+(C<<20&4294967295|C>>>12),C=I+(V^O&(R^V))+x[13]+2850285829&4294967295,I=R+(C<<5&4294967295|C>>>27),C=O+(R^V&(I^R))+x[2]+4243563512&4294967295,O=I+(C<<9&4294967295|C>>>23),C=V+(I^R&(O^I))+x[7]+1735328473&4294967295,V=O+(C<<14&4294967295|C>>>18),C=R+(O^I&(V^O))+x[12]+2368359562&4294967295,R=V+(C<<20&4294967295|C>>>12),C=I+(R^V^O)+x[5]+4294588738&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^V)+x[8]+2272392833&4294967295,O=I+(C<<11&4294967295|C>>>21),C=V+(O^I^R)+x[11]+1839030562&4294967295,V=O+(C<<16&4294967295|C>>>16),C=R+(V^O^I)+x[14]+4259657740&4294967295,R=V+(C<<23&4294967295|C>>>9),C=I+(R^V^O)+x[1]+2763975236&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^V)+x[4]+1272893353&4294967295,O=I+(C<<11&4294967295|C>>>21),C=V+(O^I^R)+x[7]+4139469664&4294967295,V=O+(C<<16&4294967295|C>>>16),C=R+(V^O^I)+x[10]+3200236656&4294967295,R=V+(C<<23&4294967295|C>>>9),C=I+(R^V^O)+x[13]+681279174&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^V)+x[0]+3936430074&4294967295,O=I+(C<<11&4294967295|C>>>21),C=V+(O^I^R)+x[3]+3572445317&4294967295,V=O+(C<<16&4294967295|C>>>16),C=R+(V^O^I)+x[6]+76029189&4294967295,R=V+(C<<23&4294967295|C>>>9),C=I+(R^V^O)+x[9]+3654602809&4294967295,I=R+(C<<4&4294967295|C>>>28),C=O+(I^R^V)+x[12]+3873151461&4294967295,O=I+(C<<11&4294967295|C>>>21),C=V+(O^I^R)+x[15]+530742520&4294967295,V=O+(C<<16&4294967295|C>>>16),C=R+(V^O^I)+x[2]+3299628645&4294967295,R=V+(C<<23&4294967295|C>>>9),C=I+(V^(R|~O))+x[0]+4096336452&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~V))+x[7]+1126891415&4294967295,O=I+(C<<10&4294967295|C>>>22),C=V+(I^(O|~R))+x[14]+2878612391&4294967295,V=O+(C<<15&4294967295|C>>>17),C=R+(O^(V|~I))+x[5]+4237533241&4294967295,R=V+(C<<21&4294967295|C>>>11),C=I+(V^(R|~O))+x[12]+1700485571&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~V))+x[3]+2399980690&4294967295,O=I+(C<<10&4294967295|C>>>22),C=V+(I^(O|~R))+x[10]+4293915773&4294967295,V=O+(C<<15&4294967295|C>>>17),C=R+(O^(V|~I))+x[1]+2240044497&4294967295,R=V+(C<<21&4294967295|C>>>11),C=I+(V^(R|~O))+x[8]+1873313359&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~V))+x[15]+4264355552&4294967295,O=I+(C<<10&4294967295|C>>>22),C=V+(I^(O|~R))+x[6]+2734768916&4294967295,V=O+(C<<15&4294967295|C>>>17),C=R+(O^(V|~I))+x[13]+1309151649&4294967295,R=V+(C<<21&4294967295|C>>>11),C=I+(V^(R|~O))+x[4]+4149444226&4294967295,I=R+(C<<6&4294967295|C>>>26),C=O+(R^(I|~V))+x[11]+3174756917&4294967295,O=I+(C<<10&4294967295|C>>>22),C=V+(I^(O|~R))+x[2]+718787259&4294967295,V=O+(C<<15&4294967295|C>>>17),C=R+(O^(V|~I))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.v=function(D,I){I===void 0&&(I=D.length);const R=I-this.blockSize,x=this.C;let V=this.h,O=0;for(;O<I;){if(V==0)for(;O<=R;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<I;)if(x[V++]=D.charCodeAt(O++),V==this.blockSize){o(this,x),V=0;break}}else for(;O<I;)if(x[V++]=D[O++],V==this.blockSize){o(this,x),V=0;break}}this.h=V,this.o+=I},s.prototype.A=function(){var D=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;I=this.o*8;for(var R=D.length-8;R<D.length;++R)D[R]=I&255,I/=256;for(this.v(D),D=Array(16),I=0,R=0;R<4;++R)for(let x=0;x<32;x+=8)D[I++]=this.g[R]>>>x&255;return D};function l(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;const R=[];let x=!0;for(let V=D.length-1;V>=0;V--){const O=D[V]|0;x&&O==I||(R[V]=O,x=!1)}this.g=R}var m={};function g(D){return-128<=D&&D<128?l(D,function(I){return new h([I|0],I<0?-1:0)}):new h([D|0],D<0?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return S;if(D<0)return H(_(-D));const I=[];let R=1;for(let x=0;D>=R;x++)I[x]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return H(w(D.substring(1),I));if(D.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let x=S;for(let O=0;O<D.length;O+=8){var V=Math.min(8,D.length-O);const C=parseInt(D.substring(O,O+V),I);V<8?(V=_(Math.pow(I,V)),x=x.j(V).add(_(C))):(x=x.j(R),x=x.add(_(C)))}return x}var S=g(0),k=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-H(this).m();let D=0,I=1;for(let R=0;R<this.g.length;R++){const x=this.i(R);D+=(x>=0?x:4294967296+x)*I,I*=4294967296}return D},r.toString=function(D){if(D=D||10,D<2||36<D)throw Error("radix out of range: "+D);if(Q(this))return"0";if(Y(this))return"-"+H(this).toString(D);const I=_(Math.pow(D,6));var R=this;let x="";for(;;){const V=Te(R,I).g;R=ce(R,V.j(I));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(D);if(R=V,Q(R))return O+x;for(;O.length<6;)O="0"+O;x=O+x}},r.i=function(D){return D<0?0:D<this.g.length?this.g[D]:this.h};function Q(D){if(D.h!=0)return!1;for(let I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function Y(D){return D.h==-1}r.l=function(D){return D=ce(this,D),Y(D)?-1:Q(D)?0:1};function H(D){const I=D.g.length,R=[];for(let x=0;x<I;x++)R[x]=~D.g[x];return new h(R,~D.h).add(k)}r.abs=function(){return Y(this)?H(this):this},r.add=function(D){const I=Math.max(this.g.length,D.g.length),R=[];let x=0;for(let V=0;V<=I;V++){let O=x+(this.i(V)&65535)+(D.i(V)&65535),C=(O>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);x=C>>>16,O&=65535,C&=65535,R[V]=C<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ce(D,I){return D.add(H(I))}r.j=function(D){if(Q(this)||Q(D))return S;if(Y(this))return Y(D)?H(this).j(H(D)):H(H(this).j(D));if(Y(D))return H(this.j(H(D)));if(this.l(z)<0&&D.l(z)<0)return _(this.m()*D.m());const I=this.g.length+D.g.length,R=[];for(var x=0;x<2*I;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(let V=0;V<D.g.length;V++){const O=this.i(x)>>>16,C=this.i(x)&65535,Ue=D.i(V)>>>16,rt=D.i(V)&65535;R[2*x+2*V]+=C*rt,ue(R,2*x+2*V),R[2*x+2*V+1]+=O*rt,ue(R,2*x+2*V+1),R[2*x+2*V+1]+=C*Ue,ue(R,2*x+2*V+1),R[2*x+2*V+2]+=O*Ue,ue(R,2*x+2*V+2)}for(D=0;D<I;D++)R[D]=R[2*D+1]<<16|R[2*D];for(D=I;D<2*I;D++)R[D]=0;return new h(R,0)};function ue(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function pe(D,I){this.g=D,this.h=I}function Te(D,I){if(Q(I))throw Error("division by zero");if(Q(D))return new pe(S,S);if(Y(D))return I=Te(H(D),I),new pe(H(I.g),H(I.h));if(Y(I))return I=Te(D,H(I)),new pe(H(I.g),I.h);if(D.g.length>30){if(Y(D)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=k,x=I;x.l(D)<=0;)R=he(R),x=he(x);var V=Ce(R,1),O=Ce(x,1);for(x=Ce(x,2),R=Ce(R,2);!Q(x);){var C=O.add(x);C.l(D)<=0&&(V=V.add(R),O=C),x=Ce(x,1),R=Ce(R,1)}return I=ce(D,V.j(I)),new pe(V,I)}for(V=S;D.l(I)>=0;){for(R=Math.max(1,Math.floor(D.m()/I.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),O=_(R),C=O.j(I);Y(C)||C.l(D)>0;)R-=x,O=_(R),C=O.j(I);Q(O)&&(O=k),V=V.add(O),D=ce(D,C)}return new pe(V,D)}r.B=function(D){return Te(this,D).h},r.and=function(D){const I=Math.max(this.g.length,D.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)&D.i(x);return new h(R,this.h&D.h)},r.or=function(D){const I=Math.max(this.g.length,D.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)|D.i(x);return new h(R,this.h|D.h)},r.xor=function(D){const I=Math.max(this.g.length,D.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)^D.i(x);return new h(R,this.h^D.h)};function he(D){const I=D.g.length+1,R=[];for(let x=0;x<I;x++)R[x]=D.i(x)<<1|D.i(x-1)>>>31;return new h(R,D.h)}function Ce(D,I){const R=I>>5;I%=32;const x=D.g.length-R,V=[];for(let O=0;O<x;O++)V[O]=I>0?D.i(O+R)>>>I|D.i(O+R+1)<<32-I:D.i(O+R);return new h(V,D.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,lv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ei=h}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uv,ka,cv,Nu,kd,hv,dv,fv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var L=u[T];if(!(L in y))break e;y=y[L]}u=u[u.length-1],T=y[u],p=p(T),p!=T&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var y=[],T;for(T in p)Object.prototype.hasOwnProperty.call(p,T)&&y.push([T,p[T]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,y){return u.call.apply(u.bind,arguments)}function _(u,p,y){return _=g,_.apply(null,arguments)}function w(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function S(u,p){function y(){}y.prototype=p.prototype,u.Z=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(T,L,B){for(var te=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)te[Ie-2]=arguments[Ie];return p.prototype[L].apply(T,te)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function z(u){const p=u.length;if(p>0){const y=Array(p);for(let T=0;T<p;T++)y[T]=u[T];return y}return[]}function Q(u,p){for(let T=1;T<arguments.length;T++){const L=arguments[T];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=u.length||0;const B=L.length||0;u.length=y+B;for(let te=0;te<B;te++)u[y+te]=L[te]}else u.push(L)}}class Y{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function H(u){h.setTimeout(()=>{throw u},0)}function ce(){var u=D;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ue{constructor(){this.h=this.g=null}add(p,y){const T=pe.get();T.set(p,y),this.h?this.h.next=T:this.g=T,this.h=T}}var pe=new Y(()=>new Te,u=>u.reset());class Te{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Ce=!1,D=new ue,I=()=>{const u=Promise.resolve(void 0);he=()=>{u.then(R)}};function R(){for(var u;u=ce();){try{u.h.call(u.g)}catch(y){H(y)}var p=pe;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Ce=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return u})();function C(u){return/^[\s\xa0]*$/.test(u)}function Ue(u,p){V.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}S(Ue,V),Ue.prototype.init=function(u,p){const y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),ht=0;function je(u,p,y,T,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!T,this.ha=L,this.key=++ht,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Z(u,p,y){for(const T in u)p.call(y,u[T],T,u)}function j(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function N(u){const p={};for(const y in u)p[y]=u[y];return p}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(u,p){let y,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(y in T)u[y]=T[y];for(let B=0;B<$.length;B++)y=$[B],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function fe(u){this.src=u,this.g={},this.h=0}fe.prototype.add=function(u,p,y,T,L){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const te=Ae(u,p,T,L);return te>-1?(p=u[te],y||(p.fa=!1)):(p=new je(p,this.src,B,!!T,L),p.fa=y,u.push(p)),p};function Re(u,p){const y=p.type;if(y in u.g){var T=u.g[y],L=Array.prototype.indexOf.call(T,p,void 0),B;(B=L>=0)&&Array.prototype.splice.call(T,L,1),B&&(ee(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ae(u,p,y,T){for(let L=0;L<u.length;++L){const B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==T)return L}return-1}var xe="closure_lm_"+(Math.random()*1e6|0),Pe={};function $e(u,p,y,T,L){if(Array.isArray(p)){for(let B=0;B<p.length;B++)$e(u,p[B],y,T,L);return null}return y=Oo(y),u&&u[rt]?u.J(p,y,m(T)?!!T.capture:!1,L):Ze(u,p,y,!1,T,L)}function Ze(u,p,y,T,L,B){if(!p)throw Error("Invalid event type");const te=m(L)?!!L.capture:!!L;let Ie=Is(u);if(Ie||(u[xe]=Ie=new fe(u)),y=Ie.add(p,y,T,te,B),y.proxy)return y;if(T=ws(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)O||(L=te),L===void 0&&(L=!1),u.addEventListener(p.toString(),T,L);else if(u.attachEvent)u.attachEvent(Ts(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ws(){function u(y){return p.call(u.src,u.listener,y)}const p=rl;return u}function xo(u,p,y,T,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)xo(u,p[B],y,T,L);else T=m(T)?!!T.capture:!!T,y=Oo(y),u&&u[rt]?(u=u.i,B=String(p).toString(),B in u.g&&(p=u.g[B],y=Ae(p,y,T,L),y>-1&&(ee(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete u.g[B],u.h--)))):u&&(u=Is(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ae(p,y,T,L)),(y=u>-1?p[u]:null)&&Lr(y))}function Lr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[rt])Re(p.i,u);else{var y=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(y,T,u.capture):p.detachEvent?p.detachEvent(Ts(y),T):p.addListener&&p.removeListener&&p.removeListener(T),(y=Is(p))?(Re(y,u),y.h==0&&(y.src=null,p[xe]=null)):ee(u)}}}function Ts(u){return u in Pe?Pe[u]:Pe[u]="on"+u}function rl(u,p){if(u.da)u=!0;else{p=new Ue(p,this);const y=u.listener,T=u.ha||u.src;u.fa&&Lr(u),u=y.call(T,p)}return u}function Is(u){return u=u[xe],u instanceof fe?u:null}var bi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oo(u){return typeof u=="function"?u:(u[bi]||(u[bi]=function(p){return u.handleEvent(p)}),u[bi])}function dt(){x.call(this),this.i=new fe(this),this.M=this,this.G=null}S(dt,x),dt.prototype[rt]=!0,dt.prototype.removeEventListener=function(u,p,y,T){xo(this,u,p,y,T)};function ot(u,p){var y,T=u.G;if(T)for(y=[];T;T=T.G)y.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new V(p,u);else if(p instanceof V)p.target=p.target||u;else{var L=p;p=new V(T,u),de(p,L)}L=!0;let B,te;if(y)for(te=y.length-1;te>=0;te--)B=p.g=y[te],L=In(B,T,!0,p)&&L;if(B=p.g=u,L=In(B,T,!0,p)&&L,L=In(B,T,!1,p)&&L,y)for(te=0;te<y.length;te++)B=p.g=y[te],L=In(B,T,!1,p)&&L}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const y=u.g[p];for(let T=0;T<y.length;T++)ee(y[T]);delete u.g[p],u.h--}}this.G=null},dt.prototype.J=function(u,p,y,T){return this.i.add(String(u),p,!1,y,T)},dt.prototype.K=function(u,p,y,T){return this.i.add(String(u),p,!0,y,T)};function In(u,p,y,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let B=0;B<p.length;++B){const te=p[B];if(te&&!te.da&&te.capture==y){const Ie=te.listener,at=te.ha||te.src;te.fa&&Re(u.i,te),L=Ie.call(at,T)!==!1&&L}}return L&&!T.defaultPrevented}function Mo(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function Lo(u){u.g=Mo(()=>{u.g=null,u.i&&(u.i=!1,Lo(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class il extends x{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(u){x.call(this),this.h=u,this.g={}}S(Fr,x);var Fo=[];function Ss(u){Z(u.g,function(p,y){this.g.hasOwnProperty(y)&&Lr(p)},u),u.g={}}Fr.prototype.N=function(){Fr.Z.N.call(this),Ss(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=h.JSON.stringify,sl=h.JSON.parse,xi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function zr(){}function ol(){}var Br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function As(){V.call(this,"d")}S(As,V);function Uo(){V.call(this,"c")}S(Uo,V);var Sn={},Cs=null;function jr(){return Cs=Cs||new dt}Sn.Ia="serverreachability";function Rs(u){V.call(this,Sn.Ia,u)}S(Rs,V);function dr(u){const p=jr();ot(p,new Rs(p))}Sn.STAT_EVENT="statevent";function fr(u,p){V.call(this,Sn.STAT_EVENT,u),this.stat=p}S(fr,V);function it(u){const p=jr();ot(p,new fr(p,u))}Sn.Ja="timingevent";function zo(u,p){V.call(this,Sn.Ja,u),this.size=p}S(zo,V);function $r(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Hr(){this.g=!0}Hr.prototype.ua=function(){this.g=!1};function al(u,p,y,T,L,B){u.info(function(){if(u.g)if(B){var te="",Ie=B.split("&");for(let He=0;He<Ie.length;He++){var at=Ie[He].split("=");if(at.length>1){const ft=at[0];at=at[1];const sn=ft.split("_");te=sn.length>=2&&sn[1]=="type"?te+(ft+"="+at+"&"):te+(ft+"=redacted&")}}}else te=null;else te=B;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+p+`
`+y+`
`+te})}function ll(u,p,y,T,L,B,te){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+te})}function Fn(u,p,y,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Oi(u,y)+(T?" "+T:"")})}function ul(u,p){u.info(function(){return"TIMEOUT: "+p})}Hr.prototype.info=function(){};function Oi(u,p){if(!u.g)return p;if(!p)return null;try{const B=JSON.parse(p);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var y=B[u];if(!(y.length<2)){var T=y[1];if(Array.isArray(T)&&!(T.length<1)){var L=T[0];if(L!="noop"&&L!="stop"&&L!="close")for(let te=1;te<T.length;te++)T[te]=""}}}}return Ur(B)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cl;function pr(){}S(pr,zr),pr.prototype.g=function(){return new XMLHttpRequest},cl=new pr;function Un(u){return encodeURIComponent(String(u))}function ks(u){var p=1;u=u.split(":");const y=[];for(;p>0&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function hn(u,p,y,T){this.j=u,this.i=p,this.l=y,this.S=T||1,this.V=new Fr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var dl={},Bo={};function An(u,p,y){u.M=1,u.A=gr(dn(p)),u.u=y,u.R=!0,jo(u,null)}function jo(u,p){u.F=Date.now(),Mi(u),u.B=dn(u.A);var y=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Jo(y.i,"t",T),u.C=0,y=u.j.L,u.h=new hl,u.g=Tl(u.j,y?p:null,!u.u),u.P>0&&(u.O=new il(_(u.Y,u,u.g),u.P)),p=u.V,y=u.g,T=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(Fo[0]=L.toString()),L=Fo);for(let B=0;B<L.length;B++){const te=$e(y,L[B],T||p.handleEvent,!1,p.h||p);if(!te)break;p.g[te.key]=te}p=u.J?N(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),dr(),al(u.i,u.v,u.B,u.l,u.S,u.u)}hn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Wn(u)==3?p.j():this.Y(u)},hn.prototype.Y=function(u){try{if(u==this.g)e:{const Ie=Wn(this.g),at=this.g.ya(),He=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||El(this.g)))){this.K||Ie!=4||at==7||(at==8||He<=0?dr(3):dr(2)),Ps(this);var p=this.g.ca();this.X=p;var y=fl(this);if(this.o=p==200,ll(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var T,L=this.g;if((T=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(T)){var B=T;break t}}B=null}if(u=B)Fn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,it(12),mr(this),Li(this);break e}}if(this.R){u=!0;let ft;for(;!this.K&&this.C<y.length;)if(ft=ml(this,y),ft==Bo){Ie==4&&(this.m=4,it(14),u=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==dl){this.m=4,it(15),Fn(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else Fn(this.i,this.l,ft,null),Ge(this,ft);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,it(16),u=!1),this.o=this.o&&u,!u)Fn(this.i,this.l,y,"[Invalid Chunked Response]"),mr(this),Li(this);else if(y.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Wi(te),te.P=!0,it(11))}}else Fn(this.i,this.l,y,null),Ge(this,y);Ie==4&&mr(this),this.o&&!this.K&&(Ie==4?Us(this.j,this):(this.o=!1,Mi(this)))}else ea(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),mr(this),Li(this)}}}catch{}finally{}};function fl(u){if(!pl(u))return u.g.la();const p=El(u.g);if(p==="")return"";let y="";const T=p.length,L=Wn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return mr(u),Li(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,y+=u.h.i.decode(p[B],{stream:!(L&&B==T-1)});return p.length=0,u.h.g+=y,u.C=0,u.h.g}function pl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function ml(u,p){var y=u.C,T=p.indexOf(`
`,y);return T==-1?Bo:(y=Number(p.substring(y,T)),isNaN(y)?dl:(T+=1,T+y>p.length?Bo:(p=p.slice(T,T+y),u.C=T+y,p)))}hn.prototype.cancel=function(){this.K=!0,mr(this)};function Mi(u){u.T=Date.now()+u.H,$o(u,u.H)}function $o(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=$r(_(u.aa,u),p)}function Ps(u){u.D&&(h.clearTimeout(u.D),u.D=null)}hn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(ul(this.i,this.B),this.M!=2&&(dr(),it(17)),mr(this),this.m=2,Li(this)):$o(this,this.T-u)};function Li(u){u.j.I==0||u.K||Us(u.j,u)}function mr(u){Ps(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,Ss(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function Ge(u,p){try{var y=u.j;if(y.I!=0&&(y.g==u||qo(y.h,u))){if(!u.L&&qo(y.h,u)&&y.I==3){try{var T=y.Ba.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)Fs(y),nn(y);else break e;Qn(y),it(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=$r(_(y.Va,y),6e3));Fi(y.h)<=1&&y.ta&&(y.ta=void 0)}else rn(y,11)}else if((u.L||y.g==u)&&Fs(y),!C(p))for(L=y.Ba.g.parse(p),p=0;p<L.length;p++){let He=L[p];const ft=He[0];if(!(ft<=y.K))if(y.K=ft,He=He[1],y.I==2)if(He[0]=="c"){y.M=He[1],y.ba=He[2];const sn=He[3];sn!=null&&(y.ka=sn,y.j.info("VER="+y.ka));const wr=He[4];wr!=null&&(y.za=wr,y.j.info("SVER="+y.za));const Yn=He[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(T=1.5*Yn,y.O=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Xn=u.g;if(Xn){const js=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var B=T.h;B.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ds(B,B.h),B.h=null))}if(T.G){const ra=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(T.wa=ra,ze(T.J,T.G,ra))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),T=y;var te=u;if(T.na=na(T,T.L?T.ba:null,T.W),te.L){Ui(T.h,te);var Ie=te,at=T.O;at&&(Ie.H=at),Ie.D&&(Ps(Ie),Mi(Ie)),T.g=te}else bt(T);y.i.length>0&&Er(y)}else He[0]!="stop"&&He[0]!="close"||rn(y,7);else y.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?rn(y,7):Ms(y):He[0]!="noop"&&y.l&&y.l.qa(He),y.A=0)}}dr(4)}catch{}}var Dc=class{constructor(u,p){this.g=u,this.map=p}};function Ns(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ho(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fi(u){return u.h?1:u.g?u.g.size:0}function qo(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ds(u,p){u.g?u.g.add(p):u.h=p}function Ui(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ns.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zt(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.G);return p}return z(u.i)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(u,p){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const T=u[y].indexOf("=");let L,B=null;T>=0?(L=u[y].substring(0,T),B=u[y].substring(T+1)):L=u[y],p(L,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function zn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof zn?(this.l=u.l,zi(this,u.j),this.o=u.o,this.g=u.g,Bn(this,u.u),this.h=u.h,Gr(this,Zo(u.i)),this.m=u.m):u&&(p=String(u).match(gl))?(this.l=!1,zi(this,p[1]||"",!0),this.o=Bi(p[2]||""),this.g=Bi(p[3]||"",!0),Bn(this,p[4]),this.h=Bi(p[5]||"",!0),Gr(this,p[6]||"",!0),this.m=Bi(p[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}zn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(ji(p,Go,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ji(p,Go,!0),"@"),u.push(Un(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ji(y,y.charAt(0)=="/"?$i:Ko,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ji(y,Qo)),u.join("")},zn.prototype.resolve=function(u){const p=dn(this);let y=!!u.j;y?zi(p,u.j):y=!!u.o,y?p.o=u.o:y=!!u.g,y?p.g=u.g:y=u.u!=null;var T=u.h;if(y)Bn(p,u.u);else if(y=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var L=p.h.lastIndexOf("/");L!=-1&&(T=p.h.slice(0,L+1)+T)}if(L=T,L==".."||L==".")T="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){T=L.lastIndexOf("/",0)==0,L=L.split("/");const B=[];for(let te=0;te<L.length;){const Ie=L[te++];Ie=="."?T&&te==L.length&&B.push(""):Ie==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&te==L.length&&B.push("")):(B.push(Ie),T=!0)}T=B.join("/")}else T=L}return y?p.h=T:y=u.i.toString()!=="",y?Gr(p,Zo(u.i)):y=!!u.m,y&&(p.m=u.m),p};function dn(u){return new zn(u)}function zi(u,p,y){u.j=y?Bi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Bn(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Gr(u,p,y){p instanceof Oe?(u.i=p,bs(u.i,u.l)):(y||(p=ji(p,Vc)),u.i=new Oe(p,u.l))}function ze(u,p,y){u.i.set(p,y)}function gr(u){return ze(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Bi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ji(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Wo),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Wo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Go=/[#\/\?@]/g,Ko=/[#\?:]/g,$i=/[#\?]/g,Vc=/[#\?@]/g,Qo=/#/g;function Oe(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function jn(u){u.g||(u.g=new Map,u.h=0,u.i&&en(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Oe.prototype,r.add=function(u,p){jn(this),this.i=null,u=$n(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Yo(u,p){jn(u),p=$n(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Vs(u,p){return jn(u),p=$n(u,p),u.g.has(p)}r.forEach=function(u,p){jn(this),this.g.forEach(function(y,T){y.forEach(function(L){u.call(p,L,T,this)},this)},this)};function Xo(u,p){jn(u);let y=[];if(typeof p=="string")Vs(u,p)&&(y=y.concat(u.g.get($n(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)y=y.concat(u[p]);return y}r.set=function(u,p){return jn(this),this.i=null,u=$n(this,u),Vs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=Xo(this,u),u.length>0?String(u[0]):p):p};function Jo(u,p,y){Yo(u,p),y.length>0&&(u.i=null,u.g.set($n(u,p),z(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let T=0;T<p.length;T++){var y=p[T];const L=Un(y);y=Xo(this,y);for(let B=0;B<y.length;B++){let te=L;y[B]!==""&&(te+="="+Un(y[B])),u.push(te)}}return this.i=u.join("&")};function Zo(u){const p=new Oe;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function $n(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function bs(u,p){p&&!u.j&&(jn(u),u.i=null,u.g.forEach(function(y,T){const L=T.toLowerCase();T!=L&&(Yo(this,T),Jo(this,L,y))},u)),u.j=p}function Hn(u,p){const y=new Hr;if(h.Image){const T=new Image;T.onload=w(Ct,y,"TestLoadImage: loaded",!0,p,T),T.onerror=w(Ct,y,"TestLoadImage: error",!1,p,T),T.onabort=w(Ct,y,"TestLoadImage: abort",!1,p,T),T.ontimeout=w(Ct,y,"TestLoadImage: timeout",!1,p,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function qn(u,p){const y=new Hr,T=new AbortController,L=setTimeout(()=>{T.abort(),Ct(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(L),B.ok?Ct(y,"TestPingServer: ok",!0,p):Ct(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Ct(y,"TestPingServer: error",!1,p)})}function Ct(u,p,y,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(y)}catch{}}function Hi(){this.g=new xi}function yr(u){this.i=u.Sb||null,this.h=u.ab||!1}S(yr,zr),yr.prototype.g=function(){return new tn(this.i,this.h)};function tn(u,p){dt.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(tn,dt),r=tn.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Cn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function yl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Kr(this):Cn(this),this.readyState==3&&yl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Kr(this))},r.Na=function(u){this.g&&(this.response=u,Kr(this))},r.ga=function(){this.g&&Kr(this)};function Kr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Cn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Cn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _l(u){let p="";return Z(u,function(y,T){p+=T,p+=":",p+=y,p+=`\r
`}),p}function xs(u,p,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=_l(y),typeof u=="string"?y!=null&&Un(y):ze(u,p,y))}function qe(u){dt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(qe,dt);var vl=/^https?$/i,bc=["POST","PUT"];r=qe.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cl.g(),this.g.onreadystatechange=k(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Qr(this,B);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)y.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())y.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(bc,p,void 0)>=0)||T||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of y)this.g.setRequestHeader(B,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){Qr(this,B)}};function Qr(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,Yr(u),vr(u)}function Yr(u){u.A||(u.A=!0,ot(u,"complete"),ot(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ot(this,"complete"),ot(this,"abort"),vr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vr(this,!0)),qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?_r(this):this.Xa())},r.Xa=function(){_r(this)};function _r(u){if(u.h&&typeof l<"u"){if(u.v&&Wn(u)==4)setTimeout(u.Ca.bind(u),0);else if(ot(u,"readystatechange"),Wn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var T;if(T=B===0){let te=String(u.D).match(gl)[1]||null;!te&&h.self&&h.self.location&&(te=h.self.location.protocol.slice(0,-1)),T=!vl.test(te?te.toLowerCase():"")}y=T}if(y)ot(u,"complete"),ot(u,"success");else{u.o=6;try{var L=Wn(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",Yr(u)}}finally{vr(u)}}}}function vr(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,p||ot(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Wn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Wn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),sl(p)}};function El(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(u){const p={};u=(u.g&&Wn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(C(u[T]))continue;var y=ks(u[T]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}j(p,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Os(u){this.za=0,this.i=[],this.j=new Hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,u),this.Za=Gn("retryDelaySeedMs",1e4,u),this.Ta=Gn("forwardChannelMaxRetries",2,u),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Ns(u&&u.concurrentRequestLimit),this.Ba=new Hi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Os.prototype,r.ka=8,r.I=1,r.connect=function(u,p,y,T){it(0),this.W=u,this.H=p||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.J=na(this,null,this.W),Er(this)};function Ms(u){if(Ls(u),u.I==3){var p=u.V++,y=dn(u.J);if(ze(y,"SID",u.M),ze(y,"RID",p),ze(y,"TYPE","terminate"),Kn(u,y),p=new hn(u,u.j,p),p.M=2,p.A=gr(dn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Tl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Mi(p)}Gi(u)}function nn(u){u.g&&(Wi(u),u.g.cancel(),u.g=null)}function Ls(u){nn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Fs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Er(u){if(!Ho(u.h)&&!u.m){u.m=!0;var p=u.Ea;he||I(),Ce||(he(),Ce=!0),D.add(p,u),u.D=0}}function wl(u,p){return Fi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=$r(_(u.Ea,u,p),zs(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new hn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=N(B),de(B,this.U)):B=this.U),this.u!==null||this.R||(L.J=B,B=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ta(this,L,p),y=dn(this.J),ze(y,"RID",u),ze(y,"CVER",22),this.G&&ze(y,"X-HTTP-Session-Id",this.G),Kn(this,y),B&&(this.R?p="headers="+Un(_l(B))+"&"+p:this.u&&xs(y,this.u,B)),Ds(this.h,L),this.Ra&&ze(y,"TYPE","init"),this.S?(ze(y,"$req",p),ze(y,"SID","null"),L.U=!0,An(L,y,null)):An(L,y,p),this.I=2}}else this.I==3&&(u?qi(this,u):this.i.length==0||Ho(this.h)||qi(this))};function qi(u,p){var y;p?y=p.l:y=u.V++;const T=dn(u.J);ze(T,"SID",u.M),ze(T,"RID",y),ze(T,"AID",u.K),Kn(u,T),u.u&&u.o&&xs(T,u.u,u.o),y=new hn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),p&&(u.i=p.G.concat(u.i)),p=ta(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ds(u.h,y),An(y,T,p)}function Kn(u,p){u.H&&Z(u.H,function(y,T){ze(p,T,y)}),u.l&&Z({},function(y,T){ze(p,T,y)})}function ta(u,p,y){y=Math.min(u.i.length,y);const T=u.l?_(u.l.Ka,u.l,u):null;e:{var L=u.i;let Ie=-1;for(;;){const at=["count="+y];Ie==-1?y>0?(Ie=L[0].g,at.push("ofs="+Ie)):Ie=0:at.push("ofs="+Ie);let He=!0;for(let ft=0;ft<y;ft++){var B=L[ft].g;const sn=L[ft].map;if(B-=Ie,B<0)Ie=Math.max(0,L[ft].g-100),He=!1;else try{B="req"+B+"_"||"";try{var te=sn instanceof Map?sn:Object.entries(sn);for(const[wr,Yn]of te){let Xn=Yn;m(Yn)&&(Xn=Ur(Yn)),at.push(B+wr+"="+encodeURIComponent(Xn))}}catch(wr){throw at.push(B+"type="+encodeURIComponent("_badmap")),wr}}catch{T&&T(sn)}}if(He){te=at.join("&");break e}}te=void 0}return u=u.i.splice(0,y),p.G=u,te}function bt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;he||I(),Ce||(he(),Ce=!0),D.add(p,u),u.A=0}}function Qn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=$r(_(u.Da,u),zs(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Xr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=$r(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),nn(this),Xr(this))};function Wi(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function Xr(u){u.g=new hn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=dn(u.na);ze(p,"RID","rpc"),ze(p,"SID",u.M),ze(p,"AID",u.K),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&ze(p,"TO",u.ia),ze(p,"TYPE","xmlhttp"),Kn(u,p),u.u&&u.o&&xs(p,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=gr(dn(p)),y.u=null,y.R=!0,jo(y,u)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),Qn(this),it(19))};function Fs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Us(u,p){var y=null;if(u.g==p){Fs(u),Wi(u),u.g=null;var T=2}else if(qo(u.h,p))y=p.G,Ui(u.h,p),T=1;else return;if(u.I!=0){if(p.o)if(T==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var L=u.D;T=jr(),ot(T,new zo(T,y)),Er(u)}else bt(u);else if(L=p.m,L==3||L==0&&p.X>0||!(T==1&&wl(u,p)||T==2&&Qn(u)))switch(y&&y.length>0&&(p=u.h,p.i=p.i.concat(y)),L){case 1:rn(u,5);break;case 4:rn(u,10);break;case 3:rn(u,6);break;default:rn(u,2)}}}function zs(u,p){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*p}function rn(u,p){if(u.j.info("Error code "+p),p==2){var y=_(u.bb,u),T=u.Ua;const L=!T;T=new zn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||zi(T,"https"),gr(T),L?Hn(T.toString(),y):qn(T.toString(),y)}else it(2);u.I=0,u.l&&u.l.pa(p),Gi(u),Ls(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Gi(u){if(u.I=0,u.ja=[],u.l){const p=Zt(u.h);(p.length!=0||u.i.length!=0)&&(Q(u.ja,p),Q(u.ja,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.oa()}}function na(u,p,y){var T=y instanceof zn?dn(y):new zn(y);if(T.g!="")p&&(T.g=p+"."+T.g),Bn(T,T.u);else{var L=h.location;T=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const B=new zn(null);T&&zi(B,T),p&&(B.g=p),L&&Bn(B,L),y&&(B.h=y),T=B}return y=u.G,p=u.wa,y&&p&&ze(T,y,p),ze(T,"VER",u.ka),Kn(u,T),T}function Tl(u,p,y){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new qe(new yr({ab:y})):new qe(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}r=Il.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Bs(){}Bs.prototype.g=function(u,p){return new Rt(u,p)};function Rt(u,p){dt.call(this),this.g=new Os(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!C(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!C(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Jr(this)}S(Rt,dt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ms(this.g)},Rt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Ur(u),u=y);p.i.push(new Dc(p.Ya++,u)),p.I==3&&Er(p)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ms(this.g),delete this.g,Rt.Z.N.call(this)};function Sl(u){As.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}S(Sl,As);function Al(){Uo.call(this),this.status=1}S(Al,Uo);function Jr(u){this.g=u}S(Jr,Il),Jr.prototype.ra=function(){ot(this.g,"a")},Jr.prototype.qa=function(u){ot(this.g,new Sl(u))},Jr.prototype.pa=function(u){ot(this.g,new Al)},Jr.prototype.oa=function(){ot(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,fv=function(){return new Bs},dv=function(){return jr()},hv=Sn,kd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,Nu=qr,Wr.COMPLETE="complete",cv=Wr,ol.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",dt.prototype.listen=dt.prototype.J,ka=ol,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,uv=qe}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const Gg="@firebase/firestore",Kg="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new oc("@firebase/firestore");function uo(){return ms.logLevel}function re(r,...e){if(ms.logLevel<=De.DEBUG){const t=e.map(ff);ms.debug(`Firestore (${No}): ${r}`,...t)}}function Or(r,...e){if(ms.logLevel<=De.ERROR){const t=e.map(ff);ms.error(`Firestore (${No}): ${r}`,...t)}}function wo(r,...e){if(ms.logLevel<=De.WARN){const t=e.map(ff);ms.warn(`Firestore (${No}): ${r}`,...t)}}function ff(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,pv(r,s,t)}function pv(r,e,t){let s=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Or(s),new Error(s)}function Be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||pv(e,o,s)}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Ln{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class dA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class fA{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new mv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class pA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new pA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=yA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function Pd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return pd(o)===pd(l)?Ve(o,l):pd(o)?1:-1}return Ve(r.length,e.length)}const _A=55296,vA=57343;function pd(r){const e=r.charCodeAt(0);return e>=_A&&e<=vA}function To(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="__name__";class nr{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ve(e.length,t.length)}static compareSegments(e,t){const s=nr.isNumericId(e),o=nr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):Pd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class Ye extends nr{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const EA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends nr{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return EA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yg}static keyField(){return new Dt([Yg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ye.fromString(e))}static fromName(e){return new me(Ye.fromString(e).popFirst(5))}static empty(){return new me(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(r,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function wA(r,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Xg(r){if(!me.isDocumentKey(r))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Jg(r){if(me.isDocumentKey(r))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function wn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mf(r);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ya(r,e){if(!yv(r))throw new ae(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ae(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=-62135596800,ey=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ey);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zg)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ey}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ya(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:gt("string",Xe._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Xe(0,0))}static max(){return new we(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=-1;function TA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new Si(o,me.empty(),e)}function IA(r){return new Si(r.readTime,r.key,za)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(we.min(),me.empty(),za)}static max(){return new Si(we.max(),me.empty(),za)}}function SA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(r.documentKey,e.documentKey),t!==0?t:Ve(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==AA)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function RA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}dc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=-1;function fc(r){return r==null}function Wu(r){return r===0&&1/r==-1/0}function kA(r){return typeof r=="number"&&Number.isInteger(r)&&!Wu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="";function PA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ty(e)),e=NA(r.get(t),e);return ty(e)}function NA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case _v:t+="";break;default:t+=l}}return t}function ty(r){return r+_v+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function vv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ry(this.data.getIterator())}getIteratorFrom(e){return new ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new un([])}unionWith(e){let t=new wt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Ev("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=DA.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ci(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="server_timestamp",Tv="__type__",Iv="__previous_value__",Sv="__local_write_time__";function yf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Tv])==null?void 0:s.stringValue)===wv}function pc(r){const e=r.mapValue.fields[Iv];return yf(e)?pc(e):e}function Ba(r){const e=Ai(r.mapValue.fields[Sv].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t,s,o,l,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Gu="(default)";class ja{constructor(e,t){this.projectId=e,this.database=t||Gu}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===Gu}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="__type__",bA="__max__",Tu={mapValue:{}},Cv="__vector__",Ku="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?yf(r)?4:OA(r)?9007199254740991:xA(r)?10:11:_e(28295,{value:r})}function cr(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ba(r).isEqual(Ba(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),m=Ai(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),m=ut(l.doubleValue);return h===m?Wu(h)===Wu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(ny(h)!==ny(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!cr(h[g],m[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function $a(r,e){return(r.values||[]).find((t=>cr(t,e)))!==void 0}function Io(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=ut(l.integerValue||l.doubleValue),g=ut(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return iy(r.timestampValue,e.timestampValue);case 4:return iy(Ba(r),Ba(e));case 5:return Pd(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=Ci(l),g=Ci(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Ve(m[_],g[_]);if(w!==0)return w}return Ve(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Ve(ut(l.latitude),ut(h.latitude));return m!==0?m:Ve(ut(l.longitude),ut(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return sy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var k,z,Q,Y;const m=l.fields||{},g=h.fields||{},_=(k=m[Ku])==null?void 0:k.arrayValue,w=(z=g[Ku])==null?void 0:z.arrayValue,S=Ve(((Q=_==null?void 0:_.values)==null?void 0:Q.length)||0,((Y=w==null?void 0:w.values)==null?void 0:Y.length)||0);return S!==0?S:sy(_,w)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Tu.mapValue&&h===Tu.mapValue)return 0;if(l===Tu.mapValue)return 1;if(h===Tu.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const k=Pd(g[S],w[S]);if(k!==0)return k;const z=Io(m[g[S]],_[w[S]]);if(z!==0)return z}return Ve(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function iy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const t=Ai(r),s=Ai(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function sy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Io(t[o],s[o]);if(l)return l}return Ve(t.length,s.length)}function So(r){return Nd(r)}function Nd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ai(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ci(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return me.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Nd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Nd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Du(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(r);return e?16+Du(e):16;case 5:return 2*r.stringValue.length;case 6:return Ci(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Du(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Di(s.fields,((l,h)=>{o+=l.length+Du(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Dd(r){return!!r&&"integerValue"in r}function _f(r){return!!r&&"arrayValue"in r}function oy(r){return!!r&&"nullValue"in r}function ay(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Vu(r){return!!r&&"mapValue"in r}function xA(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Av])==null?void 0:s.stringValue)===Cv}function xa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=xa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(r.arrayValue.values[t]);return e}return{...r}}function OA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===bA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Vu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=xa(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Vu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Vu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Jt(xa(this.value))}}function Rv(r){const e=[];return Di(r.fields,((t,s)=>{const o=new Dt([t]);if(Vu(s)){const l=Rv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,we.min(),we.min(),we.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,we.min(),we.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,we.min(),we.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function ly(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function uy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!cr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t="asc"){this.field=e,this.dir=t}}function MA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{}class Et extends kv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new FA(e,t,s):t==="array-contains"?new BA(e,s):t==="in"?new jA(e,s):t==="not-in"?new $A(e,s):t==="array-contains-any"?new HA(e,s):new Et(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new UA(e,s):new zA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends kv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new hr(e,t)}matches(e){return Pv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pv(r){return r.op==="and"}function Nv(r){return LA(r)&&Pv(r)}function LA(r){for(const e of r.filters)if(e instanceof hr)return!1;return!0}function Vd(r){if(r instanceof Et)return r.field.canonicalString()+r.op.toString()+So(r.value);if(Nv(r))return r.filters.map((e=>Vd(e))).join(",");{const e=r.filters.map((t=>Vd(t))).join(",");return`${r.op}(${e})`}}function Dv(r,e){return r instanceof Et?(function(s,o){return o instanceof Et&&s.op===o.op&&s.field.isEqual(o.field)&&cr(s.value,o.value)})(r,e):r instanceof hr?(function(s,o){return o instanceof hr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&Dv(h,o.filters[m])),!0):!1})(r,e):void _e(19439)}function Vv(r){return r instanceof Et?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(r):r instanceof hr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vv).join(" ,")+"}"})(r):"Filter"}class FA extends Et{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class UA extends Et{constructor(e,t){super(e,"in",t),this.keys=bv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zA extends Et{constructor(e,t){super(e,"not-in",t),this.keys=bv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>me.fromName(s.referenceValue)))}class BA extends Et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _f(t)&&$a(t.arrayValue,this.value)}}class jA extends Et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class $A extends Et{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$a(this.value.arrayValue,t)}}class HA extends Et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_f(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$a(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Te=null}}function cy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new qA(r,e,t,s,o,l,h)}function vf(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Vd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Te=t}return e.Te}function Ef(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!MA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Dv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!uy(r.startAt,e.startAt)&&uy(r.endAt,e.endAt)}function bd(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function WA(r,e,t,s,o,l,h,m){return new mc(r,e,t,s,o,l,h,m)}function gc(r){return new mc(r)}function hy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function GA(r){return r.collectionGroup!==null}function Oa(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new wt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Yu(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new Yu(Dt.keyField(),s))}return e.Ie}function ir(r){const e=Se(r);return e.Ee||(e.Ee=KA(e,Oa(r))),e.Ee}function KA(r,e){if(r.limitType==="F")return cy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Yu(o.field,l)}));const t=r.endAt?new Qu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qu(r.startAt.position,r.startAt.inclusive):null;return cy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function xd(r,e,t){return new mc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function yc(r,e){return Ef(ir(r),ir(e))&&r.limitType===e.limitType}function xv(r){return`${vf(ir(r))}|lt:${r.limitType}`}function co(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Vv(o))).join(", ")}]`),fc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(ir(r))}; limitType=${r.limitType})`}function _c(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Oa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=ly(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Oa(s),o)||s.endAt&&!(function(h,m,g){const _=ly(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Oa(s),o))})(r,e)}function QA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ov(r){return(e,t)=>{let s=!1;for(const o of Oa(r)){const l=YA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function YA(r,e,t){const s=r.field.isKeyField()?me.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?Io(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return vv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new nt(me.comparator);function Mr(){return XA}const Mv=new nt(me.comparator);function Pa(...r){let e=Mv;for(const t of r)e=e.insert(t.key,t);return e}function Lv(r){let e=Mv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function us(){return Ma()}function Fv(){return Ma()}function Ma(){return new vs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const JA=new nt(me.comparator),ZA=new wt(me.comparator);function be(...r){let e=ZA;for(const t of r)e=e.add(t);return e}const eC=new wt(Ve);function tC(){return eC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function Uv(r){return{integerValue:""+r}}function nC(r,e){return kA(e)?Uv(e):wf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this._=void 0}}function rC(r,e,t){return r instanceof Xu?(function(o,l){const h={fields:{[Tv]:{stringValue:wv},[Sv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&yf(l)&&(l=pc(l)),l&&(h.fields[Iv]=l),{mapValue:h}})(t,e):r instanceof Ha?Bv(r,e):r instanceof qa?jv(r,e):(function(o,l){const h=zv(o,l),m=dy(h)+dy(o.Ae);return Dd(h)&&Dd(o.Ae)?Uv(m):wf(o.serializer,m)})(r,e)}function iC(r,e,t){return r instanceof Ha?Bv(r,e):r instanceof qa?jv(r,e):t}function zv(r,e){return r instanceof Ju?(function(s){return Dd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Xu extends vc{}class Ha extends vc{constructor(e){super(),this.elements=e}}function Bv(r,e){const t=$v(e);for(const s of r.elements)t.some((o=>cr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class qa extends vc{constructor(e){super(),this.elements=e}}function jv(r,e){let t=$v(e);for(const s of r.elements)t=t.filter((o=>!cr(o,s)));return{arrayValue:{values:t}}}class Ju extends vc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function dy(r){return ut(r.integerValue||r.doubleValue)}function $v(r){return _f(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function sC(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ha&&o instanceof Ha||s instanceof qa&&o instanceof qa?To(s.elements,o.elements,cr):s instanceof Ju&&o instanceof Ju?cr(s.Ae,o.Ae):s instanceof Xu&&o instanceof Xu})(r.transform,e.transform)}class oC{constructor(e,t){this.version=e,this.transformResults=t}}class Tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ec{}function Hv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Tf(r.key,Tn.none()):new Xa(r.key,r.data,Tn.none());{const t=r.data,s=Jt.empty();let o=new wt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Vi(r.key,s,new un(o.toArray()),Tn.none())}}function aC(r,e,t){r instanceof Xa?(function(o,l,h){const m=o.value.clone(),g=py(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Vi?(function(o,l,h){if(!bu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=py(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(qv(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function La(r,e,t,s){return r instanceof Xa?(function(l,h,m,g){if(!bu(l.precondition,h))return m;const _=l.value.clone(),w=my(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Vi?(function(l,h,m,g){if(!bu(l.precondition,h))return m;const _=my(l.fieldTransforms,g,h),w=h.data;return w.setAll(qv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(r,e,t,s):(function(l,h,m){return bu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function lC(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=zv(s.transform,o||null);l!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,l))}return t||null}function fy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((l,h)=>sC(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Xa extends Ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Vi extends Ec{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function qv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function py(r,e,t){const s=new Map;Be(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,iC(h,m,t[o]))}return s}function my(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,rC(l,h,e))}return s}class Tf extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uC extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&aC(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Fv();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=Hv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>fy(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>fy(t,s)))}}class If{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return JA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new If(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Me;function fC(r){switch(r){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function Wv(r){if(r===void 0)return Or("GRPC error has no .code"),W.UNKNOWN;switch(r){case mt.OK:return W.OK;case mt.CANCELLED:return W.CANCELLED;case mt.UNKNOWN:return W.UNKNOWN;case mt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case mt.INTERNAL:return W.INTERNAL;case mt.UNAVAILABLE:return W.UNAVAILABLE;case mt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case mt.NOT_FOUND:return W.NOT_FOUND;case mt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case mt.ABORTED:return W.ABORTED;case mt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case mt.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:r})}}(Me=mt||(mt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Ei([4294967295,4294967295],0);function gy(r){const e=pC().encode(r),t=new lv;return t.update(e),new Uint8Array(t.digest())}function yy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ei([t,s],0),new Ei([o,l],0)]}class Sf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ei.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ei.fromNumber(s)));return o.compare(mC)===1&&(o=new Ei([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=gy(e),[s,o]=yy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Sf(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=gy(e),[s,o]=yy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wc(we.min(),o,new nt(Ve),Mr(),be())}}class Ja{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ja(s,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Gv{constructor(e,t){this.targetId=e,this.Ce=t}}class Kv{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class _y{constructor(){this.ve=0,this.Fe=vy(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),s=be();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:l})}})),new Ja(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=vy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class gC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mr(),this.Je=Iu(),this.He=Iu(),this.Ye=new nt(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(bd(l))if(s===0){const h=new me(l.path);this.et(t,h,zt.newNoDocument(h,we.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Ci(s).toUint8Array()}catch(g){if(g instanceof Ev)return wo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Sf(h,o,l)}catch(g){return wo(g instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const m=this.ot(h);if(m){if(l.current&&bd(m.target)){const g=new me(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=be();this.He.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new wc(e,t,this.Ye,this.je,s);return this.je=Mr(),this.Je=Iu(),this.He=Iu(),this.Ye=new nt(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new _y,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new wt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new wt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _y),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Iu(){return new nt(me.comparator)}function vy(){return new nt(me.comparator)}const yC={asc:"ASCENDING",desc:"DESCENDING"},_C={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vC={and:"AND",or:"OR"};class EC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Od(r,e){return r.useProto3Json||fc(e)?e:{value:e}}function Zu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function wC(r,e){return Zu(r,e.toTimestamp())}function sr(r){return Be(!!r,49232),we.fromTimestamp((function(t){const s=Ai(t);return new Xe(s.seconds,s.nanos)})(r))}function Af(r,e){return Md(r,e).canonicalString()}function Md(r,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Yv(r){const e=Ye.fromString(r);return Be(tE(e),10190,{key:e.toString()}),e}function Ld(r,e){return Af(r.databaseId,e.path)}function md(r,e){const t=Yv(e);if(t.get(1)!==r.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new me(Jv(t))}function Xv(r,e){return Af(r.databaseId,e)}function TC(r){const e=Yv(r);return e.length===4?Ye.emptyPath():Jv(e)}function Fd(r){return new Ye(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Jv(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ey(r,e,t){return{name:Ld(r,e),fields:t.value.mapValue.fields}}function IC(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Be(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?W.UNKNOWN:Wv(_.code);return new ae(w,_.message||"")})(h);t=new Kv(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=md(r,s.document.name),l=sr(s.document.updateTime),h=s.document.createTime?sr(s.document.createTime):we.min(),m=new Jt({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,l,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new xu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=md(r,s.document),l=s.readTime?sr(s.readTime):we.min(),h=zt.newNoDocument(o,l),m=s.removedTargetIds||[];t=new xu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=md(r,s.document),l=s.removedTargetIds||[];t=new xu([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new dC(o,l),m=s.targetId;t=new Gv(m,h)}}return t}function SC(r,e){let t;if(e instanceof Xa)t={update:Ey(r,e.key,e.value)};else if(e instanceof Tf)t={delete:Ld(r,e.key)};else if(e instanceof Vi)t={update:Ey(r,e.key,e.data),updateMask:bC(e.fieldMask)};else{if(!(e instanceof uC))return _e(16599,{Vt:e.type});t={verify:Ld(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof Xu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ju)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:wC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function AC(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?sr(o.updateTime):sr(l);return h.isEqual(we.min())&&(h=sr(l)),new oC(h,o.transformResults||[])})(t,e)))):[]}function CC(r,e){return{documents:[Xv(r,e.path)]}}function RC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Xv(r,o);const l=(function(_){if(_.length!==0)return eE(hr.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(k){return{field:ho(k.field),direction:NC(k.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Od(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function kC(r){let e=TC(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(S){const k=Zv(S);return k instanceof hr&&Nv(k)?k.getFilters():[k]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((k=>(function(Q){return new Yu(fo(Q.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(k)))})(t.orderBy));let m=null;t.limit&&(m=(function(S){let k;return k=typeof S=="object"?S.value:S,fc(k)?null:k})(t.limit));let g=null;t.startAt&&(g=(function(S){const k=!!S.before,z=S.values||[];return new Qu(z,k)})(t.startAt));let _=null;return t.endAt&&(_=(function(S){const k=!S.before,z=S.values||[];return new Qu(z,k)})(t.endAt)),WA(e,o,h,l,m,"F",g,_)}function PC(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=fo(t.unaryFilter.field);return Et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(t.unaryFilter.field);return Et.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=fo(t.unaryFilter.field);return Et.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=fo(t.unaryFilter.field);return Et.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Et.create(fo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return hr.create(t.compositeFilter.filters.map((s=>Zv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function NC(r){return yC[r]}function DC(r){return _C[r]}function VC(r){return vC[r]}function ho(r){return{fieldPath:r.canonicalString()}}function fo(r){return Dt.fromServerFormat(r.fieldPath)}function eE(r){return r instanceof Et?(function(t){if(t.op==="=="){if(ay(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NAN"}};if(oy(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ay(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NAN"}};if(oy(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(t.field),op:DC(t.op),value:t.value}}})(r):r instanceof hr?(function(t){const s=t.getFilters().map((o=>eE(o)));return s.length===1?s[0]:{compositeFilter:{op:VC(t.op),filters:s}}})(r):_e(54877,{filter:r})}function bC(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function tE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,s,o,l=we.min(),h=we.min(),m=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.yt=e}}function OC(r){const e=kC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.Cn=new LC}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Si.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class LC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(Ye.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nE=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(nE,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ao(0)}static cr(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="LruGarbageCollector",FC=1048576;function Iy([r,e],[t,s]){const o=Ve(r,t);return o===0?Ve(e,s):o}class UC{constructor(e){this.Ir=e,this.buffer=new wt(Iy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Iy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(Ty,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vo(t)?re(Ty,"Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Vr(3e5)}))}}class BC{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(dc.ce);const s=new UC(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(wy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wy):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,l,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(e,s,t)))).next((S=>(l=S,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(_=Date.now(),uo()<=De.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:S}))))}}function jC(r,e){return new BC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.changes=new vs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&La(s.mutation,o,un.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=be()){const o=us();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Pa();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=us();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,be())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=Mr();const h=Ma(),m=(function(){return Ma()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Vi)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),La(w.mutation,_,w.mutation.getFieldMask(),Xe.now())):h.set(_.key,un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new HC(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Ma();let o=new nt(((h,m)=>h-m)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||un.empty();w=m.applyToLocalView(_,w),s.set(g,w);const S=(o.get(m.batchId)||be()).add(g);o=o.insert(m.batchId,S)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,S=Fv();w.forEach((k=>{if(!l.has(k)){const z=Hv(t.get(k),s.get(k));z!==null&&S.set(k,z),l=l.add(k)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(us());let m=za,g=l;return h.next((_=>q.forEach(_,((w,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((k=>{g=g.insert(w,k)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,be()))).next((w=>({batchId:m,changes:Lv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let o=Pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Pa();return this.indexManager.getCollectionParents(e,l).next((m=>q.forEach(m,(g=>{const _=(function(S,k){return new mc(k,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((S,k)=>{h=h.insert(S,k)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let m=Pa();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&La(w.mutation,_,un.empty(),Xe.now()),_c(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:sr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:OC(o.bundledQuery),readTime:sr(o.readTime)}})(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.overlays=new nt(me.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=us();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=us(),l=t.length+1,h=new me(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=us(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=us(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return q.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new hC(t,s));let l=this.qr.get(t);l===void 0&&(l=be(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.Qr=new wt(At.$r),this.Ur=new wt(At.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new At(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new me(new Ye([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new me(new Ye([])),s=new At(t,e),o=new At(t,e+1);let l=be();return this.Ur.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return me.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new wt(At.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new cC(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new At(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?gf:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);l.push(m)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(Ve);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(m=>{s=s.add(m.Yr)}))})),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const h=new At(new me(l),0);let m=new wt(Ve);return this.Zr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Yr)),!0)}),h),q.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new At(t,0),o=this.Zr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.ri=e,this.docs=(function(){return new nt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Mr();const h=t.path,m=new me(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||SA(IA(w),s)<=0||(o.has(w.key)||_c(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ii(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new XC(this)}getSize(e){return q.resolve(this.size)}}class XC extends $C{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.persistence=e,this.si=new vs((t=>vf(t)),Ef),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new Cf,this.targetCount=0,this.ai=Ao.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.ui={},this.overlays={},this.ci=new dc(0),this.li=!1,this.li=!0,this.hi=new KC,this.referenceDelegate=e(this),this.Pi=new JC(this),this.indexManager=new MC,this.remoteDocumentCache=(function(o){return new YC(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new xC(t),this.Ii=new WC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new QC(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new ZC(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return q.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class ZC extends CA{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Ri=new Cf,this.Vi=null}static mi(e){return new Rf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(s=>{const o=me.fromPath(s);return this.gi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ec{constructor(e,t){this.persistence=e,this.pi=new vs((s=>PA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=jC(this,t)}static mi(e,t){return new ec(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((s,o)=>this.br(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Du(e.data.value)),t}br(e,t,s){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new kf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return TT()?8:RA(Bt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new eR;return this.Ss(e,t,h).next((m=>{if(l.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>l.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(uo()<=De.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(uo()<=De.DEBUG&&re("QueryEngine","Query:",co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(uo()<=De.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):q.resolve())}ys(e,t){if(hy(t))return q.resolve(null);let s=ir(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=xd(t,null,"F"),s=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=be(...l);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ds(t,m);return this.Cs(t,_,h,g.readTime)?this.ys(e,xd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ws(e,t,s,o){return hy(t)||o.isEqual(we.min())?q.resolve(null):this.ps.getDocuments(e,s).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,s,o)?q.resolve(null):(uo()<=De.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),co(t)),this.vs(e,h,t,TA(o,za)).next((m=>m)))}))}Ds(e,t){let s=new wt(Ov(e));return t.forEach(((o,l)=>{_c(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,s){return uo()<=De.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",co(t)),this.ps.getDocumentsMatchingQuery(e,t,Si.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="LocalStore",nR=3e8;class rR{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Ve),this.xs=new vs((l=>vf(l)),Ef),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function iR(r,e,t,s){return new rR(r,e,t,s)}async function iE(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=be();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function sR(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const S=_.batch,k=S.keys();let z=q.resolve();return k.forEach((Q=>{z=z.next((()=>w.getEntry(g,Q))).next((Y=>{const H=_.docVersions.get(Q);Be(H!==null,48541),Y.version.compareTo(H)<0&&(S.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,S)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=be();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function sE(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function oR(r,e){const t=Se(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((w,S)=>{const k=o.get(S);if(!k)return;m.push(t.Pi.removeMatchingKeys(l,w.removedDocuments,S).next((()=>t.Pi.addMatchingKeys(l,w.addedDocuments,S))));let z=k.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?z=z.withResumeToken(Vt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(S,z),(function(Y,H,ce){return Y.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=nR?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(k,z,w)&&m.push(t.Pi.updateTargetData(l,z))}));let g=Mr(),_=be();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),m.push(aR(l,h,e.documentUpdates).next((w=>{g=w.ks,_=w.qs}))),!s.isEqual(we.min())){const w=t.Pi.getLastRemoteSnapshotVersion(l).next((S=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(w)}return q.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function aR(r,e,t){let s=be(),o=be();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Mr();return t.forEach(((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(Pf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function lR(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=gf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function uR(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new yi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Ud(r,e,t){const s=Se(r),o=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Vo(h))throw h;re(Pf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Sy(r,e,t){const s=Se(r);let o=we.min(),l=be();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const S=Se(g),k=S.xs.get(w);return k!==void 0?q.resolve(S.Ms.get(k)):S.Pi.getTargetData(_,w)})(s,h,ir(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:be()))).next((m=>(cR(s,QA(e),m),{documents:m,Qs:l})))))}function cR(r,e,t){let s=r.Os.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Os.set(e,s)}class Ay{constructor(){this.activeTargetIds=tC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hR{constructor(){this.Mo=new Ay,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ay,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="ConnectivityMonitor";class Ry{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(Cy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(Cy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=null;function zd(){return Su===null?Su=(function(){return 268435456+Math.round(2147483648*Math.random())})():Su++,"0x"+Su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="RestConnection",fR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Gu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,l){const h=zd(),m=this.zo(e,t.toUriEncodedString());re(gd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:_}=new URL(m),w=Ro(_);return this.Jo(e,m,g,s,w).then((S=>(re(gd,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw wo(gd,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S}))}Ho(e,t,s,o,l,h){return this.Go(e,t,s,o,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+No})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const s=fR[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class gR extends pR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,l){const h=zd();return new Promise(((m,g)=>{const _=new uv;_.setWithCredentials(!0),_.listenOnce(cv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Nu.NO_ERROR:const S=_.getResponseJson();re(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case Nu.TIMEOUT:re(Ft,`RPC '${e}' ${h} timed out`),g(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const k=_.getStatus();if(re(Ft,`RPC '${e}' ${h} failed with status:`,k,"response text:",_.getResponseText()),k>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Q=z==null?void 0:z.error;if(Q&&Q.status&&Q.message){const Y=(function(ce){const ue=ce.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ue)>=0?ue:W.UNKNOWN})(Q.status);g(new ae(Y,Q.message))}else g(new ae(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ae(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=zd(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=fv(),m=dv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");re(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);this.I_(S);let k=!1,z=!1;const Q=new mR({Yo:H=>{z?re(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(k||(re(Ft,`Opening RPC '${e}' stream ${o} transport.`),S.open(),k=!0),re(Ft,`RPC '${e}' stream ${o} sending:`,H),S.send(H))},Zo:()=>S.close()}),Y=(H,ce,ue)=>{H.listen(ce,(pe=>{try{ue(pe)}catch(Te){setTimeout((()=>{throw Te}),0)}}))};return Y(S,ka.EventType.OPEN,(()=>{z||(re(Ft,`RPC '${e}' stream ${o} transport opened.`),Q.o_())})),Y(S,ka.EventType.CLOSE,(()=>{z||(z=!0,re(Ft,`RPC '${e}' stream ${o} transport closed`),Q.a_(),this.E_(S))})),Y(S,ka.EventType.ERROR,(H=>{z||(z=!0,wo(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),Q.a_(new ae(W.UNAVAILABLE,"The operation could not be completed")))})),Y(S,ka.EventType.MESSAGE,(H=>{var ce;if(!z){const ue=H.data[0];Be(!!ue,16349);const pe=ue,Te=(pe==null?void 0:pe.error)||((ce=pe[0])==null?void 0:ce.error);if(Te){re(Ft,`RPC '${e}' stream ${o} received error:`,Te);const he=Te.status;let Ce=(function(R){const x=mt[R];if(x!==void 0)return Wv(x)})(he),D=Te.message;Ce===void 0&&(Ce=W.INTERNAL,D="Unknown error status: "+he+" with message "+Te.message),z=!0,Q.a_(new ae(Ce,D)),S.close()}else re(Ft,`RPC '${e}' stream ${o} received:`,ue),Q.u_(ue)}})),Y(m,hv.STAT_EVENT,(H=>{H.stat===kd.PROXY?re(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===kd.NOPROXY&&re(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Q.__()}),0),Q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function yd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(r){return new EC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="PersistentStream";class aE{constructor(e,t,s,o,l,h,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new oE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yR extends aE{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=IC(this.serializer,e),s=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?sr(h.readTime):we.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Fd(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=bd(g)?{documents:CC(l,g)}:{query:RC(l,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Qv(l,h.resumeToken);const _=Od(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=Zu(l,h.snapshotVersion.toTimestamp());const _=Od(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=PC(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Fd(this.serializer),t.removeTarget=e,this.q_(t)}}class _R extends aE{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=AC(e.writeResults,e.commitTime),s=sr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Fd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>SC(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{}class ER extends vR{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,Md(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(W.UNKNOWN,l.toString())}))}Ho(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Md(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(W.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class wR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Or(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="RemoteStore";class TR{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Es(this)&&(re(gs,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await Za(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Ic(_)})(this))}))})),this.Ra=new wR(s,o)}}async function Ic(r){if(Es(r))for(const e of r.da)await e(!0)}async function Za(r){for(const e of r.da)await e(!1)}function lE(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),bf(t)?Vf(t):bo(t).O_()&&Df(t,e))}function Nf(r,e){const t=Se(r),s=bo(t);t.Ia.delete(e),s.O_()&&uE(t,e),t.Ia.size===0&&(s.O_()?s.L_():Es(t)&&t.Ra.set("Unknown"))}function Df(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bo(r).Y_(e)}function uE(r,e){r.Va.Ue(e),bo(r).Z_(e)}function Vf(r){r.Va=new gC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),bo(r).start(),r.Ra.ua()}function bf(r){return Es(r)&&!bo(r).x_()&&r.Ia.size>0}function Es(r){return Se(r).Ea.size===0}function cE(r){r.Va=void 0}async function IR(r){r.Ra.set("Online")}async function SR(r){r.Ia.forEach(((e,t)=>{Df(r,e)}))}async function AR(r,e){cE(r),bf(r)?(r.Ra.ha(e),Vf(r)):r.Ra.set("Unknown")}async function CR(r,e,t){if(r.Ra.set("Online"),e instanceof Kv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){re(gs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tc(r,s)}else if(e instanceof xu?r.Va.Ze(e):e instanceof Gv?r.Va.st(e):r.Va.tt(e),!t.isEqual(we.min()))try{const s=await sE(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.Va.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ia.get(_);w&&l.Ia.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=l.Ia.get(g);if(!w)return;l.Ia.set(g,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),uE(l,g);const S=new yi(w.target,g,_,w.sequenceNumber);Df(l,S)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(gs,"Failed to raise snapshot:",s),await tc(r,s)}}async function tc(r,e,t){if(!Vo(e))throw e;r.Ea.add(1),await Za(r),r.Ra.set("Offline"),t||(t=()=>sE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(gs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Ic(r)}))}function hE(r,e){return e().catch((t=>tc(r,t,e)))}async function Sc(r){const e=Se(r),t=ki(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:gf;for(;RR(e);)try{const o=await lR(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,kR(e,o)}catch(o){await tc(e,o)}dE(e)&&fE(e)}function RR(r){return Es(r)&&r.Ta.length<10}function kR(r,e){r.Ta.push(e);const t=ki(r);t.O_()&&t.X_&&t.ea(e.mutations)}function dE(r){return Es(r)&&!ki(r).x_()&&r.Ta.length>0}function fE(r){ki(r).start()}async function PR(r){ki(r).ra()}async function NR(r){const e=ki(r);for(const t of r.Ta)e.ea(t.mutations)}async function DR(r,e,t){const s=r.Ta.shift(),o=If.from(s,e,t);await hE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Sc(r)}async function VR(r,e){e&&ki(r).X_&&await(async function(s,o){if((function(h){return fC(h)&&h!==W.ABORTED})(o.code)){const l=s.Ta.shift();ki(s).B_(),await hE(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Sc(s)}})(r,e),dE(r)&&fE(r)}async function Py(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),re(gs,"RemoteStore received new credentials");const s=Es(t);t.Ea.add(3),await Za(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ic(t)}async function bR(r,e){const t=Se(r);e?(t.Ea.delete(2),await Ic(t)):e||(t.Ea.add(2),await Za(t),t.Ra.set("Unknown"))}function bo(r){return r.ma||(r.ma=(function(t,s,o){const l=Se(t);return l.sa(),new yR(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:IR.bind(null,r),t_:SR.bind(null,r),r_:AR.bind(null,r),H_:CR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),bf(r)?Vf(r):r.Ra.set("Unknown")):(await r.ma.stop(),cE(r))}))),r.ma}function ki(r){return r.fa||(r.fa=(function(t,s,o){const l=Se(t);return l.sa(),new _R(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:PR.bind(null,r),r_:VR.bind(null,r),ta:NR.bind(null,r),na:DR.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Sc(r)):(await r.fa.stop(),r.Ta.length>0&&(re(gs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new xf(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Of(r,e){if(Or("AsyncQueue",`${e}: ${r}`),Vo(r))return new ae(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Pa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new _o;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.ga=new nt(me.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Co{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Co(e,t,_o.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class OR{constructor(){this.queries=Dy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Se(t),l=o.queries;o.queries=Dy(),l.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function Dy(){return new vs((r=>xv(r)),yc)}async function pE(r,e){const t=Se(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new xR,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Of(h,`Initialization of query '${co(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Mf(t)}async function mE(r,e){const t=Se(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function MR(r,e){const t=Se(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&Mf(t)}function LR(r,e,t){const s=Se(r),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function Mf(r){r.Ca.forEach((e=>{e.next()}))}var Bd,Vy;(Vy=Bd||(Bd={})).Ma="default",Vy.Cache="cache";class gE{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Co(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class FR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=be(),this.mutatedKeys=be(),this.eu=Ov(e),this.tu=new _o(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Ny,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,S)=>{const k=o.get(w),z=_c(this.query,S)?S:null,Q=!!k&&this.mutatedKeys.has(k.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;k&&z?k.data.isEqual(z.data)?Q!==Y&&(s.track({type:3,doc:z}),H=!0):this.su(k,z)||(s.track({type:2,doc:z}),H=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!k&&z?(s.track({type:0,doc:z}),H=!0):k&&!z&&(s.track({type:1,doc:k}),H=!0,(g||_)&&(m=!0)),H&&(z?(h=h.add(z),l=Y?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,S)=>(function(z,Q){const Y=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:H})}};return Y(z)-Y(Q)})(w.type,S.type)||this.eu(w.doc,S.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new Co(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ny,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new _E(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new yE(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Co.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Lf="SyncEngine";class UR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class zR{constructor(e){this.key=e,this.hu=!1}}class BR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new vs((m=>xv(m)),yc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(me.comparator),this.Au=new Map,this.Ru=new Cf,this.Vu={},this.mu=new Map,this.fu=Ao.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jR(r,e,t=!0){const s=SE(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await vE(s,e,t,!0),o}async function $R(r,e){const t=SE(r);await vE(t,e,!0,!1)}async function vE(r,e,t,s){const o=await uR(r.localStore,ir(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await HR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&lE(r.remoteStore,o),m}async function HR(r,e,t,s,o){r.pu=(S,k,z)=>(async function(Y,H,ce,ue){let pe=H.view.ru(ce);pe.Cs&&(pe=await Sy(Y.localStore,H.query,!1).then((({documents:D})=>H.view.ru(D,pe))));const Te=ue&&ue.targetChanges.get(H.targetId),he=ue&&ue.targetMismatches.get(H.targetId)!=null,Ce=H.view.applyChanges(pe,Y.isPrimaryClient,Te,he);return xy(Y,H.targetId,Ce.au),Ce.snapshot})(r,S,k,z);const l=await Sy(r.localStore,e,!0),h=new FR(e,l.Qs),m=h.ru(l.documents),g=Ja.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);xy(r,t,_.au);const w=new UR(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function qR(r,e,t){const s=Se(r),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter((h=>!yc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ud(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Nf(s.remoteStore,o.targetId),jd(s,o.targetId)})).catch(Do)):(jd(s,o.targetId),await Ud(s.localStore,o.targetId,!0))}async function WR(r,e){const t=Se(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Nf(t.remoteStore,s.targetId))}async function GR(r,e,t){const s=ek(r);try{const o=await(function(h,m){const g=Se(h),_=Xe.now(),w=m.reduce(((z,Q)=>z.add(Q.key)),be());let S,k;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Q=Mr(),Y=be();return g.Ns.getEntries(z,w).next((H=>{Q=H,Q.forEach(((ce,ue)=>{ue.isValidDocument()||(Y=Y.add(ce))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,Q))).next((H=>{S=H;const ce=[];for(const ue of m){const pe=lC(ue,S.get(ue.key).overlayedDocument);pe!=null&&ce.push(new Vi(ue.key,pe,Rv(pe.value.mapValue),Tn.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,ce,m)})).next((H=>{k=H;const ce=H.applyToLocalDocumentSet(S,Y);return g.documentOverlayCache.saveOverlays(z,H.batchId,ce)}))})).then((()=>({batchId:k.batchId,changes:Lv(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new nt(Ve)),_=_.insert(m,g),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await el(s,o.changes),await Sc(s.remoteStore)}catch(o){const l=Of(o,"Failed to persist write");t.reject(l)}}async function EE(r,e){const t=Se(r);try{const s=await oR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Be(h.hu,14607):o.removedDocuments.size>0&&(Be(h.hu,42227),h.hu=!1))})),await el(t,s,e)}catch(s){await Do(s)}}function by(r,e,t){const s=Se(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,S)=>{for(const k of S.Sa)k.va(m)&&(_=!0)})),_&&Mf(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function KR(r,e,t){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new nt(me.comparator);h=h.insert(l,zt.newNoDocument(l,we.min()));const m=be().add(l),g=new wc(we.min(),new Map,new nt(Ve),h,m);await EE(s,g),s.du=s.du.remove(l),s.Au.delete(e),Ff(s)}else await Ud(s.localStore,e,!1).then((()=>jd(s,e,t))).catch(Do)}async function QR(r,e){const t=Se(r),s=e.batch.batchId;try{const o=await sR(t.localStore,e);TE(t,s,null),wE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await el(t,o)}catch(o){await Do(o)}}async function YR(r,e,t){const s=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((S=>(Be(S!==null,37113),w=S.keys(),g.mutationQueue.removeMutationBatch(_,S)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);TE(s,e,t),wE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await el(s,o)}catch(o){await Do(o)}}function wE(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function TE(r,e,t){const s=Se(r);let o=s.Vu[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function jd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||IE(r,s)}))}function IE(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Nf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Ff(r))}function xy(r,e,t){for(const s of t)s instanceof yE?(r.Ru.addReference(s.key,e),XR(r,s)):s instanceof _E?(re(Lf,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||IE(r,s.key)):_e(19791,{wu:s})}function XR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(re(Lf,"New document in limbo: "+t),r.Eu.add(s),Ff(r))}function Ff(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new me(Ye.fromString(e)),s=r.fu.next();r.Au.set(s,new zR(t)),r.du=r.du.insert(t,s),lE(r.remoteStore,new yi(ir(gc(t.path)),s,"TargetPurposeLimboResolution",dc.ce))}}async function el(r,e,t){const s=Se(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=kf.As(g.targetId,_);l.push(S)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,_){const w=Se(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>q.forEach(_,(k=>q.forEach(k.Es,(z=>w.persistence.referenceDelegate.addReference(S,k.targetId,z))).next((()=>q.forEach(k.ds,(z=>w.persistence.referenceDelegate.removeReference(S,k.targetId,z)))))))))}catch(S){if(!Vo(S))throw S;re(Pf,"Failed to update sequence numbers: "+S)}for(const S of _){const k=S.targetId;if(!S.fromCache){const z=w.Ms.get(k),Q=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(Q);w.Ms=w.Ms.insert(k,Y)}}})(s.localStore,l))}async function JR(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){re(Lf,"User change. New user:",e.toKey());const s=await iE(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((m=>{m.forEach((g=>{g.reject(new ae(W.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await el(t,s.Ls)}}function ZR(r,e){const t=Se(r),s=t.Au.get(e);if(s&&s.hu)return be().add(s.key);{let o=be();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function SE(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=EE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KR.bind(null,e),e.Pu.H_=MR.bind(null,e.eventManager),e.Pu.yu=LR.bind(null,e.eventManager),e}function ek(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YR.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return iR(this.persistence,new tR,e.initialUser,this.serializer)}Cu(e){return new rE(Rf.mi,this.serializer)}Du(e){return new hR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class tk extends nc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Be(this.persistence.referenceDelegate instanceof ec,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new zC(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new rE((s=>ec.mi(s,t)),this.serializer)}}class $d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>by(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JR.bind(null,this.syncEngine),await bR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OR})()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=(function(l){return new gR(l)})(e.databaseInfo);return(function(l,h,m,g){return new ER(l,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new TR(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>by(this.syncEngine,t,0)),(function(){return Ry.v()?new Ry:new dR})())}createSyncEngine(e,t){return(function(o,l,h,m,g,_,w){const S=new BR(o,l,h,m,g,_);return w&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);re(gs,"RemoteStore shutting down."),l.Ea.add(5),await Za(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}$d.provider={build:()=>new $d};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="FirestoreClient";class nk{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=pf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{re(Pi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Pi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Of(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function _d(r,e){r.asyncQueue.verifyOperationInProgress(),re(Pi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await iE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Oy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await rk(r);re(Pi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Py(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Py(e.remoteStore,o))),r._onlineComponents=e}async function rk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Pi,"Using user provided OfflineComponentProvider");try{await _d(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await _d(r,new nc)}}else re(Pi,"Using default OfflineComponentProvider"),await _d(r,new tk(void 0));return r._offlineComponents}async function CE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Pi,"Using user provided OnlineComponentProvider"),await Oy(r,r._uninitializedComponentsProvider._online)):(re(Pi,"Using default OnlineComponentProvider"),await Oy(r,new $d))),r._onlineComponents}function ik(r){return CE(r).then((e=>e.syncEngine))}async function Hd(r){const e=await CE(r),t=e.eventManager;return t.onListen=jR.bind(null,e.syncEngine),t.onUnlisten=qR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$R.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WR.bind(null,e.syncEngine),t}function sk(r,e,t={}){const s=new wi;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,m,g,_){const w=new AE({next:k=>{w.Nu(),h.enqueueAndForget((()=>mE(l,S)));const z=k.docs.has(m);!z&&k.fromCache?_.reject(new ae(W.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&k.fromCache&&g&&g.source==="server"?_.reject(new ae(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(k)},error:k=>_.reject(k)}),S=new gE(gc(m.path),w,{includeMetadataChanges:!0,qa:!0});return pE(l,S)})(await Hd(r),r.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="firestore.googleapis.com",Ly=!0;class Fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kE,this.ssl=Ly}else this.host=e.host,this.ssl=e.ssl??Ly;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FC)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RE(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new hA;switch(s.type){case"firstParty":return new mA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=My.get(t);s&&(re("ComponentProvider","Removing Datastore"),My.delete(t),s.terminate())})(this),Promise.resolve()}}function ok(r,e,t,s={}){var _;r=wn(r,Ac);const o=Ro(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Zy(`https://${m}`),e_("Firestore",!0)),l.host!==kE&&l.host!==m&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:m,ssl:o,emulatorOptions:s};if(!Ii(g,h)&&(r._setSettings(g),s.mockUserToken)){let w,S;if(typeof s.mockUserToken=="string")w=s.mockUserToken,S=Ut.MOCK_USER;else{w=pT(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ut(k)}r._authCredentials=new dA(new mv(w,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cc(this.firestore,e,this._query)}}class ct{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ya(t,ct._jsonSchema))return new ct(e,s||null,new me(Ye.fromString(t.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:gt("string",ct._jsonSchemaVersion),referencePath:gt("string")};class Ti extends Cc{constructor(e,t,s){super(e,t,gc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new me(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function ak(r,e,...t){if(r=yt(r),gv("collection","path",e),r instanceof Ac){const s=Ye.fromString(e,...t);return Jg(s),new Ti(r,null,s)}{if(!(r instanceof ct||r instanceof Ti))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Jg(s),new Ti(r.firestore,null,s)}}function tl(r,e,...t){if(r=yt(r),arguments.length===1&&(e=pf.newId()),gv("doc","path",e),r instanceof Ac){const s=Ye.fromString(e,...t);return Xg(s),new ct(r,null,new me(s))}{if(!(r instanceof ct||r instanceof Ti))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return Xg(s),new ct(r.firestore,r instanceof Ti?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="AsyncQueue";class zy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new oE(this,"async_queue_retry"),this._c=()=>{const s=yd();s&&re(Uy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=yd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=yd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new wi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;re(Uy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Or("INTERNAL UNHANDLED ERROR: ",By(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=xf.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:By(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function By(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Ni extends Ac{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new zy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zy(e),this._firestoreClient=void 0,await e}}}function lk(r,e){const t=typeof r=="object"?r:Qd(),s=typeof r=="string"?r:Gu,o=_s(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=dT("firestore");l&&ok(o,...l)}return o}function Uf(r){if(r._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||uk(r),r._firestoreClient}function uk(r){var s,o,l;const e=r._freezeSettings(),t=(function(m,g,_,w){return new VA(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,RE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new nk(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Vt.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ya(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:gt("string",vn._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:or._jsonSchemaVersion}}static fromJSON(e){if(Ya(e,or._jsonSchema))return new or(e.latitude,e.longitude)}}or._jsonSchemaVersion="firestore/geoPoint/1.0",or._jsonSchema={type:gt("string",or._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ar._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ya(e,ar._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ar(e.vectorValues);throw new ae(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ar._jsonSchemaVersion="firestore/vectorValue/1.0",ar._jsonSchema={type:gt("string",ar._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=/^__.*__$/;class hk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}class PE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function NE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:r})}}class Bf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return rc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(NE(this.Ac)&&ck.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}Cc(e,t,s,o=!1){return new Bf({Ac:e,methodName:t,Dc:s,path:Dt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jf(r){const e=r._freezeSettings(),t=Tc(r._databaseId);return new dk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function DE(r,e,t,s,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);$f("Data must be an object, but it was:",h,s);const m=VE(s,h);let g,_;if(l.merge)g=new un(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const S of l.mergeFields){const k=qd(e,S,t);if(!h.contains(k))throw new ae(W.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);xE(w,k)||w.push(k)}g=new un(w),_=h.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,_=h.fieldTransforms;return new hk(new Jt(m),g,_)}class kc extends zf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}function fk(r,e,t,s){const o=r.Cc(1,e,t);$f("Data must be an object, but it was:",o,s);const l=[],h=Jt.empty();Di(s,((g,_)=>{const w=Hf(e,g,t);_=yt(_);const S=o.yc(w);if(_ instanceof kc)l.push(w);else{const k=Pc(_,S);k!=null&&(l.push(w),h.set(w,k))}}));const m=new un(l);return new PE(h,m,o.fieldTransforms)}function pk(r,e,t,s,o,l){const h=r.Cc(1,e,t),m=[qd(e,s,t)],g=[o];if(l.length%2!=0)throw new ae(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)m.push(qd(e,l[k])),g.push(l[k+1]);const _=[],w=Jt.empty();for(let k=m.length-1;k>=0;--k)if(!xE(_,m[k])){const z=m[k];let Q=g[k];Q=yt(Q);const Y=h.yc(z);if(Q instanceof kc)_.push(z);else{const H=Pc(Q,Y);H!=null&&(_.push(z),w.set(z,H))}}const S=new un(_);return new PE(w,S,h.fieldTransforms)}function Pc(r,e){if(bE(r=yt(r)))return $f("Unsupported field value:",e,r),VE(r,e);if(r instanceof zf)return(function(s,o){if(!NE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Pc(m,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return nC(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Xe.fromDate(s);return{timestampValue:Zu(o.serializer,l)}}if(s instanceof Xe){const l=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zu(o.serializer,l)}}if(s instanceof or)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:Qv(o.serializer,s._byteString)};if(s instanceof ct){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ar)return(function(h,m){return{mapValue:{fields:{[Av]:{stringValue:Cv},[Ku]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return wf(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${mf(s)}`)})(r,e)}function VE(r,e){const t={};return vv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,((s,o)=>{const l=Pc(o,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function bE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xe||r instanceof or||r instanceof vn||r instanceof ct||r instanceof zf||r instanceof ar)}function $f(r,e,t){if(!bE(t)||!yv(t)){const s=mf(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function qd(r,e,t){if((e=yt(e))instanceof Rc)return e._internalPath;if(typeof e=="string")return Hf(r,e);throw rc("Field path arguments must be of type string or ",r,!1,void 0,t)}const mk=new RegExp("[~\\*/\\[\\]]");function Hf(r,e,t){if(e.search(mk)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Rc(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function rc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ae(W.INVALID_ARGUMENT,m+r+g)}function xE(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ME("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gk extends OE{data(){return super.data()}}function ME(r,e){return typeof e=="string"?Hf(r,e):e instanceof Rc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _k{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[Ku].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>ut(h.doubleValue)));return new ar(t)}convertGeoPoint(e){return new or(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Be(tE(s),9688,{name:e});const o=new ja(s.get(1),s.get(3)),l=new me(s.popFirst(5));return o.isEqual(t)||Or(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Da{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hs extends OE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ME("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",hs._jsonSchema={type:gt("string",hs._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Ou extends hs{data(e={}){return super.data(e)}}class vo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Da(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ou(this._firestore,this._userDataWriter,s.key,s,new Da(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Ou(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Da(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new Ou(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Da(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:vk(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(r){r=wn(r,ct);const e=wn(r.firestore,Ni);return sk(Uf(e),r._key).then((t=>UE(e,r,t)))}vo._jsonSchemaVersion="firestore/querySnapshot/1.0",vo._jsonSchema={type:gt("string",vo._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class FE extends _k{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function wk(r,e,t){r=wn(r,ct);const s=wn(r.firestore,Ni),o=LE(r.converter,e,t);return Nc(s,[DE(jf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Tn.none())])}function Tk(r,e,t,...s){r=wn(r,ct);const o=wn(r.firestore,Ni),l=jf(o);let h;return h=typeof(e=yt(e))=="string"||e instanceof Rc?pk(l,"updateDoc",r._key,e,t,s):fk(l,"updateDoc",r._key,e),Nc(o,[h.toMutation(r._key,Tn.exists(!0))])}function Ik(r){return Nc(wn(r.firestore,Ni),[new Tf(r._key,Tn.none())])}function Sk(r,e){const t=wn(r.firestore,Ni),s=tl(r),o=LE(r.converter,e);return Nc(t,[DE(jf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then((()=>s))}function Ak(r,...e){var g,_,w;r=yt(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||jy(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(jy(e[s])){const S=e[s];e[s]=(g=S.next)==null?void 0:g.bind(S),e[s+1]=(_=S.error)==null?void 0:_.bind(S),e[s+2]=(w=S.complete)==null?void 0:w.bind(S)}let l,h,m;if(r instanceof ct)h=wn(r.firestore,Ni),m=gc(r._key.path),l={next:S=>{e[s]&&e[s](UE(h,r,S))},error:e[s+1],complete:e[s+2]};else{const S=wn(r,Cc);h=wn(S.firestore,Ni),m=S._query;const k=new FE(h);l={next:z=>{e[s]&&e[s](new vo(h,k,S,z))},error:e[s+1],complete:e[s+2]},yk(r._query)}return(function(k,z,Q,Y){const H=new AE(Y),ce=new gE(z,H,Q);return k.asyncQueue.enqueueAndForget((async()=>pE(await Hd(k),ce))),()=>{H.Nu(),k.asyncQueue.enqueueAndForget((async()=>mE(await Hd(k),ce)))}})(Uf(h),m,o,l)}function Nc(r,e){return(function(s,o){const l=new wi;return s.asyncQueue.enqueueAndForget((async()=>GR(await ik(s),o,l))),l.promise})(Uf(r),e)}function UE(r,e,t){const s=t.docs.get(e._key),o=new FE(r);return new hs(r,o,e._key,s,new Da(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){No=o})(ko),lr(new Mn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new Ni(new fA(s.getProvider("auth-internal")),new gA(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(_.options.projectId,w)})(h,o),h);return l={useFetchStreams:t,...l},m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),En(Gg,Kg,e),En(Gg,Kg,"esm2020")})();const Ck={apiKey:"AIzaSyAOkv2m83bRjvZuCVchdaQCMi7mGV7honY",authDomain:"wachtlist-maker.firebaseapp.com",projectId:"wachtlist-maker",storageBucket:"wachtlist-maker.firebasestorage.app",messagingSenderId:"441770745880",appId:"1:441770745880:web:ef58b31da2d0238415e36d",measurementId:"G-9PE7CJGMDK"},qf=a_(Ck),nl=lk(qf),ic=zS(qf),zE=new Nr;typeof window<"u"&&oA(qf);const Wf="4bb9fd44f0907b5158c6a6db356c360e",Gf="https://api.themoviedb.org/3";async function Rk(r){return(await(await fetch(`${Gf}/search/multi?api_key=${Wf}&query=${encodeURIComponent(r)}`)).json()).results.filter(s=>s.media_type==="movie"||s.media_type==="tv")}async function Wd(r,e){return(await fetch(`${Gf}/${r}/${e}?api_key=${Wf}`)).json()}async function Gd(r,e){var l,h;const s=await(await fetch(`${Gf}/${r}/${e}/videos?api_key=${Wf}`)).json(),o=((l=s.results)==null?void 0:l.find(m=>m.type==="Trailer"&&m.site==="YouTube"))||((h=s.results)==null?void 0:h.find(m=>m.site==="YouTube"));return o?o.key:null}function BE(r){return r?`https://image.tmdb.org/t/p/w500${r}`:null}function kk({user:r,onRefresh:e,refreshing:t,unwatchedCount:s=0,unwatchedItems:o=[],viewMode:l="grid",setViewMode:h,onOpenSettings:m,onSelectTitle:g}){var Ce,D;const[_,w]=ke.useState(!1),S=ke.useRef(null),[k,z]=ke.useState(!1),Q=ke.useRef(null),[Y,H]=ke.useState(""),[ce,ue]=ke.useState([]),pe=ke.useRef(null);ke.useEffect(()=>{const I=R=>{S.current&&!S.current.contains(R.target)&&w(!1),pe.current&&!pe.current.contains(R.target)&&ue([]),Q.current&&!Q.current.contains(R.target)&&z(!1)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]),ke.useEffect(()=>{if(!Y.trim()){ue([]);return}const I=setTimeout(async()=>{const R=await Rk(Y);ue(R.slice(0,6))},400);return()=>clearTimeout(I)},[Y]);const Te=I=>{g(I),H(""),ue([])},he=async()=>{try{await N0(ic),z(!1)}catch(I){console.error("Logout failed",I)}};return E.createElement("div",{className:"topbar"},E.createElement("div",{className:"topbar-logo-section"},E.createElement("div",{className:"topbar-logo"},E.createElement("span",{className:"topbar-logo-icon"},"🎬"),E.createElement("span",{className:"topbar-logo-text"},"Watchlist"))),r&&E.createElement("div",{className:"topbar-search-section",ref:pe},E.createElement("div",{className:"search-input-wrapper"},E.createElement("svg",{className:"topbar-search-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},E.createElement("circle",{cx:"11",cy:"11",r:"8"}),E.createElement("path",{d:"m21 21-4.35-4.35"})),E.createElement("input",{type:"text",value:Y,onChange:I=>H(I.target.value),placeholder:"Search movies & series...",className:"topbar-search-input"})),ce.length>0&&E.createElement("div",{className:"topbar-search-dropdown"},ce.map(I=>{var R;return E.createElement("div",{key:I.id,onClick:()=>Te(I),className:"topbar-search-result"},E.createElement("img",{src:BE(I.poster_path),alt:"",className:"topbar-search-poster"}),E.createElement("div",{className:"topbar-search-info"},E.createElement("div",{className:"topbar-search-title"},I.title||I.name),E.createElement("div",{className:"topbar-search-meta"},(R=I.media_type)==null?void 0:R.toUpperCase()," ",I.release_date||I.first_air_date?`• ${(I.release_date||I.first_air_date).split("-")[0]}`:"")))}))),E.createElement("div",{className:"topbar-actions-section"},r&&E.createElement(E.Fragment,null,s>0&&E.createElement("div",{className:"notification-container",ref:S},E.createElement("button",{onClick:()=>w(!_),className:"topbar-icon-btn","aria-label":"Notifications"},E.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},E.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),E.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})),E.createElement("span",{className:"notification-badge"},s)),_&&E.createElement("div",{className:"notification-dropdown"},E.createElement("div",{className:"notification-dropdown-header"},E.createElement("span",null,"New Episodes"),E.createElement("button",{onClick:()=>w(!1),className:"notification-close"},"✕")),E.createElement("div",{className:"notification-list"},o.map(I=>E.createElement("div",{key:I.id,className:"notification-item"},E.createElement("div",{className:"notification-item-poster"},I.poster&&E.createElement("img",{src:I.poster,alt:I.title})),E.createElement("div",{className:"notification-item-content"},E.createElement("div",{className:"notification-item-title"},I.title),E.createElement("div",{className:"notification-item-info"},"New episodes available"))))))),E.createElement("button",{onClick:e,disabled:t,className:"topbar-icon-btn"},E.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t?"rotating":""},E.createElement("path",{d:"M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"}))),E.createElement("button",{onClick:()=>h(l==="grid"?"list":"grid"),className:"topbar-icon-btn"},l==="grid"?E.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},E.createElement("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),E.createElement("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),E.createElement("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),E.createElement("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),E.createElement("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),E.createElement("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})):E.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},E.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),E.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),E.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),E.createElement("rect",{x:"3",y:"14",width:"7",height:"7"}))),E.createElement("div",{className:"topbar-divider"}),E.createElement("div",{style:{position:"relative"},ref:Q},E.createElement("button",{onClick:()=>z(!k),className:"topbar-profile-btn","aria-label":"Profile"},E.createElement("div",{className:"topbar-profile-avatar"},r!=null&&r.photoURL?E.createElement("img",{src:r.photoURL,alt:"Profile"}):E.createElement("span",null,(D=(Ce=r==null?void 0:r.email)==null?void 0:Ce[0])==null?void 0:D.toUpperCase()))),k&&E.createElement("div",{className:"profile-dropdown"},E.createElement("div",{className:"profile-header-mobile"},(r==null?void 0:r.displayName)||(r==null?void 0:r.email)),E.createElement("button",{className:"profile-menu-item",onClick:()=>{m(),z(!1)}},"⚙️ Settings"),E.createElement("div",{className:"profile-divider"}),E.createElement("button",{className:"profile-menu-item danger",onClick:he},"🚪 Sign Out")))),!r&&E.createElement("button",{onClick:()=>U_(ic,zE),className:"btn btn-primary topbar-signin-btn"},"Sign in with Google")))}function $y({item:r,onDelete:e,onDrag:t,onUpdateWatched:s,viewMode:o="grid",calendarEnabled:l=!1}){var ee;const h=ke.useRef(null),[m,g]=ke.useState(!1),[_,w]=ke.useState(!1),[S,k]=ke.useState(!1),[z,Q]=ke.useState(!1),[Y,H]=ke.useState(r.overview||null),[ce,ue]=ke.useState(null),[pe,Te]=ke.useState(!1),[he,Ce]=ke.useState(null),[D,I]=ke.useState(!1),R=r.type==="tv"?r.lastInfo||"No recent episode":r.lastDate||r.lastInfo||"—",V=(()=>{if(r.type!=="tv"||!r.lastInfo||!r.watchedSeason)return!1;const Z=r.lastInfo.match(/S(\d+)\s+E(\d+)/);if(!Z)return!1;const[,j]=Z.map(Number);return j>r.watchedSeason})(),C=(()=>{if(r.totalSeasons)return r.totalSeasons;if(he!=null&&he.number_of_seasons)return he.number_of_seasons;if(r.lastInfo){const Z=r.lastInfo.match(/S(\d+)/);if(Z){const j=parseInt(Z[1])||1;return Math.max(j,1)}}return 1})(),Ue=Array.from({length:C},(Z,j)=>j+1),rt=Z=>{s&&s(r.id,{watchedSeason:Z,watchedEpisode:0}),w(!1)},ht=async Z=>{if(Z.stopPropagation(),Q(!0),!he&&!pe){Te(!0);try{const[j,N]=await Promise.all([Wd(r.type,r.tmdbId),Gd(r.type,r.tmdbId)]);Ce(j),H(j.overview||"No summary available."),ue(N)}catch(j){console.error("Failed to fetch details:",j),H("Failed to load summary.")}finally{Te(!1)}}else if(Y&&!he)try{const j=await Gd(r.type,r.tmdbId);ue(j)}catch(j){console.error("Failed to fetch trailer:",j)}},je=()=>{I(!D)};return E.createElement(E.Fragment,null,E.createElement("div",{draggable:!0,onDragStart:()=>t(r),onMouseEnter:()=>{g(!0),k(!0)},onMouseLeave:()=>{g(!1),k(!1)},onTouchStart:()=>{h.current=setTimeout(()=>{t(r)},300)},onTouchEnd:()=>clearTimeout(h.current),onTouchMove:()=>clearTimeout(h.current),className:`card glass-panel ${V?"glow-new":""} ${o==="list"?"card-list":""}`,style:{overflow:"hidden",position:"relative",cursor:"pointer"},onClick:()=>r.type==="tv"&&w(!0)},E.createElement("div",{className:"card-poster",style:{backgroundImage:r.poster?`url(${r.poster})`:void 0}},r.rating?E.createElement("div",{className:"card-badge rating-badge"},"⭐ ",r.rating.toFixed(1)):null,E.createElement("div",{className:"card-poster-overlay"}),r.lastInfo||r.lastDate?E.createElement("div",{className:"card-badge corner bottom-right"},R):null,V&&E.createElement("div",{className:"card-badge corner bottom-left card-tag-new"},"NEW")),E.createElement("div",{className:"card-body"},E.createElement("div",{className:"card-title"},r.title,o==="list"&&V&&E.createElement("span",{className:"list-tag-new"},"New")),E.createElement("div",{className:"card-subline"},(ee=r.type)==null?void 0:ee.toUpperCase()),o==="list"&&r.rating&&E.createElement("div",{className:"card-list-meta-row"},E.createElement("span",{className:"list-rating"},"⭐ ",r.rating.toFixed(1)),r.watchedSeason&&r.type==="tv"&&E.createElement("span",null,"• S",r.watchedSeason," Watched")),o!=="list"&&r.watchedSeason&&r.type==="tv"&&E.createElement("div",{className:"card-watched-info"},"Watched: Season ",r.watchedSeason)),E.createElement("button",{onClick:Z=>{Z.stopPropagation(),e(r.id)},className:`card-delete-btn ${m?"visible":""}`,"aria-label":"Delete"},"✕"),E.createElement("button",{onClick:ht,className:`card-info-btn ${S?"visible":""}`,"aria-label":"Info"},"i")),_&&r.type==="tv"&&E.createElement("div",{className:"modal-backdrop",onClick:()=>w(!1)},E.createElement("div",{className:"modal-panel glass-panel",onClick:Z=>Z.stopPropagation()},E.createElement("div",{className:"modal-header"},E.createElement("div",{className:"modal-title"},"Mark Watched - ",r.title),E.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>w(!1)},"✕")),E.createElement("div",{style:{marginBottom:"1rem"}},E.createElement("div",{style:{marginBottom:"0.75rem",fontSize:"0.9rem",opacity:.9}},"Select the last season you've watched:"),E.createElement("div",{className:"season-buttons-grid"},Ue.map(Z=>E.createElement("button",{key:Z,type:"button",className:`season-button ${r.watchedSeason===Z?"season-button-active":""}`,onClick:()=>rt(Z)},"Season ",Z)))),l&&E.createElement("div",{style:{marginBottom:"1rem",paddingTop:"0.75rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)"}},E.createElement("div",{style:{marginBottom:"0.75rem",fontSize:"0.9rem",opacity:.9}},"Set a reminder for next episode:"),E.createElement("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}},E.createElement("input",{type:"date",id:`calendar-date-${r.id}`,defaultValue:r.lastDate?new Date(r.lastDate).toISOString().split("T")[0]:"",style:{flex:1,padding:"0.5rem",background:"rgba(15,23,42,0.9)",border:"1px solid rgba(148,163,184,0.4)",borderRadius:"6px",color:"#fff",fontSize:"0.85rem"}}),E.createElement("input",{type:"time",id:`calendar-time-${r.id}`,defaultValue:"20:00",style:{padding:"0.5rem",background:"rgba(15,23,42,0.9)",border:"1px solid rgba(148,163,184,0.4)",borderRadius:"6px",color:"#fff",fontSize:"0.85rem"}})),E.createElement("button",{type:"button",className:"btn btn-youtube",style:{width:"100%"},onClick:Z=>{Z.stopPropagation();const j=document.getElementById(`calendar-date-${r.id}`),N=document.getElementById(`calendar-time-${r.id}`),$=j.value,de=N.value;if(!$){alert("Please select a date");return}const fe=`Watch: ${r.title} - Season ${r.watchedSeason||C}`,Re=r.overview||"TV Series - Next episode reminder",Ae=`${$}T${de}:00`,xe=new Date(new Date(Ae).getTime()+3600*1e3).toISOString().replace(/\.\d{3}Z$/,""),Pe=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(fe)}&details=${encodeURIComponent(Re)}&dates=${Ae.replace(/[-:]/g,"")}/${xe.replace(/[-:]/g,"")}`;window.open(Pe,"_blank")}},E.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"0.5rem"}},E.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),E.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),E.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),E.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),"Add to Google Calendar")),E.createElement("div",{className:"modal-footer"},E.createElement("button",{type:"button",className:"btn btn-outline",onClick:()=>w(!1)},"Cancel")))),z&&E.createElement("div",{className:"modal-backdrop",onClick:()=>Q(!1)},E.createElement("div",{className:"modal-panel glass-panel summary-modal",onClick:Z=>Z.stopPropagation()},E.createElement("button",{className:"summary-modal-close",type:"button",onClick:()=>Q(!1),"aria-label":"Close"},"✕"),pe?E.createElement("div",{className:"summary-loading"},E.createElement("div",{className:"summary-loading-spinner"}),E.createElement("p",null,"Loading details...")):E.createElement(E.Fragment,null,E.createElement("div",{className:"summary-header"},r.poster&&E.createElement("div",{className:"summary-poster"},E.createElement("img",{src:r.poster,alt:r.title})),E.createElement("div",{className:"summary-header-content"},E.createElement("h2",{className:"summary-title"},r.title),E.createElement("div",{className:"summary-meta"},r.rating&&E.createElement("span",{className:"summary-rating"},"⭐ ",r.rating.toFixed(1)," / 10"),(he==null?void 0:he.release_date)&&E.createElement("span",{className:"summary-date"},new Date(he.release_date).getFullYear()),(he==null?void 0:he.runtime)&&E.createElement("span",{className:"summary-runtime"},Math.floor(he.runtime/60),"h ",he.runtime%60,"m"),(he==null?void 0:he.number_of_seasons)&&E.createElement("span",{className:"summary-seasons"},he.number_of_seasons," Season",he.number_of_seasons!==1?"s":"")),(he==null?void 0:he.genres)&&he.genres.length>0&&E.createElement("div",{className:"summary-genres"},he.genres.slice(0,3).map(Z=>E.createElement("span",{key:Z.id,className:"summary-genre-tag"},Z.name))))),E.createElement("div",{className:"summary-content"},E.createElement("h3",{className:"summary-section-title"},"Overview"),E.createElement("p",{className:"summary-text"},Y||"No summary available.")),ce&&E.createElement("div",{className:"summary-trailer-section"},E.createElement("button",{type:"button",className:"btn btn-youtube",onClick:je},E.createElement("span",{className:"youtube-icon"},"▶"),D?"Hide Trailer":"Watch Trailer"),D&&E.createElement("div",{className:"youtube-embed"},E.createElement("iframe",{src:`https://www.youtube.com/embed/${ce}`,title:"Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),E.createElement("div",{className:"summary-footer"},E.createElement("button",{type:"button",className:"btn btn-outline",onClick:()=>{Q(!1),I(!1)}},"Close"))))))}function Pk(){return E.createElement("div",{style:{textAlign:"center",marginTop:"4rem",color:"#8b949e"}},E.createElement("p",null,"No titles yet"),E.createElement("p",null,"Add movies or series to start tracking 🔥"))}function Nk({items:r,onDelete:e,onDrag:t,onRate:s,onUpdateWatched:o,viewMode:l="grid",calendarEnabled:h=!1}){return r.length?l==="list"?E.createElement("div",{className:"tier-list-view"},r.map(m=>E.createElement("div",{key:m.id,className:"list-item"},E.createElement($y,{item:m,onDelete:e,onDrag:t,onRate:s,onUpdateWatched:o,viewMode:"list",calendarEnabled:h})))):E.createElement("div",{className:"tier-grid"},r.map(m=>E.createElement($y,{key:m.id,item:m,onDelete:e,onDrag:t,onRate:s,onUpdateWatched:o,viewMode:"grid",calendarEnabled:h}))):E.createElement(Pk,null)}const Dk=[{value:5,label:"🔥🔥🔥🔥🔥 Can’t Wait"},{value:4,label:"🔥🔥🔥🔥 Very Eager"},{value:3,label:"🔥🔥🔥 Interested"},{value:2,label:"🔥🔥 Casual"},{value:1,label:"🔥 Low Priority"}];function Vk({items:r,onRate:e,onDelete:t,onUpdateWatched:s,viewMode:o="grid",calendarEnabled:l=!1}){const[h,m]=ke.useState(null),g=w=>{if(w.type!=="tv"||!w.lastInfo||!w.watchedSeason)return!1;const S=w.lastInfo.match(/S(\d+)\s+E(\d+)/);if(!S)return!1;const[,k]=S.map(Number);return k>w.watchedSeason},_=w=>[...w].sort((S,k)=>{const z=g(S),Q=g(k);return z&&!Q?-1:!z&&Q?1:(k.updatedAt||0)-(S.updatedAt||0)});return E.createElement("div",{className:"tier-list"},Dk.map(w=>{const S=r.filter(z=>z.eagerness===w.value),k=_(S);return k.length?E.createElement("div",{key:w.value,className:"tier",onDragOver:z=>z.preventDefault(),onDrop:()=>{h&&h.eagerness!==w.value&&e(h.id,w.value),m(null)},onTouchMove:z=>z.preventDefault()},E.createElement("div",{className:"tier-header"},E.createElement("h2",{className:"tier-title"},w.label),E.createElement("span",{className:"tier-chip glass-chip"},"Tier ",w.value)),E.createElement(Nk,{items:k,onDelete:t,onDrag:m,onRate:e,onUpdateWatched:s,viewMode:o,calendarEnabled:l})):null}))}async function jE(r){const e=tl(nl,"users",r,"settings","preferences"),t=await Ek(e);return t.exists()?t.data():{emailNotifications:!1,emailFrequency:"daily",email:null,calendarIntegration:!1}}async function bk(r,e){const t=tl(nl,"users",r,"settings","preferences");await wk(t,{...e,updatedAt:Date.now()},{merge:!0})}function xk({user:r,onClose:e}){const[t,s]=ke.useState(!0),[o,l]=ke.useState(!1),[h,m]=ke.useState({emailNotifications:!1,emailFrequency:"daily",email:(r==null?void 0:r.email)||"",calendarIntegration:!1});ke.useEffect(()=>{(async()=>{if(r)try{const w=await jE(r.uid);m({emailNotifications:w.emailNotifications||!1,emailFrequency:w.emailFrequency||"daily",email:w.email||r.email||"",calendarIntegration:w.calendarIntegration||!1})}catch(w){console.error("Failed to load settings:",w)}finally{s(!1)}})()},[r]);const g=async()=>{if(r){l(!0);try{await bk(r.uid,h),alert("Settings saved successfully!"),e()}catch(_){console.error("Failed to save settings:",_),alert("Failed to save settings. Please try again.")}finally{l(!1)}}};return t?E.createElement("div",{className:"modal-backdrop",onClick:e},E.createElement("div",{className:"modal-panel glass-panel settings-modal",onClick:_=>_.stopPropagation()},E.createElement("div",{className:"summary-loading"},E.createElement("div",{className:"summary-loading-spinner"}),E.createElement("p",null,"Loading settings...")))):E.createElement("div",{className:"modal-backdrop",onClick:e},E.createElement("div",{className:"modal-panel glass-panel settings-modal",onClick:_=>_.stopPropagation()},E.createElement("div",{className:"settings-header"},E.createElement("h2",{className:"settings-title"},"Settings"),E.createElement("button",{className:"summary-modal-close",onClick:e,"aria-label":"Close"},"✕")),E.createElement("div",{className:"settings-content"},E.createElement("div",{className:"settings-section"},E.createElement("h3",{className:"settings-section-title"},"Email Notifications"),E.createElement("p",{className:"settings-section-description"},"Get notified when new episodes are available for shows in your watchlist."),E.createElement("div",{className:"settings-option"},E.createElement("label",{className:"settings-checkbox-label"},E.createElement("input",{type:"checkbox",checked:h.emailNotifications,onChange:_=>m({...h,emailNotifications:_.target.checked}),className:"settings-checkbox"}),E.createElement("span",null,"Enable email notifications"))),h.emailNotifications&&E.createElement(E.Fragment,null,E.createElement("div",{className:"settings-option"},E.createElement("label",{className:"settings-label"},"Email Address"),E.createElement("input",{type:"email",value:h.email,onChange:_=>m({...h,email:_.target.value}),placeholder:"your@email.com",className:"settings-input"}),E.createElement("small",{className:"settings-hint"},"We'll send notifications to this email address")),E.createElement("div",{className:"settings-option"},E.createElement("label",{className:"settings-label"},"Notification Frequency"),E.createElement("select",{value:h.emailFrequency,onChange:_=>m({...h,emailFrequency:_.target.value}),className:"settings-select"},E.createElement("option",{value:"immediate"},"Immediate (as soon as new episodes arrive)"),E.createElement("option",{value:"daily"},"Daily Digest (once per day)"),E.createElement("option",{value:"weekly"},"Weekly Digest (once per week)")),E.createElement("small",{className:"settings-hint"},"Choose how often you want to receive notifications")))),E.createElement("div",{className:"settings-section"},E.createElement("h3",{className:"settings-section-title"},"Calendar Integration"),E.createElement("p",{className:"settings-section-description"},"Add upcoming episodes or movie releases directly to your Google Calendar."),E.createElement("div",{className:"settings-option"},E.createElement("label",{className:"settings-checkbox-label"},E.createElement("input",{type:"checkbox",checked:h.calendarIntegration,onChange:_=>m({...h,calendarIntegration:_.target.checked}),className:"settings-checkbox"}),E.createElement("span",null,"Enable calendar integration")),E.createElement("small",{className:"settings-hint",style:{marginTop:"0.5rem",display:"block"}},"When enabled, a calendar button will appear on each card. Click it to add the next episode or release date to your Google Calendar."))),E.createElement("div",{className:"settings-section"},E.createElement("h3",{className:"settings-section-title"},"About"),E.createElement("p",{className:"settings-section-description"},"Email notifications are powered by Firebase Cloud Functions and SendGrid. Notifications are sent automatically when new episodes are detected for shows you're tracking."))),E.createElement("div",{className:"settings-footer"},E.createElement("button",{type:"button",className:"btn btn-outline",onClick:e},"Cancel"),E.createElement("button",{type:"button",className:"btn btn-primary",onClick:g,disabled:o||h.emailNotifications&&!h.email},o?"Saving...":"Save Settings"))))}function Ok(){const r=()=>{U_(ic,zE)};return E.createElement("div",{className:"landing-page"},E.createElement("section",{className:"hero"},E.createElement("div",{className:"hero-content"},E.createElement("h1",null,"Never Miss Your Next Binge-Worthy Show"),E.createElement("p",{className:"hero-subtitle"},"Track movies and TV shows, organize by priority, get notified about new episodes, and sync with your calendar. All in one beautiful app."),E.createElement("button",{onClick:r,className:"cta-button"},E.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},E.createElement("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),E.createElement("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),E.createElement("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),E.createElement("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})),"Get Started - It's Free"),E.createElement("p",{className:"hero-note"},"No credit card required • Sync across devices")),E.createElement("div",{className:"hero-image"},E.createElement("div",{className:"hero-mockup"},E.createElement("div",{className:"mockup-screen"},E.createElement("div",{className:"mockup-card"},E.createElement("div",{className:"mockup-poster"}),E.createElement("div",{className:"mockup-info"},E.createElement("div",{className:"mockup-title"}),E.createElement("div",{className:"mockup-meta"}))),E.createElement("div",{className:"mockup-card"},E.createElement("div",{className:"mockup-poster"}),E.createElement("div",{className:"mockup-info"},E.createElement("div",{className:"mockup-title"}),E.createElement("div",{className:"mockup-meta"}))))))),E.createElement("section",{className:"features"},E.createElement("h2",null,"Everything You Need to Manage Your Watchlist"),E.createElement("div",{className:"features-grid"},E.createElement("div",{className:"feature-card"},E.createElement("div",{className:"feature-icon"},"🔥"),E.createElement("h3",null,"Priority Tiers"),E.createElement("p",null,`Organize shows by how excited you are. From "Can't Wait" to "Maybe Later"`)),E.createElement("div",{className:"feature-card"},E.createElement("div",{className:"feature-icon"},"📺"),E.createElement("h3",null,"Episode Tracking"),E.createElement("p",null,"Mark which seasons you've watched and get notified when new ones drop")),E.createElement("div",{className:"feature-card"},E.createElement("div",{className:"feature-icon"},"🔔"),E.createElement("h3",null,"Smart Notifications"),E.createElement("p",null,"Never miss a new episode. Get alerts when your shows release new seasons")),E.createElement("div",{className:"feature-card"},E.createElement("div",{className:"feature-icon"},"📅"),E.createElement("h3",null,"Calendar Sync"),E.createElement("p",null,"Add reminders to Google Calendar so you never forget to watch")),E.createElement("div",{className:"feature-card"},E.createElement("div",{className:"feature-icon"},"🎬"),E.createElement("h3",null,"TMDB Integration"),E.createElement("p",null,"Search 1M+ movies & series with ratings, trailers, and release dates")),E.createElement("div",{className:"feature-card"},E.createElement("div",{className:"feature-icon"},"🎨"),E.createElement("h3",null,"Beautiful UI"),E.createElement("p",null,"Netflix-inspired design that works perfectly on desktop and mobile")))),E.createElement("section",{className:"how-it-works"},E.createElement("h2",null,"Simple, Yet Powerful"),E.createElement("div",{className:"steps"},E.createElement("div",{className:"step"},E.createElement("div",{className:"step-number"},"1"),E.createElement("h3",null,"Search & Add"),E.createElement("p",null,"Find any movie or TV show from TMDB's massive database")),E.createElement("div",{className:"step-arrow"},"→"),E.createElement("div",{className:"step"},E.createElement("div",{className:"step-number"},"2"),E.createElement("h3",null,"Organize by Priority"),E.createElement("p",null,"Sort into 5 tiers based on how eager you are to watch")),E.createElement("div",{className:"step-arrow"},"→"),E.createElement("div",{className:"step"},E.createElement("div",{className:"step-number"},"3"),E.createElement("h3",null,"Track Progress"),E.createElement("p",null,"Mark which seasons you've watched, get notified about new ones")))),E.createElement("section",{className:"stats"},E.createElement("div",{className:"stats-container"},E.createElement("div",{className:"stat"},E.createElement("div",{className:"stat-number"},"1M+"),E.createElement("div",{className:"stat-label"},"Movies & Shows")),E.createElement("div",{className:"stat"},E.createElement("div",{className:"stat-number"},"Free"),E.createElement("div",{className:"stat-label"},"Forever")),E.createElement("div",{className:"stat"},E.createElement("div",{className:"stat-number"},"☁️"),E.createElement("div",{className:"stat-label"},"Cloud Sync")))),E.createElement("section",{className:"cta-section"},E.createElement("h2",null,"Start Tracking Your Watchlist Today"),E.createElement("p",null,"Join and organize your entertainment life in minutes"),E.createElement("button",{onClick:r,className:"cta-button-large"},E.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},E.createElement("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),E.createElement("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),E.createElement("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),E.createElement("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})),"Sign In with Google")),E.createElement("footer",{className:"landing-footer"},E.createElement("p",null,"Made with ❤️ for movie & TV enthusiasts by Ranjit and Ai"),E.createElement("div",{className:"footer-links"},E.createElement("a",{href:"https://github.com/Ranjit-choudhary",target:"_blank",rel:"noopener noreferrer"},"GitHub"),E.createElement("span",null,"•"),E.createElement("a",{href:"mailto:ranjit.choudhary0123@gmail.com"},"Contact"))))}function Mk(){const[r,e]=ke.useState(null),[t,s]=ke.useState(!0);return ke.useEffect(()=>P0(ic,l=>{e(l),s(!1)}),[]),{user:r,loading:t}}function $E(r){return ak(nl,"users",r,"watchlist")}function Lk(r,e){return Ak($E(r),t=>{e(t.docs.map(s=>({id:s.id,...s.data()})))})}function Hy(r,e){return Sk($E(r),e)}function Au(r,e,t){return Tk(tl(nl,"users",r,"watchlist",e),t)}function Fk(r,e){return Ik(tl(nl,"users",r,"watchlist",e))}function Uk(){var Z;const{user:r,loading:e}=Mk(),[t,s]=ke.useState([]),[o,l]=ke.useState("all"),[h,m]=ke.useState("pain"),[g,_]=ke.useState(!1),[w,S]=ke.useState(null),[k,z]=ke.useState(!1),[Q,Y]=ke.useState("grid"),[H,ce]=ke.useState(!1),[ue,pe]=ke.useState(!1),[Te,he]=ke.useState(null);if(ke.useEffect(()=>{if(r)return Lk(r.uid,s)},[r]),ke.useEffect(()=>{(async()=>{if(r)try{const N=await jE(r.uid);he(N)}catch(N){console.error("Failed to load user settings:",N)}})()},[r]),ke.useEffect(()=>{if(!r||!t.length)return;const j=async()=>{const $=`lastRefresh_${r.uid}`,de=localStorage.getItem($),fe=Date.now();(!de||fe-parseInt(de)>864e5)&&(console.log("🔄 Auto-refreshing watchlist (daily check)..."),await D(),localStorage.setItem($,fe.toString()))};j();const N=setInterval(j,36e5);return()=>clearInterval(N)},[r,t.length]),e)return E.createElement("div",{className:"app-root"},E.createElement("div",null,"Loading..."));if(!r)return E.createElement("div",{className:"app-root"},E.createElement(Ok,null));const Ce=async j=>{try{if(console.log("TMDB result:",j),t.find(Ze=>Ze.tmdbId===j.id&&Ze.type===j.media_type)){alert(`"${j.title||j.name}" is already in your watchlist!`);return}const[$,de]=await Promise.all([Wd(j.media_type,j.id),Gd(j.media_type,j.id)]);console.log("TMDB details:",$);let fe=null,Re=null,Ae="waiting",xe=null,Pe=null;if(j.media_type==="tv"){const Ze=$.last_episode_to_air;Ze&&(fe=`S${Ze.season_number} E${Ze.episode_number}`,Re=Ze.air_date,Ae="waiting"),xe=$.number_of_seasons||null,Pe=$.number_of_episodes||null}else $.release_date&&(fe=$.release_date,Re=$.release_date,Ae="waiting");const $e={title:j.title||j.name,tmdbId:j.id,type:j.media_type,poster:BE($.poster_path),lastInfo:fe,lastDate:Re,status:Ae,eagerness:3,rating:$.vote_average||null,overview:$.overview||null,trailerKey:de||null,totalSeasons:xe,totalEpisodes:Pe,watchedSeason:null,watchedEpisode:null,createdAt:Date.now()};S($e),z(!0),console.log("✅ Prepared draft item for tier selection")}catch(N){console.error("❌ Failed to add:",N),alert("Failed to add item. Check console.")}},D=async()=>{if(r){_(!0);try{for(const N of t){const $=await Wd(N.type,N.tmdbId);if(N.type==="tv"){const de=$.last_episode_to_air;if(de){const fe=`S${de.season_number} E${de.episode_number}`;fe!==N.lastInfo&&await Au(r.uid,N.id,{lastInfo:fe,lastDate:de.air_date,status:"new",updatedAt:Date.now()})}}else $.release_date&&$.release_date!==N.lastDate&&await Au(r.uid,N.id,{lastInfo:$.release_date,lastDate:$.release_date,status:"new",updatedAt:Date.now()})}const j=`lastRefresh_${r.uid}`;localStorage.setItem(j,Date.now().toString())}catch(j){console.error("Error during refresh:",j)}_(!1)}},I=(j,N)=>Au(r.uid,j,{eagerness:N}),R=(j,N)=>Au(r.uid,j,{...N,updatedAt:Date.now()}),x=async j=>{if(w)try{await Hy(r.uid,{...w,eagerness:j})}finally{z(!1),S(null),pe(!1)}},V=async()=>{if(w)try{await Hy(r.uid,w)}finally{z(!1),S(null),pe(!1)}},O=j=>Fk(r.uid,j),Ue=t.filter(j=>{if(j.type!=="tv"||!j.lastInfo||!j.watchedSeason)return!1;const N=j.lastInfo.match(/S(\d+)\s+E(\d+)/);if(!N)return!1;const[,$]=N.map(Number);return $>j.watchedSeason}),rt=Ue.length,ht=t.filter(j=>o==="all"?!0:j.status===o),je=j=>j.lastDate?Math.floor((Date.now()-new Date(j.lastDate))/(1e3*60*60*24)*j.eagerness):0,ee=[...ht].sort((j,N)=>h==="pain"?je(N)-je(j):h==="eagerness"?N.eagerness-j.eagerness:(N.updatedAt||0)-(j.updatedAt||0));return E.createElement("div",{className:"app-root section-stack"},E.createElement(kk,{filter:o,setFilter:l,sort:h,setSort:m,user:r,onRefresh:D,refreshing:g,unwatchedCount:rt,unwatchedItems:Ue,viewMode:Q,setViewMode:Y,onOpenSettings:()=>ce(!0),onSelectTitle:Ce}),ee.length===0?E.createElement("div",{className:"empty-state-container"},E.createElement("div",{className:"empty-state-icon"},"🍿"),E.createElement("div",{className:"empty-state-text"},"Your watchlist is looking empty"),E.createElement("div",{className:"empty-state-subtext"},"Use the search bar above to find movies & series to add.")):E.createElement(Vk,{items:ee,onRate:I,onDelete:O,onUpdateWatched:R,viewMode:Q,calendarEnabled:(Te==null?void 0:Te.calendarIntegration)||!1}),k&&w&&E.createElement("div",{className:"modal-backdrop"},E.createElement("div",{className:"modal-panel glass-panel"},E.createElement("div",{className:"modal-header"},E.createElement("div",{className:"modal-title"},"Add to watchlist"),E.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>{z(!1),S(null),pe(!1)}},"✕")),E.createElement("div",{style:{display:"flex",gap:"0.9rem",marginBottom:"0.75rem"}},w.poster&&E.createElement("div",{style:{width:"90px",height:"130px",borderRadius:"10px",backgroundImage:`url(${w.poster})`,backgroundSize:"cover",backgroundPosition:"center",flexShrink:0}}),E.createElement("div",{style:{flex:1,minWidth:0}},E.createElement("div",{style:{fontWeight:600,marginBottom:"0.15rem",fontSize:"1rem"}},w.title),E.createElement("div",{style:{fontSize:"0.8rem",opacity:.8,marginBottom:"0.3rem"}},(Z=w.type)==null?void 0:Z.toUpperCase()),w.rating&&E.createElement("span",{className:"card-rating-pill"},"⭐ ",w.rating.toFixed(1)),(w.totalSeasons||w.totalEpisodes)&&E.createElement("div",{style:{marginTop:"0.35rem",fontSize:"0.8rem",color:"#9ca3af",display:"flex",gap:"0.5rem",flexWrap:"wrap"}},w.totalSeasons&&E.createElement("span",null,w.totalSeasons," season",w.totalSeasons!==1?"s":""),w.totalEpisodes&&E.createElement("span",null,"• ",w.totalEpisodes," episodes")))),w.overview&&E.createElement("div",{style:{marginBottom:"0.75rem"}},E.createElement("div",{style:{fontSize:"0.85rem",fontWeight:600,marginBottom:"0.25rem"}},"Summary"),E.createElement("p",{style:{margin:0,fontSize:"0.85rem",lineHeight:1.5,color:"#9ca3af"}},w.overview)),w.trailerKey&&E.createElement("div",{style:{marginBottom:"0.9rem"}},E.createElement("button",{type:"button",className:"btn btn-youtube",onClick:()=>pe(!ue)},E.createElement("span",{className:"youtube-icon"},"▶"),ue?"Hide Trailer":"Watch Trailer"),ue&&E.createElement("div",{className:"youtube-embed"},E.createElement("iframe",{src:`https://www.youtube.com/embed/${w.trailerKey}`,title:"Trailer",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),w.type==="tv"&&w.totalSeasons&&E.createElement("div",{style:{marginBottom:"0.9rem"}},E.createElement("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.85rem",opacity:.9}},"Watched up to season (optional)"),E.createElement("div",{className:"season-buttons-grid"},Array.from({length:w.totalSeasons},(j,N)=>N+1).map(j=>E.createElement("button",{key:j,type:"button",className:`season-button ${w.watchedSeason===j?"season-button-active":""}`,onClick:()=>{S(N=>({...N,watchedSeason:j,watchedEpisode:0}))}},"Season ",j)))),E.createElement("div",{style:{marginTop:"0.5rem"}},E.createElement("div",{style:{fontSize:"0.85rem",fontWeight:600,marginBottom:"0.35rem"}},"Choose a tier"),E.createElement("div",{className:"modal-tier-grid"},[{value:5,label:"🔥🔥🔥🔥🔥 Can’t Wait"},{value:4,label:"🔥🔥🔥🔥 Very Eager"},{value:3,label:"🔥🔥🔥 Interested"},{value:2,label:"🔥🔥 Casual"},{value:1,label:"🔥 Low Priority"}].map(j=>E.createElement("button",{key:j.value,type:"button",className:"modal-tier-button",onClick:()=>x(j.value)},E.createElement("div",{style:{fontSize:"0.85rem",marginBottom:"0.1rem"}},j.label),E.createElement("div",{style:{fontSize:"0.7rem",opacity:.75}},"Place into this tier"))))),E.createElement("div",{className:"modal-footer"},E.createElement("button",{type:"button",className:"btn btn-outline",onClick:V},"Skip (use default)")))),H&&E.createElement(xk,{user:r,onClose:()=>ce(!1)}))}rT.createRoot(document.getElementById("root")).render(E.createElement(E.StrictMode,null,E.createElement(Uk,null)));
