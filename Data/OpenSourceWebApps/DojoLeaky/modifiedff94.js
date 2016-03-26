JSProf.LFC(32428, define, false)(JSProf.LNE(32331, [
    "exports",
    "./_base/kernel",
    "./sniff",
    "./_base/lang",
    "./dom",
    "./dom-style",
    "./dom-construct",
    "./_base/connect"
], 10), JSProf.LNF(32427, function (exports, dojo, has, lang, dom, style, ctr, conn) {
    JSProf.LFD(32426, getText);
    // module:
    //		dojo/dom-prop
    // summary:
    //		This module defines the core dojo DOM properties API.
    // TODOC: summary not showing up in output, see https://github.com/csnover/js-doc-parse/issues/42
    // =============================
    // Element properties Functions
    // =============================
    // helper to connect events
    var _evtHdlrMap = JSProf.LNE(32332, {}, 11), _ctr = 0, _attrId = JSProf.LGD(32333, dojo, '_scopeName')._scopeName + "attrid";
    JSProf.LMC(32336, has, 'add').add('dom-textContent', JSProf.LNF(32335, function (global, doc, element) {
        return 'textContent' in JSProf.LRE(32334, element);
    }, 12));
    JSProf.LPD(32338, exports, 'names').names = JSProf.LRSP(32338, JSProf.LNE(32337, {
        "class": "className",
        "for": "htmlFor",
        tabindex: "tabIndex",
        readonly: "readOnly",
        colspan: "colSpan",
        frameborder: "frameBorder",
        rowspan: "rowSpan",
        textcontent: "textContent",
        valuetype: "valueType"
    }, 11));
    function getText(node) {
        // summary:
        //		recursion method for get('textContent') to use. Gets text value for a node.
        // description:
        //		Juse uses nodedValue so things like <br/> tags do not end up in
        //		the text as any sort of line return.
        var text = "", ch = JSProf.LGD(32339, node, 'childNodes').childNodes;
        for (var i = 0, n; n = JSProf.LWR(32341, n, JSProf.LGE(32340, ch, 'i')[i]); i++) {
            //Skip comments.
            if (JSProf.LGD(32342, n, 'nodeType').nodeType != 8) {
                if (JSProf.LGD(32343, n, 'nodeType').nodeType == 1) {
                    text += JSProf.LFC(32345, getText, false)(JSProf.LRE(32344, n));
                } else {
                    text += JSProf.LGD(32346, n, 'nodeValue').nodeValue;
                }
            }
        }
        return JSProf.LRE(32347, text);
    }
    JSProf.LPD(32359, exports, 'get').get = JSProf.LRSP(32359, JSProf.LNF(32358, function getProp(node, name) {
        // summary:
        //		Gets a property on an HTML element.
        // description:
        //		Handles normalized getting of properties on DOM nodes.
        //
        // node: DOMNode|String
        //		id or reference to the element to get the property on
        // name: String
        //		the name of the property to get.
        // returns:
        //		the value of the requested property or its default value
        //
        // example:
        //	|	// get the current value of the "foo" property on a node
        //	|	require(["dojo/dom-prop", "dojo/dom"], function(domProp, dom){
        //	|		domProp.get(dom.byId("nodeId"), "foo");
        //	|		// or we can just pass the id:
        //	|		domProp.get("nodeId", "foo");
        //	|	});
        node = JSProf.LWR(32350, node, JSProf.LMC(32349, dom, 'byId').byId(JSProf.LRE(32348, node)));
        var lc = name.toLowerCase(), propName = JSProf.LGE(32351, exports.names, 'lc')[lc] || JSProf.LRE(32352, name);
        if (JSProf.LRE(32353, propName) == "textContent" && !JSProf.LFC(32354, has, false)("dom-textContent")) {
            return JSProf.LFC(32356, getText, false)(JSProf.LRE(32355, node));
        }
        return JSProf.LGE(32357, node, 'propName')[propName];    // Anything
    }, 12));
    JSProf.LPD(32425, exports, 'set').set = JSProf.LRSP(32425, JSProf.LNF(32424, function setProp(node, name, value) {
        // summary:
        //		Sets a property on an HTML element.
        // description:
        //		Handles normalized setting of properties on DOM nodes.
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
        //		id or reference to the element to set the property on
        // name: String|Object
        //		the name of the property to set, or a hash object to set
        //		multiple properties at once.
        // value: String?
        //		The value to set for the property
        // returns:
        //		the DOM node
        //
        // example:
        //	|	// use prop() to set the tab index
        //	|	require(["dojo/dom-prop"], function(domProp){
        //	|		domProp.set("nodeId", "tabIndex", 3);
        //	|	});
        //
        // example:
        //	Set multiple values at once, including event handlers:
        //	|	require(["dojo/dom-prop"], function(domProp){
        //	|		domProp.set("formId", {
        //	|			"foo": "bar",
        //	|			"tabIndex": -1,
        //	|			"method": "POST",
        //	|		});
        //	|	});
        node = JSProf.LWR(32362, node, JSProf.LMC(32361, dom, 'byId').byId(JSProf.LRE(32360, node)));
        var l = JSProf.LGD(32363, arguments, 'length').length;
        if (JSProf.LRE(32364, l) == 2 && typeof JSProf.LRE(32365, name) != "string") {
            // inline'd type check
            // the object form of setter: the 2nd argument is a dictionary
            for (var x in JSProf.LRE(32366, name)) {
                JSProf.LMC(32370, exports, 'set').set(JSProf.LRE(32367, node), JSProf.LRE(32368, x), JSProf.LGE(32369, name, 'x')[x]);
            }
            return JSProf.LRE(32371, node);    // DomNode
        }
        var lc = name.toLowerCase(), propName = JSProf.LGE(32372, exports.names, 'lc')[lc] || JSProf.LRE(32373, name);
        if (JSProf.LRE(32374, propName) == "style" && typeof JSProf.LRE(32375, value) != "string") {
            // inline'd type check
            // special case: setting a style
            JSProf.LMC(32378, style, 'set').set(JSProf.LRE(32376, node), JSProf.LRE(32377, value));
            return JSProf.LRE(32379, node);    // DomNode
        }
        if (JSProf.LRE(32380, propName) == "innerHTML") {
            // special case: assigning HTML
            // the hash lists elements with read-only innerHTML on IE
            if (JSProf.LFC(32381, has, false)("ie") && node.tagName.toLowerCase() in JSProf.LNE(32382, {
                    col: 1,
                    colgroup: 1,
                    table: 1,
                    tbody: 1,
                    tfoot: 1,
                    thead: 1,
                    tr: 1,
                    title: 1
                }, 11)) {
                JSProf.LMC(32384, ctr, 'empty').empty(JSProf.LRE(32383, node));
                JSProf.LMC(32388, node, 'appendChild').appendChild(JSProf.LMC(32387, ctr, 'toDom').toDom(JSProf.LRE(32385, value), JSProf.LGD(32386, node, 'ownerDocument').ownerDocument));
            } else {
                JSProf.LPE(32390, node, 'propName')[propName] = JSProf.LRPE(32390, JSProf.LRE(32389, value));
            }
            return JSProf.LRE(32391, node);    // DomNode
        }
        if (JSProf.LRE(32392, propName) == "textContent" && !JSProf.LFC(32393, has, false)("dom-textContent")) {
            JSProf.LMC(32395, ctr, 'empty').empty(JSProf.LRE(32394, node));
            JSProf.LMC(32398, node, 'appendChild').appendChild(JSProf.LMC(32397, node.ownerDocument, 'createTextNode').createTextNode(JSProf.LRE(32396, value)));
            return JSProf.LRE(32399, node);
        }
        if (JSProf.LMC(32401, lang, 'isFunction').isFunction(JSProf.LRE(32400, value))) {
            // special case: assigning an event handler
            // clobber if we can
            var attrId = JSProf.LGE(32402, node, '_attrId')[_attrId];
            if (!JSProf.LRE(32403, attrId)) {
                attrId = JSProf.LWR(32404, attrId, _ctr++);
                JSProf.LPE(32406, node, '_attrId')[_attrId] = JSProf.LRPE(32406, JSProf.LRE(32405, attrId));
            }
            if (!JSProf.LGE(32407, _evtHdlrMap, 'attrId')[attrId]) {
                JSProf.LPE(32409, _evtHdlrMap, 'attrId')[attrId] = JSProf.LRPE(32409, JSProf.LNE(32408, {}, 11));
            }
            var h = JSProf.LGE(32410, _evtHdlrMap[attrId], 'propName')[propName];
            if (JSProf.LRE(32411, h)) {
                //h.remove();
                JSProf.LMC(32413, conn, 'disconnect').disconnect(JSProf.LRE(32412, h));
            } else {
                try {
                    delete node[propName];
                } catch (e) {
                }
            }
            // ensure that event objects are normalized, etc.
            if (JSProf.LRE(32414, value)) {
                //_evtHdlrMap[attrId][propName] = on(node, propName, value);
                JSProf.LPE(32419, _evtHdlrMap[attrId], 'propName')[propName] = JSProf.LRPE(32419, JSProf.LMC(32418, conn, 'connect').connect(JSProf.LRE(32415, node), JSProf.LRE(32416, propName), JSProf.LRE(32417, value)));
            } else {
                node[propName] = null;
            }
            return JSProf.LRE(32420, node);    // DomNode
        }
        JSProf.LPE(32422, node, 'propName')[propName] = JSProf.LRPE(32422, JSProf.LRE(32421, value));
        return JSProf.LRE(32423, node);    // DomNode
    }, 12));
}, 12));