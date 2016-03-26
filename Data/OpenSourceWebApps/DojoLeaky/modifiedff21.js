JSProf.LFC(12610, define, false)(JSProf.LNE(12145, [
    "./has!dom-addeventlistener?:./aspect",
    "./_base/kernel",
    "./sniff"
], 10), JSProf.LNF(12609, function (aspect, dojo, has) {
    JSProf.LFD(12606, addListener);
    JSProf.LFD(12607, syntheticPreventDefault);
    JSProf.LFD(12608, syntheticStopPropagation);
    "use strict";
    if (JSProf.LFC(12146, has, false)("dom")) {
        // check to make sure we are in a browser, this module should work anywhere
        var major = JSProf.LGD(12147, window, 'ScriptEngineMajorVersion').ScriptEngineMajorVersion;
        JSProf.LMC(12151, has, 'add').add("jscript", JSProf.LRE(12148, major) && JSProf.LFC(12149, major, false)() + JSProf.LFC(12150, ScriptEngineMinorVersion, false)() / 10);
        JSProf.LMC(12154, has, 'add').add("event-orientationchange", JSProf.LFC(12152, has, false)("touch") && !JSProf.LFC(12153, has, false)("android"));
        // TODO: how do we detect this?
        JSProf.LMC(12158, has, 'add').add("event-stopimmediatepropagation", JSProf.LGD(12155, window, 'Event').Event && !!JSProf.LGD(12156, window.Event, 'prototype').prototype && !!JSProf.LGD(12157, window.Event.prototype, 'stopImmediatePropagation').stopImmediatePropagation);
        JSProf.LMC(12161, has, 'add').add("event-focusin", JSProf.LNF(12160, function (global, doc, element) {
            return 'onfocusin' in JSProf.LRE(12159, element);
        }, 12));
        if (JSProf.LFC(12162, has, false)("touch")) {
            JSProf.LMC(12170, has, 'add').add("touch-can-modify-event-delegate", JSProf.LNF(12169, function () {
                // This feature test checks whether deleting a property of an event delegate works
                // for a touch-enabled device. If it works, event delegation can be used as fallback
                // for browsers such as Safari in older iOS where deleting properties of the original
                // event does not work.
                var EventDelegate = JSProf.LNF(12163, function () {
                    }, 12);
                JSProf.LPD(12165, EventDelegate, 'prototype').prototype = JSProf.LRSP(12165, JSProf.LMC(12164, document, 'createEvent').createEvent("MouseEvents"));
                // original event
                // Attempt to modify a property of an event delegate and check if
                // it succeeds. Depending on browsers and on whether dojo/on's
                // strict mode is stripped in a Dojo build, there are 3 known behaviors:
                // it may either succeed, or raise an error, or fail to set the property
                // without raising an error.
                try {
                    var eventDelegate = JSProf.LNE(12167, new (JSProf.LFC(12166, EventDelegate, true))(), 'EventDelegate');
                    eventDelegate.target = null;
                    return JSProf.LGD(12168, eventDelegate, 'target').target === null;
                } catch (e) {
                    return false;    // cannot use event delegation
                }
            }, 12));
        }
    }
    var on = JSProf.LNF(12183, function (target, type, listener, dontFix) {
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
            if (typeof JSProf.LGD(12171, target, 'on').on == "function" && typeof JSProf.LRE(12172, type) != "function" && !JSProf.LGD(12173, target, 'nodeType').nodeType) {
                // delegate to the target's on() method, so it can handle it's own listening if it wants (unless it 
                // is DOM node and we may be dealing with jQuery or Prototype's incompatible addition to the
                // Element prototype 
                return JSProf.LMC(12176, target, 'on').on(JSProf.LRE(12174, type), JSProf.LRE(12175, listener));
            }
            // delegate to main listener code
            return JSProf.LMC(12182, on, 'parse').parse(JSProf.LRE(12177, target), JSProf.LRE(12178, type), JSProf.LRE(12179, listener), JSProf.LRE(12180, addListener), JSProf.LRE(12181, dontFix), this);
        }, 12);
    JSProf.LPD(12199, on, 'pausable').pausable = JSProf.LRSP(12199, JSProf.LNF(12198, function (target, type, listener, dontFix) {
        // summary:
        //		This function acts the same as on(), but with pausable functionality. The
        //		returned signal object has pause() and resume() functions. Calling the
        //		pause() method will cause the listener to not be called for future events. Calling the
        //		resume() method will cause the listener to again be called for future events.
        var paused;
        var signal = JSProf.LFC(12190, on, false)(JSProf.LRE(12184, target), JSProf.LRE(12185, type), JSProf.LNF(12188, function () {
                if (!JSProf.LRE(12186, paused)) {
                    return JSProf.LMC(12187, listener, 'apply').apply(this, arguments);
                }
            }, 12), JSProf.LRE(12189, dontFix));
        JSProf.LPD(12193, signal, 'pause').pause = JSProf.LRSP(12193, JSProf.LNF(12192, function () {
            paused = JSProf.LWR(12191, paused, true);
        }, 12));
        JSProf.LPD(12196, signal, 'resume').resume = JSProf.LRSP(12196, JSProf.LNF(12195, function () {
            paused = JSProf.LWR(12194, paused, false);
        }, 12));
        return JSProf.LRE(12197, signal);
    }, 12));
    JSProf.LPD(12208, on, 'once').once = JSProf.LRSP(12208, JSProf.LNF(12207, function (target, type, listener, dontFix) {
        // summary:
        //		This function acts the same as on(), but will only call the listener once. The 
        //		listener will be called for the first
        //		event that takes place and then listener will automatically be removed.
        var signal = JSProf.LFC(12205, on, false)(JSProf.LRE(12200, target), JSProf.LRE(12201, type), JSProf.LNF(12204, function () {
                // remove this listener
                JSProf.LMC(12202, signal, 'remove').remove();
                // proceed to call the listener
                return JSProf.LMC(12203, listener, 'apply').apply(this, arguments);
            }, 12));
        return JSProf.LRE(12206, signal);
    }, 12));
    JSProf.LPD(12244, on, 'parse').parse = JSProf.LRSP(12244, JSProf.LNF(12243, function (target, type, listener, addListener, dontFix, matchesTarget) {
        if (JSProf.LGD(12209, type, 'call').call) {
            // event handler function
            // on(node, touch.press, touchListener);
            return JSProf.LMC(12213, type, 'call').call(JSProf.LRE(12210, matchesTarget), JSProf.LRE(12211, target), JSProf.LRE(12212, listener));
        }
        if (JSProf.LRE(12214, type) instanceof JSProf.LRU(12215, typeof Array === 'undefined' ? undefined : Array)) {
            // allow an array of event names (or event handler functions)
            events = JSProf.LWR(12217, events, JSProf.LRE(12216, type));
        } else if (JSProf.LMC(12218, type, 'indexOf').indexOf(",") > -1) {
            // we allow comma delimited event names, so you can register for multiple events at once
            var events = type.split(/\s*,\s*/);
        }
        if (JSProf.LRE(12219, events)) {
            var handles = JSProf.LNE(12220, [], 10);
            var i = 0;
            var eventName;
            while (eventName = JSProf.LWR(12222, eventName, JSProf.LGE(12221, events, JSProf.TMPS.t15623fa387993cb8dbc0c842805297179a28ce7b = i++)[JSProf.TMPS.t15623fa387993cb8dbc0c842805297179a28ce7b])) {
                JSProf.LMC(12230, handles, 'push').push(JSProf.LMC(12229, on, 'parse').parse(JSProf.LRE(12223, target), JSProf.LRE(12224, eventName), JSProf.LRE(12225, listener), JSProf.LRE(12226, addListener), JSProf.LRE(12227, dontFix), JSProf.LRE(12228, matchesTarget)));
            }
            JSProf.LPD(12235, handles, 'remove').remove = JSProf.LRSP(12235, JSProf.LNF(12234, function () {
                for (var i = 0; JSProf.LRE(12231, i) < JSProf.LGD(12232, handles, 'length').length; i++) {
                    JSProf.LMC(12233, handles[i], 'remove').remove();
                }
            }, 12));
            return JSProf.LRE(12236, handles);
        }
        return JSProf.LFC(12242, addListener, false)(JSProf.LRE(12237, target), JSProf.LRE(12238, type), JSProf.LRE(12239, listener), JSProf.LRE(12240, dontFix), JSProf.LRE(12241, matchesTarget));
    }, 12));
    var touchEvents = /^touch/;
    function addListener(target, type, listener, dontFix, matchesTarget) {
        // event delegation:
        var selector = JSProf.LMC(12245, type, 'match').match(/(.*):(.*)/);
        // if we have a selector:event, the last one is interpreted as an event, and we use event delegation
        if (JSProf.LRE(12246, selector)) {
            type = JSProf.LWR(12248, type, JSProf.LGE(12247, selector, 2)[2]);
            selector = JSProf.LWR(12250, selector, JSProf.LGE(12249, selector, 1)[1]);
            // create the extension event for selectors and directly call it
            return JSProf.LMC(12257, JSProf.LMC(12253, on, 'selector').selector(JSProf.LRE(12251, selector), JSProf.LRE(12252, type)), 'call').call(JSProf.LRE(12254, matchesTarget), JSProf.LRE(12255, target), JSProf.LRE(12256, listener));
        }
        // test to see if it a touch event right now, so we don't have to do it every time it fires
        if (JSProf.LFC(12258, has, false)("touch")) {
            if (JSProf.LMC(12260, touchEvents, 'test').test(JSProf.LRE(12259, type))) {
                // touch event, fix it
                listener = JSProf.LWR(12263, listener, JSProf.LFC(12262, fixTouchListener, false)(JSProf.LRE(12261, listener)));
            }
            if (!JSProf.LFC(12264, has, false)("event-orientationchange") && JSProf.LRE(12265, type) == "orientationchange") {
                //"orientationchange" not supported <= Android 2.1, 
                //but works through "resize" on window
                type = JSProf.LWR(12266, type, "resize");
                target = JSProf.LWR(12268, target, JSProf.LRU(12267, typeof window === 'undefined' ? undefined : window));
                listener = JSProf.LWR(12271, listener, JSProf.LFC(12270, fixTouchListener, false)(JSProf.LRE(12269, listener)));
            }
        }
        if (JSProf.LRE(12272, addStopImmediate)) {
            // add stopImmediatePropagation if it doesn't exist
            listener = JSProf.LWR(12275, listener, JSProf.LFC(12274, addStopImmediate, false)(JSProf.LRE(12273, listener)));
        }
        // normal path, the target is |this|
        if (JSProf.LGD(12276, target, 'addEventListener').addEventListener) {
            // the target has addEventListener, which should be used if available (might or might not be a node, non-nodes can implement this method as well)
            // check for capture conversions
            var capture = JSProf.LRE(12277, type) in JSProf.LRE(12278, captures), adjustedType = JSProf.LRE(12279, capture) ? JSProf.LGE(12280, captures, 'type')[type] : JSProf.LRE(12281, type);
            JSProf.LMC(12285, target, 'addEventListener').addEventListener(JSProf.LRE(12282, adjustedType), JSProf.LRE(12283, listener), JSProf.LRE(12284, capture));
            // create and return the signal
            return JSProf.LNE(12291, {
                remove: JSProf.LNF(12290, function () {
                    JSProf.LMC(12289, target, 'removeEventListener').removeEventListener(JSProf.LRE(12286, adjustedType), JSProf.LRE(12287, listener), JSProf.LRE(12288, capture));
                }, 12)
            }, 11);
        }
        type = JSProf.LWR(12293, type, "on" + JSProf.LRE(12292, type));
        if (JSProf.LRE(12294, fixAttach) && JSProf.LGD(12295, target, 'attachEvent').attachEvent) {
            return JSProf.LFC(12299, fixAttach, false)(JSProf.LRE(12296, target), JSProf.LRE(12297, type), JSProf.LRE(12298, listener));
        }
        throw JSProf.LNE(12301, new (JSProf.LFC(12300, Error, true))("Target must be an event emitter"), 'Error');
    }
    JSProf.LPD(12324, on, 'matches').matches = JSProf.LRSP(12324, JSProf.LNF(12323, function (node, selector, context, children, matchesTarget) {
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
        matchesTarget = JSProf.LWR(12306, matchesTarget, JSProf.LRE(12302, matchesTarget) && JSProf.LGD(12303, matchesTarget, 'matches').matches ? JSProf.LRE(12304, matchesTarget) : JSProf.LGD(12305, dojo, 'query').query);
        children = JSProf.LWR(12308, children, JSProf.LRE(12307, children) !== false);
        // there is a selector, so make sure it matches
        if (JSProf.LGD(12309, node, 'nodeType').nodeType != 1) {
            // text node will fail in native match selector
            node = JSProf.LWR(12311, node, JSProf.LGD(12310, node, 'parentNode').parentNode);
        }
        while (!JSProf.LMC(12315, matchesTarget, 'matches').matches(JSProf.LRE(12312, node), JSProf.LRE(12313, selector), JSProf.LRE(12314, context))) {
            if (JSProf.LRE(12316, node) == JSProf.LRE(12317, context) || JSProf.LRE(12318, children) === false || !(node = JSProf.LWR(12320, node, JSProf.LGD(12319, node, 'parentNode').parentNode)) || JSProf.LGD(12321, node, 'nodeType').nodeType != 1) {
                // intentional assignment
                return false;
            }
        }
        return JSProf.LRE(12322, node);
    }, 12));
    JSProf.LPD(12353, on, 'selector').selector = JSProf.LRSP(12353, JSProf.LNF(12352, function (selector, eventType, children) {
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
        return JSProf.LNF(12351, function (target, listener) {
            JSProf.LFD(12350, select);
            // if the selector is function, use it to select the node, otherwise use the matches method
            var matchesTarget = typeof JSProf.LRE(12325, selector) == "function" ? JSProf.LNE(12326, { matches: selector }, 11) : this, bubble = JSProf.LGD(12327, eventType, 'bubble').bubble;
            function select(eventTarget) {
                return JSProf.LMC(12333, on, 'matches').matches(JSProf.LRE(12328, eventTarget), JSProf.LRE(12329, selector), JSProf.LRE(12330, target), JSProf.LRE(12331, children), JSProf.LRE(12332, matchesTarget));
            }
            if (JSProf.LRE(12334, bubble)) {
                // the event type doesn't naturally bubble, but has a bubbling form, use that, and give it the selector so it can perform the select itself
                return JSProf.LFC(12339, on, false)(JSProf.LRE(12335, target), JSProf.LFC(12337, bubble, false)(JSProf.LRE(12336, select)), JSProf.LRE(12338, listener));
            }
            // standard event delegation
            return JSProf.LFC(12349, on, false)(JSProf.LRE(12340, target), JSProf.LRE(12341, eventType), JSProf.LNF(12348, function (event) {
                // call select to see if we match
                var eventTarget = JSProf.LFC(12343, select, false)(JSProf.LGD(12342, event, 'target').target);
                // if it matches we call the listener
                if (JSProf.LRE(12344, eventTarget)) {
                    return JSProf.LMC(12347, listener, 'call').call(JSProf.LRE(12345, eventTarget), JSProf.LRE(12346, event));
                }
            }, 12));
        }, 12);
    }, 12));
    function syntheticPreventDefault() {
        JSProf.LPD(12354, this, 'cancelable').cancelable = JSProf.LRSP(12354, false);
        JSProf.LPD(12355, this, 'defaultPrevented').defaultPrevented = JSProf.LRSP(12355, true);
    }
    function syntheticStopPropagation() {
        JSProf.LPD(12356, this, 'bubbles').bubbles = JSProf.LRSP(12356, false);
    }
    var slice = JSProf.LGD(12358, JSProf.LNE(12357, [], 10), 'slice').slice, syntheticDispatch = JSProf.LPD(12389, on, 'emit').emit = JSProf.LRSP(12389, JSProf.LNF(12388, function (target, type, event) {
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
            var args = JSProf.LMC(12359, slice, 'call').call(arguments, 2);
            var method = "on" + JSProf.LRE(12360, type);
            if ("parentNode" in JSProf.LRE(12361, target)) {
                // node (or node-like), create event controller methods
                var newEvent = JSProf.LPE(12363, args, 0)[0] = JSProf.LRPE(12363, JSProf.LNE(12362, {}, 11));
                for (var i in JSProf.LRE(12364, event)) {
                    JSProf.LPE(12366, newEvent, 'i')[i] = JSProf.LRPE(12366, JSProf.LGE(12365, event, 'i')[i]);
                }
                JSProf.LPD(12368, newEvent, 'preventDefault').preventDefault = JSProf.LRSP(12368, JSProf.LRE(12367, syntheticPreventDefault));
                JSProf.LPD(12370, newEvent, 'stopPropagation').stopPropagation = JSProf.LRSP(12370, JSProf.LRE(12369, syntheticStopPropagation));
                JSProf.LPD(12372, newEvent, 'target').target = JSProf.LRSP(12372, JSProf.LRE(12371, target));
                JSProf.LPD(12374, newEvent, 'type').type = JSProf.LRSP(12374, JSProf.LRE(12373, type));
                event = JSProf.LWR(12376, event, JSProf.LRE(12375, newEvent));
            }
            do {
                // call any node which has a handler (note that ideally we would try/catch to simulate normal event propagation but that causes too much pain for debugging)
                JSProf.LGE(12377, target, 'method')[method] && JSProf.LMC(12380, target[method], 'apply').apply(JSProf.LRE(12378, target), JSProf.LRE(12379, args));    // and then continue up the parent node chain if it is still bubbling (if started as bubbles and stopPropagation hasn't been called)
            } while (JSProf.LRE(12381, event) && JSProf.LGD(12382, event, 'bubbles').bubbles && (target = JSProf.LWR(12384, target, JSProf.LGD(12383, target, 'parentNode').parentNode)));
            return JSProf.LRE(12385, event) && JSProf.LGD(12386, event, 'cancelable').cancelable && JSProf.LRE(12387, event);    // if it is still true (was cancelable and was cancelled), return the event to indicate default action should happen
        }, 12));
    var captures = JSProf.LFC(12390, has, false)("event-focusin") ? JSProf.LNE(12391, {}, 11) : JSProf.LNE(12392, {
            focusin: "focus",
            focusout: "blur"
        }, 11);
    if (!JSProf.LFC(12393, has, false)("event-stopimmediatepropagation")) {
        var stopImmediatePropagation = JSProf.LNF(12396, function () {
                JSProf.LPD(12394, this, 'immediatelyStopped').immediatelyStopped = JSProf.LRSP(12394, true);
                JSProf.LPD(12395, this, 'modified').modified = JSProf.LRSP(12395, true);    // mark it as modified so the event will be cached in IE
            }, 12);
        var addStopImmediate = JSProf.LNF(12402, function (listener) {
                return JSProf.LNF(12401, function (event) {
                    if (!JSProf.LGD(12397, event, 'immediatelyStopped').immediatelyStopped) {
                        // check to make sure it hasn't been stopped immediately
                        JSProf.LPD(12399, event, 'stopImmediatePropagation').stopImmediatePropagation = JSProf.LRSP(12399, JSProf.LRE(12398, stopImmediatePropagation));
                        return JSProf.LMC(12400, listener, 'apply').apply(this, arguments);
                    }
                }, 12);
            }, 12);
    }
    if (JSProf.LFC(12403, has, false)("dom-addeventlistener")) {
        // emitter that works with native event handling
        JSProf.LPD(12423, on, 'emit').emit = JSProf.LRSP(12423, JSProf.LNF(12422, function (target, type, event) {
            if (JSProf.LGD(12404, target, 'dispatchEvent').dispatchEvent && JSProf.LGD(12405, document, 'createEvent').createEvent) {
                // use the native event emitting mechanism if it is available on the target object
                // create a generic event				
                // we could create branch into the different types of event constructors, but 
                // that would be a lot of extra code, with little benefit that I can see, seems 
                // best to use the generic constructor and copy properties over, making it 
                // easy to have events look like the ones created with specific initializers
                var ownerDocument = JSProf.LGD(12406, target, 'ownerDocument').ownerDocument || JSProf.LRU(12407, typeof document === 'undefined' ? undefined : document);
                var nativeEvent = JSProf.LMC(12408, ownerDocument, 'createEvent').createEvent("HTMLEvents");
                JSProf.LMC(12412, nativeEvent, 'initEvent').initEvent(JSProf.LRE(12409, type), !!JSProf.LGD(12410, event, 'bubbles').bubbles, !!JSProf.LGD(12411, event, 'cancelable').cancelable);
                // and copy all our properties over
                for (var i in JSProf.LRE(12413, event)) {
                    if (!(JSProf.LRE(12414, i) in JSProf.LRE(12415, nativeEvent))) {
                        JSProf.LPE(12417, nativeEvent, 'i')[i] = JSProf.LRPE(12417, JSProf.LGE(12416, event, 'i')[i]);
                    }
                }
                return target.dispatchEvent(JSProf.LRE(12418, nativeEvent)) && JSProf.LRE(12419, nativeEvent);
            }
            return JSProf.LMC(12421, syntheticDispatch, 'apply').apply(JSProf.LRE(12420, on), arguments);    // emit for a non-node
        }, 12));
    } else {
        // no addEventListener, basically old IE event normalization
        JSProf.LPD(12477, on, '_fixEvent')._fixEvent = JSProf.LRSP(12477, JSProf.LNF(12476, function (evt, sender) {
            // summary:
            //		normalizes properties on the event object including event
            //		bubbling methods, keystroke normalization, and x/y positions
            // evt:
            //		native event object
            // sender:
            //		node to treat as "currentTarget"
            if (!JSProf.LRE(12424, evt)) {
                var w = JSProf.LRE(12425, sender) && JSProf.LGD(12429, JSProf.LGD(12426, sender, 'ownerDocument').ownerDocument || JSProf.LGD(12427, sender, 'document').document || JSProf.LRE(12428, sender), 'parentWindow').parentWindow || JSProf.LRU(12430, typeof window === 'undefined' ? undefined : window);
                evt = JSProf.LWR(12432, evt, JSProf.LGD(12431, w, 'event').event);
            }
            if (!JSProf.LRE(12433, evt)) {
                return JSProf.LRE(12434, evt);
            }
            try {
                if (JSProf.LRE(12435, lastEvent) && JSProf.LGD(12436, evt, 'type').type == JSProf.LGD(12437, lastEvent, 'type').type && JSProf.LGD(12438, evt, 'srcElement').srcElement == JSProf.LGD(12439, lastEvent, 'target').target) {
                    // should be same event, reuse event object (so it can be augmented);
                    // accessing evt.srcElement rather than evt.target since evt.target not set on IE until fixup below
                    evt = JSProf.LWR(12441, evt, JSProf.LRE(12440, lastEvent));
                }
            } catch (e) {
            }
            if (!JSProf.LGD(12442, evt, 'target').target) {
                // check to see if it has been fixed yet
                JSProf.LPD(12444, evt, 'target').target = JSProf.LRSP(12444, JSProf.LGD(12443, evt, 'srcElement').srcElement);
                JSProf.LPD(12447, evt, 'currentTarget').currentTarget = JSProf.LRSP(12447, JSProf.LRE(12445, sender) || JSProf.LGD(12446, evt, 'srcElement').srcElement);
                if (JSProf.LGD(12448, evt, 'type').type == "mouseover") {
                    JSProf.LPD(12450, evt, 'relatedTarget').relatedTarget = JSProf.LRSP(12450, JSProf.LGD(12449, evt, 'fromElement').fromElement);
                }
                if (JSProf.LGD(12451, evt, 'type').type == "mouseout") {
                    JSProf.LPD(12453, evt, 'relatedTarget').relatedTarget = JSProf.LRSP(12453, JSProf.LGD(12452, evt, 'toElement').toElement);
                }
                if (!JSProf.LGD(12454, evt, 'stopPropagation').stopPropagation) {
                    JSProf.LPD(12456, evt, 'stopPropagation').stopPropagation = JSProf.LRSP(12456, JSProf.LRE(12455, stopPropagation));
                    JSProf.LPD(12458, evt, 'preventDefault').preventDefault = JSProf.LRSP(12458, JSProf.LRE(12457, preventDefault));
                }
                switch (JSProf.LGD(12459, evt, 'type').type) {
                case "keypress":
                    var c = "charCode" in JSProf.LRE(12460, evt) ? JSProf.LGD(12461, evt, 'charCode').charCode : JSProf.LGD(12462, evt, 'keyCode').keyCode;
                    if (JSProf.LRE(12463, c) == 10) {
                        // CTRL-ENTER is CTRL-ASCII(10) on IE, but CTRL-ENTER on Mozilla
                        c = JSProf.LWR(12464, c, 0);
                        JSProf.LPD(12465, evt, 'keyCode').keyCode = JSProf.LRSP(12465, 13);
                    } else if (JSProf.LRE(12466, c) == 13 || JSProf.LRE(12467, c) == 27) {
                        c = JSProf.LWR(12468, c, 0);    // Mozilla considers ENTER and ESC non-printable
                    } else if (JSProf.LRE(12469, c) == 3) {
                        c = JSProf.LWR(12470, c, 99);    // Mozilla maps CTRL-BREAK to CTRL-c
                    }
                    // Mozilla sets keyCode to 0 when there is a charCode
                    // but that stops the event on IE.
                    JSProf.LPD(12472, evt, 'charCode').charCode = JSProf.LRSP(12472, JSProf.LRE(12471, c));
                    JSProf.LFC(12474, _setKeyChar, false)(JSProf.LRE(12473, evt));
                    break;
                }
            }
            return JSProf.LRE(12475, evt);
        }, 12));
        var lastEvent, IESignal = JSProf.LNF(12480, function (handle) {
                JSProf.LPD(12479, this, 'handle').handle = JSProf.LRSP(12479, JSProf.LRE(12478, handle));
            }, 12);
        JSProf.LPD(12482, IESignal.prototype, 'remove').remove = JSProf.LRSP(12482, JSProf.LNF(12481, function () {
            delete _dojoIEListeners_[this.handle];
        }, 12));
        var fixListener = JSProf.LNF(12495, function (listener) {
                // this is a minimal function for closing on the previous listener with as few as variables as possible
                return JSProf.LNF(12494, function (evt) {
                    evt = JSProf.LWR(12485, evt, JSProf.LMC(12484, on, '_fixEvent')._fixEvent(JSProf.LRE(12483, evt), this));
                    var result = JSProf.LMC(12487, listener, 'call').call(this, JSProf.LRE(12486, evt));
                    if (JSProf.LGD(12488, evt, 'modified').modified) {
                        // cache the last event and reuse it if we can
                        if (!JSProf.LRE(12489, lastEvent)) {
                            setTimeout(JSProf.LNF(12490, function () {
                                lastEvent = null;
                            }, 12));
                        }
                        lastEvent = JSProf.LWR(12492, lastEvent, JSProf.LRE(12491, evt));
                    }
                    return JSProf.LRE(12493, result);
                }, 12);
            }, 12);
        var fixAttach = JSProf.LNF(12536, function (target, type, listener) {
                listener = JSProf.LWR(12498, listener, JSProf.LFC(12497, fixListener, false)(JSProf.LRE(12496, listener)));
                if (((JSProf.LGD(12499, target, 'ownerDocument').ownerDocument ? JSProf.LGD(12500, target.ownerDocument, 'parentWindow').parentWindow : JSProf.LGD(12501, target, 'parentWindow').parentWindow || JSProf.LGD(12502, target, 'window').window || JSProf.LRU(12503, typeof window === 'undefined' ? undefined : window)) != JSProf.LRU(12504, typeof top === 'undefined' ? undefined : top) || JSProf.LFC(12505, has, false)("jscript") < 5.8) && !JSProf.LFC(12506, has, false)("config-_allow_leaks")) {
                    // IE will leak memory on certain handlers in frames (IE8 and earlier) and in unattached DOM nodes for JScript 5.7 and below.
                    // Here we use global redirection to solve the memory leaks
                    if (typeof JSProf.LRU(12507, typeof _dojoIEListeners_ === 'undefined' ? undefined : _dojoIEListeners_) == "undefined") {
                        _dojoIEListeners_ = JSProf.LWU(12509, JSProf.I(typeof _dojoIEListeners_ === 'undefined' ? undefined : _dojoIEListeners_), JSProf.LNE(12508, [], 10));
                    }
                    var emitter = JSProf.LGE(12510, target, 'type')[type];
                    if (!JSProf.LRE(12511, emitter) || !JSProf.LGD(12512, emitter, 'listeners').listeners) {
                        var oldListener = JSProf.LRE(12513, emitter);
                        emitter = JSProf.LWR(12515, emitter, JSProf.LFC(12514, Function, false)('event', 'var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}'));
                        JSProf.LPD(12517, emitter, 'listeners').listeners = JSProf.LRSP(12517, JSProf.LNE(12516, [], 10));
                        JSProf.LPE(12519, target, 'type')[type] = JSProf.LRPE(12519, JSProf.LRE(12518, emitter));
                        JSProf.LPD(12520, emitter, 'global').global = JSProf.LRSP(12520, this);
                        if (JSProf.LRE(12521, oldListener)) {
                            JSProf.LMC(12524, emitter.listeners, 'push').push(JSProf.LMC(12523, _dojoIEListeners_, 'push').push(JSProf.LRE(12522, oldListener)) - 1);
                        }
                    }
                    var handle;
                    JSProf.LMC(12528, emitter.listeners, 'push').push(handle = JSProf.LWR(12527, handle, JSProf.LMC(12526, emitter.global._dojoIEListeners_, 'push').push(JSProf.LRE(12525, listener)) - 1));
                    return JSProf.LNE(12531, new (JSProf.LFC(12530, IESignal, true))(JSProf.LRE(12529, handle)), 'IESignal');
                }
                return JSProf.LMC(12535, aspect, 'after').after(JSProf.LRE(12532, target), JSProf.LRE(12533, type), JSProf.LRE(12534, listener), true);
            }, 12);
        var _setKeyChar = JSProf.LNF(12544, function (evt) {
                JSProf.LPD(12540, evt, 'keyChar').keyChar = JSProf.LRSP(12540, JSProf.LGD(12537, evt, 'charCode').charCode ? JSProf.LMC(12539, String, 'fromCharCode').fromCharCode(JSProf.LGD(12538, evt, 'charCode').charCode) : '');
                JSProf.LPD(12543, evt, 'charOrCode').charOrCode = JSProf.LRSP(12543, JSProf.LGD(12541, evt, 'keyChar').keyChar || JSProf.LGD(12542, evt, 'keyCode').keyCode);    // TODO: remove for 2.0
            }, 12);
        // Called in Event scope
        var stopPropagation = JSProf.LNF(12546, function () {
                JSProf.LPD(12545, this, 'cancelBubble').cancelBubble = JSProf.LRSP(12545, true);
            }, 12);
        var preventDefault = JSProf.LPD(12555, on, '_preventDefault')._preventDefault = JSProf.LRSP(12555, JSProf.LNF(12554, function () {
                // Setting keyCode to 0 is the only way to prevent certain keypresses (namely
                // ctrl-combinations that correspond to menu accelerator keys).
                // Otoh, it prevents upstream listeners from getting this information
                // Try to split the difference here by clobbering keyCode only for ctrl
                // combinations. If you still need to access the key upstream, bubbledKeyCode is
                // provided as a workaround.
                JSProf.LPD(12548, this, 'bubbledKeyCode').bubbledKeyCode = JSProf.LRSP(12548, JSProf.LGD(12547, this, 'keyCode').keyCode);
                if (JSProf.LGD(12549, this, 'ctrlKey').ctrlKey) {
                    try {
                        // squelch errors when keyCode is read-only
                        // (e.g. if keyCode is ctrl or shift)
                        JSProf.LPD(12550, this, 'keyCode').keyCode = JSProf.LRSP(12550, 0);
                    } catch (e) {
                    }
                }
                JSProf.LPD(12551, this, 'defaultPrevented').defaultPrevented = JSProf.LRSP(12551, true);
                JSProf.LPD(12552, this, 'returnValue').returnValue = JSProf.LRSP(12552, false);
                JSProf.LPD(12553, this, 'modified').modified = JSProf.LRSP(12553, true);    // mark it as modified  (for defaultPrevented flag) so the event will be cached in IE
            }, 12));
    }
    if (JSProf.LFC(12556, has, false)("touch")) {
        var EventDelegate = JSProf.LNF(12557, function () {
            }, 12);
        var windowOrientation = JSProf.LGD(12558, window, 'orientation').orientation;
        var fixTouchListener = JSProf.LNF(12604, function (listener) {
                return JSProf.LNF(12603, function (originalEvent) {
                    //Event normalization(for ontouchxxx and resize): 
                    //1.incorrect e.pageX|pageY in iOS 
                    //2.there are no "e.rotation", "e.scale" and "onorientationchange" in Android
                    //3.More TBD e.g. force | screenX | screenX | clientX | clientY | radiusX | radiusY
                    // see if it has already been corrected
                    var event = JSProf.LGD(12559, originalEvent, 'corrected').corrected;
                    if (!JSProf.LRE(12560, event)) {
                        var type = JSProf.LGD(12561, originalEvent, 'type').type;
                        try {
                            delete originalEvent.type;    // on some JS engines (android), deleting properties makes them mutable
                        } catch (e) {
                        }
                        if (JSProf.LGD(12562, originalEvent, 'type').type) {
                            // Deleting the property of the original event did not work (this is the case of
                            // browsers such as older Safari iOS), hence fallback:
                            if (JSProf.LFC(12563, has, false)("touch-can-modify-event-delegate")) {
                                // If deleting properties of delegated event works, use event delegation:
                                JSProf.LPD(12565, EventDelegate, 'prototype').prototype = JSProf.LRSP(12565, JSProf.LRE(12564, originalEvent));
                                event = JSProf.LWR(12568, event, JSProf.LNE(12567, new (JSProf.LFC(12566, EventDelegate, true))(), 'EventDelegate'));
                            } else {
                                // Otherwise last fallback: other browsers, such as mobile Firefox, do not like
                                // delegated properties, so we have to copy
                                event = JSProf.LWR(12570, event, JSProf.LNE(12569, {}, 11));
                                for (var name in JSProf.LRE(12571, originalEvent)) {
                                    JSProf.LPE(12573, event, 'name')[name] = JSProf.LRPE(12573, JSProf.LGE(12572, originalEvent, 'name')[name]);
                                }
                            }
                            // have to delegate methods to make them work
                            JSProf.LPD(12576, event, 'preventDefault').preventDefault = JSProf.LRSP(12576, JSProf.LNF(12575, function () {
                                JSProf.LMC(12574, originalEvent, 'preventDefault').preventDefault();
                            }, 12));
                            JSProf.LPD(12579, event, 'stopPropagation').stopPropagation = JSProf.LRSP(12579, JSProf.LNF(12578, function () {
                                JSProf.LMC(12577, originalEvent, 'stopPropagation').stopPropagation();
                            }, 12));
                        } else {
                            // deletion worked, use property as is
                            event = JSProf.LWR(12581, event, JSProf.LRE(12580, originalEvent));
                            JSProf.LPD(12583, event, 'type').type = JSProf.LRSP(12583, JSProf.LRE(12582, type));
                        }
                        JSProf.LPD(12585, originalEvent, 'corrected').corrected = JSProf.LRSP(12585, JSProf.LRE(12584, event));
                        if (JSProf.LRE(12586, type) == 'resize') {
                            if (JSProf.LRE(12587, windowOrientation) == JSProf.LGD(12588, window, 'orientation').orientation) {
                                return null;    //double tap causes an unexpected 'resize' in Android
                            }
                            windowOrientation = JSProf.LWR(12590, windowOrientation, JSProf.LGD(12589, window, 'orientation').orientation);
                            JSProf.LPD(12591, event, 'type').type = JSProf.LRSP(12591, "orientationchange");
                            return JSProf.LMC(12593, listener, 'call').call(this, JSProf.LRE(12592, event));
                        }
                        // We use the original event and augment, rather than doing an expensive mixin operation
                        if (!("rotation" in JSProf.LRE(12594, event))) {
                            // test to see if it has rotation
                            JSProf.LPD(12595, event, 'rotation').rotation = JSProf.LRSP(12595, 0);
                            JSProf.LPD(12596, event, 'scale').scale = JSProf.LRSP(12596, 1);
                        }
                        //use event.changedTouches[0].pageX|pageY|screenX|screenY|clientX|clientY|target
                        var firstChangeTouch = JSProf.LGE(12597, event.changedTouches, 0)[0];
                        for (var i in JSProf.LRE(12598, firstChangeTouch)) {
                            // use for-in, we don't need to have dependency on dojo/_base/lang here
                            delete event[i];
                            // delete it first to make it mutable
                            JSProf.LPE(12600, event, 'i')[i] = JSProf.LRPE(12600, JSProf.LGE(12599, firstChangeTouch, 'i')[i]);
                        }
                    }
                    return JSProf.LMC(12602, listener, 'call').call(this, JSProf.LRE(12601, event));
                }, 12);
            }, 12);
    }
    return JSProf.LRE(12605, on);
}, 12));