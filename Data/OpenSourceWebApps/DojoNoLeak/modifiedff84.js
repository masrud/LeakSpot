JSProf.LFC(28635, define, false)(JSProf.LNE(28592, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/Stateful",
    "./StatefulArray"
], 10), JSProf.LNF(28634, function (array, lang, Stateful, StatefulArray) {
    var getStatefulOptions = JSProf.LNE(28618, {
            getType: JSProf.LNF(28599, function (v) {
                // summary:
                //		Returns the type of the given value.
                // v: Anything
                //		The value.
                return JSProf.LMC(28594, lang, 'isArray').isArray(JSProf.LRE(28593, v)) ? "array" : JSProf.LRE(28595, v) != null && JSProf.LMC(28598, JSProf.LNE(28596, {}, 11).toString, 'call').call(JSProf.LRE(28597, v)) == "[object Object]" ? "object" : "value";
            }, 12),
            getStatefulArray: JSProf.LNF(28607, function (a) {
                // summary:
                //		Returns the stateful version of the given array.
                // a: Anything[]
                //		The array.
                return JSProf.LNE(28606, new (JSProf.LFC(28605, StatefulArray, true))(JSProf.LMC(28604, array, 'map').map(JSProf.LRE(28600, a), JSProf.LNF(28603, function (item) {
                    return JSProf.LFC(28602, getStateful, false)(JSProf.LRE(28601, item), this);
                }, 12), this)), 'StatefulArray');    // dojox/mvc/StatefulArray
            }, 12),
            getStatefulObject: JSProf.LNF(28615, function (o) {
                // summary:
                //		Returns the stateful version of the given object.
                // o: Object
                //		The object.
                var stateful = JSProf.LNE(28609, new (JSProf.LFC(28608, Stateful, true))(), 'Stateful');
                for (var s in JSProf.LRE(28610, o)) {
                    JSProf.LPE(28613, stateful, 's')[s] = JSProf.LRPE(28613, JSProf.LFC(28612, getStateful, false)(JSProf.LGE(28611, o, 's')[s], this));
                }
                return JSProf.LRE(28614, stateful);    // dojo/Stateful
            }, 12),
            getStatefulValue: JSProf.LNF(28617, function (v) {
                // summary:
                //		Just returns the given value.
                return JSProf.LRE(28616, v);    // Anything
            }, 12)
        }, 11);
    var getStateful = JSProf.LNF(28629, function (value, options) {
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
            return JSProf.LMC(28628, JSProf.LRE(28619, options) || JSProf.LRE(28620, getStateful), JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b = "getStateful" + JSProf.LMC(28626, JSProf.LMC(28624, JSProf.LRE(28621, options) || JSProf.LRE(28622, getStateful), 'getType').getType(JSProf.LRE(28623, value)), 'replace').replace(/^[a-z]/, JSProf.LNF(28625, function (c) {
                return c.toUpperCase();
            }, 12)), 1)[JSProf.TMPS.t66891e4419bc6e42a2109124ef9c6b91e036339b](JSProf.LRE(28627, value));    // Anything
        }, 12);
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(28633, lang, 'setObject').setObject("dojox.mvc.getStateful", JSProf.LMC(28632, lang, 'mixin').mixin(JSProf.LRE(28630, getStateful), JSProf.LRE(28631, getStatefulOptions)));
}, 12));