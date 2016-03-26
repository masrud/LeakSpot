JSProf.LFC(20475, define, false)(JSProf.LNE(20272, [
    "exports",
    "./_base/kernel",
    "./sniff",
    "./_base/window",
    "./dom",
    "./dom-attr"
], 10), JSProf.LNF(20474, function (exports, dojo, has, win, dom, attr) {
    JSProf.LFD(20470, _insertBefore);
    JSProf.LFD(20471, _insertAfter);
    JSProf.LFD(20472, _empty);
    JSProf.LFD(20473, _destroy);
    // module:
    //		dojo/dom-construct
    // summary:
    //		This module defines the core dojo DOM construction API.
    // TODOC: summary not showing up in output, see https://github.com/csnover/js-doc-parse/issues/42
    // support stuff for toDom()
    var tagWrap = JSProf.LNE(20285, {
            option: JSProf.LNE(20273, ["select"], 10),
            tbody: JSProf.LNE(20274, ["table"], 10),
            thead: JSProf.LNE(20275, ["table"], 10),
            tfoot: JSProf.LNE(20276, ["table"], 10),
            tr: JSProf.LNE(20277, [
                "table",
                "tbody"
            ], 10),
            td: JSProf.LNE(20278, [
                "table",
                "tbody",
                "tr"
            ], 10),
            th: JSProf.LNE(20279, [
                "table",
                "thead",
                "tr"
            ], 10),
            legend: JSProf.LNE(20280, ["fieldset"], 10),
            caption: JSProf.LNE(20281, ["table"], 10),
            colgroup: JSProf.LNE(20282, ["table"], 10),
            col: JSProf.LNE(20283, [
                "table",
                "colgroup"
            ], 10),
            li: JSProf.LNE(20284, ["ul"], 10)
        }, 11), reTag = /<\s*([\w\:]+)/, masterNode = JSProf.LNE(20286, {}, 11), masterNum = 0, masterName = "__" + JSProf.LGD(20287, dojo, '_scopeName')._scopeName + "ToDomId";
    // generate start/end tag strings to use
    // for the injection for each special tag wrap case.
    for (var param in JSProf.LRE(20288, tagWrap)) {
        if (JSProf.LMC(20290, tagWrap, 'hasOwnProperty').hasOwnProperty(JSProf.LRE(20289, param))) {
            var tw = JSProf.LGE(20291, tagWrap, 'param')[param];
            JSProf.LPD(20294, tw, 'pre').pre = JSProf.LRSP(20294, JSProf.LRE(20292, param) == "option" ? '<select multiple="multiple">' : "<" + JSProf.LMC(20293, tw, 'join').join("><") + ">");
            JSProf.LPD(20297, tw, 'post').post = JSProf.LRSP(20297, "</" + JSProf.LMC(20296, JSProf.LMC(20295, tw, 'reverse').reverse(), 'join').join("></") + ">");    // the last line is destructive: it reverses the array,
                                                                                                                                                                        // but we don't care at this point
        }
    }
    var html5domfix;
    if (JSProf.LFC(20298, has, false)("ie") <= 8) {
        html5domfix = JSProf.LWR(20312, html5domfix, JSProf.LNF(20311, function (doc) {
            JSProf.LPD(20299, doc, '__dojo_html5_tested').__dojo_html5_tested = JSProf.LRSP(20299, "yes");
            var div = JSProf.LFC(20303, create, false)('div', JSProf.LNE(20301, {
                    innerHTML: "<nav>a</nav>",
                    style: JSProf.LNE(20300, { visibility: "hidden" }, 11)
                }, 11), JSProf.LGD(20302, doc, 'body').body);
            if (JSProf.LGD(20304, div.childNodes, 'length').length !== 1) {
                JSProf.LMC(20308, 'abbr article aside audio canvas details figcaption figure footer header ' + 'hgroup mark meter nav output progress section summary time video', 'replace').replace(/\b\w+\b/g, JSProf.LNF(20307, function (n) {
                    JSProf.LMC(20306, doc, 'createElement').createElement(JSProf.LRE(20305, n));
                }, 12));
            }
            JSProf.LFC(20310, destroy, false)(JSProf.LRE(20309, div));
        }, 12));
    }
    function _insertBefore(node, ref) {
        var parent = JSProf.LGD(20313, ref, 'parentNode').parentNode;
        if (JSProf.LRE(20314, parent)) {
            parent.insertBefore(JSProf.LRE(20315, node), JSProf.LRE(20316, ref));
        }
    }
    function _insertAfter(node, ref) {
        // summary:
        //		Try to insert node after ref
        var parent = JSProf.LGD(20317, ref, 'parentNode').parentNode;
        if (JSProf.LRE(20318, parent)) {
            if (JSProf.LGD(20319, parent, 'lastChild').lastChild == JSProf.LRE(20320, ref)) {
                JSProf.LMC(20322, parent, 'appendChild').appendChild(JSProf.LRE(20321, node));
            } else {
                parent.insertBefore(JSProf.LRE(20323, node), JSProf.LGD(20324, ref, 'nextSibling').nextSibling);
            }
        }
    }
    JSProf.LPD(20369, exports, 'toDom').toDom = JSProf.LRSP(20369, JSProf.LNF(20368, function toDom(frag, doc) {
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
        doc = JSProf.LWR(20327, doc, JSProf.LRE(20325, doc) || JSProf.LGD(20326, win, 'doc').doc);
        var masterId = JSProf.LGE(20328, doc, 'masterName')[masterName];
        if (!JSProf.LRE(20329, masterId)) {
            JSProf.LPE(20331, doc, 'masterName')[masterName] = JSProf.LRPE(20331, masterId = JSProf.LWR(20330, masterId, ++masterNum + ""));
            JSProf.LPE(20333, masterNode, 'masterId')[masterId] = JSProf.LRPE(20333, JSProf.LMC(20332, doc, 'createElement').createElement("div"));
        }
        if (JSProf.LFC(20334, has, false)("ie") <= 8) {
            if (!JSProf.LGD(20335, doc, '__dojo_html5_tested').__dojo_html5_tested && JSProf.LGD(20336, doc, 'body').body) {
                JSProf.LFC(20338, html5domfix, false)(JSProf.LRE(20337, doc));
            }
        }
        // make sure the frag is a string.
        frag += "";
        // find the starting tag, and get node wrapper
        var match = JSProf.LMC(20340, frag, 'match').match(JSProf.LRE(20339, reTag)), tag = JSProf.LRE(20341, match) ? match[1].toLowerCase() : "", master = JSProf.LGE(20342, masterNode, 'masterId')[masterId], wrap, i, fc, df;
        if (JSProf.LRE(20343, match) && JSProf.LGE(20344, tagWrap, 'tag')[tag]) {
            wrap = JSProf.LWR(20346, wrap, JSProf.LGE(20345, tagWrap, 'tag')[tag]);
            JSProf.LPD(20350, master, 'innerHTML').innerHTML = JSProf.LRSP(20350, JSProf.LGD(20347, wrap, 'pre').pre + JSProf.LRE(20348, frag) + JSProf.LGD(20349, wrap, 'post').post);
            for (i = JSProf.LWR(20352, i, JSProf.LGD(20351, wrap, 'length').length); JSProf.LRE(20353, i); --i) {
                master = JSProf.LWR(20355, master, JSProf.LGD(20354, master, 'firstChild').firstChild);
            }
        } else {
            JSProf.LPD(20357, master, 'innerHTML').innerHTML = JSProf.LRSP(20357, JSProf.LRE(20356, frag));
        }
        // one node shortcut => return the node itself
        if (JSProf.LGD(20358, master.childNodes, 'length').length == 1) {
            return JSProf.LMC(20360, master, 'removeChild').removeChild(JSProf.LGD(20359, master, 'firstChild').firstChild);    // DOMNode
        }
        // return multiple nodes as a document fragment
        df = JSProf.LWR(20362, df, JSProf.LMC(20361, doc, 'createDocumentFragment').createDocumentFragment());
        while (fc = JSProf.LWR(20364, fc, JSProf.LGD(20363, master, 'firstChild').firstChild)) {
            // intentional assignment
            JSProf.LMC(20366, df, 'appendChild').appendChild(JSProf.LRE(20365, fc));
        }
        return JSProf.LRE(20367, df);    // DocumentFragment
    }, 12));
    JSProf.LPD(20416, exports, 'place').place = JSProf.LRSP(20416, JSProf.LNF(20415, function place(node, refNode, position) {
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
        refNode = JSProf.LWR(20372, refNode, JSProf.LMC(20371, dom, 'byId').byId(JSProf.LRE(20370, refNode)));
        if (typeof JSProf.LRE(20373, node) == "string") {
            // inline'd type check
            node = JSProf.LWR(20381, node, JSProf.LMC(20375, /^\s*</, 'test').test(JSProf.LRE(20374, node)) ? JSProf.LMC(20378, exports, 'toDom').toDom(JSProf.LRE(20376, node), JSProf.LGD(20377, refNode, 'ownerDocument').ownerDocument) : JSProf.LMC(20380, dom, 'byId').byId(JSProf.LRE(20379, node)));
        }
        if (typeof JSProf.LRE(20382, position) == "number") {
            // inline'd type check
            var cn = JSProf.LGD(20383, refNode, 'childNodes').childNodes;
            if (!JSProf.LGD(20384, cn, 'length').length || JSProf.LGD(20385, cn, 'length').length <= JSProf.LRE(20386, position)) {
                JSProf.LMC(20388, refNode, 'appendChild').appendChild(JSProf.LRE(20387, node));
            } else {
                JSProf.LFC(20393, _insertBefore, false)(JSProf.LRE(20389, node), JSProf.LGE(20392, cn, JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9 = JSProf.LRE(20390, position) < 0 ? 0 : JSProf.LRE(20391, position))[JSProf.TMPS.t399bb61b2710f046cd143d2c2c50754a3a506fc9]);
            }
        } else {
            switch (JSProf.LRE(20394, position)) {
            case "before":
                JSProf.LFC(20397, _insertBefore, false)(JSProf.LRE(20395, node), JSProf.LRE(20396, refNode));
                break;
            case "after":
                JSProf.LFC(20400, _insertAfter, false)(JSProf.LRE(20398, node), JSProf.LRE(20399, refNode));
                break;
            case "replace":
                JSProf.LMC(20403, refNode.parentNode, 'replaceChild').replaceChild(JSProf.LRE(20401, node), JSProf.LRE(20402, refNode));
                break;
            case "only":
                JSProf.LMC(20405, exports, 'empty').empty(JSProf.LRE(20404, refNode));
                JSProf.LMC(20407, refNode, 'appendChild').appendChild(JSProf.LRE(20406, node));
                break;
            case "first":
                if (JSProf.LGD(20408, refNode, 'firstChild').firstChild) {
                    JSProf.LFC(20411, _insertBefore, false)(JSProf.LRE(20409, node), JSProf.LGD(20410, refNode, 'firstChild').firstChild);
                    break;
                }
            // else fallthrough...
            default:
                // aka: last
                JSProf.LMC(20413, refNode, 'appendChild').appendChild(JSProf.LRE(20412, node));
            }
        }
        return JSProf.LRE(20414, node);    // DomNode
    }, 12));
    var create = JSProf.LPD(20439, exports, 'create').create = JSProf.LRSP(20439, JSProf.LNF(20438, function create(tag, attrs, refNode, pos) {
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
            var doc = JSProf.LGD(20417, win, 'doc').doc;
            if (JSProf.LRE(20418, refNode)) {
                refNode = JSProf.LWR(20421, refNode, JSProf.LMC(20420, dom, 'byId').byId(JSProf.LRE(20419, refNode)));
                doc = JSProf.LWR(20423, doc, JSProf.LGD(20422, refNode, 'ownerDocument').ownerDocument);
            }
            if (typeof JSProf.LRE(20424, tag) == "string") {
                // inline'd type check
                tag = JSProf.LWR(20427, tag, JSProf.LMC(20426, doc, 'createElement').createElement(JSProf.LRE(20425, tag)));
            }
            if (JSProf.LRE(20428, attrs)) {
                JSProf.LMC(20431, attr, 'set').set(JSProf.LRE(20429, tag), JSProf.LRE(20430, attrs));
            }
            if (JSProf.LRE(20432, refNode)) {
                JSProf.LMC(20436, exports, 'place').place(JSProf.LRE(20433, tag), JSProf.LRE(20434, refNode), JSProf.LRE(20435, pos));
            }
            return JSProf.LRE(20437, tag);    // DomNode
        }, 12));
    function _empty(node) {
        // TODO: remove this if() block in 2.0 when we no longer have to worry about IE memory leaks,
        // and then uncomment the emptyGrandchildren() test case from html.html.
        // Note that besides fixing #16957, using removeChild() is actually faster than setting node.innerHTML,
        // see http://jsperf.com/clear-dom-node.
        if ("innerHTML" in JSProf.LRE(20440, node)) {
            try {
                // fast path
                JSProf.LPD(20441, node, 'innerHTML').innerHTML = JSProf.LRSP(20441, "");
                return;
            } catch (e) {
            }
        }
        // SVG/strict elements don't support innerHTML
        for (var c; c = JSProf.LWR(20443, c, JSProf.LGD(20442, node, 'lastChild').lastChild);) {
            // intentional assignment
            JSProf.LMC(20445, node, 'removeChild').removeChild(JSProf.LRE(20444, c));
        }
    }
    JSProf.LPD(20450, exports, 'empty').empty = JSProf.LRSP(20450, JSProf.LNF(20449, function empty(node) {
        // summary:
        //		safely removes all children of the node.
        // node: DOMNode|String
        //		a reference to a DOM node or an id.
        // example:
        //		Destroy node's children byId:
        //	|	require(["dojo/dom-construct"], function(domConstruct){
        //	|		domConstruct.empty("someId");
        //	|	});
        JSProf.LFC(20448, _empty, false)(JSProf.LMC(20447, dom, 'byId').byId(JSProf.LRE(20446, node)));
    }, 12));
    function _destroy(node, parent) {
        // in IE quirks, node.canHaveChildren can be false but firstChild can be non-null (OBJECT/APPLET)
        if (JSProf.LGD(20451, node, 'firstChild').firstChild) {
            JSProf.LFC(20453, _empty, false)(JSProf.LRE(20452, node));
        }
        if (JSProf.LRE(20454, parent)) {
            // removeNode(false) doesn't leak in IE 6+, but removeChild() and removeNode(true) are known to leak under IE 8- while 9+ is TBD.
            // In IE quirks mode, PARAM nodes as children of OBJECT/APPLET nodes have a removeNode method that does nothing and
            // the parent node has canHaveChildren=false even though removeChild correctly removes the PARAM children.
            // In IE, SVG/strict nodes don't have a removeNode method nor a canHaveChildren boolean.
            JSProf.LFC(20455, has, false)("ie") && JSProf.LGD(20456, parent, 'canHaveChildren').canHaveChildren && "removeNode" in JSProf.LRE(20457, node) ? JSProf.LMC(20458, node, 'removeNode').removeNode(false) : JSProf.LMC(20460, parent, 'removeChild').removeChild(JSProf.LRE(20459, node));
        }
    }
    var destroy = JSProf.LPD(20469, exports, 'destroy').destroy = JSProf.LRSP(20469, JSProf.LNF(20468, function destroy(node) {
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
            node = JSProf.LWR(20463, node, JSProf.LMC(20462, dom, 'byId').byId(JSProf.LRE(20461, node)));
            if (!JSProf.LRE(20464, node)) {
                return;
            }
            JSProf.LFC(20467, _destroy, false)(JSProf.LRE(20465, node), JSProf.LGD(20466, node, 'parentNode').parentNode);
        }, 12));
}, 12));