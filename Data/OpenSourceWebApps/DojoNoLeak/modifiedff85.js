JSProf.LFC(28780, define, false)(JSProf.LNE(28695, [
    "./_base/kernel",
    "./on",
    "./has",
    "./dom",
    "./_base/window"
], 10), JSProf.LNF(28779, function (dojo, on, has, dom, win) {
    JSProf.LFD(28778, eventHandler);
    // module:
    //		dojo/mouse
    JSProf.LMC(28698, has, 'add').add("dom-quirks", JSProf.LGD(28696, win, 'doc').doc && JSProf.LGD(28697, win.doc, 'compatMode').compatMode == "BackCompat");
    JSProf.LMC(28701, has, 'add').add("events-mouseenter", JSProf.LGD(28699, win, 'doc').doc && "onmouseenter" in JSProf.LMC(28700, win.doc, 'createElement').createElement("div"));
    JSProf.LMC(28704, has, 'add').add("events-mousewheel", JSProf.LGD(28702, win, 'doc').doc && 'onmousewheel' in JSProf.LGD(28703, win, 'doc').doc);
    var mouseButtons;
    if (JSProf.LFC(28705, has, false)("dom-quirks") && JSProf.LFC(28706, has, false)("ie") || !JSProf.LFC(28707, has, false)("dom-addeventlistener")) {
        mouseButtons = JSProf.LWR(28718, mouseButtons, JSProf.LNE(28717, {
            LEFT: 1,
            MIDDLE: 4,
            RIGHT: 2,
            isButton: JSProf.LNF(28710, function (e, button) {
                return JSProf.LGD(28708, e, 'button').button & JSProf.LRE(28709, button);
            }, 12),
            isLeft: JSProf.LNF(28712, function (e) {
                return JSProf.LGD(28711, e, 'button').button & 1;
            }, 12),
            isMiddle: JSProf.LNF(28714, function (e) {
                return JSProf.LGD(28713, e, 'button').button & 4;
            }, 12),
            isRight: JSProf.LNF(28716, function (e) {
                return JSProf.LGD(28715, e, 'button').button & 2;
            }, 12)
        }, 11));
    } else {
        mouseButtons = JSProf.LWR(28729, mouseButtons, JSProf.LNE(28728, {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2,
            isButton: JSProf.LNF(28721, function (e, button) {
                return JSProf.LGD(28719, e, 'button').button == JSProf.LRE(28720, button);
            }, 12),
            isLeft: JSProf.LNF(28723, function (e) {
                return JSProf.LGD(28722, e, 'button').button == 0;
            }, 12),
            isMiddle: JSProf.LNF(28725, function (e) {
                return JSProf.LGD(28724, e, 'button').button == 1;
            }, 12),
            isRight: JSProf.LNF(28727, function (e) {
                return JSProf.LGD(28726, e, 'button').button == 2;
            }, 12)
        }, 11));
    }
    JSProf.LPD(28731, dojo, 'mouseButtons').mouseButtons = JSProf.LRSP(28731, JSProf.LRE(28730, mouseButtons));
    /*=====
    	dojo.mouseButtons = {
    		// LEFT: Number
    		//		Numeric value of the left mouse button for the platform.
    		LEFT:   0,
    		// MIDDLE: Number
    		//		Numeric value of the middle mouse button for the platform.
    		MIDDLE: 1,
    		// RIGHT: Number
    		//		Numeric value of the right mouse button for the platform.
    		RIGHT:  2,
    
    		isButton: function(e, button){
    			// summary:
    			//		Checks an event object for a pressed button
    			// e: Event
    			//		Event object to examine
    			// button: Number
    			//		The button value (example: dojo.mouseButton.LEFT)
    			return e.button == button; // Boolean
    		},
    		isLeft: function(e){
    			// summary:
    			//		Checks an event object for the pressed left button
    			// e: Event
    			//		Event object to examine
    			return e.button == 0; // Boolean
    		},
    		isMiddle: function(e){
    			// summary:
    			//		Checks an event object for the pressed middle button
    			// e: Event
    			//		Event object to examine
    			return e.button == 1; // Boolean
    		},
    		isRight: function(e){
    			// summary:
    			//		Checks an event object for the pressed right button
    			// e: Event
    			//		Event object to examine
    			return e.button == 2; // Boolean
    		}
    	};
    =====*/
    function eventHandler(type, selectHandler) {
        // emulation of mouseenter/leave with mouseover/out using descendant checking
        var handler = JSProf.LNF(28745, function (node, listener) {
                return JSProf.LFC(28744, on, false)(JSProf.LRE(28732, node), JSProf.LRE(28733, type), JSProf.LNF(28743, function (evt) {
                    if (JSProf.LRE(28734, selectHandler)) {
                        return JSProf.LFC(28737, selectHandler, false)(JSProf.LRE(28735, evt), JSProf.LRE(28736, listener));
                    }
                    if (!JSProf.LMC(28740, dom, 'isDescendant').isDescendant(JSProf.LGD(28738, evt, 'relatedTarget').relatedTarget, JSProf.LRE(28739, node))) {
                        return JSProf.LMC(28742, listener, 'call').call(this, JSProf.LRE(28741, evt));
                    }
                }, 12));
            }, 12);
        JSProf.LPD(28762, handler, 'bubble').bubble = JSProf.LRSP(28762, JSProf.LNF(28761, function (select) {
            return JSProf.LFC(28760, eventHandler, false)(JSProf.LRE(28746, type), JSProf.LNF(28759, function (evt, listener) {
                // using a selector, use the select function to determine if the mouse moved inside the selector and was previously outside the selector
                var target = JSProf.LFC(28748, select, false)(JSProf.LGD(28747, evt, 'target').target);
                var relatedTarget = JSProf.LGD(28749, evt, 'relatedTarget').relatedTarget;
                if (JSProf.LRE(28750, target) && JSProf.LRE(28751, target) != (JSProf.LRE(28752, relatedTarget) && JSProf.LGD(28753, relatedTarget, 'nodeType').nodeType == 1 && JSProf.LFC(28755, select, false)(JSProf.LRE(28754, relatedTarget)))) {
                    return JSProf.LMC(28758, listener, 'call').call(JSProf.LRE(28756, target), JSProf.LRE(28757, evt));
                }
            }, 12));
        }, 12));
        return JSProf.LRE(28763, handler);
    }
    var wheel;
    if (JSProf.LFC(28764, has, false)("events-mousewheel")) {
        wheel = JSProf.LWR(28765, wheel, 'mousewheel');
    } else {
        //firefox
        wheel = JSProf.LWR(28774, wheel, JSProf.LNF(28773, function (node, listener) {
            return JSProf.LFC(28772, on, false)(JSProf.LRE(28766, node), 'DOMMouseScroll', JSProf.LNF(28771, function (evt) {
                JSProf.LPD(28768, evt, 'wheelDelta').wheelDelta = JSProf.LRSP(28768, -JSProf.LGD(28767, evt, 'detail').detail);
                JSProf.LMC(28770, listener, 'call').call(this, JSProf.LRE(28769, evt));
            }, 12));
        }, 12));
    }
    return JSProf.LNE(28777, {
        _eventHandler: eventHandler,
        enter: JSProf.LFC(28775, eventHandler, false)("mouseover"),
        leave: JSProf.LFC(28776, eventHandler, false)("mouseout"),
        wheel: wheel,
        isLeft: mouseButtons.isLeft,
        isMiddle: mouseButtons.isMiddle,
        isRight: mouseButtons.isRight
    }, 11);
}, 12));