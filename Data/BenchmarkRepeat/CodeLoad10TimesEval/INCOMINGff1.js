var goog0salt=0;var COMPILED=!0,goog0=goog0||{};goog0.global=this;goog0.DEBUG=!0;goog0.LOCALE="en";goog0.provide=function(a){if(!COMPILED){if(goog0.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog0.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog0.getObjectByName(b);)goog0.implicitNamespaces_[b]=!0}goog0.exportPath_(a)};goog0.setTestOnly=function(a){if(COMPILED&&!goog0.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};COMPILED||(goog0.isProvided_=function(a){return!goog0.implicitNamespaces_[a]&&!!goog0.getObjectByName(a)},goog0.implicitNamespaces_={});goog0.exportPath_=function(a,b,c){a=a.split(".");c=c||goog0.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog0.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog0.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog0.global,e;e=c.shift();)if(goog0.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog0.globalize=function(a,b){var c=b||goog0.global,d;for(d in a)c[d]=a[d]};goog0.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=goog0.dependencies_,g=0;d=b[g];g++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};goog0.ENABLE_DEBUG_LOADER=!0;goog0.require=function(a){if(!COMPILED&&!goog0.isProvided_(a)){if(goog0.ENABLE_DEBUG_LOADER){var b=goog0.getPathFromDeps_(a);if(b){goog0.included_[b]=true;goog0.writeScripts_();return}}a="goog0.require could not find: "+a;goog0.global.console&&goog0.global.console.error(a);throw Error(a);}};goog0.basePath="";goog0.nullFunction=function(){};goog0.identityFunction=function(a){return a};goog0.abstractMethod=function(){throw Error("unimplemented abstract method");};goog0.addSingletonGetter=function(a){a.getInstance=function(){return a.instance_||(a.instance_=new a)}};!COMPILED&&goog0.ENABLE_DEBUG_LOADER&&(goog0.included_={},goog0.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog0.inHtmlDocument_=function(){var a=goog0.global.document;return typeof a!="undefined"&&"write"in a},goog0.findBasePath_=function(){if(goog0.global.CLOSURE_BASE_PATH)goog0.basePath=goog0.global.CLOSURE_BASE_PATH;else if(goog0.inHtmlDocument_())for(var a=goog0.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"), d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){goog0.basePath=c.substr(0,d-7);break}}},goog0.importScript_=function(a){var b=goog0.global.CLOSURE_IMPORT_SCRIPT||goog0.writeScriptTag_;!goog0.dependencies_.written[a]&&b(a)&&(goog0.dependencies_.written[a]=true)},goog0.writeScriptTag_=function(a){if(goog0.inHtmlDocument_()){goog0.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},goog0.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)){d.visited[e]=true;if(e in d.requires)for(var f in d.requires[e])if(!goog0.isProvided_(f))if(f in d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=goog0.dependencies_,e;for(e in goog0.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog0.importScript_(goog0.basePath+b[e]);else throw Error("Undefined script input");},goog0.getPathFromDeps_=function(a){return a in goog0.dependencies_.nameToPath?goog0.dependencies_.nameToPath[a]: null},goog0.findBasePath_(),goog0.global.CLOSURE_NO_DEPS||goog0.importScript_(goog0.basePath+"deps.js"));goog0.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b};goog0.isDef=function(a){return a!==void 0};goog0.isNull=function(a){return a===null};goog0.isDefAndNotNull=function(a){return a!=null};goog0.isArray=function(a){return goog0.typeOf(a)=="array"};goog0.isArrayLike=function(a){var b=goog0.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};goog0.isDateLike=function(a){return goog0.isObject(a)&&typeof a.getFullYear=="function"};goog0.isString=function(a){return typeof a=="string"};goog0.isBoolean=function(a){return typeof a=="boolean"};goog0.isNumber=function(a){return typeof a=="number"};goog0.isFunction=function(a){return goog0.typeOf(a)=="function"};goog0.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};goog0.getUid=function(a){return a[goog0.UID_PROPERTY_]||(a[goog0.UID_PROPERTY_]=++goog0.uidCounter_)};goog0.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog0.UID_PROPERTY_);try{delete a[goog0.UID_PROPERTY_]}catch(b){}};goog0.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog0.uidCounter_=0;goog0.getHashCode=goog0.getUid;goog0.removeHashCode=goog0.removeUid;goog0.cloneObject=function(a){var b=goog0.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=goog0.cloneObject(a[c]);return b}return a};goog0.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};goog0.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog0.bind=function(a,b,c){goog0.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog0.bindNative_:goog0.bindJs_;return goog0.bind.apply(null,arguments)};goog0.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog0.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog0.now=Date.now||function(){return+new Date};goog0.globalEval=function(a){if(goog0.global.execScript)goog0.global.execScript(a,"JavaScript");else if(goog0.global.eval){if(goog0.evalWorksForGlobals_==null){goog0.global.eval("var _et_ = 1;");if(typeof goog0.global._et_!="undefined"){delete goog0.global._et_;goog0.evalWorksForGlobals_=true}else goog0.evalWorksForGlobals_=false}if(goog0.evalWorksForGlobals_)goog0.global.eval(a);else{var b=goog0.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog0.globalEval not available");};goog0.evalWorksForGlobals_=null;goog0.getCssName=function(a,b){var c=function(a){return goog0.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog0.cssNameMapping_?goog0.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog0.setCssNameMapping=function(a,b){goog0.cssNameMapping_=a;goog0.cssNameMappingStyle_=b};!COMPILED&&goog0.global.CLOSURE_CSS_NAME_MAPPING&&(goog0.cssNameMapping_=goog0.global.CLOSURE_CSS_NAME_MAPPING);goog0.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};goog0.exportSymbol=function(a,b,c){goog0.exportPath_(a,b,c)};goog0.exportProperty=function(a,b,c){a[b]=c};goog0.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};goog0.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),g=false,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===d)g=true;else if(g)return f.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog0.base called from a method of one name to a method of a different name");};goog0.scope=function(a){a.call(goog0.global)};(function(){return goog0.cloneObject(goog0salt);})();