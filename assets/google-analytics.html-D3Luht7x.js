import{_ as a,c as t,a as i,b as n,d as l,o as p,r as o}from"./app-KbVIQgPv.js";const h={};function r(g,s){const e=o("NpmBadge");return p(),t("div",null,[s[0]||(s[0]=i("h1",{id:"google-analytics",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#google-analytics"},[i("span",null,"google-analytics")])],-1)),n(e,{package:"@vuepress/plugin-google-analytics"}),s[1]||(s[1]=l(`<p>Integrate <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a> into VuePress.</p><p>This plugin will import <a href="https://developers.google.com/analytics/devguides/collection/gtagjs" target="_blank" rel="noopener noreferrer">gtag.js</a> for <a href="https://support.google.com/analytics/answer/10089681" target="_blank" rel="noopener noreferrer">Google Analytics 4</a>.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-google-analytics@next</span></span></code></pre></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3><p>Google Analytics will <a href="https://support.google.com/analytics/answer/9234069" target="_blank" rel="noopener noreferrer">automatically collect some events</a>, such as <code>page_view</code>, <code>first_visit</code>, etc.</p><p>So if you only want to collect some basic data of your site, you don&#39;t need to do anything else except setting the <a href="#id">Measurement ID</a> correctly.</p><p>After using this plugin, the global <code>gtag()</code> function is available on the <code>window</code> object, and you can use it for <a href="https://developers.google.com/analytics/devguides/collection/ga4/events" target="_blank" rel="noopener noreferrer">custom events reporting</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>The Measurement ID of Google Analytics 4, which should start with <code>&#39;G-&#39;</code>.</p><p>You can follow the instructions <a href="https://support.google.com/analytics/answer/9539598" target="_blank" rel="noopener noreferrer">here</a> to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. &quot;G-&quot; ID) and Universal Analytics Tracking ID (i.e. &quot;UA-&quot; ID).</p></li><li><p>Example:</p></li></ul><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;G-XXXXXXXXXX&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Set to <code>true</code> to enable sending events to DebugView. <a href="https://support.google.com/analytics/answer/7201382" target="_blank" rel="noopener noreferrer">See more information on DebugView</a>.</p></li><li><p>Example:</p></li></ul><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;G-XXXXXXXXXX&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      debug</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div>`,16))])}const c=a(h,[["render",r],["__file","google-analytics.html.vue"]]),d=JSON.parse('{"path":"/plugins/analytics/google-analytics.html","title":"google-analytics","lang":"en-US","frontmatter":{"icon":"chart-no-axes-combined","description":"google-analytics","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/analytics/google-analytics.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/analytics/google-analytics.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"google-analytics"}],["meta",{"property":"og:description","content":"google-analytics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"google-analytics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Reporting Events","slug":"reporting-events","link":"#reporting-events","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"debug","slug":"debug","link":"#debug","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"plugins/analytics/google-analytics.md"}');export{c as comp,d as data};
