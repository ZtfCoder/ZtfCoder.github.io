import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.1baa841b.js";const g=JSON.parse('{"title":"JSP","description":"","frontmatter":{},"headers":[],"relativePath":"main/JavaWeb/jsp.md","filePath":"main/JavaWeb/jsp.md","lastUpdated":1699426983000}'),l={name:"main/JavaWeb/jsp.md"},t=n(`<h1 id="jsp" tabindex="-1">JSP <a class="header-anchor" href="#jsp" aria-label="Permalink to &quot;JSP&quot;">​</a></h1><p>Java Server Pages :java 服务器端页面</p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">本质上是Servlet</span></span>
<span class="line"><span style="color:#e1e4e8;">jsp会先转换成Java代码,之后编译成class文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">本质上是Servlet</span></span>
<span class="line"><span style="color:#24292e;">jsp会先转换成Java代码,之后编译成class文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="脚本" tabindex="-1">脚本 <a class="header-anchor" href="#脚本" aria-label="Permalink to &quot;脚本&quot;">​</a></h2><p><strong>&lt;% 代码%&gt;</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">定义在service方法中的代码,service可以写什么,脚本就可以些什么</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">定义在service方法中的代码,service可以写什么,脚本就可以些什么</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>&lt; %! 代码 %&gt;</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">成员变量的位置</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">成员变量的位置</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>&lt;%= 代码 %&gt;</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输出,写什么就输出什么</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输出,写什么就输出什么</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h2><p>&lt;%@ 指令名称 属性名称 1=属性值 1 属性名称 2=属性值 %&gt;</p><p>分类</p><h3 id="_1-page-配置-jsp-页面的" tabindex="-1">1.page 配置 jsp 页面的 <a class="header-anchor" href="#_1-page-配置-jsp-页面的" aria-label="Permalink to &quot;1.page 配置 jsp 页面的&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">contentType:等同于response.setContentType()</span></span>
<span class="line"><span style="color:#e1e4e8;">			1.设置响应体的mine类型以及字符集</span></span>
<span class="line"><span style="color:#e1e4e8;">			2.设置当前jsp页面的编码方式(idea自动设置),其他工具				一般需要设置pageEncoding属性设置当前页面的字符集</span></span>
<span class="line"><span style="color:#e1e4e8;">import:导包</span></span>
<span class="line"><span style="color:#e1e4e8;">errorPage:当前页面发生异常后,自动跳转到指定的错误页面</span></span>
<span class="line"><span style="color:#e1e4e8;">isErrorPage:标识当前页面是否是错误页面</span></span>
<span class="line"><span style="color:#e1e4e8;">			true:可以使用内置对象exception</span></span>
<span class="line"><span style="color:#e1e4e8;">			false:不可以使用</span></span>
<span class="line"><span style="color:#e1e4e8;">include:页面包含的,导入页面的资源文件</span></span>
<span class="line"><span style="color:#e1e4e8;">taglib:导入资源</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">contentType:等同于response.setContentType()</span></span>
<span class="line"><span style="color:#24292e;">			1.设置响应体的mine类型以及字符集</span></span>
<span class="line"><span style="color:#24292e;">			2.设置当前jsp页面的编码方式(idea自动设置),其他工具				一般需要设置pageEncoding属性设置当前页面的字符集</span></span>
<span class="line"><span style="color:#24292e;">import:导包</span></span>
<span class="line"><span style="color:#24292e;">errorPage:当前页面发生异常后,自动跳转到指定的错误页面</span></span>
<span class="line"><span style="color:#24292e;">isErrorPage:标识当前页面是否是错误页面</span></span>
<span class="line"><span style="color:#24292e;">			true:可以使用内置对象exception</span></span>
<span class="line"><span style="color:#24292e;">			false:不可以使用</span></span>
<span class="line"><span style="color:#24292e;">include:页面包含的,导入页面的资源文件</span></span>
<span class="line"><span style="color:#24292e;">taglib:导入资源</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_2-内置对象" tabindex="-1">2.内置对象 <a class="header-anchor" href="#_2-内置对象" aria-label="Permalink to &quot;2.内置对象&quot;">​</a></h3><p>jsp 页面不需要创建的对象</p><table><thead><tr><th style="text-align:left;">变量名</th><th style="text-align:left;">真实类型</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">pageContentext</td><td style="text-align:left;">PageContext</td><td style="text-align:left;">当前页面共享数据,还可以获取其它 8 个内置对象</td></tr><tr><td style="text-align:left;">request</td><td style="text-align:left;">HttpServletRequest</td><td style="text-align:left;">一次请求访问的多个资源(转发)</td></tr><tr><td style="text-align:left;">session</td><td style="text-align:left;">HttpSession</td><td style="text-align:left;">一次会话的多个请求间</td></tr><tr><td style="text-align:left;">application</td><td style="text-align:left;">ServletContext</td><td style="text-align:left;">所有用户间共享数据</td></tr><tr><td style="text-align:left;">response</td><td style="text-align:left;">HttpServletResponse</td><td style="text-align:left;">响应对象</td></tr><tr><td style="text-align:left;">page</td><td style="text-align:left;">Object</td><td style="text-align:left;">当前页面</td></tr><tr><td style="text-align:left;">out</td><td style="text-align:left;">JspWriter</td><td style="text-align:left;">输出对象,</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">ServletConfig</td><td style="text-align:left;">Servlet 配置对象</td></tr><tr><td style="text-align:left;">exception</td><td style="text-align:left;">Throwable</td><td style="text-align:left;">异常对象</td></tr></tbody></table><h1 id="el-表达式" tabindex="-1">EL 表达式 <a class="header-anchor" href="#el-表达式" aria-label="Permalink to &quot;EL 表达式&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\${代码}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\${代码}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>EL 表达式只能从域对象中获取值</p><h2 id="域名称" tabindex="-1">域名称 <a class="header-anchor" href="#域名称" aria-label="Permalink to &quot;域名称&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.pageScope		   -&gt;pageContext</span></span>
<span class="line"><span style="color:#e1e4e8;">2.requestScope	   -&gt;request</span></span>
<span class="line"><span style="color:#e1e4e8;">3.sessionScope	   -&gt;session</span></span>
<span class="line"><span style="color:#e1e4e8;">4.applicationScope -&gt;application(ServletContext)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.pageScope		   -&gt;pageContext</span></span>
<span class="line"><span style="color:#24292e;">2.requestScope	   -&gt;request</span></span>
<span class="line"><span style="color:#24292e;">3.sessionScope	   -&gt;session</span></span>
<span class="line"><span style="color:#24292e;">4.applicationScope -&gt;application(ServletContext)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">用法\${域名称.键名} 从指定域中获取指定键的值</span></span>
<span class="line"><span style="color:#e1e4e8;">比如在request域中获取存储了name=张三</span></span>
<span class="line"><span style="color:#e1e4e8;">\${requestScope.name}</span></span>
<span class="line"><span style="color:#e1e4e8;">会直接把值获取到打印到网页上</span></span>
<span class="line"><span style="color:#e1e4e8;">可以简写为 \${name}</span></span>
<span class="line"><span style="color:#e1e4e8;">会先从最小的域中寻找,找到了即停止</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">用法\${域名称.键名} 从指定域中获取指定键的值</span></span>
<span class="line"><span style="color:#24292e;">比如在request域中获取存储了name=张三</span></span>
<span class="line"><span style="color:#24292e;">\${requestScope.name}</span></span>
<span class="line"><span style="color:#24292e;">会直接把值获取到打印到网页上</span></span>
<span class="line"><span style="color:#24292e;">可以简写为 \${name}</span></span>
<span class="line"><span style="color:#24292e;">会先从最小的域中寻找,找到了即停止</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="获取对象" tabindex="-1">获取对象 <a class="header-anchor" href="#获取对象" aria-label="Permalink to &quot;获取对象&quot;">​</a></h2><p>使用:<code>\${域名称.键名.属性名称}</code></p><p><strong>List 集合</strong></p><p><code>\${域名称.键名[索引]}</code></p><p><strong>Map 集合</strong></p><p><code>\${域名称.键名.key 名称}</code></p><p><code>\${域名称.键名[key 名称]}</code></p><h2 id="隐式对象" tabindex="-1">隐式对象 <a class="header-anchor" href="#隐式对象" aria-label="Permalink to &quot;隐式对象&quot;">​</a></h2><p>pageContext</p><p>使用方法</p><p>动态获取虚拟目录 <code>\${pageContext.request.contextPath}</code></p><h1 id="jstl-标签" tabindex="-1">JSTL 标签 <a class="header-anchor" href="#jstl-标签" aria-label="Permalink to &quot;JSTL 标签&quot;">​</a></h1><p>可以简化 Java 代码替换 jsp 代码</p><p>需要导入 jar 包</p><p>声明指令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;%@ taglib=&quot;&quot; uri=&quot;&quot;%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">taglib 是声明一个前缀字符串,可以是任意值,通常使用&quot;c&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;%@ taglib=&quot;&quot; uri=&quot;&quot;%&gt;</span></span>
<span class="line"><span style="color:#24292e;">taglib 是声明一个前缀字符串,可以是任意值,通常使用&quot;c&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="if" tabindex="-1">if <a class="header-anchor" href="#if" aria-label="Permalink to &quot;if&quot;">​</a></h2><p><strong>java 代码中 if 分支</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;c:if test=&quot;true&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    hello if</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:if&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;c:if test=&quot;true&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    hello if</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:if&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>if 标签需要添加一个 test 属性 ,属性为布尔表达式,一般在这里配合 EL 表达式使用,if 标签没有 else,如果不符合,则声明都不显示</p><h2 id="choose" tabindex="-1">choose <a class="header-anchor" href="#choose" aria-label="Permalink to &quot;choose&quot;">​</a></h2><p><strong>Java 代码中的 switch 语句</strong></p><p>when 标签代表 Java 代码中的 case</p><p>otherwise 代表 Java 代码中的 default</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;c:choose&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==1}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周一&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==2}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周二&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==3}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周三&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==4}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周四&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==5}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周五&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==6}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周六&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:when test=&quot;\${day==7}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;h1&gt;周日&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;c:otherwise&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        没有这一天</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/c:otherwise&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:choose&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;c:choose&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==1}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周一&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==2}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周二&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==3}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周三&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==4}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周四&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==5}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周五&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==6}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周六&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:when test=&quot;\${day==7}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;h1&gt;周日&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;c:otherwise&gt;</span></span>
<span class="line"><span style="color:#24292e;">        没有这一天</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/c:otherwise&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:choose&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;forEach&quot;">​</a></h2><p><strong>Java 代码中的 for 循环</strong></p><p>普通的循环</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;c:forEach begin=&quot;0&quot; end=&quot;10&quot; step=&quot;1&quot; var=&quot;i&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    \${i}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:forEach&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;c:forEach begin=&quot;0&quot; end=&quot;10&quot; step=&quot;1&quot; var=&quot;i&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    \${i}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:forEach&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>begin 代表初始值</p><p>end 代表结束值</p><p>范围:[begin,end]</p><p>step 代表递增的数字</p><p>var 代表临时变量</p><p>增强循环</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;%</span></span>
<span class="line"><span style="color:#e1e4e8;">    List list = new ArrayList();</span></span>
<span class="line"><span style="color:#e1e4e8;">    request.setAttribute(&quot;list&quot;,list);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.add(&quot;1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.add(&quot;2&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    list.add(&quot;3&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;c:forEach items=&quot;\${list}&quot; var=&quot;i&quot; varStatus=&quot;s&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    \${s.count} \${s.index} \${i} &lt;/br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:forEach&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;%</span></span>
<span class="line"><span style="color:#24292e;">    List list = new ArrayList();</span></span>
<span class="line"><span style="color:#24292e;">    request.setAttribute(&quot;list&quot;,list);</span></span>
<span class="line"><span style="color:#24292e;">    list.add(&quot;1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    list.add(&quot;2&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    list.add(&quot;3&quot;);</span></span>
<span class="line"><span style="color:#24292e;">%&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;c:forEach items=&quot;\${list}&quot; var=&quot;i&quot; varStatus=&quot;s&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    \${s.count} \${s.index} \${i} &lt;/br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:forEach&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>items 表示你要引用的集合对象</p>`,62),p=[t];function o(c,i,r,d,u,h){return e(),a("div",null,p)}const y=s(l,[["render",o]]);export{g as __pageData,y as default};
