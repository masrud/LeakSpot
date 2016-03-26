JSProf.LFC(29907, define, false)(JSProf.LNE(29574, [
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
], 10), JSProf.LNF(29906, function (dojo, aspect, dom, domClass, lang, on, has, mouse, domReady, win) {
    JSProf.LFD(29903, dualEvent);
    JSProf.LFD(29904, marked);
    JSProf.LFD(29905, doClicks);
    // module:
    //		dojo/touch
    var ios4 = JSProf.LFC(29575, has, false)("ios") < 5;
    // Detect if platform supports Pointer Events, and if so, the names of the events (pointerdown vs. MSPointerDown).
    var hasPointer = JSProf.LFC(29576, has, false)("pointer-events") || JSProf.LFC(29577, has, false)("MSPointer"), pointer = JSProf.LFC(29586, JSProf.LNF(29585, function () {
            var pointer = JSProf.LNE(29578, {}, 11);
            for (var type in JSProf.LNE(29579, {
                    down: 1,
                    move: 1,
                    up: 1,
                    cancel: 1,
                    over: 1,
                    out: 1
                }, 11)) {
                JSProf.LPE(29583, pointer, 'type')[type] = JSProf.LRPE(29583, JSProf.LFC(29580, has, false)("MSPointer") ? "MSPointer" + type.charAt(0).toUpperCase() + JSProf.LMC(29581, type, 'slice').slice(1) : "pointer" + JSProf.LRE(29582, type));
            }
            return JSProf.LRE(29584, pointer);
        }, 12), false)();
    // Detect if platform supports the webkit touchstart/touchend/... events
    var hasTouch = JSProf.LFC(29587, has, false)("touch-events");
    // Click generation variables
    var clicksInited, clickTracker, useTarget = false, clickTarget, clickX, clickY, clickDx, clickDy, clickTime;
    // Time of most recent touchstart, touchmove, or touchend event
    var lastTouch;
    function dualEvent(mouseType, touchType, pointerType) {
        // Returns synthetic event that listens for both the specified mouse event and specified touch event.
        // But ignore fake mouse events that were generated due to the user touching the screen.
        if (JSProf.LRE(29588, hasPointer) && JSProf.LRE(29589, pointerType)) {
            // IE10+: MSPointer* events are designed to handle both mouse and touch in a uniform way,
            // so just use that regardless of hasTouch.
            return JSProf.LNF(29594, function (node, listener) {
                return JSProf.LFC(29593, on, false)(JSProf.LRE(29590, node), JSProf.LRE(29591, pointerType), JSProf.LRE(29592, listener));
            }, 12);
        } else if (JSProf.LRE(29595, hasTouch)) {
            return JSProf.LNF(29621, function (node, listener) {
                var handle1 = JSProf.LFC(29605, on, false)(JSProf.LRE(29596, node), JSProf.LRE(29597, touchType), JSProf.LNF(29604, function (evt) {
                        JSProf.LMC(29599, listener, 'call').call(this, JSProf.LRE(29598, evt));
                        // On slow mobile browsers (see https://bugs.dojotoolkit.org/ticket/17634),
                        // a handler for a touch event may take >1s to run.  That time shouldn't
                        // be included in the calculation for lastTouch.
                        lastTouch = JSProf.LWR(29603, lastTouch, JSProf.LMC(29602, JSProf.LNE(29601, new (JSProf.LFC(29600, Date, true))(), 'Date'), 'getTime').getTime());
                    }, 12)), handle2 = JSProf.LFC(29616, on, false)(JSProf.LRE(29606, node), JSProf.LRE(29607, mouseType), JSProf.LNF(29615, function (evt) {
                        if (!JSProf.LRE(29608, lastTouch) || JSProf.LMC(29611, JSProf.LNE(29610, new (JSProf.LFC(29609, Date, true))(), 'Date'), 'getTime').getTime() > JSProf.LRE(29612, lastTouch) + 1000) {
                            JSProf.LMC(29614, listener, 'call').call(this, JSProf.LRE(29613, evt));
                        }
                    }, 12));
                return JSProf.LNE(29620, {
                    remove: JSProf.LNF(29619, function () {
                        JSProf.LMC(29617, handle1, 'remove').remove();
                        JSProf.LMC(29618, handle2, 'remove').remove();
                    }, 12)
                }, 11);
            }, 12);
        } else {
            // Avoid creating listeners for touch events on performance sensitive older browsers like IE6
            return JSProf.LNF(29626, function (node, listener) {
                return JSProf.LFC(29625, on, false)(JSProf.LRE(29622, node), JSProf.LRE(29623, mouseType), JSProf.LRE(29624, listener));
            }, 12);
        }
    }
    function marked(node) {
        // Search for node ancestor has been marked with the dojoClick property to indicate special processing.
        // Returns marked ancestor.
        do {
            if (JSProf.LGD(29627, node, 'dojoClick').dojoClick !== undefined) {
                return JSProf.LRE(29628, node);
            }
        } while (node = JSProf.LWR(29630, node, JSProf.LGD(29629, node, 'parentNode').parentNode));
    }
    function doClicks(e, moveType, endType) {
        JSProf.LFD(29775, updateClickTracker);
        JSProf.LFD(29776, stopNativeEvents);
        // summary:
        //		Setup touch listeners to generate synthetic clicks immediately (rather than waiting for the browser
        //		to generate clicks after the double-tap delay) and consistently (regardless of whether event.preventDefault()
        //		was called in an event listener. Synthetic clicks are generated only if a node or one of its ancestors has
        //		its dojoClick property set to truthy. If a node receives synthetic clicks because one of its ancestors has its
        //      dojoClick property set to truthy, you can disable synthetic clicks on this node by setting its own dojoClick property
        //      to falsy.
        var markedNode = JSProf.LFC(29632, marked, false)(JSProf.LGD(29631, e, 'target').target);
        clickTracker = JSProf.LWR(29636, clickTracker, !JSProf.LGD(29633, e.target, 'disabled').disabled && JSProf.LRE(29634, markedNode) && JSProf.LGD(29635, markedNode, 'dojoClick').dojoClick);
        // click threshold = true, number, x/y object, or "useTarget"
        if (JSProf.LRE(29637, clickTracker)) {
            useTarget = JSProf.LWR(29639, useTarget, JSProf.LRE(29638, clickTracker) == "useTarget");
            clickTarget = JSProf.LWR(29643, clickTarget, JSProf.LRE(29640, useTarget) ? JSProf.LRE(29641, markedNode) : JSProf.LGD(29642, e, 'target').target);
            if (JSProf.LRE(29644, useTarget)) {
                // We expect a click, so prevent any other 
                // default action on "touchpress"
                JSProf.LMC(29645, e, 'preventDefault').preventDefault();
            }
            clickX = JSProf.LWR(29650, clickX, JSProf.LGD(29646, e, 'changedTouches').changedTouches ? JSProf.LGD(29647, e.changedTouches[0], 'pageX').pageX - JSProf.LGD(29648, win.global, 'pageXOffset').pageXOffset : JSProf.LGD(29649, e, 'clientX').clientX);
            clickY = JSProf.LWR(29655, clickY, JSProf.LGD(29651, e, 'changedTouches').changedTouches ? JSProf.LGD(29652, e.changedTouches[0], 'pageY').pageY - JSProf.LGD(29653, win.global, 'pageYOffset').pageYOffset : JSProf.LGD(29654, e, 'clientY').clientY);
            clickDx = JSProf.LWR(29660, clickDx, (typeof JSProf.LRE(29656, clickTracker) == "object" ? JSProf.LGD(29657, clickTracker, 'x').x : typeof JSProf.LRE(29658, clickTracker) == "number" ? JSProf.LRE(29659, clickTracker) : 0) || 4);
            clickDy = JSProf.LWR(29665, clickDy, (typeof JSProf.LRE(29661, clickTracker) == "object" ? JSProf.LGD(29662, clickTracker, 'y').y : typeof JSProf.LRE(29663, clickTracker) == "number" ? JSProf.LRE(29664, clickTracker) : 0) || 4);
            // add move/end handlers only the first time a node with dojoClick is seen,
            // so we don't add too much overhead when dojoClick is never set.
            if (!JSProf.LRE(29666, clicksInited)) {
                clicksInited = JSProf.LWR(29667, clicksInited, true);
                function updateClickTracker(e) {
                    if (JSProf.LRE(29668, useTarget)) {
                        clickTracker = JSProf.LWR(29680, clickTracker, JSProf.LMC(29679, dom, 'isDescendant').isDescendant(JSProf.LMC(29677, win.doc, 'elementFromPoint').elementFromPoint(JSProf.LGD(29669, e, 'changedTouches').changedTouches ? JSProf.LGD(29670, e.changedTouches[0], 'pageX').pageX - JSProf.LGD(29671, win.global, 'pageXOffset').pageXOffset : JSProf.LGD(29672, e, 'clientX').clientX, JSProf.LGD(29673, e, 'changedTouches').changedTouches ? JSProf.LGD(29674, e.changedTouches[0], 'pageY').pageY - JSProf.LGD(29675, win.global, 'pageYOffset').pageYOffset : JSProf.LGD(29676, e, 'clientY').clientY), JSProf.LRE(29678, clickTarget)));
                    } else {
                        clickTracker = JSProf.LWR(29700, clickTracker, JSProf.LRE(29681, clickTracker) && (JSProf.LGD(29682, e, 'changedTouches').changedTouches ? JSProf.LGD(29683, e.changedTouches[0], 'target').target : JSProf.LGD(29684, e, 'target').target) == JSProf.LRE(29685, clickTarget) && JSProf.LMC(29691, Math, 'abs').abs((JSProf.LGD(29686, e, 'changedTouches').changedTouches ? JSProf.LGD(29687, e.changedTouches[0], 'pageX').pageX - JSProf.LGD(29688, win.global, 'pageXOffset').pageXOffset : JSProf.LGD(29689, e, 'clientX').clientX) - JSProf.LRE(29690, clickX)) <= JSProf.LRE(29692, clickDx) && JSProf.LMC(29698, Math, 'abs').abs((JSProf.LGD(29693, e, 'changedTouches').changedTouches ? JSProf.LGD(29694, e.changedTouches[0], 'pageY').pageY - JSProf.LGD(29695, win.global, 'pageYOffset').pageYOffset : JSProf.LGD(29696, e, 'clientY').clientY) - JSProf.LRE(29697, clickY)) <= JSProf.LRE(29699, clickDy));
                    }
                }
                JSProf.LMC(29707, win.doc, 'addEventListener').addEventListener(JSProf.LRE(29701, moveType), JSProf.LNF(29706, function (e) {
                    JSProf.LFC(29703, updateClickTracker, false)(JSProf.LRE(29702, e));
                    if (JSProf.LRE(29704, useTarget)) {
                        // prevent native scroll event and ensure touchend is
                        // fire after touch moves between press and release.
                        JSProf.LMC(29705, e, 'preventDefault').preventDefault();
                    }
                }, 12), true);
                JSProf.LMC(29749, win.doc, 'addEventListener').addEventListener(JSProf.LRE(29708, endType), JSProf.LNF(29748, function (e) {
                    JSProf.LFC(29710, updateClickTracker, false)(JSProf.LRE(29709, e));
                    if (JSProf.LRE(29711, clickTracker)) {
                        clickTime = JSProf.LWR(29715, clickTime, JSProf.LMC(29714, JSProf.LNE(29713, new (JSProf.LFC(29712, Date, true))(), 'Date'), 'getTime').getTime());
                        var target = JSProf.LRE(29716, useTarget) ? JSProf.LRE(29717, clickTarget) : JSProf.LGD(29718, e, 'target').target;
                        if (JSProf.LGD(29719, target, 'tagName').tagName === "LABEL") {
                            // when clicking on a label, forward click to its associated input if any
                            target = JSProf.LWR(29723, target, JSProf.LMC(29721, dom, 'byId').byId(JSProf.LMC(29720, target, 'getAttribute').getAttribute("for")) || JSProf.LRE(29722, target));
                        }
                        //some attributes can be on the Touch object, not on the Event:
                        //http://www.w3.org/TR/touch-events/#touch-interface
                        var src = JSProf.LGD(29724, e, 'changedTouches').changedTouches ? JSProf.LGE(29725, e.changedTouches, 0)[0] : JSProf.LRE(29726, e);
                        //create the synthetic event.
                        //http://www.w3.org/TR/DOM-Level-3-Events/#widl-MouseEvent-initMouseEvent
                        var clickEvt = JSProf.LMC(29727, document, 'createEvent').createEvent("MouseEvents");
                        JSProf.LPD(29728, clickEvt, '_dojo_click')._dojo_click = JSProf.LRSP(29728, true);
                        JSProf.LMC(29739, clickEvt, 'initMouseEvent').initMouseEvent("click", true, true, JSProf.LGD(29729, e, 'view').view, JSProf.LGD(29730, e, 'detail').detail, JSProf.LGD(29731, src, 'screenX').screenX, JSProf.LGD(29732, src, 'screenY').screenY, JSProf.LGD(29733, src, 'clientX').clientX, JSProf.LGD(29734, src, 'clientY').clientY, JSProf.LGD(29735, e, 'ctrlKey').ctrlKey, JSProf.LGD(29736, e, 'altKey').altKey, JSProf.LGD(29737, e, 'shiftKey').shiftKey, JSProf.LGD(29738, e, 'metaKey').metaKey, 0, null);
                        setTimeout(JSProf.LNF(29747, function () {
                            JSProf.LMC(29742, on, 'emit').emit(JSProf.LRE(29740, target), "click", JSProf.LRE(29741, clickEvt));
                            // refresh clickTime in case app-defined click handler took a long time to run
                            clickTime = JSProf.LWR(29746, clickTime, JSProf.LMC(29745, JSProf.LNE(29744, new (JSProf.LFC(29743, Date, true))(), 'Date'), 'getTime').getTime());
                        }, 12), 0);
                    }
                }, 12), true);
                function stopNativeEvents(type) {
                    JSProf.LMC(29771, win.doc, 'addEventListener').addEventListener(JSProf.LRE(29750, type), JSProf.LNF(29770, function (e) {
                        // Stop native events when we emitted our own click event.  Note that the native click may occur
                        // on a different node than the synthetic click event was generated on.  For example,
                        // click on a menu item, causing the menu to disappear, and then (~300ms later) the browser
                        // sends a click event to the node that was *underneath* the menu.  So stop all native events
                        // sent shortly after ours, similar to what is done in dualEvent.
                        // The INPUT.dijitOffScreen test is for offscreen inputs used in dijit/form/Button, on which
                        // we call click() explicitly, we don't want to stop this event.
                        if (!JSProf.LGD(29751, e, '_dojo_click')._dojo_click && JSProf.LMC(29754, JSProf.LNE(29753, new (JSProf.LFC(29752, Date, true))(), 'Date'), 'getTime').getTime() <= JSProf.LRE(29755, clickTime) + 1000 && !(JSProf.LGD(29756, e.target, 'tagName').tagName == "INPUT" && JSProf.LMC(29758, domClass, 'contains').contains(JSProf.LGD(29757, e, 'target').target, "dijitOffScreen"))) {
                            JSProf.LMC(29759, e, 'stopPropagation').stopPropagation();
                            JSProf.LGD(29760, e, 'stopImmediatePropagation').stopImmediatePropagation && JSProf.LMC(29761, e, 'stopImmediatePropagation').stopImmediatePropagation();
                            if (JSProf.LRE(29762, type) == "click" && (JSProf.LGD(29763, e.target, 'tagName').tagName != "INPUT" || JSProf.LGD(29764, e.target, 'type').type == "radio" || JSProf.LGD(29765, e.target, 'type').type == "checkbox") && JSProf.LGD(29766, e.target, 'tagName').tagName != "TEXTAREA" && JSProf.LGD(29767, e.target, 'tagName').tagName != "AUDIO" && JSProf.LGD(29768, e.target, 'tagName').tagName != "VIDEO") {
                                // preventDefault() breaks textual <input>s on android, keyboard doesn't popup,
                                // but it is still needed for checkboxes and radio buttons, otherwise in some cases
                                // the checked state becomes inconsistent with the widget's state
                                JSProf.LMC(29769, e, 'preventDefault').preventDefault();
                            }
                        }
                    }, 12), true);
                }
                JSProf.LFC(29772, stopNativeEvents, false)("click");
                // We also stop mousedown/up since these would be sent well after with our "fast" click (300ms),
                // which can confuse some dijit widgets.
                JSProf.LFC(29773, stopNativeEvents, false)("mousedown");
                JSProf.LFC(29774, stopNativeEvents, false)("mouseup");
            }
        }
    }
    var hoveredNode;
    if (JSProf.LRE(29777, hasPointer)) {
        // MSPointer (IE10+) already has support for over and out, so we just need to init click support
        JSProf.LFC(29786, domReady, false)(JSProf.LNF(29785, function () {
            JSProf.LMC(29784, win.doc, 'addEventListener').addEventListener(JSProf.LGD(29778, pointer, 'down').down, JSProf.LNF(29783, function (evt) {
                JSProf.LFC(29782, doClicks, false)(JSProf.LRE(29779, evt), JSProf.LGD(29780, pointer, 'move').move, JSProf.LGD(29781, pointer, 'up').up);
            }, 12), true);
        }, 12));
    } else if (JSProf.LRE(29787, hasTouch)) {
        JSProf.LFC(29877, domReady, false)(JSProf.LNF(29876, function () {
            JSProf.LFD(29875, copyEventProps);
            // Keep track of currently hovered node
            hoveredNode = JSProf.LWR(29789, hoveredNode, JSProf.LMC(29788, win, 'body').body());
            // currently hovered node
            JSProf.LMC(29806, win.doc, 'addEventListener').addEventListener("touchstart", JSProf.LNF(29805, function (evt) {
                lastTouch = JSProf.LWR(29793, lastTouch, JSProf.LMC(29792, JSProf.LNE(29791, new (JSProf.LFC(29790, Date, true))(), 'Date'), 'getTime').getTime());
                // Precede touchstart event with touch.over event.  DnD depends on this.
                // Use addEventListener(cb, true) to run cb before any touchstart handlers on node run,
                // and to ensure this code runs even if the listener on the node does event.stop().
                var oldNode = JSProf.LRE(29794, hoveredNode);
                hoveredNode = JSProf.LWR(29796, hoveredNode, JSProf.LGD(29795, evt, 'target').target);
                JSProf.LMC(29799, on, 'emit').emit(JSProf.LRE(29797, oldNode), "dojotouchout", JSProf.LNE(29798, {
                    relatedTarget: hoveredNode,
                    bubbles: true
                }, 11));
                JSProf.LMC(29802, on, 'emit').emit(JSProf.LRE(29800, hoveredNode), "dojotouchover", JSProf.LNE(29801, {
                    relatedTarget: oldNode,
                    bubbles: true
                }, 11));
                JSProf.LFC(29804, doClicks, false)(JSProf.LRE(29803, evt), "touchmove", "touchend");    // init click generation
            }, 12), true);
            function copyEventProps(evt) {
                // Make copy of event object and also set bubbles:true.  Used when calling on.emit().
                var props = JSProf.LMC(29809, lang, 'delegate').delegate(JSProf.LRE(29807, evt), JSProf.LNE(29808, { bubbles: true }, 11));
                if (JSProf.LFC(29810, has, false)("ios") >= 6) {
                    // On iOS6 "touches" became a non-enumerable property, which
                    // is not hit by for...in.  Ditto for the other properties below.
                    JSProf.LPD(29812, props, 'touches').touches = JSProf.LRSP(29812, JSProf.LGD(29811, evt, 'touches').touches);
                    JSProf.LPD(29814, props, 'altKey').altKey = JSProf.LRSP(29814, JSProf.LGD(29813, evt, 'altKey').altKey);
                    JSProf.LPD(29816, props, 'changedTouches').changedTouches = JSProf.LRSP(29816, JSProf.LGD(29815, evt, 'changedTouches').changedTouches);
                    JSProf.LPD(29818, props, 'ctrlKey').ctrlKey = JSProf.LRSP(29818, JSProf.LGD(29817, evt, 'ctrlKey').ctrlKey);
                    JSProf.LPD(29820, props, 'metaKey').metaKey = JSProf.LRSP(29820, JSProf.LGD(29819, evt, 'metaKey').metaKey);
                    JSProf.LPD(29822, props, 'shiftKey').shiftKey = JSProf.LRSP(29822, JSProf.LGD(29821, evt, 'shiftKey').shiftKey);
                    JSProf.LPD(29824, props, 'targetTouches').targetTouches = JSProf.LRSP(29824, JSProf.LGD(29823, evt, 'targetTouches').targetTouches);
                }
                return JSProf.LRE(29825, props);
            }
            JSProf.LFC(29855, on, false)(JSProf.LGD(29826, win, 'doc').doc, "touchmove", JSProf.LNF(29854, function (evt) {
                lastTouch = JSProf.LWR(29830, lastTouch, JSProf.LMC(29829, JSProf.LNE(29828, new (JSProf.LFC(29827, Date, true))(), 'Date'), 'getTime').getTime());
                var newNode = JSProf.LMC(29837, win.doc, 'elementFromPoint').elementFromPoint(JSProf.LGD(29831, evt, 'pageX').pageX - (JSProf.LRE(29832, ios4) ? 0 : JSProf.LGD(29833, win.global, 'pageXOffset').pageXOffset), JSProf.LGD(29834, evt, 'pageY').pageY - (JSProf.LRE(29835, ios4) ? 0 : JSProf.LGD(29836, win.global, 'pageYOffset').pageYOffset));
                if (JSProf.LRE(29838, newNode)) {
                    // Fire synthetic touchover and touchout events on nodes since the browser won't do it natively.
                    if (JSProf.LRE(29839, hoveredNode) !== JSProf.LRE(29840, newNode)) {
                        // touch out on the old node
                        JSProf.LMC(29843, on, 'emit').emit(JSProf.LRE(29841, hoveredNode), "dojotouchout", JSProf.LNE(29842, {
                            relatedTarget: newNode,
                            bubbles: true
                        }, 11));
                        // touchover on the new node
                        JSProf.LMC(29846, on, 'emit').emit(JSProf.LRE(29844, newNode), "dojotouchover", JSProf.LNE(29845, {
                            relatedTarget: hoveredNode,
                            bubbles: true
                        }, 11));
                        hoveredNode = JSProf.LWR(29848, hoveredNode, JSProf.LRE(29847, newNode));
                    }
                    // Unlike a listener on "touchmove", on(node, "dojotouchmove", listener) fires when the finger
                    // drags over the specified node, regardless of which node the touch started on.
                    if (!JSProf.LMC(29852, on, 'emit').emit(JSProf.LRE(29849, newNode), "dojotouchmove", JSProf.LFC(29851, copyEventProps, false)(JSProf.LRE(29850, evt)))) {
                        // emit returns false when synthetic event "dojotouchmove" is cancelled, so we prevent the
                        // default behavior of the underlying native event "touchmove".
                        JSProf.LMC(29853, evt, 'preventDefault').preventDefault();
                    }
                }
            }, 12));
            // Fire a dojotouchend event on the node where the finger was before it was removed from the screen.
            // This is different than the native touchend, which fires on the node where the drag started.
            JSProf.LFC(29874, on, false)(JSProf.LGD(29856, win, 'doc').doc, "touchend", JSProf.LNF(29873, function (evt) {
                lastTouch = JSProf.LWR(29860, lastTouch, JSProf.LMC(29859, JSProf.LNE(29858, new (JSProf.LFC(29857, Date, true))(), 'Date'), 'getTime').getTime());
                var node = JSProf.LMC(29867, win.doc, 'elementFromPoint').elementFromPoint(JSProf.LGD(29861, evt, 'pageX').pageX - (JSProf.LRE(29862, ios4) ? 0 : JSProf.LGD(29863, win.global, 'pageXOffset').pageXOffset), JSProf.LGD(29864, evt, 'pageY').pageY - (JSProf.LRE(29865, ios4) ? 0 : JSProf.LGD(29866, win.global, 'pageYOffset').pageYOffset)) || JSProf.LMC(29868, win, 'body').body();
                // if out of the screen
                JSProf.LMC(29872, on, 'emit').emit(JSProf.LRE(29869, node), "dojotouchend", JSProf.LFC(29871, copyEventProps, false)(JSProf.LRE(29870, evt)));
            }, 12));
        }, 12));
    }
    //device neutral events - touch.press|move|release|cancel/over/out
    var touch = JSProf.LNE(29898, {
            press: JSProf.LFC(29879, dualEvent, false)("mousedown", "touchstart", JSProf.LGD(29878, pointer, 'down').down),
            move: JSProf.LFC(29881, dualEvent, false)("mousemove", "dojotouchmove", JSProf.LGD(29880, pointer, 'move').move),
            release: JSProf.LFC(29883, dualEvent, false)("mouseup", "dojotouchend", JSProf.LGD(29882, pointer, 'up').up),
            cancel: JSProf.LFC(29887, dualEvent, false)(JSProf.LGD(29884, mouse, 'leave').leave, "touchcancel", JSProf.LRE(29885, hasPointer) ? JSProf.LGD(29886, pointer, 'cancel').cancel : null),
            over: JSProf.LFC(29889, dualEvent, false)("mouseover", "dojotouchover", JSProf.LGD(29888, pointer, 'over').over),
            out: JSProf.LFC(29891, dualEvent, false)("mouseout", "dojotouchout", JSProf.LGD(29890, pointer, 'out').out),
            enter: JSProf.LMC(29894, mouse, '_eventHandler')._eventHandler(JSProf.LFC(29893, dualEvent, false)("mouseover", "dojotouchover", JSProf.LGD(29892, pointer, 'over').over)),
            leave: JSProf.LMC(29897, mouse, '_eventHandler')._eventHandler(JSProf.LFC(29896, dualEvent, false)("mouseout", "dojotouchout", JSProf.LGD(29895, pointer, 'out').out))
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
    JSProf.LFC(29899, has, false)("extend-dojo") && (JSProf.LPD(29901, dojo, 'touch').touch = JSProf.LRSP(29901, JSProf.LRE(29900, touch)));
    return JSProf.LRE(29902, touch);
}, 12));