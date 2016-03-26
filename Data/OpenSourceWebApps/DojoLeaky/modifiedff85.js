JSProf.LFC(28916, define, false)(JSProf.LNE(28693, [
    "./kernel",
    "../on",
    "../topic",
    "../aspect",
    "./event",
    "../mouse",
    "./sniff",
    "./lang",
    "../keys"
], 10), JSProf.LNF(28915, function (dojo, on, hub, aspect, eventModule, mouse, has, lang) {
    JSProf.LFD(28913, connect_);
    JSProf.LFD(28914, setKeyChar);
    // module:
    //		dojo/_base/connect
    JSProf.LMC(28704, has, 'add').add("events-keypress-typed", JSProf.LNF(28703, function () {
        // keypresses should only occur a printable character is hit
        var testKeyEvent = JSProf.LNE(28694, { charCode: 0 }, 11);
        try {
            testKeyEvent = JSProf.LWR(28696, testKeyEvent, JSProf.LMC(28695, document, 'createEvent').createEvent("KeyboardEvent"));
            JSProf.LMC(28700, JSProf.LGD(28697, testKeyEvent, 'initKeyboardEvent').initKeyboardEvent || JSProf.LGD(28698, testKeyEvent, 'initKeyEvent').initKeyEvent, 'call').call(JSProf.LRE(28699, testKeyEvent), "keypress", true, true, null, false, false, false, false, 9, 3);
        } catch (e) {
        }
        return JSProf.LGD(28701, testKeyEvent, 'charCode').charCode == 0 && !JSProf.LFC(28702, has, false)("opera");
    }, 12));
    function connect_(obj, event, context, method, dontFix) {
        method = JSProf.LWR(28708, method, JSProf.LMC(28707, lang, 'hitch').hitch(JSProf.LRE(28705, context), JSProf.LRE(28706, method)));
        if (!JSProf.LRE(28709, obj) || !(JSProf.LGD(28710, obj, 'addEventListener').addEventListener || JSProf.LGD(28711, obj, 'attachEvent').attachEvent)) {
            // it is a not a DOM node and we are using the dojo.connect style of treating a
            // method like an event, must go right to aspect
            return JSProf.LMC(28716, aspect, 'after').after(JSProf.LRE(28712, obj) || JSProf.LGD(28713, dojo, 'global').global, JSProf.LRE(28714, event), JSProf.LRE(28715, method), true);
        }
        if (typeof JSProf.LRE(28717, event) == "string" && event.substring(0, 2) == "on") {
            event = JSProf.LWR(28718, event, event.substring(2));
        }
        if (!JSProf.LRE(28719, obj)) {
            obj = JSProf.LWR(28721, obj, JSProf.LGD(28720, dojo, 'global').global);
        }
        if (!JSProf.LRE(28722, dontFix)) {
            switch (JSProf.LRE(28723, event)) {
            // dojo.connect has special handling for these event types
            case "keypress":
                event = JSProf.LWR(28725, event, JSProf.LRE(28724, keypress));
                break;
            case "mouseenter":
                event = JSProf.LWR(28727, event, JSProf.LGD(28726, mouse, 'enter').enter);
                break;
            case "mouseleave":
                event = JSProf.LWR(28729, event, JSProf.LGD(28728, mouse, 'leave').leave);
                break;
            }
        }
        return JSProf.LFC(28734, on, false)(JSProf.LRE(28730, obj), JSProf.LRE(28731, event), JSProf.LRE(28732, method), JSProf.LRE(28733, dontFix));
    }
    var _punctMap = JSProf.LNE(28735, {
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
    var evtCopyKey = JSProf.LFC(28736, has, false)("mac") ? "metaKey" : "ctrlKey";
    var _synthesizeEvent = JSProf.LNF(28750, function (evt, props) {
            var faux = JSProf.LMC(28740, lang, 'mixin').mixin(JSProf.LNE(28737, {}, 11), JSProf.LRE(28738, evt), JSProf.LRE(28739, props));
            JSProf.LFC(28742, setKeyChar, false)(JSProf.LRE(28741, faux));
            // FIXME: would prefer to use lang.hitch: lang.hitch(evt, evt.preventDefault);
            // but it throws an error when preventDefault is invoked on Safari
            // does Event.preventDefault not support "apply" on Safari?
            JSProf.LPD(28745, faux, 'preventDefault').preventDefault = JSProf.LRSP(28745, JSProf.LNF(28744, function () {
                JSProf.LMC(28743, evt, 'preventDefault').preventDefault();
            }, 12));
            JSProf.LPD(28748, faux, 'stopPropagation').stopPropagation = JSProf.LRSP(28748, JSProf.LNF(28747, function () {
                JSProf.LMC(28746, evt, 'stopPropagation').stopPropagation();
            }, 12));
            return JSProf.LRE(28749, faux);
        }, 12);
    function setKeyChar(evt) {
        JSProf.LPD(28754, evt, 'keyChar').keyChar = JSProf.LRSP(28754, JSProf.LGD(28751, evt, 'charCode').charCode ? JSProf.LMC(28753, String, 'fromCharCode').fromCharCode(JSProf.LGD(28752, evt, 'charCode').charCode) : '');
        JSProf.LPD(28757, evt, 'charOrCode').charOrCode = JSProf.LRSP(28757, JSProf.LGD(28755, evt, 'keyChar').keyChar || JSProf.LGD(28756, evt, 'keyCode').keyCode);
    }
    var keypress;
    if (JSProf.LFC(28758, has, false)("events-keypress-typed")) {
        // this emulates Firefox's keypress behavior where every keydown can correspond to a keypress
        var _trySetKeyCode = JSProf.LNF(28761, function (e, code) {
                try {
                    // squelch errors when keyCode is read-only
                    // (e.g. if keyCode is ctrl or shift)
                    return JSProf.LPD(28760, e, 'keyCode').keyCode = JSProf.LRSP(28760, JSProf.LRE(28759, code));
                } catch (e) {
                    return 0;
                }
            }, 12);
        keypress = JSProf.LWR(28825, keypress, JSProf.LNF(28824, function (object, listener) {
            var keydownSignal = JSProf.LFC(28806, on, false)(JSProf.LRE(28762, object), "keydown", JSProf.LNF(28805, function (evt) {
                    // munge key/charCode
                    var k = JSProf.LGD(28763, evt, 'keyCode').keyCode;
                    // These are Windows Virtual Key Codes
                    // http://msdn.microsoft.com/library/default.asp?url=/library/en-us/winui/WinUI/WindowsUserInterface/UserInput/VirtualKeyCodes.asp
                    var unprintable = JSProf.LRE(28764, k) != 13 && JSProf.LRE(28765, k) != 32 && (JSProf.LRE(28766, k) != 27 || !JSProf.LFC(28767, has, false)("ie")) && (JSProf.LRE(28768, k) < 48 || JSProf.LRE(28769, k) > 90) && (JSProf.LRE(28770, k) < 96 || JSProf.LRE(28771, k) > 111) && (JSProf.LRE(28772, k) < 186 || JSProf.LRE(28773, k) > 192) && (JSProf.LRE(28774, k) < 219 || JSProf.LRE(28775, k) > 222) && JSProf.LRE(28776, k) != 229;
                    // synthesize keypress for most unprintables and CTRL-keys
                    if (JSProf.LRE(28777, unprintable) || JSProf.LGD(28778, evt, 'ctrlKey').ctrlKey) {
                        var c = JSProf.LRE(28779, unprintable) ? 0 : JSProf.LRE(28780, k);
                        if (JSProf.LGD(28781, evt, 'ctrlKey').ctrlKey) {
                            if (JSProf.LRE(28782, k) == 3 || JSProf.LRE(28783, k) == 13) {
                                return JSProf.LMC(28786, listener, 'call').call(JSProf.LGD(28784, evt, 'currentTarget').currentTarget, JSProf.LRE(28785, evt));    // IE will post CTRL-BREAK, CTRL-ENTER as keypress natively
                            } else if (JSProf.LRE(28787, c) > 95 && JSProf.LRE(28788, c) < 106) {
                                c -= 48;    // map CTRL-[numpad 0-9] to ASCII
                            } else if (!JSProf.LGD(28789, evt, 'shiftKey').shiftKey && (JSProf.LRE(28790, c) >= 65 && JSProf.LRE(28791, c) <= 90)) {
                                c += 32;    // map CTRL-[A-Z] to lowercase
                            } else {
                                c = JSProf.LWR(28794, c, JSProf.LGE(28792, _punctMap, 'c')[c] || JSProf.LRE(28793, c));    // map other problematic CTRL combinations to ASCII
                            }
                        }
                        // simulate a keypress event
                        var faux = JSProf.LFC(28797, _synthesizeEvent, false)(JSProf.LRE(28795, evt), JSProf.LNE(28796, {
                                type: 'keypress',
                                faux: true,
                                charCode: c
                            }, 11));
                        JSProf.LMC(28800, listener, 'call').call(JSProf.LGD(28798, evt, 'currentTarget').currentTarget, JSProf.LRE(28799, faux));
                        if (JSProf.LFC(28801, has, false)("ie")) {
                            JSProf.LFC(28804, _trySetKeyCode, false)(JSProf.LRE(28802, evt), JSProf.LGD(28803, faux, 'keyCode').keyCode);
                        }
                    }
                }, 12));
            var keypressSignal = JSProf.LFC(28819, on, false)(JSProf.LRE(28807, object), "keypress", JSProf.LNF(28818, function (evt) {
                    var c = JSProf.LGD(28808, evt, 'charCode').charCode;
                    c = JSProf.LWR(28811, c, JSProf.LRE(28809, c) >= 32 ? JSProf.LRE(28810, c) : 0);
                    evt = JSProf.LWR(28815, evt, JSProf.LFC(28814, _synthesizeEvent, false)(JSProf.LRE(28812, evt), JSProf.LNE(28813, {
                        charCode: c,
                        faux: true
                    }, 11)));
                    return JSProf.LMC(28817, listener, 'call').call(this, JSProf.LRE(28816, evt));
                }, 12));
            return JSProf.LNE(28823, {
                remove: JSProf.LNF(28822, function () {
                    JSProf.LMC(28820, keydownSignal, 'remove').remove();
                    JSProf.LMC(28821, keypressSignal, 'remove').remove();
                }, 12)
            }, 11);
        }, 12));
    } else {
        if (JSProf.LFC(28826, has, false)("opera")) {
            keypress = JSProf.LWR(28846, keypress, JSProf.LNF(28845, function (object, listener) {
                return JSProf.LFC(28844, on, false)(JSProf.LRE(28827, object), "keypress", JSProf.LNF(28843, function (evt) {
                    var c = JSProf.LGD(28828, evt, 'which').which;
                    if (JSProf.LRE(28829, c) == 3) {
                        c = JSProf.LWR(28830, c, 99);    // Mozilla maps CTRL-BREAK to CTRL-c
                    }
                    // can't trap some keys at all, like INSERT and DELETE
                    // there is no differentiating info between DELETE and ".", or INSERT and "-"
                    c = JSProf.LWR(28834, c, JSProf.LRE(28831, c) < 32 && !JSProf.LGD(28832, evt, 'shiftKey').shiftKey ? 0 : JSProf.LRE(28833, c));
                    if (JSProf.LGD(28835, evt, 'ctrlKey').ctrlKey && !JSProf.LGD(28836, evt, 'shiftKey').shiftKey && JSProf.LRE(28837, c) >= 65 && JSProf.LRE(28838, c) <= 90) {
                        // lowercase CTRL-[A-Z] keys
                        c += 32;
                    }
                    return JSProf.LMC(28842, listener, 'call').call(this, JSProf.LFC(28841, _synthesizeEvent, false)(JSProf.LRE(28839, evt), JSProf.LNE(28840, { charCode: c }, 11)));
                }, 12));
            }, 12));
        } else {
            keypress = JSProf.LWR(28855, keypress, JSProf.LNF(28854, function (object, listener) {
                return JSProf.LFC(28853, on, false)(JSProf.LRE(28847, object), "keypress", JSProf.LNF(28852, function (evt) {
                    JSProf.LFC(28849, setKeyChar, false)(JSProf.LRE(28848, evt));
                    return JSProf.LMC(28851, listener, 'call').call(this, JSProf.LRE(28850, evt));
                }, 12));
            }, 12));
        }
    }
    var connect = JSProf.LNE(28905, {
            _keypress: keypress,
            connect: JSProf.LNF(28875, function (obj, event, context, method, dontFix) {
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
                var a = arguments, args = JSProf.LNE(28856, [], 10), i = 0;
                // if a[0] is a String, obj was omitted
                JSProf.LMC(28860, args, 'push').push(typeof JSProf.LGE(28857, a, 0)[0] == "string" ? null : JSProf.LGE(28858, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7], JSProf.LGE(28859, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]);
                // if the arg-after-next is a String or Function, context was NOT omitted
                var a1 = JSProf.LGE(28862, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LRE(28861, i) + 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7];
                JSProf.LMC(28867, args, 'push').push(typeof JSProf.LRE(28863, a1) == "string" || typeof JSProf.LRE(28864, a1) == "function" ? JSProf.LGE(28865, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7] : null, JSProf.LGE(28866, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = i++)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]);
                // absorb any additional arguments
                for (var l = JSProf.LGD(28868, a, 'length').length; JSProf.LRE(28869, i) < JSProf.LRE(28870, l); i++) {
                    JSProf.LMC(28872, args, 'push').push(JSProf.LGE(28871, a, 'i')[i]);
                }
                return JSProf.LMC(28874, connect_, 'apply').apply(this, JSProf.LRE(28873, args));
            }, 12),
            disconnect: JSProf.LNF(28878, function (handle) {
                // summary:
                //		Remove a link created by dojo.connect.
                // description:
                //		Removes the connection between event and the method referenced by handle.
                // handle: Handle
                //		the return value of the dojo.connect call that created the connection.
                if (JSProf.LRE(28876, handle)) {
                    JSProf.LMC(28877, handle, 'remove').remove();
                }
            }, 12),
            subscribe: JSProf.LNF(28884, function (topic, context, method) {
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
                return JSProf.LMC(28883, hub, 'subscribe').subscribe(JSProf.LRE(28879, topic), JSProf.LMC(28882, lang, 'hitch').hitch(JSProf.LRE(28880, context), JSProf.LRE(28881, method)));
            }, 12),
            publish: JSProf.LNF(28890, function (topic, args) {
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
                return JSProf.LMC(28889, hub.publish, 'apply').apply(JSProf.LRE(28885, hub), JSProf.LNE(28887, [JSProf.LRE(28886, topic)], 10).concat(JSProf.LRE(28888, args)));
            }, 12),
            connectPublisher: JSProf.LNF(28902, function (topic, obj, event) {
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
                var pf = JSProf.LNF(28893, function () {
                        JSProf.LMC(28892, connect, 'publish').publish(JSProf.LRE(28891, topic), arguments);
                    }, 12);
                return JSProf.LRE(28894, event) ? JSProf.LMC(28898, connect, 'connect').connect(JSProf.LRE(28895, obj), JSProf.LRE(28896, event), JSProf.LRE(28897, pf)) : JSProf.LMC(28901, connect, 'connect').connect(JSProf.LRE(28899, obj), JSProf.LRE(28900, pf));    //Handle
            }, 12),
            isCopyKey: JSProf.LNF(28904, function (e) {
                // summary:
                //		Checks an event for the copy key (meta on Mac, and ctrl anywhere else)
                // e: Event
                //		Event object to examine
                return JSProf.LGE(28903, e, 'evtCopyKey')[evtCopyKey];    // Boolean
            }, 12)
        }, 11);
    JSProf.LPD(28907, connect, 'unsubscribe').unsubscribe = JSProf.LRSP(28907, JSProf.LGD(28906, connect, 'disconnect').disconnect);
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
    JSProf.LFC(28908, has, false)("extend-dojo") && JSProf.LMC(28911, lang, 'mixin').mixin(JSProf.LRE(28909, dojo), JSProf.LRE(28910, connect));
    return JSProf.LRE(28912, connect);
}, 12));