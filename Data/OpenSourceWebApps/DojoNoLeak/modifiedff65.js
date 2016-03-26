JSProf.LFC(23530, define, false)(JSProf.LNE(23335, [
    "./sniff",
    "./dom"
], 10), JSProf.LNF(23529, function (has, dom) {
    JSProf.LFD(23528, _toStyleValue);
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
    var getComputedStyle, style = JSProf.LNE(23336, {}, 11);
    if (JSProf.LFC(23337, has, false)("webkit")) {
        getComputedStyle = JSProf.LWR(23352, getComputedStyle, JSProf.LNF(23351, function (node) {
            var s;
            if (JSProf.LGD(23338, node, 'nodeType').nodeType == 1) {
                var dv = JSProf.LGD(23339, node.ownerDocument, 'defaultView').defaultView;
                s = JSProf.LWR(23342, s, JSProf.LMC(23341, dv, 'getComputedStyle').getComputedStyle(JSProf.LRE(23340, node), null));
                if (!JSProf.LRE(23343, s) && JSProf.LGD(23344, node, 'style').style) {
                    JSProf.LPD(23345, node.style, 'display').display = JSProf.LRSP(23345, "");
                    s = JSProf.LWR(23348, s, JSProf.LMC(23347, dv, 'getComputedStyle').getComputedStyle(JSProf.LRE(23346, node), null));
                }
            }
            return JSProf.LRE(23349, s) || JSProf.LNE(23350, {}, 11);
        }, 12));
    } else if (JSProf.LFC(23353, has, false)("ie") && (JSProf.LFC(23354, has, false)("ie") < 9 || JSProf.LFC(23355, has, false)("quirks"))) {
        getComputedStyle = JSProf.LWR(23361, getComputedStyle, JSProf.LNF(23360, function (node) {
            // IE (as of 7) doesn't expose Element like sane browsers
            // currentStyle can be null on IE8!
            return JSProf.LGD(23356, node, 'nodeType').nodeType == 1 && JSProf.LGD(23357, node, 'currentStyle').currentStyle ? JSProf.LGD(23358, node, 'currentStyle').currentStyle : JSProf.LNE(23359, {}, 11);
        }, 12));
    } else {
        getComputedStyle = JSProf.LWR(23367, getComputedStyle, JSProf.LNF(23366, function (node) {
            return JSProf.LGD(23362, node, 'nodeType').nodeType == 1 ? JSProf.LMC(23364, node.ownerDocument.defaultView, 'getComputedStyle').getComputedStyle(JSProf.LRE(23363, node), null) : JSProf.LNE(23365, {}, 11);
        }, 12));
    }
    JSProf.LPD(23369, style, 'getComputedStyle').getComputedStyle = JSProf.LRSP(23369, JSProf.LRE(23368, getComputedStyle));
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
    if (!JSProf.LFC(23370, has, false)("ie")) {
        toPixel = JSProf.LWR(23374, toPixel, JSProf.LNF(23373, function (element, value) {
            // style values can be floats, client code may want
            // to round for integer pixels.
            return JSProf.LFC(23372, parseFloat, false)(JSProf.LRE(23371, value)) || 0;
        }, 12));
    } else {
        toPixel = JSProf.LWR(23399, toPixel, JSProf.LNF(23398, function (element, avalue) {
            if (!JSProf.LRE(23375, avalue)) {
                return 0;
            }
            // on IE7, medium is usually 4 pixels
            if (JSProf.LRE(23376, avalue) == "medium") {
                return 4;
            }
            // style values can be floats, client code may
            // want to round this value for integer pixels.
            if (JSProf.LGD(23377, avalue, 'slice').slice && JSProf.LMC(23378, avalue, 'slice').slice(-2) == 'px') {
                return JSProf.LFC(23380, parseFloat, false)(JSProf.LRE(23379, avalue));
            }
            var s = JSProf.LGD(23381, element, 'style').style, rs = JSProf.LGD(23382, element, 'runtimeStyle').runtimeStyle, cs = JSProf.LGD(23383, element, 'currentStyle').currentStyle, sLeft = JSProf.LGD(23384, s, 'left').left, rsLeft = JSProf.LGD(23385, rs, 'left').left;
            JSProf.LPD(23387, rs, 'left').left = JSProf.LRSP(23387, JSProf.LGD(23386, cs, 'left').left);
            try {
                // 'avalue' may be incompatible with style.left, which can cause IE to throw
                // this has been observed for border widths using "thin", "medium", "thick" constants
                // those particular constants could be trapped by a lookup
                // but perhaps there are more
                JSProf.LPD(23389, s, 'left').left = JSProf.LRSP(23389, JSProf.LRE(23388, avalue));
                avalue = JSProf.LWR(23391, avalue, JSProf.LGD(23390, s, 'pixelLeft').pixelLeft);
            } catch (e) {
                avalue = JSProf.LWR(23392, avalue, 0);
            }
            JSProf.LPD(23394, s, 'left').left = JSProf.LRSP(23394, JSProf.LRE(23393, sLeft));
            JSProf.LPD(23396, rs, 'left').left = JSProf.LRSP(23396, JSProf.LRE(23395, rsLeft));
            return JSProf.LRE(23397, avalue);
        }, 12));
    }
    JSProf.LPD(23401, style, 'toPixelValue').toPixelValue = JSProf.LRSP(23401, JSProf.LRE(23400, toPixel));
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
    var af = JSProf.LNF(23406, function (n, f) {
            try {
                return JSProf.LMC(23403, n.filters, 'item').item(JSProf.LRE(23402, astr));
            } catch (e) {
                return JSProf.LRE(23404, f) ? JSProf.LNE(23405, {}, 11) : null;
            }
        }, 12);
    var _getOpacity = JSProf.LFC(23407, has, false)("ie") < 9 || JSProf.LFC(23408, has, false)("ie") < 10 && JSProf.LFC(23409, has, false)("quirks") ? JSProf.LNF(23413, function (node) {
            try {
                return JSProf.LGD(23412, JSProf.LFC(23411, af, false)(JSProf.LRE(23410, node)), 'Opacity').Opacity / 100;    // Number
            } catch (e) {
                return 1;    // Number
            }
        }, 12) : JSProf.LNF(23417, function (node) {
            return JSProf.LGD(23416, JSProf.LFC(23415, getComputedStyle, false)(JSProf.LRE(23414, node)), 'opacity').opacity;
        }, 12);
    var _setOpacity = JSProf.LFC(23418, has, false)("ie") < 9 || JSProf.LFC(23419, has, false)("ie") < 10 && JSProf.LFC(23420, has, false)("quirks") ? JSProf.LNF(23454, function (node, opacity) {
            if (JSProf.LRE(23421, opacity) === "") {
                opacity = JSProf.LWR(23422, opacity, 1);
            }
            var ov = JSProf.LRE(23423, opacity) * 100, fullyOpaque = JSProf.LRE(23424, opacity) === 1;
            // on IE7 Alpha(Filter opacity=100) makes text look fuzzy so disable it altogether (bug #2661),
            // but still update the opacity value so we can get a correct reading if it is read later:
            // af(node, 1).Enabled = !fullyOpaque;
            if (JSProf.LRE(23425, fullyOpaque)) {
                JSProf.LPD(23426, node.style, 'zoom').zoom = JSProf.LRSP(23426, "");
                if (JSProf.LFC(23428, af, false)(JSProf.LRE(23427, node))) {
                    JSProf.LPD(23433, node.style, 'filter').filter = JSProf.LRSP(23433, JSProf.LMC(23432, node.style.filter, 'replace').replace(JSProf.LNE(23431, new (JSProf.LFC(23430, RegExp, true))("\\s*progid:" + JSProf.LRE(23429, astr) + "\\([^\\)]+?\\)", "i"), 'RegExp'), ""));
                }
            } else {
                JSProf.LPD(23434, node.style, 'zoom').zoom = JSProf.LRSP(23434, 1);
                if (JSProf.LFC(23436, af, false)(JSProf.LRE(23435, node))) {
                    JSProf.LPD(23440, JSProf.LFC(23438, af, false)(JSProf.LRE(23437, node), 1), 'Opacity').Opacity = JSProf.LRSP(23440, JSProf.LRE(23439, ov));
                } else {
                    node.style.filter += " progid:" + JSProf.LRE(23441, astr) + "(Opacity=" + JSProf.LRE(23442, ov) + ")";
                }
                JSProf.LPD(23445, JSProf.LFC(23444, af, false)(JSProf.LRE(23443, node), 1), 'Enabled').Enabled = JSProf.LRSP(23445, true);
            }
            if (node.tagName.toLowerCase() == "tr") {
                for (var td = JSProf.LGD(23446, node, 'firstChild').firstChild; JSProf.LRE(23447, td); td = JSProf.LWR(23449, td, JSProf.LGD(23448, td, 'nextSibling').nextSibling)) {
                    if (td.tagName.toLowerCase() == "td") {
                        JSProf.LFC(23452, _setOpacity, false)(JSProf.LRE(23450, td), JSProf.LRE(23451, opacity));
                    }
                }
            }
            return JSProf.LRE(23453, opacity);
        }, 12) : JSProf.LNF(23457, function (node, opacity) {
            return JSProf.LPD(23456, node.style, 'opacity').opacity = JSProf.LRSP(23456, JSProf.LRE(23455, opacity));
        }, 12);
    var _pixelNamesCache = JSProf.LNE(23458, {
            left: true,
            top: true
        }, 11);
    var _pixelRegExp = /margin|padding|width|height|max|min|offset/;
    // |border
    function _toStyleValue(node, type, value) {
        //TODO: should we really be doing string case conversion here? Should we cache it? Need to profile!
        type = JSProf.LWR(23459, type, type.toLowerCase());
        if (JSProf.LFC(23460, has, false)("ie") || JSProf.LFC(23461, has, false)("trident")) {
            if (JSProf.LRE(23462, value) == "auto") {
                if (JSProf.LRE(23463, type) == "height") {
                    return JSProf.LGD(23464, node, 'offsetHeight').offsetHeight;
                }
                if (JSProf.LRE(23465, type) == "width") {
                    return JSProf.LGD(23466, node, 'offsetWidth').offsetWidth;
                }
            }
            if (JSProf.LRE(23467, type) == "fontweight") {
                switch (JSProf.LRE(23468, value)) {
                case 700:
                    return "bold";
                case 400:
                default:
                    return "normal";
                }
            }
        }
        if (!(JSProf.LRE(23469, type) in JSProf.LRE(23470, _pixelNamesCache))) {
            JSProf.LPE(23473, _pixelNamesCache, 'type')[type] = JSProf.LRPE(23473, JSProf.LMC(23472, _pixelRegExp, 'test').test(JSProf.LRE(23471, type)));
        }
        return JSProf.LGE(23474, _pixelNamesCache, 'type')[type] ? JSProf.LFC(23477, toPixel, false)(JSProf.LRE(23475, node), JSProf.LRE(23476, value)) : JSProf.LRE(23478, value);
    }
    var _floatAliases = JSProf.LNE(23479, {
            cssFloat: 1,
            styleFloat: 1,
            "float": 1
        }, 11);
    // public API
    JSProf.LPD(23502, style, 'get').get = JSProf.LRSP(23502, JSProf.LNF(23501, function getStyle(node, name) {
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
        var n = JSProf.LMC(23481, dom, 'byId').byId(JSProf.LRE(23480, node)), l = JSProf.LGD(23482, arguments, 'length').length, op = JSProf.LRE(23483, name) == "opacity";
        if (JSProf.LRE(23484, l) == 2 && JSProf.LRE(23485, op)) {
            return JSProf.LFC(23487, _getOpacity, false)(JSProf.LRE(23486, n));
        }
        name = JSProf.LWR(23491, name, JSProf.LGE(23488, _floatAliases, 'name')[name] ? "cssFloat" in JSProf.LGD(23489, n, 'style').style ? "cssFloat" : "styleFloat" : JSProf.LRE(23490, name));
        var s = JSProf.LMC(23493, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(23492, n));
        return JSProf.LRE(23494, l) == 1 ? JSProf.LRE(23495, s) : JSProf.LFC(23500, _toStyleValue, false)(JSProf.LRE(23496, n), JSProf.LRE(23497, name), JSProf.LGE(23498, s, 'name')[name] || JSProf.LGE(23499, n.style, 'name')[name]);    /* CSS2Properties||String||Number */
    }, 12));
    JSProf.LPD(23526, style, 'set').set = JSProf.LRSP(23526, JSProf.LNF(23525, function setStyle(node, name, value) {
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
        var n = JSProf.LMC(23504, dom, 'byId').byId(JSProf.LRE(23503, node)), l = JSProf.LGD(23505, arguments, 'length').length, op = JSProf.LRE(23506, name) == "opacity";
        name = JSProf.LWR(23510, name, JSProf.LGE(23507, _floatAliases, 'name')[name] ? "cssFloat" in JSProf.LGD(23508, n, 'style').style ? "cssFloat" : "styleFloat" : JSProf.LRE(23509, name));
        if (JSProf.LRE(23511, l) == 3) {
            return JSProf.LRE(23512, op) ? JSProf.LFC(23515, _setOpacity, false)(JSProf.LRE(23513, n), JSProf.LRE(23514, value)) : JSProf.LPE(23517, n.style, 'name')[name] = JSProf.LRPE(23517, JSProf.LRE(23516, value));    // Number
        }
        for (var x in JSProf.LRE(23518, name)) {
            JSProf.LMC(23522, style, 'set').set(JSProf.LRE(23519, node), JSProf.LRE(23520, x), JSProf.LGE(23521, name, 'x')[x]);
        }
        return JSProf.LMC(23524, style, 'getComputedStyle').getComputedStyle(JSProf.LRE(23523, n));
    }, 12));
    return JSProf.LRE(23527, style);
}, 12));