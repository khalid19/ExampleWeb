(function(){var l=this;function m(a){return void 0!==a}
function p(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function q(a){return"array"==aa(a)}
function r(a){return"string"==typeof a}
function t(a){return"function"==aa(a)}
function ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function fa(a,b,c){fa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return fa.apply(null,arguments)}
function u(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var ga=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&m(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.H=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var x;var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ia=/&/g,ka=/</g,la=/>/g,ma=/"/g,na=/'/g,oa=/\x00/g,pa=/[\x00&<>"']/;
function qa(a){var b=new RegExp("/".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"");return a.replace(b,"")}
function ra(a,b){return a<b?-1:a>b?1:0}
;var sa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ta=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},va=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};function wa(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function xa(a){a.classList?a=a.classList.contains("playing"):(a=wa(a),a=0<=sa(a,"playing"));return a}
function za(){var a=document.body;a.classList?a.classList.add("playing"):xa(a)||(a.className+=0<a.className.length?" playing":"playing")}
function Ba(){var a=document.body;a.classList?a.classList.remove("playing"):xa(a)&&(a.className=ua(wa(a),function(a){return"playing"!=a}).join(" "))}
;function y(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ea(a){var b=Fa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;var z;a:{var Ga=l.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){z=Ha;break a}}z=""}function A(a){return-1!=z.indexOf(a)}
;function B(){this.a="";this.b=Ia}
B.prototype.w=!0;B.prototype.v=function(){return this.a};
function Ja(a){return a instanceof B&&a.constructor===B&&a.b===Ia?a.a:"type_error:SafeUrl"}
var Ka=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function La(a){if(a instanceof B)return a;a=a.w?a.v():String(a);Ka.test(a)||(a="about:invalid#zClosurez");return Ma(a)}
var Ia={};function Ma(a){var b=new B;b.a=a;return b}
Ma("about:blank");function C(){this.a="";this.b=Na}
C.prototype.w=!0;C.prototype.v=function(){return this.a};
var Na={};function D(a){var b=new C;b.a=a;return b}
D("<!DOCTYPE html>");D("");D("<br>");function E(a,b){this.a=m(a)?a:0;this.b=m(b)?b:0}
E.prototype.ceil=function(){this.a=Math.ceil(this.a);this.b=Math.ceil(this.b);return this};
E.prototype.floor=function(){this.a=Math.floor(this.a);this.b=Math.floor(this.b);return this};
E.prototype.round=function(){this.a=Math.round(this.a);this.b=Math.round(this.b);return this};function Oa(a){Oa[" "](a);return a}
Oa[" "]=function(){};
function Pa(a,b){try{return Oa(a[b]),!0}catch(c){}return!1}
function Qa(a,b){var c=Ra;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Sa=A("Opera"),F=A("Trident")||A("MSIE"),Ta=A("Edge"),Ua=Ta||F,G=A("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),J=-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge");function Va(){var a=l.document;return a?a.documentMode:void 0}
var Wa;a:{var Xa="",Ya=function(){var a=z;if(G)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ta)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(J)return/WebKit\/(\S+)/.exec(a);if(Sa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ya&&(Xa=Ya?Ya[1]:"");if(F){var Za=Va();if(null!=Za&&Za>parseFloat(Xa)){Wa=String(Za);break a}}Wa=Xa}var $a=Wa,Ra={};
function K(a){return Qa(a,function(){for(var b=0,c=ha(String($a)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=ra(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||ra(0==g[2].length,0==h[2].length)||ra(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var ab=l.document,bb=ab&&F?Va()||("CSS1Compat"==ab.compatMode?parseInt($a,10):5):void 0;!G&&!F||F&&9<=Number(bb)||G&&K("1.9.1");F&&K("9");function cb(a,b){var c;c=b instanceof B?b:La(b);a.href=Ja(c)}
;function L(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function db(a){return eb(a,function(a){if(a="A"==a.nodeName)a=!0;return a},void 0)}
function eb(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function M(a){this.a=a||l.document||document}
M.prototype.createElement=function(a){return this.a.createElement(String(a))};
M.prototype.isElement=function(a){return ca(a)&&1==a.nodeType};var fb=p("yt.dom.getNextId_");if(!fb){fb=function(){return++gb};
v("yt.dom.getNextId_",fb);var gb=0};var ib=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",ib);v("yt.tokens_",window.yt&&window.yt.tokens_||{});var jb=window.yt&&window.yt.msgs_||p("window.ytcfg.msgs")||{};v("yt.msgs_",jb);function kb(a){lb(ib,arguments)}
function N(a,b){return a in ib?ib[a]:b}
function nb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(d){var b=d,c=p("yt.logging.errors.log");c?c(b,void 0,void 0,void 0,void 0):(c=N("ERRORS",[]),c.push([b,void 0,void 0,void 0,void 0]),kb("ERRORS",c));throw d;}}:a}
function lb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
;function O(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.a=a;for(var b in a)b in ob||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&
(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
O.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
O.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
O.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};
var ob={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Fa=p("yt.events.listeners_")||{};v("yt.events.listeners_",Fa);var pb=p("yt.events.counter_")||{count:0};v("yt.events.counter_",pb);function qb(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ea(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function P(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=qb(a,b,c,d);if(!e){var e=++pb.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new O(d);if(!eb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new O(b);
b.currentTarget=a;return c.call(a,b)};
g=nb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Fa[e]=[a,b,c,g,d]}}}
;function rb(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function sb(a){a=String(a);if(rb(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
;function tb(){}
var ub="function"==typeof Uint8Array,vb=[];function Q(a){var b=wb;if(a<b.c){a+=b.f;var c=b.a[a];return c===vb?b.a[a]=[]:c}c=b.b[a];return c===vb?b.b[a]=[]:c}
tb.prototype.toString=function(){return this.a.toString()};function xb(a){a||(a=[]);this.f=-1;this.a=a;a:{if(this.a.length){a=this.a.length-1;var b=this.a[a];if(b&&"object"==typeof b&&!q(b)&&!(ub&&b instanceof Uint8Array)){this.c=a- -1;this.b=b;break a}}this.c=Number.MAX_VALUE}}
w(xb,tb);var yb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zb(a){return a?decodeURI(a):a}
function Ab(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Bb=/#|$/,Cb=/[?&]($|#)/;function Db(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function Eb(){var a=Fb;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""}
;function Gb(a,b){this.a=a;this.b=b}
function Hb(a,b){this.url=a;this.A=!!b;this.depth=null}
;function Ib(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}
;function Jb(a,b,c,d,e){this.h=c||4E3;this.c=a||"&";this.i=b||",$";this.f=m(d)?d:"trn";this.m=e||null;this.g=!1;this.b={};this.l=0;this.a=[]}
function Kb(a,b){var c={};c[a]=b;return[c]}
function R(a,b,c,d){a.a.push(b);a.b[b]=Kb(c,d)}
function Lb(a,b,c,d){b=b+"//"+c+d;var e=Mb(a)-d.length-0;if(0>e)return"";a.a.sort(function(a,b){return a-b});
d=null;c="";for(var f=0;f<a.a.length;f++)for(var g=a.a[f],h=a.b[g],k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}var n=Nb(h[k],a.c,a.i);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.c;break}else a.g&&(c=e,n[c-1]==a.c&&--c,b+=n.substr(0,c),c=a.c,e=0);d=null==d?g:d}}f="";a.f&&null!=d&&(f=c+a.f+"="+(a.m||d));return b+f+""}
function Mb(a){if(!a.f)return a.h;var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return a.h-a.f.length-b-a.c.length-1}
function Nb(a,b,c,d,e){var f=[];Db(a,function(a,h){var k=Ob(a,b,c,d,e);k&&f.push(h+"="+k)});
return f.join(b)}
function Ob(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Ob(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Nb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
;function Pb(a,b,c,d,e,f){try{var g;c instanceof Jb?g=c:(g=new Jb,Db(c,function(a,b){var c=g,d=c.l++,e=Kb(b,a);c.a.push(d);c.b[d]=e}));
if((d?a.g:Math.random())<(e||a.a)){var h=Lb(g,a.f,a.b,a.c+b+"&");"undefined"===typeof f?Qb(h):Qb(h,f)}}catch(k){}}
function Qb(a,b){l.google_image_requests||(l.google_image_requests=[]);var c=l.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};
Ib(c,"load",d);Ib(c,"error",d)}c.src=a;l.google_image_requests.push(c)}
;function Rb(a,b,c){this.c=a;this.g=b;this.a=c;this.f=this.b}
function Sb(a,b,c){this.message=a;this.a=b||"";this.b=c||-1}
function Tb(a,b){var c;try{c=b()}catch(f){var d=a.a;try{var e=Ub(f),d=a.f.call(a,"osd_proto::reqm_int",e,void 0,void 0)}catch(g){a.b("pAR",g)}if(!d)throw f;}finally{}return c}
function Vb(a){var b=Wb;return function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return Tb(b,function(){return a.apply(void 0,c)})}}
Rb.prototype.b=function(a,b,c,d,e){try{var f=e||this.g,g=new Jb;g.g=!0;R(g,1,"context",a);b instanceof Sb||(b=Ub(b));R(g,2,"msg",b.message.substring(0,512));b.a&&R(g,3,"file",b.a);0<b.b&&R(g,4,"line",b.b.toString());b={};if(d)try{d(b)}catch(ba){}d=[b];g.a.push(5);g.b[5]=d;var h;e=l;d=[];var k,n=null;do{b=e;var ya;try{ya=!!b&&null!=b.location.href&&Pa(b,"foo")}catch(ba){ya=!1}ya?(k=b.location.href,n=b.document&&b.document.referrer||null):(k=n,n=null);d.push(new Hb(k||""));try{e=b.parent}catch(ba){e=
null}}while(e&&b!=e);k=0;for(var H=d.length-1;k<=H;++k)d[k].depth=H-k;b=l;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var Aa=d[k];Aa.url||(Aa.url=b.location.ancestorOrigins[k-1]||"",Aa.A=!0)}for(var Ca=new Hb(l.location.href,!1),Da=d.length-1,H=Da;0<=H;--H){var I=d[H];if(I.url&&!I.A){Ca=I;break}}var I=null,Ic=d.length&&d[Da].url;0!=Ca.depth&&Ic&&(I=d[Da]);h=new Gb(Ca,I);h.b&&R(g,6,"top",h.b.url||"");R(g,7,"url",h.a.url||"");Pb(this.c,
f,g,!1,c)}catch(ba){try{Pb(this.c,f,{context:"ecmserr",rctx:a,msg:Xb(ba),url:h.a.url},!1,c)}catch(dd){}}return this.a};
function Ub(a){return new Sb(Xb(a),a.fileName,a.lineNumber)}
function Xb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
;var Yb=document,S=window;var Zb,Wb;Zb=new function(){this.f="http:"===S.location.protocol?"http:":"https:";this.b="pagead2.googlesyndication.com";this.c="/pagead/gen_204?id=";this.a=.01;this.g=Math.random()};
Wb=new Rb(Zb,"jserror",!0);function $b(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?m(void 0)?$b(a,b,void 0,d):a:c}
;var ac=[0,2,1],bc=null;function cc(){var a=window.event||bc;if(!a)return null;var b;(b=a.which?1<<ac[a.which-1]:a.button)&&a.shiftKey&&(b|=8);b&&a.altKey&&(b|=16);b&&a.ctrlKey&&(b|=32);return b}
document.addEventListener&&document.addEventListener("mousedown",function(a){bc=a},!0);
window.mb=function(a){if(a){var b=cc();b&&(window.css?css(a.id,"mb",b,void 0,void 0):a&&(a.href=$b(a.href,"mb",b,void 0)))}};function T(){this.c=this.c;this.a=this.a}
T.prototype.c=!1;T.prototype.dispose=function(){this.c||(this.c=!0,this.i())};
T.prototype.i=function(){if(this.a)for(;this.a.length;)this.a.shift()()};
function dc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var ec=!F||9<=Number(bb),fc=F&&!K("9");!J||K("528");G&&K("1.9b")||F&&K("8")||Sa&&K("9.5")||J&&K("528");G&&!K("8")||F&&K("9");function gc(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=this.c=!1}
gc.prototype.stopPropagation=function(){this.c=!0};
gc.prototype.preventDefault=function(){this.defaultPrevented=!0};function U(a,b){gc.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.charCode=this.keyCode=this.clientY=this.clientX=0;this.shiftKey=this.altKey=this.ctrlKey=!1;this.a=this.state=null;a&&this.init(a,b)}
w(U,gc);
U.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;var e=a.relatedTarget;e?G&&(Pa(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY);this.keyCode=
a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.state=a.state;this.a=a;a.defaultPrevented&&this.preventDefault()};
U.prototype.stopPropagation=function(){U.u.stopPropagation.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};
U.prototype.preventDefault=function(){U.u.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,fc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var hc="closure_listenable_"+(1E6*Math.random()|0),ic=0;function jc(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.s=!!d;this.b=e;this.key=++ic;this.j=this.o=!1}
function kc(a){a.j=!0;a.listener=null;a.a=null;a.src=null;a.b=null}
;function lc(a){this.src=a;this.a={};this.b=0}
lc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=mc(e,b,c,d);return-1<b?(kc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
function mc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.j&&f.listener==b&&f.s==!!c&&f.b==d)return e}return-1}
;var nc="closure_lm_"+(1E6*Math.random()|0),oc={},pc=0;
function qc(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)qc(a,b[f],c,d,e);return null}c=rc(c);if(a&&a[hc])a=sc(a,b,c,d,e);else{f=c;if(!b)throw Error("Invalid event type");c=!!d;var g=tc(a);g||(a[nc]=g=new lc(a));var h=g,k=b.toString(),g=h.a[k];g||(g=h.a[k]=[],h.b++);var n=mc(g,f,d,e);-1<n?(d=g[n],d.o=!1):(d=new jc(f,h.src,k,!!d,e),d.o=!1,g.push(d));if(!d.a){e=uc();d.a=e;e.src=a;e.listener=d;if(a.addEventListener)a.addEventListener(b.toString(),e,c);else if(a.attachEvent)a.attachEvent(vc(b.toString()),
e);else throw Error("addEventListener and attachEvent are unavailable.");pc++}a=d}return a}
function uc(){var a=wc,b=ec?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function xc(a){if("number"!=typeof a&&a&&!a.j){var b=a.src;if(b&&b[hc])b.a(a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.s):b.detachEvent&&b.detachEvent(vc(c),d);pc--;if(c=tc(b)){var d=a.type,e;if(e=d in c.a){e=c.a[d];var f=sa(e,a),g;(g=0<=f)&&Array.prototype.splice.call(e,f,1);e=g}e&&(kc(a),0==c.a[d].length&&(delete c.a[d],c.b--));0==c.b&&(c.src=null,b[nc]=null)}else kc(a)}}}
function vc(a){return a in oc?oc[a]:oc[a]="on"+a}
function yc(a,b,c,d){var e=!0;if(a=tc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.s==c&&!f.j&&(f=zc(f,d),e=e&&!1!==f)}return e}
function zc(a,b){var c=a.listener,d=a.b||a.src;a.o&&xc(a);return c.call(d,b)}
function wc(a,b){if(a.j)return!0;if(!ec){var c=b||p("window.event"),d=new U(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.b;f;f=f.parentNode)c.push(f);for(var f=a.type,g=c.length-1;!d.c&&0<=g;g--){d.b=c[g];var h=yc(c[g],f,!0,d),e=e&&h}for(g=0;!d.c&&g<c.length;g++)d.b=c[g],h=yc(c[g],f,!1,d),e=e&&h}return e}return zc(a,new U(b,this))}
function tc(a){a=a[nc];return a instanceof lc?a:null}
var Ac="__closure_events_fn_"+(1E9*Math.random()>>>0);function rc(a){if(t(a))return a;a[Ac]||(a[Ac]=function(b){return a.handleEvent(b)});
return a[Ac]}
;function V(a){T.call(this);this.f=a;this.b={}}
w(V,T);var Bc=[];function sc(a,b,c,d,e){q(c)||(c&&(Bc[0]=c.toString()),c=Bc);for(var f=0;f<c.length;f++){var g=qc(b,c[f],d||a.handleEvent,e||!1,a.f||a);if(!g)break;a.b[g.key]=g}return a}
function Cc(a){y(a.b,function(a,c){this.b.hasOwnProperty(c)&&xc(a)},a);
a.b={}}
V.prototype.i=function(){V.u.i.call(this);Cc(this)};
V.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function W(a,b,c){T.call(this);this.f=a;this.l=b;this.C=c;this.h=0;this.b={};this.g=new V(this);a=u(dc,this.g);this.c?m(void 0)?a.call(void 0):a():(this.a||(this.a=[]),this.a.push(m(void 0)?fa(a,void 0):a));Dc(this)}
w(W,T);function Dc(a){ta(a.C,function(a){sc(this.g,a.element,"mousedown",this.D,!0);sc(this.g,a.element,"mouseup",u(this.G,a),!0)},a);
sc(a.g,a.l,"mouseenter",a.F,void 0)}
function Ec(a,b){y(a.b,function(a,d){for(var e=b,f=e.search(Bb),g=0,h,k=[];0<=(h=Ab(e,g,d,f));)k.push(e.substring(g,h)),g=Math.min(e.indexOf("&",h)+1||f,f);k.push(e.substr(g));e=[k.join("").replace(Cb,"$1"),"&",d];null!=a&&e.push("=",encodeURIComponent(String(a)));e[1]&&(f=e[0],g=f.indexOf("#"),0<=g&&(e.push(f.substr(g)),e[0]=f=f.substr(0,g)),g=f.indexOf("?"),0>g?e[1]="?":g==f.length-1&&(e[1]=void 0));b=e.join("")});
return b}
W.prototype.D=function(){this.m=ga()};
W.prototype.G=function(a,b){var c=a.element;1==(this.f&1)&&(0==this.h&&this.h++,this.b.nm=this.h);2==(this.f&2)&&(this.b.nb=a.B);if(8==(this.f&8)){var d=this.l,e=L(d),f=new E(0,0),g;g=e?L(e):document;g=!F||9<=Number(bb)||"CSS1Compat"==(g?new M(L(g)):x||(x=new M)).a.compatMode?g.documentElement:g.body;if(d!=g){var h;b:{try{h=d.getBoundingClientRect()}catch(k){h={left:0,top:0,right:0,bottom:0};break b}F&&d.ownerDocument.body&&(d=d.ownerDocument,h.left-=d.documentElement.clientLeft+d.body.clientLeft,
h.top-=d.documentElement.clientTop+d.body.clientTop)}d=(e?new M(L(e)):x||(x=new M)).a;e=d.scrollingElement?d.scrollingElement:J||"CSS1Compat"!=d.compatMode?d.body||d.documentElement:d.documentElement;d=d.parentWindow||d.defaultView;e=F&&K("10")&&d.pageYOffset!=e.scrollTop?new E(e.scrollLeft,e.scrollTop):new E(d.pageXOffset||e.scrollLeft,d.pageYOffset||e.scrollTop);f.a=h.left+e.a;f.b=h.top+e.b}this.b.nx=Math.round(b.clientX-f.a);this.b.ny=Math.round(b.clientY-f.b)}16==(this.f&16)&&null!=this.m&&(f=
ga()-this.m,this.b.clkt=f);512==(this.f&512)&&(f=cc())&&(this.b.mb=f);"A"==c.tagName.toUpperCase()&&cb(c,Ec(this,c.href))};
W.prototype.F=function(){this.h++};if(Yb&&Yb.URL){var Fb=Yb.URL,Fc=!(Fb&&0<Eb().length);Wb.a=Fc};function Gc(a,b){this.b=a||0;this.a=b||""}
Gc.prototype.toString=function(){var a=""+this.b;this.a&&(a+="-"+this.a);return a};
function Hc(a){var b=[];y(a,function(a,d){var e=encodeURIComponent(d),f=a;r(f)&&(f=encodeURIComponent(f));b.push(e+"="+f)});
b.push("24="+(new Date).getTime());return b.join("\n")}
var Jc=0,Kc=0;function Lc(){var a=0,b=S;try{if(b&&b.Goog_AdSense_getAdAdapterInstance)return b}catch(d){}var c=b.location&&b.location.ancestorOrigins;if(m(c)&&(!c||!c.length))return null;for(;b&&5>a;){try{if(b.google_osd_static_frame)return b}catch(d){}try{if(b.aswift_0&&b.aswift_0.google_osd_static_frame)return b.aswift_0}catch(d){}a++;b=b!=b.parent?b.parent:null}return null}
function Mc(a,b,c,d,e){if(10<Kc)S.clearInterval(Jc);else if(++Kc,S.postMessage&&(b.b||b.a)){var f=Lc();if(f){var g={};b.b&&(g[4]=b.b);b.a&&(g[12]=b.a);g[0]="goog_request_monitoring";g[6]=a;g[16]=c;d&&d.length&&(g[17]=d.join(","));e&&(g[19]=e);try{var h=Hc(g);f.postMessage(h,"*")}catch(k){}}}}
;function Nc(a,b,c){if(c.data){var d=c.data;if(r(d)){c={};for(var d=d.split("\n"),e=0;e<d.length;e++){var f=d[e].indexOf("=");if(!(0>=f)){var g=Number(d[e].substr(0,f)),f=d[e].substr(f+1);switch(g){case 5:case 8:case 11:case 15:case 16:case 18:f="true"==f;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:f=Number(f);break;case 3:case 19:if(t(decodeURIComponent))try{f=decodeURIComponent(f)}catch(h){throw Error("Error: URI malformed: "+f);}break;case 17:f=va(decodeURIComponent(f).split(","),
Number)}c[g]=f}}c=c[0]?c:null}else c=null;c&&(d=new Gc(c[4],c[12]),a&&(a.b||a.a)&&(d.b||d.a)&&(a.a||d.a?a.a==d.a:(a.b||d.b)&&a.b==d.b)&&"goog_update_data"==c[0]&&(a=c[7],"number"==typeof a&&b(a)))}}
;var Oc={"pyv-embed":2,"pyv-embed-container":2,"pyv-embed-channel-image-overlay":19,"pyv-embed-channel-name-overlay":20,"pyv-embed-channel-banner-overlay":9,"pyv-embed-overlay":21,"pyv-embed-headline-overlay":0,"pyv-embed-description-overlay":7},Pc=!1,Qc=!1,X=null,wb=new xb,Y=null,Rc=!1,Sc=null,Tc=null;function Uc(){var a=0;Z("osd-1")?a=.01:Z("osd-25")?a=.25:Z("osd-50")?a=.5:Z("osd-75")&&(a=.75);null!=Tc&&Rc&&!Pc&&(Tc>=a?Y.playVideo():Y.pauseVideo())}
function Vc(){var a=15E3-1E3*Y.getCurrentTime();return 0<=a?a:0}
function Wc(){Y.mute();Z("osd")?(Rc=!0,Uc()):Y.playVideo()}
function Xc(a){if(Z("osd"))switch(a.data){case YT.PlayerState.PLAYING:null===X&&(0==Vc()?Yc():(za(),X=l.setTimeout(Yc,Vc())));break;case YT.PlayerState.PAUSED:null!=X&&(l.clearTimeout(X),X=null);0==Vc()&&Yc();break;case YT.PlayerState.ENDED:Ba(),Pc=!0}else switch(a.data){case YT.PlayerState.PLAYING:Qc||(za(),l.setTimeout(Yc,15E3),Qc=!0);break;case YT.PlayerState.ENDED:Ba()}}
function Yc(){Ba();Pc=!0;Y.stopVideo()}
function Zc(){var a=N("PLAYER_CONFIG",void 0),b=N("VIDEO_ID",void 0),c=N("HOST",void 0);ca(a)&&r(b)&&ca(YT)&&t(YT.ready)&&t(YT.Player)&&YT.ready(function(){var d={height:"100%",width:"100%",videoId:b,playerVars:a,events:{onReady:Wc,onStateChange:Xc}};r(c)&&(d.host=c);Y=new YT.Player("iframe-player",d)})}
function $c(a){Tc=a;null===Y?Zc():Uc()}
function ad(){var a=Q(1);zb(a.match(yb)[3]||null)||(0==a.lastIndexOf("/",0)&&(a=qa(a)),a="https://googleads.g.doubleclick.net/"+a);var b=[],c=0;null!=Q(2)&&(c=Q(2));y(Oc,function(c,e){var f;f=document;if((f=r(e)?f.getElementById(e):e)&&(Z("background_click")||document.body.id!=e)&&(Z("container_click")||"pyv-embed-container"!=e)){var g=Z("background_click")||Z("container_click");"a"==f.nodeName.toLowerCase()?(cb(f,a),g||P(f,"click",bd,!0)):(P(f,"click",u(cd,a)),P(f,"click",bd,!0));b.push({element:f,
B:c})}});
document.body&&!Z("dss")&&(Sc=new W(c,document.body,b))}
function Z(a){var b=N("RENDERING_EXPERIMENTS")||[];return q(b)&&0<=sa(b,a)}
function cd(a,b){var c;c=b||window.event;c=c.target||c.srcElement;3==c.nodeType&&(c=c.parentNode);if(a&&c&&!db(c)){c=b||window.event;c.cancelBubble=!0;c.stopPropagation&&c.stopPropagation();null!=Sc&&(a=Ec(Sc,a));var d=a,e={target:"_blank"};c=window;var f;f=d instanceof B?d:La("undefined"!=typeof d.href?d.href:String(d));var d=e.target||d.target,g=[],h;for(h in e)switch(h){case "width":case "height":case "top":case "left":g.push(h+"="+e[h]);break;case "target":case "noreferrer":break;default:g.push(h+
"="+(e[h]?1:0))}h=g.join(",");(A("iPhone")&&!A("iPod")&&!A("iPad")||A("iPad")||A("iPod"))&&c.navigator&&c.navigator.standalone&&d&&"_self"!=d?(h=c.document.createElement("A"),cb(h,f),h.setAttribute("target",d),e.noreferrer&&h.setAttribute("rel","noreferrer"),f=document.createEvent("MouseEvent"),f.initMouseEvent("click",!0,!0,c,1),h.dispatchEvent(f)):e.noreferrer?(h=c.open("",d,h),c=Ja(f),h&&(Ua&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),h.opener=null,pa.test(c)&&(-1!=c.indexOf("&")&&(c=
c.replace(ia,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ka,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(la,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(ma,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(na,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(oa,"&#0;"))),c=D('<META HTTP-EQUIV="refresh" content="0; url='+c+'">'),h.document.write(c instanceof C&&c.constructor===C&&c.b===Na?c.a:"type_error:SafeHtml"),h.document.close())):c.open(Ja(f),d,h)}}
function bd(){Pb(Zb,"pyv_user_click",{},!0,.1,void 0)}
;v("yt.setConfig",kb);v("yt.setMsg",function(a){lb(jb,arguments)});
P(window,"load",function(){Z("osd")||Zc()});
P(window,"message",function(a){try{var b=sb(a.data)}catch(c){return}q(b)&&(wb=new xb(b),null!=Q(1)&&(ad(),Z("osd")&&null!=Q(3)&&(a=window,b=Q(3),b=new Gc(b,null),b.b||b.a)))&&(Ib(a,"message",u(Nc,b,$c)),Jc=S.setInterval(Vb(u(Mc,2,b,void 0,void 0,void 0)),500))});})();
