JSProf.LFC(34071, define, false)(JSProf.LNE(33812, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/_base/declare",
    "dojo/has",
    "dojo/Stateful",
    "./resolve",
    "./sync"
], 10), JSProf.LNF(34070, function (array, lang, declare, has, Stateful, resolve, sync) {
    JSProf.LFD(34066, getLogContent);
    JSProf.LFD(34067, logResolveFailure);
    JSProf.LFD(34068, getParent);
    JSProf.LFD(34069, bind);
    if (JSProf.LFC(33813, has, false)("mvc-bindings-log-api")) {
        function getLogContent(target, targetProp) {
            return JSProf.LMC(33820, JSProf.LNE(33819, [
                JSProf.LGD(33814, target, '_setIdAttr')._setIdAttr || !JSProf.LGD(33815, target, 'declaredClass').declaredClass ? JSProf.LRE(33816, target) : JSProf.LGD(33817, target, 'declaredClass').declaredClass,
                JSProf.LRE(33818, targetProp)
            ], 10), 'join').join(":");
        }
        function logResolveFailure(target, targetProp) {
            JSProf.LMC(33824, console, 'warn').warn(JSProf.LRE(33821, targetProp) + " could not be resolved" + (typeof JSProf.LRE(33822, target) == "string" ? " with " + JSProf.LRE(33823, target) : "") + ".");
        }
    }
    function getParent(w) {
        // summary:
        //		Returns parent widget having data binding target for relative data binding.
        // w: dijit/_WidgetBase
        //		The widget.
        // Usage of dijit/registry module is optional. Return null if it's not already loaded.
        var registry;
        try {
            registry = JSProf.LWR(33826, registry, JSProf.LFC(33825, require, false)("dijit/registry"));
        } catch (e) {
            return;
        }
        var pn = JSProf.LGD(33827, w, 'domNode').domNode && JSProf.LGD(33828, w.domNode, 'parentNode').parentNode, pw, pb;
        while (JSProf.LRE(33829, pn)) {
            pw = JSProf.LWR(33832, pw, JSProf.LMC(33831, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LRE(33830, pn)));
            if (JSProf.LRE(33833, pw)) {
                var relTargetProp = JSProf.LGD(33834, pw, '_relTargetProp')._relTargetProp || "target", pt = JSProf.LMC(33836, lang, 'isFunction').isFunction(JSProf.LGD(33835, pw, 'get').get) ? JSProf.LMC(33838, pw, 'get').get(JSProf.LRE(33837, relTargetProp)) : JSProf.LGE(33839, pw, 'relTargetProp')[relTargetProp];
                if (JSProf.LRE(33840, pt) || JSProf.LRE(33841, relTargetProp) in JSProf.LGD(33842, pw.constructor, 'prototype').prototype) {
                    return JSProf.LRE(33843, pw);    // dijit/_WidgetBase
                }
            }
            pn = JSProf.LWR(33846, pn, JSProf.LRE(33844, pw) && JSProf.LGD(33845, pw.domNode, 'parentNode').parentNode);
        }
    }
    function bind(source, sourceProp, target, targetProp, options) {
        JSProf.LFD(33943, resolveAndBind);
        // summary:
        //		Resolves the data binding literal, and starts data binding.
        // source: dojo/Stateful|String
        //		Source data binding literal or dojo/Stateful to be synchronized.
        // sourceProp: String
        //		The property name in source to be synchronized.
        // target: dijit/_WidgetBase
        //		Target dojo/Stateful to be synchronized.
        // targetProp: String
        //		The property name in target to be synchronized.
        // options: dojox/mvc/sync.options
        //		Data binding options.
        var _handles = JSProf.LNE(33847, {}, 11), parent = JSProf.LFC(33849, getParent, false)(JSProf.LRE(33848, target)), relTargetProp = JSProf.LRE(33850, parent) && JSProf.LGD(33851, parent, '_relTargetProp')._relTargetProp || "target";
        function resolveAndBind() {
            JSProf.LGE(33852, _handles, 'Two')["Two"] && JSProf.LMC(33853, _handles["Two"], 'unwatch').unwatch();
            delete _handles["Two"];
            var relTarget = JSProf.LRE(33854, parent) && (JSProf.LMC(33856, lang, 'isFunction').isFunction(JSProf.LGD(33855, parent, 'get').get) ? JSProf.LMC(33858, parent, 'get').get(JSProf.LRE(33857, relTargetProp)) : JSProf.LGE(33859, parent, 'relTargetProp')[relTargetProp]), resolvedSource = JSProf.LFC(33862, resolve, false)(JSProf.LRE(33860, source), JSProf.LRE(33861, relTarget)), resolvedTarget = JSProf.LFC(33865, resolve, false)(JSProf.LRE(33863, target), JSProf.LRE(33864, relTarget));
            if (JSProf.LFC(33866, has, false)("mvc-bindings-log-api") && (!JSProf.LRE(33867, resolvedSource) || JSProf.LMC(33869, /^rel:/, 'test').test(JSProf.LRE(33868, source)) && !JSProf.LRE(33870, parent))) {
                JSProf.LFC(33873, logResolveFailure, false)(JSProf.LRE(33871, source), JSProf.LRE(33872, sourceProp));
            }
            if (JSProf.LFC(33874, has, false)("mvc-bindings-log-api") && (!JSProf.LRE(33875, resolvedTarget) || JSProf.LMC(33877, /^rel:/, 'test').test(JSProf.LRE(33876, target)) && !JSProf.LRE(33878, parent))) {
                JSProf.LFC(33881, logResolveFailure, false)(JSProf.LRE(33879, target), JSProf.LRE(33880, targetProp));
            }
            if (!JSProf.LRE(33882, resolvedSource) || !JSProf.LRE(33883, resolvedTarget) || (JSProf.LMC(33885, /^rel:/, 'test').test(JSProf.LRE(33884, source)) || JSProf.LMC(33887, /^rel:/, 'test').test(JSProf.LRE(33886, target))) && !JSProf.LRE(33888, parent)) {
                return;
            }
            if ((!JSProf.LGD(33889, resolvedSource, 'set').set || !JSProf.LGD(33890, resolvedSource, 'watch').watch) && JSProf.LRE(33891, sourceProp) == "*") {
                if (JSProf.LFC(33892, has, false)("mvc-bindings-log-api")) {
                    JSProf.LFC(33895, logResolveFailure, false)(JSProf.LRE(33893, source), JSProf.LRE(33894, sourceProp));
                }
                return;
            }
            if (JSProf.LRE(33896, sourceProp) == null) {
                // If source property is not specified, it means this handle is just for resolving data binding target.
                // (For dojox/mvc/Group and dojox/mvc/Repeat)
                // Do not perform data binding synchronization in such case.
                JSProf.LMC(33898, lang, 'isFunction').isFunction(JSProf.LGD(33897, resolvedTarget, 'set').set) ? JSProf.LMC(33901, resolvedTarget, 'set').set(JSProf.LRE(33899, targetProp), JSProf.LRE(33900, resolvedSource)) : JSProf.LPE(33903, resolvedTarget, 'targetProp')[targetProp] = JSProf.LRPE(33903, JSProf.LRE(33902, resolvedSource));
                if (JSProf.LFC(33904, has, false)("mvc-bindings-log-api")) {
                    console.log("dojox/mvc/_atBindingMixin set " + JSProf.LRE(33905, resolvedSource) + " to: " + JSProf.LFC(33908, getLogContent, false)(JSProf.LRE(33906, resolvedTarget), JSProf.LRE(33907, targetProp)));
                }
            } else {
                // Start data binding
                JSProf.LPE(33915, _handles, 'Two')["Two"] = JSProf.LRPE(33915, JSProf.LFC(33914, sync, false)(JSProf.LRE(33909, resolvedSource), JSProf.LRE(33910, sourceProp), JSProf.LRE(33911, resolvedTarget), JSProf.LRE(33912, targetProp), JSProf.LRE(33913, options)));    // dojox/mvc/sync.handle
            }
        }
        JSProf.LFC(33916, resolveAndBind, false)();
        if (JSProf.LRE(33917, parent) && JSProf.LMC(33919, /^rel:/, 'test').test(JSProf.LRE(33918, source)) || JSProf.LMC(33921, /^rel:/, 'test').test(JSProf.LRE(33920, target)) && JSProf.LMC(33923, lang, 'isFunction').isFunction(JSProf.LGD(33922, parent, 'set').set) && JSProf.LMC(33925, lang, 'isFunction').isFunction(JSProf.LGD(33924, parent, 'watch').watch)) {
            JSProf.LPE(33934, _handles, 'rel')["rel"] = JSProf.LRPE(33934, JSProf.LMC(33933, parent, 'watch').watch(JSProf.LRE(33926, relTargetProp), JSProf.LNF(33932, function (name, old, current) {
                if (JSProf.LRE(33927, old) !== JSProf.LRE(33928, current)) {
                    if (JSProf.LFC(33929, has, false)("mvc-bindings-log-api")) {
                        console.log("Change in relative data binding target: " + JSProf.LRE(33930, parent));
                    }
                    JSProf.LFC(33931, resolveAndBind, false)();
                }
            }, 12)));
        }
        var h = JSProf.LNE(33935, {}, 11);
        JSProf.LPD(33941, h, 'unwatch').unwatch = JSProf.LRSP(33941, JSProf.LPD(33940, h, 'remove').remove = JSProf.LRSP(33940, JSProf.LNF(33939, function () {
            for (var s in JSProf.LRE(33936, _handles)) {
                JSProf.LGE(33937, _handles, 's')[s] && JSProf.LMC(33938, _handles[s], 'unwatch').unwatch();
                delete _handles[s];
            }
        }, 12)));
        return JSProf.LRE(33942, h);
    }
    var mixin = JSProf.LNE(34059, {
            dataBindAttr: "data-mvc-bindings",
            _dbpostscript: JSProf.LNF(33973, function (params, srcNodeRef) {
                // summary:
                //		See if any parameters for this widget are dojox/mvc/at handles.
                //		If so, move them under this._refs to prevent widget implementations from referring them.
                var refs = JSProf.LPD(33948, this, '_refs')._refs = JSProf.LRSP(33948, JSProf.LGD(33946, JSProf.LRE(33944, params) || JSProf.LNE(33945, {}, 11), 'refs').refs || JSProf.LNE(33947, {}, 11));
                for (var prop in JSProf.LRE(33949, params)) {
                    if (JSProf.LGD(33952, JSProf.LGE(33950, params, 'prop')[prop] || JSProf.LNE(33951, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                        var h = JSProf.LGE(33953, params, 'prop')[prop];
                        delete params[prop];
                        JSProf.LPE(33955, refs, 'prop')[prop] = JSProf.LRPE(33955, JSProf.LRE(33954, h));
                    }
                }
                var dbParams = JSProf.LNE(33957, new (JSProf.LFC(33956, Stateful, true))(), 'Stateful'), _self = this;
                JSProf.LPD(33961, dbParams, 'toString').toString = JSProf.LRSP(33961, JSProf.LNF(33960, function () {
                    return '[Mixin value of widget ' + JSProf.LGD(33958, _self, 'declaredClass').declaredClass + ', ' + (JSProf.LGD(33959, _self, 'id').id || 'NO ID') + ']';
                }, 12));
                JSProf.LPD(33962, dbParams, 'canConvertToLoggable').canConvertToLoggable = JSProf.LRSP(33962, true);
                JSProf.LMC(33964, this, '_startAtWatchHandles')._startAtWatchHandles(JSProf.LRE(33963, dbParams));
                for (var prop in JSProf.LRE(33965, refs)) {
                    if (JSProf.LGE(33966, dbParams, 'prop')[prop] !== void 0) {
                        JSProf.LPE(33971, params = JSProf.LWR(33969, params, JSProf.LRE(33967, params) || JSProf.LNE(33968, {}, 11)), 'prop')[prop] = JSProf.LRPE(33971, JSProf.LGE(33970, dbParams, 'prop')[prop]);
                    }
                }
                JSProf.LMC(33972, this, '_stopAtWatchHandles')._stopAtWatchHandles();
            }, 12),
            _startAtWatchHandles: JSProf.LNF(33999, function (bindWith) {
                // summary:
                //		Establish data bindings based on dojox/mvc/at handles.
                // bindWith: dojo/Stateful
                //		The dojo/Stateful to bind properties with.
                JSProf.LPD(33974, this, 'canConvertToLoggable').canConvertToLoggable = JSProf.LRSP(33974, true);
                var refs = JSProf.LGD(33975, this, '_refs')._refs;
                if (JSProf.LRE(33976, refs)) {
                    var atWatchHandles = JSProf.LPD(33979, this, '_atWatchHandles')._atWatchHandles = JSProf.LRSP(33979, JSProf.LGD(33977, this, '_atWatchHandles')._atWatchHandles || JSProf.LNE(33978, {}, 11));
                    // Clear the cache of properties that data binding is established with
                    this._excludes = null;
                    // First, establish non-wildcard data bindings
                    for (var prop in JSProf.LRE(33980, refs)) {
                        if (!JSProf.LGE(33981, refs, 'prop')[prop] || JSProf.LRE(33982, prop) == "*") {
                            continue;
                        }
                        JSProf.LPE(33989, atWatchHandles, 'prop')[prop] = JSProf.LRPE(33989, JSProf.LFC(33988, bind, false)(JSProf.LGD(33983, refs[prop], 'target').target, JSProf.LGD(33984, refs[prop], 'targetProp').targetProp, JSProf.LRE(33985, bindWith) || this, JSProf.LRE(33986, prop), JSProf.LNE(33987, {
                            bindDirection: refs[prop].bindDirection,
                            converter: refs[prop].converter,
                            equals: refs[prop].equalsCallback
                        }, 11)));
                    }
                    // Then establish wildcard data bindings
                    if (JSProf.LGD(33992, JSProf.LGE(33990, refs, '*')["*"] || JSProf.LNE(33991, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                        JSProf.LPE(33998, atWatchHandles, '*')["*"] = JSProf.LRPE(33998, JSProf.LFC(33997, bind, false)(JSProf.LGD(33993, refs["*"], 'target').target, JSProf.LGD(33994, refs["*"], 'targetProp').targetProp, JSProf.LRE(33995, bindWith) || this, "*", JSProf.LNE(33996, {
                            bindDirection: refs["*"].bindDirection,
                            converter: refs["*"].converter,
                            equals: refs["*"].equalsCallback
                        }, 11)));
                    }
                }
            }, 12),
            _stopAtWatchHandles: JSProf.LNF(34002, function () {
                // summary:
                //		Stops data binding synchronization handles as widget is destroyed.
                for (var s in JSProf.LGD(34000, this, '_atWatchHandles')._atWatchHandles) {
                    JSProf.LMC(34001, this._atWatchHandles[s], 'unwatch').unwatch();
                    delete this._atWatchHandles[s];
                }
            }, 12),
            _setAtWatchHandle: JSProf.LNF(34020, function (name, value) {
                // summary:
                //		Called if the value is a dojox/mvc/at handle.
                //		If this widget has started, start data binding with the new dojox/mvc/at handle.
                //		Otherwise, queue it up to this._refs so that _dbstartup() can pick it up.
                if (JSProf.LRE(34003, name) == "ref") {
                    throw JSProf.LNE(34005, new (JSProf.LFC(34004, Error, true))(this + ": 1.7 ref syntax used in conjunction with 1.8 dojox/mvc/at syntax, which is not supported."), 'Error');
                }
                // Claen up older data binding
                var atWatchHandles = JSProf.LPD(34008, this, '_atWatchHandles')._atWatchHandles = JSProf.LRSP(34008, JSProf.LGD(34006, this, '_atWatchHandles')._atWatchHandles || JSProf.LNE(34007, {}, 11));
                if (JSProf.LGE(34009, atWatchHandles, 'name')[name]) {
                    JSProf.LMC(34010, atWatchHandles[name], 'unwatch').unwatch();
                    delete atWatchHandles[name];
                }
                // Claar the value
                this[name] = null;
                // Clear the cache of properties that data binding is established with
                this._excludes = null;
                if (JSProf.LGD(34011, this, '_started')._started) {
                    // If this widget has been started already, establish data binding immediately.
                    JSProf.LPE(34017, atWatchHandles, 'name')[name] = JSProf.LRPE(34017, JSProf.LFC(34016, bind, false)(JSProf.LGD(34012, value, 'target').target, JSProf.LGD(34013, value, 'targetProp').targetProp, this, JSProf.LRE(34014, name), JSProf.LNE(34015, {
                        bindDirection: value.bindDirection,
                        converter: value.converter,
                        equals: value.equalsCallback
                    }, 11)));
                } else {
                    // Otherwise, queue it up to this._refs so that _dbstartup() can pick it up.
                    JSProf.LPE(34019, this._refs, 'name')[name] = JSProf.LRPE(34019, JSProf.LRE(34018, value));
                }
            }, 12),
            _setBind: JSProf.LNF(34033, function (value) {
                // summary:
                //		Sets data binding described in data-mvc-bindings.
                var list = eval("({" + JSProf.LRE(34021, value) + "})");
                for (var prop in JSProf.LRE(34022, list)) {
                    var h = JSProf.LGE(34023, list, 'prop')[prop];
                    if (JSProf.LGD(34026, JSProf.LRE(34024, h) || JSProf.LNE(34025, {}, 11), 'atsignature').atsignature != "dojox.mvc.at") {
                        JSProf.LMC(34029, console, 'warn').warn(JSProf.LRE(34027, prop) + " in " + JSProf.LRU(34028, typeof dataBindAttr === 'undefined' ? undefined : dataBindAttr) + " is not a data binding handle.");
                    } else {
                        JSProf.LMC(34032, this, '_setAtWatchHandle')._setAtWatchHandle(JSProf.LRE(34030, prop), JSProf.LRE(34031, h));
                    }
                }
            }, 12),
            _getExcludesAttr: JSProf.LNF(34042, function () {
                // summary:
                //		Returns list of all properties that data binding is established with.
                if (JSProf.LGD(34034, this, '_excludes')._excludes) {
                    return JSProf.LGD(34035, this, '_excludes')._excludes;    // String[] 
                }
                var list = JSProf.LNE(34036, [], 10);
                for (var s in JSProf.LGD(34037, this, '_atWatchHandles')._atWatchHandles) {
                    if (JSProf.LRE(34038, s) != "*") {
                        JSProf.LMC(34040, list, 'push').push(JSProf.LRE(34039, s));
                    }
                }
                return JSProf.LRE(34041, list);    // String[]
            }, 12),
            _getPropertiesAttr: JSProf.LNF(34058, function () {
                // summary:
                //		Returns list of all properties in this widget, except "id".
                // returns: String[]
                //		 The list of all properties in this widget, except "id"..
                if (JSProf.LGD(34043, this.constructor, '_attribs')._attribs) {
                    return JSProf.LGD(34044, this.constructor, '_attribs')._attribs;    // String[]
                }
                var list = JSProf.LNE(34045, ["onClick"], 10).concat(JSProf.LGD(34046, this.constructor, '_setterAttrs')._setterAttrs);
                JSProf.LMC(34055, array, 'forEach').forEach(JSProf.LNE(34047, [
                    "id",
                    "excludes",
                    "properties",
                    "ref",
                    "binding"
                ], 10), JSProf.LNF(34054, function (s) {
                    var index = JSProf.LMC(34050, array, 'indexOf').indexOf(JSProf.LRE(34048, list), JSProf.LRE(34049, s));
                    if (JSProf.LRE(34051, index) >= 0) {
                        JSProf.LMC(34053, list, 'splice').splice(JSProf.LRE(34052, index), 1);
                    }
                }, 12));
                return JSProf.LPD(34057, this.constructor, '_attribs')._attribs = JSProf.LRSP(34057, JSProf.LRE(34056, list));    // String[]
            }, 12)
        }, 11);
    JSProf.LPE(34060, mixin, JSProf.TMPS.tc7f9fb6dbb1faf412553cb10cae013a682bbdbe0 = mixin.dataBindAttr)[JSProf.TMPS.tc7f9fb6dbb1faf412553cb10cae013a682bbdbe0] = JSProf.LRPE(34060, "");
    // Let parser treat the attribute as string
    var _atBindingMixin = JSProf.LFC(34062, declare, false)("dojox/mvc/_atBindingMixin", null, JSProf.LRE(34061, mixin));
    JSProf.LPD(34064, _atBindingMixin, 'mixin').mixin = JSProf.LRSP(34064, JSProf.LRE(34063, mixin));
    // Keep the plain object version
    return JSProf.LRE(34065, _atBindingMixin);
}, 12));