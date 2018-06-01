window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);

/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

(function($) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find("input[type=email]");
            var label = form.find("label[for=" + email.attr("id") + "]");
            var settings = $.extend({
                url: form.attr("action"),
                language: "en"
            }, options);
            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
            form.attr("novalidate", "true");
            email.attr("name", "EMAIL");
            form.submit(function() {
                var msg;

                function successCallback(resp) {
                    if (resp.result === "success") {
                        msg = "We have sent you a confirmation email";
                        label.removeClass("error").addClass("valid");
                        email.removeClass("error").addClass("valid")
                    } else {
                        email.removeClass("valid").addClass("error");
                        label.removeClass("valid").addClass("error");
                        var index = -1;
                        try {
                            var parts = resp.msg.split(" - ", 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2e3);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    // type: 'GET',
                    success: successCallback,
                    dataType: "jsonp",
                    error: function(resp, text) {
                      console.log(resp)
                      console.log("mailchimp ajax submit error: " + text)
                    }
                });
                var submitMsg = "Submitting...";
                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
                }
                label.html(submitMsg).show(2e3);
                return false
            })
        });
        return this
    }
})(jQuery);

/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,i,s){"use strict";function n(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}function a(t){this.selector=t,this.query=""}var o=function(e){var i=t("head");i.prepend(t.map(e,function(t){return 0===i.has("."+t).length?'<meta class="'+t+'" />':void 0}))};o(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof i.body&&FastClick.attach(i.body)});var r=function(e,s){if("string"==typeof e){if(s){var n;if(s.jquery){if(n=s[0],!n)return s}else n=s;return t(n.querySelectorAll(e))}return t(i.querySelectorAll(e))}return t(e,s)},l=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},d=function(t){for(var e=t.split("-"),i=e.length,s=[];i--;)0!==i?s.push(e[i]):this.namespace.length>0?s.push(this.namespace,e[i]):s.push(e[i]);return s.reverse().join("-")},c=function(e,i){var s=this,n=function(){var n=r(this),a=!n.data(s.attr_name(!0)+"-init");n.data(s.attr_name(!0)+"-init",t.extend({},s.settings,i||e,s.data_options(n))),a&&s.events(this)};return r(this.scope).is("["+this.attr_name()+"]")?n.call(this.scope):r("["+this.attr_name()+"]",this.scope).each(n),"string"==typeof e?this[e].call(this,i):void 0},h=function(t,e){function i(){e(t[0])}function s(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?i():s.call(t)):void i()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
e.matchMedia||(e.matchMedia=function(){var t=e.styleMedia||e.media;if(!t){var s=i.createElement("style"),n=i.getElementsByTagName("script")[0],a=null;s.type="text/css",s.id="matchmediajs-test",n.parentNode.insertBefore(s,n),a="getComputedStyle"in e&&e.getComputedStyle(s,null)||s.currentStyle,t={matchMedium:function(t){var e="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return s.styleSheet?s.styleSheet.cssText=e:s.textContent=e,"1px"===a.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(t){function i(){s&&(o(i),l&&t.fx.tick())}for(var s,n=0,a=["webkit","moz"],o=e.requestAnimationFrame,r=e.cancelAnimationFrame,l="undefined"!=typeof t.fx;n<a.length&&!o;n++)o=e[a[n]+"RequestAnimationFrame"],r=r||e[a[n]+"CancelAnimationFrame"]||e[a[n]+"CancelRequestAnimationFrame"];o?(e.requestAnimationFrame=o,e.cancelAnimationFrame=r,l&&(t.fx.timer=function(e){e()&&t.timers.push(e)&&!s&&(s=!0,i())},t.fx.stop=function(){s=!1})):(e.requestAnimationFrame=function(t){var i=(new Date).getTime(),s=Math.max(0,16-(i-n)),a=e.setTimeout(function(){t(i+s)},s);return n=i+s,a},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(t),a.prototype.toString=function(){return this.query||(this.query=r(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},e.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new a(".foundation-mq-small"),"small-only":new a(".foundation-mq-small-only"),medium:new a(".foundation-mq-medium"),"medium-only":new a(".foundation-mq-medium-only"),large:new a(".foundation-mq-large"),"large-only":new a(".foundation-mq-large-only"),xlarge:new a(".foundation-mq-xlarge"),"xlarge-only":new a(".foundation-mq-xlarge-only"),xxlarge:new a(".foundation-mq-xxlarge")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:s},init:function(t,i,s,n,a){var o=[t,s,n,a],l=[];if(this.rtl=/rtl/i.test(r("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),i&&"string"==typeof i&&!/reflow/i.test(i))this.libs.hasOwnProperty(i)&&l.push(this.init_lib(i,o));else for(var d in this.libs)l.push(this.init_lib(d,i));return r(e).load(function(){r(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,i){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),i&&i.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,i[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,i[e]),this.libs[e].init.apply(this.libs[e],[this.scope,i[e]])):(i=i instanceof Array?i:new Array(i),this.libs[e].init.apply(this.libs[e],i))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=l,t.add_namespace=d,t.bindings=c,t.S=this.utils.S},inherit:function(t,e){for(var i=e.split(" "),s=i.length;s--;)this.utils.hasOwnProperty(i[s])&&(t[i[s]]=this.utils[i[s]])},set_namespace:function(){var e=this.global.namespace===s?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===s||/false/i.test(e)?"":e},libs:{},utils:{S:r,throttle:function(t,e){var i=null;return function(){var s=this,n=arguments;null==i&&(i=setTimeout(function(){t.apply(s,n),i=null},e))}},debounce:function(t,e,i){var s,n;return function(){var a=this,o=arguments,r=function(){s=null,i||(n=t.apply(a,o))},l=i&&!s;return clearTimeout(s),s=setTimeout(r,e),l&&(n=t.apply(a,o)),n}},data_options:function(e,i){function s(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function n(e){return"string"==typeof e?t.trim(e):e}i=i||"options";var a,o,r,l={},d=function(t){var e=Foundation.global.namespace;return t.data(e.length>0?e+"-"+i:i)},c=d(e);if("object"==typeof c)return c;for(r=(c||":").split(";"),a=r.length;a--;)o=r[a].split(":"),o=[o[0],o.slice(1).join(":")],/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),s(o[1])&&(o[1]=-1===o[1].indexOf(".")?parseInt(o[1],10):parseFloat(o[1])),2===o.length&&o[0].length>0&&(l[n(o[0])]=n(o[1]));return l},register_media:function(e,i){Foundation.media_queries[e]===s&&(t("head").append('<meta class="'+i+'"/>'),Foundation.media_queries[e]=n(t("."+i).css("font-family")))},add_custom_rule:function(t,e){if(e===s&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var i=Foundation.media_queries[e];i!==s&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(t,e){function i(t){for(var e=t.length,i=e-1;i>=0;i--)if(t.attr("height")===s)return!1;return!0}var n=this,a=t.length;(0===a||i(t))&&e(t),t.each(function(){h(n.S(this),function(){a-=1,0===a&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(t){return e.matchMedia(t).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.3",settings:{start:0,end:100,step:1,precision:2,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(t,e,i){Foundation.inherit(this,"throttle"),this.bindings(e,i),this.reflow()},events:function(){var i=this;t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+i.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(e){i.cache.active||(e.preventDefault(),i.set_active_slider(t(e.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(s){if(i.cache.active)if(s.preventDefault(),t.data(i.cache.active[0],"settings").vertical){var n=0;s.pageY||(n=e.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(s,"y")+n)}else i.calculate_position(i.cache.active,i.get_cursor_position(s,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(s){if(!i.cache.active){var n="slider"===t(s.target).attr("role")?t(s.target):t(s.target).closest(".range-slider").find("[role='slider']");if(n.length&&!n.parent().hasClass("disabled")&&!n.parent().attr("disabled"))if(i.set_active_slider(n),t.data(i.cache.active[0],"settings").vertical){var a=0;s.pageY||(a=e.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(s,"y")+a)}else i.calculate_position(i.cache.active,i.get_cursor_position(s,"x"))}i.remove_active_slider()}).on("change.fndtn.slider",function(){i.settings.on_change()}),i.S(e).on("resize.fndtn.slider",i.throttle(function(){i.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var e=t(this),s=e.children(".range-slider-handle")[0],n=i.initialize_settings(s);""!=n.display_selector&&t(n.display_selector).each(function(){t(this).attr("value")&&t(this).off("change").on("change",function(){e.foundation("slider","set_value",t(this).val())})})})},get_cursor_position:function(t,e){var i,s="page"+e.toUpperCase(),n="client"+e.toUpperCase();return"undefined"!=typeof t[s]?i=t[s]:"undefined"!=typeof t.originalEvent[n]?i=t.originalEvent[n]:t.originalEvent.touches&&t.originalEvent.touches[0]&&"undefined"!=typeof t.originalEvent.touches[0][n]?i=t.originalEvent.touches[0][n]:t.currentPoint&&"undefined"!=typeof t.currentPoint[e]&&(i=t.currentPoint[e]),i},set_active_slider:function(t){this.cache.active=t},remove_active_slider:function(){this.cache.active=null},calculate_position:function(e,i){var s=this,n=t.data(e[0],"settings"),a=(t.data(e[0],"handle_l"),t.data(e[0],"handle_o"),t.data(e[0],"bar_l")),o=t.data(e[0],"bar_o");requestAnimationFrame(function(){var t;t=Foundation.rtl&&!n.vertical?s.limit_to((o+a-i)/a,0,1):s.limit_to((i-o)/a,0,1),t=n.vertical?1-t:t;var r=s.normalized_value(t,n.start,n.end,n.step,n.precision);s.set_ui(e,r)})},set_ui:function(e,i){var s=t.data(e[0],"settings"),n=t.data(e[0],"handle_l"),a=t.data(e[0],"bar_l"),o=this.normalized_percentage(i,s.start,s.end),r=o*(a-n)-1,l=100*o,d=e.parent(),c=e.parent().children("input[type=hidden]");Foundation.rtl&&!s.vertical&&(r=-r),r=s.vertical?-r+a-n+1:r,this.set_translate(e,r,s.vertical),s.vertical?e.siblings(".range-slider-active-segment").css("height",l+"%"):e.siblings(".range-slider-active-segment").css("width",l+"%"),d.attr(this.attr_name(),i).trigger("change.fndtn.slider"),c.val(i),s.trigger_input_change&&c.trigger("change.fndtn.slider"),e[0].hasAttribute("aria-valuemin")||e.attr({"aria-valuemin":s.start,"aria-valuemax":s.end}),e.attr("aria-valuenow",i),""!=s.display_selector&&t(s.display_selector).each(function(){this.hasAttribute("value")?t(this).val(i):t(this).text(i)})},normalized_percentage:function(t,e,i){return Math.min(1,(t-e)/(i-e))},normalized_value:function(t,e,i,s,n){var a=i-e,o=t*a,r=(o-o%s)/s,l=o%s,d=l>=.5*s?s:0;return(r*s+d+e).toFixed(n)},set_translate:function(e,i,s){s?t(e).css("-webkit-transform","translateY("+i+"px)").css("-moz-transform","translateY("+i+"px)").css("-ms-transform","translateY("+i+"px)").css("-o-transform","translateY("+i+"px)").css("transform","translateY("+i+"px)"):t(e).css("-webkit-transform","translateX("+i+"px)").css("-moz-transform","translateX("+i+"px)").css("-ms-transform","translateX("+i+"px)").css("-o-transform","translateX("+i+"px)").css("transform","translateX("+i+"px)")},limit_to:function(t,e,i){return Math.min(Math.max(t,e),i)},initialize_settings:function(e){var i,s=t.extend({},this.settings,this.data_options(t(e).parent()));return null===s.precision&&(i=(""+s.step).match(/\.([\d]*)/),s.precision=i&&i[1]?i[1].length:0),s.vertical?(t.data(e,"bar_o",t(e).parent().offset().top),t.data(e,"bar_l",t(e).parent().outerHeight()),t.data(e,"handle_o",t(e).offset().top),t.data(e,"handle_l",t(e).outerHeight())):(t.data(e,"bar_o",t(e).parent().offset().left),t.data(e,"bar_l",t(e).parent().outerWidth()),t.data(e,"handle_o",t(e).offset().left),t.data(e,"handle_l",t(e).outerWidth())),t.data(e,"bar",t(e).parent()),t.data(e,"settings",s)},set_initial_position:function(e){var i=t.data(e.children(".range-slider-handle")[0],"settings"),s="number"!=typeof i.initial||isNaN(i.initial)?Math.floor(.5*(i.end-i.start)/i.step)*i.step+i.start:i.initial,n=e.children(".range-slider-handle");this.set_ui(n,s)},set_value:function(e){var i=this;t("["+i.attr_name()+"]",this.scope).each(function(){t(this).attr(i.attr_name(),e)}),t(this.scope).attr(i.attr_name())&&t(this.scope).attr(i.attr_name(),e),i.reflow()},reflow:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var i=t(this).children(".range-slider-handle")[0],s=t(this).attr(e.attr_name());e.initialize_settings(i),s?e.set_ui(t(i),parseFloat(s)):e.set_initial_position(t(this))})}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(e,i,s){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||t.extend({},this.defaults,s||i),this.bindings(i,s)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var i=this;t(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(t){t.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(t){t.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(t){if(this.settings.keyboard&&this.settings.riding)switch(t.which){case 39:t.preventDefault(),this.go_next();break;case 37:t.preventDefault(),this.go_prev();break;case 27:t.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),t(e).off(".joyride").on("resize.fndtn.joyride",i.throttle(function(){if(t("["+i.attr_name()+"]").length>0&&i.settings.$next_tip&&i.settings.riding){if(i.settings.exposed.length>0){var e=t(i.settings.exposed);e.each(function(){var e=t(this);i.un_expose(e),i.expose(e)})}i.is_phone()?i.pos_phone():i.pos_default(!1)}},100))},start:function(){var e=this,i=t("["+this.attr_name()+"]",this.scope),s=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],n=s.length;!i.length>0||(this.settings.init||this.events(),this.settings=i.data(this.attr_name(!0)+"-init"),this.settings.$content_el=i,this.settings.$body=t(this.settings.tip_container),this.settings.body_offset=t(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof t.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!t.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(i){var a=t(this);this.settings=t.extend({},e.defaults,e.data_options(a));for(var o=n;o--;)e.settings[s[o]]=parseInt(e.settings[s[o]],10);e.create({$li:a,index:i})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(e){var i,s;return e.tip_class=e.tip_class||"",i=t(this.settings.template.tip).addClass(e.tip_class),s=t.trim(t(e.li).html())+this.prev_button_text(e.prev_button_text,e.index)+this.button_text(e.button_text)+this.settings.template.link+this.timer_instance(e.index),i.append(t(this.settings.template.wrapper)),i.first().attr(this.add_namespace("data-index"),e.index),t(".joyride-content-wrapper",i).append(s),i[0]},timer_instance:function(e){var i;return i=0===e&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":t(this.settings.template.timer)[0].outerHTML},button_text:function(e){return this.settings.tip_settings.next_button?(e=t.trim(e)||"Next",e=t(this.settings.template.button).append(e)[0].outerHTML):e="",e},prev_button_text:function(e,i){return this.settings.tip_settings.prev_button?(e=t.trim(e)||"Previous",e=0==i?t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML:t(this.settings.template.prev_button).append(e)[0].outerHTML):e="",e},create:function(e){this.settings.tip_settings=t.extend({},this.settings,this.data_options(e.$li));var i=e.$li.attr(this.add_namespace("data-button"))||e.$li.attr(this.add_namespace("data-text")),s=e.$li.attr(this.add_namespace("data-button-prev"))||e.$li.attr(this.add_namespace("data-prev-text")),n=e.$li.attr("class"),a=t(this.tip_template({tip_class:n,index:e.index,button_text:i,prev_button_text:s,li:e.$li}));t(this.settings.tip_container).append(a)},show:function(e,i){var n=null;if(this.settings.$li===s||-1===t.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(e,i),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(e&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=t.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)&&!this.settings.expose){var a=t(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?a.hide():a.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(e,i):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||t(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(t.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(t,e){t?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=e?this.settings.$li.prev():this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=t(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var e=this.settings.$li.attr(this.add_namespace("data-class")),s=this.settings.$li.attr(this.add_namespace("data-id")),n=function(){return s?t(i.getElementById(s)):e?t("."+e).first():t("body")};this.settings.$target=n()},scroll_to:function(){var i,s;i=t(e).height()/2,s=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),0!=s&&t("html, body").stop().animate({scrollTop:s},this.settings.scroll_speed,"swing")},paused:function(){return-1===t.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=s,this.show("init")},pos_default:function(t){var e=this.settings.$next_tip.find(".joyride-nub"),i=Math.ceil(e.outerWidth()/2),s=Math.ceil(e.outerHeight()/2),n=t||!1;if(n&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(e);else{var a=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,o=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top+s+this.settings.$target.outerHeight()+a,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+o}:{top:this.settings.$target.offset().top+s+this.settings.$target.outerHeight()+a,left:this.settings.$target.offset().left+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"top")):this.top()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-s+a,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}:{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-s+a,left:this.settings.$target.offset().left+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+a,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+i+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+a,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-i+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}n&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(e){var i=this.settings.$next_tip.outerHeight(),s=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),n=t(".joyride-nub",this.settings.$next_tip),a=Math.ceil(n.outerHeight()/2),o=e||!1;n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),o&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(n):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-i-a}),n.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+s+a}),n.addClass("top")),o&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(t){this.center(),t.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var e=t(".joyride-modal-bg");if(e.length<1){var e=t(this.settings.template.modal);e.appendTo("body")}/pop/i.test(this.settings.tip_animation)?e.show():e.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var i,s,n,a,o,r="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof t)n=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;n=this.settings.$target}return n.length<1?(e.console&&console.error("element not valid",n),!1):(i=t(this.settings.template.expose),this.settings.$body.append(i),i.css({top:n.offset().top,left:n.offset().left,width:n.outerWidth(!0),height:n.outerHeight(!0)}),s=t(this.settings.template.expose_cover),a={zIndex:n.css("z-index"),position:n.css("position")},o=null==n.attr("class")?"":n.attr("class"),n.css("z-index",parseInt(i.css("z-index"))+1),"static"==a.position&&n.css("position","relative"),n.data("expose-css",a),n.data("orig-class",o),n.attr("class",o+" "+this.settings.expose_add_class),s.css({top:n.offset().top,left:n.offset().left,width:n.outerWidth(!0),height:n.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(s),i.addClass(r),s.addClass(r),n.data("expose",r),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,n),void this.add_exposed(n))},un_expose:function(){var i,s,n,a,o,r=!1;if(arguments.length>0&&arguments[0]instanceof t)s=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;s=this.settings.$target}return s.length<1?(e.console&&console.error("element not valid",s),!1):(i=s.data("expose"),n=t("."+i),arguments.length>1&&(r=arguments[1]),r===!0?t(".joyride-expose-wrapper,.joyride-expose-cover").remove():n.remove(),a=s.data("expose-css"),"auto"==a.zIndex?s.css("z-index",""):s.css("z-index",a.zIndex),a.position!=s.css("position")&&("static"==a.position?s.css("position",""):s.css("position",a.position)),o=s.data("orig-class"),s.attr("class",o),s.removeData("orig-classes"),s.removeData("expose"),s.removeData("expose-z-index"),void this.remove_exposed(s))},add_exposed:function(e){this.settings.exposed=this.settings.exposed||[],e instanceof t||"object"==typeof e?this.settings.exposed.push(e[0]):"string"==typeof e&&this.settings.exposed.push(e)},remove_exposed:function(e){var i,s;for(e instanceof t?i=e[0]:"string"==typeof e&&(i=e),this.settings.exposed=this.settings.exposed||[],s=this.settings.exposed.length;s--;)if(this.settings.exposed[s]==i)return void this.settings.exposed.splice(s,1)},center:function(){var i=t(e);return this.settings.$next_tip.css({top:(i.height()-this.settings.$next_tip.outerHeight())/2+i.scrollTop(),left:(i.width()-this.settings.$next_tip.outerWidth())/2+i.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(i){if(0===i.length)return[!1,!1,!1,!1];var s=t(e),n=s.height()/2,a=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),o=s.width()+s.scrollLeft(),r=s.height()+a,l=s.height()+s.scrollTop(),d=s.scrollTop();return d>a&&(d=0>a?0:a),r>l&&(l=r),[i.offset().top<d,o<i.offset().left+i.outerWidth(),l<i.offset().top+i.outerHeight(),s.scrollLeft()>i.offset().left]},visible:function(t){for(var e=t.length;e--;)if(t[e])return!1;return!0},nub_position:function(t,e,i){t.addClass("auto"===e?i:e)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(e){this.settings.cookie_monster&&t.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),t(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,t(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof e||e===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),t(".joyride-tip-guide").remove()},off:function(){t(this.scope).off(".joyride"),t(e).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate)},reflow:function(){}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:t.noop,after_height_change:t.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(t,e,i){Foundation.inherit(this,"image_loaded"),this.bindings(e,i),this.reflow()},events:function(){this.S(e).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(e){var i,s,n=!1,a=e.data("equalizer"),o=e.data(this.attr_name(!0)+"-init")||this.settings;if(i=e.find(o.act_on_hidden_el?a?"["+this.attr_name()+'-watch="'+a+'"]':"["+this.attr_name()+"-watch]":a?"["+this.attr_name()+'-watch="'+a+'"]:visible':"["+this.attr_name()+"-watch]:visible"),0!==i.length&&(o.before_height_change(),e.trigger("before-height-change.fndth.equalizer"),i.height("inherit"),o.equalize_on_stack!==!1||(s=i.first().offset().top,i.each(function(){return t(this).offset().top!==s?(n=!0,!1):void 0}),!n))){var r=i.map(function(){return t(this).outerHeight(!1)}).get();if(o.use_tallest){var l=Math.max.apply(null,r);i.css("height",l)}else{var d=Math.min.apply(null,r);i.css("height",d)}o.after_height_change(),e.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var e=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var i=t(this),s=i.data("equalizer-mq"),n=!0;s&&(s="is_"+s.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(s)&&(n=!1)),e.image_loaded(e.S("img",this),function(){if(n||Foundation.utils[s]())e.equalize(i);else{var t=i.find("["+e.attr_name()+"-watch]:visible");t.css("height","auto")}})})}}}(jQuery,window,window.document),function(t,e,i){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.3",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(e,i,s){Foundation.inherit(this,"throttle"),t.extend(!0,this.settings,i,s),this.bindings(i,s)},events:function(){var s=this,n=s.S;n(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(e){var i=n(this).data(s.attr_name(!0)+"-init")||s.settings;(!i.is_hover||Modernizr.touch)&&(e.preventDefault(),n(this).parent("[data-reveal-id]").length&&e.stopPropagation(),s.toggle(t(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(t){var e,i,a=n(this);clearTimeout(s.timeout),a.data(s.data_attr())?(e=n("#"+a.data(s.data_attr())),i=a):(e=a,i=n("["+s.attr_name()+'="'+e.attr("id")+'"]'));var o=i.data(s.attr_name(!0)+"-init")||s.settings;n(t.currentTarget).data(s.data_attr())&&o.is_hover&&s.closeall.call(s),o.is_hover&&s.open.apply(s,[e,i])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(){var t,e=n(this);if(e.data(s.data_attr()))t=e.data(s.data_attr(!0)+"-init")||s.settings;else var i=n("["+s.attr_name()+'="'+n(this).attr("id")+'"]'),t=i.data(s.attr_name(!0)+"-init")||s.settings;s.timeout=setTimeout(function(){e.data(s.data_attr())?t.is_hover&&s.close.call(s,n("#"+e.data(s.data_attr()))):t.is_hover&&s.close.call(s,e)}.bind(this),t.hover_timeout)}).on("click.fndtn.dropdown",function(e){var a=n(e.target).closest("["+s.attr_name()+"-content]"),o=a.find("a");return o.length>0&&"false"!==a.attr("aria-autoclose")&&s.close.call(s,n("["+s.attr_name()+"-content]")),e.target!==i&&!t.contains(i.documentElement,e.target)||n(e.target).closest("["+s.attr_name()+"]").length>0?void 0:!n(e.target).data("revealId")&&a.length>0&&(n(e.target).is("["+s.attr_name()+"-content]")||t.contains(a.first()[0],e.target))?void e.stopPropagation():void s.close.call(s,n("["+s.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+s.attr_name()+"-content]",function(){s.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+s.attr_name()+"-content]",function(){s.settings.closed.call(this)}),n(e).off(".dropdown").on("resize.fndtn.dropdown",s.throttle(function(){s.resize.call(s)},50)),this.resize()},close:function(e){var i=this;e.each(function(s){var n=t("["+i.attr_name()+"="+e[s].id+"]")||t("aria-controls="+e[s].id+"]");
n.attr("aria-expanded","false"),i.S(this).hasClass(i.settings.active_class)&&(i.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(i.settings.active_class).prev("["+i.attr_name()+"]").removeClass(i.settings.active_class).removeData("target"),i.S(this).trigger("closed.fndtn.dropdown",[e]))}),e.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var e=this;t.each(e.S(".f-open-"+this.attr_name(!0)),function(){e.close.call(e,e.S(this))})},open:function(t,e){this.css(t.addClass(this.settings.active_class),e),t.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),t.data("target",e.get(0)).trigger("opened.fndtn.dropdown",[t,e]),t.attr("aria-hidden","false"),e.attr("aria-expanded","true"),t.focus(),t.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(t){if(!t.hasClass(this.settings.disabled_class)){var e=this.S("#"+t.data(this.data_attr()));0!==e.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(e)),e.hasClass(this.settings.active_class)?(this.close.call(this,e),e.data("target")!==t.get(0)&&this.open.call(this,e,t)):this.open.call(this,e,t))}},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),i=t(e.data("target"));e.length&&i.length&&this.css(e,i)},css:function(t,e){var i=Math.max((e.width()-t.width())/2,8),s=e.data(this.attr_name(!0)+"-init")||this.settings,n=t.parent().css("overflow-y")||t.parent().css("overflow");if(this.clear_idx(),this.small()){var a=this.dirs.bottom.call(t,e,s);t.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:a.top}),t.css(Foundation.rtl?"right":"left",i)}else if("visible"!==n){var o=e[0].offsetTop+e[0].offsetHeight;t.attr("style","").css({position:"absolute",top:o}),t.css(Foundation.rtl?"right":"left",i)}else this.style(t,e,s);return t},style:function(e,i,s){var n=t.extend({position:"absolute"},this.dirs[s.align].call(e,i,s));e.attr("style","").css(n)},dirs:{_base:function(t,s){var n=this.offsetParent(),a=n.offset(),o=t.offset();o.top-=a.top,o.left-=a.left,o.missRight=!1,o.missTop=!1,o.missLeft=!1,o.leftRightFlag=!1;var r,l=e.innerWidth;r=i.getElementsByClassName("row")[0]?i.getElementsByClassName("row")[0].clientWidth:l;var d=(l-r)/2,c=r;if(!this.hasClass("mega")&&!s.ignore_repositioning){var h=this.outerWidth(),u=t.offset().left;t.offset().top<=this.outerHeight()&&(o.missTop=!0,c=l-d,o.leftRightFlag=!0),u+h>u+d&&u-d>h&&(o.missRight=!0,o.missLeft=!1),0>=u-h&&(o.missLeft=!0,o.missRight=!1)}return o},top:function(t,e){var i=Foundation.libs.dropdown,s=i.dirs._base.call(this,t,e);return this.addClass("drop-top"),1==s.missTop&&(s.top=s.top+t.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==s.missRight&&(s.left=s.left-this.outerWidth()+t.outerWidth()),(t.outerWidth()<this.outerWidth()||i.small()||this.hasClass(e.mega_menu))&&i.adjust_pip(this,t,e,s),Foundation.rtl?{left:s.left-this.outerWidth()+t.outerWidth(),top:s.top-this.outerHeight()}:{left:s.left,top:s.top-this.outerHeight()}},bottom:function(t,e){var i=Foundation.libs.dropdown,s=i.dirs._base.call(this,t,e);return 1==s.missRight&&(s.left=s.left-this.outerWidth()+t.outerWidth()),(t.outerWidth()<this.outerWidth()||i.small()||this.hasClass(e.mega_menu))&&i.adjust_pip(this,t,e,s),i.rtl?{left:s.left-this.outerWidth()+t.outerWidth(),top:s.top+t.outerHeight()}:{left:s.left,top:s.top+t.outerHeight()}},left:function(t,e){var i=Foundation.libs.dropdown.dirs._base.call(this,t,e);return this.addClass("drop-left"),1==i.missLeft&&(i.left=i.left+this.outerWidth(),i.top=i.top+t.outerHeight(),this.removeClass("drop-left")),{left:i.left-this.outerWidth(),top:i.top}},right:function(t,e){var i=Foundation.libs.dropdown.dirs._base.call(this,t,e);this.addClass("drop-right"),1==i.missRight?(i.left=i.left-this.outerWidth(),i.top=i.top+t.outerHeight(),this.removeClass("drop-right")):i.triggeredRight=!0;var s=Foundation.libs.dropdown;return(t.outerWidth()<this.outerWidth()||s.small()||this.hasClass(e.mega_menu))&&s.adjust_pip(this,t,e,i),{left:i.left+t.outerWidth(),top:i.top}}},adjust_pip:function(t,e,i,s){var n=Foundation.stylesheet,a=8;t.hasClass(i.mega_class)?a=s.left+e.outerWidth()/2-8:this.small()&&(a+=s.left-8),this.rule_idx=n.cssRules.length;var o=".f-dropdown.open:before",r=".f-dropdown.open:after",l="left: "+a+"px;",d="left: "+(a-1)+"px;";1==s.missRight&&(a=t.outerWidth()-23,o=".f-dropdown.open:before",r=".f-dropdown.open:after",l="left: "+a+"px;",d="left: "+(a-1)+"px;"),1==s.triggeredRight&&(o=".f-dropdown.open:before",r=".f-dropdown.open:after",l="left:-12px;",d="left:-14px;"),n.insertRule?(n.insertRule([o,"{",l,"}"].join(" "),this.rule_idx),n.insertRule([r,"{",d,"}"].join(" "),this.rule_idx+1)):(n.addRule(o,l,this.rule_idx),n.addRule(r,d,this.rule_idx+1))},clear_idx:function(){var t=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(t.deleteRule(this.rule_idx),t.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(e).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.3",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(t,e,i){var s=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(e,i),s.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(s.S("li",this.scope)):s.S("["+this.attr_name()+"]",this.scope).each(function(){s.assemble(s.S("li",this))})},events:function(s){var n=this,a=n.S,o=t(".scroll-container");o.length>0&&(this.scope=o),a(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(t,e,i){var e=e||a(this),i=i||e,s=e.next("li"),o=e.closest("["+n.attr_name()+"]").data(n.attr_name(!0)+"-init"),r=a(t.target);t.preventDefault(),o||(n.init(),o=e.closest("["+n.attr_name()+"]").data(n.attr_name(!0)+"-init")),i.hasClass("visible")&&e[0]===i[0]&&s.length>0&&n.is_open(e)&&(i=s,r=a("img",i)),n.open(r,e,i),n.update_paddles(i)}).on("click.fndtn.clearing",".clearing-main-next",function(t){n.nav(t,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(t){n.nav(t,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(t){Foundation.libs.clearing.close(t,this)}),t(i).on("keydown.fndtn.clearing",function(t){n.keydown(t)}),a(e).off(".clearing").on("resize.fndtn.clearing",function(){n.resize()}),this.swipe_events(s)},swipe_events:function(){var t=this,e=t.S;e(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var i={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:s};e(this).data("swipe-transition",i),t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(i){if(i.touches||(i=i.originalEvent),!(i.touches.length>1||i.scale&&1!==i.scale)){var s=e(this).data("swipe-transition");if("undefined"==typeof s&&(s={}),s.delta_x=i.touches[0].pageX-s.start_page_x,Foundation.rtl&&(s.delta_x=-s.delta_x),"undefined"==typeof s.is_scrolling&&(s.is_scrolling=!!(s.is_scrolling||Math.abs(s.delta_x)<Math.abs(i.touches[0].pageY-s.start_page_y))),!s.is_scrolling&&!s.active){i.preventDefault();var n=s.delta_x<0?"next":"prev";s.active=!0,t.nav(i,n)}}}).on("touchend.fndtn.clearing",".visible-img",function(t){e(this).data("swipe-transition",{}),t.stopPropagation()})},assemble:function(e){var i=e.parent();if(!i.parent().hasClass("carousel")){i.after('<div id="foundationClearingHolder"></div>');var s=i.detach(),n="";if(null!=s[0]){n=s[0].outerHTML;var a=this.S("#foundationClearingHolder"),o=i.data(this.attr_name(!0)+"-init"),r={grid:'<div class="carousel">'+n+"</div>",viewing:o.templates.viewing},l='<div class="clearing-assembled"><div>'+r.viewing+r.grid+"</div></div>",d=this.settings.touch_label;Modernizr.touch&&(l=t(l).find(".clearing-touch-label").html(d).end()),a.after(l).remove()}}},open:function(e,s,n){function a(){setTimeout(function(){this.image_loaded(u,function(){1!==u.outerWidth()||p?o.call(this,u):a.call(this)}.bind(this))}.bind(this),100)}function o(e){var i=t(e);i.css("visibility","visible"),i.trigger("imageVisible"),l.css("overflow","hidden"),d.addClass("clearing-blackout"),c.addClass("clearing-container"),h.show(),this.fix_height(n).caption(r.S(".clearing-caption",h),r.S("img",n)).center_and_label(e,f).shift(s,n,function(){n.closest("li").siblings().removeClass("visible"),n.closest("li").addClass("visible")}),h.trigger("opened.fndtn.clearing")}var r=this,l=t(i.body),d=n.closest(".clearing-assembled"),c=r.S("div",d).first(),h=r.S(".visible-img",c),u=r.S("img",h).not(e),f=r.S(".clearing-touch-label",c),p=!1,g={};t("body").on("touchmove",function(t){t.preventDefault()}),u.error(function(){p=!0}),this.locked()||(h.trigger("open.fndtn.clearing"),g=this.load(e),g.interchange?u.attr("data-interchange",g.interchange).foundation("interchange","reflow"):u.attr("src",g.src).attr("data-interchange",""),u.css("visibility","hidden"),a.call(this))},close:function(e,s){e.preventDefault();var n,a,o=function(t){return/blackout/.test(t.selector)?t:t.closest(".clearing-blackout")}(t(s)),r=t(i.body);return s===e.target&&o&&(r.css("overflow",""),n=t("div",o).first(),a=t(".visible-img",n),a.trigger("close.fndtn.clearing"),this.settings.prev_index=0,t("ul["+this.attr_name()+"]",o).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),n.removeClass("clearing-container"),a.hide(),a.trigger("closed.fndtn.clearing")),t("body").off("touchmove"),!1},is_open:function(t){return t.parent().prop("style").length>0},keydown:function(e){var i=t(".clearing-blackout ul["+this.attr_name()+"]"),s=this.rtl?37:39,n=this.rtl?39:37,a=27;e.which===s&&this.go(i,"next"),e.which===n&&this.go(i,"prev"),e.which===a&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(e,i){var s=t("ul["+this.attr_name()+"]",".clearing-blackout");e.preventDefault(),this.go(s,i)},resize:function(){var e=t("img",".clearing-blackout .visible-img"),i=t(".clearing-touch-label",".clearing-blackout");e.length&&(this.center_and_label(e,i),e.trigger("resized.fndtn.clearing"))},fix_height:function(t){var e=t.parent().children(),i=this;return e.each(function(){var t=i.S(this),e=t.find("img");t.height()>e.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(100*e.length+"%"),this},update_paddles:function(t){t=t.closest("li");var e=t.closest(".carousel").siblings(".visible-img");t.next().length>0?this.S(".clearing-main-next",e).removeClass("disabled"):this.S(".clearing-main-next",e).addClass("disabled"),t.prev().length>0?this.S(".clearing-main-prev",e).removeClass("disabled"):this.S(".clearing-main-prev",e).addClass("disabled")},center_and_label:function(t,e){return e.css(!this.rtl&&e.length>0?{marginLeft:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10}:{marginRight:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(t){var e,i,s;return"A"===t[0].nodeName?(e=t.attr("href"),i=t.data("clearing-interchange")):(s=t.closest("a"),e=s.attr("href"),i=s.data("clearing-interchange")),this.preload(t),{src:e?e:t.attr("src"),interchange:e?i:t.data("clearing-interchange")}},preload:function(t){this.img(t.closest("li").next(),"next").img(t.closest("li").prev(),"prev")},img:function(e,i){if(e.length){var s,n,a,o=t(".clearing-preload-"+i),r=this.S("a",e);r.length?(s=r.attr("href"),n=r.data("clearing-interchange")):(a=this.S("img",e),s=a.attr("src"),n=a.data("clearing-interchange")),n?o.attr("data-interchange",n):(o.attr("src",s),o.attr("data-interchange",""))}return this},caption:function(t,e){var i=e.attr("data-caption");if(i){var s=t.get(0);s.innerHTML=i,t.show()}else t.text("").hide();return this},go:function(t,e){var i=this.S(".visible",t),s=i[e]();this.settings.skip_selector&&0!=s.find(this.settings.skip_selector).length&&(s=s[e]()),s.length&&this.S("img",s).trigger("click.fndtn.clearing",[i,s]).trigger("change.fndtn.clearing")},shift:function(t,e,i){var s,n=e.parent(),a=this.settings.prev_index||e.index(),o=this.direction(n,t,e),r=this.rtl?"right":"left",l=parseInt(n.css("left"),10),d=e.outerWidth(),c={};e.index()===a||/skip/.test(o)?/skip/.test(o)&&(s=e.index()-this.settings.up_count,this.lock(),s>0?(c[r]=-(s*d),n.animate(c,300,this.unlock())):(c[r]=0,n.animate(c,300,this.unlock()))):/left/.test(o)?(this.lock(),c[r]=l+d,n.animate(c,300,this.unlock())):/right/.test(o)&&(this.lock(),c[r]=l-d,n.animate(c,300,this.unlock())),i()},direction:function(t,e,i){var s,n=this.S("li",t),a=n.outerWidth()+n.outerWidth()/4,o=Math.floor(this.S(".clearing-container").outerWidth()/a)-1,r=n.index(i);return this.settings.up_count=o,s=this.adjacent(this.settings.prev_index,r)?r>o&&r>this.settings.prev_index?"right":r>o-1&&r<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=r,s},adjacent:function(t,e){for(var i=e+1;i>=e-1;i--)if(i===t)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(e).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";var n=function(){},a=function(n,a){if(n.hasClass(a.slides_container_class))return this;var d,c,h,u,f,p,g=this,_=n,m=0,v=!1;g.slides=function(){return _.children(a.slide_selector)},g.slides().first().addClass(a.active_slide_class),g.update_slide_number=function(e){a.slide_number&&(c.find("span:first").text(parseInt(e)+1),c.find("span:last").text(g.slides().length)),a.bullets&&(h.children().removeClass(a.bullets_active_class),t(h.children().get(e)).addClass(a.bullets_active_class))},g.update_active_link=function(e){var i=t('[data-orbit-link="'+g.slides().eq(e).attr("data-orbit-slide")+'"]');i.siblings().removeClass(a.bullets_active_class),i.addClass(a.bullets_active_class)},g.build_markup=function(){_.wrap('<div class="'+a.container_class+'"></div>'),d=_.parent(),_.addClass(a.slides_container_class),a.stack_on_small&&d.addClass(a.stack_on_small_class),a.navigation_arrows&&(d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)),d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))),a.timer&&(u=t("<div>").addClass(a.timer_container_class),u.append("<span>"),u.append(t("<div>").addClass(a.timer_progress_class)),u.addClass(a.timer_paused_class),d.append(u)),a.slide_number&&(c=t("<div>").addClass(a.slide_number_class),c.append("<span></span> "+a.slide_number_text+" <span></span>"),d.append(c)),a.bullets&&(h=t("<ol>").addClass(a.bullets_container_class),d.append(h),h.wrap('<div class="orbit-bullets-container"></div>'),g.slides().each(function(e){var i=t("<li>").attr("data-orbit-slide",e).on("click",g.link_bullet);h.append(i)}))},g._goto=function(e,i){if(e===m)return!1;"object"==typeof p&&p.restart();var s=g.slides(),n="next";if(v=!0,m>e&&(n="prev"),e>=s.length){if(!a.circular)return!1;e=0}else if(0>e){if(!a.circular)return!1;e=s.length-1}var o=t(s.get(m)),r=t(s.get(e));o.css("zIndex",2),o.removeClass(a.active_slide_class),r.css("zIndex",4).addClass(a.active_slide_class),_.trigger("before-slide-change.fndtn.orbit"),a.before_slide_change(),g.update_active_link(e);var l=function(){var t=function(){m=e,v=!1,i===!0&&(p=g.create_timer(),p.start()),g.update_slide_number(m),_.trigger("after-slide-change.fndtn.orbit",[{slide_number:m,total_slides:s.length}]),a.after_slide_change(m,s.length)};_.outerHeight()!=r.outerHeight()&&a.variable_height?_.animate({height:r.outerHeight()},250,"linear",t):t()};if(1===s.length)return l(),!1;var d=function(){"next"===n&&f.next(o,r,l),"prev"===n&&f.prev(o,r,l)};r.outerHeight()>_.outerHeight()&&a.variable_height?_.animate({height:r.outerHeight()},250,"linear",d):d()},g.next=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(m+1)},g.prev=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(m-1)},g.link_custom=function(e){e.preventDefault();var i=t(this).attr("data-orbit-link");if("string"==typeof i&&""!=(i=t.trim(i))){var s=d.find("[data-orbit-slide="+i+"]");-1!=s.index()&&g._goto(s.index())}},g.link_bullet=function(){var e=t(this).attr("data-orbit-slide");if("string"==typeof e&&""!=(e=t.trim(e)))if(isNaN(parseInt(e))){var i=d.find("[data-orbit-slide="+e+"]");-1!=i.index()&&g._goto(i.index()+1)}else g._goto(parseInt(e))},g.timer_callback=function(){g._goto(m+1,!0)},g.compute_dimensions=function(){var e=t(g.slides().get(m)),i=e.outerHeight();a.variable_height||g.slides().each(function(){t(this).outerHeight()>i&&(i=t(this).outerHeight())}),_.height(i)},g.create_timer=function(){var t=new o(d.find("."+a.timer_container_class),a,g.timer_callback);return t},g.stop_timer=function(){"object"==typeof p&&p.stop()},g.toggle_timer=function(){var t=d.find("."+a.timer_container_class);t.hasClass(a.timer_paused_class)?("undefined"==typeof p&&(p=g.create_timer()),p.start()):"object"==typeof p&&p.stop()},g.init=function(){g.build_markup(),a.timer&&(p=g.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),p.start)),f=new l(a,_),"slide"===a.animation&&(f=new r(a,_)),d.on("click","."+a.next_class,g.next),d.on("click","."+a.prev_class,g.prev),a.next_on_click&&d.on("click","."+a.slides_container_class+" [data-orbit-slide]",g.link_bullet),d.on("click",g.toggle_timer),a.swipe&&d.on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:s};d.data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var e=d.data("swipe-transition");if("undefined"==typeof e&&(e={}),e.delta_x=t.touches[0].pageX-e.start_page_x,"undefined"==typeof e.is_scrolling&&(e.is_scrolling=!!(e.is_scrolling||Math.abs(e.delta_x)<Math.abs(t.touches[0].pageY-e.start_page_y))),!e.is_scrolling&&!e.active){t.preventDefault();var i=e.delta_x<0?m+1:m-1;e.active=!0,g._goto(i)}}}).on("touchend.fndtn.orbit",function(t){d.data("swipe-transition",{}),t.stopPropagation()}),d.on("mouseenter.fndtn.orbit",function(){a.timer&&a.pause_on_hover&&g.stop_timer()}).on("mouseleave.fndtn.orbit",function(){a.timer&&a.resume_on_mouseout&&p.start()}),t(i).on("click","[data-orbit-link]",g.link_custom),t(e).on("load resize",g.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),g.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){d.prev("."+a.preloader_class).css("display","none"),g.update_slide_number(0),g.update_active_link(0),_.trigger("ready.fndtn.orbit")})},g.init()},o=function(t,e,i){var s,n,a=this,o=e.timer_speed,r=t.find("."+e.timer_progress_class),l=-1;this.update_progress=function(t){var e=r.clone();e.attr("style",""),e.css("width",t+"%"),r.replaceWith(e),r=e},this.restart=function(){clearTimeout(n),t.addClass(e.timer_paused_class),l=-1,a.update_progress(0)},this.start=function(){return t.hasClass(e.timer_paused_class)?(l=-1===l?o:l,t.removeClass(e.timer_paused_class),s=(new Date).getTime(),r.animate({width:"100%"},l,"linear"),n=setTimeout(function(){a.restart(),i()},l),void t.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(t.hasClass(e.timer_paused_class))return!0;clearTimeout(n),t.addClass(e.timer_paused_class);var i=(new Date).getTime();l-=i-s;var r=100-l/o*100;a.update_progress(r),t.trigger("timer-stopped.fndtn.orbit")}},r=function(e){var i=e.animation_speed,s=1===t("html[dir=rtl]").length,n=s?"marginRight":"marginLeft",a={};a[n]="0%",this.next=function(t,e,s){t.animate({marginLeft:"-100%"},i),e.animate(a,i,function(){t.css(n,"100%"),s()})},this.prev=function(t,e,s){t.animate({marginLeft:"100%"},i),e.css(n,"-100%"),e.animate(a,i,function(){t.css(n,"100%"),s()})}},l=function(e){{var i=e.animation_speed;1===t("html[dir=rtl]").length}this.next=function(t,e,s){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),s()})},this.prev=function(t,e,s){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),s()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.3",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:n,after_slide_change:n},init:function(t,e,i){this.bindings(e,i)},events:function(t){var e=new a(this.S(t),this.S(t).data("orbit-init"));this.S(t).data(this.name+"-instance",e)},reflow:function(){var t=this;if(t.S(t.scope).is("[data-orbit]")){var e=t.S(t.scope),i=e.data(t.name+"-instance");i.compute_dimensions()}else t.S("[data-orbit]",t.scope).each(function(e,i){var s=t.S(i),n=(t.data_options(s),s.data(t.name+"-instance"));n.compute_dimensions()})}}}(jQuery,window,window.document),function(t){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(t,e,i){this.bindings(e,i)},events:function(){var e=this,i=e.S,s="",n="",a="",o="",r="";"move"===this.settings.open_method?(s="move-",n="right",a="left",o="top",r="bottom"):"overlap_single"===this.settings.open_method?(s="offcanvas-overlap-",n="right",a="left",o="top",r="bottom"):"overlap"===this.settings.open_method&&(s="offcanvas-overlap"),i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(a){e.click_toggle_class(a,s+n),"overlap"!==e.settings.open_method&&i(".left-submenu").removeClass(s+n),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(a){var o=e.get_settings(a),r=i(this).parent();!o.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(a.preventDefault(),i(this).siblings(".left-submenu").toggleClass(s+n)):r.hasClass("back")&&(a.preventDefault(),r.parent().removeClass(s+n)):(e.hide.call(e,s+n,e.get_wrapper(a)),r.parent().removeClass(s+n)),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(n){e.click_toggle_class(n,s+a),"overlap"!==e.settings.open_method&&i(".right-submenu").removeClass(s+a),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(n){var o=e.get_settings(n),r=i(this).parent();!o.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(n.preventDefault(),i(this).siblings(".right-submenu").toggleClass(s+a)):r.hasClass("back")&&(n.preventDefault(),r.parent().removeClass(s+a)):(e.hide.call(e,s+a,e.get_wrapper(n)),r.parent().removeClass(s+a)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(n){e.click_toggle_class(n,s+r),"overlap"!==e.settings.open_method&&i(".top-submenu").removeClass(s+r),t(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(n){var a=e.get_settings(n),o=i(this).parent();!a.close_on_click||o.hasClass("has-submenu")||o.hasClass("back")?i(this).parent().hasClass("has-submenu")?(n.preventDefault(),i(this).siblings(".top-submenu").toggleClass(s+r)):o.hasClass("back")&&(n.preventDefault(),o.parent().removeClass(s+r)):(e.hide.call(e,s+r,e.get_wrapper(n)),o.parent().removeClass(s+r)),t(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(n){e.click_toggle_class(n,s+o),"overlap"!==e.settings.open_method&&i(".bottom-submenu").removeClass(s+o),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(n){var a=e.get_settings(n),r=i(this).parent();!a.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(n.preventDefault(),i(this).siblings(".bottom-submenu").toggleClass(s+o)):r.hasClass("back")&&(n.preventDefault(),r.parent().removeClass(s+o)):(e.hide.call(e,s+o,e.get_wrapper(n)),r.parent().removeClass(s+o)),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(o){e.click_remove_class(o,s+a),i(".right-submenu").removeClass(s+a),n&&(e.click_remove_class(o,s+n),i(".left-submenu").removeClass(s+a)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){e.click_remove_class(i,s+a),t(".left-off-canvas-toggle").attr("aria-expanded","false"),n&&(e.click_remove_class(i,s+n),t(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){e.click_remove_class(n,s+o),i(".bottom-submenu").removeClass(s+o),r&&(e.click_remove_class(n,s+r),i(".top-submenu").removeClass(s+o)),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){e.click_remove_class(i,s+o),t(".top-off-canvas-toggle").attr("aria-expanded","false"),r&&(e.click_remove_class(i,s+r),t(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(t,e){e=e||this.get_wrapper(),e.is("."+t)?this.hide(t,e):this.show(t,e)},show:function(t,e){e=e||this.get_wrapper(),e.trigger("open.fndtn.offcanvas"),e.addClass(t)},hide:function(t,e){e=e||this.get_wrapper(),e.trigger("close.fndtn.offcanvas"),e.removeClass(t)},click_toggle_class:function(t,e){t.preventDefault();var i=this.get_wrapper(t);this.toggle(e,i)},click_remove_class:function(t,e){t.preventDefault();var i=this.get_wrapper(t);this.hide(e,i)},get_settings:function(t){var e=this.S(t.target).closest("["+this.attr_name()+"]");return e.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(t){var e=this.S(t?t.target:this.scope).closest(".off-canvas-wrap");return 0===e.length&&(e=this.S(".off-canvas-wrap")),e},reflow:function(){}}}(jQuery,window,window.document),function(t){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.3",settings:{callback:function(){}},init:function(t,e,i){this.bindings(e,i)},events:function(){var e=this,i=this.S;t(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(t){var s=i(this).closest("["+e.attr_name()+"]"),n=s.data(e.attr_name(!0)+"-init")||e.settings;t.preventDefault(),Modernizr.csstransitions?(s.addClass("alert-close"),s.on("transitionend webkitTransitionEnd oTransitionEnd",function(){i(this).trigger("close.fndtn.alert").remove(),n.callback()})):s.fadeOut(300,function(){i(this).trigger("close.fndtn.alert").remove(),n.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";function n(t){var e=/fade/i.test(t),i=/pop/i.test(t);return{animate:e||i,pop:i,fade:e}}var a=[];Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:t.noop,bg:t(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(e,i,s){t.extend(!0,this.settings,i,s),this.bindings(i,s)},events:function(){var t=this,e=t.S;return e(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(i){if(i.preventDefault(),!t.locked){var s=e(this),n=s.data(t.data_attr("reveal-ajax")),a=s.data(t.data_attr("reveal-replace-content"));if(t.locked=!0,"undefined"==typeof n)t.open.call(t,s);else{var o=n===!0?s.attr("href"):n;t.open.call(t,s,{url:o},{replaceContentSel:a})}}}),e(i).on("click.fndtn.reveal",this.close_targets(),function(i){if(i.preventDefault(),!t.locked){var s=e("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,n=e(i.target)[0]===e("."+s.bg_class)[0];if(n){if(!s.close_on_background_click)return;i.stopPropagation()}t.locked=!0,t.close.call(t,n?e("["+t.attr_name()+"].open:not(.toback)"):e(this).closest("["+t.attr_name()+"]"))}}),e("["+t.attr_name()+"]",this.scope).length>0?e(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):e(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var i=t.S("["+t.attr_name()+"].open"),s=i.data(t.attr_name(!0)+"-init")||t.settings;s&&27===e.which&&s.close_on_esc&&!t.locked&&t.close.call(t,i)}),!0},key_up_off:function(){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(i,n){var o,r=this;i?"undefined"!=typeof i.selector?o=r.S("#"+i.data(r.data_attr("reveal-id"))).first():(o=r.S(this.scope),n=i):o=r.S(this.scope);var l=o.data(r.attr_name(!0)+"-init");if(l=l||this.settings,o.hasClass("open")&&i!==s&&i.attr("data-reveal-id")==o.attr("id"))return r.close(o);if(!o.hasClass("open")){var d=r.S("["+r.attr_name()+"].open");"undefined"==typeof o.data("css-top")&&o.data("css-top",parseInt(o.css("top"),10)).data("offset",this.cache_offset(o)),o.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(o),o.on("open.fndtn.reveal",function(t){"fndtn.reveal"!==t.namespace}),o.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),d.length<1&&this.toggle_bg(o,!0),"string"==typeof n&&(n={url:n});var c=function(){d.length>0&&(l.multiple_opened?r.to_back(d):r.hide(d,l.css.close)),l.multiple_opened&&a.push(o),r.show(o,l.css.open)};if("undefined"!=typeof n&&n.url){var h="undefined"!=typeof n.success?n.success:null;t.extend(n,{success:function(e,i,s){if(t.isFunction(h)){var n=h(e,i,s);"string"==typeof n&&(e=n)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?o.find(options.replaceContentSel).html(e):o.html(e),r.S(o).foundation("section","reflow"),r.S(o).children().foundation(),c()}}),l.on_ajax_error!==t.noop&&t.extend(n,{error:l.on_ajax_error}),t.ajax(n)}else c()}r.S(e).trigger("resize")},close:function(e){var e=e&&e.length?e:this.S(this.scope),i=this.S("["+this.attr_name()+"].open"),s=e.data(this.attr_name(!0)+"-init")||this.settings,n=this;
if(i.length>0)if(e.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(e),e.trigger("close.fndtn.reveal"),(s.multiple_opened&&1===i.length||!s.multiple_opened||e.length>1)&&(n.toggle_bg(e,!1),n.to_front(e)),s.multiple_opened){var o=e.is(":not(.toback)");n.hide(e,s.css.close,s),o?a.pop():a=t.grep(a,function(t){var i=t[0]===e[0];return i&&n.to_front(e),!i}),a.length>0&&n.to_front(a[a.length-1])}else n.hide(i,s.css.close,s)},close_targets:function(){var t="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?t+", ."+this.settings.bg_class:t},toggle_bg:function(e,i){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=t("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var n=this.settings.bg.filter(":visible").length>0;i!=n&&((i==s?n:!i)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(i,s){if(s){var a=i.data(this.attr_name(!0)+"-init")||this.settings,o=a.root_element,r=this;if(0===i.parent(o).length){var l=i.wrap('<div style="display: none;" />').parent();i.on("closed.fndtn.reveal.wrapped",function(){i.detach().appendTo(l),i.unwrap().unbind("closed.fndtn.reveal.wrapped")}),i.detach().appendTo(o)}var d=n(a.animation);if(d.animate||(this.locked=!1),d.pop){s.top=t(e).scrollTop()-i.data("offset")+"px";var c={top:t(e).scrollTop()+i.data("css-top")+"px",opacity:1};return setTimeout(function(){return i.css(s).animate(c,a.animation_speed,"linear",function(){r.locked=!1,i.trigger("opened.fndtn.reveal")}).addClass("open")},a.animation_speed/2)}if(s.top=t(e).scrollTop()+i.data("css-top")+"px",d.fade){var c={opacity:1};return setTimeout(function(){return i.css(s).animate(c,a.animation_speed,"linear",function(){r.locked=!1,i.trigger("opened.fndtn.reveal")}).addClass("open")},a.animation_speed/2)}return i.css(s).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var a=this.settings;return n(a.animation).fade?i.fadeIn(a.animation_speed/2):(this.locked=!1,i.show())},to_back:function(t){t.addClass("toback")},to_front:function(t){t.removeClass("toback")},hide:function(i,s){if(s){var a=i.data(this.attr_name(!0)+"-init"),o=this;a=a||this.settings;var r=n(a.animation);if(r.animate||(this.locked=!1),r.pop){var l={top:-t(e).scrollTop()-i.data("offset")+"px",opacity:0};return setTimeout(function(){return i.animate(l,a.animation_speed,"linear",function(){o.locked=!1,i.css(s).trigger("closed.fndtn.reveal")}).removeClass("open")},a.animation_speed/2)}if(r.fade){var l={opacity:0};return setTimeout(function(){return i.animate(l,a.animation_speed,"linear",function(){o.locked=!1,i.css(s).trigger("closed.fndtn.reveal")}).removeClass("open")},a.animation_speed/2)}return i.hide().css(s).removeClass("open").trigger("closed.fndtn.reveal")}var a=this.settings;return n(a.animation).fade?i.fadeOut(a.animation_speed/2):i.hide()},close_video:function(e){var i=t(".flex-video",e.target),s=t("iframe",i);s.length>0&&(s.attr("data-src",s[0].src),s.attr("src",s.attr("src")),i.hide())},open_video:function(e){var i=t(".flex-video",e.target),n=i.find("iframe");if(n.length>0){var a=n.attr("data-src");if("string"==typeof a)n[0].src=n.attr("data-src");else{var o=n[0].src;n[0].src=s,n[0].src=o}i.show()}},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},cache_offset:function(t){var e=t.show().height()+parseInt(t.css("top"),10)+t.scrollY;return t.hide(),e},off:function(){t(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(e,i,s){if(null!==e&&/IMG/.test(e[0].nodeName)){var n=t.each(e,function(){this.src=i});if(new RegExp(i,"i").test(n))return;return e.attr("src",i),s(e[0].src)}var a=e.data(this.data_attr+"-last-path"),o=this;if(a!=i)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)?(t(e).css("background-image","url("+i+")"),e.data("interchange-last-path",i),s(i)):t.get(i,function(t){e.html(t),e.data(o.data_attr+"-last-path",i),s()})}}},init:function(e,i,s){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),t.extend(!0,this.settings,i,s),this.bindings(i,s),this.reflow()},get_media_hash:function(){var t="";for(var e in this.settings.named_queries)t+=matchMedia(this.settings.named_queries[e]).matches.toString();return t},events:function(){var i,s=this;return t(e).off(".interchange").on("resize.fndtn.interchange",s.throttle(function(){var t=s.get_media_hash();t!==i&&s.resize(),i=t},50)),this},resize:function(){var e=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(t.proxy(this.resize,this),50);for(var i in e)if(e.hasOwnProperty(i)){var s=this.results(i,e[i]);s&&this.settings.directives[s.scenario[1]].call(this,s.el,s.scenario[0],function(t){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);return function(){t.el.trigger(t.scenario[1],e)}}(s))}},results:function(t,e){var i=e.length;if(i>0)for(var s=this.S("["+this.add_namespace("data-uuid")+'="'+t+'"]');i--;){var n,a=e[i][2];if(n=matchMedia(this.settings.named_queries.hasOwnProperty(a)?this.settings.named_queries[a]:a),n.matches)return{el:s,scenario:e[i]}}return!1},load:function(t,e){return("undefined"==typeof this["cached_"+t]||e)&&this["update_"+t](),this["cached_"+t]},update_images:function(){var t=this.S("img["+this.data_attr+"]"),e=t.length,i=e,s=0,n=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===e;i--;){if(s++,t[i]){var a=t[i].getAttribute(n)||"";a.length>0&&this.cached_images.push(t[i])}s===e&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var t=this.S("["+this.data_attr+"]").not("img"),e=t.length,i=e,s=0,n=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===e;i--;){s++;var a=t[i].getAttribute(n)||"";a.length>0&&this.cached_nodes.push(t[i]),s===e&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(i){for(var s=this["cached_"+i].length;s--;)this.object(t(this["cached_"+i][s]));return t(e).trigger("resize.fndtn.interchange")},convert_directive:function(t){var e=this.trim(t);return e.length>0?e:"replace"},parse_scenario:function(t){var e=t[0].match(/(.+),\s*(\w+)\s*$/),i=t[1].match(/(.*)\)/);if(e)var s=e[1],n=e[2];else var a=t[0].split(/,\s*$/),s=a[0],n="";return[this.trim(s),this.convert_directive(n),this.trim(i[1])]},object:function(t){var e=this.parse_data_attr(t),i=[],s=e.length;if(s>0)for(;s--;){var n=e[s].split(/,\s?\(/);if(n.length>1){var a=this.parse_scenario(n);i.push(a)}}return this.store(t,i)},store:function(t,e){var i=this.random_str(),s=t.data(this.add_namespace("uuid",!0));return this.cache[s]?this.cache[s]:(t.attr(this.add_namespace("data-uuid"),i),this.cache[i]=e)},trim:function(e){return"string"==typeof e?t.trim(e):e},set_data_attr:function(t){return t?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(t){for(var e=t.attr(this.attr_name()).split(/\[(.*?)\]/),i=e.length,s=[];i--;)e[i].replace(/[\W\d]+/,"").length>4&&s.push(e[i]);return s},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(t,e,i){Foundation.inherit(this,"throttle"),this.bindings(e,i)},events:function(){var e=this,i=e.S,s=e.settings;e.set_expedition_position(),i(e.scope).off(".magellan").on("click.fndtn.magellan","["+e.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(i){var s=this.hostname===location.hostname||!this.hostname,n=e.filterPathname(location.pathname)===e.filterPathname(this.pathname),a=this.hash.replace(/(:|\.|\/)/g,"\\$1"),o=this;if(s&&n&&a){i.preventDefault();var r=t(this).closest("["+e.attr_name()+"]"),l=r.data("magellan-expedition-init"),d=this.hash.split("#").join(""),c=t('a[name="'+d+'"]');0===c.length&&(c=t("#"+d));var h=c.offset().top-l.destination_threshold+1;l.offset_by_height&&(h-=r.outerHeight()),t("html, body").stop().animate({scrollTop:h},l.duration,l.easing,function(){history.pushState?history.pushState(null,null,o.pathname+o.search+"#"+d):location.hash=o.pathname+o.search+"#"+d})}}).on("scroll.fndtn.magellan",e.throttle(this.check_for_arrivals.bind(this),s.throttle_delay))},check_for_arrivals:function(){var t=this;t.update_arrivals(),t.update_expedition_positions()},set_expedition_position:function(){var e=this;t("["+this.attr_name()+"=fixed]",e.scope).each(function(){var i,s,n=t(this),a=n.data("magellan-expedition-init"),o=n.attr("styles");n.attr("style",""),i=n.offset().top+a.threshold,s=parseInt(n.data("magellan-fixed-top")),isNaN(s)||(e.settings.fixed_top=s),n.data(e.data_attr("magellan-top-offset"),i),n.attr("style",o)})},update_expedition_positions:function(){var i=this,s=t(e).scrollTop();t("["+this.attr_name()+"=fixed]",i.scope).each(function(){var e=t(this),n=e.data("magellan-expedition-init"),a=e.attr("style"),o=e.data("magellan-top-offset");if(s+i.settings.fixed_top>=o){var r=e.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]");0===r.length&&(r=e.clone(),r.removeAttr(i.attr_name()),r.attr(i.add_namespace("data-magellan-expedition-clone"),""),e.before(r)),e.css({position:"fixed",top:n.fixed_top}).addClass("fixed")}else e.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]").remove(),e.attr("style",a).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var i=this,s=t(e).scrollTop();t("["+this.attr_name()+"]",i.scope).each(function(){var e=t(this),n=e.data(i.attr_name(!0)+"-init"),a=i.offsets(e,s),o=e.find("["+i.add_namespace("data-magellan-arrival")+"]"),r=!1;a.each(function(t,s){if(s.viewport_offset>=s.top_offset){var a=e.find("["+i.add_namespace("data-magellan-arrival")+"]");return a.not(s.arrival).removeClass(n.active_class),s.arrival.addClass(n.active_class),r=!0,!0}}),r||o.removeClass(n.active_class)})},offsets:function(e,i){var s=this,n=e.data(s.attr_name(!0)+"-init"),a=i;return e.find("["+s.add_namespace("data-magellan-arrival")+"]").map(function(){var i=t(this).data(s.data_attr("magellan-arrival")),o=t("["+s.add_namespace("data-magellan-destination")+"="+i+"]");if(o.length>0){var r=o.offset().top-n.destination_threshold;return n.offset_by_height&&(r-=e.outerHeight()),r=Math.floor(r),{destination:o,arrival:t(this),top_offset:r,viewport_offset:a}}}).sort(function(t,e){return t.top_offset<e.top_offset?-1:t.top_offset>e.top_offset?1:0})},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){this.S(this.scope).off(".magellan"),this.S(e).off(".magellan")},filterPathname:function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var e=this;t("["+e.add_namespace("data-magellan-expedition-clone")+"]",e.scope).remove()}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(t,e,i){this.bindings(e,i)},events:function(e){var i=this,s=this.S;i.create(this.S(e)),s(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(e){var n=s(this).closest("["+i.attr_name()+"]"),a=i.attr_name()+"="+n.attr(i.attr_name()),o=n.data(i.attr_name(!0)+"-init")||i.settings,r=s("#"+this.href.split("#")[1]),l=t("> dd, > li",n),d=l.children("."+o.content_class),c=d.filter("."+o.active_class);return e.preventDefault(),n.attr(i.attr_name())&&(d=d.add("["+a+"] dd > ."+o.content_class+", ["+a+"] li > ."+o.content_class),l=l.add("["+a+"] dd, ["+a+"] li")),o.toggleable&&r.is(c)?(r.parent("dd, li").toggleClass(o.active_class,!1),r.toggleClass(o.active_class,!1),s(this).attr("aria-expanded",function(t,e){return"true"===e?"false":"true"}),o.callback(r),r.triggerHandler("toggled",[n]),void n.triggerHandler("toggled",[r])):(o.multi_expand||(d.removeClass(o.active_class),l.removeClass(o.active_class),l.children("a").attr("aria-expanded","false")),r.addClass(o.active_class).parent().addClass(o.active_class),o.callback(r),r.triggerHandler("toggled",[n]),n.triggerHandler("toggled",[r]),void s(this).attr("aria-expanded","true"))})},create:function(e){var i=this,s=e,n=t("> .accordion-navigation",s),a=s.data(i.attr_name(!0)+"-init")||i.settings;n.children("a").attr("aria-expanded","false"),n.has("."+a.content_class+"."+a.active_class).addClass(a.active_class).children("a").attr("aria-expanded","true"),a.multi_expand&&e.attr("aria-multiselectable","true")},toggle:function(t){var t="undefined"!=typeof t?t:{},i="undefined"!=typeof t.selector?t.selector:"",s="undefined"!=typeof t.toggle_state?t.toggle_state:"",n="undefined"!=typeof t.$accordion?t.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),a=n.find("> dd"+i+", > li"+i);if(a.length<1)return e.console&&console.error("Selection not found.",i),!1;var o=this.S,r=this.settings.active_class;a.each(function(){var t=o(this),e=t.hasClass(r);(e&&"close"===s||!e&&"open"===s||""===s)&&t.find("> a").trigger("click.fndtn.accordion")})},open:function(t){var t="undefined"!=typeof t?t:{};t.toggle_state="open",this.toggle(t)},close:function(t){var t="undefined"!=typeof t?t:{};t.toggle_state="close",this.toggle(t)},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(e,i,s){Foundation.inherit(this,"add_custom_rule register_media throttle");var n=this;n.register_media("topbar","foundation-mq-topbar"),this.bindings(i,s),n.S("["+this.attr_name()+"]",this.scope).each(function(){{var e=t(this),i=e.data(n.attr_name(!0)+"-init");n.S("section, .top-bar-section",this)}e.data("index",0);var s=e.parent();s.hasClass("fixed")||n.is_sticky(e,s,i)?(n.settings.sticky_class=i.sticky_class,n.settings.sticky_topbar=e,e.data("height",s.outerHeight()),e.data("stickyoffset",s.offset().top)):e.data("height",e.outerHeight()),i.assembled||n.assemble(e),i.is_hover?n.S(".has-dropdown",e).addClass("not-click"):n.S(".has-dropdown",e).removeClass("not-click"),n.add_custom_rule(".f-topbar-fixed { padding-top: "+e.data("height")+"px }"),s.hasClass("fixed")&&n.S("body").addClass("f-topbar-fixed")})},is_sticky:function(t,e,i){var s=e.hasClass(i.sticky_class),n=matchMedia(Foundation.media_queries.small).matches,a=matchMedia(Foundation.media_queries.medium).matches,o=matchMedia(Foundation.media_queries.large).matches;return s&&"all"===i.sticky_on?!0:s&&this.small()&&-1!==i.sticky_on.indexOf("small")&&n&&!a&&!o?!0:s&&this.medium()&&-1!==i.sticky_on.indexOf("medium")&&n&&a&&!o?!0:s&&this.large()&&-1!==i.sticky_on.indexOf("large")&&n&&a&&o?!0:!1},toggle:function(i){var s,n=this;s=i?n.S(i).closest("["+this.attr_name()+"]"):n.S("["+this.attr_name()+"]");var a=s.data(this.attr_name(!0)+"-init"),o=n.S("section, .top-bar-section",s);n.breakpoint()&&(n.rtl?(o.css({right:"0%"}),t(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),t(">.name",o).css({left:"100%"})),n.S("li.moved",o).removeClass("moved"),s.data("index",0),s.toggleClass("expanded").css("height","")),a.scrolltop?s.hasClass("expanded")?s.parent().hasClass("fixed")&&(a.scrolltop?(s.parent().removeClass("fixed"),s.addClass("fixed"),n.S("body").removeClass("f-topbar-fixed"),e.scrollTo(0,0)):s.parent().removeClass("expanded")):s.hasClass("fixed")&&(s.parent().addClass("fixed"),s.removeClass("fixed"),n.S("body").addClass("f-topbar-fixed")):(n.is_sticky(s,s.parent(),a)&&s.parent().addClass("fixed"),s.parent().hasClass("fixed")&&(s.hasClass("expanded")?(s.addClass("fixed"),s.parent().addClass("expanded"),n.S("body").addClass("f-topbar-fixed")):(s.removeClass("fixed"),s.parent().removeClass("expanded"),n.update_sticky_positioning())))},timer:null,events:function(){var i=this,s=this.S;s(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),i.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(){var e=t(this).closest("li"),s=e.closest("["+i.attr_name()+"]"),n=s.data(i.attr_name(!0)+"-init");if(n.dropdown_autoclose&&n.is_hover){var a=t(this).closest(".hover");a.removeClass("hover")}!i.breakpoint()||e.hasClass("back")||e.hasClass("has-dropdown")||i.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(e){var n=s(this),a=s(e.target),o=n.closest("["+i.attr_name()+"]"),r=o.data(i.attr_name(!0)+"-init");return a.data("revealId")?void i.toggle():void(i.breakpoint()||(!r.is_hover||Modernizr.touch)&&(e.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),t(n).siblings().removeClass("hover"),"A"===a[0].nodeName&&a.parent().hasClass("has-dropdown")&&e.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(i.breakpoint()){t.preventDefault();var e=s(this),n=e.closest("["+i.attr_name()+"]"),a=n.find("section, .top-bar-section"),o=(e.next(".dropdown").outerHeight(),e.closest("li"));n.data("index",n.data("index")+1),o.addClass("moved"),i.rtl?(a.css({right:-(100*n.data("index"))+"%"}),a.find(">.name").css({right:100*n.data("index")+"%"})):(a.css({left:-(100*n.data("index"))+"%"}),a.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",e.siblings("ul").outerHeight(!0)+n.data("height"))}}),s(e).off(".topbar").on("resize.fndtn.topbar",i.throttle(function(){i.resize.call(i)},50)).trigger("resize.fndtn.topbar").load(function(){s(this).trigger("resize.fndtn.topbar")}),s("body").off(".topbar").on("click.fndtn.topbar",function(t){var e=s(t.target).closest("li").closest("li.hover");e.length>0||s("["+i.attr_name()+"] li.hover").removeClass("hover")}),s(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var e=s(this),n=e.closest("["+i.attr_name()+"]"),a=n.find("section, .top-bar-section"),o=(n.data(i.attr_name(!0)+"-init"),e.closest("li.moved")),r=o.parent();n.data("index",n.data("index")-1),i.rtl?(a.css({right:-(100*n.data("index"))+"%"}),a.find(">.name").css({right:100*n.data("index")+"%"})):(a.css({left:-(100*n.data("index"))+"%"}),a.find(">.name").css({left:100*n.data("index")+"%"})),0===n.data("index")?n.css("height",""):n.css("height",r.outerHeight(!0)+n.data("height")),setTimeout(function(){o.removeClass("moved")},300)}),s(this.scope).find(".dropdown a").focus(function(){t(this).parents(".has-dropdown").addClass("hover")}).blur(function(){t(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var e,s=t.S(this),n=s.data(t.attr_name(!0)+"-init"),a=s.parent("."+t.settings.sticky_class);if(!t.breakpoint()){var o=s.hasClass("expanded");s.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&t.toggle(s)}t.is_sticky(s,a,n)&&(a.hasClass("fixed")?(a.removeClass("fixed"),e=a.offset().top,t.S(i.body).hasClass("f-topbar-fixed")&&(e-=s.data("height")),s.data("stickyoffset",e),a.addClass("fixed")):(e=a.offset().top,s.data("stickyoffset",e)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(e){var i=this,s=e.data(this.attr_name(!0)+"-init"),n=i.S("section, .top-bar-section",e);n.detach(),i.S(".has-dropdown>a",n).each(function(){var e,n=i.S(this),a=n.siblings(".dropdown"),o=n.attr("href");a.find(".title.back").length||(e=t(1==s.mobile_show_parent_link&&o?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+o+'">'+n.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),t("h5>a",e).html(1==s.custom_back_text?s.back_text:"&laquo; "+n.html()),a.prepend(e))}),n.appendTo(e),this.sticky(),this.assembled(e)},assembled:function(e){e.data(this.attr_name(!0),t.extend({},e.data(this.attr_name(!0)),{assembled:!0}))},height:function(e){var i=0,s=this;return t("> li",e).each(function(){i+=s.S(this).outerHeight(!0)}),i},sticky:function(){var t=this;this.S(e).on("scroll",function(){t.update_sticky_positioning()})},update_sticky_positioning:function(){var t="."+this.settings.sticky_class,i=this.S(e),s=this;if(s.settings.sticky_topbar&&s.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var n=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;s.S(t).hasClass("expanded")||(i.scrollTop()>n?s.S(t).hasClass("fixed")||(s.S(t).addClass("fixed"),s.S("body").addClass("f-topbar-fixed")):i.scrollTop()<=n&&s.S(t).hasClass("fixed")&&(s.S(t).removeClass("fixed"),s.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(e).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(t,e,i){var s=this,n=this.S;n("["+this.attr_name()+"] > .active > a",this.scope).each(function(){s.default_tab_hashes.push(this.hash)}),this.bindings(e,i),this.handle_location_hash_change()},events:function(){var t=this,i=this.S,s=function(e,s){var n=i(s).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init");if(!n.is_hover||Modernizr.touch){var a=e.keyCode||e.which;9!==a&&(e.preventDefault(),e.stopPropagation()),t.toggle_active_tab(i(s).parent())}};i(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var e=t.keyCode||t.which;if(13===e||32===e){var i=this;s(t,i)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var e=this;s(t,e)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){var e=i(this).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init");e.is_hover&&t.toggle_active_tab(i(this).parent())}),i(e).on("hashchange.fndtn.tab",function(e){e.preventDefault(),t.handle_location_hash_change()})},handle_location_hash_change:function(){var e=this,i=this.S;i("["+this.attr_name()+"]",this.scope).each(function(){var n=i(this).data(e.attr_name(!0)+"-init");if(n.deep_linking){var a;if(a=n.scroll_to_content?e.scope.location.hash:e.scope.location.hash.replace("fndtn-",""),""!=a){var o=i(a);if(o.hasClass("content")&&o.parent().hasClass("tabs-content"))e.toggle_active_tab(t("["+e.attr_name()+"] > * > a[href="+a+"]").parent());else{var r=o.closest(".content").attr("id");r!=s&&e.toggle_active_tab(t("["+e.attr_name()+"] > * > a[href=#"+r+"]").parent(),a)}}else for(var l=0;l<e.default_tab_hashes.length;l++)e.toggle_active_tab(t("["+e.attr_name()+"] > * > a[href="+e.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(n,a){var o=this,r=o.S,l=n.closest("["+this.attr_name()+"]"),d=n.find("a"),c=n.children("a").first(),h="#"+c.attr("href").split("#")[1],u=r(h),f=n.siblings(),p=l.data(this.attr_name(!0)+"-init"),g=function(e){var s,n=t(this),a=t(this).parents("li").prev().children('[role="tab"]'),o=t(this).parents("li").next().children('[role="tab"]');switch(e.keyCode){case 37:s=a;break;case 39:s=o;break;default:s=!1}s.length&&(n.attr({tabindex:"-1","aria-selected":null}),s.attr({tabindex:"0","aria-selected":!0}).focus()),t('[role="tabpanel"]').attr("aria-hidden","true"),t("#"+t(i.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},_=function(t){var i=p.scroll_to_content?o.default_tab_hashes[0]:"fndtn-"+o.default_tab_hashes[0].replace("#","");(t!==i||e.location.hash)&&(e.location.hash=t)};c.data("tab-content")&&(h="#"+c.data("tab-content").split("#")[1],u=r(h)),p.deep_linking&&(p.scroll_to_content?(_(a||h),a==s||a==h?n.parent()[0].scrollIntoView():r(h)[0].scrollIntoView()):_(a!=s?"fndtn-"+a.replace("#",""):"fndtn-"+h.replace("#",""))),n.addClass(p.active_class).triggerHandler("opened"),d.attr({"aria-selected":"true",tabindex:0}),f.removeClass(p.active_class),f.find("a").attr({"aria-selected":"false"}),u.siblings().removeClass(p.active_class).attr({"aria-hidden":"true"}),u.addClass(p.active_class).attr("aria-hidden","false").removeAttr("tabindex"),p.callback(n),u.triggerHandler("toggled",[u]),l.triggerHandler("toggled",[n]),d.off("keydown").on("keydown",g)},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.3",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(t){var e=i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,s=t.value,n=e===s;return n}}},timer:null,init:function(t,e,i){this.bindings(e,i)},events:function(e){function i(t,e){clearTimeout(s.timer),s.timer=setTimeout(function(){s.validate([t],e)}.bind(t),a.timeout)}var s=this,n=s.S(e).attr("novalidate","novalidate"),a=n.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),n.off(".abide").on("submit.fndtn.abide",function(t){var e=/ajax/i.test(s.S(this).attr(s.attr_name()));return s.validate(s.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),t,e)}).on("validate.fndtn.abide",function(t){"manual"===a.validate_on&&s.validate([t.target],t)}).on("reset",function(e){return s.reset(t(this),e)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(t){var e=this.getAttribute("id"),s=n.find('[data-equalto="'+e+'"]');a.validate_on_blur&&a.validate_on_blur===!0&&i(this,t),"undefined"!=typeof s.get(0)&&s.val().length&&i(s.get(0),t),"change"===a.validate_on&&i(this,t)}).on("keydown.fndtn.abide",function(t){var e=this.getAttribute("id"),s=n.find('[data-equalto="'+e+'"]');a.live_validate&&a.live_validate===!0&&9!=t.which&&i(this,t),"undefined"!=typeof s.get(0)&&s.val().length&&i(s.get(0),t),"tab"===a.validate_on&&9===t.which?i(this,t):"change"===a.validate_on&&i(this,t)}).on("focus",function(e){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&t("html, body").animate({scrollTop:t(e.target).offset().top},100)})},reset:function(e){var i=this;e.removeAttr(i.invalid_attr),t("["+i.invalid_attr+"]",e).removeAttr(i.invalid_attr),t("."+i.settings.error_class,e).not("small").removeClass(i.settings.error_class),t(":input",e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(i.invalid_attr)},validate:function(t,e,i){for(var s=this.parse_patterns(t),n=s.length,a=this.S(t[0]).closest("form"),o=/submit/.test(e.type),r=0;n>r;r++)if(!s[r]&&(o||i))return this.settings.focus_on_invalid&&t[r].focus(),a.trigger("invalid.fndtn.abide"),this.S(t[r]).closest("form").attr(this.invalid_attr,""),!1;return(o||i)&&a.trigger("valid.fndtn.abide"),a.removeAttr(this.invalid_attr),i?!1:!0},parse_patterns:function(t){for(var e=t.length,i=[];e--;)i.push(this.pattern(t[e]));return this.check_validation_and_apply_styles(i)},pattern:function(t){var e=t.getAttribute("type"),i="string"==typeof t.getAttribute("required"),s=t.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(s)&&s.length>0?[t,this.settings.patterns[s],i]:s.length>0?[t,new RegExp(s),i]:this.settings.patterns.hasOwnProperty(e)?[t,this.settings.patterns[e],i]:(s=/.*/,[t,s,i])},check_validation_and_apply_styles:function(e){var i=e.length,s=[];if(0==i)return s;var n=this.S(e[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(n.data(this.attr_name(!0)+"-init")||{};i--;){var a,o,r=e[i][0],l=e[i][2],d=r.value.trim(),c=this.S(r).parent(),h=r.getAttribute(this.add_namespace("data-abide-validator")),u="radio"===r.type,f="checkbox"===r.type,p=this.S('label[for="'+r.getAttribute("id")+'"]'),g=l?r.value.length>0:!0,_=[];if(r.getAttribute(this.add_namespace("data-equalto"))&&(h="equalTo"),a=c.is("label")?c.parent():c,u&&l)_.push(this.valid_radio(r,l));else if(f&&l)_.push(this.valid_checkbox(r,l));else if(h){for(var m=h.split(" "),v=!0,b=!0,x=0;x<m.length;x++)o=this.settings.validators[m[x]].apply(this,[r,l,a]),_.push(o),b=o&&v,v=o;b?(this.S(r).removeAttr(this.invalid_attr),a.removeClass("error"),p.length>0&&this.settings.error_labels&&p.removeClass(this.settings.error_class).removeAttr("role"),t(r).triggerHandler("valid")):(this.S(r).attr(this.invalid_attr,""),a.addClass("error"),p.length>0&&this.settings.error_labels&&p.addClass(this.settings.error_class).attr("role","alert"),t(r).triggerHandler("invalid"))}else if(_.push(e[i][1].test(d)&&g||!l&&r.value.length<1||t(r).attr("disabled")?!0:!1),_=[_.every(function(t){return t})],_[0])this.S(r).removeAttr(this.invalid_attr),r.setAttribute("aria-invalid","false"),r.removeAttribute("aria-describedby"),a.removeClass(this.settings.error_class),p.length>0&&this.settings.error_labels&&p.removeClass(this.settings.error_class).removeAttr("role"),t(r).triggerHandler("valid");else{this.S(r).attr(this.invalid_attr,""),r.setAttribute("aria-invalid","true");var y=a.find("small."+this.settings.error_class,"span."+this.settings.error_class),w=y.length>0?y[0].id:"";w.length>0&&r.setAttribute("aria-describedby",w),a.addClass(this.settings.error_class),p.length>0&&this.settings.error_labels&&p.addClass(this.settings.error_class).attr("role","alert"),t(r).triggerHandler("invalid")}s=s.concat(_)}return s},valid_checkbox:function(e,i){var e=this.S(e),s=e.is(":checked")||!i||e.get(0).getAttribute("disabled");return s?(e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),t(e).triggerHandler("valid")):(e.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),t(e).triggerHandler("invalid")),s
},valid_radio:function(e){for(var i=e.getAttribute("name"),s=this.S(e).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+i+"']"),n=s.length,a=!1,o=!1,r=0;n>r;r++)s[r].getAttribute("disabled")?(o=!0,a=!0):s[r].checked?a=!0:o&&(a=!1);for(var r=0;n>r;r++)a?(this.S(s[r]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),t(s[r]).triggerHandler("valid")):(this.S(s[r]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),t(s[r]).triggerHandler("invalid"));return a},valid_equal:function(t,e,s){var n=i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,a=t.value,o=n===a;return o?(this.S(t).removeAttr(this.invalid_attr),s.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(t).attr(this.invalid_attr,""),s.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),o},valid_oneof:function(t,e,i,s){var t=this.S(t),n=this.S("["+this.add_namespace("data-oneof")+"]"),a=n.filter(":checked").length>0;if(a?t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!s){var o=this;n.each(function(){o.valid_oneof.call(o,this,null,null,!0)})}return a},reflow:function(){var t=this,e=t.S("["+this.attr_name()+"]").attr("novalidate","novalidate");t.S(e).each(function(e,i){t.events(i)})}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,fade_in_duration:150,fade_out_duration:150,show_on:"all",tip_template:function(t,e){return'<span data-selector="'+t+'" id="'+t+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+e+'<span class="nub"></span></span>'}},cache:{},init:function(t,e,i){Foundation.inherit(this,"random_str"),this.bindings(e,i)},should_show:function(e){var i=t.extend({},this.settings,this.data_options(e));return"all"===i.show_on?!0:this.small()&&"small"===i.show_on?!0:this.medium()&&"medium"===i.show_on?!0:this.large()&&"large"===i.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(e){function i(t,e,i){t.timer||(i?(t.timer=null,n.showTip(e)):t.timer=setTimeout(function(){t.timer=null,n.showTip(e)}.bind(t),n.settings.hover_delay))}function s(t,e){t.timer&&(clearTimeout(t.timer),t.timer=null),n.hide(e)}var n=this,a=n.S;n.create(this.S(e)),t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(e){var o=a(this),r=t.extend({},n.settings,n.data_options(o)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&a(e.target).is("a"))return!1;if(/mouse/i.test(e.type)&&n.ie_touch(e))return!1;if(o.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&e.preventDefault(),n.hide(o);else{if(r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type))return;if(!r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&(e.preventDefault(),a(r.tooltip_class+".open").hide(),l=!0,t(".open["+n.attr_name()+"]").length>0)){var d=a(t(".open["+n.attr_name()+"]")[0]);n.hide(d)}/enter|over/i.test(e.type)?i(this,o):"mouseout"===e.type||"mouseleave"===e.type?s(this,o):i(this,o,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(e){return/mouse/i.test(e.type)&&n.ie_touch(e)?!1:void(("touch"!=t(this).data("tooltip-open-event-type")||"mouseleave"!=e.type)&&("mouse"==t(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(e.type)?n.convert_to_touch(t(this)):s(this,t(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(){s(this,a(this))})},ie_touch:function(){return!1},showTip:function(t){var e=this.getTip(t);return this.should_show(t,e)?this.show(t):void 0},getTip:function(e){var i=this.selector(e),s=t.extend({},this.settings,this.data_options(e)),n=null;return i&&(n=this.S('span[data-selector="'+i+'"]'+s.tooltip_class)),"object"==typeof n?n:!1},selector:function(t){var e=t.attr(this.attr_name())||t.attr("data-selector");return"string"!=typeof e&&(e=this.random_str(6),t.attr("data-selector",e).attr("aria-describedby",e)),e},create:function(i){var s=this,n=t.extend({},this.settings,this.data_options(i)),a=this.settings.tip_template;"string"==typeof n.tip_template&&e.hasOwnProperty(n.tip_template)&&(a=e[n.tip_template]);var o=t(a(this.selector(i),t("<div></div>").html(i.attr("title")).html())),r=this.inheritable_classes(i);o.addClass(r).appendTo(n.append_to),Modernizr.touch&&(o.append('<span class="tap-to-close">'+n.touch_close_text+"</span>"),o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(){s.hide(i)})),i.removeAttr("title").attr("title","")},reposition:function(e,i,s){var n,a,o,r,l;i.css("visibility","hidden").show(),n=e.data("width"),a=i.children(".nub"),o=a.outerHeight(),r=a.outerWidth(),i.css(this.small()?{width:"100%"}:{width:n?n:"auto"}),l=function(t,e,i,s,n){return t.css({top:e?e:"auto",bottom:s?s:"auto",left:n?n:"auto",right:i?i:"auto"}).end()};var d=e.offset().top,c=e.offset().left,h=e.outerHeight();if(l(i,d+h+10,"auto","auto",c),this.small())l(i,d+h+10,"auto","auto",12.5,t(this.scope).width()),i.addClass("tip-override"),l(a,-o,"auto","auto",c);else{Foundation.rtl&&(a.addClass("rtl"),c=c+e.outerWidth()-i.outerWidth()),l(i,d+h+10,"auto","auto",c),a.attr("style")&&a.removeAttr("style"),i.removeClass("tip-override");var u=i.outerHeight();s&&s.indexOf("tip-top")>-1?(Foundation.rtl&&a.addClass("rtl"),l(i,d-u,"auto","auto",c).removeClass("tip-override")):s&&s.indexOf("tip-left")>-1?(l(i,d+h/2-u/2,"auto","auto",c-i.outerWidth()-o).removeClass("tip-override"),a.removeClass("rtl")):s&&s.indexOf("tip-right")>-1&&(l(i,d+h/2-u/2,"auto","auto",c+e.outerWidth()+o).removeClass("tip-override"),a.removeClass("rtl"))}i.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(e){var i=t.extend({},this.settings,this.data_options(e)),s=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(i.additional_inheritable_classes),n=e.attr("class"),a=n?t.map(n.split(" "),function(e){return-1!==t.inArray(e,s)?e:void 0}).join(" "):"";return t.trim(a)},convert_to_touch:function(e){var i=this,s=i.getTip(e),n=t.extend({},i.settings,i.data_options(e));0===s.find(".tap-to-close").length&&(s.append('<span class="tap-to-close">'+n.touch_close_text+"</span>"),s.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(){i.hide(e)})),e.data("tooltip-open-event-type","touch")},show:function(t){var e=this.getTip(t);"touch"==t.data("tooltip-open-event-type")&&this.convert_to_touch(t),this.reposition(t,e,t.attr("class")),t.addClass("open"),e.fadeIn(this.settings.fade_in_duration)},hide:function(t){var e=this.getTip(t);e.fadeOut(this.settings.fade_out_duration,function(){e.find(".tap-to-close").remove(),e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),t.removeClass("open")})},off:function(){var e=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(i){t("["+e.attr_name()+"]").eq(i).attr("title",t(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
//# sourceMappingURL=parallax.min.js.map

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.2.0
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * variables
	   */

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = null;

	  // cache document.documentElement
	  var doc = document.documentElement;

	  // form input types
	  var formInputs = ['input', 'select', 'textarea'];

	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  // list of keys for which we change intent even for form inputs
	  var changeIntentMap = [9 // tab
	  ];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch'
	  };

	  // array of all used input types
	  var inputTypes = [];

	  // boolean: true if touch buffer is active
	  var isBuffering = false;

	  // boolean: true if the page is being scrolled
	  var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null
	  };

	  // map of IE 10 pointer events
	  var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'
	  };

	  var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}

	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    setInput();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      doc.addEventListener('pointerdown', updateInput);
	      doc.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      doc.addEventListener('MSPointerDown', updateInput);
	      doc.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      doc.addEventListener('mousedown', updateInput);
	      doc.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        doc.addEventListener('touchstart', touchBuffer);
	        doc.addEventListener('touchend', touchBuffer);
	      }
	    }

	    // mouse wheel
	    doc.addEventListener(detectWheel(), setIntent, supportsPassive ? { passive: true } : false);

	    // keyboard events
	    doc.addEventListener('keydown', updateInput);
	  };

	  // checks conditions before updating new input
	  var updateInput = function updateInput(event) {
	    // only execute if the touch buffer timer isn't running
	    if (!isBuffering) {
	      var eventKey = event.which;
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentInput !== value || currentIntent !== value) {
	        var activeElem = document.activeElement;
	        var activeInput = false;
	        var notFormInput = activeElem && activeElem.nodeName && formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

	        if (notFormInput || changeIntentMap.indexOf(eventKey) !== -1) {
	          activeInput = true;
	        }

	        if (value === 'touch' ||
	        // ignore mouse modifier keys
	        value === 'mouse' ||
	        // don't switch if the current element is a form input
	        value === 'keyboard' && eventKey && activeInput && ignoreMap.indexOf(eventKey) === -1) {
	          // set the current and catch-all variable
	          currentInput = currentIntent = value;

	          setInput();
	        }
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var setInput = function setInput() {
	    doc.setAttribute('data-whatinput', currentInput);
	    doc.setAttribute('data-whatintent', currentInput);

	    if (inputTypes.indexOf(currentInput) === -1) {
	      inputTypes.push(currentInput);
	      doc.className += ' whatinput-types-' + currentInput;
	    }

	    fireFunctions('input');
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    // test to see if `mousemove` happened relative to the screen
	    // to detect scrolling versus mousemove
	    if (mousePos['x'] !== event.screenX || mousePos['y'] !== event.screenY) {
	      isScrolling = false;

	      mousePos['x'] = event.screenX;
	      mousePos['y'] = event.screenY;
	    } else {
	      isScrolling = true;
	    }

	    // only execute if the touch buffer timer isn't running
	    // or scrolling isn't happening
	    if (!isBuffering && !isScrolling) {
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentIntent !== value) {
	        currentIntent = value;

	        doc.setAttribute('data-whatintent', currentIntent);

	        fireFunctions('intent');
	      }
	    }
	  };

	  // buffers touch events because they frequently also fire mouse events
	  var touchBuffer = function touchBuffer(event) {
	    if (event.type === 'touchstart') {
	      isBuffering = false;

	      // set the current input
	      updateInput(event);
	    } else {
	      isBuffering = true;
	    }
	  };

	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].function.call(undefined, currentIntent);
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	  var detectWheel = function detectWheel() {
	    var wheelType = void 0;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'loose'|'strict'
	    // 'strict' (default): returns the same value as the `data-whatinput` attribute
	    // 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'loose' ? currentIntent : currentInput;
	    },

	    // returns array: all the detected input types
	    types: function types() {
	      return inputTypes;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    onChange: function onChange(funct, eventType) {
	      functionList.push({
	        function: funct,
	        type: eventType
	      });
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
'use strict';

// https://github.com/neuedaten/in-viewport-class
// jshint esversion: 6

(function (window, document) {
    var WATCH_CLASS = 'i-v';
    var IN_VIEWPORT_CLASS = 'in-viewport';
    var ONCE_IN_VIEWPORT_CLASS = 'in-viewport-once';
    var WAS_IN_VIEWPORT = 'was-in-viewport';

    var elements = [];

    function hasClass(element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }

    function addClass(element, className) {
        if (element.classList) {
            return element.classList.add(className);
        } else {
            return element.className += ' ' + className;
        }
    }

    function removeClass(element, className) {
        if (element.classList) {
            return element.classList.remove(className);
        } else {
            return element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    function storeElements() {
        elements = document.getElementsByClassName(WATCH_CLASS);
    }

    function update() {
        var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
        var viewportBottom = viewportTop + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        for (var i = 0, len = elements.length; i < len; i += 1) {
            var element = elements[i];

            if (true === isInViewport(element, scrollTop, viewportTop, viewportBottom)) {
                if (!hasClass(element, IN_VIEWPORT_CLASS)) {
                    addClass(element, IN_VIEWPORT_CLASS);

                    if (!hasClass(element, ONCE_IN_VIEWPORT_CLASS)) {
                        addClass(element, ONCE_IN_VIEWPORT_CLASS);
                    }
                }
            } else {
                if (hasClass(element, IN_VIEWPORT_CLASS)) {
                    removeClass(element, IN_VIEWPORT_CLASS);

                    if (!hasClass(element, WAS_IN_VIEWPORT)) {
                        addClass(element, WAS_IN_VIEWPORT);
                    }
                }
            }
        }
    }

    function isInViewport(element, scrollTop, viewportTop, viewportBottom) {
        var elementRect = element.getBoundingClientRect();
        var elementTop = elementRect.top + scrollTop;
        var elementHeight = element.offsetHeight || element.clientHeight
        var elementBottom = elementTop + elementHeight;

        if (elementBottom >= viewportTop && elementTop < viewportBottom) return true;
        return false;
    }

    document.onreadystatechange = function () {
        if (document.readyState === 'interactive') {
            storeElements();

            window.addEventListener('scroll', update);
            window.addEventListener('resize', update);

            update();
        }
    };
})(window, document);
//# sourceMappingURL=in-viewport-class.js.map

!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(O=this,O.version="3.4.0",O.tools=new E,O.isSupported()?(O.tools.extend(O.defaults,n||{}),O.defaults.container=t(O.defaults),O.store={elements:{},containers:[]},O.sequences={},O.history=[],O.uid=0,O.initialized=!1):"undefined"!=typeof console&&null!==console,O)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(O.tools.isNode(e.container))return e.container}return O.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):O.tools.isNode(e)?[e]:O.tools.isNodeList(e)?Array.prototype.slice.call(e):Array.isArray(e)?e.filter(O.tools.isNode):[]}function i(){return++O.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=O.tools.extendClone(e.config,t):e.config=O.tools.extendClone(O.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&O.store.containers.indexOf(t)===-1&&O.store.containers.push(e.config.container),O.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};O.history.push(i)}function f(){if(O.isSupported()){y();for(var e=0;e<O.store.containers.length;e++)O.store.containers[e].addEventListener("scroll",d),O.store.containers[e].addEventListener("resize",d);O.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),O.initialized=!0)}return O}function d(){A(y)}function u(){var e,t,n,i;O.tools.forOwn(O.sequences,function(o){i=O.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],t=O.store.elements[n],q(t)&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),O.tools.forOwn(O.store.elements,function(n){t=O.store.elements[n],e=w(t),g(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),p("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),p("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=O.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,d()},Math.abs(o.interval)+i-n)}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){if(e.sequence){var t=O.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!O.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){var t=O.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=x(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function x(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:i,width:o}}function q(e){function t(){var t=c+a*s,n=f+l*s,i=d-a*s,y=u-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return t<g&&i>m&&n<w&&y>p}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=x(e.domEl),o=b(e.config.container),r=h(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,d=c+a,u=f+l;return t()||n()}function E(){}var O,A;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,d){var u,y,m,p,g,w;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),u=t(s),y=n(e,u),!y.length)return O;a&&"number"==typeof a&&(w=i(),g=O.sequences[w]={id:w,interval:a,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=O.store.elements[p]:(m={id:i(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),o(m,s,u),r(m),l(m),O.tools.isMobile()&&!m.config.mobile||!O.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!d&&O.isSupported()&&(c(e,s,a),O.initTimeout&&window.clearTimeout(O.initTimeout),O.initTimeout=window.setTimeout(f,0)),O},e.prototype.sync=function(){if(O.history.length&&O.isSupported()){for(var e=0;e<O.history.length;e++){var t=O.history[e];O.reveal(t.target,t.config,t.interval,!0)}f()}return O},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

////////////////////////////////////////////////////////////////////// Framework
//------------------------------------------------------------------------------
// Get a single DOM element by its id or multiple elements by class name
function E(id) {
  return document.getElementById(id);
}
function cE(className) {
  return document.getElementsByClassName(className);
}
function tE(tagName) {
  return document.getElementsByTagName(tagName);
}
function qE(tagNames) {
  return document.querySelectorAll(tagNames);
}
// Dimensions of the inner window (width and height)
var w = {};
function getWindowDimensions() {
  w['Height'] = window.innerHeight;w['Width'] = window.innerWidth;
}
// Add and Remove a class from an item
function addC(item, className) {
  item.classList.add(className);
}
function remC(item, className) {
  item.classList.remove(className);
}
// Adds and Removes a class with a time-delay
function delayAddC(item, className, delay) {
  var timeout = window.setTimeout(function () {
    addC(item, className);
  }, delay);
}
function delayRemC(item, className, delay) {
  var timeout = window.setTimeout(function () {
    remC(item, className);
  }, delay);
}

// Get attributes prefixed with 'data'
function gA(item, att) {
  return item.getAttribute('data-' + att + '');
}
function sA(item, att, set) {
  item.setAttribute('data-' + att + '', set);
}

// Get the time from a timestamp in "22 seconds ago" format
function timeago(timestamp) {
  var now = new Date();
  var secondsPast = (now.getTime() - timestamp.getTime()) / 1000;
  if (secondsPast === 1) {
    return Math.floor(parseInt(secondsPast)) + ' second ago';
  }
  if (secondsPast < 60) {
    return Math.floor(parseInt(secondsPast)) + ' seconds ago';
  }
  if (secondsPast === 60) {
    return Math.floor(parseInt(secondsPast / 60)) + ' minute ago';
  }
  if (secondsPast < 3600) {
    return Math.floor(parseInt(secondsPast / 60)) + ' minutes ago';
  }
  if (secondsPast === 3600) {
    return Math.floor(parseInt(secondsPast / 3600)) + ' hour ago';
  }
  if (secondsPast < 86400) {
    return Math.floor(parseInt(secondsPast / 3600)) + ' hours ago';
  }
  if (secondsPast < 172800) {
    return Math.floor(parseInt(secondsPast / 86400)) + ' day ago';
  }
  if (secondsPast > 86400) {
    return Math.floor(parseInt(secondsPast / 86400)) + ' days ago';
  }
}

// Throttle function pulled from Lodash
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }return result;
  };
}

// Check when a CSS transition on an element is completed
function checkTransitionEnd(item, next) {
  function whichTransitionEndEvent() {
    var t,
        el = document.createElement('fakeelement');
    var transitions = {
      'transition': 'transitionend', 'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend', 'WebkitTransition': 'webkitTransitionEnd'
    };
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }
  var transitionEndEvent = whichTransitionEndEvent();
  function transitionHandler() {
    item.removeEventListener(transitionEndEvent, transitionHandler);
    next();
  }
  transitionEndEvent && item.addEventListener(transitionEndEvent, transitionHandler, false);
}

// Adaptation of: https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
// function isElementInViewport (el, elH) {
//   if (typeof jQuery === 'function' && el instanceof jQuery) { el = el[0] }
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 - elH &&
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight)
//   )
// }

function isElementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth;
}

// Truncate string to a defined length
function limitString(string, num) {
  var arr = string.split('');
  var new_arr = arr.slice(0, num);
  if (arr.length > num) {
    new_arr.push('...');
  }
  return new_arr.join('');
}

// Find the closest ancestor of an element
function findAncestor(el, sel) {
  while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel)) {}
  return el;
}

////////////////////////////////////////////////////////////////////// Functions
//------------------------------------------------------------------------------
function githubCommitSliderINIT() {
  var slider = cE('slider-container')[0];
  var wrapper = cE('slider-wrapper')[0];

  wrapper.onclick = function () {
    $('html, body').animate({
      scrollTop: $('#roadmap').offset().top
    }, 1000);
  };

  if (slider) {
    var track = cE('slider-track')[0];
    var preloader = cE('preloader')[0];
    var networkErrorIND = cE('network-error')[0];
    var themeUri = gA(E('landing'), 'theme-uri');
    var all_commits_general = [];
    var all_commits_specific = [];
    engage();
  }

  function getSlideHeight(slide, next) {
    var height = 0;
    addC(slide, 'height-calculating');
    track.appendChild(slide);
    height = slide.clientHeight;
    track.removeChild(slide);
    remC(slide, 'height-calculating');
    next(height);
  }

  function buildSlide(commitParent, next) {
    var commit = commitParent.commit;
    var filename = commitParent.files[0].filename.split('/')[0];
    var message = commit.message;
    var author = commitParent.author ? commitParent.author.login : commit.author.name;
    var date = new Date(commit.committer.date);
    var html = '\n      <div class="commit">\n        <div class="commit-content">\n          <div class="commit-meta">\n            <div class="commit-date">' + timeago(date) + '</div>\n            <div class="commit-author"><span>Commit by</span> <span>' + author + '</span></div>\n          </div>\n          <div class="commit-info">\n            <div class="panel-left">\n              <img src="' + themeUri + '/assets/img/icons/folder_icon_bluegray.svg" />\n            </div>\n            <div class="panel-right">\n              <span class="commit-branch">' + filename + '</span>\n              <div class="commit-message">' + message + '</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
    var div = document.createElement('div');
    div.innerHTML = html.trim();
    next(div.firstChild);
  }

  function animateSlider(commits) {
    var slides = [];
    var interval = null;
    for (var i = 0; i < 4; i++) {
      buildSlide(commits[i], function (slide) {
        slides.push(slide);
      });
    }
    function insertSlide() {
      var slide = slides[0];
      getSlideHeight(slide, function (height) {
        slide.style.marginTop = '-' + height + 'px';
        track.insertBefore(slide, track.firstElementChild);
        var timeout1 = setTimeout(function () {
          addC(slide, 'animating');
          checkTransitionEnd(slide, function () {
            var lastChild = track.lastElementChild;
            slides.splice(0, 1);
            slides.push(lastChild);
            remC(slide, 'animating');
            slide.style.marginTop = '0px';
            track.removeChild(lastChild);
            clearTimeout(timeout1);
            var timeout2 = setTimeout(function () {
              insertSlide();
              clearTimeout(timeout2);
            }, 1900);
          });
        }, 100);
      });
    }insertSlide();
  }

  function buildSlider(commits) {
    for (var i = 1; i < commits.length; i++) {
      buildSlide(commits[i], function (slide) {
        track.appendChild(slide);
      });
    }
    remC(preloader, 'active');
    animateSlider(commits);
  }

  function engage() {
    $.ajax({
      type: 'GET',
      url: '/material/views/aion/_ajax/githubCommits.php',
      success: function success(data) {
        if (data.payload) {
          buildSlider(data.payload);
        } else {
          addC(networkErrorIND, 'active');
        }
      },
      error: function error(data) {
        addC(networkErrorIND, 'active');
      }
    });
  }
}

function gitHubRepos() {
  var container = E('github-repos');

  if (container) {
    var tilesContainer = E('repo-tiles');
    var preloader = container.getElementsByClassName('preloader')[0];
    var networkErrorIND = container.getElementsByClassName('network-error')[0];
    var repoNumber = E('repo-number');
    var themeUri = gA(E('landing'), 'theme-uri');
    engage();
  }

  function buildGrid(repos) {
    var sortedRepos = repos.sort(compare);
    repoNumber.innerHTML = repos.length;

    function compare(a, b) {
      return parseInt(b.stargazers_count) - parseInt(a.stargazers_count);
    }

    for (var i = 0; i < 9; i++) {
      var repo = sortedRepos[i];
      var updated_at = new Date(repo.updated_at);
      if (repo.description) {
        var description = repo.description.length > 34 ? repo.description.substring(0, 35) + '...' : repo.description;
      } else {
        var description = '';
      }
      var data = {
        name: repo.name || '',
        description: description,
        stargazers_count: repo.stargazers_count || '0',
        forks_count: repo.forks_count || '0',
        license: repo.license ? repo.license.key : 'unlisted'
      };
      var html = '\n        <div class="repo-content">\n          <div class="title">' + data.name + '</div>\n          <div class="description"> ' + data.description + ' </div>\n          <div class="info">\n            <div class="starred">\n              <img src="' + themeUri + '/assets/img/icons/github_star_icon_turquoise.svg" />\n              <span>' + data.stargazers_count + '</span>\n            </div>\n            <div class="forked">\n              <img src="' + themeUri + '/assets/img/icons/github_forked_icon_turquoise.svg" />\n              <span>' + data.forks_count + '</span>\n            </div>\n            <div class="license">\n              <img src="' + themeUri + '/assets/img/icons/github_license_icon_turquoise.svg" />\n              <span>' + data.license + '</span>\n            </div>\n          </div>\n          <div class="updated">Updated ' + timeago(updated_at) + '</div>\n        </div>\n        <div class="repo-content-hidden">\n          <div class="title">' + data.name + '</div>\n          <div class="description"> ' + data.description + ' </div>\n          <div class="info">\n            <div class="starred">\n              <img src="' + themeUri + '/assets/img/icons/github_star_icon_turquoise.svg" />\n              <span>' + data.stargazers_count + '</span>\n            </div>\n            <div class="forked">\n              <img src="' + themeUri + '/assets/img/icons/github_forked_icon_turquoise.svg" />\n              <span>' + data.forks_count + '</span>\n            </div>\n            <div class="license">\n              <img src="' + themeUri + '/assets/img/icons/github_license_icon_turquoise.svg" />\n              <span>' + data.license + '</span>\n            </div>\n          </div>\n          <div class="updated">Updated ' + timeago(updated_at) + '</div>\n        </div>\n      ';
      var link = document.createElement('a');
      link.href = repo.html_url;
      link.setAttribute('target', '_blank');
      addC(link, 'repo');
      link.innerHTML = html.trim();
      tilesContainer.appendChild(link);
    }
    remC(preloader, 'active');
  }

  function engage() {
    $.ajax({
      type: 'GET',
      url: '/material/views/aion/_ajax/githubRepos.php',
      success: function success(data) {
        if (data.payload) {
          buildGrid(data.payload);
        } else {
          addC(networkErrorIND, 'active');
        }
      },
      error: function error(data) {
        addC(networkErrorIND, 'active');
      }
    });
  }
}

function forumSlider() {
  var container = E('forum-slider');

  if (container) {
    var track = E('forum-slider-track');
    var networkErrorIND = container.getElementsByClassName('network-error')[0];
    var preloader = container.getElementsByClassName('preloader')[0];
    engage();
  }

  function buildSlider(posts) {
    // Mining - mining - #8C6238
    // Development + Technical Discussion - dev_tech_discuss - #9EB83B
    // Support - support - #ED207B
    // General - general - #808281
    // Education - education - #49ABE1
    // Token Resale Schedule - token_resale_schedule - #52B44C
    // Market - market - #EE9329
    // Foundation - foundation - #49ABE1
    // Site Feedback - site_feedback - #B2B5B4
    // Community Collaborations - community_collaborations - #61318F
    // Economics - economics - #FAD520
    // Announcements - announcemenets - #808281
    // Uncategorized - uncategorized - #A89265

    if (posts.length > 10) {
      var postNum = 10;
    } else {
      var postNum = posts.length;
    }

    for (var i = 0; i < postNum; i++) {
      var post = posts[i];
      var created_at = new Date(post.bumped_at);
      var data = {
        title: limitString(post.title, 45) || '',
        category: post.category
      };
      if (!post.pinned) {
        var title = data.title;
        var html = '\n          <div class="posted">' + timeago(created_at) + '</div>\n          <div class="title">' + (title.length > 34 ? data.title.substring(0, 35) + '...' : data.title) + '</div>\n          <div class="category ' + data.category + '"></div>\n          <div class="entry-content">\n            <div class="posted">' + timeago(created_at) + '</div>\n            <div class="title">' + (title.length > 34 ? data.title.substring(0, 35) + '...' : data.title) + '</div>\n            <div class="category ' + data.category + '"></div>\n          </div>\n        ';
        var link = document.createElement('a');
        link.href = 'https://forum.aion.network/t/' + post.slug;
        link.setAttribute('target', '_blank');
        addC(link, 'forum-entry');
        link.innerHTML = html.trim();
        track.appendChild(link);
      }
    }

    $('#forum-slider-track').slick({
      centerMode: true,
      arrows: false,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      infinite: true,
      slidesToShow: 5,
      cssEase: 'linear',
      responsive: [{ breakpoint: 1025, settings: { slidesToShow: 4 } }, { breakpoint: 850, settings: { slidesToShow: 3 } }, { breakpoint: 376, settings: { slidesToShow: 1 } }]
    });

    remC(preloader, 'active');
  }

  function engage() {
    $.ajax({
      type: 'GET',
      url: '/material/views/aion/_ajax/discourseForum.php',
      success: function success(data) {
        if (data.payload) {
          buildSlider(data.payload);
        } else {
          addC(networkErrorIND, 'active');
        }
      },
      error: function error(data) {
        addC(networkErrorIND, 'active');
      }
    });
  }
}

function panelSliderINIT() {
  var container = cE('panel-slider')[0];
  var tabContainer = cE('panel-tabs')[0];
  var tab = $('.tab-hover');
  var buttons = $('.tab');
  if (container) {
    var panelNum = parseInt(gA(container, 'panel-count'));
    engage();
  }

  function setTabDimensions(button) {
    tab.width(button.outerWidth() + 3);
    tab.height(button.outerHeight());
  }setTabDimensions(buttons.first());

  function animButton(button) {
    var buttonPos = button.position().top + 15;
    tab.animate({ top: buttonPos }, 250);
  }

  function engage() {
    buttons.click(function () {
      var button = $(this);
      setTabDimensions(button);
      animButton(button);
    });

    $('.panels').slick({
      arrows: false,
      fade: true,
      draggable: false,
      speed: 600,
      asNavFor: '.panel-tabs',
      adaptiveHeight: true
    });

    $('.panel-tabs').slick({
      asNavFor: '.panels',
      arrows: false,
      slidesToShow: panelNum,
      vertical: true,
      focusOnSelect: true,
      draggable: false,
      responsive: [{
        breakpoint: 1025,
        settings: {
          vertical: false,
          variableWidth: true
        }
      }]
    });
  }
}

var positionLines = function positionLines() {
  var content = E('roadmap');
  var circuit = E('roadmap-img');
  var circuitTop = E('roadmap-img-top');
  var circuitTopRect = circuitTop.getBoundingClientRect();
  var circuitTopRectTop = circuitTopRect.top;
  var lists = cE('parent-list');
  var lines = cE('roadmap-line');
  var roadmapContent = E('roadmap-content');
  var roadmapCurve = content.getElementsByClassName('curve')[0];
  var connectingLines = cE('parent-line-connector');
  var calc = 0;
  var scrollY = _typeof(window.scrollY) === undefined ? window.pageYOffset : window.scrollY;

  circuit.setAttribute('viewBox', '0, 0, ' + 1160 + ', ' + (circuitTopRect.height + roadmapContent.clientHeight) + '');

  for (var i = 0; i < 4; i++) {
    var list = lists[i];
    if (list) {
      var listRect = lists[i].getBoundingClientRect();
      var line = lines[i];
      var listTop = listRect.top;
      if (i === 0) {
        calc = listTop + scrollY - (circuitTopRectTop + scrollY) - 10;
      } else if (i === 1) {
        calc = listTop + scrollY - (circuitTopRectTop + scrollY) - 35;
      } else if (i === 2) {
        calc = listTop + scrollY - (circuitTopRectTop + scrollY) - 90;
      } else {
        calc = listTop + scrollY - (circuitTopRectTop + scrollY) - 100;
      }
      line.setAttribute('y2', Math.floor(calc));
    }
  }
};

var repositionLines = function repositionLines() {
  var roadmapContent = E('roadmap-content');
  var content = E('roadmap');
  var circuitTop = E('roadmap-img-top');
  var circuitTopRect = circuitTop.getBoundingClientRect();
  var roadmapContent = E('roadmap-content');
};

function roadmapModalINT() {
  var body = tE('body')[0];
  var items = qE('.phase-item-heading.toggleable');
  var modal = null;
  var closeB = null;

  function closeModal() {
    remC(modal, 'open');
    body.style.overflowY = '';
    modal.removeEventListener('click', closeModal, false);
    closeB.removeEventListener('click', closeModal, false);
  }

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.onclick = function () {
      modal = this.previousElementSibling;
      closeB = modal.getElementsByClassName('modal-close-button')[0];
      addC(modal, 'open');
      body.style.overflowY = 'hidden';
      modal.addEventListener('click', closeModal, false);
      closeB.addEventListener('click', closeModal, false);
    };
  }
}

function faqToggleINT() {
  var items = cE('faq-item toggleable');

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var title = item.firstElementChild;
    title.onclick = function () {
      var content = this.parentNode.getElementsByClassName('faq-item-content-inner')[0];
      var parent = content.parentNode;
      var contentHeight = content.clientHeight;
      if (!parent.classList.contains('open')) {
        parent.style.height = contentHeight + 'px';
        checkTransitionEnd(parent, function () {
          addC(parent, 'open');
        });
      } else {
        parent.style.height = 0;
        remC(parent, 'open');
      }
    };
  }
}

function principlesSliderINIT() {
  var container = cE('slider')[0];
  var panelNum = parseInt(gA(container, 'slide-count'));
  $('.slider').slick({
    arrows: false,
    draggable: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slider-tabs'
  });

  $('.slider-tabs').slick({
    asNavFor: '.slider',
    arrows: false,
    slidesToShow: panelNum,
    focusOnSelect: true,
    draggable: false
  });
}

function interviewSliderINIT() {
  var container = cE('slider')[0];

  $('.interviews-slider').slick({
    arrows: false,
    draggable: false,
    slidesToShow: 1,
    dots: true
  });
}

function headerANIM() {
  var header = cE('header')[0];
  var scrollTop = 0;

  var handleScroll = function handleScroll() {
    scrollTop = $(this).scrollTop();
    if (scrollTop > 75) {
      addC(header, 'scrolled');
    } else if (scrollTop <= 75) {
      remC(header, 'scrolled');
    }
  };

  $(window).on('scroll', throttle(handleScroll, 100));
}

function menuINT() {
  var menu = cE('site-menu-container')[0];
  var nav = cE('nav')[0];
  var menuCols = cE('menu-col');
  var num = 0;

  $('.menu-open-button').click(function () {
    addC(menu, 'active');
    addC(nav, 'active');
    var interval = setInterval(function () {
      if (num !== menuCols.length) {
        addC(menuCols[num], 'active');
        num++;
      } else {
        num = 0;
        clearInterval(interval);
      }
    }, 100);
  });

  $('.menu-close-button').click(function () {
    remC(menu, 'active');
    remC(nav, 'active');
    for (var i = 0; i < menuCols.length; i++) {
      remC(menuCols[i], 'active');
    }
  });
}

function scrollToMailFormINT() {
  $('.scrollToRegistration').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#ambassador-program').offset().top
    }, 1000);
  });
}

function videoINT() {
  var body = tE('body')[0];
  var videos = cE('video-item');
  var modalContainer = cE('modal-container')[0];
  var modal = cE('modal')[0];
  var closeB = cE('modal-close-button')[0];

  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    video.onclick = function () {
      var videoID = gA(this, 'video-id');
      var videoType = gA(this, 'video-type');
      if (videoType === 'youtube') {
        var html = '\n          <div class="videoWrapper playing">\n            <iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n          </div>\n        ';
      } else if (videoType === 'vimeo') {
        var html = '\n          <div class="videoWrapper playing">\n            <iframe src="https://player.vimeo.com/video/' + videoID + '?color=18f5a8&title=0&byline=0&portrait=0&autoplay=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          </div>\n        ';
      }
      body.style.overflowY = 'hidden';
      addC(modalContainer, 'open');
      modal.innerHTML = html;
    };
  }

  closeB.onclick = function () {
    body.style.overflowY = '';
    remC(modalContainer, 'open');
    modal.innerHTML = '';
  };
}

function videoOverlayHide() {
  var wrapper = cE('videoWrapper')[0];
  var thumb = cE('video-thumb')[0];

  if (thumb) {
    thumb.onclick = function () {
      var iframe = this.nextElementSibling;
      iframe.src += '?autoplay=1';
      addC(wrapper, 'playing');
    };
  }
}

function roadmapScrollReveal() {
  // sr.reveal('.phase-item-heading-text', {
  //   duration: 1500,
  //   viewOffset: { bottom: 75 }
  // });
  // sr.reveal('.list-heading', {
  //   duration: 1500,
  //   viewOffset: { bottom: 75 }
  // });
}

function mailchimpFormINT() {
  var stayInformedForm = $('#mc-stay-informed-form');
  var roadmapSubscribeForm = $('#mc-roadmap-subscribe-form');
  var bountySubscribeForm = $('#mc-bounty-subscribe-form');

  var timer = null;

  function resetButtons(buttons, subscribeB) {
    timer = setTimeout(function () {
      for (var i = 0; i < buttons.length; i++) {
        remC(buttons[i], 'active');
      }
      addC(subscribeB, 'active');
    }, 3000);
  }

  function handleResponse(form, response) {
    console.log(response);
    var buttons = form[0].getElementsByClassName('form-button');
    var subscribeB = form[0].getElementsByClassName('subscribeB')[0];
    var errorB = form[0].getElementsByClassName('errorB')[0];
    var successB = form[0].getElementsByClassName('successB')[0];
    var status = response.result;
    form.find('.response').hide();
    if (status === 'error') {
      var container = form.find('#mce-error-response');
      if (response.msg === '0 - Please enter a value') {
        container.html('This field cannot be empty, please fill it in.');
      } else {
        container.html(response.msg);
      }
      remC(subscribeB, 'active');
      addC(errorB, 'active');
      resetButtons(buttons, subscribeB);
      container.show();
    } else if (status === 'success') {
      var container = form.find('#mce-success-response');
      container.html(response.msg);
      container.show();
      remC(subscribeB, 'active');
      addC(successB, 'active');
      resetButtons(buttons, subscribeB);
    }
  }

  if (stayInformedForm) {
    stayInformedForm.ajaxChimp({
      callback: function callback(response) {
        handleResponse(stayInformedForm, response);
      }
    });
  }

  if (roadmapSubscribeForm) {
    roadmapSubscribeForm.ajaxChimp({
      callback: function callback(response) {
        handleResponse(roadmapSubscribeForm, response);
      }
    });
  }

  if (bountySubscribeForm) {
    bountySubscribeForm.ajaxChimp({
      callback: function callback(response) {
        handleResponse(bountySubscribeForm, response);
      }
    });
  }
}

function modalINT() {
  var body = tE('body')[0];
  var modals = cE('modal-container');
  if (modals.length > 0) {
    for (var i = 0; i < modals.length; i++) {
      var modal = modals[i];
      modal.onclick = function () {
        remC(this, 'open');
        body.style.overflowY = '';
        this.lastElementChild.innerHTML = '';
      };
    }
  }
}

function scrollANIM() {
  setTimeout(function () {
    var hash = window.location.hash;
    var offset = $(hash).offset();
    if (offset) {
      if (hash) {
        $('html, body').animate({ scrollTop: offset.top - 50 }, 1000);
      } else {
        return false;
      }
    }
  });
}

function notificationBarINT() {
  var body = tE('body')[0];
  var closeB = E('notification-closeB');

  if (closeB) {
    closeB.onclick = function () {
      remC(body, 'notification-active');
    };
  }
}

function blobANIM(page) {
  var paths = cE('path');

  function toggleAnimations(animations) {
    setInterval(function () {
      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var tag = null;
        Object.keys(animations).map(function (key) {
          if (path.parentNode.classList.contains('in-viewport')) {
            tag = path.id.split('__')[1];
            animations[tag].play();
          } else {
            tag = path.id.split('__')[1];
            animations[tag].pause();
          }
        });
      }
    }, 750);
  }

  if (page.contains('template-home')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M1301.34,750.033c2.442-231.034,4.884-402.069,7.326-633.104c1.551-146.737-219.62,20.332-258.935,50.542c-54.554,41.919-122.542-15.196-194.374-14.493c-81.109,0.794-155.368,11.875-235.455,33.313c-63.784,17.074-155.695,66.869-223.686,52.464c-76.554-16.22-87.546,36.485-158.873,76.439c-32.781,18.363-62.414,42.688-100.929,45.315C118.664,361.721-2.715,360.915,2,392.693L1301.34,750.033z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var roadmapGreen = anime({
      targets: '#path__roadmap-green',
      d: 'M0,427.3c192.628-26.747,269.087-225.564,425.243-313.256c93.67-52.603,191.29-35.291,288.657-2.617c68.659,23.04,145.321,51.231,217.031,22.632c65.777-26.233,112.729-75.957,178.979-103.068c226.432-92.663,188.113,121.079,188.306,252.094c0.182,124.001,0.363,248.003,0.545,372.004L-1,655.281L0,427.3z',
      duration: 8000, loop: true, direction: 'alternate', easing: 'linear'
    });
    var roadmapViolet = anime({
      targets: '#path__roadmap-violet',
      d: 'M-3.84,318c104.16,34.763,154.934-164.414,244.981-193.813c121.833-39.777,224.891,47.822,344.195,22.19c112.239-24.114,193.028-105.55,314.518-90.509c131.309,16.256,266.113,95.154,397.865,36.792c3.572,180.415,0.045,361.154-1.109,541.589L-4,634.509L-3.84,318z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var roadmapWhite = anime({
      targets: '#path__roadmap-white',
      d: 'M180.517,329.491c71.222-24.3,171.665-105.271,235.344-81.87c98.387,36.159,164.718,12.834,250.083-6.864c75.432-17.406,100.196,20.619,174.44-5.775c79.781-28.363,164.435,46.035,247.986,80.297c67.661,27.749,91.777-97.978,159.067-74.103c79.086,28.061,61.175,164.466,61.43,240.909c0.272,81.738-11.406,162.48-11.137,244.22L2.968,725.938c0.515-71.027-48.927-292.054-48.411-363.08C-44.619,249.299,78.27,364.262,180.517,329.491C288.02,292.813,138.761,343.689,180.517,329.491z',
      duration: 9000, loop: true, direction: 'alternate', easing: 'linear'
    });
    var stayInformed = anime({
      targets: '#path__stay-informed',
      d: 'M161.06,549.44c74.35-77.46,38.82-100.69,127.29-169.001c73.47-56.709,166.06-46.52,180-180c5.2-49.83,70-21.74,95.78-70.22C587,87.16,579.615,63.99,612.51,43.08c50.221-0.67,55.105-6.09,83.63,13.1c13.181,32.41,0.801,530.61,0.94,625L76,682c17.43-25,2.24-55.15,30.75-67.69C153,594,119.89,592.34,161.06,549.44z',
      duration: 7500, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = {
      'landing': landing,
      'roadmap-green': roadmapGreen,
      'roadmap-violet': roadmapViolet,
      'roadmap-white': roadmapWhite,
      'stay-informed': stayInformed
    };
    toggleAnimations(animations);
  } else if (page.contains('template-careers')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M180,172.637c166.44-32.851,302.379-84.364,462.927-73.296c163.441,11.266,196.154-25.063,351.553-53.364c73.87-13.447,298.274-9.815,305.35,21.555c15.806,70.079,0.126,143.677,0.189,215.517l-1299.2-1c-12.381-96.598,40.234-72.596,128.38-97.571',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var principles = anime({
      targets: '#path__principles',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = {
      'landing': landing,
      'principles': principles
    };
    toggleAnimations(animations);
  } else if (page.contains('template-developers')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M477.58,271.2c29.41,3.54,119.16,62.37,148.14,56.21c16.28-3.46,31.221-11.51,45.28-20.46c91.68-58.54,41.09-106.86,128.471-171.63c106-78.53,361.5-4.89,490.84,20.89l-4,276.49L0,432.73c0,0,35.35-3.16,47.59-3.271c17.82-0.167,35.604-1.167,53.35-3c34.984-3.55,69.571-30.288,103.33-40.13C315.42,353.939,362.63,257.37,477.58,271.2z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var how = anime({
      targets: '#path__how',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var tools = anime({
      targets: '#path__tools',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var bounty = anime({
      targets: '#path__bounty',
      d: 'M950.26,67.59V0H0l0.05,686.08h89.62c0,0,5-171.66,62.68-207.24c87.36-70.08,103-49.33,237.72-63.29c63.8-6.609,54.79-124,115.399-158.439c68.25-38.82,94.66-52.92,126-117.3C689.62,20.38,849.77,3,950.26,67.59z',
      duration: 8000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = {
      'landing': landing,
      'how': how,
      'tools': tools,
      'bounty': bounty
    };
    toggleAnimations(animations);
  } else if (page.contains('template-team')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M477.58,271.2c29.41,3.54,119.16,62.37,148.14,56.21c16.28-3.46,31.221-11.51,45.28-20.46c91.68-58.54,41.09-106.86,128.471-171.63c106-78.53,361.5-4.89,490.84,20.89l-4,276.49L0,432.73c0,0,35.35-3.16,47.59-3.271c17.82-0.167,35.604-1.167,53.35-3c34.984-3.55,69.571-30.288,103.33-40.13C315.42,353.939,362.63,257.37,477.58,271.2z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var advisors = anime({
      targets: '#path__advisors',
      d: 'M10.88,190.61c5.112-20.12,20.3-45,55.48-79c32.49-31.43,75.92-50,120.44-57.8c23.45-4.1,57.58,4.641,81.08,8.47c39.62,6.471,85.311,26.91,121.16,45c147.36,74.33,174.64,14.029,331.84-36.29c113-18.249,219.851,86.39,271,84c60.291-2.83,130.4-62.31,183.28-33.21c39.39,21.681,71.14-11.06,97.72,25.21c26.58,36.271,23.59,183.11,23.59,183.11l0.88,10.46L0,340.98c0,0,0.36-35.09,1.28-60.8C2.35,250.131,4.78,220.07,10.88,190.61z',
      duration: 8000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = {
      'landing': landing,
      'advisors': advisors
    };
    toggleAnimations(animations);
  } else if (page.contains('template-community')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M10.88,190.61c5.112-20.12,20.3-45,55.48-79c32.49-31.43,75.92-50,120.44-57.8c23.45-4.1,57.58,4.641,81.08,8.47c39.62,6.471,85.311,26.91,121.16,45c147.36,74.33,174.64,14.029,331.84-36.29c113-18.249,219.851,86.39,271,84c60.291-2.83,130.4-62.31,183.28-33.21c39.39,21.681,71.14-11.06,97.72,25.21c26.58,36.271,23.59,183.11,23.59,183.11l0.88,10.46L0,340.98c0,0,0.36-35.09,1.28-60.8C2.35,250.131,4.78,220.07,10.88,190.61z',
      duration: 8000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var calendar = anime({
      targets: '#path__calendar',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var stayInformed = anime({
      targets: '#path__stay-informed',
      d: 'M161.06,549.44c74.35-77.46,38.82-100.69,127.29-169.001c73.47-56.709,166.06-46.52,180-180c5.2-49.83,70-21.74,95.78-70.22C587,87.16,579.615,63.99,612.51,43.08c50.221-0.67,55.105-6.09,83.63,13.1c13.181,32.41,0.801,530.61,0.94,625L76,682c17.43-25,2.24-55.15,30.75-67.69C153,594,119.89,592.34,161.06,549.44z',
      duration: 7500, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var platty = anime({
      targets: '#path__platty',
      d: 'M-7.039,568.633c20.187,0.536,37.829-72.332,51.137-87.776c25.863-30.058,102.191-16.603,130.204-46.476c48.486-51.592,148.241-32.778,118.28-144.098c-10.896-40.486,2.066-48.737,46.732-69.69c38.887-18.241-22.185-102.984,3.404-139.55c26.847-38.364,95.791-4.675,143.044-20.752c40.317-13.717,99.371,24.678,121.908,69.188c0.123-14.346,0.245-98.692,0.368-113.038c-205.026-0.027-410.052-0.054-615.078-0.082C-7.039,200.45-7.039,384.542-7.039,568.633z',
      duration: 8000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = {
      'landing': landing,
      'calendar': calendar,
      'stay-informed': stayInformed,
      'platty': platty
    };
    toggleAnimations(animations);
  } else if (page.contains('template-about')) {
    var landingBlue = anime({
      targets: '#path__landing-blue',
      d: 'M65.78,42.26c82.57-72.646,169.363,38.286,270.476,3.284c61.59-21.321,128.934-24.432,188.837,14.815C578.179,95.14,622.85,96.104,687,79c70.7-19.25,116.1-37.05,192.588-26.025c76.185,10.981,130.502,1.732,199.232-19.595c80.938-25.116,233.985-2.922,222.109,101.34L-0.24,134c-1.54-30,16.18-44.28,36.02-61.74C61.58,49.56,45.94,59.72,65.78,42.26z',
      duration: 5000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var landingWhite = anime({
      targets: '#path__landing-white',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'linear'
    });
    var linksGreen = anime({
      targets: '#path__links-green',
      d: 'M0,427.3c192.628-26.747,269.087-225.564,425.243-313.256c93.67-52.603,191.29-35.291,288.657-2.617c68.659,23.04,145.321,51.231,217.031,22.632c65.777-26.233,112.729-75.957,178.979-103.068c226.432-92.663,188.113,121.079,188.306,252.094c0.182,124.001,0.363,248.003,0.545,372.004L-1,655.281L0,427.3z',
      duration: 8000, loop: true, direction: 'alternate', easing: 'linear'
    });
    var linksViolet = anime({
      targets: '#path__links-violet',
      d: 'M-3.84,318c104.16,34.763,154.934-164.414,244.981-193.813c121.833-39.777,224.891,47.822,344.195,22.19c112.239-24.114,193.028-105.55,314.518-90.509c131.309,16.256,266.113,95.154,397.865,36.792c3.572,180.415,0.045,361.154-1.109,541.589L-4,634.509L-3.84,318z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var stayInformed = anime({
      targets: '#path__stay-informed',
      d: 'M161.06,549.44c74.35-77.46,38.82-100.69,127.29-169.001c73.47-56.709,166.06-46.52,180-180c5.2-49.83,70-21.74,95.78-70.22C587,87.16,579.615,63.99,612.51,43.08c50.221-0.67,55.105-6.09,83.63,13.1c13.181,32.41,0.801,530.61,0.94,625L76,682c17.43-25,2.24-55.15,30.75-67.69C153,594,119.89,592.34,161.06,549.44z',
      duration: 7500, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = {
      'landing-blue': landingBlue,
      'landing-white': landingWhite,
      'links-green': linksGreen,
      'links-violet': linksViolet,
      'stay-informed': stayInformed
    };
    toggleAnimations(animations);
  } else if (page.contains('template-press')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = { 'landing': landing };
    toggleAnimations(animations);
  } else if (page.contains('page-template-default')) {
    var landing = anime({
      targets: '#path__landing',
      d: 'M326.5,5C485.957,55.261,462.541,173.307,621,96.5c79.616-38.59,171.016-78.902,244.21-72.13C942.341,31.508,966.145,55.95,1053,98.5c71.259,34.909,60.76-37.595,132-47c83.681-11.047,113.558,26.488,114.08,83.189C866.054,134.387,433.027,134.083,0,133.78C0.069,48.262,97,67.5,129,71.5C167.26,83.561,255-4.5,326.5,5z',
      duration: 6000, loop: true, direction: 'alternate', easing: 'easeInOutSine'
    });
    var animations = { 'landing': landing };
    toggleAnimations(animations);
  }
}

function parallaxINIT(className) {
  var scene = cE(className)[0];
  var parallaxInstance = new Parallax(scene);
}

function headerTransparentANIM() {
  var header = cE('header')[0];
  var roadmapContainer = E('roadmap-container');
  var roadmapRectBottom = 0;

  var handleScroll = function handleScroll() {
    roadmapRectBottom = roadmapContainer.getBoundingClientRect().bottom;
    if (roadmapRectBottom < 0) {
      addC(header, 'home-scrolled');
    } else {
      remC(header, 'home-scrolled');
    }
  };

  $(window).on('scroll', throttle(handleScroll, 100));
}

function scrollReveal(page) {
  window.sr = ScrollReveal();
  var generalOpts = {
    duration: 1500,
    viewOffset: { bottom: 75 }
  };

  if (page.contains('home')) {
    sr.reveal('.phase-item-heading-text', generalOpts);
    sr.reveal('.list-heading', generalOpts);
    sr.reveal('.landing-heading', generalOpts);
    sr.reveal('.landing-subheading', generalOpts);
    sr.reveal('.landing-notification', generalOpts);
    sr.reveal('.slider-wrapper', generalOpts);
    sr.reveal('#subscribe', generalOpts);
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.panel-container', generalOpts);
    sr.reveal('.secondary-description', generalOpts);
    sr.reveal('#mc-stay-informed-form', generalOpts);
  } else if (page.contains('template-careers')) {
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.landing-buttons', generalOpts);
    sr.reveal('.videoWrapper', generalOpts);
    sr.reveal('.tab-slider', generalOpts);
    sr.reveal('.panel-slider', generalOpts);
    sr.reveal('.team-img', generalOpts);
    sr.reveal('#jobs', generalOpts);
  } else if (page.contains('template-developers')) {
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.landing-buttons', generalOpts);
    sr.reveal('.panel-right', generalOpts);
    sr.reveal('.block', generalOpts);
    sr.reveal('.panel-container', generalOpts);
    sr.reveal('.tool', generalOpts);
    sr.reveal('.whitepaper-item', generalOpts);
    sr.reveal('.form-content', generalOpts);
  } else if (page.contains('template-team')) {
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.videoWrapper', generalOpts);
    sr.reveal('.team-category', generalOpts);
    sr.reveal('.team-member', generalOpts);
    sr.reveal('.partner-logo', generalOpts);
    sr.reveal('.advisor', generalOpts);
    sr.reveal('#jobs', generalOpts);
  } else if (page.contains('template-community')) {
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.video-item', generalOpts);
    sr.reveal('.social', generalOpts);
    sr.reveal('#calendar-primary-featured', generalOpts);
    sr.reveal('.secondary-event', generalOpts);
    sr.reveal('.event', generalOpts);
    sr.reveal('#ambassador-program .social-icons', generalOpts);
    sr.reveal('.sign-up', generalOpts);
    sr.reveal('#mc-stay-informed-form', generalOpts);
  } else if (page.contains('template-about')) {
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.videoWrapper', generalOpts);
    sr.reveal('#testimonial', generalOpts);
    sr.reveal('.block', generalOpts);
    sr.reveal('#mc-stay-informed-form', generalOpts);
  } else if (page.contains('template-press')) {
    sr.reveal('.section-title', generalOpts);
    sr.reveal('.section-description', generalOpts);
    sr.reveal('.featured-news-item', generalOpts);
    sr.reveal('.interviews-slider', generalOpts);
    sr.reveal('.video', generalOpts);
    sr.reveal('.news-item', generalOpts);
    // sr.reveal('.', generalOpts);
  }
}

///////////////////////////////////////////////////////////////////////// Engage
//------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var page = tE('body')[0].classList;
  getWindowDimensions();
  headerANIM();
  menuINT();
  mailchimpFormINT();
  scrollANIM();
  blobANIM(page);
  scrollReveal(page);
  $(document).foundation();
  function engage() {
    if (page.contains('home')) {
      githubCommitSliderINIT();
      panelSliderINIT();
      // roadmapToggleINT()
      roadmapModalINT();
      // roadmapScrollReveal()
      notificationBarINT();
      parallaxINIT('prism-gradients');
      headerTransparentANIM();
      var timeout = window.setTimeout(function () {
        positionLines();
      }, 1000);
      window.addEventListener('resize', throttle(repositionLines, 250));
    } else if (page.contains('template-developers')) {
      gitHubRepos();
      forumSlider();
      panelSliderINIT();
    } else if (page.contains('template-community')) {
      scrollToMailFormINT();
      videoINT();
      modalINT();
      parallaxINIT('floating-stars');
    } else if (page.contains('template-faq')) {
      faqToggleINT();
    } else if (page.contains('template-careers')) {
      principlesSliderINIT();
      videoOverlayHide();
    } else if (page.contains('template-press')) {
      interviewSliderINIT();
      videoINT();
      modalINT();
    } else if (page.contains('template-team')) {
      videoOverlayHide();
    } else if (page.contains('template-about')) {
      videoOverlayHide();
      parallaxINIT('floating-icons');
    }
  }engage();
});