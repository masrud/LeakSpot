JSProf.LFC(32096, define, false)(JSProf.LNE(32049, [
    "dojo/_base/declare",
    "dojo/dom-attr"
], 10), JSProf.LNF(32095, function (declare, domAttr) {
    // module:
    //		dijit/form/_ToggleButtonMixin
    return JSProf.LFC(32094, declare, false)("dijit.form._ToggleButtonMixin", null, JSProf.LNE(32093, {
        checked: false,
        _aria_attr: "aria-pressed",
        _onClick: JSProf.LNF(32059, function (evt) {
            var original = JSProf.LGD(32050, this, 'checked').checked;
            JSProf.LMC(32052, this, '_set')._set('checked', !JSProf.LRE(32051, original));
            // partially set the toggled value, assuming the toggle will work, so it can be overridden in the onclick handler
            var ret = JSProf.LMC(32053, this, 'inherited').inherited(arguments);
            // the user could reset the value here
            JSProf.LMC(32057, this, 'set').set('checked', JSProf.LRE(32054, ret) ? JSProf.LGD(32055, this, 'checked').checked : JSProf.LRE(32056, original));
            // officially set the toggled or user value, or reset it back
            return JSProf.LRE(32058, ret);
        }, 12),
        _setCheckedAttr: JSProf.LNF(32078, function (value, priorityChange) {
            JSProf.LMC(32061, this, '_set')._set("checked", JSProf.LRE(32060, value));
            var node = JSProf.LGD(32062, this, 'focusNode').focusNode || JSProf.LGD(32063, this, 'domNode').domNode;
            if (JSProf.LGD(32064, this, '_created')._created) {
                // IE is not ready to handle checked attribute (affects tab order)
                // needlessly setting "checked" upsets IE's tab order
                if (JSProf.LMC(32066, domAttr, 'get').get(JSProf.LRE(32065, node), "checked") != !!JSProf.LRE(32067, value)) {
                    JSProf.LMC(32070, domAttr, 'set').set(JSProf.LRE(32068, node), "checked", !!JSProf.LRE(32069, value));    // "mixed" -> true
                }
            }
            JSProf.LMC(32074, node, 'setAttribute').setAttribute(JSProf.LGD(32071, this, '_aria_attr')._aria_attr, JSProf.LFC(32073, String, false)(JSProf.LRE(32072, value)));
            // aria values should be strings
            JSProf.LMC(32077, this, '_handleOnChange')._handleOnChange(JSProf.LRE(32075, value), JSProf.LRE(32076, priorityChange));
        }, 12),
        postCreate: JSProf.LNF(32088, function () {
            // use postCreate instead of startup so users forgetting to call startup are OK
            JSProf.LMC(32079, this, 'inherited').inherited(arguments);
            var node = JSProf.LGD(32080, this, 'focusNode').focusNode || JSProf.LGD(32081, this, 'domNode').domNode;
            if (JSProf.LGD(32082, this, 'checked').checked) {
                // need this here instead of on the template so IE8 tab order works
                JSProf.LMC(32083, node, 'setAttribute').setAttribute('checked', 'checked');
            }
            // Update our reset value if it hasn't yet been set (because this.set()
            // is only called when there *is* a value)
            if (JSProf.LGD(32084, this, '_resetValue')._resetValue === undefined) {
                JSProf.LPD(32087, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(32087, JSProf.LPD(32086, this, '_resetValue')._resetValue = JSProf.LRSP(32086, JSProf.LGD(32085, this, 'checked').checked));
            }
        }, 12),
        reset: JSProf.LNF(32092, function () {
            // summary:
            //		Reset the widget's value to what it was at initialization time
            JSProf.LPD(32089, this, '_hasBeenBlurred')._hasBeenBlurred = JSProf.LRSP(32089, false);
            // set checked state to original setting
            JSProf.LMC(32091, this, 'set').set('checked', JSProf.LGD(32090, this.params, 'checked').checked || false);
        }, 12)
    }, 11));
}, 12));