import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1baa841b.js";const b=JSON.parse('{"title":"mybatis","description":"","frontmatter":{"title":"mybatis","tags":["mybatis","mysql"],"categories":"mybatis","abbrlink":"15832afd"},"headers":[],"relativePath":"main/mybatis/mybatis问题.md","filePath":"main/mybatis/mybatis问题.md","lastUpdated":1699426983000}'),p={name:"main/mybatis/mybatis问题.md"},e=l(`<h1 id="mybatis-使用的小问题" tabindex="-1">mybatis 使用的小问题 <a class="header-anchor" href="#mybatis-使用的小问题" aria-label="Permalink to &quot;mybatis 使用的小问题&quot;">​</a></h1><h3 id="动态模糊搜索" tabindex="-1">动态模糊搜索 <a class="header-anchor" href="#动态模糊搜索" aria-label="Permalink to &quot;动态模糊搜索&quot;">​</a></h3><p><strong>第一种 利用mysql 函数拼接</strong></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title !=null and title!=&#39;&#39; &quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    s.title_ like CONCAT(&#39;%&#39;,CONCAT(#{title},&#39;%&#39;))</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">if</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title !=null and title!=&#39;&#39; &quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    s.title_ like CONCAT(&#39;%&#39;,CONCAT(#{title},&#39;%&#39;))</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">if</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>第二种 通过mybatis 的bind 标签进行绑定</strong></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title !=null and title!=&#39;&#39; &quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">bind</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;%&#39; + title + &#39;%&#39;&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    s.title_ like #{title}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">if</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title !=null and title!=&#39;&#39; &quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">bind</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;%&#39; + title + &#39;%&#39;&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    s.title_ like #{title}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">if</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="动态sql-条件查询" tabindex="-1">动态sql 条件查询 <a class="header-anchor" href="#动态sql-条件查询" aria-label="Permalink to &quot;动态sql 条件查询&quot;">​</a></h3><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">select s.* from student</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">where</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title !=null and title!=&#39;&#39; &quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        s.title_ like CONCAT(&#39;%&#39;,CONCAT(#{title},&#39;%&#39;))</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cid3!= null&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        and cid3_ =#{cid3}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;brandId!=null&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        and brand_id_=#{brandId}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">where</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">select s.* from student</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">where</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">if</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title !=null and title!=&#39;&#39; &quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        s.title_ like CONCAT(&#39;%&#39;,CONCAT(#{title},&#39;%&#39;))</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">if</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">if</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cid3!= null&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        and cid3_ =#{cid3}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">if</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">if</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;brandId!=null&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        and brand_id_=#{brandId}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">if</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">where</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>我们需要动态根据<code>titl </code> <code>cid3</code> <code>brandId</code> 这三个值去搜索,需要使用<code>mybatis</code> 的 <code>where</code> 标签 它可以动态帮我们判断是否需要添加<code>and</code> 语句如果不需要,则,会把前面的<code>and</code> 关键字删除</p>`,9),t=[e];function o(c,r,i,E,y,d){return a(),n("div",null,t)}const m=s(p,[["render",o]]);export{b as __pageData,m as default};
