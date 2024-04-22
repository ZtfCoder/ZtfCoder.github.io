import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1baa841b.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/main/cpp/cpp面向对象.md","filePath":"src/main/cpp/cpp面向对象.md","lastUpdated":1713749248000}'),p={name:"src/main/cpp/cpp面向对象.md"},o=l(`<h2 id="class-声明" tabindex="-1">class 声明 <a class="header-anchor" href="#class-声明" aria-label="Permalink to &quot;class 声明&quot;">​</a></h2><p>声明一个 class 类型</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Studnet</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	string name;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAge</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Studnet</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	string name;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAge</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>public: 表示他们的访问权限</p><p>使用</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Studnet</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	string name;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAge</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#F97583;">private :</span></span>
<span class="line"><span style="color:#E1E4E8;">	string sex;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	Studnet s1;</span></span>
<span class="line"><span style="color:#E1E4E8;">	s1.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> s1.</span><span style="color:#B392F0;">getAge</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Studnet</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	string name;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAge</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#D73A49;">private :</span></span>
<span class="line"><span style="color:#24292E;">	string sex;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	Studnet s1;</span></span>
<span class="line"><span style="color:#24292E;">	s1.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> s1.</span><span style="color:#6F42C1;">getAge</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>class 对象可以直接声明后,直接使用,相当于是临时变量,函数执行完,就会自动释放</p><p>还可以使用 new 关键词进行创建对象</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Studnet </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> s2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Studnet</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s2-&gt;age;</span></span>
<span class="line"><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> s2;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Studnet </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> s2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Studnet</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s2-&gt;age;</span></span>
<span class="line"><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> s2;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="构造函数和析构函数" tabindex="-1">构造函数和析构函数 <a class="header-anchor" href="#构造函数和析构函数" aria-label="Permalink to &quot;构造函数和析构函数&quot;">​</a></h2><p>构造函数 和 Java 一样,在创建对象的时候,进行调用,语法也是一样, <code>类名(){}</code></p><p>析构函数 是对象在被回收前进行执行的方法, 语法 <code>~类名(){}</code>,析构函数只能有一个</p><p>如果,不写构造函数和析构函数,编译器会有一个默认的空实现</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyClass</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">MyClass</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;构造函数&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">~MyClass</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;析构函数&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	MyClass p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyClass</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">MyClass</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;构造函数&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">~MyClass</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;析构函数&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	MyClass p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="构造函数分类" tabindex="-1">构造函数分类 <a class="header-anchor" href="#构造函数分类" aria-label="Permalink to &quot;构造函数分类&quot;">​</a></h2><p>两种分类方式：</p><p>​ 按参数分为： 有参构造和无参构造</p><p>​ 按类型分为： 普通构造和拷贝构造</p><p>三种调用方式：</p><p>​ 括号法</p><p>​ 显示法</p><p>​ 隐式转换法</p><p><strong>示例：</strong></p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//1、构造函数分类</span></span>
<span class="line"><span style="color:#6A737D;">// 按照参数分类分为 有参和无参构造   无参又称为默认构造函数</span></span>
<span class="line"><span style="color:#6A737D;">// 按照类型分类分为 普通构造和拷贝构造</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#6A737D;">	//无参（默认）构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;无参构造函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//有参构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;有参构造函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//拷贝构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p.age;</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;拷贝构造函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//析构函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">~Person</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;析构函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2、构造函数的调用</span></span>
<span class="line"><span style="color:#6A737D;">//调用无参构造函数</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test01</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p;</span><span style="color:#6A737D;"> //调用无参构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//调用有参的构造函数</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test02</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//2.1  括号法，常用</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person </span><span style="color:#B392F0;">p1</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">	//注意1：调用无参构造函数不能加括号，如果加了编译器认为这是一个函数声明</span></span>
<span class="line"><span style="color:#6A737D;">	//Person p2();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//2.2 显式法</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(p2);</span></span>
<span class="line"><span style="color:#6A737D;">	//Person(10)单独写就是匿名对象  当前行结束之后，马上析构</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//2.3 隐式转换法</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // Person p4 = Person(10);</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p5 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p4;</span><span style="color:#6A737D;"> // Person p5 = Person(p4);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//注意2：不能利用 拷贝构造函数 初始化匿名对象 编译器认为是对象声明</span></span>
<span class="line"><span style="color:#6A737D;">	//Person p5(p4);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">test01</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">	//test02();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">system</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;pause&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//1、构造函数分类</span></span>
<span class="line"><span style="color:#6A737D;">// 按照参数分类分为 有参和无参构造   无参又称为默认构造函数</span></span>
<span class="line"><span style="color:#6A737D;">// 按照类型分类分为 普通构造和拷贝构造</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#6A737D;">	//无参（默认）构造函数</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;无参构造函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//有参构造函数</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;有参构造函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//拷贝构造函数</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">p</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p.age;</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;拷贝构造函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//析构函数</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">~Person</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;析构函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2、构造函数的调用</span></span>
<span class="line"><span style="color:#6A737D;">//调用无参构造函数</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test01</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	Person p;</span><span style="color:#6A737D;"> //调用无参构造函数</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//调用有参的构造函数</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test02</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//2.1  括号法，常用</span></span>
<span class="line"><span style="color:#24292E;">	Person </span><span style="color:#6F42C1;">p1</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">	//注意1：调用无参构造函数不能加括号，如果加了编译器认为这是一个函数声明</span></span>
<span class="line"><span style="color:#6A737D;">	//Person p2();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//2.2 显式法</span></span>
<span class="line"><span style="color:#24292E;">	Person p2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	Person p3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(p2);</span></span>
<span class="line"><span style="color:#6A737D;">	//Person(10)单独写就是匿名对象  当前行结束之后，马上析构</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//2.3 隐式转换法</span></span>
<span class="line"><span style="color:#24292E;">	Person p4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // Person p4 = Person(10);</span></span>
<span class="line"><span style="color:#24292E;">	Person p5 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p4;</span><span style="color:#6A737D;"> // Person p5 = Person(p4);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//注意2：不能利用 拷贝构造函数 初始化匿名对象 编译器认为是对象声明</span></span>
<span class="line"><span style="color:#6A737D;">	//Person p5(p4);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">test01</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">	//test02();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">system</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;pause&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="拷贝函数" tabindex="-1">拷贝函数 <a class="header-anchor" href="#拷贝函数" aria-label="Permalink to &quot;拷贝函数&quot;">​</a></h2><p>C++中拷贝构造函数调用时机通常有三种情况</p><ul><li>使用一个已经创建完毕的对象来初始化一个新对象</li><li>值传递的方式给函数参数传值</li><li>以值方式返回局部对象</li></ul><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;无参构造函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">		mAge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">age</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;有参构造函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">		mAge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Person</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;拷贝构造函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">		mAge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p.mAge;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//析构函数在释放内存之前调用</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">~Person</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;析构函数!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> mAge;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1. 使用一个已经创建完毕的对象来初始化一个新对象</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test01</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	Person </span><span style="color:#B392F0;">man</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> //p对象已经创建完毕</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person </span><span style="color:#B392F0;">newman</span><span style="color:#E1E4E8;">(man);</span><span style="color:#6A737D;"> //调用拷贝构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person newman2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> man;</span><span style="color:#6A737D;"> //拷贝构造</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//Person newman3;</span></span>
<span class="line"><span style="color:#6A737D;">	//newman3 = man; //不是调用拷贝构造函数，赋值操作</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2. 值传递的方式给函数参数传值</span></span>
<span class="line"><span style="color:#6A737D;">//相当于Person p1 = p;</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doWork</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">p1</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test02</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p;</span><span style="color:#6A737D;"> //无参构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">doWork</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3. 以值方式返回局部对象</span></span>
<span class="line"><span style="color:#B392F0;">Person</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doWork2</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p1;</span></span>
<span class="line"><span style="color:#E1E4E8;">	cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">p1 </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p1;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test03</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	Person p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doWork2</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">	cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//test01();</span></span>
<span class="line"><span style="color:#6A737D;">	//test02();</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">test03</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">system</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;pause&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;无参构造函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">		mAge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">age</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;有参构造函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">		mAge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">p</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;拷贝构造函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">		mAge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p.mAge;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#6A737D;">	//析构函数在释放内存之前调用</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">~Person</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;析构函数!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> mAge;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//1. 使用一个已经创建完毕的对象来初始化一个新对象</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test01</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	Person </span><span style="color:#6F42C1;">man</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> //p对象已经创建完毕</span></span>
<span class="line"><span style="color:#24292E;">	Person </span><span style="color:#6F42C1;">newman</span><span style="color:#24292E;">(man);</span><span style="color:#6A737D;"> //调用拷贝构造函数</span></span>
<span class="line"><span style="color:#24292E;">	Person newman2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> man;</span><span style="color:#6A737D;"> //拷贝构造</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//Person newman3;</span></span>
<span class="line"><span style="color:#6A737D;">	//newman3 = man; //不是调用拷贝构造函数，赋值操作</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//2. 值传递的方式给函数参数传值</span></span>
<span class="line"><span style="color:#6A737D;">//相当于Person p1 = p;</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doWork</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> </span><span style="color:#E36209;">p1</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test02</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	Person p;</span><span style="color:#6A737D;"> //无参构造函数</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">doWork</span><span style="color:#24292E;">(p);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//3. 以值方式返回局部对象</span></span>
<span class="line"><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doWork2</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	Person p1;</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">p1 </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p1;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test03</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	Person p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doWork2</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	//test01();</span></span>
<span class="line"><span style="color:#6A737D;">	//test02();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">test03</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">system</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;pause&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="浅拷贝-和深拷贝" tabindex="-1">浅拷贝,和深拷贝 <a class="header-anchor" href="#浅拷贝-和深拷贝" aria-label="Permalink to &quot;浅拷贝,和深拷贝&quot;">​</a></h2><h2 id="静态变量" tabindex="-1">静态变量 <a class="header-anchor" href="#静态变量" aria-label="Permalink to &quot;静态变量&quot;">​</a></h2><p>和 Java 类型,类中可以写 静态变量</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyClass</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">MyClass</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;构造函数&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">~MyClass</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;析构函数&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 使用前必须赋值 初始化操作</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyClass</span><span style="color:#E1E4E8;">::age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyClass</span><span style="color:#E1E4E8;">::age;</span></span>
<span class="line"><span style="color:#E1E4E8;">	cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyClass</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">MyClass</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;构造函数&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">~MyClass</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;析构函数&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 使用前必须赋值 初始化操作</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyClass</span><span style="color:#24292E;">::age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyClass</span><span style="color:#24292E;">::age;</span></span>
<span class="line"><span style="color:#24292E;">	cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>还可以在类中进行初始化,但是必须使用<code>const</code> 修饰</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><p>this 代表当前调用的对象的指针类型</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Student</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">f1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;f1()&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">f2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;age=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">-&gt;age </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	Student</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	s-&gt;</span><span style="color:#B392F0;">f1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">	//s-&gt;f2();</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Student</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">f1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;f1()&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">f2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;age=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">-&gt;age </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	Student</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	s-&gt;</span><span style="color:#6F42C1;">f1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">	//s-&gt;f2();</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>c++ 中如果空指针是可以访问对象中的方法的,但是,如果方法中含有<code>this</code> (属性前面会默认使用 this.) 则会程序出错</p><p>也就是说 <code>f1()</code> 函数不会出错,但是<code>f2() </code> 函数会运行错误</p>`,39),e=[o];function c(t,r,E,y,i,b){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{F as __pageData,m as default};
