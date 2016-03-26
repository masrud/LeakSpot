JSProf.LFC(36811, define, false)(JSProf.LNE(36581, [
    "dojo/aspect",
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/Evented",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/domReady",
    "dojo/sniff",
    "dojo/Stateful",
    "dojo/_base/window",
    "dojo/window",
    "./a11y",
    "./registry",
    "./main"
], 10), JSProf.LNF(36810, function (aspect, declare, dom, domAttr, domClass, domConstruct, Evented, lang, on, domReady, has, Stateful, win, winUtils, a11y, registry, dijit) {
    // module:
    //		dijit/focus
    // Time of the last focusin event
    var lastFocusin;
    // Time of the last touch/mousedown or focusin event
    var lastTouchOrFocusin;
    var FocusManager = JSProf.LFC(36778, declare, false)(JSProf.LNE(36584, [
            JSProf.LRE(36582, Stateful),
            JSProf.LRE(36583, Evented)
        ], 10), JSProf.LNE(36777, {
            curNode: null,
            activeStack: JSProf.LNE(36585, [], 10),
            constructor: JSProf.LNF(36602, function () {
                // Don't leave curNode/prevNode pointing to bogus elements
                var check = JSProf.LMC(36595, lang, 'hitch').hitch(this, JSProf.LNF(36594, function (node) {
                        if (JSProf.LMC(36588, dom, 'isDescendant').isDescendant(JSProf.LGD(36586, this, 'curNode').curNode, JSProf.LRE(36587, node))) {
                            JSProf.LMC(36589, this, 'set').set("curNode", null);
                        }
                        if (JSProf.LMC(36592, dom, 'isDescendant').isDescendant(JSProf.LGD(36590, this, 'prevNode').prevNode, JSProf.LRE(36591, node))) {
                            JSProf.LMC(36593, this, 'set').set("prevNode", null);
                        }
                    }, 12));
                JSProf.LMC(36598, aspect, 'before').before(JSProf.LRE(36596, domConstruct), "empty", JSProf.LRE(36597, check));
                JSProf.LMC(36601, aspect, 'before').before(JSProf.LRE(36599, domConstruct), "destroy", JSProf.LRE(36600, check));
            }, 12),
            registerIframe: JSProf.LNF(36606, function (iframe) {
                // summary:
                //		Registers listeners on the specified iframe so that any click
                //		or focus event on that iframe (or anything in it) is reported
                //		as a focus/click event on the `<iframe>` itself.
                // description:
                //		Currently only used by editor.
                // returns:
                //		Handle with remove() method to deregister.
                return JSProf.LMC(36605, this, 'registerWin').registerWin(JSProf.LGD(36603, iframe, 'contentWindow').contentWindow, JSProf.LRE(36604, iframe));
            }, 12),
            registerWin: JSProf.LNF(36650, function (targetWindow, effectiveNode) {
                // summary:
                //		Registers listeners on the specified window (either the main
                //		window or an iframe's window) to detect when the user has clicked somewhere
                //		or focused somewhere.
                // description:
                //		Users should call registerIframe() instead of this method.
                // targetWindow:
                //		If specified this is the window associated with the iframe,
                //		i.e. iframe.contentWindow.
                // effectiveNode:
                //		If specified, report any focus events inside targetWindow as
                //		an event on effectiveNode, rather than on evt.target.
                // returns:
                //		Handle with remove() method to deregister.
                // TODO: make this function private in 2.0; Editor/users should call registerIframe(),
                // Listen for blur and focus events on targetWindow's document.
                var _this = this, body = JSProf.LGD(36607, targetWindow, 'document').document && JSProf.LGD(36608, targetWindow.document, 'body').body;
                if (JSProf.LRE(36609, body)) {
                    // Listen for touches or mousedowns... could also use dojo/touch.press here.
                    var event = JSProf.LFC(36610, has, false)("pointer-events") ? "pointerdown" : JSProf.LFC(36611, has, false)("MSPointer") ? "MSPointerDown" : JSProf.LFC(36612, has, false)("touch-events") ? "mousedown, touchstart" : "mousedown";
                    var mdh = JSProf.LFC(36622, on, false)(JSProf.LGD(36613, targetWindow, 'document').document, JSProf.LRE(36614, event), JSProf.LNF(36621, function (evt) {
                            // workaround weird IE bug where the click is on an orphaned node
                            // (first time clicking a Select/DropDownButton inside a TooltipDialog).
                            // actually, strangely this is happening on latest chrome too.
                            if (JSProf.LRE(36615, evt) && JSProf.LGD(36616, evt, 'target').target && JSProf.LGD(36617, evt.target, 'parentNode').parentNode == null) {
                                return;
                            }
                            JSProf.LMC(36620, _this, '_onTouchNode')._onTouchNode(JSProf.LRE(36618, effectiveNode) || JSProf.LGD(36619, evt, 'target').target, "mouse");
                        }, 12));
                    var fih = JSProf.LFC(36636, on, false)(JSProf.LRE(36623, body), 'focusin', JSProf.LNF(36635, function (evt) {
                            // When you refocus the browser window, IE gives an event with an empty srcElement
                            if (!JSProf.LGD(36624, evt.target, 'tagName').tagName) {
                                return;
                            }
                            // IE reports that nodes like <body> have gotten focus, even though they have tabIndex=-1,
                            // ignore those events
                            var tag = evt.target.tagName.toLowerCase();
                            if (JSProf.LRE(36625, tag) == "#document" || JSProf.LRE(36626, tag) == "body") {
                                return;
                            }
                            if (JSProf.LMC(36628, a11y, 'isFocusable').isFocusable(JSProf.LGD(36627, evt, 'target').target)) {
                                JSProf.LMC(36631, _this, '_onFocusNode')._onFocusNode(JSProf.LRE(36629, effectiveNode) || JSProf.LGD(36630, evt, 'target').target);
                            } else {
                                // Previous code called _onTouchNode() for any activate event on a non-focusable node.   Can
                                // probably just ignore such an event as it will be handled by onmousedown handler above, but
                                // leaving the code for now.
                                JSProf.LMC(36634, _this, '_onTouchNode')._onTouchNode(JSProf.LRE(36632, effectiveNode) || JSProf.LGD(36633, evt, 'target').target);
                            }
                        }, 12));
                    var foh = JSProf.LFC(36642, on, false)(JSProf.LRE(36637, body), 'focusout', JSProf.LNF(36641, function (evt) {
                            JSProf.LMC(36640, _this, '_onBlurNode')._onBlurNode(JSProf.LRE(36638, effectiveNode) || JSProf.LGD(36639, evt, 'target').target);
                        }, 12));
                    return JSProf.LNE(36649, {
                        remove: JSProf.LNF(36648, function () {
                            JSProf.LMC(36643, mdh, 'remove').remove();
                            JSProf.LMC(36644, fih, 'remove').remove();
                            JSProf.LMC(36645, foh, 'remove').remove();
                            mdh = JSProf.LWR(36647, mdh, fih = JSProf.LWR(36646, fih, foh = null));
                            body = null;    // prevent memory leak (apparent circular reference via closure)
                        }, 12)
                    }, 11);
                }
            }, 12),
            _onBlurNode: JSProf.LNF(36675, function (node) {
                // summary:
                //		Called when focus leaves a node.
                //		Usually ignored, _unless_ it *isn't* followed by touching another node,
                //		which indicates that we tabbed off the last field on the page,
                //		in which case every widget is marked inactive
                var now = JSProf.LMC(36653, JSProf.LNE(36652, new (JSProf.LFC(36651, Date, true))(), 'Date'), 'getTime').getTime();
                // IE9+ and chrome have a problem where focusout events come after the corresponding focusin event.
                // For chrome problem see https://bugs.dojotoolkit.org/ticket/17668.
                // IE problem happens when moving focus from the Editor's <iframe> to a normal DOMNode.
                if (JSProf.LRE(36654, now) < JSProf.LRE(36655, lastFocusin) + 100) {
                    return;
                }
                // If the blur event isn't followed by a focus event, it means the user clicked on something unfocusable,
                // so clear focus.
                if (JSProf.LGD(36656, this, '_clearFocusTimer')._clearFocusTimer) {
                    JSProf.LFC(36658, clearTimeout, false)(JSProf.LGD(36657, this, '_clearFocusTimer')._clearFocusTimer);
                }
                JSProf.LPD(36664, this, '_clearFocusTimer')._clearFocusTimer = JSProf.LRSP(36664, setTimeout(JSProf.LMC(36663, lang, 'hitch').hitch(this, JSProf.LNF(36662, function () {
                    JSProf.LMC(36660, this, 'set').set("prevNode", JSProf.LGD(36659, this, 'curNode').curNode);
                    JSProf.LMC(36661, this, 'set').set("curNode", null);
                }, 12)), 0));
                // Unset timer to zero-out widget stack; we'll reset it below if appropriate.
                if (JSProf.LGD(36665, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer) {
                    JSProf.LFC(36667, clearTimeout, false)(JSProf.LGD(36666, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer);
                }
                if (JSProf.LRE(36668, now) < JSProf.LRE(36669, lastTouchOrFocusin) + 100) {
                    // This blur event is coming late (after the call to _onTouchNode() rather than before.
                    // So let _onTouchNode() handle setting the widget stack.
                    // See https://bugs.dojotoolkit.org/ticket/17668
                    return;
                }
                // If the blur event isn't followed (or preceded) by a focus or touch event then mark all widgets as inactive.
                JSProf.LPD(36674, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer = JSProf.LRSP(36674, setTimeout(JSProf.LMC(36673, lang, 'hitch').hitch(this, JSProf.LNF(36672, function () {
                    delete this._clearActiveWidgetsTimer;
                    JSProf.LMC(36671, this, '_setStack')._setStack(JSProf.LNE(36670, [], 10));
                }, 12)), 0));
            }, 12),
            _onTouchNode: JSProf.LNF(36717, function (node, by) {
                // summary:
                //		Callback when node is focused or touched.
                //		Note that _onFocusNode() calls _onTouchNode().
                // node:
                //		The node that was touched.
                // by:
                //		"mouse" if the focus/touch was caused by a mouse down event
                // Keep track of time of last focusin or touch event.
                lastTouchOrFocusin = JSProf.LWR(36679, lastTouchOrFocusin, JSProf.LMC(36678, JSProf.LNE(36677, new (JSProf.LFC(36676, Date, true))(), 'Date'), 'getTime').getTime());
                if (JSProf.LGD(36680, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer) {
                    // forget the recent blur event
                    JSProf.LFC(36682, clearTimeout, false)(JSProf.LGD(36681, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer);
                    delete this._clearActiveWidgetsTimer;
                }
                // if the click occurred on the scrollbar of a dropdown, treat it as a click on the dropdown,
                // even though the scrollbar is technically on the popup wrapper (see #10631)
                if (JSProf.LMC(36684, domClass, 'contains').contains(JSProf.LRE(36683, node), "dijitPopup")) {
                    node = JSProf.LWR(36686, node, JSProf.LGD(36685, node, 'firstChild').firstChild);
                }
                // compute stack of active widgets (ex: ComboButton --> Menu --> MenuItem)
                var newStack = JSProf.LNE(36687, [], 10);
                try {
                    while (JSProf.LRE(36688, node)) {
                        var popupParent = JSProf.LMC(36690, domAttr, 'get').get(JSProf.LRE(36689, node), "dijitPopupParent");
                        if (JSProf.LRE(36691, popupParent)) {
                            node = JSProf.LWR(36695, node, JSProf.LGD(36694, JSProf.LMC(36693, registry, 'byId').byId(JSProf.LRE(36692, popupParent)), 'domNode').domNode);
                        } else if (JSProf.LGD(36696, node, 'tagName').tagName && node.tagName.toLowerCase() == "body") {
                            // is this the root of the document or just the root of an iframe?
                            if (JSProf.LRE(36697, node) === JSProf.LMC(36698, win, 'body').body()) {
                                // node is the root of the main document
                                break;
                            }
                            // otherwise, find the iframe this node refers to (can't access it via parentNode,
                            // need to do this trick instead). window.frameElement is supported in IE/FF/Webkit
                            node = JSProf.LWR(36702, node, JSProf.LGD(36701, JSProf.LMC(36700, winUtils, 'get').get(JSProf.LGD(36699, node, 'ownerDocument').ownerDocument), 'frameElement').frameElement);
                        } else {
                            // if this node is the root node of a widget, then add widget id to stack,
                            // except ignore clicks on disabled widgets (actually focusing a disabled widget still works,
                            // to support MenuItem)
                            var id = JSProf.LGD(36703, node, 'getAttribute').getAttribute && JSProf.LMC(36704, node, 'getAttribute').getAttribute("widgetId"), widget = JSProf.LRE(36705, id) && JSProf.LMC(36707, registry, 'byId').byId(JSProf.LRE(36706, id));
                            if (JSProf.LRE(36708, widget) && !(JSProf.LRE(36709, by) == "mouse" && JSProf.LMC(36710, widget, 'get').get("disabled"))) {
                                newStack.unshift(JSProf.LRE(36711, id));
                            }
                            node = JSProf.LWR(36713, node, JSProf.LGD(36712, node, 'parentNode').parentNode);
                        }
                    }
                } catch (e) {
                }
                JSProf.LMC(36716, this, '_setStack')._setStack(JSProf.LRE(36714, newStack), JSProf.LRE(36715, by));
            }, 12),
            _onFocusNode: JSProf.LNF(36735, function (node) {
                // summary:
                //		Callback when node is focused
                if (!JSProf.LRE(36718, node)) {
                    return;
                }
                if (JSProf.LGD(36719, node, 'nodeType').nodeType == 9) {
                    // Ignore focus events on the document itself.  This is here so that
                    // (for example) clicking the up/down arrows of a spinner
                    // (which don't get focus) won't cause that widget to blur. (FF issue)
                    return;
                }
                // Keep track of time of last focusin event.
                lastFocusin = JSProf.LWR(36723, lastFocusin, JSProf.LMC(36722, JSProf.LNE(36721, new (JSProf.LFC(36720, Date, true))(), 'Date'), 'getTime').getTime());
                // There was probably a blur event right before this event, but since we have a new focus,
                // forget about the blur
                if (JSProf.LGD(36724, this, '_clearFocusTimer')._clearFocusTimer) {
                    JSProf.LFC(36726, clearTimeout, false)(JSProf.LGD(36725, this, '_clearFocusTimer')._clearFocusTimer);
                    delete this._clearFocusTimer;
                }
                JSProf.LMC(36728, this, '_onTouchNode')._onTouchNode(JSProf.LRE(36727, node));
                if (JSProf.LRE(36729, node) == JSProf.LGD(36730, this, 'curNode').curNode) {
                    return;
                }
                JSProf.LMC(36732, this, 'set').set("prevNode", JSProf.LGD(36731, this, 'curNode').curNode);
                JSProf.LMC(36734, this, 'set').set("curNode", JSProf.LRE(36733, node));
            }, 12),
            _setStack: JSProf.LNF(36773, function (newStack, by) {
                // summary:
                //		The stack of active widgets has changed.  Send out appropriate events and records new stack.
                // newStack:
                //		array of widget id's, starting from the top (outermost) widget
                // by:
                //		"mouse" if the focus/touch was caused by a mouse down event
                var oldStack = JSProf.LGD(36736, this, 'activeStack').activeStack, lastOldIdx = JSProf.LGD(36737, oldStack, 'length').length - 1, lastNewIdx = JSProf.LGD(36738, newStack, 'length').length - 1;
                if (JSProf.LGE(36739, newStack, 'lastNewIdx')[lastNewIdx] == JSProf.LGE(36740, oldStack, 'lastOldIdx')[lastOldIdx]) {
                    // no changes, return now to avoid spurious notifications about changes to activeStack
                    return;
                }
                JSProf.LMC(36742, this, 'set').set("activeStack", JSProf.LRE(36741, newStack));
                var widget, i;
                // for all elements that have gone out of focus, set focused=false
                for (i = JSProf.LWR(36744, i, JSProf.LRE(36743, lastOldIdx)); JSProf.LRE(36745, i) >= 0 && JSProf.LGE(36746, oldStack, 'i')[i] != JSProf.LGE(36747, newStack, 'i')[i]; i--) {
                    widget = JSProf.LWR(36750, widget, JSProf.LMC(36749, registry, 'byId').byId(JSProf.LGE(36748, oldStack, 'i')[i]));
                    if (JSProf.LRE(36751, widget)) {
                        JSProf.LPD(36752, widget, '_hasBeenBlurred')._hasBeenBlurred = JSProf.LRSP(36752, true);
                        // TODO: used by form widgets, should be moved there
                        JSProf.LMC(36753, widget, 'set').set("focused", false);
                        if (JSProf.LGD(36754, widget, '_focusManager')._focusManager == this) {
                            JSProf.LMC(36756, widget, '_onBlur')._onBlur(JSProf.LRE(36755, by));
                        }
                        JSProf.LMC(36759, this, 'emit').emit("widget-blur", JSProf.LRE(36757, widget), JSProf.LRE(36758, by));
                    }
                }
                // for all element that have come into focus, set focused=true
                for (i++; JSProf.LRE(36760, i) <= JSProf.LRE(36761, lastNewIdx); i++) {
                    widget = JSProf.LWR(36764, widget, JSProf.LMC(36763, registry, 'byId').byId(JSProf.LGE(36762, newStack, 'i')[i]));
                    if (JSProf.LRE(36765, widget)) {
                        JSProf.LMC(36766, widget, 'set').set("focused", true);
                        if (JSProf.LGD(36767, widget, '_focusManager')._focusManager == this) {
                            JSProf.LMC(36769, widget, '_onFocus')._onFocus(JSProf.LRE(36768, by));
                        }
                        JSProf.LMC(36772, this, 'emit').emit("widget-focus", JSProf.LRE(36770, widget), JSProf.LRE(36771, by));
                    }
                }
            }, 12),
            focus: JSProf.LNF(36776, function (node) {
                // summary:
                //		Focus the specified node, suppressing errors if they occur
                if (JSProf.LRE(36774, node)) {
                    try {
                        JSProf.LMC(36775, node, 'focus').focus();
                    } catch (e) {
                    }
                }
            }, 12)
        }, 11));
    var singleton = JSProf.LNE(36780, new (JSProf.LFC(36779, FocusManager, true))(), 'FocusManager');
    // register top window and all the iframes it contains
    JSProf.LFC(36791, domReady, false)(JSProf.LNF(36790, function () {
        var handle = JSProf.LMC(36783, singleton, 'registerWin').registerWin(JSProf.LMC(36782, winUtils, 'get').get(JSProf.LRU(36781, typeof document === 'undefined' ? undefined : document)));
        if (JSProf.LFC(36784, has, false)("ie")) {
            JSProf.LFC(36789, on, false)(JSProf.LRU(36785, typeof window === 'undefined' ? undefined : window), "unload", JSProf.LNF(36788, function () {
                if (JSProf.LRE(36786, handle)) {
                    // because this gets called twice when doh.robot is running
                    JSProf.LMC(36787, handle, 'remove').remove();
                    handle = null;
                }
            }, 12));
        }
    }, 12));
    // Setup dijit.focus as a pointer to the singleton but also (for backwards compatibility)
    // as a function to set focus.   Remove for 2.0.
    JSProf.LPD(36795, dijit, 'focus').focus = JSProf.LRSP(36795, JSProf.LNF(36794, function (node) {
        JSProf.LMC(36793, singleton, 'focus').focus(JSProf.LRE(36792, node));    // indirection here allows dijit/_base/focus.js to override behavior
    }, 12));
    for (var attr in JSProf.LRE(36796, singleton)) {
        if (!JSProf.LMC(36798, /^_/, 'test').test(JSProf.LRE(36797, attr))) {
            JSProf.LPE(36804, dijit.focus, 'attr')[attr] = JSProf.LRPE(36804, typeof JSProf.LGE(36799, singleton, 'attr')[attr] == "function" ? JSProf.LMC(36802, lang, 'hitch').hitch(JSProf.LRE(36800, singleton), JSProf.LRE(36801, attr)) : JSProf.LGE(36803, singleton, 'attr')[attr]);
        }
    }
    JSProf.LMC(36808, singleton, 'watch').watch(JSProf.LNF(36807, function (attr, oldVal, newVal) {
        JSProf.LPE(36806, dijit.focus, 'attr')[attr] = JSProf.LRPE(36806, JSProf.LRE(36805, newVal));
    }, 12));
    return JSProf.LRE(36809, singleton);
}, 12));