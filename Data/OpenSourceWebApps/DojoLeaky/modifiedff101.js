JSProf.LFC(33751, define, false)(JSProf.LNE(33708, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/Stateful"
], 10), JSProf.LNF(33750, function (array, lang, Stateful) {
    var getPlainValueOptions = JSProf.LNE(33734, {
            getType: JSProf.LNF(33715, function (v) {
                // summary:
                //		Returns the type of the given value.
                // v: Anything
                //		The value.
                // returns:
                //		 The type of the given value.
                return JSProf.LMC(33710, lang, 'isArray').isArray(JSProf.LRE(33709, v)) ? "array" : JSProf.LRE(33711, v) != null && JSProf.LMC(33714, JSProf.LNE(33712, {}, 11).toString, 'call').call(JSProf.LRE(33713, v)) == "[object Object]" ? "object" : "value";
            }, 12),
            getPlainArray: JSProf.LNF(33721, function (a) {
                // summary:
                //		Returns the stateful version of the given array.
                // a: Anything[]
                //		The array.
                // returns:
                //		 The converted array.
                return JSProf.LMC(33720, array, 'map').map(JSProf.LRE(33716, a), JSProf.LNF(33719, function (item) {
                    return JSProf.LFC(33718, getPlainValue, false)(JSProf.LRE(33717, item), this);
                }, 12), this);    // Anything[]
            }, 12),
            getPlainObject: JSProf.LNF(33731, function (o) {
                // summary:
                //		Returns the stateful version of the given object.
                // o: Object
                //		The object.
                var plain = JSProf.LNE(33722, {}, 11);
                for (var s in JSProf.LRE(33723, o)) {
                    if (!(JSProf.LRE(33724, s) in JSProf.LGD(33725, Stateful, 'prototype').prototype) && JSProf.LRE(33726, s) != "_watchCallbacks") {
                        JSProf.LPE(33729, plain, 's')[s] = JSProf.LRPE(33729, JSProf.LFC(33728, getPlainValue, false)(JSProf.LGE(33727, o, 's')[s], this));
                    }
                }
                return JSProf.LRE(33730, plain);    // Object
            }, 12),
            getPlainValue: JSProf.LNF(33733, function (v) {
                // summary:
                //		Just returns the given value.
                return JSProf.LRE(33732, v);    // Anything
            }, 12)
        }, 11);
    var getPlainValue = JSProf.LNF(33745, function (value, options) {
            // summary:
            //		Create a raw value from a dojo/Stateful object.
            // description:
            //		Recursively iterates the stateful value given, and convert them to raw ones.
            // value: Anything
            //		The stateful value.
            // options: dojox/mvc/getPlainValueOptions
            //		The object that defines how plain value should be created from stateful value.
            // returns:
            //		 The converted value.
            return JSProf.LMC(33744, JSProf.LRE(33735, options) || JSProf.LRE(33736, getPlainValue), JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b = "getPlain" + JSProf.LMC(33742, JSProf.LMC(33740, JSProf.LRE(33737, options) || JSProf.LRE(33738, getPlainValue), 'getType').getType(JSProf.LRE(33739, value)), 'replace').replace(/^[a-z]/, JSProf.LNF(33741, function (c) {
                return c.toUpperCase();
            }, 12)), 1)[JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b](JSProf.LRE(33743, value));    // Anything
        }, 12);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(33749, lang, 'setObject').setObject("dojox.mvc.getPlainValue", JSProf.LMC(33748, lang, 'mixin').mixin(JSProf.LRE(33746, getPlainValue), JSProf.LRE(33747, getPlainValueOptions)));
}, 12));