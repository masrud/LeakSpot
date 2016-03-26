JSProf.LFC(22147, define, false)(JSProf.LNE(22134, [
    "dojo/_base/declare",
    "dojo/_base/kernel",
    "./Button",
    "./_ToggleButtonMixin"
], 10), JSProf.LNF(22146, function (declare, kernel, Button, _ToggleButtonMixin) {
    // module:
    //		dijit/form/ToggleButton
    return JSProf.LFC(22145, declare, false)("dijit.form.ToggleButton", JSProf.LNE(22137, [
        JSProf.LRE(22135, Button),
        JSProf.LRE(22136, _ToggleButtonMixin)
    ], 10), JSProf.LNE(22144, {
        baseClass: "dijitToggleButton",
        setChecked: JSProf.LNF(22143, function (checked) {
            // summary:
            //		Deprecated.  Use set('checked', true/false) instead.
            JSProf.LMC(22140, kernel, 'deprecated').deprecated("setChecked(" + JSProf.LRE(22138, checked) + ") is deprecated. Use set('checked'," + JSProf.LRE(22139, checked) + ") instead.", "", "2.0");
            JSProf.LMC(22142, this, 'set').set('checked', JSProf.LRE(22141, checked));
        }, 12)
    }, 11));
}, 12));