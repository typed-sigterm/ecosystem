import{_ as s,c as e,d as a,o as n}from"./app-KbVIQgPv.js";const l={};function t(h,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="giscus-options" tabindex="-1"><a class="header-anchor" href="#giscus-options"><span>Giscus Options</span></a></h1><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: The name of repository to store discussions.</li></ul><h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3><ul><li>Type: <code>string</code></li><li>Details:<br> The ID of repository to store discussions. Generate through <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li></ul><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3><ul><li>Type: <code>string</code></li><li>Details:<br> The name of the discussion category.</li></ul><h3 id="categoryid" tabindex="-1"><a class="header-anchor" href="#categoryid"><span>categoryId</span></a></h3><ul><li>Type: <code>string</code></li><li>Details:<br> The ID of the discussion category. Generate through <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li></ul><h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>mapping</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;pathname&quot;</code></li><li>Details:<br> Page - Discussion mapping. For details see <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li></ul><h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict"><span>strict</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details:<br> Whether enable strict mapping or not</li></ul><h3 id="lazyloading" tabindex="-1"><a class="header-anchor" href="#lazyloading"><span>lazyLoading</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details:<br> Whether enable lazy loading or not</li></ul><h3 id="reactionsenabled" tabindex="-1"><a class="header-anchor" href="#reactionsenabled"><span>reactionsEnabled</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details:<br> Whether enable reactions or not</li></ul><h3 id="inputposition" tabindex="-1"><a class="header-anchor" href="#inputposition"><span>inputPosition</span></a></h3><ul><li>Type: <code>&quot;top&quot; | &quot;bottom&quot;</code></li><li>Default: <code>&quot;top&quot;</code></li><li>Details:<br> Input position</li></ul><h3 id="lighttheme" tabindex="-1"><a class="header-anchor" href="#lighttheme"><span>lightTheme</span></a></h3><ul><li><p>Type: <code>GiscusTheme</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GiscusTheme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_dimmed&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;preferred_color_scheme&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;transparent_dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> \`https://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>&quot;light&quot;</code></p></li><li><p>Details:</p><p>Giscus theme used in lightmode</p><p>Should be a built-in theme keyword or a css link starting with <code>https://</code>.</p></li></ul><h3 id="darktheme" tabindex="-1"><a class="header-anchor" href="#darktheme"><span>darkTheme</span></a></h3><ul><li><p>Type: <code>GiscusTheme</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GiscusTheme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_dimmed&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_high_contrast&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light_protanopia&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;light&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;preferred_color_scheme&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;transparent_dark&#39;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> \`https://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>&quot;dark&quot;</code></p></li><li><p>Details:</p><p>Giscus theme used in darkmode</p><p>Should be a built-in theme keyword or a css link starting with <code>https://</code>.</p></li></ul><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h2><p>You can directly configure serializable options in the plugin options:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">commentPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-comment&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    commentPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      provider</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Giscus&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // other options</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2><p>You can use the <code>defineGiscusConfig</code> function to customize Giscus:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/client.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineGiscusConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-comment/client&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defineGiscusConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Giscus config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,30)]))}const r=s(l,[["render",t],["__file","config.html.vue"]]),o=JSON.parse('{"path":"/plugins/blog/comment/giscus/config.html","title":"Giscus Options","lang":"en-US","frontmatter":{"description":"Giscus Options Config repo Type: string Details: The name of repository to store discussions. repoId Type: string Details: The ID of repository to store discussions. Generate th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/blog/comment/giscus/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/blog/comment/giscus/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Giscus Options"}],["meta",{"property":"og:description","content":"Giscus Options Config repo Type: string Details: The name of repository to store discussions. repoId Type: string Details: The ID of repository to store discussions. Generate th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T15:23:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-20T15:23:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Giscus Options\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-20T15:23:47.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Config","slug":"config","link":"#config","children":[{"level":3,"title":"repo","slug":"repo","link":"#repo","children":[]},{"level":3,"title":"repoId","slug":"repoid","link":"#repoid","children":[]},{"level":3,"title":"category","slug":"category","link":"#category","children":[]},{"level":3,"title":"categoryId","slug":"categoryid","link":"#categoryid","children":[]},{"level":3,"title":"mapping","slug":"mapping","link":"#mapping","children":[]},{"level":3,"title":"strict","slug":"strict","link":"#strict","children":[]},{"level":3,"title":"lazyLoading","slug":"lazyloading","link":"#lazyloading","children":[]},{"level":3,"title":"reactionsEnabled","slug":"reactionsenabled","link":"#reactionsenabled","children":[]},{"level":3,"title":"inputPosition","slug":"inputposition","link":"#inputposition","children":[]},{"level":3,"title":"lightTheme","slug":"lighttheme","link":"#lighttheme","children":[]},{"level":3,"title":"darkTheme","slug":"darktheme","link":"#darktheme","children":[]}]},{"level":2,"title":"Plugin Config","slug":"plugin-config","link":"#plugin-config","children":[]},{"level":2,"title":"Client Config","slug":"client-config","link":"#client-config","children":[]}],"git":{"updatedTime":1724167427000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mister-Hope"},{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/meteorlxy"},{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1,"url":"https://github.com/pengzhanbo"}]},"autoDesc":true,"filePathRelative":"plugins/blog/comment/giscus/config.md"}');export{r as comp,o as data};
