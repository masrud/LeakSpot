JSProf.LFC(26389, define, false)(JSProf.LNE(26311, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Stateful",
    "./_atBindingMixin"
], 10), JSProf.LNF(26388, function (declare, lang, Stateful, _atBindingMixin) {
    return JSProf.LFC(26387, declare, false)("dojox.mvc._Controller", JSProf.LNE(26314, [
        JSProf.LRE(26312, Stateful),
        JSProf.LRE(26313, _atBindingMixin)
    ], 10), JSProf.LNE(26386, {
        postscript: JSProf.LNF(26341, function (params, srcNodeRef) {
            // summary:
            //		If this object is not called from Dojo parser, starts this up right away.
            //		Also, if widget registry is available, register this object.
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            if (JSProf.LGD(26315, this, '_applyAttributes')._applyAttributes) {
                return JSProf.LMC(26316, this, 'inherited').inherited(arguments);
            }
            // Look for dojox/mvc/at handles in the parameters
            JSProf.LMC(26319, this, '_dbpostscript')._dbpostscript(JSProf.LRE(26317, params), JSProf.LRE(26318, srcNodeRef));
            // Merge the parameters to this
            if (JSProf.LRE(26320, params)) {
                JSProf.LPD(26322, this, 'params').params = JSProf.LRSP(26322, JSProf.LRE(26321, params));
                for (var s in JSProf.LRE(26323, params)) {
                    JSProf.LMC(26326, this, 'set').set(JSProf.LRE(26324, s), JSProf.LGE(26325, params, 's')[s]);
                }
            }
            // Add this instance to dijit/registry, if it's available
            var registry;
            try {
                // Usage of dijit/registry module is optional. Do not use it if it's not already loaded.
                registry = JSProf.LWR(26328, registry, JSProf.LFC(26327, require, false)("dijit/registry"));
                JSProf.LPD(26335, this, 'id').id = JSProf.LRSP(26335, JSProf.LGD(26329, this, 'id').id || JSProf.LGD(26332, JSProf.LRE(26330, srcNodeRef) || JSProf.LNE(26331, {}, 11), 'id').id || JSProf.LMC(26334, registry, 'getUniqueId').getUniqueId(JSProf.LMC(26333, this.declaredClass, 'replace').replace(/\./g, "_")));
                JSProf.LMC(26336, registry, 'add').add(this);
            } catch (e) {
            }
            if (!JSProf.LRE(26337, srcNodeRef)) {
                // If this instance is not created via Dojo parser, start this up right away
                JSProf.LMC(26338, this, 'startup').startup();
            } else {
                // If this is created via Dojo parser, set widgetId attribute so that destroyDescendants() of parent widget works
                JSProf.LMC(26340, srcNodeRef, 'setAttribute').setAttribute("widgetId", JSProf.LGD(26339, this, 'id').id);
            }
        }, 12),
        startup: JSProf.LNF(26345, function () {
            // summary:
            //		Starts up data binding as this object starts up.
            if (!JSProf.LGD(26342, this, '_applyAttributes')._applyAttributes) {
                JSProf.LMC(26343, this, '_startAtWatchHandles')._startAtWatchHandles();
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            JSProf.LMC(26344, this, 'inherited').inherited(arguments);
        }, 12),
        destroy: JSProf.LNF(26355, function () {
            // summary:
            //		Stops data binding as this object is destroyed.
            JSProf.LPD(26346, this, '_beingDestroyed')._beingDestroyed = JSProf.LRSP(26346, true);
            if (!JSProf.LGD(26347, this, '_applyAttributes')._applyAttributes) {
                JSProf.LMC(26348, this, '_stopAtWatchHandles')._stopAtWatchHandles();
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            JSProf.LMC(26349, this, 'inherited').inherited(arguments);
            if (!JSProf.LGD(26350, this, '_applyAttributes')._applyAttributes) {
                try {
                    // Remove this instance from dijit/registry
                    // Usage of dijit/registry module is optional. Do not use it if it's not already loaded.
                    JSProf.LMC(26353, JSProf.LFC(26351, require, false)("dijit/registry"), 'remove').remove(JSProf.LGD(26352, this, 'id').id);
                } catch (e) {
                }
            }
            JSProf.LPD(26354, this, '_destroyed')._destroyed = JSProf.LRSP(26354, true);
        }, 12),
        set: JSProf.LNF(26379, function (name, value) {
            // summary:
            //		If the value given is dojox/mvc/at handle, use it for data binding.
            //		Otherwise, if setter function is there, use it.
            //		Otherwise, set the value to the data model or to this object.
            // name: String
            //		The property name.
            // value: Anything
            //		The property value.
            // If an object is used, iterate through object
            if (typeof JSProf.LRE(26356, name) === "object") {
                for (var x in JSProf.LRE(26357, name)) {
                    if (JSProf.LMC(26359, name, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(26358, x))) {
                        JSProf.LMC(26362, this, 'set').set(JSProf.LRE(26360, x), JSProf.LGE(26361, name, 'x')[x]);
                    }
                }
                return this;
            }
            if (!JSProf.LGD(26363, this, '_applyAttributes')._applyAttributes) {
                if (JSProf.LGD(26366, JSProf.LRE(26364, value) || JSProf.LNE(26365, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                    // If dojox/mvc/at handle is given, use it for data binding
                    return JSProf.LMC(26369, this, '_setAtWatchHandle')._setAtWatchHandle(JSProf.LRE(26367, name), JSProf.LRE(26368, value));
                } else {
                    // Otherwise align the setter interface to _WidgetBase
                    var setterName = "_set" + JSProf.LMC(26371, name, 'replace').replace(/^[a-z]/, JSProf.LNF(26370, function (c) {
                            return c.toUpperCase();
                        }, 12)) + "Attr";
                    if (JSProf.LGE(26372, this, 'setterName')[setterName]) {
                        JSProf.LMC(26374, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = setterName, 1)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd](JSProf.LRE(26373, value));
                    } else {
                        JSProf.LMC(26377, this, '_set')._set(JSProf.LRE(26375, name), JSProf.LRE(26376, value));
                    }
                    return this;
                }
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            return JSProf.LMC(26378, this, 'inherited').inherited(arguments);
        }, 12),
        _set: JSProf.LNF(26385, function (name, value) {
            // summary:
            //		Implement _set() interface so that _set() behavior is consistent whether the instance inherits _WidgetBase or not.
            //		If the instance does not inherit _WidgetBase, use dojo/Stateful/_changeAttrValue() that's equivalent to dijit/_WidgetBase._set().
            // name: String
            //		The property name.
            // value: Anything
            //		The property value.
            if (!JSProf.LGD(26380, this, '_applyAttributes')._applyAttributes) {
                // Call dojo/Stateful/_changeAttrValue() that's equivalent to dijit/_WidgetBase/_set()
                return JSProf.LMC(26383, this, '_changeAttrValue')._changeAttrValue(JSProf.LRE(26381, name), JSProf.LRE(26382, value));
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            return JSProf.LMC(26384, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));