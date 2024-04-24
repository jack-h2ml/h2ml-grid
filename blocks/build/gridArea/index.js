(()=>{"use strict";var t,e={133:()=>{const t=window.wp.blocks,e=window.React,r=window.wp.primitives,n=(0,e.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(r.Path,{d:"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"})),o=JSON.parse('{"UU":"h2ml/grid-area"}'),i=window.wp.blockEditor,l=window.wp.data,a=window.wp.i18n,c=window.wp.components,s=(0,e.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(r.Path,{d:"M7 18h4.5v1.5h-7v-7H6V17L17 6h-4.5V4.5h7v7H18V7L7 18Z"}));function d({updateGridArea:t,hideGridArea:r}){const n=(0,a.__)("Resize Grid Area","h2ml"),o=(0,a.__)("Hides Grid Area for current breakpoint","h2ml"),l=(0,a.__)("Hide","h2ml");return(0,e.createElement)(i.BlockControls,null,(0,e.createElement)(c.ToolbarGroup,null,(0,e.createElement)(c.ToolbarButton,{icon:s,label:n,onClick:t}),(0,e.createElement)(c.ToolbarButton,{label:o,showTooltip:!0,onClick:r},l)))}(0,t.registerBlockType)(o.UU,{icon:n,edit:function({attributes:t,clientId:r,context:n,__unstableLayoutClassNames:o,setAttributes:a}){const{breakpoints:c}=t,{"h2ml-grid/activeBreakpointId":s=1,"h2ml-grid/definingGridArea":u}=n,p=c[s],{__unstableMarkNextChangeAsNotPersistent:m}=(0,l.useDispatch)("core/block-editor"),w={gridColumnStart:p.colStart,gridColumnEnd:p.colEnd,gridRowStart:p.rowStart,gridRowEnd:p.rowEnd},h=(0,i.useInnerBlocksProps)((0,i.useBlockProps)({style:w}));return Object.keys(p).length>1&&(0,e.createElement)(e.Fragment,null,!u&&(0,e.createElement)(d,{updateGridArea:()=>{const t=(0,l.select)("core/block-editor").getBlockRootClientId(r);m(),(0,l.dispatch)("core/block-editor").updateBlockAttributes(t,{definingGridArea:{gridAreaClientId:r,existingBreakpoints:c}})},hideGridArea:()=>{a({breakpoints:{...c,[s]:{mediaQuery:p.mediaQuery}}})}}),(0,e.createElement)("div",{...h}))},save:function({attributes:{breakpoints:t},...r}){const{children:n,...o}=i.useInnerBlocksProps.save(i.useBlockProps.save()),l=Object.keys(t).reduce(((e,r)=>{const{mediaQuery:n,...o}=t[r];return console.log(t),e+`@media screen and ${n} {\n\t\t\t@scope {\n\t\t\t\t:scope.wp-block-h2ml-grid-area {\n\t\t\t\t\t${Object.keys(o).length?`\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tgrid-column-start: ${o.colStart};\n\t\t\t\t\t\t\tgrid-column-end: ${o.colEnd};\n\t\t\t\t\t\t\tgrid-row-start: ${o.rowStart};\n\t\t\t\t\t\t\tgrid-row-end: ${o.rowEnd};\n\t\t\t\t\t\t`:"\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t"}\n\t\t\t\t}\n\t\t\t}\n\t\t}`}),"").replace(/	|\r\n|\n|\r/gm,"");return(0,e.createElement)("div",{...o},(0,e.createElement)("style",null,l),n)},usesContext:["h2ml-grid/activeBreakpointId","h2ml-grid/definingGridArea"]})}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var l=1/0;for(d=0;d<t.length;d++){for(var[r,o,i]=t[d],a=!0,c=0;c<r.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((t=>n.O[t](r[c])))?r.splice(c--,1):(a=!1,i<l&&(l=i));if(a){t.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,o,i]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={689:0,621:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[l,a,c]=r,s=0;if(l.some((e=>0!==t[e]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(e&&e(r);s<l.length;s++)i=l[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},r=globalThis.webpackChunkh2ml_grid=globalThis.webpackChunkh2ml_grid||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[621],(()=>n(133)));o=n.O(o)})();