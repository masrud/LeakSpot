JSProf.LFC(39207, define, false)(JSProf.LNE(39020, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/has",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/domReady",
    "dojo/touch",
    "dojo/_base/window",
    "./a11yclick",
    "./registry"
], 10), JSProf.LNF(39206, function (array, declare, dom, domClass, has, lang, on, domReady, touch, win, a11yclick, registry) {
    // module:
    //		dijit/_CssStateMixin
    var CssStateMixin = JSProf.LFC(39133, declare, false)("dijit._CssStateMixin", JSProf.LNE(39021, [], 10), JSProf.LNE(39132, {
            hovering: false,
            active: false,
            _applyAttributes: JSProf.LNF(39038, function () {
                // This code would typically be in postCreate(), but putting in _applyAttributes() for
                // performance: so the class changes happen before DOM is inserted into the document.
                // Change back to postCreate() in 2.0.  See #11635.
                JSProf.LMC(39022, this, 'inherited').inherited(arguments);
                // Monitoring changes to disabled, readonly, etc. state, and update CSS class of root node
                JSProf.LMC(39028, array, 'forEach').forEach(JSProf.LNE(39023, [
                    "disabled",
                    "readOnly",
                    "checked",
                    "selected",
                    "focused",
                    "state",
                    "hovering",
                    "active",
                    "_opened"
                ], 10), JSProf.LNF(39027, function (attr) {
                    JSProf.LMC(39026, this, 'watch').watch(JSProf.LRE(39024, attr), JSProf.LMC(39025, lang, 'hitch').hitch(this, "_setStateClass"));
                }, 12), this);
                // Track hover and active mouse events on widget root node, plus possibly on subnodes
                for (var ap in JSProf.LGD(39029, this, 'cssStateNodes').cssStateNodes || JSProf.LNE(39030, {}, 11)) {
                    JSProf.LMC(39033, this, '_trackMouseState')._trackMouseState(JSProf.LGE(39031, this, 'ap')[ap], JSProf.LGE(39032, this.cssStateNodes, 'ap')[ap]);
                }
                JSProf.LMC(39036, this, '_trackMouseState')._trackMouseState(JSProf.LGD(39034, this, 'domNode').domNode, JSProf.LGD(39035, this, 'baseClass').baseClass);
                // Set state initially; there's probably no hover/active/focus state but widget might be
                // disabled/readonly/checked/selected so we want to set CSS classes for those conditions.
                JSProf.LMC(39037, this, '_setStateClass')._setStateClass();
            }, 12),
            _cssMouseEvent: JSProf.LNF(39048, function (event) {
                // summary:
                //		Handler for CSS event on this.domNode. Sets hovering and active properties depending on mouse state,
                //		which triggers _setStateClass() to set appropriate CSS classes for this.domNode.
                if (!JSProf.LGD(39039, this, 'disabled').disabled) {
                    switch (JSProf.LGD(39040, event, 'type').type) {
                    case "mouseover":
                    case "MSPointerOver":
                    case "pointerover":
                        JSProf.LMC(39041, this, '_set')._set("hovering", true);
                        JSProf.LMC(39043, this, '_set')._set("active", JSProf.LGD(39042, this, '_mouseDown')._mouseDown);
                        break;
                    case "mouseout":
                    case "MSPointerOut":
                    case "pointerout":
                        JSProf.LMC(39044, this, '_set')._set("hovering", false);
                        JSProf.LMC(39045, this, '_set')._set("active", false);
                        break;
                    case "mousedown":
                    case "touchstart":
                    case "MSPointerDown":
                    case "pointerdown":
                    case "keydown":
                        JSProf.LMC(39046, this, '_set')._set("active", true);
                        break;
                    case "mouseup":
                    case "dojotouchend":
                    case "MSPointerUp":
                    case "pointerup":
                    case "keyup":
                        JSProf.LMC(39047, this, '_set')._set("active", false);
                        break;
                    }
                }
            }, 12),
            _setStateClass: JSProf.LNF(39102, function () {
                JSProf.LFD(39101, multiply);
                // summary:
                //		Update the visual state of the widget by setting the css classes on this.domNode
                //		(or this.stateNode if defined) by combining this.baseClass with
                //		various suffixes that represent the current widget state(s).
                //
                // description:
                //		In the case where a widget has multiple
                //		states, it sets the class based on all possible
                //		combinations.  For example, an invalid form widget that is being hovered
                //		will be "dijitInput dijitInputInvalid dijitInputHover dijitInputInvalidHover".
                //
                //		The widget may have one or more of the following states, determined
                //		by this.state, this.checked, this.valid, and this.selected:
                //
                //		- Error - ValidationTextBox sets this.state to "Error" if the current input value is invalid
                //		- Incomplete - ValidationTextBox sets this.state to "Incomplete" if the current input value is not finished yet
                //		- Checked - ex: a checkmark or a ToggleButton in a checked state, will have this.checked==true
                //		- Selected - ex: currently selected tab will have this.selected==true
                //
                //		In addition, it may have one or more of the following states,
                //		based on this.disabled and flags set in _onMouse (this.active, this.hovering) and from focus manager (this.focused):
                //
                //		- Disabled	- if the widget is disabled
                //		- Active		- if the mouse (or space/enter key?) is being pressed down
                //		- Focused		- if the widget has focus
                //		- Hover		- if the mouse is over the widget
                // Compute new set of classes
                var newStateClasses = this.baseClass.split(" ");
                function multiply(modifier) {
                    newStateClasses = JSProf.LWR(39055, newStateClasses, newStateClasses.concat(JSProf.LMC(39053, array, 'map').map(JSProf.LRE(39049, newStateClasses), JSProf.LNF(39052, function (c) {
                        return JSProf.LRE(39050, c) + JSProf.LRE(39051, modifier);
                    }, 12)), "dijit" + JSProf.LRE(39054, modifier)));
                }
                if (!JSProf.LMC(39056, this, 'isLeftToRight').isLeftToRight()) {
                    // For RTL mode we need to set an addition class like dijitTextBoxRtl.
                    JSProf.LFC(39057, multiply, false)("Rtl");
                }
                var checkedState = JSProf.LGD(39058, this, 'checked').checked == "mixed" ? "Mixed" : JSProf.LGD(39059, this, 'checked').checked ? "Checked" : "";
                if (JSProf.LGD(39060, this, 'checked').checked) {
                    JSProf.LFC(39062, multiply, false)(JSProf.LRE(39061, checkedState));
                }
                if (JSProf.LGD(39063, this, 'state').state) {
                    JSProf.LFC(39065, multiply, false)(JSProf.LGD(39064, this, 'state').state);
                }
                if (JSProf.LGD(39066, this, 'selected').selected) {
                    JSProf.LFC(39067, multiply, false)("Selected");
                }
                if (JSProf.LGD(39068, this, '_opened')._opened) {
                    JSProf.LFC(39069, multiply, false)("Opened");
                }
                if (JSProf.LGD(39070, this, 'disabled').disabled) {
                    JSProf.LFC(39071, multiply, false)("Disabled");
                } else if (JSProf.LGD(39072, this, 'readOnly').readOnly) {
                    JSProf.LFC(39073, multiply, false)("ReadOnly");
                } else {
                    if (JSProf.LGD(39074, this, 'active').active) {
                        JSProf.LFC(39075, multiply, false)("Active");
                    } else if (JSProf.LGD(39076, this, 'hovering').hovering) {
                        JSProf.LFC(39077, multiply, false)("Hover");
                    }
                }
                if (JSProf.LGD(39078, this, 'focused').focused) {
                    JSProf.LFC(39079, multiply, false)("Focused");
                }
                // Remove old state classes and add new ones.
                // For performance concerns we only write into domNode.className once.
                var tn = JSProf.LGD(39080, this, 'stateNode').stateNode || JSProf.LGD(39081, this, 'domNode').domNode, classHash = JSProf.LNE(39082, {}, 11);
                // set of all classes (state and otherwise) for node
                JSProf.LMC(39085, array, 'forEach').forEach(tn.className.split(" "), JSProf.LNF(39084, function (c) {
                    JSProf.LPE(39083, classHash, 'c')[c] = JSProf.LRPE(39083, true);
                }, 12));
                if ("_stateClasses" in this) {
                    JSProf.LMC(39088, array, 'forEach').forEach(JSProf.LGD(39086, this, '_stateClasses')._stateClasses, JSProf.LNF(39087, function (c) {
                        delete classHash[c];
                    }, 12));
                }
                JSProf.LMC(39092, array, 'forEach').forEach(JSProf.LRE(39089, newStateClasses), JSProf.LNF(39091, function (c) {
                    JSProf.LPE(39090, classHash, 'c')[c] = JSProf.LRPE(39090, true);
                }, 12));
                var newClasses = JSProf.LNE(39093, [], 10);
                for (var c in JSProf.LRE(39094, classHash)) {
                    JSProf.LMC(39096, newClasses, 'push').push(JSProf.LRE(39095, c));
                }
                JSProf.LPD(39098, tn, 'className').className = JSProf.LRSP(39098, JSProf.LMC(39097, newClasses, 'join').join(" "));
                JSProf.LPD(39100, this, '_stateClasses')._stateClasses = JSProf.LRSP(39100, JSProf.LRE(39099, newStateClasses));
            }, 12),
            _subnodeCssMouseEvent: JSProf.LNF(39128, function (node, clazz, evt) {
                JSProf.LFD(39125, hover);
                JSProf.LFD(39126, active);
                JSProf.LFD(39127, focused);
                // summary:
                //		Handler for hover/active mouse event on widget's subnode
                if (JSProf.LGD(39103, this, 'disabled').disabled || JSProf.LGD(39104, this, 'readOnly').readOnly) {
                    return;
                }
                function hover(isHovering) {
                    JSProf.LMC(39108, domClass, 'toggle').toggle(JSProf.LRE(39105, node), JSProf.LRE(39106, clazz) + "Hover", JSProf.LRE(39107, isHovering));
                }
                function active(isActive) {
                    JSProf.LMC(39112, domClass, 'toggle').toggle(JSProf.LRE(39109, node), JSProf.LRE(39110, clazz) + "Active", JSProf.LRE(39111, isActive));
                }
                function focused(isFocused) {
                    JSProf.LMC(39116, domClass, 'toggle').toggle(JSProf.LRE(39113, node), JSProf.LRE(39114, clazz) + "Focused", JSProf.LRE(39115, isFocused));
                }
                switch (JSProf.LGD(39117, evt, 'type').type) {
                case "mouseover":
                case "MSPointerOver":
                case "pointerover":
                    JSProf.LFC(39118, hover, false)(true);
                    break;
                case "mouseout":
                case "MSPointerOut":
                case "pointerout":
                    JSProf.LFC(39119, hover, false)(false);
                    JSProf.LFC(39120, active, false)(false);
                    break;
                case "mousedown":
                case "touchstart":
                case "MSPointerDown":
                case "pointerdown":
                case "keydown":
                    JSProf.LFC(39121, active, false)(true);
                    break;
                case "mouseup":
                case "MSPointerUp":
                case "pointerup":
                case "dojotouchend":
                case "keyup":
                    JSProf.LFC(39122, active, false)(false);
                    break;
                case "focus":
                case "focusin":
                    JSProf.LFC(39123, focused, false)(true);
                    break;
                case "blur":
                case "focusout":
                    JSProf.LFC(39124, focused, false)(false);
                    break;
                }
            }, 12),
            _trackMouseState: JSProf.LNF(39131, function (node, clazz) {
                // summary:
                //		Track mouse/focus events on specified node and set CSS class on that node to indicate
                //		current state.   Usually not called directly, but via cssStateNodes attribute.
                // description:
                //		Given class=foo, will set the following CSS class on the node
                //
                //		- fooActive: if the user is currently pressing down the mouse button while over the node
                //		- fooHover: if the user is hovering the mouse over the node, but not pressing down a button
                //		- fooFocus: if the node is focused
                //
                //		Note that it won't set any classes if the widget is disabled.
                // node: DomNode
                //		Should be a sub-node of the widget, not the top node (this.domNode), since the top node
                //		is handled specially and automatically just by mixing in this class.
                // clazz: String
                //		CSS class name (ex: dijitSliderUpArrow)
                // Flag for listener code below to call this._cssMouseEvent() or this._subnodeCssMouseEvent()
                // when node is hovered/active
                JSProf.LPD(39130, node, '_cssState')._cssState = JSProf.LRSP(39130, JSProf.LRE(39129, clazz));
            }, 12)
        }, 11));
    JSProf.LFC(39204, domReady, false)(JSProf.LNF(39203, function () {
        JSProf.LFD(39202, pointerHandler);
        // Document level listener to catch hover etc. events on widget root nodes and subnodes.
        // Note that when the mouse is moved quickly, a single onmouseenter event could signal that multiple widgets
        // have been hovered or unhovered (try test_Accordion.html)
        function pointerHandler(evt, target, relatedTarget) {
            // Handler for mouseover, mouseout, a11yclick.press and a11click.release events
            // Poor man's event propagation.  Don't propagate event to ancestors of evt.relatedTarget,
            // to avoid processing mouseout events moving from a widget's domNode to a descendant node;
            // such events shouldn't be interpreted as a mouseleave on the widget.
            if (JSProf.LRE(39134, relatedTarget) && JSProf.LMC(39137, dom, 'isDescendant').isDescendant(JSProf.LRE(39135, relatedTarget), JSProf.LRE(39136, target))) {
                return;
            }
            for (var node = JSProf.LRE(39138, target); JSProf.LRE(39139, node) && JSProf.LRE(39140, node) != JSProf.LRE(39141, relatedTarget); node = JSProf.LWR(39143, node, JSProf.LGD(39142, node, 'parentNode').parentNode)) {
                // Process any nodes with _cssState property.   They are generally widget root nodes,
                // but could also be sub-nodes within a widget
                if (JSProf.LGD(39144, node, '_cssState')._cssState) {
                    var widget = JSProf.LMC(39146, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LRE(39145, node));
                    if (JSProf.LRE(39147, widget)) {
                        if (JSProf.LRE(39148, node) == JSProf.LGD(39149, widget, 'domNode').domNode) {
                            // event on the widget's root node
                            JSProf.LMC(39151, widget, '_cssMouseEvent')._cssMouseEvent(JSProf.LRE(39150, evt));
                        } else {
                            // event on widget's sub-node
                            JSProf.LMC(39155, widget, '_subnodeCssMouseEvent')._subnodeCssMouseEvent(JSProf.LRE(39152, node), JSProf.LGD(39153, node, '_cssState')._cssState, JSProf.LRE(39154, evt));
                        }
                    }
                }
            }
        }
        var body = JSProf.LMC(39156, win, 'body').body(), activeNode;
        // Handle pointer related events (i.e. mouse or touch)
        JSProf.LFC(39164, on, false)(JSProf.LRE(39157, body), JSProf.LGD(39158, touch, 'over').over, JSProf.LNF(39163, function (evt) {
            // Using touch.over rather than mouseover mainly to ignore phantom mouse events on iOS.
            JSProf.LFC(39162, pointerHandler, false)(JSProf.LRE(39159, evt), JSProf.LGD(39160, evt, 'target').target, JSProf.LGD(39161, evt, 'relatedTarget').relatedTarget);
        }, 12));
        JSProf.LFC(39172, on, false)(JSProf.LRE(39165, body), JSProf.LGD(39166, touch, 'out').out, JSProf.LNF(39171, function (evt) {
            // Using touch.out rather than mouseout mainly to ignore phantom mouse events on iOS.
            JSProf.LFC(39170, pointerHandler, false)(JSProf.LRE(39167, evt), JSProf.LGD(39168, evt, 'target').target, JSProf.LGD(39169, evt, 'relatedTarget').relatedTarget);
        }, 12));
        JSProf.LFC(39181, on, false)(JSProf.LRE(39173, body), JSProf.LGD(39174, a11yclick, 'press').press, JSProf.LNF(39180, function (evt) {
            // Save the a11yclick.press target to reference when the a11yclick.release comes.
            activeNode = JSProf.LWR(39176, activeNode, JSProf.LGD(39175, evt, 'target').target);
            JSProf.LFC(39179, pointerHandler, false)(JSProf.LRE(39177, evt), JSProf.LRE(39178, activeNode));
        }, 12));
        JSProf.LFC(39188, on, false)(JSProf.LRE(39182, body), JSProf.LGD(39183, a11yclick, 'release').release, JSProf.LNF(39187, function (evt) {
            // The release event could come on a separate node than the press event, if for example user slid finger.
            // Reference activeNode to reset the state of the node that got state set in the a11yclick.press handler.
            JSProf.LFC(39186, pointerHandler, false)(JSProf.LRE(39184, evt), JSProf.LRE(39185, activeNode));
            activeNode = null;
        }, 12));
        // Track focus events on widget sub-nodes that have been registered via _trackMouseState().
        // However, don't track focus events on the widget root nodes, because focus is tracked via the
        // focus manager (and it's not really tracking focus, but rather tracking that focus is on one of the widget's
        // nodes or a subwidget's node or a popup node, etc.)
        // Remove for 2.0 (if focus CSS needed, just use :focus pseudo-selector).
        JSProf.LFC(39201, on, false)(JSProf.LRE(39189, body), "focusin, focusout", JSProf.LNF(39200, function (evt) {
            var node = JSProf.LGD(39190, evt, 'target').target;
            if (JSProf.LGD(39191, node, '_cssState')._cssState && !JSProf.LMC(39192, node, 'getAttribute').getAttribute("widgetId")) {
                var widget = JSProf.LMC(39194, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LRE(39193, node));
                if (JSProf.LRE(39195, widget)) {
                    JSProf.LMC(39199, widget, '_subnodeCssMouseEvent')._subnodeCssMouseEvent(JSProf.LRE(39196, node), JSProf.LGD(39197, node, '_cssState')._cssState, JSProf.LRE(39198, evt));
                }
            }
        }, 12));
    }, 12));
    return JSProf.LRE(39205, CssStateMixin);
}, 12));