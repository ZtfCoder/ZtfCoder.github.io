import{_ as r,c as s,j as e,o as a}from"./chunks/framework.sGs2IBkb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/main/docker/mysql-docker.md","filePath":"src/main/docker/mysql-docker.md","lastUpdated":1701252050000}'),t={name:"src/main/docker/mysql-docker.md"};function l(c,o,n,d,m,p){return a(),s("div",null,o[0]||(o[0]=[e("p",null,"进入容器",-1),e("p",null,"docker exec -it fe29171467c4 /bin/bash",-1),e("p",null,"导出sql 文件",-1),e("p",null,"mysqldump -u root -p gastrodia > /home/gastrodia.sql",-1),e("p",null,"从容器中拷贝出来",-1),e("p",null,"docker cp fe29171467c4:/home/gastrodia.sql /home",-1)]))}const k=r(t,[["render",l]]);export{u as __pageData,k as default};
