JSProf.LFC(18308, define, false)(JSProf.LNE(18268, [
    "require",
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dojo/has",
    "dojo/query",
    "dojo/ready",
    "./ToggleButton",
    "./_CheckBoxMixin",
    "dojo/text!./templates/CheckBox.html",
    "dojo/NodeList-dom",
    "../a11yclick"
], 10), JSProf.LNF(18307, function (require, declare, domAttr, has, query, ready, ToggleButton, _CheckBoxMixin, template) {
    // module:
    //		dijit/form/CheckBox
    // Back compat w/1.6, remove for 2.0
    if (JSProf.LFC(18269, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(18274, ready, false)(0, JSProf.LNF(18273, function () {
            var requires = JSProf.LNE(18270, ["dijit/form/RadioButton"], 10);
            JSProf.LFC(18272, require, false)(JSProf.LRE(18271, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    return JSProf.LFC(18306, declare, false)("dijit.form.CheckBox", JSProf.LNE(18277, [
        JSProf.LRE(18275, ToggleButton),
        JSProf.LRE(18276, _CheckBoxMixin)
    ], 10), JSProf.LNE(18305, {
        templateString: template,
        baseClass: "dijitCheckBox",
        _setValueAttr: JSProf.LNF(18285, function (newValue, priorityChange) {
            // summary:
            //		Handler for value= attribute to constructor, and also calls to
            //		set('value', val).
            // description:
            //		During initialization, just saves as attribute to the `<input type=checkbox>`.
            //
            //		After initialization,
            //		when passed a boolean, controls whether or not the CheckBox is checked.
            //		If passed a string, changes the value attribute of the CheckBox (the one
            //		specified as "value" when the CheckBox was constructed
            //		(ex: `<input data-dojo-type="dijit/CheckBox" value="chicken">`).
            //
            //		`widget.set('value', string)` will check the checkbox and change the value to the
            //		specified string.
            //
            //		`widget.set('value', boolean)` will change the checked state.
            if (typeof JSProf.LRE(18278, newValue) == "string") {
                JSProf.LMC(18279, this, 'inherited').inherited(arguments);
                newValue = JSProf.LWR(18280, newValue, true);
            }
            if (JSProf.LGD(18281, this, '_created')._created) {
                JSProf.LMC(18284, this, 'set').set('checked', JSProf.LRE(18282, newValue), JSProf.LRE(18283, priorityChange));
            }
        }, 12),
        _getValueAttr: JSProf.LNF(18288, function () {
            // summary:
            //		Hook so get('value') works.
            // description:
            //		If the CheckBox is checked, returns the value attribute.
            //		Otherwise returns false.
            return JSProf.LGD(18286, this, 'checked').checked && JSProf.LMC(18287, this, '_get')._get("value");
        }, 12),
        _setIconClassAttr: null,
        _setNameAttr: "focusNode",
        postMixInProperties: JSProf.LNF(18291, function () {
            JSProf.LMC(18289, this, 'inherited').inherited(arguments);
            // Need to set initial checked state via node.setAttribute so that form submit works
            // and IE8 radio button tab order is preserved.
            // domAttr.set(node, "checked", bool) doesn't work on IE until node has been attached
            // to <body>, see #8666
            JSProf.LPD(18290, this, 'checkedAttrSetting').checkedAttrSetting = JSProf.LRSP(18290, "");
        }, 12),
        _fillContent: JSProf.LNF(18292, function () {
        }, 12),
        _onFocus: JSProf.LNF(18298, function () {
            if (JSProf.LGD(18293, this, 'id').id) {
                JSProf.LMC(18296, JSProf.LFC(18295, query, false)("label[for='" + JSProf.LGD(18294, this, 'id').id + "']"), 'addClass').addClass("dijitFocusedLabel");
            }
            JSProf.LMC(18297, this, 'inherited').inherited(arguments);
        }, 12),
        _onBlur: JSProf.LNF(18304, function () {
            if (JSProf.LGD(18299, this, 'id').id) {
                JSProf.LMC(18302, JSProf.LFC(18301, query, false)("label[for='" + JSProf.LGD(18300, this, 'id').id + "']"), 'removeClass').removeClass("dijitFocusedLabel");
            }
            JSProf.LMC(18303, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));