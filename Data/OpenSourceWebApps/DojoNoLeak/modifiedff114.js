JSProf.LFC(38836, define, false)(JSProf.LNE(38705, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dojo/dom-style",
    "dojo/_base/lang",
    "dojo/mouse",
    "dojo/on",
    "dojo/sniff",
    "dojo/window",
    "../a11y"
], 10), JSProf.LNF(38835, function (array, declare, domAttr, domStyle, lang, mouse, on, has, winUtils, a11y) {
    // module:
    //		dijit/form/_FormWidgetMixin
    return JSProf.LFC(38834, declare, false)("dijit.form._FormWidgetMixin", null, JSProf.LNE(38833, {
        name: "",
        alt: "",
        value: "",
        type: "text",
        "aria-label": "focusNode",
        tabIndex: "0",
        _setTabIndexAttr: "focusNode",
        disabled: false,
        intermediateChanges: false,
        scrollOnFocus: true,
        _setIdAttr: "focusNode",
        _setDisabledAttr: JSProf.LNF(38739, function (value) {
            JSProf.LMC(38707, this, '_set')._set("disabled", JSProf.LRE(38706, value));
            JSProf.LMC(38710, domAttr, 'set').set(JSProf.LGD(38708, this, 'focusNode').focusNode, 'disabled', JSProf.LRE(38709, value));
            if (JSProf.LGD(38711, this, 'valueNode').valueNode) {
                JSProf.LMC(38714, domAttr, 'set').set(JSProf.LGD(38712, this, 'valueNode').valueNode, 'disabled', JSProf.LRE(38713, value));
            }
            JSProf.LMC(38716, this.focusNode, 'setAttribute').setAttribute("aria-disabled", JSProf.LRE(38715, value) ? "true" : "false");
            if (JSProf.LRE(38717, value)) {
                // reset these, because after the domNode is disabled, we can no longer receive
                // mouse related events, see #4200
                JSProf.LMC(38718, this, '_set')._set("hovering", false);
                JSProf.LMC(38719, this, '_set')._set("active", false);
                // clear tab stop(s) on this widget's focusable node(s)  (ComboBox has two focusable nodes)
                var attachPointNames = "tabIndex" in JSProf.LGD(38720, this, 'attributeMap').attributeMap ? JSProf.LGD(38721, this.attributeMap, 'tabIndex').tabIndex : "_setTabIndexAttr" in this ? JSProf.LGD(38722, this, '_setTabIndexAttr')._setTabIndexAttr : "focusNode";
                JSProf.LMC(38735, array, 'forEach').forEach(JSProf.LMC(38724, lang, 'isArray').isArray(JSProf.LRE(38723, attachPointNames)) ? JSProf.LRE(38725, attachPointNames) : JSProf.LNE(38727, [JSProf.LRE(38726, attachPointNames)], 10), JSProf.LNF(38734, function (attachPointName) {
                    var node = JSProf.LGE(38728, this, 'attachPointName')[attachPointName];
                    // complex code because tabIndex=-1 on a <div> doesn't work on FF
                    if (JSProf.LFC(38729, has, false)("webkit") || JSProf.LMC(38731, a11y, 'hasDefaultTabStop').hasDefaultTabStop(JSProf.LRE(38730, node))) {
                        // see #11064 about webkit bug
                        JSProf.LMC(38732, node, 'setAttribute').setAttribute('tabIndex', "-1");
                    } else {
                        JSProf.LMC(38733, node, 'removeAttribute').removeAttribute('tabIndex');
                    }
                }, 12), this);
            } else {
                if (JSProf.LGD(38736, this, 'tabIndex').tabIndex != "") {
                    JSProf.LMC(38738, this, 'set').set('tabIndex', JSProf.LGD(38737, this, 'tabIndex').tabIndex);
                }
            }
        }, 12),
        _onFocus: JSProf.LNF(38771, function (by) {
            // If user clicks on the widget, even if the mouse is released outside of it,
            // this widget's focusNode should get focus (to mimic native browser behavior).
            // Browsers often need help to make sure the focus via mouse actually gets to the focusNode.
            // TODO: consider removing all of this for 2.0 or sooner, see #16622 etc.
            if (JSProf.LRE(38740, by) == "mouse" && JSProf.LMC(38741, this, 'isFocusable').isFocusable()) {
                // IE exhibits strange scrolling behavior when refocusing a node so only do it when !focused.
                var focusHandle = JSProf.LGE(38748, JSProf.LMC(38747, this, 'own').own(JSProf.LFC(38746, on, false)(JSProf.LGD(38742, this, 'focusNode').focusNode, "focus", JSProf.LNF(38745, function () {
                        JSProf.LMC(38743, mouseUpHandle, 'remove').remove();
                        JSProf.LMC(38744, focusHandle, 'remove').remove();
                    }, 12))), 0)[0];
                // Set a global event to handle mouseup, so it fires properly
                // even if the cursor leaves this.domNode before the mouse up event.
                var event = JSProf.LFC(38749, has, false)("pointer-events") ? "pointerup" : JSProf.LFC(38750, has, false)("MSPointer") ? "MSPointerUp" : JSProf.LFC(38751, has, false)("touch-events") ? "touchend, mouseup" : "mouseup";
                var mouseUpHandle = JSProf.LGE(38764, JSProf.LMC(38763, this, 'own').own(JSProf.LFC(38762, on, false)(JSProf.LGD(38752, this, 'ownerDocumentBody').ownerDocumentBody, JSProf.LRE(38753, event), JSProf.LMC(38761, lang, 'hitch').hitch(this, JSProf.LNF(38760, function (evt) {
                        JSProf.LMC(38754, mouseUpHandle, 'remove').remove();
                        JSProf.LMC(38755, focusHandle, 'remove').remove();
                        // if here, then the mousedown did not focus the focusNode as the default action
                        if (JSProf.LGD(38756, this, 'focused').focused) {
                            if (JSProf.LGD(38757, evt, 'type').type == "touchend") {
                                JSProf.LMC(38758, this, 'defer').defer("focus");    // native focus hasn't occurred yet
                            } else {
                                JSProf.LMC(38759, this, 'focus').focus();    // native focus already occurred on mousedown
                            }
                        }
                    }, 12)))), 0)[0];
            }
            if (JSProf.LGD(38765, this, 'scrollOnFocus').scrollOnFocus) {
                JSProf.LMC(38769, this, 'defer').defer(JSProf.LNF(38768, function () {
                    JSProf.LMC(38767, winUtils, 'scrollIntoView').scrollIntoView(JSProf.LGD(38766, this, 'domNode').domNode);
                }, 12));    // without defer, the input caret position can change on mouse click
            }
            JSProf.LMC(38770, this, 'inherited').inherited(arguments);
        }, 12),
        isFocusable: JSProf.LNF(38776, function () {
            // summary:
            //		Tells if this widget is focusable or not.  Used internally by dijit.
            // tags:
            //		protected
            return !JSProf.LGD(38772, this, 'disabled').disabled && JSProf.LGD(38773, this, 'focusNode').focusNode && JSProf.LMC(38775, domStyle, 'get').get(JSProf.LGD(38774, this, 'domNode').domNode, "display") != "none";
        }, 12),
        focus: JSProf.LNF(38780, function () {
            // summary:
            //		Put focus on this widget
            if (!JSProf.LGD(38777, this, 'disabled').disabled && JSProf.LGD(38778, this.focusNode, 'focus').focus) {
                try {
                    JSProf.LMC(38779, this.focusNode, 'focus').focus();
                } catch (e) {
                }    /*squelch errors from hidden nodes*/
            }
        }, 12),
        compare: JSProf.LNF(38793, function (val1, val2) {
            // summary:
            //		Compare 2 values (as returned by get('value') for this widget).
            // tags:
            //		protected
            if (typeof JSProf.LRE(38781, val1) == "number" && typeof JSProf.LRE(38782, val2) == "number") {
                return JSProf.LFC(38784, isNaN, false)(JSProf.LRE(38783, val1)) && JSProf.LFC(38786, isNaN, false)(JSProf.LRE(38785, val2)) ? 0 : JSProf.LRE(38787, val1) - JSProf.LRE(38788, val2);
            } else if (JSProf.LRE(38789, val1) > JSProf.LRE(38790, val2)) {
                return 1;
            } else if (JSProf.LRE(38791, val1) < JSProf.LRE(38792, val2)) {
                return -1;
            } else {
                return 0;
            }
        }, 12),
        onChange: JSProf.LNF(38794, function () {
        }, 12),
        _onChangeActive: false,
        _handleOnChange: JSProf.LNF(38823, function (newValue, priorityChange) {
            // summary:
            //		Called when the value of the widget is set.  Calls onChange() if appropriate
            // newValue:
            //		the new value
            // priorityChange:
            //		For a slider, for example, dragging the slider is priorityChange==false,
            //		but on mouse up, it's priorityChange==true.  If intermediateChanges==false,
            //		onChange is only called form priorityChange=true events.
            // tags:
            //		private
            if (JSProf.LGD(38795, this, '_lastValueReported')._lastValueReported == undefined && (JSProf.LRE(38796, priorityChange) === null || !JSProf.LGD(38797, this, '_onChangeActive')._onChangeActive)) {
                // this block executes not for a change, but during initialization,
                // and is used to store away the original value (or for ToggleButton, the original checked state)
                JSProf.LPD(38800, this, '_resetValue')._resetValue = JSProf.LRSP(38800, JSProf.LPD(38799, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(38799, JSProf.LRE(38798, newValue)));
            }
            JSProf.LPD(38807, this, '_pendingOnChange')._pendingOnChange = JSProf.LRSP(38807, JSProf.LGD(38801, this, '_pendingOnChange')._pendingOnChange || typeof JSProf.LRE(38802, newValue) != typeof JSProf.LGD(38803, this, '_lastValueReported')._lastValueReported || JSProf.LMC(38806, this, 'compare').compare(JSProf.LRE(38804, newValue), JSProf.LGD(38805, this, '_lastValueReported')._lastValueReported) != 0);
            if ((JSProf.LGD(38808, this, 'intermediateChanges').intermediateChanges || JSProf.LRE(38809, priorityChange) || JSProf.LRE(38810, priorityChange) === undefined) && JSProf.LGD(38811, this, '_pendingOnChange')._pendingOnChange) {
                JSProf.LPD(38813, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(38813, JSProf.LRE(38812, newValue));
                JSProf.LPD(38814, this, '_pendingOnChange')._pendingOnChange = JSProf.LRSP(38814, false);
                if (JSProf.LGD(38815, this, '_onChangeActive')._onChangeActive) {
                    if (JSProf.LGD(38816, this, '_onChangeHandle')._onChangeHandle) {
                        JSProf.LMC(38817, this._onChangeHandle, 'remove').remove();
                    }
                    // defer allows hidden value processing to run and
                    // also the onChange handler can safely adjust focus, etc
                    JSProf.LPD(38822, this, '_onChangeHandle')._onChangeHandle = JSProf.LRSP(38822, JSProf.LMC(38821, this, 'defer').defer(JSProf.LNF(38820, function () {
                        this._onChangeHandle = null;
                        JSProf.LMC(38819, this, 'onChange').onChange(JSProf.LRE(38818, newValue));
                    }, 12)));    // try to collapse multiple onChange's fired faster than can be processed
                }
            }
        }, 12),
        create: JSProf.LNF(38826, function () {
            // Overrides _Widget.create()
            JSProf.LMC(38824, this, 'inherited').inherited(arguments);
            JSProf.LPD(38825, this, '_onChangeActive')._onChangeActive = JSProf.LRSP(38825, true);
        }, 12),
        destroy: JSProf.LNF(38832, function () {
            if (JSProf.LGD(38827, this, '_onChangeHandle')._onChangeHandle) {
                // destroy called before last onChange has fired
                JSProf.LMC(38828, this._onChangeHandle, 'remove').remove();
                JSProf.LMC(38830, this, 'onChange').onChange(JSProf.LGD(38829, this, '_lastValueReported')._lastValueReported);
            }
            JSProf.LMC(38831, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));