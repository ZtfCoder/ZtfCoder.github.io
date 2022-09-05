import{_ as s,a,c as n,b as l}from"./app.9f14e15c.js";const h=JSON.parse('{"title":"linux\u9632\u706B\u5899","description":"","frontmatter":{"title":"linux\u9632\u706B\u5899","tags":["linux"],"categories":"linux","abbrlink":"2f013e1f"},"headers":[],"relativePath":"main/Linux/\u9632\u706B\u5899.md","lastUpdated":1662374936000}'),e={name:"main/Linux/\u9632\u706B\u5899.md"},p=l(`<h1 id="\u5173\u95ED\u9632\u706B\u5899" tabindex="-1">\u5173\u95ED\u9632\u706B\u5899 <a class="header-anchor" href="#\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a></h1><p>\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost /</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># firewall-cmd --state</span></span>
<span class="line"></span></code></pre></div><p>\u4E34\u65F6\u5173\u95ED\u9632\u706B\u5899 \u91CD\u542F\u540E\u5931\u6548</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl stop firewalld.service </span></span>
<span class="line"></span></code></pre></div><p>\u6C38\u4E45\u5173\u95ED\u9632\u706B\u5899</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl disable firewalld.service</span></span>
<span class="line"></span></code></pre></div><p>\u5F00\u542F\u9632\u706B\u5899</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl start firewalld </span></span>
<span class="line"></span></code></pre></div><p>\u5F00\u653E\u7AEF\u53E3\u53F7</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5BF9\u5916\u5F00\u653E\u7684\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -anp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u7AEF\u53E3\u662F\u5426\u5DF2\u542F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --query-port=\u7AEF\u53E3/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5F00\u653E\u6307\u5B9A\u7684\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --add-port=\u7AEF\u53E3/tcp --permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u79FB\u51FA\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --remove-port=123/tcp</span></span>
<span class="line"></span></code></pre></div>`,11),c=[p];function t(o,r,i,d,_,u){return a(),n("div",null,c)}const m=s(e,[["render",t]]);export{h as __pageData,m as default};
