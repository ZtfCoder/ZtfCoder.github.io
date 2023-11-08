import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.1baa841b.js";const m=JSON.parse('{"title":"mysql DML","description":"","frontmatter":{"title":"mysql DML","tags":"mysql","categories":"mysql","abbrlink":"541ac0a9"},"headers":[],"relativePath":"main/mysql/数据库DML.md","filePath":"main/mysql/数据库DML.md","lastUpdated":1699426983000}'),s={name:"main/mysql/数据库DML.md"},o=r('<h2 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-label="Permalink to &quot;插入&quot;">​</a></h2><p>insert into 表名(字段名，...) values (值 1，...);</p><p>还有一种 向表中插入所有列:</p><p>​ insert into 表名 values(值 1，...);</p><p>例如：</p><p>insert into departments(department_id,manager_id) values(280,200); 注意：</p><ol><li>​ 列名数与 values 后面的值的个数相等；</li><li>​ 列的顺序与插入的值的顺序一致 ​ 列名的类型与插入的值要一致</li><li>​ 值如果是字符串或者日期需要加引号 ​ 插入值的时候不能超过最大长度</li></ol><h2 id="修改" tabindex="-1">修改 <a class="header-anchor" href="#修改" aria-label="Permalink to &quot;修改&quot;">​</a></h2><p>update 表名 set 字段=新值,字段=新值 【where 条件】</p><p>注意：</p><p>​ 1.修改的数据必须和原字段数据类型相同</p><p>​ 2.修改的值不能超过限定长度</p><p>​ 3.值如果是字符串或者日期要加‘’(单引号)</p><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h2><p>delete from 表名 【where 筛选条件】</p><p>truncate table 表名 区别：delete 可以通过事务找回数据，truncate 不可以</p><p>删除表</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">drop table 表名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">drop table 表名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果有外键关联的表,删除相关父表时,必须先删除外键</p><h2 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h2><h3 id="为什么需要事务" tabindex="-1">为什么需要事务 <a class="header-anchor" href="#为什么需要事务" aria-label="Permalink to &quot;为什么需要事务&quot;">​</a></h3><p>​ 在数据修改的中途，突发紧急情况时会造成数据不一致，所以我们需要事务</p><h3 id="什么时事务" tabindex="-1">什么时事务 <a class="header-anchor" href="#什么时事务" aria-label="Permalink to &quot;什么时事务&quot;">​</a></h3><p>​ 事务就是一组不可拆分的 DML sql 语句</p><p>​ 例如上述两个 sql，要不然都成功，要不然都失败。</p><h3 id="事务的四个基本属性-理论-acid" tabindex="-1">事务的四个基本属性（理论）(ACID) <a class="header-anchor" href="#事务的四个基本属性-理论-acid" aria-label="Permalink to &quot;事务的四个基本属性（理论）(ACID)&quot;">​</a></h3><p>A 原子性：不可拆分 一套逻辑操作,<strong>要么同时完成,要么都失败</strong></p><p>C 一致性：数据保持逻辑一致性 <strong>事务执行之前与事务执行之后 总的数据保持一致</strong></p><p>I 隔离性：一个事务执行时不可被打断 <strong>一个事务在执行的时候,不会影响其他事务的数据</strong></p><p>D 持久性：<strong>事务结束后，数据永久保存,不能回滚</strong></p><h3 id="事务的隔离级别-熟悉" tabindex="-1">事务的隔离级别（熟悉） <a class="header-anchor" href="#事务的隔离级别-熟悉" aria-label="Permalink to &quot;事务的隔离级别（熟悉）&quot;">​</a></h3><p>并发事务</p><p><strong>脏读</strong>:一个线程读取到另外的线程未提交的数据</p><p><strong>不可重复读</strong>: 一个事务读取到另外一个事务 进行修改 已经提交的数据</p><p><strong>幻读</strong>:一个事务读取到另外一个事务进行增加,删除后并提交的数据</p><p>因此,数据库,提供了 4 种隔离级别</p><p>1 :READ-UNCOMMITTED (<strong>读未提交</strong>) 以上 3 种并发事务都可能发生</p><p>2.READ-COMMITTED（RC）( <strong>读已提交</strong>) 可以解决 <strong>脏读</strong></p><p>3.REPEATABLE-READ（RR）(<strong>可重复读</strong>) 可以解决 <strong>脏读</strong>和<strong>不可重复读</strong></p><p>4.SERIALIZABLE (<strong>串行化</strong>) 可以解决以上所有问题,但是会导致 ,一个事务未提交,其他事务,不可以进行</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><h3 id="如何实现事务" tabindex="-1">如何实现事务： <a class="header-anchor" href="#如何实现事务" aria-label="Permalink to &quot;如何实现事务：&quot;">​</a></h3><h4 id="_1-设置为不自动提交" tabindex="-1">1.设置为不自动提交 <a class="header-anchor" href="#_1-设置为不自动提交" aria-label="Permalink to &quot;1.设置为不自动提交&quot;">​</a></h4><p>set autocommit=0;</p><h4 id="_2-开启事务" tabindex="-1">2.开启事务 <a class="header-anchor" href="#_2-开启事务" aria-label="Permalink to &quot;2.开启事务&quot;">​</a></h4><p>start transaction;</p><h4 id="_3-执行-sql" tabindex="-1">3.执行 sql <a class="header-anchor" href="#_3-执行-sql" aria-label="Permalink to &quot;3.执行 sql&quot;">​</a></h4><p>update users set balance=balance-10 where id=1; update users set balance=balance+10 where id=2;</p><h4 id="_4-提交事务-事务结束。" tabindex="-1">4.提交事务,事务结束。 <a class="header-anchor" href="#_4-提交事务-事务结束。" aria-label="Permalink to &quot;4.提交事务,事务结束。&quot;">​</a></h4><p>commit;</p><h4 id="如果出了问题-就回滚。" tabindex="-1">如果出了问题，就回滚。 <a class="header-anchor" href="#如果出了问题-就回滚。" aria-label="Permalink to &quot;如果出了问题，就回滚。&quot;">​</a></h4><p>rollback;</p>',52),n=[o];function l(i,p,h,d,c,u){return e(),t("div",null,n)}const q=a(s,[["render",l]]);export{m as __pageData,q as default};
