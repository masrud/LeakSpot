JSProf.LFC(37270, define, false)(JSProf.LNE(37179, [
    "dojo/aspect",
    "dojo/_base/config",
    "dojo/_base/connect",
    "dojo/_base/declare",
    "dojo/has",
    "dojo/_base/kernel",
    "dojo/_base/lang",
    "dojo/query",
    "dojo/ready",
    "./registry",
    "./_WidgetBase",
    "./_OnDijitClickMixin",
    "./_FocusMixin",
    "dojo/uacss",
    "./hccss"
], 10), JSProf.LNF(37269, function (aspect, config, connect, declare, has, kernel, lang, query, ready, registry, _WidgetBase, _OnDijitClickMixin, _FocusMixin) {
    JSProf.LFD(37267, connectToDomNode);
    JSProf.LFD(37268, aroundAdvice);
    // module:
    //		dijit/_Widget
    function connectToDomNode() {
    }
    // Trap dojo.connect() calls to connectToDomNode methods, and redirect to _Widget.on()
    function aroundAdvice(originalConnect) {
        return JSProf.LNF(37190, function (obj, event, scope, method) {
            if (JSProf.LRE(37180, obj) && typeof JSProf.LRE(37181, event) == "string" && JSProf.LGE(37182, obj, 'event')[event] == JSProf.LRE(37183, connectToDomNode)) {
                return JSProf.LMC(37187, obj, 'on').on(event.substring(2).toLowerCase(), JSProf.LMC(37186, lang, 'hitch').hitch(JSProf.LRE(37184, scope), JSProf.LRE(37185, method)));
            }
            return JSProf.LMC(37189, originalConnect, 'apply').apply(JSProf.LRE(37188, connect), arguments);
        }, 12);
    }
    JSProf.LMC(37193, aspect, 'around').around(JSProf.LRE(37191, connect), "connect", JSProf.LRE(37192, aroundAdvice));
    if (JSProf.LGD(37194, kernel, 'connect').connect) {
        JSProf.LMC(37197, aspect, 'around').around(JSProf.LRE(37195, kernel), "connect", JSProf.LRE(37196, aroundAdvice));
    }
    var _Widget = JSProf.LFC(37259, declare, false)("dijit._Widget", JSProf.LNE(37201, [
            JSProf.LRE(37198, _WidgetBase),
            JSProf.LRE(37199, _OnDijitClickMixin),
            JSProf.LRE(37200, _FocusMixin)
        ], 10), JSProf.LNE(37258, {
            onClick: connectToDomNode,
            onDblClick: connectToDomNode,
            onKeyDown: connectToDomNode,
            onKeyPress: connectToDomNode,
            onKeyUp: connectToDomNode,
            onMouseDown: connectToDomNode,
            onMouseMove: connectToDomNode,
            onMouseOut: connectToDomNode,
            onMouseOver: connectToDomNode,
            onMouseLeave: connectToDomNode,
            onMouseEnter: connectToDomNode,
            onMouseUp: connectToDomNode,
            constructor: JSProf.LNF(37210, function (params) {
                // summary:
                //		Create the widget.
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
                // extract parameters like onMouseMove that should connect directly to this.domNode
                JSProf.LPD(37203, this, '_toConnect')._toConnect = JSProf.LRSP(37203, JSProf.LNE(37202, {}, 11));
                for (var name in JSProf.LRE(37204, params)) {
                    if (JSProf.LGE(37205, this, 'name')[name] === JSProf.LRE(37206, connectToDomNode)) {
                        JSProf.LPE(37209, this._toConnect, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = JSProf.LMC(37207, name, 'replace').replace(/^on/, "").toLowerCase())[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a] = JSProf.LRPE(37209, JSProf.LGE(37208, params, 'name')[name]);
                        delete params[name];
                    }
                }
            }, 12),
            postCreate: JSProf.LNF(37216, function () {
                JSProf.LMC(37211, this, 'inherited').inherited(arguments);
                // perform connection from this.domNode to user specified handlers (ex: onMouseMove)
                for (var name in JSProf.LGD(37212, this, '_toConnect')._toConnect) {
                    JSProf.LMC(37215, this, 'on').on(JSProf.LRE(37213, name), JSProf.LGE(37214, this._toConnect, 'name')[name]);
                }
                delete this._toConnect;
            }, 12),
            on: JSProf.LNF(37225, function (type, func) {
                if (JSProf.LGE(37219, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LMC(37218, this, '_onMap')._onMap(JSProf.LRE(37217, type)))[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] === JSProf.LRE(37220, connectToDomNode)) {
                    // Use connect.connect() rather than on() to get handling for "onmouseenter" on non-IE,
                    // normalization of onkeypress/onkeydown to behave like firefox, etc.
                    // Also, need to specify context as "this" rather than the default context of the DOMNode
                    // Remove in 2.0.
                    return JSProf.LMC(37223, connect, 'connect').connect(JSProf.LGD(37221, this, 'domNode').domNode, type.toLowerCase(), this, JSProf.LRE(37222, func));
                }
                return JSProf.LMC(37224, this, 'inherited').inherited(arguments);
            }, 12),
            _setFocusedAttr: JSProf.LNF(37230, function (val) {
                // Remove this method in 2.0 (or sooner), just here to set _focused == focused, for back compat
                // (but since it's a private variable we aren't required to keep supporting it).
                JSProf.LPD(37227, this, '_focused')._focused = JSProf.LRSP(37227, JSProf.LRE(37226, val));
                JSProf.LMC(37229, this, '_set')._set("focused", JSProf.LRE(37228, val));
            }, 12),
            setAttribute: JSProf.LNF(37236, function (attr, value) {
                // summary:
                //		Deprecated.  Use set() instead.
                // tags:
                //		deprecated
                JSProf.LMC(37232, kernel, 'deprecated').deprecated(JSProf.LGD(37231, this, 'declaredClass').declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
                JSProf.LMC(37235, this, 'set').set(JSProf.LRE(37233, attr), JSProf.LRE(37234, value));
            }, 12),
            attr: JSProf.LNF(37243, function (name, value) {
                // summary:
                //		This method is deprecated, use get() or set() directly.
                // name:
                //		The property to get or set. If an object is passed here and not
                //		a string, its keys are used as names of attributes to be set
                //		and the value of the object as values to set in the widget.
                // value:
                //		Optional. If provided, attr() operates as a setter. If omitted,
                //		the current value of the named property is returned.
                // tags:
                //		deprecated
                var args = JSProf.LGD(37237, arguments, 'length').length;
                if (JSProf.LRE(37238, args) >= 2 || typeof JSProf.LRE(37239, name) === "object") {
                    // setter
                    return JSProf.LMC(37240, this.set, 'apply').apply(this, arguments);
                } else {
                    // getter
                    return JSProf.LMC(37242, this, 'get').get(JSProf.LRE(37241, name));
                }
            }, 12),
            getDescendants: JSProf.LNF(37252, function () {
                // summary:
                //		Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                //		This method should generally be avoided as it returns widgets declared in templates, which are
                //		supposed to be internal/hidden, but it's left here for back-compat reasons.
                JSProf.LMC(37245, kernel, 'deprecated').deprecated(JSProf.LGD(37244, this, 'declaredClass').declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
                return JSProf.LGD(37246, this, 'containerNode').containerNode ? JSProf.LMC(37250, JSProf.LFC(37248, query, false)('[widgetId]', JSProf.LGD(37247, this, 'containerNode').containerNode), 'map').map(JSProf.LGD(37249, registry, 'byNode').byNode) : JSProf.LNE(37251, [], 10);    // dijit/_WidgetBase[]
            }, 12),
            _onShow: JSProf.LNF(37254, function () {
                // summary:
                //		Internal method called when this widget is made visible.
                //		See `onShow` for details.
                JSProf.LMC(37253, this, 'onShow').onShow();
            }, 12),
            onShow: JSProf.LNF(37255, function () {
            }, 12),
            onHide: JSProf.LNF(37256, function () {
            }, 12),
            onClose: JSProf.LNF(37257, function () {
                // summary:
                //		Called when this widget is being displayed as a popup (ex: a Calendar popped
                //		up from a DateTextBox), and it is hidden.
                //		This is called from the dijit.popup code, and should not be called directly.
                //
                //		Also used as a parameter for children of `dijit/layout/StackContainer` or subclasses.
                //		Callback if a user tries to close the child.   Child will be closed if this function returns true.
                // tags:
                //		extension
                return true;    // Boolean
            }, 12)
        }, 11));
    // For back-compat, remove in 2.0.
    if (JSProf.LFC(37260, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(37265, ready, false)(0, JSProf.LNF(37264, function () {
            var requires = JSProf.LNE(37261, ["dijit/_base"], 10);
            JSProf.LFC(37263, require, false)(JSProf.LRE(37262, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    return JSProf.LRE(37266, _Widget);
}, 12));