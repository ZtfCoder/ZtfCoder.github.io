import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.1baa841b.js";const h=JSON.parse('{"title":"redis 基础","description":"","frontmatter":{"title":"redis 基础","tags":["redis","缓存技术"],"categories":"redis","abbrlink":"c69083c7"},"headers":[],"relativePath":"src/main/redis/Redis.md","filePath":"src/main/redis/Redis.md","lastUpdated":1713749248000}'),l={name:"src/main/redis/Redis.md"},p=n(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Redis（Remote Dictionary Server )，即远程字典服务，是一个开源的使用ANSI [C语言]编写、支持网络、可基于内存亦可持久化的日志型、Key-Value[数据库]，并提供多种语言的API</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Redis（Remote Dictionary Server )，即远程字典服务，是一个开源的使用ANSI [C语言]编写、支持网络、可基于内存亦可持久化的日志型、Key-Value[数据库]，并提供多种语言的API</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>redis-cli.exe</p><p>客户端</p><p>redis-server.exe</p><p>服务端</p><p>redis 的数据结构</p><p>redis 存储的是 key value 格式的数据,其中key 都是字符串</p><p>​ value 的数据结构:</p><p>​ 1.字符串 String</p><p>​ 2.哈希类型 hash map格式</p><p>​ 3.列表形式 lsit linkedlist格式</p><p>​ 4,集合类型 set</p><p>​ 5.有序集合 sortedset</p><h3 id="字符串类型-string" tabindex="-1">字符串类型:String <a class="header-anchor" href="#字符串类型-string" aria-label="Permalink to &quot;字符串类型:String&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.存储:set key value</span></span>
<span class="line"><span style="color:#e1e4e8;">2.获取:get key</span></span>
<span class="line"><span style="color:#e1e4e8;">3.删除:del key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.存储:set key value</span></span>
<span class="line"><span style="color:#24292e;">2.获取:get key</span></span>
<span class="line"><span style="color:#24292e;">3.删除:del key</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="哈希类型-hash" tabindex="-1">哈希类型 hash <a class="header-anchor" href="#哈希类型-hash" aria-label="Permalink to &quot;哈希类型 hash&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.存储:hset key field value</span></span>
<span class="line"><span style="color:#e1e4e8;">2.获取:</span></span>
<span class="line"><span style="color:#e1e4e8;">		获取指定field的值:hget key field</span></span>
<span class="line"><span style="color:#e1e4e8;">		获取所有field 的value值 :hgetall key </span></span>
<span class="line"><span style="color:#e1e4e8;">3.删除:hdel key field</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">存储类似于于创建了一个map集合,key是map的名字,field和value是键和值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.存储:hset key field value</span></span>
<span class="line"><span style="color:#24292e;">2.获取:</span></span>
<span class="line"><span style="color:#24292e;">		获取指定field的值:hget key field</span></span>
<span class="line"><span style="color:#24292e;">		获取所有field 的value值 :hgetall key </span></span>
<span class="line"><span style="color:#24292e;">3.删除:hdel key field</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">存储类似于于创建了一个map集合,key是map的名字,field和value是键和值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="列表-lsit" tabindex="-1">列表 lsit <a class="header-anchor" href="#列表-lsit" aria-label="Permalink to &quot;列表 lsit&quot;">​</a></h3><p>可以添加一个元素到列表的左边或者右边</p><p>类似于队列,不过与队列不同的是,可以分别从2端添加进元素</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.添加:</span></span>
<span class="line"><span style="color:#e1e4e8;">	lpush key value :将元素加入列表的左边</span></span>
<span class="line"><span style="color:#e1e4e8;">	rpush key value :将元素加入列表的右边</span></span>
<span class="line"><span style="color:#e1e4e8;">2.获取</span></span>
<span class="line"><span style="color:#e1e4e8;">	lrange key start end :范围获取 [ , )</span></span>
<span class="line"><span style="color:#e1e4e8;">3.删除</span></span>
<span class="line"><span style="color:#e1e4e8;">	lpop key :删除列表最左边的元素,并将元素返回</span></span>
<span class="line"><span style="color:#e1e4e8;">	rpop key :删除列表最右边的元素,并将元素返回</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.添加:</span></span>
<span class="line"><span style="color:#24292e;">	lpush key value :将元素加入列表的左边</span></span>
<span class="line"><span style="color:#24292e;">	rpush key value :将元素加入列表的右边</span></span>
<span class="line"><span style="color:#24292e;">2.获取</span></span>
<span class="line"><span style="color:#24292e;">	lrange key start end :范围获取 [ , )</span></span>
<span class="line"><span style="color:#24292e;">3.删除</span></span>
<span class="line"><span style="color:#24292e;">	lpop key :删除列表最左边的元素,并将元素返回</span></span>
<span class="line"><span style="color:#24292e;">	rpop key :删除列表最右边的元素,并将元素返回</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">lsit中删除指定元素</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">lrem key count value</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">count &gt; 0:从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count</span></span>
<span class="line"><span style="color:#e1e4e8;">count &lt; 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。。</span></span>
<span class="line"><span style="color:#e1e4e8;">count = 0 : 移除表中所有与 value 相等的值。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">lindex key 索引</span></span>
<span class="line"><span style="color:#e1e4e8;">通过索引获取列表中的元素</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1 表示列表第一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">-1 表示列表的最后一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">如果指定索引值不在列表的区间范围内，返回 nil</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">lsit中删除指定元素</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">lrem key count value</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">count &gt; 0:从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count</span></span>
<span class="line"><span style="color:#24292e;">count &lt; 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。。</span></span>
<span class="line"><span style="color:#24292e;">count = 0 : 移除表中所有与 value 相等的值。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">lindex key 索引</span></span>
<span class="line"><span style="color:#24292e;">通过索引获取列表中的元素</span></span>
<span class="line"><span style="color:#24292e;"> 1 表示列表第一个元素</span></span>
<span class="line"><span style="color:#24292e;">-1 表示列表的最后一个元素</span></span>
<span class="line"><span style="color:#24292e;">如果指定索引值不在列表的区间范围内，返回 nil</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">获取列表长度</span></span>
<span class="line"><span style="color:#e1e4e8;">llen key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">获取列表长度</span></span>
<span class="line"><span style="color:#24292e;">llen key</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="集合-set" tabindex="-1">集合 set <a class="header-anchor" href="#集合-set" aria-label="Permalink to &quot;集合 set&quot;">​</a></h3><p>不允许重复元素</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1.存储: sadd key value</span></span>
<span class="line"><span style="color:#e1e4e8;">2.获取: smembers key </span></span>
<span class="line"><span style="color:#e1e4e8;">		获取set 集合中所有的元素</span></span>
<span class="line"><span style="color:#e1e4e8;">3.删除:srem key value: 删除set集合中的某个元素</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.存储: sadd key value</span></span>
<span class="line"><span style="color:#24292e;">2.获取: smembers key </span></span>
<span class="line"><span style="color:#24292e;">		获取set 集合中所有的元素</span></span>
<span class="line"><span style="color:#24292e;">3.删除:srem key value: 删除set集合中的某个元素</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="通用命令" tabindex="-1">通用命令 <a class="header-anchor" href="#通用命令" aria-label="Permalink to &quot;通用命令&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">key * :查看所有的key</span></span>
<span class="line"><span style="color:#e1e4e8;">type key :获取键对应的value的类型</span></span>
<span class="line"><span style="color:#e1e4e8;">del key  :删除指定的key value</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">key * :查看所有的key</span></span>
<span class="line"><span style="color:#24292e;">type key :获取键对应的value的类型</span></span>
<span class="line"><span style="color:#24292e;">del key  :删除指定的key value</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="持久化" tabindex="-1">持久化 <a class="header-anchor" href="#持久化" aria-label="Permalink to &quot;持久化&quot;">​</a></h2><p>redis 是一个内存数据库,但redis服务器重启后,内存中的数据,会丢失</p><p>我们可以</p><p>将redis 内存中的数据持久化保存到硬盘的文件中</p><h3 id="rdb" tabindex="-1">RDB <a class="header-anchor" href="#rdb" aria-label="Permalink to &quot;RDB&quot;">​</a></h3><p>默认的持久化方式,不需要配置,默认就是使用这种机制</p><p>​ 在一定的间隔时间中检测,key的变化情况,然后持久化的数据</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">编辑redis.windows.conf 配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">save 900 1</span></span>
<span class="line"><span style="color:#e1e4e8;">	#在900s内修改过至少1条key 则保存数据</span></span>
<span class="line"><span style="color:#e1e4e8;">save 300 10</span></span>
<span class="line"><span style="color:#e1e4e8;">	#在300s内修改过至少10条key 则保存数据</span></span>
<span class="line"><span style="color:#e1e4e8;">save 60 10000</span></span>
<span class="line"><span style="color:#e1e4e8;">	#在60s内修改过至少10000条key 则保存数据</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">编辑redis.windows.conf 配置文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">save 900 1</span></span>
<span class="line"><span style="color:#24292e;">	#在900s内修改过至少1条key 则保存数据</span></span>
<span class="line"><span style="color:#24292e;">save 300 10</span></span>
<span class="line"><span style="color:#24292e;">	#在300s内修改过至少10条key 则保存数据</span></span>
<span class="line"><span style="color:#24292e;">save 60 10000</span></span>
<span class="line"><span style="color:#24292e;">	#在60s内修改过至少10000条key 则保存数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>配置完成后重新启动redis服务器,并指定配置文件名称</p><p>使用cmd 命令窗口指定配置文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">redis-server.exe redis.windows.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">redis-server.exe redis.windows.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>持久化保存的数据,会在redis目录下生成一个rdb的文件</p><h3 id="aof" tabindex="-1">AOF <a class="header-anchor" href="#aof" aria-label="Permalink to &quot;AOF&quot;">​</a></h3><p>日志记录的方式,可以记录每一条命令的操作,可以每一次命令后持久化数据</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">编辑redis.windows.conf文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">appendonly no</span></span>
<span class="line"><span style="color:#e1e4e8;">	no:代表关闭AOF,</span></span>
<span class="line"><span style="color:#e1e4e8;">	yes:开启AOF</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># appendfsync always</span></span>
<span class="line"><span style="color:#e1e4e8;">	每次命令偶读持久化数据</span></span>
<span class="line"><span style="color:#e1e4e8;">appendfsync everysec</span></span>
<span class="line"><span style="color:#e1e4e8;">	每间隔1s持久化数据</span></span>
<span class="line"><span style="color:#e1e4e8;"># appendfsync no</span></span>
<span class="line"><span style="color:#e1e4e8;">	不进行持久化</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">编辑redis.windows.conf文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">appendonly no</span></span>
<span class="line"><span style="color:#24292e;">	no:代表关闭AOF,</span></span>
<span class="line"><span style="color:#24292e;">	yes:开启AOF</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># appendfsync always</span></span>
<span class="line"><span style="color:#24292e;">	每次命令偶读持久化数据</span></span>
<span class="line"><span style="color:#24292e;">appendfsync everysec</span></span>
<span class="line"><span style="color:#24292e;">	每间隔1s持久化数据</span></span>
<span class="line"><span style="color:#24292e;"># appendfsync no</span></span>
<span class="line"><span style="color:#24292e;">	不进行持久化</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>配置完成后,重启redis服务器,</p><p>使用cmd启动</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">redis-server.exe redis.windows.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">redis-server.exe redis.windows.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="存储指定过期时间" tabindex="-1">存储指定过期时间 <a class="header-anchor" href="#存储指定过期时间" aria-label="Permalink to &quot;存储指定过期时间&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">jedis.setex(&quot;键的名称&quot;,时间/s,&quot;值&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jedis.setex(&quot;键的名称&quot;,时间/s,&quot;值&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>经过指定时间后过期</p>`,50),c=[p];function i(r,o,t,d,u,b){return e(),a("div",null,c)}const m=s(l,[["render",i]]);export{h as __pageData,m as default};
