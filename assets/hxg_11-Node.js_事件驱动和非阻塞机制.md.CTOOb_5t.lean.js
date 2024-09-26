import{_ as i,c as n,G as l,a2 as e,B as p,o as t}from"./chunks/framework.sGs2IBkb.js";const E=JSON.parse('{"title":"01-数据库的基础知识","description":"","frontmatter":{"title":"01-数据库的基础知识","publish":false},"headers":[],"relativePath":"hxg/11-Node.js/事件驱动和非阻塞机制.md","filePath":"hxg/11-Node.js/事件驱动和非阻塞机制.md","lastUpdated":1725860495000}'),r={name:"hxg/11-Node.js/事件驱动和非阻塞机制.md"};function h(o,a,d,c,k,u){const s=p("ArticleTopAd");return t(),n("div",null,[l(s),a[0]||(a[0]=e(`<h2 id="异步编程" tabindex="-1">异步编程 <a class="header-anchor" href="#异步编程" aria-label="Permalink to &quot;异步编程&quot;">​</a></h2><h3 id="异步操作" tabindex="-1">异步操作 <a class="header-anchor" href="#异步操作" aria-label="Permalink to &quot;异步操作&quot;">​</a></h3><ul><li><p>Node 采用 Chrome V8 引擎处理 JavaScript 脚本。V8 最大特点就是<strong>单线程运行</strong>，一次只能运行一个任务。</p></li><li><p>Node 大量采用异步操作（asynchronous operation），即任务不是马上执行，而是插在任务队列的尾部，等到前面的任务运行完后再执行。</p></li><li><p>提高代码的响应能力。</p></li></ul><p>异步IO也叫非阻塞IO。例如读文件，传统的语言，基本都是读取完毕才能进行下一步操作。非阻塞就是Node的callback，不会影响下一步操作，等到文件读取完毕，回调函数自动被执行，而不是在等待。</p><h3 id="异步操作回调" tabindex="-1">异步操作回调 <a class="header-anchor" href="#异步操作回调" aria-label="Permalink to &quot;异步操作回调&quot;">​</a></h3><p>由于系统永远不知道用户什么时候会输入内容，所以代码不能永远停在一个地方。</p><p>Node 中的操作方式就是以异步回调的方式解决无状态的问题。</p><h3 id="回调函数的设计-错误优先" tabindex="-1">回调函数的设计：错误优先 <a class="header-anchor" href="#回调函数的设计-错误优先" aria-label="Permalink to &quot;回调函数的设计：错误优先&quot;">​</a></h3><p>异步操作中，无法通过 try catch 捕获异常。</p><p>这是因为回调函数主要用于异步操作，当回调函数运行时，前期的操作早结束了，错误的执行栈早就不存在了，传统的错误捕捉机制try…catch对于异步操作行不通，所以只能把错误交给回调函数处理。</p><p><strong>统一约定：</strong></p><p>回调函数的第一个参数默认接收错误信息，第二个参数才是真正的回调数据（便于外界获取调用的错误情况）：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>foo1(&#39;赵小黑&#39;, 19, function(error, data) {</span></span>
<span class="line"><span>  if(error)  throw error;</span></span>
<span class="line"><span>  console.log(data);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="异步回调的问题" tabindex="-1">异步回调的问题 <a class="header-anchor" href="#异步回调的问题" aria-label="Permalink to &quot;异步回调的问题&quot;">​</a></h3><p>相比较于传统的代码：</p><ul><li><p>异步事件驱动的代码</p></li><li><p>不容易阅读</p></li><li><p>不容易调试</p></li><li><p>不容易维护</p></li></ul><p>另外还有个问题是<strong>回调地狱：</strong></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">do1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  do2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    do3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      do4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        do5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          do6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="进程和线程" tabindex="-1">进程和线程 <a class="header-anchor" href="#进程和线程" aria-label="Permalink to &quot;进程和线程&quot;">​</a></h2><h3 id="进程-进行中的程序" tabindex="-1">进程（进行中的程序） <a class="header-anchor" href="#进程-进行中的程序" aria-label="Permalink to &quot;进程（进行中的程序）&quot;">​</a></h3><ul><li><p>每一个 <strong>正在运行</strong> 的应用程序都称之为进程。</p></li><li><p>每一个应用程序运行都至少有一个进程。</p></li><li><p>进程是用来给应用程序提供一个运行的环境。</p></li><li><p>进程是操作系统为应用程序分配资源的一个单位。</p></li></ul><h3 id="线程" tabindex="-1">线程 <a class="header-anchor" href="#线程" aria-label="Permalink to &quot;线程&quot;">​</a></h3><ul><li><p>用来执行应用程序中的代码</p></li><li><p>在一个进程内部，可以有很多的线程</p></li><li><p>在一个线程内部，同时只可以干一件事</p></li><li><p>传统的开发方式大部分都是 I/O 阻塞的，所以需要多线程来更好的利用硬件资源。</p></li></ul><p>线程并不是越多越好。</p><h3 id="多线程的弊端" tabindex="-1">多线程的弊端 <a class="header-anchor" href="#多线程的弊端" aria-label="Permalink to &quot;多线程的弊端&quot;">​</a></h3><p>缺点一：</p><pre><code>- 创建线程耗费。
- 线程数量有限。
- CPU 在不同线程之间转换，有个上下文转换，这个转换非常耗时。
</code></pre><p>所谓的多线程其实都是假的，对于单核CPU而言，它们无非是在抢占 CPU 资源。线程和线程之间需要<strong>切换和调度</strong>，这是很耗费资源的。</p><p>缺点二：</p><ul><li>线程之间共享某些数据，同步某个状态都很麻烦。</li></ul><p>就算 CPU 是多核的，现在的问题是，线程与线程之间如果要共享数据，该怎么办？比如 A 线程要访问 B 线程的变量。</p><h2 id="事件驱动和非阻塞机制" tabindex="-1">事件驱动和非阻塞机制 <a class="header-anchor" href="#事件驱动和非阻塞机制" aria-label="Permalink to &quot;事件驱动和非阻塞机制&quot;">​</a></h2><p>参考链接：<a href="https://www.kancloud.cn/revin/nodejs/176211" target="_blank" rel="noreferrer">https://www.kancloud.cn/revin/nodejs/176211</a></p><p>总结：</p><ul><li><p>Node 中将所有的阻塞操作交给了内部线程池实现。</p></li><li><p>Node 主线程本身，主要就是不断的<strong>往返调度</strong>。</p></li></ul><h3 id="平台实现差异" tabindex="-1">平台实现差异 <a class="header-anchor" href="#平台实现差异" aria-label="Permalink to &quot;平台实现差异&quot;">​</a></h3><p>由于 Windows 和 *nix 平台（其他平台）的差异，Node 提供了 libuv 作为抽象封装层，保证上层的 Node 与下层的自定义线程池及 IOCP 之间各自独立。</p><p>如下图所示：</p><p><img src="http://img.smyhvae.com/20180301_2252.png" alt=""></p>`,39))])}const g=i(r,[["render",h]]);export{E as __pageData,g as default};
