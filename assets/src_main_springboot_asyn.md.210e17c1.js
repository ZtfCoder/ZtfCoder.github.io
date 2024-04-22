import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1baa841b.js";const d=JSON.parse('{"title":"springboot基础入门-剩余","description":"","frontmatter":{"title":"springboot基础入门-剩余","tags":["java","springboot","异步","定时","邮件发送"],"categories":"springboot","abbrlink":"7a6c4758"},"headers":[],"relativePath":"src/main/springboot/asyn.md","filePath":"src/main/springboot/asyn.md","lastUpdated":1713749248000}'),p={name:"src/main/springboot/asyn.md"},e=l(`<h1 id="异步任务" tabindex="-1">异步任务 <a class="header-anchor" href="#异步任务" aria-label="Permalink to &quot;异步任务&quot;">​</a></h1><p>类似<code>ajax</code> 异步请求 可以额外开启线程来完成另外一个方法</p><p>使用的场景有 邮件发送,清理缓存数据,短信验证码,等等</p><p>首先,我们需要在在spring boot 启动类上,声明开启 异步任务</p><p>添加注解</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">EnableAsync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableAsync</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>小提示:还有很多注解以Enable 开头的,都是开启某某功能</p><p>之后,我们需要在,异步执行的方法上添加<code>@Asyn</code> 注解 即可实现异步任务</p><h1 id="邮件发送" tabindex="-1">邮件发送 <a class="header-anchor" href="#邮件发送" aria-label="Permalink to &quot;邮件发送&quot;">​</a></h1><p>首先需要导入mail 依赖</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;org.springframework.boot&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;spring-boot-starter-mail&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;2.3.7.RELEASE&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.boot&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-boot-starter-mail&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;2.3.7.RELEASE&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后需要去qq 邮箱设置里开启smtp</p><p>之后获取密钥</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">spring</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mail</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bkdvktdsncnpdgge</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">2936408477@qq.com</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">smtp.qq.com</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># qq邮箱</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">mail</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">smtp</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">auth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">starttls</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">enable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">spring</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mail</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bkdvktdsncnpdgge</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">2936408477@qq.com</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">smtp.qq.com</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># qq邮箱</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">properties</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">mail</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">smtp</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">auth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">starttls</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">enable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>测试</p><p>简单的邮件,</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">contextLoads</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        SimpleMailMessage simpleMailMessage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SimpleMailMessage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 发送给谁</span></span>
<span class="line"><span style="color:#E1E4E8;">        simpleMailMessage.</span><span style="color:#B392F0;">setTo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2936408477@qq.com&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 谁发送</span></span>
<span class="line"><span style="color:#E1E4E8;">        simpleMailMessage.</span><span style="color:#B392F0;">setFrom</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2936408477@qq.com&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 设置主题</span></span>
<span class="line"><span style="color:#E1E4E8;">        simpleMailMessage.</span><span style="color:#B392F0;">setSubject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;aaaa&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        simpleMailMessage.</span><span style="color:#B392F0;">setText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        javaMailSender.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(simpleMailMessage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">contextLoads</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        SimpleMailMessage simpleMailMessage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SimpleMailMessage</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 发送给谁</span></span>
<span class="line"><span style="color:#24292E;">        simpleMailMessage.</span><span style="color:#6F42C1;">setTo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2936408477@qq.com&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 谁发送</span></span>
<span class="line"><span style="color:#24292E;">        simpleMailMessage.</span><span style="color:#6F42C1;">setFrom</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2936408477@qq.com&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 设置主题</span></span>
<span class="line"><span style="color:#24292E;">        simpleMailMessage.</span><span style="color:#6F42C1;">setSubject</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;aaaa&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        simpleMailMessage.</span><span style="color:#6F42C1;">setText</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        javaMailSender.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(simpleMailMessage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>复杂的邮件 可以发送html内容</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Test</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">contextLoads2</span><span style="color:#E1E4E8;">() throws MessagingException {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    MimeMessage mimeMessage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> javaMailSender.</span><span style="color:#B392F0;">createMimeMessage</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    MimeMessageHelper messageHelper </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MimeMessageHelper</span><span style="color:#E1E4E8;">(mimeMessage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// true 表示解析html 标签</span></span>
<span class="line"><span style="color:#E1E4E8;">    messageHelper.</span><span style="color:#B392F0;">setText</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&lt;h1&gt;aaaa&lt;/h1&gt;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    messageHelper.</span><span style="color:#B392F0;">setFrom</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2936408477@qq.com&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    messageHelper.</span><span style="color:#B392F0;">setTo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2936408477@qq.com&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    messageHelper.</span><span style="color:#B392F0;">setSubject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1111&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    javaMailSender.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(mimeMessage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">contextLoads2</span><span style="color:#24292E;">() throws MessagingException {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    MimeMessage mimeMessage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> javaMailSender.</span><span style="color:#6F42C1;">createMimeMessage</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    MimeMessageHelper messageHelper </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MimeMessageHelper</span><span style="color:#24292E;">(mimeMessage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// true 表示解析html 标签</span></span>
<span class="line"><span style="color:#24292E;">    messageHelper.</span><span style="color:#6F42C1;">setText</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&lt;h1&gt;aaaa&lt;/h1&gt;&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    messageHelper.</span><span style="color:#6F42C1;">setFrom</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2936408477@qq.com&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    messageHelper.</span><span style="color:#6F42C1;">setTo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2936408477@qq.com&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    messageHelper.</span><span style="color:#6F42C1;">setSubject</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1111&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    javaMailSender.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(mimeMessage);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h1 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h1><p>和名称一样具有相同的功能,</p><p>首先我们需要在spring boot 启动类上开启 定时任务</p><p><code>@EnableScheduling</code></p><p>之后,在你想要执行定时任务的 方法上添加注解 <code>@Scheduled()</code> 其中 有个cron 的属性,为表达式,表达式包含定时任务开启的时间,和循环时间</p><p>具体,可以参考,cron 代码生成器</p>`,25),o=[e];function c(r,t,E,i,y,m){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
