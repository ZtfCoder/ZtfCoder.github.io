import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.sGs2IBkb.js";const k=JSON.parse('{"title":"spring ioc","description":"","frontmatter":{"title":"spring ioc","tags":["java","spring"],"categories":"ssm","abbrlink":"360ad78f"},"headers":[],"relativePath":"src/main/spring/spring_IOC.md","filePath":"src/main/spring/spring_IOC.md","lastUpdated":1701252050000}'),p={name:"src/main/spring/spring_IOC.md"};function t(l,s,r,h,o,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h3 id="spring基础" tabindex="-1">spring基础 <a class="header-anchor" href="#spring基础" aria-label="Permalink to &quot;spring基础&quot;">​</a></h3><p>将对象存储到spring容器中,我们不需要new对象,,每次要使用,只需要从容器中获取就行了</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring 容器,可以存储很多东西,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>对象创建的时机</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.当spring容器加载的加载的时候,创建对象</span></span>
<span class="line"><span>2.当,调用对象的时候,进行创建</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在spring容器创建对象,需要在xml种进行以下配置</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;testStu&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;top.wupeiyao.ioc.sp1.Teacher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>id</strong> 在spring容器,中,只可存在唯一id的对象,不可重复 <strong>class</strong> 为配置的对象的全类名</p><p><strong>默认调用对象无参构造方法,</strong></p><p><strong>scope</strong> 表示对象,创建的实际</p><p>spring,提供了2种创建时机,</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;testStu&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;singleton&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;top.wupeiyao.ioc.sp1.Teacher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 默认方式  singleton    当spring容器加载的时候进行创建 --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;testStu&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prototype&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;top.wupeiyao.ioc.sp1.Teacher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 默认方式  prototype    当我们从spring容器种获取时,才会创建 --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="bean" tabindex="-1">bean <a class="header-anchor" href="#bean" aria-label="Permalink to &quot;bean&quot;">​</a></h4><h3 id="applicationcontext" tabindex="-1">ApplicationContext <a class="header-anchor" href="#applicationcontext" aria-label="Permalink to &quot;ApplicationContext&quot;">​</a></h3><p>spring上下文对象,时spring核心对象</p><p>是一个接口,其常用子类有</p><div class="language-Java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">org.springframework.web.context.support.XmlWebApplicationContext</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">org.springframework.web.context.support.AnnotationConfigWebApplicationContext</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>XmlWebApplicationContext  可以在创建该对象时,传入spring配置文件的路径,进行读取,启动spring容器</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AnnotationConfigWebApplicationContext  是用于注解开发启动spring容器的</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="component-scan" tabindex="-1">component-scan <a class="header-anchor" href="#component-scan" aria-label="Permalink to &quot;component-scan&quot;">​</a></h3><p>包扫描,可以用于扫描指定包路径下的有注解了类似 <strong>@Component</strong> 的,类,并将对象,纳入spring容器</p><h3 id="依赖注入的方式" tabindex="-1">依赖注入的方式 <a class="header-anchor" href="#依赖注入的方式" aria-label="Permalink to &quot;依赖注入的方式&quot;">​</a></h3><p>有三种方法</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1:</span></span>
<span class="line"><span> 接口</span></span>
<span class="line"><span>2:</span></span>
<span class="line"><span> 构造方法</span></span>
<span class="line"><span>3:</span></span>
<span class="line"><span> setter</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>bean</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autowire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;byType|byName|constructor|default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,26)]))}const g=a(p,[["render",t]]);export{k as __pageData,g as default};
