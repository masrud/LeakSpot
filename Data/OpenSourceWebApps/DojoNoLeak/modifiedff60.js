JSProf.LFC(21642, define, false)(JSProf.LNE(21129, [
    "require",
    "dojo/_base/array",
    "dojo/aspect",
    "dojo/_base/config",
    "dojo/_base/connect",
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-geometry",
    "dojo/dom-style",
    "dojo/has",
    "dojo/_base/kernel",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/ready",
    "dojo/Stateful",
    "dojo/topic",
    "dojo/_base/window",
    "./Destroyable",
    "dojo/has!dojo-bidi?./_BidiMixin",
    "./registry"
], 10), JSProf.LNF(21641, function (require, array, aspect, config, connect, declare, dom, domAttr, domClass, domConstruct, domGeometry, domStyle, has, kernel, lang, on, ready, Stateful, topic, win, Destroyable, _BidiMixin, registry) {
    JSProf.LFD(21638, getAttrs);
    JSProf.LFD(21639, nonEmptyAttrToDom);
    JSProf.LFD(21640, isEqual);
    // module:
    //		dijit/_WidgetBase
    // Flag to make dijit load modules the app didn't explicitly request, for backwards compatibility
    JSProf.LMC(21131, has, 'add').add("dijit-legacy-requires", !JSProf.LGD(21130, kernel, 'isAsync').isAsync);
    // Flag to enable support for textdir attribute
    JSProf.LMC(21132, has, 'add').add("dojo-bidi", false);
    // For back-compat, remove in 2.0.
    if (JSProf.LFC(21133, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(21138, ready, false)(0, JSProf.LNF(21137, function () {
            var requires = JSProf.LNE(21134, ["dijit/_base/manager"], 10);
            JSProf.LFC(21136, require, false)(JSProf.LRE(21135, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    // Nested hash listing attributes for each tag, all strings in lowercase.
    // ex: {"div": {"style": true, "tabindex" true}, "form": { ...
    var tagAttrs = JSProf.LNE(21139, {}, 11);
    function getAttrs(obj) {
        var ret = JSProf.LNE(21140, {}, 11);
        for (var attr in JSProf.LRE(21141, obj)) {
            JSProf.LPE(21142, ret, JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca = attr.toLowerCase())[JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca] = JSProf.LRPE(21142, true);
        }
        return JSProf.LRE(21143, ret);
    }
    function nonEmptyAttrToDom(attr) {
        // summary:
        //		Returns a setter function that copies the attribute to this.domNode,
        //		or removes the attribute from this.domNode, depending on whether the
        //		value is defined or not.
        return JSProf.LNF(21152, function (val) {
            JSProf.LMC(21148, domAttr, JSProf.TMPS.tfb2ef068deb66ed45c3703446f605355b3f55fd6 = JSProf.LRE(21144, val) ? "set" : "remove", 1)[JSProf.TMPS.tfb2ef068deb66ed45c3703446f605355b3f55fd6](JSProf.LGD(21145, this, 'domNode').domNode, JSProf.LRE(21146, attr), JSProf.LRE(21147, val));
            JSProf.LMC(21151, this, '_set')._set(JSProf.LRE(21149, attr), JSProf.LRE(21150, val));
        }, 12);
    }
    function isEqual(a, b) {
        //	summary:
        //		Function that determines whether two values are identical,
        //		taking into account that NaN is not normally equal to itself
        //		in JS.
        return JSProf.LRE(21153, a) === JSProf.LRE(21154, b) || JSProf.LRE(21155, a) !== JSProf.LRE(21156, a) && JSProf.LRE(21157, b) !== JSProf.LRE(21158, b);
    }
    var _WidgetBase = JSProf.LFC(21633, declare, false)("dijit._WidgetBase", JSProf.LNE(21161, [
            JSProf.LRE(21159, Stateful),
            JSProf.LRE(21160, Destroyable)
        ], 10), JSProf.LNE(21632, {
            id: "",
            _setIdAttr: "domNode",
            lang: "",
            _setLangAttr: JSProf.LFC(21162, nonEmptyAttrToDom, false)("lang"),
            dir: "",
            _setDirAttr: JSProf.LFC(21163, nonEmptyAttrToDom, false)("dir"),
            "class": "",
            _setClassAttr: JSProf.LNE(21164, {
                node: "domNode",
                type: "class"
            }, 11),
            _setTypeAttr: null,
            style: "",
            title: "",
            tooltip: "",
            baseClass: "",
            srcNodeRef: null,
            domNode: null,
            containerNode: null,
            ownerDocument: null,
            _setOwnerDocumentAttr: JSProf.LNF(21167, function (val) {
                // this setter is merely to avoid automatically trying to set this.domNode.ownerDocument
                JSProf.LMC(21166, this, '_set')._set("ownerDocument", JSProf.LRE(21165, val));
            }, 12),
            attributeMap: JSProf.LNE(21168, {}, 11),
            _blankGif: config.blankGif || JSProf.LMC(21169, require, 'toUrl').toUrl("dojo/resources/blank.gif"),
            _introspect: JSProf.LNF(21195, function () {
                // summary:
                //		Collect metadata about this widget (only once per class, not once per instance):
                //
                //			- list of attributes with custom setters, storing in this.constructor._setterAttrs
                //			- generate this.constructor._onMap, mapping names like "mousedown" to functions like onMouseDown
                var ctor = JSProf.LGD(21170, this, 'constructor').constructor;
                if (!JSProf.LGD(21171, ctor, '_setterAttrs')._setterAttrs) {
                    var proto = JSProf.LGD(21172, ctor, 'prototype').prototype, attrs = JSProf.LPD(21174, ctor, '_setterAttrs')._setterAttrs = JSProf.LRSP(21174, JSProf.LNE(21173, [], 10)),
                        // attributes with custom setters
                        onMap = JSProf.LPD(21176, ctor, '_onMap')._onMap = JSProf.LRSP(21176, JSProf.LNE(21175, {}, 11));
                    // Items in this.attributeMap are like custom setters.  For back-compat, remove for 2.0.
                    for (var name in JSProf.LGD(21177, proto, 'attributeMap').attributeMap) {
                        JSProf.LMC(21179, attrs, 'push').push(JSProf.LRE(21178, name));
                    }
                    // Loop over widget properties, collecting properties with custom setters and filling in ctor._onMap.
                    for (name in JSProf.LRE(21180, proto)) {
                        if (JSProf.LMC(21182, /^on/, 'test').test(JSProf.LRE(21181, name))) {
                            JSProf.LPE(21184, onMap, JSProf.TMPS.t0f2021db1c8ebb8c4d7b8c499077f85fea16d7c0 = name.substring(2).toLowerCase())[JSProf.TMPS.t0f2021db1c8ebb8c4d7b8c499077f85fea16d7c0] = JSProf.LRPE(21184, JSProf.LRE(21183, name));
                        }
                        if (JSProf.LMC(21186, /^_set[A-Z](.*)Attr$/, 'test').test(JSProf.LRE(21185, name))) {
                            name = JSProf.LWR(21189, name, name.charAt(4).toLowerCase() + JSProf.LMC(21188, name, 'substr').substr(5, JSProf.LGD(21187, name, 'length').length - 9));
                            if (!JSProf.LGD(21190, proto, 'attributeMap').attributeMap || !(JSProf.LRE(21191, name) in JSProf.LGD(21192, proto, 'attributeMap').attributeMap)) {
                                JSProf.LMC(21194, attrs, 'push').push(JSProf.LRE(21193, name));
                            }
                        }
                    }    // Note: this isn't picking up info on properties like aria-label and role, that don't have custom setters
                         // but that set() maps to attributes on this.domNode or this.focusNode
                }
            }, 12),
            postscript: JSProf.LNF(21199, function (params, srcNodeRef) {
                // summary:
                //		Kicks off widget instantiation.  See create() for details.
                // tags:
                //		private
                // Note that we skip calling this.inherited(), i.e. dojo/Stateful::postscript(), because 1.x widgets don't
                // expect their custom setters to get called until after buildRendering().  Consider changing for 2.0.
                JSProf.LMC(21198, this, 'create').create(JSProf.LRE(21196, params), JSProf.LRE(21197, srcNodeRef));
            }, 12),
            create: JSProf.LNF(21249, function (params, srcNodeRef) {
                // summary:
                //		Kick off the life-cycle of a widget
                // description:
                //		Create calls a number of widget methods (postMixInProperties, buildRendering, postCreate,
                //		etc.), some of which of you'll want to override. See http://dojotoolkit.org/reference-guide/dijit/_WidgetBase.html
                //		for a discussion of the widget creation lifecycle.
                //
                //		Of course, adventurous developers could override create entirely, but this should
                //		only be done as a last resort.
                // params: Object|null
                //		Hash of initialization parameters for widget, including scalar values (like title, duration etc.)
                //		and functions, typically callbacks like onClick.
                //		The hash can contain any of the widget's properties, excluding read-only properties.
                // srcNodeRef: DOMNode|String?
                //		If a srcNodeRef (DOM node) is specified:
                //
                //		- use srcNodeRef.innerHTML as my contents
                //		- if this is a behavioral widget then apply behavior to that srcNodeRef
                //		- otherwise, replace srcNodeRef with my generated DOM tree
                // tags:
                //		private
                // First time widget is instantiated, scan prototype to figure out info about custom setters etc.
                JSProf.LMC(21200, this, '_introspect')._introspect();
                // store pointer to original DOM tree
                JSProf.LPD(21203, this, 'srcNodeRef').srcNodeRef = JSProf.LRSP(21203, JSProf.LMC(21202, dom, 'byId').byId(JSProf.LRE(21201, srcNodeRef)));
                // No longer used, remove for 2.0.
                JSProf.LPD(21205, this, '_connects')._connects = JSProf.LRSP(21205, JSProf.LNE(21204, [], 10));
                JSProf.LPD(21207, this, '_supportingWidgets')._supportingWidgets = JSProf.LRSP(21207, JSProf.LNE(21206, [], 10));
                // this is here for back-compat, remove in 2.0 (but check NodeList-instantiate.html test)
                if (JSProf.LGD(21208, this, 'srcNodeRef').srcNodeRef && typeof JSProf.LGD(21209, this.srcNodeRef, 'id').id == "string") {
                    JSProf.LPD(21211, this, 'id').id = JSProf.LRSP(21211, JSProf.LGD(21210, this.srcNodeRef, 'id').id);
                }
                // mix in our passed parameters
                if (JSProf.LRE(21212, params)) {
                    JSProf.LPD(21214, this, 'params').params = JSProf.LRSP(21214, JSProf.LRE(21213, params));
                    JSProf.LMC(21216, lang, 'mixin').mixin(this, JSProf.LRE(21215, params));
                }
                JSProf.LMC(21217, this, 'postMixInProperties').postMixInProperties();
                // Generate an id for the widget if one wasn't specified, or it was specified as id: undefined.
                // Do this before buildRendering() because it might expect the id to be there.
                if (!JSProf.LGD(21218, this, 'id').id) {
                    JSProf.LPD(21221, this, 'id').id = JSProf.LRSP(21221, JSProf.LMC(21220, registry, 'getUniqueId').getUniqueId(JSProf.LMC(21219, this.declaredClass, 'replace').replace(/\./g, "_")));
                    if (JSProf.LGD(21222, this, 'params').params) {
                        // if params contains {id: undefined}, prevent _applyAttributes() from processing it
                        delete this.params.id;
                    }
                }
                // The document and <body> node this widget is associated with
                JSProf.LPD(21227, this, 'ownerDocument').ownerDocument = JSProf.LRSP(21227, JSProf.LGD(21223, this, 'ownerDocument').ownerDocument || (JSProf.LGD(21224, this, 'srcNodeRef').srcNodeRef ? JSProf.LGD(21225, this.srcNodeRef, 'ownerDocument').ownerDocument : JSProf.LRU(21226, typeof document === 'undefined' ? undefined : document)));
                JSProf.LPD(21230, this, 'ownerDocumentBody').ownerDocumentBody = JSProf.LRSP(21230, JSProf.LMC(21229, win, 'body').body(JSProf.LGD(21228, this, 'ownerDocument').ownerDocument));
                JSProf.LMC(21231, registry, 'add').add(this);
                JSProf.LMC(21232, this, 'buildRendering').buildRendering();
                var deleteSrcNodeRef;
                if (JSProf.LGD(21233, this, 'domNode').domNode) {
                    // Copy attributes listed in attributeMap into the [newly created] DOM for the widget.
                    // Also calls custom setters for all attributes with custom setters.
                    JSProf.LMC(21234, this, '_applyAttributes')._applyAttributes();
                    // If srcNodeRef was specified, then swap out original srcNode for this widget's DOM tree.
                    // For 2.0, move this after postCreate().  postCreate() shouldn't depend on the
                    // widget being attached to the DOM since it isn't when a widget is created programmatically like
                    // new MyWidget({}).	See #11635.
                    var source = JSProf.LGD(21235, this, 'srcNodeRef').srcNodeRef;
                    if (JSProf.LRE(21236, source) && JSProf.LGD(21237, source, 'parentNode').parentNode && JSProf.LGD(21238, this, 'domNode').domNode !== JSProf.LRE(21239, source)) {
                        JSProf.LMC(21242, source.parentNode, 'replaceChild').replaceChild(JSProf.LGD(21240, this, 'domNode').domNode, JSProf.LRE(21241, source));
                        deleteSrcNodeRef = JSProf.LWR(21243, deleteSrcNodeRef, true);
                    }
                    // Note: for 2.0 may want to rename widgetId to dojo._scopeName + "_widgetId",
                    // assuming that dojo._scopeName even exists in 2.0
                    JSProf.LMC(21245, this.domNode, 'setAttribute').setAttribute("widgetId", JSProf.LGD(21244, this, 'id').id);
                }
                JSProf.LMC(21246, this, 'postCreate').postCreate();
                // If srcNodeRef has been processed and removed from the DOM (e.g. TemplatedWidget) then delete it to allow GC.
                // I think for back-compatibility it isn't deleting srcNodeRef until after postCreate() has run.
                if (JSProf.LRE(21247, deleteSrcNodeRef)) {
                    delete this.srcNodeRef;
                }
                JSProf.LPD(21248, this, '_created')._created = JSProf.LRSP(21248, true);
            }, 12),
            _applyAttributes: JSProf.LNF(21271, function () {
                // summary:
                //		Step during widget creation to copy  widget attributes to the
                //		DOM according to attributeMap and _setXXXAttr objects, and also to call
                //		custom _setXXXAttr() methods.
                //
                //		Skips over blank/false attribute values, unless they were explicitly specified
                //		as parameters to the widget, since those are the default anyway,
                //		and setting tabIndex="" is different than not setting tabIndex at all.
                //
                //		For backwards-compatibility reasons attributeMap overrides _setXXXAttr when
                //		_setXXXAttr is a hash/string/array, but _setXXXAttr as a functions override attributeMap.
                // tags:
                //		private
                // Call this.set() for each property that was either specified as parameter to constructor,
                // or is in the list found above.	For correlated properties like value and displayedValue, the one
                // specified as a parameter should take precedence.
                // Particularly important for new DateTextBox({displayedValue: ...}) since DateTextBox's default value is
                // NaN and thus is not ignored like a default value of "".
                // Step 1: Save the current values of the widget properties that were specified as parameters to the constructor.
                // Generally this.foo == this.params.foo, except if postMixInProperties() changed the value of this.foo.
                var params = JSProf.LNE(21250, {}, 11);
                for (var key in JSProf.LGD(21251, this, 'params').params || JSProf.LNE(21252, {}, 11)) {
                    JSProf.LPE(21255, params, 'key')[key] = JSProf.LRPE(21255, JSProf.LMC(21254, this, '_get')._get(JSProf.LRE(21253, key)));
                }
                // Step 2: Call set() for each property with a non-falsy value that wasn't passed as a parameter to the constructor
                JSProf.LMC(21266, array, 'forEach').forEach(JSProf.LGD(21256, this.constructor, '_setterAttrs')._setterAttrs, JSProf.LNF(21265, function (key) {
                    if (!(JSProf.LRE(21257, key) in JSProf.LRE(21258, params))) {
                        var val = JSProf.LMC(21260, this, '_get')._get(JSProf.LRE(21259, key));
                        if (JSProf.LRE(21261, val)) {
                            JSProf.LMC(21264, this, 'set').set(JSProf.LRE(21262, key), JSProf.LRE(21263, val));
                        }
                    }
                }, 12), this);
                // Step 3: Call set() for each property that was specified as parameter to constructor.
                // Use params hash created above to ignore side effects from step #2 above.
                for (key in JSProf.LRE(21267, params)) {
                    JSProf.LMC(21270, this, 'set').set(JSProf.LRE(21268, key), JSProf.LGE(21269, params, 'key')[key]);
                }
            }, 12),
            postMixInProperties: JSProf.LNF(21272, function () {
            }, 12),
            buildRendering: JSProf.LNF(21287, function () {
                // summary:
                //		Construct the UI for this widget, setting this.domNode.
                //		Most widgets will mixin `dijit._TemplatedMixin`, which implements this method.
                // tags:
                //		protected
                if (!JSProf.LGD(21273, this, 'domNode').domNode) {
                    // Create root node if it wasn't created by _TemplatedMixin
                    JSProf.LPD(21276, this, 'domNode').domNode = JSProf.LRSP(21276, JSProf.LGD(21274, this, 'srcNodeRef').srcNodeRef || JSProf.LMC(21275, this.ownerDocument, 'createElement').createElement("div"));
                }
                // baseClass is a single class name or occasionally a space-separated list of names.
                // Add those classes to the DOMNode.  If RTL mode then also add with Rtl suffix.
                // TODO: make baseClass custom setter
                if (JSProf.LGD(21277, this, 'baseClass').baseClass) {
                    var classes = this.baseClass.split(" ");
                    if (!JSProf.LMC(21278, this, 'isLeftToRight').isLeftToRight()) {
                        classes = JSProf.LWR(21283, classes, classes.concat(JSProf.LMC(21282, array, 'map').map(JSProf.LRE(21279, classes), JSProf.LNF(21281, function (name) {
                            return JSProf.LRE(21280, name) + "Rtl";
                        }, 12))));
                    }
                    JSProf.LMC(21286, domClass, 'add').add(JSProf.LGD(21284, this, 'domNode').domNode, JSProf.LRE(21285, classes));
                }
            }, 12),
            postCreate: JSProf.LNF(21288, function () {
            }, 12),
            startup: JSProf.LNF(21300, function () {
                // summary:
                //		Processing after the DOM fragment is added to the document
                // description:
                //		Called after a widget and its children have been created and added to the page,
                //		and all related widgets have finished their create() cycle, up through postCreate().
                //
                //		Note that startup() may be called while the widget is still hidden, for example if the widget is
                //		inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
                //		For widgets that need to do layout, it's best to put that layout code inside resize(), and then
                //		extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
                if (JSProf.LGD(21289, this, '_started')._started) {
                    return;
                }
                JSProf.LPD(21290, this, '_started')._started = JSProf.LRSP(21290, true);
                JSProf.LMC(21299, array, 'forEach').forEach(JSProf.LMC(21291, this, 'getChildren').getChildren(), JSProf.LNF(21298, function (obj) {
                    if (!JSProf.LGD(21292, obj, '_started')._started && !JSProf.LGD(21293, obj, '_destroyed')._destroyed && JSProf.LMC(21295, lang, 'isFunction').isFunction(JSProf.LGD(21294, obj, 'startup').startup)) {
                        JSProf.LMC(21296, obj, 'startup').startup();
                        JSProf.LPD(21297, obj, '_started')._started = JSProf.LRSP(21297, true);
                    }
                }, 12));
            }, 12),
            destroyRecursive: JSProf.LNF(21306, function (preserveDom) {
                // summary:
                //		Destroy this widget and its descendants
                // description:
                //		This is the generic "destructor" function that all widget users
                //		should call to cleanly discard with a widget. Once a widget is
                //		destroyed, it is removed from the manager object.
                // preserveDom:
                //		If true, this method will leave the original DOM structure
                //		alone of descendant Widgets. Note: This will NOT work with
                //		dijit._TemplatedMixin widgets.
                JSProf.LPD(21301, this, '_beingDestroyed')._beingDestroyed = JSProf.LRSP(21301, true);
                JSProf.LMC(21303, this, 'destroyDescendants').destroyDescendants(JSProf.LRE(21302, preserveDom));
                JSProf.LMC(21305, this, 'destroy').destroy(JSProf.LRE(21304, preserveDom));
            }, 12),
            destroy: JSProf.LNF(21333, function (preserveDom) {
                JSProf.LFD(21332, destroy);
                // summary:
                //		Destroy this widget, but not its descendants.  Descendants means widgets inside of
                //		this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                //
                //		This method will also destroy internal widgets such as those created from a template,
                //		assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                //
                //		For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                //		depend on the current ability to destroy a widget without destroying its descendants.   Generally
                //		they should use destroyRecursive() for widgets with children.
                // preserveDom: Boolean
                //		If true, this method will leave the original DOM structure alone.
                //		Note: This will not yet work with _TemplatedMixin widgets
                JSProf.LPD(21307, this, '_beingDestroyed')._beingDestroyed = JSProf.LRSP(21307, true);
                JSProf.LMC(21308, this, 'uninitialize').uninitialize();
                function destroy(w) {
                    if (JSProf.LGD(21309, w, 'destroyRecursive').destroyRecursive) {
                        JSProf.LMC(21311, w, 'destroyRecursive').destroyRecursive(JSProf.LRE(21310, preserveDom));
                    } else if (JSProf.LGD(21312, w, 'destroy').destroy) {
                        JSProf.LMC(21314, w, 'destroy').destroy(JSProf.LRE(21313, preserveDom));
                    }
                }
                // Back-compat, remove for 2.0
                JSProf.LMC(21317, array, 'forEach').forEach(JSProf.LGD(21315, this, '_connects')._connects, JSProf.LMC(21316, lang, 'hitch').hitch(this, "disconnect"));
                JSProf.LMC(21320, array, 'forEach').forEach(JSProf.LGD(21318, this, '_supportingWidgets')._supportingWidgets, JSProf.LRE(21319, destroy));
                // Destroy supporting widgets, but not child widgets under this.containerNode (for 2.0, destroy child widgets
                // here too).   if() statement is to guard against exception if destroy() called multiple times (see #15815).
                if (JSProf.LGD(21321, this, 'domNode').domNode) {
                    JSProf.LMC(21326, array, 'forEach').forEach(JSProf.LMC(21324, registry, 'findWidgets').findWidgets(JSProf.LGD(21322, this, 'domNode').domNode, JSProf.LGD(21323, this, 'containerNode').containerNode), JSProf.LRE(21325, destroy));
                }
                JSProf.LMC(21328, this, 'destroyRendering').destroyRendering(JSProf.LRE(21327, preserveDom));
                JSProf.LMC(21330, registry, 'remove').remove(JSProf.LGD(21329, this, 'id').id);
                JSProf.LPD(21331, this, '_destroyed')._destroyed = JSProf.LRSP(21331, true);
            }, 12),
            destroyRendering: JSProf.LNF(21347, function (preserveDom) {
                // summary:
                //		Destroys the DOM nodes associated with this widget.
                // preserveDom:
                //		If true, this method will leave the original DOM structure alone
                //		during tear-down. Note: this will not work with _Templated
                //		widgets yet.
                // tags:
                //		protected
                if (JSProf.LGD(21334, this, 'bgIframe').bgIframe) {
                    JSProf.LMC(21336, this.bgIframe, 'destroy').destroy(JSProf.LRE(21335, preserveDom));
                    delete this.bgIframe;
                }
                if (JSProf.LGD(21337, this, 'domNode').domNode) {
                    if (JSProf.LRE(21338, preserveDom)) {
                        JSProf.LMC(21340, domAttr, 'remove').remove(JSProf.LGD(21339, this, 'domNode').domNode, "widgetId");
                    } else {
                        JSProf.LMC(21342, domConstruct, 'destroy').destroy(JSProf.LGD(21341, this, 'domNode').domNode);
                    }
                    delete this.domNode;
                }
                if (JSProf.LGD(21343, this, 'srcNodeRef').srcNodeRef) {
                    if (!JSProf.LRE(21344, preserveDom)) {
                        JSProf.LMC(21346, domConstruct, 'destroy').destroy(JSProf.LGD(21345, this, 'srcNodeRef').srcNodeRef);
                    }
                    delete this.srcNodeRef;
                }
            }, 12),
            destroyDescendants: JSProf.LNF(21354, function (preserveDom) {
                // summary:
                //		Recursively destroy the children of this widget and their
                //		descendants.
                // preserveDom:
                //		If true, the preserveDom attribute is passed to all descendant
                //		widget's .destroy() method. Not for use with _Templated
                //		widgets.
                // get all direct descendants and destroy them recursively
                JSProf.LMC(21353, array, 'forEach').forEach(JSProf.LMC(21348, this, 'getChildren').getChildren(), JSProf.LNF(21352, function (widget) {
                    if (JSProf.LGD(21349, widget, 'destroyRecursive').destroyRecursive) {
                        JSProf.LMC(21351, widget, 'destroyRecursive').destroyRecursive(JSProf.LRE(21350, preserveDom));
                    }
                }, 12));
            }, 12),
            uninitialize: JSProf.LNF(21355, function () {
                // summary:
                //		Deprecated. Override destroy() instead to implement custom widget tear-down
                //		behavior.
                // tags:
                //		protected
                return false;
            }, 12),
            _setStyleAttr: JSProf.LNF(21368, function (value) {
                // summary:
                //		Sets the style attribute of the widget according to value,
                //		which is either a hash like {height: "5px", width: "3px"}
                //		or a plain string
                // description:
                //		Determines which node to set the style on based on style setting
                //		in attributeMap.
                // tags:
                //		protected
                var mapNode = JSProf.LGD(21356, this, 'domNode').domNode;
                // Note: technically we should revert any style setting made in a previous call
                // to his method, but that's difficult to keep track of.
                if (JSProf.LMC(21358, lang, 'isObject').isObject(JSProf.LRE(21357, value))) {
                    JSProf.LMC(21361, domStyle, 'set').set(JSProf.LRE(21359, mapNode), JSProf.LRE(21360, value));
                } else {
                    if (JSProf.LGD(21362, mapNode.style, 'cssText').cssText) {
                        mapNode.style.cssText += "; " + JSProf.LRE(21363, value);
                    } else {
                        JSProf.LPD(21365, mapNode.style, 'cssText').cssText = JSProf.LRSP(21365, JSProf.LRE(21364, value));
                    }
                }
                JSProf.LMC(21367, this, '_set')._set("style", JSProf.LRE(21366, value));
            }, 12),
            _attrToDom: JSProf.LNF(21413, function (attr, value, commands) {
                // summary:
                //		Reflect a widget attribute (title, tabIndex, duration etc.) to
                //		the widget DOM, as specified by commands parameter.
                //		If commands isn't specified then it's looked up from attributeMap.
                //		Note some attributes like "type"
                //		cannot be processed this way as they are not mutable.
                // attr:
                //		Name of member variable (ex: "focusNode" maps to this.focusNode) pointing
                //		to DOMNode inside the widget, or alternately pointing to a subwidget
                // tags:
                //		private
                commands = JSProf.LWR(21372, commands, JSProf.LGD(21369, arguments, 'length').length >= 3 ? JSProf.LRE(21370, commands) : JSProf.LGE(21371, this.attributeMap, 'attr')[attr]);
                JSProf.LMC(21412, array, 'forEach').forEach(JSProf.LMC(21374, lang, 'isArray').isArray(JSProf.LRE(21373, commands)) ? JSProf.LRE(21375, commands) : JSProf.LNE(21377, [JSProf.LRE(21376, commands)], 10), JSProf.LNF(21411, function (command) {
                    // Get target node and what we are doing to that node
                    var mapNode = JSProf.LGE(21380, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LGD(21378, command, 'node').node || JSProf.LRE(21379, command) || "domNode")[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                    // DOM node
                    var type = JSProf.LGD(21381, command, 'type').type || "attribute";
                    // class, innerHTML, innerText, or attribute
                    switch (JSProf.LRE(21382, type)) {
                    case "attribute":
                        if (JSProf.LMC(21384, lang, 'isFunction').isFunction(JSProf.LRE(21383, value))) {
                            // functions execute in the context of the widget
                            value = JSProf.LWR(21387, value, JSProf.LMC(21386, lang, 'hitch').hitch(this, JSProf.LRE(21385, value)));
                        }
                        // Get the name of the DOM node attribute; usually it's the same
                        // as the name of the attribute in the widget (attr), but can be overridden.
                        // Also maps handler names to lowercase, like onSubmit --> onsubmit
                        var attrName = JSProf.LGD(21388, command, 'attribute').attribute ? JSProf.LGD(21389, command, 'attribute').attribute : JSProf.LMC(21391, /^on[A-Z][a-zA-Z]*$/, 'test').test(JSProf.LRE(21390, attr)) ? attr.toLowerCase() : JSProf.LRE(21392, attr);
                        if (JSProf.LGD(21393, mapNode, 'tagName').tagName) {
                            // Normal case, mapping to a DOMNode.  Note that modern browsers will have a mapNode.set()
                            // method, but for consistency we still call domAttr
                            JSProf.LMC(21397, domAttr, 'set').set(JSProf.LRE(21394, mapNode), JSProf.LRE(21395, attrName), JSProf.LRE(21396, value));
                        } else {
                            // mapping to a sub-widget
                            JSProf.LMC(21400, mapNode, 'set').set(JSProf.LRE(21398, attrName), JSProf.LRE(21399, value));
                        }
                        break;
                    case "innerText":
                        JSProf.LPD(21401, mapNode, 'innerHTML').innerHTML = JSProf.LRSP(21401, "");
                        JSProf.LMC(21404, mapNode, 'appendChild').appendChild(JSProf.LMC(21403, this.ownerDocument, 'createTextNode').createTextNode(JSProf.LRE(21402, value)));
                        break;
                    case "innerHTML":
                        JSProf.LPD(21406, mapNode, 'innerHTML').innerHTML = JSProf.LRSP(21406, JSProf.LRE(21405, value));
                        break;
                    case "class":
                        JSProf.LMC(21410, domClass, 'replace').replace(JSProf.LRE(21407, mapNode), JSProf.LRE(21408, value), JSProf.LGE(21409, this, 'attr')[attr]);
                        break;
                    }
                }, 12), this);
            }, 12),
            get: JSProf.LNF(21420, function (name) {
                // summary:
                //		Get a property from a widget.
                // name:
                //		The property to get.
                // description:
                //		Get a named property from a widget. The property may
                //		potentially be retrieved via a getter method. If no getter is defined, this
                //		just retrieves the object's property.
                //
                //		For example, if the widget has properties `foo` and `bar`
                //		and a method named `_getFooAttr()`, calling:
                //		`myWidget.get("foo")` would be equivalent to calling
                //		`widget._getFooAttr()` and `myWidget.get("bar")`
                //		would be equivalent to the expression
                //		`widget.bar2`
                var names = JSProf.LMC(21415, this, '_getAttrNames')._getAttrNames(JSProf.LRE(21414, name));
                return JSProf.LGE(21416, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] ? JSProf.LMC(21417, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g, 1)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd]() : JSProf.LMC(21419, this, '_get')._get(JSProf.LRE(21418, name));
            }, 12),
            set: JSProf.LNF(21464, function (name, value) {
                // summary:
                //		Set a property on a widget
                // name:
                //		The property to set.
                // value:
                //		The value to set in the property.
                // description:
                //		Sets named properties on a widget which may potentially be handled by a
                //		setter in the widget.
                //
                //		For example, if the widget has properties `foo` and `bar`
                //		and a method named `_setFooAttr()`, calling
                //		`myWidget.set("foo", "Howdy!")` would be equivalent to calling
                //		`widget._setFooAttr("Howdy!")` and `myWidget.set("bar", 3)`
                //		would be equivalent to the statement `widget.bar = 3;`
                //
                //		set() may also be called with a hash of name/value pairs, ex:
                //
                //	|	myWidget.set({
                //	|		foo: "Howdy",
                //	|		bar: 3
                //	|	});
                //
                //	This is equivalent to calling `set(foo, "Howdy")` and `set(bar, 3)`
                if (typeof JSProf.LRE(21421, name) === "object") {
                    for (var x in JSProf.LRE(21422, name)) {
                        JSProf.LMC(21425, this, 'set').set(JSProf.LRE(21423, x), JSProf.LGE(21424, name, 'x')[x]);
                    }
                    return this;
                }
                var names = JSProf.LMC(21427, this, '_getAttrNames')._getAttrNames(JSProf.LRE(21426, name)), setter = JSProf.LGE(21428, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.s)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                if (JSProf.LMC(21430, lang, 'isFunction').isFunction(JSProf.LRE(21429, setter))) {
                    // use the explicit setter
                    var result = JSProf.LMC(21432, setter, 'apply').apply(this, JSProf.LMC(21431, Array.prototype.slice, 'call').call(arguments, 1));
                } else {
                    // Mapping from widget attribute to DOMNode/subwidget attribute/value/etc.
                    // Map according to:
                    //		1. attributeMap setting, if one exists (TODO: attributeMap deprecated, remove in 2.0)
                    //		2. _setFooAttr: {...} type attribute in the widget (if one exists)
                    //		3. apply to focusNode or domNode if standard attribute name, excluding funcs like onClick.
                    // Checks if an attribute is a "standard attribute" by whether the DOMNode JS object has a similar
                    // attribute name (ex: accept-charset attribute matches jsObject.acceptCharset).
                    // Note also that Tree.focusNode() is a function not a DOMNode, so test for that.
                    var defaultNode = JSProf.LGD(21433, this, 'focusNode').focusNode && !JSProf.LMC(21435, lang, 'isFunction').isFunction(JSProf.LGD(21434, this, 'focusNode').focusNode) ? "focusNode" : "domNode", tag = JSProf.LGE(21436, this, 'defaultNode')[defaultNode] && JSProf.LGD(21437, this[defaultNode], 'tagName').tagName, attrsForTag = JSProf.LRE(21438, tag) && (JSProf.LGE(21439, tagAttrs, 'tag')[tag] || (JSProf.LPE(21442, tagAttrs, 'tag')[tag] = JSProf.LRPE(21442, JSProf.LFC(21441, getAttrs, false)(JSProf.LGE(21440, this, 'defaultNode')[defaultNode])))), map = JSProf.LRE(21443, name) in JSProf.LGD(21444, this, 'attributeMap').attributeMap ? JSProf.LGE(21445, this.attributeMap, 'name')[name] : JSProf.LGD(21446, names, 's').s in this ? JSProf.LGE(21447, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.s)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] : JSProf.LRE(21448, attrsForTag) && JSProf.LGD(21449, names, 'l').l in JSProf.LRE(21450, attrsForTag) && typeof JSProf.LRE(21451, value) != "function" || JSProf.LMC(21453, /^aria-|^data-|^role$/, 'test').test(JSProf.LRE(21452, name)) ? JSProf.LRE(21454, defaultNode) : null;
                    if (JSProf.LRE(21455, map) != null) {
                        JSProf.LMC(21459, this, '_attrToDom')._attrToDom(JSProf.LRE(21456, name), JSProf.LRE(21457, value), JSProf.LRE(21458, map));
                    }
                    JSProf.LMC(21462, this, '_set')._set(JSProf.LRE(21460, name), JSProf.LRE(21461, value));
                }
                return JSProf.LRE(21463, result) || this;
            }, 12),
            _attrPairNames: JSProf.LNE(21465, {}, 11),
            _getAttrNames: JSProf.LNF(21476, function (name) {
                // summary:
                //		Helper function for get() and set().
                //		Caches attribute name values so we don't do the string ops every time.
                // tags:
                //		private
                var apn = JSProf.LGD(21466, this, '_attrPairNames')._attrPairNames;
                if (JSProf.LGE(21467, apn, 'name')[name]) {
                    return JSProf.LGE(21468, apn, 'name')[name];
                }
                var uc = JSProf.LMC(21471, name, 'replace').replace(/^[a-z]|-[a-zA-Z]/g, JSProf.LNF(21470, function (c) {
                        return c.charAt(JSProf.LGD(21469, c, 'length').length - 1).toUpperCase();
                    }, 12));
                return JSProf.LPE(21475, apn, 'name')[name] = JSProf.LRPE(21475, JSProf.LNE(21474, {
                    n: name + "Node",
                    s: "_set" + JSProf.LRE(21472, uc) + "Attr",
                    g: "_get" + JSProf.LRE(21473, uc) + "Attr",
                    l: uc.toLowerCase()
                }, 11));
            }, 12),
            _set: JSProf.LNF(21493, function (name, value) {
                // summary:
                //		Helper function to set new value for specified property, and call handlers
                //		registered with watch() if the value has changed.
                var oldValue = JSProf.LGE(21477, this, 'name')[name];
                JSProf.LPE(21479, this, 'name')[name] = JSProf.LRPE(21479, JSProf.LRE(21478, value));
                if (JSProf.LGD(21480, this, '_created')._created && !JSProf.LFC(21483, isEqual, false)(JSProf.LRE(21481, oldValue), JSProf.LRE(21482, value))) {
                    if (JSProf.LGD(21484, this, '_watchCallbacks')._watchCallbacks) {
                        JSProf.LMC(21488, this, '_watchCallbacks')._watchCallbacks(JSProf.LRE(21485, name), JSProf.LRE(21486, oldValue), JSProf.LRE(21487, value));
                    }
                    JSProf.LMC(21492, this, 'emit').emit("attrmodified-" + JSProf.LRE(21489, name), JSProf.LNE(21491, {
                        detail: JSProf.LNE(21490, {
                            prevValue: oldValue,
                            newValue: value
                        }, 11)
                    }, 11));
                }
            }, 12),
            _get: JSProf.LNF(21495, function (name) {
                // summary:
                //		Helper function to get value for specified property stored by this._set(),
                //		i.e. for properties with custom setters.  Used mainly by custom getters.
                //
                //		For example, CheckBox._getValueAttr() calls this._get("value").
                // future: return name in this.props ? this.props[name] : this[name];
                return JSProf.LGE(21494, this, 'name')[name];
            }, 12),
            emit: JSProf.LNF(21522, function (type, eventObj, callbackArgs) {
                // summary:
                //		Used by widgets to signal that a synthetic event occurred, ex:
                //	|	myWidget.emit("attrmodified-selectedChildWidget", {}).
                //
                //		Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                //		Also calls onType() method, if present, and returns value from that method.
                //		By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                //		Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                // tags:
                //		protected
                // Specify fallback values for bubbles, cancelable in case they are not set in eventObj.
                // Also set pointer to widget, although since we can't add a pointer to the widget for native events
                // (see #14729), maybe we shouldn't do it here?
                eventObj = JSProf.LWR(21498, eventObj, JSProf.LRE(21496, eventObj) || JSProf.LNE(21497, {}, 11));
                if (JSProf.LGD(21499, eventObj, 'bubbles').bubbles === undefined) {
                    JSProf.LPD(21500, eventObj, 'bubbles').bubbles = JSProf.LRSP(21500, true);
                }
                if (JSProf.LGD(21501, eventObj, 'cancelable').cancelable === undefined) {
                    JSProf.LPD(21502, eventObj, 'cancelable').cancelable = JSProf.LRSP(21502, true);
                }
                if (!JSProf.LGD(21503, eventObj, 'detail').detail) {
                    JSProf.LPD(21505, eventObj, 'detail').detail = JSProf.LRSP(21505, JSProf.LNE(21504, {}, 11));
                }
                JSProf.LPD(21506, eventObj.detail, 'widget').widget = JSProf.LRSP(21506, this);
                var ret, callback = JSProf.LGE(21508, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = "on" + JSProf.LRE(21507, type))[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                if (JSProf.LRE(21509, callback)) {
                    ret = JSProf.LWR(21515, ret, JSProf.LMC(21514, callback, 'apply').apply(this, JSProf.LRE(21510, callbackArgs) ? JSProf.LRE(21511, callbackArgs) : JSProf.LNE(21513, [JSProf.LRE(21512, eventObj)], 10)));
                }
                // Emit event, but avoid spurious emit()'s as parent sets properties on child during startup/destroy
                if (JSProf.LGD(21516, this, '_started')._started && !JSProf.LGD(21517, this, '_beingDestroyed')._beingDestroyed) {
                    JSProf.LMC(21520, on, 'emit').emit(JSProf.LGD(21518, this, 'domNode').domNode, type.toLowerCase(), JSProf.LRE(21519, eventObj));
                }
                return JSProf.LRE(21521, ret);
            }, 12),
            on: JSProf.LNF(21535, function (type, func) {
                // summary:
                //		Call specified function when event occurs, ex: myWidget.on("click", function(){ ... }).
                // type:
                //		Name of event (ex: "click") or extension event like touch.press.
                // description:
                //		Call specified function when event `type` occurs, ex: `myWidget.on("click", function(){ ... })`.
                //		Note that the function is not run in any particular scope, so if (for example) you want it to run in the
                //		widget's scope you must do `myWidget.on("click", lang.hitch(myWidget, func))`.
                // For backwards compatibility, if there's an onType() method in the widget then connect to that.
                // Remove in 2.0.
                var widgetMethod = JSProf.LMC(21524, this, '_onMap')._onMap(JSProf.LRE(21523, type));
                if (JSProf.LRE(21525, widgetMethod)) {
                    return JSProf.LMC(21528, aspect, 'after').after(this, JSProf.LRE(21526, widgetMethod), JSProf.LRE(21527, func), true);
                }
                // Otherwise, just listen for the event on this.domNode.
                return JSProf.LGE(21534, JSProf.LMC(21533, this, 'own').own(JSProf.LFC(21532, on, false)(JSProf.LGD(21529, this, 'domNode').domNode, JSProf.LRE(21530, type), JSProf.LRE(21531, func))), 0)[0];
            }, 12),
            _onMap: JSProf.LNF(21550, function (type) {
                // summary:
                //		Maps on() type parameter (ex: "mousemove") to method name (ex: "onMouseMove").
                //		If type is a synthetic event like touch.press then returns undefined.
                var ctor = JSProf.LGD(21536, this, 'constructor').constructor, map = JSProf.LGD(21537, ctor, '_onMap')._onMap;
                if (!JSProf.LRE(21538, map)) {
                    map = JSProf.LWR(21541, map, JSProf.LPD(21540, ctor, '_onMap')._onMap = JSProf.LRSP(21540, JSProf.LNE(21539, {}, 11)));
                    for (var attr in JSProf.LGD(21542, ctor, 'prototype').prototype) {
                        if (JSProf.LMC(21544, /^on/, 'test').test(JSProf.LRE(21543, attr))) {
                            JSProf.LPE(21547, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = JSProf.LMC(21545, attr, 'replace').replace(/^on/, "").toLowerCase())[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138] = JSProf.LRPE(21547, JSProf.LRE(21546, attr));
                        }
                    }
                }
                return JSProf.LGE(21549, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = typeof JSProf.LRE(21548, type) == "string" && type.toLowerCase())[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138];    // String
            }, 12),
            toString: JSProf.LNF(21553, function () {
                // summary:
                //		Returns a string that represents the widget.
                // description:
                //		When a widget is cast to a string, this method will be used to generate the
                //		output. Currently, it does not implement any sort of reversible
                //		serialization.
                return '[Widget ' + JSProf.LGD(21551, this, 'declaredClass').declaredClass + ', ' + (JSProf.LGD(21552, this, 'id').id || 'NO ID') + ']';    // String
            }, 12),
            getChildren: JSProf.LNF(21558, function () {
                // summary:
                //		Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                //		is this widget.   Note that it does not return all descendants, but rather just direct children.
                //		Analogous to [Node.childNodes](https://developer.mozilla.org/en-US/docs/DOM/Node.childNodes),
                //		except containing widgets rather than DOMNodes.
                //
                //		The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                //		outside of this.containerNode.
                //
                //		Note that the array returned is a simple array.  Application code should not assume
                //		existence of methods like forEach().
                return JSProf.LGD(21554, this, 'containerNode').containerNode ? JSProf.LMC(21556, registry, 'findWidgets').findWidgets(JSProf.LGD(21555, this, 'containerNode').containerNode) : JSProf.LNE(21557, [], 10);    // dijit/_WidgetBase[]
            }, 12),
            getParent: JSProf.LNF(21561, function () {
                // summary:
                //		Returns the parent widget of this widget.
                return JSProf.LMC(21560, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LGD(21559, this.domNode, 'parentNode').parentNode);
            }, 12),
            connect: JSProf.LNF(21568, function (obj, event, method) {
                // summary:
                //		Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                //
                //		Connects specified obj/event to specified method of this object
                //		and registers for disconnect() on widget destroy.
                //
                //		Provide widget-specific analog to dojo.connect, except with the
                //		implicit use of this widget as the target object.
                //		Events connected with `this.connect` are disconnected upon
                //		destruction.
                // returns:
                //		A handle that can be passed to `disconnect` in order to disconnect before
                //		the widget is destroyed.
                // example:
                //	|	var btn = new Button();
                //	|	// when foo.bar() is called, call the listener we're going to
                //	|	// provide in the scope of btn
                //	|	btn.connect(foo, "bar", function(){
                //	|		console.debug(this.toString());
                //	|	});
                // tags:
                //		protected
                return JSProf.LGE(21567, JSProf.LMC(21566, this, 'own').own(JSProf.LMC(21565, connect, 'connect').connect(JSProf.LRE(21562, obj), JSProf.LRE(21563, event), this, JSProf.LRE(21564, method))), 0)[0];    // handle
            }, 12),
            disconnect: JSProf.LNF(21570, function (handle) {
                // summary:
                //		Deprecated, will be removed in 2.0, use handle.remove() instead.
                //
                //		Disconnects handle created by `connect`.
                // tags:
                //		protected
                JSProf.LMC(21569, handle, 'remove').remove();
            }, 12),
            subscribe: JSProf.LNF(21577, function (t, method) {
                // summary:
                //		Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                //
                //		Subscribes to the specified topic and calls the specified method
                //		of this object and registers for unsubscribe() on widget destroy.
                //
                //		Provide widget-specific analog to dojo.subscribe, except with the
                //		implicit use of this widget as the target object.
                // t: String
                //		The topic
                // method: Function
                //		The callback
                // example:
                //	|	var btn = new Button();
                //	|	// when /my/topic is published, this button changes its label to
                //	|	// be the parameter of the topic.
                //	|	btn.subscribe("/my/topic", function(v){
                //	|		this.set("label", v);
                //	|	});
                // tags:
                //		protected
                return JSProf.LGE(21576, JSProf.LMC(21575, this, 'own').own(JSProf.LMC(21574, topic, 'subscribe').subscribe(JSProf.LRE(21571, t), JSProf.LMC(21573, lang, 'hitch').hitch(this, JSProf.LRE(21572, method)))), 0)[0];    // handle
            }, 12),
            unsubscribe: JSProf.LNF(21579, function (handle) {
                // summary:
                //		Deprecated, will be removed in 2.0, use handle.remove() instead.
                //
                //		Unsubscribes handle created by this.subscribe.
                //		Also removes handle from this widget's list of subscriptions
                // tags:
                //		protected
                JSProf.LMC(21578, handle, 'remove').remove();
            }, 12),
            isLeftToRight: JSProf.LNF(21584, function () {
                // summary:
                //		Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                // tags:
                //		protected
                return JSProf.LGD(21580, this, 'dir').dir ? JSProf.LGD(21581, this, 'dir').dir == "ltr" : JSProf.LMC(21583, domGeometry, 'isBodyLtr').isBodyLtr(JSProf.LGD(21582, this, 'ownerDocument').ownerDocument);    //Boolean
            }, 12),
            isFocusable: JSProf.LNF(21588, function () {
                // summary:
                //		Return true if this widget can currently be focused
                //		and false if not
                return JSProf.LGD(21585, this, 'focus').focus && JSProf.LMC(21587, domStyle, 'get').get(JSProf.LGD(21586, this, 'domNode').domNode, "display") != "none";
            }, 12),
            placeAt: JSProf.LNF(21617, function (reference, position) {
                // summary:
                //		Place this widget somewhere in the DOM based
                //		on standard domConstruct.place() conventions.
                // description:
                //		A convenience function provided in all _Widgets, providing a simple
                //		shorthand mechanism to put an existing (or newly created) Widget
                //		somewhere in the dom, and allow chaining.
                // reference:
                //		Widget, DOMNode, DocumentFragment, or id of widget or DOMNode
                // position:
                //		If reference is a widget (or id of widget), and that widget has an ".addChild" method,
                //		it will be called passing this widget instance into that method, supplying the optional
                //		position index passed.  In this case position (if specified) should be an integer.
                //
                //		If reference is a DOMNode (or id matching a DOMNode but not a widget),
                //		the position argument can be a numeric index or a string
                //		"first", "last", "before", or "after", same as dojo/dom-construct::place().
                // returns: dijit/_WidgetBase
                //		Provides a useful return of the newly created dijit._Widget instance so you
                //		can "chain" this function by instantiating, placing, then saving the return value
                //		to a variable.
                // example:
                //	|	// create a Button with no srcNodeRef, and place it in the body:
                //	|	var button = new Button({ label:"click" }).placeAt(win.body());
                //	|	// now, 'button' is still the widget reference to the newly created button
                //	|	button.on("click", function(e){ console.log('click'); }));
                // example:
                //	|	// create a button out of a node with id="src" and append it to id="wrapper":
                //	|	var button = new Button({},"src").placeAt("wrapper");
                // example:
                //	|	// place a new button as the first element of some div
                //	|	var button = new Button({ label:"click" }).placeAt("wrapper","first");
                // example:
                //	|	// create a contentpane and add it to a TabContainer
                //	|	var tc = dijit.byId("myTabs");
                //	|	new ContentPane({ href:"foo.html", title:"Wow!" }).placeAt(tc)
                var refWidget = !JSProf.LGD(21589, reference, 'tagName').tagName && JSProf.LMC(21591, registry, 'byId').byId(JSProf.LRE(21590, reference));
                if (JSProf.LRE(21592, refWidget) && JSProf.LGD(21593, refWidget, 'addChild').addChild && (!JSProf.LRE(21594, position) || typeof JSProf.LRE(21595, position) === "number")) {
                    // Adding this to refWidget and can use refWidget.addChild() to handle everything.
                    JSProf.LMC(21597, refWidget, 'addChild').addChild(this, JSProf.LRE(21596, position));
                } else {
                    // "reference" is a plain DOMNode, or we can't use refWidget.addChild().   Use domConstruct.place() and
                    // target refWidget.containerNode for nested placement (position==number, "first", "last", "only"), and
                    // refWidget.domNode otherwise ("after"/"before"/"replace").  (But not supported officially, see #14946.)
                    var ref = JSProf.LRE(21598, refWidget) && "domNode" in JSProf.LRE(21599, refWidget) ? JSProf.LGD(21600, refWidget, 'containerNode').containerNode && !JSProf.LMC(21602, /after|before|replace/, 'test').test(JSProf.LRE(21601, position) || "") ? JSProf.LGD(21603, refWidget, 'containerNode').containerNode : JSProf.LGD(21604, refWidget, 'domNode').domNode : JSProf.LMC(21607, dom, 'byId').byId(JSProf.LRE(21605, reference), JSProf.LGD(21606, this, 'ownerDocument').ownerDocument);
                    JSProf.LMC(21611, domConstruct, 'place').place(JSProf.LGD(21608, this, 'domNode').domNode, JSProf.LRE(21609, ref), JSProf.LRE(21610, position));
                    // Start this iff it has a parent widget that's already started.
                    // TODO: for 2.0 maybe it should also start the widget when this.getParent() returns null??
                    if (!JSProf.LGD(21612, this, '_started')._started && JSProf.LGD(21615, JSProf.LMC(21613, this, 'getParent').getParent() || JSProf.LNE(21614, {}, 11), '_started')._started) {
                        JSProf.LMC(21616, this, 'startup').startup();
                    }
                }
                return this;
            }, 12),
            defer: JSProf.LNF(21631, function (fcn, delay) {
                // summary:
                //		Wrapper to setTimeout to avoid deferred functions executing
                //		after the originating widget has been destroyed.
                //		Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                // fcn: Function
                //		Function reference.
                // delay: Number?
                //		Delay, defaults to 0.
                // tags:
                //		protected
                var timer = setTimeout(JSProf.LMC(21624, lang, 'hitch').hitch(this, JSProf.LNF(21623, function () {
                        if (!JSProf.LRE(21618, timer)) {
                            return;
                        }
                        timer = null;
                        if (!JSProf.LGD(21619, this, '_destroyed')._destroyed) {
                            JSProf.LFC(21622, JSProf.LMC(21621, lang, 'hitch').hitch(this, JSProf.LRE(21620, fcn)), false)();
                        }
                    }, 12)), JSProf.LRE(21625, delay) || 0);
                return JSProf.LNE(21630, {
                    remove: JSProf.LNF(21629, function () {
                        if (JSProf.LRE(21626, timer)) {
                            JSProf.LFC(21628, clearTimeout, false)(JSProf.LRE(21627, timer));
                            timer = null;
                        }
                        return null;    // so this works well: handle = handle.remove();
                    }, 12)
                }, 11);
            }, 12)
        }, 11));
    if (JSProf.LFC(21634, has, false)("dojo-bidi")) {
        JSProf.LMC(21636, _WidgetBase, 'extend').extend(JSProf.LRE(21635, _BidiMixin));
    }
    return JSProf.LRE(21637, _WidgetBase);
}, 12));