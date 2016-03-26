JSProf.LFC(42163, define, false)(JSProf.LNE(42148, [
    "dojo/on",
    "dojo/_base/array",
    "dojo/keys",
    "dojo/_base/declare",
    "dojo/has",
    "./a11yclick"
], 10), JSProf.LNF(42162, function (on, array, keys, declare, has, a11yclick) {
    // module:
    //		dijit/_OnDijitClickMixin
    var ret = JSProf.LFC(42158, declare, false)("dijit._OnDijitClickMixin", null, JSProf.LNE(42157, {
            connect: JSProf.LNF(42156, function (obj, event, method) {
                // override _WidgetBase.connect() to make this.connect(node, "ondijitclick", ...) work
                return JSProf.LMC(42155, this, 'inherited').inherited(arguments, JSProf.LNE(42154, [
                    JSProf.LRE(42149, obj),
                    JSProf.LRE(42150, event) == "ondijitclick" ? JSProf.LRE(42151, a11yclick) : JSProf.LRE(42152, event),
                    JSProf.LRE(42153, method)
                ], 10));
            }, 12)
        }, 11));
    JSProf.LPD(42160, ret, 'a11yclick').a11yclick = JSProf.LRSP(42160, JSProf.LRE(42159, a11yclick));
    // back compat
    return JSProf.LRE(42161, ret);
}, 12));