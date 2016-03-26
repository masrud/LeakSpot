JSProf.LFC(32185, define, false)(JSProf.LNE(32118, [
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
], 10), JSProf.LNF(32184, function (require, declare, domClass, has, kernel, lang, ready, _FormWidget, _ButtonMixin, template) {
    // module:
    //		dijit/form/Button
    // Back compat w/1.6, remove for 2.0
    if (JSProf.LFC(32119, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(32124, ready, false)(0, JSProf.LNF(32123, function () {
            var requires = JSProf.LNE(32120, [
                    "dijit/form/DropDownButton",
                    "dijit/form/ComboButton",
                    "dijit/form/ToggleButton"
                ], 10);
            JSProf.LFC(32122, require, false)(JSProf.LRE(32121, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    var Button = JSProf.LFC(32163, declare, false)("dijit.form.Button" + (JSProf.LFC(32125, has, false)("dojo-bidi") ? "_NoBidi" : ""), JSProf.LNE(32128, [
            JSProf.LRE(32126, _FormWidget),
            JSProf.LRE(32127, _ButtonMixin)
        ], 10), JSProf.LNE(32162, {
            showLabel: true,
            iconClass: "dijitNoIcon",
            _setIconClassAttr: JSProf.LNE(32129, {
                node: "iconNode",
                type: "class"
            }, 11),
            baseClass: "dijitButton",
            templateString: template,
            _setValueAttr: "valueNode",
            _setNameAttr: JSProf.LNF(32133, function (name) {
                // avoid breaking existing subclasses where valueNode undefined.  Perhaps in 2.0 require it to be defined?
                if (JSProf.LGD(32130, this, 'valueNode').valueNode) {
                    JSProf.LMC(32132, this.valueNode, 'setAttribute').setAttribute("name", JSProf.LRE(32131, name));
                }
            }, 12),
            _fillContent: JSProf.LNF(32142, function (source) {
                // Overrides _Templated._fillContent().
                // If button label is specified as srcNodeRef.innerHTML rather than
                // this.params.label, handle it here.
                // TODO: remove the method in 2.0, parser will do it all for me
                if (JSProf.LRE(32134, source) && (!JSProf.LGD(32135, this, 'params').params || !("label" in JSProf.LGD(32136, this, 'params').params))) {
                    var sourceLabel = JSProf.LMC(32138, lang, 'trim').trim(JSProf.LGD(32137, source, 'innerHTML').innerHTML);
                    if (JSProf.LRE(32139, sourceLabel)) {
                        JSProf.LPD(32141, this, 'label').label = JSProf.LRSP(32141, JSProf.LRE(32140, sourceLabel));    // _applyAttributes will be called after buildRendering completes to update the DOM
                    }
                }
            }, 12),
            _setShowLabelAttr: JSProf.LNF(32149, function (val) {
                if (JSProf.LGD(32143, this, 'containerNode').containerNode) {
                    JSProf.LMC(32146, domClass, 'toggle').toggle(JSProf.LGD(32144, this, 'containerNode').containerNode, "dijitDisplayNone", !JSProf.LRE(32145, val));
                }
                JSProf.LMC(32148, this, '_set')._set("showLabel", JSProf.LRE(32147, val));
            }, 12),
            setLabel: JSProf.LNF(32153, function (content) {
                // summary:
                //		Deprecated.  Use set('label', ...) instead.
                JSProf.LMC(32150, kernel, 'deprecated').deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
                JSProf.LMC(32152, this, 'set').set("label", JSProf.LRE(32151, content));
            }, 12),
            _setLabelAttr: JSProf.LNF(32161, function (content) {
                // summary:
                //		Hook for set('label', ...) to work.
                // description:
                //		Set the label (text) of the button; takes an HTML string.
                //		If the label is hidden (showLabel=false) then and no title has
                //		been specified, then label is also set as title attribute of icon.
                JSProf.LMC(32154, this, 'inherited').inherited(arguments);
                if (!JSProf.LGD(32155, this, 'showLabel').showLabel && !("title" in JSProf.LGD(32156, this, 'params').params)) {
                    JSProf.LPD(32160, this.titleNode, 'title').title = JSProf.LRSP(32160, JSProf.LMC(32159, lang, 'trim').trim(JSProf.LGD(32157, this.containerNode, 'innerText').innerText || JSProf.LGD(32158, this.containerNode, 'textContent').textContent || ''));
                }
            }, 12)
        }, 11));
    if (JSProf.LFC(32164, has, false)("dojo-bidi")) {
        Button = JSProf.LWR(32182, Button, JSProf.LFC(32181, declare, false)("dijit.form.Button", JSProf.LRE(32165, Button), JSProf.LNE(32180, {
            _setLabelAttr: JSProf.LNF(32171, function (content) {
                JSProf.LMC(32166, this, 'inherited').inherited(arguments);
                if (JSProf.LGD(32167, this.titleNode, 'title').title) {
                    JSProf.LMC(32170, this, 'applyTextDir').applyTextDir(JSProf.LGD(32168, this, 'titleNode').titleNode, JSProf.LGD(32169, this.titleNode, 'title').title);
                }
            }, 12),
            _setTextDirAttr: JSProf.LNF(32179, function (textDir) {
                if (JSProf.LGD(32172, this, '_created')._created && JSProf.LGD(32173, this, 'textDir').textDir != JSProf.LRE(32174, textDir)) {
                    JSProf.LMC(32176, this, '_set')._set("textDir", JSProf.LRE(32175, textDir));
                    JSProf.LMC(32178, this, '_setLabelAttr')._setLabelAttr(JSProf.LGD(32177, this, 'label').label);    // call applyTextDir on both focusNode and titleNode
                }
            }, 12)
        }, 11)));
    }
    return JSProf.LRE(32183, Button);
}, 12));