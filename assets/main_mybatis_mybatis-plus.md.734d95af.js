import{_ as s,a,c as l,b as n}from"./app.062e7d47.js";const d=JSON.parse('{"title":"mybatis-plus","description":"","frontmatter":{"title":"mybatis-plus","tags":["mybatis","mysql"],"categories":"mybatis","abbrlink":"e528bb3e"},"headers":[{"level":2,"title":"\u5206\u9875\u67E5\u8BE2","slug":"\u5206\u9875\u67E5\u8BE2","link":"#\u5206\u9875\u67E5\u8BE2","children":[{"level":3,"title":"\u5185\u7F6Esql\u8BED\u53E5","slug":"\u5185\u7F6Esql\u8BED\u53E5","link":"#\u5185\u7F6Esql\u8BED\u53E5","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49sql","slug":"\u81EA\u5B9A\u4E49sql","link":"#\u81EA\u5B9A\u4E49sql","children":[]}]}],"relativePath":"main/mybatis/mybatis-plus.md","lastUpdated":1662368311000}'),p={name:"main/mybatis/mybatis-plus.md"},e=n(`<h1 id="\u8BB0\u5F55-mybatis-plus\u7684\u5751" tabindex="-1">\u8BB0\u5F55,mybatis-plus\u7684\u5751 <a class="header-anchor" href="#\u8BB0\u5F55-mybatis-plus\u7684\u5751" aria-hidden="true">#</a></h1><h2 id="\u5206\u9875\u67E5\u8BE2" tabindex="-1">\u5206\u9875\u67E5\u8BE2 <a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a></h2><h3 id="\u5185\u7F6Esql\u8BED\u53E5" tabindex="-1">\u5185\u7F6Esql\u8BED\u53E5 <a class="header-anchor" href="#\u5185\u7F6Esql\u8BED\u53E5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49sql" tabindex="-1">\u81EA\u5B9A\u4E49sql <a class="header-anchor" href="#\u81EA\u5B9A\u4E49sql" aria-hidden="true">#</a></h3><p>\u5728\u6267\u884Csql\u524D,\u6267\u884C,\u62E6\u622A\u5668,\u542F\u52A8\u5206\u9875\u67E5\u8BE2</p><p>\u5411\u52A8\u6001\u63A5\u53E3\u65B9\u6CD5\u4F20\u5165Page\u5BF9\u8C61,</p><p>\u83B7\u53D6\u5230\u7684\u96C6\u5408,set\u8FDB\u4E4B\u524D\u7684Page\u5BF9\u8C61</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findAllEmp</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Page</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Emp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> empPage</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    PageHelper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startPage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">empPage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCurrent</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;">empPage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSize</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Emp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> empList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> baseMapper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findAllEmp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">empPage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Page</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Emp</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> empPage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setRecords</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">empList</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),o=[e];function t(r,c,i,y,D,A){return a(),l("div",null,o)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
