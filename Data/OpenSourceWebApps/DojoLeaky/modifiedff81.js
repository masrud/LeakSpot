JSProf.LFC(27782, define, false)(JSProf.LNE(27428, [
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
], 10), JSProf.LNF(27781, function (require, array, aspect, declare, domAttr, domClass, domConstruct, domStyle, i18n, kernel, keys, lang, on, has, when, a11yclick, fm, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _Container, Button, _TextBoxMixin, TextBox, template) {
    // module:
    //		dijit/InlineEditBox
    var InlineEditor = JSProf.LFC(27574, declare, false)("dijit._InlineEditor", JSProf.LNE(27432, [
            JSProf.LRE(27429, _Widget),
            JSProf.LRE(27430, _TemplatedMixin),
            JSProf.LRE(27431, _WidgetsInTemplateMixin)
        ], 10), JSProf.LNE(27573, {
            templateString: template,
            contextRequire: require,
            postMixInProperties: JSProf.LNF(27443, function () {
                JSProf.LMC(27433, this, 'inherited').inherited(arguments);
                JSProf.LPD(27436, this, 'messages').messages = JSProf.LRSP(27436, JSProf.LMC(27435, i18n, 'getLocalization').getLocalization("dijit", "common", JSProf.LGD(27434, this, 'lang').lang));
                JSProf.LMC(27442, array, 'forEach').forEach(JSProf.LNE(27437, [
                    "buttonSave",
                    "buttonCancel"
                ], 10), JSProf.LNF(27441, function (prop) {
                    if (!JSProf.LGE(27438, this, 'prop')[prop]) {
                        JSProf.LPE(27440, this, 'prop')[prop] = JSProf.LRPE(27440, JSProf.LGE(27439, this.messages, 'prop')[prop]);
                    }
                }, 12), this);
            }, 12),
            buildRendering: JSProf.LNF(27493, function () {
                JSProf.LMC(27444, this, 'inherited').inherited(arguments);
                // Create edit widget in place in the template
                // TODO: remove getObject() for 2.0
                var Cls = typeof JSProf.LGD(27445, this, 'editor').editor == "string" ? JSProf.LMC(27447, lang, 'getObject').getObject(JSProf.LGD(27446, this, 'editor').editor) || JSProf.LFC(27449, require, false)(JSProf.LGD(27448, this, 'editor').editor) : JSProf.LGD(27450, this, 'editor').editor;
                // Copy the style from the source
                // Don't copy ALL properties though, just the necessary/applicable ones.
                // wrapperStyle/destStyle code is to workaround IE bug where getComputedStyle().fontSize
                // is a relative value like 200%, rather than an absolute value like 24px, and
                // the 200% can refer *either* to a setting on the node or it's ancestor (see #11175)
                var srcStyle = JSProf.LGD(27451, this, 'sourceStyle').sourceStyle, editStyle = "line-height:" + JSProf.LGD(27452, srcStyle, 'lineHeight').lineHeight + ";", destStyle = JSProf.LMC(27454, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LGD(27453, this, 'domNode').domNode);
                JSProf.LMC(27466, array, 'forEach').forEach(JSProf.LNE(27455, [
                    "Weight",
                    "Family",
                    "Size",
                    "Style"
                ], 10), JSProf.LNF(27465, function (prop) {
                    var textStyle = JSProf.LGE(27457, srcStyle, JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002 = "font" + JSProf.LRE(27456, prop))[JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002], wrapperStyle = JSProf.LGE(27459, destStyle, JSProf.TMPS.t823bec3caa92c028689635d2e1fb8d20da0f6269 = "font" + JSProf.LRE(27458, prop))[JSProf.TMPS.t823bec3caa92c028689635d2e1fb8d20da0f6269];
                    if (JSProf.LRE(27460, wrapperStyle) != JSProf.LRE(27461, textStyle)) {
                        editStyle += "font-" + JSProf.LRE(27462, prop) + ":" + JSProf.LGE(27464, srcStyle, JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002 = "font" + JSProf.LRE(27463, prop))[JSProf.TMPS.ta1a7bf1579ac075adb158151ccff95ede6ba5002] + ";";
                    }
                }, 12), this);
                JSProf.LMC(27471, array, 'forEach').forEach(JSProf.LNE(27467, [
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
                ], 10), JSProf.LNF(27470, function (prop) {
                    JSProf.LPE(27469, this.domNode.style, 'prop')[prop] = JSProf.LRPE(27469, JSProf.LGE(27468, srcStyle, 'prop')[prop]);
                }, 12), this);
                var width = JSProf.LGD(27472, this.inlineEditBox, 'width').width;
                if (JSProf.LRE(27473, width) == "100%") {
                    // block mode
                    editStyle += "width:100%;";
                    JSProf.LPD(27474, this.domNode.style, 'display').display = JSProf.LRSP(27474, "block");
                } else {
                    // inline-block mode
                    editStyle += "width:" + (JSProf.LRE(27475, width) + (JSProf.LFC(27477, Number, false)(JSProf.LRE(27476, width)) == JSProf.LRE(27478, width) ? "px" : "")) + ";";
                }
                var editorParams = JSProf.LMC(27481, lang, 'delegate').delegate(JSProf.LGD(27479, this.inlineEditBox, 'editorParams').editorParams, JSProf.LNE(27480, {
                        style: editStyle,
                        dir: this.dir,
                        lang: this.lang,
                        textDir: this.textDir
                    }, 11));
                // set the value in onLoadDeferred instead so the widget has time to finish initializing
                //editorParams[("displayedValue" in Cls.prototype || "_setDisplayedValueAttr" in Cls.prototype) ? "displayedValue" : "value"] = this.value;
                JSProf.LPD(27486, this, 'editWidget').editWidget = JSProf.LRSP(27486, JSProf.LNE(27485, new (JSProf.LFC(27484, Cls, true))(JSProf.LRE(27482, editorParams), JSProf.LGD(27483, this, 'editorPlaceholder').editorPlaceholder), 'Cls'));
                if (JSProf.LGD(27487, this.inlineEditBox, 'autoSave').autoSave) {
                    // Remove the save/cancel buttons since saving is done by simply tabbing away or
                    // selecting a value from the drop down list
                    JSProf.LMC(27488, this.saveButton, 'destroy').destroy();
                    JSProf.LMC(27489, this.cancelButton, 'destroy').destroy();
                    JSProf.LPD(27490, this, 'saveButton').saveButton = JSProf.LRSP(27490, this.cancelButton = null);
                    JSProf.LMC(27492, domConstruct, 'destroy').destroy(JSProf.LGD(27491, this, 'buttonContainer').buttonContainer);
                }
            }, 12),
            postCreate: JSProf.LNF(27511, function () {
                JSProf.LMC(27494, this, 'inherited').inherited(arguments);
                var ew = JSProf.LGD(27495, this, 'editWidget').editWidget;
                if (JSProf.LGD(27496, this.inlineEditBox, 'autoSave').autoSave) {
                    JSProf.LMC(27503, this, 'own').own(JSProf.LMC(27499, aspect, 'after').after(JSProf.LRE(27497, ew), "onChange", JSProf.LMC(27498, lang, 'hitch').hitch(this, "_onChange"), true), JSProf.LFC(27502, on, false)(JSProf.LRE(27500, ew), "keydown", JSProf.LMC(27501, lang, 'hitch').hitch(this, "_onKeyDown")));
                } else {
                    // If possible, enable/disable save button based on whether the user has changed the value
                    if ("intermediateChanges" in JSProf.LRE(27504, ew)) {
                        JSProf.LMC(27505, ew, 'set').set("intermediateChanges", true);
                        JSProf.LMC(27509, this, 'own').own(JSProf.LMC(27508, aspect, 'after').after(JSProf.LRE(27506, ew), "onChange", JSProf.LMC(27507, lang, 'hitch').hitch(this, "_onIntermediateChange"), true));
                        JSProf.LMC(27510, this.saveButton, 'set').set("disabled", true);
                    }
                }
            }, 12),
            startup: JSProf.LNF(27514, function () {
                JSProf.LMC(27512, this.editWidget, 'startup').startup();
                JSProf.LMC(27513, this, 'inherited').inherited(arguments);
            }, 12),
            _onIntermediateChange: JSProf.LNF(27519, function () {
                // summary:
                //		Called for editor widgets that support the intermediateChanges=true flag as a way
                //		to detect when to enable/disabled the save button
                JSProf.LMC(27518, this.saveButton, 'set').set("disabled", JSProf.LMC(27515, this, 'getValue').getValue() == JSProf.LGD(27516, this, '_resetValue')._resetValue || !JSProf.LMC(27517, this, 'enableSave').enableSave());
            }, 12),
            destroy: JSProf.LNF(27522, function () {
                JSProf.LMC(27520, this.editWidget, 'destroy').destroy(true);
                // let the parent wrapper widget clean up the DOM
                JSProf.LMC(27521, this, 'inherited').inherited(arguments);
            }, 12),
            getValue: JSProf.LNF(27528, function () {
                // summary:
                //		Return the [display] value of the edit widget
                var ew = JSProf.LGD(27523, this, 'editWidget').editWidget;
                return JSProf.LFC(27527, String, false)(JSProf.LMC(27526, ew, 'get').get("displayedValue" in JSProf.LRE(27524, ew) || "_getDisplayedValueAttr" in JSProf.LRE(27525, ew) ? "displayedValue" : "value"));
            }, 12),
            _onKeyDown: JSProf.LNF(27544, function (e) {
                // summary:
                //		Handler for keydown in the edit box in autoSave mode.
                // description:
                //		For autoSave widgets, if Esc/Enter, call cancel/save.
                // tags:
                //		private
                if (JSProf.LGD(27529, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(27530, this.inlineEditBox, 'editing').editing) {
                    if (JSProf.LGD(27531, e, 'altKey').altKey || JSProf.LGD(27532, e, 'ctrlKey').ctrlKey) {
                        return;
                    }
                    // If Enter/Esc pressed, treat as save/cancel.
                    if (JSProf.LGD(27533, e, 'keyCode').keyCode == JSProf.LGD(27534, keys, 'ESCAPE').ESCAPE) {
                        JSProf.LMC(27535, e, 'stopPropagation').stopPropagation();
                        JSProf.LMC(27536, e, 'preventDefault').preventDefault();
                        JSProf.LMC(27537, this, 'cancel').cancel(true);    // sets editing=false which short-circuits _onBlur processing
                    } else if (JSProf.LGD(27538, e, 'keyCode').keyCode == JSProf.LGD(27539, keys, 'ENTER').ENTER && JSProf.LGD(27540, e.target, 'tagName').tagName == "INPUT") {
                        JSProf.LMC(27541, e, 'stopPropagation').stopPropagation();
                        JSProf.LMC(27542, e, 'preventDefault').preventDefault();
                        JSProf.LMC(27543, this, '_onChange')._onChange();    // fire _onBlur and then save
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
            _onBlur: JSProf.LNF(27553, function () {
                // summary:
                //		Called when focus moves outside the editor
                // tags:
                //		private
                JSProf.LMC(27545, this, 'inherited').inherited(arguments);
                if (JSProf.LGD(27546, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(27547, this.inlineEditBox, 'editing').editing) {
                    if (JSProf.LMC(27548, this, 'getValue').getValue() == JSProf.LGD(27549, this, '_resetValue')._resetValue) {
                        JSProf.LMC(27550, this, 'cancel').cancel(false);
                    } else if (JSProf.LMC(27551, this, 'enableSave').enableSave()) {
                        JSProf.LMC(27552, this, 'save').save(false);
                    }
                }
            }, 12),
            _onChange: JSProf.LNF(27559, function () {
                // summary:
                //		Called when the underlying widget fires an onChange event,
                //		such as when the user selects a value from the drop down list of a ComboBox,
                //		which means that the user has finished entering the value and we should save.
                // tags:
                //		private
                if (JSProf.LGD(27554, this.inlineEditBox, 'autoSave').autoSave && JSProf.LGD(27555, this.inlineEditBox, 'editing').editing && JSProf.LMC(27556, this, 'enableSave').enableSave()) {
                    JSProf.LMC(27558, fm, 'focus').focus(JSProf.LGD(27557, this.inlineEditBox, 'displayNode').displayNode);    // fires _onBlur which will save the formatted value
                }
            }, 12),
            enableSave: JSProf.LNF(27562, function () {
                // summary:
                //		User overridable function returning a Boolean to indicate
                //		if the Save button should be enabled or not - usually due to invalid conditions
                // tags:
                //		extension
                return JSProf.LGD(27560, this.editWidget, 'isValid').isValid ? JSProf.LMC(27561, this.editWidget, 'isValid').isValid() : true;
            }, 12),
            focus: JSProf.LNF(27572, function () {
                // summary:
                //		Focus the edit widget.
                // tags:
                //		protected
                JSProf.LMC(27563, this.editWidget, 'focus').focus();
                if (JSProf.LGD(27564, this.editWidget, 'focusNode').focusNode) {
                    // IE can take 30ms to report the focus event, but focus manager needs to know before a 0ms timeout.
                    JSProf.LMC(27566, fm, '_onFocusNode')._onFocusNode(JSProf.LGD(27565, this.editWidget, 'focusNode').focusNode);
                    if (JSProf.LGD(27567, this.editWidget.focusNode, 'tagName').tagName == "INPUT") {
                        JSProf.LMC(27571, this, 'defer').defer(JSProf.LNF(27570, function () {
                            JSProf.LMC(27569, _TextBoxMixin, 'selectInputText').selectInputText(JSProf.LGD(27568, this.editWidget, 'focusNode').focusNode);
                        }, 12));
                    }
                }
            }, 12)
        }, 11));
    var InlineEditBox = JSProf.LFC(27768, declare, false)("dijit.InlineEditBox" + (JSProf.LFC(27575, has, false)("dojo-bidi") ? "_NoBidi" : ""), JSProf.LRE(27576, _Widget), JSProf.LNE(27767, {
            editing: false,
            autoSave: true,
            buttonSave: "",
            buttonCancel: "",
            renderAsHtml: false,
            editor: TextBox,
            editorWrapper: InlineEditor,
            editorParams: JSProf.LNE(27577, {}, 11),
            disabled: false,
            onChange: JSProf.LNF(27578, function () {
            }, 12),
            onCancel: JSProf.LNF(27579, function () {
            }, 12),
            width: "100%",
            value: "",
            noValueIndicator: JSProf.LFC(27580, has, false)("ie") <= 6 ? "<span style='font-family: wingdings; text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>" : "<span style='text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>",
            constructor: JSProf.LNF(27583, function () {
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
                JSProf.LPD(27582, this, 'editorParams').editorParams = JSProf.LRSP(27582, JSProf.LNE(27581, {}, 11));
            }, 12),
            postMixInProperties: JSProf.LNF(27614, function () {
                JSProf.LMC(27584, this, 'inherited').inherited(arguments);
                // save pointer to original source node, since Widget nulls-out srcNodeRef
                JSProf.LPD(27586, this, 'displayNode').displayNode = JSProf.LRSP(27586, JSProf.LGD(27585, this, 'srcNodeRef').srcNodeRef);
                // connect handlers to the display node
                JSProf.LMC(27597, this, 'own').own(JSProf.LFC(27590, on, false)(JSProf.LGD(27587, this, 'displayNode').displayNode, JSProf.LRE(27588, a11yclick), JSProf.LMC(27589, lang, 'hitch').hitch(this, "_onClick")), JSProf.LFC(27593, on, false)(JSProf.LGD(27591, this, 'displayNode').displayNode, "mouseover, focus", JSProf.LMC(27592, lang, 'hitch').hitch(this, "_onMouseOver")), JSProf.LFC(27596, on, false)(JSProf.LGD(27594, this, 'displayNode').displayNode, "mouseout, blur", JSProf.LMC(27595, lang, 'hitch').hitch(this, "_onMouseOut")));
                JSProf.LMC(27598, this.displayNode, 'setAttribute').setAttribute("role", "button");
                if (!JSProf.LMC(27599, this.displayNode, 'getAttribute').getAttribute("tabIndex")) {
                    JSProf.LMC(27600, this.displayNode, 'setAttribute').setAttribute("tabIndex", 0);
                }
                if (!JSProf.LGD(27601, this, 'value').value && !("value" in JSProf.LGD(27602, this, 'params').params)) {
                    // "" is a good value if specified directly so check params){
                    JSProf.LPD(27608, this, 'value').value = JSProf.LRSP(27608, JSProf.LMC(27607, lang, 'trim').trim(JSProf.LGD(27603, this, 'renderAsHtml').renderAsHtml ? JSProf.LGD(27604, this.displayNode, 'innerHTML').innerHTML : JSProf.LGD(27605, this.displayNode, 'innerText').innerText || JSProf.LGD(27606, this.displayNode, 'textContent').textContent || ""));
                }
                if (!JSProf.LGD(27609, this, 'value').value) {
                    JSProf.LPD(27611, this.displayNode, 'innerHTML').innerHTML = JSProf.LRSP(27611, JSProf.LGD(27610, this, 'noValueIndicator').noValueIndicator);
                }
                JSProf.LMC(27613, domClass, 'add').add(JSProf.LGD(27612, this, 'displayNode').displayNode, 'dijitInlineEditBoxDisplayMode');
            }, 12),
            setDisabled: JSProf.LNF(27618, function (disabled) {
                // summary:
                //		Deprecated.   Use set('disabled', ...) instead.
                // tags:
                //		deprecated
                JSProf.LMC(27615, kernel, 'deprecated').deprecated("dijit.InlineEditBox.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
                JSProf.LMC(27617, this, 'set').set('disabled', JSProf.LRE(27616, disabled));
            }, 12),
            _setDisabledAttr: JSProf.LNF(27629, function (disabled) {
                // summary:
                //		Hook to make set("disabled", ...) work.
                //		Set disabled state of widget.
                JSProf.LMC(27620, this.domNode, 'setAttribute').setAttribute("aria-disabled", JSProf.LRE(27619, disabled) ? "true" : "false");
                if (JSProf.LRE(27621, disabled)) {
                    JSProf.LMC(27622, this.displayNode, 'removeAttribute').removeAttribute("tabIndex");
                } else {
                    JSProf.LMC(27623, this.displayNode, 'setAttribute').setAttribute("tabIndex", 0);
                }
                JSProf.LMC(27626, domClass, 'toggle').toggle(JSProf.LGD(27624, this, 'displayNode').displayNode, "dijitInlineEditBoxDisplayModeDisabled", JSProf.LRE(27625, disabled));
                JSProf.LMC(27628, this, '_set')._set("disabled", JSProf.LRE(27627, disabled));
            }, 12),
            _onMouseOver: JSProf.LNF(27633, function () {
                // summary:
                //		Handler for onmouseover and onfocus event.
                // tags:
                //		private
                if (!JSProf.LGD(27630, this, 'disabled').disabled) {
                    JSProf.LMC(27632, domClass, 'add').add(JSProf.LGD(27631, this, 'displayNode').displayNode, "dijitInlineEditBoxDisplayModeHover");
                }
            }, 12),
            _onMouseOut: JSProf.LNF(27636, function () {
                // summary:
                //		Handler for onmouseout and onblur event.
                // tags:
                //		private
                JSProf.LMC(27635, domClass, 'remove').remove(JSProf.LGD(27634, this, 'displayNode').displayNode, "dijitInlineEditBoxDisplayModeHover");
            }, 12),
            _onClick: JSProf.LNF(27643, function (e) {
                // summary:
                //		Handler for onclick event.
                // tags:
                //		private
                if (JSProf.LGD(27637, this, 'disabled').disabled) {
                    return;
                }
                if (JSProf.LRE(27638, e)) {
                    JSProf.LMC(27639, e, 'stopPropagation').stopPropagation();
                    JSProf.LMC(27640, e, 'preventDefault').preventDefault();
                }
                JSProf.LMC(27641, this, '_onMouseOut')._onMouseOut();
                // Since FF gets upset if you move a node while in an event handler for that node...
                JSProf.LMC(27642, this, 'defer').defer("edit");
            }, 12),
            edit: JSProf.LNF(27698, function () {
                // summary:
                //		Display the editor widget in place of the original (read only) markup.
                // tags:
                //		private
                if (JSProf.LGD(27644, this, 'disabled').disabled || JSProf.LGD(27645, this, 'editing').editing) {
                    return;
                }
                JSProf.LMC(27646, this, '_set')._set('editing', true);
                // save some display node values that can be restored later
                JSProf.LPD(27649, this, '_savedTabIndex')._savedTabIndex = JSProf.LRSP(27649, JSProf.LMC(27648, domAttr, 'get').get(JSProf.LGD(27647, this, 'displayNode').displayNode, "tabIndex") || "0");
                if (!JSProf.LGD(27650, this, 'wrapperWidget').wrapperWidget) {
                    // Placeholder for edit widget
                    // Put place holder (and eventually editWidget) before the display node so that it's positioned correctly
                    // when Calendar dropdown appears, which happens automatically on focus.
                    var placeholder = JSProf.LMC(27652, domConstruct, 'create').create("span", null, JSProf.LGD(27651, this, 'domNode').domNode, "before");
                    // Create the editor wrapper (the thing that holds the editor widget and the save/cancel buttons)
                    var Ewc = typeof JSProf.LGD(27653, this, 'editorWrapper').editorWrapper == "string" ? JSProf.LMC(27655, lang, 'getObject').getObject(JSProf.LGD(27654, this, 'editorWrapper').editorWrapper) : JSProf.LGD(27656, this, 'editorWrapper').editorWrapper;
                    JSProf.LPD(27665, this, 'wrapperWidget').wrapperWidget = JSProf.LRSP(27665, JSProf.LNE(27664, new (JSProf.LFC(27663, Ewc, true))(JSProf.LNE(27661, {
                        value: this.value,
                        buttonSave: this.buttonSave,
                        buttonCancel: this.buttonCancel,
                        dir: this.dir,
                        lang: this.lang,
                        tabIndex: this._savedTabIndex,
                        editor: this.editor,
                        inlineEditBox: this,
                        sourceStyle: JSProf.LMC(27658, domStyle, 'getComputedStyle').getComputedStyle(JSProf.LGD(27657, this, 'displayNode').displayNode),
                        save: JSProf.LMC(27659, lang, 'hitch').hitch(this, "save"),
                        cancel: JSProf.LMC(27660, lang, 'hitch').hitch(this, "cancel"),
                        textDir: this.textDir
                    }, 11), JSProf.LRE(27662, placeholder)), 'Ewc'));
                    if (!JSProf.LGD(27666, this.wrapperWidget, '_started')._started) {
                        JSProf.LMC(27667, this.wrapperWidget, 'startup').startup();
                    }
                    if (!JSProf.LGD(27668, this, '_started')._started) {
                        JSProf.LMC(27669, this, 'startup').startup();
                    }
                }
                var ww = JSProf.LGD(27670, this, 'wrapperWidget').wrapperWidget;
                // to avoid screen jitter, we first create the editor with position: absolute, visibility: hidden,
                // and then when it's finished rendering, we switch from display mode to editor
                // position: absolute releases screen space allocated to the display node
                // opacity:0 is the same as visibility: hidden but is still focusable
                // visibility: hidden removes focus outline
                JSProf.LMC(27672, domClass, 'add').add(JSProf.LGD(27671, this, 'displayNode').displayNode, "dijitOffScreen");
                JSProf.LMC(27674, domClass, 'remove').remove(JSProf.LGD(27673, ww, 'domNode').domNode, "dijitOffScreen");
                JSProf.LMC(27677, domStyle, 'set').set(JSProf.LGD(27675, ww, 'domNode').domNode, JSProf.LNE(27676, { visibility: "visible" }, 11));
                JSProf.LMC(27679, domAttr, 'set').set(JSProf.LGD(27678, this, 'displayNode').displayNode, "tabIndex", "-1");
                // needed by WebKit for TAB from editor to skip displayNode
                // After edit widget has finished initializing (in particular need to wait for dijit.Editor),
                // or immediately if there is no onLoadDeferred Deferred,
                // replace the display widget with edit widget, leaving them both displayed for a brief time so that
                // focus can be shifted without incident.
                var ew = JSProf.LGD(27680, ww, 'editWidget').editWidget;
                var self = this;
                JSProf.LFC(27697, when, false)(JSProf.LGD(27681, ew, 'onLoadDeferred').onLoadDeferred, JSProf.LMC(27696, lang, 'hitch').hitch(JSProf.LRE(27682, ww), JSProf.LNF(27695, function () {
                    // set value again in case the edit widget's value is just now valid
                    JSProf.LMC(27686, ew, 'set').set("displayedValue" in JSProf.LRE(27683, ew) || "_setDisplayedValueAttr" in JSProf.LRE(27684, ew) ? "displayedValue" : "value", JSProf.LGD(27685, self, 'value').value);
                    JSProf.LMC(27694, this, 'defer').defer(JSProf.LNF(27693, function () {
                        // defer needed so that the change of focus doesn't happen on mousedown which also sets focus
                        // the saveButton should start out disabled in most cases but the above set could have fired onChange
                        if (JSProf.LGD(27687, ww, 'saveButton').saveButton) {
                            JSProf.LMC(27689, ww.saveButton, 'set').set("disabled", "intermediateChanges" in JSProf.LRE(27688, ew));
                        }
                        JSProf.LMC(27690, this, 'focus').focus();
                        // both nodes are showing, so we can switch focus safely
                        JSProf.LPD(27692, this, '_resetValue')._resetValue = JSProf.LRSP(27692, JSProf.LMC(27691, this, 'getValue').getValue());
                    }, 12));
                }, 12)));
            }, 12),
            _onBlur: JSProf.LNF(27701, function () {
                // summary:
                //		Called when focus moves outside the InlineEditBox.
                //		Performs garbage collection.
                // tags:
                //		private
                JSProf.LMC(27699, this, 'inherited').inherited(arguments);
                if (!JSProf.LGD(27700, this, 'editing').editing) {
                }
            }, 12),
            destroy: JSProf.LNF(27706, function () {
                if (JSProf.LGD(27702, this, 'wrapperWidget').wrapperWidget && !JSProf.LGD(27703, this.wrapperWidget, '_destroyed')._destroyed) {
                    JSProf.LMC(27704, this.wrapperWidget, 'destroy').destroy();
                    delete this.wrapperWidget;
                }
                JSProf.LMC(27705, this, 'inherited').inherited(arguments);
            }, 12),
            _showText: JSProf.LNF(27721, function (focus) {
                // summary:
                //		Revert to display mode, and optionally focus on display node
                // tags:
                //		private
                var ww = JSProf.LGD(27707, this, 'wrapperWidget').wrapperWidget;
                JSProf.LMC(27710, domStyle, 'set').set(JSProf.LGD(27708, ww, 'domNode').domNode, JSProf.LNE(27709, { visibility: "hidden" }, 11));
                // hide the editor from mouse/keyboard events
                JSProf.LMC(27712, domClass, 'add').add(JSProf.LGD(27711, ww, 'domNode').domNode, "dijitOffScreen");
                JSProf.LMC(27714, domClass, 'remove').remove(JSProf.LGD(27713, this, 'displayNode').displayNode, "dijitOffScreen");
                JSProf.LMC(27717, domAttr, 'set').set(JSProf.LGD(27715, this, 'displayNode').displayNode, "tabIndex", JSProf.LGD(27716, this, '_savedTabIndex')._savedTabIndex);
                if (JSProf.LRE(27718, focus)) {
                    JSProf.LMC(27720, fm, 'focus').focus(JSProf.LGD(27719, this, 'displayNode').displayNode);
                }
            }, 12),
            save: JSProf.LNF(27731, function (focus) {
                // summary:
                //		Save the contents of the editor and revert to display mode.
                // focus: Boolean
                //		Focus on the display mode text
                // tags:
                //		private
                if (JSProf.LGD(27722, this, 'disabled').disabled || !JSProf.LGD(27723, this, 'editing').editing) {
                    return;
                }
                JSProf.LMC(27724, this, '_set')._set('editing', false);
                var ww = JSProf.LGD(27725, this, 'wrapperWidget').wrapperWidget;
                var value = JSProf.LMC(27726, ww, 'getValue').getValue();
                JSProf.LMC(27728, this, 'set').set('value', JSProf.LRE(27727, value));
                // display changed, formatted value
                JSProf.LMC(27730, this, '_showText')._showText(JSProf.LRE(27729, focus));    // set focus as needed
            }, 12),
            setValue: JSProf.LNF(27735, function (val) {
                // summary:
                //		Deprecated.   Use set('value', ...) instead.
                // tags:
                //		deprecated
                JSProf.LMC(27732, kernel, 'deprecated').deprecated("dijit.InlineEditBox.setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
                return JSProf.LMC(27734, this, 'set').set("value", JSProf.LRE(27733, val));
            }, 12),
            _setValueAttr: JSProf.LNF(27756, function (val) {
                // summary:
                //		Hook to make set("value", ...) work.
                //		Inserts specified HTML value into this node, or an "input needed" character if node is blank.
                val = JSProf.LWR(27738, val, JSProf.LMC(27737, lang, 'trim').trim(JSProf.LRE(27736, val)));
                var renderVal = JSProf.LGD(27739, this, 'renderAsHtml').renderAsHtml ? JSProf.LRE(27740, val) : JSProf.LMC(27745, JSProf.LMC(27744, JSProf.LMC(27743, JSProf.LMC(27742, JSProf.LMC(27741, val, 'replace').replace(/&/gm, "&amp;"), 'replace').replace(/</gm, "&lt;"), 'replace').replace(/>/gm, "&gt;"), 'replace').replace(/"/gm, "&quot;"), 'replace').replace(/\n/g, "<br>");
                JSProf.LPD(27748, this.displayNode, 'innerHTML').innerHTML = JSProf.LRSP(27748, JSProf.LRE(27746, renderVal) || JSProf.LGD(27747, this, 'noValueIndicator').noValueIndicator);
                JSProf.LMC(27750, this, '_set')._set("value", JSProf.LRE(27749, val));
                if (JSProf.LGD(27751, this, '_started')._started) {
                    // tell the world that we have changed
                    JSProf.LMC(27755, this, 'defer').defer(JSProf.LNF(27754, function () {
                        JSProf.LMC(27753, this, 'onChange').onChange(JSProf.LRE(27752, val));
                    }, 12));    // defer prevents browser freeze for long-running event handlers
                }
            }, 12),
            getValue: JSProf.LNF(27759, function () {
                // summary:
                //		Deprecated.   Use get('value') instead.
                // tags:
                //		deprecated
                JSProf.LMC(27757, kernel, 'deprecated').deprecated("dijit.InlineEditBox.getValue() is deprecated.  Use get('value') instead.", "", "2.0");
                return JSProf.LMC(27758, this, 'get').get("value");
            }, 12),
            cancel: JSProf.LNF(27766, function (focus) {
                // summary:
                //		Revert to display mode, discarding any changes made in the editor
                // tags:
                //		private
                if (JSProf.LGD(27760, this, 'disabled').disabled || !JSProf.LGD(27761, this, 'editing').editing) {
                    return;
                }
                JSProf.LMC(27762, this, '_set')._set('editing', false);
                // tell the world that we have no changes
                JSProf.LMC(27763, this, 'defer').defer("onCancel");
                // defer prevents browser freeze for long-running event handlers
                JSProf.LMC(27765, this, '_showText')._showText(JSProf.LRE(27764, focus));
            }, 12)
        }, 11));
    if (JSProf.LFC(27769, has, false)("dojo-bidi")) {
        InlineEditBox = JSProf.LWR(27777, InlineEditBox, JSProf.LFC(27776, declare, false)("dijit.InlineEditBox", JSProf.LRE(27770, InlineEditBox), JSProf.LNE(27775, {
            _setValueAttr: JSProf.LNF(27774, function () {
                JSProf.LMC(27771, this, 'inherited').inherited(arguments);
                JSProf.LMC(27773, this, 'applyTextDir').applyTextDir(JSProf.LGD(27772, this, 'displayNode').displayNode);
            }, 12)
        }, 11)));
    }
    JSProf.LPD(27779, InlineEditBox, '_InlineEditor')._InlineEditor = JSProf.LRSP(27779, JSProf.LRE(27778, InlineEditor));
    // for monkey patching
    return JSProf.LRE(27780, InlineEditBox);
}, 12));