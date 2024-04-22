import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1baa841b.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/main/es/es查询.md","filePath":"src/main/es/es查询.md","lastUpdated":1713749248000}'),p={name:"src/main/es/es查询.md"},o=l(`<h2 id="聚合桶分页" tabindex="-1">聚合桶分页 <a class="header-anchor" href="#聚合桶分页" aria-label="Permalink to &quot;聚合桶分页&quot;">​</a></h2><div class="language-elm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">elm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">interface_indicator</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">_search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;aggs&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">&quot;cardinality&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;field&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;url&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">   },</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">&quot;terms&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;field&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;size&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">     },</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">&quot;aggs&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;userCount&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">&quot;cardinality&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { # cardinality 表示统计不同值数据</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">&quot;field&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;userID&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">       },</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;pageCount&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">&quot;cardinality&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">&quot;field&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pageUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">       },</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;avg&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">&quot;avg&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">&quot;field&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;duration&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">       },</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;va&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">&quot;bucket_sort&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">&quot;from&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">&quot;size&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;size&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> # 表示只查询聚合数据</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">GET</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">interface_indicator</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">_search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;aggs&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#032F62;">&quot;cardinality&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;field&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;url&quot;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">   },</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#032F62;">&quot;terms&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;field&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;size&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">     },</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#032F62;">&quot;aggs&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;userCount&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#032F62;">&quot;cardinality&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> { # cardinality 表示统计不同值数据</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#032F62;">&quot;field&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;userID&quot;</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">       },</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;pageCount&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#032F62;">&quot;cardinality&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#032F62;">&quot;field&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pageUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">       },</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;avg&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#032F62;">&quot;avg&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#032F62;">&quot;field&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;duration&quot;</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">       },</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;va&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#032F62;">&quot;bucket_sort&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#032F62;">&quot;from&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#032F62;">&quot;size&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;size&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> # 表示只查询聚合数据</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="sql" tabindex="-1">sql <a class="header-anchor" href="#sql" aria-label="Permalink to &quot;sql&quot;">​</a></h2><div class="language-elm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">elm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">GET</span><span style="color:#E1E4E8;"> _sql?format</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">txt</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;query&quot;</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">  SELECT pageUrl ,count(pageUrl)as pageUrlCount ,</span></span>
<span class="line"><span style="color:#9ECBFF;">  avg(value) ,(select count(userID) FROM &quot;basic_indicator&quot; ) AS S</span></span>
<span class="line"><span style="color:#9ECBFF;">  FROM &quot;basic_indicator&quot; </span></span>
<span class="line"><span style="color:#9ECBFF;">  where appId=&#39;b2FdF9cb-1EE7-Dc6e-de9C-1cAcf37dcdd5&#39; and mainType=2 and subType=2002</span></span>
<span class="line"><span style="color:#9ECBFF;">  group by pageUrl,userID  order by pageUrlCount desc </span></span>
<span class="line"><span style="color:#9ECBFF;">  </span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">GET</span><span style="color:#24292E;"> _sql?format</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">txt</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;query&quot;</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">  SELECT pageUrl ,count(pageUrl)as pageUrlCount ,</span></span>
<span class="line"><span style="color:#032F62;">  avg(value) ,(select count(userID) FROM &quot;basic_indicator&quot; ) AS S</span></span>
<span class="line"><span style="color:#032F62;">  FROM &quot;basic_indicator&quot; </span></span>
<span class="line"><span style="color:#032F62;">  where appId=&#39;b2FdF9cb-1EE7-Dc6e-de9C-1cAcf37dcdd5&#39; and mainType=2 and subType=2002</span></span>
<span class="line"><span style="color:#032F62;">  group by pageUrl,userID  order by pageUrlCount desc </span></span>
<span class="line"><span style="color:#032F62;">  </span></span>
<span class="line"><span style="color:#032F62;">  &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,4),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{q as __pageData,b as default};
