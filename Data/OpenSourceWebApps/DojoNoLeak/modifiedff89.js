JSProf.LFC(30571, define, false)(JSProf.LNE(30474, [
    "exports",
    "./_base/kernel",
    "./sniff",
    "./_base/lang",
    "./dom",
    "./dom-style",
    "./dom-construct",
    "./_base/connect"
], 10), JSProf.LNF(30570, function (exports, dojo, has, lang, dom, style, ctr, conn) {
    JSProf.LFD(30569, getText);
    // module:
    //		dojo/dom-prop
    // summary:
    //		This module defines the core dojo DOM properties API.
    // TODOC: summary not showing up in output, see https://github.com/csnover/js-doc-parse/issues/42
    // =============================
    // Element properties Functions
    // =============================
    // helper to connect events
    var _evtHdlrMap = JSProf.LNE(30475, {}, 11), _ctr = 0, _attrId = JSProf.LGD(30476, dojo, '_scopeName')._scopeName + "attrid";
    JSProf.LMC(30479, has, 'add').add('dom-textContent', JSProf.LNF(30478, function (global, doc, element) {
        return 'textContent' in JSProf.LRE(30477, element);
    }, 12));
    JSProf.LPD(30481, exports, 'names').names = JSProf.LRSP(30481, JSProf.LNE(30480, {
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
        var text = "", ch = JSProf.LGD(30482, node, 'childNodes').childNodes;
        for (var i = 0, n; n = JSProf.LWR(30484, n, JSProf.LGE(30483, ch, 'i')[i]); i++) {
            //Skip comments.
            if (JSProf.LGD(30485, n, 'nodeType').nodeType != 8) {
                if (JSProf.LGD(30486, n, 'nodeType').nodeType == 1) {
                    text += JSProf.LFC(30488, getText, false)(JSProf.LRE(30487, n));
                } else {
                    text += JSProf.LGD(30489, n, 'nodeValue').nodeValue;
                }
            }
        }
        return JSProf.LRE(30490, text);
    }
    JSProf.LPD(30502, exports, 'get').get = JSProf.LRSP(30502, JSProf.LNF(30501, function getProp(node, name) {
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
        node = JSProf.LWR(30493, node, JSProf.LMC(30492, dom, 'byId').byId(JSProf.LRE(30491, node)));
        var lc = name.toLowerCase(), propName = JSProf.LGE(30494, exports.names, 'lc')[lc] || JSProf.LRE(30495, name);
        if (JSProf.LRE(30496, propName) == "textContent" && !JSProf.LFC(30497, has, false)("dom-textContent")) {
            return JSProf.LFC(30499, getText, false)(JSProf.LRE(30498, node));
        }
        return JSProf.LGE(30500, node, 'propName')[propName];    // Anything
    }, 12));
    JSProf.LPD(30568, exports, 'set').set = JSProf.LRSP(30568, JSProf.LNF(30567, function setProp(node, name, value) {
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
        node = JSProf.LWR(30505, node, JSProf.LMC(30504, dom, 'byId').byId(JSProf.LRE(30503, node)));
        var l = JSProf.LGD(30506, arguments, 'length').length;
        if (JSProf.LRE(30507, l) == 2 && typeof JSProf.LRE(30508, name) != "string") {
            // inline'd type check
            // the object form of setter: the 2nd argument is a dictionary
            for (var x in JSProf.LRE(30509, name)) {
                JSProf.LMC(30513, exports, 'set').set(JSProf.LRE(30510, node), JSProf.LRE(30511, x), JSProf.LGE(30512, name, 'x')[x]);
            }
            return JSProf.LRE(30514, node);    // DomNode
        }
        var lc = name.toLowerCase(), propName = JSProf.LGE(30515, exports.names, 'lc')[lc] || JSProf.LRE(30516, name);
        if (JSProf.LRE(30517, propName) == "style" && typeof JSProf.LRE(30518, value) != "string") {
            // inline'd type check
            // special case: setting a style
            JSProf.LMC(30521, style, 'set').set(JSProf.LRE(30519, node), JSProf.LRE(30520, value));
            return JSProf.LRE(30522, node);    // DomNode
        }
        if (JSProf.LRE(30523, propName) == "innerHTML") {
            // special case: assigning HTML
            // the hash lists elements with read-only innerHTML on IE
            if (JSProf.LFC(30524, has, false)("ie") && node.tagName.toLowerCase() in JSProf.LNE(30525, {
                    col: 1,
                    colgroup: 1,
                    table: 1,
                    tbody: 1,
                    tfoot: 1,
                    thead: 1,
                    tr: 1,
                    title: 1
                }, 11)) {
                JSProf.LMC(30527, ctr, 'empty').empty(JSProf.LRE(30526, node));
                JSProf.LMC(30531, node, 'appendChild').appendChild(JSProf.LMC(30530, ctr, 'toDom').toDom(JSProf.LRE(30528, value), JSProf.LGD(30529, node, 'ownerDocument').ownerDocument));
            } else {
                JSProf.LPE(30533, node, 'propName')[propName] = JSProf.LRPE(30533, JSProf.LRE(30532, value));
            }
            return JSProf.LRE(30534, node);    // DomNode
        }
        if (JSProf.LRE(30535, propName) == "textContent" && !JSProf.LFC(30536, has, false)("dom-textContent")) {
            JSProf.LMC(30538, ctr, 'empty').empty(JSProf.LRE(30537, node));
            JSProf.LMC(30541, node, 'appendChild').appendChild(JSProf.LMC(30540, node.ownerDocument, 'createTextNode').createTextNode(JSProf.LRE(30539, value)));
            return JSProf.LRE(30542, node);
        }
        if (JSProf.LMC(30544, lang, 'isFunction').isFunction(JSProf.LRE(30543, value))) {
            // special case: assigning an event handler
            // clobber if we can
            var attrId = JSProf.LGE(30545, node, '_attrId')[_attrId];
            if (!JSProf.LRE(30546, attrId)) {
                attrId = JSProf.LWR(30547, attrId, _ctr++);
                JSProf.LPE(30549, node, '_attrId')[_attrId] = JSProf.LRPE(30549, JSProf.LRE(30548, attrId));
            }
            if (!JSProf.LGE(30550, _evtHdlrMap, 'attrId')[attrId]) {
                JSProf.LPE(30552, _evtHdlrMap, 'attrId')[attrId] = JSProf.LRPE(30552, JSProf.LNE(30551, {}, 11));
            }
            var h = JSProf.LGE(30553, _evtHdlrMap[attrId], 'propName')[propName];
            if (JSProf.LRE(30554, h)) {
                //h.remove();
                JSProf.LMC(30556, conn, 'disconnect').disconnect(JSProf.LRE(30555, h));
            } else {
                try {
                    delete node[propName];
                } catch (e) {
                }
            }
            // ensure that event objects are normalized, etc.
            if (JSProf.LRE(30557, value)) {
                //_evtHdlrMap[attrId][propName] = on(node, propName, value);
                JSProf.LPE(30562, _evtHdlrMap[attrId], 'propName')[propName] = JSProf.LRPE(30562, JSProf.LMC(30561, conn, 'connect').connect(JSProf.LRE(30558, node), JSProf.LRE(30559, propName), JSProf.LRE(30560, value)));
            } else {
                node[propName] = null;
            }
            return JSProf.LRE(30563, node);    // DomNode
        }
        JSProf.LPE(30565, node, 'propName')[propName] = JSProf.LRPE(30565, JSProf.LRE(30564, value));
        return JSProf.LRE(30566, node);    // DomNode
    }, 12));
}, 12));