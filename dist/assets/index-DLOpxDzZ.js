(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Uy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Kh={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function bE(){if(Qm)return Ae;Qm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.iterator;function P(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,K={};function B(O,$,Te){this.props=O,this.context=$,this.refs=K,this.updater=Te||z}B.prototype.isReactComponent={},B.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function ie(O,$,Te){this.props=O,this.context=$,this.refs=K,this.updater=Te||z}var de=ie.prototype=new Z;de.constructor=ie,X(de,B.prototype),de.isPureReactComponent=!0;var Ee=Array.isArray,Ue=Object.prototype.hasOwnProperty,Se={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(O,$,Te){var Ie,Re={},Ce=null,be=null;if($!=null)for(Ie in $.ref!==void 0&&(be=$.ref),$.key!==void 0&&(Ce=""+$.key),$)Ue.call($,Ie)&&!k.hasOwnProperty(Ie)&&(Re[Ie]=$[Ie]);var Oe=arguments.length-2;if(Oe===1)Re.children=Te;else if(1<Oe){for(var je=Array(Oe),zt=0;zt<Oe;zt++)je[zt]=arguments[zt+2];Re.children=je}if(O&&O.defaultProps)for(Ie in Oe=O.defaultProps,Oe)Re[Ie]===void 0&&(Re[Ie]=Oe[Ie]);return{$$typeof:r,type:O,key:Ce,ref:be,props:Re,_owner:Se.current}}function R(O,$){return{$$typeof:r,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function N(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return $[Te]})}var x=/\/+/g;function A(O,$){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):$.toString(36)}function $e(O,$,Te,Ie,Re){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Ce){case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0}}if(be)return be=O,Re=Re(be),O=Ie===""?"."+A(be,0):Ie,Ee(Re)?(Te="",O!=null&&(Te=O.replace(x,"$&/")+"/"),$e(Re,$,Te,"",function(zt){return zt})):Re!=null&&(V(Re)&&(Re=R(Re,Te+(!Re.key||be&&be.key===Re.key?"":(""+Re.key).replace(x,"$&/")+"/")+O)),$.push(Re)),1;if(be=0,Ie=Ie===""?".":Ie+":",Ee(O))for(var Oe=0;Oe<O.length;Oe++){Ce=O[Oe];var je=Ie+A(Ce,Oe);be+=$e(Ce,$,Te,je,Re)}else if(je=P(O),typeof je=="function")for(O=je.call(O),Oe=0;!(Ce=O.next()).done;)Ce=Ce.value,je=Ie+A(Ce,Oe++),be+=$e(Ce,$,Te,je,Re);else if(Ce==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return be}function _t(O,$,Te){if(O==null)return O;var Ie=[],Re=0;return $e(O,Ie,"","",function(Ce){return $.call(Te,Ce,Re++)}),Ie}function Nt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var Xe={current:null},J={transition:null},ue={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:J,ReactCurrentOwner:Se};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:_t,forEach:function(O,$,Te){_t(O,function(){$.apply(this,arguments)},Te)},count:function(O){var $=0;return _t(O,function(){$++}),$},toArray:function(O){return _t(O,function($){return $})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ie,Ae.StrictMode=s,Ae.Suspense=y,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ae.act=ne,Ae.cloneElement=function(O,$,Te){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=X({},O.props),Re=O.key,Ce=O.ref,be=O._owner;if($!=null){if($.ref!==void 0&&(Ce=$.ref,be=Se.current),$.key!==void 0&&(Re=""+$.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(je in $)Ue.call($,je)&&!k.hasOwnProperty(je)&&(Ie[je]=$[je]===void 0&&Oe!==void 0?Oe[je]:$[je])}var je=arguments.length-2;if(je===1)Ie.children=Te;else if(1<je){Oe=Array(je);for(var zt=0;zt<je;zt++)Oe[zt]=arguments[zt+2];Ie.children=Oe}return{$$typeof:r,type:O.type,key:Re,ref:Ce,props:Ie,_owner:be}},Ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ae.createElement=S,Ae.createFactory=function(O){var $=S.bind(null,O);return $.type=O,$},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:m,render:O}},Ae.isValidElement=V,Ae.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Nt}},Ae.memo=function(O,$){return{$$typeof:_,type:O,compare:$===void 0?null:$}},Ae.startTransition=function(O){var $=J.transition;J.transition={};try{O()}finally{J.transition=$}},Ae.unstable_act=ne,Ae.useCallback=function(O,$){return Xe.current.useCallback(O,$)},Ae.useContext=function(O){return Xe.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return Xe.current.useDeferredValue(O)},Ae.useEffect=function(O,$){return Xe.current.useEffect(O,$)},Ae.useId=function(){return Xe.current.useId()},Ae.useImperativeHandle=function(O,$,Te){return Xe.current.useImperativeHandle(O,$,Te)},Ae.useInsertionEffect=function(O,$){return Xe.current.useInsertionEffect(O,$)},Ae.useLayoutEffect=function(O,$){return Xe.current.useLayoutEffect(O,$)},Ae.useMemo=function(O,$){return Xe.current.useMemo(O,$)},Ae.useReducer=function(O,$,Te){return Xe.current.useReducer(O,$,Te)},Ae.useRef=function(O){return Xe.current.useRef(O)},Ae.useState=function(O){return Xe.current.useState(O)},Ae.useSyncExternalStore=function(O,$,Te){return Xe.current.useSyncExternalStore(O,$,Te)},Ae.useTransition=function(){return Xe.current.useTransition()},Ae.version="18.3.1",Ae}var Xm;function zy(){return Xm||(Xm=1,Kh.exports=bE()),Kh.exports}var Nn=zy();const ve=Uy(Nn);var gu={},Qh={exports:{}},Qt={},Xh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function FE(){return Ym||(Ym=1,(function(r){function e(J,ue){var ne=J.length;J.push(ue);e:for(;0<ne;){var O=ne-1>>>1,$=J[O];if(0<o($,ue))J[O]=ue,J[ne]=$,ne=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ue=J[0],ne=J.pop();if(ne!==ue){J[0]=ne;e:for(var O=0,$=J.length,Te=$>>>1;O<Te;){var Ie=2*(O+1)-1,Re=J[Ie],Ce=Ie+1,be=J[Ce];if(0>o(Re,ne))Ce<$&&0>o(be,Re)?(J[O]=be,J[Ce]=ne,O=Ce):(J[O]=Re,J[Ie]=ne,O=Ie);else if(Ce<$&&0>o(be,ne))J[O]=be,J[Ce]=ne,O=Ce;else break e}}return ue}function o(J,ue){var ne=J.sortIndex-ue.sortIndex;return ne!==0?ne:J.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var y=[],_=[],E=1,I=null,P=3,z=!1,X=!1,K=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(J){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=J)s(_),ue.sortIndex=ue.expirationTime,e(y,ue);else break;ue=t(_)}}function Ee(J){if(K=!1,de(J),!X)if(t(y)!==null)X=!0,Nt(Ue);else{var ue=t(_);ue!==null&&Xe(Ee,ue.startTime-J)}}function Ue(J,ue){X=!1,K&&(K=!1,Z(S),S=-1),z=!0;var ne=P;try{for(de(ue),I=t(y);I!==null&&(!(I.expirationTime>ue)||J&&!N());){var O=I.callback;if(typeof O=="function"){I.callback=null,P=I.priorityLevel;var $=O(I.expirationTime<=ue);ue=r.unstable_now(),typeof $=="function"?I.callback=$:I===t(y)&&s(y),de(ue)}else s(y);I=t(y)}if(I!==null)var Te=!0;else{var Ie=t(_);Ie!==null&&Xe(Ee,Ie.startTime-ue),Te=!1}return Te}finally{I=null,P=ne,z=!1}}var Se=!1,k=null,S=-1,R=5,V=-1;function N(){return!(r.unstable_now()-V<R)}function x(){if(k!==null){var J=r.unstable_now();V=J;var ue=!0;try{ue=k(!0,J)}finally{ue?A():(Se=!1,k=null)}}else Se=!1}var A;if(typeof ie=="function")A=function(){ie(x)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,_t=$e.port2;$e.port1.onmessage=x,A=function(){_t.postMessage(null)}}else A=function(){B(x,0)};function Nt(J){k=J,Se||(Se=!0,A())}function Xe(J,ue){S=B(function(){J(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){X||z||(X=!0,Nt(Ue))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(J){switch(P){case 1:case 2:case 3:var ue=3;break;default:ue=P}var ne=P;P=ue;try{return J()}finally{P=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,ue){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=P;P=J;try{return ue()}finally{P=ne}},r.unstable_scheduleCallback=function(J,ue,ne){var O=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,J){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,J={id:E++,callback:ue,priorityLevel:J,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(J.sortIndex=ne,e(_,J),t(y)===null&&J===t(_)&&(K?(Z(S),S=-1):K=!0,Xe(Ee,ne-O))):(J.sortIndex=$,e(y,J),X||z||(X=!0,Nt(Ue))),J},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(J){var ue=P;return function(){var ne=P;P=ue;try{return J.apply(this,arguments)}finally{P=ne}}}})(Yh)),Yh}var Jm;function UE(){return Jm||(Jm=1,Xh.exports=FE()),Xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function zE(){if(Zm)return Qt;Zm=1;var r=zy(),e=UE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function P(n){return y.call(I,n)?!0:y.call(E,n)?!1:_.test(n)?I[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function K(n,i,a,c,f,d,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=d,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new K(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new K(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new K(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new K(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new K(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new K(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new K(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new K(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new K(n,5,!1,n.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Z,ie);B[i]=new K(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Z,ie);B[i]=new K(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Z,ie);B[i]=new K(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!0,!0)});function de(n,i,a,c){var f=B.hasOwnProperty(i)?B[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(X(i,a,f,c)&&(a=null),c||f===null?P(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),Se=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),J=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Te=!1;function Ie(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var f=F.stack.split(`
`),d=c.stack.split(`
`),v=f.length-1,T=d.length-1;1<=v&&0<=T&&f[v]!==d[T];)T--;for(;1<=v&&0<=T;v--,T--)if(f[v]!==d[T]){if(v!==1||T!==1)do if(v--,T--,0>T||f[v]!==d[T]){var C=`
`+f[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Re(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Se:return"Portal";case R:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case Nt:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function zt(n){var i=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,d.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ws(n){n._valueTracker||(n._valueTracker=zt(n))}function xo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Es(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ts(n,i){i=i.checked,i!=null&&de(n,"checked",i,!1)}function Di(n,i){Ts(n,i);var a=Oe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?at(n,i.type,a):i.hasOwnProperty("defaultValue")&&at(n,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Mo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function at(n,i,a){(i!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rt=Array.isArray;function wn(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Lo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function bo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(rt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Oe(a)}}function nl(n,i){var a=Oe(i.value),c=Oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function br(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Fo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Fo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fr,rl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Vi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},il=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(n){il.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ur[i]=Ur[n]})});function zr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ur.hasOwnProperty(n)&&Ur[n]?(""+i).trim():i+"px"}function Ss(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=zr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Uo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,i){if(i){if(Uo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function As(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hr=null,fr=null,tt=null;function zo(n){if(n=da(n)){if(typeof hr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Dl(i),hr(n.stateNode,n.type,i))}}function Br(n){fr?tt?tt.push(n):tt=[n]:fr=n}function $r(){if(fr){var n=fr,i=tt;if(tt=fr=null,zo(n),i)for(n=0;n<i.length;n++)zo(i[n])}}function sl(n,i){return n(i)}function ol(){}var bn=!1;function al(n,i,a){if(bn)return n(i,a);bn=!0;try{return sl(n,i,a)}finally{bn=!1,(fr!==null||tt!==null)&&(ol(),$r())}}function Oi(n,i){var a=n.stateNode;if(a===null)return null;var c=Dl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qr=!1;if(m)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{qr=!1}function ll(n,i,a,c,f,d,v,T,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(W){this.onError(W)}}var dr=!1,Fn=null,Cs=!1,cn=null,ul={onError:function(n){dr=!0,Fn=n}};function cl(n,i,a,c,f,d,v,T,C){dr=!1,Fn=null,ll.apply(ul,arguments)}function jo(n,i,a,c,f,d,v,T,C){if(cl.apply(this,arguments),dr){if(dr){var F=Fn;dr=!1,Fn=null}else throw Error(t(198));Cs||(Cs=!0,cn=F)}}function Tn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Bo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function hl(n){if(Tn(n)!==n)throw Error(t(188))}function fl(n){var i=n.alternate;if(!i){if(i=Tn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return hl(f),n;if(d===c)return hl(f),i;d=d.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=d;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function dl(n){return n=fl(n),n!==null?xi(n):null}function xi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xi(n);if(i!==null)return i;n=n.sibling}return null}var $o=e.unstable_scheduleCallback,Ps=e.unstable_cancelCallback,Mi=e.unstable_shouldYield,pr=e.unstable_requestPaint,He=e.unstable_now,Ac=e.unstable_getCurrentPriorityLevel,ks=e.unstable_ImmediatePriority,qo=e.unstable_UserBlockingPriority,Li=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,Ns=e.unstable_IdlePriority,bi=null,Jt=null;function pl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Fi,Un=Math.log,hn=Math.LN2;function Fi(n){return n>>>=0,n===0?32:31-(Un(n)/hn|0)|0}var zn=64,Wr=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,d=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~f;T!==0?c=Le(T):(d&=v,d!==0&&(c=Le(d)))}else v=a&~f,v!==0?c=Le(v):d!==0&&(c=Le(d));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,d=i&-i,f>=d||f===16&&(d&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Zt(i),f=1<<a,c|=n[a],i&=~f;return c}function Ui(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes;0<d;){var v=31-Zt(d),T=1<<v,C=f[v];C===-1?((T&a)===0||(T&c)!==0)&&(f[v]=Ui(T,i)):C<=i&&(n.expiredLanes|=T),d&=~T}}function Wo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Go(){var n=zn;return zn<<=1,(zn&4194240)===0&&(zn=64),n}function Ko(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ji(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Zt(i),n[i]=a}function Rc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Zt(a),d=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~d}}function Qo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Zt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var De=0;function jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Xo,Ds,Yo,Jo,Zo,Bn=!1,Vs=[],$n=null,qn=null,It=null,Bi=new Map,gr=new Map,en=[],ml="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gr(n,i){switch(n){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(i.pointerId)}}function In(n,i,a,c,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:d,targetContainers:[f]},i!==null&&(i=da(i),i!==null&&Ds(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function gl(n,i,a,c,f){switch(i){case"focusin":return $n=In($n,n,i,a,c,f),!0;case"dragenter":return qn=In(qn,n,i,a,c,f),!0;case"mouseover":return It=In(It,n,i,a,c,f),!0;case"pointerover":var d=f.pointerId;return Bi.set(d,In(Bi.get(d)||null,n,i,a,c,f)),!0;case"gotpointercapture":return d=f.pointerId,gr.set(d,In(gr.get(d)||null,n,i,a,c,f)),!0}return!1}function Os(n){var i=Wi(n.target);if(i!==null){var a=Tn(i);if(a!==null){if(i=a.tag,i===13){if(i=Bo(a),i!==null){n.blockedOn=i,Zo(n.priority,function(){Yo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Be(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);jr=c,a.target.dispatchEvent(c),jr=null}else return i=da(a),i!==null&&Ds(i),n.blockedOn=a,!1;i.shift()}return!0}function yl(n,i,a){Be(n)&&a.delete(i)}function Cc(){Bn=!1,$n!==null&&Be($n)&&($n=null),qn!==null&&Be(qn)&&(qn=null),It!==null&&Be(It)&&(It=null),Bi.forEach(yl),gr.forEach(yl)}function Kr(n,i){n.blockedOn===i&&(n.blockedOn=null,Bn||(Bn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cc)))}function Qr(n){function i(f){return Kr(f,n)}if(0<Vs.length){Kr(Vs[0],n);for(var a=1;a<Vs.length;a++){var c=Vs[a];c.blockedOn===n&&(c.blockedOn=null)}}for($n!==null&&Kr($n,n),qn!==null&&Kr(qn,n),It!==null&&Kr(It,n),Bi.forEach(i),gr.forEach(i),a=0;a<en.length;a++)c=en[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<en.length&&(a=en[0],a.blockedOn===null);)Os(a),a.blockedOn===null&&en.shift()}var yr=Ee.ReactCurrentBatchConfig,_r=!0;function Hn(n,i,a,c){var f=De,d=yr.transition;yr.transition=null;try{De=1,ea(n,i,a,c)}finally{De=f,yr.transition=d}}function _l(n,i,a,c){var f=De,d=yr.transition;yr.transition=null;try{De=4,ea(n,i,a,c)}finally{De=f,yr.transition=d}}function ea(n,i,a,c){if(_r){var f=xs(n,i,a,c);if(f===null)Fc(n,i,c,Wn,a),Gr(n,c);else if(gl(f,n,i,a,c))c.stopPropagation();else if(Gr(n,c),i&4&&-1<ml.indexOf(n)){for(;f!==null;){var d=da(f);if(d!==null&&Xo(d),d=xs(n,i,a,c),d===null&&Fc(n,i,c,Wn,a),d===f)break;f=d}f!==null&&c.stopPropagation()}else Fc(n,i,c,null,a)}}var Wn=null;function xs(n,i,a,c){if(Wn=null,n=Rs(c),n=Wi(n),n!==null)if(i=Tn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Bo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Wn=n,null}function Ms(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ac()){case ks:return 1;case qo:return 4;case Li:case Ho:return 16;case Ns:return 536870912;default:return 16}default:return 16}}var tn=null,Ls=null,vr=null;function vl(){if(vr)return vr;var n,i=Ls,a=i.length,c,f="value"in tn?tn.value:tn.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===f[d-c];c++);return vr=f.slice(n,1<c?1-c:void 0)}function $i(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Gn(){return!0}function ta(){return!1}function Dt(n){function i(a,c,f,d,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Gn:ta,this.isPropagationStopped=ta,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),i}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Dt(Kn),Xr=ne({},Kn,{view:0,detail:0}),bs=Dt(Xr),Fs,Us,nn,Hi=ne({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nn&&(nn&&n.type==="mousemove"?(Fs=n.screenX-nn.screenX,Us=n.screenY-nn.screenY):Us=Fs=0,nn=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:Us}}),na=Dt(Hi),wl=ne({},Hi,{dataTransfer:0}),El=Dt(wl),zs=ne({},Xr,{relatedTarget:0}),St=Dt(zs),Tl=ne({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Il=Dt(Tl),Yr=ne({},Kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Dt(Yr),p=ne({},Kn,{data:0}),g=Dt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=U[n])?!!i[n]:!1}function _e(){return Y}var it=ne({},Xr,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=$i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?$i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Dt(it),lt=ne({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rn=Dt(lt),wr=ne({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),Qn=Dt(wr),Xn=ne({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),js=Dt(Xn),ra=ne({},Hi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dw=Dt(ra),Vw=[9,13,27,32],Pc=m&&"CompositionEvent"in window,ia=null;m&&"documentMode"in document&&(ia=document.documentMode);var Ow=m&&"TextEvent"in window&&!ia,jd=m&&(!Pc||ia&&8<ia&&11>=ia),Bd=" ",$d=!1;function qd(n,i){switch(n){case"keyup":return Vw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function xw(n,i){switch(n){case"compositionend":return Hd(i);case"keypress":return i.which!==32?null:($d=!0,Bd);case"textInput":return n=i.data,n===Bd&&$d?null:n;default:return null}}function Mw(n,i){if(Bs)return n==="compositionend"||!Pc&&qd(n,i)?(n=vl(),vr=Ls=tn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return jd&&i.locale!=="ko"?null:i.data;default:return null}}var Lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Lw[n.type]:i==="textarea"}function Gd(n,i,a,c){Br(c),i=Pl(i,"onChange"),0<i.length&&(a=new qi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function bw(n){hp(n,0)}function Sl(n){var i=Gs(n);if(xo(i))return n}function Fw(n,i){if(n==="change")return i}var Kd=!1;if(m){var kc;if(m){var Nc="oninput"in document;if(!Nc){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Nc=typeof Qd.oninput=="function"}kc=Nc}else kc=!1;Kd=kc&&(!document.documentMode||9<document.documentMode)}function Xd(){sa&&(sa.detachEvent("onpropertychange",Yd),oa=sa=null)}function Yd(n){if(n.propertyName==="value"&&Sl(oa)){var i=[];Gd(i,oa,n,Rs(n)),al(bw,i)}}function Uw(n,i,a){n==="focusin"?(Xd(),sa=i,oa=a,sa.attachEvent("onpropertychange",Yd)):n==="focusout"&&Xd()}function zw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sl(oa)}function jw(n,i){if(n==="click")return Sl(i)}function Bw(n,i){if(n==="input"||n==="change")return Sl(i)}function $w(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Sn=typeof Object.is=="function"?Object.is:$w;function aa(n,i){if(Sn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!y.call(i,f)||!Sn(n[f],i[f]))return!1}return!0}function Jd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zd(n,i){var a=Jd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jd(a)}}function ep(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ep(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function tp(){for(var n=window,i=Lr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lr(n.document)}return i}function Dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function qw(n){var i=tp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ep(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,d=Math.min(c.start,f);c=c.end===void 0?d:Math.min(c.end,f),!n.extend&&d>c&&(f=c,c=d,d=f),f=Zd(a,d);var v=Zd(a,c);f&&v&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),d>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hw=m&&"documentMode"in document&&11>=document.documentMode,$s=null,Vc=null,la=null,Oc=!1;function np(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||$s==null||$s!==Lr(c)||(c=$s,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Pl(Vc,"onSelect"),0<c.length&&(i=new qi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$s)))}function Al(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},xc={},rp={};m&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Rl(n){if(xc[n])return xc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in rp)return xc[n]=i[a];return n}var ip=Rl("animationend"),sp=Rl("animationiteration"),op=Rl("animationstart"),ap=Rl("transitionend"),lp=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,i){lp.set(n,i),u(i,[n])}for(var Mc=0;Mc<up.length;Mc++){var Lc=up[Mc],Ww=Lc.toLowerCase(),Gw=Lc[0].toUpperCase()+Lc.slice(1);Jr(Ww,"on"+Gw)}Jr(ip,"onAnimationEnd"),Jr(sp,"onAnimationIteration"),Jr(op,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(ap,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function cp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,jo(c,i,void 0,n),n.currentTarget=null}function hp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var d=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break e;cp(f,T,F),d=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,F=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break e;cp(f,T,F),d=C}}}if(Cs)throw n=cn,Cs=!1,cn=null,n}function We(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=n+"__bubble";a.has(c)||(fp(i,n,2,!1),a.add(c))}function bc(n,i,a){var c=0;i&&(c|=4),fp(a,n,c,i)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Cl]){n[Cl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Kw.has(a)||bc(a,!1,n),bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Cl]||(i[Cl]=!0,bc("selectionchange",!1,i))}}function fp(n,i,a,c){switch(Ms(i)){case 1:var f=Hn;break;case 4:f=_l;break;default:f=ea}a=f.bind(null,i,a,n),f=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Fc(n,i,a,c,f){var d=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===f||T.nodeType===8&&T.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;v=v.return}for(;T!==null;){if(v=Wi(T),v===null)return;if(C=v.tag,C===5||C===6){c=d=v;continue e}T=T.parentNode}}c=c.return}al(function(){var F=d,W=Rs(a),G=[];e:{var q=lp.get(n);if(q!==void 0){var ee=qi,se=n;switch(n){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":ee=ze;break;case"focusin":se="focus",ee=St;break;case"focusout":se="blur",ee=St;break;case"beforeblur":case"afterblur":ee=St;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=El;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Qn;break;case ip:case sp:case op:ee=Il;break;case ap:ee=js;break;case"scroll":ee=bs;break;case"wheel":ee=Dw;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=rn}var oe=(i&4)!==0,st=!oe&&n==="scroll",M=oe?q!==null?q+"Capture":null:q;oe=[];for(var D=F,b;D!==null;){b=D;var Q=b.stateNode;if(b.tag===5&&Q!==null&&(b=Q,M!==null&&(Q=Oi(D,M),Q!=null&&oe.push(ha(D,Q,b)))),st)break;D=D.return}0<oe.length&&(q=new ee(q,se,null,a,W),G.push({event:q,listeners:oe}))}}if((i&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==jr&&(se=a.relatedTarget||a.fromElement)&&(Wi(se)||se[Er]))break e;if((ee||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=F,se=se?Wi(se):null,se!==null&&(st=Tn(se),se!==st||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=F),ee!==se)){if(oe=na,Q="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(oe=rn,Q="onPointerLeave",M="onPointerEnter",D="pointer"),st=ee==null?q:Gs(ee),b=se==null?q:Gs(se),q=new oe(Q,D+"leave",ee,a,W),q.target=st,q.relatedTarget=b,Q=null,Wi(W)===F&&(oe=new oe(M,D+"enter",se,a,W),oe.target=b,oe.relatedTarget=st,Q=oe),st=Q,ee&&se)t:{for(oe=ee,M=se,D=0,b=oe;b;b=Hs(b))D++;for(b=0,Q=M;Q;Q=Hs(Q))b++;for(;0<D-b;)oe=Hs(oe),D--;for(;0<b-D;)M=Hs(M),b--;for(;D--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Hs(oe),M=Hs(M)}oe=null}else oe=null;ee!==null&&dp(G,q,ee,oe,!1),se!==null&&st!==null&&dp(G,st,se,oe,!0)}}e:{if(q=F?Gs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ae=Fw;else if(Wd(q))if(Kd)ae=Bw;else{ae=zw;var he=Uw}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ae=jw);if(ae&&(ae=ae(n,F))){Gd(G,ae,a,W);break e}he&&he(n,q,F),n==="focusout"&&(he=q._wrapperState)&&he.controlled&&q.type==="number"&&at(q,"number",q.value)}switch(he=F?Gs(F):window,n){case"focusin":(Wd(he)||he.contentEditable==="true")&&($s=he,Vc=F,la=null);break;case"focusout":la=Vc=$s=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,np(G,a,W);break;case"selectionchange":if(Hw)break;case"keydown":case"keyup":np(G,a,W)}var fe;if(Pc)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Bs?qd(n,a)&&(me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(jd&&a.locale!=="ko"&&(Bs||me!=="onCompositionStart"?me==="onCompositionEnd"&&Bs&&(fe=vl()):(tn=W,Ls="value"in tn?tn.value:tn.textContent,Bs=!0)),he=Pl(F,me),0<he.length&&(me=new g(me,n,null,a,W),G.push({event:me,listeners:he}),fe?me.data=fe:(fe=Hd(a),fe!==null&&(me.data=fe)))),(fe=Ow?xw(n,a):Mw(n,a))&&(F=Pl(F,"onBeforeInput"),0<F.length&&(W=new g("onBeforeInput","beforeinput",null,a,W),G.push({event:W,listeners:F}),W.data=fe))}hp(G,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Pl(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,d=f.stateNode;f.tag===5&&d!==null&&(f=d,d=Oi(n,a),d!=null&&c.unshift(ha(n,d,f)),d=Oi(n,i),d!=null&&c.push(ha(n,d,f))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dp(n,i,a,c,f){for(var d=i._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,f?(C=Oi(a,d),C!=null&&v.unshift(ha(a,C,T))):f||(C=Oi(a,d),C!=null&&v.push(ha(a,C,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var Qw=/\r\n?/g,Xw=/\u0000|\uFFFD/g;function pp(n){return(typeof n=="string"?n:""+n).replace(Qw,`
`).replace(Xw,"")}function kl(n,i,a){if(i=pp(i),pp(n)!==i&&a)throw Error(t(425))}function Nl(){}var Uc=null,zc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(n){return mp.resolve(null).then(n).catch(Zw)}:Bc;function Zw(n){setTimeout(function(){throw n})}function $c(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Qr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Qr(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ws,fa="__reactProps$"+Ws,Er="__reactContainer$"+Ws,qc="__reactEvents$"+Ws,eE="__reactListeners$"+Ws,tE="__reactHandles$"+Ws;function Wi(n){var i=n[Yn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Er]||a[Yn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gp(n);n!==null;){if(a=n[Yn])return a;n=gp(n)}return i}n=a,a=n.parentNode}return null}function da(n){return n=n[Yn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Dl(n){return n[fa]||null}var Hc=[],Ks=-1;function ei(n){return{current:n}}function Ge(n){0>Ks||(n.current=Hc[Ks],Hc[Ks]=null,Ks--)}function qe(n,i){Ks++,Hc[Ks]=n.current,n.current=i}var ti={},Vt=ei(ti),qt=ei(!1),Gi=ti;function Qs(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},d;for(d in a)f[d]=i[d];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ht(n){return n=n.childContextTypes,n!=null}function Vl(){Ge(qt),Ge(Vt)}function yp(n,i,a){if(Vt.current!==ti)throw Error(t(168));qe(Vt,i),qe(qt,a)}function _p(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,be(n)||"Unknown",f));return ne({},a,c)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Gi=Vt.current,qe(Vt,n),qe(qt,qt.current),!0}function vp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=_p(n,i,Gi),c.__reactInternalMemoizedMergedChildContext=n,Ge(qt),Ge(Vt),qe(Vt,n)):Ge(qt),qe(qt,a)}var Tr=null,xl=!1,Wc=!1;function wp(n){Tr===null?Tr=[n]:Tr.push(n)}function nE(n){xl=!0,wp(n)}function ni(){if(!Wc&&Tr!==null){Wc=!0;var n=0,i=De;try{var a=Tr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Tr=null,xl=!1}catch(f){throw Tr!==null&&(Tr=Tr.slice(n+1)),$o(ks,ni),f}finally{De=i,Wc=!1}}return null}var Xs=[],Ys=0,Ml=null,Ll=0,fn=[],dn=0,Ki=null,Ir=1,Sr="";function Qi(n,i){Xs[Ys++]=Ll,Xs[Ys++]=Ml,Ml=n,Ll=i}function Ep(n,i,a){fn[dn++]=Ir,fn[dn++]=Sr,fn[dn++]=Ki,Ki=n;var c=Ir;n=Sr;var f=32-Zt(c)-1;c&=~(1<<f),a+=1;var d=32-Zt(i)+f;if(30<d){var v=f-f%5;d=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Ir=1<<32-Zt(i)+f|a<<f|c,Sr=d+n}else Ir=1<<d|a<<f|c,Sr=n}function Gc(n){n.return!==null&&(Qi(n,1),Ep(n,1,0))}function Kc(n){for(;n===Ml;)Ml=Xs[--Ys],Xs[Ys]=null,Ll=Xs[--Ys],Xs[Ys]=null;for(;n===Ki;)Ki=fn[--dn],fn[dn]=null,Sr=fn[--dn],fn[dn]=null,Ir=fn[--dn],fn[dn]=null}var sn=null,on=null,Ye=!1,An=null;function Tp(n,i){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ip(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ki!==null?{id:Ir,overflow:Sr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Ye){var i=on;if(i){var a=i;if(!Ip(n,i)){if(Qc(n))throw Error(t(418));i=Zr(a.nextSibling);var c=sn;i&&Ip(n,i)?Tp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,sn=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,sn=n}}}function Sp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function bl(n){if(n!==sn)return!1;if(!Ye)return Sp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=on)){if(Qc(n))throw Ap(),Error(t(418));for(;i;)Tp(n,i),i=Zr(i.nextSibling)}if(Sp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?Zr(n.stateNode.nextSibling):null;return!0}function Ap(){for(var n=on;n;)n=Zr(n.nextSibling)}function Js(){on=sn=null,Ye=!1}function Yc(n){An===null?An=[n]:An.push(n)}var rE=Ee.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,d=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===d?i.ref:(i=function(v){var T=f.refs;v===null?delete T[d]:T[d]=v},i._stringRef=d,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Fl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rp(n){var i=n._init;return i(n._payload)}function Cp(n){function i(M,D){if(n){var b=M.deletions;b===null?(M.deletions=[D],M.flags|=16):b.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)i(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function f(M,D){return M=ci(M,D),M.index=0,M.sibling=null,M}function d(M,D,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<D?(M.flags|=2,D):b):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,D,b,Q){return D===null||D.tag!==6?(D=Bh(b,M.mode,Q),D.return=M,D):(D=f(D,b),D.return=M,D)}function C(M,D,b,Q){var ae=b.type;return ae===k?W(M,D,b.props.children,Q,b.key):D!==null&&(D.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&Rp(ae)===D.type)?(Q=f(D,b.props),Q.ref=pa(M,D,b),Q.return=M,Q):(Q=lu(b.type,b.key,b.props,null,M.mode,Q),Q.ref=pa(M,D,b),Q.return=M,Q)}function F(M,D,b,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==b.containerInfo||D.stateNode.implementation!==b.implementation?(D=$h(b,M.mode,Q),D.return=M,D):(D=f(D,b.children||[]),D.return=M,D)}function W(M,D,b,Q,ae){return D===null||D.tag!==7?(D=rs(b,M.mode,Q,ae),D.return=M,D):(D=f(D,b),D.return=M,D)}function G(M,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Bh(""+D,M.mode,b),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ue:return b=lu(D.type,D.key,D.props,null,M.mode,b),b.ref=pa(M,null,D),b.return=M,b;case Se:return D=$h(D,M.mode,b),D.return=M,D;case Nt:var Q=D._init;return G(M,Q(D._payload),b)}if(rt(D)||ue(D))return D=rs(D,M.mode,b,null),D.return=M,D;Fl(M,D)}return null}function q(M,D,b,Q){var ae=D!==null?D.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(M,D,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ue:return b.key===ae?C(M,D,b,Q):null;case Se:return b.key===ae?F(M,D,b,Q):null;case Nt:return ae=b._init,q(M,D,ae(b._payload),Q)}if(rt(b)||ue(b))return ae!==null?null:W(M,D,b,Q,null);Fl(M,b)}return null}function ee(M,D,b,Q,ae){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(b)||null,T(D,M,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Ue:return M=M.get(Q.key===null?b:Q.key)||null,C(D,M,Q,ae);case Se:return M=M.get(Q.key===null?b:Q.key)||null,F(D,M,Q,ae);case Nt:var he=Q._init;return ee(M,D,b,he(Q._payload),ae)}if(rt(Q)||ue(Q))return M=M.get(b)||null,W(D,M,Q,ae,null);Fl(D,Q)}return null}function se(M,D,b,Q){for(var ae=null,he=null,fe=D,me=D=0,Et=null;fe!==null&&me<b.length;me++){fe.index>me?(Et=fe,fe=null):Et=fe.sibling;var Me=q(M,fe,b[me],Q);if(Me===null){fe===null&&(fe=Et);break}n&&fe&&Me.alternate===null&&i(M,fe),D=d(Me,D,me),he===null?ae=Me:he.sibling=Me,he=Me,fe=Et}if(me===b.length)return a(M,fe),Ye&&Qi(M,me),ae;if(fe===null){for(;me<b.length;me++)fe=G(M,b[me],Q),fe!==null&&(D=d(fe,D,me),he===null?ae=fe:he.sibling=fe,he=fe);return Ye&&Qi(M,me),ae}for(fe=c(M,fe);me<b.length;me++)Et=ee(fe,M,me,b[me],Q),Et!==null&&(n&&Et.alternate!==null&&fe.delete(Et.key===null?me:Et.key),D=d(Et,D,me),he===null?ae=Et:he.sibling=Et,he=Et);return n&&fe.forEach(function(hi){return i(M,hi)}),Ye&&Qi(M,me),ae}function oe(M,D,b,Q){var ae=ue(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var he=ae=null,fe=D,me=D=0,Et=null,Me=b.next();fe!==null&&!Me.done;me++,Me=b.next()){fe.index>me?(Et=fe,fe=null):Et=fe.sibling;var hi=q(M,fe,Me.value,Q);if(hi===null){fe===null&&(fe=Et);break}n&&fe&&hi.alternate===null&&i(M,fe),D=d(hi,D,me),he===null?ae=hi:he.sibling=hi,he=hi,fe=Et}if(Me.done)return a(M,fe),Ye&&Qi(M,me),ae;if(fe===null){for(;!Me.done;me++,Me=b.next())Me=G(M,Me.value,Q),Me!==null&&(D=d(Me,D,me),he===null?ae=Me:he.sibling=Me,he=Me);return Ye&&Qi(M,me),ae}for(fe=c(M,fe);!Me.done;me++,Me=b.next())Me=ee(fe,M,me,Me.value,Q),Me!==null&&(n&&Me.alternate!==null&&fe.delete(Me.key===null?me:Me.key),D=d(Me,D,me),he===null?ae=Me:he.sibling=Me,he=Me);return n&&fe.forEach(function(LE){return i(M,LE)}),Ye&&Qi(M,me),ae}function st(M,D,b,Q){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ue:e:{for(var ae=b.key,he=D;he!==null;){if(he.key===ae){if(ae=b.type,ae===k){if(he.tag===7){a(M,he.sibling),D=f(he,b.props.children),D.return=M,M=D;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&Rp(ae)===he.type){a(M,he.sibling),D=f(he,b.props),D.ref=pa(M,he,b),D.return=M,M=D;break e}a(M,he);break}else i(M,he);he=he.sibling}b.type===k?(D=rs(b.props.children,M.mode,Q,b.key),D.return=M,M=D):(Q=lu(b.type,b.key,b.props,null,M.mode,Q),Q.ref=pa(M,D,b),Q.return=M,M=Q)}return v(M);case Se:e:{for(he=b.key;D!==null;){if(D.key===he)if(D.tag===4&&D.stateNode.containerInfo===b.containerInfo&&D.stateNode.implementation===b.implementation){a(M,D.sibling),D=f(D,b.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else i(M,D);D=D.sibling}D=$h(b,M.mode,Q),D.return=M,M=D}return v(M);case Nt:return he=b._init,st(M,D,he(b._payload),Q)}if(rt(b))return se(M,D,b,Q);if(ue(b))return oe(M,D,b,Q);Fl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,D!==null&&D.tag===6?(a(M,D.sibling),D=f(D,b),D.return=M,M=D):(a(M,D),D=Bh(b,M.mode,Q),D.return=M,M=D),v(M)):a(M,D)}return st}var Zs=Cp(!0),Pp=Cp(!1),Ul=ei(null),zl=null,eo=null,Jc=null;function Zc(){Jc=eo=zl=null}function eh(n){var i=Ul.current;Ge(Ul),n._currentValue=i}function th(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){zl=n,Jc=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wt=!0),n.firstContext=null)}function pn(n){var i=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(zl===null)throw Error(t(308));eo=n,zl.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var Xi=null;function nh(n){Xi===null?Xi=[n]:Xi.push(n)}function kp(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,nh(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ar(n,c)}function Ar(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function rh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xe&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ar(n,a)}return f=c.interleaved,f===null?(i.next=i,nh(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ar(n,a)}function jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qo(n,a)}}function Dp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Bl(n,i,a,c){var f=n.updateQueue;ri=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,F=C.next;C.next=null,v===null?d=F:v.next=F,v=C;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==v&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=C))}if(d!==null){var G=f.baseState;v=0,W=F=C=null,T=d;do{var q=T.lane,ee=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(q=i,ee=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){G=se.call(ee,G,q);break e}G=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,q=typeof se=="function"?se.call(ee,G,q):se,q==null)break e;G=ne({},G,q);break e;case 2:ri=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=f.effects,q===null?f.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=ee,C=G):W=W.next=ee,v|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;q=T,T=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);if(W===null&&(C=G),f.baseState=C,f.firstBaseUpdate=F,f.lastBaseUpdate=W,i=f.shared.interleaved,i!==null){f=i;do v|=f.lane,f=f.next;while(f!==i)}else d===null&&(f.shared.lanes=0);Zi|=v,n.lanes=v,n.memoizedState=G}}function Vp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ma={},Jn=ei(ma),ga=ei(ma),ya=ei(ma);function Yi(n){if(n===ma)throw Error(t(174));return n}function ih(n,i){switch(qe(ya,i),qe(ga,n),qe(Jn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Is(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Is(i,n)}Ge(Jn),qe(Jn,i)}function no(){Ge(Jn),Ge(ga),Ge(ya)}function Op(n){Yi(ya.current);var i=Yi(Jn.current),a=Is(i,n.type);i!==a&&(qe(ga,n),qe(Jn,a))}function sh(n){ga.current===n&&(Ge(Jn),Ge(ga))}var Je=ei(0);function $l(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oh=[];function ah(){for(var n=0;n<oh.length;n++)oh[n]._workInProgressVersionPrimary=null;oh.length=0}var ql=Ee.ReactCurrentDispatcher,lh=Ee.ReactCurrentBatchConfig,Ji=0,Ze=null,dt=null,vt=null,Hl=!1,_a=!1,va=0,iE=0;function Ot(){throw Error(t(321))}function uh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Sn(n[a],i[a]))return!1;return!0}function ch(n,i,a,c,f,d){if(Ji=d,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ql.current=n===null||n.memoizedState===null?lE:uE,n=a(c,f),_a){d=0;do{if(_a=!1,va=0,25<=d)throw Error(t(301));d+=1,vt=dt=null,i.updateQueue=null,ql.current=cE,n=a(c,f)}while(_a)}if(ql.current=Kl,i=dt!==null&&dt.next!==null,Ji=0,vt=dt=Ze=null,Hl=!1,i)throw Error(t(300));return n}function hh(){var n=va!==0;return va=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=n:vt=vt.next=n,vt}function mn(){if(dt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=vt===null?Ze.memoizedState:vt.next;if(i!==null)vt=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Ze.memoizedState=vt=n:vt=vt.next=n}return vt}function wa(n,i){return typeof i=="function"?i(n):i}function fh(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,f=c.baseQueue,d=a.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}c.baseQueue=f=d,a.pending=null}if(f!==null){d=f.next,c=c.baseState;var T=v=null,C=null,F=d;do{var W=F.lane;if((Ji&W)===W)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=G,v=c):C=C.next=G,Ze.lanes|=W,Zi|=W}F=F.next}while(F!==null&&F!==d);C===null?v=c:C.next=T,Sn(c,i.memoizedState)||(Wt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do d=f.lane,Ze.lanes|=d,Zi|=d,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function dh(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);Sn(d,i.memoizedState)||(Wt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,c]}function xp(){}function Mp(n,i){var a=Ze,c=mn(),f=i(),d=!Sn(c.memoizedState,f);if(d&&(c.memoizedState=f,Wt=!0),c=c.queue,ph(Fp.bind(null,a,c,n),[n]),c.getSnapshot!==i||d||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Ea(9,bp.bind(null,a,c,f,i),void 0,null),wt===null)throw Error(t(349));(Ji&30)!==0||Lp(a,i,f)}return f}function Lp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function bp(n,i,a,c){i.value=a,i.getSnapshot=c,Up(i)&&zp(n)}function Fp(n,i,a){return a(function(){Up(i)&&zp(n)})}function Up(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Sn(n,a)}catch{return!0}}function zp(n){var i=Ar(n,1);i!==null&&kn(i,n,1,-1)}function jp(n){var i=Zn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},i.queue=n,n=n.dispatch=aE.bind(null,Ze,n),[i.memoizedState,n]}function Ea(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Bp(){return mn().memoizedState}function Wl(n,i,a,c){var f=Zn();Ze.flags|=n,f.memoizedState=Ea(1|i,a,void 0,c===void 0?null:c)}function Gl(n,i,a,c){var f=mn();c=c===void 0?null:c;var d=void 0;if(dt!==null){var v=dt.memoizedState;if(d=v.destroy,c!==null&&uh(c,v.deps)){f.memoizedState=Ea(i,a,d,c);return}}Ze.flags|=n,f.memoizedState=Ea(1|i,a,d,c)}function $p(n,i){return Wl(8390656,8,n,i)}function ph(n,i){return Gl(2048,8,n,i)}function qp(n,i){return Gl(4,2,n,i)}function Hp(n,i){return Gl(4,4,n,i)}function Wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Gp(n,i,a){return a=a!=null?a.concat([n]):null,Gl(4,4,Wp.bind(null,i,n),a)}function mh(){}function Kp(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Qp(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Xp(n,i,a){return(Ji&21)===0?(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a):(Sn(a,i)||(a=Go(),Ze.lanes|=a,Zi|=a,n.baseState=!0),i)}function sE(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=lh.transition;lh.transition={};try{n(!1),i()}finally{De=a,lh.transition=c}}function Yp(){return mn().memoizedState}function oE(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jp(n))Zp(i,a);else if(a=kp(n,i,a,c),a!==null){var f=Bt();kn(a,n,c,f),em(a,i,c)}}function aE(n,i,a){var c=li(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jp(n))Zp(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(f.hasEagerState=!0,f.eagerState=T,Sn(T,v)){var C=i.interleaved;C===null?(f.next=f,nh(i)):(f.next=C.next,C.next=f),i.interleaved=f;return}}catch{}finally{}a=kp(n,i,f,c),a!==null&&(f=Bt(),kn(a,n,c,f),em(a,i,c))}}function Jp(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function Zp(n,i){_a=Hl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function em(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qo(n,a)}}var Kl={readContext:pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},lE={readContext:pn,useCallback:function(n,i){return Zn().memoizedState=[n,i===void 0?null:i],n},useContext:pn,useEffect:$p,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,Wp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Wl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wl(4,2,n,i)},useMemo:function(n,i){var a=Zn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=oE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=Zn();return n={current:n},i.memoizedState=n},useState:jp,useDebugValue:mh,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=jp(!1),i=n[0];return n=sE.bind(null,n[1]),Zn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,f=Zn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(Ji&30)!==0||Lp(c,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,$p(Fp.bind(null,c,d,n),[n]),c.flags|=2048,Ea(9,bp.bind(null,c,d,a,i),void 0,null),a},useId:function(){var n=Zn(),i=wt.identifierPrefix;if(Ye){var a=Sr,c=Ir;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=iE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},uE={readContext:pn,useCallback:Kp,useContext:pn,useEffect:ph,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Hp,useMemo:Qp,useReducer:fh,useRef:Bp,useState:function(){return fh(wa)},useDebugValue:mh,useDeferredValue:function(n){var i=mn();return Xp(i,dt.memoizedState,n)},useTransition:function(){var n=fh(wa)[0],i=mn().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:Mp,useId:Yp,unstable_isNewReconciler:!1},cE={readContext:pn,useCallback:Kp,useContext:pn,useEffect:ph,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Hp,useMemo:Qp,useReducer:dh,useRef:Bp,useState:function(){return dh(wa)},useDebugValue:mh,useDeferredValue:function(n){var i=mn();return dt===null?i.memoizedState=n:Xp(i,dt.memoizedState,n)},useTransition:function(){var n=dh(wa)[0],i=mn().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:Mp,useId:Yp,unstable_isNewReconciler:!1};function Rn(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function gh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ql={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Bt(),f=li(n),d=Rr(c,f);d.payload=i,a!=null&&(d.callback=a),i=ii(n,d,f),i!==null&&(kn(i,n,f,c),jl(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Bt(),f=li(n),d=Rr(c,f);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=ii(n,d,f),i!==null&&(kn(i,n,f,c),jl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Bt(),c=li(n),f=Rr(a,c);f.tag=2,i!=null&&(f.callback=i),i=ii(n,f,c),i!==null&&(kn(i,n,c,a),jl(i,n,c))}};function tm(n,i,a,c,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,d,v):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(f,d):!0}function nm(n,i,a){var c=!1,f=ti,d=i.contextType;return typeof d=="object"&&d!==null?d=pn(d):(f=Ht(i)?Gi:Vt.current,c=i.contextTypes,d=(c=c!=null)?Qs(n,f):ti),i=new i(a,d),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ql,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=d),i}function rm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ql.enqueueReplaceState(i,i.state,null)}function yh(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},rh(n);var d=i.contextType;typeof d=="object"&&d!==null?f.context=pn(d):(d=Ht(i)?Gi:Vt.current,f.context=Qs(n,d)),f.state=n.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(gh(n,i,d,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ql.enqueueReplaceState(f,f.state,null),Bl(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var f=a}catch(d){f=`
Error generating stack: `+d.message+`
`+d.stack}return{value:n,source:i,stack:f,digest:null}}function _h(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var hE=typeof WeakMap=="function"?WeakMap:Map;function im(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){nu||(nu=!0,xh=c),vh(n,i)},a}function sm(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){vh(n,i)}}var d=n.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(a.callback=function(){vh(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function om(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new hE;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=AE.bind(null,n,i,a),i.then(n,n))}function am(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lm(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var fE=Ee.ReactCurrentOwner,Wt=!1;function jt(n,i,a,c){i.child=n===null?Pp(i,null,a,c):Zs(i,n.child,a,c)}function um(n,i,a,c,f){a=a.render;var d=i.ref;return to(i,f),c=ch(n,i,a,c,d,f),a=hh(),n!==null&&!Wt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Cr(n,i,f)):(Ye&&a&&Gc(i),i.flags|=1,jt(n,i,c,f),i.child)}function cm(n,i,a,c,f){if(n===null){var d=a.type;return typeof d=="function"&&!jh(d)&&d.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=d,hm(n,i,d,c,f)):(n=lu(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,(n.lanes&f)===0){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===i.ref)return Cr(n,i,f)}return i.flags|=1,n=ci(d,c),n.ref=i.ref,n.return=i,i.child=n}function hm(n,i,a,c,f){if(n!==null){var d=n.memoizedProps;if(aa(d,c)&&n.ref===i.ref)if(Wt=!1,i.pendingProps=c=d,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Wt=!0);else return i.lanes=n.lanes,Cr(n,i,f)}return wh(n,i,a,c,f)}function fm(n,i,a){var c=i.pendingProps,f=c.children,d=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(so,an),an|=a;else{if((a&1073741824)===0)return n=d!==null?d.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(so,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=d!==null?d.baseLanes:a,qe(so,an),an|=c}else d!==null?(c=d.baseLanes|a,i.memoizedState=null):c=a,qe(so,an),an|=c;return jt(n,i,f,a),i.child}function dm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wh(n,i,a,c,f){var d=Ht(a)?Gi:Vt.current;return d=Qs(i,d),to(i,f),a=ch(n,i,a,c,d,f),c=hh(),n!==null&&!Wt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Cr(n,i,f)):(Ye&&c&&Gc(i),i.flags|=1,jt(n,i,a,f),i.child)}function pm(n,i,a,c,f){if(Ht(a)){var d=!0;Ol(i)}else d=!1;if(to(i,f),i.stateNode===null)Yl(n,i),nm(i,a,c),yh(i,a,c,f),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Ht(a)?Gi:Vt.current,F=Qs(i,F));var W=a.getDerivedStateFromProps,G=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==F)&&rm(i,v,c,F),ri=!1;var q=i.memoizedState;v.state=q,Bl(i,c,v,f),C=i.memoizedState,T!==c||q!==C||qt.current||ri?(typeof W=="function"&&(gh(i,a,W,c),C=i.memoizedState),(T=ri||tm(i,a,T,c,q,C,F))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Np(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:Rn(i.type,T),v.props=F,G=i.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=pn(C):(C=Ht(a)?Gi:Vt.current,C=Qs(i,C));var ee=a.getDerivedStateFromProps;(W=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==G||q!==C)&&rm(i,v,c,C),ri=!1,q=i.memoizedState,v.state=q,Bl(i,c,v,f);var se=i.memoizedState;T!==G||q!==se||qt.current||ri?(typeof ee=="function"&&(gh(i,a,ee,c),se=i.memoizedState),(F=ri||tm(i,a,F,c,q,se,C)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return Eh(n,i,a,c,d,f)}function Eh(n,i,a,c,f,d){dm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return f&&vp(i,a,!1),Cr(n,i,d);c=i.stateNode,fE.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Zs(i,n.child,null,d),i.child=Zs(i,null,T,d)):jt(n,i,T,d),i.memoizedState=c.state,f&&vp(i,a,!0),i.child}function mm(n){var i=n.stateNode;i.pendingContext?yp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yp(n,i.context,!1),ih(n,i.containerInfo)}function gm(n,i,a,c,f){return Js(),Yc(f),i.flags|=256,jt(n,i,a,c),i.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ih(n){return{baseLanes:n,cachePool:null,transitions:null}}function ym(n,i,a){var c=i.pendingProps,f=Je.current,d=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(f&2)!==0),T?(d=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),qe(Je,f&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,d?(c=i.mode,d=i.child,v={mode:"hidden",children:v},(c&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=v):d=uu(v,c,0,null),n=rs(n,c,a,null),d.return=i,n.return=i,d.sibling=n,i.child=d,i.child.memoizedState=Ih(a),i.memoizedState=Th,n):Sh(i,v));if(f=n.memoizedState,f!==null&&(T=f.dehydrated,T!==null))return dE(n,i,v,c,T,f,a);if(d){d=c.fallback,v=i.mode,f=n.child,T=f.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=ci(f,C),c.subtreeFlags=f.subtreeFlags&14680064),T!==null?d=ci(T,d):(d=rs(d,v,a,null),d.flags|=2),d.return=i,c.return=i,c.sibling=d,i.child=c,c=d,d=i.child,v=n.child.memoizedState,v=v===null?Ih(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},d.memoizedState=v,d.childLanes=n.childLanes&~a,i.memoizedState=Th,c}return d=n.child,n=d.sibling,c=ci(d,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Sh(n,i){return i=uu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xl(n,i,a,c){return c!==null&&Yc(c),Zs(i,n.child,null,a),n=Sh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function dE(n,i,a,c,f,d,v){if(a)return i.flags&256?(i.flags&=-257,c=_h(Error(t(422))),Xl(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(d=c.fallback,f=i.mode,c=uu({mode:"visible",children:c.children},f,0,null),d=rs(d,f,v,null),d.flags|=2,c.return=i,d.return=i,c.sibling=d,i.child=c,(i.mode&1)!==0&&Zs(i,n.child,null,v),i.child.memoizedState=Ih(v),i.memoizedState=Th,d);if((i.mode&1)===0)return Xl(n,i,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var T=c.dgst;return c=T,d=Error(t(419)),c=_h(d,c,void 0),Xl(n,i,v,c)}if(T=(v&n.childLanes)!==0,Wt||T){if(c=wt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|v))!==0?0:f,f!==0&&f!==d.retryLane&&(d.retryLane=f,Ar(n,f),kn(c,n,f,-1))}return zh(),c=_h(Error(t(421))),Xl(n,i,v,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=RE.bind(null,n),f._reactRetry=i,null):(n=d.treeContext,on=Zr(f.nextSibling),sn=i,Ye=!0,An=null,n!==null&&(fn[dn++]=Ir,fn[dn++]=Sr,fn[dn++]=Ki,Ir=n.id,Sr=n.overflow,Ki=i),i=Sh(i,c.children),i.flags|=4096,i)}function _m(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),th(n.return,i,a)}function Ah(n,i,a,c,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=c,d.tail=a,d.tailMode=f)}function vm(n,i,a){var c=i.pendingProps,f=c.revealOrder,d=c.tail;if(jt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_m(n,a,i);else if(n.tag===19)_m(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&$l(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Ah(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&$l(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Ah(i,!0,a,null,d);break;case"together":Ah(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function pE(n,i,a){switch(i.tag){case 3:mm(i),Js();break;case 5:Op(i);break;case 1:Ht(i.type)&&Ol(i);break;case 4:ih(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;qe(Ul,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ym(n,i,a):(qe(Je,Je.current&1),n=Cr(n,i,a),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return vm(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qe(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,fm(n,i,a)}return Cr(n,i,a)}var wm,Rh,Em,Tm;wm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Rh=function(){},Em=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Yi(Jn.current);var d=null;switch(a){case"input":f=Es(n,f),c=Es(n,c),d=[];break;case"select":f=ne({},f,{value:void 0}),c=ne({},c,{value:void 0}),d=[];break;case"textarea":f=Lo(n,f),c=Lo(n,c),d=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Nl)}En(a,c);var v;a=null;for(F in f)if(!c.hasOwnProperty(F)&&f.hasOwnProperty(F)&&f[F]!=null)if(F==="style"){var T=f[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?d||(d=[]):(d=d||[]).push(F,null));for(F in c){var C=c[F];if(T=f!=null?f[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(d||(d=[]),d.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(d=d||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(d=d||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&We("scroll",n),d||T===C||(d=[])):(d=d||[]).push(F,C))}a&&(d=d||[]).push("style",a);var F=d;(i.updateQueue=F)&&(i.flags|=4)}},Tm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function mE(n,i,a){var c=i.pendingProps;switch(Kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(i),null;case 1:return Ht(i.type)&&Vl(),xt(i),null;case 3:return c=i.stateNode,no(),Ge(qt),Ge(Vt),ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,An!==null&&(bh(An),An=null))),Rh(n,i),xt(i),null;case 5:sh(i);var f=Yi(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)Em(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return xt(i),null}if(n=Yi(Jn.current),bl(i)){c=i.stateNode,a=i.type;var d=i.memoizedProps;switch(c[Yn]=i,c[fa]=d,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(f=0;f<ua.length;f++)We(ua[f],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":tl(c,d),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!d.multiple},We("invalid",c);break;case"textarea":bo(c,d),We("invalid",c)}En(a,d),f=null;for(var v in d)if(d.hasOwnProperty(v)){var T=d[v];v==="children"?typeof T=="string"?c.textContent!==T&&(d.suppressHydrationWarning!==!0&&kl(c.textContent,T,n),f=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(d.suppressHydrationWarning!==!0&&kl(c.textContent,T,n),f=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":ws(c),Mo(c,d,!0);break;case"textarea":ws(c),br(c);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(c.onclick=Nl)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=i,n[fa]=c,wm(n,i,!1,!1),i.stateNode=n;e:{switch(v=As(a,c),a){case"dialog":We("cancel",n),We("close",n),f=c;break;case"iframe":case"object":case"embed":We("load",n),f=c;break;case"video":case"audio":for(f=0;f<ua.length;f++)We(ua[f],n);f=c;break;case"source":We("error",n),f=c;break;case"img":case"image":case"link":We("error",n),We("load",n),f=c;break;case"details":We("toggle",n),f=c;break;case"input":tl(n,c),f=Es(n,c),We("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ne({},c,{value:void 0}),We("invalid",n);break;case"textarea":bo(n,c),f=Lo(n,c),We("invalid",n);break;default:f=c}En(a,f),T=f;for(d in T)if(T.hasOwnProperty(d)){var C=T[d];d==="style"?Ss(n,C):d==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&rl(n,C)):d==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Vi(n,C):typeof C=="number"&&Vi(n,""+C):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(o.hasOwnProperty(d)?C!=null&&d==="onScroll"&&We("scroll",n):C!=null&&de(n,d,C,v))}switch(a){case"input":ws(n),Mo(n,c,!1);break;case"textarea":ws(n),br(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,d=c.value,d!=null?wn(n,!!c.multiple,d,!1):c.defaultValue!=null&&wn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Nl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xt(i),null;case 6:if(n&&i.stateNode!=null)Tm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yi(ya.current),Yi(Jn.current),bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yn]=i,(d=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:kl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&kl(c.nodeValue,a,(n.mode&1)!==0)}d&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=i,i.stateNode=c}return xt(i),null;case 13:if(Ge(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&on!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ap(),Js(),i.flags|=98560,d=!1;else if(d=bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(t(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(t(317));d[Yn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xt(i),d=!1}else An!==null&&(bh(An),An=null),d=!0;if(!d)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?pt===0&&(pt=3):zh())),i.updateQueue!==null&&(i.flags|=4),xt(i),null);case 4:return no(),Rh(n,i),n===null&&ca(i.stateNode.containerInfo),xt(i),null;case 10:return eh(i.type._context),xt(i),null;case 17:return Ht(i.type)&&Vl(),xt(i),null;case 19:if(Ge(Je),d=i.memoizedState,d===null)return xt(i),null;if(c=(i.flags&128)!==0,v=d.rendering,v===null)if(c)Ta(d,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=$l(n),v!==null){for(i.flags|=128,Ta(d,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)d=a,n=c,d.flags&=14680066,v=d.alternate,v===null?(d.childLanes=0,d.lanes=n,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=v.childLanes,d.lanes=v.lanes,d.child=v.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=v.memoizedProps,d.memoizedState=v.memoizedState,d.updateQueue=v.updateQueue,d.type=v.type,n=v.dependencies,d.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Je,Je.current&1|2),i.child}n=n.sibling}d.tail!==null&&He()>oo&&(i.flags|=128,c=!0,Ta(d,!1),i.lanes=4194304)}else{if(!c)if(n=$l(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(d,!0),d.tail===null&&d.tailMode==="hidden"&&!v.alternate&&!Ye)return xt(i),null}else 2*He()-d.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,Ta(d,!1),i.lanes=4194304);d.isBackwards?(v.sibling=i.child,i.child=v):(a=d.last,a!==null?a.sibling=v:i.child=v,d.last=v)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=He(),i.sibling=null,a=Je.current,qe(Je,c?a&1|2:a&1),i):(xt(i),null);case 22:case 23:return Uh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(an&1073741824)!==0&&(xt(i),i.subtreeFlags&6&&(i.flags|=8192)):xt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function gE(n,i){switch(Kc(i),i.tag){case 1:return Ht(i.type)&&Vl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Ge(qt),Ge(Vt),ah(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return sh(i),null;case 13:if(Ge(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(Je),null;case 4:return no(),null;case 10:return eh(i.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Jl=!1,Mt=!1,yE=typeof WeakSet=="function"?WeakSet:Set,re=null;function io(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,i,c)}else a.current=null}function Ch(n,i,a){try{a()}catch(c){nt(n,i,c)}}var Im=!1;function _E(n,i){if(Uc=_r,n=tp(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,d=c.focusNode;c=c.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,F=0,W=0,G=n,q=null;t:for(;;){for(var ee;G!==a||f!==0&&G.nodeType!==3||(T=v+f),G!==d||c!==0&&G.nodeType!==3||(C=v+c),G.nodeType===3&&(v+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===a&&++F===f&&(T=v),q===d&&++W===c&&(C=v),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:n,selectionRange:a},_r=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,st=se.memoizedState,M=i.stateNode,D=M.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Rn(i.type,oe),st);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){nt(i,i.return,Q)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return se=Im,Im=!1,se}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var d=f.destroy;f.destroy=void 0,d!==void 0&&Ch(i,a,d)}f=f.next}while(f!==c)}}function Zl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ph(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Sm(n){var i=n.alternate;i!==null&&(n.alternate=null,Sm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yn],delete i[fa],delete i[qc],delete i[eE],delete i[tE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Am(n){return n.tag===5||n.tag===3||n.tag===4}function Rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Am(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Nl));else if(c!==4&&(n=n.child,n!==null))for(kh(n,i,a),n=n.sibling;n!==null;)kh(n,i,a),n=n.sibling}function Nh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Nh(n,i,a),n=n.sibling;n!==null;)Nh(n,i,a),n=n.sibling}var At=null,Cn=!1;function si(n,i,a){for(a=a.child;a!==null;)Cm(n,i,a),a=a.sibling}function Cm(n,i,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(bi,a)}catch{}switch(a.tag){case 5:Mt||io(a,i);case 6:var c=At,f=Cn;At=null,si(n,i,a),At=c,Cn=f,At!==null&&(Cn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Cn?(n=At,a=a.stateNode,n.nodeType===8?$c(n.parentNode,a):n.nodeType===1&&$c(n,a),Qr(n)):$c(At,a.stateNode));break;case 4:c=At,f=Cn,At=a.stateNode.containerInfo,Cn=!0,si(n,i,a),At=c,Cn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var d=f,v=d.destroy;d=d.tag,v!==void 0&&((d&2)!==0||(d&4)!==0)&&Ch(a,i,v),f=f.next}while(f!==c)}si(n,i,a);break;case 1:if(!Mt&&(io(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){nt(a,i,T)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,si(n,i,a),Mt=c):si(n,i,a);break;default:si(n,i,a)}}function Pm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new yE),i.forEach(function(c){var f=CE.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Pn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var d=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,Cn=!1;break e;case 3:At=T.stateNode.containerInfo,Cn=!0;break e;case 4:At=T.stateNode.containerInfo,Cn=!0;break e}T=T.return}if(At===null)throw Error(t(160));Cm(d,v,f),At=null,Cn=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(F){nt(f,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)km(i,n),i=i.sibling}function km(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(i,n),er(n),c&4){try{Ia(3,n,n.return),Zl(3,n)}catch(oe){nt(n,n.return,oe)}try{Ia(5,n,n.return)}catch(oe){nt(n,n.return,oe)}}break;case 1:Pn(i,n),er(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(Pn(i,n),er(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var f=n.stateNode;try{Vi(f,"")}catch(oe){nt(n,n.return,oe)}}if(c&4&&(f=n.stateNode,f!=null)){var d=n.memoizedProps,v=a!==null?a.memoizedProps:d,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&d.type==="radio"&&d.name!=null&&Ts(f,d),As(T,v);var F=As(T,d);for(v=0;v<C.length;v+=2){var W=C[v],G=C[v+1];W==="style"?Ss(f,G):W==="dangerouslySetInnerHTML"?rl(f,G):W==="children"?Vi(f,G):de(f,W,G,F)}switch(T){case"input":Di(f,d);break;case"textarea":nl(f,d);break;case"select":var q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!d.multiple;var ee=d.value;ee!=null?wn(f,!!d.multiple,ee,!1):q!==!!d.multiple&&(d.defaultValue!=null?wn(f,!!d.multiple,d.defaultValue,!0):wn(f,!!d.multiple,d.multiple?[]:"",!1))}f[fa]=d}catch(oe){nt(n,n.return,oe)}}break;case 6:if(Pn(i,n),er(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,d=n.memoizedProps;try{f.nodeValue=d}catch(oe){nt(n,n.return,oe)}}break;case 3:if(Pn(i,n),er(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(oe){nt(n,n.return,oe)}break;case 4:Pn(i,n),er(n);break;case 13:Pn(i,n),er(n),f=n.child,f.flags&8192&&(d=f.memoizedState!==null,f.stateNode.isHidden=d,!d||f.alternate!==null&&f.alternate.memoizedState!==null||(Oh=He())),c&4&&Pm(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||W,Pn(i,n),Mt=F):Pn(i,n),er(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(re=n,W=n.child;W!==null;){for(G=re=W;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:Ia(4,q,q.return);break;case 1:io(q,q.return);var se=q.stateNode;if(typeof se.componentWillUnmount=="function"){c=q,a=q.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){nt(c,a,oe)}}break;case 5:io(q,q.return);break;case 22:if(q.memoizedState!==null){Vm(G);continue}}ee!==null?(ee.return=q,re=ee):Vm(G)}W=W.sibling}e:for(W=null,G=n;;){if(G.tag===5){if(W===null){W=G;try{f=G.stateNode,F?(d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(T=G.stateNode,C=G.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=zr("display",v))}catch(oe){nt(n,n.return,oe)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(oe){nt(n,n.return,oe)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Pn(i,n),er(n),c&4&&Pm(n);break;case 21:break;default:Pn(i,n),er(n)}}function er(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Am(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Vi(f,""),c.flags&=-33);var d=Rm(n);Nh(n,d,f);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Rm(n);kh(n,T,v);break;default:throw Error(t(161))}}catch(C){nt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function vE(n,i,a){re=n,Nm(n)}function Nm(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var f=re,d=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Jl;if(!v){var T=f.alternate,C=T!==null&&T.memoizedState!==null||Mt;T=Jl;var F=Mt;if(Jl=v,(Mt=C)&&!F)for(re=f;re!==null;)v=re,C=v.child,v.tag===22&&v.memoizedState!==null?Om(f):C!==null?(C.return=v,re=C):Om(f);for(;d!==null;)re=d,Nm(d),d=d.sibling;re=f,Jl=T,Mt=F}Dm(n)}else(f.subtreeFlags&8772)!==0&&d!==null?(d.return=f,re=d):Dm(n)}}function Dm(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||Zl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Rn(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var d=i.updateQueue;d!==null&&Vp(i,d,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Vp(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&Qr(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Ph(i)}catch(q){nt(i,i.return,q)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function Vm(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function Om(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zl(4,i)}catch(C){nt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(C){nt(i,f,C)}}var d=i.return;try{Ph(i)}catch(C){nt(i,d,C)}break;case 5:var v=i.return;try{Ph(i)}catch(C){nt(i,v,C)}}}catch(C){nt(i,i.return,C)}if(i===n){re=null;break}var T=i.sibling;if(T!==null){T.return=i.return,re=T;break}re=i.return}}var wE=Math.ceil,eu=Ee.ReactCurrentDispatcher,Dh=Ee.ReactCurrentOwner,gn=Ee.ReactCurrentBatchConfig,xe=0,wt=null,ut=null,Rt=0,an=0,so=ei(0),pt=0,Sa=null,Zi=0,tu=0,Vh=0,Aa=null,Gt=null,Oh=0,oo=1/0,Pr=null,nu=!1,xh=null,oi=null,ru=!1,ai=null,iu=0,Ra=0,Mh=null,su=-1,ou=0;function Bt(){return(xe&6)!==0?He():su!==-1?su:su=He()}function li(n){return(n.mode&1)===0?1:(xe&2)!==0&&Rt!==0?Rt&-Rt:rE.transition!==null?(ou===0&&(ou=Go()),ou):(n=De,n!==0||(n=window.event,n=n===void 0?16:Ms(n.type)),n)}function kn(n,i,a,c){if(50<Ra)throw Ra=0,Mh=null,Error(t(185));ji(n,a,c),((xe&2)===0||n!==wt)&&(n===wt&&((xe&2)===0&&(tu|=a),pt===4&&ui(n,Rt)),Kt(n,c),a===1&&xe===0&&(i.mode&1)===0&&(oo=He()+500,xl&&ni()))}function Kt(n,i){var a=n.callbackNode;zi(n,i);var c=mr(n,n===wt?Rt:0);if(c===0)a!==null&&Ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ps(a),i===1)n.tag===0?nE(Mm.bind(null,n)):wp(Mm.bind(null,n)),Jw(function(){(xe&6)===0&&ni()}),a=null;else{switch(jn(c)){case 1:a=ks;break;case 4:a=qo;break;case 16:a=Li;break;case 536870912:a=Ns;break;default:a=Li}a=$m(a,xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function xm(n,i){if(su=-1,ou=0,(xe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=mr(n,n===wt?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=au(n,c);else{i=c;var f=xe;xe|=2;var d=bm();(wt!==n||Rt!==i)&&(Pr=null,oo=He()+500,ts(n,i));do try{IE();break}catch(T){Lm(n,T)}while(!0);Zc(),eu.current=d,xe=f,ut!==null?i=0:(wt=null,Rt=0,i=pt)}if(i!==0){if(i===2&&(f=Wo(n),f!==0&&(c=f,i=Lh(n,f))),i===1)throw a=Sa,ts(n,0),ui(n,c),Kt(n,He()),a;if(i===6)ui(n,c);else{if(f=n.current.alternate,(c&30)===0&&!EE(f)&&(i=au(n,c),i===2&&(d=Wo(n),d!==0&&(c=d,i=Lh(n,d))),i===1))throw a=Sa,ts(n,0),ui(n,c),Kt(n,He()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Gt,Pr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=Oh+500-He(),10<i)){if(mr(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Bc(ns.bind(null,n,Gt,Pr),i);break}ns(n,Gt,Pr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var v=31-Zt(c);d=1<<v,v=i[v],v>f&&(f=v),c&=~d}if(c=f,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*wE(c/1960))-c,10<c){n.timeoutHandle=Bc(ns.bind(null,n,Gt,Pr),c);break}ns(n,Gt,Pr);break;case 5:ns(n,Gt,Pr);break;default:throw Error(t(329))}}}return Kt(n,He()),n.callbackNode===a?xm.bind(null,n):null}function Lh(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=au(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&bh(i)),n}function bh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function EE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],d=f.getSnapshot;f=f.value;try{if(!Sn(d(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~Vh,i&=~tu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Zt(i),c=1<<a;n[a]=-1,i&=~c}}function Mm(n){if((xe&6)!==0)throw Error(t(327));ao();var i=mr(n,0);if((i&1)===0)return Kt(n,He()),null;var a=au(n,i);if(n.tag!==0&&a===2){var c=Wo(n);c!==0&&(i=c,a=Lh(n,c))}if(a===1)throw a=Sa,ts(n,0),ui(n,i),Kt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Gt,Pr),Kt(n,He()),null}function Fh(n,i){var a=xe;xe|=1;try{return n(i)}finally{xe=a,xe===0&&(oo=He()+500,xl&&ni())}}function es(n){ai!==null&&ai.tag===0&&(xe&6)===0&&ao();var i=xe;xe|=1;var a=gn.transition,c=De;try{if(gn.transition=null,De=1,n)return n()}finally{De=c,gn.transition=a,xe=i,(xe&6)===0&&ni()}}function Uh(){an=so.current,Ge(so)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Yw(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vl();break;case 3:no(),Ge(qt),Ge(Vt),ah();break;case 5:sh(c);break;case 4:no();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:eh(c.type._context);break;case 22:case 23:Uh()}a=a.return}if(wt=n,ut=n=ci(n.current,null),Rt=an=i,pt=0,Sa=null,Vh=tu=Zi=0,Gt=Aa=null,Xi!==null){for(i=0;i<Xi.length;i++)if(a=Xi[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,d=a.pending;if(d!==null){var v=d.next;d.next=f,c.next=v}a.pending=c}Xi=null}return n}function Lm(n,i){do{var a=ut;try{if(Zc(),ql.current=Kl,Hl){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Hl=!1}if(Ji=0,vt=dt=Ze=null,_a=!1,va=0,Dh.current=null,a===null||a.return===null){pt=1,Sa=i,ut=null;break}e:{var d=n,v=a.return,T=a,C=i;if(i=Rt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,W=T,G=W.tag;if((W.mode&1)===0&&(G===0||G===11||G===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=am(v);if(ee!==null){ee.flags&=-257,lm(ee,v,T,d,i),ee.mode&1&&om(d,F,i),i=ee,C=F;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(C),i.updateQueue=oe}else se.add(C);break e}else{if((i&1)===0){om(d,F,i),zh();break e}C=Error(t(426))}}else if(Ye&&T.mode&1){var st=am(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),lm(st,v,T,d,i),Yc(ro(C,T));break e}}d=C=ro(C,T),pt!==4&&(pt=2),Aa===null?Aa=[d]:Aa.push(d),d=v;do{switch(d.tag){case 3:d.flags|=65536,i&=-i,d.lanes|=i;var M=im(d,C,i);Dp(d,M);break e;case 1:T=C;var D=d.type,b=d.stateNode;if((d.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(oi===null||!oi.has(b)))){d.flags|=65536,i&=-i,d.lanes|=i;var Q=sm(d,T,i);Dp(d,Q);break e}}d=d.return}while(d!==null)}Um(a)}catch(ae){i=ae,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function bm(){var n=eu.current;return eu.current=Kl,n===null?Kl:n}function zh(){(pt===0||pt===3||pt===2)&&(pt=4),wt===null||(Zi&268435455)===0&&(tu&268435455)===0||ui(wt,Rt)}function au(n,i){var a=xe;xe|=2;var c=bm();(wt!==n||Rt!==i)&&(Pr=null,ts(n,i));do try{TE();break}catch(f){Lm(n,f)}while(!0);if(Zc(),xe=a,eu.current=c,ut!==null)throw Error(t(261));return wt=null,Rt=0,pt}function TE(){for(;ut!==null;)Fm(ut)}function IE(){for(;ut!==null&&!Mi();)Fm(ut)}function Fm(n){var i=Bm(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?Um(n):ut=i,Dh.current=null}function Um(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=mE(a,i,an),a!==null){ut=a;return}}else{if(a=gE(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);pt===0&&(pt=5)}function ns(n,i,a){var c=De,f=gn.transition;try{gn.transition=null,De=1,SE(n,i,a,c)}finally{gn.transition=f,De=c}return null}function SE(n,i,a,c){do ao();while(ai!==null);if((xe&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var d=a.lanes|a.childLanes;if(Rc(n,d),n===wt&&(ut=wt=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ru||(ru=!0,$m(Li,function(){return ao(),null})),d=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||d){d=gn.transition,gn.transition=null;var v=De;De=1;var T=xe;xe|=4,Dh.current=null,_E(n,a),km(a,n),qw(zc),_r=!!Uc,zc=Uc=null,n.current=a,vE(a),pr(),xe=T,De=v,gn.transition=d}else n.current=a;if(ru&&(ru=!1,ai=n,iu=f),d=n.pendingLanes,d===0&&(oi=null),pl(a.stateNode),Kt(n,He()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(nu)throw nu=!1,n=xh,xh=null,n;return(iu&1)!==0&&n.tag!==0&&ao(),d=n.pendingLanes,(d&1)!==0?n===Mh?Ra++:(Ra=0,Mh=n):Ra=0,ni(),null}function ao(){if(ai!==null){var n=jn(iu),i=gn.transition,a=De;try{if(gn.transition=null,De=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,iu=0,(xe&6)!==0)throw Error(t(331));var f=xe;for(xe|=4,re=n.current;re!==null;){var d=re,v=d.child;if((re.flags&16)!==0){var T=d.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(re=F;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:Ia(8,W,d)}var G=W.child;if(G!==null)G.return=W,re=G;else for(;re!==null;){W=re;var q=W.sibling,ee=W.return;if(Sm(W),W===F){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var se=d.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var st=oe.sibling;oe.sibling=null,oe=st}while(oe!==null)}}re=d}}if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,re=v;else e:for(;re!==null;){if(d=re,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Ia(9,d,d.return)}var M=d.sibling;if(M!==null){M.return=d.return,re=M;break e}re=d.return}}var D=n.current;for(re=D;re!==null;){v=re;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,re=b;else e:for(v=D;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Zl(9,T)}}catch(ae){nt(T,T.return,ae)}if(T===v){re=null;break e}var Q=T.sibling;if(Q!==null){Q.return=T.return,re=Q;break e}re=T.return}}if(xe=f,ni(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{De=a,gn.transition=i}}return!1}function zm(n,i,a){i=ro(a,i),i=im(n,i,1),n=ii(n,i,1),i=Bt(),n!==null&&(ji(n,1,i),Kt(n,i))}function nt(n,i,a){if(n.tag===3)zm(n,n,a);else for(;i!==null;){if(i.tag===3){zm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=ro(a,n),n=sm(i,n,1),i=ii(i,n,1),n=Bt(),i!==null&&(ji(i,1,n),Kt(i,n));break}}i=i.return}}function AE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Bt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Rt&a)===a&&(pt===4||pt===3&&(Rt&130023424)===Rt&&500>He()-Oh?ts(n,0):Vh|=a),Kt(n,i)}function jm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var a=Bt();n=Ar(n,i),n!==null&&(ji(n,i,a),Kt(n,a))}function RE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),jm(n,a)}function CE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),jm(n,a)}var Bm;Bm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Wt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wt=!1,pE(n,i,a);Wt=(n.flags&131072)!==0}else Wt=!1,Ye&&(i.flags&1048576)!==0&&Ep(i,Ll,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yl(n,i),n=i.pendingProps;var f=Qs(i,Vt.current);to(i,a),f=ch(null,i,c,n,f,a);var d=hh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ht(c)?(d=!0,Ol(i)):d=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,rh(i),f.updater=Ql,i.stateNode=f,f._reactInternals=i,yh(i,c,n,a),i=Eh(null,i,c,!0,d,a)):(i.tag=0,Ye&&d&&Gc(i),jt(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=kE(c),n=Rn(c,n),f){case 0:i=wh(null,i,c,n,a);break e;case 1:i=pm(null,i,c,n,a);break e;case 11:i=um(null,i,c,n,a);break e;case 14:i=cm(null,i,c,Rn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),wh(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),pm(n,i,c,f,a);case 3:e:{if(mm(i),n===null)throw Error(t(387));c=i.pendingProps,d=i.memoizedState,f=d.element,Np(n,i),Bl(i,c,null,a);var v=i.memoizedState;if(c=v.element,d.isDehydrated)if(d={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){f=ro(Error(t(423)),i),i=gm(n,i,c,a,f);break e}else if(c!==f){f=ro(Error(t(424)),i),i=gm(n,i,c,a,f);break e}else for(on=Zr(i.stateNode.containerInfo.firstChild),sn=i,Ye=!0,An=null,a=Pp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===f){i=Cr(n,i,a);break e}jt(n,i,c,a)}i=i.child}return i;case 5:return Op(i),n===null&&Xc(i),c=i.type,f=i.pendingProps,d=n!==null?n.memoizedProps:null,v=f.children,jc(c,f)?v=null:d!==null&&jc(c,d)&&(i.flags|=32),dm(n,i),jt(n,i,v,a),i.child;case 6:return n===null&&Xc(i),null;case 13:return ym(n,i,a);case 4:return ih(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zs(i,null,c,a):jt(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),um(n,i,c,f,a);case 7:return jt(n,i,i.pendingProps,a),i.child;case 8:return jt(n,i,i.pendingProps.children,a),i.child;case 12:return jt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,d=i.memoizedProps,v=f.value,qe(Ul,c._currentValue),c._currentValue=v,d!==null)if(Sn(d.value,v)){if(d.children===f.children&&!qt.current){i=Cr(n,i,a);break e}}else for(d=i.child,d!==null&&(d.return=i);d!==null;){var T=d.dependencies;if(T!==null){v=d.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(d.tag===1){C=Rr(-1,a&-a),C.tag=2;var F=d.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?C.next=C:(C.next=W.next,W.next=C),F.pending=C}}d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),th(d.return,a,i),T.lanes|=a;break}C=C.next}}else if(d.tag===10)v=d.type===i.type?null:d.child;else if(d.tag===18){if(v=d.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),th(v,a,i),v=d.sibling}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===i){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}jt(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,to(i,a),f=pn(f),c=c(f),i.flags|=1,jt(n,i,c,a),i.child;case 14:return c=i.type,f=Rn(c,i.pendingProps),f=Rn(c.type,f),cm(n,i,c,f,a);case 15:return hm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Rn(c,f),Yl(n,i),i.tag=1,Ht(c)?(n=!0,Ol(i)):n=!1,to(i,a),nm(i,c,f),yh(i,c,f,a),Eh(null,i,c,!0,n,a);case 19:return vm(n,i,a);case 22:return fm(n,i,a)}throw Error(t(156,i.tag))};function $m(n,i){return $o(n,i)}function PE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,i,a,c){return new PE(n,i,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kE(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===_t)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function lu(n,i,a,c,f,d){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return rs(a.children,f,d,i);case S:v=8,f|=8;break;case R:return n=yn(12,a,i,f|2),n.elementType=R,n.lanes=d,n;case A:return n=yn(13,a,i,f),n.elementType=A,n.lanes=d,n;case $e:return n=yn(19,a,i,f),n.elementType=$e,n.lanes=d,n;case Xe:return uu(a,f,d,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:v=10;break e;case N:v=9;break e;case x:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yn(v,a,i,f),i.elementType=n,i.type=c,i.lanes=d,i}function rs(n,i,a,c){return n=yn(7,n,c,i),n.lanes=a,n}function uu(n,i,a,c){return n=yn(22,n,c,i),n.elementType=Xe,n.lanes=a,n.stateNode={isHidden:!1},n}function Bh(n,i,a){return n=yn(6,n,null,i),n.lanes=a,n}function $h(n,i,a){return i=yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function NE(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function qh(n,i,a,c,f,d,v,T,C){return n=new NE(n,i,a,T,C),i===1?(i=1,d===!0&&(i|=8)):i=0,d=yn(3,null,null,i),n.current=d,d.stateNode=n,d.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(d),n}function DE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function qm(n){if(!n)return ti;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return _p(n,a,i)}return i}function Hm(n,i,a,c,f,d,v,T,C){return n=qh(a,c,!0,n,f,d,v,T,C),n.context=qm(null),a=n.current,c=Bt(),f=li(a),d=Rr(c,f),d.callback=i??null,ii(a,d,f),n.current.lanes=f,ji(n,f,c),Kt(n,c),n}function cu(n,i,a,c){var f=i.current,d=Bt(),v=li(f);return a=qm(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(d,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(f,i,v),n!==null&&(kn(n,f,v,d),jl(n,f,v)),v}function hu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hh(n,i){Wm(n,i),(n=n.alternate)&&Wm(n,i)}function VE(){return null}var Gm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wh(n){this._internalRoot=n}fu.prototype.render=Wh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cu(n,i,null,null)},fu.prototype.unmount=Wh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){cu(null,n,null,null)}),i[Er]=null}};function fu(n){this._internalRoot=n}fu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Jo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<en.length&&i!==0&&i<en[a].priority;a++);en.splice(a,0,n),a===0&&Os(n)}};function Gh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Km(){}function OE(n,i,a,c,f){if(f){if(typeof c=="function"){var d=c;c=function(){var F=hu(v);d.call(F)}}var v=Hm(i,c,n,0,null,!1,!1,"",Km);return n._reactRootContainer=v,n[Er]=v.current,ca(n.nodeType===8?n.parentNode:n),es(),v}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var T=c;c=function(){var F=hu(C);T.call(F)}}var C=qh(n,0,!1,null,null,!1,!1,"",Km);return n._reactRootContainer=C,n[Er]=C.current,ca(n.nodeType===8?n.parentNode:n),es(function(){cu(i,C,a,c)}),C}function pu(n,i,a,c,f){var d=a._reactRootContainer;if(d){var v=d;if(typeof f=="function"){var T=f;f=function(){var C=hu(v);T.call(C)}}cu(i,v,n,f)}else v=OE(a,i,n,f,c);return hu(v)}Xo=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Le(i.pendingLanes);a!==0&&(Qo(i,a|1),Kt(i,He()),(xe&6)===0&&(oo=He()+500,ni()))}break;case 13:es(function(){var c=Ar(n,1);if(c!==null){var f=Bt();kn(c,n,1,f)}}),Hh(n,1)}},Ds=function(n){if(n.tag===13){var i=Ar(n,134217728);if(i!==null){var a=Bt();kn(i,n,134217728,a)}Hh(n,134217728)}},Yo=function(n){if(n.tag===13){var i=li(n),a=Ar(n,i);if(a!==null){var c=Bt();kn(a,n,i,c)}Hh(n,i)}},Jo=function(){return De},Zo=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},hr=function(n,i,a){switch(i){case"input":if(Di(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Dl(c);if(!f)throw Error(t(90));xo(c),Di(c,f)}}}break;case"textarea":nl(n,a);break;case"select":i=a.value,i!=null&&wn(n,!!a.multiple,i,!1)}},sl=Fh,ol=es;var xE={usingClientEntryPoint:!1,Events:[da,Gs,Dl,Br,$r,Fh]},Ca={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ME={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||VE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{bi=mu.inject(ME),Jt=mu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE,Qt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(i))throw Error(t(200));return DE(n,i,null,a)},Qt.createRoot=function(n,i){if(!Gh(n))throw Error(t(299));var a=!1,c="",f=Gm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=qh(n,1,!1,null,null,a,!1,c,f),n[Er]=i.current,ca(n.nodeType===8?n.parentNode:n),new Wh(i)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dl(i),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return es(n)},Qt.hydrate=function(n,i,a){if(!du(i))throw Error(t(200));return pu(null,n,i,!0,a)},Qt.hydrateRoot=function(n,i,a){if(!Gh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,d="",v=Gm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Hm(i,null,n,1,a??null,f,!1,d,v),n[Er]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new fu(i)},Qt.render=function(n,i,a){if(!du(i))throw Error(t(200));return pu(null,n,i,!1,a)},Qt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(es(function(){pu(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Qt.unstable_batchedUpdates=Fh,Qt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pu(n,i,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var eg;function jE(){if(eg)return Qh.exports;eg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qh.exports=zE(),Qh.exports}var tg;function BE(){if(tg)return gu;tg=1;var r=jE();return gu.createRoot=r.createRoot,gu.hydrateRoot=r.hydrateRoot,gu}var $E=BE();const qE=Uy($E),HE=()=>{};var ng={};/**
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
 */const jy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},By={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,y=o+2<r.length,_=y?r[o+2]:0,E=u>>2,I=(u&3)<<4|m>>4;let P=(m&15)<<2|_>>6,z=_&63;y||(z=64,h||(P=64)),s.push(t[E],t[I],t[P],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(jy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):WE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||I==null)throw new GE;const P=u<<2|m>>4;if(s.push(P),_!==64){const z=m<<4&240|_>>2;if(s.push(z),I!==64){const X=_<<6&192|I;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class GE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KE=function(r){const e=jy(r);return By.encodeByteArray(e,!0)},Ou=function(r){return KE(r).replace(/\./g,"")},$y=function(r){try{return By.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XE=()=>QE().__FIREBASE_DEFAULTS__,YE=()=>{if(typeof process>"u"||typeof ng>"u")return;const r=ng.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},JE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$y(r[1]);return e&&JSON.parse(e)},tc=()=>{try{return HE()||XE()||YE()||JE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qy=r=>{var e,t;return(t=(e=tc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},ZE=r=>{const e=qy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Hy=()=>{var r;return(r=tc())==null?void 0:r.config},Wy=r=>{var e;return(e=tc())==null?void 0:e[`_${r}`]};/**
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
 */class eT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gy(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function tT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ou(JSON.stringify(t)),Ou(JSON.stringify(h)),""].join(".")}const Va={};function nT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Va))Va[e]?r.emulator.push(e):r.prod.push(e);return r}function rT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let rg=!1;function Ky(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||Va[r]===e||Va[r]||rg)return;Va[r]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",u=nT().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function y(P,z){P.setAttribute("width","24"),P.setAttribute("id",z),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function _(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{rg=!0,h()},P}function E(P,z){P.setAttribute("id",z),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function I(){const P=rT(s),z=t("text"),X=document.getElementById(z)||document.createElement("span"),K=t("learnmore"),B=document.getElementById(K)||document.createElement("a"),Z=t("preprendIcon"),ie=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const de=P.element;m(de),E(B,K);const Ee=_();y(ie,Z),de.append(ie,X,B,Ee),document.body.appendChild(de)}u?(X.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function sT(){var e;const r=(e=tc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function aT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lT(){const r=Ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function uT(){return!sT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xy(){try{return typeof indexedDB=="object"}catch{return!1}}function Yy(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}function cT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const hT="FirebaseError";class Ln extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=hT,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?fT(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Ln(o,m,s)}}function fT(r,e){return r.replace(dT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const dT=/\{\$([^}]+)}/g;function pT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ti(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(ig(u)&&ig(h)){if(!Ti(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function ig(r){return r!==null&&typeof r=="object"}/**
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
 */function Wa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mT(r,e){const t=new gT(r,e);return t.subscribe.bind(t)}class gT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");yT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Jh(){}/**
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
 */const _T=1e3,vT=2,wT=14400*1e3,ET=.5;function sg(r,e=_T,t=vT){const s=e*Math.pow(t,r),o=Math.round(ET*s*(Math.random()-.5)*2);return Math.min(wT,s+o)}/**
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
 */function ft(r){return r&&r._delegate?r._delegate:r}class Mn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class TT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new eT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ST(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:IT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IT(r){return r===is?void 0:r}function ST(r){return r.instantiationMode==="EAGER"}/**
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
 */class AT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new TT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const RT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},CT=Pe.INFO,PT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},kT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=PT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=CT,this._logHandler=kT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const NT=(r,e)=>e.some(t=>r instanceof t);let og,ag;function DT(){return og||(og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VT(){return ag||(ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,mf=new WeakMap,Zy=new WeakMap,Zh=new WeakMap,Bf=new WeakMap;function OT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(yi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Jy.set(t,r)}).catch(()=>{}),Bf.set(e,r),e}function xT(r){if(mf.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});mf.set(r,e)}let gf={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return mf.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function MT(r){gf=r(gf)}function LT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ef(this),e,...t);return Zy.set(s,e.sort?e.sort():[e]),yi(s)}:VT().includes(r)?function(...e){return r.apply(ef(this),e),yi(Jy.get(this))}:function(...e){return yi(r.apply(ef(this),e))}}function bT(r){return typeof r=="function"?LT(r):(r instanceof IDBTransaction&&xT(r),NT(r,DT())?new Proxy(r,gf):r)}function yi(r){if(r instanceof IDBRequest)return OT(r);if(Zh.has(r))return Zh.get(r);const e=bT(r);return e!==r&&(Zh.set(r,e),Bf.set(e,r)),e}const ef=r=>Bf.get(r);function e_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=yi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(yi(h.result),y.oldVersion,y.newVersion,yi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const FT=["get","getKey","getAll","getAllKeys","count"],UT=["put","add","delete","clear"],tf=new Map;function lg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=UT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||FT.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return tf.set(e,u),u}MT(r=>({...r,get:(e,t,s)=>lg(e,t)||r.get(e,t,s),has:(e,t)=>!!lg(e,t)||r.has(e,t)}));/**
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
 */class zT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function jT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yf="@firebase/app",ug="0.14.6";/**
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
 */const Vr=new nc("@firebase/app"),BT="@firebase/app-compat",$T="@firebase/analytics-compat",qT="@firebase/analytics",HT="@firebase/app-check-compat",WT="@firebase/app-check",GT="@firebase/auth",KT="@firebase/auth-compat",QT="@firebase/database",XT="@firebase/data-connect",YT="@firebase/database-compat",JT="@firebase/functions",ZT="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",iI="@firebase/performance",sI="@firebase/performance-compat",oI="@firebase/remote-config",aI="@firebase/remote-config-compat",lI="@firebase/storage",uI="@firebase/storage-compat",cI="@firebase/firestore",hI="@firebase/ai",fI="@firebase/firestore-compat",dI="firebase",pI="12.6.0";/**
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
 */const _f="[DEFAULT]",mI={[yf]:"fire-core",[BT]:"fire-core-compat",[qT]:"fire-analytics",[$T]:"fire-analytics-compat",[WT]:"fire-app-check",[HT]:"fire-app-check-compat",[GT]:"fire-auth",[KT]:"fire-auth-compat",[QT]:"fire-rtdb",[XT]:"fire-data-connect",[YT]:"fire-rtdb-compat",[JT]:"fire-fn",[ZT]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[iI]:"fire-perf",[sI]:"fire-perf-compat",[oI]:"fire-rc",[aI]:"fire-rc-compat",[lI]:"fire-gcs",[uI]:"fire-gcs-compat",[cI]:"fire-fst",[fI]:"fire-fst-compat",[hI]:"fire-vertex","fire-js":"fire-js",[dI]:"fire-js-all"};/**
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
 */const xu=new Map,gI=new Map,vf=new Map;function cg(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ar(r){const e=r.name;if(vf.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;vf.set(e,r);for(const t of xu.values())cg(t,r);for(const t of gI.values())cg(t,r);return!0}function ys(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Dn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const yI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new gs("app","Firebase",yI);/**
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
 */class _I{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const Po=pI;function t_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:_f,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=Hy()),!t)throw _i.create("no-options");const u=xu.get(o);if(u){if(Ti(t,u.options)&&Ti(s,u.config))return u;throw _i.create("duplicate-app",{appName:o})}const h=new AT(o);for(const y of vf.values())h.addComponent(y);const m=new _I(t,s,h);return xu.set(o,m),m}function $f(r=_f){const e=xu.get(r);if(!e&&r===_f&&Hy())return t_();if(!e)throw _i.create("no-app",{appName:r});return e}function vn(r,e,t){let s=mI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(h.join(" "));return}ar(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vI="firebase-heartbeat-database",wI=1,Fa="firebase-heartbeat-store";let nf=null;function n_(){return nf||(nf=e_(vI,wI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),nf}async function EI(r){try{const t=(await n_()).transaction(Fa),s=await t.objectStore(Fa).get(r_(r));return await t.done,s}catch(e){if(e instanceof Ln)Vr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function hg(r,e){try{const s=(await n_()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,r_(r)),await s.done}catch(t){if(t instanceof Ln)Vr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function r_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const TI=1024,II=30;class SI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new RI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=fg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>II){const h=CI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fg(),{heartbeatsToSend:s,unsentEntries:o}=AI(this._heartbeatsCache.heartbeats),u=Ou(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Vr.warn(t),""}}}function fg(){return new Date().toISOString().substring(0,10)}function AI(r,e=TI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),dg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),dg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xy()?Yy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await EI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dg(r){return Ou(JSON.stringify({version:2,heartbeats:r})).length}function CI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function PI(r){ar(new Mn("platform-logger",e=>new zT(e),"PRIVATE")),ar(new Mn("heartbeat",e=>new SI(e),"PRIVATE")),vn(yf,ug,r),vn(yf,ug,"esm2020"),vn("fire-js","")}PI("");function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kI=i_,s_=new gs("auth","Firebase",i_());/**
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
 */const Mu=new nc("@firebase/auth");function NI(r,...e){Mu.logLevel<=Pe.WARN&&Mu.warn(`Auth (${Po}): ${r}`,...e)}function Iu(r,...e){Mu.logLevel<=Pe.ERROR&&Mu.error(`Auth (${Po}): ${r}`,...e)}/**
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
 */function lr(r,...e){throw Hf(r,...e)}function On(r,...e){return Hf(r,...e)}function qf(r,e,t){const s={...kI(),[e]:t};return new gs("auth","Firebase",s).create(e,{appName:r.name})}function ls(r){return qf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&lr(r,"argument-error"),qf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return s_.create(r,...e)}function ge(r,e,...t){if(!r)throw Hf(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Iu(e),new Error(e)}function Or(r,e){r||Nr(e)}/**
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
 */function wf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function VI(){return pg()==="http:"||pg()==="https:"}function pg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function OI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VI()||Qy()||"connection"in navigator)?navigator.onLine:!0}function xI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=iT()||aT()}get(){return OI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wf(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class o_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bI=new Ga(3e4,6e4);function Gf(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ko(r,e,t,s,o={}){return a_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Wa({key:r.config.apiKey,...h}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:y,...u};return oT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(_.credentials="include"),o_.fetch()(await l_(r,r.config.apiHost,t,m),_)})}async function a_(r,e,t){r._canInitEmulator=!1;const s={...MI,...e};try{const o=new UI(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw yu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw yu(r,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw yu(r,"email-already-in-use",h);if(y==="USER_DISABLED")throw yu(r,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw qf(r,E,_);lr(r,E)}}catch(o){if(o instanceof Ln)throw o;lr(r,"network-request-failed",{message:String(o)})}}async function FI(r,e,t,s,o={}){const u=await ko(r,e,t,s,o);return"mfaPendingCredential"in u&&lr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function l_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Wf(r.config,o):`${r.config.apiScheme}://${o}`;return LI.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class UI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),bI.get())})}}function yu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=On(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function zI(r,e){return ko(r,"POST","/v1/accounts:delete",e)}async function Lu(r,e){return ko(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jI(r,e=!1){const t=ft(r),s=await t.getIdToken(e),o=Kf(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Oa(rf(o.auth_time)),issuedAtTime:Oa(rf(o.iat)),expirationTime:Oa(rf(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rf(r){return Number(r)*1e3}function Kf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const o=$y(t);return o?JSON.parse(o):(Iu("Failed to decode base64 JWT payload"),null)}catch(o){return Iu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function mg(r){const e=Kf(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ua(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ln&&BI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function BI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class $I{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ef{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bu(r){var I;const e=r.auth,t=await r.getIdToken(),s=await Ua(r,Lu(e,{idToken:t}));ge(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(I=o.providerUserInfo)!=null&&I.length?u_(o.providerUserInfo):[],h=HI(r.providerData,u),m=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Ef(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function qI(r){const e=ft(r);await bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function u_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function WI(r,e){const t=await a_(r,{},async()=>{const s=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await l_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(y.credentials="include"),o_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GI(r,e){return ko(r,"POST","/v2/accounts:revokeToken",Gf(r,e))}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=mg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await WI(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new fo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
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
 */function fi(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Vn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new $I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ef(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jI(this,e)}reload(){return qI(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(ls(this.auth));const e=await this.getIdToken();return await Ua(this,zI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:I,emailVerified:P,isAnonymous:z,providerData:X,stsTokenManager:K}=t;ge(I&&K,e,"internal-error");const B=fo.fromJSON(this.name,K);ge(typeof I=="string",e,"internal-error"),fi(s,e.name),fi(o,e.name),ge(typeof P=="boolean",e,"internal-error"),ge(typeof z=="boolean",e,"internal-error"),fi(u,e.name),fi(h,e.name),fi(m,e.name),fi(y,e.name),fi(_,e.name),fi(E,e.name);const Z=new Vn({uid:I,auth:e,email:o,emailVerified:P,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:_,lastLoginAt:E});return X&&Array.isArray(X)&&(Z.providerData=X.map(ie=>({...ie}))),y&&(Z._redirectEventId=y),Z}static async _fromIdTokenResponse(e,t,s=!1){const o=new fo;o.updateFromServerResponse(t);const u=new Vn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?u_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new fo;m.updateFromIdToken(s);const y=new Vn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ef(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const gg=new Map;function Dr(r){Or(r instanceof Function,"Expected a class definition");let e=gg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,gg.set(r,e),e)}/**
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
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}c_.type="NONE";const yg=c_;/**
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
 */function Su(r,e,t){return`firebase:${r}:${e}:${t}`}class po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Su(this.userKey,o.apiKey,u),this.fullPersistenceKey=Su("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Vn._fromGetAccountInfoResponse(this.auth,t,e):null}return Vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new po(Dr(yg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Dr(yg);const h=Su(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let I;if(typeof E=="string"){const P=await Lu(e,{idToken:E}).catch(()=>{});if(!P)break;I=await Vn._fromGetAccountInfoResponse(e,P,E)}else I=Vn._fromJSON(e,E);_!==u&&(m=I),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new po(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new po(u,e,s))}}/**
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
 */function _g(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(p_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g_(e))return"Blackberry";if(y_(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(m_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h_(r=Ut()){return/firefox\//i.test(r)}function f_(r=Ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(r=Ut()){return/crios\//i.test(r)}function p_(r=Ut()){return/iemobile/i.test(r)}function m_(r=Ut()){return/android/i.test(r)}function g_(r=Ut()){return/blackberry/i.test(r)}function y_(r=Ut()){return/webos/i.test(r)}function Qf(r=Ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function KI(r=Ut()){var e;return Qf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function QI(){return lT()&&document.documentMode===10}function __(r=Ut()){return Qf(r)||m_(r)||y_(r)||g_(r)||/windows phone/i.test(r)||p_(r)}/**
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
 */function v_(r,e=[]){let t;switch(r){case"Browser":t=_g(Ut());break;case"Worker":t=`${_g(Ut())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Po}/${s}`}/**
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
 */class XI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function YI(r,e={}){return ko(r,"GET","/v2/passwordPolicy",Gf(r,e))}/**
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
 */const JI=6;class ZI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??JI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class e0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new XI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Dn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(ls(this));const t=e?ft(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YI(this),t=new ZI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await GI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&NI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rc(r){return ft(r)}class vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t0(r){Xf=r}function n0(r){return Xf.loadJS(r)}function r0(){return Xf.gapiScript}function i0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function s0(r,e){const t=ys(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ti(u,e??{}))return o;lr(o,"already-initialized")}return t.initialize({options:e})}function o0(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function a0(r,e,t){const s=rc(r);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=w_(e),{host:h,port:m}=l0(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(Ti(_,s.config.emulator)&&Ti(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Co(h)?(Gy(`${u}//${h}${y}`),Ky("Auth",!0)):u0()}function w_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function l0(r){const e=w_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:wg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:wg(h)}}}function wg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function u0(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class E_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}/**
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
 */async function mo(r,e){return FI(r,"POST","/v1/accounts:signInWithIdp",Gf(r,e))}/**
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
 */const c0="http://localhost";class hs extends E_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new hs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:c0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wa(t)}return e}}/**
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
 */class Yf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends Yf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class di extends Ka{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
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
 */class kr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return kr.credential(t,s)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";/**
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
 */class pi extends Ka{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
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
 */class mi extends Ka{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
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
 */class vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Vn._fromIdTokenResponse(e,s,o),h=Eg(s);return new vo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Eg(s);return new vo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Eg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Fu extends Ln{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Fu(e,t,s,o)}}function T_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(r,u,e,s):u})}async function h0(r,e,t=!1){const s=await Ua(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vo._forOperation(r,"link",s)}/**
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
 */async function f0(r,e,t=!1){const{auth:s}=r;if(Dn(s.app))return Promise.reject(ls(s));const o="reauthenticate";try{const u=await Ua(r,T_(s,o,e,r),t);ge(u.idToken,s,"internal-error");const h=Kf(u.idToken);ge(h,s,"internal-error");const{sub:m}=h;return ge(r.uid===m,s,"user-mismatch"),vo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&lr(s,"user-mismatch"),u}}/**
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
 */async function d0(r,e,t=!1){if(Dn(r.app))return Promise.reject(ls(r));const s="signIn",o=await T_(r,s,e),u=await vo._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}function p0(r,e,t,s){return ft(r).onIdTokenChanged(e,t,s)}function m0(r,e,t){return ft(r).beforeAuthStateChanged(e,t)}function g0(r,e,t,s){return ft(r).onAuthStateChanged(e,t,s)}function y0(r){return ft(r).signOut()}const Uu="__sak";/**
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
 */class I_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _0=1e3,v0=10;class S_ extends I_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);QI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,v0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}S_.type="LOCAL";const w0=S_;/**
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
 */class A_ extends I_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}A_.type="SESSION";const R_=A_;/**
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
 */function E0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await E0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function Jf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class T0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Jf("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const P=I;if(P.data.eventId===_)switch(P.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(P.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function I0(r){nr().location.href=r}/**
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
 */function C_(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function S0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function R0(){return C_()?self:null}/**
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
 */const P_="firebaseLocalStorageDb",C0=1,zu="firebaseLocalStorage",k_="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sc(r,e){return r.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function P0(){const r=indexedDB.deleteDatabase(P_);return new Qa(r).toPromise()}function Tf(){const r=indexedDB.open(P_,C0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(zu,{keyPath:k_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(zu)?e(s):(s.close(),await P0(),e(await Tf()))})})}async function Tg(r,e,t){const s=sc(r,!0).put({[k_]:e,value:t});return new Qa(s).toPromise()}async function k0(r,e){const t=sc(r,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function Ig(r,e){const t=sc(r,!0).delete(e);return new Qa(t).toPromise()}const N0=800,D0=3;class N_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>D0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(R0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await S0(),!this.activeServiceWorker)return;this.sender=new T0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await Tg(e,Uu,"1"),await Ig(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>k0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ig(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=sc(o,!1).getAll();return new Qa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N_.type="LOCAL";const V0=N_;new Ga(3e4,6e4);/**
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
 */function D_(r,e){return e?Dr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Zf extends E_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function O0(r){return d0(r.auth,new Zf(r),r.bypassAuthState)}function x0(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),f0(t,new Zf(r),r.bypassAuthState)}async function M0(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),h0(t,new Zf(r),r.bypassAuthState)}/**
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
 */class V_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O0;case"linkViaPopup":case"linkViaRedirect":return M0;case"reauthViaPopup":case"reauthViaRedirect":return x0;default:lr(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L0=new Ga(2e3,1e4);async function b0(r,e,t){if(Dn(r.app))return Promise.reject(On(r,"operation-not-supported-in-this-environment"));const s=rc(r);DI(r,e,Yf);const o=D_(s,t);return new ss(s,"signInViaPopup",e,o).executeNotNull()}class ss extends V_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L0.get())};e()}}ss.currentPopupAction=null;/**
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
 */const F0="pendingRedirect",Au=new Map;class U0 extends V_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z0(r,e){const t=$0(e),s=B0(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function j0(r,e){Au.set(r._key(),e)}function B0(r){return Dr(r._redirectPersistence)}function $0(r){return Su(F0,r.config.apiKey,r.name)}async function q0(r,e,t=!1){if(Dn(r.app))return Promise.reject(ls(r));const s=rc(r),o=D_(s,e),h=await new U0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const H0=600*1e3;class W0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!O_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(On(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=H0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function O_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function G0(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(r);default:return!1}}/**
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
 */async function K0(r,e={}){return ko(r,"GET","/v1/projects",e)}/**
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
 */const Q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X0=/^https?/;async function Y0(r){if(r.config.emulator)return;const{authorizedDomains:e}=await K0(r);for(const t of e)try{if(J0(t))return}catch{}lr(r,"unauthorized-domain")}function J0(r){const e=wf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!X0.test(t))return!1;if(Q0.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const Z0=new Ga(3e4,6e4);function Ag(){const r=nr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function eS(r){return new Promise((e,t)=>{var o,u,h;function s(){Ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ag(),t(On(r,"network-request-failed"))},timeout:Z0.get()})}if((u=(o=nr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=nr().gapi)!=null&&h.load)s();else{const m=i0("iframefcb");return nr()[m]=()=>{gapi.load?s():t(On(r,"network-request-failed"))},n0(`${r0()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function tS(r){return Ru=Ru||eS(r),Ru}/**
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
 */const nS=new Ga(5e3,15e3),rS="__/auth/iframe",iS="emulator/auth/iframe",sS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aS(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Wf(e,iS):`https://${r.config.authDomain}/${rS}`,s={apiKey:e.apiKey,appName:r.name,v:Po},o=oS.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wa(s).slice(1)}`}async function lS(r){const e=await tS(r),t=nr().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:aS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sS,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=On(r,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},nS.get());function y(){nr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const uS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cS=500,hS=600,fS="_blank",dS="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pS(r,e,t,s=cS,o=hS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...uS,width:s.toString(),height:o.toString(),top:u,left:h},_=Ut().toLowerCase();t&&(m=d_(_)?fS:t),h_(_)&&(e=e||dS,y.scrollbars="yes");const E=Object.entries(y).reduce((P,[z,X])=>`${P}${z}=${X},`,"");if(KI(_)&&m!=="_self")return mS(e||"",m),new Rg(null);const I=window.open(e||"",m,E);ge(I,r,"popup-blocked");try{I.focus()}catch{}return new Rg(I)}function mS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const gS="__/auth/handler",yS="emulator/auth/handler",_S=encodeURIComponent("fac");async function Cg(r,e,t,s,o,u){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Po,eventId:o};if(e instanceof Yf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",pT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,I]of Object.entries({}))h[E]=I}if(e instanceof Ka){const E=e.getScopes().filter(I=>I!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await r._getAppCheckToken(),_=y?`#${_S}=${encodeURIComponent(y)}`:"";return`${vS(r)}?${Wa(m).slice(1)}${_}`}function vS({config:r}){return r.emulator?Wf(r,yS):`https://${r.authDomain}/${gS}`}/**
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
 */const sf="webStorageSupport";class wS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R_,this._completeRedirectFn=q0,this._overrideRedirectResult=j0}async _openPopup(e,t,s,o){var h;Or((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Cg(e,t,s,wf(),o);return pS(e,u,Jf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Cg(e,t,s,wf(),o);return I0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Or(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lS(e),s=new W0(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sf,{type:sf},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[sf];u!==void 0&&t(!!u),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Y0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return __()||f_()||Qf()}}const ES=wS;var Pg="@firebase/auth",kg="1.12.0";/**
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
 */class TS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SS(r){ar(new Mn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v_(r)},_=new e0(s,o,u,y);return o0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ar(new Mn("auth-internal",e=>{const t=rc(e.getProvider("auth").getImmediate());return(s=>new TS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Pg,kg,IS(r)),vn(Pg,kg,"esm2020")}/**
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
 */const AS=300,RS=Wy("authIdTokenMaxAge")||AS;let Ng=null;const CS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RS)return;const o=t==null?void 0:t.token;Ng!==o&&(Ng=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function PS(r=$f()){const e=ys(r,"auth");if(e.isInitialized())return e.getImmediate();const t=s0(r,{popupRedirectResolver:ES,persistence:[V0,w0,R_]}),s=Wy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=CS(u.toString());m0(t,h,()=>h(t.currentUser)),p0(t,m=>h(m))}}const o=qy("auth");return o&&a0(t,`http://${o}`),t}function kS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}t0({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=On("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",kS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SS("Browser");var NS="firebase",DS="12.7.0";/**
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
 */vn(NS,DS,"app");const x_="@firebase/installations",ed="0.6.19";/**
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
 */const M_=1e4,L_=`w:${ed}`,b_="FIS_v2",VS="https://firebaseinstallations.googleapis.com/v1",OS=3600*1e3,xS="installations",MS="Installations";/**
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
 */const LS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new gs(xS,MS,LS);function F_(r){return r instanceof Ln&&r.code.includes("request-failed")}/**
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
 */function U_({projectId:r}){return`${VS}/projects/${r}/installations`}function z_(r){return{token:r.token,requestStatus:2,expiresIn:FS(r.expiresIn),creationTime:Date.now()}}async function j_(r,e){const s=(await e.json()).error;return fs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function B_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function bS(r,{refreshToken:e}){const t=B_(r);return t.append("Authorization",US(e)),t}async function $_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function FS(r){return Number(r.replace("s","000"))}function US(r){return`${b_} ${r}`}/**
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
 */async function zS({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=U_(r),o=B_(r),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:b_,appId:r.appId,sdkVersion:L_},m={method:"POST",headers:o,body:JSON.stringify(h)},y=await $_(()=>fetch(s,m));if(y.ok){const _=await y.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:z_(_.authToken)}}else throw await j_("Create Installation",y)}/**
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
 */function q_(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function jS(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const BS=/^[cdef][\w-]{21}$/,If="";function $S(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=qS(r);return BS.test(t)?t:If}catch{return If}}function qS(r){return jS(r).substr(0,22)}/**
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
 */function oc(r){return`${r.appName}!${r.appId}`}/**
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
 */const H_=new Map;function W_(r,e){const t=oc(r);G_(t,e),HS(t,e)}function G_(r,e){const t=H_.get(r);if(t)for(const s of t)s(e)}function HS(r,e){const t=WS();t&&t.postMessage({key:r,fid:e}),GS()}let os=null;function WS(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=r=>{G_(r.data.key,r.data.fid)}),os}function GS(){H_.size===0&&os&&(os.close(),os=null)}/**
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
 */const KS="firebase-installations-database",QS=1,ds="firebase-installations-store";let of=null;function td(){return of||(of=e_(KS,QS,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ds)}}})),of}async function ju(r,e){const t=oc(r),o=(await td()).transaction(ds,"readwrite"),u=o.objectStore(ds),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&W_(r,e.fid),e}async function K_(r){const e=oc(r),s=(await td()).transaction(ds,"readwrite");await s.objectStore(ds).delete(e),await s.done}async function ac(r,e){const t=oc(r),o=(await td()).transaction(ds,"readwrite"),u=o.objectStore(ds),h=await u.get(t),m=e(h);return m===void 0?await u.delete(t):await u.put(m,t),await o.done,m&&(!h||h.fid!==m.fid)&&W_(r,m.fid),m}/**
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
 */async function nd(r){let e;const t=await ac(r.appConfig,s=>{const o=XS(s),u=YS(r,o);return e=u.registrationPromise,u.installationEntry});return t.fid===If?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function XS(r){const e=r||{fid:$S(),registrationStatus:0};return Q_(e)}function YS(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=JS(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZS(r)}:{installationEntry:e}}async function JS(r,e){try{const t=await zS(r,e);return ju(r.appConfig,t)}catch(t){throw F_(t)&&t.customData.serverCode===409?await K_(r.appConfig):await ju(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ZS(r){let e=await Dg(r.appConfig);for(;e.registrationStatus===1;)await q_(100),e=await Dg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await nd(r);return s||t}return e}function Dg(r){return ac(r,e=>{if(!e)throw fs.create("installation-not-found");return Q_(e)})}function Q_(r){return e1(r)?{fid:r.fid,registrationStatus:0}:r}function e1(r){return r.registrationStatus===1&&r.registrationTime+M_<Date.now()}/**
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
 */async function t1({appConfig:r,heartbeatServiceProvider:e},t){const s=n1(r,t),o=bS(r,t),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:L_,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(h)},y=await $_(()=>fetch(s,m));if(y.ok){const _=await y.json();return z_(_)}else throw await j_("Generate Auth Token",y)}function n1(r,{fid:e}){return`${U_(r)}/${e}/authTokens:generate`}/**
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
 */async function rd(r,e=!1){let t;const s=await ac(r.appConfig,u=>{if(!X_(u))throw fs.create("not-registered");const h=u.authToken;if(!e&&s1(h))return u;if(h.requestStatus===1)return t=r1(r,e),u;{if(!navigator.onLine)throw fs.create("app-offline");const m=a1(u);return t=i1(r,m),m}});return t?await t:s.authToken}async function r1(r,e){let t=await Vg(r.appConfig);for(;t.authToken.requestStatus===1;)await q_(100),t=await Vg(r.appConfig);const s=t.authToken;return s.requestStatus===0?rd(r,e):s}function Vg(r){return ac(r,e=>{if(!X_(e))throw fs.create("not-registered");const t=e.authToken;return l1(t)?{...e,authToken:{requestStatus:0}}:e})}async function i1(r,e){try{const t=await t1(r,e),s={...e,authToken:t};return await ju(r.appConfig,s),t}catch(t){if(F_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await K_(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ju(r.appConfig,s)}throw t}}function X_(r){return r!==void 0&&r.registrationStatus===2}function s1(r){return r.requestStatus===2&&!o1(r)}function o1(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+OS}function a1(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function l1(r){return r.requestStatus===1&&r.requestTime+M_<Date.now()}/**
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
 */async function u1(r){const e=r,{installationEntry:t,registrationPromise:s}=await nd(e);return s?s.catch(console.error):rd(e).catch(console.error),t.fid}/**
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
 */async function c1(r,e=!1){const t=r;return await h1(t),(await rd(t,e)).token}async function h1(r){const{registrationPromise:e}=await nd(r);e&&await e}/**
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
 */function f1(r){if(!r||!r.options)throw af("App Configuration");if(!r.name)throw af("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw af(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function af(r){return fs.create("missing-app-config-values",{valueName:r})}/**
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
 */const Y_="installations",d1="installations-internal",p1=r=>{const e=r.getProvider("app").getImmediate(),t=f1(e),s=ys(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},m1=r=>{const e=r.getProvider("app").getImmediate(),t=ys(e,Y_).getImmediate();return{getId:()=>u1(t),getToken:o=>c1(t,o)}};function g1(){ar(new Mn(Y_,p1,"PUBLIC")),ar(new Mn(d1,m1,"PRIVATE"))}g1();vn(x_,ed);vn(x_,ed,"esm2020");/**
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
 */const Bu="analytics",y1="firebase_id",_1="origin",v1=60*1e3,w1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",id="https://www.googletagmanager.com/gtag/js";/**
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
 */const $t=new nc("@firebase/analytics");/**
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
 */const E1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},un=new gs("analytics","Analytics",E1);/**
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
 */function T1(r){if(!r.startsWith(id)){const e=un.create("invalid-gtag-resource",{gtagURL:r});return $t.warn(e.message),""}return r}function J_(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function I1(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function S1(r,e){const t=I1("firebase-js-sdk-policy",{createScriptURL:T1}),s=document.createElement("script"),o=`${id}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function A1(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function R1(r,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const y=(await J_(t)).find(_=>_.measurementId===o);y&&await e[y.appId]}}catch(m){$t.error(m)}r("config",o,u)}async function C1(r,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const m=await J_(t);for(const y of h){const _=m.find(I=>I.measurementId===y),E=_&&e[_.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){$t.error(u)}}function P1(r,e,t,s){async function o(u,...h){try{if(u==="event"){const[m,y]=h;await C1(r,e,t,m,y)}else if(u==="config"){const[m,y]=h;await R1(r,e,t,s,m,y)}else if(u==="consent"){const[m,y]=h;r("consent",m,y)}else if(u==="get"){const[m,y,_]=h;r("get",m,y,_)}else if(u==="set"){const[m]=h;r("set",m)}else r(u,...h)}catch(m){$t.error(m)}}return o}function k1(r,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=P1(u,r,e,t),{gtagCore:u,wrappedGtag:window[o]}}function N1(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(id)&&t.src.includes(r))return t;return null}/**
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
 */const D1=30,V1=1e3;class O1{constructor(e={},t=V1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Z_=new O1;function x1(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function M1(r){var h;const{appId:e,apiKey:t}=r,s={method:"GET",headers:x1(t)},o=w1.replace("{app-id}",e),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let m="";try{const y=await u.json();(h=y.error)!=null&&h.message&&(m=y.error.message)}catch{}throw un.create("config-fetch-failed",{httpStatus:u.status,responseMessage:m})}return u.json()}async function L1(r,e=Z_,t){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw un.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw un.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new U1;return setTimeout(async()=>{m.abort()},v1),ev({appId:s,apiKey:o,measurementId:u},h,m,e)}async function ev(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=Z_){var m;const{appId:u,measurementId:h}=r;try{await b1(s,e)}catch(y){if(h)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:h};throw y}try{const y=await M1(r);return o.deleteThrottleMetadata(u),y}catch(y){const _=y;if(!F1(_)){if(o.deleteThrottleMetadata(u),h)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:u,measurementId:h};throw y}const E=Number((m=_==null?void 0:_.customData)==null?void 0:m.httpStatus)===503?sg(t,o.intervalMillis,D1):sg(t,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(u,I),$t.debug(`Calling attemptFetch again in ${E} millis`),ev(r,I,s,o)}}function b1(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(u),s(un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F1(r){if(!(r instanceof Ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class U1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function z1(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const u=await e,h={...s,send_to:u};r("event",t,h)}}async function j1(r,e,t,s){if(s&&s.global){const o={};for(const u of Object.keys(t))o[`user_properties.${u}`]=t[u];return r("set",o),Promise.resolve()}else{const o=await e;r("config",o,{update:!0,user_properties:t})}}/**
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
 */async function B1(){if(Xy())try{await Yy()}catch(r){return $t.warn(un.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return $t.warn(un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $1(r,e,t,s,o,u,h){const m=L1(r);m.then(P=>{t[P.measurementId]=P.appId,r.options.measurementId&&P.measurementId!==r.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>$t.error(P)),e.push(m);const y=B1().then(P=>{if(P)return s.getId()}),[_,E]=await Promise.all([m,y]);N1(u)||S1(u,_.measurementId),o("js",new Date);const I=(h==null?void 0:h.config)??{};return I[_1]="firebase",I.update=!0,E!=null&&(I[y1]=E),o("config",_.measurementId,I),_.measurementId}/**
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
 */class q1{constructor(e){this.app=e}_delete(){return delete go[this.app.options.appId],Promise.resolve()}}let go={},Og=[];const xg={};let lf="dataLayer",H1="gtag",Mg,sd,Lg=!1;function W1(){const r=[];if(Qy()&&r.push("This is a browser extension environment."),cT()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=un.create("invalid-analytics-context",{errorInfo:e});$t.warn(t.message)}}function G1(r,e,t){W1();const s=r.options.appId;if(!s)throw un.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw un.create("no-api-key");if(go[s]!=null)throw un.create("already-exists",{id:s});if(!Lg){A1(lf);const{wrappedGtag:u,gtagCore:h}=k1(go,Og,xg,lf,H1);sd=u,Mg=h,Lg=!0}return go[s]=$1(r,Og,xg,e,Mg,lf,t),new q1(r)}function K1(r=$f()){r=ft(r);const e=ys(r,Bu);return e.isInitialized()?e.getImmediate():Q1(r)}function Q1(r,e={}){const t=ys(r,Bu);if(t.isInitialized()){const o=t.getImmediate();if(Ti(e,t.getOptions()))return o;throw un.create("already-initialized")}return t.initialize({options:e})}function X1(r,e,t){r=ft(r),j1(sd,go[r.app.options.appId],e,t).catch(s=>$t.error(s))}function Y1(r,e,t,s){r=ft(r),z1(sd,go[r.app.options.appId],e,t,s).catch(o=>$t.error(o))}const bg="@firebase/analytics",Fg="0.10.19";function J1(){ar(new Mn(Bu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return G1(s,o,t)},"PUBLIC")),ar(new Mn("analytics-internal",r,"PRIVATE")),vn(bg,Fg),vn(bg,Fg,"esm2020");function r(e){try{const t=e.getProvider(Bu).getImmediate();return{logEvent:(s,o,u)=>Y1(t,s,o,u),setUserProperties:(s,o)=>X1(t,s,o)}}catch(t){throw un.create("interop-component-reg-failed",{reason:t})}}}J1();var Ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,tv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function R(){}R.prototype=S.prototype,k.F=S.prototype,k.prototype=new R,k.prototype.constructor=k,k.D=function(V,N,x){for(var A=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)A[$e-2]=arguments[$e];return S.prototype[N].apply(V,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,R){R||(R=0);const V=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)V[N]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(N=0;N<16;++N)V[N]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=k.g[0],R=k.g[1],N=k.g[2];let x=k.g[3],A;A=S+(x^R&(N^x))+V[0]+3614090360&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(N^S&(R^N))+V[1]+3905402710&4294967295,x=S+(A<<12&4294967295|A>>>20),A=N+(R^x&(S^R))+V[2]+606105819&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(S^N&(x^S))+V[3]+3250441966&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(x^R&(N^x))+V[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(N^S&(R^N))+V[5]+1200080426&4294967295,x=S+(A<<12&4294967295|A>>>20),A=N+(R^x&(S^R))+V[6]+2821735955&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(S^N&(x^S))+V[7]+4249261313&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(x^R&(N^x))+V[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(N^S&(R^N))+V[9]+2336552879&4294967295,x=S+(A<<12&4294967295|A>>>20),A=N+(R^x&(S^R))+V[10]+4294925233&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(S^N&(x^S))+V[11]+2304563134&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(x^R&(N^x))+V[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=x+(N^S&(R^N))+V[13]+4254626195&4294967295,x=S+(A<<12&4294967295|A>>>20),A=N+(R^x&(S^R))+V[14]+2792965006&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(S^N&(x^S))+V[15]+1236535329&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(N^x&(R^N))+V[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(S^R))+V[6]+3225465664&4294967295,x=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(x^S))+V[11]+643717713&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(N^x))+V[0]+3921069994&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^x&(R^N))+V[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(S^R))+V[10]+38016083&4294967295,x=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(x^S))+V[15]+3634488961&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(N^x))+V[4]+3889429448&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^x&(R^N))+V[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(S^R))+V[14]+3275163606&4294967295,x=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(x^S))+V[3]+4107603335&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(N^x))+V[8]+1163531501&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^x&(R^N))+V[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(S^R))+V[2]+4243563512&4294967295,x=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(x^S))+V[7]+1735328473&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^S&(N^x))+V[12]+2368359562&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(R^N^x)+V[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^N)+V[8]+2272392833&4294967295,x=S+(A<<11&4294967295|A>>>21),A=N+(x^S^R)+V[11]+1839030562&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^S)+V[14]+4259657740&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^x)+V[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^N)+V[4]+1272893353&4294967295,x=S+(A<<11&4294967295|A>>>21),A=N+(x^S^R)+V[7]+4139469664&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^S)+V[10]+3200236656&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^x)+V[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^N)+V[0]+3936430074&4294967295,x=S+(A<<11&4294967295|A>>>21),A=N+(x^S^R)+V[3]+3572445317&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^S)+V[6]+76029189&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^x)+V[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=x+(S^R^N)+V[12]+3873151461&4294967295,x=S+(A<<11&4294967295|A>>>21),A=N+(x^S^R)+V[15]+530742520&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^S)+V[2]+3299628645&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(N^(R|~x))+V[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~N))+V[7]+1126891415&4294967295,x=S+(A<<10&4294967295|A>>>22),A=N+(S^(x|~R))+V[14]+2878612391&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~S))+V[5]+4237533241&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~x))+V[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~N))+V[3]+2399980690&4294967295,x=S+(A<<10&4294967295|A>>>22),A=N+(S^(x|~R))+V[10]+4293915773&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~S))+V[1]+2240044497&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~x))+V[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~N))+V[15]+4264355552&4294967295,x=S+(A<<10&4294967295|A>>>22),A=N+(S^(x|~R))+V[6]+2734768916&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~S))+V[13]+1309151649&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~x))+V[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=x+(R^(S|~N))+V[11]+3174756917&4294967295,x=S+(A<<10&4294967295|A>>>22),A=N+(S^(x|~R))+V[2]+718787259&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~S))+V[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+x&4294967295}s.prototype.v=function(k,S){S===void 0&&(S=k.length);const R=S-this.blockSize,V=this.C;let N=this.h,x=0;for(;x<S;){if(N==0)for(;x<=R;)o(this,k,x),x+=this.blockSize;if(typeof k=="string"){for(;x<S;)if(V[N++]=k.charCodeAt(x++),N==this.blockSize){o(this,V),N=0;break}}else for(;x<S;)if(V[N++]=k[x++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=S},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var R=k.length-8;R<k.length;++R)k[R]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,R=0;R<4;++R)for(let V=0;V<32;V+=8)k[S++]=this.g[R]>>>V&255;return k};function u(k,S){var R=m;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=S(k)}function h(k,S){this.h=S;const R=[];let V=!0;for(let N=k.length-1;N>=0;N--){const x=k[N]|0;V&&x==S||(R[N]=x,V=!1)}this.g=R}var m={};function y(k){return-128<=k&&k<128?u(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return I;if(k<0)return B(_(-k));const S=[];let R=1;for(let V=0;k>=R;V++)S[V]=k/R|0,R*=4294967296;return new h(S,0)}function E(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return B(E(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(S,8));let V=I;for(let x=0;x<k.length;x+=8){var N=Math.min(8,k.length-x);const A=parseInt(k.substring(x,x+N),S);N<8?(N=_(Math.pow(S,N)),V=V.j(N).add(_(A))):(V=V.j(R),V=V.add(_(A)))}return V}var I=y(0),P=y(1),z=y(16777216);r=h.prototype,r.m=function(){if(K(this))return-B(this).m();let k=0,S=1;for(let R=0;R<this.g.length;R++){const V=this.i(R);k+=(V>=0?V:4294967296+V)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(X(this))return"0";if(K(this))return"-"+B(this).toString(k);const S=_(Math.pow(k,6));var R=this;let V="";for(;;){const N=Ee(R,S).g;R=Z(R,N.j(S));let x=((R.g.length>0?R.g[0]:R.h)>>>0).toString(k);if(R=N,X(R))return x+V;for(;x.length<6;)x="0"+x;V=x+V}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function X(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function K(k){return k.h==-1}r.l=function(k){return k=Z(this,k),K(k)?-1:X(k)?0:1};function B(k){const S=k.g.length,R=[];for(let V=0;V<S;V++)R[V]=~k.g[V];return new h(R,~k.h).add(P)}r.abs=function(){return K(this)?B(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),R=[];let V=0;for(let N=0;N<=S;N++){let x=V+(this.i(N)&65535)+(k.i(N)&65535),A=(x>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);V=A>>>16,x&=65535,A&=65535,R[N]=A<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Z(k,S){return k.add(B(S))}r.j=function(k){if(X(this)||X(k))return I;if(K(this))return K(k)?B(this).j(B(k)):B(B(this).j(k));if(K(k))return B(this.j(B(k)));if(this.l(z)<0&&k.l(z)<0)return _(this.m()*k.m());const S=this.g.length+k.g.length,R=[];for(var V=0;V<2*S;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<k.g.length;N++){const x=this.i(V)>>>16,A=this.i(V)&65535,$e=k.i(N)>>>16,_t=k.i(N)&65535;R[2*V+2*N]+=A*_t,ie(R,2*V+2*N),R[2*V+2*N+1]+=x*_t,ie(R,2*V+2*N+1),R[2*V+2*N+1]+=A*$e,ie(R,2*V+2*N+1),R[2*V+2*N+2]+=x*$e,ie(R,2*V+2*N+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new h(R,0)};function ie(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function de(k,S){this.g=k,this.h=S}function Ee(k,S){if(X(S))throw Error("division by zero");if(X(k))return new de(I,I);if(K(k))return S=Ee(B(k),S),new de(B(S.g),B(S.h));if(K(S))return S=Ee(k,B(S)),new de(B(S.g),S.h);if(k.g.length>30){if(K(k)||K(S))throw Error("slowDivide_ only works with positive integers.");for(var R=P,V=S;V.l(k)<=0;)R=Ue(R),V=Ue(V);var N=Se(R,1),x=Se(V,1);for(V=Se(V,2),R=Se(R,2);!X(V);){var A=x.add(V);A.l(k)<=0&&(N=N.add(R),x=A),V=Se(V,1),R=Se(R,1)}return S=Z(k,N.j(S)),new de(N,S)}for(N=I;k.l(S)>=0;){for(R=Math.max(1,Math.floor(k.m()/S.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),x=_(R),A=x.j(S);K(A)||A.l(k)>0;)R-=V,x=_(R),A=x.j(S);X(x)&&(x=P),N=N.add(x),k=Z(k,A)}return new de(N,k)}r.B=function(k){return Ee(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let V=0;V<S;V++)R[V]=this.i(V)&k.i(V);return new h(R,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let V=0;V<S;V++)R[V]=this.i(V)|k.i(V);return new h(R,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let V=0;V<S;V++)R[V]=this.i(V)^k.i(V);return new h(R,this.h^k.h)};function Ue(k){const S=k.g.length+1,R=[];for(let V=0;V<S;V++)R[V]=k.i(V)<<1|k.i(V-1)>>>31;return new h(R,k.h)}function Se(k,S){const R=S>>5;S%=32;const V=k.g.length-R,N=[];for(let x=0;x<V;x++)N[x]=S>0?k.i(x+R)>>>S|k.i(x+R+1)<<32-S:k.i(x+R);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,tv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,vi=h}).apply(typeof Ug<"u"?Ug:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nv,Pa,rv,Cu,Sf,iv,sv,ov;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function E(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function I(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,L,U){for(var Y=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Y[_e-2]=arguments[_e];return p.prototype[L].apply(w,Y)}}var P=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function X(l,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=l.length||0;const U=L.length||0;l.length=g+U;for(let Y=0;Y<U;Y++)l[g+Y]=L[Y]}else l.push(L)}}class K{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(l){h.setTimeout(()=>{throw l},0)}function Z(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ie{constructor(){this.h=this.g=null}add(p,g){const w=de.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var de=new K(()=>new Ee,l=>l.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Se=!1,k=new ie,S=()=>{const l=Promise.resolve(void 0);Ue=()=>{l.then(R)}};function R(){for(var l;l=Z();){try{l.h.call(l.g)}catch(g){B(g)}var p=de;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Se=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var x=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}I($e,N),$e.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Xe(l,p,g,w,L){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=L,this.key=++Nt,this.da=this.fa=!1}function J(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(l,p){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let U=0;U<$.length;U++)g=$[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,p,g,w,L){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const Y=Ce(l,p,w,L);return Y>-1?(p=l[Y],g||(p.fa=!1)):(p=new Xe(p,this.src,U,!!w,L),p.fa=g,l.push(p)),p};function Re(l,p){const g=p.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,p,void 0),U;(U=L>=0)&&Array.prototype.splice.call(w,L,1),U&&(J(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ce(l,p,g,w){for(let L=0;L<l.length;++L){const U=l[L];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==w)return L}return-1}var be="closure_lm_"+(Math.random()*1e6|0),Oe={};function je(l,p,g,w,L){if(Array.isArray(p)){for(let U=0;U<p.length;U++)je(l,p[U],g,w,L);return null}return g=Mo(g),l&&l[_t]?l.J(p,g,m(w)?!!w.capture:!1,L):zt(l,p,g,!1,w,L)}function zt(l,p,g,w,L,U){if(!p)throw Error("Invalid event type");const Y=m(L)?!!L.capture:!!L;let _e=Ts(l);if(_e||(l[be]=_e=new Ie(l)),g=_e.add(p,g,w,Y,U),g.proxy)return g;if(w=ws(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)x||(L=Y),L===void 0&&(L=!1),l.addEventListener(p.toString(),w,L);else if(l.attachEvent)l.attachEvent(Es(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ws(){function l(g){return p.call(l.src,l.listener,g)}const p=tl;return l}function xo(l,p,g,w,L){if(Array.isArray(p))for(var U=0;U<p.length;U++)xo(l,p[U],g,w,L);else w=m(w)?!!w.capture:!!w,g=Mo(g),l&&l[_t]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=Ce(p,g,w,L),g>-1&&(J(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=Ts(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ce(p,g,w,L)),(g=l>-1?p[l]:null)&&Lr(g))}function Lr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Re(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(Es(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=Ts(p))?(Re(g,l),g.h==0&&(g.src=null,p[be]=null)):J(l)}}}function Es(l){return l in Oe?Oe[l]:Oe[l]="on"+l}function tl(l,p){if(l.da)l=!0;else{p=new $e(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&Lr(l),l=g.call(w,p)}return l}function Ts(l){return l=l[be],l instanceof Ie?l:null}var Di="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mo(l){return typeof l=="function"?l:(l[Di]||(l[Di]=function(p){return l.handleEvent(p)}),l[Di])}function at(){V.call(this),this.i=new Ie(this),this.M=this,this.G=null}I(at,V),at.prototype[_t]=!0,at.prototype.removeEventListener=function(l,p,g,w){xo(this,l,p,g,w)};function rt(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var L=p;p=new N(w,l),Te(p,L)}L=!0;let U,Y;if(g)for(Y=g.length-1;Y>=0;Y--)U=p.g=g[Y],L=wn(U,w,!0,p)&&L;if(U=p.g=l,L=wn(U,w,!0,p)&&L,L=wn(U,w,!1,p)&&L,g)for(Y=0;Y<g.length;Y++)U=p.g=g[Y],L=wn(U,w,!1,p)&&L}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)J(g[w]);delete l.g[p],l.h--}}this.G=null},at.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},at.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function wn(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let U=0;U<p.length;++U){const Y=p[U];if(Y&&!Y.da&&Y.capture==g){const _e=Y.listener,it=Y.ha||Y.src;Y.fa&&Re(l.i,Y),L=_e.call(it,w)!==!1&&L}}return L&&!w.defaultPrevented}function Lo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function bo(l){l.g=Lo(()=>{l.g=null,l.i&&(l.i=!1,bo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class nl extends V{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:bo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(l){V.call(this),this.h=l,this.g={}}I(br,V);var Fo=[];function Is(l){ue(l.g,function(p,g){this.g.hasOwnProperty(g)&&Lr(p)},l),l.g={}}br.prototype.N=function(){br.Z.N.call(this),Is(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=h.JSON.stringify,rl=h.JSON.parse,Vi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Ur(){}function il(){}var zr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ss(){N.call(this,"d")}I(Ss,N);function Uo(){N.call(this,"c")}I(Uo,N);var En={},As=null;function jr(){return As=As||new at}En.Ia="serverreachability";function Rs(l){N.call(this,En.Ia,l)}I(Rs,N);function hr(l){const p=jr();rt(p,new Rs(p))}En.STAT_EVENT="statevent";function fr(l,p){N.call(this,En.STAT_EVENT,l),this.stat=p}I(fr,N);function tt(l){const p=jr();rt(p,new fr(p,l))}En.Ja="timingevent";function zo(l,p){N.call(this,En.Ja,l),this.size=p}I(zo,N);function Br(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function $r(){this.g=!0}$r.prototype.ua=function(){this.g=!1};function sl(l,p,g,w,L,U){l.info(function(){if(l.g)if(U){var Y="",_e=U.split("&");for(let ze=0;ze<_e.length;ze++){var it=_e[ze].split("=");if(it.length>1){const lt=it[0];it=it[1];const rn=lt.split("_");Y=rn.length>=2&&rn[1]=="type"?Y+(lt+"="+it+"&"):Y+(lt+"=redacted&")}}}else Y=null;else Y=U;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+g+`
`+Y})}function ol(l,p,g,w,L,U,Y){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+g+`
`+U+" "+Y})}function bn(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Oi(l,g)+(w?" "+w:"")})}function al(l,p){l.info(function(){return"TIMEOUT: "+p})}$r.prototype.info=function(){};function Oi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let Y=1;Y<w.length;Y++)w[Y]=""}}}}return Fr(U)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ll;function dr(){}I(dr,Ur),dr.prototype.g=function(){return new XMLHttpRequest},ll=new dr;function Fn(l){return encodeURIComponent(String(l))}function Cs(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function cn(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ul}function ul(){this.i=null,this.g="",this.h=!1}var cl={},jo={};function Tn(l,p,g){l.M=1,l.A=mr(hn(p)),l.u=g,l.R=!0,Bo(l,null)}function Bo(l,p){l.F=Date.now(),xi(l),l.B=hn(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Jo(g.i,"t",w),l.C=0,g=l.j.L,l.h=new ul,l.g=wl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new nl(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(Fo[0]=L.toString()),L=Fo);for(let U=0;U<L.length;U++){const Y=je(g,L[U],w||p.handleEvent,!1,p.h||p);if(!Y)break;p.g[Y.key]=Y}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),hr(),sl(l.i,l.v,l.B,l.l,l.S,l.u)}cn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Hn(l)==3?p.j():this.Y(l)},cn.prototype.Y=function(l){try{if(l==this.g)e:{const _e=Hn(this.g),it=this.g.ya(),ze=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||_l(this.g)))){this.K||_e!=4||it==7||(it==8||ze<=0?hr(3):hr(2)),Ps(this);var p=this.g.ca();this.X=p;var g=hl(this);if(this.o=p==200,ol(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var U=w;break t}}U=null}if(l=U)bn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,He(this,l);else{this.o=!1,this.m=3,tt(12),pr(this),Mi(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=dl(this,g),lt==jo){_e==4&&(this.m=4,tt(14),l=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==cl){this.m=4,tt(15),bn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else bn(this.i,this.l,lt,null),He(this,lt);if(fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||g.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)bn(this.i,this.l,g,"[Invalid Chunked Response]"),pr(this),Mi(this);else if(g.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),qi(Y),Y.P=!0,tt(11))}}else bn(this.i,this.l,g,null),He(this,g);_e==4&&pr(this),this.o&&!this.K&&(_e==4?Fs(this.j,this):(this.o=!1,xi(this)))}else ea(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),pr(this),Mi(this)}}}catch{}finally{}};function hl(l){if(!fl(l))return l.g.la();const p=_l(l.g);if(p==="")return"";let g="";const w=p.length,L=Hn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return pr(l),Mi(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<w;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(L&&U==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function fl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function dl(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?jo:(g=Number(p.substring(g,w)),isNaN(g)?cl:(w+=1,w+g>p.length?jo:(p=p.slice(w,w+g),l.C=w+g,p)))}cn.prototype.cancel=function(){this.K=!0,pr(this)};function xi(l){l.T=Date.now()+l.H,$o(l,l.H)}function $o(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Br(_(l.aa,l),p)}function Ps(l){l.D&&(h.clearTimeout(l.D),l.D=null)}cn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(al(this.i,this.B),this.M!=2&&(hr(),tt(17)),pr(this),this.m=2,Mi(this)):$o(this,this.T-l)};function Mi(l){l.j.I==0||l.K||Fs(l.j,l)}function pr(l){Ps(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Is(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function He(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Ho(g.h,l))){if(!l.L&&Ho(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)bs(g),tn(g);else break e;Kn(g),tt(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Br(_(g.Va,g),6e3));Li(g.h)<=1&&g.ta&&(g.ta=void 0)}else nn(g,11)}else if((l.L||g.g==l)&&bs(g),!A(p))for(L=g.Ba.g.parse(p),p=0;p<L.length;p++){let ze=L[p];const lt=ze[0];if(!(lt<=g.K))if(g.K=lt,ze=ze[1],g.I==2)if(ze[0]=="c"){g.M=ze[1],g.ba=ze[2];const rn=ze[3];rn!=null&&(g.ka=rn,g.j.info("VER="+g.ka));const wr=ze[4];wr!=null&&(g.za=wr,g.j.info("SVER="+g.za));const Qn=ze[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(w=1.5*Qn,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Xn=l.g;if(Xn){const js=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var U=w.h;U.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ns(U,U.h),U.h=null))}if(w.G){const ra=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(w.wa=ra,Le(w.J,w.G,ra))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var Y=l;if(w.na=na(w,w.L?w.ba:null,w.W),Y.L){bi(w.h,Y);var _e=Y,it=w.O;it&&(_e.H=it),_e.D&&(Ps(_e),xi(_e)),w.g=Y}else Dt(w);g.i.length>0&&vr(g)}else ze[0]!="stop"&&ze[0]!="close"||nn(g,7);else g.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?nn(g,7):Ms(g):ze[0]!="noop"&&g.l&&g.l.qa(ze),g.A=0)}}hr(4)}catch{}}var Ac=class{constructor(l,p){this.g=l,this.map=p}};function ks(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Li(l){return l.h?1:l.g?l.g.size:0}function Ho(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ns(l,p){l.g?l.g.add(p):l.h=p}function bi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}ks.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let L,U=null;w>=0?(L=l[g].substring(0,w),U=l[g].substring(w+1)):L=l[g],p(L,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Un(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Un?(this.l=l.l,Fi(this,l.j),this.o=l.o,this.g=l.g,zn(this,l.u),this.h=l.h,Wr(this,Zo(l.i)),this.m=l.m):l&&(p=String(l).match(pl))?(this.l=!1,Fi(this,p[1]||"",!0),this.o=Ui(p[2]||""),this.g=Ui(p[3]||"",!0),zn(this,p[4]),this.h=Ui(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=Ui(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Un.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(zi(p,Go,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(zi(p,Go,!0),"@"),l.push(Fn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(zi(g,g.charAt(0)=="/"?ji:Ko,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",zi(g,Qo)),l.join("")},Un.prototype.resolve=function(l){const p=hn(this);let g=!!l.j;g?Fi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)zn(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const U=[];for(let Y=0;Y<L.length;){const _e=L[Y++];_e=="."?w&&Y==L.length&&U.push(""):_e==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),w&&Y==L.length&&U.push("")):(U.push(_e),w=!0)}w=U.join("/")}else w=L}return g?p.h=w:g=l.i.toString()!=="",g?Wr(p,Zo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function hn(l){return new Un(l)}function Fi(l,p,g){l.j=g?Ui(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function zn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Wr(l,p,g){p instanceof De?(l.i=p,Vs(l.i,l.l)):(g||(p=zi(p,Rc)),l.i=new De(p,l.l))}function Le(l,p,g){l.i.set(p,g)}function mr(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Ui(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Wo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Go=/[#\/\?@]/g,Ko=/[#\?:]/g,ji=/[#\?]/g,Rc=/[#\?@]/g,Qo=/#/g;function De(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function jn(l){l.g||(l.g=new Map,l.h=0,l.i&&Zt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}r=De.prototype,r.add=function(l,p){jn(this),this.i=null,l=Bn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Xo(l,p){jn(l),p=Bn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ds(l,p){return jn(l),p=Bn(l,p),l.g.has(p)}r.forEach=function(l,p){jn(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(p,L,w,this)},this)},this)};function Yo(l,p){jn(l);let g=[];if(typeof p=="string")Ds(l,p)&&(g=g.concat(l.g.get(Bn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}r.set=function(l,p){return jn(this),this.i=null,l=Bn(this,l),Ds(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Yo(this,l),l.length>0?String(l[0]):p):p};function Jo(l,p,g){Xo(l,p),g.length>0&&(l.i=null,l.g.set(Bn(l,p),z(g)),l.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const L=Fn(g);g=Yo(this,g);for(let U=0;U<g.length;U++){let Y=L;g[U]!==""&&(Y+="="+Fn(g[U])),l.push(Y)}}return this.i=l.join("&")};function Zo(l){const p=new De;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Bn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Vs(l,p){p&&!l.j&&(jn(l),l.i=null,l.g.forEach(function(g,w){const L=w.toLowerCase();w!=L&&(Xo(this,w),Jo(this,L,g))},l)),l.j=p}function $n(l,p){const g=new $r;if(h.Image){const w=new Image;w.onload=E(It,g,"TestLoadImage: loaded",!0,p,w),w.onerror=E(It,g,"TestLoadImage: error",!1,p,w),w.onabort=E(It,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(It,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function qn(l,p){const g=new $r,w=new AbortController,L=setTimeout(()=>{w.abort(),It(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(L),U.ok?It(g,"TestPingServer: ok",!0,p):It(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),It(g,"TestPingServer: error",!1,p)})}function It(l,p,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function Bi(){this.g=new Vi}function gr(l){this.i=l.Sb||null,this.h=l.ab||!1}I(gr,Ur),gr.prototype.g=function(){return new en(this.i,this.h)};function en(l,p){at.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(en,at),r=en.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,In(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ml(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Gr(this):In(this),this.readyState==3&&ml(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Gr(this))},r.Na=function(l){this.g&&(this.response=l,Gr(this))},r.ga=function(){this.g&&Gr(this)};function Gr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,In(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(en.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function gl(l){let p="";return ue(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Os(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=gl(g),typeof l=="string"?g!=null&&Fn(g):Le(l,p,g))}function Be(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Be,at);var yl=/^https?$/i,Cc=["POST","PUT"];r=Be.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ll.g(),this.g.onreadystatechange=P(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Kr(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Cc,p,void 0)>=0)||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of g)this.g.setRequestHeader(U,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){Kr(this,U)}};function Kr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Qr(l),_r(l)}function Qr(l){l.A||(l.A=!0,rt(l,"complete"),rt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,rt(this,"complete"),rt(this,"abort"),_r(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),Be.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?yr(this):this.Xa())},r.Xa=function(){yr(this)};function yr(l){if(l.h&&typeof u<"u"){if(l.v&&Hn(l)==4)setTimeout(l.Ca.bind(l),0);else if(rt(l,"readystatechange"),Hn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=U===0){let Y=String(l.D).match(pl)[1]||null;!Y&&h.self&&h.self.location&&(Y=h.self.location.protocol.slice(0,-1)),w=!yl.test(Y?Y.toLowerCase():"")}g=w}if(g)rt(l,"complete"),rt(l,"success");else{l.o=6;try{var L=Hn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",Qr(l)}}finally{_r(l)}}}}function _r(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||rt(l,"ready");try{g.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Hn(l){return l.g?l.g.readyState:0}r.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),rl(p)}};function _l(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(l){const p={};l=(l.g&&Hn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var g=Cs(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[L]||[];p[L]=U,U.push(g)}ne(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function xs(l){this.za=0,this.i=[],this.j=new $r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wn("baseRetryDelayMs",5e3,l),this.Za=Wn("retryDelaySeedMs",1e4,l),this.Ta=Wn("forwardChannelMaxRetries",2,l),this.va=Wn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new ks(l&&l.concurrentRequestLimit),this.Ba=new Bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=xs.prototype,r.ka=8,r.I=1,r.connect=function(l,p,g,w){tt(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=na(this,null,this.W),vr(this)};function Ms(l){if(Ls(l),l.I==3){var p=l.V++,g=hn(l.J);if(Le(g,"SID",l.M),Le(g,"RID",p),Le(g,"TYPE","terminate"),Gn(l,g),p=new cn(l,l.j,p),p.M=2,p.A=mr(hn(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=wl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),xi(p)}Hi(l)}function tn(l){l.g&&(qi(l),l.g.cancel(),l.g=null)}function Ls(l){tn(l),l.v&&(h.clearTimeout(l.v),l.v=null),bs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function vr(l){if(!qo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Ue||S(),Se||(Ue(),Se=!0),k.add(p,l),l.D=0}}function vl(l,p){return Li(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Br(_(l.Ea,l,p),Us(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new cn(this,this.j,l);let U=this.o;if(this.U&&(U?(U=O(U),Te(U,this.U)):U=this.U),this.u!==null||this.R||(L.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=ta(this,L,p),g=hn(this.J),Le(g,"RID",l),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),Gn(this,g),U&&(this.R?p="headers="+Fn(gl(U))+"&"+p:this.u&&Os(g,this.u,U)),Ns(this.h,L),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",p),Le(g,"SID","null"),L.U=!0,Tn(L,g,null)):Tn(L,g,p),this.I=2}}else this.I==3&&(l?$i(this,l):this.i.length==0||qo(this.h)||$i(this))};function $i(l,p){var g;p?g=p.l:g=l.V++;const w=hn(l.J);Le(w,"SID",l.M),Le(w,"RID",g),Le(w,"AID",l.K),Gn(l,w),l.u&&l.o&&Os(w,l.u,l.o),g=new cn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ta(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ns(l.h,g),Tn(g,w,p)}function Gn(l,p){l.H&&ue(l.H,function(g,w){Le(p,w,g)}),l.l&&ue({},function(g,w){Le(p,w,g)})}function ta(l,p,g){g=Math.min(l.i.length,g);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var L=l.i;let _e=-1;for(;;){const it=["count="+g];_e==-1?g>0?(_e=L[0].g,it.push("ofs="+_e)):_e=0:it.push("ofs="+_e);let ze=!0;for(let lt=0;lt<g;lt++){var U=L[lt].g;const rn=L[lt].map;if(U-=_e,U<0)_e=Math.max(0,L[lt].g-100),ze=!1;else try{U="req"+U+"_"||"";try{var Y=rn instanceof Map?rn:Object.entries(rn);for(const[wr,Qn]of Y){let Xn=Qn;m(Qn)&&(Xn=Fr(Qn)),it.push(U+wr+"="+encodeURIComponent(Xn))}}catch(wr){throw it.push(U+"type="+encodeURIComponent("_badmap")),wr}}catch{w&&w(rn)}}if(ze){Y=it.join("&");break e}}Y=void 0}return l=l.i.splice(0,g),p.G=l,Y}function Dt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Ue||S(),Se||(Ue(),Se=!0),k.add(p,l),l.A=0}}function Kn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Br(_(l.Da,l),Us(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Xr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Br(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),tn(this),Xr(this))};function qi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Xr(l){l.g=new cn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=hn(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),Gn(l,p),l.u&&l.o&&Os(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=mr(hn(p)),g.u=null,g.R=!0,Bo(g,l)}r.Va=function(){this.C!=null&&(this.C=null,tn(this),Kn(this),tt(19))};function bs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Fs(l,p){var g=null;if(l.g==p){bs(l),qi(l),l.g=null;var w=2}else if(Ho(l.h,p))g=p.G,bi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;w=jr(),rt(w,new zo(w,g)),vr(l)}else Dt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&vl(l,p)||w==2&&Kn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),L){case 1:nn(l,5);break;case 4:nn(l,10);break;case 3:nn(l,6);break;default:nn(l,2)}}}function Us(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function nn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),w=l.Ua;const L=!w;w=new Un(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Fi(w,"https"),mr(w),L?$n(w.toString(),g):qn(w.toString(),g)}else tt(2);l.I=0,l.l&&l.l.pa(p),Hi(l),Ls(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Hi(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(X(l.ja,p),X(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function na(l,p,g){var w=g instanceof Un?hn(g):new Un(g);if(w.g!="")p&&(w.g=p+"."+w.g),zn(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const U=new Un(null);w&&Fi(U,w),p&&(U.g=p),L&&zn(U,L),g&&(U.h=g),w=U}return g=l.G,p=l.wa,g&&p&&Le(w,g,p),Le(w,"VER",l.ka),Gn(l,w),w}function wl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new Be(new gr({ab:g})):new Be(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}r=El.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function zs(){}zs.prototype.g=function(l,p){return new St(l,p)};function St(l,p){at.call(this),this.g=new xs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Yr(this)}I(St,at),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ms(this.g)},St.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Fr(l),l=g);p.i.push(new Ac(p.Ya++,l)),p.I==3&&vr(p)},St.prototype.N=function(){this.g.l=null,delete this.j,Ms(this.g),delete this.g,St.Z.N.call(this)};function Tl(l){Ss.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(Tl,Ss);function Il(){Uo.call(this),this.status=1}I(Il,Uo);function Yr(l){this.g=l}I(Yr,El),Yr.prototype.ra=function(){rt(this.g,"a")},Yr.prototype.qa=function(l){rt(this.g,new Tl(l))},Yr.prototype.pa=function(l){rt(this.g,new Il)},Yr.prototype.oa=function(){rt(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,ov=function(){return new zs},sv=function(){return jr()},iv=En,Sf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,Cu=qr,Hr.COMPLETE="complete",rv=Hr,il.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",at.prototype.listen=at.prototype.J,Pa=il,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,nv=Be}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const zg="@firebase/firestore",jg="4.9.3";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */const ps=new nc("@firebase/firestore");function lo(){return ps.logLevel}function te(r,...e){if(ps.logLevel<=Pe.DEBUG){const t=e.map(od);ps.debug(`Firestore (${No}): ${r}`,...t)}}function xr(r,...e){if(ps.logLevel<=Pe.ERROR){const t=e.map(od);ps.error(`Firestore (${No}): ${r}`,...t)}}function wo(r,...e){if(ps.logLevel<=Pe.WARN){const t=e.map(od);ps.warn(`Firestore (${No}): ${r}`,...t)}}function od(r){if(typeof r=="string")return r;try{/**
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
 */function pe(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,av(r,s,t)}function av(r,e,t){let s=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||av(e,o,s)}function we(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Ln{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class us{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class lv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class eA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class tA{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new us;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new us,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new us)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new lv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class nA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new nA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class ad{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=sA(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function Af(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return uf(o)===uf(u)?ke(o,u):uf(o)?1:-1}return ke(r.length,e.length)}const oA=55296,aA=57343;function uf(r){const e=r.charCodeAt(0);return e>=oA&&e<=aA}function Eo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const $g="__name__";class tr{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=tr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const s=tr.isNumericId(e),o=tr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):Af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class Ke extends tr{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const lA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends tr{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return lA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$g}static keyField(){return new Pt([$g])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new le(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new le(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new le(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new le(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ke.fromString(e))}static fromName(e){return new ce(Ke.fromString(e).popFirst(5))}static empty(){return new ce(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ke(e.slice()))}}/**
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
 */function uv(r,e,t){if(!t)throw new le(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function uA(r,e,t,s){if(e===!0&&s===!0)throw new le(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function qg(r){if(!ce.isDocumentKey(r))throw new le(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Hg(r){if(ce.isDocumentKey(r))throw new le(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function cv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ld(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":pe(12329,{type:typeof r})}function wi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new le(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ld(r);throw new le(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ht(r,e){const t={typeString:r};return e&&(t.value=e),t}function Xa(r,e){if(!cv(r))throw new le(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new le(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Wg=-62135596800,Gg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Gg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wg)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gg}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xa(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ht("string",Qe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Qe(0,0))}static max(){return new ye(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const za=-1;function cA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Ii(o,ce.empty(),e)}function hA(r){return new Ii(r.readTime,r.key,za)}class Ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ii(ye.min(),ce.empty(),za)}static max(){return new Ii(ye.max(),ce.empty(),za)}}function fA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
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
 */const dA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Do(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==dA)throw r;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):j.reject(t)}static resolve(e){return new j(((t,s)=>{t(e)}))}static reject(e){return new j(((t,s)=>{s(e)}))}static waitFor(e){return new j(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next((o=>o?j.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new j(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new j(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function mA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Vo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lc.ce=-1;/**
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
 */const ud=-1;function uc(r){return r==null}function $u(r){return r===0&&1/r==-1/0}function gA(r){return typeof r=="number"&&Number.isInteger(r)&&!$u(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const hv="";function yA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Kg(e)),e=_A(r.get(t),e);return Kg(e)}function _A(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case hv:t+="";break;default:t+=u}}return t}function Kg(r){return r+hv+""}/**
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
 */function Qg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ki(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function fv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xg(this.data.getIterator())}getIteratorFrom(e){return new Xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ln{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new ln([])}unionWith(e){let t=new yt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new dv("Invalid base64 string: "+u):u}})(e);return new kt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const vA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=vA.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ai(r){return typeof r=="string"?kt.fromBase64String(r):kt.fromUint8Array(r)}/**
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
 */const pv="server_timestamp",mv="__type__",gv="__previous_value__",yv="__local_write_time__";function cd(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[mv])==null?void 0:s.stringValue)===pv}function cc(r){const e=r.mapValue.fields[gv];return cd(e)?cc(e):e}function ja(r){const e=Si(r.mapValue.fields[yv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class wA{constructor(e,t,s,o,u,h,m,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E}}const qu="(default)";class Ba{constructor(e,t){this.projectId=e,this.database=t||qu}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database===qu}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _v="__type__",EA="__max__",wu={mapValue:{}},vv="__vector__",Hu="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?cd(r)?4:IA(r)?9007199254740991:TA(r)?10:11:pe(28295,{value:r})}function ur(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ja(r).isEqual(ja(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Si(o.timestampValue),m=Si(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ai(o.bytesValue).isEqual(Ai(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?$u(h)===$u(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Qg(h)!==Qg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ur(h[y],m[y])))return!1;return!0})(r,e);default:return pe(52216,{left:r})}}function $a(r,e){return(r.values||[]).find((t=>ur(t,e)))!==void 0}function To(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ot(u.integerValue||u.doubleValue),y=ot(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(r,e);case 3:return Yg(r.timestampValue,e.timestampValue);case 4:return Yg(ja(r),ja(e));case 5:return Af(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ai(u),y=Ai(h);return m.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const E=ke(m[_],y[_]);if(E!==0)return E}return ke(m.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=ke(ot(u.latitude),ot(h.latitude));return m!==0?m:ke(ot(u.longitude),ot(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Jg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var P,z,X,K;const m=u.fields||{},y=h.fields||{},_=(P=m[Hu])==null?void 0:P.arrayValue,E=(z=y[Hu])==null?void 0:z.arrayValue,I=ke(((X=_==null?void 0:_.values)==null?void 0:X.length)||0,((K=E==null?void 0:E.values)==null?void 0:K.length)||0);return I!==0?I:Jg(_,E)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===wu.mapValue&&h===wu.mapValue)return 0;if(u===wu.mapValue)return 1;if(h===wu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let I=0;I<y.length&&I<E.length;++I){const P=Af(y[I],E[I]);if(P!==0)return P;const z=To(m[y[I]],_[E[I]]);if(z!==0)return z}return ke(y.length,E.length)})(r.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function Yg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=Si(r),s=Si(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function Jg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=To(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function Io(r){return Rf(r)}function Rf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Si(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ai(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ce.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Rf(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Rf(t.fields[h])}`;return o+"}"})(r.mapValue):pe(61005,{value:r})}function Pu(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cc(r);return e?16+Pu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ai(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Pu(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ki(s.fields,((u,h)=>{o+=u.length+Pu(h)})),o})(r.mapValue);default:throw pe(13486,{value:r})}}function Cf(r){return!!r&&"integerValue"in r}function hd(r){return!!r&&"arrayValue"in r}function Zg(r){return!!r&&"nullValue"in r}function ey(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ku(r){return!!r&&"mapValue"in r}function TA(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[_v])==null?void 0:s.stringValue)===vv}function xa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ki(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=xa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(r.arrayValue.values[t]);return e}return{...r}}function IA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===EA}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=xa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ki(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Yt(xa(this.value))}}function wv(r){const e=[];return ki(r.fields,((t,s)=>{const o=new Pt([t]);if(ku(s)){const u=wv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new ln(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,ye.min(),ye.min(),ye.min(),Yt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,ye.min(),ye.min(),Yt.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,ye.min(),ye.min(),Yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wu{constructor(e,t){this.position=e,this.inclusive=t}}function ty(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ce.comparator(ce.fromName(h.referenceValue),t.key):s=To(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ny(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ur(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gu{constructor(e,t="asc"){this.field=e,this.dir=t}}function SA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Ev{}class mt extends Ev{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RA(e,t,s):t==="array-contains"?new kA(e,s):t==="in"?new NA(e,s):t==="not-in"?new DA(e,s):t==="array-contains-any"?new VA(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new CA(e,s):new PA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends Ev{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new cr(e,t)}matches(e){return Tv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Tv(r){return r.op==="and"}function Iv(r){return AA(r)&&Tv(r)}function AA(r){for(const e of r.filters)if(e instanceof cr)return!1;return!0}function Pf(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+Io(r.value);if(Iv(r))return r.filters.map((e=>Pf(e))).join(",");{const e=r.filters.map((t=>Pf(t))).join(",");return`${r.op}(${e})`}}function Sv(r,e){return r instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&ur(s.value,o.value)})(r,e):r instanceof cr?(function(s,o){return o instanceof cr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Sv(h,o.filters[m])),!0):!1})(r,e):void pe(19439)}function Av(r){return r instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`})(r):r instanceof cr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Av).join(" ,")+"}"})(r):"Filter"}class RA extends mt{constructor(e,t,s){super(e,t,s),this.key=ce.fromName(s.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class CA extends mt{constructor(e,t){super(e,"in",t),this.keys=Rv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class PA extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Rv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Rv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ce.fromName(s.referenceValue)))}class kA extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hd(t)&&$a(t.arrayValue,this.value)}}class NA extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class DA extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$a(this.value.arrayValue,t)}}class VA extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$a(this.value.arrayValue,s)))}}/**
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
 */class OA{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function ry(r,e=null,t=[],s=[],o=null,u=null,h=null){return new OA(r,e,t,s,o,u,h)}function fd(r){const e=we(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Pf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),uc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Io(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Io(s))).join(",")),e.Te=t}return e.Te}function dd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!SA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Sv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ny(r.startAt,e.startAt)&&ny(r.endAt,e.endAt)}function kf(r){return ce.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class hc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xA(r,e,t,s,o,u,h,m){return new hc(r,e,t,s,o,u,h,m)}function pd(r){return new hc(r)}function iy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function MA(r){return r.collectionGroup!==null}function Ma(r){const e=we(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Pt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Gu(u,s))})),t.has(Pt.keyField().canonicalString())||e.Ie.push(new Gu(Pt.keyField(),s))}return e.Ie}function rr(r){const e=we(r);return e.Ee||(e.Ee=LA(e,Ma(r))),e.Ee}function LA(r,e){if(r.limitType==="F")return ry(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Gu(o.field,u)}));const t=r.endAt?new Wu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Wu(r.startAt.position,r.startAt.inclusive):null;return ry(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Nf(r,e,t){return new hc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function fc(r,e){return dd(rr(r),rr(e))&&r.limitType===e.limitType}function Cv(r){return`${fd(rr(r))}|lt:${r.limitType}`}function uo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Av(o))).join(", ")}]`),uc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Io(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Io(o))).join(",")),`Target(${s})`})(rr(r))}; limitType=${r.limitType})`}function dc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ce.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Ma(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=ty(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,Ma(s),o)||s.endAt&&!(function(h,m,y){const _=ty(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,Ma(s),o))})(r,e)}function bA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Pv(r){return(e,t)=>{let s=!1;for(const o of Ma(r)){const u=FA(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function FA(r,e,t){const s=r.field.isKeyField()?ce.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?To(y,_):pe(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:r.dir})}}/**
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
 */class _s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return fv(this.inner)}size(){return this.innerSize}}/**
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
 */const UA=new et(ce.comparator);function Mr(){return UA}const kv=new et(ce.comparator);function ka(...r){let e=kv;for(const t of r)e=e.insert(t.key,t);return e}function Nv(r){let e=kv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function as(){return La()}function Dv(){return La()}function La(){return new _s((r=>r.toString()),((r,e)=>r.isEqual(e)))}const zA=new et(ce.comparator),jA=new yt(ce.comparator);function Ne(...r){let e=jA;for(const t of r)e=e.add(t);return e}const BA=new yt(ke);function $A(){return BA}/**
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
 */function md(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$u(e)?"-0":e}}function Vv(r){return{integerValue:""+r}}function qA(r,e){return gA(e)?Vv(e):md(r,e)}/**
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
 */class pc{constructor(){this._=void 0}}function HA(r,e,t){return r instanceof Ku?(function(o,u){const h={fields:{[mv]:{stringValue:pv},[yv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&cd(u)&&(u=cc(u)),u&&(h.fields[gv]=u),{mapValue:h}})(t,e):r instanceof qa?xv(r,e):r instanceof Ha?Mv(r,e):(function(o,u){const h=Ov(o,u),m=sy(h)+sy(o.Ae);return Cf(h)&&Cf(o.Ae)?Vv(m):md(o.serializer,m)})(r,e)}function WA(r,e,t){return r instanceof qa?xv(r,e):r instanceof Ha?Mv(r,e):t}function Ov(r,e){return r instanceof Qu?(function(s){return Cf(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ku extends pc{}class qa extends pc{constructor(e){super(),this.elements=e}}function xv(r,e){const t=Lv(e);for(const s of r.elements)t.some((o=>ur(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends pc{constructor(e){super(),this.elements=e}}function Mv(r,e){let t=Lv(e);for(const s of r.elements)t=t.filter((o=>!ur(o,s)));return{arrayValue:{values:t}}}class Qu extends pc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function sy(r){return ot(r.integerValue||r.doubleValue)}function Lv(r){return hd(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function GA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof qa&&o instanceof qa||s instanceof Ha&&o instanceof Ha?Eo(s.elements,o.elements,ur):s instanceof Qu&&o instanceof Qu?ur(s.Ae,o.Ae):s instanceof Ku&&o instanceof Ku})(r.transform,e.transform)}class KA{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class mc{}function bv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new gd(r.key,xn.none()):new Ya(r.key,r.data,xn.none());{const t=r.data,s=Yt.empty();let o=new yt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ni(r.key,s,new ln(o.toArray()),xn.none())}}function QA(r,e,t){r instanceof Ya?(function(o,u,h){const m=o.value.clone(),y=ay(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Ni?(function(o,u,h){if(!Nu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ay(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(Fv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ba(r,e,t,s){return r instanceof Ya?(function(u,h,m,y){if(!Nu(u.precondition,h))return m;const _=u.value.clone(),E=ly(u.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Ni?(function(u,h,m,y){if(!Nu(u.precondition,h))return m;const _=ly(u.fieldTransforms,y,h),E=h.data;return E.setAll(Fv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((I=>I.field)))})(r,e,t,s):(function(u,h,m){return Nu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function XA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=Ov(s.transform,o||null);u!=null&&(t===null&&(t=Yt.empty()),t.set(s.field,u))}return t||null}function oy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,((u,h)=>GA(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ya extends mc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ni extends mc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Fv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function ay(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,WA(h,m,t[o]))}return s}function ly(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,HA(u,h,e))}return s}class gd extends mc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YA extends mc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&QA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Dv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=bv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,((t,s)=>oy(t,s)))&&Eo(this.baseMutations,e.baseMutations,((t,s)=>oy(t,s)))}}class yd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return zA})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new yd(e,t,s,o)}}/**
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
 */class ZA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Ve;function tR(r){switch(r){case H.OK:return pe(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return pe(15467,{code:r})}}function Uv(r){if(r===void 0)return xr("GRPC error has no .code"),H.UNKNOWN;switch(r){case ct.OK:return H.OK;case ct.CANCELLED:return H.CANCELLED;case ct.UNKNOWN:return H.UNKNOWN;case ct.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ct.INTERNAL:return H.INTERNAL;case ct.UNAVAILABLE:return H.UNAVAILABLE;case ct.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ct.NOT_FOUND:return H.NOT_FOUND;case ct.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ct.ABORTED:return H.ABORTED;case ct.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ct.DATA_LOSS:return H.DATA_LOSS;default:return pe(39323,{code:r})}}(Ve=ct||(ct={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nR(){return new TextEncoder}/**
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
 */const rR=new vi([4294967295,4294967295],0);function uy(r){const e=nR().encode(r),t=new tv;return t.update(e),new Uint8Array(t.digest())}function cy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,u],0)]}class _d{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(rR)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=uy(e),[s,o]=cy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new _d(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=uy(e),[s,o]=cy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new gc(ye.min(),o,new et(ke),Mr(),Ne())}}class Ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ja(s,t,Ne(),Ne(),Ne())}}/**
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
 */class Du{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class zv{constructor(e,t){this.targetId=e,this.Ce=t}}class jv{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class hy{constructor(){this.ve=0,this.Fe=fy(),this.Me=kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),s=Ne();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe(38017,{changeType:u})}})),new Ja(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=fy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class iR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mr(),this.Je=Eu(),this.He=Eu(),this.Ye=new et(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(kf(u))if(s===0){const h=new ce(u.path);this.et(t,h,Ft.newNoDocument(h,ye.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ai(s).toUint8Array()}catch(y){if(y instanceof dv)return wo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new _d(h,o,u)}catch(y){return wo(y instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&kf(m.target)){const y=new ce(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Ne();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new gc(e,t,this.Ye,this.je,s);return this.je=Mr(),this.Je=Eu(),this.He=Eu(),this.Ye=new et(ke),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new hy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new yt(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new yt(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new hy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Eu(){return new et(ce.comparator)}function fy(){return new et(ce.comparator)}const sR={asc:"ASCENDING",desc:"DESCENDING"},oR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aR={and:"AND",or:"OR"};class lR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Df(r,e){return r.useProto3Json||uc(e)?e:{value:e}}function Xu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function uR(r,e){return Xu(r,e.toTimestamp())}function ir(r){return Fe(!!r,49232),ye.fromTimestamp((function(t){const s=Si(t);return new Qe(s.seconds,s.nanos)})(r))}function vd(r,e){return Vf(r,e).canonicalString()}function Vf(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function $v(r){const e=Ke.fromString(r);return Fe(Kv(e),10190,{key:e.toString()}),e}function Of(r,e){return vd(r.databaseId,e.path)}function cf(r,e){const t=$v(e);if(t.get(1)!==r.databaseId.projectId)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ce(Hv(t))}function qv(r,e){return vd(r.databaseId,e)}function cR(r){const e=$v(r);return e.length===4?Ke.emptyPath():Hv(e)}function xf(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Hv(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function dy(r,e,t){return{name:Of(r,e),fields:t.value.mapValue.fields}}function hR(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:pe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),kt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),kt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?H.UNKNOWN:Uv(_.code);return new le(E,_.message||"")})(h);t=new jv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=cf(r,s.document.name),u=ir(s.document.updateTime),h=s.document.createTime?ir(s.document.createTime):ye.min(),m=new Yt({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Du(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=cf(r,s.document),u=s.readTime?ir(s.readTime):ye.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Du([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=cf(r,s.document),u=s.removedTargetIds||[];t=new Du([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new eR(o,u),m=s.targetId;t=new zv(m,h)}}return t}function fR(r,e){let t;if(e instanceof Ya)t={update:dy(r,e.key,e.value)};else if(e instanceof gd)t={delete:Of(r,e.key)};else if(e instanceof Ni)t={update:dy(r,e.key,e.data),updateMask:ER(e.fieldMask)};else{if(!(e instanceof YA))return pe(16599,{Vt:e.type});t={verify:Of(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ku)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Qu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw pe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:uR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)})(r,e.precondition)),t}function dR(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?ir(o.updateTime):ir(u);return h.isEqual(ye.min())&&(h=ir(u)),new KA(h,o.transformResults||[])})(t,e)))):[]}function pR(r,e){return{documents:[qv(r,e.path)]}}function mR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=qv(r,o);const u=(function(_){if(_.length!==0)return Gv(cr.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(P){return{field:co(P.field),direction:_R(P.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Df(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function gR(r){let e=cR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(I){const P=Wv(I);return P instanceof cr&&Iv(P)?P.getFilters():[P]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((P=>(function(X){return new Gu(ho(X.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(X.direction))})(P)))})(t.orderBy));let m=null;t.limit&&(m=(function(I){let P;return P=typeof I=="object"?I.value:I,uc(P)?null:P})(t.limit));let y=null;t.startAt&&(y=(function(I){const P=!!I.before,z=I.values||[];return new Wu(z,P)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const P=!I.before,z=I.values||[];return new Wu(z,P)})(t.endAt)),xA(e,o,h,u,m,"F",y,_)}function yR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ho(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ho(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ho(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ho(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return mt.create(ho(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return cr.create(t.compositeFilter.filters.map((s=>Wv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(r):pe(30097,{filter:r})}function _R(r){return sR[r]}function vR(r){return oR[r]}function wR(r){return aR[r]}function co(r){return{fieldPath:r.canonicalString()}}function ho(r){return Pt.fromServerFormat(r.fieldPath)}function Gv(r){return r instanceof mt?(function(t){if(t.op==="=="){if(ey(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NAN"}};if(Zg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ey(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NAN"}};if(Zg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(t.field),op:vR(t.op),value:t.value}}})(r):r instanceof cr?(function(t){const s=t.getFilters().map((o=>Gv(o)));return s.length===1?s[0]:{compositeFilter:{op:wR(t.op),filters:s}}})(r):pe(54877,{filter:r})}function ER(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Kv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class gi{constructor(e,t,s,o,u=ye.min(),h=ye.min(),m=kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TR{constructor(e){this.yt=e}}function IR(r){const e=gR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
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
 */class SR{constructor(){this.Cn=new AR}addToCollectionParentIndex(e,t){return this.Cn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(Ii.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class AR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ke.comparator)).toArray()}}/**
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
 */const py={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qv=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(Qv,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class So{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new So(0)}static cr(){return new So(-1)}}/**
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
 */const my="LruGarbageCollector",RR=1048576;function gy([r,e],[t,s]){const o=ke(r,t);return o===0?ke(e,s):o}class CR{constructor(e){this.Ir=e,this.buffer=new yt(gy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();gy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(my,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vo(t)?te(my,"Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Vr(3e5)}))}}class kR{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return j.resolve(lc.ce);const s=new CR(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(py)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),py):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,m=Date.now(),this.removeTargets(e,s,t)))).next((I=>(u=I,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),lo()<=Pe.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${I} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I}))))}}function NR(r,e){return new kR(r,e)}/**
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
 */class DR{constructor(){this.changes=new _s((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class OR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ba(s.mutation,o,ln.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ne()){const o=as();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=ka();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=as();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ne())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Mr();const h=La(),m=(function(){return La()})();return t.forEach(((y,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Ni)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),ba(E.mutation,_,E.mutation.getFieldMask(),Qe.now())):h.set(_.key,ln.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new VR(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new et(((h,m)=>h-m)),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let E=s.get(y)||ln.empty();E=m.applyToLocalView(_,E),s.set(y,E);const I=(o.get(m.batchId)||Ne()).add(y);o=o.insert(m.batchId,I)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,E=y.value,I=Dv();E.forEach((P=>{if(!u.has(P)){const z=bv(t.get(P),s.get(P));z!==null&&I.set(P,z),u=u.add(P)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return j.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ce.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):MA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):j.resolve(as());let m=za,y=u;return h.next((_=>j.forEach(_,((E,I)=>(m<I.largestBatchId&&(m=I.largestBatchId),u.get(E)?j.resolve():this.remoteDocumentCache.getEntry(e,E).next((P=>{y=y.insert(E,P)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Ne()))).next((E=>({batchId:m,changes:Nv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((s=>{let o=ka();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ka();return this.indexManager.getCollectionParents(e,u).next((m=>j.forEach(m,(y=>{const _=(function(I,P){return new hc(P,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((I,P)=>{h=h.insert(I,P)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))}));let m=ka();return h.forEach(((y,_)=>{const E=u.get(y);E!==void 0&&ba(E.mutation,_,ln.empty(),Qe.now()),dc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
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
 */class xR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return j.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ir(o.createTime)}})(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:IR(o.bundledQuery),readTime:ir(o.readTime)}})(t)),j.resolve()}}/**
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
 */class MR{constructor(){this.overlays=new et(ce.comparator),this.qr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=as();return j.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),j.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const o=as(),u=t.length+1,h=new ce(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return j.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=as(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=as(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return j.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new ZA(t,s));let u=this.qr.get(t);u===void 0&&(u=Ne(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class LR{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class wd{constructor(){this.Qr=new yt(Tt.$r),this.Ur=new yt(Tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Tt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ce(new Ke([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ce(new Ke([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=Ne();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ce.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||ce.comparator(e.key,t.key)}}/**
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
 */class bR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new yt(Tt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new JA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(h)}lookupMutationBatch(e,t){return j.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return j.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?ud:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),j.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(ke);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),j.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ce.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new ce(u),0);let m=new yt(ke);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),j.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return j.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Zr.firstAfterOrEqual(s);return j.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class FR{constructor(e){this.ri=e,this.docs=(function(){return new et(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Mr();const h=t.path,m=new ce(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||fA(hA(E),s)<=0||(o.has(E.key)||dc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return j.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe(9500)}ii(e,t){return j.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new UR(this)}getSize(e){return j.resolve(this.size)}}class UR extends DR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),j.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class zR{constructor(e){this.persistence=e,this.si=new _s((t=>fd(t)),dd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new wd,this.targetCount=0,this.ai=So.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),j.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new So(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Pr(t),j.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),j.waitFor(u).next((()=>o))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),j.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this._i.containsKey(t))}}/**
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
 */class Xv{constructor(e,t){this.ui={},this.overlays={},this.ci=new lc(0),this.li=!1,this.li=!0,this.hi=new LR,this.referenceDelegate=e(this),this.Pi=new zR(this),this.indexManager=new SR,this.remoteDocumentCache=(function(o){return new FR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new TR(t),this.Ii=new xR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new bR(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new jR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return j.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class jR extends pA{constructor(e){super(),this.currentSequenceNumber=e}}class Ed{constructor(e){this.persistence=e,this.Ri=new wd,this.Vi=null}static mi(e){return new Ed(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(s=>{const o=ce.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,ye.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return j.or([()=>j.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Yu{constructor(e,t){this.persistence=e,this.pi=new _s((s=>yA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=NR(this,t)}static mi(e,t){return new Yu(e,t)}Ei(){}di(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return j.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?j.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ye.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pu(e.data.value)),t}br(e,t,s){return j.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return j.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Td{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ne(),o=Ne();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Td(e,t.fromCache,s,o)}}/**
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
 */class BR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $R{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return uT()?8:mA(Ut())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new BR;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(lo()<=Pe.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(lo()<=Pe.DEBUG&&te("QueryEngine","Query:",uo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(lo()<=Pe.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(t))):j.resolve())}ys(e,t){if(iy(t))return j.resolve(null);let s=rr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Nf(t,null,"F"),s=rr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ne(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Nf(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return iy(t)||o.isEqual(ye.min())?j.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?j.resolve(null):(lo()<=Pe.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),uo(t)),this.vs(e,h,t,cA(o,za)).next((m=>m)))}))}Ds(e,t){let s=new yt(Pv(e));return t.forEach(((o,u)=>{dc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return lo()<=Pe.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",uo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ii.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Id="LocalStore",qR=3e8;class HR{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new et(ke),this.xs=new _s((u=>fd(u)),dd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function WR(r,e,t,s){return new HR(r,e,t,s)}async function Yv(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ne();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function GR(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,E){const I=_.batch,P=I.keys();let z=j.resolve();return P.forEach((X=>{z=z.next((()=>E.getEntry(y,X))).next((K=>{const B=_.docVersions.get(X);Fe(B!==null,48541),K.version.compareTo(B)<0&&(I.applyToRemoteDocument(K,_),K.isValidDocument()&&(K.setReadTime(_.commitVersion),E.addEntry(K)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,I)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ne();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Jv(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function KR(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((E,I)=>{const P=o.get(I);if(!P)return;m.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,I).next((()=>t.Pi.addMatchingKeys(u,E.addedDocuments,I))));let z=P.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(I)!==null?z=z.withResumeToken(kt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(I,z),(function(K,B,Z){return K.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=qR?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(P,z,E)&&m.push(t.Pi.updateTargetData(u,z))}));let y=Mr(),_=Ne();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(QR(u,h,e.documentUpdates).next((E=>{y=E.ks,_=E.qs}))),!s.isEqual(ye.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next((I=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return j.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function QR(r,e,t){let s=Ne(),o=Ne();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Mr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ye.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(Id,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function XR(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ud),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function YR(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,j.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Mf(r,e,t){const s=we(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Vo(h))throw h;te(Id,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function yy(r,e,t){const s=we(r);let o=ye.min(),u=Ne();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,E){const I=we(y),P=I.xs.get(E);return P!==void 0?j.resolve(I.Ms.get(P)):I.Pi.getTargetData(_,E)})(s,h,rr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?u:Ne()))).next((m=>(JR(s,bA(e),m),{documents:m,Qs:u})))))}function JR(r,e,t){let s=r.Os.get(e)||ye.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(e,s)}class _y{constructor(){this.activeTargetIds=$A()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZR{constructor(){this.Mo=new _y,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new _y,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eC{Oo(e){}shutdown(){}}/**
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
 */const vy="ConnectivityMonitor";class wy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(vy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(vy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tu=null;function Lf(){return Tu===null?Tu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Tu++,"0x"+Tu.toString(16)}/**
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
 */const hf="RestConnection",tC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===qu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Lf(),m=this.zo(e,t.toUriEncodedString());te(hf,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),E=Co(_);return this.Jo(e,m,y,s,E).then((I=>(te(hf,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw wo(hf,`RPC '${e}' ${h} failed with error: `,I,"url: ",m,"request:",s),I}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+No})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=tC[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class rC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Lt="WebChannelConnection";class iC extends nC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Lf();return new Promise(((m,y)=>{const _=new nv;_.setWithCredentials(!0),_.listenOnce(rv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Cu.NO_ERROR:const I=_.getResponseJson();te(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),m(I);break;case Cu.TIMEOUT:te(Lt,`RPC '${e}' ${h} timed out`),y(new le(H.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const P=_.getStatus();if(te(Lt,`RPC '${e}' ${h} failed with status:`,P,"response text:",_.getResponseText()),P>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const X=z==null?void 0:z.error;if(X&&X.status&&X.message){const K=(function(Z){const ie=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ie)>=0?ie:H.UNKNOWN})(X.status);y(new le(K,X.message))}else y(new le(H.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new le(H.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{te(Lt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);te(Lt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=Lf(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ov(),m=sv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const I=h.createWebChannel(E,y);this.I_(I);let P=!1,z=!1;const X=new rC({Yo:B=>{z?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(P||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),P=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,B),I.send(B))},Zo:()=>I.close()}),K=(B,Z,ie)=>{B.listen(Z,(de=>{try{ie(de)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return K(I,Pa.EventType.OPEN,(()=>{z||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),X.o_())})),K(I,Pa.EventType.CLOSE,(()=>{z||(z=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),X.a_(),this.E_(I))})),K(I,Pa.EventType.ERROR,(B=>{z||(z=!0,wo(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),X.a_(new le(H.UNAVAILABLE,"The operation could not be completed")))})),K(I,Pa.EventType.MESSAGE,(B=>{var Z;if(!z){const ie=B.data[0];Fe(!!ie,16349);const de=ie,Ee=(de==null?void 0:de.error)||((Z=de[0])==null?void 0:Z.error);if(Ee){te(Lt,`RPC '${e}' stream ${o} received error:`,Ee);const Ue=Ee.status;let Se=(function(R){const V=ct[R];if(V!==void 0)return Uv(V)})(Ue),k=Ee.message;Se===void 0&&(Se=H.INTERNAL,k="Unknown error status: "+Ue+" with message "+Ee.message),z=!0,X.a_(new le(Se,k)),I.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,ie),X.u_(ie)}})),K(m,iv.STAT_EVENT,(B=>{B.stat===Sf.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Sf.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{X.__()}),0),X}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ff(){return typeof document<"u"?document:null}/**
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
 */function yc(r){return new lR(r,!0)}/**
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
 */class Zv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ey="PersistentStream";class ew{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new le(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Ey,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(te(Ey,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sC extends ew{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=hR(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?ir(h.readTime):ye.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=xf(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=kf(y)?{documents:pR(u,y)}:{query:mR(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Bv(u,h.resumeToken);const _=Df(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Xu(u,h.snapshotVersion.toTimestamp());const _=Df(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=yR(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=xf(this.serializer),t.removeTarget=e,this.q_(t)}}class oC extends ew{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=dR(e.writeResults,e.commitTime),s=ir(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=xf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>fR(this.serializer,s)))};this.q_(t)}}/**
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
 */class aC{}class lC extends aC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Vf(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new le(H.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Vf(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class uC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ms="RemoteStore";class cC{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{vs(this)&&(te(ms,"Restarting streams for network reachability change."),await(async function(y){const _=we(y);_.Ea.add(4),await Za(_),_.Ra.set("Unknown"),_.Ea.delete(4),await _c(_)})(this))}))})),this.Ra=new uC(s,o)}}async function _c(r){if(vs(r))for(const e of r.da)await e(!0)}async function Za(r){for(const e of r.da)await e(!1)}function tw(r,e){const t=we(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Cd(t)?Rd(t):Oo(t).O_()&&Ad(t,e))}function Sd(r,e){const t=we(r),s=Oo(t);t.Ia.delete(e),s.O_()&&nw(t,e),t.Ia.size===0&&(s.O_()?s.L_():vs(t)&&t.Ra.set("Unknown"))}function Ad(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oo(r).Y_(e)}function nw(r,e){r.Va.Ue(e),Oo(r).Z_(e)}function Rd(r){r.Va=new iR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Oo(r).start(),r.Ra.ua()}function Cd(r){return vs(r)&&!Oo(r).x_()&&r.Ia.size>0}function vs(r){return we(r).Ea.size===0}function rw(r){r.Va=void 0}async function hC(r){r.Ra.set("Online")}async function fC(r){r.Ia.forEach(((e,t)=>{Ad(r,e)}))}async function dC(r,e){rw(r),Cd(r)?(r.Ra.ha(e),Rd(r)):r.Ra.set("Unknown")}async function pC(r,e,t){if(r.Ra.set("Online"),e instanceof jv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){te(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ju(r,s)}else if(e instanceof Du?r.Va.Ze(e):e instanceof zv?r.Va.st(e):r.Va.tt(e),!t.isEqual(ye.min()))try{const s=await Jv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(_);E&&u.Ia.set(_,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(kt.EMPTY_BYTE_STRING,E.snapshotVersion)),nw(u,y);const I=new gi(E.target,y,_,E.sequenceNumber);Ad(u,I)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){te(ms,"Failed to raise snapshot:",s),await Ju(r,s)}}async function Ju(r,e,t){if(!Vo(e))throw e;r.Ea.add(1),await Za(r),r.Ra.set("Offline"),t||(t=()=>Jv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{te(ms,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await _c(r)}))}function iw(r,e){return e().catch((t=>Ju(r,t,e)))}async function vc(r){const e=we(r),t=Ci(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ud;for(;mC(e);)try{const o=await XR(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,gC(e,o)}catch(o){await Ju(e,o)}sw(e)&&ow(e)}function mC(r){return vs(r)&&r.Ta.length<10}function gC(r,e){r.Ta.push(e);const t=Ci(r);t.O_()&&t.X_&&t.ea(e.mutations)}function sw(r){return vs(r)&&!Ci(r).x_()&&r.Ta.length>0}function ow(r){Ci(r).start()}async function yC(r){Ci(r).ra()}async function _C(r){const e=Ci(r);for(const t of r.Ta)e.ea(t.mutations)}async function vC(r,e,t){const s=r.Ta.shift(),o=yd.from(s,e,t);await iw(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await vc(r)}async function wC(r,e){e&&Ci(r).X_&&await(async function(s,o){if((function(h){return tR(h)&&h!==H.ABORTED})(o.code)){const u=s.Ta.shift();Ci(s).B_(),await iw(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await vc(s)}})(r,e),sw(r)&&ow(r)}async function Ty(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),te(ms,"RemoteStore received new credentials");const s=vs(t);t.Ea.add(3),await Za(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await _c(t)}async function EC(r,e){const t=we(r);e?(t.Ea.delete(2),await _c(t)):e||(t.Ea.add(2),await Za(t),t.Ra.set("Unknown"))}function Oo(r){return r.ma||(r.ma=(function(t,s,o){const u=we(t);return u.sa(),new sC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:hC.bind(null,r),t_:fC.bind(null,r),r_:dC.bind(null,r),H_:pC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Cd(r)?Rd(r):r.Ra.set("Unknown")):(await r.ma.stop(),rw(r))}))),r.ma}function Ci(r){return r.fa||(r.fa=(function(t,s,o){const u=we(t);return u.sa(),new oC(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:yC.bind(null,r),r_:wC.bind(null,r),ta:_C.bind(null,r),na:vC.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await vc(r)):(await r.fa.stop(),r.Ta.length>0&&(te(ms,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Pd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Pd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(r,e){if(xr("AsyncQueue",`${e}: ${r}`),Vo(r))return new le(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ce.comparator(t.key,s.key):(t,s)=>ce.comparator(t.key,s.key),this.keyedMap=ka(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Iy{constructor(){this.ga=new et(ce.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ao{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ao(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class TC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class IC{constructor(){this.queries=Sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=Sy(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new le(H.ABORTED,"Firestore shutting down"))}}function Sy(){return new _s((r=>Cv(r)),fc)}async function SC(r,e){const t=we(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new TC,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=kd(h,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Nd(t)}async function AC(r,e){const t=we(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function RC(r,e){const t=we(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&Nd(t)}function CC(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Nd(r){r.Ca.forEach((e=>{e.next()}))}var bf,Ay;(Ay=bf||(bf={})).Ma="default",Ay.Cache="cache";class PC{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bf.Cache}}/**
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
 */class aw{constructor(e){this.key=e}}class lw{constructor(e){this.key=e}}class kC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=Pv(e),this.tu=new yo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Iy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,I)=>{const P=o.get(E),z=dc(this.query,I)?I:null,X=!!P&&this.mutatedKeys.has(P.key),K=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;P&&z?P.data.isEqual(z.data)?X!==K&&(s.track({type:3,doc:z}),B=!0):this.su(P,z)||(s.track({type:2,doc:z}),B=!0,(y&&this.eu(z,y)>0||_&&this.eu(z,_)<0)&&(m=!0)):!P&&z?(s.track({type:0,doc:z}),B=!0):P&&!z&&(s.track({type:1,doc:P}),B=!0,(y||_)&&(m=!0)),B&&(z?(h=h.add(z),u=K?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,I)=>(function(z,X){const K=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:B})}};return K(z)-K(X)})(E.type,I.type)||this.eu(E.doc,I.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new Ao(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new lw(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new aw(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Dd="SyncEngine";class NC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class DC{constructor(e){this.key=e,this.hu=!1}}class VC{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new _s((m=>Cv(m)),fc),this.Iu=new Map,this.Eu=new Set,this.du=new et(ce.comparator),this.Au=new Map,this.Ru=new wd,this.Vu={},this.mu=new Map,this.fu=So.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OC(r,e,t=!0){const s=pw(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await uw(s,e,t,!0),o}async function xC(r,e){const t=pw(r);await uw(t,e,!0,!1)}async function uw(r,e,t,s){const o=await YR(r.localStore,rr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await MC(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&tw(r.remoteStore,o),m}async function MC(r,e,t,s,o){r.pu=(I,P,z)=>(async function(K,B,Z,ie){let de=B.view.ru(Z);de.Cs&&(de=await yy(K.localStore,B.query,!1).then((({documents:k})=>B.view.ru(k,de))));const Ee=ie&&ie.targetChanges.get(B.targetId),Ue=ie&&ie.targetMismatches.get(B.targetId)!=null,Se=B.view.applyChanges(de,K.isPrimaryClient,Ee,Ue);return Cy(K,B.targetId,Se.au),Se.snapshot})(r,I,P,z);const u=await yy(r.localStore,e,!0),h=new kC(e,u.Qs),m=h.ru(u.documents),y=Ja.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,y);Cy(r,t,_.au);const E=new NC(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function LC(r,e,t){const s=we(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!fc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Mf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Sd(s.remoteStore,o.targetId),Ff(s,o.targetId)})).catch(Do)):(Ff(s,o.targetId),await Mf(s.localStore,o.targetId,!0))}async function bC(r,e){const t=we(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Sd(t.remoteStore,s.targetId))}async function FC(r,e,t){const s=HC(r);try{const o=await(function(h,m){const y=we(h),_=Qe.now(),E=m.reduce(((z,X)=>z.add(X.key)),Ne());let I,P;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let X=Mr(),K=Ne();return y.Ns.getEntries(z,E).next((B=>{X=B,X.forEach(((Z,ie)=>{ie.isValidDocument()||(K=K.add(Z))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,X))).next((B=>{I=B;const Z=[];for(const ie of m){const de=XA(ie,I.get(ie.key).overlayedDocument);de!=null&&Z.push(new Ni(ie.key,de,wv(de.value.mapValue),xn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,_,Z,m)})).next((B=>{P=B;const Z=B.applyToLocalDocumentSet(I,K);return y.documentOverlayCache.saveOverlays(z,B.batchId,Z)}))})).then((()=>({batchId:P.batchId,changes:Nv(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new et(ke)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await el(s,o.changes),await vc(s.remoteStore)}catch(o){const u=kd(o,"Failed to persist write");t.reject(u)}}async function cw(r,e){const t=we(r);try{const s=await KR(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await el(t,s,e)}catch(s){await Do(s)}}function Ry(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=we(h);y.onlineState=m;let _=!1;y.queries.forEach(((E,I)=>{for(const P of I.Sa)P.va(m)&&(_=!0)})),_&&Nd(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UC(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new et(ce.comparator);h=h.insert(u,Ft.newNoDocument(u,ye.min()));const m=Ne().add(u),y=new gc(ye.min(),new Map,new et(ke),h,m);await cw(s,y),s.du=s.du.remove(u),s.Au.delete(e),Vd(s)}else await Mf(s.localStore,e,!1).then((()=>Ff(s,e,t))).catch(Do)}async function zC(r,e){const t=we(r),s=e.batch.batchId;try{const o=await GR(t.localStore,e);fw(t,s,null),hw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await el(t,o)}catch(o){await Do(o)}}async function jC(r,e,t){const s=we(r);try{const o=await(function(h,m){const y=we(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,m).next((I=>(Fe(I!==null,37113),E=I.keys(),y.mutationQueue.removeMutationBatch(_,I)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);fw(s,e,t),hw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await el(s,o)}catch(o){await Do(o)}}function hw(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function fw(r,e,t){const s=we(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Ff(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||dw(r,s)}))}function dw(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Sd(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Vd(r))}function Cy(r,e,t){for(const s of t)s instanceof aw?(r.Ru.addReference(s.key,e),BC(r,s)):s instanceof lw?(te(Dd,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||dw(r,s.key)):pe(19791,{wu:s})}function BC(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(te(Dd,"New document in limbo: "+t),r.Eu.add(s),Vd(r))}function Vd(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ce(Ke.fromString(e)),s=r.fu.next();r.Au.set(s,new DC(t)),r.du=r.du.insert(t,s),tw(r.remoteStore,new gi(rr(pd(t.path)),s,"TargetPurposeLimboResolution",lc.ce))}}async function el(r,e,t){const s=we(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const I=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,I?"current":"not-current")}if(_){o.push(_);const I=Td.As(y.targetId,_);u.push(I)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const E=we(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>j.forEach(_,(P=>j.forEach(P.Es,(z=>E.persistence.referenceDelegate.addReference(I,P.targetId,z))).next((()=>j.forEach(P.ds,(z=>E.persistence.referenceDelegate.removeReference(I,P.targetId,z)))))))))}catch(I){if(!Vo(I))throw I;te(Id,"Failed to update sequence numbers: "+I)}for(const I of _){const P=I.targetId;if(!I.fromCache){const z=E.Ms.get(P),X=z.snapshotVersion,K=z.withLastLimboFreeSnapshotVersion(X);E.Ms=E.Ms.insert(P,K)}}})(s.localStore,u))}async function $C(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){te(Dd,"User change. New user:",e.toKey());const s=await Yv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new le(H.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await el(t,s.Ls)}}function qC(r,e){const t=we(r),s=t.Au.get(e);if(s&&s.hu)return Ne().add(s.key);{let o=Ne();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function pw(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=cw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UC.bind(null,e),e.Pu.H_=RC.bind(null,e.eventManager),e.Pu.yu=CC.bind(null,e.eventManager),e}function HC(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jC.bind(null,e),e}class Zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return WR(this.persistence,new $R,e.initialUser,this.serializer)}Cu(e){return new Xv(Ed.mi,this.serializer)}Du(e){return new ZR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zu.provider={build:()=>new Zu};class WC extends Zu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof Yu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new PR(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Xv((s=>Yu.mi(s,t)),this.serializer)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ry(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$C.bind(null,this.syncEngine),await EC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new IC})()}createDatastore(e){const t=yc(e.databaseInfo.databaseId),s=(function(u){return new iC(u)})(e.databaseInfo);return(function(u,h,m,y){return new lC(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new cC(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ry(this.syncEngine,t,0)),(function(){return wy.v()?new wy:new eC})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,E){const I=new VC(o,u,h,m,y,_);return E&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);te(ms,"RemoteStore shutting down."),u.Ea.add(5),await Za(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Uf.provider={build:()=>new Uf};/**
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
 */class GC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Pi="FirestoreClient";class KC{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=ad.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Pi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Pi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=kd(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function df(r,e){r.asyncQueue.verifyOperationInProgress(),te(Pi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Yv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Py(r,e){r.asyncQueue.verifyOperationInProgress();const t=await QC(r);te(Pi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Ty(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Ty(e.remoteStore,o))),r._onlineComponents=e}async function QC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){te(Pi,"Using user provided OfflineComponentProvider");try{await df(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await df(r,new Zu)}}else te(Pi,"Using default OfflineComponentProvider"),await df(r,new WC(void 0));return r._offlineComponents}async function mw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(te(Pi,"Using user provided OnlineComponentProvider"),await Py(r,r._uninitializedComponentsProvider._online)):(te(Pi,"Using default OnlineComponentProvider"),await Py(r,new Uf))),r._onlineComponents}function XC(r){return mw(r).then((e=>e.syncEngine))}async function ky(r){const e=await mw(r),t=e.eventManager;return t.onListen=OC.bind(null,e.syncEngine),t.onUnlisten=LC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bC.bind(null,e.syncEngine),t}/**
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
 */function gw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ny=new Map;/**
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
 */const yw="firestore.googleapis.com",Dy=!0;class Vy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yw,this.ssl=Dy}else this.host=e.host,this.ssl=e.ssl??Dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RR)throw new le(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gw(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Z1;switch(s.type){case"firstParty":return new rA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ny.get(t);s&&(te("ComponentProvider","Removing Datastore"),Ny.delete(t),s.terminate())})(this),Promise.resolve()}}function YC(r,e,t,s={}){var _;r=wi(r,wc);const o=Co(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Gy(`https://${m}`),Ky("Firestore",!0)),u.host!==yw&&u.host!==m&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!Ti(y,h)&&(r._setSettings(y),s.mockUserToken)){let E,I;if(typeof s.mockUserToken=="string")E=s.mockUserToken,I=bt.MOCK_USER;else{E=tT(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new le(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new bt(P)}r._authCredentials=new eA(new lv(E,I))}}/**
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
 */class Ec{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ec(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xa(t,gt._jsonSchema))return new gt(e,s||null,new ce(Ke.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:ht("string",gt._jsonSchemaVersion),referencePath:ht("string")};class Ei extends Ec{constructor(e,t,s){super(e,t,pd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new ce(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function JC(r,e,...t){if(r=ft(r),uv("collection","path",e),r instanceof wc){const s=Ke.fromString(e,...t);return Hg(s),new Ei(r,null,s)}{if(!(r instanceof gt||r instanceof Ei))throw new le(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ke.fromString(e,...t));return Hg(s),new Ei(r.firestore,null,s)}}function Od(r,e,...t){if(r=ft(r),arguments.length===1&&(e=ad.newId()),uv("doc","path",e),r instanceof wc){const s=Ke.fromString(e,...t);return qg(s),new gt(r,null,new ce(s))}{if(!(r instanceof gt||r instanceof Ei))throw new le(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ke.fromString(e,...t));return qg(s),new gt(r.firestore,r instanceof Ei?r.converter:null,new ce(s))}}/**
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
 */const Oy="AsyncQueue";class xy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zv(this,"async_queue_retry"),this._c=()=>{const s=ff();s&&te(Oy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ff();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ff();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new us;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;te(Oy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",My(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Pd.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&pe(47125,{Pc:My(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function My(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Ly(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class Ro extends wc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new xy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function ZC(r,e){const t=typeof r=="object"?r:$f(),s=typeof r=="string"?r:qu,o=ys(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=ZE("firestore");u&&YC(o,...u)}return o}function _w(r){if(r._terminated)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||eP(r),r._firestoreClient}function eP(r){var s,o,u;const e=r._freezeSettings(),t=(function(m,y,_,E){return new wA(m,y,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,gw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new KC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(r._componentsProvider))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(kt.fromBase64String(e))}catch(t){throw new le(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xa(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:ht("string",_n._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Tc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xd{constructor(e){this._methodName=e}}/**
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
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(Xa(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:ht("string",sr._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class or{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xa(e,or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new or(e.vectorValues);throw new le(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}or._jsonSchemaVersion="firestore/vectorValue/1.0",or._jsonSchema={type:ht("string",or._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const tP=/^__.*__$/;class nP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}class vw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ni(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ww(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ac:r})}}class Md{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Md({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ec(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ww(this.Ac)&&tP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class rP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||yc(e)}Cc(e,t,s,o=!1){return new Md({Ac:e,methodName:t,Dc:s,path:Pt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ew(r){const e=r._freezeSettings(),t=yc(r._databaseId);return new rP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function iP(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);Ld("Data must be an object, but it was:",h,s);const m=Tw(s,h);let y,_;if(u.merge)y=new ln(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const I of u.mergeFields){const P=zf(e,I,t);if(!h.contains(P))throw new le(H.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Sw(E,P)||E.push(P)}y=new ln(E),_=h.fieldTransforms.filter((I=>y.covers(I.field)))}else y=null,_=h.fieldTransforms;return new nP(new Yt(m),y,_)}class Ic extends xd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function sP(r,e,t,s){const o=r.Cc(1,e,t);Ld("Data must be an object, but it was:",o,s);const u=[],h=Yt.empty();ki(s,((y,_)=>{const E=bd(e,y,t);_=ft(_);const I=o.yc(E);if(_ instanceof Ic)u.push(E);else{const P=Sc(_,I);P!=null&&(u.push(E),h.set(E,P))}}));const m=new ln(u);return new vw(h,m,o.fieldTransforms)}function oP(r,e,t,s,o,u){const h=r.Cc(1,e,t),m=[zf(e,s,t)],y=[o];if(u.length%2!=0)throw new le(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let P=0;P<u.length;P+=2)m.push(zf(e,u[P])),y.push(u[P+1]);const _=[],E=Yt.empty();for(let P=m.length-1;P>=0;--P)if(!Sw(_,m[P])){const z=m[P];let X=y[P];X=ft(X);const K=h.yc(z);if(X instanceof Ic)_.push(z);else{const B=Sc(X,K);B!=null&&(_.push(z),E.set(z,B))}}const I=new ln(_);return new vw(E,I,h.fieldTransforms)}function Sc(r,e){if(Iw(r=ft(r)))return Ld("Unsupported field value:",e,r),Tw(r,e);if(r instanceof xd)return(function(s,o){if(!ww(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Sc(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=ft(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:Xu(o.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xu(o.serializer,u)}}if(s instanceof sr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:Bv(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:vd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof or)return(function(h,m){return{mapValue:{fields:{[_v]:{stringValue:vv},[Hu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return md(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${ld(s)}`)})(r,e)}function Tw(r,e){const t={};return fv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(r,((s,o)=>{const u=Sc(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Iw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof sr||r instanceof _n||r instanceof gt||r instanceof xd||r instanceof or)}function Ld(r,e,t){if(!Iw(t)||!cv(t)){const s=ld(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function zf(r,e,t){if((e=ft(e))instanceof Tc)return e._internalPath;if(typeof e=="string")return bd(r,e);throw ec("Field path arguments must be of type string or ",r,!1,void 0,t)}const aP=new RegExp("[~\\*/\\[\\]]");function bd(r,e,t){if(e.search(aP)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Tc(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ec(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new le(H.INVALID_ARGUMENT,m+r+y)}function Sw(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class Aw{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lP extends Aw{data(){return super.data()}}function Rw(r,e){return typeof e=="string"?bd(r,e):e instanceof Tc?e._internalPath:e._delegate._internalPath}/**
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
 */function uP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new le(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cP{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ki(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Hu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ot(h.doubleValue)));return new or(t)}convertGeoPoint(e){return new sr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=cc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const t=Si(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe(Kv(s),9688,{name:e});const o=new Ba(s.get(1),s.get(3)),u=new ce(s.popFirst(5));return o.isEqual(t)||xr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function hP(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Da{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends Aw{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:ht("string",cs._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Vu extends cs{data(e={}){return super.data(e)}}class _o{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Da(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Vu(this._firestore,this._userDataWriter,s.key,s,new Da(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Vu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Da(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Vu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Da(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:fP(m.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ad.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:r})}}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:ht("string",_o._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class Cw extends cP{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function dP(r,e,t,...s){r=wi(r,gt);const o=wi(r.firestore,Ro),u=Ew(o);let h;return h=typeof(e=ft(e))=="string"||e instanceof Tc?oP(u,"updateDoc",r._key,e,t,s):sP(u,"updateDoc",r._key,e),Fd(o,[h.toMutation(r._key,xn.exists(!0))])}function pP(r){return Fd(wi(r.firestore,Ro),[new gd(r._key,xn.none())])}function mP(r,e){const t=wi(r.firestore,Ro),s=Od(r),o=hP(r.converter,e);return Fd(t,[iP(Ew(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,xn.exists(!1))]).then((()=>s))}function gP(r,...e){var y,_,E;r=ft(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Ly(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ly(e[s])){const I=e[s];e[s]=(y=I.next)==null?void 0:y.bind(I),e[s+1]=(_=I.error)==null?void 0:_.bind(I),e[s+2]=(E=I.complete)==null?void 0:E.bind(I)}let u,h,m;if(r instanceof gt)h=wi(r.firestore,Ro),m=pd(r._key.path),u={next:I=>{e[s]&&e[s](yP(h,r,I))},error:e[s+1],complete:e[s+2]};else{const I=wi(r,Ec);h=wi(I.firestore,Ro),m=I._query;const P=new Cw(h);u={next:z=>{e[s]&&e[s](new _o(h,P,I,z))},error:e[s+1],complete:e[s+2]},uP(r._query)}return(function(P,z,X,K){const B=new GC(K),Z=new PC(z,B,X);return P.asyncQueue.enqueueAndForget((async()=>SC(await ky(P),Z))),()=>{B.Nu(),P.asyncQueue.enqueueAndForget((async()=>AC(await ky(P),Z)))}})(_w(h),m,o,u)}function Fd(r,e){return(function(s,o){const u=new us;return s.asyncQueue.enqueueAndForget((async()=>FC(await XC(s),o,u))),u.promise})(_w(r),e)}function yP(r,e,t){const s=t.docs.get(e._key),o=new Cw(r);return new cs(r,o,e._key,s,new Da(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){No=o})(Po),ar(new Mn("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ro(new tA(s.getProvider("auth-internal")),new iA(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new le(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(_.options.projectId,E)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),vn(zg,jg,e),vn(zg,jg,"esm2020")})();const _P={apiKey:"AIzaSyAOkv2m83bRjvZuCVchdaQCMi7mGV7honY",authDomain:"wachtlist-maker.firebaseapp.com",projectId:"wachtlist-maker",storageBucket:"wachtlist-maker.firebasestorage.app",messagingSenderId:"441770745880",appId:"1:441770745880:web:ef58b31da2d0238415e36d",measurementId:"G-9PE7CJGMDK"},Ud=t_(_P),zd=ZC(Ud),jf=PS(Ud),vP=new kr;typeof window<"u"&&K1(Ud);function by({filter:r,setFilter:e,sort:t,setSort:s,user:o,onRefresh:u,refreshing:h}){return ve.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid #30363d"}},ve.createElement("div",{style:{fontSize:"1.2rem"}},"🔥 Watch Dashboard"),ve.createElement("div",{style:{display:"flex",gap:"0.6rem"}},o&&ve.createElement("button",{onClick:u,disabled:h,style:{background:"#1f6feb",border:"none",padding:"0.4rem 0.8rem",color:"#fff"}},h?"Refreshing...":"Refresh"),ve.createElement("select",{value:t,onChange:m=>s(m.target.value),style:{background:"#161b22",color:"#fff",border:"1px solid #30363d"}},ve.createElement("option",{value:"pain"},"🔥 Pain"),ve.createElement("option",{value:"eagerness"},"🔥 Eagerness"),ve.createElement("option",{value:"recent"},"🆕 Recent")),ve.createElement("select",{value:r,onChange:m=>e(m.target.value),style:{background:"#161b22",color:"#fff",border:"1px solid #30363d"}},ve.createElement("option",{value:"all"},"All"),ve.createElement("option",{value:"new"},"New"),ve.createElement("option",{value:"waiting"},"Waiting"),ve.createElement("option",{value:"ended"},"Ended")),o?ve.createElement("button",{onClick:()=>y0(jf),style:{background:"#da3633",border:"none",color:"#fff"}},"Logout"):ve.createElement("button",{onClick:()=>b0(jf,vP),style:{background:"#238636",border:"none",color:"#fff"}},"Sign in")))}const Pw="4bb9fd44f0907b5158c6a6db356c360e",kw="https://api.themoviedb.org/3";async function wP(r){return(await(await fetch(`${kw}/search/multi?api_key=${Pw}&query=${encodeURIComponent(r)}`)).json()).results.filter(s=>s.media_type==="movie"||s.media_type==="tv")}async function Fy(r,e){return(await fetch(`${kw}/${r}/${e}?api_key=${Pw}`)).json()}function EP(r){return r?`https://image.tmdb.org/t/p/w500${r}`:null}function TP({onSelect:r}){const[e,t]=Nn.useState(""),[s,o]=Nn.useState([]),u=async()=>{if(!e.trim())return;const h=await wP(e);o(h.slice(0,5))};return ve.createElement("div",{style:{padding:"1rem"}},ve.createElement("input",{value:e,onChange:h=>t(h.target.value),placeholder:"Search movie or series",style:{padding:"0.6rem",width:"60%",background:"#161b22",color:"#fff",border:"1px solid #30363d"}}),ve.createElement("button",{onClick:u,style:{marginLeft:"0.5rem",padding:"0.6rem",background:"#f97316",border:"none"}},"Search"),s.map(h=>ve.createElement("div",{key:h.id,onClick:()=>{r(h),o([]),t("")},style:{cursor:"pointer",marginTop:"0.5rem",padding:"0.5rem",background:"#0d1117",border:"1px solid #30363d"}},h.title||h.name," (",h.media_type,")")))}function IP({value:r,onChange:e}){return React.createElement("div",null,[1,2,3,4,5].map(t=>React.createElement("span",{key:t,onClick:()=>e(t),style:{fontSize:"1.2rem",cursor:"pointer",color:t<=r?"#f97316":"#444"}},"🔥")))}function SP({item:r,onRate:e,onDelete:t}){const s=r.lastDate?Math.floor((Date.now()-new Date(r.lastDate))/864e5*r.eagerness):0;return ve.createElement("div",{style:{background:"#161b22",borderRadius:"10px",overflow:"hidden",position:"relative"}},ve.createElement("button",{onClick:()=>t(r.id),style:{position:"absolute",top:"8px",right:"8px",background:"#da3633",border:"none",color:"#fff",borderRadius:"50%",width:"28px",height:"28px",cursor:"pointer"}},"✕"),ve.createElement("div",{style:{height:"260px",background:r.poster?`url(${r.poster}) center/cover`:"#0d1117"}}),ve.createElement("div",{style:{padding:"0.8rem"}},ve.createElement("h3",null,r.title),ve.createElement(IP,{value:r.eagerness,onChange:o=>e(r.id,o)}),ve.createElement("p",{style:{fontSize:"0.8rem",color:"#f97316"}},"Pain: ",s),ve.createElement("p",{style:{color:"#8b949e",fontSize:"0.85rem"}},r.lastInfo),ve.createElement("span",{style:{display:"inline-block",marginTop:"0.4rem",padding:"0.2rem 0.5rem",borderRadius:"6px",background:"#30363d",fontSize:"0.75rem"}},r.status)))}function AP(){return ve.createElement("div",{style:{textAlign:"center",marginTop:"4rem",color:"#8b949e"}},ve.createElement("p",null,"No titles yet"),ve.createElement("p",null,"Add movies or series to start tracking 🔥"))}function RP({items:r,onRate:e,onDelete:t}){return r.length?ve.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"1.2rem",padding:"1rem"}},r.map(s=>ve.createElement(SP,{key:s.id,item:s,onRate:e,onDelete:t}))):ve.createElement(AP,null)}function CP(){const[r,e]=Nn.useState(null),[t,s]=Nn.useState(!0);return Nn.useEffect(()=>g0(jf,u=>{e(u),s(!1)}),[]),{user:r,loading:t}}function Nw(r){return JC(zd,"users",r,"watchlist")}function PP(r,e){return gP(Nw(r),t=>{e(t.docs.map(s=>({id:s.id,...s.data()})))})}function kP(r,e){return mP(Nw(r),e)}function pf(r,e,t){return dP(Od(zd,"users",r,"watchlist",e),t)}function NP(r,e){return pP(Od(zd,"users",r,"watchlist",e))}function DP(){const{user:r,loading:e}=CP(),[t,s]=Nn.useState([]),[o,u]=Nn.useState("all"),[h,m]=Nn.useState("pain"),[y,_]=Nn.useState(!1);if(Nn.useEffect(()=>{if(r)return PP(r.uid,s)},[r]),e)return ve.createElement("div",{style:{padding:"2rem"}},"Loading...");if(!r)return ve.createElement(by,{filter:o,setFilter:u,sort:h,setSort:m,user:null});const E=async Z=>{const ie=await Fy(Z.media_type,Z.id);let de="Unknown",Ee=null,Ue="waiting";if(Z.media_type==="tv"){const Se=ie.last_episode_to_air;Se&&(de=`S${Se.season_number} E${Se.episode_number}`,Ee=Se.air_date),Ue=ie.status==="Ended"?"ended":"waiting"}else de=ie.release_date||"Unreleased",Ee=ie.release_date||null,Ue=ie.release_date?"released":"unreleased";await kP(r.uid,{title:Z.title||Z.name,tmdbId:Z.id,type:Z.media_type,poster:EP(ie.poster_path),lastInfo:de,lastDate:Ee,status:Ue,eagerness:3,createdAt:Date.now()})},I=async()=>{_(!0);for(const Z of t){const ie=await Fy(Z.type,Z.tmdbId);if(Z.type==="tv"){const de=ie.last_episode_to_air;if(de){const Ee=`S${de.season_number} E${de.episode_number}`;Ee!==Z.lastInfo&&await pf(r.uid,Z.id,{lastInfo:Ee,lastDate:de.air_date,status:"new",updatedAt:Date.now()})}}else ie.release_date&&ie.release_date!==Z.lastDate&&await pf(r.uid,Z.id,{lastInfo:ie.release_date,lastDate:ie.release_date,status:"new",updatedAt:Date.now()})}_(!1)},P=(Z,ie)=>pf(r.uid,Z,{eagerness:ie}),z=Z=>NP(r.uid,Z),X=t.filter(Z=>o==="all"?!0:Z.status===o),K=Z=>Z.lastDate?Math.floor((Date.now()-new Date(Z.lastDate))/(1e3*60*60*24)*Z.eagerness):0,B=[...X].sort((Z,ie)=>h==="pain"?K(ie)-K(Z):h==="eagerness"?ie.eagerness-Z.eagerness:(ie.updatedAt||0)-(Z.updatedAt||0));return ve.createElement(ve.Fragment,null,ve.createElement(by,{filter:o,setFilter:u,sort:h,setSort:m,user:r,onRefresh:I,refreshing:y}),ve.createElement(TP,{onSelect:E}),ve.createElement(RP,{items:B,onRate:P,onDelete:z}))}qE.createRoot(document.getElementById("root")).render(ve.createElement(ve.StrictMode,null,ve.createElement(DP,null)));
