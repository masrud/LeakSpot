JSProf.LFC(25781, define, false)(JSProf.LNE(25497, [
    "dojo/_base/lang",
    "dojo/_base/config",
    "dojo/_base/array",
    "dojo/has"
], 10), JSProf.LNF(25780, function (lang, config, array, has) {
    JSProf.LFD(25777, getLogContent);
    JSProf.LFD(25778, equals);
    JSProf.LFD(25779, copy);
    var mvc = JSProf.LMC(25498, lang, 'getObject').getObject("dojox.mvc", true);
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
    JSProf.LMC(25502, has, 'add').add("mvc-bindings-log-api", JSProf.LGD(25501, JSProf.LGE(25499, config, 'mvc')["mvc"] || JSProf.LNE(25500, {}, 11), 'debugBindings').debugBindings);
    var sync;
    if (JSProf.LFC(25503, has, false)("mvc-bindings-log-api")) {
        function getLogContent(source, sourceProp, target, targetProp) {
            return JSProf.LNE(25518, [
                JSProf.LMC(25510, JSProf.LNE(25509, [
                    JSProf.LGD(25504, target, 'canConvertToLoggable').canConvertToLoggable || !JSProf.LGD(25505, target, 'declaredClass').declaredClass ? JSProf.LRE(25506, target) : JSProf.LGD(25507, target, 'declaredClass').declaredClass,
                    JSProf.LRE(25508, targetProp)
                ], 10), 'join').join(":"),
                JSProf.LMC(25517, JSProf.LNE(25516, [
                    JSProf.LGD(25511, source, 'canConvertToLoggable').canConvertToLoggable || !JSProf.LGD(25512, source, 'declaredClass').declaredClass ? JSProf.LRE(25513, source) : JSProf.LGD(25514, source, 'declaredClass').declaredClass,
                    JSProf.LRE(25515, sourceProp)
                ], 10), 'join').join(":")
            ], 10);
        }
    }
    function equals(dst, src) {
        // summary:
        //		Returns if the given two values are equal.
        return JSProf.LRE(25519, dst) === JSProf.LRE(25520, src) || typeof JSProf.LRE(25521, dst) == "number" && JSProf.LFC(25523, isNaN, false)(JSProf.LRE(25522, dst)) && typeof JSProf.LRE(25524, src) == "number" && JSProf.LFC(25526, isNaN, false)(JSProf.LRE(25525, src)) || JSProf.LMC(25530, lang, 'isFunction').isFunction(JSProf.LGD(25529, JSProf.LRE(25527, dst) || JSProf.LNE(25528, {}, 11), 'getTime').getTime) && JSProf.LMC(25534, lang, 'isFunction').isFunction(JSProf.LGD(25533, JSProf.LRE(25531, src) || JSProf.LNE(25532, {}, 11), 'getTime').getTime) && JSProf.LMC(25535, dst, 'getTime').getTime() == JSProf.LMC(25536, src, 'getTime').getTime() || (JSProf.LMC(25540, lang, 'isFunction').isFunction(JSProf.LGD(25539, JSProf.LRE(25537, dst) || JSProf.LNE(25538, {}, 11), 'equals').equals) ? JSProf.LMC(25542, dst, 'equals').equals(JSProf.LRE(25541, src)) : JSProf.LMC(25546, lang, 'isFunction').isFunction(JSProf.LGD(25545, JSProf.LRE(25543, src) || JSProf.LNE(25544, {}, 11), 'equals').equals) ? JSProf.LMC(25548, src, 'equals').equals(JSProf.LRE(25547, dst)) : false);
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
        if (JSProf.LFC(25551, equals, false)(JSProf.LRE(25549, current), JSProf.LRE(25550, old)) || JSProf.LRE(25552, sourceProp) == "*" && JSProf.LMC(25557, array, 'indexOf').indexOf(JSProf.LMC(25553, source, 'get').get("properties") || JSProf.LNE(25555, [JSProf.LRE(25554, targetProp)], 10), JSProf.LRE(25556, targetProp)) < 0 || JSProf.LRE(25558, sourceProp) == "*" && JSProf.LRE(25559, targetProp) in (JSProf.LRE(25560, excludes) || JSProf.LNE(25561, {}, 11))) {
            return;
        }
        var prop = JSProf.LRE(25562, sourceProp) == "*" ? JSProf.LRE(25563, targetProp) : JSProf.LRE(25564, sourceProp);
        if (JSProf.LFC(25565, has, false)("mvc-bindings-log-api")) {
            var logContent = JSProf.LFC(25570, getLogContent, false)(JSProf.LRE(25566, source), JSProf.LRE(25567, prop), JSProf.LRE(25568, target), JSProf.LRE(25569, targetProp));
        }
        try {
            current = JSProf.LWR(25576, current, JSProf.LRE(25571, convertFunc) ? JSProf.LFC(25574, convertFunc, false)(JSProf.LRE(25572, current), JSProf.LRE(25573, constraints)) : JSProf.LRE(25575, current));
        } catch (e) {
            if (JSProf.LFC(25577, has, false)("mvc-bindings-log-api")) {
                console.log("Copy from" + JSProf.LMC(25578, logContent, 'join').join(" to ") + " was not done as an error is thrown in the converter.");
            }
            return;
        }
        if (JSProf.LFC(25579, has, false)("mvc-bindings-log-api")) {
            console.log(JSProf.LMC(25581, JSProf.LMC(25580, logContent, 'reverse').reverse(), 'join').join(" is being copied from: ") + " (Value: " + JSProf.LRE(25582, current) + " from " + JSProf.LRE(25583, old) + ")");
        }
        // Copy the new value to source
        JSProf.LMC(25585, lang, 'isFunction').isFunction(JSProf.LGD(25584, source, 'set').set) ? JSProf.LMC(25588, source, 'set').set(JSProf.LRE(25586, prop), JSProf.LRE(25587, current)) : JSProf.LPE(25590, source, 'prop')[prop] = JSProf.LRPE(25590, JSProf.LRE(25589, current));
    }
    var directions = JSProf.LNE(25591, {
            from: 1,
            to: 2,
            both: 3
        }, 11), undef;
    sync = JSProf.LWR(25768, sync, JSProf.LNF(25767, function (source, sourceProp, target, targetProp, options) {
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
        var converter = JSProf.LGD(25594, JSProf.LRE(25592, options) || JSProf.LNE(25593, {}, 11), 'converter').converter, converterInstance, formatFunc, parseFunc;
        if (JSProf.LRE(25595, converter)) {
            converterInstance = JSProf.LWR(25597, converterInstance, JSProf.LNE(25596, {
                source: source,
                target: target
            }, 11));
            formatFunc = JSProf.LWR(25602, formatFunc, JSProf.LGD(25598, converter, 'format').format && JSProf.LMC(25601, lang, 'hitch').hitch(JSProf.LRE(25599, converterInstance), JSProf.LGD(25600, converter, 'format').format));
            parseFunc = JSProf.LWR(25607, parseFunc, JSProf.LGD(25603, converter, 'parse').parse && JSProf.LMC(25606, lang, 'hitch').hitch(JSProf.LRE(25604, converterInstance), JSProf.LGD(25605, converter, 'parse').parse));
        }
        var _watchHandles = JSProf.LNE(25608, [], 10), excludes = JSProf.LNE(25609, [], 10), list, constraints = JSProf.LMC(25613, lang, 'mixin').mixin(JSProf.LNE(25610, {}, 11), JSProf.LGD(25611, source, 'constraints').constraints, JSProf.LGD(25612, target, 'constraints').constraints), bindDirection = JSProf.LGD(25616, JSProf.LRE(25614, options) || JSProf.LNE(25615, {}, 11), 'bindDirection').bindDirection || JSProf.LGD(25617, mvc, 'both').both, equals = JSProf.LGD(25620, JSProf.LRE(25618, options) || JSProf.LNE(25619, {}, 11), 'equals').equals || JSProf.LGD(25621, sync, 'equals').equals;
        if (JSProf.LFC(25622, has, false)("mvc-bindings-log-api")) {
            var logContent = JSProf.LFC(25627, getLogContent, false)(JSProf.LRE(25623, source), JSProf.LRE(25624, sourceProp), JSProf.LRE(25625, target), JSProf.LRE(25626, targetProp));
        }
        if (JSProf.LRE(25628, targetProp) == "*") {
            if (JSProf.LRE(25629, sourceProp) != "*") {
                throw JSProf.LNE(25631, new (JSProf.LFC(25630, Error, true))("Unmatched wildcard is specified between source and target."), 'Error');
            }
            list = JSProf.LWR(25633, list, JSProf.LMC(25632, target, 'get').get("properties"));
            if (!JSProf.LRE(25634, list)) {
                list = JSProf.LWR(25636, list, JSProf.LNE(25635, [], 10));
                for (var s in JSProf.LRE(25637, target)) {
                    if (JSProf.LMC(25639, target, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(25638, s)) && JSProf.LRE(25640, s) != "_watchCallbacks") {
                        JSProf.LMC(25642, list, 'push').push(JSProf.LRE(25641, s));
                    }
                }
            }
            excludes = JSProf.LWR(25644, excludes, JSProf.LMC(25643, target, 'get').get("excludes"));
        } else {
            list = JSProf.LWR(25647, list, JSProf.LNE(25646, [JSProf.LRE(25645, sourceProp)], 10));
        }
        if (JSProf.LRE(25648, bindDirection) & JSProf.LGD(25649, mvc, 'from').from) {
            // Start synchronization from source to target (e.g. from model to widget). For wildcard mode (sourceProp == targetProp == "*"), the 1st argument of watch() is omitted
            if (JSProf.LMC(25651, lang, 'isFunction').isFunction(JSProf.LGD(25650, source, 'set').set) && JSProf.LMC(25653, lang, 'isFunction').isFunction(JSProf.LGD(25652, source, 'watch').watch)) {
                JSProf.LMC(25673, _watchHandles, 'push').push(JSProf.LMC(25672, source.watch, 'apply').apply(JSProf.LRE(25654, source), (JSProf.LRE(25655, sourceProp) != "*" ? JSProf.LNE(25657, [JSProf.LRE(25656, sourceProp)], 10) : JSProf.LNE(25658, [], 10)).concat(JSProf.LNE(25671, [JSProf.LNF(25670, function (name, old, current) {
                        JSProf.LFC(25669, copy, false)(JSProf.LRE(25659, formatFunc), JSProf.LRE(25660, constraints), JSProf.LRE(25661, equals), JSProf.LRE(25662, target), JSProf.LRE(25663, targetProp), JSProf.LRE(25664, source), JSProf.LRE(25665, name), JSProf.LRE(25666, old), JSProf.LRE(25667, current), JSProf.LRE(25668, excludes));
                    }, 12)], 10))));
            } else if (JSProf.LFC(25674, has, false)("mvc-bindings-log-api")) {
                console.log(JSProf.LMC(25676, JSProf.LMC(25675, logContent, 'reverse').reverse(), 'join').join(" is not a stateful property. Its change is not reflected to ") + ".");
            }
            // Initial copy from source to target (e.g. from model to widget)
            JSProf.LMC(25700, array, 'forEach').forEach(JSProf.LRE(25677, list), JSProf.LNF(25699, function (prop) {
                // In "all properties synchronization" case, copy is not done for properties in "exclude" list
                if (JSProf.LRE(25678, targetProp) != "*" || !(JSProf.LRE(25679, prop) in (JSProf.LRE(25680, excludes) || JSProf.LNE(25681, {}, 11)))) {
                    var value = JSProf.LMC(25683, lang, 'isFunction').isFunction(JSProf.LGD(25682, source, 'get').get) ? JSProf.LMC(25685, source, 'get').get(JSProf.LRE(25684, prop)) : JSProf.LGE(25686, source, 'prop')[prop];
                    JSProf.LFC(25698, copy, false)(JSProf.LRE(25687, formatFunc), JSProf.LRE(25688, constraints), JSProf.LRE(25689, equals), JSProf.LRE(25690, target), JSProf.LRE(25691, targetProp) == "*" ? JSProf.LRE(25692, prop) : JSProf.LRE(25693, targetProp), JSProf.LRE(25694, source), JSProf.LRE(25695, prop), JSProf.LRE(25696, undef), JSProf.LRE(25697, value));
                }
            }, 12));
        }
        if (JSProf.LRE(25701, bindDirection) & JSProf.LGD(25702, mvc, 'to').to) {
            if (!(JSProf.LRE(25703, bindDirection) & JSProf.LGD(25704, mvc, 'from').from)) {
                // Initial copy from source to target (e.g. from model to widget)
                JSProf.LMC(25728, array, 'forEach').forEach(JSProf.LRE(25705, list), JSProf.LNF(25727, function (prop) {
                    // In "all properties synchronization" case, copy is not done for properties in "exclude" list
                    if (JSProf.LRE(25706, targetProp) != "*" || !(JSProf.LRE(25707, prop) in (JSProf.LRE(25708, excludes) || JSProf.LNE(25709, {}, 11)))) {
                        // Initial copy from target to source (e.g. from widget to model), only done for one-way binding from widget to model
                        var value = JSProf.LMC(25711, lang, 'isFunction').isFunction(JSProf.LGD(25710, target, 'get').get) ? JSProf.LMC(25713, target, 'get').get(JSProf.LRE(25712, targetProp)) : JSProf.LGE(25714, target, 'targetProp')[targetProp];
                        JSProf.LFC(25726, copy, false)(JSProf.LRE(25715, parseFunc), JSProf.LRE(25716, constraints), JSProf.LRE(25717, equals), JSProf.LRE(25718, source), JSProf.LRE(25719, prop), JSProf.LRE(25720, target), JSProf.LRE(25721, targetProp) == "*" ? JSProf.LRE(25722, prop) : JSProf.LRE(25723, targetProp), JSProf.LRE(25724, undef), JSProf.LRE(25725, value));
                    }
                }, 12));
            }
            // Start synchronization from target to source (e.g. from widget to model). For wildcard mode (sourceProp == targetProp == "*"), the 1st argument of watch() is omitted
            if (JSProf.LMC(25730, lang, 'isFunction').isFunction(JSProf.LGD(25729, target, 'set').set) && JSProf.LMC(25732, lang, 'isFunction').isFunction(JSProf.LGD(25731, target, 'watch').watch)) {
                JSProf.LMC(25752, _watchHandles, 'push').push(JSProf.LMC(25751, target.watch, 'apply').apply(JSProf.LRE(25733, target), (JSProf.LRE(25734, targetProp) != "*" ? JSProf.LNE(25736, [JSProf.LRE(25735, targetProp)], 10) : JSProf.LNE(25737, [], 10)).concat(JSProf.LNE(25750, [JSProf.LNF(25749, function (name, old, current) {
                        JSProf.LFC(25748, copy, false)(JSProf.LRE(25738, parseFunc), JSProf.LRE(25739, constraints), JSProf.LRE(25740, equals), JSProf.LRE(25741, source), JSProf.LRE(25742, sourceProp), JSProf.LRE(25743, target), JSProf.LRE(25744, name), JSProf.LRE(25745, old), JSProf.LRE(25746, current), JSProf.LRE(25747, excludes));
                    }, 12)], 10))));
            } else if (JSProf.LFC(25753, has, false)("mvc-bindings-log-api")) {
                console.log(JSProf.LMC(25754, logContent, 'join').join(" is not a stateful property. Its change is not reflected to ") + ".");
            }
        }
        if (JSProf.LFC(25755, has, false)("mvc-bindings-log-api")) {
            console.log(JSProf.LMC(25756, logContent, 'join').join(" is bound to: "));
        }
        var handle = JSProf.LNE(25757, {}, 11);
        JSProf.LPD(25765, handle, 'unwatch').unwatch = JSProf.LRSP(25765, JSProf.LPD(25764, handle, 'remove').remove = JSProf.LRSP(25764, JSProf.LNF(25763, function () {
            for (var h = null; h = JSProf.LWR(25759, h, JSProf.LMC(25758, _watchHandles, 'pop').pop());) {
                JSProf.LMC(25760, h, 'unwatch').unwatch();
            }
            if (JSProf.LFC(25761, has, false)("mvc-bindings-log-api")) {
                console.log(JSProf.LMC(25762, logContent, 'join').join(" is unbound from: "));
            }
        }, 12)));
        return JSProf.LRE(25766, handle);    // dojo/handle
    }, 12));
    JSProf.LMC(25771, lang, 'mixin').mixin(JSProf.LRE(25769, mvc), JSProf.LRE(25770, directions));
    // lang.setObject() thing is for back-compat, remove it in 2.0
    return JSProf.LMC(25776, lang, 'setObject').setObject("dojox.mvc.sync", JSProf.LMC(25775, lang, 'mixin').mixin(JSProf.LRE(25772, sync), JSProf.LNE(25773, { equals: equals }, 11), JSProf.LRE(25774, directions)));
}, 12));