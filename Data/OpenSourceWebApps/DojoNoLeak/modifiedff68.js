JSProf.LFC(24231, define, false)(JSProf.LNE(23938, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/has",
    "dojo/keys",
    "dojo/_base/lang",
    "dojo/on",
    "../main"
], 10), JSProf.LNF(24230, function (array, declare, dom, has, keys, lang, on, dijit) {
    // module:
    //		dijit/form/_TextBoxMixin
    var _TextBoxMixin = JSProf.LFC(24185, declare, false)("dijit.form._TextBoxMixin" + (JSProf.LFC(23939, has, false)("dojo-bidi") ? "_NoBidi" : ""), null, JSProf.LNE(24184, {
            trim: false,
            uppercase: false,
            lowercase: false,
            propercase: false,
            maxLength: "",
            selectOnClick: false,
            placeHolder: "",
            _getValueAttr: JSProf.LNF(23943, function () {
                // summary:
                //		Hook so get('value') works as we like.
                // description:
                //		For `dijit/form/TextBox` this basically returns the value of the `<input>`.
                //
                //		For `dijit/form/MappedTextBox` subclasses, which have both
                //		a "displayed value" and a separate "submit value",
                //		This treats the "displayed value" as the master value, computing the
                //		submit value from it via this.parse().
                return JSProf.LMC(23942, this, 'parse').parse(JSProf.LMC(23940, this, 'get').get('displayedValue'), JSProf.LGD(23941, this, 'constraints').constraints);
            }, 12),
            _setValueAttr: JSProf.LNF(23979, function (value, priorityChange, formattedValue) {
                // summary:
                //		Hook so set('value', ...) works.
                //
                // description:
                //		Sets the value of the widget to "value" which can be of
                //		any type as determined by the widget.
                //
                // value:
                //		The visual element value is also set to a corresponding,
                //		but not necessarily the same, value.
                //
                // formattedValue:
                //		If specified, used to set the visual element value,
                //		otherwise a computed visual value is used.
                //
                // priorityChange:
                //		If true, an onChange event is fired immediately instead of
                //		waiting for the next blur event.
                var filteredValue;
                if (JSProf.LRE(23944, value) !== undefined) {
                    // TODO: this is calling filter() on both the display value and the actual value.
                    // I added a comment to the filter() definition about this, but it should be changed.
                    filteredValue = JSProf.LWR(23947, filteredValue, JSProf.LMC(23946, this, 'filter').filter(JSProf.LRE(23945, value)));
                    if (typeof JSProf.LRE(23948, formattedValue) != "string") {
                        if (JSProf.LRE(23949, filteredValue) !== null && (typeof JSProf.LRE(23950, filteredValue) != "number" || !JSProf.LFC(23952, isNaN, false)(JSProf.LRE(23951, filteredValue)))) {
                            formattedValue = JSProf.LWR(23957, formattedValue, JSProf.LMC(23956, this, 'filter').filter(JSProf.LMC(23955, this, 'format').format(JSProf.LRE(23953, filteredValue), JSProf.LGD(23954, this, 'constraints').constraints)));
                        } else {
                            formattedValue = JSProf.LWR(23958, formattedValue, '');
                        }
                        // Ensure the filtered value does not change after being formatted. See track #17955.
                        //
                        // This check is only applied when the formatted value is not specified by the caller in order to allow the 
                        // behavior to be overriden. This is needed whenever value synonyms cannot be determined using parse/compare. For
                        // example, dijit/form/FilteringSelect determines the formatted value asynchronously and applies it using a 
                        // callback to this method.
                        //
                        // TODO: Should developers be warned that they broke the round trip on format?
                        if (JSProf.LMC(23964, this, 'compare').compare(JSProf.LRE(23959, filteredValue), JSProf.LMC(23963, this, 'filter').filter(JSProf.LMC(23962, this, 'parse').parse(JSProf.LRE(23960, formattedValue), JSProf.LGD(23961, this, 'constraints').constraints))) != 0) {
                            formattedValue = null;
                        }
                    }
                }
                if (JSProf.LRE(23965, formattedValue) != null && (typeof JSProf.LRE(23966, formattedValue) != "number" || !JSProf.LFC(23968, isNaN, false)(JSProf.LRE(23967, formattedValue))) && JSProf.LGD(23969, this.textbox, 'value').value != JSProf.LRE(23970, formattedValue)) {
                    JSProf.LPD(23972, this.textbox, 'value').value = JSProf.LRSP(23972, JSProf.LRE(23971, formattedValue));
                    JSProf.LMC(23974, this, '_set')._set("displayedValue", JSProf.LMC(23973, this, 'get').get("displayedValue"));
                }
                JSProf.LMC(23978, this, 'inherited').inherited(arguments, JSProf.LNE(23977, [
                    JSProf.LRE(23975, filteredValue),
                    JSProf.LRE(23976, priorityChange)
                ], 10));
            }, 12),
            displayedValue: "",
            _getDisplayedValueAttr: JSProf.LNF(23982, function () {
                // summary:
                //		Hook so get('displayedValue') works.
                // description:
                //		Returns the displayed value (what the user sees on the screen),
                //		after filtering (ie, trimming spaces etc.).
                //
                //		For some subclasses of TextBox (like ComboBox), the displayed value
                //		is different from the serialized value that's actually
                //		sent to the server (see `dijit/form/ValidationTextBox.serialize()`)
                // TODO: maybe we should update this.displayedValue on every keystroke so that we don't need
                // this method
                // TODO: this isn't really the displayed value when the user is typing
                return JSProf.LMC(23981, this, 'filter').filter(JSProf.LGD(23980, this.textbox, 'value').value);
            }, 12),
            _setDisplayedValueAttr: JSProf.LNF(23995, function (value) {
                // summary:
                //		Hook so set('displayedValue', ...) works.
                // description:
                //		Sets the value of the visual element to the string "value".
                //		The widget value is also set to a corresponding,
                //		but not necessarily the same, value.
                if (JSProf.LRE(23983, value) == null) {
                    value = JSProf.LWR(23984, value, '');
                } else if (typeof JSProf.LRE(23985, value) != "string") {
                    value = JSProf.LWR(23988, value, JSProf.LFC(23987, String, false)(JSProf.LRE(23986, value)));
                }
                JSProf.LPD(23990, this.textbox, 'value').value = JSProf.LRSP(23990, JSProf.LRE(23989, value));
                // sets the serialized value to something corresponding to specified displayedValue
                // (if possible), and also updates the textbox.value, for example converting "123"
                // to "123.00"
                JSProf.LMC(23992, this, '_setValueAttr')._setValueAttr(JSProf.LMC(23991, this, 'get').get('value'), undefined);
                JSProf.LMC(23994, this, '_set')._set("displayedValue", JSProf.LMC(23993, this, 'get').get('displayedValue'));
            }, 12),
            format: JSProf.LNF(23999, function (value) {
                // summary:
                //		Replaceable function to convert a value to a properly formatted string.
                // value: String
                // constraints: Object
                // tags:
                //		protected extension
                return JSProf.LRE(23996, value) == null ? "" : JSProf.LGD(23997, value, 'toString').toString ? value.toString() : JSProf.LRE(23998, value);
            }, 12),
            parse: JSProf.LNF(24001, function (value) {
                // summary:
                //		Replaceable function to convert a formatted string to a value
                // value: String
                // constraints: Object
                // tags:
                //		protected extension
                return JSProf.LRE(24000, value);    // String
            }, 12),
            _refreshState: JSProf.LNF(24002, function () {
            }, 12),
            onInput: JSProf.LNF(24003, function () {
            }, 12),
            __skipInputEvent: false,
            _onInput: JSProf.LNF(24011, function (evt) {
                // summary:
                //		Called AFTER the input event has happened
                JSProf.LMC(24005, this, '_processInput')._processInput(JSProf.LRE(24004, evt));
                if (JSProf.LGD(24006, this, 'intermediateChanges').intermediateChanges) {
                    // allow the key to post to the widget input box
                    JSProf.LMC(24010, this, 'defer').defer(JSProf.LNF(24009, function () {
                        JSProf.LMC(24008, this, '_handleOnChange')._handleOnChange(JSProf.LMC(24007, this, 'get').get('value'), false);
                    }, 12));
                }
            }, 12),
            _processInput: JSProf.LNF(24015, function (evt) {
                // summary:
                //		Default action handler for user input events
                JSProf.LMC(24012, this, '_refreshState')._refreshState();
                // In case someone is watch()'ing for changes to displayedValue
                JSProf.LMC(24014, this, '_set')._set("displayedValue", JSProf.LMC(24013, this, 'get').get("displayedValue"));
            }, 12),
            postCreate: JSProf.LNF(24131, function () {
                JSProf.LFD(24130, handleEvent);
                // setting the value here is needed since value="" in the template causes "undefined"
                // and setting in the DOM (instead of the JS object) helps with form reset actions
                JSProf.LMC(24017, this.textbox, 'setAttribute').setAttribute("value", JSProf.LGD(24016, this.textbox, 'value').value);
                // DOM and JS values should be the same
                JSProf.LMC(24018, this, 'inherited').inherited(arguments);
                // normalize input events to reduce spurious event processing
                //	onkeydown: do not forward modifier keys
                //		       set charOrCode to numeric keycode
                //	onkeypress: do not forward numeric charOrCode keys (already sent through onkeydown)
                //	onpaste & oncut: set charOrCode to 229 (IME)
                //	oninput: if primary event not already processed, set charOrCode to 229 (IME), else do not forward
                function handleEvent(e) {
                    var charOrCode;
                    if (JSProf.LGD(24019, e, 'type').type == "keydown") {
                        charOrCode = JSProf.LWR(24021, charOrCode, JSProf.LGD(24020, e, 'keyCode').keyCode);
                        switch (JSProf.LRE(24022, charOrCode)) {
                        // ignore state keys
                        case JSProf.LGD(24023, keys, 'SHIFT').SHIFT:
                        case JSProf.LGD(24024, keys, 'ALT').ALT:
                        case JSProf.LGD(24025, keys, 'CTRL').CTRL:
                        case JSProf.LGD(24026, keys, 'META').META:
                        case JSProf.LGD(24027, keys, 'CAPS_LOCK').CAPS_LOCK:
                        case JSProf.LGD(24028, keys, 'NUM_LOCK').NUM_LOCK:
                        case JSProf.LGD(24029, keys, 'SCROLL_LOCK').SCROLL_LOCK:
                            return;
                        }
                        if (!JSProf.LGD(24030, e, 'ctrlKey').ctrlKey && !JSProf.LGD(24031, e, 'metaKey').metaKey && !JSProf.LGD(24032, e, 'altKey').altKey) {
                            // no modifiers
                            switch (JSProf.LRE(24033, charOrCode)) {
                            // ignore location keys
                            case JSProf.LGD(24034, keys, 'NUMPAD_0').NUMPAD_0:
                            case JSProf.LGD(24035, keys, 'NUMPAD_1').NUMPAD_1:
                            case JSProf.LGD(24036, keys, 'NUMPAD_2').NUMPAD_2:
                            case JSProf.LGD(24037, keys, 'NUMPAD_3').NUMPAD_3:
                            case JSProf.LGD(24038, keys, 'NUMPAD_4').NUMPAD_4:
                            case JSProf.LGD(24039, keys, 'NUMPAD_5').NUMPAD_5:
                            case JSProf.LGD(24040, keys, 'NUMPAD_6').NUMPAD_6:
                            case JSProf.LGD(24041, keys, 'NUMPAD_7').NUMPAD_7:
                            case JSProf.LGD(24042, keys, 'NUMPAD_8').NUMPAD_8:
                            case JSProf.LGD(24043, keys, 'NUMPAD_9').NUMPAD_9:
                            case JSProf.LGD(24044, keys, 'NUMPAD_MULTIPLY').NUMPAD_MULTIPLY:
                            case JSProf.LGD(24045, keys, 'NUMPAD_PLUS').NUMPAD_PLUS:
                            case JSProf.LGD(24046, keys, 'NUMPAD_ENTER').NUMPAD_ENTER:
                            case JSProf.LGD(24047, keys, 'NUMPAD_MINUS').NUMPAD_MINUS:
                            case JSProf.LGD(24048, keys, 'NUMPAD_PERIOD').NUMPAD_PERIOD:
                            case JSProf.LGD(24049, keys, 'NUMPAD_DIVIDE').NUMPAD_DIVIDE:
                                return;
                            }
                            if (JSProf.LRE(24050, charOrCode) >= 65 && JSProf.LRE(24051, charOrCode) <= 90 || JSProf.LRE(24052, charOrCode) >= 48 && JSProf.LRE(24053, charOrCode) <= 57 || JSProf.LRE(24054, charOrCode) == JSProf.LGD(24055, keys, 'SPACE').SPACE) {
                                return;    // keypress will handle simple non-modified printable keys
                            }
                            var named = false;
                            for (var i in JSProf.LRE(24056, keys)) {
                                if (JSProf.LGE(24057, keys, 'i')[i] === JSProf.LGD(24058, e, 'keyCode').keyCode) {
                                    named = JSProf.LWR(24059, named, true);
                                    break;
                                }
                            }
                            if (!JSProf.LRE(24060, named)) {
                                return;
                            }    // only allow named ones through
                        }
                    }
                    charOrCode = JSProf.LWR(24065, charOrCode, JSProf.LGD(24061, e, 'charCode').charCode >= 32 ? JSProf.LMC(24063, String, 'fromCharCode').fromCharCode(JSProf.LGD(24062, e, 'charCode').charCode) : JSProf.LGD(24064, e, 'charCode').charCode);
                    if (!JSProf.LRE(24066, charOrCode)) {
                        charOrCode = JSProf.LWR(24076, charOrCode, JSProf.LGD(24067, e, 'keyCode').keyCode >= 65 && JSProf.LGD(24068, e, 'keyCode').keyCode <= 90 || JSProf.LGD(24069, e, 'keyCode').keyCode >= 48 && JSProf.LGD(24070, e, 'keyCode').keyCode <= 57 || JSProf.LGD(24071, e, 'keyCode').keyCode == JSProf.LGD(24072, keys, 'SPACE').SPACE ? JSProf.LMC(24074, String, 'fromCharCode').fromCharCode(JSProf.LGD(24073, e, 'keyCode').keyCode) : JSProf.LGD(24075, e, 'keyCode').keyCode);
                    }
                    if (!JSProf.LRE(24077, charOrCode)) {
                        charOrCode = JSProf.LWR(24078, charOrCode, 229);    // IME
                    }
                    if (JSProf.LGD(24079, e, 'type').type == "keypress") {
                        if (typeof JSProf.LRE(24080, charOrCode) != "string") {
                            return;
                        }
                        if (JSProf.LRE(24081, charOrCode) >= 'a' && JSProf.LRE(24082, charOrCode) <= 'z' || JSProf.LRE(24083, charOrCode) >= 'A' && JSProf.LRE(24084, charOrCode) <= 'Z' || JSProf.LRE(24085, charOrCode) >= '0' && JSProf.LRE(24086, charOrCode) <= '9' || JSProf.LRE(24087, charOrCode) === ' ') {
                            if (JSProf.LGD(24088, e, 'ctrlKey').ctrlKey || JSProf.LGD(24089, e, 'metaKey').metaKey || JSProf.LGD(24090, e, 'altKey').altKey) {
                                return;
                            }    // can only be stopped reliably in keydown
                        }
                    }
                    if (JSProf.LGD(24091, e, 'type').type == "input") {
                        if (JSProf.LGD(24092, this, '__skipInputEvent').__skipInputEvent) {
                            // duplicate event
                            JSProf.LPD(24093, this, '__skipInputEvent').__skipInputEvent = JSProf.LRSP(24093, false);
                            return;
                        }
                    } else {
                        JSProf.LPD(24094, this, '__skipInputEvent').__skipInputEvent = JSProf.LRSP(24094, true);
                    }
                    // create fake event to set charOrCode and to know if preventDefault() was called
                    var faux = JSProf.LNE(24095, { faux: true }, 11), attr;
                    for (attr in JSProf.LRE(24096, e)) {
                        if (!JSProf.LMC(24098, /^(layer[XY]|returnValue|keyLocation)$/, 'test').test(JSProf.LRE(24097, attr))) {
                            // prevent WebKit warnings
                            var v = JSProf.LGE(24099, e, 'attr')[attr];
                            if (typeof JSProf.LRE(24100, v) != "function" && typeof JSProf.LRE(24101, v) != "undefined") {
                                JSProf.LPE(24103, faux, 'attr')[attr] = JSProf.LRPE(24103, JSProf.LRE(24102, v));
                            }
                        }
                    }
                    JSProf.LMC(24111, lang, 'mixin').mixin(JSProf.LRE(24104, faux), JSProf.LNE(24110, {
                        charOrCode: charOrCode,
                        _wasConsumed: false,
                        preventDefault: JSProf.LNF(24107, function () {
                            JSProf.LPD(24105, faux, '_wasConsumed')._wasConsumed = JSProf.LRSP(24105, true);
                            JSProf.LMC(24106, e, 'preventDefault').preventDefault();
                        }, 12),
                        stopPropagation: JSProf.LNF(24109, function () {
                            JSProf.LMC(24108, e, 'stopPropagation').stopPropagation();
                        }, 12)
                    }, 11));
                    // give web page author a chance to consume the event
                    //console.log(faux.type + ', charOrCode = (' + (typeof charOrCode) + ') ' + charOrCode + ', ctrl ' + !!faux.ctrlKey + ', alt ' + !!faux.altKey + ', meta ' + !!faux.metaKey + ', shift ' + !!faux.shiftKey);
                    if (JSProf.LMC(24113, this, 'onInput').onInput(JSProf.LRE(24112, faux)) === false) {
                        // return false means stop
                        JSProf.LMC(24114, faux, 'preventDefault').preventDefault();
                        JSProf.LMC(24115, faux, 'stopPropagation').stopPropagation();
                    }
                    if (JSProf.LGD(24116, faux, '_wasConsumed')._wasConsumed) {
                        return;
                    }
                    // if preventDefault was called
                    JSProf.LMC(24120, this, 'defer').defer(JSProf.LNF(24119, function () {
                        JSProf.LMC(24118, this, '_onInput')._onInput(JSProf.LRE(24117, faux));
                    }, 12));    // widget notification after key has posted
                }
                JSProf.LMC(24129, this, 'own').own(JSProf.LFC(24124, on, false)(JSProf.LGD(24121, this, 'textbox').textbox, "keydown, keypress, paste, cut, input, compositionend", JSProf.LMC(24123, lang, 'hitch').hitch(this, JSProf.LRE(24122, handleEvent))), JSProf.LFC(24128, on, false)(JSProf.LGD(24125, this, 'domNode').domNode, "keypress", JSProf.LNF(24127, function (e) {
                    JSProf.LMC(24126, e, 'stopPropagation').stopPropagation();
                }, 12)));
            }, 12),
            _blankValue: '',
            filter: JSProf.LNF(24149, function (val) {
                // summary:
                //		Auto-corrections (such as trimming) that are applied to textbox
                //		value on blur or form submit.
                // description:
                //		For MappedTextBox subclasses, this is called twice
                //
                //		- once with the display value
                //		- once the value as set/returned by set('value', ...)
                //
                //		and get('value'), ex: a Number for NumberTextBox.
                //
                //		In the latter case it does corrections like converting null to NaN.  In
                //		the former case the NumberTextBox.filter() method calls this.inherited()
                //		to execute standard trimming code in TextBox.filter().
                //
                //		TODO: break this into two methods in 2.0
                //
                // tags:
                //		protected extension
                if (JSProf.LRE(24132, val) === null) {
                    return JSProf.LGD(24133, this, '_blankValue')._blankValue;
                }
                if (typeof JSProf.LRE(24134, val) != "string") {
                    return JSProf.LRE(24135, val);
                }
                if (JSProf.LGD(24136, this, 'trim').trim) {
                    val = JSProf.LWR(24139, val, JSProf.LMC(24138, lang, 'trim').trim(JSProf.LRE(24137, val)));
                }
                if (JSProf.LGD(24140, this, 'uppercase').uppercase) {
                    val = JSProf.LWR(24141, val, val.toUpperCase());
                }
                if (JSProf.LGD(24142, this, 'lowercase').lowercase) {
                    val = JSProf.LWR(24143, val, val.toLowerCase());
                }
                if (JSProf.LGD(24144, this, 'propercase').propercase) {
                    val = JSProf.LWR(24147, val, JSProf.LMC(24146, val, 'replace').replace(/[^\s]+/g, JSProf.LNF(24145, function (word) {
                        return word.substring(0, 1).toUpperCase() + word.substring(1);
                    }, 12)));
                }
                return JSProf.LRE(24148, val);
            }, 12),
            _setBlurValue: JSProf.LNF(24152, function () {
                // Format the displayed value, for example (for NumberTextBox) convert 1.4 to 1.400,
                // or (for CurrencyTextBox) 2.50 to $2.50
                JSProf.LMC(24151, this, '_setValueAttr')._setValueAttr(JSProf.LMC(24150, this, 'get').get('value'), true);
            }, 12),
            _onBlur: JSProf.LNF(24156, function (e) {
                if (JSProf.LGD(24153, this, 'disabled').disabled) {
                    return;
                }
                JSProf.LMC(24154, this, '_setBlurValue')._setBlurValue();
                JSProf.LMC(24155, this, 'inherited').inherited(arguments);
            }, 12),
            _isTextSelected: JSProf.LNF(24159, function () {
                return JSProf.LGD(24157, this.textbox, 'selectionStart').selectionStart != JSProf.LGD(24158, this.textbox, 'selectionEnd').selectionEnd;
            }, 12),
            _onFocus: JSProf.LNF(24180, function (by) {
                if (JSProf.LGD(24160, this, 'disabled').disabled || JSProf.LGD(24161, this, 'readOnly').readOnly) {
                    return;
                }
                // Select all text on focus via click if nothing already selected.
                // Since mouse-up will clear the selection, need to defer selection until after mouse-up.
                // Don't do anything on focus by tabbing into the widget since there's no associated mouse-up event.
                if (JSProf.LGD(24162, this, 'selectOnClick').selectOnClick && JSProf.LRE(24163, by) == "mouse") {
                    // Use on.once() to only select all text on first click only; otherwise users would have no way to clear
                    // the selection.
                    JSProf.LPD(24171, this, '_selectOnClickHandle')._selectOnClickHandle = JSProf.LRSP(24171, JSProf.LMC(24170, on, 'once').once(JSProf.LGD(24164, this, 'domNode').domNode, "mouseup, touchend", JSProf.LMC(24169, lang, 'hitch').hitch(this, JSProf.LNF(24168, function (evt) {
                        // Check if the user selected some text manually (mouse-down, mouse-move, mouse-up)
                        // and if not, then select all the text
                        if (!JSProf.LMC(24165, this, '_isTextSelected')._isTextSelected()) {
                            JSProf.LMC(24167, _TextBoxMixin, 'selectInputText').selectInputText(JSProf.LGD(24166, this, 'textbox').textbox);
                        }
                    }, 12))));
                    JSProf.LMC(24173, this, 'own').own(JSProf.LGD(24172, this, '_selectOnClickHandle')._selectOnClickHandle);
                    // in case the mouseup never comes
                    JSProf.LMC(24177, this, 'defer').defer(JSProf.LNF(24176, function () {
                        if (JSProf.LGD(24174, this, '_selectOnClickHandle')._selectOnClickHandle) {
                            JSProf.LMC(24175, this._selectOnClickHandle, 'remove').remove();
                            this._selectOnClickHandle = null;
                        }
                    }, 12), 500);    // if mouseup not received soon, then treat it as some gesture
                }
                // call this.inherited() before refreshState(), since this.inherited() will possibly scroll the viewport
                // (to scroll the TextBox into view), which will affect how _refreshState() positions the tooltip
                JSProf.LMC(24178, this, 'inherited').inherited(arguments);
                JSProf.LMC(24179, this, '_refreshState')._refreshState();
            }, 12),
            reset: JSProf.LNF(24183, function () {
                // Overrides `dijit/_FormWidget/reset()`.
                // Additionally resets the displayed textbox value to ''
                JSProf.LPD(24181, this.textbox, 'value').value = JSProf.LRSP(24181, '');
                JSProf.LMC(24182, this, 'inherited').inherited(arguments);
            }, 12)
        }, 11));
    if (JSProf.LFC(24186, has, false)("dojo-bidi")) {
        _TextBoxMixin = JSProf.LWR(24202, _TextBoxMixin, JSProf.LFC(24201, declare, false)("dijit.form._TextBoxMixin", JSProf.LRE(24187, _TextBoxMixin), JSProf.LNE(24200, {
            _setValueAttr: JSProf.LNF(24191, function () {
                JSProf.LMC(24188, this, 'inherited').inherited(arguments);
                JSProf.LMC(24190, this, 'applyTextDir').applyTextDir(JSProf.LGD(24189, this, 'focusNode').focusNode);
            }, 12),
            _setDisplayedValueAttr: JSProf.LNF(24195, function () {
                JSProf.LMC(24192, this, 'inherited').inherited(arguments);
                JSProf.LMC(24194, this, 'applyTextDir').applyTextDir(JSProf.LGD(24193, this, 'focusNode').focusNode);
            }, 12),
            _onInput: JSProf.LNF(24199, function () {
                JSProf.LMC(24197, this, 'applyTextDir').applyTextDir(JSProf.LGD(24196, this, 'focusNode').focusNode);
                JSProf.LMC(24198, this, 'inherited').inherited(arguments);
            }, 12)
        }, 11)));
    }
    JSProf.LPD(24209, _TextBoxMixin, '_setSelectionRange')._setSelectionRange = JSProf.LRSP(24209, JSProf.LPD(24208, dijit, '_setSelectionRange')._setSelectionRange = JSProf.LRSP(24208, JSProf.LNF(24207, function (element, start, stop) {
        if (JSProf.LGD(24203, element, 'setSelectionRange').setSelectionRange) {
            JSProf.LMC(24206, element, 'setSelectionRange').setSelectionRange(JSProf.LRE(24204, start), JSProf.LRE(24205, stop));
        }
    }, 12)));
    JSProf.LPD(24228, _TextBoxMixin, 'selectInputText').selectInputText = JSProf.LRSP(24228, JSProf.LPD(24227, dijit, 'selectInputText').selectInputText = JSProf.LRSP(24227, JSProf.LNF(24226, function (element, start, stop) {
        // summary:
        //		Select text in the input element argument, from start (default 0), to stop (default end).
        // TODO: use functions in _editor/selection.js?
        element = JSProf.LWR(24212, element, JSProf.LMC(24211, dom, 'byId').byId(JSProf.LRE(24210, element)));
        if (JSProf.LFC(24214, isNaN, false)(JSProf.LRE(24213, start))) {
            start = JSProf.LWR(24215, start, 0);
        }
        if (JSProf.LFC(24217, isNaN, false)(JSProf.LRE(24216, stop))) {
            stop = JSProf.LWR(24220, stop, JSProf.LGD(24218, element, 'value').value ? JSProf.LGD(24219, element.value, 'length').length : 0);
        }
        try {
            JSProf.LMC(24221, element, 'focus').focus();
            JSProf.LMC(24225, _TextBoxMixin, '_setSelectionRange')._setSelectionRange(JSProf.LRE(24222, element), JSProf.LRE(24223, start), JSProf.LRE(24224, stop));
        } catch (e) {
        }
    }, 12)));
    return JSProf.LRE(24229, _TextBoxMixin);
}, 12));