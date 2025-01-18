import{_ as n,c as i,d as s,a,e as t,b as r,f as l,r as c,o as p}from"./app-COIQldfe.js";const d={};function m(h,e){const o=c("RouteLink");return p(),i("div",null,[e[3]||(e[3]=s('<h1 id="twikoo" tabindex="-1"><a class="header-anchor" href="#twikoo"><span>Twikoo</span></a></h1><p>A concise, safe and free static site commenting system, based on <a href="https://curl.qcloud.com/KnnJtUom" target="_blank" rel="noopener noreferrer">Tencent Cloud Development</a>.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> twikoo</span></span></code></pre></div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting started</span></a></h2><ol><li><p>Apply for <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noopener noreferrer">MongoDB</a> account</p></li><li><p>Create a free MongoDB database, the recommended region is <code>AWS / N. Virginia (us-east-1)</code></p></li><li><p>Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses (<a href="https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address" target="_blank" rel="noopener noreferrer">Why?</a>), create Database user, and record the database connection string, please change the <code>&lt;password&gt;</code> in the connection string to the database password</p></li><li><p>Sign up for a <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">Vercel</a> account</p></li><li><p>Click the button below to deploy Twikoo to Vercel in one click</p><figure><a href="https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/dev/src/vercel-min" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"></a><figcaption>Vercel</figcaption></figure></li><li><p>Go to Settings - Environment Variables, add the environment variable <code>MONGODB_URI</code>, the value is the database connection string in step 3</p></li><li><p>Go to Overview, click the link under Domains, if the environment configuration is correct, you can see the prompt &quot;Twikoo cloud function is running normally&quot;</p></li><li><p>Vercel Domains (with <code>https://</code> prefix, e.g. <code>https://xxx.vercel.app</code>) is your environment ID</p></li></ol><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>Please set <code>provider: &quot;Twikoo&quot;</code> and set <code>envId</code> in the plugin options.</p>',8)),a("p",null,[e[1]||(e[1]=t("For other configuration items, see ")),r(o,{to:"/plugins/blog/comment/twikoo/config.html"},{default:l(()=>e[0]||(e[0]=[t("Twikoo Config")])),_:1}),e[2]||(e[2]=t("."))])])}const u=n(d,[["render",m],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/plugins/blog/comment/twikoo/","title":"Twikoo","lang":"en-US","frontmatter":{"icon":"https://twikoo.js.org/twikoo-logo-mini.png","description":"Twikoo A concise, safe and free static site commenting system, based on Tencent Cloud Development. Install Getting started Apply for MongoDB account Create a free MongoDB databa...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/blog/comment/twikoo/"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/blog/comment/twikoo/"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Twikoo"}],["meta",{"property":"og:description","content":"Twikoo A concise, safe and free static site commenting system, based on Tencent Cloud Development. Install Getting started Apply for MongoDB account Create a free MongoDB databa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vercel.com/button"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Twikoo\\",\\"image\\":[\\"https://vercel.com/button\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Getting started","slug":"getting-started","link":"#getting-started","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"plugins/blog/comment/twikoo/README.md"}');export{u as comp,k as data};