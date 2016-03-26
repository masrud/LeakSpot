JSProf.LFC(27743, define, false)(JSProf.LNE(27389, [
    "require",
    "dojo/_base/array",
    "dojo/aspect",
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/i18n",
    "dojo/_base/kernel",
    "dojo/keys",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/sniff",
    "dojo/when",
    "./a11yclick",
    "./focus",
    "./_Widget",
    "./_TemplatedMixin",
    "./_WidgetsInTemplateMixin",
    "./_Container",
    "./form/Button",
    "./form/_TextBoxMixin",
    "./form/TextBox",
    "dojo/text!./templates/InlineEditBox.html",
    "dojo/i18n!./nls/common"
], 10), JSProf.LNF(27742, function (require, array, aspect, declare, domAttr, domClass, domConstruct, domStyle, i18n, kernel, keys, lang, on, has, when, a11yclick, fm, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _Container, Button, _TextBoxMixin, TextBox, template) {
    // module:
    //		dijit/InlineEditBox
    var InlineEditor = JSProf.LFC(27535, declare, false)("dijit._InlineEditor", JSProf.LNE(27393, [
            JSProf.LRE(27390, _Widget),
            JSProf.LRE(27391, _TemplatedMixin),
            JSProf.LRE(27392, _WidgetsInTemplateMixin)
        ], 10), JSProf.LNE(27534, {
            templateString: template,
            contextRequire: require,
            postMixInProperties: JSProf.LNF(27404, function () {
                JSProf.LMC(27394, this, 'inherited').inherited(arguments);
                JSProf.LPD(27397, this, 'messages').messages = JSProf.LRSP(27397, JSProf.LMC(27396, i18n, 'getLocalization').getLocalization("dijit", "common", JSProf.LGD(27395, this, 'lang').lang));
                JSProf.LMC(27403, array, 'forEach').forEach(JSProf.LNE(27398, [
                    "buttonSave",
                    "buttonCancel"
                ], 10), JSProf.LNF(27402, function (prop) {
                    if (!JSProf.LGE(27399, this, 'prop')[prop]) {
                        JSProf.LPE(27401, this, 'prop')[prop] = JSProf.LRPE(27401, JSProf.LGE(27400, this.messages, 'prop')[prop]);
                    }
                }, 12), this);
            }, 12),
            buildRendering: JSProf.LNF(27454, function () {
                JSProf.LMC(27405, this, 'inherited').inherited(arguments);
                // Create edit widget in place in the template
                // TODO: remove getObject() for 2.0
                var Cls = typeof JSProf.LGD(27406, this, 'editor').editor == "string" ? JSProf.LMC(27408, lang, 'getObject').getObject(JSProf.LGD(27407, this, 'editor').editor) || JSProf.LFC(27410, require, false)(JSProf.LGD(27409, this, 'editor').editor) : JSProf.LGD(27411, this, 'editor').editor;
                // Copy the style from the source
                // Don't copy ALL properties though, just the necessary/applicable ones.
                // wrapperStyle/destStyle code is to workaround IE bug where getComputedStyle().fontSize
                // is a relative value like 200%, rather than an absolute value like 24px, and
                // the 200% can refer *either* to a setting on the node or it's ancestor (see #11175)
                var srcStyle = JSProf.LGD(27412, this, 'sourceStyle').sourceStyle, editStyle = "line-height:" + JSProf.LGD(27413, srcStyle, 'lineHeight').lineHeight + ";", destStyle = JSProf.LMC(27415, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LGD(27414, this, 'domNode').domNode);
                JSProf.LMC(27427, array, 'forEach').forEach(JSProf.LNE(27416, [
                    "Weight",
                    "Family",
                    "Size",
                    "Style"
                ], 10), JSProf.LNF(27426, function (prop) {
                    var textStyle = JSProf.LGE(27418, srcStyle, JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002 = "font" + JSProf.LRE(27417, prop))[JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002], wrapperStyle = JSProf.LGE(27420, destStyle, JSProf.TMPS.t823bec3caa92c028689635d2e1fb8d20da0f6269 = "font" + JSProf.LRE(27419, prop))[JSProf.TMPS.t823bec3caa92c028689635d2e1fb8d20da0f6269];
                    if (JSProf.LRE(27421, wrapperStyle) != JSProf.LRE(27422, textStyle)) {
                        editStyle += "font-" + JSProf.LRE(27423, prop) + ":" + JSProf.LGE(27425, srcStyle, JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002 = "font" + JSProf.LRE(27424, prop))[JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002] + ";";
                    }
                }, 12), this);
                JSProf.LMC(27432, array, 'forEach').forEach(JSProf.LNE(27428, [
                    "marginTop",
                    "marginBottom",
                    "marginLeft",
                    "marginRight",
                    "position",
                    "left",
                    "top",
                    "right",
                    "bottom",
                    "float",
                    "clear",
                    "display"
                ], 10), JSProf.LNF(27431, function (prop) {
                    JSProf.LPE(27430, this.domNode.style, 'prop')[prop] = JSProf.LRPE(27430, JSProf.LGE(27429, srcStyle, 'prop')[prop]);
                }, 12), this);
                var width = JSProf.LGD(27433, this.inlineEditBox, 'width').width;
                if (JSProf.LRE(27434, width) == "100%") {
                    // block mode
                    editStyle += "width:100%;";
                    JSProf.LPD(27435, this.domNode.style, 'display').display = JSProf.LRSP(27435, "block");
                } else {
                    // inline-block mode
                    editStyle += "width:" + (JSProf.LRE(27436, width) + (JSProf.LFC(27438, Number, false)(JSProf.LRE(27437, width)) == JSProf.LRE(27439, width) ? "px" : "")) + ";";
                }
                var editorParams = JSProf.LMC(27442, lang, 'delegate').delegate(JSProf.LGD(27440, this.inlineEditBox, 'editorParams').editorParams, JSProf.LNE(27441, {
                        style: editStyle,
                        dir: this.dir,
                        lang: this.lang,
                        textDir: this.textDir
                    }, 11));
                // set the value in onLoadDeferred instead so the widget has time to finish initializing
                //editorParams[("displayedValue" in Cls.prototype || "_setDisplayedValueAttr" in Cls.prototype) ? "displayedValue" : "value"] = this.value;
                JSProf.LPD(27447, this, 'editWidget').editWidget = JSProf.LRSP(27447, JSProf.LNE(27446, new (JSProf.LFC(27445, Cls, true))(JSProf.LRE(27443, editorParams), JSProf.LGD(27444, this, 'editorPlaceholder').editorPlaceholder), 'Cls'));
                if (JSProf.LGD(27448, this.inlineEditBox, 'autoSave').autoSave) {
                    // Remove the save/cancel buttons since saving is done by simply tabbing away or
                    // selecting a value from the drop down list
                    JSProf.LMC(27449, this.saveButton, 'destroy').destroy();
                    JSProf.LMC(27450, this.cancelButton, 'destroy').destroy();
                    JSProf.LPD(27451, this, 'saveButton').saveButton = JSProf.LRSP(27451, this.cancelButton = null);
                    JSProf.LMC(27453, domConstruct, 'destroy').destroy(JSProf.LGD(27452, this, 'buttonContainer').buttonContainer);
                }
            }, 12),
            postCreate: JSProf.LNF(27472, function () {
                JSProf.LMC(27455, this, 'inherited').inherited(arguments);
                var ew = JSProf.LGD(27456, this, 'editWidget').editWidget;
                if (JSProf.LGD(27457, this.inlineEditBox, 'autoSave').autoSave) {
                    JSProf.LMC(27464, this, 'own').own(JSProf.LMC(27460, aspect, 'after').after(JSProf.LRE(27458, ew), "onChange", JSProf.LMC(27459, lang, 'hitch').hitch(this, "_onChange"), true), JSProf.LFC(27463, on, false)(JSProf.LRE(27461, ew), "keydown", JSProf.LMC(27462, lang, 'hitch').hitch(this, "_onKeyDown")));
                } else {
                    // If possible, enable/disable save button based on whether the user has changed the value
                    if ("intermediateChanges" in JSProf.LRE(27465, ew)) {
                        JSProf.LMC(27466, ew, 'set').set("intermediateChanges", true);
                        JSProf.LMC(27470, this, 'own').own(JSProf.LMC(27469, aspect, 'after').after(JSProf.LRE(27467, ew), "onChange", JSProf.LMC(27468, lang, 'hitch').hitch(this, "_onIntermediateChange"), true));
                        JSProf.LMC(27471, this.saveButton, 'set').set("disabled", true);
                    }
                }
            }, 12),
            startup: JSProf.LNF(27475, function () {
                JSProf.LMC(27473, this.editWidget, 'startup').startup();
                JSProf.LMC(27474, this, 'inherited').inherited(arguments);
            }, 12),
            _onIntermediateChange: JSProf.LNF(27480, function () {
                // summary:
                //		Called for editor widgets that support the intermediateChanges=true flag as a way
                //		to detect when to enable/disabled the save button
                JSProf.LMC(27479, this.saveButton, 'set').set("disabled", JSProf.LMC(27476, this, 'getValue').getValue() == JSProf.LGD(27477, this, '_resetValue')._resetValue || !JSProf.LMC(27478, this, 'enableSave').enableSave());
            }, 12),
            destroy: JSProf.LNF(27483, function () {
                JSProf.LMC(27481, this.editWidget, 'destroy').destroy(true);
                // let the parent wrapper widget clean up the DOM
                JSProf.LMC(27482, this, 'inherited').inherited(arguments);
            }, 12),
            getValue: JSProf.LNF(27489, function () {
                // summary:
                //		Return the [display] value of the edit widget
                var ew = JSProf.LGD(27484, this, 'editWidget').editWidget;
                return JSProf.LFC(27488, String, false)(JSProf.LMC(27487, ew, 'get').get("displayedValue" in JSProf.LRE(27485, ew) || "_getDisplayedValueAttr" in JSProf.LRE(27486, ew) ? "displayedValue" : "value"));
            }, 12),
            _onKeyDown: JSProf.LNF(27505, function (e) {
                // summary:
                //		Handler for keydown in the edit box in autoSave mode.
                // description:
                //		For autoSave widgets, if Esc/Enter, call cancel/save.
                // tags:
                //		private
                if (JSProf.LGD(27490, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(27491, this.inlineEditBox, 'editing').editing) {
                    if (JSProf.LGD(27492, e, 'altKey').altKey || JSProf.LGD(27493, e, 'ctrlKey').ctrlKey) {
                        return;
                    }
                    // If Enter/Esc pressed, treat as save/cancel.
                    if (JSProf.LGD(27494, e, 'keyCode').keyCode == JSProf.LGD(27495, keys, 'ESCAPE').ESCAPE) {
                        JSProf.LMC(27496, e, 'stopPropagation').stopPropagation();
                        JSProf.LMC(27497, e, 'preventDefault').preventDefault();
                        JSProf.LMC(27498, this, 'cancel').cancel(true);    // sets editing=false which short-circuits _onBlur processing
                    } else if (JSProf.LGD(27499, e, 'keyCode').keyCode == JSProf.LGD(27500, keys, 'ENTER').ENTER && JSProf.LGD(27501, e.target, 'tagName').tagName == "INPUT") {
                        JSProf.LMC(27502, e, 'stopPropagation').stopPropagation();
                        JSProf.LMC(27503, e, 'preventDefault').preventDefault();
                        JSProf.LMC(27504, this, '_onChange')._onChange();    // fire _onBlur and then save
                    }    // _onBlur will handle TAB automatically by allowing
                         // the TAB to change focus before we mess with the DOM: #6227
                         // Expounding by request:
                         //	The current focus is on the edit widget input field.
                         //	save() will hide and destroy this widget.
                         //	We want the focus to jump from the currently hidden
                         //	displayNode, but since it's hidden, it's impossible to
                         //	unhide it, focus it, and then have the browser focus
                         //	away from it to the next focusable element since each
                         //	of these events is asynchronous and the focus-to-next-element
                         //	is already queued.
                         //	So we allow the browser time to unqueue the move-focus event
                         //	before we do all the hide/show stuff.
                }
            }, 12),
            _onBlur: JSProf.LNF(27514, function () {
                // summary:
                //		Called when focus moves outside the editor
                // tags:
                //		private
                JSProf.LMC(27506, this, 'inherited').inherited(arguments);
                if (JSProf.LGD(27507, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(27508, this.inlineEditBox, 'editing').editing) {
                    if (JSProf.LMC(27509, this, 'getValue').getValue() == JSProf.LGD(27510, this, '_resetValue')._resetValue) {
                        JSProf.LMC(27511, this, 'cancel').cancel(false);
                    } else if (JSProf.LMC(27512, this, 'enableSave').enableSave()) {
                        JSProf.LMC(27513, this, 'save').save(false);
                    }
                }
            }, 12),
            _onChange: JSProf.LNF(27520, function () {
                // summary:
                //		Called when the underlying widget fires an onChange event,
                //		such as when the user selects a value from the drop down list of a ComboBox,
                //		which means that the user has finished entering the value and we should save.
                // tags:
                //		private
                if (JSProf.LGD(27515, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(27516, this.inlineEditBox, 'editing').editing && JSProf.LMC(27517, this, 'enableSave').enableSave()) {
                    JSProf.LMC(27519, fm, 'focus').focus(JSProf.LGD(27518, this.inlineEditBox, 'displayNode').displayNode);    // fires _onBlur which will save the formatted value
                }
            }, 12),
            enableSave: JSProf.LNF(27523, function () {
                // summary:
                //		User overridable function returning a Boolean to indicate
                //		if the Save button should be enabled or not - usually due to invalid conditions
                // tags:
                //		extension
                return JSProf.LGD(27521, this.editWidget, 'isValid').isValid ? JSProf.LMC(27522, this.editWidget, 'isValid').isValid() : true;
            }, 12),
            focus: JSProf.LNF(27533, function () {
                // summary:
                //		Focus the edit widget.
                // tags:
                //		protected
                JSProf.LMC(27524, this.editWidget, 'focus').focus();
                if (JSProf.LGD(27525, this.editWidget, 'focusNode').focusNode) {
                    // IE can take 30ms to report the focus event, but focus manager needs to know before a 0ms timeout.
                    JSProf.LMC(27527, fm, '_onFocusNode')._onFocusNode(JSProf.LGD(27526, this.editWidget, 'focusNode').focusNode);
                    if (JSProf.LGD(27528, this.editWidget.focusNode, 'tagName').tagName == "INPUT") {
                        JSProf.LMC(27532, this, 'defer').defer(JSProf.LNF(27531, function () {
                            JSProf.LMC(27530, _TextBoxMixin, 'selectInputText').selectInputText(JSProf.LGD(27529, this.editWidget, 'focusNode').focusNode);
                        }, 12));
                    }
                }
            }, 12)
        }, 11));
    var InlineEditBox = JSProf.LFC(27729, declare, false)("dijit.InlineEditBox" + (JSProf.LFC(27536, has, false)("dojo-bidi") ? "_NoBidi" : ""), JSProf.LRE(27537, _Widget), JSProf.LNE(27728, {
            editing: false,
            autoSave: true,
            buttonSave: "",
            buttonCancel: "",
            renderAsHtml: false,
            editor: TextBox,
            editorWrapper: InlineEditor,
            editorParams: JSProf.LNE(27538, {}, 11),
            disabled: false,
            onChange: JSProf.LNF(27539, function () {
            }, 12),
            onCancel: JSProf.LNF(27540, function () {
            }, 12),
            width: "100%",
            value: "",
            noValueIndicator: JSProf.LFC(27541, has, false)("ie") <= 6 ? "<span style='font-family: wingdings; text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>" : "<span style='text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>",
            constructor: JSProf.LNF(27544, function () {
                // summary:
                //		Create the widget.
                // params: Object|null
                //		Hash of initialization parameters for widget, including scalar values (like title, duration etc.)
                //		and functions, typically callbacks like onClick.
                //		The hash can contain any of the widget's properties, excluding read-only properties.
                // srcNodeRef: DOMNode|String?
                //		If a srcNodeRef (DOM node) is specified:
                //
                //		- use srcNodeRef.innerHTML as my value
                //		- replace srcNodeRef with my generated DOM tree
                JSProf.LPD(27543, this, 'editorParams').editorParams = JSProf.LRSP(27543, JSProf.LNE(27542, {}, 11));
            }, 12),
            postMixInProperties: JSProf.LNF(27575, function () {
                JSProf.LMC(27545, this, 'inherited').inherited(arguments);
                // save pointer to original source node, since Widget nulls-out srcNodeRef
                JSProf.LPD(27547, this, 'displayNode').displayNode = JSProf.LRSP(27547, JSProf.LGD(27546, this, 'srcNodeRef').srcNodeRef);
                // connect handlers to the display node
                JSProf.LMC(27558, this, 'own').own(JSProf.LFC(27551, on, false)(JSProf.LGD(27548, this, 'displayNode').displayNode, JSProf.LRE(27549, a11yclick), JSProf.LMC(27550, lang, 'hitch').hitch(this, "_onClick")), JSProf.LFC(27554, on, false)(JSProf.LGD(27552, this, 'displayNode').displayNode, "mouseover, focus", JSProf.LMC(27553, lang, 'hitch').hitch(this, "_onMouseOver")), JSProf.LFC(27557, on, false)(JSProf.LGD(27555, this, 'displayNode').displayNode, "mouseout, blur", JSProf.LMC(27556, lang, 'hitch').hitch(this, "_onMouseOut")));
                JSProf.LMC(27559, this.displayNode, 'setAttribute').setAttribute("role", "button");
                if (!JSProf.LMC(27560, this.displayNode, 'getAttribute').getAttribute("tabIndex")) {
                    JSProf.LMC(27561, this.displayNode, 'setAttribute').setAttribute("tabIndex", 0);
                }
                if (!JSProf.LGD(27562, this, 'value').value && !("value" in JSProf.LGD(27563, this, 'params').params)) {
                    // "" is a good value if specified directly so check params){
                    JSProf.LPD(27569, this, 'value').value = JSProf.LRSP(27569, JSProf.LMC(27568, lang, 'trim').trim(JSProf.LGD(27564, this, 'renderAsHtml').renderAsHtml ? JSProf.LGD(27565, this.displayNode, 'innerHTML').innerHTML : JSProf.LGD(27566, this.displayNode, 'innerText').innerText || JSProf.LGD(27567, this.displayNode, 'textContent').textContent || ""));
                }
                if (!JSProf.LGD(27570, this, 'value').value) {
                    JSProf.LPD(27572, this.displayNode, 'innerHTML').innerHTML = JSProf.LRSP(27572, JSProf.LGD(27571, this, 'noValueIndicator').noValueIndicator);
                }
                JSProf.LMC(27574, domClass, 'add').add(JSProf.LGD(27573, this, 'displayNode').displayNode, 'dijitInlineEditBoxDisplayMode');
            }, 12),
            setDisabled: JSProf.LNF(27579, function (disabled) {
                // summary:
                //		Deprecated.   Use set('disabled', ...) instead.
                // tags:
                //		deprecated
                JSProf.LMC(27576, kernel, 'deprecated').deprecated("dijit.InlineEditBox.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
                JSProf.LMC(27578, this, 'set').set('disabled', JSProf.LRE(27577, disabled));
            }, 12),
            _setDisabledAttr: JSProf.LNF(27590, function (disabled) {
                // summary:
                //		Hook to make set("disabled", ...) work.
                //		Set disabled state of widget.
                JSProf.LMC(27581, this.domNode, 'setAttribute').setAttribute("aria-disabled", JSProf.LRE(27580, disabled) ? "true" : "false");
                if (JSProf.LRE(27582, disabled)) {
                    JSProf.LMC(27583, this.displayNode, 'removeAttribute').removeAttribute("tabIndex");
                } else {
                    JSProf.LMC(27584, this.displayNode, 'setAttribute').setAttribute("tabIndex", 0);
                }
                JSProf.LMC(27587, domClass, 'toggle').toggle(JSProf.LGD(27585, this, 'displayNode').displayNode, "dijitInlineEditBoxDisplayModeDisabled", JSProf.LRE(27586, disabled));
                JSProf.LMC(27589, this, '_set')._set("disabled", JSProf.LRE(27588, disabled));
            }, 12),
            _onMouseOver: JSProf.LNF(27594, function () {
                // summary:
                //		Handler for onmouseover and onfocus event.
                // tags:
                //		private
                if (!JSProf.LGD(27591, this, 'disabled').disabled) {
                    JSProf.LMC(27593, domClass, 'add').add(JSProf.LGD(27592, this, 'displayNode').displayNode, "dijitInlineEditBoxDisplayModeHover");
                }
            }, 12),
            _onMouseOut: JSProf.LNF(27597, function () {
                // summary:
                //		Handler for onmouseout and onblur event.
                // tags:
                //		private
                JSProf.LMC(27596, domClass, 'remove').remove(JSProf.LGD(27595, this, 'displayNode').displayNode, "dijitInlineEditBoxDisplayModeHover");
            }, 12),
            _onClick: JSProf.LNF(27604, function (e) {
                // summary:
                //		Handler for onclick event.
                // tags:
                //		private
                if (JSProf.LGD(27598, this, 'disabled').disabled) {
                    return;
                }
                if (JSProf.LRE(27599, e)) {
                    JSProf.LMC(27600, e, 'stopPropagation').stopPropagation();
                    JSProf.LMC(27601, e, 'preventDefault').preventDefault();
                }
                JSProf.LMC(27602, this, '_onMouseOut')._onMouseOut();
                // Since FF gets upset if you move a node while in an event handler for that node...
                JSProf.LMC(27603, this, 'defer').defer("edit");
            }, 12),
            edit: JSProf.LNF(27659, function () {
                // summary:
                //		Display the editor widget in place of the original (read only) markup.
                // tags:
                //		private
                if (JSProf.LGD(27605, this, 'disabled').disabled || JSProf.LGD(27606, this, 'editing').editing) {
                    return;
                }
                JSProf.LMC(27607, this, '_set')._set('editing', true);
                // save some display node values that can be restored later
                JSProf.LPD(27610, this, '_savedTabIndex')._savedTabIndex = JSProf.LRSP(27610, JSProf.LMC(27609, domAttr, 'get').get(JSProf.LGD(27608, this, 'displayNode').displayNode, "tabIndex") || "0");
                if (!JSProf.LGD(27611, this, 'wrapperWidget').wrapperWidget) {
                    // Placeholder for edit widget
                    // Put place holder (and eventually editWidget) before the display node so that it's positioned correctly
                    // when Calendar dropdown appears, which happens automatically on focus.
                    var placeholder = JSProf.LMC(27613, domConstruct, 'create').create("span", null, JSProf.LGD(27612, this, 'domNode').domNode, "before");
                    // Create the editor wrapper (the thing that holds the editor widget and the save/cancel buttons)
                    var Ewc = typeof JSProf.LGD(27614, this, 'editorWrapper').editorWrapper == "string" ? JSProf.LMC(27616, lang, 'getObject').getObject(JSProf.LGD(27615, this, 'editorWrapper').editorWrapper) : JSProf.LGD(27617, this, 'editorWrapper').editorWrapper;
                    JSProf.LPD(27626, this, 'wrapperWidget').wrapperWidget = JSProf.LRSP(27626, JSProf.LNE(27625, new (JSProf.LFC(27624, Ewc, true))(JSProf.LNE(27622, {
                        value: this.value,
                        buttonSave: this.buttonSave,
                        buttonCancel: this.buttonCancel,
                        dir: this.dir,
                        lang: this.lang,
                        tabIndex: this._savedTabIndex,
                        editor: this.editor,
                        inlineEditBox: this,
                        sourceStyle: JSProf.LMC(27619, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LGD(27618, this, 'displayNode').displayNode),
                        save: JSProf.LMC(27620, lang, 'hitch').hitch(this, "save"),
                        cancel: JSProf.LMC(27621, lang, 'hitch').hitch(this, "cancel"),
                        textDir: this.textDir
                    }, 11), JSProf.LRE(27623, placeholder)), 'Ewc'));
                    if (!JSProf.LGD(27627, this.wrapperWidget, '_started')._started) {
                        JSProf.LMC(27628, this.wrapperWidget, 'startup').startup();
                    }
                    if (!JSProf.LGD(27629, this, '_started')._started) {
                        JSProf.LMC(27630, this, 'startup').startup();
                    }
                }
                var ww = JSProf.LGD(27631, this, 'wrapperWidget').wrapperWidget;
                // to avoid screen jitter, we first create the editor with position: absolute, visibility: hidden,
                // and then when it's finished rendering, we switch from display mode to editor
                // position: absolute releases screen space allocated to the display node
                // opacity:0 is the same as visibility: hidden but is still focusable
                // visibility: hidden removes focus outline
                JSProf.LMC(27633, domClass, 'add').add(JSProf.LGD(27632, this, 'displayNode').displayNode, "dijitOffScreen");
                JSProf.LMC(27635, domClass, 'remove').remove(JSProf.LGD(27634, ww, 'domNode').domNode, "dijitOffScreen");
                JSProf.LMC(27638, domStyle, 'set').set(JSProf.LGD(27636, ww, 'domNode').domNode, JSProf.LNE(27637, { visibility: "visible" }, 11));
                JSProf.LMC(27640, domAttr, 'set').set(JSProf.LGD(27639, this, 'displayNode').displayNode, "tabIndex", "-1");
                // needed by WebKit for TAB from editor to skip displayNode
                // After edit widget has finished initializing (in particular need to wait for dijit.Editor),
                // or immediately if there is no onLoadDeferred Deferred,
                // replace the display widget with edit widget, leaving them both displayed for a brief time so that
                // focus can be shifted without incident.
                var ew = JSProf.LGD(27641, ww, 'editWidget').editWidget;
                var self = this;
                JSProf.LFC(27658, when, false)(JSProf.LGD(27642, ew, 'onLoadDeferred').onLoadDeferred, JSProf.LMC(27657, lang, 'hitch').hitch(JSProf.LRE(27643, ww), JSProf.LNF(27656, function () {
                    // set value again in case the edit widget's value is just now valid
                    JSProf.LMC(27647, ew, 'set').set("displayedValue" in JSProf.LRE(27644, ew) || "_setDisplayedValueAttr" in JSProf.LRE(27645, ew) ? "displayedValue" : "value", JSProf.LGD(27646, self, 'value').value);
                    JSProf.LMC(27655, this, 'defer').defer(JSProf.LNF(27654, function () {
                        // defer needed so that the change of focus doesn't happen on mousedown which also sets focus
                        // the saveButton should start out disabled in most cases but the above set could have fired onChange
                        if (JSProf.LGD(27648, ww, 'saveButton').saveButton) {
                            JSProf.LMC(27650, ww.saveButton, 'set').set("disabled", "intermediateChanges" in JSProf.LRE(27649, ew));
                        }
                        JSProf.LMC(27651, this, 'focus').focus();
                        // both nodes are showing, so we can switch focus safely
                        JSProf.LPD(27653, this, '_resetValue')._resetValue = JSProf.LRSP(27653, JSProf.LMC(27652, this, 'getValue').getValue());
                    }, 12));
                }, 12)));
            }, 12),
            _onBlur: JSProf.LNF(27662, function () {
                // summary:
                //		Called when focus moves outside the InlineEditBox.
                //		Performs garbage collection.
                // tags:
                //		private
                JSProf.LMC(27660, this, 'inherited').inherited(arguments);
                if (!JSProf.LGD(27661, this, 'editing').editing) {
                }
            }, 12),
            destroy: JSProf.LNF(27667, function () {
                if (JSProf.LGD(27663, this, 'wrapperWidget').wrapperWidget && !JSProf.LGD(27664, this.wrapperWidget, '_destroyed')._destroyed) {
                    JSProf.LMC(27665, this.wrapperWidget, 'destroy').destroy();
                    delete this.wrapperWidget;
                }
                JSProf.LMC(27666, this, 'inherited').inherited(arguments);
            }, 12),
            _showText: JSProf.LNF(27682, function (focus) {
                // summary:
                //		Revert to display mode, and optionally focus on display node
                // tags:
                //		private
                var ww = JSProf.LGD(27668, this, 'wrapperWidget').wrapperWidget;
                JSProf.LMC(27671, domStyle, 'set').set(JSProf.LGD(27669, ww, 'domNode').domNode, JSProf.LNE(27670, { visibility: "hidden" }, 11));
                // hide the editor from mouse/keyboard events
                JSProf.LMC(27673, domClass, 'add').add(JSProf.LGD(27672, ww, 'domNode').domNode, "dijitOffScreen");
                JSProf.LMC(27675, domClass, 'remove').remove(JSProf.LGD(27674, this, 'displayNode').displayNode, "dijitOffScreen");
                JSProf.LMC(27678, domAttr, 'set').set(JSProf.LGD(27676, this, 'displayNode').displayNode, "tabIndex", JSProf.LGD(27677, this, '_savedTabIndex')._savedTabIndex);
                if (JSProf.LRE(27679, focus)) {
                    JSProf.LMC(27681, fm, 'focus').focus(JSProf.LGD(27680, this, 'displayNode').displayNode);
                }
            }, 12),
            save: JSProf.LNF(27692, function (focus) {
                // summary:
                //		Save the contents of the editor and revert to display mode.
                // focus: Boolean
                //		Focus on the display mode text
                // tags:
                //		private
                if (JSProf.LGD(27683, this, 'disabled').disabled || !JSProf.LGD(27684, this, 'editing').editing) {
                    return;
                }
                JSProf.LMC(27685, this, '_set')._set('editing', false);
                var ww = JSProf.LGD(27686, this, 'wrapperWidget').wrapperWidget;
                var value = JSProf.LMC(27687, ww, 'getValue').getValue();
                JSProf.LMC(27689, this, 'set').set('value', JSProf.LRE(27688, value));
                // display changed, formatted value
                JSProf.LMC(27691, this, '_showText')._showText(JSProf.LRE(27690, focus));    // set focus as needed
            }, 12),
            setValue: JSProf.LNF(27696, function (val) {
                // summary:
                //		Deprecated.   Use set('value', ...) instead.
                // tags:
                //		deprecated
                JSProf.LMC(27693, kernel, 'deprecated').deprecated("dijit.InlineEditBox.setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
                return JSProf.LMC(27695, this, 'set').set("value", JSProf.LRE(27694, val));
            }, 12),
            _setValueAttr: JSProf.LNF(27717, function (val) {
                // summary:
                //		Hook to make set("value", ...) work.
                //		Inserts specified HTML value into this node, or an "input needed" character if node is blank.
                val = JSProf.LWR(27699, val, JSProf.LMC(27698, lang, 'trim').trim(JSProf.LRE(27697, val)));
                var renderVal = JSProf.LGD(27700, this, 'renderAsHtml').renderAsHtml ? JSProf.LRE(27701, val) : JSProf.LMC(27706, JSProf.LMC(27705, JSProf.LMC(27704, JSProf.LMC(27703, JSProf.LMC(27702, val, 'replace').replace(/&/gm, "&amp;"), 'replace').replace(/</gm, "&lt;"), 'replace').replace(/>/gm, "&gt;"), 'replace').replace(/"/gm, "&quot;"), 'replace').replace(/\n/g, "<br>");
                JSProf.LPD(27709, this.displayNode, 'innerHTML').innerHTML = JSProf.LRSP(27709, JSProf.LRE(27707, renderVal) || JSProf.LGD(27708, this, 'noValueIndicator').noValueIndicator);
                JSProf.LMC(27711, this, '_set')._set("value", JSProf.LRE(27710, val));
                if (JSProf.LGD(27712, this, '_started')._started) {
                    // tell the world that we have changed
                    JSProf.LMC(27716, this, 'defer').defer(JSProf.LNF(27715, function () {
                        JSProf.LMC(27714, this, 'onChange').onChange(JSProf.LRE(27713, val));
                    }, 12));    // defer prevents browser freeze for long-running event handlers
                }
            }, 12),
            getValue: JSProf.LNF(27720, function () {
                // summary:
                //		Deprecated.   Use get('value') instead.
                // tags:
                //		deprecated
                JSProf.LMC(27718, kernel, 'deprecated').deprecated("dijit.InlineEditBox.getValue() is deprecated.  Use get('value') instead.", "", "2.0");
                return JSProf.LMC(27719, this, 'get').get("value");
            }, 12),
            cancel: JSProf.LNF(27727, function (focus) {
                // summary:
                //		Revert to display mode, discarding any changes made in the editor
                // tags:
                //		private
                if (JSProf.LGD(27721, this, 'disabled').disabled || !JSProf.LGD(27722, this, 'editing').editing) {
                    return;
                }
                JSProf.LMC(27723, this, '_set')._set('editing', false);
                // tell the world that we have no changes
                JSProf.LMC(27724, this, 'defer').defer("onCancel");
                // defer prevents browser freeze for long-running event handlers
                JSProf.LMC(27726, this, '_showText')._showText(JSProf.LRE(27725, focus));
            }, 12)
        }, 11));
    if (JSProf.LFC(27730, has, false)("dojo-bidi")) {
        InlineEditBox = JSProf.LWR(27738, InlineEditBox, JSProf.LFC(27737, declare, false)("dijit.InlineEditBox", JSProf.LRE(27731, InlineEditBox), JSProf.LNE(27736, {
            _setValueAttr: JSProf.LNF(27735, function () {
                JSProf.LMC(27732, this, 'inherited').inherited(arguments);
                JSProf.LMC(27734, this, 'applyTextDir').applyTextDir(JSProf.LGD(27733, this, 'displayNode').displayNode);
            }, 12)
        }, 11)));
    }
    JSProf.LPD(27740, InlineEditBox, '_InlineEditor')._InlineEditor = JSProf.LRSP(27740, JSProf.LRE(27739, InlineEditor));
    // for monkey patching
    return JSProf.LRE(27741, InlineEditBox);
}, 12));