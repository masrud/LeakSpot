JSProf.LFC(7746, define, false)(JSProf.LNE(7610, [
    "../has",
    "./config",
    "require",
    "module"
], 10), JSProf.LNF(7745, function (has, config, require, module) {
    // module:
    //		dojo/_base/kernel
    // This module is the foundational module of the dojo boot sequence; it defines the dojo object.
    var
        // loop variables for this module
        i, p,
        // create dojo, dijit, and dojox
        // FIXME: in 2.0 remove dijit, dojox being created by dojo
        global = JSProf.LFC(7612, JSProf.LNF(7611, function () {
            return this;
        }, 12), false)(), dijit = JSProf.LNE(7613, {}, 11), dojox = JSProf.LNE(7614, {}, 11), dojo = JSProf.LNE(7615, {
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
    var scopeMap = JSProf.LNE(7622, {
            dojo: JSProf.LNE(7617, [
                "dojo",
                JSProf.LRE(7616, dojo)
            ], 10),
            dijit: JSProf.LNE(7619, [
                "dijit",
                JSProf.LRE(7618, dijit)
            ], 10),
            dojox: JSProf.LNE(7621, [
                "dojox",
                JSProf.LRE(7620, dojox)
            ], 10)
        }, 11), packageMap = JSProf.LGD(7623, require, 'map').map && JSProf.LGE(7625, require.map, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = JSProf.LMC(7624, module.id, 'match').match(/[^\/]+/)[0])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a], item;
    // process all mapped top-level names for this instance of dojo
    for (p in JSProf.LRE(7626, packageMap)) {
        if (JSProf.LGE(7627, scopeMap, 'p')[p]) {
            // mapped dojo, dijit, or dojox
            JSProf.LPE(7629, scopeMap[p], 0)[0] = JSProf.LRPE(7629, JSProf.LGE(7628, packageMap, 'p')[p]);
        } else {
            // some other top-level name
            JSProf.LPE(7633, scopeMap, 'p')[p] = JSProf.LRPE(7633, JSProf.LNE(7632, [
                JSProf.LGE(7630, packageMap, 'p')[p],
                JSProf.LNE(7631, {}, 11)
            ], 10));
        }
    }
    // publish those names to _scopeName and, optionally, the global namespace
    for (p in JSProf.LRE(7634, scopeMap)) {
        item = JSProf.LWR(7636, item, JSProf.LGE(7635, scopeMap, 'p')[p]);
        JSProf.LPD(7638, item[1], '_scopeName')._scopeName = JSProf.LRSP(7638, JSProf.LGE(7637, item, 0)[0]);
        if (!JSProf.LGD(7639, config, 'noGlobals').noGlobals) {
            JSProf.LPE(7641, global, JSProf.TMPS.t01044239f37584722d4945b817eba55e4980abb1 = item[0])[JSProf.TMPS.t01044239f37584722d4945b817eba55e4980abb1] = JSProf.LRPE(7641, JSProf.LGE(7640, item, 1)[1]);
        }
    }
    JSProf.LPD(7643, dojo, 'scopeMap').scopeMap = JSProf.LRSP(7643, JSProf.LRE(7642, scopeMap));
    /*===== dojo.__docParserConfigureScopeMap(scopeMap); =====*/
    // FIXME: dojo.baseUrl and dojo.config.baseUrl should be deprecated
    JSProf.LPD(7646, dojo, 'baseUrl').baseUrl = JSProf.LRSP(7646, JSProf.LPD(7645, dojo.config, 'baseUrl').baseUrl = JSProf.LRSP(7645, JSProf.LGD(7644, require, 'baseUrl').baseUrl));
    JSProf.LPD(7649, dojo, 'isAsync').isAsync = JSProf.LRSP(7649, !JSProf.LFC(7647, has, false)("dojo-loader") || JSProf.LGD(7648, require, 'async').async);
    JSProf.LPD(7651, dojo, 'locale').locale = JSProf.LRSP(7651, JSProf.LGD(7650, config, 'locale').locale);
    var rev = JSProf.LMC(7652, "$Rev: 18f9767 $", 'match').match(/[0-9a-f]{7,}/);
    JSProf.LPD(7661, dojo, 'version').version = JSProf.LRSP(7661, JSProf.LNE(7660, {
        major: 1,
        minor: 10,
        patch: 2,
        flag: "",
        revision: rev ? rev[0] : NaN,
        toString: JSProf.LNF(7659, function () {
            var v = JSProf.LGD(7653, dojo, 'version').version;
            return JSProf.LGD(7654, v, 'major').major + "." + JSProf.LGD(7655, v, 'minor').minor + "." + JSProf.LGD(7656, v, 'patch').patch + JSProf.LGD(7657, v, 'flag').flag + " (" + JSProf.LGD(7658, v, 'revision').revision + ")";    // String
        }, 12)
    }, 11));
    // If has("extend-dojo") is truthy, then as a dojo module is defined it should push it's definitions
    // into the dojo object, and conversely. In 2.0, it will likely be unusual to augment another object
    // as a result of defining a module. This has feature gives a way to force 2.0 behavior as the code
    // is migrated. Absent specific advice otherwise, set extend-dojo to truthy.
    JSProf.LMC(7662, has, 'add').add("extend-dojo", 1);
    JSProf.LFC(7665, JSProf.LFC(7663, Function, false)("d", "d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}"), false)(JSProf.LRE(7664, dojo));
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
    if (JSProf.LFC(7666, has, false)("host-rhino")) {
        JSProf.LPD(7670, dojo, 'exit').exit = JSProf.LRSP(7670, JSProf.LNF(7669, function (exitcode) {
            JSProf.LFC(7668, quit, false)(JSProf.LRE(7667, exitcode));
        }, 12));
    } else {
        JSProf.LPD(7672, dojo, 'exit').exit = JSProf.LRSP(7672, JSProf.LNF(7671, function () {
        }, 12));
    }
    JSProf.LMC(7673, has, 'add').add("dojo-guarantee-console", 1);
    if (JSProf.LFC(7674, has, false)("dojo-guarantee-console")) {
        typeof JSProf.LRU(7675, typeof console === 'undefined' ? undefined : console) != "undefined" || (console = JSProf.LWU(7677, JSProf.I(typeof console === 'undefined' ? undefined : console), JSProf.LNE(7676, {}, 11)));
        //	Be careful to leave 'log' always at the end
        var cn = JSProf.LNE(7678, [
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
        i = JSProf.LWR(7679, i, 0);
        while (tn = JSProf.LWR(7681, tn, JSProf.LGE(7680, cn, JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9 = i++)[JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9])) {
            if (!JSProf.LGE(7682, console, 'tn')[tn]) {
                JSProf.LFC(7694, JSProf.LNF(7693, function () {
                    var tcn = JSProf.LRE(7683, tn) + "";
                    JSProf.LPE(7691, console, 'tcn')[tcn] = JSProf.LRPE(7691, 'log' in JSProf.LRU(7684, typeof console === 'undefined' ? undefined : console) ? JSProf.LNF(7689, function () {
                        var a = JSProf.LMC(7685, Array.prototype.slice, 'call').call(arguments);
                        a.unshift(JSProf.LRE(7686, tcn) + ":");
                        JSProf.LMC(7688, console, JSProf.TMPS.t947b60a917d44245c159f2444b84e4edd914f237 = "log", 1)[JSProf.TMPS.t947b60a917d44245c159f2444b84e4edd914f237](JSProf.LMC(7687, a, 'join').join(" "));
                    }, 12) : JSProf.LNF(7690, function () {
                    }, 12));
                    JSProf.LPD(7692, console[tcn], '_fake')._fake = JSProf.LRSP(7692, true);
                }, 12), false)();
            }
        }
    }
    JSProf.LMC(7696, has, 'add').add("dojo-debug-messages", !!JSProf.LGD(7695, config, 'isDebug').isDebug);
    JSProf.LPD(7699, dojo, 'deprecated').deprecated = JSProf.LRSP(7699, JSProf.LPD(7698, dojo, 'experimental').experimental = JSProf.LRSP(7698, JSProf.LNF(7697, function () {
    }, 12)));
    if (JSProf.LFC(7700, has, false)("dojo-debug-messages")) {
        JSProf.LPD(7709, dojo, 'deprecated').deprecated = JSProf.LRSP(7709, JSProf.LNF(7708, function (behaviour, extra, removal) {
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
            var message = "DEPRECATED: " + JSProf.LRE(7701, behaviour);
            if (JSProf.LRE(7702, extra)) {
                message += " " + JSProf.LRE(7703, extra);
            }
            if (JSProf.LRE(7704, removal)) {
                message += " -- will be removed in version: " + JSProf.LRE(7705, removal);
            }
            JSProf.LMC(7707, console, 'warn').warn(JSProf.LRE(7706, message));
        }, 12));
        JSProf.LPD(7716, dojo, 'experimental').experimental = JSProf.LRSP(7716, JSProf.LNF(7715, function (moduleName, extra) {
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
            var message = "EXPERIMENTAL: " + JSProf.LRE(7710, moduleName) + " -- APIs subject to change without notice.";
            if (JSProf.LRE(7711, extra)) {
                message += " " + JSProf.LRE(7712, extra);
            }
            JSProf.LMC(7714, console, 'warn').warn(JSProf.LRE(7713, message));
        }, 12));
    }
    JSProf.LMC(7717, has, 'add').add("dojo-modulePaths", 1);
    if (JSProf.LFC(7718, has, false)("dojo-modulePaths")) {
        // notice that modulePaths won't be applied to any require's before the dojo/_base/kernel factory is run;
        // this is the v1.6- behavior.
        if (JSProf.LGD(7719, config, 'modulePaths').modulePaths) {
            JSProf.LMC(7720, dojo, 'deprecated').deprecated("dojo.modulePaths", "use paths configuration");
            var paths = JSProf.LNE(7721, {}, 11);
            for (p in JSProf.LGD(7722, config, 'modulePaths').modulePaths) {
                JSProf.LPE(7725, paths, JSProf.TMPS.t88a4d945491f7b99fb6ccd8bb3cdff6594a5058c = JSProf.LMC(7723, p, 'replace').replace(/\./g, "/"))[JSProf.TMPS.t88a4d945491f7b99fb6ccd8bb3cdff6594a5058c] = JSProf.LRPE(7725, JSProf.LGE(7724, config.modulePaths, 'p')[p]);
            }
            JSProf.LFC(7727, require, false)(JSProf.LNE(7726, { paths: paths }, 11));
        }
    }
    JSProf.LMC(7728, has, 'add').add("dojo-moduleUrl", 1);
    if (JSProf.LFC(7729, has, false)("dojo-moduleUrl")) {
        JSProf.LPD(7741, dojo, 'moduleUrl').moduleUrl = JSProf.LRSP(7741, JSProf.LNF(7740, function (module, url) {
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
            JSProf.LMC(7730, dojo, 'deprecated').deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
            // require.toUrl requires a filetype; therefore, just append the suffix "/*.*" to guarantee a filetype, then
            // remove the suffix from the result. This way clients can request a url w/out a filetype. This should be
            // rare, but it maintains backcompat for the v1.x line (note: dojo.moduleUrl will be removed in v2.0).
            // Notice * is an illegal filename so it won't conflict with any real path map that may exist the paths config.
            var result = null;
            if (JSProf.LRE(7731, module)) {
                result = JSProf.LWR(7738, result, JSProf.LMC(7736, JSProf.LMC(7735, require, 'toUrl').toUrl(JSProf.LMC(7732, module, 'replace').replace(/\./g, "/") + (JSProf.LRE(7733, url) ? "/" + JSProf.LRE(7734, url) : "") + "/*.*"), 'replace').replace(/\/\*\.\*/, "") + (JSProf.LRE(7737, url) ? "" : "/"));
            }
            return JSProf.LRE(7739, result);
        }, 12));
    }
    JSProf.LPD(7743, dojo, '_hasResource')._hasResource = JSProf.LRSP(7743, JSProf.LNE(7742, {}, 11));
    // for backward compatibility with layers built with 1.6 tooling
    return JSProf.LRE(7744, dojo);
}, 12));