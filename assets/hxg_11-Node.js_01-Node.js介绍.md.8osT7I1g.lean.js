import{_ as o,c as r,G as t,a2 as p,B as s,o as l}from"./chunks/framework.sGs2IBkb.js";const g=JSON.parse('{"title":"01-Node.js介绍","description":"","frontmatter":{"title":"01-Node.js介绍","publish":true},"headers":[],"relativePath":"hxg/11-Node.js/01-Node.js介绍.md","filePath":"hxg/11-Node.js/01-Node.js介绍.md","lastUpdated":1725860495000}'),i={name:"hxg/11-Node.js/01-Node.js介绍.md"};function d(n,e,h,c,j,u){const a=s("ArticleTopAd");return l(),r("div",null,[t(a),e[0]||(e[0]=p('<h2 id="todo" tabindex="-1">todo <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;todo&quot;">​</a></h2><ul><li><p>rpc 和 Node.js 的关系</p></li><li><p><a href="https://mp.weixin.qq.com/s/uWeAsJ-P253je15A49uKIQ" target="_blank" rel="noreferrer">《吊打面试官》系列 Node.js 全栈秒杀系统</a></p></li></ul><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Node 的重要性已经不言而喻，很多互联网公司都已经有大量的高性能系统运行在 Node 之上。Node 凭借其单线程、异步等举措实现了极高的性能基准。此外，目前最为流行的 Web 开发模式是前后端分离的形式，即前端开发者与后端开发者在自己喜欢的 IDE 上独立进行开发，然后通过 HTTP 或是 RPC 等方式实现数据与流程的交互。这种开发模式在 Node 的强大功能的引领下变得越来越高效，也越来越受到各个互联网公司的青睐。</p><h3 id="前端同学为什么要学习后端-后端同学为什么要学习前端" tabindex="-1">前端同学为什么要学习后端/后端同学为什么要学习前端 <a class="header-anchor" href="#前端同学为什么要学习后端-后端同学为什么要学习前端" aria-label="Permalink to &quot;前端同学为什么要学习后端/后端同学为什么要学习前端&quot;">​</a></h3><ul><li><p>了解前后端交互流程。</p></li><li><p>前端同学能够和后台开发的程序员更佳紧密地结合、更顺畅地沟通。</p></li><li><p>当网站的业务逻辑需要前置时，前端人员需要学习一些后台开发的技术，以完成相应的任务；；反过来也一样。</p></li><li><p>拓宽知识视野和技术栈，能够站在全局的角度审视整个项目。</p></li></ul><h3 id="前端同学为什么要学-node-js" tabindex="-1">前端同学为什么要学 Node.js <a class="header-anchor" href="#前端同学为什么要学-node-js" aria-label="Permalink to &quot;前端同学为什么要学 Node.js&quot;">​</a></h3><p>1、Node.js 使用 JavaScript 语言开发服务器端应用，<strong>便于前端同学上手</strong>（一些公司甚至要求前端工程师掌握 Node.js 开发）。</p><p>2、实现了前后端的语法统一，<strong>有利于和前端代码整合</strong>，甚至共用部分代码。</p><p>比如说，针对接口返回的各种字段，前后端都必须要做校验。此时，如果用 Node.js 来做后台开发的话，前后端可以共用校验的代码。</p><p>3、Node.js 性能高、生态系统活跃，提供了大量的开源库。</p><p>4、Jeff Atwood 在 2007 年提出了著名的 Atwood 定律：<strong>任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现</strong>。 Jeff Atwood 是谁不重要（他是 Stack Overflow 网站的联合创始人），重要的是这条定律。</p><h3 id="后端同学为什么要学-node-js" tabindex="-1">后端同学为什么要学 Node.js <a class="header-anchor" href="#后端同学为什么要学-node-js" aria-label="Permalink to &quot;后端同学为什么要学 Node.js&quot;">​</a></h3><p>因为前端同学在学 Node.js。</p><h2 id="什么是-node-js" tabindex="-1">什么是 Node.js <a class="header-anchor" href="#什么是-node-js" aria-label="Permalink to &quot;什么是 Node.js&quot;">​</a></h2><h3 id="官方定义" tabindex="-1">官方定义 <a class="header-anchor" href="#官方定义" aria-label="Permalink to &quot;官方定义&quot;">​</a></h3><p><a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js</a> 是一个基于 <strong>Chrome V8 引擎</strong>的 JavaScript 运行环境。Node.js 使用了一个<strong>事件驱动</strong>、<strong>非阻塞式 I/O</strong>的模型，使其轻量又高效。Node.js 的包管理工具 npm 是全球最大的开源库生态系统。</p><p>Node.js 不是一门语言，也不是 JavaScript 的框架，也不是像Nginx一样的Web服务器 ，<strong>Node.js 是 JavaScript 在服务器端的运行环境（平台）</strong>。</p><h3 id="node-js-的组成" tabindex="-1">Node.js 的组成 <a class="header-anchor" href="#node-js-的组成" aria-label="Permalink to &quot;Node.js 的组成&quot;">​</a></h3><p>在 Node.js 里运行 JavaScript，跟在 Chrome 里运行 JavaScript 有什么不同？</p><p>二者采用的是同样的 JS 引擎。在 Node.js 里写 JS，和在前端写 JS，几乎没有不同。在写法上的区别在于：Node.js 没有浏览器、页面标签相关的 API，但是新增了一些 Node.js 相关的 API。通俗来说，对于开发者而言，在前端写 JS 是用于控制浏览器；而 Node.js 环境写 JS 可以控制整个计算机。</p><p>我们知道，JavaScript 的组成分为三个部分：</p><ul><li><p>ECMAScript</p></li><li><p>DOM：标签元素相关的API</p></li><li><p>BOM：浏览器相关的API</p></li></ul><p>ECMAScript 是 JS 的语法；DOM 和 BOM 浏览器端为 JS 提供的 API。</p><p>而 Node.js 的组成分为：</p><ul><li><p><strong>ECMAScript</strong>。ECMAScript 的所有语法在 Node 环境中都可以使用。</p></li><li><p><strong>Node 环境</strong>提供的一些<strong>附加 API</strong>(包括文件、网络等相关的 API)。</p></li></ul><p>如下图所示：</p><p><img src="http://img.smyhvae.com/20200409_1545.png" alt=""></p><h3 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h3><p>与 PHP、JSP、Python、Perl、Ruby 的“既是语言，也是平台”不同，Node.js 的使用 JavaScript 进行编程，运行在 Chrome 的 V8 引擎上。</p><p>与 PHP、JSP 等相比（PHP、JSP、.net 都需要运行在服务器程序上，Apache、Nginx、Tomcat、IIS。 ），Node.js 跳过了 Apache、Nginx、IIS 等 HTTP 服务器，它自己不用建设在任何服务器软件之上。Node.js 的许多设计理念与经典架构（LAMP = Linux + Apache + MySQL + PHP）有着很大的不同，可以提供强大的伸缩能力。Node.js 没有 web 容器。</p><p>JS 语言非常灵活，使得它在严谨性方面不如 Java 等传统的静态语言。JS 是一门动态语言，而且融合了面向对象和函数式编程这两种编程范式。</p><p>随着 ES6、ES7 等 JS 语法规范的出现，以及浏览器对这些规范的支持，使得我们可以用更为现代化的 JS 语言特性，来编写现代化的应用。</p><h2 id="node-js-的架构和依赖" tabindex="-1">Node.js 的架构和依赖 <a class="header-anchor" href="#node-js-的架构和依赖" aria-label="Permalink to &quot;Node.js 的架构和依赖&quot;">​</a></h2><p>Node.js 的架构如下：</p><p><img src="http://img.smyhvae.com/20180301_1540.png" alt=""></p><p>Node.js 内部采用 Google Chrome 的 V8 引擎，作为 JavaScript 语言解释器；同时结合自行开发的 libuv 库，<strong>扩展了 JS 在后端的能力（比如 I/O 操作、文件读写、数据库操作等）</strong>。使得 JS 既可以在前端进行 DOM 操作（浏览器前端），又可以在后端调用操作系统资源，是目前最简单的全栈式语言。</p><p>其次，Node 生态系统活跃，提供了大量的开源库，使得 JavaScript 语言能与操作系统进行更多的交互。</p><h3 id="node-js-运行环境的核心-v8-引擎-和-libuv-库" tabindex="-1">Node.js 运行环境的核心：V8 引擎 和 libuv 库 <a class="header-anchor" href="#node-js-运行环境的核心-v8-引擎-和-libuv-库" aria-label="Permalink to &quot;Node.js 运行环境的核心：V8 引擎 和 libuv 库&quot;">​</a></h3><p>Node.js 是 JavaScript 在服务器端的运行环境，在这个意义上，Node.js 的地位其实就是 JavaScript 在服务器端的虚拟机，类似于 Java 语言中的 Java 虚拟机。</p><ul><li><p><a href="https://v8.dev/" target="_blank" rel="noreferrer">V8 引擎</a> ：编译和执行 JS 代码、管理内存、垃圾回收。V8 给 JS 提供了运行环境，可以说是 JS 的虚拟机。V8 引擎本身是用 C++ 写的。</p></li><li><p><a href="https://zh.wikipedia.org/wiki/Libuv" target="_blank" rel="noreferrer">libuv</a>： libuv 是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。它是 Node.js 最初的作者 Ryan Dahl 为 Node.js 写的底层类库，也可以称之为虚拟机。libuv 本身是用 C 写的。</p></li></ul><h3 id="java-虚拟机和-v8-引擎-是由同一人开发" tabindex="-1">Java 虚拟机和 V8 引擎，是由同一人开发 <a class="header-anchor" href="#java-虚拟机和-v8-引擎-是由同一人开发" aria-label="Permalink to &quot;Java 虚拟机和 V8 引擎，是由同一人开发&quot;">​</a></h3><p>Chrome 浏览器成功的背后，离不开 JS 的 V8 引擎。作为虚拟机，V8 的性能表现优异，它的开发者是 Lars Bak。在 Lars 的工作履历里，绝大部分都是与虚拟机相关的工作。在开发 V8 之前，他曾经在 Sun 公司工作，担任 HotSpot 团队的技术领导，主要致力于开发高性能的 Java 虚拟机。在这之前，他也曾为 Self、Smalltalk 语言开发过高性能虚拟机。这些无与伦比的经历让 V8 一出世就超越了当时所有的 JS 虚拟机。</p><p><img src="http://img.smyhvae.com/20200617_1120.png" alt=""></p><p>V8 的性能优势使得用 JavaScript 写高性能后台服务程序成为可能。在这样的契机下，Ryan Dahl 选择了 JavaScript，选择了 V8，在事件驱动、非阻塞 I/O 模型的设计下实现了 Node。</p><h3 id="v8-的内存限制" tabindex="-1">V8 的内存限制 <a class="header-anchor" href="#v8-的内存限制" aria-label="Permalink to &quot;V8 的内存限制&quot;">​</a></h3><p>在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JavaScript 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4GB，32 位系统下约为 0.7GB）。在这样的限制下，将会导致 Node 无法直接操作大内存对象。</p><p>造成这个问题的主要原因在于 Node 基于 V8 构建，所以在 Node 中使用的 JavaScript 对象基本上都是通过 V8 自己的方式来进行分配和管理的。V8 的这套内存管理机制在浏览器的应用场景下使用起来绰绰有余，足以胜任前端页面中的所有需求。但在 Node 中，这却限制了开发者随心所欲使用大内存的想法。</p><h2 id="node-的发展历史" tabindex="-1">Node 的发展历史 <a class="header-anchor" href="#node-的发展历史" aria-label="Permalink to &quot;Node 的发展历史&quot;">​</a></h2><ul><li><p>2008 年左右，随着 Ajax 的逐渐普及，Web 开发逐渐走向复杂化，系统化；</p></li><li><p>Node.js 诞生于 2009 年，由 Joyent 的员工 Ryan Dahl 开发而成。2009 年 5 月，Ryan Dahl 在 GitHub 中开源了 Node 的最初版本，同年 11 月，在 JSConf 大会上展示了 Node 项目；</p></li><li><p>2010 年 1 月，NPM 包管理工具诞生，使得程序员能够更方便地发布和分享 Node.js 的第三方库。</p></li><li><p>Node.js 最初只支持 Linux 和 Mac OS 操作系统。2011 年 7 月，微软参与合作，Node.js 终于支持了 Windows 平台。PS：不过，node 的生产环境基本是在 Linux 下。</p></li><li><p>目前官网最新版本已经更新到 14.x.x 版本，最新稳定的是 12.18.0。</p></li></ul><p>据 Node.js 创始人 Ryan Dahl 回忆，他最初希望采用 Ruby，但是 Ruby 的虚拟机效率不行。</p><p>注意：是 Node 选择了 JavaScript，不是 JavaScript 发展出来了一个 Node。</p><h2 id="node-js-的应用" tabindex="-1">Node.js 的应用 <a class="header-anchor" href="#node-js-的应用" aria-label="Permalink to &quot;Node.js 的应用&quot;">​</a></h2><p>Node.js 拥有强大的开发者社区，现在已经发展出比较成熟的技术体系，以及庞大的生态。它被广泛地应用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 <strong>Web 服务</strong>领域，业界对 Node.js 的接受程度最高。</p><h3 id="_1、bff-中间层" tabindex="-1">1、BFF 中间层 <a class="header-anchor" href="#_1、bff-中间层" aria-label="Permalink to &quot;1、BFF 中间层&quot;">​</a></h3><p>BFF，即 Backend For Frontend（服务于前端的后端）。玉伯在《<a href="https://mp.weixin.qq.com/s/IYddaaw2ps1wR2VT1dZWPg" target="_blank" rel="noreferrer">从前端技术进化到体验科技</a>》这篇文章中点出了 BFF 层的概念：</p><blockquote><p>BFF 模式下，整体分工很清晰，<strong>后端通过 Java/C++ 等语言负责服务实现，理想情况下给前端提供的是基于领域模型的 RPC 接口，前端则在 BFF 层直接调用服务端 RPC 接口拿到数据</strong>，按需加工消费数据，并实现人机交互。基于 BFF 模式的研发，很适合拥有前端技术背景的全栈型工程师。这种模式的好处很明显，后端可以专注于业务领域，更多从领域模型的视角去思考问题，页面视角的数据则交给前端型全栈工程师去搞定。<strong>领域模型与页面数据是两种思维模式，通过 BFF 可以很好地解耦开，让彼此更专业高效</strong>。</p></blockquote><p>在 Web 服务里，搭建一个中间层，前端访问中间层的接口，中间层再访问后台的 Java/C++ 服务。这类服务的特点是不需要太强的服务器运算能力，但对程序的灵活性有较高的要求。这两个特点，正好和 Node.js 的优势相吻合。Node.js 非常适合用来做 BFF 层，优势如下：</p><ul><li><p>对于前端来说：让前端<strong>有能力自由组装后台数据</strong>，这样可以减少大量的业务沟通成本，加快业务的迭代速度；并且，前端同学能够<strong>自主决定</strong>与后台的通讯方式。</p></li><li><p>对于后台和运维来说，好处是：安全性（不会把主服务器暴露在外面）、降低主服务器的复杂度等。</p></li></ul><h3 id="_2、服务端渲染" tabindex="-1">2、服务端渲染 <a class="header-anchor" href="#_2、服务端渲染" aria-label="Permalink to &quot;2、服务端渲染&quot;">​</a></h3><p><strong>客户端渲染</strong>（CSR / Client side render）：前端通过一大堆接口请求数据，然后通过 JS 动态处理和生成页面结构和展示。优点是<strong>前后端分离</strong>、减小服务器压力、局部刷新。缺点是不利于 SEO（如果你的页面然后通过 Ajax 异步获取内容，抓取工具并不会等待异步完成后再行抓取页面内容）、首屏渲染慢。</p><p><strong>服务端渲染</strong>（SSR / Server Side Render）：服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可。也就是说，在服务器端直接就渲染好了，然后一次性打包返回给前端。优点是<strong>有利于 SEO、首屏渲染很快</strong>。</p><p><strong>总结： 搜索引擎优化 + 首屏速度优化 = 服务端渲染</strong>。</p><p>备注：这里的「服务端渲染」只是让 Node.js 做中间层，不会替代后端的，后台同学请放心。</p><p>参考链接：</p><ul><li><p><a href="https://ssr.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue 服务端渲染的概念</a></p></li><li><p><a href="https://blog.csdn.net/u012036171/article/details/88833200" target="_blank" rel="noreferrer">https://blog.csdn.net/u012036171/article/details/88833200</a></p></li><li><p><a href="https://juejin.im/post/5c068fd8f265da61524d2abc" target="_blank" rel="noreferrer">https://juejin.im/post/5c068fd8f265da61524d2abc</a></p></li><li><p><a href="https://www.zhihu.com/question/59578433/answer/326694511" target="_blank" rel="noreferrer">方应杭</a></p></li></ul><p>历史回顾：</p><p>（1）一开始，页面很简单，html 是后端渲染的（比如PHP、ASP、JSP等方式）。后端发现页面中的 js 好麻烦（虽然简单，但是坑多），于是让公司招聘专门写 js 的人，简称「前端切图仔」。</p><p>（2）随着 Node.js 和前端 MVC 的兴起，以及前端越来越复杂，慢慢演变成了「前后端分离」。</p><p>（3）前端的 SPA 应用流行之后，发现 SEO 问题很大，而且首屏渲染速度很慢，但是自己选的路再难走也要走下去，于是用 Node.js 在服务端渲染被看成是一条出路。</p><p>（4）以前在一起的时候，是后端做部分前端的工作；现在在一起的时候，是前端做部分后端的工作。</p><h3 id="_3、做小型服务、小型网站的后端-基于-express、koa-框架" tabindex="-1">3、做小型服务、小型网站的后端（基于 Express、Koa 框架） <a class="header-anchor" href="#_3、做小型服务、小型网站的后端-基于-express、koa-框架" aria-label="Permalink to &quot;3、做小型服务、小型网站的后端（基于 Express、Koa 框架）&quot;">​</a></h3><p>现在很多公司的后台管理系统，都是用 Node.js 来开发接口，毕竟，后台管理系统对性能和并发的要求不是太高。有了 Node.js 之后，通过 JS 直接操作 DB，做增删改查，生成接口，极大降低了前端同学的学习门槛。</p><p>当然，有时候做 Node.js 开发，是因为：后台人力不够，所以把后台开发的一部分工作量，转移给前端同学。</p><h3 id="_4、做项目构建工具" tabindex="-1">4、做项目构建工具 <a class="header-anchor" href="#_4、做项目构建工具" aria-label="Permalink to &quot;4、做项目构建工具&quot;">​</a></h3><p>前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的。</p><h3 id="_5、-做-pc-客户端软件-基于-electron-框架" tabindex="-1">5、 做 PC 客户端软件（基于 Electron 框架） <a class="header-anchor" href="#_5、-做-pc-客户端软件-基于-electron-框架" aria-label="Permalink to &quot;5、 做 PC 客户端软件（基于 Electron 框架）&quot;">​</a></h3><p>Electron 框架就是基于 Node.js 的，可以用来开发客户端软件。</p><p>Electron 原名为 Atom Shell，是由 GitHub 开发的一个开源框架。Electron 以 Node.js 作为运行时（runtime），以 chromium 作为渲染引擎，使开发者可以使用 JS 这种前端技术栈开来发跨平台的桌面GUI应用程序。</p><p>有一点你可能会感到惊讶：程序员们都在用的代码编辑器 VS Code 软件， 就是基于 Electron 框架来开发的。其他使用 Electron 进行开发的知名应用还有：Skype、GitHub Desktop、Slack、WhatsApp等。</p><p>还有一个例子是：电子游戏直播网站 <a href="https://www.twitch.tv/" target="_blank" rel="noreferrer">Twitch</a>，号称是国外游戏直播的鼻祖，它在 PC 端的客户端软件，就是用 Electron 框架的。你会发现，Twitch 的网站视觉，和 PC 端的视觉，几乎是一样的。如果两端都采用 JS 语言，就可以极大的复用现有的工程。</p><h3 id="知名度较高的-node-js-开源项目" tabindex="-1">知名度较高的 Node.js 开源项目 <a class="header-anchor" href="#知名度较高的-node-js-开源项目" aria-label="Permalink to &quot;知名度较高的 Node.js 开源项目&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20180301_2009.png" alt=""></p><ul><li><p>express：Node.js 中著名的 web 服务框架。</p></li><li><p>Koa：下一代的 Node.js 的 Web 服务框架。所谓的“下一代”是相对于 Express 而言的。</p></li><li><p><a href="https://eggjs.org/zh-cn/" target="_blank" rel="noreferrer">Egg</a>：2016 年，阿里巴巴研发了知名的 Egg.js 开源项目，号称企业级 Web 服务框架。Egg.js 是基于 Koa 开发的。</p></li></ul><ul><li><p>mocha：是现在最流行的 JavaScript 测试框架，在浏览器和 Node 环境都可以使用。</p></li><li><p>PM2：node 多进程管理。</p></li><li><p>jade：非常优秀的模板引擎，不仅限于 js 语言。</p></li><li><p>CoffeeScript：用简洁的方式展示 JavaScript 优秀的部分。</p></li><li><p>Atom：编辑器。</p></li><li><p>VS Code：最酷炫的编辑器。</p></li><li><p>socket.io：实时通信框架。</p></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>或许，能用 Node.js 做的后台应用，Java/C++ 也能做；但是 Node.js 可以让我们多一种选择。</p><p>短期来看，Node.js 很难像 Java/C++ 那样，成为后台的主力开发语言。这并非是因为 Node.js 的性能问题，主要是因为，Node.js 还比较年轻，经验积累太少，框架的支持度不够。搞企业级服务，Node.js 敌不过 Java/C++，所以目前只能搞「轻量级」；但未来可期。</p><p>限制语言能力的不是语言本身，而是生态。</p><h2 id="最后一段-前端同学会-node-js-就真的全栈了吗" tabindex="-1">最后一段：前端同学会 Node.js 就真的全栈了吗？ <a class="header-anchor" href="#最后一段-前端同学会-node-js-就真的全栈了吗" aria-label="Permalink to &quot;最后一段：前端同学会 Node.js 就真的全栈了吗？&quot;">​</a></h2><p>一个人的精力是有限的，既擅长前端、又精通后端的人，毕竟是极少数。</p><p>林肯说过：“你可以在所有的时间欺骗一部分人，也可以在一段时间欺骗所有的人，但你不可能在所有的时间欺骗所有的人”。</p><p>同样的，我也说过：“你可以在这一段时间擅长前端技术，也可以在另一段时间擅长后台技术，但你不可能在<strong>同一段时间</strong>同时擅长前端和后台，更不可能在<strong>所有的时间</strong>同时擅长前端和后台。”</p><p>所谓的全栈，只是一个伪命题。个人不一定需要全栈，企业和项目也不强制要求全栈，分工协作，才最高效。</p><p>对于个人而言，虽然全栈很难，但是 Node.js 的出现，<strong>让 JS 语言实现了前后端语法的统一，让 JS 语言的技术栈更佳全面</strong>。</p><p>涉及到后台开发相关的技术，无论如何，也绕不开<strong>框架设计、开发调试、数据库操作、高并发处理、大规模存储、性能优化、容灾方案、RPC 调用、进程管理、操作系统调度、网络安全、系统运维、日常维护、甚至是 Linux 内核、驱动开发</strong>等过硬的知识技能和经验积累。等你亲身经历过这些，才算明白：语言只是一种工具。</p><h2 id="我的公众号" tabindex="-1">我的公众号 <a class="header-anchor" href="#我的公众号" aria-label="Permalink to &quot;我的公众号&quot;">​</a></h2><p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code>qianguyihao</code>）。</p><p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p><p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>',100))])}const b=o(i,[["render",d]]);export{g as __pageData,b as default};
