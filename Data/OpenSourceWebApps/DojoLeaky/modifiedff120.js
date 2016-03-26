JSProf.LFC(41026, define, false)(JSProf.LNE(41013, [
    "./focus",
    "./_WidgetBase",
    "dojo/_base/declare",
    "dojo/_base/lang"
], 10), JSProf.LNF(41025, function (focus, _WidgetBase, declare, lang) {
    // module:
    //		dijit/_FocusMixin
    // We don't know where _FocusMixin will occur in the inheritance chain, but we need the _onFocus()/_onBlur() below
    // to be last in the inheritance chain, so mixin to _WidgetBase.
    JSProf.LMC(41022, lang, 'extend').extend(JSProf.LRE(41014, _WidgetBase), JSProf.LNE(41021, {
        focused: false,
        onFocus: JSProf.LNF(41015, function () {
        }, 12),
        onBlur: JSProf.LNF(41016, function () {
        }, 12),
        _onFocus: JSProf.LNF(41018, function () {
            // summary:
            //		This is where widgets do processing for when they are active,
            //		such as changing CSS classes.  See onFocus() for more details.
            // tags:
            //		protected
            JSProf.LMC(41017, this, 'onFocus').onFocus();
        }, 12),
        _onBlur: JSProf.LNF(41020, function () {
            // summary:
            //		This is where widgets do processing for when they stop being active,
            //		such as changing CSS classes.  See onBlur() for more details.
            // tags:
            //		protected
            JSProf.LMC(41019, this, 'onBlur').onBlur();
        }, 12)
    }, 11));
    return JSProf.LFC(41024, declare, false)("dijit._FocusMixin", null, JSProf.LNE(41023, { _focusManager: focus }, 11));
}, 12));