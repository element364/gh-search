import{r as B,P as F,j as M,b as Y,p as g,q as D,_ as T,u as R,n as Q}from"./q-DiPDvItd.js";const ft=g("qc-s"),ht=g("qc-c"),ut=g("qc-ic"),dt=g("qc-h"),x=g("qc-l"),z=g("qc-n"),yt=g("qc-a"),gt=g("qc-ir"),mt=D(()=>T(()=>import("./q-fJkQnue_.js"),__vite__mapDeps([])),"s_DyVc0YBIqQU"),Ct=()=>{},Et=Q(D(()=>T(()=>import("./q-Cb36KTa8.js"),__vite__mapDeps([])),"s_e0ssiDXoeAM")),v=new WeakMap,E=new Map,N=new Set,G="qaction",_t="qfunc",S=t=>t.pathname+t.search+t.hash,C=(t,e)=>new URL(t,e.href),J=(t,e)=>t.origin===e.origin,b=t=>t.endsWith("/")?t:t+"/",U=({pathname:t},{pathname:e})=>{const n=Math.abs(t.length-e.length);return n===0?t===e:n===1&&b(t)===b(e)},X=(t,e)=>t.search===e.search,P=(t,e)=>X(t,e)&&U(t,e),$=(t,e,n)=>{let s=e??"";return n&&(s+=(s?"&":"?")+G+"="+encodeURIComponent(n.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+s},St=(t,e)=>{const n=t.href;if(typeof n=="string"&&typeof t.target!="string"&&!t.reload)try{const s=C(n.trim(),e.url),r=C("",e.url);if(J(s,r))return S(s)}catch(s){console.error(s)}else if(t.reload)return S(C("",e.url));return null},At=(t,e)=>{if(t){const n=C(t,e.url),s=C("",e.url);return!P(n,s)}return!1},wt=(t,e)=>{if(t){const n=C(t,e.url),s=C("",e.url);return!U(n,s)}return!1},Z=t=>t&&typeof t.then=="function",Dt=(t,e,n,s)=>{const r=p(),c={head:r,withLocale:i=>R(s,i),resolveValue:i=>{const a=i.__id;if(i.__brand==="server_loader"&&!(a in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[a];if(Z(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...e};for(let i=n.length-1;i>=0;i--){const a=n[i]&&n[i].head;a&&(typeof a=="function"?k(r,R(s,()=>a(c))):typeof a=="object"&&k(r,a))}return c.head},k=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),_(t.meta,e.meta),_(t.links,e.links),_(t.styles,e.styles),_(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},_=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(r=>r.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},p=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function tt(t,e){const n=W(t),s=I(t),r=W(e),o=I(e);return H(t,n,s,e,r,o)}function H(t,e,n,s,r,o){let c=null;for(;e<n;){const i=t.charCodeAt(e++),a=s.charCodeAt(r++);if(i===91){const l=K(t,e),f=e+(l?3:0),d=w(t,f,n,93),h=t.substring(f,d),u=w(t,d+1,n,47),y=t.substring(d+1,u);e=d+1;const m=r-1;if(l){const q=nt(h,y,s,m,o,t,e+y.length+1,n);if(q)return Object.assign(c||(c={}),q)}const A=w(s,m,o,47,y);if(A==-1)return null;const O=s.substring(m,A);if(!l&&!y&&!O)return null;r=A,(c||(c={}))[h]=decodeURIComponent(O)}else if(i!==a&&!(isNaN(a)&&et(t,e)))return null}return L(t,e)&&L(s,r)?c||{}:null}function et(t,e){return t.charCodeAt(e)===91&&K(t,e+1)}function I(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function L(t,e){const n=t.length;return e>=n||e==n-1&&t.charCodeAt(e)===47}function W(t){return t.charCodeAt(0)===47?1:0}function K(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function w(t,e,n,s,r=""){for(;e<n&&t.charCodeAt(e)!==s;)e++;const o=r.length;for(let c=0;c<o;c++)if(t.charCodeAt(e-o+c)!==r.charCodeAt(c))return-1;return e-o}let j;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(j||(j={}));function nt(t,e,n,s,r,o,c,i){n.charCodeAt(s)===47&&s++;let a=r;const l=e+"/";let f=5;for(;a>=s&&f--;){const d=H(o,c,i,n,a,r);if(d){let h=n.substring(s,Math.min(a,r));return h.endsWith(l)&&(h=h.substring(0,h.length-l.length)),d[t]=decodeURIComponent(h),d}a=st(n,s,l,a,s-1)+l.length}return null}function st(t,e,n,s,r){let o=t.lastIndexOf(n,s);return o==s-n.length&&(o=t.lastIndexOf(n,s-n.length-1)),o>e?o:r}const Tt=async(t,e,n,s)=>{if(Array.isArray(t))for(const r of t){const o=r[0],c=tt(o,s);if(c){const i=r[1],a=r[3],l=new Array(i.length),f=[],d=rt(e,s);let h;return i.forEach((u,y)=>{V(u,f,m=>l[y]=m,n)}),V(d,f,u=>h=u==null?void 0:u.default,n),f.length>0&&await Promise.all(f),[o,c,l,h,a]}}return null},V=(t,e,n,s)=>{if(typeof t=="function"){const r=v.get(t);if(r)n(r);else{const o=t();typeof o.then=="function"?e.push(o.then(c=>{s!==!1&&v.set(t,c),n(c)})):o&&n(o)}}},rt=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const n=t.find(s=>s[0]===e||e.startsWith(s[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},Pt=(t,e,n,s,r=!1)=>{if(e!=="popstate"){const o=P(n,s),c=n.hash===s.hash;if(!o||!c){const i={_qCityScroll:ot()};r?t.history.replaceState(i,"",S(s)):t.history.pushState(i,"",S(s))}}},ot=()=>({x:0,y:0,w:0,h:0}),ct=t=>{t=t.endsWith("/")?t:t+"/",N.has(t)||(N.add(t),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[t]}})))},Ot=async(t,e,n)=>{const s=t.pathname,r=t.search,o=$(s,r,n==null?void 0:n.action);let c;n!=null&&n.action||(c=E.get(o)),(n==null?void 0:n.prefetchSymbols)!==!1&&ct(s);let i;if(!c){const a=it(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),c=fetch(o,a).then(l=>{const f=new URL(l.url),d=f.pathname.endsWith("/q-data.json");if(f.origin!==location.origin||!d){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(h=>{const u=B(h,e);if(!u){location.href=t.href;return}if(n!=null&&n.clearCache&&E.delete(o),u.redirect)location.href=u.redirect;else if(n!=null&&n.action){const{action:y}=n,m=u.loaders[y.id];i=()=>{y.resolve({status:l.status,result:m})}}return u});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=t.href)}),n!=null&&n.action||E.set(o,c)}return c.then(a=>(a||E.delete(o),i&&i(),a))},it=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},qt=()=>F(x),Rt=()=>F(z),vt=()=>M(Y("qwikcity")),Nt=(t,e,n,s)=>{t==="popstate"&&s?window.scrollTo(s.x,s.y):(t==="link"||t==="form")&&(at(e,n)||window.scrollTo(0,0))},at=(t,e)=>{const n=t.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&t.hash&&P(t,e))},bt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),kt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},It=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},Lt=Q(D(()=>T(()=>import("./q-CHuKMHjp.js"),__vite__mapDeps([])),"s_TxCFOy819ag"));function Wt(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const jt=async function*(t,e,n){const s=t.getReader();try{let r="";const o=new TextDecoder;for(;!(n!=null&&n.aborted);){const c=await s.read();if(c.done)break;r+=o.decode(c.value,{stream:!0});const i=r.split(/\n/);r=i.pop();for(const a of i)yield await B(a,e)}}finally{s.releaseLock()}};export{Pt as A,Wt as B,ht as C,dt as D,Ct as E,Et as F,_t as G,jt as H,Lt as Q,x as R,qt as a,wt as b,p as c,ut as d,z as e,ft as f,St as g,yt as h,gt as i,J as j,P as k,Ot as l,kt as m,Tt as n,vt as o,ct as p,U as q,Nt as r,At as s,C as t,Rt as u,Dt as v,E as w,It as x,bt as y,mt as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
