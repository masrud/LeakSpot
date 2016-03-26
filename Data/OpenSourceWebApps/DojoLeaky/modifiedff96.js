JSProf.LFC(32743, define, false)(JSProf.LNE(32711, [
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dojo/keys",
    "dojo/_base/lang",
    "dojo/on",
    "./_FormWidgetMixin"
], 10), JSProf.LNF(32742, function (declare, domAttr, keys, lang, on, _FormWidgetMixin) {
    // module:
    //		dijit/form/_FormValueMixin
    return JSProf.LFC(32741, declare, false)("dijit.form._FormValueMixin", JSProf.LRE(32712, _FormWidgetMixin), JSProf.LNE(32740, {
        readOnly: false,
        _setReadOnlyAttr: JSProf.LNF(32718, function (value) {
            JSProf.LMC(32715, domAttr, 'set').set(JSProf.LGD(32713, this, 'focusNode').focusNode, 'readOnly', JSProf.LRE(32714, value));
            JSProf.LMC(32717, this, '_set')._set("readOnly", JSProf.LRE(32716, value));
        }, 12),
        postCreate: JSProf.LNF(32724, function () {
            JSProf.LMC(32719, this, 'inherited').inherited(arguments);
            // Update our reset value if it hasn't yet been set (because this.set()
            // is only called when there *is* a value)
            if (JSProf.LGD(32720, this, '_resetValue')._resetValue === undefined) {
                JSProf.LPD(32723, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(32723, JSProf.LPD(32722, this, '_resetValue')._resetValue = JSProf.LRSP(32722, JSProf.LGD(32721, this, 'value').value));
            }
        }, 12),
        _setValueAttr: JSProf.LNF(32728, function (newValue, priorityChange) {
            // summary:
            //		Hook so set('value', value) works.
            // description:
            //		Sets the value of the widget.
            //		If the value has changed, then fire onChange event, unless priorityChange
            //		is specified as null (or false?)
            JSProf.LMC(32727, this, '_handleOnChange')._handleOnChange(JSProf.LRE(32725, newValue), JSProf.LRE(32726, priorityChange));
        }, 12),
        _handleOnChange: JSProf.LNF(32732, function (newValue, priorityChange) {
            // summary:
            //		Called when the value of the widget has changed.  Saves the new value in this.value,
            //		and calls onChange() if appropriate.   See _FormWidget._handleOnChange() for details.
            JSProf.LMC(32730, this, '_set')._set("value", JSProf.LRE(32729, newValue));
            JSProf.LMC(32731, this, 'inherited').inherited(arguments);
        }, 12),
        undo: JSProf.LNF(32735, function () {
            // summary:
            //		Restore the value to the last value passed to onChange
            JSProf.LMC(32734, this, '_setValueAttr')._setValueAttr(JSProf.LGD(32733, this, '_lastValueReported')._lastValueReported, false);
        }, 12),
        reset: JSProf.LNF(32739, function () {
            // summary:
            //		Reset the widget's value to what it was at initialization time
            JSProf.LPD(32736, this, '_hasBeenBlurred')._hasBeenBlurred = JSProf.LRSP(32736, false);
            JSProf.LMC(32738, this, '_setValueAttr')._setValueAttr(JSProf.LGD(32737, this, '_resetValue')._resetValue, true);
        }, 12)
    }, 11));
}, 12));