import{_ as r,c as p,a as s,b as i,e as t,f as o,d as h,r as a,o as k}from"./app-COIQldfe.js";const d={},c={class:"hint-container tip"};function m(g,e){const l=a("NpmBadge"),n=a("RouteLink");return k(),p("div",null,[e[7]||(e[7]=s("h1",{id:"remove-pwa",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#remove-pwa"},[s("span",null,"remove-pwa")])],-1)),i(l,{package:"@vuepress/plugin-remove-pwa"}),e[8]||(e[8]=s("p",null,"此插件从你的 VuePress 站点中删除任何相关的 Service Worker，因此如果你在启用后任何 PWA 插件后移除它们，用户仍然可以获得更新。",-1)),s("div",c,[e[3]||(e[3]=s("p",{class:"hint-container-title"},"如果你启用过 PWA，为什么需要这个插件？",-1)),s("p",null,[e[1]||(e[1]=t("PWA 插件，如 ")),i(n,{to:"/zh/plugins/pwa/pwa/"},{default:o(()=>e[0]||(e[0]=[s("code",null,"@vuepress/plugin-pwa",-1)])),_:1}),e[2]||(e[2]=t(" 将 Service Worker 注册到你的站点，这将缓存你的站点并使其离线可用。"))]),e[4]||(e[4]=s("p",null,"但是，如果你删除 PWA 插件，先前的 Service Worker 仍将在那里，但它们永远无法获得更新，因为他们永远无法找到要更新的新 Service Worker。 因此，用户将继续使用你网站的旧版本。",-1)),e[5]||(e[5]=s("p",null,"要解决这个问题：",-1)),e[6]||(e[6]=s("ol",null,[s("li",null,[s("p",null,"一个新的内容为空的 Service Worker 需要生成在原位置。")]),s("li",null,[s("p",null,"新的 Service Worker 应该尝试删除旧 Service Worker 缓存的内容，然后它应该注销自己。")])],-1))]),e[9]||(e[9]=h(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-remove-pwa@next</span></span></code></pre></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">removePwaPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-remove-pwa&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    removePwaPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><h3 id="cacheprefix" tabindex="-1"><a class="header-anchor" href="#cacheprefix"><span>cachePrefix</span></a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;workbox&#39;</code></li><li>详情：Service worker 的缓存前缀。</li></ul><h3 id="swlocation" tabindex="-1"><a class="header-anchor" href="#swlocation"><span>swLocation</span></a></h3><ul><li>类型： <code>string</code></li><li>默认值：<code>&#39;service-worker.js&#39;</code></li><li>详情：旧 Service Worker 的位置。</li></ul>`,8))])}const v=r(d,[["render",m],["__file","remove-pwa.html.vue"]]),y=JSON.parse('{"path":"/zh/plugins/pwa/remove-pwa.html","title":"remove-pwa","lang":"zh-CN","frontmatter":{"icon":"trash-2","description":"remove-pwa","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/pwa/remove-pwa.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/pwa/remove-pwa.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"remove-pwa"}],["meta",{"property":"og:description","content":"remove-pwa"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"remove-pwa\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"cachePrefix","slug":"cacheprefix","link":"#cacheprefix","children":[]},{"level":3,"title":"swLocation","slug":"swlocation","link":"#swlocation","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"zh/plugins/pwa/remove-pwa.md"}');export{v as comp,y as data};
