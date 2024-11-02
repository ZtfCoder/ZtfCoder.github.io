import{_ as e,c as n,j as s,a as t,a2 as a,o as p}from"./chunks/framework.sGs2IBkb.js";const g=JSON.parse('{"title":"uniapp 介绍","description":"","frontmatter":{"title":"uniapp 介绍","tags":["uniapp","小程序"],"categories":"uniapp","abbrlink":"7318549"},"headers":[],"relativePath":"main/uniapp/uviewui.md","filePath":"main/uniapp/uviewui.md","lastUpdated":1662368311000}'),l={name:"main/uniapp/uviewui.md"};function r(o,i,u,h,d,c){return p(),n("div",null,i[0]||(i[0]=[s("h1",{id:"uviewui",tabindex:"-1"},[t("uviewui "),s("a",{class:"header-anchor",href:"#uviewui","aria-label":'Permalink to "uviewui"'},"​")],-1),s("p",null,"uView是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。",-1),s("p",null,[s("a",{href:"https://www.uviewui.com/components/intro.html",target:"_blank",rel:"noreferrer"},"文档")],-1),s("p",null,"首先使用 hubilde 创建一个uniapp 新项目,使用默认模板",-1),s("p",null,[s("img",{src:"https://images.wupeiyao.top/notes/20210518101450.png",alt:"image-20210518101428788",onclick:"previewImage('https://images.wupeiyao.top/notes/20210518101450.png')"})],-1),a('<p>创建成功后,安装 <code>uviewui </code>组件,</p><p><a href="https://ext.dcloud.net.cn/plugin?id=1593" target="_blank" rel="noreferrer">插件商城</a>,点击使用 <code>hubilde x</code> 导入 导入</p><p>之后会下载一个<code>uviewui </code> 的文件</p><p>我们将<code>uview-ui</code> 这个文件夹移动到我们的项目根目录下</p>',4),s("p",null,[s("img",{src:"https://images.wupeiyao.top/notes/20210518101829.png",alt:"image-20210518101735080",onclick:"previewImage('https://images.wupeiyao.top/notes/20210518101829.png')"})],-1),s("p",null,[s("img",{src:"https://images.wupeiyao.top/notes/20210518101831.png",alt:"image-20210518101815749",onclick:"previewImage('https://images.wupeiyao.top/notes/20210518101831.png')"})],-1),a(`<p>之后,进行组件配置 <strong>采用的是下载安装的方式</strong></p><p>首先需要依赖<a href="https://www.sass.hk/" target="_blank" rel="noreferrer">SASS</a></p><p>这里如果我们没有安装sass 的需要使用HX菜单的 工具-&gt;插件安装中找到&quot;scss/sass编译&quot;插件进行安装</p><h3 id="_1-引入uview主js库" tabindex="-1">1 引入uView主JS库 <a class="header-anchor" href="#_1-引入uview主js库" aria-label="Permalink to &quot;1 引入uView主JS库&quot;">​</a></h3><p>在项目根目录中的<code>main.js</code>中，引入并使用uView的JS库，注意这两行要放在<code>import Vue</code>之后。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uview-ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uView);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_2-引入uview的全局sass主题文件" tabindex="-1">2.引入uView的全局SASS主题文件 <a class="header-anchor" href="#_2-引入uview的全局sass主题文件" aria-label="Permalink to &quot;2.引入uView的全局SASS主题文件&quot;">​</a></h4><p>在项目根目录的<code>uni.scss</code>中引入此文件。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;uview-ui/theme.scss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>注意！</p><p>在<code>App.vue</code>中<strong>首行</strong>的位置引入，注意给style标签加入lang=&quot;scss&quot;属性</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lang=&quot;scss&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/* 注意要写在第一行，同时给style标签加入lang=&quot;scss&quot;属性 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	@import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uview-ui/index.scss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11)]))}const m=e(l,[["render",r]]);export{g as __pageData,m as default};
