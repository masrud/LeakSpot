JSProf.LFC(26952, define, false)(JSProf.LNE(26838, [
    "./_base/declare",
    "./_base/lang",
    "./_base/array",
    "./when"
], 10), JSProf.LNF(26951, function (declare, lang, array, when) {
    // module:
    //		dojo/Stateful
    return JSProf.LFC(26950, declare, false)("dojo.Stateful", null, JSProf.LNE(26949, {
        _attrPairNames: JSProf.LNE(26839, {}, 11),
        _getAttrNames: JSProf.LNF(26847, function (name) {
            // summary:
            //		Helper function for get() and set().
            //		Caches attribute name values so we don't do the string ops every time.
            // tags:
            //		private
            var apn = JSProf.LGD(26840, this, '_attrPairNames')._attrPairNames;
            if (JSProf.LGE(26841, apn, 'name')[name]) {
                return JSProf.LGE(26842, apn, 'name')[name];
            }
            return JSProf.LPE(26846, apn, 'name')[name] = JSProf.LRPE(26846, JSProf.LNE(26845, {
                s: "_" + JSProf.LRE(26843, name) + "Setter",
                g: "_" + JSProf.LRE(26844, name) + "Getter"
            }, 11));
        }, 12),
        postscript: JSProf.LNF(26851, function (params) {
            // Automatic setting of params during construction
            if (JSProf.LRE(26848, params)) {
                JSProf.LMC(26850, this, 'set').set(JSProf.LRE(26849, params));
            }
        }, 12),
        _get: JSProf.LNF(26855, function (name, names) {
            // summary:
            //		Private function that does a get based off a hash of names
            // names:
            //		Hash of names of custom attributes
            return typeof JSProf.LGE(26852, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd] === "function" ? JSProf.LMC(26853, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.g, 1)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd]() : JSProf.LGE(26854, this, 'name')[name];
        }, 12),
        get: JSProf.LNF(26860, function (name) {
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
            return JSProf.LMC(26859, this, '_get')._get(JSProf.LRE(26856, name), JSProf.LMC(26858, this, '_getAttrNames')._getAttrNames(JSProf.LRE(26857, name)));    //Any
        }, 12),
        set: JSProf.LNF(26889, function (name, value) {
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
            if (typeof JSProf.LRE(26861, name) === "object") {
                for (var x in JSProf.LRE(26862, name)) {
                    if (JSProf.LMC(26864, name, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(26863, x)) && JSProf.LRE(26865, x) != "_watchCallbacks") {
                        JSProf.LMC(26868, this, 'set').set(JSProf.LRE(26866, x), JSProf.LGE(26867, name, 'x')[x]);
                    }
                }
                return this;
            }
            var names = JSProf.LMC(26870, this, '_getAttrNames')._getAttrNames(JSProf.LRE(26869, name)), oldValue = JSProf.LMC(26873, this, '_get')._get(JSProf.LRE(26871, name), JSProf.LRE(26872, names)), setter = JSProf.LGE(26874, this, JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd = names.s)[JSProf.TMPS.t5a432b8bfb88d1001a9f4b1f5ebb4e43f355e8cd], result;
            if (typeof JSProf.LRE(26875, setter) === "function") {
                // use the explicit setter
                result = JSProf.LWR(26878, result, JSProf.LMC(26877, setter, 'apply').apply(this, JSProf.LMC(26876, Array.prototype.slice, 'call').call(arguments, 1)));
            } else {
                // no setter so set attribute directly
                JSProf.LPE(26880, this, 'name')[name] = JSProf.LRPE(26880, JSProf.LRE(26879, value));
            }
            if (JSProf.LGD(26881, this, '_watchCallbacks')._watchCallbacks) {
                var self = this;
                // If setter returned a promise, wait for it to complete, otherwise call watches immediately
                JSProf.LFC(26888, when, false)(JSProf.LRE(26882, result), JSProf.LNF(26887, function () {
                    JSProf.LMC(26886, self, '_watchCallbacks')._watchCallbacks(JSProf.LRE(26883, name), JSProf.LRE(26884, oldValue), JSProf.LRE(26885, value));
                }, 12));
            }
            return this;    // dojo/Stateful
        }, 12),
        _changeAttrValue: JSProf.LNF(26899, function (name, value) {
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
            var oldValue = JSProf.LMC(26891, this, 'get').get(JSProf.LRE(26890, name));
            JSProf.LPE(26893, this, 'name')[name] = JSProf.LRPE(26893, JSProf.LRE(26892, value));
            if (JSProf.LGD(26894, this, '_watchCallbacks')._watchCallbacks) {
                JSProf.LMC(26898, this, '_watchCallbacks')._watchCallbacks(JSProf.LRE(26895, name), JSProf.LRE(26896, oldValue), JSProf.LRE(26897, value));
            }
            return this;    // dojo/Stateful
        }, 12),
        watch: JSProf.LNF(26948, function (name, callback) {
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
            var callbacks = JSProf.LGD(26900, this, '_watchCallbacks')._watchCallbacks;
            if (!JSProf.LRE(26901, callbacks)) {
                var self = this;
                callbacks = JSProf.LWR(26922, callbacks, JSProf.LPD(26921, this, '_watchCallbacks')._watchCallbacks = JSProf.LRSP(26921, JSProf.LNF(26920, function (name, oldValue, value, ignoreCatchall) {
                    var notify = JSProf.LNF(26913, function (propertyCallbacks) {
                            if (JSProf.LRE(26902, propertyCallbacks)) {
                                propertyCallbacks = JSProf.LWR(26904, propertyCallbacks, JSProf.LMC(26903, propertyCallbacks, 'slice').slice());
                                for (var i = 0, l = JSProf.LGD(26905, propertyCallbacks, 'length').length; JSProf.LRE(26906, i) < JSProf.LRE(26907, l); i++) {
                                    JSProf.LMC(26912, propertyCallbacks[i], 'call').call(JSProf.LRE(26908, self), JSProf.LRE(26909, name), JSProf.LRE(26910, oldValue), JSProf.LRE(26911, value));
                                }
                            }
                        }, 12);
                    JSProf.LFC(26916, notify, false)(JSProf.LGE(26915, callbacks, JSProf.TMPS.tbbb81df15eb851fcbdfdc61c42c5f5f5ab288405 = '_' + JSProf.LRE(26914, name))[JSProf.TMPS.tbbb81df15eb851fcbdfdc61c42c5f5f5ab288405]);
                    if (!JSProf.LRE(26917, ignoreCatchall)) {
                        JSProf.LFC(26919, notify, false)(JSProf.LGE(26918, callbacks, '*')["*"]);    // the catch-all
                    }
                }, 12)));    // we use a function instead of an object so it will be ignored by JSON conversion
            }
            if (!JSProf.LRE(26923, callback) && typeof JSProf.LRE(26924, name) === "function") {
                callback = JSProf.LWR(26926, callback, JSProf.LRE(26925, name));
                name = JSProf.LWR(26927, name, "*");
            } else {
                // prepend with dash to prevent name conflicts with function (like "name" property)
                name = JSProf.LWR(26929, name, '_' + JSProf.LRE(26928, name));
            }
            var propertyCallbacks = JSProf.LGE(26930, callbacks, 'name')[name];
            if (typeof JSProf.LRE(26931, propertyCallbacks) !== "object") {
                propertyCallbacks = JSProf.LWR(26934, propertyCallbacks, JSProf.LPE(26933, callbacks, 'name')[name] = JSProf.LRPE(26933, JSProf.LNE(26932, [], 10)));
            }
            JSProf.LMC(26936, propertyCallbacks, 'push').push(JSProf.LRE(26935, callback));
            // TODO: Remove unwatch in 2.0
            var handle = JSProf.LNE(26937, {}, 11);
            JSProf.LPD(26946, handle, 'unwatch').unwatch = JSProf.LRSP(26946, JSProf.LPD(26945, handle, 'remove').remove = JSProf.LRSP(26945, JSProf.LNF(26944, function () {
                var index = JSProf.LMC(26940, array, 'indexOf').indexOf(JSProf.LRE(26938, propertyCallbacks), JSProf.LRE(26939, callback));
                //console.log("indexxxxxxxxxxx = "+ index);
                if (JSProf.LRE(26941, index) > -1) {
                    //console.log("inside index -----------------1");
                    //console.log(propertyCallbacks);
                    JSProf.LMC(26943, propertyCallbacks, 'splice').splice(JSProf.LRE(26942, index), 1);
                }
            }, 12)));
            return JSProf.LRE(26947, handle);    //Object
        }, 12)
    }, 11));
}, 12));