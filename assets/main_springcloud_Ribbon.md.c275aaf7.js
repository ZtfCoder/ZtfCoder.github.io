import{_ as s,a as n,c as a,b as l}from"./app.062e7d47.js";const i=JSON.parse('{"title":"springcloud \u8D1F\u8F7D\u5747\u8861(\u5F85\u66F4\u65B0)","description":"","frontmatter":{"title":"springcloud \u8D1F\u8F7D\u5747\u8861(\u5F85\u66F4\u65B0)","tags":"springcloud","categories":"springcloud","abbrlink":"74c75ebe"},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5165\u95E8","slug":"\u5165\u95E8","link":"#\u5165\u95E8","children":[]}],"relativePath":"main/springcloud/Ribbon.md","lastUpdated":1662368311000}'),p={name:"main/springcloud/Ribbon.md"},o=l(`<h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u8D77\u521D,\u6211\u4EEC\u4F7F\u7528<code>zookeeper</code> \u548C<code>Dubbo</code>\u7684\u65F6\u5019,\u5229\u7528\u7684\u662F<code>Dubbo</code> \u7684RPC \u8FDC\u7A0B\u8C03\u7528\u6280\u672F</p><p>\u800C,springcloud \u5229\u7528\u7684\u662F<code>restfule</code>\u98CE\u683C \u5229\u7528restful \u53D1\u9001\u8BF7\u6C42</p><p><code>ribbon</code> \u5219\u662F\u7528\u4E8E \u8D1F\u8F7D\u5747\u8861 \u7684,\u7C7B\u4F3C\u6211\u4EEC\u5E38\u7528\u7684<code>nginx</code></p><p><code>ribbon</code> \u4E0E <code>Eureka</code> \u8054\u52A8,\u5219\u662F,<code>ribbon</code> \u53BB <code>Eureka</code> \u670D\u52A1\u4E2D\u5FC3\u83B7\u53D6,\u751F\u4EA7\u8005\u7684\u5730\u5740,\u7136\u540E,\u901A\u8FC7\u67D0\u79CD\u7B97\u6CD5 \u8BBF\u95EE\u67D0\u4E2A\u5B9E\u4F8B</p><h2 id="\u5165\u95E8" tabindex="-1">\u5165\u95E8 <a class="header-anchor" href="#\u5165\u95E8" aria-hidden="true">#</a></h2><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A \u6D88\u8D39\u8005</p><p>\u5BFC\u5165\u4F9D\u8D56</p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-cloud-starter-netflix-eureka-client</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3.0.2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!--\u6D88\u8D39\u8005, \u5982\u679C\u4E0D\u5BFC\u5165\u6B64\u4F9D\u8D56,\u8D1F\u8F7D\u5747\u8861\u7684\u65F6\u5019,\u4F1A\u627E\u4E0D\u5230\u5B9E\u4F8B--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-cloud-starter-eureka</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1.4.6.RELEASE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u8FDB\u884C<code>yml</code> \u914D\u7F6E</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">springcloud-consumer-dept-80</span></span>
<span class="line"><span style="color:#F07178;">eureka</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">client</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u4E0D\u9700\u8981\u6CE8\u518C \u8FD9\u4E2A\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">register-with-eureka</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">service-url</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">defaultZone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:7001/eureka</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8FD9\u91CC eureka \u7684\u521B\u5EFA \u4E0E\u76F8\u5173\u4E1A\u52A1\u4EE3\u7801,\u5DF2\u7701\u7565</p></blockquote><p>\u5728\u542F\u52A8\u7C7B\u4E0A,\u6DFB\u52A0\u4E00\u4E2A\u6CE8\u89E3</p><p><code>@EnableEurekaClient</code></p><p>\u63A5\u7740\u5728controller\u4E2D\u5199\u63A5\u53E3\u4EE3\u7801</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/consumer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RestController</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DeptConsumerController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6CE8\u610F, \u8FD9\u91CC\u7684\u5730\u5740,\u586B\u5199 eureka \u7BA1\u7406\u754C\u9762\u7684\u6CE8\u518C\u7684\u670D\u52A1\u540D\u79F0,\u6216\u8005\u751F\u4EA7\u8005\u7684 application-name</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8FD9\u6837\u7684\u8BDD,\u6211\u4EEC\u8BBF\u95EE\u7684,\u5C31\u4E0D\u662F\u5177\u4F53\u7684\u67D0\u4E00\u4E2A \u751F\u4EA7\u8005\u670D\u52A1,\u800C\u662F,\u5B83\u4F1A\u53BB\u62C9\u53D6\u670D\u52A1\u5217\u8868,\u770B\u5177\u4F53\u7528\u54EA\u4E00\u4E2A\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> DEPT_URL_PRF </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://springcloud-provider-dept</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RestTemplate</span><span style="color:#A6ACCD;"> restTemplate</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/getDeptById/{id}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Dept</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getDeptById</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">PathVariable</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> restTemplate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getForObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DEPT_URL_PRF</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dept/getDeptById/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Dept</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/getAllDept</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Dept</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getAllDept</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> restTemplate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getForObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DEPT_URL_PRF</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dept/getAllDept</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> List</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/addDept/{name}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addDept</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">PathVariable</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> restTemplate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getForObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DEPT_URL_PRF</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dept/addDept/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8981\u60F3\u5B9E\u73B0 restTemplate \u7684\u8D1F\u8F7D\u5747\u8861\u7684\u8BBF\u95EE,\u8FD8\u9700\u8981\u5728,RestTemplate \u7684\u914D\u7F6E\u7C7B\u4E2D \u6DFB\u52A0\u4E00\u4E2A\u6CE8\u89E3</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BeanConf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">LoadBalanced</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">RestTemplate</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getRestTemplate</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RestTemplate</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>@LoadBalanced</code> \u6DFB\u52A0\u4E86\u8FD9\u4E2A\u6CE8\u89E3,\u5B83\u5C31\u4F1A\u9ED8\u8BA4\u8F6E\u8BE2\u7684\u65B9\u5F0F\u8BBF\u95EE\u6211\u4EEC\u7684\u7684\u670D\u52A1</p><blockquote><p>\u6CE8\u610F ,\u751F\u4EA7\u8005\u7684 eureka \u914D\u7F6E \u4E00\u5B9A\u542B\u6709\u4E00\u4E0B\u914D\u7F6E,\u5426\u5219\u65E0\u6CD5\u5B9E\u73B0 \u8D1F\u8F7D\u5747\u8861</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">eureka</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">instance</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">prefer-ip-address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div></blockquote>`,20),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
