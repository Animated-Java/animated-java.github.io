import{b as q,t as z}from"./index.Bxj0scGo.js";import{w as B}from"./scheduler.24DCJvkM.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,w){q(n,1,1,()=>{w.delete(n.key)})}function H(n,w,x,C,A,g,f,b,p,j,o,k){let i=n.length,d=g.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const h=[],a=new Map,m=new Map,M=[];for(c=d;c--;){const e=k(A,g,c),s=x(e);let t=f.get(s);t?M.push(()=>t.p(e,w)):(t=j(s,e),t.c()),a.set(s,h[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const v=new Set,S=new Set;function y(e){z(e,1),e.m(b,o),f.set(e.key,e),o=e.first,d--}for(;i&&d;){const e=h[d-1],s=n[i-1],t=e.key,l=s.key;e===s?(o=e.first,i--,d--):a.has(l)?!f.has(t)||v.has(t)?y(e):S.has(l)?i--:m.get(t)>m.get(l)?(S.add(t),y(e)):(v.add(l),i--):(p(s,f),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,f)}for(;d;)y(h[d-1]);return B(M),h}export{F as e,G as o,H as u};
