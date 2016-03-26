JSProf.LFC(23619, define, false)(JSProf.LNE(23424, [
    "./sniff",
    "./dom"
], 10), JSProf.LNF(23618, function (has, dom) {
    JSProf.LFD(23617, _toStyleValue);
    // module:
    //		dojo/dom-style
    // =============================
    // Style Functions
    // =============================
    // getComputedStyle drives most of the style code.
    // Wherever possible, reuse the returned object.
    //
    // API functions below that need to access computed styles accept an
    // optional computedStyle parameter.
    // If this parameter is omitted, the functions will call getComputedStyle themselves.
    // This way, calling code can access computedStyle once, and then pass the reference to
    // multiple API functions.
    // Although we normally eschew argument validation at this
    // level, here we test argument 'node' for (duck)type,
    // by testing nodeType, ecause 'document' is the 'parentNode' of 'body'
    // it is frequently sent to this function even
    // though it is not Element.
    var getComputedStyle, style = JSProf.LNE(23425, {}, 11);
    if (JSProf.LFC(23426, has, false)("webkit")) {
        getComputedStyle = JSProf.LWR(23441, getComputedStyle, JSProf.LNF(23440, function (node) {
            var s;
            if (JSProf.LGD(23427, node, 'nodeType').nodeType == 1) {
                var dv = JSProf.LGD(23428, node.ownerDocument, 'defaultView').defaultView;
                s = JSProf.LWR(23431, s, JSProf.LMC(23430, dv, 'getComputedStyle').getComputedStyle(JSProf.LRE(23429, node), null));
                if (!JSProf.LRE(23432, s) && JSProf.LGD(23433, node, 'style').style) {
                    JSProf.LPD(23434, node.style, 'display').display = JSProf.LRSP(23434, "");
                    s = JSProf.LWR(23437, s, JSProf.LMC(23436, dv, 'getComputedStyle').getComputedStyle(JSProf.LRE(23435, node), null));
                }
            }
            return JSProf.LRE(23438, s) || JSProf.LNE(23439, {}, 11);
        }, 12));
    } else if (JSProf.LFC(23442, has, false)("ie") && (JSProf.LFC(23443, has, false)("ie") < 9 || JSProf.LFC(23444, has, false)("quirks"))) {
        getComputedStyle = JSProf.LWR(23450, getComputedStyle, JSProf.LNF(23449, function (node) {
            // IE (as of 7) doesn't expose Element like sane browsers
            // currentStyle can be null on IE8!
            return JSProf.LGD(23445, node, 'nodeType').nodeType == 1 && JSProf.LGD(23446, node, 'currentStyle').currentStyle ? JSProf.LGD(23447, node, 'currentStyle').currentStyle : JSProf.LNE(23448, {}, 11);
        }, 12));
    } else {
        getComputedStyle = JSProf.LWR(23456, getComputedStyle, JSProf.LNF(23455, function (node) {
            return JSProf.LGD(23451, node, 'nodeType').nodeType == 1 ? JSProf.LMC(23453, node.ownerDocument.defaultView, 'getComputedStyle').getComputedStyle(JSProf.LRE(23452, node), null) : JSProf.LNE(23454, {}, 11);
        }, 12));
    }
    JSProf.LPD(23458, style, 'getComputedStyle').getComputedStyle = JSProf.LRSP(23458, JSProf.LRE(23457, getComputedStyle));
    /*=====
    	style.getComputedStyle = function(node){
    		// summary:
    		//		Returns a "computed style" object.
    		//
    		// description:
    		//		Gets a "computed style" object which can be used to gather
    		//		information about the current state of the rendered node.
    		//
    		//		Note that this may behave differently on different browsers.
    		//		Values may have different formats and value encodings across
    		//		browsers.
    		//
    		//		Note also that this method is expensive.  Wherever possible,
    		//		reuse the returned object.
    		//
    		//		Use the dojo/dom-style.get() method for more consistent (pixelized)
    		//		return values.
    		//
    		// node: DOMNode
    		//		A reference to a DOM node. Does NOT support taking an
    		//		ID string for speed reasons.
    		// example:
    		//	|	require(["dojo/dom-style", "dojo/dom"], function(domStyle, dom){
    		//	|		domStyle.getComputedStyle(dom.byId('foo')).borderWidth;
    		//	|	});
    		//
    		// example:
    		//		Reusing the returned object, avoiding multiple lookups:
    		//	|	require(["dojo/dom-style", "dojo/dom"], function(domStyle, dom){
    		//	|		var cs = domStyle.getComputedStyle(dom.byId("someNode"));
    		//	|		var w = cs.width, h = cs.height;
    		//	|	});
    		return; // CSS2Properties
    	};
    	=====*/
    var toPixel;
    if (!JSProf.LFC(23459, has, false)("ie")) {
        toPixel = JSProf.LWR(23463, toPixel, JSProf.LNF(23462, function (element, value) {
            // style values can be floats, client code may want
            // to round for integer pixels.
            return JSProf.LFC(23461, parseFloat, false)(JSProf.LRE(23460, value)) || 0;
        }, 12));
    } else {
        toPixel = JSProf.LWR(23488, toPixel, JSProf.LNF(23487, function (element, avalue) {
            if (!JSProf.LRE(23464, avalue)) {
                return 0;
            }
            // on IE7, medium is usually 4 pixels
            if (JSProf.LRE(23465, avalue) == "medium") {
                return 4;
            }
            // style values can be floats, client code may
            // want to round this value for integer pixels.
            if (JSProf.LGD(23466, avalue, 'slice').slice && JSProf.LMC(23467, avalue, 'slice').slice(-2) == 'px') {
                return JSProf.LFC(23469, parseFloat, false)(JSProf.LRE(23468, avalue));
            }
            var s = JSProf.LGD(23470, element, 'style').style, rs = JSProf.LGD(23471, element, 'runtimeStyle').runtimeStyle, cs = JSProf.LGD(23472, element, 'currentStyle').currentStyle, sLeft = JSProf.LGD(23473, s, 'left').left, rsLeft = JSProf.LGD(23474, rs, 'left').left;
            JSProf.LPD(23476, rs, 'left').left = JSProf.LRSP(23476, JSProf.LGD(23475, cs, 'left').left);
            try {
                // 'avalue' may be incompatible with style.left, which can cause IE to throw
                // this has been observed for border widths using "thin", "medium", "thick" constants
                // those particular constants could be trapped by a lookup
                // but perhaps there are more
                JSProf.LPD(23478, s, 'left').left = JSProf.LRSP(23478, JSProf.LRE(23477, avalue));
                avalue = JSProf.LWR(23480, avalue, JSProf.LGD(23479, s, 'pixelLeft').pixelLeft);
            } catch (e) {
                avalue = JSProf.LWR(23481, avalue, 0);
            }
            JSProf.LPD(23483, s, 'left').left = JSProf.LRSP(23483, JSProf.LRE(23482, sLeft));
            JSProf.LPD(23485, rs, 'left').left = JSProf.LRSP(23485, JSProf.LRE(23484, rsLeft));
            return JSProf.LRE(23486, avalue);
        }, 12));
    }
    JSProf.LPD(23490, style, 'toPixelValue').toPixelValue = JSProf.LRSP(23490, JSProf.LRE(23489, toPixel));
    /*=====
    	style.toPixelValue = function(node, value){
    		// summary:
    		//		converts style value to pixels on IE or return a numeric value.
    		// node: DOMNode
    		// value: String
    		// returns: Number
    	};
    	=====*/
    // FIXME: there opacity quirks on FF that we haven't ported over. Hrm.
    var astr = "DXImageTransform.Microsoft.Alpha";
    var af = JSProf.LNF(23495, function (n, f) {
            try {
                return JSProf.LMC(23492, n.filters, 'item').item(JSProf.LRE(23491, astr));
            } catch (e) {
                return JSProf.LRE(23493, f) ? JSProf.LNE(23494, {}, 11) : null;
            }
        }, 12);
    var _getOpacity = JSProf.LFC(23496, has, false)("ie") < 9 || JSProf.LFC(23497, has, false)("ie") < 10 && JSProf.LFC(23498, has, false)("quirks") ? JSProf.LNF(23502, function (node) {
            try {
                return JSProf.LGD(23501, JSProf.LFC(23500, af, false)(JSProf.LRE(23499, node)), 'Opacity').Opacity / 100;    // Number
            } catch (e) {
                return 1;    // Number
            }
        }, 12) : JSProf.LNF(23506, function (node) {
            return JSProf.LGD(23505, JSProf.LFC(23504, getComputedStyle, false)(JSProf.LRE(23503, node)), 'opacity').opacity;
        }, 12);
    var _setOpacity = JSProf.LFC(23507, has, false)("ie") < 9 || JSProf.LFC(23508, has, false)("ie") < 10 && JSProf.LFC(23509, has, false)("quirks") ? JSProf.LNF(23543, function (node, opacity) {
            if (JSProf.LRE(23510, opacity) === "") {
                opacity = JSProf.LWR(23511, opacity, 1);
            }
            var ov = JSProf.LRE(23512, opacity) * 100, fullyOpaque = JSProf.LRE(23513, opacity) === 1;
            // on IE7 Alpha(Filter opacity=100) makes text look fuzzy so disable it altogether (bug #2661),
            // but still update the opacity value so we can get a correct reading if it is read later:
            // af(node, 1).Enabled = !fullyOpaque;
            if (JSProf.LRE(23514, fullyOpaque)) {
                JSProf.LPD(23515, node.style, 'zoom').zoom = JSProf.LRSP(23515, "");
                if (JSProf.LFC(23517, af, false)(JSProf.LRE(23516, node))) {
                    JSProf.LPD(23522, node.style, 'filter').filter = JSProf.LRSP(23522, JSProf.LMC(23521, node.style.filter, 'replace').replace(JSProf.LNE(23520, new (JSProf.LFC(23519, RegExp, true))("\\s*progid:" + JSProf.LRE(23518, astr) + "\\([^\\)]+?\\)", "i"), 'RegExp'), ""));
                }
            } else {
                JSProf.LPD(23523, node.style, 'zoom').zoom = JSProf.LRSP(23523, 1);
                if (JSProf.LFC(23525, af, false)(JSProf.LRE(23524, node))) {
                    JSProf.LPD(23529, JSProf.LFC(23527, af, false)(JSProf.LRE(23526, node), 1), 'Opacity').Opacity = JSProf.LRSP(23529, JSProf.LRE(23528, ov));
                } else {
                    node.style.filter += " progid:" + JSProf.LRE(23530, astr) + "(Opacity=" + JSProf.LRE(23531, ov) + ")";
                }
                JSProf.LPD(23534, JSProf.LFC(23533, af, false)(JSProf.LRE(23532, node), 1), 'Enabled').Enabled = JSProf.LRSP(23534, true);
            }
            if (node.tagName.toLowerCase() == "tr") {
                for (var td = JSProf.LGD(23535, node, 'firstChild').firstChild; JSProf.LRE(23536, td); td = JSProf.LWR(23538, td, JSProf.LGD(23537, td, 'nextSibling').nextSibling)) {
                    if (td.tagName.toLowerCase() == "td") {
                        JSProf.LFC(23541, _setOpacity, false)(JSProf.LRE(23539, td), JSProf.LRE(23540, opacity));
                    }
                }
            }
            return JSProf.LRE(23542, opacity);
        }, 12) : JSProf.LNF(23546, function (node, opacity) {
            return JSProf.LPD(23545, node.style, 'opacity').opacity = JSProf.LRSP(23545, JSProf.LRE(23544, opacity));
        }, 12);
    var _pixelNamesCache = JSProf.LNE(23547, {
            left: true,
            top: true
        }, 11);
    var _pixelRegExp = /margin|padding|width|height|max|min|offset/;
    // |border
    function _toStyleValue(node, type, value) {
        //TODO: should we really be doing string case conversion here? Should we cache it? Need to profile!
        type = JSProf.LWR(23548, type, type.toLowerCase());
        if (JSProf.LFC(23549, has, false)("ie") || JSProf.LFC(23550, has, false)("trident")) {
            if (JSProf.LRE(23551, value) == "auto") {
                if (JSProf.LRE(23552, type) == "height") {
                    return JSProf.LGD(23553, node, 'offsetHeight').offsetHeight;
                }
                if (JSProf.LRE(23554, type) == "width") {
                    return JSProf.LGD(23555, node, 'offsetWidth').offsetWidth;
                }
            }
            if (JSProf.LRE(23556, type) == "fontweight") {
                switch (JSProf.LRE(23557, value)) {
                case 700:
                    return "bold";
                case 400:
                default:
                    return "normal";
                }
            }
        }
        if (!(JSProf.LRE(23558, type) in JSProf.LRE(23559, _pixelNamesCache))) {
            JSProf.LPE(23562, _pixelNamesCache, 'type')[type] = JSProf.LRPE(23562, JSProf.LMC(23561, _pixelRegExp, 'test').test(JSProf.LRE(23560, type)));
        }
        return JSProf.LGE(23563, _pixelNamesCache, 'type')[type] ? JSProf.LFC(23566, toPixel, false)(JSProf.LRE(23564, node), JSProf.LRE(23565, value)) : JSProf.LRE(23567, value);
    }
    var _floatAliases = JSProf.LNE(23568, {
            cssFloat: 1,
            styleFloat: 1,
            "float": 1
        }, 11);
    // public API
    JSProf.LPD(23591, style, 'get').get = JSProf.LRSP(23591, JSProf.LNF(23590, function getStyle(node, name) {
        // summary:
        //		Accesses styles on a node.
        // description:
        //		Getting the style value uses the computed style for the node, so the value
        //		will be a calculated value, not just the immediate node.style value.
        //		Also when getting values, use specific style names,
        //		like "borderBottomWidth" instead of "border" since compound values like
        //		"border" are not necessarily reflected as expected.
        //		If you want to get node dimensions, use `dojo/dom-geometry.getMarginBox()`,
        //		`dojo/dom-geometry.getContentBox()` or `dojo/dom-geometry.getPosition()`.
        // node: DOMNode|String
        //		id or reference to node to get style for
        // name: String?
        //		the style property to get
        // example:
        //		Passing only an ID or node returns the computed style object of
        //		the node:
        //	|	require(["dojo/dom-style", "dojo/dom"], function(domStyle, dom){
        //	|		domStyle.get("thinger");
        //	|	});
        // example:
        //		Passing a node and a style property returns the current
        //		normalized, computed value for that property:
        //	|	require(["dojo/dom-style", "dojo/dom"], function(domStyle, dom){
        //	|		domStyle.get("thinger", "opacity"); // 1 by default
        //	|	});
        var n = JSProf.LMC(23570, dom, 'byId').byId(JSProf.LRE(23569, node)), l = JSProf.LGD(23571, arguments, 'length').length, op = JSProf.LRE(23572, name) == "opacity";
        if (JSProf.LRE(23573, l) == 2 && JSProf.LRE(23574, op)) {
            return JSProf.LFC(23576, _getOpacity, false)(JSProf.LRE(23575, n));
        }
        name = JSProf.LWR(23580, name, JSProf.LGE(23577, _floatAliases, 'name')[name] ? "cssFloat" in JSProf.LGD(23578, n, 'style').style ? "cssFloat" : "styleFloat" : JSProf.LRE(23579, name));
        var s = JSProf.LMC(23582, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(23581, n));
        return JSProf.LRE(23583, l) == 1 ? JSProf.LRE(23584, s) : JSProf.LFC(23589, _toStyleValue, false)(JSProf.LRE(23585, n), JSProf.LRE(23586, name), JSProf.LGE(23587, s, 'name')[name] || JSProf.LGE(23588, n.style, 'name')[name]);    /* CSS2Properties||String||Number */
    }, 12));
    JSProf.LPD(23615, style, 'set').set = JSProf.LRSP(23615, JSProf.LNF(23614, function setStyle(node, name, value) {
        // summary:
        //		Sets styles on a node.
        // node: DOMNode|String
        //		id or reference to node to set style for
        // name: String|Object
        //		the style property to set in DOM-accessor format
        //		("borderWidth", not "border-width") or an object with key/value
        //		pairs suitable for setting each property.
        // value: String?
        //		If passed, sets value on the node for style, handling
        //		cross-browser concerns.  When setting a pixel value,
        //		be sure to include "px" in the value. For instance, top: "200px".
        //		Otherwise, in some cases, some browsers will not apply the style.
        //
        // example:
        //		Passing a node, a style property, and a value changes the
        //		current display of the node and returns the new computed value
        //	|	require(["dojo/dom-style"], function(domStyle){
        //	|		domStyle.set("thinger", "opacity", 0.5); // == 0.5
        //	|	});
        //
        // example:
        //		Passing a node, an object-style style property sets each of the values in turn and returns the computed style object of the node:
        //	|	require(["dojo/dom-style"], function(domStyle){
        //	|		domStyle.set("thinger", {
        //	|			"opacity": 0.5,
        //	|			"border": "3px solid black",
        //	|			"height": "300px"
        //	|		});
        //	|	});
        //
        // example:
        //		When the CSS style property is hyphenated, the JavaScript property is camelCased.
        //		font-size becomes fontSize, and so on.
        //	|	require(["dojo/dom-style", "dojo/dom"], function(domStyle, dom){
        //	|		domStyle.set("thinger",{
        //	|			fontSize:"14pt",
        //	|			letterSpacing:"1.2em"
        //	|		});
        //	|	});
        //
        // example:
        //		dojo/NodeList implements .style() using the same syntax, omitting the "node" parameter, calling
        //		dojo/dom-style.get() on every element of the list. See: `dojo/query` and `dojo/NodeList`
        //	|	require(["dojo/dom-style", "dojo/query", "dojo/NodeList-dom"],
        //	|	function(domStyle, query){
        //	|		query(".someClassName").style("visibility","hidden");
        //	|		// or
        //	|		query("#baz > div").style({
        //	|			opacity:0.75,
        //	|			fontSize:"13pt"
        //	|		});
        //	|	});
        var n = JSProf.LMC(23593, dom, 'byId').byId(JSProf.LRE(23592, node)), l = JSProf.LGD(23594, arguments, 'length').length, op = JSProf.LRE(23595, name) == "opacity";
        name = JSProf.LWR(23599, name, JSProf.LGE(23596, _floatAliases, 'name')[name] ? "cssFloat" in JSProf.LGD(23597, n, 'style').style ? "cssFloat" : "styleFloat" : JSProf.LRE(23598, name));
        if (JSProf.LRE(23600, l) == 3) {
            return JSProf.LRE(23601, op) ? JSProf.LFC(23604, _setOpacity, false)(JSProf.LRE(23602, n), JSProf.LRE(23603, value)) : JSProf.LPE(23606, n.style, 'name')[name] = JSProf.LRPE(23606, JSProf.LRE(23605, value));    // Number
        }
        for (var x in JSProf.LRE(23607, name)) {
            JSProf.LMC(23611, style, 'set').set(JSProf.LRE(23608, node), JSProf.LRE(23609, x), JSProf.LGE(23610, name, 'x')[x]);
        }
        return JSProf.LMC(23613, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(23612, n));
    }, 12));
    return JSProf.LRE(23616, style);
}, 12));