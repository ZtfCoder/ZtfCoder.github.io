import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1baa841b.js";const u=JSON.parse('{"title":"docker高级(待更新)","description":"","frontmatter":{"title":"docker高级(待更新)","tags":["容器"],"categories":"docker","abbrlink":"d80a603a"},"headers":[],"relativePath":"src/main/docker/docker高级.md","filePath":"src/main/docker/docker高级.md","lastUpdated":1713749248000}'),p={name:"src/main/docker/docker高级.md"},o=l(`<h1 id="数据卷" tabindex="-1">数据卷 <a class="header-anchor" href="#数据卷" aria-label="Permalink to &quot;数据卷&quot;">​</a></h1><p>docker 是可以把应用和环境打包成一个镜像,的软件,同时,数据也会默认存储到镜像中</p><p>这样很不好,数据和环境没有隔离开,如果我们把容器删除掉,那么数据也删除掉了</p><p>因此,我们需要一种技术,将 docker 容器和我们的电脑联通,让双方可以互相访问到对象的数据,因此,数据卷技术产生了</p><p>类似挂载,可以把 容器内的文件或者目录挂载到我们的电脑上</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/ceshi:/home</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">centos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/bash</span></span>
<span class="line"><span style="color:#E1E4E8;">				   </span><span style="color:#6A737D;"># 主机目录   :容器目录  容器名称 /bin/bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/ceshi:/home</span><span style="color:#24292E;"> </span><span style="color:#032F62;">centos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/bash</span></span>
<span class="line"><span style="color:#24292E;">				   </span><span style="color:#6A737D;"># 主机目录   :容器目录  容器名称 /bin/bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>挂载后使用 在主机输入命令</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inspect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">容器id</span></span>
<span class="line"><span style="color:#B392F0;">如果看到</span></span>
<span class="line"><span style="color:#B392F0;">&quot;Mounts&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">&quot;Type&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bind&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">&quot;Source&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/home/ceshi&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">&quot;Destination&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/home&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">&quot;Mode&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">&quot;RW&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#9ECBFF;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">&quot;Propagation&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;rprivate&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#6A737D;"># 说明挂载成功</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inspect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">容器id</span></span>
<span class="line"><span style="color:#6F42C1;">如果看到</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;Mounts&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">&quot;Type&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bind&quot;,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">&quot;Source&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/home/ceshi&quot;,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">&quot;Destination&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/home&quot;,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">&quot;Mode&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">&quot;RW&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#032F62;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">&quot;Propagation&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;rprivate&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#6A737D;"># 说明挂载成功</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="安装-mysql" tabindex="-1">安装 mysql <a class="header-anchor" href="#安装-mysql" aria-label="Permalink to &quot;安装 mysql&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3310</span><span style="color:#9ECBFF;">:3306</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/home/mysql/conf:/etc/mysql/conf.d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/mysql/data:/var/lib/mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">MYSQL_ROOT_PASSWORD=root</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql01</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql:5.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 说明</span></span>
<span class="line"><span style="color:#6A737D;"># -d 后台运行</span></span>
<span class="line"><span style="color:#6A737D;"># -p 主机端口和容器内部端口的映射</span></span>
<span class="line"><span style="color:#6A737D;"># -v 外部挂载数据卷 文件映射 可以映射多个,写多个-v就行</span></span>
<span class="line"><span style="color:#6A737D;"># -e 进行配置 MYSQL_ROOT_PASSWORD=root 设置密码为root</span></span>
<span class="line"><span style="color:#6A737D;"># --name 镜像名称</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">使用了挂载之后,这样,哪怕删除了docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">镜像后,这个数据文件也会存在,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3310</span><span style="color:#032F62;">:3306</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/home/mysql/conf:/etc/mysql/conf.d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/mysql/data:/var/lib/mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MYSQL_ROOT_PASSWORD=root</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql01</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql:5.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 说明</span></span>
<span class="line"><span style="color:#6A737D;"># -d 后台运行</span></span>
<span class="line"><span style="color:#6A737D;"># -p 主机端口和容器内部端口的映射</span></span>
<span class="line"><span style="color:#6A737D;"># -v 外部挂载数据卷 文件映射 可以映射多个,写多个-v就行</span></span>
<span class="line"><span style="color:#6A737D;"># -e 进行配置 MYSQL_ROOT_PASSWORD=root 设置密码为root</span></span>
<span class="line"><span style="color:#6A737D;"># --name 镜像名称</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">使用了挂载之后,这样,哪怕删除了docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">镜像后,这个数据文件也会存在,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="文件复制" tabindex="-1">文件复制 <a class="header-anchor" href="#文件复制" aria-label="Permalink to &quot;文件复制&quot;">​</a></h2><p>从宿主 将文件移到到容器中</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">从宿主机复制到容器：docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">宿主机本地路径</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">容器名字/ID：容器路径</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/123.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mycentos:/home/</span></span>
<span class="line"><span style="color:#B392F0;">从容器复制到宿主机：docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">容器名字/ID：容器路径</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">宿主机本地路径</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mycentos:/home/456.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root</span></span>
<span class="line"><span style="color:#B392F0;">宿主机文件夹挂载到容器里：docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-id</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">宿主机路径:容器路径</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">镜像ID</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-id</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/yjf/:/home</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">centos:7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">从宿主机复制到容器：docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">宿主机本地路径</span><span style="color:#24292E;"> </span><span style="color:#032F62;">容器名字/ID：容器路径</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/123.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mycentos:/home/</span></span>
<span class="line"><span style="color:#6F42C1;">从容器复制到宿主机：docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">容器名字/ID：容器路径</span><span style="color:#24292E;"> </span><span style="color:#032F62;">宿主机本地路径</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mycentos:/home/456.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root</span></span>
<span class="line"><span style="color:#6F42C1;">宿主机文件夹挂载到容器里：docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-id</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">宿主机路径:容器路径</span><span style="color:#24292E;"> </span><span style="color:#032F62;">镜像ID</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-id</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/yjf/:/home</span><span style="color:#24292E;"> </span><span style="color:#032F62;">centos:7</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="具名挂载和匿名挂载" tabindex="-1">具名挂载和匿名挂载 <a class="header-anchor" href="#具名挂载和匿名挂载" aria-label="Permalink to &quot;具名挂载和匿名挂载&quot;">​</a></h2><p>(需填坑)</p><h1 id="dockerfile" tabindex="-1">DockerFile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;DockerFile&quot;">​</a></h1><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">定义父镜像：FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">centos:7</span></span>
<span class="line"><span style="color:#B392F0;">定义作者信息：MAINTAINER</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">yjf</span></span>
<span class="line"><span style="color:#B392F0;">执行安装vim命令：</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">RUN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vim</span></span>
<span class="line"><span style="color:#B392F0;">定义默认的工作目录：WORKDIR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr</span></span>
<span class="line"><span style="color:#B392F0;">定义容器启动执行的命令：CMD</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/bash</span></span>
<span class="line"><span style="color:#B392F0;">通过dockerfile构建镜像：docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dockerfile文件路径</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">镜像名称:版本</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 注意 build 最后一定要有个点</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">定义父镜像：FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">centos:7</span></span>
<span class="line"><span style="color:#6F42C1;">定义作者信息：MAINTAINER</span><span style="color:#24292E;">  </span><span style="color:#032F62;">yjf</span></span>
<span class="line"><span style="color:#6F42C1;">执行安装vim命令：</span><span style="color:#24292E;"> </span><span style="color:#032F62;">RUN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span></span>
<span class="line"><span style="color:#6F42C1;">定义默认的工作目录：WORKDIR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr</span></span>
<span class="line"><span style="color:#6F42C1;">定义容器启动执行的命令：CMD</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/bash</span></span>
<span class="line"><span style="color:#6F42C1;">通过dockerfile构建镜像：docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dockerfile文件路径</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">镜像名称:版本</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 注意 build 最后一定要有个点</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="docker-网络" tabindex="-1">Docker 网络 <a class="header-anchor" href="#docker-网络" aria-label="Permalink to &quot;Docker 网络&quot;">​</a></h1><p>(需填坑)</p><h1 id="私有仓库" tabindex="-1">私有仓库 <a class="header-anchor" href="#私有仓库" aria-label="Permalink to &quot;私有仓库&quot;">​</a></h1><h2 id="一、搭建私有仓库" tabindex="-1">一、搭建私有仓库 <a class="header-anchor" href="#一、搭建私有仓库" aria-label="Permalink to &quot;一、搭建私有仓库&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">1、拉取私有仓库镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span></span>
<span class="line"><span style="color:#B392F0;">2、启动私有仓库容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-id</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name=registry</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5000</span><span style="color:#9ECBFF;">:5000</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span></span>
<span class="line"><span style="color:#B392F0;">3、打开浏览器</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">输入地址:http://私有仓库服务器ip:5000/v2/_catalog，看到{&quot;repositories&quot;:[]}</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">表示私有仓库</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">搭建成功</span></span>
<span class="line"><span style="color:#B392F0;">例如：</span></span>
<span class="line"><span style="color:#B392F0;">http://192.168.65.133:5000/v2/_catalog</span></span>
<span class="line"><span style="color:#B392F0;">4、修改daemon.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">此步用于让</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">信任私有仓库地</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/docker/daemon.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">&quot;insecure-registries&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">&quot;私有仓库服务器ip:5000&quot;</span><span style="color:#B392F0;">]}</span></span>
<span class="line"><span style="color:#B392F0;">我这里的配置是</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;registry-mirrors&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;https://你自己阿里云账号生成的id.mirror.aliyuncs.com&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;insecure-registries&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">&quot;192.168.65.133:5000&quot;</span><span style="color:#B392F0;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">5、重启docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">1、拉取私有仓库镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span></span>
<span class="line"><span style="color:#6F42C1;">2、启动私有仓库容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-id</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name=registry</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5000</span><span style="color:#032F62;">:5000</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span></span>
<span class="line"><span style="color:#6F42C1;">3、打开浏览器</span><span style="color:#24292E;"> </span><span style="color:#032F62;">输入地址:http://私有仓库服务器ip:5000/v2/_catalog，看到{&quot;repositories&quot;:[]}</span><span style="color:#24292E;"> </span><span style="color:#032F62;">表示私有仓库</span><span style="color:#24292E;"> </span><span style="color:#032F62;">搭建成功</span></span>
<span class="line"><span style="color:#6F42C1;">例如：</span></span>
<span class="line"><span style="color:#6F42C1;">http://192.168.65.133:5000/v2/_catalog</span></span>
<span class="line"><span style="color:#6F42C1;">4、修改daemon.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">此步用于让</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">信任私有仓库地</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/docker/daemon.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;"> </span><span style="color:#24292E;"> </span><span style="color:#032F62;"> </span></span>
<span class="line"><span style="color:#24292E;">{</span><span style="color:#6F42C1;">&quot;insecure-registries&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">&quot;私有仓库服务器ip:5000&quot;</span><span style="color:#6F42C1;">]}</span></span>
<span class="line"><span style="color:#6F42C1;">我这里的配置是</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;registry-mirrors&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;https://你自己阿里云账号生成的id.mirror.aliyuncs.com&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;insecure-registries&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">&quot;192.168.65.133:5000&quot;</span><span style="color:#6F42C1;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">5、重启docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="二、将镜像上传到私有仓库" tabindex="-1">二、将镜像上传到私有仓库 <a class="header-anchor" href="#二、将镜像上传到私有仓库" aria-label="Permalink to &quot;二、将镜像上传到私有仓库&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.给需要上传的镜像重命名（打标签，注意，标签名称要带上私有仓库的ip地址和端口号，因为默认情况下上传到的是中央仓库）</span></span>
<span class="line"><span style="color:#e1e4e8;">例如</span></span>
<span class="line"><span style="color:#e1e4e8;">docker tag centos:7 私有仓库服务器IP:5000/centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;">2.上传重命名后的镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker push 私有仓库服务器IP:5000/centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;">3.上传之后查看是否成功</span></span>
<span class="line"><span style="color:#e1e4e8;">http://私服的ip:5000/v2/_catalog</span></span>
<span class="line"><span style="color:#e1e4e8;">4.查看镜像的tag</span></span>
<span class="line"><span style="color:#e1e4e8;">http://私服的ip:5000/v2/centos/tags/list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.给需要上传的镜像重命名（打标签，注意，标签名称要带上私有仓库的ip地址和端口号，因为默认情况下上传到的是中央仓库）</span></span>
<span class="line"><span style="color:#24292e;">例如</span></span>
<span class="line"><span style="color:#24292e;">docker tag centos:7 私有仓库服务器IP:5000/centos:7</span></span>
<span class="line"><span style="color:#24292e;">2.上传重命名后的镜像</span></span>
<span class="line"><span style="color:#24292e;">docker push 私有仓库服务器IP:5000/centos:7</span></span>
<span class="line"><span style="color:#24292e;">3.上传之后查看是否成功</span></span>
<span class="line"><span style="color:#24292e;">http://私服的ip:5000/v2/_catalog</span></span>
<span class="line"><span style="color:#24292e;">4.查看镜像的tag</span></span>
<span class="line"><span style="color:#24292e;">http://私服的ip:5000/v2/centos/tags/list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="三、从私有仓库拉取镜像" tabindex="-1">三、从私有仓库拉取镜像 <a class="header-anchor" href="#三、从私有仓库拉取镜像" aria-label="Permalink to &quot;三、从私有仓库拉取镜像&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker pull 私服的ip:5000/centos:7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker pull 私服的ip:5000/centos:7</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,26),e=[o];function c(r,t,y,i,E,F){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};
