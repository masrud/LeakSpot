JSProf.LFC(11697, define, false)(JSProf.LNE(11385, [
    "./_base/kernel",
    "./has",
    "./dom",
    "./on",
    "./_base/array",
    "./_base/lang",
    "./selector/_loader",
    "./selector/_loader!default"
], 10), JSProf.LNF(11696, function (dojo, has, dom, on, array, lang, loader, defaultEngine) {
    JSProf.LFD(11695, queryForEngine);
    "use strict";
    JSProf.LMC(11392, has, 'add').add("array-extensible", JSProf.LNF(11391, function () {
        // test to see if we can extend an array (not supported in old IE)
        return JSProf.LGD(11389, JSProf.LMC(11388, lang, 'delegate').delegate(JSProf.LNE(11386, [], 10), JSProf.LNE(11387, { length: 1 }, 11)), 'length').length == 1 && !JSProf.LFC(11390, has, false)("bug-for-in-skips-shadowed");
    }, 12));
    var ap = JSProf.LGD(11393, Array, 'prototype').prototype, aps = JSProf.LGD(11394, ap, 'slice').slice, apc = JSProf.LGD(11395, ap, 'concat').concat, forEach = JSProf.LGD(11396, array, 'forEach').forEach;
    var tnl = JSProf.LNF(11407, function (a, parent, NodeListCtor) {
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
            var nodeList = JSProf.LNE(11402, new (JSProf.LFC(11401, JSProf.LRE(11397, NodeListCtor) || JSProf.LGD(11398, this, '_NodeListCtor')._NodeListCtor || JSProf.LRE(11399, nl), true))(JSProf.LRE(11400, a)), 'LogicalExpression');
            return JSProf.LRE(11403, parent) ? JSProf.LMC(11405, nodeList, '_stash')._stash(JSProf.LRE(11404, parent)) : JSProf.LRE(11406, nodeList);
        }, 12);
    var loopBody = JSProf.LNF(11421, function (f, a, o) {
            a = JSProf.LWR(11411, a, JSProf.LNE(11408, [0], 10).concat(JSProf.LMC(11410, aps, 'call').call(JSProf.LRE(11409, a), 0)));
            o = JSProf.LWR(11414, o, JSProf.LRE(11412, o) || JSProf.LGD(11413, dojo, 'global').global);
            return JSProf.LNF(11420, function (node) {
                JSProf.LPE(11416, a, 0)[0] = JSProf.LRPE(11416, JSProf.LRE(11415, node));
                return JSProf.LMC(11419, f, 'apply').apply(JSProf.LRE(11417, o), JSProf.LRE(11418, a));
            }, 12);
        }, 12);
    // adapters
    var adaptAsForEach = JSProf.LNF(11427, function (f, o) {
            // summary:
            //		adapts a single node function to be used in the forEach-type
            //		actions. The initial object is returned from the specialized
            //		function.
            // f: Function
            //		a function to adapt
            // o: Object?
            //		an optional context for f
            return JSProf.LNF(11426, function () {
                JSProf.LMC(11425, this, 'forEach').forEach(JSProf.LFC(11424, loopBody, false)(JSProf.LRE(11422, f), arguments, JSProf.LRE(11423, o)));
                return this;    // Object
            }, 12);
        }, 12);
    var adaptAsMap = JSProf.LNF(11433, function (f, o) {
            // summary:
            //		adapts a single node function to be used in the map-type
            //		actions. The return is a new array of values, as via `dojo/_base/array.map`
            // f: Function
            //		a function to adapt
            // o: Object?
            //		an optional context for f
            return JSProf.LNF(11432, function () {
                return JSProf.LMC(11431, this, 'map').map(JSProf.LFC(11430, loopBody, false)(JSProf.LRE(11428, f), arguments, JSProf.LRE(11429, o)));
            }, 12);
        }, 12);
    var adaptAsFilter = JSProf.LNF(11439, function (f, o) {
            // summary:
            //		adapts a single node function to be used in the filter-type actions
            // f: Function
            //		a function to adapt
            // o: Object?
            //		an optional context for f
            return JSProf.LNF(11438, function () {
                return JSProf.LMC(11437, this, 'filter').filter(JSProf.LFC(11436, loopBody, false)(JSProf.LRE(11434, f), arguments, JSProf.LRE(11435, o)));
            }, 12);
        }, 12);
    var adaptWithCondition = JSProf.LNF(11453, function (f, g, o) {
            // summary:
            //		adapts a single node function to be used in the map-type
            //		actions, behaves like forEach() or map() depending on arguments
            // f: Function
            //		a function to adapt
            // g: Function
            //		a condition function, if true runs as map(), otherwise runs as forEach()
            // o: Object?
            //		an optional context for f and g
            return JSProf.LNF(11452, function () {
                var a = arguments, body = JSProf.LFC(11443, loopBody, false)(JSProf.LRE(11440, f), JSProf.LRE(11441, a), JSProf.LRE(11442, o));
                if (JSProf.LMC(11447, g, 'call').call(JSProf.LRE(11444, o) || JSProf.LGD(11445, dojo, 'global').global, JSProf.LRE(11446, a))) {
                    return JSProf.LMC(11449, this, 'map').map(JSProf.LRE(11448, body));    // self
                }
                JSProf.LMC(11451, this, 'forEach').forEach(JSProf.LRE(11450, body));
                return this;    // self
            }, 12);
        }, 12);
    var NodeList = JSProf.LNF(11485, function (array) {
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
            var isNew = this instanceof JSProf.LRE(11454, nl) && JSProf.LFC(11455, has, false)("array-extensible");
            if (typeof JSProf.LRE(11456, array) == "number") {
                array = JSProf.LWR(11459, array, JSProf.LFC(11458, Array, false)(JSProf.LRE(11457, array)));
            }
            var nodeArray = JSProf.LRE(11460, array) && "length" in JSProf.LRE(11461, array) ? JSProf.LRE(11462, array) : arguments;
            if (JSProf.LRE(11463, isNew) || !JSProf.LGD(11464, nodeArray, 'sort').sort) {
                // make sure it's a real array before we pass it on to be wrapped 
                var target = JSProf.LRE(11465, isNew) ? this : JSProf.LNE(11466, [], 10), l = JSProf.LPD(11468, target, 'length').length = JSProf.LRSP(11468, JSProf.LGD(11467, nodeArray, 'length').length);
                for (var i = 0; JSProf.LRE(11469, i) < JSProf.LRE(11470, l); i++) {
                    JSProf.LPE(11472, target, 'i')[i] = JSProf.LRPE(11472, JSProf.LGE(11471, nodeArray, 'i')[i]);
                }
                if (JSProf.LRE(11473, isNew)) {
                    // called with new operator, this means we are going to use this instance and push
                    // the nodes on to it. This is usually much faster since the NodeList properties
                    //	don't need to be copied (unless the list of nodes is extremely large).
                    return JSProf.LRE(11474, target);
                }
                nodeArray = JSProf.LWR(11476, nodeArray, JSProf.LRE(11475, target));
            }
            // called without new operator, use a real array and copy prototype properties,
            // this is slower and exists for back-compat. Should be removed in 2.0.
            JSProf.LMC(11479, lang, '_mixin')._mixin(JSProf.LRE(11477, nodeArray), JSProf.LRE(11478, nlp));
            JSProf.LPD(11483, nodeArray, '_NodeListCtor')._NodeListCtor = JSProf.LRSP(11483, JSProf.LNF(11482, function (array) {
                // call without new operator to preserve back-compat behavior
                return JSProf.LFC(11481, nl, false)(JSProf.LRE(11480, array));
            }, 12));
            return JSProf.LRE(11484, nodeArray);
        }, 12);
    var nl = JSProf.LRE(11486, NodeList), nlp = JSProf.LPD(11490, nl, 'prototype').prototype = JSProf.LRSP(11490, JSProf.LFC(11487, has, false)("array-extensible") ? JSProf.LNE(11488, [], 10) : JSProf.LNE(11489, {}, 11));
    // extend an array if it is extensible
    // expose adapters and the wrapper as private functions
    JSProf.LPD(11493, nl, '_wrap')._wrap = JSProf.LRSP(11493, JSProf.LPD(11492, nlp, '_wrap')._wrap = JSProf.LRSP(11492, JSProf.LRE(11491, tnl)));
    JSProf.LPD(11495, nl, '_adaptAsMap')._adaptAsMap = JSProf.LRSP(11495, JSProf.LRE(11494, adaptAsMap));
    JSProf.LPD(11497, nl, '_adaptAsForEach')._adaptAsForEach = JSProf.LRSP(11497, JSProf.LRE(11496, adaptAsForEach));
    JSProf.LPD(11499, nl, '_adaptAsFilter')._adaptAsFilter = JSProf.LRSP(11499, JSProf.LRE(11498, adaptAsFilter));
    JSProf.LPD(11501, nl, '_adaptWithCondition')._adaptWithCondition = JSProf.LRSP(11501, JSProf.LRE(11500, adaptWithCondition));
    // mass assignment
    // add array redirectors
    JSProf.LFC(11510, forEach, false)(JSProf.LNE(11502, [
        "slice",
        "splice"
    ], 10), JSProf.LNF(11509, function (name) {
        var f = JSProf.LGE(11503, ap, 'name')[name];
        //Use a copy of the this array via this.slice() to allow .end() to work right in the splice case.
        // CANNOT apply ._stash()/end() to splice since it currently modifies
        // the existing this array -- it would break backward compatibility if we copy the array before
        // the splice so that we can use .end(). So only doing the stash option to this._wrap for slice.
        JSProf.LPE(11508, nlp, 'name')[name] = JSProf.LRPE(11508, JSProf.LNF(11507, function () {
            return JSProf.LMC(11506, this, '_wrap')._wrap(JSProf.LMC(11504, f, 'apply').apply(this, arguments), JSProf.LRE(11505, name) == "slice" ? this : null);
        }, 12));
    }, 12));
    // concat should be here but some browsers with native NodeList have problems with it
    // add array.js redirectors
    JSProf.LFC(11520, forEach, false)(JSProf.LNE(11511, [
        "indexOf",
        "lastIndexOf",
        "every",
        "some"
    ], 10), JSProf.LNF(11519, function (name) {
        var f = JSProf.LGE(11512, array, 'name')[name];
        JSProf.LPE(11518, nlp, 'name')[name] = JSProf.LRPE(11518, JSProf.LNF(11517, function () {
            return JSProf.LMC(11516, f, 'apply').apply(JSProf.LRE(11513, dojo), JSProf.LNE(11514, [this], 10).concat(JSProf.LMC(11515, aps, 'call').call(arguments, 0)));
        }, 12));
    }, 12));
    JSProf.LMC(11607, lang, 'extend').extend(JSProf.LRE(11521, NodeList), JSProf.LNE(11606, {
        constructor: nl,
        _NodeListCtor: nl,
        toString: JSProf.LNF(11523, function () {
            // Array.prototype.toString can't be applied to objects, so we use join
            return JSProf.LMC(11522, this, 'join').join(",");
        }, 12),
        _stash: JSProf.LNF(11526, function (parent) {
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
            JSProf.LPD(11525, this, '_parent')._parent = JSProf.LRSP(11525, JSProf.LRE(11524, parent));
            return this;    // dojo/NodeList
        }, 12),
        on: JSProf.LNF(11539, function (eventName, listener) {
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
            var handles = JSProf.LMC(11532, this, 'map').map(JSProf.LNF(11531, function (node) {
                    return JSProf.LFC(11530, on, false)(JSProf.LRE(11527, node), JSProf.LRE(11528, eventName), JSProf.LRE(11529, listener));    // TODO: apply to the NodeList so the same selector engine is used for matches
                }, 12));
            JSProf.LPD(11537, handles, 'remove').remove = JSProf.LRSP(11537, JSProf.LNF(11536, function () {
                for (var i = 0; JSProf.LRE(11533, i) < JSProf.LGD(11534, handles, 'length').length; i++) {
                    JSProf.LMC(11535, handles[i], 'remove').remove();
                }
            }, 12));
            return JSProf.LRE(11538, handles);
        }, 12),
        end: JSProf.LNF(11544, function () {
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
            if (JSProf.LGD(11540, this, '_parent')._parent) {
                return JSProf.LGD(11541, this, '_parent')._parent;
            } else {
                //Just return empty list.
                return JSProf.LNE(11543, new (JSProf.LMC(11542, this, '_NodeListCtor'))._NodeListCtor(0), 40);
            }
        }, 12),
        concat: JSProf.LNF(11554, function (item) {
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
            var t = JSProf.LMC(11545, aps, 'call').call(this, 0), m = JSProf.LMC(11549, array, 'map').map(arguments, JSProf.LNF(11548, function (a) {
                    return JSProf.LMC(11547, aps, 'call').call(JSProf.LRE(11546, a), 0);
                }, 12));
            return JSProf.LMC(11553, this, '_wrap')._wrap(JSProf.LMC(11552, apc, 'apply').apply(JSProf.LRE(11550, t), JSProf.LRE(11551, m)), this);    // dojo/NodeList
        }, 12),
        map: JSProf.LNF(11559, function (func, obj) {
            // summary:
            //		see `dojo/_base/array.map()`. The primary difference is that the acted-on
            //		array is implicitly this NodeList and the return is a
            //		NodeList (a subclass of Array)
            return JSProf.LMC(11558, this, '_wrap')._wrap(JSProf.LMC(11557, array, 'map').map(this, JSProf.LRE(11555, func), JSProf.LRE(11556, obj)), this);    // dojo/NodeList
        }, 12),
        forEach: JSProf.LNF(11563, function (callback, thisObj) {
            // summary:
            //		see `dojo/_base/array.forEach()`. The primary difference is that the acted-on
            //		array is implicitly this NodeList. If you want the option to break out
            //		of the forEach loop, use every() or some() instead.
            JSProf.LFC(11562, forEach, false)(this, JSProf.LRE(11560, callback), JSProf.LRE(11561, thisObj));
            // non-standard return to allow easier chaining
            return this;    // dojo/NodeList
        }, 12),
        filter: JSProf.LNF(11577, function (filter) {
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
            if (typeof JSProf.LRE(11564, filter) == "string") {
                // inline'd type check
                items = JSProf.LWR(11567, items, JSProf.LMC(11566, query, '_filterResult')._filterResult(this, JSProf.LGE(11565, a, 0)[0]));
                if (JSProf.LGD(11568, a, 'length').length == 1) {
                    // if we only got a string query, pass back the filtered results
                    return JSProf.LMC(11569, items, '_stash')._stash(this);    // dojo/NodeList
                }
                // if we got a callback, run it over the filtered items
                start = JSProf.LWR(11570, start, 1);
            }
            return JSProf.LMC(11576, this, '_wrap')._wrap(JSProf.LMC(11575, array, 'filter').filter(JSProf.LRE(11571, items), JSProf.LGE(11572, a, 'start')[start], JSProf.LGE(11574, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LRE(11573, start) + 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]), this);    // dojo/NodeList
        }, 12),
        instantiate: JSProf.LNF(11592, function (declaredClass, properties) {
            // summary:
            //		Create a new instance of a specified class, using the
            //		specified properties and each node in the NodeList as a
            //		srcNodeRef.
            // example:
            //		Grabs all buttons in the page and converts them to dijit/form/Button's.
            //	|	var buttons = query("button").instantiate(Button, {showLabel: true});
            var c = JSProf.LMC(11579, lang, 'isFunction').isFunction(JSProf.LRE(11578, declaredClass)) ? JSProf.LRE(11580, declaredClass) : JSProf.LMC(11582, lang, 'getObject').getObject(JSProf.LRE(11581, declaredClass));
            properties = JSProf.LWR(11585, properties, JSProf.LRE(11583, properties) || JSProf.LNE(11584, {}, 11));
            return JSProf.LMC(11591, this, 'forEach').forEach(JSProf.LNF(11590, function (node) {
                JSProf.LNE(11589, new (JSProf.LFC(11588, c, true))(JSProf.LRE(11586, properties), JSProf.LRE(11587, node)), 'c');
            }, 12));    // dojo/NodeList
        }, 12),
        at: JSProf.LNF(11605, function () {
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
            var t = JSProf.LNE(11594, new (JSProf.LMC(11593, this, '_NodeListCtor'))._NodeListCtor(0), 40);
            JSProf.LFC(11603, forEach, false)(arguments, JSProf.LNF(11602, function (i) {
                if (JSProf.LRE(11595, i) < 0) {
                    i = JSProf.LWR(11598, i, JSProf.LGD(11596, this, 'length').length + JSProf.LRE(11597, i));
                }
                if (JSProf.LGE(11599, this, 'i')[i]) {
                    JSProf.LMC(11601, t, 'push').push(JSProf.LGE(11600, this, 'i')[i]);
                }
            }, 12), this);
            return JSProf.LMC(11604, t, '_stash')._stash(this);    // dojo/NodeList
        }, 12)
    }, 11));
    function queryForEngine(engine, NodeList) {
        var query = JSProf.LNF(11633, function (query, root) {
                // summary:
                //		Returns nodes which match the given CSS selector, searching the
                //		entire document by default but optionally taking a node to scope
                //		the search by. Returns an instance of NodeList.
                if (typeof JSProf.LRE(11608, root) == "string") {
                    root = JSProf.LWR(11611, root, JSProf.LMC(11610, dom, 'byId').byId(JSProf.LRE(11609, root)));
                    if (!JSProf.LRE(11612, root)) {
                        return JSProf.LNE(11615, new (JSProf.LFC(11614, NodeList, true))(JSProf.LNE(11613, [], 10)), 'NodeList');
                    }
                }
                var results = typeof JSProf.LRE(11616, query) == "string" ? JSProf.LFC(11619, engine, false)(JSProf.LRE(11617, query), JSProf.LRE(11618, root)) : JSProf.LRE(11620, query) ? JSProf.LGD(11621, query, 'end').end && JSProf.LGD(11622, query, 'on').on ? JSProf.LRE(11623, query) : JSProf.LNE(11625, [JSProf.LRE(11624, query)], 10) : JSProf.LNE(11626, [], 10);
                if (JSProf.LGD(11627, results, 'end').end && JSProf.LGD(11628, results, 'on').on) {
                    // already wrapped
                    return JSProf.LRE(11629, results);
                }
                return JSProf.LNE(11632, new (JSProf.LFC(11631, NodeList, true))(JSProf.LRE(11630, results)), 'NodeList');
            }, 12);
        JSProf.LPD(11642, query, 'matches').matches = JSProf.LRSP(11642, JSProf.LGD(11634, engine, 'match').match || JSProf.LNF(11641, function (node, selector, root) {
            // summary:
            //		Test to see if a node matches a selector
            return JSProf.LGD(11640, JSProf.LMC(11639, query, 'filter').filter(JSProf.LNE(11636, [JSProf.LRE(11635, node)], 10), JSProf.LRE(11637, selector), JSProf.LRE(11638, root)), 'length').length > 0;
        }, 12));
        // the engine provides a filtering function, use it to for matching
        JSProf.LPD(11653, query, 'filter').filter = JSProf.LRSP(11653, JSProf.LGD(11643, engine, 'filter').filter || JSProf.LNF(11652, function (nodes, selector, root) {
            // summary:
            //		Filters an array of nodes. Note that this does not guarantee to return a NodeList, just an array.
            return JSProf.LMC(11651, JSProf.LFC(11646, query, false)(JSProf.LRE(11644, selector), JSProf.LRE(11645, root)), 'filter').filter(JSProf.LNF(11650, function (node) {
                return JSProf.LMC(11649, array, 'indexOf').indexOf(JSProf.LRE(11647, nodes), JSProf.LRE(11648, node)) > -1;
            }, 12));
        }, 12));
        if (typeof JSProf.LRE(11654, engine) != "function") {
            var search = JSProf.LGD(11655, engine, 'search').search;
            engine = JSProf.LWR(11661, engine, JSProf.LNF(11660, function (selector, root) {
                // Slick does it backwards (or everyone else does it backwards, probably the latter)
                return JSProf.LFC(11659, search, false)(JSProf.LRE(11656, root) || JSProf.LRU(11657, typeof document === 'undefined' ? undefined : document), JSProf.LRE(11658, selector));
            }, 12));
        }
        return JSProf.LRE(11662, query);
    }
    var query = JSProf.LFC(11665, queryForEngine, false)(JSProf.LRE(11663, defaultEngine), JSProf.LRE(11664, NodeList));
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
    JSProf.LPD(11671, dojo, 'query').query = JSProf.LRSP(11671, JSProf.LFC(11670, queryForEngine, false)(JSProf.LRE(11666, defaultEngine), JSProf.LNF(11669, function (array) {
        // call it without the new operator to invoke the back-compat behavior that returns a true array
        return JSProf.LFC(11668, NodeList, false)(JSProf.LRE(11667, array));    // dojo/NodeList
    }, 12)));
    JSProf.LPD(11681, query, 'load').load = JSProf.LRSP(11681, JSProf.LNF(11680, function (id, parentRequire, loaded) {
        // summary:
        //		can be used as AMD plugin to conditionally load new query engine
        // example:
        //	|	require(["dojo/query!custom"], function(qsa){
        //	|		// loaded selector/custom.js as engine
        //	|		qsa("#foobar").forEach(...);
        //	|	});
        JSProf.LMC(11679, loader, 'load').load(JSProf.LRE(11672, id), JSProf.LRE(11673, parentRequire), JSProf.LNF(11678, function (engine) {
            JSProf.LFC(11677, loaded, false)(JSProf.LFC(11676, queryForEngine, false)(JSProf.LRE(11674, engine), JSProf.LRE(11675, NodeList)));
        }, 12));
    }, 12));
    JSProf.LPD(11690, dojo, '_filterQueryResult')._filterQueryResult = JSProf.LRSP(11690, JSProf.LPD(11689, query, '_filterResult')._filterResult = JSProf.LRSP(11689, JSProf.LNF(11688, function (nodes, selector, root) {
        return JSProf.LNE(11687, new (JSProf.LFC(11686, NodeList, true))(JSProf.LMC(11685, query, 'filter').filter(JSProf.LRE(11682, nodes), JSProf.LRE(11683, selector), JSProf.LRE(11684, root))), 'NodeList');
    }, 12)));
    JSProf.LPD(11693, dojo, 'NodeList').NodeList = JSProf.LRSP(11693, JSProf.LPD(11692, query, 'NodeList').NodeList = JSProf.LRSP(11692, JSProf.LRE(11691, NodeList)));
    return JSProf.LRE(11694, query);
}, 12));