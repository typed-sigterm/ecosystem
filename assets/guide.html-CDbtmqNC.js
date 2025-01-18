import{_ as t,c as l,a as i,e as a,b as h,f as n,d as p,r as k,o as d}from"./app-COIQldfe.js";const r={};function c(g,s){const e=k("RouteLink");return d(),l("div",null,[s[3]||(s[3]=i("h1",{id:"指南",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#指南"},[i("span",null,"指南")])],-1)),i("p",null,[s[1]||(s[1]=a("相比于 ")),h(e,{to:"/zh/plugins/development/palette.html"},{default:n(()=>s[0]||(s[0]=[i("code",null,"@vuepress/plugin-palette",-1)])),_:1}),s[2]||(s[2]=a(" 插件，本插件允许你:"))]),s[4]||(s[4]=p(`<ul><li>基于用户配置派生相关样式</li><li>在插件中调用并提供和主题类似的样式自定义</li><li>跨越多个插件或主题通过 id 选项分组应用</li></ul><p>在使用插件前，你需要了解 id 选项，以及三个样式概念: 配置、调色板和派生器。</p><h2 id="id-选项" tabindex="-1"><a class="header-anchor" href="#id-选项"><span>ID 选项</span></a></h2><p>首先，你应该了解此插件的设计目标是提供跨越插件和主题的支持 (而并不像官方插件仅面向主题)。</p><p>我们提供了 <code>id</code> 选项来完成此目标，它将允许你:</p><ul><li><p>在插件 (或主题) 间共享同一个样式系统。</p><p>所有别名和模块名称都具有 ID 前缀，这意味着你可以在你的插件 (或主题) 中使用一套样式变量来统一你的样式，而不会受到其他插件 (或主题) 的影响。</p><p>用户可以在同一个文件中配置所有颜色变量、断点和其他样式配置，并自动应用在具有相同 ID 的主题和插件上。</p><div class="hint-container tip"><p class="hint-container-title">示例</p><p><code>vuepress-theme-hope</code> 及其它的相关插件都使用相同 ID <code>hope</code> 调用插件，因此用户在主题中配置的样式会自动在所有插件中生效。</p></div></li><li><p>设置不同的 ID 时，插件们和主题之间互相完全独立。我们建议你使用你的插件名称设置 <code>id</code> 变量。</p><p>使用默认设置，用户将在 <code>.vuepress/styles</code> 文件夹下设置你的插件样式，其中 Sass 文件以你的 ID 前缀开头。你可以使用 <code>\${id}-config</code> 和 <code>\${id}-palette</code> 访问所需的变量。</p><div class="hint-container tip"><p class="hint-container-title">示例</p><p><code>vuepress-theme-hope</code> 正在使用 ID <code>&quot;hope&quot;</code>，而假设 <code>vuepress-plugin-abc</code> 正在使用 <code>&quot;abc&quot;</code>。他们可以分别使用 <code>hope-config</code> <code>hope-palette</code> 和 <code>abc-config</code> <code>abc-palette</code> 模块名称获取自己的变量。</p></div></li><li><p>通过相同 ID 调用插件不会有任何副作用。</p><div class="hint-container tip"><p class="hint-container-title">示例</p><p><code>vuepress-theme-hope</code> 及其它的相关插件都使用相同 ID <code>hope</code> 调用插件。</p></div></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>配置文件仅用于提供 Sass 变量。它所包含 Sass 变量可以在其他文件中通过 <code>\${id}-config</code> 使用。</p><p>你可以指定一个文件作为用户配置文件。这样你可以稍后在插件 Sass 文件中访问包含每个变量的模块。此外，你还可以提供默认配置文件，你可以在其中使用 <code>!default</code> 为变量设置默认值。</p><details class="hint-container details"><summary>一个例子</summary><p>假设，你正在 <code>vuepress-plugin-abc</code> 中这样调用插件:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useSassPalette</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  defaultConfig</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress-plugin-abc/styles/config.scss&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>用户配置:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$navbar-height</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>默认配置:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$navbar-height</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> !default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$sidebar-width</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> !default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>你可以在插件 Sass 文件中获取到如下变量:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Vue 单文件组件的 &lt;style lang=&quot;scss&quot;&gt; 块或脚本中直接导入的 Scss 文件中</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@debug</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> abc-config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$navbar-height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 3.5rem</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@debug</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> abc-config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$sidebar-width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 18rem</span></span></code></pre></div></details><h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h3><p>我们利用 <code>additionalData</code> 选项让 <code>\${id}-config</code> 模块在你的样式中可用，但这有一些限制。</p><p><code>additionalData</code> 仅适用于 SASS 入口，因此 <code>\${id}-config</code> 仅适用于:</p><ul><li>Vue 单文件组件的 <code>&lt;style lang=&quot;scss&quot;&gt;</code> 块</li><li>脚本中直接导入的 scss 文件 (例如: 客户端应用程序增强文件中的 <code>import &quot;./a-scss-file.scss&quot;</code>) 。</li></ul><p>如果 scss 文件不是直接导入的，而是通过 <code>@use</code> 或 <code>@import</code> API 导入的，模块将不可用。因此，在这种情况下，你应该通过 <code>@use &quot;@sass-palette/\${id}-config&quot;;</code> 手动导入模块。</p><h2 id="调色板" tabindex="-1"><a class="header-anchor" href="#调色板"><span>调色板</span></a></h2><p>调色板文件用于 CSS 变量注入，其中每个变量将被注入到 root 中，变量名称转换为 kebab-name 格式。</p><p>你可以指定一个文件作为用户调色板文件，默认文件名是 <code>\${id}-palette.scss</code>。 此外，你还可以提供一个默认的调色板文件，你可以在其中使用 <code>!default</code> 为变量设置默认值。</p><details class="hint-container details"><summary>一个例子</summary><p>假设，你正在 <code>vuepress-plugin-abc</code> 中这样调用插件:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useSassPalette</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  defaultPalette</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress-plugin-abc/styles/palette.scss&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div><p>用户调色板:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$color-a</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>默认调色板:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$color-a</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> !default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$color-b</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">green</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> !default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>那么 root 选择器将会拥有下列 CSS 变量:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --color-a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --color-b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></details><p>和配置文件一样，调色板文件提供了一个 <code>\${$id}-palette</code> 模块 (也包含生成器的值)，它也受 <code>additionalData</code> 选项的限制，因此如果你想在其他 Sass 文件中使用它，你应该手动导入模块。</p><h3 id="颜色设置" tabindex="-1"><a class="header-anchor" href="#颜色设置"><span>颜色设置</span></a></h3><p>由于默认主题支持深色模式，因此你可能希望在浅色模式和深色模式下使用不同的颜色。</p><p>为此，你应该使用包含 <code>light</code> 和 <code>dark</code> 键的映射设置颜色变量。 稍后，此插件将为你生成不同的颜色。</p><details class="hint-container details"><summary>一个例子</summary><div class="language-scss line-numbers-mode" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 用户调色板</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$text-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: (</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  light</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">222</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  dark</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">999</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 默认调色板</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$text-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: (</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  light</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">2c3e50</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  dark</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">9e9e9e</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$bg-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: (</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  light</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  dark</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">1e1e1e</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你会得到:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --text-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">222</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --bg-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">data-theme</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dark</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --text-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">999</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --bg-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">1e1e1e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></details><h3 id="允许的变量类型" tabindex="-1"><a class="header-anchor" href="#允许的变量类型"><span>允许的变量类型</span></a></h3><p>调色板中只允许使用颜色 (或深浅模式颜色对象)、长度和字符串。任何其他类型都将被删除。</p><div class="hint-container tip"><p class="hint-container-title">为什么除了字符串只允许颜色和长度</p><p>在常见情况下，你可能只想计算颜色和长度。所以放弃其他类型支持是相当安全的，因为你想要的任何其他值都可以转换为字符串。</p><details class="hint-container details"><summary>示例</summary><p>如果你想要一个 <code>--move-transition</code> 和 <code>width 0.3s ease</code>，你可以使用字符串:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 这将被 sass 视为一个类型为 (length, time, function) 的列表</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 并会触发警告并被插件删除</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$moveTransition</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">width</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.3</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 这会得到你想要的</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// :root {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//   --move-transition: width 0.3s ease</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$moveTransition</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;width 0.3s ease&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></details></div><h2 id="辅助模块" tabindex="-1"><a class="header-anchor" href="#辅助模块"><span>辅助模块</span></a></h2><p>我们公开了 <code>@vuepress/plugin-sass-palette</code> 使用的内部函数，作为辅助模块。</p><p>你可以通过 <code>@sass-palette/helper</code> 别名使用此辅助模块，并调用其函数来自己实现类似的功能。</p><h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器"><span>生成器</span></a></h2><p>生成器文件面向开发人员使用配置或调色板文件变量生成衍生值。</p><p>你可以在此文件中直接获取调色板的变量值，并生成基于它们的新值。</p><p>生成器变量也将像调色板一样作为 CSS 变量注入，它们也在调色板模块中可用。</p><details class="hint-container details"><summary>示例</summary><p>你可能想要一个基于 <code>$theme-color</code> 的 <code>$theme-color-light</code>。所以你可以这样写一个生成器:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;sass:color&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@sass-palette/helper&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$theme-color-light</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: (</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  light</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scale</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">helper</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">get-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$theme-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$lightness</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  dark</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scale</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">helper</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">get-dark-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$theme-color</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$lightness</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">!default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>你也可以通过导入配置文件来基于配置文件提供的变量生成值:</p><div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// id 为 &quot;abc&quot; 的生成器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;sass:color&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@sass-palette/abc-config&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@sass-palette/helper&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$code-c-bg</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">abc-config</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$highlighter</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> == </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;shiki&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">f8f8f8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></details><h2 id="用户样式" tabindex="-1"><a class="header-anchor" href="#用户样式"><span>用户样式</span></a></h2><p>如果你是主题开发人员，你可能希望为你的用户提供一种自定义主题或网站的方法。</p><p>在这种情况下，你应该在使用此插件时将 <code>style</code> 选项设置为用户样式文件。</p><p>稍后，你应该通过在你的主题样式之后导入 <code>@sass-palette/\${id}-style</code> 来手动包含用户样式文件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>@sass-palette/\${id}-style</code> 是用户样式文件的别名，你可以在 JS/TS/SASS 中导入它。</p></div>`,40))])}const B=t(r,[["render",c],["__file","guide.html.vue"]]),A=JSON.parse('{"path":"/zh/plugins/development/sass-palette/guide.html","title":"指南","lang":"zh-CN","frontmatter":{"icon":"lightbulb","description":"指南 相比于 插件，本插件允许你: 基于用户配置派生相关样式 在插件中调用并提供和主题类似的样式自定义 跨越多个插件或主题通过 id 选项分组应用 在使用插件前，你需要了解 id 选项，以及三个样式概念: 配置、调色板和派生器。 ID 选项 首先，你应该了解此插件的设计目标是提供跨越插件和主题的支持 (而并不像官方插件仅面向主题)。 我们提供了 id ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/development/sass-palette/guide.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/development/sass-palette/guide.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"指南"}],["meta",{"property":"og:description","content":"指南 相比于 插件，本插件允许你: 基于用户配置派生相关样式 在插件中调用并提供和主题类似的样式自定义 跨越多个插件或主题通过 id 选项分组应用 在使用插件前，你需要了解 id 选项，以及三个样式概念: 配置、调色板和派生器。 ID 选项 首先，你应该了解此插件的设计目标是提供跨越插件和主题的支持 (而并不像官方插件仅面向主题)。 我们提供了 id ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"ID 选项","slug":"id-选项","link":"#id-选项","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"限制","slug":"限制","link":"#限制","children":[]}]},{"level":2,"title":"调色板","slug":"调色板","link":"#调色板","children":[{"level":3,"title":"颜色设置","slug":"颜色设置","link":"#颜色设置","children":[]},{"level":3,"title":"允许的变量类型","slug":"允许的变量类型","link":"#允许的变量类型","children":[]}]},{"level":2,"title":"辅助模块","slug":"辅助模块","link":"#辅助模块","children":[]},{"level":2,"title":"生成器","slug":"生成器","link":"#生成器","children":[]},{"level":2,"title":"用户样式","slug":"用户样式","link":"#用户样式","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":4,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"zh/plugins/development/sass-palette/guide.md"}');export{B as comp,A as data};