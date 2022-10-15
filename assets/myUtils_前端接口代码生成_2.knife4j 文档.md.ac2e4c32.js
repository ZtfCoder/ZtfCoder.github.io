import{_ as s,a as n,c as a,b as p}from"./app.8e8228ed.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u540E\u6863\u6587\u6863\u642D\u5EFA","slug":"\u540E\u6863\u6587\u6863\u642D\u5EFA","link":"#\u540E\u6863\u6587\u6863\u642D\u5EFA","children":[]},{"level":3,"title":"\u524D\u7AEF\u4EE3\u7801\u751F\u6210","slug":"\u524D\u7AEF\u4EE3\u7801\u751F\u6210","link":"#\u524D\u7AEF\u4EE3\u7801\u751F\u6210","children":[]}],"relativePath":"myUtils/\u524D\u7AEF\u63A5\u53E3\u4EE3\u7801\u751F\u6210/2.knife4j \u6587\u6863.md","lastUpdated":1665850462000}'),l={name:"myUtils/\u524D\u7AEF\u63A5\u53E3\u4EE3\u7801\u751F\u6210/2.knife4j \u6587\u6863.md"},o=p(`<p>\u6839\u636Espring boot\u540E\u7AEF \u63D0\u4F9B\u7684 OpenAPI \u6765\u751F\u6210\u4EE3\u7801</p><h3 id="\u540E\u6863\u6587\u6863\u642D\u5EFA" tabindex="-1">\u540E\u6863\u6587\u6863\u642D\u5EFA <a class="header-anchor" href="#\u540E\u6863\u6587\u6863\u642D\u5EFA" aria-hidden="true">#</a></h3><p>\u9996\u5148\u9700\u8981\u642D\u5EFA\u4E00\u4E2Aspringboot \u7684knife4j \u9879\u76EE</p><p>\u5728pom \u4E2D\u5F15\u5165</p><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.github.xiaoymin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">knife4j-spring-boot-starter</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3.0.3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\u4E3B\u6CE8\u610F\u9AD8\u7248\u672C\u7684spring boot \u9700\u8981\u5728yml \u4E2D\u914D\u7F6E \u4EE5\u4E0B\u5185\u5BB9</p><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mvc</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pathmatch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">matching-strategy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ANT_PATH_MATCHER</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><p>\u7F16\u5199<code>knife4j</code> \u914D\u7F6E\u7C7B</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Knife4jConfiguration</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">defaultApi2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Docket</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defaultApi2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Docket</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">DocumentationType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SWAGGER_2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apiInfo</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ApiInfoBuilder</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;">//.title(&quot;swagger-bootstrap-ui-demo RESTful APIs&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">description</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># swagger-bootstrap-ui-demo RESTful APIs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">termsOfServiceUrl</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.xx.com/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">version</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">//\u5206\u7EC4\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">groupName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.X\u7248\u672C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">//\u8FD9\u91CC\u6307\u5B9AController\u626B\u63CF\u5305\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apis</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">RequestHandlerSelectors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">basePackage</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.example.knife4j.controller</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">paths</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PathSelectors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">any</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>controller</code></p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Api</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">tags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9996\u9875\u6A21\u5757</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RestController</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiImplicitParam</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u59D3\u540D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">required</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span><span style="color:#FFCB6B;">dataTypeClass</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiOperation</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5411\u5BA2\u4EBA\u95EE\u597D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">GetMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/sayHi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Result</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">User</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sayHi</span><span style="color:#89DDFF;">(@</span><span style="color:#C792EA;">RequestParam</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Result</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">User</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Result</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>Result</code></p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiModel</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Result</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> code</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> msg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">T</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiModel</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiModelProperty</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ApiModelProperty</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u6837\u5C31\u6709\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u63A5\u53E3,\u5305\u542B\u8BF7\u6C42\u53C2\u6570,\u548C\u8FD4\u56DE\u503C</p><p>\u542F\u52A8\u9879\u76EE\u770B\u662F\u5426\u80FD\u6B63\u5E38\u8BBF\u95EE <code>http://127.0.0.1:8080/doc.html#/home</code></p><p>\u5728<code>knife4j</code> \u7684\u63A5\u53E3\u6587\u6863\u7684\u5DE6\u4FA7\u83DC\u5355\u4E2D,\u627E\u5230 <code>\u6587\u6863\u7BA1\u7406-&gt;\u79BB\u7EBF\u53C2\u6570</code></p><p>\u6709\u4E00\u4E2A<code>OpenApi</code> \u9009\u9879,\u70B9\u51FB\u5373\u53EF\u4E0B\u8F7D\u4E00\u4E2Ajson \u6587\u4EF6,\u8BE5\u6587\u4EF6\u5939\u5219\u5C31\u662Fopenapi \u63CF\u8FF0\u6587\u4EF6,\u540E\u7EED\u524D\u7AEF,\u9700\u8981\u7528\u8FD9\u4E2Ajson \u6587\u4EF6,\u6765\u751F\u6210\u63A5\u53E3\u4EE3\u7801</p><p>\u81F3\u6B64,\u5DF2\u5B8C\u6210,\u540E\u7AEF\u63A5\u53E3\u6587\u6863\u7684\u521B\u5EFA</p><h3 id="\u524D\u7AEF\u4EE3\u7801\u751F\u6210" tabindex="-1">\u524D\u7AEF\u4EE3\u7801\u751F\u6210 <a class="header-anchor" href="#\u524D\u7AEF\u4EE3\u7801\u751F\u6210" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u4EE5\u4E0B\u5305\u7BA1\u7406\u5DE5\u5177\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE,\u9879\u76EE\u9700\u8981\u9009\u62E9<code>ts</code> \u652F\u6301</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init vite@latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yarn create vite</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm create vite</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F60\u53EF\u4EE5\u9009\u62E9\u4F60\u5E38\u7528\u7684,\u8FD9\u4E2A\u4E0D\u91CD\u8981</p><p>\u5B89\u88C5 <code>axios</code></p><p>\u63A5\u7740\u5B89\u88C5\u4EE3\u7801\u751F\u6210</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install openapi-typescript-codegen --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u751F\u6210\u811A\u672C</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;generated&quot;: &quot;openapi --input ./openAPI.json --output ./src/api --client axios&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u8FD9\u91CC\u7684openAPI.json \u6587\u4EF6\u5219\u662F\u6307\u521A\u624D\u4E0B\u8F7D\u597D\u7684\u6587\u4EF6,\u5C06\u5B83\u79FB\u52A8\u5230\u524D\u7AEF\u9879\u76EE\u4E2D</p></blockquote><p>\u4E4B\u540E,\u8FD0\u884C\u8BE5\u811A\u672C, \u5219\u4F1A\u5728src/api \u4E2D\u751F\u6210\u63A5\u53E3\u4EE3\u7801</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5728index.ts \u4E2D Service \u5219\u662F\u8C03\u7528\u63A5\u53E3\u7684\u901A\u7528\u6A21\u5757, \u76F4\u63A5 Service. \u5C31\u53EF\u4EE5\u770B\u5230\u53EF\u4EE5\u8C03\u7528\u54EA\u4E9B\u63A5\u53E3\u4EE5\u53CA\u53C2\u6570,\u7C7B\u578B\u7B49\u7B49\u5185\u5BB9</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Service</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./services/Service</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u8C03\u7528\u65B9\u5F0F</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Service.sayHiUsingGet(&quot;dsa&quot;).then(res=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;"> const data  =  res.data</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u7B80\u5355\u67E5\u770B\u4E0B\u4EE3\u7801\u751F\u6210\u66B4\u9732\u51FA\u6765\u7684\u5BF9\u8C61,\u6709\u4E9B\u662F\u914D\u7F6Eurl \u7B49\u7B49\u5185\u5BB9</p>`,33),e=[o];function r(c,t,D,y,F,i){return n(),a("div",null,e)}const u=s(l,[["render",r]]);export{C as __pageData,u as default};
