(()=>{"use strict";var e,t={400:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.primitives,r=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})),a=JSON.parse('{"UU":"h2ml/grid","uK":{"fi":{"A":[{"id":1,"name":"","mediaQuery":"(min-width: 0px)","colCount":3,"rowCount":4,"colDefinitions":["1fr","1fr","1fr"],"rowDefinitions":["max-content","max-content","max-content","max-content"]}]}}}'),i=window.wp.blockEditor,o=window.wp.data,s=window.wp.element,l=window.wp.i18n;const c=window.wp.components,u=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})),d=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),p=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"})),m=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),f=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"}));function h({breakpoints:e,activeBreakpointId:n,activeBreakpointName:r,setActiveBreakpointId:a,createBreakpoint:o,reorderBreakpoint:s,deleteBreakpoint:h}){const g=(0,l.sprintf)((0,l.__)('Delete "%s"',"h2ml"),r),b=(0,l.__)("Decrease Priority","h2ml"),v=(0,l.__)("Increase Priority","h2ml");return(0,t.createElement)(i.BlockControls,null,(0,t.createElement)(c.ToolbarGroup,null,(0,t.createElement)(c.ToolbarButton,{icon:u,label:(0,l.__)("Add Breakpoint","h2ml"),onClick:o,showTooltip:!0}),e.map(((r,i)=>{const o=n===r.id;return(0,t.createElement)("div",{className:"wp-block-h2ml-grid--toolbar--active-breakpoint-group "+(o?"active":"")},o&&(0,t.createElement)(c.ToolbarButton,{icon:d,onClick:()=>s(-1),disabled:0===i,label:b}),(0,t.createElement)(c.ToolbarButton,{icon:p,label:o?(0,l.sprintf)('%s "%s"',(0,l.__)("Currently Editing","h2ml"),r.name):(0,l.sprintf)('%s "%s"',(0,l.__)("Edit","h2ml"),r.name),onClick:()=>!o&&a(r.id),showTooltip:!0}),o&&(0,t.createElement)(c.ToolbarButton,{icon:m,onClick:()=>s(1),disabled:i===e.length-1,label:v}))})),e.length>1&&(0,t.createElement)(c.ToolbarButton,{label:g,onClick:h,showTooltip:!0,icon:f})))}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function b(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var v=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,k=b((function(e){return v.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),y=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),w=Math.abs,x=String.fromCharCode,_=Object.assign;function E(e){return e.trim()}function C(e,t,n){return e.replace(t,n)}function A(e,t){return e.indexOf(t)}function S(e,t){return 0|e.charCodeAt(t)}function B(e,t,n){return e.slice(t,n)}function P(e){return e.length}function T(e){return e.length}function I(e,t){return t.push(e),e}var O=1,M=1,R=0,N=0,$=0,D="";function z(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:O,column:M,length:o,return:""}}function G(e,t){return _(z("",null,null,"",null,null,0),e,{length:-e.length},t)}function H(){return $=N>0?S(D,--N):0,M--,10===$&&(M=1,O--),$}function j(){return $=N<R?S(D,N++):0,M++,10===$&&(M=1,O++),$}function V(){return S(D,N)}function L(){return N}function U(e,t){return B(D,e,t)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q(e){return O=M=1,R=P(D=e),N=0,[]}function q(e){return D="",e}function W(e){return E(U(N-1,K(91===e?e+2:40===e?e+1:e)))}function X(e){for(;($=V())&&$<33;)j();return F(e)>2||F($)>3?"":" "}function Z(e,t){for(;--t&&j()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return U(e,L()+(t<6&&32==V()&&32==j()))}function K(e){for(;j();)switch($){case e:return N;case 34:case 39:34!==e&&39!==e&&K($);break;case 40:41===e&&K(e);break;case 92:j()}return N}function Y(e,t){for(;j()&&e+$!==57&&(e+$!==84||47!==V()););return"/*"+U(t,N-1)+"*"+x(47===e?e:j())}function J(e){for(;!F(V());)j();return U(e,N)}var ee="-ms-",te="-moz-",ne="-webkit-",re="comm",ae="rule",ie="decl",oe="@keyframes";function se(e,t){for(var n="",r=T(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function le(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ie:return e.return=e.return||e.value;case re:return"";case oe:return e.return=e.value+"{"+se(e.children,r)+"}";case ae:e.value=e.props.join(",")}return P(n=se(e.children,r))?e.return=e.value+"{"+n+"}":""}function ce(e){return q(ue("",null,null,null,[""],e=Q(e),0,[0],e))}function ue(e,t,n,r,a,i,o,s,l){for(var c=0,u=0,d=o,p=0,m=0,f=0,h=1,g=1,b=1,v=0,k="",y=a,w=i,_=r,E=k;g;)switch(f=v,v=j()){case 40:if(108!=f&&58==S(E,d-1)){-1!=A(E+=C(W(v),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:E+=W(v);break;case 9:case 10:case 13:case 32:E+=X(f);break;case 92:E+=Z(L()-1,7);continue;case 47:switch(V()){case 42:case 47:I(pe(Y(j(),L()),t,n),l);break;default:E+="/"}break;case 123*h:s[c++]=P(E)*b;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==b&&(E=C(E,/\f/g,"")),m>0&&P(E)-d&&I(m>32?me(E+";",r,n,d-1):me(C(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(I(_=de(E,t,n,c,u,a,s,k,y=[],w=[],d),i),123===v)if(0===u)ue(E,t,_,_,y,i,d,s,w);else switch(99===p&&110===S(E,3)?100:p){case 100:case 108:case 109:case 115:ue(e,_,_,r&&I(de(e,_,_,0,0,a,s,k,a,y=[],d),w),a,w,d,s,r?y:w);break;default:ue(E,_,_,_,[""],w,0,s,w)}}c=u=m=0,h=b=1,k=E="",d=o;break;case 58:d=1+P(E),m=f;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==H())continue;switch(E+=x(v),v*h){case 38:b=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(P(E)-1)*b,b=1;break;case 64:45===V()&&(E+=W(j())),p=V(),u=d=P(k=E+=J(L())),v++;break;case 45:45===f&&2==P(E)&&(h=0)}}return i}function de(e,t,n,r,a,i,o,s,l,c,u){for(var d=a-1,p=0===a?i:[""],m=T(p),f=0,h=0,g=0;f<r;++f)for(var b=0,v=B(e,d+1,d=w(h=o[f])),k=e;b<m;++b)(k=E(h>0?p[b]+" "+v:C(v,/&\f/g,p[b])))&&(l[g++]=k);return z(e,t,n,0===a?ae:s,l,c,u)}function pe(e,t,n){return z(e,t,n,re,x($),B(e,2,-2),0)}function me(e,t,n,r){return z(e,t,n,ie,B(e,0,r),B(e,r+1,-1),r)}var fe=function(e,t,n){for(var r=0,a=0;r=a,a=V(),38===r&&12===a&&(t[n]=1),!F(a);)j();return U(e,N)},he=new WeakMap,ge=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||he.get(n))&&!r){he.set(e,!0);for(var a=[],i=function(e,t){return q(function(e,t){var n=-1,r=44;do{switch(F(r)){case 0:38===r&&12===V()&&(t[n]=1),e[n]+=fe(N-1,t,n);break;case 2:e[n]+=W(r);break;case 4:if(44===r){e[++n]=58===V()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=x(r)}}while(r=j());return e}(Q(e),t))}(t,a),o=n.props,s=0,l=0;s<i.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}},be=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ve(e,t){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+te+e+ee+e+e;case 6828:case 4268:return ne+e+ee+e+e;case 6165:return ne+e+ee+"flex-"+e+e;case 5187:return ne+e+C(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return ne+e+ee+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return ne+e+ee+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return ne+e+ee+C(e,"shrink","negative")+e;case 5292:return ne+e+ee+C(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+C(e,"-grow","")+ne+e+ee+C(e,"grow","positive")+e;case 4554:return ne+C(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+te+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~A(e,"stretch")?ve(C(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==S(e,t+1))break;case 6444:switch(S(e,P(e)-3-(~A(e,"!important")&&10))){case 107:return C(e,":",":"+ne)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ne+(45===S(e,14)?"inline-":"")+"box$3$1"+ne+"$2$3$1"+ee+"$2box$3")+e}break;case 5936:switch(S(e,t+11)){case 114:return ne+e+ee+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+ee+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+ee+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ne+e+ee+e+e}return e}var ke=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ie:e.return=ve(e.value,e.length);break;case oe:return se([G(e,{value:C(e.value,"@","@"+ne)})],r);case ae:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return se([G(e,{props:[C(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return se([G(e,{props:[C(t,/:(plac\w+)/,":"+ne+"input-$1")]}),G(e,{props:[C(t,/:(plac\w+)/,":-moz-$1")]}),G(e,{props:[C(t,/:(plac\w+)/,ee+"input-$1")]})],r)}return""}))}}],ye=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,i=e.stylisPlugins||ke,o={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;s.push(e)}));var l,c,u,d,p=[le,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],m=(c=[ge,be].concat(i,p),u=T(c),function(e,t,n,r){for(var a="",i=0;i<u;i++)a+=c[i](e,t,n,r)||"";return a});a=function(e,t,n,r){l=n,se(ce(e?e+"{"+t.styles+"}":t.styles),m),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new y({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return f.sheet.hydrate(s),f},we={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe=/[A-Z]|^ms/g,_e=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ee=function(e){return 45===e.charCodeAt(1)},Ce=function(e){return null!=e&&"boolean"!=typeof e},Ae=b((function(e){return Ee(e)?e:e.replace(xe,"-$&").toLowerCase()})),Se=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(_e,(function(e,t,n){return Pe={name:t,styles:n,next:Pe},t}))}return 1===we[e]||Ee(e)||"number"!=typeof t||0===t?t:t+"px"};function Be(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return Pe={name:n.name,styles:n.styles,next:Pe},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)Pe={name:r.name,styles:r.styles,next:Pe},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Be(e,t,n[a])+";";else for(var i in n){var o=n[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?r+=i+"{"+t[o]+"}":Ce(o)&&(r+=Ae(i)+":"+Se(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=Be(e,t,o);switch(i){case"animation":case"animationName":r+=Ae(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var l=0;l<o.length;l++)Ce(o[l])&&(r+=Ae(i)+":"+Se(i,o[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=Pe,i=n(e);return Pe=a,Be(e,t,i)}}if(null==t)return n;var o=t[n];return void 0!==o?o:n}var Pe,Te=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ie=!!t.useInsertionEffect&&t.useInsertionEffect,Oe=Ie||function(e){return e()},Me=(Ie||t.useLayoutEffect,t.createContext("undefined"!=typeof HTMLElement?ye({key:"css"}):null));Me.Provider;var Re=t.createContext({}),Ne=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},$e=k,De=function(e){return"theme"!==e},ze=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?$e:De},Ge=function(e,t,n){var r;if(t){var a=t.shouldForwardProp;r=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},He=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ne(t,n,r),Oe((function(){return function(e,t,n){Ne(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,n,r)})),null},je=function e(n,r){var a,i,o=n.__emotion_real===n,s=o&&n.__emotion_base||n;void 0!==r&&(a=r.label,i=r.target);var l=Ge(n,r,o),c=l||ze(s),u=!c("as");return function(){var d=arguments,p=o&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&p.push("label:"+a+";"),null==d[0]||void 0===d[0].raw)p.push.apply(p,d);else{p.push(d[0][0]);for(var m=d.length,f=1;f<m;f++)p.push(d[f],d[0][f])}var h,b=(h=function(e,n,r){var a,o,d,m,f=u&&e.as||s,h="",g=[],b=e;if(null==e.theme){for(var v in b={},e)b[v]=e[v];b.theme=t.useContext(Re)}"string"==typeof e.className?(a=n.registered,o=g,d=e.className,m="",d.split(" ").forEach((function(e){void 0!==a[e]?o.push(a[e]+";"):m+=e+" "})),h=m):null!=e.className&&(h=e.className+" ");var k=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";Pe=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,a+=Be(n,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=Be(n,t,e[o]),r&&(a+=i[o]);Te.lastIndex=0;for(var s,l="";null!==(s=Te.exec(a));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+l;return{name:c,styles:a,next:Pe}}(p.concat(g),n.registered,b);h+=n.key+"-"+k.name,void 0!==i&&(h+=" "+i);var y=u&&void 0===l?ze(f):c,w={};for(var x in e)u&&"as"===x||y(x)&&(w[x]=e[x]);return w.className=h,w.ref=r,t.createElement(t.Fragment,null,t.createElement(He,{cache:n,serialized:k,isStringTag:"string"==typeof f}),t.createElement(f,w))},(0,t.forwardRef)((function(e,n){var r=(0,t.useContext)(Me);return h(e,r,n)})));return b.displayName=void 0!==a?a:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",b.defaultProps=n.defaultProps,b.__emotion_real=b,b.__emotion_base=s,b.__emotion_styles=p,b.__emotion_forwardProp=l,Object.defineProperty(b,"toString",{value:function(){return"."+i}}),b.withComponent=function(t,n){return e(t,g({},r,n,{shouldForwardProp:Ge(b,n,!0)})).apply(void 0,p)},b}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){je[e]=je(e)})),je.div`
	grid-column: span 2;
`;const Ve=je(c.PanelBody)`
	display: flex !important;
	flex-direction: column !important;
	border-top: none !important; 

	.components-panel__body-title:hover {
		background: unset;
	}

	.components-panel__body-toggle.components-button {

		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;

		padding: 0px;
		padding-left: 4px;
	}

	.components-panel__body-toggle.components-button .components-panel__arrow {
		position: unset;
    	right: unset;
    	top: unset;
    	transform: unset;
	}
`,Le=(je(c.__experimentalToolsPanelItem)`
	display: block !important;
	grid-column: span 1 !important;
`,je(c.__experimentalToolsPanelItem)`
	display: block !important;
    grid-column: span 2 !important;
`),Ue=je(c.__experimentalSpacer)`
	border-top: 1px solid rgb(221, 221, 221);
	margin-top: -1px;
`,Fe=je(c.__experimentalVStack)`
	*:is(.components-heading, .components-base-control, .components-base-control__field) {
		margin-bottom: 0px !important;
	}
`;function Qe({name:e,count:n,countSetter:r,definitions:a,definitionsSetter:i}){const[o,s]=r,[u,d]=i,p=e=>{o(e),u(e>n?[...a,...Array.from({length:e-n},(()=>d))]:a.slice(0,e))},m=(e,t)=>{const n=a.map(((n,r)=>r===e?t:n));u(n)},f=(0,l.__)(e,"h2ml"),h=(0,l.sprintf)((0,l._x)("Grid %ss","Grid Columns/Rows","h2ml"),f),g=(0,l.sprintf)((0,l._x)("Number of %ss","Number of Columns/Rows","h2ml"),f),b=(0,l.sprintf)((0,l._nx)("%s Definition","%s Definitions",n,`Collection of ${e} definitions`,"h2ml"),f),v=(0,l._x)("%s %d Definition","Row/Column (%s) Number (%d) Defition","h2ml");return(0,t.createElement)(c.__experimentalToolsPanel,{label:h,resetAll:()=>{o(s),u(Array.from({length:s},((e,t)=>d)))},hasInnerWrapper:!0},(0,t.createElement)(Le,{hasValue:()=>!!n,label:g,onDeselect:()=>p(s),isShownByDefault:!0},(0,t.createElement)(c.__experimentalNumberControl,{label:g,onChange:p,value:n,min:1})),(0,t.createElement)(Ve,{title:b,initialOpen:!1},Array.from({length:n},((e,n)=>{const r=(0,l.sprintf)(v,f,n+1),i=a[n];return(0,t.createElement)(Le,{hasValue:()=>!0,label:r,onDeselect:()=>m(n,d),isShownByDefault:!0},(0,t.createElement)(c.TextareaControl,{label:r,onChange:e=>m(n,e),value:i,rows:2,onBlur:()=>{i||m(n,d)}}))}))))}function qe({name:e,nameSetter:n,mediaQuery:r,mediaQuerySetter:a}){const i=(0,l.__)("Grid Breakpoint Settings","h2ml"),o=(0,l.__)("Name","h2ml"),s=(0,l.__)("Media Query","h2ml");return(0,t.createElement)(Ue,{padding:4},(0,t.createElement)(Fe,{spacing:4},(0,t.createElement)(c.__experimentalHeading,null,i),(0,t.createElement)(c.TextControl,{label:o,onChange:n,value:e}),(0,t.createElement)(c.TextareaControl,{label:s,onChange:a,value:r,rows:2})))}function We({breakpointDefinition:e,updateBreakpoint:n}){const{name:r,mediaQuery:a,colCount:o,colDefinitions:s,rowCount:l,rowDefinitions:c}=e;return(0,t.createElement)(i.InspectorControls,{key:"setting"},(0,t.createElement)(qe,{name:r,nameSetter:e=>{n("name",e)},mediaQuery:a,mediaQuerySetter:e=>{n("mediaQuery",e)}}),(0,t.createElement)(Qe,{name:"Column",count:o,countSetter:[e=>{n("colCount",Number(e))},3],definitions:s,definitionsSetter:[e=>{n("colDefinitions",e)},"1fr"]}),(0,t.createElement)(Qe,{name:"Row",count:l,countSetter:[e=>{n("rowCount",Number(e))},4],definitions:c,definitionsSetter:[e=>{n("rowDefinitions",e)},"max-content"]}))}function Xe({colRefrence:e,rowRefrence:n,disabled:r,onMouseDown:a,onMouseEnter:i,onMouseUp:o}){const s={gridColumn:e,gridRow:n,...r&&{pointerEvents:"none"}};return(0,t.createElement)("div",{className:"wp-block-h2ml-grid--appender--guide-grid-area",style:s,onMouseDown:a,onMouseEnter:i,onMouseUp:o},(0,t.createElement)("div",null))}function Ze({columnStart:e,columnEnd:n,rowStart:r,rowEnd:a}){return(0,t.createElement)("div",{className:"wp-block-h2ml-grid--appender--guide-defining-grid-area-preview",style:{gridColumnStart:e,gridColumnEnd:n,gridRowStart:r,gridRowEnd:a}})}function Ke({helpText:e,confirmAppend:n,cancelAppend:r}){return(0,t.createElement)("div",{className:"wp-block-h2ml-grid--appender--toolbar"},(0,t.createElement)(e,null),(0,t.createElement)("div",null,(0,t.createElement)(r,null),(0,t.createElement)(n,null)))}function Ye({colCount:e,rowCount:n,definingGridArea:r,start:a,confirm:i,cancel:o}){const[d,p]=(0,s.useState)(null),[m,f]=(0,s.useState)(null),[h,g]=(0,s.useState)(null),b=!d&&m&&h,v=m&&h&&Math.min(m[0],h[0]),k=m&&h&&Math.max(m[0],h[0])+1,y=m&&h&&Math.min(m[1],h[1]),w=m&&h&&Math.max(m[1],h[1])+1,x=r&&r.gridAreaClientId?(0,l.__)("Click and drag above to update this grid area.","h2ml"):(0,l.__)("Click and drag above to define a new grid area.","h2ml"),_=(0,l.__)("Add new Grid Area","h2ml"),E=(0,l.__)("Cancel","h2ml"),C=(0,l.__)("Confirm","h2ml");return(0,l.__)("Unassigned Grid Areas","h2ml"),(0,s.useEffect)((()=>{r&&(f(null),g(null))}),[r]),(0,t.createElement)(t.Fragment,null,Array.from({length:e*n},((n,a)=>{const i=a%e+1,o=Math.floor(a/e+1);return(0,t.createElement)(Xe,{disabled:!r,colRefrence:i,rowRefrence:o,onMouseDown:()=>{p(!0),f([i,o]),g([i,o])},onMouseEnter:()=>{d&&g([i,o])},onMouseUp:()=>{p(!1)}})})),!r&&(0,t.createElement)(c.Button,{variant:"link",className:"wp-block-h2ml-grid--appender--add-new-grid-area",icon:u,label:_,onClick:a}),r&&(0,t.createElement)(t.Fragment,null,m&&(0,t.createElement)(Ze,{columnStart:v,columnEnd:k,rowStart:y,rowEnd:w}),(0,t.createElement)(Ke,{helpText:()=>(0,t.createElement)("p",null,x),cancelAppend:()=>(0,t.createElement)(c.Button,{variant:"link",label:E,onClick:o},E),confirmAppend:()=>(0,t.createElement)(c.Button,{variant:"primary",label:C,onClick:()=>i(v,k,y,w),disabled:!b},C)})))}function Je({gridAreas:n,activeBreakpointId:r,clientId:a}){const{__unstableMarkNextChangeAsNotPersistent:i}=(0,o.useDispatch)("core/block-editor"),c=(0,s.useMemo)((()=>(console.log(breakpoints,r),n.filter((({attributes:{breakpoints:e}})=>Object.keys(e[r]).length<=1)).map((t=>{const{clientId:n,breakpoints:r}=t;return{clientId:n,breakpoints:r,__html:(0,e.serialize)(t).replace(/<style>.*<\/style>/s,"")}})))),[n]),u=(0,l.__)("Hidden Grid Areas","h2ml");return c.length?(0,t.createElement)("div",{className:"wp-block-h2ml-grid--hidden-grid-areas--container"},(0,t.createElement)("p",{className:"wp-block-h2ml-grid--hidden-grid-areas--title"},u),(0,t.createElement)("div",{className:"wp-block-h2ml-grid--hidden-grid-areas--wrapper"},c.map((({clientId:e,breakpoints:n,...r})=>{const s=()=>((e,t)=>{i(),(0,o.dispatch)("core/block-editor").updateBlockAttributes(a,{definingGridArea:{gridAreaClientId:e,existingBreakpoints:t}})})(e,n);return(0,t.createElement)("div",{className:"wp-block-h2ml-grid--hidden-grid-areas--grid-area-wrapper",tabIndex:0,role:"button",onClick:s,onKeyPress:s,dangerouslySetInnerHTML:r})})))):""}window.wp.blockSerializationDefaultParser,(0,e.registerBlockType)(a.UU,{icon:r,edit:function({attributes:n,setAttributes:r,clientId:l}){const{breakpoints:c,definingGridArea:u,activeBreakpointId:d=c[0].id}=n,p=(0,s.useMemo)((()=>{var e;return null!==(e=c.find((e=>e.id===d)))&&void 0!==e?e:c[0]}),[n]),{colCount:m,rowCount:f,colDefinitions:g,rowDefinitions:b}=p,{__unstableMarkNextChangeAsNotPersistent:v}=(0,o.useDispatch)("core/block-editor"),k=(0,o.useSelect)((e=>e("core/block-editor").getBlocks(l)));!function(e,t){!function(e,t=[]){const n=(0,s.useRef)(!0);(0,s.useEffect)((()=>{n.current?n.current=!1:e()}),t)}((()=>{e.forEach((({clientId:e,attributes:{breakpoints:n}})=>{(0,o.dispatch)("core/block-editor").updateBlockAttributes(e,{breakpoints:Object.fromEntries(t.map((({id:e,mediaQuery:t})=>[e,{...n[e],mediaQuery:t}])))})}))}),[t])}(k,c);const y=()=>{r({definingGridArea:null})},w={gridTemplateColumns:g.join(" "),gridTemplateRows:b.join(" ")},{children:x,..._}=(0,i.useInnerBlocksProps)((0,i.useBlockProps)({style:w,className:u?"wp-block-h2ml-grid--is-editing":""}),{allowedBlocks:["h2ml/grid-area"],renderAppender:()=>null});return(0,t.createElement)(t.Fragment,null,!u&&(0,t.createElement)(h,{breakpoints:c,activeBreakpointId:d,activeBreakpointName:p.name,setActiveBreakpointId:e=>{v(),r({activeBreakpointId:e})},createBreakpoint:()=>{var e;const t=(null!==(e=[...c].sort(((e,t)=>t.id-e.id))[0]?.id)&&void 0!==e?e:0)+1;r({breakpoints:[...c,{...a.uK.fi.A[0],id:t}]})},reorderBreakpoint:e=>{const t=c.findIndex((({id:e})=>e===d)),n=(t+e)%c.length,a=[...c];r({breakpoints:a.toSpliced(n,0,...a.splice(t,1))})},deleteBreakpoint:()=>{const e=c.findIndex((({id:e})=>e===d)),t=c.toSpliced(e,1);r({breakpoints:t,activeBreakpointId:t[0].id})}}),(0,t.createElement)(We,{breakpointDefinition:p,updateBreakpoint:(e,t)=>{const n=(0,o.select)("core/block-editor").getBlockAttributes(l).breakpoints,a=n.findIndex((({id:e})=>e===d));r({breakpoints:n.toSpliced(a,1,{...n[a],[e]:t})})}}),(0,t.createElement)("div",{..._},(0,t.createElement)(Ye,{colCount:m,rowCount:f,definingGridArea:u,start:()=>{v(),r({definingGridArea:{gridAreaClientId:!1}})},confirm:async(t,n,r,a)=>{if(u.gridAreaClientId){const{gridAreaClientId:e,existingBreakpoints:i}=u;(0,o.dispatch)("core/block-editor").updateBlockAttributes(e,{breakpoints:{...i,[d]:{mediaQuery:p.mediaQuery,colStart:t,colEnd:n,rowStart:r,rowEnd:a}}})}else{const i=Object.assign((0,e.createBlock)("h2ml/grid-area"),{attributes:{breakpoints:c.reduce(((e,{id:i,mediaQuery:o})=>({...e,[i]:{mediaQuery:o,...i===d&&{colStart:t,colEnd:n,rowStart:r,rowEnd:a}}})),{})}}),s=(0,o.select)("core/block-editor").getBlockCount(l);(0,o.dispatch)("core/block-editor").insertBlock(i,s,l)}y()},cancel:y}),x,(0,t.createElement)(Je,{gridAreas:k,activeBreakpointId:d,setAttributes:r,clientId:l})))},save:function({attributes:{breakpoints:e}}){const n=i.useBlockProps.save(),{children:r,...a}=i.useInnerBlocksProps.save(n),o=e.reduce(((e,{mediaQuery:t,colDefinitions:n,rowDefinitions:r})=>e+`@media screen and ${t} {\n\t\t\t@scope {\n\t\t\t\t:scope.wp-block-h2ml-grid {\n\t\t\t\t\tgrid-template-columns: ${n.join(" ")};\n\t\t\t\t\tgrid-template-rows: ${r.join(" ")};\n\t\t\t\t}\n\t\t\t}\n\t\t}`),"").replace(/	|\r\n|\n|\r/gm,"");return(0,t.createElement)("div",{...a},(0,t.createElement)("style",null,o),r)}})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,a,i)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,i]=e[u],s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={186:0,854:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[o,s,l]=n,c=0;if(o.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var u=l(r)}for(t&&t(n);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=globalThis.webpackChunkh2ml_grid=globalThis.webpackChunkh2ml_grid||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[854],(()=>r(400)));a=r.O(a)})();