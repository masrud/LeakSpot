JSProf.LFC(29162, define, false)(JSProf.LNE(28939, [
    "./kernel",
    "../on",
    "../topic",
    "../aspect",
    "./event",
    "../mouse",
    "./sniff",
    "./lang",
    "../keys"
], 10), JSProf.LNF(29161, function (dojo, on, hub, aspect, eventModule, mouse, has, lang) {
    JSProf.LFD(29159, connect_);
    JSProf.LFD(29160, setKeyChar);
    // module:
    //		dojo/_base/connect
    JSProf.LMC(28950, has, 'add').add("events-keypress-typed", JSProf.LNF(28949, function () {
        // keypresses should only occur a printable character is hit
        var testKeyEvent = JSProf.LNE(28940, { charCode: 0 }, 11);
        try {
            testKeyEvent = JSProf.LWR(28942, testKeyEvent, JSProf.LMC(28941, document, 'createEvent').createEvent("KeyboardEvent"));
            JSProf.LMC(28946, JSProf.LGD(28943, testKeyEvent, 'initKeyboardEvent').initKeyboardEvent || JSProf.LGD(28944, testKeyEvent, 'initKeyEvent').initKeyEvent, 'call').call(JSProf.LRE(28945, testKeyEvent), "keypress", true, true, null, false, false, false, false, 9, 3);
        } catch (e) {
        }
        return JSProf.LGD(28947, testKeyEvent, 'charCode').charCode == 0 && !JSProf.LFC(28948, has, false)("opera");
    }, 12));
    function connect_(obj, event, context, method, dontFix) {
        method = JSProf.LWR(28954, method, JSProf.LMC(28953, lang, 'hitch').hitch(JSProf.LRE(28951, context), JSProf.LRE(28952, method)));
        if (!JSProf.LRE(28955, obj) || !(JSProf.LGD(28956, obj, 'addEventListener').addEventListener || JSProf.LGD(28957, obj, 'attachEvent').attachEvent)) {
            // it is a not a DOM node and we are using the dojo.connect style of treating a
            // method like an event, must go right to aspect
            return JSProf.LMC(28962, aspect, 'after').after(JSProf.LRE(28958, obj) || JSProf.LGD(28959, dojo, 'global').global, JSProf.LRE(28960, event), JSProf.LRE(28961, method), true);
        }
        if (typeof JSProf.LRE(28963, event) == "string" && event.substring(0, 2) == "on") {
            event = JSProf.LWR(28964, event, event.substring(2));
        }
        if (!JSProf.LRE(28965, obj)) {
            obj = JSProf.LWR(28967, obj, JSProf.LGD(28966, dojo, 'global').global);
        }
        if (!JSProf.LRE(28968, dontFix)) {
            switch (JSProf.LRE(28969, event)) {
            // dojo.connect has special handling for these event types
            case "keypress":
                event = JSProf.LWR(28971, event, JSProf.LRE(28970, keypress));
                break;
            case "mouseenter":
                event = JSProf.LWR(28973, event, JSProf.LGD(28972, mouse, 'enter').enter);
                break;
            case "mouseleave":
                event = JSProf.LWR(28975, event, JSProf.LGD(28974, mouse, 'leave').leave);
                break;
            }
        }
        return JSProf.LFC(28980, on, false)(JSProf.LRE(28976, obj), JSProf.LRE(28977, event), JSProf.LRE(28978, method), JSProf.LRE(28979, dontFix));
    }
    var _punctMap = JSProf.LNE(28981, {
            106: 42,
            111: 47,
            186: 59,
            187: 43,
            188: 44,
            189: 45,
            190: 46,
            191: 47,
            192: 96,
            219: 91,
            220: 92,
            221: 93,
            222: 39,
            229: 113
        }, 11);
    var evtCopyKey = JSProf.LFC(28982, has, false)("mac") ? "metaKey" : "ctrlKey";
    var _synthesizeEvent = JSProf.LNF(28996, function (evt, props) {
            var faux = JSProf.LMC(28986, lang, 'mixin').mixin(JSProf.LNE(28983, {}, 11), JSProf.LRE(28984, evt), JSProf.LRE(28985, props));
            JSProf.LFC(28988, setKeyChar, false)(JSProf.LRE(28987, faux));
            // FIXME: would prefer to use lang.hitch: lang.hitch(evt, evt.preventDefault);
            // but it throws an error when preventDefault is invoked on Safari
            // does Event.preventDefault not support "apply" on Safari?
            JSProf.LPD(28991, faux, 'preventDefault').preventDefault = JSProf.LRSP(28991, JSProf.LNF(28990, function () {
                JSProf.LMC(28989, evt, 'preventDefault').preventDefault();
            }, 12));
            JSProf.LPD(28994, faux, 'stopPropagation').stopPropagation = JSProf.LRSP(28994, JSProf.LNF(28993, function () {
                JSProf.LMC(28992, evt, 'stopPropagation').stopPropagation();
            }, 12));
            return JSProf.LRE(28995, faux);
        }, 12);
    function setKeyChar(evt) {
        JSProf.LPD(29000, evt, 'keyChar').keyChar = JSProf.LRSP(29000, JSProf.LGD(28997, evt, 'charCode').charCode ? JSProf.LMC(28999, String, 'fromCharCode').fromCharCode(JSProf.LGD(28998, evt, 'charCode').charCode) : '');
        JSProf.LPD(29003, evt, 'charOrCode').charOrCode = JSProf.LRSP(29003, JSProf.LGD(29001, evt, 'keyChar').keyChar || JSProf.LGD(29002, evt, 'keyCode').keyCode);
    }
    var keypress;
    if (JSProf.LFC(29004, has, false)("events-keypress-typed")) {
        // this emulates Firefox's keypress behavior where every keydown can correspond to a keypress
        var _trySetKeyCode = JSProf.LNF(29007, function (e, code) {
                try {
                    // squelch errors when keyCode is read-only
                    // (e.g. if keyCode is ctrl or shift)
                    return JSProf.LPD(29006, e, 'keyCode').keyCode = JSProf.LRSP(29006, JSProf.LRE(29005, code));
                } catch (e) {
                    return 0;
                }
            }, 12);
        keypress = JSProf.LWR(29071, keypress, JSProf.LNF(29070, function (object, listener) {
            var keydownSignal = JSProf.LFC(29052, on, false)(JSProf.LRE(29008, object), "keydown", JSProf.LNF(29051, function (evt) {
                    // munge key/charCode
                    var k = JSProf.LGD(29009, evt, 'keyCode').keyCode;
                    // These are Windows Virtual Key Codes
                    // http://msdn.microsoft.com/library/default.asp?url=/library/en-us/winui/WinUI/WindowsUserInterface/UserInput/VirtualKeyCodes.asp
                    var unprintable = JSProf.LRE(29010, k) != 13 && JSProf.LRE(29011, k) != 32 && (JSProf.LRE(29012, k) != 27 || !JSProf.LFC(29013, has, false)("ie")) && (JSProf.LRE(29014, k) < 48 || JSProf.LRE(29015, k) > 90) && (JSProf.LRE(29016, k) < 96 || JSProf.LRE(29017, k) > 111) && (JSProf.LRE(29018, k) < 186 || JSProf.LRE(29019, k) > 192) && (JSProf.LRE(29020, k) < 219 || JSProf.LRE(29021, k) > 222) && JSProf.LRE(29022, k) != 229;
                    // synthesize keypress for most unprintables and CTRL-keys
                    if (JSProf.LRE(29023, unprintable) || JSProf.LGD(29024, evt, 'ctrlKey').ctrlKey) {
                        var c = JSProf.LRE(29025, unprintable) ? 0 : JSProf.LRE(29026, k);
                        if (JSProf.LGD(29027, evt, 'ctrlKey').ctrlKey) {
                            if (JSProf.LRE(29028, k) == 3 || JSProf.LRE(29029, k) == 13) {
                                return JSProf.LMC(29032, listener, 'call').call(JSProf.LGD(29030, evt, 'currentTarget').currentTarget, JSProf.LRE(29031, evt));    // IE will post CTRL-BREAK, CTRL-ENTER as keypress natively
                            } else if (JSProf.LRE(29033, c) > 95 && JSProf.LRE(29034, c) < 106) {
                                c -= 48;    // map CTRL-[numpad 0-9] to ASCII
                            } else if (!JSProf.LGD(29035, evt, 'shiftKey').shiftKey && (JSProf.LRE(29036, c) >= 65 && JSProf.LRE(29037, c) <= 90)) {
                                c += 32;    // map CTRL-[A-Z] to lowercase
                            } else {
                                c = JSProf.LWR(29040, c, JSProf.LGE(29038, _punctMap, 'c')[c] || JSProf.LRE(29039, c));    // map other problematic CTRL combinations to ASCII
                            }
                        }
                        // simulate a keypress event
                        var faux = JSProf.LFC(29043, _synthesizeEvent, false)(JSProf.LRE(29041, evt), JSProf.LNE(29042, {
                                type: 'keypress',
                                faux: true,
                                charCode: c
                            }, 11));
                        JSProf.LMC(29046, listener, 'call').call(JSProf.LGD(29044, evt, 'currentTarget').currentTarget, JSProf.LRE(29045, faux));
                        if (JSProf.LFC(29047, has, false)("ie")) {
                            JSProf.LFC(29050, _trySetKeyCode, false)(JSProf.LRE(29048, evt), JSProf.LGD(29049, faux, 'keyCode').keyCode);
                        }
                    }
                }, 12));
            var keypressSignal = JSProf.LFC(29065, on, false)(JSProf.LRE(29053, object), "keypress", JSProf.LNF(29064, function (evt) {
                    var c = JSProf.LGD(29054, evt, 'charCode').charCode;
                    c = JSProf.LWR(29057, c, JSProf.LRE(29055, c) >= 32 ? JSProf.LRE(29056, c) : 0);
                    evt = JSProf.LWR(29061, evt, JSProf.LFC(29060, _synthesizeEvent, false)(JSProf.LRE(29058, evt), JSProf.LNE(29059, {
                        charCode: c,
                        faux: true
                    }, 11)));
                    return JSProf.LMC(29063, listener, 'call').call(this, JSProf.LRE(29062, evt));
                }, 12));
            return JSProf.LNE(29069, {
                remove: JSProf.LNF(29068, function () {
                    JSProf.LMC(29066, keydownSignal, 'remove').remove();
                    JSProf.LMC(29067, keypressSignal, 'remove').remove();
                }, 12)
            }, 11);
        }, 12));
    } else {
        if (JSProf.LFC(29072, has, false)("opera")) {
            keypress = JSProf.LWR(29092, keypress, JSProf.LNF(29091, function (object, listener) {
                return JSProf.LFC(29090, on, false)(JSProf.LRE(29073, object), "keypress", JSProf.LNF(29089, function (evt) {
                    var c = JSProf.LGD(29074, evt, 'which').which;
                    if (JSProf.LRE(29075, c) == 3) {
                        c = JSProf.LWR(29076, c, 99);    // Mozilla maps CTRL-BREAK to CTRL-c
                    }
                    // can't trap some keys at all, like INSERT and DELETE
                    // there is no differentiating info between DELETE and ".", or INSERT and "-"
                    c = JSProf.LWR(29080, c, JSProf.LRE(29077, c) < 32 && !JSProf.LGD(29078, evt, 'shiftKey').shiftKey ? 0 : JSProf.LRE(29079, c));
                    if (JSProf.LGD(29081, evt, 'ctrlKey').ctrlKey && !JSProf.LGD(29082, evt, 'shiftKey').shiftKey && JSProf.LRE(29083, c) >= 65 && JSProf.LRE(29084, c) <= 90) {
                        // lowercase CTRL-[A-Z] keys
                        c += 32;
                    }
                    return JSProf.LMC(29088, listener, 'call').call(this, JSProf.LFC(29087, _synthesizeEvent, false)(JSProf.LRE(29085, evt), JSProf.LNE(29086, { charCode: c }, 11)));
                }, 12));
            }, 12));
        } else {
            keypress = JSProf.LWR(29101, keypress, JSProf.LNF(29100, function (object, listener) {
                return JSProf.LFC(29099, on, false)(JSProf.LRE(29093, object), "keypress", JSProf.LNF(29098, function (evt) {
                    JSProf.LFC(29095, setKeyChar, false)(JSProf.LRE(29094, evt));
                    return JSProf.LMC(29097, listener, 'call').call(this, JSProf.LRE(29096, evt));
                }, 12));
            }, 12));
        }
    }
    var connect = JSProf.LNE(29151, {
            _keypress: keypress,
            connect: JSProf.LNF(29121, function (obj, event, context, method, dontFix) {
                // summary:
                //		`dojo.connect` is a deprecated event handling and delegation method in
                //		Dojo. It allows one function to "listen in" on the execution of
                //		any other, triggering the second whenever the first is called. Many
                //		listeners may be attached to a function, and source functions may
                //		be either regular function calls or DOM events.
                //
                // description:
                //		Connects listeners to actions, so that after event fires, a
                //		listener is called with the same arguments passed to the original
                //		function.
                //
                //		Since `dojo.connect` allows the source of events to be either a
                //		"regular" JavaScript function or a DOM event, it provides a uniform
                //		interface for listening to all the types of events that an
                //		application is likely to deal with though a single, unified
                //		interface. DOM programmers may want to think of it as
                //		"addEventListener for everything and anything".
                //
                //		When setting up a connection, the `event` parameter must be a
                //		string that is the name of the method/event to be listened for. If
                //		`obj` is null, `kernel.global` is assumed, meaning that connections
                //		to global methods are supported but also that you may inadvertently
                //		connect to a global by passing an incorrect object name or invalid
                //		reference.
                //
                //		`dojo.connect` generally is forgiving. If you pass the name of a
                //		function or method that does not yet exist on `obj`, connect will
                //		not fail, but will instead set up a stub method. Similarly, null
                //		arguments may simply be omitted such that fewer than 4 arguments
                //		may be required to set up a connection See the examples for details.
                //
                //		The return value is a handle that is needed to
                //		remove this connection with `dojo.disconnect`.
                //
                // obj: Object?
                //		The source object for the event function.
                //		Defaults to `kernel.global` if null.
                //		If obj is a DOM node, the connection is delegated
                //		to the DOM event manager (unless dontFix is true).
                //
                // event: String
                //		String name of the event function in obj.
                //		I.e. identifies a property `obj[event]`.
                //
                // context: Object|null
                //		The object that method will receive as "this".
                //
                //		If context is null and method is a function, then method
                //		inherits the context of event.
                //
                //		If method is a string then context must be the source
                //		object object for method (context[method]). If context is null,
                //		kernel.global is used.
                //
                // method: String|Function
                //		A function reference, or name of a function in context.
                //		The function identified by method fires after event does.
                //		method receives the same arguments as the event.
                //		See context argument comments for information on method's scope.
                //
                // dontFix: Boolean?
                //		If obj is a DOM node, set dontFix to true to prevent delegation
                //		of this connection to the DOM event manager.
                //
                // example:
                //		When obj.onchange(), do ui.update():
                //	|	dojo.connect(obj, "onchange", ui, "update");
                //	|	dojo.connect(obj, "onchange", ui, ui.update); // same
                //
                // example:
                //		Using return value for disconnect:
                //	|	var link = dojo.connect(obj, "onchange", ui, "update");
                //	|	...
                //	|	dojo.disconnect(link);
                //
                // example:
                //		When onglobalevent executes, watcher.handler is invoked:
                //	|	dojo.connect(null, "onglobalevent", watcher, "handler");
                //
                // example:
                //		When ob.onCustomEvent executes, customEventHandler is invoked:
                //	|	dojo.connect(ob, "onCustomEvent", null, "customEventHandler");
                //	|	dojo.connect(ob, "onCustomEvent", "customEventHandler"); // same
                //
                // example:
                //		When ob.onCustomEvent executes, customEventHandler is invoked
                //		with the same scope (this):
                //	|	dojo.connect(ob, "onCustomEvent", null, customEventHandler);
                //	|	dojo.connect(ob, "onCustomEvent", customEventHandler); // same
                //
                // example:
                //		When globalEvent executes, globalHandler is invoked
                //		with the same scope (this):
                //	|	dojo.connect(null, "globalEvent", null, globalHandler);
                //	|	dojo.connect("globalEvent", globalHandler); // same
                // normalize arguments
                var a = arguments, args = JSProf.LNE(29102, [], 10), i = 0;
                // if a[0] is a String, obj was omitted
                JSProf.LMC(29106, args, 'push').push(typeof JSProf.LGE(29103, a, 0)[0] == "string" ? null : JSProf.LGE(29104, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7], JSProf.LGE(29105, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]);
                // if the arg-after-next is a String or Function, context was NOT omitted
                var a1 = JSProf.LGE(29108, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LRE(29107, i) + 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7];
                JSProf.LMC(29113, args, 'push').push(typeof JSProf.LRE(29109, a1) == "string" || typeof JSProf.LRE(29110, a1) == "function" ? JSProf.LGE(29111, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7] : null, JSProf.LGE(29112, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]);
                // absorb any additional arguments
                for (var l = JSProf.LGD(29114, a, 'length').length; JSProf.LRE(29115, i) < JSProf.LRE(29116, l); i++) {
                    JSProf.LMC(29118, args, 'push').push(JSProf.LGE(29117, a, 'i')[i]);
                }
                return JSProf.LMC(29120, connect_, 'apply').apply(this, JSProf.LRE(29119, args));
            }, 12),
            disconnect: JSProf.LNF(29124, function (handle) {
                // summary:
                //		Remove a link created by dojo.connect.
                // description:
                //		Removes the connection between event and the method referenced by handle.
                // handle: Handle
                //		the return value of the dojo.connect call that created the connection.
                if (JSProf.LRE(29122, handle)) {
                    JSProf.LMC(29123, handle, 'remove').remove();
                }
            }, 12),
            subscribe: JSProf.LNF(29130, function (topic, context, method) {
                // summary:
                //		Attach a listener to a named topic. The listener function is invoked whenever the
                //		named topic is published (see: dojo.publish).
                //		Returns a handle which is needed to unsubscribe this listener.
                // topic: String
                //		The topic to which to subscribe.
                // context: Object?
                //		Scope in which method will be invoked, or null for default scope.
                // method: String|Function
                //		The name of a function in context, or a function reference. This is the function that
                //		is invoked when topic is published.
                // example:
                //	|	dojo.subscribe("alerts", null, function(caption, message){ alert(caption + "\n" + message); });
                //	|	dojo.publish("alerts", [ "read this", "hello world" ]);
                return JSProf.LMC(29129, hub, 'subscribe').subscribe(JSProf.LRE(29125, topic), JSProf.LMC(29128, lang, 'hitch').hitch(JSProf.LRE(29126, context), JSProf.LRE(29127, method)));
            }, 12),
            publish: JSProf.LNF(29136, function (topic, args) {
                // summary:
                //		Invoke all listener method subscribed to topic.
                // topic: String
                //		The name of the topic to publish.
                // args: Array?
                //		An array of arguments. The arguments will be applied
                //		to each topic subscriber (as first class parameters, via apply).
                // example:
                //	|	dojo.subscribe("alerts", null, function(caption, message){ alert(caption + "\n" + message); };
                //	|	dojo.publish("alerts", [ "read this", "hello world" ]);
                return JSProf.LMC(29135, hub.publish, 'apply').apply(JSProf.LRE(29131, hub), JSProf.LNE(29133, [JSProf.LRE(29132, topic)], 10).concat(JSProf.LRE(29134, args)));
            }, 12),
            connectPublisher: JSProf.LNF(29148, function (topic, obj, event) {
                // summary:
                //		Ensure that every time obj.event() is called, a message is published
                //		on the topic. Returns a handle which can be passed to
                //		dojo.disconnect() to disable subsequent automatic publication on
                //		the topic.
                // topic: String
                //		The name of the topic to publish.
                // obj: Object?
                //		The source object for the event function. Defaults to kernel.global
                //		if null.
                // event: String
                //		The name of the event function in obj.
                //		I.e. identifies a property obj[event].
                // example:
                //	|	dojo.connectPublisher("/ajax/start", dojo, "xhrGet");
                var pf = JSProf.LNF(29139, function () {
                        JSProf.LMC(29138, connect, 'publish').publish(JSProf.LRE(29137, topic), arguments);
                    }, 12);
                return JSProf.LRE(29140, event) ? JSProf.LMC(29144, connect, 'connect').connect(JSProf.LRE(29141, obj), JSProf.LRE(29142, event), JSProf.LRE(29143, pf)) : JSProf.LMC(29147, connect, 'connect').connect(JSProf.LRE(29145, obj), JSProf.LRE(29146, pf));    //Handle
            }, 12),
            isCopyKey: JSProf.LNF(29150, function (e) {
                // summary:
                //		Checks an event for the copy key (meta on Mac, and ctrl anywhere else)
                // e: Event
                //		Event object to examine
                return JSProf.LGE(29149, e, 'evtCopyKey')[evtCopyKey];    // Boolean
            }, 12)
        }, 11);
    JSProf.LPD(29153, connect, 'unsubscribe').unsubscribe = JSProf.LRSP(29153, JSProf.LGD(29152, connect, 'disconnect').disconnect);
    /*=====
     connect.unsubscribe = function(handle){
    	 // summary:
    	 //		Remove a topic listener.
    	 // handle: Handle
    	 //		The handle returned from a call to subscribe.
    	 // example:
    	 //	|	var alerter = dojo.subscribe("alerts", null, function(caption, message){ alert(caption + "\n" + message); };
    	 //	|	...
    	 //	|	dojo.unsubscribe(alerter);
     };
     =====*/
    JSProf.LFC(29154, has, false)("extend-dojo") && JSProf.LMC(29157, lang, 'mixin').mixin(JSProf.LRE(29155, dojo), JSProf.LRE(29156, connect));
    return JSProf.LRE(29158, connect);
}, 12));