import{_ as l,c as a,a as s,b as n,d as t,o as h,r as p}from"./app-COIQldfe.js";const r={};function o(c,i){const e=p("NpmBadge");return h(),a("div",null,[i[0]||(i[0]=s("h1",{id:"copyright",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#copyright"},[s("span",null,"copyright")])],-1)),n(e,{package:"@vuepress/plugin-copyright"}),i[1]||(i[1]=t(`<p>This plugin can automatically append copyright information when visitors copy content from your site, and can also prohibit site copying or selection.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/plugin-copyright@next</span></span></code></pre></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">copyrightPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-copyright&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    copyrightPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // options</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="enabling-copyright" tabindex="-1"><a class="header-anchor" href="#enabling-copyright"><span>Enabling Copyright</span></a></h3><p>This plugin <strong>is disabled globally by default</strong>, you can:</p><ul><li>Manually enable it by setting <code>copy: true</code> in page frontmatter</li><li>Set <code>global: true</code> in plugin options to enable it globally, and set <code>copy: false</code> in page frontmatter to disable it.</li></ul><p>To avoid disturbing visitors, copyright information will be appended only when the copied content length is greater than 100. Set <code>triggerLength</code> in plugin options if you want to change this threshold, or via <code>copy.triggerLength</code> in page frontmatter.</p><p>You can set default author and license information via <code>author</code> and <code>license</code> in plugin options.</p><p>If your site have different authors and license in different pages, you can set <code>authorGetter</code> and <code>licenseGetter</code> with function <code>(page: Page) =&gt; string</code> that takes the current page object as parameter and returns the corresponding information.</p><p>The plugin will generate copyright information from author, license, and page link via template by default, and append it when copying. If you think that this is not flexible enough, you can set <code>copyrightGetter</code> option to return a completely customized information with Page object or return null to use the default template.</p><h3 id="disable-copy-and-selection" tabindex="-1"><a class="header-anchor" href="#disable-copy-and-selection"><span>Disable Copy and Selection</span></a></h3><p>If you want to prevent users copying long content, you can set <code>maxLength</code> in plugin options to customize this limit, or via <code>copy.maxLength</code> in page frontmatter.</p><ul><li>If you don&#39;t want users to copy your entire site or specific page text, you can set <code>disableCopy</code> in plugin options or <code>copy.disableCopy</code> in page frontmatter, the latter has higher priority.</li><li>If you don&#39;t want users to select your entire site or specific page text, you can set <code>disableSelection</code> in plugin options or <code>copy.disableSelection</code> in page frontmatter. This option has higher priority.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: Default author Information</li></ul><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>license</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: Default license Information</li></ul><h3 id="authorgetter" tabindex="-1"><a class="header-anchor" href="#authorgetter"><span>authorGetter</span></a></h3><ul><li>Type: <code>(page: Page) =&gt; string | null</code></li><li>Details: Author getter</li></ul><h3 id="licensegetter" tabindex="-1"><a class="header-anchor" href="#licensegetter"><span>licenseGetter</span></a></h3><ul><li>Type: <code>(page: Page) =&gt; string | null</code></li><li>Details: License getter</li></ul><h3 id="copyrightgetter" tabindex="-1"><a class="header-anchor" href="#copyrightgetter"><span>copyrightGetter</span></a></h3><ul><li>Type: <code>(page: Page) =&gt; string | null</code></li><li>Details: Copyright getter</li></ul><h3 id="triggerlength" tabindex="-1"><a class="header-anchor" href="#triggerlength"><span>triggerLength</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li><li>Details: Min content length triggering copyright append</li></ul><h3 id="maxlength" tabindex="-1"><a class="header-anchor" href="#maxlength"><span>maxLength</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>0</code></li><li>Details: Max content length which allows to copy, <code>0</code> means no limit.</li></ul><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>global</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Details: Whether enable globally.</li></ul><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy"><span>disableCopy</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Details: Disable copy</li></ul><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection"><span>disableSelection</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Details: Disable selection</li></ul><h3 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical"><span>canonical</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: Canonical deploy location.</li></ul><div class="hint-container tip"><p class="hint-container-title">Example</p><p>If you are deploying same content under <code>https://myblog.com</code> and <code>https://blog.com/username/</code>, you may want to prefer one site as reference link.</p><ul><li>If you prefer the first one, you should set <code>canonical</code> to <code>https://myblog.com</code></li><li>If you prefer the second one, you should set <code>canonical</code> to <code>https://blog.com/username/</code></li></ul><p>So copyright message triggered on another site also points to your preferred site.</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>Type: <code>CopyrightPluginLocaleConfig</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CopyrightPluginLocaleData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * Author text</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">description</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> \`:author\` will be replaced by author</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  author</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * License text</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">description</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> \`:license\` will be replaced by current license</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  license</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * Link text</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">description</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> \`:link\` will be replaced by current page link</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CopyrightPluginLocaleConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">localePath</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Partial</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">CopyrightPluginLocaleData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Details: Locale config for copyright plugin.</p></li><li><p>Example:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">copyrightPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-copyright&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  locales</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;/&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // this is a supported language</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      lang</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;en-US&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;/xx/&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // the plugin does not support this language</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      lang</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;mm-NN&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    copyrightPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      locales</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;/&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          // Override link text</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Original posted at :link&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;/xx/&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          // Complete locale config for \`mm-NN\` language here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li><li><strong>Dutch</strong> (nl-NL)</li></ul></details><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="copy-triggerlength" tabindex="-1"><a class="header-anchor" href="#copy-triggerlength"><span>copy.triggerLength</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li><li>Details: Min content length triggering copyright append</li></ul><h3 id="copy-maxlength" tabindex="-1"><a class="header-anchor" href="#copy-maxlength"><span>copy.maxLength</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>0</code></li><li>Details: Max content length which allows to copy, <code>0</code> means no limit.</li></ul><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy"><span>copy.disableCopy</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Details: Disable copy</li></ul><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection"><span>copy.disableSelection</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Details: Disable selection</li></ul>`,50))])}const k=l(r,[["render",o],["__file","copyright.html.vue"]]),g=JSON.parse('{"path":"/plugins/features/copyright.html","title":"copyright","lang":"en-US","frontmatter":{"icon":"fa-regular:copyright","description":"copyright","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/features/copyright.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/features/copyright.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"copyright"}],["meta",{"property":"og:description","content":"copyright"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"copyright\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Enabling Copyright","slug":"enabling-copyright","link":"#enabling-copyright","children":[]},{"level":3,"title":"Disable Copy and Selection","slug":"disable-copy-and-selection","link":"#disable-copy-and-selection","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"author","slug":"author","link":"#author","children":[]},{"level":3,"title":"license","slug":"license","link":"#license","children":[]},{"level":3,"title":"authorGetter","slug":"authorgetter","link":"#authorgetter","children":[]},{"level":3,"title":"licenseGetter","slug":"licensegetter","link":"#licensegetter","children":[]},{"level":3,"title":"copyrightGetter","slug":"copyrightgetter","link":"#copyrightgetter","children":[]},{"level":3,"title":"triggerLength","slug":"triggerlength","link":"#triggerlength","children":[]},{"level":3,"title":"maxLength","slug":"maxlength","link":"#maxlength","children":[]},{"level":3,"title":"global","slug":"global","link":"#global","children":[]},{"level":3,"title":"disableCopy","slug":"disablecopy","link":"#disablecopy","children":[]},{"level":3,"title":"disableSelection","slug":"disableselection","link":"#disableselection","children":[]},{"level":3,"title":"canonical","slug":"canonical","link":"#canonical","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"copy.triggerLength","slug":"copy-triggerlength","link":"#copy-triggerlength","children":[]},{"level":3,"title":"copy.maxLength","slug":"copy-maxlength","link":"#copy-maxlength","children":[]},{"level":3,"title":"copy.disableCopy","slug":"copy-disablecopy","link":"#copy-disablecopy","children":[]},{"level":3,"title":"copy.disableSelection","slug":"copy-disableselection","link":"#copy-disableselection","children":[]}]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":4,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"plugins/features/copyright.md"}');export{k as comp,g as data};
