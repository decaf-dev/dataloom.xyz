import{t as K,a as S}from"../chunks/DrZHthgj.js";import{i as G,b as J,l as C,h as g,m as W,P as $,t as w,Z as j,_ as aa,a0 as L,s as R,c as N,Q as ea,a1 as Q,a as V,a2 as ra,a3 as D,U as Y,M as O,a4 as sa,a5 as ta,a6 as U,a7 as na,a8 as ia,T as la,a9 as fa,d as ua,aa as va,ab as oa,k as ca,K as _a,ac as da,ad as pa,y as ha,A as ga,B as ya,C as T,D as A,z as ma}from"../chunks/DYrshFmo.js";import{s as ba}from"../chunks/62bH-w33.js";import{s as xa}from"../chunks/BNnjvUoh.js";import{p as Ea}from"../chunks/BO-I5tFc.js";function Aa(e,a,r,s){for(var n=[],l=a.length,f=0;f<l;f++)ia(a[f].e,n,!0);var p=l>0&&n.length===0&&r!==null;if(p){var _=r.parentNode;la(_),_.append(r),s.clear(),b(e,a[0].prev,a[l-1].next)}fa(n,()=>{for(var c=0;c<l;c++){var t=a[c];p||(s.delete(t.k),b(e,t.prev,t.next)),ua(t.e,!p)}})}function Na(e,a,r,s,n,l=null){var f=e,p={flags:a,items:new Map,first:null};{var _=e;f=g?C(W(_)):_.appendChild(G())}g&&$();var c=null,t=!1,d=j(()=>{var i=r();return _a(i)?i:i==null?[]:Y(i)});J(()=>{var i=w(d),u=i.length;if(t&&u===0)return;t=u===0;let v=!1;if(g){var E=f.data===aa;E!==(u===0)&&(f=L(),C(f),R(!1),v=!0)}if(g){for(var y=null,o,h=0;h<u;h++){if(N.nodeType===8&&N.data===ea){f=N,v=!0,R(!1);break}var I=i[h],x=s(I,h);o=z(N,p,y,null,I,x,h,n,a,r),p.items.set(x,o),y=o}u>0&&C(L())}g||Ta(i,p,f,n,a,s,r),l!==null&&(u===0?c?Q(c):c=V(()=>l(f)):c!==null&&ra(c,()=>{c=null})),v&&R(!0),w(d)}),g&&(f=N)}function Ta(e,a,r,s,n,l,f){var p=e.length,_=a.items,c=a.first,t=c,d,i=null,u=[],v=[],E,y,o,h;for(h=0;h<p;h+=1){if(E=e[h],y=l(E,h),o=_.get(y),o===void 0){var I=t?t.e.nodes_start:r;i=z(I,a,i,i===null?a.first:i.next,E,y,h,s,n,f),_.set(y,i),u=[],v=[],t=i.next;continue}if(wa(o,E,h),o.e.f&D&&Q(o.e),o!==t){if(d!==void 0&&d.has(o)){if(u.length<v.length){var x=v[0],m;i=x.prev;var H=u[0],k=u[u.length-1];for(m=0;m<u.length;m+=1)q(u[m],x,r);for(m=0;m<v.length;m+=1)d.delete(v[m]);b(a,H.prev,k.next),b(a,i,H),b(a,k,x),t=x,i=k,h-=1,u=[],v=[]}else d.delete(o),q(o,t,r),b(a,o.prev,o.next),b(a,o,i===null?a.first:i.next),b(a,i,o),i=o;continue}for(u=[],v=[];t!==null&&t.k!==y;)t.e.f&D||(d??(d=new Set)).add(t),v.push(t),t=t.next;if(t===null)continue;o=t}u.push(o),i=o,t=o.next}if(t!==null||d!==void 0){for(var M=d===void 0?[]:Y(d);t!==null;)t.e.f&D||M.push(t),t=t.next;var Z=M.length;if(Z>0){var F=p===0?r:null;Aa(a,M,F,_)}}O.first=a.first&&a.first.e,O.last=i&&i.e}function wa(e,a,r,s){sa(e.v,a),e.i=r}function z(e,a,r,s,n,l,f,p,_,c){var t=(_&va)!==0,d=(_&oa)===0,i=t?d?ta(n):U(n):n,u=_&na?U(f):f,v={i:u,v:i,k:l,a:null,e:null,prev:r,next:s};try{return v.e=V(()=>p(e,i,u,c),g),v.e.prev=r&&r.e,v.e.next=s&&s.e,r===null?a.first=v:(r.next=v,r.e.next=v.e),s!==null&&(s.prev=v,s.e.prev=v.e),v}finally{}}function q(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,n=a?a.e.nodes_start:r,l=e.e.nodes_start;l!==s;){var f=ca(l);n.before(l),l=f}}function b(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function P(e){var a,r,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(a=0;a<n;a++)e[a]&&(r=P(e[a]))&&(s&&(s+=" "),s+=r)}else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function X(){for(var e,a,r=0,s="",n=arguments.length;r<n;r++)(e=arguments[r])&&(a=P(e))&&(s&&(s+=" "),s+=a);return s}function Ia(e){return typeof e=="object"?X(e):e??""}function ka(e,a,r,s){var n=e.__attributes??(e.__attributes={});g&&(n[a]=e.getAttribute(a),e.nodeName==="LINK")||n[a]!==(n[a]=r)&&(r==null?e.removeAttribute(a):typeof r!="string"&&Ma(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var B=new Map;function Ma(e){var a=B.get(e.nodeName);if(a)return a;B.set(e.nodeName,a=[]);for(var r,s=e,n=Element.prototype;n!==s;){r=pa(s);for(var l in r)r[l].set&&a.push(l);s=da(s)}return a}function Ca(e,a,r){var s=e.__className,n=Ra(a);g&&e.className===n?e.__className=n:(s!==n||g&&e.className!==n)&&(a==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function Ra(e,a){return(e??"")+""}var Da=K("<a><li> </li></a>"),Ha=K('<div class="flex"><div class="min-h-[calc(100vh-112px)] w-[300px] border-r border-gray-200"><ul class="px-2 py-3"></ul></div> <div class="p-4"><!></div></div>');function Ba(e,a){ha(a,!0);const r=[{label:"Quickstart",value:"/docs/quickstart"},{label:"Migrate",value:"/docs/migrate"}];var s=Ha(),n=T(s),l=T(n);Na(l,21,()=>r,_=>_.value,(_,c)=>{var t=Da(),d=T(t),i=T(d,!0);A(d),A(t),ma(u=>{ka(t,"href",w(c).value),Ca(d,Ia(u)),ba(i,w(c).label)},[()=>X("mb-2 rounded-md p-2",{"bg-gray-100":Ea.url.pathname===w(c).value})]),S(_,t)}),A(l),A(n);var f=ya(n,2),p=T(f);xa(p,()=>a.children),A(f),A(s),S(e,s),ga()}export{Ba as component};
