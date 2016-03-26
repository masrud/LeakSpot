JSProf.LFC(13081, define, false)(JSProf.LNE(12616, [
    "./has!dom-addeventlistener?:./aspect",
    "./_base/kernel",
    "./sniff"
], 10), JSProf.LNF(13080, function (aspect, dojo, has) {
    JSProf.LFD(13077, addListener);
    JSProf.LFD(13078, syntheticPreventDefault);
    JSProf.LFD(13079, syntheticStopPropagation);
    "use strict";
    if (JSProf.LFC(12617, has, false)("dom")) {
        // check to make sure we are in a browser, this module should work anywhere
        var major = JSProf.LGD(12618, window, 'ScriptEngineMajorVersion').ScriptEngineMajorVersion;
        JSProf.LMC(12622, has, 'add').add("jscript", JSProf.LRE(12619, major) && JSProf.LFC(12620, major, false)() + JSProf.LFC(12621, ScriptEngineMinorVersion, false)() / 10);
        JSProf.LMC(12625, has, 'add').add("event-orientationchange", JSProf.LFC(12623, has, false)("touch") && !JSProf.LFC(12624, has, false)("android"));
        // TODO: how do we detect this?
        JSProf.LMC(12629, has, 'add').add("event-stopimmediatepropagation", JSProf.LGD(12626, window, 'Event').Event && !!JSProf.LGD(12627, window.Event, 'prototype').prototype && !!JSProf.LGD(12628, window.Event.prototype, 'stopImmediatePropagation').stopImmediatePropagation);
        JSProf.LMC(12632, has, 'add').add("event-focusin", JSProf.LNF(12631, function (global, doc, element) {
            return 'onfocusin' in JSProf.LRE(12630, element);
        }, 12));
        if (JSProf.LFC(12633, has, false)("touch")) {
            JSProf.LMC(12641, has, 'add').add("touch-can-modify-event-delegate", JSProf.LNF(12640, function () {
                // This feature test checks whether deleting a property of an event delegate works
                // for a touch-enabled device. If it works, event delegation can be used as fallback
                // for browsers such as Safari in older iOS where deleting properties of the original
                // event does not work.
                var EventDelegate = JSProf.LNF(12634, function () {
                    }, 12);
                JSProf.LPD(12636, EventDelegate, 'prototype').prototype = JSProf.LRSP(12636, JSProf.LMC(12635, document, 'createEvent').createEvent("MouseEvents"));
                // original event
                // Attempt to modify a property of an event delegate and check if
                // it succeeds. Depending on browsers and on whether dojo/on's
                // strict mode is stripped in a Dojo build, there are 3 known behaviors:
                // it may either succeed, or raise an error, or fail to set the property
                // without raising an error.
                try {
                    var eventDelegate = JSProf.LNE(12638, new (JSProf.LFC(12637, EventDelegate, true))(), 'EventDelegate');
                    eventDelegate.target = null;
                    return JSProf.LGD(12639, eventDelegate, 'target').target === null;
                } catch (e) {
                    return false;    // cannot use event delegation
                }
            }, 12));
        }
    }
    var on = JSProf.LNF(12654, function (target, type, listener, dontFix) {
            // summary:
            //		A function that provides core event listening functionality. With this function
            //		you can provide a target, event type, and listener to be notified of
            //		future matching events that are fired.
            // target: Element|Object
            //		This is the target object or DOM element that to receive events from
            // type: String|Function
            //		This is the name of the event to listen for or an extension event type.
            // listener: Function
            //		This is the function that should be called when the event fires.
            // returns: Object
            //		An object with a remove() method that can be used to stop listening for this
            //		event.
            // description:
            //		To listen for "click" events on a button node, we can do:
            //		|	define(["dojo/on"], function(listen){
            //		|		on(button, "click", clickHandler);
            //		|		...
            //		Evented JavaScript objects can also have their own events.
            //		|	var obj = new Evented;
            //		|	on(obj, "foo", fooHandler);
            //		And then we could publish a "foo" event:
            //		|	on.emit(obj, "foo", {key: "value"});
            //		We can use extension events as well. For example, you could listen for a tap gesture:
            //		|	define(["dojo/on", "dojo/gesture/tap", function(listen, tap){
            //		|		on(button, tap, tapHandler);
            //		|		...
            //		which would trigger fooHandler. Note that for a simple object this is equivalent to calling:
            //		|	obj.onfoo({key:"value"});
            //		If you use on.emit on a DOM node, it will use native event dispatching when possible.
            if (typeof JSProf.LGD(12642, target, 'on').on == "function" && typeof JSProf.LRE(12643, type) != "function" && !JSProf.LGD(12644, target, 'nodeType').nodeType) {
                // delegate to the target's on() method, so it can handle it's own listening if it wants (unless it 
                // is DOM node and we may be dealing with jQuery or Prototype's incompatible addition to the
                // Element prototype 
                return JSProf.LMC(12647, target, 'on').on(JSProf.LRE(12645, type), JSProf.LRE(12646, listener));
            }
            // delegate to main listener code
            return JSProf.LMC(12653, on, 'parse').parse(JSProf.LRE(12648, target), JSProf.LRE(12649, type), JSProf.LRE(12650, listener), JSProf.LRE(12651, addListener), JSProf.LRE(12652, dontFix), this);
        }, 12);
    JSProf.LPD(12670, on, 'pausable').pausable = JSProf.LRSP(12670, JSProf.LNF(12669, function (target, type, listener, dontFix) {
        // summary:
        //		This function acts the same as on(), but with pausable functionality. The
        //		returned signal object has pause() and resume() functions. Calling the
        //		pause() method will cause the listener to not be called for future events. Calling the
        //		resume() method will cause the listener to again be called for future events.
        var paused;
        var signal = JSProf.LFC(12661, on, false)(JSProf.LRE(12655, target), JSProf.LRE(12656, type), JSProf.LNF(12659, function () {
                if (!JSProf.LRE(12657, paused)) {
                    return JSProf.LMC(12658, listener, 'apply').apply(this, arguments);
                }
            }, 12), JSProf.LRE(12660, dontFix));
        JSProf.LPD(12664, signal, 'pause').pause = JSProf.LRSP(12664, JSProf.LNF(12663, function () {
            paused = JSProf.LWR(12662, paused, true);
        }, 12));
        JSProf.LPD(12667, signal, 'resume').resume = JSProf.LRSP(12667, JSProf.LNF(12666, function () {
            paused = JSProf.LWR(12665, paused, false);
        }, 12));
        return JSProf.LRE(12668, signal);
    }, 12));
    JSProf.LPD(12679, on, 'once').once = JSProf.LRSP(12679, JSProf.LNF(12678, function (target, type, listener, dontFix) {
        // summary:
        //		This function acts the same as on(), but will only call the listener once. The 
        //		listener will be called for the first
        //		event that takes place and then listener will automatically be removed.
        var signal = JSProf.LFC(12676, on, false)(JSProf.LRE(12671, target), JSProf.LRE(12672, type), JSProf.LNF(12675, function () {
                // remove this listener
                JSProf.LMC(12673, signal, 'remove').remove();
                // proceed to call the listener
                return JSProf.LMC(12674, listener, 'apply').apply(this, arguments);
            }, 12));
        return JSProf.LRE(12677, signal);
    }, 12));
    JSProf.LPD(12715, on, 'parse').parse = JSProf.LRSP(12715, JSProf.LNF(12714, function (target, type, listener, addListener, dontFix, matchesTarget) {
        if (JSProf.LGD(12680, type, 'call').call) {
            // event handler function
            // on(node, touch.press, touchListener);
            return JSProf.LMC(12684, type, 'call').call(JSProf.LRE(12681, matchesTarget), JSProf.LRE(12682, target), JSProf.LRE(12683, listener));
        }
        if (JSProf.LRE(12685, type) instanceof JSProf.LRU(12686, typeof Array === 'undefined' ? undefined : Array)) {
            // allow an array of event names (or event handler functions)
            events = JSProf.LWR(12688, events, JSProf.LRE(12687, type));
        } else if (JSProf.LMC(12689, type, 'indexOf').indexOf(",") > -1) {
            // we allow comma delimited event names, so you can register for multiple events at once
            var events = type.split(/\s*,\s*/);
        }
        if (JSProf.LRE(12690, events)) {
            var handles = JSProf.LNE(12691, [], 10);
            var i = 0;
            var eventName;
            while (eventName = JSProf.LWR(12693, eventName, JSProf.LGE(12692, events, JSProf.TMPS.t15623fa387993cb8dbc0c842805297179a28ce7b = i++)[JSProf.TMPS.t15623fa387993cb8dbc0c842805297179a28ce7b])) {
                JSProf.LMC(12701, handles, 'push').push(JSProf.LMC(12700, on, 'parse').parse(JSProf.LRE(12694, target), JSProf.LRE(12695, eventName), JSProf.LRE(12696, listener), JSProf.LRE(12697, addListener), JSProf.LRE(12698, dontFix), JSProf.LRE(12699, matchesTarget)));
            }
            JSProf.LPD(12706, handles, 'remove').remove = JSProf.LRSP(12706, JSProf.LNF(12705, function () {
                for (var i = 0; JSProf.LRE(12702, i) < JSProf.LGD(12703, handles, 'length').length; i++) {
                    JSProf.LMC(12704, handles[i], 'remove').remove();
                }
            }, 12));
            return JSProf.LRE(12707, handles);
        }
        return JSProf.LFC(12713, addListener, false)(JSProf.LRE(12708, target), JSProf.LRE(12709, type), JSProf.LRE(12710, listener), JSProf.LRE(12711, dontFix), JSProf.LRE(12712, matchesTarget));
    }, 12));
    var touchEvents = /^touch/;
    function addListener(target, type, listener, dontFix, matchesTarget) {
        // event delegation:
        var selector = JSProf.LMC(12716, type, 'match').match(/(.*):(.*)/);
        // if we have a selector:event, the last one is interpreted as an event, and we use event delegation
        if (JSProf.LRE(12717, selector)) {
            type = JSProf.LWR(12719, type, JSProf.LGE(12718, selector, 2)[2]);
            selector = JSProf.LWR(12721, selector, JSProf.LGE(12720, selector, 1)[1]);
            // create the extension event for selectors and directly call it
            return JSProf.LMC(12728, JSProf.LMC(12724, on, 'selector').selector(JSProf.LRE(12722, selector), JSProf.LRE(12723, type)), 'call').call(JSProf.LRE(12725, matchesTarget), JSProf.LRE(12726, target), JSProf.LRE(12727, listener));
        }
        // test to see if it a touch event right now, so we don't have to do it every time it fires
        if (JSProf.LFC(12729, has, false)("touch")) {
            if (JSProf.LMC(12731, touchEvents, 'test').test(JSProf.LRE(12730, type))) {
                // touch event, fix it
                listener = JSProf.LWR(12734, listener, JSProf.LFC(12733, fixTouchListener, false)(JSProf.LRE(12732, listener)));
            }
            if (!JSProf.LFC(12735, has, false)("event-orientationchange") && JSProf.LRE(12736, type) == "orientationchange") {
                //"orientationchange" not supported <= Android 2.1, 
                //but works through "resize" on window
                type = JSProf.LWR(12737, type, "resize");
                target = JSProf.LWR(12739, target, JSProf.LRU(12738, typeof window === 'undefined' ? undefined : window));
                listener = JSProf.LWR(12742, listener, JSProf.LFC(12741, fixTouchListener, false)(JSProf.LRE(12740, listener)));
            }
        }
        if (JSProf.LRE(12743, addStopImmediate)) {
            // add stopImmediatePropagation if it doesn't exist
            listener = JSProf.LWR(12746, listener, JSProf.LFC(12745, addStopImmediate, false)(JSProf.LRE(12744, listener)));
        }
        // normal path, the target is |this|
        if (JSProf.LGD(12747, target, 'addEventListener').addEventListener) {
            // the target has addEventListener, which should be used if available (might or might not be a node, non-nodes can implement this method as well)
            // check for capture conversions
            var capture = JSProf.LRE(12748, type) in JSProf.LRE(12749, captures), adjustedType = JSProf.LRE(12750, capture) ? JSProf.LGE(12751, captures, 'type')[type] : JSProf.LRE(12752, type);
            JSProf.LMC(12756, target, 'addEventListener').addEventListener(JSProf.LRE(12753, adjustedType), JSProf.LRE(12754, listener), JSProf.LRE(12755, capture));
            // create and return the signal
            return JSProf.LNE(12762, {
                remove: JSProf.LNF(12761, function () {
                    JSProf.LMC(12760, target, 'removeEventListener').removeEventListener(JSProf.LRE(12757, adjustedType), JSProf.LRE(12758, listener), JSProf.LRE(12759, capture));
                }, 12)
            }, 11);
        }
        type = JSProf.LWR(12764, type, "on" + JSProf.LRE(12763, type));
        if (JSProf.LRE(12765, fixAttach) && JSProf.LGD(12766, target, 'attachEvent').attachEvent) {
            return JSProf.LFC(12770, fixAttach, false)(JSProf.LRE(12767, target), JSProf.LRE(12768, type), JSProf.LRE(12769, listener));
        }
        throw JSProf.LNE(12772, new (JSProf.LFC(12771, Error, true))("Target must be an event emitter"), 'Error');
    }
    JSProf.LPD(12795, on, 'matches').matches = JSProf.LRSP(12795, JSProf.LNF(12794, function (node, selector, context, children, matchesTarget) {
        // summary:
        //		Check if a node match the current selector within the constraint of a context
        // node: DOMNode
        //		The node that originate the event
        // selector: String
        //		The selector to check against
        // context: DOMNode
        //		The context to search in.
        // children: Boolean
        //		Indicates if children elements of the selector should be allowed. This defaults to
        //		true
        // matchesTarget: Object|dojo/query?
        //		An object with a property "matches" as a function. Default is dojo/query.
        //		Matching DOMNodes will be done against this function
        //		The function must return a Boolean.
        //		It will have 3 arguments: "node", "selector" and "context"
        //		True is expected if "node" is matching the current "selector" in the passed "context"
        // returns: DOMNode?
        //		The matching node, if any. Else you get false
        // see if we have a valid matchesTarget or default to dojo/query
        matchesTarget = JSProf.LWR(12777, matchesTarget, JSProf.LRE(12773, matchesTarget) && JSProf.LGD(12774, matchesTarget, 'matches').matches ? JSProf.LRE(12775, matchesTarget) : JSProf.LGD(12776, dojo, 'query').query);
        children = JSProf.LWR(12779, children, JSProf.LRE(12778, children) !== false);
        // there is a selector, so make sure it matches
        if (JSProf.LGD(12780, node, 'nodeType').nodeType != 1) {
            // text node will fail in native match selector
            node = JSProf.LWR(12782, node, JSProf.LGD(12781, node, 'parentNode').parentNode);
        }
        while (!JSProf.LMC(12786, matchesTarget, 'matches').matches(JSProf.LRE(12783, node), JSProf.LRE(12784, selector), JSProf.LRE(12785, context))) {
            if (JSProf.LRE(12787, node) == JSProf.LRE(12788, context) || JSProf.LRE(12789, children) === false || !(node = JSProf.LWR(12791, node, JSProf.LGD(12790, node, 'parentNode').parentNode)) || JSProf.LGD(12792, node, 'nodeType').nodeType != 1) {
                // intentional assignment
                return false;
            }
        }
        return JSProf.LRE(12793, node);
    }, 12));
    JSProf.LPD(12824, on, 'selector').selector = JSProf.LRSP(12824, JSProf.LNF(12823, function (selector, eventType, children) {
        // summary:
        //		Creates a new extension event with event delegation. This is based on
        //		the provided event type (can be extension event) that
        //		only calls the listener when the CSS selector matches the target of the event.
        //
        //		The application must require() an appropriate level of dojo/query to handle the selector.
        // selector:
        //		The CSS selector to use for filter events and determine the |this| of the event listener.
        // eventType:
        //		The event to listen for
        // children:
        //		Indicates if children elements of the selector should be allowed. This defaults to 
        //		true
        // example:
        // |	require(["dojo/on", "dojo/mouse", "dojo/query!css2"], function(listen, mouse){
        // |		on(node, on.selector(".my-class", mouse.enter), handlerForMyHover);
        return JSProf.LNF(12822, function (target, listener) {
            JSProf.LFD(12821, select);
            // if the selector is function, use it to select the node, otherwise use the matches method
            var matchesTarget = typeof JSProf.LRE(12796, selector) == "function" ? JSProf.LNE(12797, { matches: selector }, 11) : this, bubble = JSProf.LGD(12798, eventType, 'bubble').bubble;
            function select(eventTarget) {
                return JSProf.LMC(12804, on, 'matches').matches(JSProf.LRE(12799, eventTarget), JSProf.LRE(12800, selector), JSProf.LRE(12801, target), JSProf.LRE(12802, children), JSProf.LRE(12803, matchesTarget));
            }
            if (JSProf.LRE(12805, bubble)) {
                // the event type doesn't naturally bubble, but has a bubbling form, use that, and give it the selector so it can perform the select itself
                return JSProf.LFC(12810, on, false)(JSProf.LRE(12806, target), JSProf.LFC(12808, bubble, false)(JSProf.LRE(12807, select)), JSProf.LRE(12809, listener));
            }
            // standard event delegation
            return JSProf.LFC(12820, on, false)(JSProf.LRE(12811, target), JSProf.LRE(12812, eventType), JSProf.LNF(12819, function (event) {
                // call select to see if we match
                var eventTarget = JSProf.LFC(12814, select, false)(JSProf.LGD(12813, event, 'target').target);
                // if it matches we call the listener
                if (JSProf.LRE(12815, eventTarget)) {
                    return JSProf.LMC(12818, listener, 'call').call(JSProf.LRE(12816, eventTarget), JSProf.LRE(12817, event));
                }
            }, 12));
        }, 12);
    }, 12));
    function syntheticPreventDefault() {
        JSProf.LPD(12825, this, 'cancelable').cancelable = JSProf.LRSP(12825, false);
        JSProf.LPD(12826, this, 'defaultPrevented').defaultPrevented = JSProf.LRSP(12826, true);
    }
    function syntheticStopPropagation() {
        JSProf.LPD(12827, this, 'bubbles').bubbles = JSProf.LRSP(12827, false);
    }
    var slice = JSProf.LGD(12829, JSProf.LNE(12828, [], 10), 'slice').slice, syntheticDispatch = JSProf.LPD(12860, on, 'emit').emit = JSProf.LRSP(12860, JSProf.LNF(12859, function (target, type, event) {
            // summary:
            //		Fires an event on the target object.
            // target:
            //		The target object to fire the event on. This can be a DOM element or a plain 
            //		JS object. If the target is a DOM element, native event emitting mechanisms
            //		are used when possible.
            // type:
            //		The event type name. You can emulate standard native events like "click" and 
            //		"mouseover" or create custom events like "open" or "finish".
            // event:
            //		An object that provides the properties for the event. See https://developer.mozilla.org/en/DOM/event.initEvent 
            //		for some of the properties. These properties are copied to the event object.
            //		Of particular importance are the cancelable and bubbles properties. The
            //		cancelable property indicates whether or not the event has a default action
            //		that can be cancelled. The event is cancelled by calling preventDefault() on
            //		the event object. The bubbles property indicates whether or not the
            //		event will bubble up the DOM tree. If bubbles is true, the event will be called
            //		on the target and then each parent successively until the top of the tree
            //		is reached or stopPropagation() is called. Both bubbles and cancelable 
            //		default to false.
            // returns:
            //		If the event is cancelable and the event is not cancelled,
            //		emit will return true. If the event is cancelable and the event is cancelled,
            //		emit will return false.
            // details:
            //		Note that this is designed to emit events for listeners registered through
            //		dojo/on. It should actually work with any event listener except those
            //		added through IE's attachEvent (IE8 and below's non-W3C event emitting
            //		doesn't support custom event types). It should work with all events registered
            //		through dojo/on. Also note that the emit method does do any default
            //		action, it only returns a value to indicate if the default action should take
            //		place. For example, emitting a keypress event would not cause a character
            //		to appear in a textbox.
            // example:
            //		To fire our own click event
            //	|	require(["dojo/on", "dojo/dom"
            //	|	], function(on, dom){
            //	|		on.emit(dom.byId("button"), "click", {
            //	|			cancelable: true,
            //	|			bubbles: true,
            //	|			screenX: 33,
            //	|			screenY: 44
            //	|		});
            //		We can also fire our own custom events:
            //	|		on.emit(dom.byId("slider"), "slide", {
            //	|			cancelable: true,
            //	|			bubbles: true,
            //	|			direction: "left-to-right"
            //	|		});
            //	|	});
            var args = JSProf.LMC(12830, slice, 'call').call(arguments, 2);
            var method = "on" + JSProf.LRE(12831, type);
            if ("parentNode" in JSProf.LRE(12832, target)) {
                // node (or node-like), create event controller methods
                var newEvent = JSProf.LPE(12834, args, 0)[0] = JSProf.LRPE(12834, JSProf.LNE(12833, {}, 11));
                for (var i in JSProf.LRE(12835, event)) {
                    JSProf.LPE(12837, newEvent, 'i')[i] = JSProf.LRPE(12837, JSProf.LGE(12836, event, 'i')[i]);
                }
                JSProf.LPD(12839, newEvent, 'preventDefault').preventDefault = JSProf.LRSP(12839, JSProf.LRE(12838, syntheticPreventDefault));
                JSProf.LPD(12841, newEvent, 'stopPropagation').stopPropagation = JSProf.LRSP(12841, JSProf.LRE(12840, syntheticStopPropagation));
                JSProf.LPD(12843, newEvent, 'target').target = JSProf.LRSP(12843, JSProf.LRE(12842, target));
                JSProf.LPD(12845, newEvent, 'type').type = JSProf.LRSP(12845, JSProf.LRE(12844, type));
                event = JSProf.LWR(12847, event, JSProf.LRE(12846, newEvent));
            }
            do {
                // call any node which has a handler (note that ideally we would try/catch to simulate normal event propagation but that causes too much pain for debugging)
                JSProf.LGE(12848, target, 'method')[method] && JSProf.LMC(12851, target[method], 'apply').apply(JSProf.LRE(12849, target), JSProf.LRE(12850, args));    // and then continue up the parent node chain if it is still bubbling (if started as bubbles and stopPropagation hasn't been called)
            } while (JSProf.LRE(12852, event) && JSProf.LGD(12853, event, 'bubbles').bubbles && (target = JSProf.LWR(12855, target, JSProf.LGD(12854, target, 'parentNode').parentNode)));
            return JSProf.LRE(12856, event) && JSProf.LGD(12857, event, 'cancelable').cancelable && JSProf.LRE(12858, event);    // if it is still true (was cancelable and was cancelled), return the event to indicate default action should happen
        }, 12));
    var captures = JSProf.LFC(12861, has, false)("event-focusin") ? JSProf.LNE(12862, {}, 11) : JSProf.LNE(12863, {
            focusin: "focus",
            focusout: "blur"
        }, 11);
    if (!JSProf.LFC(12864, has, false)("event-stopimmediatepropagation")) {
        var stopImmediatePropagation = JSProf.LNF(12867, function () {
                JSProf.LPD(12865, this, 'immediatelyStopped').immediatelyStopped = JSProf.LRSP(12865, true);
                JSProf.LPD(12866, this, 'modified').modified = JSProf.LRSP(12866, true);    // mark it as modified so the event will be cached in IE
            }, 12);
        var addStopImmediate = JSProf.LNF(12873, function (listener) {
                return JSProf.LNF(12872, function (event) {
                    if (!JSProf.LGD(12868, event, 'immediatelyStopped').immediatelyStopped) {
                        // check to make sure it hasn't been stopped immediately
                        JSProf.LPD(12870, event, 'stopImmediatePropagation').stopImmediatePropagation = JSProf.LRSP(12870, JSProf.LRE(12869, stopImmediatePropagation));
                        return JSProf.LMC(12871, listener, 'apply').apply(this, arguments);
                    }
                }, 12);
            }, 12);
    }
    if (JSProf.LFC(12874, has, false)("dom-addeventlistener")) {
        // emitter that works with native event handling
        JSProf.LPD(12894, on, 'emit').emit = JSProf.LRSP(12894, JSProf.LNF(12893, function (target, type, event) {
            if (JSProf.LGD(12875, target, 'dispatchEvent').dispatchEvent && JSProf.LGD(12876, document, 'createEvent').createEvent) {
                // use the native event emitting mechanism if it is available on the target object
                // create a generic event				
                // we could create branch into the different types of event constructors, but 
                // that would be a lot of extra code, with little benefit that I can see, seems 
                // best to use the generic constructor and copy properties over, making it 
                // easy to have events look like the ones created with specific initializers
                var ownerDocument = JSProf.LGD(12877, target, 'ownerDocument').ownerDocument || JSProf.LRU(12878, typeof document === 'undefined' ? undefined : document);
                var nativeEvent = JSProf.LMC(12879, ownerDocument, 'createEvent').createEvent("HTMLEvents");
                JSProf.LMC(12883, nativeEvent, 'initEvent').initEvent(JSProf.LRE(12880, type), !!JSProf.LGD(12881, event, 'bubbles').bubbles, !!JSProf.LGD(12882, event, 'cancelable').cancelable);
                // and copy all our properties over
                for (var i in JSProf.LRE(12884, event)) {
                    if (!(JSProf.LRE(12885, i) in JSProf.LRE(12886, nativeEvent))) {
                        JSProf.LPE(12888, nativeEvent, 'i')[i] = JSProf.LRPE(12888, JSProf.LGE(12887, event, 'i')[i]);
                    }
                }
                return target.dispatchEvent(JSProf.LRE(12889, nativeEvent)) && JSProf.LRE(12890, nativeEvent);
            }
            return JSProf.LMC(12892, syntheticDispatch, 'apply').apply(JSProf.LRE(12891, on), arguments);    // emit for a non-node
        }, 12));
    } else {
        // no addEventListener, basically old IE event normalization
        JSProf.LPD(12948, on, '_fixEvent')._fixEvent = JSProf.LRSP(12948, JSProf.LNF(12947, function (evt, sender) {
            // summary:
            //		normalizes properties on the event object including event
            //		bubbling methods, keystroke normalization, and x/y positions
            // evt:
            //		native event object
            // sender:
            //		node to treat as "currentTarget"
            if (!JSProf.LRE(12895, evt)) {
                var w = JSProf.LRE(12896, sender) && JSProf.LGD(12900, JSProf.LGD(12897, sender, 'ownerDocument').ownerDocument || JSProf.LGD(12898, sender, 'document').document || JSProf.LRE(12899, sender), 'parentWindow').parentWindow || JSProf.LRU(12901, typeof window === 'undefined' ? undefined : window);
                evt = JSProf.LWR(12903, evt, JSProf.LGD(12902, w, 'event').event);
            }
            if (!JSProf.LRE(12904, evt)) {
                return JSProf.LRE(12905, evt);
            }
            try {
                if (JSProf.LRE(12906, lastEvent) && JSProf.LGD(12907, evt, 'type').type == JSProf.LGD(12908, lastEvent, 'type').type && JSProf.LGD(12909, evt, 'srcElement').srcElement == JSProf.LGD(12910, lastEvent, 'target').target) {
                    // should be same event, reuse event object (so it can be augmented);
                    // accessing evt.srcElement rather than evt.target since evt.target not set on IE until fixup below
                    evt = JSProf.LWR(12912, evt, JSProf.LRE(12911, lastEvent));
                }
            } catch (e) {
            }
            if (!JSProf.LGD(12913, evt, 'target').target) {
                // check to see if it has been fixed yet
                JSProf.LPD(12915, evt, 'target').target = JSProf.LRSP(12915, JSProf.LGD(12914, evt, 'srcElement').srcElement);
                JSProf.LPD(12918, evt, 'currentTarget').currentTarget = JSProf.LRSP(12918, JSProf.LRE(12916, sender) || JSProf.LGD(12917, evt, 'srcElement').srcElement);
                if (JSProf.LGD(12919, evt, 'type').type == "mouseover") {
                    JSProf.LPD(12921, evt, 'relatedTarget').relatedTarget = JSProf.LRSP(12921, JSProf.LGD(12920, evt, 'fromElement').fromElement);
                }
                if (JSProf.LGD(12922, evt, 'type').type == "mouseout") {
                    JSProf.LPD(12924, evt, 'relatedTarget').relatedTarget = JSProf.LRSP(12924, JSProf.LGD(12923, evt, 'toElement').toElement);
                }
                if (!JSProf.LGD(12925, evt, 'stopPropagation').stopPropagation) {
                    JSProf.LPD(12927, evt, 'stopPropagation').stopPropagation = JSProf.LRSP(12927, JSProf.LRE(12926, stopPropagation));
                    JSProf.LPD(12929, evt, 'preventDefault').preventDefault = JSProf.LRSP(12929, JSProf.LRE(12928, preventDefault));
                }
                switch (JSProf.LGD(12930, evt, 'type').type) {
                case "keypress":
                    var c = "charCode" in JSProf.LRE(12931, evt) ? JSProf.LGD(12932, evt, 'charCode').charCode : JSProf.LGD(12933, evt, 'keyCode').keyCode;
                    if (JSProf.LRE(12934, c) == 10) {
                        // CTRL-ENTER is CTRL-ASCII(10) on IE, but CTRL-ENTER on Mozilla
                        c = JSProf.LWR(12935, c, 0);
                        JSProf.LPD(12936, evt, 'keyCode').keyCode = JSProf.LRSP(12936, 13);
                    } else if (JSProf.LRE(12937, c) == 13 || JSProf.LRE(12938, c) == 27) {
                        c = JSProf.LWR(12939, c, 0);    // Mozilla considers ENTER and ESC non-printable
                    } else if (JSProf.LRE(12940, c) == 3) {
                        c = JSProf.LWR(12941, c, 99);    // Mozilla maps CTRL-BREAK to CTRL-c
                    }
                    // Mozilla sets keyCode to 0 when there is a charCode
                    // but that stops the event on IE.
                    JSProf.LPD(12943, evt, 'charCode').charCode = JSProf.LRSP(12943, JSProf.LRE(12942, c));
                    JSProf.LFC(12945, _setKeyChar, false)(JSProf.LRE(12944, evt));
                    break;
                }
            }
            return JSProf.LRE(12946, evt);
        }, 12));
        var lastEvent, IESignal = JSProf.LNF(12951, function (handle) {
                JSProf.LPD(12950, this, 'handle').handle = JSProf.LRSP(12950, JSProf.LRE(12949, handle));
            }, 12);
        JSProf.LPD(12953, IESignal.prototype, 'remove').remove = JSProf.LRSP(12953, JSProf.LNF(12952, function () {
            delete _dojoIEListeners_[this.handle];
        }, 12));
        var fixListener = JSProf.LNF(12966, function (listener) {
                // this is a minimal function for closing on the previous listener with as few as variables as possible
                return JSProf.LNF(12965, function (evt) {
                    evt = JSProf.LWR(12956, evt, JSProf.LMC(12955, on, '_fixEvent')._fixEvent(JSProf.LRE(12954, evt), this));
                    var result = JSProf.LMC(12958, listener, 'call').call(this, JSProf.LRE(12957, evt));
                    if (JSProf.LGD(12959, evt, 'modified').modified) {
                        // cache the last event and reuse it if we can
                        if (!JSProf.LRE(12960, lastEvent)) {
                            setTimeout(JSProf.LNF(12961, function () {
                                lastEvent = null;
                            }, 12));
                        }
                        lastEvent = JSProf.LWR(12963, lastEvent, JSProf.LRE(12962, evt));
                    }
                    return JSProf.LRE(12964, result);
                }, 12);
            }, 12);
        var fixAttach = JSProf.LNF(13007, function (target, type, listener) {
                listener = JSProf.LWR(12969, listener, JSProf.LFC(12968, fixListener, false)(JSProf.LRE(12967, listener)));
                if (((JSProf.LGD(12970, target, 'ownerDocument').ownerDocument ? JSProf.LGD(12971, target.ownerDocument, 'parentWindow').parentWindow : JSProf.LGD(12972, target, 'parentWindow').parentWindow || JSProf.LGD(12973, target, 'window').window || JSProf.LRU(12974, typeof window === 'undefined' ? undefined : window)) != JSProf.LRU(12975, typeof top === 'undefined' ? undefined : top) || JSProf.LFC(12976, has, false)("jscript") < 5.8) && !JSProf.LFC(12977, has, false)("config-_allow_leaks")) {
                    // IE will leak memory on certain handlers in frames (IE8 and earlier) and in unattached DOM nodes for JScript 5.7 and below.
                    // Here we use global redirection to solve the memory leaks
                    if (typeof JSProf.LRU(12978, typeof _dojoIEListeners_ === 'undefined' ? undefined : _dojoIEListeners_) == "undefined") {
                        _dojoIEListeners_ = JSProf.LWU(12980, JSProf.I(typeof _dojoIEListeners_ === 'undefined' ? undefined : _dojoIEListeners_), JSProf.LNE(12979, [], 10));
                    }
                    var emitter = JSProf.LGE(12981, target, 'type')[type];
                    if (!JSProf.LRE(12982, emitter) || !JSProf.LGD(12983, emitter, 'listeners').listeners) {
                        var oldListener = JSProf.LRE(12984, emitter);
                        emitter = JSProf.LWR(12986, emitter, JSProf.LFC(12985, Function, false)('event', 'var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}'));
                        JSProf.LPD(12988, emitter, 'listeners').listeners = JSProf.LRSP(12988, JSProf.LNE(12987, [], 10));
                        JSProf.LPE(12990, target, 'type')[type] = JSProf.LRPE(12990, JSProf.LRE(12989, emitter));
                        JSProf.LPD(12991, emitter, 'global').global = JSProf.LRSP(12991, this);
                        if (JSProf.LRE(12992, oldListener)) {
                            JSProf.LMC(12995, emitter.listeners, 'push').push(JSProf.LMC(12994, _dojoIEListeners_, 'push').push(JSProf.LRE(12993, oldListener)) - 1);
                        }
                    }
                    var handle;
                    JSProf.LMC(12999, emitter.listeners, 'push').push(handle = JSProf.LWR(12998, handle, JSProf.LMC(12997, emitter.global._dojoIEListeners_, 'push').push(JSProf.LRE(12996, listener)) - 1));
                    return JSProf.LNE(13002, new (JSProf.LFC(13001, IESignal, true))(JSProf.LRE(13000, handle)), 'IESignal');
                }
                return JSProf.LMC(13006, aspect, 'after').after(JSProf.LRE(13003, target), JSProf.LRE(13004, type), JSProf.LRE(13005, listener), true);
            }, 12);
        var _setKeyChar = JSProf.LNF(13015, function (evt) {
                JSProf.LPD(13011, evt, 'keyChar').keyChar = JSProf.LRSP(13011, JSProf.LGD(13008, evt, 'charCode').charCode ? JSProf.LMC(13010, String, 'fromCharCode').fromCharCode(JSProf.LGD(13009, evt, 'charCode').charCode) : '');
                JSProf.LPD(13014, evt, 'charOrCode').charOrCode = JSProf.LRSP(13014, JSProf.LGD(13012, evt, 'keyChar').keyChar || JSProf.LGD(13013, evt, 'keyCode').keyCode);    // TODO: remove for 2.0
            }, 12);
        // Called in Event scope
        var stopPropagation = JSProf.LNF(13017, function () {
                JSProf.LPD(13016, this, 'cancelBubble').cancelBubble = JSProf.LRSP(13016, true);
            }, 12);
        var preventDefault = JSProf.LPD(13026, on, '_preventDefault')._preventDefault = JSProf.LRSP(13026, JSProf.LNF(13025, function () {
                // Setting keyCode to 0 is the only way to prevent certain keypresses (namely
                // ctrl-combinations that correspond to menu accelerator keys).
                // Otoh, it prevents upstream listeners from getting this information
                // Try to split the difference here by clobbering keyCode only for ctrl
                // combinations. If you still need to access the key upstream, bubbledKeyCode is
                // provided as a workaround.
                JSProf.LPD(13019, this, 'bubbledKeyCode').bubbledKeyCode = JSProf.LRSP(13019, JSProf.LGD(13018, this, 'keyCode').keyCode);
                if (JSProf.LGD(13020, this, 'ctrlKey').ctrlKey) {
                    try {
                        // squelch errors when keyCode is read-only
                        // (e.g. if keyCode is ctrl or shift)
                        JSProf.LPD(13021, this, 'keyCode').keyCode = JSProf.LRSP(13021, 0);
                    } catch (e) {
                    }
                }
                JSProf.LPD(13022, this, 'defaultPrevented').defaultPrevented = JSProf.LRSP(13022, true);
                JSProf.LPD(13023, this, 'returnValue').returnValue = JSProf.LRSP(13023, false);
                JSProf.LPD(13024, this, 'modified').modified = JSProf.LRSP(13024, true);    // mark it as modified  (for defaultPrevented flag) so the event will be cached in IE
            }, 12));
    }
    if (JSProf.LFC(13027, has, false)("touch")) {
        var EventDelegate = JSProf.LNF(13028, function () {
            }, 12);
        var windowOrientation = JSProf.LGD(13029, window, 'orientation').orientation;
        var fixTouchListener = JSProf.LNF(13075, function (listener) {
                return JSProf.LNF(13074, function (originalEvent) {
                    //Event normalization(for ontouchxxx and resize): 
                    //1.incorrect e.pageX|pageY in iOS 
                    //2.there are no "e.rotation", "e.scale" and "onorientationchange" in Android
                    //3.More TBD e.g. force | screenX | screenX | clientX | clientY | radiusX | radiusY
                    // see if it has already been corrected
                    var event = JSProf.LGD(13030, originalEvent, 'corrected').corrected;
                    if (!JSProf.LRE(13031, event)) {
                        var type = JSProf.LGD(13032, originalEvent, 'type').type;
                        try {
                            delete originalEvent.type;    // on some JS engines (android), deleting properties makes them mutable
                        } catch (e) {
                        }
                        if (JSProf.LGD(13033, originalEvent, 'type').type) {
                            // Deleting the property of the original event did not work (this is the case of
                            // browsers such as older Safari iOS), hence fallback:
                            if (JSProf.LFC(13034, has, false)("touch-can-modify-event-delegate")) {
                                // If deleting properties of delegated event works, use event delegation:
                                JSProf.LPD(13036, EventDelegate, 'prototype').prototype = JSProf.LRSP(13036, JSProf.LRE(13035, originalEvent));
                                event = JSProf.LWR(13039, event, JSProf.LNE(13038, new (JSProf.LFC(13037, EventDelegate, true))(), 'EventDelegate'));
                            } else {
                                // Otherwise last fallback: other browsers, such as mobile Firefox, do not like
                                // delegated properties, so we have to copy
                                event = JSProf.LWR(13041, event, JSProf.LNE(13040, {}, 11));
                                for (var name in JSProf.LRE(13042, originalEvent)) {
                                    JSProf.LPE(13044, event, 'name')[name] = JSProf.LRPE(13044, JSProf.LGE(13043, originalEvent, 'name')[name]);
                                }
                            }
                            // have to delegate methods to make them work
                            JSProf.LPD(13047, event, 'preventDefault').preventDefault = JSProf.LRSP(13047, JSProf.LNF(13046, function () {
                                JSProf.LMC(13045, originalEvent, 'preventDefault').preventDefault();
                            }, 12));
                            JSProf.LPD(13050, event, 'stopPropagation').stopPropagation = JSProf.LRSP(13050, JSProf.LNF(13049, function () {
                                JSProf.LMC(13048, originalEvent, 'stopPropagation').stopPropagation();
                            }, 12));
                        } else {
                            // deletion worked, use property as is
                            event = JSProf.LWR(13052, event, JSProf.LRE(13051, originalEvent));
                            JSProf.LPD(13054, event, 'type').type = JSProf.LRSP(13054, JSProf.LRE(13053, type));
                        }
                        JSProf.LPD(13056, originalEvent, 'corrected').corrected = JSProf.LRSP(13056, JSProf.LRE(13055, event));
                        if (JSProf.LRE(13057, type) == 'resize') {
                            if (JSProf.LRE(13058, windowOrientation) == JSProf.LGD(13059, window, 'orientation').orientation) {
                                return null;    //double tap causes an unexpected 'resize' in Android
                            }
                            windowOrientation = JSProf.LWR(13061, windowOrientation, JSProf.LGD(13060, window, 'orientation').orientation);
                            JSProf.LPD(13062, event, 'type').type = JSProf.LRSP(13062, "orientationchange");
                            return JSProf.LMC(13064, listener, 'call').call(this, JSProf.LRE(13063, event));
                        }
                        // We use the original event and augment, rather than doing an expensive mixin operation
                        if (!("rotation" in JSProf.LRE(13065, event))) {
                            // test to see if it has rotation
                            JSProf.LPD(13066, event, 'rotation').rotation = JSProf.LRSP(13066, 0);
                            JSProf.LPD(13067, event, 'scale').scale = JSProf.LRSP(13067, 1);
                        }
                        //use event.changedTouches[0].pageX|pageY|screenX|screenY|clientX|clientY|target
                        var firstChangeTouch = JSProf.LGE(13068, event.changedTouches, 0)[0];
                        for (var i in JSProf.LRE(13069, firstChangeTouch)) {
                            // use for-in, we don't need to have dependency on dojo/_base/lang here
                            delete event[i];
                            // delete it first to make it mutable
                            JSProf.LPE(13071, event, 'i')[i] = JSProf.LRPE(13071, JSProf.LGE(13070, firstChangeTouch, 'i')[i]);
                        }
                    }
                    return JSProf.LMC(13073, listener, 'call').call(this, JSProf.LRE(13072, event));
                }, 12);
            }, 12);
    }
    return JSProf.LRE(13076, on);
}, 12));