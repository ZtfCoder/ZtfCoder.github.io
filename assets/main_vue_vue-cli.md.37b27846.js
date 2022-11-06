import{_ as s,a as n,c as a,b as l}from"./app.52c3d3af.js";const b=JSON.parse('{"title":"vue \u5165\u95E8-cli","description":"","frontmatter":{"title":"vue \u5165\u95E8-cli","tags":["vue","\u524D\u7AEF"],"categories":"vue","abbrlink":"7ee75e14"},"headers":[{"level":2,"title":"node.js","slug":"node-js","link":"#node-js","children":[]},{"level":2,"title":"\u5B89\u88C5 vue-cli","slug":"\u5B89\u88C5-vue-cli","link":"#\u5B89\u88C5-vue-cli","children":[]},{"level":2,"title":"\u5B89\u88C5webpack","slug":"\u5B89\u88C5webpack","link":"#\u5B89\u88C5webpack","children":[{"level":3,"title":"\u8865\u5145\u77E5\u8BC6ES6","slug":"\u8865\u5145\u77E5\u8BC6es6","link":"#\u8865\u5145\u77E5\u8BC6es6","children":[]}]},{"level":2,"title":"vue-router","slug":"vue-router","link":"#vue-router","children":[{"level":3,"title":"\u5B89\u88C5 vue-router","slug":"\u5B89\u88C5-vue-router","link":"#\u5B89\u88C5-vue-router","children":[]},{"level":3,"title":"\u5BFC\u5165\u8DEF\u7531","slug":"\u5BFC\u5165\u8DEF\u7531","link":"#\u5BFC\u5165\u8DEF\u7531","children":[]},{"level":3,"title":"\u5B89\u88C5\u8DEF\u7531","slug":"\u5B89\u88C5\u8DEF\u7531","link":"#\u5B89\u88C5\u8DEF\u7531","children":[]},{"level":3,"title":"\u914D\u7F6E\u8DEF\u7531","slug":"\u914D\u7F6E\u8DEF\u7531","link":"#\u914D\u7F6E\u8DEF\u7531","children":[]},{"level":3,"title":"\u542F\u52A8\u8DEF\u7531","slug":"\u542F\u52A8\u8DEF\u7531","link":"#\u542F\u52A8\u8DEF\u7531","children":[]},{"level":3,"title":"\u5173\u4E8Evue-router","slug":"\u5173\u4E8Evue-router","link":"#\u5173\u4E8Evue-router","children":[]}]},{"level":2,"title":"$refs","slug":"refs","link":"#refs","children":[]}],"relativePath":"main/vue/vue-cli.md","lastUpdated":1667742968000}'),p={name:"main/vue/vue-cli.md"},e=l(`<p>\u7EC8\u4E8E\u8981\u770B\u5230<code>npm</code>\u8FD9\u4E2A\u73A9\u610F\u4E86</p><h2 id="node-js" tabindex="-1">node.js <a class="header-anchor" href="#node-js" aria-hidden="true">#</a></h2><p>\u9996\u5148\u5B89\u88C5 <code>node.js</code></p><p><a href="http://nodejs.cn/download/" target="_blank" rel="noreferrer">http://nodejs.cn/download/</a></p><p>\u5F88\u7B80\u5355,\u65E0\u8111\u4E0B\u4E00\u6B65\u5C31\u597D\u4E86</p><p>\u5B89\u88C5\u6210\u529F\u540E,\u7528cmd \u6D4B\u8BD5\u4E0B\u547D\u4EE4 <code>npm</code> <code>npm-v</code></p><p>\u5B8C\u6210\u540E,\u9700\u8981\u5B89\u88C5,\u4E00\u4E9B\u7EC4\u4EF6,\u5305,\u6DD8\u5B9D\u955C\u50CF</p><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install cnpm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E,\u6211\u4EEC\u4F7F\u7528<code>cnpm</code> \u547D\u4EE4\u6765\u5B89\u88C5\u4E00\u4E9B\u7EC4\u4EF6</p><h2 id="\u5B89\u88C5-vue-cli" tabindex="-1">\u5B89\u88C5 vue-cli <a class="header-anchor" href="#\u5B89\u88C5-vue-cli" aria-hidden="true">#</a></h2><p>\u5728<code>cmd</code> \u7A97\u53E3\u8F93\u5165</p><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">cnpm install vue</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cli </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u521D\u59CB\u5316\u4E86\u540E,\u4F1A\u51FA\u73B0\u5F88\u591A\u6587\u4EF6,\u5176\u4E2D,<code>package.json</code> \u8FD9\u4E2A\u5C31\u76F8\u5F53\u4E8E\u662F<code>maven</code> \u7B49\u4E0B,\u6211\u4EEC\u9700\u8981\u53BB\u52A0\u8F7D\u5B83\u7684\u4F9D\u8D56</p><p>\u8FDB\u5165\u5230\u6211\u4EEC\u521D\u59CB\u5316\u540E\u7684\u6587\u4EF6\u4E2D,\u6253\u5F00<code>cmd</code> \u8F93\u5165</p><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B83\u4F1A\u53BB\u52A0\u8F7D\u6240\u9700\u8981\u7684\u4F9D\u8D56,\u548C\u73AF\u5883</p><p>\u5982\u679C\u5B89\u88C5\u6700\u540E\u51FA\u73B0</p><p><img src="https://images.wupeiyao.top/notes/20210509192224.png" alt="image-20210112170455100"></p><p>\u51FA\u73B0\u9519\u8BEF,\u6211\u4EEC\u6839\u636Enpm\u7684\u63D0\u793A,\u8F93\u5165 \u5B83\u63D0\u793A\u7684\u4FE1\u606F,\u8FDB\u884C\u4FEE\u590D\u5C31\u53EF\u4EE5\u4E86</p><h2 id="\u5B89\u88C5webpack" tabindex="-1">\u5B89\u88C5webpack <a class="header-anchor" href="#\u5B89\u88C5webpack" aria-hidden="true">#</a></h2><p>webpack \u662F\u524D\u7AEF\u7684\u9879\u76EE\u6784\u5EFA\u5DE5\u5177,\u7C7B\u4F3Cmaven\u6253\u5305\u5DE5\u5177</p><p>\u6211\u4EEC\u9700\u8981\u5B89\u88C5webpack</p><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install webpack </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">npm install webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cli </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u8865\u5145\u77E5\u8BC6es6" tabindex="-1">\u8865\u5145\u77E5\u8BC6ES6 <a class="header-anchor" href="#\u8865\u5145\u77E5\u8BC6es6" aria-hidden="true">#</a></h3><p><strong>hello.js</strong></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u66B4\u9732 \u8FD9\u4E2A\u65B9\u6CD5 </span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">//exports \u66B4\u9732\u67D0\u4E2A\u65B9\u6CD5\u6216\u8005\u53D8\u91CF,\u4EE5\u4FBF\u5176\u4ED6\u5730\u65B9\u80FD\u591F\u5BFC\u5165</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>main.js</strong></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u63A5\u6536\u5BFC\u5165\u7684\u4E1C\u897F,\u76F8\u5F53\u4E8E\u662F\u5F15\u5165\u4E86\u4E00\u4E2A\u7C7B\u7684\u5BF9\u8C61,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u5BF9\u8C61,\u8C03\u7528\u5185\u90E8\u66B4\u9732\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> re </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">re</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6700\u540E\u6211\u4EEC\u5199\u4E00\u4E2A\u914D\u7F6E\u7684js<code>webpack.config.js</code></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./modules/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./js/bundle.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">//\u6253\u5305\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E4B\u540E,\u6253\u5F00<code>cmd</code> \u8F93\u5165</p><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">webpack</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6700\u540E,\u6211\u4EEC\u53EA\u9700\u8981\u5728index.html,\u5BFC\u5165\u6211\u4EEC\u6253\u5305\u597D\u7684\u6587\u4EF6\u5C31\u884C\u4E86</p><p>\u5173\u4E8E<code>import</code> \u8FD9\u4E2A\u548Cpython\u5BFC\u5305\u5F88\u76F8\u4F3C,\u76F8\u540C\u7406\u89E3\u5C31\u597D\u4E86,\u53EA\u662F,\u5BFC\u5165\u8FDB\u6765\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61,\u5E76\u4E14\u8FD9\u4E2A\u5BF9\u8C61\u7684\u540D\u79F0\u7531\u81EA\u5DF1\u51B3\u5B9A</p><p>\u6BD4\u5982</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5-vue-router" tabindex="-1">\u5B89\u88C5 vue-router <a class="header-anchor" href="#\u5B89\u88C5-vue-router" aria-hidden="true">#</a></h3><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install vue</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">router </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5BFC\u5165\u8DEF\u7531" tabindex="-1">\u5BFC\u5165\u8DEF\u7531 <a class="header-anchor" href="#\u5BFC\u5165\u8DEF\u7531" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u5355\u72EC\u5EFA\u7ACB\u4E00\u4E2Ajs\u6587\u4EF6\u6765\u8FDB\u884C\u8DEF\u7531\u7684\u914D\u7F6E</p><p>\u9996\u5148\u8981\u5BFC\u5165\u8DEF\u7531,\u63A5\u7740\u5BFC\u5165vue,\u56E0\u4E3A,\u6211\u4EEC\u9700\u8981\u53C8vue\u6765\u5B89\u88C5\u8DEF\u7531</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u5BFC\u5165\u8DEF\u7531</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VueRouter </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;">//\u5BFC\u5165vue</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5B89\u88C5\u8DEF\u7531" tabindex="-1">\u5B89\u88C5\u8DEF\u7531 <a class="header-anchor" href="#\u5B89\u88C5\u8DEF\u7531" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u5B89\u88C5\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(VueRouter)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u914D\u7F6E\u8DEF\u7531" tabindex="-1">\u914D\u7F6E\u8DEF\u7531 <a class="header-anchor" href="#\u914D\u7F6E\u8DEF\u7531" aria-hidden="true">#</a></h3><p><code>index.js</code></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u914D\u7F6E \u5BFC\u51FA\u8DEF\u7531</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/component1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">//\u8DEF\u7531\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">component1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u7ED9\u8DEF\u7531\u914D\u7F6E\u4E2A\u540D\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">component1 </span><span style="color:#676E95;">//\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/component2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">//\u8DEF\u7531\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">component2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u7ED9\u8DEF\u7531\u914D\u7F6E\u4E2A\u540D\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">component2 </span><span style="color:#676E95;">//\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u6211\u4EEC\u80AF\u5B9A\u662F\u8981\u5BFC\u51FA\u8BE5\u8DEF\u7531\u7EC4\u4EF6\u7684,\u56E0\u6B64\u9700\u8981\u5BFC\u51FA\u5B83\u7684\u914D\u7F6E</p><p>path \u5C31\u548CrequestMapping \u5DEE\u4E0D\u591A,\u76F8\u5F53\u4E8E\u524D\u7AEF\u80FD\u591F\u81EA\u7531\u7684\u8DF3\u8F6C</p></blockquote><p>\u914D\u7F6E\u597D<code>index.js</code> \u540E \u6211\u4EEC\u53BB<code>main.js</code> \u8BA9\u5B83\u53BB\u626B\u63CF\u6211\u4EEC\u7684<code>index.js</code></p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u81EA\u52A8\u626B\u63CF\u91CC\u9762\u7684\u5B50\u8DEF\u7531\u914D\u7F6E</span></span>
<span class="line"><span style="color:#676E95;">//\u53EA\u9700\u8981\u5BFC\u5165,index.js\u6240\u5728\u7684\u6587\u4EF6\u5939\u5C31\u884C\u4E86,\u5B83\u4F1A\u81EA\u52A8\u5E2E\u6211\u4EEC\u53BB\u626B\u63CF\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6700\u540E\u5728main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js\u7684vue\u5BF9\u8C61\u4E2D\u542F\u52A8\u8DEF\u7531</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u542F\u52A8\u8DEF\u7531" tabindex="-1">\u542F\u52A8\u8DEF\u7531 <a class="header-anchor" href="#\u542F\u52A8\u8DEF\u7531" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u81EA\u52A8\u626B\u63CF\u91CC\u9762\u7684\u5B50\u8DEF\u7531\u914D\u7F6E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//\u914D\u7F6E\u8DEF\u7531,\u542F\u52A8\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">  router</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;App/&gt;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F7F\u7528\u7684\u8BDD,\u4F7F\u7528 <code>to=&quot;component1&quot;</code> \u76F8\u5F53\u4E8E\u662Fhref \u5C5E\u6027</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">component1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7EC4\u4EF61</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">component2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7EC4\u4EF62</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">router-link</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u65B9\u6CD5\u4E2D\u8DF3\u8F6C\u8DEF\u7531</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8FD9\u6837\u5C31\u53EF\u4EE5\u8DF3\u8F6C\u5230/mian \u8FD9\u4E2A\u9875\u9762</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6709\u65F6\u5019\u9700\u8981\u4F20\u9012\u53C2\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">userId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u521B\u5EFA\u4E00\u4E2A\u5C0F\u5DE5\u7A0B" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A\u5C0F\u5DE5\u7A0B <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u5C0F\u5DE5\u7A0B" aria-hidden="true">#</a></h4><div class="language-cmd line-numbers-mode"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u9996\u5148\u5B89\u88C5vue \u6807\u51C6\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">vue init webpack \u9879\u76EE\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u8FDB\u5165\u751F\u6210\u51FA\u6765\u7684\u9879\u76EE\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">cd \u9879\u76EE\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u5B89\u88C5vue</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">router</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install vue</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">router </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u5B89\u88C5element</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ui</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i element</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ui </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">S</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u5B89\u88C5SASS\u52A0\u8F7D\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">cnpm install sass</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">loader node</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">sass </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6709\u53EF\u80FD\u4E4B\u540E\u4F1A\u62A5\u9519,\u539F\u56E0\u6709\u65F6\u5019\u662Fsass\u7248\u672C\u592A\u9AD8,\u4FEE\u6539sass \u7248\u672C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^7.3.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u8FD0\u884Cvue\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8BF4\u660E</span></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save \u7684\u610F\u601D\u662F\u5C06\u8BE5\u6A21\u5757\u5B89\u88C5\u5230\u9879\u76EE\u76EE\u5F55\u4E0B,\u5E76\u5728package \u6587\u4EF6\u4E2D\u7684dependencies \u8282\u70B9\u5199\u5165\u4F9D\u8D56 </span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">S \u662F</span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save \u547D\u4EE4\u7684\u7F29\u5199</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev \u7684\u610F\u601D\u662F\u5C06\u8BE5\u6A21\u5757\u5B89\u88C5\u5230\u9879\u76EE\u76EE\u5F55\u4E0B,\u5E76\u5728package \u6587\u4EF6\u4E2D\u7684devDependencies \u8282\u70B9\u5199\u5165\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D \u662F</span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev \u547D\u4EE4\u7684\u7F29\u5199</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u5173\u4E8Evue-router" tabindex="-1">\u5173\u4E8Evue-router <a class="header-anchor" href="#\u5173\u4E8Evue-router" aria-hidden="true">#</a></h3><p>\u67E5\u770B\u6587\u6863 <a href="https://router.vuejs.org/zh" target="_blank" rel="noreferrer">https://router.vuejs.org/zh</a></p><h2 id="refs" tabindex="-1">$refs <a class="header-anchor" href="#refs" aria-hidden="true">#</a></h2><p>\u4F7F\u7528</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;el-form ref=&quot;dynamicValidateForm1&quot; &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/el-form&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u7528\u6CD5\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;">this.$refs[\u7EC4\u4EF6\u4E2D ref \u58F0\u660E\u7684\u540D\u79F0] </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u6837\u5C31\u53EF\u4EE5\u83B7\u53D6ref \u58F0\u660E\u7684\u5BF9\u8C61</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u7528\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#A6ACCD;">this.$refs.ref \u58F0\u660E\u7684\u540D\u79F0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,64),o=[e];function r(c,t,i,D,y,u){return n(),a("div",null,o)}const C=s(p,[["render",r]]);export{b as __pageData,C as default};