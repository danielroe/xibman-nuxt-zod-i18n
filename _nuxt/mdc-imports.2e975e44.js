import{_ as c}from"./entry.43e2d487.js";import{v as u,t as d}from"./index.f004784d.js";import"./MDCRenderer.4242014e.js";import"./_commonjsHelpers.725317a4.js";import"./defu.f37419ff.js";import"./node.f7b4ab96.js";import"./Card.d7b6c746.js";const f={theme:{default:"github-light",dark:"github-dark"},async highlighter(i,r,e,n){var o,s;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return c(()=>import("./highlighter.516d1592.js"),["./highlighter.516d1592.js","./entry.43e2d487.js","./entry.16173371.css"],import.meta.url).then(({useShikiHighlighter:t})=>t().getHighlightedAST(i,r,e,{highlights:n}));try{return await $fetch("/api/_mdc/highlight",{params:{code:i,lang:r,theme:JSON.stringify(e),highlights:JSON.stringify(n)}})}catch(t){if(((o=t==null?void 0:t.response)==null?void 0:o.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,r,e,n)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function y(i={}){const r={...f,...i};return async e=>{const n=[],o=[];u(e,s=>{var t;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language)},s=>{const t=s,m=r.highlighter(d(s),t.properties.language,r.theme,t.properties.highlights??[]).then(({tree:h,className:p,style:a,inlineStyle:g})=>{var l;t.properties.className=((t.properties.className||"")+" "+p).trim(),t.properties.style=((t.properties.style||"")+" "+g).trim(),((l=t.children[0])==null?void 0:l.tagName)==="code"?t.children[0].children=h:t.children=h[0].children||h[0],a&&o.push(a)});n.push(m)}),n.length&&(await Promise.all(n),e.children.push({type:"element",tagName:"style",children:[{type:"text",value:_(o.join(""))}],properties:{}}))}}const _=i=>{const r=i.split("}").filter(e=>!!e.trim()).map(e=>e.trim()+"}");return Array.from(new Set(r)).join("")},P={},b={highlight:{instance:y,options:{src:"/home/runner/work/nuxt-zod-i18n/nuxt-zod-i18n/node_modules/.pnpm/@nuxtjs+mdc@0.2.8_rollup@4.8.0/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"}}},A={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"},preload:["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};export{A as highlight,b as rehypePlugins,P as remarkPlugins};
