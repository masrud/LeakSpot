JSProf.LFC(32562, define, false)(JSProf.LNE(32515, [
    "dojo/_base/declare",
    "dojo/dom-attr"
], 10), JSProf.LNF(32561, function (declare, domAttr) {
    // module:
    //		dijit/form/_ToggleButtonMixin
    return JSProf.LFC(32560, declare, false)("dijit.form._ToggleButtonMixin", null, JSProf.LNE(32559, {
        checked: false,
        _aria_attr: "aria-pressed",
        _onClick: JSProf.LNF(32525, function (evt) {
            var original = JSProf.LGD(32516, this, 'checked').checked;
            JSProf.LMC(32518, this, '_set')._set('checked', !JSProf.LRE(32517, original));
            // partially set the toggled value, assuming the toggle will work, so it can be overridden in the onclick handler
            var ret = JSProf.LMC(32519, this, 'inherited').inherited(arguments);
            // the user could reset the value here
            JSProf.LMC(32523, this, 'set').set('checked', JSProf.LRE(32520, ret) ? JSProf.LGD(32521, this, 'checked').checked : JSProf.LRE(32522, original));
            // officially set the toggled or user value, or reset it back
            return JSProf.LRE(32524, ret);
        }, 12),
        _setCheckedAttr: JSProf.LNF(32544, function (value, priorityChange) {
            JSProf.LMC(32527, this, '_set')._set("checked", JSProf.LRE(32526, value));
            var node = JSProf.LGD(32528, this, 'focusNode').focusNode || JSProf.LGD(32529, this, 'domNode').domNode;
            if (JSProf.LGD(32530, this, '_created')._created) {
                // IE is not ready to handle checked attribute (affects tab order)
                // needlessly setting "checked" upsets IE's tab order
                if (JSProf.LMC(32532, domAttr, 'get').get(JSProf.LRE(32531, node), "checked") != !!JSProf.LRE(32533, value)) {
                    JSProf.LMC(32536, domAttr, 'set').set(JSProf.LRE(32534, node), "checked", !!JSProf.LRE(32535, value));    // "mixed" -> true
                }
            }
            JSProf.LMC(32540, node, 'setAttribute').setAttribute(JSProf.LGD(32537, this, '_aria_attr')._aria_attr, JSProf.LFC(32539, String, false)(JSProf.LRE(32538, value)));
            // aria values should be strings
            JSProf.LMC(32543, this, '_handleOnChange')._handleOnChange(JSProf.LRE(32541, value), JSProf.LRE(32542, priorityChange));
        }, 12),
        postCreate: JSProf.LNF(32554, function () {
            // use postCreate instead of startup so users forgetting to call startup are OK
            JSProf.LMC(32545, this, 'inherited').inherited(arguments);
            var node = JSProf.LGD(32546, this, 'focusNode').focusNode || JSProf.LGD(32547, this, 'domNode').domNode;
            if (JSProf.LGD(32548, this, 'checked').checked) {
                // need this here instead of on the template so IE8 tab order works
                JSProf.LMC(32549, node, 'setAttribute').setAttribute('checked', 'checked');
            }
            // Update our reset value if it hasn't yet been set (because this.set()
            // is only called when there *is* a value)
            if (JSProf.LGD(32550, this, '_resetValue')._resetValue === undefined) {
                JSProf.LPD(32553, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(32553, JSProf.LPD(32552, this, '_resetValue')._resetValue = JSProf.LRSP(32552, JSProf.LGD(32551, this, 'checked').checked));
            }
        }, 12),
        reset: JSProf.LNF(32558, function () {
            // summary:
            //		Reset the widget's value to what it was at initialization time
            JSProf.LPD(32555, this, '_hasBeenBlurred')._hasBeenBlurred = JSProf.LRSP(32555, false);
            // set checked state to original setting
            JSProf.LMC(32557, this, 'set').set('checked', JSProf.LGD(32556, this.params, 'checked').checked || false);
        }, 12)
    }, 11));
}, 12));