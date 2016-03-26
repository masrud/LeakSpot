JSProf.LFC(33753, define, false)(JSProf.LNE(33710, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/Stateful"
], 10), JSProf.LNF(33752, function (array, lang, Stateful) {
    var getPlainValueOptions = JSProf.LNE(33736, {
            getType: JSProf.LNF(33717, function (v) {
                // summary:
                //		Returns the type of the given value.
                // v: Anything
                //		The value.
                // returns:
                //		 The type of the given value.
                return JSProf.LMC(33712, lang, 'isArray').isArray(JSProf.LRE(33711, v)) ? "array" : JSProf.LRE(33713, v) != null && JSProf.LMC(33716, JSProf.LNE(33714, {}, 11).toString, 'call').call(JSProf.LRE(33715, v)) == "[object Object]" ? "object" : "value";
            }, 12),
            getPlainArray: JSProf.LNF(33723, function (a) {
                // summary:
                //		Returns the stateful version of the given array.
                // a: Anything[]
                //		The array.
                // returns:
                //		 The converted array.
                return JSProf.LMC(33722, array, 'map').map(JSProf.LRE(33718, a), JSProf.LNF(33721, function (item) {
                    return JSProf.LFC(33720, getPlainValue, false)(JSProf.LRE(33719, item), this);
                }, 12), this);    // Anything[]
            }, 12),
            getPlainObject: JSProf.LNF(33733, function (o) {
                // summary:
                //		Returns the stateful version of the given object.
                // o: Object
                //		The object.
                var plain = JSProf.LNE(33724, {}, 11);
                for (var s in JSProf.LRE(33725, o)) {
                    if (!(JSProf.LRE(33726, s) in JSProf.LGD(33727, Stateful, 'prototype').prototype) && JSProf.LRE(33728, s) != "_watchCallbacks") {
                        JSProf.LPE(33731, plain, 's')[s] = JSProf.LRPE(33731, JSProf.LFC(33730, getPlainValue, false)(JSProf.LGE(33729, o, 's')[s], this));
                    }
                }
                return JSProf.LRE(33732, plain);    // Object
            }, 12),
            getPlainValue: JSProf.LNF(33735, function (v) {
                // summary:
                //		Just returns the given value.
                return JSProf.LRE(33734, v);    // Anything
            }, 12)
        }, 11);
    var getPlainValue = JSProf.LNF(33747, function (value, options) {
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
            return JSProf.LMC(33746, JSProf.LRE(33737, options) || JSProf.LRE(33738, getPlainValue), JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b = "getPlain" + JSProf.LMC(33744, JSProf.LMC(33742, JSProf.LRE(33739, options) || JSProf.LRE(33740, getPlainValue), 'getType').getType(JSProf.LRE(33741, value)), 'replace').replace(/^[a-z]/, JSProf.LNF(33743, function (c) {
                return c.toUpperCase();
            }, 12)), 1)[JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b](JSProf.LRE(33745, value));    // Anything
        }, 12);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(33751, lang, 'setObject').setObject("dojox.mvc.getPlainValue", JSProf.LMC(33750, lang, 'mixin').mixin(JSProf.LRE(33748, getPlainValue), JSProf.LRE(33749, getPlainValueOptions)));
}, 12));