JSProf.LFC(16230, define, false)(JSProf.LNE(15583, [
    "./kernel",
    "../has",
    "./lang"
], 10), JSProf.LNF(16229, function (dojo, has, lang) {
    JSProf.LFD(16212, err);
    JSProf.LFD(16213, c3mro);
    JSProf.LFD(16214, inherited);
    JSProf.LFD(16215, getInherited);
    JSProf.LFD(16216, inherited__debug);
    JSProf.LFD(16217, isInstanceOf);
    JSProf.LFD(16218, mixOwn);
    JSProf.LFD(16219, safeMixin);
    JSProf.LFD(16220, extend);
    JSProf.LFD(16221, createSubclass);
    JSProf.LFD(16222, chainedConstructor);
    JSProf.LFD(16223, singleConstructor);
    JSProf.LFD(16224, simpleConstructor);
    JSProf.LFD(16225, chain);
    JSProf.LFD(16226, forceNew);
    JSProf.LFD(16227, applyNew);
    JSProf.LFD(16228, declare);
    // module:
    //		dojo/_base/declare
    var mix = JSProf.LGD(15584, lang, 'mixin').mixin, op = JSProf.LGD(15585, Object, 'prototype').prototype, opts = JSProf.LGD(15586, op, 'toString').toString, xtor = JSProf.LNE(15588, new (JSProf.LFC(15587, Function, true))(), 'Function'), counter = 0, cname = "constructor";
    function err(msg, cls) {
        throw JSProf.LNE(15593, new (JSProf.LFC(15592, Error, true))("declare" + (JSProf.LRE(15589, cls) ? " " + JSProf.LRE(15590, cls) : "") + ": " + JSProf.LRE(15591, msg)), 'Error');
    }
    // C3 Method Resolution Order (see http://www.python.org/download/releases/2.3/mro/)
    function c3mro(bases, className) {
        var result = JSProf.LNE(15594, [], 10), roots = JSProf.LNE(15597, [JSProf.LNE(15596, {
                    cls: 0,
                    refs: JSProf.LNE(15595, [], 10)
                }, 11)], 10), nameMap = JSProf.LNE(15598, {}, 11), clsCount = 1, l = JSProf.LGD(15599, bases, 'length').length, i = 0, j, lin, base, top, proto, rec, name, refs;
        // build a list of bases naming them if needed
        for (; JSProf.LRE(15600, i) < JSProf.LRE(15601, l); ++i) {
            base = JSProf.LWR(15603, base, JSProf.LGE(15602, bases, 'i')[i]);
            if (!JSProf.LRE(15604, base)) {
                JSProf.LFC(15607, err, false)("mixin #" + JSProf.LRE(15605, i) + " is unknown. Did you use dojo.require to pull it in?", JSProf.LRE(15606, className));
            } else if (JSProf.LMC(15609, opts, 'call').call(JSProf.LRE(15608, base)) != "[object Function]") {
                JSProf.LFC(15612, err, false)("mixin #" + JSProf.LRE(15610, i) + " is not a callable constructor.", JSProf.LRE(15611, className));
            }
            lin = JSProf.LWR(15617, lin, JSProf.LGD(15613, base, '_meta')._meta ? JSProf.LGD(15614, base._meta, 'bases').bases : JSProf.LNE(15616, [JSProf.LRE(15615, base)], 10));
            top = JSProf.LWR(15618, top, 0);
            // add bases to the name map
            for (j = JSProf.LWR(15620, j, JSProf.LGD(15619, lin, 'length').length - 1); JSProf.LRE(15621, j) >= 0; --j) {
                proto = JSProf.LWR(15623, proto, JSProf.LGD(15622, lin[j], 'prototype').prototype);
                if (!JSProf.LMC(15624, proto, 'hasOwnProperty').hasOwnProperty("declaredClass")) {
                    JSProf.LPD(15625, proto, 'declaredClass').declaredClass = JSProf.LRSP(15625, "uniqName_" + counter++);
                }
                name = JSProf.LWR(15627, name, JSProf.LGD(15626, proto, 'declaredClass').declaredClass);
                if (!JSProf.LMC(15629, nameMap, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15628, name))) {
                    JSProf.LPE(15632, nameMap, 'name')[name] = JSProf.LRPE(15632, JSProf.LNE(15631, {
                        count: 0,
                        refs: JSProf.LNE(15630, [], 10),
                        cls: lin[j]
                    }, 11));
                    ++clsCount;
                }
                rec = JSProf.LWR(15634, rec, JSProf.LGE(15633, nameMap, 'name')[name]);
                if (JSProf.LRE(15635, top) && JSProf.LRE(15636, top) !== JSProf.LRE(15637, rec)) {
                    JSProf.LMC(15639, rec.refs, 'push').push(JSProf.LRE(15638, top));
                    ++top.count;
                }
                top = JSProf.LWR(15641, top, JSProf.LRE(15640, rec));
            }
            ++top.count;
            JSProf.LMC(15643, roots[0].refs, 'push').push(JSProf.LRE(15642, top));
        }
        // remove classes without external references recursively
        while (JSProf.LGD(15644, roots, 'length').length) {
            top = JSProf.LWR(15646, top, JSProf.LMC(15645, roots, 'pop').pop());
            JSProf.LMC(15648, result, 'push').push(JSProf.LGD(15647, top, 'cls').cls);
            --clsCount;
            // optimization: follow a single-linked chain
            while (refs = JSProf.LWR(15650, refs, JSProf.LGD(15649, top, 'refs').refs), JSProf.LGD(15651, refs, 'length').length == 1) {
                top = JSProf.LWR(15653, top, JSProf.LGE(15652, refs, 0)[0]);
                if (!JSProf.LRE(15654, top) || --top.count) {
                    // branch or end of chain => do not end to roots
                    top = JSProf.LWR(15655, top, 0);
                    break;
                }
                JSProf.LMC(15657, result, 'push').push(JSProf.LGD(15656, top, 'cls').cls);
                --clsCount;
            }
            if (JSProf.LRE(15658, top)) {
                // branch
                for (i = JSProf.LWR(15659, i, 0), l = JSProf.LWR(15661, l, JSProf.LGD(15660, refs, 'length').length); JSProf.LRE(15662, i) < JSProf.LRE(15663, l); ++i) {
                    top = JSProf.LWR(15665, top, JSProf.LGE(15664, refs, 'i')[i]);
                    if (!--top.count) {
                        JSProf.LMC(15667, roots, 'push').push(JSProf.LRE(15666, top));
                    }
                }
            }
        }
        if (JSProf.LRE(15668, clsCount)) {
            JSProf.LFC(15670, err, false)("can't build consistent linearization", JSProf.LRE(15669, className));
        }
        // calculate the superclass offset
        base = JSProf.LWR(15672, base, JSProf.LGE(15671, bases, 0)[0]);
        JSProf.LPE(15680, result, 0)[0] = JSProf.LRPE(15680, JSProf.LRE(15673, base) ? JSProf.LGD(15674, base, '_meta')._meta && JSProf.LRE(15675, base) === JSProf.LGE(15678, result, JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4 = JSProf.LGD(15676, result, 'length').length - JSProf.LGD(15677, base._meta.bases, 'length').length)[JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4] ? JSProf.LGD(15679, base._meta.bases, 'length').length : 1 : 0);
        return JSProf.LRE(15681, result);
    }
    function inherited(args, a, f) {
        var name, chains, bases, caller, meta, base, proto, opf, pos, cache = JSProf.LPD(15684, this, '_inherited')._inherited = JSProf.LRSP(15684, JSProf.LGD(15682, this, '_inherited')._inherited || JSProf.LNE(15683, {}, 11));
        // crack arguments
        if (typeof JSProf.LRE(15685, args) == "string") {
            name = JSProf.LWR(15687, name, JSProf.LRE(15686, args));
            args = JSProf.LWR(15689, args, JSProf.LRE(15688, a));
            a = JSProf.LWR(15691, a, JSProf.LRE(15690, f));
        }
        f = JSProf.LWR(15692, f, 0);
        caller = JSProf.LWR(15694, caller, JSProf.LGD(15693, args, 'callee').callee);
        name = JSProf.LWR(15697, name, JSProf.LRE(15695, name) || JSProf.LGD(15696, caller, 'nom').nom);
        if (!JSProf.LRE(15698, name)) {
            JSProf.LFC(15700, err, false)("can't deduce a name to call inherited()", JSProf.LGD(15699, this, 'declaredClass').declaredClass);
        }
        meta = JSProf.LWR(15702, meta, JSProf.LGD(15701, this.constructor, '_meta')._meta);
        bases = JSProf.LWR(15704, bases, JSProf.LGD(15703, meta, 'bases').bases);
        pos = JSProf.LWR(15706, pos, JSProf.LGD(15705, cache, 'p').p);
        if (JSProf.LRE(15707, name) != JSProf.LRE(15708, cname)) {
            // method
            if (JSProf.LGD(15709, cache, 'c').c !== JSProf.LRE(15710, caller)) {
                // cache bust
                pos = JSProf.LWR(15711, pos, 0);
                base = JSProf.LWR(15713, base, JSProf.LGE(15712, bases, 0)[0]);
                meta = JSProf.LWR(15715, meta, JSProf.LGD(15714, base, '_meta')._meta);
                if (JSProf.LGE(15716, meta.hidden, 'name')[name] !== JSProf.LRE(15717, caller)) {
                    // error detection
                    chains = JSProf.LWR(15719, chains, JSProf.LGD(15718, meta, 'chains').chains);
                    if (JSProf.LRE(15720, chains) && typeof JSProf.LGE(15721, chains, 'name')[name] == "string") {
                        JSProf.LFC(15724, err, false)("calling chained method with inherited: " + JSProf.LRE(15722, name), JSProf.LGD(15723, this, 'declaredClass').declaredClass);
                    }
                    // find caller
                    do {
                        meta = JSProf.LWR(15726, meta, JSProf.LGD(15725, base, '_meta')._meta);
                        proto = JSProf.LWR(15728, proto, JSProf.LGD(15727, base, 'prototype').prototype);
                        if (JSProf.LRE(15729, meta) && (JSProf.LGE(15730, proto, 'name')[name] === JSProf.LRE(15731, caller) && JSProf.LMC(15733, proto, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15732, name)) || JSProf.LGE(15734, meta.hidden, 'name')[name] === JSProf.LRE(15735, caller))) {
                            break;
                        }
                    } while (base = JSProf.LWR(15737, base, JSProf.LGE(15736, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9]));
                    // intentional assignment
                    pos = JSProf.LWR(15740, pos, JSProf.LRE(15738, base) ? JSProf.LRE(15739, pos) : -1);
                }
            }
            // find next
            base = JSProf.LWR(15742, base, JSProf.LGE(15741, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9]);
            if (JSProf.LRE(15743, base)) {
                proto = JSProf.LWR(15745, proto, JSProf.LGD(15744, base, 'prototype').prototype);
                if (JSProf.LGD(15746, base, '_meta')._meta && JSProf.LMC(15748, proto, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15747, name))) {
                    f = JSProf.LWR(15750, f, JSProf.LGE(15749, proto, 'name')[name]);
                } else {
                    opf = JSProf.LWR(15752, opf, JSProf.LGE(15751, op, 'name')[name]);
                    do {
                        proto = JSProf.LWR(15754, proto, JSProf.LGD(15753, base, 'prototype').prototype);
                        f = JSProf.LWR(15756, f, JSProf.LGE(15755, proto, 'name')[name]);
                        if (JSProf.LRE(15757, f) && (JSProf.LGD(15758, base, '_meta')._meta ? JSProf.LMC(15760, proto, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15759, name)) : JSProf.LRE(15761, f) !== JSProf.LRE(15762, opf))) {
                            break;
                        }
                    } while (base = JSProf.LWR(15764, base, JSProf.LGE(15763, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9]));    // intentional assignment
                }
            }
            f = JSProf.LWR(15768, f, JSProf.LRE(15765, base) && JSProf.LRE(15766, f) || JSProf.LGE(15767, op, 'name')[name]);
        } else {
            // constructor
            if (JSProf.LGD(15769, cache, 'c').c !== JSProf.LRE(15770, caller)) {
                // cache bust
                pos = JSProf.LWR(15771, pos, 0);
                meta = JSProf.LWR(15773, meta, JSProf.LGD(15772, bases[0], '_meta')._meta);
                if (JSProf.LRE(15774, meta) && JSProf.LGD(15775, meta, 'ctor').ctor !== JSProf.LRE(15776, caller)) {
                    // error detection
                    chains = JSProf.LWR(15778, chains, JSProf.LGD(15777, meta, 'chains').chains);
                    if (!JSProf.LRE(15779, chains) || JSProf.LGD(15780, chains, 'constructor').constructor !== "manual") {
                        JSProf.LFC(15782, err, false)("calling chained constructor with inherited", JSProf.LGD(15781, this, 'declaredClass').declaredClass);
                    }
                    // find caller
                    while (base = JSProf.LWR(15784, base, JSProf.LGE(15783, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9])) {
                        // intentional assignment
                        meta = JSProf.LWR(15786, meta, JSProf.LGD(15785, base, '_meta')._meta);
                        if (JSProf.LRE(15787, meta) && JSProf.LGD(15788, meta, 'ctor').ctor === JSProf.LRE(15789, caller)) {
                            break;
                        }
                    }
                    pos = JSProf.LWR(15792, pos, JSProf.LRE(15790, base) ? JSProf.LRE(15791, pos) : -1);
                }
            }
            // find next
            while (base = JSProf.LWR(15794, base, JSProf.LGE(15793, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9])) {
                // intentional assignment
                meta = JSProf.LWR(15796, meta, JSProf.LGD(15795, base, '_meta')._meta);
                f = JSProf.LWR(15800, f, JSProf.LRE(15797, meta) ? JSProf.LGD(15798, meta, 'ctor').ctor : JSProf.LRE(15799, base));
                if (JSProf.LRE(15801, f)) {
                    break;
                }
            }
            f = JSProf.LWR(15804, f, JSProf.LRE(15802, base) && JSProf.LRE(15803, f));
        }
        // cache the found super method
        JSProf.LPD(15806, cache, 'c').c = JSProf.LRSP(15806, JSProf.LRE(15805, f));
        JSProf.LPD(15808, cache, 'p').p = JSProf.LRSP(15808, JSProf.LRE(15807, pos));
        // now we have the result
        if (JSProf.LRE(15809, f)) {
            return JSProf.LRE(15810, a) === true ? JSProf.LRE(15811, f) : JSProf.LMC(15814, f, 'apply').apply(this, JSProf.LRE(15812, a) || JSProf.LRE(15813, args));
        }    // intentionally no return if a super method was not found
    }
    function getInherited(name, args) {
        if (typeof JSProf.LRE(15815, name) == "string") {
            return JSProf.LMC(15818, this, '__inherited').__inherited(JSProf.LRE(15816, name), JSProf.LRE(15817, args), true);
        }
        return JSProf.LMC(15820, this, '__inherited').__inherited(JSProf.LRE(15819, name), true);
    }
    function inherited__debug(args, a1, a2) {
        var f = JSProf.LMC(15823, this, 'getInherited').getInherited(JSProf.LRE(15821, args), JSProf.LRE(15822, a1));
        if (JSProf.LRE(15824, f)) {
            return JSProf.LMC(15828, f, 'apply').apply(this, JSProf.LRE(15825, a2) || JSProf.LRE(15826, a1) || JSProf.LRE(15827, args));
        }    // intentionally no return if a super method was not found
    }
    var inheritedImpl = JSProf.LGD(15829, dojo.config, 'isDebug').isDebug ? JSProf.LRE(15830, inherited__debug) : JSProf.LRE(15831, inherited);
    // emulation of "instanceof"
    function isInstanceOf(cls) {
        var bases = JSProf.LGD(15832, this.constructor._meta, 'bases').bases;
        for (var i = 0, l = JSProf.LGD(15833, bases, 'length').length; JSProf.LRE(15834, i) < JSProf.LRE(15835, l); ++i) {
            if (JSProf.LGE(15836, bases, 'i')[i] === JSProf.LRE(15837, cls)) {
                return true;
            }
        }
        return this instanceof JSProf.LRE(15838, cls);
    }
    function mixOwn(target, source) {
        // add props adding metadata for incoming functions skipping a constructor
        for (var name in JSProf.LRE(15839, source)) {
            if (JSProf.LRE(15840, name) != JSProf.LRE(15841, cname) && JSProf.LMC(15843, source, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15842, name))) {
                JSProf.LPE(15845, target, 'name')[name] = JSProf.LRPE(15845, JSProf.LGE(15844, source, 'name')[name]);
            }
        }
        if (JSProf.LFC(15846, has, false)("bug-for-in-skips-shadowed")) {
            for (var extraNames = JSProf.LGD(15847, lang, '_extraNames')._extraNames, i = JSProf.LGD(15848, extraNames, 'length').length; JSProf.LRE(15849, i);) {
                name = JSProf.LWR(15851, name, JSProf.LGE(15850, extraNames, JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e = --i)[JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e]);
                if (JSProf.LRE(15852, name) != JSProf.LRE(15853, cname) && JSProf.LMC(15855, source, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15854, name))) {
                    JSProf.LPE(15857, target, 'name')[name] = JSProf.LRPE(15857, JSProf.LGE(15856, source, 'name')[name]);
                }
            }
        }
    }
    // implementation of safe mixin function
    function safeMixin(target, source) {
        // summary:
        //		Mix in properties skipping a constructor and decorating functions
        //		like it is done by declare().
        // target: Object
        //		Target object to accept new properties.
        // source: Object
        //		Source object for new properties.
        // description:
        //		This function is used to mix in properties like lang.mixin does,
        //		but it skips a constructor property and decorates functions like
        //		declare() does.
        //
        //		It is meant to be used with classes and objects produced with
        //		declare. Functions mixed in with dojo.safeMixin can use
        //		this.inherited() like normal methods.
        //
        //		This function is used to implement extend() method of a constructor
        //		produced with declare().
        //
        // example:
        //	|	var A = declare(null, {
        //	|		m1: function(){
        //	|			console.log("A.m1");
        //	|		},
        //	|		m2: function(){
        //	|			console.log("A.m2");
        //	|		}
        //	|	});
        //	|	var B = declare(A, {
        //	|		m1: function(){
        //	|			this.inherited(arguments);
        //	|			console.log("B.m1");
        //	|		}
        //	|	});
        //	|	B.extend({
        //	|		m2: function(){
        //	|			this.inherited(arguments);
        //	|			console.log("B.m2");
        //	|		}
        //	|	});
        //	|	var x = new B();
        //	|	dojo.safeMixin(x, {
        //	|		m1: function(){
        //	|			this.inherited(arguments);
        //	|			console.log("X.m1");
        //	|		},
        //	|		m2: function(){
        //	|			this.inherited(arguments);
        //	|			console.log("X.m2");
        //	|		}
        //	|	});
        //	|	x.m2();
        //	|	// prints:
        //	|	// A.m1
        //	|	// B.m1
        //	|	// X.m1
        var name, t;
        // add props adding metadata for incoming functions skipping a constructor
        for (name in JSProf.LRE(15858, source)) {
            t = JSProf.LWR(15860, t, JSProf.LGE(15859, source, 'name')[name]);
            if ((JSProf.LRE(15861, t) !== JSProf.LGE(15862, op, 'name')[name] || !(JSProf.LRE(15863, name) in JSProf.LRE(15864, op))) && JSProf.LRE(15865, name) != JSProf.LRE(15866, cname)) {
                if (JSProf.LMC(15868, opts, 'call').call(JSProf.LRE(15867, t)) == "[object Function]") {
                    // non-trivial function method => attach its name
                    JSProf.LPD(15870, t, 'nom').nom = JSProf.LRSP(15870, JSProf.LRE(15869, name));
                }
                JSProf.LPE(15872, target, 'name')[name] = JSProf.LRPE(15872, JSProf.LRE(15871, t));
            }
        }
        if (JSProf.LFC(15873, has, false)("bug-for-in-skips-shadowed")) {
            for (var extraNames = JSProf.LGD(15874, lang, '_extraNames')._extraNames, i = JSProf.LGD(15875, extraNames, 'length').length; JSProf.LRE(15876, i);) {
                name = JSProf.LWR(15878, name, JSProf.LGE(15877, extraNames, JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e = --i)[JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e]);
                t = JSProf.LWR(15880, t, JSProf.LGE(15879, source, 'name')[name]);
                if ((JSProf.LRE(15881, t) !== JSProf.LGE(15882, op, 'name')[name] || !(JSProf.LRE(15883, name) in JSProf.LRE(15884, op))) && JSProf.LRE(15885, name) != JSProf.LRE(15886, cname)) {
                    if (JSProf.LMC(15888, opts, 'call').call(JSProf.LRE(15887, t)) == "[object Function]") {
                        // non-trivial function method => attach its name
                        JSProf.LPD(15890, t, 'nom').nom = JSProf.LRSP(15890, JSProf.LRE(15889, name));
                    }
                    JSProf.LPE(15892, target, 'name')[name] = JSProf.LRPE(15892, JSProf.LRE(15891, t));
                }
            }
        }
        return JSProf.LRE(15893, target);
    }
    function extend(source) {
        JSProf.LMC(15896, declare, 'safeMixin').safeMixin(JSProf.LGD(15894, this, 'prototype').prototype, JSProf.LRE(15895, source));
        return this;
    }
    function createSubclass(mixins, props) {
        // crack parameters
        if (!(JSProf.LRE(15897, mixins) instanceof JSProf.LRU(15898, typeof Array === 'undefined' ? undefined : Array) || typeof JSProf.LRE(15899, mixins) == 'function')) {
            props = JSProf.LWR(15901, props, JSProf.LRE(15900, mixins));
            mixins = JSProf.LWR(15902, mixins, undefined);
        }
        props = JSProf.LWR(15905, props, JSProf.LRE(15903, props) || JSProf.LNE(15904, {}, 11));
        mixins = JSProf.LWR(15908, mixins, JSProf.LRE(15906, mixins) || JSProf.LNE(15907, [], 10));
        return JSProf.LFC(15912, declare, false)(JSProf.LNE(15909, [this], 10).concat(JSProf.LRE(15910, mixins)), JSProf.LRE(15911, props));
    }
    // chained constructor compatible with the legacy declare()
    function chainedConstructor(bases, ctorSpecial) {
        return JSProf.LNF(15974, function () {
            var a = arguments, args = JSProf.LRE(15913, a), a0 = JSProf.LGE(15914, a, 0)[0], f, i, m, l = JSProf.LGD(15915, bases, 'length').length, preArgs;
            if (!(this instanceof JSProf.LGD(15916, a, 'callee').callee)) {
                // not called via new, so force it
                return JSProf.LFC(15918, applyNew, false)(JSProf.LRE(15917, a));
            }
            //this._inherited = {};
            // perform the shaman's rituals of the original declare()
            // 1) call two types of the preamble
            if (JSProf.LRE(15919, ctorSpecial) && (JSProf.LRE(15920, a0) && JSProf.LGD(15921, a0, 'preamble').preamble || JSProf.LGD(15922, this, 'preamble').preamble)) {
                // full blown ritual
                preArgs = JSProf.LWR(15926, preArgs, JSProf.LNE(15925, new (JSProf.LFC(15924, Array, true))(JSProf.LGD(15923, bases, 'length').length), 'Array'));
                // prepare parameters
                JSProf.LPE(15928, preArgs, 0)[0] = JSProf.LRPE(15928, JSProf.LRE(15927, a));
                for (i = JSProf.LWR(15929, i, 0);;) {
                    // process the preamble of the 1st argument
                    a0 = JSProf.LWR(15931, a0, JSProf.LGE(15930, a, 0)[0]);
                    if (JSProf.LRE(15932, a0)) {
                        f = JSProf.LWR(15934, f, JSProf.LGD(15933, a0, 'preamble').preamble);
                        if (JSProf.LRE(15935, f)) {
                            a = JSProf.LWR(15939, a, JSProf.LMC(15937, f, 'apply').apply(this, JSProf.LRE(15936, a)) || JSProf.LRE(15938, a));
                        }
                    }
                    // process the preamble of this class
                    f = JSProf.LWR(15941, f, JSProf.LGD(15940, bases[i], 'prototype').prototype);
                    f = JSProf.LWR(15944, f, JSProf.LMC(15942, f, 'hasOwnProperty').hasOwnProperty("preamble") && JSProf.LGD(15943, f, 'preamble').preamble);
                    if (JSProf.LRE(15945, f)) {
                        a = JSProf.LWR(15949, a, JSProf.LMC(15947, f, 'apply').apply(this, JSProf.LRE(15946, a)) || JSProf.LRE(15948, a));
                    }
                    // one peculiarity of the preamble:
                    // it is called if it is not needed,
                    // e.g., there is no constructor to call
                    // let's watch for the last constructor
                    // (see ticket #9795)
                    if (++i == JSProf.LRE(15950, l)) {
                        break;
                    }
                    JSProf.LPE(15952, preArgs, 'i')[i] = JSProf.LRPE(15952, JSProf.LRE(15951, a));
                }
            }
            // 2) call all non-trivial constructors using prepared arguments
            for (i = JSProf.LWR(15954, i, JSProf.LRE(15953, l) - 1); JSProf.LRE(15955, i) >= 0; --i) {
                f = JSProf.LWR(15957, f, JSProf.LGE(15956, bases, 'i')[i]);
                m = JSProf.LWR(15959, m, JSProf.LGD(15958, f, '_meta')._meta);
                f = JSProf.LWR(15963, f, JSProf.LRE(15960, m) ? JSProf.LGD(15961, m, 'ctor').ctor : JSProf.LRE(15962, f));
                if (JSProf.LRE(15964, f)) {
                    JSProf.LMC(15968, f, 'apply').apply(this, JSProf.LRE(15965, preArgs) ? JSProf.LGE(15966, preArgs, 'i')[i] : JSProf.LRE(15967, a));
                }
            }
            // 3) continue the original ritual: call the postscript
            f = JSProf.LWR(15970, f, JSProf.LGD(15969, this, 'postscript').postscript);
            if (JSProf.LRE(15971, f)) {
                JSProf.LMC(15973, f, 'apply').apply(this, JSProf.LRE(15972, args));
            }
        }, 12);
    }
    // chained constructor compatible with the legacy declare()
    function singleConstructor(ctor, ctorSpecial) {
        return JSProf.LNF(16002, function () {
            var a = arguments, t = JSProf.LRE(15975, a), a0 = JSProf.LGE(15976, a, 0)[0], f;
            if (!(this instanceof JSProf.LGD(15977, a, 'callee').callee)) {
                // not called via new, so force it
                return JSProf.LFC(15979, applyNew, false)(JSProf.LRE(15978, a));
            }
            //this._inherited = {};
            // perform the shaman's rituals of the original declare()
            // 1) call two types of the preamble
            if (JSProf.LRE(15980, ctorSpecial)) {
                // full blown ritual
                if (JSProf.LRE(15981, a0)) {
                    // process the preamble of the 1st argument
                    f = JSProf.LWR(15983, f, JSProf.LGD(15982, a0, 'preamble').preamble);
                    if (JSProf.LRE(15984, f)) {
                        t = JSProf.LWR(15988, t, JSProf.LMC(15986, f, 'apply').apply(this, JSProf.LRE(15985, t)) || JSProf.LRE(15987, t));
                    }
                }
                f = JSProf.LWR(15990, f, JSProf.LGD(15989, this, 'preamble').preamble);
                if (JSProf.LRE(15991, f)) {
                    // process the preamble of this class
                    JSProf.LMC(15993, f, 'apply').apply(this, JSProf.LRE(15992, t));    // one peculiarity of the preamble:
                                                                                        // it is called even if it is not needed,
                                                                                        // e.g., there is no constructor to call
                                                                                        // let's watch for the last constructor
                                                                                        // (see ticket #9795)
                }
            }
            // 2) call a constructor
            if (JSProf.LRE(15994, ctor)) {
                JSProf.LMC(15996, ctor, 'apply').apply(this, JSProf.LRE(15995, a));
            }
            // 3) continue the original ritual: call the postscript
            f = JSProf.LWR(15998, f, JSProf.LGD(15997, this, 'postscript').postscript);
            if (JSProf.LRE(15999, f)) {
                JSProf.LMC(16001, f, 'apply').apply(this, JSProf.LRE(16000, a));
            }
        }, 12);
    }
    // plain vanilla constructor (can use inherited() to call its base constructor)
    function simpleConstructor(bases) {
        return JSProf.LNF(16022, function () {
            var a = arguments, i = 0, f, m;
            if (!(this instanceof JSProf.LGD(16003, a, 'callee').callee)) {
                // not called via new, so force it
                return JSProf.LFC(16005, applyNew, false)(JSProf.LRE(16004, a));
            }
            //this._inherited = {};
            // perform the shaman's rituals of the original declare()
            // 1) do not call the preamble
            // 2) call the top constructor (it can use this.inherited())
            for (; f = JSProf.LWR(16007, f, JSProf.LGE(16006, bases, 'i')[i]); ++i) {
                // intentional assignment
                m = JSProf.LWR(16009, m, JSProf.LGD(16008, f, '_meta')._meta);
                f = JSProf.LWR(16013, f, JSProf.LRE(16010, m) ? JSProf.LGD(16011, m, 'ctor').ctor : JSProf.LRE(16012, f));
                if (JSProf.LRE(16014, f)) {
                    JSProf.LMC(16016, f, 'apply').apply(this, JSProf.LRE(16015, a));
                    break;
                }
            }
            // 3) call the postscript
            f = JSProf.LWR(16018, f, JSProf.LGD(16017, this, 'postscript').postscript);
            if (JSProf.LRE(16019, f)) {
                JSProf.LMC(16021, f, 'apply').apply(this, JSProf.LRE(16020, a));
            }
        }, 12);
    }
    function chain(name, bases, reversed) {
        return JSProf.LNF(16039, function () {
            var b, m, f, i = 0, step = 1;
            if (JSProf.LRE(16023, reversed)) {
                i = JSProf.LWR(16025, i, JSProf.LGD(16024, bases, 'length').length - 1);
                step = JSProf.LWR(16026, step, -1);
            }
            for (; b = JSProf.LWR(16028, b, JSProf.LGE(16027, bases, 'i')[i]); i += JSProf.LRE(16029, step)) {
                // intentional assignment
                m = JSProf.LWR(16031, m, JSProf.LGD(16030, b, '_meta')._meta);
                f = JSProf.LWR(16036, f, JSProf.LGE(16035, JSProf.LRE(16032, m) ? JSProf.LGD(16033, m, 'hidden').hidden : JSProf.LGD(16034, b, 'prototype').prototype, 'name')[name]);
                if (JSProf.LRE(16037, f)) {
                    JSProf.LMC(16038, f, 'apply').apply(this, arguments);
                }
            }
        }, 12);
    }
    // forceNew(ctor)
    // return a new object that inherits from ctor.prototype but
    // without actually running ctor on the object.
    function forceNew(ctor) {
        // create object with correct prototype using a do-nothing
        // constructor
        JSProf.LPD(16041, xtor, 'prototype').prototype = JSProf.LRSP(16041, JSProf.LGD(16040, ctor, 'prototype').prototype);
        var t = JSProf.LNE(16043, new (JSProf.LFC(16042, xtor, true))(), 'xtor');
        xtor.prototype = null;
        // clean up
        return JSProf.LRE(16044, t);
    }
    // applyNew(args)
    // just like 'new ctor()' except that the constructor and its arguments come
    // from args, which must be an array or an arguments object
    function applyNew(args) {
        // create an object with ctor's prototype but without
        // calling ctor on it.
        var ctor = JSProf.LGD(16045, args, 'callee').callee, t = JSProf.LFC(16047, forceNew, false)(JSProf.LRE(16046, ctor));
        // execute the real constructor on the new object
        JSProf.LMC(16050, ctor, 'apply').apply(JSProf.LRE(16048, t), JSProf.LRE(16049, args));
        return JSProf.LRE(16051, t);
    }
    function declare(className, superclass, props) {
        // summary:
        //		Create a feature-rich constructor from compact notation.
        // className: String?
        //		The optional name of the constructor (loosely, a "class")
        //		stored in the "declaredClass" property in the created prototype.
        //		It will be used as a global name for a created constructor.
        // superclass: Function|Function[]
        //		May be null, a Function, or an Array of Functions. This argument
        //		specifies a list of bases (the left-most one is the most deepest
        //		base).
        // props: Object
        //		An object whose properties are copied to the created prototype.
        //		Add an instance-initialization function by making it a property
        //		named "constructor".
        // returns: dojo/_base/declare.__DeclareCreatedObject
        //		New constructor function.
        // description:
        //		Create a constructor using a compact notation for inheritance and
        //		prototype extension.
        //
        //		Mixin ancestors provide a type of multiple inheritance.
        //		Prototypes of mixin ancestors are copied to the new class:
        //		changes to mixin prototypes will not affect classes to which
        //		they have been mixed in.
        //
        //		Ancestors can be compound classes created by this version of
        //		declare(). In complex cases all base classes are going to be
        //		linearized according to C3 MRO algorithm
        //		(see http://www.python.org/download/releases/2.3/mro/ for more
        //		details).
        //
        //		"className" is cached in "declaredClass" property of the new class,
        //		if it was supplied. The immediate super class will be cached in
        //		"superclass" property of the new class.
        //
        //		Methods in "props" will be copied and modified: "nom" property
        //		(the declared name of the method) will be added to all copied
        //		functions to help identify them for the internal machinery. Be
        //		very careful, while reusing methods: if you use the same
        //		function under different names, it can produce errors in some
        //		cases.
        //
        //		It is possible to use constructors created "manually" (without
        //		declare()) as bases. They will be called as usual during the
        //		creation of an instance, their methods will be chained, and even
        //		called by "this.inherited()".
        //
        //		Special property "-chains-" governs how to chain methods. It is
        //		a dictionary, which uses method names as keys, and hint strings
        //		as values. If a hint string is "after", this method will be
        //		called after methods of its base classes. If a hint string is
        //		"before", this method will be called before methods of its base
        //		classes.
        //
        //		If "constructor" is not mentioned in "-chains-" property, it will
        //		be chained using the legacy mode: using "after" chaining,
        //		calling preamble() method before each constructor, if available,
        //		and calling postscript() after all constructors were executed.
        //		If the hint is "after", it is chained as a regular method, but
        //		postscript() will be called after the chain of constructors.
        //		"constructor" cannot be chained "before", but it allows
        //		a special hint string: "manual", which means that constructors
        //		are not going to be chained in any way, and programmer will call
        //		them manually using this.inherited(). In the latter case
        //		postscript() will be called after the construction.
        //
        //		All chaining hints are "inherited" from base classes and
        //		potentially can be overridden. Be very careful when overriding
        //		hints! Make sure that all chained methods can work in a proposed
        //		manner of chaining.
        //
        //		Once a method was chained, it is impossible to unchain it. The
        //		only exception is "constructor". You don't need to define a
        //		method in order to supply a chaining hint.
        //
        //		If a method is chained, it cannot use this.inherited() because
        //		all other methods in the hierarchy will be called automatically.
        //
        //		Usually constructors and initializers of any kind are chained
        //		using "after" and destructors of any kind are chained as
        //		"before". Note that chaining assumes that chained methods do not
        //		return any value: any returned value will be discarded.
        //
        // example:
        //	|	declare("my.classes.bar", my.classes.foo, {
        //	|		// properties to be added to the class prototype
        //	|		someValue: 2,
        //	|		// initialization function
        //	|		constructor: function(){
        //	|			this.myComplicatedObject = new ReallyComplicatedObject();
        //	|		},
        //	|		// other functions
        //	|		someMethod: function(){
        //	|			doStuff();
        //	|		}
        //	|	});
        //
        // example:
        //	|	var MyBase = declare(null, {
        //	|		// constructor, properties, and methods go here
        //	|		// ...
        //	|	});
        //	|	var MyClass1 = declare(MyBase, {
        //	|		// constructor, properties, and methods go here
        //	|		// ...
        //	|	});
        //	|	var MyClass2 = declare(MyBase, {
        //	|		// constructor, properties, and methods go here
        //	|		// ...
        //	|	});
        //	|	var MyDiamond = declare([MyClass1, MyClass2], {
        //	|		// constructor, properties, and methods go here
        //	|		// ...
        //	|	});
        //
        // example:
        //	|	var F = function(){ console.log("raw constructor"); };
        //	|	F.prototype.method = function(){
        //	|		console.log("raw method");
        //	|	};
        //	|	var A = declare(F, {
        //	|		constructor: function(){
        //	|			console.log("A.constructor");
        //	|		},
        //	|		method: function(){
        //	|			console.log("before calling F.method...");
        //	|			this.inherited(arguments);
        //	|			console.log("...back in A");
        //	|		}
        //	|	});
        //	|	new A().method();
        //	|	// will print:
        //	|	// raw constructor
        //	|	// A.constructor
        //	|	// before calling F.method...
        //	|	// raw method
        //	|	// ...back in A
        //
        // example:
        //	|	var A = declare(null, {
        //	|		"-chains-": {
        //	|			destroy: "before"
        //	|		}
        //	|	});
        //	|	var B = declare(A, {
        //	|		constructor: function(){
        //	|			console.log("B.constructor");
        //	|		},
        //	|		destroy: function(){
        //	|			console.log("B.destroy");
        //	|		}
        //	|	});
        //	|	var C = declare(B, {
        //	|		constructor: function(){
        //	|			console.log("C.constructor");
        //	|		},
        //	|		destroy: function(){
        //	|			console.log("C.destroy");
        //	|		}
        //	|	});
        //	|	new C().destroy();
        //	|	// prints:
        //	|	// B.constructor
        //	|	// C.constructor
        //	|	// C.destroy
        //	|	// B.destroy
        //
        // example:
        //	|	var A = declare(null, {
        //	|		"-chains-": {
        //	|			constructor: "manual"
        //	|		}
        //	|	});
        //	|	var B = declare(A, {
        //	|		constructor: function(){
        //	|			// ...
        //	|			// call the base constructor with new parameters
        //	|			this.inherited(arguments, [1, 2, 3]);
        //	|			// ...
        //	|		}
        //	|	});
        //
        // example:
        //	|	var A = declare(null, {
        //	|		"-chains-": {
        //	|			m1: "before"
        //	|		},
        //	|		m1: function(){
        //	|			console.log("A.m1");
        //	|		},
        //	|		m2: function(){
        //	|			console.log("A.m2");
        //	|		}
        //	|	});
        //	|	var B = declare(A, {
        //	|		"-chains-": {
        //	|			m2: "after"
        //	|		},
        //	|		m1: function(){
        //	|			console.log("B.m1");
        //	|		},
        //	|		m2: function(){
        //	|			console.log("B.m2");
        //	|		}
        //	|	});
        //	|	var x = new B();
        //	|	x.m1();
        //	|	// prints:
        //	|	// B.m1
        //	|	// A.m1
        //	|	x.m2();
        //	|	// prints:
        //	|	// A.m2
        //	|	// B.m2
        // crack parameters
        if (typeof JSProf.LRE(16052, className) != "string") {
            props = JSProf.LWR(16054, props, JSProf.LRE(16053, superclass));
            superclass = JSProf.LWR(16056, superclass, JSProf.LRE(16055, className));
            className = JSProf.LWR(16057, className, "");
        }
        props = JSProf.LWR(16060, props, JSProf.LRE(16058, props) || JSProf.LNE(16059, {}, 11));
        var proto, i, t, ctor, name, bases, chains, mixins = 1, parents = JSProf.LRE(16061, superclass);
        // build a prototype
        if (JSProf.LMC(16063, opts, 'call').call(JSProf.LRE(16062, superclass)) == "[object Array]") {
            // C3 MRO
            bases = JSProf.LWR(16067, bases, JSProf.LFC(16066, c3mro, false)(JSProf.LRE(16064, superclass), JSProf.LRE(16065, className)));
            t = JSProf.LWR(16069, t, JSProf.LGE(16068, bases, 0)[0]);
            mixins = JSProf.LWR(16072, mixins, JSProf.LGD(16070, bases, 'length').length - JSProf.LRE(16071, t));
            superclass = JSProf.LWR(16074, superclass, JSProf.LGE(16073, bases, 'mixins')[mixins]);
        } else {
            bases = JSProf.LWR(16076, bases, JSProf.LNE(16075, [0], 10));
            if (JSProf.LRE(16077, superclass)) {
                if (JSProf.LMC(16079, opts, 'call').call(JSProf.LRE(16078, superclass)) == "[object Function]") {
                    t = JSProf.LWR(16081, t, JSProf.LGD(16080, superclass, '_meta')._meta);
                    bases = JSProf.LWR(16085, bases, bases.concat(JSProf.LRE(16082, t) ? JSProf.LGD(16083, t, 'bases').bases : JSProf.LRE(16084, superclass)));
                } else {
                    JSProf.LFC(16087, err, false)("base class is not a callable constructor.", JSProf.LRE(16086, className));
                }
            } else if (JSProf.LRE(16088, superclass) !== null) {
                JSProf.LFC(16090, err, false)("unknown base class. Did you use dojo.require to pull it in?", JSProf.LRE(16089, className));
            }
        }
        if (JSProf.LRE(16091, superclass)) {
            for (i = JSProf.LWR(16093, i, JSProf.LRE(16092, mixins) - 1);; --i) {
                proto = JSProf.LWR(16096, proto, JSProf.LFC(16095, forceNew, false)(JSProf.LRE(16094, superclass)));
                if (!JSProf.LRE(16097, i)) {
                    // stop if nothing to add (the last base)
                    break;
                }
                // mix in properties
                t = JSProf.LWR(16099, t, JSProf.LGE(16098, bases, 'i')[i]);
                JSProf.LFC(16105, JSProf.LGD(16100, t, '_meta')._meta ? JSProf.LRE(16101, mixOwn) : JSProf.LRE(16102, mix), false)(JSProf.LRE(16103, proto), JSProf.LGD(16104, t, 'prototype').prototype);
                // chain in new constructor
                ctor = JSProf.LWR(16108, ctor, JSProf.LNE(16107, new (JSProf.LFC(16106, Function, true))(), 'Function'));
                JSProf.LPD(16110, ctor, 'superclass').superclass = JSProf.LRSP(16110, JSProf.LRE(16109, superclass));
                JSProf.LPD(16112, ctor, 'prototype').prototype = JSProf.LRSP(16112, JSProf.LRE(16111, proto));
                superclass = JSProf.LWR(16115, superclass, JSProf.LPD(16114, proto, 'constructor').constructor = JSProf.LRSP(16114, JSProf.LRE(16113, ctor)));
            }
        } else {
            proto = JSProf.LWR(16117, proto, JSProf.LNE(16116, {}, 11));
        }
        // add all properties
        JSProf.LMC(16120, declare, 'safeMixin').safeMixin(JSProf.LRE(16118, proto), JSProf.LRE(16119, props));
        // add constructor
        t = JSProf.LWR(16122, t, JSProf.LGD(16121, props, 'constructor').constructor);
        if (JSProf.LRE(16123, t) !== JSProf.LGD(16124, op, 'constructor').constructor) {
            JSProf.LPD(16126, t, 'nom').nom = JSProf.LRSP(16126, JSProf.LRE(16125, cname));
            JSProf.LPD(16128, proto, 'constructor').constructor = JSProf.LRSP(16128, JSProf.LRE(16127, t));
        }
        // collect chains and flags
        for (i = JSProf.LWR(16130, i, JSProf.LRE(16129, mixins) - 1); JSProf.LRE(16131, i); --i) {
            // intentional assignment
            t = JSProf.LWR(16133, t, JSProf.LGD(16132, bases[i], '_meta')._meta);
            if (JSProf.LRE(16134, t) && JSProf.LGD(16135, t, 'chains').chains) {
                chains = JSProf.LWR(16140, chains, JSProf.LFC(16139, mix, false)(JSProf.LRE(16136, chains) || JSProf.LNE(16137, {}, 11), JSProf.LGD(16138, t, 'chains').chains));
            }
        }
        if (JSProf.LGE(16141, proto, '-chains-')["-chains-"]) {
            chains = JSProf.LWR(16146, chains, JSProf.LFC(16145, mix, false)(JSProf.LRE(16142, chains) || JSProf.LNE(16143, {}, 11), JSProf.LGE(16144, proto, '-chains-')["-chains-"]));
        }
        // build ctor
        t = JSProf.LWR(16150, t, !JSProf.LRE(16147, chains) || !JSProf.LMC(16149, chains, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(16148, cname)));
        JSProf.LPE(16163, bases, 0)[0] = JSProf.LRPE(16163, ctor = JSProf.LWR(16162, ctor, JSProf.LRE(16151, chains) && JSProf.LGD(16152, chains, 'constructor').constructor === "manual" ? JSProf.LFC(16154, simpleConstructor, false)(JSProf.LRE(16153, bases)) : JSProf.LGD(16155, bases, 'length').length == 1 ? JSProf.LFC(16158, singleConstructor, false)(JSProf.LGD(16156, props, 'constructor').constructor, JSProf.LRE(16157, t)) : JSProf.LFC(16161, chainedConstructor, false)(JSProf.LRE(16159, bases), JSProf.LRE(16160, t))));
        // add meta information to the constructor
        JSProf.LPD(16165, ctor, '_meta')._meta = JSProf.LRSP(16165, JSProf.LNE(16164, {
            bases: bases,
            hidden: props,
            chains: chains,
            parents: parents,
            ctor: props.constructor
        }, 11));
        JSProf.LPD(16168, ctor, 'superclass').superclass = JSProf.LRSP(16168, JSProf.LRE(16166, superclass) && JSProf.LGD(16167, superclass, 'prototype').prototype);
        JSProf.LPD(16170, ctor, 'extend').extend = JSProf.LRSP(16170, JSProf.LRE(16169, extend));
        JSProf.LPD(16172, ctor, 'createSubclass').createSubclass = JSProf.LRSP(16172, JSProf.LRE(16171, createSubclass));
        JSProf.LPD(16174, ctor, 'prototype').prototype = JSProf.LRSP(16174, JSProf.LRE(16173, proto));
        JSProf.LPD(16176, proto, 'constructor').constructor = JSProf.LRSP(16176, JSProf.LRE(16175, ctor));
        // add "standard" methods to the prototype
        JSProf.LPD(16178, proto, 'getInherited').getInherited = JSProf.LRSP(16178, JSProf.LRE(16177, getInherited));
        JSProf.LPD(16180, proto, 'isInstanceOf').isInstanceOf = JSProf.LRSP(16180, JSProf.LRE(16179, isInstanceOf));
        JSProf.LPD(16182, proto, 'inherited').inherited = JSProf.LRSP(16182, JSProf.LRE(16181, inheritedImpl));
        JSProf.LPD(16184, proto, '__inherited').__inherited = JSProf.LRSP(16184, JSProf.LRE(16183, inherited));
        // add name if specified
        if (JSProf.LRE(16185, className)) {
            JSProf.LPD(16187, proto, 'declaredClass').declaredClass = JSProf.LRSP(16187, JSProf.LRE(16186, className));
            JSProf.LMC(16190, lang, 'setObject').setObject(JSProf.LRE(16188, className), JSProf.LRE(16189, ctor));
        }
        // build chains and add them to the prototype
        if (JSProf.LRE(16191, chains)) {
            for (name in JSProf.LRE(16192, chains)) {
                if (JSProf.LGE(16193, proto, 'name')[name] && typeof JSProf.LGE(16194, chains, 'name')[name] == "string" && JSProf.LRE(16195, name) != JSProf.LRE(16196, cname)) {
                    t = JSProf.LWR(16202, t, JSProf.LPE(16201, proto, 'name')[name] = JSProf.LRPE(16201, JSProf.LFC(16200, chain, false)(JSProf.LRE(16197, name), JSProf.LRE(16198, bases), JSProf.LGE(16199, chains, 'name')[name] === "after")));
                    JSProf.LPD(16204, t, 'nom').nom = JSProf.LRSP(16204, JSProf.LRE(16203, name));
                }
            }
        }
        // chained methods do not return values
        // no need to chain "invisible" functions
        return JSProf.LRE(16205, ctor);    // Function
    }
    /*=====
    	declare.__DeclareCreatedObject = {
    		// summary:
    		//		dojo/_base/declare() returns a constructor `C`.   `new C()` returns an Object with the following
    		//		methods, in addition to the methods and properties specified via the arguments passed to declare().
    
    		inherited: function(name, args, newArgs){
    			// summary:
    			//		Calls a super method.
    			// name: String?
    			//		The optional method name. Should be the same as the caller's
    			//		name. Usually "name" is specified in complex dynamic cases, when
    			//		the calling method was dynamically added, undecorated by
    			//		declare(), and it cannot be determined.
    			// args: Arguments
    			//		The caller supply this argument, which should be the original
    			//		"arguments".
    			// newArgs: Object?
    			//		If "true", the found function will be returned without
    			//		executing it.
    			//		If Array, it will be used to call a super method. Otherwise
    			//		"args" will be used.
    			// returns:
    			//		Whatever is returned by a super method, or a super method itself,
    			//		if "true" was specified as newArgs.
    			// description:
    			//		This method is used inside method of classes produced with
    			//		declare() to call a super method (next in the chain). It is
    			//		used for manually controlled chaining. Consider using the regular
    			//		chaining, because it is faster. Use "this.inherited()" only in
    			//		complex cases.
    			//
    			//		This method cannot me called from automatically chained
    			//		constructors including the case of a special (legacy)
    			//		constructor chaining. It cannot be called from chained methods.
    			//
    			//		If "this.inherited()" cannot find the next-in-chain method, it
    			//		does nothing and returns "undefined". The last method in chain
    			//		can be a default method implemented in Object, which will be
    			//		called last.
    			//
    			//		If "name" is specified, it is assumed that the method that
    			//		received "args" is the parent method for this call. It is looked
    			//		up in the chain list and if it is found the next-in-chain method
    			//		is called. If it is not found, the first-in-chain method is
    			//		called.
    			//
    			//		If "name" is not specified, it will be derived from the calling
    			//		method (using a methoid property "nom").
    			//
    			// example:
    			//	|	var B = declare(A, {
    			//	|		method1: function(a, b, c){
    			//	|			this.inherited(arguments);
    			//	|		},
    			//	|		method2: function(a, b){
    			//	|			return this.inherited(arguments, [a + b]);
    			//	|		}
    			//	|	});
    			//	|	// next method is not in the chain list because it is added
    			//	|	// manually after the class was created.
    			//	|	B.prototype.method3 = function(){
    			//	|		console.log("This is a dynamically-added method.");
    			//	|		this.inherited("method3", arguments);
    			//	|	};
    			// example:
    			//	|	var B = declare(A, {
    			//	|		method: function(a, b){
    			//	|			var super = this.inherited(arguments, true);
    			//	|			// ...
    			//	|			if(!super){
    			//	|				console.log("there is no super method");
    			//	|				return 0;
    			//	|			}
    			//	|			return super.apply(this, arguments);
    			//	|		}
    			//	|	});
    			return	{};	// Object
    		},
    
    		getInherited: function(name, args){
    			// summary:
    			//		Returns a super method.
    			// name: String?
    			//		The optional method name. Should be the same as the caller's
    			//		name. Usually "name" is specified in complex dynamic cases, when
    			//		the calling method was dynamically added, undecorated by
    			//		declare(), and it cannot be determined.
    			// args: Arguments
    			//		The caller supply this argument, which should be the original
    			//		"arguments".
    			// returns:
    			//		Returns a super method (Function) or "undefined".
    			// description:
    			//		This method is a convenience method for "this.inherited()".
    			//		It uses the same algorithm but instead of executing a super
    			//		method, it returns it, or "undefined" if not found.
    			//
    			// example:
    			//	|	var B = declare(A, {
    			//	|		method: function(a, b){
    			//	|			var super = this.getInherited(arguments);
    			//	|			// ...
    			//	|			if(!super){
    			//	|				console.log("there is no super method");
    			//	|				return 0;
    			//	|			}
    			//	|			return super.apply(this, arguments);
    			//	|		}
    			//	|	});
    			return	{};	// Object
    		},
    
    		isInstanceOf: function(cls){
    			// summary:
    			//		Checks the inheritance chain to see if it is inherited from this
    			//		class.
    			// cls: Function
    			//		Class constructor.
    			// returns:
    			//		"true", if this object is inherited from this class, "false"
    			//		otherwise.
    			// description:
    			//		This method is used with instances of classes produced with
    			//		declare() to determine of they support a certain interface or
    			//		not. It models "instanceof" operator.
    			//
    			// example:
    			//	|	var A = declare(null, {
    			//	|		// constructor, properties, and methods go here
    			//	|		// ...
    			//	|	});
    			//	|	var B = declare(null, {
    			//	|		// constructor, properties, and methods go here
    			//	|		// ...
    			//	|	});
    			//	|	var C = declare([A, B], {
    			//	|		// constructor, properties, and methods go here
    			//	|		// ...
    			//	|	});
    			//	|	var D = declare(A, {
    			//	|		// constructor, properties, and methods go here
    			//	|		// ...
    			//	|	});
    			//	|
    			//	|	var a = new A(), b = new B(), c = new C(), d = new D();
    			//	|
    			//	|	console.log(a.isInstanceOf(A)); // true
    			//	|	console.log(b.isInstanceOf(A)); // false
    			//	|	console.log(c.isInstanceOf(A)); // true
    			//	|	console.log(d.isInstanceOf(A)); // true
    			//	|
    			//	|	console.log(a.isInstanceOf(B)); // false
    			//	|	console.log(b.isInstanceOf(B)); // true
    			//	|	console.log(c.isInstanceOf(B)); // true
    			//	|	console.log(d.isInstanceOf(B)); // false
    			//	|
    			//	|	console.log(a.isInstanceOf(C)); // false
    			//	|	console.log(b.isInstanceOf(C)); // false
    			//	|	console.log(c.isInstanceOf(C)); // true
    			//	|	console.log(d.isInstanceOf(C)); // false
    			//	|
    			//	|	console.log(a.isInstanceOf(D)); // false
    			//	|	console.log(b.isInstanceOf(D)); // false
    			//	|	console.log(c.isInstanceOf(D)); // false
    			//	|	console.log(d.isInstanceOf(D)); // true
    			return	{};	// Object
    		},
    
    		extend: function(source){
    			// summary:
    			//		Adds all properties and methods of source to constructor's
    			//		prototype, making them available to all instances created with
    			//		constructor. This method is specific to constructors created with
    			//		declare().
    			// source: Object
    			//		Source object which properties are going to be copied to the
    			//		constructor's prototype.
    			// description:
    			//		Adds source properties to the constructor's prototype. It can
    			//		override existing properties.
    			//
    			//		This method is similar to dojo.extend function, but it is specific
    			//		to constructors produced by declare(). It is implemented
    			//		using dojo.safeMixin, and it skips a constructor property,
    			//		and properly decorates copied functions.
    			//
    			// example:
    			//	|	var A = declare(null, {
    			//	|		m1: function(){},
    			//	|		s1: "Popokatepetl"
    			//	|	});
    			//	|	A.extend({
    			//	|		m1: function(){},
    			//	|		m2: function(){},
    			//	|		f1: true,
    			//	|		d1: 42
    			//	|	});
    		},
    
    		createSubclass: function(mixins, props){
    			// summary:
    			//		Create a subclass of the declared class from a list of base classes.
    			// mixins: Function[]
    			//		Specifies a list of bases (the left-most one is the most deepest
    			//		base).
    			// props: Object?
    			//		An optional object whose properties are copied to the created prototype.
    			// returns: dojo/_base/declare.__DeclareCreatedObject
    			//		New constructor function.
    			// description:
    			//		Create a constructor using a compact notation for inheritance and
    			//		prototype extension.
    			//
    			//		Mixin ancestors provide a type of multiple inheritance.
    			//		Prototypes of mixin ancestors are copied to the new class:
    			//		changes to mixin prototypes will not affect classes to which
    			//		they have been mixed in.
    			//
    			// example:
    			//	|	var A = declare(null, {
    			//	|		m1: function(){},
    			//	|		s1: "bar"
    			//	|	});
    			//	|	var B = declare(null, {
    			//	|		m2: function(){},
    			//	|		s2: "foo"
    			//	|	});
    			//	|	var C = declare(null, {
    			//	|	});
    			//	|	var D1 = A.createSubclass([B, C], {
    			//	|		m1: function(){},
    			//	|		d1: 42
    			//	|	});
    			//	|	var d1 = new D1();
    			//	|
    			//	|	// this is equivalent to:
    			//	|	var D2 = declare([A, B, C], {
    			//	|		m1: function(){},
    			//	|		d1: 42
    			//	|	});
    			//	|	var d2 = new D2();
    		}
    	};
    	=====*/
    // For back-compat, remove for 2.0
    JSProf.LPD(16208, dojo, 'safeMixin').safeMixin = JSProf.LRSP(16208, JSProf.LPD(16207, declare, 'safeMixin').safeMixin = JSProf.LRSP(16207, JSProf.LRE(16206, safeMixin)));
    JSProf.LPD(16210, dojo, 'declare').declare = JSProf.LRSP(16210, JSProf.LRE(16209, declare));
    return JSProf.LRE(16211, declare);
}, 12));