import{_ as s,a as n,c as a,b as l}from"./app.062e7d47.js";const i=JSON.parse('{"title":"\u5E38\u89C1\u7684\u914D\u7F6E\u4EE3\u7801(\u5F85\u66F4\u65B0)","description":"","frontmatter":{"title":"\u5E38\u89C1\u7684\u914D\u7F6E\u4EE3\u7801(\u5F85\u66F4\u65B0)","tags":["java"],"categories":"\u5E38\u7528\u914D\u7F6E\u4EE3\u7801","abbrlink":"9d4c8809"},"headers":[{"level":2,"title":"MD5 \u52A0\u5BC6","slug":"md5-\u52A0\u5BC6","link":"#md5-\u52A0\u5BC6","children":[]},{"level":2,"title":"JDBC \u8FDE\u63A5\u53C2\u6570","slug":"jdbc-\u8FDE\u63A5\u53C2\u6570","link":"#jdbc-\u8FDE\u63A5\u53C2\u6570","children":[]},{"level":2,"title":"maven \u7F16\u8BD1src","slug":"maven-\u7F16\u8BD1src","link":"#maven-\u7F16\u8BD1src","children":[]},{"level":2,"title":"\u5206\u9875\u63D2\u4EF6","slug":"\u5206\u9875\u63D2\u4EF6","link":"#\u5206\u9875\u63D2\u4EF6","children":[]}],"relativePath":"main/java \u5DE5\u5177\u7C7B/\u5E38\u7528\u5DE5\u5177\u7C7B.md","lastUpdated":1662368311000}'),p={name:"main/java \u5DE5\u5177\u7C7B/\u5E38\u7528\u5DE5\u5177\u7C7B.md"},o=l(`<h2 id="md5-\u52A0\u5BC6" tabindex="-1">MD5 \u52A0\u5BC6 <a class="header-anchor" href="#md5-\u52A0\u5BC6" aria-hidden="true">#</a></h2><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">io</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">UnsupportedEncodingException</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">security</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">MessageDigest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">security</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">NoSuchAlgorithmException</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * MD5\u52A0\u5BC6\u5DE5\u5177\u7C7B</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MD5Utils</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getMD5Str</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">MessageDigest</span><span style="color:#A6ACCD;"> messageDigest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            messageDigest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MessageDigest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MD5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            messageDigest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reset</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            messageDigest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBytes</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">NoSuchAlgorithmException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NoSuchAlgorithmException caught!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">UnsupportedEncodingException</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> byteArray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> messageDigest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">digest</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">StringBuffer</span><span style="color:#A6ACCD;"> md5StrBuff </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StringBuffer</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> byteArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toHexString</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0xFF</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> byteArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]).</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                md5StrBuff</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toHexString</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0xFF</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> byteArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]));</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">                md5StrBuff</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toHexString</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0xFF</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> byteArray</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> md5StrBuff</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="jdbc-\u8FDE\u63A5\u53C2\u6570" tabindex="-1">JDBC \u8FDE\u63A5\u53C2\u6570 <a class="header-anchor" href="#jdbc-\u8FDE\u63A5\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">datasource</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jdbc:mysql://localhost:3306/\u6570\u636E\u5E93\u540D\u79F0?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver-class-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="maven-\u7F16\u8BD1src" tabindex="-1">maven \u7F16\u8BD1src <a class="header-anchor" href="#maven-\u7F16\u8BD1src" aria-hidden="true">#</a></h2><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resources</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">src/main/java</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">includes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">**/*.xml</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">includes</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resources</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5206\u9875\u63D2\u4EF6" tabindex="-1">\u5206\u9875\u63D2\u4EF6 <a class="header-anchor" href="#\u5206\u9875\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u5355\u72EC\u7684\u5206\u9875\u63D2\u4EF6</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#676E95;"># \u5206\u9875\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">pagehelper</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">helper-dialect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">count=countSql</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">support-methods-arguments</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">reasonable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,D,y,F,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
