import{aa as ye,ab as Ee,a4 as ee,a0 as $e,s as q,l as Y,i as T,f as d,ac as ce,e as b,c as v,y as te,r as h,S as z,n as D,q as ne,b as V,v as ie,w as ae,x as re,z as J,Y as Ce,a as P,g as M,A as ue,h as p,L as Te,U as ge,t as O,d as R,j as Ie,B as ke,E as we,k as Ve,I as Pe,R as Me,ad as De}from"../chunks/scheduler.t9Zj7LiI.js";import{g as U,t as I,c as G,a as C,S as F,i as W,f as Be,b as Q,d as Z,m as K,e as X}from"../chunks/index.CH0vTrEe.js";import{e as le}from"../chunks/each.C74CYbEB.js";import{w as Le}from"../chunks/index.Cx9zofCF.js";import{B as Ae}from"../chunks/Button.3unVfvWh.js";function He(n,e){const s=e.token={};function t(l,i,r,o){if(e.token!==s)return;e.resolved=o;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=o);const u=l&&(e.current=l)(a);let c=!1;e.block&&(e.blocks?e.blocks.forEach((f,m)=>{m!==i&&f&&(U(),I(f,1,1,()=>{e.blocks[m]===f&&(e.blocks[m]=null)}),G())}):e.block.d(1),u.c(),C(u,1),u.m(e.mount(),e.anchor),c=!0),e.block=u,e.blocks&&(e.blocks[i]=u),c&&$e()}if(ye(n)){const l=Ee();if(n.then(i=>{ee(l),t(e.then,1,e.value,i),ee(null)},i=>{if(ee(l),t(e.catch,2,e.error,i),ee(null),!e.hasCatch)throw i}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,n),!0;e.resolved=n}}function Se(n,e,s){const t=e.slice(),{resolved:l}=n;n.current===n.then&&(t[n.value]=l),n.current===n.catch&&(t[n.error]=l),n.block.p(t,s)}function je(n){let e,s='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconify iconify--mdi" viewBox="0 0 24 24"><path fill="#ff4e45" d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"></path></svg>',t,l;return{c(){e=b("button"),e.innerHTML=s,this.h()},l(i){e=v(i,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),te(e)!=="svelte-1rbdl3"&&(e.innerHTML=s),this.h()},h(){h(e,"class","play__btn svelte-1srk8gt"),h(e,"aria-label","Play YouTube video")},m(i,r){T(i,e,r),t||(l=z(e,"click",n[4]),t=!0)},p:D,i:D,o:D,d(i){i&&d(e),t=!1,l()}}}function qe(n){let e,s,t,l;const i=n[2].default,r=ne(i,n,n[1],null);return{c(){e=b("button"),r&&r.c(),this.h()},l(o){e=v(o,"BUTTON",{class:!0,"aria-label":!0});var a=V(e);r&&r.l(a),a.forEach(d),this.h()},h(){h(e,"class","custom__play__btn svelte-1srk8gt"),h(e,"aria-label","Play YouTube video")},m(o,a){T(o,e,a),r&&r.m(e,null),s=!0,t||(l=z(e,"click",n[3]),t=!0)},p(o,a){r&&r.p&&(!s||a&2)&&ie(r,i,o,o[1],s?re(i,o[1],a,null):ae(o[1]),null)},i(o){s||(C(r,o),s=!0)},o(o){I(r,o),s=!1},d(o){o&&d(e),r&&r.d(o),t=!1,l()}}}function Ne(n){let e,s,t,l;const i=[qe,je],r=[];function o(a,u){return a[0]?0:1}return e=o(n),s=r[e]=i[e](n),{c(){s.c(),t=Y()},l(a){s.l(a),t=Y()},m(a,u){r[e].m(a,u),T(a,t,u),l=!0},p(a,[u]){let c=e;e=o(a),e===c?r[e].p(a,u):(U(),I(r[c],1,1,()=>{r[c]=null}),G(),s=r[e],s?s.p(a,u):(s=r[e]=i[e](a),s.c()),C(s,1),s.m(t.parentNode,t))},i(a){l||(C(s),l=!0)},o(a){I(s),l=!1},d(a){a&&d(t),r[e].d(a)}}}function Oe(n,e,s){let{$$slots:t={},$$scope:l}=e,{isCustomPlayButton:i}=e;function r(a){ce.call(this,n,a)}function o(a){ce.call(this,n,a)}return n.$$set=a=>{"isCustomPlayButton"in a&&s(0,i=a.isCustomPlayButton),"$$scope"in a&&s(1,l=a.$$scope)},[i,l,t,r,o]}class Re extends F{constructor(e){super(),W(this,e,Oe,Ne,q,{isCustomPlayButton:0})}}function Ye(n){const e=n-1;return e*e*e+1}function ze(n,{delay:e=0,duration:s=400,easing:t=Ye,start:l=0,opacity:i=0}={}){const r=getComputedStyle(n),o=+r.opacity,a=r.transform==="none"?"":r.transform,u=1-l,c=o*(1-i);return{delay:e,duration:s,easing:t,css:(f,m)=>`
			transform: ${a} scale(${1-u*m});
			opacity: ${o-c*m}
		`}}function Je(n){let e,s,t;return{c(){e=b("iframe"),this.h()},l(l){e=v(l,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),V(e).forEach(d),this.h()},h(){J(e.src,s="https://www.youtube.com/embed/"+n[1]+"?autoplay=1&rel=0")||h(e,"src",s),h(e,"title",n[0]),h(e,"frameborder","0"),h(e,"allow","autoplay; picture-in-picture; clipboard-write"),e.allowFullscreen=!0,h(e,"class","svelte-11gebsu")},m(l,i){T(l,e,i)},p(l,[i]){n=l,i&2&&!J(e.src,s="https://www.youtube.com/embed/"+n[1]+"?autoplay=1&rel=0")&&h(e,"src",s),i&1&&h(e,"title",n[0])},i(l){l&&(t||Ce(()=>{t=Be(e,ze,n[2]?{delay:500,duration:800}:{}),t.start()}))},o:D,d(l){l&&d(e)}}}function Ue(n,e,s){let{title:t=""}=e,{id:l=""}=e,{animations:i}=e;return n.$$set=r=>{"title"in r&&s(0,t=r.title),"id"in r&&s(1,l=r.id),"animations"in r&&s(2,i=r.animations)},[t,l,i]}class Ge extends F{constructor(e){super(),W(this,e,Ue,Je,q,{title:0,id:1,animations:2})}}function fe(n){let e,s,t;return{c(){e=b("img"),this.h()},l(l){e=v(l,"IMG",{src:!0,title:!0,alt:!0,referrerpolicy:!0,class:!0}),this.h()},h(){J(e.src,s="https://i.ytimg.com/vi/"+n[0]+"/"+(n[2]?"hqdefault":"maxresdefault")+".jpg")||h(e,"src",s),h(e,"title",n[1]),h(e,"alt",t="Youtube video: "+n[1]),h(e,"referrerpolicy","no-referrer"),h(e,"class","svelte-hw9fhp")},m(l,i){T(l,e,i)},p(l,i){i&5&&!J(e.src,s="https://i.ytimg.com/vi/"+l[0]+"/"+(l[2]?"hqdefault":"maxresdefault")+".jpg")&&h(e,"src",s),i&2&&h(e,"title",l[1]),i&2&&t!==(t="Youtube video: "+l[1])&&h(e,"alt",t)},d(l){l&&d(e)}}}function Fe(n){let e=n[3],s,t=fe(n);return{c(){t.c(),s=Y()},l(l){t.l(l),s=Y()},m(l,i){t.m(l,i),T(l,s,i)},p(l,[i]){i&8&&q(e,e=l[3])?(t.d(1),t=fe(l),t.c(),t.m(s.parentNode,s)):t.p(l,i)},i:D,o:D,d(l){l&&d(s),t.d(l)}}}function We(n,e,s){let{id:t=""}=e,{title:l=""}=e,{altThumb:i=""}=e,{play:r=!1}=e;return n.$$set=o=>{"id"in o&&s(0,t=o.id),"title"in o&&s(1,l=o.title),"altThumb"in o&&s(2,i=o.altThumb),"play"in o&&s(3,r=o.play)},[t,l,i,r]}class Qe extends F{constructor(e){super(),W(this,e,We,Fe,q,{id:0,title:1,altThumb:2,play:3})}}const Ze=n=>({}),me=n=>({});function Ke(n){let e,s,t,l,i,r,o,a,u,c,f;const m=[et,xe],k=[];function B(_,E){return _[8]?0:1}return e=B(n),s=k[e]=m[e](n),{c(){s.c(),t=P(),l=b("div"),i=P(),r=b("div"),o=b("h3"),a=O(n[3]),this.h()},l(_){s.l(_),t=M(_),l=v(_,"DIV",{class:!0}),V(l).forEach(d),i=M(_),r=v(_,"DIV",{class:!0});var E=V(r);o=v(E,"H3",{class:!0});var w=V(o);a=R(w,n[3]),w.forEach(d),E.forEach(d),this.h()},h(){h(l,"class","b__overlay svelte-w0t24e"),h(o,"class","svelte-w0t24e"),h(r,"class","v__title svelte-w0t24e")},m(_,E){k[e].m(_,E),T(_,t,E),T(_,l,E),T(_,i,E),T(_,r,E),p(r,o),p(o,a),u=!0,c||(f=[z(l,"click",n[10]),z(l,"keypress",n[11])],c=!0)},p(_,E){s.p(_,E),(!u||E&8)&&Ie(a,_[3])},i(_){u||(C(s),u=!0)},o(_){I(s),u=!1},d(_){_&&(d(t),d(l),d(i),d(r)),k[e].d(_),c=!1,ke(f)}}}function Xe(n){let e,s;return e=new Ge({props:{id:n[0],title:n[3],animations:n[2]}}),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.id=t[0]),l&8&&(i.title=t[3]),l&4&&(i.animations=t[2]),e.$set(i)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function xe(n){let e,s;return e=new Qe({props:{id:n[0],title:n[3],altThumb:n[1],play:n[6]}}),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.id=t[0]),l&8&&(i.title=t[3]),l&2&&(i.altThumb=t[1]),l&64&&(i.play=t[6]),e.$set(i)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function et(n){let e;const s=n[9].thumbnail,t=ne(s,n,n[13],me);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&8192)&&ie(t,s,l,l[13],e?re(s,l[13],i,Ze):ae(l[13]),me)},i(l){e||(C(t,l),e=!0)},o(l){I(t,l),e=!1},d(l){t&&t.d(l)}}}function he(n){let e,s;return e=new Re({props:{isCustomPlayButton:n[7],$$slots:{default:[tt]},$$scope:{ctx:n}}}),e.$on("click",n[12]),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const i={};l&8192&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function tt(n){let e;const s=n[9].default,t=ne(s,n,n[13],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&8192)&&ie(t,s,l,l[13],e?re(s,l[13],i,null):ae(l[13]),null)},i(l){e||(C(t,l),e=!0)},o(l){I(t,l),e=!1},d(l){t&&t.d(l)}}}function lt(n){let e,s,t,l,i;const r=[Xe,Ke],o=[];function a(c,f){return c[6]?0:1}s=a(n),t=o[s]=r[s](n);let u=!n[6]&&he(n);return{c(){e=b("div"),t.c(),l=P(),u&&u.c(),this.h()},l(c){e=v(c,"DIV",{class:!0,style:!0,title:!0});var f=V(e);t.l(f),l=M(f),u&&u.l(f),f.forEach(d),this.h()},h(){h(e,"class","you__tube svelte-w0t24e"),ue(e,"--aspect-ratio",n[4]/n[5]||"16/9"),h(e,"title",n[3])},m(c,f){T(c,e,f),o[s].m(e,null),p(e,l),u&&u.m(e,null),i=!0},p(c,[f]){let m=s;s=a(c),s===m?o[s].p(c,f):(U(),I(o[m],1,1,()=>{o[m]=null}),G(),t=o[s],t?t.p(c,f):(t=o[s]=r[s](c),t.c()),C(t,1),t.m(e,l)),c[6]?u&&(U(),I(u,1,1,()=>{u=null}),G()):u?(u.p(c,f),f&64&&C(u,1)):(u=he(c),u.c(),C(u,1),u.m(e,null)),(!i||f&48)&&ue(e,"--aspect-ratio",c[4]/c[5]||"16/9"),(!i||f&8)&&h(e,"title",c[3])},i(c){i||(C(t),C(u),i=!0)},o(c){I(t),I(u),i=!1},d(c){c&&d(e),o[s].d(),u&&u.d()}}}function st(n,e,s){let{$$slots:t={},$$scope:l}=e;const i=Te(t);let{id:r=null}=e,{altThumb:o=!1}=e,{animations:a=!0}=e,u="",c=0,f=0,m={};ge(async()=>{m=await(await fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${r}&format=json`)).json(),s(3,u=m==null?void 0:m.title),s(4,c=m==null?void 0:m.width),s(5,f=m==null?void 0:m.height)});let k=!1;const B=i.default,_=i.thumbnail,E=()=>s(6,k=!0),w=()=>s(6,k=!0),g=()=>s(6,k=!0);return n.$$set=y=>{"id"in y&&s(0,r=y.id),"altThumb"in y&&s(1,o=y.altThumb),"animations"in y&&s(2,a=y.animations),"$$scope"in y&&s(13,l=y.$$scope)},[r,o,a,u,c,f,k,B,_,t,E,w,g,l]}class nt extends F{constructor(e){super(),W(this,e,st,lt,q,{id:0,altThumb:1,animations:2})}}function it(n,e={}){let s;const t=i=>{const r=i[0].isIntersecting?"enter":"exit";n.dispatchEvent(new CustomEvent(r))},l=({root:i,top:r,bottom:o})=>{const a=r?r*-1:0,u=o?o*-1:0,c=`${a}px 0px ${u}px 0px`,f={root:i,rootMargin:c};s&&s.disconnect(),s=new IntersectionObserver(t,f),s.observe(n)};return l(e),{update(i){l(i)},destroy(){s&&s.disconnect()}}}function de(n,e,s){const t=n.slice();return t[4]=e[s],t}function _e(n){let e,s;return e=new nt({props:{id:n[2][n[0]],animations:!1}}),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){K(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.id=t[2][t[0]]),e.$set(i)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function at(n){return{c:D,l:D,m:D,p:D,d:D}}function rt(n){let e,s=n[7]+"",t;return{c(){e=b("p"),t=O(s),this.h()},l(l){e=v(l,"P",{class:!0});var i=V(e);t=R(i,s),i.forEach(d),this.h()},h(){h(e,"class","svelte-w0rhf3")},m(l,i){T(l,e,i),p(e,t)},p:D,d(l){l&&d(e)}}}function ot(n){let e,s="Loading...";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h(){h(e,"class","svelte-w0rhf3")},m(t,l){T(t,e,l)},p:D,d(t){t&&d(e)}}}function ct(n){let e,s,t,l={ctx:n,current:null,token:null,hasCatch:!0,pending:ot,then:rt,catch:at,value:7,error:8};return He(ft(n[4]),l),{c(){e=b("div"),s=P(),t=Y(),l.block.c(),this.h()},l(i){e=v(i,"DIV",{class:!0,style:!0}),V(e).forEach(d),s=M(i),t=Y(),l.block.l(i),this.h()},h(){h(e,"class","thumbnail-image svelte-w0rhf3"),h(e,"style",`background-image: url(https://img.youtube.com/vi/${n[4]}/0.jpg);`)},m(i,r){T(i,e,r),T(i,s,r),T(i,t,r),l.block.m(i,l.anchor=r),l.mount=()=>t.parentNode,l.anchor=t},p(i,r){n=i,Se(l,n,r)},d(i){i&&(d(e),d(s),d(t)),l.block.d(i),l.token=null,l=null}}}function pe(n){let e,s,t,l,i,r;s=new Ae({props:{class:"thumbnail-button",$$slots:{default:[ct]},$$scope:{ctx:n}}});function o(...a){return n[3](n[4],...a)}return{c(){e=b("div"),Q(s.$$.fragment),t=P(),this.h()},l(a){e=v(a,"DIV",{class:!0});var u=V(e);Z(s.$$.fragment,u),t=M(u),u.forEach(d),this.h()},h(){h(e,"class","thumbnail-container svelte-w0rhf3")},m(a,u){T(a,e,u),K(s,e,null),p(e,t),l=!0,i||(r=z(e,"click",o),i=!0)},p(a,u){n=a;const c={};u&512&&(c.$$scope={dirty:u,ctx:n}),s.$set(c)},i(a){l||(C(s.$$.fragment,a),l=!0)},o(a){I(s.$$.fragment,a),l=!1},d(a){a&&d(e),X(s),i=!1,r()}}}function ut(n){let e,s=n[0],t,l,i,r=_e(n),o=le(n[2]),a=[];for(let c=0;c<o.length;c+=1)a[c]=pe(de(n,o,c));const u=c=>I(a[c],1,1,()=>{a[c]=null});return{c(){e=b("div"),r.c(),t=P(),l=b("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=v(c,"DIV",{class:!0});var f=V(e);r.l(f),t=M(f),l=v(f,"DIV",{class:!0});var m=V(l);for(let k=0;k<a.length;k+=1)a[k].l(m);m.forEach(d),f.forEach(d),this.h()},h(){h(l,"class","grid svelte-w0rhf3"),h(e,"class","container svelte-w0rhf3")},m(c,f){T(c,e,f),r.m(e,null),p(e,t),p(e,l);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(l,null);i=!0},p(c,[f]){if(f&1&&q(s,s=c[0])?(U(),I(r,1,1,D),G(),r=_e(c),r.c(),C(r,1),r.m(e,t)):r.p(c,f),f&6){o=le(c[2]);let m;for(m=0;m<o.length;m+=1){const k=de(c,o,m);a[m]?(a[m].p(k,f),C(a[m],1)):(a[m]=pe(k),a[m].c(),C(a[m],1),a[m].m(l,null))}for(U(),m=o.length;m<a.length;m+=1)u(m);G()}},i(c){if(!i){C(r);for(let f=0;f<o.length;f+=1)C(a[f]);i=!0}},o(c){I(r),a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)I(a[f]);i=!1},d(c){c&&d(e),r.d(c),we(a,c)}}}async function ft(n){const s=await(await fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${n}&format=json`)).json();return s==null?void 0:s.title}function mt(n,e,s){let t,l=Le(0);Ve(n,l,o=>s(0,t=o));const i=["fthlphRmsjY","dd7pqAPd-p0","M2R3zgvbZ30","0xPyRA-he5c","0UCrI7NJ5KI","yfaQM3aHgxE","sC3FqzpDrpQ","CO2kYUMpYPk","fs0NUGmsa10","4VlwyI0EHo4"];return[t,l,i,(o,a)=>{l.set(i.indexOf(o))}]}class ht extends F{constructor(e){super(),W(this,e,mt,ut,q,{})}}function be(n,e,s){const t=n.slice();return t[3]=e[s],t[5]=s,t}function dt(n){let e,s;return{c(){e=b("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){J(e.src,s=n[3].image)||h(e,"src",s),h(e,"alt",n[3].title),h(e,"class","svelte-1imfdr6")},m(t,l){T(t,e,l)},p:D,d(t){t&&d(e)}}}function _t(n){let e,s;return{c(){e=b("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){J(e.src,s=n[3].image)||h(e,"src",s),h(e,"alt",n[3].title),h(e,"class","svelte-1imfdr6")},m(t,l){T(t,e,l)},p:D,d(t){t&&d(e)}}}function ve(n){let e,s,t,l,i=n[3].title+"",r,o,a,u,c=n[3].description+"",f,m,k,B,_,E=n[3].details+"",w,g,y,$,A,H=n[5]%2==0&&dt(n),L=n[5]%2==1&&_t(n);return{c(){e=b("div"),H&&H.c(),s=P(),t=b("div"),l=b("h2"),r=O(i),o=P(),a=b("span"),u=O("- "),f=O(c),m=P(),k=b("hr"),B=P(),_=b("p"),w=O(E),g=P(),L&&L.c(),y=P(),this.h()},l(j){e=v(j,"DIV",{class:!0});var S=V(e);H&&H.l(S),s=M(S),t=v(S,"DIV",{class:!0});var N=V(t);l=v(N,"H2",{class:!0});var x=V(l);r=R(x,i),o=M(x),a=v(x,"SPAN",{class:!0});var se=V(a);u=R(se,"- "),f=R(se,c),se.forEach(d),x.forEach(d),m=M(N),k=v(N,"HR",{class:!0}),B=M(N),_=v(N,"P",{});var oe=V(_);w=R(oe,E),oe.forEach(d),N.forEach(d),g=M(S),L&&L.l(S),y=M(S),S.forEach(d),this.h()},h(){h(a,"class","svelte-1imfdr6"),h(l,"class","svelte-1imfdr6"),h(k,"class","svelte-1imfdr6"),h(t,"class","svelte-1imfdr6"),h(e,"class",Me(`panel ${n[5]%2==0?"left":"right"}-panel`)+" svelte-1imfdr6")},m(j,S){T(j,e,S),H&&H.m(e,null),p(e,s),p(e,t),p(t,l),p(l,r),p(l,o),p(l,a),p(a,u),p(a,f),p(t,m),p(t,k),p(t,B),p(t,_),p(_,w),p(e,g),L&&L.m(e,null),p(e,y),$||(A=[De(it.call(null,e)),z(e,"enter",bt)],$=!0)},p(j,S){j[5]%2==0&&H.p(j,S),j[5]%2==1&&L.p(j,S)},d(j){j&&d(e),H&&H.d(),L&&L.d(),$=!1,ke(A)}}}function pt(n){let e,s,t='<div class="header-container svelte-1imfdr6"><img src="/img/animated_java_icon.svg" class="svelte-1imfdr6"/> <div class="svelte-1imfdr6"><h1 class="svelte-1imfdr6">Welcome to Animated Java!</h1> <h3 class="svelte-1imfdr6">A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.</h3></div></div>',l,i,r,o,a,u="Made with Animated Java!",c,f,m,k,B,_,E=le(n[0]),w=[];for(let g=0;g<E.length;g+=1)w[g]=ve(be(n,E,g));return B=new ht({}),{c(){e=b("div"),s=b("div"),s.innerHTML=t,l=P(),i=b("div");for(let g=0;g<w.length;g+=1)w[g].c();r=P(),o=b("div"),a=b("h2"),a.textContent=u,c=P(),f=b("hr"),m=P(),k=b("div"),Q(B.$$.fragment),this.h()},l(g){e=v(g,"DIV",{class:!0});var y=V(e);s=v(y,"DIV",{class:!0,"data-svelte-h":!0}),te(s)!=="svelte-5hwf3t"&&(s.innerHTML=t),l=M(y),i=v(y,"DIV",{class:!0});var $=V(i);for(let L=0;L<w.length;L+=1)w[L].l($);$.forEach(d),r=M(y),o=v(y,"DIV",{class:!0});var A=V(o);a=v(A,"H2",{class:!0,"data-svelte-h":!0}),te(a)!=="svelte-1iguss2"&&(a.textContent=u),c=M(A),f=v(A,"HR",{class:!0}),m=M(A),k=v(A,"DIV",{class:!0});var H=V(k);Z(B.$$.fragment,H),H.forEach(d),A.forEach(d),y.forEach(d),this.h()},h(){h(s,"class","center-container svelte-1imfdr6"),h(i,"class","panel-container svelte-1imfdr6"),h(a,"class","section-title svelte-1imfdr6"),h(f,"class","svelte-1imfdr6"),h(k,"class","center-container svelte-1imfdr6"),h(o,"class","made-with-aj svelte-1imfdr6"),h(e,"class","page svelte-1imfdr6")},m(g,y){T(g,e,y),p(e,s),p(e,l),p(e,i);for(let $=0;$<w.length;$+=1)w[$]&&w[$].m(i,null);p(e,r),p(e,o),p(o,a),p(o,c),p(o,f),p(o,m),p(o,k),K(B,k,null),_=!0},p(g,[y]){if(y&1){E=le(g[0]);let $;for($=0;$<E.length;$+=1){const A=be(g,E,$);w[$]?w[$].p(A,y):(w[$]=ve(A),w[$].c(),w[$].m(i,null))}for(;$<w.length;$+=1)w[$].d(1);w.length=E.length}},i(g){_||(C(B.$$.fragment,g),_=!0)},o(g){I(B.$$.fragment,g),_=!1},d(g){g&&d(e),we(w,g),X(B)}}}const bt=n=>{n.target.classList.contains("panel-fade-in")||n.target.classList.add("panel-fade-in")};function vt(n){let e,s;return ge(()=>{e=document.querySelector(".on-this-page"),s=document.querySelector("main"),e&&(e.style.display="none"),s&&(s.style.overflow="visible")}),Pe(()=>{e&&(e.style.display="block"),s&&(s.style.overflow="hidden")}),[[{title:"100% Vanilla Minecraft!",description:"No mods required!",details:"Built for Map Makers and Data Pack Developers.",image:"/img/vanilla.png"},{title:"Variants",description:"Swap out textures on the fly!",details:"Swap out textures on a Rig in-game with a single function call.",image:"/img/variants.gif"},{title:"Advanced Easing Options",description:"Make your animations pop!",details:"Choose from a variety of easing options to make your animations more dynamic.",image:"/img/easing.gif"},{title:"Vanilla Models",description:"Create animations without a Resource Pack!",details:"Animated Java supports vanilla item and block models, allowing you to create animated models without a Resource Pack!",image:"/img/resourcepackless.png"},{title:"Heavily Optimized",description:"Worry less about performance!",details:"Animated Java has had hundreds of hours put into performance testing, and optimization. Worry less about performance and more about creating!",image:"/img/performance.png"}]]}class $t extends F{constructor(e){super(),W(this,e,vt,pt,q,{})}}export{$t as component};
