import{_ as s,a,c as n,b as l}from"./app.9f14e15c.js";const D=JSON.parse('{"title":"linux\u538B\u7F29\u5305","description":"","frontmatter":{"title":"linux\u538B\u7F29\u5305","tags":["linux"],"categories":"linux","abbrlink":"a2a4f4f9"},"headers":[{"level":2,"title":"\u4E0B\u8F7D\u5B89\u88C5zip","slug":"\u4E0B\u8F7D\u5B89\u88C5zip","link":"#\u4E0B\u8F7D\u5B89\u88C5zip","children":[{"level":3,"title":"zip\u538B\u7F29","slug":"zip\u538B\u7F29","link":"#zip\u538B\u7F29","children":[]},{"level":3,"title":"zip\u89E3\u538B","slug":"zip\u89E3\u538B","link":"#zip\u89E3\u538B","children":[]}]},{"level":2,"title":"tar\u538B\u7F29","slug":"tar\u538B\u7F29","link":"#tar\u538B\u7F29","children":[{"level":3,"title":"tar\u89E3\u538B","slug":"tar\u89E3\u538B","link":"#tar\u89E3\u538B","children":[]}]}],"relativePath":"main/Linux/Linux\u538B\u7F29\u5305.md","lastUpdated":1662374936000}'),p={name:"main/Linux/Linux\u538B\u7F29\u5305.md"},e=l(`<h2 id="\u4E0B\u8F7D\u5B89\u88C5zip" tabindex="-1">\u4E0B\u8F7D\u5B89\u88C5zip <a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5zip" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u5728\u547D\u4EE4\u884C\u8F93\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y unzip zip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="zip\u538B\u7F29" tabindex="-1">zip\u538B\u7F29 <a class="header-anchor" href="#zip\u538B\u7F29" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">zip \u6587\u4EF6\u540D.zip \u538B\u7F29\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">-r \u9012\u5F52\u6253\u5305\u5305\u542B\u5B50\u76EE\u5F55\u7684\u5168\u90E8\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">-q \u4E0D\u5411\u5C4F\u5E55\u663E\u793A\u8F93\u51FA\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">-o \u8868\u793A\u8F93\u51FA\u6587\u4EF6\uFF0C\u9700\u5728\u5176\u540E\u7D27\u8DDF\u6253\u5305\u8F93\u51FA\u6587\u4EF6\u540D\uFF08\u610F\u4E49\u4E0D\u660E\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">-9 \u8BBE\u7F6E\u538B\u7F29\u7EA7\u522B\uFF0C1-9 \uFF081\u8868\u793A\u6700\u5FEB\u538B\u7F29\u4F46\u4F53\u79EF\u5927\uFF0C9\u8868\u793A\u4F53\u79EF\u6700\u5C0F\u4F46\u8017\u65F6\u6700\u4E45\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">-x \u662F\u6392\u9664\u521B\u5EFA\u7684zip\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u52A0\u4E14\u6587\u4EF6\u5B58\u5728\uFF0C\u5219\u4F1A\u88AB\u6253\u5305\u8FDB\u8FD9\u4E2A\u5DF2\u5B58\u5728\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">-e \u521B\u5EFA\u52A0\u5BC6\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="zip\u89E3\u538B" tabindex="-1">zip\u89E3\u538B <a class="header-anchor" href="#zip\u89E3\u538B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528unzip\u89E3\u538B\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip \u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">-q \u4E0D\u5411\u5C4F\u5E55\u663E\u793A\u8F93\u51FA\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">-d \u89E3\u538B\u5230\u6307\u5B9A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">-o \u6307\u5B9A\u89E3\u538B\u540E\u7684\u5B57\u7B26\u7F16\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="tar\u538B\u7F29" tabindex="-1">tar\u538B\u7F29 <a class="header-anchor" href="#tar\u538B\u7F29" aria-hidden="true">#</a></h2><p>\u5E38\u7528\u683C\u5F0F\u4E3A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tar -p -cf \u6587\u4EF6\u540D.tar \u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">-p \u4FDD\u7559\u7EDD\u5BF9\u8DEF\u5F84\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">-c \u8868\u793A\u521B\u5EFA\u4E00\u4E2Atar\u5305\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">-f \u7528\u4E8E \u521B\u5EFA\u6307\u5B9A\u7684\u6587\u4EF6\u540D   #\u6CE8\u610F -f\u53C2\u6570\u540E\u5FC5\u987B\u8DDF\u4E0A\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">-v \u53C2\u6570\u4EE5\u53EF\u89C6\u5316\u7684\u65B9\u5F0F\u8F93\u51FA\u6253\u5305\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="tar\u89E3\u538B" tabindex="-1">tar\u89E3\u538B <a class="header-anchor" href="#tar\u89E3\u538B" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tar -x \u6587\u4EF6\u540D -c \u6307\u5B9A\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">-x \u8868\u793A\u89E3\u538B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c \u8868\u793A\u89E3\u538B\u5230\u6307\u5B9A\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F7F\u7528tar \u538B\u7F29\u5230\u5176\u4ED6\u683C\u5F0F\u9700\u8981\u6DFB\u52A0\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">tar.gz  -z</span></span>
<span class="line"><span style="color:#A6ACCD;">tar.xz  -J</span></span>
<span class="line"><span style="color:#A6ACCD;">tar.bz2 -j</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),c=[e];function t(i,o,r,A,C,d){return a(),n("div",null,c)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
