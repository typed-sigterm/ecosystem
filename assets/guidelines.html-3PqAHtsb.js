import{_ as l,c,d as o,b as a,o as i,r as d}from"./app-COIQldfe.js";const n={};function s(p,e){const t=d("PaletteDisplay");return i(),c("div",null,[e[0]||(e[0]=o('<h1 id="主题指南" tabindex="-1"><a class="header-anchor" href="#主题指南"><span>主题指南</span></a></h1><p>为了避免主题开发者和用户设置不必要的选项，我们制定了一套主题创建时应遵循的指南。</p><h2 id="dom-结构" tabindex="-1"><a class="header-anchor" href="#dom-结构"><span>DOM 结构</span></a></h2><p>一个主题必须实现以下 DOM 结构：</p><ul><li>容器：一个包含整个主题的元素。此元素应该有一个 <code>vp-container</code> 属性。</li><li>内容：一个包含 markdown 渲染结果的元素。此元素应该有一个 <code>vp-content</code> 属性。</li></ul><p>一个主题可以有以下可选元素：</p><ul><li>导航栏：站点的导航栏。此元素应该有一个 <code>vp-navbar</code> 属性。</li><li>侧边栏：站点的侧边栏。此元素应该有一个 <code>vp-sidebar</code> 属性。</li><li>大纲：主要内容的标题或大纲。此元素应该有一个 <code>vp-outline</code> 属性。</li><li>评论：评论服务（评论框和评论列表）。此元素应该有一个 <code>vp-comment</code> 属性。</li><li>页脚：站点的页脚。此元素应该有一个 <code>vp-footer</code> 属性。</li></ul><p>一个主题必须：</p><ul><li>在暗色模式下，将 html 元素的 <code>data-theme</code> 设置为 <code>dark</code>。</li><li>在亮色模式下，将 html 元素的 <code>data-theme</code> 设置为 <code>light</code>。</li></ul><p>如果主题只有一种颜色方案，主题仍然需要将 <code>data-theme</code> 设置为 <code>light</code> 或 <code>dark</code>，以指示默认颜色方案。</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>为了支持搜索插件，主题应检查 <code>&lt;SearchBox /&gt;</code> 是否已全局注册，并在其自己的导航栏或侧边栏中呈现（如果可用）。</p><h2 id="颜色变量" tabindex="-1"><a class="header-anchor" href="#颜色变量"><span>颜色变量</span></a></h2><p>一个主题必须实现以下颜色变量：</p><h3 id="文字" tabindex="-1"><a class="header-anchor" href="#文字"><span>文字</span></a></h3><ul><li><code>--vp-c-text</code>：默认文本颜色。</li><li><code>--vp-c-text-mute</code>：用于静音文本的颜色，例如“非活动菜单”或“信息文本”。</li><li><code>--vp-c-text-subtle</code>：用于细微文本的颜色，例如“占位符”或“插入符号”。</li></ul><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><ul><li><code>--vp-c-bg</code>：用于主屏幕的背景颜色。</li><li><code>--vp-c-bg-alt</code>：用于“侧边栏”或“代码块”等地方的备用背景颜色。</li><li><code>--vp-c-bg-elv</code>：用于“浮动”部分的提升背景颜色，例如“对话框”。</li></ul><h3 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影"><span>阴影</span></a></h3><ul><li><code>--vp-c-shadow</code>：阴影颜色</li></ul><h3 id="强调" tabindex="-1"><a class="header-anchor" href="#强调"><span>强调</span></a></h3><p>用于交互组件的强调颜色和品牌颜色。</p><ul><li><p><code>--vp-c-accent</code>：主要用于彩色文本的最实色。它必须满足与放在 <code>--vp-c-accent-soft</code> 顶部时的对比度。</p></li><li><p><code>--vp-c-accent-hover</code>：用于悬停状态的颜色。</p></li><li><p><code>--vp-c-accent-bg</code>：用于实色背景的颜色。它必须满足与放在其顶部的 <code>--vp-c-accent-text</code> 的对比度。</p></li><li><p><code>--vp-c-accent-text</code>：用于 <code>--vp-c-accent-bg</code> 背景的文本颜色。它必须满足与 <code>--vp-c-accent-bg</code> 的对比度。</p></li><li><p><code>--vp-c-accent-soft</code>：用于自定义容器或徽章等细微背景的颜色。当将 <code>--vp-c-accent</code> 颜色放在其顶部时，它必须满足对比度。</p><p>软色必须是半透明的 alpha 通道。这是至关重要的，因为它允许将多个“软”颜色叠加在一起以创建强调，例如在自定义容器内部有内联代码块时。</p></li></ul><h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h3><ul><li><code>--vp-c-border</code>：交互组件的边框颜色。例如，这应该用于按钮轮廓。</li><li><code>--vp-c-border-hard</code>：较暗的边框颜色，用于紧贴文本的“硬”边框，例如表格和 kbd。</li><li><code>--vp-c-divider</code>：分隔符的颜色，用于在同一组件内分隔部分，例如在“h2”标题上放置分隔符。</li></ul><h3 id="控件" tabindex="-1"><a class="header-anchor" href="#控件"><span>控件</span></a></h3><ul><li><code>--vp-c-control</code>：用于交互控件（例如按钮或复选框）的背景颜色。</li><li><code>--vp-c-control-hover</code>：用于交互控件悬停状态的背景颜色。</li><li><code>--vp-c-control-disabled</code>：用于交互控件禁用状态的颜色。</li></ul><h2 id="过渡时间" tabindex="-1"><a class="header-anchor" href="#过渡时间"><span>过渡时间</span></a></h2><ul><li><code>--vp-t-color</code>：颜色过渡时间。</li><li><code>--vp-t-transform</code>：变换过渡时间。</li></ul><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>',30)),a(t)])}const h=l(n,[["render",s],["__file","guidelines.html.vue"]]),m=JSON.parse('{"path":"/zh/themes/guidelines.html","title":"主题指南","lang":"zh-CN","frontmatter":{"icon":"signpost","description":"主题指南 为了避免主题开发者和用户设置不必要的选项，我们制定了一套主题创建时应遵循的指南。 DOM 结构 一个主题必须实现以下 DOM 结构： 容器：一个包含整个主题的元素。此元素应该有一个 vp-container 属性。 内容：一个包含 markdown 渲染结果的元素。此元素应该有一个 vp-content 属性。 一个主题可以有以下可选元素： ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/themes/guidelines.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/themes/guidelines.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"主题指南"}],["meta",{"property":"og:description","content":"主题指南 为了避免主题开发者和用户设置不必要的选项，我们制定了一套主题创建时应遵循的指南。 DOM 结构 一个主题必须实现以下 DOM 结构： 容器：一个包含整个主题的元素。此元素应该有一个 vp-container 属性。 内容：一个包含 markdown 渲染结果的元素。此元素应该有一个 vp-content 属性。 一个主题可以有以下可选元素： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-10T18:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-10T18:07:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主题指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T18:07:54.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"DOM 结构","slug":"dom-结构","link":"#dom-结构","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]},{"level":2,"title":"颜色变量","slug":"颜色变量","link":"#颜色变量","children":[{"level":3,"title":"文字","slug":"文字","link":"#文字","children":[]},{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"阴影","slug":"阴影","link":"#阴影","children":[]},{"level":3,"title":"强调","slug":"强调","link":"#强调","children":[]},{"level":3,"title":"边框","slug":"边框","link":"#边框","children":[]},{"level":3,"title":"控件","slug":"控件","link":"#控件","children":[]}]},{"level":2,"title":"过渡时间","slug":"过渡时间","link":"#过渡时间","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]}],"git":{"updatedTime":1736532474000,"contributors":[{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":4,"url":"https://github.com/Mister-Hope"}]},"autoDesc":true,"filePathRelative":"zh/themes/guidelines.md"}');export{h as comp,m as data};