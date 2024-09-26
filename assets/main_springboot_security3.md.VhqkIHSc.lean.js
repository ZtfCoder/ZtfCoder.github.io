import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.sGs2IBkb.js";const c=JSON.parse('{"title":"springboot基础入门-security 基于注解控制权限","description":"","frontmatter":{"title":"springboot基础入门-security 基于注解控制权限","tags":["java","springboot","安全框架"],"categories":"springboot","abbrlink":"f1edfd7f"},"headers":[],"relativePath":"main/springboot/security3.md","filePath":"main/springboot/security3.md","lastUpdated":1662368311000}'),t={name:"main/springboot/security3.md"};function l(p,s,r,h,d,o){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="注解控制" tabindex="-1">注解控制 <a class="header-anchor" href="#注解控制" aria-label="Permalink to &quot;注解控制&quot;">​</a></h1><p>在前一篇笔记中,我们通过ajax登录,和进行读取数据库进行权限判断,但是,我们的判断请求拥有哪些角色可以访问时,</p><p>我们写在配置请求中,这样,不方便我们操作</p><p>springboot 提倡使用直接开发</p><p>所以,肯定也有注解模式</p><h2 id="开启注解模式" tabindex="-1">开启注解模式 <a class="header-anchor" href="#开启注解模式" aria-label="Permalink to &quot;开启注解模式&quot;">​</a></h2><p>在<code>SecurityConfig</code> 我们的配置类上加上下面这样的注解</p><blockquote><p>@EnableGlobalMethodSecurity(prePostEnabled = true,securedEnabled=true,jsr250Enabled=true)</p></blockquote><p><strong>这样会开启3种注解模式,</strong></p><h3 id="jsr250enabled" tabindex="-1">jsr250Enabled <a class="header-anchor" href="#jsr250enabled" aria-label="Permalink to &quot;jsr250Enabled&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DenyAll</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 拒绝访问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PermitAll</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //同意访问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RolesAllowed</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 拥有某一个角色就可以访问</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>比如 访问下方的请求,只有拥有<code>admin</code> <strong>或者</strong><code>root</code> 角色权限时,才能访问</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RolesAllowed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/getAllUser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;getAllUser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="securedenabled" tabindex="-1">securedEnabled <a class="header-anchor" href="#securedenabled" aria-label="Permalink to &quot;securedEnabled&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Secured</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ROLE_user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ROLE_admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>只有拥有上面显示的<strong>全部</strong>角色时,才能访问,否则无法访问</p><p>并且这里的角色名需要添加<code>ROLE_</code> 前缀,而<code>jsr250Enabled</code> 模式,不需要添加前缀</p><h3 id="prepostenabled" tabindex="-1">prePostEnabled <a class="header-anchor" href="#prepostenabled" aria-label="Permalink to &quot;prePostEnabled&quot;">​</a></h3><p>这种模式,比较强大,支持springEL 表达式,还可以进行一些逻辑判断</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PreAuthorize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#userId == authentication.principal.userId or hasAuthority(‘ADMIN’)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>这里表示在changePassword方法执行之前，判断方法参数userId的值是否等于principal中保存的当前用户的userId，</em></p><p><em>或者当前用户是否具有ROLE_ADMIN权限，两种符合其一，就可以访问该 方法。</em></p>`,22)]))}const E=a(t,[["render",l]]);export{c as __pageData,E as default};
