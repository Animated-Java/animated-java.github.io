import{s as G,e as v,t as d,a as w,c as P,b as S,d as h,f as l,g as j,r as L,i as y,h as H,j as U,k as I,n as R}from"../chunks/scheduler.D0aDYUtM.js";import{S as z,i as J,b as A,d as _,m as g,a as b,t as x,e as k}from"../chunks/index.IO6a9142.js";import{C as q}from"../chunks/CodeFence.3rmawzUc.js";/* empty css                                                         */import{A as K}from"../chunks/Admonition.KKpBQ4qB.js";import"../chunks/entry.zuXjlYGg.js";import{L as M}from"../chunks/Link.CX7m0Yr9.js";import{f as N}from"../chunks/kit-docs.Bmj6mt9D.js";function O(p){let a;return{c(){a=d("#")},l(n){a=h(n,"#")},m(n,o){y(n,a,o)},d(n){n&&l(a)}}}function Q(p){let a,n,o;return a=new q({props:{title:"foo/as_root.mcfunction",lang:"python",ext:"py",linesCount:11,code:`<pre class="shiki " style="background-color: #fff" tabindex="0"><code><span class="line"><span style="color: #BABED8">execute </span><span style="color: #89DDFF">\\</span></span>
<span class="line"><span style="color: #BABED8">  </span><span style="color: #676E95; font-style: italic"># Get the root entity context</span></span>
<span class="line"><span style="color: #BABED8">  </span><span style="color: #89DDFF; font-style: italic">as</span><span style="color: #BABED8"> </span><span style="color: #89DDFF">@</span><span style="color: #BABED8">e</span><span style="color: #89DDFF">[</span><span style="color: #BABED8">tag=aj</span><span style="color: #89DDFF">.</span><span style="color: #89DDFF; font-style: italic">global</span><span style="color: #89DDFF">.</span><span style="color: #F07178">root</span><span style="color: #89DDFF">]</span><span style="color: #BABED8"> </span><span style="color: #89DDFF">\\</span></span>
<span class="line"><span style="color: #BABED8">  </span><span style="color: #676E95; font-style: italic"># Execute the command on the root&#39;s passengers</span></span>
<span class="line"><span style="color: #BABED8">  on passengers </span><span style="color: #89DDFF">\\</span></span>
<span class="line"><span style="color: #BABED8">  </span><span style="color: #676E95; font-style: italic"># Filter out the data entity from the passengers</span></span>
<span class="line"><span style="color: #BABED8">  </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #BABED8"> entity </span><span style="color: #89DDFF">@</span><span style="color: #BABED8">s</span><span style="color: #89DDFF">[</span><span style="color: #BABED8">tag=aj</span><span style="color: #89DDFF">.</span><span style="color: #89DDFF; font-style: italic">global</span><span style="color: #89DDFF">.</span><span style="color: #F07178">data</span><span style="color: #89DDFF">]</span><span style="color: #BABED8"> </span><span style="color: #89DDFF">\\</span></span>
<span class="line"><span style="color: #BABED8">run </span><span style="color: #89DDFF">\\</span></span>
<span class="line"><span style="color: #BABED8">  </span><span style="color: #676E95; font-style: italic"># Run our select function with the Camera&#39;s UUID</span></span>
<span class="line"><span style="color: #BABED8">  function foo</span><span style="color: #89DDFF">:</span><span style="color: #BABED8">select </span><span style="color: #89DDFF; font-style: italic">with</span><span style="color: #BABED8"> entity </span><span style="color: #89DDFF">@</span><span style="color: #BABED8">s data</span><span style="color: #89DDFF">.</span><span style="color: #F07178">cameras</span><span style="color: #89DDFF">.&lt;</span><span style="color: #BABED8">camera_name</span><span style="color: #89DDFF">&gt;</span></span>
<span class="line"></span></code></pre>`}}),n=new q({props:{title:"foo/select.mcfunction",lang:"python",ext:"py",linesCount:2,code:`<pre class="shiki " style="background-color: #fff" tabindex="0"><code><span class="line"><span style="color: #BABED8">$execute </span><span style="color: #89DDFF; font-style: italic">as</span><span style="color: #BABED8"> $</span><span style="color: #89DDFF">(</span><span style="color: #BABED8">uuid</span><span style="color: #89DDFF">)</span><span style="color: #BABED8"> run spectate </span><span style="color: #89DDFF">@</span><span style="color: #BABED8">s </span><span style="color: #89DDFF">@</span><span style="color: #BABED8">p</span></span>
<span class="line"></span></code></pre>`}}),{c(){A(a.$$.fragment),A(n.$$.fragment)},l(e){_(a.$$.fragment,e),_(n.$$.fragment,e)},m(e,r){g(a,e,r),g(n,e,r),o=!0},p:R,i(e){o||(b(a.$$.fragment,e),b(n.$$.fragment,e),o=!0)},o(e){x(a.$$.fragment,e),x(n.$$.fragment,e),o=!1},d(e){k(a,e),k(n,e)}}}function T(p){let a,n=p[0].title+"",o,e,r,F=p[0].description+"",$,u,c,i,C,E,D,f;return i=new M({props:{class:"header-anchor",href:"#force-the-player-to-spectate-a-camera","aria-hidden":"true",$$slots:{default:[O]},$$scope:{ctx:p}}}),D=new K({props:{type:"info",title:"Example",$$slots:{default:[Q]},$$scope:{ctx:p}}}),{c(){a=v("h1"),o=d(n),e=w(),r=v("p"),$=d(F),u=w(),c=v("h2"),A(i.$$.fragment),C=d(" Force the Player to Spectate a Camera"),E=w(),A(D.$$.fragment),this.h()},l(s){a=P(s,"H1",{});var t=S(a);o=h(t,n),t.forEach(l),e=j(s),r=P(s,"P",{});var B=S(r);$=h(B,F),B.forEach(l),u=j(s),c=P(s,"H2",{id:!0,tabindex:!0});var m=S(c);_(i.$$.fragment,m),C=h(m," Force the Player to Spectate a Camera"),m.forEach(l),E=j(s),_(D.$$.fragment,s),this.h()},h(){L(c,"id","force-the-player-to-spectate-a-camera"),L(c,"tabindex","-1")},m(s,t){y(s,a,t),H(a,o),y(s,e,t),y(s,r,t),H(r,$),y(s,u,t),y(s,c,t),g(i,c,null),H(c,C),y(s,E,t),g(D,s,t),f=!0},p(s,[t]){(!f||t&1)&&n!==(n=s[0].title+"")&&U(o,n),(!f||t&1)&&F!==(F=s[0].description+"")&&U($,F);const B={};t&2&&(B.$$scope={dirty:t,ctx:s}),i.$set(B);const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),D.$set(m)},i(s){f||(b(i.$$.fragment,s),b(D.$$.fragment,s),f=!0)},o(s){x(i.$$.fragment,s),x(D.$$.fragment,s),f=!1},d(s){s&&(l(a),l(e),l(r),l(u),l(c),l(E)),k(i),k(D,s)}}}function V(p,a,n){let o;return I(p,N,e=>n(0,o=e)),[o]}class ts extends z{constructor(a){super(),J(this,a,V,T,G,{})}}export{ts as component};
