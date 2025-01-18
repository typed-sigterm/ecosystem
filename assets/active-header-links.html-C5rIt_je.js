import{_ as a,c as t,a as s,b as l,d as n,o as r,r as h}from"./app-COIQldfe.js";const p={};function o(d,e){const i=h("NpmBadge");return r(),t("div",null,[e[0]||(e[0]=s("h1",{id:"active-header-links",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#active-header-links"},[s("span",null,"active-header-links")])],-1)),l(i,{package:"@vuepress/plugin-active-header-links"}),e[1]||(e[1]=n(`<p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-active-header-links@next</span></span></code></pre></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">activeHeaderLinksPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-active-header-links&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    activeHeaderLinksPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 配置项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector"><span>headerLinkSelector</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;a.vp-sidebar-item&#39;</code></p></li><li><p>详情：</p><p><em>标题链接</em> 的选择器。</p><p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么即使滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector"><span>headerAnchorSelector</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;.header-anchor&#39;</code></p></li><li><p>详情：</p><p><em>标题锚点</em> 的选择器。</p><p>你通常不需要设置该选项，除非你通过 <a href="https://vuejs.press/zh/reference/config.html#markdown-anchor" target="_blank" rel="noopener noreferrer">markdown.anchor</a> 修改了 <a href="https://github.com/valeriangalliat/markdown-it-anchor#readme" target="_blank" rel="noopener noreferrer">markdown-it-anchor</a> 的 <code>permalinkClass</code> 选项。</p></li><li><p>参考：</p><ul><li><a href="https://vuejs.press/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9" target="_blank" rel="noopener noreferrer">指南 &gt; Markdown &gt; 语法扩展 &gt; 标题锚点</a></li></ul></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>200</code></p></li><li><p>详情：</p><p>滚动事件监听器的 Debounce 延迟。</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset"><span>offset</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p></li></ul>`,14))])}const k=a(p,[["render",o],["__file","active-header-links.html.vue"]]),m=JSON.parse('{"path":"/zh/plugins/development/active-header-links.html","title":"active-header-links","lang":"zh-CN","frontmatter":{"icon":"link-2","description":"active-header-links","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/development/active-header-links.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/development/active-header-links.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"active-header-links"}],["meta",{"property":"og:description","content":"active-header-links"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"active-header-links\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"headerLinkSelector","slug":"headerlinkselector","link":"#headerlinkselector","children":[]},{"level":3,"title":"headerAnchorSelector","slug":"headeranchorselector","link":"#headeranchorselector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"offset","slug":"offset","link":"#offset","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"zh/plugins/development/active-header-links.md"}');export{k as comp,m as data};
