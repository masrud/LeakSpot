JSProf.LFC(36653, define, false)(JSProf.LNE(36423, [
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
], 10), JSProf.LNF(36652, function (aspect, declare, dom, domAttr, domClass, domConstruct, Evented, lang, on, domReady, has, Stateful, win, winUtils, a11y, registry, dijit) {
    // module:
    //		dijit/focus
    // Time of the last focusin event
    var lastFocusin;
    // Time of the last touch/mousedown or focusin event
    var lastTouchOrFocusin;
    var FocusManager = JSProf.LFC(36620, declare, false)(JSProf.LNE(36426, [
            JSProf.LRE(36424, Stateful),
            JSProf.LRE(36425, Evented)
        ], 10), JSProf.LNE(36619, {
            curNode: null,
            activeStack: JSProf.LNE(36427, [], 10),
            constructor: JSProf.LNF(36444, function () {
                // Don't leave curNode/prevNode pointing to bogus elements
                var check = JSProf.LMC(36437, lang, 'hitch').hitch(this, JSProf.LNF(36436, function (node) {
                        if (JSProf.LMC(36430, dom, 'isDescendant').isDescendant(JSProf.LGD(36428, this, 'curNode').curNode, JSProf.LRE(36429, node))) {
                            JSProf.LMC(36431, this, 'set').set("curNode", null);
                        }
                        if (JSProf.LMC(36434, dom, 'isDescendant').isDescendant(JSProf.LGD(36432, this, 'prevNode').prevNode, JSProf.LRE(36433, node))) {
                            JSProf.LMC(36435, this, 'set').set("prevNode", null);
                        }
                    }, 12));
                JSProf.LMC(36440, aspect, 'before').before(JSProf.LRE(36438, domConstruct), "empty", JSProf.LRE(36439, check));
                JSProf.LMC(36443, aspect, 'before').before(JSProf.LRE(36441, domConstruct), "destroy", JSProf.LRE(36442, check));
            }, 12),
            registerIframe: JSProf.LNF(36448, function (iframe) {
                // summary:
                //		Registers listeners on the specified iframe so that any click
                //		or focus event on that iframe (or anything in it) is reported
                //		as a focus/click event on the `<iframe>` itself.
                // description:
                //		Currently only used by editor.
                // returns:
                //		Handle with remove() method to deregister.
                return JSProf.LMC(36447, this, 'registerWin').registerWin(JSProf.LGD(36445, iframe, 'contentWindow').contentWindow, JSProf.LRE(36446, iframe));
            }, 12),
            registerWin: JSProf.LNF(36492, function (targetWindow, effectiveNode) {
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
                var _this = this, body = JSProf.LGD(36449, targetWindow, 'document').document && JSProf.LGD(36450, targetWindow.document, 'body').body;
                if (JSProf.LRE(36451, body)) {
                    // Listen for touches or mousedowns... could also use dojo/touch.press here.
                    var event = JSProf.LFC(36452, has, false)("pointer-events") ? "pointerdown" : JSProf.LFC(36453, has, false)("MSPointer") ? "MSPointerDown" : JSProf.LFC(36454, has, false)("touch-events") ? "mousedown, touchstart" : "mousedown";
                    var mdh = JSProf.LFC(36464, on, false)(JSProf.LGD(36455, targetWindow, 'document').document, JSProf.LRE(36456, event), JSProf.LNF(36463, function (evt) {
                            // workaround weird IE bug where the click is on an orphaned node
                            // (first time clicking a Select/DropDownButton inside a TooltipDialog).
                            // actually, strangely this is happening on latest chrome too.
                            if (JSProf.LRE(36457, evt) && JSProf.LGD(36458, evt, 'target').target && JSProf.LGD(36459, evt.target, 'parentNode').parentNode == null) {
                                return;
                            }
                            JSProf.LMC(36462, _this, '_onTouchNode')._onTouchNode(JSProf.LRE(36460, effectiveNode) || JSProf.LGD(36461, evt, 'target').target, "mouse");
                        }, 12));
                    var fih = JSProf.LFC(36478, on, false)(JSProf.LRE(36465, body), 'focusin', JSProf.LNF(36477, function (evt) {
                            // When you refocus the browser window, IE gives an event with an empty srcElement
                            if (!JSProf.LGD(36466, evt.target, 'tagName').tagName) {
                                return;
                            }
                            // IE reports that nodes like <body> have gotten focus, even though they have tabIndex=-1,
                            // ignore those events
                            var tag = evt.target.tagName.toLowerCase();
                            if (JSProf.LRE(36467, tag) == "#document" || JSProf.LRE(36468, tag) == "body") {
                                return;
                            }
                            if (JSProf.LMC(36470, a11y, 'isFocusable').isFocusable(JSProf.LGD(36469, evt, 'target').target)) {
                                JSProf.LMC(36473, _this, '_onFocusNode')._onFocusNode(JSProf.LRE(36471, effectiveNode) || JSProf.LGD(36472, evt, 'target').target);
                            } else {
                                // Previous code called _onTouchNode() for any activate event on a non-focusable node.   Can
                                // probably just ignore such an event as it will be handled by onmousedown handler above, but
                                // leaving the code for now.
                                JSProf.LMC(36476, _this, '_onTouchNode')._onTouchNode(JSProf.LRE(36474, effectiveNode) || JSProf.LGD(36475, evt, 'target').target);
                            }
                        }, 12));
                    var foh = JSProf.LFC(36484, on, false)(JSProf.LRE(36479, body), 'focusout', JSProf.LNF(36483, function (evt) {
                            JSProf.LMC(36482, _this, '_onBlurNode')._onBlurNode(JSProf.LRE(36480, effectiveNode) || JSProf.LGD(36481, evt, 'target').target);
                        }, 12));
                    return JSProf.LNE(36491, {
                        remove: JSProf.LNF(36490, function () {
                            JSProf.LMC(36485, mdh, 'remove').remove();
                            JSProf.LMC(36486, fih, 'remove').remove();
                            JSProf.LMC(36487, foh, 'remove').remove();
                            mdh = JSProf.LWR(36489, mdh, fih = JSProf.LWR(36488, fih, foh = null));
                            body = null;    // prevent memory leak (apparent circular reference via closure)
                        }, 12)
                    }, 11);
                }
            }, 12),
            _onBlurNode: JSProf.LNF(36517, function (node) {
                // summary:
                //		Called when focus leaves a node.
                //		Usually ignored, _unless_ it *isn't* followed by touching another node,
                //		which indicates that we tabbed off the last field on the page,
                //		in which case every widget is marked inactive
                var now = JSProf.LMC(36495, JSProf.LNE(36494, new (JSProf.LFC(36493, Date, true))(), 'Date'), 'getTime').getTime();
                // IE9+ and chrome have a problem where focusout events come after the corresponding focusin event.
                // For chrome problem see https://bugs.dojotoolkit.org/ticket/17668.
                // IE problem happens when moving focus from the Editor's <iframe> to a normal DOMNode.
                if (JSProf.LRE(36496, now) < JSProf.LRE(36497, lastFocusin) + 100) {
                    return;
                }
                // If the blur event isn't followed by a focus event, it means the user clicked on something unfocusable,
                // so clear focus.
                if (JSProf.LGD(36498, this, '_clearFocusTimer')._clearFocusTimer) {
                    JSProf.LFC(36500, clearTimeout, false)(JSProf.LGD(36499, this, '_clearFocusTimer')._clearFocusTimer);
                }
                JSProf.LPD(36506, this, '_clearFocusTimer')._clearFocusTimer = JSProf.LRSP(36506, setTimeout(JSProf.LMC(36505, lang, 'hitch').hitch(this, JSProf.LNF(36504, function () {
                    JSProf.LMC(36502, this, 'set').set("prevNode", JSProf.LGD(36501, this, 'curNode').curNode);
                    JSProf.LMC(36503, this, 'set').set("curNode", null);
                }, 12)), 0));
                // Unset timer to zero-out widget stack; we'll reset it below if appropriate.
                if (JSProf.LGD(36507, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer) {
                    JSProf.LFC(36509, clearTimeout, false)(JSProf.LGD(36508, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer);
                }
                if (JSProf.LRE(36510, now) < JSProf.LRE(36511, lastTouchOrFocusin) + 100) {
                    // This blur event is coming late (after the call to _onTouchNode() rather than before.
                    // So let _onTouchNode() handle setting the widget stack.
                    // See https://bugs.dojotoolkit.org/ticket/17668
                    return;
                }
                // If the blur event isn't followed (or preceded) by a focus or touch event then mark all widgets as inactive.
                JSProf.LPD(36516, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer = JSProf.LRSP(36516, setTimeout(JSProf.LMC(36515, lang, 'hitch').hitch(this, JSProf.LNF(36514, function () {
                    delete this._clearActiveWidgetsTimer;
                    JSProf.LMC(36513, this, '_setStack')._setStack(JSProf.LNE(36512, [], 10));
                }, 12)), 0));
            }, 12),
            _onTouchNode: JSProf.LNF(36559, function (node, by) {
                // summary:
                //		Callback when node is focused or touched.
                //		Note that _onFocusNode() calls _onTouchNode().
                // node:
                //		The node that was touched.
                // by:
                //		"mouse" if the focus/touch was caused by a mouse down event
                // Keep track of time of last focusin or touch event.
                lastTouchOrFocusin = JSProf.LWR(36521, lastTouchOrFocusin, JSProf.LMC(36520, JSProf.LNE(36519, new (JSProf.LFC(36518, Date, true))(), 'Date'), 'getTime').getTime());
                if (JSProf.LGD(36522, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer) {
                    // forget the recent blur event
                    JSProf.LFC(36524, clearTimeout, false)(JSProf.LGD(36523, this, '_clearActiveWidgetsTimer')._clearActiveWidgetsTimer);
                    delete this._clearActiveWidgetsTimer;
                }
                // if the click occurred on the scrollbar of a dropdown, treat it as a click on the dropdown,
                // even though the scrollbar is technically on the popup wrapper (see #10631)
                if (JSProf.LMC(36526, domClass, 'contains').contains(JSProf.LRE(36525, node), "dijitPopup")) {
                    node = JSProf.LWR(36528, node, JSProf.LGD(36527, node, 'firstChild').firstChild);
                }
                // compute stack of active widgets (ex: ComboButton --> Menu --> MenuItem)
                var newStack = JSProf.LNE(36529, [], 10);
                try {
                    while (JSProf.LRE(36530, node)) {
                        var popupParent = JSProf.LMC(36532, domAttr, 'get').get(JSProf.LRE(36531, node), "dijitPopupParent");
                        if (JSProf.LRE(36533, popupParent)) {
                            node = JSProf.LWR(36537, node, JSProf.LGD(36536, JSProf.LMC(36535, registry, 'byId').byId(JSProf.LRE(36534, popupParent)), 'domNode').domNode);
                        } else if (JSProf.LGD(36538, node, 'tagName').tagName && node.tagName.toLowerCase() == "body") {
                            // is this the root of the document or just the root of an iframe?
                            if (JSProf.LRE(36539, node) === JSProf.LMC(36540, win, 'body').body()) {
                                // node is the root of the main document
                                break;
                            }
                            // otherwise, find the iframe this node refers to (can't access it via parentNode,
                            // need to do this trick instead). window.frameElement is supported in IE/FF/Webkit
                            node = JSProf.LWR(36544, node, JSProf.LGD(36543, JSProf.LMC(36542, winUtils, 'get').get(JSProf.LGD(36541, node, 'ownerDocument').ownerDocument), 'frameElement').frameElement);
                        } else {
                            // if this node is the root node of a widget, then add widget id to stack,
                            // except ignore clicks on disabled widgets (actually focusing a disabled widget still works,
                            // to support MenuItem)
                            var id = JSProf.LGD(36545, node, 'getAttribute').getAttribute && JSProf.LMC(36546, node, 'getAttribute').getAttribute("widgetId"), widget = JSProf.LRE(36547, id) && JSProf.LMC(36549, registry, 'byId').byId(JSProf.LRE(36548, id));
                            if (JSProf.LRE(36550, widget) && !(JSProf.LRE(36551, by) == "mouse" && JSProf.LMC(36552, widget, 'get').get("disabled"))) {
                                newStack.unshift(JSProf.LRE(36553, id));
                            }
                            node = JSProf.LWR(36555, node, JSProf.LGD(36554, node, 'parentNode').parentNode);
                        }
                    }
                } catch (e) {
                }
                JSProf.LMC(36558, this, '_setStack')._setStack(JSProf.LRE(36556, newStack), JSProf.LRE(36557, by));
            }, 12),
            _onFocusNode: JSProf.LNF(36577, function (node) {
                // summary:
                //		Callback when node is focused
                if (!JSProf.LRE(36560, node)) {
                    return;
                }
                if (JSProf.LGD(36561, node, 'nodeType').nodeType == 9) {
                    // Ignore focus events on the document itself.  This is here so that
                    // (for example) clicking the up/down arrows of a spinner
                    // (which don't get focus) won't cause that widget to blur. (FF issue)
                    return;
                }
                // Keep track of time of last focusin event.
                lastFocusin = JSProf.LWR(36565, lastFocusin, JSProf.LMC(36564, JSProf.LNE(36563, new (JSProf.LFC(36562, Date, true))(), 'Date'), 'getTime').getTime());
                // There was probably a blur event right before this event, but since we have a new focus,
                // forget about the blur
                if (JSProf.LGD(36566, this, '_clearFocusTimer')._clearFocusTimer) {
                    JSProf.LFC(36568, clearTimeout, false)(JSProf.LGD(36567, this, '_clearFocusTimer')._clearFocusTimer);
                    delete this._clearFocusTimer;
                }
                JSProf.LMC(36570, this, '_onTouchNode')._onTouchNode(JSProf.LRE(36569, node));
                if (JSProf.LRE(36571, node) == JSProf.LGD(36572, this, 'curNode').curNode) {
                    return;
                }
                JSProf.LMC(36574, this, 'set').set("prevNode", JSProf.LGD(36573, this, 'curNode').curNode);
                JSProf.LMC(36576, this, 'set').set("curNode", JSProf.LRE(36575, node));
            }, 12),
            _setStack: JSProf.LNF(36615, function (newStack, by) {
                // summary:
                //		The stack of active widgets has changed.  Send out appropriate events and records new stack.
                // newStack:
                //		array of widget id's, starting from the top (outermost) widget
                // by:
                //		"mouse" if the focus/touch was caused by a mouse down event
                var oldStack = JSProf.LGD(36578, this, 'activeStack').activeStack, lastOldIdx = JSProf.LGD(36579, oldStack, 'length').length - 1, lastNewIdx = JSProf.LGD(36580, newStack, 'length').length - 1;
                if (JSProf.LGE(36581, newStack, 'lastNewIdx')[lastNewIdx] == JSProf.LGE(36582, oldStack, 'lastOldIdx')[lastOldIdx]) {
                    // no changes, return now to avoid spurious notifications about changes to activeStack
                    return;
                }
                JSProf.LMC(36584, this, 'set').set("activeStack", JSProf.LRE(36583, newStack));
                var widget, i;
                // for all elements that have gone out of focus, set focused=false
                for (i = JSProf.LWR(36586, i, JSProf.LRE(36585, lastOldIdx)); JSProf.LRE(36587, i) >= 0 && JSProf.LGE(36588, oldStack, 'i')[i] != JSProf.LGE(36589, newStack, 'i')[i]; i--) {
                    widget = JSProf.LWR(36592, widget, JSProf.LMC(36591, registry, 'byId').byId(JSProf.LGE(36590, oldStack, 'i')[i]));
                    if (JSProf.LRE(36593, widget)) {
                        JSProf.LPD(36594, widget, '_hasBeenBlurred')._hasBeenBlurred = JSProf.LRSP(36594, true);
                        // TODO: used by form widgets, should be moved there
                        JSProf.LMC(36595, widget, 'set').set("focused", false);
                        if (JSProf.LGD(36596, widget, '_focusManager')._focusManager == this) {
                            JSProf.LMC(36598, widget, '_onBlur')._onBlur(JSProf.LRE(36597, by));
                        }
                        JSProf.LMC(36601, this, 'emit').emit("widget-blur", JSProf.LRE(36599, widget), JSProf.LRE(36600, by));
                    }
                }
                // for all element that have come into focus, set focused=true
                for (i++; JSProf.LRE(36602, i) <= JSProf.LRE(36603, lastNewIdx); i++) {
                    widget = JSProf.LWR(36606, widget, JSProf.LMC(36605, registry, 'byId').byId(JSProf.LGE(36604, newStack, 'i')[i]));
                    if (JSProf.LRE(36607, widget)) {
                        JSProf.LMC(36608, widget, 'set').set("focused", true);
                        if (JSProf.LGD(36609, widget, '_focusManager')._focusManager == this) {
                            JSProf.LMC(36611, widget, '_onFocus')._onFocus(JSProf.LRE(36610, by));
                        }
                        JSProf.LMC(36614, this, 'emit').emit("widget-focus", JSProf.LRE(36612, widget), JSProf.LRE(36613, by));
                    }
                }
            }, 12),
            focus: JSProf.LNF(36618, function (node) {
                // summary:
                //		Focus the specified node, suppressing errors if they occur
                if (JSProf.LRE(36616, node)) {
                    try {
                        JSProf.LMC(36617, node, 'focus').focus();
                    } catch (e) {
                    }
                }
            }, 12)
        }, 11));
    var singleton = JSProf.LNE(36622, new (JSProf.LFC(36621, FocusManager, true))(), 'FocusManager');
    // register top window and all the iframes it contains
    JSProf.LFC(36633, domReady, false)(JSProf.LNF(36632, function () {
        var handle = JSProf.LMC(36625, singleton, 'registerWin').registerWin(JSProf.LMC(36624, winUtils, 'get').get(JSProf.LRU(36623, typeof document === 'undefined' ? undefined : document)));
        if (JSProf.LFC(36626, has, false)("ie")) {
            JSProf.LFC(36631, on, false)(JSProf.LRU(36627, typeof window === 'undefined' ? undefined : window), "unload", JSProf.LNF(36630, function () {
                if (JSProf.LRE(36628, handle)) {
                    // because this gets called twice when doh.robot is running
                    JSProf.LMC(36629, handle, 'remove').remove();
                    handle = null;
                }
            }, 12));
        }
    }, 12));
    // Setup dijit.focus as a pointer to the singleton but also (for backwards compatibility)
    // as a function to set focus.   Remove for 2.0.
    JSProf.LPD(36637, dijit, 'focus').focus = JSProf.LRSP(36637, JSProf.LNF(36636, function (node) {
        JSProf.LMC(36635, singleton, 'focus').focus(JSProf.LRE(36634, node));    // indirection here allows dijit/_base/focus.js to override behavior
    }, 12));
    for (var attr in JSProf.LRE(36638, singleton)) {
        if (!JSProf.LMC(36640, /^_/, 'test').test(JSProf.LRE(36639, attr))) {
            JSProf.LPE(36646, dijit.focus, 'attr')[attr] = JSProf.LRPE(36646, typeof JSProf.LGE(36641, singleton, 'attr')[attr] == "function" ? JSProf.LMC(36644, lang, 'hitch').hitch(JSProf.LRE(36642, singleton), JSProf.LRE(36643, attr)) : JSProf.LGE(36645, singleton, 'attr')[attr]);
        }
    }
    JSProf.LMC(36650, singleton, 'watch').watch(JSProf.LNF(36649, function (attr, oldVal, newVal) {
        JSProf.LPE(36648, dijit.focus, 'attr')[attr] = JSProf.LRPE(36648, JSProf.LRE(36647, newVal));
    }, 12));
    return JSProf.LRE(36651, singleton);
}, 12));