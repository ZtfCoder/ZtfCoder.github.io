import{_ as s,a,c as n,b as e}from"./app.e54c6b02.js";const g=JSON.parse('{"title":"git \u4F7F\u7528(\u5F85\u66F4\u65B0)","description":"","frontmatter":{"title":"git \u4F7F\u7528(\u5F85\u66F4\u65B0)","tags":["\u7248\u672C\u63A7\u5236","git"],"categories":"git","abbrlink":"703b0fcc"},"headers":[{"level":2,"title":"1.\u521D\u59CB\u5316git\u4ED3\u5E93","slug":"_1-\u521D\u59CB\u5316git\u4ED3\u5E93","link":"#_1-\u521D\u59CB\u5316git\u4ED3\u5E93","children":[]},{"level":2,"title":"2.\u67E5\u770B\u5F53\u524Dgit\u4ED3\u5E93\u72B6\u51B5","slug":"_2-\u67E5\u770B\u5F53\u524Dgit\u4ED3\u5E93\u72B6\u51B5","link":"#_2-\u67E5\u770B\u5F53\u524Dgit\u4ED3\u5E93\u72B6\u51B5","children":[]},{"level":2,"title":"3.\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A","slug":"_3-\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A","link":"#_3-\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A","children":[]},{"level":2,"title":"4.\u67E5\u770Bgit\u4FE1\u606F","slug":"_4-\u67E5\u770Bgit\u4FE1\u606F","link":"#_4-\u67E5\u770Bgit\u4FE1\u606F","children":[]},{"level":2,"title":"5.\u63D0\u4EA4\u5230\u4ED3\u5E93","slug":"_5-\u63D0\u4EA4\u5230\u4ED3\u5E93","link":"#_5-\u63D0\u4EA4\u5230\u4ED3\u5E93","children":[]},{"level":2,"title":"6\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u6587\u4EF6","slug":"_6\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u6587\u4EF6","link":"#_6\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u6587\u4EF6","children":[]},{"level":2,"title":"7.\u67E5\u770B\u5386\u53F2\u64CD\u4F5C","slug":"_7-\u67E5\u770B\u5386\u53F2\u64CD\u4F5C","link":"#_7-\u67E5\u770B\u5386\u53F2\u64CD\u4F5C","children":[]},{"level":2,"title":"8.\u56DE\u9000\u7248\u672C","slug":"_8-\u56DE\u9000\u7248\u672C","link":"#_8-\u56DE\u9000\u7248\u672C","children":[]},{"level":2,"title":"9.\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93","slug":"_9-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93","link":"#_9-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93","children":[]},{"level":2,"title":"10.\u67E5\u770B\u5206\u652F","slug":"_10-\u67E5\u770B\u5206\u652F","link":"#_10-\u67E5\u770B\u5206\u652F","children":[]},{"level":2,"title":"11.\u521B\u5EFA\u5206\u652F","slug":"_11-\u521B\u5EFA\u5206\u652F","link":"#_11-\u521B\u5EFA\u5206\u652F","children":[]},{"level":2,"title":"12.\u5207\u6362\u5206\u652F","slug":"_12-\u5207\u6362\u5206\u652F","link":"#_12-\u5207\u6362\u5206\u652F","children":[]},{"level":2,"title":"13.\u5408\u5E76\u5206\u652F","slug":"_13-\u5408\u5E76\u5206\u652F","link":"#_13-\u5408\u5E76\u5206\u652F","children":[]},{"level":2,"title":"14.\u5220\u9664\u5206\u652F","slug":"_14-\u5220\u9664\u5206\u652F","link":"#_14-\u5220\u9664\u5206\u652F","children":[]}],"relativePath":"main/git/git.md","lastUpdated":1662382865000}'),l={name:"main/git/git.md"},p=e(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><p>git,\u7248\u672C\u63A7\u5236,</p><p>\u5206\u4E3A\u5DE5\u4F5C\u533A,\u6682\u5B58\u533A,\u4ED3\u5E93</p><p>\u5982\u679C\u6587\u4EF6\u6CA1\u6709\u88ABgit\u8FDB\u884C\u7BA1\u7406,\u662F\u4E0D\u80FD\u56DE\u9000\u7248\u672C\u7684</p><h1 id="\u64CD\u4F5C" tabindex="-1">\u64CD\u4F5C <a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="_1-\u521D\u59CB\u5316git\u4ED3\u5E93" tabindex="-1">1.\u521D\u59CB\u5316git\u4ED3\u5E93 <a class="header-anchor" href="#_1-\u521D\u59CB\u5316git\u4ED3\u5E93" aria-hidden="true">#</a></h2><p>\u5728\u5F53\u524D\u6587\u4EF6\u5939\u4E0B\u6253\u5F00git bash here ,\u8F93\u5165\u547D\u4EE4,\u521D\u59CB\u5316\u4ED3\u5E93</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git init </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u67E5\u770B\u5F53\u524Dgit\u4ED3\u5E93\u72B6\u51B5" tabindex="-1">2.\u67E5\u770B\u5F53\u524Dgit\u4ED3\u5E93\u72B6\u51B5 <a class="header-anchor" href="#_2-\u67E5\u770B\u5F53\u524Dgit\u4ED3\u5E93\u72B6\u51B5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_3-\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A" tabindex="-1">3.\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A <a class="header-anchor" href="#_3-\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u5B58\u533A" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git add \u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6DFB\u52A0\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">git add --all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git add ./  \u4EE3\u8868\u5F53\u524D\u76EE\u5F55  *\u662F\u6240\u6709\u6587\u4EF6,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-\u67E5\u770Bgit\u4FE1\u606F" tabindex="-1">4.\u67E5\u770Bgit\u4FE1\u606F <a class="header-anchor" href="#_4-\u67E5\u770Bgit\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_5-\u63D0\u4EA4\u5230\u4ED3\u5E93" tabindex="-1">5.\u63D0\u4EA4\u5230\u4ED3\u5E93 <a class="header-anchor" href="#_5-\u63D0\u4EA4\u5230\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git commit \u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_6\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u6587\u4EF6" tabindex="-1">6\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u6587\u4EF6 <a class="header-anchor" href="#_6\u4ECE\u6682\u5B58\u533A\u64A4\u9500\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git rm --cached \u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_7-\u67E5\u770B\u5386\u53F2\u64CD\u4F5C" tabindex="-1">7.\u67E5\u770B\u5386\u53F2\u64CD\u4F5C <a class="header-anchor" href="#_7-\u67E5\u770B\u5386\u53F2\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_8-\u56DE\u9000\u7248\u672C" tabindex="-1">8.\u56DE\u9000\u7248\u672C <a class="header-anchor" href="#_8-\u56DE\u9000\u7248\u672C" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reset --hard \u7248\u672C\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_9-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1">9.\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93 <a class="header-anchor" href="#_9-\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://gitee.com/zhanggob/test.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u63A8\u9001\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u62C9\u53D6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_10-\u67E5\u770B\u5206\u652F" tabindex="-1">10.\u67E5\u770B\u5206\u652F <a class="header-anchor" href="#_10-\u67E5\u770B\u5206\u652F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git bransh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_11-\u521B\u5EFA\u5206\u652F" tabindex="-1">11.\u521B\u5EFA\u5206\u652F <a class="header-anchor" href="#_11-\u521B\u5EFA\u5206\u652F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git checkout -b \u5206\u652F\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_12-\u5207\u6362\u5206\u652F" tabindex="-1">12.\u5207\u6362\u5206\u652F <a class="header-anchor" href="#_12-\u5207\u6362\u5206\u652F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git checkout  \u5206\u652F\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_13-\u5408\u5E76\u5206\u652F" tabindex="-1">13.\u5408\u5E76\u5206\u652F <a class="header-anchor" href="#_13-\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u9996\u5148\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge \u5206\u652F\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_14-\u5220\u9664\u5206\u652F" tabindex="-1">14.\u5220\u9664\u5206\u652F <a class="header-anchor" href="#_14-\u5220\u9664\u5206\u652F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git branch -d \u5206\u652F\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h1 id="\u6CE8\u610F-\u4E8B\u9879" tabindex="-1">\u6CE8\u610F \u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F-\u4E8B\u9879" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git log --oneline --decorate --graph --all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,36),i=[p];function r(c,t,d,o,u,b){return a(),n("div",null,i)}const m=s(l,[["render",r]]);export{g as __pageData,m as default};
