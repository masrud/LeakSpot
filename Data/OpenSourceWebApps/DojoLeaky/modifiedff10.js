JSProf.LFC(8175, define, false)(JSProf.LNE(7978, [
    "./kernel",
    "../has",
    "./lang"
], 10), JSProf.LNF(8174, function (dojo, has, lang) {
    JSProf.LFD(8171, buildFn);
    JSProf.LFD(8172, everyOrSome);
    JSProf.LFD(8173, index);
    // module:
    //		dojo/_base/array
    // our old simple function builder stuff
    var cache = JSProf.LNE(7979, {}, 11), u;
    function buildFn(fn) {
        return JSProf.LPE(7983, cache, 'fn')[fn] = JSProf.LRPE(7983, JSProf.LNE(7982, new (JSProf.LFC(7981, Function, true))("item", "index", "array", JSProf.LRE(7980, fn)), 'Function'));    // Function
    }
    // magic snippet: if(typeof fn == "string") fn = cache[fn] || buildFn(fn);
    // every & some
    function everyOrSome(some) {
        var every = !JSProf.LRE(7984, some);
        return JSProf.LNF(8018, function (a, fn, o) {
            var i = 0, l = JSProf.LRE(7985, a) && JSProf.LGD(7986, a, 'length').length || 0, result;
            if (JSProf.LRE(7987, l) && typeof JSProf.LRE(7988, a) == "string")
                a = JSProf.LWR(7989, a, a.split(""));
            if (typeof JSProf.LRE(7990, fn) == "string")
                fn = JSProf.LWR(7994, fn, JSProf.LGE(7991, cache, 'fn')[fn] || JSProf.LFC(7993, buildFn, false)(JSProf.LRE(7992, fn)));
            if (JSProf.LRE(7995, o)) {
                for (; JSProf.LRE(7996, i) < JSProf.LRE(7997, l); ++i) {
                    result = JSProf.LWR(8003, result, !JSProf.LMC(8002, fn, 'call').call(JSProf.LRE(7998, o), JSProf.LGE(7999, a, 'i')[i], JSProf.LRE(8000, i), JSProf.LRE(8001, a)));
                    if (JSProf.LRE(8004, some) ^ JSProf.LRE(8005, result)) {
                        return !JSProf.LRE(8006, result);
                    }
                }
            } else {
                for (; JSProf.LRE(8007, i) < JSProf.LRE(8008, l); ++i) {
                    result = JSProf.LWR(8013, result, !JSProf.LFC(8012, fn, false)(JSProf.LGE(8009, a, 'i')[i], JSProf.LRE(8010, i), JSProf.LRE(8011, a)));
                    if (JSProf.LRE(8014, some) ^ JSProf.LRE(8015, result)) {
                        return !JSProf.LRE(8016, result);
                    }
                }
            }
            return JSProf.LRE(8017, every);    // Boolean
        }, 12);
    }
    // indexOf, lastIndexOf
    function index(up) {
        var delta = 1, lOver = 0, uOver = 0;
        if (!JSProf.LRE(8019, up)) {
            delta = JSProf.LWR(8022, delta, lOver = JSProf.LWR(8021, lOver, uOver = JSProf.LWR(8020, uOver, -1)));
        }
        return JSProf.LNF(8064, function (a, x, from, last) {
            if (JSProf.LRE(8023, last) && JSProf.LRE(8024, delta) > 0) {
                // TODO: why do we use a non-standard signature? why do we need "last"?
                return JSProf.LMC(8028, array, 'lastIndexOf').lastIndexOf(JSProf.LRE(8025, a), JSProf.LRE(8026, x), JSProf.LRE(8027, from));
            }
            var l = JSProf.LRE(8029, a) && JSProf.LGD(8030, a, 'length').length || 0, end = JSProf.LRE(8031, up) ? JSProf.LRE(8032, l) + JSProf.LRE(8033, uOver) : JSProf.LRE(8034, lOver), i;
            if (JSProf.LRE(8035, from) === JSProf.LRE(8036, u)) {
                i = JSProf.LWR(8041, i, JSProf.LRE(8037, up) ? JSProf.LRE(8038, lOver) : JSProf.LRE(8039, l) + JSProf.LRE(8040, uOver));
            } else {
                if (JSProf.LRE(8042, from) < 0) {
                    i = JSProf.LWR(8045, i, JSProf.LRE(8043, l) + JSProf.LRE(8044, from));
                    if (JSProf.LRE(8046, i) < 0) {
                        i = JSProf.LWR(8048, i, JSProf.LRE(8047, lOver));
                    }
                } else {
                    i = JSProf.LWR(8054, i, JSProf.LRE(8049, from) >= JSProf.LRE(8050, l) ? JSProf.LRE(8051, l) + JSProf.LRE(8052, uOver) : JSProf.LRE(8053, from));
                }
            }
            if (JSProf.LRE(8055, l) && typeof JSProf.LRE(8056, a) == "string")
                a = JSProf.LWR(8057, a, a.split(""));
            for (; JSProf.LRE(8058, i) != JSProf.LRE(8059, end); i += JSProf.LRE(8060, delta)) {
                if (JSProf.LGE(8061, a, 'i')[i] == JSProf.LRE(8062, x)) {
                    return JSProf.LRE(8063, i);    // Number
                }
            }
            return -1;    // Number
        }, 12);
    }
    var array = JSProf.LNE(8165, {
            every: JSProf.LFC(8065, everyOrSome, false)(false),
            some: JSProf.LFC(8066, everyOrSome, false)(true),
            indexOf: JSProf.LFC(8067, index, false)(true),
            lastIndexOf: JSProf.LFC(8068, index, false)(false),
            forEach: JSProf.LNF(8093, function (arr, callback, thisObject) {
                // summary:
                //		for every item in arr, callback is invoked. Return values are ignored.
                //		If you want to break out of the loop, consider using array.every() or array.some().
                //		forEach does not allow breaking out of the loop over the items in arr.
                // arr:
                //		the array to iterate over. If a string, operates on individual characters.
                // callback:
                //		a function is invoked with three arguments: item, index, and array
                // thisObject:
                //		may be used to scope the call to callback
                // description:
                //		This function corresponds to the JavaScript 1.6 Array.forEach() method, with one difference: when
                //		run over sparse arrays, this implementation passes the "holes" in the sparse array to
                //		the callback function with a value of undefined. JavaScript 1.6's forEach skips the holes in the sparse array.
                //		For more details, see:
                //		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/forEach
                // example:
                //	| // log out all members of the array:
                //	| array.forEach(
                //	|		[ "thinger", "blah", "howdy", 10 ],
                //	|		function(item){
                //	|			console.log(item);
                //	|		}
                //	| );
                // example:
                //	| // log out the members and their indexes
                //	| array.forEach(
                //	|		[ "thinger", "blah", "howdy", 10 ],
                //	|		function(item, idx, arr){
                //	|			console.log(item, "at index:", idx);
                //	|		}
                //	| );
                // example:
                //	| // use a scoped object member as the callback
                //	|
                //	| var obj = {
                //	|		prefix: "logged via obj.callback:",
                //	|		callback: function(item){
                //	|			console.log(this.prefix, item);
                //	|		}
                //	| };
                //	|
                //	| // specifying the scope function executes the callback in that scope
                //	| array.forEach(
                //	|		[ "thinger", "blah", "howdy", 10 ],
                //	|		obj.callback,
                //	|		obj
                //	| );
                //	|
                //	| // alternately, we can accomplish the same thing with lang.hitch()
                //	| array.forEach(
                //	|		[ "thinger", "blah", "howdy", 10 ],
                //	|		lang.hitch(obj, "callback")
                //	| );
                // arr: Array|String
                // callback: Function|String
                // thisObject: Object?
                var i = 0, l = JSProf.LRE(8069, arr) && JSProf.LGD(8070, arr, 'length').length || 0;
                if (JSProf.LRE(8071, l) && typeof JSProf.LRE(8072, arr) == "string")
                    arr = JSProf.LWR(8073, arr, arr.split(""));
                if (typeof JSProf.LRE(8074, callback) == "string")
                    callback = JSProf.LWR(8078, callback, JSProf.LGE(8075, cache, 'callback')[callback] || JSProf.LFC(8077, buildFn, false)(JSProf.LRE(8076, callback)));
                if (JSProf.LRE(8079, thisObject)) {
                    for (; JSProf.LRE(8080, i) < JSProf.LRE(8081, l); ++i) {
                        JSProf.LMC(8086, callback, 'call').call(JSProf.LRE(8082, thisObject), JSProf.LGE(8083, arr, 'i')[i], JSProf.LRE(8084, i), JSProf.LRE(8085, arr));
                    }
                } else {
                    for (; JSProf.LRE(8087, i) < JSProf.LRE(8088, l); ++i) {
                        JSProf.LFC(8092, callback, false)(JSProf.LGE(8089, arr, 'i')[i], JSProf.LRE(8090, i), JSProf.LRE(8091, arr));
                    }
                }
            }, 12),
            map: JSProf.LNF(8126, function (arr, callback, thisObject, Ctr) {
                // summary:
                //		applies callback to each element of arr and returns
                //		an Array with the results
                // arr: Array|String
                //		the array to iterate on. If a string, operates on
                //		individual characters.
                // callback: Function|String
                //		a function is invoked with three arguments, (item, index,
                //		array),	 and returns a value
                // thisObject: Object?
                //		may be used to scope the call to callback
                // returns: Array
                // description:
                //		This function corresponds to the JavaScript 1.6 Array.map() method, with one difference: when
                //		run over sparse arrays, this implementation passes the "holes" in the sparse array to
                //		the callback function with a value of undefined. JavaScript 1.6's map skips the holes in the sparse array.
                //		For more details, see:
                //		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
                // example:
                //	| // returns [2, 3, 4, 5]
                //	| array.map([1, 2, 3, 4], function(item){ return item+1 });
                // TODO: why do we have a non-standard signature here? do we need "Ctr"?
                var i = 0, l = JSProf.LRE(8094, arr) && JSProf.LGD(8095, arr, 'length').length || 0, out = JSProf.LNE(8100, new (JSProf.LFC(8099, JSProf.LRE(8096, Ctr) || JSProf.LRU(8097, typeof Array === 'undefined' ? undefined : Array), true))(JSProf.LRE(8098, l)), 'LogicalExpression');
                if (JSProf.LRE(8101, l) && typeof JSProf.LRE(8102, arr) == "string")
                    arr = JSProf.LWR(8103, arr, arr.split(""));
                if (typeof JSProf.LRE(8104, callback) == "string")
                    callback = JSProf.LWR(8108, callback, JSProf.LGE(8105, cache, 'callback')[callback] || JSProf.LFC(8107, buildFn, false)(JSProf.LRE(8106, callback)));
                if (JSProf.LRE(8109, thisObject)) {
                    for (; JSProf.LRE(8110, i) < JSProf.LRE(8111, l); ++i) {
                        JSProf.LPE(8117, out, 'i')[i] = JSProf.LRPE(8117, JSProf.LMC(8116, callback, 'call').call(JSProf.LRE(8112, thisObject), JSProf.LGE(8113, arr, 'i')[i], JSProf.LRE(8114, i), JSProf.LRE(8115, arr)));
                    }
                } else {
                    for (; JSProf.LRE(8118, i) < JSProf.LRE(8119, l); ++i) {
                        JSProf.LPE(8124, out, 'i')[i] = JSProf.LRPE(8124, JSProf.LFC(8123, callback, false)(JSProf.LGE(8120, arr, 'i')[i], JSProf.LRE(8121, i), JSProf.LRE(8122, arr)));
                    }
                }
                return JSProf.LRE(8125, out);    // Array
            }, 12),
            filter: JSProf.LNF(8161, function (arr, callback, thisObject) {
                // summary:
                //		Returns a new Array with those items from arr that match the
                //		condition implemented by callback.
                // arr: Array
                //		the array to iterate over.
                // callback: Function|String
                //		a function that is invoked with three arguments (item,
                //		index, array). The return of this function is expected to
                //		be a boolean which determines whether the passed-in item
                //		will be included in the returned array.
                // thisObject: Object?
                //		may be used to scope the call to callback
                // returns: Array
                // description:
                //		This function corresponds to the JavaScript 1.6 Array.filter() method, with one difference: when
                //		run over sparse arrays, this implementation passes the "holes" in the sparse array to
                //		the callback function with a value of undefined. JavaScript 1.6's filter skips the holes in the sparse array.
                //		For more details, see:
                //		https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
                // example:
                //	| // returns [2, 3, 4]
                //	| array.filter([1, 2, 3, 4], function(item){ return item>1; });
                // TODO: do we need "Ctr" here like in map()?
                var i = 0, l = JSProf.LRE(8127, arr) && JSProf.LGD(8128, arr, 'length').length || 0, out = JSProf.LNE(8129, [], 10), value;
                if (JSProf.LRE(8130, l) && typeof JSProf.LRE(8131, arr) == "string")
                    arr = JSProf.LWR(8132, arr, arr.split(""));
                if (typeof JSProf.LRE(8133, callback) == "string")
                    callback = JSProf.LWR(8137, callback, JSProf.LGE(8134, cache, 'callback')[callback] || JSProf.LFC(8136, buildFn, false)(JSProf.LRE(8135, callback)));
                if (JSProf.LRE(8138, thisObject)) {
                    for (; JSProf.LRE(8139, i) < JSProf.LRE(8140, l); ++i) {
                        value = JSProf.LWR(8142, value, JSProf.LGE(8141, arr, 'i')[i]);
                        if (JSProf.LMC(8147, callback, 'call').call(JSProf.LRE(8143, thisObject), JSProf.LRE(8144, value), JSProf.LRE(8145, i), JSProf.LRE(8146, arr))) {
                            JSProf.LMC(8149, out, 'push').push(JSProf.LRE(8148, value));
                        }
                    }
                } else {
                    for (; JSProf.LRE(8150, i) < JSProf.LRE(8151, l); ++i) {
                        value = JSProf.LWR(8153, value, JSProf.LGE(8152, arr, 'i')[i]);
                        if (JSProf.LFC(8157, callback, false)(JSProf.LRE(8154, value), JSProf.LRE(8155, i), JSProf.LRE(8156, arr))) {
                            JSProf.LMC(8159, out, 'push').push(JSProf.LRE(8158, value));
                        }
                    }
                }
                return JSProf.LRE(8160, out);    // Array
            }, 12),
            clearCache: JSProf.LNF(8164, function () {
                cache = JSProf.LWR(8163, cache, JSProf.LNE(8162, {}, 11));
            }, 12)
        }, 11);
    JSProf.LFC(8166, has, false)("extend-dojo") && JSProf.LMC(8169, lang, 'mixin').mixin(JSProf.LRE(8167, dojo), JSProf.LRE(8168, array));
    return JSProf.LRE(8170, array);
}, 12));