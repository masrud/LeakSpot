JSProf.LFC(25020, define, false)(JSProf.LNE(24749, [
    "require",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/_base/declare",
    "dijit/_Container",
    "dijit/_WidgetBase",
    "./Templated"
], 10), JSProf.LNF(25019, function (require, array, lang, declare, _Container, _WidgetBase, Templated) {
    JSProf.LFD(25015, evalParams);
    JSProf.LFD(25016, unwatchElements);
    JSProf.LFD(25017, flatten);
    JSProf.LFD(25018, loadModules);
    var childTypeAttr = "data-mvc-child-type", childMixinsAttr = "data-mvc-child-mixins", childParamsAttr = "data-mvc-child-props", childBindingsAttr = "data-mvc-child-bindings", undef;
    function evalParams(params) {
        return eval("({" + JSProf.LRE(24750, params) + "})");
    }
    function unwatchElements(w) {
        for (var h = null; h = JSProf.LWR(24754, h, JSProf.LMC(24753, JSProf.LGD(24751, w, '_handles')._handles || JSProf.LNE(24752, [], 10), 'pop').pop());) {
            JSProf.LMC(24755, h, 'unwatch').unwatch();
        }
    }
    function flatten(a) {
        var flattened = JSProf.LNE(24756, [], 10);
        JSProf.LMC(24763, array, 'forEach').forEach(JSProf.LRE(24757, a), JSProf.LNF(24762, function (item) {
            JSProf.LMC(24761, JSProf.LNE(24758, [], 10).push, 'apply').apply(JSProf.LRE(24759, flattened), JSProf.LRE(24760, item));
        }, 12));
        return JSProf.LRE(24764, flattened);
    }
    function loadModules(items, callback) {
        // summary:
        //		Load modules associated with an array of data.
        // items: dojo/Stateful[]
        //		The array of data.
        // callback: Function
        //		Then callback called when the modules have been loaded.
        if (JSProf.LGD(24765, this, 'childClz').childClz) {
            JSProf.LFC(24767, callback, false)(JSProf.LGD(24766, this, 'childClz').childClz);
        } else if (JSProf.LGD(24768, this, 'childType').childType) {
            var typesForItems = !JSProf.LMC(24770, lang, 'isFunction').isFunction(JSProf.LGD(24769, this, 'childType').childType) && !JSProf.LMC(24772, lang, 'isFunction').isFunction(JSProf.LGD(24771, this, 'childMixins').childMixins) ? JSProf.LNE(24777, [JSProf.LNE(24774, [JSProf.LGD(24773, this, 'childType').childType], 10).concat(JSProf.LGD(24775, this, 'childMixins').childMixins && this.childMixins.split(",") || JSProf.LNE(24776, [], 10))], 10) : JSProf.LMC(24799, array, 'map').map(JSProf.LRE(24778, items), JSProf.LNF(24798, function (item) {
                    var type = JSProf.LMC(24780, lang, 'isFunction').isFunction(JSProf.LGD(24779, this, 'childType').childType) ? JSProf.LMC(24782, this.childType, 'call').call(JSProf.LRE(24781, item), this) : JSProf.LGD(24783, this, 'childType').childType, mixins = JSProf.LMC(24785, lang, 'isFunction').isFunction(JSProf.LGD(24784, this, 'childMixins').childMixins) ? JSProf.LMC(24787, this.childMixins, 'call').call(JSProf.LRE(24786, item), this) : JSProf.LGD(24788, this, 'childMixins').childMixins;
                    return JSProf.LRE(24789, type) ? JSProf.LNE(24791, [JSProf.LRE(24790, type)], 10).concat(JSProf.LMC(24793, lang, 'isArray').isArray(JSProf.LRE(24792, mixins)) ? JSProf.LRE(24794, mixins) : JSProf.LRE(24795, mixins) ? mixins.split(",") : JSProf.LNE(24796, [], 10)) : JSProf.LNE(24797, ["dojox/mvc/Templated"], 10);
                }, 12), this);
            JSProf.LFC(24829, require, false)(JSProf.LMC(24811, array, 'filter').filter(JSProf.LMC(24807, array, 'map').map(JSProf.LFC(24801, flatten, false)(JSProf.LRE(24800, typesForItems)), JSProf.LNF(24806, function (type) {
                return JSProf.LMC(24803, lang, 'getObject').getObject(JSProf.LRE(24802, type)) ? JSProf.LRE(24804, undef) : JSProf.LRE(24805, type);
            }, 12)), JSProf.LNF(24810, function (type) {
                return JSProf.LRE(24808, type) !== JSProf.LRE(24809, undef);
            }, 12)), JSProf.LNF(24828, function () {
                JSProf.LMC(24827, callback, 'apply').apply(this, JSProf.LMC(24826, array, 'map').map(JSProf.LRE(24812, typesForItems), JSProf.LNF(24825, function (types) {
                    var clzList = JSProf.LMC(24819, array, 'map').map(JSProf.LRE(24813, types), JSProf.LNF(24818, function (type) {
                            return JSProf.LMC(24815, lang, 'getObject').getObject(JSProf.LRE(24814, type)) || JSProf.LFC(24817, require, false)(JSProf.LRE(24816, type));
                        }, 12));
                    return JSProf.LGD(24820, clzList, 'length').length > 1 ? JSProf.LFC(24823, declare, false)(JSProf.LRE(24821, clzList), JSProf.LNE(24822, {}, 11)) : JSProf.LGE(24824, clzList, 0)[0];
                }, 12)));
            }, 12));
        } else {
            JSProf.LFC(24831, callback, false)(JSProf.LRE(24830, Templated));
        }
    }
    var WidgetList = JSProf.LFC(25009, declare, false)("dojox.mvc.WidgetList", JSProf.LNE(24834, [
            JSProf.LRE(24832, _WidgetBase),
            JSProf.LRE(24833, _Container)
        ], 10), JSProf.LNE(25008, {
            childClz: null,
            childType: "",
            childMixins: "",
            childParams: null,
            childBindings: null,
            children: null,
            partialRebuild: false,
            _relTargetProp: "children",
            postMixInProperties: JSProf.LNF(24842, function () {
                JSProf.LMC(24835, this, 'inherited').inherited(arguments);
                if (JSProf.LGE(24836, this, 'childTypeAttr')[childTypeAttr]) {
                    JSProf.LPD(24838, this, 'childType').childType = JSProf.LRSP(24838, JSProf.LGE(24837, this, 'childTypeAttr')[childTypeAttr]);
                }
                if (JSProf.LGE(24839, this, 'childMixinsAttr')[childMixinsAttr]) {
                    JSProf.LPD(24841, this, 'childMixins').childMixins = JSProf.LRSP(24841, JSProf.LGE(24840, this, 'childMixinsAttr')[childMixinsAttr]);
                }
            }, 12),
            startup: JSProf.LNF(24846, function () {
                JSProf.LMC(24843, this, 'inherited').inherited(arguments);
                JSProf.LMC(24845, this, '_setChildrenAttr')._setChildrenAttr(JSProf.LGD(24844, this, 'children').children);
            }, 12),
            _setChildrenAttr: JSProf.LNF(24877, function (value) {
                // summary:
                //		Handler for calls to set("children", val).
                var children = JSProf.LGD(24847, this, 'children').children;
                JSProf.LMC(24849, this, '_set')._set("children", JSProf.LRE(24848, value));
                if (JSProf.LGD(24850, this, '_started')._started && (!JSProf.LGD(24851, this, '_builtOnce')._builtOnce || JSProf.LRE(24852, children) != JSProf.LRE(24853, value))) {
                    JSProf.LPD(24854, this, '_builtOnce')._builtOnce = JSProf.LRSP(24854, true);
                    JSProf.LMC(24856, this, '_buildChildren')._buildChildren(JSProf.LRE(24855, value));
                    if (JSProf.LMC(24858, lang, 'isArray').isArray(JSProf.LRE(24857, value))) {
                        var _self = this;
                        JSProf.LGD(24859, value, 'watch').watch !== JSProf.LGD(24861, JSProf.LNE(24860, {}, 11), 'watch').watch && JSProf.LMC(24876, JSProf.LPD(24864, this, '_handles')._handles = JSProf.LRSP(24864, JSProf.LGD(24862, this, '_handles')._handles || JSProf.LNE(24863, [], 10)), 'push').push(JSProf.LMC(24875, value, 'watch').watch(JSProf.LNF(24874, function (name, old, current) {
                            if (!JSProf.LFC(24866, isNaN, false)(JSProf.LRE(24865, name))) {
                                var w = JSProf.LGE(24869, JSProf.LMC(24867, _self, 'getChildren').getChildren(), JSProf.TMPS.t39a43b380d32c5d753f416b0fc88c8e0ae054b4d = JSProf.LRE(24868, name) - 0)[JSProf.TMPS.t39a43b380d32c5d753f416b0fc88c8e0ae054b4d];
                                JSProf.LRE(24870, w) && JSProf.LMC(24873, w, 'set').set(JSProf.LGD(24871, w, '_relTargetProp')._relTargetProp || "target", JSProf.LRE(24872, current));
                            }
                        }, 12)));
                    }
                }
            }, 12),
            _buildChildren: JSProf.LNF(25004, function (children) {
                JSProf.LFD(25003, loadedModule);
                // summary:
                //		Create child widgets upon children and inserts them into the container node.
                JSProf.LFC(24878, unwatchElements, false)(this);
                for (var cw = JSProf.LMC(24879, this, 'getChildren').getChildren(), w = null; w = JSProf.LWR(24881, w, JSProf.LMC(24880, cw, 'pop').pop());) {
                    JSProf.LMC(24883, this, 'removeChild').removeChild(JSProf.LRE(24882, w));
                    JSProf.LMC(24884, w, 'destroy').destroy();
                }
                if (!JSProf.LMC(24886, lang, 'isArray').isArray(JSProf.LRE(24885, children))) {
                    return;
                }
                var _self = this, seq = JSProf.LPD(24888, this, '_buildChildrenSeq')._buildChildrenSeq = JSProf.LRSP(24888, (JSProf.LGD(24887, this, '_buildChildrenSeq')._buildChildrenSeq || 0) + 1), initial = JSProf.LNE(24892, {
                        idx: 0,
                        removals: JSProf.LNE(24889, [], 10),
                        adds: JSProf.LNE(24890, [], 10).concat(JSProf.LRE(24891, children))
                    }, 11), changes = JSProf.LNE(24894, [JSProf.LRE(24893, initial)], 10);
                function loadedModule(change) {
                    // summary:
                    //		The callback function called when modules associated with an array splice have been loaded.
                    // description:
                    //		Looks through the queued array splices and process queue entries whose modules have been loaded, by removing/adding child widgets upon the array splice.
                    if (JSProf.LGD(24895, this, '_beingDestroyed')._beingDestroyed || JSProf.LGD(24896, this, '_buildChildrenSeq')._buildChildrenSeq > JSProf.LRE(24897, seq)) {
                        return;
                    }
                    // If this _WidgetList is being destroyed, or newer _buildChildren call comes during lazy loading, bail
                    // Associate an object associated with an array splice with the module loaded
                    var list = JSProf.LMC(24899, JSProf.LNE(24898, [], 10).slice, 'call').call(arguments, 1);
                    JSProf.LPD(24906, change, 'clz').clz = JSProf.LRSP(24906, JSProf.LMC(24901, lang, 'isFunction').isFunction(JSProf.LGD(24900, this, 'childType').childType) || JSProf.LMC(24903, lang, 'isFunction').isFunction(JSProf.LGD(24902, this, 'childMixins').childMixins) ? JSProf.LRE(24904, list) : JSProf.LGE(24905, list, 0)[0]);
                    // Looks through the queued array splices
                    for (var item = null; item = JSProf.LWR(24908, item, JSProf.LMC(24907, changes, 'shift').shift());) {
                        // The modules for the array splice have not been loaded, bail
                        if (!JSProf.LGD(24909, item, 'clz').clz) {
                            changes.unshift(JSProf.LRE(24910, item));
                            break;
                        }
                        // Remove child widgets upon the array removals
                        for (var i = 0, l = JSProf.LGD(24913, JSProf.LGD(24911, item, 'removals').removals || JSProf.LNE(24912, [], 10), 'length').length; JSProf.LRE(24914, i) < JSProf.LRE(24915, l); ++i) {
                            JSProf.LMC(24917, this, 'removeChild').removeChild(JSProf.LGD(24916, item, 'idx').idx);
                        }
                        // Create/add child widgets upon the array adds
                        JSProf.LMC(24974, array, 'forEach').forEach(JSProf.LMC(24968, array, 'map').map(JSProf.LGD(24918, item, 'adds').adds, JSProf.LNF(24967, function (child, idx) {
                            var params = JSProf.LNE(24919, {
                                    ownerDocument: this.ownerDocument,
                                    parent: this,
                                    indexAtStartup: item.idx + idx
                                }, 11), childClz = JSProf.LMC(24921, lang, 'isArray').isArray(JSProf.LGD(24920, item, 'clz').clz) ? JSProf.LGE(24922, item.clz, 'idx')[idx] : JSProf.LGD(24923, item, 'clz').clz;
                            JSProf.LPE(24937, params, JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313 = JSProf.LGD(24934, JSProf.LMC(24925, lang, 'isFunction').isFunction(JSProf.LGD(24924, this, 'childParams').childParams) && JSProf.LMC(24927, this.childParams, 'call').call(JSProf.LRE(24926, params), this) || JSProf.LGD(24928, this, 'childParams').childParams || JSProf.LGE(24929, this, 'childParamsAttr')[childParamsAttr] && JSProf.LMC(24932, evalParams, 'call').call(JSProf.LRE(24930, params), JSProf.LGE(24931, this, 'childParamsAttr')[childParamsAttr]) || JSProf.LNE(24933, {}, 11), '_relTargetProp')._relTargetProp || JSProf.LGD(24935, childClz.prototype, '_relTargetProp')._relTargetProp || "target")[JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313] = JSProf.LRPE(24937, JSProf.LRE(24936, child));
                            var childParams = JSProf.LGD(24938, this, 'childParams').childParams || JSProf.LGE(24939, this, 'childParamsAttr')[childParamsAttr] && JSProf.LMC(24942, evalParams, 'call').call(JSProf.LRE(24940, params), JSProf.LGE(24941, this, 'childParamsAttr')[childParamsAttr]), childBindings = JSProf.LGD(24943, this, 'childBindings').childBindings || JSProf.LGE(24944, this, 'childBindingsAttr')[childBindingsAttr] && JSProf.LMC(24947, evalParams, 'call').call(JSProf.LRE(24945, params), JSProf.LGE(24946, this, 'childBindingsAttr')[childBindingsAttr]);
                            if (JSProf.LGD(24948, this, 'templateString').templateString && !JSProf.LGD(24949, params, 'templateString').templateString && !JSProf.LGD(24950, childClz.prototype, 'templateString').templateString) {
                                JSProf.LPD(24952, params, 'templateString').templateString = JSProf.LRSP(24952, JSProf.LGD(24951, this, 'templateString').templateString);
                            }
                            if (JSProf.LRE(24953, childBindings) && !JSProf.LGD(24954, params, 'bindings').bindings && !JSProf.LGD(24955, childClz.prototype, 'bindings').bindings) {
                                JSProf.LPD(24957, params, 'bindings').bindings = JSProf.LRSP(24957, JSProf.LRE(24956, childBindings));
                            }
                            return JSProf.LNE(24966, new (JSProf.LFC(24965, childClz, true))(JSProf.LMC(24964, lang, 'delegate').delegate(JSProf.LMC(24959, lang, 'isFunction').isFunction(JSProf.LRE(24958, childParams)) ? JSProf.LMC(24961, childParams, 'call').call(JSProf.LRE(24960, params), this) : JSProf.LRE(24962, childParams), JSProf.LRE(24963, params))), 'childClz');
                        }, 12), this), JSProf.LNF(24973, function (child, idx) {
                            JSProf.LMC(24972, this, 'addChild').addChild(JSProf.LRE(24969, child), JSProf.LGD(24970, item, 'idx').idx + JSProf.LRE(24971, idx));
                        }, 12), this);
                    }
                }
                JSProf.LMC(24976, lang, 'isFunction').isFunction(JSProf.LGD(24975, children, 'watchElements').watchElements) && JSProf.LMC(24997, JSProf.LPD(24979, this, '_handles')._handles = JSProf.LRSP(24979, JSProf.LGD(24977, this, '_handles')._handles || JSProf.LNE(24978, [], 10)), 'push').push(JSProf.LMC(24996, children, 'watchElements').watchElements(JSProf.LNF(24995, function (idx, removals, adds) {
                    if (!JSProf.LRE(24980, removals) || !JSProf.LRE(24981, adds) || !JSProf.LGD(24982, _self, 'partialRebuild').partialRebuild) {
                        // If the entire array is changed, or this WidgetList should rebuild the whole child widgets with every change in array, rebuild the whole
                        JSProf.LMC(24984, _self, '_buildChildren')._buildChildren(JSProf.LRE(24983, children));
                    } else {
                        // Otherwise queue the array splice and load modules associated with the additions
                        var change = JSProf.LNE(24985, {
                                idx: idx,
                                removals: removals,
                                adds: adds
                            }, 11);
                        JSProf.LMC(24987, changes, 'push').push(JSProf.LRE(24986, change));
                        JSProf.LMC(24994, loadModules, 'call').call(JSProf.LRE(24988, _self), JSProf.LRE(24989, adds), JSProf.LMC(24993, lang, 'hitch').hitch(JSProf.LRE(24990, _self), JSProf.LRE(24991, loadedModule), JSProf.LRE(24992, change)));
                    }
                }, 12)));
                // Load modules associated with the initial data
                JSProf.LMC(25002, loadModules, 'call').call(this, JSProf.LRE(24998, children), JSProf.LMC(25001, lang, 'hitch').hitch(this, JSProf.LRE(24999, loadedModule), JSProf.LRE(25000, initial)));
            }, 12),
            destroy: JSProf.LNF(25007, function () {
                JSProf.LFC(25005, unwatchElements, false)(this);
                JSProf.LMC(25006, this, 'inherited').inherited(arguments);
            }, 12)
        }, 11));
    JSProf.LPE(25013, WidgetList.prototype, 'childTypeAttr')[childTypeAttr] = JSProf.LRPE(25013, JSProf.LPE(25012, WidgetList.prototype, 'childMixinsAttr')[childMixinsAttr] = JSProf.LRPE(25012, JSProf.LPE(25011, WidgetList.prototype, 'childParamsAttr')[childParamsAttr] = JSProf.LRPE(25011, JSProf.LPE(25010, WidgetList.prototype, 'childBindingsAttr')[childBindingsAttr] = JSProf.LRPE(25010, ""))));
    // Let parser treat these attributes as string
    return JSProf.LRE(25014, WidgetList);
}, 12));