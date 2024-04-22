import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.4sxKuair.js";const y=JSON.parse('{"title":"mysql DDL","description":"","frontmatter":{"title":"mysql DDL","tags":"mysql","categories":"mysql","abbrlink":"85d87be0"},"headers":[],"relativePath":"src/main/mysql/数据库DDL.md","filePath":"src/main/mysql/数据库DDL.md","lastUpdated":1713751059000}'),l={name:"src/main/mysql/数据库DDL.md"},e=n(`<h1 id="ddl-语言" tabindex="-1">DDL 语言 <a class="header-anchor" href="#ddl-语言" aria-label="Permalink to &quot;DDL 语言&quot;">​</a></h1><p>数据库操作语言</p><h2 id="新建表" tabindex="-1">新建表 <a class="header-anchor" href="#新建表" aria-label="Permalink to &quot;新建表&quot;">​</a></h2><p>关键词 create table;</p><p>varchar(20) 字符串 小括号内限制长度</p><p>char：字符类型 存放 0-255 个字节 不足用空格替代</p><p>datetime：时间类型</p><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> exists</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuifo(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	stuId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gander </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bornDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datetime</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>尽量不要使用关键字作为了表字段,否则,可能会在后期,插入时,出错</p><h2 id="约束" tabindex="-1">约束 <a class="header-anchor" href="#约束" aria-label="Permalink to &quot;约束&quot;">​</a></h2><h3 id="_1-非空约束" tabindex="-1">1.非空约束 <a class="header-anchor" href="#_1-非空约束" aria-label="Permalink to &quot;1.非空约束&quot;">​</a></h3><p>not null</p><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> exists</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuinfo(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	stuId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gender </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bornDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATETIME</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="单独删除" tabindex="-1">单独删除 <a class="header-anchor" href="#单独删除" aria-label="Permalink to &quot;单独删除&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">modify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字段</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="单独添加" tabindex="-1">单独添加 <a class="header-anchor" href="#单独添加" aria-label="Permalink to &quot;单独添加&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">modify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字段 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not null</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-默认值-default" tabindex="-1">2.默认值(default) <a class="header-anchor" href="#_2-默认值-default" aria-label="Permalink to &quot;2.默认值(default)&quot;">​</a></h3><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuinfo(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gender </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bornDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    school </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;泸职院&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-列描述-comment" tabindex="-1">3.列描述(comment) <a class="header-anchor" href="#_3-列描述-comment" aria-label="Permalink to &quot;3.列描述(comment)&quot;">​</a></h3><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuinfo(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;学号&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;姓名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gender </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;性别&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bornDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;出生日期&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    school </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;泸职院&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;学校&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-自动填充-zerofill" tabindex="-1">4.自动填充(zerofill) <a class="header-anchor" href="#_4-自动填充-zerofill" aria-label="Permalink to &quot;4.自动填充(zerofill)&quot;">​</a></h3><p>a:如果某一数值列规定了 zeroﬁll,则自动把此列变为无符号整形</p><p>b:规定了 zeroﬁll 的数据列，如果数据列的长 度没达到规定长度，则在数据前面自动填充 0</p><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuinfo(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> primary key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;姓名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gender </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;性别&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ZEROFILL,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bornDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;出生日期&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    school </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;泸职院&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;学校&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-主键约束-primary-key" tabindex="-1">5.主键约束(primary key) <a class="header-anchor" href="#_5-主键约束-primary-key" aria-label="Permalink to &quot;5.主键约束(primary key)&quot;">​</a></h3><p>用来保证记录的唯一性，使用主键约束的字段，不能为空（无需写 not null），不能重复，主键所在的列为整数类型，一张 表有且只 能有一个主键</p><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stuinfo(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> primary key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VARCHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;姓名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gender </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CHAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;性别&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ZEROFILL,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bornDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATETIME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;出生日期&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    school </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;泸职院&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;学校&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_2-复合主键-联合主键" tabindex="-1">(2)复合主键(联合主键) <a class="header-anchor" href="#_2-复合主键-联合主键" aria-label="Permalink to &quot;(2)复合主键(联合主键)&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> t8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;学生姓名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sushe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;描述学生宿舍&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;学生年龄&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    primary key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,sushe) comment </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id和宿舍作为复合主键&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 追加复合主键</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constraint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  联合主键名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">primary key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(列1,列2);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_3-追加主键" tabindex="-1">(3)追加主键 <a class="header-anchor" href="#_3-追加主键" aria-label="Permalink to &quot;(3)追加主键&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> primary key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(字段1,....);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_4-删除主键" tabindex="-1">(4)删除主键 <a class="header-anchor" href="#_4-删除主键" aria-label="Permalink to &quot;(4)删除主键&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> primary key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_6-外键" tabindex="-1">6 外键 <a class="header-anchor" href="#_6-外键" aria-label="Permalink to &quot;6 外键&quot;">​</a></h3><h4 id="_1-外键的建立" tabindex="-1">(1)外键的建立 <a class="header-anchor" href="#_1-外键的建立" aria-label="Permalink to &quot;(1)外键的建立&quot;">​</a></h4><p>外键是用于多表查询使用的关键字段</p><p>#父表的字段和子表的字段类型必须相同，且限制条件也相同</p><p>语法：</p><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 子表 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constraint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FK_ID(外键名称可随意) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">foreign key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> （外键字段名） </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 父表(主要字段名)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>建立外键后，子表关键字段只能录入父表外键字段已有的值</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>添加外键的字段必须含有主键或者唯一键约束，可在建表的同时建立外键，但是必须先建立父表</span></span>
<span class="line"><span>在子表的最后加入</span></span>
<span class="line"><span>constraint  FK_ID(外键名称可随意) foreign key （外键字段名） references 父表(主要字段名)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-外键的删除" tabindex="-1">(2)外键的删除 <a class="header-anchor" href="#_2-外键的删除" aria-label="Permalink to &quot;(2)外键的删除&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 子表 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 外键名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">foreign key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 外键名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="级联" tabindex="-1">级联 <a class="header-anchor" href="#级联" aria-label="Permalink to &quot;级联&quot;">​</a></h4><h5 id="级联的作用" tabindex="-1">级联的作用 <a class="header-anchor" href="#级联的作用" aria-label="Permalink to &quot;级联的作用&quot;">​</a></h5><p>​ 级联是在外键的基础下添加的一个约束，是用于在更新父表的关联字段的同时也会更新字表的关联字段这样方便了了修改大量数据的时</p><h5 id="级联的添加" tabindex="-1">级联的添加 <a class="header-anchor" href="#级联的添加" aria-label="Permalink to &quot;级联的添加&quot;">​</a></h5><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constraint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 外键名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">foreign key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (需要添加外键约束的列名) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (父表对应的列名) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cascade </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on delete cascade</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="级联的删除" tabindex="-1">级联的删除 <a class="header-anchor" href="#级联的删除" aria-label="Permalink to &quot;级联的删除&quot;">​</a></h5><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on delete cascade</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_7-自增长-auto-increment" tabindex="-1">7.自增长(auto_increment) <a class="header-anchor" href="#_7-自增长-auto-increment" aria-label="Permalink to &quot;7.自增长(auto_increment)&quot;">​</a></h3><p>一张表有且只能有一个自增长 ，主键和 自增长搭配使用</p><h3 id="_8-唯一键-unique" tabindex="-1">8.唯一键(unique) <a class="header-anchor" href="#_8-唯一键-unique" aria-label="Permalink to &quot;8.唯一键(unique)&quot;">​</a></h3><p>唯一键允许为空，但是不能重复，一张表中可以有多个字段设置唯一 唯一键解决表中多个字段需要唯一性约 束的问题 null 不做比较，可以允许多个 null</p><h4 id="单独添加-1" tabindex="-1">单独添加 <a class="header-anchor" href="#单独添加-1" aria-label="Permalink to &quot;单独添加&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">modify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字段 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">unique</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="单独删除-1" tabindex="-1">单独删除 <a class="header-anchor" href="#单独删除-1" aria-label="Permalink to &quot;单独删除&quot;">​</a></h4><div class="language-SQL vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> index</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_9-unsigned-非负数" tabindex="-1">9.unsigned(非负数) <a class="header-anchor" href="#_9-unsigned-非负数" aria-label="Permalink to &quot;9.unsigned(非负数)&quot;">​</a></h3><p>设置了 unsigned 后只能在该在该字段添加正数</p>`,61),h=[e];function p(t,k,r,d,E,g){return a(),i("div",null,h)}const o=s(l,[["render",p]]);export{y as __pageData,o as default};
