JSProf.LFC(23174, define, false)(JSProf.LNE(23084, [
    "dojo/keys",
    "dojo/mouse",
    "dojo/on",
    "dojo/touch"
], 10), JSProf.LNF(23173, function (keys, mouse, on, touch) {
    JSProf.LFD(23172, clickKey);
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
        if ((JSProf.LGD(23085, e, 'keyCode').keyCode === JSProf.LGD(23086, keys, 'ENTER').ENTER || JSProf.LGD(23087, e, 'keyCode').keyCode === JSProf.LGD(23088, keys, 'SPACE').SPACE) && !JSProf.LMC(23090, /input|button|textarea/i, 'test').test(JSProf.LGD(23089, e.target, 'nodeName').nodeName)) {
            // Test if a node or its ancestor has been marked with the dojoClick property to indicate special processing
            for (var node = JSProf.LGD(23091, e, 'target').target; JSProf.LRE(23092, node); node = JSProf.LWR(23094, node, JSProf.LGD(23093, node, 'parentNode').parentNode)) {
                if (JSProf.LGD(23095, node, 'dojoClick').dojoClick) {
                    return true;
                }
            }
        }
    }
    var lastKeyDownNode;
    JSProf.LFC(23103, on, false)(JSProf.LRU(23096, typeof document === 'undefined' ? undefined : document), "keydown", JSProf.LNF(23102, function (e) {
        //console.log("a11yclick: onkeydown, e.target = ", e.target, ", lastKeyDownNode was ", lastKeyDownNode, ", equality is ", (e.target === lastKeyDownNode));
        if (JSProf.LFC(23098, clickKey, false)(JSProf.LRE(23097, e))) {
            // needed on IE for when focus changes between keydown and keyup - otherwise dropdown menus do not work
            lastKeyDownNode = JSProf.LWR(23100, lastKeyDownNode, JSProf.LGD(23099, e, 'target').target);
            // Prevent viewport scrolling on space key in IE<9.
            // (Reproducible on test_Button.html on any of the first dijit/form/Button examples)
            JSProf.LMC(23101, e, 'preventDefault').preventDefault();
        } else {
            lastKeyDownNode = null;
        }
    }, 12));
    JSProf.LFC(23113, on, false)(JSProf.LRU(23104, typeof document === 'undefined' ? undefined : document), "keyup", JSProf.LNF(23112, function (e) {
        //console.log("a11yclick: onkeyup, e.target = ", e.target, ", lastKeyDownNode was ", lastKeyDownNode, ", equality is ", (e.target === lastKeyDownNode));
        if (JSProf.LFC(23106, clickKey, false)(JSProf.LRE(23105, e)) && JSProf.LGD(23107, e, 'target').target == JSProf.LRE(23108, lastKeyDownNode)) {
            // === breaks greasemonkey
            //need reset here or have problems in FF when focus returns to trigger element after closing popup/alert
            lastKeyDownNode = null;
            JSProf.LMC(23111, on, 'emit').emit(JSProf.LGD(23109, e, 'target').target, "click", JSProf.LNE(23110, {
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
    var click = JSProf.LNF(23118, function (node, listener) {
            // Set flag on node so that keydown/keyup above emits click event.
            // Also enables fast click processing from dojo/touch.
            JSProf.LPD(23114, node, 'dojoClick').dojoClick = JSProf.LRSP(23114, true);
            return JSProf.LFC(23117, on, false)(JSProf.LRE(23115, node), "click", JSProf.LRE(23116, listener));
        }, 12);
    JSProf.LPD(23120, click, 'click').click = JSProf.LRSP(23120, JSProf.LRE(23119, click));
    // forward compatibility with 2.0
    JSProf.LPD(23144, click, 'press').press = JSProf.LRSP(23144, JSProf.LNF(23143, function (node, listener) {
        var touchListener = JSProf.LFC(23129, on, false)(JSProf.LRE(23121, node), JSProf.LGD(23122, touch, 'press').press, JSProf.LNF(23128, function (evt) {
                if (JSProf.LGD(23123, evt, 'type').type == "mousedown" && !JSProf.LMC(23125, mouse, 'isLeft').isLeft(JSProf.LRE(23124, evt))) {
                    // Ignore right click
                    return;
                }
                JSProf.LFC(23127, listener, false)(JSProf.LRE(23126, evt));
            }, 12)), keyListener = JSProf.LFC(23138, on, false)(JSProf.LRE(23130, node), "keydown", JSProf.LNF(23137, function (evt) {
                if (JSProf.LGD(23131, evt, 'keyCode').keyCode === JSProf.LGD(23132, keys, 'ENTER').ENTER || JSProf.LGD(23133, evt, 'keyCode').keyCode === JSProf.LGD(23134, keys, 'SPACE').SPACE) {
                    JSProf.LFC(23136, listener, false)(JSProf.LRE(23135, evt));
                }
            }, 12));
        return JSProf.LNE(23142, {
            remove: JSProf.LNF(23141, function () {
                JSProf.LMC(23139, touchListener, 'remove').remove();
                JSProf.LMC(23140, keyListener, 'remove').remove();
            }, 12)
        }, 11);
    }, 12));
    JSProf.LPD(23168, click, 'release').release = JSProf.LRSP(23168, JSProf.LNF(23167, function (node, listener) {
        var touchListener = JSProf.LFC(23153, on, false)(JSProf.LRE(23145, node), JSProf.LGD(23146, touch, 'release').release, JSProf.LNF(23152, function (evt) {
                if (JSProf.LGD(23147, evt, 'type').type == "mouseup" && !JSProf.LMC(23149, mouse, 'isLeft').isLeft(JSProf.LRE(23148, evt))) {
                    // Ignore right click
                    return;
                }
                JSProf.LFC(23151, listener, false)(JSProf.LRE(23150, evt));
            }, 12)), keyListener = JSProf.LFC(23162, on, false)(JSProf.LRE(23154, node), "keyup", JSProf.LNF(23161, function (evt) {
                if (JSProf.LGD(23155, evt, 'keyCode').keyCode === JSProf.LGD(23156, keys, 'ENTER').ENTER || JSProf.LGD(23157, evt, 'keyCode').keyCode === JSProf.LGD(23158, keys, 'SPACE').SPACE) {
                    JSProf.LFC(23160, listener, false)(JSProf.LRE(23159, evt));
                }
            }, 12));
        return JSProf.LNE(23166, {
            remove: JSProf.LNF(23165, function () {
                JSProf.LMC(23163, touchListener, 'remove').remove();
                JSProf.LMC(23164, keyListener, 'remove').remove();
            }, 12)
        }, 11);
    }, 12));
    JSProf.LPD(23170, click, 'move').move = JSProf.LRSP(23170, JSProf.LGD(23169, touch, 'move').move);
    // just for convenience
    return JSProf.LRE(23171, click);
}, 12));