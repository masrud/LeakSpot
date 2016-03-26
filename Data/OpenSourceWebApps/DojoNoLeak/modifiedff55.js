JSProf.LFC(19819, define, false)(JSProf.LNE(19616, [
    "exports",
    "./_base/kernel",
    "./sniff",
    "./_base/window",
    "./dom",
    "./dom-attr"
], 10), JSProf.LNF(19818, function (exports, dojo, has, win, dom, attr) {
    JSProf.LFD(19814, _insertBefore);
    JSProf.LFD(19815, _insertAfter);
    JSProf.LFD(19816, _empty);
    JSProf.LFD(19817, _destroy);
    // module:
    //		dojo/dom-construct
    // summary:
    //		This module defines the core dojo DOM construction API.
    // TODOC: summary not showing up in output, see https://github.com/csnover/js-doc-parse/issues/42
    // support stuff for toDom()
    var tagWrap = JSProf.LNE(19629, {
            option: JSProf.LNE(19617, ["select"], 10),
            tbody: JSProf.LNE(19618, ["table"], 10),
            thead: JSProf.LNE(19619, ["table"], 10),
            tfoot: JSProf.LNE(19620, ["table"], 10),
            tr: JSProf.LNE(19621, [
                "table",
                "tbody"
            ], 10),
            td: JSProf.LNE(19622, [
                "table",
                "tbody",
                "tr"
            ], 10),
            th: JSProf.LNE(19623, [
                "table",
                "thead",
                "tr"
            ], 10),
            legend: JSProf.LNE(19624, ["fieldset"], 10),
            caption: JSProf.LNE(19625, ["table"], 10),
            colgroup: JSProf.LNE(19626, ["table"], 10),
            col: JSProf.LNE(19627, [
                "table",
                "colgroup"
            ], 10),
            li: JSProf.LNE(19628, ["ul"], 10)
        }, 11), reTag = /<\s*([\w\:]+)/, masterNode = JSProf.LNE(19630, {}, 11), masterNum = 0, masterName = "__" + JSProf.LGD(19631, dojo, '_scopeName')._scopeName + "ToDomId";
    // generate start/end tag strings to use
    // for the injection for each special tag wrap case.
    for (var param in JSProf.LRE(19632, tagWrap)) {
        if (JSProf.LMC(19634, tagWrap, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(19633, param))) {
            var tw = JSProf.LGE(19635, tagWrap, 'param')[param];
            JSProf.LPD(19638, tw, 'pre').pre = JSProf.LRSP(19638, JSProf.LRE(19636, param) == "option" ? '<select multiple="multiple">' : "<" + JSProf.LMC(19637, tw, 'join').join("><") + ">");
            JSProf.LPD(19641, tw, 'post').post = JSProf.LRSP(19641, "</" + JSProf.LMC(19640, JSProf.LMC(19639, tw, 'reverse').reverse(), 'join').join("></") + ">");    // the last line is destructive: it reverses the array,
                                                                                                                                                                        // but we don't care at this point
        }
    }
    var html5domfix;
    if (JSProf.LFC(19642, has, false)("ie") <= 8) {
        html5domfix = JSProf.LWR(19656, html5domfix, JSProf.LNF(19655, function (doc) {
            JSProf.LPD(19643, doc, '__dojo_html5_tested').__dojo_html5_tested = JSProf.LRSP(19643, "yes");
            var div = JSProf.LFC(19647, create, false)('div', JSProf.LNE(19645, {
                    innerHTML: "<nav>a</nav>",
                    style: JSProf.LNE(19644, { visibility: "hidden" }, 11)
                }, 11), JSProf.LGD(19646, doc, 'body').body);
            if (JSProf.LGD(19648, div.childNodes, 'length').length !== 1) {
                JSProf.LMC(19652, 'abbr article aside audio canvas details figcaption figure footer header ' + 'hgroup mark meter nav output progress section summary time video', 'replace').replace(/\b\w+\b/g, JSProf.LNF(19651, function (n) {
                    JSProf.LMC(19650, doc, 'createElement').createElement(JSProf.LRE(19649, n));
                }, 12));
            }
            JSProf.LFC(19654, destroy, false)(JSProf.LRE(19653, div));
        }, 12));
    }
    function _insertBefore(node, ref) {
        var parent = JSProf.LGD(19657, ref, 'parentNode').parentNode;
        if (JSProf.LRE(19658, parent)) {
            parent.insertBefore(JSProf.LRE(19659, node), JSProf.LRE(19660, ref));
        }
    }
    function _insertAfter(node, ref) {
        // summary:
        //		Try to insert node after ref
        var parent = JSProf.LGD(19661, ref, 'parentNode').parentNode;
        if (JSProf.LRE(19662, parent)) {
            if (JSProf.LGD(19663, parent, 'lastChild').lastChild == JSProf.LRE(19664, ref)) {
                JSProf.LMC(19666, parent, 'appendChild').appendChild(JSProf.LRE(19665, node));
            } else {
                parent.insertBefore(JSProf.LRE(19667, node), JSProf.LGD(19668, ref, 'nextSibling').nextSibling);
            }
        }
    }
    JSProf.LPD(19713, exports, 'toDom').toDom = JSProf.LRSP(19713, JSProf.LNF(19712, function toDom(frag, doc) {
        // summary:
        //		instantiates an HTML fragment returning the corresponding DOM.
        // frag: String
        //		the HTML fragment
        // doc: DocumentNode?
        //		optional document to use when creating DOM nodes, defaults to
        //		dojo/_base/window.doc if not specified.
        // returns:
        //		Document fragment, unless it's a single node in which case it returns the node itself
        // example:
        //		Create a table row:
        //	|	require(["dojo/dom-construct"], function(domConstruct){
        //	|		var tr = domConstruct.toDom("<tr><td>First!</td></tr>");
        //	|	});
        doc = JSProf.LWR(19671, doc, JSProf.LRE(19669, doc) || JSProf.LGD(19670, win, 'doc').doc);
        var masterId = JSProf.LGE(19672, doc, 'masterName')[masterName];
        if (!JSProf.LRE(19673, masterId)) {
            JSProf.LPE(19675, doc, 'masterName')[masterName] = JSProf.LRPE(19675, masterId = JSProf.LWR(19674, masterId, ++masterNum + ""));
            JSProf.LPE(19677, masterNode, 'masterId')[masterId] = JSProf.LRPE(19677, JSProf.LMC(19676, doc, 'createElement').createElement("div"));
        }
        if (JSProf.LFC(19678, has, false)("ie") <= 8) {
            if (!JSProf.LGD(19679, doc, '__dojo_html5_tested').__dojo_html5_tested && JSProf.LGD(19680, doc, 'body').body) {
                JSProf.LFC(19682, html5domfix, false)(JSProf.LRE(19681, doc));
            }
        }
        // make sure the frag is a string.
        frag += "";
        // find the starting tag, and get node wrapper
        var match = JSProf.LMC(19684, frag, 'match').match(JSProf.LRE(19683, reTag)), tag = JSProf.LRE(19685, match) ? match[1].toLowerCase() : "", master = JSProf.LGE(19686, masterNode, 'masterId')[masterId], wrap, i, fc, df;
        if (JSProf.LRE(19687, match) && JSProf.LGE(19688, tagWrap, 'tag')[tag]) {
            wrap = JSProf.LWR(19690, wrap, JSProf.LGE(19689, tagWrap, 'tag')[tag]);
            JSProf.LPD(19694, master, 'innerHTML').innerHTML = JSProf.LRSP(19694, JSProf.LGD(19691, wrap, 'pre').pre + JSProf.LRE(19692, frag) + JSProf.LGD(19693, wrap, 'post').post);
            for (i = JSProf.LWR(19696, i, JSProf.LGD(19695, wrap, 'length').length); JSProf.LRE(19697, i); --i) {
                master = JSProf.LWR(19699, master, JSProf.LGD(19698, master, 'firstChild').firstChild);
            }
        } else {
            JSProf.LPD(19701, master, 'innerHTML').innerHTML = JSProf.LRSP(19701, JSProf.LRE(19700, frag));
        }
        // one node shortcut => return the node itself
        if (JSProf.LGD(19702, master.childNodes, 'length').length == 1) {
            return JSProf.LMC(19704, master, 'removeChild').removeChild(JSProf.LGD(19703, master, 'firstChild').firstChild);    // DOMNode
        }
        // return multiple nodes as a document fragment
        df = JSProf.LWR(19706, df, JSProf.LMC(19705, doc, 'createDocumentFragment').createDocumentFragment());
        while (fc = JSProf.LWR(19708, fc, JSProf.LGD(19707, master, 'firstChild').firstChild)) {
            // intentional assignment
            JSProf.LMC(19710, df, 'appendChild').appendChild(JSProf.LRE(19709, fc));
        }
        return JSProf.LRE(19711, df);    // DocumentFragment
    }, 12));
    JSProf.LPD(19760, exports, 'place').place = JSProf.LRSP(19760, JSProf.LNF(19759, function place(node, refNode, position) {
        // summary:
        //		Attempt to insert node into the DOM, choosing from various positioning options.
        //		Returns the first argument resolved to a DOM node.
        // node: DOMNode|DocumentFragment|String
        //		id or node reference, or HTML fragment starting with "<" to place relative to refNode
        // refNode: DOMNode|String
        //		id or node reference to use as basis for placement
        // position: String|Number?
        //		string noting the position of node relative to refNode or a
        //		number indicating the location in the childNodes collection of refNode.
        //		Accepted string values are:
        //
        //		- before
        //		- after
        //		- replace
        //		- only
        //		- first
        //		- last
        //
        //		"first" and "last" indicate positions as children of refNode, "replace" replaces refNode,
        //		"only" replaces all children.  position defaults to "last" if not specified
        // returns: DOMNode
        //		Returned values is the first argument resolved to a DOM node.
        //
        //		.place() is also a method of `dojo/NodeList`, allowing `dojo/query` node lookups.
        // example:
        //		Place a node by string id as the last child of another node by string id:
        //	|	require(["dojo/dom-construct"], function(domConstruct){
        //	|		domConstruct.place("someNode", "anotherNode");
        //	|	});
        // example:
        //		Place a node by string id before another node by string id
        //	|	require(["dojo/dom-construct"], function(domConstruct){
        //	|		domConstruct.place("someNode", "anotherNode", "before");
        //	|	});
        // example:
        //		Create a Node, and place it in the body element (last child):
        //	|	require(["dojo/dom-construct", "dojo/_base/window"
        //	|	], function(domConstruct, win){
        //	|		domConstruct.place("<div></div>", win.body());
        //	|	});
        // example:
        //		Put a new LI as the first child of a list by id:
        //	|	require(["dojo/dom-construct"], function(domConstruct){
        //	|		domConstruct.place("<li></li>", "someUl", "first");
        //	|	});
        refNode = JSProf.LWR(19716, refNode, JSProf.LMC(19715, dom, 'byId').byId(JSProf.LRE(19714, refNode)));
        if (typeof JSProf.LRE(19717, node) == "string") {
            // inline'd type check
            node = JSProf.LWR(19725, node, JSProf.LMC(19719, /^\s*</, 'test').test(JSProf.LRE(19718, node)) ? JSProf.LMC(19722, exports, 'toDom').toDom(JSProf.LRE(19720, node), JSProf.LGD(19721, refNode, 'ownerDocument').ownerDocument) : JSProf.LMC(19724, dom, 'byId').byId(JSProf.LRE(19723, node)));
        }
        if (typeof JSProf.LRE(19726, position) == "number") {
            // inline'd type check
            var cn = JSProf.LGD(19727, refNode, 'childNodes').childNodes;
            if (!JSProf.LGD(19728, cn, 'length').length || JSProf.LGD(19729, cn, 'length').length <= JSProf.LRE(19730, position)) {
                JSProf.LMC(19732, refNode, 'appendChild').appendChild(JSProf.LRE(19731, node));
            } else {
                JSProf.LFC(19737, _insertBefore, false)(JSProf.LRE(19733, node), JSProf.LGE(19736, cn, JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9 = JSProf.LRE(19734, position) < 0 ? 0 : JSProf.LRE(19735, position))[JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9]);
            }
        } else {
            switch (JSProf.LRE(19738, position)) {
            case "before":
                JSProf.LFC(19741, _insertBefore, false)(JSProf.LRE(19739, node), JSProf.LRE(19740, refNode));
                break;
            case "after":
                JSProf.LFC(19744, _insertAfter, false)(JSProf.LRE(19742, node), JSProf.LRE(19743, refNode));
                break;
            case "replace":
                JSProf.LMC(19747, refNode.parentNode, 'replaceChild').replaceChild(JSProf.LRE(19745, node), JSProf.LRE(19746, refNode));
                break;
            case "only":
                JSProf.LMC(19749, exports, 'empty').empty(JSProf.LRE(19748, refNode));
                JSProf.LMC(19751, refNode, 'appendChild').appendChild(JSProf.LRE(19750, node));
                break;
            case "first":
                if (JSProf.LGD(19752, refNode, 'firstChild').firstChild) {
                    JSProf.LFC(19755, _insertBefore, false)(JSProf.LRE(19753, node), JSProf.LGD(19754, refNode, 'firstChild').firstChild);
                    break;
                }
            // else fallthrough...
            default:
                // aka: last
                JSProf.LMC(19757, refNode, 'appendChild').appendChild(JSProf.LRE(19756, node));
            }
        }
        return JSProf.LRE(19758, node);    // DomNode
    }, 12));
    var create = JSProf.LPD(19783, exports, 'create').create = JSProf.LRSP(19783, JSProf.LNF(19782, function create(tag, attrs, refNode, pos) {
            // summary:
            //		Create an element, allowing for optional attribute decoration
            //		and placement.
            // description:
            //		A DOM Element creation function. A shorthand method for creating a node or
            //		a fragment, and allowing for a convenient optional attribute setting step,
            //		as well as an optional DOM placement reference.
            //
            //		Attributes are set by passing the optional object through `dojo/dom-attr.set`.
            //		See `dojo/dom-attr.set` for noted caveats and nuances, and API if applicable.
            //
            //		Placement is done via `dojo/dom-construct.place`, assuming the new node to be
            //		the action node, passing along the optional reference node and position.
            // tag: DOMNode|String
            //		A string of the element to create (eg: "div", "a", "p", "li", "script", "br"),
            //		or an existing DOM node to process.
            // attrs: Object
            //		An object-hash of attributes to set on the newly created node.
            //		Can be null, if you don't want to set any attributes/styles.
            //		See: `dojo/dom-attr.set` for a description of available attributes.
            // refNode: DOMNode|String?
            //		Optional reference node. Used by `dojo/dom-construct.place` to place the newly created
            //		node somewhere in the dom relative to refNode. Can be a DomNode reference
            //		or String ID of a node.
            // pos: String?
            //		Optional positional reference. Defaults to "last" by way of `dojo/domConstruct.place`,
            //		though can be set to "first","after","before","last", "replace" or "only"
            //		to further control the placement of the new node relative to the refNode.
            //		'refNode' is required if a 'pos' is specified.
            // example:
            //		Create a DIV:
            //	|	require(["dojo/dom-construct"], function(domConstruct){
            //	|		var n = domConstruct.create("div");
            //	|	});
            //
            // example:
            //		Create a DIV with content:
            //	|	require(["dojo/dom-construct"], function(domConstruct){
            //	|		var n = domConstruct.create("div", { innerHTML:"<p>hi</p>" });
            //	|	});
            //
            // example:
            //		Place a new DIV in the BODY, with no attributes set
            //	|	require(["dojo/dom-construct", "dojo/_base/window"], function(domConstruct, win){
            //	|		var n = domConstruct.create("div", null, win.body());
            //	|	});
            //
            // example:
            //		Create an UL, and populate it with LI's. Place the list as the first-child of a
            //		node with id="someId":
            //	|	require(["dojo/dom-construct", "dojo/_base/array"],
            //	|	function(domConstruct, arrayUtil){
            //	|		var ul = domConstruct.create("ul", null, "someId", "first");
            //	|		var items = ["one", "two", "three", "four"];
            //	|		arrayUtil.forEach(items, function(data){
            //	|			domConstruct.create("li", { innerHTML: data }, ul);
            //	|		});
            //	|	});
            //
            // example:
            //		Create an anchor, with an href. Place in BODY:
            //	|	require(["dojo/dom-construct", "dojo/_base/window"], function(domConstruct, win){
            //	|		domConstruct.create("a", { href:"foo.html", title:"Goto FOO!" }, win.body());
            //	|	});
            var doc = JSProf.LGD(19761, win, 'doc').doc;
            if (JSProf.LRE(19762, refNode)) {
                refNode = JSProf.LWR(19765, refNode, JSProf.LMC(19764, dom, 'byId').byId(JSProf.LRE(19763, refNode)));
                doc = JSProf.LWR(19767, doc, JSProf.LGD(19766, refNode, 'ownerDocument').ownerDocument);
            }
            if (typeof JSProf.LRE(19768, tag) == "string") {
                // inline'd type check
                tag = JSProf.LWR(19771, tag, JSProf.LMC(19770, doc, 'createElement').createElement(JSProf.LRE(19769, tag)));
            }
            if (JSProf.LRE(19772, attrs)) {
                JSProf.LMC(19775, attr, 'set').set(JSProf.LRE(19773, tag), JSProf.LRE(19774, attrs));
            }
            if (JSProf.LRE(19776, refNode)) {
                JSProf.LMC(19780, exports, 'place').place(JSProf.LRE(19777, tag), JSProf.LRE(19778, refNode), JSProf.LRE(19779, pos));
            }
            return JSProf.LRE(19781, tag);    // DomNode
        }, 12));
    function _empty(node) {
        // TODO: remove this if() block in 2.0 when we no longer have to worry about IE memory leaks,
        // and then uncomment the emptyGrandchildren() test case from html.html.
        // Note that besides fixing #16957, using removeChild() is actually faster than setting node.innerHTML,
        // see http://jsperf.com/clear-dom-node.
        if ("innerHTML" in JSProf.LRE(19784, node)) {
            try {
                // fast path
                JSProf.LPD(19785, node, 'innerHTML').innerHTML = JSProf.LRSP(19785, "");
                return;
            } catch (e) {
            }
        }
        // SVG/strict elements don't support innerHTML
        for (var c; c = JSProf.LWR(19787, c, JSProf.LGD(19786, node, 'lastChild').lastChild);) {
            // intentional assignment
            JSProf.LMC(19789, node, 'removeChild').removeChild(JSProf.LRE(19788, c));
        }
    }
    JSProf.LPD(19794, exports, 'empty').empty = JSProf.LRSP(19794, JSProf.LNF(19793, function empty(node) {
        // summary:
        //		safely removes all children of the node.
        // node: DOMNode|String
        //		a reference to a DOM node or an id.
        // example:
        //		Destroy node's children byId:
        //	|	require(["dojo/dom-construct"], function(domConstruct){
        //	|		domConstruct.empty("someId");
        //	|	});
        JSProf.LFC(19792, _empty, false)(JSProf.LMC(19791, dom, 'byId').byId(JSProf.LRE(19790, node)));
    }, 12));
    function _destroy(node, parent) {
        // in IE quirks, node.canHaveChildren can be false but firstChild can be non-null (OBJECT/APPLET)
        if (JSProf.LGD(19795, node, 'firstChild').firstChild) {
            JSProf.LFC(19797, _empty, false)(JSProf.LRE(19796, node));
        }
        if (JSProf.LRE(19798, parent)) {
            // removeNode(false) doesn't leak in IE 6+, but removeChild() and removeNode(true) are known to leak under IE 8- while 9+ is TBD.
            // In IE quirks mode, PARAM nodes as children of OBJECT/APPLET nodes have a removeNode method that does nothing and
            // the parent node has canHaveChildren=false even though removeChild correctly removes the PARAM children.
            // In IE, SVG/strict nodes don't have a removeNode method nor a canHaveChildren boolean.
            JSProf.LFC(19799, has, false)("ie") && JSProf.LGD(19800, parent, 'canHaveChildren').canHaveChildren && "removeNode" in JSProf.LRE(19801, node) ? JSProf.LMC(19802, node, 'removeNode').removeNode(false) : JSProf.LMC(19804, parent, 'removeChild').removeChild(JSProf.LRE(19803, node));
        }
    }
    var destroy = JSProf.LPD(19813, exports, 'destroy').destroy = JSProf.LRSP(19813, JSProf.LNF(19812, function destroy(node) {
            // summary:
            //		Removes a node from its parent, clobbering it and all of its
            //		children.
            //
            // description:
            //		Removes a node from its parent, clobbering it and all of its
            //		children. Function only works with DomNodes, and returns nothing.
            //
            // node: DOMNode|String
            //		A String ID or DomNode reference of the element to be destroyed
            //
            // example:
            //		Destroy a node byId:
            //	|	require(["dojo/dom-construct"], function(domConstruct){
            //	|		domConstruct.destroy("someId");
            //	|	});
            node = JSProf.LWR(19807, node, JSProf.LMC(19806, dom, 'byId').byId(JSProf.LRE(19805, node)));
            if (!JSProf.LRE(19808, node)) {
                return;
            }
            JSProf.LFC(19811, _destroy, false)(JSProf.LRE(19809, node), JSProf.LGD(19810, node, 'parentNode').parentNode);
        }, 12));
}, 12));