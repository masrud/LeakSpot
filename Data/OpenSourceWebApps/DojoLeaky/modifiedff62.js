JSProf.LFC(22509, define, false)(JSProf.LNE(22473, [
    "dojo/_base/declare",
    "dojo/dom-attr"
], 10), JSProf.LNF(22508, function (declare, domAttr) {
    // module:
    //		dijit/form/_CheckBoxMixin
    return JSProf.LFC(22507, declare, false)("dijit.form._CheckBoxMixin", null, JSProf.LNE(22506, {
        type: "checkbox",
        value: "on",
        readOnly: false,
        _aria_attr: "aria-checked",
        _setReadOnlyAttr: JSProf.LNF(22479, function (value) {
            JSProf.LMC(22475, this, '_set')._set("readOnly", JSProf.LRE(22474, value));
            JSProf.LMC(22478, domAttr, 'set').set(JSProf.LGD(22476, this, 'focusNode').focusNode, 'readOnly', JSProf.LRE(22477, value));
        }, 12),
        _setLabelAttr: undefined,
        _getSubmitValue: JSProf.LNF(22483, function (value) {
            return JSProf.LRE(22480, value) == null || JSProf.LRE(22481, value) === "" ? "on" : JSProf.LRE(22482, value);
        }, 12),
        _setValueAttr: JSProf.LNF(22492, function (newValue) {
            newValue = JSProf.LWR(22486, newValue, JSProf.LMC(22485, this, '_getSubmitValue')._getSubmitValue(JSProf.LRE(22484, newValue)));
            // "on" to match browser native behavior when value unspecified
            JSProf.LMC(22488, this, '_set')._set("value", JSProf.LRE(22487, newValue));
            JSProf.LMC(22491, domAttr, 'set').set(JSProf.LGD(22489, this, 'focusNode').focusNode, "value", JSProf.LRE(22490, newValue));
        }, 12),
        reset: JSProf.LNF(22500, function () {
            JSProf.LMC(22493, this, 'inherited').inherited(arguments);
            // Handle unlikely event that the <input type=checkbox> value attribute has changed
            JSProf.LMC(22496, this, '_set')._set("value", JSProf.LMC(22495, this, '_getSubmitValue')._getSubmitValue(JSProf.LGD(22494, this.params, 'value').value));
            JSProf.LMC(22499, domAttr, 'set').set(JSProf.LGD(22497, this, 'focusNode').focusNode, 'value', JSProf.LGD(22498, this, 'value').value);
        }, 12),
        _onClick: JSProf.LNF(22505, function (e) {
            // summary:
            //		Internal function to handle click actions - need to check
            //		readOnly, since button no longer does that check.
            if (JSProf.LGD(22501, this, 'readOnly').readOnly) {
                JSProf.LMC(22502, e, 'stopPropagation').stopPropagation();
                JSProf.LMC(22503, e, 'preventDefault').preventDefault();
                return false;
            }
            return JSProf.LMC(22504, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));