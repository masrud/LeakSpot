JSProf.LFC(26631, define, false)(JSProf.LNE(26494, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Stateful",
    "./_Controller"
], 10), JSProf.LNF(26630, function (array, declare, lang, Stateful, _Controller) {
    return JSProf.LFC(26629, declare, false)("dojox.mvc.ModelRefController", JSProf.LRE(26495, _Controller), JSProf.LNE(26628, {
        ownProps: null,
        _refModelProp: "model",
        _refInModelProp: "model",
        model: null,
        postscript: JSProf.LNF(26502, function (params, srcNodeRef) {
            // summary:
            //		Sets _relTargetProp so that the property specified by _refModelProp is used for relative data binding.
            JSProf.LPD(26500, this, '_relTargetProp')._relTargetProp = JSProf.LRSP(26500, JSProf.LGD(26498, JSProf.LRE(26496, params) || JSProf.LNE(26497, {}, 11), '_refModelProp')._refModelProp || JSProf.LGD(26499, this, '_refModelProp')._refModelProp);
            JSProf.LMC(26501, this, 'inherited').inherited(arguments);
        }, 12),
        get: JSProf.LNF(26512, function (name) {
            // summary:
            //		If getter function is there, use it. Otherwise, get the data from data model of this object.
            // name: String
            //		The property name.
            if (!JSProf.LMC(26504, this, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26503, name))) {
                var model = JSProf.LGE(26505, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                return !JSProf.LRE(26506, model) ? void 0 : JSProf.LGD(26507, model, 'get').get ? JSProf.LMC(26509, model, 'get').get(JSProf.LRE(26508, name)) : JSProf.LGE(26510, model, 'name')[name];
            }
            return JSProf.LMC(26511, this, 'inherited').inherited(arguments);
        }, 12),
        _set: JSProf.LNF(26524, function (name, value) {
            // summary:
            //		Set the value to the data model or to this object.
            // name: String
            //		The property name.
            // value: Anything
            //		The property value.
            if (!JSProf.LMC(26514, this, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26513, name))) {
                var model = JSProf.LGE(26515, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                JSProf.LRE(26516, model) && (JSProf.LGD(26517, model, 'set').set ? JSProf.LMC(26520, model, 'set').set(JSProf.LRE(26518, name), JSProf.LRE(26519, value)) : JSProf.LPE(26522, model, 'name')[name] = JSProf.LRPE(26522, JSProf.LRE(26521, value)));
                return this;
            }
            return JSProf.LMC(26523, this, 'inherited').inherited(arguments);
        }, 12),
        watch: JSProf.LNF(26614, function (name, callback) {
            JSProf.LFD(26612, watchPropertiesInModel);
            JSProf.LFD(26613, reflectChangeInModel);
            // summary:
            //		Watch a property in the data model or in this object.
            // name: String?
            //		The property name.
            // callback: Function
            //		The callback function.
            if (JSProf.LMC(26526, this, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26525, name))) {
                return JSProf.LMC(26527, this, 'inherited').inherited(arguments);
            }
            if (!JSProf.LRE(26528, callback)) {
                callback = JSProf.LWR(26530, callback, JSProf.LRE(26529, name));
                name = null;
            }
            var hm = null, hp = null, _self = this;
            function watchPropertiesInModel(model) {
                // summary:
                //		Watch properties in referred model.
                // model: dojo/Stateful
                //		The model to watch for.
                // Unwatch properties of older model.
                if (JSProf.LRE(26531, hp)) {
                    JSProf.LMC(26532, hp, 'unwatch').unwatch();
                }
                // Watch properties of newer model.
                if (JSProf.LRE(26533, model) && JSProf.LMC(26535, lang, 'isFunction').isFunction(JSProf.LGD(26534, model, 'set').set) && JSProf.LMC(26537, lang, 'isFunction').isFunction(JSProf.LGD(26536, model, 'watch').watch)) {
                    hp = JSProf.LWR(26551, hp, JSProf.LMC(26550, model.watch, 'apply').apply(JSProf.LRE(26538, model), (JSProf.LRE(26539, name) ? JSProf.LNE(26541, [JSProf.LRE(26540, name)], 10) : JSProf.LNE(26542, [], 10)).concat(JSProf.LNE(26549, [JSProf.LNF(26548, function (name, old, current) {
                            JSProf.LMC(26547, callback, 'call').call(JSProf.LRE(26543, _self), JSProf.LRE(26544, name), JSProf.LRE(26545, old), JSProf.LRE(26546, current));
                        }, 12)], 10))));
                }
            }
            function reflectChangeInModel(old, current) {
                // summary:
                //		Upon change in model, detect change in properties, and call watch callbacks.
                // old: dojo/Stateful
                //		The older model.
                // current: dojo/Stateful
                //		The newer model.
                // Gather list of properties to notify change in value as model changes.
                var props = JSProf.LNE(26552, {}, 11);
                if (!JSProf.LRE(26553, name)) {
                    // If all properties are being watched, find out all properties from older model as well as from newer model.
                    JSProf.LMC(26573, array, 'forEach').forEach(JSProf.LNE(26556, [
                        JSProf.LRE(26554, old),
                        JSProf.LRE(26555, current)
                    ], 10), JSProf.LNF(26572, function (model) {
                        var list = JSProf.LRE(26557, model) && JSProf.LMC(26558, model, 'get').get("properties");
                        if (JSProf.LRE(26559, list)) {
                            // If the model explicitly specifies the list of properties, use it.
                            JSProf.LMC(26565, array, 'forEach').forEach(JSProf.LRE(26560, list), JSProf.LNF(26564, function (item) {
                                if (!JSProf.LMC(26562, _self, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26561, item))) {
                                    JSProf.LPE(26563, props, 'item')[item] = JSProf.LRPE(26563, 1);
                                }
                            }, 12));
                        } else {
                            // Otherwise, iterate through own properties.
                            for (var s in JSProf.LRE(26566, model)) {
                                if (JSProf.LMC(26568, model, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(26567, s)) && !JSProf.LMC(26570, _self, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26569, s))) {
                                    JSProf.LPE(26571, props, 's')[s] = JSProf.LRPE(26571, 1);
                                }
                            }
                        }
                    }, 12));
                } else {
                    JSProf.LPE(26574, props, 'name')[name] = JSProf.LRPE(26574, 1);
                }
                // Call watch callbacks for properties.
                for (var s in JSProf.LRE(26575, props)) {
                    JSProf.LMC(26588, callback, 'call').call(JSProf.LRE(26576, _self), JSProf.LRE(26577, s), !JSProf.LRE(26578, old) ? void 0 : JSProf.LGD(26579, old, 'get').get ? JSProf.LMC(26581, old, 'get').get(JSProf.LRE(26580, s)) : JSProf.LGE(26582, old, 's')[s], !JSProf.LRE(26583, current) ? void 0 : JSProf.LGD(26584, current, 'get').get ? JSProf.LMC(26586, current, 'get').get(JSProf.LRE(26585, s)) : JSProf.LGE(26587, current, 's')[s]);
                }
            }
            // Watch for change in model.
            hm = JSProf.LWR(26599, hm, JSProf.LMC(26598, Stateful.prototype.watch, 'call').call(this, JSProf.LGD(26589, this, '_refModelProp')._refModelProp, JSProf.LNF(26597, function (name, old, current) {
                if (JSProf.LRE(26590, old) === JSProf.LRE(26591, current)) {
                    return;
                }
                JSProf.LFC(26594, reflectChangeInModel, false)(JSProf.LRE(26592, old), JSProf.LRE(26593, current));
                JSProf.LFC(26596, watchPropertiesInModel, false)(JSProf.LRE(26595, current));
            }, 12)));
            // Watch for properties in model.
            JSProf.LFC(26602, watchPropertiesInModel, false)(JSProf.LMC(26601, this, 'get').get(JSProf.LGD(26600, this, '_refModelProp')._refModelProp));
            var h = JSProf.LNE(26603, {}, 11);
            JSProf.LPD(26610, h, 'unwatch').unwatch = JSProf.LRSP(26610, JSProf.LPD(26609, h, 'remove').remove = JSProf.LRSP(26609, JSProf.LNF(26608, function () {
                if (JSProf.LRE(26604, hp)) {
                    JSProf.LMC(26605, hp, 'unwatch').unwatch();
                    hp = null;
                }
                if (JSProf.LRE(26606, hm)) {
                    JSProf.LMC(26607, hm, 'unwatch').unwatch();
                    hm = null;
                }
            }, 12)));
            return JSProf.LRE(26611, h);    // dojo/handle
        }, 12),
        hasControllerProperty: JSProf.LNF(26627, function (name) {
            // summary:
            //		Returns true if this controller itself owns the given property.
            // name: String
            //		The property name.
            return JSProf.LRE(26615, name) == "_watchCallbacks" || JSProf.LRE(26616, name) == JSProf.LGD(26617, this, '_refModelProp')._refModelProp || JSProf.LRE(26618, name) == JSProf.LGD(26619, this, '_refInModelProp')._refInModelProp || JSProf.LRE(26620, name) in (JSProf.LGD(26621, this, 'ownProps').ownProps || JSProf.LNE(26622, {}, 11)) || JSProf.LRE(26623, name) in JSProf.LGD(26624, this.constructor, 'prototype').prototype || JSProf.LMC(26626, /^dojoAttach(Point|Event)$/i, 'test').test(JSProf.LRE(26625, name));    // Let dojoAttachPoint/dojoAttachEvent be this controller's property to support <span data-dojo-type="dojox/mvc/ModelRefController" data-dojo-attach-point="controllerNode"> in widgets-in-template
        }, 12)
    }, 11));
}, 12));