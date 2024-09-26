import{_ as e,c as n,G as i,a2 as p,B as t,o as l}from"./chunks/framework.sGs2IBkb.js";const k=JSON.parse('{"title":"认识Web和Web标准","description":"","frontmatter":{"title":"认识Web和Web标准","publish":false},"headers":[],"relativePath":"hxg/03-CSS进阶/CSS的一些小知识.md","filePath":"hxg/03-CSS进阶/CSS的一些小知识.md","lastUpdated":1725860495000}'),r={name:"hxg/03-CSS进阶/CSS的一些小知识.md"};function d(h,s,o,c,b,u){const a=t("ArticleTopAd");return l(),n("div",null,[i(a),s[0]||(s[0]=p(`<h2 id="隐藏盒子的几种方式" tabindex="-1">隐藏盒子的几种方式 <a class="header-anchor" href="#隐藏盒子的几种方式" aria-label="Permalink to &quot;隐藏盒子的几种方式&quot;">​</a></h2><p>隐藏盒子，有以下几种方式：</p><p>（1）方式一：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>overflow：hidden;   //隐藏盒子超出的部分</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（2）<strong>方式二</strong>：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>display: none;	  隐藏盒子，而且不占位置(用的最多)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>比如，点击<code>X</code>，关闭京东首页上方的广告栏。</p><p>（3）方式三：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>visibility: hidden;   //隐藏盒子，占位置。</span></span>
<span class="line"><span>visibility: visible;   //让盒子重新显示</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>（4）方式四：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>opacity: 0;       //设置盒子的透明度（不建议，因为内容也会半透明），占位置</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（4）方式五：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Position/top/left/...-999px   //把盒子移得远远的，占位置。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（5）方式六：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>margin-left: 1000px;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="设置盒子的半透明" tabindex="-1">设置盒子的半透明 <a class="header-anchor" href="#设置盒子的半透明" aria-label="Permalink to &quot;设置盒子的半透明&quot;">​</a></h3><p>方式一：<code>opacity: 0.4</code>。优点是方便。缺点是：里面的内容也会半透明。</p><p>方式二：css3的技术来解决半透明。如下：</p><ul><li><p>background: rgba(0,0,0,0.3);</p></li><li><p>background: rgba(0,0,0,.3);</p></li></ul><p>备注：<code>a</code>指的是alpha透明度。</p><h3 id="给标签的形状设置为圆角矩形" tabindex="-1">给标签的形状设置为圆角矩形 <a class="header-anchor" href="#给标签的形状设置为圆角矩形" aria-label="Permalink to &quot;给标签的形状设置为圆角矩形&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>border-radius: 50%;</span></span>
<span class="line"><span>border-radius: 10px 0 0 10px;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="行高的问题-儿子把父亲撑开" tabindex="-1">行高的问题：儿子把父亲撑开 <a class="header-anchor" href="#行高的问题-儿子把父亲撑开" aria-label="Permalink to &quot;行高的问题：儿子把父亲撑开&quot;">​</a></h3><p>比如对于下面这样的标签：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	&lt;div&gt;</span></span>
<span class="line"><span>		&lt;a href=&quot;&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>	&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>前置条件：如果我们给父亲div的行高设为31px，然后给儿子a的行高也设置为31</p><p>结果：当我们给儿子a设置了字体属性之后，会发现，父亲被撑高为32px了。因为font字体自身会比较大，多撑出了一个像素。</p><p>解决办法：<strong>行内元素尽量不要设置font属性</strong>。对于行内元素而言，如果它和父亲都设置了行高，就不要去给自己设置font属性了。要么就，不要同时设置行高。</p><h3 id="背景图不能撑开盒子" tabindex="-1">背景图不能撑开盒子 <a class="header-anchor" href="#背景图不能撑开盒子" aria-label="Permalink to &quot;背景图不能撑开盒子&quot;">​</a></h3><p>高和行高都可以城开盒子，但背景图不能撑开盒子。</p><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h2><h3 id="超链接-a-的href跳转" tabindex="-1">超链接<code>&lt;a&gt;</code>的href跳转 <a class="header-anchor" href="#超链接-a-的href跳转" aria-label="Permalink to &quot;超链接\`&lt;a&gt;\`的href跳转&quot;">​</a></h3><p>一个空白的超链接如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;a href=&quot;&quot;&gt;&lt;/a&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当点击超链接时，由于 href 的属性值的不同，可以产生很多种情况：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                    //刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                   //跳转到当前页面的顶部（不会刷新）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript:void(0)&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 什么都不做</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript:;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 什么都不做</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,36))])}const m=e(r,[["render",d]]);export{k as __pageData,m as default};
