JSProf.LFC(26913, define, false)(JSProf.LNE(26776, [
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Stateful",
    "./_Controller"
], 10), JSProf.LNF(26912, function (array, declare, lang, Stateful, _Controller) {
    return JSProf.LFC(26911, declare, false)("dojox.mvc.ModelRefController", JSProf.LRE(26777, _Controller), JSProf.LNE(26910, {
        ownProps: null,
        _refModelProp: "model",
        _refInModelProp: "model",
        model: null,
        postscript: JSProf.LNF(26784, function (params, srcNodeRef) {
            // summary:
            //		Sets _relTargetProp so that the property specified by _refModelProp is used for relative data binding.
            JSProf.LPD(26782, this, '_relTargetProp')._relTargetProp = JSProf.LRSP(26782, JSProf.LGD(26780, JSProf.LRE(26778, params) || JSProf.LNE(26779, {}, 11), '_refModelProp')._refModelProp || JSProf.LGD(26781, this, '_refModelProp')._refModelProp);
            JSProf.LMC(26783, this, 'inherited').inherited(arguments);
        }, 12),
        get: JSProf.LNF(26794, function (name) {
            // summary:
            //		If getter function is there, use it. Otherwise, get the data from data model of this object.
            // name: String
            //		The property name.
            if (!JSProf.LMC(26786, this, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26785, name))) {
                var model = JSProf.LGE(26787, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                return !JSProf.LRE(26788, model) ? void 0 : JSProf.LGD(26789, model, 'get').get ? JSProf.LMC(26791, model, 'get').get(JSProf.LRE(26790, name)) : JSProf.LGE(26792, model, 'name')[name];
            }
            return JSProf.LMC(26793, this, 'inherited').inherited(arguments);
        }, 12),
        _set: JSProf.LNF(26806, function (name, value) {
            // summary:
            //		Set the value to the data model or to this object.
            // name: String
            //		The property name.
            // value: Anything
            //		The property value.
            if (!JSProf.LMC(26796, this, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26795, name))) {
                var model = JSProf.LGE(26797, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = this._refModelProp)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd];
                JSProf.LRE(26798, model) && (JSProf.LGD(26799, model, 'set').set ? JSProf.LMC(26802, model, 'set').set(JSProf.LRE(26800, name), JSProf.LRE(26801, value)) : JSProf.LPE(26804, model, 'name')[name] = JSProf.LRPE(26804, JSProf.LRE(26803, value)));
                return this;
            }
            return JSProf.LMC(26805, this, 'inherited').inherited(arguments);
        }, 12),
        watch: JSProf.LNF(26896, function (name, callback) {
            JSProf.LFD(26894, watchPropertiesInModel);
            JSProf.LFD(26895, reflectChangeInModel);
            // summary:
            //		Watch a property in the data model or in this object.
            // name: String?
            //		The property name.
            // callback: Function
            //		The callback function.
            if (JSProf.LMC(26808, this, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26807, name))) {
                return JSProf.LMC(26809, this, 'inherited').inherited(arguments);
            }
            if (!JSProf.LRE(26810, callback)) {
                callback = JSProf.LWR(26812, callback, JSProf.LRE(26811, name));
                name = null;
            }
            var hm = null, hp = null, _self = this;
            function watchPropertiesInModel(model) {
                // summary:
                //		Watch properties in referred model.
                // model: dojo/Stateful
                //		The model to watch for.
                // Unwatch properties of older model.
                if (JSProf.LRE(26813, hp)) {
                    JSProf.LMC(26814, hp, 'unwatch').unwatch();
                }
                // Watch properties of newer model.
                if (JSProf.LRE(26815, model) && JSProf.LMC(26817, lang, 'isFunction').isFunction(JSProf.LGD(26816, model, 'set').set) && JSProf.LMC(26819, lang, 'isFunction').isFunction(JSProf.LGD(26818, model, 'watch').watch)) {
                    hp = JSProf.LWR(26833, hp, JSProf.LMC(26832, model.watch, 'apply').apply(JSProf.LRE(26820, model), (JSProf.LRE(26821, name) ? JSProf.LNE(26823, [JSProf.LRE(26822, name)], 10) : JSProf.LNE(26824, [], 10)).concat(JSProf.LNE(26831, [JSProf.LNF(26830, function (name, old, current) {
                            JSProf.LMC(26829, callback, 'call').call(JSProf.LRE(26825, _self), JSProf.LRE(26826, name), JSProf.LRE(26827, old), JSProf.LRE(26828, current));
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
                var props = JSProf.LNE(26834, {}, 11);
                if (!JSProf.LRE(26835, name)) {
                    // If all properties are being watched, find out all properties from older model as well as from newer model.
                    JSProf.LMC(26855, array, 'forEach').forEach(JSProf.LNE(26838, [
                        JSProf.LRE(26836, old),
                        JSProf.LRE(26837, current)
                    ], 10), JSProf.LNF(26854, function (model) {
                        var list = JSProf.LRE(26839, model) && JSProf.LMC(26840, model, 'get').get("properties");
                        if (JSProf.LRE(26841, list)) {
                            // If the model explicitly specifies the list of properties, use it.
                            JSProf.LMC(26847, array, 'forEach').forEach(JSProf.LRE(26842, list), JSProf.LNF(26846, function (item) {
                                if (!JSProf.LMC(26844, _self, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26843, item))) {
                                    JSProf.LPE(26845, props, 'item')[item] = JSProf.LRPE(26845, 1);
                                }
                            }, 12));
                        } else {
                            // Otherwise, iterate through own properties.
                            for (var s in JSProf.LRE(26848, model)) {
                                if (JSProf.LMC(26850, model, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(26849, s)) && !JSProf.LMC(26852, _self, 'hasControllerProperty').hasControllerProperty(JSProf.LRE(26851, s))) {
                                    JSProf.LPE(26853, props, 's')[s] = JSProf.LRPE(26853, 1);
                                }
                            }
                        }
                    }, 12));
                } else {
                    JSProf.LPE(26856, props, 'name')[name] = JSProf.LRPE(26856, 1);
                }
                // Call watch callbacks for properties.
                for (var s in JSProf.LRE(26857, props)) {
                    JSProf.LMC(26870, callback, 'call').call(JSProf.LRE(26858, _self), JSProf.LRE(26859, s), !JSProf.LRE(26860, old) ? void 0 : JSProf.LGD(26861, old, 'get').get ? JSProf.LMC(26863, old, 'get').get(JSProf.LRE(26862, s)) : JSProf.LGE(26864, old, 's')[s], !JSProf.LRE(26865, current) ? void 0 : JSProf.LGD(26866, current, 'get').get ? JSProf.LMC(26868, current, 'get').get(JSProf.LRE(26867, s)) : JSProf.LGE(26869, current, 's')[s]);
                }
            }
            // Watch for change in model.
            hm = JSProf.LWR(26881, hm, JSProf.LMC(26880, Stateful.prototype.watch, 'call').call(this, JSProf.LGD(26871, this, '_refModelProp')._refModelProp, JSProf.LNF(26879, function (name, old, current) {
                if (JSProf.LRE(26872, old) === JSProf.LRE(26873, current)) {
                    return;
                }
                JSProf.LFC(26876, reflectChangeInModel, false)(JSProf.LRE(26874, old), JSProf.LRE(26875, current));
                JSProf.LFC(26878, watchPropertiesInModel, false)(JSProf.LRE(26877, current));
            }, 12)));
            // Watch for properties in model.
            JSProf.LFC(26884, watchPropertiesInModel, false)(JSProf.LMC(26883, this, 'get').get(JSProf.LGD(26882, this, '_refModelProp')._refModelProp));
            var h = JSProf.LNE(26885, {}, 11);
            JSProf.LPD(26892, h, 'unwatch').unwatch = JSProf.LRSP(26892, JSProf.LPD(26891, h, 'remove').remove = JSProf.LRSP(26891, JSProf.LNF(26890, function () {
                if (JSProf.LRE(26886, hp)) {
                    JSProf.LMC(26887, hp, 'unwatch').unwatch();
                    hp = null;
                }
                if (JSProf.LRE(26888, hm)) {
                    JSProf.LMC(26889, hm, 'unwatch').unwatch();
                    hm = null;
                }
            }, 12)));
            return JSProf.LRE(26893, h);    // dojo/handle
        }, 12),
        hasControllerProperty: JSProf.LNF(26909, function (name) {
            // summary:
            //		Returns true if this controller itself owns the given property.
            // name: String
            //		The property name.
            return JSProf.LRE(26897, name) == "_watchCallbacks" || JSProf.LRE(26898, name) == JSProf.LGD(26899, this, '_refModelProp')._refModelProp || JSProf.LRE(26900, name) == JSProf.LGD(26901, this, '_refInModelProp')._refInModelProp || JSProf.LRE(26902, name) in (JSProf.LGD(26903, this, 'ownProps').ownProps || JSProf.LNE(26904, {}, 11)) || JSProf.LRE(26905, name) in JSProf.LGD(26906, this.constructor, 'prototype').prototype || JSProf.LMC(26908, /^dojoAttach(Point|Event)$/i, 'test').test(JSProf.LRE(26907, name));    // Let dojoAttachPoint/dojoAttachEvent be this controller's property to support <span data-dojo-type="dojox/mvc/ModelRefController" data-dojo-attach-point="controllerNode"> in widgets-in-template
        }, 12)
    }, 11));
}, 12));