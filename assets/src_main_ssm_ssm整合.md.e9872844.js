import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1baa841b.js";const m=JSON.parse('{"title":"spring ssm整合","description":"","frontmatter":{"title":"spring ssm整合","tags":["java","spring"],"categories":"ssm","abbrlink":"1e8f5006"},"headers":[],"relativePath":"src/main/ssm/ssm整合.md","filePath":"src/main/ssm/ssm整合.md","lastUpdated":1713749248000}'),p={name:"src/main/ssm/ssm整合.md"},o=l(`<h1 id="ssm整合" tabindex="-1">SSM整合 <a class="header-anchor" href="#ssm整合" aria-label="Permalink to &quot;SSM整合&quot;">​</a></h1><h2 id="mybatis-与spring-springmvc整合" tabindex="-1">mybatis 与spring springmvc整合 <a class="header-anchor" href="#mybatis-与spring-springmvc整合" aria-label="Permalink to &quot;mybatis 与spring springmvc整合&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">讲mybatis-config.xml中配置数据源,配置在spring文件中</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">讲mybatis-config.xml中配置数据源,配置在spring文件中</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!--配置数据源对象 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!--读取连接信息配置文件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">context:property-placeholder</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;classpath:dp.properties&quot;</span><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--读取配置文件 spring 整合mybatis --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;druid&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;com.alibaba.druid.pool.DruidDataSource&quot;</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;driverClassName&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${jdbc.driver}&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${jdbc.url}&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${jdbc.username}&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${jdbc.password}&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!--sessionFactory 工厂--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sessionFactory&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;org.mybatis.spring.SqlSessionFactoryBean&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dataSource&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;druid&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--添加mybatis 配置文件--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;configLocation&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;classpath:mybatis-config-spring.xml&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--添加mapping文件导入--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mapperLocations&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;classpath:mybatis-mapping/AccountMapping.xml&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!--mybatis 包扫描--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;basePackage&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;top.wupeiyao.dao&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 这里扫描的包指的动态代理的接口--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!--配置数据源对象 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--读取连接信息配置文件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">context:property-placeholder</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;classpath:dp.properties&quot;</span><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--读取配置文件 spring 整合mybatis --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">bean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;druid&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;com.alibaba.druid.pool.DruidDataSource&quot;</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;driverClassName&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${jdbc.driver}&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${jdbc.url}&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;username&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${jdbc.username}&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${jdbc.password}&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">bean</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--sessionFactory 工厂--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">bean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sessionFactory&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;org.mybatis.spring.SqlSessionFactoryBean&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dataSource&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;druid&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--添加mybatis 配置文件--&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;configLocation&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;classpath:mybatis-config-spring.xml&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--添加mapping文件导入--&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mapperLocations&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;classpath:mybatis-mapping/AccountMapping.xml&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">bean</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--mybatis 包扫描--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">bean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;basePackage&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;top.wupeiyao.dao&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 这里扫描的包指的动态代理的接口--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">bean</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h2><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!--事务管理器--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;transactionManager&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dataSource&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;druid&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!--配置事务增强--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">tx:advice</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;interceptor&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">tx:attributes</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">tx:method</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">tx:attributes</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">tx:advice</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">aop:config</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">aop:advisor</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">advice-ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;interceptor&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pointcut</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;execution(* top.wupeiyao.service.imp.*.*(..))&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">aop:config</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--事务管理器--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">bean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;transactionManager&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dataSource&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;druid&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">bean</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--配置事务增强--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">tx:advice</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;interceptor&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">tx:attributes</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">tx:method</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">tx:attributes</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">tx:advice</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">aop:config</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">aop:advisor</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">advice-ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;interceptor&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pointcut</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;execution(* top.wupeiyao.service.imp.*.*(..))&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">aop:config</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6),t=[o];function e(r,c,E,y,i,u){return a(),n("div",null,t)}const F=s(p,[["render",e]]);export{m as __pageData,F as default};
