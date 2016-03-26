JSProf.LFC(22457, define, false)(JSProf.LNE(22444, [
    "dojo/_base/declare",
    "dojo/_base/kernel",
    "./Button",
    "./_ToggleButtonMixin"
], 10), JSProf.LNF(22456, function (declare, kernel, Button, _ToggleButtonMixin) {
    // module:
    //		dijit/form/ToggleButton
    return JSProf.LFC(22455, declare, false)("dijit.form.ToggleButton", JSProf.LNE(22447, [
        JSProf.LRE(22445, Button),
        JSProf.LRE(22446, _ToggleButtonMixin)
    ], 10), JSProf.LNE(22454, {
        baseClass: "dijitToggleButton",
        setChecked: JSProf.LNF(22453, function (checked) {
            // summary:
            //		Deprecated.  Use set('checked', true/false) instead.
            JSProf.LMC(22450, kernel, 'deprecated').deprecated("setChecked(" + JSProf.LRE(22448, checked) + ") is deprecated. Use set('checked'," + JSProf.LRE(22449, checked) + ") instead.", "", "2.0");
            JSProf.LMC(22452, this, 'set').set('checked', JSProf.LRE(22451, checked));
        }, 12)
    }, 11));
}, 12));