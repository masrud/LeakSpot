JSProf.LFC(7432, define, false)(JSProf.LNE(7320, [
    "require",
    "module"
], 10), JSProf.LNF(7431, function (require, module) {
    // module:
    //		dojo/has
    // summary:
    //		Defines the has.js API and several feature tests used by dojo.
    // description:
    //		This module defines the has API as described by the project has.js with the following additional features:
    //
    //		- the has test cache is exposed at has.cache.
    //		- the method has.add includes a forth parameter that controls whether or not existing tests are replaced
    //		- the loader's has cache may be optionally copied into this module's has cahce.
    //
    //		This module adopted from https://github.com/phiggins42/has.js; thanks has.js team!
    // try to pull the has implementation from the loader; both the dojo loader and bdLoad provide one
    // if using a foreign loader, then the has cache may be initialized via the config object for this module
    // WARNING: if a foreign loader defines require.has to be something other than the has.js API, then this implementation fail
    var has = JSProf.LGD(7321, require, 'has').has || JSProf.LNF(7322, function () {
        }, 12);
    if (!JSProf.LFC(7323, has, false)("dojo-has-api")) {
        var isBrowser = typeof JSProf.LRU(7324, typeof window === 'undefined' ? undefined : window) != "undefined" && typeof JSProf.LRU(7325, typeof location === 'undefined' ? undefined : location) != "undefined" && typeof JSProf.LRU(7326, typeof document === 'undefined' ? undefined : document) != "undefined" && JSProf.LGD(7327, window, 'location').location == JSProf.LRU(7328, typeof location === 'undefined' ? undefined : location) && JSProf.LGD(7329, window, 'document').document == JSProf.LRU(7330, typeof document === 'undefined' ? undefined : document),
            // has API variables
            global = JSProf.LFC(7332, JSProf.LNF(7331, function () {
                return this;
            }, 12), false)(), doc = JSProf.LRE(7333, isBrowser) && JSProf.LRU(7334, typeof document === 'undefined' ? undefined : document), element = JSProf.LRE(7335, doc) && JSProf.LMC(7336, doc, 'createElement').createElement("DiV"), cache = JSProf.LGD(7337, module, 'config').config && JSProf.LMC(7338, module, 'config').config() || JSProf.LNE(7339, {}, 11);
        has = JSProf.LWR(7348, has, JSProf.LNF(7347, function (name) {
            // summary:
            //		Return the current value of the named feature.
            //
            // name: String|Integer
            //		The name (if a string) or identifier (if an integer) of the feature to test.
            //
            // description:
            //		Returns the value of the feature named by name. The feature must have been
            //		previously added to the cache by has.add.
            return typeof JSProf.LGE(7340, cache, 'name')[name] == "function" ? JSProf.LPE(7345, cache, 'name')[name] = JSProf.LRPE(7345, JSProf.LMC(7344, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = name, 1)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf](JSProf.LRE(7341, global), JSProf.LRE(7342, doc), JSProf.LRE(7343, element))) : JSProf.LGE(7346, cache, 'name')[name];    // Boolean
        }, 12));
        JSProf.LPD(7350, has, 'cache').cache = JSProf.LRSP(7350, JSProf.LRE(7349, cache));
        JSProf.LPD(7359, has, 'add').add = JSProf.LRSP(7359, JSProf.LNF(7358, function (name, test, now, force) {
            // summary:
            //	 	Register a new feature test for some named feature.
            // name: String|Integer
            //	 	The name (if a string) or identifier (if an integer) of the feature to test.
            // test: Function
            //		 A test function to register. If a function, queued for testing until actually
            //		 needed. The test function should return a boolean indicating
            //	 	the presence of a feature or bug.
            // now: Boolean?
            //		 Optional. Omit if `test` is not a function. Provides a way to immediately
            //		 run the test and cache the result.
            // force: Boolean?
            //	 	Optional. If the test already exists and force is truthy, then the existing
            //	 	test will be replaced; otherwise, add does not replace an existing test (that
            //	 	is, by default, the first test advice wins).
            // example:
            //		A redundant test, testFn with immediate execution:
            //	|	has.add("javascript", function(){ return true; }, true);
            //
            // example:
            //		Again with the redundantness. You can do this in your tests, but we should
            //		not be doing this in any internal has.js tests
            //	|	has.add("javascript", true);
            //
            // example:
            //		Three things are passed to the testFunction. `global`, `document`, and a generic element
            //		from which to work your test should the need arise.
            //	|	has.add("bug-byid", function(g, d, el){
            //	|		// g	== global, typically window, yadda yadda
            //	|		// d	== document object
            //	|		// el == the generic element. a `has` element.
            //	|		return false; // fake test, byid-when-form-has-name-matching-an-id is slightly longer
            //	|	});
            (typeof JSProf.LGE(7351, cache, 'name')[name] == "undefined" || JSProf.LRE(7352, force)) && (JSProf.LPE(7354, cache, 'name')[name] = JSProf.LRPE(7354, JSProf.LRE(7353, test)));
            return JSProf.LRE(7355, now) && JSProf.LFC(7357, has, false)(JSProf.LRE(7356, name));
        }, 12));
        // since we're operating under a loader that doesn't provide a has API, we must explicitly initialize
        // has as it would have otherwise been initialized by the dojo loader; use has.add to the builder
        // can optimize these away iff desired
        JSProf.LMC(7361, has, 'add').add("host-browser", JSProf.LRE(7360, isBrowser));
        JSProf.LMC(7366, has, 'add').add("host-node", typeof JSProf.LRU(7362, typeof process === 'undefined' ? undefined : process) == "object" && JSProf.LGD(7363, process, 'versions').versions && JSProf.LGD(7364, process.versions, 'node').node && JSProf.LGD(7365, process.versions, 'v8').v8);
        JSProf.LMC(7370, has, 'add').add("host-rhino", typeof JSProf.LRU(7367, typeof load === 'undefined' ? undefined : load) == "function" && (typeof JSProf.LRU(7368, typeof Packages === 'undefined' ? undefined : Packages) == "function" || typeof JSProf.LRU(7369, typeof Packages === 'undefined' ? undefined : Packages) == "object"));
        JSProf.LMC(7372, has, 'add').add("dom", JSProf.LRE(7371, isBrowser));
        JSProf.LMC(7373, has, 'add').add("dojo-dom-ready-api", 1);
        JSProf.LMC(7374, has, 'add').add("dojo-sniff", 1);
    }
    if (JSProf.LFC(7375, has, false)("host-browser")) {
        // Common application level tests
        JSProf.LMC(7377, has, 'add').add("dom-addeventlistener", !!JSProf.LGD(7376, document, 'addEventListener').addEventListener);
        // Do the device and browser have touch capability?
        JSProf.LMC(7382, has, 'add').add("touch", "ontouchstart" in JSProf.LRU(7378, typeof document === 'undefined' ? undefined : document) || "onpointerdown" in JSProf.LRU(7379, typeof document === 'undefined' ? undefined : document) && JSProf.LGD(7380, navigator, 'maxTouchPoints').maxTouchPoints > 0 || JSProf.LGD(7381, window.navigator, 'msMaxTouchPoints').msMaxTouchPoints);
        // Touch events support
        JSProf.LMC(7384, has, 'add').add("touch-events", "ontouchstart" in JSProf.LRU(7383, typeof document === 'undefined' ? undefined : document));
        // Pointer Events support
        JSProf.LMC(7386, has, 'add').add("pointer-events", "onpointerdown" in JSProf.LRU(7385, typeof document === 'undefined' ? undefined : document));
        JSProf.LMC(7388, has, 'add').add("MSPointer", "msMaxTouchPoints" in JSProf.LRU(7387, typeof navigator === 'undefined' ? undefined : navigator));
        //IE10 (+IE11 preview)
        // I don't know if any of these tests are really correct, just a rough guess
        JSProf.LMC(7391, has, 'add').add("device-width", JSProf.LGD(7389, screen, 'availWidth').availWidth || JSProf.LRU(7390, typeof innerWidth === 'undefined' ? undefined : innerWidth));
        // Tests for DOMNode.attributes[] behavior:
        //	 - dom-attributes-explicit - attributes[] only lists explicitly user specified attributes
        //	 - dom-attributes-specified-flag (IE8) - need to check attr.specified flag to skip attributes user didn't specify
        //	 - Otherwise, in IE6-7. attributes[] will list hundreds of values, so need to do outerHTML to get attrs instead.
        var form = JSProf.LMC(7392, document, 'createElement').createElement("form");
        JSProf.LMC(7394, has, 'add').add("dom-attributes-explicit", JSProf.LGD(7393, form.attributes, 'length').length == 0);
        // W3C
        JSProf.LMC(7397, has, 'add').add("dom-attributes-specified-flag", JSProf.LGD(7395, form.attributes, 'length').length > 0 && JSProf.LGD(7396, form.attributes, 'length').length < 40);    // IE8
    }
    JSProf.LPD(7401, has, 'clearElement').clearElement = JSProf.LRSP(7401, JSProf.LNF(7400, function (element) {
        // summary:
        //	 Deletes the contents of the element passed to test functions.
        JSProf.LPD(7398, element, 'innerHTML').innerHTML = JSProf.LRSP(7398, "");
        return JSProf.LRE(7399, element);
    }, 12));
    JSProf.LPD(7421, has, 'normalize').normalize = JSProf.LRSP(7421, JSProf.LNF(7420, function (id, toAbsMid) {
        // summary:
        //	 Resolves id into a module id based on possibly-nested tenary expression that branches on has feature test value(s).
        //
        // toAbsMid: Function
        //	 Resolves a relative module id into an absolute module id
        var tokens = JSProf.LMC(7402, id, 'match').match(/[\?:]|[^:\?]*/g), i = 0, get = JSProf.LNF(7414, function (skip) {
                var term = JSProf.LGE(7403, tokens, JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7 = i++)[JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7];
                if (JSProf.LRE(7404, term) == ":") {
                    // empty string module name, resolves to 0
                    return 0;
                } else {
                    // postfixed with a ? means it is a feature to branch on, the term is the name of the feature
                    if (JSProf.LGE(7405, tokens, JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7 = i++)[JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7] == "?") {
                        if (!JSProf.LRE(7406, skip) && JSProf.LFC(7408, has, false)(JSProf.LRE(7407, term))) {
                            // matched the feature, get the first value from the options
                            return JSProf.LFC(7409, get, false)();
                        } else {
                            // did not match, get the second value, passing over the first
                            JSProf.LFC(7410, get, false)(true);
                            return JSProf.LFC(7412, get, false)(JSProf.LRE(7411, skip));
                        }
                    }
                    // a module
                    return JSProf.LRE(7413, term) || 0;
                }
            }, 12);
        id = JSProf.LWR(7416, id, JSProf.LFC(7415, get, false)());
        return JSProf.LRE(7417, id) && JSProf.LFC(7419, toAbsMid, false)(JSProf.LRE(7418, id));
    }, 12));
    JSProf.LPD(7429, has, 'load').load = JSProf.LRSP(7429, JSProf.LNF(7428, function (id, parentRequire, loaded) {
        // summary:
        //		Conditional loading of AMD modules based on a has feature test value.
        // id: String
        //		Gives the resolved module id to load.
        // parentRequire: Function
        //		The loader require function with respect to the module that contained the plugin resource in it's
        //		dependency list.
        // loaded: Function
        //	 Callback to loader that consumes result of plugin demand.
        if (JSProf.LRE(7422, id)) {
            JSProf.LFC(7426, parentRequire, false)(JSProf.LNE(7424, [JSProf.LRE(7423, id)], 10), JSProf.LRE(7425, loaded));
        } else {
            JSProf.LFC(7427, loaded, false)();
        }
    }, 12));
    return JSProf.LRE(7430, has);
}, 12));