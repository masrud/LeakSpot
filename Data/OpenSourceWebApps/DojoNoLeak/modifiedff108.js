JSProf.LFC(37112, define, false)(JSProf.LNE(37021, [
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
], 10), JSProf.LNF(37111, function (aspect, config, connect, declare, has, kernel, lang, query, ready, registry, _WidgetBase, _OnDijitClickMixin, _FocusMixin) {
    JSProf.LFD(37109, connectToDomNode);
    JSProf.LFD(37110, aroundAdvice);
    // module:
    //		dijit/_Widget
    function connectToDomNode() {
    }
    // Trap dojo.connect() calls to connectToDomNode methods, and redirect to _Widget.on()
    function aroundAdvice(originalConnect) {
        return JSProf.LNF(37032, function (obj, event, scope, method) {
            if (JSProf.LRE(37022, obj) && typeof JSProf.LRE(37023, event) == "string" && JSProf.LGE(37024, obj, 'event')[event] == JSProf.LRE(37025, connectToDomNode)) {
                return JSProf.LMC(37029, obj, 'on').on(event.substring(2).toLowerCase(), JSProf.LMC(37028, lang, 'hitch').hitch(JSProf.LRE(37026, scope), JSProf.LRE(37027, method)));
            }
            return JSProf.LMC(37031, originalConnect, 'apply').apply(JSProf.LRE(37030, connect), arguments);
        }, 12);
    }
    JSProf.LMC(37035, aspect, 'around').around(JSProf.LRE(37033, connect), "connect", JSProf.LRE(37034, aroundAdvice));
    if (JSProf.LGD(37036, kernel, 'connect').connect) {
        JSProf.LMC(37039, aspect, 'around').around(JSProf.LRE(37037, kernel), "connect", JSProf.LRE(37038, aroundAdvice));
    }
    var _Widget = JSProf.LFC(37101, declare, false)("dijit._Widget", JSProf.LNE(37043, [
            JSProf.LRE(37040, _WidgetBase),
            JSProf.LRE(37041, _OnDijitClickMixin),
            JSProf.LRE(37042, _FocusMixin)
        ], 10), JSProf.LNE(37100, {
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
            constructor: JSProf.LNF(37052, function (params) {
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
                JSProf.LPD(37045, this, '_toConnect')._toConnect = JSProf.LRSP(37045, JSProf.LNE(37044, {}, 11));
                for (var name in JSProf.LRE(37046, params)) {
                    if (JSProf.LGE(37047, this, 'name')[name] === JSProf.LRE(37048, connectToDomNode)) {
                        JSProf.LPE(37051, this._toConnect, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = JSProf.LMC(37049, name, 'replace').replace(/^on/, "").toLowerCase())[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a] = JSProf.LRPE(37051, JSProf.LGE(37050, params, 'name')[name]);
                        delete params[name];
                    }
                }
            }, 12),
            postCreate: JSProf.LNF(37058, function () {
                JSProf.LMC(37053, this, 'inherited').inherited(arguments);
                // perform connection from this.domNode to user specified handlers (ex: onMouseMove)
                for (var name in JSProf.LGD(37054, this, '_toConnect')._toConnect) {
                    JSProf.LMC(37057, this, 'on').on(JSProf.LRE(37055, name), JSProf.LGE(37056, this._toConnect, 'name')[name]);
                }
                delete this._toConnect;
            }, 12),
            on: JSProf.LNF(37067, function (type, func) {
                if (JSProf.LGE(37061, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = JSProf.LMC(37060, this, '_onMap')._onMap(JSProf.LRE(37059, type)))[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] === JSProf.LRE(37062, connectToDomNode)) {
                    // Use connect.connect() rather than on() to get handling for "onmouseenter" on non-IE,
                    // normalization of onkeypress/onkeydown to behave like firefox, etc.
                    // Also, need to specify context as "this" rather than the default context of the DOMNode
                    // Remove in 2.0.
                    return JSProf.LMC(37065, connect, 'connect').connect(JSProf.LGD(37063, this, 'domNode').domNode, type.toLowerCase(), this, JSProf.LRE(37064, func));
                }
                return JSProf.LMC(37066, this, 'inherited').inherited(arguments);
            }, 12),
            _setFocusedAttr: JSProf.LNF(37072, function (val) {
                // Remove this method in 2.0 (or sooner), just here to set _focused == focused, for back compat
                // (but since it's a private variable we aren't required to keep supporting it).
                JSProf.LPD(37069, this, '_focused')._focused = JSProf.LRSP(37069, JSProf.LRE(37068, val));
                JSProf.LMC(37071, this, '_set')._set("focused", JSProf.LRE(37070, val));
            }, 12),
            setAttribute: JSProf.LNF(37078, function (attr, value) {
                // summary:
                //		Deprecated.  Use set() instead.
                // tags:
                //		deprecated
                JSProf.LMC(37074, kernel, 'deprecated').deprecated(JSProf.LGD(37073, this, 'declaredClass').declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
                JSProf.LMC(37077, this, 'set').set(JSProf.LRE(37075, attr), JSProf.LRE(37076, value));
            }, 12),
            attr: JSProf.LNF(37085, function (name, value) {
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
                var args = JSProf.LGD(37079, arguments, 'length').length;
                if (JSProf.LRE(37080, args) >= 2 || typeof JSProf.LRE(37081, name) === "object") {
                    // setter
                    return JSProf.LMC(37082, this.set, 'apply').apply(this, arguments);
                } else {
                    // getter
                    return JSProf.LMC(37084, this, 'get').get(JSProf.LRE(37083, name));
                }
            }, 12),
            getDescendants: JSProf.LNF(37094, function () {
                // summary:
                //		Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                //		This method should generally be avoided as it returns widgets declared in templates, which are
                //		supposed to be internal/hidden, but it's left here for back-compat reasons.
                JSProf.LMC(37087, kernel, 'deprecated').deprecated(JSProf.LGD(37086, this, 'declaredClass').declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
                return JSProf.LGD(37088, this, 'containerNode').containerNode ? JSProf.LMC(37092, JSProf.LFC(37090, query, false)('[widgetId]', JSProf.LGD(37089, this, 'containerNode').containerNode), 'map').map(JSProf.LGD(37091, registry, 'byNode').byNode) : JSProf.LNE(37093, [], 10);    // dijit/_WidgetBase[]
            }, 12),
            _onShow: JSProf.LNF(37096, function () {
                // summary:
                //		Internal method called when this widget is made visible.
                //		See `onShow` for details.
                JSProf.LMC(37095, this, 'onShow').onShow();
            }, 12),
            onShow: JSProf.LNF(37097, function () {
            }, 12),
            onHide: JSProf.LNF(37098, function () {
            }, 12),
            onClose: JSProf.LNF(37099, function () {
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
    if (JSProf.LFC(37102, has, false)("dijit-legacy-requires")) {
        JSProf.LFC(37107, ready, false)(0, JSProf.LNF(37106, function () {
            var requires = JSProf.LNE(37103, ["dijit/_base"], 10);
            JSProf.LFC(37105, require, false)(JSProf.LRE(37104, requires));    // use indirection so modules not rolled into a build
        }, 12));
    }
    return JSProf.LRE(37108, _Widget);
}, 12));