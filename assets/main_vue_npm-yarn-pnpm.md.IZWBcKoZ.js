import{_ as s,c as a,o as n,a4 as i}from"./chunks/framework.4sxKuair.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"main/vue/npm-yarn-pnpm.md","filePath":"main/vue/npm-yarn-pnpm.md","lastUpdated":1713751059000}'),p={name:"main/vue/npm-yarn-pnpm.md"},e=i(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>npm ,yarn与pnpm</p><p>这几个都是js的包管理工具,功能类似于 Java的 maven 工具,用于下载第三方依赖,也可以自己上传到npm 网站上去</p><h3 id="安装nodejs" tabindex="-1">安装nodejs <a class="header-anchor" href="#安装nodejs" aria-label="Permalink to &quot;安装nodejs&quot;">​</a></h3><p>使用npm 命令,首先需要安装node js <a href="http://nodejs.cn/" target="_blank" rel="noreferrer">Node.js 中文网 (nodejs.cn)</a></p><p>可以选择稳点版本,这样不至于有些库不兼容问题,安装步骤,没什么讲究的,一直下一步,下一步即可</p><p>安装完成后,可以打开cmd 命令行 输入</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>就可以进入node 的命令行模式了</p><p>安装完nodejs 就可以使用npm 下载 第三方包了,例如常用的</p><p><code>dayjs</code> <code>vue</code> <code>axios</code> 等库</p><p>一般常用的命令有</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#全局安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx库名称</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#全局安装后,可以在所有地方使用 该库的命令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#普通安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx库名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#只会在当前项目目录下安装该库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装当前项目下的全部依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx库名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>使用npm 下载可能会很慢,但是最好不要用淘宝镜像,会出现很多奇怪的现象,如果可能请科学上网</p><h3 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h3><p>yarn 又是什么呢</p><p>yarn 也是一款包管理工具,功能和npm 一样,但是比npm 更加强大</p><p>,除开缓存功能外,我个人觉得使用yarn 安装依赖比用npm 更快</p><h4 id="安装yarn" tabindex="-1">安装yarn <a class="header-anchor" href="#安装yarn" aria-label="Permalink to &quot;安装yarn&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装包</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx库名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装到devDependencies 也就是开发环境,打包的时候不会打入文件中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx库名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移除包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx库名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>yarn 解决了很多 npm 的问题,例如,版本问题,使用yarn 会生成yarn.lock 的文件,这个文件记录了安装的依赖版本号,</p><p>如果是npm 的话,则每次安装依赖都会是最新版本,如果,没有锁定版本功能,那么以后,使用的到的库更新了,那么可能会出现兼容性问题,因此,yarn 很好的解决了这个问题</p><p>还有缓存,yarn 会去帮我们缓存已经下载过的库,</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询缓存列表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清除缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>除此 npm 是按照队列依次安装每个 package，当前一个 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务。</p><h3 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h3><p>全称 Performance NPM，即高性能的 npm。相比较于 yarn，pnpm 在性能上又有了极大的提升。</p><p>pnpm 的出现解决了 npm、yarn 重复文件过多、复用率低等问题。我们知道，不管是 npm 还是 yarn，它们的安装方法都是将项目依赖包的原封不动的从服务器上下载到本地，写入到 node_modules 文件夹，而每个 package 又都有自己的 node_modules，所以当一个 package 在不同的依赖项中需要时，它会被多次复制粘贴并生成多份文件，形成一个很深的依赖树。</p><p>另外，如果同一个 package 在我们本地的多个项目中使用，每次安装的时候它都会被重新下载一次。比如我们本地有 100 个项目，都依赖 lodash，那么使用 npm 或 yarn 进行安装， lodash 很可能就被下载、安装了 100 次，也就是说我们的磁盘中有 100 个地方写入了 lodash 的代码，这种方式是极其低效的。</p><p>但目前为止,pnpm 我使用的比较少,目前为止还是觉得yarn 更加使用,pnpm 相较于npm yarn 都太暴力了,所以还是推荐使用yarn 更加合适</p>`,32),l=[e];function r(h,t,d,k,c,o){return n(),a("div",null,l)}const y=s(p,[["render",r]]);export{b as __pageData,y as default};
