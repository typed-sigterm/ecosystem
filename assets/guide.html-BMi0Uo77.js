import{_ as a,c as r,d as s,a as t,e as o,b as i,f as l,r as d,o as p}from"./app-COIQldfe.js";const u={};function g(m,e){const n=d("RouteLink");return p(),r("div",null,[e[12]||(e[12]=s('<h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>The plugin can generate feed files in the following three formats for you:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><p>Please set <code>atom</code>, <code>json</code> or <code>rss</code> to <code>true</code> in the plugin options according to the formats you want to generate.</p><p>To correctly generate feed links, you need to set <code>hostname</code> in the plugin options,</p><h2 id="readable-preview" tabindex="-1"><a class="header-anchor" href="#readable-preview"><span>Readable Preview</span></a></h2><p>When you open the feed file in browser, we magically convert atom and rss feed xml to human readable html via xsl template. Check <a href="/atom.xml" target="_blank" rel="noopener noreferrer">atom</a> and <a href="/rss.xml" target="_blank" rel="noopener noreferrer">rss</a> feed of this site as an example!</p><p>If you want to preview your feed in devServer, set <code>devServer: true</code> in plugin options. You may also need to set <code>devHostname</code> if you are not using the default <code>http://localhost:{port}</code>.</p><h2 id="channel-settings" tabindex="-1"><a class="header-anchor" href="#channel-settings"><span>Channel settings</span></a></h2><p>You can customize the feed channel information by setting the <code>channel</code> option.</p><p>We recommend the following settings:</p><ul><li>Convert the date of creating the feed to ISOString and write it into <code>channel.pubDate</code></li><li>The update period of the content set in <code>channel.ttl</code> (unit: minutes)</li><li>Set copyright information via <code>channel.copyright</code></li><li>Set the channel author via <code>channel.author</code>.</li></ul>',13)),t("p",null,[e[1]||(e[1]=o("For detailed options and their default values, see ")),i(n,{to:"/plugins/blog/feed/channel.html"},{default:l(()=>e[0]||(e[0]=[o("Channel Config")])),_:1})]),e[13]||(e[13]=t("h2",{id:"feed-generation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#feed-generation"},[t("span",null,"Feed Generation")])],-1)),e[14]||(e[14]=t("p",null,"By default, all articles are added to the feed stream.",-1)),t("p",null,[e[3]||(e[3]=o("You can set ")),e[4]||(e[4]=t("code",null,"feed",-1)),e[5]||(e[5]=o(" and other options in page frontmatter to control contents of feed item. See ")),i(n,{to:"/plugins/blog/feed/frontmatter.html"},{default:l(()=>e[2]||(e[2]=[o("Frontmatter Config")])),_:1}),e[6]||(e[6]=o(" for how they are converted."))]),t("p",null,[e[8]||(e[8]=o("You can take full control of feed items generation by configuring the ")),e[9]||(e[9]=t("code",null,"getter",-1)),e[10]||(e[10]=o(" in the plugin options. For detailed options and their default values, see ")),i(n,{to:"/plugins/blog/feed/getter.html"},{default:l(()=>e[7]||(e[7]=[o("Configuration → Feed Getter")])),_:1}),e[11]||(e[11]=o("."))]),e[15]||(e[15]=t("h3",{id:"i18n-config",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#i18n-config"},[t("span",null,"I18n Config")])],-1)),e[16]||(e[16]=t("p",null,"The plugin generates separate feeds for each language.",-1)),e[17]||(e[17]=t("p",null,[o("You can provide different settings for different languages via "),t("code",null,"locales"),o(" in the plugin options.")],-1))])}const h=a(u,[["render",g],["__file","guide.html.vue"]]),c=JSON.parse('{"path":"/plugins/blog/feed/guide.html","title":"Guide","lang":"en-US","frontmatter":{"icon":"lightbulb","description":"Guide Usage The plugin can generate feed files in the following three formats for you: Atom 1.0 JSON 1.1 RSS 2.0 Please set atom, json or rss to true in the plugin options accor...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/blog/feed/guide.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/blog/feed/guide.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Guide"}],["meta",{"property":"og:description","content":"Guide Usage The plugin can generate feed files in the following three formats for you: Atom 1.0 JSON 1.1 RSS 2.0 Please set atom, json or rss to true in the plugin options accor..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Readable Preview","slug":"readable-preview","link":"#readable-preview","children":[]},{"level":2,"title":"Channel settings","slug":"channel-settings","link":"#channel-settings","children":[]},{"level":2,"title":"Feed Generation","slug":"feed-generation","link":"#feed-generation","children":[{"level":3,"title":"I18n Config","slug":"i18n-config","link":"#i18n-config","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"plugins/blog/feed/guide.md"}');export{h as comp,c as data};