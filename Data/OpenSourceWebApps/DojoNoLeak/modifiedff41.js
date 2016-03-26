JSProf.LFC(18070, define, false)(JSProf.LNE(17941, [
    "./_base/kernel",
    "require",
    "./has",
    "./has!host-browser?./request"
], 10), JSProf.LNF(18069, function (dojo, require, has, request) {
    // module:
    //		dojo/text
    var getText;
    if (JSProf.LFC(17942, has, false)("host-browser")) {
        getText = JSProf.LWR(17951, getText, JSProf.LNF(17950, function (url, sync, load) {
            JSProf.LMC(17949, JSProf.LFC(17947, request, false)(JSProf.LRE(17943, url), JSProf.LNE(17946, {
                sync: !!JSProf.LRE(17944, sync),
                headers: JSProf.LNE(17945, { 'X-Requested-With': null }, 11)
            }, 11)), 'then').then(JSProf.LRE(17948, load));
        }, 12));
    } else {
        // Path for node.js and rhino, to load from local file system.
        // TODO: use node.js native methods rather than depending on a require.getText() method to exist.
        if (JSProf.LGD(17952, require, 'getText').getText) {
            getText = JSProf.LWR(17954, getText, JSProf.LGD(17953, require, 'getText').getText);
        } else {
            JSProf.LMC(17955, console, 'error').error("dojo/text plugin failed to load because loader does not support getText");
        }
    }
    var theCache = JSProf.LNE(17956, {}, 11), strip = JSProf.LNF(17966, function (text) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (JSProf.LRE(17957, text)) {
                text = JSProf.LWR(17959, text, JSProf.LMC(17958, text, 'replace').replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, ""));
                var matches = JSProf.LMC(17960, text, 'match').match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
                if (JSProf.LRE(17961, matches)) {
                    text = JSProf.LWR(17963, text, JSProf.LGE(17962, matches, 1)[1]);
                }
            } else {
                text = JSProf.LWR(17964, text, "");
            }
            return JSProf.LRE(17965, text);
        }, 12), notFound = JSProf.LNE(17967, {}, 11), pending = JSProf.LNE(17968, {}, 11);
    JSProf.LPD(18011, dojo, 'cache').cache = JSProf.LRSP(18011, JSProf.LNF(18010, function (module, url, value) {
        // summary:
        //		A getter and setter for storing the string content associated with the
        //		module and url arguments.
        // description:
        //		If module is a string that contains slashes, then it is interpretted as a fully
        //		resolved path (typically a result returned by require.toUrl), and url should not be
        //		provided. This is the preferred signature. If module is a string that does not
        //		contain slashes, then url must also be provided and module and url are used to
        //		call `dojo.moduleUrl()` to generate a module URL. This signature is deprecated.
        //		If value is specified, the cache value for the moduleUrl will be set to
        //		that value. Otherwise, dojo.cache will fetch the moduleUrl and store it
        //		in its internal cache and return that cached value for the URL. To clear
        //		a cache value pass null for value. Since XMLHttpRequest (XHR) is used to fetch the
        //		the URL contents, only modules on the same domain of the page can use this capability.
        //		The build system can inline the cache values though, to allow for xdomain hosting.
        // module: String||Object
        //		If a String with slashes, a fully resolved path; if a String without slashes, the
        //		module name to use for the base part of the URL, similar to module argument
        //		to `dojo.moduleUrl`. If an Object, something that has a .toString() method that
        //		generates a valid path for the cache item. For example, a dojo._Url object.
        // url: String
        //		The rest of the path to append to the path derived from the module argument. If
        //		module is an object, then this second argument should be the "value" argument instead.
        // value: String||Object?
        //		If a String, the value to use in the cache for the module/url combination.
        //		If an Object, it can have two properties: value and sanitize. The value property
        //		should be the value to use in the cache, and sanitize can be set to true or false,
        //		to indicate if XML declarations should be removed from the value and if the HTML
        //		inside a body tag in the value should be extracted as the real value. The value argument
        //		or the value property on the value argument are usually only used by the build system
        //		as it inlines cache content.
        // example:
        //		To ask dojo.cache to fetch content and store it in the cache (the dojo["cache"] style
        //		of call is used to avoid an issue with the build system erroneously trying to intern
        //		this example. To get the build system to intern your dojo.cache calls, use the
        //		"dojo.cache" style of call):
        //		| //If template.html contains "<h1>Hello</h1>" that will be
        //		| //the value for the text variable.
        //		| //Note: This is pre-AMD, deprecated syntax
        //		| var text = dojo["cache"]("my.module", "template.html");
        // example:
        //		To ask dojo.cache to fetch content and store it in the cache, and sanitize the input
        //		 (the dojo["cache"] style of call is used to avoid an issue with the build system
        //		erroneously trying to intern this example. To get the build system to intern your
        //		dojo.cache calls, use the "dojo.cache" style of call):
        //		| //If template.html contains "<html><body><h1>Hello</h1></body></html>", the
        //		| //text variable will contain just "<h1>Hello</h1>".
        //		| //Note: This is pre-AMD, deprecated syntax
        //		| var text = dojo["cache"]("my.module", "template.html", {sanitize: true});
        // example:
        //		Same example as previous, but demonstrates how an object can be passed in as
        //		the first argument, then the value argument can then be the second argument.
        //		| //If template.html contains "<html><body><h1>Hello</h1></body></html>", the
        //		| //text variable will contain just "<h1>Hello</h1>".
        //		| //Note: This is pre-AMD, deprecated syntax
        //		| var text = dojo["cache"](new dojo._Url("my/module/template.html"), {sanitize: true});
        //	 * (string string [value]) => (module, url, value)
        //	 * (object [value])        => (module, value), url defaults to ""
        //
        //	 * if module is an object, then it must be convertable to a string
        //	 * (module, url) module + (url ? ("/" + url) : "") must be a legal argument to require.toUrl
        //	 * value may be a string or an object; if an object then may have the properties "value" and/or "sanitize"
        var key;
        if (typeof JSProf.LRE(17969, module) == "string") {
            if (JSProf.LMC(17971, /\//, 'test').test(JSProf.LRE(17970, module))) {
                // module is a version 1.7+ resolved path
                key = JSProf.LWR(17973, key, JSProf.LRE(17972, module));
                value = JSProf.LWR(17975, value, JSProf.LRE(17974, url));
            } else {
                // module is a version 1.6- argument to dojo.moduleUrl
                key = JSProf.LWR(17980, key, JSProf.LMC(17979, require, 'toUrl').toUrl(JSProf.LMC(17976, module, 'replace').replace(/\./g, "/") + (JSProf.LRE(17977, url) ? "/" + JSProf.LRE(17978, url) : "")));
            }
        } else {
            key = JSProf.LWR(17982, key, JSProf.LRE(17981, module) + "");
            value = JSProf.LWR(17984, value, JSProf.LRE(17983, url));
        }
        var val = JSProf.LRE(17985, value) != undefined && typeof JSProf.LRE(17986, value) != "string" ? JSProf.LGD(17987, value, 'value').value : JSProf.LRE(17988, value), sanitize = JSProf.LRE(17989, value) && JSProf.LGD(17990, value, 'sanitize').sanitize;
        if (typeof JSProf.LRE(17991, val) == "string") {
            //We have a string, set cache value
            JSProf.LPE(17993, theCache, 'key')[key] = JSProf.LRPE(17993, JSProf.LRE(17992, val));
            return JSProf.LRE(17994, sanitize) ? JSProf.LFC(17996, strip, false)(JSProf.LRE(17995, val)) : JSProf.LRE(17997, val);
        } else if (JSProf.LRE(17998, val) === null) {
            //Remove cached value
            delete theCache[key];
            return null;
        } else {
            //Allow cache values to be empty strings. If key property does
            //not exist, fetch it.
            if (!(JSProf.LRE(17999, key) in JSProf.LRE(18000, theCache))) {
                JSProf.LFC(18005, getText, false)(JSProf.LRE(18001, key), true, JSProf.LNF(18004, function (text) {
                    JSProf.LPE(18003, theCache, 'key')[key] = JSProf.LRPE(18003, JSProf.LRE(18002, text));
                }, 12));
            }
            return JSProf.LRE(18006, sanitize) ? JSProf.LFC(18008, strip, false)(JSProf.LGE(18007, theCache, 'key')[key]) : JSProf.LGE(18009, theCache, 'key')[key];
        }
    }, 12));
    return JSProf.LNE(18068, {
        dynamic: true,
        normalize: JSProf.LNF(18020, function (id, toAbsMid) {
            // id is something like (path may be relative):
            //
            //	 "path/to/text.html"
            //	 "path/to/text.html!strip"
            var parts = id.split("!"), url = JSProf.LGE(18012, parts, 0)[0];
            return (JSProf.LMC(18014, /^\./, 'test').test(JSProf.LRE(18013, url)) ? JSProf.LFC(18016, toAbsMid, false)(JSProf.LRE(18015, url)) : JSProf.LRE(18017, url)) + (JSProf.LGE(18018, parts, 1)[1] ? "!" + JSProf.LGE(18019, parts, 1)[1] : "");
        }, 12),
        load: JSProf.LNF(18067, function (id, require, load) {
            // id: String
            //		Path to the resource.
            // require: Function
            //		Object that include the function toUrl with given id returns a valid URL from which to load the text.
            // load: Function
            //		Callback function which will be called, when the loading finished.
            // id is something like (path is always absolute):
            //
            //	 "path/to/text.html"
            //	 "path/to/text.html!strip"
            var parts = id.split("!"), stripFlag = JSProf.LGD(18021, parts, 'length').length > 1, absMid = JSProf.LGE(18022, parts, 0)[0], url = JSProf.LMC(18024, require, 'toUrl').toUrl(JSProf.LGE(18023, parts, 0)[0]), requireCacheUrl = "url:" + JSProf.LRE(18025, url), text = JSProf.LRE(18026, notFound), finish = JSProf.LNF(18032, function (text) {
                    JSProf.LFC(18031, load, false)(JSProf.LRE(18027, stripFlag) ? JSProf.LFC(18029, strip, false)(JSProf.LRE(18028, text)) : JSProf.LRE(18030, text));
                }, 12);
            if (JSProf.LRE(18033, absMid) in JSProf.LRE(18034, theCache)) {
                text = JSProf.LWR(18036, text, JSProf.LGE(18035, theCache, 'absMid')[absMid]);
            } else if (JSProf.LGD(18037, require, 'cache').cache && JSProf.LRE(18038, requireCacheUrl) in JSProf.LGD(18039, require, 'cache').cache) {
                text = JSProf.LWR(18041, text, JSProf.LGE(18040, require.cache, 'requireCacheUrl')[requireCacheUrl]);
            } else if (JSProf.LRE(18042, url) in JSProf.LRE(18043, theCache)) {
                text = JSProf.LWR(18045, text, JSProf.LGE(18044, theCache, 'url')[url]);
            }
            if (JSProf.LRE(18046, text) === JSProf.LRE(18047, notFound)) {
                if (JSProf.LGE(18048, pending, 'url')[url]) {
                    JSProf.LMC(18050, pending[url], 'push').push(JSProf.LRE(18049, finish));
                } else {
                    var pendingList = JSProf.LPE(18053, pending, 'url')[url] = JSProf.LRPE(18053, JSProf.LNE(18052, [JSProf.LRE(18051, finish)], 10));
                    JSProf.LFC(18064, getText, false)(JSProf.LRE(18054, url), !JSProf.LGD(18055, require, 'async').async, JSProf.LNF(18063, function (text) {
                        JSProf.LPE(18058, theCache, 'absMid')[absMid] = JSProf.LRPE(18058, JSProf.LPE(18057, theCache, 'url')[url] = JSProf.LRPE(18057, JSProf.LRE(18056, text)));
                        for (var i = 0; JSProf.LRE(18059, i) < JSProf.LGD(18060, pendingList, 'length').length;) {
                            JSProf.LMC(18062, pendingList, JSProf.TMPS.t25312745553b9e08fa5ce6d5f05118f4766c68ff = i++, 1)[JSProf.TMPS.t25312745553b9e08fa5ce6d5f05118f4766c68ff](JSProf.LRE(18061, text));
                        }
                        delete pending[url];
                    }, 12));
                }
            } else {
                JSProf.LFC(18066, finish, false)(JSProf.LRE(18065, text));
            }
        }, 12)
    }, 11);
}, 12));