import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1baa841b.js";const b=JSON.parse('{"title":"mybatis-plus","description":"","frontmatter":{"title":"mybatis-plus","tags":["mybatis","mysql"],"categories":"mybatis","abbrlink":"e528bb3e"},"headers":[],"relativePath":"src/main/mybatis/mybatis-plus.md","filePath":"src/main/mybatis/mybatis-plus.md","lastUpdated":1713749248000}'),l={name:"src/main/mybatis/mybatis-plus.md"},p=e(`<h1 id="记录-mybatis-plus的坑" tabindex="-1">记录,mybatis-plus的坑 <a class="header-anchor" href="#记录-mybatis-plus的坑" aria-label="Permalink to &quot;记录,mybatis-plus的坑&quot;">​</a></h1><h2 id="分页查询" tabindex="-1">分页查询 <a class="header-anchor" href="#分页查询" aria-label="Permalink to &quot;分页查询&quot;">​</a></h2><h3 id="内置sql语句" tabindex="-1">内置sql语句 <a class="header-anchor" href="#内置sql语句" aria-label="Permalink to &quot;内置sql语句&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="自定义sql" tabindex="-1">自定义sql <a class="header-anchor" href="#自定义sql" aria-label="Permalink to &quot;自定义sql&quot;">​</a></h3><p>在执行sql前,执行,拦截器,启动分页查询</p><p>向动态接口方法传入Page对象,</p><p>获取到的集合,set进之前的Page对象</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">findAllEmp</span><span style="color:#E1E4E8;">(Page</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Emp</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> empPage) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    PageHelper.</span><span style="color:#B392F0;">startPage</span><span style="color:#E1E4E8;">(empPage.</span><span style="color:#B392F0;">getCurrent</span><span style="color:#E1E4E8;">(),empPage.</span><span style="color:#B392F0;">getSize</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    List&lt;</span><span style="color:#F97583;">Emp</span><span style="color:#E1E4E8;">&gt; empList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> baseMapper.</span><span style="color:#B392F0;">findAllEmp</span><span style="color:#E1E4E8;">(empPage);</span></span>
<span class="line"><span style="color:#E1E4E8;">    Page&lt;</span><span style="color:#F97583;">Emp</span><span style="color:#E1E4E8;">&gt; page </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> empPage.</span><span style="color:#B392F0;">setRecords</span><span style="color:#E1E4E8;">(empList);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findAllEmp</span><span style="color:#24292E;">(Page</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Emp</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> empPage) {</span></span>
<span class="line"><span style="color:#24292E;">    PageHelper.</span><span style="color:#6F42C1;">startPage</span><span style="color:#24292E;">(empPage.</span><span style="color:#6F42C1;">getCurrent</span><span style="color:#24292E;">(),empPage.</span><span style="color:#6F42C1;">getSize</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    List&lt;</span><span style="color:#D73A49;">Emp</span><span style="color:#24292E;">&gt; empList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> baseMapper.</span><span style="color:#6F42C1;">findAllEmp</span><span style="color:#24292E;">(empPage);</span></span>
<span class="line"><span style="color:#24292E;">    Page&lt;</span><span style="color:#D73A49;">Emp</span><span style="color:#24292E;">&gt; page </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> empPage.</span><span style="color:#6F42C1;">setRecords</span><span style="color:#24292E;">(empList);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),o=[p];function t(r,c,i,y,E,m){return a(),n("div",null,o)}const g=s(l,[["render",t]]);export{b as __pageData,g as default};
