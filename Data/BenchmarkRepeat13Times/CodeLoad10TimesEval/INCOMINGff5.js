var googkbi1disalt=4;var COMPILED=!0,googkbi1di=googkbi1di||{};googkbi1di.global=this;googkbi1di.DEBUG=!0;googkbi1di.LOCALE="en";googkbi1di.provide=function(a){if(!COMPILED){if(googkbi1di.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete googkbi1di.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!googkbi1di.getObjectByName(b);)googkbi1di.implicitNamespaces_[b]=!0}googkbi1di.exportPath_(a)};googkbi1di.setTestOnly=function(a){if(COMPILED&&!googkbi1di.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};COMPILED||(googkbi1di.isProvided_=function(a){return!googkbi1di.implicitNamespaces_[a]&&!!googkbi1di.getObjectByName(a)},googkbi1di.implicitNamespaces_={});googkbi1di.exportPath_=function(a,b,c){a=a.split(".");c=c||googkbi1di.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&googkbi1di.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};googkbi1di.getObjectByName=function(a,b){for(var c=a.split("."),d=b||googkbi1di.global,e;e=c.shift();)if(googkbi1di.isDefAndNotNull(d[e]))d=d[e];else return null;return d};googkbi1di.globalize=function(a,b){var c=b||googkbi1di.global,d;for(d in a)c[d]=a[d]};googkbi1di.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=googkbi1di.dependencies_,g=0;d=b[g];g++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};googkbi1di.ENABLE_DEBUG_LOADER=!0;googkbi1di.require=function(a){if(!COMPILED&&!googkbi1di.isProvided_(a)){if(googkbi1di.ENABLE_DEBUG_LOADER){var b=googkbi1di.getPathFromDeps_(a);if(b){googkbi1di.included_[b]=true;googkbi1di.writeScripts_();return}}a="googkbi1di.require could not find: "+a;googkbi1di.global.console&&googkbi1di.global.console.error(a);throw Error(a);}};googkbi1di.basePath="";googkbi1di.nullFunction=function(){};googkbi1di.identityFunction=function(a){return a};googkbi1di.abstractMethod=function(){throw Error("unimplemented abstract method");};googkbi1di.addSingletonGetter=function(a){a.getInstance=function(){return a.instance_||(a.instance_=new a)}};!COMPILED&&googkbi1di.ENABLE_DEBUG_LOADER&&(googkbi1di.included_={},googkbi1di.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},googkbi1di.inHtmlDocument_=function(){var a=googkbi1di.global.document;return typeof a!="undefined"&&"write"in a},googkbi1di.findBasePath_=function(){if(googkbi1di.global.CLOSURE_BASE_PATH)googkbi1di.basePath=googkbi1di.global.CLOSURE_BASE_PATH;else if(googkbi1di.inHtmlDocument_())for(var a=googkbi1di.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"), d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){googkbi1di.basePath=c.substr(0,d-7);break}}},googkbi1di.importScript_=function(a){var b=googkbi1di.global.CLOSURE_IMPORT_SCRIPT||googkbi1di.writeScriptTag_;!googkbi1di.dependencies_.written[a]&&b(a)&&(googkbi1di.dependencies_.written[a]=true)},googkbi1di.writeScriptTag_=function(a){if(googkbi1di.inHtmlDocument_()){googkbi1di.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},googkbi1di.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)){d.visited[e]=true;if(e in d.requires)for(var f in d.requires[e])if(!googkbi1di.isProvided_(f))if(f in d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=googkbi1di.dependencies_,e;for(e in googkbi1di.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])googkbi1di.importScript_(googkbi1di.basePath+b[e]);else throw Error("Undefined script input");},googkbi1di.getPathFromDeps_=function(a){return a in googkbi1di.dependencies_.nameToPath?googkbi1di.dependencies_.nameToPath[a]: null},googkbi1di.findBasePath_(),googkbi1di.global.CLOSURE_NO_DEPS||googkbi1di.importScript_(googkbi1di.basePath+"deps.js"));googkbi1di.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b};googkbi1di.isDef=function(a){return a!==void 0};googkbi1di.isNull=function(a){return a===null};googkbi1di.isDefAndNotNull=function(a){return a!=null};googkbi1di.isArray=function(a){return googkbi1di.typeOf(a)=="array"};googkbi1di.isArrayLike=function(a){var b=googkbi1di.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};googkbi1di.isDateLike=function(a){return googkbi1di.isObject(a)&&typeof a.getFullYear=="function"};googkbi1di.isString=function(a){return typeof a=="string"};googkbi1di.isBoolean=function(a){return typeof a=="boolean"};googkbi1di.isNumber=function(a){return typeof a=="number"};googkbi1di.isFunction=function(a){return googkbi1di.typeOf(a)=="function"};googkbi1di.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};googkbi1di.getUid=function(a){return a[googkbi1di.UID_PROPERTY_]||(a[googkbi1di.UID_PROPERTY_]=++googkbi1di.uidCounter_)};googkbi1di.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(googkbi1di.UID_PROPERTY_);try{delete a[googkbi1di.UID_PROPERTY_]}catch(b){}};googkbi1di.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);googkbi1di.uidCounter_=0;googkbi1di.getHashCode=googkbi1di.getUid;googkbi1di.removeHashCode=googkbi1di.removeUid;googkbi1di.cloneObject=function(a){var b=googkbi1di.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=googkbi1di.cloneObject(a[c]);return b}return a};googkbi1di.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};googkbi1di.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};googkbi1di.bind=function(a,b,c){googkbi1di.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?googkbi1di.bindNative_:googkbi1di.bindJs_;return googkbi1di.bind.apply(null,arguments)};googkbi1di.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};googkbi1di.mixin=function(a,b){for(var c in b)a[c]=b[c]};googkbi1di.now=Date.now||function(){return+new Date};googkbi1di.globalEval=function(a){if(googkbi1di.global.execScript)googkbi1di.global.execScript(a,"JavaScript");else if(googkbi1di.global.eval){if(googkbi1di.evalWorksForGlobals_==null){googkbi1di.global.eval("var _et_ = 1;");if(typeof googkbi1di.global._et_!="undefined"){delete googkbi1di.global._et_;googkbi1di.evalWorksForGlobals_=true}else googkbi1di.evalWorksForGlobals_=false}if(googkbi1di.evalWorksForGlobals_)googkbi1di.global.eval(a);else{var b=googkbi1di.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("googkbi1di.globalEval not available");};googkbi1di.evalWorksForGlobals_=null;googkbi1di.getCssName=function(a,b){var c=function(a){return googkbi1di.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=googkbi1di.cssNameMapping_?googkbi1di.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};googkbi1di.setCssNameMapping=function(a,b){googkbi1di.cssNameMapping_=a;googkbi1di.cssNameMappingStyle_=b};!COMPILED&&googkbi1di.global.CLOSURE_CSS_NAME_MAPPING&&(googkbi1di.cssNameMapping_=googkbi1di.global.CLOSURE_CSS_NAME_MAPPING);googkbi1di.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};googkbi1di.exportSymbol=function(a,b,c){googkbi1di.exportPath_(a,b,c)};googkbi1di.exportProperty=function(a,b,c){a[b]=c};googkbi1di.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};googkbi1di.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),g=false,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===d)g=true;else if(g)return f.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("googkbi1di.base called from a method of one name to a method of a different name");};googkbi1di.scope=function(a){a.call(googkbi1di.global)};(function(){return googkbi1di.cloneObject(googkbi1disalt);})();