JSProf.LFC(29909, define, false)(JSProf.LNE(29576, [
    "./_base/kernel",
    "./aspect",
    "./dom",
    "./dom-class",
    "./_base/lang",
    "./on",
    "./has",
    "./mouse",
    "./domReady",
    "./_base/window"
], 10), JSProf.LNF(29908, function (dojo, aspect, dom, domClass, lang, on, has, mouse, domReady, win) {
    JSProf.LFD(29905, dualEvent);
    JSProf.LFD(29906, marked);
    JSProf.LFD(29907, doClicks);
    // module:
    //		dojo/touch
    var ios4 = JSProf.LFC(29577, has, false)("ios") < 5;
    // Detect if platform supports Pointer Events, and if so, the names of the events (pointerdown vs. MSPointerDown).
    var hasPointer = JSProf.LFC(29578, has, false)("pointer-events") || JSProf.LFC(29579, has, false)("MSPointer"), pointer = JSProf.LFC(29588, JSProf.LNF(29587, function () {
            var pointer = JSProf.LNE(29580, {}, 11);
            for (var type in JSProf.LNE(29581, {
                    down: 1,
                    move: 1,
                    up: 1,
                    cancel: 1,
                    over: 1,
                    out: 1
                }, 11)) {
                JSProf.LPE(29585, pointer, 'type')[type] = JSProf.LRPE(29585, JSProf.LFC(29582, has, false)("MSPointer") ? "MSPointer" + type.charAt(0).toUpperCase() + JSProf.LMC(29583, type, 'slice').slice(1) : "pointer" + JSProf.LRE(29584, type));
            }
            return JSProf.LRE(29586, pointer);
        }, 12), false)();
    // Detect if platform supports the webkit touchstart/touchend/... events
    var hasTouch = JSProf.LFC(29589, has, false)("touch-events");
    // Click generation variables
    var clicksInited, clickTracker, useTarget = false, clickTarget, clickX, clickY, clickDx, clickDy, clickTime;
    // Time of most recent touchstart, touchmove, or touchend event
    var lastTouch;
    function dualEvent(mouseType, touchType, pointerType) {
        // Returns synthetic event that listens for both the specified mouse event and specified touch event.
        // But ignore fake mouse events that were generated due to the user touching the screen.
        if (JSProf.LRE(29590, hasPointer) && JSProf.LRE(29591, pointerType)) {
            // IE10+: MSPointer* events are designed to handle both mouse and touch in a uniform way,
            // so just use that regardless of hasTouch.
            return JSProf.LNF(29596, function (node, listener) {
                return JSProf.LFC(29595, on, false)(JSProf.LRE(29592, node), JSProf.LRE(29593, pointerType), JSProf.LRE(29594, listener));
            }, 12);
        } else if (JSProf.LRE(29597, hasTouch)) {
            return JSProf.LNF(29623, function (node, listener) {
                var handle1 = JSProf.LFC(29607, on, false)(JSProf.LRE(29598, node), JSProf.LRE(29599, touchType), JSProf.LNF(29606, function (evt) {
                        JSProf.LMC(29601, listener, 'call').call(this, JSProf.LRE(29600, evt));
                        // On slow mobile browsers (see https://bugs.dojotoolkit.org/ticket/17634),
                        // a handler for a touch event may take >1s to run.  That time shouldn't
                        // be included in the calculation for lastTouch.
                        lastTouch = JSProf.LWR(29605, lastTouch, JSProf.LMC(29604, JSProf.LNE(29603, new (JSProf.LFC(29602, Date, true))(), 'Date'), 'getTime').getTime());
                    }, 12)), handle2 = JSProf.LFC(29618, on, false)(JSProf.LRE(29608, node), JSProf.LRE(29609, mouseType), JSProf.LNF(29617, function (evt) {
                        if (!JSProf.LRE(29610, lastTouch) || JSProf.LMC(29613, JSProf.LNE(29612, new (JSProf.LFC(29611, Date, true))(), 'Date'), 'getTime').getTime() > JSProf.LRE(29614, lastTouch) + 1000) {
                            JSProf.LMC(29616, listener, 'call').call(this, JSProf.LRE(29615, evt));
                        }
                    }, 12));
                return JSProf.LNE(29622, {
                    remove: JSProf.LNF(29621, function () {
                        JSProf.LMC(29619, handle1, 'remove').remove();
                        JSProf.LMC(29620, handle2, 'remove').remove();
                    }, 12)
                }, 11);
            }, 12);
        } else {
            // Avoid creating listeners for touch events on performance sensitive older browsers like IE6
            return JSProf.LNF(29628, function (node, listener) {
                return JSProf.LFC(29627, on, false)(JSProf.LRE(29624, node), JSProf.LRE(29625, mouseType), JSProf.LRE(29626, listener));
            }, 12);
        }
    }
    function marked(node) {
        // Search for node ancestor has been marked with the dojoClick property to indicate special processing.
        // Returns marked ancestor.
        do {
            if (JSProf.LGD(29629, node, 'dojoClick').dojoClick !== undefined) {
                return JSProf.LRE(29630, node);
            }
        } while (node = JSProf.LWR(29632, node, JSProf.LGD(29631, node, 'parentNode').parentNode));
    }
    function doClicks(e, moveType, endType) {
        JSProf.LFD(29777, updateClickTracker);
        JSProf.LFD(29778, stopNativeEvents);
        // summary:
        //		Setup touch listeners to generate synthetic clicks immediately (rather than waiting for the browser
        //		to generate clicks after the double-tap delay) and consistently (regardless of whether event.preventDefault()
        //		was called in an event listener. Synthetic clicks are generated only if a node or one of its ancestors has
        //		its dojoClick property set to truthy. If a node receives synthetic clicks because one of its ancestors has its
        //      dojoClick property set to truthy, you can disable synthetic clicks on this node by setting its own dojoClick property
        //      to falsy.
        var markedNode = JSProf.LFC(29634, marked, false)(JSProf.LGD(29633, e, 'target').target);
        clickTracker = JSProf.LWR(29638, clickTracker, !JSProf.LGD(29635, e.target, 'disabled').disabled && JSProf.LRE(29636, markedNode) && JSProf.LGD(29637, markedNode, 'dojoClick').dojoClick);
        // click threshold = true, number, x/y object, or "useTarget"
        if (JSProf.LRE(29639, clickTracker)) {
            useTarget = JSProf.LWR(29641, useTarget, JSProf.LRE(29640, clickTracker) == "useTarget");
            clickTarget = JSProf.LWR(29645, clickTarget, JSProf.LRE(29642, useTarget) ? JSProf.LRE(29643, markedNode) : JSProf.LGD(29644, e, 'target').target);
            if (JSProf.LRE(29646, useTarget)) {
                // We expect a click, so prevent any other 
                // default action on "touchpress"
                JSProf.LMC(29647, e, 'preventDefault').preventDefault();
            }
            clickX = JSProf.LWR(29652, clickX, JSProf.LGD(29648, e, 'changedTouches').changedTouches ? JSProf.LGD(29649, e.changedTouches[0], 'pageX').pageX - JSProf.LGD(29650, win.global, 'pageXOffset').pageXOffset : JSProf.LGD(29651, e, 'clientX').clientX);
            clickY = JSProf.LWR(29657, clickY, JSProf.LGD(29653, e, 'changedTouches').changedTouches ? JSProf.LGD(29654, e.changedTouches[0], 'pageY').pageY - JSProf.LGD(29655, win.global, 'pageYOffset').pageYOffset : JSProf.LGD(29656, e, 'clientY').clientY);
            clickDx = JSProf.LWR(29662, clickDx, (typeof JSProf.LRE(29658, clickTracker) == "object" ? JSProf.LGD(29659, clickTracker, 'x').x : typeof JSProf.LRE(29660, clickTracker) == "number" ? JSProf.LRE(29661, clickTracker) : 0) || 4);
            clickDy = JSProf.LWR(29667, clickDy, (typeof JSProf.LRE(29663, clickTracker) == "object" ? JSProf.LGD(29664, clickTracker, 'y').y : typeof JSProf.LRE(29665, clickTracker) == "number" ? JSProf.LRE(29666, clickTracker) : 0) || 4);
            // add move/end handlers only the first time a node with dojoClick is seen,
            // so we don't add too much overhead when dojoClick is never set.
            if (!JSProf.LRE(29668, clicksInited)) {
                clicksInited = JSProf.LWR(29669, clicksInited, true);
                function updateClickTracker(e) {
                    if (JSProf.LRE(29670, useTarget)) {
                        clickTracker = JSProf.LWR(29682, clickTracker, JSProf.LMC(29681, dom, 'isDescendant').isDescendant(JSProf.LMC(29679, win.doc, 'elementFromPoint').elementFromPoint(JSProf.LGD(29671, e, 'changedTouches').changedTouches ? JSProf.LGD(29672, e.changedTouches[0], 'pageX').pageX - JSProf.LGD(29673, win.global, 'pageXOffset').pageXOffset : JSProf.LGD(29674, e, 'clientX').clientX, JSProf.LGD(29675, e, 'changedTouches').changedTouches ? JSProf.LGD(29676, e.changedTouches[0], 'pageY').pageY - JSProf.LGD(29677, win.global, 'pageYOffset').pageYOffset : JSProf.LGD(29678, e, 'clientY').clientY), JSProf.LRE(29680, clickTarget)));
                    } else {
                        clickTracker = JSProf.LWR(29702, clickTracker, JSProf.LRE(29683, clickTracker) && (JSProf.LGD(29684, e, 'changedTouches').changedTouches ? JSProf.LGD(29685, e.changedTouches[0], 'target').target : JSProf.LGD(29686, e, 'target').target) == JSProf.LRE(29687, clickTarget) && JSProf.LMC(29693, Math, 'abs').abs((JSProf.LGD(29688, e, 'changedTouches').changedTouches ? JSProf.LGD(29689, e.changedTouches[0], 'pageX').pageX - JSProf.LGD(29690, win.global, 'pageXOffset').pageXOffset : JSProf.LGD(29691, e, 'clientX').clientX) - JSProf.LRE(29692, clickX)) <= JSProf.LRE(29694, clickDx) && JSProf.LMC(29700, Math, 'abs').abs((JSProf.LGD(29695, e, 'changedTouches').changedTouches ? JSProf.LGD(29696, e.changedTouches[0], 'pageY').pageY - JSProf.LGD(29697, win.global, 'pageYOffset').pageYOffset : JSProf.LGD(29698, e, 'clientY').clientY) - JSProf.LRE(29699, clickY)) <= JSProf.LRE(29701, clickDy));
                    }
                }
                JSProf.LMC(29709, win.doc, 'addEventListener').addEventListener(JSProf.LRE(29703, moveType), JSProf.LNF(29708, function (e) {
                    JSProf.LFC(29705, updateClickTracker, false)(JSProf.LRE(29704, e));
                    if (JSProf.LRE(29706, useTarget)) {
                        // prevent native scroll event and ensure touchend is
                        // fire after touch moves between press and release.
                        JSProf.LMC(29707, e, 'preventDefault').preventDefault();
                    }
                }, 12), true);
                JSProf.LMC(29751, win.doc, 'addEventListener').addEventListener(JSProf.LRE(29710, endType), JSProf.LNF(29750, function (e) {
                    JSProf.LFC(29712, updateClickTracker, false)(JSProf.LRE(29711, e));
                    if (JSProf.LRE(29713, clickTracker)) {
                        clickTime = JSProf.LWR(29717, clickTime, JSProf.LMC(29716, JSProf.LNE(29715, new (JSProf.LFC(29714, Date, true))(), 'Date'), 'getTime').getTime());
                        var target = JSProf.LRE(29718, useTarget) ? JSProf.LRE(29719, clickTarget) : JSProf.LGD(29720, e, 'target').target;
                        if (JSProf.LGD(29721, target, 'tagName').tagName === "LABEL") {
                            // when clicking on a label, forward click to its associated input if any
                            target = JSProf.LWR(29725, target, JSProf.LMC(29723, dom, 'byId').byId(JSProf.LMC(29722, target, 'getAttribute').getAttribute("for")) || JSProf.LRE(29724, target));
                        }
                        //some attributes can be on the Touch object, not on the Event:
                        //http://www.w3.org/TR/touch-events/#touch-interface
                        var src = JSProf.LGD(29726, e, 'changedTouches').changedTouches ? JSProf.LGE(29727, e.changedTouches, 0)[0] : JSProf.LRE(29728, e);
                        //create the synthetic event.
                        //http://www.w3.org/TR/DOM-Level-3-Events/#widl-MouseEvent-initMouseEvent
                        var clickEvt = JSProf.LMC(29729, document, 'createEvent').createEvent("MouseEvents");
                        JSProf.LPD(29730, clickEvt, '_dojo_click')._dojo_click = JSProf.LRSP(29730, true);
                        JSProf.LMC(29741, clickEvt, 'initMouseEvent').initMouseEvent("click", true, true, JSProf.LGD(29731, e, 'view').view, JSProf.LGD(29732, e, 'detail').detail, JSProf.LGD(29733, src, 'screenX').screenX, JSProf.LGD(29734, src, 'screenY').screenY, JSProf.LGD(29735, src, 'clientX').clientX, JSProf.LGD(29736, src, 'clientY').clientY, JSProf.LGD(29737, e, 'ctrlKey').ctrlKey, JSProf.LGD(29738, e, 'altKey').altKey, JSProf.LGD(29739, e, 'shiftKey').shiftKey, JSProf.LGD(29740, e, 'metaKey').metaKey, 0, null);
                        setTimeout(JSProf.LNF(29749, function () {
                            JSProf.LMC(29744, on, 'emit').emit(JSProf.LRE(29742, target), "click", JSProf.LRE(29743, clickEvt));
                            // refresh clickTime in case app-defined click handler took a long time to run
                            clickTime = JSProf.LWR(29748, clickTime, JSProf.LMC(29747, JSProf.LNE(29746, new (JSProf.LFC(29745, Date, true))(), 'Date'), 'getTime').getTime());
                        }, 12), 0);
                    }
                }, 12), true);
                function stopNativeEvents(type) {
                    JSProf.LMC(29773, win.doc, 'addEventListener').addEventListener(JSProf.LRE(29752, type), JSProf.LNF(29772, function (e) {
                        // Stop native events when we emitted our own click event.  Note that the native click may occur
                        // on a different node than the synthetic click event was generated on.  For example,
                        // click on a menu item, causing the menu to disappear, and then (~300ms later) the browser
                        // sends a click event to the node that was *underneath* the menu.  So stop all native events
                        // sent shortly after ours, similar to what is done in dualEvent.
                        // The INPUT.dijitOffScreen test is for offscreen inputs used in dijit/form/Button, on which
                        // we call click() explicitly, we don't want to stop this event.
                        if (!JSProf.LGD(29753, e, '_dojo_click')._dojo_click && JSProf.LMC(29756, JSProf.LNE(29755, new (JSProf.LFC(29754, Date, true))(), 'Date'), 'getTime').getTime() <= JSProf.LRE(29757, clickTime) + 1000 && !(JSProf.LGD(29758, e.target, 'tagName').tagName == "INPUT" && JSProf.LMC(29760, domClass, 'contains').contains(JSProf.LGD(29759, e, 'target').target, "dijitOffScreen"))) {
                            JSProf.LMC(29761, e, 'stopPropagation').stopPropagation();
                            JSProf.LGD(29762, e, 'stopImmediatePropagation').stopImmediatePropagation && JSProf.LMC(29763, e, 'stopImmediatePropagation').stopImmediatePropagation();
                            if (JSProf.LRE(29764, type) == "click" && (JSProf.LGD(29765, e.target, 'tagName').tagName != "INPUT" || JSProf.LGD(29766, e.target, 'type').type == "radio" || JSProf.LGD(29767, e.target, 'type').type == "checkbox") && JSProf.LGD(29768, e.target, 'tagName').tagName != "TEXTAREA" && JSProf.LGD(29769, e.target, 'tagName').tagName != "AUDIO" && JSProf.LGD(29770, e.target, 'tagName').tagName != "VIDEO") {
                                // preventDefault() breaks textual <input>s on android, keyboard doesn't popup,
                                // but it is still needed for checkboxes and radio buttons, otherwise in some cases
                                // the checked state becomes inconsistent with the widget's state
                                JSProf.LMC(29771, e, 'preventDefault').preventDefault();
                            }
                        }
                    }, 12), true);
                }
                JSProf.LFC(29774, stopNativeEvents, false)("click");
                // We also stop mousedown/up since these would be sent well after with our "fast" click (300ms),
                // which can confuse some dijit widgets.
                JSProf.LFC(29775, stopNativeEvents, false)("mousedown");
                JSProf.LFC(29776, stopNativeEvents, false)("mouseup");
            }
        }
    }
    var hoveredNode;
    if (JSProf.LRE(29779, hasPointer)) {
        // MSPointer (IE10+) already has support for over and out, so we just need to init click support
        JSProf.LFC(29788, domReady, false)(JSProf.LNF(29787, function () {
            JSProf.LMC(29786, win.doc, 'addEventListener').addEventListener(JSProf.LGD(29780, pointer, 'down').down, JSProf.LNF(29785, function (evt) {
                JSProf.LFC(29784, doClicks, false)(JSProf.LRE(29781, evt), JSProf.LGD(29782, pointer, 'move').move, JSProf.LGD(29783, pointer, 'up').up);
            }, 12), true);
        }, 12));
    } else if (JSProf.LRE(29789, hasTouch)) {
        JSProf.LFC(29879, domReady, false)(JSProf.LNF(29878, function () {
            JSProf.LFD(29877, copyEventProps);
            // Keep track of currently hovered node
            hoveredNode = JSProf.LWR(29791, hoveredNode, JSProf.LMC(29790, win, 'body').body());
            // currently hovered node
            JSProf.LMC(29808, win.doc, 'addEventListener').addEventListener("touchstart", JSProf.LNF(29807, function (evt) {
                lastTouch = JSProf.LWR(29795, lastTouch, JSProf.LMC(29794, JSProf.LNE(29793, new (JSProf.LFC(29792, Date, true))(), 'Date'), 'getTime').getTime());
                // Precede touchstart event with touch.over event.  DnD depends on this.
                // Use addEventListener(cb, true) to run cb before any touchstart handlers on node run,
                // and to ensure this code runs even if the listener on the node does event.stop().
                var oldNode = JSProf.LRE(29796, hoveredNode);
                hoveredNode = JSProf.LWR(29798, hoveredNode, JSProf.LGD(29797, evt, 'target').target);
                JSProf.LMC(29801, on, 'emit').emit(JSProf.LRE(29799, oldNode), "dojotouchout", JSProf.LNE(29800, {
                    relatedTarget: hoveredNode,
                    bubbles: true
                }, 11));
                JSProf.LMC(29804, on, 'emit').emit(JSProf.LRE(29802, hoveredNode), "dojotouchover", JSProf.LNE(29803, {
                    relatedTarget: oldNode,
                    bubbles: true
                }, 11));
                JSProf.LFC(29806, doClicks, false)(JSProf.LRE(29805, evt), "touchmove", "touchend");    // init click generation
            }, 12), true);
            function copyEventProps(evt) {
                // Make copy of event object and also set bubbles:true.  Used when calling on.emit().
                var props = JSProf.LMC(29811, lang, 'delegate').delegate(JSProf.LRE(29809, evt), JSProf.LNE(29810, { bubbles: true }, 11));
                if (JSProf.LFC(29812, has, false)("ios") >= 6) {
                    // On iOS6 "touches" became a non-enumerable property, which
                    // is not hit by for...in.  Ditto for the other properties below.
                    JSProf.LPD(29814, props, 'touches').touches = JSProf.LRSP(29814, JSProf.LGD(29813, evt, 'touches').touches);
                    JSProf.LPD(29816, props, 'altKey').altKey = JSProf.LRSP(29816, JSProf.LGD(29815, evt, 'altKey').altKey);
                    JSProf.LPD(29818, props, 'changedTouches').changedTouches = JSProf.LRSP(29818, JSProf.LGD(29817, evt, 'changedTouches').changedTouches);
                    JSProf.LPD(29820, props, 'ctrlKey').ctrlKey = JSProf.LRSP(29820, JSProf.LGD(29819, evt, 'ctrlKey').ctrlKey);
                    JSProf.LPD(29822, props, 'metaKey').metaKey = JSProf.LRSP(29822, JSProf.LGD(29821, evt, 'metaKey').metaKey);
                    JSProf.LPD(29824, props, 'shiftKey').shiftKey = JSProf.LRSP(29824, JSProf.LGD(29823, evt, 'shiftKey').shiftKey);
                    JSProf.LPD(29826, props, 'targetTouches').targetTouches = JSProf.LRSP(29826, JSProf.LGD(29825, evt, 'targetTouches').targetTouches);
                }
                return JSProf.LRE(29827, props);
            }
            JSProf.LFC(29857, on, false)(JSProf.LGD(29828, win, 'doc').doc, "touchmove", JSProf.LNF(29856, function (evt) {
                lastTouch = JSProf.LWR(29832, lastTouch, JSProf.LMC(29831, JSProf.LNE(29830, new (JSProf.LFC(29829, Date, true))(), 'Date'), 'getTime').getTime());
                var newNode = JSProf.LMC(29839, win.doc, 'elementFromPoint').elementFromPoint(JSProf.LGD(29833, evt, 'pageX').pageX - (JSProf.LRE(29834, ios4) ? 0 : JSProf.LGD(29835, win.global, 'pageXOffset').pageXOffset), JSProf.LGD(29836, evt, 'pageY').pageY - (JSProf.LRE(29837, ios4) ? 0 : JSProf.LGD(29838, win.global, 'pageYOffset').pageYOffset));
                if (JSProf.LRE(29840, newNode)) {
                    // Fire synthetic touchover and touchout events on nodes since the browser won't do it natively.
                    if (JSProf.LRE(29841, hoveredNode) !== JSProf.LRE(29842, newNode)) {
                        // touch out on the old node
                        JSProf.LMC(29845, on, 'emit').emit(JSProf.LRE(29843, hoveredNode), "dojotouchout", JSProf.LNE(29844, {
                            relatedTarget: newNode,
                            bubbles: true
                        }, 11));
                        // touchover on the new node
                        JSProf.LMC(29848, on, 'emit').emit(JSProf.LRE(29846, newNode), "dojotouchover", JSProf.LNE(29847, {
                            relatedTarget: hoveredNode,
                            bubbles: true
                        }, 11));
                        hoveredNode = JSProf.LWR(29850, hoveredNode, JSProf.LRE(29849, newNode));
                    }
                    // Unlike a listener on "touchmove", on(node, "dojotouchmove", listener) fires when the finger
                    // drags over the specified node, regardless of which node the touch started on.
                    if (!JSProf.LMC(29854, on, 'emit').emit(JSProf.LRE(29851, newNode), "dojotouchmove", JSProf.LFC(29853, copyEventProps, false)(JSProf.LRE(29852, evt)))) {
                        // emit returns false when synthetic event "dojotouchmove" is cancelled, so we prevent the
                        // default behavior of the underlying native event "touchmove".
                        JSProf.LMC(29855, evt, 'preventDefault').preventDefault();
                    }
                }
            }, 12));
            // Fire a dojotouchend event on the node where the finger was before it was removed from the screen.
            // This is different than the native touchend, which fires on the node where the drag started.
            JSProf.LFC(29876, on, false)(JSProf.LGD(29858, win, 'doc').doc, "touchend", JSProf.LNF(29875, function (evt) {
                lastTouch = JSProf.LWR(29862, lastTouch, JSProf.LMC(29861, JSProf.LNE(29860, new (JSProf.LFC(29859, Date, true))(), 'Date'), 'getTime').getTime());
                var node = JSProf.LMC(29869, win.doc, 'elementFromPoint').elementFromPoint(JSProf.LGD(29863, evt, 'pageX').pageX - (JSProf.LRE(29864, ios4) ? 0 : JSProf.LGD(29865, win.global, 'pageXOffset').pageXOffset), JSProf.LGD(29866, evt, 'pageY').pageY - (JSProf.LRE(29867, ios4) ? 0 : JSProf.LGD(29868, win.global, 'pageYOffset').pageYOffset)) || JSProf.LMC(29870, win, 'body').body();
                // if out of the screen
                JSProf.LMC(29874, on, 'emit').emit(JSProf.LRE(29871, node), "dojotouchend", JSProf.LFC(29873, copyEventProps, false)(JSProf.LRE(29872, evt)));
            }, 12));
        }, 12));
    }
    //device neutral events - touch.press|move|release|cancel/over/out
    var touch = JSProf.LNE(29900, {
            press: JSProf.LFC(29881, dualEvent, false)("mousedown", "touchstart", JSProf.LGD(29880, pointer, 'down').down),
            move: JSProf.LFC(29883, dualEvent, false)("mousemove", "dojotouchmove", JSProf.LGD(29882, pointer, 'move').move),
            release: JSProf.LFC(29885, dualEvent, false)("mouseup", "dojotouchend", JSProf.LGD(29884, pointer, 'up').up),
            cancel: JSProf.LFC(29889, dualEvent, false)(JSProf.LGD(29886, mouse, 'leave').leave, "touchcancel", JSProf.LRE(29887, hasPointer) ? JSProf.LGD(29888, pointer, 'cancel').cancel : null),
            over: JSProf.LFC(29891, dualEvent, false)("mouseover", "dojotouchover", JSProf.LGD(29890, pointer, 'over').over),
            out: JSProf.LFC(29893, dualEvent, false)("mouseout", "dojotouchout", JSProf.LGD(29892, pointer, 'out').out),
            enter: JSProf.LMC(29896, mouse, '_eventHandler')._eventHandler(JSProf.LFC(29895, dualEvent, false)("mouseover", "dojotouchover", JSProf.LGD(29894, pointer, 'over').over)),
            leave: JSProf.LMC(29899, mouse, '_eventHandler')._eventHandler(JSProf.LFC(29898, dualEvent, false)("mouseout", "dojotouchout", JSProf.LGD(29897, pointer, 'out').out))
        }, 11);
    /*=====
    	touch = {
    		// summary:
    		//		This module provides unified touch event handlers by exporting
    		//		press, move, release and cancel which can also run well on desktop.
    		//		Based on http://dvcs.w3.org/hg/webevents/raw-file/tip/touchevents.html
    		//      Also, if the dojoClick property is set to truthy on a DOM node, dojo/touch generates
    		//      click events immediately for this node and its descendants (except for descendants that
    		//      have a dojoClick property set to falsy), to avoid the delay before native browser click events,
    		//      and regardless of whether evt.preventDefault() was called in a touch.press event listener.
    		//
    		// example:
    		//		Used with dojo/on
    		//		|	define(["dojo/on", "dojo/touch"], function(on, touch){
    		//		|		on(node, touch.press, function(e){});
    		//		|		on(node, touch.move, function(e){});
    		//		|		on(node, touch.release, function(e){});
    		//		|		on(node, touch.cancel, function(e){});
    		// example:
    		//		Used with touch.* directly
    		//		|	touch.press(node, function(e){});
    		//		|	touch.move(node, function(e){});
    		//		|	touch.release(node, function(e){});
    		//		|	touch.cancel(node, function(e){});
    		// example:
    		//		Have dojo/touch generate clicks without delay, with a default move threshold of 4 pixels
    		//		|	node.dojoClick = true;
    		// example:
    		//		Have dojo/touch generate clicks without delay, with a move threshold of 10 pixels horizontally and vertically
    		//		|	node.dojoClick = 10;
    		// example:
    		//		Have dojo/touch generate clicks without delay, with a move threshold of 50 pixels horizontally and 10 pixels vertically
    		//		|	node.dojoClick = {x:50, y:5};
    		// example:
    		//		Disable clicks without delay generated by dojo/touch on a node that has an ancestor with property dojoClick set to truthy
    		//		|  node.dojoClick = false;
    
    		press: function(node, listener){
    			// summary:
    			//		Register a listener to 'touchstart'|'mousedown' for the given node
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		move: function(node, listener){
    			// summary:
    			//		Register a listener that fires when the mouse cursor or a finger is dragged over the given node.
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		release: function(node, listener){
    			// summary:
    			//		Register a listener to releasing the mouse button while the cursor is over the given node
    			//		(i.e. "mouseup") or for removing the finger from the screen while touching the given node.
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		cancel: function(node, listener){
    			// summary:
    			//		Register a listener to 'touchcancel'|'mouseleave' for the given node
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		over: function(node, listener){
    			// summary:
    			//		Register a listener to 'mouseover' or touch equivalent for the given node
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		out: function(node, listener){
    			// summary:
    			//		Register a listener to 'mouseout' or touch equivalent for the given node
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		enter: function(node, listener){
    			// summary:
    			//		Register a listener to mouse.enter or touch equivalent for the given node
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		},
    		leave: function(node, listener){
    			// summary:
    			//		Register a listener to mouse.leave or touch equivalent for the given node
    			// node: Dom
    			//		Target node to listen to
    			// listener: Function
    			//		Callback function
    			// returns:
    			//		A handle which will be used to remove the listener by handle.remove()
    		}
    	};
    	=====*/
    JSProf.LFC(29901, has, false)("extend-dojo") && (JSProf.LPD(29903, dojo, 'touch').touch = JSProf.LRSP(29903, JSProf.LRE(29902, touch)));
    return JSProf.LRE(29904, touch);
}, 12));