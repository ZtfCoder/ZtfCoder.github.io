import{_ as a,c as t,G as e,a2 as l,B as p,o as n}from"./chunks/framework.sGs2IBkb.js";const u=JSON.parse('{"title":"06-HTML标签：图片标签","description":"","frontmatter":{"title":"06-HTML标签：图片标签","publish":true},"headers":[],"relativePath":"hxg/01-HTML/06-HTML标签：图片标签.md","filePath":"hxg/01-HTML/06-HTML标签：图片标签.md","lastUpdated":1725860495000}'),h={name:"hxg/01-HTML/06-HTML标签：图片标签.md"};function r(d,i,o,g,c,k){const s=p("ArticleTopAd");return n(),t("div",null,[e(s),i[0]||(i[0]=l(`<h2 id="img标签介绍" tabindex="-1">img标签介绍 <a class="header-anchor" href="#img标签介绍" aria-label="Permalink to &quot;img标签介绍&quot;">​</a></h2><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>img: 英文全称 image（图像），代表的是一张图片。</p><p>如果要想在网页中显示图像，就可以使用img 标签，它是一个单标签。语法如下：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;图片的URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="能插入的图片类型" tabindex="-1">能插入的图片类型 <a class="header-anchor" href="#能插入的图片类型" aria-label="Permalink to &quot;能插入的图片类型&quot;">​</a></h3><ul><li><p>能够插入的图片类型是：jpg(jpeg)、gif、png、bmp等。</p></li><li><p>不能往网页中插入的图片格式是：psd、ai等。</p></li></ul><p>HTML页面不是直接插入图片，而是插入图片的引用地址，所以要先把图片上传到服务器上。</p><h2 id="img标签的src属性" tabindex="-1">img标签的<code>src</code>属性 <a class="header-anchor" href="#img标签的src属性" aria-label="Permalink to &quot;img标签的\`src\`属性&quot;">​</a></h2><p>这里涉及到图片的一个属性：</p><ul><li><code>src</code>属性：指图片的路径。英文名称 source。</li></ul><p>在写<strong>图片的路径</strong>时，有两种写法：相对路径、绝对路径</p><h3 id="写法一-图片的相对路径" tabindex="-1">写法一：图片的相对路径 <a class="header-anchor" href="#写法一-图片的相对路径" aria-label="Permalink to &quot;写法一：图片的相对路径&quot;">​</a></h3><p>相对当前页面所在的路径。两个标记 <code>.</code> 和 <code>..</code> 分表代表当前目录和上一层目录。</p><p>举例1：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 当前目录中的图片 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./2.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 上一级目录中的图片 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../2.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>相对路径不会出现这种情况：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aaa/../bbb/1.jpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>../</code>要么不写，要么就写在开头。</p><p>举例2：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;images/1.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上方代码的意思是说，当前html页面有一个并列的文件夹<code>images</code>，在文件夹<code>images</code>中存放了一张图片<code>1.jpg</code> 效果：</p><p><img src="http://img.smyhvae.com/20151001_19.jpg" alt="Paste_Image.png"></p><p>相对路径的面试题。现有如下文件层级图：</p><p><img src="http://img.smyhvae.com/20170630_1133.png" alt=""></p><p>问题：如果想在index.html中插入1.png，那么对应的img语句是？</p><p>分析：</p><p>现在document是最大的文件夹，里面有两个文件夹work和photo。work中又有一个文件夹叫做myweb。myweb文件夹里面有index.html。 所以index.html在myweb文件夹里面，上一级就是work文件夹，上两级就是document文件夹。通过document文件夹当做一个中转站，进入photo文件夹，看到了1.png。</p><p>答案：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../../photo/1.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="写法二-图片的绝对路径" tabindex="-1">写法二：图片的绝对路径 <a class="header-anchor" href="#写法二-图片的绝对路径" aria-label="Permalink to &quot;写法二：图片的绝对路径&quot;">​</a></h3><p>绝对路径包括以下两种：</p><p>（1）以盘符开始的绝对路径。举例：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;C:\\Users\\qianguyihao\\Desktop\\html\\images\\1.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（2）网络路径。举例：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://img.smyhvae.com/20200122_200901.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>大家打开上面的img中的链接，可能有彩蛋哦。</p><h3 id="相对路径和绝对路径的总结" tabindex="-1">相对路径和绝对路径的总结 <a class="header-anchor" href="#相对路径和绝对路径的总结" aria-label="Permalink to &quot;相对路径和绝对路径的总结&quot;">​</a></h3><p>相对路径的好处：站点不管拷贝到哪里，文件和图片的相对路径关系都是不变的。相对路径使用有一个前提，就是网页文件和你的图片，必须在一个服务器上。</p><p><strong>总结一下</strong>：</p><p>无论是在 a 标签还是 img 标签上，如果要用路径。只有两种路径能用，就是相对路径和绝对路径：</p><ul><li><p>相对路径从自己出发，找到别人。</p></li><li><p>绝对路径，就是<code>http://</code>或者<code>https://</code>开头的路径。</p></li></ul><h2 id="img标签的其他属性" tabindex="-1">img标签的其他属性 <a class="header-anchor" href="#img标签的其他属性" aria-label="Permalink to &quot;img标签的其他属性&quot;">​</a></h2><h3 id="width、height-属性" tabindex="-1">width、height 属性 <a class="header-anchor" href="#width、height-属性" aria-label="Permalink to &quot;width、height 属性&quot;">​</a></h3><ul><li><p><code>width</code>：图像的宽度。</p></li><li><p><code>height</code>：图像的高度。</p></li></ul><p>width和height，在 HTML5 中的单位是 CSS 像素，在 HTML 4 中既可以是像素，也可以是百分比。可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。</p><p><strong>重要提示</strong>：如果要想保证图片等比例缩放，请只设置width和height中其中一个。</p><h3 id="alt-属性" tabindex="-1">Alt 属性 <a class="header-anchor" href="#alt-属性" aria-label="Permalink to &quot;Alt 属性&quot;">​</a></h3><ul><li><code>alt</code>：当图片不可用（无法显示）的时候，代替图片显示的内容。alt是英语 alternate “替代”的意思，代表替换资源。</li></ul><p><code>Alt</code>属性效果演示：</p><p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_21.png" alt="Paste_Image.png"></p><p>如上图所示：当图片 src 不可用的时候，显示文字。这样做，至少能让用户知道，这个图片大概是什么内容。</p><h3 id="title-属性" tabindex="-1">title 属性 <a class="header-anchor" href="#title-属性" aria-label="Permalink to &quot;title 属性&quot;">​</a></h3><ul><li><code>title</code>：<strong>提示性文本</strong>。鼠标悬停时出现的文本。</li></ul><p>title 属性不该被用作一幅图片在 alt 之外的补充说明信息。如果一幅图片需要小标题，使用 figure 或 figcaption 元素。</p><p>title 元素的值一般作为提示条(tooltip)呈现给用户，在光标于图片上停下后显示出来。尽管这确实能给用户提供更多的信息，您不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，可以选择上面提供的一种方法将其内联显示，而不是使用 title。</p><p>举例：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;images/1.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\`188&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是美女&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果：</p><p><img src="http://img.smyhvae.com/2015-10-01-cnblogs_html_20.png" alt="Paste_Image.png"></p><h3 id="align-属性" tabindex="-1">align 属性 <a class="header-anchor" href="#align-属性" aria-label="Permalink to &quot;align 属性&quot;">​</a></h3><ul><li>图片的<code>align</code>属性：<strong>图片和周围文字的相对位置</strong>。属性取值可以是：bottom（默认）、center、top、left、right。</li></ul><p>如果想实现图文混排的效果，请使用align属性，取值为left或right。</p><p>我们来分别看一下这<code>align</code>属性的这几个属性值的区别。</p><p>1、<code>align=&quot;&quot;</code>，图片和文字底端对齐。即默认情况下的显示效果：</p><p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_19.png" alt=""></p><p>2、<code>align=&quot;center&quot;</code>：图片和文字水平方向上居中对齐。显示效果：</p><p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_21.png" alt=""></p><p>3、<code>align=&quot;top&quot;</code>：图片与文字顶端对齐。显示效果：</p><p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_22.png" alt=""></p><p>4、<code>align=&quot;left&quot;</code>：图片在文字的左边。显示效果：</p><p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_23.png" alt=""></p><p>5、<code>align=&quot;right&quot;</code>：图片在文字的右边。显示效果：</p><p><img src="http://img.smyhvae.com/2015-10-02-cnblogs_html_24.png" alt=""></p><h3 id="其他已废弃的属性" tabindex="-1">其他已废弃的属性 <a class="header-anchor" href="#其他已废弃的属性" aria-label="Permalink to &quot;其他已废弃的属性&quot;">​</a></h3><ul><li><code>Align</code>（已废弃）：指图片的水平对齐方式，属性值可以是：top、middle、bottom、left、center、right。该属性已废弃，替换为 <code>vertical-align</code>这个CSS属性。</li><li><code>border</code>（已废弃）：给图片加边框，单位是像素，边框的颜色默认黑色。该属性已废弃，替换为 <code>border</code>这个CSS属性。</li><li><code>Hspace</code>（已废弃）：指图片左右的边距。</li><li><code>Vspace</code>（已废弃）：指图片上下的边距。</li></ul><p>最后，送上妹子的近照一张。楼主已经仁至义尽了：<a href="http://img.smyhvae.com/2015-10-01-cnblogs_html_20150219214912_11994.jpg" target="_blank" rel="noreferrer">http://img.smyhvae.com/2015-10-01-cnblogs_html_20150219214912_11994.jpg</a></p><h2 id="我的公众号" tabindex="-1">我的公众号 <a class="header-anchor" href="#我的公众号" aria-label="Permalink to &quot;我的公众号&quot;">​</a></h2><p>想学习<strong>更多技能</strong>？不妨关注我的微信公众号：<strong>千古壹号</strong>（id：<code>qianguyihao</code>）。</p><p>扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：</p><p><img src="https://img.smyhvae.com/20200102.png" alt=""></p>`,81))])}const E=a(h,[["render",r]]);export{u as __pageData,E as default};
