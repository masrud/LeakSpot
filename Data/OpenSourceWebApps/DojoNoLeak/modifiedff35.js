JSProf.LFC(16148, define, false)(JSProf.LNE(15501, [
    "./kernel",
    "../has",
    "./lang"
], 10), JSProf.LNF(16147, function (dojo, has, lang) {
    JSProf.LFD(16130, err);
    JSProf.LFD(16131, c3mro);
    JSProf.LFD(16132, inherited);
    JSProf.LFD(16133, getInherited);
    JSProf.LFD(16134, inherited__debug);
    JSProf.LFD(16135, isInstanceOf);
    JSProf.LFD(16136, mixOwn);
    JSProf.LFD(16137, safeMixin);
    JSProf.LFD(16138, extend);
    JSProf.LFD(16139, createSubclass);
    JSProf.LFD(16140, chainedConstructor);
    JSProf.LFD(16141, singleConstructor);
    JSProf.LFD(16142, simpleConstructor);
    JSProf.LFD(16143, chain);
    JSProf.LFD(16144, forceNew);
    JSProf.LFD(16145, applyNew);
    JSProf.LFD(16146, declare);
    // module:
    //		dojo/_base/declare
    var mix = JSProf.LGD(15502, lang, 'mixin').mixin, op = JSProf.LGD(15503, Object, 'prototype').prototype, opts = JSProf.LGD(15504, op, 'toString').toString, xtor = JSProf.LNE(15506, new (JSProf.LFC(15505, Function, true))(), 'Function'), counter = 0, cname = "constructor";
    function err(msg, cls) {
        throw JSProf.LNE(15511, new (JSProf.LFC(15510, Error, true))("declare" + (JSProf.LRE(15507, cls) ? " " + JSProf.LRE(15508, cls) : "") + ": " + JSProf.LRE(15509, msg)), 'Error');
    }
    // C3 Method Resolution Order (see http://www.python.org/download/releases/2.3/mro/)
    function c3mro(bases, className) {
        var result = JSProf.LNE(15512, [], 10), roots = JSProf.LNE(15515, [JSProf.LNE(15514, {
                    cls: 0,
                    refs: JSProf.LNE(15513, [], 10)
                }, 11)], 10), nameMap = JSProf.LNE(15516, {}, 11), clsCount = 1, l = JSProf.LGD(15517, bases, 'length').length, i = 0, j, lin, base, top, proto, rec, name, refs;
        // build a list of bases naming them if needed
        for (; JSProf.LRE(15518, i) < JSProf.LRE(15519, l); ++i) {
            base = JSProf.LWR(15521, base, JSProf.LGE(15520, bases, 'i')[i]);
            if (!JSProf.LRE(15522, base)) {
                JSProf.LFC(15525, err, false)("mixin #" + JSProf.LRE(15523, i) + " is unknown. Did you use dojo.require to pull it in?", JSProf.LRE(15524, className));
            } else if (JSProf.LMC(15527, opts, 'call').call(JSProf.LRE(15526, base)) != "[object Function]") {
                JSProf.LFC(15530, err, false)("mixin #" + JSProf.LRE(15528, i) + " is not a callable constructor.", JSProf.LRE(15529, className));
            }
            lin = JSProf.LWR(15535, lin, JSProf.LGD(15531, base, '_meta')._meta ? JSProf.LGD(15532, base._meta, 'bases').bases : JSProf.LNE(15534, [JSProf.LRE(15533, base)], 10));
            top = JSProf.LWR(15536, top, 0);
            // add bases to the name map
            for (j = JSProf.LWR(15538, j, JSProf.LGD(15537, lin, 'length').length - 1); JSProf.LRE(15539, j) >= 0; --j) {
                proto = JSProf.LWR(15541, proto, JSProf.LGD(15540, lin[j], 'prototype').prototype);
                if (!JSProf.LMC(15542, proto, 'hasOwnProperty').hasOwnProperty("declaredClass")) {
                    JSProf.LPD(15543, proto, 'declaredClass').declaredClass = JSProf.LRSP(15543, "uniqName_" + counter++);
                }
                name = JSProf.LWR(15545, name, JSProf.LGD(15544, proto, 'declaredClass').declaredClass);
                if (!JSProf.LMC(15547, nameMap, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15546, name))) {
                    JSProf.LPE(15550, nameMap, 'name')[name] = JSProf.LRPE(15550, JSProf.LNE(15549, {
                        count: 0,
                        refs: JSProf.LNE(15548, [], 10),
                        cls: lin[j]
                    }, 11));
                    ++clsCount;
                }
                rec = JSProf.LWR(15552, rec, JSProf.LGE(15551, nameMap, 'name')[name]);
                if (JSProf.LRE(15553, top) && JSProf.LRE(15554, top) !== JSProf.LRE(15555, rec)) {
                    JSProf.LMC(15557, rec.refs, 'push').push(JSProf.LRE(15556, top));
                    ++top.count;
                }
                top = JSProf.LWR(15559, top, JSProf.LRE(15558, rec));
            }
            ++top.count;
            JSProf.LMC(15561, roots[0].refs, 'push').push(JSProf.LRE(15560, top));
        }
        // remove classes without external references recursively
        while (JSProf.LGD(15562, roots, 'length').length) {
            top = JSProf.LWR(15564, top, JSProf.LMC(15563, roots, 'pop').pop());
            JSProf.LMC(15566, result, 'push').push(JSProf.LGD(15565, top, 'cls').cls);
            --clsCount;
            // optimization: follow a single-linked chain
            while (refs = JSProf.LWR(15568, refs, JSProf.LGD(15567, top, 'refs').refs), JSProf.LGD(15569, refs, 'length').length == 1) {
                top = JSProf.LWR(15571, top, JSProf.LGE(15570, refs, 0)[0]);
                if (!JSProf.LRE(15572, top) || --top.count) {
                    // branch or end of chain => do not end to roots
                    top = JSProf.LWR(15573, top, 0);
                    break;
                }
                JSProf.LMC(15575, result, 'push').push(JSProf.LGD(15574, top, 'cls').cls);
                --clsCount;
            }
            if (JSProf.LRE(15576, top)) {
                // branch
                for (i = JSProf.LWR(15577, i, 0), l = JSProf.LWR(15579, l, JSProf.LGD(15578, refs, 'length').length); JSProf.LRE(15580, i) < JSProf.LRE(15581, l); ++i) {
                    top = JSProf.LWR(15583, top, JSProf.LGE(15582, refs, 'i')[i]);
                    if (!--top.count) {
                        JSProf.LMC(15585, roots, 'push').push(JSProf.LRE(15584, top));
                    }
                }
            }
        }
        if (JSProf.LRE(15586, clsCount)) {
            JSProf.LFC(15588, err, false)("can't build consistent linearization", JSProf.LRE(15587, className));
        }
        // calculate the superclass offset
        base = JSProf.LWR(15590, base, JSProf.LGE(15589, bases, 0)[0]);
        JSProf.LPE(15598, result, 0)[0] = JSProf.LRPE(15598, JSProf.LRE(15591, base) ? JSProf.LGD(15592, base, '_meta')._meta && JSProf.LRE(15593, base) === JSProf.LGE(15596, result, JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4 = JSProf.LGD(15594, result, 'length').length - JSProf.LGD(15595, base._meta.bases, 'length').length)[JSProf.TMPS.t4d62450f4f563df411091ddecc5fc6b78ffdb5c4] ? JSProf.LGD(15597, base._meta.bases, 'length').length : 1 : 0);
        return JSProf.LRE(15599, result);
    }
    function inherited(args, a, f) {
        var name, chains, bases, caller, meta, base, proto, opf, pos, cache = JSProf.LPD(15602, this, '_inherited')._inherited = JSProf.LRSP(15602, JSProf.LGD(15600, this, '_inherited')._inherited || JSProf.LNE(15601, {}, 11));
        // crack arguments
        if (typeof JSProf.LRE(15603, args) == "string") {
            name = JSProf.LWR(15605, name, JSProf.LRE(15604, args));
            args = JSProf.LWR(15607, args, JSProf.LRE(15606, a));
            a = JSProf.LWR(15609, a, JSProf.LRE(15608, f));
        }
        f = JSProf.LWR(15610, f, 0);
        caller = JSProf.LWR(15612, caller, JSProf.LGD(15611, args, 'callee').callee);
        name = JSProf.LWR(15615, name, JSProf.LRE(15613, name) || JSProf.LGD(15614, caller, 'nom').nom);
        if (!JSProf.LRE(15616, name)) {
            JSProf.LFC(15618, err, false)("can't deduce a name to call inherited()", JSProf.LGD(15617, this, 'declaredClass').declaredClass);
        }
        meta = JSProf.LWR(15620, meta, JSProf.LGD(15619, this.constructor, '_meta')._meta);
        bases = JSProf.LWR(15622, bases, JSProf.LGD(15621, meta, 'bases').bases);
        pos = JSProf.LWR(15624, pos, JSProf.LGD(15623, cache, 'p').p);
        if (JSProf.LRE(15625, name) != JSProf.LRE(15626, cname)) {
            // method
            if (JSProf.LGD(15627, cache, 'c').c !== JSProf.LRE(15628, caller)) {
                // cache bust
                pos = JSProf.LWR(15629, pos, 0);
                base = JSProf.LWR(15631, base, JSProf.LGE(15630, bases, 0)[0]);
                meta = JSProf.LWR(15633, meta, JSProf.LGD(15632, base, '_meta')._meta);
                if (JSProf.LGE(15634, meta.hidden, 'name')[name] !== JSProf.LRE(15635, caller)) {
                    // error detection
                    chains = JSProf.LWR(15637, chains, JSProf.LGD(15636, meta, 'chains').chains);
                    if (JSProf.LRE(15638, chains) && typeof JSProf.LGE(15639, chains, 'name')[name] == "string") {
                        JSProf.LFC(15642, err, false)("calling chained method with inherited: " + JSProf.LRE(15640, name), JSProf.LGD(15641, this, 'declaredClass').declaredClass);
                    }
                    // find caller
                    do {
                        meta = JSProf.LWR(15644, meta, JSProf.LGD(15643, base, '_meta')._meta);
                        proto = JSProf.LWR(15646, proto, JSProf.LGD(15645, base, 'prototype').prototype);
                        if (JSProf.LRE(15647, meta) && (JSProf.LGE(15648, proto, 'name')[name] === JSProf.LRE(15649, caller) && JSProf.LMC(15651, proto, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15650, name)) || JSProf.LGE(15652, meta.hidden, 'name')[name] === JSProf.LRE(15653, caller))) {
                            break;
                        }
                    } while (base = JSProf.LWR(15655, base, JSProf.LGE(15654, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9]));
                    // intentional assignment
                    pos = JSProf.LWR(15658, pos, JSProf.LRE(15656, base) ? JSProf.LRE(15657, pos) : -1);
                }
            }
            // find next
            base = JSProf.LWR(15660, base, JSProf.LGE(15659, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9]);
            if (JSProf.LRE(15661, base)) {
                proto = JSProf.LWR(15663, proto, JSProf.LGD(15662, base, 'prototype').prototype);
                if (JSProf.LGD(15664, base, '_meta')._meta && JSProf.LMC(15666, proto, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15665, name))) {
                    f = JSProf.LWR(15668, f, JSProf.LGE(15667, proto, 'name')[name]);
                } else {
                    opf = JSProf.LWR(15670, opf, JSProf.LGE(15669, op, 'name')[name]);
                    do {
                        proto = JSProf.LWR(15672, proto, JSProf.LGD(15671, base, 'prototype').prototype);
                        f = JSProf.LWR(15674, f, JSProf.LGE(15673, proto, 'name')[name]);
                        if (JSProf.LRE(15675, f) && (JSProf.LGD(15676, base, '_meta')._meta ? JSProf.LMC(15678, proto, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15677, name)) : JSProf.LRE(15679, f) !== JSProf.LRE(15680, opf))) {
                            break;
                        }
                    } while (base = JSProf.LWR(15682, base, JSProf.LGE(15681, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9]));    // intentional assignment
                }
            }
            f = JSProf.LWR(15686, f, JSProf.LRE(15683, base) && JSProf.LRE(15684, f) || JSProf.LGE(15685, op, 'name')[name]);
        } else {
            // constructor
            if (JSProf.LGD(15687, cache, 'c').c !== JSProf.LRE(15688, caller)) {
                // cache bust
                pos = JSProf.LWR(15689, pos, 0);
                meta = JSProf.LWR(15691, meta, JSProf.LGD(15690, bases[0], '_meta')._meta);
                if (JSProf.LRE(15692, meta) && JSProf.LGD(15693, meta, 'ctor').ctor !== JSProf.LRE(15694, caller)) {
                    // error detection
                    chains = JSProf.LWR(15696, chains, JSProf.LGD(15695, meta, 'chains').chains);
                    if (!JSProf.LRE(15697, chains) || JSProf.LGD(15698, chains, 'constructor').constructor !== "manual") {
                        JSProf.LFC(15700, err, false)("calling chained constructor with inherited", JSProf.LGD(15699, this, 'declaredClass').declaredClass);
                    }
                    // find caller
                    while (base = JSProf.LWR(15702, base, JSProf.LGE(15701, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9])) {
                        // intentional assignment
                        meta = JSProf.LWR(15704, meta, JSProf.LGD(15703, base, '_meta')._meta);
                        if (JSProf.LRE(15705, meta) && JSProf.LGD(15706, meta, 'ctor').ctor === JSProf.LRE(15707, caller)) {
                            break;
                        }
                    }
                    pos = JSProf.LWR(15710, pos, JSProf.LRE(15708, base) ? JSProf.LRE(15709, pos) : -1);
                }
            }
            // find next
            while (base = JSProf.LWR(15712, base, JSProf.LGE(15711, bases, JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9 = ++pos)[JSProf.TMPS.t9dd7fe68a3da5dfff95ef6beff8a17b348a250d9])) {
                // intentional assignment
                meta = JSProf.LWR(15714, meta, JSProf.LGD(15713, base, '_meta')._meta);
                f = JSProf.LWR(15718, f, JSProf.LRE(15715, meta) ? JSProf.LGD(15716, meta, 'ctor').ctor : JSProf.LRE(15717, base));
                if (JSProf.LRE(15719, f)) {
                    break;
                }
            }
            f = JSProf.LWR(15722, f, JSProf.LRE(15720, base) && JSProf.LRE(15721, f));
        }
        // cache the found super method
        JSProf.LPD(15724, cache, 'c').c = JSProf.LRSP(15724, JSProf.LRE(15723, f));
        JSProf.LPD(15726, cache, 'p').p = JSProf.LRSP(15726, JSProf.LRE(15725, pos));
        // now we have the result
        if (JSProf.LRE(15727, f)) {
            return JSProf.LRE(15728, a) === true ? JSProf.LRE(15729, f) : JSProf.LMC(15732, f, 'apply').apply(this, JSProf.LRE(15730, a) || JSProf.LRE(15731, args));
        }    // intentionally no return if a super method was not found
    }
    function getInherited(name, args) {
        if (typeof JSProf.LRE(15733, name) == "string") {
            return JSProf.LMC(15736, this, '__inherited').__inherited(JSProf.LRE(15734, name), JSProf.LRE(15735, args), true);
        }
        return JSProf.LMC(15738, this, '__inherited').__inherited(JSProf.LRE(15737, name), true);
    }
    function inherited__debug(args, a1, a2) {
        var f = JSProf.LMC(15741, this, 'getInherited').getInherited(JSProf.LRE(15739, args), JSProf.LRE(15740, a1));
        if (JSProf.LRE(15742, f)) {
            return JSProf.LMC(15746, f, 'apply').apply(this, JSProf.LRE(15743, a2) || JSProf.LRE(15744, a1) || JSProf.LRE(15745, args));
        }    // intentionally no return if a super method was not found
    }
    var inheritedImpl = JSProf.LGD(15747, dojo.config, 'isDebug').isDebug ? JSProf.LRE(15748, inherited__debug) : JSProf.LRE(15749, inherited);
    // emulation of "instanceof"
    function isInstanceOf(cls) {
        var bases = JSProf.LGD(15750, this.constructor._meta, 'bases').bases;
        for (var i = 0, l = JSProf.LGD(15751, bases, 'length').length; JSProf.LRE(15752, i) < JSProf.LRE(15753, l); ++i) {
            if (JSProf.LGE(15754, bases, 'i')[i] === JSProf.LRE(15755, cls)) {
                return true;
            }
        }
        return this instanceof JSProf.LRE(15756, cls);
    }
    function mixOwn(target, source) {
        // add props adding metadata for incoming functions skipping a constructor
        for (var name in JSProf.LRE(15757, source)) {
            if (JSProf.LRE(15758, name) != JSProf.LRE(15759, cname) && JSProf.LMC(15761, source, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15760, name))) {
                JSProf.LPE(15763, target, 'name')[name] = JSProf.LRPE(15763, JSProf.LGE(15762, source, 'name')[name]);
            }
        }
        if (JSProf.LFC(15764, has, false)("bug-for-in-skips-shadowed")) {
            for (var extraNames = JSProf.LGD(15765, lang, '_extraNames')._extraNames, i = JSProf.LGD(15766, extraNames, 'length').length; JSProf.LRE(15767, i);) {
                name = JSProf.LWR(15769, name, JSProf.LGE(15768, extraNames, JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e = --i)[JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e]);
                if (JSProf.LRE(15770, name) != JSProf.LRE(15771, cname) && JSProf.LMC(15773, source, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(15772, name))) {
                    JSProf.LPE(15775, target, 'name')[name] = JSProf.LRPE(15775, JSProf.LGE(15774, source, 'name')[name]);
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
        for (name in JSProf.LRE(15776, source)) {
            t = JSProf.LWR(15778, t, JSProf.LGE(15777, source, 'name')[name]);
            if ((JSProf.LRE(15779, t) !== JSProf.LGE(15780, op, 'name')[name] || !(JSProf.LRE(15781, name) in JSProf.LRE(15782, op))) && JSProf.LRE(15783, name) != JSProf.LRE(15784, cname)) {
                if (JSProf.LMC(15786, opts, 'call').call(JSProf.LRE(15785, t)) == "[object Function]") {
                    // non-trivial function method => attach its name
                    JSProf.LPD(15788, t, 'nom').nom = JSProf.LRSP(15788, JSProf.LRE(15787, name));
                }
                JSProf.LPE(15790, target, 'name')[name] = JSProf.LRPE(15790, JSProf.LRE(15789, t));
            }
        }
        if (JSProf.LFC(15791, has, false)("bug-for-in-skips-shadowed")) {
            for (var extraNames = JSProf.LGD(15792, lang, '_extraNames')._extraNames, i = JSProf.LGD(15793, extraNames, 'length').length; JSProf.LRE(15794, i);) {
                name = JSProf.LWR(15796, name, JSProf.LGE(15795, extraNames, JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e = --i)[JSProf.TMPS.t45b6d9231341ef1e1878a4084c112fead72e763e]);
                t = JSProf.LWR(15798, t, JSProf.LGE(15797, source, 'name')[name]);
                if ((JSProf.LRE(15799, t) !== JSProf.LGE(15800, op, 'name')[name] || !(JSProf.LRE(15801, name) in JSProf.LRE(15802, op))) && JSProf.LRE(15803, name) != JSProf.LRE(15804, cname)) {
                    if (JSProf.LMC(15806, opts, 'call').call(JSProf.LRE(15805, t)) == "[object Function]") {
                        // non-trivial function method => attach its name
                        JSProf.LPD(15808, t, 'nom').nom = JSProf.LRSP(15808, JSProf.LRE(15807, name));
                    }
                    JSProf.LPE(15810, target, 'name')[name] = JSProf.LRPE(15810, JSProf.LRE(15809, t));
                }
            }
        }
        return JSProf.LRE(15811, target);
    }
    function extend(source) {
        JSProf.LMC(15814, declare, 'safeMixin').safeMixin(JSProf.LGD(15812, this, 'prototype').prototype, JSProf.LRE(15813, source));
        return this;
    }
    function createSubclass(mixins, props) {
        // crack parameters
        if (!(JSProf.LRE(15815, mixins) instanceof JSProf.LRU(15816, typeof Array === 'undefined' ? undefined : Array) || typeof JSProf.LRE(15817, mixins) == 'function')) {
            props = JSProf.LWR(15819, props, JSProf.LRE(15818, mixins));
            mixins = JSProf.LWR(15820, mixins, undefined);
        }
        props = JSProf.LWR(15823, props, JSProf.LRE(15821, props) || JSProf.LNE(15822, {}, 11));
        mixins = JSProf.LWR(15826, mixins, JSProf.LRE(15824, mixins) || JSProf.LNE(15825, [], 10));
        return JSProf.LFC(15830, declare, false)(JSProf.LNE(15827, [this], 10).concat(JSProf.LRE(15828, mixins)), JSProf.LRE(15829, props));
    }
    // chained constructor compatible with the legacy declare()
    function chainedConstructor(bases, ctorSpecial) {
        return JSProf.LNF(15892, function () {
            var a = arguments, args = JSProf.LRE(15831, a), a0 = JSProf.LGE(15832, a, 0)[0], f, i, m, l = JSProf.LGD(15833, bases, 'length').length, preArgs;
            if (!(this instanceof JSProf.LGD(15834, a, 'callee').callee)) {
                // not called via new, so force it
                return JSProf.LFC(15836, applyNew, false)(JSProf.LRE(15835, a));
            }
            //this._inherited = {};
            // perform the shaman's rituals of the original declare()
            // 1) call two types of the preamble
            if (JSProf.LRE(15837, ctorSpecial) && (JSProf.LRE(15838, a0) && JSProf.LGD(15839, a0, 'preamble').preamble || JSProf.LGD(15840, this, 'preamble').preamble)) {
                // full blown ritual
                preArgs = JSProf.LWR(15844, preArgs, JSProf.LNE(15843, new (JSProf.LFC(15842, Array, true))(JSProf.LGD(15841, bases, 'length').length), 'Array'));
                // prepare parameters
                JSProf.LPE(15846, preArgs, 0)[0] = JSProf.LRPE(15846, JSProf.LRE(15845, a));
                for (i = JSProf.LWR(15847, i, 0);;) {
                    // process the preamble of the 1st argument
                    a0 = JSProf.LWR(15849, a0, JSProf.LGE(15848, a, 0)[0]);
                    if (JSProf.LRE(15850, a0)) {
                        f = JSProf.LWR(15852, f, JSProf.LGD(15851, a0, 'preamble').preamble);
                        if (JSProf.LRE(15853, f)) {
                            a = JSProf.LWR(15857, a, JSProf.LMC(15855, f, 'apply').apply(this, JSProf.LRE(15854, a)) || JSProf.LRE(15856, a));
                        }
                    }
                    // process the preamble of this class
                    f = JSProf.LWR(15859, f, JSProf.LGD(15858, bases[i], 'prototype').prototype);
                    f = JSProf.LWR(15862, f, JSProf.LMC(15860, f, 'hasOwnProperty').hasOwnProperty("preamble") && JSProf.LGD(15861, f, 'preamble').preamble);
                    if (JSProf.LRE(15863, f)) {
                        a = JSProf.LWR(15867, a, JSProf.LMC(15865, f, 'apply').apply(this, JSProf.LRE(15864, a)) || JSProf.LRE(15866, a));
                    }
                    // one peculiarity of the preamble:
                    // it is called if it is not needed,
                    // e.g., there is no constructor to call
                    // let's watch for the last constructor
                    // (see ticket #9795)
                    if (++i == JSProf.LRE(15868, l)) {
                        break;
                    }
                    JSProf.LPE(15870, preArgs, 'i')[i] = JSProf.LRPE(15870, JSProf.LRE(15869, a));
                }
            }
            // 2) call all non-trivial constructors using prepared arguments
            for (i = JSProf.LWR(15872, i, JSProf.LRE(15871, l) - 1); JSProf.LRE(15873, i) >= 0; --i) {
                f = JSProf.LWR(15875, f, JSProf.LGE(15874, bases, 'i')[i]);
                m = JSProf.LWR(15877, m, JSProf.LGD(15876, f, '_meta')._meta);
                f = JSProf.LWR(15881, f, JSProf.LRE(15878, m) ? JSProf.LGD(15879, m, 'ctor').ctor : JSProf.LRE(15880, f));
                if (JSProf.LRE(15882, f)) {
                    JSProf.LMC(15886, f, 'apply').apply(this, JSProf.LRE(15883, preArgs) ? JSProf.LGE(15884, preArgs, 'i')[i] : JSProf.LRE(15885, a));
                }
            }
            // 3) continue the original ritual: call the postscript
            f = JSProf.LWR(15888, f, JSProf.LGD(15887, this, 'postscript').postscript);
            if (JSProf.LRE(15889, f)) {
                JSProf.LMC(15891, f, 'apply').apply(this, JSProf.LRE(15890, args));
            }
        }, 12);
    }
    // chained constructor compatible with the legacy declare()
    function singleConstructor(ctor, ctorSpecial) {
        return JSProf.LNF(15920, function () {
            var a = arguments, t = JSProf.LRE(15893, a), a0 = JSProf.LGE(15894, a, 0)[0], f;
            if (!(this instanceof JSProf.LGD(15895, a, 'callee').callee)) {
                // not called via new, so force it
                return JSProf.LFC(15897, applyNew, false)(JSProf.LRE(15896, a));
            }
            //this._inherited = {};
            // perform the shaman's rituals of the original declare()
            // 1) call two types of the preamble
            if (JSProf.LRE(15898, ctorSpecial)) {
                // full blown ritual
                if (JSProf.LRE(15899, a0)) {
                    // process the preamble of the 1st argument
                    f = JSProf.LWR(15901, f, JSProf.LGD(15900, a0, 'preamble').preamble);
                    if (JSProf.LRE(15902, f)) {
                        t = JSProf.LWR(15906, t, JSProf.LMC(15904, f, 'apply').apply(this, JSProf.LRE(15903, t)) || JSProf.LRE(15905, t));
                    }
                }
                f = JSProf.LWR(15908, f, JSProf.LGD(15907, this, 'preamble').preamble);
                if (JSProf.LRE(15909, f)) {
                    // process the preamble of this class
                    JSProf.LMC(15911, f, 'apply').apply(this, JSProf.LRE(15910, t));    // one peculiarity of the preamble:
                                                                                        // it is called even if it is not needed,
                                                                                        // e.g., there is no constructor to call
                                                                                        // let's watch for the last constructor
                                                                                        // (see ticket #9795)
                }
            }
            // 2) call a constructor
            if (JSProf.LRE(15912, ctor)) {
                JSProf.LMC(15914, ctor, 'apply').apply(this, JSProf.LRE(15913, a));
            }
            // 3) continue the original ritual: call the postscript
            f = JSProf.LWR(15916, f, JSProf.LGD(15915, this, 'postscript').postscript);
            if (JSProf.LRE(15917, f)) {
                JSProf.LMC(15919, f, 'apply').apply(this, JSProf.LRE(15918, a));
            }
        }, 12);
    }
    // plain vanilla constructor (can use inherited() to call its base constructor)
    function simpleConstructor(bases) {
        return JSProf.LNF(15940, function () {
            var a = arguments, i = 0, f, m;
            if (!(this instanceof JSProf.LGD(15921, a, 'callee').callee)) {
                // not called via new, so force it
                return JSProf.LFC(15923, applyNew, false)(JSProf.LRE(15922, a));
            }
            //this._inherited = {};
            // perform the shaman's rituals of the original declare()
            // 1) do not call the preamble
            // 2) call the top constructor (it can use this.inherited())
            for (; f = JSProf.LWR(15925, f, JSProf.LGE(15924, bases, 'i')[i]); ++i) {
                // intentional assignment
                m = JSProf.LWR(15927, m, JSProf.LGD(15926, f, '_meta')._meta);
                f = JSProf.LWR(15931, f, JSProf.LRE(15928, m) ? JSProf.LGD(15929, m, 'ctor').ctor : JSProf.LRE(15930, f));
                if (JSProf.LRE(15932, f)) {
                    JSProf.LMC(15934, f, 'apply').apply(this, JSProf.LRE(15933, a));
                    break;
                }
            }
            // 3) call the postscript
            f = JSProf.LWR(15936, f, JSProf.LGD(15935, this, 'postscript').postscript);
            if (JSProf.LRE(15937, f)) {
                JSProf.LMC(15939, f, 'apply').apply(this, JSProf.LRE(15938, a));
            }
        }, 12);
    }
    function chain(name, bases, reversed) {
        return JSProf.LNF(15957, function () {
            var b, m, f, i = 0, step = 1;
            if (JSProf.LRE(15941, reversed)) {
                i = JSProf.LWR(15943, i, JSProf.LGD(15942, bases, 'length').length - 1);
                step = JSProf.LWR(15944, step, -1);
            }
            for (; b = JSProf.LWR(15946, b, JSProf.LGE(15945, bases, 'i')[i]); i += JSProf.LRE(15947, step)) {
                // intentional assignment
                m = JSProf.LWR(15949, m, JSProf.LGD(15948, b, '_meta')._meta);
                f = JSProf.LWR(15954, f, JSProf.LGE(15953, JSProf.LRE(15950, m) ? JSProf.LGD(15951, m, 'hidden').hidden : JSProf.LGD(15952, b, 'prototype').prototype, 'name')[name]);
                if (JSProf.LRE(15955, f)) {
                    JSProf.LMC(15956, f, 'apply').apply(this, arguments);
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
        JSProf.LPD(15959, xtor, 'prototype').prototype = JSProf.LRSP(15959, JSProf.LGD(15958, ctor, 'prototype').prototype);
        var t = JSProf.LNE(15961, new (JSProf.LFC(15960, xtor, true))(), 'xtor');
        xtor.prototype = null;
        // clean up
        return JSProf.LRE(15962, t);
    }
    // applyNew(args)
    // just like 'new ctor()' except that the constructor and its arguments come
    // from args, which must be an array or an arguments object
    function applyNew(args) {
        // create an object with ctor's prototype but without
        // calling ctor on it.
        var ctor = JSProf.LGD(15963, args, 'callee').callee, t = JSProf.LFC(15965, forceNew, false)(JSProf.LRE(15964, ctor));
        // execute the real constructor on the new object
        JSProf.LMC(15968, ctor, 'apply').apply(JSProf.LRE(15966, t), JSProf.LRE(15967, args));
        return JSProf.LRE(15969, t);
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
        if (typeof JSProf.LRE(15970, className) != "string") {
            props = JSProf.LWR(15972, props, JSProf.LRE(15971, superclass));
            superclass = JSProf.LWR(15974, superclass, JSProf.LRE(15973, className));
            className = JSProf.LWR(15975, className, "");
        }
        props = JSProf.LWR(15978, props, JSProf.LRE(15976, props) || JSProf.LNE(15977, {}, 11));
        var proto, i, t, ctor, name, bases, chains, mixins = 1, parents = JSProf.LRE(15979, superclass);
        // build a prototype
        if (JSProf.LMC(15981, opts, 'call').call(JSProf.LRE(15980, superclass)) == "[object Array]") {
            // C3 MRO
            bases = JSProf.LWR(15985, bases, JSProf.LFC(15984, c3mro, false)(JSProf.LRE(15982, superclass), JSProf.LRE(15983, className)));
            t = JSProf.LWR(15987, t, JSProf.LGE(15986, bases, 0)[0]);
            mixins = JSProf.LWR(15990, mixins, JSProf.LGD(15988, bases, 'length').length - JSProf.LRE(15989, t));
            superclass = JSProf.LWR(15992, superclass, JSProf.LGE(15991, bases, 'mixins')[mixins]);
        } else {
            bases = JSProf.LWR(15994, bases, JSProf.LNE(15993, [0], 10));
            if (JSProf.LRE(15995, superclass)) {
                if (JSProf.LMC(15997, opts, 'call').call(JSProf.LRE(15996, superclass)) == "[object Function]") {
                    t = JSProf.LWR(15999, t, JSProf.LGD(15998, superclass, '_meta')._meta);
                    bases = JSProf.LWR(16003, bases, bases.concat(JSProf.LRE(16000, t) ? JSProf.LGD(16001, t, 'bases').bases : JSProf.LRE(16002, superclass)));
                } else {
                    JSProf.LFC(16005, err, false)("base class is not a callable constructor.", JSProf.LRE(16004, className));
                }
            } else if (JSProf.LRE(16006, superclass) !== null) {
                JSProf.LFC(16008, err, false)("unknown base class. Did you use dojo.require to pull it in?", JSProf.LRE(16007, className));
            }
        }
        if (JSProf.LRE(16009, superclass)) {
            for (i = JSProf.LWR(16011, i, JSProf.LRE(16010, mixins) - 1);; --i) {
                proto = JSProf.LWR(16014, proto, JSProf.LFC(16013, forceNew, false)(JSProf.LRE(16012, superclass)));
                if (!JSProf.LRE(16015, i)) {
                    // stop if nothing to add (the last base)
                    break;
                }
                // mix in properties
                t = JSProf.LWR(16017, t, JSProf.LGE(16016, bases, 'i')[i]);
                JSProf.LFC(16023, JSProf.LGD(16018, t, '_meta')._meta ? JSProf.LRE(16019, mixOwn) : JSProf.LRE(16020, mix), false)(JSProf.LRE(16021, proto), JSProf.LGD(16022, t, 'prototype').prototype);
                // chain in new constructor
                ctor = JSProf.LWR(16026, ctor, JSProf.LNE(16025, new (JSProf.LFC(16024, Function, true))(), 'Function'));
                JSProf.LPD(16028, ctor, 'superclass').superclass = JSProf.LRSP(16028, JSProf.LRE(16027, superclass));
                JSProf.LPD(16030, ctor, 'prototype').prototype = JSProf.LRSP(16030, JSProf.LRE(16029, proto));
                superclass = JSProf.LWR(16033, superclass, JSProf.LPD(16032, proto, 'constructor').constructor = JSProf.LRSP(16032, JSProf.LRE(16031, ctor)));
            }
        } else {
            proto = JSProf.LWR(16035, proto, JSProf.LNE(16034, {}, 11));
        }
        // add all properties
        JSProf.LMC(16038, declare, 'safeMixin').safeMixin(JSProf.LRE(16036, proto), JSProf.LRE(16037, props));
        // add constructor
        t = JSProf.LWR(16040, t, JSProf.LGD(16039, props, 'constructor').constructor);
        if (JSProf.LRE(16041, t) !== JSProf.LGD(16042, op, 'constructor').constructor) {
            JSProf.LPD(16044, t, 'nom').nom = JSProf.LRSP(16044, JSProf.LRE(16043, cname));
            JSProf.LPD(16046, proto, 'constructor').constructor = JSProf.LRSP(16046, JSProf.LRE(16045, t));
        }
        // collect chains and flags
        for (i = JSProf.LWR(16048, i, JSProf.LRE(16047, mixins) - 1); JSProf.LRE(16049, i); --i) {
            // intentional assignment
            t = JSProf.LWR(16051, t, JSProf.LGD(16050, bases[i], '_meta')._meta);
            if (JSProf.LRE(16052, t) && JSProf.LGD(16053, t, 'chains').chains) {
                chains = JSProf.LWR(16058, chains, JSProf.LFC(16057, mix, false)(JSProf.LRE(16054, chains) || JSProf.LNE(16055, {}, 11), JSProf.LGD(16056, t, 'chains').chains));
            }
        }
        if (JSProf.LGE(16059, proto, '-chains-')["-chains-"]) {
            chains = JSProf.LWR(16064, chains, JSProf.LFC(16063, mix, false)(JSProf.LRE(16060, chains) || JSProf.LNE(16061, {}, 11), JSProf.LGE(16062, proto, '-chains-')["-chains-"]));
        }
        // build ctor
        t = JSProf.LWR(16068, t, !JSProf.LRE(16065, chains) || !JSProf.LMC(16067, chains, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(16066, cname)));
        JSProf.LPE(16081, bases, 0)[0] = JSProf.LRPE(16081, ctor = JSProf.LWR(16080, ctor, JSProf.LRE(16069, chains) && JSProf.LGD(16070, chains, 'constructor').constructor === "manual" ? JSProf.LFC(16072, simpleConstructor, false)(JSProf.LRE(16071, bases)) : JSProf.LGD(16073, bases, 'length').length == 1 ? JSProf.LFC(16076, singleConstructor, false)(JSProf.LGD(16074, props, 'constructor').constructor, JSProf.LRE(16075, t)) : JSProf.LFC(16079, chainedConstructor, false)(JSProf.LRE(16077, bases), JSProf.LRE(16078, t))));
        // add meta information to the constructor
        JSProf.LPD(16083, ctor, '_meta')._meta = JSProf.LRSP(16083, JSProf.LNE(16082, {
            bases: bases,
            hidden: props,
            chains: chains,
            parents: parents,
            ctor: props.constructor
        }, 11));
        JSProf.LPD(16086, ctor, 'superclass').superclass = JSProf.LRSP(16086, JSProf.LRE(16084, superclass) && JSProf.LGD(16085, superclass, 'prototype').prototype);
        JSProf.LPD(16088, ctor, 'extend').extend = JSProf.LRSP(16088, JSProf.LRE(16087, extend));
        JSProf.LPD(16090, ctor, 'createSubclass').createSubclass = JSProf.LRSP(16090, JSProf.LRE(16089, createSubclass));
        JSProf.LPD(16092, ctor, 'prototype').prototype = JSProf.LRSP(16092, JSProf.LRE(16091, proto));
        JSProf.LPD(16094, proto, 'constructor').constructor = JSProf.LRSP(16094, JSProf.LRE(16093, ctor));
        // add "standard" methods to the prototype
        JSProf.LPD(16096, proto, 'getInherited').getInherited = JSProf.LRSP(16096, JSProf.LRE(16095, getInherited));
        JSProf.LPD(16098, proto, 'isInstanceOf').isInstanceOf = JSProf.LRSP(16098, JSProf.LRE(16097, isInstanceOf));
        JSProf.LPD(16100, proto, 'inherited').inherited = JSProf.LRSP(16100, JSProf.LRE(16099, inheritedImpl));
        JSProf.LPD(16102, proto, '__inherited').__inherited = JSProf.LRSP(16102, JSProf.LRE(16101, inherited));
        // add name if specified
        if (JSProf.LRE(16103, className)) {
            JSProf.LPD(16105, proto, 'declaredClass').declaredClass = JSProf.LRSP(16105, JSProf.LRE(16104, className));
            JSProf.LMC(16108, lang, 'setObject').setObject(JSProf.LRE(16106, className), JSProf.LRE(16107, ctor));
        }
        // build chains and add them to the prototype
        if (JSProf.LRE(16109, chains)) {
            for (name in JSProf.LRE(16110, chains)) {
                if (JSProf.LGE(16111, proto, 'name')[name] && typeof JSProf.LGE(16112, chains, 'name')[name] == "string" && JSProf.LRE(16113, name) != JSProf.LRE(16114, cname)) {
                    t = JSProf.LWR(16120, t, JSProf.LPE(16119, proto, 'name')[name] = JSProf.LRPE(16119, JSProf.LFC(16118, chain, false)(JSProf.LRE(16115, name), JSProf.LRE(16116, bases), JSProf.LGE(16117, chains, 'name')[name] === "after")));
                    JSProf.LPD(16122, t, 'nom').nom = JSProf.LRSP(16122, JSProf.LRE(16121, name));
                }
            }
        }
        // chained methods do not return values
        // no need to chain "invisible" functions
        return JSProf.LRE(16123, ctor);    // Function
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
    JSProf.LPD(16126, dojo, 'safeMixin').safeMixin = JSProf.LRSP(16126, JSProf.LPD(16125, declare, 'safeMixin').safeMixin = JSProf.LRSP(16125, JSProf.LRE(16124, safeMixin)));
    JSProf.LPD(16128, dojo, 'declare').declare = JSProf.LRSP(16128, JSProf.LRE(16127, declare));
    return JSProf.LRE(16129, declare);
}, 12));
