import{_ as s,c as i,o as a,a5 as e}from"./chunks/framework.DP4ksDbn.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hxg/16-前端综合/2022年-前端日记.md","filePath":"hxg/16-前端综合/2022年-前端日记.md","lastUpdated":1725860495000}'),n={name:"hxg/16-前端综合/2022年-前端日记.md"},l=e(`<h3 id="_2022-03-30" tabindex="-1">2022-03-30 <a class="header-anchor" href="#_2022-03-30" aria-label="Permalink to &quot;2022-03-30&quot;">​</a></h3><p>有些 Mac 设备里，Safari 浏览器的默认字体竟然是宋体，这太奇怪了。建议在页面的 body 标签设置<strong>字体族</strong>的优先级，还是很有必要的：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, &#39;PingFang SC&#39;, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;Helvetica Neue&#39;, Helvetica, Arial, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, &#39;Apple Color Emoji&#39;, &#39;Segoe UI Emoji&#39;, &#39;Segoe UI Symbol&#39;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参考链接：</p><ul><li><a href="https://github.com/chokcoco/icss/issues/69" target="_blank" rel="noreferrer">Web 字体 font-family 再探秘 · Issue #69 · chokcoco/iCSS</a></li></ul><h3 id="_2022-04-27" tabindex="-1">2022-04-27 <a class="header-anchor" href="#_2022-04-27" aria-label="Permalink to &quot;2022-04-27&quot;">​</a></h3><p>在 flex 布局的容器里，如果发现某个子元素的尺寸与预期不符，说明这个子元素可能是被挤掉了。</p><p>解决办法是给这个子元素设置如下属性，则表示它不会被挤压：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>flex-shrink: 0;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2022-09-26-从-html-富文本中提取纯文本-通过正则表达式" tabindex="-1">2022-09-26-从 html 富文本中提取纯文本（通过正则表达式） <a class="header-anchor" href="#_2022-09-26-从-html-富文本中提取纯文本-通过正则表达式" aria-label="Permalink to &quot;2022-09-26-从 html 富文本中提取纯文本（通过正则表达式）&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 写法1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> html_str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&lt;&gt;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 写法2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;[^&lt;&gt;]+&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> html_str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reg, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>参考链接：</p><ul><li><a href="https://juejin.cn/post/7020985945218351135" target="_blank" rel="noreferrer">js 提取 html 字符串的文本方法总结（去 html 标签） - 掘金</a></li></ul><h3 id="_2022-11-16-修改页面内引入的-iframe-页面内部元素的样式" tabindex="-1">2022-11-16-修改页面内引入的 iframe 页面内部元素的样式 <a class="header-anchor" href="#_2022-11-16-修改页面内引入的-iframe-页面内部元素的样式" aria-label="Permalink to &quot;2022-11-16-修改页面内引入的 iframe 页面内部元素的样式&quot;">​</a></h3><p>参考代码：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ifm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ifm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取到iframe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .contentWindow </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取到iframe的window</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .document </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取到iframe的document</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ifmh1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).style.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;orange&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//正常获取元素 //修改样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>注意，<code>iframe.contentDocument</code> 是 <code>iframe.contentWindow.document</code> 的简写。</p><p>参考链接：</p><ul><li><p><a href="https://zhuanlan.zhihu.com/p/31296331" target="_blank" rel="noreferrer">修改页面内引入的iframe页面内部元素的样式</a></p></li><li><p><a href="https://juejin.cn/post/7127916577684471845" target="_blank" rel="noreferrer">终于搞懂了 Iframe （跨窗口通信）</a></p></li></ul><h3 id="_2022-11-17-vs-code报错semi-colon-expectedcss-css-semicolonexpected-的解决方法" tabindex="-1">2022-11-17-VS Code报错semi-colon expectedcss(css-semicolonexpected)的解决方法 <a class="header-anchor" href="#_2022-11-17-vs-code报错semi-colon-expectedcss-css-semicolonexpected-的解决方法" aria-label="Permalink to &quot;2022-11-17-VS Code报错semi-colon expectedcss(css-semicolonexpected)的解决方法&quot;">​</a></h3><p>这可能是VS Code 的一个bug。</p><p>出现这个问题, 可能并不是该条CSS语句出现问题, 而是它之前的CSS。所以请检查它之前的CSS有没有不完整或不正确的。</p><p>参考链接：<a href="https://blog.class4ever.com/2943.html" target="_blank" rel="noreferrer">VS Code报错semi-colon expectedcss(css-semicolonexpected)的解决方法 - 话语的服侍</a></p>`,23),t=[l];function p(h,r,k,d,c,o){return a(),i("div",null,t)}const m=s(n,[["render",p]]);export{g as __pageData,m as default};
