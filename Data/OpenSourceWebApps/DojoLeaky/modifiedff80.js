JSProf.LFC(27368, define, false)(JSProf.LNE(27325, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/Stateful",
    "./StatefulArray"
], 10), JSProf.LNF(27367, function (array, lang, Stateful, StatefulArray) {
    var getStatefulOptions = JSProf.LNE(27351, {
            getType: JSProf.LNF(27332, function (v) {
                // summary:
                //		Returns the type of the given value.
                // v: Anything
                //		The value.
                return JSProf.LMC(27327, lang, 'isArray').isArray(JSProf.LRE(27326, v)) ? "array" : JSProf.LRE(27328, v) != null && JSProf.LMC(27331, JSProf.LNE(27329, {}, 11).toString, 'call').call(JSProf.LRE(27330, v)) == "[object Object]" ? "object" : "value";
            }, 12),
            getStatefulArray: JSProf.LNF(27340, function (a) {
                // summary:
                //		Returns the stateful version of the given array.
                // a: Anything[]
                //		The array.
                return JSProf.LNE(27339, new (JSProf.LFC(27338, StatefulArray, true))(JSProf.LMC(27337, array, 'map').map(JSProf.LRE(27333, a), JSProf.LNF(27336, function (item) {
                    return JSProf.LFC(27335, getStateful, false)(JSProf.LRE(27334, item), this);
                }, 12), this)), 'StatefulArray');    // dojox/mvc/StatefulArray
            }, 12),
            getStatefulObject: JSProf.LNF(27348, function (o) {
                // summary:
                //		Returns the stateful version of the given object.
                // o: Object
                //		The object.
                var stateful = JSProf.LNE(27342, new (JSProf.LFC(27341, Stateful, true))(), 'Stateful');
                for (var s in JSProf.LRE(27343, o)) {
                    JSProf.LPE(27346, stateful, 's')[s] = JSProf.LRPE(27346, JSProf.LFC(27345, getStateful, false)(JSProf.LGE(27344, o, 's')[s], this));
                }
                return JSProf.LRE(27347, stateful);    // dojo/Stateful
            }, 12),
            getStatefulValue: JSProf.LNF(27350, function (v) {
                // summary:
                //		Just returns the given value.
                return JSProf.LRE(27349, v);    // Anything
            }, 12)
        }, 11);
    var getStateful = JSProf.LNF(27362, function (value, options) {
            // summary:
            //		Create a dojo/Stateful object from a raw value.
            // description:
            //		Recursively iterates the raw value given, and convert them to stateful ones.
            // value: Anything
            //		The raw value.
            // options: dojox/mvc/getStatefulOptions
            //		The object that defines how model object should be created from plain object hierarchy.
            // returns: Anything
            //		 The converted value.
            return JSProf.LMC(27361, JSProf.LRE(27352, options) || JSProf.LRE(27353, getStateful), JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b = "getStateful" + JSProf.LMC(27359, JSProf.LMC(27357, JSProf.LRE(27354, options) || JSProf.LRE(27355, getStateful), 'getType').getType(JSProf.LRE(27356, value)), 'replace').replace(/^[a-z]/, JSProf.LNF(27358, function (c) {
                return c.toUpperCase();
            }, 12)), 1)[JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b](JSProf.LRE(27360, value));    // Anything
        }, 12);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(27366, lang, 'setObject').setObject("dojox.mvc.getStateful", JSProf.LMC(27365, lang, 'mixin').mixin(JSProf.LRE(27363, getStateful), JSProf.LRE(27364, getStatefulOptions)));
}, 12));