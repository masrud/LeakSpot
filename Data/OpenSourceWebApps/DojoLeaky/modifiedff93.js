JSProf.LFC(32228, define, false)(JSProf.LNE(32161, [
    "require",
    "dojo/_base/declare",
    "dojo/dom-class",
    "dojo/has",
    "dojo/_base/kernel",
    "dojo/_base/lang",
    "dojo/ready",
    "./_FormWidget",
    "./_ButtonMixin",
    "dojo/text!./templates/Button.html",
    "../a11yclick"
], 10), JSProf.LNF(32227, function (require, declare, domClass, has, kernel, lang, ready, _FormWidget, _ButtonMixin, template) {
    // module:
    //		dijit/form/Button
    // Back compat w/1.6, remove for 2.0
    if (JSProf.LFC(32162, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(32167, ready, false)(0, JSProf.LNF(32166, function () {
            var requires = JSProf.LNE(32163, [
                    "dijit/form/DropDownButton",
                    "dijit/form/ComboButton",
                    "dijit/form/ToggleButton"
                ], 10);
            JSProf.LFC(32165, require, false)(JSProf.LRE(32164, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    var Button = JSProf.LFC(32206, declare, false)("dijit.form.Button" + (JSProf.LFC(32168, has, false)("dojo-bidi") ? "_NoBidi" : ""), JSProf.LNE(32171, [
            JSProf.LRE(32169, _FormWidget),
            JSProf.LRE(32170, _ButtonMixin)
        ], 10), JSProf.LNE(32205, {
            showLabel: true,
            iconClass: "dijitNoIcon",
            _setIconClassAttr: JSProf.LNE(32172, {
                node: "iconNode",
                type: "class"
            }, 11),
            baseClass: "dijitButton",
            templateString: template,
            _setValueAttr: "valueNode",
            _setNameAttr: JSProf.LNF(32176, function (name) {
                // avoid breaking existing subclasses where valueNode undefined.  Perhaps in 2.0 require it to be defined?
                if (JSProf.LGD(32173, this, 'valueNode').valueNode) {
                    JSProf.LMC(32175, this.valueNode, 'setAttribute').setAttribute("name", JSProf.LRE(32174, name));
                }
            }, 12),
            _fillContent: JSProf.LNF(32185, function (source) {
                // Overrides _Templated._fillContent().
                // If button label is specified as srcNodeRef.innerHTML rather than
                // this.params.label, handle it here.
                // TODO: remove the method in 2.0, parser will do it all for me
                if (JSProf.LRE(32177, source) && (!JSProf.LGD(32178, this, 'params').params || !("label" in JSProf.LGD(32179, this, 'params').params))) {
                    var sourceLabel = JSProf.LMC(32181, lang, 'trim').trim(JSProf.LGD(32180, source, 'innerHTML').innerHTML);
                    if (JSProf.LRE(32182, sourceLabel)) {
                        JSProf.LPD(32184, this, 'label').label = JSProf.LRSP(32184, JSProf.LRE(32183, sourceLabel));    // _applyAttributes will be called after buildRendering completes to update the DOM
                    }
                }
            }, 12),
            _setShowLabelAttr: JSProf.LNF(32192, function (val) {
                if (JSProf.LGD(32186, this, 'containerNode').containerNode) {
                    JSProf.LMC(32189, domClass, 'toggle').toggle(JSProf.LGD(32187, this, 'containerNode').containerNode, "dijitDisplayNone", !JSProf.LRE(32188, val));
                }
                JSProf.LMC(32191, this, '_set')._set("showLabel", JSProf.LRE(32190, val));
            }, 12),
            setLabel: JSProf.LNF(32196, function (content) {
                // summary:
                //		Deprecated.  Use set('label', ...) instead.
                JSProf.LMC(32193, kernel, 'deprecated').deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
                JSProf.LMC(32195, this, 'set').set("label", JSProf.LRE(32194, content));
            }, 12),
            _setLabelAttr: JSProf.LNF(32204, function (content) {
                // summary:
                //		Hook for set('label', ...) to work.
                // description:
                //		Set the label (text) of the button; takes an HTML string.
                //		If the label is hidden (showLabel=false) then and no title has
                //		been specified, then label is also set as title attribute of icon.
                JSProf.LMC(32197, this, 'inherited').inherited(arguments);
                if (!JSProf.LGD(32198, this, 'showLabel').showLabel && !("title" in JSProf.LGD(32199, this, 'params').params)) {
                    JSProf.LPD(32203, this.titleNode, 'title').title = JSProf.LRSP(32203, JSProf.LMC(32202, lang, 'trim').trim(JSProf.LGD(32200, this.containerNode, 'innerText').innerText || JSProf.LGD(32201, this.containerNode, 'textContent').textContent || ''));
                }
            }, 12)
        }, 11));
    if (JSProf.LFC(32207, has, false)("dojo-bidi")) {
        Button = JSProf.LWR(32225, Button, JSProf.LFC(32224, declare, false)("dijit.form.Button", JSProf.LRE(32208, Button), JSProf.LNE(32223, {
            _setLabelAttr: JSProf.LNF(32214, function (content) {
                JSProf.LMC(32209, this, 'inherited').inherited(arguments);
                if (JSProf.LGD(32210, this.titleNode, 'title').title) {
                    JSProf.LMC(32213, this, 'applyTextDir').applyTextDir(JSProf.LGD(32211, this, 'titleNode').titleNode, JSProf.LGD(32212, this.titleNode, 'title').title);
                }
            }, 12),
            _setTextDirAttr: JSProf.LNF(32222, function (textDir) {
                if (JSProf.LGD(32215, this, '_created')._created && JSProf.LGD(32216, this, 'textDir').textDir != JSProf.LRE(32217, textDir)) {
                    JSProf.LMC(32219, this, '_set')._set("textDir", JSProf.LRE(32218, textDir));
                    JSProf.LMC(32221, this, '_setLabelAttr')._setLabelAttr(JSProf.LGD(32220, this, 'label').label);    // call applyTextDir on both focusNode and titleNode
                }
            }, 12)
        }, 11)));
    }
    return JSProf.LRE(32226, Button);
}, 12));