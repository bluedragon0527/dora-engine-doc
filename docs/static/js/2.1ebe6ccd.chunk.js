(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{52:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})},53:function(e,t,n){"use strict";var a=n(52),r=n(27),o=n(28),c=n(30),i=n(29),l=n(31),u=n(0),s=n.n(u),p=n(55),d=n.n(p),f="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",m=!1,h=null,y=function(){h&&clearTimeout(h),h=setTimeout(function(){m?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):d()(f,(void 0).onLoad)},100)},g=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),m=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),y(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):d()(f,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):d()(f,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:Object(a.a)({},this.props.style,{fontSize:"1em"})})}}]),t}(u.Component);t.a=v},54:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a);t.c=function(e){var t=e.children,n=e.category,a=e.subcategory,o=encodeURIComponent(t),c=encodeURIComponent(n),i=encodeURIComponent(a),l=o;return""!==n&&"undefined"!==typeof n&&(l+="+".concat(c)),""!==a&&"undefined"!==typeof a&&(l+="+".concat(i)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),l=encodeURIComponent(o),u=c;return""!==a&&"undefined"!==typeof a&&(u+="+".concat(i)),""!==o&&"undefined"!==typeof o&&(u+="+".concat(l)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))},c=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),l=encodeURIComponent(o),u=c;return""!==a&&"undefined"!==typeof a&&(u+="+".concat(i)),""!==o&&"undefined"!==typeof o&&(u+="+".concat(l)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))}},55:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},c.type=t.type||"text/javascript",c.charset=t.charset||"utf8",c.async=!("async"in t)||!!t.async,c.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(c,t.attrs),t.text&&(c.text=""+t.text),("onload"in c?n:a)(c,r),c.onload||n(c,r),o.appendChild(c)}},56:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(52),c=function(e){var t=e.children,n=e.style;return r.a.createElement("header",{className:"Page-header",style:Object(o.a)({backgroundColor:"#F4F4F4"},n)},r.a.createElement("h3",{className:["Page-header-col"].join(" ")},"\u25a1 ",t))},i=n(27),l=n(28),u=n(30),s=n(29),p=n(31),d=n(53),f=n(54),m=n(57),h=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory,a=(e.pageDivide,null);return r.a.createElement("div",null,this.props.data.split("\n").map(function(e,o){var i=e.trim().match("([#&$!/~-]*)(.+)");if(i){if("~"==e.trim()){if(null!=a){var l=a;return a=null,r.a.createElement("div",{style:{fontSize:"0.8em",padding:"3.5em",paddingTop:0,paddingBottom:0},key:o},r.a.createElement("pre",{style:{margin:5,padding:15,backgroundColor:"#F4F4F4"}},r.a.createElement("code",null,l)))}return a="",null}if(null!=a)return""!=a&&(a+="\n"),a+=e,null;if("-"==i[1])return r.a.createElement("p",{style:{paddingLeft:"2em",margin:5},key:o},"\u30fb",i[2].trim());if("$"==i[1][0])return r.a.createElement("p",{align:"center"},r.a.createElement("img",{style:{border:"solid 1px lightgray"},src:"".concat("/dora-engine-doc").concat(i[2].trim())}));if("&"==i[1]){var u=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement(m.a,{to:"".concat(u[3].trim())},u[2]))}if("&&"==i[1]){var s=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement("a",{target:encodeURIComponent(s[2]),href:"".concat(s[3].trim())},s[2]))}if("!"==i[1])return r.a.createElement("h4",{style:{paddingLeft:"1em"},key:o},r.a.createElement(d.a,{value:i[2].trim()}));if("!!"==i[1])return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement(d.a,{style:{paddingLeft:"1em"},value:i[2].trim()}));if("!!!"==i[1])return r.a.createElement("p",{style:{marginLeft:"2.5em",marginRight:"1em"},key:o},r.a.createElement(d.a,{style:{paddingLeft:"1em"},value:i[2].trim()}));if("#"==i[1])return r.a.createElement(c,{style:{marginTop:"2em"},key:o},r.a.createElement(d.a,{style:{display:"inline"},value:i[2].trim()}));if("##"==i[1])return r.a.createElement(f.b,{style:{paddingLeft:"1em"},target:i[2].trim(),category:t,subcategory:n,key:o},r.a.createElement(d.a,{style:{display:"inline"},value:i[2].trim()}));if("/"==i[1][0])return null;if("~~"==e.trim())return r.a.createElement("div",{className:"page-divide",key:o});if("--"==e.trim())return r.a.createElement("hr",{key:o});if("~"==i[1]){var p=i[2].trim().split("\u3001");return r.a.createElement("p",{style:{paddingLeft:"1em"},key:o},p.map(function(e,a){return r.a.createElement("span",{key:a},r.a.createElement(f.c,{category:t,subcategory:n},e),a<p.length-1?"\u3001":"")}))}return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement("span",{style:{paddingLeft:"1em"},key:o},i[2].trim()))}return null!=a?(""!=a&&(a+="\n"),a+=e,null):r.a.createElement("p",null)}),this.props.children)}}]),t}(a.Component);h.defaultProps={page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0};t.a=function(e){var t=e.pages,n=e.category,a=void 0===n?"":n,o=e.title,i=void 0===o?"":o,l=e.data,u=void 0===l?"":l;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(c,null,i)),u?r.a.createElement(h,{data:u}):null,t?t.map(function(e,n){return e.page({pageInfo:{title:e.title,page:n+1,maxPage:t.length,category:a}})}):null,r.a.createElement("div",{style:{height:100}}))}},57:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=n(4),l=n.n(i),u=n(32),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!d(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(u.b)(t,null,null,o.location):t,i=o.createHref(c);return r.a.createElement("a",s({},a,{onClick:this.handleClick,href:i,ref:n}))},t}(r.a.Component);f.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=f},8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(27),r=n(28),o=n(30),c=n(29),i=n(31),l=n(0),u=n.n(l),s=n(56),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(s.a,{title:"\u30c1\u30e3\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3",data:"\n\u30c9\u30e9\u30a8\u30f3\u30b8\u30f3\u306b\u306f\u30eb\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30c1\u30e3\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3\u304c\u4ed8\u3044\u3066\u307e\u3059\u3002\n\n\u30eb\u30fc\u30eb\u306fGoogle\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3067\u4f5c\u6210\u3057\u307e\u3059\u3002\n\n$ /image/chat-data.png\n\n\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306e\u30ab\u30e9\u30e0\u306f\u3001ask \u3068 answer \u3067\u3059\u3002ask\u306b\u66f8\u304b\u308c\u305f\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u6e21\u3055\u308c\u308b\u3068\u3001answer\u306b\u66f8\u304b\u308c\u305f\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u56de\u7b54\u3068\u306a\u308a\u307e\u3059\u3002\n\n# \u6e96\u5099\n\n\u30ed\u30dc\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3\u304cGoogle\u306e\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\nGoogle\u306eWeb\u30b5\u30a4\u30c8\u304b\u3089\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u74b0\u5883\u5909\u6570ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\u5408\u308f\u305b\u3066\u30c8\u30fc\u30af\u30f3\u306e\u4fdd\u5b58\u5148\u3092ROBOT_GOOGLE_SHEET_TOKEN_PATH\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u3053\u3061\u3089\u306eWeb\u30da\u30fc\u30b8\u3067\u30b7\u30fc\u30c8API\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\n\n&&[https://developers.google.com/sheets/api/quickstart/nodejs]https://developers.google.com/sheets/api/quickstart/nodejs\n\n\u4e0a\u8a18\u30da\u30fc\u30b8\u306eStep1\u3092\u4f5c\u696d\u3057\u3066 credentials.json \u3092\u53d6\u5f97\u3057\u3001\u4fdd\u5b58\u5148\u3092\u74b0\u5883\u5909\u6570ROBOT_GOOGLE_SHEET_CREDENTIAL_PATH\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u4ee5\u4e0b\u306f\u4f8b\u3067\u3059\u3002\n\n~\nROBOT_GOOGLE_SHEET_CREDENTIAL_PATH=/home/pi/credentials/sheet-api-credentials.json\nROBOT_GOOGLE_SHEET_TOKEN_PATH=/home/pi/credentials/sheet-api-token.json\n~\n\n# \u30c1\u30e3\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\n\n\u30c1\u30e3\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\u3068\u3057\u3066\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002\n\n- /dora-chat\n- /dora-chat/random\n- /dora-chat/search\n- /dora-chat/time\n- /dora-chat/date\n- /dora-chat/day\n\n\u30c1\u30e3\u30c3\u30c8\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6e08\u307f\u306e\u5834\u5408\u306f\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306fGoogle\u306e\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\n\u4e0b\u8a18\u306f\u4f7f\u3044\u65b9\u306e\u4f8b\u3067\u3059\u3002\n\n~\n/.payload/\u3053\u3093\u3070\u3093\u306f\n/.chat.sheetId/[SheetID]\n/.chat.sheetName/[SheetName]\n/dora-chat\n/log/{{payload}}\n~\n\n\u3053\u306e\u69d8\u306b\u3059\u308b\u3068SheetID\u306eSheetName\u306b\u66f8\u304b\u308c\u305f\u300c\u3053\u3093\u3070\u3093\u306f\u300d\u306e\u5fdc\u7b54\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\n\n\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n&&[https://github.com/yamagame/dora/tree/master/doc]https://github.com/yamagame/dora/tree/master/doc\n\n"})}}]),t}(l.Component)}}]);
//# sourceMappingURL=2.1ebe6ccd.chunk.js.map