JSProf.LFC(22764, define, false)(JSProf.LNE(22566, [
    "./_base/kernel",
    "./query",
    "./_base/array",
    "./_base/lang",
    "./dom-class",
    "./dom-construct",
    "./dom-geometry",
    "./dom-attr",
    "./dom-style"
], 10), JSProf.LNF(22763, function (dojo, query, array, lang, domCls, domCtr, domGeom, domAttr, domStyle) {
    JSProf.LFD(22762, getSet);
    // module:
    //		dojo/NodeList-dom.js
    /*=====
    return function(){
     // summary:
     //		Adds DOM related methods to NodeList, and returns NodeList constructor.
    };
    =====*/
    var magicGuard = JSProf.LNF(22569, function (a) {
            // summary:
            //		the guard function for dojo/dom-attr() and dojo/dom-style()
            return JSProf.LGD(22567, a, 'length').length == 1 && typeof JSProf.LGE(22568, a, 0)[0] == "string";    // inline'd type check
        }, 12);
    var orphan = JSProf.LNF(22574, function (node) {
            // summary:
            //		function to orphan nodes
            var p = JSProf.LGD(22570, node, 'parentNode').parentNode;
            if (JSProf.LRE(22571, p)) {
                JSProf.LMC(22573, p, 'removeChild').removeChild(JSProf.LRE(22572, node));
            }
        }, 12);
    // FIXME: should we move orphan() to dojo/_base/html?
    var NodeList = JSProf.LGD(22575, query, 'NodeList').NodeList, awc = JSProf.LGD(22576, NodeList, '_adaptWithCondition')._adaptWithCondition, aafe = JSProf.LGD(22577, NodeList, '_adaptAsForEach')._adaptAsForEach, aam = JSProf.LGD(22578, NodeList, '_adaptAsMap')._adaptAsMap;
    function getSet(module) {
        return JSProf.LNF(22588, function (node, name, value) {
            if (JSProf.LGD(22579, arguments, 'length').length == 2) {
                return JSProf.LMC(22583, module, JSProf.TMPS.te3fceb21438428d0cdbcf188c44a9f78ed75fb8f = typeof JSProf.LRE(22580, name) == "string" ? "get" : "set", 1)[JSProf.TMPS.te3fceb21438428d0cdbcf188c44a9f78ed75fb8f](JSProf.LRE(22581, node), JSProf.LRE(22582, name));
            }
            // setter
            return JSProf.LMC(22587, module, 'set').set(JSProf.LRE(22584, node), JSProf.LRE(22585, name), JSProf.LRE(22586, value));
        }, 12);
    }
    JSProf.LMC(22760, lang, 'extend').extend(JSProf.LRE(22589, NodeList), JSProf.LNE(22759, {
        _normalize: JSProf.LNF(22629, function (content, refNode) {
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
            var parse = JSProf.LGD(22590, content, 'parse').parse === true;
            //Do we have an object that needs to be run through a template?
            if (typeof JSProf.LGD(22591, content, 'template').template == "string") {
                var templateFunc = JSProf.LGD(22592, content, 'templateFunc').templateFunc || JSProf.LGD(22593, dojo, 'string').string && JSProf.LGD(22594, dojo.string, 'substitute').substitute;
                content = JSProf.LWR(22600, content, JSProf.LRE(22595, templateFunc) ? JSProf.LFC(22598, templateFunc, false)(JSProf.LGD(22596, content, 'template').template, JSProf.LRE(22597, content)) : JSProf.LRE(22599, content));
            }
            var type = typeof JSProf.LRE(22601, content);
            if (JSProf.LRE(22602, type) == "string" || JSProf.LRE(22603, type) == "number") {
                content = JSProf.LWR(22608, content, JSProf.LMC(22607, domCtr, 'toDom').toDom(JSProf.LRE(22604, content), JSProf.LRE(22605, refNode) && JSProf.LGD(22606, refNode, 'ownerDocument').ownerDocument));
                if (JSProf.LGD(22609, content, 'nodeType').nodeType == 11) {
                    //DocumentFragment. It cannot handle cloneNode calls, so pull out the children.
                    content = JSProf.LWR(22612, content, JSProf.LMC(22611, lang, '_toArray')._toArray(JSProf.LGD(22610, content, 'childNodes').childNodes));
                } else {
                    content = JSProf.LWR(22615, content, JSProf.LNE(22614, [JSProf.LRE(22613, content)], 10));
                }
            } else if (!JSProf.LMC(22617, lang, 'isArrayLike').isArrayLike(JSProf.LRE(22616, content))) {
                content = JSProf.LWR(22620, content, JSProf.LNE(22619, [JSProf.LRE(22618, content)], 10));
            } else if (!JSProf.LMC(22622, lang, 'isArray').isArray(JSProf.LRE(22621, content))) {
                //To get to this point, content is array-like, but
                //not an array, which likely means a DOM NodeList. Convert it now.
                content = JSProf.LWR(22625, content, JSProf.LMC(22624, lang, '_toArray')._toArray(JSProf.LRE(22623, content)));
            }
            //Pass around the parse info
            if (JSProf.LRE(22626, parse)) {
                JSProf.LPD(22627, content, '_runParse')._runParse = JSProf.LRSP(22627, true);
            }
            return JSProf.LRE(22628, content);    //Array
        }, 12),
        _cloneNode: JSProf.LNF(22631, function (node) {
            // summary:
            //		private utility to clone a node. Not very interesting in the vanilla
            //		dojo/NodeList case, but delegates could do interesting things like
            //		clone event handlers if that is derivable from the node.
            return JSProf.LMC(22630, node, 'cloneNode').cloneNode(true);
        }, 12),
        _place: JSProf.LNF(22667, function (ary, refNode, position, useClone) {
            // summary:
            //		private utility to handle placing an array of nodes relative to another node.
            // description:
            //		Allows for cloning the nodes in the array, and for
            //		optionally parsing widgets, if ary._runParse is true.
            //Avoid a disallowed operation if trying to do an innerHTML on a non-element node.
            if (JSProf.LGD(22632, refNode, 'nodeType').nodeType != 1 && JSProf.LRE(22633, position) == "only") {
                return;
            }
            var rNode = JSProf.LRE(22634, refNode), tempNode;
            //Always cycle backwards in case the array is really a
            //DOM NodeList and the DOM operations take it out of the live collection.
            var length = JSProf.LGD(22635, ary, 'length').length;
            for (var i = JSProf.LRE(22636, length) - 1; JSProf.LRE(22637, i) >= 0; i--) {
                var node = JSProf.LRE(22638, useClone) ? JSProf.LMC(22640, this, '_cloneNode')._cloneNode(JSProf.LGE(22639, ary, 'i')[i]) : JSProf.LGE(22641, ary, 'i')[i];
                //If need widget parsing, use a temp node, instead of waiting after inserting into
                //real DOM because we need to start widget parsing at one node up from current node,
                //which could cause some already parsed widgets to be parsed again.
                if (JSProf.LGD(22642, ary, '_runParse')._runParse && JSProf.LGD(22643, dojo, 'parser').parser && JSProf.LGD(22644, dojo.parser, 'parse').parse) {
                    if (!JSProf.LRE(22645, tempNode)) {
                        tempNode = JSProf.LWR(22647, tempNode, JSProf.LMC(22646, rNode.ownerDocument, 'createElement').createElement("div"));
                    }
                    JSProf.LMC(22649, tempNode, 'appendChild').appendChild(JSProf.LRE(22648, node));
                    JSProf.LMC(22651, dojo.parser, 'parse').parse(JSProf.LRE(22650, tempNode));
                    node = JSProf.LWR(22653, node, JSProf.LGD(22652, tempNode, 'firstChild').firstChild);
                    while (JSProf.LGD(22654, tempNode, 'firstChild').firstChild) {
                        JSProf.LMC(22656, tempNode, 'removeChild').removeChild(JSProf.LGD(22655, tempNode, 'firstChild').firstChild);
                    }
                }
                if (JSProf.LRE(22657, i) == JSProf.LRE(22658, length) - 1) {
                    JSProf.LMC(22662, domCtr, 'place').place(JSProf.LRE(22659, node), JSProf.LRE(22660, rNode), JSProf.LRE(22661, position));
                } else {
                    rNode.parentNode.insertBefore(JSProf.LRE(22663, node), JSProf.LRE(22664, rNode));
                }
                rNode = JSProf.LWR(22666, rNode, JSProf.LRE(22665, node));
            }
        }, 12),
        position: JSProf.LFC(22669, aam, false)(JSProf.LGD(22668, domGeom, 'position').position),
        attr: JSProf.LFC(22673, awc, false)(JSProf.LFC(22671, getSet, false)(JSProf.LRE(22670, domAttr)), JSProf.LRE(22672, magicGuard)),
        style: JSProf.LFC(22677, awc, false)(JSProf.LFC(22675, getSet, false)(JSProf.LRE(22674, domStyle)), JSProf.LRE(22676, magicGuard)),
        addClass: JSProf.LFC(22679, aafe, false)(JSProf.LGD(22678, domCls, 'add').add),
        removeClass: JSProf.LFC(22681, aafe, false)(JSProf.LGD(22680, domCls, 'remove').remove),
        toggleClass: JSProf.LFC(22683, aafe, false)(JSProf.LGD(22682, domCls, 'toggle').toggle),
        replaceClass: JSProf.LFC(22685, aafe, false)(JSProf.LGD(22684, domCls, 'replace').replace),
        empty: JSProf.LFC(22687, aafe, false)(JSProf.LGD(22686, domCtr, 'empty').empty),
        removeAttr: JSProf.LFC(22689, aafe, false)(JSProf.LGD(22688, domAttr, 'remove').remove),
        marginBox: JSProf.LFC(22691, aam, false)(JSProf.LGD(22690, domGeom, 'getMarginBox').getMarginBox),
        place: JSProf.LNF(22701, function (queryOrNode, position) {
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
            var item = JSProf.LGE(22694, JSProf.LFC(22693, query, false)(JSProf.LRE(22692, queryOrNode)), 0)[0];
            return JSProf.LMC(22700, this, 'forEach').forEach(JSProf.LNF(22699, function (node) {
                JSProf.LMC(22698, domCtr, 'place').place(JSProf.LRE(22695, node), JSProf.LRE(22696, item), JSProf.LRE(22697, position));
            }, 12));    // dojo/NodeList
        }, 12),
        orphan: JSProf.LNF(22707, function (filter) {
            // summary:
            //		removes elements in this list that match the filter
            //		from their parents and returns them as a new NodeList.
            // filter:
            //		CSS selector like ".foo" or "div > span"
            // returns:
            //		NodeList containing the orphaned elements
            return JSProf.LMC(22706, JSProf.LRE(22702, filter) ? JSProf.LMC(22704, query, '_filterResult')._filterResult(this, JSProf.LRE(22703, filter)) : this, 'forEach').forEach(JSProf.LRE(22705, orphan));    // dojo/NodeList
        }, 12),
        adopt: JSProf.LNF(22714, function (queryOrListOrNode, position) {
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
            return JSProf.LMC(22713, JSProf.LMC(22712, JSProf.LFC(22709, query, false)(JSProf.LRE(22708, queryOrListOrNode)), 'place').place(JSProf.LGE(22710, this, 0)[0], JSProf.LRE(22711, position)), '_stash')._stash(this);    // dojo/NodeList
        }, 12),
        query: JSProf.LNF(22729, function (queryStr) {
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
            if (!JSProf.LRE(22715, queryStr)) {
                return this;
            }
            var ret = JSProf.LNE(22717, new (JSProf.LFC(22716, NodeList, true))(), 'NodeList');
            JSProf.LMC(22727, this, 'map').map(JSProf.LNF(22726, function (node) {
                // FIXME: why would we ever get undefined here?
                JSProf.LMC(22725, JSProf.LFC(22720, query, false)(JSProf.LRE(22718, queryStr), JSProf.LRE(22719, node)), 'forEach').forEach(JSProf.LNF(22724, function (subNode) {
                    if (JSProf.LRE(22721, subNode) !== undefined) {
                        JSProf.LMC(22723, ret, 'push').push(JSProf.LRE(22722, subNode));
                    }
                }, 12));
            }, 12));
            return JSProf.LMC(22728, ret, '_stash')._stash(this);    // dojo/NodeList
        }, 12),
        filter: JSProf.LNF(22743, function (filter) {
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
            if (typeof JSProf.LRE(22730, filter) == "string") {
                // inline'd type check
                items = JSProf.LWR(22733, items, JSProf.LMC(22732, query, '_filterResult')._filterResult(this, JSProf.LGE(22731, a, 0)[0]));
                if (JSProf.LGD(22734, a, 'length').length == 1) {
                    // if we only got a string query, pass back the filtered results
                    return JSProf.LMC(22735, items, '_stash')._stash(this);    // dojo/NodeList
                }
                // if we got a callback, run it over the filtered items
                start = JSProf.LWR(22736, start, 1);
            }
            return JSProf.LMC(22742, this, '_wrap')._wrap(JSProf.LMC(22741, array, 'filter').filter(JSProf.LRE(22737, items), JSProf.LGE(22738, a, 'start')[start], JSProf.LGE(22740, a, JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7 = JSProf.LRE(22739, start) + 1)[JSProf.TMPS.t155cb1635e4abaf6f977dd516f642220740a94e7]), this);    // dojo/NodeList
        }, 12),
        addContent: JSProf.LNF(22758, function (content, position) {
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
            content = JSProf.LWR(22747, content, JSProf.LMC(22746, this, '_normalize')._normalize(JSProf.LRE(22744, content), JSProf.LGE(22745, this, 0)[0]));
            for (var i = 0, node; node = JSProf.LWR(22749, node, JSProf.LGE(22748, this, 'i')[i]); i++) {
                if (JSProf.LGD(22750, content, 'length').length) {
                    JSProf.LMC(22755, this, '_place')._place(JSProf.LRE(22751, content), JSProf.LRE(22752, node), JSProf.LRE(22753, position), JSProf.LRE(22754, i) > 0);
                } else {
                    // if it is an empty array, we empty the target node
                    JSProf.LMC(22757, domCtr, 'empty').empty(JSProf.LRE(22756, node));
                }
            }
            return this;    // dojo/NodeList
        }, 12)
    }, 11));
    return JSProf.LRE(22761, NodeList);
}, 12));