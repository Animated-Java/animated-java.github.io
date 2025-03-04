import{s as B,e as S,t as g,a as R,c as k,h as y,j as _,f as c,b as U,i as u,k as d,l as E,m as O,g as T,n as H,d as q}from"../chunks/scheduler.24DCJvkM.js";import{S as j,i as z,c as h,a as v,m as L,t as P,b,d as w}from"../chunks/index.Bxj0scGo.js";/* empty css                                                         */import{C}from"../chunks/CodeInline.CNHAPpq4.js";import{S as F,a as M}from"../chunks/Step.CRYQEWwI.js";import"../chunks/entry.BXArTHC8.js";import{f as I}from"../chunks/kit-docs.AGZ6yT6Q.js";function A(p){let e,s='<img src="/img/steps/legacy/1.png" alt="legacy-step1"/>';return{c(){e=S("p"),e.innerHTML=s},l(n){e=k(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-qzbc7q"&&(e.innerHTML=s)},m(n,a){u(n,e,a)},p:H,d(n){n&&c(e)}}}function D(p){let e,s,n,a,t,o,l,m,f;return n=new C({props:{code:"File"}}),t=new C({props:{code:"Plugins"}}),l=new C({props:{code:"Load Plugin from URL"}}),{c(){e=S("p"),s=g("Open Blockbench, and navigate to "),h(n.$$.fragment),a=g(" > "),h(t.$$.fragment),o=g(" > "),h(l.$$.fragment),m=g("."),this.h()},l(i){e=k(i,"P",{slot:!0});var r=y(e);s=_(r,"Open Blockbench, and navigate to "),v(n.$$.fragment,r),a=_(r," > "),v(t.$$.fragment,r),o=_(r," > "),v(l.$$.fragment,r),m=_(r,"."),r.forEach(c),this.h()},h(){q(e,"slot","description")},m(i,r){u(i,e,r),d(e,s),L(n,e,null),d(e,a),L(t,e,null),d(e,o),L(l,e,null),d(e,m),f=!0},p:H,i(i){f||(P(n.$$.fragment,i),P(t.$$.fragment,i),P(l.$$.fragment,i),f=!0)},o(i){b(n.$$.fragment,i),b(t.$$.fragment,i),b(l.$$.fragment,i),f=!1},d(i){i&&c(e),w(n),w(t),w(l)}}}function G(p){let e,s='<img src="/img/steps/legacy/2.png" alt="legacy-step2"/>';return{c(){e=S("p"),e.innerHTML=s},l(n){e=k(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-10fc3k"&&(e.innerHTML=s)},m(n,a){u(n,e,a)},p:H,d(n){n&&c(e)}}}function J(p){let e,s,n,a;return n=new C({props:{code:"Confirm"}}),{c(){e=S("p"),s=g("Paste the URL for your desired legacy version into the URL box, then click "),h(n.$$.fragment),this.h()},l(t){e=k(t,"P",{slot:!0});var o=y(e);s=_(o,"Paste the URL for your desired legacy version into the URL box, then click "),v(n.$$.fragment,o),o.forEach(c),this.h()},h(){q(e,"slot","description")},m(t,o){u(t,e,o),d(e,s),L(n,e,null),a=!0},p:H,i(t){a||(P(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){t&&c(e),w(n)}}}function K(p){let e,s,n,a;return e=new M({props:{title:"Step 1",$$slots:{description:[D],default:[A]},$$scope:{ctx:p}}}),n=new M({props:{title:"Step 2",orientation:"vertical",$$slots:{description:[J],default:[G]},$$scope:{ctx:p}}}),{c(){h(e.$$.fragment),s=R(),h(n.$$.fragment)},l(t){v(e.$$.fragment,t),s=U(t),v(n.$$.fragment,t)},m(t,o){L(e,t,o),u(t,s,o),L(n,t,o),a=!0},p(t,o){const l={};o&2&&(l.$$scope={dirty:o,ctx:t}),e.$set(l);const m={};o&2&&(m.$$scope={dirty:o,ctx:t}),n.$set(m)},i(t){a||(P(e.$$.fragment,t),P(n.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),a=!1},d(t){t&&c(s),w(e,t),w(n,t)}}}function N(p){let e,s=p[0].title+"",n,a,t,o=p[0].description+"",l,m,f,i;return f=new F({props:{$$slots:{default:[K]},$$scope:{ctx:p}}}),{c(){e=S("h1"),n=g(s),a=R(),t=S("p"),l=g(o),m=R(),h(f.$$.fragment)},l(r){e=k(r,"H1",{});var $=y(e);n=_($,s),$.forEach(c),a=U(r),t=k(r,"P",{});var x=y(t);l=_(x,o),x.forEach(c),m=U(r),v(f.$$.fragment,r)},m(r,$){u(r,e,$),d(e,n),u(r,a,$),u(r,t,$),d(t,l),u(r,m,$),L(f,r,$),i=!0},p(r,[$]){(!i||$&1)&&s!==(s=r[0].title+"")&&E(n,s),(!i||$&1)&&o!==(o=r[0].description+"")&&E(l,o);const x={};$&2&&(x.$$scope={dirty:$,ctx:r}),f.$set(x)},i(r){i||(P(f.$$.fragment,r),i=!0)},o(r){b(f.$$.fragment,r),i=!1},d(r){r&&(c(e),c(a),c(t),c(m)),w(f,r)}}}function Q(p,e,s){let n;return O(p,I,a=>s(0,n=a)),[n]}class ne extends j{constructor(e){super(),z(this,e,Q,N,B,{})}}export{ne as component};
