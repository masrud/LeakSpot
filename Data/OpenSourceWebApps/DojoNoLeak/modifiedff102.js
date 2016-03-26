JSProf.LFC(34073, define, false)(JSProf.LNE(33814, [
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/_base/declare",
    "dojo/has",
    "dojo/Stateful",
    "./resolve",
    "./sync"
], 10), JSProf.LNF(34072, function (array, lang, declare, has, Stateful, resolve, sync) {
    JSProf.LFD(34068, getLogContent);
    JSProf.LFD(34069, logResolveFailure);
    JSProf.LFD(34070, getParent);
    JSProf.LFD(34071, bind);
    if (JSProf.LFC(33815, has, false)("mvc-bindings-log-api")) {
        function getLogContent(target, targetProp) {
            return JSProf.LMC(33822, JSProf.LNE(33821, [
                JSProf.LGD(33816, target, '_setIdAttr')._setIdAttr || !JSProf.LGD(33817, target, 'declaredClass').declaredClass ? JSProf.LRE(33818, target) : JSProf.LGD(33819, target, 'declaredClass').declaredClass,
                JSProf.LRE(33820, targetProp)
            ], 10), 'join').join(":");
        }
        function logResolveFailure(target, targetProp) {
            JSProf.LMC(33826, console, 'warn').warn(JSProf.LRE(33823, targetProp) + " could not be resolved" + (typeof JSProf.LRE(33824, target) == "string" ? " with " + JSProf.LRE(33825, target) : "") + ".");
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
            registry = JSProf.LWR(33828, registry, JSProf.LFC(33827, require, false)("dijit/registry"));
        } catch (e) {
            return;
        }
        var pn = JSProf.LGD(33829, w, 'domNode').domNode && JSProf.LGD(33830, w.domNode, 'parentNode').parentNode, pw, pb;
        while (JSProf.LRE(33831, pn)) {
            pw = JSProf.LWR(33834, pw, JSProf.LMC(33833, registry, 'getEnclosingWidget').getEnclosingWidget(JSProf.LRE(33832, pn)));
            if (JSProf.LRE(33835, pw)) {
                var relTargetProp = JSProf.LGD(33836, pw, '_relTargetProp')._relTargetProp || "target", pt = JSProf.LMC(33838, lang, 'isFunction').isFunction(JSProf.LGD(33837, pw, 'get').get) ? JSProf.LMC(33840, pw, 'get').get(JSProf.LRE(33839, relTargetProp)) : JSProf.LGE(33841, pw, 'relTargetProp')[relTargetProp];
                if (JSProf.LRE(33842, pt) || JSProf.LRE(33843, relTargetProp) in JSProf.LGD(33844, pw.constructor, 'prototype').prototype) {
                    return JSProf.LRE(33845, pw);    // dijit/_WidgetBase
                }
            }
            pn = JSProf.LWR(33848, pn, JSProf.LRE(33846, pw) && JSProf.LGD(33847, pw.domNode, 'parentNode').parentNode);
        }
    }
    function bind(source, sourceProp, target, targetProp, options) {
        JSProf.LFD(33945, resolveAndBind);
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
        var _handles = JSProf.LNE(33849, {}, 11), parent = JSProf.LFC(33851, getParent, false)(JSProf.LRE(33850, target)), relTargetProp = JSProf.LRE(33852, parent) && JSProf.LGD(33853, parent, '_relTargetProp')._relTargetProp || "target";
        function resolveAndBind() {
            JSProf.LGE(33854, _handles, 'Two')["Two"] && JSProf.LMC(33855, _handles["Two"], 'unwatch').unwatch();
            delete _handles["Two"];
            var relTarget = JSProf.LRE(33856, parent) && (JSProf.LMC(33858, lang, 'isFunction').isFunction(JSProf.LGD(33857, parent, 'get').get) ? JSProf.LMC(33860, parent, 'get').get(JSProf.LRE(33859, relTargetProp)) : JSProf.LGE(33861, parent, 'relTargetProp')[relTargetProp]), resolvedSource = JSProf.LFC(33864, resolve, false)(JSProf.LRE(33862, source), JSProf.LRE(33863, relTarget)), resolvedTarget = JSProf.LFC(33867, resolve, false)(JSProf.LRE(33865, target), JSProf.LRE(33866, relTarget));
            if (JSProf.LFC(33868, has, false)("mvc-bindings-log-api") && (!JSProf.LRE(33869, resolvedSource) || JSProf.LMC(33871, /^rel:/, 'test').test(JSProf.LRE(33870, source)) && !JSProf.LRE(33872, parent))) {
                JSProf.LFC(33875, logResolveFailure, false)(JSProf.LRE(33873, source), JSProf.LRE(33874, sourceProp));
            }
            if (JSProf.LFC(33876, has, false)("mvc-bindings-log-api") && (!JSProf.LRE(33877, resolvedTarget) || JSProf.LMC(33879, /^rel:/, 'test').test(JSProf.LRE(33878, target)) && !JSProf.LRE(33880, parent))) {
                JSProf.LFC(33883, logResolveFailure, false)(JSProf.LRE(33881, target), JSProf.LRE(33882, targetProp));
            }
            if (!JSProf.LRE(33884, resolvedSource) || !JSProf.LRE(33885, resolvedTarget) || (JSProf.LMC(33887, /^rel:/, 'test').test(JSProf.LRE(33886, source)) || JSProf.LMC(33889, /^rel:/, 'test').test(JSProf.LRE(33888, target))) && !JSProf.LRE(33890, parent)) {
                return;
            }
            if ((!JSProf.LGD(33891, resolvedSource, 'set').set || !JSProf.LGD(33892, resolvedSource, 'watch').watch) && JSProf.LRE(33893, sourceProp) == "*") {
                if (JSProf.LFC(33894, has, false)("mvc-bindings-log-api")) {
                    JSProf.LFC(33897, logResolveFailure, false)(JSProf.LRE(33895, source), JSProf.LRE(33896, sourceProp));
                }
                return;
            }
            if (JSProf.LRE(33898, sourceProp) == null) {
                // If source property is not specified, it means this handle is just for resolving data binding target.
                // (For dojox/mvc/Group and dojox/mvc/Repeat)
                // Do not perform data binding synchronization in such case.
                JSProf.LMC(33900, lang, 'isFunction').isFunction(JSProf.LGD(33899, resolvedTarget, 'set').set) ? JSProf.LMC(33903, resolvedTarget, 'set').set(JSProf.LRE(33901, targetProp), JSProf.LRE(33902, resolvedSource)) : JSProf.LPE(33905, resolvedTarget, 'targetProp')[targetProp] = JSProf.LRPE(33905, JSProf.LRE(33904, resolvedSource));
                if (JSProf.LFC(33906, has, false)("mvc-bindings-log-api")) {
                    console.log("dojox/mvc/_atBindingMixin set " + JSProf.LRE(33907, resolvedSource) + " to: " + JSProf.LFC(33910, getLogContent, false)(JSProf.LRE(33908, resolvedTarget), JSProf.LRE(33909, targetProp)));
                }
            } else {
                // Start data binding
                JSProf.LPE(33917, _handles, 'Two')["Two"] = JSProf.LRPE(33917, JSProf.LFC(33916, sync, false)(JSProf.LRE(33911, resolvedSource), JSProf.LRE(33912, sourceProp), JSProf.LRE(33913, resolvedTarget), JSProf.LRE(33914, targetProp), JSProf.LRE(33915, options)));    // dojox/mvc/sync.handle
            }
        }
        JSProf.LFC(33918, resolveAndBind, false)();
        if (JSProf.LRE(33919, parent) && JSProf.LMC(33921, /^rel:/, 'test').test(JSProf.LRE(33920, source)) || JSProf.LMC(33923, /^rel:/, 'test').test(JSProf.LRE(33922, target)) && JSProf.LMC(33925, lang, 'isFunction').isFunction(JSProf.LGD(33924, parent, 'set').set) && JSProf.LMC(33927, lang, 'isFunction').isFunction(JSProf.LGD(33926, parent, 'watch').watch)) {
            JSProf.LPE(33936, _handles, 'rel')["rel"] = JSProf.LRPE(33936, JSProf.LMC(33935, parent, 'watch').watch(JSProf.LRE(33928, relTargetProp), JSProf.LNF(33934, function (name, old, current) {
                if (JSProf.LRE(33929, old) !== JSProf.LRE(33930, current)) {
                    if (JSProf.LFC(33931, has, false)("mvc-bindings-log-api")) {
                        console.log("Change in relative data binding target: " + JSProf.LRE(33932, parent));
                    }
                    JSProf.LFC(33933, resolveAndBind, false)();
                }
            }, 12)));
        }
        var h = JSProf.LNE(33937, {}, 11);
        JSProf.LPD(33943, h, 'unwatch').unwatch = JSProf.LRSP(33943, JSProf.LPD(33942, h, 'remove').remove = JSProf.LRSP(33942, JSProf.LNF(33941, function () {
            for (var s in JSProf.LRE(33938, _handles)) {
                JSProf.LGE(33939, _handles, 's')[s] && JSProf.LMC(33940, _handles[s], 'unwatch').unwatch();
                delete _handles[s];
            }
        }, 12)));
        return JSProf.LRE(33944, h);
    }
    var mixin = JSProf.LNE(34061, {
            dataBindAttr: "data-mvc-bindings",
            _dbpostscript: JSProf.LNF(33975, function (params, srcNodeRef) {
                // summary:
                //		See if any parameters for this widget are dojox/mvc/at handles.
                //		If so, move them under this._refs to prevent widget implementations from referring them.
                var refs = JSProf.LPD(33950, this, '_refs')._refs = JSProf.LRSP(33950, JSProf.LGD(33948, JSProf.LRE(33946, params) || JSProf.LNE(33947, {}, 11), 'refs').refs || JSProf.LNE(33949, {}, 11));
                for (var prop in JSProf.LRE(33951, params)) {
                    if (JSProf.LGD(33954, JSProf.LGE(33952, params, 'prop')[prop] || JSProf.LNE(33953, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                        var h = JSProf.LGE(33955, params, 'prop')[prop];
                        delete params[prop];
                        JSProf.LPE(33957, refs, 'prop')[prop] = JSProf.LRPE(33957, JSProf.LRE(33956, h));
                    }
                }
                var dbParams = JSProf.LNE(33959, new (JSProf.LFC(33958, Stateful, true))(), 'Stateful'), _self = this;
                JSProf.LPD(33963, dbParams, 'toString').toString = JSProf.LRSP(33963, JSProf.LNF(33962, function () {
                    return '[Mixin value of widget ' + JSProf.LGD(33960, _self, 'declaredClass').declaredClass + ', ' + (JSProf.LGD(33961, _self, 'id').id || 'NO ID') + ']';
                }, 12));
                JSProf.LPD(33964, dbParams, 'canConvertToLoggable').canConvertToLoggable = JSProf.LRSP(33964, true);
                JSProf.LMC(33966, this, '_startAtWatchHandles')._startAtWatchHandles(JSProf.LRE(33965, dbParams));
                for (var prop in JSProf.LRE(33967, refs)) {
                    if (JSProf.LGE(33968, dbParams, 'prop')[prop] !== void 0) {
                        JSProf.LPE(33973, params = JSProf.LWR(33971, params, JSProf.LRE(33969, params) || JSProf.LNE(33970, {}, 11)), 'prop')[prop] = JSProf.LRPE(33973, JSProf.LGE(33972, dbParams, 'prop')[prop]);
                    }
                }
                JSProf.LMC(33974, this, '_stopAtWatchHandles')._stopAtWatchHandles();
            }, 12),
            _startAtWatchHandles: JSProf.LNF(34001, function (bindWith) {
                // summary:
                //		Establish data bindings based on dojox/mvc/at handles.
                // bindWith: dojo/Stateful
                //		The dojo/Stateful to bind properties with.
                JSProf.LPD(33976, this, 'canConvertToLoggable').canConvertToLoggable = JSProf.LRSP(33976, true);
                var refs = JSProf.LGD(33977, this, '_refs')._refs;
                if (JSProf.LRE(33978, refs)) {
                    var atWatchHandles = JSProf.LPD(33981, this, '_atWatchHandles')._atWatchHandles = JSProf.LRSP(33981, JSProf.LGD(33979, this, '_atWatchHandles')._atWatchHandles || JSProf.LNE(33980, {}, 11));
                    // Clear the cache of properties that data binding is established with
                    this._excludes = null;
                    // First, establish non-wildcard data bindings
                    for (var prop in JSProf.LRE(33982, refs)) {
                        if (!JSProf.LGE(33983, refs, 'prop')[prop] || JSProf.LRE(33984, prop) == "*") {
                            continue;
                        }
                        JSProf.LPE(33991, atWatchHandles, 'prop')[prop] = JSProf.LRPE(33991, JSProf.LFC(33990, bind, false)(JSProf.LGD(33985, refs[prop], 'target').target, JSProf.LGD(33986, refs[prop], 'targetProp').targetProp, JSProf.LRE(33987, bindWith) || this, JSProf.LRE(33988, prop), JSProf.LNE(33989, {
                            bindDirection: refs[prop].bindDirection,
                            converter: refs[prop].converter,
                            equals: refs[prop].equalsCallback
                        }, 11)));
                    }
                    // Then establish wildcard data bindings
                    if (JSProf.LGD(33994, JSProf.LGE(33992, refs, '*')["*"] || JSProf.LNE(33993, {}, 11), 'atsignature').atsignature == "dojox.mvc.at") {
                        JSProf.LPE(34000, atWatchHandles, '*')["*"] = JSProf.LRPE(34000, JSProf.LFC(33999, bind, false)(JSProf.LGD(33995, refs["*"], 'target').target, JSProf.LGD(33996, refs["*"], 'targetProp').targetProp, JSProf.LRE(33997, bindWith) || this, "*", JSProf.LNE(33998, {
                            bindDirection: refs["*"].bindDirection,
                            converter: refs["*"].converter,
                            equals: refs["*"].equalsCallback
                        }, 11)));
                    }
                }
            }, 12),
            _stopAtWatchHandles: JSProf.LNF(34004, function () {
                // summary:
                //		Stops data binding synchronization handles as widget is destroyed.
                for (var s in JSProf.LGD(34002, this, '_atWatchHandles')._atWatchHandles) {
                    JSProf.LMC(34003, this._atWatchHandles[s], 'unwatch').unwatch();
                    delete this._atWatchHandles[s];
                }
            }, 12),
            _setAtWatchHandle: JSProf.LNF(34022, function (name, value) {
                // summary:
                //		Called if the value is a dojox/mvc/at handle.
                //		If this widget has started, start data binding with the new dojox/mvc/at handle.
                //		Otherwise, queue it up to this._refs so that _dbstartup() can pick it up.
                if (JSProf.LRE(34005, name) == "ref") {
                    throw JSProf.LNE(34007, new (JSProf.LFC(34006, Error, true))(this + ": 1.7 ref syntax used in conjunction with 1.8 dojox/mvc/at syntax, which is not supported."), 'Error');
                }
                // Claen up older data binding
                var atWatchHandles = JSProf.LPD(34010, this, '_atWatchHandles')._atWatchHandles = JSProf.LRSP(34010, JSProf.LGD(34008, this, '_atWatchHandles')._atWatchHandles || JSProf.LNE(34009, {}, 11));
                if (JSProf.LGE(34011, atWatchHandles, 'name')[name]) {
                    JSProf.LMC(34012, atWatchHandles[name], 'unwatch').unwatch();
                    delete atWatchHandles[name];
                }
                // Claar the value
                this[name] = null;
                // Clear the cache of properties that data binding is established with
                this._excludes = null;
                if (JSProf.LGD(34013, this, '_started')._started) {
                    // If this widget has been started already, establish data binding immediately.
                    JSProf.LPE(34019, atWatchHandles, 'name')[name] = JSProf.LRPE(34019, JSProf.LFC(34018, bind, false)(JSProf.LGD(34014, value, 'target').target, JSProf.LGD(34015, value, 'targetProp').targetProp, this, JSProf.LRE(34016, name), JSProf.LNE(34017, {
                        bindDirection: value.bindDirection,
                        converter: value.converter,
                        equals: value.equalsCallback
                    }, 11)));
                } else {
                    // Otherwise, queue it up to this._refs so that _dbstartup() can pick it up.
                    JSProf.LPE(34021, this._refs, 'name')[name] = JSProf.LRPE(34021, JSProf.LRE(34020, value));
                }
            }, 12),
            _setBind: JSProf.LNF(34035, function (value) {
                // summary:
                //		Sets data binding described in data-mvc-bindings.
                var list = eval("({" + JSProf.LRE(34023, value) + "})");
                for (var prop in JSProf.LRE(34024, list)) {
                    var h = JSProf.LGE(34025, list, 'prop')[prop];
                    if (JSProf.LGD(34028, JSProf.LRE(34026, h) || JSProf.LNE(34027, {}, 11), 'atsignature').atsignature != "dojox.mvc.at") {
                        JSProf.LMC(34031, console, 'warn').warn(JSProf.LRE(34029, prop) + " in " + JSProf.LRU(34030, typeof dataBindAttr === 'undefined' ? undefined : dataBindAttr) + " is not a data binding handle.");
                    } else {
                        JSProf.LMC(34034, this, '_setAtWatchHandle')._setAtWatchHandle(JSProf.LRE(34032, prop), JSProf.LRE(34033, h));
                    }
                }
            }, 12),
            _getExcludesAttr: JSProf.LNF(34044, function () {
                // summary:
                //		Returns list of all properties that data binding is established with.
                if (JSProf.LGD(34036, this, '_excludes')._excludes) {
                    return JSProf.LGD(34037, this, '_excludes')._excludes;    // String[] 
                }
                var list = JSProf.LNE(34038, [], 10);
                for (var s in JSProf.LGD(34039, this, '_atWatchHandles')._atWatchHandles) {
                    if (JSProf.LRE(34040, s) != "*") {
                        JSProf.LMC(34042, list, 'push').push(JSProf.LRE(34041, s));
                    }
                }
                return JSProf.LRE(34043, list);    // String[]
            }, 12),
            _getPropertiesAttr: JSProf.LNF(34060, function () {
                // summary:
                //		Returns list of all properties in this widget, except "id".
                // returns: String[]
                //		 The list of all properties in this widget, except "id"..
                if (JSProf.LGD(34045, this.constructor, '_attribs')._attribs) {
                    return JSProf.LGD(34046, this.constructor, '_attribs')._attribs;    // String[]
                }
                var list = JSProf.LNE(34047, ["onClick"], 10).concat(JSProf.LGD(34048, this.constructor, '_setterAttrs')._setterAttrs);
                JSProf.LMC(34057, array, 'forEach').forEach(JSProf.LNE(34049, [
                    "id",
                    "excludes",
                    "properties",
                    "ref",
                    "binding"
                ], 10), JSProf.LNF(34056, function (s) {
                    var index = JSProf.LMC(34052, array, 'indexOf').indexOf(JSProf.LRE(34050, list), JSProf.LRE(34051, s));
                    if (JSProf.LRE(34053, index) >= 0) {
                        JSProf.LMC(34055, list, 'splice').splice(JSProf.LRE(34054, index), 1);
                    }
                }, 12));
                return JSProf.LPD(34059, this.constructor, '_attribs')._attribs = JSProf.LRSP(34059, JSProf.LRE(34058, list));    // String[]
            }, 12)
        }, 11);
    JSProf.LPE(34062, mixin, JSProf.TMPS.tc7f9fb6dbb1faf412553cb10cae013a682bbdbe0 = mixin.dataBindAttr)[JSProf.TMPS.tc7f9fb6dbb1faf412553cb10cae013a682bbdbe0] = JSProf.LRPE(34062, "");
    // Let parser treat the attribute as string
    var _atBindingMixin = JSProf.LFC(34064, declare, false)("dojox/mvc/_atBindingMixin", null, JSProf.LRE(34063, mixin));
    JSProf.LPD(34066, _atBindingMixin, 'mixin').mixin = JSProf.LRSP(34066, JSProf.LRE(34065, mixin));
    // Keep the plain object version
    return JSProf.LRE(34067, _atBindingMixin);
}, 12));