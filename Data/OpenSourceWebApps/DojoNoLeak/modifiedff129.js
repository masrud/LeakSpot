JSProf.LFC(43279, define, false)(JSProf.LNE(43218, ["./_base/lang"], 10), JSProf.LNF(43278, function (lang) {
    // module:
    //		dojo/io-query
    var backstop = JSProf.LNE(43219, {}, 11);
    return JSProf.LNE(43277, {
        objectToQuery: JSProf.LNF(43242, function objectToQuery(map) {
            // summary:
            //		takes a name/value mapping object and returns a string representing
            //		a URL-encoded version of that object.
            // example:
            //		this object:
            //
            //	|	{
            //	|		blah: "blah",
            //	|		multi: [
            //	|			"thud",
            //	|			"thonk"
            //	|		]
            //	|	};
            //
            //		yields the following query string:
            //
            //	|	"blah=blah&multi=thud&multi=thonk"
            // FIXME: need to implement encodeAscii!!
            var enc = JSProf.LRU(43220, typeof encodeURIComponent === 'undefined' ? undefined : encodeURIComponent), pairs = JSProf.LNE(43221, [], 10);
            for (var name in JSProf.LRE(43222, map)) {
                var value = JSProf.LGE(43223, map, 'name')[name];
                if (JSProf.LRE(43224, value) != JSProf.LGE(43225, backstop, 'name')[name]) {
                    var assign = JSProf.LFC(43227, enc, false)(JSProf.LRE(43226, name)) + "=";
                    if (JSProf.LMC(43229, lang, 'isArray').isArray(JSProf.LRE(43228, value))) {
                        for (var i = 0, l = JSProf.LGD(43230, value, 'length').length; JSProf.LRE(43231, i) < JSProf.LRE(43232, l); ++i) {
                            JSProf.LMC(43236, pairs, 'push').push(JSProf.LRE(43233, assign) + JSProf.LFC(43235, enc, false)(JSProf.LGE(43234, value, 'i')[i]));
                        }
                    } else {
                        JSProf.LMC(43240, pairs, 'push').push(JSProf.LRE(43237, assign) + JSProf.LFC(43239, enc, false)(JSProf.LRE(43238, value)));
                    }
                }
            }
            return JSProf.LMC(43241, pairs, 'join').join("&");    // String
        }, 12),
        queryToObject: JSProf.LNF(43276, function queryToObject(str) {
            // summary:
            //		Create an object representing a de-serialized query section of a
            //		URL. Query keys with multiple values are returned in an array.
            //
            // example:
            //		This string:
            //
            //	|		"foo=bar&foo=baz&thinger=%20spaces%20=blah&zonk=blarg&"
            //
            //		results in this object structure:
            //
            //	|		{
            //	|			foo: [ "bar", "baz" ],
            //	|			thinger: " spaces =blah",
            //	|			zonk: "blarg"
            //	|		}
            //
            //		Note that spaces and other urlencoded entities are correctly
            //		handled.
            // FIXME: should we grab the URL string if we're not passed one?
            var dec = JSProf.LRU(43243, typeof decodeURIComponent === 'undefined' ? undefined : decodeURIComponent), qp = str.split("&"), ret = JSProf.LNE(43244, {}, 11), name, val;
            for (var i = 0, l = JSProf.LGD(43245, qp, 'length').length, item; JSProf.LRE(43246, i) < JSProf.LRE(43247, l); ++i) {
                item = JSProf.LWR(43249, item, JSProf.LGE(43248, qp, 'i')[i]);
                if (JSProf.LGD(43250, item, 'length').length) {
                    var s = JSProf.LMC(43251, item, 'indexOf').indexOf("=");
                    if (JSProf.LRE(43252, s) < 0) {
                        name = JSProf.LWR(43255, name, JSProf.LFC(43254, dec, false)(JSProf.LRE(43253, item)));
                        val = JSProf.LWR(43256, val, "");
                    } else {
                        name = JSProf.LWR(43260, name, JSProf.LFC(43259, dec, false)(JSProf.LMC(43258, item, 'slice').slice(0, JSProf.LRE(43257, s))));
                        val = JSProf.LWR(43264, val, JSProf.LFC(43263, dec, false)(JSProf.LMC(43262, item, 'slice').slice(JSProf.LRE(43261, s) + 1)));
                    }
                    if (typeof JSProf.LGE(43265, ret, 'name')[name] == "string") {
                        // inline'd type check
                        JSProf.LPE(43268, ret, 'name')[name] = JSProf.LRPE(43268, JSProf.LNE(43267, [JSProf.LGE(43266, ret, 'name')[name]], 10));
                    }
                    if (JSProf.LMC(43270, lang, 'isArray').isArray(JSProf.LGE(43269, ret, 'name')[name])) {
                        JSProf.LMC(43272, ret[name], 'push').push(JSProf.LRE(43271, val));
                    } else {
                        JSProf.LPE(43274, ret, 'name')[name] = JSProf.LRPE(43274, JSProf.LRE(43273, val));
                    }
                }
            }
            return JSProf.LRE(43275, ret);    // Object
        }, 12)
    }, 11);
}, 12));