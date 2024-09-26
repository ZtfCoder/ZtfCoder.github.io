import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.sGs2IBkb.js";const g=JSON.parse('{"title":"mybatis-plus","description":"","frontmatter":{"title":"mybatis-plus","tags":["mybatis","mysql"],"categories":"mybatis","abbrlink":"e528bb3e"},"headers":[],"relativePath":"main/mybatis/mybatis-plus.md","filePath":"main/mybatis/mybatis-plus.md","lastUpdated":1662368311000}'),n={name:"main/mybatis/mybatis-plus.md"};function l(p,s,h,r,k,d){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="记录-mybatis-plus的坑" tabindex="-1">记录,mybatis-plus的坑 <a class="header-anchor" href="#记录-mybatis-plus的坑" aria-label="Permalink to &quot;记录,mybatis-plus的坑&quot;">​</a></h1><h2 id="分页查询" tabindex="-1">分页查询 <a class="header-anchor" href="#分页查询" aria-label="Permalink to &quot;分页查询&quot;">​</a></h2><h3 id="内置sql语句" tabindex="-1">内置sql语句 <a class="header-anchor" href="#内置sql语句" aria-label="Permalink to &quot;内置sql语句&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="自定义sql" tabindex="-1">自定义sql <a class="header-anchor" href="#自定义sql" aria-label="Permalink to &quot;自定义sql&quot;">​</a></h3><p>在执行sql前,执行,拦截器,启动分页查询</p><p>向动态接口方法传入Page对象,</p><p>获取到的集合,set进之前的Page对象</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findAllEmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Page</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Emp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empPage) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PageHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startPage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(empPage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCurrent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),empPage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Emp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; empList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baseMapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findAllEmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(empPage);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Page&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Emp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; page </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empPage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRecords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(empList);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9)]))}const m=a(n,[["render",l]]);export{g as __pageData,m as default};
