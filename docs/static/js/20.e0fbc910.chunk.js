(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(71);n(70),n(73),n(74),n(69),n(68);t.default=function(e){var t=e.pageInfo;return r.a.createElement(o.a,{title:t.title,page:t.page,maxPage:t.maxPage,pageDivide:!1})}},68:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a);t.c=function(e){var t=e.children,n=e.category,a=e.subcategory,o=encodeURIComponent(t),c=encodeURIComponent(n),i=encodeURIComponent(a),u=o;return""!==n&&(u+="+".concat(c)),""!==a&&(u+="+".concat(i)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),u=encodeURIComponent(o),l=c;return""!==a&&(l+="+".concat(i)),""!==o&&(l+="+".concat(u)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},n))},c=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),u=encodeURIComponent(o),l=c;return""!==a&&(l+="+".concat(i)),""!==o&&(l+="+".concat(u)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},n))}},69:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}var o=n(25),c=n(26),i=n(28),u=n(27),l=n(29),s=n(0),p=n.n(s),f=n(72),d=n.n(f),m="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",h=!1,y=null,g=function(){y&&clearTimeout(y),y=setTimeout(function(){h?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):d()(m,(void 0).onLoad)},100)},v=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),h=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),g(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?g(this.props.target):d()(m,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?g(this.props.target):d()(m,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:r({},this.props.style,{fontSize:"1em"})})}}]),t}(s.Component);t.a=b},70:function(e,t,n){"use strict";var a=n(25),r=n(26),o=n(28),c=n(27),i=n(29),u=n(0),l=n.n(u),s=n(69),p=n(68),f=n(1),d=n.n(f),m=n(4),h=n.n(m),y=n(30),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},E=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=v(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!b(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},v(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);h()(this.context.router,"You should not use <Link> outside a <Router>"),h()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(y.b)(t,null,null,r.location):t,c=r.createHref(o);return l.a.createElement("a",g({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(l.a.Component);E.propTypes={onClick:d.a.func,target:d.a.string,replace:d.a.bool,to:d.a.oneOfType([d.a.string,d.a.object]).isRequired,innerRef:d.a.oneOfType([d.a.string,d.a.func])},E.defaultProps={replace:!1},E.contextTypes={router:d.a.shape({history:d.a.shape({push:d.a.func.isRequired,replace:d.a.func.isRequired,createHref:d.a.func.isRequired}).isRequired}).isRequired};var w=E;n.d(t,"a",function(){return k});var k=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory;e.pageDivide;return l.a.createElement("div",null,this.props.data.split("\n").map(function(e,a){var r=e.trim().match("([#&$!/~]*)(.+)");if(r){if("!"==r[1])return l.a.createElement("h4",{style:{paddingLeft:"1em"},key:a},l.a.createElement(s.a,{value:r[2].trim()}));if("!!"==r[1])return l.a.createElement("p",{key:a},l.a.createElement(s.a,{style:{paddingLeft:"1em"},value:r[2].trim()}));if("#"==r[1])return l.a.createElement(p.a,{target:r[2].trim(),category:t,subcategory:n,key:a},l.a.createElement(s.a,{style:{display:"inline"},value:r[2].trim()}));if("##"==r[1])return l.a.createElement(p.b,{style:{paddingLeft:"1em"},target:r[2].trim(),category:t,subcategory:n,key:a},l.a.createElement(s.a,{style:{display:"inline"},value:r[2].trim()}));if("$"==r[1][0])return l.a.createElement(s.a,{value:e,key:a});if("/"==r[1][0])return null;if("&"==r[1]){var o=e.match("(&+)\\[(.+)\\](.+)");return l.a.createElement("p",{style:{paddingLeft:"1em"},key:a},l.a.createElement(w,{to:"".concat(o[3].trim())},o[2]))}if("~~"==e.trim())return l.a.createElement("div",{className:"page-divide",key:a});if("--"==e.trim())return l.a.createElement("hr",{key:a});if("~"==r[1]){var c=r[2].trim().split("\u3001");return l.a.createElement("p",{style:{paddingLeft:"1em"},key:a},c.map(function(e,a){return l.a.createElement("span",{key:a},l.a.createElement(p.c,{category:t,subcategory:n},e),a<c.length-1?"\u3001":"")}))}var i=r[2].trim().split("\u3001");return l.a.createElement("p",{key:a},i.map(function(e,a){return l.a.createElement("span",{style:{paddingLeft:"1em"},key:a},l.a.createElement(p.c,{category:t,subcategory:n},e),a<i.length-1?"\u3001":"")}))}return null}),this.props.children)}}]),t}(u.Component);k.defaultProps={page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0}},71:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(25),r=n(26),o=n(28),c=n(27),i=n(29),u=n(0),l=n.n(u),s=(n(69),n(68),n(70)),p=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory,a=e.pageDivide,r={};return a&&(r.pageBreakBefore="always"),l.a.createElement("div",null,this.props.title?l.a.createElement("div",{className:"Page-header",style:r},l.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?l.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null):null,l.a.createElement("div",{className:"Page-body"},l.a.createElement(s.a,{category:t,subcategory:n,pageDivide:a,data:this.props.data},this.props.children)))}}]),t}(u.Component);p.defaultProps={title:"",page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0}},72:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},c.type=t.type||"text/javascript",c.charset=t.charset||"utf8",c.async=!("async"in t)||!!t.async,c.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(c,t.attrs),t.text&&(c.text=""+t.text),("onload"in c?n:a)(c,r),c.onload||n(c,r),o.appendChild(c)}},73:function(e,t,n){"use strict";n(0)},74:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.src;return r.a.createElement("p",{align:"center"},r.a.createElement("img",{src:t}))}}}]);
//# sourceMappingURL=20.e0fbc910.chunk.js.map