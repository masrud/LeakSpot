var googpcih14salt=9;var COMPILED=!0,googpcih14=googpcih14||{};googpcih14.global=this;googpcih14.DEBUG=!0;googpcih14.LOCALE="en";googpcih14.provide=function(a){if(!COMPILED){if(googpcih14.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete googpcih14.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!googpcih14.getObjectByName(b);)googpcih14.implicitNamespaces_[b]=!0}googpcih14.exportPath_(a)};googpcih14.setTestOnly=function(a){if(COMPILED&&!googpcih14.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};COMPILED||(googpcih14.isProvided_=function(a){return!googpcih14.implicitNamespaces_[a]&&!!googpcih14.getObjectByName(a)},googpcih14.implicitNamespaces_={});googpcih14.exportPath_=function(a,b,c){a=a.split(".");c=c||googpcih14.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&googpcih14.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};googpcih14.getObjectByName=function(a,b){for(var c=a.split("."),d=b||googpcih14.global,e;e=c.shift();)if(googpcih14.isDefAndNotNull(d[e]))d=d[e];else return null;return d};googpcih14.globalize=function(a,b){var c=b||googpcih14.global,d;for(d in a)c[d]=a[d]};googpcih14.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=googpcih14.dependencies_,g=0;d=b[g];g++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};googpcih14.ENABLE_DEBUG_LOADER=!0;googpcih14.require=function(a){if(!COMPILED&&!googpcih14.isProvided_(a)){if(googpcih14.ENABLE_DEBUG_LOADER){var b=googpcih14.getPathFromDeps_(a);if(b){googpcih14.included_[b]=true;googpcih14.writeScripts_();return}}a="googpcih14.require could not find: "+a;googpcih14.global.console&&googpcih14.global.console.error(a);throw Error(a);}};googpcih14.basePath="";googpcih14.nullFunction=function(){};googpcih14.identityFunction=function(a){return a};googpcih14.abstractMethod=function(){throw Error("unimplemented abstract method");};googpcih14.addSingletonGetter=function(a){a.getInstance=function(){return a.instance_||(a.instance_=new a)}};!COMPILED&&googpcih14.ENABLE_DEBUG_LOADER&&(googpcih14.included_={},googpcih14.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},googpcih14.inHtmlDocument_=function(){var a=googpcih14.global.document;return typeof a!="undefined"&&"write"in a},googpcih14.findBasePath_=function(){if(googpcih14.global.CLOSURE_BASE_PATH)googpcih14.basePath=googpcih14.global.CLOSURE_BASE_PATH;else if(googpcih14.inHtmlDocument_())for(var a=googpcih14.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"), d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){googpcih14.basePath=c.substr(0,d-7);break}}},googpcih14.importScript_=function(a){var b=googpcih14.global.CLOSURE_IMPORT_SCRIPT||googpcih14.writeScriptTag_;!googpcih14.dependencies_.written[a]&&b(a)&&(googpcih14.dependencies_.written[a]=true)},googpcih14.writeScriptTag_=function(a){if(googpcih14.inHtmlDocument_()){googpcih14.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},googpcih14.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)){d.visited[e]=true;if(e in d.requires)for(var f in d.requires[e])if(!googpcih14.isProvided_(f))if(f in d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=googpcih14.dependencies_,e;for(e in googpcih14.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])googpcih14.importScript_(googpcih14.basePath+b[e]);else throw Error("Undefined script input");},googpcih14.getPathFromDeps_=function(a){return a in googpcih14.dependencies_.nameToPath?googpcih14.dependencies_.nameToPath[a]: null},googpcih14.findBasePath_(),googpcih14.global.CLOSURE_NO_DEPS||googpcih14.importScript_(googpcih14.basePath+"deps.js"));googpcih14.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b};googpcih14.isDef=function(a){return a!==void 0};googpcih14.isNull=function(a){return a===null};googpcih14.isDefAndNotNull=function(a){return a!=null};googpcih14.isArray=function(a){return googpcih14.typeOf(a)=="array"};googpcih14.isArrayLike=function(a){var b=googpcih14.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};googpcih14.isDateLike=function(a){return googpcih14.isObject(a)&&typeof a.getFullYear=="function"};googpcih14.isString=function(a){return typeof a=="string"};googpcih14.isBoolean=function(a){return typeof a=="boolean"};googpcih14.isNumber=function(a){return typeof a=="number"};googpcih14.isFunction=function(a){return googpcih14.typeOf(a)=="function"};googpcih14.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};googpcih14.getUid=function(a){return a[googpcih14.UID_PROPERTY_]||(a[googpcih14.UID_PROPERTY_]=++googpcih14.uidCounter_)};googpcih14.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(googpcih14.UID_PROPERTY_);try{delete a[googpcih14.UID_PROPERTY_]}catch(b){}};googpcih14.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);googpcih14.uidCounter_=0;googpcih14.getHashCode=googpcih14.getUid;googpcih14.removeHashCode=googpcih14.removeUid;googpcih14.cloneObject=function(a){var b=googpcih14.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=googpcih14.cloneObject(a[c]);return b}return a};googpcih14.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};googpcih14.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};googpcih14.bind=function(a,b,c){googpcih14.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?googpcih14.bindNative_:googpcih14.bindJs_;return googpcih14.bind.apply(null,arguments)};googpcih14.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};googpcih14.mixin=function(a,b){for(var c in b)a[c]=b[c]};googpcih14.now=Date.now||function(){return+new Date};googpcih14.globalEval=function(a){if(googpcih14.global.execScript)googpcih14.global.execScript(a,"JavaScript");else if(googpcih14.global.eval){if(googpcih14.evalWorksForGlobals_==null){googpcih14.global.eval("var _et_ = 1;");if(typeof googpcih14.global._et_!="undefined"){delete googpcih14.global._et_;googpcih14.evalWorksForGlobals_=true}else googpcih14.evalWorksForGlobals_=false}if(googpcih14.evalWorksForGlobals_)googpcih14.global.eval(a);else{var b=googpcih14.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("googpcih14.globalEval not available");};googpcih14.evalWorksForGlobals_=null;googpcih14.getCssName=function(a,b){var c=function(a){return googpcih14.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=googpcih14.cssNameMapping_?googpcih14.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};googpcih14.setCssNameMapping=function(a,b){googpcih14.cssNameMapping_=a;googpcih14.cssNameMappingStyle_=b};!COMPILED&&googpcih14.global.CLOSURE_CSS_NAME_MAPPING&&(googpcih14.cssNameMapping_=googpcih14.global.CLOSURE_CSS_NAME_MAPPING);googpcih14.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};googpcih14.exportSymbol=function(a,b,c){googpcih14.exportPath_(a,b,c)};googpcih14.exportProperty=function(a,b,c){a[b]=c};googpcih14.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};googpcih14.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),g=false,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===d)g=true;else if(g)return f.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("googpcih14.base called from a method of one name to a method of a different name");};googpcih14.scope=function(a){a.call(googpcih14.global)};(function(){return googpcih14.cloneObject(googpcih14salt);})();