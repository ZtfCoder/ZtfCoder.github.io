import{_ as l,c as o,G as i,a2 as r,B as n,o as t}from"./chunks/framework.sGs2IBkb.js";const f=JSON.parse('{"title":"01-数据库的基础知识","description":"","frontmatter":{"title":"01-数据库的基础知识","publish":false},"headers":[],"relativePath":"hxg/11-Node.js/CommonJS.md","filePath":"hxg/11-Node.js/CommonJS.md","lastUpdated":1725860495000}'),s={name:"hxg/11-Node.js/CommonJS.md"};function p(d,a,c,h,m,u){const e=n("ArticleTopAd");return t(),o("div",null,[i(e),a[0]||(a[0]=r(`<h2 id="全局对象" tabindex="-1">全局对象 <a class="header-anchor" href="#全局对象" aria-label="Permalink to &quot;全局对象&quot;">​</a></h2><h3 id="global" tabindex="-1">global <a class="header-anchor" href="#global" aria-label="Permalink to &quot;global&quot;">​</a></h3><p>类似于客户端 JavaScript 运行环境中的 window。</p><h2 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;process&quot;">​</a></h2><p>用于获取当前的 Node 进程信息，一般用于获取环境变量之类的信息。</p><h3 id="console" tabindex="-1">console <a class="header-anchor" href="#console" aria-label="Permalink to &quot;console&quot;">​</a></h3><p>Node 中内置的 console 模块，提供操作控制台的输入输出功能，常见使用方式与客户端类似。</p><h2 id="全局函数" tabindex="-1">全局函数 <a class="header-anchor" href="#全局函数" aria-label="Permalink to &quot;全局函数&quot;">​</a></h2><ul><li><p>setInterval(callback, millisecond)</p></li><li><p>clearInterval(timer)</p></li><li><p>setTimeout(callback, millisecond)</p></li><li><p>clearTimeout(timer)</p></li><li><p>Buffer：Class</p><ul><li>用于操作二进制数据</li><li>以后介绍</li></ul></li></ul><h2 id="node-调试" tabindex="-1">Node 调试 <a class="header-anchor" href="#node-调试" aria-label="Permalink to &quot;Node 调试&quot;">​</a></h2><h3 id="最简单的调试" tabindex="-1">最简单的调试 <a class="header-anchor" href="#最简单的调试" aria-label="Permalink to &quot;最简单的调试&quot;">​</a></h3><p>最方便也是最简单的调试：console.log()</p><h3 id="node-原生的调试" tabindex="-1">Node 原生的调试 <a class="header-anchor" href="#node-原生的调试" aria-label="Permalink to &quot;Node 原生的调试&quot;">​</a></h3><p>网址：<a href="https://nodejs.org/api/debugger.html" target="_blank" rel="noreferrer">https://nodejs.org/api/debugger.html</a></p><h3 id="第三方模块提供的调试工具" tabindex="-1">第三方模块提供的调试工具 <a class="header-anchor" href="#第三方模块提供的调试工具" aria-label="Permalink to &quot;第三方模块提供的调试工具&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ npm install node-inspector –g   //方式一</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ npm install devtool -g          //方式二</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="开发工具的调试" tabindex="-1">开发工具的调试 <a class="header-anchor" href="#开发工具的调试" aria-label="Permalink to &quot;开发工具的调试&quot;">​</a></h3><ul><li><p>Visual Studio Code</p></li><li><p>WebStorm</p></li></ul><h2 id="模块化结构" tabindex="-1">模块化结构 <a class="header-anchor" href="#模块化结构" aria-label="Permalink to &quot;模块化结构&quot;">​</a></h2><p>Node 实现 CommonJS 规范，所以可以使用模块化的方式组织代码结构。</p><ul><li><p>Node 采用的模块化结构是按照 CommonJS 规范。</p></li><li><p>模块与文件是一一对应关系，即加载一个模块，实际上就是加载对应的一个模块文件。</p></li></ul><h3 id="commonjs-规范" tabindex="-1">CommonJS 规范 <a class="header-anchor" href="#commonjs-规范" aria-label="Permalink to &quot;CommonJS 规范&quot;">​</a></h3><p>CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构。</p><p>参考链接：</p><ul><li><a href="http://wiki.commonjs.org/wiki/CommonJS" target="_blank" rel="noreferrer">http://wiki.commonjs.org/wiki/CommonJS</a></li></ul><h3 id="常用内置模块" tabindex="-1">常用内置模块 <a class="header-anchor" href="#常用内置模块" aria-label="Permalink to &quot;常用内置模块&quot;">​</a></h3><ul><li><p><code>path</code>：处理文件路径。</p></li><li><p><code>fs</code>：操作（CRUD）文件系统。</p></li><li><p><code>child_process</code>：新建子进程。</p></li><li><p><code>util</code>：提供一系列实用小工具。</p></li><li><p><code>http</code>：提供 HTTP 服务器功能。</p></li><li><p><code>url</code>：用于解析 URL。</p></li><li><p><code>querystring</code>：解析 URL 中的查询字符串。</p></li><li><p><code>crypto</code>：提供加密和解密功能。</p></li></ul><p>总结：更多内容可以参考 api文档：<a href="https://nodejs.org/api/" target="_blank" rel="noreferrer">https://nodejs.org/api/</a></p><h2 id="文件系统操作" tabindex="-1">文件系统操作 <a class="header-anchor" href="#文件系统操作" aria-label="Permalink to &quot;文件系统操作&quot;">​</a></h2><h3 id="相关模块" tabindex="-1">相关模块 <a class="header-anchor" href="#相关模块" aria-label="Permalink to &quot;相关模块&quot;">​</a></h3><ul><li><p>fs：基础的文件操作 API</p></li><li><p>path：提供和路径相关的操作 API</p></li><li><p>readline：用于读取大文本文件，一行一行读</p></li><li><p>fs-extra（第三方）：<a href="https://www.npmjs.com/package/fs-extra" target="_blank" rel="noreferrer">https://www.npmjs.com/package/fs-extra</a></p></li></ul>`,31))])}const g=l(s,[["render",p]]);export{f as __pageData,g as default};