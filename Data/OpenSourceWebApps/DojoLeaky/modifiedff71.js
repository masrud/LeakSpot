JSProf.LFC(25654, define, false)(JSProf.LNE(25383, [
    "require",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/_base/declare",
    "dijit/_Container",
    "dijit/_WidgetBase",
    "./Templated"
], 10), JSProf.LNF(25653, function (require, array, lang, declare, _Container, _WidgetBase, Templated) {
    JSProf.LFD(25649, evalParams);
    JSProf.LFD(25650, unwatchElements);
    JSProf.LFD(25651, flatten);
    JSProf.LFD(25652, loadModules);
    var childTypeAttr = "data-mvc-child-type", childMixinsAttr = "data-mvc-child-mixins", childParamsAttr = "data-mvc-child-props", childBindingsAttr = "data-mvc-child-bindings", undef;
    function evalParams(params) {
        return eval("({" + JSProf.LRE(25384, params) + "})");
    }
    function unwatchElements(w) {
        for (var h = null; h = JSProf.LWR(25388, h, JSProf.LMC(25387, JSProf.LGD(25385, w, '_handles')._handles || JSProf.LNE(25386, [], 10), 'pop').pop());) {
            JSProf.LMC(25389, h, 'unwatch').unwatch();
        }
    }
    function flatten(a) {
        var flattened = JSProf.LNE(25390, [], 10);
        JSProf.LMC(25397, array, 'forEach').forEach(JSProf.LRE(25391, a), JSProf.LNF(25396, function (item) {
            JSProf.LMC(25395, JSProf.LNE(25392, [], 10).push, 'apply').apply(JSProf.LRE(25393, flattened), JSProf.LRE(25394, item));
        }, 12));
        return JSProf.LRE(25398, flattened);
    }
    function loadModules(items, callback) {
        // summary:
        //		Load modules associated with an array of data.
        // items: dojo/Stateful[]
        //		The array of data.
        // callback: Function
        //		Then callback called when the modules have been loaded.
        if (JSProf.LGD(25399, this, 'childClz').childClz) {
            JSProf.LFC(25401, callback, false)(JSProf.LGD(25400, this, 'childClz').childClz);
        } else if (JSProf.LGD(25402, this, 'childType').childType) {
            var typesForItems = !JSProf.LMC(25404, lang, 'isFunction').isFunction(JSProf.LGD(25403, this, 'childType').childType) && !JSProf.LMC(25406, lang, 'isFunction').isFunction(JSProf.LGD(25405, this, 'childMixins').childMixins) ? JSProf.LNE(25411, [JSProf.LNE(25408, [JSProf.LGD(25407, this, 'childType').childType], 10).concat(JSProf.LGD(25409, this, 'childMixins').childMixins && this.childMixins.split(",") || JSProf.LNE(25410, [], 10))], 10) : JSProf.LMC(25433, array, 'map').map(JSProf.LRE(25412, items), JSProf.LNF(25432, function (item) {
                    var type = JSProf.LMC(25414, lang, 'isFunction').isFunction(JSProf.LGD(25413, this, 'childType').childType) ? JSProf.LMC(25416, this.childType, 'call').call(JSProf.LRE(25415, item), this) : JSProf.LGD(25417, this, 'childType').childType, mixins = JSProf.LMC(25419, lang, 'isFunction').isFunction(JSProf.LGD(25418, this, 'childMixins').childMixins) ? JSProf.LMC(25421, this.childMixins, 'call').call(JSProf.LRE(25420, item), this) : JSProf.LGD(25422, this, 'childMixins').childMixins;
                    return JSProf.LRE(25423, type) ? JSProf.LNE(25425, [JSProf.LRE(25424, type)], 10).concat(JSProf.LMC(25427, lang, 'isArray').isArray(JSProf.LRE(25426, mixins)) ? JSProf.LRE(25428, mixins) : JSProf.LRE(25429, mixins) ? mixins.split(",") : JSProf.LNE(25430, [], 10)) : JSProf.LNE(25431, ["dojox/mvc/Templated"], 10);
                }, 12), this);
            JSProf.LFC(25463, require, false)(JSProf.LMC(25445, array, 'filter').filter(JSProf.LMC(25441, array, 'map').map(JSProf.LFC(25435, flatten, false)(JSProf.LRE(25434, typesForItems)), JSProf.LNF(25440, function (type) {
                return JSProf.LMC(25437, lang, 'getObject').getObject(JSProf.LRE(25436, type)) ? JSProf.LRE(25438, undef) : JSProf.LRE(25439, type);
            }, 12)), JSProf.LNF(25444, function (type) {
                return JSProf.LRE(25442, type) !== JSProf.LRE(25443, undef);
            }, 12)), JSProf.LNF(25462, function () {
                JSProf.LMC(25461, callback, 'apply').apply(this, JSProf.LMC(25460, array, 'map').map(JSProf.LRE(25446, typesForItems), JSProf.LNF(25459, function (types) {
                    var clzList = JSProf.LMC(25453, array, 'map').map(JSProf.LRE(25447, types), JSProf.LNF(25452, function (type) {
                            return JSProf.LMC(25449, lang, 'getObject').getObject(JSProf.LRE(25448, type)) || JSProf.LFC(25451, require, false)(JSProf.LRE(25450, type));
                        }, 12));
                    return JSProf.LGD(25454, clzList, 'length').length > 1 ? JSProf.LFC(25457, declare, false)(JSProf.LRE(25455, clzList), JSProf.LNE(25456, {}, 11)) : JSProf.LGE(25458, clzList, 0)[0];
                }, 12)));
            }, 12));
        } else {
            JSProf.LFC(25465, callback, false)(JSProf.LRE(25464, Templated));
        }
    }
    var WidgetList = JSProf.LFC(25643, declare, false)("dojox.mvc.WidgetList", JSProf.LNE(25468, [
            JSProf.LRE(25466, _WidgetBase),
            JSProf.LRE(25467, _Container)
        ], 10), JSProf.LNE(25642, {
            childClz: null,
            childType: "",
            childMixins: "",
            childParams: null,
            childBindings: null,
            children: null,
            partialRebuild: false,
            _relTargetProp: "children",
            postMixInProperties: JSProf.LNF(25476, function () {
                JSProf.LMC(25469, this, 'inherited').inherited(arguments);
                if (JSProf.LGE(25470, this, 'childTypeAttr')[childTypeAttr]) {
                    JSProf.LPD(25472, this, 'childType').childType = JSProf.LRSP(25472, JSProf.LGE(25471, this, 'childTypeAttr')[childTypeAttr]);
                }
                if (JSProf.LGE(25473, this, 'childMixinsAttr')[childMixinsAttr]) {
                    JSProf.LPD(25475, this, 'childMixins').childMixins = JSProf.LRSP(25475, JSProf.LGE(25474, this, 'childMixinsAttr')[childMixinsAttr]);
                }
            }, 12),
            startup: JSProf.LNF(25480, function () {
                JSProf.LMC(25477, this, 'inherited').inherited(arguments);
                JSProf.LMC(25479, this, '_setChildrenAttr')._setChildrenAttr(JSProf.LGD(25478, this, 'children').children);
            }, 12),
            _setChildrenAttr: JSProf.LNF(25511, function (value) {
                // summary:
                //		Handler for calls to set("children", val).
                var children = JSProf.LGD(25481, this, 'children').children;
                JSProf.LMC(25483, this, '_set')._set("children", JSProf.LRE(25482, value));
                if (JSProf.LGD(25484, this, '_started')._started && (!JSProf.LGD(25485, this, '_builtOnce')._builtOnce || JSProf.LRE(25486, children) != JSProf.LRE(25487, value))) {
                    JSProf.LPD(25488, this, '_builtOnce')._builtOnce = JSProf.LRSP(25488, true);
                    JSProf.LMC(25490, this, '_buildChildren')._buildChildren(JSProf.LRE(25489, value));
                    if (JSProf.LMC(25492, lang, 'isArray').isArray(JSProf.LRE(25491, value))) {
                        var _self = this;
                        JSProf.LGD(25493, value, 'watch').watch !== JSProf.LGD(25495, JSProf.LNE(25494, {}, 11), 'watch').watch && JSProf.LMC(25510, JSProf.LPD(25498, this, '_handles')._handles = JSProf.LRSP(25498, JSProf.LGD(25496, this, '_handles')._handles || JSProf.LNE(25497, [], 10)), 'push').push(JSProf.LMC(25509, value, 'watch').watch(JSProf.LNF(25508, function (name, old, current) {
                            if (!JSProf.LFC(25500, isNaN, false)(JSProf.LRE(25499, name))) {
                                var w = JSProf.LGE(25503, JSProf.LMC(25501, _self, 'getChildren').getChildren(), JSProf.TMPS.t39a43b380d32c5d753f416b0fc88c8e0ae054b4d = JSProf.LRE(25502, name) - 0)[JSProf.TMPS.t39a43b380d32c5d753f416b0fc88c8e0ae054b4d];
                                JSProf.LRE(25504, w) && JSProf.LMC(25507, w, 'set').set(JSProf.LGD(25505, w, '_relTargetProp')._relTargetProp || "target", JSProf.LRE(25506, current));
                            }
                        }, 12)));
                    }
                }
            }, 12),
            _buildChildren: JSProf.LNF(25638, function (children) {
                JSProf.LFD(25637, loadedModule);
                // summary:
                //		Create child widgets upon children and inserts them into the container node.
                JSProf.LFC(25512, unwatchElements, false)(this);
                for (var cw = JSProf.LMC(25513, this, 'getChildren').getChildren(), w = null; w = JSProf.LWR(25515, w, JSProf.LMC(25514, cw, 'pop').pop());) {
                    JSProf.LMC(25517, this, 'removeChild').removeChild(JSProf.LRE(25516, w));
                    JSProf.LMC(25518, w, 'destroy').destroy();
                }
                if (!JSProf.LMC(25520, lang, 'isArray').isArray(JSProf.LRE(25519, children))) {
                    return;
                }
                var _self = this, seq = JSProf.LPD(25522, this, '_buildChildrenSeq')._buildChildrenSeq = JSProf.LRSP(25522, (JSProf.LGD(25521, this, '_buildChildrenSeq')._buildChildrenSeq || 0) + 1), initial = JSProf.LNE(25526, {
                        idx: 0,
                        removals: JSProf.LNE(25523, [], 10),
                        adds: JSProf.LNE(25524, [], 10).concat(JSProf.LRE(25525, children))
                    }, 11), changes = JSProf.LNE(25528, [JSProf.LRE(25527, initial)], 10);
                function loadedModule(change) {
                    // summary:
                    //		The callback function called when modules associated with an array splice have been loaded.
                    // description:
                    //		Looks through the queued array splices and process queue entries whose modules have been loaded, by removing/adding child widgets upon the array splice.
                    if (JSProf.LGD(25529, this, '_beingDestroyed')._beingDestroyed || JSProf.LGD(25530, this, '_buildChildrenSeq')._buildChildrenSeq > JSProf.LRE(25531, seq)) {
                        return;
                    }
                    // If this _WidgetList is being destroyed, or newer _buildChildren call comes during lazy loading, bail
                    // Associate an object associated with an array splice with the module loaded
                    var list = JSProf.LMC(25533, JSProf.LNE(25532, [], 10).slice, 'call').call(arguments, 1);
                    JSProf.LPD(25540, change, 'clz').clz = JSProf.LRSP(25540, JSProf.LMC(25535, lang, 'isFunction').isFunction(JSProf.LGD(25534, this, 'childType').childType) || JSProf.LMC(25537, lang, 'isFunction').isFunction(JSProf.LGD(25536, this, 'childMixins').childMixins) ? JSProf.LRE(25538, list) : JSProf.LGE(25539, list, 0)[0]);
                    // Looks through the queued array splices
                    for (var item = null; item = JSProf.LWR(25542, item, JSProf.LMC(25541, changes, 'shift').shift());) {
                        // The modules for the array splice have not been loaded, bail
                        if (!JSProf.LGD(25543, item, 'clz').clz) {
                            changes.unshift(JSProf.LRE(25544, item));
                            break;
                        }
                        // Remove child widgets upon the array removals
                        for (var i = 0, l = JSProf.LGD(25547, JSProf.LGD(25545, item, 'removals').removals || JSProf.LNE(25546, [], 10), 'length').length; JSProf.LRE(25548, i) < JSProf.LRE(25549, l); ++i) {
                            JSProf.LMC(25551, this, 'removeChild').removeChild(JSProf.LGD(25550, item, 'idx').idx);
                        }
                        // Create/add child widgets upon the array adds
                        JSProf.LMC(25608, array, 'forEach').forEach(JSProf.LMC(25602, array, 'map').map(JSProf.LGD(25552, item, 'adds').adds, JSProf.LNF(25601, function (child, idx) {
                            var params = JSProf.LNE(25553, {
                                    ownerDocument: this.ownerDocument,
                                    parent: this,
                                    indexAtStartup: item.idx + idx
                                }, 11), childClz = JSProf.LMC(25555, lang, 'isArray').isArray(JSProf.LGD(25554, item, 'clz').clz) ? JSProf.LGE(25556, item.clz, 'idx')[idx] : JSProf.LGD(25557, item, 'clz').clz;
                            JSProf.LPE(25571, params, JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313 = JSProf.LGD(25568, JSProf.LMC(25559, lang, 'isFunction').isFunction(JSProf.LGD(25558, this, 'childParams').childParams) && JSProf.LMC(25561, this.childParams, 'call').call(JSProf.LRE(25560, params), this) || JSProf.LGD(25562, this, 'childParams').childParams || JSProf.LGE(25563, this, 'childParamsAttr')[childParamsAttr] && JSProf.LMC(25566, evalParams, 'call').call(JSProf.LRE(25564, params), JSProf.LGE(25565, this, 'childParamsAttr')[childParamsAttr]) || JSProf.LNE(25567, {}, 11), '_relTargetProp')._relTargetProp || JSProf.LGD(25569, childClz.prototype, '_relTargetProp')._relTargetProp || "target")[JSProf.TMPS.t5d132b3fc890c6566b11501c55a46b116cfff313] = JSProf.LRPE(25571, JSProf.LRE(25570, child));
                            var childParams = JSProf.LGD(25572, this, 'childParams').childParams || JSProf.LGE(25573, this, 'childParamsAttr')[childParamsAttr] && JSProf.LMC(25576, evalParams, 'call').call(JSProf.LRE(25574, params), JSProf.LGE(25575, this, 'childParamsAttr')[childParamsAttr]), childBindings = JSProf.LGD(25577, this, 'childBindings').childBindings || JSProf.LGE(25578, this, 'childBindingsAttr')[childBindingsAttr] && JSProf.LMC(25581, evalParams, 'call').call(JSProf.LRE(25579, params), JSProf.LGE(25580, this, 'childBindingsAttr')[childBindingsAttr]);
                            if (JSProf.LGD(25582, this, 'templateString').templateString && !JSProf.LGD(25583, params, 'templateString').templateString && !JSProf.LGD(25584, childClz.prototype, 'templateString').templateString) {
                                JSProf.LPD(25586, params, 'templateString').templateString = JSProf.LRSP(25586, JSProf.LGD(25585, this, 'templateString').templateString);
                            }
                            if (JSProf.LRE(25587, childBindings) && !JSProf.LGD(25588, params, 'bindings').bindings && !JSProf.LGD(25589, childClz.prototype, 'bindings').bindings) {
                                JSProf.LPD(25591, params, 'bindings').bindings = JSProf.LRSP(25591, JSProf.LRE(25590, childBindings));
                            }
                            return JSProf.LNE(25600, new (JSProf.LFC(25599, childClz, true))(JSProf.LMC(25598, lang, 'delegate').delegate(JSProf.LMC(25593, lang, 'isFunction').isFunction(JSProf.LRE(25592, childParams)) ? JSProf.LMC(25595, childParams, 'call').call(JSProf.LRE(25594, params), this) : JSProf.LRE(25596, childParams), JSProf.LRE(25597, params))), 'childClz');
                        }, 12), this), JSProf.LNF(25607, function (child, idx) {
                            JSProf.LMC(25606, this, 'addChild').addChild(JSProf.LRE(25603, child), JSProf.LGD(25604, item, 'idx').idx + JSProf.LRE(25605, idx));
                        }, 12), this);
                    }
                }
                JSProf.LMC(25610, lang, 'isFunction').isFunction(JSProf.LGD(25609, children, 'watchElements').watchElements) && JSProf.LMC(25631, JSProf.LPD(25613, this, '_handles')._handles = JSProf.LRSP(25613, JSProf.LGD(25611, this, '_handles')._handles || JSProf.LNE(25612, [], 10)), 'push').push(JSProf.LMC(25630, children, 'watchElements').watchElements(JSProf.LNF(25629, function (idx, removals, adds) {
                    if (!JSProf.LRE(25614, removals) || !JSProf.LRE(25615, adds) || !JSProf.LGD(25616, _self, 'partialRebuild').partialRebuild) {
                        // If the entire array is changed, or this WidgetList should rebuild the whole child widgets with every change in array, rebuild the whole
                        JSProf.LMC(25618, _self, '_buildChildren')._buildChildren(JSProf.LRE(25617, children));
                    } else {
                        // Otherwise queue the array splice and load modules associated with the additions
                        var change = JSProf.LNE(25619, {
                                idx: idx,
                                removals: removals,
                                adds: adds
                            }, 11);
                        JSProf.LMC(25621, changes, 'push').push(JSProf.LRE(25620, change));
                        JSProf.LMC(25628, loadModules, 'call').call(JSProf.LRE(25622, _self), JSProf.LRE(25623, adds), JSProf.LMC(25627, lang, 'hitch').hitch(JSProf.LRE(25624, _self), JSProf.LRE(25625, loadedModule), JSProf.LRE(25626, change)));
                    }
                }, 12)));
                // Load modules associated with the initial data
                JSProf.LMC(25636, loadModules, 'call').call(this, JSProf.LRE(25632, children), JSProf.LMC(25635, lang, 'hitch').hitch(this, JSProf.LRE(25633, loadedModule), JSProf.LRE(25634, initial)));
            }, 12),
            destroy: JSProf.LNF(25641, function () {
                JSProf.LFC(25639, unwatchElements, false)(this);
                JSProf.LMC(25640, this, 'inherited').inherited(arguments);
            }, 12)
        }, 11));
    JSProf.LPE(25647, WidgetList.prototype, 'childTypeAttr')[childTypeAttr] = JSProf.LRPE(25647, JSProf.LPE(25646, WidgetList.prototype, 'childMixinsAttr')[childMixinsAttr] = JSProf.LRPE(25646, JSProf.LPE(25645, WidgetList.prototype, 'childParamsAttr')[childParamsAttr] = JSProf.LRPE(25645, JSProf.LPE(25644, WidgetList.prototype, 'childBindingsAttr')[childBindingsAttr] = JSProf.LRPE(25644, ""))));
    // Let parser treat these attributes as string
    return JSProf.LRE(25648, WidgetList);
}, 12));