import{_ as h,c as o,d as a,a as s,e as i,b as l,f as n,r as p,o as r}from"./app-COIQldfe.js";const d={};function k(c,e){const t=p("RouteLink");return r(),o("div",null,[e[5]||(e[5]=a(`<h1 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h1><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>The domain name of the deployment site.</p><h2 id="atom" tabindex="-1"><a class="header-anchor" href="#atom"><span>atom</span></a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to output Atom syntax files.</p><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>json</span></a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether output JSON syntax files.</p><h2 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>rss</span></a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to output RSS syntax files.</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h2><ul><li>Type: <code>string</code></li></ul><p>A large image/icon of the feed, probably used as banner.</p><h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h2><ul><li>Type: <code>string</code></li></ul><p>A small icon of the feed, probably used as favicon.</p><h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h2><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li></ul><p>Set the maximum number of items in the feed. After all pages are sorted, the first <code>count</code> items will be intercepted.</p><p>If your site has a lot of articles, you may consider this option to reduce feed file size.</p><h2 id="preservedelements" tabindex="-1"><a class="header-anchor" href="#preservedelements"><span>preservedElements</span></a></h2><ul><li>Type: <code>(RegExp | string)[] | (tagName: string) =&gt; boolean</code></li></ul><p>Custom element or component which should be preserved in feed.</p><div class="hint-container tip"><p class="hint-container-title">By default, all unknown tags will be removed.</p></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h2><ul><li><p>Type: <code>(page: Page)=&gt; boolean</code></p></li><li><p>Default:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">filePathRelative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">feed</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ??</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">filePathRelative</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">home</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span></code></pre></div></li></ul><p>A custom filter function, used to filter feed items.</p><h2 id="sorter" tabindex="-1"><a class="header-anchor" href="#sorter"><span>sorter</span></a></h2><ul><li><p>Type: <code>(pageA: Page, pageB: Page)=&gt; number</code></p></li><li><p>Default:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// dateSorter is from @vuepress/helper</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pageA</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pageB</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  dateSorter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      ?</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> pageA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      ?</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">git</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">createdTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">      :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> pageB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>Custom sorter function for feed items.</p><p>The default sorting behavior is by file adding time coming from git (needs <code>@vuepress/plugin-git</code>).</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You should enable <code>@vuepress/plugin-git</code> to get the newest created pages as feed items. Otherwise, the feed items will be sorted by the default order of pages in VuePress.</p></div><h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h2><p><code>channel</code> option is used to config <em>Feed Channels</em>.</p>`,37)),s("p",null,[e[1]||(e[1]=i("For available options, please see ")),l(t,{to:"/plugins/blog/feed/channel.html"},{default:n(()=>e[0]||(e[0]=[i("Config → Channel")])),_:1})]),e[6]||(e[6]=a('<h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enabled in devServer.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>For performance reasons, we do not provide hot reload. Reboot your devServer to sync your changes.</p></div><h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;http://localhost:${port}&quot;</code></li></ul><p>Hostname to use in devServer</p><h2 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename"><span>atomOutputFilename</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;atom.xml&quot;</code></li></ul><p>Atom syntax output filename, relative to dest folder.</p><h2 id="atomxsltemplate" tabindex="-1"><a class="header-anchor" href="#atomxsltemplate"><span>atomXslTemplate</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: Content of <code>@vuepress/plugin-feed/templates/atom.xsl</code></li></ul><p>Atom xsl template file content.</p><h2 id="atomxslfilename" tabindex="-1"><a class="header-anchor" href="#atomxslfilename"><span>atomXslFilename</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;atom.xsl&quot;</code></li></ul><p>Atom xsl filename, relative to dest folder.</p><h2 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename"><span>jsonOutputFilename</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;feed.json&quot;</code></li></ul><p>JSON syntax output filename, relative to dest folder.</p><h2 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename"><span>rssOutputFilename</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;rss.xml&quot;</code></li></ul><p>RSS syntax output filename, relative to dest folder.</p><h2 id="rssxsltemplate" tabindex="-1"><a class="header-anchor" href="#rssxsltemplate"><span>rssXslTemplate</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: Content of <code>@vuepress/plugin-feed/templates/rss.xsl</code></li></ul><p>RSS xsl template file content.</p><h2 id="rssxslfilename" tabindex="-1"><a class="header-anchor" href="#rssxslfilename"><span>rssXslFilename</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;rss.xsl&quot;</code></li></ul><p>RSS syntax xsl filename, relative to dest folder.</p><h2 id="getter" tabindex="-1"><a class="header-anchor" href="#getter"><span>getter</span></a></h2>',29)),s("p",null,[e[3]||(e[3]=i("Feed generation controller, see ")),l(t,{to:"/plugins/blog/feed/getter.html"},{default:n(()=>e[2]||(e[2]=[i("Feed Getter")])),_:1}),e[4]||(e[4]=i("."))]),e[7]||(e[7]=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"The plugin has a built-in getter, only set this if you want full control of feed generation.")],-1)),e[8]||(e[8]=s("h2",{id:"locales",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#locales"},[s("span",null,"locales")])],-1)),e[9]||(e[9]=s("ul",null,[s("li",null,[i("Type: "),s("code",null,"Record<string, BaseFeedOptions>")])],-1)),e[10]||(e[10]=s("p",null,"You can use it to specific options for each locale.",-1)),e[11]||(e[11]=s("p",null,[i("Any options above are supported except "),s("code",null,"hostname"),i(".")],-1))])}const g=h(d,[["render",k],["__file","config.html.vue"]]),m=JSON.parse('{"path":"/plugins/blog/feed/config.html","title":"Plugin Config","lang":"en-US","frontmatter":{"icon":"settings-2","description":"Plugin Config hostname Type: string Required: Yes The domain name of the deployment site. atom Type: boolean Default: false Whether to output Atom syntax files. json Type: boole...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/blog/feed/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/blog/feed/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Plugin Config"}],["meta",{"property":"og:description","content":"Plugin Config hostname Type: string Required: Yes The domain name of the deployment site. atom Type: boolean Default: false Whether to output Atom syntax files. json Type: boole..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plugin Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"atom","slug":"atom","link":"#atom","children":[]},{"level":2,"title":"json","slug":"json","link":"#json","children":[]},{"level":2,"title":"rss","slug":"rss","link":"#rss","children":[]},{"level":2,"title":"image","slug":"image","link":"#image","children":[]},{"level":2,"title":"icon","slug":"icon","link":"#icon","children":[]},{"level":2,"title":"count","slug":"count","link":"#count","children":[]},{"level":2,"title":"preservedElements","slug":"preservedelements","link":"#preservedelements","children":[]},{"level":2,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":2,"title":"sorter","slug":"sorter","link":"#sorter","children":[]},{"level":2,"title":"channel","slug":"channel","link":"#channel","children":[]},{"level":2,"title":"devServer","slug":"devserver","link":"#devserver","children":[]},{"level":2,"title":"devHostname","slug":"devhostname","link":"#devhostname","children":[]},{"level":2,"title":"atomOutputFilename","slug":"atomoutputfilename","link":"#atomoutputfilename","children":[]},{"level":2,"title":"atomXslTemplate","slug":"atomxsltemplate","link":"#atomxsltemplate","children":[]},{"level":2,"title":"atomXslFilename","slug":"atomxslfilename","link":"#atomxslfilename","children":[]},{"level":2,"title":"jsonOutputFilename","slug":"jsonoutputfilename","link":"#jsonoutputfilename","children":[]},{"level":2,"title":"rssOutputFilename","slug":"rssoutputfilename","link":"#rssoutputfilename","children":[]},{"level":2,"title":"rssXslTemplate","slug":"rssxsltemplate","link":"#rssxsltemplate","children":[]},{"level":2,"title":"rssXslFilename","slug":"rssxslfilename","link":"#rssxslfilename","children":[]},{"level":2,"title":"getter","slug":"getter","link":"#getter","children":[]},{"level":2,"title":"locales","slug":"locales","link":"#locales","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"plugins/blog/feed/config.md"}');export{g as comp,m as data};
