import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.1baa841b.js";const b=JSON.parse('{"title":"springboot基础入门-security","description":"","frontmatter":{"title":"springboot基础入门-security","tags":["java","springboot","安全框架"],"categories":"springboot","abbrlink":"5399d171"},"headers":[],"relativePath":"src/main/springboot/security.md","filePath":"src/main/springboot/security.md","lastUpdated":1713749248000}'),l={name:"src/main/springboot/security.md"},o=p(`<h1 id="security" tabindex="-1">security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;security&quot;">​</a></h1><p>SpringSecurity 是 Spring 下的一个安全框架，与 shiro 类似，一般用于用户认证和用户授权两个部分，常与与 SpringBoot 相整合。</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;org.springframework.boot&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;spring-boot-starter-security&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.boot&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-boot-starter-security&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>导入 security 后,所有的请求,都会被 security 拦截,进行认证</p><p>security 是高可定制的框架,我们可以轻易修改其中的配置</p><p>首先写一个 security 的配置类</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableWebSecurity</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//开启配置</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SecurityConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebSecurityConfigurerAdapter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableWebSecurity</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//开启配置</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SecurityConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebSecurityConfigurerAdapter</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当我们继承了<code>WebSecurityConfigurerAdapter</code> 这个适配器后,我们就可以重写它里面的方法</p><h2 id="授权" tabindex="-1">授权 <a class="header-anchor" href="#授权" aria-label="Permalink to &quot;授权&quot;">​</a></h2><p>一般重写,</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 授权,用于http请求</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">(HttpSecurity http) throws Exception {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 授权,用于http请求</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">(HttpSecurity http) throws Exception {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//授权</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span style="color:#E1E4E8;">        http.</span><span style="color:#B392F0;">authorizeRequests</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">antMatchers</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">permitAll</span><span style="color:#E1E4E8;">()</span><span style="color:#6A737D;">//开放给所有人</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">antMatchers</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/level1/**&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">hasRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip1&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//访问 /leve1/** 下的所有内容,必须拥有角色vip1</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">antMatchers</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/level2/**&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">hasRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                .</span><span style="color:#B392F0;">antMatchers</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/level3/**&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">hasRole</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip3&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//授权</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span style="color:#24292E;">        http.</span><span style="color:#6F42C1;">authorizeRequests</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">antMatchers</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">permitAll</span><span style="color:#24292E;">()</span><span style="color:#6A737D;">//开放给所有人</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">antMatchers</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/level1/**&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">hasRole</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip1&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//访问 /leve1/** 下的所有内容,必须拥有角色vip1</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">antMatchers</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/level2/**&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">hasRole</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                .</span><span style="color:#6F42C1;">antMatchers</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/level3/**&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">hasRole</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip3&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>采用链式编程方法<code>http.authorizeRequests()</code> 开启授权,之后,就可以选择授权的角色,以及该角色所能访问的权限</p><p>你若是没有这些角色权限,则无法访问这些资源,,此时会给出一个 403 错误,没有权限访问,</p><h3 id="登录页" tabindex="-1">登录页 <a class="header-anchor" href="#登录页" aria-label="Permalink to &quot;登录页&quot;">​</a></h3><p>这时,我们需要进拦截成功后进入登录界面</p><p>开启登录,只需要在上面的方法中,添加一句话,则可以进入到登录界面,</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 开启登录验证 默认是访问 /login,可以从源码,中得知默认配置</span></span>
<span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">formLogin</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">//登录成功后,会自动将你session存入你的角色权限</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 开启登录验证 默认是访问 /login,可以从源码,中得知默认配置</span></span>
<span class="line"><span style="color:#24292E;">http.</span><span style="color:#6F42C1;">formLogin</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">//登录成功后,会自动将你session存入你的角色权限</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>小提示:如果没有设置用户的情况下,默认用户名叫<code>user</code> 密码是控制台随机生成的</strong></p><blockquote><p>也可以进行定制登录页</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">formLogin</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">loginPage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/loginUser&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">http.</span><span style="color:#6F42C1;">formLogin</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">loginPage</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/loginUser&quot;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时,登录的表单提交路径 应该也是 <code>/loginUser</code> ,,并且<code>应该使用post</code>方式,默认提交方式是<code>post</code>,还有表单提交的名称都是含有默认值,我们可以进行更换,具体的默认配置可以查看源码知道,源码注释特别详细,建议多看下官方文档注释</p><h3 id="设置用户" tabindex="-1">设置用户 <a class="header-anchor" href="#设置用户" aria-label="Permalink to &quot;设置用户&quot;">​</a></h3><p>重写</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 认证</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">(AuthenticationManagerBuilder auth) throws Exception {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以基于内存,也可以基于数据等方式</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 认证</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">(AuthenticationManagerBuilder auth) throws Exception {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以基于内存,也可以基于数据等方式</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="基于内存-了解" tabindex="-1">基于内存(了解) <a class="header-anchor" href="#基于内存-了解" aria-label="Permalink to &quot;基于内存(了解)&quot;">​</a></h4><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">(AuthenticationManagerBuilder auth) throws Exception {</span></span>
<span class="line"><span style="color:#E1E4E8;">    auth.</span><span style="color:#B392F0;">inMemoryAuthentication</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">passwordEncoder</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BCryptPasswordEncoder</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">//设置密码的加密方式</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">withUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">password</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BCryptPasswordEncoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">roles</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip1&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;vip2&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;vip3&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">and</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">withUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip1&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">password</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BCryptPasswordEncoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">roles</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip1&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">and</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">withUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip2&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">password</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BCryptPasswordEncoder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">roles</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;vip2&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;vip3&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">(AuthenticationManagerBuilder auth) throws Exception {</span></span>
<span class="line"><span style="color:#24292E;">    auth.</span><span style="color:#6F42C1;">inMemoryAuthentication</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">passwordEncoder</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BCryptPasswordEncoder</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">//设置密码的加密方式</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">withUser</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;root&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">password</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BCryptPasswordEncoder</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">encode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;root&quot;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">roles</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip1&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;vip2&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;vip3&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">and</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">withUser</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip1&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">password</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BCryptPasswordEncoder</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">encode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;root&quot;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">roles</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip1&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">and</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">withUser</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip2&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">password</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BCryptPasswordEncoder</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">encode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;root&quot;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">roles</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;vip2&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;vip3&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这段代码较为长,我简单解释下 <code>inMemoryAuthentication()</code> 这个方法说的是我们分配角色使用的方式,是从内存读取,当然还有其他其中模式最重要的是读取数据,这点,之后再讲,紧跟着是<code>passwordEncoder(new BCryptPasswordEncoder())</code> 这个是密码的加密方式, 由于新版的 spring5 要求需要使用加密手段,因此,必须使用这个</p><p>之后,就是不断的链式编程 分配角色,以及密码的加密方式,和密码,最后<code> roles(&quot;vip1&quot;,&quot;vip2&quot;,&quot;vip3&quot;)</code> 给这个用户分配那些角色</p><p>这种方式了解下就行了,<strong>重点不是这个</strong></p><h4 id="基于数据-掌握" tabindex="-1">基于数据(掌握) <a class="header-anchor" href="#基于数据-掌握" aria-label="Permalink to &quot;基于数据(掌握)&quot;">​</a></h4><h3 id="csrf" tabindex="-1">csrf <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;csrf&quot;">​</a></h3><p>这个地方有个坑,有关 <a href="https://baike.baidu.com/item/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0/13777878?fromtitle=CSRF&amp;fromid=2735433&amp;fr=aladdin" target="_blank" rel="noreferrer">csrf</a></p><p>如果这样提交到后台,会出现 403 错误</p><p><img src="https://images.wupeiyao.top/notes/20210527215021.png" alt="20210527215021.png"></p><p>这个错误,和代码没有关系</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>举个栗子</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">假如一家银行用以运行转账操作的URL地址如下：http</span><span style="color:#F97583;">:</span><span style="color:#6A737D;">//www.examplebank.com/withdraw?account=AccoutName&amp;amount=1000&amp;for=PayeeName</span></span>
<span class="line"><span style="color:#E1E4E8;">那么，一个恶意攻击者可以在另一个网站上放置如下代码： </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">img src</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;http://www.examplebank.com/withdraw?account=Alice&amp;amount=1000&amp;for=Badman&quot;</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">如果有账户名为Alice的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失1000资金。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//来自百度百科</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">假如一家银行用以运行转账操作的URL地址如下：http</span><span style="color:#D73A49;">:</span><span style="color:#6A737D;">//www.examplebank.com/withdraw?account=AccoutName&amp;amount=1000&amp;for=PayeeName</span></span>
<span class="line"><span style="color:#24292E;">那么，一个恶意攻击者可以在另一个网站上放置如下代码： </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">img src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://www.examplebank.com/withdraw?account=Alice&amp;amount=1000&amp;for=Badman&quot;</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">如果有账户名为Alice的用户访问了恶意站点，而她之前刚访问过银行不久，登录信息尚未过期，那么她就会损失1000资金。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//来自百度百科</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>和<code>csrf</code>类似 还有个叫<code>xss</code></p><p>其实,在我们未切换成自定义登录页时,可以查看它原本的登录表单,可以发现一个隐藏域,<strong>token</strong>,这个是较为安全的防止<code>csrf</code> 攻击的手段,还有一种是<strong>检查 Referer 字段</strong> 但是很容易被伪造,因此,不太推荐</p><p>我们可以在<strong>授权方法</strong>中暂时关闭<code>csrf</code></p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">csrf</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">disable</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">http.</span><span style="color:#6F42C1;">csrf</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">disable</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样就能正常登录了</p><h3 id="记住我" tabindex="-1">记住我 <a class="header-anchor" href="#记住我" aria-label="Permalink to &quot;记住我&quot;">​</a></h3><p>要开启<code>记住我</code>这个功能很简单,我们只需要在<strong>授权配置</strong> 方法中开启记住我这个功能就行了</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">rememberMe</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">http.</span><span style="color:#6F42C1;">rememberMe</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样的话,会在默认的登录页有一个单选框,选中登录,则会保存我们的登录信息,</p><p>实际上,就是往我们的<code>cookie</code>中存放了一个值,</p><p>我们也可以对默认的<strong>记住我</strong> 进行自定义配置</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//自定义 复选框的name名称,</span></span>
<span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">rememberMe</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">rememberMeParameter</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;remember&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//自定义 复选框的name名称,</span></span>
<span class="line"><span style="color:#24292E;">http.</span><span style="color:#6F42C1;">rememberMe</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">rememberMeParameter</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;remember&quot;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>还有更多的配置,具体,查看源码,和官方文档</p><h3 id="登出-注销" tabindex="-1">登出\\注销 <a class="header-anchor" href="#登出-注销" aria-label="Permalink to &quot;登出\\注销&quot;">​</a></h3><p>这个也是非常的简单</p><p>开启我们的配置</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">http.</span><span style="color:#B392F0;">logout</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">logoutUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/logout&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">logoutSuccessUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">http.</span><span style="color:#6F42C1;">logout</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">logoutUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/logout&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">logoutSuccessUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>默认是断开当前会话,和清除 cookie</p>`,57),e=[o];function t(r,c,i,E,y,d){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{b as __pageData,h as default};
