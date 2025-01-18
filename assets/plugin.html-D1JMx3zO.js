import{_ as u,c as o,d as p,a as e,e as n,b as s,f as i,r,o as a}from"./app-COIQldfe.js";const m={};function d(g,l){const t=r("RouteLink");return a(),o("div",null,[l[90]||(l[90]=p(`<h1 id="plugins-config" tabindex="-1"><a class="header-anchor" href="#plugins-config"><span>Plugins Config</span></a></h1><p>You can configure the plugins that used by default theme with <code>themePlugins</code>.</p><p>Default theme is using some plugins by default. You can disable a plugin if you really do not want to use it. Make sure you understand what the plugin is for before disabling it.</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defaultTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    themePlugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // customize theme plugins here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="themeplugins-activeheaderlinks" tabindex="-1"><a class="header-anchor" href="#themeplugins-activeheaderlinks"><span>themePlugins.activeHeaderLinks</span></a></h2>`,5)),e("ul",null,[l[4]||(l[4]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1)),l[5]||(l[5]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[3]||(l[3]=e("p",null,"Details:",-1)),e("p",null,[l[1]||(l[1]=n("Enable ")),s(t,{to:"/plugins/development/active-header-links.html"},{default:i(()=>l[0]||(l[0]=[n("@vuepress/plugin-active-header-links")])),_:1}),l[2]||(l[2]=n(" or not."))])])]),l[91]||(l[91]=e("h2",{id:"themeplugins-backtotop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-backtotop"},[e("span",null,"themePlugins.backToTop")])],-1)),e("ul",null,[l[11]||(l[11]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"BackToTopPluginOptions | boolean")])],-1)),l[12]||(l[12]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[9]||(l[9]=e("p",null,"Details:",-1)),e("p",null,[l[7]||(l[7]=n("Enable ")),s(t,{to:"/plugins/features/back-to-top.html"},{default:i(()=>l[6]||(l[6]=[n("@vuepress/plugin-back-to-top")])),_:1}),l[8]||(l[8]=n(" or not."))]),l[10]||(l[10]=e("p",null,"Object value is supported as plugin options.",-1))])]),l[92]||(l[92]=e("h2",{id:"themeplugins-container",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-container"},[e("span",null,"themePlugins.container")])],-1)),e("ul",null,[l[21]||(l[21]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"Record<ContainerType, boolean>")])],-1)),e("li",null,[l[16]||(l[16]=e("p",null,"Details:",-1)),e("p",null,[l[14]||(l[14]=n("Enable custom containers that powered by ")),s(t,{to:"/plugins/markdown/markdown-container.html"},{default:i(()=>l[13]||(l[13]=[n("@vuepress/plugin-markdown-container")])),_:1}),l[15]||(l[15]=n(" or not."))]),l[17]||(l[17]=e("p",null,[e("code",null,"ContainerType"),n(" type is:")],-1)),l[18]||(l[18]=e("ul",null,[e("li",null,[e("code",null,"codeGroup")]),e("li",null,[e("code",null,"codeGroupItem")])],-1))]),e("li",null,[l[20]||(l[20]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[s(t,{to:"/themes/default/markdown.html#custom-containers"},{default:i(()=>l[19]||(l[19]=[n("Default Theme > Markdown > Custom Containers")])),_:1})])])])]),l[93]||(l[93]=e("h2",{id:"themeplugins-copycode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-copycode"},[e("span",null,"themePlugins.copyCode")])],-1)),e("ul",null,[l[27]||(l[27]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"CopyCodePluginOptions | boolean")])],-1)),l[28]||(l[28]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[25]||(l[25]=e("p",null,"Details:",-1)),e("p",null,[l[23]||(l[23]=n("Enable ")),s(t,{to:"/plugins/features/copy-code.html"},{default:i(()=>l[22]||(l[22]=[n("@vuepress/plugin-copy-code")])),_:1}),l[24]||(l[24]=n(" or not."))]),l[26]||(l[26]=e("p",null,"Object value is supported as plugin options.",-1))])]),l[94]||(l[94]=e("h2",{id:"themeplugins-git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-git"},[e("span",null,"themePlugins.git")])],-1)),e("ul",null,[l[33]||(l[33]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1)),l[34]||(l[34]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[32]||(l[32]=e("p",null,"Details:",-1)),e("p",null,[l[30]||(l[30]=n("Enable ")),s(t,{to:"/plugins/development/git.html"},{default:i(()=>l[29]||(l[29]=[n("@vuepress/plugin-git")])),_:1}),l[31]||(l[31]=n(" or not."))])])]),l[95]||(l[95]=e("h2",{id:"themeplugins-hint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-hint"},[e("span",null,"themePlugins.hint")])],-1)),e("ul",null,[l[41]||(l[41]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"MarkdownHintPluginOptions | boolean")])],-1)),l[42]||(l[42]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[38]||(l[38]=e("p",null,"Details:",-1)),e("p",null,[l[36]||(l[36]=n("Enable ")),s(t,{to:"/plugins/markdown/markdown-hint.html"},{default:i(()=>l[35]||(l[35]=[n("@vuepress/plugin-markdown-hint")])),_:1}),l[37]||(l[37]=n(" or not."))])]),e("li",null,[l[40]||(l[40]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[s(t,{to:"/themes/default/markdown.html#hint-containers"},{default:i(()=>l[39]||(l[39]=[n("Default Theme > Markdown > Hint Containers")])),_:1})])])])]),l[96]||(l[96]=e("h2",{id:"themeplugins-linkscheck",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-linkscheck"},[e("span",null,"themePlugins.linksCheck")])],-1)),e("ul",null,[l[47]||(l[47]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"LinksCheckPluginOptions | boolean")])],-1)),l[48]||(l[48]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[46]||(l[46]=e("p",null,"Details:",-1)),e("p",null,[l[44]||(l[44]=n("Enable ")),s(t,{to:"/plugins/markdown/links-check.html"},{default:i(()=>l[43]||(l[43]=[n("@vuepress/plugin-links-check")])),_:1}),l[45]||(l[45]=n(" or not."))])])]),l[97]||(l[97]=e("h2",{id:"themeplugins-mediumzoom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-mediumzoom"},[e("span",null,"themePlugins.mediumZoom")])],-1)),e("ul",null,[l[53]||(l[53]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1)),l[54]||(l[54]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[52]||(l[52]=e("p",null,"Details:",-1)),e("p",null,[l[50]||(l[50]=n("Enable ")),s(t,{to:"/plugins/features/medium-zoom.html"},{default:i(()=>l[49]||(l[49]=[n("@vuepress/plugin-medium-zoom")])),_:1}),l[51]||(l[51]=n(" or not."))])])]),l[98]||(l[98]=e("h2",{id:"themeplugins-nprogress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-nprogress"},[e("span",null,"themePlugins.nprogress")])],-1)),e("ul",null,[l[59]||(l[59]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1)),l[60]||(l[60]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[58]||(l[58]=e("p",null,"Details:",-1)),e("p",null,[l[56]||(l[56]=n("Enable ")),s(t,{to:"/plugins/features/nprogress.html"},{default:i(()=>l[55]||(l[55]=[n("@vuepress/plugin-nprogress")])),_:1}),l[57]||(l[57]=n(" or not."))])])]),l[99]||(l[99]=e("h2",{id:"themeplugins-prismjs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-prismjs"},[e("span",null,"themePlugins.prismjs")])],-1)),e("ul",null,[l[65]||(l[65]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1)),l[66]||(l[66]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[64]||(l[64]=e("p",null,"Details:",-1)),e("p",null,[l[62]||(l[62]=n("Enable ")),s(t,{to:"/plugins/markdown/prismjs.html"},{default:i(()=>l[61]||(l[61]=[n("@vuepress/plugin-prismjs")])),_:1}),l[63]||(l[63]=n(" or not."))])])]),l[100]||(l[100]=e("h2",{id:"themeplugins-seo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-seo"},[e("span",null,"themePlugins.seo")])],-1)),e("ul",null,[l[72]||(l[72]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SeoPluginOptions | boolean")])],-1)),l[73]||(l[73]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[70]||(l[70]=e("p",null,"Details:",-1)),e("p",null,[l[68]||(l[68]=n("Enable ")),s(t,{to:"/plugins/seo/seo/"},{default:i(()=>l[67]||(l[67]=[n("@vuepress/plugin-seo")])),_:1}),l[69]||(l[69]=n(" or not."))]),l[71]||(l[71]=e("p",null,"Object value is supported as plugin options.",-1))])]),l[101]||(l[101]=e("h2",{id:"themeplugins-sitemap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-sitemap"},[e("span",null,"themePlugins.sitemap")])],-1)),e("ul",null,[l[79]||(l[79]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SitemapPluginOptions | boolean")])],-1)),l[80]||(l[80]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[77]||(l[77]=e("p",null,"Details:",-1)),e("p",null,[l[75]||(l[75]=n("Enable ")),s(t,{to:"/plugins/seo/sitemap/"},{default:i(()=>l[74]||(l[74]=[n("@vuepress/plugin-sitemap")])),_:1}),l[76]||(l[76]=n(" or not."))]),l[78]||(l[78]=e("p",null,"Object value is supported as plugin options.",-1))])]),l[102]||(l[102]=e("h2",{id:"themeplugins-tab",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-tab"},[e("span",null,"themePlugins.tab")])],-1)),e("ul",null,[l[88]||(l[88]=e("li",null,[e("p",null,[n("Type: "),e("code",null,"MarkdownTabPluginOptions | boolean")])],-1)),l[89]||(l[89]=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1)),e("li",null,[l[84]||(l[84]=e("p",null,"Details:",-1)),e("p",null,[l[82]||(l[82]=n("Enable ")),s(t,{to:"/plugins/markdown/markdown-tab.html"},{default:i(()=>l[81]||(l[81]=[n("@vuepress/plugin-markdown-tab")])),_:1}),l[83]||(l[83]=n(" or not."))])]),e("li",null,[l[87]||(l[87]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[s(t,{to:"/themes/default/markdown.html#code-tabs"},{default:i(()=>l[85]||(l[85]=[n("Default Theme > Markdown > Code Tabs")])),_:1})]),e("li",null,[s(t,{to:"/themes/default/markdown.html#tabs"},{default:i(()=>l[86]||(l[86]=[n("Default Theme > Markdown > Tabs")])),_:1})])])])])])}const h=u(m,[["render",d],["__file","plugin.html.vue"]]),f=JSON.parse('{"path":"/themes/default/plugin.html","title":"Plugins Config","lang":"en-US","frontmatter":{"icon":"unplug","description":"Plugins Config You can configure the plugins that used by default theme with themePlugins. Default theme is using some plugins by default. You can disable a plugin if you really...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/themes/default/plugin.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/themes/default/plugin.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Plugins Config"}],["meta",{"property":"og:description","content":"Plugins Config You can configure the plugins that used by default theme with themePlugins. Default theme is using some plugins by default. You can disable a plugin if you really..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plugins Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"themePlugins.activeHeaderLinks","slug":"themeplugins-activeheaderlinks","link":"#themeplugins-activeheaderlinks","children":[]},{"level":2,"title":"themePlugins.backToTop","slug":"themeplugins-backtotop","link":"#themeplugins-backtotop","children":[]},{"level":2,"title":"themePlugins.container","slug":"themeplugins-container","link":"#themeplugins-container","children":[]},{"level":2,"title":"themePlugins.copyCode","slug":"themeplugins-copycode","link":"#themeplugins-copycode","children":[]},{"level":2,"title":"themePlugins.git","slug":"themeplugins-git","link":"#themeplugins-git","children":[]},{"level":2,"title":"themePlugins.hint","slug":"themeplugins-hint","link":"#themeplugins-hint","children":[]},{"level":2,"title":"themePlugins.linksCheck","slug":"themeplugins-linkscheck","link":"#themeplugins-linkscheck","children":[]},{"level":2,"title":"themePlugins.mediumZoom","slug":"themeplugins-mediumzoom","link":"#themeplugins-mediumzoom","children":[]},{"level":2,"title":"themePlugins.nprogress","slug":"themeplugins-nprogress","link":"#themeplugins-nprogress","children":[]},{"level":2,"title":"themePlugins.prismjs","slug":"themeplugins-prismjs","link":"#themeplugins-prismjs","children":[]},{"level":2,"title":"themePlugins.seo","slug":"themeplugins-seo","link":"#themeplugins-seo","children":[]},{"level":2,"title":"themePlugins.sitemap","slug":"themeplugins-sitemap","link":"#themeplugins-sitemap","children":[]},{"level":2,"title":"themePlugins.tab","slug":"themeplugins-tab","link":"#themeplugins-tab","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mr.Hope"},{"name":"张怀文","username":"张怀文","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/张怀文"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":4,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"themes/default/plugin.md"}');export{h as comp,f as data};