import{_ as t,c as e,o as a,a5 as s}from"./chunks/framework.DP4ksDbn.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hxg/00-前端工具/Sublime Text在前端中的使用.md","filePath":"hxg/00-前端工具/Sublime Text在前端中的使用.md","lastUpdated":1725860495000}'),l={name:"hxg/00-前端工具/Sublime Text在前端中的使用.md"},i=s(`<h3 id="新建文件时快速生成html" tabindex="-1">新建文件时快速生成Html <a class="header-anchor" href="#新建文件时快速生成html" aria-label="Permalink to &quot;新建文件时快速生成Html&quot;">​</a></h3><p><strong>安装如下插件：</strong></p><ul><li>FileHeader：自动创建文件开头模板，并且会根据最后的保存时间修改更新时间。<a href="https://github.com/shiyanhui/FileHeader" target="_blank" rel="noreferrer">官网链接</a>。</li><li>CSS Format：css格式化。</li><li>Emmet：它能够让你在编辑器中书写CSS和HTML的缩写并且动态地拓展它，是一个能大幅度提高前端开发效率的一个工具。这个软件的安装过程比较久。<a href="http://docs.emmet.io/" target="_blank" rel="noreferrer">官网教程</a>。</li></ul><p><strong>开始使用：</strong></p><p>新建文件，输入<code>html:5</code>，按[Ctrl + E] 或者 Tab 键，</p><p>参考链接：<a href="http://www.jianshu.com/p/f44e91bf9dfb" target="_blank" rel="noreferrer">Sublime Text 新建文件快速生成Html【头部信息】和【代码补全】、【汉化】</a></p><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><h3 id="sublimecodeintel-javascript代码自动提示-不好用" tabindex="-1">SublimeCodeIntel：JavaScript代码自动提示（不好用） <a class="header-anchor" href="#sublimecodeintel-javascript代码自动提示-不好用" aria-label="Permalink to &quot;SublimeCodeIntel：JavaScript代码自动提示（不好用）&quot;">​</a></h3><p>安装完成后，通过路径Perferences-&gt;Package Settings-&gt;SublimeCodeIntel-&gt;Setting - Defalut打开配置文件。</p><p>将</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;codeintel_selected_catalogs&quot;: [&quot;jQuery&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>改为：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;codeintel_selected_catalogs&quot;: [&quot;JavaScript&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>保存后重启软件。</p><p>参考链接：<a href="http://blog.csdn.net/hehexiaoxia/article/details/54134756" target="_blank" rel="noreferrer">#</a></p><h3 id="javascript-complet-javascript代码自动提示" tabindex="-1">javascript complet：JavaScript代码自动提示 <a class="header-anchor" href="#javascript-complet-javascript代码自动提示" aria-label="Permalink to &quot;javascript complet：JavaScript代码自动提示&quot;">​</a></h3><ul><li><p><a href="https://packagecontrol.io/packages/JavaScript%20Completions" target="_blank" rel="noreferrer">官网链接</a></p></li><li><p><a href="https://github.com/pichillilorenzo/JavaScript-Completions" target="_blank" rel="noreferrer">GitHub链接</a></p></li></ul><p>在google上搜关键字&quot;sublime javascript complete&quot;找到的。另外还搜到一个<a href="https://github.com/alienhard/SublimeAllAutocomplete" target="_blank" rel="noreferrer">SublimeAllAutocomp lete</a></p><h3 id="jsformat-js代码格式化" tabindex="-1">JsFormat：JS代码格式化 <a class="header-anchor" href="#jsformat-js代码格式化" aria-label="Permalink to &quot;JsFormat：JS代码格式化&quot;">​</a></h3><p>快捷键是：选中JS代码，然后按ctrl+alt+f。</p><p>或者，先用快捷键打开命令面板 “ctrl + shift + p”, 再输入 “Format: Javascript” 就可以使用格式化命令</p><h3 id="sublime-server" tabindex="-1">Sublime Server <a class="header-anchor" href="#sublime-server" aria-label="Permalink to &quot;Sublime Server&quot;">​</a></h3><p>我们如果右键在浏览器中打开html网页，其实是以<strong>文件路径</strong>的方式打开的，导致很多api无法操作。最好的办法是：将html在服务器上打开。</p><p>我们如果安装 <code>Sublime Server</code>，就可以让网页在本地的服务器上打开。</p><p>安装成功之后，使用步骤如下：</p><p>（1）选择菜单栏&quot;Tools --&gt; SublimeServer --&gt; Start SublimeServer&quot;启动服务器。</p><p>（2）在html文档里，右键选择 &quot;View in SublimeServer&quot;。</p><p>如果想关闭服务器，直接把Sublime Text 整个软件关掉就好。其他的关闭方式容易导致软件卡死。</p><h2 id="代码快速生成" tabindex="-1">代码快速生成 <a class="header-anchor" href="#代码快速生成" aria-label="Permalink to &quot;代码快速生成&quot;">​</a></h2><p>（1）<code>&gt;</code>符号的技巧：</p><p>输入<code>ul&gt;li*9</code>，然后按tab键，生成的代码如下；（符号<code>&gt;</code>是包含的关系）</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;a&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="sublime-text-快捷键" tabindex="-1">sublime text 快捷键 <a class="header-anchor" href="#sublime-text-快捷键" aria-label="Permalink to &quot;sublime text 快捷键&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">Win快捷键</th><th style="text-align:left;">Mac快捷键</th><th style="text-align:left;">作用</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">html:5+tab</td><td style="text-align:left;"></td><td style="text-align:left;">html结构代码</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">tab</td><td style="text-align:left;"></td><td style="text-align:left;">补全标签代码</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">tab</td><td style="text-align:left;">补全标签代码</td><td style="text-align:left;"></td><td style="text-align:left;">比如，在html文件中输入<code>div</code>，然后 按住tab键后，会自动生成<code>&lt;div&gt;&lt;/div&gt;</code>。</td></tr><tr><td style="text-align:left;"><strong>Ctrl + Shift + D</strong></td><td style="text-align:left;">Cmd + Shift + D</td><td style="text-align:left;">复制当前行到下一行</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl+Shift+K</td><td style="text-align:left;"></td><td style="text-align:left;">快速删除整行</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl+鼠标左键单击</td><td style="text-align:left;"></td><td style="text-align:left;">集体输入</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl+H</td><td style="text-align:left;">Option+Cmd+F</td><td style="text-align:left;">查找替换</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl+/</td><td style="text-align:left;"></td><td style="text-align:left;">注释单行</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl+Shift+/</td><td style="text-align:left;"></td><td style="text-align:left;">注释多行</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl+L</td><td style="text-align:left;"></td><td style="text-align:left;">快速选中整行，继续操作则继续选择下一行，效果和 <code>Shift + ↓</code> 效果一样</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>Ctrl+Shift+L</strong></td><td style="text-align:left;"></td><td style="text-align:left;">先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行</td><td style="text-align:left;">经常与上一个快捷键结合起来使用</td></tr><tr><td style="text-align:left;"><strong>Ctrl + Shift +【↑/↓</strong></td><td style="text-align:left;">Ctrl + Cmd +↑/↓</td><td style="text-align:left;">移动当前行</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">F11</td><td style="text-align:left;"></td><td style="text-align:left;">全屏</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="推荐阅读" tabindex="-1">推荐阅读 <a class="header-anchor" href="#推荐阅读" aria-label="Permalink to &quot;推荐阅读&quot;">​</a></h2><ul><li><a href="https://github.com/smyhvae/tools/blob/master/01-%E4%B8%AA%E4%BA%BA%E6%95%B4%E7%90%86/Sublime%20Text%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.md" target="_blank" rel="noreferrer">Sublime Text使用技巧</a></li></ul><p>我自己整理的。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://chinagdg.org/2015/12/%E5%83%8F-sublime-text-%E4%B8%80%E6%A0%B7%E4%BD%BF%E7%94%A8-chrome-devtools/" target="_blank" rel="noreferrer">像 Sublime Text 一样使用 Chrome DevTools</a></li></ul>`,39),n=[i];function r(h,p,d,g,o,k){return a(),e("div",null,n)}const b=t(l,[["render",r]]);export{c as __pageData,b as default};
