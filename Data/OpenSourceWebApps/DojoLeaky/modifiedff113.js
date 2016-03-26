JSProf.LFC(38612, define, false)(JSProf.LNE(38551, [
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/has",
    "../registry"
], 10), JSProf.LNF(38611, function (declare, dom, has, registry) {
    // module:
    //		dijit/form/_ButtonMixin
    var ButtonMixin = JSProf.LFC(38598, declare, false)("dijit.form._ButtonMixin" + (JSProf.LFC(38552, has, false)("dojo-bidi") ? "_NoBidi" : ""), null, JSProf.LNE(38597, {
            label: "",
            type: "button",
            __onClick: JSProf.LNF(38558, function (e) {
                // summary:
                //		Internal function to divert the real click onto the hidden INPUT that has a native default action associated with it
                // type:
                //		private
                JSProf.LMC(38553, e, 'stopPropagation').stopPropagation();
                JSProf.LMC(38554, e, 'preventDefault').preventDefault();
                if (!JSProf.LGD(38555, this, 'disabled').disabled) {
                    // cannot use on.emit since button default actions won't occur
                    JSProf.LMC(38557, this.valueNode, 'click').click(JSProf.LRE(38556, e));
                }
                return false;
            }, 12),
            _onClick: JSProf.LNF(38584, function (e) {
                // summary:
                //		Internal function to handle click actions
                if (JSProf.LGD(38559, this, 'disabled').disabled) {
                    JSProf.LMC(38560, e, 'stopPropagation').stopPropagation();
                    JSProf.LMC(38561, e, 'preventDefault').preventDefault();
                    return false;
                }
                if (JSProf.LMC(38563, this, 'onClick').onClick(JSProf.LRE(38562, e)) === false) {
                    JSProf.LMC(38564, e, 'preventDefault').preventDefault();
                }
                var cancelled = JSProf.LGD(38565, e, 'defaultPrevented').defaultPrevented;
                // Signal Form/Dialog to submit/close.  For 2.0, consider removing this code and instead making the Form/Dialog
                // listen for bubbled click events where evt.target.type == "submit" && !evt.defaultPrevented.
                if (!JSProf.LRE(38566, cancelled) && JSProf.LGD(38567, this, 'type').type == "submit" && !JSProf.LGD(38570, JSProf.LGD(38568, this, 'valueNode').valueNode || JSProf.LGD(38569, this, 'focusNode').focusNode, 'form').form) {
                    for (var node = JSProf.LGD(38571, this, 'domNode').domNode; JSProf.LGD(38572, node, 'parentNode').parentNode; node = JSProf.LWR(38574, node, JSProf.LGD(38573, node, 'parentNode').parentNode)) {
                        var widget = JSProf.LMC(38576, registry, 'byNode').byNode(JSProf.LRE(38575, node));
                        if (JSProf.LRE(38577, widget) && typeof JSProf.LGD(38578, widget, '_onSubmit')._onSubmit == "function") {
                            JSProf.LMC(38580, widget, '_onSubmit')._onSubmit(JSProf.LRE(38579, e));
                            JSProf.LMC(38581, e, 'preventDefault').preventDefault();
                            // action has already occurred
                            cancelled = JSProf.LWR(38582, cancelled, true);
                            break;
                        }
                    }
                }
                return !JSProf.LRE(38583, cancelled);
            }, 12),
            postCreate: JSProf.LNF(38588, function () {
                JSProf.LMC(38585, this, 'inherited').inherited(arguments);
                JSProf.LMC(38587, dom, 'setSelectable').setSelectable(JSProf.LGD(38586, this, 'focusNode').focusNode, false);
            }, 12),
            onClick: JSProf.LNF(38589, function () {
                // summary:
                //		Callback for when button is clicked.
                //		If type="submit", return true to perform submit, or false to cancel it.
                // type:
                //		callback
                return true;    // Boolean
            }, 12),
            _setLabelAttr: JSProf.LNF(38596, function (content) {
                // summary:
                //		Hook for set('label', ...) to work.
                // description:
                //		Set the label (text) of the button; takes an HTML string.
                JSProf.LMC(38591, this, '_set')._set("label", JSProf.LRE(38590, content));
                var labelNode = JSProf.LGD(38592, this, 'containerNode').containerNode || JSProf.LGD(38593, this, 'focusNode').focusNode;
                JSProf.LPD(38595, labelNode, 'innerHTML').innerHTML = JSProf.LRSP(38595, JSProf.LRE(38594, content));
            }, 12)
        }, 11));
    if (JSProf.LFC(38599, has, false)("dojo-bidi")) {
        ButtonMixin = JSProf.LWR(38609, ButtonMixin, JSProf.LFC(38608, declare, false)("dijit.form._ButtonMixin", JSProf.LRE(38600, ButtonMixin), JSProf.LNE(38607, {
            _setLabelAttr: JSProf.LNF(38606, function () {
                JSProf.LMC(38601, this, 'inherited').inherited(arguments);
                var labelNode = JSProf.LGD(38602, this, 'containerNode').containerNode || JSProf.LGD(38603, this, 'focusNode').focusNode;
                JSProf.LMC(38605, this, 'applyTextDir').applyTextDir(JSProf.LRE(38604, labelNode));
            }, 12)
        }, 11)));
    }
    return JSProf.LRE(38610, ButtonMixin);
}, 12));