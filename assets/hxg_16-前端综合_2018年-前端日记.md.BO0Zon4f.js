import{_ as a,c as s,o as i,a5 as e}from"./chunks/framework.DP4ksDbn.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hxg/16-前端综合/2018年-前端日记.md","filePath":"hxg/16-前端综合/2018年-前端日记.md","lastUpdated":1725860495000}'),n={name:"hxg/16-前端综合/2018年-前端日记.md"},l=e(`<h2 id="_2018-年-4-月份" tabindex="-1">2018 年 4 月份 <a class="header-anchor" href="#_2018-年-4-月份" aria-label="Permalink to &quot;2018 年 4 月份&quot;">​</a></h2><h3 id="_2018-04-25" tabindex="-1">2018-04-25 <a class="header-anchor" href="#_2018-04-25" aria-label="Permalink to &quot;2018-04-25&quot;">​</a></h3><ul><li>userAgent 相关：<a href="http://www.cnblogs.com/7z7chn/p/5370352.html" target="_blank" rel="noreferrer">判断微信内置浏览器的 UserAgent</a></li></ul><h3 id="_2018-04-26" tabindex="-1">2018-04-26 <a class="header-anchor" href="#_2018-04-26" aria-label="Permalink to &quot;2018-04-26&quot;">​</a></h3><p><strong>前端相关</strong>：</p><ul><li><p>流程图制作工具：<a href="https://www.processon.com/" target="_blank" rel="noreferrer">ProcessOn</a></p></li><li><p>api 方法的浏览器兼容性问题，可以在这个网站上看：<a href="https://caniuse.com/" target="_blank" rel="noreferrer">https://caniuse.com/</a></p></li><li><p>CSS3 的兼容性问题，不一定要使用-webkit-, -moz-, -o-, -ms-等私有前缀。可以使用 PostCSS。<a href="https://www.zhihu.com/question/20597072" target="_blank" rel="noreferrer">知乎</a></p></li><li><p>浏览器常见的内核有：V8、WebKit。另外腾讯还有个<a href="http://x5.tencent.com/" target="_blank" rel="noreferrer">X5</a>。</p></li><li><p>要查一下 display none 和 visibility hidden 的区别。</p></li><li><p>ES 的各个版本在 Node 环境下的支持情况，可以查看这个网站：<a href="http://node.green/" target="_blank" rel="noreferrer">http://node.green/</a></p></li><li><p>promise 的实现，关键词：Promises/A、Promises/B、<a href="https://github.com/petkaantonov/bluebird" target="_blank" rel="noreferrer">bluebird</a></p></li></ul><p><strong>综合</strong>：</p><ul><li>whistle 安装证书后，可以拦截 https 请求。但是，我现在又不想拦截了，该怎么卸载证书呢？</li></ul><h3 id="_2018-04-27" tabindex="-1">2018-04-27 <a class="header-anchor" href="#_2018-04-27" aria-label="Permalink to &quot;2018-04-27&quot;">​</a></h3><ul><li><p><a href="https://github.com/Strider-CD/strider" target="_blank" rel="noreferrer">strider</a>：可以用来部署项目。</p></li><li><p>有必要了解一下电商 1.0、电商 2.0、电商 3.0 的概念。</p></li></ul><h3 id="_2018-05-02" tabindex="-1">2018-05-02 <a class="header-anchor" href="#_2018-05-02" aria-label="Permalink to &quot;2018-05-02&quot;">​</a></h3><ul><li><p><code>location.pathname</code>：获取 url 的后半部分。参考链接：<a href="http://www.cnblogs.com/itjeff/p/4645262.html" target="_blank" rel="noreferrer">#</a></p></li><li><p>代码解读：<code>callback &amp;&amp; callback()</code>的含义</p></li></ul><h3 id="_2018-05-03" tabindex="-1">2018-05-03 <a class="header-anchor" href="#_2018-05-03" aria-label="Permalink to &quot;2018-05-03&quot;">​</a></h3><ul><li><p>各种框架实现的 todo 项目：<a href="http://todomvc.com/" target="_blank" rel="noreferrer">http://todomvc.com/</a></p></li><li><p>对比 sass、less、stylus 这三个 css 预处理器，zqc 说，后面两个已经不怎么用了。sass 比 less 强大，stylus 的书写方式比较奇怪。</p></li><li><p>npm 命令中，--save 和 --save-dev 的区别。参考链接：<a href="http://pwcong.me/2017/01/05/npm%E5%BC%95%E5%85%A5%E6%A8%A1%E5%9D%97%E6%97%B6--save-%E4%B8%8E--save-dev-%E7%9A%84%E5%8C%BA%E5%88%AB/" target="_blank" rel="noreferrer">http://pwcong.me/2017/01/05/npm引入模块时--save-与--save-dev-的区别/</a></p></li></ul><h3 id="_2018-05-07" tabindex="-1">2018-05-07 <a class="header-anchor" href="#_2018-05-07" aria-label="Permalink to &quot;2018-05-07&quot;">​</a></h3><ul><li>Vue 组件的注册</li></ul><p>有一种组件注册的方式是 Vue+jQuery：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;my-div&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  $.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    props: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    methods: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filters: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vueTpl.subs.myDiv</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>根据 zqc 的建议，不一定要使用<code>$.extend()</code>，还可以使用<code>object.assign()</code>。</p><h3 id="_2018-05-08" tabindex="-1">2018-05-08 <a class="header-anchor" href="#_2018-05-08" aria-label="Permalink to &quot;2018-05-08&quot;">​</a></h3><ul><li>sku、spu 的概念</li></ul><h3 id="_2018-05-09" tabindex="-1">2018-05-09 <a class="header-anchor" href="#_2018-05-09" aria-label="Permalink to &quot;2018-05-09&quot;">​</a></h3><ul><li>输入框正则的匹配</li></ul><p>让输入框仅支持输入单个 id，且为字符串。如果输入多个 id，或者非数字的字符，则自动删除：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:keyup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;querysku = querysku.replace(/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/,&#39;&#39;)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2018-05-10" tabindex="-1">2018-05-10 <a class="header-anchor" href="#_2018-05-10" aria-label="Permalink to &quot;2018-05-10&quot;">​</a></h3><ul><li><p>如果在控制台看到网络请求陈功，数据也获取成功，但是在 ajax 里走的是 error（数据获取失败），说明是 ajax 代码的判断逻辑有问题。</p></li><li><p>服务器返回的 json 数据到底是对象还是字符串？</p></li><li><p>josn 数据里的字段，有顺序吗？比如下面这段：</p></li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;1492948848&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;spec&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hehe.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;橘色   &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;【多色可选】丽装铺园纯色百搭简约打底T恤女 橘色 M&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;1492948847&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;spec&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;imagePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lala.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;灰色   &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;【多色可选】丽装铺园纯色百搭简约打底T恤女 灰色 S&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;S  &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>答案：顺序不重要。</p><ul><li><p>Vue 开发中，在其他地方用到 Vue 实例中的数据时，一定要用 this，或者是<code>vm.$data.myName</code>之类的。</p></li><li><p>疑问：下面的 src 路径的前面，为何要加<code>//</code>：</p></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img v-bind:src=&quot;&#39;//img14.smyhvae.com/evalpic/s240x240_&#39;+value.imagePath&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我发现，控制台看到的输出 src 中，会自动加上 http。如果前面不加<code>//</code>则表示相对路径。</p><h3 id="_2018-05-11" tabindex="-1">2018-05-11 <a class="header-anchor" href="#_2018-05-11" aria-label="Permalink to &quot;2018-05-11&quot;">​</a></h3><ul><li>将逗号分隔的字符串，转换为数组： <code>str.split(&quot;,&quot;)</code>。即使数组中只有一个元素，也可以这样用。参考链接：<a href="https://blog.csdn.net/erlian1992/article/details/50561452" target="_blank" rel="noreferrer">#</a></li></ul><h3 id="_2018-05-14" tabindex="-1">2018-05-14 <a class="header-anchor" href="#_2018-05-14" aria-label="Permalink to &quot;2018-05-14&quot;">​</a></h3><ul><li><p>ajax 发的是 post 请求，但是后台却只收到了部分数据怎么办？答案：前端的 post 请求记得加 content-type 字段，否则会被识别成 get 请求。</p></li><li><p>获取 jsonp 的数据，只能用 get 请求。如果要用 post 请求，那就传 json 数据，另外，可能还要解决跨域的问题。跨域需要在后台配置，三行代码即可。</p></li><li><p>p 标签里的文字溢出怎么办？</p></li><li><p>whistle 该怎样 mock 数据？</p></li></ul><h3 id="_2018-05-16" tabindex="-1">2018-05-16 <a class="header-anchor" href="#_2018-05-16" aria-label="Permalink to &quot;2018-05-16&quot;">​</a></h3><ul><li><p>在控制台看标签的样式，发现有些样式是出现在<code>element.style</code>中的（比如图片的尺寸），但是在代码里并没有找到。那是因为，这些样式是在 js 代码中<strong>计算</strong>出来的。</p></li><li><p>图片自适应显示</p></li><li><p><a href="http://www.zhangxinxu.com/wordpress/2012/09/new-viewport-relative-units-vw-vh-vm-vmin/" target="_blank" rel="noreferrer">视区相关单位 vw, vh..简介以及可实际应用场景</a></p></li><li><p>jingwen 推荐的 iconMoon 图标网站。网址：<a href="https://icomoon.io/" target="_blank" rel="noreferrer">https://icomoon.io/</a></p></li></ul><h3 id="_2018-06-01" tabindex="-1">2018-06-01 <a class="header-anchor" href="#_2018-06-01" aria-label="Permalink to &quot;2018-06-01&quot;">​</a></h3><ul><li><code>PingFangSC</code>字体是 iOS 独有的字体。<code>PingFangSC-Regular</code>是常规字体，<code>PingFangSC-Semibold</code>是加粗字体。如果我在代码里设置了这个字体，那么，ios 上可以看到效果，但是 Android 上看不到效果，仍然会采用 Android 系统默认的字体。</li></ul><h3 id="_2018-06-04" tabindex="-1">2018-06-04 <a class="header-anchor" href="#_2018-06-04" aria-label="Permalink to &quot;2018-06-04&quot;">​</a></h3><p><strong>1、git 相关</strong>：</p><p>把 branch1 中的某条记录(比如 myLog)，提交到 branch2 中。做法如下：</p><p>先切换到 branch2 中，然后输入如下命令：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git cherry-pick myLog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2018-06-05" tabindex="-1">2018-06-05 <a class="header-anchor" href="#_2018-06-05" aria-label="Permalink to &quot;2018-06-05&quot;">​</a></h3><p><strong>1、font-size</strong>：</p><p><code>font-size</code>的最小值为 12。</p><p>也就是说，浏览器的最小字体为 12，要是再小于这个值，是不生效的。如果想要小于 12，需要在浏览器的高级设置里去修改。</p><p><strong>2、git 多分支同时开发</strong>：</p><p>现在有这样一个场景：我要同时开发一个项目里的两个功能。今天上午开发功能 1，下午开发功能 2。明天上午改功能 1 的 bug，明天下午改功能 2 的 bug。</p><p>相当于是，我现在是<strong>并行</strong>开发两个功能了，要怎么通过 git 来进行协作呢？</p><p>目前考虑到的姣好的方式是：</p><ul><li><p>从 master 拉分支<code>branch1</code>，此分支专门用来开发功能 1，改功能 1 的 bug。</p></li><li><p>再从 master 拉分支<code>branch2</code>，此分支专门用来开发功能 2，改功能 2 的 bug。</p></li></ul><p>以后需要上线哪个功能，就从那个分支 merge 代码到 master。</p><p><strong>3、其他</strong>：</p><ul><li><p>两个 span 之间默认有 5px 的 margin</p></li><li><p><strong>shadow-root</strong>：下一代。</p></li></ul><h3 id="_2018-06-07" tabindex="-1">2018-06-07 <a class="header-anchor" href="#_2018-06-07" aria-label="Permalink to &quot;2018-06-07&quot;">​</a></h3><ul><li><p><a href="https://www.teakki.com/p/57dfb44cd3a7507f975e91e4" target="_blank" rel="noreferrer">原生 js 实现淡入淡出效果</a></p></li><li><p>通过 jQuery 获取 Dom 的时候，比如<code>$(&#39;#topNavTop&#39;).css(&#39;background&#39;,&#39;red&#39;)</code>记得要指明是 id 还是 class。</p></li><li><p>每次开发一个新的需求，记得要问清楚：“H5 和小程序”都要做吗？要做的话，工作量基本乘以 2。</p></li></ul><h3 id="_2018-06-14" tabindex="-1">2018-06-14 <a class="header-anchor" href="#_2018-06-14" aria-label="Permalink to &quot;2018-06-14&quot;">​</a></h3><ul><li>pv、uv 的概念</li></ul><h3 id="_2018-06-21" tabindex="-1">2018-06-21 <a class="header-anchor" href="#_2018-06-21" aria-label="Permalink to &quot;2018-06-21&quot;">​</a></h3><ul><li>今天学会了 iPhone 上 WebApp 的真机调试，感觉很高端呀。具体可以看我在本文件夹中写的《前端开发积累》这篇文章。</li></ul><h3 id="_2018-06-27" tabindex="-1">2018-06-27 <a class="header-anchor" href="#_2018-06-27" aria-label="Permalink to &quot;2018-06-27&quot;">​</a></h3><p>没想到，<code>&#39;&#39;</code>和<code>&#39; &#39;</code>竟然还有区别。</p><h3 id="_2018-06-30" tabindex="-1">2018-06-30 <a class="header-anchor" href="#_2018-06-30" aria-label="Permalink to &quot;2018-06-30&quot;">​</a></h3><p><strong>并列条件</strong>：</p><p>来看下面这段代码：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 70</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面的代码，你认为打印的结果是什么？其实，它打印的结果是 true。</p><p>如果我们要实现并列条件，千万不要使用 <code>if(50 &lt; num &lt; 70)</code>，而是要使用<code>if(num &gt; 50 &amp;&amp; num &lt;=70)</code>。</p><h3 id="_2018-07-16" tabindex="-1">2018-07-16 <a class="header-anchor" href="#_2018-07-16" aria-label="Permalink to &quot;2018-07-16&quot;">​</a></h3><p><strong>FAQ：问答系统</strong></p><p>FAQ 是英文<code>Frequently Asked Questions</code>的缩写，中文意思就是“经常问到的问题”，或者更通俗地叫做“常见问题解答”。</p><h3 id="_2018-08-03" tabindex="-1">2018-08-03 <a class="header-anchor" href="#_2018-08-03" aria-label="Permalink to &quot;2018-08-03&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上方代码中，<code>temp2</code>的结果是 0.12，但是请注意，<code>temp</code>的类型 Number 型，而<code>temp2</code>的类型却是 String 型。</p><h3 id="_2018-08-15" tabindex="-1">2018-08-15 <a class="header-anchor" href="#_2018-08-15" aria-label="Permalink to &quot;2018-08-15&quot;">​</a></h3><p>flex 布局常用的三行代码：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center; // 子元素在横轴的对齐方式 （左右居中）</span></span>
<span class="line"><span>    align-items: center;  // 子元素在竖轴的对齐方式（上下居中）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2018-08-16" tabindex="-1">2018-08-16 <a class="header-anchor" href="#_2018-08-16" aria-label="Permalink to &quot;2018-08-16&quot;">​</a></h3><p>用 CSS3 transition 属性实现淡入淡出轮播图：<a href="https://segmentfault.com/a/1190000007648070" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000007648070</a></p><h3 id="_2018-08-20" tabindex="-1">2018-08-20 <a class="header-anchor" href="#_2018-08-20" aria-label="Permalink to &quot;2018-08-20&quot;">​</a></h3><p><strong>小程序问题</strong>：</p><p>用小程序调试时，如果出现故障（比如 item 点击无响应），可能是微信开发者工具 IDE 的版本太低了。注意，IDE 上上虽然提示是最新版，但不一定是官网的最新版。所以，要去官网下载最新版。</p><p>如果还是不行，看看是不是自己的代码写错了。有时候，代码写错了，不一定会有报错提示哦。</p><p><strong>css 问题</strong>：</p><ul><li>css3 实现的 switch 开关按钮：<a href="https://codepen.io/chutou/pen/qdGZQr" target="_blank" rel="noreferrer">https://codepen.io/chutou/pen/qdGZQr</a></li></ul><h3 id="_2018-08-22" tabindex="-1">2018-08-22 <a class="header-anchor" href="#_2018-08-22" aria-label="Permalink to &quot;2018-08-22&quot;">​</a></h3><p><strong>两个 span 之间去空格</strong></p><ul><li>html+css 如何删除行内元素之间的空白/空隙：<a href="http://www.manongjc.com/article/2171.html" target="_blank" rel="noreferrer">http://www.manongjc.com/article/2171.html</a></li></ul><p>方法二亲测有效：让父亲的 font-size 为 0，然后具体设置子元素的 font-size</p><ul><li>去除 inline-block 元素间间距的 N 种方法：<a href="https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/" target="_blank" rel="noreferrer">https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-去除间距/</a></li></ul><h3 id="_2018-08-28-修改用户的-cookie" tabindex="-1">2018-08-28-修改用户的 cookie <a class="header-anchor" href="#_2018-08-28-修改用户的-cookie" aria-label="Permalink to &quot;2018-08-28-修改用户的 cookie&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    document.cookie=&quot;visitkey=98&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2018-09-20" tabindex="-1">2018-09-20 <a class="header-anchor" href="#_2018-09-20" aria-label="Permalink to &quot;2018-09-20&quot;">​</a></h3><p>需求：当导航条滚动到屏幕顶部时（举例顶部的距离 &lt; 0 时），就设置导航条为 fixed。</p><p>实现：如果要设置为导航条为 fixed，正确的做法应该是：给导航条这个父亲一个高度进行占位，然后让导航条的儿子为 fixed。而不是让父亲为 fixed。</p><h3 id="_2018-09-27" tabindex="-1">2018-09-27 <a class="header-anchor" href="#_2018-09-27" aria-label="Permalink to &quot;2018-09-27&quot;">​</a></h3><p>如何让微信小程序禁止下拉_解决小程序下拉出现空白的情况：<a href="http://www.fly63.com/article/detial/1069" target="_blank" rel="noreferrer">http://www.fly63.com/article/detial/1069</a></p><p>我遇到问题的原因是：背景图太大，超出了视图。</p><h3 id="_2018-10-12" tabindex="-1">2018-10-12 <a class="header-anchor" href="#_2018-10-12" aria-label="Permalink to &quot;2018-10-12&quot;">​</a></h3><p>小程序代码中，如果我这样写 view 的度样式：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>height: 60rpx;</span></span>
<span class="line"><span>line-height: 1.5rem;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面的这种写法，并不会让里面的文字上下居中，我在 iPhone 7 plus 中看到的结果是：文字偏上移。</p><p>正确的做法是：（单位一致用 rpx，不要把两个单位混用）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>height: 60rpx;</span></span>
<span class="line"><span>line-height: 60rpx;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2018-10-21" tabindex="-1">2018-10-21 <a class="header-anchor" href="#_2018-10-21" aria-label="Permalink to &quot;2018-10-21&quot;">​</a></h3><p>时间戳和年月日的转换：<a href="https://blog.csdn.net/qq_26747571/article/details/53289120?locationNum=10&amp;fps=1" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_26747571/article/details/53289120?locationNum=10&amp;fps=1</a></p><h3 id="_2018-11-28" tabindex="-1">2018-11-28 <a class="header-anchor" href="#_2018-11-28" aria-label="Permalink to &quot;2018-11-28&quot;">​</a></h3><p>css 实现圆环进度条：<a href="https://blog.csdn.net/wanglei1991gao/article/details/80009252" target="_blank" rel="noreferrer">https://blog.csdn.net/wanglei1991gao/article/details/80009252</a></p><h3 id="_2018-12-13" tabindex="-1">2018-12-13 <a class="header-anchor" href="#_2018-12-13" aria-label="Permalink to &quot;2018-12-13&quot;">​</a></h3><p>对象数组通过对象的属性进行排序：<a href="https://blog.csdn.net/xiaobing_hope/article/details/68638706" target="_blank" rel="noreferrer">https://blog.csdn.net/xiaobing_hope/article/details/68638706</a></p>`,113),t=[l];function p(r,h,o,d,c,k){return i(),s("div",null,t)}const g=a(n,[["render",p]]);export{b as __pageData,g as default};
