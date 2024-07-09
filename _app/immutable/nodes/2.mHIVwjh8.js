import{aa as ve,ab as ge,a4 as W,a0 as ke,s as A,l as H,i as C,f as d,ac as ae,e as g,c as k,y as Q,r as m,S,n as P,q as x,b as I,v as ee,w as te,x as le,z as N,Y as ye,a as D,g as M,A as ie,h as v,L as we,U as _e,t as Z,d as K,j as je,B as be,E as pe,k as Ee,ad as qe,N as Ce,I as Ve,R as $e,ae as Ie}from"../chunks/scheduler.4AygD3hz.js";import{g as O,t as $,c as Y,a as q,S as R,i as z,f as Te,b as J,d as U,m as F,e as G}from"../chunks/index.Car1Faca.js";import{e as X}from"../chunks/each.BUznH1t_.js";import{w as De}from"../chunks/index.CJz0Y9W2.js";import{B as Me}from"../chunks/Button.Bs8T2qVG.js";function Pe(n,e){const s=e.token={};function t(l,a,r,o){if(e.token!==s)return;e.resolved=o;let i=e.ctx;r!==void 0&&(i=i.slice(),i[r]=o);const u=l&&(e.current=l)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==a&&h&&(O(),$(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),Y())}):e.block.d(1),u.c(),q(u,1),u.m(e.mount(),e.anchor),c=!0),e.block=u,e.blocks&&(e.blocks[a]=u),c&&ke()}if(ve(n)){const l=ge();if(n.then(a=>{W(l),t(e.then,1,e.value,a),W(null)},a=>{if(W(l),t(e.catch,2,e.error,a),W(null),!e.hasCatch)throw a}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,n),!0;e.resolved=n}}function Be(n,e,s){const t=e.slice(),{resolved:l}=n;n.current===n.then&&(t[n.value]=l),n.current===n.catch&&(t[n.error]=l),n.block.p(t,s)}function Le(n,e={}){let s;const t=a=>{const r=a[0].isIntersecting?"enter":"exit";n.dispatchEvent(new CustomEvent(r))},l=({root:a,top:r,bottom:o})=>{const i=r?r*-1:0,u=o?o*-1:0,c=`${i}px 0px ${u}px 0px`,h={root:a,rootMargin:c};s&&s.disconnect(),s=new IntersectionObserver(t,h),s.observe(n)};return l(e),{update(a){l(a)},destroy(){s&&s.disconnect()}}}function Ae(n){let e,s='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconify iconify--mdi" viewBox="0 0 24 24"><path fill="#ff4e45" d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"></path></svg>',t,l;return{c(){e=g("button"),e.innerHTML=s,this.h()},l(a){e=k(a,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),Q(e)!=="svelte-1rbdl3"&&(e.innerHTML=s),this.h()},h(){m(e,"class","play__btn svelte-1srk8gt"),m(e,"aria-label","Play YouTube video")},m(a,r){C(a,e,r),t||(l=S(e,"click",n[4]),t=!0)},p:P,i:P,o:P,d(a){a&&d(e),t=!1,l()}}}function He(n){let e,s,t,l;const a=n[2].default,r=x(a,n,n[1],null);return{c(){e=g("button"),r&&r.c(),this.h()},l(o){e=k(o,"BUTTON",{class:!0,"aria-label":!0});var i=I(e);r&&r.l(i),i.forEach(d),this.h()},h(){m(e,"class","custom__play__btn svelte-1srk8gt"),m(e,"aria-label","Play YouTube video")},m(o,i){C(o,e,i),r&&r.m(e,null),s=!0,t||(l=S(e,"click",n[3]),t=!0)},p(o,i){r&&r.p&&(!s||i&2)&&ee(r,a,o,o[1],s?le(a,o[1],i,null):te(o[1]),null)},i(o){s||(q(r,o),s=!0)},o(o){$(r,o),s=!1},d(o){o&&d(e),r&&r.d(o),t=!1,l()}}}function Se(n){let e,s,t,l;const a=[He,Ae],r=[];function o(i,u){return i[0]?0:1}return e=o(n),s=r[e]=a[e](n),{c(){s.c(),t=H()},l(i){s.l(i),t=H()},m(i,u){r[e].m(i,u),C(i,t,u),l=!0},p(i,[u]){let c=e;e=o(i),e===c?r[e].p(i,u):(O(),$(r[c],1,1,()=>{r[c]=null}),Y(),s=r[e],s?s.p(i,u):(s=r[e]=a[e](i),s.c()),q(s,1),s.m(t.parentNode,t))},i(i){l||(q(s),l=!0)},o(i){$(s),l=!1},d(i){i&&d(t),r[e].d(i)}}}function Ne(n,e,s){let{$$slots:t={},$$scope:l}=e,{isCustomPlayButton:a}=e;function r(i){ae.call(this,n,i)}function o(i){ae.call(this,n,i)}return n.$$set=i=>{"isCustomPlayButton"in i&&s(0,a=i.isCustomPlayButton),"$$scope"in i&&s(1,l=i.$$scope)},[a,l,t,r,o]}class Oe extends R{constructor(e){super(),z(this,e,Ne,Se,A,{isCustomPlayButton:0})}}function Ye(n){const e=n-1;return e*e*e+1}function Re(n,{delay:e=0,duration:s=400,easing:t=Ye,start:l=0,opacity:a=0}={}){const r=getComputedStyle(n),o=+r.opacity,i=r.transform==="none"?"":r.transform,u=1-l,c=o*(1-a);return{delay:e,duration:s,easing:t,css:(h,f)=>`
			transform: ${i} scale(${1-u*f});
			opacity: ${o-c*f}
		`}}function ze(n){let e,s,t;return{c(){e=g("iframe"),this.h()},l(l){e=k(l,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),I(e).forEach(d),this.h()},h(){N(e.src,s="https://www.youtube.com/embed/"+n[1]+"?autoplay=1&rel=0")||m(e,"src",s),m(e,"title",n[0]),m(e,"frameborder","0"),m(e,"allow","autoplay; picture-in-picture; clipboard-write"),e.allowFullscreen=!0,m(e,"class","svelte-11gebsu")},m(l,a){C(l,e,a)},p(l,[a]){n=l,a&2&&!N(e.src,s="https://www.youtube.com/embed/"+n[1]+"?autoplay=1&rel=0")&&m(e,"src",s),a&1&&m(e,"title",n[0])},i(l){l&&(t||ye(()=>{t=Te(e,Re,n[2]?{delay:500,duration:800}:{}),t.start()}))},o:P,d(l){l&&d(e)}}}function Je(n,e,s){let{title:t=""}=e,{id:l=""}=e,{animations:a}=e;return n.$$set=r=>{"title"in r&&s(0,t=r.title),"id"in r&&s(1,l=r.id),"animations"in r&&s(2,a=r.animations)},[t,l,a]}class Ue extends R{constructor(e){super(),z(this,e,Je,ze,A,{title:0,id:1,animations:2})}}function re(n){let e,s,t;return{c(){e=g("img"),this.h()},l(l){e=k(l,"IMG",{src:!0,title:!0,alt:!0,referrerpolicy:!0,class:!0}),this.h()},h(){N(e.src,s="https://i.ytimg.com/vi/"+n[0]+"/"+(n[2]?"hqdefault":"maxresdefault")+".jpg")||m(e,"src",s),m(e,"title",n[1]),m(e,"alt",t="Youtube video: "+n[1]),m(e,"referrerpolicy","no-referrer"),m(e,"class","svelte-hw9fhp")},m(l,a){C(l,e,a)},p(l,a){a&5&&!N(e.src,s="https://i.ytimg.com/vi/"+l[0]+"/"+(l[2]?"hqdefault":"maxresdefault")+".jpg")&&m(e,"src",s),a&2&&m(e,"title",l[1]),a&2&&t!==(t="Youtube video: "+l[1])&&m(e,"alt",t)},d(l){l&&d(e)}}}function Fe(n){let e=n[3],s,t=re(n);return{c(){t.c(),s=H()},l(l){t.l(l),s=H()},m(l,a){t.m(l,a),C(l,s,a)},p(l,[a]){a&8&&A(e,e=l[3])?(t.d(1),t=re(l),t.c(),t.m(s.parentNode,s)):t.p(l,a)},i:P,o:P,d(l){l&&d(s),t.d(l)}}}function Ge(n,e,s){let{id:t=""}=e,{title:l=""}=e,{altThumb:a=""}=e,{play:r=!1}=e;return n.$$set=o=>{"id"in o&&s(0,t=o.id),"title"in o&&s(1,l=o.title),"altThumb"in o&&s(2,a=o.altThumb),"play"in o&&s(3,r=o.play)},[t,l,a,r]}class We extends R{constructor(e){super(),z(this,e,Ge,Fe,A,{id:0,title:1,altThumb:2,play:3})}}const Qe=n=>({}),ce=n=>({});function Ze(n){let e,s,t,l,a,r,o,i,u,c,h;const f=[xe,Xe],E=[];function B(_,j){return _[8]?0:1}return e=B(n),s=E[e]=f[e](n),{c(){s.c(),t=D(),l=g("div"),a=D(),r=g("div"),o=g("h3"),i=Z(n[3]),this.h()},l(_){s.l(_),t=M(_),l=k(_,"DIV",{class:!0}),I(l).forEach(d),a=M(_),r=k(_,"DIV",{class:!0});var j=I(r);o=k(j,"H3",{class:!0});var w=I(o);i=K(w,n[3]),w.forEach(d),j.forEach(d),this.h()},h(){m(l,"class","b__overlay svelte-w0t24e"),m(o,"class","svelte-w0t24e"),m(r,"class","v__title svelte-w0t24e")},m(_,j){E[e].m(_,j),C(_,t,j),C(_,l,j),C(_,a,j),C(_,r,j),v(r,o),v(o,i),u=!0,c||(h=[S(l,"click",n[10]),S(l,"keypress",n[11])],c=!0)},p(_,j){s.p(_,j),(!u||j&8)&&je(i,_[3])},i(_){u||(q(s),u=!0)},o(_){$(s),u=!1},d(_){_&&(d(t),d(l),d(a),d(r)),E[e].d(_),c=!1,be(h)}}}function Ke(n){let e,s;return e=new Ue({props:{id:n[0],title:n[3],animations:n[2]}}),{c(){J(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){F(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.id=t[0]),l&8&&(a.title=t[3]),l&4&&(a.animations=t[2]),e.$set(a)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function Xe(n){let e,s;return e=new We({props:{id:n[0],title:n[3],altThumb:n[1],play:n[6]}}),{c(){J(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){F(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.id=t[0]),l&8&&(a.title=t[3]),l&2&&(a.altThumb=t[1]),l&64&&(a.play=t[6]),e.$set(a)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function xe(n){let e;const s=n[9].thumbnail,t=x(s,n,n[13],ce);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8192)&&ee(t,s,l,l[13],e?le(s,l[13],a,Qe):te(l[13]),ce)},i(l){e||(q(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function oe(n){let e,s;return e=new Oe({props:{isCustomPlayButton:n[7],$$slots:{default:[et]},$$scope:{ctx:n}}}),e.$on("click",n[12]),{c(){J(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){F(e,t,l),s=!0},p(t,l){const a={};l&8192&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function et(n){let e;const s=n[9].default,t=x(s,n,n[13],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8192)&&ee(t,s,l,l[13],e?le(s,l[13],a,null):te(l[13]),null)},i(l){e||(q(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function tt(n){let e,s,t,l,a;const r=[Ke,Ze],o=[];function i(c,h){return c[6]?0:1}s=i(n),t=o[s]=r[s](n);let u=!n[6]&&oe(n);return{c(){e=g("div"),t.c(),l=D(),u&&u.c(),this.h()},l(c){e=k(c,"DIV",{class:!0,style:!0,title:!0});var h=I(e);t.l(h),l=M(h),u&&u.l(h),h.forEach(d),this.h()},h(){m(e,"class","you__tube svelte-w0t24e"),ie(e,"--aspect-ratio",n[4]/n[5]||"16/9"),m(e,"title",n[3])},m(c,h){C(c,e,h),o[s].m(e,null),v(e,l),u&&u.m(e,null),a=!0},p(c,[h]){let f=s;s=i(c),s===f?o[s].p(c,h):(O(),$(o[f],1,1,()=>{o[f]=null}),Y(),t=o[s],t?t.p(c,h):(t=o[s]=r[s](c),t.c()),q(t,1),t.m(e,l)),c[6]?u&&(O(),$(u,1,1,()=>{u=null}),Y()):u?(u.p(c,h),h&64&&q(u,1)):(u=oe(c),u.c(),q(u,1),u.m(e,null)),(!a||h&48)&&ie(e,"--aspect-ratio",c[4]/c[5]||"16/9"),(!a||h&8)&&m(e,"title",c[3])},i(c){a||(q(t),q(u),a=!0)},o(c){$(t),$(u),a=!1},d(c){c&&d(e),o[s].d(),u&&u.d()}}}function lt(n,e,s){let{$$slots:t={},$$scope:l}=e;const a=we(t);let{id:r=null}=e,{altThumb:o=!1}=e,{animations:i=!0}=e,u="",c=0,h=0,f={};_e(async()=>{f=await(await fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${r}&format=json`)).json(),s(3,u=f==null?void 0:f.title),s(4,c=f==null?void 0:f.width),s(5,h=f==null?void 0:f.height)});let E=!1;const B=a.default,_=a.thumbnail,j=()=>s(6,E=!0),w=()=>s(6,E=!0),y=()=>s(6,E=!0);return n.$$set=b=>{"id"in b&&s(0,r=b.id),"altThumb"in b&&s(1,o=b.altThumb),"animations"in b&&s(2,i=b.animations),"$$scope"in b&&s(13,l=b.$$scope)},[r,o,i,u,c,h,E,B,_,t,j,w,y,l]}class st extends R{constructor(e){super(),z(this,e,lt,tt,A,{id:0,altThumb:1,animations:2})}}function ue(n,e,s){const t=n.slice();return t[7]=e[s],t}function fe(n){let e,s;return e=new st({props:{id:n[3][n[1]],animations:!1}}),{c(){J(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){F(e,t,l),s=!0},p(t,l){const a={};l&2&&(a.id=t[3][t[1]]),e.$set(a)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function nt(n){return{c:P,l:P,m:P,p:P,d:P}}function at(n){let e,s=n[10]+"",t;return{c(){e=g("p"),t=Z(s),this.h()},l(l){e=k(l,"P",{class:!0});var a=I(e);t=K(a,s),a.forEach(d),this.h()},h(){m(e,"class","svelte-19jau7h")},m(l,a){C(l,e,a),v(e,t)},p:P,d(l){l&&d(e)}}}function it(n){let e,s="Loading...";return{c(){e=g("p"),e.textContent=s,this.h()},l(t){e=k(t,"P",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h(){m(e,"class","svelte-19jau7h")},m(t,l){C(t,e,l)},p:P,d(t){t&&d(e)}}}function rt(n){let e,s,t,l={ctx:n,current:null,token:null,hasCatch:!0,pending:it,then:at,catch:nt,value:10,error:11};return Pe(ot(n[7]),l),{c(){e=g("div"),s=D(),t=H(),l.block.c(),this.h()},l(a){e=k(a,"DIV",{class:!0,style:!0}),I(e).forEach(d),s=M(a),t=H(),l.block.l(a),this.h()},h(){m(e,"class","thumbnail-image svelte-19jau7h"),m(e,"style",`background-image: url(https://img.youtube.com/vi/${n[7]}/0.jpg);`)},m(a,r){C(a,e,r),C(a,s,r),C(a,t,r),l.block.m(a,l.anchor=r),l.mount=()=>t.parentNode,l.anchor=t},p(a,r){n=a,Be(l,n,r)},d(a){a&&(d(e),d(s),d(t)),l.block.d(a),l.token=null,l=null}}}function he(n){let e,s,t,l,a,r;s=new Me({props:{class:"thumbnail-button",$$slots:{default:[rt]},$$scope:{ctx:n}}});function o(){return n[5](n[7])}return{c(){e=g("div"),J(s.$$.fragment),t=D(),this.h()},l(i){e=k(i,"DIV",{class:!0});var u=I(e);U(s.$$.fragment,u),t=M(u),u.forEach(d),this.h()},h(){m(e,"class","thumbnail-container svelte-19jau7h")},m(i,u){C(i,e,u),F(s,e,null),v(e,t),l=!0,a||(r=S(e,"click",o),a=!0)},p(i,u){n=i;const c={};u&4096&&(c.$$scope={dirty:u,ctx:n}),s.$set(c)},i(i){l||(q(s.$$.fragment,i),l=!0)},o(i){$(s.$$.fragment,i),l=!1},d(i){i&&d(e),G(s),a=!1,r()}}}function ct(n){let e,s=n[1],t,l,a,r=fe(n),o=X(n[3]),i=[];for(let c=0;c<o.length;c+=1)i[c]=he(ue(n,o,c));const u=c=>$(i[c],1,1,()=>{i[c]=null});return{c(){e=g("div"),r.c(),t=D(),l=g("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=k(c,"DIV",{class:!0});var h=I(e);r.l(h),t=M(h),l=k(h,"DIV",{class:!0});var f=I(l);for(let E=0;E<i.length;E+=1)i[E].l(f);f.forEach(d),h.forEach(d),this.h()},h(){m(l,"class","grid svelte-19jau7h"),m(e,"class","container svelte-19jau7h")},m(c,h){C(c,e,h),r.m(e,null),v(e,t),v(e,l);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(l,null);n[6](e),a=!0},p(c,[h]){if(h&2&&A(s,s=c[1])?(O(),$(r,1,1,P),Y(),r=fe(c),r.c(),q(r,1),r.m(e,t)):r.p(c,h),h&24){o=X(c[3]);let f;for(f=0;f<o.length;f+=1){const E=ue(c,o,f);i[f]?(i[f].p(E,h),q(i[f],1)):(i[f]=he(E),i[f].c(),q(i[f],1),i[f].m(l,null))}for(O(),f=o.length;f<i.length;f+=1)u(f);Y()}},i(c){if(!a){q(r);for(let h=0;h<o.length;h+=1)q(i[h]);a=!0}},o(c){$(r),i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)$(i[h]);a=!1},d(c){c&&d(e),r.d(c),pe(i,c),n[6](null)}}}async function ot(n){const s=await(await fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${n}&format=json`)).json();return s==null?void 0:s.title}function ut(n,e,s){let t,l=De(0);Ee(n,l,c=>s(1,t=c));let a;const r=["fthlphRmsjY","dd7pqAPd-p0","M2R3zgvbZ30","0xPyRA-he5c","0UCrI7NJ5KI","-6pLFvW5_Dk","yfaQM3aHgxE","sC3FqzpDrpQ","CO2kYUMpYPk","fs0NUGmsa10","4VlwyI0EHo4"];function o(c){qe(l,t=r.indexOf(c),t),a==null||a.scrollIntoView({behavior:"smooth"})}const i=c=>{o(c)};function u(c){Ce[c?"unshift":"push"](()=>{a=c,s(0,a)})}return[a,t,l,r,o,i,u]}class ft extends R{constructor(e){super(),z(this,e,ut,ct,A,{})}}function me(n,e,s){const t=n.slice();return t[3]=e[s],t[5]=s,t}function ht(n){let e,s;return{c(){e=g("img"),this.h()},l(t){e=k(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){N(e.src,s=n[3].image)||m(e,"src",s),m(e,"alt",n[3].title),m(e,"class","svelte-1jbdq42")},m(t,l){C(t,e,l)},p:P,d(t){t&&d(e)}}}function mt(n){let e,s;return{c(){e=g("img"),this.h()},l(t){e=k(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){N(e.src,s=n[3].image)||m(e,"src",s),m(e,"alt",n[3].title),m(e,"class","svelte-1jbdq42")},m(t,l){C(t,e,l)},p:P,d(t){t&&d(e)}}}function de(n){let e,s,t,l,a=n[3].title+"",r,o,i,u,c,h=n[3].description+"",f,E,B,_,j,w,y,b=n[5]%2==0&&ht(n),p=n[5]%2==1&&mt(n);return{c(){e=g("div"),b&&b.c(),s=D(),t=g("div"),l=g("h2"),r=Z(a),o=D(),i=g("hr"),u=D(),c=g("p"),f=Z(h),E=D(),p&&p.c(),B=D(),_=g("div"),j=D(),this.h()},l(T){e=k(T,"DIV",{class:!0});var V=I(e);b&&b.l(V),s=M(V),t=k(V,"DIV",{class:!0});var L=I(t);l=k(L,"H2",{class:!0});var se=I(l);r=K(se,a),se.forEach(d),o=M(L),i=k(L,"HR",{class:!0}),u=M(L),c=k(L,"P",{});var ne=I(c);f=K(ne,h),ne.forEach(d),L.forEach(d),E=M(V),p&&p.l(V),B=M(V),_=k(V,"DIV",{class:!0}),I(_).forEach(d),j=M(V),V.forEach(d),this.h()},h(){m(l,"class","svelte-1jbdq42"),m(i,"class","svelte-1jbdq42"),m(t,"class","svelte-1jbdq42"),m(_,"class","in-view svelte-1jbdq42"),m(e,"class",$e(`panel ${n[5]%2==0?"left":"right"}-panel`)+" svelte-1jbdq42")},m(T,V){C(T,e,V),b&&b.m(e,null),v(e,s),v(e,t),v(t,l),v(l,r),v(t,o),v(t,i),v(t,u),v(t,c),v(c,f),v(e,E),p&&p.m(e,null),v(e,B),v(e,_),v(e,j),w||(y=[Ie(Le.call(null,_)),S(_,"enter",_t)],w=!0)},p(T,V){T[5]%2==0&&b.p(T,V),T[5]%2==1&&p.p(T,V)},d(T){T&&d(e),b&&b.d(),p&&p.d(),w=!1,be(y)}}}function dt(n){let e,s,t='<div class="header-container svelte-1jbdq42"><img src="/img/animated_java_icon.svg" class="svelte-1jbdq42"/> <div class="svelte-1jbdq42"><h1 class="svelte-1jbdq42">Welcome to Animated Java!</h1> <hr class="svelte-1jbdq42"/> <h3 class="svelte-1jbdq42">A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.</h3></div></div>',l,a,r,o,i,u,c="Made with Animated Java!",h,f,E,B,_,j=X(n[0]),w=[];for(let y=0;y<j.length;y+=1)w[y]=de(me(n,j,y));return B=new ft({}),{c(){e=g("div"),s=g("div"),s.innerHTML=t,l=D(),a=g("div");for(let y=0;y<w.length;y+=1)w[y].c();r=D(),o=g("div"),i=g("div"),u=g("h2"),u.textContent=c,h=D(),f=g("hr"),E=D(),J(B.$$.fragment),this.h()},l(y){e=k(y,"DIV",{class:!0});var b=I(e);s=k(b,"DIV",{class:!0,"data-svelte-h":!0}),Q(s)!=="svelte-hesgm4"&&(s.innerHTML=t),l=M(b),a=k(b,"DIV",{class:!0});var p=I(a);for(let L=0;L<w.length;L+=1)w[L].l(p);p.forEach(d),r=M(b),o=k(b,"DIV",{class:!0});var T=I(o);i=k(T,"DIV",{class:!0});var V=I(i);u=k(V,"H2",{class:!0,"data-svelte-h":!0}),Q(u)!=="svelte-1iguss2"&&(u.textContent=c),h=M(V),f=k(V,"HR",{class:!0}),E=M(V),U(B.$$.fragment,V),V.forEach(d),T.forEach(d),b.forEach(d),this.h()},h(){m(s,"class","center-container svelte-1jbdq42"),m(a,"class","panel-container svelte-1jbdq42"),m(u,"class","section-title svelte-1jbdq42"),m(f,"class","svelte-1jbdq42"),m(i,"class","made-with-aj svelte-1jbdq42"),m(o,"class","center-container svelte-1jbdq42"),m(e,"class","page svelte-1jbdq42")},m(y,b){C(y,e,b),v(e,s),v(e,l),v(e,a);for(let p=0;p<w.length;p+=1)w[p]&&w[p].m(a,null);v(e,r),v(e,o),v(o,i),v(i,u),v(i,h),v(i,f),v(i,E),F(B,i,null),_=!0},p(y,[b]){if(b&1){j=X(y[0]);let p;for(p=0;p<j.length;p+=1){const T=me(y,j,p);w[p]?w[p].p(T,b):(w[p]=de(T),w[p].c(),w[p].m(a,null))}for(;p<w.length;p+=1)w[p].d(1);w.length=j.length}},i(y){_||(q(B.$$.fragment,y),_=!0)},o(y){$(B.$$.fragment,y),_=!1},d(y){y&&d(e),pe(w,y),G(B)}}}const _t=n=>{n.target.parentElement.classList.contains("panel-fade-in")||n.target.parentElement.classList.add("panel-fade-in")};function bt(n){let e,s;return _e(()=>{e=document.querySelector(".on-this-page"),s=document.querySelector("main"),e&&(e.style.display="none"),s&&(s.style.overflow="visible")}),Ve(()=>{e&&(e.style.display="block"),s&&(s.style.overflow="hidden")}),[[{title:"100% Vanilla Minecraft!",description:"Built for Map Makers and Data Pack Developers.",image:"/img/vanilla.png"},{title:"Variants",description:"Swap out textures on a Rig in-game with a single function call.",image:"/img/variants.gif"},{title:"Advanced Easing Options",description:"Choose from a variety of easing options to make your animations more dynamic.",image:"/img/easing.gif"},{title:"Vanilla Models",description:"Animated Java supports vanilla item and block models, allowing you to create animated models without a Resource Pack!",image:"/img/resourcepackless.png"},{title:"Heavily Optimized",description:"Animated Java has had hundreds of hours put into performance testing, and optimization. Worry less about performance and more about creating!",image:"/img/performance.png"}]]}class wt extends R{constructor(e){super(),z(this,e,bt,dt,A,{})}}export{wt as component};
