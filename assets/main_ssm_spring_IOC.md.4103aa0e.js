import{_ as s,a as n,c as a,b as p}from"./app.51f9f543.js";const d=JSON.parse('{"title":"spring ioc","description":"","frontmatter":{"title":"spring ioc","tags":["java","spring"],"categories":"ssm","abbrlink":"360ad78f"},"headers":[{"level":3,"title":"spring\u57FA\u7840","slug":"spring\u57FA\u7840","link":"#spring\u57FA\u7840","children":[]},{"level":3,"title":"ApplicationContext","slug":"applicationcontext","link":"#applicationcontext","children":[]},{"level":3,"title":"component-scan","slug":"component-scan","link":"#component-scan","children":[]},{"level":3,"title":"\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F","slug":"\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F","link":"#\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F","children":[]}],"relativePath":"main/ssm/spring_IOC.md","lastUpdated":1663127397000}'),l={name:"main/ssm/spring_IOC.md"},e=p(`<h3 id="spring\u57FA\u7840" tabindex="-1">spring\u57FA\u7840 <a class="header-anchor" href="#spring\u57FA\u7840" aria-hidden="true">#</a></h3><p>\u5C06\u5BF9\u8C61\u5B58\u50A8\u5230spring\u5BB9\u5668\u4E2D,\u6211\u4EEC\u4E0D\u9700\u8981new\u5BF9\u8C61,,\u6BCF\u6B21\u8981\u4F7F\u7528,\u53EA\u9700\u8981\u4ECE\u5BB9\u5668\u4E2D\u83B7\u53D6\u5C31\u884C\u4E86</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">spring \u5BB9\u5668,\u53EF\u4EE5\u5B58\u50A8\u5F88\u591A\u4E1C\u897F,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>\u5BF9\u8C61\u521B\u5EFA\u7684\u65F6\u673A</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1.\u5F53spring\u5BB9\u5668\u52A0\u8F7D\u7684\u52A0\u8F7D\u7684\u65F6\u5019,\u521B\u5EFA\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">2.\u5F53,\u8C03\u7528\u5BF9\u8C61\u7684\u65F6\u5019,\u8FDB\u884C\u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728spring\u5BB9\u5668\u521B\u5EFA\u5BF9\u8C61,\u9700\u8981\u5728xml\u79CD\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E</p><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bean</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testStu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top.wupeiyao.ioc.sp1.Teacher</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>id</strong> \u5728spring\u5BB9\u5668,\u4E2D,\u53EA\u53EF\u5B58\u5728\u552F\u4E00id\u7684\u5BF9\u8C61,\u4E0D\u53EF\u91CD\u590D <strong>class</strong> \u4E3A\u914D\u7F6E\u7684\u5BF9\u8C61\u7684\u5168\u7C7B\u540D</p><p><strong>\u9ED8\u8BA4\u8C03\u7528\u5BF9\u8C61\u65E0\u53C2\u6784\u9020\u65B9\u6CD5,</strong></p><p><strong>scope</strong> \u8868\u793A\u5BF9\u8C61,\u521B\u5EFA\u7684\u5B9E\u9645</p><p>spring,\u63D0\u4F9B\u4E862\u79CD\u521B\u5EFA\u65F6\u673A,</p><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bean</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testStu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">singleton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top.wupeiyao.ioc.sp1.Teacher</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- \u9ED8\u8BA4\u65B9\u5F0F  singleton    \u5F53spring\u5BB9\u5668\u52A0\u8F7D\u7684\u65F6\u5019\u8FDB\u884C\u521B\u5EFA --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bean</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testStu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prototype</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top.wupeiyao.ioc.sp1.Teacher</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- \u9ED8\u8BA4\u65B9\u5F0F  prototype    \u5F53\u6211\u4EEC\u4ECEspring\u5BB9\u5668\u79CD\u83B7\u53D6\u65F6,\u624D\u4F1A\u521B\u5EFA --&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="bean" tabindex="-1">bean <a class="header-anchor" href="#bean" aria-hidden="true">#</a></h4><h3 id="applicationcontext" tabindex="-1">ApplicationContext <a class="header-anchor" href="#applicationcontext" aria-hidden="true">#</a></h3><p>spring\u4E0A\u4E0B\u6587\u5BF9\u8C61,\u65F6spring\u6838\u5FC3\u5BF9\u8C61</p><p>\u662F\u4E00\u4E2A\u63A5\u53E3,\u5176\u5E38\u7528\u5B50\u7C7B\u6709</p><div class="language-Java line-numbers-mode"><button class="copy"></button><span class="lang">Java</span><pre><code><span class="line"><span style="color:#A6ACCD;">org</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">support</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">XmlWebApplicationContext</span></span>
<span class="line"><span style="color:#A6ACCD;">org</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">web</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">support</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AnnotationConfigWebApplicationContext    </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">XmlWebApplicationContext  \u53EF\u4EE5\u5728\u521B\u5EFA\u8BE5\u5BF9\u8C61\u65F6,\u4F20\u5165spring\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84,\u8FDB\u884C\u8BFB\u53D6,\u542F\u52A8spring\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">AnnotationConfigWebApplicationContext  \u662F\u7528\u4E8E\u6CE8\u89E3\u5F00\u53D1\u542F\u52A8spring\u5BB9\u5668\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="component-scan" tabindex="-1">component-scan <a class="header-anchor" href="#component-scan" aria-hidden="true">#</a></h3><p>\u5305\u626B\u63CF,\u53EF\u4EE5\u7528\u4E8E\u626B\u63CF\u6307\u5B9A\u5305\u8DEF\u5F84\u4E0B\u7684\u6709\u6CE8\u89E3\u4E86\u7C7B\u4F3C <strong>@Component</strong> \u7684,\u7C7B,\u5E76\u5C06\u5BF9\u8C61,\u7EB3\u5165spring\u5BB9\u5668</p><h3 id="\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u6709\u4E09\u79CD\u65B9\u6CD5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1:</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">2:</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u6784\u9020\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">3:</span></span>
<span class="line"><span style="color:#A6ACCD;"> setter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>bean</p><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bean</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autowire</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">byType|byName|constructor|default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,26),o=[e];function t(r,c,i,D,y,F){return n(),a("div",null,o)}const b=s(l,[["render",t]]);export{d as __pageData,b as default};