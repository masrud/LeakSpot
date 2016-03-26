JSProf.LFC(38614, define, false)(JSProf.LNE(38553, [
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/has",
    "../registry"
], 10), JSProf.LNF(38613, function (declare, dom, has, registry) {
    // module:
    //		dijit/form/_ButtonMixin
    var ButtonMixin = JSProf.LFC(38600, declare, false)("dijit.form._ButtonMixin" + (JSProf.LFC(38554, has, false)("dojo-bidi") ? "_NoBidi" : ""), null, JSProf.LNE(38599, {
            label: "",
            type: "button",
            __onClick: JSProf.LNF(38560, function (e) {
                // summary:
                //		Internal function to divert the real click onto the hidden INPUT that has a native default action associated with it
                // type:
                //		private
                JSProf.LMC(38555, e, 'stopPropagation').stopPropagation();
                JSProf.LMC(38556, e, 'preventDefault').preventDefault();
                if (!JSProf.LGD(38557, this, 'disabled').disabled) {
                    // cannot use on.emit since button default actions won't occur
                    JSProf.LMC(38559, this.valueNode, 'click').click(JSProf.LRE(38558, e));
                }
                return false;
            }, 12),
            _onClick: JSProf.LNF(38586, function (e) {
                // summary:
                //		Internal function to handle click actions
                if (JSProf.LGD(38561, this, 'disabled').disabled) {
                    JSProf.LMC(38562, e, 'stopPropagation').stopPropagation();
                    JSProf.LMC(38563, e, 'preventDefault').preventDefault();
                    return false;
                }
                if (JSProf.LMC(38565, this, 'onClick').onClick(JSProf.LRE(38564, e)) === false) {
                    JSProf.LMC(38566, e, 'preventDefault').preventDefault();
                }
                var cancelled = JSProf.LGD(38567, e, 'defaultPrevented').defaultPrevented;
                // Signal Form/Dialog to submit/close.  For 2.0, consider removing this code and instead making the Form/Dialog
                // listen for bubbled click events where evt.target.type == "submit" && !evt.defaultPrevented.
                if (!JSProf.LRE(38568, cancelled) && JSProf.LGD(38569, this, 'type').type == "submit" && !JSProf.LGD(38572, JSProf.LGD(38570, this, 'valueNode').valueNode || JSProf.LGD(38571, this, 'focusNode').focusNode, 'form').form) {
                    for (var node = JSProf.LGD(38573, this, 'domNode').domNode; JSProf.LGD(38574, node, 'parentNode').parentNode; node = JSProf.LWR(38576, node, JSProf.LGD(38575, node, 'parentNode').parentNode)) {
                        var widget = JSProf.LMC(38578, registry, 'byNode').byNode(JSProf.LRE(38577, node));
                        if (JSProf.LRE(38579, widget) && typeof JSProf.LGD(38580, widget, '_onSubmit')._onSubmit == "function") {
                            JSProf.LMC(38582, widget, '_onSubmit')._onSubmit(JSProf.LRE(38581, e));
                            JSProf.LMC(38583, e, 'preventDefault').preventDefault();
                            // action has already occurred
                            cancelled = JSProf.LWR(38584, cancelled, true);
                            break;
                        }
                    }
                }
                return !JSProf.LRE(38585, cancelled);
            }, 12),
            postCreate: JSProf.LNF(38590, function () {
                JSProf.LMC(38587, this, 'inherited').inherited(arguments);
                JSProf.LMC(38589, dom, 'setSelectable').setSelectable(JSProf.LGD(38588, this, 'focusNode').focusNode, false);
            }, 12),
            onClick: JSProf.LNF(38591, function () {
                // summary:
                //		Callback for when button is clicked.
                //		If type="submit", return true to perform submit, or false to cancel it.
                // type:
                //		callback
                return true;    // Boolean
            }, 12),
            _setLabelAttr: JSProf.LNF(38598, function (content) {
                // summary:
                //		Hook for set('label', ...) to work.
                // description:
                //		Set the label (text) of the button; takes an HTML string.
                JSProf.LMC(38593, this, '_set')._set("label", JSProf.LRE(38592, content));
                var labelNode = JSProf.LGD(38594, this, 'containerNode').containerNode || JSProf.LGD(38595, this, 'focusNode').focusNode;
                JSProf.LPD(38597, labelNode, 'innerHTML').innerHTML = JSProf.LRSP(38597, JSProf.LRE(38596, content));
            }, 12)
        }, 11));
    if (JSProf.LFC(38601, has, false)("dojo-bidi")) {
        ButtonMixin = JSProf.LWR(38611, ButtonMixin, JSProf.LFC(38610, declare, false)("dijit.form._ButtonMixin", JSProf.LRE(38602, ButtonMixin), JSProf.LNE(38609, {
            _setLabelAttr: JSProf.LNF(38608, function () {
                JSProf.LMC(38603, this, 'inherited').inherited(arguments);
                var labelNode = JSProf.LGD(38604, this, 'containerNode').containerNode || JSProf.LGD(38605, this, 'focusNode').focusNode;
                JSProf.LMC(38607, this, 'applyTextDir').applyTextDir(JSProf.LRE(38606, labelNode));
            }, 12)
        }, 11)));
    }
    return JSProf.LRE(38612, ButtonMixin);
}, 12));