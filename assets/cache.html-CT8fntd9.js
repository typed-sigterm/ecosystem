import{_ as a,c as t,a as s,b as n,d as l,o as p,r as h}from"./app-COIQldfe.js";const r={};function c(o,e){const i=h("NpmBadge");return p(),t("div",null,[e[0]||(e[0]=s("h1",{id:"cache",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cache"},[s("span",null,"cache")])],-1)),n(i,{package:"@vuepress/plugin-cache"}),e[1]||(e[1]=l(`<p>该插件 用于解决 VuePress 启动耗时过长 的问题。</p><p>通过在首次启动 VuePress 开发服务时，对 <code>markdown render</code> 建立缓存，在二次启动时，直接读取缓存跳过<br> 不必要的 <code>markdown render</code> ，从而加快启动速度。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-cache@next</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">作为最后一个插件使用</p><p>建议将 <code>cachePlugin</code> 放在 <code>plugins</code> 配置项中的最后一项，这能够确保缓存最大化的使用。</p></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cachePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-cache&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // ... 其它插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 作为最后一个插件使用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    cachePlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 配置项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li><p>类型： <code>&#39;memory&#39;</code> | <code>&#39;filesystem&#39;</code></p></li><li><p>默认值： <code>&#39;memory&#39;</code></p></li><li><p>详情:</p><p>缓存类型</p><ul><li><code>&#39;memory&#39;</code> 为内存缓存，使用内存缓存可以实现最佳的优化效果，但随着项目规模增长，内存占用更多，适合页面较少的项目。</li><li><code>&#39;filesystem&#39;</code> 为文件系统缓存，对于复杂的项目，包含许多页面，建议使用文件缓存。</li></ul></li></ul><h3 id="enableinci" tabindex="-1"><a class="header-anchor" href="#enableinci"><span>enableInCi</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情:</p><p>在 CI 环境中是否启用缓存。</p><p>在大多数情况下，缓存插件可能会减慢 CI 的速度。</p></li></ul>`,11))])}const k=a(r,[["render",c],["__file","cache.html.vue"]]),m=JSON.parse('{"path":"/zh/plugins/tools/cache.html","title":"cache","lang":"zh-CN","frontmatter":{"icon":"database-zap","description":"cache","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/tools/cache.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/tools/cache.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"cache"}],["meta",{"property":"og:description","content":"cache"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cache\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"enableInCi","slug":"enableinci","link":"#enableinci","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":2,"url":"https://github.com/pengzhanbo"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"}]},"autoDesc":true,"filePathRelative":"zh/plugins/tools/cache.md"}');export{k as comp,m as data};
