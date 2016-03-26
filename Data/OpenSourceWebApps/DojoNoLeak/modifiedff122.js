JSProf.LFC(42201, define, false)(JSProf.LNE(42188, [
    "./focus",
    "./_WidgetBase",
    "dojo/_base/declare",
    "dojo/_base/lang"
], 10), JSProf.LNF(42200, function (focus, _WidgetBase, declare, lang) {
    // module:
    //		dijit/_FocusMixin
    // We don't know where _FocusMixin will occur in the inheritance chain, but we need the _onFocus()/_onBlur() below
    // to be last in the inheritance chain, so mixin to _WidgetBase.
    JSProf.LMC(42197, lang, 'extend').extend(JSProf.LRE(42189, _WidgetBase), JSProf.LNE(42196, {
        focused: false,
        onFocus: JSProf.LNF(42190, function () {
        }, 12),
        onBlur: JSProf.LNF(42191, function () {
        }, 12),
        _onFocus: JSProf.LNF(42193, function () {
            // summary:
            //		This is where widgets do processing for when they are active,
            //		such as changing CSS classes.  See onFocus() for more details.
            // tags:
            //		protected
            JSProf.LMC(42192, this, 'onFocus').onFocus();
        }, 12),
        _onBlur: JSProf.LNF(42195, function () {
            // summary:
            //		This is where widgets do processing for when they stop being active,
            //		such as changing CSS classes.  See onBlur() for more details.
            // tags:
            //		protected
            JSProf.LMC(42194, this, 'onBlur').onBlur();
        }, 12)
    }, 11));
    return JSProf.LFC(42199, declare, false)("dijit._FocusMixin", null, JSProf.LNE(42198, { _focusManager: focus }, 11));
}, 12));