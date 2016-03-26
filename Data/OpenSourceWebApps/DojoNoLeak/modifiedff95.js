JSProf.LFC(32664, define, false)(JSProf.LNE(32627, [
    "dojo/_base/declare",
    "dojo/sniff",
    "dojo/_base/kernel",
    "dojo/ready",
    "../_Widget",
    "../_CssStateMixin",
    "../_TemplatedMixin",
    "./_FormWidgetMixin"
], 10), JSProf.LNF(32663, function (declare, has, kernel, ready, _Widget, _CssStateMixin, _TemplatedMixin, _FormWidgetMixin) {
    // module:
    //		dijit/form/_FormWidget
    // Back compat w/1.6, remove for 2.0
    if (JSProf.LFC(32628, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(32633, ready, false)(0, JSProf.LNF(32632, function () {
            var requires = JSProf.LNE(32629, ["dijit/form/_FormValueWidget"], 10);
            JSProf.LFC(32631, require, false)(JSProf.LRE(32630, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    return JSProf.LFC(32662, declare, false)("dijit.form._FormWidget", JSProf.LNE(32638, [
        JSProf.LRE(32634, _Widget),
        JSProf.LRE(32635, _TemplatedMixin),
        JSProf.LRE(32636, _CssStateMixin),
        JSProf.LRE(32637, _FormWidgetMixin)
    ], 10), JSProf.LNE(32661, {
        setDisabled: JSProf.LNF(32644, function (disabled) {
            // summary:
            //		Deprecated.  Use set('disabled', ...) instead.
            JSProf.LMC(32641, kernel, 'deprecated').deprecated("setDisabled(" + JSProf.LRE(32639, disabled) + ") is deprecated. Use set('disabled'," + JSProf.LRE(32640, disabled) + ") instead.", "", "2.0");
            JSProf.LMC(32643, this, 'set').set('disabled', JSProf.LRE(32642, disabled));
        }, 12),
        setValue: JSProf.LNF(32650, function (value) {
            // summary:
            //		Deprecated.  Use set('value', ...) instead.
            JSProf.LMC(32647, kernel, 'deprecated').deprecated("dijit.form._FormWidget:setValue(" + JSProf.LRE(32645, value) + ") is deprecated.  Use set('value'," + JSProf.LRE(32646, value) + ") instead.", "", "2.0");
            JSProf.LMC(32649, this, 'set').set('value', JSProf.LRE(32648, value));
        }, 12),
        getValue: JSProf.LNF(32654, function () {
            // summary:
            //		Deprecated.  Use get('value') instead.
            JSProf.LMC(32652, kernel, 'deprecated').deprecated(JSProf.LGD(32651, this, 'declaredClass').declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
            return JSProf.LMC(32653, this, 'get').get('value');
        }, 12),
        postMixInProperties: JSProf.LNF(32660, function () {
            // Setup name=foo string to be referenced from the template (but only if a name has been specified).
            // Unfortunately we can't use _setNameAttr to set the name in IE due to IE limitations, see #8484, #8660.
            // But when IE6 and IE7 are desupported, then we probably don't need this anymore, so should remove it in 2.0.
            // Also, don't do this for Windows 8 Store Apps because it causes a security exception (see #16452).
            // Regarding escaping, see heading "Attribute values" in
            // http://www.w3.org/TR/REC-html40/appendix/notes.html#h-B.3.2
            JSProf.LPD(32658, this, 'nameAttrSetting').nameAttrSetting = JSProf.LRSP(32658, JSProf.LGD(32655, this, 'name').name && !JSProf.LFC(32656, has, false)("msapp") ? 'name="' + JSProf.LMC(32657, this.name, 'replace').replace(/"/g, "&quot;") + '"' : '');
            JSProf.LMC(32659, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));