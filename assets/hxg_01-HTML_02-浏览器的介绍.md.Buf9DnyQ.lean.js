import{_ as r,c as a,G as l,a2 as n,B as i,o}from"./chunks/framework.sGs2IBkb.js";const b=JSON.parse('{"title":"02-浏览器的介绍","description":"","frontmatter":{"title":"02-浏览器的介绍","publish":true},"headers":[],"relativePath":"hxg/01-HTML/02-浏览器的介绍.md","filePath":"hxg/01-HTML/02-浏览器的介绍.md","lastUpdated":1725860495000}'),s={name:"hxg/01-HTML/02-浏览器的介绍.md"};function p(d,t,c,h,g,x){const e=i("ArticleTopAd");return o(),a("div",null,[l(e),t[0]||(t[0]=n('<h2 id="常见的浏览器" tabindex="-1">常见的浏览器 <a class="header-anchor" href="#常见的浏览器" aria-label="Permalink to &quot;常见的浏览器&quot;">​</a></h2><p>浏览器是网页运行的平台，常见的浏览器有谷歌（Chrome）、Safari、火狐（Firefox）、IE、Edge、Opera等。如下图所示：</p><p><img src="http://img.smyhvae.com/20191204_1900.png" alt=""></p><p>我们重点需要学习的是 Chrome 浏览器。</p><h2 id="浏览器的市场占有份额" tabindex="-1">浏览器的市场占有份额 <a class="header-anchor" href="#浏览器的市场占有份额" aria-label="Permalink to &quot;浏览器的市场占有份额&quot;">​</a></h2><p>浏览器的市场占有份额：<a href="https://tongji.baidu.com/research/site?source=index#browser" target="_blank" rel="noreferrer">https://tongji.baidu.com/research/site?source=index#browser</a></p><p><img src="http://img.smyhvae.com/20200322_1058.png" alt=""></p><p>上面这张图的统计时间是2020年2月。</p><h2 id="浏览器的组成" tabindex="-1">浏览器的组成 <a class="header-anchor" href="#浏览器的组成" aria-label="Permalink to &quot;浏览器的组成&quot;">​</a></h2><p>浏览器分成两部分：</p><ul><li><p>1、渲染引擎（即：浏览器内核）</p></li><li><p>2、JS 引擎</p></li></ul><h3 id="_1、渲染引擎-浏览器内核" tabindex="-1">1、渲染引擎（浏览器内核） <a class="header-anchor" href="#_1、渲染引擎-浏览器内核" aria-label="Permalink to &quot;1、渲染引擎（浏览器内核）&quot;">​</a></h3><p>浏览器所采用的「渲染引擎」也称之为「浏览器内核」，用于解析 HTML和CSS、布局、渲染等工作。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。</p><p><strong>渲染引擎是浏览器兼容性问题出现的根本原因。</strong></p><p>渲染引擎的英文叫做 Rendering Engine。通俗来说，它的作用就是：读取网页内容，计算网页的显示方式并显示在页面上。</p><p>常见浏览器的内核如下：</p><table tabindex="0"><thead><tr><th style="text-align:center;">浏览器</th><th style="text-align:center;">内核</th></tr></thead><tbody><tr><td style="text-align:center;">chrome</td><td style="text-align:center;">Blink</td></tr><tr><td style="text-align:center;">欧鹏</td><td style="text-align:center;">Blink</td></tr><tr><td style="text-align:center;">360安全浏览器</td><td style="text-align:center;">Blink</td></tr><tr><td style="text-align:center;">360极速浏览器</td><td style="text-align:center;">Blink</td></tr><tr><td style="text-align:center;">Safari</td><td style="text-align:center;">Webkit</td></tr><tr><td style="text-align:center;">Firefox 火狐</td><td style="text-align:center;">Gecko</td></tr><tr><td style="text-align:center;">IE</td><td style="text-align:center;">Trident</td></tr></tbody></table><p>备注：360的浏览器，以前使用的IE浏览器的Trident内核，但是现在已经改为使用 chrome 浏览器的 Blink内核。</p><p>另外，移动端的浏览器内核是什么？大家可以自行查阅资料。</p><h3 id="_2、js-引擎" tabindex="-1">2、JS 引擎 <a class="header-anchor" href="#_2、js-引擎" aria-label="Permalink to &quot;2、JS 引擎&quot;">​</a></h3><p>也称为 JS 解释器。 用来解析和执行网页中的JavaScript代码。</p><p>浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时会逐行解释每一句源码，转换为机器语言，然后由计算机去执行。</p><p>常见浏览器的 JS 引擎如下：</p><table tabindex="0"><thead><tr><th style="text-align:center;">浏览器</th><th style="text-align:left;">JS 引擎</th></tr></thead><tbody><tr><td style="text-align:center;">chrome、欧鹏</td><td style="text-align:left;">V8</td></tr><tr><td style="text-align:center;">Mozilla Firefox 火狐</td><td style="text-align:left;">SpiderMonkey（1.0-3.0）/ TraceMonkey（3.5-3.6）/ JaegerMonkey（4.0-）</td></tr><tr><td style="text-align:center;">Safari</td><td style="text-align:left;">JavaScriptCore，也称为Nitro，是 WebKit 引擎的一部分</td></tr><tr><td style="text-align:center;">IE</td><td style="text-align:left;">Trident</td></tr><tr><td style="text-align:center;">Edge</td><td style="text-align:left;">Chakra。此外，ChakraCore是Chakra的开源版本，可以在不同的平台上使用。</td></tr><tr><td style="text-align:center;">Opera</td><td style="text-align:left;">Linear A（4.0-6.1）/ Linear B（7.0-9.2）/ Futhark（9.5-10.2）/ Carakan（10.5-）</td></tr></tbody></table><p>补充说明：</p><p>1、SpiderMonkey 是第一款 JavaScript 引擎，由 JS语言的作者 Brendan Eich 开发。</p><p>2、先以WebKit为例，WebKit上由两部分组成：</p><ul><li>WebCore：负责解析HTML和CSS、布局、渲染等工作。</li><li>JavaScriptCore：负责解析和执行JavaScript 代码。</li></ul><p>参考链接：</p><ul><li><a href="https://juejin.im/post/5ada727c518825670b33a584" target="_blank" rel="noreferrer">主流浏览器内核及JS引擎</a></li></ul><h2 id="浏览器工作原理" tabindex="-1">浏览器工作原理 <a class="header-anchor" href="#浏览器工作原理" aria-label="Permalink to &quot;浏览器工作原理&quot;">​</a></h2><blockquote><p>这一小段有些深入，小白可以暂时跳过，以后学习JS的时候再回来看。</p></blockquote><p>浏览器主要由下面这个七个部分组成：</p><p><img src="http://img.smyhvae.com/20180124_1700.png" alt=""></p><p>1、User Interface（UI界面）：包括地址栏、前进/后退按钮、书签菜单等。也就是浏览器主窗口之外的其他部分。</p><p>2、Browser engine （浏览器引擎）：用来查询和操作渲染引擎。是UI界面和渲染引擎之间的<strong>桥梁</strong>。</p><p>3、Rendering engine（渲染引擎）：用于解析HTML和CSS，并将解析后的内容显示在浏览器上。</p><p>4、Networking （网络模块）：用于发送网络请求。</p><p>5、JavaScript Interpreter（JavaScript解析器）：用于解析和执行 JavaScript 代码。</p><p>6、UI Backend（UI后端）：用于绘制组合框、弹窗等窗口小组件。它会调用操作系统的UI方法。</p><p>7、Data Persistence（数据存储模块）：比如数据存储 cookie、HTML5中的localStorage、sessionStorage。</p><p>参考链接：（关于浏览器的工作管理，下面这篇文章，是精品中的精品，是必须要知道的）</p><ul><li><p>英文版：<a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank" rel="noreferrer">How Browsers Work: Behind the scenes of modern web browsers</a></p></li><li><p>中文版：<a href="https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/" target="_blank" rel="noreferrer">浏览器的工作原理：新式网络浏览器幕后揭秘</a></p></li></ul><hr><p>本作品采用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。</p><p><img src="https://img.smyhvae.com/20210329_1930.png" alt=""></p>',46))])}const y=r(s,[["render",p]]);export{b as __pageData,y as default};
