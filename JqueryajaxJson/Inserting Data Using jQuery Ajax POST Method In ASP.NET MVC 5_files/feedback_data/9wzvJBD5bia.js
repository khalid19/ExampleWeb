if (self.CavalryLogger) { CavalryLogger.start_js(["Uu+Ir"]); }

__d('EncryptedImg',['URI','XHRRequest','EncryptedImgUtils','getCrossOriginTransport'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={insertIntoStyleBackgroundImage:function(m,n){var o=function(p,q){if(p)p.style.backgroundImage="url('"+q+"')";}.bind(undefined,n);h.load(m,o);},insertIntoDOM:function(m,n){var o=function(p,q){if(p)p.setAttribute('src',q);}.bind(undefined,n);h.load(m,o);},load:function(m,n){var o=arguments.length<=2||arguments[2]===undefined?true:arguments[2],p=new (c('URI'))(m),q=c('EncryptedImgUtils').extractKey(p),r=i.bind(undefined,q,n,o);r.includeHeaders=true;new (c('XHRRequest'))(p.toString()).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseType('arraybuffer').setResponseHandler(r).send();},dataUrlPrefix:function(m){var n=arguments.length<=1||arguments[1]===undefined?32:arguments[1];if(!m.startsWith('data:'))return m;var o=m.indexOf(',');if(o<0||o>n)o=n;return m.slice(0,o);}};Object.assign(h,c('EncryptedImgUtils'));f.exports=h;function i(m,n,o,p,q){if(!m){n(l(p,k(q)));return;}var r=j(m),s=new Uint8Array(p),t=s.subarray(2,14);s=s.subarray(14,s.length);var u={name:'AES-GCM',iv:t,tagLength:128};window.crypto.subtle.importKey('raw',r,u,false,['encrypt','decrypt']).then(function(v){return window.crypto.subtle.decrypt(u,v,s);}).then(function(v){if(o){n(l(v,k(q)));}else n(v);})['catch'](function(){});}function j(m){if(typeof m=='string'){var n=new Uint8Array(Math.floor(m.length/2)),o=0;m.replace(/(..)/g,function(p){n[o++]=parseInt(p,16);});return n;}return null;}function k(m){var n='image/jpeg',o=m.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);if(o&&o.length>1)n=o[1];return n;}function l(m,n){var o=new Uint8Array(m),p='';for(var q=0,r=o.byteLength;q<r;++q)p+=String.fromCharCode(o[q]);return 'data:'+n+';base64,'+window.btoa(p);}}),null);
__d('getDOMImageSize',['EncryptedImg','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m){m.onload=null;m.onerror=null;m.onreadystatechange=null;m._callback=null;m._thisObj=null;m._srcStr=null;m.parentNode&&m.parentNode.removeChild(m);}function i(){var m=this;if(m._callback)m._callback.call(m._thisObj,m.naturalWidth||m.width,m.naturalHeight||m.height,m._srcStr);h(m);}function j(){var m=this;if(m.readyState==='complete')i.call(m);}function k(){var m=this;if(m._callback)m._callback.call(m._thisObj,0,0,m._srcStr);h(m);}function l(m,n,o){o=o||null;if(!m){n.call(o,0,0,'');return;}var p=document.body;if(!p){setTimeout(l.bind(this,m,n,o),500);return;}var q;if(typeof m==='string'){q=m;}else if(typeof m==='object')if(typeof m.width==='number'&&typeof m.height==='number'){if(typeof m.src==='string'){q=m.src;if(m.naturalWidth&&m.naturalHeight){n.call(o,m.naturalWidth,m.naturalHeight,q);return;}}if(typeof m.uri==='string'){q=m.uri;if(m.width&&m.height){n.call(o,m.width,m.height,q);return;}}}else if(m instanceof c('URI'))q=m.toString();if(!q){n(0,0,m);return;}var r=document.createElement('img');r.onreadystatechange=j;r.onload=i;r.onerror=k;r._callback=n;r._thisObj=o;r._srcStr=q;if(c('EncryptedImg').isEncrypted(q)){c('EncryptedImg').insertIntoDOM(q,r);}else r.src=q;r.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(/\s+/,' ');p.insertBefore(r,p.firstChild);}f.exports=l;}),null);
__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$CachedDOMImageSizePool1={};this.$CachedDOMImageSizePool2=j;this.$CachedDOMImageSizePool3=0;this.$CachedDOMImageSizePool4=i;this.$CachedDOMImageSizePool5=c('debounce')(this.$CachedDOMImageSizePool6,5000,this);this.$CachedDOMImageSizePool7={};this.$CachedDOMImageSizePool8={};}h.prototype.get=function(i,j,k){'use strict';if(!i){j.call(k,0,0,i);return;}var l=this.$CachedDOMImageSizePool1[i];if(l){l.lastAccessTime=Date.now();j.call(k,l.width,l.height,l.src);}else if(this.$CachedDOMImageSizePool7[i]){this.$CachedDOMImageSizePool7[i].push(j);this.$CachedDOMImageSizePool8[i].push(k);}else{this.$CachedDOMImageSizePool7[i]=[j];this.$CachedDOMImageSizePool8[i]=[k];c('getDOMImageSize')(i,this.$CachedDOMImageSizePool9,this);}};h.prototype.set=function(i,j,k){'use strict';if(this.$CachedDOMImageSizePool3>this.$CachedDOMImageSizePool4)this.$CachedDOMImageSizePool5();var l=this.$CachedDOMImageSizePool1;if(i&&!l[i]){var m={width:j,height:k,src:i,lastAccessTime:Date.now()};l[i]=m;this.$CachedDOMImageSizePool3++;}};h.prototype.$CachedDOMImageSizePool9=function(i,j,k){'use strict';this.set(k,i,j);var l=this.$CachedDOMImageSizePool7[k],m=this.$CachedDOMImageSizePool8[k];for(var n=0,o=l.length;n<o;n++)l[n].call(m[n],i,j,k);delete this.$CachedDOMImageSizePool7[k];delete this.$CachedDOMImageSizePool8[k];};h.prototype.$CachedDOMImageSizePool6=function(){'use strict';var i=Date.now(),j=this.$CachedDOMImageSizePool1,k=this.$CachedDOMImageSizePool3,l=this.$CachedDOMImageSizePool2;for(var m in j){var n=j[m];if(i-n.lastAccessTime>l){delete j[m];k--;}}this.$CachedDOMImageSizePool3=k;};f.exports=h;}),null);
__d('BackgroundImage.react',['cx','invariant','CachedDOMImageSizePool','Image.react','React','XUISpinner.react','joinClasses','clamp'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k='(-?(\\d+\\.)?\\d+(px|\\%))',l=new RegExp('^'+k+'?(\\s'+k+')?$','g'),m=new (c('CachedDOMImageSizePool'))(50,10*60*1000),n=c('React').createClass({displayName:'BackgroundImage',propTypes:{src:j.string,width:j.number.isRequired,height:j.number.isRequired,backgroundSize:j.oneOf(['contain','cover','containinside','coverinside']),loadingIndicatorStyle:j.oneOf(['none','large','small']),backgroundPosition:function(o,p,q){var r=o[p];if(r){!(typeof r==='string')?i(0):void 0;!r.match(l)?i(0):void 0;}!(o.backgroundFocus==null||o.backgroundPosition==null)?i(0):void 0;},backgroundFocus:function(o,p,q){var r=o[p];if(r){!(typeof r==='string')?i(0):void 0;!r.match(l)?i(0):void 0;}!(o.backgroundFocus==null||o.backgroundPosition==null)?i(0):void 0;},onImageLoad:j.func,optimizeResizeSpeed:j.bool,onContextMenu:j.func},getInitialState:function(){return {imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:true};},getDefaultProps:function(){return {optimizeResizeSpeed:false,loadingIndicatorStyle:'none'};},componentDidMount:function(){this._resolveImageSize();},componentDidUpdate:function(o){if(this.props.src!==this.state.imageSrc)this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:true},this._resolveImageSize);},_resolveImageSize:function(){var o=this.state.imageSrc;if(o)m.get(o,this._onImageSizeResolved,this);},render:function(){var o={width:this.props.width+'px',height:this.props.height+'px'},p=c('joinClasses')(this.props.className,"_5f0d");return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,p),style:babelHelpers['extends']({},this.props.style||{},o),onContextMenu:this.props.onContextMenu}),this._renderImage(),this._renderContent(),this._renderLoadingIndicator()));},_renderLoadingIndicator:function(){if(!this.state.loading||this.props.loadingIndicatorStyle==='none')return null;return (c('React').createElement('div',{className:"_1qe- _5lar"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},c('React').createElement(c('XUISpinner.react'),{size:this.props.loadingIndicatorStyle})))));},_renderContent:function(){if(this.props.children)return (c('React').createElement('div',{className:"_1qe-"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},this.props.children))));},_renderImage:function(){if(!this.state.imageWidth||!this.state.imageHeight)return;var o=this.props.width,p=this.props.height,q,r;switch(this.props.backgroundSize){case 'cover':q='cover';r=false;break;case 'coverinside':q='cover';r=true;break;case 'contain':q='contain';r=false;break;case 'containinside':q='contain';r=true;}var s=this.state.imageWidth,t=this.state.imageHeight,u=o/p,v=s/t;if(q==='contain')if((s>o||!r)&&v>=u){s=o;t=s/v;}else if(t>p||!r){t=p;s=t*v;}if(q==='cover')if((s>o||!r)&&v>=u){t=p;s=t*v;}else if(t>p||!r){s=o;t=s/v;}var w=this._getImageStyle(s,t);return (c('React').createElement(c('Image.react'),{alt:'',className:"_5i4g"+(this.props.optimizeResizeSpeed?' '+"_5sjv":''),style:w,src:this.state.imageSrc}));},_getImageStyle:function(o,p){var q=['50%','50%'],r=this._getBackgroundPositionPxValue;if(this.props.backgroundPosition){q=this.props.backgroundPosition.split(' ');}else if(this.props.backgroundFocus){q=this.props.backgroundFocus.split(' ');r=this._getBackgroundFocusPxValue;}return {width:Math.round(o)+'px',height:Math.round(p)+'px',left:r(q[0],o,this.props.width),top:r(q[1]||q[0],p,this.props.height)};},_getBackgroundPositionPxValue:function(o,p,q){var r=parseFloat(o),s=o.substr(r.toString().length);if(s==='px')return o;return Math.round((q-p)*(r/100))+'px';},_getBackgroundFocusPxValue:function(o,p,q){var r=parseFloat(o),s=o.substr(r.toString().length);if(p<q)return '0';var t=s==='px'?r:Math.round(p*(r/100)),u=t-q/2;u=c('clamp')(u,0,p-q);return -u+'px';},_onImageSizeResolved:function(o,p,q){if(!this.isMounted()||this.state.imageSrc!==q)return;var r=this.props.onImageLoad?this.props.onImageLoad.bind(null,o,p):null;this.setState({imageWidth:o,imageHeight:p,loading:false},r);}});f.exports=n;}),null);
__d('InputLabel.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes,m=0;function n(){return 'js_input_label_'+m++;}j=babelHelpers.inherits(o,c('React').Component);k=j&&j.prototype;o.prototype.render=function(){'use strict';!(this.props.children.length===2)?i(0):void 0;var p=this.props.children[0],q=this.props.children[1],r=p.type==='input';p=c('React').cloneElement(p,{className:c('joinClasses')(p.props.className,"uiInputLabelInput"+(r&&p.props.type==='radio'?' '+"uiInputLabelRadio":'')+(r&&p.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),id:p.props.id||n()});q=c('React').cloneElement(q,{className:c('joinClasses')(q.props.className,'uiInputLabelLabel'),htmlFor:p.props.id});var s="uiInputLabel"+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(r?' '+"uiInputLabelLegacy":'');return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,s)}),p,q));};function o(){'use strict';j.apply(this,arguments);}o.propTypes={display:l.oneOf(['block','inline'])};o.defaultProps={display:'block'};f.exports=o;}),null);
__d('AbstractCheckboxInput.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';!(!this.props.children||this.props.children.length===0)?i(0):void 0;var n=c('joinClasses')(this.props.className,"_kv1"),o=c('React').createElement('input',babelHelpers['extends']({},this.props,{className:null,type:'checkbox'}),undefined);return (c('React').createElement('label',{className:n},o,c('React').createElement('span',{'data-hover':this.props.tooltip?'tooltip':null,'data-tooltip-content':this.props.tooltip})));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={tooltip:l.string};f.exports=m;}),null);
__d('XUICheckboxInput.react',['cx','AbstractCheckboxInput.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractCheckboxInput.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55sg")}),undefined));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('SimpleXUIDialog',['cx','DialogX','LayerAutoFocusReact','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=445,j={show:function(k,l,m,n){var o=c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'});return this.showEx(k,l,o,m,n);},showConfirm:function(k,l,m,n){var o=false,p=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:function(){o=false;}}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',className:n&&n.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function(){o=true;}}));function q(){m(o);}return this.showEx(k,l,p,q,n);},showEx:function(k,l,m,n,o){o=o||{};var p=[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape'),c('LayerRefocusOnHide')];if(o.hideOnBlur!==false)p.push(c('LayerHideOnBlur'));if(o.useReactFocusBehavior)p.push(c('LayerAutoFocusReact'));var q={width:o.width||i,xui:true,addedBehaviors:p,causalElement:o.causalElement};if(l)l=c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:o.showCloseButton!==false},l);if(m)m=c('React').createElement(c('XUIDialogFooter.react'),{'data-testid':'simple_xui_dialog_footer'},m);var r=c('React').createElement('div',null,l,c('React').createElement(c('XUIDialogBody.react'),null,k),m),s=new (c('DialogX'))(q,r);if(n)s.subscribe('hide',n);s.show();return s;}};f.exports=j;}),null);
__d('XUIRadioInput.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){'use strict';!(!this.props.children||this.props.children.length===0)?i(0):void 0;var m=c('joinClasses')(this.props.className,"_55sh"),n=c('React').createElement('input',babelHelpers['extends']({},this.props,{className:null,type:'radio'}),undefined);return (c('React').createElement('label',{className:m},n,c('React').createElement('span',null)));};function l(){'use strict';j.apply(this,arguments);}f.exports=l;}),null);
__d('TypeaheadViewPropTypes',['React'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={ariaOwneeID:h.string,highlightedEntry:h.object,entries:h.array.isRequired,onSelect:h.func.isRequired,onHighlight:h.func,onRenderHighlight:h.func,role:h.string};f.exports=i;}),null);
__d('XUITypeaheadViewContainer.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('ul',{className:c('joinClasses')("_599r",this.props.className),id:this.props.arieaOwneeID,role:this.props.role},this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('TypeaheadViewItem',['React','ReactDOM','SearchableEntry'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={entry:h.instanceOf(c('SearchableEntry')).isRequired,highlighted:h.bool,role:h.string,selected:h.bool,onSelect:h.func.isRequired,onHighlight:h.func,onRenderHighlight:h.func},j={_onSelect:function(k){this.props.onSelect(this.props.entry,k);},_onHighlight:function(k){if(this.props.onHighlight)this.props.onHighlight(this.props.entry,k);},getDefaultProps:function(){return {role:'option'};},shouldComponentUpdate:function(k){return (this.props.entry.getUniqueID()!==k.entry.getUniqueID()||this.props.highlighted!==k.highlighted||this.props.selected!==k.selected);},componentDidMount:function(){if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));},componentDidUpdate:function(){if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));}};f.exports={propTypes:i,Mixin:j};}),null);
__d('XUITypeaheadViewItem.react',['cx','BackgroundImage.react','Badge.react','ImageBlock.react','React','TextWithEmoticons.react','TypeaheadViewItem','joinClasses'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUITypeaheadViewItem',mixins:[c('TypeaheadViewItem').Mixin],propTypes:babelHelpers['extends']({},c('TypeaheadViewItem').propTypes,{splitText:i.bool}),render:function(){var k=this.props.entry,l=this.props.splitSubtext?k.getSubtitle().split(' \u00b7 ')[0]:k.getSubtitle(),m=l?c('React').createElement('div',{className:"_599q"},this.props.children,l):null,n=k.getPhoto()?c('React').createElement(c('BackgroundImage.react'),{width:32,height:32,backgroundSize:'cover',src:k.getPhoto()}):c('React').createElement('span',null),o=k.getAuxiliaryData(),p=null;if(o)if(o.verified){p=c('React').createElement(c('Badge.react'),null);}else if(o.nonCoworker){p=c('React').createElement(c('Badge.react'),{type:'work_non_coworker'});}else if(o.workUser)p=c('React').createElement(c('Badge.react'),{type:'work'});var q="_599m"+(!m?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":'');q=c('joinClasses')(q,this.props.className);return (c('React').createElement('li',{'aria-selected':this.props.highlighted,className:q,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},n,c('React').createElement('div',null,c('React').createElement('div',{className:"_599p"},c('React').createElement(c('TextWithEmoticons.react'),{renderEmoticons:false,renderEmoji:true,text:k.getTitle()}),p),m))));}});f.exports=j;}),null);
__d('XUITypeaheadView.react',['cx','React','TypeaheadViewPropTypes','XUITypeaheadViewContainer.react','XUITypeaheadViewItem.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return l=(m=j.constructor).call.apply(m,[this].concat(o)),this.$XUITypeaheadView1=function(q){var r=q===this.props.highlightedEntry;return (c('React').createElement(c('XUITypeaheadViewItem.react'),{key:q.getUniqueID(),entry:q,highlighted:r,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));}.bind(this),l;}k.prototype.render=function(){'use strict';var l=!this.props.entries.length?"_599s":'';return (c('React').createElement(c('XUITypeaheadViewContainer.react'),{className:l,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this.$XUITypeaheadView1)));};k.propTypes=c('TypeaheadViewPropTypes');k.defaultProps={role:'listbox'};f.exports=k;}),null);
__d('getInlineBoundingRect',['Rect'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=i.getClientRects();if(!j||k.length===0)return c('Rect').getElementBounds(i);var l,m=false;for(var n=0;n<k.length;n++){var o=new (c('Rect'))(Math.round(k[n].top),Math.round(k[n].right),Math.round(k[n].bottom),Math.round(k[n].left),'viewport').convertTo('document'),p=o.getPositionVector(),q=p.add(o.getDimensionVector());if(!l||p.x<=l.l&&p.y>l.t){if(m)break;l=new (c('Rect'))(p.y,q.x,q.y,p.x,'document');}else{l.t=Math.min(l.t,p.y);l.b=Math.max(l.b,q.y);l.r=q.x;}if(o.contains(j))m=true;}if(!l)l=c('Rect').getElementBounds(i);return l;}f.exports=h;}),null);
__d('Tooltip',['fbt','AsyncRequest','ContextualLayer','ContextualLayerAutoFlip','CSS','DOM','Event','Style','TooltipData','Vector','emptyFunction','getElementText','getInlineBoundingRect','getOrCreateDOMID','nl2br','setImmediate'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=null,k=null,l=null,m=null,n=null,o=[],p=[];function q(){if(!l){m=c('DOM').create('div',{className:'tooltipContent','data-testid':'tooltip_testid'});n=c('getOrCreateDOMID')(m);var u=c('DOM').create('i',{className:'arrow'}),v=c('DOM').create('div',{className:'uiTooltipX'},[m,u]);l=new (c('ContextualLayer'))({},v);l.shouldSetARIAProperties(false);l.enableBehavior(c('ContextualLayerAutoFlip'));}}function r(u,v){t._show(u,h._("Loading..."));new (c('AsyncRequest'))(v).setHandler(function(w){t._show(u,w.getPayload());}).setErrorHandler(c('emptyFunction')).send();}var s;c('Event').listen(document.documentElement,'mouseover',function(event){s=event;c('setImmediate')(function(){s=null;});});var t=babelHelpers['extends']({},c('TooltipData'),{isActive:function(u){return u===i;},process:function(u,v){if(!c('DOM').contains(u,v))return;if(u!==i){t.fetchIfNecessary(u);var w=t._get(u);if(w.suppress)return;if(w.delay){t._showWithDelay(u,w.delay);}else t.show(u);}},fetchIfNecessary:function(u){var v=u.getAttribute('data-tooltip-uri');if(v){u.removeAttribute('data-tooltip-uri');r(u,v);}},hide:function(){if(i){l.hide();i=null;while(o.length)o.pop().remove();}},_show:function(u,v){t._store({context:u,content:v});t.isActive(u)&&t.show(u);},show:function(u){var v=function(){u.setAttribute('aria-describedby',n);l.show();},w=function(){u.removeAttribute('aria-describedby');t.hide();},x=function(ga){if(!c('DOM').contains(i,ga.getTarget()))w();};q();w();var y=t._get(u);if(y.suppress)return;var z=y.content;if(y.overflowDisplay){if(u.offsetWidth>=u.scrollWidth)return;if(!z)z=c('getElementText')(u);}if(!z)return;var aa=0,ba=0;if(y.position==='left'||y.position==='right'){ba=(u.offsetHeight-28)/2;}else if(y.alignH!=='center'){var ca=u.offsetWidth;if(ca<32)aa=(ca-32)/2*(y.alignH==='right'?-1:1);}l.setContextWithBounds(u,c('getInlineBoundingRect')(u,s&&c('Vector').getEventPosition(s))).setOffsetX(aa).setOffsetY(ba).setPosition(y.position).setAlignment(y.alignH);if(typeof z==='string'){c('CSS').addClass(l.getRoot(),'invisible_elem');var da=c('DOM').create('span',{},c('nl2br')(z));if(y.textDirection)da=c('DOM').create('bdo',{dir:y.textDirection},da);var ea=c('DOM').create('div',{className:'tooltipText'},da);c('DOM').setContent(m,ea);v();c('CSS').removeClass(l.getRoot(),'invisible_elem');}else{c('DOM').setContent(m,z);v();}o.push(c('Event').listen(document.documentElement,'mouseover',x),c('Event').listen(document.documentElement,'focusin',x));var fa=c('Style').getScrollParent(u);if(fa!==window)o.push(c('Event').listen(fa,'scroll',w));if(!y.persistOnClick)o.push(c('Event').listen(u,'click',w));i=u;},_showWithDelay:function(u,v){if(u!==j)t._clearDelay();if(!k){var w=function(x){if(!c('DOM').contains(j,x.getTarget()))t._clearDelay();};p.push(c('Event').listen(document.documentElement,'mouseover',w),c('Event').listen(document.documentElement,'focusin',w));j=u;k=setTimeout(function(){t._clearDelay();t.show(u);},v);}},_clearDelay:function(){clearTimeout(k);j=null;k=null;while(p.length)p.pop().remove();}});c('Event').listen(window,'scroll',t.hide);f.exports=t;}),null);
__d('AbstractAsyncSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','SearchSourceQueryStatus','SearchableEntry','TokenizeUtil','emptyFunction','isValidUniqueID'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('SearchSourceQueryStatus').ACTIVE,k=c('SearchSourceQueryStatus').COMPLETE;h=babelHelpers.inherits(l,c('AbstractSearchSource'));i=h&&h.prototype;function l(m,n,o){'use strict';i.constructor.call(this);this.$AbstractAsyncSearchSource1=m.bootstrapRequests;this.$AbstractAsyncSearchSource2=m.queryRequests;this.$AbstractAsyncSearchSource3=m.auxiliaryFields;this.$AbstractAsyncSearchSource4=m.asyncErrorHandler||c('emptyFunction');this.$AbstractAsyncSearchSource5=m.packageFn||this.$AbstractAsyncSearchSource6;this.$AbstractAsyncSearchSource7=m.requestData||{};this.$AbstractAsyncSearchSource8=m.getAllForEmptyQuery;this.$AbstractAsyncSearchSource9=[];this.$AbstractAsyncSearchSource10=new (c('SearchSourceCallbackManager'))({parseFn:c('TokenizeUtil').parse,matchFn:m.matchFn||c('TokenizeUtil').isQueryMatch,indexFn:m.indexFn});this.$AbstractAsyncSearchSource11=n;this.$AbstractAsyncSearchSource12=o;}l.prototype.bootstrapImpl=function(m){'use strict';if(!this.$AbstractAsyncSearchSource1||!this.$AbstractAsyncSearchSource1.length){m();return;}var n=this.$AbstractAsyncSearchSource1.length,o=0;this.$AbstractAsyncSearchSource1.forEach(function(p){this.$AbstractAsyncSearchSource13(this.$AbstractAsyncSearchSource7,p,function(q){this.$AbstractAsyncSearchSource10.addLocalEntries(q);this.$AbstractAsyncSearchSource9=this.$AbstractAsyncSearchSource9.concat(q);o++;if(o===n){m();m=null;}}.bind(this));}.bind(this));};l.prototype.searchImpl=function(m,n,o){'use strict';if(this.$AbstractAsyncSearchSource8&&m===''){this.getBootstrappedEntries(function(u){n(u,m);});return;}var p=null,q={},r=this.$AbstractAsyncSearchSource10.search(m,function(u,v,w){if(o&&o.waitForAllResults&&w!==k)return;if(!p){p=u;p.forEach(function(x){q[x.getUniqueID()]=true;});}else u.forEach(function(x){var y=x.getUniqueID();if(!q[y]){p.push(x);q[y]=true;}});n(p,v,w);},o);if(!r||!this.$AbstractAsyncSearchSource2||!this.$AbstractAsyncSearchSource2.length)return;var s=babelHelpers['extends']({value:m,existing_ids:p&&p.map(function(u){return u.getUniqueID();}).join(',')},this.$AbstractAsyncSearchSource7),t=this.$AbstractAsyncSearchSource2.length;this.$AbstractAsyncSearchSource2.forEach(function(u){this.$AbstractAsyncSearchSource13(s,u,function(v){t--;this.$AbstractAsyncSearchSource14(v,m,t?j:k);}.bind(this));},this);};l.prototype.getBootstrappedEntries=function(m){'use strict';return this.bootstrap(function(){return m(this.$AbstractAsyncSearchSource9||[]);}.bind(this));};l.prototype.getAllEntriesMap=function(){'use strict';return this.$AbstractAsyncSearchSource10.getAllEntriesMap();};l.prototype.setRequestData=function(m){'use strict';this.$AbstractAsyncSearchSource7=m;};l.prototype.$AbstractAsyncSearchSource13=function(m,n,o){'use strict';this.$AbstractAsyncSearchSource11(m,n,function(p){return (o(this.$AbstractAsyncSearchSource12(p,this.$AbstractAsyncSearchSource5).filter(function(q){return !!q;})));}.bind(this),this.$AbstractAsyncSearchSource4);};l.prototype.$AbstractAsyncSearchSource15=function(m){'use strict';this.$AbstractAsyncSearchSource10.addLocalEntries(m);};l.prototype.$AbstractAsyncSearchSource14=function(m,n,o){'use strict';this.$AbstractAsyncSearchSource10.addQueryEntries(m,n,o);};l.prototype.$AbstractAsyncSearchSource6=function(m,n){'use strict';var o=m.title||m.text,p=m.uniqueID||m.uid;if(!o||!c('isValidUniqueID')(p))return null;return new (c('SearchableEntry'))({uniqueID:p,order:m.order||m.index||n,title:o,subtitle:m.subtitle||m.category||m.subtext,keywordString:m.keywordString||m.tokens,type:m.type,photo:m.photo,uri:m.uri||m.path,auxiliaryData:this.$AbstractAsyncSearchSource16(m)});};l.prototype.$AbstractAsyncSearchSource16=function(m){'use strict';var n;if(this.$AbstractAsyncSearchSource3){n={};for(var o in this.$AbstractAsyncSearchSource3){var p=this.$AbstractAsyncSearchSource3[o];n[o]=m[p];}}if(m.aux_data)n=babelHelpers['extends']({},n,m.aux_data);return n;};f.exports=l;}),null);
__d('WebAsyncSearchSourceUtils',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={normalizeResponse:function(i,j){var k=i.getPayload(),l;if(Array.isArray(k)){l=k;}else if(k&&k.entries){l=k.entries;}else l=[];return l.map(j,this);}};f.exports=h;}),null);
__d('WebAsyncSearchSource',['AbstractAsyncSearchSource','AbstractSearchSource','AsyncRequest','WebAsyncSearchSourceUtils'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this.$WebAsyncSearchSource1=new (c('AbstractAsyncSearchSource'))(k,this.$WebAsyncSearchSource2,c('WebAsyncSearchSourceUtils').normalizeResponse);}j.prototype.bootstrapImpl=function(k){'use strict';this.$WebAsyncSearchSource1.bootstrap(k);};j.prototype.searchImpl=function(k,l,m){'use strict';this.$WebAsyncSearchSource1.search(k,l,m);};j.prototype.getBootstrappedEntries=function(k){'use strict';return this.$WebAsyncSearchSource1.getBootstrappedEntries(k);};j.prototype.getAllEntriesMap=function(){'use strict';return this.$WebAsyncSearchSource1.getAllEntriesMap();};j.prototype.setRequestData=function(k){'use strict';this.$WebAsyncSearchSource1.setRequestData(k);};j.prototype.$WebAsyncSearchSource2=function(k,l,m,n){'use strict';new (c('AsyncRequest'))(l.uri).setData(babelHelpers['extends']({},k,l.data)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(m).setErrorHandler(n).send();};f.exports=j;}),null);
__d('DraftEntityInstance',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').Record,k=j({type:'TOKEN',mutability:'IMMUTABLE',data:Object});h=babelHelpers.inherits(l,k);i=h&&h.prototype;l.prototype.getType=function(){return this.get('type');};l.prototype.getMutability=function(){return this.get('mutability');};l.prototype.getData=function(){return this.get('data');};function l(){h.apply(this,arguments);}f.exports=l;}),null);
__d('DraftEntity',['invariant','DraftEntityInstance','immutable'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('immutable').Map,j=i(),k=0,l={create:function(m,n,o){return l.add(new (c('DraftEntityInstance'))({type:m,mutability:n,data:o||{}}));},add:function(m){var n=''+ ++k;j=j.set(n,m);return n;},get:function(m){var n=j.get(m);!!!n?h(0):void 0;return n;},mergeData:function(m,n){var o=l.get(m),p=babelHelpers['extends']({},o.getData(),n),q=o.set('data',p);j=j.set(m,q);return q;},replaceData:function(m,n){var o=l.get(m),p=o.set('data',n);j=j.set(m,p);return p;}};f.exports=l;}),null);
__d('getMentionsTextForContentState',['DraftEntity','emptyFunction'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('emptyFunction').thatReturnsTrue,i=/[\\\]:]/g;function j(l){var m=l.getBlockMap().map(function(n){var o=n.getText(),p=[];n.findEntityRanges(h,function(q,r){p.push(k(o.slice(q,r),n.getEntityAt(q)));});return p.join('');});return m.join('\n');}function k(l,m){if(m){var n=c('DraftEntity').get(m);if(n.getType()==='MENTION'){l=l.replace(i,function(p){return '\\'+p;});var o=n.getData().id;if(/^\d+$/.test(o))return '@['+o+':'+l+']';}else if(n.getType()==='EMOTICON')return n.getData().originalEmoticon;}return l.replace('@[','@ [');}f.exports=j;}),null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null;}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j);};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props);this.component=c('ReactDOM').render(k,this.container,j);};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null;};f.exports=h;}),null);