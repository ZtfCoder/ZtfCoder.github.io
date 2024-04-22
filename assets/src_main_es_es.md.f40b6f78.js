import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1baa841b.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/main/es/es.md","filePath":"src/main/es/es.md","lastUpdated":1713749248000}'),p={name:"src/main/es/es.md"},o=l(`<p>es 是一款非常优秀的搜素引擎,有着分词,和聚合 的功能</p><p>简单的说就是,把你想要搜索的东西,拆开来;进行匹配,非常只能,通过某种算法</p><p>现今数据库的瓶颈就是无法支持分词功能,以及,索引失效等效率问题</p><p>es 都完美的解决了这些问题,如今要做搜索功能,肯定少不了es 的使用</p><h2 id="安装es" tabindex="-1">安装es <a class="header-anchor" href="#安装es" aria-label="Permalink to &quot;安装es&quot;">​</a></h2><p>es 有几个概念 比较重要</p><p>对应数据库中,数据库有很多库这样的说法,对应es 我们称之索引库</p><p>而数据库中表所对应的东西,称之为类型 type</p><p>而 每一行的数据 es 称为文档</p><h3 id="docker-es安装" tabindex="-1">docker es安装 <a class="header-anchor" href="#docker-es安装" aria-label="Permalink to &quot;docker es安装&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 下载es镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">elasticsearch:5.6.8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-di</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ES_JAVA_OPTS=&quot;-Xms256m -Xmx256m&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name=legou_es</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9200</span><span style="color:#9ECBFF;">:9200</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9300</span><span style="color:#9ECBFF;">:9300</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">elasticsearch:5.6.8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入容器中</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">legou_es</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 下载es镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">elasticsearch:5.6.8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-di</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ES_JAVA_OPTS=&quot;-Xms256m -Xmx256m&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name=legou_es</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9200</span><span style="color:#032F62;">:9200</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9300</span><span style="color:#032F62;">:9300</span><span style="color:#24292E;"> </span><span style="color:#032F62;">elasticsearch:5.6.8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入容器中</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">legou_es</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这里需要在容器内修改配置文件,我们需要安装下<code>vim</code></p><p>首先更换镜像源</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/apt/sources.list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/apt/sources.list.bak</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb http://mirrors.aliyun.com/debian/ buster main non-free contrib&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb http://mirrors.aliyun.com/debian-security buster/updates main&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb-src http://mirrors.aliyun.com/debian-security buster/updates main&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib&quot;</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#9ECBFF;">/etc/apt/sources.list</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#更新安装源</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载安装</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vim</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/apt/sources.list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/apt/sources.list.bak</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb http://mirrors.aliyun.com/debian/ buster main non-free contrib&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb http://mirrors.aliyun.com/debian-security buster/updates main&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb-src http://mirrors.aliyun.com/debian-security buster/updates main&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib&quot;</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#032F62;">/etc/apt/sources.list</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#更新安装源</span></span>
<span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载安装</span></span>
<span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>修改配置文件</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/elasticsearch/config</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">elasticsearch.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/elasticsearch/config</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">elasticsearch.yml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>去掉这的注释</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#同时在下面加上集群的配置</span></span>
<span class="line"><span style="color:#B392F0;">cluster.name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-elasticsearch</span></span>
<span class="line"><span style="color:#6A737D;">#添加跨域的配置</span></span>
<span class="line"><span style="color:#B392F0;">http.cors.enabled:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">http.cors.allow-origin:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#B392F0;">network.host:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.134.128</span></span>
<span class="line"><span style="color:#6A737D;"># (这里是宿主机ip地址)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#同时在下面加上集群的配置</span></span>
<span class="line"><span style="color:#6F42C1;">cluster.name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-elasticsearch</span></span>
<span class="line"><span style="color:#6A737D;">#添加跨域的配置</span></span>
<span class="line"><span style="color:#6F42C1;">http.cors.enabled:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6F42C1;">http.cors.allow-origin:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">network.host:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.134.128</span></span>
<span class="line"><span style="color:#6A737D;"># (这里是宿主机ip地址)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 修改limits.conf文件</span></span>
<span class="line"><span style="color:#B392F0;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#6A737D;"># 添加上 下面内容</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> soft nofile 65536</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hard nofile 65536</span></span>
<span class="line"><span style="color:#B392F0;">vm.max_map_count</span><span style="color:#E1E4E8;">=655360</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 修改limits.conf文件</span></span>
<span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/security/limits.conf</span></span>
<span class="line"><span style="color:#6A737D;"># 添加上 下面内容</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> soft nofile 65536</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hard nofile 65536</span></span>
<span class="line"><span style="color:#6F42C1;">vm.max_map_count</span><span style="color:#24292E;">=655360</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>退出容器 后执行</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sysctl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sysctl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装kb" tabindex="-1">安装kb <a class="header-anchor" href="#安装kb" aria-label="Permalink to &quot;安装kb&quot;">​</a></h2><p>类似操控mysql 的客户端工具,可以方便我们进行操作</p><p>也是采用docker 安装</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ELASTICSEARCH_URL=http://192.168.134.128:9200</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kibana</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5601</span><span style="color:#9ECBFF;">:5601</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kibana:5.6.8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ELASTICSEARCH_URL=http://192.168.134.128:9200</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kibana</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5601</span><span style="color:#032F62;">:5601</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kibana:5.6.8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">#  创建索引库</span></span>
<span class="line"><span style="color:#E1E4E8;">PUT user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 查询索引库</span></span>
<span class="line"><span style="color:#E1E4E8;">GET user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 创建映射 就是说明字段</span></span>
<span class="line"><span style="color:#E1E4E8;">PUT /user/_mapping</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;integer&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;hobby&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 删除索引库</span></span>
<span class="line"><span style="color:#E1E4E8;">delete user</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">#  创建索引库</span></span>
<span class="line"><span style="color:#24292E;">PUT user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 查询索引库</span></span>
<span class="line"><span style="color:#24292E;">GET user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 创建映射 就是说明字段</span></span>
<span class="line"><span style="color:#24292E;">PUT /user/_mapping</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;integer&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;hobby&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 删除索引库</span></span>
<span class="line"><span style="color:#24292E;">delete user</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">_# _doc :注意_doc 是现在</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">默认的一个表</span></span>
<span class="line"><span style="color:#E1E4E8;"># 添加文档 我们不指定id 它会自动生产</span></span>
<span class="line"><span style="color:#E1E4E8;">POST /user/_doc</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;ls&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hobby&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 添加文档 指定id</span></span>
<span class="line"><span style="color:#E1E4E8;">POST /user/_doc/</span><span style="color:#79B8FF;">1111</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;ls&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hobby&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"># 查看文档</span></span>
<span class="line"><span style="color:#E1E4E8;">GET /user/_search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 删除一条文档</span></span>
<span class="line"><span style="color:#E1E4E8;">DELETE /user/_doc/</span><span style="color:#79B8FF;">1111</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">_# _doc :注意_doc 是现在</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">默认的一个表</span></span>
<span class="line"><span style="color:#24292E;"># 添加文档 我们不指定id 它会自动生产</span></span>
<span class="line"><span style="color:#24292E;">POST /user/_doc</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;ls&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hobby&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 添加文档 指定id</span></span>
<span class="line"><span style="color:#24292E;">POST /user/_doc/</span><span style="color:#005CC5;">1111</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;ls&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">123</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hobby&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"># 查看文档</span></span>
<span class="line"><span style="color:#24292E;">GET /user/_search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 删除一条文档</span></span>
<span class="line"><span style="color:#24292E;">DELETE /user/_doc/</span><span style="color:#005CC5;">1111</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="分词器" tabindex="-1">分词器 <a class="header-anchor" href="#分词器" aria-label="Permalink to &quot;分词器&quot;">​</a></h2><p>分词器,可以使我们需要搜索的关键词进行拆分,以达到更多搜索可能性</p><p>这里使用的ik 分词器 去github 下载</p><p><a href="https://github.com/medcl/elasticsearch-analysis-ik/releases" target="_blank" rel="noreferrer">分词器GitHub地址</a></p><blockquote><p>注意es 版本要和ik版本对应</p></blockquote><p>然后解压成文件夹,重命名为ik,上传到服务器上</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 执行拷贝操作</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./ik</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">legou_es:/usr/share/elasticsearch/plugins</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 执行拷贝操作</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./ik</span><span style="color:#24292E;"> </span><span style="color:#032F62;">legou_es:/usr/share/elasticsearch/plugins</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"># 默认分词器</span></span>
<span class="line"><span style="color:#E1E4E8;">GET _analyze</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;中国华为&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 自定义分词器 第一种模式</span></span>
<span class="line"><span style="color:#E1E4E8;">GET _analyze</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;analyzer&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;ik_smart&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;中国华为&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 第二种模式</span></span>
<span class="line"><span style="color:#E1E4E8;">GET _analyze</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;analyzer&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;ik_max_word&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;中国华为&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 给映射添加分词器  这里的</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> 指的是生产id为</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">POST user/_mapping</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;analyzer&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;ik_max_word&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;integer&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;hobby&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"># text 支持分词 不支持聚合,keyword 不支持分词,支持聚合</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># 默认分词器</span></span>
<span class="line"><span style="color:#24292E;">GET _analyze</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;中国华为&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 自定义分词器 第一种模式</span></span>
<span class="line"><span style="color:#24292E;">GET _analyze</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;analyzer&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;ik_smart&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;中国华为&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 第二种模式</span></span>
<span class="line"><span style="color:#24292E;">GET _analyze</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;analyzer&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;ik_max_word&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;中国华为&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 给映射添加分词器  这里的</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> 指的是生产id为</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">的数据</span></span>
<span class="line"><span style="color:#24292E;">POST user/_mapping</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;analyzer&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;ik_max_word&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;integer&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;hobby&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"># text 支持分词 不支持聚合,keyword 不支持分词,支持聚合</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"># 查询指定索引库</span></span>
<span class="line"><span style="color:#E1E4E8;">GET /user/_search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 结果</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;took&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;timed_out&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;_shards&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;successful&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;skipped&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;failed&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hits&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;relation&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;eq&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;max_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;hits&quot;</span><span style="color:#E1E4E8;"> : [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;h03CyXoBo4E9mEyze1Xb&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;zs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;18&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;hobby&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;iE3EyXoBo4E9mEyzvVVZ&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;ls&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;age&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;hobby&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 这个不会查询全部数据</span></span>
<span class="line"><span style="color:#E1E4E8;">GET sku/_search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">GET sku/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;match_all&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;from&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">120</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># 查询指定索引库</span></span>
<span class="line"><span style="color:#24292E;">GET /user/_search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 结果</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;took&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;timed_out&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;_shards&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;successful&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;skipped&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;failed&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hits&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;relation&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;eq&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;max_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;hits&quot;</span><span style="color:#24292E;"> : [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;h03CyXoBo4E9mEyze1Xb&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;zs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;18&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;hobby&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;iE3EyXoBo4E9mEyzvVVZ&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;ls&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;age&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;hobby&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;打球&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 这个不会查询全部数据</span></span>
<span class="line"><span style="color:#24292E;">GET sku/_search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">GET sku/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;match_all&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;from&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;size&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">120</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><blockquote><p><strong>hits</strong> 表示 命中的数据 下面的数组表示每一条数据</p><p>其中,</p><p>_index 表示当前的索引库</p><p>_type 表示 文档</p><p>_id 表示id</p><p>_score 表示分数</p><p>_score 表示资源,也就是每一行的数据类似</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET _cat/indices</span></span>
<span class="line"><span style="color:#E1E4E8;"># 可以查看索引库的状态</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET _cat/indices</span></span>
<span class="line"><span style="color:#24292E;"># 可以查看索引库的状态</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="match-查询" tabindex="-1">match 查询 <a class="header-anchor" href="#match-查询" aria-label="Permalink to &quot;match 查询&quot;">​</a></h2><p>这个查询可以进行分词,</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为手机&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;from&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">120</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为手机&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;from&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;size&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">120</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>注意.如果不添加上分页条件的话.是不会进行分页的</p><p>from 开始的页数</p><p>size 条数</p></blockquote><h2 id="term-查询" tabindex="-1">term 查询 <a class="header-anchor" href="#term-查询" aria-label="Permalink to &quot;term 查询&quot;">​</a></h2><p>term 查询不会进行分词</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;term&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;term&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="模糊查询" tabindex="-1">模糊查询 <a class="header-anchor" href="#模糊查询" aria-label="Permalink to &quot;模糊查询&quot;">​</a></h2><h3 id="wildcard" tabindex="-1"><strong>wildcard</strong> <a class="header-anchor" href="#wildcard" aria-label="Permalink to &quot;**wildcard**&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;wildcard&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华?&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;wildcard&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华?&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>和<code>mysql</code> 一样使用通配符 <code>?</code> 代表一个字符 <code>*</code> 任意个字符</p><blockquote><p><strong>wildcard</strong> 会对查询的条件进行分词</p><p>注意: 查询条件最左边使用通配符效率很会低 慎用</p></blockquote><h3 id="prefix" tabindex="-1">prefix <a class="header-anchor" href="#prefix" aria-label="Permalink to &quot;prefix&quot;">​</a></h3><p>前缀查询 最好用在<code>keyword</code> 上</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;prefix&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;prefix&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="范围查询" tabindex="-1">范围查询 <a class="header-anchor" href="#范围查询" aria-label="Permalink to &quot;范围查询&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;lte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200000</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;range&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;gte&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;lte&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200000</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>gt 大于 lt 小于</p></blockquote><h2 id="排序查询" tabindex="-1">排序查询 <a class="header-anchor" href="#排序查询" aria-label="Permalink to &quot;排序查询&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;lte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200000</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;sort&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;order&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;asc&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;range&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;gte&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;lte&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200000</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;sort&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;order&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;asc&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="querystring" tabindex="-1">queryString <a class="header-anchor" href="#querystring" aria-label="Permalink to &quot;queryString&quot;">​</a></h2><blockquote><p>特征</p><p>可以对查询的条件进行分词,然后将分词后的查询条件和词条进行等值匹配，默认取并集（or）</p><p>以指定多个查询字段</p></blockquote><h3 id="query-string" tabindex="-1">query_string <a class="header-anchor" href="#query-string" aria-label="Permalink to &quot;query_string&quot;">​</a></h3><p>可以识别查询条件中的 <code>OR</code> 和<code>AND</code></p><h3 id="simple-query-string" tabindex="-1">simple_query_string <a class="header-anchor" href="#simple-query-string" aria-label="Permalink to &quot;simple_query_string&quot;">​</a></h3><p>相反,不会识别 <code>OR</code> 和<code>AND</code></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"># query_string 案例</span></span>
<span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;query_string&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;fields&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;ownSpec.机身颜色.keyword&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为 OR 白色&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># query_string 案例</span></span>
<span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;query_string&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;fields&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;ownSpec.机身颜色.keyword&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为 OR 白色&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>注意 ,不会识别小写的or 和and</p></blockquote><h2 id="布尔查询" tabindex="-1">布尔查询 <a class="header-anchor" href="#布尔查询" aria-label="Permalink to &quot;布尔查询&quot;">​</a></h2><p>boolQuery：对多个查询条件连接。连接方式：</p><p>must（and）：条件必须成立</p><p>must_not（not）：条件必须不成立</p><p>should（or）：条件可以成立</p><p>filter：条件必须成立，性能比must高。不会计算得分</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;must&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;ownSpec.机身颜色&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;白色&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bool&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;must&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;ownSpec.机身颜色&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;白色&quot;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="聚合查询" tabindex="-1">聚合查询 <a class="header-anchor" href="#聚合查询" aria-label="Permalink to &quot;聚合查询&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;must&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;ownSpec.机身颜色&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;白色&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">#</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">min_price</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">这个是别名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;min_price&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">#</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">最小值</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">函数</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;min&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;price&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bool&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;must&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;ownSpec.机身颜色&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;白色&quot;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;aggs&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">#</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">min_price</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">这个是别名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;min_price&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">#</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">最小值</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">函数</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;min&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;field&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;price&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p>分组查询没懂</p></blockquote><blockquote><p>注意查询出来的结果是放在最后</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;took&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;timed_out&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;_shards&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;successful&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;skipped&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;failed&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hits&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;total&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;relation&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;eq&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;max_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">4.1393194</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;hits&quot;</span><span style="color:#E1E4E8;"> : [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;sku1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16292499472&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">4.1393194</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;createTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297677000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;enable&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">16292499472</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;http://image.legou.com/images/4/2/1524297676804.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;indexes&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;1_0_0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;lastUpdateTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297677000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ownSpec&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身颜色&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;白色&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;内存&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;2GB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身存储&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">59900</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;spuId&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">178</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;stock&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">99999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;华为（HUAWEI） 荣耀 畅玩6 手机 白色 全网通(2G RAM+16G ROM)标配&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;sku1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;5305784&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">4.0822973</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;createTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297325000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;enable&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">5305784</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;http://image.legou.com/images/14/7/1524297324600.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;indexes&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;1_0_0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;lastUpdateTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297325000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ownSpec&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身颜色&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;白色&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;内存&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;3GB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身存储&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">69900</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;spuId&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;stock&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">99999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;华为 畅享6 白色 移动4G+版 移动联通电信4G手机 双卡双待&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;sku1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16291111802&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">4.0646815</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;createTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297511000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;enable&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">16291111802</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;http://image.legou.com/images/10/5/1524297510771.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;indexes&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;1_0_0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;lastUpdateTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297511000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ownSpec&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身颜色&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;白色&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;内存&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;2GB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身存储&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">59900</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;spuId&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">98</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;stock&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">99999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;华为（HUAWEI） 荣耀 畅玩 6 全网通4G手机 双卡双待 白色 （2GB+16GB）标准&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;sku1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;26009533455&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">4.0313168</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;createTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297668000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;enable&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">26009533455</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;http://image.legou.com/images/0/12/1524297667989.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;indexes&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;1_0_0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;lastUpdateTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297668000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ownSpec&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身颜色&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;白色&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;内存&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;2GB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身存储&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">53500</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;spuId&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">173</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;stock&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">99999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;华为（HUAWEI） 荣耀 畅玩6 全网通4G智能手机 双卡双待 2G+16G 白色&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;sku1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16336922708&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">3.931058</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;createTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297449000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;enable&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">16336922708</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;http://image.legou.com/images/6/3/1524297449101.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;indexes&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;1_0_0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;lastUpdateTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297449000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ownSpec&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身颜色&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;白色&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;内存&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;2GB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身存储&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">59900</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;spuId&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">74</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;stock&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">99999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;华为（HUAWEI） 荣耀 畅玩6 全网通 移动联通电信4G 智能老人手机 双卡双待 白色 (2GB RAM+16GB ROM)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">#</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;aggregations&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;min_price&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">53500.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;took&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;timed_out&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;_shards&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;successful&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;skipped&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;failed&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hits&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;total&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;relation&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;eq&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;max_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">4.1393194</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;hits&quot;</span><span style="color:#24292E;"> : [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;sku1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16292499472&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">4.1393194</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;createTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297677000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;enable&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">16292499472</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;http://image.legou.com/images/4/2/1524297676804.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;indexes&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;1_0_0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;lastUpdateTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297677000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ownSpec&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身颜色&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;白色&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;内存&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;2GB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身存储&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">59900</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;spuId&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">178</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;stock&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">99999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;华为（HUAWEI） 荣耀 畅玩6 手机 白色 全网通(2G RAM+16G ROM)标配&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;sku1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;5305784&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">4.0822973</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;createTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297325000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;enable&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">5305784</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;http://image.legou.com/images/14/7/1524297324600.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;indexes&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;1_0_0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;lastUpdateTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297325000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ownSpec&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身颜色&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;白色&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;内存&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;3GB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身存储&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">69900</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;spuId&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;stock&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">99999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;华为 畅享6 白色 移动4G+版 移动联通电信4G手机 双卡双待&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;sku1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16291111802&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">4.0646815</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;createTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297511000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;enable&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">16291111802</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;http://image.legou.com/images/10/5/1524297510771.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;indexes&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;1_0_0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;lastUpdateTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297511000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ownSpec&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身颜色&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;白色&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;内存&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;2GB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身存储&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">59900</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;spuId&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">98</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;stock&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">99999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;华为（HUAWEI） 荣耀 畅玩 6 全网通4G手机 双卡双待 白色 （2GB+16GB）标准&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;sku1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;26009533455&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">4.0313168</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;createTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297668000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;enable&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">26009533455</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;http://image.legou.com/images/0/12/1524297667989.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;indexes&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;1_0_0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;lastUpdateTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297668000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ownSpec&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身颜色&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;白色&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;内存&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;2GB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身存储&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">53500</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;spuId&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">173</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;stock&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">99999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;华为（HUAWEI） 荣耀 畅玩6 全网通4G智能手机 双卡双待 2G+16G 白色&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;sku1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16336922708&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">3.931058</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;createTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297449000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;enable&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">16336922708</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;http://image.legou.com/images/6/3/1524297449101.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;indexes&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;1_0_0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;lastUpdateTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297449000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ownSpec&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身颜色&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;白色&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;内存&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;2GB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身存储&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;16GB&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">59900</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;spuId&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">74</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;stock&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">99999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;华为（HUAWEI） 荣耀 畅玩6 全网通 移动联通电信4G 智能老人手机 双卡双待 白色 (2GB RAM+16GB ROM)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">#</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;aggregations&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;min_price&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">53500.0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br></div></div><h2 id="高亮查询" tabindex="-1">高亮查询 <a class="header-anchor" href="#高亮查询" aria-label="Permalink to &quot;高亮查询&quot;">​</a></h2><p>我们在网上百度搜索东西的时候.搜索关键词的时候,搜索页面出来的结果,会对我们搜素的关键字添加样式</p><p>达到高亮效果 也就是在关键词上添加css样式</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">GET sku</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;highlight&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;fields&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;pre_tags&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;a color=&#39;red&#39;&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;post_tags&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;/a&gt;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">GET sku</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;match&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;华为&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;highlight&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;fields&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;pre_tags&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;a color=&#39;red&#39;&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;post_tags&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;/a&gt;&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>pre_tags 前缀标签</p><p>post_tags 后缀标签</p></blockquote><p>最后查询出来的结果是</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;_index&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;sku1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;_type&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;_doc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;_id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;26881279032&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;_score&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1.454582</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;_source&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;createTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297436000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;enable&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;id&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">26881279032</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;http://image.legou.com/images/14/7/1524297436217.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;indexes&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;2_0_0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;lastUpdateTime&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">1524297436000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;ownSpec&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身颜色&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;极光色&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;内存&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;6GB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;机身存储&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;128GB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;price&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">618800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;spuId&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">69</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;stock&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#79B8FF;">99999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;华为（HUAWEI） 华为P20pro 手机 极光色 6G+128G&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;highlight&quot;</span><span style="color:#E1E4E8;"> : {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> : [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;&lt;a color=&#39;red&#39;&gt;华为&lt;/a&gt;（HUAWEI） &lt;a color=&#39;red&#39;&gt;华为&lt;/a&gt;P20pro 手机 极光色 6G+128G&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;_index&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;sku1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;_type&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;_doc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;_id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;26881279032&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;_score&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1.454582</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;_source&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;createTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297436000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;enable&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;id&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">26881279032</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;http://image.legou.com/images/14/7/1524297436217.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;indexes&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;2_0_0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;lastUpdateTime&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">1524297436000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;ownSpec&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身颜色&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;极光色&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;内存&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;6GB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;机身存储&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;128GB&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;price&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">618800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;spuId&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">69</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;stock&quot;</span><span style="color:#24292E;"> : </span><span style="color:#005CC5;">99999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;华为（HUAWEI） 华为P20pro 手机 极光色 6G+128G&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;highlight&quot;</span><span style="color:#24292E;"> : {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;"> : [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;&lt;a color=&#39;red&#39;&gt;华为&lt;/a&gt;（HUAWEI） &lt;a color=&#39;red&#39;&gt;华为&lt;/a&gt;P20pro 手机 极光色 6G+128G&quot;</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,85),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{b as __pageData,F as default};
