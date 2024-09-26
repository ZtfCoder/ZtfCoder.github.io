import{_ as s,c as n,a2 as e,o as l}from"./chunks/framework.sGs2IBkb.js";const u=JSON.parse('{"title":"过滤器","description":"","frontmatter":{"title":"过滤器","tags":["javaweb","java"],"categories":"JavaWeb","abbrlink":"97246020"},"headers":[],"relativePath":"main/JavaWeb/过滤器和监听器.md","filePath":"main/JavaWeb/过滤器和监听器.md","lastUpdated":1662368311000}'),p={name:"main/JavaWeb/过滤器和监听器.md"};function t(i,a,r,c,d,b){return l(),n("div",null,a[0]||(a[0]=[e(`<h1 id="filter-过滤器" tabindex="-1">Filter(过滤器) <a class="header-anchor" href="#filter-过滤器" aria-label="Permalink to &quot;Filter(过滤器)&quot;">​</a></h1><p>过滤器可以把请求拦截下来,完成一些特使的功能</p><p>作用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一般用于完成通用的操作,登录验证,统一编码处理,敏感字符过滤</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="实现过滤器" tabindex="-1">实现过滤器 <a class="header-anchor" href="#实现过滤器" aria-label="Permalink to &quot;实现过滤器&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>实现 Filter类,重写方法,注意过滤器Filter在 javax.servlet下</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置过滤器" tabindex="-1">配置过滤器 <a class="header-anchor" href="#配置过滤器" aria-label="Permalink to &quot;配置过滤器&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>注解配置</span></span>
<span class="line"><span>	和Servlet类 配置类似添加注解 @WebFilter()</span></span>
<span class="line"><span>	参数填写的是需要过滤的资源名称,</span></span>
<span class="line"><span>xml配置</span></span>
<span class="line"><span>	&lt;filter&gt;</span></span>
<span class="line"><span>		&lt;filter-name&gt;虚拟目录&lt;/filter-name&gt;</span></span>
<span class="line"><span>		&lt;filter-class&gt;过滤器类的全类名路径&lt;/filter-class&gt;</span></span>
<span class="line"><span>	&lt;/filter&gt;</span></span>
<span class="line"><span>	&lt;filter-mapping&gt;</span></span>
<span class="line"><span>		&lt;filter-name&gt;虚拟目录&lt;/filter-name&gt;</span></span>
<span class="line"><span>		&lt;filter-pattern&gt;需要过滤的资源名称&lt;/filter-name&gt;</span></span>
<span class="line"><span>	&lt;/filter-mapping&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="拦截配置" tabindex="-1">拦截配置 <a class="header-anchor" href="#拦截配置" aria-label="Permalink to &quot;拦截配置&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>具体资源路径:/index.jsp 只有访问index.jsp的请求才会配拦截</span></span>
<span class="line"><span>拦截目录:/user/* 访问user目录下的所有资源的请求都会被拦截下来</span></span>
<span class="line"><span>后缀名拦截:*.jsp 只要是访问jsp都会被拦截下来</span></span>
<span class="line"><span>拦截所有请求: 访问所有资源的请求都会被拦截下来</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,10)]))}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
