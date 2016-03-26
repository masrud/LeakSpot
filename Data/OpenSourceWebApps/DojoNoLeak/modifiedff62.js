JSProf.LFC(22511, define, false)(JSProf.LNE(22475, [
    "dojo/_base/declare",
    "dojo/dom-attr"
], 10), JSProf.LNF(22510, function (declare, domAttr) {
    // module:
    //		dijit/form/_CheckBoxMixin
    return JSProf.LFC(22509, declare, false)("dijit.form._CheckBoxMixin", null, JSProf.LNE(22508, {
        type: "checkbox",
        value: "on",
        readOnly: false,
        _aria_attr: "aria-checked",
        _setReadOnlyAttr: JSProf.LNF(22481, function (value) {
            JSProf.LMC(22477, this, '_set')._set("readOnly", JSProf.LRE(22476, value));
            JSProf.LMC(22480, domAttr, 'set').set(JSProf.LGD(22478, this, 'focusNode').focusNode, 'readOnly', JSProf.LRE(22479, value));
        }, 12),
        _setLabelAttr: undefined,
        _getSubmitValue: JSProf.LNF(22485, function (value) {
            return JSProf.LRE(22482, value) == null || JSProf.LRE(22483, value) === "" ? "on" : JSProf.LRE(22484, value);
        }, 12),
        _setValueAttr: JSProf.LNF(22494, function (newValue) {
            newValue = JSProf.LWR(22488, newValue, JSProf.LMC(22487, this, '_getSubmitValue')._getSubmitValue(JSProf.LRE(22486, newValue)));
            // "on" to match browser native behavior when value unspecified
            JSProf.LMC(22490, this, '_set')._set("value", JSProf.LRE(22489, newValue));
            JSProf.LMC(22493, domAttr, 'set').set(JSProf.LGD(22491, this, 'focusNode').focusNode, "value", JSProf.LRE(22492, newValue));
        }, 12),
        reset: JSProf.LNF(22502, function () {
            JSProf.LMC(22495, this, 'inherited').inherited(arguments);
            // Handle unlikely event that the <input type=checkbox> value attribute has changed
            JSProf.LMC(22498, this, '_set')._set("value", JSProf.LMC(22497, this, '_getSubmitValue')._getSubmitValue(JSProf.LGD(22496, this.params, 'value').value));
            JSProf.LMC(22501, domAttr, 'set').set(JSProf.LGD(22499, this, 'focusNode').focusNode, 'value', JSProf.LGD(22500, this, 'value').value);
        }, 12),
        _onClick: JSProf.LNF(22507, function (e) {
            // summary:
            //		Internal function to handle click actions - need to check
            //		readOnly, since button no longer does that check.
            if (JSProf.LGD(22503, this, 'readOnly').readOnly) {
                JSProf.LMC(22504, e, 'stopPropagation').stopPropagation();
                JSProf.LMC(22505, e, 'preventDefault').preventDefault();
                return false;
            }
            return JSProf.LMC(22506, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));