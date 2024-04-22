import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1baa841b.js";const m=JSON.parse('{"title":"常见的配置代码(待更新)","description":"","frontmatter":{"title":"常见的配置代码(待更新)","tags":["java"],"categories":"常用配置代码","abbrlink":"9d4c8809"},"headers":[],"relativePath":"src/main/java 工具类/常用工具类.md","filePath":"src/main/java 工具类/常用工具类.md","lastUpdated":1713749248000}'),p={name:"src/main/java 工具类/常用工具类.md"},o=l(`<h2 id="md5-加密" tabindex="-1">MD5 加密 <a class="header-anchor" href="#md5-加密" aria-label="Permalink to &quot;MD5 加密&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.io.UnsupportedEncodingException;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.security.MessageDigest;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.security.NoSuchAlgorithmException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * MD5加密工具类</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MD5Utils</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">getMD5Str</span><span style="color:#E1E4E8;">(String </span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        MessageDigest messageDigest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            messageDigest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> MessageDigest.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;MD5&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            messageDigest.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            messageDigest.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(str.</span><span style="color:#B392F0;">getBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (NoSuchAlgorithmException </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;NoSuchAlgorithmException caught!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            System.</span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (UnsupportedEncodingException </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            e.</span><span style="color:#B392F0;">printStackTrace</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">[] byteArray </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> messageDigest.</span><span style="color:#B392F0;">digest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        StringBuffer md5StrBuff </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StringBuffer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> byteArray.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Integer.</span><span style="color:#B392F0;">toHexString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xFF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> byteArray[i]).</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                md5StrBuff.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(Integer.</span><span style="color:#B392F0;">toHexString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xFF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> byteArray[i]));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#E1E4E8;">                md5StrBuff.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(Integer.</span><span style="color:#B392F0;">toHexString</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xFF</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> byteArray[i]));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> md5StrBuff.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.io.UnsupportedEncodingException;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.security.MessageDigest;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.security.NoSuchAlgorithmException;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * MD5加密工具类</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MD5Utils</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">getMD5Str</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">str</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        MessageDigest messageDigest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            messageDigest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> MessageDigest.</span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;MD5&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            messageDigest.</span><span style="color:#6F42C1;">reset</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            messageDigest.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(str.</span><span style="color:#6F42C1;">getBytes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (NoSuchAlgorithmException </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;NoSuchAlgorithmException caught!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            System.</span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (UnsupportedEncodingException </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            e.</span><span style="color:#6F42C1;">printStackTrace</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">byte</span><span style="color:#24292E;">[] byteArray </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> messageDigest.</span><span style="color:#6F42C1;">digest</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        StringBuffer md5StrBuff </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StringBuffer</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> byteArray.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Integer.</span><span style="color:#6F42C1;">toHexString</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0xFF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> byteArray[i]).</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                md5StrBuff.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(Integer.</span><span style="color:#6F42C1;">toHexString</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0xFF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> byteArray[i]));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">else</span></span>
<span class="line"><span style="color:#24292E;">                md5StrBuff.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(Integer.</span><span style="color:#6F42C1;">toHexString</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0xFF</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> byteArray[i]));</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> md5StrBuff.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="jdbc-连接参数" tabindex="-1">JDBC 连接参数 <a class="header-anchor" href="#jdbc-连接参数" aria-label="Permalink to &quot;JDBC 连接参数&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">datasource</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jdbc:mysql://localhost:3306/数据库名称?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver-class-name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">root</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">root</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">datasource</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jdbc:mysql://localhost:3306/数据库名称?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver-class-name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">root</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">root</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="maven-编译src" tabindex="-1">maven 编译src <a class="header-anchor" href="#maven-编译src" aria-label="Permalink to &quot;maven 编译src&quot;">​</a></h2><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">&gt;        </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">resource</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">directory</span><span style="color:#E1E4E8;">&gt;src/main/java&lt;/</span><span style="color:#85E89D;">directory</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">includes</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">include</span><span style="color:#E1E4E8;">&gt;**/*.xml&lt;/</span><span style="color:#85E89D;">include</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">includes</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">resource</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">build</span><span style="color:#24292E;">&gt;        </span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">resources</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">resource</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">directory</span><span style="color:#24292E;">&gt;src/main/java&lt;/</span><span style="color:#22863A;">directory</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">includes</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">include</span><span style="color:#24292E;">&gt;**/*.xml&lt;/</span><span style="color:#22863A;">include</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">includes</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">resource</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">resources</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">build</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="分页插件" tabindex="-1">分页插件 <a class="header-anchor" href="#分页插件" aria-label="Permalink to &quot;分页插件&quot;">​</a></h2><p>单独的分页插件</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 分页插件</span></span>
<span class="line"><span style="color:#85E89D;">pagehelper</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">helper-dialect</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mysql</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">params</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">count=countSql</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">support-methods-arguments</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">reasonable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 分页插件</span></span>
<span class="line"><span style="color:#22863A;">pagehelper</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">helper-dialect</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">params</span><span style="color:#24292E;">: </span><span style="color:#032F62;">count=countSql</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">support-methods-arguments</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">reasonable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,9),e=[o];function r(t,c,E,y,i,u){return n(),a("div",null,e)}const d=s(p,[["render",r]]);export{m as __pageData,d as default};
