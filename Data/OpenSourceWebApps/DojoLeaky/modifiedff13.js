JSProf.LFC(9404, define, false)(JSProf.LNE(9318, [
    "./sniff",
    "./_base/window"
], 10), JSProf.LNF(9403, function (has, win) {
    // module:
    //		dojo/dom
    // FIXME: need to add unit tests for all the semi-public methods
    if (JSProf.LFC(9319, has, false)("ie") <= 7) {
        try {
            JSProf.LMC(9320, document, 'execCommand').execCommand("BackgroundImageCache", false, true);
        } catch (e) {
        }
    }
    // =============================
    // DOM Functions
    // =============================
    // the result object
    var dom = JSProf.LNE(9321, {}, 11);
    if (JSProf.LFC(9322, has, false)("ie")) {
        JSProf.LPD(9352, dom, 'byId').byId = JSProf.LRSP(9352, JSProf.LNF(9351, function (id, doc) {
            if (typeof JSProf.LRE(9323, id) != "string") {
                return JSProf.LRE(9324, id);
            }
            var _d = JSProf.LRE(9325, doc) || JSProf.LGD(9326, win, 'doc').doc, te = JSProf.LRE(9327, id) && JSProf.LMC(9329, _d, 'getElementById').getElementById(JSProf.LRE(9328, id));
            // attributes.id.value is better than just id in case the
            // user has a name=id inside a form
            if (JSProf.LRE(9330, te) && (JSProf.LGD(9331, te.attributes.id, 'value').value == JSProf.LRE(9332, id) || JSProf.LGD(9333, te, 'id').id == JSProf.LRE(9334, id))) {
                return JSProf.LRE(9335, te);
            } else {
                var eles = JSProf.LGE(9336, _d.all, 'id')[id];
                if (!JSProf.LRE(9337, eles) || JSProf.LGD(9338, eles, 'nodeName').nodeName) {
                    eles = JSProf.LWR(9341, eles, JSProf.LNE(9340, [JSProf.LRE(9339, eles)], 10));
                }
                // if more than 1, choose first with the correct id
                var i = 0;
                while (te = JSProf.LWR(9343, te, JSProf.LGE(9342, eles, JSProf.TMPS.tca88d81aed65904c9283053fe0356044fc7e20b3 = i++)[JSProf.TMPS.tca88d81aed65904c9283053fe0356044fc7e20b3])) {
                    if (JSProf.LGD(9344, te, 'attributes').attributes && JSProf.LGD(9345, te.attributes, 'id').id && JSProf.LGD(9346, te.attributes.id, 'value').value == JSProf.LRE(9347, id) || JSProf.LGD(9348, te, 'id').id == JSProf.LRE(9349, id)) {
                        return JSProf.LRE(9350, te);
                    }
                }
            }
        }, 12));
    } else {
        JSProf.LPD(9360, dom, 'byId').byId = JSProf.LRSP(9360, JSProf.LNF(9359, function (id, doc) {
            // inline'd type check.
            // be sure to return null per documentation, to match IE branch.
            return (typeof JSProf.LRE(9353, id) == "string" ? JSProf.LMC(9357, JSProf.LRE(9354, doc) || JSProf.LGD(9355, win, 'doc').doc, 'getElementById').getElementById(JSProf.LRE(9356, id)) : JSProf.LRE(9358, id)) || null;    // DOMNode
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
    JSProf.LPD(9373, dom, 'isDescendant').isDescendant = JSProf.LRSP(9373, JSProf.LNF(9372, function (node, ancestor) {
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
            node = JSProf.LWR(9363, node, JSProf.LMC(9362, dom, 'byId').byId(JSProf.LRE(9361, node)));
            ancestor = JSProf.LWR(9366, ancestor, JSProf.LMC(9365, dom, 'byId').byId(JSProf.LRE(9364, ancestor)));
            while (JSProf.LRE(9367, node)) {
                if (JSProf.LRE(9368, node) == JSProf.LRE(9369, ancestor)) {
                    return true;    // Boolean
                }
                node = JSProf.LWR(9371, node, JSProf.LGD(9370, node, 'parentNode').parentNode);
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
    JSProf.LMC(9383, has, 'add').add("css-user-select", JSProf.LNF(9382, function (global, doc, element) {
        // Avoid exception when dom.js is loaded in non-browser environments
        if (!JSProf.LRE(9374, element)) {
            return false;
        }
        var style = JSProf.LGD(9375, element, 'style').style;
        var prefixes = JSProf.LNE(9376, [
                "Khtml",
                "O",
                "Moz",
                "Webkit"
            ], 10), i = JSProf.LGD(9377, prefixes, 'length').length, name = "userSelect", prefix;
        // Iterate prefixes from most to least likely
        do {
            if (typeof JSProf.LGE(9378, style, 'name')[name] !== "undefined") {
                // Supported; return property name
                return JSProf.LRE(9379, name);
            }
        } while (i-- && (name = JSProf.LWR(9381, name, JSProf.LGE(9380, prefixes, 'i')[i] + "UserSelect")));
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
    var cssUserSelect = JSProf.LFC(9384, has, false)("css-user-select");
    JSProf.LPD(9401, dom, 'setSelectable').setSelectable = JSProf.LRSP(9401, JSProf.LRE(9385, cssUserSelect) ? JSProf.LNF(9390, function (node, selectable) {
        // css-user-select returns a (possibly vendor-prefixed) CSS property name
        JSProf.LPE(9389, JSProf.LMC(9387, dom, 'byId').byId(JSProf.LRE(9386, node)).style, 'cssUserSelect')[cssUserSelect] = JSProf.LRPE(9389, JSProf.LRE(9388, selectable) ? "" : "none");
    }, 12) : JSProf.LNF(9400, function (node, selectable) {
        node = JSProf.LWR(9393, node, JSProf.LMC(9392, dom, 'byId').byId(JSProf.LRE(9391, node)));
        // (IE < 10 / Opera) Fall back to setting/removing the
        // unselectable attribute on the element and all its children
        var nodes = node.getElementsByTagName("*"), i = JSProf.LGD(9394, nodes, 'length').length;
        if (JSProf.LRE(9395, selectable)) {
            JSProf.LMC(9396, node, 'removeAttribute').removeAttribute("unselectable");
            while (i--) {
                JSProf.LMC(9397, nodes[i], 'removeAttribute').removeAttribute("unselectable");
            }
        } else {
            JSProf.LMC(9398, node, 'setAttribute').setAttribute("unselectable", "on");
            while (i--) {
                JSProf.LMC(9399, nodes[i], 'setAttribute').setAttribute("unselectable", "on");
            }
        }
    }, 12));
    return JSProf.LRE(9402, dom);
}, 12));