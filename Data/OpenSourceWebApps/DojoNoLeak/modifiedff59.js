JSProf.LFC(20929, define, false)(JSProf.LNE(20821, [
    "exports",
    "./sniff",
    "./_base/lang",
    "./dom",
    "./dom-style",
    "./dom-prop"
], 10), JSProf.LNF(20928, function (exports, has, lang, dom, style, prop) {
    JSProf.LFD(20927, _hasAttr);
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
    var forcePropNames = JSProf.LNE(20823, {
            innerHTML: 1,
            textContent: 1,
            className: 1,
            htmlFor: JSProf.LFC(20822, has, false)("ie"),
            value: 1
        }, 11), attrNames = JSProf.LNE(20824, {
            classname: "class",
            htmlfor: "for",
            tabindex: "tabIndex",
            readonly: "readOnly"
        }, 11);
    function _hasAttr(node, name) {
        var attr = JSProf.LGD(20825, node, 'getAttributeNode').getAttributeNode && JSProf.LMC(20827, node, 'getAttributeNode').getAttributeNode(JSProf.LRE(20826, name));
        return !!JSProf.LRE(20828, attr) && JSProf.LGD(20829, attr, 'specified').specified;    // Boolean
    }
    // There is a difference in the presence of certain properties and their default values
    // between browsers. For example, on IE "disabled" is present on all elements,
    // but it is value is "false"; "tabIndex" of <div> returns 0 by default on IE, yet other browsers
    // can return -1.
    JSProf.LPD(20839, exports, 'has').has = JSProf.LRSP(20839, JSProf.LNF(20838, function hasAttr(node, name) {
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
        return JSProf.LGE(20832, forcePropNames, JSProf.TMPS.t339da13dbf3b96e81b0cdde526b0db11d38b34b8 = JSProf.LGE(20830, prop.names, 'lc')[lc] || JSProf.LRE(20831, name))[JSProf.TMPS.t339da13dbf3b96e81b0cdde526b0db11d38b34b8] || JSProf.LFC(20837, _hasAttr, false)(JSProf.LMC(20834, dom, 'byId').byId(JSProf.LRE(20833, node)), JSProf.LGE(20835, attrNames, 'lc')[lc] || JSProf.LRE(20836, name));    // Boolean
    }, 12));
    JSProf.LPD(20867, exports, 'get').get = JSProf.LRSP(20867, JSProf.LNF(20866, function getAttr(node, name) {
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
        node = JSProf.LWR(20842, node, JSProf.LMC(20841, dom, 'byId').byId(JSProf.LRE(20840, node)));
        var lc = name.toLowerCase(), propName = JSProf.LGE(20843, prop.names, 'lc')[lc] || JSProf.LRE(20844, name), forceProp = JSProf.LGE(20845, forcePropNames, 'propName')[propName], value = JSProf.LGE(20846, node, 'propName')[propName];
        // should we access this attribute via a property or via getAttribute()?
        if (JSProf.LRE(20847, forceProp) && typeof JSProf.LRE(20848, value) != "undefined") {
            // node's property
            return JSProf.LRE(20849, value);    // Anything
        }
        if (JSProf.LRE(20850, propName) == "textContent") {
            return JSProf.LMC(20853, prop, 'get').get(JSProf.LRE(20851, node), JSProf.LRE(20852, propName));
        }
        if (JSProf.LRE(20854, propName) != "href" && (typeof JSProf.LRE(20855, value) == "boolean" || JSProf.LMC(20857, lang, 'isFunction').isFunction(JSProf.LRE(20856, value)))) {
            // node's property
            return JSProf.LRE(20858, value);    // Anything
        }
        // node's attribute
        // we need _hasAttr() here to guard against IE returning a default value
        var attrName = JSProf.LGE(20859, attrNames, 'lc')[lc] || JSProf.LRE(20860, name);
        return JSProf.LFC(20863, _hasAttr, false)(JSProf.LRE(20861, node), JSProf.LRE(20862, attrName)) ? JSProf.LMC(20865, node, 'getAttribute').getAttribute(JSProf.LRE(20864, attrName)) : null;    // Anything
    }, 12));
    JSProf.LPD(20901, exports, 'set').set = JSProf.LRSP(20901, JSProf.LNF(20900, function setAttr(node, name, value) {
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
        node = JSProf.LWR(20870, node, JSProf.LMC(20869, dom, 'byId').byId(JSProf.LRE(20868, node)));
        if (JSProf.LGD(20871, arguments, 'length').length == 2) {
            // inline'd type check
            // the object form of setter: the 2nd argument is a dictionary
            for (var x in JSProf.LRE(20872, name)) {
                JSProf.LMC(20876, exports, 'set').set(JSProf.LRE(20873, node), JSProf.LRE(20874, x), JSProf.LGE(20875, name, 'x')[x]);
            }
            return JSProf.LRE(20877, node);    // DomNode
        }
        var lc = name.toLowerCase(), propName = JSProf.LGE(20878, prop.names, 'lc')[lc] || JSProf.LRE(20879, name), forceProp = JSProf.LGE(20880, forcePropNames, 'propName')[propName];
        if (JSProf.LRE(20881, propName) == "style" && typeof JSProf.LRE(20882, value) != "string") {
            // inline'd type check
            // special case: setting a style
            JSProf.LMC(20885, style, 'set').set(JSProf.LRE(20883, node), JSProf.LRE(20884, value));
            return JSProf.LRE(20886, node);    // DomNode
        }
        if (JSProf.LRE(20887, forceProp) || typeof JSProf.LRE(20888, value) == "boolean" || JSProf.LMC(20890, lang, 'isFunction').isFunction(JSProf.LRE(20889, value))) {
            return JSProf.LMC(20894, prop, 'set').set(JSProf.LRE(20891, node), JSProf.LRE(20892, name), JSProf.LRE(20893, value));
        }
        // node's attribute
        JSProf.LMC(20898, node, 'setAttribute').setAttribute(JSProf.LGE(20895, attrNames, 'lc')[lc] || JSProf.LRE(20896, name), JSProf.LRE(20897, value));
        return JSProf.LRE(20899, node);    // DomNode
    }, 12));
    JSProf.LPD(20908, exports, 'remove').remove = JSProf.LRSP(20908, JSProf.LNF(20907, function removeAttr(node, name) {
        // summary:
        //		Removes an attribute from an HTML element.
        // node: DOMNode|String
        //		id or reference to the element to remove the attribute from
        // name: String
        //		the name of the attribute to remove
        JSProf.LMC(20906, JSProf.LMC(20903, dom, 'byId').byId(JSProf.LRE(20902, node)), 'removeAttribute').removeAttribute(JSProf.LGE(20904, attrNames, JSProf.TMPS.t6d4dfd10670cbea22ecdc88997502dff69365f30 = name.toLowerCase())[JSProf.TMPS.t6d4dfd10670cbea22ecdc88997502dff69365f30] || JSProf.LRE(20905, name));
    }, 12));
    JSProf.LPD(20926, exports, 'getNodeProp').getNodeProp = JSProf.LRSP(20926, JSProf.LNF(20925, function getNodeProp(node, name) {
        // summary:
        //		Returns an effective value of a property or an attribute.
        // node: DOMNode|String
        //		id or reference to the element to remove the attribute from
        // name: String
        //		the name of the attribute
        // returns:
        //		the value of the attribute
        node = JSProf.LWR(20911, node, JSProf.LMC(20910, dom, 'byId').byId(JSProf.LRE(20909, node)));
        var lc = name.toLowerCase(), propName = JSProf.LGE(20912, prop.names, 'lc')[lc] || JSProf.LRE(20913, name);
        if (JSProf.LRE(20914, propName) in JSProf.LRE(20915, node) && JSProf.LRE(20916, propName) != "href") {
            // node's property
            return JSProf.LGE(20917, node, 'propName')[propName];    // Anything
        }
        // node's attribute
        var attrName = JSProf.LGE(20918, attrNames, 'lc')[lc] || JSProf.LRE(20919, name);
        return JSProf.LFC(20922, _hasAttr, false)(JSProf.LRE(20920, node), JSProf.LRE(20921, attrName)) ? JSProf.LMC(20924, node, 'getAttribute').getAttribute(JSProf.LRE(20923, attrName)) : null;    // Anything
    }, 12));
}, 12));