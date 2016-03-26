JSProf.LFC(9021, define, false)(JSProf.LNE(8935, [
    "./sniff",
    "./_base/window"
], 10), JSProf.LNF(9020, function (has, win) {
    // module:
    //		dojo/dom
    // FIXME: need to add unit tests for all the semi-public methods
    if (JSProf.LFC(8936, has, false)("ie") <= 7) {
        try {
            JSProf.LMC(8937, document, 'execCommand').execCommand("BackgroundImageCache", false, true);
        } catch (e) {
        }
    }
    // =============================
    // DOM Functions
    // =============================
    // the result object
    var dom = JSProf.LNE(8938, {}, 11);
    if (JSProf.LFC(8939, has, false)("ie")) {
        JSProf.LPD(8969, dom, 'byId').byId = JSProf.LRSP(8969, JSProf.LNF(8968, function (id, doc) {
            if (typeof JSProf.LRE(8940, id) != "string") {
                return JSProf.LRE(8941, id);
            }
            var _d = JSProf.LRE(8942, doc) || JSProf.LGD(8943, win, 'doc').doc, te = JSProf.LRE(8944, id) && JSProf.LMC(8946, _d, 'getElementById').getElementById(JSProf.LRE(8945, id));
            // attributes.id.value is better than just id in case the
            // user has a name=id inside a form
            if (JSProf.LRE(8947, te) && (JSProf.LGD(8948, te.attributes.id, 'value').value == JSProf.LRE(8949, id) || JSProf.LGD(8950, te, 'id').id == JSProf.LRE(8951, id))) {
                return JSProf.LRE(8952, te);
            } else {
                var eles = JSProf.LGE(8953, _d.all, 'id')[id];
                if (!JSProf.LRE(8954, eles) || JSProf.LGD(8955, eles, 'nodeName').nodeName) {
                    eles = JSProf.LWR(8958, eles, JSProf.LNE(8957, [JSProf.LRE(8956, eles)], 10));
                }
                // if more than 1, choose first with the correct id
                var i = 0;
                while (te = JSProf.LWR(8960, te, JSProf.LGE(8959, eles, JSProf.TMPS.tca88d81aed65904c9283053fe0356044fc7e20b3 = i++)[JSProf.TMPS.tca88d81aed65904c9283053fe0356044fc7e20b3])) {
                    if (JSProf.LGD(8961, te, 'attributes').attributes && JSProf.LGD(8962, te.attributes, 'id').id && JSProf.LGD(8963, te.attributes.id, 'value').value == JSProf.LRE(8964, id) || JSProf.LGD(8965, te, 'id').id == JSProf.LRE(8966, id)) {
                        return JSProf.LRE(8967, te);
                    }
                }
            }
        }, 12));
    } else {
        JSProf.LPD(8977, dom, 'byId').byId = JSProf.LRSP(8977, JSProf.LNF(8976, function (id, doc) {
            // inline'd type check.
            // be sure to return null per documentation, to match IE branch.
            return (typeof JSProf.LRE(8970, id) == "string" ? JSProf.LMC(8974, JSProf.LRE(8971, doc) || JSProf.LGD(8972, win, 'doc').doc, 'getElementById').getElementById(JSProf.LRE(8973, id)) : JSProf.LRE(8975, id)) || null;    // DOMNode
        }, 12));
    }
    /*=====
    dom.byId = function(id, doc){
    // summary:
    //		Returns DOM node with matching `id` attribute or falsy value (ex: null or undefined)
    //		if not found.  If `id` is a DomNode, this function is a no-op.
    //
    // id: String|DOMNode
    //		A string to match an HTML id attribute or a reference to a DOM Node
    //
    // doc: Document?
    //		Document to work in. Defaults to the current value of
    //		dojo/_base/window.doc.  Can be used to retrieve
    //		node references from other documents.
    //
    // example:
    //		Look up a node by ID:
    //	|	require(["dojo/dom"], function(dom){
    //	|		var n = dom.byId("foo");
    //	|	});
    //
    // example:
    //		Check if a node exists, and use it.
    //	|	require(["dojo/dom"], function(dom){
    //	|		var n = dom.byId("bar");
    //	|		if(n){ doStuff() ... }
    //	|	});
    //
    // example:
    //		Allow string or DomNode references to be passed to a custom function:
    //	|	require(["dojo/dom"], function(dom){
    //	|		var foo = function(nodeOrId){
    //	|			nodeOrId = dom.byId(nodeOrId);
    //	|			// ... more stuff
    //	|		}
    //	|	});
    };
    =====*/
    JSProf.LPD(8990, dom, 'isDescendant').isDescendant = JSProf.LRSP(8990, JSProf.LNF(8989, function (node, ancestor) {
        // summary:
        //		Returns true if node is a descendant of ancestor
        // node: DOMNode|String
        //		string id or node reference to test
        // ancestor: DOMNode|String
        //		string id or node reference of potential parent to test against
        //
        // example:
        //		Test is node id="bar" is a descendant of node id="foo"
        //	|	require(["dojo/dom"], function(dom){
        //	|		if(dom.isDescendant("bar", "foo")){ ... }
        //	|	});
        try {
            node = JSProf.LWR(8980, node, JSProf.LMC(8979, dom, 'byId').byId(JSProf.LRE(8978, node)));
            ancestor = JSProf.LWR(8983, ancestor, JSProf.LMC(8982, dom, 'byId').byId(JSProf.LRE(8981, ancestor)));
            while (JSProf.LRE(8984, node)) {
                if (JSProf.LRE(8985, node) == JSProf.LRE(8986, ancestor)) {
                    return true;    // Boolean
                }
                node = JSProf.LWR(8988, node, JSProf.LGD(8987, node, 'parentNode').parentNode);
            }
        } catch (e) {
        }
        return false;    // Boolean
    }, 12));
    // TODO: do we need setSelectable in the base?
    // Add feature test for user-select CSS property
    // (currently known to work in all but IE < 10 and Opera)
    // TODO: The user-select CSS property as of May 2014 is no longer part of
    // any CSS specification. In IE, -ms-user-select does not do the same thing
    // as the unselectable attribute on elements; namely, dijit Editor buttons
    // do not properly prevent the content of the editable content frame from
    // unblurring. As a result, the -ms- prefixed version is omitted here.
    JSProf.LMC(9000, has, 'add').add("css-user-select", JSProf.LNF(8999, function (global, doc, element) {
        // Avoid exception when dom.js is loaded in non-browser environments
        if (!JSProf.LRE(8991, element)) {
            return false;
        }
        var style = JSProf.LGD(8992, element, 'style').style;
        var prefixes = JSProf.LNE(8993, [
                "Khtml",
                "O",
                "Moz",
                "Webkit"
            ], 10), i = JSProf.LGD(8994, prefixes, 'length').length, name = "userSelect", prefix;
        // Iterate prefixes from most to least likely
        do {
            if (typeof JSProf.LGE(8995, style, 'name')[name] !== "undefined") {
                // Supported; return property name
                return JSProf.LRE(8996, name);
            }
        } while (i-- && (name = JSProf.LWR(8998, name, JSProf.LGE(8997, prefixes, 'i')[i] + "UserSelect")));
        // Not supported if we didn't return before now
        return false;
    }, 12));
    /*=====
    	dom.setSelectable = function(node, selectable){
    		// summary:
    		//		Enable or disable selection on a node
    		// node: DOMNode|String
    		//		id or reference to node
    		// selectable: Boolean
    		//		state to put the node in. false indicates unselectable, true
    		//		allows selection.
    		// example:
    		//		Make the node id="bar" unselectable
    		//	|	require(["dojo/dom"], function(dom){
    		//	|		dom.setSelectable("bar");
    		//	|	});
    		// example:
    		//		Make the node id="bar" selectable
    		//	|	require(["dojo/dom"], function(dom){
    		//	|		dom.setSelectable("bar", true);
    		//	|	});
    	};
    	=====*/
    var cssUserSelect = JSProf.LFC(9001, has, false)("css-user-select");
    JSProf.LPD(9018, dom, 'setSelectable').setSelectable = JSProf.LRSP(9018, JSProf.LRE(9002, cssUserSelect) ? JSProf.LNF(9007, function (node, selectable) {
        // css-user-select returns a (possibly vendor-prefixed) CSS property name
        JSProf.LPE(9006, JSProf.LMC(9004, dom, 'byId').byId(JSProf.LRE(9003, node)).style, 'cssUserSelect')[cssUserSelect] = JSProf.LRPE(9006, JSProf.LRE(9005, selectable) ? "" : "none");
    }, 12) : JSProf.LNF(9017, function (node, selectable) {
        node = JSProf.LWR(9010, node, JSProf.LMC(9009, dom, 'byId').byId(JSProf.LRE(9008, node)));
        // (IE < 10 / Opera) Fall back to setting/removing the
        // unselectable attribute on the element and all its children
        var nodes = node.getElementsByTagName("*"), i = JSProf.LGD(9011, nodes, 'length').length;
        if (JSProf.LRE(9012, selectable)) {
            JSProf.LMC(9013, node, 'removeAttribute').removeAttribute("unselectable");
            while (i--) {
                JSProf.LMC(9014, nodes[i], 'removeAttribute').removeAttribute("unselectable");
            }
        } else {
            JSProf.LMC(9015, node, 'setAttribute').setAttribute("unselectable", "on");
            while (i--) {
                JSProf.LMC(9016, nodes[i], 'setAttribute').setAttribute("unselectable", "on");
            }
        }
    }, 12));
    return JSProf.LRE(9019, dom);
}, 12));