JSProf.LFC(24957, define, false)(JSProf.LNE(24673, [
    "dojo/_base/lang",
    "dojo/_base/config",
    "dojo/_base/array",
    "dojo/has"
], 10), JSProf.LNF(24956, function (lang, config, array, has) {
    JSProf.LFD(24953, getLogContent);
    JSProf.LFD(24954, equals);
    JSProf.LFD(24955, copy);
    var mvc = JSProf.LMC(24674, lang, 'getObject').getObject("dojox.mvc", true);
    /*=====
    	mvc = {};
    	=====*/
    /*=====
    	dojox.mvc.sync.converter = {
    		// summary:
    		//		Class/object containing the converter functions used when the data goes between data binding source (e.g. data model or controller) to data binding origin (e.g. widget).
    
    		format: function(value, constraints){
    			// summary:
    			//		The converter function used when the data comes from data binding source (e.g. data model or controller) to data binding origin (e.g. widget).
    			// value: Anything
    			//		The data.
    			// constraints: Object
    			//		The options for data conversion, which is: mixin({}, dataBindingTarget.constraints, dataBindingOrigin.constraints).
    		},
    
    		parse: function(value, constraints){
    			// summary:
    			//		The converter function used when the data comes from data binding origin (e.g. widget) to data binding source (e.g. data model or controller).
    			// value: Anything
    			//		The data.
    			// constraints: Object
    			//		The options for data conversion, which is: mixin({}, dataBindingTarget.constraints, dataBindingOrigin.constraints).
    		}
    	};
    
    	dojox.mvc.sync.options = {
    		// summary:
    		//		Data binding options.
    
    		// bindDirection: Number
    		//		The data binding bindDirection, choose from: dojox.mvc.Bind.from, dojox.mvc.Bind.to or dojox.mvc.Bind.both.
    		bindDirection: dojox/mvc.both,
    
    		// converter: dojox/mvc/sync.converter
    		//		Class/object containing the converter functions used when the data goes between data binding source (e.g. data model or controller) to data binding origin (e.g. widget).
    		converter: null,
    
    		// equals: Function
    		//		The function to check if there really was a change when source/target dojo/Stateful indicates so.
    		//		Should take two arguments, and should return true when those two are considered equal.
    		equals: null
    	};
    	=====*/
    JSProf.LMC(24678, has, 'add').add("mvc-bindings-log-api", JSProf.LGD(24677, JSProf.LGE(24675, config, 'mvc')["mvc"] || JSProf.LNE(24676, {}, 11), 'debugBindings').debugBindings);
    var sync;
    if (JSProf.LFC(24679, has, false)("mvc-bindings-log-api")) {
        function getLogContent(source, sourceProp, target, targetProp) {
            return JSProf.LNE(24694, [
                JSProf.LMC(24686, JSProf.LNE(24685, [
                    JSProf.LGD(24680, target, 'canConvertToLoggable').canConvertToLoggable || !JSProf.LGD(24681, target, 'declaredClass').declaredClass ? JSProf.LRE(24682, target) : JSProf.LGD(24683, target, 'declaredClass').declaredClass,
                    JSProf.LRE(24684, targetProp)
                ], 10), 'join').join(":"),
                JSProf.LMC(24693, JSProf.LNE(24692, [
                    JSProf.LGD(24687, source, 'canConvertToLoggable').canConvertToLoggable || !JSProf.LGD(24688, source, 'declaredClass').declaredClass ? JSProf.LRE(24689, source) : JSProf.LGD(24690, source, 'declaredClass').declaredClass,
                    JSProf.LRE(24691, sourceProp)
                ], 10), 'join').join(":")
            ], 10);
        }
    }
    function equals(dst, src) {
        // summary:
        //		Returns if the given two values are equal.
        return JSProf.LRE(24695, dst) === JSProf.LRE(24696, src) || typeof JSProf.LRE(24697, dst) == "number" && JSProf.LFC(24699, isNaN, false)(JSProf.LRE(24698, dst)) && typeof JSProf.LRE(24700, src) == "number" && JSProf.LFC(24702, isNaN, false)(JSProf.LRE(24701, src)) || JSProf.LMC(24706, lang, 'isFunction').isFunction(JSProf.LGD(24705, JSProf.LRE(24703, dst) || JSProf.LNE(24704, {}, 11), 'getTime').getTime) && JSProf.LMC(24710, lang, 'isFunction').isFunction(JSProf.LGD(24709, JSProf.LRE(24707, src) || JSProf.LNE(24708, {}, 11), 'getTime').getTime) && JSProf.LMC(24711, dst, 'getTime').getTime() == JSProf.LMC(24712, src, 'getTime').getTime() || (JSProf.LMC(24716, lang, 'isFunction').isFunction(JSProf.LGD(24715, JSProf.LRE(24713, dst) || JSProf.LNE(24714, {}, 11), 'equals').equals) ? JSProf.LMC(24718, dst, 'equals').equals(JSProf.LRE(24717, src)) : JSProf.LMC(24722, lang, 'isFunction').isFunction(JSProf.LGD(24721, JSProf.LRE(24719, src) || JSProf.LNE(24720, {}, 11), 'equals').equals) ? JSProf.LMC(24724, src, 'equals').equals(JSProf.LRE(24723, dst)) : false);
    }
    function copy(convertFunc, constraints, equals, source, sourceProp, target, targetProp, old, current, excludes) {
        // summary:
        //		Watch for change in property in dojo/Stateful object.
        // description:
        //		Called when targetProp property in target is changed. (This is mainly used as a callback function of dojo/Stateful.watch())
        //		When older value and newer value are different, copies the newer value to sourceProp property in source.
        // convertFunc: Function
        //		The data converter function.
        // constraints: Object?
        //		The data converter options.
        // equals: Function
        //		The function to check if there really was a change when source/target dojo/Stateful indicates so.
        //		Should take two arguments, and should return true when those two are considered equal.
        // source: dojo/Stateful
        //		The dojo/Stateful of copy source.
        // sourceProp: String
        //		The property of copy source, specified in data binding. May be wildcarded.
        // target: dojo/Stateful
        //		The dojo/Stateful of copy target.
        // targetProp: String
        //		The property of copy target, being changed. For wildcard-based data binding, this is used as the property to be copied.
        // old: Anything
        //		The older property value.
        // current: Anything
        //		The newer property value.
        // excludes: Object?
        //		The list of properties that should be excluded from wildcarded data binding.
        // Bail if there is no change in value,
        // or property name is wildcarded and the property to be copied is not in source property list (and source property list is defined),
        // or property name is wildcarded and the property to be copied is in explicit "excludes" list
        if (JSProf.LFC(24727, equals, false)(JSProf.LRE(24725, current), JSProf.LRE(24726, old)) || JSProf.LRE(24728, sourceProp) == "*" && JSProf.LMC(24733, array, 'indexOf').indexOf(JSProf.LMC(24729, source, 'get').get("properties") || JSProf.LNE(24731, [JSProf.LRE(24730, targetProp)], 10), JSProf.LRE(24732, targetProp)) < 0 || JSProf.LRE(24734, sourceProp) == "*" && JSProf.LRE(24735, targetProp) in (JSProf.LRE(24736, excludes) || JSProf.LNE(24737, {}, 11))) {
            return;
        }
        var prop = JSProf.LRE(24738, sourceProp) == "*" ? JSProf.LRE(24739, targetProp) : JSProf.LRE(24740, sourceProp);
        if (JSProf.LFC(24741, has, false)("mvc-bindings-log-api")) {
            var logContent = JSProf.LFC(24746, getLogContent, false)(JSProf.LRE(24742, source), JSProf.LRE(24743, prop), JSProf.LRE(24744, target), JSProf.LRE(24745, targetProp));
        }
        try {
            current = JSProf.LWR(24752, current, JSProf.LRE(24747, convertFunc) ? JSProf.LFC(24750, convertFunc, false)(JSProf.LRE(24748, current), JSProf.LRE(24749, constraints)) : JSProf.LRE(24751, current));
        } catch (e) {
            if (JSProf.LFC(24753, has, false)("mvc-bindings-log-api")) {
                console.log("Copy from" + JSProf.LMC(24754, logContent, 'join').join(" to ") + " was not done as an error is thrown in the converter.");
            }
            return;
        }
        if (JSProf.LFC(24755, has, false)("mvc-bindings-log-api")) {
            console.log(JSProf.LMC(24757, JSProf.LMC(24756, logContent, 'reverse').reverse(), 'join').join(" is being copied from: ") + " (Value: " + JSProf.LRE(24758, current) + " from " + JSProf.LRE(24759, old) + ")");
        }
        // Copy the new value to source
        JSProf.LMC(24761, lang, 'isFunction').isFunction(JSProf.LGD(24760, source, 'set').set) ? JSProf.LMC(24764, source, 'set').set(JSProf.LRE(24762, prop), JSProf.LRE(24763, current)) : JSProf.LPE(24766, source, 'prop')[prop] = JSProf.LRPE(24766, JSProf.LRE(24765, current));
    }
    var directions = JSProf.LNE(24767, {
            from: 1,
            to: 2,
            both: 3
        }, 11), undef;
    sync = JSProf.LWR(24944, sync, JSProf.LNF(24943, function (source, sourceProp, target, targetProp, options) {
        // summary:
        //		Synchronize two dojo/Stateful properties.
        // description:
        //		Synchronize two dojo/Stateful properties.
        // source: dojo/Stateful
        //		Source dojo/Stateful to be synchronized.
        // sourceProp: String
        //		The property name in source to be synchronized.
        // target: dojo/Stateful
        //		Target dojo/Stateful to be synchronized.
        // targetProp: String
        //		The property name in target to be synchronized.
        // options: dojox/mvc/sync.options
        //		Data binding options.
        // returns:
        //		The handle of data binding synchronization.
        var converter = JSProf.LGD(24770, JSProf.LRE(24768, options) || JSProf.LNE(24769, {}, 11), 'converter').converter, converterInstance, formatFunc, parseFunc;
        if (JSProf.LRE(24771, converter)) {
            converterInstance = JSProf.LWR(24773, converterInstance, JSProf.LNE(24772, {
                source: source,
                target: target
            }, 11));
            formatFunc = JSProf.LWR(24778, formatFunc, JSProf.LGD(24774, converter, 'format').format && JSProf.LMC(24777, lang, 'hitch').hitch(JSProf.LRE(24775, converterInstance), JSProf.LGD(24776, converter, 'format').format));
            parseFunc = JSProf.LWR(24783, parseFunc, JSProf.LGD(24779, converter, 'parse').parse && JSProf.LMC(24782, lang, 'hitch').hitch(JSProf.LRE(24780, converterInstance), JSProf.LGD(24781, converter, 'parse').parse));
        }
        var _watchHandles = JSProf.LNE(24784, [], 10), excludes = JSProf.LNE(24785, [], 10), list, constraints = JSProf.LMC(24789, lang, 'mixin').mixin(JSProf.LNE(24786, {}, 11), JSProf.LGD(24787, source, 'constraints').constraints, JSProf.LGD(24788, target, 'constraints').constraints), bindDirection = JSProf.LGD(24792, JSProf.LRE(24790, options) || JSProf.LNE(24791, {}, 11), 'bindDirection').bindDirection || JSProf.LGD(24793, mvc, 'both').both, equals = JSProf.LGD(24796, JSProf.LRE(24794, options) || JSProf.LNE(24795, {}, 11), 'equals').equals || JSProf.LGD(24797, sync, 'equals').equals;
        if (JSProf.LFC(24798, has, false)("mvc-bindings-log-api")) {
            var logContent = JSProf.LFC(24803, getLogContent, false)(JSProf.LRE(24799, source), JSProf.LRE(24800, sourceProp), JSProf.LRE(24801, target), JSProf.LRE(24802, targetProp));
        }
        if (JSProf.LRE(24804, targetProp) == "*") {
            if (JSProf.LRE(24805, sourceProp) != "*") {
                throw JSProf.LNE(24807, new (JSProf.LFC(24806, Error, true))("Unmatched wildcard is specified between source and target."), 'Error');
            }
            list = JSProf.LWR(24809, list, JSProf.LMC(24808, target, 'get').get("properties"));
            if (!JSProf.LRE(24810, list)) {
                list = JSProf.LWR(24812, list, JSProf.LNE(24811, [], 10));
                for (var s in JSProf.LRE(24813, target)) {
                    if (JSProf.LMC(24815, target, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(24814, s)) && JSProf.LRE(24816, s) != "_watchCallbacks") {
                        JSProf.LMC(24818, list, 'push').push(JSProf.LRE(24817, s));
                    }
                }
            }
            excludes = JSProf.LWR(24820, excludes, JSProf.LMC(24819, target, 'get').get("excludes"));
        } else {
            list = JSProf.LWR(24823, list, JSProf.LNE(24822, [JSProf.LRE(24821, sourceProp)], 10));
        }
        if (JSProf.LRE(24824, bindDirection) & JSProf.LGD(24825, mvc, 'from').from) {
            // Start synchronization from source to target (e.g. from model to widget). For wildcard mode (sourceProp == targetProp == "*"), the 1st argument of watch() is omitted
            if (JSProf.LMC(24827, lang, 'isFunction').isFunction(JSProf.LGD(24826, source, 'set').set) && JSProf.LMC(24829, lang, 'isFunction').isFunction(JSProf.LGD(24828, source, 'watch').watch)) {
                JSProf.LMC(24849, _watchHandles, 'push').push(JSProf.LMC(24848, source.watch, 'apply').apply(JSProf.LRE(24830, source), (JSProf.LRE(24831, sourceProp) != "*" ? JSProf.LNE(24833, [JSProf.LRE(24832, sourceProp)], 10) : JSProf.LNE(24834, [], 10)).concat(JSProf.LNE(24847, [JSProf.LNF(24846, function (name, old, current) {
                        JSProf.LFC(24845, copy, false)(JSProf.LRE(24835, formatFunc), JSProf.LRE(24836, constraints), JSProf.LRE(24837, equals), JSProf.LRE(24838, target), JSProf.LRE(24839, targetProp), JSProf.LRE(24840, source), JSProf.LRE(24841, name), JSProf.LRE(24842, old), JSProf.LRE(24843, current), JSProf.LRE(24844, excludes));
                    }, 12)], 10))));
            } else if (JSProf.LFC(24850, has, false)("mvc-bindings-log-api")) {
                console.log(JSProf.LMC(24852, JSProf.LMC(24851, logContent, 'reverse').reverse(), 'join').join(" is not a stateful property. Its change is not reflected to ") + ".");
            }
            // Initial copy from source to target (e.g. from model to widget)
            JSProf.LMC(24876, array, 'forEach').forEach(JSProf.LRE(24853, list), JSProf.LNF(24875, function (prop) {
                // In "all properties synchronization" case, copy is not done for properties in "exclude" list
                if (JSProf.LRE(24854, targetProp) != "*" || !(JSProf.LRE(24855, prop) in (JSProf.LRE(24856, excludes) || JSProf.LNE(24857, {}, 11)))) {
                    var value = JSProf.LMC(24859, lang, 'isFunction').isFunction(JSProf.LGD(24858, source, 'get').get) ? JSProf.LMC(24861, source, 'get').get(JSProf.LRE(24860, prop)) : JSProf.LGE(24862, source, 'prop')[prop];
                    JSProf.LFC(24874, copy, false)(JSProf.LRE(24863, formatFunc), JSProf.LRE(24864, constraints), JSProf.LRE(24865, equals), JSProf.LRE(24866, target), JSProf.LRE(24867, targetProp) == "*" ? JSProf.LRE(24868, prop) : JSProf.LRE(24869, targetProp), JSProf.LRE(24870, source), JSProf.LRE(24871, prop), JSProf.LRE(24872, undef), JSProf.LRE(24873, value));
                }
            }, 12));
        }
        if (JSProf.LRE(24877, bindDirection) & JSProf.LGD(24878, mvc, 'to').to) {
            if (!(JSProf.LRE(24879, bindDirection) & JSProf.LGD(24880, mvc, 'from').from)) {
                // Initial copy from source to target (e.g. from model to widget)
                JSProf.LMC(24904, array, 'forEach').forEach(JSProf.LRE(24881, list), JSProf.LNF(24903, function (prop) {
                    // In "all properties synchronization" case, copy is not done for properties in "exclude" list
                    if (JSProf.LRE(24882, targetProp) != "*" || !(JSProf.LRE(24883, prop) in (JSProf.LRE(24884, excludes) || JSProf.LNE(24885, {}, 11)))) {
                        // Initial copy from target to source (e.g. from widget to model), only done for one-way binding from widget to model
                        var value = JSProf.LMC(24887, lang, 'isFunction').isFunction(JSProf.LGD(24886, target, 'get').get) ? JSProf.LMC(24889, target, 'get').get(JSProf.LRE(24888, targetProp)) : JSProf.LGE(24890, target, 'targetProp')[targetProp];
                        JSProf.LFC(24902, copy, false)(JSProf.LRE(24891, parseFunc), JSProf.LRE(24892, constraints), JSProf.LRE(24893, equals), JSProf.LRE(24894, source), JSProf.LRE(24895, prop), JSProf.LRE(24896, target), JSProf.LRE(24897, targetProp) == "*" ? JSProf.LRE(24898, prop) : JSProf.LRE(24899, targetProp), JSProf.LRE(24900, undef), JSProf.LRE(24901, value));
                    }
                }, 12));
            }
            // Start synchronization from target to source (e.g. from widget to model). For wildcard mode (sourceProp == targetProp == "*"), the 1st argument of watch() is omitted
            if (JSProf.LMC(24906, lang, 'isFunction').isFunction(JSProf.LGD(24905, target, 'set').set) && JSProf.LMC(24908, lang, 'isFunction').isFunction(JSProf.LGD(24907, target, 'watch').watch)) {
                JSProf.LMC(24928, _watchHandles, 'push').push(JSProf.LMC(24927, target.watch, 'apply').apply(JSProf.LRE(24909, target), (JSProf.LRE(24910, targetProp) != "*" ? JSProf.LNE(24912, [JSProf.LRE(24911, targetProp)], 10) : JSProf.LNE(24913, [], 10)).concat(JSProf.LNE(24926, [JSProf.LNF(24925, function (name, old, current) {
                        JSProf.LFC(24924, copy, false)(JSProf.LRE(24914, parseFunc), JSProf.LRE(24915, constraints), JSProf.LRE(24916, equals), JSProf.LRE(24917, source), JSProf.LRE(24918, sourceProp), JSProf.LRE(24919, target), JSProf.LRE(24920, name), JSProf.LRE(24921, old), JSProf.LRE(24922, current), JSProf.LRE(24923, excludes));
                    }, 12)], 10))));
            } else if (JSProf.LFC(24929, has, false)("mvc-bindings-log-api")) {
                console.log(JSProf.LMC(24930, logContent, 'join').join(" is not a stateful property. Its change is not reflected to ") + ".");
            }
        }
        if (JSProf.LFC(24931, has, false)("mvc-bindings-log-api")) {
            console.log(JSProf.LMC(24932, logContent, 'join').join(" is bound to: "));
        }
        var handle = JSProf.LNE(24933, {}, 11);
        JSProf.LPD(24941, handle, 'unwatch').unwatch = JSProf.LRSP(24941, JSProf.LPD(24940, handle, 'remove').remove = JSProf.LRSP(24940, JSProf.LNF(24939, function () {
            for (var h = null; h = JSProf.LWR(24935, h, JSProf.LMC(24934, _watchHandles, 'pop').pop());) {
                JSProf.LMC(24936, h, 'unwatch').unwatch();
            }
            if (JSProf.LFC(24937, has, false)("mvc-bindings-log-api")) {
                console.log(JSProf.LMC(24938, logContent, 'join').join(" is unbound from: "));
            }
        }, 12)));
        return JSProf.LRE(24942, handle);    // dojo/handle
    }, 12));
    JSProf.LMC(24947, lang, 'mixin').mixin(JSProf.LRE(24945, mvc), JSProf.LRE(24946, directions));
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(24952, lang, 'setObject').setObject("dojox.mvc.sync", JSProf.LMC(24951, lang, 'mixin').mixin(JSProf.LRE(24948, sync), JSProf.LNE(24949, { equals: equals }, 11), JSProf.LRE(24950, directions)));
}, 12));