import{i as d,j as E,g as w,r as F,p as J,m as V,A as I,s as k,a as _}from"./@remix-run.78edb8eb.js";import{R as S,r as s}from"./react.7518b171.js";import{j as p,a as N,F as $}from"./@mui.fb0b0803.js";/**
 * React Router v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function G(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const W=typeof Object.is=="function"?Object.is:G,{useState:X,useEffect:Y,useLayoutEffect:q,useDebugValue:z}=S;function K(e,t,n){const r=t(),[{inst:o},a]=X({inst:{value:r,getSnapshot:t}});return q(()=>{o.value=r,o.getSnapshot=t,b(o)&&a({inst:o})},[e,r,t]),Y(()=>(b(o)&&a({inst:o}),e(()=>{b(o)&&a({inst:o})})),[e]),z(r),r}function b(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!W(n,r)}catch{return!0}}function Q(e,t,n){return t()}const Z=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H=!Z,A=H?Q:K;"useSyncExternalStore"in S&&(e=>e.useSyncExternalStore)(S);const ee=s.exports.createContext(null),te=s.exports.createContext(null),B=s.exports.createContext(null),R=s.exports.createContext(null),P=s.exports.createContext(null),v=s.exports.createContext({outlet:null,matches:[]}),T=s.exports.createContext(null);function me(e,t){let{relative:n}=t===void 0?{}:t;m()||d(!1);let{basename:r,navigator:o}=s.exports.useContext(R),{hash:a,pathname:l,search:i}=ae(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:E([r,l])),o.createHref({pathname:u,search:i,hash:a})}function m(){return s.exports.useContext(P)!=null}function U(){return m()||d(!1),s.exports.useContext(P).location}function re(){m()||d(!1);let{basename:e,navigator:t}=s.exports.useContext(R),{matches:n}=s.exports.useContext(v),{pathname:r}=U(),o=JSON.stringify(w(n).map(i=>i.pathnameBase)),a=s.exports.useRef(!1);return s.exports.useEffect(()=>{a.current=!0}),s.exports.useCallback(function(i,u){if(u===void 0&&(u={}),!a.current)return;if(typeof i=="number"){t.go(i);return}let c=F(i,JSON.parse(o),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:E([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,o,r])}const ne=s.exports.createContext(null);function oe(e){let t=s.exports.useContext(v).outlet;return t&&p(ne.Provider,{value:e,children:t})}function ae(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=s.exports.useContext(v),{pathname:o}=U(),a=JSON.stringify(w(r).map(l=>l.pathnameBase));return s.exports.useMemo(()=>F(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function se(e,t){m()||d(!1);let{navigator:n}=s.exports.useContext(R),r=s.exports.useContext(B),{matches:o}=s.exports.useContext(v),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let i=a?a.pathnameBase:"/";a&&a.route;let u=U(),c;if(t){var f;let h=typeof t=="string"?J(t):t;i==="/"||((f=h.pathname)==null?void 0:f.startsWith(i))||d(!1),c=h}else c=u;let g=c.pathname||"/",y=i==="/"?g:g.slice(i.length)||"/",C=V(e,{pathname:y}),x=ce(C&&C.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:E([i,n.encodeLocation?n.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?i:E([i,n.encodeLocation?n.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),o,r||void 0);return t&&x?p(P.Provider,{value:{location:D({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:I.Pop},children:x}):x}function le(){let e=de(),t=_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r};return N($,{children:[p("h2",{children:"Unhandled Thrown Error!"}),p("h3",{style:{fontStyle:"italic"},children:t}),n?p("pre",{style:o,children:n}):null,p("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),N("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",p("code",{style:a,children:"errorElement"})," props on\xA0",p("code",{style:a,children:"<Route>"})]})]})}class ie extends s.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?p(T.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function ue(e){let{routeContext:t,match:n,children:r}=e,o=s.exports.useContext(ee);return o&&n.route.errorElement&&(o._deepestRenderedBoundaryId=n.route.id),p(v.Provider,{value:t,children:r})}function ce(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let a=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||d(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,i)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,c=n?l.route.errorElement||p(le,{}):null,f=()=>p(ue,{match:l,routeContext:{outlet:a,matches:t.concat(r.slice(0,i+1))},children:u?c:l.route.element!==void 0?l.route.element:a});return n&&(l.route.errorElement||i===0)?p(ie,{location:n.location,component:c,error:u,children:f()}):f()},null)}var L;(function(e){e.UseRevalidator="useRevalidator"})(L||(L={}));var O;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(O||(O={}));function pe(e){let t=s.exports.useContext(B);return t||d(!1),t}function de(){var e;let t=s.exports.useContext(T),n=pe(O.UseRouteError),r=s.exports.useContext(v),o=r.matches[r.matches.length-1];return t||(r||d(!1),o.route.id||d(!1),(e=n.errors)==null?void 0:e[o.route.id])}function ge(e){let{to:t,replace:n,state:r,relative:o}=e;m()||d(!1);let a=s.exports.useContext(B),l=re();return s.exports.useEffect(()=>{a&&a.navigation.state!=="idle"||l(t,{replace:n,state:r,relative:o})}),null}function Ce(e){return oe(e.context)}function he(e){d(!1)}function ye(e){let{basename:t="/",children:n=null,location:r,navigationType:o=I.Pop,navigator:a,static:l=!1}=e;m()&&d(!1);let i=t.replace(/^\/*/,"/"),u=s.exports.useMemo(()=>({basename:i,navigator:a,static:l}),[i,a,l]);typeof r=="string"&&(r=J(r));let{pathname:c="/",search:f="",hash:g="",state:y=null,key:C="default"}=r,x=s.exports.useMemo(()=>{let h=k(c,i);return h==null?null:{pathname:h,search:f,hash:g,state:y,key:C}},[i,c,f,g,y,C]);return x==null?null:p(R.Provider,{value:u,children:p(P.Provider,{children:n,value:{location:x,navigationType:o}})})}function Ee(e){let{children:t,location:n}=e,r=s.exports.useContext(te),o=r&&!t?r.router.routes:j(t);return se(o,n)}var M;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(M||(M={}));new Promise(()=>{});function j(e,t){t===void 0&&(t=[]);let n=[];return s.exports.Children.forEach(e,(r,o)=>{if(!s.exports.isValidElement(r))return;if(r.type===s.exports.Fragment){n.push.apply(n,j(r.props.children,t));return}r.type!==he&&d(!1),!r.props.index||!r.props.children||d(!1);let a=[...t,o],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=j(r.props.children,a)),n.push(l)}),n}export{ge as N,Ce as O,ye as R,re as a,U as b,ae as c,Ee as d,he as e,me as u};
