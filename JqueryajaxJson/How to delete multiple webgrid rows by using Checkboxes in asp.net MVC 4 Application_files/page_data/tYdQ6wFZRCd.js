if (self.CavalryLogger) { CavalryLogger.start_js(["3AULM"]); }

__d('XUISpinner.react',['cx','fbt','BrowserSupport','React','UserAgent','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes,m=c('BrowserSupport').hasCSSAnimations()&&!(c('UserAgent').isEngine('Trident < 6')||c('UserAgent').isEngine('Gecko < 39')||c('UserAgent').isBrowser('Safari < 6'));j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.render=function(){'use strict';var o="img"+(' '+"_55ym")+(this.props.size=='small'?' '+"_55yn":'')+(this.props.size=='large'?' '+"_55yq":'')+(this.props.background=='light'?' '+"_55yo":'')+(this.props.background=='dark'?' '+"_55yp":'')+(this.props.showOnAsync?' '+"_5tqs":'')+(!m?' '+"_5d9-":'')+(m&&this.props.paused?' '+"_2y32":'');return (c('React').createElement('span',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,o),'aria-label':i._("Loading..."),'aria-busy':true})));};function n(){'use strict';j.apply(this,arguments);}n.propTypes={paused:l.bool,showOnAsync:l.bool,size:l.oneOf(['small','large']),background:l.oneOf(['light','dark'])};n.defaultProps={showOnAsync:false,size:'small',background:'light'};f.exports=n;}),null);
__d('ImmutableValue',['invariant','isNode','keyOf'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('keyOf')({_DONT_EVER_TYPE_THIS_SECRET_KEY:null});function j(k){!(k===j[i])?h(0):void 0;}j.mergeAllPropertiesInto=function(k,l){var m=l.length;for(var n=0;n<m;n++)Object.assign(k,l[n]);};j.deepFreezeRootNode=function(k){if(c('isNode')(k))return;Object.freeze(k);for(var l in k)if(k.hasOwnProperty(l))j.recurseDeepFreeze(k[l]);Object.seal(k);};j.recurseDeepFreeze=function(k){if(c('isNode')(k)||!j.shouldRecurseFreeze(k))return;Object.freeze(k);for(var l in k)if(k.hasOwnProperty(l))j.recurseDeepFreeze(k[l]);Object.seal(k);};j.shouldRecurseFreeze=function(k){return (typeof k==='object'&&!(k instanceof j)&&k!==null);};j._DONT_EVER_TYPE_THIS_SECRET_KEY=Math.random();f.exports=j;}),null);
__d('mergeHelpers',['invariant','keyMirror','FbtResult'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=36,j=function l(m){return typeof m!=='object'||m instanceof Date||m===null||m instanceof c('FbtResult');},k={MAX_MERGE_DEPTH:i,isTerminal:j,normalizeMergeArg:function l(m){return m===undefined||m===null?{}:m;},checkMergeArrayArgs:function l(m,n){!(Array.isArray(m)&&Array.isArray(n))?h(0):void 0;},checkMergeObjectArgs:function l(m,n){k.checkMergeObjectArg(m);k.checkMergeObjectArg(n);},checkMergeObjectArg:function l(m){!(!j(m)&&!Array.isArray(m))?h(0):void 0;},checkMergeIntoObjectArg:function l(m){!((!j(m)||typeof m==='function')&&!Array.isArray(m))?h(0):void 0;},checkMergeLevel:function l(m){!(m<i)?h(0):void 0;},checkArrayStrategy:function l(m){!(m===undefined||m in k.ArrayStrategies)?h(0):void 0;},ArrayStrategies:c('keyMirror')({Clobber:true,IndexByIndex:true})};f.exports=k;}),null);
__d('ImmutableObject',['invariant','ImmutableValue','keyOf','mergeHelpers'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('mergeHelpers').checkMergeObjectArgs,l=c('mergeHelpers').isTerminal,m=c('keyOf')({_DONT_EVER_TYPE_THIS_SECRET_KEY:null});function n(q){!(q instanceof c('ImmutableValue'))?h(0):void 0;}i=babelHelpers.inherits(o,c('ImmutableValue'));j=i&&i.prototype;function o(){j.constructor.call(this,c('ImmutableValue')[m]);c('ImmutableValue').mergeAllPropertiesInto(this,arguments);}o.create=function(){var q=Object.create(o.prototype);o.apply(q,arguments);return q;};o.set=function(q,r){n(q);!(typeof r==='object'&&r!==undefined&&!Array.isArray(r))?h(0):void 0;return new o(q,r);};o.setProperty=function(q,r,s){var t={};t[r]=s;return o.set(q,t);};o.deleteProperty=function(q,r){var s={};for(var t in q)if(t!==r&&q.hasOwnProperty(t))s[t]=q[t];return new o(s);};o.setDeep=function(q,r){n(q);return p(q,r);};o.values=function(q){return Object.keys(q).map(function(r){return q[r];});};function p(q,r){k(q,r);var s={},t=Object.keys(q);for(var u=0;u<t.length;u++){var v=t[u];if(!r.hasOwnProperty(v)){s[v]=q[v];}else if(l(q[v])||l(r[v])){s[v]=r[v];}else s[v]=p(q[v],r[v]);}var w=Object.keys(r);for(u=0;u<w.length;u++){var x=w[u];if(q.hasOwnProperty(x))continue;s[x]=r[x];}return (q instanceof c('ImmutableValue')?new o(s):r instanceof c('ImmutableValue')?new o(s):s);}f.exports=o;}),null);
__d('keyMirrorRecursive',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(l,m){return j(l,m);}function j(l,m){var n={},o;!k(l)?h(0):void 0;for(o in l){if(!l.hasOwnProperty(o))continue;var p=l[o],q=m?m+'.'+o:o;if(k(p)){p=j(p,q);}else p=q;n[o]=p;}return n;}function k(l){return l instanceof Object&&!Array.isArray(l);}f.exports=i;}),null);
__d('PagePluginEvents',['ImmutableObject','keyMirrorRecursive'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=new (c('ImmutableObject'))(c('keyMirrorRecursive')({page_plugin:{tab:{configured:'',click:'',render:''},messages:{send:'',logged_out:'',invalid_height:''}}}));f.exports=h;}),null);
__d("XPagePluginLoggingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/page\/logging\/",{});}),null);
__d('PagePluginLogger',['AsyncRequest','XPagePluginLoggingController'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){this.$PagePluginLogger1=i;this.$PagePluginLogger2=j;}h.prototype.notify=function(i,j,k){var l=c('XPagePluginLoggingController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(l).setMethod('POST').setData({event_name:i,page_id:this.$PagePluginLogger1,tab:j,data:Object.assign(k?k:{},{refererURL:this.$PagePluginLogger2})}).send();};f.exports=h;}),null);
__d('Grid.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;n.prototype.render=function(){'use strict';var p=this.props,q=p.alignh,r=p.alignv,s=p.children,t=p.cols,u=p.fixed,v=p.spacing,w=c('React').Children.count(s),x=[],y=[],z=0;c('React').Children.forEach(s,function(aa,ba){if(aa===null||aa===undefined)return;var ca=aa.type===o;z+=ca?Math.max(aa.props.colSpan||0,1):1;var da=z===t?"_51mw":'';if(!ca){aa=c('React').createElement(o,{alignh:q,alignv:r,className:c('joinClasses')(v,da),key:aa.key||ba},aa);}else aa=c('React').cloneElement(aa,{key:aa.key||ba,alignh:aa.props.alignh||q,alignv:aa.props.alignv||r,className:c('joinClasses')(aa.props.className,v,da)});y.push(aa);if(z%t===0||ba+1===w){if(u&&z<t){for(var ea=z;ea<t;ea++)y.push(c('React').createElement(o,{key:ba+ea}));z=t;}x.push(c('React').createElement('tr',{className:"_51mx",key:ba},y));y=[];z=0;}});return (c('React').createElement('table',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"uiGrid"+(' '+"_51mz")+(u?' '+"_5f0n":'')),cellSpacing:'0',cellPadding:'0'}),c('React').createElement('tbody',null,x)));};function n(){'use strict';i.apply(this,arguments);}n.propTypes={cols:m.number.isRequired,fixed:m.bool,alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right']),spacing:m.string};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;o.prototype.render=function(){'use strict';var p=c('joinClasses')(this.props.className,"_51m-"+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":''));return (c('React').createElement('td',babelHelpers['extends']({},this.props,{className:p})));};function o(){'use strict';k.apply(this,arguments);}o.propTypes={alignv:m.oneOf(['top','middle','bottom']),alignh:m.oneOf(['left','center','right'])};n.GridItem=o;f.exports=n;}),null);
__d('PluginTabItem.react',['cx','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.tab.key;return (c('React').createElement('div',{className:"_eg_"+(this.props.activeTabKey===l?' '+"_eh2":''),onClick:function(){return this.props.onSelected(l);}.bind(this)},c('React').createElement('div',{className:"_eh3"},this.props.tab.title)));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('PluginTabControl.react',['cx','Grid.react','PluginTabItem.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('Grid.react').GridItem;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){return (c('React').createElement(c('Grid.react'),{className:"_4v3l",cols:this.props.tabs.length,fixed:true},this.props.tabs.map(function(m){return (c('React').createElement(k,{className:"_4v3m",key:m.key},c('React').createElement(c('PluginTabItem.react'),{activeTabKey:this.props.activeTabKey,tab:m,onSelected:this.props.onTabSelected})));}.bind(this))));};function l(){i.apply(this,arguments);}f.exports=l;}),null);
__d("XPluginTabAsyncRendererController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/plugin\/tab\/renderer\/",{});}),null);
__d('PluginTabFetcher.react',['csx','cx','AsyncRequest','DOM','DOMQuery','Event','React','ReactDOM','XPluginTabAsyncRendererController','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(m,n){k.constructor.call(this,m,n);this.state={isFetchingComponent:false,asyncContentLoaded:false};this.hasMoreContent=true;this.isLoadingContent=false;}l.prototype.componentWillReceiveProps=function(m){if(m.isActive===this.props.isActive||!m.isActive)return;this.$PluginTabFetcher1();};l.prototype.componentDidMount=function(){if(this.props.isActive)this.$PluginTabFetcher1();};l.prototype.$PluginTabFetcher2=function(){var m=this.refs.container,n=m.clientHeight,o=m.children[0].clientHeight,p=m.scrollTop,q=100;if(!this.isLoadingContent&&this.hasMoreContent&&p+n+q>o){this.isLoadingContent=true;this.$PluginTabFetcher3();}};l.prototype.$PluginTabFetcher3=function(){var m=c('XPluginTabAsyncRendererController').getURIBuilder().getURI(),n=this.props.tab.configData;new (c('AsyncRequest'))().setURI(m).setMethod('POST').setData({cursor:this.cursor,config_json:JSON.stringify(n),key:this.props.tab.key}).setHandler(function(o){this.setState({isFetchingComponent:false,asyncContentLoaded:true},function(){var p=o.payload;this.isLoadingContent=false;if(this.hasMoreContent){var q=c('DOMQuery').scry(this.refs.container,"._1_lk"),r=q[q.length-1];c('DOM').appendContent(r,p.content.markup);}}.bind(this));}.bind(this)).send();};l.prototype.$PluginTabFetcher4=function(){this.scrollListener=c('Event').listen(this.refs.container,'scroll',function(){if(this.scrollTimeout){clearTimeout(this.scrollTimeout);this.scrollTimeout=null;}this.scrollTimeout=setTimeout(function(){return this.$PluginTabFetcher2();}.bind(this),250);}.bind(this));var m=c('DOMQuery').find(this.refs.container,"._10b6");c('Event').listen(m,'noMoreContent',function(){this.hasMoreContent=false;this.scrollListener.remove();}.bind(this));c('Event').listen(m,'setCursor',function(n){this.cursor=n.getData();}.bind(this));};l.prototype.$PluginTabFetcher1=function(){if(!this.state.asyncContentLoaded&&!this.state.isFetchingComponent){this.setState({isFetchingComponent:true});var m=c('XPluginTabAsyncRendererController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(m).setMethod('POST').setData({config_json:JSON.stringify(this.props.tab.configData),key:this.props.tab.key}).setHandler(function(n){this.setState({isFetchingComponent:false,asyncContentLoaded:true},function(){var o=n.payload;c('DOM').setContent(c('ReactDOM').findDOMNode(this.refs.container),o.content.markup);if(this.props.tab.canLoadMore){this.cursor='';this.$PluginTabFetcher4();}}.bind(this));}.bind(this)).send();}};l.prototype.render=function(){return (c('React').createElement('div',{className:!this.props.isActive?"hidden_elem":''},c('React').createElement('div',{style:{maxHeight:this.props.tabHeight+'px'},className:"_10b4"+(this.state.isFetchingComponent?' '+"hidden_elem":''),ref:'container'}),c('React').createElement('div',{className:"_10b5"+(!this.state.isFetchingComponent?' '+"hidden_elem":'')},c('React').createElement(c('XUISpinner.react'),{className:"_4g7o",size:'large'}))));};f.exports=l;}),null);
__d('PluginTabContainer.react',['cx','PluginTabControl.react','PluginTabFetcher.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l,m){j.constructor.call(this,l,m);this.state={activeTabKey:this.props.activeTabKey};}k.prototype.componentDidMount=function(){this.props.tabs.map(function(l){return this.onTabLoaded(l);}.bind(this));};k.prototype.onTabLoaded=function(l){};k.prototype.onTabSelected=function(l){this.setState({activeTabKey:l});};k.prototype.render=function(){var l=this.props.tabs.length;if(l===0)return null;return (c('React').createElement('div',null,l>1?c('React').createElement(c('PluginTabControl.react'),{tabs:this.props.tabs,activeTabKey:this.state.activeTabKey,onTabSelected:function(m){return this.onTabSelected(m);}.bind(this)}):null,c('React').createElement('div',{className:"_2hkj"},this.props.tabs.map(function(m){return (c('React').createElement(c('PluginTabFetcher.react'),{key:m.key,tab:m,isActive:m.key===this.state.activeTabKey,tabHeight:this.props.tabHeight}));}.bind(this)))));};f.exports=k;}),null);
__d('PagePluginTabContainer.react',['PagePluginEvents','PagePluginLogger','PluginTabContainer.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('PluginTabContainer.react'));i=h&&h.prototype;function j(k,l){i.constructor.call(this,k,l);this.$PagePluginTabContainer1=new (c('PagePluginLogger'))(k.pageID,k.refererURI);}j.prototype.onTabLoaded=function(k){this.$PagePluginTabContainer1.notify(c('PagePluginEvents').page_plugin.tab.configured,k.key);};j.prototype.onTabSelected=function(k){this.$PagePluginTabContainer1.notify(c('PagePluginEvents').page_plugin.tab.click,k);i.onTabSelected.call(this,k);};f.exports=j;}),null);