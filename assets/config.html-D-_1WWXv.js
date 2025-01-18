import{_ as s,c as a,d as e,o as n}from"./app-COIQldfe.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="giscus-选项" tabindex="-1"><a class="header-anchor" href="#giscus-选项"><span>Giscus 选项</span></a></h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3><ul><li>类型: <code>string</code></li><li>详情：存放评论的仓库</li></ul><h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3><ul><li>类型: <code>string</code></li><li>详情：仓库 ID，请从 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 生成。</li></ul><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3><ul><li>类型: <code>string</code></li><li>详情：讨论分类</li></ul><h3 id="categoryid" tabindex="-1"><a class="header-anchor" href="#categoryid"><span>categoryId</span></a></h3><ul><li>类型: <code>string</code></li><li>详情：讨论分类 ID，请从 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 生成。</li></ul><h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>mapping</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;pathname&quot;</code></li><li>详情：页面 ↔️ discussion 映射关系，详见 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a>。</li></ul><h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict"><span>strict</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>详情：是否启用严格匹配</li></ul><h3 id="lazyloading" tabindex="-1"><a class="header-anchor" href="#lazyloading"><span>lazyLoading</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>详情：是否启用懒加载</li></ul><h3 id="reactionsenabled" tabindex="-1"><a class="header-anchor" href="#reactionsenabled"><span>reactionsEnabled</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>详情：是否启用主帖子上的反应</li></ul><h3 id="inputposition" tabindex="-1"><a class="header-anchor" href="#inputposition"><span>inputPosition</span></a></h3><ul><li>类型: <code>&quot;top&quot; | &quot;bottom&quot;</code></li><li>默认值: <code>&quot;top&quot;</code></li><li>详情：输入框的位置</li></ul><h3 id="lighttheme" tabindex="-1"><a class="header-anchor" href="#lighttheme"><span>lightTheme</span></a></h3><ul><li><p>类型: <code>GiscusTheme</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GiscusTheme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_dimmed&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;preferred_color_scheme&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;transparent_dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> \`https://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>&quot;light&quot;</code></p></li><li><p>详情：</p><p>Giscus 在日间模式下使用的主题</p><p>应为一个内置主题关键词或者一个 CSS 链接。</p></li></ul><h3 id="darktheme" tabindex="-1"><a class="header-anchor" href="#darktheme"><span>darkTheme</span></a></h3><ul><li><p>类型: <code>GiscusTheme</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GiscusTheme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_dimmed&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;preferred_color_scheme&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;transparent_dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> \`https://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>&quot;dark&quot;</code></p></li><li><p>详情：</p><p>Giscus 在夜间模式下使用的主题</p><p>应为一个内置主题关键词或者一个 CSS 链接。</p></li></ul><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2><p>你可以直接在插件选项中配置可序列化的选项:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">commentPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-comment&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    commentPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      provider</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Giscus&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 其他选项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2><p>你可以使用 <code>defineGiscusConfig</code> 函数来配置 Giscus。</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/client.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineGiscusConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-comment/client&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineGiscusConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Giscus 选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,30)]))}const r=s(l,[["render",t],["__file","config.html.vue"]]),d=JSON.parse('{"path":"/zh/plugins/blog/comment/giscus/config.html","title":"Giscus 选项","lang":"zh-CN","frontmatter":{"description":"Giscus 选项 配置 repo 类型: string 详情：存放评论的仓库 repoId 类型: string 详情：仓库 ID，请从 Giscus 页面 生成。 category 类型: string 详情：讨论分类 categoryId 类型: string 详情：讨论分类 ID，请从 Giscus 页面 生成。 mapping 类型: str...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/blog/comment/giscus/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/blog/comment/giscus/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"Giscus 选项"}],["meta",{"property":"og:description","content":"Giscus 选项 配置 repo 类型: string 详情：存放评论的仓库 repoId 类型: string 详情：仓库 ID，请从 Giscus 页面 生成。 category 类型: string 详情：讨论分类 categoryId 类型: string 详情：讨论分类 ID，请从 Giscus 页面 生成。 mapping 类型: str..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-20T15:23:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-20T15:23:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Giscus 选项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-20T15:23:47.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"repo","slug":"repo","link":"#repo","children":[]},{"level":3,"title":"repoId","slug":"repoid","link":"#repoid","children":[]},{"level":3,"title":"category","slug":"category","link":"#category","children":[]},{"level":3,"title":"categoryId","slug":"categoryid","link":"#categoryid","children":[]},{"level":3,"title":"mapping","slug":"mapping","link":"#mapping","children":[]},{"level":3,"title":"strict","slug":"strict","link":"#strict","children":[]},{"level":3,"title":"lazyLoading","slug":"lazyloading","link":"#lazyloading","children":[]},{"level":3,"title":"reactionsEnabled","slug":"reactionsenabled","link":"#reactionsenabled","children":[]},{"level":3,"title":"inputPosition","slug":"inputposition","link":"#inputposition","children":[]},{"level":3,"title":"lightTheme","slug":"lighttheme","link":"#lighttheme","children":[]},{"level":3,"title":"darkTheme","slug":"darktheme","link":"#darktheme","children":[]}]},{"level":2,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[]},{"level":2,"title":"客户端配置","slug":"客户端配置","link":"#客户端配置","children":[]}],"git":{"updatedTime":1724167427000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mister-Hope"},{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/meteorlxy"},{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1,"url":"https://github.com/pengzhanbo"}]},"autoDesc":true,"filePathRelative":"zh/plugins/blog/comment/giscus/config.md"}');export{r as comp,d as data};
