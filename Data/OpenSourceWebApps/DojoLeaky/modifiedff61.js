JSProf.LFC(22273, define, false)(JSProf.LNE(22165, [
    "exports",
    "./sniff",
    "./_base/lang",
    "./dom",
    "./dom-style",
    "./dom-prop"
], 10), JSProf.LNF(22272, function (exports, has, lang, dom, style, prop) {
    JSProf.LFD(22271, _hasAttr);
    // module:
    //		dojo/dom-attr
    // summary:
    //		This module defines the core dojo DOM attributes API.
    // TODOC: summary not showing up in output see https://github.com/csnover/js-doc-parse/issues/42
    // =============================
    // Element attribute Functions
    // =============================
    // This module will be obsolete soon. Use dojo/prop instead.
    // dojo/dom-attr.get() should conform to http://www.w3.org/TR/DOM-Level-2-Core/
    // attribute-related functions (to be obsolete soon)
    var forcePropNames = JSProf.LNE(22167, {
            innerHTML: 1,
            textContent: 1,
            className: 1,
            htmlFor: JSProf.LFC(22166, has, false)("ie"),
            value: 1
        }, 11), attrNames = JSProf.LNE(22168, {
            classname: "class",
            htmlfor: "for",
            tabindex: "tabIndex",
            readonly: "readOnly"
        }, 11);
    function _hasAttr(node, name) {
        var attr = JSProf.LGD(22169, node, 'getAttributeNode').getAttributeNode && JSProf.LMC(22171, node, 'getAttributeNode').getAttributeNode(JSProf.LRE(22170, name));
        return !!JSProf.LRE(22172, attr) && JSProf.LGD(22173, attr, 'specified').specified;    // Boolean
    }
    // There is a difference in the presence of certain properties and their default values
    // between browsers. For example, on IE "disabled" is present on all elements,
    // but it is value is "false"; "tabIndex" of <div> returns 0 by default on IE, yet other browsers
    // can return -1.
    JSProf.LPD(22183, exports, 'has').has = JSProf.LRSP(22183, JSProf.LNF(22182, function hasAttr(node, name) {
        // summary:
        //		Returns true if the requested attribute is specified on the
        //		given element, and false otherwise.
        // node: DOMNode|String
        //		id or reference to the element to check
        // name: String
        //		the name of the attribute
        // returns: Boolean
        //		true if the requested attribute is specified on the
        //		given element, and false otherwise
        var lc = name.toLowerCase();
        return JSProf.LGE(22176, forcePropNames, JSProf.TMPS.t339da13dbf3b96e81b0cdde526b0db11d38b34b8 = JSProf.LGE(22174, prop.names, 'lc')[lc] || JSProf.LRE(22175, name))[JSProf.TMPS.t339da13dbf3b96e81b0cdde526b0db11d38b34b8] || JSProf.LFC(22181, _hasAttr, false)(JSProf.LMC(22178, dom, 'byId').byId(JSProf.LRE(22177, node)), JSProf.LGE(22179, attrNames, 'lc')[lc] || JSProf.LRE(22180, name));    // Boolean
    }, 12));
    JSProf.LPD(22211, exports, 'get').get = JSProf.LRSP(22211, JSProf.LNF(22210, function getAttr(node, name) {
        // summary:
        //		Gets an attribute on an HTML element.
        // description:
        //		Handles normalized getting of attributes on DOM Nodes.
        // node: DOMNode|String
        //		id or reference to the element to get the attribute on
        // name: String
        //		the name of the attribute to get.
        // returns:
        //		the value of the requested attribute or null if that attribute does not have a specified or
        //		default value;
        //
        // example:
        //	|	// get the current value of the "foo" attribute on a node
        //	|	require(["dojo/dom-attr", "dojo/dom"], function(domAttr, dom){
        //	|		domAttr.get(dom.byId("nodeId"), "foo");
        //	|		// or we can just pass the id:
        //	|		domAttr.get("nodeId", "foo");
        //	|	});	
        //	|	
        node = JSProf.LWR(22186, node, JSProf.LMC(22185, dom, 'byId').byId(JSProf.LRE(22184, node)));
        var lc = name.toLowerCase(), propName = JSProf.LGE(22187, prop.names, 'lc')[lc] || JSProf.LRE(22188, name), forceProp = JSProf.LGE(22189, forcePropNames, 'propName')[propName], value = JSProf.LGE(22190, node, 'propName')[propName];
        // should we access this attribute via a property or via getAttribute()?
        if (JSProf.LRE(22191, forceProp) && typeof JSProf.LRE(22192, value) != "undefined") {
            // node's property
            return JSProf.LRE(22193, value);    // Anything
        }
        if (JSProf.LRE(22194, propName) == "textContent") {
            return JSProf.LMC(22197, prop, 'get').get(JSProf.LRE(22195, node), JSProf.LRE(22196, propName));
        }
        if (JSProf.LRE(22198, propName) != "href" && (typeof JSProf.LRE(22199, value) == "boolean" || JSProf.LMC(22201, lang, 'isFunction').isFunction(JSProf.LRE(22200, value)))) {
            // node's property
            return JSProf.LRE(22202, value);    // Anything
        }
        // node's attribute
        // we need _hasAttr() here to guard against IE returning a default value
        var attrName = JSProf.LGE(22203, attrNames, 'lc')[lc] || JSProf.LRE(22204, name);
        return JSProf.LFC(22207, _hasAttr, false)(JSProf.LRE(22205, node), JSProf.LRE(22206, attrName)) ? JSProf.LMC(22209, node, 'getAttribute').getAttribute(JSProf.LRE(22208, attrName)) : null;    // Anything
    }, 12));
    JSProf.LPD(22245, exports, 'set').set = JSProf.LRSP(22245, JSProf.LNF(22244, function setAttr(node, name, value) {
        // summary:
        //		Sets an attribute on an HTML element.
        // description:
        //		Handles normalized setting of attributes on DOM Nodes.
        //
        //		When passing functions as values, note that they will not be
        //		directly assigned to slots on the node, but rather the default
        //		behavior will be removed and the new behavior will be added
        //		using `dojo.connect()`, meaning that event handler properties
        //		will be normalized and that some caveats with regards to
        //		non-standard behaviors for onsubmit apply. Namely that you
        //		should cancel form submission using `dojo.stopEvent()` on the
        //		passed event object instead of returning a boolean value from
        //		the handler itself.
        // node: DOMNode|String
        //		id or reference to the element to set the attribute on
        // name: String|Object
        //		the name of the attribute to set, or a hash of key-value pairs to set.
        // value: String?
        //		the value to set for the attribute, if the name is a string.
        // returns:
        //		the DOM node
        //
        // example:
        //	|	// use attr() to set the tab index
        //	|	require(["dojo/dom-attr"], function(domAttr){
        //	|		domAttr.set("nodeId", "tabIndex", 3);
        //	|	});
        //
        // example:
        //	Set multiple values at once, including event handlers:
        //	|	require(["dojo/dom-attr"],
        //	|	function(domAttr){
        //	|		domAttr.set("formId", {
        //	|			"foo": "bar",
        //	|			"tabIndex": -1,
        //	|			"method": "POST"
        //	|		}
        //	|	});
        node = JSProf.LWR(22214, node, JSProf.LMC(22213, dom, 'byId').byId(JSProf.LRE(22212, node)));
        if (JSProf.LGD(22215, arguments, 'length').length == 2) {
            // inline'd type check
            // the object form of setter: the 2nd argument is a dictionary
            for (var x in JSProf.LRE(22216, name)) {
                JSProf.LMC(22220, exports, 'set').set(JSProf.LRE(22217, node), JSProf.LRE(22218, x), JSProf.LGE(22219, name, 'x')[x]);
            }
            return JSProf.LRE(22221, node);    // DomNode
        }
        var lc = name.toLowerCase(), propName = JSProf.LGE(22222, prop.names, 'lc')[lc] || JSProf.LRE(22223, name), forceProp = JSProf.LGE(22224, forcePropNames, 'propName')[propName];
        if (JSProf.LRE(22225, propName) == "style" && typeof JSProf.LRE(22226, value) != "string") {
            // inline'd type check
            // special case: setting a style
            JSProf.LMC(22229, style, 'set').set(JSProf.LRE(22227, node), JSProf.LRE(22228, value));
            return JSProf.LRE(22230, node);    // DomNode
        }
        if (JSProf.LRE(22231, forceProp) || typeof JSProf.LRE(22232, value) == "boolean" || JSProf.LMC(22234, lang, 'isFunction').isFunction(JSProf.LRE(22233, value))) {
            return JSProf.LMC(22238, prop, 'set').set(JSProf.LRE(22235, node), JSProf.LRE(22236, name), JSProf.LRE(22237, value));
        }
        // node's attribute
        JSProf.LMC(22242, node, 'setAttribute').setAttribute(JSProf.LGE(22239, attrNames, 'lc')[lc] || JSProf.LRE(22240, name), JSProf.LRE(22241, value));
        return JSProf.LRE(22243, node);    // DomNode
    }, 12));
    JSProf.LPD(22252, exports, 'remove').remove = JSProf.LRSP(22252, JSProf.LNF(22251, function removeAttr(node, name) {
        // summary:
        //		Removes an attribute from an HTML element.
        // node: DOMNode|String
        //		id or reference to the element to remove the attribute from
        // name: String
        //		the name of the attribute to remove
        JSProf.LMC(22250, JSProf.LMC(22247, dom, 'byId').byId(JSProf.LRE(22246, node)), 'removeAttribute').removeAttribute(JSProf.LGE(22248, attrNames, JSProf.TMPS.t6d4dfd10670cbea22ecdc88997502dff69365f30 = name.toLowerCase())[JSProf.TMPS.t6d4dfd10670cbea22ecdc88997502dff69365f30] || JSProf.LRE(22249, name));
    }, 12));
    JSProf.LPD(22270, exports, 'getNodeProp').getNodeProp = JSProf.LRSP(22270, JSProf.LNF(22269, function getNodeProp(node, name) {
        // summary:
        //		Returns an effective value of a property or an attribute.
        // node: DOMNode|String
        //		id or reference to the element to remove the attribute from
        // name: String
        //		the name of the attribute
        // returns:
        //		the value of the attribute
        node = JSProf.LWR(22255, node, JSProf.LMC(22254, dom, 'byId').byId(JSProf.LRE(22253, node)));
        var lc = name.toLowerCase(), propName = JSProf.LGE(22256, prop.names, 'lc')[lc] || JSProf.LRE(22257, name);
        if (JSProf.LRE(22258, propName) in JSProf.LRE(22259, node) && JSProf.LRE(22260, propName) != "href") {
            // node's property
            return JSProf.LGE(22261, node, 'propName')[propName];    // Anything
        }
        // node's attribute
        var attrName = JSProf.LGE(22262, attrNames, 'lc')[lc] || JSProf.LRE(22263, name);
        return JSProf.LFC(22266, _hasAttr, false)(JSProf.LRE(22264, node), JSProf.LRE(22265, attrName)) ? JSProf.LMC(22268, node, 'getAttribute').getAttribute(JSProf.LRE(22267, attrName)) : null;    // Anything
    }, 12));
}, 12));