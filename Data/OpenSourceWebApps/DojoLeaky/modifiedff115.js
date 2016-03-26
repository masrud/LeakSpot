JSProf.LFC(39295, define, false)(JSProf.LNE(39164, [
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
], 10), JSProf.LNF(39294, function (array, declare, domAttr, domStyle, lang, mouse, on, has, winUtils, a11y) {
    // module:
    //		dijit/form/_FormWidgetMixin
    return JSProf.LFC(39293, declare, false)("dijit.form._FormWidgetMixin", null, JSProf.LNE(39292, {
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
        _setDisabledAttr: JSProf.LNF(39198, function (value) {
            JSProf.LMC(39166, this, '_set')._set("disabled", JSProf.LRE(39165, value));
            JSProf.LMC(39169, domAttr, 'set').set(JSProf.LGD(39167, this, 'focusNode').focusNode, 'disabled', JSProf.LRE(39168, value));
            if (JSProf.LGD(39170, this, 'valueNode').valueNode) {
                JSProf.LMC(39173, domAttr, 'set').set(JSProf.LGD(39171, this, 'valueNode').valueNode, 'disabled', JSProf.LRE(39172, value));
            }
            JSProf.LMC(39175, this.focusNode, 'setAttribute').setAttribute("aria-disabled", JSProf.LRE(39174, value) ? "true" : "false");
            if (JSProf.LRE(39176, value)) {
                // reset these, because after the domNode is disabled, we can no longer receive
                // mouse related events, see #4200
                JSProf.LMC(39177, this, '_set')._set("hovering", false);
                JSProf.LMC(39178, this, '_set')._set("active", false);
                // clear tab stop(s) on this widget's focusable node(s)  (ComboBox has two focusable nodes)
                var attachPointNames = "tabIndex" in JSProf.LGD(39179, this, 'attributeMap').attributeMap ? JSProf.LGD(39180, this.attributeMap, 'tabIndex').tabIndex : "_setTabIndexAttr" in this ? JSProf.LGD(39181, this, '_setTabIndexAttr')._setTabIndexAttr : "focusNode";
                JSProf.LMC(39194, array, 'forEach').forEach(JSProf.LMC(39183, lang, 'isArray').isArray(JSProf.LRE(39182, attachPointNames)) ? JSProf.LRE(39184, attachPointNames) : JSProf.LNE(39186, [JSProf.LRE(39185, attachPointNames)], 10), JSProf.LNF(39193, function (attachPointName) {
                    var node = JSProf.LGE(39187, this, 'attachPointName')[attachPointName];
                    // complex code because tabIndex=-1 on a <div> doesn't work on FF
                    if (JSProf.LFC(39188, has, false)("webkit") || JSProf.LMC(39190, a11y, 'hasDefaultTabStop').hasDefaultTabStop(JSProf.LRE(39189, node))) {
                        // see #11064 about webkit bug
                        JSProf.LMC(39191, node, 'setAttribute').setAttribute('tabIndex', "-1");
                    } else {
                        JSProf.LMC(39192, node, 'removeAttribute').removeAttribute('tabIndex');
                    }
                }, 12), this);
            } else {
                if (JSProf.LGD(39195, this, 'tabIndex').tabIndex != "") {
                    JSProf.LMC(39197, this, 'set').set('tabIndex', JSProf.LGD(39196, this, 'tabIndex').tabIndex);
                }
            }
        }, 12),
        _onFocus: JSProf.LNF(39230, function (by) {
            // If user clicks on the widget, even if the mouse is released outside of it,
            // this widget's focusNode should get focus (to mimic native browser behavior).
            // Browsers often need help to make sure the focus via mouse actually gets to the focusNode.
            // TODO: consider removing all of this for 2.0 or sooner, see #16622 etc.
            if (JSProf.LRE(39199, by) == "mouse" && JSProf.LMC(39200, this, 'isFocusable').isFocusable()) {
                // IE exhibits strange scrolling behavior when refocusing a node so only do it when !focused.
                var focusHandle = JSProf.LGE(39207, JSProf.LMC(39206, this, 'own').own(JSProf.LFC(39205, on, false)(JSProf.LGD(39201, this, 'focusNode').focusNode, "focus", JSProf.LNF(39204, function () {
                        JSProf.LMC(39202, mouseUpHandle, 'remove').remove();
                        JSProf.LMC(39203, focusHandle, 'remove').remove();
                    }, 12))), 0)[0];
                // Set a global event to handle mouseup, so it fires properly
                // even if the cursor leaves this.domNode before the mouse up event.
                var event = JSProf.LFC(39208, has, false)("pointer-events") ? "pointerup" : JSProf.LFC(39209, has, false)("MSPointer") ? "MSPointerUp" : JSProf.LFC(39210, has, false)("touch-events") ? "touchend, mouseup" : "mouseup";
                var mouseUpHandle = JSProf.LGE(39223, JSProf.LMC(39222, this, 'own').own(JSProf.LFC(39221, on, false)(JSProf.LGD(39211, this, 'ownerDocumentBody').ownerDocumentBody, JSProf.LRE(39212, event), JSProf.LMC(39220, lang, 'hitch').hitch(this, JSProf.LNF(39219, function (evt) {
                        JSProf.LMC(39213, mouseUpHandle, 'remove').remove();
                        JSProf.LMC(39214, focusHandle, 'remove').remove();
                        // if here, then the mousedown did not focus the focusNode as the default action
                        if (JSProf.LGD(39215, this, 'focused').focused) {
                            if (JSProf.LGD(39216, evt, 'type').type == "touchend") {
                                JSProf.LMC(39217, this, 'defer').defer("focus");    // native focus hasn't occurred yet
                            } else {
                                JSProf.LMC(39218, this, 'focus').focus();    // native focus already occurred on mousedown
                            }
                        }
                    }, 12)))), 0)[0];
            }
            if (JSProf.LGD(39224, this, 'scrollOnFocus').scrollOnFocus) {
                JSProf.LMC(39228, this, 'defer').defer(JSProf.LNF(39227, function () {
                    JSProf.LMC(39226, winUtils, 'scrollIntoView').scrollIntoView(JSProf.LGD(39225, this, 'domNode').domNode);
                }, 12));    // without defer, the input caret position can change on mouse click
            }
            JSProf.LMC(39229, this, 'inherited').inherited(arguments);
        }, 12),
        isFocusable: JSProf.LNF(39235, function () {
            // summary:
            //		Tells if this widget is focusable or not.  Used internally by dijit.
            // tags:
            //		protected
            return !JSProf.LGD(39231, this, 'disabled').disabled && JSProf.LGD(39232, this, 'focusNode').focusNode && JSProf.LMC(39234, domStyle, 'get').get(JSProf.LGD(39233, this, 'domNode').domNode, "display") != "none";
        }, 12),
        focus: JSProf.LNF(39239, function () {
            // summary:
            //		Put focus on this widget
            if (!JSProf.LGD(39236, this, 'disabled').disabled && JSProf.LGD(39237, this.focusNode, 'focus').focus) {
                try {
                    JSProf.LMC(39238, this.focusNode, 'focus').focus();
                } catch (e) {
                }    /*squelch errors from hidden nodes*/
            }
        }, 12),
        compare: JSProf.LNF(39252, function (val1, val2) {
            // summary:
            //		Compare 2 values (as returned by get('value') for this widget).
            // tags:
            //		protected
            if (typeof JSProf.LRE(39240, val1) == "number" && typeof JSProf.LRE(39241, val2) == "number") {
                return JSProf.LFC(39243, isNaN, false)(JSProf.LRE(39242, val1)) && JSProf.LFC(39245, isNaN, false)(JSProf.LRE(39244, val2)) ? 0 : JSProf.LRE(39246, val1) - JSProf.LRE(39247, val2);
            } else if (JSProf.LRE(39248, val1) > JSProf.LRE(39249, val2)) {
                return 1;
            } else if (JSProf.LRE(39250, val1) < JSProf.LRE(39251, val2)) {
                return -1;
            } else {
                return 0;
            }
        }, 12),
        onChange: JSProf.LNF(39253, function () {
        }, 12),
        _onChangeActive: false,
        _handleOnChange: JSProf.LNF(39282, function (newValue, priorityChange) {
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
            if (JSProf.LGD(39254, this, '_lastValueReported')._lastValueReported == undefined && (JSProf.LRE(39255, priorityChange) === null || !JSProf.LGD(39256, this, '_onChangeActive')._onChangeActive)) {
                // this block executes not for a change, but during initialization,
                // and is used to store away the original value (or for ToggleButton, the original checked state)
                JSProf.LPD(39259, this, '_resetValue')._resetValue = JSProf.LRSP(39259, JSProf.LPD(39258, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(39258, JSProf.LRE(39257, newValue)));
            }
            JSProf.LPD(39266, this, '_pendingOnChange')._pendingOnChange = JSProf.LRSP(39266, JSProf.LGD(39260, this, '_pendingOnChange')._pendingOnChange || typeof JSProf.LRE(39261, newValue) != typeof JSProf.LGD(39262, this, '_lastValueReported')._lastValueReported || JSProf.LMC(39265, this, 'compare').compare(JSProf.LRE(39263, newValue), JSProf.LGD(39264, this, '_lastValueReported')._lastValueReported) != 0);
            if ((JSProf.LGD(39267, this, 'intermediateChanges').intermediateChanges || JSProf.LRE(39268, priorityChange) || JSProf.LRE(39269, priorityChange) === undefined) && JSProf.LGD(39270, this, '_pendingOnChange')._pendingOnChange) {
                JSProf.LPD(39272, this, '_lastValueReported')._lastValueReported = JSProf.LRSP(39272, JSProf.LRE(39271, newValue));
                JSProf.LPD(39273, this, '_pendingOnChange')._pendingOnChange = JSProf.LRSP(39273, false);
                if (JSProf.LGD(39274, this, '_onChangeActive')._onChangeActive) {
                    if (JSProf.LGD(39275, this, '_onChangeHandle')._onChangeHandle) {
                        JSProf.LMC(39276, this._onChangeHandle, 'remove').remove();
                    }
                    // defer allows hidden value processing to run and
                    // also the onChange handler can safely adjust focus, etc
                    JSProf.LPD(39281, this, '_onChangeHandle')._onChangeHandle = JSProf.LRSP(39281, JSProf.LMC(39280, this, 'defer').defer(JSProf.LNF(39279, function () {
                        this._onChangeHandle = null;
                        JSProf.LMC(39278, this, 'onChange').onChange(JSProf.LRE(39277, newValue));
                    }, 12)));    // try to collapse multiple onChange's fired faster than can be processed
                }
            }
        }, 12),
        create: JSProf.LNF(39285, function () {
            // Overrides _Widget.create()
            JSProf.LMC(39283, this, 'inherited').inherited(arguments);
            JSProf.LPD(39284, this, '_onChangeActive')._onChangeActive = JSProf.LRSP(39284, true);
        }, 12),
        destroy: JSProf.LNF(39291, function () {
            if (JSProf.LGD(39286, this, '_onChangeHandle')._onChangeHandle) {
                // destroy called before last onChange has fired
                JSProf.LMC(39287, this._onChangeHandle, 'remove').remove();
                JSProf.LMC(39289, this, 'onChange').onChange(JSProf.LGD(39288, this, '_lastValueReported')._lastValueReported);
            }
            JSProf.LMC(39290, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));