(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(27),r=n(28),o=n(30),i=n(29),c=n(31),l=n(0),u=n.n(l),s=n(56),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(s.a,{title:"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u9023\u643a",data:"\nUSB\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u3092\u63a5\u7d9a\u3057\u3066\u30ed\u30dc\u30c3\u30c8\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\n# \u6e96\u5099\n\n\u6a19\u6e96\u3067\u306f\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u9023\u643a\u306f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u6e96\u5099\u3057\u307e\u3059\u3002\n\n~\n$ cd ~/dora-engine\n$ ./setup-gamepad.sh\n~\n\n\u6b21\u306b\u74b0\u5883\u5909\u6570 ROBOT_USB_GAMEPAD \u306b true \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\n\u30ed\u30dc\u30c3\u30c8\u30d7\u30ed\u30bb\u30b9\u306e\u81ea\u52d5\u8d77\u52d5\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\n~\n/lib/systemd/system/servo-head.service\n~\n\n\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u6b21\u306e\uff11\u884c\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\n\n~\n#EnvironmentFile=/etc/default/servo-head\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u2193\nEnvironmentFile=/etc/default/servo-head\n~\n\n!! /etc/default/servo-head\u3092\u6b21\u306e\u3088\u3046\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\n\n~\nROBOT_USB_GAMEPAD=true\n~\n\n!! /etc/default/servo-head\u30d5\u30a1\u30a4\u30eb\u306f\u7ba1\u7406\u8005\u6a29\u9650\u3067\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u3089\u518d\u8d77\u52d5\u3057\u307e\u3059\u3002\n\n# \u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306eID\u3092\u8abf\u3079\u308b\n\n\u52d5\u4f5c\u3055\u305b\u305f\u3044USB\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306eID\u3092\u8abf\u3079\u307e\u3059\u3002\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\n~\n$ cd ~/dora-engine\n$ sudo node gamepad.js\n~\n\n\u5b9f\u884c\u3057\u3066\u3044\u308b\u72b6\u614b\u3067\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u3092\u629c\u304d\u5dee\u3057\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u30bf\u30fc\u30df\u30ca\u30eb\u306b\u6b21\u306e\u69d8\u306a\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n\n~\nID:1234/4567 VencdorID:1234 ProductID:4567 ...\n~\n\n\u5148\u982d\u306eID\u306e\u90e8\u5206\u306e\u30b9\u30e9\u30c3\u30b7\u30e5\u533a\u5207\u308a\uff11\uff16\u9032\u6570\uff14\u6841\u3092\u30e1\u30e2\u307e\u305f\u306f\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002\u3053\u306eID\u304c\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002\n\u3053\u306eID\u306fUSB\u306e\u30d9\u30f3\u30c0\u30fcID\u3068\u30d7\u30ed\u30c0\u30af\u30c8ID\u3067\u3059\u3002\u3059\u3079\u3066\u306eUSB\u30c7\u30d0\u30a4\u30b9\u306b\u306f\u30d9\u30f3\u30c0\u30fcID\u3068\u30d7\u30ed\u30c0\u30af\u30c8ID\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u3059\u3002\n\n\u6b21\u306b\u3053\u306eID\u3092\u4f7f\u3063\u3066\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u4e00\u65e6\u3001gamepad.js\u3092\u7d42\u4e86\u3055\u305b\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\n~\n$ sudo node gamepad.js 0123/4567\n~\n\n0123/4567\u306e\u90e8\u5206\u306f\u5148\u307b\u3069\u8abf\u3079\u305fID\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n\u3053\u306e\u72b6\u614b\u3067\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306e\u30dc\u30bf\u30f3\u3092\u64cd\u4f5c\u3059\u308b\u3068\uff11\uff16\u9032\u6570\u30c7\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u306e\uff11\uff16\u9032\u6570\u304c\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002\n\uff11\uff16\u9032\u6570\u306e\u5404\u30d3\u30c3\u30c8\u306e\u610f\u5473\u306f\u3001\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u306e\u3067\u3001\u3053\u3053\u3067\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306e\u30c7\u30fc\u30bf\u306e\u72b6\u614b\u3092\u8abf\u3079\u3066\u304f\u3060\u3055\u3044\u3002\n\n# \u30c9\u30e9\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5224\u5b9a\u3059\u308b\n\n\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\n~\n/button.gamepad/1234/4567\n:loop\n/wait-event\n/switch/gamepad/:GAMEPAD_CHANGED\n/goto/:loop\n\n:GAMEPAD_CHANGED\n~\n\n\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306e\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u308b\u3068:GAMEPAD_CHANGED\u3078\u9077\u79fb\u3057\u307e\u3059\u3002\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306e\u30dc\u30bf\u30f3\u306e\u60c5\u5831\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e gamepad.data \u306b\u5165\u308a\u307e\u3059\u3002\n\u3053\u306e gamepad.data \u306e\u5024\u3092 AND\u6f14\u7b97\u3059\u308b\u306a\u3069\u3057\u3066\u3001\u30dc\u30bf\u30f3\u306e\u62bc\u4e0b\u3092\u8abf\u3079\u307e\u3059\u3002\n"})}}]),t}(l.Component)},52:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})},53:function(e,t,n){"use strict";var a=n(52),r=n(27),o=n(28),i=n(30),c=n(29),l=n(31),u=n(0),s=n.n(u),p=n(55),d=n.n(p),f="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",m=!1,h=null,y=function(){h&&clearTimeout(h),h=setTimeout(function(){m?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):d()(f,(void 0).onLoad)},100)},g=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),m=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),y(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):d()(f,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):d()(f,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:Object(a.a)({},this.props.style,{fontSize:"1em"})})}}]),t}(u.Component);t.a=v},54:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(0),r=n.n(a);t.c=function(e){var t=e.children,n=e.category,a=e.subcategory,o=encodeURIComponent(t),i=encodeURIComponent(n),c=encodeURIComponent(a),l=o;return""!==n&&"undefined"!==typeof n&&(l+="+".concat(i)),""!==a&&"undefined"!==typeof a&&(l+="+".concat(c)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,i=encodeURIComponent(t),c=encodeURIComponent(a),l=encodeURIComponent(o),u=i;return""!==a&&"undefined"!==typeof a&&(u+="+".concat(c)),""!==o&&"undefined"!==typeof o&&(u+="+".concat(l)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))},i=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,i=encodeURIComponent(t),c=encodeURIComponent(a),l=encodeURIComponent(o),u=i;return""!==a&&"undefined"!==typeof a&&(u+="+".concat(c)),""!==o&&"undefined"!==typeof o&&(u+="+".concat(l)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))}},55:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:a)(i,r),i.onload||n(i,r),o.appendChild(i)}},56:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(52),i=function(e){var t=e.children,n=e.style;return r.a.createElement("header",{className:"Page-header",style:Object(o.a)({backgroundColor:"#F4F4F4"},n)},r.a.createElement("h3",{className:["Page-header-col"].join(" ")},"\u25a1 ",t))},c=n(27),l=n(28),u=n(30),s=n(29),p=n(31),d=n(53),f=n(54),m=n(57),h=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory,a=(e.pageDivide,null);return r.a.createElement("div",null,this.props.data.split("\n").map(function(e,o){var c=e.trim().match("([#&$!/~-]*)(.+)");if(c){if("~"==e.trim()){if(null!=a){var l=a;return a=null,r.a.createElement("div",{style:{fontSize:"0.8em",padding:"3.5em",paddingTop:0,paddingBottom:0},key:o},r.a.createElement("pre",{style:{margin:5,padding:15,backgroundColor:"#F4F4F4"}},r.a.createElement("code",null,l)))}return a="",null}if(null!=a)return""!=a&&(a+="\n"),a+=e,null;if("-"==c[1])return r.a.createElement("p",{style:{paddingLeft:"2em",margin:5},key:o},"\u30fb",c[2].trim());if("$"==c[1][0])return r.a.createElement("p",{align:"center"},r.a.createElement("img",{style:{border:"solid 1px lightgray"},src:"".concat("/dora-engine-doc").concat(c[2].trim())}));if("&"==c[1]){var u=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement(m.a,{to:"".concat(u[3].trim())},u[2]))}if("&&"==c[1]){var s=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement("a",{target:encodeURIComponent(s[2]),href:"".concat(s[3].trim())},s[2]))}if("!"==c[1])return r.a.createElement("h4",{style:{paddingLeft:"1em"},key:o},r.a.createElement(d.a,{value:c[2].trim()}));if("!!"==c[1])return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement(d.a,{style:{paddingLeft:"1em"},value:c[2].trim()}));if("!!!"==c[1])return r.a.createElement("p",{style:{marginLeft:"2.5em",marginRight:"1em"},key:o},r.a.createElement(d.a,{style:{paddingLeft:"1em"},value:c[2].trim()}));if("#"==c[1])return r.a.createElement(i,{style:{marginTop:"2em"},key:o},r.a.createElement(d.a,{style:{display:"inline"},value:c[2].trim()}));if("##"==c[1])return r.a.createElement(f.b,{style:{paddingLeft:"1em"},target:c[2].trim(),category:t,subcategory:n,key:o},r.a.createElement(d.a,{style:{display:"inline"},value:c[2].trim()}));if("/"==c[1][0])return null;if("~~"==e.trim())return r.a.createElement("div",{className:"page-divide",key:o});if("--"==e.trim())return r.a.createElement("hr",{key:o});if("~"==c[1]){var p=c[2].trim().split("\u3001");return r.a.createElement("p",{style:{paddingLeft:"1em"},key:o},p.map(function(e,a){return r.a.createElement("span",{key:a},r.a.createElement(f.c,{category:t,subcategory:n},e),a<p.length-1?"\u3001":"")}))}return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement("span",{style:{paddingLeft:"1em"},key:o},c[2].trim()))}return null!=a?(""!=a&&(a+="\n"),a+=e,null):r.a.createElement("p",null)}),this.props.children)}}]),t}(a.Component);h.defaultProps={page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0};t.a=function(e){var t=e.pages,n=e.category,a=void 0===n?"":n,o=e.title,c=void 0===o?"":o,l=e.data,u=void 0===l?"":l;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null,c)),u?r.a.createElement(h,{data:u}):null,t?t.map(function(e,n){return e.page({pageInfo:{title:e.title,page:n+1,maxPage:t.length,category:a}})}):null,r.a.createElement("div",{style:{height:100}}))}},57:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(4),l=n.n(c),u=n(32),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!d(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(u.b)(t,null,null,o.location):t,c=o.createHref(i);return r.a.createElement("a",s({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(r.a.Component);f.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=f}}]);
//# sourceMappingURL=4.4fc652db.chunk.js.map