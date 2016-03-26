JSProf.LFC(32745, define, false)(JSProf.LNE(32713, [
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dojo/keys",
    "dojo/_base/lang",
    "dojo/on",
    "./_FormWidgetMixin"
], 10), JSProf.LNF(32744, function (declare, domAttr, keys, lang, on, _FormWidgetMixin) {
    // module:
    //		dijit/form/_FormValueMixin
    return JSProf.LFC(32743, declare, false)("dijit.form._FormValueMixin", JSProf.LRE(32714, _FormWidgetMixin), JSProf.LNE(32742, {
        readOnly: false,
        _setReadOnlyAttr: JSProf.LNF(32720, function (value) {
            JSProf.LMC(32717, domAttr, 'set').set(JSProf.LGD(32715, this, 'focusNode').focusNode, 'readOnly', JSProf.LRE(32716, value));
            JSProf.LMC(32719, this, '_set')._set("readOnly", JSProf.LRE(32718, value));
        }, 12),
        postCreate: JSProf.LNF(32726, function () {
            JSProf.LMC(32721, this, 'inherited').inherited(arguments);
            // Update our reset value if it hasn't yet been set (because this.set()
            // is only called when there *is* a value)
            if (JSProf.LGD(32722, this, '_resetValue')._resetValue === undefined) {
                JSProf.LPD(32725, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(32725, JSProf.LPD(32724, this, '_resetValue')._resetValue = JSProf.LRSP(32724, JSProf.LGD(32723, this, 'value').value));
            }
        }, 12),
        _setValueAttr: JSProf.LNF(32730, function (newValue, priorityChange) {
            // summary:
            //		Hook so set('value', value) works.
            // description:
            //		Sets the value of the widget.
            //		If the value has changed, then fire onChange event, unless priorityChange
            //		is specified as null (or false?)
            JSProf.LMC(32729, this, '_handleOnChange')._handleOnChange(JSProf.LRE(32727, newValue), JSProf.LRE(32728, priorityChange));
        }, 12),
        _handleOnChange: JSProf.LNF(32734, function (newValue, priorityChange) {
            // summary:
            //		Called when the value of the widget has changed.  Saves the new value in this.value,
            //		and calls onChange() if appropriate.   See _FormWidget._handleOnChange() for details.
            JSProf.LMC(32732, this, '_set')._set("value", JSProf.LRE(32731, newValue));
            JSProf.LMC(32733, this, 'inherited').inherited(arguments);
        }, 12),
        undo: JSProf.LNF(32737, function () {
            // summary:
            //		Restore the value to the last value passed to onChange
            JSProf.LMC(32736, this, '_setValueAttr')._setValueAttr(JSProf.LGD(32735, this, '_lastValueReported')._lastValueReported, false);
        }, 12),
        reset: JSProf.LNF(32741, function () {
            // summary:
            //		Reset the widget's value to what it was at initialization time
            JSProf.LPD(32738, this, '_hasBeenBlurred')._hasBeenBlurred = JSProf.LRSP(32738, false);
            JSProf.LMC(32740, this, '_setValueAttr')._setValueAttr(JSProf.LGD(32739, this, '_resetValue')._resetValue, true);
        }, 12)
    }, 11));
}, 12));