JSProf.LFC(8495, define, false)(JSProf.LNE(8460, [
    "../has",
    "require"
], 10), JSProf.LNF(8494, function (has, require) {
    // module:
    //		dojo/_base/config
    /*=====
    return {
    	// summary:
    	//		This module defines the user configuration during bootstrap.
    	// description:
    	//		By defining user configuration as a module value, an entire configuration can be specified in a build,
    	//		thereby eliminating the need for sniffing and or explicitly setting in the global variable dojoConfig.
    	//		Also, when multiple instances of dojo exist in a single application, each will necessarily be located
    	//		at an unique absolute module identifier as given by the package configuration. Implementing configuration
    	//		as a module allows for specifying unique, per-instance configurations.
    	// example:
    	//		Create a second instance of dojo with a different, instance-unique configuration (assume the loader and
    	//		dojo.js are already loaded).
    	//		|	// specify a configuration that creates a new instance of dojo at the absolute module identifier "myDojo"
    	//		|	require({
    	//		|		packages:[{
    	//		|			name:"myDojo",
    	//		|			location:".", //assume baseUrl points to dojo.js
    	//		|		}]
    	//		|	});
    	//		|
    	//		|	// specify a configuration for the myDojo instance
    	//		|	define("myDojo/config", {
    	//		|		// normal configuration variables go here, e.g.,
    	//		|		locale:"fr-ca"
    	//		|	});
    	//		|
    	//		|	// load and use the new instance of dojo
    	//		|	require(["myDojo"], function(dojo){
    	//		|		// dojo is the new instance of dojo
    	//		|		// use as required
    	//		|	});
    
    	// isDebug: Boolean
    	//		Defaults to `false`. If set to `true`, ensures that Dojo provides
    	//		extended debugging feedback via Firebug. If Firebug is not available
    	//		on your platform, setting `isDebug` to `true` will force Dojo to
    	//		pull in (and display) the version of Firebug Lite which is
    	//		integrated into the Dojo distribution, thereby always providing a
    	//		debugging/logging console when `isDebug` is enabled. Note that
    	//		Firebug's `console.*` methods are ALWAYS defined by Dojo. If
    	//		`isDebug` is false and you are on a platform without Firebug, these
    	//		methods will be defined as no-ops.
    	isDebug: false,
    
    	// locale: String
    	//		The locale to assume for loading localized resources in this page,
    	//		specified according to [RFC 3066](http://www.ietf.org/rfc/rfc3066.txt).
    	//		Must be specified entirely in lowercase, e.g. `en-us` and `zh-cn`.
    	//		See the documentation for `dojo.i18n` and `dojo.requireLocalization`
    	//		for details on loading localized resources. If no locale is specified,
    	//		Dojo assumes the locale of the user agent, according to `navigator.userLanguage`
    	//		or `navigator.language` properties.
    	locale: undefined,
    
    	// extraLocale: Array
    	//		No default value. Specifies additional locales whose
    	//		resources should also be loaded alongside the default locale when
    	//		calls to `dojo.requireLocalization()` are processed.
    	extraLocale: undefined,
    
    	// baseUrl: String
    	//		The directory in which `dojo.js` is located. Under normal
    	//		conditions, Dojo auto-detects the correct location from which it
    	//		was loaded. You may need to manually configure `baseUrl` in cases
    	//		where you have renamed `dojo.js` or in which `<base>` tags confuse
    	//		some browsers (e.g. IE 6). The variable `dojo.baseUrl` is assigned
    	//		either the value of `djConfig.baseUrl` if one is provided or the
    	//		auto-detected root if not. Other modules are located relative to
    	//		this path. The path should end in a slash.
    	baseUrl: undefined,
    
    	// modulePaths: [deprecated] Object
    	//		A map of module names to paths relative to `dojo.baseUrl`. The
    	//		key/value pairs correspond directly to the arguments which
    	//		`dojo.registerModulePath` accepts. Specifying
    	//		`djConfig.modulePaths = { "foo": "../../bar" }` is the equivalent
    	//		of calling `dojo.registerModulePath("foo", "../../bar");`. Multiple
    	//		modules may be configured via `djConfig.modulePaths`.
    	modulePaths: {},
    
    	// addOnLoad: Function|Array
    	//		Adds a callback via dojo/ready. Useful when Dojo is added after
    	//		the page loads and djConfig.afterOnLoad is true. Supports the same
    	//		arguments as dojo/ready. When using a function reference, use
    	//		`djConfig.addOnLoad = function(){};`. For object with function name use
    	//		`djConfig.addOnLoad = [myObject, "functionName"];` and for object with
    	//		function reference use
    	//		`djConfig.addOnLoad = [myObject, function(){}];`
    	addOnLoad: null,
    
    	// parseOnLoad: Boolean
    	//		Run the parser after the page is loaded
    	parseOnLoad: false,
    
    	// require: String[]
    	//		An array of module names to be loaded immediately after dojo.js has been included
    	//		in a page.
    	require: [],
    
    	// defaultDuration: Number
    	//		Default duration, in milliseconds, for wipe and fade animations within dijits.
    	//		Assigned to dijit.defaultDuration.
    	defaultDuration: 200,
    
    	// dojoBlankHtmlUrl: String
    	//		Used by some modules to configure an empty iframe. Used by dojo/io/iframe and
    	//		dojo/back, and dijit/popup support in IE where an iframe is needed to make sure native
    	//		controls do not bleed through the popups. Normally this configuration variable
    	//		does not need to be set, except when using cross-domain/CDN Dojo builds.
    	//		Save dojo/resources/blank.html to your domain and set `djConfig.dojoBlankHtmlUrl`
    	//		to the path on your domain your copy of blank.html.
    	dojoBlankHtmlUrl: undefined,
    
    	// ioPublish: Boolean?
    	//		Set this to true to enable publishing of topics for the different phases of
    	//		IO operations. Publishing is done via dojo/topic.publish(). See dojo/main.__IoPublish for a list
    	//		of topics that are published.
    	ioPublish: false,
    
    	// useCustomLogger: Anything?
    	//		If set to a value that evaluates to true such as a string or array and
    	//		isDebug is true and Firebug is not available or running, then it bypasses
    	//		the creation of Firebug Lite allowing you to define your own console object.
    	useCustomLogger: undefined,
    
    	// transparentColor: Array
    	//		Array containing the r, g, b components used as transparent color in dojo.Color;
    	//		if undefined, [255,255,255] (white) will be used.
    	transparentColor: undefined,
    	
    	// deps: Function|Array
    	//		Defines dependencies to be used before the loader has been loaded.
    	//		When provided, they cause the loader to execute require(deps, callback) 
    	//		once it has finished loading. Should be used with callback.
    	deps: undefined,
    	
    	// callback: Function|Array
    	//		Defines a callback to be used when dependencies are defined before 
    	//		the loader has been loaded. When provided, they cause the loader to 
    	//		execute require(deps, callback) once it has finished loading. 
    	//		Should be used with deps.
    	callback: undefined,
    	
    	// deferredInstrumentation: Boolean
    	//		Whether deferred instrumentation should be loaded or included
    	//		in builds.
    	deferredInstrumentation: true,
    
    	// useDeferredInstrumentation: Boolean|String
    	//		Whether the deferred instrumentation should be used.
    	//
    	//		* `"report-rejections"`: report each rejection as it occurs.
    	//		* `true` or `1` or `"report-unhandled-rejections"`: wait 1 second
    	//			in an attempt to detect unhandled rejections.
    	useDeferredInstrumentation: "report-unhandled-rejections"
    };
    =====*/
    var result = JSProf.LNE(8461, {}, 11);
    if (JSProf.LFC(8462, has, false)("dojo-config-api")) {
        // must be the dojo loader; take a shallow copy of require.rawConfig
        var src = JSProf.LGD(8463, require, 'rawConfig').rawConfig, p;
        for (p in JSProf.LRE(8464, src)) {
            JSProf.LPE(8466, result, 'p')[p] = JSProf.LRPE(8466, JSProf.LGE(8465, src, 'p')[p]);
        }
    } else {
        var adviseHas = JSProf.LNF(8474, function (featureSet, prefix, booting) {
                for (p in JSProf.LRE(8467, featureSet)) {
                    JSProf.LRE(8468, p) != "has" && JSProf.LMC(8473, has, 'add').add(JSProf.LRE(8469, prefix) + JSProf.LRE(8470, p), JSProf.LGE(8471, featureSet, 'p')[p], 0, JSProf.LRE(8472, booting));
                }
            }, 12);
        var global = JSProf.LFC(8476, JSProf.LNF(8475, function () {
                return this;
            }, 12), false)();
        result = JSProf.LWR(8482, result, JSProf.LFC(8477, has, false)("dojo-loader") ? JSProf.LGD(8478, require, 'rawConfig').rawConfig : JSProf.LGD(8479, global, 'dojoConfig').dojoConfig || JSProf.LGD(8480, global, 'djConfig').djConfig || JSProf.LNE(8481, {}, 11));
        JSProf.LFC(8484, adviseHas, false)(JSProf.LRE(8483, result), "config", 1);
        JSProf.LFC(8486, adviseHas, false)(JSProf.LGD(8485, result, 'has').has, "", 1);
    }
    if (!JSProf.LGD(8487, result, 'locale').locale && typeof JSProf.LRU(8488, typeof navigator === 'undefined' ? undefined : navigator) != "undefined") {
        // Default locale for browsers.
        var language = JSProf.LGD(8489, navigator, 'language').language || JSProf.LGD(8490, navigator, 'userLanguage').userLanguage;
        if (JSProf.LRE(8491, language)) {
            JSProf.LPD(8492, result, 'locale').locale = JSProf.LRSP(8492, language.toLowerCase());
        }
    }
    return JSProf.LRE(8493, result);
}, 12));