import{_ as p,D as e,c as t,I as i,j as s,a,w as r,a5 as h,o as c}from"./chunks/framework.DP4ksDbn.js";const F=JSON.parse('{"title":"01-Vue的介绍和vue-cli","description":"","frontmatter":{"title":"01-Vue的介绍和vue-cli","publish":true},"headers":[],"relativePath":"hxg/12-Vue基础/01-Vue的介绍和vue-cli.md","filePath":"hxg/12-Vue基础/01-Vue的介绍和vue-cli.md","lastUpdated":1725860495000}'),d={name:"hxg/12-Vue基础/01-Vue的介绍和vue-cli.md"},o=h(`<h2 id="mvvm模式" tabindex="-1">MVVM模式 <a class="header-anchor" href="#mvvm模式" aria-label="Permalink to &quot;MVVM模式&quot;">​</a></h2><p><img src="http://img.smyhvae.com/20180420_2150.png" alt=""></p><ul><li><p>Model：负责数据存储</p></li><li><p>View：负责页面展示</p></li><li><p>View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示</p></li></ul><h2 id="关于框架" tabindex="-1">关于框架 <a class="header-anchor" href="#关于框架" aria-label="Permalink to &quot;关于框架&quot;">​</a></h2><h3 id="为什么要学习流行框架" tabindex="-1">为什么要学习流行框架 <a class="header-anchor" href="#为什么要学习流行框架" aria-label="Permalink to &quot;为什么要学习流行框架&quot;">​</a></h3><p><strong>1、企业为了提高开发效率</strong>：在企业中，时间就是效率，效率就是金钱；企业中，使用框架，能够提高开发的效率。</p><p><strong>提高开发效率的发展历程</strong>：</p><p>原生JS -&gt; Jquery之类的类库 -&gt; 前端模板引擎 -&gt; Angular.js / Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念）</p><p>2、在Vue中，一个核心的概念就是：数据驱动，避免手动操作DOM元素。这样的话，可以让前端程序员可以更多的时间去关注数据的业务逻辑，而不是关心 DOM 是如何渲染的了。</p><h3 id="框架和库的区别" tabindex="-1">框架和库的区别 <a class="header-anchor" href="#框架和库的区别" aria-label="Permalink to &quot;框架和库的区别&quot;">​</a></h3><p><strong>框架</strong>：</p><p>框架是一套完整的解决方案。</p><p>对项目的<strong>侵入性</strong>较大，项目如果需要更换框架，则需要重新架构整个项目。但是优点也很明显：功能完善、提供了一整套的解决方案。</p><p><strong>库（插件）</strong>：</p><p>只是提供某一个小功能。</p><p>对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。</p><p>举例：</p><ul><li><p>从Jquery 切换到 Zepto</p></li><li><p>从 EJS 切换到 art-template</p></li></ul><h2 id="前端的各种框架" tabindex="-1">前端的各种框架 <a class="header-anchor" href="#前端的各种框架" aria-label="Permalink to &quot;前端的各种框架&quot;">​</a></h2><h3 id="vue-和-react-的相同点" tabindex="-1">Vue 和 React 的相同点 <a class="header-anchor" href="#vue-和-react-的相同点" aria-label="Permalink to &quot;Vue 和 React 的相同点&quot;">​</a></h3><ul><li><p>利用虚拟DOM实现快速渲染</p></li><li><p>轻量级</p></li><li><p>响应式组件</p></li><li><p>支持服务器端渲染</p></li><li><p>易于集成路由工具、打包工具以及状态管理工具</p></li></ul><p>PS：Vue 在国内很受欢迎；React 在国内和国外都很受欢迎，适合做大型网站。</p><h3 id="什么是虚拟-dom" tabindex="-1">什么是虚拟 DOM <a class="header-anchor" href="#什么是虚拟-dom" aria-label="Permalink to &quot;什么是虚拟 DOM&quot;">​</a></h3><p>传统的web开发，是利用 jQuery操作DOM，这是非常耗资源的。</p><p>我们可以在 JS 的内存里构建类似于DOM的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到html里去。这就形成了虚拟 DOM。</p><p>Vue1.0没有虚拟DOM，Vue2.0改成了基于虚拟DOM。</p><h3 id="前端框架回顾" tabindex="-1">前端框架回顾 <a class="header-anchor" href="#前端框架回顾" aria-label="Permalink to &quot;前端框架回顾&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20180302_1645.png" alt=""></p><p><img src="http://img.smyhvae.com/20180302_1651.png" alt=""></p><p><img src="http://img.smyhvae.com/20180302_1652.png" alt=""></p><p>Vue框架中，没有控制器。</p><h2 id="vue-框架" tabindex="-1">Vue 框架 <a class="header-anchor" href="#vue-框架" aria-label="Permalink to &quot;Vue 框架&quot;">​</a></h2><h3 id="发展历史" tabindex="-1">发展历史 <a class="header-anchor" href="#发展历史" aria-label="Permalink to &quot;发展历史&quot;">​</a></h3><ul><li><p>2013年底作为尤雨溪个人实验项目开始开发</p></li><li><p>2014年2月公开发布。</p></li><li><p>2014年11月发布0.11版本</p></li><li><p>2016年10月发布2.0版本。</p></li></ul><h3 id="相关网址" tabindex="-1">相关网址 <a class="header-anchor" href="#相关网址" aria-label="Permalink to &quot;相关网址&quot;">​</a></h3><ul><li><p><a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">中文官网</a></p></li><li><p><a href="https://forum.vuejs.org/" target="_blank" rel="noreferrer">vuejs官方论坛</a></p></li><li><p>GitHub地址：<a href="https://github.com/vuejs/vue" target="_blank" rel="noreferrer">https://github.com/vuejs/vue</a></p></li><li><p>Vue1.0 在线文档：<a href="http://v1-cn.vuejs.org/guide/" target="_blank" rel="noreferrer">http://v1-cn.vuejs.org/guide/</a></p></li><li><p>Vue2.x 在线文档：<a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/</a></p></li><li><p>Vue1下载地址：<a href="http://v1-cn.vuejs.org/js/vue.js" target="_blank" rel="noreferrer">http://v1-cn.vuejs.org/js/vue.js</a></p></li><li><p>Vue2下载地址：<a href="https://cdn.jsdelivr.net/npm/vue/" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/vue/</a></p></li></ul><p><img src="http://img.smyhvae.com/20180302_1658.png" alt=""></p><p>上方截图的时间：2018-03-02。</p><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。</p><p>Vue 以及大型 Vue 项目所需的周边技术，构成了生态。</p><p>渐进式框架图：</p><p><img src="http://img.smyhvae.com/20180302_1701.png" alt=""></p><h3 id="vue框架的特点" tabindex="-1">Vue框架的特点 <a class="header-anchor" href="#vue框架的特点" aria-label="Permalink to &quot;Vue框架的特点&quot;">​</a></h3><ul><li><p>模板渲染：基于 html 的模板语法，学习成本低。</p></li><li><p>响应式的更新机制：数据改变之后，视图会自动刷新。【重要】</p></li><li><p>渐进式框架</p></li><li><p>组件化/模块化</p></li><li><p>轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到60kb）。</p></li></ul><h2 id="vue-的环境搭建" tabindex="-1">Vue 的环境搭建 <a class="header-anchor" href="#vue-的环境搭建" aria-label="Permalink to &quot;Vue 的环境搭建&quot;">​</a></h2><blockquote><p>我们首先要安装好 NVM、Node.js环境，然后再来做下面的操作。</p></blockquote><h3 id="常见的插件" tabindex="-1">常见的插件 <a class="header-anchor" href="#常见的插件" aria-label="Permalink to &quot;常见的插件&quot;">​</a></h3><ul><li><p>Webpack：代码模块化构建打包工具。</p></li><li><p>Gulp：基于流的自动化构建工具。</p></li><li><p>Babel：使用最新的 规范来编写 js。</p></li><li><p>Vue：构建数据驱动的Web界面的渐进式框架</p></li><li><p>Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。</p></li></ul><p>以上这些包，都可以通过 NPM 这个包管理工具来安装。</p><h3 id="引用-vue-js-文件" tabindex="-1">引用 Vue.js 文件 <a class="header-anchor" href="#引用-vue-js-文件" aria-label="Permalink to &quot;引用 Vue.js 文件&quot;">​</a></h3><p>1、<strong>方式一</strong>：（CDN的方式进行引用）</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Title&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>2、方式二：（下载 vue.js 文件）</p><p>去网站 <a href="https://cdn.jsdelivr.net/npm/vue/" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/vue/</a> 下载 vue.js 文件，直接放到工程文件里，然后引用。</p><p>3、方式三：（NPM的方式安装vue）</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最新稳定版</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果网络不稳定，可以采用下面的方式安装：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ cnpm i vue --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后在代码中通过下面这种方式进行引用：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="利用-vue-cli-新建一个空的项目" tabindex="-1">利用 vue-cli 新建一个空的项目 <a class="header-anchor" href="#利用-vue-cli-新建一个空的项目" aria-label="Permalink to &quot;利用 vue-cli 新建一个空的项目&quot;">​</a></h2><p>Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。</p><h3 id="官方代码参考" tabindex="-1">官方代码参考 <a class="header-anchor" href="#官方代码参考" aria-label="Permalink to &quot;官方代码参考&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  npm install -g @vue/cli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  vue create my-app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  cd my-app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  npm run serve</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>我们根据上方的参考代码，来看看“利用 vue-cli 新建一个空的项目”的步骤。</p><h3 id="安装-vue-cli-命令行工具" tabindex="-1">安装 vue-cli（命令行工具） <a class="header-anchor" href="#安装-vue-cli-命令行工具" aria-label="Permalink to &quot;安装 vue-cli（命令行工具）&quot;">​</a></h3><p>安装命令如下：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装 vue-cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue/cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="初始化一个-simple-项目" tabindex="-1">初始化一个 simple 项目 <a class="header-anchor" href="#初始化一个-simple-项目" aria-label="Permalink to &quot;初始化一个 simple 项目&quot;">​</a></h3><p>（1）首先执行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  vue create my-app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输入上方命令后，会弹出一个选项：</p><p><img src="http://img.smyhvae.com/20190624_163626.png" alt=""></p><p>如果是初学者，直接选<code>default</code>就行。之后会自动生成一个空的初始化项目，包含了项目目录、以及项目依赖的脚本。</p><p>这个空项目的工程文件如下：（请务必仔细研究这个项目的写法和目录结构）</p><ul><li><a href="https://github.com/qianguyihao/web-resource/blob/main/project/2019-06-21-vue-my-app.zip" target="_blank" rel="noreferrer">2019-06-21-vue-my-app.zip</a></li></ul><p>我们可以看到这个项目的结构：</p><p><img src="http://img.smyhvae.com/20190624_160726.png" alt=""></p><ul><li><p>src：项目源码</p></li><li><p>.babelrc：ES6编译插件的配置</p></li><li><p>index.html：单页面的入口</p></li></ul><p>上方截图中，<code>npm install </code>指的是下载各种依赖包，<code>npm run dev</code>指的是打开发包，<code>npm run build</code>指的是打生产包。</p><p>（2）本地运行项目：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  cd my-app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  npm run serve</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>浏览器输入<code>http://localhost:8080/</code>，就可以让这个空的项目在本地跑起来：</p><p><img src="http://img.smyhvae.com/20190624_160229.png" alt=""></p><p>备注：我们在 GitHub上下载的任何Vue有关的项目，第一步都是要首先执行 npm install，安装依赖的 mode_modules，然后再运行。我们发给同事的工程文件，建议不要包含 <code>node_modules</code>。</p><h3 id="构建一个-非-simple-项目" tabindex="-1">构建一个 非 simple 项目 <a class="header-anchor" href="#构建一个-非-simple-项目" aria-label="Permalink to &quot;构建一个 非 simple 项目&quot;">​</a></h3><p>构建一个空的项目，首先执行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ vue create vuedemo2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="http://img.smyhvae.com/20190624_163726.png" alt=""></p><p>上图中，选择 <code>Manually select features</code>，然后根据提示依次输入：</p><p><img src="http://img.smyhvae.com/20190624_164305.png" alt=""></p><ul><li><p>project name：<strong>要求小写</strong>。</p></li><li><p>description：默认即可。</p></li><li><p>vue-router：需要。</p></li><li><p>ESlint：语法检查，初学者可以暂时不需要。</p></li><li><p>单元测试：暂时也不需要。</p></li><li><p>e2e test：不需要。</p></li></ul><p>选择 eslint 的配置：</p><p><img src="http://img.smyhvae.com/20190624_165001.png" alt=""></p><p>然后让这个空的项目就可以在浏览器上跑起来。</p><h2 id="vue-项目结构分析" tabindex="-1">vue 项目结构分析 <a class="header-anchor" href="#vue-项目结构分析" aria-label="Permalink to &quot;vue 项目结构分析&quot;">​</a></h2><p><img src="http://img.smyhvae.com/20180501_2100.png" alt=""></p><ul><li><p>buid：打包配置的文件夹</p></li><li><p>config：webpack对应的配置</p></li><li><p>src：开发项目的源码</p><ul><li>App.vue：入口组件。<code>.vue</code>文件都是组件。</li><li>main.js：项目入口文件。</li></ul></li><li><p>static：存放静态资源</p></li><li><p><code>.babelrc</code>：解析ES6的配置文件</p></li><li><p><code>.editorcofnig</code>：编辑器的配置</p></li><li><p><code>.postcssrc.js</code>：html添加前缀的配置</p></li><li><p><code>index.html</code>：单页面的入口。通过 webpack打包后，会把 src 源码进行编译，插入到这个 html 里面来。</p></li><li><p><code>package.json</code>：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等。</p></li></ul><h3 id="图片的base64编码" tabindex="-1">图片的base64编码 <a class="header-anchor" href="#图片的base64编码" aria-label="Permalink to &quot;图片的base64编码&quot;">​</a></h3><p>默认是10k以下，建议都通过 base64编码。在配置文件<code>webpack.base.conf.js</code>中进行修改：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,</span></span>
<span class="line"><span>        loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span>        options: {</span></span>
<span class="line"><span>          limit: 10000,</span></span>
<span class="line"><span>          name: utils.assetsPath(&#39;img/[name].[hash:7].[ext]&#39;)</span></span>
<span class="line"><span>        }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="我的公众号" tabindex="-1">我的公众号 <a class="header-anchor" href="#我的公众号" aria-label="Permalink to &quot;我的公众号&quot;">​</a></h2>`,103),u=s("strong",null,"更多技能",-1),k=s("strong",null,"千古壹号",-1),m=s("code",null,"qianguyihao",-1),b=s("p",null,"扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：",-1),g=s("p",null,[s("img",{src:"http://img.smyhvae.com/20160401_01.jpg",alt:""})],-1);function v(E,y,_,f,q,V){const n=e("ArticleTopAd"),l=e("font");return c(),t("div",null,[i(n),o,s("p",null,[a("想学习"),i(l,{color:"#0000ff"},{default:r(()=>[u]),_:1}),a("？不妨关注我的微信公众号："),k,a("（id："),m,a("）。")]),b,g])}const j=p(d,[["render",v]]);export{F as __pageData,j as default};
