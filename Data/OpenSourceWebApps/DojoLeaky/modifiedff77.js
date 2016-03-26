JSProf.LFC(26606, define, false)(JSProf.LNE(26492, [
    "./_base/declare",
    "./_base/lang",
    "./_base/array",
    "./when"
], 10), JSProf.LNF(26605, function (declare, lang, array, when) {
    // module:
    //		dojo/Stateful
    return JSProf.LFC(26604, declare, false)("dojo.Stateful", null, JSProf.LNE(26603, {
        _attrPairNames: JSProf.LNE(26493, {}, 11),
        _getAttrNames: JSProf.LNF(26501, function (name) {
            // summary:
            //		Helper function for get() and set().
            //		Caches attribute name values so we don't do the string ops every time.
            // tags:
            //		private
            var apn = JSProf.LGD(26494, this, '_attrPairNames')._attrPairNames;
            if (JSProf.LGE(26495, apn, 'name')[name]) {
                return JSProf.LGE(26496, apn, 'name')[name];
            }
            return JSProf.LPE(26500, apn, 'name')[name] = JSProf.LRPE(26500, JSProf.LNE(26499, {
                s: "_" + JSProf.LRE(26497, name) + "Setter",
                g: "_" + JSProf.LRE(26498, name) + "Getter"
            }, 11));
        }, 12),
        postscript: JSProf.LNF(26505, function (params) {
            // Automatic setting of params during construction
            if (JSProf.LRE(26502, params)) {
                JSProf.LMC(26504, this, 'set').set(JSProf.LRE(26503, params));
            }
        }, 12),
        _get: JSProf.LNF(26509, function (name, names) {
            // summary:
            //		Private function that does a get based off a hash of names
            // names:
            //		Hash of names of custom attributes
            return typeof JSProf.LGE(26506, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] === "function" ? JSProf.LMC(26507, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g, 1)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd]() : JSProf.LGE(26508, this, 'name')[name];
        }, 12),
        get: JSProf.LNF(26514, function (name) {
            // summary:
            //		Get a property on a Stateful instance.
            // name:
            //		The property to get.
            // returns:
            //		The property value on this Stateful instance.
            // description:
            //		Get a named property on a Stateful object. The property may
            //		potentially be retrieved via a getter method in subclasses. In the base class
            //		this just retrieves the object's property.
            // example:
            //	|	require(["dojo/Stateful", function(Stateful) {
            //	|		var stateful = new Stateful({foo: 3});
            //	|		stateful.get("foo") // returns 3
            //	|		stateful.foo // returns 3
            //	|	});
            return JSProf.LMC(26513, this, '_get')._get(JSProf.LRE(26510, name), JSProf.LMC(26512, this, '_getAttrNames')._getAttrNames(JSProf.LRE(26511, name)));    //Any
        }, 12),
        set: JSProf.LNF(26543, function (name, value) {
            // summary:
            //		Set a property on a Stateful instance
            // name:
            //		The property to set.
            // value:
            //		The value to set in the property.
            // returns:
            //		The function returns this dojo.Stateful instance.
            // description:
            //		Sets named properties on a stateful object and notifies any watchers of
            //		the property. A programmatic setter may be defined in subclasses.
            // example:
            //	|	require(["dojo/Stateful", function(Stateful) {
            //	|		var stateful = new Stateful();
            //	|		stateful.watch(function(name, oldValue, value){
            //	|			// this will be called on the set below
            //	|		}
            //	|		stateful.set(foo, 5);
            //	set() may also be called with a hash of name/value pairs, ex:
            //	|		stateful.set({
            //	|			foo: "Howdy",
            //	|			bar: 3
            //	|		});
            //	|	});
            //	This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
            // If an object is used, iterate through object
            if (typeof JSProf.LRE(26515, name) === "object") {
                for (var x in JSProf.LRE(26516, name)) {
                    if (JSProf.LMC(26518, name, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(26517, x)) && JSProf.LRE(26519, x) != "_watchCallbacks") {
                        JSProf.LMC(26522, this, 'set').set(JSProf.LRE(26520, x), JSProf.LGE(26521, name, 'x')[x]);
                    }
                }
                return this;
            }
            var names = JSProf.LMC(26524, this, '_getAttrNames')._getAttrNames(JSProf.LRE(26523, name)), oldValue = JSProf.LMC(26527, this, '_get')._get(JSProf.LRE(26525, name), JSProf.LRE(26526, names)), setter = JSProf.LGE(26528, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.s)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], result;
            if (typeof JSProf.LRE(26529, setter) === "function") {
                // use the explicit setter
                result = JSProf.LWR(26532, result, JSProf.LMC(26531, setter, 'apply').apply(this, JSProf.LMC(26530, Array.prototype.slice, 'call').call(arguments, 1)));
            } else {
                // no setter so set attribute directly
                JSProf.LPE(26534, this, 'name')[name] = JSProf.LRPE(26534, JSProf.LRE(26533, value));
            }
            if (JSProf.LGD(26535, this, '_watchCallbacks')._watchCallbacks) {
                var self = this;
                // If setter returned a promise, wait for it to complete, otherwise call watches immediately
                JSProf.LFC(26542, when, false)(JSProf.LRE(26536, result), JSProf.LNF(26541, function () {
                    JSProf.LMC(26540, self, '_watchCallbacks')._watchCallbacks(JSProf.LRE(26537, name), JSProf.LRE(26538, oldValue), JSProf.LRE(26539, value));
                }, 12));
            }
            return this;    // dojo/Stateful
        }, 12),
        _changeAttrValue: JSProf.LNF(26553, function (name, value) {
            // summary:
            //		Internal helper for directly changing an attribute value.
            //
            // name: String
            //		The property to set.
            // value: Mixed
            //		The value to set in the property.
            //
            // description:
            //		Directly change the value of an attribute on an object, bypassing any 
            //		accessor setter.  Also handles the calling of watch and emitting events. 
            //		It is designed to be used by descendant class when there are two values 
            //		of attributes that are linked, but calling .set() is not appropriate.
            var oldValue = JSProf.LMC(26545, this, 'get').get(JSProf.LRE(26544, name));
            JSProf.LPE(26547, this, 'name')[name] = JSProf.LRPE(26547, JSProf.LRE(26546, value));
            if (JSProf.LGD(26548, this, '_watchCallbacks')._watchCallbacks) {
                JSProf.LMC(26552, this, '_watchCallbacks')._watchCallbacks(JSProf.LRE(26549, name), JSProf.LRE(26550, oldValue), JSProf.LRE(26551, value));
            }
            return this;    // dojo/Stateful
        }, 12),
        watch: JSProf.LNF(26602, function (name, callback) {
            // summary:
            //		Watches a property for changes
            // name:
            //		Indicates the property to watch. This is optional (the callback may be the
            //		only parameter), and if omitted, all the properties will be watched
            // returns:
            //		An object handle for the watch. The unwatch method of this object
            //		can be used to discontinue watching this property:
            //		|	var watchHandle = obj.watch("foo", callback);
            //		|	watchHandle.unwatch(); // callback won't be called now
            // callback:
            //		The function to execute when the property changes. This will be called after
            //		the property has been changed. The callback will be called with the |this|
            //		set to the instance, the first argument as the name of the property, the
            //		second argument as the old value and the third argument as the new value.
            var callbacks = JSProf.LGD(26554, this, '_watchCallbacks')._watchCallbacks;
            if (!JSProf.LRE(26555, callbacks)) {
                var self = this;
                callbacks = JSProf.LWR(26576, callbacks, JSProf.LPD(26575, this, '_watchCallbacks')._watchCallbacks = JSProf.LRSP(26575, JSProf.LNF(26574, function (name, oldValue, value, ignoreCatchall) {
                    var notify = JSProf.LNF(26567, function (propertyCallbacks) {
                            if (JSProf.LRE(26556, propertyCallbacks)) {
                                propertyCallbacks = JSProf.LWR(26558, propertyCallbacks, JSProf.LMC(26557, propertyCallbacks, 'slice').slice());
                                for (var i = 0, l = JSProf.LGD(26559, propertyCallbacks, 'length').length; JSProf.LRE(26560, i) < JSProf.LRE(26561, l); i++) {
                                    JSProf.LMC(26566, propertyCallbacks[i], 'call').call(JSProf.LRE(26562, self), JSProf.LRE(26563, name), JSProf.LRE(26564, oldValue), JSProf.LRE(26565, value));
                                }
                            }
                        }, 12);
                    JSProf.LFC(26570, notify, false)(JSProf.LGE(26569, callbacks, JSProf.TMPS.tbbb81df15eb851fcbdfdc61c42c5f5f5ab288405 = '_' + JSProf.LRE(26568, name))[JSProf.TMPS.tbbb81df15eb851fcbdfdc61c42c5f5f5ab288405]);
                    if (!JSProf.LRE(26571, ignoreCatchall)) {
                        JSProf.LFC(26573, notify, false)(JSProf.LGE(26572, callbacks, '*')["*"]);    // the catch-all
                    }
                }, 12)));    // we use a function instead of an object so it will be ignored by JSON conversion
            }
            if (!JSProf.LRE(26577, callback) && typeof JSProf.LRE(26578, name) === "function") {
                callback = JSProf.LWR(26580, callback, JSProf.LRE(26579, name));
                name = JSProf.LWR(26581, name, "*");
            } else {
                // prepend with dash to prevent name conflicts with function (like "name" property)
                name = JSProf.LWR(26583, name, '_' + JSProf.LRE(26582, name));
            }
            var propertyCallbacks = JSProf.LGE(26584, callbacks, 'name')[name];
            if (typeof JSProf.LRE(26585, propertyCallbacks) !== "object") {
                propertyCallbacks = JSProf.LWR(26588, propertyCallbacks, JSProf.LPE(26587, callbacks, 'name')[name] = JSProf.LRPE(26587, JSProf.LNE(26586, [], 10)));
            }
            JSProf.LMC(26590, propertyCallbacks, 'push').push(JSProf.LRE(26589, callback));
            // TODO: Remove unwatch in 2.0
            var handle = JSProf.LNE(26591, {}, 11);
            JSProf.LPD(26600, handle, 'unwatch').unwatch = JSProf.LRSP(26600, JSProf.LPD(26599, handle, 'remove').remove = JSProf.LRSP(26599, JSProf.LNF(26598, function () {
                var index = JSProf.LMC(26594, array, 'indexOf').indexOf(JSProf.LRE(26592, propertyCallbacks), JSProf.LRE(26593, callback));
                //console.log("indexxxxxxxxxxx = "+ index);
                if (JSProf.LRE(26595, index) > -1) {
                    //console.log("inside index -----------------1");
                    //console.log(propertyCallbacks);
                    JSProf.LMC(26597, propertyCallbacks, 'splice').splice(JSProf.LRE(26596, index), 1);
                }
            }, 12)));
            return JSProf.LRE(26601, handle);    //Object
        }, 12)
    }, 11));
}, 12));