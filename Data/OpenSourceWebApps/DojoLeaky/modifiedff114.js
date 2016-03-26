JSProf.LFC(38890, define, false)(JSProf.LNE(38703, [
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
], 10), JSProf.LNF(38889, function (array, declare, dom, domClass, has, lang, on, domReady, touch, win, a11yclick, registry) {
    // module:
    //		dijit/_CssStateMixin
    var CssStateMixin = JSProf.LFC(38816, declare, false)("dijit._CssStateMixin", JSProf.LNE(38704, [], 10), JSProf.LNE(38815, {
            hovering: false,
            active: false,
            _applyAttributes: JSProf.LNF(38721, function () {
                // This code would typically be in postCreate(), but putting in _applyAttributes() for
                // performance: so the class changes happen before DOM is inserted into the document.
                // Change back to postCreate() in 2.0.  See #11635.
                JSProf.LMC(38705, this, 'inherited').inherited(arguments);
                // Monitoring changes to disabled, readonly, etc. state, and update CSS class of root node
                JSProf.LMC(38711, array, 'forEach').forEach(JSProf.LNE(38706, [
                    "disabled",
                    "readOnly",
                    "checked",
                    "selected",
                    "focused",
                    "state",
                    "hovering",
                    "active",
                    "_opened"
                ], 10), JSProf.LNF(38710, function (attr) {
                    JSProf.LMC(38709, this, 'watch').watch(JSProf.LRE(38707, attr), JSProf.LMC(38708, lang, 'hitch').hitch(this, "_setStateClass"));
                }, 12), this);
                // Track hover and active mouse events on widget root node, plus possibly on subnodes
                for (var ap in JSProf.LGD(38712, this, 'cssStateNodes').cssStateNodes || JSProf.LNE(38713, {}, 11)) {
                    JSProf.LMC(38716, this, '_trackMouseState')._trackMouseState(JSProf.LGE(38714, this, 'ap')[ap], JSProf.LGE(38715, this.cssStateNodes, 'ap')[ap]);
                }
                JSProf.LMC(38719, this, '_trackMouseState')._trackMouseState(JSProf.LGD(38717, this, 'domNode').domNode, JSProf.LGD(38718, this, 'baseClass').baseClass);
                // Set state initially; there's probably no hover/active/focus state but widget might be
                // disabled/readonly/checked/selected so we want to set CSS classes for those conditions.
                JSProf.LMC(38720, this, '_setStateClass')._setStateClass();
            }, 12),
            _cssMouseEvent: JSProf.LNF(38731, function (event) {
                // summary:
                //		Handler for CSS event on this.domNode. Sets hovering and active properties depending on mouse state,
                //		which triggers _setStateClass() to set appropriate CSS classes for this.domNode.
                if (!JSProf.LGD(38722, this, 'disabled').disabled) {
                    switch (JSProf.LGD(38723, event, 'type').type) {
                    case "mouseover":
                    case "MSPointerOver":
                    case "pointerover":
                        JSProf.LMC(38724, this, '_set')._set("hovering", true);
                        JSProf.LMC(38726, this, '_set')._set("active", JSProf.LGD(38725, this, '_mouseDown')._mouseDown);
                        break;
                    case "mouseout":
                    case "MSPointerOut":
                    case "pointerout":
                        JSProf.LMC(38727, this, '_set')._set("hovering", false);
                        JSProf.LMC(38728, this, '_set')._set("active", false);
                        break;
                    case "mousedown":
                    case "touchstart":
                    case "MSPointerDown":
                    case "pointerdown":
                    case "keydown":
                        JSProf.LMC(38729, this, '_set')._set("active", true);
                        break;
                    case "mouseup":
                    case "dojotouchend":
                    case "MSPointerUp":
                    case "pointerup":
                    case "keyup":
                        JSProf.LMC(38730, this, '_set')._set("active", false);
                        break;
                    }
                }
            }, 12),
            _setStateClass: JSProf.LNF(38785, function () {
                JSProf.LFD(38784, multiply);
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
                    newStateClasses = JSProf.LWR(38738, newStateClasses, newStateClasses.concat(JSProf.LMC(38736, array, 'map').map(JSProf.LRE(38732, newStateClasses), JSProf.LNF(38735, function (c) {
                        return JSProf.LRE(38733, c) + JSProf.LRE(38734, modifier);
                    }, 12)), "dijit" + JSProf.LRE(38737, modifier)));
                }
                if (!JSProf.LMC(38739, this, 'isLeftToRight').isLeftToRight()) {
                    // For RTL mode we need to set an addition class like dijitTextBoxRtl.
                    JSProf.LFC(38740, multiply, false)("Rtl");
                }
                var checkedState = JSProf.LGD(38741, this, 'checked').checked == "mixed" ? "Mixed" : JSProf.LGD(38742, this, 'checked').checked ? "Checked" : "";
                if (JSProf.LGD(38743, this, 'checked').checked) {
                    JSProf.LFC(38745, multiply, false)(JSProf.LRE(38744, checkedState));
                }
                if (JSProf.LGD(38746, this, 'state').state) {
                    JSProf.LFC(38748, multiply, false)(JSProf.LGD(38747, this, 'state').state);
                }
                if (JSProf.LGD(38749, this, 'selected').selected) {
                    JSProf.LFC(38750, multiply, false)("Selected");
                }
                if (JSProf.LGD(38751, this, '_opened')._opened) {
                    JSProf.LFC(38752, multiply, false)("Opened");
                }
                if (JSProf.LGD(38753, this, 'disabled').disabled) {
                    JSProf.LFC(38754, multiply, false)("Disabled");
                } else if (JSProf.LGD(38755, this, 'readOnly').readOnly) {
                    JSProf.LFC(38756, multiply, false)("ReadOnly");
                } else {
                    if (JSProf.LGD(38757, this, 'active').active) {
                        JSProf.LFC(38758, multiply, false)("Active");
                    } else if (JSProf.LGD(38759, this, 'hovering').hovering) {
                        JSProf.LFC(38760, multiply, false)("Hover");
                    }
                }
                if (JSProf.LGD(38761, this, 'focused').focused) {
                    JSProf.LFC(38762, multiply, false)("Focused");
                }
                // Remove old state classes and add new ones.
                // For performance concerns we only write into domNode.className once.
                var tn = JSProf.LGD(38763, this, 'stateNode').stateNode || JSProf.LGD(38764, this, 'domNode').domNode, classHash = JSProf.LNE(38765, {}, 11);
                // set of all classes (state and otherwise) for node
                JSProf.LMC(38768, array, 'forEach').forEach(tn.className.split(" "), JSProf.LNF(38767, function (c) {
                    JSProf.LPE(38766, classHash, 'c')[c] = JSProf.LRPE(38766, true);
                }, 12));
                if ("_stateClasses" in this) {
                    JSProf.LMC(38771, array, 'forEach').forEach(JSProf.LGD(38769, this, '_stateClasses')._stateClasses, JSProf.LNF(38770, function (c) {
                        delete classHash[c];
                    }, 12));
                }
                JSProf.LMC(38775, array, 'forEach').forEach(JSProf.LRE(38772, newStateClasses), JSProf.LNF(38774, function (c) {
                    JSProf.LPE(38773, classHash, 'c')[c] = JSProf.LRPE(38773, true);
                }, 12));
                var newClasses = JSProf.LNE(38776, [], 10);
                for (var c in JSProf.LRE(38777, classHash)) {
                    JSProf.LMC(38779, newClasses, 'push').push(JSProf.LRE(38778, c));
                }
                JSProf.LPD(38781, tn, 'className').className = JSProf.LRSP(38781, JSProf.LMC(38780, newClasses, 'join').join(" "));
                JSProf.LPD(38783, this, '_stateClasses')._stateClasses = JSProf.LRSP(38783, JSProf.LRE(38782, newStateClasses));
            }, 12),
            _subnodeCssMouseEvent: JSProf.LNF(38811, function (node, clazz, evt) {
                JSProf.LFD(38808, hover);
                JSProf.LFD(38809, active);
                JSProf.LFD(38810, focused);
                // summary:
                //		Handler for hover/active mouse event on widget's subnode
                if (JSProf.LGD(38786, this, 'disabled').disabled || JSProf.LGD(38787, this, 'readOnly').readOnly) {
                    return;
                }
                function hover(isHovering) {
                    JSProf.LMC(38791, domClass, 'toggle').toggle(JSProf.LRE(38788, node), JSProf.LRE(38789, clazz) + "Hover", JSProf.LRE(38790, isHovering));
                }
                function active(isActive) {
                    JSProf.LMC(38795, domClass, 'toggle').toggle(JSProf.LRE(38792, node), JSProf.LRE(38793, clazz) + "Active", JSProf.LRE(38794, isActive));
                }
                function focused(isFocused) {
                    JSProf.LMC(38799, domClass, 'toggle').toggle(JSProf.LRE(38796, node), JSProf.LRE(38797, clazz) + "Focused", JSProf.LRE(38798, isFocused));
                }
                switch (JSProf.LGD(38800, evt, 'type').type) {
                case "mouseover":
                case "MSPointerOver":
                case "pointerover":
                    JSProf.LFC(38801, hover, false)(true);
                    break;
                case "mouseout":
                case "MSPointerOut":
                case "pointerout":
                    JSProf.LFC(38802, hover, false)(false);
                    JSProf.LFC(38803, active, false)(false);
                    break;
                case "mousedown":
                case "touchstart":
                case "MSPointerDown":
                case "pointerdown":
                case "keydown":
                    JSProf.LFC(38804, active, false)(true);
                    break;
                case "mouseup":
                case "MSPointerUp":
                case "pointerup":
                case "dojotouchend":
                case "keyup":
                    JSProf.LFC(38805, active, false)(false);
                    break;
                case "focus":
                case "focusin":
                    JSProf.LFC(38806, focused, false)(true);
                    break;
                case "blur":
                case "focusout":
                    JSProf.LFC(38807, focused, false)(false);
                    break;
                }
            }, 12),
            _trackMouseState: JSProf.LNF(38814, function (node, clazz) {
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
                JSProf.LPD(38813, node, '_cssState')._cssState = JSProf.LRSP(38813, JSProf.LRE(38812, clazz));
            }, 12)
        }, 11));
    JSProf.LFC(38887, domReady, false)(JSProf.LNF(38886, function () {
        JSProf.LFD(38885, pointerHandler);
        // Document level listener to catch hover etc. events on widget root nodes and subnodes.
        // Note that when the mouse is moved quickly, a single onmouseenter event could signal that multiple widgets
        // have been hovered or unhovered (try test_Accordion.html)
        function pointerHandler(evt, target, relatedTarget) {
            // Handler for mouseover, mouseout, a11yclick.press and a11click.release events
            // Poor man's event propagation.  Don't propagate event to ancestors of evt.relatedTarget,
            // to avoid processing mouseout events moving from a widget's domNode to a descendant node;
            // such events shouldn't be interpreted as a mouseleave on the widget.
            if (JSProf.LRE(38817, relatedTarget) && JSProf.LMC(38820, dom, 'isDescendant').isDescendant(JSProf.LRE(38818, relatedTarget), JSProf.LRE(38819, target))) {
                return;
            }
            for (var node = JSProf.LRE(38821, target); JSProf.LRE(38822, node) && JSProf.LRE(38823, node) != JSProf.LRE(38824, relatedTarget); node = JSProf.LWR(38826, node, JSProf.LGD(38825, node, 'parentNode').parentNode)) {
                // Process any nodes with _cssState property.   They are generally widget root nodes,
                // but could also be sub-nodes within a widget
                if (JSProf.LGD(38827, node, '_cssState')._cssState) {
                    var widget = JSProf.LMC(38829, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LRE(38828, node));
                    if (JSProf.LRE(38830, widget)) {
                        if (JSProf.LRE(38831, node) == JSProf.LGD(38832, widget, 'domNode').domNode) {
                            // event on the widget's root node
                            JSProf.LMC(38834, widget, '_cssMouseEvent')._cssMouseEvent(JSProf.LRE(38833, evt));
                        } else {
                            // event on widget's sub-node
                            JSProf.LMC(38838, widget, '_subnodeCssMouseEvent')._subnodeCssMouseEvent(JSProf.LRE(38835, node), JSProf.LGD(38836, node, '_cssState')._cssState, JSProf.LRE(38837, evt));
                        }
                    }
                }
            }
        }
        var body = JSProf.LMC(38839, win, 'body').body(), activeNode;
        // Handle pointer related events (i.e. mouse or touch)
        JSProf.LFC(38847, on, false)(JSProf.LRE(38840, body), JSProf.LGD(38841, touch, 'over').over, JSProf.LNF(38846, function (evt) {
            // Using touch.over rather than mouseover mainly to ignore phantom mouse events on iOS.
            JSProf.LFC(38845, pointerHandler, false)(JSProf.LRE(38842, evt), JSProf.LGD(38843, evt, 'target').target, JSProf.LGD(38844, evt, 'relatedTarget').relatedTarget);
        }, 12));
        JSProf.LFC(38855, on, false)(JSProf.LRE(38848, body), JSProf.LGD(38849, touch, 'out').out, JSProf.LNF(38854, function (evt) {
            // Using touch.out rather than mouseout mainly to ignore phantom mouse events on iOS.
            JSProf.LFC(38853, pointerHandler, false)(JSProf.LRE(38850, evt), JSProf.LGD(38851, evt, 'target').target, JSProf.LGD(38852, evt, 'relatedTarget').relatedTarget);
        }, 12));
        JSProf.LFC(38864, on, false)(JSProf.LRE(38856, body), JSProf.LGD(38857, a11yclick, 'press').press, JSProf.LNF(38863, function (evt) {
            // Save the a11yclick.press target to reference when the a11yclick.release comes.
            activeNode = JSProf.LWR(38859, activeNode, JSProf.LGD(38858, evt, 'target').target);
            JSProf.LFC(38862, pointerHandler, false)(JSProf.LRE(38860, evt), JSProf.LRE(38861, activeNode));
        }, 12));
        JSProf.LFC(38871, on, false)(JSProf.LRE(38865, body), JSProf.LGD(38866, a11yclick, 'release').release, JSProf.LNF(38870, function (evt) {
            // The release event could come on a separate node than the press event, if for example user slid finger.
            // Reference activeNode to reset the state of the node that got state set in the a11yclick.press handler.
            JSProf.LFC(38869, pointerHandler, false)(JSProf.LRE(38867, evt), JSProf.LRE(38868, activeNode));
            activeNode = null;
        }, 12));
        // Track focus events on widget sub-nodes that have been registered via _trackMouseState().
        // However, don't track focus events on the widget root nodes, because focus is tracked via the
        // focus manager (and it's not really tracking focus, but rather tracking that focus is on one of the widget's
        // nodes or a subwidget's node or a popup node, etc.)
        // Remove for 2.0 (if focus CSS needed, just use :focus pseudo-selector).
        JSProf.LFC(38884, on, false)(JSProf.LRE(38872, body), "focusin, focusout", JSProf.LNF(38883, function (evt) {
            var node = JSProf.LGD(38873, evt, 'target').target;
            if (JSProf.LGD(38874, node, '_cssState')._cssState && !JSProf.LMC(38875, node, 'getAttribute').getAttribute("widgetId")) {
                var widget = JSProf.LMC(38877, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LRE(38876, node));
                if (JSProf.LRE(38878, widget)) {
                    JSProf.LMC(38882, widget, '_subnodeCssMouseEvent')._subnodeCssMouseEvent(JSProf.LRE(38879, node), JSProf.LGD(38880, node, '_cssState')._cssState, JSProf.LRE(38881, evt));
                }
            }
        }, 12));
    }, 12));
    return JSProf.LRE(38888, CssStateMixin);
}, 12));