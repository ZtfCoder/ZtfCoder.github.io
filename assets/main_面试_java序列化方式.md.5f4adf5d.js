import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1baa841b.js";const u=JSON.parse('{"title":"Java 序列化 方式","description":"","frontmatter":{"title":"Java 序列化 方式","tags":["面试"],"categories":"面试","abbrlink":"e463212f"},"headers":[],"relativePath":"main/面试/java序列化方式.md","filePath":"main/面试/java序列化方式.md","lastUpdated":1699426983000}'),p={name:"main/面试/java序列化方式.md"},e=l(`<p>Java 序列化 方式</p><h2 id="serializable" tabindex="-1">Serializable <a class="header-anchor" href="#serializable" aria-label="Permalink to &quot;Serializable&quot;">​</a></h2><p>实现 <code>Serializable</code> 接口</p><p>再添加 常量</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">private</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;">  serialVersionUID </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1L</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">final</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">long</span><span style="color:#24292E;">  serialVersionUID </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1L</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="externalizable" tabindex="-1">Externalizable <a class="header-anchor" href="#externalizable" aria-label="Permalink to &quot;Externalizable&quot;">​</a></h2><p>实现接口 <code>Externalizable</code> 接口</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Externalizable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> java.io.</span><span style="color:#B392F0;">Serializable</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 序列化属性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">writeExternal</span><span style="color:#E1E4E8;">(ObjectOutput </span><span style="color:#FFAB70;">out</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 反序列化,必须按照上方序列化属性的顺序</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">readExternal</span><span style="color:#E1E4E8;">(ObjectInput </span><span style="color:#FFAB70;">in</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException, ClassNotFoundException;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Externalizable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> java.io.</span><span style="color:#6F42C1;">Serializable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 序列化属性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">writeExternal</span><span style="color:#24292E;">(ObjectOutput </span><span style="color:#E36209;">out</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 反序列化,必须按照上方序列化属性的顺序</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">readExternal</span><span style="color:#24292E;">(ObjectInput </span><span style="color:#E36209;">in</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException, ClassNotFoundException;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,8),o=[e];function t(r,c,i,E,y,d){return a(),n("div",null,o)}const v=s(p,[["render",t]]);export{u as __pageData,v as default};
