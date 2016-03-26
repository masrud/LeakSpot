JSProf.LFC(22762, define, false)(JSProf.LNE(22564, [
    "./_base/kernel",
    "./query",
    "./_base/array",
    "./_base/lang",
    "./dom-class",
    "./dom-construct",
    "./dom-geometry",
    "./dom-attr",
    "./dom-style"
], 10), JSProf.LNF(22761, function (dojo, query, array, lang, domCls, domCtr, domGeom, domAttr, domStyle) {
    JSProf.LFD(22760, getSet);
    // module:
    //		dojo/NodeList-dom.js
    /*=====
    return function(){
     // summary:
     //		Adds DOM related methods to NodeList, and returns NodeList constructor.
    };
    =====*/
    var magicGuard = JSProf.LNF(22567, function (a) {
            // summary:
            //		the guard function for dojo/dom-attr() and dojo/dom-style()
            return JSProf.LGD(22565, a, 'length').length == 1 && typeof JSProf.LGE(22566, a, 0)[0] == "string";    // inline'd type check
        }, 12);
    var orphan = JSProf.LNF(22572, function (node) {
            // summary:
            //		function to orphan nodes
            var p = JSProf.LGD(22568, node, 'parentNode').parentNode;
            if (JSProf.LRE(22569, p)) {
                JSProf.LMC(22571, p, 'removeChild').removeChild(JSProf.LRE(22570, node));
            }
        }, 12);
    // FIXME: should we move orphan() to dojo/_base/html?
    var NodeList = JSProf.LGD(22573, query, 'NodeList').NodeList, awc = JSProf.LGD(22574, NodeList, '_adaptWithCondition')._adaptWithCondition, aafe = JSProf.LGD(22575, NodeList, '_adaptAsForEach')._adaptAsForEach, aam = JSProf.LGD(22576, NodeList, '_adaptAsMap')._adaptAsMap;
    function getSet(module) {
        return JSProf.LNF(22586, function (node, name, value) {
            if (JSProf.LGD(22577, arguments, 'length').length == 2) {
                return JSProf.LMC(22581, module, JSProf.TMPS.te3fceb21438428d0cdbcf188c44a9f78ed75fb8f = typeof JSProf.LRE(22578, name) == "string" ? "get" : "set", 1)[JSProf.TMPS.te3fceb21438428d0cdbcf188c44a9f78ed75fb8f](JSProf.LRE(22579, node), JSProf.LRE(22580, name));
            }
            // setter
            return JSProf.LMC(22585, module, 'set').set(JSProf.LRE(22582, node), JSProf.LRE(22583, name), JSProf.LRE(22584, value));
        }, 12);
    }
    JSProf.LMC(22758, lang, 'extend').extend(JSProf.LRE(22587, NodeList), JSProf.LNE(22757, {
        _normalize: JSProf.LNF(22627, function (content, refNode) {
            // summary:
            //		normalizes data to an array of items to insert.
            // description:
            //		If content is an object, it can have special properties "template" and
            //		"parse". If "template" is defined, then the template value is run through
            //		dojo/string.substitute (if dojo/string.substitute() has been required elsewhere),
            //		or if templateFunc is a function on the content, that function will be used to
            //		transform the template into a final string to be used for for passing to dojo/dom-construct.toDom().
            //		If content.parse is true, then it is remembered for later, for when the content
            //		nodes are inserted into the DOM. At that point, the nodes will be parsed for widgets
            //		(if dojo/parser has been required elsewhere).
            //Wanted to just use a DocumentFragment, but for the array/NodeList
            //case that meant using cloneNode, but we may not want that.
            //Cloning should only happen if the node operations span
            //multiple refNodes. Also, need a real array, not a NodeList from the
            //DOM since the node movements could change those NodeLists.
            var parse = JSProf.LGD(22588, content, 'parse').parse === true;
            //Do we have an object that needs to be run through a template?
            if (typeof JSProf.LGD(22589, content, 'template').template == "string") {
                var templateFunc = JSProf.LGD(22590, content, 'templateFunc').templateFunc || JSProf.LGD(22591, dojo, 'string').string && JSProf.LGD(22592, dojo.string, 'substitute').substitute;
                content = JSProf.LWR(22598, content, JSProf.LRE(22593, templateFunc) ? JSProf.LFC(22596, templateFunc, false)(JSProf.LGD(22594, content, 'template').template, JSProf.LRE(22595, content)) : JSProf.LRE(22597, content));
            }
            var type = typeof JSProf.LRE(22599, content);
            if (JSProf.LRE(22600, type) == "string" || JSProf.LRE(22601, type) == "number") {
                content = JSProf.LWR(22606, content, JSProf.LMC(22605, domCtr, 'toDom').toDom(JSProf.LRE(22602, content), JSProf.LRE(22603, refNode) && JSProf.LGD(22604, refNode, 'ownerDocument').ownerDocument));
                if (JSProf.LGD(22607, content, 'nodeType').nodeType == 11) {
                    //DocumentFragment. It cannot handle cloneNode calls, so pull out the children.
                    content = JSProf.LWR(22610, content, JSProf.LMC(22609, lang, '_toArray')._toArray(JSProf.LGD(22608, content, 'childNodes').childNodes));
                } else {
                    content = JSProf.LWR(22613, content, JSProf.LNE(22612, [JSProf.LRE(22611, content)], 10));
                }
            } else if (!JSProf.LMC(22615, lang, 'isArrayLike').isArrayLike(JSProf.LRE(22614, content))) {
                content = JSProf.LWR(22618, content, JSProf.LNE(22617, [JSProf.LRE(22616, content)], 10));
            } else if (!JSProf.LMC(22620, lang, 'isArray').isArray(JSProf.LRE(22619, content))) {
                //To get to this point, content is array-like, but
                //not an array, which likely means a DOM NodeList. Convert it now.
                content = JSProf.LWR(22623, content, JSProf.LMC(22622, lang, '_toArray')._toArray(JSProf.LRE(22621, content)));
            }
            //Pass around the parse info
            if (JSProf.LRE(22624, parse)) {
                JSProf.LPD(22625, content, '_runParse')._runParse = JSProf.LRSP(22625, true);
            }
            return JSProf.LRE(22626, content);    //Array
        }, 12),
        _cloneNode: JSProf.LNF(22629, function (node) {
            // summary:
            //		private utility to clone a node. Not very interesting in the vanilla
            //		dojo/NodeList case, but delegates could do interesting things like
            //		clone event handlers if that is derivable from the node.
            return JSProf.LMC(22628, node, 'cloneNode').cloneNode(true);
        }, 12),
        _place: JSProf.LNF(22665, function (ary, refNode, position, useClone) {
            // summary:
            //		private utility to handle placing an array of nodes relative to another node.
            // description:
            //		Allows for cloning the nodes in the array, and for
            //		optionally parsing widgets, if ary._runParse is true.
            //Avoid a disallowed operation if trying to do an innerHTML on a non-element node.
            if (JSProf.LGD(22630, refNode, 'nodeType').nodeType != 1 && JSProf.LRE(22631, position) == "only") {
                return;
            }
            var rNode = JSProf.LRE(22632, refNode), tempNode;
            //Always cycle backwards in case the array is really a
            //DOM NodeList and the DOM operations take it out of the live collection.
            var length = JSProf.LGD(22633, ary, 'length').length;
            for (var i = JSProf.LRE(22634, length) - 1; JSProf.LRE(22635, i) >= 0; i--) {
                var node = JSProf.LRE(22636, useClone) ? JSProf.LMC(22638, this, '_cloneNode')._cloneNode(JSProf.LGE(22637, ary, 'i')[i]) : JSProf.LGE(22639, ary, 'i')[i];
                //If need widget parsing, use a temp node, instead of waiting after inserting into
                //real DOM because we need to start widget parsing at one node up from current node,
                //which could cause some already parsed widgets to be parsed again.
                if (JSProf.LGD(22640, ary, '_runParse')._runParse && JSProf.LGD(22641, dojo, 'parser').parser && JSProf.LGD(22642, dojo.parser, 'parse').parse) {
                    if (!JSProf.LRE(22643, tempNode)) {
                        tempNode = JSProf.LWR(22645, tempNode, JSProf.LMC(22644, rNode.ownerDocument, 'createElement').createElement("div"));
                    }
                    JSProf.LMC(22647, tempNode, 'appendChild').appendChild(JSProf.LRE(22646, node));
                    JSProf.LMC(22649, dojo.parser, 'parse').parse(JSProf.LRE(22648, tempNode));
                    node = JSProf.LWR(22651, node, JSProf.LGD(22650, tempNode, 'firstChild').firstChild);
                    while (JSProf.LGD(22652, tempNode, 'firstChild').firstChild) {
                        JSProf.LMC(22654, tempNode, 'removeChild').removeChild(JSProf.LGD(22653, tempNode, 'firstChild').firstChild);
                    }
                }
                if (JSProf.LRE(22655, i) == JSProf.LRE(22656, length) - 1) {
                    JSProf.LMC(22660, domCtr, 'place').place(JSProf.LRE(22657, node), JSProf.LRE(22658, rNode), JSProf.LRE(22659, position));
                } else {
                    rNode.parentNode.insertBefore(JSProf.LRE(22661, node), JSProf.LRE(22662, rNode));
                }
                rNode = JSProf.LWR(22664, rNode, JSProf.LRE(22663, node));
            }
        }, 12),
        position: JSProf.LFC(22667, aam, false)(JSProf.LGD(22666, domGeom, 'position').position),
        attr: JSProf.LFC(22671, awc, false)(JSProf.LFC(22669, getSet, false)(JSProf.LRE(22668, domAttr)), JSProf.LRE(22670, magicGuard)),
        style: JSProf.LFC(22675, awc, false)(JSProf.LFC(22673, getSet, false)(JSProf.LRE(22672, domStyle)), JSProf.LRE(22674, magicGuard)),
        addClass: JSProf.LFC(22677, aafe, false)(JSProf.LGD(22676, domCls, 'add').add),
        removeClass: JSProf.LFC(22679, aafe, false)(JSProf.LGD(22678, domCls, 'remove').remove),
        toggleClass: JSProf.LFC(22681, aafe, false)(JSProf.LGD(22680, domCls, 'toggle').toggle),
        replaceClass: JSProf.LFC(22683, aafe, false)(JSProf.LGD(22682, domCls, 'replace').replace),
        empty: JSProf.LFC(22685, aafe, false)(JSProf.LGD(22684, domCtr, 'empty').empty),
        removeAttr: JSProf.LFC(22687, aafe, false)(JSProf.LGD(22686, domAttr, 'remove').remove),
        marginBox: JSProf.LFC(22689, aam, false)(JSProf.LGD(22688, domGeom, 'getMarginBox').getMarginBox),
        place: JSProf.LNF(22699, function (queryOrNode, position) {
            // summary:
            //		places elements of this node list relative to the first element matched
            //		by queryOrNode. Returns the original NodeList. See: `dojo/dom-construct.place`
            // queryOrNode:
            //		may be a string representing any valid CSS3 selector or a DOM node.
            //		In the selector case, only the first matching element will be used
            //		for relative positioning.
            // position:
            //		can be one of:
            //
            //		-	"last" (default)
            //		-	"first"
            //		-	"before"
            //		-	"after"
            //		-	"only"
            //		-	"replace"
            //
            //		or an offset in the childNodes property
            var item = JSProf.LGE(22692, JSProf.LFC(22691, query, false)(JSProf.LRE(22690, queryOrNode)), 0)[0];
            return JSProf.LMC(22698, this, 'forEach').forEach(JSProf.LNF(22697, function (node) {
                JSProf.LMC(22696, domCtr, 'place').place(JSProf.LRE(22693, node), JSProf.LRE(22694, item), JSProf.LRE(22695, position));
            }, 12));    // dojo/NodeList
        }, 12),
        orphan: JSProf.LNF(22705, function (filter) {
            // summary:
            //		removes elements in this list that match the filter
            //		from their parents and returns them as a new NodeList.
            // filter:
            //		CSS selector like ".foo" or "div > span"
            // returns:
            //		NodeList containing the orphaned elements
            return JSProf.LMC(22704, JSProf.LRE(22700, filter) ? JSProf.LMC(22702, query, '_filterResult')._filterResult(this, JSProf.LRE(22701, filter)) : this, 'forEach').forEach(JSProf.LRE(22703, orphan));    // dojo/NodeList
        }, 12),
        adopt: JSProf.LNF(22712, function (queryOrListOrNode, position) {
            // summary:
            //		places any/all elements in queryOrListOrNode at a
            //		position relative to the first element in this list.
            //		Returns a dojo/NodeList of the adopted elements.
            // queryOrListOrNode:
            //		a DOM node or a query string or a query result.
            //		Represents the nodes to be adopted relative to the
            //		first element of this NodeList.
            // position:
            //		can be one of:
            //
            //		-	"last" (default)
            //		-	"first"
            //		-	"before"
            //		-	"after"
            //		-	"only"
            //		-	"replace"
            //
            //		or an offset in the childNodes property
            return JSProf.LMC(22711, JSProf.LMC(22710, JSProf.LFC(22707, query, false)(JSProf.LRE(22706, queryOrListOrNode)), 'place').place(JSProf.LGE(22708, this, 0)[0], JSProf.LRE(22709, position)), '_stash')._stash(this);    // dojo/NodeList
        }, 12),
        query: JSProf.LNF(22727, function (queryStr) {
            // summary:
            //		Returns a new list whose members match the passed query,
            //		assuming elements of the current NodeList as the root for
            //		each search.
            // example:
            //		assume a DOM created by this markup:
            //	|	<div id="foo">
            //	|		<p>
            //	|			bacon is tasty, <span>dontcha think?</span>
            //	|		</p>
            //	|	</div>
            //	|	<div id="bar">
            //	|		<p>great comedians may not be funny <span>in person</span></p>
            //	|	</div>
            //		If we are presented with the following definition for a NodeList:
            //	|	require(["dojo/dom", "dojo/query", "dojo/NodeList-dom"
            //	|	], function(dom, query){
            //	|		var l = new NodeList(dom.byId("foo"), dom.byId("bar"));
            //		it's possible to find all span elements under paragraphs
            //		contained by these elements with this sub-query:
            //	|		var spans = l.query("p span");
            //	|	});
            // FIXME: probably slow
            if (!JSProf.LRE(22713, queryStr)) {
                return this;
            }
            var ret = JSProf.LNE(22715, new (JSProf.LFC(22714, NodeList, true))(), 'NodeList');
            JSProf.LMC(22725, this, 'map').map(JSProf.LNF(22724, function (node) {
                // FIXME: why would we ever get undefined here?
                JSProf.LMC(22723, JSProf.LFC(22718, query, false)(JSProf.LRE(22716, queryStr), JSProf.LRE(22717, node)), 'forEach').forEach(JSProf.LNF(22722, function (subNode) {
                    if (JSProf.LRE(22719, subNode) !== undefined) {
                        JSProf.LMC(22721, ret, 'push').push(JSProf.LRE(22720, subNode));
                    }
                }, 12));
            }, 12));
            return JSProf.LMC(22726, ret, '_stash')._stash(this);    // dojo/NodeList
        }, 12),
        filter: JSProf.LNF(22741, function (filter) {
            // summary:
            //		"masks" the built-in javascript filter() method (supported
            //		in Dojo via `dojo.filter`) to support passing a simple
            //		string filter in addition to supporting filtering function
            //		objects.
            // filter:
            //		If a string, a CSS rule like ".thinger" or "div > span".
            // example:
            //		"regular" JS filter syntax as exposed in dojo.filter:
            //	|	require(["dojo/query", "dojo/NodeList-dom"
            //	|	], function(query){
            //	|		query("*").filter(function(item){
            //	|			// highlight every paragraph
            //	|			return (item.nodeName == "p");
            //	|		}).style("backgroundColor", "yellow");
            //	|	});
            // example:
            //	the same filtering using a CSS selector
            //	|	require(["dojo/query", "dojo/NodeList-dom"
            //	|	], function(query){
            //	|		query("*").filter("p").styles("backgroundColor", "yellow");
            //	|	});
            var a = arguments, items = this, start = 0;
            if (typeof JSProf.LRE(22728, filter) == "string") {
                // inline'd type check
                items = JSProf.LWR(22731, items, JSProf.LMC(22730, query, '_filterResult')._filterResult(this, JSProf.LGE(22729, a, 0)[0]));
                if (JSProf.LGD(22732, a, 'length').length == 1) {
                    // if we only got a string query, pass back the filtered results
                    return JSProf.LMC(22733, items, '_stash')._stash(this);    // dojo/NodeList
                }
                // if we got a callback, run it over the filtered items
                start = JSProf.LWR(22734, start, 1);
            }
            return JSProf.LMC(22740, this, '_wrap')._wrap(JSProf.LMC(22739, array, 'filter').filter(JSProf.LRE(22735, items), JSProf.LGE(22736, a, 'start')[start], JSProf.LGE(22738, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LRE(22737, start) + 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]), this);    // dojo/NodeList
        }, 12),
        addContent: JSProf.LNF(22756, function (content, position) {
            // summary:
            //		add a node, NodeList or some HTML as a string to every item in the
            //		list.  Returns the original list.
            // description:
            //		a copy of the HTML content is added to each item in the
            //		list, with an optional position argument. If no position
            //		argument is provided, the content is appended to the end of
            //		each item.
            // content:
            //		DOM node, HTML in string format, a NodeList or an Object. If a DOM node or
            //		NodeList, the content will be cloned if the current NodeList has more than one
            //		element. Only the DOM nodes are cloned, no event handlers. If it is an Object,
            //		it should be an object with at "template" String property that has the HTML string
            //		to insert. If dojo.string has already been dojo.required, then dojo.string.substitute
            //		will be used on the "template" to generate the final HTML string. Other allowed
            //		properties on the object are: "parse" if the HTML
            //		string should be parsed for widgets (dojo.require("dojo.parser") to get that
            //		option to work), and "templateFunc" if a template function besides dojo.string.substitute
            //		should be used to transform the "template".
            // position:
            //		can be one of:
            //
            //		-	"last"||"end" (default)
            //		-	"first||"start"
            //		-	"before"
            //		-	"after"
            //		-	"replace" (replaces nodes in this NodeList with new content)
            //		-	"only" (removes other children of the nodes so new content is the only child)
            //
            //		or an offset in the childNodes property
            // example:
            //		appends content to the end if the position is omitted
            //	|	require(["dojo/query", "dojo/NodeList-dom"
            //	|	], function(query){
            //	|		query("h3 > p").addContent("hey there!");
            //	|	});
            // example:
            //		add something to the front of each element that has a
            //		"thinger" property:
            //	|	require(["dojo/query", "dojo/NodeList-dom"
            //	|	], function(query){
            //	|		query("[thinger]").addContent("...", "first");
            //	|	});
            // example:
            //		adds a header before each element of the list
            //	|	require(["dojo/query", "dojo/NodeList-dom"
            //	|	], function(query){
            //	|		query(".note").addContent("<h4>NOTE:</h4>", "before");
            //	|	});
            // example:
            //		add a clone of a DOM node to the end of every element in
            //		the list, removing it from its existing parent.
            //	|	require(["dojo/dom", "dojo/query", "dojo/NodeList-dom"
            //	|	], function(dom, query){
            //	|		query(".note").addContent(dom.byId("foo"));
            //	|	});
            // example:
            //		Append nodes from a templatized string.
            //	|	require(["dojo/string", "dojo/query", "dojo/NodeList-dom"
            //	|	], function(string, query){
            //	|		query(".note").addContent({
            //	|			template: '<b>${id}: </b><span>${name}</span>',
            //	|			id: "user332",
            //	|			name: "Mr. Anderson"
            //	|		});
            //	|	});
            // example:
            //		Append nodes from a templatized string that also has widgets parsed.
            //	|	require(["dojo/string", "dojo/parser", "dojo/query", "dojo/NodeList-dom"
            //	|	], function(string, parser, query){
            //	|		var notes = query(".note").addContent({
            //	|			template: '<button dojoType="dijit/form/Button">${text}</button>',
            //	|			parse: true,
            //	|			text: "Send"
            //	|		});
            //	|	});
            content = JSProf.LWR(22745, content, JSProf.LMC(22744, this, '_normalize')._normalize(JSProf.LRE(22742, content), JSProf.LGE(22743, this, 0)[0]));
            for (var i = 0, node; node = JSProf.LWR(22747, node, JSProf.LGE(22746, this, 'i')[i]); i++) {
                if (JSProf.LGD(22748, content, 'length').length) {
                    JSProf.LMC(22753, this, '_place')._place(JSProf.LRE(22749, content), JSProf.LRE(22750, node), JSProf.LRE(22751, position), JSProf.LRE(22752, i) > 0);
                } else {
                    // if it is an empty array, we empty the target node
                    JSProf.LMC(22755, domCtr, 'empty').empty(JSProf.LRE(22754, node));
                }
            }
            return this;    // dojo/NodeList
        }, 12)
    }, 11));
    return JSProf.LRE(22759, NodeList);
}, 12));