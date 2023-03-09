import{r as ue}from"./react-dom.b5279d39.js";import{r as a,a as Y}from"./react.7518b171.js";import{h as ne}from"./hoist-non-react-statics.7be3bd10.js";import{r as ge}from"./react-is.6846a120.js";import{a as ce,_ as ie,g as me}from"./@babel.224e06a3.js";import{w as Pe,s as Re}from"./use-sync-external-store.b4e9cc8d.js";import{j as I}from"./@mui.b31b116c.js";function Me(e){e()}let ae=Me;const Oe=e=>ae=e,Ne=()=>ae,y=a.exports.createContext(null);function le(){return a.exports.useContext(y)}const fe=()=>{throw new Error("uSES not initialized!")};let de=fe;const ve=e=>{de=e},Fe=(e,t)=>e===t;function pe(e=y){const t=e===y?le:()=>a.exports.useContext(e);return function(o,s=Fe){const{store:n,subscription:l,getServerState:c}=t(),i=de(l.addNestedSub,n.getState,c||n.getState,o,s);return a.exports.useDebugValue(i),i}}const Ee=pe(),_e=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function ke(e,t,r,o,{areStatesEqual:s,areOwnPropsEqual:n,areStatePropsEqual:l}){let c=!1,i,u,f,d,p;function N(x,b){return i=x,u=b,f=e(i,u),d=t(o,u),p=r(f,d,u),c=!0,p}function M(){return f=e(i,u),t.dependsOnOwnProps&&(d=t(o,u)),p=r(f,d,u),p}function U(){return e.dependsOnOwnProps&&(f=e(i,u)),t.dependsOnOwnProps&&(d=t(o,u)),p=r(f,d,u),p}function S(){const x=e(i,u),b=!l(x,f);return f=x,b&&(p=r(f,d,u)),p}function O(x,b){const m=!n(b,u),V=!s(x,i,b,u);return i=x,u=b,m&&V?M():m?U():V?S():p}return function(b,m){return c?O(b,m):N(b,m)}}function Ue(e,t){let{initMapStateToProps:r,initMapDispatchToProps:o,initMergeProps:s}=t,n=ce(t,_e);const l=r(e,n),c=o(e,n),i=s(e,n);return ke(l,c,i,e,n)}function $e(e,t){const r={};for(const o in e){const s=e[o];typeof s=="function"&&(r[o]=(...n)=>t(s(...n)))}return r}function G(e){return function(r){const o=e(r);function s(){return o}return s.dependsOnOwnProps=!1,s}}function re(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):e.length!==1}function Se(e,t){return function(o,{displayName:s}){const n=function(c,i){return n.dependsOnOwnProps?n.mapToProps(c,i):n.mapToProps(c,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(c,i){n.mapToProps=e,n.dependsOnOwnProps=re(e);let u=n(c,i);return typeof u=="function"&&(n.mapToProps=u,n.dependsOnOwnProps=re(u),u=n(c,i)),u},n}}function J(e,t){return(r,o)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`)}}function Be(e){return e&&typeof e=="object"?G(t=>$e(e,t)):e?typeof e=="function"?Se(e):J(e,"mapDispatchToProps"):G(t=>({dispatch:t}))}function Ie(e){return e?typeof e=="function"?Se(e):J(e,"mapStateToProps"):G(()=>({}))}function Le(e,t,r){return ie({},r,e,t)}function Ae(e){return function(r,{displayName:o,areMergedPropsEqual:s}){let n=!1,l;return function(i,u,f){const d=e(i,u,f);return n?s(d,l)||(l=d):(n=!0,l=d),l}}}function Ve(e){return e?typeof e=="function"?Ae(e):J(e,"mergeProps"):()=>Le}function We(){const e=Ne();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let o=t;for(;o;)o.callback(),o=o.next})},get(){let o=[],s=t;for(;s;)o.push(s),s=s.next;return o},subscribe(o){let s=!0,n=r={callback:o,next:null,prev:r};return n.prev?n.prev.next=n:t=n,function(){!s||t===null||(s=!1,n.next?n.next.prev=n.prev:r=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}const oe={notify(){},get:()=>[]};function xe(e,t){let r,o=oe;function s(d){return i(),o.subscribe(d)}function n(){o.notify()}function l(){f.onStateChange&&f.onStateChange()}function c(){return Boolean(r)}function i(){r||(r=t?t.addNestedSub(l):e.subscribe(l),o=We())}function u(){r&&(r(),r=void 0,o.clear(),o=oe)}const f={addNestedSub:s,notifyNestedSubs:n,handleChangeWrapper:l,isSubscribed:c,trySubscribe:i,tryUnsubscribe:u,getListeners:()=>o};return f}const qe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A=qe?a.exports.useLayoutEffect:a.exports.useEffect;function se(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function L(e,t){if(se(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(let s=0;s<r.length;s++)if(!Object.prototype.hasOwnProperty.call(t,r[s])||!se(e[r[s]],t[r[s]]))return!1;return!0}const ze=["reactReduxForwardedRef"];let be=fe;const He=e=>{be=e},Te=[null,null];function je(e,t,r){A(()=>e(...t),r)}function De(e,t,r,o,s,n){e.current=o,r.current=!1,s.current&&(s.current=null,n())}function Ye(e,t,r,o,s,n,l,c,i,u,f){if(!e)return()=>{};let d=!1,p=null;const N=()=>{if(d||!c.current)return;const U=t.getState();let S,O;try{S=o(U,s.current)}catch(x){O=x,p=x}O||(p=null),S===n.current?l.current||u():(n.current=S,i.current=S,l.current=!0,f())};return r.onStateChange=N,r.trySubscribe(),N(),()=>{if(d=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}function Ge(e,t){return e===t}function Je(e,t,r,{pure:o,areStatesEqual:s=Ge,areOwnPropsEqual:n=L,areStatePropsEqual:l=L,areMergedPropsEqual:c=L,forwardRef:i=!1,context:u=y}={}){const f=u,d=Ie(e),p=Be(t),N=Ve(r),M=Boolean(e);return S=>{const O=S.displayName||S.name||"Component",x=`Connect(${O})`,b={shouldHandleStateChanges:M,displayName:x,wrappedComponentName:O,WrappedComponent:S,initMapStateToProps:d,initMapDispatchToProps:p,initMergeProps:N,areStatesEqual:s,areStatePropsEqual:l,areOwnPropsEqual:n,areMergedPropsEqual:c};function m(C){const[w,W,P]=a.exports.useMemo(()=>{const{reactReduxForwardedRef:h}=C,k=ce(C,ze);return[C.context,h,k]},[C]),v=a.exports.useMemo(()=>w&&w.Consumer&&ge.exports.isContextConsumer(Y.createElement(w.Consumer,null))?w:f,[w,f]),g=a.exports.useContext(v),F=Boolean(C.store)&&Boolean(C.store.getState)&&Boolean(C.store.dispatch),Ce=Boolean(g)&&Boolean(g.store),R=F?C.store:g.store,Q=Ce?g.getServerState:R.getState,q=a.exports.useMemo(()=>Ue(R.dispatch,b),[R]),[E,X]=a.exports.useMemo(()=>{if(!M)return Te;const h=xe(R,F?void 0:g.subscription),k=h.notifyNestedSubs.bind(h);return[h,k]},[R,F,g]),Z=a.exports.useMemo(()=>F?g:ie({},g,{subscription:E}),[F,g,E]),z=a.exports.useRef(),H=a.exports.useRef(P),_=a.exports.useRef(),ee=a.exports.useRef(!1);a.exports.useRef(!1);const T=a.exports.useRef(!1),j=a.exports.useRef();A(()=>(T.current=!0,()=>{T.current=!1}),[]);const te=a.exports.useMemo(()=>()=>_.current&&P===H.current?_.current:q(R.getState(),P),[R,P]),we=a.exports.useMemo(()=>k=>E?Ye(M,R,E,q,H,z,ee,T,_,X,k):()=>{},[E]);je(De,[H,z,ee,P,_,X]);let B;try{B=be(we,te,Q?()=>q(Q(),P):te)}catch(h){throw j.current&&(h.message+=`
The error may be correlated with this previous error:
${j.current.stack}

`),h}A(()=>{j.current=void 0,_.current=void 0,z.current=B});const D=a.exports.useMemo(()=>I(S,{...B,ref:W}),[W,S,B]);return a.exports.useMemo(()=>M?I(v.Provider,{value:Z,children:D}):D,[v,D,Z])}const $=Y.memo(m);if($.WrappedComponent=S,$.displayName=m.displayName=x,i){const w=Y.forwardRef(function(P,v){return I($,{...P,reactReduxForwardedRef:v})});return w.displayName=x,w.WrappedComponent=S,ne(w,S)}return ne($,S)}}function Ke({store:e,context:t,children:r,serverState:o}){const s=a.exports.useMemo(()=>{const c=xe(e);return{store:e,subscription:c,getServerState:o?()=>o:void 0}},[e,o]),n=a.exports.useMemo(()=>e.getState(),[e]);return A(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),n!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,n]),I((t||y).Provider,{value:s,children:r})}function K(e=y){const t=e===y?le:()=>a.exports.useContext(e);return function(){const{store:o}=t();return o}}const he=K();function ye(e=y){const t=e===y?he:K(e);return function(){return t().dispatch}}const Qe=ye();ve(Pe.exports.useSyncExternalStoreWithSelector);He(Re.exports.useSyncExternalStore);Oe(ue.exports.unstable_batchedUpdates);const Xe=Object.freeze(Object.defineProperty({__proto__:null,batch:ue.exports.unstable_batchedUpdates,Provider:Ke,ReactReduxContext:y,connect:Je,useDispatch:Qe,createDispatchHook:ye,useSelector:Ee,createSelectorHook:pe,useStore:he,createStoreHook:K,shallowEqual:L},Symbol.toStringTag,{value:"Module"})),ct=me(Xe);export{Ke as P,Ee as a,he as b,ct as r,L as s,Qe as u};