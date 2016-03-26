var googue3z84salt=8;var COMPILED=!0,googue3z84=googue3z84||{};googue3z84.global=this;googue3z84.DEBUG=!0;googue3z84.LOCALE="en";googue3z84.provide=function(a){if(!COMPILED){if(googue3z84.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete googue3z84.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!googue3z84.getObjectByName(b);)googue3z84.implicitNamespaces_[b]=!0}googue3z84.exportPath_(a)};googue3z84.setTestOnly=function(a){if(COMPILED&&!googue3z84.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};COMPILED||(googue3z84.isProvided_=function(a){return!googue3z84.implicitNamespaces_[a]&&!!googue3z84.getObjectByName(a)},googue3z84.implicitNamespaces_={});googue3z84.exportPath_=function(a,b,c){a=a.split(".");c=c||googue3z84.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&googue3z84.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};googue3z84.getObjectByName=function(a,b){for(var c=a.split("."),d=b||googue3z84.global,e;e=c.shift();)if(googue3z84.isDefAndNotNull(d[e]))d=d[e];else return null;return d};googue3z84.globalize=function(a,b){var c=b||googue3z84.global,d;for(d in a)c[d]=a[d]};googue3z84.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=googue3z84.dependencies_,g=0;d=b[g];g++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};googue3z84.ENABLE_DEBUG_LOADER=!0;googue3z84.require=function(a){if(!COMPILED&&!googue3z84.isProvided_(a)){if(googue3z84.ENABLE_DEBUG_LOADER){var b=googue3z84.getPathFromDeps_(a);if(b){googue3z84.included_[b]=true;googue3z84.writeScripts_();return}}a="googue3z84.require could not find: "+a;googue3z84.global.console&&googue3z84.global.console.error(a);throw Error(a);}};googue3z84.basePath="";googue3z84.nullFunction=function(){};googue3z84.identityFunction=function(a){return a};googue3z84.abstractMethod=function(){throw Error("unimplemented abstract method");};googue3z84.addSingletonGetter=function(a){a.getInstance=function(){return a.instance_||(a.instance_=new a)}};!COMPILED&&googue3z84.ENABLE_DEBUG_LOADER&&(googue3z84.included_={},googue3z84.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},googue3z84.inHtmlDocument_=function(){var a=googue3z84.global.document;return typeof a!="undefined"&&"write"in a},googue3z84.findBasePath_=function(){if(googue3z84.global.CLOSURE_BASE_PATH)googue3z84.basePath=googue3z84.global.CLOSURE_BASE_PATH;else if(googue3z84.inHtmlDocument_())for(var a=googue3z84.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"), d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){googue3z84.basePath=c.substr(0,d-7);break}}},googue3z84.importScript_=function(a){var b=googue3z84.global.CLOSURE_IMPORT_SCRIPT||googue3z84.writeScriptTag_;!googue3z84.dependencies_.written[a]&&b(a)&&(googue3z84.dependencies_.written[a]=true)},googue3z84.writeScriptTag_=function(a){if(googue3z84.inHtmlDocument_()){googue3z84.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},googue3z84.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)){d.visited[e]=true;if(e in d.requires)for(var f in d.requires[e])if(!googue3z84.isProvided_(f))if(f in d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=googue3z84.dependencies_,e;for(e in googue3z84.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])googue3z84.importScript_(googue3z84.basePath+b[e]);else throw Error("Undefined script input");},googue3z84.getPathFromDeps_=function(a){return a in googue3z84.dependencies_.nameToPath?googue3z84.dependencies_.nameToPath[a]: null},googue3z84.findBasePath_(),googue3z84.global.CLOSURE_NO_DEPS||googue3z84.importScript_(googue3z84.basePath+"deps.js"));googue3z84.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b};googue3z84.isDef=function(a){return a!==void 0};googue3z84.isNull=function(a){return a===null};googue3z84.isDefAndNotNull=function(a){return a!=null};googue3z84.isArray=function(a){return googue3z84.typeOf(a)=="array"};googue3z84.isArrayLike=function(a){var b=googue3z84.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};googue3z84.isDateLike=function(a){return googue3z84.isObject(a)&&typeof a.getFullYear=="function"};googue3z84.isString=function(a){return typeof a=="string"};googue3z84.isBoolean=function(a){return typeof a=="boolean"};googue3z84.isNumber=function(a){return typeof a=="number"};googue3z84.isFunction=function(a){return googue3z84.typeOf(a)=="function"};googue3z84.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};googue3z84.getUid=function(a){return a[googue3z84.UID_PROPERTY_]||(a[googue3z84.UID_PROPERTY_]=++googue3z84.uidCounter_)};googue3z84.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(googue3z84.UID_PROPERTY_);try{delete a[googue3z84.UID_PROPERTY_]}catch(b){}};googue3z84.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);googue3z84.uidCounter_=0;googue3z84.getHashCode=googue3z84.getUid;googue3z84.removeHashCode=googue3z84.removeUid;googue3z84.cloneObject=function(a){var b=googue3z84.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=googue3z84.cloneObject(a[c]);return b}return a};googue3z84.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};googue3z84.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};googue3z84.bind=function(a,b,c){googue3z84.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?googue3z84.bindNative_:googue3z84.bindJs_;return googue3z84.bind.apply(null,arguments)};googue3z84.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};googue3z84.mixin=function(a,b){for(var c in b)a[c]=b[c]};googue3z84.now=Date.now||function(){return+new Date};googue3z84.globalEval=function(a){if(googue3z84.global.execScript)googue3z84.global.execScript(a,"JavaScript");else if(googue3z84.global.eval){if(googue3z84.evalWorksForGlobals_==null){googue3z84.global.eval("var _et_ = 1;");if(typeof googue3z84.global._et_!="undefined"){delete googue3z84.global._et_;googue3z84.evalWorksForGlobals_=true}else googue3z84.evalWorksForGlobals_=false}if(googue3z84.evalWorksForGlobals_)googue3z84.global.eval(a);else{var b=googue3z84.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("googue3z84.globalEval not available");};googue3z84.evalWorksForGlobals_=null;googue3z84.getCssName=function(a,b){var c=function(a){return googue3z84.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=googue3z84.cssNameMapping_?googue3z84.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};googue3z84.setCssNameMapping=function(a,b){googue3z84.cssNameMapping_=a;googue3z84.cssNameMappingStyle_=b};!COMPILED&&googue3z84.global.CLOSURE_CSS_NAME_MAPPING&&(googue3z84.cssNameMapping_=googue3z84.global.CLOSURE_CSS_NAME_MAPPING);googue3z84.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};googue3z84.exportSymbol=function(a,b,c){googue3z84.exportPath_(a,b,c)};googue3z84.exportProperty=function(a,b,c){a[b]=c};googue3z84.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};googue3z84.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),g=false,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===d)g=true;else if(g)return f.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("googue3z84.base called from a method of one name to a method of a different name");};googue3z84.scope=function(a){a.call(googue3z84.global)};(function(){return googue3z84.cloneObject(googue3z84salt);})();