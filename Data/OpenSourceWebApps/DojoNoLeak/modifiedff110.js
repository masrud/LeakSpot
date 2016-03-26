JSProf.LFC(37782, define, false)(JSProf.LNE(37743, [
    "./kernel",
    "../on",
    "../has",
    "../dom-geometry"
], 10), JSProf.LNF(37781, function (dojo, on, has, dom) {
    // module:
    //		dojo/_base/event
    if (JSProf.LGD(37744, on, '_fixEvent')._fixEvent) {
        var fixEvent = JSProf.LGD(37745, on, '_fixEvent')._fixEvent;
        JSProf.LPD(37755, on, '_fixEvent')._fixEvent = JSProf.LRSP(37755, JSProf.LNF(37754, function (evt, se) {
            // add some additional normalization for back-compat, this isn't in on.js because it is somewhat more expensive
            evt = JSProf.LWR(37749, evt, JSProf.LFC(37748, fixEvent, false)(JSProf.LRE(37746, evt), JSProf.LRE(37747, se)));
            if (JSProf.LRE(37750, evt)) {
                JSProf.LMC(37752, dom, 'normalizeEvent').normalizeEvent(JSProf.LRE(37751, evt));
            }
            return JSProf.LRE(37753, evt);
        }, 12));
    }
    var ret = JSProf.LNE(37774, {
            fix: JSProf.LNF(37761, function (evt, sender) {
                // summary:
                //		normalizes properties on the event object including event
                //		bubbling methods, keystroke normalization, and x/y positions
                // evt: Event
                //		native event object
                // sender: DOMNode
                //		node to treat as "currentTarget"
                if (JSProf.LGD(37756, on, '_fixEvent')._fixEvent) {
                    return JSProf.LMC(37759, on, '_fixEvent')._fixEvent(JSProf.LRE(37757, evt), JSProf.LRE(37758, sender));
                }
                return JSProf.LRE(37760, evt);    // Event
            }, 12),
            stop: JSProf.LNF(37773, function (evt) {
                // summary:
                //		prevents propagation and clobbers the default action of the
                //		passed event
                // evt: Event
                //		The event object. If omitted, window.event is used on IE.
                if (JSProf.LFC(37762, has, false)("dom-addeventlistener") || JSProf.LRE(37763, evt) && JSProf.LGD(37764, evt, 'preventDefault').preventDefault) {
                    JSProf.LMC(37765, evt, 'preventDefault').preventDefault();
                    JSProf.LMC(37766, evt, 'stopPropagation').stopPropagation();
                } else {
                    evt = JSProf.LWR(37769, evt, JSProf.LRE(37767, evt) || JSProf.LGD(37768, window, 'event').event);
                    JSProf.LPD(37770, evt, 'cancelBubble').cancelBubble = JSProf.LRSP(37770, true);
                    JSProf.LMC(37772, on._preventDefault, 'call').call(JSProf.LRE(37771, evt));
                }
            }, 12)
        }, 11);
    if (JSProf.LFC(37775, has, false)("extend-dojo")) {
        JSProf.LPD(37777, dojo, 'fixEvent').fixEvent = JSProf.LRSP(37777, JSProf.LGD(37776, ret, 'fix').fix);
        JSProf.LPD(37779, dojo, 'stopEvent').stopEvent = JSProf.LRSP(37779, JSProf.LGD(37778, ret, 'stop').stop);
    }
    return JSProf.LRE(37780, ret);
}, 12));