import{f as he,h as P,i as W,j as de}from"./index-477e1ee3.js";const ye=t=>JSON.stringify(t,(e,r)=>typeof r=="bigint"?r.toString()+"n":r),pe=t=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,r=t.replace(e,'$1"$2n"$3');return JSON.parse(r,(i,a)=>typeof a=="string"&&a.match(/^\d+n$/)?BigInt(a.substring(0,a.length-1)):a)};function be(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return pe(t)}catch{return t}}function q(t){return typeof t=="string"?t:ye(t)||""}const me="PARSE_ERROR",ve="INVALID_REQUEST",ge="METHOD_NOT_FOUND",_e="INVALID_PARAMS",Q="INTERNAL_ERROR",M="SERVER_ERROR",we=[-32700,-32600,-32601,-32602,-32603],S={[me]:{code:-32700,message:"Parse error"},[ve]:{code:-32600,message:"Invalid Request"},[ge]:{code:-32601,message:"Method not found"},[_e]:{code:-32602,message:"Invalid params"},[Q]:{code:-32603,message:"Internal error"},[M]:{code:-32e3,message:"Server error"}},K=M;function Ee(t){return we.includes(t)}function J(t){return Object.keys(S).includes(t)?S[t]:S[K]}function Re(t){const e=Object.values(S).find(r=>r.code===t);return e||S[K]}function Oe(t,e,r){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${r} RPC url at ${e}`):t}var Pe={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var I=function(t,e){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)i.hasOwnProperty(a)&&(r[a]=i[a])},I(t,e)};function Te(t,e){I(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var C=function(){return C=Object.assign||function(e){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},C.apply(this,arguments)};function Ae(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(r[i[a]]=t[i[a]]);return r}function Se(t,e,r,i){var a=arguments.length,o=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(c=t[l])&&(o=(a<3?c(o):a>3?c(e,r,o):c(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o}function xe(t,e){return function(r,i){e(r,i,t)}}function Be(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function je(t,e,r,i){function a(o){return o instanceof r?o:new r(function(c){c(o)})}return new(r||(r=Promise))(function(o,c){function l(m){try{f(i.next(m))}catch(v){c(v)}}function g(m){try{f(i.throw(m))}catch(v){c(v)}}function f(m){m.done?o(m.value):a(m.value).then(l,g)}f((i=i.apply(t,e||[])).next())})}function De(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,a,o,c;return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(f){return function(m){return g([f,m])}}function g(f){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,a&&(o=f[0]&2?a.return:f[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,f[1])).done)return o;switch(a=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return r.label++,{value:f[1],done:!1};case 5:r.label++,a=f[1],f=[0];continue;case 7:f=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){r=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){r.label=f[1];break}if(f[0]===6&&r.label<o[1]){r.label=o[1],o=f;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(f);break}o[2]&&r.ops.pop(),r.trys.pop();continue}f=e.call(t,r)}catch(m){f=[6,m],a=0}finally{i=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}function Ie(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}function Ce(t,e){for(var r in t)r!=="default"&&!e.hasOwnProperty(r)&&(e[r]=t[r])}function L(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Y(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var i=r.call(t),a,o=[],c;try{for(;(e===void 0||e-- >0)&&!(a=i.next()).done;)o.push(a.value)}catch(l){c={error:l}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(c)throw c.error}}return o}function Le(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Y(arguments[e]));return t}function Ue(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var i=Array(t),a=0,e=0;e<r;e++)for(var o=arguments[e],c=0,l=o.length;c<l;c++,a++)i[a]=o[c];return i}function x(t){return this instanceof x?(this.v=t,this):new x(t)}function Me(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=r.apply(t,e||[]),a,o=[];return a={},c("next"),c("throw"),c("return"),a[Symbol.asyncIterator]=function(){return this},a;function c(y){i[y]&&(a[y]=function(_){return new Promise(function(d,T){o.push([y,_,d,T])>1||l(y,_)})})}function l(y,_){try{g(i[y](_))}catch(d){v(o[0][3],d)}}function g(y){y.value instanceof x?Promise.resolve(y.value.v).then(f,m):v(o[0][2],y)}function f(y){l("next",y)}function m(y){l("throw",y)}function v(y,_){y(_),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Ne(t){var e,r;return e={},i("next"),i("throw",function(a){throw a}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(a,o){e[a]=t[a]?function(c){return(r=!r)?{value:x(t[a](c)),done:a==="return"}:o?o(c):c}:o}}function Fe(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof L=="function"?L(t):t[Symbol.iterator](),r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r);function i(o){r[o]=t[o]&&function(c){return new Promise(function(l,g){c=t[o](c),a(l,g,c.done,c.value)})}}function a(o,c,l,g){Promise.resolve(g).then(function(f){o({value:f,done:l})},c)}}function He(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function qe(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function Je(t){return t&&t.__esModule?t:{default:t}}function $e(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function Ve(t,e,r){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,r),r}const Ge=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return C},__asyncDelegator:Ne,__asyncGenerator:Me,__asyncValues:Fe,__await:x,__awaiter:je,__classPrivateFieldGet:$e,__classPrivateFieldSet:Ve,__createBinding:Ie,__decorate:Se,__exportStar:Ce,__extends:Te,__generator:De,__importDefault:Je,__importStar:qe,__makeTemplateObject:He,__metadata:Be,__param:xe,__read:Y,__rest:Ae,__spread:Le,__spreadArrays:Ue,__values:L},Symbol.toStringTag,{value:"Module"})),ze=he(Ge);var E={},$;function Xe(){if($)return E;$=1,Object.defineProperty(E,"__esModule",{value:!0}),E.isBrowserCryptoAvailable=E.getSubtleCrypto=E.getBrowerCrypto=void 0;function t(){return(P===null||P===void 0?void 0:P.crypto)||(P===null||P===void 0?void 0:P.msCrypto)||{}}E.getBrowerCrypto=t;function e(){const i=t();return i.subtle||i.webkitSubtle}E.getSubtleCrypto=e;function r(){return!!t()&&!!e()}return E.isBrowserCryptoAvailable=r,E}var R={},V;function ke(){if(V)return R;V=1,Object.defineProperty(R,"__esModule",{value:!0}),R.isBrowser=R.isNode=R.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}R.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}R.isNode=e;function r(){return!t()&&!e()}return R.isBrowser=r,R}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=ze;e.__exportStar(Xe(),t),e.__exportStar(ke(),t)})(Pe);function Z(t=3){const e=Date.now()*Math.pow(10,t),r=Math.floor(Math.random()*Math.pow(10,t));return e+r}function We(t=6){return BigInt(Z(t))}function Qe(t,e,r){return{id:r||Z(),jsonrpc:"2.0",method:t,params:e}}function ut(t,e){return{id:t,jsonrpc:"2.0",result:e}}function Ke(t,e,r){return{id:t,jsonrpc:"2.0",error:Ye(e,r)}}function Ye(t,e){return typeof t>"u"?J(Q):(typeof t=="string"&&(t=Object.assign(Object.assign({},J(M)),{message:t})),typeof e<"u"&&(t.data=e),Ee(t.code)&&(t=Re(t.code)),t)}class ee{}class lt extends ee{constructor(e){super()}}class Ze extends ee{constructor(){super()}}class et extends Ze{constructor(e){super()}}const tt="^https?:",rt="^wss?:";function nt(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function te(t,e){const r=nt(t);return typeof r>"u"?!1:new RegExp(e).test(r)}function G(t){return te(t,tt)}function ht(t){return te(t,rt)}function dt(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function re(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function yt(t){return re(t)&&"method"in t}function ot(t){return re(t)&&(it(t)||ne(t))}function it(t){return"result"in t}function ne(t){return"error"in t}class pt extends et{constructor(e){super(e),this.events=new W.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async request(e,r){return this.requestStrict(Qe(e.method,e.params||[],e.id||We().toString()),r)}async requestStrict(e,r){return new Promise(async(i,a)=>{if(!this.connection.connected)try{await this.open()}catch(o){a(o)}this.events.on(`${e.id}`,o=>{ne(o)?a(o.error):i(o.result)});try{await this.connection.send(e,r)}catch(o){a(o)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),ot(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var U={exports:{}};(function(t,e){var r=typeof self<"u"?self:P,i=function(){function o(){this.fetch=!1,this.DOMException=r.DOMException}return o.prototype=r,new o}();(function(o){(function(c){var l={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function g(n){return n&&DataView.prototype.isPrototypeOf(n)}if(l.arrayBuffer)var f=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=ArrayBuffer.isView||function(n){return n&&f.indexOf(Object.prototype.toString.call(n))>-1};function v(n){if(typeof n!="string"&&(n=String(n)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(n))throw new TypeError("Invalid character in header field name");return n.toLowerCase()}function y(n){return typeof n!="string"&&(n=String(n)),n}function _(n){var s={next:function(){var u=n.shift();return{done:u===void 0,value:u}}};return l.iterable&&(s[Symbol.iterator]=function(){return s}),s}function d(n){this.map={},n instanceof d?n.forEach(function(s,u){this.append(u,s)},this):Array.isArray(n)?n.forEach(function(s){this.append(s[0],s[1])},this):n&&Object.getOwnPropertyNames(n).forEach(function(s){this.append(s,n[s])},this)}d.prototype.append=function(n,s){n=v(n),s=y(s);var u=this.map[n];this.map[n]=u?u+", "+s:s},d.prototype.delete=function(n){delete this.map[v(n)]},d.prototype.get=function(n){return n=v(n),this.has(n)?this.map[n]:null},d.prototype.has=function(n){return this.map.hasOwnProperty(v(n))},d.prototype.set=function(n,s){this.map[v(n)]=y(s)},d.prototype.forEach=function(n,s){for(var u in this.map)this.map.hasOwnProperty(u)&&n.call(s,this.map[u],u,this)},d.prototype.keys=function(){var n=[];return this.forEach(function(s,u){n.push(u)}),_(n)},d.prototype.values=function(){var n=[];return this.forEach(function(s){n.push(s)}),_(n)},d.prototype.entries=function(){var n=[];return this.forEach(function(s,u){n.push([u,s])}),_(n)},l.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);function T(n){if(n.bodyUsed)return Promise.reject(new TypeError("Already read"));n.bodyUsed=!0}function N(n){return new Promise(function(s,u){n.onload=function(){s(n.result)},n.onerror=function(){u(n.error)}})}function oe(n){var s=new FileReader,u=N(s);return s.readAsArrayBuffer(n),u}function ie(n){var s=new FileReader,u=N(s);return s.readAsText(n),u}function se(n){for(var s=new Uint8Array(n),u=new Array(s.length),b=0;b<s.length;b++)u[b]=String.fromCharCode(s[b]);return u.join("")}function F(n){if(n.slice)return n.slice(0);var s=new Uint8Array(n.byteLength);return s.set(new Uint8Array(n)),s.buffer}function H(){return this.bodyUsed=!1,this._initBody=function(n){this._bodyInit=n,n?typeof n=="string"?this._bodyText=n:l.blob&&Blob.prototype.isPrototypeOf(n)?this._bodyBlob=n:l.formData&&FormData.prototype.isPrototypeOf(n)?this._bodyFormData=n:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(n)?this._bodyText=n.toString():l.arrayBuffer&&l.blob&&g(n)?(this._bodyArrayBuffer=F(n.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(n)||m(n))?this._bodyArrayBuffer=F(n):this._bodyText=n=Object.prototype.toString.call(n):this._bodyText="",this.headers.get("content-type")||(typeof n=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(n)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var n=T(this);if(n)return n;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?T(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(oe)}),this.text=function(){var n=T(this);if(n)return n;if(this._bodyBlob)return ie(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(se(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(fe)}),this.json=function(){return this.text().then(JSON.parse)},this}var ae=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ce(n){var s=n.toUpperCase();return ae.indexOf(s)>-1?s:n}function O(n,s){s=s||{};var u=s.body;if(n instanceof O){if(n.bodyUsed)throw new TypeError("Already read");this.url=n.url,this.credentials=n.credentials,s.headers||(this.headers=new d(n.headers)),this.method=n.method,this.mode=n.mode,this.signal=n.signal,!u&&n._bodyInit!=null&&(u=n._bodyInit,n.bodyUsed=!0)}else this.url=String(n);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new d(s.headers)),this.method=ce(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&u)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(u)}O.prototype.clone=function(){return new O(this,{body:this._bodyInit})};function fe(n){var s=new FormData;return n.trim().split("&").forEach(function(u){if(u){var b=u.split("="),p=b.shift().replace(/\+/g," "),h=b.join("=").replace(/\+/g," ");s.append(decodeURIComponent(p),decodeURIComponent(h))}}),s}function ue(n){var s=new d,u=n.replace(/\r?\n[\t ]+/g," ");return u.split(/\r?\n/).forEach(function(b){var p=b.split(":"),h=p.shift().trim();if(h){var B=p.join(":").trim();s.append(h,B)}}),s}H.call(O.prototype);function w(n,s){s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in s?s.statusText:"OK",this.headers=new d(s.headers),this.url=s.url||"",this._initBody(n)}H.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var n=new w(null,{status:0,statusText:""});return n.type="error",n};var le=[301,302,303,307,308];w.redirect=function(n,s){if(le.indexOf(s)===-1)throw new RangeError("Invalid status code");return new w(null,{status:s,headers:{location:n}})},c.DOMException=o.DOMException;try{new c.DOMException}catch{c.DOMException=function(s,u){this.message=s,this.name=u;var b=Error(s);this.stack=b.stack},c.DOMException.prototype=Object.create(Error.prototype),c.DOMException.prototype.constructor=c.DOMException}function j(n,s){return new Promise(function(u,b){var p=new O(n,s);if(p.signal&&p.signal.aborted)return b(new c.DOMException("Aborted","AbortError"));var h=new XMLHttpRequest;function B(){h.abort()}h.onload=function(){var A={status:h.status,statusText:h.statusText,headers:ue(h.getAllResponseHeaders()||"")};A.url="responseURL"in h?h.responseURL:A.headers.get("X-Request-URL");var D="response"in h?h.response:h.responseText;u(new w(D,A))},h.onerror=function(){b(new TypeError("Network request failed"))},h.ontimeout=function(){b(new TypeError("Network request failed"))},h.onabort=function(){b(new c.DOMException("Aborted","AbortError"))},h.open(p.method,p.url,!0),p.credentials==="include"?h.withCredentials=!0:p.credentials==="omit"&&(h.withCredentials=!1),"responseType"in h&&l.blob&&(h.responseType="blob"),p.headers.forEach(function(A,D){h.setRequestHeader(D,A)}),p.signal&&(p.signal.addEventListener("abort",B),h.onreadystatechange=function(){h.readyState===4&&p.signal.removeEventListener("abort",B)}),h.send(typeof p._bodyInit>"u"?null:p._bodyInit)})}return j.polyfill=!0,o.fetch||(o.fetch=j,o.Headers=d,o.Request=O,o.Response=w),c.Headers=d,c.Request=O,c.Response=w,c.fetch=j,Object.defineProperty(c,"__esModule",{value:!0}),c})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var a=i;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,t.exports=e})(U,U.exports);var st=U.exports;const z=de(st),at={Accept:"application/json","Content-Type":"application/json"},ct="POST",X={headers:at,method:ct},k=10;class bt{constructor(e,r=!1){if(this.url=e,this.disableProviderPing=r,this.events=new W.EventEmitter,this.isAvailable=!1,this.registering=!1,!G(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=r}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,r){this.isAvailable||await this.register();try{const i=q(e),o=await(await z(this.url,Object.assign(Object.assign({},X),{body:i}))).json();this.onPayload({data:o})}catch(i){this.onError(e.id,i)}}async register(e=this.url){if(!G(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const r=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=r||this.events.listenerCount("open")>=r)&&this.events.setMaxListeners(r+1),new Promise((i,a)=>{this.events.once("register_error",o=>{this.resetMaxListeners(),a(o)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return a(new Error("HTTP connection is missing or invalid"));i()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const r=q({id:1,jsonrpc:"2.0",method:"test",params:[]});await z(e,Object.assign(Object.assign({},X),{body:r}))}this.onOpen()}catch(r){const i=this.parseError(r);throw this.events.emit("register_error",i),this.onClose(),i}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const r=typeof e.data=="string"?be(e.data):e.data;this.events.emit("payload",r)}onError(e,r){const i=this.parseError(r),a=i.message||i.toString(),o=Ke(e,a);this.events.emit("payload",o)}parseError(e,r=this.url){return Oe(e,r,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>k&&this.events.setMaxListeners(k)}}export{bt as H,lt as I,pt as J,q as a,dt as b,Pe as c,Oe as d,yt as e,Ke as f,ot as g,ut as h,ht as i,it as j,ne as k,Qe as l,We as m,Z as p,be as s};
