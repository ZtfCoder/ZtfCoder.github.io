import{_ as s,a,c as n,b as l}from"./app.062e7d47.js";const C=JSON.parse('{"title":"mybatis","description":"","frontmatter":{"title":"mybatis","tags":["mybatis","mysql"],"categories":"mybatis","abbrlink":"15832afd"},"headers":[{"level":3,"title":"\u52A8\u6001\u6A21\u7CCA\u641C\u7D22","slug":"\u52A8\u6001\u6A21\u7CCA\u641C\u7D22","link":"#\u52A8\u6001\u6A21\u7CCA\u641C\u7D22","children":[]},{"level":3,"title":"\u52A8\u6001sql \u6761\u4EF6\u67E5\u8BE2","slug":"\u52A8\u6001sql-\u6761\u4EF6\u67E5\u8BE2","link":"#\u52A8\u6001sql-\u6761\u4EF6\u67E5\u8BE2","children":[]}],"relativePath":"main/mybatis/mybatis\u95EE\u9898.md","lastUpdated":1662368311000}'),p={name:"main/mybatis/mybatis\u95EE\u9898.md"},o=l(`<h1 id="mybatis-\u4F7F\u7528\u7684\u5C0F\u95EE\u9898" tabindex="-1">mybatis \u4F7F\u7528\u7684\u5C0F\u95EE\u9898 <a class="header-anchor" href="#mybatis-\u4F7F\u7528\u7684\u5C0F\u95EE\u9898" aria-hidden="true">#</a></h1><h3 id="\u52A8\u6001\u6A21\u7CCA\u641C\u7D22" tabindex="-1">\u52A8\u6001\u6A21\u7CCA\u641C\u7D22 <a class="header-anchor" href="#\u52A8\u6001\u6A21\u7CCA\u641C\u7D22" aria-hidden="true">#</a></h3><p><strong>\u7B2C\u4E00\u79CD \u5229\u7528mysql \u51FD\u6570\u62FC\u63A5</strong></p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">title !=null and title!=&#39;&#39; </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.title_ like CONCAT(&#39;%&#39;,CONCAT(#{title},&#39;%&#39;))</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u7B2C\u4E8C\u79CD \u901A\u8FC7mybatis \u7684bind \u6807\u7B7E\u8FDB\u884C\u7ED1\u5B9A</strong></p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">title !=null and title!=&#39;&#39; </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bind</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;%&#39; + title + &#39;%&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.title_ like #{title}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u52A8\u6001sql-\u6761\u4EF6\u67E5\u8BE2" tabindex="-1">\u52A8\u6001sql \u6761\u4EF6\u67E5\u8BE2 <a class="header-anchor" href="#\u52A8\u6001sql-\u6761\u4EF6\u67E5\u8BE2" aria-hidden="true">#</a></h3><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#A6ACCD;">select s.* from student</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">where</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">title !=null and title!=&#39;&#39; </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        s.title_ like CONCAT(&#39;%&#39;,CONCAT(#{title},&#39;%&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cid3!= null</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        and cid3_ =#{cid3}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">brandId!=null</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        and brand_id_=#{brandId}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">if</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">where</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u9700\u8981\u52A8\u6001\u6839\u636E<code>titl </code> <code>cid3</code> <code>brandId</code> \u8FD9\u4E09\u4E2A\u503C\u53BB\u641C\u7D22,\u9700\u8981\u4F7F\u7528<code>mybatis</code> \u7684 <code>where</code> \u6807\u7B7E \u5B83\u53EF\u4EE5\u52A8\u6001\u5E2E\u6211\u4EEC\u5224\u65AD\u662F\u5426\u9700\u8981\u6DFB\u52A0<code>and</code> \u8BED\u53E5\u5982\u679C\u4E0D\u9700\u8981,\u5219,\u4F1A\u628A\u524D\u9762\u7684<code>and</code> \u5173\u952E\u5B57\u5220\u9664</p>`,9),t=[o];function e(c,r,D,F,y,i){return a(),n("div",null,t)}const u=s(p,[["render",e]]);export{C as __pageData,u as default};
