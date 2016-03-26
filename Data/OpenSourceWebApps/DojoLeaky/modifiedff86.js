JSProf.LFC(29359, define, false)(JSProf.LNE(29274, [
    "./_base/kernel",
    "./on",
    "./has",
    "./dom",
    "./_base/window"
], 10), JSProf.LNF(29358, function (dojo, on, has, dom, win) {
    JSProf.LFD(29357, eventHandler);
    // module:
    //		dojo/mouse
    JSProf.LMC(29277, has, 'add').add("dom-quirks", JSProf.LGD(29275, win, 'doc').doc && JSProf.LGD(29276, win.doc, 'compatMode').compatMode == "BackCompat");
    JSProf.LMC(29280, has, 'add').add("events-mouseenter", JSProf.LGD(29278, win, 'doc').doc && "onmouseenter" in JSProf.LMC(29279, win.doc, 'createElement').createElement("div"));
    JSProf.LMC(29283, has, 'add').add("events-mousewheel", JSProf.LGD(29281, win, 'doc').doc && 'onmousewheel' in JSProf.LGD(29282, win, 'doc').doc);
    var mouseButtons;
    if (JSProf.LFC(29284, has, false)("dom-quirks") && JSProf.LFC(29285, has, false)("ie") || !JSProf.LFC(29286, has, false)("dom-addeventlistener")) {
        mouseButtons = JSProf.LWR(29297, mouseButtons, JSProf.LNE(29296, {
            LEFT: 1,
            MIDDLE: 4,
            RIGHT: 2,
            isButton: JSProf.LNF(29289, function (e, button) {
                return JSProf.LGD(29287, e, 'button').button & JSProf.LRE(29288, button);
            }, 12),
            isLeft: JSProf.LNF(29291, function (e) {
                return JSProf.LGD(29290, e, 'button').button & 1;
            }, 12),
            isMiddle: JSProf.LNF(29293, function (e) {
                return JSProf.LGD(29292, e, 'button').button & 4;
            }, 12),
            isRight: JSProf.LNF(29295, function (e) {
                return JSProf.LGD(29294, e, 'button').button & 2;
            }, 12)
        }, 11));
    } else {
        mouseButtons = JSProf.LWR(29308, mouseButtons, JSProf.LNE(29307, {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2,
            isButton: JSProf.LNF(29300, function (e, button) {
                return JSProf.LGD(29298, e, 'button').button == JSProf.LRE(29299, button);
            }, 12),
            isLeft: JSProf.LNF(29302, function (e) {
                return JSProf.LGD(29301, e, 'button').button == 0;
            }, 12),
            isMiddle: JSProf.LNF(29304, function (e) {
                return JSProf.LGD(29303, e, 'button').button == 1;
            }, 12),
            isRight: JSProf.LNF(29306, function (e) {
                return JSProf.LGD(29305, e, 'button').button == 2;
            }, 12)
        }, 11));
    }
    JSProf.LPD(29310, dojo, 'mouseButtons').mouseButtons = JSProf.LRSP(29310, JSProf.LRE(29309, mouseButtons));
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
        var handler = JSProf.LNF(29324, function (node, listener) {
                return JSProf.LFC(29323, on, false)(JSProf.LRE(29311, node), JSProf.LRE(29312, type), JSProf.LNF(29322, function (evt) {
                    if (JSProf.LRE(29313, selectHandler)) {
                        return JSProf.LFC(29316, selectHandler, false)(JSProf.LRE(29314, evt), JSProf.LRE(29315, listener));
                    }
                    if (!JSProf.LMC(29319, dom, 'isDescendant').isDescendant(JSProf.LGD(29317, evt, 'relatedTarget').relatedTarget, JSProf.LRE(29318, node))) {
                        return JSProf.LMC(29321, listener, 'call').call(this, JSProf.LRE(29320, evt));
                    }
                }, 12));
            }, 12);
        JSProf.LPD(29341, handler, 'bubble').bubble = JSProf.LRSP(29341, JSProf.LNF(29340, function (select) {
            return JSProf.LFC(29339, eventHandler, false)(JSProf.LRE(29325, type), JSProf.LNF(29338, function (evt, listener) {
                // using a selector, use the select function to determine if the mouse moved inside the selector and was previously outside the selector
                var target = JSProf.LFC(29327, select, false)(JSProf.LGD(29326, evt, 'target').target);
                var relatedTarget = JSProf.LGD(29328, evt, 'relatedTarget').relatedTarget;
                if (JSProf.LRE(29329, target) && JSProf.LRE(29330, target) != (JSProf.LRE(29331, relatedTarget) && JSProf.LGD(29332, relatedTarget, 'nodeType').nodeType == 1 && JSProf.LFC(29334, select, false)(JSProf.LRE(29333, relatedTarget)))) {
                    return JSProf.LMC(29337, listener, 'call').call(JSProf.LRE(29335, target), JSProf.LRE(29336, evt));
                }
            }, 12));
        }, 12));
        return JSProf.LRE(29342, handler);
    }
    var wheel;
    if (JSProf.LFC(29343, has, false)("events-mousewheel")) {
        wheel = JSProf.LWR(29344, wheel, 'mousewheel');
    } else {
        //firefox
        wheel = JSProf.LWR(29353, wheel, JSProf.LNF(29352, function (node, listener) {
            return JSProf.LFC(29351, on, false)(JSProf.LRE(29345, node), 'DOMMouseScroll', JSProf.LNF(29350, function (evt) {
                JSProf.LPD(29347, evt, 'wheelDelta').wheelDelta = JSProf.LRSP(29347, -JSProf.LGD(29346, evt, 'detail').detail);
                JSProf.LMC(29349, listener, 'call').call(this, JSProf.LRE(29348, evt));
            }, 12));
        }, 12));
    }
    return JSProf.LNE(29356, {
        _eventHandler: eventHandler,
        enter: JSProf.LFC(29354, eventHandler, false)("mouseover"),
        leave: JSProf.LFC(29355, eventHandler, false)("mouseout"),
        wheel: wheel,
        isLeft: mouseButtons.isLeft,
        isMiddle: mouseButtons.isMiddle,
        isRight: mouseButtons.isRight
    }, 11);
}, 12));