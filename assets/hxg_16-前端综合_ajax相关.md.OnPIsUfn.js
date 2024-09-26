import{_ as e,c as s,a2 as n,o as t}from"./chunks/framework.sGs2IBkb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hxg/16-前端综合/ajax相关.md","filePath":"hxg/16-前端综合/ajax相关.md","lastUpdated":1725860495000}'),p={name:"hxg/16-前端综合/ajax相关.md"};function r(o,a,l,i,c,d){return t(),s("div",null,a[0]||(a[0]=[n(`<h3 id="jsonp-ajax" tabindex="-1">jsonp ajax <a class="header-anchor" href="#jsonp-ajax" aria-label="Permalink to &quot;jsonp ajax&quot;">​</a></h3><p>ajax跨域访问是一个老问题了，解决方法很多，比较常用的是JSONP方法，JSONP方法是一种非官方方法，而且这种方法只支持GET方式，不如POST方式安全。</p><p>意思是说，如果后台返回的数据类型是jsonp，那么前端的请求方式只能是get，不能是post。</p><p>如果跨域使用POST方式，可以使用创建一个隐藏的iframe来实现，与ajax上传图片原理一样，但这样会比较麻烦。</p><p>因此，在<strong>前端使用post方法，数据类型是json</strong>的情况下，如果想跨域的话，可以通过设置Access-Control-Allow-Origin来实现跨域访问比较简单。</p><p>解决办法：</p><p>在 Response header中加入这三行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> response.headers[&#39;Access-Control-Allow-Origin&#39;] = &#39;*&#39;</span></span>
<span class="line"><span>response.headers[&#39;Access-Control-Allow-Methods&#39;] = &#39;POST&#39;</span></span>
<span class="line"><span>response.headers[&#39;Access-Control-Allow-Headers&#39;] = &#39;x-requested-with,content-type&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>参考链接：</p><ul><li><a href="https://blog.csdn.net/fdipzone/article/details/46390573/" target="_blank" rel="noreferrer">ajax 设置Access-Control-Allow-Origin实现跨域访问</a></li></ul>`,10)]))}const x=e(p,[["render",r]]);export{u as __pageData,x as default};
