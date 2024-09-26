import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.sGs2IBkb.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"main/Java/jdk8新增的时间类.md","filePath":"main/Java/jdk8新增的时间类.md","lastUpdated":1669525263000}'),p={name:"main/Java/jdk8新增的时间类.md"};function e(t,s,h,k,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<p>jdk 自带的时间类 Date 并不好用,无法支持对时间的操作,增加天数,月数,等等操作</p><p>jdk 8 新增了 几个操作时间和日期的类的</p><h3 id="localdate" tabindex="-1">LocalDate <a class="header-anchor" href="#localdate" aria-label="Permalink to &quot;LocalDate&quot;">​</a></h3><p>LocalDate类实例是一个不可变对象(每次调用修改的方法后会返回新的对象,原对象信息不变)，只包含日期，不含有时间信息，也不带时区信息</p><p><strong>快速使用</strong></p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取今天的日期</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDate now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//添加一天</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDate date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ChronoUnit.DAYS);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加一个月</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDate date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ChronoUnit.MONTHS);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 构建一个日期  2022-11-11</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDate of </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2022</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断当前时间是否在 of 时间之后</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nowAfter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isAfter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(of);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断当前时间是否在 of 时间之前</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nowBefore </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(of);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>ChronoUnit 是一个时间的枚举类,里面包含 秒,分,小时,天,月,年,等单位</strong></p><p><strong>使用plus 方法需要加上你需要添加的日期的单位</strong></p><h3 id="localtime" tabindex="-1">LocalTime <a class="header-anchor" href="#localtime" aria-label="Permalink to &quot;LocalTime&quot;">​</a></h3><p>LocalTime只包含时间信息(<code>00:02:10</code>)，不包含日期信息</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取当前的时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalTime localTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//根据一个字符串转换成 LocalTime 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalTime parse </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12:23:20&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前时间加上 10秒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalTime time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ChronoUnit.SECONDS);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>LocalTime 对象 也包含 LocalDate 常见的时间操作方法, plus,isAfter 等等</p><h3 id="localdatetime" tabindex="-1">LocalDateTime <a class="header-anchor" href="#localdatetime" aria-label="Permalink to &quot;LocalDateTime&quot;">​</a></h3><p>LocalDate和LocalTime的结合体，既有时间信息，又有日期信息</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取当前的时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDateTime now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前日期加上1年</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDateTime time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ChronoUnit.YEARS);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果要将上面的时间和日期类转成我们常见的字符串 格式 需要使用格式化操作</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DateTimeFormatter formatter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DateTimeFormatter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ofPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(formatter);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这样就能得到 我们常见的 <code>yyyy-MM-dd HH:mm:ss</code> 这种格式</p><p>这几个类 拥有的对时间和日期操作的方法基本上相同,用法也是一致的</p><p>最后这些时间类的相互转换</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Date转LocalDateTime</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Date date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDateTime time1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ofInstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toInstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), ZoneOffset.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Date转LocalDate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDate date1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ofInstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toInstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),ZoneOffset.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLocalDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//LocalDateTime转Date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LocalDateTime localDateTime3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Instant instant3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localDateTime3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">atZone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ZoneId.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toInstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Date date3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(instant3);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,21)]))}const o=i(p,[["render",e]]);export{c as __pageData,o as default};
