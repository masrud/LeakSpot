JSProf.LFC(42838, define, false)(JSProf.LNE(42777, ["./_base/lang"], 10), JSProf.LNF(42837, function (lang) {
    // module:
    //		dojo/io-query
    var backstop = JSProf.LNE(42778, {}, 11);
    return JSProf.LNE(42836, {
        objectToQuery: JSProf.LNF(42801, function objectToQuery(map) {
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
            var enc = JSProf.LRU(42779, typeof encodeURIComponent === 'undefined' ? undefined : encodeURIComponent), pairs = JSProf.LNE(42780, [], 10);
            for (var name in JSProf.LRE(42781, map)) {
                var value = JSProf.LGE(42782, map, 'name')[name];
                if (JSProf.LRE(42783, value) != JSProf.LGE(42784, backstop, 'name')[name]) {
                    var assign = JSProf.LFC(42786, enc, false)(JSProf.LRE(42785, name)) + "=";
                    if (JSProf.LMC(42788, lang, 'isArray').isArray(JSProf.LRE(42787, value))) {
                        for (var i = 0, l = JSProf.LGD(42789, value, 'length').length; JSProf.LRE(42790, i) < JSProf.LRE(42791, l); ++i) {
                            JSProf.LMC(42795, pairs, 'push').push(JSProf.LRE(42792, assign) + JSProf.LFC(42794, enc, false)(JSProf.LGE(42793, value, 'i')[i]));
                        }
                    } else {
                        JSProf.LMC(42799, pairs, 'push').push(JSProf.LRE(42796, assign) + JSProf.LFC(42798, enc, false)(JSProf.LRE(42797, value)));
                    }
                }
            }
            return JSProf.LMC(42800, pairs, 'join').join("&");    // String
        }, 12),
        queryToObject: JSProf.LNF(42835, function queryToObject(str) {
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
            var dec = JSProf.LRU(42802, typeof decodeURIComponent === 'undefined' ? undefined : decodeURIComponent), qp = str.split("&"), ret = JSProf.LNE(42803, {}, 11), name, val;
            for (var i = 0, l = JSProf.LGD(42804, qp, 'length').length, item; JSProf.LRE(42805, i) < JSProf.LRE(42806, l); ++i) {
                item = JSProf.LWR(42808, item, JSProf.LGE(42807, qp, 'i')[i]);
                if (JSProf.LGD(42809, item, 'length').length) {
                    var s = JSProf.LMC(42810, item, 'indexOf').indexOf("=");
                    if (JSProf.LRE(42811, s) < 0) {
                        name = JSProf.LWR(42814, name, JSProf.LFC(42813, dec, false)(JSProf.LRE(42812, item)));
                        val = JSProf.LWR(42815, val, "");
                    } else {
                        name = JSProf.LWR(42819, name, JSProf.LFC(42818, dec, false)(JSProf.LMC(42817, item, 'slice').slice(0, JSProf.LRE(42816, s))));
                        val = JSProf.LWR(42823, val, JSProf.LFC(42822, dec, false)(JSProf.LMC(42821, item, 'slice').slice(JSProf.LRE(42820, s) + 1)));
                    }
                    if (typeof JSProf.LGE(42824, ret, 'name')[name] == "string") {
                        // inline'd type check
                        JSProf.LPE(42827, ret, 'name')[name] = JSProf.LRPE(42827, JSProf.LNE(42826, [JSProf.LGE(42825, ret, 'name')[name]], 10));
                    }
                    if (JSProf.LMC(42829, lang, 'isArray').isArray(JSProf.LGE(42828, ret, 'name')[name])) {
                        JSProf.LMC(42831, ret[name], 'push').push(JSProf.LRE(42830, val));
                    } else {
                        JSProf.LPE(42833, ret, 'name')[name] = JSProf.LRPE(42833, JSProf.LRE(42832, val));
                    }
                }
            }
            return JSProf.LRE(42834, ret);    // Object
        }, 12)
    }, 11);
}, 12));