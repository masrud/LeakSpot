JSProf.LFC(37780, define, false)(JSProf.LNE(37741, [
    "./kernel",
    "../on",
    "../has",
    "../dom-geometry"
], 10), JSProf.LNF(37779, function (dojo, on, has, dom) {
    // module:
    //		dojo/_base/event
    if (JSProf.LGD(37742, on, '_fixEvent')._fixEvent) {
        var fixEvent = JSProf.LGD(37743, on, '_fixEvent')._fixEvent;
        JSProf.LPD(37753, on, '_fixEvent')._fixEvent = JSProf.LRSP(37753, JSProf.LNF(37752, function (evt, se) {
            // add some additional normalization for back-compat, this isn't in on.js because it is somewhat more expensive
            evt = JSProf.LWR(37747, evt, JSProf.LFC(37746, fixEvent, false)(JSProf.LRE(37744, evt), JSProf.LRE(37745, se)));
            if (JSProf.LRE(37748, evt)) {
                JSProf.LMC(37750, dom, 'normalizeEvent').normalizeEvent(JSProf.LRE(37749, evt));
            }
            return JSProf.LRE(37751, evt);
        }, 12));
    }
    var ret = JSProf.LNE(37772, {
            fix: JSProf.LNF(37759, function (evt, sender) {
                // summary:
                //		normalizes properties on the event object including event
                //		bubbling methods, keystroke normalization, and x/y positions
                // evt: Event
                //		native event object
                // sender: DOMNode
                //		node to treat as "currentTarget"
                if (JSProf.LGD(37754, on, '_fixEvent')._fixEvent) {
                    return JSProf.LMC(37757, on, '_fixEvent')._fixEvent(JSProf.LRE(37755, evt), JSProf.LRE(37756, sender));
                }
                return JSProf.LRE(37758, evt);    // Event
            }, 12),
            stop: JSProf.LNF(37771, function (evt) {
                // summary:
                //		prevents propagation and clobbers the default action of the
                //		passed event
                // evt: Event
                //		The event object. If omitted, window.event is used on IE.
                if (JSProf.LFC(37760, has, false)("dom-addeventlistener") || JSProf.LRE(37761, evt) && JSProf.LGD(37762, evt, 'preventDefault').preventDefault) {
                    JSProf.LMC(37763, evt, 'preventDefault').preventDefault();
                    JSProf.LMC(37764, evt, 'stopPropagation').stopPropagation();
                } else {
                    evt = JSProf.LWR(37767, evt, JSProf.LRE(37765, evt) || JSProf.LGD(37766, window, 'event').event);
                    JSProf.LPD(37768, evt, 'cancelBubble').cancelBubble = JSProf.LRSP(37768, true);
                    JSProf.LMC(37770, on._preventDefault, 'call').call(JSProf.LRE(37769, evt));
                }
            }, 12)
        }, 11);
    if (JSProf.LFC(37773, has, false)("extend-dojo")) {
        JSProf.LPD(37775, dojo, 'fixEvent').fixEvent = JSProf.LRSP(37775, JSProf.LGD(37774, ret, 'fix').fix);
        JSProf.LPD(37777, dojo, 'stopEvent').stopEvent = JSProf.LRSP(37777, JSProf.LGD(37776, ret, 'stop').stop);
    }
    return JSProf.LRE(37778, ret);
}, 12));