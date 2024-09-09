import{_ as e,D as t,c as n,I as i,a5 as s,o as r}from"./chunks/framework.DP4ksDbn.js";const g=JSON.parse('{"title":"11-React Navive初识","description":"","frontmatter":{"title":"11-React Navive初识","publish":true},"headers":[],"relativePath":"hxg/13-React基础/11-React Navive初识.md","filePath":"hxg/13-React基础/11-React Navive初识.md","lastUpdated":1725860495000}'),c={name:"hxg/13-React基础/11-React Navive初识.md"},l=s('<h2 id="搭建开发环境" tabindex="-1">搭建开发环境 <a class="header-anchor" href="#搭建开发环境" aria-label="Permalink to &quot;搭建开发环境&quot;">​</a></h2><p>官方文档：<a href="https://reactnative.cn/docs/getting-started.html" target="_blank" rel="noreferrer">https://reactnative.cn/docs/getting-started.html</a></p><h3 id="安装node、homebrew、watchman" tabindex="-1">安装Node、homebrew、Watchman <a class="header-anchor" href="#安装node、homebrew、watchman" aria-label="Permalink to &quot;安装Node、homebrew、Watchman&quot;">​</a></h3><p>安装 homebrew：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装 watchman：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>brew install watchman</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Watchman则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。</p><h3 id="安装-react-native-的命令行工具-react-native-cli" tabindex="-1">安装 React Native 的命令行工具（react-native-cli） <a class="header-anchor" href="#安装-react-native-的命令行工具-react-native-cli" aria-label="Permalink to &quot;安装 React Native 的命令行工具（react-native-cli）&quot;">​</a></h3><p>安装 react-native-cli：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g react-native-cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。</p><h3 id="创建新项目" tabindex="-1">创建新项目 <a class="header-anchor" href="#创建新项目" aria-label="Permalink to &quot;创建新项目&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>react-native init MyApp --version 0.44.3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="编译并运行-react-native-应用" tabindex="-1">编译并运行 React Native 应用 <a class="header-anchor" href="#编译并运行-react-native-应用" aria-label="Permalink to &quot;编译并运行 React Native 应用&quot;">​</a></h3><p>在 ios 模拟器上运行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>react-native run-ios</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><p>官网文档：<a href="https://reactnative.cn/docs/debugging.html" target="_blank" rel="noreferrer">https://reactnative.cn/docs/debugging.html</a></p><h3 id="访问-app-内的开发菜单" tabindex="-1">访问 App 内的开发菜单 <a class="header-anchor" href="#访问-app-内的开发菜单" aria-label="Permalink to &quot;访问 App 内的开发菜单&quot;">​</a></h3><p>如果是在 iOS 模拟器中运行，还可以按下<code>Command + D</code>快捷键，Android 模拟器对应的则是Command⌘ + M（windows 上可能是 F1 或者 F2），或是直接在命令行中运行adb shell input keyevent 82来发送菜单键命令。</p>',21);function p(d,o,h,v,b,u){const a=t("ArticleTopAd");return r(),n("div",null,[i(a),l])}const _=e(c,[["render",p]]);export{g as __pageData,_ as default};
