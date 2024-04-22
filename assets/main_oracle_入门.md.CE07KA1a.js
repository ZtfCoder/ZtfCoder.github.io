import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.4sxKuair.js";const g=JSON.parse('{"title":"oracle入门","description":"","frontmatter":{"title":"oracle入门","tags":["oracle"],"categories":"oracle","abbrlink":"87585a71"},"headers":[],"relativePath":"main/oracle/入门.md","filePath":"main/oracle/入门.md","lastUpdated":1713751059000}'),e={name:"main/oracle/入门.md"},l=n(`<h2 id="登录到oracle" tabindex="-1">登录到oracle <a class="header-anchor" href="#登录到oracle" aria-label="Permalink to &quot;登录到oracle&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sqlplus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system/root</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		用户名/密码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h2><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建一个表空间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> tablespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> helloworld</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">datafile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C:\\Users\\zhangtengfei\\tablespace\\helloworld.dbf&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100m</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">autoextend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> --自动扩充</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 10m; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--每次扩容10m</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建用户 一个表空间 可以有多个用户</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ztf1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> -- 用户名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">identified </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> root</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> -- 密码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tablespace helloworld </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">--表空间</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,4),p=[l];function t(h,r,k,d,c,o){return i(),a("div",null,p)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
