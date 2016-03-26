JSProf.LFC(26387, define, false)(JSProf.LNE(26309, [
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Stateful",
    "./_atBindingMixin"
], 10), JSProf.LNF(26386, function (declare, lang, Stateful, _atBindingMixin) {
    return JSProf.LFC(26385, declare, false)("dojox.mvc._Controller", JSProf.LNE(26312, [
        JSProf.LRE(26310, Stateful),
        JSProf.LRE(26311, _atBindingMixin)
    ], 10), JSProf.LNE(26384, {
        postscript: JSProf.LNF(26339, function (params, srcNodeRef) {
            // summary:
            //		If this object is not called from Dojo parser, starts this up right away.
            //		Also, if widget registry is available, register this object.
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            if (JSProf.LGD(26313, this, '_applyAttributes')._applyAttributes) {
                return JSProf.LMC(26314, this, 'inherited').inherited(arguments);
            }
            // Look for dojox/mvc/at handles in the parameters
            JSProf.LMC(26317, this, '_dbpostscript')._dbpostscript(JSProf.LRE(26315, params), JSProf.LRE(26316, srcNodeRef));
            // Merge the parameters to this
            if (JSProf.LRE(26318, params)) {
                JSProf.LPD(26320, this, 'params').params = JSProf.LRSP(26320, JSProf.LRE(26319, params));
                for (var s in JSProf.LRE(26321, params)) {
                    JSProf.LMC(26324, this, 'set').set(JSProf.LRE(26322, s), JSProf.LGE(26323, params, 's')[s]);
                }
            }
            // Add this instance to dijit/registry, if it's available
            var registry;
            try {
                // Usage of dijit/registry module is optional. Do not use it if it's not already loaded.
                registry = JSProf.LWR(26326, registry, JSProf.LFC(26325, require, false)("dijit/registry"));
                JSProf.LPD(26333, this, 'id').id = JSProf.LRSP(26333, JSProf.LGD(26327, this, 'id').id || JSProf.LGD(26330, JSProf.LRE(26328, srcNodeRef) || JSProf.LNE(26329, {}, 11), 'id').id || JSProf.LMC(26332, registry, 'getUniqueId').getUniqueId(JSProf.LMC(26331, this.declaredClass, 'replace').replace(/\./g, "_")));
                JSProf.LMC(26334, registry, 'add').add(this);
            } catch (e) {
            }
            if (!JSProf.LRE(26335, srcNodeRef)) {
                // If this instance is not created via Dojo parser, start this up right away
                JSProf.LMC(26336, this, 'startup').startup();
            } else {
                // If this is created via Dojo parser, set widgetId attribute so that destroyDescendants() of parent widget works
                JSProf.LMC(26338, srcNodeRef, 'setAttribute').setAttribute("widgetId", JSProf.LGD(26337, this, 'id').id);
            }
        }, 12),
        startup: JSProf.LNF(26343, function () {
            // summary:
            //		Starts up data binding as this object starts up.
            if (!JSProf.LGD(26340, this, '_applyAttributes')._applyAttributes) {
                JSProf.LMC(26341, this, '_startAtWatchHandles')._startAtWatchHandles();
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            JSProf.LMC(26342, this, 'inherited').inherited(arguments);
        }, 12),
        destroy: JSProf.LNF(26353, function () {
            // summary:
            //		Stops data binding as this object is destroyed.
            JSProf.LPD(26344, this, '_beingDestroyed')._beingDestroyed = JSProf.LRSP(26344, true);
            if (!JSProf.LGD(26345, this, '_applyAttributes')._applyAttributes) {
                JSProf.LMC(26346, this, '_stopAtWatchHandles')._stopAtWatchHandles();
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            JSProf.LMC(26347, this, 'inherited').inherited(arguments);
            if (!JSProf.LGD(26348, this, '_applyAttributes')._applyAttributes) {
                try {
                    // Remove this instance from dijit/registry
                    // Usage of dijit/registry module is optional. Do not use it if it's not already loaded.
                    JSProf.LMC(26351, JSProf.LFC(26349, require, false)("dijit/registry"), 'remove').remove(JSProf.LGD(26350, this, 'id').id);
                } catch (e) {
                }
            }
            JSProf.LPD(26352, this, '_destroyed')._destroyed = JSProf.LRSP(26352, true);
        }, 12),
        set: JSProf.LNF(26377, function (name, value) {
            // summary:
            //		If the value given is dojox/mvc/at handle, use it for data binding.
            //		Otherwise, if setter function is there, use it.
            //		Otherwise, set the value to the data model or to this object.
            // name: String
            //		The property name.
            // value: Anything
            //		The property value.
            // If an object is used, iterate through object
            if (typeof JSProf.LRE(26354, name) === "object") {
                for (var x in JSProf.LRE(26355, name)) {
                    if (JSProf.LMC(26357, name, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(26356, x))) {
                        JSProf.LMC(26360, this, 'set').set(JSProf.LRE(26358, x), JSProf.LGE(26359, name, 'x')[x]);
                    }
                }
                return this;
            }
            if (!JSProf.LGD(26361, this, '_applyAttributes')._applyAttributes) {
                if (JSProf.LGD(26364, JSProf.LRE(26362, value) || JSProf.LNE(26363, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                    // If dojox/mvc/at handle is given, use it for data binding
                    return JSProf.LMC(26367, this, '_setAtWatchHandle')._setAtWatchHandle(JSProf.LRE(26365, name), JSProf.LRE(26366, value));
                } else {
                    // Otherwise align the setter interface to _WidgetBase
                    var setterName = "_set" + JSProf.LMC(26369, name, 'replace').replace(/^[a-z]/, JSProf.LNF(26368, function (c) {
                            return c.toUpperCase();
                        }, 12)) + "Attr";
                    if (JSProf.LGE(26370, this, 'setterName')[setterName]) {
                        JSProf.LMC(26372, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = setterName, 1)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd](JSProf.LRE(26371, value));
                    } else {
                        JSProf.LMC(26375, this, '_set')._set(JSProf.LRE(26373, name), JSProf.LRE(26374, value));
                    }
                    return this;
                }
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            return JSProf.LMC(26376, this, 'inherited').inherited(arguments);
        }, 12),
        _set: JSProf.LNF(26383, function (name, value) {
            // summary:
            //		Implement _set() interface so that _set() behavior is consistent whether the instance inherits _WidgetBase or not.
            //		If the instance does not inherit _WidgetBase, use dojo/Stateful/_changeAttrValue() that's equivalent to dijit/_WidgetBase._set().
            // name: String
            //		The property name.
            // value: Anything
            //		The property value.
            if (!JSProf.LGD(26378, this, '_applyAttributes')._applyAttributes) {
                // Call dojo/Stateful/_changeAttrValue() that's equivalent to dijit/_WidgetBase/_set()
                return JSProf.LMC(26381, this, '_changeAttrValue')._changeAttrValue(JSProf.LRE(26379, name), JSProf.LRE(26380, value));
            }
            // If there is dijit/_WidgetBase in upper class hierarchy (happens when this descendant is mixed into a widget), let _WidgetBase do all work
            return JSProf.LMC(26382, this, 'inherited').inherited(arguments);
        }, 12)
    }, 11));
}, 12));