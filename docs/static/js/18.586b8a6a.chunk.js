(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{68:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a);t.c=function(e){var t=e.children,n=e.category,a=e.subcategory,o=encodeURIComponent(t),c=encodeURIComponent(n),i=encodeURIComponent(a),u=o;return""!==n&&(u+="+".concat(c)),""!==a&&(u+="+".concat(i)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),u=encodeURIComponent(o),l=c;return""!==a&&(l+="+".concat(i)),""!==o&&(l+="+".concat(u)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},n))},c=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),u=encodeURIComponent(o),l=c;return""!==a&&(l+="+".concat(i)),""!==o&&(l+="+".concat(u)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},n))}},69:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}var o=n(25),c=n(26),i=n(28),u=n(27),l=n(29),s=n(0),p=n.n(s),d=n(72),f=n.n(d),h="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",m=!1,y=null,g=function(){y&&clearTimeout(y),y=setTimeout(function(){m?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):f()(h,(void 0).onLoad)},100)},v=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),m=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),g(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?g(this.props.target):f()(h,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?g(this.props.target):f()(h,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:r({},this.props.style,{fontSize:"1em"})})}}]),t}(s.Component);t.a=b},70:function(e,t,n){"use strict";var a=n(25),r=n(26),o=n(28),c=n(27),i=n(29),u=n(0),l=n.n(u),s=n(69),p=n(68),d=n(1),f=n.n(d),h=n(4),m=n.n(h),y=n(30),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},E=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=v(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!b(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},v(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);m()(this.context.router,"You should not use <Link> outside a <Router>"),m()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(y.b)(t,null,null,r.location):t,c=r.createHref(o);return l.a.createElement("a",g({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(l.a.Component);E.propTypes={onClick:f.a.func,target:f.a.string,replace:f.a.bool,to:f.a.oneOfType([f.a.string,f.a.object]).isRequired,innerRef:f.a.oneOfType([f.a.string,f.a.func])},E.defaultProps={replace:!1},E.contextTypes={router:f.a.shape({history:f.a.shape({push:f.a.func.isRequired,replace:f.a.func.isRequired,createHref:f.a.func.isRequired}).isRequired}).isRequired};var w=E;n.d(t,"a",function(){return O});var O=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory;e.pageDivide;return l.a.createElement("div",null,this.props.data.split("\n").map(function(e,a){var r=e.trim().match("([#&$!/~]*)(.+)");if(r){if("!"==r[1])return l.a.createElement("h4",{style:{paddingLeft:"1em"},key:a},l.a.createElement(s.a,{value:r[2].trim()}));if("!!"==r[1])return l.a.createElement("p",{key:a},l.a.createElement(s.a,{style:{paddingLeft:"1em"},value:r[2].trim()}));if("#"==r[1])return l.a.createElement(p.a,{target:r[2].trim(),category:t,subcategory:n,key:a},l.a.createElement(s.a,{style:{display:"inline"},value:r[2].trim()}));if("##"==r[1])return l.a.createElement(p.b,{style:{paddingLeft:"1em"},target:r[2].trim(),category:t,subcategory:n,key:a},l.a.createElement(s.a,{style:{display:"inline"},value:r[2].trim()}));if("$"==r[1][0])return l.a.createElement(s.a,{value:e,key:a});if("/"==r[1][0])return null;if("&"==r[1]){var o=e.match("(&+)\\[(.+)\\](.+)");return l.a.createElement("p",{style:{paddingLeft:"1em"},key:a},l.a.createElement(w,{to:"".concat(o[3].trim())},o[2]))}if("~~"==e.trim())return l.a.createElement("div",{className:"page-divide",key:a});if("--"==e.trim())return l.a.createElement("hr",{key:a});if("~"==r[1]){var c=r[2].trim().split("\u3001");return l.a.createElement("p",{style:{paddingLeft:"1em"},key:a},c.map(function(e,a){return l.a.createElement("span",{key:a},l.a.createElement(p.c,{category:t,subcategory:n},e),a<c.length-1?"\u3001":"")}))}var i=r[2].trim().split("\u3001");return l.a.createElement("p",{key:a},i.map(function(e,a){return l.a.createElement("span",{style:{paddingLeft:"1em"},key:a},l.a.createElement(p.c,{category:t,subcategory:n},e),a<i.length-1?"\u3001":"")}))}return null}),this.props.children)}}]),t}(u.Component);O.defaultProps={page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0}},71:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(25),r=n(26),o=n(28),c=n(27),i=n(29),u=n(0),l=n.n(u),s=(n(69),n(68),n(70)),p=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory,a=e.pageDivide,r={};return a&&(r.pageBreakBefore="always"),l.a.createElement("div",null,this.props.title?l.a.createElement("div",{className:"Page-header",style:r},l.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?l.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null):null,l.a.createElement("div",{className:"Page-body"},l.a.createElement(s.a,{category:t,subcategory:n,pageDivide:a,data:this.props.data},this.props.children)))}}]),t}(u.Component);p.defaultProps={title:"",page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0}},72:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},c.type=t.type||"text/javascript",c.charset=t.charset||"utf8",c.async=!("async"in t)||!!t.async,c.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(c,t.attrs),t.text&&(c.text=""+t.text),("onload"in c?n:a)(c,r),c.onload||n(c,r),o.appendChild(c)}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(25),r=n(26),o=n(28),c=n(27),i=n(29),u=n(0),l=n.n(u),s=n(71),p=n(70),d=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(s.a,{title:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/yamagame/dora-engine"},"dora-engine")," \u306f ",l.a.createElement("a",{href:"https://www.raspberrypi.org/"},"RaspberryPi")," \u3067\u52d5\u4f5c\u3059\u308b\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30dc\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3\u3067\u3059\u3002"),l.a.createElement("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u958b\u767a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8f09\u305b\u3066\u3044\u307e\u3059\u3002"),l.a.createElement(p.a,{category:"linux",data:"\n              # \u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9\u306e\u57fa\u790e\n              !! \u300c\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9\u306e\u57fa\u790e\u300d\u306f\b\u30ed\u30dc\u30c3\u30c8\u958b\u767a\u306b\u5fc5\u8981\u306a\u57fa\u790e\u77e5\u8b58\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u3053\u306b\u8f09\u3063\u3066\u3044\u308b\u77e5\u3089\u306a\u3044\u8a00\u8449\u306f\u8abf\u3079\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30b0\u30b0\u308a\u307e\u3059\u3002\n              \u30e6\u30fc\u30b6\u30cd\u30fc\u30e0\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\n              \u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\n              \u30b3\u30de\u30f3\u30c9\u3068\u30d7\u30ed\u30bb\u30b9\n              ssh\u3068\u30bf\u30fc\u30df\u30ca\u30eb\n              \u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3068\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\n              \u76f8\u5bfe\u30d1\u30b9\u3068\u7d76\u5bfe\u30d1\u30b9\n              \u74b0\u5883\u5909\u6570\n              \u516c\u958b\u9375\u6697\u53f7\u65b9\u5f0f\n              Web\u30b5\u30fc\u30d0\u3068HTTP\n              \u30b5\u30fc\u30d3\u30b9\u3068\u81ea\u52d5\u8d77\u52d5\n              TCP/IP\u3068IP\u30a2\u30c9\u30ec\u30b9\n              DHCP\u3068\u9759\u7684IP\u30a2\u30c9\u30ec\u30b9\n\n              # \u958b\u767a\u8a00\u8a9e\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\n              !! \u30ed\u30dc\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3\u306f JavaScript \u8a00\u8a9e\u3067\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u3067\u793a\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u7528\u3044\u3066\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30b0\u30b0\u308a\u307e\u3059\u3002\n              JavaScript\n              Node.js\n              Electron\n              React\n\n              # \u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30dc\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3\n              !! \u30ed\u30dc\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3\u306b\u3064\u3044\u3066\u6a5f\u80fd\u3054\u3068\u306b\u89e3\u8aac\u3057\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059\u3002\u5185\u5bb9\u306f\u73fe\u5728\u4f5c\u6210\u4e2d\u3067\u3059\u3002\n              &[\u69cb\u6210]".concat("/dora-engine-doc","/structure\n              &[microSD\u30ab\u30fc\u30c9\u4f5c\u6210]").concat("/dora-engine-doc","/os-image\n              &[\u30b7\u30ca\u30ea\u30aa\u30a8\u30c7\u30a3\u30bf]").concat("/dora-engine-doc","/scenario-editor\n              &[\u30c9\u30e9\u30b9\u30af\u30ea\u30d7\u30c8]").concat("/dora-engine-doc","/dora-script\n              &[\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3]").concat("/dora-engine-doc","/presentation\n              &[\u30a4\u30e1\u30fc\u30b8\u30de\u30c3\u30d7]").concat("/dora-engine-doc","/imagemap\n              &[\u30af\u30a4\u30ba]").concat("/dora-engine-doc","/quiz\n              &[\u7ba1\u7406\u8005\u30c4\u30fc\u30eb]").concat("/dora-engine-doc","/admin-tools\n              &[\u30c1\u30e3\u30c3\u30c8\u30a8\u30f3\u30b8\u30f3]").concat("/dora-engine-doc","/chat-engine\n              &[\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9]").concat("/dora-engine-doc","/scheduler\n              &[USB\u30de\u30a4\u30af\u5bfe\u5fdc]").concat("/dora-engine-doc","/usb-mic\n              &[\u30de\u30a4\u30af\u611f\u5ea6\u8abf\u6574]").concat("/dora-engine-doc","/mic-sensitivity\n              &[Google Speech-To-Text]").concat("/dora-engine-doc","/speech-to-text\n              &[Google Text-To-Speech]").concat("/dora-engine-doc","/text-to-speech\n              &[Google \u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8]").concat("/dora-engine-doc","/spreadsheet\n              &[\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u3064\u3044\u3066]").concat("/dora-engine-doc","/sequrity\n              &[\u7ba1\u7406\u8005\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u8a2d\u5b9a]").concat("/dora-engine-doc","/password\n              &[\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u9023\u643a]").concat("/dora-engine-doc","/gamepad\n              ")})))}}]),t}(u.Component)}}]);
//# sourceMappingURL=18.586b8a6a.chunk.js.map