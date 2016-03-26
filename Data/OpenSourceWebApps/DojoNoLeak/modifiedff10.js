JSProf.LFC(8650, define, false)(JSProf.LNE(8453, [
    "./kernel",
    "../has",
    "./lang"
], 10), JSProf.LNF(8649, function (dojo, has, lang) {
    JSProf.LFD(8646, buildFn);
    JSProf.LFD(8647, everyOrSome);
    JSProf.LFD(8648, index);
    // module:
    //		dojo/_base/array
    // our old simple function builder stuff
    var cache = JSProf.LNE(8454, {}, 11), u;
    function buildFn(fn) {
        return JSProf.LPE(8458, cache, 'fn')[fn] = JSProf.LRPE(8458, JSProf.LNE(8457, new (JSProf.LFC(8456, Function, true))("item", "index", "array", JSProf.LRE(8455, fn)), 'Function'));    // Function
    }
    // magic snippet: if(typeof fn == "string") fn = cache[fn] || buildFn(fn);
    // every & some
    function everyOrSome(some) {
        var every = !JSProf.LRE(8459, some);
        return JSProf.LNF(8493, function (a, fn, o) {
            var i = 0, l = JSProf.LRE(8460, a) && JSProf.LGD(8461, a, 'length').length || 0, result;
            if (JSProf.LRE(8462, l) && typeof JSProf.LRE(8463, a) == "string")
                a = JSProf.LWR(8464, a, a.split(""));
            if (typeof JSProf.LRE(8465, fn) == "string")
                fn = JSProf.LWR(8469, fn, JSProf.LGE(8466, cache, 'fn')[fn] || JSProf.LFC(8468, buildFn, false)(JSProf.LRE(8467, fn)));
            if (JSProf.LRE(8470, o)) {
                for (; JSProf.LRE(8471, i) < JSProf.LRE(8472, l); ++i) {
                    result = JSProf.LWR(8478, result, !JSProf.LMC(8477, fn, 'call').call(JSProf.LRE(8473, o), JSProf.LGE(8474, a, 'i')[i], JSProf.LRE(8475, i), JSProf.LRE(8476, a)));
                    if (JSProf.LRE(8479, some) ^ JSProf.LRE(8480, result)) {
                        return !JSProf.LRE(8481, result);
                    }
                }
            } else {
                for (; JSProf.LRE(8482, i) < JSProf.LRE(8483, l); ++i) {
                    result = JSProf.LWR(8488, result, !JSProf.LFC(8487, fn, false)(JSProf.LGE(8484, a, 'i')[i], JSProf.LRE(8485, i), JSProf.LRE(8486, a)));
                    if (JSProf.LRE(8489, some) ^ JSProf.LRE(8490, result)) {
                        return !JSProf.LRE(8491, result);
                    }
                }
            }
            return JSProf.LRE(8492, every);    // Boolean
        }, 12);
    }
    // indexOf, lastIndexOf
    function index(up) {
        var delta = 1, lOver = 0, uOver = 0;
        if (!JSProf.LRE(8494, up)) {
            delta = JSProf.LWR(8497, delta, lOver = JSProf.LWR(8496, lOver, uOver = JSProf.LWR(8495, uOver, -1)));
        }
        return JSProf.LNF(8539, function (a, x, from, last) {
            if (JSProf.LRE(8498, last) && JSProf.LRE(8499, delta) > 0) {
                // TODO: why do we use a non-standard signature? why do we need "last"?
                return JSProf.LMC(8503, array, 'lastIndexOf').lastIndexOf(JSProf.LRE(8500, a), JSProf.LRE(8501, x), JSProf.LRE(8502, from));
            }
            var l = JSProf.LRE(8504, a) && JSProf.LGD(8505, a, 'length').length || 0, end = JSProf.LRE(8506, up) ? JSProf.LRE(8507, l) + JSProf.LRE(8508, uOver) : JSProf.LRE(8509, lOver), i;
            if (JSProf.LRE(8510, from) === JSProf.LRE(8511, u)) {
                i = JSProf.LWR(8516, i, JSProf.LRE(8512, up) ? JSProf.LRE(8513, lOver) : JSProf.LRE(8514, l) + JSProf.LRE(8515, uOver));
            } else {
                if (JSProf.LRE(8517, from) < 0) {
                    i = JSProf.LWR(8520, i, JSProf.LRE(8518, l) + JSProf.LRE(8519, from));
                    if (JSProf.LRE(8521, i) < 0) {
                        i = JSProf.LWR(8523, i, JSProf.LRE(8522, lOver));
                    }
                } else {
                    i = JSProf.LWR(8529, i, JSProf.LRE(8524, from) >= JSProf.LRE(8525, l) ? JSProf.LRE(8526, l) + JSProf.LRE(8527, uOver) : JSProf.LRE(8528, from));
                }
            }
            if (JSProf.LRE(8530, l) && typeof JSProf.LRE(8531, a) == "string")
                a = JSProf.LWR(8532, a, a.split(""));
            for (; JSProf.LRE(8533, i) != JSProf.LRE(8534, end); i += JSProf.LRE(8535, delta)) {
                if (JSProf.LGE(8536, a, 'i')[i] == JSProf.LRE(8537, x)) {
                    return JSProf.LRE(8538, i);    // Number
                }
            }
            return -1;    // Number
        }, 12);
    }
    var array = JSProf.LNE(8640, {
            every: JSProf.LFC(8540, everyOrSome, false)(false),
            some: JSProf.LFC(8541, everyOrSome, false)(true),
            indexOf: JSProf.LFC(8542, index, false)(true),
            lastIndexOf: JSProf.LFC(8543, index, false)(false),
            forEach: JSProf.LNF(8568, function (arr, callback, thisObject) {
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
                var i = 0, l = JSProf.LRE(8544, arr) && JSProf.LGD(8545, arr, 'length').length || 0;
                if (JSProf.LRE(8546, l) && typeof JSProf.LRE(8547, arr) == "string")
                    arr = JSProf.LWR(8548, arr, arr.split(""));
                if (typeof JSProf.LRE(8549, callback) == "string")
                    callback = JSProf.LWR(8553, callback, JSProf.LGE(8550, cache, 'callback')[callback] || JSProf.LFC(8552, buildFn, false)(JSProf.LRE(8551, callback)));
                if (JSProf.LRE(8554, thisObject)) {
                    for (; JSProf.LRE(8555, i) < JSProf.LRE(8556, l); ++i) {
                        JSProf.LMC(8561, callback, 'call').call(JSProf.LRE(8557, thisObject), JSProf.LGE(8558, arr, 'i')[i], JSProf.LRE(8559, i), JSProf.LRE(8560, arr));
                    }
                } else {
                    for (; JSProf.LRE(8562, i) < JSProf.LRE(8563, l); ++i) {
                        JSProf.LFC(8567, callback, false)(JSProf.LGE(8564, arr, 'i')[i], JSProf.LRE(8565, i), JSProf.LRE(8566, arr));
                    }
                }
            }, 12),
            map: JSProf.LNF(8601, function (arr, callback, thisObject, Ctr) {
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
                var i = 0, l = JSProf.LRE(8569, arr) && JSProf.LGD(8570, arr, 'length').length || 0, out = JSProf.LNE(8575, new (JSProf.LFC(8574, JSProf.LRE(8571, Ctr) || JSProf.LRU(8572, typeof Array === 'undefined' ? undefined : Array), true))(JSProf.LRE(8573, l)), 'LogicalExpression');
                if (JSProf.LRE(8576, l) && typeof JSProf.LRE(8577, arr) == "string")
                    arr = JSProf.LWR(8578, arr, arr.split(""));
                if (typeof JSProf.LRE(8579, callback) == "string")
                    callback = JSProf.LWR(8583, callback, JSProf.LGE(8580, cache, 'callback')[callback] || JSProf.LFC(8582, buildFn, false)(JSProf.LRE(8581, callback)));
                if (JSProf.LRE(8584, thisObject)) {
                    for (; JSProf.LRE(8585, i) < JSProf.LRE(8586, l); ++i) {
                        JSProf.LPE(8592, out, 'i')[i] = JSProf.LRPE(8592, JSProf.LMC(8591, callback, 'call').call(JSProf.LRE(8587, thisObject), JSProf.LGE(8588, arr, 'i')[i], JSProf.LRE(8589, i), JSProf.LRE(8590, arr)));
                    }
                } else {
                    for (; JSProf.LRE(8593, i) < JSProf.LRE(8594, l); ++i) {
                        JSProf.LPE(8599, out, 'i')[i] = JSProf.LRPE(8599, JSProf.LFC(8598, callback, false)(JSProf.LGE(8595, arr, 'i')[i], JSProf.LRE(8596, i), JSProf.LRE(8597, arr)));
                    }
                }
                return JSProf.LRE(8600, out);    // Array
            }, 12),
            filter: JSProf.LNF(8636, function (arr, callback, thisObject) {
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
                var i = 0, l = JSProf.LRE(8602, arr) && JSProf.LGD(8603, arr, 'length').length || 0, out = JSProf.LNE(8604, [], 10), value;
                if (JSProf.LRE(8605, l) && typeof JSProf.LRE(8606, arr) == "string")
                    arr = JSProf.LWR(8607, arr, arr.split(""));
                if (typeof JSProf.LRE(8608, callback) == "string")
                    callback = JSProf.LWR(8612, callback, JSProf.LGE(8609, cache, 'callback')[callback] || JSProf.LFC(8611, buildFn, false)(JSProf.LRE(8610, callback)));
                if (JSProf.LRE(8613, thisObject)) {
                    for (; JSProf.LRE(8614, i) < JSProf.LRE(8615, l); ++i) {
                        value = JSProf.LWR(8617, value, JSProf.LGE(8616, arr, 'i')[i]);
                        if (JSProf.LMC(8622, callback, 'call').call(JSProf.LRE(8618, thisObject), JSProf.LRE(8619, value), JSProf.LRE(8620, i), JSProf.LRE(8621, arr))) {
                            JSProf.LMC(8624, out, 'push').push(JSProf.LRE(8623, value));
                        }
                    }
                } else {
                    for (; JSProf.LRE(8625, i) < JSProf.LRE(8626, l); ++i) {
                        value = JSProf.LWR(8628, value, JSProf.LGE(8627, arr, 'i')[i]);
                        if (JSProf.LFC(8632, callback, false)(JSProf.LRE(8629, value), JSProf.LRE(8630, i), JSProf.LRE(8631, arr))) {
                            JSProf.LMC(8634, out, 'push').push(JSProf.LRE(8633, value));
                        }
                    }
                }
                return JSProf.LRE(8635, out);    // Array
            }, 12),
            clearCache: JSProf.LNF(8639, function () {
                cache = JSProf.LWR(8638, cache, JSProf.LNE(8637, {}, 11));
            }, 12)
        }, 11);
    JSProf.LFC(8641, has, false)("extend-dojo") && JSProf.LMC(8644, lang, 'mixin').mixin(JSProf.LRE(8642, dojo), JSProf.LRE(8643, array));
    return JSProf.LRE(8645, array);
}, 12));