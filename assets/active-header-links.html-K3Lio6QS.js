import{_ as i,c as t,a as s,b as l,d as n,o as r,r as o}from"./app-COIQldfe.js";const h={};function p(d,e){const a=o("NpmBadge");return r(),t("div",null,[e[0]||(e[0]=s("h1",{id:"active-header-links",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#active-header-links"},[s("span",null,"active-header-links")])],-1)),l(a,{package:"@vuepress/plugin-active-header-links"}),e[1]||(e[1]=n(`<p>This plugin will listen to page scroll event. When the page scrolls to a certain <em>header anchor</em>, this plugin will change the route hash to that <em>header anchor</em> if there is a corresponding <em>header link</em>.</p><p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won&#39;t need to use it directly in most cases.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-active-header-links@next</span></span></code></pre></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">activeHeaderLinksPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-active-header-links&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    activeHeaderLinksPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector"><span>headerLinkSelector</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;a.vp-sidebar-item&#39;</code></p></li><li><p>Details:</p><p>Selector of <em>header link</em>.</p><p>If a <em>header anchor</em> does not have a corresponding <em>header link</em>, this plugin won&#39;t change the route hash to that anchor when scrolling to it.</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector"><span>headerAnchorSelector</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;.header-anchor&#39;</code></p></li><li><p>Details:</p><p>Selector of <em>header anchor</em>.</p><p>You don&#39;t need to specify this option unless you have changed the <code>permalinkClass</code> option of <a href="https://github.com/valeriangalliat/markdown-it-anchor#readme" target="_blank" rel="noopener noreferrer">markdown-it-anchor</a> via <a href="https://vuejs.press/reference/config.html#markdown-anchor" target="_blank" rel="noopener noreferrer">markdown.anchor</a>.</p></li><li><p>Also see:</p><ul><li><a href="https://vuejs.press/guide/markdown.html#header-anchors" target="_blank" rel="noopener noreferrer">Guide &gt; Markdown &gt; Syntax Extensions &gt; Header Anchors</a></li></ul></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>200</code></p></li><li><p>Details:</p><p>The delay of the debounced scroll event listener.</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset"><span>offset</span></a></h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>5</code></p></li><li><p>Details:</p><p>Even if you click the link of the <em>header anchor</em> directly, the <code>scrollTop</code> might not be exactly equal to <code>offsetTop</code> of the <em>header anchor</em>, so we add an offset to avoid the error.</p></li></ul>`,14))])}const k=i(h,[["render",p],["__file","active-header-links.html.vue"]]),m=JSON.parse('{"path":"/plugins/development/active-header-links.html","title":"active-header-links","lang":"en-US","frontmatter":{"icon":"link-2","description":"active-header-links","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/development/active-header-links.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/development/active-header-links.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"active-header-links"}],["meta",{"property":"og:description","content":"active-header-links"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"active-header-links\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"headerLinkSelector","slug":"headerlinkselector","link":"#headerlinkselector","children":[]},{"level":3,"title":"headerAnchorSelector","slug":"headeranchorselector","link":"#headeranchorselector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"offset","slug":"offset","link":"#offset","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"plugins/development/active-header-links.md"}');export{k as comp,m as data};