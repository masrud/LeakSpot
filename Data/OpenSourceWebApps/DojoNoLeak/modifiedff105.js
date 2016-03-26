JSProf.LFC(35016, define, false)(JSProf.LNE(34886, ["./has"], 10), JSProf.LNF(35015, function (has) {
    "use strict";
    var hasJSON = typeof JSProf.LRU(34887, typeof JSON === 'undefined' ? undefined : JSON) != "undefined";
    JSProf.LMC(34889, has, 'add').add("json-parse", JSProf.LRE(34888, hasJSON));
    // all the parsers work fine
    // Firefox 3.5/Gecko 1.9 fails to use replacer in stringify properly https://bugzilla.mozilla.org/show_bug.cgi?id=509184
    JSProf.LMC(34895, has, 'add').add("json-stringify", JSProf.LRE(34890, hasJSON) && JSProf.LMC(34894, JSON, 'stringify').stringify(JSProf.LNE(34891, { a: 0 }, 11), JSProf.LNF(34893, function (k, v) {
        return JSProf.LRE(34892, v) || 1;
    }, 12)) == '{"a":1}');
    /*=====
    	return {
    		// summary:
    		//		Functions to parse and serialize JSON
    
    		parse: function(str, strict){
    			// summary:
    			//		Parses a [JSON](http://json.org) string to return a JavaScript object.
    			// description:
    			//		This function follows [native JSON API](https://developer.mozilla.org/en/JSON)
    			//		Throws for invalid JSON strings. This delegates to eval() if native JSON
    			//		support is not available. By default this will evaluate any valid JS expression.
    			//		With the strict parameter set to true, the parser will ensure that only
    			//		valid JSON strings are parsed (otherwise throwing an error). Without the strict
    			//		parameter, the content passed to this method must come
    			//		from a trusted source.
    			// str:
    			//		a string literal of a JSON item, for instance:
    			//		`'{ "foo": [ "bar", 1, { "baz": "thud" } ] }'`
    			// strict:
    			//		When set to true, this will ensure that only valid, secure JSON is ever parsed.
    			//		Make sure this is set to true for untrusted content. Note that on browsers/engines
    			//		without native JSON support, setting this to true will run slower.
    		},
    		stringify: function(value, replacer, spacer){
    			// summary:
    			//		Returns a [JSON](http://json.org) serialization of an object.
    			// description:
    			//		Returns a [JSON](http://json.org) serialization of an object.
    			//		This function follows [native JSON API](https://developer.mozilla.org/en/JSON)
    			//		Note that this doesn't check for infinite recursion, so don't do that!
    			// value:
    			//		A value to be serialized.
    			// replacer:
    			//		A replacer function that is called for each value and can return a replacement
    			// spacer:
    			//		A spacer string to be used for pretty printing of JSON
    			// example:
    			//		simple serialization of a trivial object
    			//	|	define(["dojo/json"], function(JSON){
    			// 	|		var jsonStr = JSON.stringify({ howdy: "stranger!", isStrange: true });
    			//	|		doh.is('{"howdy":"stranger!","isStrange":true}', jsonStr);
    		}
    	};
    	=====*/
    if (JSProf.LFC(34896, has, false)("json-stringify")) {
        return JSProf.LRU(34897, typeof JSON === 'undefined' ? undefined : JSON);
    } else {
        var escapeString = JSProf.LNF(34904, function (str) {
                // summary:
                //		Adds escape sequences for non-visual characters, double quote and
                //		backslash and surrounds with double quotes to form a valid string
                //		literal.
                return JSProf.LMC(34903, JSProf.LMC(34902, JSProf.LMC(34901, JSProf.LMC(34900, JSProf.LMC(34899, '"' + JSProf.LMC(34898, str, 'replace').replace(/(["\\])/g, '\\$1') + '"', 'replace').replace(/[\f]/g, "\\f"), 'replace').replace(/[\b]/g, "\\b"), 'replace').replace(/[\n]/g, "\\n"), 'replace').replace(/[\t]/g, "\\t"), 'replace').replace(/[\r]/g, "\\r");    // string
            }, 12);
        return JSProf.LNE(35014, {
            parse: JSProf.LFC(34905, has, false)("json-parse") ? JSON.parse : JSProf.LNF(34912, function (str, strict) {
                if (JSProf.LRE(34906, strict) && !JSProf.LMC(34908, /^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/, 'test').test(JSProf.LRE(34907, str))) {
                    throw JSProf.LNE(34910, new (JSProf.LFC(34909, SyntaxError, true))("Invalid characters in JSON"), 'SyntaxError');
                }
                return eval('(' + JSProf.LRE(34911, str) + ')');
            }, 12),
            stringify: JSProf.LNF(35013, function (value, replacer, spacer) {
                JSProf.LFD(35012, stringify);
                var undef;
                if (typeof JSProf.LRE(34913, replacer) == "string") {
                    spacer = JSProf.LWR(34915, spacer, JSProf.LRE(34914, replacer));
                    replacer = null;
                }
                function stringify(it, indent, key) {
                    if (JSProf.LRE(34916, replacer)) {
                        it = JSProf.LWR(34920, it, JSProf.LFC(34919, replacer, false)(JSProf.LRE(34917, key), JSProf.LRE(34918, it)));
                    }
                    var val, objtype = typeof JSProf.LRE(34921, it);
                    if (JSProf.LRE(34922, objtype) == "number") {
                        return JSProf.LFC(34924, isFinite, false)(JSProf.LRE(34923, it)) ? JSProf.LRE(34925, it) + "" : "null";
                    }
                    if (JSProf.LRE(34926, objtype) == "boolean") {
                        return JSProf.LRE(34927, it) + "";
                    }
                    if (JSProf.LRE(34928, it) === null) {
                        return "null";
                    }
                    if (typeof JSProf.LRE(34929, it) == "string") {
                        return JSProf.LFC(34931, escapeString, false)(JSProf.LRE(34930, it));
                    }
                    if (JSProf.LRE(34932, objtype) == "function" || JSProf.LRE(34933, objtype) == "undefined") {
                        return JSProf.LRE(34934, undef);    // undefined
                    }
                    // short-circuit for objects that support "json" serialization
                    // if they return "self" then just pass-through...
                    if (typeof JSProf.LGD(34935, it, 'toJSON').toJSON == "function") {
                        return JSProf.LFC(34940, stringify, false)(JSProf.LMC(34937, it, 'toJSON').toJSON(JSProf.LRE(34936, key)), JSProf.LRE(34938, indent), JSProf.LRE(34939, key));
                    }
                    if (JSProf.LRE(34941, it) instanceof JSProf.LRU(34942, typeof Date === 'undefined' ? undefined : Date)) {
                        return JSProf.LMC(34950, '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"', 'replace').replace(/\{(\w+)(\+)?\}/g, JSProf.LNF(34949, function (t, prop, plus) {
                            var num = JSProf.LMC(34944, it, JSProf.TMPS.t69aaa14eb8a330802a26556e92769aa38bee897c = "getUTC" + JSProf.LRE(34943, prop), 1)[JSProf.TMPS.t69aaa14eb8a330802a26556e92769aa38bee897c]() + (JSProf.LRE(34945, plus) ? 1 : 0);
                            return JSProf.LRE(34946, num) < 10 ? "0" + JSProf.LRE(34947, num) : JSProf.LRE(34948, num);
                        }, 12));
                    }
                    if (JSProf.LMC(34951, it, 'valueOf').valueOf() !== JSProf.LRE(34952, it)) {
                        // primitive wrapper, try again unwrapped:
                        return JSProf.LFC(34956, stringify, false)(JSProf.LMC(34953, it, 'valueOf').valueOf(), JSProf.LRE(34954, indent), JSProf.LRE(34955, key));
                    }
                    var nextIndent = JSProf.LRE(34957, spacer) ? JSProf.LRE(34958, indent) + JSProf.LRE(34959, spacer) : "";
                    /* we used to test for DOM nodes and throw, but FF serializes them as {}, so cross-browser consistency is probably not efficiently attainable */
                    var sep = JSProf.LRE(34960, spacer) ? " " : "";
                    var newLine = JSProf.LRE(34961, spacer) ? "\n" : "";
                    // array
                    if (JSProf.LRE(34962, it) instanceof JSProf.LRU(34963, typeof Array === 'undefined' ? undefined : Array)) {
                        var itl = JSProf.LGD(34964, it, 'length').length, res = JSProf.LNE(34965, [], 10);
                        for (key = JSProf.LWR(34966, key, 0); JSProf.LRE(34967, key) < JSProf.LRE(34968, itl); key++) {
                            var obj = JSProf.LGE(34969, it, 'key')[key];
                            val = JSProf.LWR(34974, val, JSProf.LFC(34973, stringify, false)(JSProf.LRE(34970, obj), JSProf.LRE(34971, nextIndent), JSProf.LRE(34972, key)));
                            if (typeof JSProf.LRE(34975, val) != "string") {
                                val = JSProf.LWR(34976, val, "null");
                            }
                            JSProf.LMC(34980, res, 'push').push(JSProf.LRE(34977, newLine) + JSProf.LRE(34978, nextIndent) + JSProf.LRE(34979, val));
                        }
                        return "[" + JSProf.LMC(34981, res, 'join').join(",") + JSProf.LRE(34982, newLine) + JSProf.LRE(34983, indent) + "]";
                    }
                    // generic object code path
                    var output = JSProf.LNE(34984, [], 10);
                    for (key in JSProf.LRE(34985, it)) {
                        var keyStr;
                        if (JSProf.LMC(34987, it, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(34986, key))) {
                            if (typeof JSProf.LRE(34988, key) == "number") {
                                keyStr = JSProf.LWR(34990, keyStr, '"' + JSProf.LRE(34989, key) + '"');
                            } else if (typeof JSProf.LRE(34991, key) == "string") {
                                keyStr = JSProf.LWR(34994, keyStr, JSProf.LFC(34993, escapeString, false)(JSProf.LRE(34992, key)));
                            } else {
                                // skip non-string or number keys
                                continue;
                            }
                            val = JSProf.LWR(34999, val, JSProf.LFC(34998, stringify, false)(JSProf.LGE(34995, it, 'key')[key], JSProf.LRE(34996, nextIndent), JSProf.LRE(34997, key)));
                            if (typeof JSProf.LRE(35000, val) != "string") {
                                // skip non-serializable values
                                continue;
                            }
                            // At this point, the most non-IE browsers don't get in this branch 
                            // (they have native JSON), so push is definitely the way to
                            JSProf.LMC(35006, output, 'push').push(JSProf.LRE(35001, newLine) + JSProf.LRE(35002, nextIndent) + JSProf.LRE(35003, keyStr) + ":" + JSProf.LRE(35004, sep) + JSProf.LRE(35005, val));
                        }
                    }
                    return "{" + JSProf.LMC(35007, output, 'join').join(",") + JSProf.LRE(35008, newLine) + JSProf.LRE(35009, indent) + "}";    // String
                }
                return JSProf.LFC(35011, stringify, false)(JSProf.LRE(35010, value), "", "");
            }, 12)
        }, 11);
    }
}, 12));