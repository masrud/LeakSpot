JSProf.LFC(32662, define, false)(JSProf.LNE(32625, [
    "dojo/_base/declare",
    "dojo/sniff",
    "dojo/_base/kernel",
    "dojo/ready",
    "../_Widget",
    "../_CssStateMixin",
    "../_TemplatedMixin",
    "./_FormWidgetMixin"
], 10), JSProf.LNF(32661, function (declare, has, kernel, ready, _Widget, _CssStateMixin, _TemplatedMixin, _FormWidgetMixin) {
    // module:
    //		dijit/form/_FormWidget
    // Back compat w/1.6, remove for 2.0
    if (JSProf.LFC(32626, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(32631, ready, false)(0, JSProf.LNF(32630, function () {
            var requires = JSProf.LNE(32627, ["dijit/form/_FormValueWidget"], 10);
            JSProf.LFC(32629, require, false)(JSProf.LRE(32628, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    return JSProf.LFC(32660, declare, false)("dijit.form._FormWidget", JSProf.LNE(32636, [
        JSProf.LRE(32632, _Widget),
        JSProf.LRE(32633, _TemplatedMixin),
        JSProf.LRE(32634, _CssStateMixin),
        JSProf.LRE(32635, _FormWidgetMixin)
    ], 10), JSProf.LNE(32659, {
        setDisabled: JSProf.LNF(32642, function (disabled) {
            // summary:
            //		Deprecated.  Use set('disabled', ...) instead.
            JSProf.LMC(32639, kernel, 'deprecated').deprecated("setDisabled(" + JSProf.LRE(32637, disabled) + ") is deprecated. Use set('disabled'," + JSProf.LRE(32638, disabled) + ") instead.", "", "2.0");
            JSProf.LMC(32641, this, 'set').set('disabled', JSProf.LRE(32640, disabled));
        }, 12),
        setValue: JSProf.LNF(32648, function (value) {
            // summary:
            //		Deprecated.  Use set('value', ...) instead.
            JSProf.LMC(32645, kernel, 'deprecated').deprecated("dijit.form._FormWidget:setValue(" + JSProf.LRE(32643, value) + ") is deprecated.  Use set('value'," + JSProf.LRE(32644, value) + ") instead.", "", "2.0");
            JSProf.LMC(32647, this, 'set').set('value', JSProf.LRE(32646, value));
        }, 12),
        getValue: JSProf.LNF(32652, function () {
            // summary:
            //		Deprecated.  Use get('value') instead.
            JSProf.LMC(32650, kernel, 'deprecated').deprecated(JSProf.LGD(32649, this, 'declaredClass').declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
            return JSProf.LMC(32651, this, 'get').get('value');
        }, 12),
        postMixInProperties: JSProf.LNF(32658, function () {
            // Setup name=foo string to be referenced from the template (but only if a name has been specified).
            // Unfortunately we can't use _setNameAttr to set the name in IE due to IE limitations, see #8484, #8660.
            // But when IE6 and IE7 are desupported, then we probably don't need this anymore, so should remove it in 2.0.
            // Also, don't do this for Windows 8 Store Apps because it causes a security exception (see #16452).
            // Regarding escaping, see heading "Attribute values" in
            // http://www.w3.org/TR/REC-html40/appendix/notes.html#h-B.3.2
            JSProf.LPD(32656, this, 'nameAttrSetting').nameAttrSetting = JSProf.LRSP(32656, JSProf.LGD(32653, this, 'name').name && !JSProf.LFC(32654, has, false)("msapp") ? 'name="' + JSProf.LMC(32655, this.name, 'replace').replace(/"/g, "&quot;") + '"' : '');
            JSProf.LMC(32657, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));