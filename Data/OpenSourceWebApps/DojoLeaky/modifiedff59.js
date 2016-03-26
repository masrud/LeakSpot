JSProf.LFC(21332, define, false)(JSProf.LNE(20819, [
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
], 10), JSProf.LNF(21331, function (require, array, aspect, config, connect, declare, dom, domAttr, domClass, domConstruct, domGeometry, domStyle, has, kernel, lang, on, ready, Stateful, topic, win, Destroyable, _BidiMixin, registry) {
    JSProf.LFD(21328, getAttrs);
    JSProf.LFD(21329, nonEmptyAttrToDom);
    JSProf.LFD(21330, isEqual);
    // module:
    //		dijit/_WidgetBase
    // Flag to make dijit load modules the app didn't explicitly request, for backwards compatibility
    JSProf.LMC(20821, has, 'add').add("dijit-legacy-requires", !JSProf.LGD(20820, kernel, 'isAsync').isAsync);
    // Flag to enable support for textdir attribute
    JSProf.LMC(20822, has, 'add').add("dojo-bidi", false);
    // For back-compat, remove in 2.0.
    if (JSProf.LFC(20823, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(20828, ready, false)(0, JSProf.LNF(20827, function () {
            var requires = JSProf.LNE(20824, ["dijit/_base/manager"], 10);
            JSProf.LFC(20826, require, false)(JSProf.LRE(20825, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    // Nested hash listing attributes for each tag, all strings in lowercase.
    // ex: {"div": {"style": true, "tabindex" true}, "form": { ...
    var tagAttrs = JSProf.LNE(20829, {}, 11);
    function getAttrs(obj) {
        var ret = JSProf.LNE(20830, {}, 11);
        for (var attr in JSProf.LRE(20831, obj)) {
            JSProf.LPE(20832, ret, JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca = attr.toLowerCase())[JSProf.TMPS.t3313b1038ce4d555856b0e5ea0613d366d950cca] = JSProf.LRPE(20832, true);
        }
        return JSProf.LRE(20833, ret);
    }
    function nonEmptyAttrToDom(attr) {
        // summary:
        //		Returns a setter function that copies the attribute to this.domNode,
        //		or removes the attribute from this.domNode, depending on whether the
        //		value is defined or not.
        return JSProf.LNF(20842, function (val) {
            JSProf.LMC(20838, domAttr, JSProf.TMPS.tfb2ef068deb66ed45c3703446f605355b3f55fd6 = JSProf.LRE(20834, val) ? "set" : "remove", 1)[JSProf.TMPS.tfb2ef068deb66ed45c3703446f605355b3f55fd6](JSProf.LGD(20835, this, 'domNode').domNode, JSProf.LRE(20836, attr), JSProf.LRE(20837, val));
            JSProf.LMC(20841, this, '_set')._set(JSProf.LRE(20839, attr), JSProf.LRE(20840, val));
        }, 12);
    }
    function isEqual(a, b) {
        //	summary:
        //		Function that determines whether two values are identical,
        //		taking into account that NaN is not normally equal to itself
        //		in JS.
        return JSProf.LRE(20843, a) === JSProf.LRE(20844, b) || JSProf.LRE(20845, a) !== JSProf.LRE(20846, a) && JSProf.LRE(20847, b) !== JSProf.LRE(20848, b);
    }
    var _WidgetBase = JSProf.LFC(21323, declare, false)("dijit._WidgetBase", JSProf.LNE(20851, [
            JSProf.LRE(20849, Stateful),
            JSProf.LRE(20850, Destroyable)
        ], 10), JSProf.LNE(21322, {
            id: "",
            _setIdAttr: "domNode",
            lang: "",
            _setLangAttr: JSProf.LFC(20852, nonEmptyAttrToDom, false)("lang"),
            dir: "",
            _setDirAttr: JSProf.LFC(20853, nonEmptyAttrToDom, false)("dir"),
            "class": "",
            _setClassAttr: JSProf.LNE(20854, {
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
            _setOwnerDocumentAttr: JSProf.LNF(20857, function (val) {
                // this setter is merely to avoid automatically trying to set this.domNode.ownerDocument
                JSProf.LMC(20856, this, '_set')._set("ownerDocument", JSProf.LRE(20855, val));
            }, 12),
            attributeMap: JSProf.LNE(20858, {}, 11),
            _blankGif: config.blankGif || JSProf.LMC(20859, require, 'toUrl').toUrl("dojo/resources/blank.gif"),
            _introspect: JSProf.LNF(20885, function () {
                // summary:
                //		Collect metadata about this widget (only once per class, not once per instance):
                //
                //			- list of attributes with custom setters, storing in this.constructor._setterAttrs
                //			- generate this.constructor._onMap, mapping names like "mousedown" to functions like onMouseDown
                var ctor = JSProf.LGD(20860, this, 'constructor').constructor;
                if (!JSProf.LGD(20861, ctor, '_setterAttrs')._setterAttrs) {
                    var proto = JSProf.LGD(20862, ctor, 'prototype').prototype, attrs = JSProf.LPD(20864, ctor, '_setterAttrs')._setterAttrs = JSProf.LRSP(20864, JSProf.LNE(20863, [], 10)),
                        // attributes with custom setters
                        onMap = JSProf.LPD(20866, ctor, '_onMap')._onMap = JSProf.LRSP(20866, JSProf.LNE(20865, {}, 11));
                    // Items in this.attributeMap are like custom setters.  For back-compat, remove for 2.0.
                    for (var name in JSProf.LGD(20867, proto, 'attributeMap').attributeMap) {
                        JSProf.LMC(20869, attrs, 'push').push(JSProf.LRE(20868, name));
                    }
                    // Loop over widget properties, collecting properties with custom setters and filling in ctor._onMap.
                    for (name in JSProf.LRE(20870, proto)) {
                        if (JSProf.LMC(20872, /^on/, 'test').test(JSProf.LRE(20871, name))) {
                            JSProf.LPE(20874, onMap, JSProf.TMPS.t0f2021db1c8ebb8c4d7b8c499077f85fea16d7c0 = name.substring(2).toLowerCase())[JSProf.TMPS.t0f2021db1c8ebb8c4d7b8c499077f85fea16d7c0] = JSProf.LRPE(20874, JSProf.LRE(20873, name));
                        }
                        if (JSProf.LMC(20876, /^_set[A-Z](.*)Attr$/, 'test').test(JSProf.LRE(20875, name))) {
                            name = JSProf.LWR(20879, name, name.charAt(4).toLowerCase() + JSProf.LMC(20878, name, 'substr').substr(5, JSProf.LGD(20877, name, 'length').length - 9));
                            if (!JSProf.LGD(20880, proto, 'attributeMap').attributeMap || !(JSProf.LRE(20881, name) in JSProf.LGD(20882, proto, 'attributeMap').attributeMap)) {
                                JSProf.LMC(20884, attrs, 'push').push(JSProf.LRE(20883, name));
                            }
                        }
                    }    // Note: this isn't picking up info on properties like aria-label and role, that don't have custom setters
                         // but that set() maps to attributes on this.domNode or this.focusNode
                }
            }, 12),
            postscript: JSProf.LNF(20889, function (params, srcNodeRef) {
                // summary:
                //		Kicks off widget instantiation.  See create() for details.
                // tags:
                //		private
                // Note that we skip calling this.inherited(), i.e. dojo/Stateful::postscript(), because 1.x widgets don't
                // expect their custom setters to get called until after buildRendering().  Consider changing for 2.0.
                JSProf.LMC(20888, this, 'create').create(JSProf.LRE(20886, params), JSProf.LRE(20887, srcNodeRef));
            }, 12),
            create: JSProf.LNF(20939, function (params, srcNodeRef) {
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
                JSProf.LMC(20890, this, '_introspect')._introspect();
                // store pointer to original DOM tree
                JSProf.LPD(20893, this, 'srcNodeRef').srcNodeRef = JSProf.LRSP(20893, JSProf.LMC(20892, dom, 'byId').byId(JSProf.LRE(20891, srcNodeRef)));
                // No longer used, remove for 2.0.
                JSProf.LPD(20895, this, '_connects')._connects = JSProf.LRSP(20895, JSProf.LNE(20894, [], 10));
                JSProf.LPD(20897, this, '_supportingWidgets')._supportingWidgets = JSProf.LRSP(20897, JSProf.LNE(20896, [], 10));
                // this is here for back-compat, remove in 2.0 (but check NodeList-instantiate.html test)
                if (JSProf.LGD(20898, this, 'srcNodeRef').srcNodeRef && typeof JSProf.LGD(20899, this.srcNodeRef, 'id').id == "string") {
                    JSProf.LPD(20901, this, 'id').id = JSProf.LRSP(20901, JSProf.LGD(20900, this.srcNodeRef, 'id').id);
                }
                // mix in our passed parameters
                if (JSProf.LRE(20902, params)) {
                    JSProf.LPD(20904, this, 'params').params = JSProf.LRSP(20904, JSProf.LRE(20903, params));
                    JSProf.LMC(20906, lang, 'mixin').mixin(this, JSProf.LRE(20905, params));
                }
                JSProf.LMC(20907, this, 'postMixInProperties').postMixInProperties();
                // Generate an id for the widget if one wasn't specified, or it was specified as id: undefined.
                // Do this before buildRendering() because it might expect the id to be there.
                if (!JSProf.LGD(20908, this, 'id').id) {
                    JSProf.LPD(20911, this, 'id').id = JSProf.LRSP(20911, JSProf.LMC(20910, registry, 'getUniqueId').getUniqueId(JSProf.LMC(20909, this.declaredClass, 'replace').replace(/\./g, "_")));
                    if (JSProf.LGD(20912, this, 'params').params) {
                        // if params contains {id: undefined}, prevent _applyAttributes() from processing it
                        delete this.params.id;
                    }
                }
                // The document and <body> node this widget is associated with
                JSProf.LPD(20917, this, 'ownerDocument').ownerDocument = JSProf.LRSP(20917, JSProf.LGD(20913, this, 'ownerDocument').ownerDocument || (JSProf.LGD(20914, this, 'srcNodeRef').srcNodeRef ? JSProf.LGD(20915, this.srcNodeRef, 'ownerDocument').ownerDocument : JSProf.LRU(20916, typeof document === 'undefined' ? undefined : document)));
                JSProf.LPD(20920, this, 'ownerDocumentBody').ownerDocumentBody = JSProf.LRSP(20920, JSProf.LMC(20919, win, 'body').body(JSProf.LGD(20918, this, 'ownerDocument').ownerDocument));
                JSProf.LMC(20921, registry, 'add').add(this);
                JSProf.LMC(20922, this, 'buildRendering').buildRendering();
                var deleteSrcNodeRef;
                if (JSProf.LGD(20923, this, 'domNode').domNode) {
                    // Copy attributes listed in attributeMap into the [newly created] DOM for the widget.
                    // Also calls custom setters for all attributes with custom setters.
                    JSProf.LMC(20924, this, '_applyAttributes')._applyAttributes();
                    // If srcNodeRef was specified, then swap out original srcNode for this widget's DOM tree.
                    // For 2.0, move this after postCreate().  postCreate() shouldn't depend on the
                    // widget being attached to the DOM since it isn't when a widget is created programmatically like
                    // new MyWidget({}).	See #11635.
                    var source = JSProf.LGD(20925, this, 'srcNodeRef').srcNodeRef;
                    if (JSProf.LRE(20926, source) && JSProf.LGD(20927, source, 'parentNode').parentNode && JSProf.LGD(20928, this, 'domNode').domNode !== JSProf.LRE(20929, source)) {
                        JSProf.LMC(20932, source.parentNode, 'replaceChild').replaceChild(JSProf.LGD(20930, this, 'domNode').domNode, JSProf.LRE(20931, source));
                        deleteSrcNodeRef = JSProf.LWR(20933, deleteSrcNodeRef, true);
                    }
                    // Note: for 2.0 may want to rename widgetId to dojo._scopeName + "_widgetId",
                    // assuming that dojo._scopeName even exists in 2.0
                    JSProf.LMC(20935, this.domNode, 'setAttribute').setAttribute("widgetId", JSProf.LGD(20934, this, 'id').id);
                }
                JSProf.LMC(20936, this, 'postCreate').postCreate();
                // If srcNodeRef has been processed and removed from the DOM (e.g. TemplatedWidget) then delete it to allow GC.
                // I think for back-compatibility it isn't deleting srcNodeRef until after postCreate() has run.
                if (JSProf.LRE(20937, deleteSrcNodeRef)) {
                    delete this.srcNodeRef;
                }
                JSProf.LPD(20938, this, '_created')._created = JSProf.LRSP(20938, true);
            }, 12),
            _applyAttributes: JSProf.LNF(20961, function () {
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
                var params = JSProf.LNE(20940, {}, 11);
                for (var key in JSProf.LGD(20941, this, 'params').params || JSProf.LNE(20942, {}, 11)) {
                    JSProf.LPE(20945, params, 'key')[key] = JSProf.LRPE(20945, JSProf.LMC(20944, this, '_get')._get(JSProf.LRE(20943, key)));
                }
                // Step 2: Call set() for each property with a non-falsy value that wasn't passed as a parameter to the constructor
                JSProf.LMC(20956, array, 'forEach').forEach(JSProf.LGD(20946, this.constructor, '_setterAttrs')._setterAttrs, JSProf.LNF(20955, function (key) {
                    if (!(JSProf.LRE(20947, key) in JSProf.LRE(20948, params))) {
                        var val = JSProf.LMC(20950, this, '_get')._get(JSProf.LRE(20949, key));
                        if (JSProf.LRE(20951, val)) {
                            JSProf.LMC(20954, this, 'set').set(JSProf.LRE(20952, key), JSProf.LRE(20953, val));
                        }
                    }
                }, 12), this);
                // Step 3: Call set() for each property that was specified as parameter to constructor.
                // Use params hash created above to ignore side effects from step #2 above.
                for (key in JSProf.LRE(20957, params)) {
                    JSProf.LMC(20960, this, 'set').set(JSProf.LRE(20958, key), JSProf.LGE(20959, params, 'key')[key]);
                }
            }, 12),
            postMixInProperties: JSProf.LNF(20962, function () {
            }, 12),
            buildRendering: JSProf.LNF(20977, function () {
                // summary:
                //		Construct the UI for this widget, setting this.domNode.
                //		Most widgets will mixin `dijit._TemplatedMixin`, which implements this method.
                // tags:
                //		protected
                if (!JSProf.LGD(20963, this, 'domNode').domNode) {
                    // Create root node if it wasn't created by _TemplatedMixin
                    JSProf.LPD(20966, this, 'domNode').domNode = JSProf.LRSP(20966, JSProf.LGD(20964, this, 'srcNodeRef').srcNodeRef || JSProf.LMC(20965, this.ownerDocument, 'createElement').createElement("div"));
                }
                // baseClass is a single class name or occasionally a space-separated list of names.
                // Add those classes to the DOMNode.  If RTL mode then also add with Rtl suffix.
                // TODO: make baseClass custom setter
                if (JSProf.LGD(20967, this, 'baseClass').baseClass) {
                    var classes = this.baseClass.split(" ");
                    if (!JSProf.LMC(20968, this, 'isLeftToRight').isLeftToRight()) {
                        classes = JSProf.LWR(20973, classes, classes.concat(JSProf.LMC(20972, array, 'map').map(JSProf.LRE(20969, classes), JSProf.LNF(20971, function (name) {
                            return JSProf.LRE(20970, name) + "Rtl";
                        }, 12))));
                    }
                    JSProf.LMC(20976, domClass, 'add').add(JSProf.LGD(20974, this, 'domNode').domNode, JSProf.LRE(20975, classes));
                }
            }, 12),
            postCreate: JSProf.LNF(20978, function () {
            }, 12),
            startup: JSProf.LNF(20990, function () {
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
                if (JSProf.LGD(20979, this, '_started')._started) {
                    return;
                }
                JSProf.LPD(20980, this, '_started')._started = JSProf.LRSP(20980, true);
                JSProf.LMC(20989, array, 'forEach').forEach(JSProf.LMC(20981, this, 'getChildren').getChildren(), JSProf.LNF(20988, function (obj) {
                    if (!JSProf.LGD(20982, obj, '_started')._started && !JSProf.LGD(20983, obj, '_destroyed')._destroyed && JSProf.LMC(20985, lang, 'isFunction').isFunction(JSProf.LGD(20984, obj, 'startup').startup)) {
                        JSProf.LMC(20986, obj, 'startup').startup();
                        JSProf.LPD(20987, obj, '_started')._started = JSProf.LRSP(20987, true);
                    }
                }, 12));
            }, 12),
            destroyRecursive: JSProf.LNF(20996, function (preserveDom) {
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
                JSProf.LPD(20991, this, '_beingDestroyed')._beingDestroyed = JSProf.LRSP(20991, true);
                JSProf.LMC(20993, this, 'destroyDescendants').destroyDescendants(JSProf.LRE(20992, preserveDom));
                JSProf.LMC(20995, this, 'destroy').destroy(JSProf.LRE(20994, preserveDom));
            }, 12),
            destroy: JSProf.LNF(21023, function (preserveDom) {
                JSProf.LFD(21022, destroy);
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
                JSProf.LPD(20997, this, '_beingDestroyed')._beingDestroyed = JSProf.LRSP(20997, true);
                JSProf.LMC(20998, this, 'uninitialize').uninitialize();
                function destroy(w) {
                    if (JSProf.LGD(20999, w, 'destroyRecursive').destroyRecursive) {
                        JSProf.LMC(21001, w, 'destroyRecursive').destroyRecursive(JSProf.LRE(21000, preserveDom));
                    } else if (JSProf.LGD(21002, w, 'destroy').destroy) {
                        JSProf.LMC(21004, w, 'destroy').destroy(JSProf.LRE(21003, preserveDom));
                    }
                }
                // Back-compat, remove for 2.0
                JSProf.LMC(21007, array, 'forEach').forEach(JSProf.LGD(21005, this, '_connects')._connects, JSProf.LMC(21006, lang, 'hitch').hitch(this, "disconnect"));
                JSProf.LMC(21010, array, 'forEach').forEach(JSProf.LGD(21008, this, '_supportingWidgets')._supportingWidgets, JSProf.LRE(21009, destroy));
                // Destroy supporting widgets, but not child widgets under this.containerNode (for 2.0, destroy child widgets
                // here too).   if() statement is to guard against exception if destroy() called multiple times (see #15815).
                if (JSProf.LGD(21011, this, 'domNode').domNode) {
                    JSProf.LMC(21016, array, 'forEach').forEach(JSProf.LMC(21014, registry, 'findWidgets').findWidgets(JSProf.LGD(21012, this, 'domNode').domNode, JSProf.LGD(21013, this, 'containerNode').containerNode), JSProf.LRE(21015, destroy));
                }
                JSProf.LMC(21018, this, 'destroyRendering').destroyRendering(JSProf.LRE(21017, preserveDom));
                JSProf.LMC(21020, registry, 'remove').remove(JSProf.LGD(21019, this, 'id').id);
                JSProf.LPD(21021, this, '_destroyed')._destroyed = JSProf.LRSP(21021, true);
            }, 12),
            destroyRendering: JSProf.LNF(21037, function (preserveDom) {
                // summary:
                //		Destroys the DOM nodes associated with this widget.
                // preserveDom:
                //		If true, this method will leave the original DOM structure alone
                //		during tear-down. Note: this will not work with _Templated
                //		widgets yet.
                // tags:
                //		protected
                if (JSProf.LGD(21024, this, 'bgIframe').bgIframe) {
                    JSProf.LMC(21026, this.bgIframe, 'destroy').destroy(JSProf.LRE(21025, preserveDom));
                    delete this.bgIframe;
                }
                if (JSProf.LGD(21027, this, 'domNode').domNode) {
                    if (JSProf.LRE(21028, preserveDom)) {
                        JSProf.LMC(21030, domAttr, 'remove').remove(JSProf.LGD(21029, this, 'domNode').domNode, "widgetId");
                    } else {
                        JSProf.LMC(21032, domConstruct, 'destroy').destroy(JSProf.LGD(21031, this, 'domNode').domNode);
                    }
                    delete this.domNode;
                }
                if (JSProf.LGD(21033, this, 'srcNodeRef').srcNodeRef) {
                    if (!JSProf.LRE(21034, preserveDom)) {
                        JSProf.LMC(21036, domConstruct, 'destroy').destroy(JSProf.LGD(21035, this, 'srcNodeRef').srcNodeRef);
                    }
                    delete this.srcNodeRef;
                }
            }, 12),
            destroyDescendants: JSProf.LNF(21044, function (preserveDom) {
                // summary:
                //		Recursively destroy the children of this widget and their
                //		descendants.
                // preserveDom:
                //		If true, the preserveDom attribute is passed to all descendant
                //		widget's .destroy() method. Not for use with _Templated
                //		widgets.
                // get all direct descendants and destroy them recursively
                JSProf.LMC(21043, array, 'forEach').forEach(JSProf.LMC(21038, this, 'getChildren').getChildren(), JSProf.LNF(21042, function (widget) {
                    if (JSProf.LGD(21039, widget, 'destroyRecursive').destroyRecursive) {
                        JSProf.LMC(21041, widget, 'destroyRecursive').destroyRecursive(JSProf.LRE(21040, preserveDom));
                    }
                }, 12));
            }, 12),
            uninitialize: JSProf.LNF(21045, function () {
                // summary:
                //		Deprecated. Override destroy() instead to implement custom widget tear-down
                //		behavior.
                // tags:
                //		protected
                return false;
            }, 12),
            _setStyleAttr: JSProf.LNF(21058, function (value) {
                // summary:
                //		Sets the style attribute of the widget according to value,
                //		which is either a hash like {height: "5px", width: "3px"}
                //		or a plain string
                // description:
                //		Determines which node to set the style on based on style setting
                //		in attributeMap.
                // tags:
                //		protected
                var mapNode = JSProf.LGD(21046, this, 'domNode').domNode;
                // Note: technically we should revert any style setting made in a previous call
                // to his method, but that's difficult to keep track of.
                if (JSProf.LMC(21048, lang, 'isObject').isObject(JSProf.LRE(21047, value))) {
                    JSProf.LMC(21051, domStyle, 'set').set(JSProf.LRE(21049, mapNode), JSProf.LRE(21050, value));
                } else {
                    if (JSProf.LGD(21052, mapNode.style, 'cssText').cssText) {
                        mapNode.style.cssText += "; " + JSProf.LRE(21053, value);
                    } else {
                        JSProf.LPD(21055, mapNode.style, 'cssText').cssText = JSProf.LRSP(21055, JSProf.LRE(21054, value));
                    }
                }
                JSProf.LMC(21057, this, '_set')._set("style", JSProf.LRE(21056, value));
            }, 12),
            _attrToDom: JSProf.LNF(21103, function (attr, value, commands) {
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
                commands = JSProf.LWR(21062, commands, JSProf.LGD(21059, arguments, 'length').length >= 3 ? JSProf.LRE(21060, commands) : JSProf.LGE(21061, this.attributeMap, 'attr')[attr]);
                JSProf.LMC(21102, array, 'forEach').forEach(JSProf.LMC(21064, lang, 'isArray').isArray(JSProf.LRE(21063, commands)) ? JSProf.LRE(21065, commands) : JSProf.LNE(21067, [JSProf.LRE(21066, commands)], 10), JSProf.LNF(21101, function (command) {
                    // Get target node and what we are doing to that node
                    var mapNode = JSProf.LGE(21070, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LGD(21068, command, 'node').node || JSProf.LRE(21069, command) || "domNode")[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                    // DOM node
                    var type = JSProf.LGD(21071, command, 'type').type || "attribute";
                    // class, innerHTML, innerText, or attribute
                    switch (JSProf.LRE(21072, type)) {
                    case "attribute":
                        if (JSProf.LMC(21074, lang, 'isFunction').isFunction(JSProf.LRE(21073, value))) {
                            // functions execute in the context of the widget
                            value = JSProf.LWR(21077, value, JSProf.LMC(21076, lang, 'hitch').hitch(this, JSProf.LRE(21075, value)));
                        }
                        // Get the name of the DOM node attribute; usually it's the same
                        // as the name of the attribute in the widget (attr), but can be overridden.
                        // Also maps handler names to lowercase, like onSubmit --> onsubmit
                        var attrName = JSProf.LGD(21078, command, 'attribute').attribute ? JSProf.LGD(21079, command, 'attribute').attribute : JSProf.LMC(21081, /^on[A-Z][a-zA-Z]*$/, 'test').test(JSProf.LRE(21080, attr)) ? attr.toLowerCase() : JSProf.LRE(21082, attr);
                        if (JSProf.LGD(21083, mapNode, 'tagName').tagName) {
                            // Normal case, mapping to a DOMNode.  Note that modern browsers will have a mapNode.set()
                            // method, but for consistency we still call domAttr
                            JSProf.LMC(21087, domAttr, 'set').set(JSProf.LRE(21084, mapNode), JSProf.LRE(21085, attrName), JSProf.LRE(21086, value));
                        } else {
                            // mapping to a sub-widget
                            JSProf.LMC(21090, mapNode, 'set').set(JSProf.LRE(21088, attrName), JSProf.LRE(21089, value));
                        }
                        break;
                    case "innerText":
                        JSProf.LPD(21091, mapNode, 'innerHTML').innerHTML = JSProf.LRSP(21091, "");
                        JSProf.LMC(21094, mapNode, 'appendChild').appendChild(JSProf.LMC(21093, this.ownerDocument, 'createTextNode').createTextNode(JSProf.LRE(21092, value)));
                        break;
                    case "innerHTML":
                        JSProf.LPD(21096, mapNode, 'innerHTML').innerHTML = JSProf.LRSP(21096, JSProf.LRE(21095, value));
                        break;
                    case "class":
                        JSProf.LMC(21100, domClass, 'replace').replace(JSProf.LRE(21097, mapNode), JSProf.LRE(21098, value), JSProf.LGE(21099, this, 'attr')[attr]);
                        break;
                    }
                }, 12), this);
            }, 12),
            get: JSProf.LNF(21110, function (name) {
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
                var names = JSProf.LMC(21105, this, '_getAttrNames')._getAttrNames(JSProf.LRE(21104, name));
                return JSProf.LGE(21106, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] ? JSProf.LMC(21107, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g, 1)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd]() : JSProf.LMC(21109, this, '_get')._get(JSProf.LRE(21108, name));
            }, 12),
            set: JSProf.LNF(21154, function (name, value) {
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
                if (typeof JSProf.LRE(21111, name) === "object") {
                    for (var x in JSProf.LRE(21112, name)) {
                        JSProf.LMC(21115, this, 'set').set(JSProf.LRE(21113, x), JSProf.LGE(21114, name, 'x')[x]);
                    }
                    return this;
                }
                var names = JSProf.LMC(21117, this, '_getAttrNames')._getAttrNames(JSProf.LRE(21116, name)), setter = JSProf.LGE(21118, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.s)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                if (JSProf.LMC(21120, lang, 'isFunction').isFunction(JSProf.LRE(21119, setter))) {
                    // use the explicit setter
                    var result = JSProf.LMC(21122, setter, 'apply').apply(this, JSProf.LMC(21121, Array.prototype.slice, 'call').call(arguments, 1));
                } else {
                    // Mapping from widget attribute to DOMNode/subwidget attribute/value/etc.
                    // Map according to:
                    //		1. attributeMap setting, if one exists (TODO: attributeMap deprecated, remove in 2.0)
                    //		2. _setFooAttr: {...} type attribute in the widget (if one exists)
                    //		3. apply to focusNode or domNode if standard attribute name, excluding funcs like onClick.
                    // Checks if an attribute is a "standard attribute" by whether the DOMNode JS object has a similar
                    // attribute name (ex: accept-charset attribute matches jsObject.acceptCharset).
                    // Note also that Tree.focusNode() is a function not a DOMNode, so test for that.
                    var defaultNode = JSProf.LGD(21123, this, 'focusNode').focusNode && !JSProf.LMC(21125, lang, 'isFunction').isFunction(JSProf.LGD(21124, this, 'focusNode').focusNode) ? "focusNode" : "domNode", tag = JSProf.LGE(21126, this, 'defaultNode')[defaultNode] && JSProf.LGD(21127, this[defaultNode], 'tagName').tagName, attrsForTag = JSProf.LRE(21128, tag) && (JSProf.LGE(21129, tagAttrs, 'tag')[tag] || (JSProf.LPE(21132, tagAttrs, 'tag')[tag] = JSProf.LRPE(21132, JSProf.LFC(21131, getAttrs, false)(JSProf.LGE(21130, this, 'defaultNode')[defaultNode])))), map = JSProf.LRE(21133, name) in JSProf.LGD(21134, this, 'attributeMap').attributeMap ? JSProf.LGE(21135, this.attributeMap, 'name')[name] : JSProf.LGD(21136, names, 's').s in this ? JSProf.LGE(21137, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.s)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] : JSProf.LRE(21138, attrsForTag) && JSProf.LGD(21139, names, 'l').l in JSProf.LRE(21140, attrsForTag) && typeof JSProf.LRE(21141, value) != "function" || JSProf.LMC(21143, /^aria-|^data-|^role$/, 'test').test(JSProf.LRE(21142, name)) ? JSProf.LRE(21144, defaultNode) : null;
                    if (JSProf.LRE(21145, map) != null) {
                        JSProf.LMC(21149, this, '_attrToDom')._attrToDom(JSProf.LRE(21146, name), JSProf.LRE(21147, value), JSProf.LRE(21148, map));
                    }
                    JSProf.LMC(21152, this, '_set')._set(JSProf.LRE(21150, name), JSProf.LRE(21151, value));
                }
                return JSProf.LRE(21153, result) || this;
            }, 12),
            _attrPairNames: JSProf.LNE(21155, {}, 11),
            _getAttrNames: JSProf.LNF(21166, function (name) {
                // summary:
                //		Helper function for get() and set().
                //		Caches attribute name values so we don't do the string ops every time.
                // tags:
                //		private
                var apn = JSProf.LGD(21156, this, '_attrPairNames')._attrPairNames;
                if (JSProf.LGE(21157, apn, 'name')[name]) {
                    return JSProf.LGE(21158, apn, 'name')[name];
                }
                var uc = JSProf.LMC(21161, name, 'replace').replace(/^[a-z]|-[a-zA-Z]/g, JSProf.LNF(21160, function (c) {
                        return c.charAt(JSProf.LGD(21159, c, 'length').length - 1).toUpperCase();
                    }, 12));
                return JSProf.LPE(21165, apn, 'name')[name] = JSProf.LRPE(21165, JSProf.LNE(21164, {
                    n: name + "Node",
                    s: "_set" + JSProf.LRE(21162, uc) + "Attr",
                    g: "_get" + JSProf.LRE(21163, uc) + "Attr",
                    l: uc.toLowerCase()
                }, 11));
            }, 12),
            _set: JSProf.LNF(21183, function (name, value) {
                // summary:
                //		Helper function to set new value for specified property, and call handlers
                //		registered with watch() if the value has changed.
                var oldValue = JSProf.LGE(21167, this, 'name')[name];
                JSProf.LPE(21169, this, 'name')[name] = JSProf.LRPE(21169, JSProf.LRE(21168, value));
                if (JSProf.LGD(21170, this, '_created')._created && !JSProf.LFC(21173, isEqual, false)(JSProf.LRE(21171, oldValue), JSProf.LRE(21172, value))) {
                    if (JSProf.LGD(21174, this, '_watchCallbacks')._watchCallbacks) {
                        JSProf.LMC(21178, this, '_watchCallbacks')._watchCallbacks(JSProf.LRE(21175, name), JSProf.LRE(21176, oldValue), JSProf.LRE(21177, value));
                    }
                    JSProf.LMC(21182, this, 'emit').emit("attrmodified-" + JSProf.LRE(21179, name), JSProf.LNE(21181, {
                        detail: JSProf.LNE(21180, {
                            prevValue: oldValue,
                            newValue: value
                        }, 11)
                    }, 11));
                }
            }, 12),
            _get: JSProf.LNF(21185, function (name) {
                // summary:
                //		Helper function to get value for specified property stored by this._set(),
                //		i.e. for properties with custom setters.  Used mainly by custom getters.
                //
                //		For example, CheckBox._getValueAttr() calls this._get("value").
                // future: return name in this.props ? this.props[name] : this[name];
                return JSProf.LGE(21184, this, 'name')[name];
            }, 12),
            emit: JSProf.LNF(21212, function (type, eventObj, callbackArgs) {
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
                eventObj = JSProf.LWR(21188, eventObj, JSProf.LRE(21186, eventObj) || JSProf.LNE(21187, {}, 11));
                if (JSProf.LGD(21189, eventObj, 'bubbles').bubbles === undefined) {
                    JSProf.LPD(21190, eventObj, 'bubbles').bubbles = JSProf.LRSP(21190, true);
                }
                if (JSProf.LGD(21191, eventObj, 'cancelable').cancelable === undefined) {
                    JSProf.LPD(21192, eventObj, 'cancelable').cancelable = JSProf.LRSP(21192, true);
                }
                if (!JSProf.LGD(21193, eventObj, 'detail').detail) {
                    JSProf.LPD(21195, eventObj, 'detail').detail = JSProf.LRSP(21195, JSProf.LNE(21194, {}, 11));
                }
                JSProf.LPD(21196, eventObj.detail, 'widget').widget = JSProf.LRSP(21196, this);
                var ret, callback = JSProf.LGE(21198, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = "on" + JSProf.LRE(21197, type))[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                if (JSProf.LRE(21199, callback)) {
                    ret = JSProf.LWR(21205, ret, JSProf.LMC(21204, callback, 'apply').apply(this, JSProf.LRE(21200, callbackArgs) ? JSProf.LRE(21201, callbackArgs) : JSProf.LNE(21203, [JSProf.LRE(21202, eventObj)], 10)));
                }
                // Emit event, but avoid spurious emit()'s as parent sets properties on child during startup/destroy
                if (JSProf.LGD(21206, this, '_started')._started && !JSProf.LGD(21207, this, '_beingDestroyed')._beingDestroyed) {
                    JSProf.LMC(21210, on, 'emit').emit(JSProf.LGD(21208, this, 'domNode').domNode, type.toLowerCase(), JSProf.LRE(21209, eventObj));
                }
                return JSProf.LRE(21211, ret);
            }, 12),
            on: JSProf.LNF(21225, function (type, func) {
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
                var widgetMethod = JSProf.LMC(21214, this, '_onMap')._onMap(JSProf.LRE(21213, type));
                if (JSProf.LRE(21215, widgetMethod)) {
                    return JSProf.LMC(21218, aspect, 'after').after(this, JSProf.LRE(21216, widgetMethod), JSProf.LRE(21217, func), true);
                }
                // Otherwise, just listen for the event on this.domNode.
                return JSProf.LGE(21224, JSProf.LMC(21223, this, 'own').own(JSProf.LFC(21222, on, false)(JSProf.LGD(21219, this, 'domNode').domNode, JSProf.LRE(21220, type), JSProf.LRE(21221, func))), 0)[0];
            }, 12),
            _onMap: JSProf.LNF(21240, function (type) {
                // summary:
                //		Maps on() type parameter (ex: "mousemove") to method name (ex: "onMouseMove").
                //		If type is a synthetic event like touch.press then returns undefined.
                var ctor = JSProf.LGD(21226, this, 'constructor').constructor, map = JSProf.LGD(21227, ctor, '_onMap')._onMap;
                if (!JSProf.LRE(21228, map)) {
                    map = JSProf.LWR(21231, map, JSProf.LPD(21230, ctor, '_onMap')._onMap = JSProf.LRSP(21230, JSProf.LNE(21229, {}, 11)));
                    for (var attr in JSProf.LGD(21232, ctor, 'prototype').prototype) {
                        if (JSProf.LMC(21234, /^on/, 'test').test(JSProf.LRE(21233, attr))) {
                            JSProf.LPE(21237, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = JSProf.LMC(21235, attr, 'replace').replace(/^on/, "").toLowerCase())[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138] = JSProf.LRPE(21237, JSProf.LRE(21236, attr));
                        }
                    }
                }
                return JSProf.LGE(21239, map, JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138 = typeof JSProf.LRE(21238, type) == "string" && type.toLowerCase())[JSProf.TMPS.t2544a7c095cbdde4765cca3192459eff84b86138];    // String
            }, 12),
            toString: JSProf.LNF(21243, function () {
                // summary:
                //		Returns a string that represents the widget.
                // description:
                //		When a widget is cast to a string, this method will be used to generate the
                //		output. Currently, it does not implement any sort of reversible
                //		serialization.
                return '[Widget ' + JSProf.LGD(21241, this, 'declaredClass').declaredClass + ', ' + (JSProf.LGD(21242, this, 'id').id || 'NO ID') + ']';    // String
            }, 12),
            getChildren: JSProf.LNF(21248, function () {
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
                return JSProf.LGD(21244, this, 'containerNode').containerNode ? JSProf.LMC(21246, registry, 'findWidgets').findWidgets(JSProf.LGD(21245, this, 'containerNode').containerNode) : JSProf.LNE(21247, [], 10);    // dijit/_WidgetBase[]
            }, 12),
            getParent: JSProf.LNF(21251, function () {
                // summary:
                //		Returns the parent widget of this widget.
                return JSProf.LMC(21250, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LGD(21249, this.domNode, 'parentNode').parentNode);
            }, 12),
            connect: JSProf.LNF(21258, function (obj, event, method) {
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
                return JSProf.LGE(21257, JSProf.LMC(21256, this, 'own').own(JSProf.LMC(21255, connect, 'connect').connect(JSProf.LRE(21252, obj), JSProf.LRE(21253, event), this, JSProf.LRE(21254, method))), 0)[0];    // handle
            }, 12),
            disconnect: JSProf.LNF(21260, function (handle) {
                // summary:
                //		Deprecated, will be removed in 2.0, use handle.remove() instead.
                //
                //		Disconnects handle created by `connect`.
                // tags:
                //		protected
                JSProf.LMC(21259, handle, 'remove').remove();
            }, 12),
            subscribe: JSProf.LNF(21267, function (t, method) {
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
                return JSProf.LGE(21266, JSProf.LMC(21265, this, 'own').own(JSProf.LMC(21264, topic, 'subscribe').subscribe(JSProf.LRE(21261, t), JSProf.LMC(21263, lang, 'hitch').hitch(this, JSProf.LRE(21262, method)))), 0)[0];    // handle
            }, 12),
            unsubscribe: JSProf.LNF(21269, function (handle) {
                // summary:
                //		Deprecated, will be removed in 2.0, use handle.remove() instead.
                //
                //		Unsubscribes handle created by this.subscribe.
                //		Also removes handle from this widget's list of subscriptions
                // tags:
                //		protected
                JSProf.LMC(21268, handle, 'remove').remove();
            }, 12),
            isLeftToRight: JSProf.LNF(21274, function () {
                // summary:
                //		Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                // tags:
                //		protected
                return JSProf.LGD(21270, this, 'dir').dir ? JSProf.LGD(21271, this, 'dir').dir == "ltr" : JSProf.LMC(21273, domGeometry, 'isBodyLtr').isBodyLtr(JSProf.LGD(21272, this, 'ownerDocument').ownerDocument);    //Boolean
            }, 12),
            isFocusable: JSProf.LNF(21278, function () {
                // summary:
                //		Return true if this widget can currently be focused
                //		and false if not
                return JSProf.LGD(21275, this, 'focus').focus && JSProf.LMC(21277, domStyle, 'get').get(JSProf.LGD(21276, this, 'domNode').domNode, "display") != "none";
            }, 12),
            placeAt: JSProf.LNF(21307, function (reference, position) {
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
                var refWidget = !JSProf.LGD(21279, reference, 'tagName').tagName && JSProf.LMC(21281, registry, 'byId').byId(JSProf.LRE(21280, reference));
                if (JSProf.LRE(21282, refWidget) && JSProf.LGD(21283, refWidget, 'addChild').addChild && (!JSProf.LRE(21284, position) || typeof JSProf.LRE(21285, position) === "number")) {
                    // Adding this to refWidget and can use refWidget.addChild() to handle everything.
                    JSProf.LMC(21287, refWidget, 'addChild').addChild(this, JSProf.LRE(21286, position));
                } else {
                    // "reference" is a plain DOMNode, or we can't use refWidget.addChild().   Use domConstruct.place() and
                    // target refWidget.containerNode for nested placement (position==number, "first", "last", "only"), and
                    // refWidget.domNode otherwise ("after"/"before"/"replace").  (But not supported officially, see #14946.)
                    var ref = JSProf.LRE(21288, refWidget) && "domNode" in JSProf.LRE(21289, refWidget) ? JSProf.LGD(21290, refWidget, 'containerNode').containerNode && !JSProf.LMC(21292, /after|before|replace/, 'test').test(JSProf.LRE(21291, position) || "") ? JSProf.LGD(21293, refWidget, 'containerNode').containerNode : JSProf.LGD(21294, refWidget, 'domNode').domNode : JSProf.LMC(21297, dom, 'byId').byId(JSProf.LRE(21295, reference), JSProf.LGD(21296, this, 'ownerDocument').ownerDocument);
                    JSProf.LMC(21301, domConstruct, 'place').place(JSProf.LGD(21298, this, 'domNode').domNode, JSProf.LRE(21299, ref), JSProf.LRE(21300, position));
                    // Start this iff it has a parent widget that's already started.
                    // TODO: for 2.0 maybe it should also start the widget when this.getParent() returns null??
                    if (!JSProf.LGD(21302, this, '_started')._started && JSProf.LGD(21305, JSProf.LMC(21303, this, 'getParent').getParent() || JSProf.LNE(21304, {}, 11), '_started')._started) {
                        JSProf.LMC(21306, this, 'startup').startup();
                    }
                }
                return this;
            }, 12),
            defer: JSProf.LNF(21321, function (fcn, delay) {
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
                var timer = setTimeout(JSProf.LMC(21314, lang, 'hitch').hitch(this, JSProf.LNF(21313, function () {
                        if (!JSProf.LRE(21308, timer)) {
                            return;
                        }
                        timer = null;
                        if (!JSProf.LGD(21309, this, '_destroyed')._destroyed) {
                            JSProf.LFC(21312, JSProf.LMC(21311, lang, 'hitch').hitch(this, JSProf.LRE(21310, fcn)), false)();
                        }
                    }, 12)), JSProf.LRE(21315, delay) || 0);
                return JSProf.LNE(21320, {
                    remove: JSProf.LNF(21319, function () {
                        if (JSProf.LRE(21316, timer)) {
                            JSProf.LFC(21318, clearTimeout, false)(JSProf.LRE(21317, timer));
                            timer = null;
                        }
                        return null;    // so this works well: handle = handle.remove();
                    }, 12)
                }, 11);
            }, 12)
        }, 11));
    if (JSProf.LFC(21324, has, false)("dojo-bidi")) {
        JSProf.LMC(21326, _WidgetBase, 'extend').extend(JSProf.LRE(21325, _BidiMixin));
    }
    return JSProf.LRE(21327, _WidgetBase);
}, 12));