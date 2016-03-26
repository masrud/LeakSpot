JSProf.LFC(7456, define, false)(JSProf.LNE(7320, [
    "../has",
    "./config",
    "require",
    "module"
], 10), JSProf.LNF(7455, function (has, config, require, module) {
    // module:
    //		dojo/_base/kernel
    // This module is the foundational module of the dojo boot sequence; it defines the dojo object.
    var
        // loop variables for this module
        i, p,
        // create dojo, dijit, and dojox
        // FIXME: in 2.0 remove dijit, dojox being created by dojo
        global = JSProf.LFC(7322, JSProf.LNF(7321, function () {
            return this;
        }, 12), false)(), dijit = JSProf.LNE(7323, {}, 11), dojox = JSProf.LNE(7324, {}, 11), dojo = JSProf.LNE(7325, {
            config: config,
            global: global,
            dijit: dijit,
            dojox: dojox
        }, 11);
    // Configure the scope map. For a 100% AMD application, the scope map is not needed other than to provide
    // a _scopeName property for the dojo, dijit, and dojox root object so those packages can create
    // unique names in the global space.
    //
    // Built, legacy modules use the scope map to allow those modules to be expressed as if dojo, dijit, and dojox,
    // where global when in fact they are either global under different names or not global at all. In v1.6-, the
    // config variable "scopeMap" was used to map names as used within a module to global names. This has been
    // subsumed by the AMD map configuration variable which can relocate packages to different names. For backcompat,
    // only the "*" mapping is supported. See http://livedocs.dojotoolkit.org/developer/design/loader#legacy-cross-domain-mode for details.
    //
    // The following computations contort the packageMap for this dojo instance into a scopeMap.
    var scopeMap = JSProf.LNE(7332, {
            dojo: JSProf.LNE(7327, [
                "dojo",
                JSProf.LRE(7326, dojo)
            ], 10),
            dijit: JSProf.LNE(7329, [
                "dijit",
                JSProf.LRE(7328, dijit)
            ], 10),
            dojox: JSProf.LNE(7331, [
                "dojox",
                JSProf.LRE(7330, dojox)
            ], 10)
        }, 11), packageMap = JSProf.LGD(7333, require, 'map').map && JSProf.LGE(7335, require.map, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = JSProf.LMC(7334, module.id, 'match').match(/[^\/]+/)[0])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a], item;
    // process all mapped top-level names for this instance of dojo
    for (p in JSProf.LRE(7336, packageMap)) {
        if (JSProf.LGE(7337, scopeMap, 'p')[p]) {
            // mapped dojo, dijit, or dojox
            JSProf.LPE(7339, scopeMap[p], 0)[0] = JSProf.LRPE(7339, JSProf.LGE(7338, packageMap, 'p')[p]);
        } else {
            // some other top-level name
            JSProf.LPE(7343, scopeMap, 'p')[p] = JSProf.LRPE(7343, JSProf.LNE(7342, [
                JSProf.LGE(7340, packageMap, 'p')[p],
                JSProf.LNE(7341, {}, 11)
            ], 10));
        }
    }
    // publish those names to _scopeName and, optionally, the global namespace
    for (p in JSProf.LRE(7344, scopeMap)) {
        item = JSProf.LWR(7346, item, JSProf.LGE(7345, scopeMap, 'p')[p]);
        JSProf.LPD(7348, item[1], '_scopeName')._scopeName = JSProf.LRSP(7348, JSProf.LGE(7347, item, 0)[0]);
        if (!JSProf.LGD(7349, config, 'noGlobals').noGlobals) {
            JSProf.LPE(7351, global, JSProf.TMPS.t01044239f37584722d4945b817eba55e4980abb1 = item[0])[JSProf.TMPS.t01044239f37584722d4945b817eba55e4980abb1] = JSProf.LRPE(7351, JSProf.LGE(7350, item, 1)[1]);
        }
    }
    JSProf.LPD(7353, dojo, 'scopeMap').scopeMap = JSProf.LRSP(7353, JSProf.LRE(7352, scopeMap));
    /*===== dojo.__docParserConfigureScopeMap(scopeMap); =====*/
    // FIXME: dojo.baseUrl and dojo.config.baseUrl should be deprecated
    JSProf.LPD(7356, dojo, 'baseUrl').baseUrl = JSProf.LRSP(7356, JSProf.LPD(7355, dojo.config, 'baseUrl').baseUrl = JSProf.LRSP(7355, JSProf.LGD(7354, require, 'baseUrl').baseUrl));
    JSProf.LPD(7359, dojo, 'isAsync').isAsync = JSProf.LRSP(7359, !JSProf.LFC(7357, has, false)("dojo-loader") || JSProf.LGD(7358, require, 'async').async);
    JSProf.LPD(7361, dojo, 'locale').locale = JSProf.LRSP(7361, JSProf.LGD(7360, config, 'locale').locale);
    var rev = JSProf.LMC(7362, "$Rev: 18f9767 $", 'match').match(/[0-9a-f]{7,}/);
    JSProf.LPD(7371, dojo, 'version').version = JSProf.LRSP(7371, JSProf.LNE(7370, {
        major: 1,
        minor: 10,
        patch: 2,
        flag: "",
        revision: rev ? rev[0] : NaN,
        toString: JSProf.LNF(7369, function () {
            var v = JSProf.LGD(7363, dojo, 'version').version;
            return JSProf.LGD(7364, v, 'major').major + "." + JSProf.LGD(7365, v, 'minor').minor + "." + JSProf.LGD(7366, v, 'patch').patch + JSProf.LGD(7367, v, 'flag').flag + " (" + JSProf.LGD(7368, v, 'revision').revision + ")";    // String
        }, 12)
    }, 11));
    // If has("extend-dojo") is truthy, then as a dojo module is defined it should push it's definitions
    // into the dojo object, and conversely. In 2.0, it will likely be unusual to augment another object
    // as a result of defining a module. This has feature gives a way to force 2.0 behavior as the code
    // is migrated. Absent specific advice otherwise, set extend-dojo to truthy.
    JSProf.LMC(7372, has, 'add').add("extend-dojo", 1);
    JSProf.LFC(7375, JSProf.LFC(7373, Function, false)("d", "d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}"), false)(JSProf.LRE(7374, dojo));
    /*=====
    	dojo.eval = function(scriptText){
    		// summary:
    		//		A legacy method created for use exclusively by internal Dojo methods. Do not use this method
    		//		directly unless you understand its possibly-different implications on the platforms your are targeting.
    		// description:
    		//		Makes an attempt to evaluate scriptText in the global scope. The function works correctly for browsers
    		//		that support indirect eval.
    		//
    		//		As usual, IE does not. On IE, the only way to implement global eval is to
    		//		use execScript. Unfortunately, execScript does not return a value and breaks some current usages of dojo.eval.
    		//		This implementation uses the technique of executing eval in the scope of a function that is a single scope
    		//		frame below the global scope; thereby coming close to the global scope. Note carefully that
    		//
    		//		dojo.eval("var pi = 3.14;");
    		//
    		//		will define global pi in non-IE environments, but define pi only in a temporary local scope for IE. If you want
    		//		to define a global variable using dojo.eval, write something like
    		//
    		//		dojo.eval("window.pi = 3.14;")
    		// scriptText:
    		//		The text to evaluation.
    		// returns:
    		//		The result of the evaluation. Often `undefined`
    	};
    	=====*/
    if (JSProf.LFC(7376, has, false)("host-rhino")) {
        JSProf.LPD(7380, dojo, 'exit').exit = JSProf.LRSP(7380, JSProf.LNF(7379, function (exitcode) {
            JSProf.LFC(7378, quit, false)(JSProf.LRE(7377, exitcode));
        }, 12));
    } else {
        JSProf.LPD(7382, dojo, 'exit').exit = JSProf.LRSP(7382, JSProf.LNF(7381, function () {
        }, 12));
    }
    JSProf.LMC(7383, has, 'add').add("dojo-guarantee-console", 1);
    if (JSProf.LFC(7384, has, false)("dojo-guarantee-console")) {
        typeof JSProf.LRU(7385, typeof console === 'undefined' ? undefined : console) != "undefined" || (console = JSProf.LWU(7387, JSProf.I(typeof console === 'undefined' ? undefined : console), JSProf.LNE(7386, {}, 11)));
        //	Be careful to leave 'log' always at the end
        var cn = JSProf.LNE(7388, [
                "assert",
                "count",
                "debug",
                "dir",
                "dirxml",
                "error",
                "group",
                "groupEnd",
                "info",
                "profile",
                "profileEnd",
                "time",
                "timeEnd",
                "trace",
                "warn",
                "log"
            ], 10);
        var tn;
        i = JSProf.LWR(7389, i, 0);
        while (tn = JSProf.LWR(7391, tn, JSProf.LGE(7390, cn, JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9 = i++)[JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9])) {
            if (!JSProf.LGE(7392, console, 'tn')[tn]) {
                JSProf.LFC(7404, JSProf.LNF(7403, function () {
                    var tcn = JSProf.LRE(7393, tn) + "";
                    JSProf.LPE(7401, console, 'tcn')[tcn] = JSProf.LRPE(7401, 'log' in JSProf.LRU(7394, typeof console === 'undefined' ? undefined : console) ? JSProf.LNF(7399, function () {
                        var a = JSProf.LMC(7395, Array.prototype.slice, 'call').call(arguments);
                        a.unshift(JSProf.LRE(7396, tcn) + ":");
                        JSProf.LMC(7398, console, JSProf.TMPS.t947b60a917d44245c159f2444b84e4edd914f237 = "log", 1)[JSProf.TMPS.t947b60a917d44245c159f2444b84e4edd914f237](JSProf.LMC(7397, a, 'join').join(" "));
                    }, 12) : JSProf.LNF(7400, function () {
                    }, 12));
                    JSProf.LPD(7402, console[tcn], '_fake')._fake = JSProf.LRSP(7402, true);
                }, 12), false)();
            }
        }
    }
    JSProf.LMC(7406, has, 'add').add("dojo-debug-messages", !!JSProf.LGD(7405, config, 'isDebug').isDebug);
    JSProf.LPD(7409, dojo, 'deprecated').deprecated = JSProf.LRSP(7409, JSProf.LPD(7408, dojo, 'experimental').experimental = JSProf.LRSP(7408, JSProf.LNF(7407, function () {
    }, 12)));
    if (JSProf.LFC(7410, has, false)("dojo-debug-messages")) {
        JSProf.LPD(7419, dojo, 'deprecated').deprecated = JSProf.LRSP(7419, JSProf.LNF(7418, function (behaviour, extra, removal) {
            // summary:
            //		Log a debug message to indicate that a behavior has been
            //		deprecated.
            // behaviour: String
            //		The API or behavior being deprecated. Usually in the form
            //		of "myApp.someFunction()".
            // extra: String?
            //		Text to append to the message. Often provides advice on a
            //		new function or facility to achieve the same goal during
            //		the deprecation period.
            // removal: String?
            //		Text to indicate when in the future the behavior will be
            //		removed. Usually a version number.
            // example:
            //	| dojo.deprecated("myApp.getTemp()", "use myApp.getLocaleTemp() instead", "1.0");
            var message = "DEPRECATED: " + JSProf.LRE(7411, behaviour);
            if (JSProf.LRE(7412, extra)) {
                message += " " + JSProf.LRE(7413, extra);
            }
            if (JSProf.LRE(7414, removal)) {
                message += " -- will be removed in version: " + JSProf.LRE(7415, removal);
            }
            JSProf.LMC(7417, console, 'warn').warn(JSProf.LRE(7416, message));
        }, 12));
        JSProf.LPD(7426, dojo, 'experimental').experimental = JSProf.LRSP(7426, JSProf.LNF(7425, function (moduleName, extra) {
            // summary:
            //		Marks code as experimental.
            // description:
            //		This can be used to mark a function, file, or module as
            //		experimental.	 Experimental code is not ready to be used, and the
            //		APIs are subject to change without notice.	Experimental code may be
            //		completed deleted without going through the normal deprecation
            //		process.
            // moduleName: String
            //		The name of a module, or the name of a module file or a specific
            //		function
            // extra: String?
            //		some additional message for the user
            // example:
            //	| dojo.experimental("dojo.data.Result");
            // example:
            //	| dojo.experimental("dojo.weather.toKelvin()", "PENDING approval from NOAA");
            var message = "EXPERIMENTAL: " + JSProf.LRE(7420, moduleName) + " -- APIs subject to change without notice.";
            if (JSProf.LRE(7421, extra)) {
                message += " " + JSProf.LRE(7422, extra);
            }
            JSProf.LMC(7424, console, 'warn').warn(JSProf.LRE(7423, message));
        }, 12));
    }
    JSProf.LMC(7427, has, 'add').add("dojo-modulePaths", 1);
    if (JSProf.LFC(7428, has, false)("dojo-modulePaths")) {
        // notice that modulePaths won't be applied to any require's before the dojo/_base/kernel factory is run;
        // this is the v1.6- behavior.
        if (JSProf.LGD(7429, config, 'modulePaths').modulePaths) {
            JSProf.LMC(7430, dojo, 'deprecated').deprecated("dojo.modulePaths", "use paths configuration");
            var paths = JSProf.LNE(7431, {}, 11);
            for (p in JSProf.LGD(7432, config, 'modulePaths').modulePaths) {
                JSProf.LPE(7435, paths, JSProf.TMPS.t88a4d945491f7b99fb6ccd8bb3cdff6594a5058c = JSProf.LMC(7433, p, 'replace').replace(/\./g, "/"))[JSProf.TMPS.t88a4d945491f7b99fb6ccd8bb3cdff6594a5058c] = JSProf.LRPE(7435, JSProf.LGE(7434, config.modulePaths, 'p')[p]);
            }
            JSProf.LFC(7437, require, false)(JSProf.LNE(7436, { paths: paths }, 11));
        }
    }
    JSProf.LMC(7438, has, 'add').add("dojo-moduleUrl", 1);
    if (JSProf.LFC(7439, has, false)("dojo-moduleUrl")) {
        JSProf.LPD(7451, dojo, 'moduleUrl').moduleUrl = JSProf.LRSP(7451, JSProf.LNF(7450, function (module, url) {
            // summary:
            //		Returns a URL relative to a module.
            // example:
            //	|	var pngPath = dojo.moduleUrl("acme","images/small.png");
            //	|	console.dir(pngPath); // list the object properties
            //	|	// create an image and set it's source to pngPath's value:
            //	|	var img = document.createElement("img");
            //	|	img.src = pngPath;
            //	|	// add our image to the document
            //	|	dojo.body().appendChild(img);
            // example:
            //		you may de-reference as far as you like down the package
            //		hierarchy.  This is sometimes handy to avoid lengthy relative
            //		urls or for building portable sub-packages. In this example,
            //		the `acme.widget` and `acme.util` directories may be located
            //		under different roots (see `dojo.registerModulePath`) but the
            //		the modules which reference them can be unaware of their
            //		relative locations on the filesystem:
            //	|	// somewhere in a configuration block
            //	|	dojo.registerModulePath("acme.widget", "../../acme/widget");
            //	|	dojo.registerModulePath("acme.util", "../../util");
            //	|
            //	|	// ...
            //	|
            //	|	// code in a module using acme resources
            //	|	var tmpltPath = dojo.moduleUrl("acme.widget","templates/template.html");
            //	|	var dataPath = dojo.moduleUrl("acme.util","resources/data.json");
            JSProf.LMC(7440, dojo, 'deprecated').deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
            // require.toUrl requires a filetype; therefore, just append the suffix "/*.*" to guarantee a filetype, then
            // remove the suffix from the result. This way clients can request a url w/out a filetype. This should be
            // rare, but it maintains backcompat for the v1.x line (note: dojo.moduleUrl will be removed in v2.0).
            // Notice * is an illegal filename so it won't conflict with any real path map that may exist the paths config.
            var result = null;
            if (JSProf.LRE(7441, module)) {
                result = JSProf.LWR(7448, result, JSProf.LMC(7446, JSProf.LMC(7445, require, 'toUrl').toUrl(JSProf.LMC(7442, module, 'replace').replace(/\./g, "/") + (JSProf.LRE(7443, url) ? "/" + JSProf.LRE(7444, url) : "") + "/*.*"), 'replace').replace(/\/\*\.\*/, "") + (JSProf.LRE(7447, url) ? "" : "/"));
            }
            return JSProf.LRE(7449, result);
        }, 12));
    }
    JSProf.LPD(7453, dojo, '_hasResource')._hasResource = JSProf.LRSP(7453, JSProf.LNE(7452, {}, 11));
    // for backward compatibility with layers built with 1.6 tooling
    return JSProf.LRE(7454, dojo);
}, 12));