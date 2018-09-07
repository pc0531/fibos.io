webpackJsonp([1],{0:function(module,exports,__webpack_require__){(function(jQuery,$){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _stringify=__webpack_require__(2),_stringify2=_interopRequireDefault(_stringify),_typeof2=__webpack_require__(5),_typeof3=_interopRequireDefault(_typeof2);__webpack_require__(71),__webpack_require__(90),__webpack_require__(92),__webpack_require__(93),__webpack_require__(94),function($){function callbackIfComplete(e){e.debug&&(debug("callbackIfComplete()"),debug("totalFiles: "+e.totalFiles),debug("filesLoaded: "+e.filesLoaded)),e.async&&e.filesLoaded===e.totalFiles&&e.callback&&e.callback()}function loadAndParseFiles(e,t){t.debug&&debug("loadAndParseFiles"),null!==e&&e.length>0?loadAndParseFile(e[0],t,function(){e.shift(),loadAndParseFiles(e,t)}):callbackIfComplete(t)}function loadAndParseFile(e,t,n){t.debug&&(debug("loadAndParseFile('"+e+"')"),debug("totalFiles: "+t.totalFiles),debug("filesLoaded: "+t.filesLoaded)),null!==e&&void 0!==e&&$.ajax({url:e,async:t.async,cache:t.cache,dataType:"text",success:function(i,s){t.debug&&(debug("Succeeded in downloading "+e+"."),debug(i)),parseData(i,t),n()},error:function(i,s,a){t.debug&&debug("Failed to download or parse "+e+". errorThrown: "+a),404===i.status&&(t.totalFiles-=1),n()}})}function parseData(data,settings){for(var parsed="",lines=data.split(/\n/),regPlaceHolder=/(\{\d+})/g,regRepPlaceHolder=/\{(\d+)}/g,unicodeRE=/(\\u.{4})/gi,i=0,j=lines.length;i<j;i++){var line=lines[i];if(line=line.trim(),line.length>0&&"#"!=line.match("^#")){var pair=line.split("=");if(pair.length>0){for(var name=decodeURI(pair[0]).trim(),value=1==pair.length?"":pair[1];-1!=value.search(/\\$/);)value=value.substring(0,value.length-1),value+=lines[++i].trimRight();for(var s=2;s<pair.length;s++)value+="="+pair[s];if(value=value.trim(),"map"==settings.mode||"both"==settings.mode){var unicodeMatches=value.match(unicodeRE);unicodeMatches&&unicodeMatches.forEach(function(e){value=value.replace(e,unescapeUnicode(e))}),settings.namespace?$.i18n.map[settings.namespace][name]=value:$.i18n.map[name]=value}if("vars"==settings.mode||"both"==settings.mode)if(value=value.replace(/"/g,'\\"'),checkKeyNamespace(name),regPlaceHolder.test(value)){var parts=value.split(regPlaceHolder),first=!0,fnArgs="",usedArgs=[];parts.forEach(function(e){!regPlaceHolder.test(e)||0!==usedArgs.length&&-1!=usedArgs.indexOf(e)||(first||(fnArgs+=","),fnArgs+=e.replace(regRepPlaceHolder,"v$1"),usedArgs.push(e),first=!1)}),parsed+=name+"=function("+fnArgs+"){";var fnExpr='"'+value.replace(regRepPlaceHolder,'"+v$1+"')+'"';parsed+="return "+fnExpr+";};"}else parsed+=name+'="'+value+'";'}}}eval(parsed),settings.filesLoaded+=1}function checkKeyNamespace(key){var regDot=/\./;if(regDot.test(key))for(var fullname="",names=key.split(/\./),i=0,j=names.length;i<j;i++){var name=names[i];i>0&&(fullname+="."),fullname+=name,eval("typeof "+fullname+' == "undefined"')&&eval(fullname+"={};")}}function unescapeUnicode(e){var t=[],n=parseInt(e.substr(2),16);return n>=0&&n<Math.pow(2,16)&&t.push(n),t.reduce(function(e,t){return e+String.fromCharCode(t)},"")}$.i18n={},$.i18n.map={};var debug=function(e){window.console};$.i18n.properties=function(e){var t={name:"Messages",language:"",path:"",namespace:null,mode:"vars",cache:!1,debug:!1,encoding:"UTF-8",async:!1,callback:null};e=$.extend(t,e),e.namespace&&"string"==typeof e.namespace&&(e.namespace.match(/^[a-z]*$/)?$.i18n.map[e.namespace]={}:(debug("Namespaces can only be lower case letters, a - z"),e.namespace=null)),e.path.match(/\/$/)||(e.path+="/"),e.language=this.normaliseLanguageCode(e);var n=e.name&&e.name.constructor===Array?e.name:[e.name];e.totalFiles=2*n.length+(e.language.length>=5?n.length:0),e.debug&&debug("totalFiles: "+e.totalFiles),e.filesLoaded=0,n.forEach(function(t){var n,i,s,a;n=e.path+t+".properties";var o=e.language.substring(0,2);if(i=e.path+t+"_"+o+".properties",e.language.length>=5){var r=e.language.substring(0,5);s=e.path+t+"_"+r+".properties",a=[n,i,s]}else a=[n,i];loadAndParseFiles(a,e)}),e.callback&&!e.async&&e.callback()},$.i18n.prop=function(e){var t,n,i=[].slice.call(arguments);if(2==i.length)if($.isArray(i[1]))t=i[1];else if("object"===(0,_typeof3.default)(i[1])){n=i[1].namespace;var s=i[1].replacements;i.splice(-1,1),s&&Array.prototype.push.apply(i,s)}var a=n?$.i18n.map[n][e]:$.i18n.map[e];if(null===a)return"["+(n?n+"#"+e:e)+"]";var o;if("string"==typeof a&&a.indexOf){for(o=0;-1!=(o=a.indexOf("\\",o));)a="t"==a.charAt(o+1)?a.substring(0,o)+"\t"+a.substring(2+o++):"r"==a.charAt(o+1)?a.substring(0,o)+"\r"+a.substring(2+o++):"n"==a.charAt(o+1)?a.substring(0,o)+"\n"+a.substring(2+o++):"f"==a.charAt(o+1)?a.substring(0,o)+"\f"+a.substring(2+o++):"\\"==a.charAt(o+1)?a.substring(0,o)+"\\"+a.substring(2+o++):a.substring(0,o)+a.substring(o+1);var r,l,c=[];for(o=0;o<a.length;)if("'"==a.charAt(o))if(o==a.length-1)a=a.substring(0,o);else if("'"==a.charAt(o+1))a=a.substring(0,o)+a.substring(++o);else{for(r=o+2;-1!=(r=a.indexOf("'",r));){if(r==a.length-1||"'"!=a.charAt(r+1)){a=a.substring(0,o)+a.substring(o+1,r)+a.substring(r+1),o=r-1;break}a=a.substring(0,r)+a.substring(++r)}-1==r&&(a=a.substring(0,o)+a.substring(o+1))}else if("{"==a.charAt(o))if(-1==(r=a.indexOf("}",o+1)))o++;else if(l=parseInt(a.substring(o+1,r)),!isNaN(l)&&l>=0){var u=a.substring(0,o);""!==u&&c.push(u),c.push(l),o=0,a=a.substring(r+1)}else o=r+1;else o++;""!==a&&c.push(a),a=c,n?$.i18n.map[settings.namespace][e]=c:$.i18n.map[e]=c}if(0===a.length)return"";if(1==a.length&&"string"==typeof a[0])return a[0];var d="";for(o=0,r=a.length;o<r;o++)"string"==typeof a[o]?d+=a[o]:t&&a[o]<t.length?d+=t[a[o]]:!t&&a[o]+1<i.length?d+=i[a[o]+1]:d+="{"+a[o]+"}";return d},$.i18n.normaliseLanguageCode=function(e){var t=e.language;return(!t||t.length<2)&&(e.debug&&debug("No language supplied. Pulling it from the browser ..."),t=navigator.languages&&navigator.languages.length>0?navigator.languages[0]:navigator.language||navigator.userLanguage||"en",e.debug&&debug("Language from browser: "+t)),t=t.toLowerCase(),t=t.replace(/-/,"_"),t.length>3&&(t=t.substring(0,3)+t.substring(3).toUpperCase()),t}}(jQuery),$(function(){function to(t){t=Math.floor(t),o!==t&&(o=t,e.css("top",t+"px"))}function _sync(){var o=n.scrollTop(),r=n.height(),l=t.height();o>a!==i&&(i=!i,i?e.addClass("fixed_tocify"):e.removeClass("fixed_tocify")),i&&to(s<r?0:-(o-a)/(l-r)*(s-r))}function _sync1(){s=e.height()+50,a=e.offset().top,_sync()}function initlanguage(){function changeLanguage(e){localStorage.setItem("fibosLanguage",(0,_stringify2.default)(e)),setCookie(e),jQuery.i18n.properties({name:"strings",path:"../../../../i18n/",mode:"map",language:("zh"===e?"zh":"en")+" ",callback:function(){$("#Home").html($.i18n.prop("Home")),$("#Roadmap").html($.i18n.prop("Roadmap")),$("#DEV_Community").html($.i18n.prop("DEV_Community")),$("#Documentation").html($.i18n.prop("Documentation")),$("#DEV_Guides").html($.i18n.prop("DEV_Guides")),$("#Basic_Modules").html($.i18n.prop("Basic_Modules")),$("#Built_in_Objects").html($.i18n.prop("Built_in_Objects")),$("#Language").html($.i18n.prop("Language")),$("#ToHome").html($.i18n.prop("ToHome")),$("#DevDoc").html($.i18n.prop("DevDoc")),$("#DEV_Guides1").html($.i18n.prop("DEV_Guides1")),$("#Basic_Modules1").html($.i18n.prop("Basic_Modules1")),$("#Built_in_Objects1").html($.i18n.prop("Built_in_Objects1")),$("#Doc").html($.i18n.prop("Doc")),$("#ContactUs").html($.i18n.prop("ContactUs")),$("#News").html($.i18n.prop("News")),$("#Download").html($.i18n.prop("Download")),$("#Dapps").html($.i18n.prop("Dapps")),$("#slogan1").html($.i18n.prop("slogan1")),$("#desc1").html($.i18n.prop("desc1")),$("#IndexLink").html($.i18n.prop("IndexLink")),$("#Roadmap1").html($.i18n.prop("Roadmap1")),$("#News0").html($.i18n.prop("News0")),$("#Dapps1").html($.i18n.prop("Dapps1")),$("#DEV_Community1").html($.i18n.prop("DEV_Community1")),$("#Documentation1").html($.i18n.prop("Documentation1"))}})}function setCookie(e){window.document.cookie="lang="+e+";"}var e=localStorage.getItem("fibosLanguage");changeLanguage(e?JSON.parse(e):"zh"),$("#language-zh").click(function(){changeLanguage("zh")}),$("#language-en").click(function(){changeLanguage("en")})}var e=$("#toc");try{e.tocify({showAndHide:!1,extendPage:!1,hashGenerator:function(e,t){return e.replace(/\s+/g,"-")}})}catch(e){}var t=$(".content"),n=$(window),i=($(document),!1),s=e.height()+50,a=e.offset().top,o=-1;_sync(),initlanguage(),n.resize(_sync1),n.scroll(_sync)})}).call(exports,__webpack_require__(1),__webpack_require__(1))},90:function(e,t,n){var i,s,a;!function(o){s=[n(1),n(91)],i=o,void 0!==(a="function"==typeof i?i.apply(t,s):i)&&(e.exports=a)}(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var i,s,a;for(a=0;null!=(s=n[a]);a++)try{i=e._data(s,"events"),i&&i.remove&&e(s).triggerHandler("remove")}catch(e){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var s,a,o,r={},l=t.split(".")[0];t=t.split(".")[1];var c=l+"-"+t;return i||(i=n,n=e.Widget),e.isArray(i)&&(i=e.extend.apply(null,[{}].concat(i))),e.expr[":"][c.toLowerCase()]=function(t){return!!e.data(t,c)},e[l]=e[l]||{},s=e[l][t],a=e[l][t]=function(e,t){if(!this._createWidget)return new a(e,t);arguments.length&&this._createWidget(e,t)},e.extend(a,s,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),o=new n,o.options=e.widget.extend({},o.options),e.each(i,function(t,i){if(!e.isFunction(i))return void(r[t]=i);r[t]=function(){function _super(){return n.prototype[t].apply(this,arguments)}function _superApply(e){return n.prototype[t].apply(this,e)}return function(){var e,t=this._super,n=this._superApply;return this._super=_super,this._superApply=_superApply,e=i.apply(this,arguments),this._super=t,this._superApply=n,e}}()}),a.prototype=e.widget.extend(o,{widgetEventPrefix:s?o.widgetEventPrefix||t:t},r,{constructor:a,namespace:l,widgetName:t,widgetFullName:c}),s?(e.each(s._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,a,n._proto)}),delete s._childConstructors):n._childConstructors.push(a),e.widget.bridge(t,a),a},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;o<r;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(e.isPlainObject(s)?t[i]=e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):t[i]=s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),l=this;return o?this.length||"instance"!==a?this.each(function(){var n,i=e.data(this,s);return"instance"===a?(l=i,!1):i?e.isFunction(i[a])&&"_"!==a.charAt(0)?(n=i[a].apply(i,r),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+a+"'")}):l=void 0:(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),this.classesElementLookup={},i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){var t=this;this._destroy(),e.each(this.classesElementLookup,function(e,n){t._removeClass(n,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,s,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},i=t.split("."),t=i.shift(),i.length){for(s=o[t]=e.widget.extend({},this.options[t]),a=0;a<i.length-1;a++)s[i[a]]=s[i[a]]||{},s=s[i[a]];if(t=i.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=n}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(t){var n,i,s;for(n in t)s=this.classesElementLookup[n],t[n]!==this.options.classes[n]&&s&&s.length&&(i=e(s.get()),this._removeClass(s,n),i.addClass(this._classes({element:i,keys:n,classes:t,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(t){function processClassString(s,a){var o,r;for(r=0;r<s.length;r++)o=i.classesElementLookup[s[r]]||e(),o=e(t.add?e.unique(o.get().concat(t.element.get())):o.not(t.element).get()),i.classesElementLookup[s[r]]=o,n.push(s[r]),a&&t.classes[s[r]]&&n.push(t.classes[s[r]])}var n=[],i=this;return t=e.extend({element:this.element,classes:this.options.classes||{}},t),this._on(t.element,{"remove":"_untrackClassesElement"}),t.keys&&processClassString(t.keys.match(/\S+/g)||[],!0),t.extra&&processClassString(t.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(t){var n=this;e.each(n.classesElementLookup,function(i,s){-1!==e.inArray(t.target,s)&&(n.classesElementLookup[i]=e(s.not(t.target).get()))})},_removeClass:function(e,t,n){return this._toggleClass(e,t,n,!1)},_addClass:function(e,t,n){return this._toggleClass(e,t,n,!0)},_toggleClass:function(e,t,n,i){i="boolean"==typeof i?i:n;var s="string"==typeof e||null===e,a={extra:s?t:n,keys:s?e:t,element:s?this.element:e,add:i};return a.element.toggleClass(this._classes(a),i),this},_on:function(t,n,i){var s,a=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=s=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,s=this.widget()),e.each(i,function(i,o){function handlerProxy(){if(t||!0!==a.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof o?a[o]:o).apply(a,arguments)}"string"!=typeof o&&(handlerProxy.guid=o.guid=o.guid||handlerProxy.guid||e.guid++);var r=i.match(/^([\w:-]*)\s*(.*)$/),l=r[1]+a.eventNamespace,c=r[2];c?s.on(l,c,handlerProxy):n.on(l,handlerProxy)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(n).off(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function handlerProxy(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(handlerProxy,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(e(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(e(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,n,i){var s,a,o=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],a=n.originalEvent)for(s in a)s in n||(n[s]=a[s]);return this.element.trigger(n,i),!(e.isFunction(o)&&!1===o.apply(this.element[0],[n].concat(i))||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,s,a){"string"==typeof s&&(s={effect:s});var o,r=s?!0===s||"number"==typeof s?n:s.effect||n:t;s=s||{},"number"==typeof s&&(s={duration:s}),o=!e.isEmptyObject(s),s.complete=a,s.delay&&i.delay(s.delay),o&&e.effects&&e.effects.effect[r]?i[t](s):r!==t&&i[r]?i[r](s.duration,s.easing,a):i.queue(function(n){e(this)[t](),a&&a.call(i[0]),n()})}}),e.widget})},91:function(e,t,n){var i,s,a;!function(o){s=[n(1)],i=o,void 0!==(a="function"==typeof i?i.apply(t,s):i)&&(e.exports=a)}(function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"})},92:function(e,t,n){(function(e){!function(t){"use strict";t(e,window,document)}(function(e,t,n,i){"use strict";var s="tocify",a="tocify-hide",o="tocify-header",r="."+o,l="tocify-subheader",c="."+l,u="tocify-item",d="."+u,h="tocify-extend-page",p="."+h;e.widget("toc.tocify",{version:"1.9.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var n=this;n.extendPageScroll=!0,n.items=[],n._generateToc(),n._addCSSClasses(),n.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),n._setEventHandlers(),e(t).load(function(){n._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){n.extendPageScroll=!1},0)})})},_generateToc:function(){var t,n,i=this,r=i.options.ignoreSelector;if(t=-1!==this.options.selectors.indexOf(",")?e(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(","))):e(this.options.context).find(this.options.selectors.replace(/ /g,"")),!t.length)return void i.element.addClass(a);i.element.addClass(s),t.each(function(t){e(this).is(r)||(n=e("<ul/>",{"id":o+t,"class":o}).append(i._nestElements(e(this),t)),i.element.append(n),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(i.options.selectors).length?e(this).filter(i.options.selectors).each(function(){e(this).is(r)||i._appendSubheaders.call(this,i,n)}):e(this).find(i.options.selectors).each(function(){e(this).is(r)||i._appendSubheaders.call(this,i,n)})}))})},_setActiveElement:function(e){var n=this,i=t.location.hash.substring(1),s=n.element.find('li[data-unique="'+i+'"]');return i.length?(n.element.find("."+n.focusClass).removeClass(n.focusClass),s.addClass(n.focusClass),n.options.showAndHide&&s.click()):(n.element.find("."+n.focusClass).removeClass(n.focusClass),!i.length&&e&&n.options.highlightDefault&&n.element.find(d).first().addClass(n.focusClass)),n},_nestElements:function(t,n){var i,s,a;return i=e.grep(this.items,function(e){return e===t.text()}),i.length?this.items.push(t.text()+n):this.items.push(t.text()),a=this._generateHashValue(i,t,n),s=e("<li/>",{"class":u,"data-unique":a}).append(e("<a/>",{"text":t.text()})),t.before(e("<div/>",{"name":a,"data-unique":a})),s},_generateHashValue:function(e,t,n){var i="",s=this.options.hashGenerator;if("pretty"===s){for(i=t.text().toLowerCase().replace(/\s/g,"-");i.indexOf("--")>-1;)i=i.replace(/--/g,"-");for(;i.indexOf(":-")>-1;)i=i.replace(/:-/g,"-")}else i="function"==typeof s?s(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(i+=""+n),i},_appendSubheaders:function(t,n){var i=e(this).index(t.options.selectors),s=e(t.options.selectors).eq(i-1),a=+e(this).prop("tagName").charAt(1),o=+s.prop("tagName").charAt(1);a<o?t.element.find(c+"[data-tag="+a+"]").last().append(t._nestElements(e(this),i)):a===o?n.find(d).last().after(t._nestElements(e(this),i)):n.find(d).last().after(e("<ul/>",{"class":l,"data-tag":a})).next(c).append(t._nestElements(e(this),i))},_setEventHandlers:function(){var i=this;this.element.on("click.tocify","li",function(n){if(i.options.history&&(t.location.hash=e(this).attr("data-unique")),i.element.find("."+i.focusClass).removeClass(i.focusClass),e(this).addClass(i.focusClass),i.options.showAndHide){var s=e('li[data-unique="'+e(this).attr("data-unique")+'"]');i._triggerShow(s)}i._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(i.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==i.options.theme&&e(this).removeClass(i.hoverClass)}}),(i.options.extendPage||i.options.highlightOnScroll||i.options.scrollHistory||i.options.showAndHideOnScroll)&&e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var s,a,o,r,l=e(t).scrollTop(),c=e(t).height(),u=e(n).height(),f=e("body")[0].scrollHeight;if(i.options.extendPage&&(i.webkit&&l>=f-c-i.options.extendPageOffset||!i.webkit&&c+l>u-i.options.extendPageOffset)&&!e(p).length){if(a=e('div[data-unique="'+e(d).last().attr("data-unique")+'"]'),!a.length)return;o=a.offset().top,e(i.options.context).append(e("<div />",{"class":h,"height":Math.abs(o-l)+"px","data-unique":h})),i.extendPageScroll&&(r=i.element.find("li.active"),i._scrollTo(e('div[data-unique="'+r.attr("data-unique")+'"]')))}setTimeout(function(){var n,a=null,o=null,r=e(i.options.context).find("div[data-unique]");r.each(function(t){var n=Math.abs((e(this).next().length?e(this).next():e(this)).offset().top-l-i.options.highlightOffset);if(!(null==a||n<a))return!1;a=n,o=t}),n=e(r[o]).attr("data-unique"),s=e('li[data-unique="'+n+'"]'),i.options.highlightOnScroll&&s.length&&(i.element.find("."+i.focusClass).removeClass(i.focusClass),s.addClass(i.focusClass)),i.options.scrollHistory&&t.location.hash!=="#"+n&&t.location.replace("#"+n),i.options.showAndHideOnScroll&&i.options.showAndHide&&i._triggerShow(s,!0)},0)})})},show:function(t,n){var i=this;if(!t.is(":visible"))switch(t.find(c).length||t.parent().is(r)||t.parent().is(":visible")?t.children(c).length||t.parent().is(r)||(t=t.closest(c)):t=t.parents(c).add(t),i.options.showEffect){case"none":t.show();break;case"show":t.show(i.options.showEffectSpeed);break;case"slideDown":t.slideDown(i.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(i.options.showEffectSpeed);break;default:t.show()}return t.parent().is(r)?i.hide(e(c).not(t)):i.hide(e(c).not(t.closest(r).find(c).not(t.siblings()))),i},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var n=this;return e.parent().is(r)||e.next().is(c)?n.show(e.next(c),t):e.parent().is(c)&&n.show(e.parent(),t),n},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(r+","+c).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass="tocify-focus",this.hoverClass="tocify-hover"),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var n=this,i=n.options.smoothScroll||0,s=n.options.scrollTo,a=e('div[data-unique="'+t.attr("data-unique")+'"]');return a.length?(e("html, body").promise().done(function(){e("html, body").animate({"scrollTop":a.offset().top-(e.isFunction(s)?s.call():s)+"px"},{"duration":i})}),n):n}})})}).call(t,n(1))},93:function(e,t,n){(function(e){!function(t,n,i){function share(e,t){var n=mixin({},h,t||{},dataset(e));n.imageSelector&&(n.image=querySelectorAlls(n.imageSelector).map(function(e){return e.src}).join("||")),addClass(e,"share-component social-share"),createIcons(e,n),createWechat(e,n),e.initialized=!0}function createIcons(e,t){var n=getSites(t),i="prepend"==t.mode;each(i?n.reverse():n,function(n){var s=makeUrl(n,t),a=t.initialized?getElementsByClassName(e,"icon-"+n):createElementByString('<a class="social-share-icon icon-'+n+'"></a>');if(!a.length)return!0;a[0].href=s,"wechat"===n?a[0].tabindex=-1:a[0].target="_blank",t.initialized||(i?e.insertBefore(a[0],e.firstChild):e.appendChild(a[0]))})}function createWechat(e,t){var n=getElementsByClassName(e,"icon-wechat","a");if(0===n.length)return!1;var i=createElementByString('<div class="wechat-qrcode"><h4>'+t.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+t.wechatQrcodeHelper+"</div></div>"),s=getElementsByClassName(i[0],"qrcode","div");n[0].appendChild(i[0]),new QRCode(s[0],{text:t.url,width:t.wechatQrcodeSize,height:t.wechatQrcodeSize})}function getSites(e){e.mobileSites.length||(e.mobileSites=e.sites);var t=(r?e.mobileSites:e.sites).slice(0),n=e.disabled;return"string"==typeof t&&(t=t.split(/\s*,\s*/)),"string"==typeof n&&(n=n.split(/\s*,\s*/)),o&&n.push("wechat"),n.length&&each(n,function(e){t.splice(inArray(e,t),1)}),t}function makeUrl(e,t){return t.summary=t.description,p[e].replace(/\{\{(\w)(\w*)\}\}/g,function(n,s,a){var o=e+s+a.toLowerCase();return a=(s+a).toLowerCase(),encodeURIComponent((t[o]===i?t[a]:t[o])||"")})}function querySelectorAlls(i){return(n.querySelectorAll||e||t.Zepto||selector).call(n,i)}function selector(e){var t=[];return each(e.split(/\s*,\s*/),function(i){var s=i.match(/([#.])(\w+)/);if(null===s)throw Error("Supports only simple single #ID or .CLASS selector.");if(s[1]){var a=n.getElementById(s[2]);a&&t.push(a)}t=t.concat(getElementsByClassName(e))}),t}function addClass(e,t){if(t&&"string"==typeof t){var n=(e.className+" "+t).split(/\s+/),i=" ";each(n,function(e){i.indexOf(" "+e+" ")<0&&(i+=e+" ")}),e.className=i.slice(1,-1)}}function getMetaContentByName(e){return(n.getElementsByName(e)[0]||0).content}function getElementsByClassName(e,t,n){if(e.getElementsByClassName)return e.getElementsByClassName(t);var i=[],s=e.getElementsByTagName(n||"*");return t=" "+t+" ",each(s,function(e){(" "+(e.className||"")+" ").indexOf(t)>=0&&i.push(e)}),i}function createElementByString(e){var t=n.createElement("div");return t.innerHTML=e,t.childNodes}function mixin(){var e=arguments;if(a)return a.apply(null,e);var t={};return each(e,function(e){each(e,function(e,n){t[n]=e})}),e[0]=t}function dataset(e){if(e.dataset)return e.dataset;var t={};return e.hasAttributes()?(each(e.attributes,function(e){var n=e.name;if(0!==n.indexOf("data-"))return!0;n=n.replace(/^data-/i,"").replace(/-(\w)/g,function(e,t){return t.toUpperCase()}),t[n]=e.value}),t):{}}function inArray(e,t,n){var i;if(t){if(s)return s.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1}function each(e,t){var n=e.length;if(n===i){for(var s in e)if(e.hasOwnProperty(s)&&!1===t.call(e[s],e[s],s))break}else for(var a=0;a<n&&!1!==t.call(e[a],e[a],a);a++);}function alReady(e){var i="addEventListener",s=n[i]?"":"on";~n.readyState.indexOf("m")?e():"load DOMContentLoaded readystatechange".replace(/\w+/g,function(a,o){(o?n:t)[s?"attachEvent":i](s+a,function(){e&&(o<6||~n.readyState.indexOf("m"))&&(e(),e=0)},!1)})}var s=Array.prototype.indexOf,a=Object.assign,o=/MicroMessenger/i.test(navigator.userAgent),r=n.documentElement.clientWidth<=768,l=(n.images[0]||0).src||"",c=getMetaContentByName("site")||getMetaContentByName("Site")||n.title,u=getMetaContentByName("title")||getMetaContentByName("Title")||n.title,d=getMetaContentByName("description")||getMetaContentByName("Description")||"",h={url:location.href,origin:location.origin,source:c,title:u,description:d,image:l,imageSelector:i,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","tencent","douban","qzone","linkedin","diandian","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},p={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:"http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",tencent:"http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",weibo:"http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",diandian:"http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};t.socialShare=function(e,t){e="string"==typeof e?querySelectorAlls(e):e,e.length===i&&(e=[e]),each(e,function(e){e.initialized||share(e,t)})},alReady(function(){socialShare(".social-share, .share-component")})}(window,document)}).call(t,n(1))},94:function(e,t){}});