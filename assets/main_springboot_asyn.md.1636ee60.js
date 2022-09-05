import{_ as s,a,c as n,b as p}from"./app.062e7d47.js";const C=JSON.parse('{"title":"springboot\u57FA\u7840\u5165\u95E8-\u5269\u4F59","description":"","frontmatter":{"title":"springboot\u57FA\u7840\u5165\u95E8-\u5269\u4F59","tags":["java","springboot","\u5F02\u6B65","\u5B9A\u65F6","\u90AE\u4EF6\u53D1\u9001"],"categories":"springboot","abbrlink":"7a6c4758"},"headers":[],"relativePath":"main/springboot/asyn.md","lastUpdated":1662368311000}'),l={name:"main/springboot/asyn.md"},o=p(`<h1 id="\u5F02\u6B65\u4EFB\u52A1" tabindex="-1">\u5F02\u6B65\u4EFB\u52A1 <a class="header-anchor" href="#\u5F02\u6B65\u4EFB\u52A1" aria-hidden="true">#</a></h1><p>\u7C7B\u4F3C<code>ajax</code> \u5F02\u6B65\u8BF7\u6C42 \u53EF\u4EE5\u989D\u5916\u5F00\u542F\u7EBF\u7A0B\u6765\u5B8C\u6210\u53E6\u5916\u4E00\u4E2A\u65B9\u6CD5</p><p>\u4F7F\u7528\u7684\u573A\u666F\u6709 \u90AE\u4EF6\u53D1\u9001,\u6E05\u7406\u7F13\u5B58\u6570\u636E,\u77ED\u4FE1\u9A8C\u8BC1\u7801,\u7B49\u7B49</p><p>\u9996\u5148,\u6211\u4EEC\u9700\u8981\u5728\u5728spring boot \u542F\u52A8\u7C7B\u4E0A,\u58F0\u660E\u5F00\u542F \u5F02\u6B65\u4EFB\u52A1</p><p>\u6DFB\u52A0\u6CE8\u89E3</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">EnableAsync</span></span>
<span class="line"></span></code></pre></div><p>\u5C0F\u63D0\u793A:\u8FD8\u6709\u5F88\u591A\u6CE8\u89E3\u4EE5Enable \u5F00\u5934\u7684,\u90FD\u662F\u5F00\u542F\u67D0\u67D0\u529F\u80FD</p><p>\u4E4B\u540E,\u6211\u4EEC\u9700\u8981\u5728,\u5F02\u6B65\u6267\u884C\u7684\u65B9\u6CD5\u4E0A\u6DFB\u52A0<code>@Asyn</code> \u6CE8\u89E3 \u5373\u53EF\u5B9E\u73B0\u5F02\u6B65\u4EFB\u52A1</p><h1 id="\u90AE\u4EF6\u53D1\u9001" tabindex="-1">\u90AE\u4EF6\u53D1\u9001 <a class="header-anchor" href="#\u90AE\u4EF6\u53D1\u9001" aria-hidden="true">#</a></h1><p>\u9996\u5148\u9700\u8981\u5BFC\u5165mail \u4F9D\u8D56</p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.boot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-boot-starter-mail</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2.3.7.RELEASE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u9700\u8981\u53BBqq \u90AE\u7BB1\u8BBE\u7F6E\u91CC\u5F00\u542Fsmtp</p><p>\u4E4B\u540E\u83B7\u53D6\u5BC6\u94A5</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mail</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bkdvktdsncnpdgge</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">2936408477@qq.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">smtp.qq.com</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># qq\u90AE\u7BB1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">properties</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">mail</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">smtp</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">auth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">starttls</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5</p><p>\u7B80\u5355\u7684\u90AE\u4EF6,</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Test</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">contextLoads</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">SimpleMailMessage</span><span style="color:#A6ACCD;"> simpleMailMessage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SimpleMailMessage</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u53D1\u9001\u7ED9\u8C01</span></span>
<span class="line"><span style="color:#A6ACCD;">        simpleMailMessage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setTo</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2936408477@qq.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8C01\u53D1\u9001</span></span>
<span class="line"><span style="color:#A6ACCD;">        simpleMailMessage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFrom</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2936408477@qq.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8BBE\u7F6E\u4E3B\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">        simpleMailMessage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSubject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aaaa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        simpleMailMessage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setText</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        javaMailSender</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">simpleMailMessage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u590D\u6742\u7684\u90AE\u4EF6 \u53EF\u4EE5\u53D1\u9001html\u5185\u5BB9</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Test</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">contextLoads2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> throws MessagingException </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">MimeMessage</span><span style="color:#A6ACCD;"> mimeMessage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> javaMailSender</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createMimeMessage</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">MimeMessageHelper</span><span style="color:#A6ACCD;"> messageHelper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MimeMessageHelper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mimeMessage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// true \u8868\u793A\u89E3\u6790html \u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">    messageHelper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setText</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;h1&gt;aaaa&lt;/h1&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,true);</span></span>
<span class="line"><span style="color:#A6ACCD;">    messageHelper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFrom</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2936408477@qq.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    messageHelper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setTo</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2936408477@qq.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    messageHelper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSubject</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1111</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    javaMailSender</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">mimeMessage</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h1 id="\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1">\u5B9A\u65F6\u4EFB\u52A1 <a class="header-anchor" href="#\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a></h1><p>\u548C\u540D\u79F0\u4E00\u6837\u5177\u6709\u76F8\u540C\u7684\u529F\u80FD,</p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u5728spring boot \u542F\u52A8\u7C7B\u4E0A\u5F00\u542F \u5B9A\u65F6\u4EFB\u52A1</p><p><code>@EnableScheduling</code></p><p>\u4E4B\u540E,\u5728\u4F60\u60F3\u8981\u6267\u884C\u5B9A\u65F6\u4EFB\u52A1\u7684 \u65B9\u6CD5\u4E0A\u6DFB\u52A0\u6CE8\u89E3 <code>@Scheduled()</code> \u5176\u4E2D \u6709\u4E2Acron \u7684\u5C5E\u6027,\u4E3A\u8868\u8FBE\u5F0F,\u8868\u8FBE\u5F0F\u5305\u542B\u5B9A\u65F6\u4EFB\u52A1\u5F00\u542F\u7684\u65F6\u95F4,\u548C\u5FAA\u73AF\u65F6\u95F4</p><p>\u5177\u4F53,\u53EF\u4EE5\u53C2\u8003,cron \u4EE3\u7801\u751F\u6210\u5668</p>`,25),e=[o];function t(c,r,D,F,y,A){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
