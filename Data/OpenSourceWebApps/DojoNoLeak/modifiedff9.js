JSProf.LFC(7982, define, false)(JSProf.LNE(7688, [
    "./kernel",
    "../has",
    "../sniff"
], 10), JSProf.LNF(7981, function (dojo, has) {
    // module:
    //		dojo/_base/lang
    JSProf.LMC(7691, has, 'add').add("bug-for-in-skips-shadowed", JSProf.LNF(7690, function () {
        // if true, the for-in iterator skips object properties that exist in Object's prototype (IE 6 - ?)
        for (var i in JSProf.LNE(7689, { toString: 1 }, 11)) {
            return 0;
        }
        return 1;
    }, 12));
    // Helper methods
    var _extraNames = JSProf.LFC(7692, has, false)("bug-for-in-skips-shadowed") ? "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split(".") : JSProf.LNE(7693, [], 10), _extraLen = JSProf.LGD(7694, _extraNames, 'length').length, getProp = JSProf.LNF(7714, function (parts, create, context) {
            if (!JSProf.LRE(7695, context)) {
                if (JSProf.LGE(7696, parts, 0)[0] && JSProf.LGE(7697, dojo.scopeMap, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = parts[0])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a]) {
                    // Voodoo code from the old days where "dojo" or "dijit" maps to some special object
                    // rather than just window.dojo
                    context = JSProf.LWR(7700, context, JSProf.LGE(7699, dojo.scopeMap[JSProf.LMC(7698, parts, 'shift').shift()], 1)[1]);
                } else {
                    context = JSProf.LWR(7702, context, JSProf.LGD(7701, dojo, 'global').global);
                }
            }
            try {
                for (var i = 0; JSProf.LRE(7703, i) < JSProf.LGD(7704, parts, 'length').length; i++) {
                    var p = JSProf.LGE(7705, parts, 'i')[i];
                    if (!(JSProf.LRE(7706, p) in JSProf.LRE(7707, context))) {
                        if (JSProf.LRE(7708, create)) {
                            JSProf.LPE(7710, context, 'p')[p] = JSProf.LRPE(7710, JSProf.LNE(7709, {}, 11));
                        } else {
                            return;    // return undefined
                        }
                    }
                    context = JSProf.LWR(7712, context, JSProf.LGE(7711, context, 'p')[p]);
                }
                return JSProf.LRE(7713, context);    // mixed
            } catch (e) {
            }
        }, 12), opts = JSProf.LGD(7715, Object.prototype, 'toString').toString, efficient = JSProf.LNF(7721, function (obj, offset, startWith) {
            return (JSProf.LRE(7716, startWith) || JSProf.LNE(7717, [], 10)).concat(JSProf.LMC(7720, Array.prototype.slice, 'call').call(JSProf.LRE(7718, obj), JSProf.LRE(7719, offset) || 0));
        }, 12), _pattern = /\{([^\}]+)\}/g;
    // Module export
    var lang = JSProf.LNE(7975, {
            _extraNames: _extraNames,
            _mixin: JSProf.LNF(7762, function (dest, source, copyFunc) {
                // summary:
                //		Copies/adds all properties of source to dest; returns dest.
                // dest: Object
                //		The object to which to copy/add all properties contained in source.
                // source: Object
                //		The object from which to draw all properties to copy into dest.
                // copyFunc: Function?
                //		The process used to copy/add a property in source; defaults to the Javascript assignment operator.
                // returns:
                //		dest, as modified
                // description:
                //		All properties, including functions (sometimes termed "methods"), excluding any non-standard extensions
                //		found in Object.prototype, are copied/added to dest. Copying/adding each particular property is
                //		delegated to copyFunc (if any); copyFunc defaults to the Javascript assignment operator if not provided.
                //		Notice that by default, _mixin executes a so-called "shallow copy" and aggregate types are copied/added by reference.
                var name, s, i, empty = JSProf.LNE(7722, {}, 11);
                for (name in JSProf.LRE(7723, source)) {
                    // the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
                    // inherited from Object.prototype.	 For example, if dest has a custom toString() method,
                    // don't overwrite it with the toString() method that source inherited from Object.prototype
                    s = JSProf.LWR(7725, s, JSProf.LGE(7724, source, 'name')[name]);
                    if (!(JSProf.LRE(7726, name) in JSProf.LRE(7727, dest)) || JSProf.LGE(7728, dest, 'name')[name] !== JSProf.LRE(7729, s) && (!(JSProf.LRE(7730, name) in JSProf.LRE(7731, empty)) || JSProf.LGE(7732, empty, 'name')[name] !== JSProf.LRE(7733, s))) {
                        JSProf.LPE(7738, dest, 'name')[name] = JSProf.LRPE(7738, JSProf.LRE(7734, copyFunc) ? JSProf.LFC(7736, copyFunc, false)(JSProf.LRE(7735, s)) : JSProf.LRE(7737, s));
                    }
                }
                if (JSProf.LFC(7739, has, false)("bug-for-in-skips-shadowed")) {
                    if (JSProf.LRE(7740, source)) {
                        for (i = JSProf.LWR(7741, i, 0); JSProf.LRE(7742, i) < JSProf.LRE(7743, _extraLen); ++i) {
                            name = JSProf.LWR(7745, name, JSProf.LGE(7744, _extraNames, 'i')[i]);
                            s = JSProf.LWR(7747, s, JSProf.LGE(7746, source, 'name')[name]);
                            if (!(JSProf.LRE(7748, name) in JSProf.LRE(7749, dest)) || JSProf.LGE(7750, dest, 'name')[name] !== JSProf.LRE(7751, s) && (!(JSProf.LRE(7752, name) in JSProf.LRE(7753, empty)) || JSProf.LGE(7754, empty, 'name')[name] !== JSProf.LRE(7755, s))) {
                                JSProf.LPE(7760, dest, 'name')[name] = JSProf.LRPE(7760, JSProf.LRE(7756, copyFunc) ? JSProf.LFC(7758, copyFunc, false)(JSProf.LRE(7757, s)) : JSProf.LRE(7759, s));
                            }
                        }
                    }
                }
                return JSProf.LRE(7761, dest);    // Object
            }, 12),
            mixin: JSProf.LNF(7773, function (dest, sources) {
                // summary:
                //		Copies/adds all properties of one or more sources to dest; returns dest.
                // dest: Object
                //		The object to which to copy/add all properties contained in source. If dest is falsy, then
                //		a new object is manufactured before copying/adding properties begins.
                // sources: Object...
                //		One of more objects from which to draw all properties to copy into dest. sources are processed
                //		left-to-right and if more than one of these objects contain the same property name, the right-most
                //		value "wins".
                // returns: Object
                //		dest, as modified
                // description:
                //		All properties, including functions (sometimes termed "methods"), excluding any non-standard extensions
                //		found in Object.prototype, are copied/added from sources to dest. sources are processed left to right.
                //		The Javascript assignment operator is used to copy/add each property; therefore, by default, mixin
                //		executes a so-called "shallow copy" and aggregate types are copied/added by reference.
                // example:
                //		make a shallow copy of an object
                //	|	var copy = lang.mixin({}, source);
                // example:
                //		many class constructors often take an object which specifies
                //		values to be configured on the object. In this case, it is
                //		often simplest to call `lang.mixin` on the `this` object:
                //	|	declare("acme.Base", null, {
                //	|		constructor: function(properties){
                //	|			// property configuration:
                //	|			lang.mixin(this, properties);
                //	|
                //	|			console.log(this.quip);
                //	|			//	...
                //	|		},
                //	|		quip: "I wasn't born yesterday, you know - I've seen movies.",
                //	|		// ...
                //	|	});
                //	|
                //	|	// create an instance of the class and configure it
                //	|	var b = new acme.Base({quip: "That's what it does!" });
                // example:
                //		copy in properties from multiple objects
                //	|	var flattened = lang.mixin(
                //	|		{
                //	|			name: "Frylock",
                //	|			braces: true
                //	|		},
                //	|		{
                //	|			name: "Carl Brutanananadilewski"
                //	|		}
                //	|	);
                //	|
                //	|	// will print "Carl Brutanananadilewski"
                //	|	console.log(flattened.name);
                //	|	// will print "true"
                //	|	console.log(flattened.braces);
                if (!JSProf.LRE(7763, dest)) {
                    dest = JSProf.LWR(7765, dest, JSProf.LNE(7764, {}, 11));
                }
                for (var i = 1, l = JSProf.LGD(7766, arguments, 'length').length; JSProf.LRE(7767, i) < JSProf.LRE(7768, l); i++) {
                    JSProf.LMC(7771, lang, '_mixin')._mixin(JSProf.LRE(7769, dest), JSProf.LGE(7770, arguments, 'i')[i]);
                }
                return JSProf.LRE(7772, dest);    // Object
            }, 12),
            setObject: JSProf.LNF(7782, function (name, value, context) {
                // summary:
                //		Set a property from a dot-separated string, such as "A.B.C"
                // description:
                //		Useful for longer api chains where you have to test each object in
                //		the chain, or when you have an object reference in string format.
                //		Objects are created as needed along `path`. Returns the passed
                //		value if setting is successful or `undefined` if not.
                // name: String
                //		Path to a property, in the form "A.B.C".
                // value: anything
                //		value or object to place at location given by name
                // context: Object?
                //		Optional. Object to use as root of path. Defaults to
                //		`dojo.global`.
                // example:
                //		set the value of `foo.bar.baz`, regardless of whether
                //		intermediate objects already exist:
                //	| lang.setObject("foo.bar.baz", value);
                // example:
                //		without `lang.setObject`, we often see code like this:
                //	| // ensure that intermediate objects are available
                //	| if(!obj["parent"]){ obj.parent = {}; }
                //	| if(!obj.parent["child"]){ obj.parent.child = {}; }
                //	| // now we can safely set the property
                //	| obj.parent.child.prop = "some value";
                //		whereas with `lang.setObject`, we can shorten that to:
                //	| lang.setObject("parent.child.prop", "some value", obj);
                var parts = name.split("."), p = JSProf.LMC(7774, parts, 'pop').pop(), obj = JSProf.LFC(7777, getProp, false)(JSProf.LRE(7775, parts), true, JSProf.LRE(7776, context));
                return JSProf.LRE(7778, obj) && JSProf.LRE(7779, p) ? JSProf.LPE(7781, obj, 'p')[p] = JSProf.LRPE(7781, JSProf.LRE(7780, value)) : undefined;    // Object
            }, 12),
            getObject: JSProf.LNF(7788, function (name, create, context) {
                // summary:
                //		Get a property from a dot-separated string, such as "A.B.C"
                // description:
                //		Useful for longer api chains where you have to test each object in
                //		the chain, or when you have an object reference in string format.
                // name: String
                //		Path to an property, in the form "A.B.C".
                // create: Boolean?
                //		Optional. Defaults to `false`. If `true`, Objects will be
                //		created at any point along the 'path' that is undefined.
                // context: Object?
                //		Optional. Object to use as root of path. Defaults to
                //		'dojo.global'. Null may be passed.
                return JSProf.LFC(7787, getProp, false)(JSProf.LRE(7783, name) ? name.split(".") : JSProf.LNE(7784, [], 10), JSProf.LRE(7785, create), JSProf.LRE(7786, context));    // Object
            }, 12),
            exists: JSProf.LNF(7792, function (name, obj) {
                // summary:
                //		determine if an object supports a given method
                // description:
                //		useful for longer api chains where you have to test each object in
                //		the chain. Useful for object and method detection.
                // name: String
                //		Path to an object, in the form "A.B.C".
                // obj: Object?
                //		Object to use as root of path. Defaults to
                //		'dojo.global'. Null may be passed.
                // example:
                //	| // define an object
                //	| var foo = {
                //	|		bar: { }
                //	| };
                //	|
                //	| // search the global scope
                //	| lang.exists("foo.bar"); // true
                //	| lang.exists("foo.bar.baz"); // false
                //	|
                //	| // search from a particular scope
                //	| lang.exists("bar", foo); // true
                //	| lang.exists("bar.baz", foo); // false
                return JSProf.LMC(7791, lang, 'getObject').getObject(JSProf.LRE(7789, name), false, JSProf.LRE(7790, obj)) !== undefined;    // Boolean
            }, 12),
            isString: JSProf.LNF(7796, function (it) {
                // summary:
                //		Return true if it is a String
                // it: anything
                //		Item to test.
                return typeof JSProf.LRE(7793, it) == "string" || JSProf.LRE(7794, it) instanceof JSProf.LRU(7795, typeof String === 'undefined' ? undefined : String);    // Boolean
            }, 12),
            isArray: JSProf.LNF(7801, function (it) {
                // summary:
                //		Return true if it is an Array.
                //		Does not work on Arrays created in other windows.
                // it: anything
                //		Item to test.
                return JSProf.LRE(7797, it) && (JSProf.LRE(7798, it) instanceof JSProf.LRU(7799, typeof Array === 'undefined' ? undefined : Array) || typeof JSProf.LRE(7800, it) == "array");    // Boolean
            }, 12),
            isFunction: JSProf.LNF(7804, function (it) {
                // summary:
                //		Return true if it is a Function
                // it: anything
                //		Item to test.
                return JSProf.LMC(7803, opts, 'call').call(JSProf.LRE(7802, it)) === "[object Function]";
            }, 12),
            isObject: JSProf.LNF(7812, function (it) {
                // summary:
                //		Returns true if it is a JavaScript object (or an Array, a Function
                //		or null)
                // it: anything
                //		Item to test.
                return JSProf.LRE(7805, it) !== undefined && (JSProf.LRE(7806, it) === null || typeof JSProf.LRE(7807, it) == "object" || JSProf.LMC(7809, lang, 'isArray').isArray(JSProf.LRE(7808, it)) || JSProf.LMC(7811, lang, 'isFunction').isFunction(JSProf.LRE(7810, it)));    // Boolean
            }, 12),
            isArrayLike: JSProf.LNF(7824, function (it) {
                // summary:
                //		similar to isArray() but more permissive
                // it: anything
                //		Item to test.
                // returns:
                //		If it walks like a duck and quacks like a duck, return `true`
                // description:
                //		Doesn't strongly test for "arrayness".  Instead, settles for "isn't
                //		a string or number and has a length property". Arguments objects
                //		and DOM collections will return true when passed to
                //		isArrayLike(), but will return false when passed to
                //		isArray().
                return JSProf.LRE(7813, it) && JSProf.LRE(7814, it) !== undefined && !JSProf.LMC(7816, lang, 'isString').isString(JSProf.LRE(7815, it)) && !JSProf.LMC(7818, lang, 'isFunction').isFunction(JSProf.LRE(7817, it)) && !(JSProf.LGD(7819, it, 'tagName').tagName && it.tagName.toLowerCase() == 'form') && (JSProf.LMC(7821, lang, 'isArray').isArray(JSProf.LRE(7820, it)) || JSProf.LFC(7823, isFinite, false)(JSProf.LGD(7822, it, 'length').length));
            }, 12),
            isAlien: JSProf.LNF(7831, function (it) {
                // summary:
                //		Returns true if it is a built-in function or some other kind of
                //		oddball that *should* report as a function but doesn't
                return JSProf.LRE(7825, it) && !JSProf.LMC(7827, lang, 'isFunction').isFunction(JSProf.LRE(7826, it)) && JSProf.LMC(7830, /\{\s*\[native code\]\s*\}/, 'test').test(JSProf.LFC(7829, String, false)(JSProf.LRE(7828, it)));    // Boolean
            }, 12),
            extend: JSProf.LNF(7839, function (ctor, props) {
                // summary:
                //		Adds all properties and methods of props to constructor's
                //		prototype, making them available to all instances created with
                //		constructor.
                // ctor: Object
                //		Target constructor to extend.
                // props: Object
                //		One or more objects to mix into ctor.prototype
                for (var i = 1, l = JSProf.LGD(7832, arguments, 'length').length; JSProf.LRE(7833, i) < JSProf.LRE(7834, l); i++) {
                    JSProf.LMC(7837, lang, '_mixin')._mixin(JSProf.LGD(7835, ctor, 'prototype').prototype, JSProf.LGE(7836, arguments, 'i')[i]);
                }
                return JSProf.LRE(7838, ctor);    // Object
            }, 12),
            _hitchArgs: JSProf.LNF(7854, function (scope, method) {
                var pre = JSProf.LMC(7840, lang, '_toArray')._toArray(arguments, 2);
                var named = JSProf.LMC(7842, lang, 'isString').isString(JSProf.LRE(7841, method));
                return JSProf.LNF(7853, function () {
                    // arrayify arguments
                    var args = JSProf.LMC(7843, lang, '_toArray')._toArray(arguments);
                    // locate our method
                    var f = JSProf.LRE(7844, named) ? JSProf.LGE(7847, JSProf.LRE(7845, scope) || JSProf.LGD(7846, dojo, 'global').global, 'method')[method] : JSProf.LRE(7848, method);
                    // invoke with collected args
                    return JSProf.LRE(7849, f) && JSProf.LMC(7852, f, 'apply').apply(JSProf.LRE(7850, scope) || this, pre.concat(JSProf.LRE(7851, args)));    // mixed
                }, 12);    // Function
            }, 12),
            hitch: JSProf.LNF(7881, function (scope, method) {
                // summary:
                //		Returns a function that will only ever execute in the given scope.
                //		This allows for easy use of object member functions
                //		in callbacks and other places in which the "this" keyword may
                //		otherwise not reference the expected scope.
                //		Any number of default positional arguments may be passed as parameters
                //		beyond "method".
                //		Each of these values will be used to "placehold" (similar to curry)
                //		for the hitched function.
                // scope: Object
                //		The scope to use when method executes. If method is a string,
                //		scope is also the object containing method.
                // method: Function|String...
                //		A function to be hitched to scope, or the name of the method in
                //		scope to be hitched.
                // example:
                //	|	lang.hitch(foo, "bar")();
                //		runs foo.bar() in the scope of foo
                // example:
                //	|	lang.hitch(foo, myFunction);
                //		returns a function that runs myFunction in the scope of foo
                // example:
                //		Expansion on the default positional arguments passed along from
                //		hitch. Passed args are mixed first, additional args after.
                //	|	var foo = { bar: function(a, b, c){ console.log(a, b, c); } };
                //	|	var fn = lang.hitch(foo, "bar", 1, 2);
                //	|	fn(3); // logs "1, 2, 3"
                // example:
                //	|	var foo = { bar: 2 };
                //	|	lang.hitch(foo, function(){ this.bar = 10; })();
                //		execute an anonymous function in scope of foo
                if (JSProf.LGD(7855, arguments, 'length').length > 2) {
                    return JSProf.LMC(7857, lang._hitchArgs, 'apply').apply(JSProf.LRE(7856, dojo), arguments);    // Function
                }
                if (!JSProf.LRE(7858, method)) {
                    method = JSProf.LWR(7860, method, JSProf.LRE(7859, scope));
                    scope = null;
                }
                if (JSProf.LMC(7862, lang, 'isString').isString(JSProf.LRE(7861, method))) {
                    scope = JSProf.LWR(7865, scope, JSProf.LRE(7863, scope) || JSProf.LGD(7864, dojo, 'global').global);
                    if (!JSProf.LGE(7866, scope, 'method')[method]) {
                        throw JSProf.LMC(7870, JSProf.LNE(7869, [
                            'lang.hitch: scope["',
                            JSProf.LRE(7867, method),
                            '"] is null (scope="',
                            JSProf.LRE(7868, scope),
                            '")'
                        ], 10), 'join').join('');
                    }
                    return JSProf.LNF(7874, function () {
                        return JSProf.LMC(7873, scope[method], 'apply').apply(JSProf.LRE(7871, scope), arguments || JSProf.LNE(7872, [], 10));
                    }, 12);    // Function
                }
                return !JSProf.LRE(7875, scope) ? JSProf.LRE(7876, method) : JSProf.LNF(7880, function () {
                    return JSProf.LMC(7879, method, 'apply').apply(JSProf.LRE(7877, scope), arguments || JSProf.LNE(7878, [], 10));
                }, 12);    // Function
            }, 12),
            delegate: JSProf.LFC(7894, JSProf.LNF(7893, function () {
                JSProf.LFD(7892, TMP);
                // boodman/crockford delegation w/ cornford optimization
                function TMP() {
                }
                return JSProf.LNF(7891, function (obj, props) {
                    JSProf.LPD(7883, TMP, 'prototype').prototype = JSProf.LRSP(7883, JSProf.LRE(7882, obj));
                    var tmp = JSProf.LNE(7885, new (JSProf.LFC(7884, TMP, true))(), 'TMP');
                    TMP.prototype = null;
                    if (JSProf.LRE(7886, props)) {
                        JSProf.LMC(7889, lang, '_mixin')._mixin(JSProf.LRE(7887, tmp), JSProf.LRE(7888, props));
                    }
                    return JSProf.LRE(7890, tmp);    // Object
                }, 12);
            }, 12), false)(),
            _toArray: JSProf.LFC(7895, has, false)("ie") ? JSProf.LFC(7911, JSProf.LNF(7910, function () {
                JSProf.LFD(7909, slow);
                function slow(obj, offset, startWith) {
                    var arr = JSProf.LRE(7896, startWith) || JSProf.LNE(7897, [], 10);
                    for (var x = JSProf.LRE(7898, offset) || 0; JSProf.LRE(7899, x) < JSProf.LGD(7900, obj, 'length').length; x++) {
                        JSProf.LMC(7902, arr, 'push').push(JSProf.LGE(7901, obj, 'x')[x]);
                    }
                    return JSProf.LRE(7903, arr);
                }
                return JSProf.LNF(7908, function (obj) {
                    return JSProf.LMC(7907, JSProf.LGD(7904, obj, 'item').item ? JSProf.LRE(7905, slow) : JSProf.LRE(7906, efficient), 'apply').apply(this, arguments);
                }, 12);
            }, 12), false)() : efficient,
            partial: JSProf.LNF(7916, function (method) {
                // summary:
                //		similar to hitch() except that the scope object is left to be
                //		whatever the execution context eventually becomes.
                // description:
                //		Calling lang.partial is the functional equivalent of calling:
                //		|	lang.hitch(null, funcName, ...);
                // method:
                //		The function to "wrap"
                var arr = JSProf.LNE(7912, [null], 10);
                return JSProf.LMC(7915, lang.hitch, 'apply').apply(JSProf.LRE(7913, dojo), arr.concat(JSProf.LMC(7914, lang, '_toArray')._toArray(arguments)));    // Function
            }, 12),
            clone: JSProf.LNF(7958, function (src) {
                // summary:
                //		Clones objects (including DOM nodes) and all children.
                //		Warning: do not clone cyclic structures.
                // src:
                //		The object to clone
                if (!JSProf.LRE(7917, src) || typeof JSProf.LRE(7918, src) != "object" || JSProf.LMC(7920, lang, 'isFunction').isFunction(JSProf.LRE(7919, src))) {
                    // null, undefined, any non-object, or function
                    return JSProf.LRE(7921, src);    // anything
                }
                if (JSProf.LGD(7922, src, 'nodeType').nodeType && "cloneNode" in JSProf.LRE(7923, src)) {
                    // DOM Node
                    return JSProf.LMC(7924, src, 'cloneNode').cloneNode(true);    // Node
                }
                if (JSProf.LRE(7925, src) instanceof JSProf.LRU(7926, typeof Date === 'undefined' ? undefined : Date)) {
                    // Date
                    return JSProf.LNE(7929, new (JSProf.LFC(7928, Date, true))(JSProf.LMC(7927, src, 'getTime').getTime()), 'Date');    // Date
                }
                if (JSProf.LRE(7930, src) instanceof JSProf.LRU(7931, typeof RegExp === 'undefined' ? undefined : RegExp)) {
                    // RegExp
                    return JSProf.LNE(7934, new (JSProf.LFC(7933, RegExp, true))(JSProf.LRE(7932, src)), 'RegExp');    // RegExp
                }
                var r, i, l;
                if (JSProf.LMC(7936, lang, 'isArray').isArray(JSProf.LRE(7935, src))) {
                    // array
                    r = JSProf.LWR(7938, r, JSProf.LNE(7937, [], 10));
                    for (i = JSProf.LWR(7939, i, 0), l = JSProf.LWR(7941, l, JSProf.LGD(7940, src, 'length').length); JSProf.LRE(7942, i) < JSProf.LRE(7943, l); ++i) {
                        if (JSProf.LRE(7944, i) in JSProf.LRE(7945, src)) {
                            JSProf.LMC(7948, r, 'push').push(JSProf.LMC(7947, lang, 'clone').clone(JSProf.LGE(7946, src, 'i')[i]));
                        }
                    }    // we don't clone functions for performance reasons
                         //		}else if(d.isFunction(src)){
                         //			// function
                         //			r = function(){ return src.apply(this, arguments); };
                } else {
                    // generic objects
                    r = JSProf.LWR(7953, r, JSProf.LGD(7949, src, 'constructor').constructor ? JSProf.LNE(7951, new (JSProf.LMC(7950, src, 'constructor')).constructor(), 40) : JSProf.LNE(7952, {}, 11));
                }
                return JSProf.LMC(7957, lang, '_mixin')._mixin(JSProf.LRE(7954, r), JSProf.LRE(7955, src), JSProf.LGD(7956, lang, 'clone').clone);
            }, 12),
            trim: String.prototype.trim ? JSProf.LNF(7960, function (str) {
                return JSProf.LMC(7959, str, 'trim').trim();
            }, 12) : JSProf.LNF(7963, function (str) {
                return JSProf.LMC(7962, JSProf.LMC(7961, str, 'replace').replace(/^\s\s*/, ''), 'replace').replace(/\s\s*$/, '');
            }, 12),
            replace: JSProf.LNF(7974, function (tmpl, map, pattern) {
                // summary:
                //		Performs parameterized substitutions on a string. Throws an
                //		exception if any parameter is unmatched.
                // tmpl: String
                //		String to be used as a template.
                // map: Object|Function
                //		If an object, it is used as a dictionary to look up substitutions.
                //		If a function, it is called for every substitution with following parameters:
                //		a whole match, a name, an offset, and the whole template
                //		string (see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/String/replace
                //		for more details).
                // pattern: RegEx?
                //		Optional regular expression objects that overrides the default pattern.
                //		Must be global and match one item. The default is: /\{([^\}]+)\}/g,
                //		which matches patterns like that: "{xxx}", where "xxx" is any sequence
                //		of characters, which doesn't include "}".
                // returns: String
                //		Returns the substituted string.
                // example:
                //	|	// uses a dictionary for substitutions:
                //	|	lang.replace("Hello, {name.first} {name.last} AKA {nick}!",
                //	|		{
                //	|			nick: "Bob",
                //	|			name: {
                //	|				first:	"Robert",
                //	|				middle: "X",
                //	|				last:		"Cringely"
                //	|			}
                //	|		});
                //	|	// returns: Hello, Robert Cringely AKA Bob!
                // example:
                //	|	// uses an array for substitutions:
                //	|	lang.replace("Hello, {0} {2}!",
                //	|		["Robert", "X", "Cringely"]);
                //	|	// returns: Hello, Robert Cringely!
                // example:
                //	|	// uses a function for substitutions:
                //	|	function sum(a){
                //	|		var t = 0;
                //	|		arrayforEach(a, function(x){ t += x; });
                //	|		return t;
                //	|	}
                //	|	lang.replace(
                //	|		"{count} payments averaging {avg} USD per payment.",
                //	|		lang.hitch(
                //	|			{ payments: [11, 16, 12] },
                //	|			function(_, key){
                //	|				switch(key){
                //	|					case "count": return this.payments.length;
                //	|					case "min":		return Math.min.apply(Math, this.payments);
                //	|					case "max":		return Math.max.apply(Math, this.payments);
                //	|					case "sum":		return sum(this.payments);
                //	|					case "avg":		return sum(this.payments) / this.payments.length;
                //	|				}
                //	|			}
                //	|		)
                //	|	);
                //	|	// prints: 3 payments averaging 13 USD per payment.
                // example:
                //	|	// uses an alternative PHP-like pattern for substitutions:
                //	|	lang.replace("Hello, ${0} ${2}!",
                //	|		["Robert", "X", "Cringely"], /\$\{([^\}]+)\}/g);
                //	|	// returns: Hello, Robert Cringely!
                return JSProf.LMC(7973, tmpl, 'replace').replace(JSProf.LRE(7964, pattern) || JSProf.LRE(7965, _pattern), JSProf.LMC(7967, lang, 'isFunction').isFunction(JSProf.LRE(7966, map)) ? JSProf.LRE(7968, map) : JSProf.LNF(7972, function (_, k) {
                    return JSProf.LMC(7971, lang, 'getObject').getObject(JSProf.LRE(7969, k), false, JSProf.LRE(7970, map));
                }, 12));
            }, 12)
        }, 11);
    JSProf.LFC(7976, has, false)("extend-dojo") && JSProf.LMC(7979, lang, 'mixin').mixin(JSProf.LRE(7977, dojo), JSProf.LRE(7978, lang));
    return JSProf.LRE(7980, lang);
}, 12));