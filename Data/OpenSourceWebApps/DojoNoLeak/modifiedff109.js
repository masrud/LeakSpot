JSProf.LFC(37469, define, false)(JSProf.LNE(37279, [
    "dojo/_base/lang",
    "dojo/Stateful"
], 10), JSProf.LNF(37468, function (lang, Stateful) {
    JSProf.LFD(37467, update);
    function update(a) {
        // summary:
        //		Set all array elements as stateful so that watch function runs.
        // a: dojox/mvc/StatefulArray
        //		The array.
        // Notify change of elements.
        if (JSProf.LGD(37280, a, '_watchElementCallbacks')._watchElementCallbacks) {
            JSProf.LMC(37281, a, '_watchElementCallbacks')._watchElementCallbacks();
        }
        return JSProf.LRE(37282, a);    // dojox/mvc/StatefulArray
    }
    var StatefulArray = JSProf.LNF(37460, function (a) {
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
            var array = JSProf.LMC(37285, lang, '_toArray')._toArray(JSProf.LRE(37283, a) || JSProf.LNE(37284, [], 10));
            var ctor = JSProf.LRE(37286, StatefulArray);
            JSProf.LPD(37288, array, 'constructor').constructor = JSProf.LRSP(37288, JSProf.LRE(37287, ctor));
            return JSProf.LMC(37459, lang, 'mixin').mixin(JSProf.LRE(37289, array), JSProf.LNE(37425, {
                pop: JSProf.LNF(37293, function () {
                    return JSProf.LGE(37292, JSProf.LMC(37291, this, 'splice').splice(JSProf.LMC(37290, this, 'get').get("length") - 1, 1), 0)[0];
                }, 12),
                push: JSProf.LNF(37299, function () {
                    JSProf.LMC(37297, this.splice, 'apply').apply(this, JSProf.LNE(37295, [
                        JSProf.LMC(37294, this, 'get').get("length"),
                        0
                    ], 10).concat(JSProf.LMC(37296, lang, '_toArray')._toArray(arguments)));
                    return JSProf.LMC(37298, this, 'get').get("length");
                }, 12),
                reverse: JSProf.LNF(37304, function () {
                    return JSProf.LFC(37303, update, false)(JSProf.LMC(37302, JSProf.LNE(37300, [], 10).reverse, 'apply').apply(this, JSProf.LMC(37301, lang, '_toArray')._toArray(arguments)));
                }, 12),
                shift: JSProf.LNF(37307, function () {
                    return JSProf.LGE(37306, JSProf.LMC(37305, this, 'splice').splice(0, 1), 0)[0];
                }, 12),
                sort: JSProf.LNF(37312, function () {
                    return JSProf.LFC(37311, update, false)(JSProf.LMC(37310, JSProf.LNE(37308, [], 10).sort, 'apply').apply(this, JSProf.LMC(37309, lang, '_toArray')._toArray(arguments)));
                }, 12),
                splice: JSProf.LNF(37351, function (idx, n) {
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
                    var l = JSProf.LMC(37313, this, 'get').get("length");
                    idx += JSProf.LRE(37314, idx) < 0 ? JSProf.LRE(37315, l) : 0;
                    var p = JSProf.LMC(37318, Math, 'min').min(JSProf.LRE(37316, idx), JSProf.LRE(37317, l)), removals = JSProf.LMC(37322, this, 'slice').slice(JSProf.LRE(37319, idx), JSProf.LRE(37320, idx) + JSProf.LRE(37321, n)), adds = JSProf.LMC(37324, JSProf.LMC(37323, lang, '_toArray')._toArray(arguments), 'slice').slice(2);
                    // Do the modification in a native manner except for setting additions
                    JSProf.LMC(37332, JSProf.LNE(37325, [], 10).splice, 'apply').apply(this, JSProf.LNE(37328, [
                        JSProf.LRE(37326, idx),
                        JSProf.LRE(37327, n)
                    ], 10).concat(JSProf.LNE(37331, new (JSProf.LFC(37330, Array, true))(JSProf.LGD(37329, adds, 'length').length), 'Array')));
                    // Set additions in a stateful manner
                    for (var i = 0; JSProf.LRE(37333, i) < JSProf.LGD(37334, adds, 'length').length; i++) {
                        JSProf.LPE(37338, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LRE(37335, p) + JSProf.LRE(37336, i))[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] = JSProf.LRPE(37338, JSProf.LGE(37337, adds, 'i')[i]);
                    }
                    // Notify change of elements.
                    if (JSProf.LGD(37339, this, '_watchElementCallbacks')._watchElementCallbacks) {
                        JSProf.LMC(37343, this, '_watchElementCallbacks')._watchElementCallbacks(JSProf.LRE(37340, idx), JSProf.LRE(37341, removals), JSProf.LRE(37342, adds));
                    }
                    // Notify change of length.
                    // Not calling the setter for "length" though, given removal/addition of array automatically changes the length.
                    if (JSProf.LGD(37344, this, '_watchCallbacks')._watchCallbacks) {
                        JSProf.LMC(37349, this, '_watchCallbacks')._watchCallbacks("length", JSProf.LRE(37345, l), JSProf.LRE(37346, l) - JSProf.LGD(37347, removals, 'length').length + JSProf.LGD(37348, adds, 'length').length);
                    }
                    return JSProf.LRE(37350, removals);    // dojox/mvc/StatefulArray
                }, 12),
                unshift: JSProf.LNF(37356, function () {
                    JSProf.LMC(37354, this.splice, 'apply').apply(this, JSProf.LNE(37352, [
                        0,
                        0
                    ], 10).concat(JSProf.LMC(37353, lang, '_toArray')._toArray(arguments)));
                    return JSProf.LMC(37355, this, 'get').get("length");
                }, 12),
                concat: JSProf.LNF(37361, function (a) {
                    return JSProf.LNE(37360, new (JSProf.LFC(37359, StatefulArray, true))(JSProf.LMC(37358, JSProf.LNE(37357, [], 10).concat, 'apply').apply(this, arguments)), 'StatefulArray');
                }, 12),
                join: JSProf.LNF(37371, function (sep) {
                    // summary:
                    //		Returns a string joining string elements in a, with a separator.
                    // sep: String
                    //		The separator.
                    var list = JSProf.LNE(37362, [], 10);
                    for (var l = JSProf.LMC(37363, this, 'get').get("length"), i = 0; JSProf.LRE(37364, i) < JSProf.LRE(37365, l); i++) {
                        JSProf.LMC(37368, list, 'push').push(JSProf.LMC(37367, this, 'get').get(JSProf.LRE(37366, i)));
                    }
                    return JSProf.LMC(37370, list, 'join').join(JSProf.LRE(37369, sep));    // String
                }, 12),
                slice: JSProf.LNF(37393, function (start, end) {
                    // summary:
                    //		Returns partial elements of an array.
                    // start: Number
                    //		The index to begin with.
                    // end: Number
                    //		The index to end at. (a[end] won't be picked up)
                    var l = JSProf.LMC(37372, this, 'get').get("length");
                    start += JSProf.LRE(37373, start) < 0 ? JSProf.LRE(37374, l) : 0;
                    end = JSProf.LWR(37380, end, (JSProf.LRE(37375, end) === void 0 ? JSProf.LRE(37376, l) : JSProf.LRE(37377, end)) + (JSProf.LRE(37378, end) < 0 ? JSProf.LRE(37379, l) : 0));
                    var slice = JSProf.LNE(37381, [], 10);
                    for (var i = JSProf.LRE(37382, start) || 0; JSProf.LRE(37383, i) < JSProf.LMC(37386, Math, 'min').min(JSProf.LRE(37384, end), JSProf.LMC(37385, this, 'get').get("length")); i++) {
                        JSProf.LMC(37389, slice, 'push').push(JSProf.LMC(37388, this, 'get').get(JSProf.LRE(37387, i)));
                    }
                    return JSProf.LNE(37392, new (JSProf.LFC(37391, StatefulArray, true))(JSProf.LRE(37390, slice)), 'StatefulArray');    // dojox/mvc/StatefulArray
                }, 12),
                watchElements: JSProf.LNF(37424, function (callback) {
                    // summary:
                    //		Watch for change in array elements.
                    // callback: Function
                    //		The callback function, which should take: The array index, the removed elements, and the added elements.
                    var callbacks = JSProf.LGD(37394, this, '_watchElementCallbacks')._watchElementCallbacks, _self = this;
                    if (!JSProf.LRE(37395, callbacks)) {
                        callbacks = JSProf.LWR(37407, callbacks, JSProf.LPD(37406, this, '_watchElementCallbacks')._watchElementCallbacks = JSProf.LRSP(37406, JSProf.LNF(37405, function (idx, removals, adds) {
                            for (var list = JSProf.LNE(37396, [], 10).concat(JSProf.LGD(37397, callbacks, 'list').list), i = 0; JSProf.LRE(37398, i) < JSProf.LGD(37399, list, 'length').length; i++) {
                                JSProf.LMC(37404, list[i], 'call').call(JSProf.LRE(37400, _self), JSProf.LRE(37401, idx), JSProf.LRE(37402, removals), JSProf.LRE(37403, adds));
                            }
                        }, 12)));
                        JSProf.LPD(37409, callbacks, 'list').list = JSProf.LRSP(37409, JSProf.LNE(37408, [], 10));
                    }
                    JSProf.LMC(37411, callbacks.list, 'push').push(JSProf.LRE(37410, callback));
                    var h = JSProf.LNE(37412, {}, 11);
                    JSProf.LPD(37422, h, 'unwatch').unwatch = JSProf.LRSP(37422, JSProf.LPD(37421, h, 'remove').remove = JSProf.LRSP(37421, JSProf.LNF(37420, function () {
                        for (var list = JSProf.LGD(37413, callbacks, 'list').list, i = 0; JSProf.LRE(37414, i) < JSProf.LGD(37415, list, 'length').length; i++) {
                            if (JSProf.LGE(37416, list, 'i')[i] == JSProf.LRE(37417, callback)) {
                                JSProf.LMC(37419, list, 'splice').splice(JSProf.LRE(37418, i), 1);
                                break;
                            }
                        }
                    }, 12)));
                    return JSProf.LRE(37423, h);    // dojo/handle
                }, 12)
            }, 11), JSProf.LGD(37426, Stateful, 'prototype').prototype, JSProf.LNE(37458, {
                set: JSProf.LNF(37453, function (name, value) {
                    // summary:
                    //		Sets a new value to an array.
                    // name: Number|String
                    //		The property name.
                    // value: Anything
                    //		The new value.
                    if (JSProf.LRE(37427, name) == "length") {
                        var old = JSProf.LMC(37428, this, 'get').get("length");
                        if (JSProf.LRE(37429, old) < JSProf.LRE(37430, value)) {
                            JSProf.LMC(37437, this.splice, 'apply').apply(this, JSProf.LNE(37432, [
                                JSProf.LRE(37431, old),
                                0
                            ], 10).concat(JSProf.LNE(37436, new (JSProf.LFC(37435, Array, true))(JSProf.LRE(37433, value) - JSProf.LRE(37434, old)), 'Array')));
                        } else if (JSProf.LRE(37438, value) < JSProf.LRE(37439, old)) {
                            JSProf.LMC(37444, this.splice, 'apply').apply(this, JSProf.LNE(37443, [
                                JSProf.LRE(37440, value),
                                JSProf.LRE(37441, old) - JSProf.LRE(37442, value)
                            ], 10));
                        }
                        return this;
                    } else {
                        var oldLength = JSProf.LGD(37445, this, 'length').length;
                        JSProf.LMC(37448, Stateful.prototype.set, 'call').call(this, JSProf.LRE(37446, name), JSProf.LRE(37447, value));
                        if (JSProf.LRE(37449, oldLength) != JSProf.LGD(37450, this, 'length').length) {
                            JSProf.LMC(37452, Stateful.prototype.set, 'call').call(this, "length", JSProf.LGD(37451, this, 'length').length);
                        }
                        return this;
                    }
                }, 12),
                isInstanceOf: JSProf.LNF(37457, function (cls) {
                    return JSProf.LMC(37454, Stateful.prototype.isInstanceOf, 'apply').apply(this, arguments) || JSProf.LRE(37455, cls) == JSProf.LRE(37456, StatefulArray);
                }, 12)
            }, 11));
        }, 12);
    JSProf.LPD(37464, StatefulArray, '_meta')._meta = JSProf.LRSP(37464, JSProf.LNE(37463, { bases: JSProf.LNE(37462, [JSProf.LRE(37461, Stateful)], 10) }, 11));
    // For isInstanceOf()
    return JSProf.LMC(37466, lang, 'setObject').setObject("dojox.mvc.StatefulArray", JSProf.LRE(37465, StatefulArray));
}, 12));