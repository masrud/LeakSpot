JSProf.LFC(8847, define, false)(JSProf.LNE(8553, [
    "./kernel",
    "../has",
    "../sniff"
], 10), JSProf.LNF(8846, function (dojo, has) {
    // module:
    //		dojo/_base/lang
    JSProf.LMC(8556, has, 'add').add("bug-for-in-skips-shadowed", JSProf.LNF(8555, function () {
        // if true, the for-in iterator skips object properties that exist in Object's prototype (IE 6 - ?)
        for (var i in JSProf.LNE(8554, { toString: 1 }, 11)) {
            return 0;
        }
        return 1;
    }, 12));
    // Helper methods
    var _extraNames = JSProf.LFC(8557, has, false)("bug-for-in-skips-shadowed") ? "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split(".") : JSProf.LNE(8558, [], 10), _extraLen = JSProf.LGD(8559, _extraNames, 'length').length, getProp = JSProf.LNF(8579, function (parts, create, context) {
            if (!JSProf.LRE(8560, context)) {
                if (JSProf.LGE(8561, parts, 0)[0] && JSProf.LGE(8562, dojo.scopeMap, JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a = parts[0])[JSProf.TMPS.tc4131ad8209617903c7afb081fd76e1268fd567a]) {
                    // Voodoo code from the old days where "dojo" or "dijit" maps to some special object
                    // rather than just window.dojo
                    context = JSProf.LWR(8565, context, JSProf.LGE(8564, dojo.scopeMap[JSProf.LMC(8563, parts, 'shift').shift()], 1)[1]);
                } else {
                    context = JSProf.LWR(8567, context, JSProf.LGD(8566, dojo, 'global').global);
                }
            }
            try {
                for (var i = 0; JSProf.LRE(8568, i) < JSProf.LGD(8569, parts, 'length').length; i++) {
                    var p = JSProf.LGE(8570, parts, 'i')[i];
                    if (!(JSProf.LRE(8571, p) in JSProf.LRE(8572, context))) {
                        if (JSProf.LRE(8573, create)) {
                            JSProf.LPE(8575, context, 'p')[p] = JSProf.LRPE(8575, JSProf.LNE(8574, {}, 11));
                        } else {
                            return;    // return undefined
                        }
                    }
                    context = JSProf.LWR(8577, context, JSProf.LGE(8576, context, 'p')[p]);
                }
                return JSProf.LRE(8578, context);    // mixed
            } catch (e) {
            }
        }, 12), opts = JSProf.LGD(8580, Object.prototype, 'toString').toString, efficient = JSProf.LNF(8586, function (obj, offset, startWith) {
            return (JSProf.LRE(8581, startWith) || JSProf.LNE(8582, [], 10)).concat(JSProf.LMC(8585, Array.prototype.slice, 'call').call(JSProf.LRE(8583, obj), JSProf.LRE(8584, offset) || 0));
        }, 12), _pattern = /\{([^\}]+)\}/g;
    // Module export
    var lang = JSProf.LNE(8840, {
            _extraNames: _extraNames,
            _mixin: JSProf.LNF(8627, function (dest, source, copyFunc) {
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
                var name, s, i, empty = JSProf.LNE(8587, {}, 11);
                for (name in JSProf.LRE(8588, source)) {
                    // the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
                    // inherited from Object.prototype.	 For example, if dest has a custom toString() method,
                    // don't overwrite it with the toString() method that source inherited from Object.prototype
                    s = JSProf.LWR(8590, s, JSProf.LGE(8589, source, 'name')[name]);
                    if (!(JSProf.LRE(8591, name) in JSProf.LRE(8592, dest)) || JSProf.LGE(8593, dest, 'name')[name] !== JSProf.LRE(8594, s) && (!(JSProf.LRE(8595, name) in JSProf.LRE(8596, empty)) || JSProf.LGE(8597, empty, 'name')[name] !== JSProf.LRE(8598, s))) {
                        JSProf.LPE(8603, dest, 'name')[name] = JSProf.LRPE(8603, JSProf.LRE(8599, copyFunc) ? JSProf.LFC(8601, copyFunc, false)(JSProf.LRE(8600, s)) : JSProf.LRE(8602, s));
                    }
                }
                if (JSProf.LFC(8604, has, false)("bug-for-in-skips-shadowed")) {
                    if (JSProf.LRE(8605, source)) {
                        for (i = JSProf.LWR(8606, i, 0); JSProf.LRE(8607, i) < JSProf.LRE(8608, _extraLen); ++i) {
                            name = JSProf.LWR(8610, name, JSProf.LGE(8609, _extraNames, 'i')[i]);
                            s = JSProf.LWR(8612, s, JSProf.LGE(8611, source, 'name')[name]);
                            if (!(JSProf.LRE(8613, name) in JSProf.LRE(8614, dest)) || JSProf.LGE(8615, dest, 'name')[name] !== JSProf.LRE(8616, s) && (!(JSProf.LRE(8617, name) in JSProf.LRE(8618, empty)) || JSProf.LGE(8619, empty, 'name')[name] !== JSProf.LRE(8620, s))) {
                                JSProf.LPE(8625, dest, 'name')[name] = JSProf.LRPE(8625, JSProf.LRE(8621, copyFunc) ? JSProf.LFC(8623, copyFunc, false)(JSProf.LRE(8622, s)) : JSProf.LRE(8624, s));
                            }
                        }
                    }
                }
                return JSProf.LRE(8626, dest);    // Object
            }, 12),
            mixin: JSProf.LNF(8638, function (dest, sources) {
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
                if (!JSProf.LRE(8628, dest)) {
                    dest = JSProf.LWR(8630, dest, JSProf.LNE(8629, {}, 11));
                }
                for (var i = 1, l = JSProf.LGD(8631, arguments, 'length').length; JSProf.LRE(8632, i) < JSProf.LRE(8633, l); i++) {
                    JSProf.LMC(8636, lang, '_mixin')._mixin(JSProf.LRE(8634, dest), JSProf.LGE(8635, arguments, 'i')[i]);
                }
                return JSProf.LRE(8637, dest);    // Object
            }, 12),
            setObject: JSProf.LNF(8647, function (name, value, context) {
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
                var parts = name.split("."), p = JSProf.LMC(8639, parts, 'pop').pop(), obj = JSProf.LFC(8642, getProp, false)(JSProf.LRE(8640, parts), true, JSProf.LRE(8641, context));
                return JSProf.LRE(8643, obj) && JSProf.LRE(8644, p) ? JSProf.LPE(8646, obj, 'p')[p] = JSProf.LRPE(8646, JSProf.LRE(8645, value)) : undefined;    // Object
            }, 12),
            getObject: JSProf.LNF(8653, function (name, create, context) {
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
                return JSProf.LFC(8652, getProp, false)(JSProf.LRE(8648, name) ? name.split(".") : JSProf.LNE(8649, [], 10), JSProf.LRE(8650, create), JSProf.LRE(8651, context));    // Object
            }, 12),
            exists: JSProf.LNF(8657, function (name, obj) {
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
                return JSProf.LMC(8656, lang, 'getObject').getObject(JSProf.LRE(8654, name), false, JSProf.LRE(8655, obj)) !== undefined;    // Boolean
            }, 12),
            isString: JSProf.LNF(8661, function (it) {
                // summary:
                //		Return true if it is a String
                // it: anything
                //		Item to test.
                return typeof JSProf.LRE(8658, it) == "string" || JSProf.LRE(8659, it) instanceof JSProf.LRU(8660, typeof String === 'undefined' ? undefined : String);    // Boolean
            }, 12),
            isArray: JSProf.LNF(8666, function (it) {
                // summary:
                //		Return true if it is an Array.
                //		Does not work on Arrays created in other windows.
                // it: anything
                //		Item to test.
                return JSProf.LRE(8662, it) && (JSProf.LRE(8663, it) instanceof JSProf.LRU(8664, typeof Array === 'undefined' ? undefined : Array) || typeof JSProf.LRE(8665, it) == "array");    // Boolean
            }, 12),
            isFunction: JSProf.LNF(8669, function (it) {
                // summary:
                //		Return true if it is a Function
                // it: anything
                //		Item to test.
                return JSProf.LMC(8668, opts, 'call').call(JSProf.LRE(8667, it)) === "[object Function]";
            }, 12),
            isObject: JSProf.LNF(8677, function (it) {
                // summary:
                //		Returns true if it is a JavaScript object (or an Array, a Function
                //		or null)
                // it: anything
                //		Item to test.
                return JSProf.LRE(8670, it) !== undefined && (JSProf.LRE(8671, it) === null || typeof JSProf.LRE(8672, it) == "object" || JSProf.LMC(8674, lang, 'isArray').isArray(JSProf.LRE(8673, it)) || JSProf.LMC(8676, lang, 'isFunction').isFunction(JSProf.LRE(8675, it)));    // Boolean
            }, 12),
            isArrayLike: JSProf.LNF(8689, function (it) {
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
                return JSProf.LRE(8678, it) && JSProf.LRE(8679, it) !== undefined && !JSProf.LMC(8681, lang, 'isString').isString(JSProf.LRE(8680, it)) && !JSProf.LMC(8683, lang, 'isFunction').isFunction(JSProf.LRE(8682, it)) && !(JSProf.LGD(8684, it, 'tagName').tagName && it.tagName.toLowerCase() == 'form') && (JSProf.LMC(8686, lang, 'isArray').isArray(JSProf.LRE(8685, it)) || JSProf.LFC(8688, isFinite, false)(JSProf.LGD(8687, it, 'length').length));
            }, 12),
            isAlien: JSProf.LNF(8696, function (it) {
                // summary:
                //		Returns true if it is a built-in function or some other kind of
                //		oddball that *should* report as a function but doesn't
                return JSProf.LRE(8690, it) && !JSProf.LMC(8692, lang, 'isFunction').isFunction(JSProf.LRE(8691, it)) && JSProf.LMC(8695, /\{\s*\[native code\]\s*\}/, 'test').test(JSProf.LFC(8694, String, false)(JSProf.LRE(8693, it)));    // Boolean
            }, 12),
            extend: JSProf.LNF(8704, function (ctor, props) {
                // summary:
                //		Adds all properties and methods of props to constructor's
                //		prototype, making them available to all instances created with
                //		constructor.
                // ctor: Object
                //		Target constructor to extend.
                // props: Object
                //		One or more objects to mix into ctor.prototype
                for (var i = 1, l = JSProf.LGD(8697, arguments, 'length').length; JSProf.LRE(8698, i) < JSProf.LRE(8699, l); i++) {
                    JSProf.LMC(8702, lang, '_mixin')._mixin(JSProf.LGD(8700, ctor, 'prototype').prototype, JSProf.LGE(8701, arguments, 'i')[i]);
                }
                return JSProf.LRE(8703, ctor);    // Object
            }, 12),
            _hitchArgs: JSProf.LNF(8719, function (scope, method) {
                var pre = JSProf.LMC(8705, lang, '_toArray')._toArray(arguments, 2);
                var named = JSProf.LMC(8707, lang, 'isString').isString(JSProf.LRE(8706, method));
                return JSProf.LNF(8718, function () {
                    // arrayify arguments
                    var args = JSProf.LMC(8708, lang, '_toArray')._toArray(arguments);
                    // locate our method
                    var f = JSProf.LRE(8709, named) ? JSProf.LGE(8712, JSProf.LRE(8710, scope) || JSProf.LGD(8711, dojo, 'global').global, 'method')[method] : JSProf.LRE(8713, method);
                    // invoke with collected args
                    return JSProf.LRE(8714, f) && JSProf.LMC(8717, f, 'apply').apply(JSProf.LRE(8715, scope) || this, pre.concat(JSProf.LRE(8716, args)));    // mixed
                }, 12);    // Function
            }, 12),
            hitch: JSProf.LNF(8746, function (scope, method) {
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
                if (JSProf.LGD(8720, arguments, 'length').length > 2) {
                    return JSProf.LMC(8722, lang._hitchArgs, 'apply').apply(JSProf.LRE(8721, dojo), arguments);    // Function
                }
                if (!JSProf.LRE(8723, method)) {
                    method = JSProf.LWR(8725, method, JSProf.LRE(8724, scope));
                    scope = null;
                }
                if (JSProf.LMC(8727, lang, 'isString').isString(JSProf.LRE(8726, method))) {
                    scope = JSProf.LWR(8730, scope, JSProf.LRE(8728, scope) || JSProf.LGD(8729, dojo, 'global').global);
                    if (!JSProf.LGE(8731, scope, 'method')[method]) {
                        throw JSProf.LMC(8735, JSProf.LNE(8734, [
                            'lang.hitch: scope["',
                            JSProf.LRE(8732, method),
                            '"] is null (scope="',
                            JSProf.LRE(8733, scope),
                            '")'
                        ], 10), 'join').join('');
                    }
                    return JSProf.LNF(8739, function () {
                        return JSProf.LMC(8738, scope[method], 'apply').apply(JSProf.LRE(8736, scope), arguments || JSProf.LNE(8737, [], 10));
                    }, 12);    // Function
                }
                return !JSProf.LRE(8740, scope) ? JSProf.LRE(8741, method) : JSProf.LNF(8745, function () {
                    return JSProf.LMC(8744, method, 'apply').apply(JSProf.LRE(8742, scope), arguments || JSProf.LNE(8743, [], 10));
                }, 12);    // Function
            }, 12),
            delegate: JSProf.LFC(8759, JSProf.LNF(8758, function () {
                JSProf.LFD(8757, TMP);
                // boodman/crockford delegation w/ cornford optimization
                function TMP() {
                }
                return JSProf.LNF(8756, function (obj, props) {
                    JSProf.LPD(8748, TMP, 'prototype').prototype = JSProf.LRSP(8748, JSProf.LRE(8747, obj));
                    var tmp = JSProf.LNE(8750, new (JSProf.LFC(8749, TMP, true))(), 'TMP');
                    TMP.prototype = null;
                    if (JSProf.LRE(8751, props)) {
                        JSProf.LMC(8754, lang, '_mixin')._mixin(JSProf.LRE(8752, tmp), JSProf.LRE(8753, props));
                    }
                    return JSProf.LRE(8755, tmp);    // Object
                }, 12);
            }, 12), false)(),
            _toArray: JSProf.LFC(8760, has, false)("ie") ? JSProf.LFC(8776, JSProf.LNF(8775, function () {
                JSProf.LFD(8774, slow);
                function slow(obj, offset, startWith) {
                    var arr = JSProf.LRE(8761, startWith) || JSProf.LNE(8762, [], 10);
                    for (var x = JSProf.LRE(8763, offset) || 0; JSProf.LRE(8764, x) < JSProf.LGD(8765, obj, 'length').length; x++) {
                        JSProf.LMC(8767, arr, 'push').push(JSProf.LGE(8766, obj, 'x')[x]);
                    }
                    return JSProf.LRE(8768, arr);
                }
                return JSProf.LNF(8773, function (obj) {
                    return JSProf.LMC(8772, JSProf.LGD(8769, obj, 'item').item ? JSProf.LRE(8770, slow) : JSProf.LRE(8771, efficient), 'apply').apply(this, arguments);
                }, 12);
            }, 12), false)() : efficient,
            partial: JSProf.LNF(8781, function (method) {
                // summary:
                //		similar to hitch() except that the scope object is left to be
                //		whatever the execution context eventually becomes.
                // description:
                //		Calling lang.partial is the functional equivalent of calling:
                //		|	lang.hitch(null, funcName, ...);
                // method:
                //		The function to "wrap"
                var arr = JSProf.LNE(8777, [null], 10);
                return JSProf.LMC(8780, lang.hitch, 'apply').apply(JSProf.LRE(8778, dojo), arr.concat(JSProf.LMC(8779, lang, '_toArray')._toArray(arguments)));    // Function
            }, 12),
            clone: JSProf.LNF(8823, function (src) {
                // summary:
                //		Clones objects (including DOM nodes) and all children.
                //		Warning: do not clone cyclic structures.
                // src:
                //		The object to clone
                if (!JSProf.LRE(8782, src) || typeof JSProf.LRE(8783, src) != "object" || JSProf.LMC(8785, lang, 'isFunction').isFunction(JSProf.LRE(8784, src))) {
                    // null, undefined, any non-object, or function
                    return JSProf.LRE(8786, src);    // anything
                }
                if (JSProf.LGD(8787, src, 'nodeType').nodeType && "cloneNode" in JSProf.LRE(8788, src)) {
                    // DOM Node
                    return JSProf.LMC(8789, src, 'cloneNode').cloneNode(true);    // Node
                }
                if (JSProf.LRE(8790, src) instanceof JSProf.LRU(8791, typeof Date === 'undefined' ? undefined : Date)) {
                    // Date
                    return JSProf.LNE(8794, new (JSProf.LFC(8793, Date, true))(JSProf.LMC(8792, src, 'getTime').getTime()), 'Date');    // Date
                }
                if (JSProf.LRE(8795, src) instanceof JSProf.LRU(8796, typeof RegExp === 'undefined' ? undefined : RegExp)) {
                    // RegExp
                    return JSProf.LNE(8799, new (JSProf.LFC(8798, RegExp, true))(JSProf.LRE(8797, src)), 'RegExp');    // RegExp
                }
                var r, i, l;
                if (JSProf.LMC(8801, lang, 'isArray').isArray(JSProf.LRE(8800, src))) {
                    // array
                    r = JSProf.LWR(8803, r, JSProf.LNE(8802, [], 10));
                    for (i = JSProf.LWR(8804, i, 0), l = JSProf.LWR(8806, l, JSProf.LGD(8805, src, 'length').length); JSProf.LRE(8807, i) < JSProf.LRE(8808, l); ++i) {
                        if (JSProf.LRE(8809, i) in JSProf.LRE(8810, src)) {
                            JSProf.LMC(8813, r, 'push').push(JSProf.LMC(8812, lang, 'clone').clone(JSProf.LGE(8811, src, 'i')[i]));
                        }
                    }    // we don't clone functions for performance reasons
                         //		}else if(d.isFunction(src)){
                         //			// function
                         //			r = function(){ return src.apply(this, arguments); };
                } else {
                    // generic objects
                    r = JSProf.LWR(8818, r, JSProf.LGD(8814, src, 'constructor').constructor ? JSProf.LNE(8816, new (JSProf.LMC(8815, src, 'constructor')).constructor(), 40) : JSProf.LNE(8817, {}, 11));
                }
                return JSProf.LMC(8822, lang, '_mixin')._mixin(JSProf.LRE(8819, r), JSProf.LRE(8820, src), JSProf.LGD(8821, lang, 'clone').clone);
            }, 12),
            trim: String.prototype.trim ? JSProf.LNF(8825, function (str) {
                return JSProf.LMC(8824, str, 'trim').trim();
            }, 12) : JSProf.LNF(8828, function (str) {
                return JSProf.LMC(8827, JSProf.LMC(8826, str, 'replace').replace(/^\s\s*/, ''), 'replace').replace(/\s\s*$/, '');
            }, 12),
            replace: JSProf.LNF(8839, function (tmpl, map, pattern) {
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
                return JSProf.LMC(8838, tmpl, 'replace').replace(JSProf.LRE(8829, pattern) || JSProf.LRE(8830, _pattern), JSProf.LMC(8832, lang, 'isFunction').isFunction(JSProf.LRE(8831, map)) ? JSProf.LRE(8833, map) : JSProf.LNF(8837, function (_, k) {
                    return JSProf.LMC(8836, lang, 'getObject').getObject(JSProf.LRE(8834, k), false, JSProf.LRE(8835, map));
                }, 12));
            }, 12)
        }, 11);
    JSProf.LFC(8841, has, false)("extend-dojo") && JSProf.LMC(8844, lang, 'mixin').mixin(JSProf.LRE(8842, dojo), JSProf.LRE(8843, lang));
    return JSProf.LRE(8845, lang);
}, 12));