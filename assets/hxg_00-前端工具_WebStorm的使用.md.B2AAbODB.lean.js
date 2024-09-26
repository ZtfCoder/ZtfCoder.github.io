import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.sGs2IBkb.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hxg/00-前端工具/WebStorm的使用.md","filePath":"hxg/00-前端工具/WebStorm的使用.md","lastUpdated":1725860495000}'),l={name:"hxg/00-前端工具/WebStorm的使用.md"};function e(p,s,h,r,k,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="webstorm的简单设置" tabindex="-1">WebStorm的简单设置 <a class="header-anchor" href="#webstorm的简单设置" aria-label="Permalink to &quot;WebStorm的简单设置&quot;">​</a></h2><h4 id="_1、主题修改" tabindex="-1">1、主题修改： <a class="header-anchor" href="#_1、主题修改" aria-label="Permalink to &quot;1、主题修改：&quot;">​</a></h4><p>可能大家会觉得软件的界面不太好看，我们可以换一下主题。选择菜单栏“File--settings--appearance--theme”，主题选择 Dracula：</p><p><img src="http://img.smyhvae.com/20180118_1600.png" alt=""></p><h4 id="_2、导入第三方主题" tabindex="-1">2、导入第三方主题： <a class="header-anchor" href="#_2、导入第三方主题" aria-label="Permalink to &quot;2、导入第三方主题：&quot;">​</a></h4><p>系统提供的两种主题可能都不太好看，我们可以进入网站<a href="http://color-themes.com/" target="_blank" rel="noreferrer">http://color-themes.com/</a>来获取第三方主题，这里推荐两个主题，大家二选一即可：</p><ul><li><p><a href="https://github.com/y3sh/Intellij-Colors-Sublime-Monokai" target="_blank" rel="noreferrer">Sublime</a></p></li><li><p><a href="https://github.com/ChrisRM/material-theme-jetbrains" target="_blank" rel="noreferrer">Material</a></p></li></ul><p><img src="http://img.smyhvae.com/20180118_1636.png" alt=""></p><p><img src="http://img.smyhvae.com/20180118_1637.png" alt=""></p><p>上图中，在网站<a href="http://color-themes.com/" target="_blank" rel="noreferrer">http://color-themes.com/</a>中将主题下载之后，是一个jar包。那怎么导入到WebStorm呢？</p><p>别着急，回到WebStorm，选择菜单栏“ File-Import Settings”，将下载好的jar包导入即可。</p><h4 id="_3、代码字体修改" tabindex="-1">3、代码字体修改： <a class="header-anchor" href="#_3、代码字体修改" aria-label="Permalink to &quot;3、代码字体修改：&quot;">​</a></h4><p>选择菜单栏“File--settings--Editor--Font”：</p><p><img src="http://img.smyhvae.com/20180118_1627.png" alt=""></p><p>上图中，点击红框部分，然后弹出如下界面：</p><p><img src="http://img.smyhvae.com/20180118_1628.png" alt=""></p><p>我们在上图中修改代码的字体。</p><p>修改完之后发现 WebStorm 的一些默认字体（比如侧边栏的工程目录的字体）并没有发生变化，如果想改的话，也可以改（我个人一般是不改的）。</p><h4 id="_4、关闭更新" tabindex="-1">4、关闭更新： <a class="header-anchor" href="#_4、关闭更新" aria-label="Permalink to &quot;4、关闭更新：&quot;">​</a></h4><p>如下图所示：</p><p><img src="http://img.smyhvae.com/20180118_1646.png" alt=""></p><h4 id="_5、快捷键习惯的修改" tabindex="-1">5、快捷键习惯的修改： <a class="header-anchor" href="#_5、快捷键习惯的修改" aria-label="Permalink to &quot;5、快捷键习惯的修改：&quot;">​</a></h4><h4 id="_7、配置代码的自动提示" tabindex="-1">7、配置代码的自动提示： <a class="header-anchor" href="#_7、配置代码的自动提示" aria-label="Permalink to &quot;7、配置代码的自动提示：&quot;">​</a></h4><h4 id="_14、修改文件编码为utf-8" tabindex="-1">14、修改文件编码为UTF-8： <a class="header-anchor" href="#_14、修改文件编码为utf-8" aria-label="Permalink to &quot;14、修改文件编码为UTF-8：&quot;">​</a></h4><p>WebStorm 2017.3.3版本的默认编码方式是 GBK，我们还是统一设置为UTF-8吧，不要坑队友哦：</p><p><img src="http://img.smyhvae.com/20180124_1856.png" alt=""></p><h3 id="新建一个空的项目" tabindex="-1">新建一个空的项目 <a class="header-anchor" href="#新建一个空的项目" aria-label="Permalink to &quot;新建一个空的项目&quot;">​</a></h3><p>配置完成后，可以开始新建一个项目文件夹（站点），项目通常包含如下内容：</p><ul><li><p>首页：index.html</p></li><li><p>样式：css文件夹</p><ul><li>index.css</li><li>相同样式：全局样式、公共样式。起名为：base.css（基本样式）或者 global.css (全局样式)</li></ul></li><li><p>图片：images文件夹、文件</p></li><li><p>特效：js文件夹、js文件</p></li></ul><p><strong>步骤如下：</strong></p><p>（1）新建一个空的项目： <img src="http://img.smyhvae.com/20180118_1720.png" alt=""></p><p>（2）然后新建一个html文件：</p><p><img src="http://img.smyhvae.com/20180118_1602.png" alt=""></p><p>（3）新建一个空的文件夹，命名为<code>css</code>：</p><p><img src="http://img.smyhvae.com/20180118_1725.png" alt=""></p><p>然后在这个css文件夹中，新建样式表：（比如index.css\\base.css）</p><p><img src="http://img.smyhvae.com/20180118_1730.png" alt=""></p><p>（4）最后新建一个images文件夹，用于存放土片。这样的话，一个基本的项目结构就搭建好了：</p><p><img src="http://img.smyhvae.com/20180118_1733.png" alt=""></p><p>接下来，开始运用起你们的前端知识吧。</p><p>（5）如果要新建JS文件的话，操作如下：</p><p><img src="http://img.smyhvae.com/20180124_1859.png" alt=""></p><h2 id="使用技巧" tabindex="-1">使用技巧 <a class="header-anchor" href="#使用技巧" aria-label="Permalink to &quot;使用技巧&quot;">​</a></h2><h4 id="多光标编辑" tabindex="-1">多光标编辑 <a class="header-anchor" href="#多光标编辑" aria-label="Permalink to &quot;多光标编辑&quot;">​</a></h4><p>我们可以按住鼠标不松手，选中多个光标，然后同时编辑：</p><h4 id="随时在浏览器中看代码效果" tabindex="-1">随时在浏览器中看代码效果 <a class="header-anchor" href="#随时在浏览器中看代码效果" aria-label="Permalink to &quot;随时在浏览器中看代码效果&quot;">​</a></h4><p>20180118_1658.png</p><p>如上图所示，我们可以点击右上角的浏览器图标，在各个浏览器中看效果。</p><h4 id="实时查看颜色" tabindex="-1">实时查看颜色 <a class="header-anchor" href="#实时查看颜色" aria-label="Permalink to &quot;实时查看颜色&quot;">​</a></h4><p>写代码时如果想输入颜色，会自动提示颜色的预览。</p><p><img src="http://img.smyhvae.com/20180118_1702.png" alt=""></p><p>点击最左侧的颜色预览，还能弹出调色板：</p><p><img src="http://img.smyhvae.com/20180118_1710.gif" alt=""></p><h2 id="代码的自动补齐" tabindex="-1">代码的自动补齐 <a class="header-anchor" href="#代码的自动补齐" aria-label="Permalink to &quot;代码的自动补齐&quot;">​</a></h2><p>（1）在html文档中，输入<code>div*10</code>，按tab键后，弹出的效果如下：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>（2）在html文档中，输入如下部分：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.search-logo+.search-input+.search-car+.search-moreA</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>按tab键后，弹出的效果如下：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search-logo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search-input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search-car&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search-moreA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>你看，京东的搜索框就包含了这几个div：</p><p>20180122_1045.png</p><p>（3）方法的注释：</p><p>方法写完之后（注意，一定要先写完整），我们在方法的前面输入<code>/**</code>，然后回车，会发现，注释的格式会自动补齐。</p><p>比如：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 功能：给定元素查找他的第一个元素子节点，并返回</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ele</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Element|*|Node}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getFirstNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ele</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ele.firstElementChild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ele.firstChild;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-label="Permalink to &quot;常用快捷键&quot;">​</a></h2><h4 id="标签环绕" tabindex="-1">标签环绕 <a class="header-anchor" href="#标签环绕" aria-label="Permalink to &quot;标签环绕&quot;">​</a></h4><p>输入一段字符后，按住<code>Ctrl + Alt + T</code>，可以用标签将这段字符环绕：</p><p><img src="http://img.smyhvae.com/20180118_1719.gif" alt=""></p><h4 id="选中正行中的文本" tabindex="-1">选中正行中的文本 <a class="header-anchor" href="#选中正行中的文本" aria-label="Permalink to &quot;选中正行中的文本&quot;">​</a></h4><p>比如下面这行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    text-align: center;  /*让 li 里面的文本水平方向居中*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果直接按 【ctrl+C】的话，复制的是整行的内容，把前面的空格也包含进去了。如果不想复制空格，有另外一个办法：将光标放在行尾，然后按住【shift+home】，就能选中你想要的内容了。</p>`,74)]))}const c=i(l,[["render",e]]);export{g as __pageData,c as default};
