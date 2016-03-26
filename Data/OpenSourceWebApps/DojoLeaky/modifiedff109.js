JSProf.LFC(37567, define, false)(JSProf.LNE(37437, ["./has"], 10), JSProf.LNF(37566, function (has) {
    "use strict";
    var hasJSON = typeof JSProf.LRU(37438, typeof JSON === 'undefined' ? undefined : JSON) != "undefined";
    JSProf.LMC(37440, has, 'add').add("json-parse", JSProf.LRE(37439, hasJSON));
    // all the parsers work fine
    // Firefox 3.5/Gecko 1.9 fails to use replacer in stringify properly https://bugzilla.mozilla.org/show_bug.cgi?id=509184
    JSProf.LMC(37446, has, 'add').add("json-stringify", JSProf.LRE(37441, hasJSON) && JSProf.LMC(37445, JSON, 'stringify').stringify(JSProf.LNE(37442, { a: 0 }, 11), JSProf.LNF(37444, function (k, v) {
        return JSProf.LRE(37443, v) || 1;
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
    if (JSProf.LFC(37447, has, false)("json-stringify")) {
        return JSProf.LRU(37448, typeof JSON === 'undefined' ? undefined : JSON);
    } else {
        var escapeString = JSProf.LNF(37455, function (str) {
                // summary:
                //		Adds escape sequences for non-visual characters, double quote and
                //		backslash and surrounds with double quotes to form a valid string
                //		literal.
                return JSProf.LMC(37454, JSProf.LMC(37453, JSProf.LMC(37452, JSProf.LMC(37451, JSProf.LMC(37450, '"' + JSProf.LMC(37449, str, 'replace').replace(/(["\\])/g, '\\$1') + '"', 'replace').replace(/[\f]/g, "\\f"), 'replace').replace(/[\b]/g, "\\b"), 'replace').replace(/[\n]/g, "\\n"), 'replace').replace(/[\t]/g, "\\t"), 'replace').replace(/[\r]/g, "\\r");    // string
            }, 12);
        return JSProf.LNE(37565, {
            parse: JSProf.LFC(37456, has, false)("json-parse") ? JSON.parse : JSProf.LNF(37463, function (str, strict) {
                if (JSProf.LRE(37457, strict) && !JSProf.LMC(37459, /^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/, 'test').test(JSProf.LRE(37458, str))) {
                    throw JSProf.LNE(37461, new (JSProf.LFC(37460, SyntaxError, true))("Invalid characters in JSON"), 'SyntaxError');
                }
                return eval('(' + JSProf.LRE(37462, str) + ')');
            }, 12),
            stringify: JSProf.LNF(37564, function (value, replacer, spacer) {
                JSProf.LFD(37563, stringify);
                var undef;
                if (typeof JSProf.LRE(37464, replacer) == "string") {
                    spacer = JSProf.LWR(37466, spacer, JSProf.LRE(37465, replacer));
                    replacer = null;
                }
                function stringify(it, indent, key) {
                    if (JSProf.LRE(37467, replacer)) {
                        it = JSProf.LWR(37471, it, JSProf.LFC(37470, replacer, false)(JSProf.LRE(37468, key), JSProf.LRE(37469, it)));
                    }
                    var val, objtype = typeof JSProf.LRE(37472, it);
                    if (JSProf.LRE(37473, objtype) == "number") {
                        return JSProf.LFC(37475, isFinite, false)(JSProf.LRE(37474, it)) ? JSProf.LRE(37476, it) + "" : "null";
                    }
                    if (JSProf.LRE(37477, objtype) == "boolean") {
                        return JSProf.LRE(37478, it) + "";
                    }
                    if (JSProf.LRE(37479, it) === null) {
                        return "null";
                    }
                    if (typeof JSProf.LRE(37480, it) == "string") {
                        return JSProf.LFC(37482, escapeString, false)(JSProf.LRE(37481, it));
                    }
                    if (JSProf.LRE(37483, objtype) == "function" || JSProf.LRE(37484, objtype) == "undefined") {
                        return JSProf.LRE(37485, undef);    // undefined
                    }
                    // short-circuit for objects that support "json" serialization
                    // if they return "self" then just pass-through...
                    if (typeof JSProf.LGD(37486, it, 'toJSON').toJSON == "function") {
                        return JSProf.LFC(37491, stringify, false)(JSProf.LMC(37488, it, 'toJSON').toJSON(JSProf.LRE(37487, key)), JSProf.LRE(37489, indent), JSProf.LRE(37490, key));
                    }
                    if (JSProf.LRE(37492, it) instanceof JSProf.LRU(37493, typeof Date === 'undefined' ? undefined : Date)) {
                        return JSProf.LMC(37501, '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"', 'replace').replace(/\{(\w+)(\+)?\}/g, JSProf.LNF(37500, function (t, prop, plus) {
                            var num = JSProf.LMC(37495, it, JSProf.TMPS.t69aaa14eb8a330802a26556e92769aa38bee897c = "getUTC" + JSProf.LRE(37494, prop), 1)[JSProf.TMPS.t69aaa14eb8a330802a26556e92769aa38bee897c]() + (JSProf.LRE(37496, plus) ? 1 : 0);
                            return JSProf.LRE(37497, num) < 10 ? "0" + JSProf.LRE(37498, num) : JSProf.LRE(37499, num);
                        }, 12));
                    }
                    if (JSProf.LMC(37502, it, 'valueOf').valueOf() !== JSProf.LRE(37503, it)) {
                        // primitive wrapper, try again unwrapped:
                        return JSProf.LFC(37507, stringify, false)(JSProf.LMC(37504, it, 'valueOf').valueOf(), JSProf.LRE(37505, indent), JSProf.LRE(37506, key));
                    }
                    var nextIndent = JSProf.LRE(37508, spacer) ? JSProf.LRE(37509, indent) + JSProf.LRE(37510, spacer) : "";
                    /* we used to test for DOM nodes and throw, but FF serializes them as {}, so cross-browser consistency is probably not efficiently attainable */
                    var sep = JSProf.LRE(37511, spacer) ? " " : "";
                    var newLine = JSProf.LRE(37512, spacer) ? "\n" : "";
                    // array
                    if (JSProf.LRE(37513, it) instanceof JSProf.LRU(37514, typeof Array === 'undefined' ? undefined : Array)) {
                        var itl = JSProf.LGD(37515, it, 'length').length, res = JSProf.LNE(37516, [], 10);
                        for (key = JSProf.LWR(37517, key, 0); JSProf.LRE(37518, key) < JSProf.LRE(37519, itl); key++) {
                            var obj = JSProf.LGE(37520, it, 'key')[key];
                            val = JSProf.LWR(37525, val, JSProf.LFC(37524, stringify, false)(JSProf.LRE(37521, obj), JSProf.LRE(37522, nextIndent), JSProf.LRE(37523, key)));
                            if (typeof JSProf.LRE(37526, val) != "string") {
                                val = JSProf.LWR(37527, val, "null");
                            }
                            JSProf.LMC(37531, res, 'push').push(JSProf.LRE(37528, newLine) + JSProf.LRE(37529, nextIndent) + JSProf.LRE(37530, val));
                        }
                        return "[" + JSProf.LMC(37532, res, 'join').join(",") + JSProf.LRE(37533, newLine) + JSProf.LRE(37534, indent) + "]";
                    }
                    // generic object code path
                    var output = JSProf.LNE(37535, [], 10);
                    for (key in JSProf.LRE(37536, it)) {
                        var keyStr;
                        if (JSProf.LMC(37538, it, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(37537, key))) {
                            if (typeof JSProf.LRE(37539, key) == "number") {
                                keyStr = JSProf.LWR(37541, keyStr, '"' + JSProf.LRE(37540, key) + '"');
                            } else if (typeof JSProf.LRE(37542, key) == "string") {
                                keyStr = JSProf.LWR(37545, keyStr, JSProf.LFC(37544, escapeString, false)(JSProf.LRE(37543, key)));
                            } else {
                                // skip non-string or number keys
                                continue;
                            }
                            val = JSProf.LWR(37550, val, JSProf.LFC(37549, stringify, false)(JSProf.LGE(37546, it, 'key')[key], JSProf.LRE(37547, nextIndent), JSProf.LRE(37548, key)));
                            if (typeof JSProf.LRE(37551, val) != "string") {
                                // skip non-serializable values
                                continue;
                            }
                            // At this point, the most non-IE browsers don't get in this branch 
                            // (they have native JSON), so push is definitely the way to
                            JSProf.LMC(37557, output, 'push').push(JSProf.LRE(37552, newLine) + JSProf.LRE(37553, nextIndent) + JSProf.LRE(37554, keyStr) + ":" + JSProf.LRE(37555, sep) + JSProf.LRE(37556, val));
                        }
                    }
                    return "{" + JSProf.LMC(37558, output, 'join').join(",") + JSProf.LRE(37559, newLine) + JSProf.LRE(37560, indent) + "}";    // String
                }
                return JSProf.LFC(37562, stringify, false)(JSProf.LRE(37561, value), "", "");
            }, 12)
        }, 11);
    }
}, 12));