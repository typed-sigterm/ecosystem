import{_ as s,c as a,d as t,o as e}from"./app-COIQldfe.js";const l={};function n(h,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Required: Yes</p></li><li><p>Details:</p><p>Deploy hostname.</p></li></ul><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h2><ul><li><p>Type: <code>Author</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AuthorName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AuthorInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * Author name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * Author website</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  url</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * Author email</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  email</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Author</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AuthorInfo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AuthorInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AuthorName</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AuthorName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li><li><p>Details:</p><p>Default author.</p></li></ul><h2 id="autodescription" tabindex="-1"><a class="header-anchor" href="#autodescription"><span>autoDescription</span></a></h2><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether generate description automatically</p></li></ul><h2 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical"><span>canonical</span></a></h2><ul><li><p>Type: <code>string | ((page: Page) =&gt; string | null)</code></p></li><li><p>Details:</p><p>Canonical link</p></li></ul><h2 id="fallbackimage" tabindex="-1"><a class="header-anchor" href="#fallbackimage"><span>fallBackImage</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Fallback Image link when no image are found</p></li></ul><h2 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions"><span>restrictions</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>The age rating of the content, the format is <code>[int]+</code>, such as <code>&quot;13+&quot;</code>.</p></li></ul><h2 id="twitterid" tabindex="-1"><a class="header-anchor" href="#twitterid"><span>twitterID</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Fill in your twitter username.</p></li></ul><h2 id="isarticle" tabindex="-1"><a class="header-anchor" href="#isarticle"><span>isArticle</span></a></h2><ul><li><p>Type: <code>(page: Page) =&gt; boolean</code></p></li><li><p>Details:</p><p>Use this option to judge whether the page is an article.</p></li></ul><h2 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>ogp</span></a></h2><ul><li><p>Type:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ogp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** OGP info inferred by plugin */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  ogpInfo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SeoContent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** Page Object */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  page</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** VuePress App */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SeoContent</span></span></code></pre></div></li><li><p>Required: No</p></li><li><p>Details:</p><p>Custom OPG Generator.</p><p>You can use this options to edit OGP tags.</p></li></ul><h2 id="jsonld" tabindex="-1"><a class="header-anchor" href="#jsonld"><span>jsonLd</span></a></h2><ul><li><p>Type:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> jsonLd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** JSON-LD Object inferred by plugin */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  jsonLD</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArticleSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> BlogPostingSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> WebPageSchema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** Page Object */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  page</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** VuePress App */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ArticleSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> BlogPostingSchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> WebPageSchema</span></span></code></pre></div></li><li><p>Required: No</p></li><li><p>Details:</p><p>Custom JSON-LD Generator.</p><p>You can use this options to edit JSON-LD properties.</p></li></ul><h2 id="customhead" tabindex="-1"><a class="header-anchor" href="#customhead"><span>customHead</span></a></h2><ul><li><p>Type:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> customHead</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** Head tag config */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  head</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HeadConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[],</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** Page Object */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  page</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /** VuePress App */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">  app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> void</span></span></code></pre></div></li><li><p>Required: No</p></li><li><p>Details:</p><p>You can use this options to edit tags injected to <code>&lt;head&gt;</code>.</p></li></ul>`,23)]))}const k=s(l,[["render",n],["__file","config.html.vue"]]),r=JSON.parse('{"path":"/plugins/seo/seo/config.html","title":"Config","lang":"en-US","frontmatter":{"icon":"settings-2","description":"Config hostname Type: string Required: Yes Details: Deploy hostname. author Type: Author Required: No Details: Default author. autoDescription Type: boolean Default: true Detail...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/seo/seo/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/seo/seo/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Config"}],["meta",{"property":"og:description","content":"Config hostname Type: string Required: Yes Details: Deploy hostname. author Type: Author Required: No Details: Default author. autoDescription Type: boolean Default: true Detail..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"author","slug":"author","link":"#author","children":[]},{"level":2,"title":"autoDescription","slug":"autodescription","link":"#autodescription","children":[]},{"level":2,"title":"canonical","slug":"canonical","link":"#canonical","children":[]},{"level":2,"title":"fallBackImage","slug":"fallbackimage","link":"#fallbackimage","children":[]},{"level":2,"title":"restrictions","slug":"restrictions","link":"#restrictions","children":[]},{"level":2,"title":"twitterID","slug":"twitterid","link":"#twitterid","children":[]},{"level":2,"title":"isArticle","slug":"isarticle","link":"#isarticle","children":[]},{"level":2,"title":"ogp","slug":"ogp","link":"#ogp","children":[]},{"level":2,"title":"jsonLd","slug":"jsonld","link":"#jsonld","children":[]},{"level":2,"title":"customHead","slug":"customhead","link":"#customhead","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":3,"url":"https://github.com/Mister-Hope"},{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/meteorlxy"},{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1,"url":"https://github.com/pengzhanbo"}]},"autoDesc":true,"filePathRelative":"plugins/seo/seo/config.md"}');export{k as comp,r as data};
