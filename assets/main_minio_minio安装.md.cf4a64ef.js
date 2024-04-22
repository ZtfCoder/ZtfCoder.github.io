import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.1baa841b.js";const l="/assets/image-20220914113730822.a80e33f3.png",e="/assets/image-20220914111829483.e2ddcd8e.png",o="/assets/image-20220914112115388.7b0a1ddb.png",c="/assets/image-20220914112219196.c5ff2f64.png",r="/assets/image-20220914112410642.f6ecf960.png",t="/assets/image-20220914112504082.7706d3ee.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"main/minio/minio安装.md","filePath":"main/minio/minio安装.md","lastUpdated":1713749248000}'),i={name:"main/minio/minio安装.md"},y=p(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><code>minio</code> 是一款高性能分布式文件存储软件</p><p>之前采用的<code>fastdfs</code> ,官方整合 docker,极其难用,第三方的整合也是很多坑点,而<code>minio</code> 则官方 docker 镜像,构建简单,并且自带的图形化界面</p><h2 id="分布式介绍" tabindex="-1">分布式介绍 <a class="header-anchor" href="#分布式介绍" aria-label="Permalink to &quot;分布式介绍&quot;">​</a></h2><p>所谓分布式存储,则是上传一分文件,你可以通过放问不同服务都可以访问到这个文件,</p><p>使用的是<code>纠删码</code>,是一种恢复丢失和损坏数据的数学算法， Minio 默认采用 Reed-Solomon code 将数据拆分成 N/2 个数据块和 N/2 个奇偶校验块。这就意味着如果是 16 块盘，一个对象会被分成 8 个数据块、8 个奇偶校验块，你可以丢失任意 8 块盘（不管其是存放的数据块还是校验块），你仍可以从剩下的盘中的数据进行恢复。</p><h2 id="单机部署" tabindex="-1">单机部署 <a class="header-anchor" href="#单机部署" aria-label="Permalink to &quot;单机部署&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">minio</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">minio/minio</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">9000:9000</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">9001:9001</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MINIO_ACCESS_KEY</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">root</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MINIO_SECRET_KEY</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12345678</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">/home/docker-compose/minio/data:/data</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">/home/docker-compose/minio/config:/root/.minio</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server --console-address &#39;:9001&#39; /data</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">privileged</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">minio</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">minio/minio</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">9000:9000</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">9001:9001</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MINIO_ACCESS_KEY</span><span style="color:#24292E;">: </span><span style="color:#032F62;">root</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MINIO_SECRET_KEY</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12345678</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/home/docker-compose/minio/data:/data</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/home/docker-compose/minio/config:/root/.minio</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server --console-address &#39;:9001&#39; /data</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">privileged</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>账号 <code>root</code> 密码 <code>12345678</code></p><p>其中,9000 为 api 访问地址端口</p><p>9001 为图形化界面的访问地址端口</p></div><p><code>docker-compose up -d </code> 运行容器</p><p>访问 <code>http://ip:9001</code></p><p>首先创建一个桶,所谓桶,可以理解为创建一个空间或者创建一张表,这样理解</p><p><img src="`+l+'" alt="image-20220914113730822"></p><p>然后 选择 <code>create bucket</code><img src="'+e+'" alt="image-20220914111829483"><img src="'+o+'" alt="image-20220914112115388"></p><p>上传成功</p><p><img src="'+c+'" alt="image-20220914112219196"></p><p>创建桶后,默认桶访问权限是私有的,无法单独访问图片,需要到桶设置里改为 <code>public</code></p><p><img src="'+r+'" alt="image-20220914112410642"></p><p>首先回到桶界面,</p><p>选择 <code>manage</code></p><p><img src="'+t+`" alt="image-20220914112504082"></p><p>点击修改按钮,修改为 <code>public</code></p><p>接着访问 <code>http://ip:9000/桶名称/文件名称</code> 就可以访问到刚才上传的图片</p><p>我们可以去数据存储目录可以看的我们存储的图片已经存在于我们设置的数据存储目录里了</p><h2 id="集群部署" tabindex="-1">集群部署 <a class="header-anchor" href="#集群部署" aria-label="Permalink to &quot;集群部署&quot;">​</a></h2><p>官方 <code>docker-compose.yaml</code> 文件有点问题,稍微修改得到一下正确文件</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.7&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 所有容器通用的设置和配置</span></span>
<span class="line"><span style="color:#85E89D;">x-minio-common</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">&amp;</span><span style="color:#B392F0;">minio-common</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">minio/minio</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">server --console-address &quot;:9001&quot; http://minio{1...4}/data</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">expose</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;9000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># environment:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># MINIO_ROOT_USER: minioadmin</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># MINIO_ROOT_PASSWORD: minioadmin</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">healthcheck</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">test</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;CMD&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;curl&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-f&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;http://localhost:9000/minio/health/live&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">30s</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">20s</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">retries</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动4个docker容器运行minio服务器实例</span></span>
<span class="line"><span style="color:#6A737D;"># 使用nginx反向代理9000端口，负载均衡, 你可以通过9001、9002、9003、9004端口访问它们的web console</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">minio1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&lt;&lt;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">minio-common</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">minio1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;9001:9001&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./data/data1:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">minio2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&lt;&lt;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">minio-common</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">minio2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;9002:9001&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./data/data2:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">minio3</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&lt;&lt;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">minio-common</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">minio3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;9003:9001&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./data/data3:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">minio4</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&lt;&lt;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">minio-common</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">minio4</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;9004:9001&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./data/data4:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">nginx</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./nginx.conf:/etc/nginx/nginx.conf:ro</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;9000:9000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">minio1</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">minio2</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">minio3</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">minio4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.7&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 所有容器通用的设置和配置</span></span>
<span class="line"><span style="color:#22863A;">x-minio-common</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">&amp;</span><span style="color:#6F42C1;">minio-common</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">minio/minio</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">server --console-address &quot;:9001&quot; http://minio{1...4}/data</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">expose</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;9000&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># environment:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># MINIO_ROOT_USER: minioadmin</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># MINIO_ROOT_PASSWORD: minioadmin</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">healthcheck</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">test</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;CMD&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;curl&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-f&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;http://localhost:9000/minio/health/live&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">30s</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">timeout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">20s</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">retries</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动4个docker容器运行minio服务器实例</span></span>
<span class="line"><span style="color:#6A737D;"># 使用nginx反向代理9000端口，负载均衡, 你可以通过9001、9002、9003、9004端口访问它们的web console</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">minio1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&lt;&lt;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">minio-common</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">minio1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;9001:9001&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./data/data1:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">minio2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&lt;&lt;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">minio-common</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">minio2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;9002:9001&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./data/data2:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">minio3</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&lt;&lt;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">minio-common</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">minio3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;9003:9001&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./data/data3:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">minio4</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&lt;&lt;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">minio-common</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">minio4</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;9004:9001&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./data/data4:/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">nginx</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./nginx.conf:/etc/nginx/nginx.conf:ro</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;9000:9000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">minio1</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">minio2</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">minio3</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">minio4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p><code>nginx.conf</code> 文件内容</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">user  nginx;</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">error_log  /var/log/nginx/error.log warn;</span></span>
<span class="line"><span style="color:#e1e4e8;">pid        /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker_connections  4096;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#e1e4e8;">    sendfile        on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    # include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    upstream minio {</span></span>
<span class="line"><span style="color:#e1e4e8;">        server minio1:9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        server minio2:9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        server minio3:9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        server minio4:9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        listen       9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        listen  [::]:9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        # To allow special characters in headers</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignore_invalid_headers off;</span></span>
<span class="line"><span style="color:#e1e4e8;">        # Allow any size file to be uploaded.</span></span>
<span class="line"><span style="color:#e1e4e8;">        # Set to a value such as 1000m; to restrict file size to a specific value</span></span>
<span class="line"><span style="color:#e1e4e8;">        client_max_body_size 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        # To disable buffering</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_buffering off;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_set_header Host $http_host;</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_connect_timeout 300;</span></span>
<span class="line"><span style="color:#e1e4e8;">            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">            chunked_transfer_encoding off;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_pass http://minio;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">user  nginx;</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">error_log  /var/log/nginx/error.log warn;</span></span>
<span class="line"><span style="color:#24292e;">pid        /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections  4096;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#24292e;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#24292e;">    sendfile        on;</span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    # include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    upstream minio {</span></span>
<span class="line"><span style="color:#24292e;">        server minio1:9000;</span></span>
<span class="line"><span style="color:#24292e;">        server minio2:9000;</span></span>
<span class="line"><span style="color:#24292e;">        server minio3:9000;</span></span>
<span class="line"><span style="color:#24292e;">        server minio4:9000;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        listen       9000;</span></span>
<span class="line"><span style="color:#24292e;">        listen  [::]:9000;</span></span>
<span class="line"><span style="color:#24292e;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        # To allow special characters in headers</span></span>
<span class="line"><span style="color:#24292e;">        ignore_invalid_headers off;</span></span>
<span class="line"><span style="color:#24292e;">        # Allow any size file to be uploaded.</span></span>
<span class="line"><span style="color:#24292e;">        # Set to a value such as 1000m; to restrict file size to a specific value</span></span>
<span class="line"><span style="color:#24292e;">        client_max_body_size 0;</span></span>
<span class="line"><span style="color:#24292e;">        # To disable buffering</span></span>
<span class="line"><span style="color:#24292e;">        proxy_buffering off;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        location / {</span></span>
<span class="line"><span style="color:#24292e;">            proxy_set_header Host $http_host;</span></span>
<span class="line"><span style="color:#24292e;">            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">            proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            proxy_connect_timeout 300;</span></span>
<span class="line"><span style="color:#24292e;">            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1</span></span>
<span class="line"><span style="color:#24292e;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#24292e;">            proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            chunked_transfer_encoding off;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            proxy_pass http://minio;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p><code>docker-compose up -d </code> 运行容器</p><p>接下来访问 <code>http://ip:9001</code> 其中 9001-9004 都可以访问</p><p>默认登录密码为 <code>minioadmin</code></p><p>我们可以尝试上传一张图片,接着停止其中 1 号<code>minio</code></p><p>docker-compose stop <code>minio1号名称</code></p><p>再次访问图片,可以发现,等会一会后,仍然能访问这张图片,这样 就具备容灾能力</p>`,35),E=[y];function m(b,u,d,_,F,h){return n(),a("div",null,E)}const q=s(i,[["render",m]]);export{v as __pageData,q as default};
