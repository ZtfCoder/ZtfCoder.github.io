import{_ as l,o as p,c as o,k as s,a as n,t as e,Q as a}from"./chunks/framework.1baa841b.js";const v=JSON.parse('{"title":"vue","description":"","frontmatter":{},"headers":[],"relativePath":"src/main/vue/vue 入门.md","filePath":"src/main/vue/vue 入门.md","lastUpdated":1713749248000}'),t={name:"src/main/vue/vue 入门.md"},c=a(`<h1 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h1><p>第一步肯定是导入vue.js资源</p><p>需要创建一个vue 对象</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{message}}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            message:</span><span style="color:#9ECBFF;">&quot;蓝桥学院&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{message}}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            message:</span><span style="color:#032F62;">&quot;蓝桥学院&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>el</strong> 指的 挂载点</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">可以挂载到 其他上面,比如 class id 等等,写法也是一样的</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">可以挂载到 其他上面,比如 class id 等等,写法也是一样的</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>data</strong> 是绑定的数据</p><h2 id="el" tabindex="-1">el <a class="header-anchor" href="#el" aria-label="Permalink to &quot;el&quot;">​</a></h2><p>挂载点,可以绑定需要挂载的dom,可以理解为选择器</p><h2 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h2><p><strong>字符串</strong></p><p>直接写的是字符串类型,绑定后,直接显示</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">message:&quot;蓝桥学院&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">message:&quot;蓝桥学院&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>对象</strong></p><p>安按照js 语法,需要对象点属性</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;用户名{{user.name}}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;年龄{{user.age}}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">user:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    age:19,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:&quot;zs&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;用户名{{user.name}}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;年龄{{user.age}}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">user:{</span></span>
<span class="line"><span style="color:#24292E;">    age:19,</span></span>
<span class="line"><span style="color:#24292E;">    name:&quot;zs&quot;,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>数组</strong></p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;userList:{{userList[1]}}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">userList:[19,29,10]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;userList:{{userList[1]}}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">userList:[19,29,10]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="v-text" tabindex="-1">v-text <a class="header-anchor" href="#v-text" aria-label="Permalink to &quot;v-text&quot;">​</a></h2>`,19),r=a(`<div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">message</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">message</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="v-html" tabindex="-1">v-html <a class="header-anchor" href="#v-html" aria-label="Permalink to &quot;v-html&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;p v-text=&quot;message&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;p v-html=&quot;message&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            message:</span><span style="color:#9ECBFF;">&quot;&lt;a href=&#39;#&#39;&gt;蓝桥学院&lt;/a&gt;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;p v-text=&quot;message&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;p v-html=&quot;message&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            message:</span><span style="color:#032F62;">&quot;&lt;a href=&#39;#&#39;&gt;蓝桥学院&lt;/a&gt;&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果是普通文本则 和v-text 一样, 如果,有html代码,则 <strong>v-html</strong> 会解析成html代码</p><h2 id="v-on" tabindex="-1">v-on <a class="header-anchor" href="#v-on" aria-label="Permalink to &quot;v-on&quot;">​</a></h2><p>用来绑定事件</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;!--绑定事件的3种方式--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;input type=&quot;button&quot; value=&quot;v-on指令&quot; v-on:click=&quot;doIt&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;input type=&quot;button&quot; value=&quot;v-on指令简写&quot; @click=&quot;doIt&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;input type=&quot;button&quot; value=&quot;双击&quot; @dblclick=&quot;doIt&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{message}}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;input type=&quot;button&quot; value=&quot;Java 牛逼&quot; @click=&quot;checkMessage&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    var app = new Vue({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            message:&quot;vue 牛逼&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        methods:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            doIt:function (){</span></span>
<span class="line"><span style="color:#E1E4E8;">                alert(&quot;hello v-on&quot;)</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            checkMessage:function () {</span></span>
<span class="line"><span style="color:#E1E4E8;">              this.message+=&quot;java 牛比&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    &lt;!--绑定事件的3种方式--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;input type=&quot;button&quot; value=&quot;v-on指令&quot; v-on:click=&quot;doIt&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;input type=&quot;button&quot; value=&quot;v-on指令简写&quot; @click=&quot;doIt&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;input type=&quot;button&quot; value=&quot;双击&quot; @dblclick=&quot;doIt&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{message}}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;input type=&quot;button&quot; value=&quot;Java 牛逼&quot; @click=&quot;checkMessage&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292E;">    var app = new Vue({</span></span>
<span class="line"><span style="color:#24292E;">        el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            message:&quot;vue 牛逼&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        methods:{</span></span>
<span class="line"><span style="color:#24292E;">            doIt:function (){</span></span>
<span class="line"><span style="color:#24292E;">                alert(&quot;hello v-on&quot;)</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            checkMessage:function () {</span></span>
<span class="line"><span style="color:#24292E;">              this.message+=&quot;java 牛比&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>在<strong>methods</strong> 中 进行事件编写</p><p>同时,修改数据,vue不使用操作dom,vue 修改完数据,页面自动更新</p><p>因此,我们修改页面数据,只需要修改绑定的数据就行了</p><p>可以使用 <strong>this</strong> 来获取数据对象</p><h2 id="v-show" tabindex="-1">v-show <a class="header-anchor" href="#v-show" aria-label="Permalink to &quot;v-show&quot;">​</a></h2><p>可以让绑定的dom进行显示或者隐藏</p><p>原理是修改元素的 display</p><p>并且<strong>v-show</strong> 支持 表达式</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;input  type=&quot;button&quot; @click=&quot;btn&quot; value=&quot;切换&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;img v-show=&quot;flag&quot; src=&quot;../img/1.jpg&quot; width=&quot;500&quot; height=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;img v-show=&quot;age&gt;10&quot; src=&quot;../img/1.jpg&quot; width=&quot;500&quot; height=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            flag:</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            age: </span><span style="color:#79B8FF;">19</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        methods:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">btn</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.flag;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;input  type=&quot;button&quot; @click=&quot;btn&quot; value=&quot;切换&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;img v-show=&quot;flag&quot; src=&quot;../img/1.jpg&quot; width=&quot;500&quot; height=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;img v-show=&quot;age&gt;10&quot; src=&quot;../img/1.jpg&quot; width=&quot;500&quot; height=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            flag:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            age: </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        methods:{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">btn</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.flag;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="v-if" tabindex="-1">v-if <a class="header-anchor" href="#v-if" aria-label="Permalink to &quot;v-if&quot;">​</a></h2><p>v-if 和v-show 差不多 ,唯一区别是 <strong>v-show</strong> 原理是修改 样式修改,<strong>v-if</strong> 则是直接删除该dom树,比较消耗性能</p><h2 id="v-for" tabindex="-1">v-for <a class="header-anchor" href="#v-for" aria-label="Permalink to &quot;v-for&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!--todos是在Vue 对象中声明的一个变量,todo 是我们遍历整个数组中的每一个值 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 可以多写一个参数,index 就是索引 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(item,index) in arr&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{index}} {{item}}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!--todos是在Vue 对象中声明的一个变量,todo 是我们遍历整个数组中的每一个值 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">ol</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">ol</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 可以多写一个参数,index 就是索引 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(item,index) in arr&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{index}} {{item}}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  el: </span><span style="color:#9ECBFF;">&#39;#app-4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    todos: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;学习 JavaScript&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;学习 Vue&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;整个牛项目&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  el: </span><span style="color:#032F62;">&#39;#app-4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  data: {</span></span>
<span class="line"><span style="color:#24292E;">    todos: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;学习 JavaScript&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;学习 Vue&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;整个牛项目&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="v-bind" tabindex="-1">v-bind <a class="header-anchor" href="#v-bind" aria-label="Permalink to &quot;v-bind&quot;">​</a></h2><p>为元素绑定属性</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1 v-bind:src=&quot;imgSrc&quot;   # imgSrc 是一个你声明好的数据</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">2 :src=&quot;imgSrc&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1 v-bind:src=&quot;imgSrc&quot;   # imgSrc 是一个你声明好的数据</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">2 :src=&quot;imgSrc&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="keyup" tabindex="-1">@keyup <a class="header-anchor" href="#keyup" aria-label="Permalink to &quot;@keyup&quot;">​</a></h2><p>键盘事件</p><p>和**@click** 事件类似 但是,可以增加参数,比如</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@keyup.enter  </span></span>
<span class="line"><span style="color:#E1E4E8;">代表回车事件</span></span>
<span class="line"><span style="color:#E1E4E8;">还有其他,都是类似的用法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@keyup.enter  </span></span>
<span class="line"><span style="color:#24292E;">代表回车事件</span></span>
<span class="line"><span style="color:#24292E;">还有其他,都是类似的用法</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-label="Permalink to &quot;v-model&quot;">​</a></h2><p><strong>双向数据绑定</strong>,与表单元素进行绑定</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;input type=&quot;text&quot; v-model=&quot;message&quot;&gt;&lt;br/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;p&gt;{{message}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!--双向数据绑定,只要改变一方的数据,另外一边也修改--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            message:</span><span style="color:#9ECBFF;">&quot;aaa&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;input type=&quot;text&quot; v-model=&quot;message&quot;&gt;&lt;br/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;p&gt;{{message}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;!--双向数据绑定,只要改变一方的数据,另外一边也修改--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            message:</span><span style="color:#032F62;">&quot;aaa&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>注意 双向数据绑定只能绑定 表单 <strong>input</strong></p><h1 id="网络请求" tabindex="-1">网络请求 <a class="header-anchor" href="#网络请求" aria-label="Permalink to &quot;网络请求&quot;">​</a></h1><h2 id="axios" tabindex="-1">axios <a class="header-anchor" href="#axios" aria-label="Permalink to &quot;axios&quot;">​</a></h2><p>首先导入,axios 资源</p><p>axios 是一个功能强大的网络请求库,发送的还是ajax请求</p><p>语法</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">sendGet:function () {</span></span>
<span class="line"><span style="color:#E1E4E8;">//get请求和post请求方法一样</span></span>
<span class="line"><span style="color:#E1E4E8;">    axios.get(&quot;url&quot;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .then(function (result) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    //请求成功后,返回result</span></span>
<span class="line"><span style="color:#E1E4E8;">    },function (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    //请求失败,触发函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">)}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">sendGet:function () {</span></span>
<span class="line"><span style="color:#24292E;">//get请求和post请求方法一样</span></span>
<span class="line"><span style="color:#24292E;">    axios.get(&quot;url&quot;)</span></span>
<span class="line"><span style="color:#24292E;">    .then(function (result) {</span></span>
<span class="line"><span style="color:#24292E;">    //请求成功后,返回result</span></span>
<span class="line"><span style="color:#24292E;">    },function (err) {</span></span>
<span class="line"><span style="color:#24292E;">    //请求失败,触发函数</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">)}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="钩子函数" tabindex="-1">钩子函数 <a class="header-anchor" href="#钩子函数" aria-label="Permalink to &quot;钩子函数&quot;">​</a></h2><p>mounted(){}在加载完成时,可以进行一些操作,比如发送异步请求等</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">//可以把里面的值返回出去,相当于定义变量</span></span>
<span class="line"><span style="color:#E1E4E8;">data(){</span></span>
<span class="line"><span style="color:#E1E4E8;">	return{</span></span>
<span class="line"><span style="color:#E1E4E8;">		json{</span></span>
<span class="line"><span style="color:#E1E4E8;">			//这里的格式必须和返回的返回的格式一样</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">mounted(){</span></span>
<span class="line"><span style="color:#E1E4E8;">	axios.get(&quot;url&quot;).then(resutl=&gt;(this.json=result)</span></span>
<span class="line"><span style="color:#E1E4E8;">	// =&gt; 这个和Java的lamber 差不多</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">//可以把里面的值返回出去,相当于定义变量</span></span>
<span class="line"><span style="color:#24292E;">data(){</span></span>
<span class="line"><span style="color:#24292E;">	return{</span></span>
<span class="line"><span style="color:#24292E;">		json{</span></span>
<span class="line"><span style="color:#24292E;">			//这里的格式必须和返回的返回的格式一样</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">mounted(){</span></span>
<span class="line"><span style="color:#24292E;">	axios.get(&quot;url&quot;).then(resutl=&gt;(this.json=result)</span></span>
<span class="line"><span style="color:#24292E;">	// =&gt; 这个和Java的lamber 差不多</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h1 id="自定义组件" tabindex="-1">自定义组件 <a class="header-anchor" href="#自定义组件" aria-label="Permalink to &quot;自定义组件&quot;">​</a></h1><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;ol&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;todo-item&gt;&lt;/todo-item&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/ol&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../vue.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//todo-item 是这个组件的名称,template 是模板内的内容,要使用它, 就像html标签一样 &lt;todo-item&gt;&lt;/todo-item&gt; </span></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;todo-item&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        template: </span><span style="color:#9ECBFF;">&#39;&lt;button @click=&quot;domore&quot; &gt;www&lt;/button&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        methods:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">domore</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.todo</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;domore&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            todo:</span><span style="color:#9ECBFF;">&quot;aaaa&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;ol&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;todo-item&gt;&lt;/todo-item&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/ol&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../vue.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//todo-item 是这个组件的名称,template 是模板内的内容,要使用它, 就像html标签一样 &lt;todo-item&gt;&lt;/todo-item&gt; </span></span>
<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;todo-item&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        template: </span><span style="color:#032F62;">&#39;&lt;button @click=&quot;domore&quot; &gt;www&lt;/button&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        methods:{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">domore</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.todo</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;domore&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            todo:</span><span style="color:#032F62;">&quot;aaaa&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>由于vue 实例对象和组件,属于同级关系,所以,我们想要往组件中传递参数的话,必须使用<code>props</code>属性声明</p></blockquote><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;ol&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;todo-item v-bind:val=ite&gt;&lt;/todo-item&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/ol&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../vue.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;todo-item&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        props:[</span><span style="color:#9ECBFF;">&#39;val&#39;</span><span style="color:#E1E4E8;">],</span><span style="color:#6A737D;">//记住,一定要加引号,否则无法声明这个变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        template: </span><span style="color:#9ECBFF;">&#39;&lt;button @click=&quot;domore&quot; &gt;www&lt;/button&gt;7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        methods:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">domore</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.todo</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.val</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            todo:</span><span style="color:#9ECBFF;">&quot;aaaa&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;ol&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;todo-item v-bind:val=ite&gt;&lt;/todo-item&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/ol&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../vue.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;todo-item&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        props:[</span><span style="color:#032F62;">&#39;val&#39;</span><span style="color:#24292E;">],</span><span style="color:#6A737D;">//记住,一定要加引号,否则无法声明这个变量</span></span>
<span class="line"><span style="color:#24292E;">        template: </span><span style="color:#032F62;">&#39;&lt;button @click=&quot;domore&quot; &gt;www&lt;/button&gt;7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        methods:{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">domore</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.todo</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.val</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            todo:</span><span style="color:#032F62;">&quot;aaaa&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><strong>用法二</strong></p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;my-comment v-for=&quot;obj in item&quot; v-bind:va=&quot;obj&quot;&gt;&lt;/my-comment&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../vue.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//这里的 va 相当于就是这个组件的属性,然后,模板中又用到这个属性,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-comment&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        props:[</span><span style="color:#9ECBFF;">&#39;va&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        template:</span><span style="color:#9ECBFF;">&#39;&lt;li&gt;{{va}}&lt;/li&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            item:[</span><span style="color:#9ECBFF;">&quot;aa&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;bb&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;cc&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;my-comment v-for=&quot;obj in item&quot; v-bind:va=&quot;obj&quot;&gt;&lt;/my-comment&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../vue.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//这里的 va 相当于就是这个组件的属性,然后,模板中又用到这个属性,</span></span>
<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-comment&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">        props:[</span><span style="color:#032F62;">&#39;va&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        template:</span><span style="color:#032F62;">&#39;&lt;li&gt;{{va}}&lt;/li&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            item:[</span><span style="color:#032F62;">&quot;aa&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;bb&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;cc&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>你可以自己设置<code>props</code> 属性的类型</p></blockquote><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">  likes: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">  isPublished: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">  commentIds: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">  author: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">  callback: Function,</span></span>
<span class="line"><span style="color:#E1E4E8;">  contactsPromise: Promise // or any other constructor</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">props: {</span></span>
<span class="line"><span style="color:#24292E;">  title: String,</span></span>
<span class="line"><span style="color:#24292E;">  likes: Number,</span></span>
<span class="line"><span style="color:#24292E;">  isPublished: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">  commentIds: Array,</span></span>
<span class="line"><span style="color:#24292E;">  author: Object,</span></span>
<span class="line"><span style="color:#24292E;">  callback: Function,</span></span>
<span class="line"><span style="color:#24292E;">  contactsPromise: Promise // or any other constructor</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;my-slot&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;!--slot 声明是插入的是哪个组件--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;my-title slot=&quot;my-title&quot;&gt;&lt;/my-title&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;my-item slot=&quot;my-item&quot; v-bind:val=&quot;obj&quot; v-for=&quot;obj in item&quot;&gt;&lt;/my-item&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/my-slot&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;my-slot&quot;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// &lt;slot&gt;&lt;/slot&gt; 使用这个标签来声明插槽的位置,使用时,用name属性,来绑定需要插入的组件</span></span>
<span class="line"><span style="color:#E1E4E8;">        template:</span><span style="color:#9ECBFF;">&#39;&lt;div&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;    &lt;slot name=&quot;my-title&quot;&gt;&lt;/slot&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;    &lt;ul&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;        &lt;slot name=&quot;my-item&quot;&gt;&lt;/slot&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;    &lt;/ul&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-title&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        template:</span><span style="color:#9ECBFF;">&#39;&lt;div&gt;标题&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-item&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        props:[</span><span style="color:#9ECBFF;">&#39;val&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        template:</span><span style="color:#9ECBFF;">&#39;&lt;li&gt;{{val}}&lt;/li&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        el:</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            item:[</span><span style="color:#9ECBFF;">&quot;aa&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;bb&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;cc&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;my-slot&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;!--slot 声明是插入的是哪个组件--&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;my-title slot=&quot;my-title&quot;&gt;&lt;/my-title&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;my-item slot=&quot;my-item&quot; v-bind:val=&quot;obj&quot; v-for=&quot;obj in item&quot;&gt;&lt;/my-item&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/my-slot&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;my-slot&quot;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// &lt;slot&gt;&lt;/slot&gt; 使用这个标签来声明插槽的位置,使用时,用name属性,来绑定需要插入的组件</span></span>
<span class="line"><span style="color:#24292E;">        template:</span><span style="color:#032F62;">&#39;&lt;div&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;    &lt;slot name=&quot;my-title&quot;&gt;&lt;/slot&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;    &lt;ul&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;        &lt;slot name=&quot;my-item&quot;&gt;&lt;/slot&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;    &lt;/ul&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-title&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">        template:</span><span style="color:#032F62;">&#39;&lt;div&gt;标题&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-item&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">        props:[</span><span style="color:#032F62;">&#39;val&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        template:</span><span style="color:#032F62;">&#39;&lt;li&gt;{{val}}&lt;/li&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        el:</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data:{</span></span>
<span class="line"><span style="color:#24292E;">            item:[</span><span style="color:#032F62;">&quot;aa&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;bb&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;cc&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="事件分发" tabindex="-1">事件分发 <a class="header-anchor" href="#事件分发" aria-label="Permalink to &quot;事件分发&quot;">​</a></h2><p>有时候,我们需要再组件中使用vue实例对象中的方法,因为vue实例对象中的方法,可以直接操控数据<code>data</code> ,但是,实例和组件,2者时不同的东西,我们想要达到这样的效果,必须使用事件分发</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 这里的 remove 是自定义事件的名称，需要在 HTML 中使用 v-on:remove 的方式指派 如果需要传递参数直接传递就行了</span></span>
<span class="line"><span style="color:#e1e4e8;">this.$emit(&#39;remove&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 这里的 remove 是自定义事件的名称，需要在 HTML 中使用 v-on:remove 的方式指派 如果需要传递参数直接传递就行了</span></span>
<span class="line"><span style="color:#24292e;">this.$emit(&#39;remove&#39;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,55);function E(i,y,u,b,d,m){return p(),o("div",null,[c,s("p",null,[n("类似"),s("code",null,e(),1),n(" 一样,可以进行数据绑定")]),r])}const q=l(t,[["render",E]]);export{v as __pageData,q as default};
