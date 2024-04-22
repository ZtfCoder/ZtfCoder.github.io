import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.4sxKuair.js";const m=JSON.parse('{"title":"linux权限管理","description":"","frontmatter":{"title":"linux权限管理","tags":["linux"],"categories":"linux","abbrlink":"f3633a64"},"headers":[],"relativePath":"src/main/Linux/权限之用户与用户组.md","filePath":"src/main/Linux/权限之用户与用户组.md","lastUpdated":1713751059000}'),p={name:"src/main/Linux/权限之用户与用户组.md"},l=e(`<h3 id="权限之用户与用户组" tabindex="-1">权限之用户与用户组 <a class="header-anchor" href="#权限之用户与用户组" aria-label="Permalink to &quot;权限之用户与用户组&quot;">​</a></h3><p>Linux是一个多用户操作系统，支持多用户同时登录完成想要的工作，可以为不同用户分配不同的权限，以完成不同的任务</p><p>Linux把用户分配到不同的组里，然后给组分配不同的权限</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>r：读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>w：写</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x：执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-：没有权限</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>比如 -rwxr-xr-x. 1 root root</p><p>​ (文件个数) 用户 用户组</p><p>第一个字符-表示是一个文件，d，表示目录</p><p>然后接下来是每三个字符一组</p><p>第一组字符，表示文件所拥者的权限</p><p>第二组字符，表示用户组权限</p><p>第三组字符，表示其他用户权限</p><p>文件拥有者的权限为 rwx :读写执行</p><p>用户组权限 r-x:读,执行</p><p>其他用户权限 r-x:读,执行</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>练习题</span></span>
<span class="line"><span>-rw--wx---   1 mysql1  mysql</span></span>
<span class="line"><span>mysql用户组中包含mysql1  mysql2用户</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql1有什么权限？</span></span>
<span class="line"><span>	用户权限+组权限 = rw- -wx  </span></span>
<span class="line"><span>	综合一下为读，写，执行</span></span>
<span class="line"><span>mysql2有什么权限？</span></span>
<span class="line"><span>	由于文件不属于mysql2，但是在同一个组下，所以</span></span>
<span class="line"><span>	权限 = 组权限 = -wx 写和执行</span></span>
<span class="line"><span>ftp1有什么权限？</span></span>
<span class="line"><span>	ftp1 属于其他用户</span></span>
<span class="line"><span>	则 权限 = 其他用户权限 = --- 无权限</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>查看自己的用户</p><p>whoami</p><p>查看当前用户所属的组</p><p>groups</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>groups 用户名，</span></span>
<span class="line"><span>可以查看该用户所属用户组组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo usermod -G sudo 用户名</span></span>
<span class="line"><span>将该用户加入sudo这个组</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="创建用户" tabindex="-1">创建用户 <a class="header-anchor" href="#创建用户" aria-label="Permalink to &quot;创建用户&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>useradd 用户名称</span></span>
<span class="line"><span>#创建完成后注意修改密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>passwd 用户名</span></span>
<span class="line"><span>#回车后会提示你输入密码，同样，Linux在输入密码时不会显示密码，确保你没有输</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>adduser</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>sudo adderuser 用户名</p><h3 id="用户组" tabindex="-1">用户组 <a class="header-anchor" href="#用户组" aria-label="Permalink to &quot;用户组&quot;">​</a></h3><h4 id="创建用户组" tabindex="-1">创建用户组 <a class="header-anchor" href="#创建用户组" aria-label="Permalink to &quot;创建用户组&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>groupadd 用户组名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="添加用户组成员" tabindex="-1">添加用户组成员 <a class="header-anchor" href="#添加用户组成员" aria-label="Permalink to &quot;添加用户组成员&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpasswd -a 用户名 用户组名</span></span>
<span class="line"><span>#注意创建完用户，用户会自己成立一个用户组，名称就是用户名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="添加管理员" tabindex="-1">添加管理员 <a class="header-anchor" href="#添加管理员" aria-label="Permalink to &quot;添加管理员&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpasswd -A 用户 用户组名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="删除用户" tabindex="-1">删除用户 <a class="header-anchor" href="#删除用户" aria-label="Permalink to &quot;删除用户&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>userdel -r 用户名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用了-r</span></span>
<span class="line"><span>会将该用户的工作目录一并删除，如果不添加，则会在/home 目录会该用户保留工作目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="删除用户组" tabindex="-1">删除用户组 <a class="header-anchor" href="#删除用户组" aria-label="Permalink to &quot;删除用户组&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>groupdel </span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果要删除的用户组仍存在某些用户，则必须要删除这些用户，才能删除用户组</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="切换用户" tabindex="-1">切换用户 <a class="header-anchor" href="#切换用户" aria-label="Permalink to &quot;切换用户&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>su 用户名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用su切换用户之后，使用who am i 命令查看后，任然是显示的最开始的用户名，而用whoami 则显示的是当前登录的用户9T8dUk2U</p><h3 id="权限分配" tabindex="-1">权限分配 <a class="header-anchor" href="#权限分配" aria-label="Permalink to &quot;权限分配&quot;">​</a></h3><h4 id="修改文件权限-chmod" tabindex="-1">修改文件权限（chmod） <a class="header-anchor" href="#修改文件权限-chmod" aria-label="Permalink to &quot;修改文件权限（chmod）&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>r = 4 ；w = 2 ; x = 1</span></span>
<span class="line"><span>例如：</span></span>
<span class="line"><span>	chmod 777 /home/xiaofei/text</span></span>
<span class="line"><span>第一个数字为，拥有者权限</span></span>
<span class="line"><span>第二个数字为，用户组权限</span></span>
<span class="line"><span>第三个数字为，其他用户权限</span></span>
<span class="line"><span>使用ll指令查看为</span></span>
<span class="line"><span>-rwxrwxrwx.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#注意 每一个权限字母的位置是固定，并且文件路径使用绝对路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>给sh文件添加可执行权限</span></span>
<span class="line"><span>chmod +x *.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h4><h4 id="更改文件的所有者-chown" tabindex="-1">更改文件的所有者（chown） <a class="header-anchor" href="#更改文件的所有者-chown" aria-label="Permalink to &quot;更改文件的所有者（chown）&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#只有系统中的管理员才有这个权限</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chown 用户 文件或者目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使用绝对路径</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-label="Permalink to &quot;&quot;">​</a></h4><h4 id="更改文件的用户组-chgrp" tabindex="-1">更改文件的用户组（chgrp） <a class="header-anchor" href="#更改文件的用户组-chgrp" aria-label="Permalink to &quot;更改文件的用户组（chgrp）&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>chgrp 用户组 文件或目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#使用绝对路径</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-label="Permalink to &quot;&quot;">​</a></h4>`,48),i=[l];function r(c,t,d,b,o,u){return n(),a("div",null,i)}const v=s(p,[["render",r]]);export{m as __pageData,v as default};
