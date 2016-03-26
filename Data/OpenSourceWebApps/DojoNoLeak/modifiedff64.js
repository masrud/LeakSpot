JSProf.LFC(23176, define, false)(JSProf.LNE(23086, [
    "dojo/keys",
    "dojo/mouse",
    "dojo/on",
    "dojo/touch"
], 10), JSProf.LNF(23175, function (keys, mouse, on, touch) {
    JSProf.LFD(23174, clickKey);
    // module:
    //		dijit/a11yclick
    /*=====
    	return {
    		// summary:
    		//		Custom press, release, and click synthetic events
    		//		which trigger on a left mouse click, touch, or space/enter keyup.
    
    		click: function(node, listener){
    			// summary:
    			//		Logical click operation for mouse, touch, or keyboard (space/enter key)
    		},
    		press: function(node, listener){
    			// summary:
    			//		Mousedown (left button), touchstart, or keydown (space or enter) corresponding to logical click operation.
    		},
    		release: function(node, listener){
    			// summary:
    			//		Mouseup (left button), touchend, or keyup (space or enter) corresponding to logical click operation.
    		},
    		move: function(node, listener){
    			// summary:
    			//		Mouse cursor or a finger is dragged over the given node.
    		}
    	};
    	=====*/
    function clickKey(e) {
        // Test if this keyboard event should be tracked as the start (if keydown) or end (if keyup) of a click event.
        // Only track for nodes marked to be tracked, and not for buttons or inputs,
        // since buttons handle keyboard click natively, and text inputs should not
        // prevent typing spaces or newlines.
        if ((JSProf.LGD(23087, e, 'keyCode').keyCode === JSProf.LGD(23088, keys, 'ENTER').ENTER || JSProf.LGD(23089, e, 'keyCode').keyCode === JSProf.LGD(23090, keys, 'SPACE').SPACE) && !JSProf.LMC(23092, /input|button|textarea/i, 'test').test(JSProf.LGD(23091, e.target, 'nodeName').nodeName)) {
            // Test if a node or its ancestor has been marked with the dojoClick property to indicate special processing
            for (var node = JSProf.LGD(23093, e, 'target').target; JSProf.LRE(23094, node); node = JSProf.LWR(23096, node, JSProf.LGD(23095, node, 'parentNode').parentNode)) {
                if (JSProf.LGD(23097, node, 'dojoClick').dojoClick) {
                    return true;
                }
            }
        }
    }
    var lastKeyDownNode;
    JSProf.LFC(23105, on, false)(JSProf.LRU(23098, typeof document === 'undefined' ? undefined : document), "keydown", JSProf.LNF(23104, function (e) {
        //console.log("a11yclick: onkeydown, e.target = ", e.target, ", lastKeyDownNode was ", lastKeyDownNode, ", equality is ", (e.target === lastKeyDownNode));
        if (JSProf.LFC(23100, clickKey, false)(JSProf.LRE(23099, e))) {
            // needed on IE for when focus changes between keydown and keyup - otherwise dropdown menus do not work
            lastKeyDownNode = JSProf.LWR(23102, lastKeyDownNode, JSProf.LGD(23101, e, 'target').target);
            // Prevent viewport scrolling on space key in IE<9.
            // (Reproducible on test_Button.html on any of the first dijit/form/Button examples)
            JSProf.LMC(23103, e, 'preventDefault').preventDefault();
        } else {
            lastKeyDownNode = null;
        }
    }, 12));
    JSProf.LFC(23115, on, false)(JSProf.LRU(23106, typeof document === 'undefined' ? undefined : document), "keyup", JSProf.LNF(23114, function (e) {
        //console.log("a11yclick: onkeyup, e.target = ", e.target, ", lastKeyDownNode was ", lastKeyDownNode, ", equality is ", (e.target === lastKeyDownNode));
        if (JSProf.LFC(23108, clickKey, false)(JSProf.LRE(23107, e)) && JSProf.LGD(23109, e, 'target').target == JSProf.LRE(23110, lastKeyDownNode)) {
            // === breaks greasemonkey
            //need reset here or have problems in FF when focus returns to trigger element after closing popup/alert
            lastKeyDownNode = null;
            JSProf.LMC(23113, on, 'emit').emit(JSProf.LGD(23111, e, 'target').target, "click", JSProf.LNE(23112, {
                cancelable: true,
                bubbles: true,
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                altKey: e.altKey,
                _origType: e.type
            }, 11));
        }
    }, 12));
    // I want to return a hash of the synthetic events, but for backwards compatibility the main return value
    // needs to be the click event.   Change for 2.0.
    var click = JSProf.LNF(23120, function (node, listener) {
            // Set flag on node so that keydown/keyup above emits click event.
            // Also enables fast click processing from dojo/touch.
            JSProf.LPD(23116, node, 'dojoClick').dojoClick = JSProf.LRSP(23116, true);
            return JSProf.LFC(23119, on, false)(JSProf.LRE(23117, node), "click", JSProf.LRE(23118, listener));
        }, 12);
    JSProf.LPD(23122, click, 'click').click = JSProf.LRSP(23122, JSProf.LRE(23121, click));
    // forward compatibility with 2.0
    JSProf.LPD(23146, click, 'press').press = JSProf.LRSP(23146, JSProf.LNF(23145, function (node, listener) {
        var touchListener = JSProf.LFC(23131, on, false)(JSProf.LRE(23123, node), JSProf.LGD(23124, touch, 'press').press, JSProf.LNF(23130, function (evt) {
                if (JSProf.LGD(23125, evt, 'type').type == "mousedown" && !JSProf.LMC(23127, mouse, 'isLeft').isLeft(JSProf.LRE(23126, evt))) {
                    // Ignore right click
                    return;
                }
                JSProf.LFC(23129, listener, false)(JSProf.LRE(23128, evt));
            }, 12)), keyListener = JSProf.LFC(23140, on, false)(JSProf.LRE(23132, node), "keydown", JSProf.LNF(23139, function (evt) {
                if (JSProf.LGD(23133, evt, 'keyCode').keyCode === JSProf.LGD(23134, keys, 'ENTER').ENTER || JSProf.LGD(23135, evt, 'keyCode').keyCode === JSProf.LGD(23136, keys, 'SPACE').SPACE) {
                    JSProf.LFC(23138, listener, false)(JSProf.LRE(23137, evt));
                }
            }, 12));
        return JSProf.LNE(23144, {
            remove: JSProf.LNF(23143, function () {
                JSProf.LMC(23141, touchListener, 'remove').remove();
                JSProf.LMC(23142, keyListener, 'remove').remove();
            }, 12)
        }, 11);
    }, 12));
    JSProf.LPD(23170, click, 'release').release = JSProf.LRSP(23170, JSProf.LNF(23169, function (node, listener) {
        var touchListener = JSProf.LFC(23155, on, false)(JSProf.LRE(23147, node), JSProf.LGD(23148, touch, 'release').release, JSProf.LNF(23154, function (evt) {
                if (JSProf.LGD(23149, evt, 'type').type == "mouseup" && !JSProf.LMC(23151, mouse, 'isLeft').isLeft(JSProf.LRE(23150, evt))) {
                    // Ignore right click
                    return;
                }
                JSProf.LFC(23153, listener, false)(JSProf.LRE(23152, evt));
            }, 12)), keyListener = JSProf.LFC(23164, on, false)(JSProf.LRE(23156, node), "keyup", JSProf.LNF(23163, function (evt) {
                if (JSProf.LGD(23157, evt, 'keyCode').keyCode === JSProf.LGD(23158, keys, 'ENTER').ENTER || JSProf.LGD(23159, evt, 'keyCode').keyCode === JSProf.LGD(23160, keys, 'SPACE').SPACE) {
                    JSProf.LFC(23162, listener, false)(JSProf.LRE(23161, evt));
                }
            }, 12));
        return JSProf.LNE(23168, {
            remove: JSProf.LNF(23167, function () {
                JSProf.LMC(23165, touchListener, 'remove').remove();
                JSProf.LMC(23166, keyListener, 'remove').remove();
            }, 12)
        }, 11);
    }, 12));
    JSProf.LPD(23172, click, 'move').move = JSProf.LRSP(23172, JSProf.LGD(23171, touch, 'move').move);
    // just for convenience
    return JSProf.LRE(23173, click);
}, 12));