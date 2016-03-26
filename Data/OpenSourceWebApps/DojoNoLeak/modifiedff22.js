JSProf.LFC(12168, define, false)(JSProf.LNE(11856, [
    "./_base/kernel",
    "./has",
    "./dom",
    "./on",
    "./_base/array",
    "./_base/lang",
    "./selector/_loader",
    "./selector/_loader!default"
], 10), JSProf.LNF(12167, function (dojo, has, dom, on, array, lang, loader, defaultEngine) {
    JSProf.LFD(12166, queryForEngine);
    "use strict";
    JSProf.LMC(11863, has, 'add').add("array-extensible", JSProf.LNF(11862, function () {
        // test to see if we can extend an array (not supported in old IE)
        return JSProf.LGD(11860, JSProf.LMC(11859, lang, 'delegate').delegate(JSProf.LNE(11857, [], 10), JSProf.LNE(11858, { length: 1 }, 11)), 'length').length == 1 && !JSProf.LFC(11861, has, false)("bug-for-in-skips-shadowed");
    }, 12));
    var ap = JSProf.LGD(11864, Array, 'prototype').prototype, aps = JSProf.LGD(11865, ap, 'slice').slice, apc = JSProf.LGD(11866, ap, 'concat').concat, forEach = JSProf.LGD(11867, array, 'forEach').forEach;
    var tnl = JSProf.LNF(11878, function (a, parent, NodeListCtor) {
            // summary:
            //		decorate an array to make it look like a `dojo/NodeList`.
            // a:
            //		Array of nodes to decorate.
            // parent:
            //		An optional parent NodeList that generated the current
            //		list of nodes. Used to call _stash() so the parent NodeList
            //		can be accessed via end() later.
            // NodeListCtor:
            //		An optional constructor function to use for any
            //		new NodeList calls. This allows a certain chain of
            //		NodeList calls to use a different object than dojo/NodeList.
            var nodeList = JSProf.LNE(11873, new (JSProf.LFC(11872, JSProf.LRE(11868, NodeListCtor) || JSProf.LGD(11869, this, '_NodeListCtor')._NodeListCtor || JSProf.LRE(11870, nl), true))(JSProf.LRE(11871, a)), 'LogicalExpression');
            return JSProf.LRE(11874, parent) ? JSProf.LMC(11876, nodeList, '_stash')._stash(JSProf.LRE(11875, parent)) : JSProf.LRE(11877, nodeList);
        }, 12);
    var loopBody = JSProf.LNF(11892, function (f, a, o) {
            a = JSProf.LWR(11882, a, JSProf.LNE(11879, [0], 10).concat(JSProf.LMC(11881, aps, 'call').call(JSProf.LRE(11880, a), 0)));
            o = JSProf.LWR(11885, o, JSProf.LRE(11883, o) || JSProf.LGD(11884, dojo, 'global').global);
            return JSProf.LNF(11891, function (node) {
                JSProf.LPE(11887, a, 0)[0] = JSProf.LRPE(11887, JSProf.LRE(11886, node));
                return JSProf.LMC(11890, f, 'apply').apply(JSProf.LRE(11888, o), JSProf.LRE(11889, a));
            }, 12);
        }, 12);
    // adapters
    var adaptAsForEach = JSProf.LNF(11898, function (f, o) {
            // summary:
            //		adapts a single node function to be used in the forEach-type
            //		actions. The initial object is returned from the specialized
            //		function.
            // f: Function
            //		a function to adapt
            // o: Object?
            //		an optional context for f
            return JSProf.LNF(11897, function () {
                JSProf.LMC(11896, this, 'forEach').forEach(JSProf.LFC(11895, loopBody, false)(JSProf.LRE(11893, f), arguments, JSProf.LRE(11894, o)));
                return this;    // Object
            }, 12);
        }, 12);
    var adaptAsMap = JSProf.LNF(11904, function (f, o) {
            // summary:
            //		adapts a single node function to be used in the map-type
            //		actions. The return is a new array of values, as via `dojo/_base/array.map`
            // f: Function
            //		a function to adapt
            // o: Object?
            //		an optional context for f
            return JSProf.LNF(11903, function () {
                return JSProf.LMC(11902, this, 'map').map(JSProf.LFC(11901, loopBody, false)(JSProf.LRE(11899, f), arguments, JSProf.LRE(11900, o)));
            }, 12);
        }, 12);
    var adaptAsFilter = JSProf.LNF(11910, function (f, o) {
            // summary:
            //		adapts a single node function to be used in the filter-type actions
            // f: Function
            //		a function to adapt
            // o: Object?
            //		an optional context for f
            return JSProf.LNF(11909, function () {
                return JSProf.LMC(11908, this, 'filter').filter(JSProf.LFC(11907, loopBody, false)(JSProf.LRE(11905, f), arguments, JSProf.LRE(11906, o)));
            }, 12);
        }, 12);
    var adaptWithCondition = JSProf.LNF(11924, function (f, g, o) {
            // summary:
            //		adapts a single node function to be used in the map-type
            //		actions, behaves like forEach() or map() depending on arguments
            // f: Function
            //		a function to adapt
            // g: Function
            //		a condition function, if true runs as map(), otherwise runs as forEach()
            // o: Object?
            //		an optional context for f and g
            return JSProf.LNF(11923, function () {
                var a = arguments, body = JSProf.LFC(11914, loopBody, false)(JSProf.LRE(11911, f), JSProf.LRE(11912, a), JSProf.LRE(11913, o));
                if (JSProf.LMC(11918, g, 'call').call(JSProf.LRE(11915, o) || JSProf.LGD(11916, dojo, 'global').global, JSProf.LRE(11917, a))) {
                    return JSProf.LMC(11920, this, 'map').map(JSProf.LRE(11919, body));    // self
                }
                JSProf.LMC(11922, this, 'forEach').forEach(JSProf.LRE(11921, body));
                return this;    // self
            }, 12);
        }, 12);
    var NodeList = JSProf.LNF(11956, function (array) {
            // summary:
            //		Array-like object which adds syntactic
            //		sugar for chaining, common iteration operations, animation, and
            //		node manipulation. NodeLists are most often returned as the
            //		result of dojo/query() calls.
            // description:
            //		NodeList instances provide many utilities that reflect
            //		core Dojo APIs for Array iteration and manipulation, DOM
            //		manipulation, and event handling. Instead of needing to dig up
            //		functions in the dojo package, NodeLists generally make the
            //		full power of Dojo available for DOM manipulation tasks in a
            //		simple, chainable way.
            // example:
            //		create a node list from a node
            //		|	require(["dojo/query", "dojo/dom"
            //		|	], function(query, dom){
            //		|		query.NodeList(dom.byId("foo"));
            //		|	});
            // example:
            //		get a NodeList from a CSS query and iterate on it
            //		|	require(["dojo/on", "dojo/dom"
            //		|	], function(on, dom){
            //		|		var l = query(".thinger");
            //		|		l.forEach(function(node, index, nodeList){
            //		|			console.log(index, node.innerHTML);
            //		|		});
            //		|	});
            // example:
            //		use native and Dojo-provided array methods to manipulate a
            //		NodeList without needing to use dojo.* functions explicitly:
            //		|	require(["dojo/query", "dojo/dom-construct", "dojo/dom"
            //		|	], function(query, domConstruct, dom){
            //		|		var l = query(".thinger");
            //		|		// since NodeLists are real arrays, they have a length
            //		|		// property that is both readable and writable and
            //		|		// push/pop/shift/unshift methods
            //		|		console.log(l.length);
            //		|		l.push(domConstruct.create("span"));
            //		|
            //		|		// dojo's normalized array methods work too:
            //		|		console.log( l.indexOf(dom.byId("foo")) );
            //		|		// ...including the special "function as string" shorthand
            //		|		console.log( l.every("item.nodeType == 1") );
            //		|
            //		|		// NodeLists can be [..] indexed, or you can use the at()
            //		|		// function to get specific items wrapped in a new NodeList:
            //		|		var node = l[3]; // the 4th element
            //		|		var newList = l.at(1, 3); // the 2nd and 4th elements
            //		|	});
            // example:
            //		chainability is a key advantage of NodeLists:
            //		|	require(["dojo/query", "dojo/NodeList-dom"
            //		|	], function(query){
            //		|		query(".thinger")
            //		|			.onclick(function(e){ /* ... */ })
            //		|			.at(1, 3, 8) // get a subset
            //		|				.style("padding", "5px")
            //		|				.forEach(console.log);
            //		|	});
            var isNew = this instanceof JSProf.LRE(11925, nl) && JSProf.LFC(11926, has, false)("array-extensible");
            if (typeof JSProf.LRE(11927, array) == "number") {
                array = JSProf.LWR(11930, array, JSProf.LFC(11929, Array, false)(JSProf.LRE(11928, array)));
            }
            var nodeArray = JSProf.LRE(11931, array) && "length" in JSProf.LRE(11932, array) ? JSProf.LRE(11933, array) : arguments;
            if (JSProf.LRE(11934, isNew) || !JSProf.LGD(11935, nodeArray, 'sort').sort) {
                // make sure it's a real array before we pass it on to be wrapped 
                var target = JSProf.LRE(11936, isNew) ? this : JSProf.LNE(11937, [], 10), l = JSProf.LPD(11939, target, 'length').length = JSProf.LRSP(11939, JSProf.LGD(11938, nodeArray, 'length').length);
                for (var i = 0; JSProf.LRE(11940, i) < JSProf.LRE(11941, l); i++) {
                    JSProf.LPE(11943, target, 'i')[i] = JSProf.LRPE(11943, JSProf.LGE(11942, nodeArray, 'i')[i]);
                }
                if (JSProf.LRE(11944, isNew)) {
                    // called with new operator, this means we are going to use this instance and push
                    // the nodes on to it. This is usually much faster since the NodeList properties
                    //	don't need to be copied (unless the list of nodes is extremely large).
                    return JSProf.LRE(11945, target);
                }
                nodeArray = JSProf.LWR(11947, nodeArray, JSProf.LRE(11946, target));
            }
            // called without new operator, use a real array and copy prototype properties,
            // this is slower and exists for back-compat. Should be removed in 2.0.
            JSProf.LMC(11950, lang, '_mixin')._mixin(JSProf.LRE(11948, nodeArray), JSProf.LRE(11949, nlp));
            JSProf.LPD(11954, nodeArray, '_NodeListCtor')._NodeListCtor = JSProf.LRSP(11954, JSProf.LNF(11953, function (array) {
                // call without new operator to preserve back-compat behavior
                return JSProf.LFC(11952, nl, false)(JSProf.LRE(11951, array));
            }, 12));
            return JSProf.LRE(11955, nodeArray);
        }, 12);
    var nl = JSProf.LRE(11957, NodeList), nlp = JSProf.LPD(11961, nl, 'prototype').prototype = JSProf.LRSP(11961, JSProf.LFC(11958, has, false)("array-extensible") ? JSProf.LNE(11959, [], 10) : JSProf.LNE(11960, {}, 11));
    // extend an array if it is extensible
    // expose adapters and the wrapper as private functions
    JSProf.LPD(11964, nl, '_wrap')._wrap = JSProf.LRSP(11964, JSProf.LPD(11963, nlp, '_wrap')._wrap = JSProf.LRSP(11963, JSProf.LRE(11962, tnl)));
    JSProf.LPD(11966, nl, '_adaptAsMap')._adaptAsMap = JSProf.LRSP(11966, JSProf.LRE(11965, adaptAsMap));
    JSProf.LPD(11968, nl, '_adaptAsForEach')._adaptAsForEach = JSProf.LRSP(11968, JSProf.LRE(11967, adaptAsForEach));
    JSProf.LPD(11970, nl, '_adaptAsFilter')._adaptAsFilter = JSProf.LRSP(11970, JSProf.LRE(11969, adaptAsFilter));
    JSProf.LPD(11972, nl, '_adaptWithCondition')._adaptWithCondition = JSProf.LRSP(11972, JSProf.LRE(11971, adaptWithCondition));
    // mass assignment
    // add array redirectors
    JSProf.LFC(11981, forEach, false)(JSProf.LNE(11973, [
        "slice",
        "splice"
    ], 10), JSProf.LNF(11980, function (name) {
        var f = JSProf.LGE(11974, ap, 'name')[name];
        //Use a copy of the this array via this.slice() to allow .end() to work right in the splice case.
        // CANNOT apply ._stash()/end() to splice since it currently modifies
        // the existing this array -- it would break backward compatibility if we copy the array before
        // the splice so that we can use .end(). So only doing the stash option to this._wrap for slice.
        JSProf.LPE(11979, nlp, 'name')[name] = JSProf.LRPE(11979, JSProf.LNF(11978, function () {
            return JSProf.LMC(11977, this, '_wrap')._wrap(JSProf.LMC(11975, f, 'apply').apply(this, arguments), JSProf.LRE(11976, name) == "slice" ? this : null);
        }, 12));
    }, 12));
    // concat should be here but some browsers with native NodeList have problems with it
    // add array.js redirectors
    JSProf.LFC(11991, forEach, false)(JSProf.LNE(11982, [
        "indexOf",
        "lastIndexOf",
        "every",
        "some"
    ], 10), JSProf.LNF(11990, function (name) {
        var f = JSProf.LGE(11983, array, 'name')[name];
        JSProf.LPE(11989, nlp, 'name')[name] = JSProf.LRPE(11989, JSProf.LNF(11988, function () {
            return JSProf.LMC(11987, f, 'apply').apply(JSProf.LRE(11984, dojo), JSProf.LNE(11985, [this], 10).concat(JSProf.LMC(11986, aps, 'call').call(arguments, 0)));
        }, 12));
    }, 12));
    JSProf.LMC(12078, lang, 'extend').extend(JSProf.LRE(11992, NodeList), JSProf.LNE(12077, {
        constructor: nl,
        _NodeListCtor: nl,
        toString: JSProf.LNF(11994, function () {
            // Array.prototype.toString can't be applied to objects, so we use join
            return JSProf.LMC(11993, this, 'join').join(",");
        }, 12),
        _stash: JSProf.LNF(11997, function (parent) {
            // summary:
            //		private function to hold to a parent NodeList. end() to return the parent NodeList.
            //
            // example:
            //		How to make a `dojo/NodeList` method that only returns the third node in
            //		the dojo/NodeList but allows access to the original NodeList by using this._stash:
            //	|	require(["dojo/query", "dojo/_base/lang", "dojo/NodeList", "dojo/NodeList-dom"
            //	|	], function(query, lang){
            //	|		lang.extend(NodeList, {
            //	|			third: function(){
            //	|				var newNodeList = NodeList(this[2]);
            //	|				return newNodeList._stash(this);
            //	|			}
            //	|		});
            //	|		// then see how _stash applies a sub-list, to be .end()'ed out of
            //	|		query(".foo")
            //	|			.third()
            //	|				.addClass("thirdFoo")
            //	|			.end()
            //	|			// access to the orig .foo list
            //	|			.removeClass("foo")
            //	|	});
            //
            JSProf.LPD(11996, this, '_parent')._parent = JSProf.LRSP(11996, JSProf.LRE(11995, parent));
            return this;    // dojo/NodeList
        }, 12),
        on: JSProf.LNF(12010, function (eventName, listener) {
            // summary:
            //		Listen for events on the nodes in the NodeList. Basic usage is:
            //
            // example:
            //		|	require(["dojo/query"
            //		|	], function(query){
            //		|		query(".my-class").on("click", listener);
            //			This supports event delegation by using selectors as the first argument with the event names as
            //			pseudo selectors. For example:
            //		| 		query("#my-list").on("li:click", listener);
            //			This will listen for click events within `<li>` elements that are inside the `#my-list` element.
            //			Because on supports CSS selector syntax, we can use comma-delimited events as well:
            //		| 		query("#my-list").on("li button:mouseover, li:click", listener);
            //		|	});
            var handles = JSProf.LMC(12003, this, 'map').map(JSProf.LNF(12002, function (node) {
                    return JSProf.LFC(12001, on, false)(JSProf.LRE(11998, node), JSProf.LRE(11999, eventName), JSProf.LRE(12000, listener));    // TODO: apply to the NodeList so the same selector engine is used for matches
                }, 12));
            JSProf.LPD(12008, handles, 'remove').remove = JSProf.LRSP(12008, JSProf.LNF(12007, function () {
                for (var i = 0; JSProf.LRE(12004, i) < JSProf.LGD(12005, handles, 'length').length; i++) {
                    JSProf.LMC(12006, handles[i], 'remove').remove();
                }
            }, 12));
            return JSProf.LRE(12009, handles);
        }, 12),
        end: JSProf.LNF(12015, function () {
            // summary:
            //		Ends use of the current `NodeList` by returning the previous NodeList
            //		that generated the current NodeList.
            // description:
            //		Returns the `NodeList` that generated the current `NodeList`. If there
            //		is no parent NodeList, an empty NodeList is returned.
            // example:
            //	|	require(["dojo/query", "dojo/NodeList-dom"
            //	|	], function(query){
            //	|		query("a")
            //	|			.filter(".disabled")
            //	|				// operate on the anchors that only have a disabled class
            //	|				.style("color", "grey")
            //	|			.end()
            //	|			// jump back to the list of anchors
            //	|			.style(...)
            //	|	});
            //
            if (JSProf.LGD(12011, this, '_parent')._parent) {
                return JSProf.LGD(12012, this, '_parent')._parent;
            } else {
                //Just return empty list.
                return JSProf.LNE(12014, new (JSProf.LMC(12013, this, '_NodeListCtor'))._NodeListCtor(0), 40);
            }
        }, 12),
        concat: JSProf.LNF(12025, function (item) {
            // summary:
            //		Returns a new NodeList comprised of items in this NodeList
            //		as well as items passed in as parameters
            // description:
            //		This method behaves exactly like the Array.concat method
            //		with the caveat that it returns a `NodeList` and not a
            //		raw Array. For more details, see the [Array.concat
            //		docs](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/concat)
            // item: Object?
            //		Any number of optional parameters may be passed in to be
            //		spliced into the NodeList
            //return this._wrap(apc.apply(this, arguments));
            // the line above won't work for the native NodeList, or for Dojo NodeLists either :-(
            // implementation notes:
            // Array.concat() doesn't recognize native NodeLists or Dojo NodeLists
            // as arrays, and so does not inline them into a unioned array, but
            // appends them as single entities. Both the original NodeList and the
            // items passed in as parameters must be converted to raw Arrays
            // and then the concatenation result may be re-_wrap()ed as a Dojo NodeList.
            var t = JSProf.LMC(12016, aps, 'call').call(this, 0), m = JSProf.LMC(12020, array, 'map').map(arguments, JSProf.LNF(12019, function (a) {
                    return JSProf.LMC(12018, aps, 'call').call(JSProf.LRE(12017, a), 0);
                }, 12));
            return JSProf.LMC(12024, this, '_wrap')._wrap(JSProf.LMC(12023, apc, 'apply').apply(JSProf.LRE(12021, t), JSProf.LRE(12022, m)), this);    // dojo/NodeList
        }, 12),
        map: JSProf.LNF(12030, function (func, obj) {
            // summary:
            //		see `dojo/_base/array.map()`. The primary difference is that the acted-on
            //		array is implicitly this NodeList and the return is a
            //		NodeList (a subclass of Array)
            return JSProf.LMC(12029, this, '_wrap')._wrap(JSProf.LMC(12028, array, 'map').map(this, JSProf.LRE(12026, func), JSProf.LRE(12027, obj)), this);    // dojo/NodeList
        }, 12),
        forEach: JSProf.LNF(12034, function (callback, thisObj) {
            // summary:
            //		see `dojo/_base/array.forEach()`. The primary difference is that the acted-on
            //		array is implicitly this NodeList. If you want the option to break out
            //		of the forEach loop, use every() or some() instead.
            JSProf.LFC(12033, forEach, false)(this, JSProf.LRE(12031, callback), JSProf.LRE(12032, thisObj));
            // non-standard return to allow easier chaining
            return this;    // dojo/NodeList
        }, 12),
        filter: JSProf.LNF(12048, function (filter) {
            // summary:
            //		"masks" the built-in javascript filter() method (supported
            //		in Dojo via `dojo/_base/array.filter`) to support passing a simple
            //		string filter in addition to supporting filtering function
            //		objects.
            // filter:
            //		If a string, a CSS rule like ".thinger" or "div > span".
            // example:
            //		"regular" JS filter syntax as exposed in `dojo/_base/array.filter`:
            //		|	require(["dojo/query", "dojo/NodeList-dom"
            //		|	], function(query){
            //		|		query("*").filter(function(item){
            //		|			// highlight every paragraph
            //		|			return (item.nodeName == "p");
            //		|		}).style("backgroundColor", "yellow");
            //		|	});
            // example:
            //		the same filtering using a CSS selector
            //		|	require(["dojo/query", "dojo/NodeList-dom"
            //		|	], function(query){
            //		|		query("*").filter("p").styles("backgroundColor", "yellow");
            //		|	});
            var a = arguments, items = this, start = 0;
            if (typeof JSProf.LRE(12035, filter) == "string") {
                // inline'd type check
                items = JSProf.LWR(12038, items, JSProf.LMC(12037, query, '_filterResult')._filterResult(this, JSProf.LGE(12036, a, 0)[0]));
                if (JSProf.LGD(12039, a, 'length').length == 1) {
                    // if we only got a string query, pass back the filtered results
                    return JSProf.LMC(12040, items, '_stash')._stash(this);    // dojo/NodeList
                }
                // if we got a callback, run it over the filtered items
                start = JSProf.LWR(12041, start, 1);
            }
            return JSProf.LMC(12047, this, '_wrap')._wrap(JSProf.LMC(12046, array, 'filter').filter(JSProf.LRE(12042, items), JSProf.LGE(12043, a, 'start')[start], JSProf.LGE(12045, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LRE(12044, start) + 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]), this);    // dojo/NodeList
        }, 12),
        instantiate: JSProf.LNF(12063, function (declaredClass, properties) {
            // summary:
            //		Create a new instance of a specified class, using the
            //		specified properties and each node in the NodeList as a
            //		srcNodeRef.
            // example:
            //		Grabs all buttons in the page and converts them to dijit/form/Button's.
            //	|	var buttons = query("button").instantiate(Button, {showLabel: true});
            var c = JSProf.LMC(12050, lang, 'isFunction').isFunction(JSProf.LRE(12049, declaredClass)) ? JSProf.LRE(12051, declaredClass) : JSProf.LMC(12053, lang, 'getObject').getObject(JSProf.LRE(12052, declaredClass));
            properties = JSProf.LWR(12056, properties, JSProf.LRE(12054, properties) || JSProf.LNE(12055, {}, 11));
            return JSProf.LMC(12062, this, 'forEach').forEach(JSProf.LNF(12061, function (node) {
                JSProf.LNE(12060, new (JSProf.LFC(12059, c, true))(JSProf.LRE(12057, properties), JSProf.LRE(12058, node)), 'c');
            }, 12));    // dojo/NodeList
        }, 12),
        at: JSProf.LNF(12076, function () {
            // summary:
            //		Returns a new NodeList comprised of items in this NodeList
            //		at the given index or indices.
            //
            // index: Integer...
            //		One or more 0-based indices of items in the current
            //		NodeList. A negative index will start at the end of the
            //		list and go backwards.
            //
            // example:
            //	Shorten the list to the first, second, and third elements
            //	|	require(["dojo/query"
            //	|	], function(query){
            //	|		query("a").at(0, 1, 2).forEach(fn);
            //	|	});
            //
            // example:
            //	Retrieve the first and last elements of a unordered list:
            //	|	require(["dojo/query"
            //	|	], function(query){
            //	|		query("ul > li").at(0, -1).forEach(cb);
            //	|	});
            //
            // example:
            //	Do something for the first element only, but end() out back to
            //	the original list and continue chaining:
            //	|	require(["dojo/query"
            //	|	], function(query){
            //	|		query("a").at(0).onclick(fn).end().forEach(function(n){
            //	|			console.log(n); // all anchors on the page.
            //	|	})
            //	|	});
            var t = JSProf.LNE(12065, new (JSProf.LMC(12064, this, '_NodeListCtor'))._NodeListCtor(0), 40);
            JSProf.LFC(12074, forEach, false)(arguments, JSProf.LNF(12073, function (i) {
                if (JSProf.LRE(12066, i) < 0) {
                    i = JSProf.LWR(12069, i, JSProf.LGD(12067, this, 'length').length + JSProf.LRE(12068, i));
                }
                if (JSProf.LGE(12070, this, 'i')[i]) {
                    JSProf.LMC(12072, t, 'push').push(JSProf.LGE(12071, this, 'i')[i]);
                }
            }, 12), this);
            return JSProf.LMC(12075, t, '_stash')._stash(this);    // dojo/NodeList
        }, 12)
    }, 11));
    function queryForEngine(engine, NodeList) {
        var query = JSProf.LNF(12104, function (query, root) {
                // summary:
                //		Returns nodes which match the given CSS selector, searching the
                //		entire document by default but optionally taking a node to scope
                //		the search by. Returns an instance of NodeList.
                if (typeof JSProf.LRE(12079, root) == "string") {
                    root = JSProf.LWR(12082, root, JSProf.LMC(12081, dom, 'byId').byId(JSProf.LRE(12080, root)));
                    if (!JSProf.LRE(12083, root)) {
                        return JSProf.LNE(12086, new (JSProf.LFC(12085, NodeList, true))(JSProf.LNE(12084, [], 10)), 'NodeList');
                    }
                }
                var results = typeof JSProf.LRE(12087, query) == "string" ? JSProf.LFC(12090, engine, false)(JSProf.LRE(12088, query), JSProf.LRE(12089, root)) : JSProf.LRE(12091, query) ? JSProf.LGD(12092, query, 'end').end && JSProf.LGD(12093, query, 'on').on ? JSProf.LRE(12094, query) : JSProf.LNE(12096, [JSProf.LRE(12095, query)], 10) : JSProf.LNE(12097, [], 10);
                if (JSProf.LGD(12098, results, 'end').end && JSProf.LGD(12099, results, 'on').on) {
                    // already wrapped
                    return JSProf.LRE(12100, results);
                }
                return JSProf.LNE(12103, new (JSProf.LFC(12102, NodeList, true))(JSProf.LRE(12101, results)), 'NodeList');
            }, 12);
        JSProf.LPD(12113, query, 'matches').matches = JSProf.LRSP(12113, JSProf.LGD(12105, engine, 'match').match || JSProf.LNF(12112, function (node, selector, root) {
            // summary:
            //		Test to see if a node matches a selector
            return JSProf.LGD(12111, JSProf.LMC(12110, query, 'filter').filter(JSProf.LNE(12107, [JSProf.LRE(12106, node)], 10), JSProf.LRE(12108, selector), JSProf.LRE(12109, root)), 'length').length > 0;
        }, 12));
        // the engine provides a filtering function, use it to for matching
        JSProf.LPD(12124, query, 'filter').filter = JSProf.LRSP(12124, JSProf.LGD(12114, engine, 'filter').filter || JSProf.LNF(12123, function (nodes, selector, root) {
            // summary:
            //		Filters an array of nodes. Note that this does not guarantee to return a NodeList, just an array.
            return JSProf.LMC(12122, JSProf.LFC(12117, query, false)(JSProf.LRE(12115, selector), JSProf.LRE(12116, root)), 'filter').filter(JSProf.LNF(12121, function (node) {
                return JSProf.LMC(12120, array, 'indexOf').indexOf(JSProf.LRE(12118, nodes), JSProf.LRE(12119, node)) > -1;
            }, 12));
        }, 12));
        if (typeof JSProf.LRE(12125, engine) != "function") {
            var search = JSProf.LGD(12126, engine, 'search').search;
            engine = JSProf.LWR(12132, engine, JSProf.LNF(12131, function (selector, root) {
                // Slick does it backwards (or everyone else does it backwards, probably the latter)
                return JSProf.LFC(12130, search, false)(JSProf.LRE(12127, root) || JSProf.LRU(12128, typeof document === 'undefined' ? undefined : document), JSProf.LRE(12129, selector));
            }, 12));
        }
        return JSProf.LRE(12133, query);
    }
    var query = JSProf.LFC(12136, queryForEngine, false)(JSProf.LRE(12134, defaultEngine), JSProf.LRE(12135, NodeList));
    /*=====
    	query = function(selector, context){
    		// summary:
    		//		This modules provides DOM querying functionality. The module export is a function
    		//		that can be used to query for DOM nodes by CSS selector and returns a NodeList
    		//		representing the matching nodes.
    		// selector: String
    		//		A CSS selector to search for.
    		// context: String|DomNode?
    		//		An optional context to limit the searching scope. Only nodes under `context` will be
    		//		scanned.
    		// example:
    		//		add an onclick handler to every submit button in the document
    		//		which causes the form to be sent via Ajax instead:
    		//	|	require(["dojo/query", "dojo/request", "dojo/dom-form", "dojo/dom-construct", "dojo/dom-style"
    		//	|	], function(query, request, domForm, domConstruct, domStyle){
    		//	|		query("input[type='submit']").on("click", function(e){
    		//	|			e.preventDefault(); // prevent sending the form
    		//	|			var btn = e.target;
    		//	|			request.post("http://example.com/", {
    		//	|				data: domForm.toObject(btn.form)
    		//	|			}).then(function(response){
    		//	|				// replace the form with the response
    		//	|				domConstruct.create(div, {innerHTML: response}, btn.form, "after");
    		//	|				domStyle.set(btn.form, "display", "none");
    		//	|			});
    		//	|		});
    		//	|	});
    		//
    		// description:
    		//		dojo/query is responsible for loading the appropriate query engine and wrapping
    		//		its results with a `NodeList`. You can use dojo/query with a specific selector engine
    		//		by using it as a plugin. For example, if you installed the sizzle package, you could
    		//		use it as the selector engine with:
    		//		|	require(["dojo/query!sizzle"], function(query){
    		//		|		query("div")...
    		//
    		//		The id after the ! can be a module id of the selector engine or one of the following values:
    		//
    		//		- acme: This is the default engine used by Dojo base, and will ensure that the full
    		//		Acme engine is always loaded.
    		//
    		//		- css2: If the browser has a native selector engine, this will be used, otherwise a
    		//		very minimal lightweight selector engine will be loaded that can do simple CSS2 selectors
    		//		(by #id, .class, tag, and [name=value] attributes, with standard child or descendant (>)
    		//		operators) and nothing more.
    		//
    		//		- css2.1: If the browser has a native selector engine, this will be used, otherwise the
    		//		full Acme engine will be loaded.
    		//
    		//		- css3: If the browser has a native selector engine with support for CSS3 pseudo
    		//		selectors (most modern browsers except IE8), this will be used, otherwise the
    		//		full Acme engine will be loaded.
    		//
    		//		- Or the module id of a selector engine can be used to explicitly choose the selector engine
    		//
    		//		For example, if you are using CSS3 pseudo selectors in module, you can specify that
    		//		you will need support them with:
    		//		|	require(["dojo/query!css3"], function(query){
    		//		|		query('#t > h3:nth-child(odd)')...
    		//
    		//		You can also choose the selector engine/load configuration by setting the query-selector:
    		//		For example:
    		//		|	<script data-dojo-config="query-selector:'css3'" src="dojo.js"></script>
    		//
    		return new NodeList(); // dojo/NodeList
    	 };
    	 =====*/
    // the query that is returned from this module is slightly different than dojo.query,
    // because dojo.query has to maintain backwards compatibility with returning a
    // true array which has performance problems. The query returned from the module
    // does not use true arrays, but rather inherits from Array, making it much faster to
    // instantiate.
    JSProf.LPD(12142, dojo, 'query').query = JSProf.LRSP(12142, JSProf.LFC(12141, queryForEngine, false)(JSProf.LRE(12137, defaultEngine), JSProf.LNF(12140, function (array) {
        // call it without the new operator to invoke the back-compat behavior that returns a true array
        return JSProf.LFC(12139, NodeList, false)(JSProf.LRE(12138, array));    // dojo/NodeList
    }, 12)));
    JSProf.LPD(12152, query, 'load').load = JSProf.LRSP(12152, JSProf.LNF(12151, function (id, parentRequire, loaded) {
        // summary:
        //		can be used as AMD plugin to conditionally load new query engine
        // example:
        //	|	require(["dojo/query!custom"], function(qsa){
        //	|		// loaded selector/custom.js as engine
        //	|		qsa("#foobar").forEach(...);
        //	|	});
        JSProf.LMC(12150, loader, 'load').load(JSProf.LRE(12143, id), JSProf.LRE(12144, parentRequire), JSProf.LNF(12149, function (engine) {
            JSProf.LFC(12148, loaded, false)(JSProf.LFC(12147, queryForEngine, false)(JSProf.LRE(12145, engine), JSProf.LRE(12146, NodeList)));
        }, 12));
    }, 12));
    JSProf.LPD(12161, dojo, '_filterQueryResult')._filterQueryResult = JSProf.LRSP(12161, JSProf.LPD(12160, query, '_filterResult')._filterResult = JSProf.LRSP(12160, JSProf.LNF(12159, function (nodes, selector, root) {
        return JSProf.LNE(12158, new (JSProf.LFC(12157, NodeList, true))(JSProf.LMC(12156, query, 'filter').filter(JSProf.LRE(12153, nodes), JSProf.LRE(12154, selector), JSProf.LRE(12155, root))), 'NodeList');
    }, 12)));
    JSProf.LPD(12164, dojo, 'NodeList').NodeList = JSProf.LRSP(12164, JSProf.LPD(12163, query, 'NodeList').NodeList = JSProf.LRSP(12163, JSProf.LRE(12162, NodeList)));
    return JSProf.LRE(12165, query);
}, 12));