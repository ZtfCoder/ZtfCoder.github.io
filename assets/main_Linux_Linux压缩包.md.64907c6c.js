import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1baa841b.js";const m=JSON.parse('{"title":"linux压缩包","description":"","frontmatter":{"title":"linux压缩包","tags":["linux"],"categories":"linux","abbrlink":"a2a4f4f9"},"headers":[],"relativePath":"main/Linux/Linux压缩包.md","filePath":"main/Linux/Linux压缩包.md","lastUpdated":1699428302000}'),p={name:"main/Linux/Linux压缩包.md"},l=e(`<h2 id="下载安装zip" tabindex="-1">下载安装zip <a class="header-anchor" href="#下载安装zip" aria-label="Permalink to &quot;下载安装zip&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#在命令行输入</span></span>
<span class="line"><span style="color:#e1e4e8;">yum install -y unzip zip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#在命令行输入</span></span>
<span class="line"><span style="color:#24292e;">yum install -y unzip zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="zip压缩" tabindex="-1">zip压缩 <a class="header-anchor" href="#zip压缩" aria-label="Permalink to &quot;zip压缩&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">格式</span></span>
<span class="line"><span style="color:#e1e4e8;">zip 文件名.zip 压缩文件路径</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">参数</span></span>
<span class="line"><span style="color:#e1e4e8;">-r 递归打包包含子目录的全部内容</span></span>
<span class="line"><span style="color:#e1e4e8;">-q 不向屏幕显示输出信息</span></span>
<span class="line"><span style="color:#e1e4e8;">-o 表示输出文件，需在其后紧跟打包输出文件名（意义不明）</span></span>
<span class="line"><span style="color:#e1e4e8;">-9 设置压缩级别，1-9 （1表示最快压缩但体积大，9表示体积最小但耗时最久）</span></span>
<span class="line"><span style="color:#e1e4e8;">-x 是排除创建的zip存在，如果不加且文件存在，则会被打包进这个已存在的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">-e 创建加密文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">格式</span></span>
<span class="line"><span style="color:#24292e;">zip 文件名.zip 压缩文件路径</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">参数</span></span>
<span class="line"><span style="color:#24292e;">-r 递归打包包含子目录的全部内容</span></span>
<span class="line"><span style="color:#24292e;">-q 不向屏幕显示输出信息</span></span>
<span class="line"><span style="color:#24292e;">-o 表示输出文件，需在其后紧跟打包输出文件名（意义不明）</span></span>
<span class="line"><span style="color:#24292e;">-9 设置压缩级别，1-9 （1表示最快压缩但体积大，9表示体积最小但耗时最久）</span></span>
<span class="line"><span style="color:#24292e;">-x 是排除创建的zip存在，如果不加且文件存在，则会被打包进这个已存在的文件</span></span>
<span class="line"><span style="color:#24292e;">-e 创建加密文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="zip解压" tabindex="-1">zip解压 <a class="header-anchor" href="#zip解压" aria-label="Permalink to &quot;zip解压&quot;">​</a></h3><p>使用unzip解压文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">格式</span></span>
<span class="line"><span style="color:#e1e4e8;">unzip 文件名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">参数</span></span>
<span class="line"><span style="color:#e1e4e8;">-q 不向屏幕显示输出信息</span></span>
<span class="line"><span style="color:#e1e4e8;">-d 解压到指定文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">-o 指定解压后的字符编码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">格式</span></span>
<span class="line"><span style="color:#24292e;">unzip 文件名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">参数</span></span>
<span class="line"><span style="color:#24292e;">-q 不向屏幕显示输出信息</span></span>
<span class="line"><span style="color:#24292e;">-d 解压到指定文件夹</span></span>
<span class="line"><span style="color:#24292e;">-o 指定解压后的字符编码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="tar压缩" tabindex="-1">tar压缩 <a class="header-anchor" href="#tar压缩" aria-label="Permalink to &quot;tar压缩&quot;">​</a></h2><p>常用格式为</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">tar -p -cf 文件名.tar 文件路径</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">参数</span></span>
<span class="line"><span style="color:#e1e4e8;">-p 保留绝对路径符</span></span>
<span class="line"><span style="color:#e1e4e8;">-c 表示创建一个tar包文件</span></span>
<span class="line"><span style="color:#e1e4e8;">-f 用于 创建指定的文件名   #注意 -f参数后必须跟上文件名</span></span>
<span class="line"><span style="color:#e1e4e8;">-v 参数以可视化的方式输出打包文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tar -p -cf 文件名.tar 文件路径</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">参数</span></span>
<span class="line"><span style="color:#24292e;">-p 保留绝对路径符</span></span>
<span class="line"><span style="color:#24292e;">-c 表示创建一个tar包文件</span></span>
<span class="line"><span style="color:#24292e;">-f 用于 创建指定的文件名   #注意 -f参数后必须跟上文件名</span></span>
<span class="line"><span style="color:#24292e;">-v 参数以可视化的方式输出打包文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="tar解压" tabindex="-1">tar解压 <a class="header-anchor" href="#tar解压" aria-label="Permalink to &quot;tar解压&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">tar -x 文件名 -c 指定路径</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">参数</span></span>
<span class="line"><span style="color:#e1e4e8;">-x 表示解压</span></span>
<span class="line"><span style="color:#e1e4e8;">-c 表示解压到指定路径</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">使用tar 压缩到其他格式需要添加参数</span></span>
<span class="line"><span style="color:#e1e4e8;">tar.gz  -z</span></span>
<span class="line"><span style="color:#e1e4e8;">tar.xz  -J</span></span>
<span class="line"><span style="color:#e1e4e8;">tar.bz2 -j</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tar -x 文件名 -c 指定路径</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">参数</span></span>
<span class="line"><span style="color:#24292e;">-x 表示解压</span></span>
<span class="line"><span style="color:#24292e;">-c 表示解压到指定路径</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">使用tar 压缩到其他格式需要添加参数</span></span>
<span class="line"><span style="color:#24292e;">tar.gz  -z</span></span>
<span class="line"><span style="color:#24292e;">tar.xz  -J</span></span>
<span class="line"><span style="color:#24292e;">tar.bz2 -j</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,12),c=[l];function r(i,o,t,d,b,u){return n(),a("div",null,c)}const h=s(p,[["render",r]]);export{m as __pageData,h as default};
