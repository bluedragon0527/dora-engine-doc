(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{47:function(e,n,a){e.exports=a(59)},53:function(e,n,a){},56:function(e,n,a){},57:function(e,n,a){var t={"./AWSPolly":[6,0],"./AWSPolly/":[6,0],"./AWSPolly/index":[6,0],"./AWSPolly/index.js":[6,0],"./AdminTools":[7,1],"./AdminTools/":[7,1],"./AdminTools/index":[7,1],"./AdminTools/index.js":[7,1],"./AutoStart":[8,2],"./AutoStart/":[8,2],"./AutoStart/index":[8,2],"./AutoStart/index.js":[8,2],"./ChatEngine":[9,3],"./ChatEngine/":[9,3],"./ChatEngine/index":[9,3],"./ChatEngine/index.js":[9,3],"./DoraBrowser":[10,4],"./DoraBrowser/":[10,4],"./DoraBrowser/index":[10,4],"./DoraBrowser/index.js":[10,4],"./DoraScript":[11,5],"./DoraScript/":[11,5],"./DoraScript/index":[11,5],"./DoraScript/index.js":[11,5],"./DoraUpdate":[12,6],"./DoraUpdate/":[12,6],"./DoraUpdate/index":[12,6],"./DoraUpdate/index.js":[12,6],"./ENVVariable":[13,7],"./ENVVariable/":[13,7],"./ENVVariable/index":[13,7],"./ENVVariable/index.js":[13,7],"./ExternalCommand":[14,8],"./ExternalCommand/":[14,8],"./ExternalCommand/index":[14,8],"./ExternalCommand/index.js":[14,8],"./GamePad":[15,9],"./GamePad/":[15,9],"./GamePad/index":[15,9],"./GamePad/index.js":[15,9],"./GitHubScenario":[16,10],"./GitHubScenario/":[16,10],"./GitHubScenario/index":[16,10],"./GitHubScenario/index.js":[16,10],"./ImageMap":[17,11],"./ImageMap/":[17,11],"./ImageMap/index":[17,11],"./ImageMap/index.js":[17,11],"./MICSensitivity":[18,12],"./MICSensitivity/":[18,12],"./MICSensitivity/index":[18,12],"./MICSensitivity/index.js":[18,12],"./OSImage":[19,13],"./OSImage/":[19,13],"./OSImage/index":[19,13],"./OSImage/index.js":[19,13],"./Password":[20,14],"./Password/":[20,14],"./Password/index":[20,14],"./Password/index.js":[20,14],"./PowerOff":[21,15],"./PowerOff/":[21,15],"./PowerOff/index":[21,15],"./PowerOff/index.js":[21,15],"./Presentation":[22,16],"./Presentation/":[22,16],"./Presentation/index":[22,16],"./Presentation/index.js":[22,16],"./PrinterSupport":[23,17],"./PrinterSupport/":[23,17],"./PrinterSupport/index":[23,17],"./PrinterSupport/index.js":[23,17],"./Quiz":[24,18],"./Quiz/":[24,18],"./Quiz/index":[24,18],"./Quiz/index.js":[24,18],"./RobotHead":[25,19],"./RobotHead/":[25,19],"./RobotHead/index":[25,19],"./RobotHead/index.js":[25,19],"./ScenarioEditor":[26,20],"./ScenarioEditor/":[26,20],"./ScenarioEditor/index":[26,20],"./ScenarioEditor/index.js":[26,20],"./Scheduler":[27,21],"./Scheduler/":[27,21],"./Scheduler/index":[27,21],"./Scheduler/index.js":[27,21],"./Sequrity":[28,22],"./Sequrity/":[28,22],"./Sequrity/index":[28,22],"./Sequrity/index.js":[28,22],"./SpeechToText":[29,23],"./SpeechToText/":[29,23],"./SpeechToText/index":[29,23],"./SpeechToText/index.js":[29,23],"./Spreadsheet":[30,24],"./Spreadsheet/":[30,24],"./Spreadsheet/index":[30,24],"./Spreadsheet/index.js":[30,24],"./Structure":[31,25],"./Structure/":[31,25],"./Structure/index":[31,25],"./Structure/index.js":[31,25],"./TextToSpeech":[32,26],"./TextToSpeech/":[32,26],"./TextToSpeech/index":[32,26],"./TextToSpeech/index.js":[32,26],"./Tips":[33,27],"./Tips/":[33,27],"./Tips/index":[33,27],"./Tips/index.js":[33,27],"./TopPage":[46,30],"./TopPage.js":[46,30],"./USBMic":[34,28],"./USBMic/":[34,28],"./USBMic/index":[34,28],"./USBMic/index.js":[34,28],"./VoiceCancel":[35,29],"./VoiceCancel/":[35,29],"./VoiceCancel/index":[35,29],"./VoiceCancel/index.js":[35,29]};function o(e){var n=t[e];return n?a.e(n[1]).then(function(){var e=n[0];return a(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return Object.keys(t)},o.id=57,e.exports=o},59:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),c=a(44),r=a.n(c),i=(a(53),a(37)),d=a(38),p=a(40),m=a(39),s=a(41),l=a(36),u=a.n(l),h=a(61),x=a(62),S=a(63),E=(a(56),function(e){var n=e.children;return o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{className:["App-title","App-header-col"].join(" ")},n))});function g(e,n){return u()({loader:function(){return a(57)("./".concat(e))},loading:n})}var j=function(){return o.a.createElement("div",null,"Loading...")},w=g("AdminTools",j),P=g("ChatEngine",j),T=g("GamePad",j),f=g("ImageMap",j),b=g("MICSensitivity",j),v=g("OSImage",j),y=g("Password",j),C=g("Presentation",j),A=g("Quiz",j),O=g("ScenarioEditor",j),D=g("Scheduler",j),I=g("Sequrity",j),M=g("SpeechToText",j),V=g("Spreadsheet",j),B=g("Structure",j),U=g("TextToSpeech",j),G=g("USBMic",j),H=g("DoraScript",j),N=g("AutoStart",j),k=g("VoiceCancel",j),q=g("PowerOff",j),W=g("ENVVariable",j),z=g("RobotHead",j),Q=g("DoraBrowser",j),R=g("DoraUpdate",j),J=g("PrinterSupport",j),L=g("AWSPolly",j),_=g("ExternalCommand",j),F=g("GitHubScenario",j),$=g("Tips",j),K=u()({loader:function(){return a.e(30).then(a.bind(null,46))},loading:j}),X=function(e){function n(){return Object(i.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement("div",{className:"App"},o.a.createElement(E,null,o.a.createElement("a",{href:"".concat("/dora-engine-doc","/")},"\u30c9\u30e9\u30a8\u30f3\u30b8\u30f3 \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"))),o.a.createElement(x.a,null,o.a.createElement(S.a,{exact:!0,path:"".concat("/dora-engine-doc","/"),component:K}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/structure"),component:B}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/scenario-editor"),component:O}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/os-image"),component:v}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/presentation"),component:C}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/imagemap"),component:f}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/quiz"),component:A}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/admin-tools"),component:w}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/chat-engine"),component:P}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/scheduler"),component:D}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/usb-mic"),component:G}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/mic-sensitivity"),component:b}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/speech-to-text"),component:M}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/text-to-speech"),component:U}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/spreadsheet"),component:V}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/sequrity"),component:I}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/password"),component:y}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/gamepad"),component:T}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/dora-script"),component:H}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/auto-start"),component:N}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/voice-cancel"),component:k}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/poweroff"),component:q}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/env-variable"),component:W}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/robot-head"),component:z}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/dora-browser"),component:Q}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/dora-update"),component:R}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/printer-support"),component:J}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/aws-polly"),component:L}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/external-command"),component:_}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/github-scenario"),component:F}),o.a.createElement(S.a,{path:"".concat("/dora-engine-doc","/tips"),component:$}))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,32,33]]]);
//# sourceMappingURL=main.8806a402.chunk.js.map