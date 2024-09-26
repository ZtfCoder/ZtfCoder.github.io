import{_ as a,c as t,a2 as o,o as r}from"./chunks/framework.sGs2IBkb.js";const h=JSON.parse('{"title":"redis缓存问题","description":"","frontmatter":{"title":"redis缓存问题","tags":["redis","缓存技术"],"categories":"redis","abbrlink":"3249751e"},"headers":[],"relativePath":"main/redis/redis面试.md","filePath":"main/redis/redis面试.md","lastUpdated":1662368311000}'),i={name:"main/redis/redis面试.md"};function l(p,e,s,d,n,c){return r(),t("div",null,e[0]||(e[0]=[o('<h2 id="缓存穿透" tabindex="-1">缓存穿透 <a class="header-anchor" href="#缓存穿透" aria-label="Permalink to &quot;缓存穿透&quot;">​</a></h2><p>缓存穿透是说的是 <strong>缓存和数据库都有没的数据</strong>,但是用户不断发起请求,由于缓存未击中,而去查询数据库,但是数据库也没有,这样就失去缓存的意义,当大流量访问的时候,就会导致数据库压力变大,如果有人利用 不存在的key 去查询,这就变成了漏洞</p><blockquote><p>解决方案</p></blockquote><p>当用户访问数据库中不存在的数据时,返回一个空,同时将此数据缓存进我们的redis ,这样下次再来访问的时候,直接访问的是我们一个缓存</p><h2 id="缓存击穿" tabindex="-1">缓存击穿 <a class="header-anchor" href="#缓存击穿" aria-label="Permalink to &quot;缓存击穿&quot;">​</a></h2><p>缓存击穿说的是当用户访问的数据,<strong>缓存中不存在(一般指数据到期)</strong>,而去查询数据库(<strong>数据库存在</strong>),在并发比较高的情况下,就会导致数据库压力过大</p><blockquote><p>解决方案</p></blockquote><ol><li><p>设置热点数据 用不过期</p></li><li><p>接口限流,熔断,降级</p></li><li><p>布隆过滤器</p><blockquote><p>布隆过滤器 是用户用户访问 redis 缓存前进行一个筛选判断</p><p>可以设置为白名单模式,布隆过滤器只存放key,不存value,</p><p>让符合 key 的请求通过</p><p>黑名单则是相反</p><p>通常是在项目启动的时候,初始化布隆过滤器里的值</p></blockquote></li></ol><h2 id="缓存雪崩" tabindex="-1">缓存雪崩 <a class="header-anchor" href="#缓存雪崩" aria-label="Permalink to &quot;缓存雪崩&quot;">​</a></h2><p>缓存雪崩 是指大量数据的在短时间内同时失效,然后,直接访问数据库,从而导致,数据库压力过大,造成缓存雪崩</p><blockquote><p>解决方案</p><ol><li><p>设置过期时间更加随机一点,可以在设置的过期时间上,添加一个随机数</p></li><li><p>添加队列,使用mq ,慢慢的去读取数据库的数据不至于所有请求直接访问数据库</p></li></ol></blockquote>',11)]))}const k=a(i,[["render",l]]);export{h as __pageData,k as default};
