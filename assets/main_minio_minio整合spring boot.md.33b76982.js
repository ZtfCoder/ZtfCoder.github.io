import{_ as s,a as n,c as a,b as l}from"./app.c6b715af.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F15\u5165pom","slug":"\u5F15\u5165pom","link":"#\u5F15\u5165pom","children":[]},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[{"level":3,"title":"yml\u914D\u7F6E","slug":"yml\u914D\u7F6E","link":"#yml\u914D\u7F6E","children":[]},{"level":3,"title":"minio \u5BA2\u6237\u7AEF\u914D\u7F6E","slug":"minio-\u5BA2\u6237\u7AEF\u914D\u7F6E","link":"#minio-\u5BA2\u6237\u7AEF\u914D\u7F6E","children":[]}]},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[{"level":3,"title":"\u4E0A\u4F20","slug":"\u4E0A\u4F20","link":"#\u4E0A\u4F20","children":[]},{"level":3,"title":"\u5206\u4EAB\u94FE\u63A5","slug":"\u5206\u4EAB\u94FE\u63A5","link":"#\u5206\u4EAB\u94FE\u63A5","children":[]},{"level":3,"title":"\u6C38\u4E45\u94FE\u63A5","slug":"\u6C38\u4E45\u94FE\u63A5","link":"#\u6C38\u4E45\u94FE\u63A5","children":[]},{"level":3,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D","link":"#\u4E0B\u8F7D","children":[]},{"level":3,"title":"\u5206\u7247\u4E0A\u4F20","slug":"\u5206\u7247\u4E0A\u4F20","link":"#\u5206\u7247\u4E0A\u4F20","children":[]}]}],"relativePath":"main/minio/minio\u6574\u5408spring boot.md","lastUpdated":1663769458000}'),p={name:"main/minio/minio\u6574\u5408spring boot.md"},e=l(`<h2 id="\u5F15\u5165pom" tabindex="-1">\u5F15\u5165pom <a class="header-anchor" href="#\u5F15\u5165pom" aria-hidden="true">#</a></h2><div class="language-xml line-numbers-mode"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.boot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-boot-starter-web</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">io.minio</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">minio</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">8.4.3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.projectlombok</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">lombok</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.boot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-boot-configuration-processor</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">optional</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">true</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">optional</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5176\u4E2D<code>spring-boot-configuration-processor</code> \u662F\u4E3A\u4E86\u5728<code>yml</code> \u4E2D\u914D\u7F6Eminio\u5BA2\u6237\u7AEF\u4FE1\u606F\u65F6\u8FDB\u884C\u63D0\u793A,\u53EF\u4EE5\u4E0D\u5F15\u5165</p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u8BFB\u53D6yml\u914D\u7F6E\u7C7B</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">ConfigurationProperties</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">prefix</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">minio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MinioPropertiesConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">    /**</span></span>
<span class="line"><span style="color:#676E95;">     * \u7AEF\u70B9</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> endpoint</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">    /**</span></span>
<span class="line"><span style="color:#676E95;">     * \u7528\u6237\u540D</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> accessKey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">    /**</span></span>
<span class="line"><span style="color:#676E95;">     * \u5BC6\u7801</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> secretKey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">    /**</span></span>
<span class="line"><span style="color:#676E95;">     * \u6876\u540D\u79F0</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> bucketName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="yml\u914D\u7F6E" tabindex="-1">yml\u914D\u7F6E <a class="header-anchor" href="#yml\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">minio</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">accessKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">secretKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12345678</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bucket-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://192.168.134.130:9000</span></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># \u914D\u7F6E\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F\u9650\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">servlet</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">multipart</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max-file-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100MB</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max-request-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100MB</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="minio-\u5BA2\u6237\u7AEF\u914D\u7F6E" tabindex="-1">minio \u5BA2\u6237\u7AEF\u914D\u7F6E <a class="header-anchor" href="#minio-\u5BA2\u6237\u7AEF\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Configuration</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MinioConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">MinioPropertiesConfig</span><span style="color:#A6ACCD;"> minioPropertiesConfig</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Bean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">MinioClient</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minioClient</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> MinioClient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">builder</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endpoint</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">minioPropertiesConfig</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getEndpoint</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">credentials</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">minioPropertiesConfig</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAccessKey</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> minioPropertiesConfig</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSecretKey</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u4E0A\u4F20" tabindex="-1">\u4E0A\u4F20 <a class="header-anchor" href="#\u4E0A\u4F20" aria-hidden="true">#</a></h3><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#C792EA;">MinioClient</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">PostMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/upload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">upload</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">MultipartFile</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u4E0A\u4F20\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">ObjectWriteResponse</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">putObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PutObjectArgs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">builder</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// \u4E0A\u4F20\u7684\u6876\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bucket</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// \u6587\u4EF6\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">object</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">currentTimeMillis</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOriginalFilename</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[.]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// \u6587\u4EF6\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">contentType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContentType</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// \u6587\u4EF6\u7684\u6D41</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stream</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInputStream</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSize</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u5206\u4EAB\u94FE\u63A5" tabindex="-1">\u5206\u4EAB\u94FE\u63A5 <a class="header-anchor" href="#\u5206\u4EAB\u94FE\u63A5" aria-hidden="true">#</a></h3><h3 id="\u6C38\u4E45\u94FE\u63A5" tabindex="-1">\u6C38\u4E45\u94FE\u63A5 <a class="header-anchor" href="#\u6C38\u4E45\u94FE\u63A5" aria-hidden="true">#</a></h3><h3 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h3><h3 id="\u5206\u7247\u4E0A\u4F20" tabindex="-1">\u5206\u7247\u4E0A\u4F20 <a class="header-anchor" href="#\u5206\u7247\u4E0A\u4F20" aria-hidden="true">#</a></h3>`,17),o=[e];function r(c,t,D,i,y,F){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
