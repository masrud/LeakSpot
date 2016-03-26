JSProf.LFC(40988, define, false)(JSProf.LNE(40973, [
    "dojo/on",
    "dojo/_base/array",
    "dojo/keys",
    "dojo/_base/declare",
    "dojo/has",
    "./a11yclick"
], 10), JSProf.LNF(40987, function (on, array, keys, declare, has, a11yclick) {
    // module:
    //		dijit/_OnDijitClickMixin
    var ret = JSProf.LFC(40983, declare, false)("dijit._OnDijitClickMixin", null, JSProf.LNE(40982, {
            connect: JSProf.LNF(40981, function (obj, event, method) {
                // override _WidgetBase.connect() to make this.connect(node, "ondijitclick", ...) work
                return JSProf.LMC(40980, this, 'inherited').inherited(arguments, JSProf.LNE(40979, [
                    JSProf.LRE(40974, obj),
                    JSProf.LRE(40975, event) == "ondijitclick" ? JSProf.LRE(40976, a11yclick) : JSProf.LRE(40977, event),
                    JSProf.LRE(40978, method)
                ], 10));
            }, 12)
        }, 11));
    JSProf.LPD(40985, ret, 'a11yclick').a11yclick = JSProf.LRSP(40985, JSProf.LRE(40984, a11yclick));
    // back compat
    return JSProf.LRE(40986, ret);
}, 12));