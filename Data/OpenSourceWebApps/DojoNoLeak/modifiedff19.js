JSProf.LFC(11207, define, false)(JSProf.LNE(11095, [
    "require",
    "module"
], 10), JSProf.LNF(11206, function (require, module) {
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
    var has = JSProf.LGD(11096, require, 'has').has || JSProf.LNF(11097, function () {
        }, 12);
    if (!JSProf.LFC(11098, has, false)("dojo-has-api")) {
        var isBrowser = typeof JSProf.LRU(11099, typeof window === 'undefined' ? undefined : window) != "undefined" && typeof JSProf.LRU(11100, typeof location === 'undefined' ? undefined : location) != "undefined" && typeof JSProf.LRU(11101, typeof document === 'undefined' ? undefined : document) != "undefined" && JSProf.LGD(11102, window, 'location').location == JSProf.LRU(11103, typeof location === 'undefined' ? undefined : location) && JSProf.LGD(11104, window, 'document').document == JSProf.LRU(11105, typeof document === 'undefined' ? undefined : document),
            // has API variables
            global = JSProf.LFC(11107, JSProf.LNF(11106, function () {
                return this;
            }, 12), false)(), doc = JSProf.LRE(11108, isBrowser) && JSProf.LRU(11109, typeof document === 'undefined' ? undefined : document), element = JSProf.LRE(11110, doc) && JSProf.LMC(11111, doc, 'createElement').createElement("DiV"), cache = JSProf.LGD(11112, module, 'config').config && JSProf.LMC(11113, module, 'config').config() || JSProf.LNE(11114, {}, 11);
        has = JSProf.LWR(11123, has, JSProf.LNF(11122, function (name) {
            // summary:
            //		Return the current value of the named feature.
            //
            // name: String|Integer
            //		The name (if a string) or identifier (if an integer) of the feature to test.
            //
            // description:
            //		Returns the value of the feature named by name. The feature must have been
            //		previously added to the cache by has.add.
            return typeof JSProf.LGE(11115, cache, 'name')[name] == "function" ? JSProf.LPE(11120, cache, 'name')[name] = JSProf.LRPE(11120, JSProf.LMC(11119, cache, JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf = name, 1)[JSProf.TMPS.t34fc3319184a76222fdc5c4f23a1fd486c7dd6cf](JSProf.LRE(11116, global), JSProf.LRE(11117, doc), JSProf.LRE(11118, element))) : JSProf.LGE(11121, cache, 'name')[name];    // Boolean
        }, 12));
        JSProf.LPD(11125, has, 'cache').cache = JSProf.LRSP(11125, JSProf.LRE(11124, cache));
        JSProf.LPD(11134, has, 'add').add = JSProf.LRSP(11134, JSProf.LNF(11133, function (name, test, now, force) {
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
            (typeof JSProf.LGE(11126, cache, 'name')[name] == "undefined" || JSProf.LRE(11127, force)) && (JSProf.LPE(11129, cache, 'name')[name] = JSProf.LRPE(11129, JSProf.LRE(11128, test)));
            return JSProf.LRE(11130, now) && JSProf.LFC(11132, has, false)(JSProf.LRE(11131, name));
        }, 12));
        // since we're operating under a loader that doesn't provide a has API, we must explicitly initialize
        // has as it would have otherwise been initialized by the dojo loader; use has.add to the builder
        // can optimize these away iff desired
        JSProf.LMC(11136, has, 'add').add("host-browser", JSProf.LRE(11135, isBrowser));
        JSProf.LMC(11141, has, 'add').add("host-node", typeof JSProf.LRU(11137, typeof process === 'undefined' ? undefined : process) == "object" && JSProf.LGD(11138, process, 'versions').versions && JSProf.LGD(11139, process.versions, 'node').node && JSProf.LGD(11140, process.versions, 'v8').v8);
        JSProf.LMC(11145, has, 'add').add("host-rhino", typeof JSProf.LRU(11142, typeof load === 'undefined' ? undefined : load) == "function" && (typeof JSProf.LRU(11143, typeof Packages === 'undefined' ? undefined : Packages) == "function" || typeof JSProf.LRU(11144, typeof Packages === 'undefined' ? undefined : Packages) == "object"));
        JSProf.LMC(11147, has, 'add').add("dom", JSProf.LRE(11146, isBrowser));
        JSProf.LMC(11148, has, 'add').add("dojo-dom-ready-api", 1);
        JSProf.LMC(11149, has, 'add').add("dojo-sniff", 1);
    }
    if (JSProf.LFC(11150, has, false)("host-browser")) {
        // Common application level tests
        JSProf.LMC(11152, has, 'add').add("dom-addeventlistener", !!JSProf.LGD(11151, document, 'addEventListener').addEventListener);
        // Do the device and browser have touch capability?
        JSProf.LMC(11157, has, 'add').add("touch", "ontouchstart" in JSProf.LRU(11153, typeof document === 'undefined' ? undefined : document) || "onpointerdown" in JSProf.LRU(11154, typeof document === 'undefined' ? undefined : document) && JSProf.LGD(11155, navigator, 'maxTouchPoints').maxTouchPoints > 0 || JSProf.LGD(11156, window.navigator, 'msMaxTouchPoints').msMaxTouchPoints);
        // Touch events support
        JSProf.LMC(11159, has, 'add').add("touch-events", "ontouchstart" in JSProf.LRU(11158, typeof document === 'undefined' ? undefined : document));
        // Pointer Events support
        JSProf.LMC(11161, has, 'add').add("pointer-events", "onpointerdown" in JSProf.LRU(11160, typeof document === 'undefined' ? undefined : document));
        JSProf.LMC(11163, has, 'add').add("MSPointer", "msMaxTouchPoints" in JSProf.LRU(11162, typeof navigator === 'undefined' ? undefined : navigator));
        //IE10 (+IE11 preview)
        // I don't know if any of these tests are really correct, just a rough guess
        JSProf.LMC(11166, has, 'add').add("device-width", JSProf.LGD(11164, screen, 'availWidth').availWidth || JSProf.LRU(11165, typeof innerWidth === 'undefined' ? undefined : innerWidth));
        // Tests for DOMNode.attributes[] behavior:
        //	 - dom-attributes-explicit - attributes[] only lists explicitly user specified attributes
        //	 - dom-attributes-specified-flag (IE8) - need to check attr.specified flag to skip attributes user didn't specify
        //	 - Otherwise, in IE6-7. attributes[] will list hundreds of values, so need to do outerHTML to get attrs instead.
        var form = JSProf.LMC(11167, document, 'createElement').createElement("form");
        JSProf.LMC(11169, has, 'add').add("dom-attributes-explicit", JSProf.LGD(11168, form.attributes, 'length').length == 0);
        // W3C
        JSProf.LMC(11172, has, 'add').add("dom-attributes-specified-flag", JSProf.LGD(11170, form.attributes, 'length').length > 0 && JSProf.LGD(11171, form.attributes, 'length').length < 40);    // IE8
    }
    JSProf.LPD(11176, has, 'clearElement').clearElement = JSProf.LRSP(11176, JSProf.LNF(11175, function (element) {
        // summary:
        //	 Deletes the contents of the element passed to test functions.
        JSProf.LPD(11173, element, 'innerHTML').innerHTML = JSProf.LRSP(11173, "");
        return JSProf.LRE(11174, element);
    }, 12));
    JSProf.LPD(11196, has, 'normalize').normalize = JSProf.LRSP(11196, JSProf.LNF(11195, function (id, toAbsMid) {
        // summary:
        //	 Resolves id into a module id based on possibly-nested tenary expression that branches on has feature test value(s).
        //
        // toAbsMid: Function
        //	 Resolves a relative module id into an absolute module id
        var tokens = JSProf.LMC(11177, id, 'match').match(/[\?:]|[^:\?]*/g), i = 0, get = JSProf.LNF(11189, function (skip) {
                var term = JSProf.LGE(11178, tokens, JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7 = i++)[JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7];
                if (JSProf.LRE(11179, term) == ":") {
                    // empty string module name, resolves to 0
                    return 0;
                } else {
                    // postfixed with a ? means it is a feature to branch on, the term is the name of the feature
                    if (JSProf.LGE(11180, tokens, JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7 = i++)[JSProf.TMPS.t29f092d0ed57cefc05ea63f3a6944eb7adc92ae7] == "?") {
                        if (!JSProf.LRE(11181, skip) && JSProf.LFC(11183, has, false)(JSProf.LRE(11182, term))) {
                            // matched the feature, get the first value from the options
                            return JSProf.LFC(11184, get, false)();
                        } else {
                            // did not match, get the second value, passing over the first
                            JSProf.LFC(11185, get, false)(true);
                            return JSProf.LFC(11187, get, false)(JSProf.LRE(11186, skip));
                        }
                    }
                    // a module
                    return JSProf.LRE(11188, term) || 0;
                }
            }, 12);
        id = JSProf.LWR(11191, id, JSProf.LFC(11190, get, false)());
        return JSProf.LRE(11192, id) && JSProf.LFC(11194, toAbsMid, false)(JSProf.LRE(11193, id));
    }, 12));
    JSProf.LPD(11204, has, 'load').load = JSProf.LRSP(11204, JSProf.LNF(11203, function (id, parentRequire, loaded) {
        // summary:
        //		Conditional loading of AMD modules based on a has feature test value.
        // id: String
        //		Gives the resolved module id to load.
        // parentRequire: Function
        //		The loader require function with respect to the module that contained the plugin resource in it's
        //		dependency list.
        // loaded: Function
        //	 Callback to loader that consumes result of plugin demand.
        if (JSProf.LRE(11197, id)) {
            JSProf.LFC(11201, parentRequire, false)(JSProf.LNE(11199, [JSProf.LRE(11198, id)], 10), JSProf.LRE(11200, loaded));
        } else {
            JSProf.LFC(11202, loaded, false)();
        }
    }, 12));
    return JSProf.LRE(11205, has);
}, 12));