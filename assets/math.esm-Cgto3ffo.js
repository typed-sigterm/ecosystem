const f=()=>{let t,s={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(d){t=d;let n=t.getConfig().mathjax2||t.getConfig().math||{},e={...s,...n},i=(e.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(e.config||"TeX-AMS_HTML-full");e.tex2jax={...s.tex2jax,...n.tex2jax},e.mathjax=e.config=null,function(a,o){let l=document.querySelector("head"),r=document.createElement("script");r.type="text/javascript",r.src=a;let c=()=>{typeof o=="function"&&(o.call(),o=null)};r.onload=c,r.onreadystatechange=()=>{this.readyState==="loaded"&&c()},l.appendChild(r)}(i,function(){MathJax.Hub.Config(e),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",function(a){MathJax.Hub.Queue(["Typeset",MathJax.Hub,a.currentSlide])})})}}},M=f;/*!
 * This plugin is a wrapper for the MathJax2,
 * MathJax3 and KaTeX typesetter plugins.
 */var J=Plugin=Object.assign(M(),{KaTeX:()=>{let t,s={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]};const d=n=>new Promise((e,i)=>{const a=document.createElement("script");a.type="text/javascript",a.onload=e,a.onerror=i,a.src=n,document.head.append(a)});return{id:"katex",init:function(n){t=n;let e=t.getConfig().katex||{},i={...s,...e};const{local:a,version:o,extensions:l,...r}=i;let c=i.local||"https://cdn.jsdelivr.net/npm/katex",p=i.local?"":"@"+i.version,y=c+p+"/dist/katex.min.css",g=c+p+"/dist/contrib/mhchem.min.js",j=c+p+"/dist/contrib/auto-render.min.js",h=[c+p+"/dist/katex.min.js"];i.extensions&&i.extensions.includes("mhchem")&&h.push(g),h.push(j);const m=()=>{renderMathInElement(n.getSlidesElement(),r),t.layout()};(x=>{let u=document.createElement("link");u.rel="stylesheet",u.href=x,document.head.appendChild(u)})(y),async function(x){for(const u of x)await d(u)}(h).then(()=>{t.isReady()?m():t.on("ready",m.bind(this))})}}},MathJax2:f,MathJax3:()=>{let t,s={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{t.layout()})}}};return{id:"mathjax3",init:function(d){t=d;let n=t.getConfig().mathjax3||{},e={...s,...n};e.tex={...s.tex,...n.tex},e.options={...s.options,...n.options},e.startup={...s.startup,...n.startup};let i=e.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";e.mathjax=null,window.MathJax=e,function(a,o){let l=document.createElement("script");l.type="text/javascript",l.id="MathJax-script",l.src=a,l.async=!0,l.onload=()=>{typeof o=="function"&&(o.call(),o=null)},document.head.appendChild(l)}(i,function(){t.addEventListener("slidechanged",function(a){MathJax.typeset()})})}}}});export{J as default};
