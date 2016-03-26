JSProf.LFC(18486, define, false)(JSProf.LNE(18365, [
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/_base/kernel",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/sniff",
    "./_FormValueWidget",
    "./_TextBoxMixin",
    "dojo/text!./templates/TextBox.html",
    "../main"
], 10), JSProf.LNF(18485, function (declare, domConstruct, domStyle, kernel, lang, on, has, _FormValueWidget, _TextBoxMixin, template, dijit) {
    // module:
    //		dijit/form/TextBox
    var TextBox = JSProf.LFC(18453, declare, false)("dijit.form.TextBox" + (JSProf.LFC(18366, has, false)("dojo-bidi") ? "_NoBidi" : ""), JSProf.LNE(18369, [
            JSProf.LRE(18367, _FormValueWidget),
            JSProf.LRE(18368, _TextBoxMixin)
        ], 10), JSProf.LNE(18452, {
            templateString: template,
            _singleNodeTemplate: '<input class="dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point="textbox,focusNode" autocomplete="off" type="${type}" ${!nameAttrSetting} />',
            _buttonInputDisabled: JSProf.LFC(18370, has, false)("ie") ? "disabled" : "",
            baseClass: "dijitTextBox",
            postMixInProperties: JSProf.LNF(18379, function () {
                var type = this.type.toLowerCase();
                if (JSProf.LGD(18371, this, 'templateString').templateString && this.templateString.toLowerCase() == "input" || (JSProf.LRE(18372, type) == "hidden" || JSProf.LRE(18373, type) == "file") && JSProf.LGD(18374, this, 'templateString').templateString == JSProf.LGD(18375, this.constructor.prototype, 'templateString').templateString) {
                    JSProf.LPD(18377, this, 'templateString').templateString = JSProf.LRSP(18377, JSProf.LGD(18376, this, '_singleNodeTemplate')._singleNodeTemplate);
                }
                JSProf.LMC(18378, this, 'inherited').inherited(arguments);
            }, 12),
            postCreate: JSProf.LNF(18394, function () {
                JSProf.LMC(18380, this, 'inherited').inherited(arguments);
                if (JSProf.LFC(18381, has, false)("ie") < 9) {
                    // IE INPUT tag fontFamily has to be set directly using STYLE
                    // the defer gives IE a chance to render the TextBox and to deal with font inheritance
                    JSProf.LMC(18393, this, 'defer').defer(JSProf.LNF(18392, function () {
                        try {
                            var s = JSProf.LMC(18383, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LGD(18382, this, 'domNode').domNode);
                            // can throw an exception if widget is immediately destroyed
                            if (JSProf.LRE(18384, s)) {
                                var ff = JSProf.LGD(18385, s, 'fontFamily').fontFamily;
                                if (JSProf.LRE(18386, ff)) {
                                    var inputs = this.domNode.getElementsByTagName("INPUT");
                                    if (JSProf.LRE(18387, inputs)) {
                                        for (var i = 0; JSProf.LRE(18388, i) < JSProf.LGD(18389, inputs, 'length').length; i++) {
                                            JSProf.LPD(18391, inputs[i].style, 'fontFamily').fontFamily = JSProf.LRSP(18391, JSProf.LRE(18390, ff));
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                        }
                    }, 12));
                }
            }, 12),
            _setPlaceHolderAttr: JSProf.LNF(18418, function (v) {
                JSProf.LMC(18396, this, '_set')._set("placeHolder", JSProf.LRE(18395, v));
                if (!JSProf.LGD(18397, this, '_phspan')._phspan) {
                    JSProf.LMC(18398, this._attachPoints, 'push').push('_phspan');
                    JSProf.LPD(18402, this, '_phspan')._phspan = JSProf.LRSP(18402, JSProf.LMC(18401, domConstruct, 'create').create('span', JSProf.LNE(18399, { className: 'dijitPlaceHolder dijitInputField' }, 11), JSProf.LGD(18400, this, 'textbox').textbox, 'after'));
                    JSProf.LMC(18412, this, 'own').own(JSProf.LFC(18406, on, false)(JSProf.LGD(18403, this, '_phspan')._phspan, "mousedown", JSProf.LNF(18405, function (evt) {
                        JSProf.LMC(18404, evt, 'preventDefault').preventDefault();
                    }, 12)), JSProf.LFC(18411, on, false)(JSProf.LGD(18407, this, '_phspan')._phspan, "touchend, pointerup, MSPointerUp", JSProf.LMC(18410, lang, 'hitch').hitch(this, JSProf.LNF(18409, function () {
                        // If the user clicks placeholder rather than the <input>, need programmatic focus.  Normally this
                        // is done in _FormWidgetMixin._onFocus() but after [30663] it's done on a delay, which is ineffective.
                        JSProf.LMC(18408, this, 'focus').focus();
                    }, 12))));
                }
                JSProf.LPD(18413, this._phspan, 'innerHTML').innerHTML = JSProf.LRSP(18413, "");
                JSProf.LMC(18416, this._phspan, 'appendChild').appendChild(JSProf.LMC(18415, this._phspan.ownerDocument, 'createTextNode').createTextNode(JSProf.LRE(18414, v)));
                JSProf.LMC(18417, this, '_updatePlaceHolder')._updatePlaceHolder();
            }, 12),
            _onInput: JSProf.LNF(18421, function (evt) {
                // summary:
                //		Called AFTER the input event has happened
                //		See if the placeHolder text should be removed or added while editing.
                JSProf.LMC(18419, this, 'inherited').inherited(arguments);
                JSProf.LMC(18420, this, '_updatePlaceHolder')._updatePlaceHolder();
            }, 12),
            _updatePlaceHolder: JSProf.LNF(18426, function () {
                if (JSProf.LGD(18422, this, '_phspan')._phspan) {
                    JSProf.LPD(18425, this._phspan.style, 'display').display = JSProf.LRSP(18425, JSProf.LGD(18423, this, 'placeHolder').placeHolder && !JSProf.LGD(18424, this.textbox, 'value').value ? "" : "none");
                }
            }, 12),
            _setValueAttr: JSProf.LNF(18429, function (value, priorityChange, formattedValue) {
                JSProf.LMC(18427, this, 'inherited').inherited(arguments);
                JSProf.LMC(18428, this, '_updatePlaceHolder')._updatePlaceHolder();
            }, 12),
            getDisplayedValue: JSProf.LNF(18433, function () {
                // summary:
                //		Deprecated.  Use get('displayedValue') instead.
                // tags:
                //		deprecated
                JSProf.LMC(18431, kernel, 'deprecated').deprecated(JSProf.LGD(18430, this, 'declaredClass').declaredClass + "::getDisplayedValue() is deprecated. Use get('displayedValue') instead.", "", "2.0");
                return JSProf.LMC(18432, this, 'get').get('displayedValue');
            }, 12),
            setDisplayedValue: JSProf.LNF(18438, function (value) {
                // summary:
                //		Deprecated.  Use set('displayedValue', ...) instead.
                // tags:
                //		deprecated
                JSProf.LMC(18435, kernel, 'deprecated').deprecated(JSProf.LGD(18434, this, 'declaredClass').declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
                JSProf.LMC(18437, this, 'set').set('displayedValue', JSProf.LRE(18436, value));
            }, 12),
            _onBlur: JSProf.LNF(18446, function (e) {
                if (JSProf.LGD(18439, this, 'disabled').disabled) {
                    return;
                }
                JSProf.LMC(18440, this, 'inherited').inherited(arguments);
                JSProf.LMC(18441, this, '_updatePlaceHolder')._updatePlaceHolder();
                if (JSProf.LFC(18442, has, false)("mozilla")) {
                    if (JSProf.LGD(18443, this, 'selectOnClick').selectOnClick) {
                        // clear selection so that the next mouse click doesn't reselect
                        JSProf.LPD(18445, this.textbox, 'selectionStart').selectionStart = JSProf.LRSP(18445, JSProf.LPD(18444, this.textbox, 'selectionEnd').selectionEnd = JSProf.LRSP(18444, undefined));
                    }
                }
            }, 12),
            _onFocus: JSProf.LNF(18451, function (by) {
                if (JSProf.LGD(18447, this, 'disabled').disabled || JSProf.LGD(18448, this, 'readOnly').readOnly) {
                    return;
                }
                JSProf.LMC(18449, this, 'inherited').inherited(arguments);
                JSProf.LMC(18450, this, '_updatePlaceHolder')._updatePlaceHolder();
            }, 12)
        }, 11));
    if (JSProf.LFC(18454, has, false)("ie") < 9) {
        JSProf.LPD(18461, TextBox.prototype, '_isTextSelected')._isTextSelected = JSProf.LRSP(18461, JSProf.LNF(18460, function () {
            var range = JSProf.LMC(18455, this.ownerDocument.selection, 'createRange').createRange();
            var parent = JSProf.LMC(18456, range, 'parentElement').parentElement();
            return JSProf.LRE(18457, parent) == JSProf.LGD(18458, this, 'textbox').textbox && JSProf.LGD(18459, range.text, 'length').length > 0;
        }, 12));
        // Overrides definition of _setSelectionRange from _TextBoxMixin (TODO: move to _TextBoxMixin.js?)
        JSProf.LPD(18474, dijit, '_setSelectionRange')._setSelectionRange = JSProf.LRSP(18474, JSProf.LPD(18473, _TextBoxMixin, '_setSelectionRange')._setSelectionRange = JSProf.LRSP(18473, JSProf.LNF(18472, function (element, start, stop) {
            if (JSProf.LGD(18462, element, 'createTextRange').createTextRange) {
                var r = JSProf.LMC(18463, element, 'createTextRange').createTextRange();
                JSProf.LMC(18464, r, 'collapse').collapse(true);
                JSProf.LMC(18465, r, 'moveStart').moveStart("character", -99999);
                // move to 0
                JSProf.LMC(18467, r, 'moveStart').moveStart("character", JSProf.LRE(18466, start));
                // delta from 0 is the correct position
                JSProf.LMC(18470, r, 'moveEnd').moveEnd("character", JSProf.LRE(18468, stop) - JSProf.LRE(18469, start));
                JSProf.LMC(18471, r, 'select').select();
            }
        }, 12)));
    }
    if (JSProf.LFC(18475, has, false)("dojo-bidi")) {
        TextBox = JSProf.LWR(18483, TextBox, JSProf.LFC(18482, declare, false)("dijit.form.TextBox", JSProf.LRE(18476, TextBox), JSProf.LNE(18481, {
            _setPlaceHolderAttr: JSProf.LNF(18480, function (v) {
                JSProf.LMC(18477, this, 'inherited').inherited(arguments);
                JSProf.LMC(18479, this, 'applyTextDir').applyTextDir(JSProf.LGD(18478, this, '_phspan')._phspan);
            }, 12)
        }, 11)));
    }
    return JSProf.LRE(18484, TextBox);
}, 12));