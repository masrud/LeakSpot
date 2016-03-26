JSProf.LFC(35074, define, false)(JSProf.LNE(34884, [
    "dojo/_base/lang",
    "dojo/Stateful"
], 10), JSProf.LNF(35073, function (lang, Stateful) {
    JSProf.LFD(35072, update);
    function update(a) {
        // summary:
        //		Set all array elements as stateful so that watch function runs.
        // a: dojox/mvc/StatefulArray
        //		The array.
        // Notify change of elements.
        if (JSProf.LGD(34885, a, '_watchElementCallbacks')._watchElementCallbacks) {
            JSProf.LMC(34886, a, '_watchElementCallbacks')._watchElementCallbacks();
        }
        return JSProf.LRE(34887, a);    // dojox/mvc/StatefulArray
    }
    var StatefulArray = JSProf.LNF(35065, function (a) {
            // summary:
            //		An inheritance of native JavaScript array, that adds dojo/Stateful capability.
            // description:
            //		Supported methods are:
            //
            //		- pop() - watchElements() notification is done for the removed elements. watch() notification is done for the length.
            //		- push() - watchElements() notification is done for the added elements. watch() notification is done for the length.
            //		- reverse() - watchElements() notification is done, indicating that the change affects all elements.
            //		- shift() - watchElements() notification is done for the removed elements. watch() notification is done for the length.
            //		- sort() - watchElements() notification is done, indicating that the change affects all elements.
            //		- splice() - watchElements() notification is done for the removed/added elements. watch() notification is done for the length. Returns an instance of StatefulArray instead of the native array.
            //		- unshift() - watchElements() notification is done for the added elements. watch() notification is done for the length.
            //		- concat() - Returns an instance of StatefulArray instead of the native Array.
            //		- join() - The length as well as the elements are obtained via stateful getters, instead of direct access.
            //		- slice() - The length as well as the elements are obtained via stateful getters, instead of direct access.
            //		- Setting an element to this array via set() - watch() notification is done for the new element as well as the new length.
            //		- Setting a length to this array via set() - watchElements() notification is done for the removed/added elements. watch() notification is done for the new length.
            var array = JSProf.LMC(34890, lang, '_toArray')._toArray(JSProf.LRE(34888, a) || JSProf.LNE(34889, [], 10));
            var ctor = JSProf.LRE(34891, StatefulArray);
            JSProf.LPD(34893, array, 'constructor').constructor = JSProf.LRSP(34893, JSProf.LRE(34892, ctor));
            return JSProf.LMC(35064, lang, 'mixin').mixin(JSProf.LRE(34894, array), JSProf.LNE(35030, {
                pop: JSProf.LNF(34898, function () {
                    return JSProf.LGE(34897, JSProf.LMC(34896, this, 'splice').splice(JSProf.LMC(34895, this, 'get').get("length") - 1, 1), 0)[0];
                }, 12),
                push: JSProf.LNF(34904, function () {
                    JSProf.LMC(34902, this.splice, 'apply').apply(this, JSProf.LNE(34900, [
                        JSProf.LMC(34899, this, 'get').get("length"),
                        0
                    ], 10).concat(JSProf.LMC(34901, lang, '_toArray')._toArray(arguments)));
                    return JSProf.LMC(34903, this, 'get').get("length");
                }, 12),
                reverse: JSProf.LNF(34909, function () {
                    return JSProf.LFC(34908, update, false)(JSProf.LMC(34907, JSProf.LNE(34905, [], 10).reverse, 'apply').apply(this, JSProf.LMC(34906, lang, '_toArray')._toArray(arguments)));
                }, 12),
                shift: JSProf.LNF(34912, function () {
                    return JSProf.LGE(34911, JSProf.LMC(34910, this, 'splice').splice(0, 1), 0)[0];
                }, 12),
                sort: JSProf.LNF(34917, function () {
                    return JSProf.LFC(34916, update, false)(JSProf.LMC(34915, JSProf.LNE(34913, [], 10).sort, 'apply').apply(this, JSProf.LMC(34914, lang, '_toArray')._toArray(arguments)));
                }, 12),
                splice: JSProf.LNF(34956, function (idx, n) {
                    // summary:
                    //		Removes and then adds some elements to an array.
                    //		watchElements() notification is done for the removed/added elements.
                    //		watch() notification is done for the length.
                    //		Returns an instance of StatefulArray instead of the native array.
                    // idx: Number
                    //		The index where removal/addition should be done.
                    // n: Number
                    //		How many elements to be removed at idx.
                    // varargs: Anything[]
                    //		The elements to be added to idx.
                    // returns: dojox/mvc/StatefulArray
                    //		The removed elements.
                    var l = JSProf.LMC(34918, this, 'get').get("length");
                    idx += JSProf.LRE(34919, idx) < 0 ? JSProf.LRE(34920, l) : 0;
                    var p = JSProf.LMC(34923, Math, 'min').min(JSProf.LRE(34921, idx), JSProf.LRE(34922, l)), removals = JSProf.LMC(34927, this, 'slice').slice(JSProf.LRE(34924, idx), JSProf.LRE(34925, idx) + JSProf.LRE(34926, n)), adds = JSProf.LMC(34929, JSProf.LMC(34928, lang, '_toArray')._toArray(arguments), 'slice').slice(2);
                    // Do the modification in a native manner except for setting additions
                    JSProf.LMC(34937, JSProf.LNE(34930, [], 10).splice, 'apply').apply(this, JSProf.LNE(34933, [
                        JSProf.LRE(34931, idx),
                        JSProf.LRE(34932, n)
                    ], 10).concat(JSProf.LNE(34936, new (JSProf.LFC(34935, Array, true))(JSProf.LGD(34934, adds, 'length').length), 'Array')));
                    // Set additions in a stateful manner
                    for (var i = 0; JSProf.LRE(34938, i) < JSProf.LGD(34939, adds, 'length').length; i++) {
                        JSProf.LPE(34943, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LRE(34940, p) + JSProf.LRE(34941, i))[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] = JSProf.LRPE(34943, JSProf.LGE(34942, adds, 'i')[i]);
                    }
                    // Notify change of elements.
                    if (JSProf.LGD(34944, this, '_watchElementCallbacks')._watchElementCallbacks) {
                        JSProf.LMC(34948, this, '_watchElementCallbacks')._watchElementCallbacks(JSProf.LRE(34945, idx), JSProf.LRE(34946, removals), JSProf.LRE(34947, adds));
                    }
                    // Notify change of length.
                    // Not calling the setter for "length" though, given removal/addition of array automatically changes the length.
                    if (JSProf.LGD(34949, this, '_watchCallbacks')._watchCallbacks) {
                        JSProf.LMC(34954, this, '_watchCallbacks')._watchCallbacks("length", JSProf.LRE(34950, l), JSProf.LRE(34951, l) - JSProf.LGD(34952, removals, 'length').length + JSProf.LGD(34953, adds, 'length').length);
                    }
                    return JSProf.LRE(34955, removals);    // dojox/mvc/StatefulArray
                }, 12),
                unshift: JSProf.LNF(34961, function () {
                    JSProf.LMC(34959, this.splice, 'apply').apply(this, JSProf.LNE(34957, [
                        0,
                        0
                    ], 10).concat(JSProf.LMC(34958, lang, '_toArray')._toArray(arguments)));
                    return JSProf.LMC(34960, this, 'get').get("length");
                }, 12),
                concat: JSProf.LNF(34966, function (a) {
                    return JSProf.LNE(34965, new (JSProf.LFC(34964, StatefulArray, true))(JSProf.LMC(34963, JSProf.LNE(34962, [], 10).concat, 'apply').apply(this, arguments)), 'StatefulArray');
                }, 12),
                join: JSProf.LNF(34976, function (sep) {
                    // summary:
                    //		Returns a string joining string elements in a, with a separator.
                    // sep: String
                    //		The separator.
                    var list = JSProf.LNE(34967, [], 10);
                    for (var l = JSProf.LMC(34968, this, 'get').get("length"), i = 0; JSProf.LRE(34969, i) < JSProf.LRE(34970, l); i++) {
                        JSProf.LMC(34973, list, 'push').push(JSProf.LMC(34972, this, 'get').get(JSProf.LRE(34971, i)));
                    }
                    return JSProf.LMC(34975, list, 'join').join(JSProf.LRE(34974, sep));    // String
                }, 12),
                slice: JSProf.LNF(34998, function (start, end) {
                    // summary:
                    //		Returns partial elements of an array.
                    // start: Number
                    //		The index to begin with.
                    // end: Number
                    //		The index to end at. (a[end] won't be picked up)
                    var l = JSProf.LMC(34977, this, 'get').get("length");
                    start += JSProf.LRE(34978, start) < 0 ? JSProf.LRE(34979, l) : 0;
                    end = JSProf.LWR(34985, end, (JSProf.LRE(34980, end) === void 0 ? JSProf.LRE(34981, l) : JSProf.LRE(34982, end)) + (JSProf.LRE(34983, end) < 0 ? JSProf.LRE(34984, l) : 0));
                    var slice = JSProf.LNE(34986, [], 10);
                    for (var i = JSProf.LRE(34987, start) || 0; JSProf.LRE(34988, i) < JSProf.LMC(34991, Math, 'min').min(JSProf.LRE(34989, end), JSProf.LMC(34990, this, 'get').get("length")); i++) {
                        JSProf.LMC(34994, slice, 'push').push(JSProf.LMC(34993, this, 'get').get(JSProf.LRE(34992, i)));
                    }
                    return JSProf.LNE(34997, new (JSProf.LFC(34996, StatefulArray, true))(JSProf.LRE(34995, slice)), 'StatefulArray');    // dojox/mvc/StatefulArray
                }, 12),
                watchElements: JSProf.LNF(35029, function (callback) {
                    // summary:
                    //		Watch for change in array elements.
                    // callback: Function
                    //		The callback function, which should take: The array index, the removed elements, and the added elements.
                    var callbacks = JSProf.LGD(34999, this, '_watchElementCallbacks')._watchElementCallbacks, _self = this;
                    if (!JSProf.LRE(35000, callbacks)) {
                        callbacks = JSProf.LWR(35012, callbacks, JSProf.LPD(35011, this, '_watchElementCallbacks')._watchElementCallbacks = JSProf.LRSP(35011, JSProf.LNF(35010, function (idx, removals, adds) {
                            for (var list = JSProf.LNE(35001, [], 10).concat(JSProf.LGD(35002, callbacks, 'list').list), i = 0; JSProf.LRE(35003, i) < JSProf.LGD(35004, list, 'length').length; i++) {
                                JSProf.LMC(35009, list[i], 'call').call(JSProf.LRE(35005, _self), JSProf.LRE(35006, idx), JSProf.LRE(35007, removals), JSProf.LRE(35008, adds));
                            }
                        }, 12)));
                        JSProf.LPD(35014, callbacks, 'list').list = JSProf.LRSP(35014, JSProf.LNE(35013, [], 10));
                    }
                    JSProf.LMC(35016, callbacks.list, 'push').push(JSProf.LRE(35015, callback));
                    var h = JSProf.LNE(35017, {}, 11);
                    JSProf.LPD(35027, h, 'unwatch').unwatch = JSProf.LRSP(35027, JSProf.LPD(35026, h, 'remove').remove = JSProf.LRSP(35026, JSProf.LNF(35025, function () {
                        for (var list = JSProf.LGD(35018, callbacks, 'list').list, i = 0; JSProf.LRE(35019, i) < JSProf.LGD(35020, list, 'length').length; i++) {
                            if (JSProf.LGE(35021, list, 'i')[i] == JSProf.LRE(35022, callback)) {
                                JSProf.LMC(35024, list, 'splice').splice(JSProf.LRE(35023, i), 1);
                                break;
                            }
                        }
                    }, 12)));
                    return JSProf.LRE(35028, h);    // dojo/handle
                }, 12)
            }, 11), JSProf.LGD(35031, Stateful, 'prototype').prototype, JSProf.LNE(35063, {
                set: JSProf.LNF(35058, function (name, value) {
                    // summary:
                    //		Sets a new value to an array.
                    // name: Number|String
                    //		The property name.
                    // value: Anything
                    //		The new value.
                    if (JSProf.LRE(35032, name) == "length") {
                        var old = JSProf.LMC(35033, this, 'get').get("length");
                        if (JSProf.LRE(35034, old) < JSProf.LRE(35035, value)) {
                            JSProf.LMC(35042, this.splice, 'apply').apply(this, JSProf.LNE(35037, [
                                JSProf.LRE(35036, old),
                                0
                            ], 10).concat(JSProf.LNE(35041, new (JSProf.LFC(35040, Array, true))(JSProf.LRE(35038, value) - JSProf.LRE(35039, old)), 'Array')));
                        } else if (JSProf.LRE(35043, value) < JSProf.LRE(35044, old)) {
                            JSProf.LMC(35049, this.splice, 'apply').apply(this, JSProf.LNE(35048, [
                                JSProf.LRE(35045, value),
                                JSProf.LRE(35046, old) - JSProf.LRE(35047, value)
                            ], 10));
                        }
                        return this;
                    } else {
                        var oldLength = JSProf.LGD(35050, this, 'length').length;
                        JSProf.LMC(35053, Stateful.prototype.set, 'call').call(this, JSProf.LRE(35051, name), JSProf.LRE(35052, value));
                        if (JSProf.LRE(35054, oldLength) != JSProf.LGD(35055, this, 'length').length) {
                            JSProf.LMC(35057, Stateful.prototype.set, 'call').call(this, "length", JSProf.LGD(35056, this, 'length').length);
                        }
                        return this;
                    }
                }, 12),
                isInstanceOf: JSProf.LNF(35062, function (cls) {
                    return JSProf.LMC(35059, Stateful.prototype.isInstanceOf, 'apply').apply(this, arguments) || JSProf.LRE(35060, cls) == JSProf.LRE(35061, StatefulArray);
                }, 12)
            }, 11));
        }, 12);
    JSProf.LPD(35069, StatefulArray, '_meta')._meta = JSProf.LRSP(35069, JSProf.LNE(35068, { bases: JSProf.LNE(35067, [JSProf.LRE(35066, Stateful)], 10) }, 11));
    // For isInstanceOf()
    return JSProf.LMC(35071, lang, 'setObject').setObject("dojox.mvc.StatefulArray", JSProf.LRE(35070, StatefulArray));
}, 12));