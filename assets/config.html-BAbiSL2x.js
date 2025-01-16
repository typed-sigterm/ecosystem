import{_ as h,c as p,d as l,a as e,e as i,b as t,f as n,r,o}from"./app-KbVIQgPv.js";const d={};function k(c,s){const a=r("RouteLink");return o(),p("div",null,[s[5]||(s[5]=l(`<h1 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h1><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><ul><li>类型：<code>string</code></li><li>必填：是</li></ul><p>部署网站的域名。</p><h2 id="atom" tabindex="-1"><a class="header-anchor" href="#atom"><span>atom</span></a></h2><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否启用 Atom 格式输出。</p><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>json</span></a></h2><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否启用 JSON 格式输出。</p><h2 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>rss</span></a></h2><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否启用 RSS 格式输出。</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h2><ul><li>类型：<code>string</code></li></ul><p>一个大的图片，用作 feed 展示。</p><h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h2><ul><li>类型：<code>string</code></li></ul><p>一个小的图标，显示在订阅列表中。</p><h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h2><ul><li>类型：<code>number</code></li><li>默认值：<code>100</code></li></ul><p>设置 feed 的最大项目数量。在所有页面排序好后，插件会截取前 count 个项目。</p><p>如果你的站点文章很多，你应该考虑设置这个选项以减少 feed 文件大小。</p><h2 id="preservedelements" tabindex="-1"><a class="header-anchor" href="#preservedelements"><span>preservedElements</span></a></h2><ul><li>类型：<code>(RegExp | string)[] | (tagName：string) =&gt; boolean</code></li></ul><p>应在 Feed 中保留的自定义元素或组件。</p><div class="hint-container tip"><p class="hint-container-title">默认情况下，所有未知标签均会被移除。</p></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h2><ul><li><p>类型：<code>(page: Page)=&gt; boolean</code></p></li><li><p>默认值：</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">filePathRelative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">feed</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ??</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">filePathRelative</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">home</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span></code></pre></div></li></ul><p>自定义的过滤函数，用于过滤哪些项目在 feed 中显示。</p><h2 id="sorter" tabindex="-1"><a class="header-anchor" href="#sorter"><span>sorter</span></a></h2><ul><li><p>类型： <code>(pageA: Page, pageB: Page)=&gt; number</code></p></li><li><p>默认值：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// dateSorter 来源于 @vuepress/helper</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  dateSorter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      ?</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      ?</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Feed 项目的排序器。</p><p>默认的排序行为是通过 Git 的文件添加日期 (需要 <code>@vuepress/plugin-git</code>)。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你应该启用 <code>@vuepress/plugin-git</code> 来获取最新创建的页面作为 feed 项目。否则，feed 项目将按照 VuePress 中页面的默认顺序排序。</p></div><h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h2><p><code>channel</code> 选项用于配置 Feed 频道。</p>`,37)),e("p",null,[s[1]||(s[1]=i("可用选项详见 ")),t(a,{to:"/zh/plugins/blog/feed/channel.html"},{default:n(()=>s[0]||(s[0]=[i("配置 → 频道设置")])),_:1})]),s[6]||(s[6]=l('<h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否在开发服务器中启用</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于性能原因，我们不提供热更新。重启开发服务器以同步你的变更。</p></div><h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>&quot;http://localhost:${port}&quot;</code></li></ul><p>开发服务器使用的主机名</p><h2 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename"><span>atomOutputFilename</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>&quot;atom.xml&quot;</code></li></ul><p>Atom 格式输出路径，相对于输出路径。</p><h2 id="atomxsltemplate" tabindex="-1"><a class="header-anchor" href="#atomxsltemplate"><span>atomXslTemplate</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>@vuepress/plugin-feed/templates/atom.xsl</code> 的内容</li></ul><p>Atom xsl 模板文件没人陪美国</p><h2 id="atomxslfilename" tabindex="-1"><a class="header-anchor" href="#atomxslfilename"><span>atomXslFilename</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>&quot;atom.xsl&quot;</code></li></ul><p>Atom xsl 输出路径，相对于输出路径。</p><h2 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename"><span>jsonOutputFilename</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>&quot;feed.json&quot;</code></li></ul><p>JSON 格式输出路径，相对于输出路径。</p><h2 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename"><span>rssOutputFilename</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>&quot;rss.xml&quot;</code></li></ul><p>RSS 格式输出路径，相对于输出路径。</p><h2 id="rssxsltemplate" tabindex="-1"><a class="header-anchor" href="#rssxsltemplate"><span>rssXslTemplate</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>@vuepress/plugin-feed/templates/rss.xsl</code> 的内容</li></ul><p>RSS xsl 模板文件内容。</p><h2 id="rssxslfilename" tabindex="-1"><a class="header-anchor" href="#rssxslfilename"><span>rssXslFilename</span></a></h2><ul><li>类型：<code>string</code></li><li>默认值：<code>&quot;rss.xsl&quot;</code></li></ul><p>RSS xsl 输出路径，相对于输出路径。</p><h2 id="getter" tabindex="-1"><a class="header-anchor" href="#getter"><span>getter</span></a></h2>',29)),e("p",null,[s[3]||(s[3]=i("Feed 生成控制器，详见 ")),t(a,{to:"/zh/plugins/blog/feed/getter.html"},{default:n(()=>s[2]||(s[2]=[i("Feed 生成器")])),_:1}),s[4]||(s[4]=i("。"))]),s[7]||(s[7]=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"此插件内置了生成器，只有当你想完全控制 feed 生成时才需要设置此选项。")],-1)),s[8]||(s[8]=e("h2",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales"},[e("span",null,"locales")])],-1)),s[9]||(s[9]=e("ul",null,[e("li",null,[i("类型："),e("code",null,"Record<string, BaseFeedOptions>")])],-1)),s[10]||(s[10]=e("p",null,"你可以将它用于每个语言环境的特定选项。",-1)),s[11]||(s[11]=e("p",null,[i("除 "),e("code",null,"hostname"),i(" 外，上述任何选项均受支持。")],-1))])}const m=h(d,[["render",k],["__file","config.html.vue"]]),u=JSON.parse('{"path":"/zh/plugins/blog/feed/config.html","title":"插件配置","lang":"zh-CN","frontmatter":{"icon":"settings-2","description":"插件配置 hostname 类型：string 必填：是 部署网站的域名。 atom 类型：boolean 默认值：false 是否启用 Atom 格式输出。 json 类型：boolean 默认值：false 是否启用 JSON 格式输出。 rss 类型：boolean 默认值：false 是否启用 RSS 格式输出。 image 类型：string...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/blog/feed/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/blog/feed/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"插件配置"}],["meta",{"property":"og:description","content":"插件配置 hostname 类型：string 必填：是 部署网站的域名。 atom 类型：boolean 默认值：false 是否启用 Atom 格式输出。 json 类型：boolean 默认值：false 是否启用 JSON 格式输出。 rss 类型：boolean 默认值：false 是否启用 RSS 格式输出。 image 类型：string..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"atom","slug":"atom","link":"#atom","children":[]},{"level":2,"title":"json","slug":"json","link":"#json","children":[]},{"level":2,"title":"rss","slug":"rss","link":"#rss","children":[]},{"level":2,"title":"image","slug":"image","link":"#image","children":[]},{"level":2,"title":"icon","slug":"icon","link":"#icon","children":[]},{"level":2,"title":"count","slug":"count","link":"#count","children":[]},{"level":2,"title":"preservedElements","slug":"preservedelements","link":"#preservedelements","children":[]},{"level":2,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":2,"title":"sorter","slug":"sorter","link":"#sorter","children":[]},{"level":2,"title":"channel","slug":"channel","link":"#channel","children":[]},{"level":2,"title":"devServer","slug":"devserver","link":"#devserver","children":[]},{"level":2,"title":"devHostname","slug":"devhostname","link":"#devhostname","children":[]},{"level":2,"title":"atomOutputFilename","slug":"atomoutputfilename","link":"#atomoutputfilename","children":[]},{"level":2,"title":"atomXslTemplate","slug":"atomxsltemplate","link":"#atomxsltemplate","children":[]},{"level":2,"title":"atomXslFilename","slug":"atomxslfilename","link":"#atomxslfilename","children":[]},{"level":2,"title":"jsonOutputFilename","slug":"jsonoutputfilename","link":"#jsonoutputfilename","children":[]},{"level":2,"title":"rssOutputFilename","slug":"rssoutputfilename","link":"#rssoutputfilename","children":[]},{"level":2,"title":"rssXslTemplate","slug":"rssxsltemplate","link":"#rssxsltemplate","children":[]},{"level":2,"title":"rssXslFilename","slug":"rssxslfilename","link":"#rssxslfilename","children":[]},{"level":2,"title":"getter","slug":"getter","link":"#getter","children":[]},{"level":2,"title":"locales","slug":"locales","link":"#locales","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"zh/plugins/blog/feed/config.md"}');export{m as comp,u as data};
